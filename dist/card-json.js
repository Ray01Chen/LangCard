/**
 * The only card schema boundary, shared by browser imports and permanent-card tools.
 * V3 records have stable metadata plus language forms, without a study direction.
 * Legacy v1/v2 pairs are accepted only to migrate text and language-keyed token meanings.
 * normalize() returns a view-compatible object; record() strips view-only fields.
 */
// Shared, language-independent card data. Legacy pairs are read only for migration.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LangCardJson = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  /** @typedef {{text: string, reading: string, meanings: Object<string, string>}} Token */
  /** @typedef {{text: string, reading: string, example: string, exampleReading: string, tokens: Token[], exampleTokens: Token[]}} LanguageForm */
  /** @typedef {{id: string, topic: string, kind: 'word'|'sentence', level: string, forms: Object<string, LanguageForm>}} CardRecord */
  const FORMAT = 'langcard-cards-v3';
  const LANGUAGES = ['en', 'zh', 'th', 'ja', 'es', 'ko', 'fr', 'de', 'vi', 'id'];
  const MAX_BYTES = 50_000_000;
  const MAX_CARDS = 10000;
  const fields = ['text', 'reading', 'example', 'exampleReading'];
  function text(value, limit = 2000) {
    if (value == null) return '';
    if (typeof value !== 'string' || value.length > limit || /\u0000/.test(value))
      throw new Error('Invalid text field');
    return value.trim();
  }
  /** Preserve supplied IDs; generate one only for a genuinely new imported concept. */
  function newId() {
    return (
      'custom-' +
      (globalThis.crypto?.randomUUID?.() || Date.now() + '-' + Math.random().toString(36).slice(2))
    );
  }
  /** Convert editor/v1/v2 breakdown lines into explicit per-language meanings. */
  function tokensFromLegacy(value, meaningLanguage = 'en') {
    const content = text(value, 8000);
    if (!content) return [];
    if (!LANGUAGES.includes(meaningLanguage)) throw new Error('Invalid meaning language');
    return content
      .split(/[;\r\n]+/)
      .filter((line) => line.trim())
      .map((line) => {
        const separator = line.indexOf('=');
        if (separator < 1 || !line.slice(separator + 1).trim())
          throw new Error('Invalid breakdown');
        const [word, reading] = line.slice(0, separator).split('|');
        if (!word.trim()) throw new Error('Invalid token');
        return {
          text: text(word),
          reading: text(reading, 4000),
          meanings: { [meaningLanguage]: text(line.slice(separator + 1)) },
        };
      });
  }
  /** Validate structured token data without silently truncating a user-provided field. */
  function tokensFor(value) {
    if (!Array.isArray(value) || value.length > 2000) throw new Error('Invalid token array');
    return value.map((token) => {
      if (!token || typeof token !== 'object' || !text(token.text))
        throw new Error('Invalid token');
      const meanings = {};
      for (const code of LANGUAGES)
        if (token.meanings?.[code]) meanings[code] = text(token.meanings[code]);
      return { text: text(token.text), reading: text(token.reading, 4000), meanings };
    });
  }
  function tokenLines(tokens, base) {
    return (tokens || [])
      .filter((token) => token.meanings?.[base])
      .map(
        (token) =>
          token.text + (token.reading ? ' | ' + token.reading : '') + ' = ' + token.meanings[base],
      )
      .join('\n');
  }
  /** Prefer canonical language forms; fill missing forms from older flat pair fields. */
  function formsFor(row, preferred = {}) {
    const rawForms = { ...row.forms };
    const target =
      row.target || row.targetLanguage || row.targetlanguage || row.lang || preferred.target;
    const base = row.base || row.baseLanguage || row.baselanguage || preferred.base;
    if (LANGUAGES.includes(target) && row.term && !rawForms[target]?.text)
      rawForms[target] = {
        ...rawForms[target],
        text: row.term,
        reading: row.reading ?? rawForms[target]?.reading,
        example: row.exampleTarget ?? row.exampletarget ?? rawForms[target]?.example,
        exampleReading:
          row.exampleReading ?? row.examplereading ?? rawForms[target]?.exampleReading,
        breakdown: row.breakdown ?? rawForms[target]?.breakdown,
        exampleBreakdown: row.exampleBreakdown ?? rawForms[target]?.exampleBreakdown,
      };
    if (LANGUAGES.includes(base) && row.translation && !rawForms[base]?.text)
      rawForms[base] = {
        ...rawForms[base],
        text: row.translation,
        example:
          row.exampleBase ??
          row.examplebase ??
          row.exampleTranslation ??
          row.exampletranslation ??
          rawForms[base]?.example,
      };
    const meaningLanguage = row.sourceBase || base || 'en'; // v1/v2 compatibility only.
    const forms = {};
    for (const code of LANGUAGES) {
      const raw = rawForms[code];
      if (!raw || typeof raw !== 'object' || !text(raw.text)) continue;
      forms[code] = Object.fromEntries(
        fields.map((field) => [
          field,
          text(raw[field], field.toLowerCase().includes('reading') ? 4000 : 2000),
        ]),
      );
      for (const [field, legacy] of [
        ['tokens', 'breakdown'],
        ['exampleTokens', 'exampleBreakdown'],
      ]) {
        forms[code][field] =
          raw[field] != null
            ? tokensFor(raw[field])
            : tokensFromLegacy(raw[legacy], meaningLanguage);
      }
    }
    return forms;
  }
  /** Return null for an invalid card so batch imports can count/reject it safely. */
  function normalize(row, preferred = {}) {
    try {
      if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
      const forms = formsFor(row, preferred);
      const available = LANGUAGES.filter((code) => forms[code]?.text);
      if (available.length < 2) return null;
      const lang = [
        row.target || row.targetLanguage || row.targetlanguage || row.lang,
        preferred.target,
        row.sourceLang,
        'th',
        ...available,
      ].find((code) => available.includes(code));
      const base = [
        row.base || row.baseLanguage || row.baselanguage,
        preferred.base,
        row.sourceBase,
        'en',
        ...available,
      ].find((code) => code !== lang && available.includes(code));
      const topic = text(row.topic || 'daily', 100),
        kind = row.kind || 'word',
        level = row.level || 'beginner';
      if (
        !topic ||
        !base ||
        !lang ||
        !['word', 'sentence'].includes(kind) ||
        !['beginner', 'intermediate', 'upper'].includes(level)
      )
        return null;
      const form = forms[lang];
      return {
        id: row.id ? text(row.id, 128) : newId(),
        topic,
        kind,
        level,
        forms,
        base,
        lang,
        term: form.text,
        reading: form.reading,
        translation: forms[base].text,
        exampleTarget: form.example,
        exampleReading: form.exampleReading,
        exampleBase: forms[base].example,
        breakdown: tokenLines(form.tokens, base),
        exampleBreakdown: tokenLines(form.exampleTokens, base),
      };
    } catch {
      return null;
    }
  }
  /** Persist only stable concept fields; discard projection, browser state, and legacy source fields. */
  function record(card) {
    const normalized = normalize(card);
    if (!normalized) throw new Error('Invalid card for JSON export');
    const { id, topic, kind, level, forms } = normalized;
    return { id, topic, kind, level, forms };
  }
  /** Wrap many independent concepts in the versioned JSON interchange format. */
  function documentFor(cards, metadata = {}) {
    return {
      format: FORMAT,
      exportedAt: new Date().toISOString(),
      ...metadata,
      cards: cards.map(record),
    };
  }
  function stringify(cards, metadata) {
    return JSON.stringify(documentFor(cards, metadata), null, 2) + '\n';
  }
  /** Accept supported versions or plain arrays; enforce the shared maximum before normalization. */
  function parse(content) {
    const payload = JSON.parse(String(content).replace(/^\uFEFF/, ''));
    if (
      payload?.format &&
      !['langcard-cards-v1', 'langcard-cards-v2', FORMAT].includes(payload.format)
    )
      throw new Error('Unsupported card format');
    const cards = Array.isArray(payload) ? payload : payload?.cards;
    if (!Array.isArray(cards) || cards.length > MAX_CARDS) throw new Error('Invalid card array');
    return cards;
  }
  /** Provide a complete ten-language example without inserting it into the shared library. */
  function template() {
    return documentFor(
      [
        {
          id: 'custom-wireless-charger-example',
          topic: 'technology',
          kind: 'word',
          level: 'intermediate',
          forms: {
            th: { text: 'ที่ชาร์จไร้สาย', reading: 'thîi-châat rái-sǎai' },
            zh: { text: '無線充電器', reading: 'wú xiàn chōng diàn qì' },
            en: { text: 'wireless charger', reading: 'wireless charger' },
            ja: { text: 'ワイヤレス充電器', reading: 'waiyaresu jūdenki' },
            es: { text: 'cargador inalámbrico', reading: 'cargador inalámbrico' },
            ko: { text: '무선 충전기', reading: 'museon chungjeongi' },
            fr: { text: 'chargeur sans fil', reading: 'chargeur sans fil' },
            de: { text: 'kabelloses Ladegerät', reading: 'kabelloses Ladegerät' },
            vi: { text: 'bộ sạc không dây', reading: 'bộ sạc không dây' },
            id: { text: 'pengisi daya nirkabel', reading: 'pengisi daya nirkabel' },
          },
        },
      ],
      { scope: 'template' },
    );
  }
  return {
    FORMAT,
    LANGUAGES,
    MAX_BYTES,
    MAX_CARDS,
    normalize,
    record,
    formsFor,
    tokensFromLegacy,
    tokenLines,
    documentFor,
    stringify,
    parse,
    template,
  };
});
