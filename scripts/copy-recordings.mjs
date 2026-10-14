import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SKIP = new Set(['.gitkeep', '.DS_Store']);

export function getRecordingsSourceDir(rootDir = process.cwd()) {
  return join(rootDir, 'recordings');
}

export function listRecordingFiles(sourceDir) {
  if (!existsSync(sourceDir)) return [];
  return readdirSync(sourceDir).filter((name) => {
    if (SKIP.has(name) || name.startsWith('.')) return false;
    return statSync(join(sourceDir, name)).isFile();
  });
}

export function copyRecordingsToDist({
  rootDir = process.cwd(),
  outDir = join(rootDir, 'dist'),
} = {}) {
  const sourceDir = getRecordingsSourceDir(rootDir);
  const files = listRecordingFiles(sourceDir);
  const destDir = join(outDir, 'recordings');

  mkdirSync(destDir, { recursive: true });

  for (const name of files) {
    cpSync(join(sourceDir, name), join(destDir, name));
  }

  return { sourceDir, destDir, files };
}
