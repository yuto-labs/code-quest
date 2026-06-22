export const CODE_PATHS = [
  { id: 'sql', title: 'SQL PATH', subtitle: '世界のデータからSQLを学ぶ', status: 'active' },
  { id: 'typescript', title: 'TypeScript PATH', subtitle: '世界のテーマで型を学ぶ', status: 'active' },
  { id: 'c', title: 'C PATH', subtitle: '世界のテーマでCの基礎から学ぶ', status: 'active' },
];

const targets = { decode: 3, execute: 3, debug: 3, mission: 1, total: 10 };

export const SQL_COURSE = {
  id: 'sql',
  title: 'SQL PATH',
  subtitle: '世界のデータからSQLを学ぶ',
  totalQuestions: 80,
  chapters: [
    { id: '01_select', order: 1, title: 'SELECT の基本', subtitle: '列を選んで表から取り出す', targets },
    { id: '02_where', order: 2, title: 'WHERE で絞り込み', subtitle: '条件に合う行だけを取り出す', targets },
    { id: '03_order_limit', order: 3, title: 'ORDER BY と LIMIT', subtitle: '並び順と件数を制御する', targets },
    { id: '04_aggregates', order: 4, title: '集計関数', subtitle: '件数、合計、平均、最大、最小を求める', targets },
    { id: '05_group_having', order: 5, title: 'GROUP BY と HAVING', subtitle: 'グループごとに集計して条件をかける', targets },
    { id: '06_join', order: 6, title: 'JOIN', subtitle: '複数の表をキーでつなぐ', targets },
    { id: '07_null_distinct', order: 7, title: 'NULL と DISTINCT', subtitle: '欠損と重複を正しく扱う', targets },
    { id: '08_write', order: 8, title: 'INSERT / UPDATE / DELETE', subtitle: '安全にデータを追加・更新・削除する', targets },
  ],
};

export const SQL_CHAPTER_IDS = SQL_COURSE.chapters.map(chapter => chapter.id);
