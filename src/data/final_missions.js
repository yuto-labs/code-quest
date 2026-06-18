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
            description: "Meiji Constitution promulgation context をコード内データとして使い、dict-plus-comparison を確認します。",
            hint: "変数 fact に答えになる文字列が入っています。print() には変数名を入れます。",
            code: "fact = \"Meiji Constitution promulgation context\"\nprint(___BLANK___)",
            blank: "fact",
            explanation: "変数 fact を表示します。 Meiji Constitution promulgation context は問題文とコード内データに示されています。"
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
            prompt: "Sacred Sites and Pilgrimage Routes in Kii Mountain Range をコード内データとして使い、nested-filter-plus-sort を確認します。",
            code: "record = {\"name\": \"Sacred Sites and Pilgrimage Routes in Kii Mountain Range\", \"values\": [1, 2, 3]}\nprint(sum(record[\"values\"]))",
            options: [
              "6",
              "other",
              "1",
              "Error"
            ],
            answer: "6",
            hint: "record[\"values\"] の中身は [1, 2, 3] です。sum() の結果を計算します。",
            explanation: "表示データにある Sacred Sites and Pilgrimage Routes in Kii Mountain Range を使い、処理の流れを追うと 6 が出力されます。"
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
            description: "Japan Standard Time UTC+9 date rollover をコード内データとして使い、timezone-boundary を確認します。",
            code: "data = {\"japanst\": \"Japan Standard Time UTC+9 date rollover\"}\nkey = \"Japan St\"\nprint(data[key])",
            steps: [
              {
                stepNum: 1,
                stepTitle: "原因を特定",
                prompt: "Japan Standard Time UTC+9 date rollover をコード内データとして使い、timezone-boundary を確認します。",
                question: "この不具合の主な原因はどれですか。",
                options: [
                  "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                  "配列の長さが長すぎる",
                  "コメントがない"
                ],
                answer: "検索キーを正規化せず、大文字小文字または表記がデータ側と一致していない",
                hint: "data 側のキー名と、検索に使っている key の文字列を見比べます。表記ゆれや余分な文字があると見つかりません。",
                explanation: "Japan Standard Time UTC+9 date rollover のデータは存在しますが、キー表記が揃っていません。"
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
