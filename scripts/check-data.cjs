// Audit actual app adapters, filters, breakdowns, links and backups.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const { loadRuntime, loadSeeds } = require('./load-data.cjs');
global.window = loadRuntime().window;
global.localStorage = { getItem: () => null, setItem: () => {} };
global.location = { hash: '' };
global.document = { querySelector: () => null, getElementById: () => null };
const source = fs.readFileSync(path.join(dist, 'app.js'), 'utf8');
assert(source.includes('  init();'));
vm.runInThisContext(
  source.replace(
    '  init();',
    '  window.__audit = { state, pairCards, filteredCards, breakdownItems, fullReading, importedCard, isMastered };',
  ),
  { filename: 'app.js' },
);
const app = window.__audit,
  model = window.LangCardLanguages,
  cards = window.CARD_CATALOG;
const migrationStorage = {
  pair: { base: 'zh', target: 'th' },
  masteredIds: [cards[0].id],
  customCards: [
    {
      id: 'custom-legacy-gloss',
      forms: { en: { text: 'I go' } },
      base: 'zh',
      lang: 'th',
      topic: 'daily',
      kind: 'sentence',
      term: 'ฉันไป',
      translation: '我去',
      breakdown: 'ฉัน | chǎn = 我\nไป | bpai = 去',
    },
  ],
};
vm.runInNewContext(
  source.replace(
    '  init();',
    '  window.__migrationAudit = { state, pairCards, breakdownItems, isMastered };',
  ),
  {
    window,
    localStorage: { getItem: () => JSON.stringify(migrationStorage) },
    location: { hash: '' },
    document: {},
  },
);
const migration = window.__migrationAudit;
assert(
  migration.state.masteredIds.has('th:' + cards[0].id),
  'Legacy learning progress must be retained',
);
assert(migration.isMastered(migration.pairCards()[0]));
const legacyCustom = migration.pairCards().find((card) => card.id === 'custom-legacy-gloss');
assert.equal(migration.breakdownItems(legacyCustom)[0][1], '我');
migration.state.base = 'en';
assert.notEqual(
  migration.breakdownItems(migration.pairCards().find((card) => card.id === legacyCustom.id))[0][1],
  '我',
  'Chinese manual meanings must not appear as English',
);
assert(!('sourceLang' in legacyCustom) && !('sourceBase' in legacyCustom));
const codes = window.LANGUAGES.map(({ code }) => code),
  errors = [],
  ids = new Set();
function check(condition, message) {
  if (!condition) errors.push(message);
}
for (const card of cards) {
  check(!ids.has(card.id), `Duplicate ID: ${card.id}`);
  ids.add(card.id);
  check(
    ['word', 'sentence'].includes(card.kind) &&
      ['beginner', 'intermediate', 'upper'].includes(card.level) &&
      (window.TOPIC_META[card.topic] || (card.permanent && card.topic)),
    `Invalid metadata: ${card.id}`,
  );
  for (const code of codes)
    check(
      card.forms[code]?.text?.trim() && !/[\uFFFD\u0000]/.test(card.forms[code].text),
      `Invalid form: ${card.id}/${code}`,
    );
}
check(
  loadSeeds().window.SEED_CARDS.every((card) => ids.has(card.id)),
  'Original cards were lost',
);
let languagePairs = 0,
  projectedCards = 0,
  breakdowns = 0,
  tokenOccurrences = 0,
  meaningChecks = 0,
  readingChecks = 0,
  englishFallbackChecks = 0;
for (const base of codes)
  for (const target of codes.filter((code) => code !== base)) {
    app.state.base = base;
    app.state.target = target;
    const projected = app.pairCards();
    languagePairs++;
    projectedCards += projected.length;
    check(projected.length === cards.length, `Missing cards: ${base}/${target}`);
    projected.forEach((card, index) =>
      check(
        card.id === cards[index].id &&
          card.term === cards[index].forms[target].text &&
          card.translation === cards[index].forms[base].text,
        `Projection: ${card.id}/${base}/${target}`,
      ),
    );
  }
for (const target of codes) {
  app.state.target = target;
  app.state.base = target === 'en' ? 'zh' : 'en';
  const tokens = new Set();
  const originalTokens = new Set();
  for (const card of app.pairCards()) {
    const reading = app.fullReading(card);
    readingChecks++;
    check(Boolean(reading) || card.permanent, `Missing reading: ${card.id}/${target}`);
    if (target === 'th') {
      check(!/[\u0e00-\u0e7f]/.test(reading), `Invalid Thai romanization: ${card.id}`);
    }
    const link = new URL(model.googleUrl(card.term, target, app.state.base));
    check(
      link.hostname === 'translate.google.com' &&
        link.searchParams.get('text') === card.term &&
        link.searchParams.get('sl') === (target === 'zh' ? 'zh-TW' : target),
      `Google link: ${card.id}/${target}`,
    );
    for (const field of [
      card.kind === 'sentence' ? 'term' : null,
      card.exampleTarget ? 'example' : null,
    ].filter(Boolean)) {
      const items = app.breakdownItems(card, field);
      breakdowns++;
      check(items.length > 0, `Missing breakdown: ${card.id}/${target}/${field}`);
      if (field === 'example') {
        check(
          app.fullReading(card, field) || card.permanent,
          `Missing example reading: ${card.id}/${target}`,
        );
      }
      for (const [word, , wordReading] of items) {
        tokens.add(word);
        tokenOccurrences++;
        readingChecks++;
        if (!card.permanent) originalTokens.add(word);
        check(wordReading || card.permanent, `Missing token reading: ${target}/${word}`);
        if (target === 'th') {
          check(!/[\u0e00-\u0e7f]/.test(wordReading), `Invalid token romanization: ${word}`);
        }
      }
    }
  }
  for (const word of tokens)
    for (const base of codes.filter((code) => code !== target)) {
      const native = model.lookup(word, target, base)?.trim();
      const fallback = model.lookup(word, target, 'en')?.trim();
      check(
        native || fallback || !originalTokens.has(word),
        `Missing token meaning and English fallback: ${target}/${base}/${word}`,
      );
      if (target === 'th' && base === 'zh' && originalTokens.has(word))
        check(native, `Missing Thai→Chinese meaning: ${word}`);
      if (!native && fallback) englishFallbackChecks++;
      meaningChecks++;
    }
}
check(!fs.existsSync(path.join(dist, 'audio')), 'Bundled audio directory remains');
check(!fs.existsSync(path.join(dist, 'data-th-audio.js')), 'Audio index remains');
check(
  !/new Audio|speechSynthesis|SpeechSynthesisUtterance|THAI_AUDIO|soundIcon/.test(source),
  'In-app audio playback remains',
);
app.state.base = 'zh';
app.state.target = 'th';
app.state.level = 'all';
app.state.topic = 'all';
for (const kind of ['word', 'sentence']) {
  app.state.kind = kind;
  check(
    app.filteredCards().every((card) => card.kind === kind),
    `Kind filter: ${kind}`,
  );
}
app.state.kind = 'sentence';
app.state.level = 'upper';
app.state.topic = 'work';
check(
  app.filteredCards().length > 0 &&
    app
      .filteredCards()
      .every((card) => card.kind === 'sentence' && card.level === 'upper' && card.topic === 'work'),
  'Combined filters failed',
);
const sample = {
  base: 'en',
  target: 'th',
  topic: 'daily',
  level: 'intermediate',
  kind: 'sentence',
  term: 'ฉันไปทำงาน',
  reading: 'chǎn bpai tham-ngaan',
  translation: 'I go to work. "Every day"',
  breakdown: 'ฉัน = I\nไป = go\nทำงาน = work',
};
const exported = window.LangCardJson.stringify([sample]),
  parsed = window.LangCardJson.parse(exported).map(app.importedCard);
check(
  parsed.length === 1 &&
    parsed[0].term === sample.term &&
    parsed[0].translation === sample.translation &&
    parsed[0].breakdown === sample.breakdown,
  'JSON Unicode/quotes/multiline round trip',
);
const saved = app.importedCard({ ...sample, forms: cards[0].forms });
check(Object.keys(saved.forms).length === codes.length, 'JSON import lost language forms');
const promoted = app.importedCard(window.LangCardJson.record(cards[0]));
promoted.forms.th.text += ' local override';
promoted.term = promoted.forms[promoted.lang].text;
app.state.customCards = [promoted];
const promotedPair = app.pairCards();
check(
  promotedPair.filter((card) => card.id === promoted.id).length === 1 &&
    promotedPair.find((card) => card.id === promoted.id).custom,
  'Promoted permanent card duplicates or loses the local copy',
);
app.state.customCards = [];
app.state.base = 'en';
app.state.target = 'th';
const exportedCards = window.LangCardJson.documentFor(app.pairCards()).cards;
app.state.base = 'fr';
app.state.target = 'ja';
assert.deepEqual(
  window.LangCardJson.documentFor(app.pairCards()).cards,
  exportedCards,
  'Changing the study pair must not change card data',
);
check(
  app.importedCard({
    base: 'en',
    target: 'th',
    term: cards[0].forms.th.text,
    translation: 'Hello',
    kind: 'sentence',
  }),
  'Automatic sentence import rejected',
);
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const [, asset] of html.matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g))
  if (!/^(?:https?:|#)/.test(asset))
    check(fs.existsSync(path.join(dist, asset)), `Missing asset: ${asset}`);
const summary = {
  cards: cards.length,
  words: cards.filter((card) => card.kind === 'word').length,
  sentences: cards.filter((card) => card.kind === 'sentence').length,
  languages: codes.length,
  languagePairs,
  projectedCards,
  breakdowns,
  tokenOccurrences,
  meaningChecks,
  englishFallbackChecks,
  readingChecks,
  pronunciation: 'Google Translate',
  bundledAudioFiles: 0,
  errors: errors.length,
};
console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(errors.slice(0, 35).join('\n'));
  process.exitCode = 1;
} else
  console.log(
    'PASS: shared cards, filters, all sentence breakdowns/readings/meanings, Google-only pronunciation links, and multilingual JSON round trip.',
  );
if (process.argv.includes('--json'))
  fs.writeFileSync(
    path.join(root, 'scripts', 'last-card-audit.json'),
    JSON.stringify(summary, null, 2) + '\n',
  );
