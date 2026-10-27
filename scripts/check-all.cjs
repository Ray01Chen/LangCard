/** Run the developer checks with the same Node executable on Windows and Unix. */
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const checks = [
  ['node_modules/eslint/bin/eslint.js', 'dist', 'scripts'],
  ['scripts/check-code.cjs'],
  ['scripts/check-json.cjs'],
  ['scripts/check-data.cjs'],
];
for (const args of checks) {
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
