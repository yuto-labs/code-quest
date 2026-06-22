import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const questionsPath = path.join(root, 'src/data/sql/questions.js');
const factsPath = path.join(root, 'src/data/sql/global_facts.js');

const { SQL_QUESTIONS } = await import(`file:///${questionsPath.replaceAll('\\', '/')}`);
const { SQL_GLOBAL_FACTS } = await import(`file:///${factsPath.replaceAll('\\', '/')}`);

const factsById = Object.fromEntries(SQL_GLOBAL_FACTS.map((fact) => [fact.globalFactId, fact]));
const questions = structuredClone(SQL_QUESTIONS);

for (const question of questions) {
  const fact = factsById[question.globalFactIds?.[0]];
  if (question.explanation) {
    question.explanation.themeExplanation = fact?.summaryJa || question.explanation.themeExplanation || '';
  }

  if (question.id === 'sql05_d02') {
    question.prompt = '部門別ノーベル賞を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。SELECT の1番目の列 category でグループ化するため、空欄には列位置を表す 1 を入れます。';
    question.hint = 'GROUP BY は列名で書けますが、この問題では SELECT 句の列位置を使います。SELECT category, COUNT(*) の1番目は category です。';
    question.explanation.executionSteps = [
      '1. TABLE nobel_awards で category 列と賞の行を確認します。',
      '2. SELECT category, COUNT(*) なので、SELECT 句の1番目は category です。',
      '3. GROUP BY 1 は SELECT 句の1番目、つまり category ごとに行をまとめます。',
      '4. 各 category の行数を COUNT(*) で数え、RESULT と同じ部門別件数を作ります。',
    ];
    question.explanation.sqlExplanation = 'GROUP BY 1 は SELECT 句の1番目の式でグループ化する書き方です。この問題では SELECT category, COUNT(*) ... なので、1 は category を指します。列名を直接書く sql05_d01 とは違い、列位置を読む練習になります。';
  }
}

const questionsSource = `export const SQL_QUESTIONS = ${JSON.stringify(questions, null, 2)};

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

const factsSource = `export const SQL_GLOBAL_FACTS = ${JSON.stringify(SQL_GLOBAL_FACTS, null, 2)};

export const SQL_GLOBAL_FACTS_BY_ID = Object.fromEntries(SQL_GLOBAL_FACTS.map(fact => [fact.globalFactId, fact]));
`;

fs.writeFileSync(questionsPath, questionsSource, 'utf8');
fs.writeFileSync(factsPath, factsSource, 'utf8');
console.log(`Repaired ${questions.length} SQL questions and ${SQL_GLOBAL_FACTS.length} SQL facts.`);
