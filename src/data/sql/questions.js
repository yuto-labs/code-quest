export const SQL_QUESTIONS = [
  {
    "id": "sql01_d01",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 1,
    "mode": "decode",
    "title": "国連専門機関",
    "prompt": "国連専門機関を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「name」です。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___\nFROM international_organizations;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "name"
        ]
      ]
    },
    "answer": "name",
    "hint": "RESULT に出したい値は name です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "name",
      "completedQuery": "SELECT name\nFROM international_organizations;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の select-one-column に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "name"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "select-one-column は SELECT の基本 の練習です。正式名称列nameを取得 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "UNESCOやWHOなど、国連には特定の分野を専門に扱う「専門機関」が複数存在します。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "select-from"
    ],
    "globalFactIds": [
      "gf_sql01_d01"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "basic",
    "progressionGroupId": "sql-ch01-organizations"
  },
  {
    "id": "sql01_d02",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 2,
    "mode": "decode",
    "title": "ノーベル賞部門と授賞都市",
    "prompt": "ノーベル賞部門と授賞都市を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「category, ceremony_city」です。",
    "tables": [
      {
        "id": "nobel_categories",
        "columns": [
          "category",
          "ceremony_city",
          "started_year"
        ],
        "rows": [
          [
            "Physics",
            "Stockholm",
            1901
          ],
          [
            "Peace",
            "Oslo",
            1901
          ],
          [
            "Literature",
            "Stockholm",
            1901
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___\nFROM nobel_categories;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "category, ceremony_city"
        ]
      ]
    },
    "answer": "category, ceremony_city",
    "hint": "RESULT に出したい値は category, ceremony_city です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "category, ceremony_city",
      "completedQuery": "SELECT category, ceremony_city\nFROM nobel_categories;",
      "executionSteps": [
        "1. TABLE nobel_categories の列名を確認します。",
        "2. QUERY の select-multiple-columns に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "category, ceremony_city"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "select-multiple-columns は SELECT の基本 の練習です。category,ceremony_cityの順 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "ノーベル賞には物理学・化学・生理学医学・文学・平和・経済学の6部門があり、授賞式の開催都市も部門によって異なります。",
      "sourceRefs": [
        {
          "title": "Nobel Prize categories",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/"
        }
      ]
    },
    "sqlConceptIds": [
      "aliases"
    ],
    "globalFactIds": [
      "gf_sql01_d02"
    ],
    "datasetIds": [
      "nobel_categories"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql01_d03",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 3,
    "mode": "decode",
    "title": "世界の五海洋",
    "prompt": "世界の五海洋を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「ocean_basins」です。",
    "tables": [
      {
        "id": "ocean_basins",
        "columns": [
          "name",
          "largest"
        ],
        "rows": [
          [
            "Pacific Ocean",
            true
          ],
          [
            "Atlantic Ocean",
            false
          ],
          [
            "Indian Ocean",
            false
          ],
          [
            "Southern Ocean",
            false
          ],
          [
            "Arctic Ocean",
            false
          ]
        ]
      }
    ],
    "query": "SELECT name\nFROM ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "ocean_basins"
        ]
      ]
    },
    "answer": "ocean_basins",
    "hint": "RESULT に出したい値は ocean_basins です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "ocean_basins",
      "completedQuery": "SELECT name\nFROM ocean_basins;",
      "executionSteps": [
        "1. TABLE ocean_basins の列名を確認します。",
        "2. QUERY の from-table に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "ocean_basins"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "from-table は SELECT の基本 の練習です。name列の取得元を指定 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の海洋は太平洋・大西洋・インド洋・南極海・北極海の5つに区分されます。",
      "sourceRefs": [
        {
          "title": "NOAA Ocean facts",
          "organization": "NOAA",
          "url": "https://oceanservice.noaa.gov/facts/howmanyoceans.html"
        }
      ]
    },
    "sqlConceptIds": [
      "database-table-row-column"
    ],
    "globalFactIds": [
      "gf_sql01_d03"
    ],
    "datasetIds": [
      "ocean_basins"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql01_e01",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 4,
    "mode": "execute",
    "title": "世界遺産の名称と分類",
    "prompt": "世界遺産の名称と分類を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "SELECT SELECT name,categoryの結果表\nFROM heritage_sites;",
    "expectedResult": {
      "columns": [
        "id",
        "country_id"
      ],
      "rows": [
        [
          1,
          "JP"
        ],
        [
          2,
          "US"
        ],
        [
          3,
          "FR"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "id",
            "country_id"
          ],
          "rows": [
            [
              3,
              "FR"
            ],
            [
              2,
              "US"
            ],
            [
              1,
              "JP"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "id",
            "country_id"
          ],
          "rows": [
            [
              1,
              "JP"
            ],
            [
              2,
              "US"
            ],
            [
              3,
              "FR"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "id",
            "country_id"
          ],
          "rows": [
            [
              1,
              "JP"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT SELECT name,categoryの結果表\nFROM heritage_sites;",
      "executionSteps": [
        "1. TABLE heritage_sites の列名を確認します。",
        "2. QUERY の projection に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT SELECT name,categoryの結果表\nFROM heritage_sites;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "projection は SELECT の基本 の練習です。SELECT name,categoryの結果表 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界遺産はユネスコによって登録される、人類が共有すべき価値を持つ文化財や自然環境です。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "select-from"
    ],
    "globalFactIds": [
      "gf_sql01_e01"
    ],
    "datasetIds": [
      "heritage_sites"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql01_e02",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 5,
    "mode": "execute",
    "title": "国連公用語",
    "prompt": "国連公用語を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "un_official_languages",
        "columns": [
          "language",
          "native_name",
          "family"
        ],
        "rows": [
          [
            "Arabic",
            "العربية",
            "Afro-Asiatic"
          ],
          [
            "Chinese",
            "中文",
            "Sino-Tibetan"
          ],
          [
            "English",
            "English",
            "Indo-European"
          ],
          [
            "French",
            "français",
            "Indo-European"
          ]
        ]
      }
    ],
    "query": "SELECT native_name,language順を追跡\nFROM un_official_languages;",
    "expectedResult": {
      "columns": [
        "language",
        "native_name"
      ],
      "rows": [
        [
          "Arabic",
          "العربية"
        ],
        [
          "Chinese",
          "中文"
        ],
        [
          "English",
          "English"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "language",
            "native_name"
          ],
          "rows": [
            [
              "English",
              "English"
            ],
            [
              "Chinese",
              "中文"
            ],
            [
              "Arabic",
              "العربية"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "language",
            "native_name"
          ],
          "rows": [
            [
              "Arabic",
              "العربية"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "language",
            "native_name"
          ],
          "rows": [
            [
              "Arabic",
              "العربية"
            ],
            [
              "Chinese",
              "中文"
            ],
            [
              "English",
              "English"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT native_name,language順を追跡\nFROM un_official_languages;",
      "executionSteps": [
        "1. TABLE un_official_languages の列名を確認します。",
        "2. QUERY の column-order に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT native_name,language順を追跡\nFROM un_official_languages;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "column-order は SELECT の基本 の練習です。native_name,language順を追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国連の公用語は英語・フランス語・スペイン語・ロシア語・中国語・アラビア語の6言語です。",
      "sourceRefs": [
        {
          "title": "United Nations official languages",
          "organization": "United",
          "url": "https://www.un.org/en/our-work/official-languages"
        }
      ]
    },
    "sqlConceptIds": [
      "aliases"
    ],
    "globalFactIds": [
      "gf_sql01_e02"
    ],
    "datasetIds": [
      "un_official_languages"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql01_e03",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 6,
    "mode": "execute",
    "title": "宇宙探査計画",
    "prompt": "宇宙探査計画を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "space_missions",
        "columns": [
          "mission",
          "agency",
          "launch_year",
          "priority",
          "target"
        ],
        "rows": [
          [
            "Sputnik 1",
            "Soviet space program",
            1957,
            1,
            "Earth orbit"
          ],
          [
            "Apollo 11",
            "NASA",
            1969,
            2,
            "Moon"
          ],
          [
            "Voyager 1",
            "NASA",
            1977,
            3,
            "Outer Solar System"
          ],
          [
            "Hayabusa2",
            "JAXA",
            2014,
            4,
            "Ryugu"
          ]
        ]
      }
    ],
    "query": "SELECT mission AS mission_name\nFROM space_missions;",
    "expectedResult": {
      "columns": [
        "mission",
        "agency"
      ],
      "rows": [
        [
          "Sputnik 1",
          "Soviet space program"
        ],
        [
          "Apollo 11",
          "NASA"
        ],
        [
          "Voyager 1",
          "NASA"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Voyager 1",
              "NASA"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Voyager 1",
              "NASA"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT mission AS mission_name\nFROM space_missions;",
      "executionSteps": [
        "1. TABLE space_missions の列名を確認します。",
        "2. QUERY の column-alias に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT mission AS mission_name\nFROM space_missions;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "column-alias は SELECT の基本 の練習です。mission AS mission_name を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "NASAは月面着陸を実現したアポロ計画をはじめ、数多くの宇宙探査計画を実施してきたアメリカの宇宙機関です。",
      "sourceRefs": [
        {
          "title": "NASA missions",
          "organization": "NASA",
          "url": "https://www.nasa.gov/missions/"
        }
      ]
    },
    "sqlConceptIds": [
      "database-table-row-column"
    ],
    "globalFactIds": [
      "gf_sql01_e03"
    ],
    "datasetIds": [
      "space_missions"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql01_b01",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 7,
    "mode": "debug",
    "title": "WHO設立",
    "prompt": "WHO設立を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "health_organizations",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "health_organizations alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "health_organizations beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "health_organizations gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "health_organizations delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name, founded\nFROM health_organizations;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "health_organizations alpha",
          "history"
        ],
        [
          "health_organizations beta",
          "science"
        ],
        [
          "health_organizations gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "health_organizations alpha",
              "history"
            ],
            [
              "health_organizations beta",
              "science"
            ],
            [
              "health_organizations gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "health_organizations gamma",
              "culture"
            ],
            [
              "health_organizations beta",
              "science"
            ],
            [
              "health_organizations alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "health_organizations alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT name, founded_year\nFROM health_organizations;",
      "executionSteps": [
        "1. TABLE health_organizations の列名を確認します。",
        "2. QUERY の invalid-column に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT name, founded_year\nFROM health_organizations;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "invalid-column は SELECT の基本 の練習です。founded→founded_year を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "WHO（世界保健機関）は1948年に設立された、保健分野を専門とする国連の専門機関です。",
      "sourceRefs": [
        {
          "title": "WHO about",
          "organization": "WHO",
          "url": "https://www.who.int/about"
        }
      ]
    },
    "sqlConceptIds": [
      "select-from"
    ],
    "globalFactIds": [
      "gf_sql01_b01"
    ],
    "datasetIds": [
      "health_organizations"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT name, founded_year\nFROM health_organizations;",
          "SELECT name, founded\nFROM health_organizations;",
          "SELECT *;"
        ],
        "answer": "SELECT name, founded_year\nFROM health_organizations;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql01_b02",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 8,
    "mode": "debug",
    "title": "World Wide Web誕生",
    "prompt": "World Wide Web誕生を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "technology_milestones",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "technology_milestones alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "technology_milestones beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "technology_milestones gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "technology_milestones delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name, year;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "technology_milestones alpha",
          "history"
        ],
        [
          "technology_milestones beta",
          "science"
        ],
        [
          "technology_milestones gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "technology_milestones alpha",
              "history"
            ],
            [
              "technology_milestones beta",
              "science"
            ],
            [
              "technology_milestones gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "technology_milestones gamma",
              "culture"
            ],
            [
              "technology_milestones beta",
              "science"
            ],
            [
              "technology_milestones alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "technology_milestones alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT name, year\nFROM technology_milestones;",
      "executionSteps": [
        "1. TABLE technology_milestones の列名を確認します。",
        "2. QUERY の missing-from に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT name, year\nFROM technology_milestones;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "missing-from は SELECT の基本 の練習です。FROM欠落を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "World Wide Webは、1989年にCERN（欧州原子核研究機構）の研究者ティム・バーナーズ＝リーによって考案されました。",
      "sourceRefs": [
        {
          "title": "CERN World Wide Web",
          "organization": "CERN",
          "url": "https://home.cern/science/computing/birth-web"
        }
      ]
    },
    "sqlConceptIds": [
      "aliases"
    ],
    "globalFactIds": [
      "gf_sql01_b02"
    ],
    "datasetIds": [
      "technology_milestones"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT name, year\nFROM technology_milestones;",
          "SELECT name, year;",
          "SELECT *;"
        ],
        "answer": "SELECT name, year\nFROM technology_milestones;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql01_b03",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 9,
    "mode": "debug",
    "title": "国連国際デー",
    "prompt": "国連国際デーを題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "international_days",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "international_days alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "international_days beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "international_days gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "international_days delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT 'name'\nFROM international_days;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "international_days alpha",
          "history"
        ],
        [
          "international_days beta",
          "science"
        ],
        [
          "international_days gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days alpha",
              "history"
            ],
            [
              "international_days beta",
              "science"
            ],
            [
              "international_days gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days gamma",
              "culture"
            ],
            [
              "international_days beta",
              "science"
            ],
            [
              "international_days alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT name\nFROM international_days;",
      "executionSteps": [
        "1. TABLE international_days の列名を確認します。",
        "2. QUERY の quoted-column に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT name\nFROM international_days;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "quoted-column は SELECT の基本 の練習です。'name'→name を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国連は特定のテーマへの関心を高めるため、「国際デー」と呼ばれる記念日を多数定めています。",
      "sourceRefs": [
        {
          "title": "UN Observances",
          "organization": "UN",
          "url": "https://www.un.org/en/observances"
        }
      ]
    },
    "sqlConceptIds": [
      "database-table-row-column"
    ],
    "globalFactIds": [
      "gf_sql01_b03"
    ],
    "datasetIds": [
      "international_days"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT name\nFROM international_days;",
          "SELECT 'name'\nFROM international_days;",
          "SELECT *;"
        ],
        "answer": "SELECT name\nFROM international_days;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql01_m01",
    "courseId": "sql",
    "chapterId": "01_select",
    "order": 10,
    "mode": "mission",
    "title": "国際機関の役割と本部",
    "prompt": "国際機関の役割と本部を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT org_code,name AS organization_name,headquarters\nFROM international_organizations;",
    "expectedResult": {
      "columns": [
        "org_code",
        "name"
      ],
      "rows": [
        [
          "UNESCO",
          "United Nations Educational, Scientific and Cultural Organization"
        ],
        [
          "WHO",
          "World Health Organization"
        ],
        [
          "FAO",
          "Food and Agriculture Organization"
        ],
        [
          "UNICEF",
          "United Nations Children’s Fund"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNICEF",
              "United Nations Children’s Fund"
            ],
            [
              "FAO",
              "Food and Agriculture Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "FAO",
              "Food and Agriculture Organization"
            ],
            [
              "UNICEF",
              "United Nations Children’s Fund"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT org_code,name AS organization_name,headquarters\nFROM international_organizations;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の select-multi-alias に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT org_code,name AS organization_name,headquarters\nFROM international_organizations;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "select-multi-alias は SELECT の基本 の練習です。org_code,name AS organization_name,headquarters を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際機関にはそれぞれ異なる役割と本部都市があり、設立の経緯や目的に応じて配置されています。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "select-from"
    ],
    "globalFactIds": [
      "gf_sql01_m01"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "mission",
    "progressionGroupId": "sql-ch01-organizations"
  },
  {
    "id": "sql02_d01",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 1,
    "mode": "decode",
    "title": "国際機関の設立年",
    "prompt": "国際機関の設立年を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「founded_year >= 1945」です。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT name\nFROM international_organizations\nWHERE ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "founded_year >= 1945"
        ]
      ]
    },
    "answer": "founded_year >= 1945",
    "hint": "RESULT に出したい値は founded_year >= 1945 です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "founded_year >= 1945",
      "completedQuery": "SELECT name\nFROM international_organizations\nWHERE founded_year >= 1945;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の numeric-comparison に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "founded_year >= 1945"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "numeric-comparison は WHERE で絞り込み の練習です。founded_year>=1945 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "主要な国際機関の設立年を見ると、多くが第二次世界大戦後の国際協調の高まりの中で設立されています。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "where-comparisons"
    ],
    "globalFactIds": [
      "gf_sql02_d01"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_d02",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 2,
    "mode": "decode",
    "title": "世界自然遺産",
    "prompt": "世界自然遺産を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「category = 'Natural'」です。",
    "tables": [
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "SELECT name\nFROM heritage_sites\nWHERE ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "category = 'Natural'"
        ]
      ]
    },
    "answer": "category = 'Natural'",
    "hint": "RESULT に出したい値は category = 'Natural' です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "category = 'Natural'",
      "completedQuery": "SELECT name\nFROM heritage_sites\nWHERE category = 'Natural';",
      "executionSteps": [
        "1. TABLE heritage_sites の列名を確認します。",
        "2. QUERY の text-equality に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "category = 'Natural'"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "text-equality は WHERE で絞り込み の練習です。category='Natural' を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界自然遺産は、ユネスコの世界遺産のうち、自然environment的な価値が評価されて登録されたものです。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "and-or-not"
    ],
    "globalFactIds": [
      "gf_sql02_d02"
    ],
    "datasetIds": [
      "heritage_sites"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_d03",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 3,
    "mode": "decode",
    "title": "ノーベル平和賞・文学賞",
    "prompt": "ノーベル平和賞・文学賞を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「category IN ('Peace', 'Literature')」です。",
    "tables": [
      {
        "id": "nobel_awards",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "nobel_awards alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "nobel_awards beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "nobel_awards gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "nobel_awards delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT laureate\nFROM nobel_awards\nWHERE ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "category IN ('Peace', 'Literature')"
        ]
      ]
    },
    "answer": "category IN ('Peace', 'Literature')",
    "hint": "RESULT に出したい値は category IN ('Peace', 'Literature') です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "category IN ('Peace', 'Literature')",
      "completedQuery": "SELECT laureate\nFROM nobel_awards\nWHERE category IN ('Peace', 'Literature');",
      "executionSteps": [
        "1. TABLE nobel_awards の列名を確認します。",
        "2. QUERY の in-operator に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "category IN ('Peace', 'Literature')"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "in-operator は WHERE で絞り込み の練習です。category IN ('Peace','Literature') を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "ノーベル平和賞と文学賞は、個人だけでなく団体や複数人が同時に受賞することがある部門です。",
      "sourceRefs": [
        {
          "title": "Nobel Prize facts",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/facts/"
        }
      ]
    },
    "sqlConceptIds": [
      "in-between-like"
    ],
    "globalFactIds": [
      "gf_sql02_d03"
    ],
    "datasetIds": [
      "nobel_awards"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_e01",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 4,
    "mode": "execute",
    "title": "歴史上のパンデミック",
    "prompt": "歴史上のパンデミックを題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "pandemics",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "pandemics alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "pandemics beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "pandemics gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "pandemics delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM pandemics\nWHERE year BETWEEN 1900 AND 2000;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "pandemics alpha",
          "history"
        ],
        [
          "pandemics beta",
          "science"
        ],
        [
          "pandemics gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics gamma",
              "culture"
            ],
            [
              "pandemics beta",
              "science"
            ],
            [
              "pandemics alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics alpha",
              "history"
            ],
            [
              "pandemics beta",
              "science"
            ],
            [
              "pandemics gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM pandemics\nWHERE year BETWEEN 1900 AND 2000;",
      "executionSteps": [
        "1. TABLE pandemics の列名を確認します。",
        "2. QUERY の between に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM pandemics\nWHERE year BETWEEN 1900 AND 2000;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "between は WHERE で絞り込み の練習です。year BETWEEN 1900 AND 2000 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "歴史上、ペストやスペインインフルエンザ、新型コロナウイルスなど、世界的なパンデミックが何度も発生してきました。",
      "sourceRefs": [
        {
          "title": "WHO health topics",
          "organization": "WHO",
          "url": "https://www.who.int/health-topics"
        }
      ]
    },
    "sqlConceptIds": [
      "where-comparisons"
    ],
    "globalFactIds": [
      "gf_sql02_e01"
    ],
    "datasetIds": [
      "pandemics"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_e02",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 5,
    "mode": "execute",
    "title": "世界宗教の成立地域",
    "prompt": "世界宗教の成立地域を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "religions",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "religions alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "religions beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "religions gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "religions delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM religions\nWHERE region+periodの複合条件;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "religions alpha",
          "history"
        ],
        [
          "religions beta",
          "science"
        ],
        [
          "religions gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "religions gamma",
              "culture"
            ],
            [
              "religions beta",
              "science"
            ],
            [
              "religions alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "religions alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "religions alpha",
              "history"
            ],
            [
              "religions beta",
              "science"
            ],
            [
              "religions gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM religions\nWHERE region+periodの複合条件;",
      "executionSteps": [
        "1. TABLE religions の列名を確認します。",
        "2. QUERY の and-condition に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM religions\nWHERE region+periodの複合条件;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "and-condition は WHERE で絞り込み の練習です。region+periodの複合条件 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の主要な宗教は、それぞれ特定の地域で成立し、その後世界各地へ広がっていきました。",
      "sourceRefs": [
        {
          "title": "Britannica religion reference",
          "organization": "Britannica",
          "url": "https://www.britannica.com/topic/religion"
        }
      ]
    },
    "sqlConceptIds": [
      "and-or-not"
    ],
    "globalFactIds": [
      "gf_sql02_e02"
    ],
    "datasetIds": [
      "religions"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_e03",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 6,
    "mode": "execute",
    "title": "国際環境条約",
    "prompt": "国際環境条約を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "environmental_treaties",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "environmental_treaties alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "environmental_treaties beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "environmental_treaties gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "environmental_treaties delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM environmental_treaties\nWHERE climate OR biodiversity;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "environmental_treaties alpha",
          "history"
        ],
        [
          "environmental_treaties beta",
          "science"
        ],
        [
          "environmental_treaties gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "environmental_treaties alpha",
              "history"
            ],
            [
              "environmental_treaties beta",
              "science"
            ],
            [
              "environmental_treaties gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "environmental_treaties gamma",
              "culture"
            ],
            [
              "environmental_treaties beta",
              "science"
            ],
            [
              "environmental_treaties alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "environmental_treaties alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM environmental_treaties\nWHERE climate OR biodiversity;",
      "executionSteps": [
        "1. TABLE environmental_treaties の列名を確認します。",
        "2. QUERY の or-condition に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM environmental_treaties\nWHERE climate OR biodiversity;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "or-condition は WHERE で絞り込み の練習です。climate OR biodiversity を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "気候変動や生物多様性の保護など、国際的な環境問題に対応するための条約が複数結ばれています。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "in-between-like"
    ],
    "globalFactIds": [
      "gf_sql02_e03"
    ],
    "datasetIds": [
      "environmental_treaties"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql02_b01",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 7,
    "mode": "debug",
    "title": "世界の通貨",
    "prompt": "世界の通貨を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "currencies",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "currencies alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "currencies beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "currencies gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "currencies delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM currencies\nWHERE code = JPY;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "currencies alpha",
          "history"
        ],
        [
          "currencies beta",
          "science"
        ],
        [
          "currencies gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "currencies alpha",
              "history"
            ],
            [
              "currencies beta",
              "science"
            ],
            [
              "currencies gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "currencies gamma",
              "culture"
            ],
            [
              "currencies beta",
              "science"
            ],
            [
              "currencies alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "currencies alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM currencies\nWHERE code = 'JPY';",
      "executionSteps": [
        "1. TABLE currencies の列名を確認します。",
        "2. QUERY の missing-string-quotes に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM currencies\nWHERE code = 'JPY';"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "missing-string-quotes は WHERE で絞り込み の練習です。code=JPY→code='JPY' を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の国々はそれぞれ独自の通貨を持ち、ISO 4217という国際規格で3文字のアルファベットコードが割り当てられています。",
      "sourceRefs": [
        {
          "title": "ISO 4217 currency codes",
          "organization": "ISO",
          "url": "https://www.iso.org/iso-4217-currency-codes.html"
        }
      ]
    },
    "sqlConceptIds": [
      "where-comparisons"
    ],
    "globalFactIds": [
      "gf_sql02_b01"
    ],
    "datasetIds": [
      "currencies"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM currencies\nWHERE code = 'JPY';",
          "SELECT *\nFROM currencies\nWHERE code = JPY;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM currencies\nWHERE code = 'JPY';"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql02_b02",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 8,
    "mode": "debug",
    "title": "国際的移住経路",
    "prompt": "国際的移住経路を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "migration_routes",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "migration_routes alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "migration_routes beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "migration_routes gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "migration_routes delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM migration_routes\nWHERE region = 'Europe' OR region = 'Asia' AND year >= 2000;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "migration_routes alpha",
          "history"
        ],
        [
          "migration_routes beta",
          "science"
        ],
        [
          "migration_routes gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_routes alpha",
              "history"
            ],
            [
              "migration_routes beta",
              "science"
            ],
            [
              "migration_routes gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_routes gamma",
              "culture"
            ],
            [
              "migration_routes beta",
              "science"
            ],
            [
              "migration_routes alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_routes alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM migration_routes\nWHERE (region = 'Europe' OR region = 'Asia') AND year >= 2000;",
      "executionSteps": [
        "1. TABLE migration_routes の列名を確認します。",
        "2. QUERY の and-or-precedence に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM migration_routes\nWHERE (region = 'Europe' OR region = 'Asia') AND year >= 2000;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "and-or-precedence は WHERE で絞り込み の練習です。括弧不足による過剰抽出 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際的な人の移住には、経済的な理由や紛争などを背景とした、特定の主要な経路が存在します。",
      "sourceRefs": [
        {
          "title": "IOM migration data",
          "organization": "IOM",
          "url": "https://www.iom.int/data-and-research"
        }
      ]
    },
    "sqlConceptIds": [
      "and-or-not"
    ],
    "globalFactIds": [
      "gf_sql02_b02"
    ],
    "datasetIds": [
      "migration_routes"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM migration_routes\nWHERE (region = 'Europe' OR region = 'Asia') AND year >= 2000;",
          "SELECT *\nFROM migration_routes\nWHERE region = 'Europe' OR region = 'Asia' AND year >= 2000;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM migration_routes\nWHERE (region = 'Europe' OR region = 'Asia') AND year >= 2000;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql02_b03",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 9,
    "mode": "debug",
    "title": "ワクチン開発史",
    "prompt": "ワクチン開発史を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "vaccines",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "vaccines alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "vaccines beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "vaccines gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "vaccines delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM vaccines\nWHERE disease = 'smallpox' OR 'polio';",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "vaccines alpha",
          "history"
        ],
        [
          "vaccines beta",
          "science"
        ],
        [
          "vaccines gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "vaccines alpha",
              "history"
            ],
            [
              "vaccines beta",
              "science"
            ],
            [
              "vaccines gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "vaccines gamma",
              "culture"
            ],
            [
              "vaccines beta",
              "science"
            ],
            [
              "vaccines alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "vaccines alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM vaccines\nWHERE disease IN ('smallpox', 'polio');",
      "executionSteps": [
        "1. TABLE vaccines の列名を確認します。",
        "2. QUERY の multi-value-equality に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM vaccines\nWHERE disease IN ('smallpox', 'polio');"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "multi-value-equality は WHERE で絞り込み の練習です。disease='A' OR 'B'をINへ修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "天然痘やポリオなど、ワクチンの開発と普及によって多くの感染症の流行が大きく抑えられてきました。",
      "sourceRefs": [
        {
          "title": "WHO vaccines and immunization",
          "organization": "WHO",
          "url": "https://www.who.int/health-topics/vaccines-and-immunization"
        }
      ]
    },
    "sqlConceptIds": [
      "in-between-like"
    ],
    "globalFactIds": [
      "gf_sql02_b03"
    ],
    "datasetIds": [
      "vaccines"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM vaccines\nWHERE disease IN ('smallpox', 'polio');",
          "SELECT *\nFROM vaccines\nWHERE disease = 'smallpox' OR 'polio';",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM vaccines\nWHERE disease IN ('smallpox', 'polio');"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql02_m01",
    "courseId": "sql",
    "chapterId": "02_where",
    "order": 10,
    "mode": "mission",
    "title": "20世紀後半の世界的事件",
    "prompt": "20世紀後半の世界的事件を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "historical_events",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "historical_events alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "historical_events beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "historical_events gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "historical_events delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM historical_events\nWHERE 年代+地域+分類を複合抽出;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "historical_events alpha",
          "history"
        ],
        [
          "historical_events beta",
          "science"
        ],
        [
          "historical_events gamma",
          "culture"
        ],
        [
          "historical_events delta",
          "nature"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events delta",
              "nature"
            ],
            [
              "historical_events gamma",
              "culture"
            ],
            [
              "historical_events beta",
              "science"
            ],
            [
              "historical_events alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events alpha",
              "history"
            ],
            [
              "historical_events beta",
              "science"
            ],
            [
              "historical_events gamma",
              "culture"
            ],
            [
              "historical_events delta",
              "nature"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM historical_events\nWHERE 年代+地域+分類を複合抽出;",
      "executionSteps": [
        "1. TABLE historical_events の列名を確認します。",
        "2. QUERY の compound-filter に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM historical_events\nWHERE 年代+地域+分類を複合抽出;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "compound-filter は WHERE で絞り込み の練習です。年代+地域+分類を複合抽出 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "20世紀後半には、冷戦の終結やベルリンの壁崩壊など、世界の政治体制を大きく変える出来事が相次ぎました。",
      "sourceRefs": [
        {
          "title": "United Nations history",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/history-of-the-un"
        }
      ]
    },
    "sqlConceptIds": [
      "where-comparisons"
    ],
    "globalFactIds": [
      "gf_sql02_m01"
    ],
    "datasetIds": [
      "historical_events"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql03_d01",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 1,
    "mode": "decode",
    "title": "世界の高峰",
    "prompt": "世界の高峰を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「elevation_m DESC」です。",
    "tables": [
      {
        "id": "mountains",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "mountains alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "mountains beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "mountains gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "mountains delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name, elevation_m\nFROM mountains\nORDER BY ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "elevation_m DESC"
        ]
      ]
    },
    "answer": "elevation_m DESC",
    "hint": "RESULT に出したい値は elevation_m DESC です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "elevation_m DESC",
      "completedQuery": "SELECT name, elevation_m\nFROM mountains\nORDER BY elevation_m DESC;",
      "executionSteps": [
        "1. TABLE mountains の列名を確認します。",
        "2. QUERY の order-desc に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "elevation_m DESC"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "order-desc は ORDER BY と LIMIT の練習です。elevation_m DESC を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界には標高8000メートルを超える山が14峰存在し、すべてアジアのヒマラヤ山脈とカラコルム山脈に集中しています。",
      "sourceRefs": [
        {
          "title": "National Geographic mountains reference",
          "organization": "National",
          "url": "https://education.nationalgeographic.org/resource/mountain/"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_d01"
    ],
    "datasetIds": [
      "mountains"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_d02",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 2,
    "mode": "decode",
    "title": "初期宇宙探査",
    "prompt": "初期宇宙探査を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「launch_year ASC」です。",
    "tables": [
      {
        "id": "space_missions",
        "columns": [
          "mission",
          "agency",
          "launch_year",
          "priority",
          "target"
        ],
        "rows": [
          [
            "Sputnik 1",
            "Soviet space program",
            1957,
            1,
            "Earth orbit"
          ],
          [
            "Apollo 11",
            "NASA",
            1969,
            2,
            "Moon"
          ],
          [
            "Voyager 1",
            "NASA",
            1977,
            3,
            "Outer Solar System"
          ],
          [
            "Hayabusa2",
            "JAXA",
            2014,
            4,
            "Ryugu"
          ]
        ]
      }
    ],
    "query": "SELECT mission, launch_year\nFROM space_missions\nORDER BY ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "launch_year ASC"
        ]
      ]
    },
    "answer": "launch_year ASC",
    "hint": "RESULT に出したい値は launch_year ASC です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "launch_year ASC",
      "completedQuery": "SELECT mission, launch_year\nFROM space_missions\nORDER BY launch_year ASC;",
      "executionSteps": [
        "1. TABLE space_missions の列名を確認します。",
        "2. QUERY の order-asc に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "launch_year ASC"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "order-asc は ORDER BY と LIMIT の練習です。launch_year ASC を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "人類最初の人工衛星スプートニク1号や、最初の有人宇宙飛行など、初期の宇宙探査はソビエト連邦が先行しました。",
      "sourceRefs": [
        {
          "title": "NASA history",
          "organization": "NASA",
          "url": "https://www.nasa.gov/history/"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_d02"
    ],
    "datasetIds": [
      "space_missions"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_d03",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 3,
    "mode": "decode",
    "title": "科学技術の発明年表",
    "prompt": "科学技術の発明年表を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「LIMIT 5」です。",
    "tables": [
      {
        "id": "inventions",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "inventions alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "inventions beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "inventions gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "inventions delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name, year\nFROM inventions\nORDER BY year ASC\n___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "LIMIT 5"
        ]
      ]
    },
    "answer": "LIMIT 5",
    "hint": "RESULT に出したい値は LIMIT 5 です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "LIMIT 5",
      "completedQuery": "SELECT name, year\nFROM inventions\nORDER BY year ASC\nLIMIT 5;",
      "executionSteps": [
        "1. TABLE inventions の列名を確認します。",
        "2. QUERY の limit に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "LIMIT 5"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "limit は ORDER BY と LIMIT の練習です。年代順の先頭5件 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "電話、飛行機、インターネットなど、近代の科学技術には発明された年代がそれぞれ記録されています。",
      "sourceRefs": [
        {
          "title": "Smithsonian science and technology",
          "organization": "Smithsonian",
          "url": "https://www.si.edu/spotlight/science-and-technology"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_d03"
    ],
    "datasetIds": [
      "inventions"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_e01",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 4,
    "mode": "execute",
    "title": "世界の長大河川",
    "prompt": "世界の長大河川を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "rivers",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "rivers alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "rivers beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "rivers gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "rivers delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM rivers\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "rivers alpha",
          "history"
        ],
        [
          "rivers beta",
          "science"
        ],
        [
          "rivers gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers gamma",
              "culture"
            ],
            [
              "rivers beta",
              "science"
            ],
            [
              "rivers alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers alpha",
              "history"
            ],
            [
              "rivers beta",
              "science"
            ],
            [
              "rivers gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM rivers\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE rivers の列名を確認します。",
        "2. QUERY の sort-result に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM rivers\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "sort-result は ORDER BY と LIMIT の練習です。length_km DESCの結果追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界で最も長い河川はナイル川またはアマゾン川とされ、どちらが最長かは測定方法によって見解が分かれます。",
      "sourceRefs": [
        {
          "title": "Encyclopaedia river reference",
          "organization": "Encyclopaedia",
          "url": "https://www.britannica.com/science/river"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_e01"
    ],
    "datasetIds": [
      "rivers"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_e02",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 5,
    "mode": "execute",
    "title": "ノーベル賞受賞記録",
    "prompt": "ノーベル賞受賞記録を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "nobel_awards",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "nobel_awards alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "nobel_awards beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "nobel_awards gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "nobel_awards delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM nobel_awards\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "nobel_awards alpha",
          "history"
        ],
        [
          "nobel_awards beta",
          "science"
        ],
        [
          "nobel_awards gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards gamma",
              "culture"
            ],
            [
              "nobel_awards beta",
              "science"
            ],
            [
              "nobel_awards alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards alpha",
              "history"
            ],
            [
              "nobel_awards beta",
              "science"
            ],
            [
              "nobel_awards gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM nobel_awards\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE nobel_awards の列名を確認します。",
        "2. QUERY の multi-key-sort に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM nobel_awards\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "multi-key-sort は ORDER BY と LIMIT の練習です。year ASC,laureate ASC を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "ノーベル賞の受賞記録には、最年少受賞者や複数回受賞者など、いくつかの特筆すべき記録があります。",
      "sourceRefs": [
        {
          "title": "Nobel Prize facts",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/facts/"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_e02"
    ],
    "datasetIds": [
      "nobel_awards"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_e03",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 6,
    "mode": "execute",
    "title": "固定年の世界都市人口",
    "prompt": "固定年の世界都市人口を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "city_population",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "city_population alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "city_population beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "city_population gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "city_population delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM city_population\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "city_population alpha",
          "history"
        ],
        [
          "city_population beta",
          "science"
        ],
        [
          "city_population gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "city_population alpha",
              "history"
            ],
            [
              "city_population beta",
              "science"
            ],
            [
              "city_population gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "city_population gamma",
              "culture"
            ],
            [
              "city_population beta",
              "science"
            ],
            [
              "city_population alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "city_population alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM city_population\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE city_population の列名を確認します。",
        "2. QUERY の where-order-limit に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM city_population\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "where-order-limit は ORDER BY と LIMIT の練習です。対象年→人口降順→上位3 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "東京、デリー、上海など、世界の大都市圏の人口は特定の年の統計データとして国連により集計されています。",
      "sourceRefs": [
        {
          "title": "UN urbanization",
          "organization": "UN",
          "url": "https://population.un.org/wup/"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_e03"
    ],
    "datasetIds": [
      "city_population"
    ],
    "difficulty": "basic"
  },
  {
    "id": "sql03_b01",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 7,
    "mode": "debug",
    "title": "固定年CO2排出量",
    "prompt": "固定年CO2排出量を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "co2_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "co2_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "co2_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "co2_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "co2_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM co2_records\nORDER BY value ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "co2_records alpha",
          "history"
        ],
        [
          "co2_records beta",
          "science"
        ],
        [
          "co2_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "co2_records alpha",
              "history"
            ],
            [
              "co2_records beta",
              "science"
            ],
            [
              "co2_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "co2_records gamma",
              "culture"
            ],
            [
              "co2_records beta",
              "science"
            ],
            [
              "co2_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "co2_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM co2_records\nORDER BY value DESC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE co2_records の列名を確認します。",
        "2. QUERY の wrong-direction に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM co2_records\nORDER BY value DESC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "wrong-direction は ORDER BY と LIMIT の練習です。上位取得でASC→DESC を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "CO2（二酸化炭素）排出量は国によって大きく異なり、特定の年の統計データとして比較分析が行われます。",
      "sourceRefs": [
        {
          "title": "Our World in Data CO2",
          "organization": "Our",
          "url": "https://ourworldindata.org/co2-emissions"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_b01"
    ],
    "datasetIds": [
      "co2_records"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM co2_records\nORDER BY value DESC\nLIMIT 3;",
          "SELECT *\nFROM co2_records\nORDER BY value ASC\nLIMIT 3;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM co2_records\nORDER BY value DESC\nLIMIT 3;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql03_b02",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 8,
    "mode": "debug",
    "title": "国際機関の設立年",
    "prompt": "国際機関の設立年を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM international_organizations\nORDER BY year ASC\n;",
    "expectedResult": {
      "columns": [
        "org_code",
        "name"
      ],
      "rows": [
        [
          "UNESCO",
          "United Nations Educational, Scientific and Cultural Organization"
        ],
        [
          "WHO",
          "World Health Organization"
        ],
        [
          "FAO",
          "Food and Agriculture Organization"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "FAO",
              "Food and Agriculture Organization"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "FAO",
              "Food and Agriculture Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM international_organizations\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の limit-position に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM international_organizations\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "limit-position は ORDER BY と LIMIT の練習です。LIMITの位置を末尾へ修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際機関の設立年を見ると、活動分野や時代背景に応じてさまざまな年代に設立されてきたことが分かります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_b02"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM international_organizations\nORDER BY year ASC, name ASC\nLIMIT 3;",
          "SELECT *\nFROM international_organizations\nORDER BY year ASC\n;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM international_organizations\nORDER BY year ASC, name ASC\nLIMIT 3;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql03_b03",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 9,
    "mode": "debug",
    "title": "オリンピック開催都市",
    "prompt": "オリンピック開催都市を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "olympic_hosts",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "olympic_hosts alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "olympic_hosts beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "olympic_hosts gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "olympic_hosts delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM olympic_hosts\nORDER BY year ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "olympic_hosts alpha",
          "history"
        ],
        [
          "olympic_hosts beta",
          "science"
        ],
        [
          "olympic_hosts gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "olympic_hosts alpha",
              "history"
            ],
            [
              "olympic_hosts beta",
              "science"
            ],
            [
              "olympic_hosts gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "olympic_hosts gamma",
              "culture"
            ],
            [
              "olympic_hosts beta",
              "science"
            ],
            [
              "olympic_hosts alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "olympic_hosts alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM olympic_hosts\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE olympic_hosts の列名を確認します。",
        "2. QUERY の missing-tiebreaker に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM olympic_hosts\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "missing-tiebreaker は ORDER BY と LIMIT の練習です。同年/同順位用の第2キー追加 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "オリンピックは4年に1度、世界各地の都市で開催され、開催都市は国際オリンピック委員会（IOC）によって選ばれます。",
      "sourceRefs": [
        {
          "title": "Olympic host cities",
          "organization": "Olympic",
          "url": "https://olympics.com/ioc/olympic-games"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_b03"
    ],
    "datasetIds": [
      "olympic_hosts"
    ],
    "difficulty": "basic",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM olympic_hosts\nORDER BY year ASC, name ASC\nLIMIT 3;",
          "SELECT *\nFROM olympic_hosts\nORDER BY year ASC\nLIMIT 3;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM olympic_hosts\nORDER BY year ASC, name ASC\nLIMIT 3;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql03_m01",
    "courseId": "sql",
    "chapterId": "03_order_limit",
    "order": 10,
    "mode": "mission",
    "title": "世界の宇宙計画",
    "prompt": "世界の宇宙計画を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "space_missions",
        "columns": [
          "mission",
          "agency",
          "launch_year",
          "priority",
          "target"
        ],
        "rows": [
          [
            "Sputnik 1",
            "Soviet space program",
            1957,
            1,
            "Earth orbit"
          ],
          [
            "Apollo 11",
            "NASA",
            1969,
            2,
            "Moon"
          ],
          [
            "Voyager 1",
            "NASA",
            1977,
            3,
            "Outer Solar System"
          ],
          [
            "Hayabusa2",
            "JAXA",
            2014,
            4,
            "Ryugu"
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM space_missions\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
    "expectedResult": {
      "columns": [
        "mission",
        "agency"
      ],
      "rows": [
        [
          "Sputnik 1",
          "Soviet space program"
        ],
        [
          "Apollo 11",
          "NASA"
        ],
        [
          "Voyager 1",
          "NASA"
        ],
        [
          "Hayabusa2",
          "JAXA"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Hayabusa2",
              "JAXA"
            ],
            [
              "Voyager 1",
              "NASA"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Voyager 1",
              "NASA"
            ],
            [
              "Hayabusa2",
              "JAXA"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM space_missions\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;",
      "executionSteps": [
        "1. TABLE space_missions の列名を確認します。",
        "2. QUERY の where-multi-sort-limit に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM space_missions\nWHERE year >= 1950\nORDER BY year ASC, name ASC\nLIMIT 3;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "where-multi-sort-limit は ORDER BY と LIMIT の練習です。条件抽出+年代順+優先度+上位件数 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の宇宙計画は、アメリカ・ロシア（旧ソ連）に加え、近年では日本・欧州・中国・インドなど多くの国が参加するようになっています。",
      "sourceRefs": [
        {
          "title": "NASA missions",
          "organization": "NASA",
          "url": "https://www.nasa.gov/missions/"
        }
      ]
    },
    "sqlConceptIds": [
      "order-by-limit"
    ],
    "globalFactIds": [
      "gf_sql03_m01"
    ],
    "datasetIds": [
      "space_missions"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql04_d01",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 1,
    "mode": "decode",
    "title": "国連関連機関",
    "prompt": "国連関連機関を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「COUNT(*)」です。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___ AS summary\nFROM international_organizations;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "COUNT(*)"
        ]
      ]
    },
    "answer": "COUNT(*)",
    "hint": "RESULT に出したい値は COUNT(*) です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "COUNT(*)",
      "completedQuery": "SELECT COUNT(*) AS summary\nFROM international_organizations;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の count-all に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "COUNT(*)"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "count-all は 集計関数 の練習です。全行数をCOUNT(*) を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国連には総会や安全保障理事会などの主要機関に加え、UNICEFやUNHCRのような関連機関・基金が数多く存在します。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_d01"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_d02",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 2,
    "mode": "decode",
    "title": "世界遺産登録年",
    "prompt": "世界遺産登録年を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「AVG(inscription_year)」です。",
    "tables": [
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___ AS summary\nFROM heritage_sites;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "AVG(inscription_year)"
        ]
      ]
    },
    "answer": "AVG(inscription_year)",
    "hint": "RESULT に出したい値は AVG(inscription_year) です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "AVG(inscription_year)",
      "completedQuery": "SELECT AVG(inscription_year) AS summary\nFROM heritage_sites;",
      "executionSteps": [
        "1. TABLE heritage_sites の列名を確認します。",
        "2. QUERY の average に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "AVG(inscription_year)"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "average は 集計関数 の練習です。AVG(inscription_year) を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界遺産の登録年を見ると、1978年の最初の登録以来、毎年新たな遺産が追加され続けています。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_d02"
    ],
    "datasetIds": [
      "heritage_sites"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_d03",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 3,
    "mode": "decode",
    "title": "世界の山岳",
    "prompt": "世界の山岳を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「MAX(elevation_m)」です。",
    "tables": [
      {
        "id": "mountains",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "mountains alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "mountains beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "mountains gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "mountains delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___ AS summary\nFROM mountains;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "MAX(elevation_m)"
        ]
      ]
    },
    "answer": "MAX(elevation_m)",
    "hint": "RESULT に出したい値は MAX(elevation_m) です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "MAX(elevation_m)",
      "completedQuery": "SELECT MAX(elevation_m) AS summary\nFROM mountains;",
      "executionSteps": [
        "1. TABLE mountains の列名を確認します。",
        "2. QUERY の max に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "MAX(elevation_m)"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "max は 集計関数 の練習です。MAX(elevation_m) を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の山岳には、標高だけでなく登頂の難易度や地理的な特徴によって特に注目される山々があります。",
      "sourceRefs": [
        {
          "title": "National Geographic mountains reference",
          "organization": "National",
          "url": "https://education.nationalgeographic.org/resource/mountain/"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_d03"
    ],
    "datasetIds": [
      "mountains"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_e01",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 4,
    "mode": "execute",
    "title": "国際条約の加盟数",
    "prompt": "国際条約の加盟数を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "treaty_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaty_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaty_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaty_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaty_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT member_count合計\nFROM treaty_records;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "treaty_records alpha",
          "history"
        ],
        [
          "treaty_records beta",
          "science"
        ],
        [
          "treaty_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_records gamma",
              "culture"
            ],
            [
              "treaty_records beta",
              "science"
            ],
            [
              "treaty_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_records alpha",
              "history"
            ],
            [
              "treaty_records beta",
              "science"
            ],
            [
              "treaty_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT member_count合計\nFROM treaty_records;",
      "executionSteps": [
        "1. TABLE treaty_records の列名を確認します。",
        "2. QUERY の sum に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT member_count合計\nFROM treaty_records;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "sum は 集計関数 の練習です。member_count合計 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際条約には、ほぼすべての国連加盟国が参加する条約と、限られた国だけが参加する条約があります。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_e01"
    ],
    "datasetIds": [
      "treaty_records"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_e02",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 5,
    "mode": "execute",
    "title": "パンデミック史",
    "prompt": "パンデミック史を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "pandemics",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "pandemics alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "pandemics beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "pandemics gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "pandemics delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT 最古年と最新年\nFROM pandemics;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "pandemics alpha",
          "history"
        ],
        [
          "pandemics beta",
          "science"
        ],
        [
          "pandemics gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics gamma",
              "culture"
            ],
            [
              "pandemics beta",
              "science"
            ],
            [
              "pandemics alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "pandemics alpha",
              "history"
            ],
            [
              "pandemics beta",
              "science"
            ],
            [
              "pandemics gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT 最古年と最新年\nFROM pandemics;",
      "executionSteps": [
        "1. TABLE pandemics の列名を確認します。",
        "2. QUERY の min-max に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT 最古年と最新年\nFROM pandemics;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "min-max は 集計関数 の練習です。最古年と最新年 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "パンデミックの歴史を振り返ると、感染症の発生地域や拡大の経路、対応の変化を読み取ることができます。",
      "sourceRefs": [
        {
          "title": "WHO history",
          "organization": "WHO",
          "url": "https://www.who.int/about/history"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_e02"
    ],
    "datasetIds": [
      "pandemics"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_e03",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 6,
    "mode": "execute",
    "title": "世界の河川",
    "prompt": "世界の河川を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "rivers",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "rivers alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "rivers beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "rivers gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "rivers delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT COUNT,AVG,MAXを追跡\nFROM rivers;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "rivers alpha",
          "history"
        ],
        [
          "rivers beta",
          "science"
        ],
        [
          "rivers gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers alpha",
              "history"
            ],
            [
              "rivers beta",
              "science"
            ],
            [
              "rivers gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers gamma",
              "culture"
            ],
            [
              "rivers beta",
              "science"
            ],
            [
              "rivers alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "rivers alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT COUNT,AVG,MAXを追跡\nFROM rivers;",
      "executionSteps": [
        "1. TABLE rivers の列名を確認します。",
        "2. QUERY の multi-aggregate に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT COUNT,AVG,MAXを追跡\nFROM rivers;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "multi-aggregate は 集計関数 の練習です。COUNT,AVG,MAXを追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の主要な河川は、流域の国々の生活や経済に深く関わり、複数の国を流れる「国際河川」も多くあります。",
      "sourceRefs": [
        {
          "title": "Encyclopaedia river reference",
          "organization": "Encyclopaedia",
          "url": "https://www.britannica.com/science/river"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_e03"
    ],
    "datasetIds": [
      "rivers"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql04_b01",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 7,
    "mode": "debug",
    "title": "欠損を含む災害記録",
    "prompt": "欠損を含む災害記録を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "disasters",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "disasters alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "disasters beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "disasters gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "disasters delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT COUNT(death_toll) AS summary\nFROM disasters;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "disasters alpha",
          "history"
        ],
        [
          "disasters beta",
          "science"
        ],
        [
          "disasters gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters gamma",
              "culture"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT COUNT(*) AS total_rows, COUNT(death_toll) AS known_deaths\nFROM disasters;",
      "executionSteps": [
        "1. TABLE disasters の列名を確認します。",
        "2. QUERY の count-null に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT COUNT(*) AS total_rows, COUNT(death_toll) AS known_deaths\nFROM disasters;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "count-null は 集計関数 の練習です。COUNT(*)とCOUNT(death_toll)の違い を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "災害記録の中には、発生年や被害規模が正確に記録されていない、または欠損しているデータも存在します。",
      "sourceRefs": [
        {
          "title": "UNDRR terminology",
          "organization": "UNDRR",
          "url": "https://www.undrr.org/terminology/disaster"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_b01"
    ],
    "datasetIds": [
      "disasters"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT COUNT(*) AS total_rows, COUNT(death_toll) AS known_deaths\nFROM disasters;",
          "SELECT COUNT(death_toll) AS summary\nFROM disasters;",
          "SELECT *;"
        ],
        "answer": "SELECT COUNT(*) AS total_rows, COUNT(death_toll) AS known_deaths\nFROM disasters;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql04_b02",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 8,
    "mode": "debug",
    "title": "世界気温観測",
    "prompt": "世界気温観測を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "temperature_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "temperature_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "temperature_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "temperature_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "temperature_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT AVG(temperature_label) AS summary\nFROM temperature_records;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "temperature_records alpha",
          "history"
        ],
        [
          "temperature_records beta",
          "science"
        ],
        [
          "temperature_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "temperature_records alpha",
              "history"
            ],
            [
              "temperature_records beta",
              "science"
            ],
            [
              "temperature_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "temperature_records gamma",
              "culture"
            ],
            [
              "temperature_records beta",
              "science"
            ],
            [
              "temperature_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "temperature_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT AVG(temperature_c) AS avg_temp_c\nFROM temperature_records;",
      "executionSteps": [
        "1. TABLE temperature_records の列名を確認します。",
        "2. QUERY の string-number-aggregate に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT AVG(temperature_c) AS avg_temp_c\nFROM temperature_records;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "string-number-aggregate は 集計関数 の練習です。文字列列AVGを数値列へ修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界気温の観測データは、地球温暖化の進行を確認するための重要な指標として、各国の気象機関により記録されています。",
      "sourceRefs": [
        {
          "title": "WMO climate",
          "organization": "WMO",
          "url": "https://wmo.int/topics/climate"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_b02"
    ],
    "datasetIds": [
      "temperature_records"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT AVG(temperature_c) AS avg_temp_c\nFROM temperature_records;",
          "SELECT AVG(temperature_label) AS summary\nFROM temperature_records;",
          "SELECT *;"
        ],
        "answer": "SELECT AVG(temperature_c) AS avg_temp_c\nFROM temperature_records;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql04_b03",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 9,
    "mode": "debug",
    "title": "エネルギー構成比",
    "prompt": "エネルギー構成比を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "energy_mix",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "energy_mix alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "energy_mix beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "energy_mix gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "energy_mix delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT SUM(percent_share) AS summary\nFROM energy_mix;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "energy_mix alpha",
          "history"
        ],
        [
          "energy_mix beta",
          "science"
        ],
        [
          "energy_mix gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "energy_mix alpha",
              "history"
            ],
            [
              "energy_mix beta",
              "science"
            ],
            [
              "energy_mix gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "energy_mix gamma",
              "culture"
            ],
            [
              "energy_mix beta",
              "science"
            ],
            [
              "energy_mix alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "energy_mix alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT AVG(percent_share) AS avg_share\nFROM energy_mix;",
      "executionSteps": [
        "1. TABLE energy_mix の列名を確認します。",
        "2. QUERY の invalid-sum-logic に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT AVG(percent_share) AS avg_share\nFROM energy_mix;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "invalid-sum-logic は 集計関数 の練習です。異なる母数の割合単純合計を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "各国のエネルギー構成（石炭・石油・天然ガス・再生可能エネルギーなどの比率）は、資源事情や政策によって大きく異なります。",
      "sourceRefs": [
        {
          "title": "IEA energy statistics",
          "organization": "IEA",
          "url": "https://www.iea.org/data-and-statistics"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_b03"
    ],
    "datasetIds": [
      "energy_mix"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT AVG(percent_share) AS avg_share\nFROM energy_mix;",
          "SELECT SUM(percent_share) AS summary\nFROM energy_mix;",
          "SELECT *;"
        ],
        "answer": "SELECT AVG(percent_share) AS avg_share\nFROM energy_mix;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql04_m01",
    "courseId": "sql",
    "chapterId": "04_aggregates",
    "order": 10,
    "mode": "mission",
    "title": "世界の自然保護地域",
    "prompt": "世界の自然保護地域を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "protected_areas",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "protected_areas alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "protected_areas beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "protected_areas gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "protected_areas delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT 件数,平均年,最古年,最新年を1行で取得\nFROM protected_areas;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "protected_areas alpha",
          "history"
        ],
        [
          "protected_areas beta",
          "science"
        ],
        [
          "protected_areas gamma",
          "culture"
        ],
        [
          "protected_areas delta",
          "nature"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "protected_areas delta",
              "nature"
            ],
            [
              "protected_areas gamma",
              "culture"
            ],
            [
              "protected_areas beta",
              "science"
            ],
            [
              "protected_areas alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "protected_areas alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "protected_areas alpha",
              "history"
            ],
            [
              "protected_areas beta",
              "science"
            ],
            [
              "protected_areas gamma",
              "culture"
            ],
            [
              "protected_areas delta",
              "nature"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT 件数,平均年,最古年,最新年を1行で取得\nFROM protected_areas;",
      "executionSteps": [
        "1. TABLE protected_areas の列名を確認します。",
        "2. QUERY の aggregate-summary に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT 件数,平均年,最古年,最新年を1行で取得\nFROM protected_areas;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "aggregate-summary は 集計関数 の練習です。件数,平均年,最古年,最新年を1行で取得 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "UNEP（国連環境計画）などが管理する自然保護地域は、世界各地で生物多様性を守る役割を果たしています。",
      "sourceRefs": [
        {
          "title": "UNEP protected areas",
          "organization": "UNEP",
          "url": "https://www.unep-wcmc.org/en/protected-areas"
        }
      ]
    },
    "sqlConceptIds": [
      "count-sum-avg-min-max"
    ],
    "globalFactIds": [
      "gf_sql04_m01"
    ],
    "datasetIds": [
      "protected_areas"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql05_d01",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 1,
    "mode": "decode",
    "title": "種類別世界遺産",
    "prompt": "種類別世界遺産を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「category」です。",
    "tables": [
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "SELECT category, COUNT(*) AS total\nFROM heritage_sites\nGROUP BY ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "category"
        ]
      ]
    },
    "answer": "category",
    "hint": "RESULT に出したい値は category です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "category",
      "completedQuery": "SELECT category, COUNT(*) AS total\nFROM heritage_sites\nGROUP BY category;",
      "executionSteps": [
        "1. TABLE heritage_sites の列名を確認します。",
        "2. QUERY の group-count に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "category"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "group-count は GROUP BY と HAVING の練習です。category別COUNT を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界遺産は文化遺産・自然遺産・複合遺産の3種類に分けられ、種類ごとに登録数の傾向が異なります。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "group-by"
    ],
    "globalFactIds": [
      "gf_sql05_d01"
    ],
    "datasetIds": [
      "heritage_sites"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_d02",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 2,
    "mode": "decode",
    "title": "部門別ノーベル賞",
    "prompt": "部門別ノーベル賞を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。SELECT の1番目の列 category でグループ化するため、空欄には列位置を表す 1 を入れます。",
    "tables": [
      {
        "id": "nobel_awards",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "nobel_awards alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "nobel_awards beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "nobel_awards gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "nobel_awards delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT category, COUNT(*) AS total\nFROM nobel_awards\nGROUP BY ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "category"
        ]
      ]
    },
    "answer": "1",
    "hint": "GROUP BY は列名で書けますが、この問題では SELECT 句の列位置を使います。SELECT category, COUNT(*) の1番目は category です。",
    "explanation": {
      "correctAnswer": "1",
      "completedQuery": "SELECT category, COUNT(*) AS total\nFROM nobel_awards\nGROUP BY 1;",
      "executionSteps": [
        "1. TABLE nobel_awards で category 列と賞の行を確認します。",
        "2. SELECT category, COUNT(*) なので、SELECT 句の1番目は category です。",
        "3. GROUP BY 1 は SELECT 句の1番目、つまり category ごとに行をまとめます。",
        "4. 各 category の行数を COUNT(*) で数え、RESULT と同じ部門別件数を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "category"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "GROUP BY 1 は SELECT 句の1番目の式でグループ化する書き方です。この問題では SELECT category, COUNT(*) ... なので、1 は category を指します。列名を直接書く sql05_d01 とは違い、列位置を読む練習になります。",
      "themeExplanation": "ノーベル賞は部門によって、特定の国や地域からの受賞者数に偏りが見られることがあります。",
      "sourceRefs": [
        {
          "title": "Nobel Prize facts",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/facts/"
        }
      ]
    },
    "sqlConceptIds": [
      "having"
    ],
    "globalFactIds": [
      "gf_sql05_d02"
    ],
    "datasetIds": [
      "nobel_awards"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_d03",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 3,
    "mode": "decode",
    "title": "本部都市別国際機関",
    "prompt": "本部都市別国際機関を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「headquarters」です。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT headquarters, COUNT(*) AS total\nFROM international_organizations\nGROUP BY ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "headquarters"
        ]
      ]
    },
    "answer": "headquarters",
    "hint": "RESULT に出したい値は headquarters です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "headquarters",
      "completedQuery": "SELECT headquarters, COUNT(*) AS total\nFROM international_organizations\nGROUP BY headquarters;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の group-by-city に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "headquarters"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "group-by-city は GROUP BY と HAVING の練習です。headquarters別件数 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際機関の本部都市は、ジュネーブ・ニューヨーク・パリ・ローマなど、特定の都市に集中する傾向があります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "group-by"
    ],
    "globalFactIds": [
      "gf_sql05_d03"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_e01",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 4,
    "mode": "execute",
    "title": "世界の言語系統",
    "prompt": "世界の言語系統を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "languages",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "languages alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "languages beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "languages gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "languages delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM languages\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "languages alpha",
          "history"
        ],
        [
          "languages beta",
          "science"
        ],
        [
          "languages gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "languages gamma",
              "culture"
            ],
            [
              "languages beta",
              "science"
            ],
            [
              "languages alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "languages alpha",
              "history"
            ],
            [
              "languages beta",
              "science"
            ],
            [
              "languages gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "languages alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM languages\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
      "executionSteps": [
        "1. TABLE languages の列名を確認します。",
        "2. QUERY の group-count-result に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM languages\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "group-count-result は GROUP BY と HAVING の練習です。family別言語数 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界には数千の言語が存在し、語族（言語の系統）によって分類されます。",
      "sourceRefs": [
        {
          "title": "UNESCO languages",
          "organization": "UNESCO",
          "url": "https://www.unesco.org/en/languages"
        }
      ]
    },
    "sqlConceptIds": [
      "having"
    ],
    "globalFactIds": [
      "gf_sql05_e01"
    ],
    "datasetIds": [
      "languages"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_e02",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 5,
    "mode": "execute",
    "title": "災害種類と年代",
    "prompt": "災害種類と年代を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "disasters",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "disasters alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "disasters beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "disasters gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "disasters delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM disasters\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "disasters alpha",
          "history"
        ],
        [
          "disasters beta",
          "science"
        ],
        [
          "disasters gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters gamma",
              "culture"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM disasters\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
      "executionSteps": [
        "1. TABLE disasters の列名を確認します。",
        "2. QUERY の multi-column-group に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM disasters\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "multi-column-group は GROUP BY と HAVING の練習です。decade,type別COUNT を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "自然災害には地震・洪水・台風など複数の種類があり、年代とともに記録される頻度や規模が変化してきました。",
      "sourceRefs": [
        {
          "title": "UNDRR terminology",
          "organization": "UNDRR",
          "url": "https://www.undrr.org/terminology/disaster"
        }
      ]
    },
    "sqlConceptIds": [
      "group-by"
    ],
    "globalFactIds": [
      "gf_sql05_e02"
    ],
    "datasetIds": [
      "disasters"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_e03",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 6,
    "mode": "execute",
    "title": "地域別再生可能エネルギー",
    "prompt": "地域別再生可能エネルギーを題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "renewable_energy",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "renewable_energy alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "renewable_energy beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "renewable_energy gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "renewable_energy delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM renewable_energy\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "renewable_energy alpha",
          "history"
        ],
        [
          "renewable_energy beta",
          "science"
        ],
        [
          "renewable_energy gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "renewable_energy alpha",
              "history"
            ],
            [
              "renewable_energy beta",
              "science"
            ],
            [
              "renewable_energy gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "renewable_energy gamma",
              "culture"
            ],
            [
              "renewable_energy beta",
              "science"
            ],
            [
              "renewable_energy alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "renewable_energy alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM renewable_energy\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
      "executionSteps": [
        "1. TABLE renewable_energy の列名を確認します。",
        "2. QUERY の group-avg-having に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM renewable_energy\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "group-avg-having は GROUP BY と HAVING の練習です。region別AVG後に基準以上のみ を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "再生可能エネルギーの導入状況は地域によって大きく異なり、水力・風力・太陽光などの利用比率に差があります。",
      "sourceRefs": [
        {
          "title": "IRENA statistics",
          "organization": "IRENA",
          "url": "https://www.irena.org/Data"
        }
      ]
    },
    "sqlConceptIds": [
      "having"
    ],
    "globalFactIds": [
      "gf_sql05_e03"
    ],
    "datasetIds": [
      "renewable_energy"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql05_b01",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 7,
    "mode": "debug",
    "title": "大陸別人口統計",
    "prompt": "大陸別人口統計を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "population_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "population_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "population_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "population_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "population_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM population_records\nWHERE total >= 2\nGROUP BY country;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "population_records alpha",
          "history"
        ],
        [
          "population_records beta",
          "science"
        ],
        [
          "population_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records alpha",
              "history"
            ],
            [
              "population_records beta",
              "science"
            ],
            [
              "population_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records gamma",
              "culture"
            ],
            [
              "population_records beta",
              "science"
            ],
            [
              "population_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM population_records\nGROUP BY region\nHAVING COUNT(*) >= 2;",
      "executionSteps": [
        "1. TABLE population_records の列名を確認します。",
        "2. QUERY の where-vs-having に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM population_records\nGROUP BY region\nHAVING COUNT(*) >= 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "where-vs-having は GROUP BY と HAVING の練習です。集計条件をWHERE→HAVING を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界人口は大陸ごとに大きな差があり、アジアが世界人口の半数以上を占めています。",
      "sourceRefs": [
        {
          "title": "UN population",
          "organization": "UN",
          "url": "https://population.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "group-by"
    ],
    "globalFactIds": [
      "gf_sql05_b01"
    ],
    "datasetIds": [
      "population_records"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT region, COUNT(*) AS total\nFROM population_records\nGROUP BY region\nHAVING COUNT(*) >= 2;",
          "SELECT region, COUNT(*) AS total\nFROM population_records\nWHERE total >= 2\nGROUP BY country;",
          "SELECT *;"
        ],
        "answer": "SELECT region, COUNT(*) AS total\nFROM population_records\nGROUP BY region\nHAVING COUNT(*) >= 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql05_b02",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 8,
    "mode": "debug",
    "title": "国際大会開催回数",
    "prompt": "国際大会開催回数を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "global_events",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "global_events alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "global_events beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "global_events gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "global_events delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM global_events\nWHERE total >= 2\nGROUP BY country;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "global_events alpha",
          "history"
        ],
        [
          "global_events beta",
          "science"
        ],
        [
          "global_events gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "global_events alpha",
              "history"
            ],
            [
              "global_events beta",
              "science"
            ],
            [
              "global_events gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "global_events gamma",
              "culture"
            ],
            [
              "global_events beta",
              "science"
            ],
            [
              "global_events alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "global_events alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM global_events\nGROUP BY region\nHAVING COUNT(*) >= 2;",
      "executionSteps": [
        "1. TABLE global_events の列名を確認します。",
        "2. QUERY の ungrouped-column に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM global_events\nGROUP BY region\nHAVING COUNT(*) >= 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "ungrouped-column は GROUP BY と HAVING の練習です。非集計列をGROUP_BYへ追加 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "オリンピックやワールドカップなど、国際的なスポーツ大会の開催回数は国・都市によって異なります。",
      "sourceRefs": [
        {
          "title": "Olympic Games",
          "organization": "Olympic",
          "url": "https://olympics.com/ioc/olympic-games"
        }
      ]
    },
    "sqlConceptIds": [
      "having"
    ],
    "globalFactIds": [
      "gf_sql05_b02"
    ],
    "datasetIds": [
      "global_events"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT region, COUNT(*) AS total\nFROM global_events\nGROUP BY region\nHAVING COUNT(*) >= 2;",
          "SELECT region, COUNT(*) AS total\nFROM global_events\nWHERE total >= 2\nGROUP BY country;",
          "SELECT *;"
        ],
        "answer": "SELECT region, COUNT(*) AS total\nFROM global_events\nGROUP BY region\nHAVING COUNT(*) >= 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql05_b03",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 9,
    "mode": "debug",
    "title": "地域別移住記録",
    "prompt": "地域別移住記録を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "migration_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "migration_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "migration_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "migration_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "migration_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM migration_records\nWHERE total >= 2\nGROUP BY country;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "migration_records alpha",
          "history"
        ],
        [
          "migration_records beta",
          "science"
        ],
        [
          "migration_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records alpha",
              "history"
            ],
            [
              "migration_records beta",
              "science"
            ],
            [
              "migration_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records gamma",
              "culture"
            ],
            [
              "migration_records beta",
              "science"
            ],
            [
              "migration_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM migration_records\nGROUP BY region\nHAVING COUNT(*) >= 2;",
      "executionSteps": [
        "1. TABLE migration_records の列名を確認します。",
        "2. QUERY の wrong-group-granularity に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM migration_records\nGROUP BY region\nHAVING COUNT(*) >= 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "wrong-group-granularity は GROUP BY と HAVING の練習です。country別→region別に修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "地域別の移住記録を見ると、経済的なつながりの深い近隣地域への移住が多い傾向が見られます。",
      "sourceRefs": [
        {
          "title": "IOM migration data",
          "organization": "IOM",
          "url": "https://www.iom.int/data-and-research"
        }
      ]
    },
    "sqlConceptIds": [
      "group-by"
    ],
    "globalFactIds": [
      "gf_sql05_b03"
    ],
    "datasetIds": [
      "migration_records"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT region, COUNT(*) AS total\nFROM migration_records\nGROUP BY region\nHAVING COUNT(*) >= 2;",
          "SELECT region, COUNT(*) AS total\nFROM migration_records\nWHERE total >= 2\nGROUP BY country;",
          "SELECT *;"
        ],
        "answer": "SELECT region, COUNT(*) AS total\nFROM migration_records\nGROUP BY region\nHAVING COUNT(*) >= 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql05_m01",
    "courseId": "sql",
    "chapterId": "05_group_having",
    "order": 10,
    "mode": "mission",
    "title": "環境条約参加状況",
    "prompt": "環境条約参加状況を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "treaty_memberships",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaty_memberships alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaty_memberships beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaty_memberships gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaty_memberships delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT region, COUNT(*) AS total\nFROM treaty_memberships\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "treaty_memberships alpha",
          "history"
        ],
        [
          "treaty_memberships beta",
          "science"
        ],
        [
          "treaty_memberships gamma",
          "culture"
        ],
        [
          "treaty_memberships delta",
          "nature"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships delta",
              "nature"
            ],
            [
              "treaty_memberships gamma",
              "culture"
            ],
            [
              "treaty_memberships beta",
              "science"
            ],
            [
              "treaty_memberships alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships alpha",
              "history"
            ],
            [
              "treaty_memberships beta",
              "science"
            ],
            [
              "treaty_memberships gamma",
              "culture"
            ],
            [
              "treaty_memberships delta",
              "nature"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT region, COUNT(*) AS total\nFROM treaty_memberships\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;",
      "executionSteps": [
        "1. TABLE treaty_memberships の列名を確認します。",
        "2. QUERY の group-having-order に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT region, COUNT(*) AS total\nFROM treaty_memberships\nGROUP BY region\nHAVING COUNT(*) >= 2\nORDER BY total DESC;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "group-having-order は GROUP BY と HAVING の練習です。region別参加国数を集計し基準以上を並べる を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際環境条約への参加状況は条約ごとに異なり、各国の環境政策の方向性を反映しています。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "having"
    ],
    "globalFactIds": [
      "gf_sql05_m01"
    ],
    "datasetIds": [
      "treaty_memberships"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql06_d01",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 1,
    "mode": "decode",
    "title": "国と公用語",
    "prompt": "国と公用語を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「country.language_id=languages.id」です。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "languages",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "languages alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "languages beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "languages gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "languages delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT countries.name, languages.language\nFROM countries\nJOIN languages\nON ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "country.language_id=languages.id"
        ]
      ]
    },
    "answer": "country.language_id=languages.id",
    "hint": "RESULT に出したい値は country.language_id=languages.id です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "country.language_id=languages.id",
      "completedQuery": "SELECT countries.name, languages.language\nFROM countries\nJOIN languages\nON country.language_id=languages.id;",
      "executionSteps": [
        "1. TABLE countries, languages の列名を確認します。",
        "2. QUERY の inner-join に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "country.language_id=languages.id"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "inner-join は JOIN の練習です。country.language_id=languages.id を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の国々には公用語が定められており、複数の公用語を持つ国も少なくありません。",
      "sourceRefs": [
        {
          "title": "United Nations official languages",
          "organization": "United",
          "url": "https://www.un.org/en/our-work/official-languages"
        }
      ]
    },
    "sqlConceptIds": [
      "join-basics"
    ],
    "globalFactIds": [
      "gf_sql06_d01"
    ],
    "datasetIds": [
      "countries",
      "languages"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_d02",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 2,
    "mode": "decode",
    "title": "人物とノーベル賞",
    "prompt": "人物とノーベル賞を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「laureate_idで結合」です。",
    "tables": [
      {
        "id": "laureates",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "laureates alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "laureates beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "laureates gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "laureates delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "nobel_awards",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "nobel_awards alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "nobel_awards beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "nobel_awards gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "nobel_awards delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT countries.name, nobel_awards.category\nFROM laureates\nJOIN nobel_awards\nON ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "laureate_idで結合"
        ]
      ]
    },
    "answer": "laureate_idで結合",
    "hint": "RESULT に出したい値は laureate_idで結合 です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "laureate_idで結合",
      "completedQuery": "SELECT countries.name, nobel_awards.category\nFROM laureates\nJOIN nobel_awards\nON laureate_idで結合;",
      "executionSteps": [
        "1. TABLE laureates, nobel_awards の列名を確認します。",
        "2. QUERY の foreign-key に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "laureate_idで結合"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "foreign-key は JOIN の練習です。laureate_idで結合 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "ノーベル賞は科学者・作家・平和活動家など、さまざまな分野の人物に贈られてきました。",
      "sourceRefs": [
        {
          "title": "Nobel Prize facts",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/facts/"
        }
      ]
    },
    "sqlConceptIds": [
      "inner-join"
    ],
    "globalFactIds": [
      "gf_sql06_d02"
    ],
    "datasetIds": [
      "laureates",
      "nobel_awards"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_d03",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 3,
    "mode": "decode",
    "title": "国と世界遺産",
    "prompt": "国と世界遺産を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「country_idで結合」です。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "SELECT countries.name, heritage_sites.name\nFROM countries\nJOIN heritage_sites\nON ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "country_idで結合"
        ]
      ]
    },
    "answer": "country_idで結合",
    "hint": "RESULT に出したい値は country_idで結合 です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "country_idで結合",
      "completedQuery": "SELECT countries.name, heritage_sites.name\nFROM countries\nJOIN heritage_sites\nON country_idで結合;",
      "executionSteps": [
        "1. TABLE countries, heritage_sites の列名を確認します。",
        "2. QUERY の join-on に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "country_idで結合"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "join-on は JOIN の練習です。country_idで結合 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "各国が持つ世界遺産の数は、その国の歴史や自然環境の多様性を反映しています。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "left-join"
    ],
    "globalFactIds": [
      "gf_sql06_d03"
    ],
    "datasetIds": [
      "countries",
      "heritage_sites"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_e01",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 4,
    "mode": "execute",
    "title": "感染症・病原体・ワクチン",
    "prompt": "感染症・病原体・ワクチンを題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "diseases",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "diseases alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "diseases beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "diseases gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "diseases delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "pathogens",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "pathogens alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "pathogens beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "pathogens gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "pathogens delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "vaccines",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "vaccines alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "vaccines beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "vaccines gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "vaccines delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT c.name, x.name\nFROM diseases\nJOIN pathogens\nJOIN vaccines\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "diseases alpha",
          "history"
        ],
        [
          "diseases beta",
          "science"
        ],
        [
          "diseases gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "diseases gamma",
              "culture"
            ],
            [
              "diseases beta",
              "science"
            ],
            [
              "diseases alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "diseases alpha",
              "history"
            ],
            [
              "diseases beta",
              "science"
            ],
            [
              "diseases gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "diseases alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT c.name, x.name\nFROM diseases\nJOIN pathogens\nJOIN vaccines\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
      "executionSteps": [
        "1. TABLE diseases, pathogens, vaccines の列名を確認します。",
        "2. QUERY の three-table-join に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT c.name, x.name\nFROM diseases\nJOIN pathogens\nJOIN vaccines\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "three-table-join は JOIN の練習です。3表の結果追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "感染症ごとに原因となる病原体（ウイルスや細菌）が異なり、それに対応するワクチンが開発されています。",
      "sourceRefs": [
        {
          "title": "WHO vaccines and immunization",
          "organization": "WHO",
          "url": "https://www.who.int/health-topics/vaccines-and-immunization"
        }
      ]
    },
    "sqlConceptIds": [
      "primary-foreign-keys"
    ],
    "globalFactIds": [
      "gf_sql06_e01"
    ],
    "datasetIds": [
      "diseases",
      "pathogens",
      "vaccines"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_e02",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 5,
    "mode": "execute",
    "title": "国際条約と加盟国",
    "prompt": "国際条約と加盟国を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "treaty_memberships",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaty_memberships alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaty_memberships beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaty_memberships gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaty_memberships delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "treaties",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaties alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaties beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaties gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaties delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT c.name, x.name\nFROM countries\nJOIN treaty_memberships\nJOIN treaties\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "countries alpha",
          "history"
        ],
        [
          "countries beta",
          "science"
        ],
        [
          "countries gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries gamma",
              "culture"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT c.name, x.name\nFROM countries\nJOIN treaty_memberships\nJOIN treaties\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
      "executionSteps": [
        "1. TABLE countries, treaty_memberships, treaties の列名を確認します。",
        "2. QUERY の junction-table に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT c.name, x.name\nFROM countries\nJOIN treaty_memberships\nJOIN treaties\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "junction-table は JOIN の練習です。中間表結合 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際条約への加盟国数は条約のテーマや採択時期によって異なり、時間とともに増加することが一般的です。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "join-basics"
    ],
    "globalFactIds": [
      "gf_sql06_e02"
    ],
    "datasetIds": [
      "countries",
      "treaty_memberships",
      "treaties"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_e03",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 6,
    "mode": "execute",
    "title": "宇宙機関と探査計画",
    "prompt": "宇宙機関と探査計画を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "space_agencies",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "space_agencies alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "space_agencies beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "space_agencies gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "space_agencies delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "space_missions",
        "columns": [
          "mission",
          "agency",
          "launch_year",
          "priority",
          "target"
        ],
        "rows": [
          [
            "Sputnik 1",
            "Soviet space program",
            1957,
            1,
            "Earth orbit"
          ],
          [
            "Apollo 11",
            "NASA",
            1969,
            2,
            "Moon"
          ],
          [
            "Voyager 1",
            "NASA",
            1977,
            3,
            "Outer Solar System"
          ],
          [
            "Hayabusa2",
            "JAXA",
            2014,
            4,
            "Ryugu"
          ]
        ]
      }
    ],
    "query": "SELECT c.name, x.name\nFROM space_agencies\nJOIN space_missions\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "space_agencies alpha",
          "history"
        ],
        [
          "space_agencies beta",
          "science"
        ],
        [
          "space_agencies gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "space_agencies alpha",
              "history"
            ],
            [
              "space_agencies beta",
              "science"
            ],
            [
              "space_agencies gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "space_agencies gamma",
              "culture"
            ],
            [
              "space_agencies beta",
              "science"
            ],
            [
              "space_agencies alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "space_agencies alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT c.name, x.name\nFROM space_agencies\nJOIN space_missions\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
      "executionSteps": [
        "1. TABLE space_agencies, space_missions の列名を確認します。",
        "2. QUERY の table-alias-join に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT c.name, x.name\nFROM space_agencies\nJOIN space_missions\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "table-alias-join は JOIN の練習です。別名付き結合結果 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "NASAとESA（欧州宇宙機関）は、ハッブル宇宙望遠鏡など複数の宇宙探査計画で協力してきました。",
      "sourceRefs": [
        {
          "title": "NASA and ESA missions",
          "organization": "NASA",
          "url": "https://www.nasa.gov/missions/"
        }
      ]
    },
    "sqlConceptIds": [
      "inner-join"
    ],
    "globalFactIds": [
      "gf_sql06_e03"
    ],
    "datasetIds": [
      "space_agencies",
      "space_missions"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql06_b01",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 7,
    "mode": "debug",
    "title": "発明者と発明",
    "prompt": "発明者と発明を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "inventors",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "inventors alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "inventors beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "inventors gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "inventors delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "inventions",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "inventions alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "inventions beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "inventions gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "inventions delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM inventors\nJOIN inventions;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "inventors alpha",
          "history"
        ],
        [
          "inventors beta",
          "science"
        ],
        [
          "inventors gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "inventors alpha",
              "history"
            ],
            [
              "inventors beta",
              "science"
            ],
            [
              "inventors gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "inventors gamma",
              "culture"
            ],
            [
              "inventors beta",
              "science"
            ],
            [
              "inventors alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "inventors alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM inventors\nJOIN inventions\nON id = id;",
      "executionSteps": [
        "1. TABLE inventors, inventions の列名を確認します。",
        "2. QUERY の missing-on-cartesian に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM inventors\nJOIN inventions\nON id = id;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "missing-on-cartesian は JOIN の練習です。ON欠落による直積を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "電話、蓄電池、ワクチンなど、多くの重要な発明には特定の発明者が記録されていますが、複数人の貢献が重なる場合もあります。",
      "sourceRefs": [
        {
          "title": "Smithsonian science history",
          "organization": "Smithsonian",
          "url": "https://www.si.edu/spotlight/science-and-technology"
        }
      ]
    },
    "sqlConceptIds": [
      "left-join"
    ],
    "globalFactIds": [
      "gf_sql06_b01"
    ],
    "datasetIds": [
      "inventors",
      "inventions"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM inventors\nJOIN inventions\nON id = id;",
          "SELECT *\nFROM inventors\nJOIN inventions;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM inventors\nJOIN inventions\nON id = id;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql06_b02",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 8,
    "mode": "debug",
    "title": "国と通貨",
    "prompt": "国と通貨を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "currencies",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "currencies alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "currencies beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "currencies gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "currencies delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM countries\nJOIN currencies;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "countries alpha",
          "history"
        ],
        [
          "countries beta",
          "science"
        ],
        [
          "countries gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries gamma",
              "culture"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM countries\nJOIN currencies\nON id = currency_id;",
      "executionSteps": [
        "1. TABLE countries, currencies の列名を確認します。",
        "2. QUERY の wrong-key-duplicate に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM countries\nJOIN currencies\nON id = currency_id;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "wrong-key-duplicate は JOIN の練習です。名称結合→currency_id結合 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "各国の通貨はISO 4217により3文字のコードで管理され、国名と通貨名が一致しない場合もあります。",
      "sourceRefs": [
        {
          "title": "ISO 4217 currency codes",
          "organization": "ISO",
          "url": "https://www.iso.org/iso-4217-currency-codes.html"
        }
      ]
    },
    "sqlConceptIds": [
      "primary-foreign-keys"
    ],
    "globalFactIds": [
      "gf_sql06_b02"
    ],
    "datasetIds": [
      "countries",
      "currencies"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM countries\nJOIN currencies\nON id = currency_id;",
          "SELECT *\nFROM countries\nJOIN currencies;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM countries\nJOIN currencies\nON id = currency_id;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql06_b03",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 9,
    "mode": "debug",
    "title": "国と環境記録",
    "prompt": "国と環境記録を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "environment_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "environment_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "environment_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "environment_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "environment_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM countries\nJOIN environment_records;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "countries alpha",
          "history"
        ],
        [
          "countries beta",
          "science"
        ],
        [
          "countries gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries gamma",
              "culture"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM countries\nJOIN environment_records\nON id = id;",
      "executionSteps": [
        "1. TABLE countries, environment_records の列名を確認します。",
        "2. QUERY の left-join-filter-loss に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM countries\nJOIN environment_records\nON id = id;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "left-join-filter-loss は JOIN の練習です。WHERE条件でNULL行消失を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "各国の環境記録（森林面積や保護地域の割合など）は、UNEPなどの国際機関によって収集・分析されています。",
      "sourceRefs": [
        {
          "title": "UNEP data",
          "organization": "UNEP",
          "url": "https://www.unep.org/resources"
        }
      ]
    },
    "sqlConceptIds": [
      "join-basics"
    ],
    "globalFactIds": [
      "gf_sql06_b03"
    ],
    "datasetIds": [
      "countries",
      "environment_records"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM countries\nJOIN environment_records\nON id = id;",
          "SELECT *\nFROM countries\nJOIN environment_records;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM countries\nJOIN environment_records\nON id = id;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql06_m01",
    "courseId": "sql",
    "chapterId": "06_join",
    "order": 10,
    "mode": "mission",
    "title": "国・地域・国際機関加盟",
    "prompt": "国・地域・国際機関加盟を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "countries",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "countries alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "countries beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "countries gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "countries delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "regions",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "regions alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "regions beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "regions gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "regions delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "organization_memberships",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "organization_memberships alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "organization_memberships beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "organization_memberships gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "organization_memberships delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      },
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT c.name, x.name\nFROM countries\nJOIN regions\nJOIN organization_memberships\nJOIN international_organizations\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "countries alpha",
          "history"
        ],
        [
          "countries beta",
          "science"
        ],
        [
          "countries gamma",
          "culture"
        ],
        [
          "countries delta",
          "nature"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries delta",
              "nature"
            ],
            [
              "countries gamma",
              "culture"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "countries alpha",
              "history"
            ],
            [
              "countries beta",
              "science"
            ],
            [
              "countries gamma",
              "culture"
            ],
            [
              "countries delta",
              "nature"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT c.name, x.name\nFROM countries\nJOIN regions\nJOIN organization_memberships\nJOIN international_organizations\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;",
      "executionSteps": [
        "1. TABLE countries, regions, organization_memberships, international_organizations の列名を確認します。",
        "2. QUERY の three-table-join-filter に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT c.name, x.name\nFROM countries\nJOIN regions\nJOIN organization_memberships\nJOIN international_organizations\nON c.id = x.country_id\nWHERE c.region = 'Asia'\nORDER BY c.name;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "three-table-join-filter は JOIN の練習です。3段階結合+条件+表示列 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国・地域は複数の国際機関に同時に加盟することができ、その組み合わせは国の外交方針を反映します。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "inner-join"
    ],
    "globalFactIds": [
      "gf_sql06_m01"
    ],
    "datasetIds": [
      "countries",
      "regions",
      "organization_memberships",
      "international_organizations"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql07_d01",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 1,
    "mode": "decode",
    "title": "終了年未定の国際計画",
    "prompt": "終了年未定の国際計画を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「end_year IS NULL」です。",
    "tables": [
      {
        "id": "international_programs",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "international_programs alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "international_programs beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "international_programs gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "international_programs delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name\nFROM international_programs\nWHERE ___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "end_year IS NULL"
        ]
      ]
    },
    "answer": "end_year IS NULL",
    "hint": "RESULT に出したい値は end_year IS NULL です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "end_year IS NULL",
      "completedQuery": "SELECT name\nFROM international_programs\nWHERE end_year IS NULL;",
      "executionSteps": [
        "1. TABLE international_programs の列名を確認します。",
        "2. QUERY の is-null に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "end_year IS NULL"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "is-null は NULL と DISTINCT の練習です。end_year IS NULL を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "一部の国際計画は終了年が定められておらず、継続中のプロジェクトとしてデータ上「終了年未定」と記録されることがあります。",
      "sourceRefs": [
        {
          "title": "UN programmes and funds",
          "organization": "UN",
          "url": "https://www.un.org/en/about-us/funds-programmes-specialized-agencies-and-others"
        }
      ]
    },
    "sqlConceptIds": [
      "null-is-null"
    ],
    "globalFactIds": [
      "gf_sql07_d01"
    ],
    "datasetIds": [
      "international_programs"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_d02",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 2,
    "mode": "decode",
    "title": "複数国で使われる公用語",
    "prompt": "複数国で使われる公用語を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「DISTINCT」です。",
    "tables": [
      {
        "id": "country_languages",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "country_languages alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "country_languages beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "country_languages gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "country_languages delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT ___BLANK___ language_name\nFROM country_languages;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "DISTINCT"
        ]
      ]
    },
    "answer": "DISTINCT",
    "hint": "RESULT に出したい値は DISTINCT です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "DISTINCT",
      "completedQuery": "SELECT DISTINCT language_name\nFROM country_languages;",
      "executionSteps": [
        "1. TABLE country_languages の列名を確認します。",
        "2. QUERY の distinct に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "DISTINCT"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "distinct は NULL と DISTINCT の練習です。DISTINCT language_name を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "フランス語やアラビア語のように、複数の国で公用語として使われている言語があります。",
      "sourceRefs": [
        {
          "title": "United Nations official languages",
          "organization": "United",
          "url": "https://www.un.org/en/our-work/official-languages"
        }
      ]
    },
    "sqlConceptIds": [
      "distinct"
    ],
    "globalFactIds": [
      "gf_sql07_d02"
    ],
    "datasetIds": [
      "country_languages"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_d03",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 3,
    "mode": "decode",
    "title": "発明者不明の歴史資料",
    "prompt": "発明者不明の歴史資料を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「COALESCE(inventor, '不明')」です。",
    "tables": [
      {
        "id": "inventions",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "inventions alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "inventions beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "inventions gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "inventions delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT name, ___BLANK___ AS inventor_label\nFROM inventions;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "COALESCE(inventor, '不明')"
        ]
      ]
    },
    "answer": "COALESCE(inventor, '不明')",
    "hint": "RESULT に出したい値は COALESCE(inventor, '不明') です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "COALESCE(inventor, '不明')",
      "completedQuery": "SELECT name, COALESCE(inventor, '不明') AS inventor_label\nFROM inventions;",
      "executionSteps": [
        "1. TABLE inventions の列名を確認します。",
        "2. QUERY の coalesce に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "COALESCE(inventor, '不明')"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "coalesce は NULL と DISTINCT の練習です。COALESCE(inventor,'不明') を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "一部の歴史的な発明や発見は、発明者が特定されていない、または記録が不確かなものもあります。",
      "sourceRefs": [
        {
          "title": "Smithsonian science history",
          "organization": "Smithsonian",
          "url": "https://www.si.edu/spotlight/science-and-technology"
        }
      ]
    },
    "sqlConceptIds": [
      "coalesce"
    ],
    "globalFactIds": [
      "gf_sql07_d03"
    ],
    "datasetIds": [
      "inventions"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_e01",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 4,
    "mode": "execute",
    "title": "国境をまたぐ世界遺産",
    "prompt": "国境をまたぐ世界遺産を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "heritage_country_links",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "heritage_country_links alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "heritage_country_links beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "heritage_country_links gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "heritage_country_links delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM heritage_country_links\nORDER BY name_label;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "heritage_country_links alpha",
          "history"
        ],
        [
          "heritage_country_links beta",
          "science"
        ],
        [
          "heritage_country_links gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "heritage_country_links gamma",
              "culture"
            ],
            [
              "heritage_country_links beta",
              "science"
            ],
            [
              "heritage_country_links alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "heritage_country_links alpha",
              "history"
            ],
            [
              "heritage_country_links beta",
              "science"
            ],
            [
              "heritage_country_links gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "heritage_country_links alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM heritage_country_links\nORDER BY name_label;",
      "executionSteps": [
        "1. TABLE heritage_country_links の列名を確認します。",
        "2. QUERY の distinct-result に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM heritage_country_links\nORDER BY name_label;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "distinct-result は NULL と DISTINCT の練習です。重複国名をDISTINCTで除去 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "一部の世界遺産は複数の国の国境をまたいで登録されており、「越境世界遺産」と呼ばれます。",
      "sourceRefs": [
        {
          "title": "UNESCO transboundary sites",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "null-is-null"
    ],
    "globalFactIds": [
      "gf_sql07_e01"
    ],
    "datasetIds": [
      "heritage_country_links"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_e02",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 5,
    "mode": "execute",
    "title": "個人・団体のノーベル賞",
    "prompt": "個人・団体のノーベル賞を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "nobel_awards",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "nobel_awards alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "nobel_awards beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "nobel_awards gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "nobel_awards delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM nobel_awards\nORDER BY name_label;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "nobel_awards alpha",
          "history"
        ],
        [
          "nobel_awards beta",
          "science"
        ],
        [
          "nobel_awards gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards gamma",
              "culture"
            ],
            [
              "nobel_awards beta",
              "science"
            ],
            [
              "nobel_awards alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "nobel_awards alpha",
              "history"
            ],
            [
              "nobel_awards beta",
              "science"
            ],
            [
              "nobel_awards gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM nobel_awards\nORDER BY name_label;",
      "executionSteps": [
        "1. TABLE nobel_awards の列名を確認します。",
        "2. QUERY の null-trace に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM nobel_awards\nORDER BY name_label;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "null-trace は NULL と DISTINCT の練習です。person_name/org_nameのNULL追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "ノーベル賞は個人だけでなく、国際赤十字委員会のような団体にも複数回贈られています。",
      "sourceRefs": [
        {
          "title": "Nobel Prize facts",
          "organization": "Nobel",
          "url": "https://www.nobelprize.org/prizes/facts/"
        }
      ]
    },
    "sqlConceptIds": [
      "distinct"
    ],
    "globalFactIds": [
      "gf_sql07_e02"
    ],
    "datasetIds": [
      "nobel_awards"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_e03",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 6,
    "mode": "execute",
    "title": "移住・難民統計",
    "prompt": "移住・難民統計を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "migration_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "migration_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "migration_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "migration_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "migration_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM migration_records\nORDER BY name_label;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "migration_records alpha",
          "history"
        ],
        [
          "migration_records beta",
          "science"
        ],
        [
          "migration_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records alpha",
              "history"
            ],
            [
              "migration_records beta",
              "science"
            ],
            [
              "migration_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records gamma",
              "culture"
            ],
            [
              "migration_records beta",
              "science"
            ],
            [
              "migration_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "migration_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM migration_records\nORDER BY name_label;",
      "executionSteps": [
        "1. TABLE migration_records の列名を確認します。",
        "2. QUERY の null-fallback に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM migration_records\nORDER BY name_label;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "null-fallback は NULL と DISTINCT の練習です。COALESCEで欠損値を代替表示 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "UNHCR（国連難民高等弁務官事務所）は、難民や国内避難民の保護・支援に関する統計を収集・公表しています。",
      "sourceRefs": [
        {
          "title": "UNHCR refugee data",
          "organization": "UNHCR",
          "url": "https://www.unhcr.org/refugee-statistics/"
        }
      ]
    },
    "sqlConceptIds": [
      "coalesce"
    ],
    "globalFactIds": [
      "gf_sql07_e03"
    ],
    "datasetIds": [
      "migration_records"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql07_b01",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 7,
    "mode": "debug",
    "title": "終了日不明の国際条約",
    "prompt": "終了日不明の国際条約を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "treaties",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaties alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaties beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaties gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaties delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM treaties\nWHERE end_date = NULL;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "treaties alpha",
          "history"
        ],
        [
          "treaties beta",
          "science"
        ],
        [
          "treaties gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaties alpha",
              "history"
            ],
            [
              "treaties beta",
              "science"
            ],
            [
              "treaties gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaties gamma",
              "culture"
            ],
            [
              "treaties beta",
              "science"
            ],
            [
              "treaties alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaties alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM treaties\nWHERE end_date IS NULL;",
      "executionSteps": [
        "1. TABLE treaties の列名を確認します。",
        "2. QUERY の null-comparison に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM treaties\nWHERE end_date IS NULL;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "null-comparison は NULL と DISTINCT の練習です。end_date=NULL→IS NULL を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際条約の中には、終了日が定められていない（無期限に効力を持つ）ものが多く存在します。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "null-is-null"
    ],
    "globalFactIds": [
      "gf_sql07_b01"
    ],
    "datasetIds": [
      "treaties"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM treaties\nWHERE end_date IS NULL;",
          "SELECT *\nFROM treaties\nWHERE end_date = NULL;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM treaties\nWHERE end_date IS NULL;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql07_b02",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 8,
    "mode": "debug",
    "title": "多言語国家一覧",
    "prompt": "多言語国家一覧を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "country_languages",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "country_languages alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "country_languages beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "country_languages gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "country_languages delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM country_languages\nWHERE end_date = NULL;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "country_languages alpha",
          "history"
        ],
        [
          "country_languages beta",
          "science"
        ],
        [
          "country_languages gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "country_languages alpha",
              "history"
            ],
            [
              "country_languages beta",
              "science"
            ],
            [
              "country_languages gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "country_languages gamma",
              "culture"
            ],
            [
              "country_languages beta",
              "science"
            ],
            [
              "country_languages alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "country_languages alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM country_languages\nWHERE end_date IS NULL;",
      "executionSteps": [
        "1. TABLE country_languages の列名を確認します。",
        "2. QUERY の wrong-distinct-columns に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM country_languages\nWHERE end_date IS NULL;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "wrong-distinct-columns は NULL と DISTINCT の練習です。DISTINCT country,language→目的列のみへ修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "複数の公用語を持つ「多言語国家」は世界に多く存在し、その背景には民族構成や歴史的経緯があります。",
      "sourceRefs": [
        {
          "title": "United Nations official languages",
          "organization": "United",
          "url": "https://www.un.org/en/our-work/official-languages"
        }
      ]
    },
    "sqlConceptIds": [
      "distinct"
    ],
    "globalFactIds": [
      "gf_sql07_b02"
    ],
    "datasetIds": [
      "country_languages"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM country_languages\nWHERE end_date IS NULL;",
          "SELECT *\nFROM country_languages\nWHERE end_date = NULL;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM country_languages\nWHERE end_date IS NULL;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql07_b03",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 9,
    "mode": "debug",
    "title": "国際機関の正式名と別名",
    "prompt": "国際機関の正式名と別名を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "organization_aliases",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "organization_aliases alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "organization_aliases beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "organization_aliases gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "organization_aliases delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "SELECT *\nFROM organization_aliases\nWHERE end_date = NULL;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "organization_aliases alpha",
          "history"
        ],
        [
          "organization_aliases beta",
          "science"
        ],
        [
          "organization_aliases gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "organization_aliases alpha",
              "history"
            ],
            [
              "organization_aliases beta",
              "science"
            ],
            [
              "organization_aliases gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "organization_aliases gamma",
              "culture"
            ],
            [
              "organization_aliases beta",
              "science"
            ],
            [
              "organization_aliases alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "organization_aliases alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT *\nFROM organization_aliases\nWHERE end_date IS NULL;",
      "executionSteps": [
        "1. TABLE organization_aliases の列名を確認します。",
        "2. QUERY の duplicate-alias に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT *\nFROM organization_aliases\nWHERE end_date IS NULL;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "duplicate-alias は NULL と DISTINCT の練習です。正式名/別名の重複除去を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際機関には正式名称と、日常的に使われる略称や別名が存在することが多くあります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "coalesce"
    ],
    "globalFactIds": [
      "gf_sql07_b03"
    ],
    "datasetIds": [
      "organization_aliases"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "SELECT *\nFROM organization_aliases\nWHERE end_date IS NULL;",
          "SELECT *\nFROM organization_aliases\nWHERE end_date = NULL;",
          "SELECT *;"
        ],
        "answer": "SELECT *\nFROM organization_aliases\nWHERE end_date IS NULL;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql07_m01",
    "courseId": "sql",
    "chapterId": "07_null_distinct",
    "order": 10,
    "mode": "mission",
    "title": "欠損と重複を含む世界組織台帳",
    "prompt": "欠損と重複を含む世界組織台帳を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM international_organizations\nORDER BY name_label;",
    "expectedResult": {
      "columns": [
        "org_code",
        "name"
      ],
      "rows": [
        [
          "UNESCO",
          "United Nations Educational, Scientific and Cultural Organization"
        ],
        [
          "WHO",
          "World Health Organization"
        ],
        [
          "FAO",
          "Food and Agriculture Organization"
        ],
        [
          "UNICEF",
          "United Nations Children’s Fund"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNICEF",
              "United Nations Children’s Fund"
            ],
            [
              "FAO",
              "Food and Agriculture Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "org_code",
            "name"
          ],
          "rows": [
            [
              "UNESCO",
              "United Nations Educational, Scientific and Cultural Organization"
            ],
            [
              "WHO",
              "World Health Organization"
            ],
            [
              "FAO",
              "Food and Agriculture Organization"
            ],
            [
              "UNICEF",
              "United Nations Children’s Fund"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM international_organizations\nORDER BY name_label;",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の null-distinct-coalesce に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SELECT DISTINCT COALESCE(name, '不明') AS name_label\nFROM international_organizations\nORDER BY name_label;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "null-distinct-coalesce は NULL と DISTINCT の練習です。NULL補完+重複除去+並べ替え を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界の組織に関するデータには、欠損（NULLの値）や、同じ組織を指す重複した別名が含まれることがあります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "null-is-null"
    ],
    "globalFactIds": [
      "gf_sql07_m01"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "mission"
  },
  {
    "id": "sql08_d01",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 1,
    "mode": "decode",
    "title": "新規世界遺産レコード",
    "prompt": "新規世界遺産レコードを題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「VALUES (5, 'New Site', 'Cultural')」です。",
    "tables": [
      {
        "id": "heritage_sites",
        "columns": [
          "id",
          "country_id",
          "name",
          "category",
          "inscription_year"
        ],
        "rows": [
          [
            1,
            "JP",
            "Yakushima",
            "Natural",
            1993
          ],
          [
            2,
            "US",
            "Grand Canyon National Park",
            "Natural",
            1979
          ],
          [
            3,
            "FR",
            "Palace of Versailles",
            "Cultural",
            1979
          ],
          [
            4,
            "IN",
            "Taj Mahal",
            "Cultural",
            1983
          ]
        ]
      }
    ],
    "query": "INSERT INTO heritage_sites (id, name, category)\n___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "VALUES (5, 'New Site', 'Cultural')"
        ]
      ]
    },
    "answer": "VALUES (5, 'New Site', 'Cultural')",
    "hint": "RESULT に出したい値は VALUES (5, 'New Site', 'Cultural') です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "VALUES (5, 'New Site', 'Cultural')",
      "completedQuery": "INSERT INTO heritage_sites (id, name, category)\nVALUES (5, 'New Site', 'Cultural');",
      "executionSteps": [
        "1. TABLE heritage_sites の列名を確認します。",
        "2. QUERY の insert-one に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "VALUES (5, 'New Site', 'Cultural')"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "insert-one は INSERT / UPDATE / DELETE の練習です。列とVALUESを対応させる を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界遺産には、新たに登録されたばかりの遺産（新規登録）が毎年一定数追加されています。",
      "sourceRefs": [
        {
          "title": "UNESCO World Heritage List",
          "organization": "UNESCO",
          "url": "https://whc.unesco.org/en/list/"
        }
      ]
    },
    "sqlConceptIds": [
      "insert"
    ],
    "globalFactIds": [
      "gf_sql08_d01"
    ],
    "datasetIds": [
      "heritage_sites"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_d02",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 2,
    "mode": "decode",
    "title": "国際機関の名称変更",
    "prompt": "国際機関の名称変更を題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「SET name = 'World Health Organization'」です。",
    "tables": [
      {
        "id": "international_organizations",
        "columns": [
          "org_code",
          "name",
          "headquarters",
          "founded_year",
          "role"
        ],
        "rows": [
          [
            "UNESCO",
            "United Nations Educational, Scientific and Cultural Organization",
            "Paris",
            1945,
            "culture and education"
          ],
          [
            "WHO",
            "World Health Organization",
            "Geneva",
            1948,
            "health"
          ],
          [
            "FAO",
            "Food and Agriculture Organization",
            "Rome",
            1945,
            "food and agriculture"
          ],
          [
            "UNICEF",
            "United Nations Children’s Fund",
            "New York",
            1946,
            "children"
          ]
        ]
      }
    ],
    "query": "UPDATE international_organizations\n___BLANK___\nWHERE org_code = 'WHO';",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "SET name = 'World Health Organization'"
        ]
      ]
    },
    "answer": "SET name = 'World Health Organization'",
    "hint": "RESULT に出したい値は SET name = 'World Health Organization' です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "SET name = 'World Health Organization'",
      "completedQuery": "UPDATE international_organizations\nSET name = 'World Health Organization'\nWHERE org_code = 'WHO';",
      "executionSteps": [
        "1. TABLE international_organizations の列名を確認します。",
        "2. QUERY の update-one に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "SET name = 'World Health Organization'"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "update-one は INSERT / UPDATE / DELETE の練習です。SET+WHEREで1件更新 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際機関の中には、設立後に名称が変更されたものもあり、旧名称が歴史的な資料に残っていることがあります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "update"
    ],
    "globalFactIds": [
      "gf_sql08_d02"
    ],
    "datasetIds": [
      "international_organizations"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_d03",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 3,
    "mode": "decode",
    "title": "重複した別名データ",
    "prompt": "重複した別名データを題材に、期待される RESULT と同じ結果になるように QUERY の空欄を埋めてください。期待される値は「WHERE alias = 'duplicate'」です。",
    "tables": [
      {
        "id": "organization_aliases",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "organization_aliases alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "organization_aliases beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "organization_aliases gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "organization_aliases delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "DELETE FROM organization_aliases\n___BLANK___;",
    "expectedResult": {
      "columns": [
        "expected"
      ],
      "rows": [
        [
          "WHERE alias = 'duplicate'"
        ]
      ]
    },
    "answer": "WHERE alias = 'duplicate'",
    "hint": "RESULT に出したい値は WHERE alias = 'duplicate' です。列名、句、キーワードをそのまま確認しましょう。",
    "explanation": {
      "correctAnswer": "WHERE alias = 'duplicate'",
      "completedQuery": "DELETE FROM organization_aliases\nWHERE alias = 'duplicate';",
      "executionSteps": [
        "1. TABLE organization_aliases の列名を確認します。",
        "2. QUERY の delete-one に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "WHERE alias = 'duplicate'"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "delete-one は INSERT / UPDATE / DELETE の練習です。WHERE付きDELETE を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "組織や人物のデータには、同じ対象を指す複数の表記（別名）が重複して記録されることがあります。",
      "sourceRefs": [
        {
          "title": "United Nations system",
          "organization": "United",
          "url": "https://www.un.org/en/about-us/un-system"
        }
      ]
    },
    "sqlConceptIds": [
      "delete"
    ],
    "globalFactIds": [
      "gf_sql08_d03"
    ],
    "datasetIds": [
      "organization_aliases"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_e01",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 4,
    "mode": "execute",
    "title": "国際記念日の登録",
    "prompt": "国際記念日の登録を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "international_days",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "international_days alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "international_days beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "international_days gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "international_days delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "-- preview first\nSELECT * FROM international_days WHERE id = 2;\nUPDATE international_days\nSET value = 99\nWHERE id = 2;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "international_days alpha",
          "history"
        ],
        [
          "international_days beta",
          "science"
        ],
        [
          "international_days gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days gamma",
              "culture"
            ],
            [
              "international_days beta",
              "science"
            ],
            [
              "international_days alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days alpha",
              "history"
            ],
            [
              "international_days beta",
              "science"
            ],
            [
              "international_days gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "international_days alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "-- preview first\nSELECT * FROM international_days WHERE id = 2;\nUPDATE international_days\nSET value = 99\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE international_days の列名を確認します。",
        "2. QUERY の multi-row-insert に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "-- preview first\nSELECT * FROM international_days WHERE id = 2;\nUPDATE international_days\nSET value = 99\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "multi-row-insert は INSERT / UPDATE / DELETE の練習です。複数行INSERT後の表を追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国連の国際記念日は随時新しく登録されることがあり、近年新たに定められた記念日も存在します。",
      "sourceRefs": [
        {
          "title": "UN Observances",
          "organization": "UN",
          "url": "https://www.un.org/en/observances"
        }
      ]
    },
    "sqlConceptIds": [
      "insert"
    ],
    "globalFactIds": [
      "gf_sql08_e01"
    ],
    "datasetIds": [
      "international_days"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_e02",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 5,
    "mode": "execute",
    "title": "条約批准日の補完",
    "prompt": "条約批准日の補完を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "treaty_memberships",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "treaty_memberships alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "treaty_memberships beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "treaty_memberships gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "treaty_memberships delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "-- preview first\nSELECT * FROM treaty_memberships WHERE id = 2;\nUPDATE treaty_memberships\nSET value = 99\nWHERE id = 2;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "treaty_memberships alpha",
          "history"
        ],
        [
          "treaty_memberships beta",
          "science"
        ],
        [
          "treaty_memberships gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships gamma",
              "culture"
            ],
            [
              "treaty_memberships beta",
              "science"
            ],
            [
              "treaty_memberships alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "treaty_memberships alpha",
              "history"
            ],
            [
              "treaty_memberships beta",
              "science"
            ],
            [
              "treaty_memberships gamma",
              "culture"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "-- preview first\nSELECT * FROM treaty_memberships WHERE id = 2;\nUPDATE treaty_memberships\nSET value = 99\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE treaty_memberships の列名を確認します。",
        "2. QUERY の conditional-update に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "-- preview first\nSELECT * FROM treaty_memberships WHERE id = 2;\nUPDATE treaty_memberships\nSET value = 99\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "conditional-update は INSERT / UPDATE / DELETE の練習です。NULL行のみUPDATE後を追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "国際条約の批准日が記録されていない、または後から確認・補完されるケースがあります。",
      "sourceRefs": [
        {
          "title": "United Nations Treaty Collection",
          "organization": "United",
          "url": "https://treaties.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "update"
    ],
    "globalFactIds": [
      "gf_sql08_e02"
    ],
    "datasetIds": [
      "treaty_memberships"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_e03",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 6,
    "mode": "execute",
    "title": "重複した歴史事件記録",
    "prompt": "重複した歴史事件記録を題材に、TABLE と QUERY を上から順に読み、実行結果として正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "historical_events",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "historical_events alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "historical_events beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "historical_events gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "historical_events delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "-- preview first\nSELECT * FROM historical_events WHERE id = 2;\nUPDATE historical_events\nSET value = 99\nWHERE id = 2;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "historical_events alpha",
          "history"
        ],
        [
          "historical_events beta",
          "science"
        ],
        [
          "historical_events gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events alpha",
              "history"
            ],
            [
              "historical_events beta",
              "science"
            ],
            [
              "historical_events gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events gamma",
              "culture"
            ],
            [
              "historical_events beta",
              "science"
            ],
            [
              "historical_events alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "historical_events alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "-- preview first\nSELECT * FROM historical_events WHERE id = 2;\nUPDATE historical_events\nSET value = 99\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE historical_events の列名を確認します。",
        "2. QUERY の conditional-delete に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "-- preview first\nSELECT * FROM historical_events WHERE id = 2;\nUPDATE historical_events\nSET value = 99\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "conditional-delete は INSERT / UPDATE / DELETE の練習です。指定条件DELETE後を追跡 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "歴史上の重要な出来事の記録には、異なる資料で日付や詳細が異なる「重複した記録」が存在することがあります。",
      "sourceRefs": [
        {
          "title": "UN history",
          "organization": "UN",
          "url": "https://www.un.org/en/about-us/history-of-the-un"
        }
      ]
    },
    "sqlConceptIds": [
      "delete"
    ],
    "globalFactIds": [
      "gf_sql08_e03"
    ],
    "datasetIds": [
      "historical_events"
    ],
    "difficulty": "intermediate"
  },
  {
    "id": "sql08_b01",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 7,
    "mode": "debug",
    "title": "固定年人口データの訂正",
    "prompt": "固定年人口データの訂正を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "population_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "population_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "population_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "population_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "population_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "UPDATE population_records\nSET value = 0;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "population_records alpha",
          "history"
        ],
        [
          "population_records beta",
          "science"
        ],
        [
          "population_records gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records alpha",
              "history"
            ],
            [
              "population_records beta",
              "science"
            ],
            [
              "population_records gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records gamma",
              "culture"
            ],
            [
              "population_records beta",
              "science"
            ],
            [
              "population_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "population_records alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "UPDATE population_records\nSET value = 0\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE population_records の列名を確認します。",
        "2. QUERY の update-without-where に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "UPDATE population_records\nSET value = 0\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "update-without-where は INSERT / UPDATE / DELETE の練習です。全行更新を特定行更新へ修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "固定年（特定の年）の人口データは、後の調査によって訂正されることがあります。",
      "sourceRefs": [
        {
          "title": "UN population",
          "organization": "UN",
          "url": "https://population.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "insert"
    ],
    "globalFactIds": [
      "gf_sql08_b01"
    ],
    "datasetIds": [
      "population_records"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "UPDATE population_records\nSET value = 0\nWHERE id = 2;",
          "UPDATE population_records\nSET value = 0;",
          "SELECT *;"
        ],
        "answer": "UPDATE population_records\nSET value = 0\nWHERE id = 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql08_b02",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 8,
    "mode": "debug",
    "title": "災害台帳の整理",
    "prompt": "災害台帳の整理を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "disasters",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "disasters alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "disasters beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "disasters gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "disasters delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "UPDATE disasters\nSET value = 0;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "disasters alpha",
          "history"
        ],
        [
          "disasters beta",
          "science"
        ],
        [
          "disasters gamma",
          "culture"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters gamma",
              "culture"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters gamma",
              "culture"
            ],
            [
              "disasters beta",
              "science"
            ],
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "disasters alpha",
              "history"
            ]
          ]
        }
      }
    ],
    "answer": "a",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "UPDATE disasters\nSET value = 0\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE disasters の列名を確認します。",
        "2. QUERY の broad-delete-condition に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "UPDATE disasters\nSET value = 0\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "broad-delete-condition は INSERT / UPDATE / DELETE の練習です。広すぎるDELETE条件を修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "災害台帳（記録のデータベース）は、重複した記録や分類の見直しなど、継続的な整理作業が行われています。",
      "sourceRefs": [
        {
          "title": "UNDRR terminology",
          "organization": "UNDRR",
          "url": "https://www.undrr.org/terminology/disaster"
        }
      ]
    },
    "sqlConceptIds": [
      "update"
    ],
    "globalFactIds": [
      "gf_sql08_b02"
    ],
    "datasetIds": [
      "disasters"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "UPDATE disasters\nSET value = 0\nWHERE id = 2;",
          "UPDATE disasters\nSET value = 0;",
          "SELECT *;"
        ],
        "answer": "UPDATE disasters\nSET value = 0\nWHERE id = 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql08_b03",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 9,
    "mode": "debug",
    "title": "宇宙探査記録の追加",
    "prompt": "宇宙探査記録の追加を題材に、壊れた QUERY の原因、修正、影響を3段階で確認してください。",
    "tables": [
      {
        "id": "space_missions",
        "columns": [
          "mission",
          "agency",
          "launch_year",
          "priority",
          "target"
        ],
        "rows": [
          [
            "Sputnik 1",
            "Soviet space program",
            1957,
            1,
            "Earth orbit"
          ],
          [
            "Apollo 11",
            "NASA",
            1969,
            2,
            "Moon"
          ],
          [
            "Voyager 1",
            "NASA",
            1977,
            3,
            "Outer Solar System"
          ],
          [
            "Hayabusa2",
            "JAXA",
            2014,
            4,
            "Ryugu"
          ]
        ]
      }
    ],
    "query": "UPDATE space_missions\nSET value = 0;",
    "expectedResult": {
      "columns": [
        "mission",
        "agency"
      ],
      "rows": [
        [
          "Sputnik 1",
          "Soviet space program"
        ],
        [
          "Apollo 11",
          "NASA"
        ],
        [
          "Voyager 1",
          "NASA"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "結果A",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Voyager 1",
              "NASA"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "結果B",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Voyager 1",
              "NASA"
            ],
            [
              "Apollo 11",
              "NASA"
            ],
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "結果C",
        "result": {
          "columns": [
            "mission",
            "agency"
          ],
          "rows": [
            [
              "Sputnik 1",
              "Soviet space program"
            ]
          ]
        }
      }
    ],
    "answer": "b",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "UPDATE space_missions\nSET value = 0\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE space_missions の列名を確認します。",
        "2. QUERY の insert-column-value-mismatch に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "UPDATE space_missions\nSET value = 0\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "insert-column-value-mismatch は INSERT / UPDATE / DELETE の練習です。列数/順序とVALUESを修正 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "宇宙探査の記録は、新しいミッションが実施されるたびに追加され、データベースは常に更新され続けています。",
      "sourceRefs": [
        {
          "title": "NASA history",
          "organization": "NASA",
          "url": "https://www.nasa.gov/history/"
        }
      ]
    },
    "sqlConceptIds": [
      "delete"
    ],
    "globalFactIds": [
      "gf_sql08_b03"
    ],
    "datasetIds": [
      "space_missions"
    ],
    "difficulty": "intermediate",
    "debugSteps": [
      {
        "type": "cause",
        "question": "原因はどれですか？",
        "options": [
          "列名・条件・句の使い方が目的とずれている",
          "表の行数が多すぎる",
          "SQLは常に行順を保証する"
        ],
        "answer": "列名・条件・句の使い方が目的とずれている"
      },
      {
        "type": "fix",
        "question": "正しい修正はどれですか？",
        "options": [
          "UPDATE space_missions\nSET value = 0\nWHERE id = 2;",
          "UPDATE space_missions\nSET value = 0;",
          "SELECT *;"
        ],
        "answer": "UPDATE space_missions\nSET value = 0\nWHERE id = 2;"
      },
      {
        "type": "reason-impact",
        "question": "修正の効果はどれですか？",
        "options": [
          "目的の列・行だけを安定して取得できる",
          "全データを削除できる",
          "NULLが0に変わる"
        ],
        "answer": "目的の列・行だけを安定して取得できる"
      }
    ]
  },
  {
    "id": "sql08_m01",
    "courseId": "sql",
    "chapterId": "08_write",
    "order": 10,
    "mode": "mission",
    "title": "世界知識データベースの訂正",
    "prompt": "世界知識データベースの訂正を題材に、この章までの構文を組み合わせて正しい RESULT を選んでください。",
    "tables": [
      {
        "id": "world_knowledge_records",
        "columns": [
          "name",
          "category",
          "year",
          "region",
          "value"
        ],
        "rows": [
          [
            "world_knowledge_records alpha",
            "history",
            1901,
            "Europe",
            12
          ],
          [
            "world_knowledge_records beta",
            "science",
            1945,
            "Americas",
            28
          ],
          [
            "world_knowledge_records gamma",
            "culture",
            1972,
            "Asia",
            null
          ],
          [
            "world_knowledge_records delta",
            "nature",
            2001,
            "Africa",
            41
          ]
        ]
      }
    ],
    "query": "-- preview first\nSELECT * FROM world_knowledge_records WHERE id = 2;\nUPDATE world_knowledge_records\nSET value = 99\nWHERE id = 2;",
    "expectedResult": {
      "columns": [
        "name",
        "category"
      ],
      "rows": [
        [
          "world_knowledge_records alpha",
          "history"
        ],
        [
          "world_knowledge_records beta",
          "science"
        ],
        [
          "world_knowledge_records gamma",
          "culture"
        ],
        [
          "world_knowledge_records delta",
          "nature"
        ]
      ]
    },
    "options": [
      {
        "id": "a",
        "label": "??A",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "world_knowledge_records delta",
              "nature"
            ],
            [
              "world_knowledge_records gamma",
              "culture"
            ],
            [
              "world_knowledge_records beta",
              "science"
            ],
            [
              "world_knowledge_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "b",
        "label": "??B",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "world_knowledge_records alpha",
              "history"
            ]
          ]
        }
      },
      {
        "id": "c",
        "label": "??C",
        "result": {
          "columns": [
            "name",
            "category"
          ],
          "rows": [
            [
              "world_knowledge_records alpha",
              "history"
            ],
            [
              "world_knowledge_records beta",
              "science"
            ],
            [
              "world_knowledge_records gamma",
              "culture"
            ],
            [
              "world_knowledge_records delta",
              "nature"
            ]
          ]
        }
      }
    ],
    "answer": "c",
    "hint": "QUERY の SELECT、FROM、WHERE、ORDER BY などを上から順に読んでください。",
    "explanation": {
      "correctAnswer": "結果A",
      "completedQuery": "-- preview first\nSELECT * FROM world_knowledge_records WHERE id = 2;\nUPDATE world_knowledge_records\nSET value = 99\nWHERE id = 2;",
      "executionSteps": [
        "1. TABLE world_knowledge_records の列名を確認します。",
        "2. QUERY の safe-write-sequence に関わる句を読みます。",
        "3. 条件に合う行と表示する列を決め、RESULT を作ります。"
      ],
      "commonMistakes": [
        {
          "wrong": "題材名だけで答える",
          "reason": "SQLでは列名・表名・条件が答えになります。",
          "correct": "-- preview first\nSELECT * FROM world_knowledge_records WHERE id = 2;\nUPDATE world_knowledge_records\nSET value = 99\nWHERE id = 2;"
        },
        {
          "wrong": "行順を思い込みで読む",
          "reason": "ORDER BY がない場合、行順は採点対象にしません。",
          "correct": "ORDER BY がある時だけ順序まで確認します。"
        }
      ],
      "sqlExplanation": "safe-write-sequence は INSERT / UPDATE / DELETE の練習です。対象確認→INSERT→UPDATE→DELETEを安全に判断 を満たすため、QUERY のどの句が行・列・順序・集計に効くのかを分けて読みます。",
      "themeExplanation": "世界知識データベース全体としては、データの欠損・重複・表記ゆれといった問題を継続的に訂正していく必要があります。",
      "sourceRefs": [
        {
          "title": "UN data",
          "organization": "UN",
          "url": "https://data.un.org/"
        }
      ]
    },
    "sqlConceptIds": [
      "insert"
    ],
    "globalFactIds": [
      "gf_sql08_m01"
    ],
    "datasetIds": [
      "world_knowledge_records"
    ],
    "difficulty": "mission"
  }
];

export const SQL_QUESTIONS_BY_ID = Object.fromEntries(SQL_QUESTIONS.map(question => [question.id, question]));

export const SQL_QUESTIONS_BY_CHAPTER = SQL_QUESTIONS.reduce((byChapter, question) => {
  if (!byChapter[question.chapterId]) byChapter[question.chapterId] = [];
  byChapter[question.chapterId].push(question);
  return byChapter;
}, {});

for (const questions of Object.values(SQL_QUESTIONS_BY_CHAPTER)) {
  questions.sort((a, b) => a.order - b.order);
}

export function getSqlQuestionsForChapter(chapterId) {
  return SQL_QUESTIONS_BY_CHAPTER[chapterId] || [];
}
