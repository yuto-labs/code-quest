import { readFileSync, writeFileSync } from 'node:fs';

const FILES = ['src/data/challenges.js', 'src/data/js_challenges.js', 'src/data/final_missions.js'];
const PATTERN = /実行結果として「(.+?)」が表示されるよう、空欄を埋めてください。/;

for (const file of FILES) {
  let text = readFileSync(file, 'utf8');
  let count = 0;

  // Process line-by-line on the raw source: find "description": "...PATTERN..."
  // lines, extract the captured output, rewrite the description, and insert
  // an "expectedOutput" field right after it.
  const lines = text.split('\n');
  const outLines = [];
  for (const line of lines) {
    const m = line.match(/^(\s*)"description": "(.*)",\s*$/);
    if (m) {
      const indent = m[1];
      const descRaw = m[2];
      // descRaw has JS-escaped quotes; unescape just enough to run PATTERN against it
      const unescaped = descRaw.replace(/\\"/g, '"');
      const pm = unescaped.match(PATTERN);
      if (pm) {
        const output = pm[1];
        const newDesc = unescaped.replace(PATTERN, '実行結果が下に表示されるよう、空欄を埋めてください。');
        const newDescEscaped = newDesc.replace(/"/g, '\\"');
        const outputEscaped = output.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        outLines.push(`${indent}"description": "${newDescEscaped}",`);
        outLines.push(`${indent}"expectedOutput": "${outputEscaped}",`);
        count++;
        continue;
      }
    }
    outLines.push(line);
  }
  text = outLines.join('\n');
  writeFileSync(file, text, 'utf8');
  console.log(`${file}: ${count} updated`);
}
