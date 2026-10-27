// These checks target unused/invalid code, not subjective style (Prettier owns formatting).
const sharedGlobals = Object.fromEntries(
  [
    'window',
    'document',
    'localStorage',
    'location',
    'history',
    'confirm',
    'console',
    'setTimeout',
    'clearTimeout',
    'URL',
    'URLSearchParams',
    'Blob',
    'AbortController',
    'fetch',
    'crypto',
  ].map((name) => [name, 'readonly']),
);

module.exports = [
  {
    files: ['dist/**/*.js', 'scripts/**/*.js', 'scripts/**/*.cjs'],
    ignores: ['dist/data-*.js', 'scripts/source/data-th-glossary.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: sharedGlobals,
    },
    rules: {
      'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'no-dupe-keys': 'error',
      'no-unreachable': 'error',
    },
  },
  {
    files: ['scripts/**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
      },
    },
  },
  {
    files: ['dist/card-json.js'],
    languageOptions: { globals: { module: 'readonly' } },
  },
];
