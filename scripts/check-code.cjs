/**
 * Guard the connections that syntax checks cannot see: script order, generated
 * dictionaries, translated UI keys, and accidentally unreferenced shipped files.
 * This command performs no translations and writes no project data.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { ROOT, loadRuntime, runtimeFiles } = require('./load-data.cjs');

function filesIn(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(folder, entry.name);
    if (entry.name === '__pycache__') return [];
    return entry.isDirectory() ? filesIn(filename) : [filename];
  });
}

const codeFiles = [...filesIn(path.join(ROOT, 'dist')), ...filesIn(path.join(ROOT, 'scripts'))];
for (const filename of codeFiles.filter((file) => /\.(?:js|cjs)$/.test(file))) {
  const result = spawnSync(process.execPath, ['--check', filename], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
}

const { window } = loadRuntime();
const oldLoad = loadRuntime({ withSource: true }).window;
for (const key of [
  'THAI_READINGS',
  'THAI_CARD_TOKENS',
  'THAI_LEXICON',
  'TOKEN_READINGS',
  'TOKEN_ENGLISH',
  'TOKEN_MEANINGS',
]) {
  // Compare values across VM realms; insertion order and object prototypes are irrelevant.
  assert.deepEqual(
    JSON.parse(JSON.stringify(window[key])),
    JSON.parse(JSON.stringify(oldLoad[key])),
    'Runtime/source mismatch: ' + key,
  );
}
assert.deepEqual(
  [...window.LANGUAGES.map((language) => language.code)],
  [...window.LangCardJson.LANGUAGES],
);
assert(!window.SEED_CARDS, 'Authoring rows must not be shipped to the browser');
assert(
  !window.LANGUAGES.some((language) => 'speech' in language),
  'Obsolete device speech configuration',
);

const app = fs.readFileSync(path.join(ROOT, 'dist/app.js'), 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf8');
const dynamicKeys = new Set([
  ...Object.keys(window.TOPIC_META).map((topic) => 'topic_' + topic),
  'levelAll',
  'levelBeginner',
  'levelIntermediate',
  'levelUpper',
  'kindAll',
  'kindWord',
  'kindSentence',
]);
const keys = Object.keys(window.UI_STRINGS.zh).sort();
for (const [locale, strings] of Object.entries(window.UI_STRINGS)) {
  assert.deepEqual(Object.keys(strings).sort(), keys, 'Locale key mismatch: ' + locale);
  for (const key of keys)
    assert.equal(typeof strings[key], 'string', 'Invalid translation: ' + locale + '/' + key);
}
for (const key of keys) {
  assert(
    dynamicKeys.has(key) ||
      app.includes("'" + key + "'") ||
      app.includes('"' + key + '"') ||
      html.includes('"' + key + '"'),
    'Unused UI translation: ' + key,
  );
}
const references = [
  ...[...html.matchAll(/data-i18n(?:-placeholder|-aria|-title)?="([^"]+)"/g)].map(
    (match) => match[1],
  ),
  ...[...app.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)].map((match) => match[1]),
  ...dynamicKeys,
];
for (const key of references) assert(key in window.UI_STRINGS.zh, 'Missing UI translation: ' + key);

const assets = new Set(['dist/index.html', ...runtimeFiles()]);
for (const [, asset] of html.matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g)) {
  if (!/^(?:https?:|#)/.test(asset)) assets.add('dist/' + asset);
}
for (const filename of filesIn(path.join(ROOT, 'dist'))) {
  const relative = path.relative(ROOT, filename).split(path.sep).join('/');
  assert(assets.has(relative), 'Unreferenced shipped file: ' + relative);
}

// AST parsing checks all Python syntax without importing optional builder dependencies.
const python = spawnSync(
  process.env.PYTHON_BINARY || 'python',
  [
    '-c',
    'import ast,pathlib; files=list(pathlib.Path("scripts").glob("*.py")); [ast.parse(p.read_text(encoding="utf-8"), filename=str(p)) for p in files]; print("PASS: Python builder syntax ("+str(len(files))+" files).")',
  ],
  { cwd: ROOT, encoding: 'utf8' },
);
if (python.error) throw python.error;
assert.equal(python.status, 0, python.stderr);
process.stdout.write(python.stdout);
console.log(
  'PASS: script syntax, source/runtime dictionaries, UI keys, and shipped asset references.',
);
