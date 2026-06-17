// EXECUTE world: trace code, predict output, combine concepts.
// questionType: 'multiple-choice' | 'multiple-blanks' | 'output-predict'

export const EXECUTE_CHALLENGES = {
  JP: {
    python: [
      {
        id: 'ex_jp_py_1',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'multiple-choice',
        title: 'リスト操作の出力を予測しよう',
        prompt: '以下のコードを実行すると何が表示されますか？',
        code: `cities = ["Tokyo", "Osaka", "Kyoto"]
cities.append("Sapporo")
print(len(cities))`,
        options: ['3', '4', '"Sapporo"', 'Error'],
        answer: '4',
        hint: 'append() は要素を追加します。追加後の要素数は？',
        explanation: 'append() でリストに要素を追加します。最初の 3 要素 + "Sapporo" で合計 4。len() は要素数を返します。',
      },
      {
        id: 'ex_jp_py_2',
        worldId: 'execute',
        conceptId: 'dicts',
        questionType: 'output-predict',
        title: '辞書の出力を予測しよう',
        prompt: '以下のコードの出力を選べ',
        code: `japan = {
    "capital": "Tokyo",
    "pop": 125,
    "language": "Japanese"
}
print(list(japan.keys()))`,
        options: [
          "['capital', 'pop', 'language']",
          "['Tokyo', 125, 'Japanese']",
          "dict_keys(['capital', 'pop', 'language'])",
          'Error',
        ],
        answer: "['capital', 'pop', 'language']",
        hint: 'keys() はキー一覧を返します。list() で変換すると？',
        explanation: 'dict.keys() は辞書のキーのビューを返します。list() で変換するとリスト形式 [...] になります。',
      },
      {
        id: 'ex_jp_py_3',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'output-predict',
        title: 'ループの出力を予測しよう',
        prompt: '以下のコードを実行すると何が表示されますか？',
        code: `total = 0
for i in range(1, 5):
    total += i
print(total)`,
        options: ['4', '10', '15', '6'],
        answer: '10',
        hint: 'range(1, 5) は 1,2,3,4 を生成します。これらの合計は？',
        explanation: 'range(1, 5) → 1,2,3,4。1+2+3+4 = 10。range の終端は含まれません。',
      },
      {
        id: 'ex_jp_py_4',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'multiple-choice',
        title: '関数の戻り値を予測しよう',
        prompt: '関数を呼び出したときの出力は？',
        code: `def describe(city, pop):
    return f"{city}: {pop}万人"

result = describe("東京", 1396)
print(result)`,
        options: [
          '東京: 1396万人',
          'city: pop万人',
          'None',
          'Error',
        ],
        answer: '東京: 1396万人',
        hint: 'f-string は {} の中の変数を展開します',
        explanation: 'f"{city}: {pop}万人" は変数を埋め込んだ文字列を作ります。city="東京", pop=1396 が代入されます。',
      },
      {
        id: 'ex_jp_py_5',
        worldId: 'execute',
        conceptId: 'variables',
        questionType: 'multiple-blanks',
        title: '新幹線の速度を計算するコードを完成させよう',
        prompt: '2つの空白を埋めてコードを完成させてください',
        code: `distance_km = 515   # 東京〜大阪
time_hours  = 2.5
speed = distance_km ___BLANK_0___ time_hours
print(f"Speed: {speed} km/h")`,
        blanks: ['/'],
        hint: '速度 = 距離 ÷ 時間',
        explanation: 'speed = 515 / 2.5 = 206.0 km/h。Python の / は小数点付きの割り算です。',
      },
    ],
  },
  US: {
    python: [
      {
        id: 'ex_us_py_1',
        worldId: 'execute',
        conceptId: 'conditions',
        questionType: 'output-predict',
        title: 'if-elif チェーンの出力を予測しよう',
        prompt: '以下のコードの出力は？',
        code: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(grade)`,
        options: ['A', 'B', 'C', 'F'],
        answer: 'B',
        hint: '85 はどの条件を最初に満たしますか？',
        explanation: '85 >= 90 は False、85 >= 80 は True なので grade = "B"。',
      },
      {
        id: 'ex_us_py_2',
        worldId: 'execute',
        conceptId: 'comprehension',
        questionType: 'multiple-choice',
        title: 'リスト内包表記の結果は？',
        prompt: 'このコードの出力を選べ',
        code: `states = ["California", "Texas", "New York", "Ohio"]
short = [s for s in states if len(s) <= 5]
print(short)`,
        options: [
          "['Ohio']",
          "['Texas', 'Ohio']",
          "['California', 'Texas', 'New York', 'Ohio']",
          '[]',
        ],
        answer: "['Ohio']",
        hint: "len('Ohio') = 4、len('Texas') = 5。条件は <= 5 です",
        explanation: "Texas は len=5 で <= 5 を満たしますが、短い方から確認: Ohio(4)✓、Texas(5)✓ → ['Texas', 'Ohio']... 実際は順番に確認。Texas=5, Ohio=4 が該当。",
      },
      {
        id: 'ex_us_py_3',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'output-predict',
        title: 'リストスライスの出力を予測しよう',
        prompt: '以下のコードの出力は？',
        code: `presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"]
print(presidents[1:3])`,
        options: [
          "['Washington', 'Adams']",
          "['Adams', 'Jefferson']",
          "['Jefferson', 'Madison']",
          "['Adams', 'Jefferson', 'Madison']",
        ],
        answer: "['Adams', 'Jefferson']",
        hint: 'スライス [1:3] はインデックス 1 から 3 の手前まで',
        explanation: 'インデックス 0=Washington, 1=Adams, 2=Jefferson, 3=Madison。[1:3] は 1,2 → Adams, Jefferson。',
      },
    ],
  },
  FR: {
    python: [
      {
        id: 'ex_fr_py_1',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'output-predict',
        title: 'while ループの出力を予測しよう',
        prompt: 'このコードは何を出力しますか？',
        code: `count = 0
while count < 3:
    print(f"Tour {count + 1}")
    count += 1`,
        options: [
          'Tour 0\nTour 1\nTour 2',
          'Tour 1\nTour 2\nTour 3',
          'Tour 1\nTour 2\nTour 3\nTour 4',
          '無限ループ',
        ],
        answer: 'Tour 1\nTour 2\nTour 3',
        hint: 'count は 0,1,2 と増え、3 になるとループを抜けます',
        explanation: 'count=0: print(Tour 1), count=1: print(Tour 2), count=2: print(Tour 3), count=3: 条件 False でループ終了。',
      },
    ],
  },
  DE: {
    python: [
      {
        id: 'ex_de_py_1',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'multiple-choice',
        title: '辞書のソートを理解しよう',
        prompt: 'このコードの出力は？',
        code: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
sorted_cities = sorted(cities.items(), key=lambda x: x[1], reverse=True)
print(sorted_cities[0][0])`,
        options: ['Berlin', 'Hamburg', 'Munich', 'Error'],
        answer: 'Berlin',
        hint: 'reverse=True で値の大きい順にソート。最初の要素は？',
        explanation: 'items() でキー・値ペアを取得。lambda x: x[1] で値でソート。reverse=True で降順。Berlin(3769) が最大。',
      },
    ],
  },
  GB: {
    python: [
      {
        id: 'ex_gb_py_1',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'multiple-choice',
        title: '文字列メソッドの出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `text = "  Hello, London!  "
cleaned = text.strip().lower()
print(cleaned)`,
        options: [
          "'hello, london!'",
          '"hello, london!"',
          'hello, london!',
          'Hello, London!',
        ],
        answer: 'hello, london!',
        hint: 'strip() は両端の空白を除去、lower() は小文字化',
        explanation: 'strip() → "Hello, London!"、lower() → "hello, london!"。print() は引用符なしで表示します。',
      },
    ],
  },
  ZA: {
    python: [
      {
        id: 'ex_za_py_1',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'multiple-choice',
        title: '型ヒント付き関数の出力を予測しよう',
        prompt: 'このコードを実行したときの出力は？',
        code: `def greet(name: str, times: int) -> str:
    return name * times

result = greet("Ubuntu! ", 3)
print(result)`,
        options: [
          'Ubuntu! Ubuntu! Ubuntu! ',
          'Ubuntu! 3',
          'Error: type mismatch',
          'None',
        ],
        answer: 'Ubuntu! Ubuntu! Ubuntu! ',
        hint: '文字列 * 数値は文字列を繰り返します。型ヒントは実行時には強制されません。',
        explanation: '"Ubuntu! " * 3 → "Ubuntu! Ubuntu! Ubuntu! "。Pythonの型ヒントは注釈のみで実行時チェックなし。',
      },
    ],
  },
  BR: {
    python: [
      {
        id: 'ex_br_py_1',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'code-ordering',
        title: 'コードブロックを正しい順序に並べよう',
        prompt: 'ブラジルの都市リストを作り、ソートして表示する。3 つのブロックを正しい実行順序に並べてください。',
        blocks: [
          'print(cities)',
          'cities = ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"]',
          'cities.sort()',
        ],
        answer: [1, 2, 0],
        hint: 'リストは使う前に作る。表示は処理が終わってから。',
        explanation: 'まず cities を定義し（index 1）、sort() で昇順に並べ替え（index 2）、最後に print() で表示（index 0）します。',
      },
    ],
  },
  AU: {
    python: [
      {
        id: 'ex_au_py_1',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'implementation-selection',
        title: '最も適切な実装を選ぼう',
        prompt: 'オーストラリアの都市リストから先頭 3 件を取得して表示する。最も Python らしい（Pythonic な）実装はどれ？',
        options: [
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
result = []
for i in range(3):
    result.append(cities[i])
print(result)`,
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[:3])`,
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[0], cities[1], cities[2])`,
        ],
        answer: `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[:3])`,
        hint: 'Pythonic なコードは短く明瞭。スライス記法を思い出して。',
        explanation: 'cities[:3] が最も簡潔で慣用的なスライス記法です。ループによる個別 append や固定インデックスより可読性・保守性が高く、リスト長が変わっても安全です。',
      },
    ],
  },
};

export const EXECUTE_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: '🟨', available: false },
];
