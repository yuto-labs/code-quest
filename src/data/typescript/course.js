export const TYPESCRIPT_COURSE = {
  id: 'typescript',
  title: 'TypeScript PATH',
  subtitle: '世界のテーマで型を学ぶ',
  totalQuestions: 80,
  chapters: [
    { id: '01_type_basics', order: 1, title: 'TYPE BASICS', subtitle: '型注釈、型推論、基本型' },
    { id: '02_arrays_objects', order: 2, title: 'ARRAYS AND OBJECTS', subtitle: '配列、オブジェクト、プロパティ' },
    { id: '03_union_literal', order: 3, title: 'UNION AND LITERAL TYPES', subtitle: '候補を限定する型' },
    { id: '04_functions', order: 4, title: 'FUNCTIONS', subtitle: '引数、戻り値、省略可能引数' },
    { id: '05_interface_alias', order: 5, title: 'INTERFACE AND TYPE ALIAS', subtitle: 'データの形に名前を付ける' },
    { id: '06_narrowing', order: 6, title: 'NARROWING', subtitle: '条件で安全に型を絞る' },
    { id: '07_generics', order: 7, title: 'GENERICS', subtitle: '型を保ったまま再利用する' },
    { id: '08_practical_modeling', order: 8, title: 'PRACTICAL TYPE MODELING', subtitle: '実用的な型モデル' },
  ],
};

export const TYPESCRIPT_CHAPTER_IDS = TYPESCRIPT_COURSE.chapters.map(chapter => chapter.id);
