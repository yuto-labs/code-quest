// DEBUG world: diagnose and repair realistic code.
// Every question uses exactly 3 steps:
//   Step 1 — identify the faulty line or cause
//   Step 2 — choose the best correction
//   Step 3 — choose the reason or resulting impact
// questionType: 'debug-step'
// Each step: { stepNum, stepTitle, prompt, code?, question, options, answer, hint?, explanation? }

export const DEBUG_CHALLENGES = {
  JP: {
    python: [
      {
        id: 'dbg_jp_py_1',
        worldId: 'debug',
        conceptId: 'variables',
        questionType: 'debug-step',
        title: '変数名の大文字・小文字バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '東京の名前を表示しようとしていますが、エラーが発生します。問題のある箇所は？',
            code: `city = "Tokyo"
print(City)`,
            question: 'エラーの原因を選べ',
            options: [
              'print() の使い方が間違っている',
              'city と City は異なる変数名（大文字・小文字の違い）',
              '"Tokyo" は文字列として定義できない',
              'city 変数は存在しない',
            ],
            answer: 'city と City は異なる変数名（大文字・小文字の違い）',
            hint: 'Python は大文字・小文字を区別します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '正しく修正するには？',
            question: '最も適切な修正を選べ',
            options: [
              'print(CITY) に変更する',
              'print(City) → print(city) に変更する',
              'city = "Tokyo" → City = "Tokyo" に変更する（どちらでも良い）',
              '"Tokyo" を "tokyo" に変更する',
            ],
            answer: 'print(City) → print(city) に変更する',
            hint: '定義された変数名に合わせる',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'なぜ NameError が発生するのか説明を選べ',
            question: '正しい説明はどれ？',
            options: [
              'Python は予約語として City を使用しているため',
              'Python は大文字・小文字を区別するため、city と City は別の変数として扱われる',
              'print() は大文字の変数名を扱えない',
              'グローバル変数には大文字が使えない',
            ],
            answer: 'Python は大文字・小文字を区別するため、city と City は別の変数として扱われる',
            explanation: 'Python は case-sensitive です。city, City, CITY はすべて異なる変数名として扱われます。',
          },
        ],
      },
      {
        id: 'dbg_jp_py_2',
        worldId: 'debug',
        conceptId: 'conditions',
        questionType: 'debug-step',
        title: '型エラー: 文字列と数値の混在',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '富士山の高さと説明を結合しようとしています。エラーは？',
            code: `height = 3776
message = "富士山の高さは " + height + " m です"
print(message)`,
            question: 'このコードで発生するエラーは？',
            options: [
              'SyntaxError: 文の書き方が間違っている',
              'TypeError: str と int は + で結合できない',
              'NameError: height が未定義',
              'エラーは発生しない',
            ],
            answer: 'TypeError: str と int は + で結合できない',
            hint: '文字列と整数を + で結合しようとしています',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'このエラーを修正する方法を選べ',
            question: '正しい修正はどれ？',
            options: [
              'height を削除する',
              'str(height) に変換してから結合する',
              'height = "3776" に変更する（数値として使えなくなる）',
              '"富士山の高さは" と height を別々に print() する',
            ],
            answer: 'str(height) に変換してから結合する',
            hint: 'str() で整数を文字列に変換できます',
            explanation: '"富士山の高さは " + str(height) + " m です" または f"富士山の高さは {height} m です" が正解。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'Python がこのエラーを出す設計理由を理解しましょう',
            question: 'Python が str + int を自動変換しない理由は？',
            options: [
              'Python は数値演算が苦手だから',
              'Python は暗黙的な型変換を避け、意図しないバグを防ぐ設計になっているから',
              '+ 演算子は文字列専用だから',
              'Python のバージョンが古いから',
            ],
            answer: 'Python は暗黙的な型変換を避け、意図しないバグを防ぐ設計になっているから',
            explanation: 'JavaScript などは "3" + 3 = "33" と自動変換しますが、Python は明示的な型変換を要求します。これにより予期せぬ挙動を防ぎます。',
          },
        ],
      },
      {
        id: 'dbg_jp_py_3',
        worldId: 'debug',
        conceptId: 'lists',
        questionType: 'debug-step',
        title: 'リストの範囲外アクセス',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '新幹線の停車駅リストから5番目の駅にアクセスしようとしています',
            code: `stations = ["Tokyo", "Nagoya", "Kyoto", "Osaka"]
print(stations[4])`,
            question: '何が起きますか？',
            options: [
              '"Osaka" が表示される',
              'IndexError: list index out of range',
              'None が表示される',
              '"Tokyo" が表示される',
            ],
            answer: 'IndexError: list index out of range',
            hint: 'リストのインデックスは 0 から始まります。4 要素のリストの最大インデックスは？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '最後の要素（大阪）にアクセスする最も安全な方法は？',
            question: '正しい方法を選べ',
            options: [
              'stations[4]（変更なし）',
              'stations[3]',
              'stations[-1]',
              'stations[len(stations)]',
            ],
            answer: 'stations[-1]',
            hint: '-1 は最後の要素を指します',
            explanation: 'stations[3] でも動きますが、stations[-1] はリストの長さに関わらず最後の要素を返す安全な書き方です。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'stations[-1] が保守性に優れる理由を選べ',
            question: '-1 インデックスを使う利点はどれ？',
            options: [
              '実行速度が速いから',
              'リストに要素を追加・削除しても常に最後の要素を指すため、コードの修正が不要',
              'Python の推奨構文だから',
              '負のインデックスはエラーにならないから',
            ],
            answer: 'リストに要素を追加・削除しても常に最後の要素を指すため、コードの修正が不要',
            explanation: 'stations[-1] は len(stations) - 1 と同等です。stations に要素が増減しても末尾要素を確実に取得できます。stations[3] は要素数が変わった瞬間に壊れます。',
          },
        ],
      },
      {
        id: 'dbg_jp_py_4',
        worldId: 'debug',
        conceptId: 'functions',
        questionType: 'debug-step',
        title: '関数の返り値バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '東京の人口を万人単位で返す関数にバグがあります',
            code: `def get_population_man(city_pop):
    result = city_pop / 10000
    print(result)

pop = get_population_man(13960000)
print(f"東京の人口: {pop}万人")`,
            question: '何が表示されますか？',
            options: [
              '東京の人口: 1396.0万人',
              '1396.0\n東京の人口: None万人',
              '東京の人口: 0万人',
              'Error',
            ],
            answer: '1396.0\n東京の人口: None万人',
            hint: '関数が return せずに print() しています。戻り値は？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '関数を正しく修正するには？',
            question: '正しい修正を選べ',
            options: [
              'print(result) → return result に変更する',
              'return の前に print を追加する（両方残す）',
              'pop の代わりに result を使う',
              '関数を使わずに計算する',
            ],
            answer: 'print(result) → return result に変更する',
            explanation: '関数で計算結果を外部で使うには return が必要です。return なしの関数は None を返します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'return と print の役割の違いを確認しましょう',
            question: 'return が必要になるのはどんな場面？',
            options: [
              '計算結果を変数に代入したり、他の関数に渡したり、計算に使いたい場合',
              'ただ画面に表示したいだけの場合',
              '関数を再帰的に呼び出す場合のみ',
              'エラーを防ぎたい場合',
            ],
            answer: '計算結果を変数に代入したり、他の関数に渡したり、計算に使いたい場合',
            explanation: 'print() は画面表示のみで値を返しません。pop = func() と代入するには func() が return で値を返す必要があります。表示だけが目的なら関数内 print() でも良いですが、再利用性が低下します。',
          },
        ],
      },
    ],
  },
  US: {
    python: [
      {
        id: 'dbg_us_py_1',
        worldId: 'debug',
        conceptId: 'conditions',
        questionType: 'debug-step',
        title: 'コロン抜けの SyntaxError',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '投票年齢チェックにバグがあります',
            code: `age = 20
if age >= 18
    print("You can vote!")`,
            question: 'このコードのエラーは？',
            options: [
              'age >= 18 の条件が間違っている',
              'if 文の末尾にコロン : が抜けている',
              'print() の文字列に問題がある',
              'age = 20 は整数なので if では使えない',
            ],
            answer: 'if 文の末尾にコロン : が抜けている',
            hint: 'Python の if 文は : で終わる必要があります',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '正しい構文に修正してください',
            question: '正しいコードを選べ',
            options: [
              'if age >= 18;\n    print(...)',
              'if age >= 18:\n    print(...)',
              'if (age >= 18)\n    print(...)',
              'if age >= 18 then\n    print(...)',
            ],
            answer: 'if age >= 18:\n    print(...)',
            explanation: 'Python の if, for, while, def, class などはすべてコロン : で終わります。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'コロンが必要な Python の構文を整理しましょう',
            question: 'コロン : が末尾に必要なキーワードはどれ？',
            options: [
              'if と for のみ',
              'print と return',
              'if, for, while, def, class, with, try, except, else, elif, finally',
              'import と from',
            ],
            answer: 'if, for, while, def, class, with, try, except, else, elif, finally',
            explanation: 'Python ではブロックを開始するすべての構文がコロン : で終わります。インデントと組み合わせて { } の代わりにコードブロックを表現します。',
          },
        ],
      },
      {
        id: 'dbg_us_py_2',
        worldId: 'debug',
        conceptId: 'loops',
        questionType: 'debug-step',
        title: '無限ループのバグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '1 から 5 まで表示するコードが無限ループになっています',
            code: `i = 1
while i <= 5:
    print(i)`,
            question: 'このコードが無限ループになる理由は？',
            options: [
              'while の条件が間違っている',
              'i を更新（インクリメント）するコードが抜けている',
              'print() が i の値を変えてしまう',
              '1 から 5 は range() を使わないと表示できない',
            ],
            answer: 'i を更新（インクリメント）するコードが抜けている',
            hint: 'i の値がずっと 1 のままです',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'ループを正しく終わらせるには？',
            question: '追加すべきコードは？',
            options: [
              'print(i) の前に i += 1 を追加',
              'print(i) の後に i += 1 を追加',
              'while i <= 5 を while True に変更',
              'break を追加する',
            ],
            answer: 'print(i) の後に i += 1 を追加',
            explanation: 'while ループ内で i を増やさないと条件が常に True になり無限ループになります。print 後に i += 1 を追加します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: '無限ループが起きるとどうなるか理解しましょう',
            question: 'while ループが必ず終了するために必要なことは？',
            options: [
              '条件を常に True にする',
              'ループ本体の中で、いつかは条件を False にする変更を行う',
              '毎回 break 文を書く',
              'range() を必ず使う',
            ],
            answer: 'ループ本体の中で、いつかは条件を False にする変更を行う',
            explanation: 'while ループは条件が False になるまで繰り返します。i += 1 のような更新か break / return で必ず終了できる設計が必要です。無限ループはプログラムをフリーズさせます。',
          },
        ],
      },
      {
        id: 'dbg_us_py_3',
        worldId: 'debug',
        conceptId: 'dicts',
        questionType: 'debug-step',
        title: '辞書キーの KeyError',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'アメリカの州情報辞書にアクセスするコードがエラーになります',
            code: `state_info = {
    "California": "Sacramento",
    "Texas": "Austin",
    "New York": "Albany"
}
print(state_info["new york"])`,
            question: 'エラーの原因は？',
            options: [
              'state_info に New York が存在しない',
              '"new york"（小文字）と "New York"（大文字）は異なるキー',
              '辞書は文字列キーをサポートしない',
              'print() は辞書の値を表示できない',
            ],
            answer: '"new york"（小文字）と "New York"（大文字）は異なるキー',
            hint: 'Python の辞書キーは大文字・小文字を区別します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'KeyError を避けるより安全なアクセス方法は？',
            question: '最も安全な方法を選べ',
            options: [
              'state_info["New York"] に修正する',
              'state_info.get("new york", "Not found") を使う',
              'try-except で KeyError をキャッチする',
              '辞書のキーをすべて小文字に統一して state_info["new york"] にする',
            ],
            answer: 'state_info.get("new york", "Not found") を使う',
            hint: 'get() はキーが存在しない場合にデフォルト値を返します',
            explanation: '正しいキー "New York" の使用も正解ですが、get() を使うとキー不在でも安全にアクセスできます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'dict[key] と dict.get(key) の使い分けを理解しましょう',
            question: 'get() が dict[key] より優れているのはどんな状況？',
            options: [
              'キーが必ず存在することが保証されている場合',
              'キーが存在するか不確かで、デフォルト値を返したい場合',
              '辞書を書き換えたい場合',
              '辞書のサイズを知りたい場合',
            ],
            answer: 'キーが存在するか不確かで、デフォルト値を返したい場合',
            explanation: '確実に存在するキーなら dict[key]、不確かなら dict.get(key, default)。外部データや設定ファイルを扱う場面では get() が安全です。KeyError で処理が止まるリスクを防げます。',
          },
        ],
      },
    ],
  },
  FR: {
    python: [
      {
        id: 'dbg_fr_py_1',
        worldId: 'debug',
        conceptId: 'loops',
        questionType: 'debug-step',
        title: 'range の引数バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'フランスの都市を 1 から 5 番まで表示しようとしています',
            code: `cities = ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
for i in range(1, 5):
    print(f"{i}. {cities[i]}")`,
            question: 'このコードの問題は？',
            options: [
              '正常に動作する',
              'range(1, 5) は 1〜4 なので "Paris"（インデックス0）が表示されない',
              'cities[i] でインデックスエラーが発生する',
              'f-string の書き方が間違っている',
            ],
            answer: 'range(1, 5) は 1〜4 なので "Paris"（インデックス0）が表示されない',
            hint: 'range(1, 5) は何の値を生成しますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '1. Paris から 5. Nice まで番号付きで表示するには？',
            question: '正しいコードを選べ',
            options: [
              'for i in range(0, 5): で i+1 を番号にする',
              'for i in range(1, 6): を使う',
              'enumerate() を使って for i, city in enumerate(cities, 1)',
              'どれでも動く',
            ],
            answer: 'enumerate() を使って for i, city in enumerate(cities, 1)',
            explanation: 'enumerate(cities, 1) でインデックスを 1 始まりで取得できます。for i, city in enumerate(cities, 1): print(f"{i}. {city}") が最もシンプル。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'enumerate() と range(len()) の違いを理解しましょう',
            question: 'enumerate() が for i in range(len(lst)) より優れている理由は？',
            options: [
              '実行速度が速いから',
              'インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから',
              'エラーが発生しないから',
              'Python 3 でのみ使えるから',
            ],
            answer: 'インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから',
            explanation: 'for i in range(len(lst)): ... lst[i] は動きますが、for i, val in enumerate(lst, 1): の方が簡潔でバグが入りにくいです。start 引数で開始番号も自由に指定できます。',
          },
        ],
      },
    ],
  },
  DE: {
    python: [
      {
        id: 'dbg_de_py_1',
        worldId: 'debug',
        conceptId: 'files',
        questionType: 'debug-step',
        title: '比較演算子の混同バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ベルリンの人口が最大かチェックするコードにバグがあります',
            code: `berlin_pop = 3769495
hamburg_pop = 1847253
if berlin_pop = hamburg_pop:
    print("Same population")
else:
    print("Different populations")`,
            question: 'このコードの問題は？',
            options: [
              '= は代入、比較には == を使う必要がある',
              'if 文の中で変数は使えない',
              'print() の引数が間違っている',
              'else ブロックが不要',
            ],
            answer: '= は代入、比較には == を使う必要がある',
            hint: 'Python で等しいかどうかを比較する演算子は？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '= と == の違いを正しく説明しているのは？',
            question: '正しい説明を選べ',
            options: [
              '= も == もどちらも比較に使える',
              '= は代入（左辺に値を入れる）、== は等値比較（両辺が等しいか確認）',
              '== は整数のみで使え、文字列では = を使う',
              'if 文の中では = が比較になる',
            ],
            answer: '= は代入（左辺に値を入れる）、== は等値比較（両辺が等しいか確認）',
            explanation: 'if berlin_pop == hamburg_pop: が正しい。= は変数に値を代入する演算子、== は 2 つの値が等しいか比較する演算子です。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'if 文で = が SyntaxError になる理由を選べ',
            question: 'Python が if 文内の = を許可しない理由は？',
            options: [
              'if 文は代入をサポートしていない（Python の構文規則）',
              'berlin_pop と hamburg_pop が整数だから',
              '比較は int 型に使えないから',
              '変数が未定義だから',
            ],
            answer: 'if 文は代入をサポートしていない（Python の構文規則）',
            explanation: 'Python では if/while の条件式に通常の代入 = は書けません（SyntaxError）。これは意図しない代入バグを防ぐ設計です。Python 3.8 以降の := (walrus operator) は別途使用可能です。',
          },
        ],
      },
    ],
  },
  GB: {
    python: [
      {
        id: 'dbg_gb_py_1',
        worldId: 'debug',
        conceptId: 'regex',
        questionType: 'debug-step',
        title: '文字列インデックスの範囲外バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ロンドンの郵便番号からエリアコードを取得しようとしています',
            code: `postcode = "SW1A 1AA"
area = postcode[0:10]
print(f"Area: {area}")`,
            question: 'このコードの動作は？',
            options: [
              'IndexError が発生する',
              '"SW1A 1AA" がそのまま表示される（文字列スライスは範囲外でも動く）',
              '"SW1A " が表示される',
              '"SW1A 1" が表示される',
            ],
            answer: '"SW1A 1AA" がそのまま表示される（文字列スライスは範囲外でも動く）',
            hint: 'Python の文字列スライスは範囲外でもエラーにならず、存在する部分を返します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 最適な修正',
            prompt: 'エリアコード（スペース前の部分）を取得する最良の方法は？',
            question: '最も堅牢な方法を選べ',
            options: [
              'postcode[0:4]（固定長）',
              'postcode.split(" ")[0]',
              'postcode[:postcode.index(" ")]',
              'どれも正しい',
            ],
            answer: 'postcode.split(" ")[0]',
            explanation: 'split(" ")[0] はスペースで分割して最初の部分を取得。郵便番号の長さが変わっても対応できます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'split() が固定スライスより堅牢な理由を選べ',
            question: 'postcode.split(" ")[0] が postcode[0:4] より優れているのは？',
            options: [
              '実行が速いから',
              '郵便番号の長さが変わっても正しく動き、意図が明確で可読性が高いから',
              'スライスは Python では非推奨だから',
              '分割後の要素数を確認できるから',
            ],
            answer: '郵便番号の長さが変わっても正しく動き、意図が明確で可読性が高いから',
            explanation: 'postcode[0:4] は "SW1A" のような固定長にしか対応できません。"SW1" など長さが変わると壊れます。split(" ")[0] はスペースを区切りとする意図が明確で、長さに依存しません。',
          },
        ],
      },
    ],
  },
  ZA: {
    python: [
      {
        id: 'dbg_za_py_1',
        worldId: 'debug',
        conceptId: 'typehints',
        questionType: 'debug-step',
        title: 'ミュータブル/イミュータブルの落とし穴',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '南アフリカの主要言語リストをコピーして編集しようとしています',
            code: `original = ["Zulu", "Xhosa", "Afrikaans"]
copy = original
copy.append("English")
print(original)`,
            question: '出力は何ですか？',
            options: [
              "['Zulu', 'Xhosa', 'Afrikaans']",
              "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
              "['English']",
              'Error',
            ],
            answer: "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
            hint: 'copy = original はリストをコピーしますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'original を変更せずに copy に English を追加するには？',
            question: '正しい方法を選べ',
            options: [
              'copy = original.copy()',
              'copy = list(original)',
              'copy = original[:]',
              '上記すべて正しい',
            ],
            answer: '上記すべて正しい',
            explanation: 'copy = original は同じリストへの参照を作るだけです。copy() / list() / [:] はどれも浅いコピーを作成します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'copy = original の代入で何が起きるか理解しましょう',
            question: 'copy = original が「参照のコピー」になる理由は？',
            options: [
              'Python はリストを自動的に複製するから',
              'Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから',
              'append() が original にも適用される仕様があるから',
              'リスト型は immutable だから',
            ],
            answer: 'Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから',
            explanation: 'Python の変数はメモリ上のオブジェクトへのポインタです。copy = original は同じリストを指す 2 つの名前を作るだけです。copy() / list() / [:] は新しいリストオブジェクトを作成します。',
          },
        ],
      },
    ],
  },
};

export const DEBUG_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: '🟨', available: false },
];
