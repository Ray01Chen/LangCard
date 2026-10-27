/** Regression checks for schema migration, lossless JSON backups, and permanent builds.
 * Permanent-import tests use isolated temporary directories and never publish examples.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const json = require('../dist/card-json.js');
const permanent = require('./add-permanent-cards.cjs');
async function main() {
  const catalog = require('./load-data.cjs').loadRuntime().window.CARD_CATALOG;
  const exported = json.stringify(catalog, { scope: 'library' });
  assert(
    Buffer.byteLength(exported, 'utf8') < json.MAX_BYTES,
    'The website must accept its own full-library export',
  );
  const restored = json.parse(exported).map((card) => json.normalize(card));
  assert.equal(restored.length, catalog.length);
  restored.forEach((card, index) => {
    assert(card);
    assert.equal(card.id, catalog[index].id);
    for (const code of json.LANGUAGES)
      for (const field of ['text', 'reading', 'example', 'exampleReading']) {
        assert.equal(card.forms[code][field], (catalog[index].forms[code][field] || '').trim());
      }
    for (const code of json.LANGUAGES) {
      assert.deepEqual(
        card.forms[code].tokens,
        json.tokensFromLegacy(catalog[index].forms[code].breakdown, catalog[index].base || 'en'),
      );
      assert.deepEqual(
        card.forms[code].exampleTokens,
        json.tokensFromLegacy(
          catalog[index].forms[code].exampleBreakdown,
          catalog[index].base || 'en',
        ),
      );
    }
  });
  const legacy = {
    base: 'en',
    target: 'th',
    term: 'ฉันไปทำงาน',
    translation: 'I work.\n"Every day"',
    kind: 'sentence',
    breakdown: 'ฉัน = I\nไป = go\nทำงาน = work',
  };
  const legacyCard = json.normalize(
    json.parse(JSON.stringify({ format: 'langcard-cards-v1', cards: [legacy] }))[0],
  );
  assert.equal(legacyCard.translation, legacy.translation);
  assert.equal(legacyCard.breakdown, legacy.breakdown);
  const v2 = { ...legacy, sourceLang: 'th', sourceBase: 'zh', breakdown: 'ฉัน | chǎn = 我' };
  const migrated = json.normalize(
    json.parse(JSON.stringify({ format: 'langcard-cards-v2', cards: [v2] }))[0],
  );
  assert.deepEqual(migrated.forms.th.tokens, [
    { text: 'ฉัน', reading: 'chǎn', meanings: { zh: '我' } },
  ]);
  assert(!('sourceLang' in migrated) && !('sourceBase' in migrated));
  const independent = json.record(migrated);
  assert.deepEqual(Object.keys(independent), ['id', 'topic', 'kind', 'level', 'forms']);
  assert.deepEqual(
    json.record(json.normalize(independent, { base: 'zh', target: 'th' })),
    independent,
  );
  assert.equal(
    json.normalize({
      forms: { en: { text: 'I' }, th: { text: 'ฉัน', tokens: [{ text: '', meanings: {} }] } },
    }),
    null,
  );
  assert(json.normalize({ term: 'hello', translation: '你好' }, { base: 'zh', target: 'en' }));
  assert.throws(() => json.parse('term,translation\nhello,你好'));
  assert.throws(() => json.parse('{"format":"unknown","cards":[]}'));
  assert.throws(() => json.parse(JSON.stringify(Array(json.MAX_CARDS + 1).fill({}))));
  assert.equal(json.normalize({ ...legacy, forms: {}, kind: 'invalid' }), null);
  const long = json.normalize({
    base: 'en',
    target: 'th',
    term: 'ก'.repeat(600),
    translation: 'a'.repeat(600),
    reading: 'r'.repeat(1200),
  });
  assert.equal(long.term.length, 600);
  assert.equal(long.reading.length, 1200);
  assert(json.normalize(json.template().cards[0]));
  assert(
    !exported.includes('"target":'),
    'Canonical data must not be tied to the selected learning pair',
  );
  assert(
    !/"(?:sourceBase|sourceLang|base|lang)":/.test(exported),
    'Exported cards must not contain a source or study language',
  );
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'langcard-json-'));
  try {
    for (const folder of [temporary, path.join(temporary, '.sites-current')]) {
      fs.mkdirSync(path.join(folder, '.openai'), { recursive: true });
      fs.writeFileSync(
        path.join(folder, '.openai/hosting.json'),
        JSON.stringify({ project_id: 'matching-test-project' }),
      );
    }
    const card = { ...json.record(catalog[0]), id: 'custom-permanent-json-test' };
    const input = path.join(temporary, 'input.json');
    fs.writeFileSync(input, json.stringify([card]));
    const first = await permanent.importFile(input, { root: temporary });
    assert.equal(first.added, 1);
    const mirroredOutput = path.join(temporary, '.sites-current/dist/data-permanent-cards.js');
    assert.equal(fs.readFileSync(mirroredOutput, 'utf8'), fs.readFileSync(first.output, 'utf8'));
    const second = await permanent.importFile(input, { root: temporary });
    assert.equal(second.added, 0);
    assert.equal(second.duplicates, 1);
    const compiled = { window: { CARD_CATALOG: [] } };
    vm.runInNewContext(fs.readFileSync(first.output, 'utf8'), compiled);
    assert.equal(compiled.window.CARD_CATALOG[0].forms.th.text, card.forms.th.text);
    assert.equal(compiled.window.CARD_CATALOG[0].permanent, true);
    const before = fs.readFileSync(first.source, 'utf8'),
      previousBuild = fs.readFileSync(first.output, 'utf8');
    fs.writeFileSync(
      input,
      JSON.stringify({ cards: [{ ...legacy, id: 'custom-incomplete-test' }] }),
    );
    await assert.rejects(permanent.importFile(input, { root: temporary }), /missing languages/);
    assert.equal(fs.readFileSync(first.source, 'utf8'), before);
    assert.equal(fs.readFileSync(first.output, 'utf8'), previousBuild);
    const duplicate = await permanent.merge([], [card], { catalog: [catalog[0]] });
    assert.equal(duplicate.duplicates, 1, 'Exact equivalents with different ids must be skipped');
    permanent.build({ root: temporary });
    assert.equal(fs.readFileSync(first.output, 'utf8'), previousBuild);
    fs.writeFileSync(
      path.join(temporary, '.sites-current/.openai/hosting.json'),
      JSON.stringify({ project_id: 'other-test-project' }),
    );
    fs.writeFileSync(mirroredOutput, 'foreign project sentinel');
    permanent.build({ root: temporary });
    assert.equal(
      fs.readFileSync(mirroredOutput, 'utf8'),
      'foreign project sentinel',
      'Never synchronize into a different Sites project',
    );
  } finally {
    const resolved = fs.realpathSync(temporary);
    assert(
      resolved.startsWith(fs.realpathSync(os.tmpdir()) + path.sep),
      'Verify the test cleanup target',
    );
    fs.rmSync(resolved, { recursive: true, force: true });
  }
  console.log(
    JSON.stringify({
      cardsRoundTripped: restored.length,
      jsonBytes: Buffer.byteLength(exported),
      passed: true,
    }),
  );
  console.log(
    'PASS: language fields, stable ids, legacy JSON, template, long text, duplicate imports, permanent builds, and failed-import rollback.',
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
