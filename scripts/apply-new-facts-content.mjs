import { readFileSync, writeFileSync } from 'node:fs';
import { NEW_FACTS } from './new-facts-content.mjs';

const FILE = 'src/data/country_facts.js';

function findBlock(text, factId) {
  const idMarker = `"factId": "${factId}",`;
  const idPos = text.indexOf(idMarker);
  if (idPos === -1) return null;
  const blockEnd = text.indexOf('\n  },', idPos);
  return { start: idPos, end: blockEnd === -1 ? text.length : blockEnd };
}

function replaceFieldInBlock(text, factId, field, newVal, issues) {
  const block = findBlock(text, factId);
  if (!block) { issues.push(`${factId}: block not found`); return text; }
  // Find the current "field": "..." line within the block (value may vary), replace wholesale.
  const fieldStart = text.indexOf(`"${field}": "`, block.start);
  if (fieldStart === -1 || fieldStart > block.end) { issues.push(`${factId}: ${field} not found in block`); return text; }
  const valueStart = fieldStart + `"${field}": "`.length;
  // Find the end of this JSON string value, respecting escaped quotes.
  let i = valueStart;
  while (i < text.length) {
    if (text[i] === '\\') { i += 2; continue; }
    if (text[i] === '"') break;
    i++;
  }
  const valueEnd = i; // points at closing quote
  const after = text.slice(valueEnd + 1, valueEnd + 2);
  const suffix = after === ',' ? ',' : '';
  const escaped = newVal.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return text.slice(0, fieldStart) + `"${field}": "${escaped}"${suffix}` + text.slice(valueEnd + 1 + suffix.length);
}

function replaceKeyPointsInBlock(text, factId, newPoints, issues) {
  const block = findBlock(text, factId);
  if (!block) { issues.push(`${factId}: block not found (kp)`); return text; }
  const kpStart = text.indexOf('"keyPointsJa": [', block.start);
  if (kpStart === -1 || kpStart > block.end) { issues.push(`${factId}: keyPointsJa not found`); return text; }
  const arrStart = kpStart + '"keyPointsJa": ['.length;
  const arrEnd = text.indexOf(']', arrStart);
  const newArr = newPoints.map(p => `"${p.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join(',\n      ');
  return text.slice(0, arrStart) + '\n      ' + newArr + '\n    ' + text.slice(arrEnd);
}

let text = readFileSync(FILE, 'utf8');
const issues = [];
let applied = 0;

for (const [factId, content] of Object.entries(NEW_FACTS)) {
  const before = issues.length;
  text = replaceFieldInBlock(text, factId, 'summaryJa', content.summaryJa, issues);
  text = replaceKeyPointsInBlock(text, factId, content.keyPointsJa, issues);
  text = replaceFieldInBlock(text, factId, 'backgroundJa', content.backgroundJa, issues);
  text = replaceFieldInBlock(text, factId, 'historyJa', content.historyJa, issues);
  text = replaceFieldInBlock(text, factId, 'episodeJa', content.episodeJa, issues);
  // detailJa: just set to summary + background (simple, coherent combination)
  text = replaceFieldInBlock(text, factId, 'detailJa', `${content.summaryJa} ${content.backgroundJa}`, issues);
  if (issues.length === before) applied++;
}

writeFileSync(FILE, text, 'utf8');
console.log(`Applied ${applied}/${Object.keys(NEW_FACTS).length}`);
if (issues.length) console.log('Issues:', issues);
