import { writeFileSync } from 'node:fs';

const findings = [];

function countOccurrences(str, token) {
  if (!str) return 0;
  return (str.match(new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
}

function checkQuestion(file, q, assumeFillBlankDefault) {
  if (!q || typeof q !== 'object' || !q.id) return;
  const type = q.questionType || (assumeFillBlankDefault ? 'fill-blank' : undefined);
  const code = q.code;
  if (!code || (type !== 'fill-blank' && type !== 'multiple-blanks')) return;

  if (type === 'fill-blank') {
    const count = countOccurrences(code, '___BLANK___');
    if (count !== 1) {
      findings.push({ file, id: q.id, type, issue: `expected 1 occurrence of ___BLANK___, found ${count}`, code });
    }
  } else if (type === 'multiple-blanks') {
    const indices = new Set();
    const re = /___BLANK_(\d+)___/g;
    let m;
    while ((m = re.exec(code))) indices.add(Number(m[1]));
    const blanksLen = Array.isArray(q.blanks) ? q.blanks.length : 0;
    if (indices.size !== blanksLen) {
      findings.push({ file, id: q.id, type, issue: `blanks array has ${blanksLen} entries but code has ${indices.size} distinct ___BLANK_N___ tokens`, code });
    }
    // also check indices are 0..N-1 contiguous
    const sorted = [...indices].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== i) {
        findings.push({ file, id: q.id, type, issue: `non-contiguous blank indices: ${sorted.join(',')}`, code });
        break;
      }
    }
  }
}

function walkGeneric(data, file, shape, assumeFillBlankDefault) {
  if (shape === 'country-lang') {
    for (const country of Object.values(data)) {
      for (const lang of Object.values(country)) {
        for (const q of lang) checkQuestion(file, q, assumeFillBlankDefault);
      }
    }
  } else if (shape === 'country') {
    for (const lang of Object.values(data)) {
      for (const q of lang) checkQuestion(file, q, assumeFillBlankDefault);
    }
  } else if (shape === 'flat-array') {
    for (const q of data) checkQuestion(file, q, assumeFillBlankDefault);
  } else if (shape === 'deep') {
    function walk(o) {
      if (Array.isArray(o)) return o.forEach(walk);
      if (o && typeof o === 'object') {
        if (o.id && (o.questionType || o.code)) checkQuestion(file, o, assumeFillBlankDefault);
        for (const v of Object.values(o)) if (v && typeof v === 'object') walk(v);
      }
    }
    walk(data);
  }
}

const sources = [
  ['../src/data/challenges.js', 'CHALLENGES', 'country-lang', true],
  ['../src/data/js_challenges.js', 'JS_CHALLENGES', 'country', true],
  ['../src/data/debug_challenges.js', 'DEBUG_CHALLENGES', 'country-lang', true],
  ['../src/data/execute_challenges.js', 'EXECUTE_CHALLENGES', 'country-lang', true],
  ['../src/data/final_missions.js', 'FINAL_MISSIONS', 'deep', true],
  ['../src/data/brazil_questions.js', null, 'auto', true],
  ['../src/data/france_questions.js', null, 'auto', true],
  ['../src/data/jp_java_questions.js', null, 'auto', true],
  ['../src/data/us_java_questions.js', null, 'auto', true],
  ['../src/data/typescript/questions.js', null, 'auto', false],
];

for (const [path, exportName, shape, assumeFillBlankDefault] of sources) {
  let mod;
  try {
    mod = await import(path);
  } catch (e) {
    console.error('Failed to import', path, e.message);
    continue;
  }
  if (shape === 'auto') {
    // find the first array or object export and guess shape
    for (const [key, val] of Object.entries(mod)) {
      if (Array.isArray(val)) {
        walkGeneric(val, path, 'flat-array', assumeFillBlankDefault);
      } else if (val && typeof val === 'object') {
        // could be country-lang or country shape; just deep-walk to be safe
        walkGeneric(val, path, 'deep', assumeFillBlankDefault);
      }
    }
    continue;
  }
  const data = mod[exportName];
  if (!data) { console.error('Export not found:', exportName, 'in', path); continue; }
  walkGeneric(data, path, shape, assumeFillBlankDefault);
}

console.log('Total findings:', findings.length);
writeFileSync('C:/Users/yuto1/AppData/Local/Temp/blank-mismatch.json', JSON.stringify(findings, null, 2), 'utf8');
for (const f of findings) {
  console.log(`${f.file} | ${f.id} | ${f.type} | ${f.issue}`);
}
