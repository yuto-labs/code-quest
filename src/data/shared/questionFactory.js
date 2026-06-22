// Shared question-object factory used by per-language PATH question files
// (src/data/c/questions.js, src/data/typescript/questions.js, ...). Each
// language file supplies its own `chapters` content plus a small config
// describing language-specific wording; this module owns the repeated
// id/prompt/explanation/export scaffolding so it isn't hand-duplicated
// per language.

export const MODE_LABELS = { write: 'WRITE', read: 'READ', fix: 'FIX', mission: 'MISSION' };

function optionsFor(answer, mode, wrongOptions) {
  const wrong = mode === 'fix' ? wrongOptions.fix : wrongOptions.other;
  return [
    { id: answer, label: answer },
    ...wrong.map(label => ({ id: label, label })),
  ];
}

export function createQuestionSet({
  chapters,
  courseId,
  idPrefix,
  languageLabel,
  wrongOptions,
  conceptIdKey,
  valueMismatchLabel,
  typeMismatchReason,
  readingTargets,
}) {
  function makeQuestion(chapter, item, index) {
    const [mode, title, concept, fact, answer, code, output] = item;
    const order = index + 1;
    const id = `${idPrefix}${chapter.id.slice(0, 2)}_${mode[0]}${String(order).padStart(2, '0')}`;
    const isWrite = mode === 'write';
    return {
      id,
      courseId,
      chapterId: chapter.id,
      order,
      mode,
      title,
      prompt: `${title} を題材にした ${languageLabel} 問題です。事実: ${fact}. ${isWrite ? '下のコードを実行したとき EXPECTED OUTPUT と同じ結果になるよう、___BLANK___ を埋めてください。' : 'コードを読み、正しい答えを選んでください。'}`,
      code,
      expectedOutput: output || answer,
      answer,
      options: isWrite ? undefined : optionsFor(answer, mode, wrongOptions),
      hint: `${concept} に注目します。事実として必要な値は問題文かコード内にすべて書かれています。`,
      explanation: {
        correctAnswer: answer,
        completedCode: isWrite ? code.replace('___BLANK___', answer) : code,
        executionSteps: [
          `1. テーマ事実: ${fact}.`,
          `2. ${languageLabel} の中心概念は ${concept} です。`,
          `3. コード上で必要な値と型を確認すると、答えは ${answer} になります。`,
        ],
        commonMistakes: [
          { wrong: 'テーマ名だけで答える', reason: `この PATH では ${languageLabel} の構文や処理の読み取りが答えを決めます。`, correct: answer },
          { wrong: valueMismatchLabel, reason: typeMismatchReason, correct: '型と値をセットで確認する' },
        ],
        programmingExplanation: `${concept} の練習です。コード内の${readingTargets}を順番に読んで答えを決めます。`,
        themeExplanation: fact,
        sourceRefs: [],
      },
      [conceptIdKey]: [chapter.concept],
      globalFactIds: [`gf_${id}`],
      difficulty: mode === 'mission' ? 'mission' : order <= 3 ? 'basic' : order <= 6 ? 'trace' : 'debug',
    };
  }

  const QUESTIONS = chapters.flatMap(chapter => chapter.items.map((item, index) => makeQuestion(chapter, item, index)));

  const QUESTIONS_BY_ID = Object.fromEntries(QUESTIONS.map(question => [question.id, question]));

  const QUESTIONS_BY_CHAPTER = QUESTIONS.reduce((byChapter, question) => {
    byChapter[question.chapterId] ||= [];
    byChapter[question.chapterId].push(question);
    return byChapter;
  }, {});

  for (const questions of Object.values(QUESTIONS_BY_CHAPTER)) {
    questions.sort((a, b) => a.order - b.order);
  }

  function getQuestionsForChapter(chapterId) {
    return QUESTIONS_BY_CHAPTER[chapterId] || [];
  }

  return { QUESTIONS, QUESTIONS_BY_ID, QUESTIONS_BY_CHAPTER, getQuestionsForChapter };
}
