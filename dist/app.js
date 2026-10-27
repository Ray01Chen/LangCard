/**
 * DOM controller: study, library, quizzes, and the custom-card editor.
 * Data flows from CARD_CATALOG -> language projection -> escaped HTML.
 * Persistent cards always use LangCardJson.record(); learning-pair fields belong
 * only to view state. No local action modifies the shared built-in catalog.
 */
(() => {
  'use strict';

  const LANGUAGES = window.LANGUAGES;
  const TOPIC_META = window.TOPIC_META;
  const UI_STRINGS = window.UI_STRINGS;
  const multilingual = window.LangCardLanguages;
  const cardJson = window.LangCardJson;
  const CATALOG = window.CARD_CATALOG;
  const STORAGE_KEY = 'langcard:v1';
  const $ = (selector) => document.querySelector(selector);
  const byId = (id) => document.getElementById(id);
  const language = (code) => LANGUAGES.find((item) => item.code === code);
  const escapeHtml = (value) =>
    String(value ?? '').replace(
      /[&<>"']/g,
      (character) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character],
    );
  const plain = (value, max = 300) =>
    String(value ?? '')
      .trim()
      .slice(0, max);
  /** Fisher–Yates preserves the caller's array and gives each quiz order equal weight. */
  function shuffled(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const other = Math.floor(Math.random() * (index + 1));
      [result[index], result[other]] = [result[other], result[index]];
    }
    return result;
  }

  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {};
  } catch {
    stored = {};
  }
  const safeCustomCards = Array.isArray(stored.customCards)
    ? stored.customCards.map((card) => cardJson.normalize(card)).filter(Boolean)
    : [];
  /** Upgrade old bare card IDs without losing the language they were learned in. */
  function migrateMastery(id) {
    if (id.includes(':')) return id;
    const old =
      (Array.isArray(stored.customCards) ? stored.customCards : []).find(
        (card) => card?.id === id,
      ) || CATALOG.find((card) => card.id === id);
    return `${old?.sourceLang || old?.lang || stored.pair?.target || 'th'}:${id}`;
  }
  // Persisted settings live beside transient navigation/quiz/editor state.
  // saveState() explicitly selects durable fields; DOM position and open dialogs are transient.
  const state = {
    base: language(stored.pair?.base) ? stored.pair.base : 'en',
    target: language(stored.pair?.target) ? stored.pair.target : 'th',
    uiLanguage: UI_STRINGS[stored.uiLanguage] ? stored.uiLanguage : 'zh',
    theme: ['forest', 'ocean', 'lavender', 'sunset'].includes(stored.theme)
      ? stored.theme
      : 'forest',
    level: ['all', 'beginner', 'intermediate', 'upper'].includes(stored.level)
      ? stored.level
      : 'all',
    kind: ['all', 'word', 'sentence'].includes(stored.kind) ? stored.kind : 'all',
    topic: 'all',
    index: 0,
    answerVisible: true,
    view: ['study', 'quiz', 'library'].includes(location.hash.slice(1))
      ? location.hash.slice(1)
      : 'study',
    search: '',
    libraryTopic: 'all',
    libraryLevel: 'all',
    libraryKind: ['all', 'word', 'sentence'].includes(stored.libraryKind)
      ? stored.libraryKind
      : 'all',
    libraryShown: 72,
    customCards: safeCustomCards,
    masteredIds: new Set(
      Array.isArray(stored.masteredIds)
        ? stored.masteredIds.filter((id) => typeof id === 'string').map(migrateMastery)
        : [],
    ),
    editingId: null,
    quizDirection: 'target-to-base',
    quiz: {
      phase: 'setup',
      items: [],
      index: 0,
      score: 0,
      options: [],
      selected: null,
      answered: false,
    },
  };
  if (state.base === state.target) state.target = state.base === 'th' ? 'en' : 'th';

  function t(key, values = {}) {
    const template = UI_STRINGS[state.uiLanguage]?.[key] || UI_STRINGS.zh[key] || key;
    return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
  }
  /** Update static labels and selectors; data contents retain their own language codes. */
  function applyLocale() {
    document.documentElement.lang = { zh: 'zh-Hant', en: 'en', th: 'th' }[state.uiLanguage];
    document.title = t('pageTitle');
    document.querySelector('meta[name="description"]').content = t('pageDescription');
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      node.placeholder = t(node.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      node.setAttribute('aria-label', t(node.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-title]').forEach((node) => {
      node.title = t(node.dataset.i18nTitle);
    });
    const pairOptions = LANGUAGES.map(
      ({ code }) => /* HTML */ `<option value="${code}">${escapeHtml(labelFor(code))}</option>`,
    ).join('');
    byId('baseLanguage').innerHTML = pairOptions;
    byId('targetLanguage').innerHTML = pairOptions;
    byId('baseLanguage').value = state.base;
    byId('targetLanguage').value = state.target;
    byId('uiLanguage').value = state.uiLanguage;
    byId('todayLabel').textContent = new Intl.DateTimeFormat(
      { zh: 'zh-TW', en: 'en-US', th: 'th-TH' }[state.uiLanguage],
      { month: 'long', day: 'numeric', weekday: 'long' },
    ).format(new Date());
    byId('breadcrumbText').textContent = t(
      { study: 'studyNav', quiz: 'quizNav', library: 'libraryNav' }[state.view],
    );
    if (byId('cardDialog').open) updateDialogLabels();
  }
  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    byId('themeSelect').value = state.theme;
    document.querySelector('meta[name="theme-color"]').content = {
      forest: '#173c35',
      ocean: '#1c3d5a',
      lavender: '#393451',
      sunset: '#5c372f',
    }[state.theme];
  }

  /** Serialize only persisted preferences/cards. Return false so callers can roll back edits. */

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          pair: { base: state.base, target: state.target },
          uiLanguage: state.uiLanguage,
          theme: state.theme,
          level: state.level,
          kind: state.kind,
          libraryKind: state.libraryKind,
          customCards: state.customCards.map(cardJson.record),
          masteredIds: [...state.masteredIds],
        }),
      );
      return true;
    } catch {
      toast(t('storageError'));
      return false;
    }
  }

  let toastTimer;
  function toast(message) {
    const node = byId('toast');
    node.textContent = message;
    node.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('is-visible'), 4300);
  }

  function topicLabel(topic) {
    return TOPIC_META[topic] ? t(`topic_${topic}`) : topic;
  }
  function topicSymbol(topic) {
    return TOPIC_META[topic]?.symbol || '✦';
  }
  /** Project concepts into the chosen pair; a local override wins over a published card of the same ID. */
  function pairCards(base = state.base, target = state.target) {
    const custom = state.customCards
      .map((card) => multilingual.project({ ...card, custom: true }, base, target))
      .filter(Boolean);
    const customIds = new Set(custom.map((card) => card.id));
    const starter = CATALOG.filter((card) => !customIds.has(card.id)).map((card) =>
      multilingual.project(card, base, target),
    );
    return [...starter, ...custom].filter(Boolean);
  }
  /** Apply study filters only. Library filters deliberately have independent state. */
  function filteredCards() {
    const cards = pairCards().filter(
      (card) =>
        (state.level === 'all' || card.level === state.level) &&
        (state.kind === 'all' || card.kind === state.kind),
    );
    return state.topic === 'all' ? cards : cards.filter((card) => card.topic === state.topic);
  }
  function topicEntries(cards = pairCards()) {
    const counts = new Map();
    cards.forEach((card) => counts.set(card.topic, (counts.get(card.topic) || 0) + 1));
    return [...counts.entries()].map(([key, count]) => ({ key, count }));
  }
  function labelFor(code) {
    return window.UI_LANGUAGE_NAMES?.[state.uiLanguage]?.[code] || language(code)?.name || code;
  }
  function masteryKey(card) {
    return `${state.target}:${card.id}`;
  }
  function isMastered(card) {
    return state.masteredIds.has(masteryKey(card));
  }

  /** Derive filter counts from the current pair and the other selected filters. */

  function renderTopics() {
    const allCards = pairCards();
    const levels = ['all', 'beginner', 'intermediate', 'upper'];
    byId('levelList').innerHTML = levels
      .map((level) => {
        const count = allCards.filter(
          (card) =>
            (level === 'all' || card.level === level) &&
            (state.kind === 'all' || card.kind === state.kind),
        ).length;
        return /* HTML */ `<button
          type="button"
          class="level-pill ${state.level === level ? 'is-active' : ''}"
          data-level="${level}"
          aria-pressed="${state.level === level}"
          ${count ? '' : 'disabled'}
        >
          ${escapeHtml(t(level === 'all' ? 'levelAll' : `level${level[0].toUpperCase()}${level.slice(1)}`))}<span
            >${count}</span
          >
        </button>`;
      })
      .join('');
    byId('kindList').innerHTML = ['all', 'word', 'sentence']
      .map((kind) => {
        const count = allCards.filter(
          (card) =>
            (kind === 'all' || card.kind === kind) &&
            (state.level === 'all' || card.level === state.level),
        ).length;
        return /* HTML */ `<button
          type="button"
          class="level-pill ${state.kind === kind ? 'is-active' : ''}"
          data-kind="${kind}"
          aria-pressed="${state.kind === kind}"
          ${count ? '' : 'disabled'}
        >
          ${escapeHtml(t(kind === 'all' ? 'kindAll' : `kind${kind[0].toUpperCase()}${kind.slice(1)}`))}<span
            >${count}</span
          >
        </button>`;
      })
      .join('');
    const cards = allCards.filter(
      (card) =>
        (state.level === 'all' || card.level === state.level) &&
        (state.kind === 'all' || card.kind === state.kind),
    );
    const entries = [{ key: 'all', count: cards.length }, ...topicEntries(cards)];
    if (!entries.some(({ key }) => key === state.topic)) {
      state.topic = 'all';
      state.index = 0;
    }
    byId('topicTotal').textContent = t('cardsCount', { count: cards.length });
    byId('mobileTopicSelect').innerHTML = entries
      .map(
        ({ key, count }) =>
          /* HTML */ `<option value="${escapeHtml(key)}">
            ${escapeHtml(key === 'all' ? t('allTopics') : topicLabel(key))} · ${count}
          </option>`,
      )
      .join('');
    byId('mobileTopicSelect').value = state.topic;
    byId('topicList').innerHTML = entries
      .map(
        ({ key, count }) => `
      <button type="button" class="topic-pill ${state.topic === key ? 'is-active' : ''}" data-topic="${escapeHtml(key)}" aria-pressed="${state.topic === key}">
        <span class="topic-symbol" aria-hidden="true">${key === 'all' ? '▦' : escapeHtml(topicSymbol(key))}</span>
        <span>${key === 'all' ? escapeHtml(t('allTopics')) : escapeHtml(topicLabel(key))}</span>
        <span class="topic-count">${count}</span>
      </button>`,
      )
      .join('');
  }

  /** Prefer authored token meanings in the selected base language, then dictionary/segmenter fallbacks. */

  function breakdownItems(card, field = 'term') {
    const manual = card.forms?.[state.target]?.[field === 'term' ? 'tokens' : 'exampleTokens'];
    if (manual?.length)
      return manual.map((token) => [
        token.text,
        token.meanings[state.base] || multilingual.lookup(token.text, state.target, state.base),
        multilingual.reading(token.text, state.target, token.reading),
        Boolean(token.meanings[state.base]),
      ]);
    const source = field === 'term' ? card.term : card.exampleTarget;
    if (!source) return [];
    const tokens =
      state.target === 'th' && !card.custom ? window.THAI_CARD_TOKENS?.[card.id]?.[field] : null;
    return (tokens || multilingual.segments(source, state.target))
      .filter(Boolean)
      .map((word) => [
        word,
        multilingual.lookup(word, state.target, state.base),
        multilingual.reading(word, state.target),
      ]);
  }
  /** Use authored/known romanization first, and joined token readings only as a fallback. */
  function fullReading(card, field = 'term') {
    const supplied = field === 'term' ? card.reading : card.exampleReading;
    const source = field === 'term' ? card.term : card.exampleTarget;
    const known = multilingual.reading(source, state.target, supplied);
    if (known) return known;
    return breakdownItems(card, field)
      .map(([, , reading]) => reading)
      .filter(Boolean)
      .join(' ');
  }
  /** Encode the actual text and source/translation languages into the sole pronunciation entry point. */
  function googleLink(text, code = state.target, compact = false) {
    return text
      ? /* HTML */ `<a
          class="google-translate${compact ? ' compact' : ''}"
          href="${escapeHtml(multilingual.googleUrl(text, code, code === state.base ? state.target : state.base))}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${escapeHtml(t('googleListen', { term: text }))}"
          title="${escapeHtml(t('googleHint'))}"
          >${compact ? 'G ↗' : 'Google Translate ↗'}</a
        >`
      : '';
  }
  function displayedMeaning(word, source, base) {
    const meaning = multilingual.lookup(word, source, base);
    if (meaning) return meaning;
    const english = multilingual.lookup(word, source, 'en');
    return english ? `${labelFor('en')}: ${english}` : t('meaningGoogle');
  }
  /** Escape all imported text. Authored meanings skip hydration so online data cannot overwrite them. */
  function breakdownContent(items) {
    return items
      .map(
        ([word, meaning, reading, supplied]) =>
          /* HTML */ `<span class="breakdown-item"
            ><span class="breakdown-word-line"
              ><button
                class="breakdown-word-link"
                type="button"
                data-action="open-word"
                data-term="${escapeHtml(word)}"
                aria-label="${escapeHtml(t('openWordCard', { term: word }))}"
                lang="${escapeHtml(state.target)}"
              >
                ${escapeHtml(word)}
              </button></span
            ><small class="breakdown-reading">${escapeHtml(reading || t('listenForReading'))}</small
            ><button
              type="button"
              class="breakdown-meaning"
              data-action="open-word"
              data-term="${escapeHtml(word)}"
              ${supplied ? '' : `data-meaning-term="${escapeHtml(word)}" data-source="${state.target}" data-base="${state.base}"`}
            >
              ${escapeHtml(meaning || displayedMeaning(word, state.target, state.base))}</button
            >${googleLink(word, state.target, true)}</span
          >`,
      )
      .join('');
  }
  /** Library breakdowns load on expansion to avoid building thousands of hidden token nodes. */
  function breakdownHtml(card, field = 'term', lazy = false) {
    if (field === 'term' && card.kind !== 'sentence') return '';
    if (field === 'example' && !card.exampleTarget) return '';
    const items = lazy ? [] : breakdownItems(card, field);
    if (!lazy && !items.length) return '';
    return /* HTML */ `<details
      class="word-breakdown"
      ${lazy ? `data-breakdown-id="${escapeHtml(card.id)}" data-breakdown-field="${field}"` : 'open'}
    >
      <summary>${escapeHtml(t('breakdownTitle'))}</summary>
      <div class="breakdown-content">${breakdownContent(items)}</div>
      <p class="breakdown-hint">${escapeHtml(t('breakdownHint'))}</p>
    </details>`;
  }
  /** Batch only missing meanings, and update nodes only while their original view remains attached. */
  async function hydrateMeanings(host) {
    const nodes = [...host.querySelectorAll('[data-meaning-term]')];
    const groups = new Map();
    for (const node of nodes) {
      const { meaningTerm: word, source, base } = node.dataset;
      const known = multilingual.lookup(word, source, base);
      if (known) {
        node.textContent = known;
        continue;
      }
      const key = `${source}/${base}`;
      if (!groups.has(key)) groups.set(key, { source, base, words: [] });
      groups.get(key).words.push(word);
    }
    await Promise.allSettled(
      [...groups.values()].map(async ({ source, base, words }) => {
        try {
          await multilingual.translateMany(words, source, base);
        } catch {
          /* Links remain available offline. */
        }
        for (const node of nodes)
          if (node.isConnected && node.dataset.source === source && node.dataset.base === base) {
            node.textContent = displayedMeaning(node.dataset.meaningTerm, source, base);
          }
      }),
    );
  }

  /** Show all language versions of this concept without changing the learning pair. */

  function variantsHtml(card) {
    return /* HTML */ `<details class="language-variants">
      <summary>
        ${escapeHtml(t('allLanguageVersions'))} · ${Object.keys(card.forms || {}).length} /
        ${LANGUAGES.length}
      </summary>
      <div class="language-variants-grid">
        ${LANGUAGES.map(({ code }) => {
          const form = card.forms?.[code];
          return /* HTML */ `<div class="language-variant">
            <strong>${escapeHtml(labelFor(code))}</strong>${
              form?.text
                ? /* HTML */ `<span lang="${code}">${escapeHtml(form.text)}</span
                    ><small
                      >${escapeHtml(multilingual.reading(form.text, code, form.reading) || t('listenForReading'))}</small
                    >
                    <div class="variant-actions">${googleLink(form.text, code)}</div>`
                : /* HTML */ `<small>${escapeHtml(t('translationPending'))}</small>`
            }
          </div>`;
        }).join('')}
      </div>
      <p class="breakdown-hint">${escapeHtml(t('machineTranslationHint'))}</p>
    </details>`;
  }
  let previewCard = null;
  /** Render the selected real or virtual word card inside the shared lookup dialog. */
  function renderCardPreview() {
    const card = previewCard;
    if (!card) return;
    byId('wordCardTitle').textContent = t(
      card.kind === 'sentence' ? 'kindSentence' : 'wordCardTitle',
    );
    byId('wordCardContent').innerHTML = /* HTML */ `<div class="preview-term-row">
        <h3 lang="${state.target}">${escapeHtml(card.term)}</h3>
      </div>
      <p class="library-reading">${escapeHtml(fullReading(card) || t('listenForReading'))}</p>
      <p class="preview-translation">${escapeHtml(card.translation || t('meaningLoading'))}</p>
      <div class="card-resource-links">
        ${googleLink(card.term)}${!card.virtual ? /* HTML */ `<button class="text-link" type="button" data-action="study-preview">${escapeHtml(t('studyThisCard'))} ↗</button>` : /* HTML */ `<button class="text-link" type="button" data-action="save-preview">＋ ${escapeHtml(t('saveWordCard'))}</button>`}
      </div>
      ${
        card.exampleTarget
          ? /* HTML */ `<div class="library-example">
              <p lang="${state.target}">${escapeHtml(card.exampleTarget)}</p>
              <small>${escapeHtml(fullReading(card, 'example'))}</small
              ><span>${escapeHtml(card.exampleTranslation)}</span
              >${googleLink(card.exampleTarget)}${breakdownHtml(card, 'example')}
            </div>`
          : ''
      }${breakdownHtml(card)}${variantsHtml(card)}`;
    hydrateMeanings(byId('wordCardContent'));
  }
  /** Resolve a word to an existing card; enrich a virtual card only while its dialog/pair is current. */
  async function openWordCard(word, existingId = null) {
    const cards = pairCards();
    const existing = existingId
      ? cards.find((card) => card.id === existingId)
      : cards.find(
          (card) =>
            card.kind === 'word' &&
            multilingual.normalize(card.term) === multilingual.normalize(word),
        );
    const source = state.target;
    const base = state.base;
    previewCard = existing || {
      id: `lookup-${source}-${word}`,
      kind: 'word',
      level: 'beginner',
      topic: state.topic === 'all' ? 'daily' : state.topic,
      term: word,
      translation: multilingual.lookup(word, source, base),
      reading: multilingual.reading(word, source),
      forms: { [source]: { text: word, reading: multilingual.reading(word, source) } },
      virtual: true,
    };
    if (!existing)
      for (const { code } of LANGUAGES) {
        const text = multilingual.lookup(word, source, code);
        if (text) previewCard.forms[code] = { text, reading: multilingual.reading(text, code) };
      }
    const opened = previewCard;
    renderCardPreview();
    if (!byId('wordCardDialog').open) byId('wordCardDialog').showModal();
    if (!existing) {
      const fill = { lang: source, term: word, reading: opened.reading, forms: opened.forms };
      await multilingual.completeForms(fill);
      if (previewCard !== opened || source !== state.target || base !== state.base) return;
      opened.forms = fill.forms;
      opened.translation = fill.forms[base]?.text || t('meaningGoogle');
      renderCardPreview();
    }
  }
  function handleResourceAction(button) {
    if (button.dataset.action === 'open-word') {
      openWordCard(button.dataset.term);
      return true;
    }
    if (button.dataset.action === 'open-card') {
      openWordCard('', button.dataset.id);
      return true;
    }
    return false;
  }
  /** Render one study card, its examples and resources, then update pair-specific progress. */
  function renderStudy() {
    renderTopics();
    const cards = filteredCards();
    const host = byId('studyCardHost');
    if (!cards.length) {
      byId('cardPosition').textContent = '0 / 0';
      host.innerHTML = /* HTML */ `<div class="empty-card">
        <span class="empty-card-icon" aria-hidden="true">✳</span>
        <h3>${escapeHtml(t(state.topic === 'all' ? 'emptyPair' : 'emptyTopic'))}</h3>
        <p>${escapeHtml(t('emptyDescription'))}</p>
        <button type="button" class="button button-dark" data-action="add">
          ＋ ${escapeHtml(t('addCard'))}
        </button>
      </div>`;
    } else {
      state.index = (state.index + cards.length) % cards.length;
      const card = cards[state.index];
      const hasExample = Boolean(card.exampleTarget || card.exampleTranslation);
      byId('cardPosition').textContent = `${state.index + 1} / ${cards.length}`;
      host.innerHTML = /* HTML */ `<article
        class="flashcard"
        aria-label="${escapeHtml(t('cardAria', { number: state.index + 1 }))}"
      >
        <div class="flashcard-top">
          <div class="card-tags">
            <span class="tag">${escapeHtml(topicLabel(card.topic))}</span
            ><span class="kind-badge"
              >${escapeHtml(t(card.kind === 'sentence' ? 'kindSentence' : 'kindWord'))}</span
            ><span class="level-badge"
              >${escapeHtml(t(`level${card.level[0].toUpperCase()}${card.level.slice(1)}`))}</span
            >
          </div>
          <button class="quiet-button" type="button" data-action="toggle-answer">
            ${escapeHtml(t(state.answerVisible ? 'hideAnswer' : 'showAnswer'))}
          </button>
        </div>
        <div class="flashcard-body">
          <div class="word-row">
            <div class="target-word" lang="${escapeHtml(state.target)}">
              ${escapeHtml(card.term)}
            </div>
          </div>
          <div class="reading-row">
            <span class="reading-caption">${escapeHtml(t('reading'))}</span
            >${escapeHtml(fullReading(card) || t('listenForReading'))}
          </div>
          <div class="card-resource-links">${googleLink(card.term)}</div>
          <div class="card-divider"></div>
          <div class="detail-label">
            ${escapeHtml(labelFor(state.base))} ${escapeHtml(t('translationUpper'))}
          </div>
          <div
            class="translation ${state.answerVisible ? '' : 'masked-answer'}"
            ${state.answerVisible ? '' : `title="${escapeHtml(t('showAnswer'))}"`}
          >
            ${escapeHtml(card.translation)}
          </div>
          ${state.answerVisible ? breakdownHtml(card) : ''}
          ${
            hasExample
              ? /* HTML */ `<div class="example-box">
                  <span class="example-line"></span>
                  <div class="example-copy">
                    <div class="example-top">
                      <span class="detail-label">${escapeHtml(t('exampleSentence'))}</span>
                    </div>
                    ${card.exampleTarget ? /* HTML */ `<p class="example-target" lang="${escapeHtml(state.target)}">${escapeHtml(card.exampleTarget)}</p>` : ''}${card.exampleTarget && fullReading(card, 'example') ? /* HTML */ `<p class="example-reading"><span>${escapeHtml(t('exampleReadingLabel'))}</span> ${escapeHtml(fullReading(card, 'example'))}</p>` : ''}${card.exampleTranslation ? /* HTML */ `<p class="example-translation ${state.answerVisible ? '' : 'masked-answer'}">${escapeHtml(card.exampleTranslation)}</p>` : ''}
                  </div>
                </div>`
              : ''
          }
          ${hasExample ? /* HTML */ `<div class="card-resource-links">${googleLink(card.exampleTarget)}</div>` : ''}
          ${state.answerVisible && hasExample ? breakdownHtml(card, 'example') : ''}
          ${state.answerVisible ? variantsHtml(card) : ''}
        </div>
        <div class="flashcard-footer">
          <div class="card-nav">
            <button
              class="round-nav"
              type="button"
              data-action="prev"
              aria-label="${escapeHtml(t('previousCard'))}"
            >
              ←</button
            ><button
              class="round-nav"
              type="button"
              data-action="next"
              aria-label="${escapeHtml(t('nextCard'))}"
            >
              →
            </button>
          </div>
          <button
            class="master-button ${isMastered(card) ? 'is-mastered' : ''}"
            type="button"
            data-action="master"
          >
            <span class="check-circle">${isMastered(card) ? '✓' : ''}</span
            >${escapeHtml(t(isMastered(card) ? 'masteredStatus' : 'markMastered'))}</button
          ><button class="card-next" type="button" data-action="next">
            ${escapeHtml(t('next'))} ↗
          </button>
        </div>
      </article>`;
    }
    const all = pairCards();
    hydrateMeanings(host);
    const mastered = all.filter((card) => isMastered(card)).length;
    const percentage = all.length ? Math.round((mastered / all.length) * 100) : 0;
    byId('masteryNumber').innerHTML = `${percentage}<span>%</span>`;
    byId('masteryText').textContent = mastered
      ? t('progressN', { count: mastered })
      : t('progressZero');
    byId('masteryBar').style.width = `${percentage}%`;
    byId('masteryCount').textContent = `${mastered} / ${all.length}`;
  }

  /** Switch the visible view and hash without reloading or discarding in-memory learning state. */

  function setView(view) {
    if (!['study', 'quiz', 'library'].includes(view)) return;
    state.view = view;
    for (const name of ['study', 'quiz', 'library']) {
      const visible = view === name;
      byId(`${name}View`).hidden = !visible;
      byId(`${name}View`).classList.toggle('is-active', visible);
      const nav = $(`.nav-item[data-view="${name}"]`);
      nav.classList.toggle('is-active', visible);
      if (visible) nav.setAttribute('aria-current', 'page');
      else nav.removeAttribute('aria-current');
    }
    byId('breadcrumbText').textContent = t(
      { study: 'studyNav', quiz: 'quizNav', library: 'libraryNav' }[view],
    );
    history.replaceState(null, '', `#${view}`);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** Search projected fields and render one page; expanded breakdowns are handled by event delegation. */

  function renderLibrary() {
    const query = state.search.toLocaleLowerCase();
    const all = pairCards();
    const topics = [...new Set(all.map((card) => card.topic))];
    if (state.libraryTopic !== 'all' && !topics.includes(state.libraryTopic))
      state.libraryTopic = 'all';
    byId('libraryTopic').innerHTML = [
      ['all', t('allTopics')],
      ...topics.map((topic) => [topic, topicLabel(topic)]),
    ]
      .map(
        ([value, label]) =>
          /* HTML */ `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`,
      )
      .join('');
    byId('libraryLevel').innerHTML = ['all', 'beginner', 'intermediate', 'upper']
      .map(
        (level) =>
          /* HTML */ `<option value="${level}">
            ${escapeHtml(t(level === 'all' ? 'levelAll' : `level${level[0].toUpperCase()}${level.slice(1)}`))}
          </option>`,
      )
      .join('');
    byId('libraryTopic').value = state.libraryTopic;
    byId('libraryLevel').value = state.libraryLevel;
    const matchingCards = all.filter(
      (card) =>
        (state.libraryTopic === 'all' || card.topic === state.libraryTopic) &&
        (state.libraryLevel === 'all' || card.level === state.libraryLevel) &&
        [
          card.term,
          card.reading,
          card.translation,
          card.exampleTarget,
          card.exampleReading,
          card.exampleTranslation,
          topicLabel(card.topic),
        ].some((value) =>
          String(value || '')
            .toLocaleLowerCase()
            .includes(query),
        ),
    );
    byId('libraryKindTabs').innerHTML = ['all', 'word', 'sentence']
      .map((kind) => {
        const count = matchingCards.filter((card) => kind === 'all' || card.kind === kind).length;
        return /* HTML */ `<button
          type="button"
          class="level-pill ${state.libraryKind === kind ? 'is-active' : ''}"
          data-library-kind="${kind}"
          aria-pressed="${state.libraryKind === kind}"
        >
          ${escapeHtml(t(kind === 'all' ? 'kindAll' : `kind${kind[0].toUpperCase()}${kind.slice(1)}`))}<span
            >${count}</span
          >
        </button>`;
      })
      .join('');
    const cards = matchingCards.filter(
      (card) => state.libraryKind === 'all' || card.kind === state.libraryKind,
    );
    byId('libraryCount').textContent = t('cardsCount', { count: cards.length });
    const grid = byId('libraryGrid');
    if (!cards.length) {
      grid.innerHTML = /* HTML */ `<div class="empty-card library-empty">
        <span class="empty-card-icon" aria-hidden="true">▤</span>
        <h3>${escapeHtml(t(query ? 'librarySearchEmpty' : 'libraryNoCards'))}</h3>
        <p>${escapeHtml(t(query ? 'librarySearchHelp' : 'libraryNoCardsHelp'))}</p>
        <button type="button" class="button button-dark" data-action="add">
          ＋ ${escapeHtml(t('addCard'))}
        </button>
      </div>`;
      return;
    }
    grid.innerHTML =
      cards
        .slice(0, state.libraryShown)
        .map(
          (card) =>
            /* HTML */ `<article class="library-card">
              <div class="library-card-top">
                <div class="card-tags">
                  <span class="tag">${escapeHtml(topicLabel(card.topic))}</span
                  ><span class="kind-badge"
                    >${escapeHtml(t(card.kind === 'sentence' ? 'kindSentence' : 'kindWord'))}</span
                  ><span class="level-badge"
                    >${escapeHtml(t(`level${card.level[0].toUpperCase()}${card.level.slice(1)}`))}</span
                  >
                </div>
                <div class="library-card-actions">
                  ${card.custom ? /* HTML */ `<span class="custom-badge">${escapeHtml(t('custom'))}</span>` : ''}${card.custom ? /* HTML */ `<button class="tiny-button" type="button" data-action="edit" data-id="${escapeHtml(card.id)}" aria-label="${escapeHtml(t('editCard', { term: card.term }))}" title="${escapeHtml(t('editCard', { term: card.term }))}">✎</button><button class="tiny-button danger" type="button" data-action="delete" data-id="${escapeHtml(card.id)}" aria-label="${escapeHtml(t('deleteCard', { term: card.term }))}" title="${escapeHtml(t('deleteCard', { term: card.term }))}">×</button>` : ''}
                </div>
              </div>
              <h3 class="library-word" lang="${escapeHtml(state.target)}">
                <button
                  type="button"
                  class="library-card-link"
                  data-action="open-card"
                  data-id="${escapeHtml(card.id)}"
                >
                  ${escapeHtml(card.term)}
                </button>
              </h3>
              <p class="library-reading">
                ${escapeHtml(fullReading(card) || t('listenForReading'))}
              </p>
              <p class="library-translation">${escapeHtml(card.translation)}</p>
              <div class="card-resource-links">${googleLink(card.term)}</div>
              ${breakdownHtml(card, 'term', true)}
              ${
                card.exampleTarget
                  ? /* HTML */ `<div class="library-example">
                      <div class="library-example-heading">
                        <strong>${escapeHtml(t('exampleSentence'))}</strong>
                      </div>
                      <p lang="${escapeHtml(state.target)}">${escapeHtml(card.exampleTarget)}</p>
                      ${fullReading(card, 'example') ? /* HTML */ `<small>${escapeHtml(fullReading(card, 'example'))}</small>` : ''}${card.exampleTranslation ? /* HTML */ `<span class="library-example-translation">${escapeHtml(card.exampleTranslation)}</span>` : ''}${googleLink(card.exampleTarget)}${breakdownHtml(card, 'example', true)}
                    </div>`
                  : ''
              }
              ${variantsHtml(card)}
            </article>`,
        )
        .join('') +
      (cards.length > state.libraryShown
        ? /* HTML */ `<div class="library-more">
            <button type="button" class="button button-ghost" data-action="more">
              ${escapeHtml(t('showMoreCards', { shown: state.libraryShown, total: cards.length }))}
            </button>
          </div>`
        : '');
  }

  function resetQuiz() {
    state.quiz = {
      phase: 'setup',
      items: [],
      index: 0,
      score: 0,
      options: [],
      selected: null,
      answered: false,
    };
  }
  function quizAnswer(card) {
    return state.quizDirection === 'target-to-base' ? card.translation : card.term;
  }
  /** Use unique distractors and never include another spelling of the correct answer. */
  function prepareOptions() {
    const card = state.quiz.items[state.quiz.index];
    const answer = quizAnswer(card);
    const levelPool = filteredCards();
    const pool = shuffled(
      (levelPool.length >= 4 ? levelPool : pairCards())
        .filter((other) => other.id !== card.id)
        .map(quizAnswer)
        .filter((value) => value !== answer),
    );
    const unique = [...new Set(pool)].slice(0, 3);
    state.quiz.options = shuffled([answer, ...unique]);
  }
  /** Snapshot up to ten filtered cards so navigation cannot mutate an active quiz. */
  function startQuiz() {
    const all = pairCards();
    if (all.length < 2) {
      toast(t('needTwoToast'));
      return;
    }
    const cards = filteredCards();
    if (!cards.length) {
      toast(t('emptyTopicToast'));
      return;
    }
    state.quiz = {
      phase: 'playing',
      items: shuffled(cards).slice(0, 10),
      index: 0,
      score: 0,
      options: [],
      selected: null,
      answered: false,
    };
    prepareOptions();
    renderQuiz();
  }
  /** Render setup, active question, or result from the same quiz state. */
  function renderQuiz() {
    const all = pairCards();
    const topicName = [
      state.topic === 'all' ? t('allTopics') : topicLabel(state.topic),
      state.level === 'all' ? '' : t(`level${state.level[0].toUpperCase()}${state.level.slice(1)}`),
    ]
      .filter(Boolean)
      .join(' · ');
    byId('quizPairSummary').innerHTML = /* HTML */ `<strong>${escapeHtml(t('currentPair'))}</strong>
      <p>${escapeHtml(labelFor(state.base))} → ${escapeHtml(labelFor(state.target))}</p>
      <p style="font-size:11px;font-weight:500;margin-top:8px">
        ${escapeHtml(topicName)} · ${escapeHtml(t('cardsCount', { count: filteredCards().length }))}
      </p>`;
    const host = byId('quizHost');
    if (state.quiz.phase === 'setup') {
      host.innerHTML = /* HTML */ `<div class="quiz-panel">
        <span class="section-kicker">${escapeHtml(t('quizSetupEyebrow'))}</span>
        <h2>${escapeHtml(t('quizSetupTitle'))}</h2>
        <p class="setup-intro">${escapeHtml(t('quizSetupDescription', { topic: topicName }))}</p>
        <div class="mode-options">
          <button
            type="button"
            class="mode-option ${state.quizDirection === 'target-to-base' ? 'is-active' : ''}"
            data-direction="target-to-base"
            aria-pressed="${state.quizDirection === 'target-to-base'}"
          >
            <strong>${escapeHtml(t('quizDirectionOneTitle'))}</strong
            ><small>${escapeHtml(t('quizDirectionOneDescription'))}</small></button
          ><button
            type="button"
            class="mode-option ${state.quizDirection === 'base-to-target' ? 'is-active' : ''}"
            data-direction="base-to-target"
            aria-pressed="${state.quizDirection === 'base-to-target'}"
          >
            <strong>${escapeHtml(t('quizDirectionTwoTitle'))}</strong
            ><small>${escapeHtml(t('quizDirectionTwoDescription'))}</small>
          </button>
        </div>
        <button
          type="button"
          class="button button-dark quiz-start"
          data-action="start-quiz"
          ${all.length < 2 || !filteredCards().length ? 'disabled' : ''}
        >
          ${escapeHtml(t('startQuiz'))} ↗</button
        >${all.length < 2 ? /* HTML */ `<p style="margin:16px 0 0">${escapeHtml(t('quizNeedTwo'))}</p>` : ''}
      </div>`;
      return;
    }
    if (state.quiz.phase === 'result') {
      const total = state.quiz.items.length;
      host.innerHTML = /* HTML */ `<div class="quiz-panel quiz-result">
        <span class="result-star" aria-hidden="true">✳</span
        ><span class="section-kicker">${escapeHtml(t('quizResultEyebrow'))}</span>
        <h2>${escapeHtml(t('quizDone'))}</h2>
        <div class="result-score">${state.quiz.score}<small> / ${total}</small></div>
        <p>${escapeHtml(t(state.quiz.score === total ? 'quizPerfect' : 'quizKeepGoing'))}</p>
        <button type="button" class="button button-dark" data-action="retry-quiz">
          ${escapeHtml(t('retryQuiz'))}</button
        ><button type="button" class="button button-ghost" data-action="back-study">
          ${escapeHtml(t('backToCards'))}
        </button>
      </div>`;
      return;
    }
    const quiz = state.quiz;
    const card = quiz.items[quiz.index];
    const correct = quizAnswer(card);
    const direction = state.quizDirection === 'target-to-base';
    host.innerHTML = /* HTML */ `<div class="quiz-panel">
      <div class="quiz-meta">
        <span
          >${escapeHtml(t('questionCount', { current: quiz.index + 1, total: quiz.items.length }))}</span
        ><span>${escapeHtml(t('scoreCount', { count: quiz.score }))}</span>
      </div>
      <div class="quiz-bar">
        <span
          style="width:${((quiz.index + (quiz.answered ? 1 : 0)) / quiz.items.length) * 100}%"
        ></span>
      </div>
      <span class="quiz-prompt-label"
        >${escapeHtml(t(direction ? 'quizPromptTarget' : 'quizPromptBase'))}</span
      >
      <h2
        class="quiz-prompt"
        lang="${direction ? escapeHtml(state.target) : escapeHtml(state.base)}"
      >
        ${escapeHtml(direction ? card.term : card.translation)}
      </h2>
      ${
        direction
          ? /* HTML */ `<p class="quiz-reading">${escapeHtml(card.reading || '')}</p>
              ${googleLink(card.term)}`
          : '<div style="height:20px"></div>'
      }
      <div class="answer-grid">
        ${quiz.options.map((option, index) => /* HTML */ `<button type="button" class="answer-option ${quiz.answered ? (option === correct ? 'is-correct' : index === quiz.selected ? 'is-wrong' : '') : ''}" data-answer="${index}" ${quiz.answered ? 'disabled' : ''}>${escapeHtml(option)}</button>`).join('')}
      </div>
      ${
        quiz.answered
          ? /* HTML */ `<p
                class="quiz-feedback ${quiz.options[quiz.selected] === correct ? 'success' : 'error'}"
              >
                ${escapeHtml(t(quiz.options[quiz.selected] === correct ? 'correctAnswer' : 'incorrectAnswer', { term: card.term, translation: card.translation }))}
              </p>
              <div class="quiz-actions">
                <button class="button button-dark" type="button" data-action="quiz-next">
                  ${escapeHtml(t(quiz.index + 1 === quiz.items.length ? 'seeResults' : 'nextQuestion'))}
                  ↗
                </button>
              </div>`
          : ''
      }
    </div>`;
  }

  function render() {
    if (state.view === 'study') renderStudy();
    if (state.view === 'quiz') renderQuiz();
    if (state.view === 'library') renderLibrary();
  }

  function updateLanguage(kind, value) {
    if (!language(value)) return;
    if (kind === 'base') {
      state.base = value;
      if (state.base === state.target) state.target = state.base === 'th' ? 'en' : 'th';
    } else {
      state.target = value;
      if (state.base === state.target) state.base = state.target === 'en' ? 'zh' : 'en';
    }
    state.level = 'all';
    state.topic = 'all';
    state.index = 0;
    state.answerVisible = true;
    resetQuiz();
    byId('baseLanguage').value = state.base;
    byId('targetLanguage').value = state.target;
    saveState();
    render();
    prepareCustomCards();
  }
  const completingCustomIds = new Set();
  /** Complete missing languages in small batches. Reserve queued IDs to prevent overlapping work. */
  async function prepareCustomCards() {
    const pending = state.customCards.filter((card) => {
      if (completingCustomIds.has(card.id)) return false;
      const forms = multilingual.formsFor(card);
      return LANGUAGES.some(({ code }) => !forms[code]?.text);
    });
    // Reserve the whole queue now; a second render must not start duplicate requests.
    pending.forEach((card) => completingCustomIds.add(card.id));
    for (let start = 0; start < pending.length; start += 3) {
      await Promise.allSettled(
        pending.slice(start, start + 3).map(async (card) => {
          try {
            await multilingual.completeForms(card);
            if (state.customCards.includes(card)) {
              saveState();
              render();
            }
          } finally {
            completingCustomIds.delete(card.id);
          }
        }),
      );
    }
  }

  function fillTopicOptions(selected) {
    const topics = [
      ...new Set([...Object.keys(TOPIC_META), ...pairCards().map((card) => card.topic)]),
    ];
    byId('topicInput').innerHTML =
      topics
        .map(
          (topic) =>
            /* HTML */ `<option value="${escapeHtml(topic)}">
              ${escapeHtml(topicLabel(topic))}
            </option>`,
        )
        .join('') +
      /* HTML */ `<option value="__new__">${escapeHtml(t('newTopicOption'))}</option>`;
    byId('topicInput').value =
      selected === '__new__' || topics.includes(selected) ? selected : topics[0] || '__new__';
    byId('newTopicField').hidden = byId('topicInput').value !== '__new__';
  }
  function updateDialogLabels() {
    byId('dialogTitle').textContent = state.editingId ? t('editCardTitle') : t('addCard');
    byId('dialogPair').textContent = t('dialogPair', {
      base: labelFor(state.base),
      target: labelFor(state.target),
    });
    byId('termLabel').innerHTML =
      `${escapeHtml(t('termField', { language: labelFor(state.target) }))} <b>*</b>`;
    byId('translationLabel').innerHTML =
      `${escapeHtml(t('translationField', { language: labelFor(state.base) }))} <b>*</b>`;
    byId('termInput').placeholder = t(
      state.target === 'th' ? 'thaiTermPlaceholder' : 'termPlaceholder',
    );
    byId('translationInput').placeholder = t(
      state.base === 'en' ? 'englishTranslationPlaceholder' : 'translationPlaceholder',
    );
    fillTopicOptions(
      byId('topicInput').value || (state.topic === 'all' ? 'greetings' : state.topic),
    );
    byId('breakdownField').hidden = byId('kindInput').value !== 'sentence';
  }
  let savingCard = false;
  let dialogRevision = 0;

  function resetSaveStatus() {
    savingCard = false;
    byId('cardForm')
      .querySelectorAll('[type="submit"]')
      .forEach((button) => {
        button.disabled = false;
      });
    byId('formStatus').hidden = true;
  }

  /** Populate a new editor revision, including untouched language forms for lossless edits. */

  function openDialog(
    card = null,
    preferredTopic = null,
    preferredLevel = null,
    preferredKind = null,
  ) {
    dialogRevision++;
    resetSaveStatus();
    state.editingId = card?.id || null;
    byId('cardForm').reset();
    byId('formError').hidden = true;
    byId('termInput').value = card?.term || '';
    byId('readingInput').value = card?.reading || '';
    byId('translationInput').value = card?.translation || '';
    byId('exampleTargetInput').value = card?.exampleTarget || '';
    byId('levelInput').value = card?.level || preferredLevel || 'beginner';
    byId('kindInput').value = card?.kind || preferredKind || 'word';
    byId('breakdownInput').value = card?.breakdown || '';
    byId('exampleReadingInput').value = card?.exampleReading || '';
    byId('exampleBaseInput').value = card?.exampleTranslation || '';
    byId('optionalFields').open = Boolean(
      card?.exampleTarget || card?.exampleReading || card?.exampleTranslation,
    );
    byId('saveAndAddButton').hidden = Boolean(card);
    byId('formStatus').hidden = true;
    byId('otherLanguages').open = false;
    byId('otherLanguageInputs').innerHTML = LANGUAGES.filter(
      ({ code }) => ![state.base, state.target].includes(code),
    )
      .map(
        ({ code }) =>
          /* HTML */ `<div class="other-language-fields">
            <label class="form-field"
              ><span>${escapeHtml(labelFor(code))}</span
              ><input
                data-form-language="${code}"
                data-form-field="text"
                maxlength="2000"
                value="${escapeHtml(card?.forms?.[code]?.text || '')}" /></label
            ><label class="form-field"
              ><span>${escapeHtml(t('readingLabel'))}</span
              ><input
                data-form-language="${code}"
                data-form-field="reading"
                maxlength="4000"
                value="${escapeHtml(card?.forms?.[code]?.reading || '')}"
            /></label>
          </div>`,
      )
      .join('');
    fillTopicOptions(
      preferredTopic || card?.topic || (state.topic === 'all' ? 'greetings' : state.topic),
    );
    updateDialogLabels();
    byId('cardDialog').showModal();
    byId('termInput').focus();
  }
  function closeDialog() {
    // A cancelled translation may finish later; its result must not save or close a new form.
    dialogRevision++;
    resetSaveStatus();
    byId('cardDialog').close();
    state.editingId = null;
  }
  /** Validate once, snapshot input before awaiting translation, then save only the current editor revision. */
  async function saveCard(event) {
    event.preventDefault();
    if (savingCard) return;
    const saveRevision = dialogRevision;
    const term = plain(byId('termInput').value, 2000);
    const translation = plain(byId('translationInput').value, 2000);
    const topic =
      byId('topicInput').value === '__new__'
        ? plain(byId('newTopicInput').value, 100)
        : byId('topicInput').value;
    const level = byId('levelInput').value;
    const kind = byId('kindInput').value;
    const breakdown = plain(byId('breakdownInput').value, 8000);
    if (!term || !translation || !topic) {
      byId('formError').textContent = t('requiredFields');
      byId('formError').hidden = false;
      (!term
        ? byId('termInput')
        : !translation
          ? byId('translationInput')
          : byId('newTopicInput')
      ).focus();
      return;
    }
    let parsedTokens;
    try {
      parsedTokens = cardJson.tokensFromLegacy(breakdown, state.base);
    } catch {
      byId('formError').textContent = t('breakdownRequired');
      byId('formError').hidden = false;
      byId('breakdownInput').focus();
      return;
    }
    const card = {
      id:
        state.editingId ||
        `custom-${window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`,
      base: state.base,
      lang: state.target,
      topic,
      level,
      kind,
      breakdown,
      term,
      reading: plain(byId('readingInput').value, 4000),
      translation,
      exampleTarget: plain(byId('exampleTargetInput').value, 2000),
      exampleReading: plain(byId('exampleReadingInput').value, 4000),
      exampleBase: plain(byId('exampleBaseInput').value, 2000),
    };
    const wasEditing = Boolean(state.editingId);
    const keepAdding = event.submitter?.dataset.saveMode === 'continue' && !wasEditing;
    const original = state.customCards.find((item) => item.id === card.id);
    const originalView = original
      ? multilingual.project({ ...original, custom: true }, state.base, state.target)
      : null;
    const changed =
      originalView && (originalView.term !== term || originalView.translation !== translation);
    // Editing one language must preserve the other reviewed language versions.
    card.forms = original ? multilingual.formsFor(original) : {};
    card.forms[state.target] = {
      ...card.forms[state.target],
      text: term,
      reading: card.reading,
      example: card.exampleTarget,
      exampleReading: card.exampleReading,
      tokens:
        originalView && !changed && breakdown === originalView.breakdown
          ? card.forms[state.target]?.tokens || []
          : parsedTokens,
      exampleTokens:
        originalView && originalView.exampleTarget === card.exampleTarget
          ? card.forms[state.target]?.exampleTokens || []
          : [],
    };
    card.forms[state.base] = {
      ...card.forms[state.base],
      text: translation,
      example: card.exampleBase,
    };
    for (const input of byId('otherLanguageInputs').querySelectorAll('input[data-form-language]')) {
      const code = input.dataset.formLanguage;
      if (!card.forms[code]) card.forms[code] = {};
      card.forms[code][input.dataset.formField] = plain(
        input.value,
        input.dataset.formField === 'reading' ? 4000 : 2000,
      );
    }
    savingCard = true;
    const submitButtons = [...byId('cardForm').querySelectorAll('[type="submit"]')];
    submitButtons.forEach((button) => {
      button.disabled = true;
    });
    byId('formStatus').hidden = false;
    byId('formStatus').textContent = t('translatingCard');
    let completed;
    try {
      completed = await multilingual.completeForms(card);
    } finally {
      if (dialogRevision === saveRevision) resetSaveStatus();
    }
    if (dialogRevision !== saveRevision || !byId('cardDialog').open) return;
    const previousCards = state.customCards.slice();
    if (wasEditing) {
      const index = state.customCards.findIndex((item) => item.id === card.id);
      if (index < 0) return;
      state.customCards[index] = card;
    } else state.customCards.push(card);
    if (!saveState()) {
      state.customCards = previousCards;
      return;
    }
    closeDialog();
    if (!wasEditing && state.view === 'library') {
      state.search = term;
      byId('librarySearch').value = term;
      state.libraryShown = 72;
      state.libraryKind = kind;
      state.libraryLevel = 'all';
      state.libraryTopic = 'all';
      saveState();
    }
    render();
    toast(t(completed ? (wasEditing ? 'cardUpdated' : 'cardAdded') : 'partialTranslation'));
    if (keepAdding) openDialog(null, topic, level, kind);
  }

  /** Create a short-lived UTF-8 download and release its object URL after the browser consumes it. */

  function downloadFile(filename, content, mime) {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function exportLibraryJson() {
    downloadFile(
      'langcard-library.json',
      cardJson.stringify(pairCards(), { scope: 'library' }),
      'application/json;charset=utf-8',
    );
    byId('exportMenu').open = false;
    toast(t('libraryJsonExported'));
  }
  function exportJson() {
    if (!state.customCards.length) {
      toast(t('noCustomExport'));
      return;
    }
    downloadFile(
      'langcard-custom-cards.json',
      cardJson.stringify(state.customCards, { scope: 'custom' }),
      'application/json;charset=utf-8',
    );
    byId('exportMenu').open = false;
    toast(t('jsonExported'));
  }
  function downloadTemplate() {
    downloadFile(
      'langcard-template.json',
      JSON.stringify(cardJson.template(), null, 2) + '\n',
      'application/json;charset=utf-8',
    );
    byId('exportMenu').open = false;
    toast(t('templateExported'));
  }
  function importedCard(row) {
    return cardJson.normalize(row, { base: state.base, target: state.target });
  }
  function cardKey(card) {
    return [
      card.base,
      card.lang,
      multilingual.normalize(card.term),
      multilingual.normalize(card.translation),
    ].join('\u001F');
  }
  /** Read JSON only, skip existing IDs/concepts, and roll back additions if persistence fails. */
  async function importCards(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (file.size > cardJson.MAX_BYTES) {
      toast(t('importTooLarge'));
      return;
    }
    if (!file.name.toLowerCase().endsWith('.json')) {
      toast(t('importInvalid'));
      return;
    }
    try {
      const rows = cardJson.parse(await file.text());
      let duplicate = 0;
      let invalid = 0;
      const added = [];
      const known = new Set();
      const checkedPairs = new Set();
      const knownIds = new Set([...CATALOG, ...state.customCards].map((card) => card.id));
      for (const row of rows) {
        const card = importedCard(row);
        if (!card) {
          invalid++;
          continue;
        }
        if (knownIds.has(card.id)) {
          duplicate++;
          continue;
        }
        const pair = card.base + '\u001F' + card.lang;
        if (!checkedPairs.has(pair)) {
          pairCards(card.base, card.lang).forEach((existing) =>
            known.add(cardKey({ ...existing, base: card.base, lang: card.lang })),
          );
          checkedPairs.add(pair);
        }
        const key = cardKey(card);
        if (known.has(key)) {
          duplicate++;
          continue;
        }
        known.add(key);
        knownIds.add(card.id);
        added.push(card);
      }
      if (added.length) {
        const previous = state.customCards;
        state.customCards = [...previous, ...added];
        if (!saveState()) {
          state.customCards = previous;
          return;
        }
        state.search =
          added.length === 1
            ? multilingual.project({ ...added[0], custom: true }, state.base, state.target)?.term ||
              ''
            : '';
        byId('librarySearch').value = state.search;
        state.libraryTopic = 'all';
        state.libraryLevel = 'all';
        state.libraryKind = 'all';
        state.libraryShown = 72;
        render();
        prepareCustomCards();
      }
      toast(
        rows.length
          ? t('importResult', { added: added.length, duplicate, invalid })
          : t('importNoCards'),
      );
    } catch {
      toast(t('importInvalid'));
    }
  }

  function handleStudyAction(action) {
    const cards = filteredCards();
    const card = cards[state.index];
    if (action === 'add') return openDialog();
    if (!card) return;
    if (action === 'next' || action === 'prev') {
      state.index = (state.index + (action === 'next' ? 1 : -1) + cards.length) % cards.length;
      renderStudy();
    } else if (action === 'toggle-answer') {
      state.answerVisible = !state.answerVisible;
      renderStudy();
    } else if (action === 'master') {
      const previousMastery = new Set(state.masteredIds);
      if (isMastered(card)) {
        state.masteredIds.delete(masteryKey(card));
      } else state.masteredIds.add(masteryKey(card));
      if (!saveState()) state.masteredIds = previousMastery;
      renderStudy();
    }
  }

  /** Route card actions; deletion persists first and restores local state on a storage error. */

  function handleLibraryAction(button) {
    const action = button.dataset.action;
    if (handleResourceAction(button)) return;
    if (action === 'add') return openDialog();
    const card = pairCards().find((item) => item.id === button.dataset.id);
    if (!card) return;
    if (action === 'edit' && card.custom) return openDialog(card);
    if (action === 'delete' && card.custom && confirm(t('deleteConfirm', { term: card.term }))) {
      const previousCards = state.customCards;
      const previousMastery = new Set(state.masteredIds);
      state.customCards = state.customCards.filter((item) => item.id !== card.id);
      LANGUAGES.forEach(({ code }) => state.masteredIds.delete(`${code}:${card.id}`));
      if (!saveState()) {
        state.customCards = previousCards;
        state.masteredIds = previousMastery;
        return;
      }
      renderLibrary();
      toast(t('cardDeleted'));
    }
  }

  function handleQuizAction(button) {
    const action = button.dataset.action;
    if (action === 'start-quiz' || action === 'retry-quiz') return startQuiz();
    if (action === 'back-study') return setView('study');
    if (action === 'quiz-next') {
      if (state.quiz.index + 1 >= state.quiz.items.length) state.quiz.phase = 'result';
      else {
        state.quiz.index++;
        state.quiz.answered = false;
        state.quiz.selected = null;
        prepareOptions();
      }
      renderQuiz();
    }
  }

  /** Bind delegated listeners once; render functions replace DOM without adding duplicate listeners. */

  function init() {
    applyTheme();
    applyLocale();
    document
      .querySelectorAll('.nav-item')
      .forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
    window.addEventListener('hashchange', () => setView(location.hash.slice(1) || 'study'));
    byId('uiLanguage').addEventListener('change', (event) => {
      state.uiLanguage = event.target.value;
      applyLocale();
      saveState();
      render();
    });
    byId('themeSelect').addEventListener('change', (event) => {
      state.theme = event.target.value;
      applyTheme();
      saveState();
    });
    byId('topAddButton').addEventListener('click', () => openDialog());
    byId('libraryAddButton').addEventListener('click', () => openDialog());
    byId('importButton').addEventListener('click', () => byId('importInput').click());
    byId('importInput').addEventListener('change', importCards);
    byId('exportLibraryJson').addEventListener('click', exportLibraryJson);
    byId('exportJson').addEventListener('click', exportJson);
    byId('downloadTemplate').addEventListener('click', downloadTemplate);
    document.addEventListener('click', (event) => {
      if (!byId('exportMenu').contains(event.target)) byId('exportMenu').open = false;
    });
    byId('goQuiz').addEventListener('click', () => setView('quiz'));
    byId('baseLanguage').addEventListener('change', (event) =>
      updateLanguage('base', event.target.value),
    );
    byId('targetLanguage').addEventListener('change', (event) =>
      updateLanguage('target', event.target.value),
    );
    byId('swapLanguages').addEventListener('click', () => {
      [state.base, state.target] = [state.target, state.base];
      state.level = 'all';
      state.topic = 'all';
      state.index = 0;
      resetQuiz();
      saveState();
      byId('baseLanguage').value = state.base;
      byId('targetLanguage').value = state.target;
      render();
      prepareCustomCards();
    });
    byId('topicList').addEventListener('click', (event) => {
      const button = event.target.closest('[data-topic]');
      if (!button) return;
      state.topic = button.dataset.topic;
      state.index = 0;
      resetQuiz();
      renderStudy();
    });
    byId('mobileTopicSelect').addEventListener('change', (event) => {
      state.topic = event.target.value;
      state.index = 0;
      resetQuiz();
      renderStudy();
    });
    byId('levelList').addEventListener('click', (event) => {
      const button = event.target.closest('[data-level]');
      if (!button || button.disabled) return;
      state.level = button.dataset.level;
      state.topic = 'all';
      state.index = 0;
      resetQuiz();
      saveState();
      renderStudy();
    });
    byId('kindList').addEventListener('click', (event) => {
      const button = event.target.closest('[data-kind]');
      if (!button || button.disabled) return;
      state.kind = button.dataset.kind;
      state.topic = 'all';
      state.index = 0;
      resetQuiz();
      saveState();
      renderStudy();
    });
    byId('studyCardHost').addEventListener('click', (event) => {
      const button = event.target.closest('[data-action]');
      if (button && handleResourceAction(button)) return;
      if (button) handleStudyAction(button.dataset.action);
      else if (event.target.classList.contains('masked-answer')) handleStudyAction('toggle-answer');
    });
    byId('quizHost').addEventListener('click', (event) => {
      const direction = event.target.closest('[data-direction]');
      if (direction) {
        state.quizDirection = direction.dataset.direction;
        renderQuiz();
        return;
      }
      const answer = event.target.closest('[data-answer]');
      if (answer && state.quiz.phase === 'playing' && !state.quiz.answered) {
        state.quiz.selected = Number(answer.dataset.answer);
        state.quiz.answered = true;
        if (
          state.quiz.options[state.quiz.selected] === quizAnswer(state.quiz.items[state.quiz.index])
        )
          state.quiz.score++;
        renderQuiz();
        return;
      }
      const button = event.target.closest('[data-action]');
      if (button) handleQuizAction(button);
    });
    byId('librarySearch').addEventListener('input', (event) => {
      state.search = event.target.value.trim();
      state.libraryShown = 72;
      renderLibrary();
    });
    for (const [id, key] of [
      ['libraryTopic', 'libraryTopic'],
      ['libraryLevel', 'libraryLevel'],
    ]) {
      byId(id).addEventListener('change', (event) => {
        state[key] = event.target.value;
        state.libraryShown = 72;
        renderLibrary();
      });
    }
    byId('libraryKindTabs').addEventListener('click', (event) => {
      const button = event.target.closest('[data-library-kind]');
      if (!button) return;
      state.libraryKind = button.dataset.libraryKind;
      state.libraryShown = 72;
      saveState();
      renderLibrary();
    });
    byId('libraryGrid').addEventListener('click', (event) => {
      const button = event.target.closest('[data-action]');
      if (button?.dataset.action === 'more') {
        state.libraryShown += 72;
        renderLibrary();
        return;
      }
      if (button) handleLibraryAction(button);
    });
    byId('cardForm').addEventListener('submit', saveCard);
    document.addEventListener(
      'toggle',
      (event) => {
        const details = event.target;
        if (!details.open || !details.dataset.breakdownId || details.dataset.loaded) return;
        const card = pairCards().find((item) => item.id === details.dataset.breakdownId);
        if (!card) return;
        details.querySelector('.breakdown-content').innerHTML = breakdownContent(
          breakdownItems(card, details.dataset.breakdownField),
        );
        details.dataset.loaded = 'true';
        hydrateMeanings(details);
      },
      true,
    );
    byId('closeWordCard').addEventListener('click', () => byId('wordCardDialog').close());
    byId('wordCardDialog').addEventListener('close', () => {
      previewCard = null;
    });
    byId('wordCardDialog').addEventListener('click', (event) => {
      if (event.target === byId('wordCardDialog')) byId('wordCardDialog').close();
    });
    byId('wordCardContent').addEventListener('click', (event) => {
      const button = event.target.closest('[data-action]');
      if (!button || handleResourceAction(button)) return;
      const card = previewCard;
      if (!card) return;
      if (button.dataset.action === 'study-preview') {
        state.kind = card.kind;
        state.level = 'all';
        state.topic = 'all';
        state.answerVisible = true;
        state.index = filteredCards().findIndex((item) => item.id === card.id);
        byId('wordCardDialog').close();
        resetQuiz();
        saveState();
        setView('study');
        byId('studyCardHost').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (button.dataset.action === 'save-preview' && card.virtual) {
        if (!card.forms[state.base]?.text) {
          toast(t('translationPending'));
          return;
        }
        const saved = {
          ...card,
          id: `custom-${window.crypto?.randomUUID?.() || Date.now()}`,
          lang: state.target,
          base: state.base,
          custom: true,
          virtual: false,
          translation: card.forms[state.base].text,
        };
        state.customCards.push(saved);
        if (!saveState()) {
          state.customCards.pop();
          return;
        }
        previewCard = saved;
        renderCardPreview();
        render();
        toast(t('cardAdded'));
        prepareCustomCards();
      }
    });
    byId('closeDialog').addEventListener('click', closeDialog);
    byId('cancelDialog').addEventListener('click', closeDialog);
    byId('topicInput').addEventListener('change', () => {
      byId('newTopicField').hidden = byId('topicInput').value !== '__new__';
    });
    byId('kindInput').addEventListener('change', () => {
      byId('breakdownField').hidden = byId('kindInput').value !== 'sentence';
    });
    byId('cardDialog').addEventListener('close', () => {
      if (!byId('cardDialog').open) {
        dialogRevision++;
        resetSaveStatus();
        state.editingId = null;
      }
    });
    byId('cardDialog').addEventListener('click', (event) => {
      if (event.target === byId('cardDialog')) closeDialog();
    });
    document.addEventListener('keydown', (event) => {
      if (
        state.view !== 'study' ||
        byId('cardDialog').open ||
        byId('wordCardDialog').open ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
      )
        return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        handleStudyAction(event.key === 'ArrowRight' ? 'next' : 'prev');
      }
    });
    setView(state.view);
    prepareCustomCards();
  }

  init();
})();
