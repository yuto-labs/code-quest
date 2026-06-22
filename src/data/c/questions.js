// Scaffold for C PATH questions. Mirrors src/data/typescript/questions.js structure.
// Chapters are wired up end-to-end (course, progress, screens), but item lists are
// intentionally empty until question content is written.
const chapters = [
  { id: '01_basics_output', concept: 'program-structure', items: [] },
  { id: '02_variables_types', concept: 'variables', items: [] },
  { id: '03_operators_conditions', concept: 'operators', items: [] },
  { id: '04_loops', concept: 'loops', items: [] },
  { id: '05_arrays_strings', concept: 'arrays', items: [] },
  { id: '06_functions', concept: 'functions', items: [] },
  { id: '07_pointers', concept: 'pointers', items: [] },
  { id: '08_structs_scope', concept: 'structs', items: [] },
];

const modeNames = { write: 'WRITE', read: 'READ', fix: 'FIX', mission: 'MISSION' };

function optionsFor(answer, mode) {
  const wrong = mode === 'fix'
    ? ['keep the broken code', 'change unrelated variable', 'remove the type']
    : ['different output', 'compile error', 'undefined behavior'];
  return [
    { id: answer, label: answer },
    ...wrong.map(label => ({ id: label, label })),
  ];
}

function makeQuestion(chapter, item, index) {
  const [mode, title, concept, fact, answer, code, output] = item;
  const order = index + 1;
  const id = `c${chapter.id.slice(0, 2)}_${mode[0]}${String(order).padStart(2, '0')}`;
  const isWrite = mode === 'write';
  return {
    id,
    courseId: 'c',
    chapterId: chapter.id,
    order,
    mode,
    title,
    prompt: `${title} を題材にした C 問題です。事実: ${fact}. ${isWrite ? '下のコードを実行したとき EXPECTED OUTPUT と同じ結果になるよう、___BLANK___ を埋めてください。' : 'コードを読み、正しい答えを選んでください。'}`,
    code,
    expectedOutput: output || answer,
    answer,
    options: isWrite ? undefined : optionsFor(answer, mode),
    hint: `${concept} に注目します。事実として必要な値は問題文かコード内にすべて書かれています。`,
    explanation: {
      correctAnswer: answer,
      completedCode: isWrite ? code.replace('___BLANK___', answer) : code,
      executionSteps: [
        `1. テーマ事実: ${fact}.`,
        `2. C の中心概念は ${concept} です。`,
        `3. コード上で必要な値と型を確認すると、答えは ${answer} になります。`,
      ],
      commonMistakes: [
        { wrong: 'テーマ名だけで答える', reason: 'この PATH では C の構文や処理の読み取りが答えを決めます。', correct: answer },
        { wrong: '型やメモリを無視して値を選ぶ', reason: 'C では型やポインタの扱いが合わないと未定義動作になります。', correct: '型と値をセットで確認する' },
      ],
      programmingExplanation: `${concept} の練習です。コード内の宣言、分岐、または戻り値を順番に読んで答えを決めます。`,
      themeExplanation: fact,
      sourceRefs: [],
    },
    cConceptIds: [chapter.concept],
    globalFactIds: [`gf_${id}`],
    difficulty: mode === 'mission' ? 'mission' : order <= 3 ? 'basic' : order <= 6 ? 'trace' : 'debug',
  };
}

export const C_QUESTIONS = chapters.flatMap(chapter => chapter.items.map((item, index) => makeQuestion(chapter, item, index)));

export const C_QUESTIONS_BY_ID = Object.fromEntries(C_QUESTIONS.map(question => [question.id, question]));

export const C_QUESTIONS_BY_CHAPTER = C_QUESTIONS.reduce((byChapter, question) => {
  byChapter[question.chapterId] ||= [];
  byChapter[question.chapterId].push(question);
  return byChapter;
}, {});

for (const questions of Object.values(C_QUESTIONS_BY_CHAPTER)) {
  questions.sort((a, b) => a.order - b.order);
}

export function getCQuestionsForChapter(chapterId) {
  return C_QUESTIONS_BY_CHAPTER[chapterId] || [];
}

export const C_MODE_LABELS = modeNames;
