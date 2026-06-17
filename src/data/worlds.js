export const WORLDS = [
  {
    id: 'decode',
    name: 'DECODE',
    subtitle: 'Syntax & Basics',
    description: '空白を埋めて構文と基礎概念を理解する',
    icon: '🔵',
    color: '#00ff88',
    difficulty: 'Beginner',
    recommendedFor: '初めてコードを書く人',
  },
  {
    id: 'execute',
    name: 'EXECUTE',
    subtitle: 'Trace & Combine',
    description: 'コードをトレースして出力を予測・概念を組み合わせる',
    icon: '🟡',
    color: '#ffdd00',
    difficulty: 'Intermediate',
    recommendedFor: '基礎を理解した人',
  },
  {
    id: 'debug',
    name: 'DEBUG',
    subtitle: 'Diagnose & Repair',
    description: 'バグを発見し、原因を特定して修正する',
    icon: '🔴',
    color: '#ff4466',
    difficulty: 'Advanced',
    recommendedFor: 'コードを読める人',
  },
];

export const CONCEPTS = {
  python: [
    { id: 'variables',    name: 'Variables',    nameJa: '変数と型',       icon: '📦' },
    { id: 'conditions',   name: 'Conditions',   nameJa: '条件分岐',       icon: '🔀' },
    { id: 'loops',        name: 'Loops',        nameJa: 'ループ',         icon: '🔄' },
    { id: 'lists',        name: 'Lists',        nameJa: 'リスト',         icon: '📋' },
    { id: 'functions',    name: 'Functions',    nameJa: '関数',           icon: '⚙️'  },
    { id: 'dicts',        name: 'Dictionaries', nameJa: '辞書',           icon: '📖' },
    { id: 'classes',      name: 'Classes',      nameJa: 'クラス',         icon: '🏗️' },
    { id: 'errors',       name: 'Error Handling',nameJa: 'エラー処理',    icon: '🛡️' },
    { id: 'modules',      name: 'Modules',      nameJa: 'モジュール',     icon: '📦' },
    { id: 'files',        name: 'File I/O',     nameJa: 'ファイル操作',   icon: '💾' },
    { id: 'regex',        name: 'Regex',        nameJa: '正規表現',       icon: '🔍' },
    { id: 'comprehension',name: 'Comprehension', nameJa: '内包表記',      icon: '✨' },
    { id: 'decorators',   name: 'Decorators',   nameJa: 'デコレータ',     icon: '🎀' },
    { id: 'generators',   name: 'Generators',   nameJa: 'ジェネレータ',   icon: '⚡' },
    { id: 'async',        name: 'Async',        nameJa: '非同期処理',     icon: '🔀' },
    { id: 'json',         name: 'JSON',         nameJa: 'JSON操作',       icon: '📄' },
    { id: 'testing',      name: 'Testing',      nameJa: 'テスト',         icon: '✅' },
    { id: 'datastructs',  name: 'Data Structs', nameJa: 'データ構造',     icon: '🌲' },
    { id: 'recursion',    name: 'Recursion',    nameJa: '再帰',           icon: '🌀' },
    { id: 'typehints',    name: 'Type Hints',   nameJa: '型ヒント',       icon: '🏷️' },
  ],
  javascript: [
    { id: 'variables',  name: 'Variables',  nameJa: '変数と型',   icon: '📦' },
    { id: 'functions',  name: 'Functions',  nameJa: '関数',       icon: '⚙️'  },
    { id: 'arrays',     name: 'Arrays',     nameJa: '配列',       icon: '📋' },
    { id: 'objects',    name: 'Objects',    nameJa: 'オブジェクト',icon: '📖' },
    { id: 'async',      name: 'Async',      nameJa: '非同期',     icon: '🔀' },
    { id: 'dom',        name: 'DOM',        nameJa: 'DOM操作',    icon: '🌐' },
  ],
};

// country index → concept mapping (COUNTRIES order = concept order)
export const COUNTRY_CONCEPT_MAP = {
  python: {
    JP: 'variables', US: 'conditions', FR: 'loops',    BR: 'lists',
    AU: 'functions', EG: 'dicts',      IN: 'classes',  RU: 'errors',
    CN: 'modules',   DE: 'files',      GB: 'regex',    KR: 'comprehension',
    CA: 'decorators',IT: 'generators', MX: 'async',    SA: 'json',
    AR: 'testing',   TR: 'datastructs',ID: 'recursion',ZA: 'typehints',
  },
};
