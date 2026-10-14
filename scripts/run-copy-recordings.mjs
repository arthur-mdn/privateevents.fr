import { copyRecordingsToDist } from './copy-recordings.mjs';

const { destDir, files } = copyRecordingsToDist();

if (files.length === 0) {
  console.log('No audio files found in recordings/ (skipped .gitkeep).');
} else {
  console.log(`Copied ${files.length} audio file(s) to ${destDir}`);
}
