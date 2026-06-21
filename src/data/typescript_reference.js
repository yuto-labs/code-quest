const WORLD_EXAMPLES = {
  decode: '型注釈や構文の意味を読み取り、空欄に入る値や型を判断します。',
  execute: '変数の値、条件分岐、配列やオブジェクトの処理を順に追跡します。',
  debug: '型エラーや未チェックの値を見つけ、より安全な書き方へ直します。',
};

function miniChecks(id, checks) {
  return checks.slice(0, 3).map((check, index) => ({
    id: `${id}-check-${index + 1}`,
    prompt: check.prompt,
    answer: check.answer,
  }));
}

function page(id, title, summary, code, output, lineNotes, commonMistakes, checks, details = '') {
  return {
    id,
    title,
    summary,
    details,
    minimalExample: {
      code,
      output,
      lineNotes,
      stateTrace: lineNotes,
    },
    worldExamples: WORLD_EXAMPLES,
    commonMistakes,
    miniChecks: miniChecks(id, checks),
  };
}

function topic(id, title, conceptId, summary, pages, aliases = [], prerequisites = []) {
  return {
    id: `typescript-${id}`,
    language: 'typescript',
    title,
    level: prerequisites.length ? 'advanced' : 'basic',
    parentId: null,
    prerequisites,
    aliases: [`typescript ${id}`, `ts ${id}`, ...aliases],
    summary,
    relatedConceptIds: [conceptId],
    pages,
  };
}

export const TYPESCRIPT_REFERENCE_TOPICS = [
  topic('type-basics', '型注釈と型推論', 'type-annotations', 'TypeScript は JavaScript に型の情報を足し、値の使い方の間違いを早めに見つける言語です。', [
    page(
      'typescript-type-annotations',
      '型を明示する',
      '`変数名: 型名` と書くと、その変数に入れてよい値の種類を決められます。',
      'let cityName: string = "Kyoto";\nlet visitCount: number = 3;\nlet isOpen: boolean = true;\n\nconsole.log(`${cityName}:${visitCount}:${isOpen}`);',
      'Kyoto:3:true',
      [
        'L1: cityName は string なので文字列だけを入れます。',
        'L2: visitCount は number なので数値計算に使えます。',
        'L3: isOpen は boolean なので true / false を扱います。',
        'L5: テンプレートリテラルで値を文字列に埋め込みます。',
      ],
      [
        { wrong: 'let visitCount: number = "3";', reason: 'number 型に文字列を入れているため型が合いません。', correct: 'let visitCount: number = 3;' },
      ],
      [
        { prompt: '文字列を表す型名は？', answer: 'string' },
        { prompt: '真偽値を表す型名は？', answer: 'boolean' },
      ],
    ),
    page(
      'typescript-type-inference',
      '型推論を読む',
      '型を書かなくても、初期値から TypeScript が型を推論することがあります。',
      'let level = 2;\nlevel = level + 1;\n\nconsole.log(level);',
      '3',
      [
        'L1: 2 が入るので level は number と推論されます。',
        'L2: number 同士の足し算として処理されます。',
        'L4: 更新後の値 3 が出力されます。',
      ],
      [
        { wrong: 'level = "high";', reason: 'level は number と推論済みなので文字列を代入できません。', correct: 'level = 3;' },
      ],
      [
        { prompt: '初期値から型を判断する仕組みは？', answer: '型推論' },
        { prompt: 'let level = 2 の level の型は？', answer: 'number' },
      ],
    ),
  ], ['type annotation', 'type inference']),

  topic('arrays-objects', '配列とオブジェクト', 'arrays', '同じ種類の値を並べる配列と、名前付きの値をまとめるオブジェクトは TypeScript の基本データ構造です。', [
    page(
      'typescript-array-basic',
      '配列の型',
      '`string[]` は文字列だけを入れる配列です。添字は 0 から始まります。',
      'const lakes: string[] = ["Superior", "Michigan", "Huron"];\n\nconsole.log(lakes[1]);',
      'Michigan',
      [
        'L1: lakes は string[] なので文字列の配列です。',
        'L3: 添字 1 は 2 番目の要素を指します。',
      ],
      [
        { wrong: 'const lakes: string[] = ["Superior", 2];', reason: 'string[] に number を混ぜています。', correct: 'const lakes: string[] = ["Superior", "Erie"];' },
      ],
      [
        { prompt: '配列の最初の添字は？', answer: '0' },
        { prompt: '文字列配列の型表記は？', answer: 'string[]' },
      ],
    ),
    page(
      'typescript-object-basic',
      'オブジェクトの型',
      'オブジェクト型では、必要なプロパティ名とその型を先に決められます。',
      'const site: { name: string; country: string } = {\n  name: "Angkor",\n  country: "Cambodia",\n};\n\nconsole.log(site.country);',
      'Cambodia',
      [
        'L1: site は name と country を持つ形です。',
        'L2-L3: どちらも string の値です。',
        'L6: country プロパティを取り出します。',
      ],
      [
        { wrong: 'site.place', reason: '型に place というプロパティはありません。', correct: 'site.country' },
      ],
      [
        { prompt: 'オブジェクトの値を取り出す記号は？', answer: '.' },
        { prompt: 'site.country の出力は？', answer: 'Cambodia' },
      ],
    ),
  ], ['array', 'object']),

  topic('unions-literals', 'ユニオン型とリテラル型', 'unions', '複数の候補から値を選ばせたいとき、ユニオン型とリテラル型を使うと表現を狭くできます。', [
    page(
      'typescript-literal-union',
      '候補を限定する',
      '文字列リテラルを `|` でつなぐと、決められた文字列だけを許す型になります。',
      'type SiteCategory = "cultural" | "natural" | "mixed";\n\nconst category: SiteCategory = "natural";\nconsole.log(category);',
      'natural',
      [
        'L1: SiteCategory は 3 つの文字列だけを許します。',
        'L3: "natural" は候補にあるので代入できます。',
        'L4: 値がそのまま出力されます。',
      ],
      [
        { wrong: 'const category: SiteCategory = "culture";', reason: '"culture" は候補にありません。', correct: 'const category: SiteCategory = "cultural";' },
      ],
      [
        { prompt: '候補をつなぐ記号は？', answer: '|' },
        { prompt: '"culture" は SiteCategory に入る？', answer: '入らない' },
      ],
    ),
    page(
      'typescript-union-branch',
      '条件分岐で候補を扱う',
      'ユニオン型は条件分岐と組み合わせると、値ごとに処理を分けやすくなります。',
      'type Status = "planned" | "in_transit" | "delivered";\n\nfunction label(status: Status): string {\n  if (status === "delivered") {\n    return "done";\n  }\n  return "open";\n}\n\nconsole.log(label("planned"));',
      'open',
      [
        'L1: status は 3 種類の文字列だけです。',
        'L4-L6: delivered のときだけ done を返します。',
        'L8: それ以外は open を返します。',
        'L11: planned は open になります。',
      ],
      [
        { wrong: 'function label(status: string)', reason: 'ただの string だと想定外の値も入ってしまいます。', correct: 'function label(status: Status)' },
      ],
      [
        { prompt: 'label("planned") の戻り値は？', answer: 'open' },
        { prompt: '候補外の文字列を防ぐ型は？', answer: 'リテラルユニオン型' },
      ],
    ),
  ], ['union', 'literal type']),

  topic('functions', '関数の型', 'functions', '関数では引数と戻り値の型を書くことで、呼び出し方と結果を安全にできます。', [
    page(
      'typescript-function-basic',
      '引数と戻り値',
      '引数には型を書き、関数名の後ろに戻り値の型を書けます。',
      'function density(population: number, area: number): number {\n  return population / area;\n}\n\nconsole.log(density(1000, 50));',
      '20',
      [
        'L1: population と area は number です。',
        'L1: `): number` は戻り値が number であることを表します。',
        'L2: 1000 / 50 を返します。',
      ],
      [
        { wrong: 'density("1000", 50)', reason: '第 1 引数は number なので文字列を渡せません。', correct: 'density(1000, 50)' },
      ],
      [
        { prompt: '戻り値の型を書く場所は？', answer: '引数リストの後ろ' },
        { prompt: 'density(1000, 50) の結果は？', answer: '20' },
      ],
    ),
    page(
      'typescript-optional-parameter',
      '省略できる引数',
      '`?` を付けた引数は undefined の可能性があるため、使う前に確認します。',
      'function languageLabel(name?: string): string {\n  if (name === undefined) {\n    return "unknown";\n  }\n  return name.toUpperCase();\n}\n\nconsole.log(languageLabel());',
      'unknown',
      [
        'L1: name? は string または undefined です。',
        'L2-L4: undefined のときの処理を先に書きます。',
        'L6: 確認後なので toUpperCase を安全に呼べます。',
      ],
      [
        { wrong: 'return name.toUpperCase();', reason: 'name が undefined かもしれません。', correct: 'if (name === undefined) return "unknown";' },
      ],
      [
        { prompt: '省略可能な引数に付ける記号は？', answer: '?' },
        { prompt: '未指定の可能性がある値は何？', answer: 'undefined' },
      ],
    ),
  ], ['parameter', 'return type']),

  topic('object-types-interfaces', 'interface と type alias', 'objects', 'interface と type alias は、オブジェクトの形に名前を付けて再利用するための仕組みです。', [
    page(
      'typescript-interface-basic',
      'interface で形を決める',
      '同じ形のオブジェクトを何度も使うなら interface にしておくと読みやすくなります。',
      'interface CountryProfile {\n  name: string;\n  capital: string;\n}\n\nconst profile: CountryProfile = {\n  name: "France",\n  capital: "Paris",\n};\n\nconsole.log(profile.capital);',
      'Paris',
      [
        'L1-L4: CountryProfile は name と capital を必須にします。',
        'L6-L9: profile はその形に合っています。',
        'L11: capital の値を出力します。',
      ],
      [
        { wrong: 'const profile: CountryProfile = { name: "France" };', reason: '必須の capital がありません。', correct: '{ name: "France", capital: "Paris" }' },
      ],
      [
        { prompt: 'オブジェクトの形を定義するキーワードは？', answer: 'interface' },
        { prompt: 'profile.capital の出力は？', answer: 'Paris' },
      ],
    ),
    page(
      'typescript-type-alias-optional-readonly',
      'type alias と optional / readonly',
      '`?` は省略可能、`readonly` は後から変更しないプロパティを表します。',
      'type MuseumCard = {\n  readonly id: string;\n  title: string;\n  year?: number;\n};\n\nconst card: MuseumCard = { id: "m01", title: "Archive" };\nconsole.log(card.title);',
      'Archive',
      [
        'L1-L5: MuseumCard という型名を作ります。',
        'L2: id は readonly なので再代入できません。',
        'L4: year? はなくてもよいプロパティです。',
      ],
      [
        { wrong: 'card.id = "m02";', reason: 'readonly プロパティは変更できません。', correct: '新しいオブジェクトを作ります。' },
      ],
      [
        { prompt: '省略可能プロパティに付ける記号は？', answer: '?' },
        { prompt: '変更しないプロパティに付ける語は？', answer: 'readonly' },
      ],
    ),
  ], ['interface', 'type alias']),

  topic('narrowing', 'ナローイング', 'type-narrowing', '値の種類を条件で確かめ、TypeScript が扱える型を狭めることをナローイングと呼びます。', [
    page(
      'typescript-typeof-narrowing',
      'typeof で分ける',
      '`typeof` を使うと、値が string か number かなどを調べてから処理できます。',
      'function format(value: string | number): string {\n  if (typeof value === "number") {\n    return `${value} points`;\n  }\n  return value.toUpperCase();\n}\n\nconsole.log(format("ok"));',
      'OK',
      [
        'L1: value は string または number です。',
        'L2-L4: number の場合だけ数値用の処理をします。',
        'L6: ここでは string として扱えます。',
      ],
      [
        { wrong: 'return value.toUpperCase();', reason: 'value が number の可能性を確認していません。', correct: 'typeof value === "string" を確認します。' },
      ],
      [
        { prompt: '値の型を調べる演算子は？', answer: 'typeof' },
        { prompt: 'format("ok") の結果は？', answer: 'OK' },
      ],
    ),
    page(
      'typescript-null-check',
      'null を確認する',
      'null の可能性がある値は、メソッドを呼ぶ前に必ず確認します。',
      'function label(name: string | null): string {\n  if (name === null) {\n    return "missing";\n  }\n  return name.toUpperCase();\n}\n\nconsole.log(label(null));',
      'missing',
      [
        'L1: name は string または null です。',
        'L2-L4: null のときは先に戻ります。',
        'L6: ここまで来た name は string として扱えます。',
      ],
      [
        { wrong: 'name.toUpperCase()', reason: 'name が null のときに失敗します。', correct: 'if (name === null) return "missing";' },
      ],
      [
        { prompt: 'null かどうかを調べる比較は？', answer: 'name === null' },
        { prompt: 'label(null) の結果は？', answer: 'missing' },
      ],
    ),
  ], ['typeof', 'null check']),

  topic('generics', 'ジェネリクス', 'generics', 'ジェネリクスは、値の型を保ったまま関数やデータ構造を再利用するための仕組みです。', [
    page(
      'typescript-generics-identity',
      '同じ型で返す',
      '`<T>` は呼び出し時の型を一時的な名前 T として扱う書き方です。',
      'function keep<T>(value: T): T {\n  return value;\n}\n\nconst text = keep("code");\nconst count = keep(3);\n\nconsole.log(text.toUpperCase());\nconsole.log(count + 1);',
      'CODE\n4',
      [
        'L1: T は受け取った値の型を表します。',
        'L5: "code" を渡すので text は string です。',
        'L6: 3 を渡すので count は number です。',
      ],
      [
        { wrong: 'function keep(value: any): any', reason: 'any にすると型のつながりが失われます。', correct: 'function keep<T>(value: T): T' },
      ],
      [
        { prompt: 'ジェネリクスの型名としてよく使う文字は？', answer: 'T' },
        { prompt: 'keep(3) の戻り値の型は？', answer: 'number' },
      ],
    ),
    page(
      'typescript-generics-keyof',
      'keyof と組み合わせる',
      '`keyof T` を使うと、実在するプロパティ名だけを安全に選べます。',
      'function getValue<T, K extends keyof T>(item: T, key: K): T[K] {\n  return item[key];\n}\n\nconst river = { name: "Nile", lengthKm: 6650 };\nconsole.log(getValue(river, "name"));',
      'Nile',
      [
        'L1: K は T のキーだけに制限されます。',
        'L2: item[key] の戻り値も正しい型になります。',
        'L6: "name" は river に存在するキーです。',
      ],
      [
        { wrong: 'getValue(river, "country")', reason: 'country は river に存在しないキーです。', correct: 'getValue(river, "name")' },
      ],
      [
        { prompt: '型のキー集合を表す語は？', answer: 'keyof' },
        { prompt: '存在しないキー指定は安全？', answer: '安全ではない' },
      ],
    ),
  ], ['generic', 'keyof']),

  topic('utility-types', '実用的な型モデリング', 'objects', 'Record、Partial、Pick、Omit などは、既存の型を材料にして用途別の型を作るための道具です。', [
    page(
      'typescript-record-partial',
      'Record と Partial',
      '`Record<K, V>` はキーと値の対応表、`Partial<T>` は一部だけ埋めた下書き型を作ります。',
      'type CountryCode = "JP" | "FR" | "US";\nconst capitals: Record<CountryCode, string> = {\n  JP: "Tokyo",\n  FR: "Paris",\n  US: "Washington, D.C.",\n};\n\ntype Profile = { name: string; capital: string };\nconst draft: Partial<Profile> = { name: "Japan" };\n\nconsole.log(capitals.JP);\nconsole.log(draft.name);',
      'Tokyo\nJapan',
      [
        'L1: CountryCode は許されるキーを限定します。',
        'L2-L6: Record で全キーに string の値を持たせます。',
        'L9: Partial なので capital が未入力でも構いません。',
      ],
      [
        { wrong: 'capitals.DE = "Berlin"', reason: 'DE は CountryCode に含まれていません。', correct: 'CountryCode に含まれるキーだけを使います。' },
      ],
      [
        { prompt: 'キー表を作る型は？', answer: 'Record' },
        { prompt: '一部だけの型を作る型は？', answer: 'Partial' },
      ],
    ),
    page(
      'typescript-pick-omit-result',
      'Pick / Omit と Result',
      '`Pick` は必要な項目だけを選び、`Omit` は隠したい項目を外します。成功/失敗を union で表すこともよくあります。',
      'type Organization = {\n  id: string;\n  name: string;\n  secretNote: string;\n};\n\ntype PublicOrg = Omit<Organization, "secretNote">;\ntype Result = { ok: true; data: PublicOrg } | { ok: false; error: string };\n\nconst result: Result = { ok: false, error: "missing" };\nconsole.log(result.ok ? result.data.name : result.error);',
      'missing',
      [
        'L1-L5: Organization には公開しない secretNote があります。',
        'L7: Omit で secretNote を外した型を作ります。',
        'L8: Result は成功か失敗のどちらかです。',
        'L11: ok によって読むプロパティを分けます。',
      ],
      [
        { wrong: 'result.data.name', reason: '失敗側には data がありません。', correct: 'result.ok を確認してから data を読みます。' },
      ],
      [
        { prompt: '項目を除外する型は？', answer: 'Omit' },
        { prompt: '成功/失敗を分けるために確認する値は？', answer: 'ok' },
      ],
    ),
  ], ['Record', 'Partial', 'Pick', 'Omit', 'Result'], ['typescript-object-types-interfaces', 'typescript-unions-literals']),

  topic('classes-access', 'class とアクセス修飾子', 'classes', 'TypeScript の class では、フィールドやメソッドに型を付け、外から触れる範囲も決められます。', [
    page(
      'typescript-class-basic',
      'class と constructor',
      'constructor は `new` でオブジェクトを作るときに初期値を受け取ります。',
      'class Badge {\n  constructor(public name: string, private level: number) {}\n\n  label(): string {\n    return `${this.name}:${this.level}`;\n  }\n}\n\nconst badge = new Badge("SQL", 2);\nconsole.log(badge.label());',
      'SQL:2',
      [
        'L2: public name と private level を初期化します。',
        'L4-L6: label は string を返します。',
        'L10: new Badge("SQL", 2) で作成します。',
      ],
      [
        { wrong: 'badge.level', reason: 'level は private なので class の外から直接読めません。', correct: 'badge.label() のような公開メソッドを使います。' },
      ],
      [
        { prompt: '外から直接読めない修飾子は？', answer: 'private' },
        { prompt: 'この例の出力は？', answer: 'SQL:2' },
      ],
    ),
    page(
      'typescript-class-implements',
      'interface を実装する',
      '`implements` は、class が interface の形を満たすことを確認します。',
      'interface Printable {\n  print(): string;\n}\n\nclass Ticket implements Printable {\n  print(): string {\n    return "READY";\n  }\n}\n\nconst ticket = new Ticket();\nconsole.log(ticket.print());',
      'READY',
      [
        'L1-L3: Printable は print を持つ形です。',
        'L5: Ticket は Printable を実装します。',
        'L6-L8: print メソッドを用意します。',
      ],
      [
        { wrong: 'print メソッドを書かない', reason: 'Printable の条件を満たさないためエラーになります。', correct: 'print(): string { return "READY"; } を用意します。' },
      ],
      [
        { prompt: 'interface を class に適用するキーワードは？', answer: 'implements' },
        { prompt: 'ticket.print() の出力は？', answer: 'READY' },
      ],
    ),
  ], ['class', 'access modifier'], ['typescript-object-types-interfaces']),
];
