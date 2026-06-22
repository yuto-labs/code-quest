export const C_COURSE = {
  id: 'c',
  title: 'C PATH',
  subtitle: '世界のテーマでCの基礎から学ぶ',
  totalQuestions: 80,
  chapters: [
    { id: '01_c_basics', order: 1, title: 'C BASICS', subtitle: '#include、main、printf、int/double/char、書式指定子' },
    { id: '02_conditions_loops', order: 2, title: 'CONDITIONS AND LOOPS', subtitle: 'if / else、switch、for、while' },
    { id: '03_arrays_strings', order: 3, title: 'ARRAYS AND STRINGS', subtitle: '配列、添字、文字列、null終端、strlen / strcmp' },
    { id: '04_functions_scope', order: 4, title: 'FUNCTIONS AND SCOPE', subtitle: '引数、戻り値、ローカル変数、プロトタイプ' },
    { id: '05_pointers', order: 5, title: 'POINTERS', subtitle: '&、*、ポインタ引数、NULLチェック' },
    { id: '06_structs_enums', order: 6, title: 'STRUCTS AND ENUMS', subtitle: '構造体、構造体配列、enum' },
    { id: '07_memory_safety', order: 7, title: 'MEMORY AND SAFETY BASICS', subtitle: 'sizeof、範囲、初期化、バッファ、安全な文字列操作' },
    { id: '08_practical_processing', order: 8, title: 'PRACTICAL C DATA PROCESSING', subtitle: '配列・構造体・関数・ポインタを組み合わせた実践処理' },
  ],
};

export const C_CHAPTER_IDS = C_COURSE.chapters.map(chapter => chapter.id);
