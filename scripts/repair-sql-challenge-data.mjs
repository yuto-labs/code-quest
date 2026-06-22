import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const questionsPath = path.join(root, 'src/data/sql/questions.js');
const { SQL_QUESTIONS } = await import(`file:///${questionsPath.replaceAll('\\', '/')}?t=${Date.now()}`);

const questions = structuredClone(SQL_QUESTIONS);
const byId = Object.fromEntries(questions.map(question => [question.id, question]));

function setCompletedQuery(question, query) {
  question.query = query;
  if (question.explanation) {
    question.explanation.completedQuery = query;
    for (const mistake of question.explanation.commonMistakes || []) {
      if (mistake.correct?.includes('SELECT SELECT name,category') || mistake.correct?.includes('年代+地域+分類を複合抽出')) {
        mistake.correct = query;
      }
    }
  }
}

setCompletedQuery(byId.sql01_e01, 'SELECT name, category\nFROM heritage_sites;');
byId.sql01_e01.expectedResult = {
  columns: ['name', 'category'],
  rows: [
    ['Yakushima', 'Natural'],
    ['Grand Canyon National Park', 'Natural'],
    ['Palace of Versailles', 'Cultural'],
  ],
};
byId.sql01_e01.options = [
  { id: 'a', label: '結果A', result: { columns: ['name', 'category'], rows: [['Palace of Versailles', 'Cultural'], ['Grand Canyon National Park', 'Natural'], ['Yakushima', 'Natural']] } },
  { id: 'b', label: '結果B', result: byId.sql01_e01.expectedResult },
  { id: 'c', label: '結果C', result: { columns: ['id', 'country_id'], rows: [[1, 'JP'], [2, 'US'], [3, 'FR']] } },
];
byId.sql01_e01.explanation.correctAnswer = '結果B';
byId.sql01_e01.explanation.executionSteps = [
  '1. FROM heritage_sites で世界遺産の表を読みます。',
  '2. SELECT name, category なので、id や country_id は表示しません。',
  '3. 行の順番は TABLE の順番のまま、name と category だけを RESULT に出します。',
];
byId.sql01_e01.explanation.sqlExplanation = 'SELECT に複数の列名を書くと、その列だけを左から書いた順に表示します。この問題では name, category の2列を取り出すので、id や country_id を含む結果は選びません。';

setCompletedQuery(byId.sql02_m01, "SELECT name, category\nFROM historical_events\nWHERE year >= 1950 AND region = 'Asia' AND category = 'politics';");
byId.sql02_m01.expectedResult = {
  columns: ['name', 'category'],
  rows: [['historical_events gamma', 'politics']],
};
byId.sql02_m01.options = [
  { id: 'a', label: '結果A', result: { columns: ['name', 'category'], rows: [['historical_events alpha', 'history'], ['historical_events beta', 'science'], ['historical_events gamma', 'politics'], ['historical_events delta', 'nature']] } },
  { id: 'b', label: '結果B', result: { columns: ['name', 'category'], rows: [['historical_events beta', 'science']] } },
  { id: 'c', label: '結果C', result: byId.sql02_m01.expectedResult },
];
byId.sql02_m01.explanation.correctAnswer = '結果C';
byId.sql02_m01.explanation.executionSteps = [
  '1. FROM historical_events で歴史事件の表を読みます。',
  "2. WHERE year >= 1950 AND region = 'Asia' AND category = 'politics' で3条件をすべて満たす行だけに絞ります。",
  '3. SELECT name, category なので、条件に残った行の名前と分類だけを表示します。',
];
byId.sql02_m01.explanation.sqlExplanation = 'AND でつないだ WHERE 条件は、すべて真になった行だけを残します。年代・地域・分類のどれか1つだけを見るのではなく、3つの条件を順番に確認するのが compound-filter のポイントです。';

for (const question of questions) {
  for (const option of question.options || []) {
    if (/^\?{2,}\s*[ABC]$/i.test(option.label || '')) {
      option.label = `結果${option.label.trim().slice(-1).toUpperCase()}`;
    }
  }
  if (question.mode !== 'decode') {
    const correct = question.options?.find(option => option.id === question.answer);
    if (correct?.result) question.expectedResult = correct.result;
  }
}

const source = `export const SQL_QUESTIONS = ${JSON.stringify(questions, null, 2)};

export const SQL_QUESTIONS_BY_ID = Object.fromEntries(SQL_QUESTIONS.map(question => [question.id, question]));

export const SQL_QUESTIONS_BY_CHAPTER = SQL_QUESTIONS.reduce((byChapter, question) => {
  if (!byChapter[question.chapterId]) byChapter[question.chapterId] = [];
  byChapter[question.chapterId].push(question);
  return byChapter;
}, {});

for (const questions of Object.values(SQL_QUESTIONS_BY_CHAPTER)) {
  questions.sort((a, b) => a.order - b.order);
}

export function getSqlQuestionsForChapter(chapterId) {
  return SQL_QUESTIONS_BY_CHAPTER[chapterId] || [];
}
`;

fs.writeFileSync(questionsPath, source, 'utf8');
console.log(`Updated ${questions.length} SQL questions.`);
