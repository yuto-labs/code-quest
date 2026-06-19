import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const TARGET = '下記のコードを実行したときにテーマと一致する結果が表示されるよう、空欄を埋めてください';

function runPython(code) {
  const dir = mkdtempSync(join(tmpdir(), 'cq-py-'));
  const file = join(dir, 'snippet.py');
  writeFileSync(file, code, 'utf8');
  return execFileSync('python', [file], {
    encoding: 'utf8',
    env: { ...process.env, PYTHONIOENCODING: 'utf-8', PYTHONUTF8: '1' },
  }).trimEnd();
}

function runJs(code) {
  const dir = mkdtempSync(join(tmpdir(), 'cq-js-'));
  const file = join(dir, 'snippet.mjs');
  writeFileSync(file, code, 'utf8');
  return execFileSync('node', [file], { encoding: 'utf8' }).trimEnd();
}

function runCode(languageId, code) {
  if (languageId === 'javascript') return runJs(code);
  return runPython(code);
}

function buildDescription(oldDesc, output) {
  const idx = oldDesc.indexOf('を題材に、');
  const theme = idx >= 0 ? oldDesc.slice(0, idx) : oldDesc;
  return `${theme}を題材に、実行結果として「${output}」が表示されるよう、空欄を埋めてください。`;
}

const results = [];
const errors = [];

function collect(file, id, languageId, oldDesc, completedCode) {
  if (!oldDesc.includes(TARGET)) return;
  try {
    const output = runCode(languageId, completedCode);
    const newDesc = buildDescription(oldDesc, output);
    results.push({ file, id, oldDesc, newDesc, output });
  } catch (e) {
    errors.push({ file, id, error: e.message });
  }
}

const { CHALLENGES } = await import('../src/data/challenges.js');
for (const country of Object.values(CHALLENGES)) {
  for (const lang of Object.values(country)) {
    for (const q of lang) {
      collect('src/data/challenges.js', q.id, q.languageId, q.description, q.completedCode);
    }
  }
}

const { JS_CHALLENGES } = await import('../src/data/js_challenges.js');
for (const lang of Object.values(JS_CHALLENGES)) {
  for (const q of lang) {
    collect('src/data/js_challenges.js', q.id, q.languageId, q.description, q.completedCode);
  }
}

const { FINAL_MISSIONS } = await import('../src/data/final_missions.js');
function walkFinal(obj, file) {
  if (Array.isArray(obj)) { obj.forEach(o => walkFinal(o, file)); return; }
  if (obj && typeof obj === 'object') {
    if (obj.description && obj.id && obj.completedCode) {
      collect(file, obj.id, obj.languageId, obj.description, obj.completedCode);
    }
    for (const v of Object.values(obj)) {
      if (v && typeof v === 'object') walkFinal(v, file);
    }
  }
}
walkFinal(FINAL_MISSIONS, 'src/data/final_missions.js');

console.log(`Resolved: ${results.length}, Errors: ${errors.length}`);
if (errors.length) console.log(JSON.stringify(errors, null, 2));
writeFileSync(join(tmpdir(), 'cq-fix-plan.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('Plan written to', join(tmpdir(), 'cq-fix-plan.json'));
// print a sample
console.log(JSON.stringify(results.slice(0, 5), null, 2));

// ── Apply phase ──────────────────────────────────────────────────────────────
if (process.argv.includes('--apply')) {
  const byFile = new Map();
  for (const r of results) {
    if (!byFile.has(r.file)) byFile.set(r.file, []);
    byFile.get(r.file).push(r);
  }
  for (const [file, items] of byFile) {
    let text = readFileSync(file, 'utf8');
    let applied = 0;
    for (const { id, oldDesc, newDesc } of items) {
      // Scope the replacement to the block containing this id to avoid touching
      // other entries that might share an identical description string.
      const idMarker = `"id": "${id}",`;
      const idPos = text.indexOf(idMarker);
      if (idPos === -1) { console.error('id not found:', id); continue; }
      const blockEnd = text.indexOf('\n      },', idPos);
      const searchEnd = blockEnd === -1 ? text.length : blockEnd;
      const oldDescLine = `"description": "${oldDesc}",`;
      const descPos = text.indexOf(oldDescLine, idPos);
      if (descPos === -1 || descPos > searchEnd + 200) { console.error('description not found near id:', id); continue; }
      const newDescLine = `"description": "${newDesc}",`;
      text = text.slice(0, descPos) + newDescLine + text.slice(descPos + oldDescLine.length);
      applied++;
    }
    writeFileSync(file, text, 'utf8');
    console.log(`Applied ${applied}/${items.length} to ${file}`);
  }
}
