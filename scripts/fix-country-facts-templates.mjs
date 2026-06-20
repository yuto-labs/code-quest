import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/data/country_facts.js';
const BROKEN_MARK = 'という位置づけで説明できます';

function stripPeriod(s) {
  return s.endsWith('。') ? s.slice(0, -1) : s;
}

function fixKeyPoint3(s) {
  if (!s) return s;
  const hasPeriod = s.endsWith('。');
  const core = hasPeriod ? s.slice(0, -1) : s;
  if (!core.endsWith('です')) return s; // already a complete sentence, leave as-is
  const stem = core.slice(0, -2);
  let fixed;
  if (stem.endsWith('の')) {
    fixed = stem.slice(0, -1) + 'です';
  } else if (stem.endsWith('な')) {
    fixed = stem.slice(0, -1) + 'です';
  } else if (/[るくぐすつぶむぬう]$/.test(stem)) {
    fixed = stem + 'ことです';
  } else {
    fixed = stem + 'です';
  }
  return fixed + (hasPeriod ? '。' : '');
}

function buildTexts(fact) {
  const title = fact.titleJa;
  const summary = fact.summaryJa;
  const summaryCore = stripPeriod(summary);
  const kp0 = fact.keyPointsJa?.[0] || '';
  const kp1 = fact.keyPointsJa?.[1] || kp0;

  const backgroundJa = `${title}は、${summaryCore}という事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「${kp0}」という点です。`;
  const historyJa = `${title}を歴史的にみると、「${kp0}」「${kp1}」という背景があります。${summaryCore}という事実は、時代や制度の変化と結びついて成り立っています。`;
  const episodeJa = `${title}について具体的に知っておきたいのは「${kp0}」と「${kp1}」です。${summaryCore}という点を踏まえると、実際にどのような場面で意味を持つかが分かります。`;
  const detailJa = `${summary} ${title}は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「${kp0}」という点です。歴史的には「${kp0}」「${kp1}」という背景があり、${summaryCore}という事実は時代や制度の変化と結びついています。`;

  return { backgroundJa, historyJa, episodeJa, detailJa };
}

const { COUNTRY_FACTS } = await import('../src/data/country_facts.js');
const targets = COUNTRY_FACTS.filter(f =>
  (f.backgroundJa && f.backgroundJa.includes(BROKEN_MARK)) ||
  (f.historyJa && f.historyJa.includes('が重要になります')) ||
  (f.episodeJa && f.episodeJa.includes('も合わせて見ると')) ||
  (f.detailJa && f.detailJa.includes(BROKEN_MARK)) ||
  (f.keyPointsJa?.[3] && fixKeyPoint3(f.keyPointsJa[3]) !== f.keyPointsJa[3])
);
console.log('Facts to fix:', targets.length);

let text = readFileSync(FILE, 'utf8');
let applied = 0;
const notFound = [];

// Bounds the search to this fact's own block so duplicate boilerplate text
// in *other* facts can't cause a false "not unique" match.
function findBlock(text, factId) {
  const idMarker = `"factId": "${factId}",`;
  const idPos = text.indexOf(idMarker);
  if (idPos === -1) return null;
  const blockEnd = text.indexOf('\n  },', idPos);
  return { start: idPos, end: blockEnd === -1 ? text.length : blockEnd };
}

function replaceFieldInBlock(text, factId, field, oldVal, newVal, issues) {
  const block = findBlock(text, factId);
  if (!block) { issues.push(`${factId}: block not found`); return text; }
  for (const suffix of [',', '']) {
    const oldLine = `"${field}": "${oldVal}"${suffix}`;
    const pos = text.indexOf(oldLine, block.start);
    if (pos === -1 || pos > block.end) continue;
    const newLine = `"${field}": "${newVal}"${suffix}`;
    return text.slice(0, pos) + newLine + text.slice(pos + oldLine.length);
  }
  issues.push(`${factId}: ${field} not found in block`);
  return text;
}

for (const fact of targets) {
  const { backgroundJa, historyJa, episodeJa, detailJa } = buildTexts(fact);
  const issues = [];
  text = replaceFieldInBlock(text, fact.factId, 'detailJa', fact.detailJa, detailJa, issues);
  text = replaceFieldInBlock(text, fact.factId, 'backgroundJa', fact.backgroundJa, backgroundJa, issues);
  text = replaceFieldInBlock(text, fact.factId, 'historyJa', fact.historyJa, historyJa, issues);
  text = replaceFieldInBlock(text, fact.factId, 'episodeJa', fact.episodeJa, episodeJa, issues);
  if (issues.length) notFound.push(...issues); else applied++;
}

// Second pass: fix keyPointsJa[3] entries (plain array string, not "field": "value")
for (const fact of targets) {
  const kp3 = fact.keyPointsJa?.[3];
  if (!kp3) continue;
  const fixedKp3 = fixKeyPoint3(kp3);
  if (fixedKp3 === kp3) continue;
  const block = findBlock(text, fact.factId);
  if (!block) { notFound.push(`${fact.factId}: keyPointsJa[3] block not found`); continue; }
  const oldEntry = `"${kp3}"`;
  const pos = text.indexOf(oldEntry, block.start);
  if (pos === -1 || pos > block.end) { notFound.push(`${fact.factId}: keyPointsJa[3] not found in block`); continue; }
  text = text.slice(0, pos) + `"${fixedKp3}"` + text.slice(pos + oldEntry.length);
}

writeFileSync(FILE, text, 'utf8');
console.log(`Applied ${applied}/${targets.length}`);
if (notFound.length) console.log('Issues:', notFound);
