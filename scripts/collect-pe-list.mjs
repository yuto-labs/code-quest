import { writeFileSync } from 'node:fs';

async function collect(file, exportName, shape, out) {
  const m = await import(file);
  const data = m[exportName];
  function visit(q) {
    if (!q.programmingExplanation) return;
    out.push({ file, id: q.id, conceptId: q.conceptId, languageId: q.languageId, questionType: q.questionType, title: q.title, code: q.code, blank: q.blank, pe: q.programmingExplanation });
  }
  if (shape === 'country-lang') for (const c of Object.values(data)) for (const l of Object.values(c)) l.forEach(visit);
  else if (shape === 'country') for (const l of Object.values(data)) l.forEach(visit);
  else if (shape === 'final') {
    function walk(o) {
      if (Array.isArray(o)) return o.forEach(walk);
      if (o && typeof o === 'object') {
        if (o.questionType) visit(o);
        for (const v of Object.values(o)) if (v && typeof v === 'object') walk(v);
      }
    }
    walk(data);
  }
}
const out = [];
await collect('../src/data/challenges.js', 'CHALLENGES', 'country-lang', out);
await collect('../src/data/js_challenges.js', 'JS_CHALLENGES', 'country', out);
await collect('../src/data/debug_challenges.js', 'DEBUG_CHALLENGES', 'country-lang', out);
await collect('../src/data/execute_challenges.js', 'EXECUTE_CHALLENGES', 'country-lang', out);
await collect('../src/data/final_missions.js', 'FINAL_MISSIONS', 'final', out);
writeFileSync('C:/Users/yuto1/AppData/Local/Temp/pe-list.json', JSON.stringify(out, null, 2));
console.log('total', out.length);
