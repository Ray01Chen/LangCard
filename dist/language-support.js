/**
 * Language projection and optional online enrichment.
 * Lookup order favors reviewed dictionaries; cache/network values are fallbacks.
 * Translations use a separate storage key so a failed cache write cannot erase cards.
 * Pronunciation is always an external Google Translate link, never audio playback.
 */
(() => {
  'use strict';
  const cacheKey = 'langcard:translations:v1';
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  } catch {
    /* Optional cache. */
  }
  // Cache data is optional and must never be confused with the user's card storage.
  const cache = new Map(
    Object.entries(saved && typeof saved === 'object' ? saved : {}).filter(
      ([, value]) => typeof value === 'string' && value.trim(),
    ),
  );
  const pending = new Map();
  let translationRetryAt = 0;
  const normalize = (value) =>
    String(value || '')
      .normalize('NFKC')
      .trim()
      .toLocaleLowerCase();
  const googleCode = (code) => (code === 'zh' ? 'zh-TW' : code);
  const key = (text, source, target) => JSON.stringify([source, target, text]);
  const languages = window.LANGUAGES.map(({ code }) => code);
  const latinLanguages = new Set(['en', 'es', 'fr', 'de', 'vi', 'id']);
  const indexes = new Map();
  const formCache = new WeakMap();
  /** Index complete card texts lazily, favoring word cards over sentences. */
  function knownForm(text, source, target) {
    if (!indexes.has(source)) {
      const index = new Map();
      for (const card of [...(window.CARD_CATALOG || [])].sort(
        (a, b) => (a.kind === 'word' ? 0 : 1) - (b.kind === 'word' ? 0 : 1),
      )) {
        const value = card.forms?.[source]?.text;
        if (value && !index.has(normalize(value))) index.set(normalize(value), card);
      }
      indexes.set(source, index);
    }
    return indexes.get(source).get(normalize(text))?.forms?.[target]?.text || '';
  }

  /** Google expects zh-TW for Traditional Chinese; internal card keys remain zh. */

  function googleUrl(text, source, target) {
    return `https://translate.google.com/?${new URLSearchParams({ sl: googleCode(source), tl: googleCode(target), text, op: 'translate' })}`;
  }
  /** Use locale-aware word segmentation; Thai reviewed boundaries are selected by the controller. */
  function segments(text, code) {
    if (!text) return [];
    if (typeof Intl.Segmenter === 'function') {
      return [...new Intl.Segmenter(code, { granularity: 'word' }).segment(text)]
        .filter((part) => part.isWordLike)
        .map((part) => part.segment);
    }
    return String(text).match(/[\p{L}\p{M}\p{N}]+/gu) || [];
  }
  /** Prefer authored readings, then cached/generated hints. Thai script is not a romanized reading. */
  function reading(text, code, supplied = '') {
    const safeSupplied = code === 'th' && /[\u0e00-\u0e7f]/.test(supplied) ? '' : supplied;
    return (
      safeSupplied ||
      cache.get(key(text, code, 'reading')) ||
      window.TOKEN_READINGS?.[code]?.[text] ||
      (code === 'th' && !/[\u0e00-\u0e7f]/.test(window.THAI_READINGS?.[text] || '')
        ? window.THAI_READINGS?.[text]
        : '') ||
      (latinLanguages.has(code) ? text : '')
    );
  }
  function remember(text, source, target, translation) {
    if (text && translation) cache.set(key(text, source, target), translation);
  }
  function persist() {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(Object.fromEntries([...cache].slice(-6000))));
    } catch {
      /* Learning data uses a different key. */
    }
  }
  /** Resolve reviewed meanings before generated dictionaries, known forms, or the optional cache. */
  function lookup(text, source, target) {
    if (source === target) return text;
    if (source === 'th' && window.THAI_LEXICON?.[text]?.meanings?.[target])
      return window.THAI_LEXICON[text].meanings[target];
    const english = source === 'en' ? text : window.TOKEN_ENGLISH?.[source]?.[text];
    return (
      (english && window.WORD_MEANING_OVERRIDES?.[normalize(english)]?.[target]) ||
      (english && window.TOKEN_MEANINGS?.[english]?.[target]) ||
      knownForm(text, source, target) ||
      cache.get(key(text, source, target)) ||
      ''
    );
  }
  /** Batch translation requests; split mismatched responses and back off after rate limits. */
  async function request(texts, source, target) {
    if (Date.now() < translationRetryAt) throw new Error('Translation will retry later');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const url = `https://translate.googleapis.com/translate_a/single?${new URLSearchParams({ client: 'gtx', sl: googleCode(source), tl: googleCode(target), dt: 't', q: texts.join('\n') })}`;
      const response = await fetch(url, {
        signal: controller.signal,
        referrerPolicy: 'no-referrer',
      });
      if (!response.ok) {
        translationRetryAt = Date.now() + (response.status === 429 ? 300000 : 30000);
        throw new Error('Translation unavailable');
      }
      const data = await response.json();
      const translated = (data[0] || [])
        .map((part) => part[0] || '')
        .join('')
        .trim()
        .split('\n')
        .map((row) => row.trim())
        .filter(Boolean);
      if (translated.length !== texts.length) {
        if (texts.length === 1) throw new Error('Incomplete translation');
        const midpoint = Math.ceil(texts.length / 2);
        await request(texts.slice(0, midpoint), source, target);
        await request(texts.slice(midpoint), source, target);
      } else texts.forEach((text, index) => remember(text, source, target, translated[index]));
      persist();
    } catch (error) {
      translationRetryAt = Math.max(translationRetryAt, Date.now() + 30000);
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }
  /** Deduplicate identical in-flight batches and leave existing meanings untouched. */
  async function translateMany(texts, source, target) {
    const missing = [...new Set(texts.filter((text) => text && !lookup(text, source, target)))];
    const waits = [];
    for (let index = 0; index < missing.length; index += 25) {
      const batch = missing.slice(index, index + 25);
      const batchKey = key(batch.join('\n'), source, target);
      if (!pending.has(batchKey))
        pending.set(
          batchKey,
          request(batch, source, target).finally(() => pending.delete(batchKey)),
        );
      waits.push(pending.get(batchKey));
    }
    await Promise.all(waits);
    return texts.map((text) => lookup(text, source, target));
  }
  /** Request romanization only when neither authored nor generated reading data exists. */
  async function fetchReading(text, code) {
    const known = reading(text, code);
    if (known || !text) return known;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const params = new URLSearchParams({
        client: 'gtx',
        sl: googleCode(code),
        tl: 'en',
        q: text,
      });
      params.append('dt', 't');
      params.append('dt', 'rm');
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?${params}`,
        { signal: controller.signal, referrerPolicy: 'no-referrer' },
      );
      if (!response.ok) throw new Error('Reading unavailable');
      const data = await response.json();
      const value = data[0]?.find((part) => part[3])?.[3];
      if (!value) return '';
      cache.set(key(text, code, 'reading'), value);
      persist();
      return value;
    } finally {
      clearTimeout(timer);
    }
  }
  function formsFor(card) {
    return window.LangCardJson.formsFor(card);
  }
  /** Fill missing forms/readings with best effort. Failed requests preserve every supplied form. */
  async function completeForms(card) {
    const forms = formsFor(card);
    const source = forms.en ? 'en' : card.lang || Object.keys(forms)[0];
    const origin = forms[source];
    const results = await Promise.allSettled(
      languages
        .filter((code) => !forms[code]?.text)
        .map(async (code) => {
          const values = await translateMany(
            [origin.text, ...(origin.example ? [origin.example] : [])],
            source,
            code,
          );
          forms[code] = {
            text: values[0],
            reading: reading(values[0], code),
            example: values[1] || '',
            exampleReading: reading(values[1] || '', code),
          };
        }),
    );
    await Promise.allSettled(
      Object.entries(forms).map(async ([code, form]) => {
        form.reading =
          reading(form.text, code, form.reading) || (await fetchReading(form.text, code));
        if (form.example)
          form.exampleReading =
            reading(form.example, code, form.exampleReading) ||
            (await fetchReading(form.example, code));
      }),
    );
    card.forms = forms;
    return results.every((result) => result.status === 'fulfilled');
  }
  /** Create a pair-specific view of one concept; immutable built-in forms are normalized once. */
  function project(card, base, target) {
    if (!card.custom && !formCache.has(card)) formCache.set(card, formsFor(card));
    const forms = card.custom ? formsFor(card) : formCache.get(card);
    if (!forms?.[base]?.text || !forms?.[target]?.text) return null;
    const form = forms[target];
    const { sourceLang, sourceBase, ...data } = card; // Retire legacy metadata after migration.
    return {
      ...data,
      base,
      lang: target,
      term: form.text,
      reading: reading(form.text, target, form.reading),
      translation: forms[base].text,
      exampleTarget: form.example || '',
      exampleReading: reading(form.example || '', target, form.exampleReading),
      exampleTranslation: forms[base].example || '',
      breakdown: window.LangCardJson.tokenLines(form.tokens, base),
      exampleBreakdown: window.LangCardJson.tokenLines(form.exampleTokens, base),
      custom: Boolean(card.custom),
      level: card.level || 'beginner',
      kind: card.kind || 'word',
      forms,
    };
  }
  window.LangCardLanguages = {
    googleUrl,
    segments,
    reading,
    lookup,
    translateMany,
    remember,
    completeForms,
    formsFor,
    project,
    normalize,
    languages,
  };
})();
