export const PYTHON_REFERENCE = [
  {
    id: 'variables',
    title: '変数と型',
    emoji: '📦',
    summary: 'データを入れる箱',
    sections: [
      {
        heading: '変数とは？',
        text: '変数はデータを保存する「箱」です。名前をつけて値を入れておき、後から取り出したり書き換えたりできます。Pythonでは宣言不要で、代入するだけで変数が作られます。',
        code: `name = "Yuto"        # 文字列を代入
age  = 20            # 整数を代入
height = 175.5       # 小数を代入

print(name)          # → Yuto
print(age)           # → 20
print(height)        # → 175.5`,
      },
      {
        heading: 'データ型の種類',
        text: 'Pythonには値の「種類」があります。これをデータ型と言います。型によって使える操作が変わります。',
        code: `str_val   = "Hello"   # str   文字列
int_val   = 42        # int   整数
float_val = 3.14      # float 小数
bool_val  = True      # bool  真偽値（True/False）
none_val  = None      # NoneType 値なし

print(type(str_val))  # → <class 'str'>
print(type(int_val))  # → <class 'int'>`,
      },
      {
        heading: '型の変換',
        text: '型を別の型に変換できます。これを「型キャスト」と言います。変換できない場合はエラーになります。',
        code: `# 文字列 → 整数
num = int("42")       # → 42
num = int("3.14")     # ❌ エラー（小数文字列はint不可）

# 文字列 → 小数
f = float("3.14")     # → 3.14

# 数値 → 文字列
s = str(100)          # → "100"

# 整数 → 小数
f = float(5)          # → 5.0

# 実用例: 入力を数値として使う
age = int(input("年齢: "))
print(age + 1)`,
      },
      {
        heading: '変数の命名ルール',
        text: 'Pythonの変数名には守るべきルールと推奨の書き方（慣習）があります。',
        code: `# ✅ ルール（必須）
my_name = "Yuto"     # 英数字とアンダースコア
_private = 100       # アンダースコアで始められる
user1 = "Alice"      # 数字は2文字目以降ならOK

# ❌ エラーになる
# 1user = "Bob"      数字で始まるのはNG
# my-name = "..."    ハイフンはNG
# class = "..."      予約語はNG（if/for/defなども）

# ✅ 慣習（推奨）
user_name = "Yuto"   # スネークケース（単語を_で区切る）
MAX_SIZE = 100       # 定数は大文字
UserName = "Yuto"    # クラス名はパスカルケース`,
      },
      {
        heading: '複数代入と値のスワップ',
        text: 'Pythonでは複数の変数を1行で代入したり、値を交換したりできます。',
        code: `# 複数代入
x, y, z = 1, 2, 3
print(x, y, z)       # → 1 2 3

# 同じ値を複数に代入
a = b = c = 0

# 値のスワップ（他の言語では一時変数が必要）
a, b = 10, 20
a, b = b, a          # 一行で交換できる！
print(a, b)          # → 20 10

# アンパック
first, *rest = [1, 2, 3, 4, 5]
print(first)         # → 1
print(rest)          # → [2, 3, 4, 5]`,
      },
      {
        heading: 'グローバル変数とローカル変数',
        text: '変数には「スコープ（有効範囲）」があります。関数の内外で扱いが変わります。',
        code: `count = 0            # グローバル変数（関数の外）

def increment():
    global count     # グローバル変数を変更するには global 宣言
    count += 1

def show():
    local_val = 99   # ローカル変数（関数の中だけ有効）
    print(count)     # グローバルは読み取れる
    print(local_val)

increment()
show()               # → 1, 99
# print(local_val)   ❌ 関数の外からはアクセスできない`,
      },
    ],
  },
  {
    id: 'strings',
    title: '文字列操作',
    emoji: '📝',
    summary: 'テキストを自在に操る',
    sections: [
      {
        heading: '文字列の基本',
        text: '文字列は " " または \' \' で囲みます。複数行は """ """ を使います。文字列はイミュータブル（変更不可）です。',
        code: `s1 = "Hello"
s2 = 'World'
s3 = """複数行の
文字列が
書けます"""

# 文字列の結合
print(s1 + " " + s2)   # → Hello World

# 繰り返し
print("Ha" * 3)         # → HaHaHa

# 長さ
print(len("Python"))    # → 6`,
      },
      {
        heading: 'f文字列（フォーマット）',
        text: 'f文字列を使うと変数を文字列に埋め込めます。最も現代的で読みやすい書き方です。',
        code: `name = "Alice"
age = 25
height = 163.5

# f文字列（推奨）
print(f"名前: {name}, 年齢: {age}")
# → 名前: Alice, 年齢: 25

# 計算も埋め込める
print(f"来年は{age + 1}歳")

# 小数点の桁数を指定
print(f"身長: {height:.1f}cm")  # → 身長: 163.5cm

# 古い書き方（参考）
print("名前: %s" % name)
print("名前: {}".format(name))`,
      },
      {
        heading: 'インデックスとスライス',
        text: '文字列の特定の文字や範囲を取り出せます。インデックスは0から始まります。',
        code: `s = "Python"

# インデックス（1文字取り出し）
print(s[0])      # → P  (最初)
print(s[-1])     # → n  (最後)
print(s[-2])     # → o  (後ろから2番目)

# スライス [start:stop:step]
print(s[0:3])    # → Pyt  (0〜2文字目)
print(s[2:])     # → thon (2文字目以降)
print(s[:4])     # → Pyth (最初〜3文字目)
print(s[::-1])   # → nohtyP (逆順)
print(s[::2])    # → Pto  (1文字おき)`,
      },
      {
        heading: 'よく使うメソッド',
        text: '文字列には便利なメソッドがたくさんあります。メソッドは元の文字列を変更せず新しい文字列を返します。',
        code: `s = "  Hello, World!  "

print(s.upper())         # → "  HELLO, WORLD!  "
print(s.lower())         # → "  hello, world!  "
print(s.strip())         # → "Hello, World!"  前後の空白除去
print(s.replace("o","0"))# → "  Hell0, W0rld!  "
print(s.count("l"))      # → 3
print(s.find("World"))   # → 9  (見つかった位置)

# 分割と結合
words = "a,b,c".split(",")  # → ['a', 'b', 'c']
joined = "-".join(words)     # → "a-b-c"

# 確認系
print("hello".startswith("he"))  # → True
print("hello".endswith("lo"))    # → True
print("123".isdigit())           # → True`,
      },
      {
        heading: '文字列と数値の注意点',
        text: '文字列と数値を混在させるとエラーになります。変換してから扱いましょう。',
        code: `# ❌ エラー
# print("年齢: " + 25)   str と int は + できない

# ✅ 正しい書き方
print("年齢: " + str(25))    # 文字列に変換
print(f"年齢: {25}")          # f文字列を使う（推奨）

# input() は常に文字列を返す
# age = input("年齢: ")
# print(age + 1)  ❌ エラー
# print(int(age) + 1)  ✅ 正しい`,
      },
    ],
  },
  {
    id: 'operators',
    title: '演算子',
    emoji: '➕',
    summary: '計算と比較の記号',
    sections: [
      {
        heading: '算術演算子',
        text: '数値の計算に使う記号です。優先順位は数学と同じ（掛け算・割り算が先）です。',
        code: `a, b = 10, 3

print(a + b)    # → 13   足し算
print(a - b)    # →  7   引き算
print(a * b)    # → 30   掛け算
print(a / b)    # →  3.333... 割り算（常にfloat）
print(a // b)   # →  3   切り捨て除算（整数）
print(a % b)    # →  1   余り
print(a ** b)   # → 1000 べき乗（2**10=1024）

# 優先順位
print(2 + 3 * 4)     # → 14  (* が先)
print((2 + 3) * 4)   # → 20  () で優先`,
      },
      {
        heading: '代入演算子',
        text: '変数の値を更新するときに使う省略形です。',
        code: `x = 10

x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x //= 5   # x = x // 5 → 4
x **= 3   # x = x ** 3 → 64
x %= 10   # x = x % 10 → 4

# よく使うパターン
count = 0
count += 1    # カウントアップ
total = 0
total += price  # 合計に加算`,
      },
      {
        heading: '比較演算子',
        text: '2つの値を比べて True または False を返します。if文やwhile文の条件としてよく使います。',
        code: `x = 5

print(x == 5)    # → True  等しい
print(x != 5)    # → False 等しくない
print(x > 3)     # → True  より大きい
print(x < 3)     # → False より小さい
print(x >= 5)    # → True  以上
print(x <= 4)    # → False 以下

# 文字列の比較（アルファベット順）
print("apple" < "banana")   # → True
print("abc" == "abc")        # → True

# 連鎖比較（Pythonの特徴）
age = 20
print(18 <= age <= 65)   # → True（成人かつ65歳以下）`,
      },
      {
        heading: '論理演算子',
        text: '複数の条件を組み合わせます。短絡評価という仕組みで効率よく動きます。',
        code: `a, b = True, False

print(a and b)   # → False  両方Trueのとき True
print(a or b)    # → True   どちらかTrueのとき True
print(not a)     # → False  反転

# 実用例
age = 20
has_id = True
is_member = False

# 18歳以上かつIDを持っている
print(age >= 18 and has_id)       # → True

# 会員かまたは18歳以上
print(is_member or age >= 18)     # → True

# 短絡評価: 左で結果が確定したら右は評価しない
x = None
print(x is not None and x > 0)   # → False（エラーにならない）`,
      },
      {
        heading: 'その他の便利な演算子',
        text: 'in、is、などのPython特有の演算子も覚えておくと便利です。',
        code: `# in: 含まれるか確認
fruits = ["apple", "banana"]
print("apple" in fruits)      # → True
print("grape" not in fruits)  # → True
print("py" in "python")       # → True（文字列でも使える）

# is: 同一オブジェクトか確認（==とは違う）
a = [1, 2, 3]
b = a
c = [1, 2, 3]
print(a is b)    # → True  同じオブジェクト
print(a is c)    # → False 中身は同じでも別オブジェクト
print(a == c)    # → True  値は等しい

# None の確認は is を使う（推奨）
x = None
print(x is None)      # → True  ✅ 推奨
print(x == None)      # → True  △ 非推奨`,
      },
    ],
  },
  {
    id: 'conditionals',
    title: '条件分岐',
    emoji: '🔀',
    summary: '条件によって処理を変える',
    sections: [
      {
        heading: 'if 文の基本',
        text: '条件が True のときだけ処理を実行します。Pythonはインデント（スペース4つ）でブロックを表します。これは必須です。',
        code: `temperature = 35

if temperature > 30:
    print("暑い！")       # ← インデント必須
    print("水を飲もう")   # ← 同じブロック

print("これは常に表示")   # ← if の外`,
      },
      {
        heading: 'if / elif / else',
        text: '複数の条件分岐には elif を使います。上から順に評価され、最初に True になった条件だけ実行されます。',
        code: `score = 85

if score >= 90:
    grade = "S"
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(f"評価: {grade}")   # → 評価: A`,
      },
      {
        heading: '三項演算子（条件式）',
        text: '1行で if-else を書けます。シンプルな条件分岐に便利です。',
        code: `age = 20

# 通常の書き方
if age >= 18:
    status = "成人"
else:
    status = "未成年"

# 三項演算子（1行で書ける）
status = "成人" if age >= 18 else "未成年"
print(status)   # → 成人

# 実用例
x = 10
abs_x = x if x >= 0 else -x   # 絶対値
label = "偶数" if x % 2 == 0 else "奇数"`,
      },
      {
        heading: 'Truthyと Falsy',
        text: 'Pythonでは True/False 以外の値も条件として使えます。これを Truthy / Falsy と言います。',
        code: `# Falsy（False として扱われる値）
falsy_values = [False, None, 0, 0.0, "", [], {}, set()]

for v in falsy_values:
    if not v:
        print(f"{repr(v)} は Falsy")

# 実用例
name = ""
if name:             # 空文字は Falsy
    print(f"Hello, {name}")
else:
    print("名前が未入力です")

items = []
if not items:        # 空リストは Falsy
    print("リストが空です")`,
      },
      {
        heading: 'match 文（Python 3.10+）',
        text: 'Python 3.10以降では match 文（パターンマッチング）が使えます。複雑な条件分岐をスッキリ書けます。',
        code: `command = "quit"

match command:
    case "start":
        print("ゲーム開始")
    case "pause":
        print("一時停止")
    case "quit" | "exit":    # OR 条件
        print("終了します")
    case _:                  # デフォルト（else相当）
        print("不明なコマンド")

# 値のバインドも可能
point = (0, 5)
match point:
    case (0, y):
        print(f"Y軸上の点: y={y}")
    case (x, 0):
        print(f"X軸上の点: x={x}")
    case (x, y):
        print(f"座標: ({x}, {y})")`,
      },
    ],
  },
  {
    id: 'loops',
    title: 'ループ',
    emoji: '🔁',
    summary: '同じ処理を繰り返す',
    sections: [
      {
        heading: 'for ループの基本',
        text: 'リスト・文字列・range() などの要素を1つずつ取り出して処理します。',
        code: `# リストを繰り返す
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 文字列を1文字ずつ
for char in "Python":
    print(char)

# range() で数字を繰り返す
for i in range(5):       # 0,1,2,3,4
    print(i)

for i in range(1, 6):    # 1,2,3,4,5
    print(i)

for i in range(0, 10, 2):  # 0,2,4,6,8（2飛ばし）
    print(i)`,
      },
      {
        heading: 'enumerate と zip',
        text: 'インデックスと値を同時に取得したり、複数のリストを並行して処理できます。',
        code: `fruits = ["apple", "banana", "cherry"]

# enumerate: インデックスと値を同時取得
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# → 0: apple
# → 1: banana
# → 2: cherry

# enumerate の開始番号を変えられる
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")   # 1から始まる

# zip: 複数リストを並行処理
names = ["Alice", "Bob", "Carol"]
scores = [85, 92, 78]
for name, score in zip(names, scores):
    print(f"{name}: {score}点")`,
      },
      {
        heading: 'while ループ',
        text: '条件が True の間ずっと繰り返します。条件が変化しないと無限ループになるので注意。',
        code: `# 基本形
count = 0
while count < 5:
    print(count)
    count += 1      # これを忘れると無限ループ！

# 無限ループ + break でよく使うパターン
while True:
    answer = input("続けますか？(y/n): ")
    if answer == "n":
        break
    print("続けます")

# 条件付きで試行
attempts = 0
while attempts < 3:
    password = input("パスワード: ")
    if password == "secret":
        print("ログイン成功")
        break
    attempts += 1
else:              # ループが break なしで終わったとき
    print("3回失敗しました")`,
      },
      {
        heading: 'break / continue / else',
        text: 'ループの制御に使います。for/while どちらでも使えます。',
        code: `# break: ループを即終了
for i in range(10):
    if i == 5:
        break
    print(i)        # 0,1,2,3,4

# continue: その回をスキップ
for i in range(6):
    if i % 2 == 0:
        continue    # 偶数はスキップ
    print(i)        # 1,3,5

# else: break なしでループが完了したとき実行
for i in range(5):
    if i == 10:     # 条件は満たされない
        break
else:
    print("ループ完了！")  # こちらが実行される`,
      },
      {
        heading: 'リスト内包表記',
        text: 'for ループを1行で書けるPythonらしい書き方です。新しいリストを作るときに便利です。',
        code: `# 通常のfor文
squares = []
for x in range(5):
    squares.append(x ** 2)

# リスト内包表記（同じ意味）
squares = [x ** 2 for x in range(5)]
print(squares)   # → [0, 1, 4, 9, 16]

# 条件付き
evens = [x for x in range(10) if x % 2 == 0]
print(evens)     # → [0, 2, 4, 6, 8]

# 文字列の変換
words = ["hello", "world"]
upper = [w.upper() for w in words]
print(upper)     # → ['HELLO', 'WORLD']

# 辞書内包表記
squares_dict = {x: x**2 for x in range(5)}
# → {0:0, 1:1, 2:4, 3:9, 4:16}`,
      },
    ],
  },
  {
    id: 'functions',
    title: '関数',
    emoji: '⚙️',
    summary: '処理をまとめて再利用する',
    sections: [
      {
        heading: '関数の定義と呼び出し',
        text: 'def キーワードで関数を定義します。同じ処理を何度でも呼び出せます。',
        code: `def greet():
    print("Hello!")
    print("Welcome!")

greet()    # 呼び出し
greet()    # 何度でも呼べる

# 関数は定義した後に呼び出す
def add(a, b):
    return a + b

result = add(3, 5)
print(result)   # → 8`,
      },
      {
        heading: '引数の種類',
        text: 'Pythonの引数には位置引数・キーワード引数・デフォルト引数・可変長引数があります。',
        code: `# デフォルト引数
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")           # → Hello, Alice!
greet("Bob", "Hi")       # → Hi, Bob!
greet("Carol", greeting="Hey")  # キーワード引数

# 可変長引数 *args（複数の位置引数）
def total(*nums):
    return sum(nums)

print(total(1, 2, 3))         # → 6
print(total(10, 20, 30, 40))  # → 100

# **kwargs（複数のキーワード引数）
def profile(**info):
    for key, val in info.items():
        print(f"{key}: {val}")

profile(name="Alice", age=25, city="Tokyo")`,
      },
      {
        heading: '戻り値とreturn',
        text: '関数から値を返すには return を使います。複数の値も返せます。',
        code: `# 単一の戻り値
def square(x):
    return x ** 2

print(square(4))    # → 16

# 複数の戻り値（タプルとして返る）
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(lo, hi)       # → 1 9

# 条件によって異なる値を返す
def abs_value(x):
    if x >= 0:
        return x
    return -x       # elseは不要（returnで抜ける）

# return なしは None を返す
def no_return():
    x = 1 + 1

print(no_return())  # → None`,
      },
      {
        heading: 'ラムダ関数',
        text: '名前のない1行の関数です。簡単な処理をその場で定義するときに使います。',
        code: `# 通常の関数
def double(x):
    return x * 2

# ラムダ（同じ意味）
double = lambda x: x * 2
print(double(5))    # → 10

# 複数の引数
add = lambda a, b: a + b
print(add(3, 4))    # → 7

# sorted() のキーとして使う
people = [("Alice", 25), ("Bob", 20), ("Carol", 30)]
sorted_people = sorted(people, key=lambda p: p[1])
print(sorted_people)   # 年齢順にソート

# map() と filter() との組み合わせ
nums = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x*2, nums))
evens   = list(filter(lambda x: x%2==0, nums))`,
      },
      {
        heading: 'スコープとクロージャ',
        text: '関数のスコープ（変数の有効範囲）と、関数を返す関数（クロージャ）について理解しましょう。',
        code: `# LEGB ルール: Local > Enclosing > Global > Built-in
x = "global"

def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)    # → local（最も近いスコープを使う）
    inner()
    print(x)        # → enclosing

outer()
print(x)            # → global

# クロージャ: 関数を返す関数
def multiplier(n):
    def multiply(x):
        return x * n   # n を「記憶」する
    return multiply

double = multiplier(2)
triple = multiplier(3)
print(double(5))    # → 10
print(triple(5))    # → 15`,
      },
    ],
  },
  {
    id: 'lists',
    title: 'リスト',
    emoji: '📋',
    summary: '複数のデータをまとめる',
    sections: [
      {
        heading: 'リストの基本',
        text: '[ ] で複数の値をまとめて管理できます。異なる型を混在させることもできます。',
        code: `# 作成
fruits = ["apple", "banana", "cherry"]
mixed  = [1, "hello", True, None, [1, 2]]  # 混在OK

# アクセス（0始まり）
print(fruits[0])    # → apple   最初
print(fruits[-1])   # → cherry  最後
print(fruits[-2])   # → banana  後ろから2番目

# スライス
print(fruits[0:2])  # → ['apple', 'banana']
print(fruits[1:])   # → ['banana', 'cherry']
print(fruits[::-1]) # → ['cherry', 'banana', 'apple']（逆順）

# 長さ
print(len(fruits))  # → 3`,
      },
      {
        heading: 'リストの変更',
        text: 'リストは変更可能（ミュータブル）です。要素の追加・削除・変更ができます。',
        code: `nums = [1, 2, 3]

# 追加
nums.append(4)          # 末尾に追加 → [1,2,3,4]
nums.insert(0, 0)       # 指定位置に挿入 → [0,1,2,3,4]
nums.extend([5, 6])     # 別リストを結合 → [0,1,2,3,4,5,6]

# 削除
nums.remove(0)          # 値を指定して削除（最初の1つ）
popped = nums.pop()     # 末尾を取り出して返す
popped = nums.pop(0)    # 指定インデックスを取り出す
del nums[0]             # インデックスで削除

# 変更
nums[0] = 99            # インデックスで直接変更`,
      },
      {
        heading: 'リストの便利な操作',
        text: 'ソート・検索・コピーなどよく使う操作をまとめます。',
        code: `nums = [3, 1, 4, 1, 5, 9, 2, 6]

# ソート
nums.sort()             # 元のリストを変更
sorted_nums = sorted(nums)  # 新しいリストを返す（元は変わらない）
nums.sort(reverse=True) # 降順

# 検索
print(3 in nums)        # True/False で含まれるか確認
print(nums.index(4))    # 値の位置（なければエラー）
print(nums.count(1))    # 値の出現回数

# コピー（重要！）
a = [1, 2, 3]
b = a          # ❌ 参照コピー（同じオブジェクト）
b = a.copy()   # ✅ シャローコピー
b = a[:]       # ✅ スライスでもコピー

import copy
b = copy.deepcopy(a)  # ネストしたリストのコピー`,
      },
      {
        heading: 'タプルとの違い',
        text: 'タプルはリストに似ていますが変更できません（イミュータブル）。変更不要なデータに使います。',
        code: `# タプル: () で作成
point = (3, 5)
rgb   = (255, 128, 0)

print(point[0])   # → 3  アクセスはリストと同じ

# 変更しようとするとエラー
# point[0] = 10   ❌ TypeError

# タプルのアンパック
x, y = point
print(x, y)   # → 3 5

r, g, b = rgb

# 1要素のタプル（カンマが必要）
single = (42,)   # ← カンマ必須
not_tuple = (42) # ← これはただの整数

# リストとタプルの変換
lst = list(point)   # → [3, 5]
tpl = tuple([1,2])  # → (1, 2)`,
      },
    ],
  },
  {
    id: 'dicts',
    title: '辞書',
    emoji: '📖',
    summary: 'キーと値のペアでデータを管理',
    sections: [
      {
        heading: '辞書の基本',
        text: '{ } でキーと値のペアを管理します。キーは重複不可・変更不可の型（文字列・数値・タプルなど）が使えます。',
        code: `# 作成
person = {
    "name": "Alice",
    "age": 25,
    "city": "Tokyo"
}

# アクセス
print(person["name"])       # → Alice
print(person.get("age"))    # → 25
print(person.get("email"))  # → None（KeyErrorにならない）
print(person.get("email", "未設定"))  # デフォルト値

# 追加・更新
person["email"] = "alice@example.com"
person["age"] = 26

# 削除
del person["city"]
removed = person.pop("email")  # 取り出して返す`,
      },
      {
        heading: '辞書のループ処理',
        text: 'keys()・values()・items() でキーや値を取り出してループできます。',
        code: `person = {"name": "Alice", "age": 25, "city": "Tokyo"}

# キーだけ
for key in person:
    print(key)

# 値だけ
for val in person.values():
    print(val)

# キーと値を同時に
for key, val in person.items():
    print(f"{key}: {val}")

# 辞書内包表記
squares = {x: x**2 for x in range(5)}
# → {0:0, 1:1, 2:4, 3:9, 4:16}

# 値が偶数のものだけ
evens = {k: v for k, v in squares.items() if v % 2 == 0}`,
      },
      {
        heading: 'ネストした辞書',
        text: '辞書の中に辞書やリストを入れることで複雑なデータを表現できます。',
        code: `users = {
    "alice": {
        "age": 25,
        "scores": [85, 92, 78],
        "active": True
    },
    "bob": {
        "age": 30,
        "scores": [70, 88, 95],
        "active": False
    }
}

# アクセス
print(users["alice"]["age"])        # → 25
print(users["bob"]["scores"][0])    # → 70

# ネストしたデータのループ
for name, info in users.items():
    avg = sum(info["scores"]) / len(info["scores"])
    print(f"{name}: 平均 {avg:.1f}点")`,
      },
      {
        heading: '便利なメソッドとパターン',
        text: 'setdefault・update・辞書のマージなど実用的なテクニックです。',
        code: `# setdefault: キーがなければデフォルト値をセット
counts = {}
words = ["apple", "banana", "apple", "cherry"]
for word in words:
    counts.setdefault(word, 0)
    counts[word] += 1
print(counts)   # → {'apple':2, 'banana':1, 'cherry':1}

# もっとシンプルに: collections.Counter
from collections import Counter
counts = Counter(words)

# update: 辞書を結合（上書き）
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
d1.update(d2)
print(d1)   # → {'a':1, 'b':3, 'c':4}

# Python 3.9+ のマージ演算子
merged = d1 | d2   # 新しい辞書を返す`,
      },
    ],
  },
  {
    id: 'classes',
    title: 'クラスとオブジェクト',
    emoji: '🏗️',
    summary: 'データと処理をまとめる設計図',
    sections: [
      {
        heading: 'クラスの基本',
        text: 'クラスはデータ（属性）と処理（メソッド）をまとめた設計図です。インスタンスはその設計図から作られた実体です。',
        code: `class Dog:
    # __init__: インスタンス作成時に自動で呼ばれる
    def __init__(self, name, age):
        self.name = name   # インスタンス属性
        self.age = age

    def bark(self):
        print(f"{self.name}: ワン！")

    def info(self):
        print(f"{self.name}（{self.age}歳）")

# インスタンスを作成
dog1 = Dog("Pochi", 3)
dog2 = Dog("Hana", 5)

dog1.bark()    # → Pochi: ワン！
dog2.info()    # → Hana（5歳）
print(dog1.name)  # → Pochi`,
      },
      {
        heading: 'クラス変数とインスタンス変数',
        text: 'クラス変数はすべてのインスタンスで共有、インスタンス変数はインスタンスごとに異なります。',
        code: `class Counter:
    count = 0   # クラス変数（全インスタンス共有）

    def __init__(self, name):
        self.name = name     # インスタンス変数
        Counter.count += 1   # クラス変数を更新

    @classmethod
    def get_count(cls):      # クラスメソッド
        return cls.count

c1 = Counter("A")
c2 = Counter("B")
c3 = Counter("C")

print(Counter.get_count())  # → 3（全インスタンス数）
print(c1.name)              # → A（固有）`,
      },
      {
        heading: '継承',
        text: '既存のクラスの機能を引き継いで新しいクラスを作ります。コードの再利用に役立ちます。',
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name}が鳴く")

class Dog(Animal):   # Animal を継承
    def speak(self):    # メソッドを上書き（オーバーライド）
        print(f"{self.name}: ワン！")

class Cat(Animal):
    def speak(self):
        print(f"{self.name}: ニャー！")

animals = [Dog("Pochi"), Cat("Tama"), Dog("Koro")]
for animal in animals:
    animal.speak()   # 各クラスのspeakが呼ばれる

# super(): 親クラスのメソッドを呼ぶ
class Puppy(Dog):
    def __init__(self, name, owner):
        super().__init__(name)   # 親の__init__を呼ぶ
        self.owner = owner`,
      },
      {
        heading: '特殊メソッド（マジックメソッド）',
        text: '__xxx__ の形のメソッドで、Pythonの組み込み操作をカスタマイズできます。',
        code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):       # str() や print() で使われる
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):      # デバッグ用の表現
        return f"Vector(x={self.x}, y={self.y})"

    def __add__(self, other):  # + 演算子をカスタマイズ
        return Vector(self.x + other.x, self.y + other.y)

    def __len__(self):       # len() で使われる
        return 2

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1)           # → Vector(1, 2)
print(v1 + v2)      # → Vector(4, 6)
print(len(v1))      # → 2`,
      },
    ],
  },
  {
    id: 'errors',
    title: 'エラー処理',
    emoji: '🛡️',
    summary: 'エラーに備えて安全なコードを書く',
    sections: [
      {
        heading: 'エラーの種類',
        text: 'Pythonのエラーには「構文エラー」と「実行時エラー（例外）」の2種類があります。',
        code: `# SyntaxError: 構文エラー（実行前に検出）
# print("hello"   ← 括弧が閉じていない

# 主な実行時エラー（例外）
# NameError: 未定義の変数を使った
# print(undefined_var)

# TypeError: 型が合わない
# result = "text" + 5

# ValueError: 値が不正
# num = int("abc")

# IndexError: リストの範囲外
# lst = [1,2,3]; lst[10]

# KeyError: 辞書にないキー
# d = {}; d["missing"]

# ZeroDivisionError: ゼロ除算
# 10 / 0

# AttributeError: 属性がない
# "hello".nonexistent()`,
      },
      {
        heading: 'try-except の基本',
        text: 'エラーが起きる可能性のある処理を try で囲み、エラー時の処理を except に書きます。',
        code: `# 基本形
try:
    result = 10 / 0
except ZeroDivisionError:
    print("0で割れません")

# エラーオブジェクトを使う
try:
    num = int("abc")
except ValueError as e:
    print(f"エラー: {e}")

# 複数のエラーをキャッチ
try:
    lst = [1, 2, 3]
    print(lst[10])
except (IndexError, TypeError) as e:
    print(f"エラー: {type(e).__name__}: {e}")

# すべてのエラーをキャッチ（非推奨、デバッグ時のみ）
try:
    something_risky()
except Exception as e:
    print(f"予期しないエラー: {e}")`,
      },
      {
        heading: 'finally と else',
        text: 'finally はエラーの有無に関わらず実行、else はエラーがなかったときに実行されます。',
        code: `def read_file(filename):
    f = None
    try:
        f = open(filename)
        data = f.read()
    except FileNotFoundError:
        print(f"{filename} が見つかりません")
    except PermissionError:
        print("読み取り権限がありません")
    else:
        # エラーがなかったときだけ実行
        print(f"読み込み成功: {len(data)}文字")
        return data
    finally:
        # 必ず実行（ファイルを確実に閉じる）
        if f:
            f.close()
            print("ファイルを閉じました")`,
      },
      {
        heading: 'raise で例外を発生させる',
        text: '自分でエラーを発生させることで、不正な入力を検出できます。',
        code: `# 基本的な raise
def set_age(age):
    if not isinstance(age, int):
        raise TypeError("年齢は整数でなければなりません")
    if age < 0 or age > 150:
        raise ValueError(f"無効な年齢: {age}")
    return age

try:
    set_age(-1)
except ValueError as e:
    print(e)   # → 無効な年齢: -1

# カスタム例外クラスを作る
class InsufficientFundsError(Exception):
    def __init__(self, amount, balance):
        super().__init__(f"残高不足: 必要額 {amount}円, 残高 {balance}円")
        self.amount = amount
        self.balance = balance

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(amount, balance)
    return balance - amount`,
      },
    ],
  },
  {
    id: 'modules',
    title: 'モジュールとライブラリ',
    emoji: '📦',
    summary: '外部の機能を使いこなす',
    sections: [
      {
        heading: 'import の使い方',
        text: '標準ライブラリや外部パッケージを import して機能を使えます。',
        code: `# モジュール全体をインポート
import math
print(math.pi)           # → 3.14159...
print(math.sqrt(16))     # → 4.0

# 特定の関数だけインポート
from math import pi, sqrt, ceil
print(pi)                # → 3.14159...
print(sqrt(25))          # → 5.0

# エイリアス（別名）をつける
import math as m
from datetime import datetime as dt

print(m.floor(3.7))      # → 3
print(dt.now())          # 現在日時

# すべてインポート（非推奨）
# from math import *`,
      },
      {
        heading: 'よく使う標準ライブラリ',
        text: 'Pythonには豊富な標準ライブラリがあります。よく使うものを覚えておきましょう。',
        code: `# math: 数学関数
import math
math.sqrt(4)        # → 2.0
math.ceil(2.1)      # → 3（切り上げ）
math.floor(2.9)     # → 2（切り捨て）
math.log(100, 10)   # → 2.0（log10）

# random: 乱数
import random
random.random()          # 0.0〜1.0の乱数
random.randint(1, 6)     # サイコロ
random.choice(["A","B"]) # リストからランダム選択
random.shuffle([1,2,3])  # リストをシャッフル

# datetime: 日時
from datetime import datetime, date
now = datetime.now()
print(now.strftime("%Y年%m月%d日"))

# os: ファイル・ディレクトリ操作
import os
os.getcwd()          # 現在のディレクトリ
os.listdir(".")      # ファイル一覧`,
      },
      {
        heading: 'pip でパッケージをインストール',
        text: 'pip コマンドで外部パッケージをインストールできます。',
        code: `# ターミナルで実行（Pythonコードではない）
# pip install requests       HTTPリクエスト
# pip install pandas         データ分析
# pip install numpy          数値計算
# pip install matplotlib     グラフ描画
# pip install flask          Webフレームワーク

# インストール後はimportして使う
import requests

response = requests.get("https://api.example.com/data")
print(response.status_code)  # → 200
data = response.json()       # JSONをdictに変換

# よく使う外部パッケージ
# requests  → HTTPリクエスト
# pandas    → データ分析・CSV操作
# numpy     → 配列・数値計算
# pillow    → 画像処理
# selenium  → ブラウザ自動化`,
      },
    ],
  },
];
