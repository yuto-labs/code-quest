import { FINAL_CHILD_COUNT, QUESTION_COUNT_TARGETS } from './question_targets.js';

export const FINAL_MISSION_TYPES = Object.freeze({
  decode: 'DECODE_FINAL',
  execute: 'EXECUTE_FINAL',
  debug: 'DEBUG_FINAL',
});

export function buildFinalMissionId(worldId, countryId, languageId) {
  return `final_${worldId}_${countryId}_${languageId}`;
}

export function buildFinalChildId(worldId, countryId, languageId, childIndex) {
  return `${buildFinalMissionId(worldId, countryId, languageId)}_${String(childIndex).padStart(2, '0')}`;
}

function finalChildIds(worldId, countryId, languageId) {
  return Array.from(
    { length: FINAL_CHILD_COUNT },
    (_, index) => buildFinalChildId(worldId, countryId, languageId, index + 1),
  );
}

function withFinalArchitecture(worldId, countryId, languageId, mission) {
  return {
    ...mission,
    id: buildFinalMissionId(worldId, countryId, languageId),
    worldId,
    countryId,
    languageId,
    targetChildCount: QUESTION_COUNT_TARGETS.final[worldId] || FINAL_CHILD_COUNT,
    childQuestionIds: finalChildIds(worldId, countryId, languageId),
  };
}

export const FINAL_MISSIONS = {
  decode: {
    JP: {
      python: {
        id: "final_decode_JP_python",
        type: "DECODE_FINAL",
        title: "DECODE FINAL: JAPAN PYTHON",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_decode_JP_python_01",
            worldId: "decode",
            languageId: "python",
            conceptId: "dicts",
            questionType: "fill-blank",
            title: "Meiji Constitution promulgation context: dict-plus-comparison",
            description: "1889年に大日本帝国憲法が公布されたという文脈を、辞書・リスト・条件式で扱います。公布年が 1889 年以上で、kind が constitution の記録名だけを表示してください。",
            hint: "`records[0]` は辞書です。`year` と `kind` を条件で確認したあと、表示したい値は同じ辞書の `name` キーにあります。",
            code: "records = [\n    {\"name\": \"Meiji Constitution\", \"year\": 1889, \"kind\": \"constitution\"},\n    {\"name\": \"Cabinet system\", \"year\": 1885, \"kind\": \"government\"}\n]\nrecord = records[0]\nresult = record[___BLANK___] if record[\"year\"] >= 1889 and record[\"kind\"] == \"constitution\" else \"skip\"\nprint(result)",
            blank: "\"name\"",
            explanation: "条件式の前半は `record[\"year\"] >= 1889`、後半は `record[\"kind\"] == \"constitution\"` です。どちらも True なので、`record[\"name\"]` が選ばれて `Meiji Constitution` が表示されます。",
            correctAnswer: "\"name\"",
            completedCode: "records = [\n    {\"name\": \"Meiji Constitution\", \"year\": 1889, \"kind\": \"constitution\"},\n    {\"name\": \"Cabinet system\", \"year\": 1885, \"kind\": \"government\"}\n]\nrecord = records[0]\nresult = record[\"name\"] if record[\"year\"] >= 1889 and record[\"kind\"] == \"constitution\" else \"skip\"\nprint(result)",
            executionSteps: [
              "`records[0]` で大日本帝国憲法の辞書を取り出す。",
              "`year` が 1889 以上か、`kind` が `constitution` かを確認する。",
              "両方 True なので、条件式は `record[\"name\"]` を返す。",
              "`Meiji Constitution` が表示される。"
            ],
            commonMistakes: [
              "`\"year\"` を入れると 1889 が表示され、記録名ではなくなります。",
              "条件式の結果に必要なのは True/False ではなく、条件を満たしたときの `name` です。"
            ],
            programmingExplanation: "Final decode なので、単なる変数表示ではなく、リストから辞書を取り出し、辞書アクセスと比較条件を組み合わせています。空欄には、条件が True のときに取り出したいキーを入れます。",
            countryNote: "大日本帝国憲法は1889年に公布された、日本の近代政治史に関わる重要な憲法です。"
          },
          {
            id: "final_decode_JP_python_02",
            worldId: "decode",
            languageId: "python",
            conceptId: "dicts",
            questionType: "fill-blank",
            title: "Kenzaburo Oe Nobel Literature: list-plus-sort-key",
            description: "Kenzaburo Oe Nobel Literature をコード内データとして使い、list-plus-sort-key を確認します。",
            hint: "表示したい値は fact という変数に保存されています。文字列をもう一度書く必要はありません。",
            code: "fact = \"Kenzaburo Oe Nobel Literature\"\nprint(___BLANK___)",
            blank: "fact",
            explanation: "変数 fact を表示します。 Kenzaburo Oe Nobel Literature は問題文とコード内データに示されています。"
          },
          {
            id: "final_decode_JP_python_03",
            worldId: "decode",
            languageId: "python",
            conceptId: "conditions",
            questionType: "fill-blank",
            title: "Kinkaku-ji and Rokuon-ji naming: alias-resolution-plus-membership",
            description: "Kinkaku-ji and Rokuon-ji naming をコード内データとして使い、alias-resolution-plus-membership を確認します。",
            hint: "print したいのは変数 fact の中身です。空欄には変数名を入れます。",
            code: "fact = \"Kinkaku-ji and Rokuon-ji naming\"\nprint(___BLANK___)",
            blank: "fact",
            explanation: "変数 fact を表示します。 Kinkaku-ji and Rokuon-ji naming は問題文とコード内データに示されています。"
          }
        ]
      },
      javascript: {
        id: "final_decode_JP_javascript",
        type: "DECODE_FINAL",
        title: "DECODE FINAL: JAPAN JAVASCRIPT",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_decode_JP_javascript_01",
            worldId: "decode",
            languageId: "javascript",
            conceptId: "arrays",
            questionType: "fill-blank",
            title: "Hokusai and Thirty-six Views of Mount Fuji: array-method-plus-template",
            description: "Hokusai and Thirty-six Views of Mount Fuji をコード内データとして使い、array-method-plus-template を確認します。",
            hint: "const fact に文字列が入っています。console.log には変数名を渡します。",
            code: "const fact = \"Hokusai and Thirty-six Views of Mount Fuji\";\nconsole.log(___BLANK___);",
            blank: "fact",
            explanation: "変数 fact を表示します。 Hokusai and Thirty-six Views of Mount Fuji は問題文とコード内データに示されています。"
          },
          {
            id: "final_decode_JP_javascript_02",
            worldId: "decode",
            languageId: "javascript",
            conceptId: "objects",
            questionType: "fill-blank",
            title: "Super-Kamiokande: nested-object-plus-boolean",
            description: "Super-Kamiokande をコード内データとして使い、nested-object-plus-boolean を確認します。",
            hint: "表示したい文字列は fact という変数に入っています。",
            code: "const fact = \"Super-Kamiokande\";\nconsole.log(___BLANK___);",
            blank: "fact",
            explanation: "変数 fact を表示します。 Super-Kamiokande は問題文とコード内データに示されています。"
          },
          {
            id: "final_decode_JP_javascript_03",
            worldId: "decode",
            languageId: "javascript",
            conceptId: "arrays",
            questionType: "fill-blank",
            title: "Itsukushima Shrine: set-plus-membership",
            description: "Itsukushima Shrine をコード内データとして使い、set-plus-membership を確認します。",
            hint: "console.log の引数には、上で宣言した fact をそのまま使います。",
            code: "const fact = \"Itsukushima Shrine\";\nconsole.log(___BLANK___);",
            blank: "fact",
            explanation: "変数 fact を表示します。 Itsukushima Shrine は問題文とコード内データに示されています。"
          }
        ]
      }
    }
  },
  execute: {
    JP: {
      python: {
        id: "final_execute_JP_python",
        type: "EXECUTE_FINAL",
        title: "EXECUTE FINAL: JAPAN PYTHON",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_execute_JP_python_01",
            worldId: "execute",
            languageId: "python",
            conceptId: "lists",
            questionType: "output-predict",
            title: "Sacred Sites and Pilgrimage Routes in Kii Mountain Range: nested-filter-plus-sort",
            prompt: "紀伊山地の霊場と参詣道に関するデータを使います。status が open、prefectures に Wakayama を含み、route_km が 5 以上の区間だけを選び、距離が短い順に並べたときの名前を `>` でつないだ出力を追跡してください。",
            code: "routes = [\n    {\"name\": \"Kumano Kodo\", \"prefectures\": [\"Wakayama\", \"Nara\"], \"route_km\": 12, \"status\": \"open\"},\n    {\"name\": \"Koyasan Choishi-michi\", \"prefectures\": [\"Wakayama\"], \"route_km\": 6, \"status\": \"open\"},\n    {\"name\": \"Yoshino Omine\", \"prefectures\": [\"Nara\"], \"route_km\": 9, \"status\": \"open\"},\n    {\"name\": \"Short shrine path\", \"prefectures\": [\"Wakayama\"], \"route_km\": 2, \"status\": \"open\"}\n]\nfiltered = []\nfor route in routes:\n    in_wakayama = \"Wakayama\" in route[\"prefectures\"]\n    long_enough = route[\"route_km\"] >= 5\n    if route[\"status\"] == \"open\" and in_wakayama and long_enough:\n        filtered.append(route)\nordered = sorted(filtered, key=lambda route: route[\"route_km\"])\nnames = [route[\"name\"] for route in ordered]\nprint(\">\".join(names))",
            options: [
              "Koyasan Choishi-michi>Kumano Kodo",
              "Kumano Kodo>Koyasan Choishi-michi",
              "Koyasan Choishi-michi>Short shrine path>Kumano Kodo",
              "Error"
            ],
            answer: "Koyasan Choishi-michi>Kumano Kodo",
            hint: "Wakayama を含み、距離が 5km 以上の open route だけ残します。そのあと `route_km` が小さい順に並びます。",
            explanation: "条件を満たすのは Kumano Kodo と Koyasan Choishi-michi です。距離は 12km と 6km なので、短い順では Koyasan Choishi-michi が先になります。",
            correctAnswer: "Koyasan Choishi-michi>Kumano Kodo",
            executionSteps: [
              "4件の route を順に確認する。",
              "`Wakayama` を含まない Yoshino Omine は除外される。",
              "距離が 2km の Short shrine path は `route_km >= 5` を満たさない。",
              "Kumano Kodo と Koyasan Choishi-michi が `filtered` に残る。",
              "`sorted(..., key=lambda route: route[\"route_km\"])` で 6km の route が先になる。",
              "名前だけを取り出し、`>` で連結して表示する。"
            ],
            commonMistakes: [
              "フィルタ後の順番ではなく、sort 後の順番で答えます。",
              "`prefectures` はリストなので、`\"Wakayama\" in route[\"prefectures\"]` で含有を確認します。",
              "短い道も Wakayama にありますが、距離条件で除外されます。"
            ],
            programmingExplanation: "この Final execute は、ネストした辞書リスト、複数条件の filter、`lambda` による sort、リスト内包表記、文字列 join を組み合わせたトレースです。各段階で残るデータを更新しながら追うと答えが決まります。",
            countryNote: "紀伊山地の霊場と参詣道は、日本の宗教的景観と巡礼路に関わる世界遺産として知られます。"
          },
          {
            id: "final_execute_JP_python_02",
            worldId: "execute",
            languageId: "python",
            conceptId: "variables",
            questionType: "output-predict",
            title: "Kurobe Dam: multi-step-numeric-calculation",
            prompt: "Kurobe Dam をコード内データとして使い、multi-step-numeric-calculation を確認します。",
            code: "route = [\"start\", \"Kurobe Dam\", \"end\"]\nfor index, place in enumerate(route):\n    if index == 1:\n        print(place)",
            options: [
              "Kurobe Dam",
              "other",
              "1",
              "Error"
            ],
            answer: "Kurobe Dam",
            hint: "enumerate(route) の index が1のときだけ表示されます。真ん中の要素を見ます。",
            explanation: "表示データにある Kurobe Dam を使い、処理の流れを追うと Kurobe Dam が出力されます。"
          },
          {
            id: "final_execute_JP_python_03",
            worldId: "execute",
            languageId: "python",
            conceptId: "dicts",
            questionType: "output-predict",
            title: "Gokayama gassho-zukuri villages: group-count-summary",
            prompt: "Gokayama gassho-zukuri villages をコード内データとして使い、group-count-summary を確認します。",
            code: "items = [{\"name\": \"Gokayama gassho-zukuri villages\", \"score\": 2}, {\"name\": \"other\", \"score\": 1}]\nresult = [item[\"name\"] for item in items if item[\"score\"] > 1]\nprint(result[0])",
            options: [
              "Gokayama gassho-zukuri villages",
              "other",
              "1",
              "Error"
            ],
            answer: "Gokayama gassho-zukuri villages",
            hint: "score が1より大きい要素だけ残ります。残った要素の name が答えです。",
            explanation: "表示データにある Gokayama gassho-zukuri villages を使い、処理の流れを追うと Gokayama gassho-zukuri villages が出力されます。"
          }
        ]
      },
      javascript: {
        id: "final_execute_JP_javascript",
        type: "EXECUTE_FINAL",
        title: "EXECUTE FINAL: JAPAN JAVASCRIPT",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_execute_JP_javascript_01",
            worldId: "execute",
            languageId: "javascript",
            conceptId: "arrays",
            questionType: "output-predict",
            title: "Shikoku 88-temple pilgrimage: filter-reduce-route",
            prompt: "Shikoku 88-temple pilgrimage をコード内データとして使い、filter-reduce-route を確認します。",
            code: "const route = { from: \"start\", to: \"Shikoku 88-temple pilgrimage\" };\nconsole.log(route.to);",
            options: [
              "Shikoku 88-temple pilgrimage",
              "other",
              "1",
              "Error"
            ],
            answer: "Shikoku 88-temple pilgrimage",
            hint: "route.to を表示しています。オブジェクトの to プロパティの値を見ます。",
            explanation: "表示データにある Shikoku 88-temple pilgrimage を使い、処理の流れを追うと Shikoku 88-temple pilgrimage が出力されます。"
          },
          {
            id: "final_execute_JP_javascript_02",
            worldId: "execute",
            languageId: "javascript",
            conceptId: "variables",
            questionType: "output-predict",
            title: "Sanriku ria coast: grouping-plus-summary",
            prompt: "Sanriku ria coast をコード内データとして使い、grouping-plus-summary を確認します。",
            code: "const items = [{ name: \"Sanriku ria coast\", score: 2 }, { name: \"other\", score: 1 }];\nconst result = items.filter(item => item.score > 1).map(item => item.name);\nconsole.log(result[0]);",
            options: [
              "Sanriku ria coast",
              "other",
              "1",
              "Error"
            ],
            answer: "Sanriku ria coast",
            hint: "filter で score > 1 を満たす要素だけになり、map で name に変わります。",
            explanation: "表示データにある Sanriku ria coast を使い、処理の流れを追うと Sanriku ria coast が出力されます。"
          },
          {
            id: "final_execute_JP_javascript_03",
            worldId: "execute",
            languageId: "javascript",
            conceptId: "arrays",
            questionType: "output-predict",
            title: "Toyota Production System kanban: queue-simulation",
            prompt: "Toyota Production System kanban をコード内データとして使い、queue-simulation を確認します。",
            code: "const record = { name: \"Toyota Production System kanban\", values: [1, 2, 3] };\nconst total = record.values.reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
            options: [
              "6",
              "other",
              "1",
              "Error"
            ],
            answer: "6",
            hint: "values の 1, 2, 3 を reduce で合計しています。初期値は0です。",
            explanation: "表示データにある Toyota Production System kanban を使い、処理の流れを追うと 6 が出力されます。"
          }
        ]
      }
    }
  },
  debug: {
    JP: {
      python: {
        id: "final_debug_JP_python",
        type: "DEBUG_FINAL",
        title: "DEBUG FINAL: JAPAN PYTHON",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_debug_JP_python_01",
            worldId: "debug",
            languageId: "python",
            conceptId: "conditions",
            questionType: "debug-step",
            title: "Japan Standard Time UTC+9 date rollover: timezone-boundary",
            description: "日本標準時は UTC+9 です。UTC の深夜前後を JST の日付に変換するコードで、日付の繰り上がりを扱う境界バグを直します。",
            code: "from datetime import datetime, timedelta\n\nrecords = [\n    {\"city\": \"Tokyo\", \"utc\": \"2026-06-18 15:30\"},\n    {\"city\": \"Osaka\", \"utc\": \"2026-06-18 14:30\"}\n]\n\ndef to_jst_date(utc_text):\n    utc_time = datetime.strptime(utc_text, \"%Y-%m-%d %H:%M\")\n    jst_time = utc_time + timedelta(hours=9)\n    return utc_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    print(record[\"city\"], to_jst_date(record[\"utc\"]))",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "UTC 2026-06-18 15:30 に 9時間を足すと、日本標準時では 2026-06-19 00:30 になります。しかし関数は UTC 側の日付を返しています。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "JST に変換した `jst_time` ではなく、元の `utc_time` から日付文字列を作っている",
                  "`timedelta(hours=9)` が UTC から JST への変換として常に間違っている",
                  "records の city 名が Tokyo と Osaka になっている"
                ],
                answer: "JST に変換した `jst_time` ではなく、元の `utc_time` から日付文字列を作っている",
                hint: "`jst_time` は計算されています。最後の `return` がどちらの変数を使っているか見ます。",
                explanation: "UTC に9時間を足した後の `jst_time` を使わないと、午前0時をまたいだ日付変更が反映されません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえ、返す日付を JST 変換後の値から作る必要があります。",
                question: "正しい修正はどれですか。",
                options: [
                  "`return jst_time.strftime(\"%Y-%m-%d\")` に変更する",
                  "`timedelta(hours=9)` を `timedelta(hours=-9)` に変更する",
                  "日付だけでなく city も削除して表示を短くする"
                ],
                answer: "`return jst_time.strftime(\"%Y-%m-%d\")` に変更する",
                hint: "変換後の日付を返すには、9時間足したあとの変数を使います。",
                explanation: "`jst_time` は UTC から JST へ変換した結果なので、その日付部分を返すのが正しい修正です。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後、UTC の 15:30 は JST の翌日 00:30 として扱われます。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "JST 変換後の時刻から日付を作るため、午前0時をまたぐケースでも日本の日付を正しく表示できる",
                  "UTC と JST の日付は常に同じなので、表示だけが変わる",
                  "records の件数が増えても必ず同じ日付だけを返す"
                ],
                answer: "JST 変換後の時刻から日付を作るため、午前0時をまたぐケースでも日本の日付を正しく表示できる",
                hint: "境界ケースは `15:30 + 9時間 = 00:30` のように日付が翌日になるところです。",
                explanation: "タイムゾーン変換では、時刻だけでなく日付も変わる場合があります。変換前の日付を返すと、深夜付近の予定や記録が1日ずれてしまいます。"
              }
            ],
            correctAnswer: "JST 変換後の jst_time を返す / return jst_time.strftime(\"%Y-%m-%d\") / 日付またぎを正しく扱う",
            correctedCode: "from datetime import datetime, timedelta\n\nrecords = [\n    {\"city\": \"Tokyo\", \"utc\": \"2026-06-18 15:30\"},\n    {\"city\": \"Osaka\", \"utc\": \"2026-06-18 14:30\"}\n]\n\ndef to_jst_date(utc_text):\n    utc_time = datetime.strptime(utc_text, \"%Y-%m-%d %H:%M\")\n    jst_time = utc_time + timedelta(hours=9)\n    return jst_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    print(record[\"city\"], to_jst_date(record[\"utc\"]))",
            executionSteps: [
              "UTC 文字列を `datetime.strptime` で日時に変換する。",
              "`timedelta(hours=9)` を足して JST の日時を作る。",
              "バグ版では `utc_time.strftime(...)` を返すため、日付またぎが反映されない。",
              "修正版では `jst_time.strftime(...)` を返すため、Tokyo は 2026-06-19 になる。"
            ],
            commonMistakes: [
              "9時間足す処理自体ではなく、最後に返す変数が間違っています。",
              "UTC の日付だけを見ると、JST の深夜後の日付を見落とします。"
            ],
            programmingExplanation: "日時処理では、中間変数を作っただけでは結果に反映されません。変換後の値を後続処理で使う必要があります。特にタイムゾーンは午前0時付近で日付が変わるため、境界ケースをテストすることが大切です。",
            countryNote: "日本標準時は UTC+9 として扱われます。UTC の午後遅い時刻は、日本では翌日の深夜になることがあります。",
            debugExplanation: {
              cause: "JST に変換した `jst_time` を作っているのに、戻り値では変換前の `utc_time` を使っている。",
              fix: "`return utc_time.strftime(...)` を `return jst_time.strftime(...)` に変更する。",
              why: "JST の日付は9時間加算後の日時から計算しないと、午前0時をまたぐケースで1日ずれる。",
              impact: "日本時間の日付表示が正しくなり、深夜の予定・記録・締切などを誤った日付で扱う危険を減らせる。",
              correctedCode: "from datetime import datetime, timedelta\n\nrecords = [\n    {\"city\": \"Tokyo\", \"utc\": \"2026-06-18 15:30\"},\n    {\"city\": \"Osaka\", \"utc\": \"2026-06-18 14:30\"}\n]\n\ndef to_jst_date(utc_text):\n    utc_time = datetime.strptime(utc_text, \"%Y-%m-%d %H:%M\")\n    jst_time = utc_time + timedelta(hours=9)\n    return jst_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    print(record[\"city\"], to_jst_date(record[\"utc\"]))"
            }
          },
          {
            id: "final_debug_JP_python_02",
            worldId: "debug",
            languageId: "python",
            conceptId: "regex",
            questionType: "debug-step",
            title: "Japanese postal code format: regex-validation",
            description: "Japanese postal code format をコード内データとして使い、regex-validation を確認します。",
            code: "data = {\"japanese\": \"Japanese postal code format\"}\nkey = \"Japanese\"\nprint(data[key])",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "Japanese postal code format をコード内データとして使い、regex-validation を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "Japanese postal code format のデータは存在しますが、キー表記が揃っていません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえて、最も安全な修正を選びます。",
                question: "正しい修正はどれですか。",
                options: [
                  "key = key.lower() のように、検索前にキー表記を揃える",
                  "データを空にする",
                  "エラーを無視する"
                ],
                answer: "key = key.lower() のように、検索前にキー表記を揃える",
                hint: "データを消すのではなく、検索前の key を data 側のキーと同じ形にそろえる修正を選びます。",
                explanation: "正規化してから検索すると、表記揺れに強くなります。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後の影響を確認します。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                  "事実データが不要になる",
                  "常に最初の項目だけを返す"
                ],
                answer: "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                hint: "入力や表示のゆれを吸収すると、同じ事実データを安全に再利用できるかを考えます。",
                explanation: "キーの正規化はローカライズされた検索や表示で起きやすい不一致を減らします。"
              }
            ]
          },
          {
            id: "final_debug_JP_python_03",
            worldId: "debug",
            languageId: "python",
            conceptId: "dicts",
            questionType: "debug-step",
            title: "JIS prefecture codes: zero-padding-key-mismatch",
            description: "JIS prefecture codes をコード内データとして使い、zero-padding-key-mismatch を確認します。",
            code: "data = {\"jispref\": \"JIS prefecture codes\"}\nkey = \"JIS pref\"\nprint(data[key])",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "JIS prefecture codes をコード内データとして使い、zero-padding-key-mismatch を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "JIS prefecture codes のデータは存在しますが、キー表記が揃っていません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえて、最も安全な修正を選びます。",
                question: "正しい修正はどれですか。",
                options: [
                  "key = key.lower() のように、検索前にキー表記を揃える",
                  "データを空にする",
                  "エラーを無視する"
                ],
                answer: "key = key.lower() のように、検索前にキー表記を揃える",
                hint: "データを消すのではなく、検索前の key を data 側のキーと同じ形にそろえる修正を選びます。",
                explanation: "正規化してから検索すると、表記揺れに強くなります。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後の影響を確認します。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                  "事実データが不要になる",
                  "常に最初の項目だけを返す"
                ],
                answer: "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                hint: "入力や表示のゆれを吸収すると、同じ事実データを安全に再利用できるかを考えます。",
                explanation: "キーの正規化はローカライズされた検索や表示で起きやすい不一致を減らします。"
              }
            ]
          }
        ]
      },
      javascript: {
        id: "final_debug_JP_javascript",
        type: "DEBUG_FINAL",
        title: "DEBUG FINAL: JAPAN JAVASCRIPT",
        unlock: {
          requiresStageClear: true
        },
        questions: [
          {
            id: "final_debug_JP_javascript_01",
            worldId: "debug",
            languageId: "javascript",
            conceptId: "variables",
            questionType: "debug-step",
            title: "Japanese telephone-number formatting: regex-normalization",
            description: "Japanese telephone-number formatting をコード内データとして使い、regex-normalization を確認します。",
            code: "const data = { \"japanese\": \"Japanese telephone-number formatting\" };\nconst key = \"Japanese\";\nconsole.log(data[key]);",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "Japanese telephone-number formatting をコード内データとして使い、regex-normalization を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "Japanese telephone-number formatting のデータは存在しますが、キー表記が揃っていません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえて、最も安全な修正を選びます。",
                question: "正しい修正はどれですか。",
                options: [
                  "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                  "データを空にする",
                  "エラーを無視する"
                ],
                answer: "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                hint: "データを消すのではなく、検索前の key を data 側のキーと同じ形にそろえる修正を選びます。",
                explanation: "正規化してから検索すると、表記揺れに強くなります。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後の影響を確認します。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                  "事実データが不要になる",
                  "常に最初の項目だけを返す"
                ],
                answer: "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                hint: "入力や表示のゆれを吸収すると、同じ事実データを安全に再利用できるかを考えます。",
                explanation: "キーの正規化はローカライズされた検索や表示で起きやすい不一致を減らします。"
              }
            ]
          },
          {
            id: "final_debug_JP_javascript_02",
            worldId: "debug",
            languageId: "javascript",
            conceptId: "variables",
            questionType: "debug-step",
            title: "Japanese vertical writing/tategaki: layout-config-defect",
            description: "Japanese vertical writing/tategaki をコード内データとして使い、layout-config-defect を確認します。",
            code: "const data = { \"japanese\": \"Japanese vertical writing/tategaki\" };\nconst key = \"Japanese\";\nconsole.log(data[key]);",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "Japanese vertical writing/tategaki をコード内データとして使い、layout-config-defect を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "Japanese vertical writing/tategaki のデータは存在しますが、キー表記が揃っていません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえて、最も安全な修正を選びます。",
                question: "正しい修正はどれですか。",
                options: [
                  "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                  "データを空にする",
                  "エラーを無視する"
                ],
                answer: "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                hint: "データを消すのではなく、検索前の key を data 側のキーと同じ形にそろえる修正を選びます。",
                explanation: "正規化してから検索すると、表記揺れに強くなります。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後の影響を確認します。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                  "事実データが不要になる",
                  "常に最初の項目だけを返す"
                ],
                answer: "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                hint: "入力や表示のゆれを吸収すると、同じ事実データを安全に再利用できるかを考えます。",
                explanation: "キーの正規化はローカライズされた検索や表示で起きやすい不一致を減らします。"
              }
            ]
          },
          {
            id: "final_debug_JP_javascript_03",
            worldId: "debug",
            languageId: "javascript",
            conceptId: "variables",
            questionType: "debug-step",
            title: "Japanese fiscal year beginning in April: date-boundary",
            description: "Japanese fiscal year beginning in April をコード内データとして使い、date-boundary を確認します。",
            code: "const data = { \"japanese\": \"Japanese fiscal year beginning in April\" };\nconst key = \"Japanese\";\nconsole.log(data[key]);",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "Japanese fiscal year beginning in April をコード内データとして使い、date-boundary を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "Japanese fiscal year beginning in April のデータは存在しますが、キー表記が揃っていません。"
              },
              {
                stepNum: 2,
                stepTitle: "修正を選ぶ",
                prompt: "Step 1 の原因を踏まえて、最も安全な修正を選びます。",
                question: "正しい修正はどれですか。",
                options: [
                  "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                  "データを空にする",
                  "エラーを無視する"
                ],
                answer: "const normalizedKey = key.toLowerCase(); のように、検索前にキー表記を揃える",
                hint: "データを消すのではなく、検索前の key を data 側のキーと同じ形にそろえる修正を選びます。",
                explanation: "正規化してから検索すると、表記揺れに強くなります。"
              },
              {
                stepNum: 3,
                stepTitle: "理由と影響",
                prompt: "修正後の影響を確認します。",
                question: "この修正の理由または影響として正しいものはどれですか。",
                options: [
                  "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                  "事実データが不要になる",
                  "常に最初の項目だけを返す"
                ],
                answer: "同じ事実データを、入力表記の揺れで見失わずに取得できる",
                hint: "入力や表示のゆれを吸収すると、同じ事実データを安全に再利用できるかを考えます。",
                explanation: "キーの正規化はローカライズされた検索や表示で起きやすい不一致を減らします。"
              }
            ]
          }
        ]
      }
    }
  }
};

export function getFinalMission(worldId, countryId, languageId) {
  const mission = FINAL_MISSIONS[worldId]?.[countryId]?.[languageId];
  return mission ? withFinalArchitecture(worldId, countryId, languageId, mission) : null;
}

export function listFinalMissions() {
  const missions = [];
  for (const [worldId, countries] of Object.entries(FINAL_MISSIONS)) {
    for (const [countryId, languages] of Object.entries(countries)) {
      for (const [languageId, mission] of Object.entries(languages)) {
        missions.push(withFinalArchitecture(worldId, countryId, languageId, mission));
      }
    }
  }
  return missions;
}
