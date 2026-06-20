import { JS_CHALLENGES } from './js_challenges.js';

export const CHALLENGES = {
  "JP": {
    "python": [
      {
        "id": "jp_py_d01",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "fill-blank",
        "title": "Emperor constitutional role: data-access",
        "description": "天皇の憲法上の地位を題材に、実行結果として「天皇は日本国と日本国民統合の象徴であるという憲法上の位置づけ」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_1 = {\"topic\": \"Emperor constitutional role\", \"note\": \"天皇は日本国と日本国民統合の象徴であるという憲法上の位置づけ\", \"country\": \"JP\"}\nlabel = record_1[___BLANK___]\nprint(label)",
        "blank": "\"note\"",
        "explanation": "空欄に \"note\" を入れると、天皇は日本国と日本国民統合の象徴であるという憲法上の位置づけに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"note\"",
        "completedCode": "record_1 = {\"topic\": \"Emperor constitutional role\", \"note\": \"天皇は日本国と日本国民統合の象徴であるという憲法上の位置づけ\", \"country\": \"JP\"}\nlabel = record_1[\"note\"]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_1 という辞書から「note」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "天皇は日本国と日本国民統合の象徴であるという憲法上の位置づけを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d02",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "National Diet two chambers: data-access",
        "description": "国会の二院制を題材に、実行結果として「国会が衆議院と参議院の二院で構成されること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_2 = [\"National Diet two chambers\", \"国会が衆議院と参議院の二院で構成されること\", \"JP\"]\nlabel = record_2[___BLANK___]\nprint(label)",
        "blank": "1",
        "explanation": "空欄に 1 を入れると、国会が衆議院と参議院の二院で構成されることに関するデータから目的の値を取り出せます。",
        "correctAnswer": "1",
        "completedCode": "record_2 = [\"National Diet two chambers\", \"国会が衆議院と参議院の二院で構成されること\", \"JP\"]\nlabel = record_2[1]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題はリスト（list）の添字（インデックス）アクセスを扱う問題です。record_2 というリストの1番目（0から数え始めるインデックス）の要素を取り出しています。リストは値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "国会が衆議院と参議院の二院で構成されることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d03",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "湯川秀樹とノーベル賞: タプルの分解",
        "description": "湯川秀樹とノーベル賞を題材に、実行結果として「Hideki Yukawa: 1949 Physics」が表示されるよう、空欄を埋めてください。",
        "hint": "右辺のタプルには3つの値があります。左辺にも同じ数の変数名を並べると、順番に値を受け取れます。",
        "code": "laureate = (\"Hideki Yukawa\", 1949, \"Physics\")\nname, year, field = ___BLANK___\nsummary = f\"{name}: {year} {field}\"\nprint(summary)",
        "blank": "laureate",
        "explanation": "空欄にはタプルそのものを表す laureate を入れます。左辺の name, year, field が、タプルの1番目、2番目、3番目の値を順番に受け取ります。",
        "correctAnswer": "laureate",
        "completedCode": "laureate = (\"Hideki Yukawa\", 1949, \"Physics\")\nname, year, field = laureate\nsummary = f\"{name}: {year} {field}\"\nprint(summary)",
        "executionSteps": [
          "1行目で、人物名・受賞年・分野を1つのタプル laureate にまとめます。",
          "2行目で name, year, field にタプルの値を左から順番に代入します。",
          "3行目で f-string を使い、3つの値を読みやすい文字列に整えます。",
          "4行目で完成した summary を表示します。"
        ],
        "commonMistakes": [
          "空欄に \"note\" を入れると辞書キーではないため、このコードの構造と合いません。",
          "name だけを書くと、3つの変数へ値を分解する右辺として不足します。",
          "タプルの要素数と左辺の変数数が合わないと、分解代入は失敗します。"
        ],
        "programmingExplanation": "この問題はタプルの分解代入（unpacking）を扱う問題です。laureate は3要素のタプルで、name, year, field という3つの変数に順番に代入されます。辞書のキーアクセスとは異なり、名前ではなく要素の並び順（位置）によって値が対応づけられる点がこの構文の特徴です。",
        "countryNote": "湯川秀樹は、日本人として初めてノーベル賞を受けた科学者として知られます。ここでは人物名、年、分野を分けて扱い、受賞情報のまとまりを読み取ります。"
      },
      {
        "id": "jp_py_d04",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "日章旗・日の丸: 文字列の比較",
        "description": "日章旗・日の丸を題材に、実行結果として「True」が表示されるよう、空欄を埋めてください。",
        "hint": "aliases は別名のリストです。ある文字列がリストに含まれるかを調べるには、in を使います。",
        "code": "official_name = \"日章旗\"\naliases = [\"日の丸\"]\nuses_alias = ___BLANK___ in aliases\nprint(uses_alias)",
        "blank": "\"日の丸\"",
        "explanation": "空欄には調べたい別名である \"日の丸\" を入れます。\"日の丸\" in aliases は、リスト aliases の中に同じ文字列があるかを調べ、True を返します。",
        "correctAnswer": "\"日の丸\"",
        "completedCode": "official_name = \"日章旗\"\naliases = [\"日の丸\"]\nuses_alias = \"日の丸\" in aliases\nprint(uses_alias)",
        "executionSteps": [
          "1行目で正式名称を official_name に入れます。",
          "2行目で別名の候補を aliases リストにまとめます。",
          "3行目で \"日の丸\" が aliases に含まれるかを in で判定します。",
          "4行目で判定結果 True を表示します。"
        ],
        "commonMistakes": [
          "空欄に note を入れる形ではなく、ここでは調べたい文字列そのものが必要です。",
          "日章旗を入れると aliases の中にはないため、この判定では False になります。",
          "in は部分一致ではなく、リストの要素として同じ値があるかを調べます。"
        ],
        "programmingExplanation": "この問題は「in」演算子によるメンバーシップ判定（値がコレクションに含まれているかどうかの判定）を扱う問題です。\"日の丸\" は、指定した値がリストの要素として存在するかどうかを調べ、真偽値を返します。値が完全に一致する要素があるかどうかを確認する処理であり、部分一致では判定されない点に注意が必要です。",
        "countryNote": "日章旗は日本の国旗の正式名称で、一般には日の丸とも呼ばれます。正式名称と通称を分けて見ると、同じ対象に複数の呼び方があることを整理できます。"
      },
      {
        "id": "jp_py_d05",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "fill-blank",
        "title": "47 prefectures: data-access",
        "description": "47都道府県を題材に、実行結果として「47 prefectures」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_5 = {\"topic\": \"47 prefectures\", \"country\": \"JP\", \"active\": True}\nif record_5[\"active\"] and record_5[\"country\"] == \"JP\":\n    print(record_5[___BLANK___])",
        "blank": "\"topic\"",
        "explanation": "空欄に \"topic\" を入れると、日本に47都道府県があることに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"topic\"",
        "completedCode": "record_5 = {\"topic\": \"47 prefectures\", \"country\": \"JP\", \"active\": True}\nif record_5[\"active\"] and record_5[\"country\"] == \"JP\":\n    print(record_5[\"topic\"])",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_5 という辞書から「topic」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "日本に47都道府県があることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d06",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "one-yen coin: data-access",
        "description": "一円硬貨を題材に、実行結果として「一円硬貨の額面が1円であること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_6 = {\"topic\": \"one-yen coin\", \"note\": \"一円硬貨の額面が1円であること\", \"country\": \"JP\"}\nlabel = record_6[___BLANK___]\nprint(label)",
        "blank": "\"note\"",
        "explanation": "空欄に \"note\" を入れると、一円硬貨の額面が1円であることに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"note\"",
        "completedCode": "record_6 = {\"topic\": \"one-yen coin\", \"note\": \"一円硬貨の額面が1円であること\", \"country\": \"JP\"}\nlabel = record_6[\"note\"]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_6 という辞書から「note」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "一円硬貨の額面が1円であることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d07",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Tokaido Shinkansen 1964: data-access",
        "description": "東海道新幹線を題材に、実行結果として「東海道新幹線が1964年に開業したこと」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_7 = {\"topic\": \"Tokaido Shinkansen 1964\", \"note\": \"東海道新幹線が1964年に開業したこと\", \"country\": \"JP\"}\nlabel = record_7[___BLANK___]\nprint(label)",
        "blank": "\"note\"",
        "explanation": "空欄に \"note\" を入れると、東海道新幹線が1964年に開業したことに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"note\"",
        "completedCode": "record_7 = {\"topic\": \"Tokaido Shinkansen 1964\", \"note\": \"東海道新幹線が1964年に開業したこと\", \"country\": \"JP\"}\nlabel = record_7[\"note\"]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_7 という辞書から「note」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "東海道新幹線が1964年に開業したことを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d08",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "QR Code: data-access",
        "description": "QRを題材に、実行結果として「QRコードが日本で開発された二次元コードであること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_8 = {\"topic\": \"QR Code\", \"note\": \"QRコードが日本で開発された二次元コードであること\", \"country\": \"JP\"}\nlabel = record_8[___BLANK___]\nprint(label)",
        "blank": "\"note\"",
        "explanation": "空欄に \"note\" を入れると、QRコードが日本で開発された二次元コードであることに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"note\"",
        "completedCode": "record_8 = {\"topic\": \"QR Code\", \"note\": \"QRコードが日本で開発された二次元コードであること\", \"country\": \"JP\"}\nlabel = record_8[\"note\"]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_8 という辞書から「note」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "QRコードが日本で開発された二次元コードであることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d09",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "Horyu-ji World Heritage: data-access",
        "description": "法隆寺地域の仏教建造物を題材に、実行結果として「法隆寺地域の仏教建造物が世界遺産であること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_9 = [\"Horyu-ji World Heritage\", \"法隆寺地域の仏教建造物が世界遺産であること\", \"JP\"]\nlabel = record_9[___BLANK___]\nprint(label)",
        "blank": "1",
        "explanation": "空欄に 1 を入れると、法隆寺地域の仏教建造物が世界遺産であることに関するデータから目的の値を取り出せます。",
        "correctAnswer": "1",
        "completedCode": "record_9 = [\"Horyu-ji World Heritage\", \"法隆寺地域の仏教建造物が世界遺産であること\", \"JP\"]\nlabel = record_9[1]\nprint(label)",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題はリスト（list）の添字（インデックス）アクセスを扱う問題です。record_9 というリストの1番目（0から数え始めるインデックス）の要素を取り出しています。リストは値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "法隆寺地域の仏教建造物が世界遺産であることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_d10",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "fill-blank",
        "title": "sakura as cultural symbol, not statutory national flower: data-access",
        "description": "桜の文化的象徴性を題材に、実行結果として「sakura as cultural symbol, not statutory national flower」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、どのキーまたは添字を使えば topic/note が取り出せるか確認します。",
        "code": "record_10 = {\"topic\": \"sakura as cultural symbol, not statutory national flower\", \"country\": \"JP\", \"active\": True}\nif record_10[\"active\"] and record_10[\"country\"] == \"JP\":\n    print(record_10[___BLANK___])",
        "blank": "\"topic\"",
        "explanation": "空欄に \"topic\" を入れると、桜は文化的象徴として親しまれるが法定の国花ではないことに関するデータから目的の値を取り出せます。",
        "correctAnswer": "\"topic\"",
        "completedCode": "record_10 = {\"topic\": \"sakura as cultural symbol, not statutory national flower\", \"country\": \"JP\", \"active\": True}\nif record_10[\"active\"] and record_10[\"country\"] == \"JP\":\n    print(record_10[\"topic\"])",
        "executionSteps": [
          "データ構造に国別の事実を入れる。",
          "空欄に正しいキーまたは添字を入れて値を取り出す。",
          "print で取り出した値を表示する。"
        ],
        "commonMistakes": [
          "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
          "文字列キーは引用符を含めて書きます。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record_10 という辞書から「topic」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "桜は文化的象徴として親しまれるが法定の国花ではないことを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ],
    "javascript": [
      {
        "id": "jp_js_d01",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "fill-blank",
        "title": "Kimigayo national anthem: property-or-index",
        "description": "君が代を題材に、実行結果として「君が代が日本の国歌であること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const record = { topic: \"Kimigayo national anthem\", note: \"君が代が日本の国歌であること\", country: \"JP\" };\nconst label = record.___BLANK___;\nconsole.log(label);",
        "blank": "note",
        "explanation": "空欄に note を入れると、君が代が日本の国歌であることに関する値が表示されます。",
        "correctAnswer": "note",
        "completedCode": "const record = { topic: \"Kimigayo national anthem\", note: \"君が代が日本の国歌であること\", country: \"JP\" };\nconst label = record.note;\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「note」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
        "countryNote": "君が代が日本の国歌であることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d02",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "fill-blank",
        "title": "blue LED Nobel laureates: property-or-index",
        "description": "青色LEDとノーベル賞を題材に、実行結果として「青色LEDで赤崎勇・天野浩・中村修二がノーベル物理学賞を受けたこと」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const records = [\"blue LED Nobel laureates\", \"青色LEDで赤崎勇・天野浩・中村修二がノーベル物理学賞を受けたこと\", \"JP\"];\nconst label = records[___BLANK___];\nconsole.log(label);",
        "blank": "1",
        "explanation": "空欄に 1 を入れると、青色LEDで赤崎勇・天野浩・中村修二がノーベル物理学賞を受けたことに関する値が表示されます。",
        "correctAnswer": "1",
        "completedCode": "const records = [\"blue LED Nobel laureates\", \"青色LEDで赤崎勇・天野浩・中村修二がノーベル物理学賞を受けたこと\", \"JP\"];\nconst label = records[1];\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は配列（array）の添字（インデックス）アクセスを扱う問題です。records という配列の1番目（0から数え始めるインデックス）の要素を取り出しています。配列は値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "青色LEDで赤崎勇・天野浩・中村修二がノーベル物理学賞を受けたことを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d03",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Akira Yoshino and lithium-ion battery: property-or-index",
        "description": "吉野彰とリチウムイオン電池を題材に、実行結果として「Akira Yoshino and lithium-ion battery」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const topic = \"Akira Yoshino and lithium-ion battery\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? ___BLANK___ : \"skip\";\nconsole.log(label);",
        "blank": "topic",
        "explanation": "空欄に topic を入れると、吉野彰とリチウムイオン電池の研究に関する値が表示されます。",
        "correctAnswer": "topic",
        "completedCode": "const topic = \"Akira Yoshino and lithium-ion battery\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? topic : \"skip\";\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに topic が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。",
        "countryNote": "吉野彰とリチウムイオン電池の研究を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d04",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "fill-blank",
        "title": "Shinya Yamanaka and iPS cells: property-or-index",
        "description": "山中伸弥とiPS細胞を題材に、実行結果として「山中伸弥とiPS細胞の研究」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const record = { topic: \"Shinya Yamanaka and iPS cells\", note: \"山中伸弥とiPS細胞の研究\", country: \"JP\" };\nconst label = record.___BLANK___;\nconsole.log(label);",
        "blank": "note",
        "explanation": "空欄に note を入れると、山中伸弥とiPS細胞の研究に関する値が表示されます。",
        "correctAnswer": "note",
        "completedCode": "const record = { topic: \"Shinya Yamanaka and iPS cells\", note: \"山中伸弥とiPS細胞の研究\", country: \"JP\" };\nconst label = record.note;\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「note」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
        "countryNote": "山中伸弥とiPS細胞の研究を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d05",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Himeji Castle and Shirasagi-jo nickname: property-or-index",
        "description": "姫路城と白鷺城を題材に、実行結果として「Himeji Castle and Shirasagi-jo nickname」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const topic = \"Himeji Castle and Shirasagi-jo nickname\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? ___BLANK___ : \"skip\";\nconsole.log(label);",
        "blank": "topic",
        "explanation": "空欄に topic を入れると、姫路城が白鷺城の愛称で知られることに関する値が表示されます。",
        "correctAnswer": "topic",
        "completedCode": "const topic = \"Himeji Castle and Shirasagi-jo nickname\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? topic : \"skip\";\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに topic が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。",
        "countryNote": "姫路城が白鷺城の愛称で知られることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d06",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Mount Fuji elevation/context: property-or-index",
        "description": "富士山を題材に、実行結果として「Mount Fuji elevation/context」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const topic = \"Mount Fuji elevation/context\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? ___BLANK___ : \"skip\";\nconsole.log(label);",
        "blank": "topic",
        "explanation": "空欄に topic を入れると、富士山の標高が3776mとして知られることに関する値が表示されます。",
        "correctAnswer": "topic",
        "completedCode": "const topic = \"Mount Fuji elevation/context\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? topic : \"skip\";\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに topic が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。",
        "countryNote": "富士山の標高が3776mとして知られることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d07",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Francis Xavier arrival in Japan: property-or-index",
        "description": "フランシスコ・ザビエル来日を題材に、実行結果として「Francis Xavier arrival in Japan」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const topic = \"Francis Xavier arrival in Japan\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? ___BLANK___ : \"skip\";\nconsole.log(label);",
        "blank": "topic",
        "explanation": "空欄に topic を入れると、フランシスコ・ザビエルが1549年に日本へ来たことに関する値が表示されます。",
        "correctAnswer": "topic",
        "completedCode": "const topic = \"Francis Xavier arrival in Japan\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? topic : \"skip\";\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに topic が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。",
        "countryNote": "フランシスコ・ザビエルが1549年に日本へ来たことを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d08",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "fill-blank",
        "title": "William Adams arrival in Japan: property-or-index",
        "description": "ウィリアム・アダムス来航を題材に、実行結果として「ウィリアム・アダムスが日本に来航したこと」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const record = { topic: \"William Adams arrival in Japan\", note: \"ウィリアム・アダムスが日本に来航したこと\", country: \"JP\" };\nconst label = record.___BLANK___;\nconsole.log(label);",
        "blank": "note",
        "explanation": "空欄に note を入れると、ウィリアム・アダムスが日本に来航したことに関する値が表示されます。",
        "correctAnswer": "note",
        "completedCode": "const record = { topic: \"William Adams arrival in Japan\", note: \"ウィリアム・アダムスが日本に来航したこと\", country: \"JP\" };\nconst label = record.note;\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「note」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
        "countryNote": "ウィリアム・アダムスが日本に来航したことを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d09",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "fill-blank",
        "title": "Murasaki Shikibu and The Tale of Genji: property-or-index",
        "description": "紫式部と源氏物語を題材に、実行結果として「Murasaki Shikibu and The Tale of Genji」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const topic = \"Murasaki Shikibu and The Tale of Genji\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? ___BLANK___ : \"skip\";\nconsole.log(label);",
        "blank": "topic",
        "explanation": "空欄に topic を入れると、紫式部と源氏物語に関する値が表示されます。",
        "correctAnswer": "topic",
        "completedCode": "const topic = \"Murasaki Shikibu and The Tale of Genji\";\nconst country = \"JP\";\nconst label = country === \"JP\" ? topic : \"skip\";\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに topic が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。",
        "countryNote": "紫式部と源氏物語を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_d10",
        "worldId": "decode",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "fill-blank",
        "title": "Kabuki theatre: property-or-index",
        "description": "歌舞伎を題材に、実行結果として「歌舞伎が日本の伝統芸能であること」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の直前がドットならプロパティ名、角かっこなら添字を入れます。",
        "code": "const records = [\"Kabuki theatre\", \"歌舞伎が日本の伝統芸能であること\", \"JP\"];\nconst label = records[___BLANK___];\nconsole.log(label);",
        "blank": "1",
        "explanation": "空欄に 1 を入れると、歌舞伎が日本の伝統芸能であることに関する値が表示されます。",
        "correctAnswer": "1",
        "completedCode": "const records = [\"Kabuki theatre\", \"歌舞伎が日本の伝統芸能であること\", \"JP\"];\nconst label = records[1];\nconsole.log(label);",
        "executionSteps": [
          "国別の事実を object または array に入れる。",
          "条件や参照位置を確認する。",
          "空欄を補って目的の値を表示する。"
        ],
        "commonMistakes": [
          "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
          "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
        ],
        "programmingExplanation": "この問題は配列（array）の添字（インデックス）アクセスを扱う問題です。records という配列の1番目（0から数え始めるインデックス）の要素を取り出しています。配列は値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "歌舞伎が日本の伝統芸能であることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ]
  },
  "US": {
    "python": [
      {
        "id": "us_py_1",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "fill-blank",
        "title": "three federal branches/checks-balances: DECODE",
        "description": "アメリカ連邦政府の三権を題材に、実行結果として「3」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく \"value\" の形で式を完成させます。",
        "code": "record = {\"topic\": \"three federal branches/checks-balances\", \"value\": 3, \"source\": \"official\"}\nanswer = record[___BLANK___]\nprint(answer)",
        "blank": "\"value\"",
        "explanation": "\"value\" を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "\"value\"",
        "completedCode": "record = {\"topic\": \"three federal branches/checks-balances\", \"value\": 3, \"source\": \"official\"}\nanswer = record[\"value\"]\nprint(answer)",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に \"value\" を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている \"value\" を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record という辞書から「value」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "three federal branches/checks-balances は Branches of the U.S. government（USAGov） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Branches of the U.S. government",
            "organization": "USAGov",
            "url": "https://www.usa.gov/branches-of-government"
          }
        ],
        "factIds": [
          "fact_us_federal_branches"
        ],
        "entityKeys": [
          "us:federal_branches"
        ]
      },
      {
        "id": "us_py_2",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "United States Senate composition: DECODE",
        "description": "アメリカ上院を題材に、実行結果として「100」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく len(items) の形で式を完成させます。",
        "code": "items = [\"Senate\", \"House of Representatives\"]\ntotal = ___BLANK___ * 50\nprint(total)",
        "blank": "len(items)",
        "explanation": "len(items) を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "len(items)",
        "completedCode": "items = [\"Senate\", \"House of Representatives\"]\ntotal = len(items) * 50\nprint(total)",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に len(items) を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている len(items) を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は組み込み関数 len() でリストの要素数を数え、それを使って計算する問題です。len(items) はリスト items に含まれる要素の個数を返す整数値で、これに50を掛けることで合計を求めています。",
        "countryNote": "United States Senate composition は Senators（United States Senate） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Senators",
            "organization": "United States Senate",
            "url": "https://www.senate.gov/senators/"
          }
        ],
        "factIds": [
          "fact_us_senate_composition"
        ],
        "entityKeys": [
          "us:senate_composition"
        ]
      },
      {
        "id": "us_py_3",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "fill-blank",
        "title": "United States flag stars/stripes: DECODE",
        "description": "アメリカ国旗を題材に、実行結果として「50」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく \"stars\" の形で式を完成させます。",
        "code": "flag = {\"stars\": 50, \"stripes\": 13}\nprint(flag[___BLANK___])",
        "blank": "\"stars\"",
        "explanation": "\"stars\" を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "\"stars\"",
        "completedCode": "flag = {\"stars\": 50, \"stripes\": 13}\nprint(flag[\"stars\"])",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に \"stars\" を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている \"stars\" を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。flag という辞書から「stars」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
        "countryNote": "United States flag stars/stripes は The American flag（USAGov） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "The American flag",
            "organization": "USAGov",
            "url": "https://www.usa.gov/flag"
          }
        ],
        "factIds": [
          "fact_us_flag_stars_stripes"
        ],
        "entityKeys": [
          "us:flag_stars_stripes"
        ]
      },
      {
        "id": "us_py_4",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "bald eagle national symbol: DECODE",
        "description": "ハクトウワシを題材に、実行結果として「True」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく \"bald eagle\" in symbols の形で式を完成させます。",
        "code": "symbols = [\"bald eagle\", \"rose\", \"oak\"]\nprint(___BLANK___)",
        "blank": "\"bald eagle\" in symbols",
        "explanation": "\"bald eagle\" in symbols を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "\"bald eagle\" in symbols",
        "completedCode": "symbols = [\"bald eagle\", \"rose\", \"oak\"]\nprint(\"bald eagle\" in symbols)",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に \"bald eagle\" in symbols を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている \"bald eagle\" in symbols を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は「in」演算子によるメンバーシップ判定を扱う問題です。\"bald eagle\" in symbols は、指定した文字列がリスト symbols の要素として存在するかどうかを調べ、真偽値を返します。",
        "countryNote": "bald eagle national symbol は Bald Eagle（National Park Service） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Bald Eagle",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/articles/bald-eagle.htm"
          }
        ],
        "factIds": [
          "fact_us_bald_eagle_symbol"
        ],
        "entityKeys": [
          "us:bald_eagle_symbol"
        ]
      },
      {
        "id": "us_py_5",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "Yellowstone establishment/first-national-park scope: DECODE",
        "description": "イエローストーン国立公園を題材に、実行結果として「Yellowstone: 1872」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく name, year, note の形で式を完成させます。",
        "code": "yellowstone = (\"Yellowstone\", 1872, \"first national park\")\n___BLANK___ = yellowstone\nprint(f\"{name}: {year}\")",
        "blank": "name, year, note",
        "explanation": "name, year, note を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "name, year, note",
        "completedCode": "yellowstone = (\"Yellowstone\", 1872, \"first national park\")\nname, year, note = yellowstone\nprint(f\"{name}: {year}\")",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に name, year, note を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている name, year, note を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題はタプルの分解代入を扱う問題です。yellowstone という3要素のタプルを、name, year, note という3つの変数に一度に分解して代入しています。要素の数と変数の数が一致している必要がある点に注意してください。",
        "countryNote": "Yellowstone establishment/first-national-park scope は Yellowstone History（National Park Service） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Yellowstone History",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/yell/learn/historyculture/index.htm"
          }
        ],
        "factIds": [
          "fact_us_yellowstone_establishment"
        ],
        "entityKeys": [
          "us:yellowstone_establishment"
        ]
      },
      {
        "id": "us_py_6",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "fill-blank",
        "title": "Independence Hall founding documents: DECODE",
        "description": "独立記念館を題材に、実行結果として「U.S. Constitution」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく 1 の形で式を完成させます。",
        "code": "documents = [\"Declaration of Independence\", \"U.S. Constitution\", \"Bill of Rights\"]\nprint(documents[___BLANK___])",
        "blank": "1",
        "explanation": "1 を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "1",
        "completedCode": "documents = [\"Declaration of Independence\", \"U.S. Constitution\", \"Bill of Rights\"]\nprint(documents[1])",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に 1 を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている 1 を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題はリスト（list）の添字（インデックス）アクセスを扱う問題です。documents というリストの1番目（0から数え始めるインデックス）の要素を取り出しています。リストは値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "Independence Hall founding documents は Independence Hall（National Park Service） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Independence Hall",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/inde/learn/historyculture/places-independencehall.htm"
          }
        ],
        "factIds": [
          "fact_us_independence_hall_documents"
        ],
        "entityKeys": [
          "us:independence_hall_documents"
        ]
      },
      {
        "id": "us_py_7",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "fill-blank",
        "title": "Apollo 11 mission and crew: DECODE",
        "description": "アポロ11号を題材に、実行結果として「Apollo 11: Neil Armstrong」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく crew[0] の形で式を完成させます。",
        "code": "mission = \"Apollo 11\"\ncrew = [\"Neil Armstrong\", \"Buzz Aldrin\", \"Michael Collins\"]\nprint(f\"{mission}: {___BLANK___}\")",
        "blank": "crew[0]",
        "explanation": "crew[0] を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "crew[0]",
        "completedCode": "mission = \"Apollo 11\"\ncrew = [\"Neil Armstrong\", \"Buzz Aldrin\", \"Michael Collins\"]\nprint(f\"{mission}: {crew[0]}\")",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に crew[0] を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている crew[0] を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題はリストの添字（インデックス）アクセスを扱う問題です。crew[0] は、リスト crew の0番目（最初）の要素を取り出しています。",
        "countryNote": "Apollo 11 mission and crew は Apollo 11 Mission Overview（NASA） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Apollo 11 Mission Overview",
            "organization": "NASA",
            "url": "https://www.nasa.gov/history/apollo-11-mission-overview/"
          }
        ],
        "factIds": [
          "fact_us_apollo11_crew"
        ],
        "entityKeys": [
          "us:apollo11_crew"
        ]
      },
      {
        "id": "us_py_8",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "fill-blank",
        "title": "Mark Twain/Huckleberry Finn: DECODE",
        "description": "マーク・トウェインを題材に、実行結果として「Adventures of Huckleberry Finn」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく record[\"work\"] の形で式を完成させます。",
        "code": "record = {\"author\": \"Mark Twain\", \"work\": \"Adventures of Huckleberry Finn\"}\nprint(___BLANK___)",
        "blank": "record[\"work\"]",
        "explanation": "record[\"work\"] を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "record[\"work\"]",
        "completedCode": "record = {\"author\": \"Mark Twain\", \"work\": \"Adventures of Huckleberry Finn\"}\nprint(record[\"work\"])",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に record[\"work\"] を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている record[\"work\"] を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は辞書のキーアクセスを扱う問題です。record[\"work\"] は、辞書 record から「work」というキーに対応する値を取り出しています。",
        "countryNote": "Mark Twain/Huckleberry Finn は Mark Twain authority record（Library of Congress） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Mark Twain authority record",
            "organization": "Library of Congress",
            "url": "https://www.loc.gov/item/n50034943/"
          }
        ],
        "factIds": [
          "fact_us_mark_twain_huck_finn"
        ],
        "entityKeys": [
          "us:mark_twain_huck_finn"
        ]
      },
      {
        "id": "us_py_9",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "fill-blank",
        "title": "Mississippi River geography: DECODE",
        "description": "ミシシッピ川を題材に、実行結果として「True」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく >= の形で式を完成させます。",
        "code": "length_miles = 2300\nprint(length_miles ___BLANK___ 2000)",
        "blank": ">=",
        "explanation": ">= を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": ">=",
        "completedCode": "length_miles = 2300\nprint(length_miles >= 2000)",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に >= を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている >= を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題は比較演算子を使って条件を判定する問題です。>= は左の値が右の値以上であるかどうかを判定し、真偽値を返します。比較演算子の種類（>、<、>=、<=、==、!=）によって判定の境界条件が変わるため、どの演算子が適切かを正確に選ぶ必要があります。",
        "countryNote": "Mississippi River geography は Mississippi River（U.S. Geological Survey） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Mississippi River",
            "organization": "U.S. Geological Survey",
            "url": "https://www.usgs.gov/special-topics/water-science-school/science/mississippi-river"
          }
        ],
        "factIds": [
          "fact_us_mississippi_river_length"
        ],
        "entityKeys": [
          "us:mississippi_river_length"
        ]
      },
      {
        "id": "us_py_10",
        "worldId": "decode",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "fill-blank",
        "title": "Route 66 establishment/route: DECODE",
        "description": "ルート66を題材に、実行結果として「Route 66」が表示されるよう、空欄を埋めてください。",
        "hint": "空欄の前後を見て、値ではなく 0:8 の形で式を完成させます。",
        "code": "route = \"Route 66: Chicago to Santa Monica\"\nprint(route[___BLANK___])",
        "blank": "0:8",
        "explanation": "0:8 を入れると、コード内の米国データから目的の値を作れます。",
        "correctAnswer": "0:8",
        "completedCode": "route = \"Route 66: Chicago to Santa Monica\"\nprint(route[0:8])",
        "executionSteps": [
          "コード内の米国データを読む。",
          "空欄に 0:8 を入れる。",
          "最後の出力を確認する。"
        ],
        "commonMistakes": [
          "空欄や選択肢には、事実名そのものではなくコードが必要としている 0:8 を選びます。",
          "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
        ],
        "programmingExplanation": "この問題はリスト（list）の添字（インデックス）アクセスを扱う問題です。route というリストの0:8番目（0から数え始めるインデックス）の要素を取り出しています。リストは値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。",
        "countryNote": "Route 66 establishment/route は Route 66（National Park Service） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
        "sourceRefs": [
          {
            "title": "Route 66",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/subjects/travelroute66/index.htm"
          }
        ],
        "factIds": [
          "fact_us_route66_route"
        ],
        "entityKeys": [
          "us:route66_route"
        ]
      }
    ]
  },
  "FR": {
    "python": [
      {
        "id": "fr_py_1",
        "title": "for ループを使おう",
        "description": "パリのランドマークをリストから順に表示してください。",
        "code": "landmarks = [\"Eiffel Tower\", \"Louvre\", \"Notre-Dame\"]\n___BLANK___ place in landmarks:\n    print(place)",
        "blank": "for",
        "hint": "リストを繰り返し処理するには for を使います",
        "explanation": "for文はリストの要素を1つずつ取り出して処理します。in の右側にリストを書きます。"
      },
      {
        "id": "fr_py_2",
        "title": "range() を使おう",
        "description": "1から5まで数字を表示してください。",
        "code": "for i in ___BLANK___(1, 6):\n    print(i)",
        "blank": "range",
        "hint": "range(start, stop) で数の連続を作れます",
        "explanation": "range(1, 6) は 1, 2, 3, 4, 5 を生成します。終了値は含まれないので注意！"
      },
      {
        "id": "fr_py_3",
        "title": "while ループを使おう",
        "description": "カウントが5未満の間、カウントを表示してください。",
        "code": "count = 0\n___BLANK___ count < 5:\n    print(count)\n    count += 1",
        "blank": "while",
        "hint": "条件が True の間繰り返すには while を使います",
        "explanation": "while文は条件が True の間ずっと繰り返します。無限ループに注意して必ず終了条件を作りましょう。"
      },
      {
        "id": "fr_py_4",
        "title": "break でループを抜けよう",
        "description": "i が3になったらループを終了してください。",
        "code": "for i in range(10):\n    if i == 3:\n        ___BLANK___\n    print(i)",
        "blank": "break",
        "hint": "ループを途中で終了するには break を使います",
        "explanation": "break はループをその時点で終了します。0, 1, 2 が表示されて3で止まります。"
      },
      {
        "id": "fr_py_5",
        "title": "continue でスキップしよう",
        "description": "偶数のときだけスキップして奇数のみ表示してください。",
        "code": "for i in range(6):\n    if i % 2 == 0:\n        ___BLANK___\n    print(i)",
        "blank": "continue",
        "hint": "その回だけスキップするには continue を使います",
        "explanation": "continue はその回の処理をスキップして次の繰り返しへ進みます。1, 3, 5 が表示されます。"
      },
      {
        "id": "fr_py_6",
        "title": "ループで合計を計算しよう",
        "description": "1から10の合計を求めてください。",
        "code": "total = 0\nfor i in range(1, 11):\n    total ___BLANK___ i\nprint(total)",
        "blank": "+=",
        "hint": "+= は「今の値に足す」という意味です",
        "explanation": "total += i は total = total + i と同じです。ループで累積計算するときによく使います。"
      }
    ],
    "javascript": [
      {
        "id": "fr_js_1",
        "title": "for ループを使おう",
        "description": "0から4まで数値を出力するforループを完成させてください。",
        "code": "for (___BLANK___ i = 0; i < 5; i++) {\n  console.log(i);\n}",
        "blank": "let",
        "hint": "forループの変数宣言には let を使います",
        "explanation": "for (初期化; 条件; 更新) の形で繰り返しを制御します。i++ は i を1増やすという意味です。"
      },
      {
        "id": "fr_js_2",
        "title": "while ループを使おう",
        "description": "count が 3 未満の間ループしてください。",
        "code": "let count = 0;\n___BLANK___ (count < 3) {\n  console.log(count);\n  count++;\n}",
        "blank": "while",
        "hint": "while (条件) {} の形で書きます",
        "explanation": "while は条件が true の間ループします。必ず終了条件を設けないと無限ループになります。"
      },
      {
        "id": "fr_js_3",
        "title": "for...of で配列を繰り返そう",
        "description": "配列の各要素を取り出してログに表示してください。",
        "code": "const cities = [\"Paris\", \"Lyon\", \"Marseille\"];\nfor (const city ___BLANK___ cities) {\n  console.log(city);\n}",
        "blank": "of",
        "hint": "for (const item of 配列) で要素を取り出せます",
        "explanation": "for...of は配列の各要素を順番に取り出します。インデックス番号が不要なときに便利です。"
      },
      {
        "id": "fr_js_4",
        "title": "for...in でオブジェクトを繰り返そう",
        "description": "オブジェクトのキーを順番に取り出してください。",
        "code": "const france = { capital: \"Paris\", pop: 68 };\nfor (const key ___BLANK___ france) {\n  console.log(key);\n}",
        "blank": "in",
        "hint": "for (const key in オブジェクト) でキーを取り出せます",
        "explanation": "for...in はオブジェクトのキーを取り出します。値が欲しいときは obj[key] でアクセスします。"
      },
      {
        "id": "fr_js_5",
        "title": "break でループを抜けよう",
        "description": "5が見つかったらループを終了してください。",
        "code": "const nums = [1, 3, 5, 7, 9];\nfor (const n of nums) {\n  if (n === 5) ___BLANK___;\n  console.log(n);\n}",
        "blank": "break",
        "hint": "ループを即座に終了するキーワードは？",
        "explanation": "break でループから即座に抜け出せます。continue は現在の繰り返しをスキップして次へ進みます。"
      },
      {
        "id": "fr_js_6",
        "title": "forEach で配列を処理しよう",
        "description": "配列の各要素に対してコールバック関数を実行してください。",
        "code": "const nums = [1, 2, 3];\nnums.___BLANK___((n) => {\n  console.log(n * 2);\n});",
        "blank": "forEach",
        "hint": "配列のメソッドで各要素に関数を適用するのは？",
        "explanation": "forEach は配列の全要素に対してコールバック関数を実行します。戻り値はなく、副作用（表示など）に使います。"
      }
    ]
  },
  "BR": {
    "python": [
      {
        "id": "br_py_1",
        "title": "リストを作ろう",
        "description": "ブラジルの都市を3つ含むリスト cities を作ってください。",
        "code": "cities = ___BLANK___\"Sao Paulo\", \"Rio\", \"Brasilia\"___BLANK___\nprint(cities)",
        "blank": "[",
        "hint": "リストは [ ] で作ります",
        "explanation": "リストは [ ] の中にカンマ区切りで値を並べます。文字列・数値・混在も可能です。"
      },
      {
        "id": "br_py_2",
        "title": "インデックスでアクセスしよう",
        "description": "リストの最初の要素を表示してください。インデックスは0から始まります。",
        "code": "fruits = [\"mango\", \"papaya\", \"guava\"]\nprint(fruits[___BLANK___])",
        "blank": "0",
        "hint": "リストの最初の要素のインデックスは 0 です",
        "explanation": "Pythonのインデックスは0から始まります。fruits[0] が最初、fruits[1] が2番目です。"
      },
      {
        "id": "br_py_3",
        "title": "末尾に要素を追加しよう",
        "description": "リストに \"Manaus\" を追加してください。",
        "code": "cities = [\"Sao Paulo\", \"Rio\"]\ncities.___BLANK___(\"Manaus\")\nprint(cities)",
        "blank": "append",
        "hint": "末尾への追加は append() メソッドを使います",
        "explanation": "append() はリストの末尾に要素を追加します。cities.append(\"Manaus\") で3要素になります。"
      },
      {
        "id": "br_py_4",
        "title": "リストの長さを取得しよう",
        "description": "リストの要素数を取得して表示してください。",
        "code": "scores = [85, 92, 78, 95, 88]\nprint(___BLANK___(scores))",
        "blank": "len",
        "hint": "リストの長さは len() 関数で取得します",
        "explanation": "len() 関数はリストの要素数を返します。scores は5要素なので 5 が表示されます。"
      },
      {
        "id": "br_py_5",
        "title": "リストの要素を削除しよう",
        "description": "リストから \"Rio\" を削除してください。",
        "code": "cities = [\"Sao Paulo\", \"Rio\", \"Brasilia\"]\ncities.___BLANK___(\"Rio\")\nprint(cities)",
        "blank": "remove",
        "hint": "値を指定して削除するには remove() を使います",
        "explanation": "remove() は指定した値を検索して削除します。同じ値が複数あれば最初の1つだけ削除されます。"
      },
      {
        "id": "br_py_6",
        "title": "リストをソートしよう",
        "description": "数値のリストを昇順に並び替えてください。",
        "code": "numbers = [42, 7, 19, 3, 88]\nnumbers.___BLANK___()",
        "blank": "sort",
        "hint": "リストを並び替えるには sort() メソッドを使います",
        "explanation": "sort() はリストを昇順（小さい順）に並び替えます。降順にするには sort(reverse=True) です。"
      }
    ],
    "javascript": [
      {
        "id": "br_js_1",
        "title": "配列を作ろう",
        "description": "ブラジルの都市を配列に格納してください。",
        "code": "const cities = ___BLANK___\"Sao Paulo\", \"Rio\", \"Brasilia\"___BLANK___;\nconsole.log(cities);",
        "blank": "[",
        "hint": "配列は [ ] で作ります",
        "explanation": "配列は [ ] で作ります。複数の値をまとめて管理でき、インデックス（0始まり）でアクセスします。"
      },
      {
        "id": "br_js_2",
        "title": "要素を追加しよう (push)",
        "description": "配列の末尾に \"Manaus\" を追加してください。",
        "code": "const cities = [\"Sao Paulo\", \"Rio\"];\ncities.___BLANK___(\"Manaus\");\nconsole.log(cities);",
        "blank": "push",
        "hint": "末尾に追加するメソッドは push",
        "explanation": "push() で配列の末尾に要素を追加します。unshift() は先頭に追加、pop() は末尾を削除します。"
      },
      {
        "id": "br_js_3",
        "title": "配列の長さを調べよう",
        "description": "配列の要素数を取得してください。",
        "code": "const fruits = [\"acai\", \"mango\", \"papaya\"];\nconsole.log(fruits.___BLANK___);",
        "blank": "length",
        "hint": "要素数を返すプロパティは？",
        "explanation": "length プロパティで配列の要素数がわかります。最後の要素のインデックスは length - 1 です。"
      },
      {
        "id": "br_js_4",
        "title": "filter で絞り込もう",
        "description": "10以上の数値だけ取り出してください。",
        "code": "const nums = [5, 12, 3, 18, 7];\nconst big = nums.___BLANK___((n) => n >= 10);\nconsole.log(big);",
        "blank": "filter",
        "hint": "条件に合う要素だけ残すメソッドは？",
        "explanation": "filter() は条件がtrueの要素だけを含む新しい配列を返します。元の配列は変更されません。"
      },
      {
        "id": "br_js_5",
        "title": "map で変換しよう",
        "description": "全要素を2倍にした新しい配列を作ってください。",
        "code": "const nums = [1, 2, 3, 4];\nconst doubled = nums.___BLANK___((n) => n * 2);\nconsole.log(doubled);",
        "blank": "map",
        "hint": "各要素を変換して新しい配列を返すメソッドは？",
        "explanation": "map() は各要素を変換した新しい配列を返します。filter と違い、要素数は変わりません。"
      },
      {
        "id": "br_js_6",
        "title": "スプレッド構文で配列をコピーしよう",
        "description": "スプレッド構文で配列を展開してコピーしてください。",
        "code": "const a = [1, 2, 3];\nconst b = [___BLANK___a, 4, 5];\nconsole.log(b);",
        "blank": "...",
        "hint": "配列を展開するスプレッド構文は ...",
        "explanation": "... はスプレッド構文で配列や引数を展開します。[...a, ...b] で配列を結合することもできます。"
      }
    ]
  },
  "AU": {
    "python": [
      {
        "id": "au_py_1",
        "title": "関数を定義しよう",
        "description": "\"G'day!\" と表示する関数 greet を定義してください。",
        "code": "___BLANK___ greet():\n    print(\"G'day!\")\n\ngreet()",
        "blank": "def",
        "hint": "関数の定義は def キーワードで始めます",
        "explanation": "def で関数を定義します。関数名の後に () をつけ、: で終わります。処理はインデントして書きます。"
      },
      {
        "id": "au_py_2",
        "title": "引数を使おう",
        "description": "名前を受け取って \"Hello, 名前!\" と表示する関数を定義してください。",
        "code": "def greet(___BLANK___):\n    print(\"Hello, \" + name + \"!\")\n\ngreet(\"Alice\")",
        "blank": "name",
        "hint": "引数は () の中に書きます",
        "explanation": "引数は関数に渡す値のことです。greet(\"Alice\") と呼ぶと name に \"Alice\" が入ります。"
      },
      {
        "id": "au_py_3",
        "title": "戻り値を返そう",
        "description": "2つの数値を足して結果を返す関数を作ってください。",
        "code": "def add(a, b):\n    ___BLANK___ a + b\n\nresult = add(3, 5)\nprint(result)",
        "blank": "return",
        "hint": "値を返すには return を使います",
        "explanation": "return で関数から値を返します。add(3, 5) は 8 を返し、result に代入されます。"
      },
      {
        "id": "au_py_4",
        "title": "デフォルト引数を使おう",
        "description": "引数が省略されたとき \"World\" をデフォルトにしてください。",
        "code": "def greet(name=\"World\"):\n    print(\"Hello, \" + name + \"!\")\n\ngreet()         # Hello, World!\ngreet(___BLANK___)  # Hello, Australia!",
        "blank": "\"Australia\"",
        "hint": "文字列引数は \" \" で囲みます",
        "explanation": "デフォルト引数を設定すると、省略したとき自動でその値が使われます。"
      },
      {
        "id": "au_py_5",
        "title": "関数の中で計算しよう",
        "description": "円の面積を計算する関数を完成させてください（面積 = 3.14 × r × r）。",
        "code": "def circle_area(r):\n    return 3.14 ___BLANK___ r ___BLANK___ r\n\nprint(circle_area(5))",
        "blank": "*",
        "hint": "掛け算の記号は * です",
        "explanation": "3.14 * r * r で円の面積を計算します。r=5 のとき 3.14 × 5 × 5 = 78.5 になります。"
      },
      {
        "id": "au_py_6",
        "title": "関数を複数回呼び出そう",
        "description": "kangaroo の体重が50kg以上なら \"big\" そうでなければ \"small\" を返す関数を完成させてください。",
        "code": "def size(weight):\n    if weight >= 50:\n        return \"big\"\n    ___BLANK___:\n        return \"small\"\n\nprint(size(60))\nprint(size(30))",
        "blank": "else",
        "hint": "条件が False のときは else を使います",
        "explanation": "size(60) は \"big\"、size(30) は \"small\" を返します。関数の中でも if/else が使えます。"
      }
    ],
    "javascript": [
      {
        "id": "au_js_1",
        "title": "関数を定義しよう",
        "description": "名前を受け取って挨拶を返す関数を完成させてください。",
        "code": "___BLANK___ greet(name) {\n  return \"Hello, \" + name;\n}\nconsole.log(greet(\"Australia\"));",
        "blank": "function",
        "hint": "関数定義のキーワードは？",
        "explanation": "function キーワードで関数を定義します。return で値を返し、呼び出し元に結果を渡せます。"
      },
      {
        "id": "au_js_2",
        "title": "アロー関数を使おう",
        "description": "2つの数値を足すアロー関数を完成させてください。",
        "code": "const add = (a, b) ___BLANK___ a + b;\nconsole.log(add(3, 4));",
        "blank": "=>",
        "hint": "アロー関数は (引数) => 処理 の形です",
        "explanation": "アロー関数は function を省略した書き方です。1行なら return も省略できます。"
      },
      {
        "id": "au_js_3",
        "title": "デフォルト引数を使おう",
        "description": "引数が省略されたときのデフォルト値を設定してください。",
        "code": "function greet(name = ___BLANK___) {\n  return \"Hello, \" + name;\n}\nconsole.log(greet());",
        "blank": "\"World\"",
        "hint": "引数 = デフォルト値 の形で書きます",
        "explanation": "デフォルト引数で、引数が渡されなかったときの値を設定できます。"
      },
      {
        "id": "au_js_4",
        "title": "レスト引数を使おう",
        "description": "可変長引数を受け取る関数を作ってください。",
        "code": "function sum(...___BLANK___) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4));",
        "blank": "nums",
        "hint": "... で残りの引数を配列として受け取れます",
        "explanation": "...args のようにレスト引数を使うと、複数の引数を配列にまとめて受け取れます。"
      },
      {
        "id": "au_js_5",
        "title": "コールバック関数を渡そう",
        "description": "関数を引数として渡してください。",
        "code": "function apply(fn, x) {\n  return fn(x);\n}\nconst double = (n) => n * 2;\nconsole.log(apply(___BLANK___, 5));",
        "blank": "double",
        "hint": "関数名をそのまま引数として渡せます",
        "explanation": "JavaScriptでは関数は値として扱えます（第一級関数）。変数に代入したり引数として渡したりできます。"
      },
      {
        "id": "au_js_6",
        "title": "return で値を返そう",
        "description": "2つの数の最大値を返す関数を完成させてください。",
        "code": "function maxOf(a, b) {\n  ___BLANK___ a > b ? a : b;\n}\nconsole.log(maxOf(10, 20));",
        "blank": "return",
        "hint": "値を返すキーワードは return です",
        "explanation": "return で関数から値を返します。return がない関数は undefined を返します。"
      }
    ]
  },
  "EG": {
    "python": [
      {
        "id": "eg_py_1",
        "title": "辞書を作ろう",
        "description": "エジプトの情報を持つ辞書 egypt を作ってください。",
        "code": "egypt = ___BLANK___\"capital\": \"Cairo\", \"population\": 100000000___BLANK___\nprint(egypt)",
        "blank": "{",
        "hint": "辞書は { } で作ります",
        "explanation": "辞書は { キー: 値 } の形で作ります。キーと値のペアをカンマで区切ります。"
      },
      {
        "id": "eg_py_2",
        "title": "キーで値にアクセスしよう",
        "description": "辞書から \"capital\" の値を取得してください。",
        "code": "pyramid = {\"name\": \"Giza\", \"height\": 138, \"age\": 4500}\nprint(pyramid[___BLANK___])",
        "blank": "\"name\"",
        "hint": "キー名を [ ] の中に \" \" で囲んで書きます",
        "explanation": "辞書の値はキーを使ってアクセスします。pyramid[\"name\"] で \"Giza\" が取得できます。"
      },
      {
        "id": "eg_py_3",
        "title": "新しいキーを追加しよう",
        "description": "辞書に \"country\": \"Egypt\" を追加してください。",
        "code": "info = {\"name\": \"Sphinx\"}\ninfo[___BLANK___] = \"Egypt\"\nprint(info)",
        "blank": "\"country\"",
        "hint": "新しいキーに値を代入するだけで追加できます",
        "explanation": "辞書に存在しないキーに代入すると新しいペアが追加されます。存在するキーなら更新されます。"
      },
      {
        "id": "eg_py_4",
        "title": "キーが存在するか確認しよう",
        "description": "\"height\" というキーが辞書に存在するか確認してください。",
        "code": "pyramid = {\"name\": \"Giza\", \"height\": 138}\nif \"height\" ___BLANK___ pyramid:\n    print(\"Found!\")",
        "blank": "in",
        "hint": "キーの存在確認は in を使います",
        "explanation": "辞書に in を使うとキーが存在するか確認できます。True か False を返します。"
      },
      {
        "id": "eg_py_5",
        "title": "全てのキーを取得しよう",
        "description": "辞書の全キーを表示してください。",
        "code": "egypt = {\"capital\": \"Cairo\", \"river\": \"Nile\", \"wonder\": \"Pyramid\"}\nprint(egypt.___BLANK___())",
        "blank": "keys",
        "hint": "全キーを取得するには .keys() メソッドを使います",
        "explanation": "keys() は全てのキーを返します。values() は全ての値、items() はキーと値のペアを返します。"
      },
      {
        "id": "eg_py_6",
        "title": "辞書をループで処理しよう",
        "description": "辞書のキーと値を順番に表示してください。",
        "code": "info = {\"city\": \"Cairo\", \"river\": \"Nile\"}\nfor key, value in info.___BLANK___():\n    print(key, \":\", value)",
        "blank": "items",
        "hint": "キーと値を同時に取得するには .items() を使います",
        "explanation": "items() はキーと値のペアをタプルで返します。for key, value in ... で同時に取り出せます。"
      }
    ],
    "javascript": [
      {
        "id": "eg_js_1",
        "title": "オブジェクトを作ろう",
        "description": "エジプトの情報をオブジェクトで表現してください。",
        "code": "const egypt = ___BLANK___\n  capital: \"Cairo\",\n  pop: 104\n};\nconsole.log(egypt);",
        "blank": "{",
        "hint": "オブジェクトは { } で作ります",
        "explanation": "オブジェクトは { キー: 値 } の形で複数の情報をまとめて管理できます。Pythonの辞書に相当します。"
      },
      {
        "id": "eg_js_2",
        "title": "プロパティにアクセスしよう",
        "description": "ドット記法でプロパティにアクセスしてください。",
        "code": "const egypt = { capital: \"Cairo\", pop: 104 };\nconsole.log(egypt.___BLANK___);",
        "blank": "capital",
        "hint": "オブジェクト名.プロパティ名 でアクセスします",
        "explanation": "ドット記法 (obj.key) とブラケット記法 (obj[\"key\"]) の2種類でプロパティにアクセスできます。"
      },
      {
        "id": "eg_js_3",
        "title": "分割代入を使おう",
        "description": "オブジェクトから capital を取り出してください。",
        "code": "const egypt = { capital: \"Cairo\", pop: 104 };\nconst { ___BLANK___ } = egypt;\nconsole.log(capital);",
        "blank": "capital",
        "hint": "const { プロパティ名 } = オブジェクト の形です",
        "explanation": "分割代入でオブジェクトのプロパティを変数に取り出せます。const { a, b } = obj で複数同時も可能です。"
      },
      {
        "id": "eg_js_4",
        "title": "スプレッドでコピーしよう",
        "description": "オブジェクトをスプレッド構文でコピーしてください。",
        "code": "const base = { name: \"Egypt\", region: \"Africa\" };\nconst copy = { ___BLANK___base, pop: 104 };\nconsole.log(copy);",
        "blank": "...",
        "hint": "... でオブジェクトを展開できます",
        "explanation": "{...obj} でオブジェクトをコピーしつつ、新しいプロパティを追加できます。Reactでstateを更新するときによく使います。"
      },
      {
        "id": "eg_js_5",
        "title": "Object.keys() でキーを取得しよう",
        "description": "オブジェクトのキー一覧を配列で取得してください。",
        "code": "const egypt = { capital: \"Cairo\", pop: 104 };\nconsole.log(___BLANK___.keys(egypt));",
        "blank": "Object",
        "hint": "Object.keys() でキーの配列を取得できます",
        "explanation": "Object.keys() でキー一覧、Object.values() で値一覧、Object.entries() でキーと値のペア一覧を取得できます。"
      },
      {
        "id": "eg_js_6",
        "title": "メソッドを定義しよう",
        "description": "オブジェクトにメソッドを持たせてください。",
        "code": "const pyramid = {\n  name: \"Giza\",\n  ___BLANK___() {\n    return \"Height: 139m\";\n  }\n};\nconsole.log(pyramid.info());",
        "blank": "info",
        "hint": "メソッド名() {} の形でメソッドを定義します",
        "explanation": "オブジェクト内に関数（メソッド）を定義できます。this で自身のプロパティにアクセスできます。"
      }
    ]
  },
  "IN": {
    "python": [
      {
        "id": "in_py_1",
        "title": "クラスを定義しよう",
        "description": "Animal という名前のクラスを定義してください。",
        "code": "___BLANK___ Animal:\n    def __init__(self, name):\n        self.name = name\n\na = Animal(\"Tiger\")\nprint(a.name)",
        "blank": "class",
        "hint": "クラスの定義は class キーワードで始めます",
        "explanation": "class でクラスを定義します。__init__ は初期化メソッドで、オブジェクト作成時に自動で呼ばれます。"
      },
      {
        "id": "in_py_2",
        "title": "self を理解しよう",
        "description": "インスタンス変数にアクセスするには self を使います。",
        "code": "class Animal:\n    def __init__(self, name):\n        ___BLANK___.name = name\n\na = Animal(\"Elephant\")\nprint(a.name)",
        "blank": "self",
        "hint": "インスタンス自身を参照するには self を使います",
        "explanation": "self はクラスのインスタンス自身を指します。self.name でそのオブジェクトの name を保存できます。"
      },
      {
        "id": "in_py_3",
        "title": "メソッドを追加しよう",
        "description": "クラスにメソッド speak() を追加してください。",
        "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    ___BLANK___ speak(self):\n        print(self.name + \" speaks!\")\n\na = Animal(\"Peacock\")\na.speak()",
        "blank": "def",
        "hint": "クラス内のメソッドも def で定義します",
        "explanation": "クラス内のメソッドは def で定義します。必ず第一引数に self を書きます。"
      },
      {
        "id": "in_py_4",
        "title": "継承を使おう",
        "description": "Animal を継承した Dog クラスを作ってください。",
        "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(___BLANK___):\n    def bark(self):\n        print(self.name + \": Woof!\")\n\nd = Dog(\"Buddy\")\nd.bark()",
        "blank": "Animal",
        "hint": "クラス名の後の () に親クラスを書きます",
        "explanation": "Dog(Animal) と書くと Animal の機能を引き継ぎます。これを継承といいます。Dog は Animal の name も使えます。"
      },
      {
        "id": "in_py_5",
        "title": "オブジェクトを作ろう",
        "description": "Cat クラスのインスタンスを2つ作ってください。",
        "code": "class Cat:\n    def __init__(self, name):\n        self.name = name\n\ncat1 = ___BLANK___(\"Whiskers\")\ncat2 = ___BLANK___(\"Luna\")\nprint(cat1.name, cat2.name)",
        "blank": "Cat",
        "hint": "クラス名() でインスタンスを作ります",
        "explanation": "Cat(\"Whiskers\") でインスタンスが作られ、__init__ が呼ばれて name が設定されます。"
      }
    ],
    "javascript": [
      {
        "id": "in_js_1",
        "title": "クラスを定義しよう",
        "description": "コンストラクタ付きのクラスを定義してください。",
        "code": "class Animal {\n  ___BLANK___(name) {\n    this.name = name;\n  }\n}\nconst a = new Animal(\"Tiger\");",
        "blank": "constructor",
        "hint": "クラスの初期化メソッドは constructor です",
        "explanation": "constructor はクラスの初期化メソッドです。new でインスタンスを作ると自動的に呼ばれます。"
      },
      {
        "id": "in_js_2",
        "title": "クラスを継承しよう",
        "description": "Animal クラスを継承した Dog クラスを作ってください。",
        "code": "class Dog ___BLANK___ Animal {\n  constructor(name) {\n    super(name);\n  }\n}",
        "blank": "extends",
        "hint": "extends で親クラスを継承します",
        "explanation": "extends で継承し、super() で親クラスのコンストラクタを呼びます。共通の機能を再利用できます。"
      },
      {
        "id": "in_js_3",
        "title": "super() を呼ぼう",
        "description": "親クラスのコンストラクタを呼び出してください。",
        "code": "class Cat extends Animal {\n  constructor(name, color) {\n    ___BLANK___(name);\n    this.color = color;\n  }\n}",
        "blank": "super",
        "hint": "親クラスのコンストラクタは super() で呼びます",
        "explanation": "extends でクラスを継承したとき、子クラスのコンストラクタでは必ず super() を最初に呼ぶ必要があります。"
      },
      {
        "id": "in_js_4",
        "title": "メソッドを定義しよう",
        "description": "クラスに speak メソッドを追加してください。",
        "code": "class Dog extends Animal {\n  ___BLANK___() {\n    return this.name + \" says: Woof!\";\n  }\n}",
        "blank": "speak",
        "hint": "メソッドは function キーワードなしで書きます",
        "explanation": "クラスのメソッドは function なしで書きます。this で自身のプロパティにアクセスできます。"
      },
      {
        "id": "in_js_5",
        "title": "インスタンスを作ろう (new)",
        "description": "犬のインスタンスを作成してください。",
        "code": "class Dog {\n  constructor(name) { this.name = name; }\n}\nconst dog = ___BLANK___ Dog(\"Buddy\");\nconsole.log(dog.name);",
        "blank": "new",
        "hint": "インスタンス生成には new キーワードを使います",
        "explanation": "new クラス名() でインスタンスを作ります。constructor が自動的に呼ばれ、プロパティが設定されます。"
      },
      {
        "id": "in_js_6",
        "title": "instanceof で型チェックしよう",
        "description": "オブジェクトがクラスのインスタンスか確認してください。",
        "code": "class Dog {}\nconst d = new Dog();\nconsole.log(d ___BLANK___ Dog);",
        "blank": "instanceof",
        "hint": "instanceof でクラスのインスタンスか確認できます",
        "explanation": "instanceof はオブジェクトが特定のクラスのインスタンスかどうかをboolean で返します。"
      }
    ]
  },
  "RU": {
    "python": [
      {
        "id": "ru_py_1",
        "title": "try-except を使おう",
        "description": "エラーが起きたときに備えて try-except を使ってください。",
        "code": "___BLANK___:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"0では割れません！\")",
        "blank": "try",
        "hint": "エラーが起きそうな処理は try ブロックに書きます",
        "explanation": "try-except でエラーをキャッチできます。try の中でエラーが起きると except に処理が移ります。"
      },
      {
        "id": "ru_py_2",
        "title": "except でエラーを捕まえよう",
        "description": "ValueError をキャッチしてください。",
        "code": "try:\n    num = int(\"abc\")\n___BLANK___ ValueError:\n    print(\"数値に変換できません\")",
        "blank": "except",
        "hint": "エラーを捕まえるには except を使います",
        "explanation": "except の後にエラーの種類を書きます。int(\"abc\") は ValueError を発生させます。"
      },
      {
        "id": "ru_py_3",
        "title": "finally を使おう",
        "description": "エラーの有無に関わらず必ず実行される処理を書いてください。",
        "code": "try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print(\"Error!\")\n___BLANK___:\n    print(\"処理完了\")",
        "blank": "finally",
        "hint": "必ず実行される処理は finally ブロックに書きます",
        "explanation": "finally はエラーが起きても起きなくても必ず実行されます。後片付け処理によく使います。"
      },
      {
        "id": "ru_py_4",
        "title": "複数のエラーをキャッチしよう",
        "description": "TypeError もキャッチできるように追加してください。",
        "code": "try:\n    result = \"text\" + 5\nexcept ValueError:\n    print(\"Value Error\")\n___BLANK___ TypeError:\n    print(\"Type Error\")",
        "blank": "except",
        "hint": "複数のエラーは except を重ねて書きます",
        "explanation": "except は複数書けます。\"text\" + 5 は TypeError なので2番目の except が実行されます。"
      },
      {
        "id": "ru_py_5",
        "title": "raise でエラーを発生させよう",
        "description": "age が0未満のとき ValueError を発生させてください。",
        "code": "def set_age(age):\n    if age < 0:\n        ___BLANK___ ValueError(\"年齢は0以上です\")\n    return age\n\nset_age(-1)",
        "blank": "raise",
        "hint": "意図的にエラーを起こすには raise を使います",
        "explanation": "raise でエラーを発生させられます。不正な入力を受けたとき自分でエラーを出すのに使います。"
      }
    ],
    "javascript": [
      {
        "id": "ru_js_1",
        "title": "try...catch を使おう",
        "description": "エラーを捕捉するtry...catch文を完成させてください。",
        "code": "try {\n  JSON.parse(\"invalid\");\n} ___BLANK___ (error) {\n  console.log(\"エラー:\", error.message);\n}",
        "blank": "catch",
        "hint": "エラーを捕捉するキーワードは catch です",
        "explanation": "try ブロックでエラーが発生すると catch に飛びます。error.message でエラー内容を取得できます。"
      },
      {
        "id": "ru_js_2",
        "title": "エラーを投げよう (throw)",
        "description": "意図的にエラーを発生させてください。",
        "code": "function divide(a, b) {\n  if (b === 0) ___BLANK___ new Error(\"0で割れません\");\n  return a / b;\n}",
        "blank": "throw",
        "hint": "エラーを発生させるキーワードは throw です",
        "explanation": "throw でエラーを投げられます。new Error(\"メッセージ\") でエラーオブジェクトを作成します。"
      },
      {
        "id": "ru_js_3",
        "title": "finally を使おう",
        "description": "エラーの有無に関係なく実行される処理を書いてください。",
        "code": "try {\n  console.log(\"処理中\");\n} catch (e) {\n  console.log(\"エラー\");\n} ___BLANK___ {\n  console.log(\"完了\");\n}",
        "blank": "finally",
        "hint": "必ず実行されるブロックは finally です",
        "explanation": "finally ブロックはエラーの有無に関わらず必ず実行されます。リソースの解放などに使います。"
      },
      {
        "id": "ru_js_4",
        "title": "error.message を使おう",
        "description": "エラーのメッセージを取り出してください。",
        "code": "try {\n  null.toString();\n} catch (error) {\n  console.log(error.___BLANK___);\n}",
        "blank": "message",
        "hint": "エラーのメッセージは .message プロパティです",
        "explanation": "Error オブジェクトには message（説明）、name（エラー名）、stack（スタックトレース）などのプロパティがあります。"
      },
      {
        "id": "ru_js_5",
        "title": "async/await でエラーを処理しよう",
        "description": "async関数のエラーをtry...catchで処理してください。",
        "code": "async function fetchData() {\n  ___BLANK___ {\n    const res = await fetch(\"/api\");\n  } catch (e) {\n    console.log(\"取得失敗\");\n  }\n}",
        "blank": "try",
        "hint": "async/await のエラーは try...catch で捕捉できます",
        "explanation": "await の呼び出しが失敗するとエラーが投げられます。try...catch で捕捉できます。"
      },
      {
        "id": "ru_js_6",
        "title": "カスタムエラーを作ろう",
        "description": "Error を継承したカスタムエラークラスを作ってください。",
        "code": "class ValidationError ___BLANK___ Error {\n  constructor(msg) {\n    super(msg);\n    this.name = \"ValidationError\";\n  }\n}",
        "blank": "extends",
        "hint": "Error クラスを extends で継承します",
        "explanation": "Error を継承してカスタムエラーを作れます。instanceof でカスタムエラーを識別できるようになります。"
      }
    ]
  },
  "CN": {
    "python": [
      {
        "id": "cn_py_1",
        "title": "math モジュールをインポートしよう",
        "description": "円周率 π を使うために math モジュールをインポートしてください。",
        "code": "___BLANK___ math\nprint(math.pi)",
        "blank": "import",
        "hint": "モジュールは import キーワードで読み込みます",
        "explanation": "import でモジュールを読み込めます。math モジュールには pi（円周率）や sqrt（平方根）など数学関数が揃っています。"
      },
      {
        "id": "cn_py_2",
        "title": "平方根を計算しよう",
        "description": "math モジュールの平方根関数で 144 の平方根を求めてください。",
        "code": "import math\nresult = math.___BLANK___(144)\nprint(result)",
        "blank": "sqrt",
        "hint": "平方根は sqrt（square root）です",
        "explanation": "math.sqrt() は平方根を返します。144の平方根は12です。math.ceil()（切り上げ）やmath.floor()（切り捨て）も便利です。"
      },
      {
        "id": "cn_py_3",
        "title": "from でインポートしよう",
        "description": "random モジュールから randint だけをインポートしてください。",
        "code": "___BLANK___ random import randint\nprint(randint(1, 100))",
        "blank": "from",
        "hint": "特定の関数だけ取り出すには from ... import を使います",
        "explanation": "from モジュール名 import 関数名 で、関数を直接使えます。randint(1,100) は1〜100のランダムな整数を返します。"
      },
      {
        "id": "cn_py_4",
        "title": "datetime で今日の日付を取得しよう",
        "description": "今日の日付を取得してください。",
        "code": "from datetime import date\ntoday = date.___BLANK___())\nprint(today)",
        "blank": "today",
        "hint": "今日の日付は date.today() で取得できます",
        "explanation": "datetime モジュールの date.today() で今日の日付が得られます。date.today().year で年だけ取り出すこともできます。"
      },
      {
        "id": "cn_py_5",
        "title": "Counter で出現回数を数えよう",
        "description": "collections モジュールから Counter をインポートして文字の出現回数を数えてください。",
        "code": "from collections import ___BLANK___\nc = Counter(\"beijing\")\nprint(c)",
        "blank": "Counter",
        "hint": "出現回数を数えるクラスは Counter です",
        "explanation": "Counter は文字列やリストの要素の出現回数を辞書形式で返します。most_common() で多い順に取り出せます。"
      },
      {
        "id": "cn_py_6",
        "title": "as でエイリアスをつけよう",
        "description": "numpy を np という短い名前でインポートするときのように、math を m という名前でインポートしてください。",
        "code": "import math ___BLANK___ m\nprint(m.pi)",
        "blank": "as",
        "hint": "import モジュール as 別名 で短縮名をつけられます",
        "explanation": "as でインポートしたモジュールに別名（エイリアス）をつけられます。numpy を np、pandas を pd と書くのが一般的です。"
      }
    ],
    "javascript": [
      {
        "id": "cn_js_1",
        "title": "スプレッド構文で配列を展開しよう",
        "description": "2つの配列を結合してください。",
        "code": "const a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst merged = [___BLANK___a, ...b];\nconsole.log(merged);",
        "blank": "...",
        "hint": "スプレッド構文は ... です",
        "explanation": "...配列 で配列を展開できます。[...a, ...b] は a と b をひとつの配列に結合します。"
      },
      {
        "id": "cn_js_2",
        "title": "配列の分割代入を使おう",
        "description": "配列の最初の要素を変数に取り出してください。",
        "code": "const colors = [\"red\", \"green\", \"blue\"];\nconst [___BLANK___, second] = colors;\nconsole.log(first, second);",
        "blank": "first",
        "hint": "[変数1, 変数2] = 配列 で左から順に代入されます",
        "explanation": "分割代入（Destructuring）で配列の要素を個別の変数に取り出せます。"
      },
      {
        "id": "cn_js_3",
        "title": "オブジェクトの分割代入を使おう",
        "description": "オブジェクトから name プロパティを取り出してください。",
        "code": "const user = { name: \"Wei\", age: 25 };\nconst { ___BLANK___ } = user;\nconsole.log(name);",
        "blank": "name",
        "hint": "{ プロパティ名 } = オブジェクト で取り出せます",
        "explanation": "オブジェクトの分割代入は { name } = obj のように書きます。"
      },
      {
        "id": "cn_js_4",
        "title": "スプレッドでオブジェクトをコピーしよう",
        "description": "オブジェクトをコピーしつつ country を上書きしてください。",
        "code": "const base = { lang: \"Python\", level: 1 };\nconst updated = { ___BLANK___base, country: \"China\" };\nconsole.log(updated);",
        "blank": "...",
        "hint": "...オブジェクト でプロパティを展開します",
        "explanation": "{...base} でオブジェクトをシャローコピーできます。後に書いたプロパティは上書きされます。"
      },
      {
        "id": "cn_js_5",
        "title": "レスト構文で残りをまとめよう",
        "description": "最初の要素を取り出し、残りをまとめてください。",
        "code": "const [head, ___BLANK___tail] = [10, 20, 30, 40];\nconsole.log(head);\nconsole.log(tail);",
        "blank": "...",
        "hint": "レスト構文 ...変数 で残りをまとめて受け取れます",
        "explanation": "...tail で残りの要素をすべて配列として受け取れます。"
      },
      {
        "id": "cn_js_6",
        "title": "デフォルト値付き分割代入を使おう",
        "description": "city が undefined のときデフォルト値 \"Beijing\" を使ってください。",
        "code": "const { name, city ___BLANK___ \"Beijing\" } = { name: \"Li\" };\nconsole.log(city);",
        "blank": "=",
        "hint": "分割代入では = でデフォルト値を指定できます",
        "explanation": "{ city = \"Beijing\" } = obj で city がないとき \"Beijing\" が使われます。"
      }
    ]
  },
  "DE": {
    "python": [
      {
        "id": "de_py_1",
        "title": "ファイルを開こう",
        "description": "ファイルを読み込みモードで開くキーワードを入れてください。",
        "code": "f = ___BLANK___(\"data.txt\", \"r\")\ncontent = f.read()\nf.close()",
        "blank": "open",
        "hint": "ファイルを開く組み込み関数は open() です",
        "explanation": "open(ファイル名, モード) でファイルを開けます。\"r\"は読み込み、\"w\"は書き込み、\"a\"は追記モードです。"
      },
      {
        "id": "de_py_2",
        "title": "with 文でファイルを安全に開こう",
        "description": "with 文を使ってファイルを開いてください。with を使うと自動でファイルが閉じられます。",
        "code": "___BLANK___ open(\"data.txt\", \"r\") as f:\n    content = f.read()\n    print(content)",
        "blank": "with",
        "hint": "with 文を使うと close() を書かなくてよくなります",
        "explanation": "with 文を使うとブロックを抜けたとき自動でファイルが閉じられます。close() の書き忘れを防げる安全な書き方です。"
      },
      {
        "id": "de_py_3",
        "title": "ファイルに書き込もう",
        "description": "ファイルに文字列を書き込むメソッドを使ってください。",
        "code": "with open(\"output.txt\", \"w\") as f:\n    f.___BLANK___(\"Hello, Germany!\")",
        "blank": "write",
        "hint": "ファイルへの書き込みは write() メソッドです",
        "explanation": "f.write() でファイルにテキストを書き込めます。\"w\"モードでは既存の内容が上書きされます。"
      },
      {
        "id": "de_py_4",
        "title": "全行をリストで読み込もう",
        "description": "ファイルの全行をリストとして読み込むメソッドを使ってください。",
        "code": "with open(\"data.txt\", \"r\") as f:\n    lines = f.___BLANK___()\nprint(lines)",
        "blank": "readlines",
        "hint": "全行をリストで取得するのは readlines() です",
        "explanation": "readlines() は各行を要素とするリストを返します。for line in f: でも1行ずつ読めます。"
      },
      {
        "id": "de_py_5",
        "title": "追記モードでファイルに書き込もう",
        "description": "既存ファイルの末尾に追記するモードを指定してください。",
        "code": "with open(\"log.txt\", ___BLANK___) as f:\n    f.write(\"新しいログ\\n\")",
        "blank": "\"a\"",
        "hint": "追記モードは \"a\"（append）です",
        "explanation": "\"a\" モードは既存内容を消さずに末尾に追加します。ログファイルの書き込みによく使われます。"
      },
      {
        "id": "de_py_6",
        "title": "os モジュールでパスを結合しよう",
        "description": "os.path.join でフォルダとファイル名を結合してください。",
        "code": "import os\npath = os.path.___BLANK___(\"data\", \"file.txt\")\nprint(path)",
        "blank": "join",
        "hint": "パスの結合は os.path.join() です",
        "explanation": "os.path.join() はOSに合わせたパス区切り文字（/や\\）で結合してくれます。直接 / で結合するより安全です。"
      }
    ],
    "javascript": [
      {
        "id": "de_js_1",
        "title": "Promise を作ろう",
        "description": "Promise を new で作ってください。",
        "code": "const p = new ___BLANK___((resolve, reject) => {\n  resolve(\"成功！\");\n});\np.then(v => console.log(v));",
        "blank": "Promise",
        "hint": "非同期処理を包むのは Promise です",
        "explanation": "Promise は非同期処理の結果を表します。resolve で成功、reject で失敗を返します。"
      },
      {
        "id": "de_js_2",
        "title": ".then() で成功を処理しよう",
        "description": "Promise が成功したときの処理を繋げてください。",
        "code": "Promise.resolve(\"data\")\n  .___BLANK___(value => console.log(value));",
        "blank": "then",
        "hint": "成功時の処理は .then() で繋げます",
        "explanation": ".then() で Promise が解決したときの処理を書きます。.then() は新しい Promise を返すのでチェーンできます。"
      },
      {
        "id": "de_js_3",
        "title": ".catch() でエラーを処理しよう",
        "description": "Promise が失敗したときの処理を書いてください。",
        "code": "Promise.reject(new Error(\"失敗\"))\n  .___BLANK___(err => console.error(\"エラー:\", err.message));",
        "blank": "catch",
        "hint": "失敗時の処理は .catch() です",
        "explanation": ".catch() は Promise の拒否（reject）またはエラーを捕まえます。"
      },
      {
        "id": "de_js_4",
        "title": "Promise.all で並列実行しよう",
        "description": "複数の Promise をまとめて待ってください。",
        "code": "Promise.___BLANK___([Promise.resolve(1), Promise.resolve(2)])\n  .then(values => console.log(values));",
        "blank": "all",
        "hint": "複数の Promise を並列処理するのは Promise.all() です",
        "explanation": "Promise.all([p1, p2]) は全部が解決したとき結果の配列を返します。"
      },
      {
        "id": "de_js_5",
        "title": "async/await で読みやすく書こう",
        "description": "Promise の結果を await で受け取ってください。",
        "code": "async function main() {\n  const data = ___BLANK___ Promise.resolve(\"Hello!\");\n  console.log(data);\n}\nmain();",
        "blank": "await",
        "hint": "await で Promise の完了を待ちます",
        "explanation": "await は Promise が解決するまで待ち、値を取り出します。async 関数の中でしか使えません。"
      },
      {
        "id": "de_js_6",
        "title": "Promise.allSettled で全結果を取ろう",
        "description": "成功・失敗関係なく全 Promise の結果を取得してください。",
        "code": "Promise.___BLANK___([Promise.resolve(\"OK\"), Promise.reject(\"NG\")])\n  .then(results => results.forEach(r => console.log(r.status)));",
        "blank": "allSettled",
        "hint": "Promise.allSettled は失敗しても全部の結果を返します",
        "explanation": "Promise.allSettled() は全 Promise が完了したとき、各結果を { status, value/reason } の形で返します。"
      }
    ]
  },
  "GB": {
    "python": [
      {
        "id": "gb_py_1",
        "title": "re モジュールで検索しよう",
        "description": "テキスト内にパターンが含まれるか調べるメソッドを使ってください。",
        "code": "import re\ntext = \"London is great\"\nif re.___BLANK___(\"London\", text):\n    print(\"見つかった！\")",
        "blank": "search",
        "hint": "パターンを検索するのは re.search() です",
        "explanation": "re.search() はテキスト全体からパターンを探します。見つかったら Match オブジェクトを、なければ None を返します。"
      },
      {
        "id": "gb_py_2",
        "title": "全マッチをリストで取得しよう",
        "description": "テキスト内のすべての数字をリストで取得してください。",
        "code": "import re\ntext = \"価格: 100円、200円、300円\"\nnumbers = re.___BLANK___(r\"\\d+\", text)\nprint(numbers)",
        "blank": "findall",
        "hint": "全マッチをリストで返すのは findall() です",
        "explanation": "re.findall() はパターンに一致する全部分をリストで返します。\\d+ は1桁以上の数字にマッチします。"
      },
      {
        "id": "gb_py_3",
        "title": "文字を置換しよう",
        "description": "テキスト内の \"cat\" を \"dog\" に置換してください。",
        "code": "import re\nresult = re.___BLANK___(\"cat\", \"dog\", \"I have a cat\")\nprint(result)",
        "blank": "sub",
        "hint": "置換は re.sub(パターン, 置換後, テキスト) です",
        "explanation": "re.sub() でパターンに一致する部分を別の文字列に置換できます。str.replace() より強力なパターンが使えます。"
      },
      {
        "id": "gb_py_4",
        "title": "メタ文字を使おう",
        "description": "メールアドレスのローカル部（@より前）を数字・英字にマッチさせてください。",
        "code": "import re\npattern = r\"[___BLANK___-zA-Z0-9]+@\"\nif re.search(pattern, \"user@example.com\"):\n    print(\"マッチ！\")",
        "blank": "a",
        "hint": "[a-zA-Z0-9] は英数字クラスです。小文字は a から始まります。",
        "explanation": "文字クラス [] で範囲を指定できます。[a-z] は小文字、[A-Z] は大文字、[0-9] は数字にマッチします。"
      },
      {
        "id": "gb_py_5",
        "title": "コンパイルして再利用しよう",
        "description": "正規表現をコンパイルして再利用できるオブジェクトを作ってください。",
        "code": "import re\npattern = re.___BLANK___(r\"\\d{3}-\\d{4}\")\nif pattern.search(\"03-1234\"):\n    print(\"電話番号にマッチ\")",
        "blank": "compile",
        "hint": "パターンをコンパイルするのは re.compile() です",
        "explanation": "re.compile() でパターンをコンパイルしておくと、同じパターンを何度も使うとき高速になります。"
      },
      {
        "id": "gb_py_6",
        "title": "グループで部分抽出しよう",
        "description": "マッチした部分をグループで取得してください。",
        "code": "import re\nm = re.search(r\"(\\w+)@(\\w+)\", \"user@example\")\nif m:\n    print(m.___BLANK___(1))",
        "blank": "group",
        "hint": "キャプチャグループは .group(番号) で取り出します",
        "explanation": "() でグループを作り、group(1)、group(2)... で取り出せます。group(0) はマッチ全体です。"
      }
    ],
    "javascript": [
      {
        "id": "gb_js_1",
        "title": "正規表現でマッチを確認しよう",
        "description": "文字列が \"London\" を含むか確認してください。",
        "code": "const text = \"I love London\";\nconst result = /London/.___BLANK___(text);\nconsole.log(result);",
        "blank": "test",
        "hint": ".test() でマッチするか true/false を返します",
        "explanation": "正規表現の .test() は文字列がパターンにマッチするか boolean で返します。"
      },
      {
        "id": "gb_js_2",
        "title": "match で全マッチを取得しよう",
        "description": "テキストから数字を全部取り出してください。",
        "code": "const text = \"Price: 100, Tax: 8\";\nconst nums = text.___BLANK___(/\\d+/g);\nconsole.log(nums);",
        "blank": "match",
        "hint": "g フラグと .match() で全マッチがリストで返ります",
        "explanation": ".match(/パターン/g) で全マッチを配列で取得できます。g フラグなしだと最初の1つだけです。"
      },
      {
        "id": "gb_js_3",
        "title": "replace で置換しよう",
        "description": "すべての \"color\" を \"colour\" に置換してください。",
        "code": "const text = \"I like this color. Nice color!\";\nconst result = text.___BLANK___(/color/g, \"colour\");\nconsole.log(result);",
        "blank": "replace",
        "hint": ".replace(正規表現, 置換後) で置換します",
        "explanation": ".replace(/pattern/g, \"新文字\") でパターンに一致する部分をすべて置換します。"
      },
      {
        "id": "gb_js_4",
        "title": "i フラグで大文字小文字を無視しよう",
        "description": "大文字小文字を区別せずに検索するフラグを付けてください。",
        "code": "const re = /hello/___BLANK___;\nconsole.log(re.test(\"Hello World\"));",
        "blank": "i",
        "hint": "i フラグで大文字小文字を区別しません",
        "explanation": "i フラグ（case Insensitive）は大文字小文字を区別しません。"
      },
      {
        "id": "gb_js_5",
        "title": "グループでキャプチャしよう",
        "description": "メールアドレスからユーザー名部分を取り出してください。",
        "code": "const email = \"user@example.com\";\nconst m = email.match(/([^@]+)@/);\nconsole.log(m[___BLANK___]);",
        "blank": "1",
        "hint": "キャプチャグループは m[1] から始まります",
        "explanation": "() で囲んだ部分がキャプチャグループです。m[0] はマッチ全体、m[1] が最初のグループです。"
      },
      {
        "id": "gb_js_6",
        "title": "split で正規表現を区切り文字にしよう",
        "description": "カンマと前後のスペースで分割してください。",
        "code": "const data = \"apple, banana,cherry\";\nconst items = data.___BLANK___(/,\\s*/);\nconsole.log(items);",
        "blank": "split",
        "hint": ".split(正規表現) でパターンを区切り文字にできます",
        "explanation": ".split(/,\\s*/) でカンマ後のスペースも含めて分割できます。"
      }
    ]
  },
  "KR": {
    "python": [
      {
        "id": "kr_py_1",
        "title": "リスト内包表記を書こう",
        "description": "0から4の数のリストを内包表記で作ってください。",
        "code": "nums = [___BLANK___ for x in range(5)]\nprint(nums)",
        "blank": "x",
        "hint": "[式 for 変数 in イテラブル] の形で書きます",
        "explanation": "リスト内包表記は for ループを1行で書く方法です。[x for x in range(5)] は [0,1,2,3,4] を返します。"
      },
      {
        "id": "kr_py_2",
        "title": "各要素を2乗しよう",
        "description": "1から5の各数を2乗したリストを作ってください。",
        "code": "squares = [x ___BLANK___ 2 for x in range(1, 6)]\nprint(squares)",
        "blank": "**",
        "hint": "べき乗は ** です",
        "explanation": "[x**2 for x in range(1,6)] で [1,4,9,16,25] が作れます。式の部分に計算を書けます。"
      },
      {
        "id": "kr_py_3",
        "title": "フィルタリングしよう",
        "description": "1から10の偶数だけのリストを作ってください。",
        "code": "evens = [x for x in range(1, 11) ___BLANK___ x % 2 == 0]\nprint(evens)",
        "blank": "if",
        "hint": "条件でフィルタリングするには末尾に if を付けます",
        "explanation": "[式 for 変数 in イテラブル if 条件] の形でフィルタリングできます。x % 2 == 0 で偶数のみ残せます。"
      },
      {
        "id": "kr_py_4",
        "title": "文字列リストを大文字にしよう",
        "description": "都市名リストを全部大文字にしてください。",
        "code": "cities = [\"seoul\", \"busan\", \"incheon\"]\nupper = [c.___BLANK___() for c in cities]\nprint(upper)",
        "blank": "upper",
        "hint": "大文字に変換するメソッドは upper() です",
        "explanation": "内包表記の式の部分にメソッド呼び出しも書けます。c.upper() で各文字列を大文字に変換します。"
      },
      {
        "id": "kr_py_5",
        "title": "辞書内包表記を書こう",
        "description": "単語をキー、その長さを値にした辞書を作ってください。",
        "code": "words = [\"hi\", \"hello\", \"hey\"]\nd = {w: ___BLANK___(w) for w in words}\nprint(d)",
        "blank": "len",
        "hint": "文字列の長さは len() です",
        "explanation": "{キー: 値 for 変数 in イテラブル} で辞書内包表記が書けます。len() で文字列の長さを取得しています。"
      },
      {
        "id": "kr_py_6",
        "title": "ネストした内包表記を使おう",
        "description": "2次元リストをフラットに展開してください。",
        "code": "matrix = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [n for row in matrix for n ___BLANK___ row]\nprint(flat)",
        "blank": "in",
        "hint": "ネストは for ... in ... を重ねます",
        "explanation": "[n for row in matrix for n in row] でネストしたリストを1次元にできます。外側のforから左から右に読みます。"
      }
    ],
    "javascript": [
      {
        "id": "kr_js_1",
        "title": "map で配列を変換しよう",
        "description": "各数値を2倍にした新しい配列を作ってください。",
        "code": "const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.___BLANK___(n => n * 2);\nconsole.log(doubled);",
        "blank": "map",
        "hint": "map() は各要素を変換した新しい配列を返します",
        "explanation": ".map() は元の配列を変更せず、各要素を関数で変換した新しい配列を返します。"
      },
      {
        "id": "kr_js_2",
        "title": "filter で絞り込もう",
        "description": "偶数だけの配列を作ってください。",
        "code": "const nums = [1, 2, 3, 4, 5, 6];\nconst evens = nums.___BLANK___(n => n % 2 === 0);\nconsole.log(evens);",
        "blank": "filter",
        "hint": "filter() は条件を満たす要素だけ残した配列を返します",
        "explanation": ".filter() は条件が true の要素だけを残した新しい配列を返します。"
      },
      {
        "id": "kr_js_3",
        "title": "reduce で合計を求めよう",
        "description": "配列の合計を reduce で計算してください。",
        "code": "const nums = [10, 20, 30, 40];\nconst total = nums.___BLANK___((acc, n) => acc + n, 0);\nconsole.log(total);",
        "blank": "reduce",
        "hint": "reduce() は配列を1つの値にまとめます",
        "explanation": ".reduce((蓄積値, 現在値) => ..., 初期値) で配列を1つの値に集約します。"
      },
      {
        "id": "kr_js_4",
        "title": "find で要素を検索しよう",
        "description": "最初に条件を満たす要素を取得してください。",
        "code": "const users = [{name:\"Kim\",age:25},{name:\"Lee\",age:17}];\nconst adult = users.___BLANK___(u => u.age >= 18);\nconsole.log(adult.name);",
        "blank": "find",
        "hint": "find() は最初にマッチした要素を返します",
        "explanation": ".find() は条件を満たす最初の要素を返します。見つからなければ undefined です。"
      },
      {
        "id": "kr_js_5",
        "title": "every で全要素を確認しよう",
        "description": "全員が18歳以上か確認してください。",
        "code": "const ages = [20, 25, 18, 30];\nconst allAdults = ages.___BLANK___(age => age >= 18);\nconsole.log(allAdults);",
        "blank": "every",
        "hint": "every() は全要素が条件を満たすか確認します",
        "explanation": ".every() は全要素が条件を満たせば true です。.some() は1つでも満たせば true です。"
      },
      {
        "id": "kr_js_6",
        "title": "flatMap で変換と平坦化をまとめよう",
        "description": "各文を単語に分解して1つの配列にしてください。",
        "code": "const sentences = [\"hello world\", \"foo bar\"];\nconst words = sentences.___BLANK___(s => s.split(\" \"));\nconsole.log(words);",
        "blank": "flatMap",
        "hint": "flatMap() は map した結果を1段階フラットにします",
        "explanation": ".flatMap() は map() と flat() を組み合わせたものです。"
      }
    ]
  },
  "CA": {
    "python": [
      {
        "id": "ca_py_1",
        "title": "デコレータを定義しよう",
        "description": "デコレータは関数を受け取り関数を返す関数です。外側の関数を定義してください。",
        "code": "def my_decorator(___BLANK___):\n    def wrapper():\n        print(\"前処理\")\n        func()\n        print(\"後処理\")\n    return wrapper",
        "blank": "func",
        "hint": "デコレータは関数を引数に受け取ります",
        "explanation": "デコレータは関数を引数に受け取り、新しい関数（wrapper）を返す高階関数です。関数に機能を追加するときに使います。"
      },
      {
        "id": "ca_py_2",
        "title": "@記号でデコレータを適用しよう",
        "description": "定義したデコレータを @記号で適用してください。",
        "code": "def my_decorator(func):\n    def wrapper():\n        print(\"ログ記録\")\n        func()\n    return wrapper\n\n___BLANK___my_decorator\ndef greet():\n    print(\"Hello, Canada!\")",
        "blank": "@",
        "hint": "デコレータの適用は @デコレータ名 を関数定義の直前に書きます",
        "explanation": "@my_decorator は greet = my_decorator(greet) と同じ意味です。@記号でシンプルに書けます。"
      },
      {
        "id": "ca_py_3",
        "title": "functools.wraps で情報を保持しよう",
        "description": "デコレータで元の関数の名前などを保持するには functools.wraps を使います。",
        "code": "from functools import ___BLANK___\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper",
        "blank": "wraps",
        "hint": "functools から wraps をインポートします",
        "explanation": "@wraps(func) を wrapper に付けると、元の関数の __name__ や __doc__ が保たれます。デバッグのときに役立ちます。"
      },
      {
        "id": "ca_py_4",
        "title": "引数を持つ関数にデコレータを使おう",
        "description": "どんな引数の関数にも使えるよう、wrapper に可変長引数を渡してください。",
        "code": "def logger(func):\n    def wrapper(*args, ___BLANK___):\n        print(f\"{func.__name__} が呼ばれました\")\n        return func(*args, **kwargs)\n    return wrapper",
        "blank": "**kwargs",
        "hint": "キーワード引数は **kwargs でまとめて受け取れます",
        "explanation": "*args で位置引数、**kwargs でキーワード引数を全部受け取れます。これでどんな関数にも使えるデコレータになります。"
      },
      {
        "id": "ca_py_5",
        "title": "@property を使おう",
        "description": "クラスのメソッドをプロパティとして使えるデコレータを付けてください。",
        "code": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    ___BLANK___property\n    def area(self):\n        return 3.14 * self._radius ** 2",
        "blank": "@",
        "hint": "@property でメソッドを属性のように呼び出せます",
        "explanation": "@property を付けると c.area() ではなく c.area で呼べます。計算プロパティを作るときに便利です。"
      },
      {
        "id": "ca_py_6",
        "title": "@staticmethod を使おう",
        "description": "インスタンスを作らなくても呼べる静的メソッドを定義してください。",
        "code": "class MathHelper:\n    ___BLANK___staticmethod\n    def add(a, b):\n        return a + b\n\nprint(MathHelper.add(3, 4))",
        "blank": "@",
        "hint": "@staticmethod でインスタンス不要なメソッドを作れます",
        "explanation": "@staticmethod を付けるとクラスに関連しているがselfを使わない関数をまとめられます。MathHelper.add() のように呼び出せます。"
      }
    ],
    "javascript": [
      {
        "id": "ca_js_1",
        "title": "クロージャで変数を閉じ込めよう",
        "description": "内側の関数から外側の変数にアクセスしてください。",
        "code": "function makeCounter() {\n  let count = 0;\n  return function() {\n    ___BLANK___++;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());",
        "blank": "count",
        "hint": "内側の関数は外側の変数 count にアクセスできます",
        "explanation": "クロージャとは、関数が定義されたスコープの変数を保持できる仕組みです。"
      },
      {
        "id": "ca_js_2",
        "title": "IIFE で即時実行しよう",
        "description": "定義と同時に実行される関数式を書いてください。",
        "code": "(___BLANK___() => {\n  const msg = \"即時実行！\";\n  console.log(msg);\n})();",
        "blank": "function",
        "hint": "(function() {...})() または (() => {...})() の形です",
        "explanation": "IIFE は定義と同時に実行されます。変数のスコープを限定したいときに使います。"
      },
      {
        "id": "ca_js_3",
        "title": "プライベート変数をクロージャで作ろう",
        "description": "balance を外から直接変えられないようにして getBalance だけ公開してください。",
        "code": "function createBank() {\n  let balance = 0;\n  return {\n    deposit(n) { balance += n; },\n    getBalance() { ___BLANK___ balance; }\n  };\n}\nconst bank = createBank();\nbank.deposit(100);\nconsole.log(bank.getBalance());",
        "blank": "return",
        "hint": "return で値を返します",
        "explanation": "クロージャで balance を外から隠し、deposit() と getBalance() だけを公開するモジュールパターンです。"
      },
      {
        "id": "ca_js_4",
        "title": "let のブロックスコープを理解しよう",
        "description": "ブロックスコープを持つ変数宣言を使ってください。",
        "code": "for (___BLANK___ i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        "blank": "let",
        "hint": "let はブロックごとに独立したスコープを作ります",
        "explanation": "let は for のブロックごとに i を作るので 0,1,2 が表示されます。var だと 3,3,3 になります。"
      },
      {
        "id": "ca_js_5",
        "title": "カリー化で関数を分割しよう",
        "description": "引数を1つずつ受け取るカリー化関数を作ってください。",
        "code": "function multiply(a) {\n  return ___BLANK___(b) {\n    return a * b;\n  };\n}\nconst double = multiply(2);\nconsole.log(double(5));",
        "blank": "function",
        "hint": "関数を返す関数を作ります",
        "explanation": "カリー化は複数引数の関数を、引数を1つずつ受け取る関数の連鎖に変換します。"
      },
      {
        "id": "ca_js_6",
        "title": "メモ化で計算を高速化しよう",
        "description": "計算結果をキャッシュして同じ計算を繰り返さないようにしてください。",
        "code": "function memoize(fn) {\n  const cache = {};\n  return function(n) {\n    if (n in cache) return ___BLANK___[n];\n    return cache[n] = fn(n);\n  };\n}",
        "blank": "cache",
        "hint": "キャッシュから値を返します",
        "explanation": "メモ化は引数をキーにして結果を保存します。同じ引数では計算せずキャッシュを返します。"
      }
    ]
  },
  "IT": {
    "python": [
      {
        "id": "it_py_1",
        "title": "yield でジェネレータを作ろう",
        "description": "1から3までの数を順番に返すジェネレータ関数を作ってください。",
        "code": "def count_up():\n    ___BLANK___ 1\n    yield 2\n    yield 3\n\nfor n in count_up():\n    print(n)",
        "blank": "yield",
        "hint": "ジェネレータ関数は return の代わりに yield を使います",
        "explanation": "yield は値を返しつつ関数の状態を保持します。次に呼ばれたとき続きから再開します。一度に全データをメモリに乗せないので効率的です。"
      },
      {
        "id": "it_py_2",
        "title": "next() で値を取り出そう",
        "description": "ジェネレータから値を1つ取り出してください。",
        "code": "def gen():\n    yield \"pasta\"\n    yield \"pizza\"\n\ng = gen()\nprint(___BLANK___(g))",
        "blank": "next",
        "hint": "次の値を取り出すには next() を使います",
        "explanation": "next() を呼ぶたびに yield の次の値が返されます。値がなくなると StopIteration が発生します。"
      },
      {
        "id": "it_py_3",
        "title": "ジェネレータ式を使おう",
        "description": "リスト内包表記の [] を () にするとジェネレータ式になります。1から100の2乗を作ってください。",
        "code": "gen = (x**2 for x in ___BLANK___(1, 101))\nprint(next(gen))",
        "blank": "range",
        "hint": "1から100は range(1, 101) です",
        "explanation": "(式 for 変数 in ...) はジェネレータ式です。リストと違い必要なときだけ値を生成するのでメモリ効率がいいです。"
      },
      {
        "id": "it_py_4",
        "title": "yield from で委譲しよう",
        "description": "別のイテラブルをそのままジェネレータとして使うには yield from を使います。",
        "code": "def chain(*iterables):\n    for it in iterables:\n        ___BLANK___ from it\n\nfor x in chain([1,2], [3,4]):\n    print(x)",
        "blank": "yield",
        "hint": "yield from イテラブル でまとめて委譲できます",
        "explanation": "yield from は別のイテラブルを丸ごとジェネレータとして利用できます。ネストしたジェネレータをシンプルに書けます。"
      },
      {
        "id": "it_py_5",
        "title": "ジェネレータをリストに変換しよう",
        "description": "ジェネレータの全要素をリストに変換してください。",
        "code": "def even_numbers(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i\n\nresult = ___BLANK___(even_numbers(10))\nprint(result)",
        "blank": "list",
        "hint": "list() でジェネレータを全部リストに変換できます",
        "explanation": "list() でジェネレータの全要素を一度に取り出せます。ただし大量データでは注意が必要です。"
      },
      {
        "id": "it_py_6",
        "title": "itertools.chain を使おう",
        "description": "複数のイテラブルをひとつに結合してください。",
        "code": "from itertools import ___BLANK___\n\nresult = list(chain([1,2,3], [4,5,6]))\nprint(result)",
        "blank": "chain",
        "hint": "itertools.chain で複数イテラブルを結合できます",
        "explanation": "itertools.chain() は複数のリストやジェネレータを1つのイテレータとして扱えます。itertools には他にも islice、product など便利な関数があります。"
      }
    ],
    "javascript": [
      {
        "id": "it_js_1",
        "title": "ジェネレータ関数を作ろう",
        "description": "ジェネレータ関数を定義する特別な構文を使ってください。",
        "code": "function___BLANK___ counter() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = counter();\nconsole.log(gen.next().value);",
        "blank": "*",
        "hint": "function* でジェネレータ関数を定義します",
        "explanation": "function* でジェネレータ関数を作れます。yield するたびに値が返り、次の next() 呼び出しで再開します。"
      },
      {
        "id": "it_js_2",
        "title": "next() で値を取り出そう",
        "description": "ジェネレータから次の値を取り出してください。",
        "code": "function* nums() {\n  yield 10;\n  yield 20;\n}\nconst gen = nums();\nconst result = gen.___BLANK___();\nconsole.log(result.value);",
        "blank": "next",
        "hint": ".next() でジェネレータを1ステップ進めます",
        "explanation": "gen.next() は { value: 値, done: boolean } を返します。"
      },
      {
        "id": "it_js_3",
        "title": "for...of でジェネレータを反復しよう",
        "description": "ジェネレータの値を for...of でループしてください。",
        "code": "function* range(n) {\n  for (let i = 0; i < n; i++) yield i;\n}\n\n___BLANK___ (const v of range(3)) {\n  console.log(v);\n}",
        "blank": "for",
        "hint": "for...of でイテラブルをループできます",
        "explanation": "ジェネレータは for...of で使えます。done が true になると自動でループが終了します。"
      },
      {
        "id": "it_js_4",
        "title": "無限ジェネレータを作ろう",
        "description": "無限に増加する数を生成するジェネレータを作ってください。",
        "code": "function* infinite() {\n  let n = 0;\n  ___BLANK___ (true) {\n    yield n++;\n  }\n}\nconst gen = infinite();\nconsole.log(gen.next().value);",
        "blank": "while",
        "hint": "while(true) で無限ループを作れます",
        "explanation": "ジェネレータは yield のたびに一時停止するので while(true) でも安全です。"
      },
      {
        "id": "it_js_5",
        "title": "Symbol.iterator でイテラブルを作ろう",
        "description": "オブジェクトを for...of で使えるようにするシンボルを設定してください。",
        "code": "const range = {\n  [Symbol.___BLANK___]() {\n    let n = 1;\n    return { next() { return n <= 3 ? {value: n++, done: false} : {done: true}; } };\n  }\n};\nfor (const v of range) console.log(v);",
        "blank": "iterator",
        "hint": "Symbol.iterator でイテラブルプロトコルを実装します",
        "explanation": "Symbol.iterator を持つオブジェクトは for...of、スプレッド構文、分割代入で使えます。"
      },
      {
        "id": "it_js_6",
        "title": "return() でジェネレータを終了しよう",
        "description": "ジェネレータを強制終了してください。",
        "code": "function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\ng.___BLANK___();\nconsole.log(g.next().done);",
        "blank": "return",
        "hint": ".return() でジェネレータを終了できます",
        "explanation": "gen.return() はジェネレータを終了し、以降の next() は { value: undefined, done: true } を返します。"
      }
    ]
  },
  "MX": {
    "python": [
      {
        "id": "mx_py_1",
        "title": "async def で非同期関数を定義しよう",
        "description": "非同期関数を定義するキーワードを入れてください。",
        "code": "import asyncio\n\n___BLANK___ def say_hello():\n    print(\"Hola, Mexico!\")\n\nasyncio.run(say_hello())",
        "blank": "async",
        "hint": "非同期関数は async def で定義します",
        "explanation": "async def で定義した関数はコルーチンになります。asyncio.run() で実行できます。"
      },
      {
        "id": "mx_py_2",
        "title": "await で非同期処理を待とう",
        "description": "非同期の処理が終わるまで待つキーワードを入れてください。",
        "code": "import asyncio\n\nasync def wait_and_print():\n    ___BLANK___ asyncio.sleep(1)\n    print(\"1秒後に表示！\")",
        "blank": "await",
        "hint": "非同期処理を待つには await を使います",
        "explanation": "await は非同期関数の完了を待ちます。待っている間、他の処理を進められるのが非同期の利点です。"
      },
      {
        "id": "mx_py_3",
        "title": "asyncio.run でコルーチンを実行しよう",
        "description": "async関数を実行する関数を使ってください。",
        "code": "import asyncio\n\nasync def main():\n    print(\"非同期処理\")\n\nasyncio.___BLANK___(main())",
        "blank": "run",
        "hint": "コルーチンを実行するのは asyncio.run() です",
        "explanation": "asyncio.run() はイベントループを作り、コルーチンを実行します。プログラムのエントリポイントで使います。"
      },
      {
        "id": "mx_py_4",
        "title": "asyncio.sleep で非同期に待とう",
        "description": "1秒間、他の処理をブロックせずに待ってください。",
        "code": "import asyncio\n\nasync def task():\n    await asyncio.___BLANK___(1)\n    return \"完了\"",
        "blank": "sleep",
        "hint": "非同期スリープは asyncio.sleep() です",
        "explanation": "asyncio.sleep() は time.sleep() と違い、待っている間他のコルーチンが動けます。非同期処理の練習に最適です。"
      },
      {
        "id": "mx_py_5",
        "title": "複数のタスクを同時に実行しよう",
        "description": "複数のコルーチンを同時に実行してください。",
        "code": "import asyncio\n\nasync def main():\n    results = await asyncio.___BLANK___(\n        asyncio.sleep(1),\n        asyncio.sleep(2)\n    )\n    print(\"両方完了！\")",
        "blank": "gather",
        "hint": "複数コルーチンの同時実行は asyncio.gather() です",
        "explanation": "asyncio.gather() で複数のコルーチンを並行実行できます。全部が終わるまで待ちます。"
      },
      {
        "id": "mx_py_6",
        "title": "async for でイテレートしよう",
        "description": "非同期イテレータをループするキーワードを入れてください。",
        "code": "import asyncio\n\nasync def agen():\n    for i in range(3):\n        yield i\n\nasync def main():\n    ___BLANK___ async for i in agen():\n        print(i)",
        "blank": "async",
        "hint": "非同期イテレータのループは async for です",
        "explanation": "async for は非同期ジェネレータやAsyncIterableをループするときに使います。"
      }
    ],
    "javascript": [
      {
        "id": "mx_js_1",
        "title": "async 関数を定義しよう",
        "description": "非同期関数を定義するキーワードを入れてください。",
        "code": "___BLANK___ function greet() {\n  return \"Hola Mexico!\";\n}\ngreet().then(msg => console.log(msg));",
        "blank": "async",
        "hint": "非同期関数は async function で定義します",
        "explanation": "async 関数は常に Promise を返します。return した値は自動で Promise.resolve() でラップされます。"
      },
      {
        "id": "mx_js_2",
        "title": "await で Promise を解決しよう",
        "description": "Promise の値を受け取ってください。",
        "code": "async function main() {\n  const data = ___BLANK___ Promise.resolve(\"Hola!\");\n  console.log(data);\n}\nmain();",
        "blank": "await",
        "hint": "await で Promise の結果を取り出します",
        "explanation": "await は Promise が解決するまで待ち、値を直接返します。"
      },
      {
        "id": "mx_js_3",
        "title": "try...catch で非同期エラーを処理しよう",
        "description": "非同期エラーを捕捉してください。",
        "code": "async function run() {\n  ___BLANK___ {\n    await Promise.reject(new Error(\"失敗\"));\n  } catch (e) {\n    console.log(\"捕捉:\", e.message);\n  }\n}\nrun();",
        "blank": "try",
        "hint": "async/await のエラーは try...catch で捕捉します",
        "explanation": "await が reject されると throw されたのと同じになります。try...catch で処理できます。"
      },
      {
        "id": "mx_js_4",
        "title": "Promise.all で並列処理しよう",
        "description": "複数の非同期処理を並列で待ちましょう。",
        "code": "async function main() {\n  const [a, b] = await Promise.___BLANK___([Promise.resolve(1), Promise.resolve(2)]);\n  console.log(a + b);\n}\nmain();",
        "blank": "all",
        "hint": "Promise.all で並列実行して全完了を待ちます",
        "explanation": "Promise.all([p1, p2]) は両方完了したとき、結果の配列を返します。"
      },
      {
        "id": "mx_js_5",
        "title": "Promise.race で最速を取ろう",
        "description": "最初に完了した Promise の結果を取得してください。",
        "code": "Promise.___BLANK___([new Promise(r => setTimeout(() => r(\"遅い\"), 100)), new Promise(r => setTimeout(() => r(\"速い\"), 10))])\n  .then(result => console.log(result));",
        "blank": "race",
        "hint": "Promise.race で最初に解決したものを受け取ります",
        "explanation": "Promise.race() は最初に解決（または拒否）した Promise の結果を返します。"
      },
      {
        "id": "mx_js_6",
        "title": "Promise.allSettled で全結果を収集しよう",
        "description": "成功・失敗関係なく全 Promise の結果を取得してください。",
        "code": "Promise.___BLANK___([Promise.resolve(\"OK\"), Promise.reject(\"NG\")])\n  .then(results => results.forEach(r => console.log(r.status)));",
        "blank": "allSettled",
        "hint": "Promise.allSettled は失敗しても全部の結果を返します",
        "explanation": "Promise.allSettled() は一部失敗しても全 Promise の { status, value/reason } を返します。"
      }
    ]
  },
  "SA": {
    "python": [
      {
        "id": "sa_py_1",
        "title": "Pythonオブジェクトを JSON文字列に変換しよう",
        "description": "辞書を JSON文字列に変換するメソッドを使ってください。",
        "code": "import json\ndata = {\"city\": \"Riyadh\", \"pop\": 7000000}\njson_str = json.___BLANK___(data)\nprint(json_str)",
        "blank": "dumps",
        "hint": "PythonオブジェクトをJSON文字列にするのは json.dumps() です",
        "explanation": "json.dumps() は Python の辞書やリストを JSON 文字列に変換します（dump String の略）。"
      },
      {
        "id": "sa_py_2",
        "title": "JSON文字列を Pythonオブジェクトに変換しよう",
        "description": "JSON文字列を Python の辞書に変換してください。",
        "code": "import json\njson_str = '{\"name\": \"Ali\", \"age\": 25}'\ndata = json.___BLANK___(json_str)\nprint(data[\"name\"])",
        "blank": "loads",
        "hint": "JSON文字列をPythonオブジェクトにするのは json.loads() です",
        "explanation": "json.loads() は JSON 文字列を Python の辞書やリストに変換します（load String の略）。"
      },
      {
        "id": "sa_py_3",
        "title": "インデントを付けて読みやすくしよう",
        "description": "JSON を人が読みやすい形式（インデント4）で出力してください。",
        "code": "import json\ndata = {\"country\": \"Saudi Arabia\", \"capital\": \"Riyadh\"}\nprint(json.dumps(data, ___BLANK___=4))",
        "blank": "indent",
        "hint": "インデントは indent パラメータで指定します",
        "explanation": "indent=4 を付けると改行・インデントされた見やすい JSON になります。デバッグやログ出力に便利です。"
      },
      {
        "id": "sa_py_4",
        "title": "ファイルに JSON を書き出そう",
        "description": "ファイルに JSON データを書き出すメソッドを使ってください。",
        "code": "import json\ndata = {\"message\": \"Hello\"}\nwith open(\"data.json\", \"w\") as f:\n    json.___BLANK___(data, f)",
        "blank": "dump",
        "hint": "ファイルへの書き出しは json.dump()（sなし）です",
        "explanation": "json.dump() はファイルオブジェクトに直接書き出します。json.dumps() との違いは s（string）の有無です。"
      },
      {
        "id": "sa_py_5",
        "title": "ファイルから JSON を読み込もう",
        "description": "JSON ファイルを読み込むメソッドを使ってください。",
        "code": "import json\nwith open(\"data.json\", \"r\") as f:\n    data = json.___BLANK___(f)\nprint(data)",
        "blank": "load",
        "hint": "ファイルからの読み込みは json.load()（sなし）です",
        "explanation": "json.load() はファイルオブジェクトから JSON を読み込みます。json.loads() との違いは s（string）の有無です。"
      },
      {
        "id": "sa_py_6",
        "title": "日本語を正しく出力しよう",
        "description": "日本語などの非ASCII文字をそのまま出力するオプションを使ってください。",
        "code": "import json\ndata = {\"name\": \"田中\"}\nprint(json.dumps(data, ___BLANK___=False))",
        "blank": "ensure_ascii",
        "hint": "ensure_ascii=False で日本語などをそのまま出力できます",
        "explanation": "デフォルトの ensure_ascii=True だと \\u7530\\u4e2d のようにエスケープされます。Falseにすると「田中」のまま出力できます。"
      }
    ],
    "javascript": [
      {
        "id": "sa_js_1",
        "title": "JSON.stringify でオブジェクトを文字列化しよう",
        "description": "JavaScriptオブジェクトをJSON文字列に変換してください。",
        "code": "const data = { city: \"Riyadh\", pop: 7000000 };\nconst json = JSON.___BLANK___(data);\nconsole.log(json);",
        "blank": "stringify",
        "hint": "JSON文字列化は JSON.stringify() です",
        "explanation": "JSON.stringify() はオブジェクトをJSON文字列に変換します。APIリクエストのボディ作成などに使います。"
      },
      {
        "id": "sa_js_2",
        "title": "JSON.parse で文字列をオブジェクト化しよう",
        "description": "JSON文字列をJavaScriptオブジェクトに変換してください。",
        "code": "const json = '{\"name\":\"Ali\",\"age\":30}';\nconst obj = JSON.___BLANK___(json);\nconsole.log(obj.name);",
        "blank": "parse",
        "hint": "JSON文字列をオブジェクトにするのは JSON.parse() です",
        "explanation": "JSON.parse() はJSON文字列をJavaScriptオブジェクトに変換します。"
      },
      {
        "id": "sa_js_3",
        "title": "インデントを付けて出力しよう",
        "description": "見やすい形式でJSONを出力してください。",
        "code": "const data = { country: \"Saudi Arabia\" };\nconsole.log(JSON.stringify(data, ___BLANK___, 2));",
        "blank": "null",
        "hint": "第2引数は replacer（不要なら null）、第3引数がインデント幅です",
        "explanation": "JSON.stringify(data, null, 2) でインデント2スペースの見やすいJSONになります。"
      },
      {
        "id": "sa_js_4",
        "title": "ディープコピーにJSONを使おう",
        "description": "JSONを使ってオブジェクトのディープコピーを作ってください。",
        "code": "const original = { a: 1, b: { c: 2 } };\nconst copy = JSON.___BLANK___(JSON.stringify(original));\ncopy.b.c = 99;\nconsole.log(original.b.c);",
        "blank": "parse",
        "hint": "stringify→parse でディープコピーできます",
        "explanation": "JSON.parse(JSON.stringify(obj)) でネストしたオブジェクトも完全にコピーできます。"
      },
      {
        "id": "sa_js_5",
        "title": "replacer で特定のキーだけ含めよう",
        "description": "name プロパティだけをJSON出力してください。",
        "code": "const user = { name: \"Ali\", password: \"secret\" };\nconst safe = JSON.stringify(user, ___BLANK___);\nconsole.log(safe);",
        "blank": "[\"name\"]",
        "hint": "第2引数に配列でキーを指定するとそれだけが出力されます",
        "explanation": "[\"name\"] を渡すと name だけが含まれます。機密情報を除いてシリアライズするときに使えます。"
      },
      {
        "id": "sa_js_6",
        "title": "toJSON でカスタムシリアライズしよう",
        "description": "toJSON メソッドを定義してカスタマイズしてください。",
        "code": "const item = {\n  name: \"Oil\",\n  price: 50,\n  ___BLANK___JSON() { return { n: this.name }; }\n};\nconsole.log(JSON.stringify(item));",
        "blank": "to",
        "hint": "toJSON() メソッドを定義します",
        "explanation": "toJSON() を定義するとJSONシリアライズ時にその結果が使われます。"
      }
    ]
  },
  "AR": {
    "python": [
      {
        "id": "ar_py_1",
        "title": "assert で検証しよう",
        "description": "値が正しいか検証する assert 文を使ってください。",
        "code": "result = 2 + 2\n___BLANK___ result == 4, \"計算が間違っています\"\nprint(\"テスト通過！\")",
        "blank": "assert",
        "hint": "assert 式, メッセージ の形で書きます",
        "explanation": "assert は式が False なら AssertionError を発生させます。テストや前提条件のチェックに使います。"
      },
      {
        "id": "ar_py_2",
        "title": "unittest をインポートしよう",
        "description": "Python の標準テストフレームワークをインポートしてください。",
        "code": "___BLANK___ unittest\n\nclass TestMath(unittest.TestCase):\n    pass",
        "blank": "import",
        "hint": "標準ライブラリは import で読み込みます",
        "explanation": "unittest は Python 標準のテストフレームワークです。JUnit（Java）に似た設計です。"
      },
      {
        "id": "ar_py_3",
        "title": "assertEqual で値を比較しよう",
        "description": "2つの値が等しいか確認するメソッドを使ってください。",
        "code": "import unittest\n\nclass TestCalc(unittest.TestCase):\n    def test_add(self):\n        self.___BLANK___(1 + 1, 2)",
        "blank": "assertEqual",
        "hint": "等しいことを確認するのは assertEqual() です",
        "explanation": "self.assertEqual(実際の値, 期待する値) で比較します。等しくなければテストが失敗します。"
      },
      {
        "id": "ar_py_4",
        "title": "assertRaises でエラーを確認しよう",
        "description": "特定のエラーが発生することを確認してください。",
        "code": "import unittest\n\nclass TestDiv(unittest.TestCase):\n    def test_zero_div(self):\n        with self.___BLANK___(ZeroDivisionError):\n            1 / 0",
        "blank": "assertRaises",
        "hint": "エラーが発生するか確認するのは assertRaises() です",
        "explanation": "assertRaises() でそのブロック内で指定のエラーが発生することを確認できます。"
      },
      {
        "id": "ar_py_5",
        "title": "setUp でテストの準備をしよう",
        "description": "各テストの前に実行される準備処理を定義してください。",
        "code": "import unittest\n\nclass TestList(unittest.TestCase):\n    def ___BLANK___(self):\n        self.data = [1, 2, 3]\n\n    def test_length(self):\n        self.assertEqual(len(self.data), 3)",
        "blank": "setUp",
        "hint": "各テストの前に呼ばれるメソッドは setUp です",
        "explanation": "setUp() は各テストメソッドの前に自動で呼ばれます。テストデータの初期化に使います。"
      },
      {
        "id": "ar_py_6",
        "title": "テストを実行しよう",
        "description": "スクリプトを直接実行したときにテストを走らせてください。",
        "code": "import unittest\n\nclass TestSample(unittest.TestCase):\n    def test_true(self):\n        self.assertTrue(True)\n\nif __name__ == \"___BLANK___\":\n    unittest.main()",
        "blank": "__main__",
        "hint": "スクリプトを直接実行すると __name__ は \"__main__\" になります",
        "explanation": "__name__ == \"__main__\" でそのファイルが直接実行されたかを判定できます。unittest.main() でテストが実行されます。"
      }
    ],
    "javascript": [
      {
        "id": "ar_js_1",
        "title": "throw でエラーを投げよう",
        "description": "不正な引数のとき Error を投げてください。",
        "code": "function divide(a, b) {\n  if (b === 0) ___BLANK___ new Error(\"0で割れません\");\n  return a / b;\n}",
        "blank": "throw",
        "hint": "エラーを発生させるのは throw です",
        "explanation": "throw でエラーを投げられます。Error オブジェクトを使うのが一般的です。"
      },
      {
        "id": "ar_js_2",
        "title": "try...catch でエラーを捕捉しよう",
        "description": "エラーを catch して処理してください。",
        "code": "___BLANK___ {\n  JSON.parse(\"invalid json\");\n} catch (e) {\n  console.log(\"エラー:\", e.message);\n}",
        "blank": "try",
        "hint": "try ブロックにエラーが起きそうなコードを書きます",
        "explanation": "try ブロック内でエラーが起きると catch に飛びます。"
      },
      {
        "id": "ar_js_3",
        "title": "カスタムエラーを作ろう",
        "description": "バリデーションエラー用のカスタムクラスを作ってください。",
        "code": "class AppError ___BLANK___ Error {\n  constructor(message, code) {\n    super(message);\n    this.code = code;\n  }\n}",
        "blank": "extends",
        "hint": "Error を extends で継承します",
        "explanation": "Error を継承するとカスタムエラーを作れます。instanceof AppError で種類を識別できます。"
      },
      {
        "id": "ar_js_4",
        "title": "finally で後処理を確実に実行しよう",
        "description": "エラーの有無に関係なく実行するブロックを書いてください。",
        "code": "try {\n  riskyOp();\n} catch (e) {\n  console.log(\"失敗\");\n} ___BLANK___ {\n  console.log(\"後処理完了\");\n}",
        "blank": "finally",
        "hint": "finally ブロックは必ず実行されます",
        "explanation": "finally は成功・失敗どちらでも実行されます。ローディング状態のリセットに使います。"
      },
      {
        "id": "ar_js_5",
        "title": "エラーの種類を instanceof で確認しよう",
        "description": "エラーの型を判定してください。",
        "code": "try {\n  null.toString();\n} catch (e) {\n  if (e ___BLANK___ TypeError) {\n    console.log(\"型エラーです\");\n  }\n}",
        "blank": "instanceof",
        "hint": "instanceof でオブジェクトの型を確認します",
        "explanation": "instanceof でエラーの種類を判定し、種類に応じて処理を分けられます。"
      },
      {
        "id": "ar_js_6",
        "title": "console.assert でテストしよう",
        "description": "計算結果が正しいか assert で確認してください。",
        "code": "function add(a, b) { return a + b; }\nconsole.___BLANK___(add(2, 3) === 5, \"2+3は5のはず\");\nconsole.log(\"テスト通過\");",
        "blank": "assert",
        "hint": "console.assert は条件が false のとき警告を出します",
        "explanation": "console.assert(条件, メッセージ) で簡易テストができます。"
      }
    ]
  },
  "TR": {
    "python": [
      {
        "id": "tr_py_1",
        "title": "deque でキューを作ろう",
        "description": "collections から deque をインポートしてください。",
        "code": "from collections import ___BLANK___\nq = deque([1, 2, 3])\nq.append(4)\nprint(q.popleft())",
        "blank": "deque",
        "hint": "deque は両端キューのデータ構造です",
        "explanation": "deque（double-ended queue）は両端から O(1) で追加・削除できます。リストと違い左端の操作が高速です。"
      },
      {
        "id": "tr_py_2",
        "title": "appendleft でスタックを使おう",
        "description": "deque の左端に要素を追加してください。",
        "code": "from collections import deque\nd = deque([2, 3, 4])\nd.___BLANK___(1)\nprint(d)",
        "blank": "appendleft",
        "hint": "左端への追加は appendleft() です",
        "explanation": "appendleft() は先頭に O(1) で追加できます。append() は末尾、popleft() は先頭から取り出します。"
      },
      {
        "id": "tr_py_3",
        "title": "defaultdict でキー不在を処理しよう",
        "description": "キーが存在しないときデフォルト値を返す辞書を作ってください。",
        "code": "from collections import ___BLANK___\ncount = defaultdict(int)\ncount[\"apple\"] += 1\nprint(count[\"apple\"], count[\"banana\"])",
        "blank": "defaultdict",
        "hint": "defaultdict(int) で存在しないキーは自動で 0 になります",
        "explanation": "defaultdict(int) はキーがないとき自動で 0 を返します。defaultdict(list) ならリスト、defaultdict(set) ならセットが返ります。"
      },
      {
        "id": "tr_py_4",
        "title": "Counter で最頻値を見つけよう",
        "description": "most_common() で最もよく出る要素を取得してください。",
        "code": "from collections import Counter\nwords = [\"cat\",\"dog\",\"cat\",\"bird\",\"dog\",\"cat\"]\nc = Counter(words)\nprint(c.___BLANK___(1))",
        "blank": "most_common",
        "hint": "最頻値を取るのは most_common(n) です",
        "explanation": "most_common(n) で出現回数の多い順に n 個取得できます。most_common() は全要素を頻度順に返します。"
      },
      {
        "id": "tr_py_5",
        "title": "namedtuple で名前付きタプルを作ろう",
        "description": "フィールド名付きのタプルを作ってください。",
        "code": "from collections import ___BLANK___\nPoint = namedtuple(\"Point\", [\"x\", \"y\"])\np = Point(10, 20)\nprint(p.x, p.y)",
        "blank": "namedtuple",
        "hint": "namedtuple でフィールド名付きタプルを定義できます",
        "explanation": "namedtuple は通常タプルと同じですが p[0] の代わりに p.x と書けます。読みやすいコードになります。"
      },
      {
        "id": "tr_py_6",
        "title": "heapq でヒープを使おう",
        "description": "最小ヒープに要素を追加してください。",
        "code": "import heapq\nheap = []\nheapq.___BLANK___(heap, 5)\nheapq.heappush(heap, 1)\nheapq.heappush(heap, 3)\nprint(heap[0])",
        "blank": "heappush",
        "hint": "ヒープへの追加は heapq.heappush() です",
        "explanation": "heapq.heappush() で最小ヒープに追加できます。heap[0] が常に最小値です。heappop() で最小値を取り出せます。"
      }
    ],
    "javascript": [
      {
        "id": "tr_js_1",
        "title": "Map に値をセットしよう",
        "description": "Map に値を追加してください。",
        "code": "const map = new Map();\nmap.___BLANK___(\"Ankara\", \"Turkey\");\nconsole.log(map.get(\"Ankara\"));",
        "blank": "set",
        "hint": "Map への追加は .set(キー, 値) です",
        "explanation": "Map は任意の型をキーにできます。.set() で追加、.get() で取得します。"
      },
      {
        "id": "tr_js_2",
        "title": "Map から値を取得しよう",
        "description": "Map からキーで値を取得してください。",
        "code": "const scores = new Map([[\"Alice\", 95], [\"Bob\", 87]]);\nconsole.log(scores.___BLANK___(\"Alice\"));",
        "blank": "get",
        "hint": "Map からの取得は .get(キー) です",
        "explanation": ".get(キー) で値を取得します。キーが存在しない場合は undefined が返ります。"
      },
      {
        "id": "tr_js_3",
        "title": "Set で重複を除去しよう",
        "description": "重複を持たないコレクションを作ってください。",
        "code": "const nums = [1, 2, 2, 3, 3, 3];\nconst unique = [...new ___BLANK___(nums)];\nconsole.log(unique);",
        "blank": "Set",
        "hint": "Set は重複を持たないコレクションです",
        "explanation": "new Set(配列) で重複を取り除けます。[...new Set(arr)] でユニークな配列に変換できます。"
      },
      {
        "id": "tr_js_4",
        "title": "Set で積集合を求めよう",
        "description": "2つの Set の共通要素を求めてください。",
        "code": "const a = new Set([1, 2, 3, 4]);\nconst b = new Set([3, 4, 5, 6]);\nconst intersection = [...a].___BLANK___(x => b.has(x));\nconsole.log(intersection);",
        "blank": "filter",
        "hint": "filter で a の中で b にも存在する要素を取り出します",
        "explanation": "[...a].filter(x => b.has(x)) で積集合を求められます。"
      },
      {
        "id": "tr_js_5",
        "title": "Map をイテレートしよう",
        "description": "Map のすべてのエントリをループしてください。",
        "code": "const capitals = new Map([[\"TR\",\"Ankara\"],[\"JP\",\"Tokyo\"]]);\nfor (const [country, capital] ___BLANK___ capitals) {\n  console.log(`${country}: ${capital}`);\n}",
        "blank": "of",
        "hint": "for...of で Map をイテレートできます",
        "explanation": "for (const [key, value] of map) で Map の全エントリをループできます。"
      },
      {
        "id": "tr_js_6",
        "title": "WeakMap でプライベートデータを管理しよう",
        "description": "WeakMap でオブジェクトに紐付いたプライベートデータを管理してください。",
        "code": "const _data = new ___BLANK___();\nclass User {\n  constructor(name) { _data.set(this, { name }); }\n  getName() { return _data.get(this).name; }\n}",
        "blank": "WeakMap",
        "hint": "WeakMap はキーを弱参照で保持します",
        "explanation": "WeakMap のキーはオブジェクトのみです。参照がなくなると自動でGCされます。"
      }
    ]
  },
  "ID": {
    "python": [
      {
        "id": "id_py_1",
        "title": "再帰で階乗を計算しよう",
        "description": "0の階乗を返すベースケースを書いてください。",
        "code": "def factorial(n):\n    if n == 0:\n        ___BLANK___ 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
        "blank": "return",
        "hint": "ベースケースは return で値を返します",
        "explanation": "再帰の「ベースケース」は再帰を止める条件です。0! = 1 が基底条件で、n! = n × (n-1)! が再帰の式です。"
      },
      {
        "id": "id_py_2",
        "title": "再帰でフィボナッチ数を計算しよう",
        "description": "フィボナッチ数の再帰定義を完成させてください。",
        "code": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) ___BLANK___ fib(n-2)\n\nprint(fib(7))",
        "blank": "+",
        "hint": "フィボナッチ数は前の2つの和です",
        "explanation": "fib(n) = fib(n-1) + fib(n-2) が再帰式です。n=7 は 13 になります。"
      },
      {
        "id": "id_py_3",
        "title": "再帰でリストの合計を求めよう",
        "description": "リストの先頭と残りの合計を足して全体の合計を求めてください。",
        "code": "def total(lst):\n    if not lst:\n        return 0\n    return lst[0] ___BLANK___ total(lst[1:])\n\nprint(total([1, 2, 3, 4, 5]))",
        "blank": "+",
        "hint": "先頭要素 + 残りの合計を再帰で計算します",
        "explanation": "total([1,2,3]) = 1 + total([2,3]) = 1 + 2 + total([3]) = 1 + 2 + 3 + total([]) = 6 と展開されます。"
      },
      {
        "id": "id_py_4",
        "title": "再帰で文字列を逆順にしよう",
        "description": "文字列の末尾文字 + 残りの逆順 を返してください。",
        "code": "def reverse(s):\n    if len(s) == 0:\n        return \"\"\n    return s[-1] + reverse(s[___BLANK___])\n\nprint(reverse(\"Bali\"))",
        "blank": ":-1",
        "hint": "s[:-1] は末尾を除いたスライスです",
        "explanation": "reverse(\"Bali\") = \"i\" + reverse(\"Bal\") = \"i\" + \"l\" + reverse(\"Ba\") = ... = \"ilaB\" と展開されます。"
      },
      {
        "id": "id_py_5",
        "title": "再帰で二分探索しよう",
        "description": "リストの中央値を調べ、ターゲットが小さければ左半分を探索してください。",
        "code": "def binary_search(arr, target, lo, hi):\n    if lo > hi:\n        return -1\n    mid = (lo + hi) // 2\n    if arr[mid] == target:\n        return mid\n    elif target < arr[mid]:\n        return binary_search(arr, target, lo, ___BLANK___)\n    else:\n        return binary_search(arr, target, mid + 1, hi)",
        "blank": "mid - 1",
        "hint": "ターゲットが中央より小さいとき、右端を mid-1 に絞ります",
        "explanation": "二分探索は毎回探索範囲を半分にします。O(log n) で動作し、リスト探索の O(n) より高速です。"
      },
      {
        "id": "id_py_6",
        "title": "lru_cache でメモ化しよう",
        "description": "再帰の計算結果をキャッシュして高速化してください。",
        "code": "from functools import ___BLANK___\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(50))",
        "blank": "lru_cache",
        "hint": "結果をキャッシュするデコレータは lru_cache です",
        "explanation": "@lru_cache で同じ引数の計算をキャッシュします。fib(50) を素の再帰で計算すると膨大な計算になりますがキャッシュで一瞬になります。"
      }
    ],
    "javascript": [
      {
        "id": "id_js_1",
        "title": "再帰で階乗を計算しよう",
        "description": "ベースケース（0の階乗）を返してください。",
        "code": "function factorial(n) {\n  if (n === 0) ___BLANK___ 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));",
        "blank": "return",
        "hint": "ベースケースは return で値を返します",
        "explanation": "再帰にはベースケースと再帰ケースが必要です。factorial(5) = 120 です。"
      },
      {
        "id": "id_js_2",
        "title": "再帰でフィボナッチ数を求めよう",
        "description": "再帰の式を完成させてください。",
        "code": "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) ___BLANK___ fib(n - 2);\n}\nconsole.log(fib(7));",
        "blank": "+",
        "hint": "フィボナッチ数は前の2つの合計です",
        "explanation": "fib(7) = fib(6) + fib(5) = ... = 13 です。"
      },
      {
        "id": "id_js_3",
        "title": "再帰でネスト配列をフラットにしよう",
        "description": "ネストした配列を再帰で1次元にしてください。",
        "code": "function flatten(arr) {\n  return arr.reduce((acc, item) =>\n    Array.isArray(item) ? acc.concat(___BLANK___(item)) : acc.concat(item)\n  , []);\n}",
        "blank": "flatten",
        "hint": "配列の要素が配列なら再帰します",
        "explanation": "要素が配列のとき flatten(item) を再帰呼び出しします。"
      },
      {
        "id": "id_js_4",
        "title": "末尾再帰でスタックを節約しよう",
        "description": "アキュムレータを使って末尾再帰で階乗を計算してください。",
        "code": "function factorial(n, ___BLANK___ = 1) {\n  if (n === 0) return acc;\n  return factorial(n - 1, n * acc);\n}\nconsole.log(factorial(5));",
        "blank": "acc",
        "hint": "デフォルト引数 acc = 1 でアキュムレータを初期化します",
        "explanation": "末尾再帰はアキュムレータパターンで実装します。結果を引数で持ち回します。"
      },
      {
        "id": "id_js_5",
        "title": "メモ化で再帰を高速化しよう",
        "description": "計算済みの結果をキャッシュしてください。",
        "code": "const memo = {};\nfunction fib(n) {\n  if (n in memo) return ___BLANK___[n];\n  if (n <= 1) return n;\n  return memo[n] = fib(n-1) + fib(n-2);\n}\nconsole.log(fib(30));",
        "blank": "memo",
        "hint": "memo オブジェクトからキャッシュを返します",
        "explanation": "メモ化は同じ引数の計算を1回だけにします。fib(30) が劇的に速くなります。"
      },
      {
        "id": "id_js_6",
        "title": "再帰で二分探索しよう",
        "description": "対象が中央より小さいとき左半分を探索してください。",
        "code": "function bSearch(arr, t, lo, hi) {\n  if (lo > hi) return -1;\n  const mid = Math.floor((lo + hi) / 2);\n  if (arr[mid] === t) return mid;\n  if (t < arr[mid]) return bSearch(arr, t, lo, ___BLANK___);\n  return bSearch(arr, t, mid + 1, hi);\n}",
        "blank": "mid - 1",
        "hint": "ターゲットが中央より小さいとき、右端を mid-1 に絞ります",
        "explanation": "二分探索は毎回探索範囲を半分にします。O(log n) で動作します。"
      }
    ]
  },
  "ZA": {
    "python": [
      {
        "id": "za_py_1",
        "title": "型ヒントで引数の型を示そう",
        "description": "引数 name が str 型であることを型ヒントで示してください。",
        "code": "def greet(name: ___BLANK___) -> str:\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Cape Town\"))",
        "blank": "str",
        "hint": "文字列の型ヒントは str です",
        "explanation": "型ヒントはコードの読みやすさを上げ、mypy などのツールで型チェックができます。実行時の動作には影響しません。"
      },
      {
        "id": "za_py_2",
        "title": "戻り値の型ヒントを付けよう",
        "description": "戻り値が int 型であることを示してください。",
        "code": "def square(n: int) ___BLANK___ int:\n    return n * n\n\nprint(square(9))",
        "blank": "->",
        "hint": "戻り値の型は -> 型名 で示します",
        "explanation": "-> int は戻り値が int であることを示します。def func(x: int) -> str: のように書きます。"
      },
      {
        "id": "za_py_3",
        "title": "List 型ヒントを使おう",
        "description": "整数のリストを受け取る引数の型ヒントを書いてください。",
        "code": "from typing import ___BLANK___\n\ndef total(nums: List[int]) -> int:\n    return sum(nums)",
        "blank": "List",
        "hint": "リストの型ヒントは typing の List です",
        "explanation": "from typing import List で List[int]（整数リスト）のような型ヒントが使えます。Python 3.9+ では list[int] とも書けます。"
      },
      {
        "id": "za_py_4",
        "title": "Optional で None も許容しよう",
        "description": "None または str を受け取る引数の型ヒントを書いてください。",
        "code": "from typing import ___BLANK___\n\ndef greet(name: Optional[str] = None) -> str:\n    if name is None:\n        return \"Hello!\"\n    return f\"Hello, {name}!\"",
        "blank": "Optional",
        "hint": "None も許容するのは Optional です",
        "explanation": "Optional[str] は Union[str, None] と同じ意味です。デフォルト引数が None のときによく使います。"
      },
      {
        "id": "za_py_5",
        "title": "Dict 型ヒントを使おう",
        "description": "文字列キー・整数値の辞書を受け取る引数の型ヒントを書いてください。",
        "code": "from typing import Dict\n\ndef show_scores(scores: ___BLANK___[str, int]) -> None:\n    for name, score in scores.items():\n        print(f\"{name}: {score}\")",
        "blank": "Dict",
        "hint": "辞書の型ヒントは Dict[キー型, 値型] です",
        "explanation": "Dict[str, int] は文字列をキー、整数を値にする辞書の型ヒントです。"
      },
      {
        "id": "za_py_6",
        "title": "Union で複数の型を許容しよう",
        "description": "int または float を受け取る引数の型ヒントを書いてください。",
        "code": "from typing import ___BLANK___\n\ndef double(n: Union[int, float]) -> float:\n    return n * 2.0\n\nprint(double(3))\nprint(double(1.5))",
        "blank": "Union",
        "hint": "複数の型を許容するのは Union です",
        "explanation": "Union[int, float] は int または float を許容します。Python 3.10+ では int | float とも書けます。"
      }
    ],
    "javascript": [
      {
        "id": "za_js_1",
        "title": "オプショナルチェーンでnullを安全に扱おう",
        "description": "user が null でも安全にプロパティにアクセスしてください。",
        "code": "const user = null;\nconst name = user___BLANK___.name;\nconsole.log(name);",
        "blank": "?.",
        "hint": "?. でnull/undefinedのとき undefined を返します",
        "explanation": "?. (Optional Chaining) はプロパティが存在しないときエラーを出さず undefined を返します。"
      },
      {
        "id": "za_js_2",
        "title": "Null合体演算子でデフォルト値を設定しよう",
        "description": "name が null のとき \"Anonymous\" を使ってください。",
        "code": "const name = null;\nconst displayName = name ___BLANK___ \"Anonymous\";\nconsole.log(displayName);",
        "blank": "??",
        "hint": "?? は null/undefined のときだけ右辺を使います",
        "explanation": "?? (Nullish Coalescing) は null または undefined のときだけ右辺を返します。"
      },
      {
        "id": "za_js_3",
        "title": "Optional Chaining でメソッドを呼ぼう",
        "description": "メソッドが存在するときだけ実行してください。",
        "code": "const obj = { greet: () => \"Hello!\" };\nconst result = obj.greet___BLANK___();\nconsole.log(result);",
        "blank": "?.",
        "hint": "メソッドにも ?. が使えます",
        "explanation": "obj.greet?.() はメソッドが存在するとき呼び出し、ない場合は undefined を返します。"
      },
      {
        "id": "za_js_4",
        "title": "論理代入演算子を使おう",
        "description": "config.timeout が null のとき 3000 を代入してください。",
        "code": "const config = { host: \"localhost\" };\nconfig.timeout ___BLANK___ 3000;\nconsole.log(config.timeout);",
        "blank": "??=",
        "hint": "??= は null/undefined のときだけ代入します",
        "explanation": "x ??= value は x が null/undefined のとき x = value を実行します。"
      },
      {
        "id": "za_js_5",
        "title": "Object.hasOwn でプロパティを確認しよう",
        "description": "オブジェクトがプロパティを直接持つか確認してください。",
        "code": "const obj = { name: \"Zara\" };\nconsole.log(Object.___BLANK___(obj, \"name\"));\nconsole.log(Object.hasOwn(obj, \"age\"));",
        "blank": "hasOwn",
        "hint": "Object.hasOwn() でプロパティの存在確認ができます",
        "explanation": "Object.hasOwn() は hasOwnProperty() の現代的な書き方です。"
      },
      {
        "id": "za_js_6",
        "title": "structuredClone でディープコピーしよう",
        "description": "ネストしたオブジェクトを安全にコピーしてください。",
        "code": "const original = { a: 1, b: { c: 2 } };\nconst copy = ___BLANK___(original);\ncopy.b.c = 99;\nconsole.log(original.b.c);",
        "blank": "structuredClone",
        "hint": "structuredClone() でディープコピーができます",
        "explanation": "structuredClone() はネストしたオブジェクトも含めて完全にコピーします。"
      }
    ]
  }
};

Object.keys(JS_CHALLENGES).forEach(id => {
  if (CHALLENGES[id]) CHALLENGES[id].javascript = JS_CHALLENGES[id];
});

export const LANGUAGES = [
  { id: 'python',     name: 'PYTHON',     emoji: '🐍', available: true },
  { id: 'javascript', name: 'JAVASCRIPT', emoji: 'JS', available: true },
  { id: 'java',       name: 'JAVA',       emoji: '☕', available: false },
];
