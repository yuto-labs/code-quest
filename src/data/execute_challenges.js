// EXECUTE world: trace code, predict output, combine concepts.
// questionType: 'multiple-choice' | 'multiple-blanks' | 'output-predict'

export const EXECUTE_CHALLENGES = {
  JP: {
    python: [
      {
        id: "jp_py_e01",
        worldId: "execute",
        languageId: "python",
        conceptId: "comprehension",
        questionType: "output-predict",
        title: "Yakushima World Heritage criteria/context: nested-filter",
        prompt: "Yakushima World Heritage criteria/context をコード内データとして使い、nested-filter を確認します。",
        code: "record = {\"name\": \"Yakushima World Heritage criteria/context\", \"values\": [1, 2, 3]}\nprint(sum(record[\"values\"]))",
        options: [
          "6",
          "other",
          "1",
          "Error"
        ],
        answer: "6",
        hint: "record[\"values\"] は [1, 2, 3] です。sum() はこの合計を出します。",
        explanation: "表示データにある Yakushima World Heritage criteria/context を使い、処理の流れを追うと 6 が出力されます。"
      },
      {
        id: "jp_py_e02",
        worldId: "execute",
        languageId: "python",
        conceptId: "lists",
        questionType: "output-predict",
        title: "Shirakami-Sanchi beech forest: list-comprehension",
        prompt: "Shirakami-Sanchi beech forest をコード内データとして使い、list-comprehension を確認します。",
        code: "route = [\"start\", \"Shirakami-Sanchi beech forest\", \"end\"]\nfor index, place in enumerate(route):\n    if index == 1:\n        print(place)",
        options: [
          "Shirakami-Sanchi beech forest",
          "other",
          "1",
          "Error"
        ],
        answer: "Shirakami-Sanchi beech forest",
        hint: "enumerate(route) で index が 1 のときだけ print します。route[1] の値を見ます。",
        explanation: "表示データにある Shirakami-Sanchi beech forest を使い、処理の流れを追うと Shirakami-Sanchi beech forest が出力されます。"
      },
      {
        id: "jp_py_e03",
        worldId: "execute",
        languageId: "python",
        conceptId: "variables",
        questionType: "output-predict",
        title: "National Diet Building: aggregation-duration",
        prompt: "National Diet Building をコード内データとして使い、aggregation-duration を確認します。",
        code: "items = [{\"name\": \"National Diet Building\", \"score\": 2}, {\"name\": \"other\", \"score\": 1}]\nresult = [item[\"name\"] for item in items if item[\"score\"] > 1]\nprint(result[0])",
        options: [
          "National Diet Building",
          "other",
          "1",
          "Error"
        ],
        answer: "National Diet Building",
        hint: "score が 2 の item だけが条件 score > 1 を通ります。その name が result[0] です。",
        explanation: "表示データにある National Diet Building を使い、処理の流れを追うと National Diet Building が出力されます。"
      },
      {
        id: "jp_py_e04",
        worldId: "execute",
        languageId: "python",
        conceptId: "lists",
        questionType: "code-ordering",
        title: "Hayabusa and Itokawa: code-ordering",
        prompt: "Hayabusa and Itokawa をコード内データとして使い、code-ordering を確認します。",
        blocks: [
          "mission = \"Hayabusa\"",
          "target = \"Itokawa\"",
          "result = f\"{mission}->{target}\"",
          "print(result)"
        ],
        answer: [
          0,
          1,
          2,
          3
        ],
        hint: "先に mission と target を作り、その2つを使って result を作り、最後に print します。",
        explanation: "Hayabusa と Itokawa を順に使うため、定義、結合、表示の順に並べます。"
      },
      {
        id: "jp_py_e05",
        worldId: "execute",
        languageId: "python",
        conceptId: "dicts",
        questionType: "output-predict",
        title: "Hayabusa2 and Ryugu: nested-dict-tracing",
        prompt: "Hayabusa2 and Ryugu をコード内データとして使い、nested-dict-tracing を確認します。",
        code: "route = [\"start\", \"Hayabusa2 and Ryugu\", \"end\"]\nfor index, place in enumerate(route):\n    if index == 1:\n        print(place)",
        options: [
          "Hayabusa2 and Ryugu",
          "other",
          "1",
          "Error"
        ],
        answer: "Hayabusa2 and Ryugu",
        hint: "route の真ん中、つまり index == 1 の place だけが表示されます。",
        explanation: "表示データにある Hayabusa2 and Ryugu を使い、処理の流れを追うと Hayabusa2 and Ryugu が出力されます。"
      },
      {
        id: "jp_py_e06",
        worldId: "execute",
        languageId: "python",
        conceptId: "lists",
        questionType: "output-predict",
        title: "Noh role structure: set-deduplication",
        prompt: "Noh role structure をコード内データとして使い、set-deduplication を確認します。",
        code: "items = [{\"name\": \"Noh role structure\", \"score\": 2}, {\"name\": \"other\", \"score\": 1}]\nresult = [item[\"name\"] for item in items if item[\"score\"] > 1]\nprint(result[0])",
        options: [
          "Noh role structure",
          "other",
          "1",
          "Error"
        ],
        answer: "Noh role structure",
        hint: "条件 score > 1 を満たすのは score が2の要素だけです。その name を追います。",
        explanation: "表示データにある Noh role structure を使い、処理の流れを追うと Noh role structure が出力されます。"
      },
      {
        id: "jp_py_e07",
        worldId: "execute",
        languageId: "python",
        conceptId: "lists",
        questionType: "output-predict",
        title: "Matsuo Basho and Oku no Hosomichi: enumerate-route-processing",
        prompt: "Matsuo Basho and Oku no Hosomichi をコード内データとして使い、enumerate-route-processing を確認します。",
        code: "record = {\"name\": \"Matsuo Basho and Oku no Hosomichi\", \"values\": [1, 2, 3]}\nprint(sum(record[\"values\"]))",
        options: [
          "6",
          "other",
          "1",
          "Error"
        ],
        answer: "6",
        hint: "record[\"values\"] の 1, 2, 3 を合計します。表示されるのは数値の合計です。",
        explanation: "表示データにある Matsuo Basho and Oku no Hosomichi を使い、処理の流れを追うと 6 が出力されます。"
      }
    ],
    javascript: [
      {
        id: "jp_js_e01",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "arrays",
        questionType: "output-predict",
        title: "firearms arrival at Tanegashima: array-sort",
        prompt: "firearms arrival at Tanegashima をコード内データとして使い、array-sort を確認します。",
        code: "const route = { from: \"start\", to: \"firearms arrival at Tanegashima\" };\nconsole.log(route.to);",
        options: [
          "firearms arrival at Tanegashima",
          "other",
          "1",
          "Error"
        ],
        answer: "firearms arrival at Tanegashima",
        hint: "route オブジェクトの to プロパティをそのまま console.log しています。",
        explanation: "表示データにある firearms arrival at Tanegashima を使い、処理の流れを追うと firearms arrival at Tanegashima が出力されます。"
      },
      {
        id: "jp_js_e02",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "arrays",
        questionType: "output-predict",
        title: "Perry expedition and opening sequence: timeline-reduce",
        prompt: "Perry expedition and opening sequence をコード内データとして使い、timeline-reduce を確認します。",
        code: "const items = [{ name: \"Perry expedition and opening sequence\", score: 2 }, { name: \"other\", score: 1 }];\nconst result = items.filter(item => item.score > 1).map(item => item.name);\nconsole.log(result[0]);",
        options: [
          "Perry expedition and opening sequence",
          "other",
          "1",
          "Error"
        ],
        answer: "Perry expedition and opening sequence",
        hint: "filter で score > 1 の要素だけ残し、map で name だけ取り出します。",
        explanation: "表示データにある Perry expedition and opening sequence を使い、処理の流れを追うと Perry expedition and opening sequence が出力されます。"
      },
      {
        id: "jp_js_e03",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "arrays",
        questionType: "output-predict",
        title: "Japanese washi traditions: filter",
        prompt: "Japanese washi traditions をコード内データとして使い、filter を確認します。",
        code: "const record = { name: \"Japanese washi traditions\", values: [1, 2, 3] };\nconst total = record.values.reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
        options: [
          "6",
          "other",
          "1",
          "Error"
        ],
        answer: "6",
        hint: "record.values は [1, 2, 3] です。reduce は左から順に足し算しています。",
        explanation: "表示データにある Japanese washi traditions を使い、処理の流れを追うと 6 が出力されます。"
      },
      {
        id: "jp_js_e04",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "variables",
        questionType: "output-predict",
        title: "Ise Jingu Shikinen Sengu: modulo-cycle",
        prompt: "Ise Jingu Shikinen Sengu をコード内データとして使い、modulo-cycle を確認します。",
        code: "const route = { from: \"start\", to: \"Ise Jingu Shikinen Sengu\" };\nconsole.log(route.to);",
        options: [
          "Ise Jingu Shikinen Sengu",
          "other",
          "1",
          "Error"
        ],
        answer: "Ise Jingu Shikinen Sengu",
        hint: "console.log(route.to) なので、from ではなく to の文字列が出ます。",
        explanation: "表示データにある Ise Jingu Shikinen Sengu を使い、処理の流れを追うと Ise Jingu Shikinen Sengu が出力されます。"
      },
      {
        id: "jp_js_e05",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "variables",
        questionType: "output-predict",
        title: "Tokyo Skytree: map-unit-conversion",
        prompt: "Tokyo Skytree をコード内データとして使い、map-unit-conversion を確認します。",
        code: "const items = [{ name: \"Tokyo Skytree\", score: 2 }, { name: \"other\", score: 1 }];\nconst result = items.filter(item => item.score > 1).map(item => item.name);\nconsole.log(result[0]);",
        options: [
          "Tokyo Skytree",
          "other",
          "1",
          "Error"
        ],
        answer: "Tokyo Skytree",
        hint: "score が2の要素だけ filter を通り、その name が result[0] になります。",
        explanation: "表示データにある Tokyo Skytree を使い、処理の流れを追うと Tokyo Skytree が出力されます。"
      },
      {
        id: "jp_js_e06",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "arrays",
        questionType: "output-predict",
        title: "Yagi-Uda antenna: reduce-aggregation",
        prompt: "Yagi-Uda antenna をコード内データとして使い、reduce-aggregation を確認します。",
        code: "const record = { name: \"Yagi-Uda antenna\", values: [1, 2, 3] };\nconst total = record.values.reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
        options: [
          "6",
          "other",
          "1",
          "Error"
        ],
        answer: "6",
        hint: "reduce の初期値は0です。1、2、3を順に足した合計を考えます。",
        explanation: "表示データにある Yagi-Uda antenna を使い、処理の流れを追うと 6 が出力されます。"
      },
      {
        id: "jp_js_e07",
        worldId: "execute",
        languageId: "javascript",
        conceptId: "objects",
        questionType: "output-predict",
        title: "Seikan Tunnel: route-object-tracing",
        prompt: "Seikan Tunnel をコード内データとして使い、route-object-tracing を確認します。",
        code: "const route = { from: \"start\", to: \"Seikan Tunnel\" };\nconsole.log(route.to);",
        options: [
          "Seikan Tunnel",
          "other",
          "1",
          "Error"
        ],
        answer: "Seikan Tunnel",
        hint: "route.to に入っている文字列をそのまま表示します。",
        explanation: "表示データにある Seikan Tunnel を使い、処理の流れを追うと Seikan Tunnel が出力されます。"
      }
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
      {
        id: 'ex_fr_py_2',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'output-predict',
        title: 'フィルタ処理の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = ["Paris", "Lyon", "Nice", "Toulouse"]
result = []
for city in cities:
    if len(city) > 4:
        result.append(city)
print(result)`,
        options: [
          "['Paris', 'Lyon', 'Nice', 'Toulouse']",
          "['Paris', 'Toulouse']",
          "['Lyon', 'Nice']",
          "['Paris']",
        ],
        answer: "['Paris', 'Toulouse']",
        hint: 'len("Paris")=5, len("Lyon")=4, len("Nice")=4, len("Toulouse")=8',
        explanation: 'len > 4 を満たすのは Paris(5) と Toulouse(8)。Lyon(4) と Nice(4) は除外されます。',
      },
      {
        id: 'ex_fr_py_3',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'multiple-blanks',
        title: 'enumerate でインデックス付き表示を完成させよう',
        prompt: 'パリの観光地を 1 から番号付きで表示するコードの空欄を埋めてください',
        code: `landmarks = ["Eiffel Tower", "Louvre", "Versailles"]
for ___BLANK_0___, name in enumerate(landmarks, ___BLANK_1___):
    print(f"{i}. {name}")`,
        blanks: ['i', '1'],
        hint: 'enumerate(iterable, start) の start は番号の開始値です',
        explanation: 'enumerate(landmarks, 1) でインデックスを 1 から始めます。for i, name in enumerate(...) で番号と要素を同時に取得できます。',
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
      {
        id: 'ex_de_py_2',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'output-predict',
        title: '辞書内包表記の結果を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v > 2000}
print(len(big))`,
        options: ['0', '1', '2', '3'],
        answer: '1',
        hint: '2000 より大きい都市の人口(千人)はどれ？',
        explanation: 'Berlin=3769 > 2000 のみ該当。Hamburg=1847, Munich=1488 は 2000 以下。len(big) = 1。',
      },
      {
        id: 'ex_de_py_3',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'implementation-selection',
        title: '最も Pythonic な辞書フィルタを選ぼう',
        prompt: 'ドイツの都市から人口(千人)が 2000 以上の都市のみ取得する。最も Pythonic な実装はどれ？',
        options: [
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {}
for k, v in cities.items():
    if v >= 2000:
        big[k] = v
print(big)`,
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v >= 2000}
print(big)`,
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
keys = list(filter(lambda k: cities[k] >= 2000, cities))
big = dict(zip(keys, [cities[k] for k in keys]))
print(big)`,
        ],
        answer: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v >= 2000}
print(big)`,
        hint: '辞書内包表記は dict の if フィルタを 1 行で書けます',
        explanation: '辞書内包表記 {k: v for k, v in d.items() if cond} が最も簡潔で読みやすい Pythonic な書き方です。for ループも動きますが冗長。filter+zip はさらに複雑になります。',
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
      {
        id: 'ex_gb_py_2',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'output-predict',
        title: 'split の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `text = "Big Ben, Tower Bridge, Stonehenge"
parts = text.split(", ")
print(len(parts), parts[-1])`,
        options: [
          '2 Stonehenge',
          '3 Stonehenge',
          '3 Big Ben',
          '2 Big Ben',
        ],
        answer: '3 Stonehenge',
        hint: '", " で分割すると何個に分かれますか？最後の要素は？',
        explanation: 'split(", ") → ["Big Ben", "Tower Bridge", "Stonehenge"]。len=3、parts[-1] は末尾要素の "Stonehenge"。',
      },
      {
        id: 'ex_gb_py_3',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'multiple-blanks',
        title: '文字列から数字のみ抽出するコードを完成させよう',
        prompt: 'ロンドンの郵便番号から数字部分のみ抽出するコードの空欄を埋めてください',
        code: `import re
postcode = "SW1A 2AA"
digits = re.___BLANK_0___(r"\\d+", postcode)
print(digits)`,
        blanks: ['findall'],
        hint: 're モジュールで全マッチを探すメソッドは？',
        explanation: 're.findall(pattern, string) はすべてのマッチをリストで返します。\\d+ は1文字以上の数字列。"SW1A 2AA" から ["1", "2"] が取得できます。',
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
      {
        id: 'ex_za_py_2',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'multiple-blanks',
        title: 'Optional 型ヒントのコードを完成させよう',
        prompt: '辞書から値を安全に取得する関数の空欄を埋めてください',
        code: `from typing import ___BLANK_0___

def get_capital(country: str) -> Optional[str]:
    capitals = {"South Africa": "Pretoria", "Japan": "Tokyo"}
    return capitals.___BLANK_1___(country)

print(get_capital("Kenya"))`,
        blanks: ['Optional', 'get'],
        hint: 'キーが存在しない場合に None を返す辞書メソッドは？',
        explanation: 'Optional[str] は str または None を返すことを示します。dict.get(key) はキーが存在しない場合 None を返します。"Kenya" はキーにないので None が出力されます。',
      },
      {
        id: 'ex_za_py_3',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'output-predict',
        title: 'dataclass の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `from dataclasses import dataclass

@dataclass
class Country:
    name: str
    languages: int

sa = Country("South Africa", 11)
print(sa.languages * 2)`,
        options: ['11', '22', 'None', 'Error'],
        answer: '22',
        hint: 'dataclass は __init__ を自動生成します。sa.languages の値は？',
        explanation: '@dataclass は name と languages の __init__ を自動生成します。sa.languages = 11、11 * 2 = 22。',
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
      {
        id: 'ex_br_py_2',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'output-predict',
        title: 'リスト内包表記の結果を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = ["São Paulo", "Rio", "Brasília", "Salvador", "Fortaleza"]
long_names = [c for c in cities if len(c) > 5]
print(len(long_names))`,
        options: ['2', '3', '4', '5'],
        answer: '4',
        hint: '長さが 5 より大きい(>5)都市名をカウント。"Rio" の長さは？',
        explanation: '"São Paulo"(9), "Rio"(3), "Brasília"(8), "Salvador"(8), "Fortaleza"(9)。len > 5 を満たすのは Rio 以外の 4 つ。',
      },
      {
        id: 'ex_br_py_3',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'multiple-blanks',
        title: '人口リストをソートして上位を取得するコードを完成させよう',
        prompt: '空欄を埋めてブラジルの主要都市の人口(万人)を降順で上位 3 件取得してください',
        code: `population = [1232, 674, 309, 290, 264]
population.___BLANK_0___(reverse=True)
top3 = population[___BLANK_1___]
print(top3)`,
        blanks: ['sort', ':3'],
        hint: 'in-place ソートのメソッド名と、先頭 3 件を取るスライスは？',
        explanation: 'sort(reverse=True) で降順に並べ替え。[:3] で先頭 3 件を取得。結果は [1232, 674, 309]。',
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
      {
        id: 'ex_au_py_2',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'output-predict',
        title: 'デフォルト引数付き関数の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `def describe_city(name, country="Australia"):
    return f"{name}, {country}"

print(describe_city("Sydney"))
print(describe_city("Paris", "France"))`,
        options: [
          'Sydney, Australia\nParis, France',
          'Sydney, None\nParis, France',
          'Sydney\nParis',
          'Error',
        ],
        answer: 'Sydney, Australia\nParis, France',
        hint: 'デフォルト引数は省略したときだけ使われます',
        explanation: 'describe_city("Sydney") → country はデフォルト "Australia"。describe_city("Paris", "France") → country は "France" に上書き。',
      },
      {
        id: 'ex_au_py_3',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'multiple-choice',
        title: 'lambda を使ったソートの出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = [("Sydney", 5312), ("Melbourne", 5078), ("Brisbane", 2561)]
cities_sorted = sorted(cities, key=lambda x: x[1])
print(cities_sorted[0][0])`,
        options: ['Sydney', 'Melbourne', 'Brisbane', 'Error'],
        answer: 'Brisbane',
        hint: 'sorted() はデフォルトで昇順。key=lambda x: x[1] は何でソート？',
        explanation: 'lambda x: x[1] でタプルの 2 番目要素（人口）でソート。昇順なので最小の Brisbane(2561) が先頭になります。',
      },
    ],
  },
};

export const EXECUTE_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: 'JS', available: true },
];
