/**
 * Shared data loader for checks and maintenance commands.
 * index.html is the runtime load-order manifest; authoring inputs live outside dist.
 * Each invocation gets a fresh VM so dictionaries and translation caches cannot leak
 * between tests. The browser still loads normal deferred scripts and needs no bundler.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname, '..');

const SOURCE_FILES = [
  'dist/config.js',
  'scripts/source/starter-cards.js',
  'scripts/source/data-th-expanded.js',
  'scripts/source/data-th-fluency.js',
  'scripts/source/data-th-more.js',
  'scripts/source/data-th-glossary.js',
  'scripts/source/data-th-words.js',
  'dist/data-th-readings.js',
];

/** Read local deferred data/adapters in HTML order, excluding the DOM controller. */
function runtimeFiles(root = ROOT) {
  const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
  return [...html.matchAll(/<script\b[^>]*\bsrc="([^"?#]+)(?:\?[^"#]*)?"[^>]*>/g)]
    .map(([, file]) => file)
    .filter((file) => file !== 'app.js')
    .map((file) => {
      const resolved = path.resolve(root, 'dist', file);
      if (!resolved.startsWith(path.resolve(root, 'dist') + path.sep))
        throw new Error('Script outside dist: ' + file);
      return path.relative(root, resolved);
    });
}

function createContext() {
  return vm.createContext({
    window: {},
    localStorage: { getItem: () => null, setItem: () => {} },
    fetch: globalThis.fetch,
    AbortController,
    URLSearchParams,
    Intl,
    setTimeout,
    clearTimeout,
    console,
  });
}

function evaluateFiles(context, files, root) {
  for (const file of files)
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

/** Load legacy source rows only when rebuilding catalogs or checking preservation. */
function loadSeeds({ root = ROOT } = {}) {
  const context = createContext();
  evaluateFiles(context, SOURCE_FILES, root);
  return { context, window: context.window };
}

/** Match the deployed data exactly; withSource additionally supplies builder inputs. */
function loadRuntime({ root = ROOT, withSource = false } = {}) {
  const context = withSource ? loadSeeds({ root }).context : createContext();
  evaluateFiles(context, runtimeFiles(root), root);
  return { context, window: context.window };
}

module.exports = { ROOT, SOURCE_FILES, runtimeFiles, loadSeeds, loadRuntime };

// Python builders consume JSON over stdout; no generated files or network calls.
if (require.main === module) {
  if (process.argv.length !== 3 || process.argv[2] !== '--seed')
    throw new Error('Usage: node scripts/load-data.cjs --seed');
  const { window } = loadSeeds();
  console.log(
    JSON.stringify({
      cards: window.SEED_CARDS,
      gloss: window.THAI_GLOSSARY,
      readings: window.THAI_READINGS,
    }),
  );
}
