// Reference V2 data. Legacy Python reference content is restored from git baseline HEAD:src/data/reference.js.

export const REFERENCE_TOPICS = [
  {
    "id": "variables-types",
    "language": "python",
    "title": "変数と型",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "variables",
      "data-types"
    ],
    "summary": "データを入れる箱",
    "pages": [
      {
        "id": "variables-types-01-page",
        "title": "変数とは？",
        "summary": "変数はデータを保存する「箱」です。名前をつけて値を入れておき、後から取り出したり書き換えたりできます。Pythonでは宣言不要で、代入するだけで変数が作られます。",
        "details": "変数はデータを保存する「箱」です。名前をつけて値を入れておき、後から取り出したり書き換えたりできます。Pythonでは宣言不要で、代入するだけで変数が作られます。",
        "minimalExample": {
          "code": "name = \"Player\"        # 文字列を代入\nage  = 20            # 整数を代入\nheight = 175.5       # 小数を代入\n\nprint(name)          # → Player\nprint(age)           # → 20\nprint(height)        # → 175.5",
          "output": "Player\n20\n175.5",
          "lineNotes": [
            "L1: 文字列を代入",
            "L2: 整数を代入",
            "L3: 小数を代入",
            "L5: → Player",
            "L6: → 20",
            "L7: → 175.5"
          ],
          "stateTrace": [
            "L1: 文字列を代入",
            "L2: 整数を代入",
            "L3: 小数を代入",
            "L5: → Player",
            "L6: → 20",
            "L7: → 175.5"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 変数とは？",
          "execute": "EXECUTE: 変数とは？",
          "debug": "DEBUG: 変数とは？"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "変数はデータを保存する「箱」です。名前をつけて値を入れておき、後から取り出したり書き換えたりできます。Pythonでは宣言不要で、代入するだけで変数が作られます。",
            "correct": "name = \"Player\"        # 文字列を代入"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-02-page",
        "title": "データ型の種類",
        "summary": "Pythonには値の「種類」があります。これをデータ型と言います。型によって使える操作が変わります。",
        "details": "Pythonには値の「種類」があります。これをデータ型と言います。型によって使える操作が変わります。",
        "minimalExample": {
          "code": "str_val   = \"Hello\"   # str   文字列\nint_val   = 42        # int   整数\nfloat_val = 3.14      # float 小数\nbool_val  = True      # bool  真偽値（True/False）\nnone_val  = None      # NoneType 値なし\n\nprint(type(str_val))  # → <class 'str'>\nprint(type(int_val))  # → <class 'int'>",
          "output": "<class 'str'>\n<class 'int'>",
          "lineNotes": [
            "L1: str   文字列",
            "L2: int   整数",
            "L3: float 小数",
            "L4: bool  真偽値（True/False）",
            "L5: NoneType 値なし",
            "L7: → <class 'str'>",
            "L8: → <class 'int'>"
          ],
          "stateTrace": [
            "L1: str   文字列",
            "L2: int   整数",
            "L3: float 小数",
            "L4: bool  真偽値（True/False）",
            "L5: NoneType 値なし",
            "L7: → <class 'str'>",
            "L8: → <class 'int'>"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: データ型の種類",
          "execute": "EXECUTE: データ型の種類",
          "debug": "DEBUG: データ型の種類"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonには値の「種類」があります。これをデータ型と言います。型によって使える操作が変わります。",
            "correct": "str_val   = \"Hello\"   # str   文字列"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-03-page",
        "title": "型の変換",
        "summary": "型を別の型に変換できます。これを「型キャスト」と言います。変換できない場合はエラーになります。",
        "details": "型を別の型に変換できます。これを「型キャスト」と言います。変換できない場合はエラーになります。",
        "minimalExample": {
          "code": "# 文字列 → 整数\nnum = int(\"42\")       # → 42\nnum = int(\"3.14\")     # ❌ エラー（小数文字列はint不可）\n\n# 文字列 → 小数\nf = float(\"3.14\")     # → 3.14\n\n# 数値 → 文字列\ns = str(100)          # → \"100\"\n\n# 整数 → 小数\nf = float(5)          # → 5.0\n\n# 実用例: 入力を数値として使う\nage = int(input(\"年齢: \"))\nprint(age + 1)",
          "output": "42\n3.14\n\"100\"\n5.0",
          "lineNotes": [
            "L1: 文字列 → 整数",
            "L2: → 42",
            "L3: ❌ エラー（小数文字列はint不可）",
            "L5: 文字列 → 小数",
            "L6: → 3.14",
            "L8: 数値 → 文字列",
            "L9: → \"100\"",
            "L11: 整数 → 小数",
            "L12: → 5.0",
            "L14: 実用例: 入力を数値として使う"
          ],
          "stateTrace": [
            "L1: 文字列 → 整数",
            "L2: → 42",
            "L3: ❌ エラー（小数文字列はint不可）",
            "L5: 文字列 → 小数",
            "L6: → 3.14",
            "L8: 数値 → 文字列",
            "L9: → \"100\"",
            "L11: 整数 → 小数",
            "L12: → 5.0",
            "L14: 実用例: 入力を数値として使う"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 型の変換",
          "execute": "EXECUTE: 型の変換",
          "debug": "DEBUG: 型の変換"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "型を別の型に変換できます。これを「型キャスト」と言います。変換できない場合はエラーになります。",
            "correct": "num = int(\"42\")       # → 42"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-04-page",
        "title": "変数の命名ルール",
        "summary": "変数名は「動く名前」です。Pythonの文法と読みやすさの慣習を分けて確認します。",
        "details": "数字で始まる名前、ハイフンを含む名前、予約語は変数名にできません。普通の変数は snake_case、クラス名は実際に class を定義するときに PascalCase を使います。_private はアクセス制御ではなく、内部用と伝える慣習です。",
        "minimalExample": {
          "code": "# valid variable names\nmy_name = \"Player\"      # letters and underscore\n_private = 100          # convention: internal-use name\nuser1 = \"Member\"       # digits are OK after the first character\n\n# recommended styles\nuser_name = \"Player\"   # snake_case for normal variables\nMAX_SIZE = 100          # UPPER_CASE for constants by convention\n\nclass UserName:\n    pass                # PascalCase for class names",
          "output": "",
          "lineNotes": [
            "L2: my_name は英字とアンダースコアだけで作った有効な変数名です。",
            "L3: _private は「内部用」を伝える慣習で、強制的なアクセス制御ではありません。",
            "L4: user1 のように、数字は2文字目以降なら使えます。",
            "L7: 普通の変数は snake_case が読みやすい書き方です。",
            "L8: MAX_SIZE は定数として扱う値の慣習的な名前です。",
            "L10: PascalCase はクラス名の慣習なので、実際に class UserName: と書きます。"
          ],
          "stateTrace": [
            "my_name / _private / user1 / user_name / MAX_SIZE はすべて有効な名前です。",
            "UserName は変数例ではなく、class 文の名前として示します。"
          ]
        },
        "worldExamples": {
          "decode": "変数名として使える文字のルールを読む。",
          "execute": "代入文を上から追い、どの名前が値を持つか確認する。",
          "debug": "名前が数字開始・予約語・演算子になっていないか切り分ける。"
        },
        "commonMistakes": [
          {
            "wrong": "1user = \"Member\"",
            "reason": "数字から開始不可",
            "correct": "user1 = \"Member\""
          },
          {
            "wrong": "my-name = \"Player\"",
            "reason": "- は演算子",
            "correct": "my_name = \"Player\""
          },
          {
            "wrong": "class = \"Player\"",
            "reason": "予約語",
            "correct": "class_name = \"Player\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-05-page",
        "title": "複数代入と値のスワップ",
        "summary": "Pythonでは複数の変数を1行で代入したり、値を交換したりできます。",
        "details": "Pythonでは複数の変数を1行で代入したり、値を交換したりできます。",
        "minimalExample": {
          "code": "# 複数代入\nx, y, z = 1, 2, 3\nprint(x, y, z)       # → 1 2 3\n\n# 同じ値を複数に代入\na = b = c = 0\n\n# 値のスワップ（他の言語では一時変数が必要）\na, b = 10, 20\na, b = b, a          # 一行で交換できる！\nprint(a, b)          # → 20 10\n\n# アンパック\nfirst, *rest = [1, 2, 3, 4, 5]\nprint(first)         # → 1\nprint(rest)          # → [2, 3, 4, 5]",
          "output": "1 2 3\n20 10\n1\n[2, 3, 4, 5]",
          "lineNotes": [
            "L1: 複数代入",
            "L3: → 1 2 3",
            "L5: 同じ値を複数に代入",
            "L8: 値のスワップ（他の言語では一時変数が必要）",
            "L10: 一行で交換できる！",
            "L11: → 20 10",
            "L13: アンパック",
            "L15: → 1",
            "L16: → [2, 3, 4, 5]"
          ],
          "stateTrace": [
            "L1: 複数代入",
            "L3: → 1 2 3",
            "L5: 同じ値を複数に代入",
            "L8: 値のスワップ（他の言語では一時変数が必要）",
            "L10: 一行で交換できる！",
            "L11: → 20 10",
            "L13: アンパック",
            "L15: → 1",
            "L16: → [2, 3, 4, 5]"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 複数代入と値のスワップ",
          "execute": "EXECUTE: 複数代入と値のスワップ",
          "debug": "DEBUG: 複数代入と値のスワップ"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonでは複数の変数を1行で代入したり、値を交換したりできます。",
            "correct": "x, y, z = 1, 2, 3"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "variables"
    ]
  },
  {
    "id": "variables-types-advanced",
    "language": "python",
    "title": "変数と型（応用）",
    "level": "advanced",
    "parentId": "variables-types",
    "prerequisites": [
      "variables-types"
    ],
    "aliases": [
      "variables_advanced",
      "type-hints"
    ],
    "summary": "型ヒント・isinstance・定数",
    "pages": [
      {
        "id": "variables-types-advanced-01-page",
        "title": "型アノテーション（型ヒント）",
        "summary": "Python 3.5以降では変数や引数に型アノテーションを書けます。コードの可読性が上がり、IDEや mypy などのツールで静的チェックができます。実行時には強制されません。",
        "details": "Python 3.5以降では変数や引数に型アノテーションを書けます。コードの可読性が上がり、IDEや mypy などのツールで静的チェックができます。実行時には強制されません。",
        "minimalExample": {
          "code": "# 変数への型ヒント\nname: str = \"Player\"\nage: int = 20\nscore: float = 98.5\nis_active: bool = True\n\n# 関数の引数と戻り値\ndef greet(name: str, times: int = 1) -> str:\n    return name * times\n\n# リスト・辞書のヒント（Python 3.9+）\nfrom typing import Optional\nnumbers: list[int] = [1, 2, 3]\nconfig: dict[str, str] = {\"lang\": \"python\"}\nmaybe: Optional[str] = None   # str か None",
          "output": "",
          "lineNotes": [
            "L1: 変数への型ヒント",
            "L7: 関数の引数と戻り値",
            "L11: リスト・辞書のヒント（Python 3.9+）",
            "L15: str か None"
          ],
          "stateTrace": [
            "L1: 変数への型ヒント",
            "L7: 関数の引数と戻り値",
            "L11: リスト・辞書のヒント（Python 3.9+）",
            "L15: str か None"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 型アノテーション（型ヒント）",
          "execute": "EXECUTE: 型アノテーション（型ヒント）",
          "debug": "DEBUG: 型アノテーション（型ヒント）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python 3.5以降では変数や引数に型アノテーションを書けます。コードの可読性が上がり、IDEや mypy などのツールで静的チェックができます。実行時には強制されません。",
            "correct": "name: str = \"Player\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-advanced-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-advanced-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-advanced-02-isinstance",
        "title": "isinstance で型を確認する",
        "summary": "実行時に変数の型をチェックするには isinstance() を使います。type() との違いは継承クラスも True になる点です。",
        "details": "実行時に変数の型をチェックするには isinstance() を使います。type() との違いは継承クラスも True になる点です。",
        "minimalExample": {
          "code": "x = 42\n\n# type() は完全一致\nprint(type(x) == int)         # → True\nprint(type(x) == float)       # → False\n\n# isinstance() は継承も考慮（推奨）\nprint(isinstance(x, int))     # → True\nprint(isinstance(x, (int, float)))  # → True（どちらか）\n\n# 実用例：引数の型バリデーション\ndef add(a, b):\n    if not isinstance(a, (int, float)):\n        raise TypeError(f\"数値を渡してください: {type(a)}\")\n    return a + b",
          "output": "True\nFalse\nTrue\nTrue（どちらか）",
          "lineNotes": [
            "L3: type() は完全一致",
            "L4: → True",
            "L5: → False",
            "L7: isinstance() は継承も考慮（推奨）",
            "L8: → True",
            "L9: → True（どちらか）",
            "L11: 実用例：引数の型バリデーション"
          ],
          "stateTrace": [
            "L3: type() は完全一致",
            "L4: → True",
            "L5: → False",
            "L7: isinstance() は継承も考慮（推奨）",
            "L8: → True",
            "L9: → True（どちらか）",
            "L11: 実用例：引数の型バリデーション"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: isinstance で型を確認する",
          "execute": "EXECUTE: isinstance で型を確認する",
          "debug": "DEBUG: isinstance で型を確認する"
        },
        "commonMistakes": [
          {
            "wrong": "raise TypeError(f\"数値を渡してください: {type(a)}\")",
            "reason": "raise TypeError(f\"数値を渡してください: {type(a)}\")",
            "correct": "x = 42"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-advanced-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-advanced-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "variables-types-advanced-03-page",
        "title": "定数の扱い方",
        "summary": "Pythonには定数構文がありませんが、大文字スネークケースで「変更しない変数」を表す慣習があります。Python 3.8以降は Final を使って型レベルで保護できます。",
        "details": "Pythonには定数構文がありませんが、大文字スネークケースで「変更しない変数」を表す慣習があります。Python 3.8以降は Final を使って型レベルで保護できます。",
        "minimalExample": {
          "code": "# 慣習：大文字で定数を表す\nMAX_RETRY = 3\nBASE_URL  = \"https://api.example.com\"\nPI = 3.14159265358979\n\n# Python 3.8+ の Final 型ヒント\nfrom typing import Final\nMAX_SIZE: Final = 100   # 再代入しないことをツールに伝える\n\nfor attempt in range(MAX_RETRY):\n    print(f\"試行 {attempt + 1}/{MAX_RETRY}\")",
          "output": "?? 1/3\n?? 2/3\n?? 3/3",
          "lineNotes": [
            "L1: 慣習：大文字で定数を表す",
            "L3: api.example.com\"",
            "L6: Python 3.8+ の Final 型ヒント",
            "L8: 再代入しないことをツールに伝える"
          ],
          "stateTrace": [
            "L1: 慣習：大文字で定数を表す",
            "L3: api.example.com\"",
            "L6: Python 3.8+ の Final 型ヒント",
            "L8: 再代入しないことをツールに伝える"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 定数の扱い方",
          "execute": "EXECUTE: 定数の扱い方",
          "debug": "DEBUG: 定数の扱い方"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonには定数構文がありませんが、大文字スネークケースで「変更しない変数」を表す慣習があります。Python 3.8以降は Final を使って型レベルで保護できます。",
            "correct": "MAX_RETRY = 3"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "variables-types-advanced-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "variables-types-advanced-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "variables",
      "typehints"
    ]
  },
  {
    "id": "functions",
    "language": "python",
    "title": "関数",
    "level": "basic",
    "parentId": null,
    "prerequisites": [
      "variables-types"
    ],
    "aliases": [
      "functions"
    ],
    "summary": "処理をまとめて再利用する",
    "pages": [
      {
        "id": "functions-01-page",
        "title": "関数の定義と呼び出し",
        "summary": "def キーワードで関数を定義します。同じ処理を何度でも呼び出せます。",
        "details": "def キーワードで関数を定義します。同じ処理を何度でも呼び出せます。",
        "minimalExample": {
          "code": "def greet():\n    print(\"Hello!\")\n    print(\"Welcome!\")\n\ngreet()    # 呼び出し\ngreet()    # 何度でも呼べる\n\n# 関数は定義した後に呼び出す\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)   # → 8",
          "output": "8",
          "lineNotes": [
            "L5: 呼び出し",
            "L6: 何度でも呼べる",
            "L8: 関数は定義した後に呼び出す",
            "L13: → 8"
          ],
          "stateTrace": [
            "L5: 呼び出し",
            "L6: 何度でも呼べる",
            "L8: 関数は定義した後に呼び出す",
            "L13: → 8"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 関数の定義と呼び出し",
          "execute": "EXECUTE: 関数の定義と呼び出し",
          "debug": "DEBUG: 関数の定義と呼び出し"
        },
        "commonMistakes": [
          {
            "wrong": "def キーワードで関数を定義します。同じ処理を何度でも呼び出せます。",
            "reason": "def キーワードで関数を定義します。同じ処理を何度でも呼び出せます。",
            "correct": "def greet():"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "functions-02-page",
        "title": "引数の種類",
        "summary": "Pythonの引数には位置引数・キーワード引数・デフォルト引数・可変長引数があります。",
        "details": "Pythonの引数には位置引数・キーワード引数・デフォルト引数・可変長引数があります。",
        "minimalExample": {
          "code": "# デフォルト引数\ndef greet(name, greeting=\"Hello\"):\n    print(f\"{greeting}, {name}!\")\n\ngreet(\"Guest\")           # → Hello, Guest!\ngreet(\"Member\", \"Hi\")       # → Hi, Member!\ngreet(\"Carol\", greeting=\"Hey\")  # キーワード引数\n\n# 可変長引数 *args（複数の位置引数）\ndef total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3))         # → 6\nprint(total(10, 20, 30, 40))  # → 100\n\n# **kwargs（複数のキーワード引数）\ndef profile(**info):\n    for key, val in info.items():\n        print(f\"{key}: {val}\")\n\nprofile(name=\"Guest\", age=25, city=\"Tokyo\")",
          "output": "Hello, Guest!\nHi, Member!\n6\n100",
          "lineNotes": [
            "L1: デフォルト引数",
            "L5: → Hello, Guest!",
            "L6: → Hi, Member!",
            "L7: キーワード引数",
            "L9: 可変長引数 *args（複数の位置引数）",
            "L13: → 6",
            "L14: → 100",
            "L16: **kwargs（複数のキーワード引数）"
          ],
          "stateTrace": [
            "L1: デフォルト引数",
            "L5: → Hello, Guest!",
            "L6: → Hi, Member!",
            "L7: キーワード引数",
            "L9: 可変長引数 *args（複数の位置引数）",
            "L13: → 6",
            "L14: → 100",
            "L16: **kwargs（複数のキーワード引数）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 引数の種類",
          "execute": "EXECUTE: 引数の種類",
          "debug": "DEBUG: 引数の種類"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonの引数には位置引数・キーワード引数・デフォルト引数・可変長引数があります。",
            "correct": "def greet(name, greeting=\"Hello\"):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "functions-03-return",
        "title": "戻り値とreturn",
        "summary": "関数から値を返すには return を使います。複数の値も返せます。",
        "details": "関数から値を返すには return を使います。複数の値も返せます。",
        "minimalExample": {
          "code": "# 単一の戻り値\ndef square(x):\n    return x ** 2\n\nprint(square(4))    # → 16\n\n# 複数の戻り値（タプルとして返る）\ndef min_max(lst):\n    return min(lst), max(lst)\n\nlo, hi = min_max([3, 1, 4, 1, 5, 9])\nprint(lo, hi)       # → 1 9\n\n# 条件によって異なる値を返す\ndef abs_value(x):\n    if x >= 0:\n        return x\n    return -x       # elseは不要（returnで抜ける）\n\n# return なしは None を返す\ndef no_return():\n    x = 1 + 1\n\nprint(no_return())  # → None",
          "output": "16\n1 9\nNone",
          "lineNotes": [
            "L1: 単一の戻り値",
            "L5: → 16",
            "L7: 複数の戻り値（タプルとして返る）",
            "L12: → 1 9",
            "L14: 条件によって異なる値を返す",
            "L18: elseは不要（returnで抜ける）",
            "L20: return なしは None を返す",
            "L24: → None"
          ],
          "stateTrace": [
            "L1: 単一の戻り値",
            "L5: → 16",
            "L7: 複数の戻り値（タプルとして返る）",
            "L12: → 1 9",
            "L14: 条件によって異なる値を返す",
            "L18: elseは不要（returnで抜ける）",
            "L20: return なしは None を返す",
            "L24: → None"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 戻り値とreturn",
          "execute": "EXECUTE: 戻り値とreturn",
          "debug": "DEBUG: 戻り値とreturn"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "関数から値を返すには return を使います。複数の値も返せます。",
            "correct": "def square(x):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "functions-04-page",
        "title": "ラムダ関数",
        "summary": "名前のない1行の関数です。簡単な処理をその場で定義するときに使います。",
        "details": "名前のない1行の関数です。簡単な処理をその場で定義するときに使います。",
        "minimalExample": {
          "code": "# 通常の関数\ndef double(x):\n    return x * 2\n\n# ラムダ（同じ意味）\ndouble = lambda x: x * 2\nprint(double(5))    # → 10\n\n# 複数の引数\nadd = lambda a, b: a + b\nprint(add(3, 4))    # → 7\n\n# sorted() のキーとして使う\npeople = [(\"Guest\", 25), (\"Member\", 20), (\"Carol\", 30)]\nsorted_people = sorted(people, key=lambda p: p[1])\nprint(sorted_people)   # 年齢順にソート\n\n# map() と filter() との組み合わせ\nnums = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x*2, nums))\nevens   = list(filter(lambda x: x%2==0, nums))",
          "output": "10\n7",
          "lineNotes": [
            "L1: 通常の関数",
            "L5: ラムダ（同じ意味）",
            "L7: → 10",
            "L9: 複数の引数",
            "L11: → 7",
            "L13: sorted() のキーとして使う",
            "L16: 年齢順にソート",
            "L18: map() と filter() との組み合わせ"
          ],
          "stateTrace": [
            "L1: 通常の関数",
            "L5: ラムダ（同じ意味）",
            "L7: → 10",
            "L9: 複数の引数",
            "L11: → 7",
            "L13: sorted() のキーとして使う",
            "L16: 年齢順にソート",
            "L18: map() と filter() との組み合わせ"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ラムダ関数",
          "execute": "EXECUTE: ラムダ関数",
          "debug": "DEBUG: ラムダ関数"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "名前のない1行の関数です。簡単な処理をその場で定義するときに使います。",
            "correct": "def double(x):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "functions-05-page",
        "title": "デコレータ",
        "summary": "関数を引数として受け取り、機能を追加した関数を返す仕組みです。ログ出力・認証チェック・処理時間の計測などに広く使われます。",
        "details": "関数を引数として受け取り、機能を追加した関数を返す仕組みです。ログ出力・認証チェック・処理時間の計測などに広く使われます。",
        "minimalExample": {
          "code": "import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f\"{func.__name__} ?????: {end - start:.4f}?\")\n        return result\n    return wrapper\n\ndef log(func):\n    def wrapper(*args, **kwargs):\n        print(f\"????: {func.__name__}{args}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\n@timer\ndef add(a, b):\n    return a + b\n\nadd(3, 5)",
          "output": "????: add(3, 5)\nadd ?????: 0.0XXX?",
          "lineNotes": [
            "L1: ????????? time ???????????",
            "L3-L10: timer ?????? wrapper ?????????????????",
            "L12-L16: log ????????????????????",
            "L18-L20: @log ? @timer ? add ?????????",
            "L23: add(3, 5) ?????????????????????"
          ],
          "stateTrace": [
            "add = timer(add) ????????????????",
            "add = log(add) ??????????????????",
            "add(3, 5) -> log wrapper -> timer wrapper -> ?? add ??????????"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: デコレータ",
          "execute": "EXECUTE: デコレータ",
          "debug": "DEBUG: デコレータ"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "関数を引数として受け取り、機能を追加した関数を返す仕組みです。ログ出力・認証チェック・処理時間の計測などに広く使われます。",
            "correct": "import time"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "functions-06-page",
        "title": "ジェネレータ関数",
        "summary": "yield を使うと「必要なときだけ値を生成する」ジェネレータを作れます。大きなデータを一度にメモリに乗せずに処理できます。",
        "details": "yield を使うと「必要なときだけ値を生成する」ジェネレータを作れます。大きなデータを一度にメモリに乗せずに処理できます。",
        "minimalExample": {
          "code": "# 通常の関数: 全要素をリストに入れて返す\ndef squares_list(n):\n    return [x**2 for x in range(n)]   # n 要素をメモリに確保\n\n# ジェネレータ: 1つずつ生成する\ndef squares_gen(n):\n    for x in range(n):\n        yield x**2   # ← yield で一時停止して値を返す\n\n# 使い方は同じだがメモリ効率が大幅に違う\nfor sq in squares_gen(5):\n    print(sq)       # 0, 1, 4, 9, 16\n\n# ジェネレータ式（内包表記に似た書き方）\ngen = (x**2 for x in range(5))  # () に注意\nprint(next(gen))    # → 0\nprint(next(gen))    # → 1\nprint(list(gen))    # → [4, 9, 16]（残り）",
          "output": "0\n1\n[4, 9, 16]（残り）",
          "lineNotes": [
            "L1: 通常の関数: 全要素をリストに入れて返す",
            "L3: n 要素をメモリに確保",
            "L5: ジェネレータ: 1つずつ生成する",
            "L8: ← yield で一時停止して値を返す",
            "L10: 使い方は同じだがメモリ効率が大幅に違う",
            "L12: 0, 1, 4, 9, 16",
            "L14: ジェネレータ式（内包表記に似た書き方）",
            "L15: () に注意",
            "L16: → 0",
            "L17: → 1",
            "L18: → [4, 9, 16]（残り）"
          ],
          "stateTrace": [
            "L1: 通常の関数: 全要素をリストに入れて返す",
            "L3: n 要素をメモリに確保",
            "L5: ジェネレータ: 1つずつ生成する",
            "L8: ← yield で一時停止して値を返す",
            "L10: 使い方は同じだがメモリ効率が大幅に違う",
            "L12: 0, 1, 4, 9, 16",
            "L14: ジェネレータ式（内包表記に似た書き方）",
            "L15: () に注意",
            "L16: → 0",
            "L17: → 1",
            "L18: → [4, 9, 16]（残り）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ジェネレータ関数",
          "execute": "EXECUTE: ジェネレータ関数",
          "debug": "DEBUG: ジェネレータ関数"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "yield を使うと「必要なときだけ値を生成する」ジェネレータを作れます。大きなデータを一度にメモリに乗せずに処理できます。",
            "correct": "def squares_list(n):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "functions-06-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "functions-06-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "functions"
    ]
  },
  {
    "id": "scope",
    "language": "python",
    "title": "スコープ",
    "level": "basic",
    "parentId": "functions",
    "prerequisites": [
      "functions"
    ],
    "aliases": [
      "local",
      "global",
      "scope"
    ],
    "summary": "スコープを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "scope-01-page",
        "title": "グローバル変数とローカル変数",
        "summary": "変数には「スコープ（有効範囲）」があります。関数の内外で扱いが変わります。",
        "details": "変数には「スコープ（有効範囲）」があります。関数の内外で扱いが変わります。",
        "minimalExample": {
          "code": "count = 0            # グローバル変数（関数の外）\n\ndef increment():\n    global count     # グローバル変数を変更するには global 宣言\n    count += 1\n\ndef show():\n    local_val = 99   # ローカル変数（関数の中だけ有効）\n    print(count)     # グローバルは読み取れる\n    print(local_val)\n\nincrement()\nshow()               # → 1, 99\n# print(local_val)   ❌ 関数の外からはアクセスできない",
          "output": "1, 99",
          "lineNotes": [
            "L1: グローバル変数（関数の外）",
            "L4: グローバル変数を変更するには global 宣言",
            "L8: ローカル変数（関数の中だけ有効）",
            "L9: グローバルは読み取れる",
            "L13: → 1, 99",
            "L14: print(local_val)   ❌ 関数の外からはアクセスできない"
          ],
          "stateTrace": [
            "L1: グローバル変数（関数の外）",
            "L4: グローバル変数を変更するには global 宣言",
            "L8: ローカル変数（関数の中だけ有効）",
            "L9: グローバルは読み取れる",
            "L13: → 1, 99",
            "L14: print(local_val)   ❌ 関数の外からはアクセスできない"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: グローバル変数とローカル変数",
          "execute": "EXECUTE: グローバル変数とローカル変数",
          "debug": "DEBUG: グローバル変数とローカル変数"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "変数には「スコープ（有効範囲）」があります。関数の内外で扱いが変わります。",
            "correct": "count = 0            # グローバル変数（関数の外）"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "scope-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "scope-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "scope-02-page",
        "title": "スコープとクロージャ",
        "summary": "関数のスコープ（変数の有効範囲）と、関数を返す関数（クロージャ）について理解しましょう。",
        "details": "関数のスコープ（変数の有効範囲）と、関数を返す関数（クロージャ）について理解しましょう。",
        "minimalExample": {
          "code": "# LEGB ルール: Local > Enclosing > Global > Built-in\nx = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n\n    def inner():\n        x = \"local\"\n        print(x)    # → local（最も近いスコープを使う）\n    inner()\n    print(x)        # → enclosing\n\nouter()\nprint(x)            # → global\n\n# クロージャ: 関数を返す関数\ndef multiplier(n):\n    def multiply(x):\n        return x * n   # n を「記憶」する\n    return multiply\n\ndouble = multiplier(2)\ntriple = multiplier(3)\nprint(double(5))    # → 10\nprint(triple(5))    # → 15",
          "output": "local（最も近いスコープを使う）\nenclosing\nglobal\n10\n15",
          "lineNotes": [
            "L1: LEGB ルール: Local > Enclosing > Global > Built-in",
            "L9: → local（最も近いスコープを使う）",
            "L11: → enclosing",
            "L14: → global",
            "L16: クロージャ: 関数を返す関数",
            "L19: n を「記憶」する",
            "L24: → 10",
            "L25: → 15"
          ],
          "stateTrace": [
            "L1: LEGB ルール: Local > Enclosing > Global > Built-in",
            "L9: → local（最も近いスコープを使う）",
            "L11: → enclosing",
            "L14: → global",
            "L16: クロージャ: 関数を返す関数",
            "L19: n を「記憶」する",
            "L24: → 10",
            "L25: → 15"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: スコープとクロージャ",
          "execute": "EXECUTE: スコープとクロージャ",
          "debug": "DEBUG: スコープとクロージャ"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "関数のスコープ（変数の有効範囲）と、関数を返す関数（クロージャ）について理解しましょう。",
            "correct": "x = \"global\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "scope-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "scope-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "scope-03-global",
        "title": "globalで変更する",
        "summary": "global は外側の変数を直接変更するため、使いすぎると状態を追いにくい。",
        "minimalExample": {
          "code": "counter = 0\n\ndef add_clear():\n    global counter\n    counter += 1\n\nadd_clear()\nprint(counter)",
          "output": "1",
          "lineNotes": [
            "global は外側の変数を変更すると宣言する。",
            "使いすぎると更新場所が追いにくくなる。"
          ],
          "stateTrace": [
            "1. global は外側の変数を変更すると宣言する。",
            "2. 使いすぎると更新場所が追いにくくなる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 globalで変更するでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 globalで変更するでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 globalで変更するでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "counter = 0"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "counter = 0"
          }
        ],
        "miniChecks": [
          {
            "id": "scope-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "scope-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "global は外側の変数を直接変更するため、使いすぎると状態を追いにくい。"
      },
      {
        "id": "scope-04-return",
        "title": "returnで返す代替案",
        "summary": "外側を書き換えるより、return で新しい値を返す方が安全なことが多い。",
        "minimalExample": {
          "code": "def add_clear(counter):\n    return counter + 1\n\ncounter = 0\ncounter = add_clear(counter)\nprint(counter)",
          "output": "1",
          "lineNotes": [
            "値を引数で受け取り、新しい値を return する。",
            "外側の状態を直接変えないので追いやすい。"
          ],
          "stateTrace": [
            "1. 値を引数で受け取り、新しい値を return する。",
            "2. 外側の状態を直接変えないので追いやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 returnで返す代替案では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 returnで返す代替案では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 returnで返す代替案では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def add_clear(counter):"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def add_clear(counter):"
          }
        ],
        "miniChecks": [
          {
            "id": "scope-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "scope-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "外側を書き換えるより、return で新しい値を返す方が安全なことが多い。"
      },
      {
        "id": "scope-05-page",
        "title": "よくある間違い",
        "summary": "同じ名前でもローカルとグローバルは別物になることがある。",
        "minimalExample": {
          "code": "score = 10\n\ndef reset_score():\n    score = 0\n    return score\n\nprint(reset_score())\nprint(score)",
          "output": "0\n10",
          "lineNotes": [
            "関数内の score はローカル変数。",
            "外側の score は変更されない。"
          ],
          "stateTrace": [
            "1. 関数内の score はローカル変数。",
            "2. 外側の score は変更されない。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 よくある間違いでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 よくある間違いでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 よくある間違いでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "score = 10"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "score = 10"
          }
        ],
        "miniChecks": [
          {
            "id": "scope-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "scope-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "同じ名前でもローカルとグローバルは別物になることがある。"
      },
      {
        "id": "scope-06-page",
        "title": "確認問題",
        "summary": "どの名前がどの範囲で有効かを声に出して追う。",
        "minimalExample": {
          "code": "def format_label(country):\n    suffix = \"clear\"\n    return f\"{country}:{suffix}\"\n\nprint(format_label(\"JP\"))",
          "output": "JP:clear",
          "lineNotes": [
            "country は引数として関数内で使える。",
            "suffix は関数の中だけで有効。"
          ],
          "stateTrace": [
            "1. country は引数として関数内で使える。",
            "2. suffix は関数の中だけで有効。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 確認問題では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 確認問題では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 確認問題では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def format_label(country):"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def format_label(country):"
          }
        ],
        "miniChecks": [
          {
            "id": "scope-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "scope-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "どの名前がどの範囲で有効かを声に出して追う。"
      }
    ],
    "relatedConceptIds": [
      "functions",
      "variables"
    ]
  },
  {
    "id": "strings",
    "language": "python",
    "title": "文字列操作",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "strings"
    ],
    "summary": "テキストを自在に操る",
    "pages": [
      {
        "id": "strings-01-page",
        "title": "文字列の基本",
        "summary": "文字列は \" \" または ' ' で囲みます。複数行は \"\"\" \"\"\" を使います。文字列はイミュータブル（変更不可）です。",
        "details": "文字列は \" \" または ' ' で囲みます。複数行は \"\"\" \"\"\" を使います。文字列はイミュータブル（変更不可）です。",
        "minimalExample": {
          "code": "s1 = \"Hello\"\ns2 = 'World'\ns3 = \"\"\"複数行の\n文字列が\n書けます\"\"\"\n\n# 文字列の結合\nprint(s1 + \" \" + s2)   # → Hello World\n\n# 繰り返し\nprint(\"Ha\" * 3)         # → HaHaHa\n\n# 長さ\nprint(len(\"Python\"))    # → 6",
          "output": "Hello World\nHaHaHa\n6",
          "lineNotes": [
            "L7: 文字列の結合",
            "L8: → Hello World",
            "L10: 繰り返し",
            "L11: → HaHaHa",
            "L13: 長さ",
            "L14: → 6"
          ],
          "stateTrace": [
            "L7: 文字列の結合",
            "L8: → Hello World",
            "L10: 繰り返し",
            "L11: → HaHaHa",
            "L13: 長さ",
            "L14: → 6"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 文字列の基本",
          "execute": "EXECUTE: 文字列の基本",
          "debug": "DEBUG: 文字列の基本"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "文字列は \" \" または ' ' で囲みます。複数行は \"\"\" \"\"\" を使います。文字列はイミュータブル（変更不可）です。",
            "correct": "s1 = \"Hello\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "strings-02-f",
        "title": "f文字列（フォーマット）",
        "summary": "f文字列を使うと変数を文字列に埋め込めます。最も現代的で読みやすい書き方です。",
        "details": "f文字列を使うと変数を文字列に埋め込めます。最も現代的で読みやすい書き方です。",
        "minimalExample": {
          "code": "name = \"Guest\"\nage = 25\nheight = 163.5\n\n# f文字列（推奨）\nprint(f\"名前: {name}, 年齢: {age}\")\n# → 名前: Guest, 年齢: 25\n\n# 計算も埋め込める\nprint(f\"来年は{age + 1}歳\")\n\n# 小数点の桁数を指定\nprint(f\"身長: {height:.1f}cm\")  # → 身長: 163.5cm\n\n# 古い書き方（参考）\nprint(\"名前: %s\" % name)\nprint(\"名前: {}\".format(name))",
          "output": "名前: Guest, 年齢: 25\n身長: 163.5cm",
          "lineNotes": [
            "L5: f文字列（推奨）",
            "L7: → 名前: Guest, 年齢: 25",
            "L9: 計算も埋め込める",
            "L12: 小数点の桁数を指定",
            "L13: → 身長: 163.5cm",
            "L15: 古い書き方（参考）"
          ],
          "stateTrace": [
            "L5: f文字列（推奨）",
            "L7: → 名前: Guest, 年齢: 25",
            "L9: 計算も埋め込める",
            "L12: 小数点の桁数を指定",
            "L13: → 身長: 163.5cm",
            "L15: 古い書き方（参考）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: f文字列（フォーマット）",
          "execute": "EXECUTE: f文字列（フォーマット）",
          "debug": "DEBUG: f文字列（フォーマット）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "f文字列を使うと変数を文字列に埋め込めます。最も現代的で読みやすい書き方です。",
            "correct": "name = \"Guest\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "strings-03-page",
        "title": "インデックスとスライス",
        "summary": "文字列の特定の文字や範囲を取り出せます。インデックスは0から始まります。",
        "details": "文字列の特定の文字や範囲を取り出せます。インデックスは0から始まります。",
        "minimalExample": {
          "code": "s = \"Python\"\n\n# インデックス（1文字取り出し）\nprint(s[0])      # → P  (最初)\nprint(s[-1])     # → n  (最後)\nprint(s[-2])     # → o  (後ろから2番目)\n\n# スライス [start:stop:step]\nprint(s[0:3])    # → Pyt  (0〜2文字目)\nprint(s[2:])     # → thon (2文字目以降)\nprint(s[:4])     # → Pyth (最初〜3文字目)\nprint(s[::-1])   # → nohtyP (逆順)\nprint(s[::2])    # → Pto  (1文字おき)",
          "output": "P  (最初)\nn  (最後)\no  (後ろから2番目)\nPyt  (0〜2文字目)\nthon (2文字目以降)\nPyth (最初〜3文字目)\nnohtyP (逆順)\nPto  (1文字おき)",
          "lineNotes": [
            "L3: インデックス（1文字取り出し）",
            "L4: → P  (最初)",
            "L5: → n  (最後)",
            "L6: → o  (後ろから2番目)",
            "L8: スライス [start:stop:step]",
            "L9: → Pyt  (0〜2文字目)",
            "L10: → thon (2文字目以降)",
            "L11: → Pyth (最初〜3文字目)",
            "L12: → nohtyP (逆順)",
            "L13: → Pto  (1文字おき)"
          ],
          "stateTrace": [
            "L3: インデックス（1文字取り出し）",
            "L4: → P  (最初)",
            "L5: → n  (最後)",
            "L6: → o  (後ろから2番目)",
            "L8: スライス [start:stop:step]",
            "L9: → Pyt  (0〜2文字目)",
            "L10: → thon (2文字目以降)",
            "L11: → Pyth (最初〜3文字目)",
            "L12: → nohtyP (逆順)",
            "L13: → Pto  (1文字おき)"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: インデックスとスライス",
          "execute": "EXECUTE: インデックスとスライス",
          "debug": "DEBUG: インデックスとスライス"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "文字列の特定の文字や範囲を取り出せます。インデックスは0から始まります。",
            "correct": "s = \"Python\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "strings-04-page",
        "title": "よく使うメソッド",
        "summary": "文字列には便利なメソッドがたくさんあります。メソッドは元の文字列を変更せず新しい文字列を返します。",
        "details": "文字列には便利なメソッドがたくさんあります。メソッドは元の文字列を変更せず新しい文字列を返します。",
        "minimalExample": {
          "code": "s = \"  Hello, World!  \"\n\nprint(s.upper())         # → \"  HELLO, WORLD!  \"\nprint(s.lower())         # → \"  hello, world!  \"\nprint(s.strip())         # → \"Hello, World!\"  前後の空白除去\nprint(s.replace(\"o\",\"0\"))# → \"  Hell0, W0rld!  \"\nprint(s.count(\"l\"))      # → 3\nprint(s.find(\"World\"))   # → 9  (見つかった位置)\n\n# 分割と結合\nwords = \"a,b,c\".split(\",\")  # → ['a', 'b', 'c']\njoined = \"-\".join(words)     # → \"a-b-c\"\n\n# 確認系\nprint(\"hello\".startswith(\"he\"))  # → True\nprint(\"hello\".endswith(\"lo\"))    # → True\nprint(\"123\".isdigit())           # → True",
          "output": "\"  HELLO, WORLD!  \"\n\"  hello, world!  \"\n\"Hello, World!\"  前後の空白除去\n\"  Hell0, W0rld!  \"\n3\n9  (見つかった位置)\n['a', 'b', 'c']\n\"a-b-c\"\nTrue\nTrue\nTrue",
          "lineNotes": [
            "L3: → \"  HELLO, WORLD!  \"",
            "L4: → \"  hello, world!  \"",
            "L5: → \"Hello, World!\"  前後の空白除去",
            "L6: → \"  Hell0, W0rld!  \"",
            "L7: → 3",
            "L8: → 9  (見つかった位置)",
            "L10: 分割と結合",
            "L11: → ['a', 'b', 'c']",
            "L12: → \"a-b-c\"",
            "L14: 確認系",
            "L15: → True",
            "L16: → True"
          ],
          "stateTrace": [
            "L3: → \"  HELLO, WORLD!  \"",
            "L4: → \"  hello, world!  \"",
            "L5: → \"Hello, World!\"  前後の空白除去",
            "L6: → \"  Hell0, W0rld!  \"",
            "L7: → 3",
            "L8: → 9  (見つかった位置)",
            "L10: 分割と結合",
            "L11: → ['a', 'b', 'c']",
            "L12: → \"a-b-c\"",
            "L14: 確認系",
            "L15: → True",
            "L16: → True"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: よく使うメソッド",
          "execute": "EXECUTE: よく使うメソッド",
          "debug": "DEBUG: よく使うメソッド"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "文字列には便利なメソッドがたくさんあります。メソッドは元の文字列を変更せず新しい文字列を返します。",
            "correct": "s = \"  Hello, World!  \""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "strings-05-page",
        "title": "文字列と数値の注意点",
        "summary": "文字列と数値を混在させるとエラーになります。変換してから扱いましょう。",
        "details": "文字列と数値を混在させるとエラーになります。変換してから扱いましょう。",
        "minimalExample": {
          "code": "# ❌ エラー\n# print(\"年齢: \" + 25)   str と int は + できない\n\n# ✅ 正しい書き方\nprint(\"年齢: \" + str(25))    # 文字列に変換\nprint(f\"年齢: {25}\")          # f文字列を使う（推奨）\n\n# input() は常に文字列を返す\n# age = input(\"年齢: \")\n# print(age + 1)  ❌ エラー\n# print(int(age) + 1)  ✅ 正しい",
          "output": "??: 25\n??: 25",
          "lineNotes": [
            "L1: ❌ エラー",
            "L2: print(\"年齢: \" + 25)   str と int は + できない",
            "L4: ✅ 正しい書き方",
            "L5: 文字列に変換",
            "L6: f文字列を使う（推奨）",
            "L8: input() は常に文字列を返す",
            "L9: age = input(\"年齢: \")",
            "L10: print(age + 1)  ❌ エラー",
            "L11: print(int(age) + 1)  ✅ 正しい"
          ],
          "stateTrace": [
            "L1: ❌ エラー",
            "L2: print(\"年齢: \" + 25)   str と int は + できない",
            "L4: ✅ 正しい書き方",
            "L5: 文字列に変換",
            "L6: f文字列を使う（推奨）",
            "L8: input() は常に文字列を返す",
            "L9: age = input(\"年齢: \")",
            "L10: print(age + 1)  ❌ エラー",
            "L11: print(int(age) + 1)  ✅ 正しい"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 文字列と数値の注意点",
          "execute": "EXECUTE: 文字列と数値の注意点",
          "debug": "DEBUG: 文字列と数値の注意点"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "文字列と数値を混在させるとエラーになります。変換してから扱いましょう。",
            "correct": "print(\"年齢: \" + str(25))    # 文字列に変換"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "strings-06-re",
        "title": "正規表現の基本（re モジュール）",
        "summary": "複雑なパターン検索や置換には re モジュールを使います。メールアドレスの検証やログ解析などに役立ちます。",
        "details": "複雑なパターン検索や置換には re モジュールを使います。メールアドレスの検証やログ解析などに役立ちます。",
        "minimalExample": {
          "code": "import re\n\ntext = \"お問い合わせ: info@example.com または support@test.org\"\n\n# 検索: パターンにマッチする最初の箇所\nm = re.search(r'\\w+@\\w+\\.\\w+', text)\nif m:\n    print(m.group())     # → info@example.com\n\n# 全検索: すべてのマッチを取得\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\nprint(emails)   # → ['info@example.com', 'support@test.org']\n\n# 置換\ncleaned = re.sub(r'\\d+', 'X', \"ID:123 Score:456\")\nprint(cleaned)  # → ID:X Score:X\n\n# よく使うパターン\n# \\d   数字\n# \\w   英数字＋アンダースコア\n# \\s   空白\n# .     任意の1文字\n# +     1回以上  *  0回以上  ?  0か1回",
          "output": "info@example.com\n['info@example.com', 'support@test.org']\nID:X Score:X",
          "lineNotes": [
            "L5: 検索: パターンにマッチする最初の箇所",
            "L8: → info@example.com",
            "L10: 全検索: すべてのマッチを取得",
            "L12: → ['info@example.com', 'support@test.org']",
            "L14: 置換",
            "L16: → ID:X Score:X",
            "L18: よく使うパターン",
            "L19: \\d   数字",
            "L20: \\w   英数字＋アンダースコア",
            "L21: \\s   空白",
            "L22: .     任意の1文字",
            "L23: +     1回以上  *  0回以上  ?  0か1回"
          ],
          "stateTrace": [
            "L5: 検索: パターンにマッチする最初の箇所",
            "L8: → info@example.com",
            "L10: 全検索: すべてのマッチを取得",
            "L12: → ['info@example.com', 'support@test.org']",
            "L14: 置換",
            "L16: → ID:X Score:X",
            "L18: よく使うパターン",
            "L19: \\d   数字",
            "L20: \\w   英数字＋アンダースコア",
            "L21: \\s   空白",
            "L22: .     任意の1文字",
            "L23: +     1回以上  *  0回以上  ?  0か1回"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 正規表現の基本（re モジュール）",
          "execute": "EXECUTE: 正規表現の基本（re モジュール）",
          "debug": "DEBUG: 正規表現の基本（re モジュール）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "複雑なパターン検索や置換には re モジュールを使います。メールアドレスの検証やログ解析などに役立ちます。",
            "correct": "import re"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "strings-06-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "strings-06-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": []
  },
  {
    "id": "operators",
    "language": "python",
    "title": "演算子",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "operators"
    ],
    "summary": "計算と比較の記号",
    "pages": [
      {
        "id": "operators-01-page",
        "title": "算術演算子",
        "summary": "数値の計算に使う記号です。優先順位は数学と同じ（掛け算・割り算が先）です。",
        "details": "数値の計算に使う記号です。優先順位は数学と同じ（掛け算・割り算が先）です。",
        "minimalExample": {
          "code": "a, b = 10, 3\n\nprint(a + b)    # → 13   足し算\nprint(a - b)    # →  7   引き算\nprint(a * b)    # → 30   掛け算\nprint(a / b)    # →  3.333... 割り算（常にfloat）\nprint(a // b)   # →  3   切り捨て除算（整数）\nprint(a % b)    # →  1   余り\nprint(a ** b)   # → 1000 べき乗（2**10=1024）\n\n# 優先順位\nprint(2 + 3 * 4)     # → 14  (* が先)\nprint((2 + 3) * 4)   # → 20  () で優先",
          "output": "13   足し算\n7   引き算\n30   掛け算\n3.333... 割り算（常にfloat）\n3   切り捨て除算（整数）\n1   余り\n1000 べき乗（2**10=1024）\n14  (* が先)\n20  () で優先",
          "lineNotes": [
            "L3: → 13   足し算",
            "L4: →  7   引き算",
            "L5: → 30   掛け算",
            "L6: →  3.333... 割り算（常にfloat）",
            "L7: b)   # →  3   切り捨て除算（整数）",
            "L8: →  1   余り",
            "L9: → 1000 べき乗（2**10=1024）",
            "L11: 優先順位",
            "L12: → 14  (* が先)",
            "L13: → 20  () で優先"
          ],
          "stateTrace": [
            "L3: → 13   足し算",
            "L4: →  7   引き算",
            "L5: → 30   掛け算",
            "L6: →  3.333... 割り算（常にfloat）",
            "L7: b)   # →  3   切り捨て除算（整数）",
            "L8: →  1   余り",
            "L9: → 1000 べき乗（2**10=1024）",
            "L11: 優先順位",
            "L12: → 14  (* が先)",
            "L13: → 20  () で優先"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 算術演算子",
          "execute": "EXECUTE: 算術演算子",
          "debug": "DEBUG: 算術演算子"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "数値の計算に使う記号です。優先順位は数学と同じ（掛け算・割り算が先）です。",
            "correct": "a, b = 10, 3"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "operators-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "operators-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "operators-02-page",
        "title": "代入演算子",
        "summary": "変数の値を更新するときに使う省略形です。",
        "details": "変数の値を更新するときに使う省略形です。",
        "minimalExample": {
          "code": "x = 10\n\nx += 5    # x = x + 5  → 15\nx -= 3    # x = x - 3  → 12\nx *= 2    # x = x * 2  → 24\nx //= 5   # x = x // 5 → 4\nx **= 3   # x = x ** 3 → 64\nx %= 10   # x = x % 10 → 4\n\n# よく使うパターン\ncount = 0\ncount += 1    # カウントアップ\ntotal = 0\ntotal += price  # 合計に加算",
          "output": "",
          "lineNotes": [
            "L3: x = x + 5  → 15",
            "L4: x = x - 3  → 12",
            "L5: x = x * 2  → 24",
            "L6: = 5   # x = x // 5 → 4",
            "L7: x = x ** 3 → 64",
            "L8: x = x % 10 → 4",
            "L10: よく使うパターン",
            "L12: カウントアップ",
            "L14: 合計に加算"
          ],
          "stateTrace": [
            "L3: x = x + 5  → 15",
            "L4: x = x - 3  → 12",
            "L5: x = x * 2  → 24",
            "L6: = 5   # x = x // 5 → 4",
            "L7: x = x ** 3 → 64",
            "L8: x = x % 10 → 4",
            "L10: よく使うパターン",
            "L12: カウントアップ",
            "L14: 合計に加算"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 代入演算子",
          "execute": "EXECUTE: 代入演算子",
          "debug": "DEBUG: 代入演算子"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "変数の値を更新するときに使う省略形です。",
            "correct": "x = 10"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "operators-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "operators-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "operators-03-page",
        "title": "比較演算子",
        "summary": "2つの値を比べて True または False を返します。if文やwhile文の条件としてよく使います。",
        "details": "2つの値を比べて True または False を返します。if文やwhile文の条件としてよく使います。",
        "minimalExample": {
          "code": "x = 5\n\nprint(x == 5)    # → True  等しい\nprint(x != 5)    # → False 等しくない\nprint(x > 3)     # → True  より大きい\nprint(x < 3)     # → False より小さい\nprint(x >= 5)    # → True  以上\nprint(x <= 4)    # → False 以下\n\n# 文字列の比較（アルファベット順）\nprint(\"apple\" < \"banana\")   # → True\nprint(\"abc\" == \"abc\")        # → True\n\n# 連鎖比較（Pythonの特徴）\nage = 20\nprint(18 <= age <= 65)   # → True（成人かつ65歳以下）",
          "output": "True  等しい\nFalse 等しくない\nTrue  より大きい\nFalse より小さい\nTrue  以上\nFalse 以下\nTrue\nTrue\nTrue（成人かつ65歳以下）",
          "lineNotes": [
            "L3: → True  等しい",
            "L4: → False 等しくない",
            "L5: → True  より大きい",
            "L6: → False より小さい",
            "L7: → True  以上",
            "L8: → False 以下",
            "L10: 文字列の比較（アルファベット順）",
            "L11: → True",
            "L12: → True",
            "L14: 連鎖比較（Pythonの特徴）",
            "L16: → True（成人かつ65歳以下）"
          ],
          "stateTrace": [
            "L3: → True  等しい",
            "L4: → False 等しくない",
            "L5: → True  より大きい",
            "L6: → False より小さい",
            "L7: → True  以上",
            "L8: → False 以下",
            "L10: 文字列の比較（アルファベット順）",
            "L11: → True",
            "L12: → True",
            "L14: 連鎖比較（Pythonの特徴）",
            "L16: → True（成人かつ65歳以下）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 比較演算子",
          "execute": "EXECUTE: 比較演算子",
          "debug": "DEBUG: 比較演算子"
        },
        "commonMistakes": [
          {
            "wrong": "2つの値を比べて True または False を返します。if文やwhile文の条件としてよく使います。",
            "reason": "2つの値を比べて True または False を返します。if文やwhile文の条件としてよく使います。",
            "correct": "x = 5"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "operators-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "operators-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "operators-04-page",
        "title": "論理演算子",
        "summary": "複数の条件を組み合わせます。短絡評価という仕組みで効率よく動きます。",
        "details": "複数の条件を組み合わせます。短絡評価という仕組みで効率よく動きます。",
        "minimalExample": {
          "code": "a, b = True, False\n\nprint(a and b)   # → False  両方Trueのとき True\nprint(a or b)    # → True   どちらかTrueのとき True\nprint(not a)     # → False  反転\n\n# 実用例\nage = 20\nhas_id = True\nis_member = False\n\n# 18歳以上かつIDを持っている\nprint(age >= 18 and has_id)       # → True\n\n# 会員かまたは18歳以上\nprint(is_member or age >= 18)     # → True\n\n# 短絡評価: 左で結果が確定したら右は評価しない\nx = None\nprint(x is not None and x > 0)   # → False（エラーにならない）",
          "output": "False  両方Trueのとき True\nTrue   どちらかTrueのとき True\nFalse  反転\nTrue\nTrue\nFalse（エラーにならない）",
          "lineNotes": [
            "L3: → False  両方Trueのとき True",
            "L4: → True   どちらかTrueのとき True",
            "L5: → False  反転",
            "L7: 実用例",
            "L12: 18歳以上かつIDを持っている",
            "L13: → True",
            "L15: 会員かまたは18歳以上",
            "L16: → True",
            "L18: 短絡評価: 左で結果が確定したら右は評価しない",
            "L20: → False（エラーにならない）"
          ],
          "stateTrace": [
            "L3: → False  両方Trueのとき True",
            "L4: → True   どちらかTrueのとき True",
            "L5: → False  反転",
            "L7: 実用例",
            "L12: 18歳以上かつIDを持っている",
            "L13: → True",
            "L15: 会員かまたは18歳以上",
            "L16: → True",
            "L18: 短絡評価: 左で結果が確定したら右は評価しない",
            "L20: → False（エラーにならない）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 論理演算子",
          "execute": "EXECUTE: 論理演算子",
          "debug": "DEBUG: 論理演算子"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "複数の条件を組み合わせます。短絡評価という仕組みで効率よく動きます。",
            "correct": "a, b = True, False"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "operators-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "operators-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "operators-05-page",
        "title": "その他の便利な演算子",
        "summary": "in、is、などのPython特有の演算子も覚えておくと便利です。",
        "details": "in、is、などのPython特有の演算子も覚えておくと便利です。",
        "minimalExample": {
          "code": "# in: 含まれるか確認\nfruits = [\"apple\", \"banana\"]\nprint(\"apple\" in fruits)      # → True\nprint(\"grape\" not in fruits)  # → True\nprint(\"py\" in \"python\")       # → True（文字列でも使える）\n\n# is: 同一オブジェクトか確認（==とは違う）\na = [1, 2, 3]\nb = a\nc = [1, 2, 3]\nprint(a is b)    # → True  同じオブジェクト\nprint(a is c)    # → False 中身は同じでも別オブジェクト\nprint(a == c)    # → True  値は等しい\n\n# None の確認は is を使う（推奨）\nx = None\nprint(x is None)      # → True  ✅ 推奨\nprint(x == None)      # → True  △ 非推奨",
          "output": "True\nTrue\nTrue（文字列でも使える）\nTrue  同じオブジェクト\nFalse 中身は同じでも別オブジェクト\nTrue  値は等しい\nTrue  ✅ 推奨\nTrue  △ 非推奨",
          "lineNotes": [
            "L1: in: 含まれるか確認",
            "L3: → True",
            "L4: → True",
            "L5: → True（文字列でも使える）",
            "L7: is: 同一オブジェクトか確認（==とは違う）",
            "L11: → True  同じオブジェクト",
            "L12: → False 中身は同じでも別オブジェクト",
            "L13: → True  値は等しい",
            "L15: None の確認は is を使う（推奨）",
            "L17: → True  ✅ 推奨",
            "L18: → True  △ 非推奨"
          ],
          "stateTrace": [
            "L1: in: 含まれるか確認",
            "L3: → True",
            "L4: → True",
            "L5: → True（文字列でも使える）",
            "L7: is: 同一オブジェクトか確認（==とは違う）",
            "L11: → True  同じオブジェクト",
            "L12: → False 中身は同じでも別オブジェクト",
            "L13: → True  値は等しい",
            "L15: None の確認は is を使う（推奨）",
            "L17: → True  ✅ 推奨",
            "L18: → True  △ 非推奨"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: その他の便利な演算子",
          "execute": "EXECUTE: その他の便利な演算子",
          "debug": "DEBUG: その他の便利な演算子"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "in、is、などのPython特有の演算子も覚えておくと便利です。",
            "correct": "fruits = [\"apple\", \"banana\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "operators-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "operators-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": []
  },
  {
    "id": "conditionals",
    "language": "python",
    "title": "条件分岐",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "conditionals"
    ],
    "summary": "条件によって処理を変える",
    "pages": [
      {
        "id": "conditionals-01-if",
        "title": "if 文の基本",
        "summary": "条件が True のときだけ処理を実行します。Pythonはインデント（スペース4つ）でブロックを表します。これは必須です。",
        "details": "条件が True のときだけ処理を実行します。Pythonはインデント（スペース4つ）でブロックを表します。これは必須です。",
        "minimalExample": {
          "code": "temperature = 35\n\nif temperature > 30:\n    print(\"暑い！\")       # ← インデント必須\n    print(\"水を飲もう\")   # ← 同じブロック\n\nprint(\"これは常に表示\")   # ← if の外",
          "output": "???\n?????\n???????",
          "lineNotes": [
            "L4: ← インデント必須",
            "L5: ← 同じブロック",
            "L7: ← if の外"
          ],
          "stateTrace": [
            "L4: ← インデント必須",
            "L5: ← 同じブロック",
            "L7: ← if の外"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: if 文の基本",
          "execute": "EXECUTE: if 文の基本",
          "debug": "DEBUG: if 文の基本"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "条件が True のときだけ処理を実行します。Pythonはインデント（スペース4つ）でブロックを表します。これは必須です。",
            "correct": "temperature = 35"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "conditionals-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "conditionals-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "conditionals-02-if-elif-else",
        "title": "if / elif / else",
        "summary": "複数の条件分岐には elif を使います。上から順に評価され、最初に True になった条件だけ実行されます。",
        "details": "複数の条件分岐には elif を使います。上から順に評価され、最初に True になった条件だけ実行されます。",
        "minimalExample": {
          "code": "score = 85\n\nif score >= 90:\n    grade = \"S\"\nelif score >= 80:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"F\"\n\nprint(f\"評価: {grade}\")   # → 評価: A",
          "output": "評価: A",
          "lineNotes": [
            "L14: → 評価: A"
          ],
          "stateTrace": [
            "L14: → 評価: A"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: if / elif / else",
          "execute": "EXECUTE: if / elif / else",
          "debug": "DEBUG: if / elif / else"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "複数の条件分岐には elif を使います。上から順に評価され、最初に True になった条件だけ実行されます。",
            "correct": "score = 85"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "conditionals-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "conditionals-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "conditionals-03-page",
        "title": "三項演算子（条件式）",
        "summary": "1行で if-else を書けます。シンプルな条件分岐に便利です。",
        "details": "1行で if-else を書けます。シンプルな条件分岐に便利です。",
        "minimalExample": {
          "code": "age = 20\n\n# 通常の書き方\nif age >= 18:\n    status = \"成人\"\nelse:\n    status = \"未成年\"\n\n# 三項演算子（1行で書ける）\nstatus = \"成人\" if age >= 18 else \"未成年\"\nprint(status)   # → 成人\n\n# 実用例\nx = 10\nabs_x = x if x >= 0 else -x   # 絶対値\nlabel = \"偶数\" if x % 2 == 0 else \"奇数\"",
          "output": "成人",
          "lineNotes": [
            "L3: 通常の書き方",
            "L9: 三項演算子（1行で書ける）",
            "L11: → 成人",
            "L13: 実用例",
            "L15: 絶対値"
          ],
          "stateTrace": [
            "L3: 通常の書き方",
            "L9: 三項演算子（1行で書ける）",
            "L11: → 成人",
            "L13: 実用例",
            "L15: 絶対値"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 三項演算子（条件式）",
          "execute": "EXECUTE: 三項演算子（条件式）",
          "debug": "DEBUG: 三項演算子（条件式）"
        },
        "commonMistakes": [
          {
            "wrong": "1行で if-else を書けます。シンプルな条件分岐に便利です。",
            "reason": "1行で if-else を書けます。シンプルな条件分岐に便利です。",
            "correct": "age = 20"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "conditionals-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "conditionals-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "conditionals-04-truthy-falsy",
        "title": "Truthyと Falsy",
        "summary": "Pythonでは True/False 以外の値も条件として使えます。これを Truthy / Falsy と言います。",
        "details": "Pythonでは True/False 以外の値も条件として使えます。これを Truthy / Falsy と言います。",
        "minimalExample": {
          "code": "# Falsy（False として扱われる値）\nfalsy_values = [False, None, 0, 0.0, \"\", [], {}, set()]\n\nfor v in falsy_values:\n    if not v:\n        print(f\"{repr(v)} は Falsy\")\n\n# 実用例\nname = \"\"\nif name:             # 空文字は Falsy\n    print(f\"Hello, {name}\")\nelse:\n    print(\"名前が未入力です\")\n\nitems = []\nif not items:        # 空リストは Falsy\n    print(\"リストが空です\")",
          "output": "False ? Falsy\nNone ? Falsy\n0 ? Falsy\n0.0 ? Falsy\n'' ? Falsy\n[] ? Falsy\n{} ? Falsy\nset() ? Falsy\n????????\n???????",
          "lineNotes": [
            "L1: Falsy（False として扱われる値）",
            "L8: 実用例",
            "L10: 空文字は Falsy",
            "L16: 空リストは Falsy"
          ],
          "stateTrace": [
            "L1: Falsy（False として扱われる値）",
            "L8: 実用例",
            "L10: 空文字は Falsy",
            "L16: 空リストは Falsy"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: Truthyと Falsy",
          "execute": "EXECUTE: Truthyと Falsy",
          "debug": "DEBUG: Truthyと Falsy"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonでは True/False 以外の値も条件として使えます。これを Truthy / Falsy と言います。",
            "correct": "falsy_values = [False, None, 0, 0.0, \"\", [], {}, set()]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "conditionals-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "conditionals-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "conditionals-05-match-python-310",
        "title": "match 文（Python 3.10+）",
        "summary": "Python 3.10以降では match 文（パターンマッチング）が使えます。複雑な条件分岐をスッキリ書けます。",
        "details": "Python 3.10以降では match 文（パターンマッチング）が使えます。複雑な条件分岐をスッキリ書けます。",
        "minimalExample": {
          "code": "command = \"quit\"\n\nmatch command:\n    case \"start\":\n        print(\"ゲーム開始\")\n    case \"pause\":\n        print(\"一時停止\")\n    case \"quit\" | \"exit\":    # OR 条件\n        print(\"終了します\")\n    case _:                  # デフォルト（else相当）\n        print(\"不明なコマンド\")\n\n# 値のバインドも可能\npoint = (0, 5)\nmatch point:\n    case (0, y):\n        print(f\"Y軸上の点: y={y}\")\n    case (x, 0):\n        print(f\"X軸上の点: x={x}\")\n    case (x, y):\n        print(f\"座標: ({x}, {y})\")",
          "output": "?????\nY????: y=5",
          "lineNotes": [
            "L8: OR 条件",
            "L10: デフォルト（else相当）",
            "L13: 値のバインドも可能"
          ],
          "stateTrace": [
            "L8: OR 条件",
            "L10: デフォルト（else相当）",
            "L13: 値のバインドも可能"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: match 文（Python 3.10+）",
          "execute": "EXECUTE: match 文（Python 3.10+）",
          "debug": "DEBUG: match 文（Python 3.10+）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python 3.10以降では match 文（パターンマッチング）が使えます。複雑な条件分岐をスッキリ書けます。",
            "correct": "command = \"quit\""
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "conditionals-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "conditionals-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "conditions"
    ]
  },
  {
    "id": "loops",
    "language": "python",
    "title": "ループ",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "loops"
    ],
    "summary": "同じ処理を繰り返す",
    "pages": [
      {
        "id": "loops-01-for",
        "title": "for ループの基本",
        "summary": "リスト・文字列・range() などの要素を1つずつ取り出して処理します。",
        "details": "リスト・文字列・range() などの要素を1つずつ取り出して処理します。",
        "minimalExample": {
          "code": "# リストを繰り返す\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n\n# 文字列を1文字ずつ\nfor char in \"Python\":\n    print(char)\n\n# range() で数字を繰り返す\nfor i in range(5):       # 0,1,2,3,4\n    print(i)\n\nfor i in range(1, 6):    # 1,2,3,4,5\n    print(i)\n\nfor i in range(0, 10, 2):  # 0,2,4,6,8（2飛ばし）\n    print(i)",
          "output": "apple\nbanana\ncherry\nP\ny\nt\nh\no\nn\n0\n1\n2\n3\n4\n1\n2\n3\n4\n5\n0\n2\n4\n6\n8",
          "lineNotes": [
            "L1: リストを繰り返す",
            "L6: 文字列を1文字ずつ",
            "L10: range() で数字を繰り返す",
            "L11: 0,1,2,3,4",
            "L14: 1,2,3,4,5",
            "L17: 0,2,4,6,8（2飛ばし）"
          ],
          "stateTrace": [
            "L1: リストを繰り返す",
            "L6: 文字列を1文字ずつ",
            "L10: range() で数字を繰り返す",
            "L11: 0,1,2,3,4",
            "L14: 1,2,3,4,5",
            "L17: 0,2,4,6,8（2飛ばし）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: for ループの基本",
          "execute": "EXECUTE: for ループの基本",
          "debug": "DEBUG: for ループの基本"
        },
        "commonMistakes": [
          {
            "wrong": "リスト・文字列・range() などの要素を1つずつ取り出して処理します。",
            "reason": "リスト・文字列・range() などの要素を1つずつ取り出して処理します。",
            "correct": "fruits = [\"apple\", \"banana\", \"cherry\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "loops-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "loops-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "loops-02-enumerate-zip",
        "title": "enumerate と zip",
        "summary": "インデックスと値を同時に取得したり、複数のリストを並行して処理できます。",
        "details": "インデックスと値を同時に取得したり、複数のリストを並行して処理できます。",
        "minimalExample": {
          "code": "fruits = [\"apple\", \"banana\", \"cherry\"]\n\n# enumerate: インデックスと値を同時取得\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")\n# → 0: apple\n# → 1: banana\n# → 2: cherry\n\n# enumerate の開始番号を変えられる\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")   # 1から始まる\n\n# zip: 複数リストを並行処理\nnames = [\"Guest\", \"Member\", \"Carol\"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}点\")",
          "output": "0: apple\n1: banana\n2: cherry",
          "lineNotes": [
            "L3: enumerate: インデックスと値を同時取得",
            "L6: → 0: apple",
            "L7: → 1: banana",
            "L8: → 2: cherry",
            "L10: enumerate の開始番号を変えられる",
            "L12: 1から始まる",
            "L14: zip: 複数リストを並行処理"
          ],
          "stateTrace": [
            "L3: enumerate: インデックスと値を同時取得",
            "L6: → 0: apple",
            "L7: → 1: banana",
            "L8: → 2: cherry",
            "L10: enumerate の開始番号を変えられる",
            "L12: 1から始まる",
            "L14: zip: 複数リストを並行処理"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: enumerate と zip",
          "execute": "EXECUTE: enumerate と zip",
          "debug": "DEBUG: enumerate と zip"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "インデックスと値を同時に取得したり、複数のリストを並行して処理できます。",
            "correct": "fruits = [\"apple\", \"banana\", \"cherry\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "loops-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "loops-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "loops-03-while",
        "title": "while ループ",
        "summary": "条件が True の間ずっと繰り返します。条件が変化しないと無限ループになるので注意。",
        "details": "条件が True の間ずっと繰り返します。条件が変化しないと無限ループになるので注意。",
        "minimalExample": {
          "code": "# 基本形\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1      # これを忘れると無限ループ！\n\n# 無限ループ + break でよく使うパターン\nwhile True:\n    answer = input(\"続けますか？(y/n): \")\n    if answer == \"n\":\n        break\n    print(\"続けます\")\n\n# 条件付きで試行\nattempts = 0\nwhile attempts < 3:\n    password = input(\"パスワード: \")\n    if password == \"secret\":\n        print(\"ログイン成功\")\n        break\n    attempts += 1\nelse:              # ループが break なしで終わったとき\n    print(\"3回失敗しました\")",
          "output": "0\n1\n2\n3\n4\n?????????????????",
          "lineNotes": [
            "L1: 基本形",
            "L5: これを忘れると無限ループ！",
            "L7: 無限ループ + break でよく使うパターン",
            "L14: 条件付きで試行",
            "L22: ループが break なしで終わったとき"
          ],
          "stateTrace": [
            "L1: 基本形",
            "L5: これを忘れると無限ループ！",
            "L7: 無限ループ + break でよく使うパターン",
            "L14: 条件付きで試行",
            "L22: ループが break なしで終わったとき"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: while ループ",
          "execute": "EXECUTE: while ループ",
          "debug": "DEBUG: while ループ"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "条件が True の間ずっと繰り返します。条件が変化しないと無限ループになるので注意。",
            "correct": "count = 0"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "loops-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "loops-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "loops-04-break-continue-else",
        "title": "break / continue / else",
        "summary": "ループの制御に使います。for/while どちらでも使えます。",
        "details": "ループの制御に使います。for/while どちらでも使えます。",
        "minimalExample": {
          "code": "# break: ループを即終了\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)        # 0,1,2,3,4\n\n# continue: その回をスキップ\nfor i in range(6):\n    if i % 2 == 0:\n        continue    # 偶数はスキップ\n    print(i)        # 1,3,5\n\n# else: break なしでループが完了したとき実行\nfor i in range(5):\n    if i == 10:     # 条件は満たされない\n        break\nelse:\n    print(\"ループ完了！\")  # こちらが実行される",
          "output": "0\n1\n2\n3\n4\n1\n3\n5\n??????",
          "lineNotes": [
            "L1: break: ループを即終了",
            "L5: 0,1,2,3,4",
            "L7: continue: その回をスキップ",
            "L10: 偶数はスキップ",
            "L11: 1,3,5",
            "L13: else: break なしでループが完了したとき実行",
            "L15: 条件は満たされない",
            "L18: こちらが実行される"
          ],
          "stateTrace": [
            "L1: break: ループを即終了",
            "L5: 0,1,2,3,4",
            "L7: continue: その回をスキップ",
            "L10: 偶数はスキップ",
            "L11: 1,3,5",
            "L13: else: break なしでループが完了したとき実行",
            "L15: 条件は満たされない",
            "L18: こちらが実行される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: break / continue / else",
          "execute": "EXECUTE: break / continue / else",
          "debug": "DEBUG: break / continue / else"
        },
        "commonMistakes": [
          {
            "wrong": "ループの制御に使います。for/while どちらでも使えます。",
            "reason": "ループの制御に使います。for/while どちらでも使えます。",
            "correct": "for i in range(10):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "loops-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "loops-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "loops-05-page",
        "title": "リスト内包表記",
        "summary": "for ループを1行で書けるPythonらしい書き方です。新しいリストを作るときに便利です。",
        "details": "for ループを1行で書けるPythonらしい書き方です。新しいリストを作るときに便利です。",
        "minimalExample": {
          "code": "# 通常のfor文\nsquares = []\nfor x in range(5):\n    squares.append(x ** 2)\n\n# リスト内包表記（同じ意味）\nsquares = [x ** 2 for x in range(5)]\nprint(squares)   # → [0, 1, 4, 9, 16]\n\n# 条件付き\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)     # → [0, 2, 4, 6, 8]\n\n# 文字列の変換\nwords = [\"hello\", \"world\"]\nupper = [w.upper() for w in words]\nprint(upper)     # → ['HELLO', 'WORLD']\n\n# 辞書内包表記\nsquares_dict = {x: x**2 for x in range(5)}\n# → {0:0, 1:1, 2:4, 3:9, 4:16}",
          "output": "[0, 1, 4, 9, 16]\n[0, 2, 4, 6, 8]\n['HELLO', 'WORLD']\n{0:0, 1:1, 2:4, 3:9, 4:16}",
          "lineNotes": [
            "L1: 通常のfor文",
            "L6: リスト内包表記（同じ意味）",
            "L8: → [0, 1, 4, 9, 16]",
            "L10: 条件付き",
            "L12: → [0, 2, 4, 6, 8]",
            "L14: 文字列の変換",
            "L17: → ['HELLO', 'WORLD']",
            "L19: 辞書内包表記",
            "L21: → {0:0, 1:1, 2:4, 3:9, 4:16}"
          ],
          "stateTrace": [
            "L1: 通常のfor文",
            "L6: リスト内包表記（同じ意味）",
            "L8: → [0, 1, 4, 9, 16]",
            "L10: 条件付き",
            "L12: → [0, 2, 4, 6, 8]",
            "L14: 文字列の変換",
            "L17: → ['HELLO', 'WORLD']",
            "L19: 辞書内包表記",
            "L21: → {0:0, 1:1, 2:4, 3:9, 4:16}"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: リスト内包表記",
          "execute": "EXECUTE: リスト内包表記",
          "debug": "DEBUG: リスト内包表記"
        },
        "commonMistakes": [
          {
            "wrong": "for ループを1行で書けるPythonらしい書き方です。新しいリストを作るときに便利です。",
            "reason": "for ループを1行で書けるPythonらしい書き方です。新しいリストを作るときに便利です。",
            "correct": "squares = []"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "loops-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "loops-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "loops"
    ]
  },
  {
    "id": "lists-arrays",
    "language": "python",
    "title": "リスト",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "lists",
      "lists-arrays"
    ],
    "summary": "複数のデータをまとめる",
    "pages": [
      {
        "id": "lists-arrays-01-page",
        "title": "リストの基本",
        "summary": "[ ] で複数の値をまとめて管理できます。異なる型を混在させることもできます。",
        "details": "[ ] で複数の値をまとめて管理できます。異なる型を混在させることもできます。",
        "minimalExample": {
          "code": "# 作成\nfruits = [\"apple\", \"banana\", \"cherry\"]\nmixed  = [1, \"hello\", True, None, [1, 2]]  # 混在OK\n\n# アクセス（0始まり）\nprint(fruits[0])    # → apple   最初\nprint(fruits[-1])   # → cherry  最後\nprint(fruits[-2])   # → banana  後ろから2番目\n\n# スライス\nprint(fruits[0:2])  # → ['apple', 'banana']\nprint(fruits[1:])   # → ['banana', 'cherry']\nprint(fruits[::-1]) # → ['cherry', 'banana', 'apple']（逆順）\n\n# 長さ\nprint(len(fruits))  # → 3",
          "output": "apple   最初\ncherry  最後\nbanana  後ろから2番目\n['apple', 'banana']\n['banana', 'cherry']\n['cherry', 'banana', 'apple']（逆順）\n3",
          "lineNotes": [
            "L1: 作成",
            "L3: 混在OK",
            "L5: アクセス（0始まり）",
            "L6: → apple   最初",
            "L7: → cherry  最後",
            "L8: → banana  後ろから2番目",
            "L10: スライス",
            "L11: → ['apple', 'banana']",
            "L12: → ['banana', 'cherry']",
            "L13: → ['cherry', 'banana', 'apple']（逆順）",
            "L15: 長さ",
            "L16: → 3"
          ],
          "stateTrace": [
            "L1: 作成",
            "L3: 混在OK",
            "L5: アクセス（0始まり）",
            "L6: → apple   最初",
            "L7: → cherry  最後",
            "L8: → banana  後ろから2番目",
            "L10: スライス",
            "L11: → ['apple', 'banana']",
            "L12: → ['banana', 'cherry']",
            "L13: → ['cherry', 'banana', 'apple']（逆順）",
            "L15: 長さ",
            "L16: → 3"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: リストの基本",
          "execute": "EXECUTE: リストの基本",
          "debug": "DEBUG: リストの基本"
        },
        "commonMistakes": [
          {
            "wrong": "[ ] で複数の値をまとめて管理できます。異なる型を混在させることもできます。",
            "reason": "[ ] で複数の値をまとめて管理できます。異なる型を混在させることもできます。",
            "correct": "fruits = [\"apple\", \"banana\", \"cherry\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "lists-arrays-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "lists-arrays-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "lists-arrays-02-page",
        "title": "リストの変更",
        "summary": "リストは変更可能（ミュータブル）です。要素の追加・削除・変更ができます。",
        "details": "リストは変更可能（ミュータブル）です。要素の追加・削除・変更ができます。",
        "minimalExample": {
          "code": "nums = [1, 2, 3]\n\n# 追加\nnums.append(4)          # 末尾に追加 → [1,2,3,4]\nnums.insert(0, 0)       # 指定位置に挿入 → [0,1,2,3,4]\nnums.extend([5, 6])     # 別リストを結合 → [0,1,2,3,4,5,6]\n\n# 削除\nnums.remove(0)          # 値を指定して削除（最初の1つ）\npopped = nums.pop()     # 末尾を取り出して返す\npopped = nums.pop(0)    # 指定インデックスを取り出す\ndel nums[0]             # インデックスで削除\n\n# 変更\nnums[0] = 99            # インデックスで直接変更",
          "output": "",
          "lineNotes": [
            "L3: 追加",
            "L4: 末尾に追加 → [1,2,3,4]",
            "L5: 指定位置に挿入 → [0,1,2,3,4]",
            "L6: 別リストを結合 → [0,1,2,3,4,5,6]",
            "L8: 削除",
            "L9: 値を指定して削除（最初の1つ）",
            "L10: 末尾を取り出して返す",
            "L11: 指定インデックスを取り出す",
            "L12: インデックスで削除",
            "L14: 変更",
            "L15: インデックスで直接変更"
          ],
          "stateTrace": [
            "L3: 追加",
            "L4: 末尾に追加 → [1,2,3,4]",
            "L5: 指定位置に挿入 → [0,1,2,3,4]",
            "L6: 別リストを結合 → [0,1,2,3,4,5,6]",
            "L8: 削除",
            "L9: 値を指定して削除（最初の1つ）",
            "L10: 末尾を取り出して返す",
            "L11: 指定インデックスを取り出す",
            "L12: インデックスで削除",
            "L14: 変更",
            "L15: インデックスで直接変更"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: リストの変更",
          "execute": "EXECUTE: リストの変更",
          "debug": "DEBUG: リストの変更"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "リストは変更可能（ミュータブル）です。要素の追加・削除・変更ができます。",
            "correct": "nums = [1, 2, 3]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "lists-arrays-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "lists-arrays-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "lists-arrays-03-page",
        "title": "リストの便利な操作",
        "summary": "ソート・検索・コピーなどよく使う操作をまとめます。",
        "details": "ソート・検索・コピーなどよく使う操作をまとめます。",
        "minimalExample": {
          "code": "nums = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# ソート\nnums.sort()             # 元のリストを変更\nsorted_nums = sorted(nums)  # 新しいリストを返す（元は変わらない）\nnums.sort(reverse=True) # 降順\n\n# 検索\nprint(3 in nums)        # True/False で含まれるか確認\nprint(nums.index(4))    # 値の位置（なければエラー）\nprint(nums.count(1))    # 値の出現回数\n\n# コピー（重要！）\na = [1, 2, 3]\nb = a          # ❌ 参照コピー（同じオブジェクト）\nb = a.copy()   # ✅ シャローコピー\nb = a[:]       # ✅ スライスでもコピー\n\nimport copy\nb = copy.deepcopy(a)  # ネストしたリストのコピー",
          "output": "True\n4\n2",
          "lineNotes": [
            "L3: ソート",
            "L4: 元のリストを変更",
            "L5: 新しいリストを返す（元は変わらない）",
            "L6: 降順",
            "L8: 検索",
            "L9: True/False で含まれるか確認",
            "L10: 値の位置（なければエラー）",
            "L11: 値の出現回数",
            "L13: コピー（重要！）",
            "L15: ❌ 参照コピー（同じオブジェクト）",
            "L16: ✅ シャローコピー",
            "L17: ✅ スライスでもコピー"
          ],
          "stateTrace": [
            "L3: ソート",
            "L4: 元のリストを変更",
            "L5: 新しいリストを返す（元は変わらない）",
            "L6: 降順",
            "L8: 検索",
            "L9: True/False で含まれるか確認",
            "L10: 値の位置（なければエラー）",
            "L11: 値の出現回数",
            "L13: コピー（重要！）",
            "L15: ❌ 参照コピー（同じオブジェクト）",
            "L16: ✅ シャローコピー",
            "L17: ✅ スライスでもコピー"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: リストの便利な操作",
          "execute": "EXECUTE: リストの便利な操作",
          "debug": "DEBUG: リストの便利な操作"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "ソート・検索・コピーなどよく使う操作をまとめます。",
            "correct": "nums = [3, 1, 4, 1, 5, 9, 2, 6]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "lists-arrays-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "lists-arrays-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "lists-arrays-04-page",
        "title": "タプルとの違い",
        "summary": "タプルはリストに似ていますが変更できません（イミュータブル）。変更不要なデータに使います。",
        "details": "タプルはリストに似ていますが変更できません（イミュータブル）。変更不要なデータに使います。",
        "minimalExample": {
          "code": "# タプル: () で作成\npoint = (3, 5)\nrgb   = (255, 128, 0)\n\nprint(point[0])   # → 3  アクセスはリストと同じ\n\n# 変更しようとするとエラー\n# point[0] = 10   ❌ TypeError\n\n# タプルのアンパック\nx, y = point\nprint(x, y)   # → 3 5\n\nr, g, b = rgb\n\n# 1要素のタプル（カンマが必要）\nsingle = (42,)   # ← カンマ必須\nnot_tuple = (42) # ← これはただの整数\n\n# リストとタプルの変換\nlst = list(point)   # → [3, 5]\ntpl = tuple([1,2])  # → (1, 2)",
          "output": "3  アクセスはリストと同じ\n3 5\n[3, 5]\n(1, 2)",
          "lineNotes": [
            "L1: タプル: () で作成",
            "L5: → 3  アクセスはリストと同じ",
            "L7: 変更しようとするとエラー",
            "L8: point[0] = 10   ❌ TypeError",
            "L10: タプルのアンパック",
            "L12: → 3 5",
            "L16: 1要素のタプル（カンマが必要）",
            "L17: ← カンマ必須",
            "L18: ← これはただの整数",
            "L20: リストとタプルの変換",
            "L21: → [3, 5]",
            "L22: → (1, 2)"
          ],
          "stateTrace": [
            "L1: タプル: () で作成",
            "L5: → 3  アクセスはリストと同じ",
            "L7: 変更しようとするとエラー",
            "L8: point[0] = 10   ❌ TypeError",
            "L10: タプルのアンパック",
            "L12: → 3 5",
            "L16: 1要素のタプル（カンマが必要）",
            "L17: ← カンマ必須",
            "L18: ← これはただの整数",
            "L20: リストとタプルの変換",
            "L21: → [3, 5]",
            "L22: → (1, 2)"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: タプルとの違い",
          "execute": "EXECUTE: タプルとの違い",
          "debug": "DEBUG: タプルとの違い"
        },
        "commonMistakes": [
          {
            "wrong": "point[0] = 10",
            "reason": "TypeError",
            "correct": "point = (3, 5)"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "lists-arrays-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "lists-arrays-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "lists"
    ]
  },
  {
    "id": "dicts-objects",
    "language": "python",
    "title": "辞書",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "dicts",
      "dicts-objects"
    ],
    "summary": "キーと値のペアでデータを管理",
    "pages": [
      {
        "id": "dicts-objects-01-page",
        "title": "辞書の基本",
        "summary": "{ } でキーと値のペアを管理します。キーは重複不可・変更不可の型（文字列・数値・タプルなど）が使えます。",
        "details": "{ } でキーと値のペアを管理します。キーは重複不可・変更不可の型（文字列・数値・タプルなど）が使えます。",
        "minimalExample": {
          "code": "# 作成\nperson = {\n    \"name\": \"Guest\",\n    \"age\": 25,\n    \"city\": \"Tokyo\"\n}\n\n# アクセス\nprint(person[\"name\"])       # → Guest\nprint(person.get(\"age\"))    # → 25\nprint(person.get(\"email\"))  # → None（KeyErrorにならない）\nprint(person.get(\"email\", \"未設定\"))  # デフォルト値\n\n# 追加・更新\nperson[\"email\"] = \"Guest@example.com\"\nperson[\"age\"] = 26\n\n# 削除\ndel person[\"city\"]\nremoved = person.pop(\"email\")  # 取り出して返す",
          "output": "Guest\n25\nNone（KeyErrorにならない）",
          "lineNotes": [
            "L1: 作成",
            "L8: アクセス",
            "L9: → Guest",
            "L10: → 25",
            "L11: → None（KeyErrorにならない）",
            "L12: デフォルト値",
            "L14: 追加・更新",
            "L18: 削除",
            "L20: 取り出して返す"
          ],
          "stateTrace": [
            "L1: 作成",
            "L8: アクセス",
            "L9: → Guest",
            "L10: → 25",
            "L11: → None（KeyErrorにならない）",
            "L12: デフォルト値",
            "L14: 追加・更新",
            "L18: 削除",
            "L20: 取り出して返す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 辞書の基本",
          "execute": "EXECUTE: 辞書の基本",
          "debug": "DEBUG: 辞書の基本"
        },
        "commonMistakes": [
          {
            "wrong": "print(person.get(\"email\"))",
            "reason": "# → None（KeyErrorにならない）",
            "correct": "person = {"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "dicts-objects-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "dicts-objects-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "dicts-objects-02-page",
        "title": "辞書のループ処理",
        "summary": "keys()・values()・items() でキーや値を取り出してループできます。",
        "details": "keys()・values()・items() でキーや値を取り出してループできます。",
        "minimalExample": {
          "code": "person = {\"name\": \"Guest\", \"age\": 25, \"city\": \"Tokyo\"}\n\n# キーだけ\nfor key in person:\n    print(key)\n\n# 値だけ\nfor val in person.values():\n    print(val)\n\n# キーと値を同時に\nfor key, val in person.items():\n    print(f\"{key}: {val}\")\n\n# 辞書内包表記\nsquares = {x: x**2 for x in range(5)}\n# → {0:0, 1:1, 2:4, 3:9, 4:16}\n\n# 値が偶数のものだけ\nevens = {k: v for k, v in squares.items() if v % 2 == 0}",
          "output": "{0:0, 1:1, 2:4, 3:9, 4:16}",
          "lineNotes": [
            "L3: キーだけ",
            "L7: 値だけ",
            "L11: キーと値を同時に",
            "L15: 辞書内包表記",
            "L17: → {0:0, 1:1, 2:4, 3:9, 4:16}",
            "L19: 値が偶数のものだけ"
          ],
          "stateTrace": [
            "L3: キーだけ",
            "L7: 値だけ",
            "L11: キーと値を同時に",
            "L15: 辞書内包表記",
            "L17: → {0:0, 1:1, 2:4, 3:9, 4:16}",
            "L19: 値が偶数のものだけ"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 辞書のループ処理",
          "execute": "EXECUTE: 辞書のループ処理",
          "debug": "DEBUG: 辞書のループ処理"
        },
        "commonMistakes": [
          {
            "wrong": "keys()・values()・items() でキーや値を取り出してループできます。",
            "reason": "keys()・values()・items() でキーや値を取り出してループできます。",
            "correct": "person = {\"name\": \"Guest\", \"age\": 25, \"city\": \"Tokyo\"}"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "dicts-objects-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "dicts-objects-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "dicts-objects-03-page",
        "title": "ネストした辞書",
        "summary": "辞書の中に辞書やリストを入れることで複雑なデータを表現できます。",
        "details": "辞書の中に辞書やリストを入れることで複雑なデータを表現できます。",
        "minimalExample": {
          "code": "users = {\n    \"Guest\": {\n        \"age\": 25,\n        \"scores\": [85, 92, 78],\n        \"active\": True\n    },\n    \"Member\": {\n        \"age\": 30,\n        \"scores\": [70, 88, 95],\n        \"active\": False\n    }\n}\n\n# アクセス\nprint(users[\"Guest\"][\"age\"])        # → 25\nprint(users[\"Member\"][\"scores\"][0])    # → 70\n\n# ネストしたデータのループ\nfor name, info in users.items():\n    avg = sum(info[\"scores\"]) / len(info[\"scores\"])\n    print(f\"{name}: 平均 {avg:.1f}点\")",
          "output": "25\n70",
          "lineNotes": [
            "L14: アクセス",
            "L15: → 25",
            "L16: → 70",
            "L18: ネストしたデータのループ"
          ],
          "stateTrace": [
            "L14: アクセス",
            "L15: → 25",
            "L16: → 70",
            "L18: ネストしたデータのループ"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: ネストした辞書",
          "execute": "EXECUTE: ネストした辞書",
          "debug": "DEBUG: ネストした辞書"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "辞書の中に辞書やリストを入れることで複雑なデータを表現できます。",
            "correct": "users = {"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "dicts-objects-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "dicts-objects-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "dicts-objects-04-page",
        "title": "便利なメソッドとパターン",
        "summary": "setdefault・update・辞書のマージなど実用的なテクニックです。",
        "details": "setdefault・update・辞書のマージなど実用的なテクニックです。",
        "minimalExample": {
          "code": "# setdefault: キーがなければデフォルト値をセット\ncounts = {}\nwords = [\"apple\", \"banana\", \"apple\", \"cherry\"]\nfor word in words:\n    counts.setdefault(word, 0)\n    counts[word] += 1\nprint(counts)   # → {'apple':2, 'banana':1, 'cherry':1}\n\n# もっとシンプルに: collections.Counter\nfrom collections import Counter\ncounts = Counter(words)\n\n# update: 辞書を結合（上書き）\nd1 = {\"a\": 1, \"b\": 2}\nd2 = {\"b\": 3, \"c\": 4}\nd1.update(d2)\nprint(d1)   # → {'a':1, 'b':3, 'c':4}\n\n# Python 3.9+ のマージ演算子\nmerged = d1 | d2   # 新しい辞書を返す",
          "output": "{'apple':2, 'banana':1, 'cherry':1}\n{'a':1, 'b':3, 'c':4}",
          "lineNotes": [
            "L1: setdefault: キーがなければデフォルト値をセット",
            "L7: → {'apple':2, 'banana':1, 'cherry':1}",
            "L9: もっとシンプルに: collections.Counter",
            "L13: update: 辞書を結合（上書き）",
            "L17: → {'a':1, 'b':3, 'c':4}",
            "L19: Python 3.9+ のマージ演算子",
            "L20: 新しい辞書を返す"
          ],
          "stateTrace": [
            "L1: setdefault: キーがなければデフォルト値をセット",
            "L7: → {'apple':2, 'banana':1, 'cherry':1}",
            "L9: もっとシンプルに: collections.Counter",
            "L13: update: 辞書を結合（上書き）",
            "L17: → {'a':1, 'b':3, 'c':4}",
            "L19: Python 3.9+ のマージ演算子",
            "L20: 新しい辞書を返す"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 便利なメソッドとパターン",
          "execute": "EXECUTE: 便利なメソッドとパターン",
          "debug": "DEBUG: 便利なメソッドとパターン"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "setdefault・update・辞書のマージなど実用的なテクニックです。",
            "correct": "counts = {}"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "dicts-objects-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "dicts-objects-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "dicts"
    ]
  },
  {
    "id": "classes-objects",
    "language": "python",
    "title": "クラスとオブジェクト",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "classes",
      "classes-objects"
    ],
    "summary": "データと処理をまとめる設計図",
    "pages": [
      {
        "id": "classes-objects-01-page",
        "title": "クラスの基本",
        "summary": "クラスはデータ（属性）と処理（メソッド）をまとめた設計図です。インスタンスはその設計図から作られた実体です。",
        "details": "クラスはデータ（属性）と処理（メソッド）をまとめた設計図です。インスタンスはその設計図から作られた実体です。",
        "minimalExample": {
          "code": "class Dog:\n    # __init__: インスタンス作成時に自動で呼ばれる\n    def __init__(self, name, age):\n        self.name = name   # インスタンス属性\n        self.age = age\n\n    def bark(self):\n        print(f\"{self.name}: ワン！\")\n\n    def info(self):\n        print(f\"{self.name}（{self.age}歳）\")\n\n# インスタンスを作成\ndog1 = Dog(\"Pochi\", 3)\ndog2 = Dog(\"Hana\", 5)\n\ndog1.bark()    # → Pochi: ワン！\ndog2.info()    # → Hana（5歳）\nprint(dog1.name)  # → Pochi",
          "output": "Pochi: ワン！\nHana（5歳）\nPochi",
          "lineNotes": [
            "L2: __init__: インスタンス作成時に自動で呼ばれる",
            "L4: インスタンス属性",
            "L13: インスタンスを作成",
            "L17: → Pochi: ワン！",
            "L18: → Hana（5歳）",
            "L19: → Pochi"
          ],
          "stateTrace": [
            "L2: __init__: インスタンス作成時に自動で呼ばれる",
            "L4: インスタンス属性",
            "L13: インスタンスを作成",
            "L17: → Pochi: ワン！",
            "L18: → Hana（5歳）",
            "L19: → Pochi"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: クラスの基本",
          "execute": "EXECUTE: クラスの基本",
          "debug": "DEBUG: クラスの基本"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "クラスはデータ（属性）と処理（メソッド）をまとめた設計図です。インスタンスはその設計図から作られた実体です。",
            "correct": "class Dog:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "classes-objects-02-page",
        "title": "クラス変数とインスタンス変数",
        "summary": "クラス変数はすべてのインスタンスで共有、インスタンス変数はインスタンスごとに異なります。",
        "details": "クラス変数はすべてのインスタンスで共有、インスタンス変数はインスタンスごとに異なります。",
        "minimalExample": {
          "code": "class Counter:\n    count = 0   # クラス変数（全インスタンス共有）\n\n    def __init__(self, name):\n        self.name = name     # インスタンス変数\n        Counter.count += 1   # クラス変数を更新\n\n    @classmethod\n    def get_count(cls):      # クラスメソッド\n        return cls.count\n\nc1 = Counter(\"A\")\nc2 = Counter(\"B\")\nc3 = Counter(\"C\")\n\nprint(Counter.get_count())  # → 3（全インスタンス数）\nprint(c1.name)              # → A（固有）",
          "output": "3（全インスタンス数）\nA（固有）",
          "lineNotes": [
            "L2: クラス変数（全インスタンス共有）",
            "L5: インスタンス変数",
            "L6: クラス変数を更新",
            "L9: クラスメソッド",
            "L16: → 3（全インスタンス数）",
            "L17: → A（固有）"
          ],
          "stateTrace": [
            "L2: クラス変数（全インスタンス共有）",
            "L5: インスタンス変数",
            "L6: クラス変数を更新",
            "L9: クラスメソッド",
            "L16: → 3（全インスタンス数）",
            "L17: → A（固有）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: クラス変数とインスタンス変数",
          "execute": "EXECUTE: クラス変数とインスタンス変数",
          "debug": "DEBUG: クラス変数とインスタンス変数"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "クラス変数はすべてのインスタンスで共有、インスタンス変数はインスタンスごとに異なります。",
            "correct": "class Counter:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "classes-objects-03-page",
        "title": "継承",
        "summary": "既存のクラスの機能を引き継いで新しいクラスを作ります。コードの再利用に役立ちます。",
        "details": "既存のクラスの機能を引き継いで新しいクラスを作ります。コードの再利用に役立ちます。",
        "minimalExample": {
          "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print(f\"{self.name}が鳴く\")\n\nclass Dog(Animal):   # Animal を継承\n    def speak(self):    # メソッドを上書き（オーバーライド）\n        print(f\"{self.name}: ワン！\")\n\nclass Cat(Animal):\n    def speak(self):\n        print(f\"{self.name}: ニャー！\")\n\nanimals = [Dog(\"Pochi\"), Cat(\"Tama\"), Dog(\"Koro\")]\nfor animal in animals:\n    animal.speak()   # 各クラスのspeakが呼ばれる\n\n# super(): 親クラスのメソッドを呼ぶ\nclass Puppy(Dog):\n    def __init__(self, name, owner):\n        super().__init__(name)   # 親の__init__を呼ぶ\n        self.owner = owner",
          "output": "Pochi: ???\nTama: ????\nKoro: ???",
          "lineNotes": [
            "L8: Animal を継承",
            "L9: メソッドを上書き（オーバーライド）",
            "L18: 各クラスのspeakが呼ばれる",
            "L20: super(): 親クラスのメソッドを呼ぶ",
            "L23: 親の__init__を呼ぶ"
          ],
          "stateTrace": [
            "L8: Animal を継承",
            "L9: メソッドを上書き（オーバーライド）",
            "L18: 各クラスのspeakが呼ばれる",
            "L20: super(): 親クラスのメソッドを呼ぶ",
            "L23: 親の__init__を呼ぶ"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 継承",
          "execute": "EXECUTE: 継承",
          "debug": "DEBUG: 継承"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "既存のクラスの機能を引き継いで新しいクラスを作ります。コードの再利用に役立ちます。",
            "correct": "class Animal:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "classes-objects-04-page",
        "title": "特殊メソッド（マジックメソッド）",
        "summary": "__xxx__ の形のメソッドで、Pythonの組み込み操作をカスタマイズできます。",
        "details": "__xxx__ の形のメソッドで、Pythonの組み込み操作をカスタマイズできます。",
        "minimalExample": {
          "code": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):       # str() や print() で使われる\n        return f\"Vector({self.x}, {self.y})\"\n\n    def __repr__(self):      # デバッグ用の表現\n        return f\"Vector(x={self.x}, y={self.y})\"\n\n    def __add__(self, other):  # + 演算子をカスタマイズ\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __len__(self):       # len() で使われる\n        return 2\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1)           # → Vector(1, 2)\nprint(v1 + v2)      # → Vector(4, 6)\nprint(len(v1))      # → 2",
          "output": "Vector(1, 2)\nVector(4, 6)\n2",
          "lineNotes": [
            "L6: str() や print() で使われる",
            "L9: デバッグ用の表現",
            "L12: + 演算子をカスタマイズ",
            "L15: len() で使われる",
            "L20: → Vector(1, 2)",
            "L21: → Vector(4, 6)",
            "L22: → 2"
          ],
          "stateTrace": [
            "L6: str() や print() で使われる",
            "L9: デバッグ用の表現",
            "L12: + 演算子をカスタマイズ",
            "L15: len() で使われる",
            "L20: → Vector(1, 2)",
            "L21: → Vector(4, 6)",
            "L22: → 2"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 特殊メソッド（マジックメソッド）",
          "execute": "EXECUTE: 特殊メソッド（マジックメソッド）",
          "debug": "DEBUG: 特殊メソッド（マジックメソッド）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "__xxx__ の形のメソッドで、Pythonの組み込み操作をカスタマイズできます。",
            "correct": "class Vector:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "classes-objects-05-dataclass",
        "title": "dataclass で定型クラスを簡潔に書く",
        "summary": "Python 3.7以降の @dataclass を使うと、__init__ や __repr__ などを自動生成できます。データを保持するだけのクラスに最適です。",
        "details": "Python 3.7以降の @dataclass を使うと、__init__ や __repr__ などを自動生成できます。データを保持するだけのクラスに最適です。",
        "minimalExample": {
          "code": "from dataclasses import dataclass, field\n\n@dataclass\nclass Point:\n    x: float\n    y: float\n\np = Point(3.0, 4.0)\nprint(p)        # → Point(x=3.0, y=4.0)（__repr__ 自動生成）\nprint(p.x)      # → 3.0\n\n# デフォルト値と field\n@dataclass\nclass Student:\n    name: str\n    scores: list = field(default_factory=list)  # ← ミュータブルは field()\n    grade: str = \"A\"\n\ns1 = Student(\"Guest\")\ns2 = Student(\"Member\", [90, 85], \"B\")\nprint(s1)   # → Student(name='Guest', scores=[], grade='A')\n\n# frozen=True で読み取り専用にする\n@dataclass(frozen=True)\nclass Color:\n    r: int; g: int; b: int\n\nc = Color(255, 128, 0)\n# c.r = 0   ❌ FrozenInstanceError",
          "output": "Point(x=3.0, y=4.0)（__repr__ 自動生成）\n3.0\nStudent(name='Guest', scores=[], grade='A')",
          "lineNotes": [
            "L9: → Point(x=3.0, y=4.0)（__repr__ 自動生成）",
            "L10: → 3.0",
            "L12: デフォルト値と field",
            "L16: ← ミュータブルは field()",
            "L21: → Student(name='Guest', scores=[], grade='A')",
            "L23: frozen=True で読み取り専用にする",
            "L29: c.r = 0   ❌ FrozenInstanceError"
          ],
          "stateTrace": [
            "L9: → Point(x=3.0, y=4.0)（__repr__ 自動生成）",
            "L10: → 3.0",
            "L12: デフォルト値と field",
            "L16: ← ミュータブルは field()",
            "L21: → Student(name='Guest', scores=[], grade='A')",
            "L23: frozen=True で読み取り専用にする",
            "L29: c.r = 0   ❌ FrozenInstanceError"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: dataclass で定型クラスを簡潔に書く",
          "execute": "EXECUTE: dataclass で定型クラスを簡潔に書く",
          "debug": "DEBUG: dataclass で定型クラスを簡潔に書く"
        },
        "commonMistakes": [
          {
            "wrong": "c.r = 0",
            "reason": "FrozenInstanceError",
            "correct": "from dataclasses import dataclass, field"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "classes-objects-06-getter-setter",
        "title": "プロパティ（getter / setter）",
        "summary": "property を使うと、属性アクセスの形を保ちながら値の検証・計算を行えます。",
        "details": "property を使うと、属性アクセスの形を保ちながら値の検証・計算を行えます。",
        "minimalExample": {
          "code": "class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._celsius\n\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\"絶対零度より低い温度は設定できません\")\n        self._celsius = value\n\n    @property\n    def fahrenheit(self):         # 読み取り専用の計算プロパティ\n        return self._celsius * 9/5 + 32\n\nt = Temperature(100)\nprint(t.fahrenheit)   # → 212.0\nt.celsius = 25        # setter 経由で検証される\n# t.celsius = -300    ❌ ValueError",
          "output": "212.0",
          "lineNotes": [
            "L16: 読み取り専用の計算プロパティ",
            "L20: → 212.0",
            "L21: setter 経由で検証される",
            "L22: t.celsius = -300    ❌ ValueError"
          ],
          "stateTrace": [
            "L16: 読み取り専用の計算プロパティ",
            "L20: → 212.0",
            "L21: setter 経由で検証される",
            "L22: t.celsius = -300    ❌ ValueError"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: プロパティ（getter / setter）",
          "execute": "EXECUTE: プロパティ（getter / setter）",
          "debug": "DEBUG: プロパティ（getter / setter）"
        },
        "commonMistakes": [
          {
            "wrong": "raise ValueError(\"絶対零度より低い温度は設定できません\")",
            "reason": "raise ValueError(\"絶対零度より低い温度は設定できません\")",
            "correct": "class Temperature:"
          },
          {
            "wrong": "t.celsius = -300",
            "reason": "ValueError",
            "correct": "class Temperature:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "classes-objects-06-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "classes-objects-06-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "classes"
    ]
  },
  {
    "id": "errors",
    "language": "python",
    "title": "エラー処理",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "errors"
    ],
    "summary": "エラーに備えて安全なコードを書く",
    "pages": [
      {
        "id": "errors-01-page",
        "title": "エラーの種類",
        "summary": "Pythonのエラーには「構文エラー」と「実行時エラー（例外）」の2種類があります。",
        "details": "Pythonのエラーには「構文エラー」と「実行時エラー（例外）」の2種類があります。",
        "minimalExample": {
          "code": "# SyntaxError: 構文エラー（実行前に検出）\n# print(\"hello\"   ← 括弧が閉じていない\n\n# 主な実行時エラー（例外）\n# NameError: 未定義の変数を使った\n# print(undefined_var)\n\n# TypeError: 型が合わない\n# result = \"text\" + 5\n\n# ValueError: 値が不正\n# num = int(\"abc\")\n\n# IndexError: リストの範囲外\n# lst = [1,2,3]; lst[10]\n\n# KeyError: 辞書にないキー\n# d = {}; d[\"missing\"]\n\n# ZeroDivisionError: ゼロ除算\n# 10 / 0\n\n# AttributeError: 属性がない\n# \"hello\".nonexistent()",
          "output": "（このコードはコメントのみのため実行結果は出ません。各行はエラーの種類を示す例です）",
          "lineNotes": [
            "L1: SyntaxError: 構文エラー（実行前に検出）",
            "L2: print(\"hello\"   ← 括弧が閉じていない",
            "L4: 主な実行時エラー（例外）",
            "L5: NameError: 未定義の変数を使った",
            "L6: print(undefined_var)",
            "L8: TypeError: 型が合わない",
            "L9: result = \"text\" + 5",
            "L11: ValueError: 値が不正",
            "L12: num = int(\"abc\")",
            "L14: IndexError: リストの範囲外",
            "L15: lst = [1,2,3]; lst[10]",
            "L17: KeyError: 辞書にないキー"
          ],
          "stateTrace": [
            "L1: SyntaxError: 構文エラー（実行前に検出）",
            "L2: print(\"hello\"   ← 括弧が閉じていない",
            "L4: 主な実行時エラー（例外）",
            "L5: NameError: 未定義の変数を使った",
            "L6: print(undefined_var)",
            "L8: TypeError: 型が合わない",
            "L9: result = \"text\" + 5",
            "L11: ValueError: 値が不正",
            "L12: num = int(\"abc\")",
            "L14: IndexError: リストの範囲外",
            "L15: lst = [1,2,3]; lst[10]",
            "L17: KeyError: 辞書にないキー"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: エラーの種類",
          "execute": "EXECUTE: エラーの種類",
          "debug": "DEBUG: エラーの種類"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "SyntaxError: 構文エラー（実行前に検出）",
            "correct": "コードを上から追い、値の変化と出力を確認する"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "NameError: 未定義の変数を使った",
            "correct": "コードを上から追い、値の変化と出力を確認する"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "TypeError: 型が合わない",
            "correct": "コードを上から追い、値の変化と出力を確認する"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "ValueError: 値が不正",
            "correct": "コードを上から追い、値の変化と出力を確認する"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "IndexError: リストの範囲外",
            "correct": "コードを上から追い、値の変化と出力を確認する"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "errors-02-try-except",
        "title": "try-except の基本",
        "summary": "エラーが起きる可能性のある処理を try で囲み、エラー時の処理を except に書きます。",
        "details": "エラーが起きる可能性のある処理を try で囲み、エラー時の処理を except に書きます。",
        "minimalExample": {
          "code": "# 基本形\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"0で割れません\")\n\n# エラーオブジェクトを使う\ntry:\n    num = int(\"abc\")\nexcept ValueError as e:\n    print(f\"エラー: {e}\")\n\n# 複数のエラーをキャッチ\ntry:\n    lst = [1, 2, 3]\n    print(lst[10])\nexcept (IndexError, TypeError) as e:\n    print(f\"エラー: {type(e).__name__}: {e}\")\n\n# すべてのエラーをキャッチ（非推奨、デバッグ時のみ）\ntry:\n    something_risky()\nexcept Exception as e:\n    print(f\"予期しないエラー: {e}\")",
          "output": "0??????\n???: invalid literal for int() with base 10: 'abc'\n???: IndexError: list index out of range\n????????: name 'something_risky' is not defined",
          "lineNotes": [
            "L1: 基本形",
            "L7: エラーオブジェクトを使う",
            "L13: 複数のエラーをキャッチ",
            "L20: すべてのエラーをキャッチ（非推奨、デバッグ時のみ）"
          ],
          "stateTrace": [
            "L1: 基本形",
            "L7: エラーオブジェクトを使う",
            "L13: 複数のエラーをキャッチ",
            "L20: すべてのエラーをキャッチ（非推奨、デバッグ時のみ）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: try-except の基本",
          "execute": "EXECUTE: try-except の基本",
          "debug": "DEBUG: try-except の基本"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "except ZeroDivisionError:",
            "correct": "try:"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "except ValueError as e:",
            "correct": "try:"
          },
          {
            "wrong": "except (IndexError, TypeError) as e:",
            "reason": "except (IndexError, TypeError) as e:",
            "correct": "try:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "errors-03-finally-else",
        "title": "finally と else",
        "summary": "finally はエラーの有無に関わらず実行、else はエラーがなかったときに実行されます。",
        "details": "finally はエラーの有無に関わらず実行、else はエラーがなかったときに実行されます。",
        "minimalExample": {
          "code": "def read_file(filename):\n    f = None\n    try:\n        f = open(filename)\n        data = f.read()\n    except FileNotFoundError:\n        print(f\"{filename} が見つかりません\")\n    except PermissionError:\n        print(\"読み取り権限がありません\")\n    else:\n        # エラーがなかったときだけ実行\n        print(f\"読み込み成功: {len(data)}文字\")\n        return data\n    finally:\n        # 必ず実行（ファイルを確実に閉じる）\n        if f:\n            f.close()\n            print(\"ファイルを閉じました\")",
          "output": "読み込み成功: N文字\nファイルを閉じました",
          "lineNotes": [
            "L11: エラーがなかったときだけ実行",
            "L15: 必ず実行（ファイルを確実に閉じる）"
          ],
          "stateTrace": [
            "L11: エラーがなかったときだけ実行",
            "L15: 必ず実行（ファイルを確実に閉じる）"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: finally と else",
          "execute": "EXECUTE: finally と else",
          "debug": "DEBUG: finally と else"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "except FileNotFoundError:",
            "correct": "def read_file(filename):"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "except PermissionError:",
            "correct": "def read_file(filename):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "errors-04-raise",
        "title": "raise で例外を発生させる",
        "summary": "自分でエラーを発生させることで、不正な入力を検出できます。",
        "details": "自分でエラーを発生させることで、不正な入力を検出できます。",
        "minimalExample": {
          "code": "# 基本的な raise\ndef set_age(age):\n    if not isinstance(age, int):\n        raise TypeError(\"年齢は整数でなければなりません\")\n    if age < 0 or age > 150:\n        raise ValueError(f\"無効な年齢: {age}\")\n    return age\n\ntry:\n    set_age(-1)\nexcept ValueError as e:\n    print(e)   # → 無効な年齢: -1\n\n# カスタム例外クラスを作る\nclass InsufficientFundsError(Exception):\n    def __init__(self, amount, balance):\n        super().__init__(f\"残高不足: 必要額 {amount}円, 残高 {balance}円\")\n        self.amount = amount\n        self.balance = balance\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(amount, balance)\n    return balance - amount",
          "output": "無効な年齢: -1",
          "lineNotes": [
            "L1: 基本的な raise",
            "L12: → 無効な年齢: -1",
            "L14: カスタム例外クラスを作る"
          ],
          "stateTrace": [
            "L1: 基本的な raise",
            "L12: → 無効な年齢: -1",
            "L14: カスタム例外クラスを作る"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: raise で例外を発生させる",
          "execute": "EXECUTE: raise で例外を発生させる",
          "debug": "DEBUG: raise で例外を発生させる"
        },
        "commonMistakes": [
          {
            "wrong": "raise TypeError(\"年齢は整数でなければなりません\")",
            "reason": "raise TypeError(\"年齢は整数でなければなりません\")",
            "correct": "def set_age(age):"
          },
          {
            "wrong": "raise ValueError(f\"無効な年齢: {age}\")",
            "reason": "raise ValueError(f\"無効な年齢: {age}\")",
            "correct": "def set_age(age):"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "except ValueError as e:",
            "correct": "def set_age(age):"
          },
          {
            "wrong": "class InsufficientFundsError(Exception):",
            "reason": "class InsufficientFundsError(Exception):",
            "correct": "def set_age(age):"
          },
          {
            "wrong": "raise InsufficientFundsError(amount, balance)",
            "reason": "raise InsufficientFundsError(amount, balance)",
            "correct": "def set_age(age):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "errors-05-with",
        "title": "コンテキストマネージャ（with 文）",
        "summary": "with 文を使うと、処理前後のセットアップ・クリーンアップを自動化できます。ファイル操作や DB 接続など「確実に閉じる」必要があるリソースに使います。",
        "details": "with 文を使うと、処理前後のセットアップ・クリーンアップを自動化できます。ファイル操作や DB 接続など「確実に閉じる」必要があるリソースに使います。",
        "minimalExample": {
          "code": "# ファイルを with で開く（自動でクローズされる）\nwith open(\"data.txt\", \"w\") as f:\n    f.write(\"Hello, World!\")\n# ← with ブロックを抜けると f.close() が自動実行\n\n# 複数リソースを同時に扱う\nwith open(\"input.txt\") as src, open(\"output.txt\", \"w\") as dst:\n    for line in src:\n        dst.write(line.upper())\n\n# 自作のコンテキストマネージャ\nfrom contextlib import contextmanager\n\n@contextmanager\ndef timer(label=\"\"):\n    import time\n    start = time.time()\n    yield               # ← with ブロックの中身がここで実行される\n    print(f\"{label}: {time.time() - start:.4f}秒\")\n\nwith timer(\"処理\"):\n    total = sum(range(1_000_000))",
          "output": "??: 0.0XXX?",
          "lineNotes": [
            "L1: ファイルを with で開く（自動でクローズされる）",
            "L4: ← with ブロックを抜けると f.close() が自動実行",
            "L6: 複数リソースを同時に扱う",
            "L11: 自作のコンテキストマネージャ",
            "L18: ← with ブロックの中身がここで実行される"
          ],
          "stateTrace": [
            "L1: ファイルを with で開く（自動でクローズされる）",
            "L4: ← with ブロックを抜けると f.close() が自動実行",
            "L6: 複数リソースを同時に扱う",
            "L11: 自作のコンテキストマネージャ",
            "L18: ← with ブロックの中身がここで実行される"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: コンテキストマネージャ（with 文）",
          "execute": "EXECUTE: コンテキストマネージャ（with 文）",
          "debug": "DEBUG: コンテキストマネージャ（with 文）"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "with 文を使うと、処理前後のセットアップ・クリーンアップを自動化できます。ファイル操作や DB 接続など「確実に閉じる」必要があるリソースに使います。",
            "correct": "with open(\"data.txt\", \"w\") as f:"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "errors-06-page",
        "title": "よくあるエラーのデバッグ方法",
        "summary": "エラーメッセージの読み方と、デバッグの基本的なアプローチを覚えましょう。",
        "details": "エラーメッセージの読み方と、デバッグの基本的なアプローチを覚えましょう。",
        "minimalExample": {
          "code": "# Traceback の読み方\n# Traceback (most recent call last):  ← 最後のエラーが最下部\n#   File \"main.py\", line 5, in <module>\n#     result = divide(10, 0)\n#   File \"main.py\", line 2, in divide\n#     return a / b\n# ZeroDivisionError: division by zero  ← エラーの種類と内容\n\n# print デバッグ（手軽）\ndef calculate(a, b):\n    print(f\"DEBUG: a={a}, b={b}\")   # 変数の中身を確認\n    result = a / b\n    print(f\"DEBUG: result={result}\")\n    return result\n\n# breakpoint()（Python 3.7+）\ndef calculate2(a, b):\n    breakpoint()   # ← ここで一時停止してインタラクティブに調査\n    return a / b\n\n# assert でロジックのチェック\ndef get_positive(n):\n    assert n > 0, f\"正の数が必要です: n={n}\"\n    return n",
          "output": "calculate(10, 2) ???? DEBUG: a=10, b=2 ? DEBUG: result=5.0 ???????",
          "lineNotes": [
            "L1: Traceback の読み方",
            "L2: Traceback (most recent call last):  ← 最後のエラーが最下部",
            "L3: File \"main.py\", line 5, in <module>",
            "L4: result = divide(10, 0)",
            "L5: File \"main.py\", line 2, in divide",
            "L6: return a / b",
            "L7: ZeroDivisionError: division by zero  ← エラーの種類と内容",
            "L9: print デバッグ（手軽）",
            "L11: 変数の中身を確認",
            "L16: breakpoint()（Python 3.7+）",
            "L18: ← ここで一時停止してインタラクティブに調査",
            "L21: assert でロジックのチェック"
          ],
          "stateTrace": [
            "L1: Traceback の読み方",
            "L2: Traceback (most recent call last):  ← 最後のエラーが最下部",
            "L3: File \"main.py\", line 5, in <module>",
            "L4: result = divide(10, 0)",
            "L5: File \"main.py\", line 2, in divide",
            "L6: return a / b",
            "L7: ZeroDivisionError: division by zero  ← エラーの種類と内容",
            "L9: print デバッグ（手軽）",
            "L11: 変数の中身を確認",
            "L16: breakpoint()（Python 3.7+）",
            "L18: ← ここで一時停止してインタラクティブに調査",
            "L21: assert でロジックのチェック"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: よくあるエラーのデバッグ方法",
          "execute": "EXECUTE: よくあるエラーのデバッグ方法",
          "debug": "DEBUG: よくあるエラーのデバッグ方法"
        },
        "commonMistakes": [
          {
            "wrong": "ZeroDivisionError: division by zero",
            "reason": "← エラーの種類と内容",
            "correct": "def calculate(a, b):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "errors-06-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "errors-06-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "errors"
    ]
  },
  {
    "id": "modules",
    "language": "python",
    "title": "モジュールとライブラリ",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "modules"
    ],
    "summary": "外部の機能を使いこなす",
    "pages": [
      {
        "id": "modules-01-import",
        "title": "import の使い方",
        "summary": "標準ライブラリや外部パッケージを import して機能を使えます。",
        "details": "標準ライブラリや外部パッケージを import して機能を使えます。",
        "minimalExample": {
          "code": "# モジュール全体をインポート\nimport math\nprint(math.pi)           # → 3.14159...\nprint(math.sqrt(16))     # → 4.0\n\n# 特定の関数だけインポート\nfrom math import pi, sqrt, ceil\nprint(pi)                # → 3.14159...\nprint(sqrt(25))          # → 5.0\n\n# エイリアス（別名）をつける\nimport math as m\nfrom datetime import datetime as dt\n\nprint(m.floor(3.7))      # → 3\nprint(dt.now())          # 現在日時\n\n# すべてインポート（非推奨）\n# from math import *",
          "output": "3.14159...\n4.0\n3.14159...\n5.0\n3",
          "lineNotes": [
            "L1: モジュール全体をインポート",
            "L3: → 3.14159...",
            "L4: → 4.0",
            "L6: 特定の関数だけインポート",
            "L8: → 3.14159...",
            "L9: → 5.0",
            "L11: エイリアス（別名）をつける",
            "L15: → 3",
            "L16: 現在日時",
            "L18: すべてインポート（非推奨）",
            "L19: from math import *"
          ],
          "stateTrace": [
            "L1: モジュール全体をインポート",
            "L3: → 3.14159...",
            "L4: → 4.0",
            "L6: 特定の関数だけインポート",
            "L8: → 3.14159...",
            "L9: → 5.0",
            "L11: エイリアス（別名）をつける",
            "L15: → 3",
            "L16: 現在日時",
            "L18: すべてインポート（非推奨）",
            "L19: from math import *"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: import の使い方",
          "execute": "EXECUTE: import の使い方",
          "debug": "DEBUG: import の使い方"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "標準ライブラリや外部パッケージを import して機能を使えます。",
            "correct": "import math"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "modules-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "modules-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "modules-02-page",
        "title": "よく使う標準ライブラリ",
        "summary": "Pythonには豊富な標準ライブラリがあります。よく使うものを覚えておきましょう。",
        "details": "Pythonには豊富な標準ライブラリがあります。よく使うものを覚えておきましょう。",
        "minimalExample": {
          "code": "# math: 数学関数\nimport math\nmath.sqrt(4)        # → 2.0\nmath.ceil(2.1)      # → 3（切り上げ）\nmath.floor(2.9)     # → 2（切り捨て）\nmath.log(100, 10)   # → 2.0（log10）\n\n# random: 乱数\nimport random\nrandom.random()          # 0.0〜1.0の乱数\nrandom.randint(1, 6)     # サイコロ\nrandom.choice([\"A\",\"B\"]) # リストからランダム選択\nrandom.shuffle([1,2,3])  # リストをシャッフル\n\n# datetime: 日時\nfrom datetime import datetime, date\nnow = datetime.now()\nprint(now.strftime(\"%Y年%m月%d日\"))\n\n# os: ファイル・ディレクトリ操作\nimport os\nos.getcwd()          # 現在のディレクトリ\nos.listdir(\".\")      # ファイル一覧",
          "output": "2.0\n3（切り上げ）\n2（切り捨て）\n2.0（log10）",
          "lineNotes": [
            "L1: math: 数学関数",
            "L3: → 2.0",
            "L4: → 3（切り上げ）",
            "L5: → 2（切り捨て）",
            "L6: → 2.0（log10）",
            "L8: random: 乱数",
            "L10: 0.0〜1.0の乱数",
            "L11: サイコロ",
            "L12: リストからランダム選択",
            "L13: リストをシャッフル",
            "L15: datetime: 日時",
            "L20: os: ファイル・ディレクトリ操作"
          ],
          "stateTrace": [
            "L1: math: 数学関数",
            "L3: → 2.0",
            "L4: → 3（切り上げ）",
            "L5: → 2（切り捨て）",
            "L6: → 2.0（log10）",
            "L8: random: 乱数",
            "L10: 0.0〜1.0の乱数",
            "L11: サイコロ",
            "L12: リストからランダム選択",
            "L13: リストをシャッフル",
            "L15: datetime: 日時",
            "L20: os: ファイル・ディレクトリ操作"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: よく使う標準ライブラリ",
          "execute": "EXECUTE: よく使う標準ライブラリ",
          "debug": "DEBUG: よく使う標準ライブラリ"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Pythonには豊富な標準ライブラリがあります。よく使うものを覚えておきましょう。",
            "correct": "import math"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "modules-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "modules-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "modules-03-pip",
        "title": "pip でパッケージをインストール",
        "summary": "pip コマンドで外部パッケージをインストールできます。",
        "details": "pip コマンドで外部パッケージをインストールできます。",
        "minimalExample": {
          "code": "# ターミナルで実行（Pythonコードではない）\n# pip install requests       HTTPリクエスト\n# pip install pandas         データ分析\n# pip install numpy          数値計算\n# pip install matplotlib     グラフ描画\n# pip install flask          Webフレームワーク\n\n# インストール後はimportして使う\nimport requests\n\nresponse = requests.get(\"https://api.example.com/data\")\nprint(response.status_code)  # → 200\ndata = response.json()       # JSONをdictに変換\n\n# よく使う外部パッケージ\n# requests  → HTTPリクエスト\n# pandas    → データ分析・CSV操作\n# numpy     → 配列・数値計算\n# pillow    → 画像処理\n# selenium  → ブラウザ自動化",
          "output": "200",
          "lineNotes": [
            "L1: ターミナルで実行（Pythonコードではない）",
            "L2: pip install requests       HTTPリクエスト",
            "L3: pip install pandas         データ分析",
            "L4: pip install numpy          数値計算",
            "L5: pip install matplotlib     グラフ描画",
            "L6: pip install flask          Webフレームワーク",
            "L8: インストール後はimportして使う",
            "L11: api.example.com/data\")",
            "L12: → 200",
            "L13: JSONをdictに変換",
            "L15: よく使う外部パッケージ",
            "L16: requests  → HTTPリクエスト"
          ],
          "stateTrace": [
            "L1: ターミナルで実行（Pythonコードではない）",
            "L2: pip install requests       HTTPリクエスト",
            "L3: pip install pandas         データ分析",
            "L4: pip install numpy          数値計算",
            "L5: pip install matplotlib     グラフ描画",
            "L6: pip install flask          Webフレームワーク",
            "L8: インストール後はimportして使う",
            "L11: api.example.com/data\")",
            "L12: → 200",
            "L13: JSONをdictに変換",
            "L15: よく使う外部パッケージ",
            "L16: requests  → HTTPリクエスト"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: pip でパッケージをインストール",
          "execute": "EXECUTE: pip でパッケージをインストール",
          "debug": "DEBUG: pip でパッケージをインストール"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "pip コマンドで外部パッケージをインストールできます。",
            "correct": "import requests"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "modules-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "modules-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "modules-04-page",
        "title": "よく使う標準ライブラリ（応用）",
        "summary": "itertools・collections・pathlib など、知っておくと便利なモジュールです。",
        "details": "itertools・collections・pathlib など、知っておくと便利なモジュールです。",
        "minimalExample": {
          "code": "# itertools: 反復処理のユーティリティ\nimport itertools\n\n# chain: 複数のイテラブルを繋ぐ\nlist(itertools.chain([1,2], [3,4], [5]))  # → [1,2,3,4,5]\n\n# product: デカルト積（全組み合わせ）\nlist(itertools.product(\"AB\", [1,2]))\n# → [('A',1),('A',2),('B',1),('B',2)]\n\n# combinations: 重複なし組み合わせ\nlist(itertools.combinations([1,2,3], 2))\n# → [(1,2),(1,3),(2,3)]\n\n# collections: 便利なデータ構造\nfrom collections import Counter, defaultdict, deque\n\nCounter(\"banana\")  # → Counter({'a':3,'n':2,'b':1})\n\nd = defaultdict(int)\nd[\"key\"] += 1      # KeyError にならない\n\n# pathlib: ファイルパス操作\nfrom pathlib import Path\np = Path(\"data\") / \"file.txt\"  # パスを結合\np.exists()         # ファイルが存在するか\np.read_text()      # ファイルを読む\np.suffix           # → \".txt\"",
          "output": "[1,2,3,4,5]\n[('A',1),('A',2),('B',1),('B',2)]\n[(1,2),(1,3),(2,3)]\nCounter({'a':3,'n':2,'b':1})\n\".txt\"",
          "lineNotes": [
            "L1: itertools: 反復処理のユーティリティ",
            "L4: chain: 複数のイテラブルを繋ぐ",
            "L5: → [1,2,3,4,5]",
            "L7: product: デカルト積（全組み合わせ）",
            "L9: → [('A',1),('A',2),('B',1),('B',2)]",
            "L11: combinations: 重複なし組み合わせ",
            "L13: → [(1,2),(1,3),(2,3)]",
            "L15: collections: 便利なデータ構造",
            "L18: → Counter({'a':3,'n':2,'b':1})",
            "L21: KeyError にならない",
            "L23: pathlib: ファイルパス操作",
            "L25: パスを結合"
          ],
          "stateTrace": [
            "L1: itertools: 反復処理のユーティリティ",
            "L4: chain: 複数のイテラブルを繋ぐ",
            "L5: → [1,2,3,4,5]",
            "L7: product: デカルト積（全組み合わせ）",
            "L9: → [('A',1),('A',2),('B',1),('B',2)]",
            "L11: combinations: 重複なし組み合わせ",
            "L13: → [(1,2),(1,3),(2,3)]",
            "L15: collections: 便利なデータ構造",
            "L18: → Counter({'a':3,'n':2,'b':1})",
            "L21: KeyError にならない",
            "L23: pathlib: ファイルパス操作",
            "L25: パスを結合"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: よく使う標準ライブラリ（応用）",
          "execute": "EXECUTE: よく使う標準ライブラリ（応用）",
          "debug": "DEBUG: よく使う標準ライブラリ（応用）"
        },
        "commonMistakes": [
          {
            "wrong": "d[\"key\"] += 1",
            "reason": "# KeyError にならない",
            "correct": "import itertools"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "modules-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "modules-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "modules-05-page",
        "title": "モジュールの作り方",
        "summary": "自分でモジュール（.py ファイル）を作って別のファイルからインポートできます。大きなプログラムを分割するときに使います。",
        "details": "自分でモジュール（.py ファイル）を作って別のファイルからインポートできます。大きなプログラムを分割するときに使います。",
        "minimalExample": {
          "code": "# utils.py（自作モジュール）\ndef add(a, b):\n    return a + b\n\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nPI = 3.14159\n\n# main.py（別ファイルから使う）\nimport utils\nprint(utils.add(3, 5))     # → 8\nprint(utils.PI)            # → 3.14159\n\n# または特定の関数だけインポート\nfrom utils import greet\nprint(greet(\"Guest\"))      # → Hello, Guest!\n\n# __name__ でスクリプト直接実行か確認\n# utils.py の末尾に追加\nif __name__ == \"__main__\":\n    # このファイルを直接実行したときだけ動く\n    print(\"テスト:\", add(1, 2))",
          "output": "8\n3.14159\nHello, Guest!",
          "lineNotes": [
            "L1: utils.py（自作モジュール）",
            "L10: main.py（別ファイルから使う）",
            "L12: → 8",
            "L13: → 3.14159",
            "L15: または特定の関数だけインポート",
            "L17: → Hello, Guest!",
            "L19: __name__ でスクリプト直接実行か確認",
            "L20: utils.py の末尾に追加",
            "L22: このファイルを直接実行したときだけ動く"
          ],
          "stateTrace": [
            "L1: utils.py（自作モジュール）",
            "L10: main.py（別ファイルから使う）",
            "L12: → 8",
            "L13: → 3.14159",
            "L15: または特定の関数だけインポート",
            "L17: → Hello, Guest!",
            "L19: __name__ でスクリプト直接実行か確認",
            "L20: utils.py の末尾に追加",
            "L22: このファイルを直接実行したときだけ動く"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: モジュールの作り方",
          "execute": "EXECUTE: モジュールの作り方",
          "debug": "DEBUG: モジュールの作り方"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "自分でモジュール（.py ファイル）を作って別のファイルからインポートできます。大きなプログラムを分割するときに使います。",
            "correct": "def add(a, b):"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "modules-05-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "modules-05-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "modules"
    ]
  },
  {
    "id": "comprehensions",
    "language": "python",
    "title": "内包表記とイテレータ",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "comprehensions"
    ],
    "summary": "Pythonic な反復処理",
    "pages": [
      {
        "id": "comprehensions-01-page",
        "title": "リスト内包表記の応用",
        "summary": "条件・ネスト・関数呼び出しを組み合わせた実践的な内包表記です。",
        "details": "条件・ネスト・関数呼び出しを組み合わせた実践的な内包表記です。",
        "minimalExample": {
          "code": "# 基本（再確認）\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# → [0, 4, 16, 36, 64]\n\n# ネストしたループ\nmatrix = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [n for row in matrix for n in row]\n# → [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# 関数を適用\nwords = [\"hello\", \"world\", \"python\"]\ncapitalized = [w.capitalize() for w in words]\n# → ['Hello', 'World', 'Python']\n\n# 条件式（三項）との組み合わせ\nlabels = [\"偶数\" if x % 2 == 0 else \"奇数\" for x in range(6)]\n# → ['偶数', '奇数', '偶数', '奇数', '偶数', '奇数']",
          "output": "[0, 4, 16, 36, 64]\n[1, 2, 3, 4, 5, 6, 7, 8, 9]\n['Hello', 'World', 'Python']\n['偶数', '奇数', '偶数', '奇数', '偶数', '奇数']",
          "lineNotes": [
            "L1: 基本（再確認）",
            "L3: → [0, 4, 16, 36, 64]",
            "L5: ネストしたループ",
            "L8: → [1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "L10: 関数を適用",
            "L13: → ['Hello', 'World', 'Python']",
            "L15: 条件式（三項）との組み合わせ",
            "L17: → ['偶数', '奇数', '偶数', '奇数', '偶数', '奇数']"
          ],
          "stateTrace": [
            "L1: 基本（再確認）",
            "L3: → [0, 4, 16, 36, 64]",
            "L5: ネストしたループ",
            "L8: → [1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "L10: 関数を適用",
            "L13: → ['Hello', 'World', 'Python']",
            "L15: 条件式（三項）との組み合わせ",
            "L17: → ['偶数', '奇数', '偶数', '奇数', '偶数', '奇数']"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: リスト内包表記の応用",
          "execute": "EXECUTE: リスト内包表記の応用",
          "debug": "DEBUG: リスト内包表記の応用"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "条件・ネスト・関数呼び出しを組み合わせた実践的な内包表記です。",
            "correct": "squares = [x**2 for x in range(10) if x % 2 == 0]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "comprehensions-01-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "comprehensions-01-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "comprehensions-02-page",
        "title": "辞書・集合の内包表記",
        "summary": "辞書（dict）と集合（set）も内包表記で作れます。",
        "details": "辞書（dict）と集合（set）も内包表記で作れます。",
        "minimalExample": {
          "code": "# 辞書内包表記\nwords = [\"apple\", \"banana\", \"cherry\"]\nlengths = {w: len(w) for w in words}\n# → {'apple':5, 'banana':6, 'cherry':6}\n\n# キーと値を反転\noriginal = {\"a\": 1, \"b\": 2, \"c\": 3}\ninverted = {v: k for k, v in original.items()}\n# → {1:'a', 2:'b', 3:'c'}\n\n# 集合内包表記（重複自動除去）\nnums = [1, 2, 2, 3, 3, 3, 4]\nunique_squares = {x**2 for x in nums}\n# → {1, 4, 9, 16}\n\n# フィルタリング\nscores = {\"Guest\": 85, \"Member\": 55, \"Carol\": 92, \"Dave\": 48}\npassed = {k: v for k, v in scores.items() if v >= 60}\n# → {'Guest':85, 'Carol':92}",
          "output": "{'apple':5, 'banana':6, 'cherry':6}\n{1:'a', 2:'b', 3:'c'}\n{1, 4, 9, 16}\n{'Guest':85, 'Carol':92}",
          "lineNotes": [
            "L1: 辞書内包表記",
            "L4: → {'apple':5, 'banana':6, 'cherry':6}",
            "L6: キーと値を反転",
            "L9: → {1:'a', 2:'b', 3:'c'}",
            "L11: 集合内包表記（重複自動除去）",
            "L14: → {1, 4, 9, 16}",
            "L16: フィルタリング",
            "L19: → {'Guest':85, 'Carol':92}"
          ],
          "stateTrace": [
            "L1: 辞書内包表記",
            "L4: → {'apple':5, 'banana':6, 'cherry':6}",
            "L6: キーと値を反転",
            "L9: → {1:'a', 2:'b', 3:'c'}",
            "L11: 集合内包表記（重複自動除去）",
            "L14: → {1, 4, 9, 16}",
            "L16: フィルタリング",
            "L19: → {'Guest':85, 'Carol':92}"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: 辞書・集合の内包表記",
          "execute": "EXECUTE: 辞書・集合の内包表記",
          "debug": "DEBUG: 辞書・集合の内包表記"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "辞書（dict）と集合（set）も内包表記で作れます。",
            "correct": "words = [\"apple\", \"banana\", \"cherry\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "comprehensions-02-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "comprehensions-02-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "comprehensions-03-map-filter-reduce",
        "title": "map / filter / reduce",
        "summary": "関数型プログラミングスタイルの組み込み関数です。内包表記と使い分けましょう。",
        "details": "関数型プログラミングスタイルの組み込み関数です。内包表記と使い分けましょう。",
        "minimalExample": {
          "code": "nums = [1, 2, 3, 4, 5]\n\n# map: 各要素に関数を適用\ndoubled = list(map(lambda x: x * 2, nums))\n# → [2, 4, 6, 8, 10]\n# 内包表記で書くと: [x * 2 for x in nums]\n\n# filter: 条件を満たす要素だけ残す\nevens = list(filter(lambda x: x % 2 == 0, nums))\n# → [2, 4]\n# 内包表記で書くと: [x for x in nums if x % 2 == 0]\n\n# reduce: 要素を畳み込む（累積計算）\nfrom functools import reduce\ntotal = reduce(lambda acc, x: acc + x, nums)\n# → 15（1+2+3+4+5）\n# → 組み込みの sum(nums) の方が読みやすい\n\n# 実際は内包表記 or 組み込み関数を優先\n# map/filter はイテレータを返す点に注意",
          "output": "[2, 4, 6, 8, 10]\n[2, 4]\n15（1+2+3+4+5）\n組み込みの sum(nums) の方が読みやすい",
          "lineNotes": [
            "L3: map: 各要素に関数を適用",
            "L5: → [2, 4, 6, 8, 10]",
            "L6: 内包表記で書くと: [x * 2 for x in nums]",
            "L8: filter: 条件を満たす要素だけ残す",
            "L10: → [2, 4]",
            "L11: 内包表記で書くと: [x for x in nums if x % 2 == 0]",
            "L13: reduce: 要素を畳み込む（累積計算）",
            "L16: → 15（1+2+3+4+5）",
            "L17: → 組み込みの sum(nums) の方が読みやすい",
            "L19: 実際は内包表記 or 組み込み関数を優先",
            "L20: map/filter はイテレータを返す点に注意"
          ],
          "stateTrace": [
            "L3: map: 各要素に関数を適用",
            "L5: → [2, 4, 6, 8, 10]",
            "L6: 内包表記で書くと: [x * 2 for x in nums]",
            "L8: filter: 条件を満たす要素だけ残す",
            "L10: → [2, 4]",
            "L11: 内包表記で書くと: [x for x in nums if x % 2 == 0]",
            "L13: reduce: 要素を畳み込む（累積計算）",
            "L16: → 15（1+2+3+4+5）",
            "L17: → 組み込みの sum(nums) の方が読みやすい",
            "L19: 実際は内包表記 or 組み込み関数を優先",
            "L20: map/filter はイテレータを返す点に注意"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: map / filter / reduce",
          "execute": "EXECUTE: map / filter / reduce",
          "debug": "DEBUG: map / filter / reduce"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "関数型プログラミングスタイルの組み込み関数です。内包表記と使い分けましょう。",
            "correct": "nums = [1, 2, 3, 4, 5]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "comprehensions-03-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "comprehensions-03-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      },
      {
        "id": "comprehensions-04-zip-enumerate",
        "title": "zip と enumerate の応用",
        "summary": "zip・enumerate はループで頻繁に使う便利な組み込み関数です。",
        "details": "zip・enumerate はループで頻繁に使う便利な組み込み関数です。",
        "minimalExample": {
          "code": "# zip: 複数のリストを並行処理\nnames  = [\"Guest\", \"Member\", \"Carol\"]\nscores = [85, 92, 78]\ngrades = [\"A\", \"A+\", \"B+\"]\n\nfor name, score, grade in zip(names, scores, grades):\n    print(f\"{name}: {score}点 ({grade})\")\n\n# zip でリストを辞書に変換\nd = dict(zip(names, scores))\n# → {'Guest':85, 'Member':92, 'Carol':78}\n\n# zip_longest: 短い方に None を補完\nfrom itertools import zip_longest\na = [1, 2, 3]\nb = [\"x\", \"y\"]\nlist(zip_longest(a, b, fillvalue=0))\n# → [(1,'x'), (2,'y'), (3,0)]\n\n# enumerate: インデックス付きでループ\nfor i, name in enumerate(names, start=1):\n    print(f\"{i}位: {name}\")",
          "output": "{'Guest':85, 'Member':92, 'Carol':78}\n[(1,'x'), (2,'y'), (3,0)]",
          "lineNotes": [
            "L1: zip: 複数のリストを並行処理",
            "L9: zip でリストを辞書に変換",
            "L11: → {'Guest':85, 'Member':92, 'Carol':78}",
            "L13: zip_longest: 短い方に None を補完",
            "L18: → [(1,'x'), (2,'y'), (3,0)]",
            "L20: enumerate: インデックス付きでループ"
          ],
          "stateTrace": [
            "L1: zip: 複数のリストを並行処理",
            "L9: zip でリストを辞書に変換",
            "L11: → {'Guest':85, 'Member':92, 'Carol':78}",
            "L13: zip_longest: 短い方に None を補完",
            "L18: → [(1,'x'), (2,'y'), (3,0)]",
            "L20: enumerate: インデックス付きでループ"
          ]
        },
        "worldExamples": {
          "decode": "DECODE: zip と enumerate の応用",
          "execute": "EXECUTE: zip と enumerate の応用",
          "debug": "DEBUG: zip と enumerate の応用"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "zip・enumerate はループで頻繁に使う便利な組み込み関数です。",
            "correct": "names  = [\"Guest\", \"Member\", \"Carol\"]"
          }
        ],
        "correctedExample": "",
        "miniChecks": [
          {
            "id": "comprehensions-04-check-1",
            "prompt": "このページで最初に確認する値は何ですか。",
            "answer": "代入された値、または表示される式の値を確認する。"
          },
          {
            "id": "comprehensions-04-check-2",
            "prompt": "間違えやすい行はどこですか。",
            "answer": "型変換、条件、インデックス、スコープなど値が変わる行を探す。"
          }
        ]
      }
    ],
    "relatedConceptIds": [
      "comprehension"
    ]
  },
  {
    "id": "sets",
    "language": "python",
    "title": "セット",
    "level": "basic",
    "parentId": "lists-arrays",
    "prerequisites": [
      "lists-arrays"
    ],
    "aliases": [
      "set",
      "unique"
    ],
    "summary": "セットを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "sets-basic",
        "title": "セットの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "tags = [\"jp\", \"jp\", \"python\"]\nunique_tags = set(tags)\nprint(len(unique_tags))\nprint(\"jp\" in unique_tags)",
          "output": "2\nTrue",
          "lineNotes": [
            "set は重複を1つにまとめる。",
            "in で含まれるか確認できる。"
          ],
          "stateTrace": [
            "1. set は重複を1つにまとめる。",
            "2. in で含まれるか確認できる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 セットでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 セットでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 セットでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          }
        ],
        "miniChecks": [
          {
            "id": "sets-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sets-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "sets-02-restored",
        "title": "セット 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "tags = [\"jp\", \"jp\", \"python\"]\nunique_tags = set(tags)\nprint(len(unique_tags))\nprint(\"jp\" in unique_tags)\n# trace_path",
          "output": "2\nTrue",
          "lineNotes": [
            "set は重複を1つにまとめる。",
            "in で含まれるか確認できる。"
          ],
          "stateTrace": [
            "1. set は重複を1つにまとめる。",
            "2. in で含まれるか確認できる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 セットでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 セットでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 セットでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          }
        ],
        "miniChecks": [
          {
            "id": "sets-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sets-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "sets-03-restored",
        "title": "セット 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "tags = [\"jp\", \"jp\", \"python\"]\nunique_tags = set(tags)\nprint(len(unique_tags))\nprint(\"jp\" in unique_tags)\n# mistake_path",
          "output": "2\nTrue",
          "lineNotes": [
            "set は重複を1つにまとめる。",
            "in で含まれるか確認できる。"
          ],
          "stateTrace": [
            "1. set は重複を1つにまとめる。",
            "2. in で含まれるか確認できる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 セットでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 セットでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 セットでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "tags = [\"jp\", \"jp\", \"python\"]"
          }
        ],
        "miniChecks": [
          {
            "id": "sets-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sets-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "lists"
    ]
  },
  {
    "id": "sorting-filtering",
    "language": "python",
    "title": "並べ替えと絞り込み",
    "level": "basic",
    "parentId": "loops",
    "prerequisites": [
      "loops",
      "lists-arrays"
    ],
    "aliases": [
      "sort",
      "filter"
    ],
    "summary": "並べ替えと絞り込みを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "sorting-filtering-basic",
        "title": "並べ替えと絞り込みの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "scores = [70, 95, 82]\npassed = [s for s in scores if s >= 80]\nprint(sorted(passed))",
          "output": "[82, 95]",
          "lineNotes": [
            "if s >= 80 で条件に合う値だけ残す。",
            "sorted は並べ替えた新しいリストを返す。"
          ],
          "stateTrace": [
            "1. if s >= 80 で条件に合う値だけ残す。",
            "2. sorted は並べ替えた新しいリストを返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 並べ替えと絞り込みでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 並べ替えと絞り込みでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 並べ替えと絞り込みでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "scores = [70, 95, 82]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "scores = [70, 95, 82]"
          }
        ],
        "miniChecks": [
          {
            "id": "sorting-filtering-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sorting-filtering-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "sorting-filtering-02-restored",
        "title": "並べ替えと絞り込み 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "scores = [70, 95, 82]\npassed = [s for s in scores if s >= 80]\nprint(sorted(passed))\n# trace_path",
          "output": "[82, 95]",
          "lineNotes": [
            "if s >= 80 で条件に合う値だけ残す。",
            "sorted は並べ替えた新しいリストを返す。"
          ],
          "stateTrace": [
            "1. if s >= 80 で条件に合う値だけ残す。",
            "2. sorted は並べ替えた新しいリストを返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 並べ替えと絞り込みでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 並べ替えと絞り込みでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 並べ替えと絞り込みでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "scores = [70, 95, 82]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "scores = [70, 95, 82]"
          }
        ],
        "miniChecks": [
          {
            "id": "sorting-filtering-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sorting-filtering-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "sorting-filtering-03-restored",
        "title": "並べ替えと絞り込み 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "scores = [70, 95, 82]\npassed = [s for s in scores if s >= 80]\nprint(sorted(passed))\n# mistake_path",
          "output": "[82, 95]",
          "lineNotes": [
            "if s >= 80 で条件に合う値だけ残す。",
            "sorted は並べ替えた新しいリストを返す。"
          ],
          "stateTrace": [
            "1. if s >= 80 で条件に合う値だけ残す。",
            "2. sorted は並べ替えた新しいリストを返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 並べ替えと絞り込みでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 並べ替えと絞り込みでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 並べ替えと絞り込みでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "scores = [70, 95, 82]"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "scores = [70, 95, 82]"
          }
        ],
        "miniChecks": [
          {
            "id": "sorting-filtering-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "sorting-filtering-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "loops",
      "lists"
    ]
  },
  {
    "id": "regex",
    "language": "python",
    "title": "正規表現",
    "level": "basic",
    "parentId": "strings",
    "prerequisites": [
      "strings"
    ],
    "aliases": [
      "regular-expression"
    ],
    "summary": "正規表現を、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "regex-basic",
        "title": "正規表現の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import re\ncode = \"〒100-0001\"\nmatch = re.search(r\"\\d{3}-\\d{4}\", code)\nprint(bool(match))",
          "output": "True",
          "lineNotes": [
            "\\d は数字を表す。",
            "{3} は3回続くという意味。"
          ],
          "stateTrace": [
            "1. \\d は数字を表す。",
            "2. {3} は3回続くという意味。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 正規表現では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 正規表現では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 正規表現では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import re"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import re"
          }
        ],
        "miniChecks": [
          {
            "id": "regex-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "regex-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "regex-02-restored",
        "title": "正規表現 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import re\ncode = \"〒100-0001\"\nmatch = re.search(r\"\\d{3}-\\d{4}\", code)\nprint(bool(match))\n# trace_path",
          "output": "True",
          "lineNotes": [
            "\\d は数字を表す。",
            "{3} は3回続くという意味。"
          ],
          "stateTrace": [
            "1. \\d は数字を表す。",
            "2. {3} は3回続くという意味。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 正規表現では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 正規表現では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 正規表現では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import re"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import re"
          }
        ],
        "miniChecks": [
          {
            "id": "regex-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "regex-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "regex-03-restored",
        "title": "正規表現 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import re\ncode = \"〒100-0001\"\nmatch = re.search(r\"\\d{3}-\\d{4}\", code)\nprint(bool(match))\n# mistake_path",
          "output": "True",
          "lineNotes": [
            "\\d は数字を表す。",
            "{3} は3回続くという意味。"
          ],
          "stateTrace": [
            "1. \\d は数字を表す。",
            "2. {3} は3回続くという意味。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 正規表現では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 正規表現では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 正規表現では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import re"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import re"
          }
        ],
        "miniChecks": [
          {
            "id": "regex-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "regex-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "regex"
    ]
  },
  {
    "id": "date-time",
    "language": "python",
    "title": "日付と時刻",
    "level": "basic",
    "parentId": "strings",
    "prerequisites": [
      "strings"
    ],
    "aliases": [
      "datetime",
      "date"
    ],
    "summary": "日付と時刻を、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "date-time-basic",
        "title": "日付と時刻の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "from datetime import datetime\nstarted = datetime(2026, 4, 1, 9, 0)\nprint(started.month)\nprint(started.strftime(\"%Y-%m-%d\"))",
          "output": "4\n2026-04-01",
          "lineNotes": [
            "datetime は日付と時刻を1つの値として扱う。",
            "strftime は表示用の文字列へ変換する。"
          ],
          "stateTrace": [
            "1. datetime は日付と時刻を1つの値として扱う。",
            "2. strftime は表示用の文字列へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 日付と時刻では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 日付と時刻では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 日付と時刻では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "from datetime import datetime"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "from datetime import datetime"
          }
        ],
        "miniChecks": [
          {
            "id": "date-time-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "date-time-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "date-time-02-restored",
        "title": "日付と時刻 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "from datetime import datetime\nstarted = datetime(2026, 4, 1, 9, 0)\nprint(started.month)\nprint(started.strftime(\"%Y-%m-%d\"))\n# trace_path",
          "output": "4\n2026-04-01",
          "lineNotes": [
            "datetime は日付と時刻を1つの値として扱う。",
            "strftime は表示用の文字列へ変換する。"
          ],
          "stateTrace": [
            "1. datetime は日付と時刻を1つの値として扱う。",
            "2. strftime は表示用の文字列へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 日付と時刻では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 日付と時刻では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 日付と時刻では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "from datetime import datetime"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "from datetime import datetime"
          }
        ],
        "miniChecks": [
          {
            "id": "date-time-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "date-time-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "date-time-03-restored",
        "title": "日付と時刻 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "from datetime import datetime\nstarted = datetime(2026, 4, 1, 9, 0)\nprint(started.month)\nprint(started.strftime(\"%Y-%m-%d\"))\n# mistake_path",
          "output": "4\n2026-04-01",
          "lineNotes": [
            "datetime は日付と時刻を1つの値として扱う。",
            "strftime は表示用の文字列へ変換する。"
          ],
          "stateTrace": [
            "1. datetime は日付と時刻を1つの値として扱う。",
            "2. strftime は表示用の文字列へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 日付と時刻では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 日付と時刻では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 日付と時刻では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "from datetime import datetime"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "from datetime import datetime"
          }
        ],
        "miniChecks": [
          {
            "id": "date-time-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "date-time-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": []
  },
  {
    "id": "unicode-normalization",
    "language": "python",
    "title": "Unicode正規化",
    "level": "basic",
    "parentId": "strings",
    "prerequisites": [
      "strings"
    ],
    "aliases": [
      "unicode",
      "normalize"
    ],
    "summary": "Unicode正規化を、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "unicode-normalization-basic",
        "title": "Unicode正規化の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import unicodedata\nraw = \"ｶﾀｶﾅ\"\ntext = unicodedata.normalize(\"NFKC\", raw)\nprint(text)",
          "output": "カタカナ",
          "lineNotes": [
            "NFKC は全角・半角などの表記ゆれをそろえる。",
            "検索前にそろえると比較が安定する。"
          ],
          "stateTrace": [
            "1. NFKC は全角・半角などの表記ゆれをそろえる。",
            "2. 検索前にそろえると比較が安定する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 Unicode正規化では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 Unicode正規化では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 Unicode正規化では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import unicodedata"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import unicodedata"
          }
        ],
        "miniChecks": [
          {
            "id": "unicode-normalization-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unicode-normalization-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "unicode-normalization-02-restored",
        "title": "Unicode正規化 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import unicodedata\nraw = \"ｶﾀｶﾅ\"\ntext = unicodedata.normalize(\"NFKC\", raw)\nprint(text)\n# trace_path",
          "output": "カタカナ",
          "lineNotes": [
            "NFKC は全角・半角などの表記ゆれをそろえる。",
            "検索前にそろえると比較が安定する。"
          ],
          "stateTrace": [
            "1. NFKC は全角・半角などの表記ゆれをそろえる。",
            "2. 検索前にそろえると比較が安定する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 Unicode正規化では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 Unicode正規化では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 Unicode正規化では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import unicodedata"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import unicodedata"
          }
        ],
        "miniChecks": [
          {
            "id": "unicode-normalization-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unicode-normalization-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "unicode-normalization-03-restored",
        "title": "Unicode正規化 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import unicodedata\nraw = \"ｶﾀｶﾅ\"\ntext = unicodedata.normalize(\"NFKC\", raw)\nprint(text)\n# mistake_path",
          "output": "カタカナ",
          "lineNotes": [
            "NFKC は全角・半角などの表記ゆれをそろえる。",
            "検索前にそろえると比較が安定する。"
          ],
          "stateTrace": [
            "1. NFKC は全角・半角などの表記ゆれをそろえる。",
            "2. 検索前にそろえると比較が安定する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 Unicode正規化では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 Unicode正規化では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 Unicode正規化では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import unicodedata"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import unicodedata"
          }
        ],
        "miniChecks": [
          {
            "id": "unicode-normalization-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unicode-normalization-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": []
  },
  {
    "id": "json",
    "language": "python",
    "title": "JSON",
    "level": "basic",
    "parentId": "dicts-objects",
    "prerequisites": [
      "dicts-objects"
    ],
    "aliases": [
      "json-data"
    ],
    "summary": "JSONを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "json-basic",
        "title": "JSONの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import json\ntext = '{\"country\": \"JP\", \"score\": 3}'\ndata = json.loads(text)\nprint(data[\"score\"])",
          "output": "3",
          "lineNotes": [
            "json.loads はJSON文字列をPythonの辞書へ変換する。",
            "変換後は通常の辞書として読める。"
          ],
          "stateTrace": [
            "1. json.loads はJSON文字列をPythonの辞書へ変換する。",
            "2. 変換後は通常の辞書として読める。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 JSONでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 JSONでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 JSONでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import json"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import json"
          }
        ],
        "miniChecks": [
          {
            "id": "json-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "json-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "json-02-restored",
        "title": "JSON 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import json\ntext = '{\"country\": \"JP\", \"score\": 3}'\ndata = json.loads(text)\nprint(data[\"score\"])\n# trace_path",
          "output": "3",
          "lineNotes": [
            "json.loads はJSON文字列をPythonの辞書へ変換する。",
            "変換後は通常の辞書として読める。"
          ],
          "stateTrace": [
            "1. json.loads はJSON文字列をPythonの辞書へ変換する。",
            "2. 変換後は通常の辞書として読める。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 JSONでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 JSONでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 JSONでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import json"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import json"
          }
        ],
        "miniChecks": [
          {
            "id": "json-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "json-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "json-03-restored",
        "title": "JSON 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "import json\ntext = '{\"country\": \"JP\", \"score\": 3}'\ndata = json.loads(text)\nprint(data[\"score\"])\n# mistake_path",
          "output": "3",
          "lineNotes": [
            "json.loads はJSON文字列をPythonの辞書へ変換する。",
            "変換後は通常の辞書として読める。"
          ],
          "stateTrace": [
            "1. json.loads はJSON文字列をPythonの辞書へ変換する。",
            "2. 変換後は通常の辞書として読める。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 JSONでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 JSONでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 JSONでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "import json"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "import json"
          }
        ],
        "miniChecks": [
          {
            "id": "json-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "json-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "json"
    ]
  },
  {
    "id": "type-hints",
    "language": "python",
    "title": "型ヒント",
    "level": "advanced",
    "parentId": "functions",
    "prerequisites": [
      "functions",
      "variables-types"
    ],
    "aliases": [
      "typing",
      "typehints"
    ],
    "summary": "型ヒントを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "type-hints-basic",
        "title": "型ヒントの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def double(value: int) -> int:\n    return value * 2\n\nprint(double(4))",
          "output": "8",
          "lineNotes": [
            ": int は引数の期待型を示す。",
            "-> int は戻り値の期待型を示す。"
          ],
          "stateTrace": [
            "1. : int は引数の期待型を示す。",
            "2. -> int は戻り値の期待型を示す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 型ヒントでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 型ヒントでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 型ヒントでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def double(value: int) -> int:"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def double(value: int) -> int:"
          }
        ],
        "miniChecks": [
          {
            "id": "type-hints-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "type-hints-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "type-hints-02-restored",
        "title": "型ヒント 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def double(value: int) -> int:\n    return value * 2\n\nprint(double(4))\n# trace_path",
          "output": "8",
          "lineNotes": [
            ": int は引数の期待型を示す。",
            "-> int は戻り値の期待型を示す。"
          ],
          "stateTrace": [
            "1. : int は引数の期待型を示す。",
            "2. -> int は戻り値の期待型を示す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 型ヒントでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 型ヒントでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 型ヒントでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def double(value: int) -> int:"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def double(value: int) -> int:"
          }
        ],
        "miniChecks": [
          {
            "id": "type-hints-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "type-hints-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "type-hints-03-restored",
        "title": "型ヒント 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def double(value: int) -> int:\n    return value * 2\n\nprint(double(4))\n# mistake_path",
          "output": "8",
          "lineNotes": [
            ": int は引数の期待型を示す。",
            "-> int は戻り値の期待型を示す。"
          ],
          "stateTrace": [
            "1. : int は引数の期待型を示す。",
            "2. -> int は戻り値の期待型を示す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 型ヒントでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 型ヒントでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 型ヒントでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def double(value: int) -> int:"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def double(value: int) -> int:"
          }
        ],
        "miniChecks": [
          {
            "id": "type-hints-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "type-hints-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "typehints"
    ]
  },
  {
    "id": "unpacking",
    "language": "python",
    "title": "アンパック",
    "level": "advanced",
    "parentId": "lists-arrays",
    "prerequisites": [
      "lists-arrays"
    ],
    "aliases": [
      "tuple-unpack"
    ],
    "summary": "アンパックを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "unpacking-basic",
        "title": "アンパックの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "country, language = (\"JP\", \"python\")\nprint(country)\nprint(language)",
          "output": "JP\npython",
          "lineNotes": [
            "左辺の変数数と右辺の要素数を合わせる。",
            "複数の値を意味のある名前へ分けられる。"
          ],
          "stateTrace": [
            "1. 左辺の変数数と右辺の要素数を合わせる。",
            "2. 複数の値を意味のある名前へ分けられる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 アンパックでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 アンパックでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 アンパックでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "country, language = (\"JP\", \"python\")"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "country, language = (\"JP\", \"python\")"
          }
        ],
        "miniChecks": [
          {
            "id": "unpacking-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unpacking-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "unpacking-02-restored",
        "title": "アンパック 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "country, language = (\"JP\", \"python\")\nprint(country)\nprint(language)\n# trace_path",
          "output": "JP\npython",
          "lineNotes": [
            "左辺の変数数と右辺の要素数を合わせる。",
            "複数の値を意味のある名前へ分けられる。"
          ],
          "stateTrace": [
            "1. 左辺の変数数と右辺の要素数を合わせる。",
            "2. 複数の値を意味のある名前へ分けられる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 アンパックでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 アンパックでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 アンパックでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "country, language = (\"JP\", \"python\")"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "country, language = (\"JP\", \"python\")"
          }
        ],
        "miniChecks": [
          {
            "id": "unpacking-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unpacking-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "unpacking-03-restored",
        "title": "アンパック 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "country, language = (\"JP\", \"python\")\nprint(country)\nprint(language)\n# mistake_path",
          "output": "JP\npython",
          "lineNotes": [
            "左辺の変数数と右辺の要素数を合わせる。",
            "複数の値を意味のある名前へ分けられる。"
          ],
          "stateTrace": [
            "1. 左辺の変数数と右辺の要素数を合わせる。",
            "2. 複数の値を意味のある名前へ分けられる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 アンパックでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 アンパックでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 アンパックでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "country, language = (\"JP\", \"python\")"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "country, language = (\"JP\", \"python\")"
          }
        ],
        "miniChecks": [
          {
            "id": "unpacking-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "unpacking-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "variables"
    ]
  },
  {
    "id": "iterators-generators",
    "language": "python",
    "title": "イテレータとジェネレータ",
    "level": "advanced",
    "parentId": "loops",
    "prerequisites": [
      "loops",
      "functions"
    ],
    "aliases": [
      "generators",
      "iterator"
    ],
    "summary": "イテレータとジェネレータを、Python の小さなコードで確認します。",
    "pages": [
      {
        "id": "iterators-generators-basic",
        "title": "イテレータとジェネレータの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def countdown():\n    yield 3\n    yield 2\n    yield 1\n\nfor value in countdown():\n    print(value)",
          "output": "3\n2\n1",
          "lineNotes": [
            "yield は値を1つ返して、次回の続きも覚える。",
            "大量データを少しずつ処理しやすい。"
          ],
          "stateTrace": [
            "1. yield は値を1つ返して、次回の続きも覚える。",
            "2. 大量データを少しずつ処理しやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 イテレータとジェネレータでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 イテレータとジェネレータでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 イテレータとジェネレータでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def countdown():"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def countdown():"
          }
        ],
        "miniChecks": [
          {
            "id": "iterators-generators-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "iterators-generators-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "iterators-generators-02-restored",
        "title": "イテレータとジェネレータ 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def countdown():\n    yield 3\n    yield 2\n    yield 1\n\nfor value in countdown():\n    print(value)\n# trace_path",
          "output": "3\n2\n1",
          "lineNotes": [
            "yield は値を1つ返して、次回の続きも覚える。",
            "大量データを少しずつ処理しやすい。"
          ],
          "stateTrace": [
            "1. yield は値を1つ返して、次回の続きも覚える。",
            "2. 大量データを少しずつ処理しやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 イテレータとジェネレータでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 イテレータとジェネレータでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 イテレータとジェネレータでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def countdown():"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def countdown():"
          }
        ],
        "miniChecks": [
          {
            "id": "iterators-generators-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "iterators-generators-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "iterators-generators-03-restored",
        "title": "イテレータとジェネレータ 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "def countdown():\n    yield 3\n    yield 2\n    yield 1\n\nfor value in countdown():\n    print(value)\n# mistake_path",
          "output": "3\n2\n1",
          "lineNotes": [
            "yield は値を1つ返して、次回の続きも覚える。",
            "大量データを少しずつ処理しやすい。"
          ],
          "stateTrace": [
            "1. yield は値を1つ返して、次回の続きも覚える。",
            "2. 大量データを少しずつ処理しやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 イテレータとジェネレータでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 イテレータとジェネレータでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 イテレータとジェネレータでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "Python の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "def countdown():"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "def countdown():"
          }
        ],
        "miniChecks": [
          {
            "id": "iterators-generators-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "iterators-generators-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "generators"
    ]
  },
  {
    "id": "js-variables-types",
    "language": "javascript",
    "title": "変数と型",
    "level": "basic",
    "parentId": null,
    "prerequisites": [],
    "aliases": [
      "variables",
      "let",
      "const"
    ],
    "summary": "変数と型を、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-variables-types-basic",
        "title": "変数と型の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const count = 3;\nlet label = \"clear\";\nconsole.log(typeof count);\nconsole.log(label);",
          "output": "number\nclear",
          "lineNotes": [
            "const は再代入しない変数に使う。",
            "typeof は値の型を文字列で返す。"
          ],
          "stateTrace": [
            "1. const は再代入しない変数に使う。",
            "2. typeof は値の型を文字列で返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 変数と型では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 変数と型では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 変数と型では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const count = 3;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const count = 3;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-variables-types-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-variables-types-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-variables-types-02-restored",
        "title": "変数と型 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const count = 3;\nlet label = \"clear\";\nconsole.log(typeof count);\nconsole.log(label);\n/// trace_path",
          "output": "number\nclear",
          "lineNotes": [
            "const は再代入しない変数に使う。",
            "typeof は値の型を文字列で返す。"
          ],
          "stateTrace": [
            "1. const は再代入しない変数に使う。",
            "2. typeof は値の型を文字列で返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 変数と型では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 変数と型では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 変数と型では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const count = 3;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const count = 3;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-variables-types-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-variables-types-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-variables-types-03-restored",
        "title": "変数と型 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const count = 3;\nlet label = \"clear\";\nconsole.log(typeof count);\nconsole.log(label);\n/// mistake_path",
          "output": "number\nclear",
          "lineNotes": [
            "const は再代入しない変数に使う。",
            "typeof は値の型を文字列で返す。"
          ],
          "stateTrace": [
            "1. const は再代入しない変数に使う。",
            "2. typeof は値の型を文字列で返す。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 変数と型では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 変数と型では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 変数と型では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const count = 3;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const count = 3;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-variables-types-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-variables-types-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "variables"
    ]
  },
  {
    "id": "js-functions",
    "language": "javascript",
    "title": "関数",
    "level": "basic",
    "parentId": "js-variables-types",
    "prerequisites": [
      "js-variables-types"
    ],
    "aliases": [
      "function",
      "return"
    ],
    "summary": "関数を、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-functions-basic",
        "title": "関数の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "function addBonus(score) {\n  return score + 10;\n}\nconsole.log(addBonus(80));",
          "output": "90",
          "lineNotes": [
            "function で処理に名前を付ける。",
            "return の値が呼び出し式の結果になる。"
          ],
          "stateTrace": [
            "1. function で処理に名前を付ける。",
            "2. return の値が呼び出し式の結果になる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 関数では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 関数では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 関数では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "function addBonus(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "function addBonus(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "js-functions-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-functions-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-functions-02-restored",
        "title": "関数 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "function addBonus(score) {\n  return score + 10;\n}\nconsole.log(addBonus(80));\n/// trace_path",
          "output": "90",
          "lineNotes": [
            "function で処理に名前を付ける。",
            "return の値が呼び出し式の結果になる。"
          ],
          "stateTrace": [
            "1. function で処理に名前を付ける。",
            "2. return の値が呼び出し式の結果になる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 関数では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 関数では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 関数では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "function addBonus(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "function addBonus(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "js-functions-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-functions-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-functions-03-restored",
        "title": "関数 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "function addBonus(score) {\n  return score + 10;\n}\nconsole.log(addBonus(80));\n/// mistake_path",
          "output": "90",
          "lineNotes": [
            "function で処理に名前を付ける。",
            "return の値が呼び出し式の結果になる。"
          ],
          "stateTrace": [
            "1. function で処理に名前を付ける。",
            "2. return の値が呼び出し式の結果になる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 関数では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 関数では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 関数では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "function addBonus(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "function addBonus(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "js-functions-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-functions-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "functions"
    ]
  },
  {
    "id": "js-arrays",
    "language": "javascript",
    "title": "配列",
    "level": "basic",
    "parentId": "js-functions",
    "prerequisites": [
      "js-variables-types",
      "js-functions"
    ],
    "aliases": [
      "arrays",
      "lists-arrays"
    ],
    "summary": "配列を、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-arrays-basic",
        "title": "配列の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const items = [\"decode\", \"execute\"];\nconst next = [...items, \"debug\"];\nconsole.log(next[2]);\nconsole.log(next.length);",
          "output": "debug\n3",
          "lineNotes": [
            "配列の番号は0から始まる。",
            "...items は既存の要素を展開する。"
          ],
          "stateTrace": [
            "1. 配列の番号は0から始まる。",
            "2. ...items は既存の要素を展開する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const items = [\"decode\", \"execute\"];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const items = [\"decode\", \"execute\"];"
          }
        ],
        "miniChecks": [
          {
            "id": "js-arrays-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-arrays-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-arrays-02-restored",
        "title": "配列 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const items = [\"decode\", \"execute\"];\nconst next = [...items, \"debug\"];\nconsole.log(next[2]);\nconsole.log(next.length);\n/// trace_path",
          "output": "debug\n3",
          "lineNotes": [
            "配列の番号は0から始まる。",
            "...items は既存の要素を展開する。"
          ],
          "stateTrace": [
            "1. 配列の番号は0から始まる。",
            "2. ...items は既存の要素を展開する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const items = [\"decode\", \"execute\"];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const items = [\"decode\", \"execute\"];"
          }
        ],
        "miniChecks": [
          {
            "id": "js-arrays-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-arrays-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-arrays-03-restored",
        "title": "配列 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const items = [\"decode\", \"execute\"];\nconst next = [...items, \"debug\"];\nconsole.log(next[2]);\nconsole.log(next.length);\n/// mistake_path",
          "output": "debug\n3",
          "lineNotes": [
            "配列の番号は0から始まる。",
            "...items は既存の要素を展開する。"
          ],
          "stateTrace": [
            "1. 配列の番号は0から始まる。",
            "2. ...items は既存の要素を展開する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const items = [\"decode\", \"execute\"];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const items = [\"decode\", \"execute\"];"
          }
        ],
        "miniChecks": [
          {
            "id": "js-arrays-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-arrays-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "arrays"
    ]
  },
  {
    "id": "js-objects",
    "language": "javascript",
    "title": "オブジェクト",
    "level": "basic",
    "parentId": "js-arrays",
    "prerequisites": [
      "js-variables-types",
      "js-arrays"
    ],
    "aliases": [
      "objects",
      "dicts-objects"
    ],
    "summary": "オブジェクトを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-objects-basic",
        "title": "オブジェクトの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", cleared: true };\nconsole.log(record.country);\nconsole.log(record[\"cleared\"]);",
          "output": "JP\ntrue",
          "lineNotes": [
            "ドット記法は固定のプロパティ名に向く。",
            "角かっこ記法は文字列キーを使う。"
          ],
          "stateTrace": [
            "1. ドット記法は固定のプロパティ名に向く。",
            "2. 角かっこ記法は文字列キーを使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 オブジェクトでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 オブジェクトでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 オブジェクトでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          }
        ],
        "miniChecks": [
          {
            "id": "js-objects-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-objects-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-objects-02-restored",
        "title": "オブジェクト 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", cleared: true };\nconsole.log(record.country);\nconsole.log(record[\"cleared\"]);\n/// trace_path",
          "output": "JP\ntrue",
          "lineNotes": [
            "ドット記法は固定のプロパティ名に向く。",
            "角かっこ記法は文字列キーを使う。"
          ],
          "stateTrace": [
            "1. ドット記法は固定のプロパティ名に向く。",
            "2. 角かっこ記法は文字列キーを使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 オブジェクトでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 オブジェクトでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 オブジェクトでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          }
        ],
        "miniChecks": [
          {
            "id": "js-objects-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-objects-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-objects-03-restored",
        "title": "オブジェクト 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", cleared: true };\nconsole.log(record.country);\nconsole.log(record[\"cleared\"]);\n/// mistake_path",
          "output": "JP\ntrue",
          "lineNotes": [
            "ドット記法は固定のプロパティ名に向く。",
            "角かっこ記法は文字列キーを使う。"
          ],
          "stateTrace": [
            "1. ドット記法は固定のプロパティ名に向く。",
            "2. 角かっこ記法は文字列キーを使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 オブジェクトでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 オブジェクトでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 オブジェクトでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", cleared: true };"
          }
        ],
        "miniChecks": [
          {
            "id": "js-objects-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-objects-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "objects"
    ]
  },
  {
    "id": "js-conditionals",
    "language": "javascript",
    "title": "条件分岐",
    "level": "basic",
    "parentId": "js-variables-types",
    "prerequisites": [
      "js-variables-types"
    ],
    "aliases": [
      "if",
      "else"
    ],
    "summary": "条件分岐を、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-conditionals-basic",
        "title": "条件分岐の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const score = 72;\nconst result = score >= 60 ? \"clear\" : \"retry\";\nconsole.log(result);",
          "output": "clear",
          "lineNotes": [
            "条件 ? A : B は条件が真ならA、偽ならB。",
            "短い分岐だけに使うと読みやすい。"
          ],
          "stateTrace": [
            "1. 条件 ? A : B は条件が真ならA、偽ならB。",
            "2. 短い分岐だけに使うと読みやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 条件分岐では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 条件分岐では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 条件分岐では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const score = 72;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const score = 72;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-conditionals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-conditionals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-conditionals-02-restored",
        "title": "条件分岐 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const score = 72;\nconst result = score >= 60 ? \"clear\" : \"retry\";\nconsole.log(result);\n/// trace_path",
          "output": "clear",
          "lineNotes": [
            "条件 ? A : B は条件が真ならA、偽ならB。",
            "短い分岐だけに使うと読みやすい。"
          ],
          "stateTrace": [
            "1. 条件 ? A : B は条件が真ならA、偽ならB。",
            "2. 短い分岐だけに使うと読みやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 条件分岐では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 条件分岐では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 条件分岐では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const score = 72;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const score = 72;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-conditionals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-conditionals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-conditionals-03-restored",
        "title": "条件分岐 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const score = 72;\nconst result = score >= 60 ? \"clear\" : \"retry\";\nconsole.log(result);\n/// mistake_path",
          "output": "clear",
          "lineNotes": [
            "条件 ? A : B は条件が真ならA、偽ならB。",
            "短い分岐だけに使うと読みやすい。"
          ],
          "stateTrace": [
            "1. 条件 ? A : B は条件が真ならA、偽ならB。",
            "2. 短い分岐だけに使うと読みやすい。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 条件分岐では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 条件分岐では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 条件分岐では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const score = 72;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const score = 72;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-conditionals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-conditionals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "variables"
    ]
  },
  {
    "id": "js-loops",
    "language": "javascript",
    "title": "ループ",
    "level": "basic",
    "parentId": "js-conditionals",
    "prerequisites": [
      "js-conditionals",
      "js-arrays"
    ],
    "aliases": [
      "for",
      "while"
    ],
    "summary": "ループを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "js-loops-basic",
        "title": "ループの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "let total = 0;\nfor (const value of [2, 4, 6]) {\n  total += value;\n}\nconsole.log(total);",
          "output": "12",
          "lineNotes": [
            "for...of は配列の値を1つずつ読む。",
            "let は合計のように更新する変数に使う。"
          ],
          "stateTrace": [
            "1. for...of は配列の値を1つずつ読む。",
            "2. let は合計のように更新する変数に使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ループでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ループでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ループでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "let total = 0;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "let total = 0;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-loops-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-loops-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-loops-02-restored",
        "title": "ループ 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "let total = 0;\nfor (const value of [2, 4, 6]) {\n  total += value;\n}\nconsole.log(total);\n/// trace_path",
          "output": "12",
          "lineNotes": [
            "for...of は配列の値を1つずつ読む。",
            "let は合計のように更新する変数に使う。"
          ],
          "stateTrace": [
            "1. for...of は配列の値を1つずつ読む。",
            "2. let は合計のように更新する変数に使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ループでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ループでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ループでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "let total = 0;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "let total = 0;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-loops-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-loops-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "js-loops-03-restored",
        "title": "ループ 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "let total = 0;\nfor (const value of [2, 4, 6]) {\n  total += value;\n}\nconsole.log(total);\n/// mistake_path",
          "output": "12",
          "lineNotes": [
            "for...of は配列の値を1つずつ読む。",
            "let は合計のように更新する変数に使う。"
          ],
          "stateTrace": [
            "1. for...of は配列の値を1つずつ読む。",
            "2. let は合計のように更新する変数に使う。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ループでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ループでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ループでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "let total = 0;"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "let total = 0;"
          }
        ],
        "miniChecks": [
          {
            "id": "js-loops-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "js-loops-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "arrays"
    ]
  },
  {
    "id": "array-methods",
    "language": "javascript",
    "title": "配列メソッド",
    "level": "advanced",
    "parentId": "js-arrays",
    "prerequisites": [
      "js-arrays",
      "js-functions"
    ],
    "aliases": [
      "map",
      "filter",
      "reduce"
    ],
    "summary": "配列メソッドを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "array-methods-basic",
        "title": "配列メソッドの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const scores = [55, 80, 92];\nconst passed = scores.filter(score => score >= 70);\nconst labels = passed.map(score => `${score}pt`);\nconsole.log(labels.join(\", \"));",
          "output": "80pt, 92pt",
          "lineNotes": [
            "filter は残す条件を書く。",
            "map は各要素を別の形へ変換する。"
          ],
          "stateTrace": [
            "1. filter は残す条件を書く。",
            "2. map は各要素を別の形へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列メソッドでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列メソッドでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列メソッドでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const scores = [55, 80, 92];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const scores = [55, 80, 92];"
          }
        ],
        "miniChecks": [
          {
            "id": "array-methods-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "array-methods-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "array-methods-02-restored",
        "title": "配列メソッド 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const scores = [55, 80, 92];\nconst passed = scores.filter(score => score >= 70);\nconst labels = passed.map(score => `${score}pt`);\nconsole.log(labels.join(\", \"));\n/// trace_path",
          "output": "80pt, 92pt",
          "lineNotes": [
            "filter は残す条件を書く。",
            "map は各要素を別の形へ変換する。"
          ],
          "stateTrace": [
            "1. filter は残す条件を書く。",
            "2. map は各要素を別の形へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列メソッドでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列メソッドでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列メソッドでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const scores = [55, 80, 92];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const scores = [55, 80, 92];"
          }
        ],
        "miniChecks": [
          {
            "id": "array-methods-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "array-methods-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "array-methods-03-restored",
        "title": "配列メソッド 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const scores = [55, 80, 92];\nconst passed = scores.filter(score => score >= 70);\nconst labels = passed.map(score => `${score}pt`);\nconsole.log(labels.join(\", \"));\n/// mistake_path",
          "output": "80pt, 92pt",
          "lineNotes": [
            "filter は残す条件を書く。",
            "map は各要素を別の形へ変換する。"
          ],
          "stateTrace": [
            "1. filter は残す条件を書く。",
            "2. map は各要素を別の形へ変換する。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 配列メソッドでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 配列メソッドでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 配列メソッドでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const scores = [55, 80, 92];"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const scores = [55, 80, 92];"
          }
        ],
        "miniChecks": [
          {
            "id": "array-methods-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "array-methods-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "arrays"
    ]
  },
  {
    "id": "destructuring",
    "language": "javascript",
    "title": "分割代入",
    "level": "advanced",
    "parentId": "js-objects",
    "prerequisites": [
      "js-arrays",
      "js-objects"
    ],
    "aliases": [
      "destructure"
    ],
    "summary": "分割代入を、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "destructuring-basic",
        "title": "分割代入の基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", language: \"javascript\" };\nconst { country, language } = record;\nconsole.log(`${country}:${language}`);",
          "output": "JP:javascript",
          "lineNotes": [
            "オブジェクトのプロパティ名と同じ変数を作る。",
            "必要な値だけ取り出せる。"
          ],
          "stateTrace": [
            "1. オブジェクトのプロパティ名と同じ変数を作る。",
            "2. 必要な値だけ取り出せる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 分割代入では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 分割代入では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 分割代入では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          }
        ],
        "miniChecks": [
          {
            "id": "destructuring-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "destructuring-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "destructuring-02-restored",
        "title": "分割代入 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", language: \"javascript\" };\nconst { country, language } = record;\nconsole.log(`${country}:${language}`);\n/// trace_path",
          "output": "JP:javascript",
          "lineNotes": [
            "オブジェクトのプロパティ名と同じ変数を作る。",
            "必要な値だけ取り出せる。"
          ],
          "stateTrace": [
            "1. オブジェクトのプロパティ名と同じ変数を作る。",
            "2. 必要な値だけ取り出せる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 分割代入では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 分割代入では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 分割代入では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          }
        ],
        "miniChecks": [
          {
            "id": "destructuring-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "destructuring-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "destructuring-03-restored",
        "title": "分割代入 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const record = { country: \"JP\", language: \"javascript\" };\nconst { country, language } = record;\nconsole.log(`${country}:${language}`);\n/// mistake_path",
          "output": "JP:javascript",
          "lineNotes": [
            "オブジェクトのプロパティ名と同じ変数を作る。",
            "必要な値だけ取り出せる。"
          ],
          "stateTrace": [
            "1. オブジェクトのプロパティ名と同じ変数を作る。",
            "2. 必要な値だけ取り出せる。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 分割代入では、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 分割代入では、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 分割代入では、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const record = { country: \"JP\", language: \"javascript\" };"
          }
        ],
        "miniChecks": [
          {
            "id": "destructuring-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "destructuring-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "objects"
    ]
  },
  {
    "id": "template-literals",
    "language": "javascript",
    "title": "テンプレートリテラル",
    "level": "advanced",
    "parentId": "js-variables-types",
    "prerequisites": [
      "js-variables-types"
    ],
    "aliases": [
      "template-string"
    ],
    "summary": "テンプレートリテラルを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "template-literals-basic",
        "title": "テンプレートリテラルの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const country = \"JP\";\nconst score = 3;\nconsole.log(`${country} has ${score} clears`);",
          "output": "JP has 3 clears",
          "lineNotes": [
            "バッククォートで囲む。",
            "${...} の中に式を書ける。"
          ],
          "stateTrace": [
            "1. バッククォートで囲む。",
            "2. ${...} の中に式を書ける。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 テンプレートリテラルでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 テンプレートリテラルでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 テンプレートリテラルでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const country = \"JP\";"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const country = \"JP\";"
          }
        ],
        "miniChecks": [
          {
            "id": "template-literals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "template-literals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "template-literals-02-restored",
        "title": "テンプレートリテラル 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const country = \"JP\";\nconst score = 3;\nconsole.log(`${country} has ${score} clears`);\n/// trace_path",
          "output": "JP has 3 clears",
          "lineNotes": [
            "バッククォートで囲む。",
            "${...} の中に式を書ける。"
          ],
          "stateTrace": [
            "1. バッククォートで囲む。",
            "2. ${...} の中に式を書ける。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 テンプレートリテラルでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 テンプレートリテラルでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 テンプレートリテラルでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const country = \"JP\";"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const country = \"JP\";"
          }
        ],
        "miniChecks": [
          {
            "id": "template-literals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "template-literals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "template-literals-03-restored",
        "title": "テンプレートリテラル 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "const country = \"JP\";\nconst score = 3;\nconsole.log(`${country} has ${score} clears`);\n/// mistake_path",
          "output": "JP has 3 clears",
          "lineNotes": [
            "バッククォートで囲む。",
            "${...} の中に式を書ける。"
          ],
          "stateTrace": [
            "1. バッククォートで囲む。",
            "2. ${...} の中に式を書ける。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 テンプレートリテラルでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 テンプレートリテラルでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 テンプレートリテラルでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "const country = \"JP\";"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "const country = \"JP\";"
          }
        ],
        "miniChecks": [
          {
            "id": "template-literals-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "template-literals-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "variables"
    ]
  },
  {
    "id": "async-promises",
    "language": "javascript",
    "title": "非同期とPromise",
    "level": "advanced",
    "parentId": "js-functions",
    "prerequisites": [
      "js-functions"
    ],
    "aliases": [
      "async",
      "promise"
    ],
    "summary": "非同期とPromiseを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "async-promises-basic",
        "title": "非同期とPromiseの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "async function loadScore() {\n  return 90;\n}\nloadScore().then(score => console.log(score));",
          "output": "90",
          "lineNotes": [
            "async 関数は Promise を返す。",
            "then は成功した結果を受け取る。"
          ],
          "stateTrace": [
            "1. async 関数は Promise を返す。",
            "2. then は成功した結果を受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 非同期とPromiseでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 非同期とPromiseでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 非同期とPromiseでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "async function loadScore() {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "async function loadScore() {"
          }
        ],
        "miniChecks": [
          {
            "id": "async-promises-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "async-promises-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "async-promises-02-restored",
        "title": "非同期とPromise 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "async function loadScore() {\n  return 90;\n}\nloadScore().then(score => console.log(score));\n/// trace_path",
          "output": "90",
          "lineNotes": [
            "async 関数は Promise を返す。",
            "then は成功した結果を受け取る。"
          ],
          "stateTrace": [
            "1. async 関数は Promise を返す。",
            "2. then は成功した結果を受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 非同期とPromiseでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 非同期とPromiseでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 非同期とPromiseでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "async function loadScore() {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "async function loadScore() {"
          }
        ],
        "miniChecks": [
          {
            "id": "async-promises-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "async-promises-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "async-promises-03-restored",
        "title": "非同期とPromise 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "async function loadScore() {\n  return 90;\n}\nloadScore().then(score => console.log(score));\n/// mistake_path",
          "output": "90",
          "lineNotes": [
            "async 関数は Promise を返す。",
            "then は成功した結果を受け取る。"
          ],
          "stateTrace": [
            "1. async 関数は Promise を返す。",
            "2. then は成功した結果を受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 非同期とPromiseでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 非同期とPromiseでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 非同期とPromiseでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "async function loadScore() {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "async function loadScore() {"
          }
        ],
        "miniChecks": [
          {
            "id": "async-promises-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "async-promises-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "async"
    ]
  },
  {
    "id": "es-modules",
    "language": "javascript",
    "title": "ES Modules",
    "level": "advanced",
    "parentId": "js-functions",
    "prerequisites": [
      "js-functions"
    ],
    "aliases": [
      "import",
      "export"
    ],
    "summary": "ES Modulesを、JavaScript の小さなコードで確認します。",
    "pages": [
      {
        "id": "es-modules-basic",
        "title": "ES Modulesの基本",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "export function formatScore(score) {\n  return `${score}pt`;\n}\n// another file: import { formatScore } from \"./score.js\"",
          "output": "",
          "lineNotes": [
            "export は外へ公開する。",
            "import は別ファイルから受け取る。"
          ],
          "stateTrace": [
            "1. export は外へ公開する。",
            "2. import は別ファイルから受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ES Modulesでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ES Modulesでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ES Modulesでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "export function formatScore(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "export function formatScore(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "es-modules-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "es-modules-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "es-modules-02-restored",
        "title": "ES Modules 2",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "export function formatScore(score) {\n  return `${score}pt`;\n}\n// another file: import { formatScore } from \"./score.js\"\n/// trace_path",
          "output": "",
          "lineNotes": [
            "export は外へ公開する。",
            "import は別ファイルから受け取る。"
          ],
          "stateTrace": [
            "1. export は外へ公開する。",
            "2. import は別ファイルから受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ES Modulesでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ES Modulesでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ES Modulesでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "export function formatScore(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "export function formatScore(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "es-modules-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "es-modules-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      },
      {
        "id": "es-modules-03-restored",
        "title": "ES Modules 3",
        "summary": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。",
        "minimalExample": {
          "code": "export function formatScore(score) {\n  return `${score}pt`;\n}\n// another file: import { formatScore } from \"./score.js\"\n/// mistake_path",
          "output": "",
          "lineNotes": [
            "export は外へ公開する。",
            "import は別ファイルから受け取る。"
          ],
          "stateTrace": [
            "1. export は外へ公開する。",
            "2. import は別ファイルから受け取る。"
          ]
        },
        "worldExamples": {
          "decode": "DECODEでは、書かれた形が何を意味するかを読む。 ES Modulesでは、記号やキーワードの意味を先に確認する。",
          "execute": "EXECUTEでは、値の変化を順番に追う。 ES Modulesでは、代入後の値をメモして追う。",
          "debug": "DEBUGでは、起きた不具合、直し方、理由を分けて考える。 ES Modulesでは、期待値と実際の値がずれた行を探す。"
        },
        "commonMistakes": [
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "JavaScript の記号だけを覚えて、値がどう変わるかを追わない。",
            "correct": "export function formatScore(score) {"
          },
          {
            "wrong": "結果だけを暗記してコードを読まない",
            "reason": "例の中でまだ学んでいない処理を同時に読み始める。",
            "correct": "export function formatScore(score) {"
          }
        ],
        "miniChecks": [
          {
            "id": "es-modules-check-1",
            "prompt": "この例で最後に表示される値はどこで決まりますか。",
            "answer": "print / console.log に渡した式で決まる。"
          },
          {
            "id": "es-modules-check-2",
            "prompt": "値が変わる行はどれですか。",
            "answer": "代入、追加、更新をしている行を探す。"
          }
        ],
        "details": "最初は1つの新しい考えだけに絞ります。コード、出力、値の変化を分けて読みます。"
      }
    ],
    "relatedConceptIds": [
      "functions"
    ]
  }
];

export const REFERENCE_TOPIC_ALIASES = {
  "variables": "variables-types",
  "variables_advanced": "variables-types-advanced",
  "data-types": "variables-types",
  "lists": "lists-arrays",
  "dicts": "dicts-objects",
  "classes": "classes-objects",
  "comprehension": "comprehensions",
  "conditions": "conditionals",
  "typehints": "variables-types-advanced",
  "type-hints": "variables-types-advanced",
  "arrays": "js-arrays",
  "objects": "js-objects",
  "async": "async-promises"
};

export const REFERENCE_RESTORE_AUDIT = [
  {
    "topicId": "variables-types",
    "oldTopicId": "variables",
    "oldPages": 6,
    "currentPages": 1,
    "finalPages": 5,
    "restoredSections": [
      "変数とは？",
      "データ型の種類",
      "型の変換",
      "変数の命名ルール",
      "複数代入と値のスワップ"
    ],
    "intentionallyRemovedDuplicates": [
      "scope section moved to scope"
    ]
  },
  {
    "topicId": "variables-types-advanced",
    "oldTopicId": "variables_advanced",
    "oldPages": 3,
    "currentPages": 0,
    "finalPages": 3,
    "restoredSections": [
      "型アノテーション（型ヒント）",
      "isinstance で型を確認する",
      "定数の扱い方"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "functions",
    "oldTopicId": "functions",
    "oldPages": 7,
    "currentPages": 1,
    "finalPages": 6,
    "restoredSections": [
      "関数の定義と呼び出し",
      "引数の種類",
      "戻り値とreturn",
      "ラムダ関数",
      "デコレータ",
      "ジェネレータ関数"
    ],
    "intentionallyRemovedDuplicates": [
      "scope section moved to scope"
    ]
  },
  {
    "topicId": "scope",
    "oldTopicId": "variables/functions",
    "oldPages": 0,
    "currentPages": 6,
    "finalPages": 6,
    "restoredSections": [
      "グローバル変数とローカル変数",
      "スコープとクロージャ",
      "globalで変更する",
      "returnで返す代替案",
      "よくある間違い",
      "確認問題"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "strings",
    "oldTopicId": "strings",
    "oldPages": 6,
    "currentPages": 1,
    "finalPages": 6,
    "restoredSections": [
      "文字列の基本",
      "f文字列（フォーマット）",
      "インデックスとスライス",
      "よく使うメソッド",
      "文字列と数値の注意点",
      "正規表現の基本（re モジュール）"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "operators",
    "oldTopicId": "operators",
    "oldPages": 5,
    "currentPages": 1,
    "finalPages": 5,
    "restoredSections": [
      "算術演算子",
      "代入演算子",
      "比較演算子",
      "論理演算子",
      "その他の便利な演算子"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "conditionals",
    "oldTopicId": "conditionals",
    "oldPages": 5,
    "currentPages": 1,
    "finalPages": 5,
    "restoredSections": [
      "if 文の基本",
      "if / elif / else",
      "三項演算子（条件式）",
      "Truthyと Falsy",
      "match 文（Python 3.10+）"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "loops",
    "oldTopicId": "loops",
    "oldPages": 5,
    "currentPages": 1,
    "finalPages": 5,
    "restoredSections": [
      "for ループの基本",
      "enumerate と zip",
      "while ループ",
      "break / continue / else",
      "リスト内包表記"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "lists-arrays",
    "oldTopicId": "lists",
    "oldPages": 4,
    "currentPages": 1,
    "finalPages": 4,
    "restoredSections": [
      "リストの基本",
      "リストの変更",
      "リストの便利な操作",
      "タプルとの違い"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "dicts-objects",
    "oldTopicId": "dicts",
    "oldPages": 4,
    "currentPages": 1,
    "finalPages": 4,
    "restoredSections": [
      "辞書の基本",
      "辞書のループ処理",
      "ネストした辞書",
      "便利なメソッドとパターン"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "classes-objects",
    "oldTopicId": "classes",
    "oldPages": 6,
    "currentPages": 1,
    "finalPages": 6,
    "restoredSections": [
      "クラスの基本",
      "クラス変数とインスタンス変数",
      "継承",
      "特殊メソッド（マジックメソッド）",
      "dataclass で定型クラスを簡潔に書く",
      "プロパティ（getter / setter）"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "errors",
    "oldTopicId": "errors",
    "oldPages": 6,
    "currentPages": 1,
    "finalPages": 6,
    "restoredSections": [
      "エラーの種類",
      "try-except の基本",
      "finally と else",
      "raise で例外を発生させる",
      "コンテキストマネージャ（with 文）",
      "よくあるエラーのデバッグ方法"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "modules",
    "oldTopicId": "modules",
    "oldPages": 5,
    "currentPages": 1,
    "finalPages": 5,
    "restoredSections": [
      "import の使い方",
      "よく使う標準ライブラリ",
      "pip でパッケージをインストール",
      "よく使う標準ライブラリ（応用）",
      "モジュールの作り方"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "comprehensions",
    "oldTopicId": "comprehensions",
    "oldPages": 4,
    "currentPages": 1,
    "finalPages": 4,
    "restoredSections": [
      "リスト内包表記の応用",
      "辞書・集合の内包表記",
      "map / filter / reduce",
      "zip と enumerate の応用"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "sets",
    "oldTopicId": "sets",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "セットの基本",
      "セット 2",
      "セット 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "sorting-filtering",
    "oldTopicId": "sorting-filtering",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "並べ替えと絞り込みの基本",
      "並べ替えと絞り込み 2",
      "並べ替えと絞り込み 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "regex",
    "oldTopicId": "regex",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "正規表現の基本",
      "正規表現 2",
      "正規表現 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "date-time",
    "oldTopicId": "date-time",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "日付と時刻の基本",
      "日付と時刻 2",
      "日付と時刻 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "unicode-normalization",
    "oldTopicId": "unicode-normalization",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "Unicode正規化の基本",
      "Unicode正規化 2",
      "Unicode正規化 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "json",
    "oldTopicId": "json",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "JSONの基本",
      "JSON 2",
      "JSON 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "type-hints",
    "oldTopicId": "type-hints",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "型ヒントの基本",
      "型ヒント 2",
      "型ヒント 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "unpacking",
    "oldTopicId": "unpacking",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "アンパックの基本",
      "アンパック 2",
      "アンパック 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "iterators-generators",
    "oldTopicId": "iterators-generators",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "イテレータとジェネレータの基本",
      "イテレータとジェネレータ 2",
      "イテレータとジェネレータ 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-variables-types",
    "oldTopicId": "js-variables-types",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "変数と型の基本",
      "変数と型 2",
      "変数と型 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-functions",
    "oldTopicId": "js-functions",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "関数の基本",
      "関数 2",
      "関数 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-arrays",
    "oldTopicId": "js-arrays",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "配列の基本",
      "配列 2",
      "配列 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-objects",
    "oldTopicId": "js-objects",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "オブジェクトの基本",
      "オブジェクト 2",
      "オブジェクト 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-conditionals",
    "oldTopicId": "js-conditionals",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "条件分岐の基本",
      "条件分岐 2",
      "条件分岐 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "js-loops",
    "oldTopicId": "js-loops",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "ループの基本",
      "ループ 2",
      "ループ 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "array-methods",
    "oldTopicId": "array-methods",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "配列メソッドの基本",
      "配列メソッド 2",
      "配列メソッド 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "destructuring",
    "oldTopicId": "destructuring",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "分割代入の基本",
      "分割代入 2",
      "分割代入 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "template-literals",
    "oldTopicId": "template-literals",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "テンプレートリテラルの基本",
      "テンプレートリテラル 2",
      "テンプレートリテラル 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "async-promises",
    "oldTopicId": "async-promises",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "非同期とPromiseの基本",
      "非同期とPromise 2",
      "非同期とPromise 3"
    ],
    "intentionallyRemovedDuplicates": []
  },
  {
    "topicId": "es-modules",
    "oldTopicId": "es-modules",
    "oldPages": 0,
    "currentPages": 1,
    "finalPages": 3,
    "restoredSections": [
      "ES Modulesの基本",
      "ES Modules 2",
      "ES Modules 3"
    ],
    "intentionallyRemovedDuplicates": []
  }
];

export function resolveReferenceTopicId(id) {
  return REFERENCE_TOPIC_ALIASES[id] || id;
}

export const PYTHON_REFERENCE = REFERENCE_TOPICS.filter(topic => topic.language === 'python');
