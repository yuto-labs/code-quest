import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function runPython(code) {
  const dir = mkdtempSync(join(tmpdir(), 'cq-py-'));
  const file = join(dir, 'snippet.py');
  writeFileSync(file, code, 'utf8');
  return execFileSync('python', [file], {
    encoding: 'utf8',
    env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
    timeout: 5000,
  }).trimEnd();
}

function runJs(code) {
  const dir = mkdtempSync(join(tmpdir(), 'cq-js-'));
  const file = join(dir, 'snippet.mjs');
  writeFileSync(file, code, 'utf8');
  return execFileSync('node', [file], { encoding: 'utf8', timeout: 5000 }).trimEnd();
}

function run(languageId, code) {
  return languageId === 'javascript' ? runJs(code) : runPython(code);
}

// Only consider this class of bug: blank is a bare literal (string/number)
// immediately followed by a membership-test operator (`in`, `.includes(`,
// `.has(`) -- the exact "Nisshoki / 日の丸" pattern. Compound expressions,
// identifiers, and method-chain answers are intentionally excluded: typing
// a hardcoded literal that happens to match the printed output is a generic
// validator loophole (it exists for almost any fill-blank exercise), not a
// genuinely-ambiguous question design.
const BARE_LITERAL_RE = /^"(?:[^"\\]|\\.)*"$|^'(?:[^'\\]|\\.)*'$|^-?\d+(?:\.\d+)?$/;

function isMembershipContext(codeTemplate) {
  const idx = codeTemplate.indexOf('___BLANK___');
  const after = codeTemplate.slice(idx + '___BLANK___'.length, idx + '___BLANK___'.length + 20);
  return /^\s+in\s/.test(after) || /^\.includes\(/.test(after) || /^\.has\(/.test(after);
}

// Extract sibling literal candidates from the unfilled template (excluding
// the blank placeholder itself).
function extractCandidates(codeTemplate) {
  const candidates = new Set();
  const stringRe = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g;
  let m;
  while ((m = stringRe.exec(codeTemplate))) candidates.add(m[0]);
  const numRe = /(?<![\w.])-?\d+(?:\.\d+)?(?![\w.])/g;
  while ((m = numRe.exec(codeTemplate))) candidates.add(m[0]);
  return [...candidates];
}

const findings = [];
const errors = [];

function check(file, id, languageId, codeTemplate, blank, completedCode) {
  if (!codeTemplate || !codeTemplate.includes('___BLANK___')) return; // single-blank only
  if (!BARE_LITERAL_RE.test(blank)) return; // skip compound-expression answers
  if (!isMembershipContext(codeTemplate)) return; // scope to the demonstrated bug class
  let target;
  try {
    target = run(languageId, completedCode);
  } catch (e) {
    errors.push({ file, id, stage: 'target', error: e.message });
    return;
  }
  const candidates = extractCandidates(codeTemplate)
    .filter(c => c !== blank && BARE_LITERAL_RE.test(c));
  const matches = [];
  for (const candidate of candidates) {
    const candidateCode = codeTemplate.replace('___BLANK___', candidate);
    try {
      const out = run(languageId, candidateCode);
      if (out === target) matches.push(candidate);
    } catch {
      // candidate doesn't even run -- not a valid alternative answer
    }
  }
  if (matches.length > 0) {
    findings.push({ file, id, languageId, blank, target, alternates: matches });
  }
}

const { CHALLENGES } = await import('../src/data/challenges.js');
for (const country of Object.values(CHALLENGES)) {
  for (const lang of Object.values(country)) {
    for (const q of lang) {
      if (q.questionType !== 'fill-blank') continue;
      check('src/data/challenges.js', q.id, q.languageId, q.code, q.blank, q.completedCode);
    }
  }
}

const { JS_CHALLENGES } = await import('../src/data/js_challenges.js');
for (const lang of Object.values(JS_CHALLENGES)) {
  for (const q of lang) {
    if (q.questionType !== 'fill-blank') continue;
    check('src/data/js_challenges.js', q.id, q.languageId, q.code, q.blank, q.completedCode);
  }
}

const { FINAL_MISSIONS } = await import('../src/data/final_missions.js');
function walkFinal(obj, file) {
  if (Array.isArray(obj)) { obj.forEach(o => walkFinal(o, file)); return; }
  if (obj && typeof obj === 'object') {
    if (obj.questionType === 'fill-blank' && obj.code) {
      check(file, obj.id, obj.languageId, obj.code, obj.blank, obj.completedCode);
    }
    for (const v of Object.values(obj)) {
      if (v && typeof v === 'object') walkFinal(v, file);
    }
  }
}
walkFinal(FINAL_MISSIONS, 'src/data/final_missions.js');

console.log(`Findings: ${findings.length}, Errors: ${errors.length}`);
writeFileSync(join(tmpdir(), 'cq-ambiguous.json'), JSON.stringify(findings, null, 2), 'utf8');
console.log('Written to', join(tmpdir(), 'cq-ambiguous.json'));
console.log(JSON.stringify(findings, null, 2));
if (errors.length) console.log('ERRORS:', JSON.stringify(errors, null, 2));
