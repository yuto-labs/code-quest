const WORLD_EXAMPLES = {
  decode: '構文の形、キーワード、記号の意味を読む。',
  execute: '変数の値、条件分岐、繰り返しの順番を追う。',
  debug: '型、名前、null、範囲、呼び出し方のずれを直す。',
};

function buildMiniChecks(id, title, output, miniChecks) {
  const checks = [...miniChecks];
  if (checks.length < 2) {
    checks.push({
      prompt: '\u3053\u306e\u30da\u30fc\u30b8\u306e\u4e2d\u5fc3\u306f\uff1f',
      answer: title,
    });
  }
  if (checks.length < 2) {
    checks.push({
      prompt: output ? '\u3053\u306e\u4f8b\u306e\u51fa\u529b\u306f\uff1f' : '\u3053\u306e\u4f8b\u3067\u7279\u306b\u898b\u308b\u3082\u306e\u306f\uff1f',
      answer: output || '\u884c\u3054\u3068\u306e\u5f79\u5272',
    });
  }
  return checks.slice(0, 3).map((item, index) => ({
    id: `${id}-check-${index + 1}`,
    prompt: item.prompt,
    answer: item.answer,
  }));
}

function page(id, title, summary, code, output, lineNotes, commonMistakes = [], miniChecks = [], details = '', correctedExample = '') {
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
    correctedExample,
    miniChecks: buildMiniChecks(id, title, output, miniChecks),
  };
}

function reviewPage(id, title, summary, checks) {
  return page(
    `${id}-review`,
    'まとめと確認',
    summary,
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("check");\n    }\n}',
    'check',
    ['L1: Main クラスを定義する。', 'L2: main から処理が始まる。', 'L3: 確認用の文字列を出力する。'],
    [{ wrong: '読んだだけで終わる', reason: '短い例でも出力と値の変化を追うと理解が残りやすいです。', correct: 'コード、出力、値の順に確認する' }],
    checks,
    '最後のページでは、ここまでの要点を小さく確認します。実際の問題では、この知識だけでなく、前後の値や出力結果も合わせて読みます。',
  );
}

function topic(id, title, conceptId, summary, pages, aliases = [], prerequisites = []) {
  return {
    id: `java-${id}`,
    language: 'java',
    title,
    level: prerequisites.length ? 'advanced' : 'basic',
    parentId: null,
    prerequisites,
    aliases: [`java ${id}`, ...aliases],
    summary,
    relatedConceptIds: [conceptId],
    pages,
  };
}

export const JAVA_REFERENCE_TOPICS = [
  topic('syntax-basics', 'Java の基本構文ルール', 'comments', 'Java は { } でブロックの範囲を示し、文の終わりには ; が必要です。インデント（字下げ）は見やすくするためのスタイルで、実行結果には影響しません。', [
    page('java-syntax-basics-braces-semicolons', '波かっこ { } とセミコロン', 'Java では if や for、メソッドなどの範囲を { から } で囲みます。1つの文の終わりには ; を付けます。', 'public class Main {\n    public static void main(String[] args) {\n        int score = 80;\n        if (score >= 70) {\n            System.out.println("pass");\n        }\n    }\n}', 'pass', ['L4: if の範囲を { で開始する。', 'L5: 文の終わりに ; を付ける。', 'L6: if の範囲を } で閉じる。'], [{ wrong: 'System.out.println("pass")', reason: '文の終わりに ; がないとコンパイルエラーになります。', correct: 'System.out.println("pass");' }, { wrong: 'if (score >= 70)\n    System.out.println("pass");\n}', reason: '{ で開けた範囲は同じ数の } で閉じる必要があります。', correct: 'if (score >= 70) {\n    System.out.println("pass");\n}' }], [{ prompt: '文の終わりに付ける記号は？', answer: ';' }, { prompt: '範囲を示す記号のペアは？', answer: '{ と }' }], 'インデント（字下げ）はコードを読みやすくするためのものです。波かっこの数が合っていれば、インデントの深さ自体は実行結果に影響しません。'),
    page('java-syntax-basics-case-class-comments', '大文字小文字・クラス構造・コメント', 'Java は大文字小文字を区別します。すべての処理は class の中に書き、コメントは // か /* */ を使います。', 'public class Main {\n    public static void main(String[] args) {\n        // 1行コメント\n        String Name = "Quest";\n        /* 複数行\n           コメント */\n        System.out.println(Name);\n    }\n}', 'Quest', ['L3: // から行末まではコメント（実行されない）。', 'L4: 変数名 Name は大文字始まり。name とは別の変数として区別される。', 'L5-L6: /* と */ で囲んだ複数行コメント。', 'L7: Name の値を出力する。'], [{ wrong: 'String name = "Quest";\nSystem.out.println(Name);', reason: 'name と Name は大文字小文字が違うため、別の名前として扱われエラーになります。', correct: '変数名の大文字小文字を統一する（例: 両方 name にする）' }, { wrong: 'void show() { ... } // class の外に書く', reason: 'Java のメソッドは必ず class の中に書く必要があります。', correct: 'public class Main { void show() { ... } }' }], [{ prompt: 'Name と name は同じ変数として扱われる？', answer: '扱われない（大文字小文字を区別する）' }, { prompt: '複数行コメントを開始する記号は？', answer: '/*' }]),
    reviewPage('java-syntax-basics', 'まとめ', '{ } の対応、; の有無、大文字小文字の違いは、Java のコードを読むときに最初に確認したいポイントです。', [{ prompt: '範囲の開始と終了を示す記号は？', answer: '{ と }' }, { prompt: 'Name と name は別の変数？', answer: '別の変数（大文字小文字を区別する）' }]),
  ], ['braces', 'semicolon', 'case sensitive', 'comments']),

  topic('program-structure-main', 'Java のプログラム構造と main', 'program-structure', 'Java はクラスの中に処理を書き、main メソッドから実行が始まります。', [
    page('java-program-structure-main-overview', 'まずこれだけ', 'Java の最小単位は class です。実行する入口は public static void main(String[] args) です。', 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("start");\n    }\n}', 'start', ['L1: Main というクラスを定義する。', 'L2: main メソッドが実行開始位置になる。', 'L3: start を表示する。'], [{ wrong: 'main を class の外に書く', reason: 'Java のメソッドはクラスの中に置く必要があります。', correct: 'public class Main { public static void main(String[] args) { } }' }], [{ prompt: '実行開始位置になるメソッド名は？', answer: 'main' }, { prompt: 'メソッドは class の内側と外側のどちらに書く？', answer: '内側' }], 'main は長く見えますが、最初は「ここから動く決まり文句」と覚えて大丈夫です。'),
    page('java-program-structure-main-flow', '実行の流れ', '上から順に読まれますが、main の外にある定義は呼ばれたときに使われます。', 'public class Main {\n    static void show() {\n        System.out.println("inside");\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}', 'inside', ['L2-L4: show という処理を定義する。', 'L5: main から実行が始まる。', 'L6: show() を呼び出して inside が出る。'], [{ wrong: '定義された順に show が先に動くと思う', reason: 'main から呼び出されるまで show の中身は実行されません。', correct: 'main → show() の順に追う' }], [{ prompt: 'この例で最初に実行される場所は？', answer: 'main' }]),
    reviewPage('java-program-structure-main', 'まとめ', 'class、main、呼び出し順を分けて読めると、Java の問題を追いやすくなります。', [{ prompt: 'main の中から別の処理を使う書き方は？', answer: 'メソッド名()' }]),
  ], ['main method', 'class Main']),

  topic('comments', 'Java のコメント', 'comments', 'コメントは人間向けのメモで、実行結果には影響しません。', [
    page('java-comments-line', '1行コメント', '// から行末まではコメントです。説明を書けますが処理は動きません。', 'public class Main {\n    public static void main(String[] args) {\n        // label output\n        System.out.println("ready");\n    }\n}', 'ready', ['L3: // から行末までは実行されない。', 'L4: 実際に動く出力文。'], [{ wrong: '// の後ろに必要な処理を書く', reason: 'コメントになり実行されません。', correct: '動かしたい処理はコメントの外へ書く' }], [{ prompt: '1行コメントの記号は？', answer: '//' }]),
    page('java-comments-block', '複数行コメント', '/* と */ の間は複数行まとめてコメントにできます。', 'public class Main {\n    public static void main(String[] args) {\n        /* memo\n           more memo */\n        System.out.println("run");\n    }\n}', 'run', ['L3-L4: 複数行コメント。', 'L5: コメント外なので実行される。'], [{ wrong: '/* を閉じ忘れる', reason: 'どこまでコメントか分からずコンパイルできません。', correct: '/* memo */ のように閉じる' }], [{ prompt: '複数行コメントを閉じる記号は？', answer: '*/' }]),
    reviewPage('java-comments', 'まとめ', 'コメントは説明を残すためのものです。処理そのものを隠してしまわないようにします。', [{ prompt: 'コメントは出力を変える？', answer: '変えない' }]),
  ], ['single line comment', 'block comment']),

  topic('variables', 'Java の変数', 'variables', '変数は型、名前、値を組み合わせて扱う箱のようなものです。', [
    page('java-variables-declare', '宣言と代入', 'Java では先に型を書いてから変数名を書き、= で値を入れます。', 'public class Main {\n    public static void main(String[] args) {\n        int level = 3;\n        System.out.println(level);\n    }\n}', '3', ['L3: int 型の変数 level に 3 を入れる。', 'L4: level の中身を出力する。'], [{ wrong: 'level = 3;', reason: '初めて使う変数には型が必要です。', correct: 'int level = 3;' }], [{ prompt: '変数名はどれ？', answer: 'level' }]),
    page('java-variables-update', '値の更新', '同じ変数に新しい値を代入すると、中身が置き換わります。', 'public class Main {\n    public static void main(String[] args) {\n        int level = 3;\n        level = level + 1;\n        System.out.println(level);\n    }\n}', '4', ['L3: level は 3。', 'L4: 今の level に 1 を足して 4 に更新する。', 'L5: 更新後の値を出す。'], [{ wrong: 'L4 のあとも 3 のままだと思う', reason: '代入で変数の中身は更新されます。', correct: 'level は 4 になる' }], [{ prompt: 'L4 のあと level は？', answer: '4' }]),
    reviewPage('java-variables', 'まとめ', '変数を見るときは、型、名前、今の値を分けて追います。', [{ prompt: '初回宣言で必要なものは？', answer: '型' }]),
  ]),

  topic('primitive-data-types', 'Java のプリミティブ型', 'primitive-types', 'int、double、boolean、char は小さな値を直接扱う基本型です。', [
    page('java-primitive-numbers', '数値の型', '整数は int、小数を含む値は double をよく使います。', 'public class Main {\n    public static void main(String[] args) {\n        int count = 2;\n        double rate = 1.5;\n        System.out.println(count + rate);\n    }\n}', '3.5', ['L3: count は整数。', 'L4: rate は小数。', 'L5: int と double の計算結果は小数を含められる。'], [{ wrong: 'int rate = 1.5;', reason: 'int は小数を入れられません。', correct: 'double rate = 1.5;' }], [{ prompt: '小数に使う型は？', answer: 'double' }]),
    page('java-primitive-boolean-char', 'boolean と char', 'boolean は true/false、char は1文字を表します。', "public class Main {\n    public static void main(String[] args) {\n        boolean active = true;\n        char grade = 'A';\n        System.out.println(active);\n        System.out.println(grade);\n    }\n}", 'true\nA', ['L3: boolean は真偽値。', 'L4: char はシングルクォートで1文字。', 'L5-L6: それぞれ出力する。'], [{ wrong: 'char grade = "A";', reason: 'char はダブルクォートではなくシングルクォートです。', correct: "char grade = 'A';" }], [{ prompt: 'true/false の型は？', answer: 'boolean' }]),
    reviewPage('java-primitive-data-types', 'まとめ', '型が合わない値は入れられません。値の種類を見て型を選びます。', [{ prompt: '整数に使う基本型は？', answer: 'int' }]),
  ], ['int', 'double', 'boolean', 'char']),

  topic('string', 'Java の String', 'strings', 'String は文字列を扱う型です。連結や長さの取得によく使います。', [
    page('java-string-basic', '文字列を入れる', 'String の値はダブルクォートで囲みます。', 'public class Main {\n    public static void main(String[] args) {\n        String name = "Quest";\n        System.out.println(name);\n    }\n}', 'Quest', ['L3: name に文字列 Quest を入れる。', 'L4: name の中身を出力する。'], [{ wrong: "String name = 'Quest';", reason: 'String はダブルクォートを使います。', correct: 'String name = "Quest";' }], [{ prompt: 'String の文字列を囲む記号は？', answer: 'ダブルクォート' }]),
    page('java-string-methods', '連結と length()', 'String は + でつなげられ、length() で文字数を調べられます。', 'public class Main {\n    public static void main(String[] args) {\n        String message = "Code " + "Quest";\n        System.out.println(message);\n        System.out.println(message.length());\n    }\n}', 'Code Quest\n10', ['L3: 2つの文字列を連結する。', 'L5: length() は文字数を返す。'], [{ wrong: 'message.length', reason: 'String の長さはメソッド呼び出しです。', correct: 'message.length()' }], [{ prompt: '文字数を返すメソッドは？', answer: 'length()' }]),
    reviewPage('java-string', 'まとめ', 'String は見た目の文字だけでなく、メソッドで情報を取り出せます。', [{ prompt: '文字列連結に使う演算子は？', answer: '+' }]),
  ]),

  topic('system-out-println', 'System.out.println で出力する', 'output', 'System.out.println は値を表示して改行します。', [
    page('java-println-one', '1行を出す', 'println は丸かっこの中の値を出力します。', 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("A");\n    }\n}', 'A', ['L3: "A" を表示して改行する。'], [{ wrong: 'System.out.printline("A");', reason: 'メソッド名は println です。', correct: 'System.out.println("A");' }], [{ prompt: '出力に使うメソッド名は？', answer: 'println' }]),
    page('java-println-order', '複数行の順番', '複数の println は上から順に表示されます。', 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("A");\n        System.out.println("B");\n    }\n}', 'A\nB', ['L3: A を出力。', 'L4: 次の行に B を出力。'], [{ wrong: 'B が先に出ると思う', reason: '命令は上から順に実行されます。', correct: 'A の次に B' }], [{ prompt: 'この例の1行目の出力は？', answer: 'A' }]),
    reviewPage('java-system-out-println', 'まとめ', '出力問題では、println が何回呼ばれるかと順番を見るのが大切です。', [{ prompt: 'println は最後に何をする？', answer: '改行' }]),
  ], ['print', 'println', 'output']),

  topic('operators', 'Java の演算子', 'operators', '+、-、*、/、% は計算に使う基本的な演算子です。', [
    page('java-operators-arithmetic', '基本計算', '数値同士を演算子で計算できます。', 'public class Main {\n    public static void main(String[] args) {\n        int total = 10 + 5;\n        System.out.println(total);\n    }\n}', '15', ['L3: 10 + 5 の結果を total に入れる。', 'L4: 15 を出す。'], [{ wrong: '"10" + 5 を数値計算と思う', reason: '文字列が混ざると文字列連結になります。', correct: '数値だけなら 10 + 5' }], [{ prompt: '足し算の演算子は？', answer: '+' }]),
    page('java-operators-divide-mod', '割り算と余り', 'int 同士の / は整数の商、% は余りです。', 'public class Main {\n    public static void main(String[] args) {\n        int total = 17;\n        System.out.println(total / 5);\n        System.out.println(total % 5);\n    }\n}', '3\n2', ['L4: 17 / 5 は整数の商で 3。', 'L5: 17 % 5 は余りで 2。'], [{ wrong: '17 / 5 は 3.4 と思う', reason: 'int 同士の割り算は小数部を切り捨てます。', correct: 'double を使うと小数を扱える' }], [{ prompt: '余りの演算子は？', answer: '%' }]),
    reviewPage('java-operators', 'まとめ', '演算子は型によって結果の見え方が変わります。特に文字列と整数割り算に注意します。', [{ prompt: 'int の 17 / 5 は？', answer: '3' }]),
  ]),

  topic('comparisons-booleans', '比較と boolean', 'booleans', '比較演算子は true または false を返し、条件分岐の材料になります。', [
    page('java-comparison-basic', '比較の結果', '>=、<=、== などは boolean の値を作ります。', 'public class Main {\n    public static void main(String[] args) {\n        int score = 82;\n        boolean passed = score >= 70;\n        System.out.println(passed);\n    }\n}', 'true', ['L3: score は 82。', 'L4: 82 >= 70 は true。', 'L5: true を出す。'], [{ wrong: 'score = 70', reason: '= は代入です。等しいかを見るには == を使います。', correct: 'score == 70' }], [{ prompt: '比較結果の型は？', answer: 'boolean' }]),
    page('java-comparison-not-equal', '等しい/等しくない', '== は等しいか、!= は等しくないかを調べます。', 'public class Main {\n    public static void main(String[] args) {\n        int year = 2025;\n        System.out.println(year == 2025);\n        System.out.println(year != 2024);\n    }\n}', 'true\ntrue', ['L3: year は 2025。', 'L4: 2025 と等しいので true。', 'L5: 2024 とは違うので true。'], [{ wrong: 'year = 2025 を比較に使う', reason: '代入になってしまいます。', correct: 'year == 2025' }], [{ prompt: '等しくないかを見る演算子は？', answer: '!=' }]),
    reviewPage('java-comparisons-booleans', 'まとめ', 'if の前に、比較式が true か false かを自分で一度判断します。', [{ prompt: '等しいかを見る演算子は？', answer: '==' }]),
  ], ['comparison', 'boolean']),

  topic('if-else-if-else', 'if / else if / else', 'conditionals', 'if は条件が true のときだけ処理を実行します。', [
    page('java-if-basic', 'if の基本', '条件が true ならブロック内が実行されます。', 'public class Main {\n    public static void main(String[] args) {\n        int score = 90;\n        if (score >= 80) {\n            System.out.println("A");\n        }\n    }\n}', 'A', ['L3: score は 90。', 'L4: 90 >= 80 は true。', 'L5: A を出す。'], [{ wrong: 'if (score = 80)', reason: '= は代入で、条件比較ではありません。', correct: 'if (score >= 80)' }], [{ prompt: 'if の中が動く条件は？', answer: 'true' }]),
    page('java-if-else-chain', 'else if と else', '上から順に条件を調べ、最初に true になった場所だけ実行します。', 'public class Main {\n    public static void main(String[] args) {\n        int score = 65;\n        if (score >= 80) {\n            System.out.println("A");\n        } else if (score >= 60) {\n            System.out.println("B");\n        } else {\n            System.out.println("C");\n        }\n    }\n}', 'B', ['L4: 80以上ではないので次へ。', 'L6: 60以上なので B。', 'L8: すでに選ばれたので else は動かない。'], [{ wrong: 'else も最後に必ず動くと思う', reason: 'else は前の条件がすべて false のときだけです。', correct: 'この例では B だけ出る' }], [{ prompt: 'score が65なら出力は？', answer: 'B' }]),
    reviewPage('java-if-else-if-else', 'まとめ', '分岐は上から順に、最初に当てはまる1つを選ぶと考えます。', [{ prompt: 'どの条件にも合わないときの場所は？', answer: 'else' }]),
  ]),

  topic('switch', 'switch', 'switch', 'switch は1つの値を複数の候補と比べる分岐です。', [
    page('java-switch-basic', 'case を選ぶ', 'switch の値と一致する case が実行されます。', 'public class Main {\n    public static void main(String[] args) {\n        String mode = "read";\n        switch (mode) {\n            case "write":\n                System.out.println("WRITE");\n                break;\n            case "read":\n                System.out.println("READ");\n                break;\n            default:\n                System.out.println("OTHER");\n        }\n    }\n}', 'READ', ['L3: mode は read。', 'L8: read の case に一致する。', 'L10: break で switch を抜ける。'], [{ wrong: 'break を忘れる', reason: '古い形式の switch では次の case に流れることがあります。', correct: '必要な場所に break を書く' }], [{ prompt: '一致しないときの受け皿は？', answer: 'default' }]),
    page('java-switch-arrow', '矢印形式', '新しい書き方では -> を使い、break を減らせます。', 'public class Main {\n    public static void main(String[] args) {\n        String mode = "debug";\n        switch (mode) {\n            case "decode" -> System.out.println("READ CODE");\n            case "debug" -> System.out.println("FIX CODE");\n            default -> System.out.println("OTHER");\n        }\n    }\n}', 'FIX CODE', ['L3: mode は debug。', 'L6: debug の case が選ばれる。'], [{ wrong: 'case "debug": と -> を混ぜる', reason: '形式を混在させると読みづらく、書き間違えやすいです。', correct: 'case "debug" -> ...' }], [{ prompt: '矢印形式で使う記号は？', answer: '->' }]),
    reviewPage('java-switch', 'まとめ', '候補がはっきり分かれているとき、switch は if の連続より読みやすくできます。', [{ prompt: 'switch が比べる中心の値を書く場所は？', answer: 'switch(...)' }]),
  ]),

  topic('for-loop', 'for ループ', 'loops', 'for は回数が決まっている繰り返しに向いています。', [
    page('java-for-basic', '3つの部品', 'for は初期化、条件、更新を1行にまとめます。', 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            System.out.println(i);\n        }\n    }\n}', '0\n1\n2', ['L3: i を 0 から始める。', 'L3: i < 3 の間だけ繰り返す。', 'L3: 1回ごとに i++ する。'], [{ wrong: 'i <= 3', reason: '0,1,2,3 の4回になります。', correct: '3回なら i < 3' }], [{ prompt: 'この例は何回出力する？', answer: '3回' }]),
    page('java-for-sum', '合計を作る', 'ループでは変数を少しずつ更新できます。', 'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 3; i++) {\n            sum = sum + i;\n        }\n        System.out.println(sum);\n    }\n}', '6', ['L3: sum は 0。', 'L4-L6: 1,2,3 を順に足す。', 'L7: 合計 6 を出す。'], [{ wrong: 'sum をループ内で毎回 0 にする', reason: '合計が毎回リセットされます。', correct: 'sum はループ前に作る' }], [{ prompt: '1+2+3 の結果は？', answer: '6' }]),
    reviewPage('java-for-loop', 'まとめ', 'for は何回動くかを先に数えると追いやすくなります。', [{ prompt: 'i++ は何をする？', answer: 'i を1増やす' }]),
  ]),

  topic('enhanced-for', '拡張 for', 'loops', '拡張 for は配列やリストの要素を先頭から順に取り出します。', [
    page('java-enhanced-for-basic', '要素を順に読む', '添字を使わず、要素そのものを変数に入れて処理できます。', 'public class Main {\n    public static void main(String[] args) {\n        String[] worlds = {"decode", "execute", "debug"};\n        for (String world : worlds) {\n            System.out.println(world);\n        }\n    }\n}', 'decode\nexecute\ndebug', ['L3: 配列を作る。', 'L4: worlds から1つずつ world に入れる。'], [{ wrong: 'for (world : worlds)', reason: '取り出す変数にも型が必要です。', correct: 'for (String world : worlds)' }], [{ prompt: '拡張 for の区切り記号は？', answer: ':' }]),
    page('java-enhanced-for-filter', '条件と組み合わせる', '取り出した要素に if を使うと、必要なものだけ処理できます。', 'public class Main {\n    public static void main(String[] args) {\n        int[] scores = {50, 80, 90};\n        for (int score : scores) {\n            if (score >= 80) {\n                System.out.println(score);\n            }\n        }\n    }\n}', '80\n90', ['L3: score 候補を並べる。', 'L4: 1つずつ score に入る。', 'L5: 80以上だけ出力する。'], [{ wrong: '添字が取れないのに index を使う', reason: '拡張 for は要素そのものを扱います。', correct: '必要なら通常の for を使う' }], [{ prompt: 'この例で出力されない値は？', answer: '50' }]),
    reviewPage('java-enhanced-for', 'まとめ', '順番に全部見るだけなら拡張 for、位置番号が必要なら通常の for が向いています。', [{ prompt: '要素そのものを順に取る書き方は？', answer: '拡張 for' }]),
  ], ['foreach']),

  topic('while-loop', 'while', 'loops', 'while は条件が true の間だけ繰り返します。', [
    page('java-while-basic', '条件で回す', '繰り返し回数が状況で変わるときに使いやすい書き方です。', 'public class Main {\n    public static void main(String[] args) {\n        int count = 0;\n        while (count < 3) {\n            System.out.println(count);\n            count++;\n        }\n    }\n}', '0\n1\n2', ['L3: count は 0。', 'L4: 3未満なら続く。', 'L6: count を増やしていつか止まる。'], [{ wrong: 'count++ を書かない', reason: '条件が変わらず無限ループになりやすいです。', correct: 'ループ内で条件に関わる値を更新する' }], [{ prompt: 'while が止まるのはいつ？', answer: '条件が false のとき' }]),
    page('java-while-input-like', '条件を先に見る', 'while は本体を実行する前に条件を確認します。', 'public class Main {\n    public static void main(String[] args) {\n        int stock = 0;\n        while (stock > 0) {\n            System.out.println("sell");\n        }\n        System.out.println("done");\n    }\n}', 'done', ['L3: stock は 0。', 'L4: stock > 0 は false。', 'L7: ループを通らず done を出す。'], [{ wrong: 'while は必ず1回動くと思う', reason: '条件が最初から false なら0回です。', correct: '0回の可能性もある' }], [{ prompt: 'この例で sell は出る？', answer: '出ない' }]),
    reviewPage('java-while-loop', 'まとめ', 'while は「条件が変わるか」を必ず確認します。', [{ prompt: '最初から false の while は何回動く？', answer: '0回' }]),
  ]),

  topic('arrays', 'Java の配列', 'arrays', '配列は同じ型の値を順番に並べます。番号は0から始まります。', [
    page('java-arrays-index', '添字で取り出す', '配列の要素は [番号] で取り出します。', 'public class Main {\n    public static void main(String[] args) {\n        int[] scores = {80, 90, 70};\n        System.out.println(scores[1]);\n    }\n}', '90', ['L3: 3つの値を持つ配列。', 'L4: 添字1は2番目なので 90。'], [{ wrong: 'scores[3]', reason: '3要素の配列で使える添字は 0,1,2 です。', correct: '最後は scores[2]' }], [{ prompt: '最初の添字は？', answer: '0' }]),
    page('java-arrays-length', 'length とループ', 'length は配列の要素数です。ループ条件によく使います。', 'public class Main {\n    public static void main(String[] args) {\n        String[] names = {"A", "B"};\n        for (int i = 0; i < names.length; i++) {\n            System.out.println(names[i]);\n        }\n    }\n}', 'A\nB', ['L3: 要素数は2。', 'L4: i は 0,1 の間だけ動く。', 'L5: 各要素を出す。'], [{ wrong: 'i <= names.length', reason: '最後に範囲外の添字になります。', correct: 'i < names.length' }], [{ prompt: '要素数を表すプロパティは？', answer: 'length' }]),
    reviewPage('java-arrays', 'まとめ', '配列では「要素数」と「最後の添字」が1ずれる点に注意します。', [{ prompt: '要素数3の最後の添字は？', answer: '2' }]),
  ]),

  topic('methods', 'メソッド', 'methods', 'メソッドは名前を付けた処理のまとまりです。呼び出すと中身が実行されます。', [
    page('java-methods-void', 'void メソッド', '戻り値がないメソッドは void と書きます。', 'public class Main {\n    static void greet() {\n        System.out.println("hello");\n    }\n    public static void main(String[] args) {\n        greet();\n    }\n}', 'hello', ['L2: greet を定義する。', 'L6: greet() を呼び出す。'], [{ wrong: 'greet;', reason: 'メソッド呼び出しには () が必要です。', correct: 'greet();' }], [{ prompt: '戻り値なしの型は？', answer: 'void' }]),
    page('java-methods-reuse', '再利用する', '同じメソッドは何度でも呼び出せます。', 'public class Main {\n    static void mark() {\n        System.out.println("*");\n    }\n    public static void main(String[] args) {\n        mark();\n        mark();\n    }\n}', '*\n*', ['L6: 1回目の呼び出し。', 'L7: 2回目の呼び出し。'], [{ wrong: '定義しただけで動くと思う', reason: '呼び出されるまで実行されません。', correct: 'main から mark() を呼ぶ' }], [{ prompt: 'mark は何回呼ばれる？', answer: '2回' }]),
    reviewPage('java-methods', 'まとめ', 'メソッドは定義と呼び出しを分けて読むと混乱しにくくなります。', [{ prompt: '呼び出しに必要な記号は？', answer: '()' }]),
  ]),

  topic('parameters-return-values', '引数と戻り値', 'methods', '引数はメソッドへ渡す値、戻り値はメソッドから返る値です。', [
    page('java-parameters-basic', '引数を渡す', '呼び出し側の値が、メソッド内の仮引数に入ります。', 'public class Main {\n    static void show(String name) {\n        System.out.println(name);\n    }\n    public static void main(String[] args) {\n        show("Java");\n    }\n}', 'Java', ['L2: name という仮引数を受け取る。', 'L6: "Java" を渡す。'], [{ wrong: 'show();', reason: '必要な引数が足りません。', correct: 'show("Java");' }], [{ prompt: '渡された値を受け取る名前は？', answer: '仮引数' }]),
    page('java-return-basic', '戻り値を受け取る', 'return で返した値は、呼び出し元で変数に入れられます。', 'public class Main {\n    static int doubleValue(int number) {\n        return number * 2;\n    }\n    public static void main(String[] args) {\n        int result = doubleValue(4);\n        System.out.println(result);\n    }\n}', '8', ['L2: int を返すメソッド。', 'L3: number * 2 を返す。', 'L6: 戻り値を result に入れる。'], [{ wrong: 'return を書かない', reason: 'int を返す約束なのに返す値がありません。', correct: 'return number * 2;' }], [{ prompt: 'doubleValue(4) の戻り値は？', answer: '8' }]),
    reviewPage('java-parameters-return-values', 'まとめ', '引数は入ってくる値、戻り値は出ていく値です。', [{ prompt: '値を返すキーワードは？', answer: 'return' }]),
  ], ['return value', 'argument']),

  topic('method-overloading', 'メソッドオーバーロード', 'methods', '同じ名前でも、引数の型や数が違えば別のメソッドとして定義できます。', [
    page('java-overloading-basic', '同じ名前で分ける', '呼び出し時の引数に合うメソッドが選ばれます。', 'public class Main {\n    static String label(String name) {\n        return name;\n    }\n    static String label(String name, int year) {\n        return name + ":" + year;\n    }\n    public static void main(String[] args) {\n        System.out.println(label("A", 2025));\n    }\n}', 'A:2025', ['L2-L4: 引数1つの label。', 'L5-L7: 引数2つの label。', 'L9: 2つ渡すので後者が選ばれる。'], [{ wrong: '戻り値だけを変えて同名にする', reason: '戻り値だけでは区別できません。', correct: '引数の型や数を変える' }], [{ prompt: 'この例で選ばれる label の引数数は？', answer: '2つ' }]),
    page('java-overloading-types', '型で選ばれる', '引数の数が同じでも型が違えば区別できます。', 'public class Main {\n    static void printValue(int value) {\n        System.out.println("int:" + value);\n    }\n    static void printValue(String value) {\n        System.out.println("text:" + value);\n    }\n    public static void main(String[] args) {\n        printValue("7");\n    }\n}', 'text:7', ['L2-L4: int 用。', 'L5-L7: String 用。', 'L9: "7" は String。'], [{ wrong: '"7" を int だと思う', reason: '引用符があるので文字列です。', correct: 'String 版が呼ばれる' }], [{ prompt: '"7" の型は？', answer: 'String' }]),
    reviewPage('java-method-overloading', 'まとめ', 'オーバーロードでは、名前だけでなく引数リストを見ます。', [{ prompt: '同名メソッドを区別する主な材料は？', answer: '引数' }]),
  ], ['overload'], ['java-methods']),

  topic('classes-objects', 'クラスとオブジェクト', 'classes', 'クラスは設計図、オブジェクトはその設計図から作った実体です。', [
    page('java-classes-basic', 'クラスを作る', 'class の中にデータや処理をまとめられます。', 'class Item {\n    String name = "Book";\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item item = new Item();\n        System.out.println(item.name);\n    }\n}', 'Book', ['L1-L3: Item クラスを定義する。', 'L6: new Item() でオブジェクトを作る。', 'L7: item.name を読む。'], [{ wrong: 'Item.name と直接読む', reason: 'この例の name はオブジェクトのフィールドです。', correct: 'item.name' }], [{ prompt: 'オブジェクトを作るキーワードは？', answer: 'new' }]),
    page('java-classes-multiple', '複数の実体', '同じクラスから別々のオブジェクトを作れます。', 'class Item {\n    String name;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item a = new Item();\n        Item b = new Item();\n        a.name = "A";\n        b.name = "B";\n        System.out.println(a.name + b.name);\n    }\n}', 'AB', ['L6-L7: 2つの Item を作る。', 'L8-L9: それぞれ別の name を入れる。'], [{ wrong: 'a と b の値が必ず同じと思う', reason: '別々のオブジェクトなのでフィールド値も別に持てます。', correct: 'a.name と b.name は別' }], [{ prompt: 'この例の b.name は？', answer: 'B' }]),
    reviewPage('java-classes-objects', 'まとめ', 'クラス名、変数名、フィールド名を分けて読むと追いやすくなります。', [{ prompt: '設計図にあたるものは？', answer: 'クラス' }]),
  ]),

  topic('fields', 'フィールド', 'classes', 'フィールドはオブジェクトが持つデータです。', [
    page('java-fields-basic', 'フィールドを読む', 'オブジェクト名.フィールド名で値にアクセスします。', 'class Card {\n    String title = "Java";\n}\npublic class Main {\n    public static void main(String[] args) {\n        Card card = new Card();\n        System.out.println(card.title);\n    }\n}', 'Java', ['L2: title フィールド。', 'L6: card オブジェクトを作る。', 'L7: card.title を読む。'], [{ wrong: 'title とだけ書く', reason: 'main の中には title というローカル変数がありません。', correct: 'card.title' }], [{ prompt: 'フィールドを読む記号は？', answer: '.' }]),
    page('java-fields-update', 'フィールドを更新する', 'フィールドにも代入できます。', 'class Card {\n    String title;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Card card = new Card();\n        card.title = "Quest";\n        System.out.println(card.title);\n    }\n}', 'Quest', ['L2: title は未設定。', 'L7: card.title に Quest を入れる。', 'L8: 更新後の値を出す。'], [{ wrong: 'Card.title = "Quest";', reason: 'static でないフィールドはオブジェクトを通して扱います。', correct: 'card.title = "Quest";' }], [{ prompt: 'この例の出力は？', answer: 'Quest' }]),
    reviewPage('java-fields', 'まとめ', 'フィールドは「どのオブジェクトの値か」を常にセットで見ます。', [{ prompt: 'card.title の card は何？', answer: 'オブジェクト変数' }]),
  ], [], ['java-classes-objects']),

  topic('constructors', 'コンストラクタ', 'classes', 'コンストラクタは new したときに初期値を入れる特別な処理です。', [
    page('java-constructors-basic', '初期化する', 'コンストラクタ名はクラス名と同じです。', 'class Item {\n    String name;\n    Item(String name) {\n        this.name = name;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Item item = new Item("Map");\n        System.out.println(item.name);\n    }\n}', 'Map', ['L3: コンストラクタ。', 'L4: 引数をフィールドへ入れる。', 'L9: new Item("Map") で初期化する。'], [{ wrong: 'void Item(String name)', reason: 'コンストラクタには戻り値の型を書きません。', correct: 'Item(String name)' }], [{ prompt: 'コンストラクタ名は何と同じ？', answer: 'クラス名' }]),
    page('java-constructors-this', 'this の意味', 'this は今作っているオブジェクト自身を指します。', 'class Item {\n    String name;\n    Item(String name) {\n        this.name = name;\n    }\n}', '', ['L2: フィールドの name。', 'L3: 引数の name。', 'L4: this.name はフィールド側。'], [{ wrong: 'name = name;', reason: '引数同士を代入してしまい、フィールドが設定されません。', correct: 'this.name = name;' }], [{ prompt: 'this.name はフィールドと引数のどちら？', answer: 'フィールド' }]),
    reviewPage('java-constructors', 'まとめ', 'new、コンストラクタ、this の流れを追うと、オブジェクトの初期値が分かります。', [{ prompt: 'new のときに呼ばれる特別な処理は？', answer: 'コンストラクタ' }]),
  ], [], ['java-classes-objects']),

  topic('access-modifiers', 'アクセス修飾子', 'access-control', 'public、private などは、どこから使えるかを制限します。', [
    page('java-access-basic', 'public と private', 'public は外から使いやすく、private はクラス内に隠します。', 'class Account {\n    private int score = 10;\n    public int getScore() {\n        return score;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Account account = new Account();\n        System.out.println(account.getScore());\n    }\n}', '10', ['L2: score は private。', 'L3-L5: public メソッドで値を返す。', 'L10: getScore() なら外から呼べる。'], [{ wrong: 'account.score と読む', reason: 'score は private なので外から直接読めません。', correct: 'account.getScore()' }], [{ prompt: '外から直接見せない修飾子は？', answer: 'private' }]),
    page('java-access-package', '何も書かない場合', '修飾子を省くと、同じパッケージ内から使える扱いになります。初心者はまず public/private の違いを押さえます。', 'class Tool {\n    String name = "pen";\n}', '', ['L1: class に public がないのでパッケージ内向け。', 'L2: name も修飾子なし。'], [{ wrong: '何も書かない = private と思う', reason: 'private とは別のアクセス範囲です。', correct: '必要に応じて public/private を明示する' }], [{ prompt: '初心者がまず区別したい2つは？', answer: 'public と private' }]),
    reviewPage('java-access-modifiers', 'まとめ', 'アクセス修飾子は、データを守りながら必要な操作だけ公開するために使います。', [{ prompt: '公開する修飾子は？', answer: 'public' }]),
  ], [], ['java-classes-objects']),

  topic('encapsulation', 'カプセル化', 'access-control', 'カプセル化はデータを直接触らせず、メソッドを通して安全に扱う考え方です。', [
    page('java-encapsulation-getter', 'getter', 'private フィールドを読むために public メソッドを用意します。', 'class Player {\n    private int level = 1;\n    public int getLevel() {\n        return level;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Player player = new Player();\n        System.out.println(player.getLevel());\n    }\n}', '1', ['L2: level は private。', 'L3-L5: getLevel で値を返す。'], [{ wrong: 'player.level', reason: 'private フィールドには直接アクセスできません。', correct: 'player.getLevel()' }], [{ prompt: '値を読む公開メソッドをよく何と呼ぶ？', answer: 'getter' }]),
    page('java-encapsulation-setter', 'setter と検査', '値を変えるときもメソッドを通すと、不正な値を防ぎやすくなります。', 'class Player {\n    private int level = 1;\n    public void setLevel(int level) {\n        if (level > 0) {\n            this.level = level;\n        }\n    }\n    public int getLevel() { return level; }\n}', '', ['L3: setLevel で値を受け取る。', 'L4: 0より大きいときだけ更新する。', 'L8: getLevel で読む。'], [{ wrong: 'どんな値でも直接代入する', reason: '不正な状態を作りやすくなります。', correct: 'setter 内で確認する' }], [{ prompt: '値を変更する公開メソッドをよく何と呼ぶ？', answer: 'setter' }]),
    reviewPage('java-encapsulation', 'まとめ', 'カプセル化は面倒な飾りではなく、状態を壊しにくくするための設計です。', [{ prompt: 'フィールドを隠す代表的な修飾子は？', answer: 'private' }]),
  ], [], ['java-access-modifiers']),

  topic('static', 'static', 'static', 'static はオブジェクトではなくクラスに結びつくメンバーを表します。', [
    page('java-static-method', 'static メソッド', 'main から直接呼びたい補助メソッドは static にすることがあります。', 'public class Main {\n    static String label() {\n        return "Java";\n    }\n    public static void main(String[] args) {\n        System.out.println(label());\n    }\n}', 'Java', ['L2: static メソッド label。', 'L6: 同じクラス内なので label() と呼べる。'], [{ wrong: 'static でないメソッドを main から直接呼ぶ', reason: 'オブジェクトが必要になります。', correct: 'static にするか、new して呼ぶ' }], [{ prompt: 'main に付いているキーワードは？', answer: 'static' }]),
    page('java-static-field', 'static フィールド', '全オブジェクトで共有する値に使います。', 'class Counter {\n    static int total = 0;\n    Counter() {\n        total++;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        System.out.println(Counter.total);\n    }\n}', '2', ['L2: total はクラスに属する。', 'L9-L10: 2回作る。', 'L11: 共有値 total は 2。'], [{ wrong: '各オブジェクトが別々の total を持つと思う', reason: 'static は共有されます。', correct: 'Counter.total として読む' }], [{ prompt: 'この例の total は？', answer: '2' }]),
    reviewPage('java-static', 'まとめ', 'static は便利ですが、何でも共有にすると状態の流れが見えにくくなります。', [{ prompt: 'static は何に結びつく？', answer: 'クラス' }]),
  ], [], ['java-classes-objects']),

  topic('inheritance', '継承', 'inheritance', '継承は既存クラスの性質を受け継いで新しいクラスを作る仕組みです。', [
    page('java-inheritance-extends', 'extends', '子クラスは親クラスのメソッドを使えます。', 'class Animal {\n    String sound() { return "sound"; }\n}\nclass Dog extends Animal {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        System.out.println(dog.sound());\n    }\n}', 'sound', ['L1-L3: 親クラス Animal。', 'L4-L5: Dog は Animal を継承する。', 'L9: 親の sound を使える。'], [{ wrong: 'extends を複数書く', reason: 'Java のクラス継承は1つの親クラスだけです。', correct: '必要なら interface を使う' }], [{ prompt: '継承に使うキーワードは？', answer: 'extends' }]),
    page('java-inheritance-polymorphism', '親型で受ける', '子クラスのオブジェクトを親型の変数に入れられます。', 'class Animal {\n    String name() { return "animal"; }\n}\nclass Dog extends Animal {\n    String name() { return "dog"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        System.out.println(animal.name());\n    }\n}', 'dog', ['L9: 変数型は Animal。', 'L9: 実体は Dog。', 'L10: 実体側の name が呼ばれる。'], [{ wrong: '変数型だけ見て animal が出ると思う', reason: '実際のオブジェクトが Dog です。', correct: 'dog が出る' }], [{ prompt: 'この例の実体のクラスは？', answer: 'Dog' }]),
    reviewPage('java-inheritance', 'まとめ', '継承では「変数の型」と「実体の型」を分けて読むことが大切です。', [{ prompt: '親クラスを指定するキーワードは？', answer: 'extends' }]),
  ], [], ['java-classes-objects']),

  topic('method-overriding', 'メソッドオーバーライド', 'inheritance', 'オーバーライドは親クラスのメソッドを子クラスで上書きすることです。', [
    page('java-override-basic', '@Override', '@Override を付けると、上書きできているかコンパイラが確認します。', 'class Parent {\n    String label() { return "parent"; }\n}\nclass Child extends Parent {\n    @Override\n    String label() { return "child"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent item = new Child();\n        System.out.println(item.label());\n    }\n}', 'child', ['L2: 親の label。', 'L6: 子が同じ形で上書きする。', 'L11: 実体が Child なので child。'], [{ wrong: 'String labels() と名前を変える', reason: '名前が違うので上書きになりません。', correct: 'String label()' }], [{ prompt: '上書き確認に使う注釈は？', answer: '@Override' }]),
    page('java-override-signature', 'シグネチャを合わせる', 'メソッド名、引数、戻り値の互換性が合っていないと上書きになりません。', 'class Parent {\n    String label(String text) { return text; }\n}\nclass Child extends Parent {\n    @Override\n    String label(String text) { return "child:" + text; }\n}', '', ['L2: 親は String 引数を受ける。', 'L6: 子も同じ引数で上書きする。'], [{ wrong: 'String label(int text)', reason: '引数型が違うので別メソッドになります。', correct: 'String label(String text)' }], [{ prompt: '引数型が違うと何になる？', answer: '別メソッド' }]),
    reviewPage('java-method-overriding', 'まとめ', 'オーバーライドのバグは、名前・引数・戻り値を1つずつ照合すると見つけやすいです。', [{ prompt: '親の処理を子で上書きすることは？', answer: 'オーバーライド' }]),
  ], ['override'], ['java-inheritance']),

  topic('interfaces', 'インターフェース', 'interfaces', 'インターフェースは、クラスが持つべきメソッドの約束を表します。', [
    page('java-interface-basic', 'implements', 'クラスは implements でインターフェースを実装します。', 'interface Named {\n    String name();\n}\nclass Stage implements Named {\n    public String name() {\n        return "decode";\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Named item = new Stage();\n        System.out.println(item.name());\n    }\n}', 'decode', ['L1-L3: name メソッドの約束。', 'L4: Stage が実装する。', 'L11: Named 型として扱う。'], [{ wrong: 'name() を実装しない', reason: '約束したメソッドがないのでコンパイルできません。', correct: 'public String name() を書く' }], [{ prompt: '実装に使うキーワードは？', answer: 'implements' }]),
    page('java-interface-many', '複数実装', 'クラスは複数のインターフェースを実装できます。', 'interface ReadableItem { String read(); }\ninterface FixableItem { String fix(); }\nclass Task implements ReadableItem, FixableItem {\n    public String read() { return "read"; }\n    public String fix() { return "fix"; }\n}', '', ['L1-L2: 2つの約束。', 'L3: カンマで複数実装。', 'L4-L5: 両方のメソッドを書く。'], [{ wrong: 'extends で複数クラスを継承する', reason: 'クラス継承は1つだけです。', correct: '複数の役割は interface で表す' }], [{ prompt: 'interface を実装するキーワードは？', answer: 'implements' }]),
    reviewPage('java-interfaces', 'まとめ', 'インターフェースは「できること」を型として扱うための約束です。', [{ prompt: 'メソッドの約束を書く仕組みは？', answer: 'interface' }]),
  ]),

  topic('arraylist', 'ArrayList', 'collections', 'ArrayList は後から要素を追加できる可変長のリストです。', [
    page('java-arraylist-add-get', 'add と get', 'add で追加し、get(index) で取り出します。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>();\n        names.add("A");\n        names.add("B");\n        System.out.println(names.get(1));\n    }\n}', 'B', ['L1: ArrayList を import する。', 'L4: String のリストを作る。', 'L5-L6: A, B の順に追加。', 'L7: 添字1は B。'], [{ wrong: 'names[1]', reason: 'ArrayList は配列の [] ではなく get を使います。', correct: 'names.get(1)' }], [{ prompt: '取り出すメソッドは？', answer: 'get' }]),
    page('java-arraylist-size-loop', 'size とループ', 'size() で要素数を取得できます。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> scores = new ArrayList<>();\n        scores.add(10);\n        scores.add(20);\n        for (int i = 0; i < scores.size(); i++) {\n            System.out.println(scores.get(i));\n        }\n    }\n}', '10\n20', ['L7: size() は2。', 'L8: i 番目の値を取り出す。'], [{ wrong: 'scores.length', reason: 'ArrayList の要素数は size() です。', correct: 'scores.size()' }], [{ prompt: 'ArrayList の要素数メソッドは？', answer: 'size()' }]),
    reviewPage('java-arraylist', 'まとめ', 'ArrayList は追加できる配列のように使えますが、取り出しや長さの書き方が違います。', [{ prompt: '追加するメソッドは？', answer: 'add' }]),
  ], ['list'], ['java-arrays']),

  topic('hashmap', 'HashMap', 'collections', 'HashMap はキーと値を対応づけて保存します。', [
    page('java-hashmap-put-get', 'put と get', 'put(key, value) で保存し、get(key) で値を取り出します。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> years = new HashMap<>();\n        years.put("start", 2025);\n        System.out.println(years.get("start"));\n    }\n}', '2025', ['L1: HashMap を import。', 'L4: String キー、Integer 値の Map。', 'L5: start に 2025 を対応づける。', 'L6: start で取り出す。'], [{ wrong: 'years.get("Start")', reason: 'キーは大文字小文字も含めて一致が必要です。', correct: 'years.get("start")' }], [{ prompt: '値を保存するメソッドは？', answer: 'put' }]),
    page('java-hashmap-missing', 'ないキー', '存在しないキーを get すると null が返ります。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> labels = new HashMap<>();\n        labels.put("JP", "Japan");\n        System.out.println(labels.get("US"));\n    }\n}', 'null', ['L5: JP だけを保存。', 'L6: US は未登録なので null。'], [{ wrong: '必ず空文字が返ると思う', reason: 'HashMap の未登録キーは null です。', correct: 'null チェックを考える' }], [{ prompt: '未登録キーの get は何を返す？', answer: 'null' }]),
    reviewPage('java-hashmap', 'まとめ', 'HashMap は順番ではなくキーで値を探します。キーの完全一致が重要です。', [{ prompt: '値を取り出すメソッドは？', answer: 'get' }]),
  ], ['map'], ['java-arraylist']),

  topic('null', 'null', 'null-safety', 'null は参照先のオブジェクトがない状態です。', [
    page('java-null-basic', 'null の意味', 'String などの参照型には null が入ることがあります。', 'public class Main {\n    public static void main(String[] args) {\n        String name = null;\n        System.out.println(name);\n    }\n}', 'null', ['L3: name は何も参照していない。', 'L4: println は null と表示する。'], [{ wrong: 'null を "null" と同じと思う', reason: '"null" は4文字の文字列です。', correct: 'null は参照なし' }], [{ prompt: '参照先がない状態は？', answer: 'null' }]),
    page('java-null-check', 'null チェック', 'null のままメソッドを呼ぶと例外になりやすいため、先に確認します。', 'public class Main {\n    public static void main(String[] args) {\n        String name = null;\n        if (name != null) {\n            System.out.println(name.length());\n        } else {\n            System.out.println("missing");\n        }\n    }\n}', 'missing', ['L3: name は null。', 'L4: null ではないか確認。', 'L7: else 側が動く。'], [{ wrong: 'name.length() をすぐ呼ぶ', reason: 'null にはメソッドを呼べません。', correct: 'name != null を確認する' }], [{ prompt: 'null でないか調べる式は？', answer: 'name != null' }]),
    reviewPage('java-null', 'まとめ', 'null があり得る値では、使う前に確認する習慣が大切です。', [{ prompt: 'null にメソッドを呼ぶと起きやすい例外は？', answer: 'NullPointerException' }]),
  ]),

  topic('equals-vs-double-equals', '== と .equals()', 'strings', '== は同じ参照か、.equals() は内容が等しいかを比べます。', [
    page('java-equals-reference', '== の落とし穴', 'String の内容比較には .equals() を使うのが基本です。', 'public class Main {\n    public static void main(String[] args) {\n        String a = new String("JP");\n        String b = new String("JP");\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}', 'false\ntrue', ['L3-L4: 内容は同じだが別オブジェクト。', 'L5: == は参照比較なので false。', 'L6: equals は内容比較なので true。'], [{ wrong: 'a == b で文字列内容を比べる', reason: '同じ内容でも false になることがあります。', correct: 'a.equals(b)' }], [{ prompt: '文字列内容比較に使うのは？', answer: '.equals()' }]),
    page('java-equals-null-safe', 'null と equals', 'null かもしれない値に直接 equals を呼ぶと危険です。', 'public class Main {\n    public static void main(String[] args) {\n        String code = null;\n        System.out.println("JP".equals(code));\n    }\n}', 'false', ['L3: code は null。', 'L4: null でない文字列側から equals を呼ぶ。'], [{ wrong: 'code.equals("JP")', reason: 'code が null なら例外になります。', correct: '"JP".equals(code)' }], [{ prompt: 'この例の出力は？', answer: 'false' }]),
    reviewPage('java-equals-vs-double-equals', 'まとめ', 'String の判定バグは、== と equals の違いを見るだけでかなり防げます。', [{ prompt: '== が比べるものは？', answer: '参照' }]),
  ], ['String equals'], ['java-string']),

  topic('exceptions-try-catch', '例外と try / catch', 'exceptions', '例外は実行中の異常を表します。try / catch で扱えます。', [
    page('java-exception-basic', '例外が起きる例', '数値にできない文字列を変換すると NumberFormatException が起きます。', 'public class Main {\n    public static void main(String[] args) {\n        int value = Integer.parseInt("12");\n        System.out.println(value);\n    }\n}', '12', ['L3: "12" を int に変換。', 'L4: 12 を出力。'], [{ wrong: 'Integer.parseInt("12cm")', reason: '数字以外が混ざると変換できません。', correct: '数字部分だけにしてから変換する' }], [{ prompt: '文字列を int にするメソッドは？', answer: 'Integer.parseInt' }]),
    page('java-try-catch', 'try / catch', '失敗する可能性がある処理を try に入れ、catch で失敗時の処理を書きます。', 'public class Main {\n    public static void main(String[] args) {\n        try {\n            int value = Integer.parseInt("12cm");\n            System.out.println(value);\n        } catch (NumberFormatException error) {\n            System.out.println("invalid");\n        }\n    }\n}', 'invalid', ['L3-L5: 変換を試す。', 'L6: 変換失敗を捕まえる。', 'L7: invalid を出す。'], [{ wrong: 'catch を空にする', reason: '失敗した理由や代替処理が分からなくなります。', correct: '必要なメッセージや回復処理を書く' }], [{ prompt: '失敗時の処理を書く場所は？', answer: 'catch' }]),
    reviewPage('java-exceptions-try-catch', 'まとめ', '例外処理では、どの行が失敗し得るかと、失敗したら何をするかを分けて考えます。', [{ prompt: '例外が起きそうな処理を囲むキーワードは？', answer: 'try' }]),
  ], ['exception', 'try catch']),
];
