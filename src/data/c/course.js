export const C_COURSE = {
  id: 'c',
  title: 'C PATH',
  subtitle: '世界のテーマでCの基礎から学ぶ',
  totalQuestions: 80,
  chapters: [
    { id: '01_basics_output', order: 1, title: 'BASICS AND OUTPUT', subtitle: '#include、main、printf' },
    { id: '02_variables_types', order: 2, title: 'VARIABLES AND TYPES', subtitle: '変数、基本データ型' },
    { id: '03_operators_conditions', order: 3, title: 'OPERATORS AND CONDITIONS', subtitle: '演算子、比較、if / switch' },
    { id: '04_loops', order: 4, title: 'LOOPS', subtitle: 'for、while、do-while' },
    { id: '05_arrays_strings', order: 5, title: 'ARRAYS AND STRINGS', subtitle: '配列、文字列' },
    { id: '06_functions', order: 6, title: 'FUNCTIONS', subtitle: '引数、戻り値' },
    { id: '07_pointers', order: 7, title: 'POINTERS', subtitle: 'アドレス、配列とポインタ' },
    { id: '08_structs_scope', order: 8, title: 'STRUCTS AND SCOPE', subtitle: '構造体、スコープ、static' },
  ],
};

export const C_CHAPTER_IDS = C_COURSE.chapters.map(chapter => chapter.id);
