// Import a website JSON export into versioned source, then rebuild static cards.
// node scripts/add-permanent-cards.cjs --import path/to/cards.json
// node scripts/add-permanent-cards.cjs --build
const fs = require('node:fs');
const path = require('node:path');
const json = require('../dist/card-json.js');
const ROOT = path.resolve(__dirname, '..');
const SOURCE = 'cards/permanent-cards.json';
const OUTPUT = 'dist/data-permanent-cards.js';

function readSource(root = ROOT) {
  const file = path.join(root, SOURCE);
  return fs.existsSync(file) ? json.parse(fs.readFileSync(file, 'utf8')) : [];
}
/** Validate the entire batch and all ten forms before any source file is written. */
function validate(rows, reservedIds = []) {
  const ids = new Set(reservedIds);
  return rows.map((row) => {
    const card = json.normalize(row);
    if (!card) throw new Error('Invalid card: ' + (row?.id || '(missing id)'));
    if (ids.has(card.id)) throw new Error('Duplicate card id: ' + card.id);
    ids.add(card.id);
    const missing = json.LANGUAGES.filter((code) => !card.forms[code]?.text);
    if (missing.length)
      throw new Error('Card ' + card.id + ' is missing languages: ' + missing.join(', '));
    return json.record(card);
  });
}
/** Generate only permanent card records; never copy browser preferences into the catalog. */
function render(cards) {
  const catalog = cards.map((card) => ({ ...card, permanent: true }));
  return (
    '// Generated from cards/permanent-cards.json. Run scripts/add-permanent-cards.cjs --build.\nwindow.CARD_CATALOG.push(...' +
    JSON.stringify(catalog, null, 2) +
    ');\n'
  );
}
/** Synchronize source/output only when both workspaces declare the exact same Site project. */
function syncProjectCopies(root) {
  const manifest = path.join(root, '.openai', 'hosting.json');
  if (!fs.existsSync(manifest)) return;
  const projectId = JSON.parse(fs.readFileSync(manifest, 'utf8')).project_id;
  const counterpart =
    path.basename(root) === '.sites-current'
      ? path.dirname(root)
      : path.join(root, '.sites-current');
  const otherManifest = path.join(counterpart, '.openai', 'hosting.json');
  if (
    !fs.existsSync(otherManifest) ||
    JSON.parse(fs.readFileSync(otherManifest, 'utf8')).project_id !== projectId
  )
    return;
  for (const relative of [SOURCE, OUTPUT]) {
    const from = path.join(root, relative),
      to = path.join(counterpart, relative);
    if (!fs.existsSync(from)) continue;
    const contents = fs.readFileSync(from, 'utf8');
    fs.mkdirSync(path.dirname(to), { recursive: true });
    if (!fs.existsSync(to) || fs.readFileSync(to, 'utf8') !== contents)
      fs.writeFileSync(to, contents);
  }
}
/** Compile the versioned JSON source deterministically; do not alter the authored source. */
function build({ root = ROOT, reservedIds = [] } = {}) {
  const cards = validate(readSource(root), reservedIds);
  const filename = path.resolve(root, OUTPUT);
  const source = render(cards);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  if (!fs.existsSync(filename) || fs.readFileSync(filename, 'utf8') !== source)
    fs.writeFileSync(filename, source);
  syncProjectCopies(root);
  return { cards: cards.length, source: path.join(root, SOURCE), output: filename };
}
/** Detect equivalent concepts even if their import files use different IDs. */
function fingerprint(card) {
  return JSON.stringify([
    card.kind,
    ...json.LANGUAGES.map((code) =>
      String(card.forms[code]?.text || '')
        .normalize('NFKC')
        .toLocaleLowerCase(),
    ),
  ]);
}
/** Merge in memory first. Any invalid or incomplete card leaves both project files unchanged. */
async function merge(existing, rows, { catalog = [], complete } = {}) {
  const records = validate(
    existing,
    catalog.map((card) => card.id),
  );
  const ids = new Set([...catalog, ...records].map((card) => card.id));
  const signatures = new Set([...catalog, ...records].map(fingerprint));
  let added = 0,
    duplicates = 0;
  for (const row of rows) {
    const card = json.normalize(row);
    if (!card)
      throw new Error('Invalid card. No files have been changed: ' + (row?.id || '(missing id)'));
    if (ids.has(card.id)) {
      duplicates++;
      continue;
    }
    if (json.LANGUAGES.some((code) => !card.forms[code]?.text) && complete) await complete(card);
    const checked = validate([card])[0];
    const signature = fingerprint(checked);
    if (signatures.has(signature)) {
      duplicates++;
      continue;
    }
    ids.add(checked.id);
    signatures.add(signature);
    records.push(checked);
    added++;
    if (records.length > json.MAX_CARDS)
      throw new Error(
        'The permanent source supports up to ' +
          json.MAX_CARDS +
          ' cards. No files have been changed.',
      );
  }
  return { records, added, duplicates };
}
/** Use the same adapters and script order as the deployed page. */
function loadLanguageTools() {
  const { window } = require('./load-data.cjs').loadRuntime();
  return {
    catalog: window.CARD_CATALOG.filter((card) => !card.permanent),
    model: window.LangCardLanguages,
  };
}
/** Read a browser export, validate/complete it, then write authoritative JSON and rebuildable JS. */
async function importFile(filename, { root = ROOT, catalog = [], complete } = {}) {
  const stat = fs.statSync(filename);
  if (!filename.toLowerCase().endsWith('.json') || stat.size > json.MAX_BYTES)
    throw new Error('Use a JSON file under 50 MB.');
  const rows = json.parse(fs.readFileSync(filename, 'utf8'));
  const result = await merge(readSource(root), rows, { catalog, complete });
  // Validate everything before writing either file; translation failures preserve source.
  const source = path.resolve(root, SOURCE),
    output = path.resolve(root, OUTPUT);
  if (path.resolve(filename) === source || path.resolve(filename) === output)
    throw new Error('Choose an exported JSON file as input; use --build for edited source.');
  fs.mkdirSync(path.dirname(source), { recursive: true });
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(
    source,
    JSON.stringify({ format: json.FORMAT, cards: result.records }, null, 2) + '\n',
  );
  fs.writeFileSync(output, render(result.records));
  syncProjectCopies(root);
  return {
    added: result.added,
    duplicates: result.duplicates,
    total: result.records.length,
    source,
    output,
  };
}
async function main() {
  const args = process.argv.slice(2);
  const { catalog, model } = loadLanguageTools();
  if (args.length === 1 && args[0] === '--build') {
    console.log(JSON.stringify(build({ reservedIds: catalog.map((card) => card.id) })));
  } else if (
    (args.length === 2 || args.length === 3) &&
    args[0] === '--import' &&
    (!args[2] || args[2] === '--offline')
  ) {
    console.log('Checking JSON and language versions. Missing translations may need a connection.');
    const result = await importFile(path.resolve(args[1]), {
      catalog,
      complete: args[2] === '--offline' ? undefined : (card) => model.completeForms(card),
    });
    console.log(JSON.stringify(result, null, 2));
    console.log(
      'Source updated. Publish the website to make these cards available to every device.',
    );
  } else
    throw new Error(
      'Usage: node scripts/add-permanent-cards.cjs --import file.json [--offline] | --build',
    );
}
module.exports = { readSource, validate, render, build, merge, importFile };
if (require.main === module)
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
