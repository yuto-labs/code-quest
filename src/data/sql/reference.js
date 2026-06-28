export const SQL_REFERENCE_TOPICS = [
  {
    "id": "sql-syntax-basics",
    "language": "sql",
    "title": "SQL の基本構文ルール",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": ["semicolon", "comments", "case insensitive", "セミコロン"],
    "summary": "SQLは文の終わりにセミコロン;を付け、キーワードは大文字小文字を区別しません。",
    "relatedConceptIds": ["syntax-basics"],
    "pages": [
      {
        "id": "sql-syntax-basics-semicolon",
        "title": "セミコロンで文を区切る",
        "summary": "SQLでは1つの文の終わりにセミコロン(;)を付けます。複数の文を続けて書くときは、文ごとに;で区切ります。インデント（字下げ）や改行の位置は自由で、実行結果には影響しません。",
        "details": "SELECT〜FROM〜WHEREのように複数行にわたって書くことが多いですが、改行や空白の位置は自由です。文の終わりを示すのはセミコロンだけなので、複数の文を1つにまとめて実行するときは、文ごとに必ずセミコロンを付けます。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE population_million > 100;",
          "output": "name\n-----------\nJapan\nBrazil",
          "lineNotes": [
            "L1-L3: 改行していても1つの文として扱われる。",
            "L3: 文末のセミコロンで文の終わりを示す。"
          ],
          "stateTrace": [
            "countries テーブルから population_million が100より大きい行を絞り込む",
            "絞り込んだ行の name 列を表示する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 改行をまたいだ1つの文の範囲を読み取る。",
          "execute": "EXECUTE: セミコロンの位置から文の区切りを確認して結果を追跡する。",
          "debug": "DEBUG: セミコロンが抜けている、または余分にあるコードを見つけて直す。"
        },
        "commonMistakes": [
          {
            "wrong": "SELECT name FROM countries\nSELECT region FROM countries;",
            "reason": "1文目の終わりにセミコロンがないため、2つの文の境界が正しく認識されない場合があります。",
            "correct": "SELECT name FROM countries;\nSELECT region FROM countries;"
          }
        ],
        "miniChecks": [
          { "id": "sql-syntax-basics-semicolon-check1", "prompt": "SQL文の終わりに付ける記号は何ですか。", "answer": "セミコロン(;)。" },
          { "id": "sql-syntax-basics-semicolon-check2", "prompt": "SELECT文を複数行に分けて書いても良いですか。", "answer": "良い。改行や空白の位置は自由。" }
        ]
      },
      {
        "id": "sql-syntax-basics-case-comments",
        "title": "キーワードの大文字小文字とコメント",
        "summary": "SELECTやFROMなどのキーワードは大文字小文字を区別しません（selectでも動く）。一般的には大文字で書く慣習があります。コメントは--（行末まで）か/* */（複数行）です。",
        "details": "SQLのキーワード（SELECT、FROM、WHEREなど）は大文字小文字どちらで書いても同じ意味になりますが、テーブル名や列名、文字列データの値の大文字小文字の扱いはデータベースの種類や設定によって異なる場合があります。読みやすさのため、キーワードは大文字で書く慣習があります。",
        "minimalExample": {
          "code": "-- 人口が多い国を調べる\nselect name\nfrom countries\nwhere population_million > 100;\n/* この書き方でも\n   SELECTと同じ意味になる */",
          "output": "name\n-----------\nJapan\nBrazil",
          "lineNotes": [
            "L1: -- から行末まではコメント。",
            "L2-L4: 小文字で書いてもSELECT文として実行される。",
            "L5-L6: /* と */ で囲んだ複数行コメント。"
          ],
          "stateTrace": [
            "select は SELECT と同じ意味として解釈される",
            "countries テーブルから条件に合う行を取得する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 大文字小文字が違うキーワードも同じ意味だと読み取る。",
          "execute": "EXECUTE: コメント部分を実行対象から除いて処理を追跡する。",
          "debug": "DEBUG: コメントの閉じ忘れなど、構文上の不具合を見つけて直す。"
        },
        "commonMistakes": [
          {
            "wrong": "SELECT Name FROM Countries;",
            "reason": "キーワードの大文字小文字は無視されますが、テーブル名・列名は環境によって大文字小文字を区別する場合があり、実際の名前と一致しないと動かないことがあります。",
            "correct": "SELECT name FROM countries;"
          }
        ],
        "miniChecks": [
          { "id": "sql-syntax-basics-case-comments-check1", "prompt": "SELECTをselectと書いても動きますか。", "answer": "動く。キーワードは大文字小文字を区別しない。" },
          { "id": "sql-syntax-basics-case-comments-check2", "prompt": "1行コメントを始める記号は何ですか。", "answer": "-- （ハイフン2つ）。" }
        ]
      }
    ]
  },
  {
    "id": "sql-database-table-row-column",
    "language": "sql",
    "title": "テーブル・行・列の基本",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": ["database-table-row-column", "テーブル・行・列"],
    "summary": "データは表（テーブル）に行と列で保存される",
    "relatedConceptIds": ["database-table-row-column"],
    "pages": [
      {
        "id": "sql-database-table-row-column-1",
        "title": "テーブルとは何か",
        "summary": "データベースでは、データは「テーブル」と呼ばれる表に保存されます。テーブルは横方向の「行（レコード）」と縦方向の「列（カラム）」で構成されます。",
        "details": "1件のデータ（例：1つの国の情報）が1行に対応し、その国のどんな種類の情報か（名前、地域、人口など）が列に対応します。表計算ソフトの1枚のシートを思い浮かべるとイメージしやすいです。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries;",
          "output": "name\n-----------\nJapan\nFrance\nBrazil",
          "lineNotes": [
            "L1: name 列だけを取り出すよう指定する",
            "L2: countries テーブルからデータを取得する"
          ],
          "stateTrace": [
            "countries テーブルには複数の行（国ごとのデータ）がある",
            "SELECT name で、各行から name 列の値だけを取り出す",
            "結果として name の値が行ごとに一覧表示される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: countries テーブルの構造を読み取り、SELECT で何が表示されるかを確認する。",
          "execute": "EXECUTE: テーブルの列名を正しく指定して、必要なデータだけを取り出す。",
          "debug": "DEBUG: 存在しない列名を指定してエラーになるコードを見つけ、正しい列名に直す。"
        },
        "commonMistakes": [
          {
            "wrong": "SELECT Name FROM Countries;",
            "reason": "多くのデータベースでは大文字・小文字を区別しないが、実際の列名・テーブル名と表記が一致しないと動かない環境もある。",
            "correct": "SELECT name FROM countries;"
          }
        ],
        "miniChecks": [
          { "id": "sql-database-table-row-column-1-check1", "prompt": "テーブルの「行」と「列」はそれぞれ何に対応しますか。", "answer": "行は1件分のデータ（レコード）、列はデータの種類（属性）に対応する。" },
          { "id": "sql-database-table-row-column-1-check2", "prompt": "SELECT name FROM countries; は何をする文ですか。", "answer": "countries テーブルから name 列の値だけを取り出して表示する。" }
        ]
      },
      {
        "id": "sql-database-table-row-column-2",
        "title": "列のデータ型",
        "summary": "列には、そこに入る値の種類を表す「データ型」が決まっています。代表的な型に文字列（TEXT）、整数（INTEGER）、小数（REAL）、真偽値（BOOLEAN）があります。",
        "details": "データ型が決まっているおかげで、数値列には正しく並べ替えや計算ができ、文字列列には文字としての比較ができます。型が違う値を比較すると、想定と異なる結果になることがあります。",
        "minimalExample": {
          "code": "SELECT name, population_million\nFROM countries;",
          "output": "name     | population_million\n---------|--------------------\nJapan    | 124\nFrance   | 68\nBrazil   | 216",
          "lineNotes": [
            "L1: name（文字列型）と population_million（数値型）の両方を取得する",
            "L2: countries テーブルを対象にする"
          ],
          "stateTrace": [
            "name 列は TEXT 型なので文字列として扱われる",
            "population_million 列は INTEGER 型なので数値として扱われる",
            "型が異なる列を1つのSELECTで同時に取得できる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 各列がどのデータ型か（文字列か数値か）を見分ける。",
          "execute": "EXECUTE: 数値列を使って比較や計算を行うクエリを書く。",
          "debug": "DEBUG: 数値のはずの列が文字列として保存され、並べ替えが期待通りにならない例を修正する。"
        },
        "commonMistakes": [
          {
            "wrong": "WHERE population_million = '124'",
            "reason": "数値列を文字列としてクォートで囲んでも多くのDBでは動くが、本来は型を意識して書くべき。",
            "correct": "WHERE population_million = 124"
          }
        ],
        "miniChecks": [
          { "id": "sql-database-table-row-column-2-check1", "prompt": "数値型の列と文字列型の列の違いは何ですか。", "answer": "数値型は計算や大小比較ができ、文字列型は文字としての比較や連結が中心になる。" },
          { "id": "sql-database-table-row-column-2-check2", "prompt": "population_million 列はどの型が適切ですか。", "answer": "整数（INTEGER）型。人口の数値を計算・比較するため。" }
        ]
      },
      {
        "id": "sql-database-table-row-column-3",
        "title": "テーブル全体を眺める",
        "summary": "SELECT * を使うと、テーブルのすべての列を一度に確認できます。テーブルの構造を把握する最初の一歩として便利です。",
        "details": "* はすべての列を意味するワイルドカードです。学習や調査の初期段階では便利ですが、実務では必要な列だけを明示的に指定する方が、結果が読みやすく、パフォーマンスにも有利です。",
        "minimalExample": {
          "code": "SELECT *\nFROM countries;",
          "output": "id | name   | region | population_million | code\n---|--------|--------|---------------------|-----\n1  | Japan  | Asia   | 124                 | JP\n2  | France | Europe | 68                  | FR",
          "lineNotes": [
            "L1: * によって全ての列を指定する",
            "L2: countries テーブルを対象にする"
          ],
          "stateTrace": [
            "* が countries テーブルの全列（id, name, region, population_million, code など）に展開される",
            "全列分のデータが行ごとに表示される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: SELECT * の結果から、テーブルにどんな列があるかを読み取る。",
          "execute": "EXECUTE: SELECT * で確認した列の中から、必要な列だけを選んで書き直す。",
          "debug": "DEBUG: 不要に SELECT * を使っているコードを、必要な列だけのSELECTに修正する。"
        },
        "commonMistakes": [
          {
            "wrong": "SELECT * FROM countries; -- 名前だけ必要なのに全列取得",
            "reason": "必要な列だけを指定しないと、結果が読みにくくなり、不要なデータ転送も増える。",
            "correct": "SELECT name FROM countries;"
          }
        ],
        "miniChecks": [
          { "id": "sql-database-table-row-column-3-check1", "prompt": "SELECT * は何を意味しますか。", "answer": "テーブルのすべての列を取得することを意味する。" },
          { "id": "sql-database-table-row-column-3-check2", "prompt": "実務でSELECT *をあまり使わない方がよい理由は何ですか。", "answer": "不要な列まで取得して読みにくくなったり、無駄なデータ転送が発生したりするため。" }
        ]
      }
    ]
  },
  {
    "id": "sql-select-from",
    "language": "sql",
    "title": "SELECT と FROM",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-database-table-row-column"],
    "aliases": ["select-from", "SELECT と FROM"],
    "summary": "SELECTで取り出す列、FROMで対象テーブルを指定する",
    "relatedConceptIds": ["select-from"],
    "pages": [
      {
        "id": "sql-select-from-1",
        "title": "SELECT文の基本構造",
        "summary": "SELECT文は「どの列を（SELECT）」「どのテーブルから（FROM）」取り出すかを指定する、SQLで最も基本となる文です。",
        "details": "SELECT の後に欲しい列名をカンマ区切りで並べ、FROM の後に対象のテーブル名を書きます。最後にセミコロン（;）を付けて文の終わりを示すのが一般的です。",
        "minimalExample": {
          "code": "SELECT name, region\nFROM countries;",
          "output": "name   | region\n-------|-------\nJapan  | Asia\nFrance | Europe\nBrazil | South America",
          "lineNotes": [
            "L1: name と region の2つの列を指定する",
            "L2: countries テーブルが対象であることを示す"
          ],
          "stateTrace": [
            "FROM countries で対象テーブルを決める",
            "SELECT name, region で、その中から取り出す列を決める",
            "指定した2列だけが、行ごとに結果として表示される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: SELECT に並んだ列名を読み、結果に何が表示されるかを予測する。",
          "execute": "EXECUTE: 必要な列を選んでSELECT文を完成させる。",
          "debug": "DEBUG: 存在しない列名や、カンマの抜けがあるSELECT文を修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name region FROM countries;", "reason": "列名の間にカンマがないため、region が別名（エイリアス）として解釈されてしまう。", "correct": "SELECT name, region FROM countries;" }
        ],
        "miniChecks": [
          { "id": "sql-select-from-1-check1", "prompt": "SELECTとFROMはそれぞれ何を指定しますか。", "answer": "SELECTは取り出す列、FROMは対象のテーブルを指定する。" },
          { "id": "sql-select-from-1-check2", "prompt": "複数の列を指定するときの区切り方は何ですか。", "answer": "カンマ（,）で区切る。" }
        ]
      },
      {
        "id": "sql-select-from-2",
        "title": "列の順序と並び方",
        "summary": "SELECTに書いた列名の順序が、そのまま結果に表示される列の順序になります。テーブル内の元の列順とは関係ありません。",
        "details": "例えば元のテーブルが id, name, region の順でも、SELECT region, name と書けば、結果は region, name の順で表示されます。見やすい順序に並べ替えて表示できるのが利点です。",
        "minimalExample": {
          "code": "SELECT region, name\nFROM countries;",
          "output": "region        | name\n--------------|-------\nAsia          | Japan\nEurope        | France\nSouth America | Brazil",
          "lineNotes": [
            "L1: region を先に、name を後に指定する",
            "L2: countries テーブルが対象"
          ],
          "stateTrace": [
            "SELECTに書いた順序（region, name）がそのまま結果の列順になる",
            "テーブル本来の列順（id, name, region など）は結果の表示順に影響しない"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: SELECTの列の並び順から、結果のテーブルの見た目を読み取る。",
          "execute": "EXECUTE: 指定された見た目になるように、列の順序を考えてSELECT文を書く。",
          "debug": "DEBUG: 期待する列順と実際のSELECTの列順がずれているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "元のテーブルの列順そのままで結果が出ると思い込む", "reason": "結果の列順はSELECTに書いた順序で決まり、テーブル本来の列順とは無関係。", "correct": "SELECT region, name FROM countries; -- 指定した順で表示される" }
        ],
        "miniChecks": [
          { "id": "sql-select-from-2-check1", "prompt": "結果に表示される列の順序は何で決まりますか。", "answer": "SELECTに書いた列名の順序で決まる。" },
          { "id": "sql-select-from-2-check2", "prompt": "SELECT region, name と SELECT name, region の結果はどう違いますか。", "answer": "取り出すデータの内容は同じだが、列の表示順が逆になる。" }
        ]
      },
      {
        "id": "sql-select-from-3",
        "title": "FROMの対象を変える",
        "summary": "FROMの後ろに書くテーブル名を変えるだけで、同じSELECTの形でも全く別のデータを取り出すことができます。",
        "details": "SELECTで指定する列名は、FROMで指定したテーブルに実際に存在する列でなければなりません。テーブルが変われば、使える列名も変わります。",
        "minimalExample": {
          "code": "SELECT name, height_m\nFROM mountains;",
          "output": "name        | height_m\n------------|----------\nFuji        | 3776\nEverest     | 8849",
          "lineNotes": [
            "L1: name と height_m を指定する（mountainsテーブルの列）",
            "L2: FROM を countries から mountains に変更している"
          ],
          "stateTrace": [
            "FROM mountains により、対象テーブルが山のデータに切り替わる",
            "height_m のような、mountainsテーブルにしかない列を指定できるようになる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: FROMで指定されたテーブル名から、使える列が何かを判断する。",
          "execute": "EXECUTE: 目的のテーブルに切り替えて、必要な列を取り出すクエリを書く。",
          "debug": "DEBUG: FROMを変えたのにSELECTの列名を変え忘れてエラーになるコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT population_million FROM mountains;", "reason": "population_million は countries テーブルの列であり、mountains テーブルには存在しない。", "correct": "SELECT height_m FROM mountains;" }
        ],
        "miniChecks": [
          { "id": "sql-select-from-3-check1", "prompt": "FROMで指定するテーブルを変えると何が変わりますか。", "answer": "SELECTで使用できる列の種類（取り出せるデータの内容）が変わる。" },
          { "id": "sql-select-from-3-check2", "prompt": "SELECT文を書くときに気をつけることは何ですか。", "answer": "SELECTで指定する列名が、FROMで指定したテーブルに実在する列かを確認する。" }
        ]
      }
    ]
  },
  {
    "id": "sql-aliases",
    "language": "sql",
    "title": "AS による別名（エイリアス）",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-select-from"],
    "aliases": ["aliases", "AS"],
    "summary": "列やテーブルに一時的な別名をつけられる",
    "relatedConceptIds": ["aliases"],
    "pages": [
      {
        "id": "sql-aliases-1",
        "title": "列に別名をつける",
        "summary": "SELECTの列の後にASを書くと、結果に表示される列名を一時的に変更できます。これを「エイリアス（別名）」と呼びます。",
        "details": "元のテーブルの列名自体は変わりません。結果として表示される見出しだけが変わります。計算結果や読みにくい列名に分かりやすい名前をつけるときに使います。",
        "minimalExample": {
          "code": "SELECT name AS country_name\nFROM countries;",
          "output": "country_name\n-------------\nJapan\nFrance",
          "lineNotes": [
            "L1: name 列の見出しを country_name に変更する",
            "L2: countries テーブルが対象"
          ],
          "stateTrace": [
            "countries テーブルの実際の列名は name のまま変わらない",
            "AS country_name によって、結果に表示される見出しだけが country_name になる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ASの後ろの名前が、結果の見出しに使われることを読み取る。",
          "execute": "EXECUTE: 分かりやすい見出しになるよう、列にASで別名をつける。",
          "debug": "DEBUG: AS の後の別名にタイプミスがあるコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name AS Country Name FROM countries;", "reason": "別名にスペースを含める場合はダブルクォートなどで囲む必要がある。そのまま書くと構文エラーになる。", "correct": "SELECT name AS \"Country Name\" FROM countries;" }
        ],
        "miniChecks": [
          { "id": "sql-aliases-1-check1", "prompt": "ASで列に別名をつけると、元のテーブルの列名はどうなりますか。", "answer": "元の列名は変わらない。結果に表示される見出しだけが変わる。" },
          { "id": "sql-aliases-1-check2", "prompt": "AS country_name は何をしていますか。", "answer": "結果の列見出しを country_name という名前に変更している。" }
        ]
      },
      {
        "id": "sql-aliases-2",
        "title": "テーブルに別名をつける",
        "summary": "テーブル名にもASで別名をつけられます。テーブル名が長い場合や、複数テーブルを扱うときに列名の前置きを短くできます。",
        "details": "テーブルの別名をつけると、別名.列名 という書き方で、どのテーブルの列かを短く明示できます。複数のテーブルを組み合わせるJOINで特によく使われます。",
        "minimalExample": {
          "code": "SELECT c.name\nFROM countries AS c;",
          "output": "name\n------\nJapan\nFrance",
          "lineNotes": [
            "L1: countries の別名 c を使って c.name と書く",
            "L2: FROM countries AS c でテーブルに別名 c をつける"
          ],
          "stateTrace": [
            "FROM countries AS c により、countries に c という別名がつく",
            "以降は c.name のように、c を使って列を指定できる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: テーブルの別名が何を指しているかを読み取る。",
          "execute": "EXECUTE: 長いテーブル名に別名をつけて、クエリを短く書く。",
          "debug": "DEBUG: テーブルに別名をつけたのに古い名前で列を指定しているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "FROM countries AS c ... SELECT countries.name", "reason": "別名 c をつけた後は、元のテーブル名 countries ではなく別名 c で列を指定する必要がある場合が多い。", "correct": "FROM countries AS c ... SELECT c.name" }
        ],
        "miniChecks": [
          { "id": "sql-aliases-2-check1", "prompt": "テーブルに別名をつける目的は何ですか。", "answer": "列名の前置きを短くしたり、複数テーブルを扱うときにどのテーブルの列かを明示しやすくするため。" },
          { "id": "sql-aliases-2-check2", "prompt": "c.name という書き方は何を意味しますか。", "answer": "別名 c がついたテーブルの name 列を指すという意味。" }
        ]
      },
      {
        "id": "sql-aliases-3",
        "title": "ASを省略した書き方",
        "summary": "多くのデータベースでは、ASを省略して列名やテーブル名の後ろに別名をスペースで続けて書くこともできます。",
        "details": "AS country_name と country_name は、多くの環境で同じ意味になります。読みやすさのために明示的にASを書くスタイルと、省略するスタイルの両方が実務でよく使われます。",
        "minimalExample": {
          "code": "SELECT name country_name\nFROM countries c;",
          "output": "country_name\n-------------\nJapan\nFrance",
          "lineNotes": [
            "L1: AS を省略して name の別名を country_name とする",
            "L2: countries の別名も AS を省略して c とする"
          ],
          "stateTrace": [
            "ASがなくても、列名やテーブル名の直後の単語は別名として解釈される",
            "結果としてAS country_name と書いたときと同じ見出しになる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ASが省略されたクエリでも、どこが別名かを読み取る。",
          "execute": "EXECUTE: ASをつけるスタイル・省略するスタイルのどちらでも同じ結果になるよう書く。",
          "debug": "DEBUG: AS省略によって意図と違う別名になってしまっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name, region country_info FROM countries;", "reason": "AS を省略すると region の直後の country_info だけが別名になり、name には別名がつかない点に注意が必要。", "correct": "SELECT name, region AS country_info FROM countries; -- 意図を明示する" }
        ],
        "miniChecks": [
          { "id": "sql-aliases-3-check1", "prompt": "ASを省略した別名の書き方はどのようなものですか。", "answer": "列名やテーブル名の直後にスペースを空けて別名を続けて書く。" },
          { "id": "sql-aliases-3-check2", "prompt": "ASを明示的に書くメリットは何ですか。", "answer": "どこからどこまでが別名かが分かりやすく、読み手にとって誤解が少ない。" }
        ]
      }
    ]
  },
  {
    "id": "sql-where-comparisons",
    "language": "sql",
    "title": "WHERE と比較演算子",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-select-from"],
    "aliases": ["where-comparisons", "WHERE と比較"],
    "summary": "WHEREで条件に合う行だけを絞り込める",
    "relatedConceptIds": ["where-comparisons"],
    "pages": [
      {
        "id": "sql-where-comparisons-1",
        "title": "WHEREの基本",
        "summary": "WHEREを使うと、条件に合う行だけを取り出すことができます。条件に合わない行は結果に表示されません。",
        "details": "WHEREはFROMの後に書き、条件式を続けます。条件式が真（true）になる行だけが結果に残ります。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE population_million >= 100;",
          "output": "name\n-------\nJapan\nBrazil",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: countries テーブルを対象にする",
            "L3: 人口が100（百万人）以上の行だけに絞り込む"
          ],
          "stateTrace": [
            "countries テーブルの全行を確認する",
            "population_million >= 100 を満たす行（Japan, Brazilなど）だけを残す",
            "条件を満たさない行（Franceなど）は結果から除外される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: WHEREの条件式を読み、どの行が残るかを判断する。",
          "execute": "EXECUTE: 指定された条件に合う行を絞り込むWHERE句を書く。",
          "debug": "DEBUG: 条件が逆になっているなど、意図と異なる絞り込みをしているWHEREを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name FROM countries WHERE population_million >= 100 ORDER BY name FROM countries;", "reason": "FROMを2回書くなど句の順序や重複に誤りがあると構文エラーになる。", "correct": "SELECT name FROM countries WHERE population_million >= 100 ORDER BY name;" }
        ],
        "miniChecks": [
          { "id": "sql-where-comparisons-1-check1", "prompt": "WHEREは何をする句ですか。", "answer": "指定した条件に合う行だけを結果に残す（絞り込む）句。" },
          { "id": "sql-where-comparisons-1-check2", "prompt": "WHEREはSELECT文のどこに書きますか。", "answer": "FROMの後に書く。" }
        ]
      },
      {
        "id": "sql-where-comparisons-2",
        "title": "比較演算子の種類",
        "summary": "WHEREでは = , != （または <>）, > , < , >= , <= といった比較演算子を使って条件を作ります。",
        "details": "= は等しい、!= は等しくない、> と < は大小関係、>= と <= は「以上」「以下」を表します。数値だけでなく、文字列や日付の比較にも使えます。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE region != 'Asia';",
          "output": "name\n-------\nFrance\nBrazil",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: countries テーブルを対象にする",
            "L3: region が 'Asia' ではない行だけに絞り込む"
          ],
          "stateTrace": [
            "各行の region 列の値を 'Asia' と比較する",
            "'Asia' と一致しない行（France, Brazilなど）だけが残る",
            "Japanのように region が 'Asia' の行は除外される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: != や >= などの比較演算子の意味を読み取る。",
          "execute": "EXECUTE: 目的に合った比較演算子を選んでWHERE句を書く。",
          "debug": "DEBUG: > と >= を取り違えるなど、境界がずれているWHERE句を修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE population_million > 100", "reason": "「100以上」を表したいのに > を使うと、ちょうど100の行が含まれなくなる。", "correct": "WHERE population_million >= 100" }
        ],
        "miniChecks": [
          { "id": "sql-where-comparisons-2-check1", "prompt": "「等しくない」を表す比較演算子は何ですか。", "answer": "!= （環境によっては <> ）。" },
          { "id": "sql-where-comparisons-2-check2", "prompt": ">= と > の違いは何ですか。", "answer": ">= は「以上」（その値を含む）、> は「より大きい」（その値を含まない）という違い。" }
        ]
      },
      {
        "id": "sql-where-comparisons-3",
        "title": "文字列の比較の注意点",
        "summary": "文字列を比較するときは、シングルクォート（'）で囲む必要があります。また、大文字・小文字の扱いはデータベースによって異なります。",
        "details": "数値はクォートなしで書きますが、文字列はクォートで囲まないと、列名と誤解されたり構文エラーになります。'Asia' と 'asia' を区別するかどうかも環境によって変わるため、結果が思った通りにならない場合は表記を確認します。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE region = 'Asia';",
          "output": "name\n------\nJapan",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: countries テーブルを対象にする",
            "L3: region が文字列 'Asia' と一致する行に絞り込む"
          ],
          "stateTrace": [
            "region 列の値（文字列）と 'Asia' を比較する",
            "一致した行（Japan）だけが残る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: クォートで囲まれた値が文字列として比較されることを読み取る。",
          "execute": "EXECUTE: 文字列の条件を正しくクォートで囲んで書く。",
          "debug": "DEBUG: クォートを忘れて構文エラーになっているWHERE句を修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE region = Asia", "reason": "クォートがないと Asia が列名として解釈され、存在しない列としてエラーになる。", "correct": "WHERE region = 'Asia'" }
        ],
        "miniChecks": [
          { "id": "sql-where-comparisons-3-check1", "prompt": "文字列の値を条件に書くときは何で囲みますか。", "answer": "シングルクォート（'）で囲む。" },
          { "id": "sql-where-comparisons-3-check2", "prompt": "クォートを忘れて文字列を書くとどうなりますか。", "answer": "列名として解釈され、存在しない列としてエラーになることが多い。" }
        ]
      }
    ]
  },
  {
    "id": "sql-and-or-not",
    "language": "sql",
    "title": "AND / OR / NOT",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["and-or-not", "AND OR NOT"],
    "summary": "複数の条件を組み合わせて絞り込める",
    "relatedConceptIds": ["and-or-not"],
    "pages": [
      {
        "id": "sql-and-or-not-1",
        "title": "AND（両方を満たす）",
        "summary": "ANDで条件をつなぐと、両方の条件を同時に満たす行だけが残ります。",
        "details": "条件を増やすほど、結果として残る行は同じか少なくなります。すべての条件をクリアした行だけが選ばれるイメージです。",
        "minimalExample": {
          "code": "SELECT name\nFROM heritage_sites\nWHERE category = 'Natural' AND region = 'Asia';",
          "output": "name\n-------------\nYakushima",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: category が 'Natural' かつ region が 'Asia' の行に絞り込む"
          ],
          "stateTrace": [
            "category = 'Natural' を満たす行を確認する",
            "さらに region = 'Asia' も満たす行だけを残す",
            "両方を満たす行だけが最終的な結果になる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ANDでつながれた複数条件を読み、両方を満たす行を判断する。",
          "execute": "EXECUTE: 複数の条件をANDでつないで絞り込むクエリを書く。",
          "debug": "DEBUG: ANDとORを取り違えて、絞り込みすぎ・絞り込み不足になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE category = 'Natural' OR region = 'Asia'", "reason": "ANDのつもりでORを使うと、片方だけ満たす行も含まれてしまい、条件が緩くなる。", "correct": "WHERE category = 'Natural' AND region = 'Asia'" }
        ],
        "miniChecks": [
          { "id": "sql-and-or-not-1-check1", "prompt": "ANDでつないだ条件はどのように評価されますか。", "answer": "すべての条件を同時に満たす行だけが結果に残る。" },
          { "id": "sql-and-or-not-1-check2", "prompt": "条件をANDで増やすと、結果の行数はどう変化しますか。", "answer": "条件が厳しくなるため、結果の行数は同じか少なくなる。" }
        ]
      },
      {
        "id": "sql-and-or-not-2",
        "title": "OR（どちらかを満たす）",
        "summary": "ORで条件をつなぐと、どちらか一方（または両方）の条件を満たす行が残ります。",
        "details": "ORは条件を緩めるイメージです。いずれかの条件さえ満たせば結果に含まれるため、ANDより結果の行数が同じか多くなります。",
        "minimalExample": {
          "code": "SELECT name\nFROM heritage_sites\nWHERE category = 'Natural' OR region = 'Asia';",
          "output": "name\n-------------\nYakushima\nHimeji Castle",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: category が 'Natural'、または region が 'Asia' の行に絞り込む"
          ],
          "stateTrace": [
            "category = 'Natural' を満たす行を確認する",
            "region = 'Asia' を満たす行も確認する",
            "どちらか一方でも満たす行をすべて結果に含める"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ORでつながれた条件を読み、どちらかを満たす行を判断する。",
          "execute": "EXECUTE: 候補を広げたいときにORを使って条件を書く。",
          "debug": "DEBUG: ORを使うべき場面でANDを使い、結果が0件になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE category = 'Natural' AND category = 'Cultural'", "reason": "1つの列が同時に2つの異なる値になることはないため、ANDで書くと常に結果が0件になる。", "correct": "WHERE category = 'Natural' OR category = 'Cultural'" }
        ],
        "miniChecks": [
          { "id": "sql-and-or-not-2-check1", "prompt": "ORでつないだ条件はどのように評価されますか。", "answer": "どちらか一方（または両方）の条件を満たせば結果に残る。" },
          { "id": "sql-and-or-not-2-check2", "prompt": "同じ列に対して異なる値をORでつなぐのはどんな場面で使いますか。", "answer": "1つの列が複数の値のいずれかであることを判定したい場面で使う。" }
        ]
      },
      {
        "id": "sql-and-or-not-3",
        "title": "NOTと優先順位",
        "summary": "NOTは条件を否定します。ANDとORを組み合わせるときは、カッコ（）で優先順位を明示することが重要です。",
        "details": "ANDはORより先に評価されるため、意図と異なる組み合わせになりやすいです。カッコを使ってグループを明示すると、誤解のないクエリになります。",
        "minimalExample": {
          "code": "SELECT name\nFROM heritage_sites\nWHERE NOT (category = 'Natural');",
          "output": "name\n-------------\nHimeji Castle",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: category が 'Natural' ではない行に絞り込む"
          ],
          "stateTrace": [
            "category = 'Natural' という条件を評価する",
            "NOTによって、その条件を満たさない行が残る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: NOTやカッコを含む条件を読み、最終的な絞り込み内容を判断する。",
          "execute": "EXECUTE: ANDとORが混在する条件に、意図通りのカッコを付けて書く。",
          "debug": "DEBUG: カッコがないために意図と異なる優先順位で評価されているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE category = 'Natural' OR category = 'Cultural' AND region = 'Asia'", "reason": "ANDがORより先に評価されるため、意図せず「Natural、または（CulturalかつAsia）」という条件になってしまう。", "correct": "WHERE (category = 'Natural' OR category = 'Cultural') AND region = 'Asia'" }
        ],
        "miniChecks": [
          { "id": "sql-and-or-not-3-check1", "prompt": "ANDとORでは、どちらが先に評価されますか。", "answer": "ANDの方が先に評価される。" },
          { "id": "sql-and-or-not-3-check2", "prompt": "ANDとORを組み合わせるときに気をつけることは何ですか。", "answer": "意図した優先順位になるよう、カッコ（）で明示する。" }
        ]
      }
    ]
  },
  {
    "id": "sql-in-between-like",
    "language": "sql",
    "title": "IN / BETWEEN / LIKE",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-and-or-not"],
    "aliases": ["in-between-like", "IN BETWEEN LIKE"],
    "summary": "複数値・範囲・パターンでの絞り込みができる",
    "relatedConceptIds": ["in-between-like"],
    "pages": [
      {
        "id": "sql-in-between-like-1",
        "title": "IN（複数値のいずれか）",
        "summary": "INを使うと「いずれかの値に一致する」という条件を、ORを並べるより短く書けます。",
        "details": "IN (値1, 値2, 値3) は、列の値が値1・値2・値3のいずれかであれば真になります。条件の候補が多いときに特に読みやすくなります。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE region IN ('Asia', 'Europe');",
          "output": "name\n-------\nJapan\nFrance",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: countries テーブルが対象",
            "L3: region が 'Asia' または 'Europe' の行に絞り込む"
          ],
          "stateTrace": [
            "region の値を 'Asia', 'Europe' のリストと比較する",
            "リストのいずれかと一致する行だけを残す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: INのリストに含まれる値を読み、どの行が残るかを判断する。",
          "execute": "EXECUTE: 複数の候補値をINでまとめて条件を書く。",
          "debug": "DEBUG: ORの書き方とINの書き方が混在し、条件が崩れているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE region IN 'Asia', 'Europe'", "reason": "INの後に続く候補値はカッコ（）で囲む必要がある。", "correct": "WHERE region IN ('Asia', 'Europe')" }
        ],
        "miniChecks": [
          { "id": "sql-in-between-like-1-check1", "prompt": "INはどんな条件を短く書くために使いますか。", "answer": "「複数の値のいずれかに一致する」という条件を、ORの繰り返しより短く書くために使う。" },
          { "id": "sql-in-between-like-1-check2", "prompt": "IN ('Asia', 'Europe') と同じ意味になるORの書き方は何ですか。", "answer": "region = 'Asia' OR region = 'Europe'" }
        ]
      },
      {
        "id": "sql-in-between-like-2",
        "title": "BETWEEN（範囲指定）",
        "summary": "BETWEEN A AND B は、値がAからBの範囲内（A以上B以下）であるという条件を表します。",
        "details": "数値だけでなく、日付や文字列の範囲にも使えます。BETWEENは両端の値（A自体・B自体）も含む点に注意が必要です。",
        "minimalExample": {
          "code": "SELECT name\nFROM events\nWHERE year BETWEEN 1900 AND 2000;",
          "output": "name\n----------------\nWorld War events",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: events テーブルが対象",
            "L3: year が1900以上2000以下の行に絞り込む"
          ],
          "stateTrace": [
            "year の値が1900以上であるかを確認する",
            "同時にyearが2000以下であるかも確認する",
            "両方を満たす行だけが残る（1900と2000自体も含む）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: BETWEENの範囲がどこからどこまでかを読み取る。",
          "execute": "EXECUTE: 指定された範囲の値だけを取り出すBETWEEN条件を書く。",
          "debug": "DEBUG: 範囲の上限・下限を取り違えているBETWEENのコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE year BETWEEN 2000 AND 1900", "reason": "BETWEENは「小さい値 AND 大きい値」の順で書く必要があり、逆順だと正しく動作しないことが多い。", "correct": "WHERE year BETWEEN 1900 AND 2000" }
        ],
        "miniChecks": [
          { "id": "sql-in-between-like-2-check1", "prompt": "BETWEEN 1900 AND 2000 に1900自体は含まれますか。", "answer": "含まれる。BETWEENは両端の値を含む（以上・以下の範囲）。" },
          { "id": "sql-in-between-like-2-check2", "prompt": "BETWEENを書くときの値の順序はどうなっていますか。", "answer": "小さい値を先に、大きい値を後に書く（A AND B でA<=B）。" }
        ]
      },
      {
        "id": "sql-in-between-like-3",
        "title": "LIKE（パターンマッチ）",
        "summary": "LIKEを使うと、文字列の一部が一致する行を検索できます。%は任意の文字列、_は任意の1文字を表します。",
        "details": "'J%' は「Jで始まる文字列」、'%an' は「anで終わる文字列」、'%an%' は「anを含む文字列」を意味します。あいまいな検索に便利です。",
        "minimalExample": {
          "code": "SELECT name\nFROM countries\nWHERE name LIKE 'J%';",
          "output": "name\n-----\nJapan",
          "lineNotes": [
            "L1: name 列を取り出す",
            "L2: countries テーブルが対象",
            "L3: name が 'J' で始まる行に絞り込む"
          ],
          "stateTrace": [
            "各行の name の先頭文字が 'J' かどうかを確認する",
            "'J' で始まる name（Japanなど）だけが残る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: LIKEのパターン文字列（%や_の位置）を読み、何が一致するかを判断する。",
          "execute": "EXECUTE: 目的のパターンに合わせて%や_を使ったLIKE条件を書く。",
          "debug": "DEBUG: %の位置を間違えて意図と異なる検索結果になっているLIKEを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE name LIKE '%J'", "reason": "%が前につくと「Jで終わる」という意味になり、「Jで始まる」を意図した検索とは逆になる。", "correct": "WHERE name LIKE 'J%'" }
        ],
        "miniChecks": [
          { "id": "sql-in-between-like-3-check1", "prompt": "LIKEの % は何を表しますか。", "answer": "任意の文字列（0文字以上の任意の並び）を表す。" },
          { "id": "sql-in-between-like-3-check2", "prompt": "'%an%' というパターンはどんな文字列に一致しますか。", "answer": "前後に何があってもよく、文字列の中に \"an\" を含む文字列に一致する。" }
        ]
      }
    ]
  },
  {
    "id": "sql-order-by-limit",
    "language": "sql",
    "title": "ORDER BY と LIMIT",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-select-from"],
    "aliases": ["order-by-limit", "ORDER BY LIMIT"],
    "summary": "並び順を指定し、件数を制限できる",
    "relatedConceptIds": ["order-by-limit"],
    "pages": [
      {
        "id": "sql-order-by-limit-1",
        "title": "ORDER BYで並び替える",
        "summary": "ORDER BYを使うと、結果を指定した列の値で並び替えることができます。デフォルトは昇順（小さい順・ABC順）です。",
        "details": "ORDER BYはSELECT文の最後の方に書きます。数値なら小さい順、文字列ならアルファベット順（または辞書順）に並び替えられます。",
        "minimalExample": {
          "code": "SELECT name, height_m\nFROM mountains\nORDER BY height_m;",
          "output": "name  | height_m\n------|----------\nFuji  | 3776\nEverest | 8849",
          "lineNotes": [
            "L1: name と height_m を取り出す",
            "L2: mountains テーブルが対象",
            "L3: height_m の昇順（小さい順）に並び替える"
          ],
          "stateTrace": [
            "全行のheight_mの値を比較する",
            "小さい値から大きい値の順に行を並べ替える"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ORDER BYの対象列から、結果の並び順を読み取る。",
          "execute": "EXECUTE: 指定された並び順になるようORDER BYを書く。",
          "debug": "DEBUG: ORDER BYを忘れて並び順が保証されないコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "ORDER BYを書かずに「常に名前順で返ってくる」と思い込む", "reason": "ORDER BYを指定しない場合、行の並び順は保証されない。", "correct": "ORDER BY name -- 並び順を明示する" }
        ],
        "miniChecks": [
          { "id": "sql-order-by-limit-1-check1", "prompt": "ORDER BYを指定しない場合、結果の並び順はどうなりますか。", "answer": "並び順は保証されない（環境やタイミングによって変わる可能性がある）。" },
          { "id": "sql-order-by-limit-1-check2", "prompt": "ORDER BY height_m のデフォルトの並び順は何ですか。", "answer": "昇順（小さい値から大きい値の順）。" }
        ]
      },
      {
        "id": "sql-order-by-limit-2",
        "title": "DESCと複数キーでの並び替え",
        "summary": "DESCを付けると降順（大きい順）になります。複数の列を指定すると、最初の列で同じ値のとき次の列で並び替えます。",
        "details": "ORDER BY height_m DESC は大きい順。ORDER BY region, name のように複数列を指定すると、まずregionで並び、region が同じものはさらにnameで並び替えられます。",
        "minimalExample": {
          "code": "SELECT name, height_m\nFROM mountains\nORDER BY height_m DESC;",
          "output": "name    | height_m\n--------|----------\nEverest | 8849\nFuji    | 3776",
          "lineNotes": [
            "L1: name と height_m を取り出す",
            "L2: mountains テーブルが対象",
            "L3: height_m の降順（大きい順）に並び替える"
          ],
          "stateTrace": [
            "height_mの値を比較する",
            "DESCにより、大きい値から小さい値の順に並べ替える"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ASC/DESCの指定から、昇順か降順かを判断する。",
          "execute": "EXECUTE: 複数列を使い、優先順位を持った並び替えを書く。",
          "debug": "DEBUG: ASCとDESCを取り違えて、ランキングが逆になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "ORDER BY height_m ASC -- 高い順にしたいのに", "reason": "ASCは昇順（小さい順）。「高い順」にしたいときはDESCを使う必要がある。", "correct": "ORDER BY height_m DESC" }
        ],
        "miniChecks": [
          { "id": "sql-order-by-limit-2-check1", "prompt": "DESCはどういう並び順を表しますか。", "answer": "降順（大きい値・新しい値から先に並ぶ順）。" },
          { "id": "sql-order-by-limit-2-check2", "prompt": "ORDER BY region, name はどのように並び替えますか。", "answer": "まずregionで並び替え、regionが同じ行はさらにnameで並び替える。" }
        ]
      },
      {
        "id": "sql-order-by-limit-3",
        "title": "LIMITで件数を制限する",
        "summary": "LIMITを使うと、結果の行数を指定した件数だけに制限できます。ORDER BYと組み合わせてランキング上位を取り出すのに使われます。",
        "details": "LIMIT 3 と書くと、結果の先頭から3行だけが返されます。ORDER BYで並び替えた後にLIMITを使うと「上位3件」のような取り出し方ができます。",
        "minimalExample": {
          "code": "SELECT name, height_m\nFROM mountains\nORDER BY height_m DESC\nLIMIT 1;",
          "output": "name    | height_m\n--------|----------\nEverest | 8849",
          "lineNotes": [
            "L1: name と height_m を取り出す",
            "L2: mountains テーブルが対象",
            "L3: height_m の降順に並び替える",
            "L4: 結果を先頭1件だけに制限する"
          ],
          "stateTrace": [
            "height_mの降順（高い順）に全行を並び替える",
            "並び替えた結果の先頭1行だけを取り出す（最も高い山）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: LIMITの数値から、結果に残る行数を読み取る。",
          "execute": "EXECUTE: ORDER BYとLIMITを組み合わせて上位N件を取り出すクエリを書く。",
          "debug": "DEBUG: ORDER BYを忘れてLIMITだけ使い、意図した「上位」が取れていないコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name FROM mountains LIMIT 1;", "reason": "ORDER BYがないと、LIMITで取得される1件がどの行になるか保証されない。", "correct": "SELECT name FROM mountains ORDER BY height_m DESC LIMIT 1;" }
        ],
        "miniChecks": [
          { "id": "sql-order-by-limit-3-check1", "prompt": "LIMIT 3 は何をしますか。", "answer": "結果の行数を先頭から3行までに制限する。" },
          { "id": "sql-order-by-limit-3-check2", "prompt": "「上位N件」を正しく取り出すには、LIMITの前に何を組み合わせる必要がありますか。", "answer": "ORDER BYで目的の並び順にしてからLIMITを使う必要がある。" }
        ]
      }
    ]
  },
  {
    "id": "sql-distinct",
    "language": "sql",
    "title": "DISTINCT",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-select-from"],
    "aliases": ["distinct", "DISTINCT"],
    "summary": "重複を除いた値だけを取り出せる",
    "relatedConceptIds": ["distinct"],
    "pages": [
      {
        "id": "sql-distinct-1",
        "title": "DISTINCTで重複を除く",
        "summary": "DISTINCTを使うと、同じ値が複数行にあっても1回だけ表示されます。「どんな種類の値があるか」を確認するのに便利です。",
        "details": "SELECT DISTINCT 列名 FROM テーブル と書くと、その列の重複を除いたユニークな値の一覧が得られます。",
        "minimalExample": {
          "code": "SELECT DISTINCT language\nFROM country_languages;",
          "output": "language\n----------\nJapanese\nFrench\nPortuguese",
          "lineNotes": [
            "L1: language 列をDISTINCTで取り出す",
            "L2: country_languages テーブルが対象"
          ],
          "stateTrace": [
            "language 列の値を全行から集める",
            "同じ値が複数あっても1つにまとめて表示する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: DISTINCTがついたSELECTで、重複が除かれることを読み取る。",
          "execute": "EXECUTE: ユニークな値の一覧が欲しいときにDISTINCTを使って書く。",
          "debug": "DEBUG: DISTINCTを忘れて同じ値が何度も表示されてしまっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT language FROM country_languages; -- 重複あり", "reason": "DISTINCTがないと、同じ言語が複数の国で使われていれば、その分だけ同じ値が繰り返し表示される。", "correct": "SELECT DISTINCT language FROM country_languages;" }
        ],
        "miniChecks": [
          { "id": "sql-distinct-1-check1", "prompt": "DISTINCTは何をしますか。", "answer": "結果に含まれる重複した値を1つにまとめて、ユニークな値だけを残す。" },
          { "id": "sql-distinct-1-check2", "prompt": "DISTINCTはどんな場面で便利ですか。", "answer": "ある列にどんな種類の値があるかを知りたい場面で便利。" }
        ]
      },
      {
        "id": "sql-distinct-2",
        "title": "複数列でのDISTINCT",
        "summary": "DISTINCTは複数の列にも適用できます。この場合、指定したすべての列の組み合わせが重複している行だけがまとめられます。",
        "details": "SELECT DISTINCT col1, col2 では、col1とcol2の「組み合わせ」が同じ行だけが1つにまとめられます。col1だけが同じでもcol2が違えば別の行として残ります。",
        "minimalExample": {
          "code": "SELECT DISTINCT region, language\nFROM country_languages;",
          "output": "region | language\n-------|----------\nAsia   | Japanese\nEurope | French",
          "lineNotes": [
            "L1: region と language の組み合わせをDISTINCTで取り出す",
            "L2: country_languages テーブルが対象"
          ],
          "stateTrace": [
            "region と language の組み合わせごとに行を確認する",
            "同じ組み合わせは1つにまとめて表示する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 複数列のDISTINCTが、どの単位で重複を除いているかを読み取る。",
          "execute": "EXECUTE: 複数列の組み合わせのユニークな一覧を取り出すクエリを書く。",
          "debug": "DEBUG: 1列だけのDISTINCTと複数列のDISTINCTを取り違えているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "DISTINCT region で言語ごとの違いも除けると思い込む", "reason": "DISTINCTを1列だけに指定すると、その列だけで重複判定され、他の列の違いは無視されない（行ごとに保持される）。", "correct": "SELECT DISTINCT region, language FROM country_languages; -- 組み合わせで判定" }
        ],
        "miniChecks": [
          { "id": "sql-distinct-2-check1", "prompt": "DISTINCT region, language は何を基準に重複を判定しますか。", "answer": "region と language の組み合わせが同じかどうかを基準に判定する。" },
          { "id": "sql-distinct-2-check2", "prompt": "1列だけのDISTINCTと複数列のDISTINCTでは結果の行数はどう変わりますか。", "answer": "複数列の方が組み合わせの種類が増えるため、一般的に行数は同じか多くなる。" }
        ]
      },
      {
        "id": "sql-distinct-3",
        "title": "DISTINCTとCOUNTの組み合わせ",
        "summary": "COUNT(DISTINCT 列名) を使うと、ユニークな値の「種類の数」を数えることができます。",
        "details": "COUNT(*)は全行数を数えますが、COUNT(DISTINCT 列名)は重複を除いた上でその列にどれだけの種類の値があるかを数えます。",
        "minimalExample": {
          "code": "SELECT COUNT(DISTINCT language) AS language_count\nFROM country_languages;",
          "output": "language_count\n---------------\n3",
          "lineNotes": [
            "L1: language のユニークな種類の数を数えて language_count とする",
            "L2: country_languages テーブルが対象"
          ],
          "stateTrace": [
            "language 列の重複を除いたユニークな値を求める",
            "そのユニークな値の個数を数える"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: COUNT(DISTINCT ...) が何を数えているかを読み取る。",
          "execute": "EXECUTE: 種類の数を求めたい場面でCOUNT(DISTINCT 列名)を使って書く。",
          "debug": "DEBUG: COUNT(*) とCOUNT(DISTINCT 列名) を取り違えているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT COUNT(language) FROM country_languages; -- 種類数のつもりで", "reason": "COUNT(列名)は重複を含めた行数（NULLでない値の個数）を数えるだけで、ユニークな種類数にはならない。", "correct": "SELECT COUNT(DISTINCT language) FROM country_languages;" }
        ],
        "miniChecks": [
          { "id": "sql-distinct-3-check1", "prompt": "COUNT(DISTINCT language) は何を数えますか。", "answer": "language 列に含まれるユニークな値の種類の数を数える。" },
          { "id": "sql-distinct-3-check2", "prompt": "COUNT(*) とCOUNT(DISTINCT 列名) の違いは何ですか。", "answer": "COUNT(*)は全行数、COUNT(DISTINCT 列名)は重複を除いた種類数を数える。" }
        ]
      }
    ]
  },
  {
    "id": "sql-count-sum-avg-min-max",
    "language": "sql",
    "title": "集計関数（COUNT/SUM/AVG/MIN/MAX）",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["count-sum-avg-min-max", "集計関数"],
    "summary": "複数行をまとめて1つの値に集計できる",
    "relatedConceptIds": ["count-sum-avg-min-max"],
    "pages": [
      {
        "id": "sql-count-sum-avg-min-max-1",
        "title": "COUNTで件数を数える",
        "summary": "COUNT(*)を使うと、条件に合う行の件数を数えることができます。",
        "details": "COUNT(*)は行全体の数を数えます。COUNT(列名)はその列がNULLでない行の数を数えるという違いがあります。",
        "minimalExample": {
          "code": "SELECT COUNT(*) AS total_sites\nFROM heritage_sites;",
          "output": "total_sites\n-------------\n4",
          "lineNotes": [
            "L1: 全行数を数えて total_sites とする",
            "L2: heritage_sites テーブルが対象"
          ],
          "stateTrace": [
            "heritage_sites テーブルの行を1件ずつ数える",
            "合計の行数を1つの数値として返す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: COUNT(*) の結果が件数を表すことを読み取る。",
          "execute": "EXECUTE: 条件に合う行の件数を数えるクエリを書く。",
          "debug": "DEBUG: COUNT(*) とCOUNT(列名)を取り違えて、NULLの扱いがずれているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT name, COUNT(*) FROM heritage_sites;", "reason": "集計関数と通常の列を一緒にSELECTするとGROUP BYが必要になる場合が多く、そうでないとエラーや意図しない結果になる。", "correct": "SELECT COUNT(*) FROM heritage_sites;" }
        ],
        "miniChecks": [
          { "id": "sql-count-sum-avg-min-max-1-check1", "prompt": "COUNT(*) は何を数えますか。", "answer": "条件に合う行の件数（行全体の数）を数える。" },
          { "id": "sql-count-sum-avg-min-max-1-check2", "prompt": "COUNT(*) とCOUNT(列名) の違いは何ですか。", "answer": "COUNT(*)は全行数、COUNT(列名)はその列がNULLでない行の数を数える。" }
        ]
      },
      {
        "id": "sql-count-sum-avg-min-max-2",
        "title": "SUMとAVGで合計・平均を求める",
        "summary": "SUMは数値列の合計、AVGは数値列の平均を計算します。どちらも数値型の列に対して使います。",
        "details": "SUM(population_million) なら全行の人口を合計、AVG(population_million) なら平均人口を求められます。",
        "minimalExample": {
          "code": "SELECT SUM(population_million) AS total_population,\n       AVG(population_million) AS avg_population\nFROM countries;",
          "output": "total_population | avg_population\n------------------|----------------\n408               | 136",
          "lineNotes": [
            "L1: population_million の合計を total_population とする",
            "L2: population_million の平均を avg_population とする",
            "L3: countries テーブルが対象"
          ],
          "stateTrace": [
            "全行のpopulation_millionの値を足し合わせる（SUM）",
            "同時に、行数で割って平均も求める（AVG）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: SUM/AVGの計算結果から、元のデータ全体の傾向を読み取る。",
          "execute": "EXECUTE: 合計や平均を求める集計クエリを書く。",
          "debug": "DEBUG: SUMとAVGを取り違えているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT SUM(name) FROM countries;", "reason": "SUMやAVGは数値列にのみ使える。文字列列に使うとエラーになるか意味のない結果になる。", "correct": "SELECT SUM(population_million) FROM countries;" }
        ],
        "miniChecks": [
          { "id": "sql-count-sum-avg-min-max-2-check1", "prompt": "SUMとAVGはそれぞれ何を計算しますか。", "answer": "SUMは合計、AVGは平均を計算する。" },
          { "id": "sql-count-sum-avg-min-max-2-check2", "prompt": "SUMやAVGはどんな型の列に使いますか。", "answer": "数値型（INTEGERやREALなど）の列に使う。" }
        ]
      },
      {
        "id": "sql-count-sum-avg-min-max-3",
        "title": "MINとMAXで最小・最大を求める",
        "summary": "MINはその列の最小値、MAXは最大値を求めます。数値だけでなく日付や文字列の最小・最大にも使えます。",
        "details": "MAX(height_m) なら最も高い山の高さ、MIN(height_m) なら最も低い山の高さが分かります。",
        "minimalExample": {
          "code": "SELECT MAX(height_m) AS tallest,\n       MIN(height_m) AS shortest\nFROM mountains;",
          "output": "tallest | shortest\n--------|----------\n8849    | 3776",
          "lineNotes": [
            "L1: height_m の最大値を tallest とする",
            "L2: height_m の最小値を shortest とする",
            "L3: mountains テーブルが対象"
          ],
          "stateTrace": [
            "全行のheight_mを比較し、最も大きい値を求める（MAX）",
            "同時に、最も小さい値も求める（MIN）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: MAX/MINの結果がそれぞれ最大値・最小値を表すことを読み取る。",
          "execute": "EXECUTE: 最大・最小を求める集計クエリを書く。",
          "debug": "DEBUG: MAXとMINを取り違えて、欲しい結果と逆になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "ORDER BY height_m DESC LIMIT 1; -- 最大値だけ欲しいのに行全体を取得", "reason": "1つの値だけが欲しい場合、ORDER BY + LIMITより MAX() を使う方が意図が明確で効率的なことが多い。", "correct": "SELECT MAX(height_m) FROM mountains;" }
        ],
        "miniChecks": [
          { "id": "sql-count-sum-avg-min-max-3-check1", "prompt": "MAXとMINはそれぞれ何を求めますか。", "answer": "MAXは最大値、MINは最小値を求める。" },
          { "id": "sql-count-sum-avg-min-max-3-check2", "prompt": "MAX/MIN/SUM/AVG/COUNTをまとめて何と呼びますか。", "answer": "集計関数（または集約関数）と呼ぶ。" }
        ]
      }
    ]
  },
  {
    "id": "sql-group-by",
    "language": "sql",
    "title": "GROUP BY",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-count-sum-avg-min-max"],
    "aliases": ["group-by", "GROUP BY"],
    "summary": "グループごとに集計できる",
    "relatedConceptIds": ["group-by"],
    "pages": [
      {
        "id": "sql-group-by-1",
        "title": "GROUP BYの基本",
        "summary": "GROUP BYを使うと、指定した列の値が同じ行をグループにまとめて、グループごとに処理できます。",
        "details": "集計関数（COUNTなど）は通常テーブル全体を1つにまとめますが、GROUP BYと組み合わせると「グループごとの集計」ができるようになります。",
        "minimalExample": {
          "code": "SELECT category, COUNT(*) AS site_count\nFROM heritage_sites\nGROUP BY category;",
          "output": "category | site_count\n---------|------------\nNatural  | 2\nCultural | 2",
          "lineNotes": [
            "L1: category とグループごとの件数 site_count を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: category の値でグループ化する"
          ],
          "stateTrace": [
            "category の値（Natural, Culturalなど）ごとに行をグループ分けする",
            "各グループごとにCOUNT(*)を計算する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: GROUP BYの列が何を基準にグループ分けしているかを読み取る。",
          "execute": "EXECUTE: カテゴリごとの件数や合計を求めるGROUP BYクエリを書く。",
          "debug": "DEBUG: GROUP BYを忘れて、集計とグループ分けが意図通りになっていないコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT category, COUNT(*) FROM heritage_sites;", "reason": "GROUP BYがないと、categoryごとではなく全体をまとめて1つのCOUNTになってしまう（環境によってはエラーになる）。", "correct": "SELECT category, COUNT(*) FROM heritage_sites GROUP BY category;" }
        ],
        "miniChecks": [
          { "id": "sql-group-by-1-check1", "prompt": "GROUP BYは何をしますか。", "answer": "指定した列の値が同じ行をグループにまとめる。" },
          { "id": "sql-group-by-1-check2", "prompt": "GROUP BY category と一緒に使われることが多いのはどんな関数ですか。", "answer": "COUNT、SUM、AVGなどの集計関数。" }
        ]
      },
      {
        "id": "sql-group-by-2",
        "title": "GROUP BYと集計関数の組み合わせ",
        "summary": "GROUP BYとSUMやAVGを組み合わせると、グループごとの合計・平均を求められます。",
        "details": "SELECTには、GROUP BYで指定した列と、集計関数で計算した値を並べて書くのが基本の形です。",
        "minimalExample": {
          "code": "SELECT region, AVG(population_million) AS avg_population\nFROM countries\nGROUP BY region;",
          "output": "region | avg_population\n-------|----------------\nAsia   | 124\nEurope | 68",
          "lineNotes": [
            "L1: region と地域ごとの平均人口 avg_population を取り出す",
            "L2: countries テーブルが対象",
            "L3: region の値でグループ化する"
          ],
          "stateTrace": [
            "region の値ごとに行をグループ分けする",
            "各グループごとに population_million の平均を計算する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: GROUP BYと集計関数の組み合わせから、何が求められているかを読み取る。",
          "execute": "EXECUTE: 地域ごとの平均や合計を求めるクエリを書く。",
          "debug": "DEBUG: GROUP BY列とSELECTの列が一致せず、エラーになっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SELECT region, name, AVG(population_million) FROM countries GROUP BY region;", "reason": "GROUP BYで指定していない列（name）を、集計関数を使わずにSELECTに含めると、多くのDBでエラーになる。", "correct": "SELECT region, AVG(population_million) FROM countries GROUP BY region;" }
        ],
        "miniChecks": [
          { "id": "sql-group-by-2-check1", "prompt": "GROUP BYと一緒にSELECTできる列にはどんな制約がありますか。", "answer": "GROUP BYで指定した列か、集計関数を使った式のみが基本的に許される。" },
          { "id": "sql-group-by-2-check2", "prompt": "GROUP BY region, AVG(...) は何を求めていますか。", "answer": "地域（region）ごとの平均値を求めている。" }
        ]
      },
      {
        "id": "sql-group-by-3",
        "title": "複数列でのGROUP BY",
        "summary": "GROUP BYには複数の列を指定することもできます。指定したすべての列の組み合わせがグループの単位になります。",
        "details": "GROUP BY region, category のように書くと、regionとcategoryの組み合わせごとにグループが作られます。",
        "minimalExample": {
          "code": "SELECT region, category, COUNT(*) AS site_count\nFROM heritage_sites\nGROUP BY region, category;",
          "output": "region | category | site_count\n-------|----------|------------\nAsia   | Natural  | 1\nAsia   | Cultural | 1",
          "lineNotes": [
            "L1: region、category、グループごとの件数を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: region と category の組み合わせでグループ化する"
          ],
          "stateTrace": [
            "region と category の組み合わせが同じ行をまとめる",
            "組み合わせごとにCOUNT(*)を計算する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 複数列のGROUP BYが、どの単位でグループ分けしているかを読み取る。",
          "execute": "EXECUTE: 2つの軸で集計したいときに複数列のGROUP BYを書く。",
          "debug": "DEBUG: GROUP BYの列数とSELECTの列の対応が崩れているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "GROUP BY region のみで category 別の内訳も見たいと思い込む", "reason": "1列だけのGROUP BYでは、その列の値でしかグループ分けされず、category の違いは集計の中に混ざってしまう。", "correct": "GROUP BY region, category -- 両方の軸で分ける" }
        ],
        "miniChecks": [
          { "id": "sql-group-by-3-check1", "prompt": "GROUP BY region, category はどの単位でグループを作りますか。", "answer": "region と category の組み合わせが同じ行を1つのグループとする。" },
          { "id": "sql-group-by-3-check2", "prompt": "グループ分けの軸を増やすと、グループの数はどう変化する傾向がありますか。", "answer": "軸が増えるほど、組み合わせの種類が増えるためグループ数は同じか増える傾向がある。" }
        ]
      }
    ]
  },
  {
    "id": "sql-having",
    "language": "sql",
    "title": "HAVING",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-group-by"],
    "aliases": ["having", "HAVING"],
    "summary": "集計した後の結果をさらに絞り込める",
    "relatedConceptIds": ["having"],
    "pages": [
      {
        "id": "sql-having-1",
        "title": "HAVINGの基本",
        "summary": "HAVINGは、GROUP BYで集計した「後」の結果を条件で絞り込みます。WHEREが集計前の行を絞り込むのに対し、HAVINGは集計後のグループを絞り込みます。",
        "details": "「件数が2件以上のグループだけ見たい」のように、集計関数の結果を使った条件を書くときにHAVINGを使います。",
        "minimalExample": {
          "code": "SELECT category, COUNT(*) AS site_count\nFROM heritage_sites\nGROUP BY category\nHAVING COUNT(*) >= 2;",
          "output": "category | site_count\n---------|------------\nNatural  | 2\nCultural | 2",
          "lineNotes": [
            "L1: category とグループごとの件数を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: category でグループ化する",
            "L4: 件数が2件以上のグループだけに絞り込む"
          ],
          "stateTrace": [
            "category ごとにグループ分けし、件数を数える",
            "件数が2件以上のグループだけを最終結果として残す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: HAVINGの条件が、集計後のどんなグループを残すかを読み取る。",
          "execute": "EXECUTE: 集計結果を条件で絞り込むHAVING句を書く。",
          "debug": "DEBUG: WHEREで集計結果を絞り込もうとしてエラーになっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE COUNT(*) >= 2", "reason": "WHEREは集計前の行に対する条件にしか使えず、COUNT(*)のような集計関数の結果には使えない。", "correct": "HAVING COUNT(*) >= 2" }
        ],
        "miniChecks": [
          { "id": "sql-having-1-check1", "prompt": "HAVINGはいつ評価される条件ですか。", "answer": "GROUP BYによる集計の後に評価される条件。" },
          { "id": "sql-having-1-check2", "prompt": "HAVINGはどこに書きますか。", "answer": "GROUP BYの後に書く。" }
        ]
      },
      {
        "id": "sql-having-2",
        "title": "WHEREとHAVINGの違い",
        "summary": "WHEREは集計される前の「行」を絞り込み、HAVINGは集計された後の「グループ」を絞り込みます。両方を同時に使うこともできます。",
        "details": "WHEREとHAVINGを両方使う場合、まずWHEREで行を絞り込み、その残った行をGROUP BYでグループ化し、最後にHAVINGでグループを絞り込む、という順序で処理されます。",
        "minimalExample": {
          "code": "SELECT region, COUNT(*) AS site_count\nFROM heritage_sites\nWHERE category = 'Natural'\nGROUP BY region\nHAVING COUNT(*) >= 1;",
          "output": "region | site_count\n-------|------------\nAsia   | 1",
          "lineNotes": [
            "L1: region とグループごとの件数を取り出す",
            "L2: heritage_sites テーブルが対象",
            "L3: WHEREで category が 'Natural' の行だけに絞る（集計前）",
            "L4: region でグループ化する",
            "L5: HAVINGで件数1件以上のグループだけに絞る（集計後）"
          ],
          "stateTrace": [
            "WHEREでcategory='Natural'の行だけを残す（集計前の絞り込み）",
            "残った行をregionでグループ化する",
            "HAVINGで件数が1件以上のグループだけを残す（集計後の絞り込み）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: WHEREとHAVINGがそれぞれどの段階の絞り込みかを読み取る。",
          "execute": "EXECUTE: WHEREとHAVINGを正しい順序で組み合わせたクエリを書く。",
          "debug": "DEBUG: WHEREとHAVINGの役割を取り違えているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "HAVING category = 'Natural'", "reason": "集計と関係ない単純な列の条件は、HAVINGではなくWHEREで書く方が適切（多くの場合HAVINGでも動くが意図が分かりにくい）。", "correct": "WHERE category = 'Natural'" }
        ],
        "miniChecks": [
          { "id": "sql-having-2-check1", "prompt": "WHEREとHAVINGはそれぞれ何を絞り込みますか。", "answer": "WHEREは集計前の行、HAVINGは集計後のグループを絞り込む。" },
          { "id": "sql-having-2-check2", "prompt": "WHERE, GROUP BY, HAVINGを両方使う場合の処理順序はどうなりますか。", "answer": "WHEREで行を絞り込み、GROUP BYでグループ化し、最後にHAVINGでグループを絞り込む。" }
        ]
      },
      {
        "id": "sql-having-3",
        "title": "HAVINGの実例",
        "summary": "HAVINGは「平均が一定以上のグループ」「合計が一定以下のグループ」のように、集計値を使った条件で活用されます。",
        "details": "AVG, SUM, COUNT, MIN, MAXのいずれの集計関数も、HAVINGの条件式の中で使うことができます。",
        "minimalExample": {
          "code": "SELECT region, AVG(population_million) AS avg_population\nFROM countries\nGROUP BY region\nHAVING AVG(population_million) >= 100;",
          "output": "region | avg_population\n-------|----------------\nAsia   | 124",
          "lineNotes": [
            "L1: region と地域ごとの平均人口を取り出す",
            "L2: countries テーブルが対象",
            "L3: region でグループ化する",
            "L4: 平均人口が100以上のグループだけに絞り込む"
          ],
          "stateTrace": [
            "region ごとにグループ分けし、平均人口を計算する",
            "平均が100以上のグループ（Asiaなど）だけを残す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: HAVINGの集計条件から、どのグループが残るかを読み取る。",
          "execute": "EXECUTE: 平均や合計を条件にしたHAVING句を書く。",
          "debug": "DEBUG: HAVINGの集計関数の指定がGROUP BYの内容と矛盾しているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "HAVING population_million >= 100 -- 集計していない列をそのまま使う", "reason": "GROUP BYでまとめた後は、個々の行のpopulation_millionではなく、集計関数（AVGやSUMなど）の結果を条件にする必要がある。", "correct": "HAVING AVG(population_million) >= 100" }
        ],
        "miniChecks": [
          { "id": "sql-having-3-check1", "prompt": "HAVINGの条件式にはどんな関数を使えますか。", "answer": "COUNT, SUM, AVG, MIN, MAXなどの集計関数を使える。" },
          { "id": "sql-having-3-check2", "prompt": "「平均人口が100以上の地域」を求める条件はどう書きますか。", "answer": "HAVING AVG(population_million) >= 100" }
        ]
      }
    ]
  },
  {
    "id": "sql-join-basics",
    "language": "sql",
    "title": "JOINの基本",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["join-basics", "JOINの基本"],
    "summary": "複数のテーブルを結びつけて1つの結果にできる",
    "relatedConceptIds": ["join-basics"],
    "pages": [
      {
        "id": "sql-join-basics-1",
        "title": "なぜテーブルを分けるのか",
        "summary": "データベースでは、関連するデータを複数のテーブルに分けて保存することがよくあります。JOINは、分かれたテーブルを再びつなぎ合わせる仕組みです。",
        "details": "例えば「国」のテーブルと「言語」のテーブルを分けておき、必要なときにJOINでつなげることで、データの重複や不整合を防ぎやすくなります。",
        "minimalExample": {
          "code": "SELECT countries.name, languages.language\nFROM countries\nJOIN languages ON countries.language_id = languages.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese\nFrance | French",
          "lineNotes": [
            "L1: countries の name と languages の language を取り出す",
            "L2: countries テーブルが起点",
            "L3: language_id と languages.id が一致する行同士をつなげる"
          ],
          "stateTrace": [
            "countries の各行の language_id を確認する",
            "その値と一致する languages.id を持つ行を探す",
            "一致する行同士を1つの行としてつなげて結果にする"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: JOINのON条件から、どの列同士でテーブルがつながるかを読み取る。",
          "execute": "EXECUTE: 2つのテーブルを結びつけて必要な情報を取り出すクエリを書く。",
          "debug": "DEBUG: ON条件の列名が間違っているなど、つながりが崩れているJOINを修正する。"
        },
        "commonMistakes": [
          { "wrong": "FROM countries, languages -- ON条件なし", "reason": "ON条件のない結合は、すべての組み合わせ（直積）を作ってしまい、意図しない巨大な結果になる。", "correct": "FROM countries JOIN languages ON countries.language_id = languages.id" }
        ],
        "miniChecks": [
          { "id": "sql-join-basics-1-check1", "prompt": "JOINは何をするための仕組みですか。", "answer": "複数のテーブルを、共通の列（キー）をもとにつなぎ合わせるための仕組み。" },
          { "id": "sql-join-basics-1-check2", "prompt": "ON条件は何を指定しますか。", "answer": "2つのテーブルのどの列同士が一致すればつなげるか、という結合条件を指定する。" }
        ]
      },
      {
        "id": "sql-join-basics-2",
        "title": "結合キーの考え方",
        "summary": "JOINでつなげる列は、双方のテーブルで同じ対象を指す「キー」である必要があります。一般的にIDのような列が使われます。",
        "details": "countries.language_id と languages.id のように、片方は「相手の何番を指しているか」を表す値、もう片方はその「番号そのもの」になっているのが典型的なパターンです。",
        "minimalExample": {
          "code": "SELECT c.name, l.language\nFROM countries AS c\nJOIN languages AS l ON c.language_id = l.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese\nFrance | French",
          "lineNotes": [
            "L1: 別名を使って c.name, l.language を取り出す",
            "L2: countries に別名 c をつける",
            "L3: languages に別名 l をつけ、c.language_id = l.id でつなげる"
          ],
          "stateTrace": [
            "c.language_id（countries側が持つ、参照したい言語の番号）を確認する",
            "それと同じ値を持つ l.id（languages側の番号そのもの）を探す",
            "一致する行同士をつなげる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: どちらの列が「参照する側」でどちらが「参照される側」かを読み取る。",
          "execute": "EXECUTE: 適切な結合キーを使ってJOINを書く。",
          "debug": "DEBUG: 結合キーの列を取り違えて、意図しない組み合わせになっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "ON c.language_id = l.language_id", "reason": "languages側にはlanguage_id列がなくidという列名であるなど、実際の列名と異なる名前を指定するとエラーになる。", "correct": "ON c.language_id = l.id" }
        ],
        "miniChecks": [
          { "id": "sql-join-basics-2-check1", "prompt": "結合キーとはどのような列ですか。", "answer": "双方のテーブルで同じ対象を指し示す、結合の基準となる列（多くはIDのような列）。" },
          { "id": "sql-join-basics-2-check2", "prompt": "結合キーの列名は両方のテーブルで同じ名前である必要がありますか。", "answer": "必ずしも同じ名前である必要はないが、ON句で正しい列名同士を対応させる必要がある。" }
        ]
      },
      {
        "id": "sql-join-basics-3",
        "title": "JOINの種類の概観",
        "summary": "JOINには INNER JOIN（一致する行だけ）、LEFT JOIN（左側を全部残す）など、複数の種類があります。目的に応じて使い分けます。",
        "details": "このページ以降で、INNER JOINとLEFT JOINをそれぞれ詳しく見ていきます。まずは「結合の仕方にバリエーションがある」という全体像を押さえておきましょう。",
        "minimalExample": {
          "code": "-- INNER JOIN: 両方に一致するデータがある行のみ\nSELECT c.name, l.language\nFROM countries AS c\nINNER JOIN languages AS l ON c.language_id = l.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese\nFrance | French",
          "lineNotes": [
            "L1: コメントでJOINの種類を補足する",
            "L2: c.name, l.language を取り出す",
            "L3: countries に別名 c をつける",
            "L4: INNER JOINで一致する行だけをつなげる"
          ],
          "stateTrace": [
            "countriesとlanguagesの両方に対応するデータがある行だけを対象にする",
            "対応が見つからない行は結果から除外される（INNER JOINの特徴）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: JOINの種類（INNER/LEFTなど）が結果にどう影響するかを読み取る。",
          "execute": "EXECUTE: 目的に合うJOINの種類を選んで結合クエリを書く。",
          "debug": "DEBUG: JOINの種類を取り違えて、必要な行が抜けてしまっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "とりあえずJOINと書けばどの種類でも同じ結果になると思い込む", "reason": "JOINの種類によって、一致しないデータがある場合の挙動（行が除外されるか、NULLとして残るか）が異なる。", "correct": "目的に応じてINNER JOIN / LEFT JOINなどを選ぶ" }
        ],
        "miniChecks": [
          { "id": "sql-join-basics-3-check1", "prompt": "JOINにはどのような種類がありますか。", "answer": "INNER JOIN、LEFT JOINなど複数の種類がある。" },
          { "id": "sql-join-basics-3-check2", "prompt": "JOINの種類を選ぶときに考えることは何ですか。", "answer": "一致しないデータがある場合に、それをどう扱いたいか（除外するか、残すか）を考える。" }
        ]
      }
    ]
  },
  {
    "id": "sql-inner-join",
    "language": "sql",
    "title": "INNER JOIN",
    "level": "basic",
    "parentId": "sql-join-basics",
    "prerequisites": ["sql-join-basics"],
    "aliases": ["inner-join", "INNER JOIN"],
    "summary": "両方のテーブルに一致するデータがある行だけを残す",
    "relatedConceptIds": ["inner-join"],
    "pages": [
      {
        "id": "sql-inner-join-1",
        "title": "INNER JOINの基本",
        "summary": "INNER JOINは、結合条件に一致する行が両方のテーブルにある場合だけ、結果に含めます。一致しない行はどちらの側も結果から除外されます。",
        "details": "単にJOINと書いた場合、多くのデータベースではデフォルトでINNER JOINとして扱われます。意図を明確にするため、INNER JOINと書くのが丁寧です。",
        "minimalExample": {
          "code": "SELECT c.name, l.language\nFROM countries AS c\nINNER JOIN languages AS l ON c.language_id = l.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese\nFrance | French",
          "lineNotes": [
            "L1: c.name, l.language を取り出す",
            "L2: countries に別名 c をつける",
            "L3: languages に別名 l をつけ、language_idとidが一致する行をINNER JOINでつなげる"
          ],
          "stateTrace": [
            "countriesの各行のlanguage_idと、languagesのidを比較する",
            "一致する行同士だけを結合して結果に含める",
            "対応するlanguagesの行がないcountriesの行は結果から除外される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: INNER JOINの結果に、どちらのテーブルの行が反映されているかを読み取る。",
          "execute": "EXECUTE: 両方に存在するデータだけが欲しいときにINNER JOINを使って書く。",
          "debug": "DEBUG: INNER JOINを使うべきところでLEFT JOINを使い、想定より多くの行が出ているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "JOINすれば全部の行が残ると思い込む", "reason": "INNER JOINは一致しない行を除外する。すべての行を残したい場合はLEFT JOINなど別の種類が必要。", "correct": "残したい範囲に応じてINNER JOINかLEFT JOINを選ぶ" }
        ],
        "miniChecks": [
          { "id": "sql-inner-join-1-check1", "prompt": "INNER JOINで結果に残る行はどのような行ですか。", "answer": "結合条件に一致する行が両方のテーブルに存在する行だけ。" },
          { "id": "sql-inner-join-1-check2", "prompt": "単にJOINと書いた場合、多くのDBでは何として扱われますか。", "answer": "INNER JOINとして扱われることが多い。" }
        ]
      },
      {
        "id": "sql-inner-join-2",
        "title": "ONでの結合条件",
        "summary": "ON句には、結合の基準となる条件式を書きます。等号（=）だけでなく、他の比較演算子を使うこともできます。",
        "details": "最も一般的なのは c.language_id = l.id のような等号の比較ですが、範囲を条件にした結合も可能です。基本はまず等号での結合をしっかり理解することが重要です。",
        "minimalExample": {
          "code": "SELECT c.name, l.language\nFROM countries AS c\nINNER JOIN languages AS l\n  ON c.language_id = l.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese",
          "lineNotes": [
            "L1: c.name, l.language を取り出す",
            "L2: countries に別名 c をつける",
            "L3-4: ON句でc.language_idとl.idが一致する行をつなげる"
          ],
          "stateTrace": [
            "ON句の条件式（c.language_id = l.id）を各行の組み合わせに対して評価する",
            "条件が真になる組み合わせだけを結果に残す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ON句の条件式から、結合の基準を読み取る。",
          "execute": "EXECUTE: 正しい列同士を比較するON句を書く。",
          "debug": "DEBUG: ON句で誤った列を比較しているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "ON c.id = l.id", "reason": "countriesの主キーであるidと、languagesの主キーであるidを比較しても、両者は無関係なため正しい結合にならない。", "correct": "ON c.language_id = l.id" }
        ],
        "miniChecks": [
          { "id": "sql-inner-join-2-check1", "prompt": "ON句には何を書きますか。", "answer": "結合の基準となる条件式（多くは2つのテーブルの列同士の比較）を書く。" },
          { "id": "sql-inner-join-2-check2", "prompt": "ON句の条件を間違えるとどうなりますか。", "answer": "意図しない行同士が結合されたり、結合される行が見つからなくなったりする。" }
        ]
      },
      {
        "id": "sql-inner-join-3",
        "title": "複数テーブルのJOIN",
        "summary": "JOINは2つ以上のテーブルに対しても続けて使うことができます。3つ目、4つ目のテーブルもさらにJOINでつなげられます。",
        "details": "JOINを複数回使う場合、それぞれのJOINに対応するON句を書きます。テーブルが増えるほど、別名（エイリアス）を使うと見やすくなります。",
        "minimalExample": {
          "code": "SELECT o.id, c.name, l.language\nFROM orders AS o\nJOIN countries AS c ON o.country_id = c.id\nJOIN languages AS l ON c.language_id = l.id;",
          "output": "id | name  | language\n---|-------|----------\n1  | Japan | Japanese",
          "lineNotes": [
            "L1: o.id, c.name, l.language を取り出す",
            "L2: orders に別名 o をつける",
            "L3: orders と countries を country_id = id でつなげる",
            "L4: countries と languages を language_id = id でつなげる"
          ],
          "stateTrace": [
            "まずordersとcountriesをcountry_idでつなげる",
            "その結果に対して、さらにcountriesとlanguagesをlanguage_idでつなげる",
            "3つのテーブルの情報が1つの行にまとまる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 複数のJOINがどの順番でテーブルをつなげているかを読み取る。",
          "execute": "EXECUTE: 3つ以上のテーブルから必要な情報をまとめて取り出すクエリを書く。",
          "debug": "DEBUG: JOINの順序やON句の対応がずれて、意図しない結果になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "2つ目のJOINのON句で1つ目のテーブルの別名を使い忘れる", "reason": "複数JOINでは、各ON句で正しいテーブル（別名）の列を指定しないと、結合が崩れる。", "correct": "JOIN languages AS l ON c.language_id = l.id -- cを正しく参照する" }
        ],
        "miniChecks": [
          { "id": "sql-inner-join-3-check1", "prompt": "3つのテーブルを結合するには、JOINを何回使いますか。", "answer": "2回（最初のテーブルを基準に、残り2つを順にJOINする）。" },
          { "id": "sql-inner-join-3-check2", "prompt": "複数JOINで別名を使うと何が分かりやすくなりますか。", "answer": "どの列がどのテーブルに属しているかが分かりやすくなる。" }
        ]
      }
    ]
  },
  {
    "id": "sql-left-join",
    "language": "sql",
    "title": "LEFT JOIN",
    "level": "basic",
    "parentId": "sql-join-basics",
    "prerequisites": ["sql-inner-join"],
    "aliases": ["left-join", "LEFT JOIN"],
    "summary": "左側のテーブルの行をすべて残し、一致しない場合はNULLで埋める",
    "relatedConceptIds": ["left-join"],
    "pages": [
      {
        "id": "sql-left-join-1",
        "title": "LEFT JOINの基本",
        "summary": "LEFT JOINは、FROMの後に書いた（左側の）テーブルの行をすべて残します。一致する右側のデータがない場合は、その部分がNULLになります。",
        "details": "INNER JOINでは一致しない行が消えてしまいますが、LEFT JOINを使うと「対応するデータがない」ことも結果として確認できます。",
        "minimalExample": {
          "code": "SELECT c.name, r.value\nFROM countries AS c\nLEFT JOIN records AS r ON c.id = r.country_id;",
          "output": "name   | value\n-------|------\nJapan  | 10\nFrance | NULL",
          "lineNotes": [
            "L1: c.name, r.value を取り出す",
            "L2: countries に別名 c をつける",
            "L3: c.id = r.country_id でLEFT JOINする"
          ],
          "stateTrace": [
            "countries（左側）のすべての行を基準にする",
            "対応するrecordsの行があれば、その値（value）を結合する",
            "対応するrecordsの行がない場合（Franceなど）は、value列がNULLになる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: LEFT JOINの結果でNULLになっている行が、対応データなしを意味すると読み取る。",
          "execute": "EXECUTE: 左側のテーブルを全件残したいときにLEFT JOINを使って書く。",
          "debug": "DEBUG: LEFT JOINを使うべきところでINNER JOINを使い、行が消えてしまっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "INNER JOINで「対応データなし」の行を確認しようとする", "reason": "INNER JOINでは一致しない行が結果から消えてしまうため、「データがない」ことを確認するにはLEFT JOINが必要。", "correct": "LEFT JOIN records AS r ON c.id = r.country_id" }
        ],
        "miniChecks": [
          { "id": "sql-left-join-1-check1", "prompt": "LEFT JOINで「左側」とはどちらのテーブルを指しますか。", "answer": "FROMの直後に書いたテーブル（JOINより前に書かれている方）を指す。" },
          { "id": "sql-left-join-1-check2", "prompt": "対応するデータがない場合、右側の列の値はどうなりますか。", "answer": "NULLになる。" }
        ]
      },
      {
        "id": "sql-left-join-2",
        "title": "LEFT JOINとINNER JOINの違い",
        "summary": "INNER JOINは両方に一致するデータがある行だけを残し、LEFT JOINは左側の行をすべて残す、という点が大きな違いです。",
        "details": "同じON条件であっても、JOINの種類によって結果の行数が変わることがあります。一致しないデータが想定されるときは、種類の選び方が重要です。",
        "minimalExample": {
          "code": "-- INNER JOINでは対応のないFranceの行が消える\nSELECT c.name, r.value\nFROM countries AS c\nINNER JOIN records AS r ON c.id = r.country_id;",
          "output": "name  | value\n------|------\nJapan | 10",
          "lineNotes": [
            "L1: コメントで挙動の違いを補足する",
            "L2: c.name, r.value を取り出す",
            "L3: countries に別名 c をつける",
            "L4: c.id = r.country_id でINNER JOINする"
          ],
          "stateTrace": [
            "INNER JOINでは、対応するrecordsの行がないcountriesの行（Franceなど）は結果から完全に除外される",
            "LEFT JOINにすれば、Franceの行もNULL付きで残る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 同じデータでもJOINの種類によって結果の行数が変わることを読み取る。",
          "execute": "EXECUTE: 目的に応じてINNER JOINとLEFT JOINを使い分けたクエリを書く。",
          "debug": "DEBUG: 必要な行がJOINの種類のせいで消えてしまっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "「全件残るはず」と思いINNER JOINを使う", "reason": "INNER JOINは一致しないデータがある行を除外するため、全件残したい場合の前提が誤っている。", "correct": "全件を残したい場合はLEFT JOINを使う" }
        ],
        "miniChecks": [
          { "id": "sql-left-join-2-check1", "prompt": "INNER JOINとLEFT JOINで結果の行数が異なるのはどんな場合ですか。", "answer": "結合条件に一致しないデータがある場合に、結果の行数が異なることがある。" },
          { "id": "sql-left-join-2-check2", "prompt": "「対応データの有無を含めて全部見たい」場合はどちらを使いますか。", "answer": "LEFT JOIN（または対象に応じてRIGHT JOIN）を使う。" }
        ]
      },
      {
        "id": "sql-left-join-3",
        "title": "LEFT JOINでNULLを使う場面",
        "summary": "LEFT JOINの結果でNULLになっている行を探すと、「対応するデータが存在しない」ものだけを抽出できます。",
        "details": "WHERE 右側の列 IS NULL と組み合わせることで、「まだ記録がない国」のような、抜けているデータを見つける典型的なパターンになります。",
        "minimalExample": {
          "code": "SELECT c.name\nFROM countries AS c\nLEFT JOIN records AS r ON c.id = r.country_id\nWHERE r.country_id IS NULL;",
          "output": "name\n-------\nFrance",
          "lineNotes": [
            "L1: c.name を取り出す",
            "L2: countries に別名 c をつける",
            "L3: c.id = r.country_id でLEFT JOINする",
            "L4: r.country_id がNULLの行（対応データがない国）だけに絞り込む"
          ],
          "stateTrace": [
            "LEFT JOINにより、対応データがない国（France）もNULL付きで残る",
            "WHERE r.country_id IS NULL で、そのNULLの行だけに絞り込む",
            "結果として「recordsに記録がない国」だけが残る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: LEFT JOIN + IS NULLが「対応データなし」の抽出パターンであると読み取る。",
          "execute": "EXECUTE: 記録が抜けているデータを見つけるクエリを書く。",
          "debug": "DEBUG: IS NULLの対象列を取り違えて、意図と異なる行が残っているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE r.value IS NULL -- 別の列で判定", "reason": "結合に使った列（country_id）以外の列でNULL判定すると、その列自体がもともとNULLを許容するケースと混同しやすい。", "correct": "WHERE r.country_id IS NULL" }
        ],
        "miniChecks": [
          { "id": "sql-left-join-3-check1", "prompt": "LEFT JOIN + IS NULLの組み合わせは何を見つけるのに使いますか。", "answer": "結合条件に対応するデータが存在しない行（抜けているデータ）を見つけるのに使う。" },
          { "id": "sql-left-join-3-check2", "prompt": "なぜ結合に使ったキー列でIS NULLを判定するのが安全ですか。", "answer": "結合できなかった行は、結合に使ったキー列が必ずNULLになるため、判定の基準として確実。" }
        ]
      }
    ]
  },
  {
    "id": "sql-null-is-null",
    "language": "sql",
    "title": "NULLとIS NULL",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["null-is-null", "NULL IS NULL"],
    "summary": "値が存在しないことを表すNULLには専用の判定方法が必要",
    "relatedConceptIds": ["null-is-null"],
    "pages": [
      {
        "id": "sql-null-is-null-1",
        "title": "NULLとは何か",
        "summary": "NULLは「値が存在しない」「不明である」ことを表す特別な印です。0や空文字列とは異なる概念です。",
        "details": "例えば、まだ終了していないプログラムのend_year列はNULLになっているかもしれません。これは「0年に終わった」のではなく「終了年が決まっていない」ことを意味します。",
        "minimalExample": {
          "code": "SELECT name, end_year\nFROM programs;",
          "output": "name      | end_year\n----------|----------\nProgram A | 2020\nProgram B | NULL",
          "lineNotes": [
            "L1: name と end_year を取り出す",
            "L2: programs テーブルが対象"
          ],
          "stateTrace": [
            "Program Aのend_yearには具体的な年（2020）が入っている",
            "Program Bのend_yearはNULL（まだ終了していない、または不明）になっている"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: NULLが「値がない」ことを表すという意味を読み取る。",
          "execute": "EXECUTE: NULLを含むデータを正しく扱うクエリを書く。",
          "debug": "DEBUG: NULLを0や空文字列と同じものとして扱い、誤った結果になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "end_year = 0 を「まだ終わっていない」の意味で使う", "reason": "0は具体的な値であり「不明」を表すには不適切。NULLという専用の仕組みを使うべき。", "correct": "end_year を未定の間はNULLにしておく" }
        ],
        "miniChecks": [
          { "id": "sql-null-is-null-1-check1", "prompt": "NULLは何を表しますか。", "answer": "値が存在しない、または不明であることを表す。" },
          { "id": "sql-null-is-null-1-check2", "prompt": "NULLと0や空文字列は同じ意味ですか。", "answer": "異なる。0や空文字列は具体的な値だが、NULLは値そのものがないことを表す。" }
        ]
      },
      {
        "id": "sql-null-is-null-2",
        "title": "IS NULL / IS NOT NULL",
        "summary": "NULLかどうかを判定するには、= ではなく IS NULL（NULLである）、IS NOT NULL（NULLでない）を使います。",
        "details": "NULLは「不明な値」なので、何かと比較しても結果は「不明（NULLと同じ扱い）」になり、=では正しく判定できません。専用の構文IS NULLを使う必要があります。",
        "minimalExample": {
          "code": "SELECT name\nFROM programs\nWHERE end_year IS NULL;",
          "output": "name\n----------\nProgram B",
          "lineNotes": [
            "L1: name を取り出す",
            "L2: programs テーブルが対象",
            "L3: end_year がNULLの行（まだ終了していないプログラム）だけに絞り込む"
          ],
          "stateTrace": [
            "各行のend_yearを確認する",
            "値がNULLである行（Program B）だけを残す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: IS NULL / IS NOT NULL がそれぞれ何を判定しているかを読み取る。",
          "execute": "EXECUTE: NULLかどうかを正しく判定する条件を書く。",
          "debug": "DEBUG: = NULL と書いてしまい、常に結果が0件になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE end_year = NULL", "reason": "= NULL は常に「不明」と評価され、行が絶対にマッチしない。IS NULLを使う必要がある。", "correct": "WHERE end_year IS NULL" }
        ],
        "miniChecks": [
          { "id": "sql-null-is-null-2-check1", "prompt": "NULLかどうかを判定するための正しい書き方は何ですか。", "answer": "IS NULL（NULLである）または IS NOT NULL（NULLでない）を使う。" },
          { "id": "sql-null-is-null-2-check2", "prompt": "WHERE end_year = NULL と書くとどうなりますか。", "answer": "常にマッチしない（結果が0件になる）。" }
        ]
      },
      {
        "id": "sql-null-is-null-3",
        "title": "NULLと比較演算子の注意点",
        "summary": "NULLを含む行は、=、!=、>などの比較演算子では「不明」という結果になり、WHEREの条件としては真にも偽にもならず除外されます。",
        "details": "WHERE end_year != 2020 と書いても、end_yearがNULLの行は「不明」として扱われ、結果には含まれません。NULLを含めたい場合は、IS NULLとの組み合わせが必要です。",
        "minimalExample": {
          "code": "SELECT name\nFROM programs\nWHERE end_year != 2020 OR end_year IS NULL;",
          "output": "name\n----------\nProgram B",
          "lineNotes": [
            "L1: name を取り出す",
            "L2: programs テーブルが対象",
            "L3: end_yearが2020でない、またNULLの行も対象にする"
          ],
          "stateTrace": [
            "end_year != 2020 だけでは、NULLの行は結果に含まれない",
            "OR end_year IS NULL を追加することで、NULLの行も明示的に含める"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: NULLを含む行が比較演算子だけでは結果に残らないことを読み取る。",
          "execute": "EXECUTE: NULLの行も含めたい場合にIS NULLを組み合わせて書く。",
          "debug": "DEBUG: NULLの行が意図せず除外されてしまっているWHERE句を修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE end_year != 2020 だけでNULLの行も含まれると思い込む", "reason": "比較演算子はNULLに対して「不明」を返すため、NULLの行は条件を満たさず除外される。", "correct": "WHERE end_year != 2020 OR end_year IS NULL" }
        ],
        "miniChecks": [
          { "id": "sql-null-is-null-3-check1", "prompt": "比較演算子（=, !=, >など）にNULLを使うと結果はどうなりますか。", "answer": "「不明」という結果になり、真でも偽でもないため条件にマッチしない。" },
          { "id": "sql-null-is-null-3-check2", "prompt": "NULLの行も結果に含めたい場合はどうしますか。", "answer": "OR ... IS NULL を条件に追加するなど、明示的にNULLを扱う条件を加える。" }
        ]
      }
    ]
  },
  {
    "id": "sql-coalesce",
    "language": "sql",
    "title": "COALESCE",
    "level": "basic",
    "parentId": null,
    "prerequisites": ["sql-null-is-null"],
    "aliases": ["coalesce", "COALESCE"],
    "summary": "NULLのときに代わりの値を使える",
    "relatedConceptIds": ["coalesce"],
    "pages": [
      {
        "id": "sql-coalesce-1",
        "title": "COALESCEの基本",
        "summary": "COALESCE(列名, 代わりの値) は、列の値がNULLのときに、指定した代わりの値を使います。NULLでなければ元の値がそのまま使われます。",
        "details": "表示用に「NULLのままだと分かりにくい」ものを、分かりやすい代替テキストや既定値に置き換えるのに便利です。",
        "minimalExample": {
          "code": "SELECT name, COALESCE(end_year, 'Ongoing') AS status\nFROM programs;",
          "output": "name      | status\n----------|----------\nProgram A | 2020\nProgram B | Ongoing",
          "lineNotes": [
            "L1: name と、end_yearがNULLならOngoingに置き換えたstatusを取り出す",
            "L2: programs テーブルが対象"
          ],
          "stateTrace": [
            "Program Aのend_year(2020)はNULLでないため、そのまま使われる",
            "Program Bのend_yearはNULLのため、代わりにOngoingという文字列が使われる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: COALESCEの結果から、どの行がNULLだったかを読み取る。",
          "execute": "EXECUTE: NULLを分かりやすい代替値に置き換えるクエリを書く。",
          "debug": "DEBUG: COALESCEの引数の順序を取り違えているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "COALESCE('Ongoing', end_year)", "reason": "引数の順序が逆になると、最初の引数（'Ongoing'）は常にNULLではないため、常に'Ongoing'が返ってしまう。", "correct": "COALESCE(end_year, 'Ongoing')" }
        ],
        "miniChecks": [
          { "id": "sql-coalesce-1-check1", "prompt": "COALESCE(end_year, 'Ongoing') はend_yearがNULLでないときに何を返しますか。", "answer": "end_year の元の値をそのまま返す。" },
          { "id": "sql-coalesce-1-check2", "prompt": "COALESCEの引数はどんな順序で書きますか。", "answer": "最初に確認したい値（NULLかもしれない値）、その後に代わりの値を書く。" }
        ]
      },
      {
        "id": "sql-coalesce-2",
        "title": "複数の引数を使うCOALESCE",
        "summary": "COALESCEには3つ以上の引数も指定できます。最初にNULLでない値が見つかった時点で、その値が使われます。",
        "details": "COALESCE(a, b, c) は、aがNULLでなければa、aがNULLでbがNULLでなければb、両方NULLならcが使われるという順序で評価されます。",
        "minimalExample": {
          "code": "SELECT name, COALESCE(end_year, 9999) AS sort_year\nFROM programs\nORDER BY sort_year;",
          "output": "name      | sort_year\n----------|----------\nProgram A | 2020\nProgram B | 9999",
          "lineNotes": [
            "L1: name と、並び替え用に置き換えたsort_yearを取り出す",
            "L2: programs テーブルが対象",
            "L3: sort_yearで並び替える"
          ],
          "stateTrace": [
            "end_yearがNULLの行には、並び替え用の大きな値9999を割り当てる",
            "これにより、終了未定の行を一覧の最後にまとめて並べられる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: COALESCEで置き換えた値が並び替えにどう影響するかを読み取る。",
          "execute": "EXECUTE: NULLの扱いを工夫して並び替えやすくするクエリを書く。",
          "debug": "DEBUG: COALESCEの代替値が小さすぎて、並び順が意図と逆になっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "COALESCE(end_year, 0) を使って「未定は最後」にしたい", "reason": "0は他のend_yearの値より小さいため、ORDER BYの昇順では先頭に来てしまい、意図と逆になる。", "correct": "COALESCE(end_year, 9999) -- 十分に大きい値を使う" }
        ],
        "miniChecks": [
          { "id": "sql-coalesce-2-check1", "prompt": "COALESCE(a, b, c) はどの順序で値を確認しますか。", "answer": "a、次にb、最後にcの順に、NULLでない最初の値を探す。" },
          { "id": "sql-coalesce-2-check2", "prompt": "未定の値を並び替えの最後にしたいときの工夫は何ですか。", "answer": "COALESCEの代替値に、他のどの値よりも大きい数値を指定する。" }
        ]
      },
      {
        "id": "sql-coalesce-3",
        "title": "COALESCEの実用例",
        "summary": "COALESCEは、表示用の整形だけでなく、計算の前にNULLを既定値に置き換えておく場面でもよく使われます。",
        "details": "SUM(COALESCE(value, 0)) のように使うと、value列にNULLが混ざっていても、それを0として計算に含めることができます。",
        "minimalExample": {
          "code": "SELECT SUM(COALESCE(value, 0)) AS total_value\nFROM records;",
          "output": "total_value\n-------------\n10",
          "lineNotes": [
            "L1: valueがNULLなら0として合計し、total_valueとする",
            "L2: records テーブルが対象"
          ],
          "stateTrace": [
            "valueがNULLの行は、COALESCEによって0として扱われる",
            "SUMはNULLを除いて合計するが、ここでは0として明示的に計算に含めている"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: COALESCEが集計関数の中でどう使われているかを読み取る。",
          "execute": "EXECUTE: NULLを0として計算に含める集計クエリを書く。",
          "debug": "DEBUG: COALESCEを使わずNULLが計算結果に影響しているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "SUM(value) -- NULLが混ざっていることに気づかない", "reason": "SUMはNULLを自動的に無視するため、件数と合計の対応がずれていることに気づきにくい。", "correct": "SUM(COALESCE(value, 0)) -- 意図を明示する" }
        ],
        "miniChecks": [
          { "id": "sql-coalesce-3-check1", "prompt": "SUM(COALESCE(value, 0)) はvalueがNULLの行をどう扱いますか。", "answer": "0として扱い、合計の計算に含める。" },
          { "id": "sql-coalesce-3-check2", "prompt": "COALESCEを集計関数と組み合わせる利点は何ですか。", "answer": "NULLの扱いを明示的に制御でき、意図しない計算結果を防げる。" }
        ]
      }
    ]
  },
  {
    "id": "sql-insert",
    "language": "sql",
    "title": "INSERT",
    "level": "advanced",
    "parentId": null,
    "prerequisites": ["sql-select-from"],
    "aliases": ["insert", "INSERT"],
    "summary": "テーブルに新しい行を追加する",
    "relatedConceptIds": ["insert"],
    "pages": [
      {
        "id": "sql-insert-1",
        "title": "INSERT INTOの基本",
        "summary": "INSERT INTOを使うと、テーブルに新しい行を1件追加できます。どの列に何の値を入れるかを指定します。",
        "details": "INSERT INTO テーブル名 (列1, 列2, ...) VALUES (値1, 値2, ...) という形で書きます。列の順序と値の順序を対応させる必要があります。",
        "minimalExample": {
          "code": "INSERT INTO heritage_sites (id, name, category)\nVALUES (4, 'New Site', 'Cultural');",
          "output": "1 row inserted",
          "lineNotes": [
            "L1: heritage_sites の id, name, category 列を対象にする",
            "L2: それぞれの列に対応する値を指定する"
          ],
          "stateTrace": [
            "heritage_sitesテーブルに新しい行を1件追加する",
            "id=4, name='New Site', category='Cultural' という値がその行に入る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: INSERTの列リストと値リストの対応関係を読み取る。",
          "execute": "EXECUTE: 指定されたデータでテーブルに新しい行を追加するクエリを書く。",
          "debug": "DEBUG: 列の数と値の数が合っていないINSERT文を修正する。"
        },
        "commonMistakes": [
          { "wrong": "INSERT INTO heritage_sites (id, name) VALUES (4, 'New Site', 'Cultural');", "reason": "列リストが2つなのに値が3つあり、数が一致せずエラーになる。", "correct": "INSERT INTO heritage_sites (id, name, category) VALUES (4, 'New Site', 'Cultural');" }
        ],
        "miniChecks": [
          { "id": "sql-insert-1-check1", "prompt": "INSERT INTOは何をする文ですか。", "answer": "テーブルに新しい行を追加する文。" },
          { "id": "sql-insert-1-check2", "prompt": "列リストと値リストの数はどうなっている必要がありますか。", "answer": "列の数と値の数が一致している必要がある。" }
        ]
      },
      {
        "id": "sql-insert-2",
        "title": "複数行のINSERT",
        "summary": "VALUESの後にカッコで囲んだ組をカンマで並べると、1つのINSERT文で複数行をまとめて追加できます。",
        "details": "1行ずつINSERTを書くより、複数行をまとめて書く方が効率的です。各カッコの中の値の数と順序は、列リストと一致させる必要があります。",
        "minimalExample": {
          "code": "INSERT INTO heritage_sites (id, name, category)\nVALUES\n  (4, 'New Site A', 'Cultural'),\n  (5, 'New Site B', 'Natural');",
          "output": "2 rows inserted",
          "lineNotes": [
            "L1: heritage_sites の id, name, category 列を対象にする",
            "L3: 1行目のデータ",
            "L4: 2行目のデータ"
          ],
          "stateTrace": [
            "VALUESの中の1組目（4, 'New Site A', 'Cultural'）が1行追加される",
            "続けて2組目（5, 'New Site B', 'Natural'）も同時に1行追加される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: VALUESに複数の組がある場合、何行追加されるかを読み取る。",
          "execute": "EXECUTE: 複数行をまとめて追加するINSERT文を書く。",
          "debug": "DEBUG: カッコの区切りやカンマが崩れている複数行INSERTを修正する。"
        },
        "commonMistakes": [
          { "wrong": "VALUES (4, 'A', 'Cultural') (5, 'B', 'Natural');", "reason": "複数行を区切るカンマがないため、構文エラーになる。", "correct": "VALUES (4, 'A', 'Cultural'), (5, 'B', 'Natural');" }
        ],
        "miniChecks": [
          { "id": "sql-insert-2-check1", "prompt": "1つのINSERT文で複数行を追加するには、VALUESの後をどう書きますか。", "answer": "カッコで囲んだ値の組をカンマで区切って並べる。" },
          { "id": "sql-insert-2-check2", "prompt": "複数行INSERTのメリットは何ですか。", "answer": "1行ずつ書くより簡潔で、まとめて処理できる。" }
        ]
      },
      {
        "id": "sql-insert-3",
        "title": "列を省略したINSERTの注意点",
        "summary": "列リストを省略してINSERT INTO テーブル名 VALUES (...) と書くこともできますが、テーブルの全列を正しい順序で指定する必要があり、間違いやすくなります。",
        "details": "列リストを省略すると、テーブル定義時の列の順序に依存します。テーブル構造が変わると動かなくなる可能性があるため、基本的には列名を明示する方が安全です。",
        "minimalExample": {
          "code": "INSERT INTO heritage_sites\nVALUES (4, 'New Site', 'Cultural');",
          "output": "1 row inserted (テーブルの列順に依存)",
          "lineNotes": [
            "L1: 列リストを省略してheritage_sitesに追加する",
            "L2: テーブル定義の列順（id, name, categoryなど）に従って値を当てはめる"
          ],
          "stateTrace": [
            "列名の指定がないため、テーブル本来の列順で値が当てはめられる",
            "テーブルの列順や列数を正確に把握していないと、誤った列に値が入るおそれがある"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 列リストが省略されたINSERTで、値がどの列に対応するかを読み取る。",
          "execute": "EXECUTE: 列を明示してより安全なINSERT文を書く。",
          "debug": "DEBUG: 列の省略によって値の対応がずれているINSERT文を修正する。"
        },
        "commonMistakes": [
          { "wrong": "INSERT INTO heritage_sites VALUES ('New Site', 4, 'Cultural');", "reason": "列リストを省略した場合、値の順序がテーブル定義の列順と一致しないと、誤った列にデータが入る。", "correct": "INSERT INTO heritage_sites (id, name, category) VALUES (4, 'New Site', 'Cultural');" }
        ],
        "miniChecks": [
          { "id": "sql-insert-3-check1", "prompt": "列リストを省略するとどんなリスクがありますか。", "answer": "テーブル定義の列順に依存するため、列の順序や数を誤ると意図しない結果になる。" },
          { "id": "sql-insert-3-check2", "prompt": "安全にINSERTを書くにはどうすればよいですか。", "answer": "列名を明示的に指定し、対応する値を同じ順序で書く。" }
        ]
      }
    ]
  },
  {
    "id": "sql-update",
    "language": "sql",
    "title": "UPDATE",
    "level": "advanced",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["update", "UPDATE"],
    "summary": "既存の行のデータを書き換える",
    "relatedConceptIds": ["update"],
    "pages": [
      {
        "id": "sql-update-1",
        "title": "UPDATEの基本",
        "summary": "UPDATEは、既に存在する行の列の値を書き換えます。SET の後に「列名 = 新しい値」を指定します。",
        "details": "UPDATE テーブル名 SET 列名 = 値 WHERE 条件 という形で書きます。WHEREで対象を絞り込まないと、テーブル全体が書き換わってしまいます。",
        "minimalExample": {
          "code": "UPDATE countries\nSET region = 'Europe'\nWHERE code = 'FR';",
          "output": "1 row updated",
          "lineNotes": [
            "L1: countries テーブルを更新する",
            "L2: region 列を 'Europe' にする",
            "L3: code が 'FR' の行だけに絞り込む"
          ],
          "stateTrace": [
            "countriesテーブルでcode='FR'の行を探す",
            "見つかった行のregion列の値を'Europe'に書き換える"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: UPDATEのSETとWHEREから、何がどう変更されるかを読み取る。",
          "execute": "EXECUTE: 指定された行の値を書き換えるUPDATE文を書く。",
          "debug": "DEBUG: SETの列名や値が間違っているUPDATE文を修正する。"
        },
        "commonMistakes": [
          { "wrong": "UPDATE countries SET region 'Europe' WHERE code = 'FR';", "reason": "SETの列名と値の間に = が必要。省略すると構文エラーになる。", "correct": "UPDATE countries SET region = 'Europe' WHERE code = 'FR';" }
        ],
        "miniChecks": [
          { "id": "sql-update-1-check1", "prompt": "UPDATEは何をする文ですか。", "answer": "既存の行の列の値を書き換える文。" },
          { "id": "sql-update-1-check2", "prompt": "SETの後にはどのように書きますか。", "answer": "「列名 = 新しい値」の形で書く。" }
        ]
      },
      {
        "id": "sql-update-2",
        "title": "WHEREを使った絞り込み更新",
        "summary": "WHEREを指定すると、条件に合う行だけが更新されます。複数の行を一度に更新することも、1行だけを更新することもできます。",
        "details": "WHEREの条件に複数の行が一致する場合は、それらすべてが同じように更新されます。1件だけを更新したい場合は、その行を一意に識別できる条件（IDなど）を使います。",
        "minimalExample": {
          "code": "UPDATE countries\nSET region = 'Unknown'\nWHERE population_million < 1;",
          "output": "0 rows updated",
          "lineNotes": [
            "L1: countries テーブルを更新する",
            "L2: region 列を 'Unknown' にする",
            "L3: population_million が1未満の行だけに絞り込む"
          ],
          "stateTrace": [
            "population_million < 1 を満たす行を探す",
            "今回はそのような行が存在しないため、更新される行は0件になる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: WHEREの条件によって、何件の行が更新対象になるかを読み取る。",
          "execute": "EXECUTE: 条件に合う複数行をまとめて更新するクエリを書く。",
          "debug": "DEBUG: WHEREの条件が広すぎて、意図より多くの行が更新されてしまうコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "WHERE region = 'Europe' で1か国だけ直したいのに複数該当", "reason": "条件に複数の行が一致すると、それらすべてが更新されてしまう。1件に絞るには一意な条件（IDなど）を使う必要がある。", "correct": "WHERE code = 'FR' -- 一意な条件を使う" }
        ],
        "miniChecks": [
          { "id": "sql-update-2-check1", "prompt": "WHEREの条件に複数の行が一致した場合、何が起こりますか。", "answer": "一致したすべての行が同じように更新される。" },
          { "id": "sql-update-2-check2", "prompt": "1件だけを確実に更新したいときはどうしますか。", "answer": "その行を一意に識別できる条件（主キーなど）をWHEREに指定する。" }
        ]
      },
      {
        "id": "sql-update-3",
        "title": "WHEREを忘れた場合の危険性",
        "summary": "UPDATEでWHEREを書き忘れると、テーブルのすべての行が更新されてしまいます。実行前に必ずWHEREの条件を確認することが重要です。",
        "details": "特に本番のデータベースでは、WHEREのないUPDATEは大きな事故につながります。実行前にSELECTで同じ条件を試し、対象範囲を確認する習慣が推奨されます。",
        "minimalExample": {
          "code": "-- 危険な例：WHEREがない\nUPDATE countries\nSET region = 'Unknown';",
          "output": "(全行が更新される — 危険な例)",
          "lineNotes": [
            "L1: コメントで危険性を補足する",
            "L2: countries テーブルを更新する",
            "L3: WHEREがないため、全行のregionが'Unknown'になる"
          ],
          "stateTrace": [
            "WHEREが指定されていないため、絞り込みが行われない",
            "結果としてcountriesテーブルのすべての行のregionが書き換わる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: WHEREの有無が更新範囲にどう影響するかを読み取る。",
          "execute": "EXECUTE: 意図した範囲だけを更新するよう、必ずWHEREをつけてクエリを書く。",
          "debug": "DEBUG: WHEREを書き忘れて全行が更新されてしまっているコードに、正しいWHEREを追加する。"
        },
        "commonMistakes": [
          { "wrong": "UPDATE countries SET region = 'Unknown';", "reason": "WHEREがないため、本来1件だけ更新したいつもりでも全行が書き換わってしまう。", "correct": "UPDATE countries SET region = 'Unknown' WHERE code = 'FR';" }
        ],
        "miniChecks": [
          { "id": "sql-update-3-check1", "prompt": "WHEREのないUPDATEを実行すると何が起きますか。", "answer": "テーブルのすべての行が更新されてしまう。" },
          { "id": "sql-update-3-check2", "prompt": "UPDATEを実行する前にできる安全対策は何ですか。", "answer": "同じ条件でSELECTを実行し、更新対象になる行を事前に確認する。" }
        ]
      }
    ]
  },
  {
    "id": "sql-delete",
    "language": "sql",
    "title": "DELETE",
    "level": "advanced",
    "parentId": null,
    "prerequisites": ["sql-where-comparisons"],
    "aliases": ["delete", "DELETE"],
    "summary": "テーブルから行を削除する",
    "relatedConceptIds": ["delete"],
    "pages": [
      {
        "id": "sql-delete-1",
        "title": "DELETEの基本",
        "summary": "DELETE FROMは、テーブルから行を削除します。WHEREで条件を指定すると、その条件に合う行だけが削除されます。",
        "details": "DELETE FROM テーブル名 WHERE 条件 という形で書きます。列を指定する必要はなく、行全体が削除される点がUPDATEと異なります。",
        "minimalExample": {
          "code": "DELETE FROM aliases\nWHERE alias = 'duplicate';",
          "output": "1 row deleted",
          "lineNotes": [
            "L1: aliases テーブルから削除する",
            "L2: alias が 'duplicate' の行だけに絞り込む"
          ],
          "stateTrace": [
            "aliasesテーブルでalias='duplicate'の行を探す",
            "見つかった行をテーブルから取り除く"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: DELETEのWHEREから、どの行が削除されるかを読み取る。",
          "execute": "EXECUTE: 指定された条件の行を削除するクエリを書く。",
          "debug": "DEBUG: WHEREの条件が間違っていて、不要な行まで削除されてしまうコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "DELETE alias FROM aliases WHERE alias = 'duplicate';", "reason": "DELETEは行全体を削除するため、列名を指定する必要はない。DELETE FROM テーブル名 という形が基本。", "correct": "DELETE FROM aliases WHERE alias = 'duplicate';" }
        ],
        "miniChecks": [
          { "id": "sql-delete-1-check1", "prompt": "DELETEは何を削除しますか。", "answer": "条件に合う行全体を削除する（列単位ではない）。" },
          { "id": "sql-delete-1-check2", "prompt": "DELETE FROM の後にはどう続けますか。", "answer": "対象のテーブル名を書き、必要に応じてWHEREで条件を指定する。" }
        ]
      },
      {
        "id": "sql-delete-2",
        "title": "WHEREを使った絞り込み削除",
        "summary": "WHEREの条件に複数の行が一致すると、それらすべてが削除されます。UPDATEと同様、絞り込みの正確さが重要です。",
        "details": "削除前にSELECTで同じWHERE条件を試し、削除対象の行を確認するのが安全な進め方です。",
        "minimalExample": {
          "code": "SELECT * FROM aliases WHERE alias = 'duplicate';\n-- 確認後に削除\nDELETE FROM aliases WHERE alias = 'duplicate';",
          "output": "(確認後) 1 row deleted",
          "lineNotes": [
            "L1: 削除前に対象行をSELECTで確認する",
            "L2: コメントで確認後に削除する流れを示す",
            "L3: 確認した条件と同じWHEREでDELETEを実行する"
          ],
          "stateTrace": [
            "まずSELECTで、削除対象になる行を実際に確認する",
            "想定通りの行であることを確認してから、同じ条件でDELETEを実行する"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: SELECTでの事前確認とDELETEの条件が一致していることを読み取る。",
          "execute": "EXECUTE: 削除前に対象を確認する手順を含めたクエリを書く。",
          "debug": "DEBUG: 確認時のSELECTと実際のDELETEで条件が異なっているコードを修正する。"
        },
        "commonMistakes": [
          { "wrong": "確認なしで一気にDELETEを実行する", "reason": "WHEREの条件に予想外の行が一致していた場合、削除してからでは元に戻すのが難しい。", "correct": "先にSELECTで対象行を確認してからDELETEを実行する" }
        ],
        "miniChecks": [
          { "id": "sql-delete-2-check1", "prompt": "DELETE前にSELECTで確認するのはなぜですか。", "answer": "意図した行だけが削除対象になっているかを、実行前に確認できるため。" },
          { "id": "sql-delete-2-check2", "prompt": "WHEREの条件に複数行が一致した場合、DELETEはどうなりますか。", "answer": "一致したすべての行が削除される。" }
        ]
      },
      {
        "id": "sql-delete-3",
        "title": "DELETEとDROP TABLEの違い",
        "summary": "DELETEは行だけを削除し、テーブル自体は残ります。DROP TABLEはテーブル自体を構造ごと削除してしまう、全く別の操作です。",
        "details": "DELETE FROM テーブル名（WHEREなし）はテーブルの全行を削除しますが、テーブルの構造（列の定義など）は残ります。一方DROP TABLEはテーブルそのものを消すため、構造も含めて完全になくなります。",
        "minimalExample": {
          "code": "-- 行だけ削除（テーブルは残る）\nDELETE FROM aliases;\n-- テーブル自体を削除する場合は別の操作\n-- DROP TABLE aliases;",
          "output": "(DELETE FROM aliases;) 全行削除、テーブル構造は残る",
          "lineNotes": [
            "L1-2: コメントとDELETE FROMで全行を削除する例",
            "L3-4: コメントとしてDROP TABLEとの違いを示す（実行はしない）"
          ],
          "stateTrace": [
            "DELETE FROM aliases; により、aliasesテーブルの行はすべてなくなる",
            "しかしテーブル自体（列の定義など）は残っており、また行を追加できる",
            "DROP TABLEを使うと、テーブルの定義自体が削除され、INSERTもできなくなる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: DELETEとDROP TABLEで、テーブル自体が残るかどうかの違いを読み取る。",
          "execute": "EXECUTE: 行だけを消したい場合と、テーブルごと消したい場合を区別して操作を選ぶ。",
          "debug": "DEBUG: 行を消すつもりでテーブルそのものを消す操作を選んでしまっている誤りを修正する。"
        },
        "commonMistakes": [
          { "wrong": "「全部消したいから」とDROP TABLEを使う", "reason": "DROP TABLEはテーブルの構造ごと削除してしまい、後で行を追加することもできなくなる。行だけ消したい場合はDELETEが適切。", "correct": "DELETE FROM aliases; -- 行だけを削除し、テーブルは残す" }
        ],
        "miniChecks": [
          { "id": "sql-delete-3-check1", "prompt": "DELETEとDROP TABLEの大きな違いは何ですか。", "answer": "DELETEは行だけを削除しテーブルは残るが、DROP TABLEはテーブルの構造ごと削除する。" },
          { "id": "sql-delete-3-check2", "prompt": "テーブルの行だけをすべて空にして、構造は残したい場合はどうしますか。", "answer": "WHEREを付けないDELETE FROMを使う。" }
        ]
      }
    ]
  },
  {
    "id": "sql-primary-foreign-keys",
    "language": "sql",
    "title": "主キーと外部キー",
    "level": "advanced",
    "parentId": null,
    "prerequisites": ["sql-join-basics"],
    "aliases": ["primary-foreign-keys", "主キー 外部キー"],
    "summary": "行を一意に識別し、テーブル間の関係を表す",
    "relatedConceptIds": ["primary-foreign-keys"],
    "pages": [
      {
        "id": "sql-primary-foreign-keys-1",
        "title": "主キー（PRIMARY KEY）とは",
        "summary": "主キーは、テーブルの中で各行を一意に識別するための列（または列の組み合わせ）です。同じ値が2行に存在することは許されません。",
        "details": "多くのテーブルではidという名前の列が主キーとして使われ、新しい行が追加されるたびに自動的に異なる番号が割り当てられます。",
        "minimalExample": {
          "code": "SELECT id, name\nFROM countries;",
          "output": "id | name\n---|-------\n1  | Japan\n2  | France",
          "lineNotes": [
            "L1: id（主キー）と name を取り出す",
            "L2: countries テーブルが対象"
          ],
          "stateTrace": [
            "id列の値（1, 2など）は、countriesテーブル内で重複しない",
            "それぞれのidが、その行（その国）を一意に指し示す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 主キーの列が各行をどのように一意に識別しているかを読み取る。",
          "execute": "EXECUTE: 主キーを使って特定の1行を正確に指定するクエリを書く。",
          "debug": "DEBUG: 主キーであるはずの列に重複した値が入ってしまっているデータの問題を見つける。"
        },
        "commonMistakes": [
          { "wrong": "主キー以外の列（nameなど）で1行を確実に特定しようとする", "reason": "name列のような列は将来重複する可能性があり、一意性が保証されていないため、行の特定には主キーを使うべき。", "correct": "WHERE id = 1 -- 主キーで一意に指定する" }
        ],
        "miniChecks": [
          { "id": "sql-primary-foreign-keys-1-check1", "prompt": "主キーとはどのような列ですか。", "answer": "テーブル内の各行を一意に識別するための列。同じ値が重複しない。" },
          { "id": "sql-primary-foreign-keys-1-check2", "prompt": "なぜidのような専用の列を主キーにすることが多いですか。", "answer": "名前など他の情報は将来重複する可能性があるが、自動的に割り当てられるid番号は重複しないようにできるため。" }
        ]
      },
      {
        "id": "sql-primary-foreign-keys-2",
        "title": "外部キー（FOREIGN KEY）とは",
        "summary": "外部キーは、あるテーブルの列が、別のテーブルの主キーを参照していることを示す仕組みです。テーブル間の関係を表します。",
        "details": "例えば countries.language_id は languages.id を参照する外部キーです。これにより「この国はどの言語のデータを参照しているか」という関係が表現されます。",
        "minimalExample": {
          "code": "SELECT c.name, c.language_id\nFROM countries AS c;",
          "output": "name   | language_id\n-------|-------------\nJapan  | 1\nFrance | 2",
          "lineNotes": [
            "L1: c.name と外部キーである c.language_id を取り出す",
            "L2: countries に別名 c をつける"
          ],
          "stateTrace": [
            "countries.language_idの値（1, 2など）は、languages.idの値を参照している",
            "この参照関係によって、後でJOINを使い言語名を取得できる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 外部キーの列が、どのテーブルの主キーを参照しているかを読み取る。",
          "execute": "EXECUTE: 外部キーをもとにJOINで関連データを取り出すクエリを書く。",
          "debug": "DEBUG: 外部キーが参照先に存在しない値になっている不整合を見つける。"
        },
        "commonMistakes": [
          { "wrong": "language_idに、languagesテーブルに存在しない番号を入れる", "reason": "外部キーは参照先のテーブルに実在する主キーの値である必要があり、存在しない値を入れるとデータの整合性が崩れる。", "correct": "languagesテーブルに実在するidの値をlanguage_idに設定する" }
        ],
        "miniChecks": [
          { "id": "sql-primary-foreign-keys-2-check1", "prompt": "外部キーは何を表しますか。", "answer": "あるテーブルの列が、別のテーブルの主キーを参照しているという関係を表す。" },
          { "id": "sql-primary-foreign-keys-2-check2", "prompt": "countries.language_id はどのテーブルの主キーを参照していますか。", "answer": "languages テーブルの id 列（主キー）を参照している。" }
        ]
      },
      {
        "id": "sql-primary-foreign-keys-3",
        "title": "キーを使ったJOINとの関係",
        "summary": "JOINのON句で使われる結合キーは、多くの場合、主キーと外部キーの関係そのものです。主キー・外部キーを理解すると、JOINの設計意図が読みやすくなります。",
        "details": "外部キーがどの主キーを参照しているかを把握しておくと、テーブル同士をどうJOINすればよいかが自然に分かるようになります。",
        "minimalExample": {
          "code": "SELECT c.name, l.language\nFROM countries AS c\nJOIN languages AS l ON c.language_id = l.id;",
          "output": "name   | language\n-------|----------\nJapan  | Japanese\nFrance | French",
          "lineNotes": [
            "L1: c.name, l.language を取り出す",
            "L2: countries に別名 c をつける",
            "L3: 外部キー c.language_id と主キー l.id でJOINする"
          ],
          "stateTrace": [
            "c.language_id（外部キー）の値と、l.id（主キー）の値を比較する",
            "一致する行同士がつながり、国と言語の情報が1行にまとまる"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ON句が主キー・外部キーの関係に対応していることを読み取る。",
          "execute": "EXECUTE: 主キー・外部キーの関係を踏まえてJOINのON句を正しく書く。",
          "debug": "DEBUG: 主キー・外部キーの対応関係を取り違えているON句を修正する。"
        },
        "commonMistakes": [
          { "wrong": "ON c.id = l.id -- 無関係な主キー同士を比較", "reason": "countriesの主キー(id)とlanguagesの主キー(id)は互いに無関係であり、結合の意図に合わない。c.language_idという外部キーを使うべき。", "correct": "ON c.language_id = l.id" }
        ],
        "miniChecks": [
          { "id": "sql-primary-foreign-keys-3-check1", "prompt": "JOINのON句で比較される列は、多くの場合どんな関係になっていますか。", "answer": "一方が外部キー、もう一方がそれが参照する主キーという関係になっていることが多い。" },
          { "id": "sql-primary-foreign-keys-3-check2", "prompt": "主キー・外部キーの関係を理解すると、JOINを書くときに何が分かりやすくなりますか。", "answer": "どの列同士をON句で比較すればよいか（結合の設計意図）が分かりやすくなる。" }
        ]
      }
    ]
  }
];
