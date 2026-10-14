import { removeDsStoreFiles } from './clean-ds-store.mjs';

const target = process.argv[2] || 'dist';
const removed = removeDsStoreFiles(target);

console.log(
  removed > 0
    ? `Removed ${removed} .DS_Store file(s) from ${target}`
    : `No .DS_Store files found in ${target}`,
);
