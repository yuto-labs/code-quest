const WORLD_EXAMPLES = {
  decode: '構文の形、キーワード、記号の意味を読む。',
  execute: '変数の値、条件分岐、繰り返しの順番を追う。',
  debug: '型、メモリ、範囲、ポインタの扱いのずれを直す。',
};

function buildMiniChecks(id, title, output, miniChecks) {
  const checks = [...miniChecks];
  if (checks.length < 2) {
    checks.push({ prompt: 'このページの中心は？', answer: title });
  }
  if (checks.length < 2) {
    checks.push({
      prompt: output ? 'この例の出力は？' : 'この例で特に見るものは？',
      answer: output || '行ごとの役割',
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
    '#include <stdio.h>\n\nint main(void) {\n    printf("check\\n");\n    return 0;\n}',
    'check',
    ['L1: 標準入出力を使うために stdio.h を読み込む。', 'L3: main から処理が始まる。', 'L4: 確認用の文字列を出力する。'],
    [{ wrong: '読んだだけで終わる', reason: '短い例でも出力と値の変化を追うと理解が残りやすいです。', correct: 'コード、出力、値の順に確認する' }],
    checks,
    '最後のページでは、ここまでの要点を小さく確認します。実際の問題では、この知識だけでなく、前後の値やメモリの状態も合わせて読みます。',
  );
}

function topic(id, title, conceptId, summary, pages, aliases = [], prerequisites = []) {
  return {
    id: `c-${id}`,
    language: 'c',
    title,
    level: prerequisites.length ? 'advanced' : 'basic',
    parentId: null,
    prerequisites,
    aliases: [`c ${id}`, ...aliases],
    summary,
    relatedConceptIds: [conceptId],
    pages,
  };
}

export const C_REFERENCE_TOPICS = [
  topic('program-structure-main', 'C のプログラム構造と main', 'program-structure', 'C のプログラムは #include で機能を読み込み、int main(void) から実行が始まります。', [
    page('c-program-structure-main-overview', 'まずこれだけ', 'C の最小単位は関数です。実行する入口は int main(void) で、正常終了は return 0; で表します。', '#include <stdio.h>\n\nint main(void) {\n    printf("start\\n");\n    return 0;\n}', 'start', ['L1: 標準入出力（printf など）を使うために stdio.h を読み込む。', 'L3: main から実行が始まる。', 'L4: start を表示する。', 'L5: 0 を返して正常終了を示す。'], [{ wrong: 'return 0; を書かない', reason: '省略しても動く場合がありますが、正常終了を明示するのが基本です。', correct: 'int main(void) { ... return 0; }' }], [{ prompt: '実行が始まる関数名は？', answer: 'main' }, { prompt: 'printf を使うために読み込むヘッダーは？', answer: 'stdio.h' }], 'main は「ここから動く決まり文句」として、まずは形をそのまま覚えて大丈夫です。'),
    page('c-program-structure-main-flow', '実行の流れ', '上から順に読まれますが、main の外にある関数の定義は呼ばれたときに使われます。', '#include <stdio.h>\n\nvoid show(void) {\n    printf("inside\\n");\n}\n\nint main(void) {\n    show();\n    return 0;\n}', 'inside', ['L3-L5: show という関数を定義する。', 'L7: main から実行が始まる。', 'L8: show() を呼び出して inside が出る。'], [{ wrong: '定義された順に show が先に動くと思う', reason: 'main から呼び出されるまで show の中身は実行されません。', correct: 'main → show() の順に追う' }], [{ prompt: 'この例で最初に実行される場所は？', answer: 'main' }]),
    reviewPage('program-structure-main', 'まとめ', '#include、main、関数の呼び出し順を分けて読めると、C の問題を追いやすくなります。', [{ prompt: 'main の中から別の関数を使う書き方は？', answer: '関数名()' }]),
  ], ['main function', '#include']),

  topic('comments', 'C のコメント', 'comments', 'コメントは人間向けのメモで、実行結果には影響しません。', [
    page('c-comments-line', '1行コメント', '// から行末まではコメントです。説明を書けますが処理は動きません。', '#include <stdio.h>\n\nint main(void) {\n    // label output\n    printf("ready\\n");\n    return 0;\n}', 'ready', ['L4: // から行末までは実行されない。', 'L5: 実際に動く出力文。'], [{ wrong: '// の後ろに必要な処理を書く', reason: 'コメントになり実行されません。', correct: '動かしたい処理はコメントの外へ書く' }], [{ prompt: '1行コメントの記号は？', answer: '//' }]),
    page('c-comments-block', '複数行コメント', '/* と */ の間は複数行まとめてコメントにできます。', '#include <stdio.h>\n\nint main(void) {\n    /* memo\n       more memo */\n    printf("run\\n");\n    return 0;\n}', 'run', ['L4-L5: 複数行コメント。', 'L6: コメント外なので実行される。'], [{ wrong: '/* を閉じ忘れる', reason: 'どこまでコメントか分からずコンパイルできません。', correct: '/* memo */ のように閉じる' }], [{ prompt: '複数行コメントを閉じる記号は？', answer: '*/' }]),
    reviewPage('comments', 'まとめ', 'コメントは説明を残すためのものです。処理そのものを隠してしまわないようにします。', [{ prompt: 'コメントは出力を変える？', answer: '変えない' }]),
  ], ['single line comment', 'block comment']),

  topic('variables', 'C の変数', 'variables', '変数は型、名前、値を組み合わせて扱う箱のようなものです。', [
    page('c-variables-declare', '宣言と代入', 'C では先に型を書いてから変数名を書き、= で値を入れます。', '#include <stdio.h>\n\nint main(void) {\n    int level = 3;\n    printf("%d\\n", level);\n    return 0;\n}', '3', ['L3: int 型の変数 level に 3 を入れる。', 'L4: level の中身を出力する。'], [{ wrong: 'level = 3;', reason: '初めて使う変数には型が必要です。', correct: 'int level = 3;' }], [{ prompt: '変数名はどれ？', answer: 'level' }]),
    page('c-variables-reassign', '値の書き換え', '一度宣言した変数は、型を書かずに新しい値を代入できます。', '#include <stdio.h>\n\nint main(void) {\n    int score = 10;\n    score = 20;\n    printf("%d\\n", score);\n    return 0;\n}', '20', ['L3: score に 10 を入れる。', 'L4: score を 20 に書き換える。', 'L5: 最新の値 20 が表示される。'], [{ wrong: 'int score = 20;（2回目も型を書く）', reason: '同じ変数を再宣言するとコンパイルエラーになります。', correct: 'score = 20;' }], [{ prompt: '2回目の代入で型は必要？', answer: '不要' }]),
    reviewPage('variables', 'まとめ', '変数は型・名前・値の3点で考えると整理しやすくなります。', [{ prompt: '変数の値は後から変えられる？', answer: '変えられる' }]),
  ], ['declaration', 'assignment']),

  topic('primitive-data-types', 'C の基本データ型', 'primitive-data-types', 'C には int、float、double、char などの基本的なデータ型があります。', [
    page('c-primitive-data-types-overview', '主な型', 'int は整数、float と double は小数、char は1文字を表します。', '#include <stdio.h>\n\nint main(void) {\n    int age = 20;\n    double height = 175.5;\n    char grade = \'A\';\n    printf("%d %.1f %c\\n", age, height, grade);\n    return 0;\n}', '20 175.5 A', ['L3: int 型の age。', 'L4: double 型の height。', 'L5: char 型の grade（シングルクォート）。', 'L6: それぞれに対応する書式で出力する。'], [{ wrong: "char grade = \"A\";（ダブルクォート）", reason: 'char は1文字をシングルクォートで囲みます。ダブルクォートは文字列用です。', correct: "char grade = 'A';" }], [{ prompt: '1文字を表す型は？', answer: 'char' }, { prompt: '小数を表す型の例は？', answer: 'float または double' }]),
    page('c-primitive-data-types-format', '型と書式指定子', 'printf では型に合わせて %d、%f、%c などの書式指定子を使い分けます。', '#include <stdio.h>\n\nint main(void) {\n    int count = 7;\n    float ratio = 0.5f;\n    printf("count=%d ratio=%.1f\\n", count, ratio);\n    return 0;\n}', 'count=7 ratio=0.5', ['L3: int 型の count。', 'L4: float 型の ratio。', 'L5: %d は整数、%f は小数に対応する。'], [{ wrong: '整数に %f を使う', reason: '型と書式指定子が合わないと、表示が崩れたり未定義の動作になります。', correct: '%d は int、%f は float/double に使う' }], [{ prompt: '整数を表示する書式指定子は？', answer: '%d' }]),
    reviewPage('primitive-data-types', 'まとめ', '値の種類（型）によって、使える書式指定子や演算が変わります。', [{ prompt: '文字を表示する書式指定子は？', answer: '%c' }]),
  ], ['int', 'float', 'double', 'char']),

  topic('printf-output', 'printf による出力', 'output', 'printf は書式文字列と値を組み合わせて、画面に文字を表示する関数です。', [
    page('c-printf-output-basic', '基本の書き方', 'printf("文字列", 値) のように、書式指定子の位置に値が埋め込まれます。', '#include <stdio.h>\n\nint main(void) {\n    int point = 100;\n    printf("point=%d\\n", point);\n    return 0;\n}', 'point=100', ['L3: point に 100 を入れる。', 'L4: %d の位置に point の値が入る。'], [{ wrong: 'printf("point=" + point);', reason: 'C の printf は文字列の + 連結ではなく、書式指定子で値を埋め込みます。', correct: 'printf("point=%d\\n", point);' }], [{ prompt: '改行を表す記号は？', answer: '\\n' }]),
    page('c-printf-output-multiple', '複数の値を出力', 'カンマで区切って複数の値を渡すと、書式文字列内の指定子に順番に対応します。', '#include <stdio.h>\n\nint main(void) {\n    int x = 1;\n    int y = 2;\n    printf("x=%d y=%d\\n", x, y);\n    return 0;\n}', 'x=1 y=2', ['L3-L4: x と y を用意する。', 'L5: 1つ目の %d が x、2つ目の %d が y に対応する。'], [{ wrong: '指定子の数と値の数を合わせない', reason: '対応がずれると意図しない値や不正な表示になります。', correct: '%d の数と渡す値の数を一致させる' }], [{ prompt: '書式指定子と値はどの順番で対応する？', answer: '左から順番' }]),
    reviewPage('printf-output', 'まとめ', 'printf は書式文字列と値の対応を1つずつ確認すると読みやすくなります。', [{ prompt: '小数を表示する書式指定子は？', answer: '%f' }]),
  ], ['printf', 'format specifier']),

  topic('operators', 'C の演算子', 'operators', '演算子は値同士を計算したり、変数に結果を代入したりするための記号です。', [
    page('c-operators-arithmetic', '四則演算', '+ - * / は加減乗除、% は整数の余りを求める演算子です。', '#include <stdio.h>\n\nint main(void) {\n    int total = 7 + 3 * 2;\n    int remainder = 7 % 2;\n    printf("%d %d\\n", total, remainder);\n    return 0;\n}', '13 1', ['L3: 3 * 2 が先に計算され、7 + 6 = 13。', 'L4: 7 を 2 で割った余りは 1。'], [{ wrong: '左から順に計算されると思う（7+3を先に計算）', reason: '* は + より先に計算される優先順位があります。', correct: '掛け算・割り算を先に計算する' }], [{ prompt: '整数の余りを求める演算子は？', answer: '%' }]),
    page('c-operators-compound', '複合代入演算子', '+= や *= のように、計算と代入を1つにまとめた書き方があります。', '#include <stdio.h>\n\nint main(void) {\n    int score = 10;\n    score += 5;\n    printf("%d\\n", score);\n    return 0;\n}', '15', ['L3: score に 10 を入れる。', 'L4: score += 5 は score = score + 5 と同じ。', 'L5: 結果 15 を表示する。'], [{ wrong: 'score =+ 5;（記号の順序を逆にする）', reason: '=+ は意図と異なる構文になります。複合代入は += の順序です。', correct: 'score += 5;' }], [{ prompt: 'score += 5; と同じ意味の書き方は？', answer: 'score = score + 5;' }]),
    reviewPage('operators', 'まとめ', '演算子には優先順位があり、複合代入は計算と代入を一度に行います。', [{ prompt: '掛け算と足し算、どちらが先に計算される？', answer: '掛け算' }]),
  ], ['arithmetic', 'compound assignment']),

  topic('comparisons-booleans', '比較演算子と真偽の扱い', 'comparisons', 'C には専用の真偽型はなく、0 を偽、0以外を真として比較結果や条件を扱います。', [
    page('c-comparisons-booleans-relational', '比較演算子', '== や > などの比較演算子は、結果として 1（真）か 0（偽）を返します。', '#include <stdio.h>\n\nint main(void) {\n    int isEqual = (3 == 3);\n    int isGreater = (5 > 8);\n    printf("%d %d\\n", isEqual, isGreater);\n    return 0;\n}', '1 0', ['L3: 3 == 3 は真なので 1。', 'L4: 5 > 8 は偽なので 0。'], [{ wrong: '= と == を混同する', reason: '= は代入、== は比較です。記号が違うと意味も変わります。', correct: '比較には == を使う' }], [{ prompt: '比較が真のとき返る値は？', answer: '1' }]),
    page('c-comparisons-booleans-logical', '論理演算子', '&&（かつ）、||（または）、!（否定）で複数の条件を組み合わせます。', '#include <stdio.h>\n\nint main(void) {\n    int age = 20;\n    int hasTicket = 1;\n    int canEnter = (age >= 18) && hasTicket;\n    printf("%d\\n", canEnter);\n    return 0;\n}', '1', ['L3-L4: 年齢とチケットの有無を用意する。', 'L5: 両方の条件が真のときだけ canEnter が 1 になる。'], [{ wrong: '0以外の値はすべて2のように特別扱いされると思う', reason: 'C では 0 以外の値はすべて「真」として扱われます。', correct: '0 は偽、0以外は真として判定する' }], [{ prompt: '両方の条件を満たす必要がある演算子は？', answer: '&&' }]),
    reviewPage('comparisons-booleans', 'まとめ', 'C の真偽は数値（0か0以外か）で表されることを意識すると条件式が読みやすくなります。', [{ prompt: '偽を表す数値は？', answer: '0' }]),
  ], ['relational operators', 'logical operators']),

  topic('if-else-if-else', 'if / else if / else', 'conditions', '条件によって実行する処理を分けるための構文です。', [
    page('c-if-else-if-else-basic', 'if の基本', 'if (条件) の中の条件が真（0以外）のときだけ、続くブロックが実行されます。', '#include <stdio.h>\n\nint main(void) {\n    int score = 80;\n    if (score >= 60) {\n        printf("pass\\n");\n    }\n    return 0;\n}', 'pass', ['L3: score に 80 を入れる。', 'L4: score >= 60 が真なので中に入る。', 'L5: pass を表示する。'], [{ wrong: 'if score >= 60 :（カッコなし、コロンあり）', reason: 'C の if は条件を ( ) で囲み、コロンは使いません。', correct: 'if (score >= 60) { ... }' }], [{ prompt: 'if の条件はどの記号で囲む？', answer: '丸かっこ ( )' }]),
    page('c-if-else-if-else-chain', 'else if と else', '複数の条件を順番に確認し、どれにも当てはまらない場合は else が実行されます。', '#include <stdio.h>\n\nint main(void) {\n    int score = 50;\n    if (score >= 80) {\n        printf("A\\n");\n    } else if (score >= 60) {\n        printf("B\\n");\n    } else {\n        printf("C\\n");\n    }\n    return 0;\n}', 'C', ['L4: score >= 80 は偽。', 'L6: score >= 60 も偽。', 'L8-L9: どちらも当てはまらないので else が実行される。'], [{ wrong: '複数の if を独立して書き、全部チェックされると思う', reason: 'else if は直前の条件が偽のときだけ確認されます。', correct: '上から順に条件を確認し、最初に真になったところだけ実行' }], [{ prompt: 'どの条件にも合わないときに実行されるのは？', answer: 'else' }]),
    reviewPage('if-else-if-else', 'まとめ', '上から順に条件を確認し、最初に真になったブロックだけが実行されます。', [{ prompt: 'if の条件が偽のとき、else if は確認される？', answer: '確認される' }]),
  ], ['conditional branch']),

  topic('switch', 'switch 文', 'switch', 'switch は1つの値を複数の case と比較して処理を分ける構文です。', [
    page('c-switch-basic', 'switch の基本', 'case に一致した行から実行され、break で switch を抜けます。', '#include <stdio.h>\n\nint main(void) {\n    int day = 2;\n    switch (day) {\n        case 1:\n            printf("Mon\\n");\n            break;\n        case 2:\n            printf("Tue\\n");\n            break;\n        default:\n            printf("Other\\n");\n    }\n    return 0;\n}', 'Tue', ['L4: day に 2 を入れる。', 'L7-L8: case 2 に一致して Tue を表示する。', 'L9: break で switch を抜ける。'], [{ wrong: 'break を書き忘れる', reason: 'break がないと次の case の処理まで続けて実行されてしまいます（フォールスルー）。', correct: '各 case の最後に break を書く' }], [{ prompt: 'case の処理を終えて抜ける命令は？', answer: 'break' }]),
    page('c-switch-fallthrough', 'break を忘れた場合', 'break がないと、一致した case の後の処理も続けて実行されてしまいます。', '#include <stdio.h>\n\nint main(void) {\n    int n = 1;\n    switch (n) {\n        case 1:\n            printf("one\\n");\n        case 2:\n            printf("two\\n");\n            break;\n    }\n    return 0;\n}', 'one\ntwo', ['L4: n に 1 を入れる。', 'L6: case 1 に一致するが break がない。', 'L7-L8: そのまま case 2 の処理も実行される（フォールスルー）。'], [{ wrong: 'case 1 だけが実行されると思い込む', reason: 'break がない限り、次の case の処理も続けて実行されます。', correct: '各 case に break を入れて意図通りに止める' }], [{ prompt: 'break がない場合に起こることは？', answer: '次のcaseの処理も実行される（フォールスルー）' }]),
    reviewPage('switch', 'まとめ', 'switch は case と break の組み合わせで、意図した分岐だけを実行させます。', [{ prompt: 'どの case にも一致しないとき実行されるのは？', answer: 'default' }]),
  ], ['case', 'break', 'fallthrough']),

  topic('for-loop', 'for 文', 'loops', 'for は「初期化・条件・更新」をまとめて書ける繰り返し構文です。', [
    page('c-for-loop-basic', 'for の基本形', 'for (初期化; 条件; 更新) という3つの部分で、繰り返しの開始・継続条件・1回ごとの変化を表します。', '#include <stdio.h>\n\nint main(void) {\n    for (int i = 0; i < 3; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}', '0\n1\n2', ['L4: i を 0 から始め、i < 3 の間繰り返し、毎回 i++ する。', 'L5: i の値を毎回表示する。'], [{ wrong: 'i <= 3 と書いて1回多く繰り返す', reason: '境界の条件を間違えると、意図した回数より多くまたは少なく繰り返されます。', correct: '0から2までなら i < 3 にする' }], [{ prompt: '繰り返しのたびに i を増やす部分はどこ？', answer: 'i++（更新部分）' }]),
    page('c-for-loop-countdown', '逆順に数える', '更新部分を i-- にすると、大きい値から小さい値へ向かって繰り返せます。', '#include <stdio.h>\n\nint main(void) {\n    for (int i = 3; i > 0; i--) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}', '3\n2\n1', ['L4: i を 3 から始め、i > 0 の間繰り返し、毎回 i-- する。', 'L5: 3, 2, 1 の順に表示される。'], [{ wrong: 'i++ のままにして条件だけ変える', reason: '更新方向と条件の向きが合っていないと、無限ループや0回ループになります。', correct: '減らす場合は i-- に変える' }], [{ prompt: '値を減らしながら繰り返す更新部分は？', answer: 'i--' }]),
    reviewPage('for-loop', 'まとめ', 'for は初期化・条件・更新の3点を分けて読むと、繰り返しの回数を正確に追えます。', [{ prompt: 'for (int i = 0; i < 3; i++) は何回繰り返す？', answer: '3回（0,1,2）' }]),
  ], ['loop', 'iteration']),

  topic('while-loop', 'while 文', 'loops', 'while (条件) は、条件が真である間だけ繰り返す構文です。', [
    page('c-while-loop-basic', 'while の基本', 'for と違い、初期化と更新は自分でループの前後に書く必要があります。', '#include <stdio.h>\n\nint main(void) {\n    int i = 0;\n    while (i < 3) {\n        printf("%d\\n", i);\n        i++;\n    }\n    return 0;\n}', '0\n1\n2', ['L3: i を 0 で初期化する（forの初期化部分にあたる）。', 'L4: i < 3 の間繰り返す。', 'L6: i++ を自分で書いて更新する。'], [{ wrong: 'i++ を書き忘れる', reason: '更新がないと条件が変わらず、無限ループになります。', correct: 'ループの中で必ず i を更新する' }], [{ prompt: 'while ループで更新はどこに書く必要がある？', answer: 'ループの中（自分で書く）' }]),
    reviewPage('while-loop', 'まとめ', 'while は条件だけを見る分シンプルですが、更新を忘れると無限ループになりやすい点に注意します。', [{ prompt: '更新を忘れるとどうなる？', answer: '無限ループになる' }]),
  ], ['pre-test loop']),

  topic('do-while-loop', 'do-while 文', 'loops', 'do-while は、まず1回処理を実行してから条件を確認する繰り返しです。', [
    page('c-do-while-loop-basic', 'do-while の基本', '条件が最初から偽でも、do の中の処理は必ず1回実行されます。', '#include <stdio.h>\n\nint main(void) {\n    int i = 5;\n    do {\n        printf("%d\\n", i);\n        i++;\n    } while (i < 3);\n    return 0;\n}', '5', ['L3: i を 5 で初期化する。', 'L4-L6: do の中身は条件を見る前に1回実行される。', 'L7: i < 3 は偽なので、2回目は実行されない。'], [{ wrong: 'while と同じで0回のこともあると思う', reason: 'do-while は条件を確認する前に必ず1回実行されます。', correct: '少なくとも1回は実行されることを前提にする' }], [{ prompt: 'do-while は条件を確認する前に何回実行される？', answer: '1回' }]),
    reviewPage('do-while-loop', 'まとめ', 'do-while は「最低1回実行したい」処理に向いた繰り返し構文です。', [{ prompt: 'while と do-while の大きな違いは？', answer: '条件を確認するタイミング（後か先か）' }]),
  ], ['post-test loop']),

  topic('arrays', 'C の配列', 'arrays', '配列は同じ型の値を、添字（インデックス）で管理できる連続した箱の集まりです。', [
    page('c-arrays-declare', '宣言と初期化', '型 名前[要素数] = {値, ...}; のように書いて配列を作ります。', '#include <stdio.h>\n\nint main(void) {\n    int scores[3] = {70, 85, 90};\n    printf("%d\\n", scores[1]);\n    return 0;\n}', '85', ['L3: 3つの整数を持つ配列 scores を作る。', 'L4: scores[1] は2番目（添字1）の要素 85。'], [{ wrong: 'scores[1] が1番目の要素だと思う', reason: 'C の配列は 0 から数えるため、scores[0] が1番目です。', correct: 'scores[0] が最初、scores[1] が2番目' }], [{ prompt: '配列の最初の要素の添字は？', answer: '0' }]),
    page('c-arrays-loop', 'forで配列を読む', 'for ループと添字を組み合わせて、配列の要素を順番に処理できます。', '#include <stdio.h>\n\nint main(void) {\n    int scores[3] = {70, 85, 90};\n    int total = 0;\n    for (int i = 0; i < 3; i++) {\n        total += scores[i];\n    }\n    printf("%d\\n", total);\n    return 0;\n}', '245', ['L5-L7: i を 0 から 2 まで動かし、scores[i] を順番に合計に加える。', 'L8: 70+85+90=245 を表示する。'], [{ wrong: 'i < 3 を i <= 3 にする', reason: '配列の範囲外（scores[3]）にアクセスしてしまい、未定義の動作になります。', correct: '要素数3なら i < 3 までにする' }], [{ prompt: '配列の要素数を超えてアクセスするとどうなる？', answer: '未定義の動作（範囲外アクセス）になる' }]),
    reviewPage('arrays', 'まとめ', '配列は添字が0から始まること、範囲を超えないことを意識して使います。', [{ prompt: '要素数3の配列の有効な添字は？', answer: '0, 1, 2' }]),
  ], ['index', 'subscript']),

  topic('strings', 'C の文字列', 'strings', 'C の文字列は char の配列で、末尾に終端文字 \\0 が入ります。', [
    page('c-strings-basic', '文字列の基本', '文字列リテラルを char 配列に入れると、自動的に末尾に \\0 が付きます。', '#include <stdio.h>\n\nint main(void) {\n    char name[10] = "Hi";\n    printf("%s\\n", name);\n    return 0;\n}', 'Hi', ['L3: char 配列 name に "Hi" を入れる（自動で \\0 が付く）。', 'L4: %s で文字列として表示する。'], [{ wrong: "char name[10] = 'Hi';（シングルクォート）", reason: '複数文字の文字列はダブルクォートで書きます。シングルクォートは1文字用です。', correct: 'char name[10] = "Hi";' }], [{ prompt: '文字列の終わりを示す特別な文字は？', answer: '\\0（終端文字）' }]),
    reviewPage('strings', 'まとめ', '文字列は char の配列であり、\\0 までが実際の文字列として扱われます。', [{ prompt: '文字列を表示する書式指定子は？', answer: '%s' }]),
  ], ['char array', 'null terminator']),

  topic('functions', 'C の関数', 'functions', '関数はまとまった処理に名前をつけて、必要なときに呼び出せるようにする仕組みです。', [
    page('c-functions-basic', '関数の定義と呼び出し', '戻り値の型、関数名、（）を書いて関数を定義し、関数名（）で呼び出します。', '#include <stdio.h>\n\nvoid greet(void) {\n    printf("hello\\n");\n}\n\nint main(void) {\n    greet();\n    return 0;\n}', 'hello', ['L3-L5: 戻り値のない greet 関数を定義する。', 'L8: main から greet() を呼び出す。'], [{ wrong: 'greet; （カッコを付け忘れる）', reason: 'カッコがないと関数を呼び出したことになりません。', correct: 'greet();' }], [{ prompt: '値を返さない関数の戻り値の型は？', answer: 'void' }]),
    reviewPage('functions', 'まとめ', '関数は定義と呼び出しを分けて考えると、処理の流れを追いやすくなります。', [{ prompt: '関数を呼び出すために必要な記号は？', answer: '（）' }]),
  ], ['function definition', 'function call']),

  topic('parameters-return-values', '引数と戻り値', 'functions', '関数は引数で値を受け取り、return で呼び出し元に値を返すことができます。', [
    page('c-parameters-return-values-basic', '引数と戻り値の基本', '関数名（型 引数名）で値を受け取り、return 値; で結果を返します。', '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main(void) {\n    int result = add(2, 3);\n    printf("%d\\n", result);\n    return 0;\n}', '5', ['L3-L5: a と b を受け取り、その合計を return する。', 'L8: add(2, 3) の戻り値 5 が result に入る。'], [{ wrong: 'return を書かずに値を返そうとする', reason: 'return がないと呼び出し元に値が返りません。', correct: 'return 値; で戻り値を指定する' }], [{ prompt: '関数の処理結果を呼び出し元に返す命令は？', answer: 'return' }]),
    reviewPage('parameters-return-values', 'まとめ', '引数は関数への入力、戻り値は関数からの出力として整理すると分かりやすくなります。', [{ prompt: '引数を2つ受け取る関数の括弧の中はどう書く？', answer: '型1 引数名1, 型2 引数名2' }]),
  ], ['argument', 'return statement']),

  topic('pointers-basics', 'ポインタの基礎', 'pointers', 'ポインタは変数のメモリ上の場所（アドレス）を保持する変数です。', [
    page('c-pointers-basics-address', 'アドレスと&演算子', '& を変数の前に付けると、その変数のアドレスを取得できます。', '#include <stdio.h>\n\nint main(void) {\n    int value = 10;\n    int *ptr = &value;\n    printf("%d\\n", *ptr);\n    return 0;\n}', '10', ['L3: value に 10 を入れる。', 'L4: ptr に value のアドレスを入れる（int * 型のポインタ）。', 'L5: *ptr で ptr が指す先の値 10 を取り出す。'], [{ wrong: 'int *ptr = value;（&を付け忘れる）', reason: '&がないと値そのものを代入しようとし、型が合わずエラーになります。', correct: 'int *ptr = &value;' }], [{ prompt: '変数のアドレスを取得する記号は？', answer: '&' }, { prompt: 'ポインタが指す先の値を取り出す記号は？', answer: '*' }]),
    reviewPage('pointers-basics', 'まとめ', '& はアドレスを取得し、* はポインタが指す先の値を取り出すという役割の違いを意識します。', [{ prompt: '*ptr は何を表す？', answer: 'ptr が指している場所の値' }]),
  ], ['address-of', 'dereference']),

  topic('pointers-and-arrays', 'ポインタと配列', 'pointers', '配列名は、その配列の最初の要素のアドレスとして扱うことができます。', [
    page('c-pointers-and-arrays-basic', '配列名をポインタとして使う', '配列名をポインタに代入すると、添字を使ったアクセスと同じように扱えます。', '#include <stdio.h>\n\nint main(void) {\n    int numbers[3] = {1, 2, 3};\n    int *ptr = numbers;\n    printf("%d\\n", *(ptr + 1));\n    return 0;\n}', '2', ['L3: 配列 numbers を作る。', 'L4: ptr に numbers（先頭のアドレス）を入れる。', 'L5: ptr + 1 は2番目の要素のアドレス、*(ptr + 1) でその値 2 を取り出す。'], [{ wrong: 'ptr + 1 が「アドレスに1を足すだけ」だと考える', reason: 'ポインタの+1は型のサイズ分進むため、配列の次の要素を指すことになります。', correct: 'ptr + 1 は配列の次の要素を指す' }], [{ prompt: 'numbers[1] と同じ意味になるポインタの書き方は？', answer: '*(numbers + 1)' }]),
    reviewPage('pointers-and-arrays', 'まとめ', '配列の添字アクセスとポインタ演算は、内部的には同じ考え方でつながっています。', [{ prompt: '配列名はポインタとして何を表す？', answer: '先頭要素のアドレス' }]),
  ], ['array-pointer relationship']),

  topic('structs', '構造体', 'structs', '構造体は、複数の異なる型の値を1つにまとめて扱うための仕組みです。', [
    page('c-structs-basic', '構造体の定義とアクセス', 'struct で型をまとめて定義し、ドット（.）でメンバーにアクセスします。', '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main(void) {\n    struct Point p = {1, 2};\n    printf("%d %d\\n", p.x, p.y);\n    return 0;\n}', '1 2', ['L3-L6: x と y を持つ Point 構造体を定義する。', 'L9: p.x と p.y に 1 と 2 が入る。', 'L10: それぞれのメンバーを表示する。'], [{ wrong: 'p->x のようにアロー演算子を使う', reason: '構造体の変数そのものにアクセスする場合はドット（.）を使います。アローはポインタ経由のときに使います。', correct: 'p.x のようにドットでアクセスする' }], [{ prompt: '構造体のメンバーにアクセスする記号は？', answer: '.（ドット）' }]),
    reviewPage('structs', 'まとめ', '構造体は関連する値をひとまとめにして、名前付きのメンバーとして扱えるようにします。', [{ prompt: '構造体を定義するキーワードは？', answer: 'struct' }]),
  ], ['struct member access']),

  topic('scope-and-static', '変数のスコープと static', 'scope', '変数には有効な範囲（スコープ）があり、static を付けると関数を抜けても値が保持されます。', [
    page('c-scope-and-static-local', 'ローカル変数のスコープ', '関数内で宣言した変数は、その関数の中だけで使えます。', '#include <stdio.h>\n\nvoid show(void) {\n    int count = 1;\n    printf("%d\\n", count);\n}\n\nint main(void) {\n    show();\n    show();\n    return 0;\n}', '1\n1', ['L3-L5: show を呼ぶたびに count が新しく 1 で作られる。', 'L8-L9: show を2回呼ぶが、count は毎回リセットされる。'], [{ wrong: '2回目の呼び出しで count が増えると思う', reason: '通常のローカル変数は関数を抜けると消え、次回呼び出し時に再び初期化されます。', correct: '値を保持したい場合は static を使う' }], [{ prompt: '関数を抜けるとローカル変数はどうなる？', answer: '消える（次回また初期化される）' }]),
    page('c-scope-and-static-keyword', 'static で値を保持する', 'static を付けた変数は、関数を抜けても値が保持され、次回の呼び出しで続きから使われます。', '#include <stdio.h>\n\nvoid show(void) {\n    static int count = 0;\n    count++;\n    printf("%d\\n", count);\n}\n\nint main(void) {\n    show();\n    show();\n    return 0;\n}', '1\n2', ['L3: static int count は最初の呼び出しでだけ 0 に初期化される。', 'L8-L9: show を2回呼ぶと、count が 1, 2 と増えていく。'], [{ wrong: 'static を付けても通常の変数と同じだと思う', reason: 'static を付けると、関数を抜けても値が保持される点が大きく異なります。', correct: '繰り返し呼ばれても値を保持したいときに static を使う' }], [{ prompt: 'static を付けた変数は関数を抜けると値が消える？', answer: '消えない（保持される）' }]),
    reviewPage('scope-and-static', 'まとめ', '通常のローカル変数は呼び出しごとにリセットされますが、static は値を保持し続けます。', [{ prompt: 'static int count = 0; の初期化が実行されるのは何回目の呼び出し？', answer: '最初の1回だけ' }]),
  ], ['local scope', 'static keyword']),
];
