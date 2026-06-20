import { readFileSync, writeFileSync } from 'node:fs';

const results = JSON.parse(readFileSync('C:/Users/yuto1/AppData/Local/Temp/pe-results.json', 'utf8'));

const byFile = new Map();
for (const r of results) {
  const file = r.file.replace('../src/', 'src/');
  if (!byFile.has(file)) byFile.set(file, []);
  byFile.get(file).push(r);
}

function findBlock(text, id) {
  const idMarker = `"id": "${id}",`;
  const idPos = text.indexOf(idMarker);
  if (idPos === -1) return null;
  // Block end: next "},\n" at same or lower indent, or next sibling "id" occurrence as fallback bound.
  const nextIdPos = text.indexOf('"id": "', idPos + idMarker.length);
  return { start: idPos, end: nextIdPos === -1 ? text.length : nextIdPos };
}

let totalApplied = 0;
let totalIssues = [];

for (const [file, items] of byFile) {
  let text = readFileSync(file, 'utf8');
  for (const { id, old, new: newText } of items) {
    const block = findBlock(text, id);
    if (!block) { totalIssues.push(`${file}:${id} block not found`); continue; }
    const oldEscaped = old.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const oldLine = `"programmingExplanation": "${oldEscaped}"`;
    let pos = text.indexOf(oldLine, block.start);
    if (pos === -1 || pos > block.end) {
      // try without exact escaping match fallback: search whole file bounded loosely
      totalIssues.push(`${file}:${id} old text not found in block`);
      continue;
    }
    const escaped = newText.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const newLine = `"programmingExplanation": "${escaped}"`;
    text = text.slice(0, pos) + newLine + text.slice(pos + oldLine.length);
    totalApplied++;
  }
  writeFileSync(file, text, 'utf8');
}

console.log('Applied:', totalApplied, '/', results.length);
if (totalIssues.length) console.log('Issues:', totalIssues);
