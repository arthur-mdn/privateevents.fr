import { existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

export function removeDsStoreFiles(rootDir) {
  if (!rootDir || !existsSync(rootDir)) return 0;

  let removed = 0;

  function walk(dir) {
    for (const name of readdirSync(dir)) {
      const fullPath = join(dir, name);
      if (name === '.DS_Store') {
        rmSync(fullPath, { force: true });
        removed += 1;
        continue;
      }
      if (statSync(fullPath).isDirectory()) walk(fullPath);
    }
  }

  walk(rootDir);
  return removed;
}
