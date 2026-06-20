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
  return Array.from({ length: FINAL_CHILD_COUNT }, (_, index) => buildFinalChildId(worldId, countryId, languageId, index + 1));
}

function withFinalArchitecture(worldId, countryId, languageId, mission) {
  return { ...mission, id: buildFinalMissionId(worldId, countryId, languageId), worldId, countryId, languageId, targetChildCount: QUESTION_COUNT_TARGETS.final[worldId] || FINAL_CHILD_COUNT, childQuestionIds: finalChildIds(worldId, countryId, languageId) };
}

export const FINAL_MISSIONS = {
  "decode": {
    "JP": {
      "python": {
        "id": "final_decode_JP_python",
        "type": "DECODE_FINAL",
        "title": "DECODE FINAL: JAPAN PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_decode_JP_python_01",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "dicts",
            "questionType": "fill-blank",
            "title": "Meiji Constitution promulgation context: final-combined-read",
            "description": "大日本帝国憲法の公布を題材に、実行結果として「Meiji Constitution promulgation context」が表示されるよう、空欄を埋めてください。",
            "hint": "`record` は辞書です。条件が True のときに表示したい記録名のキーを選びます。",
            "code": "records = [\n    {\"name\": \"Meiji Constitution promulgation context\", \"country\": \"JP\", \"score\": 3},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[___BLANK___] if record[\"country\"] == \"JP\" and record[\"score\"] >= 3 else \"skip\"\nprint(result)",
            "blank": "\"name\"",
            "explanation": "空欄に \"name\" を入れると、大日本帝国憲法の公布に関するデータから目的の値を取り出せます。",
            "correctAnswer": "\"name\"",
            "completedCode": "records = [\n    {\"name\": \"Meiji Constitution promulgation context\", \"country\": \"JP\", \"score\": 3},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[\"name\"] if record[\"country\"] == \"JP\" and record[\"score\"] >= 3 else \"skip\"\nprint(result)",
            "executionSteps": [
              "データ構造に国別の事実を入れる。",
              "空欄に正しいキーまたは添字を入れて値を取り出す。",
              "print で取り出した値を表示する。"
            ],
            "commonMistakes": [
              "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
              "文字列キーは引用符を含めて書きます。"
            ],
            "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record という辞書から「name」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
            "countryNote": "大日本帝国憲法の公布を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_decode_JP_python_02",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "dicts",
            "questionType": "fill-blank",
            "title": "Kenzaburo Oe Nobel Literature: final-combined-read",
            "description": "大江健三郎とノーベル文学賞を題材に、実行結果として「Kenzaburo Oe Nobel Literature」が表示されるよう、空欄を埋めてください。",
            "hint": "`record` は辞書です。条件が True のときに表示したい記録名のキーを選びます。",
            "code": "records = [\n    {\"name\": \"Kenzaburo Oe Nobel Literature\", \"country\": \"JP\", \"score\": 4},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[___BLANK___] if record[\"country\"] == \"JP\" and record[\"score\"] >= 4 else \"skip\"\nprint(result)",
            "blank": "\"name\"",
            "explanation": "空欄に \"name\" を入れると、大江健三郎とノーベル文学賞に関するデータから目的の値を取り出せます。",
            "correctAnswer": "\"name\"",
            "completedCode": "records = [\n    {\"name\": \"Kenzaburo Oe Nobel Literature\", \"country\": \"JP\", \"score\": 4},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[\"name\"] if record[\"country\"] == \"JP\" and record[\"score\"] >= 4 else \"skip\"\nprint(result)",
            "executionSteps": [
              "データ構造に国別の事実を入れる。",
              "空欄に正しいキーまたは添字を入れて値を取り出す。",
              "print で取り出した値を表示する。"
            ],
            "commonMistakes": [
              "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
              "文字列キーは引用符を含めて書きます。"
            ],
            "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record という辞書から「name」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
            "countryNote": "大江健三郎とノーベル文学賞を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_decode_JP_python_03",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "conditions",
            "questionType": "fill-blank",
            "title": "Kinkaku-ji and Rokuon-ji naming: final-combined-read",
            "description": "金閣寺と鹿苑寺を題材に、実行結果として「Kinkaku-ji and Rokuon-ji naming」が表示されるよう、空欄を埋めてください。",
            "hint": "`record` は辞書です。条件が True のときに表示したい記録名のキーを選びます。",
            "code": "records = [\n    {\"name\": \"Kinkaku-ji and Rokuon-ji naming\", \"country\": \"JP\", \"score\": 5},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[___BLANK___] if record[\"country\"] == \"JP\" and record[\"score\"] >= 5 else \"skip\"\nprint(result)",
            "blank": "\"name\"",
            "explanation": "空欄に \"name\" を入れると、金閣寺と鹿苑寺という名称に関するデータから目的の値を取り出せます。",
            "correctAnswer": "\"name\"",
            "completedCode": "records = [\n    {\"name\": \"Kinkaku-ji and Rokuon-ji naming\", \"country\": \"JP\", \"score\": 5},\n    {\"name\": \"comparison\", \"country\": \"other\", \"score\": 1}\n]\nrecord = records[0]\nresult = record[\"name\"] if record[\"country\"] == \"JP\" and record[\"score\"] >= 5 else \"skip\"\nprint(result)",
            "executionSteps": [
              "データ構造に国別の事実を入れる。",
              "空欄に正しいキーまたは添字を入れて値を取り出す。",
              "print で取り出した値を表示する。"
            ],
            "commonMistakes": [
              "値そのものではなく、値を取り出すためのキーや添字を書く必要があります。",
              "文字列キーは引用符を含めて書きます。"
            ],
            "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record という辞書から「name」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
            "countryNote": "金閣寺と鹿苑寺という名称を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          }
        ]
      },
      "javascript": {
        "id": "final_decode_JP_javascript",
        "type": "DECODE_FINAL",
        "title": "DECODE FINAL: JAPAN JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_decode_JP_javascript_01",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "fill-blank",
            "title": "Hokusai and Thirty-six Views of Mount Fuji: final-combined-read",
            "description": "富士山を題材に、実行結果として「Hokusai and Thirty-six Views of Mount Fuji」が表示されるよう、空欄を埋めてください。",
            "hint": "`find` で残った object から、表示したい名前のプロパティを読みます。",
            "code": "const records = [\n  { name: \"Hokusai and Thirty-six Views of Mount Fuji\", country: \"JP\", score: 4 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 4);\nconsole.log(record.___BLANK___);",
            "blank": "name",
            "explanation": "空欄に name を入れると、葛飾北斎と富嶽三十六景に関する値が表示されます。",
            "correctAnswer": "name",
            "completedCode": "const records = [\n  { name: \"Hokusai and Thirty-six Views of Mount Fuji\", country: \"JP\", score: 4 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 4);\nconsole.log(record.name);",
            "executionSteps": [
              "国別の事実を object または array に入れる。",
              "条件や参照位置を確認する。",
              "空欄を補って目的の値を表示する。"
            ],
            "commonMistakes": [
              "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
              "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
            ],
            "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「name」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
            "countryNote": "葛飾北斎と富嶽三十六景を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_decode_JP_javascript_02",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "objects",
            "questionType": "fill-blank",
            "title": "Super-Kamiokande: final-combined-read",
            "description": "スーパーカミオカンデを題材に、実行結果として「Super-Kamiokande」が表示されるよう、空欄を埋めてください。",
            "hint": "`find` で残った object から、表示したい名前のプロパティを読みます。",
            "code": "const records = [\n  { name: \"Super-Kamiokande\", country: \"JP\", score: 5 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 5);\nconsole.log(record.___BLANK___);",
            "blank": "name",
            "explanation": "空欄に name を入れると、スーパーカミオカンデに関する値が表示されます。",
            "correctAnswer": "name",
            "completedCode": "const records = [\n  { name: \"Super-Kamiokande\", country: \"JP\", score: 5 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 5);\nconsole.log(record.name);",
            "executionSteps": [
              "国別の事実を object または array に入れる。",
              "条件や参照位置を確認する。",
              "空欄を補って目的の値を表示する。"
            ],
            "commonMistakes": [
              "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
              "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
            ],
            "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「name」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
            "countryNote": "スーパーカミオカンデを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_decode_JP_javascript_03",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "fill-blank",
            "title": "Itsukushima Shrine: final-combined-read",
            "description": "厳島神社を題材に、実行結果として「Itsukushima Shrine」が表示されるよう、空欄を埋めてください。",
            "hint": "`find` で残った object から、表示したい名前のプロパティを読みます。",
            "code": "const records = [\n  { name: \"Itsukushima Shrine\", country: \"JP\", score: 6 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 6);\nconsole.log(record.___BLANK___);",
            "blank": "name",
            "explanation": "空欄に name を入れると、厳島神社に関する値が表示されます。",
            "correctAnswer": "name",
            "completedCode": "const records = [\n  { name: \"Itsukushima Shrine\", country: \"JP\", score: 6 },\n  { name: \"comparison\", country: \"other\", score: 1 }\n];\nconst record = records.find(item => item.country === \"JP\" && item.score >= 6);\nconsole.log(record.name);",
            "executionSteps": [
              "国別の事実を object または array に入れる。",
              "条件や参照位置を確認する。",
              "空欄を補って目的の値を表示する。"
            ],
            "commonMistakes": [
              "値そのものを入れるのではなく、参照に必要なプロパティ名や添字を入れます。",
              "JavaScript のドット記法ではプロパティ名に引用符を付けません。"
            ],
            "programmingExplanation": "この問題はオブジェクトのプロパティ（属性）アクセスを扱う問題です。record というオブジェクトが持つ「name」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。",
            "countryNote": "厳島神社を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          }
        ]
      }
    },
    "US": {
      "python": {
        "id": "final_decode_US_python",
        "type": "DECODE_FINAL",
        "title": "DECODE FINAL: UNITED STATES PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_decode_US_python_01",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "dicts",
            "questionType": "fill-blank",
            "title": "Bill of Rights amendments/freedoms: DECODE",
            "description": "権利章典を題材に、実行結果として「True」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく \"freedoms\" の形で式を完成させます。",
            "code": "record = {\"topic\": \"Bill of Rights amendments/freedoms\", \"freedoms\": [\"speech\", \"press\", \"religion\"]}\nresult = \"speech\" in record[___BLANK___]\nprint(result)",
            "blank": "\"freedoms\"",
            "explanation": "\"freedoms\" を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "\"freedoms\"",
            "completedCode": "record = {\"topic\": \"Bill of Rights amendments/freedoms\", \"freedoms\": [\"speech\", \"press\", \"religion\"]}\nresult = \"speech\" in record[\"freedoms\"]\nprint(result)",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に \"freedoms\" を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている \"freedoms\" を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は辞書（dict）のキーアクセスを扱う問題です。record という辞書から「freedoms」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、PythonではKeyErrorになったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。",
            "countryNote": "Bill of Rights amendments/freedoms は Bill of Rights（National Archives） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Bill of Rights",
                "organization": "National Archives",
                "url": "https://www.archives.gov/founding-docs/bill-of-rights"
              }
            ],
            "factIds": [
              "fact_us_bill_of_rights_freedoms"
            ],
            "entityKeys": [
              "us:bill_of_rights_freedoms"
            ]
          },
          {
            "id": "final_decode_US_python_02",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "lists",
            "questionType": "fill-blank",
            "title": "Toni Morrison Nobel Literature: DECODE",
            "description": "トニ・モリスンを題材に、実行結果として「Beloved」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"] の形で式を完成させます。",
            "code": "records = [{\"name\": \"Song of Solomon\", \"year\": 1977}, {\"name\": \"Beloved\", \"year\": 1987}]\nlatest = ___BLANK___\nprint(latest)",
            "blank": "sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"]",
            "explanation": "sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"] を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"]",
            "completedCode": "records = [{\"name\": \"Song of Solomon\", \"year\": 1977}, {\"name\": \"Beloved\", \"year\": 1987}]\nlatest = sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"]\nprint(latest)",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"] を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている sorted(records, key=lambda item: item[\"year\"])[-1][\"name\"] を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は sorted関数とラムダ式、負のインデックスを組み合わせた問題です。sorted(records, key=lambda item: item[\"year\"]) は records を year の値で並べ替えた新しいリストを作り、[-1] でその最後の要素（最も year が大きい要素）を取り出し、[\"name\"] でその名前を取り出しています。",
            "countryNote": "Toni Morrison Nobel Literature は Toni Morrison facts（Nobel Prize） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Toni Morrison facts",
                "organization": "Nobel Prize",
                "url": "https://www.nobelprize.org/prizes/literature/1993/morrison/facts/"
              }
            ],
            "factIds": [
              "fact_us_toni_morrison_nobel"
            ],
            "entityKeys": [
              "us:toni_morrison_nobel"
            ]
          },
          {
            "id": "final_decode_US_python_03",
            "worldId": "decode",
            "languageId": "python",
            "conceptId": "loops",
            "questionType": "fill-blank",
            "title": "Great Seal/E-Pluribus-Unum: DECODE",
            "description": "アメリカ合衆国の国璽を題材に、実行結果として「True」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく \"E Pluribus Unum\" in aliases の形で式を完成させます。",
            "code": "aliases = [\"Great Seal\", \"E Pluribus Unum\", \"United States seal\"]\nprint(___BLANK___)",
            "blank": "\"E Pluribus Unum\" in aliases",
            "explanation": "\"E Pluribus Unum\" in aliases を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "\"E Pluribus Unum\" in aliases",
            "completedCode": "aliases = [\"Great Seal\", \"E Pluribus Unum\", \"United States seal\"]\nprint(\"E Pluribus Unum\" in aliases)",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に \"E Pluribus Unum\" in aliases を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている \"E Pluribus Unum\" in aliases を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は「in」演算子によるメンバーシップ判定を扱う問題です。\"E Pluribus Unum\" in aliases は、指定した文字列がリスト aliases の要素として存在するかどうかを調べ、真偽値を返します。",
            "countryNote": "Great Seal/E-Pluribus-Unum は Great Seal（U.S. Department of State） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Great Seal",
                "organization": "U.S. Department of State",
                "url": "https://www.state.gov/the-great-seal-of-the-united-states/"
              }
            ],
            "factIds": [
              "fact_us_great_seal_motto"
            ],
            "entityKeys": [
              "us:great_seal_motto"
            ]
          }
        ]
      },
      "javascript": {
        "id": "final_decode_US_javascript",
        "type": "DECODE_FINAL",
        "title": "DECODE FINAL: UNITED STATES JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_decode_US_javascript_01",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "variables",
            "questionType": "fill-blank",
            "title": "Martin Luther King Jr Nobel Peace Prize: DECODE",
            "description": "キング牧師とノーベル平和賞を題材に、実行結果として「Martin Luther King Jr.: 1964」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく winner.name の形で式を完成させます。",
            "code": "const winners = [{ name: \"Martin Luther King Jr.\", prize: \"Peace\", year: 1964 }];\nconst winner = winners.find(item => item.prize === \"Peace\");\nconsole.log(`${___BLANK___}: ${winner.year}`);",
            "blank": "winner.name",
            "explanation": "winner.name を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "winner.name",
            "completedCode": "const winners = [{ name: \"Martin Luther King Jr.\", prize: \"Peace\", year: 1964 }];\nconst winner = winners.find(item => item.prize === \"Peace\");\nconsole.log(`${winner.name}: ${winner.year}`);",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に winner.name を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている winner.name を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は配列の find メソッドで条件に合う要素を1つ探し、そのプロパティを取り出す問題です。winners.find(item => item.prize === \"Peace\") は条件に一致する最初の要素を返し、winner.name でその要素の name プロパティを取り出しています。",
            "countryNote": "Martin Luther King Jr Nobel Peace Prize は Martin Luther King Jr. facts（Nobel Prize） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Martin Luther King Jr. facts",
                "organization": "Nobel Prize",
                "url": "https://www.nobelprize.org/prizes/peace/1964/king/facts/"
              }
            ],
            "factIds": [
              "fact_us_mlk_nobel_peace"
            ],
            "entityKeys": [
              "us:mlk_nobel_peace"
            ]
          },
          {
            "id": "final_decode_US_javascript_02",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "objects",
            "questionType": "fill-blank",
            "title": "First Amendment five freedoms: DECODE",
            "description": "憲法修正第1条を題材に、実行結果として「true」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく freedoms.has(\"speech\") && freedoms.has(\"religion\") の形で式を完成させます。",
            "code": "const freedoms = new Set([\"speech\", \"press\", \"religion\", \"assembly\", \"petition\"]);\nconsole.log(___BLANK___);",
            "blank": "freedoms.has(\"speech\") && freedoms.has(\"religion\")",
            "explanation": "freedoms.has(\"speech\") && freedoms.has(\"religion\") を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "freedoms.has(\"speech\") && freedoms.has(\"religion\")",
            "completedCode": "const freedoms = new Set([\"speech\", \"press\", \"religion\", \"assembly\", \"petition\"]);\nconsole.log(freedoms.has(\"speech\") && freedoms.has(\"religion\"));",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に freedoms.has(\"speech\") && freedoms.has(\"religion\") を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている freedoms.has(\"speech\") && freedoms.has(\"religion\") を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は Set オブジェクトの has メソッドと論理演算子 && を組み合わせた問題です。has メソッドはその値が Set に含まれているかどうかを真偽値で返し、&& は両方の条件が真である場合にだけ true を返します。",
            "countryNote": "First Amendment five freedoms は Bill of Rights transcript（National Archives） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Bill of Rights transcript",
                "organization": "National Archives",
                "url": "https://www.archives.gov/founding-docs/bill-of-rights-transcript"
              }
            ],
            "factIds": [
              "fact_us_first_amendment_freedoms"
            ],
            "entityKeys": [
              "us:first_amendment_freedoms"
            ]
          },
          {
            "id": "final_decode_US_javascript_03",
            "worldId": "decode",
            "languageId": "javascript",
            "conceptId": "objects",
            "questionType": "fill-blank",
            "title": "Mount Rushmore represented presidents: DECODE",
            "description": "ラシュモア山を題材に、実行結果として「Washington / Jefferson / Lincoln / Roosevelt」が表示されるよう、空欄を埋めてください。",
            "hint": "空欄の前後を見て、値ではなく records.map(item => item.president).join(\" / \") の形で式を完成させます。",
            "code": "const records = [{ president: \"Washington\" }, { president: \"Jefferson\" }, { president: \"Lincoln\" }, { president: \"Roosevelt\" }];\nconsole.log(___BLANK___);",
            "blank": "records.map(item => item.president).join(\" / \")",
            "explanation": "records.map(item => item.president).join(\" / \") を入れると、コード内の米国データから目的の値を作れます。",
            "correctAnswer": "records.map(item => item.president).join(\" / \")",
            "completedCode": "const records = [{ president: \"Washington\" }, { president: \"Jefferson\" }, { president: \"Lincoln\" }, { president: \"Roosevelt\" }];\nconsole.log(records.map(item => item.president).join(\" / \"));",
            "executionSteps": [
              "コード内の米国データを読む。",
              "空欄に records.map(item => item.president).join(\" / \") を入れる。",
              "最後の出力を確認する。"
            ],
            "commonMistakes": [
              "空欄や選択肢には、事実名そのものではなくコードが必要としている records.map(item => item.president).join(\" / \") を選びます。",
              "問題に必要な米国データはコード内に入っているので、外部知識だけで答えを推測しません。"
            ],
            "programmingExplanation": "この問題は配列の map メソッドと join メソッドを組み合わせた問題です。map で各要素から president プロパティだけを取り出した新しい配列を作り、join(\" / \") でそれらを区切り文字でつないだ1つの文字列にしています。",
            "countryNote": "Mount Rushmore represented presidents は Mount Rushmore history（National Park Service） をもとにした題材です。必要な情報は問題文とコード内にも示しています。",
            "sourceRefs": [
              {
                "title": "Mount Rushmore history",
                "organization": "National Park Service",
                "url": "https://www.nps.gov/moru/learn/historyculture/index.htm"
              }
            ],
            "factIds": [
              "fact_us_mount_rushmore_presidents"
            ],
            "entityKeys": [
              "us:mount_rushmore_presidents"
            ]
          }
        ]
      }
    }
  },
  "execute": {
    "JP": {
      "python": {
        "id": "final_execute_JP_python",
        "type": "EXECUTE_FINAL",
        "title": "EXECUTE FINAL: JAPAN PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_execute_JP_python_01",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "lists",
            "questionType": "output-predict",
            "title": "Sacred Sites and Pilgrimage Routes in Kii Mountain Range: final-filter-sort-trace",
            "prompt": "紀伊山地の霊場と参詣道を含むデータを、条件で絞り込んで出力を追跡します。",
            "code": "items = [\n    {\"name\": \"Sacred Sites and Pilgrimage Routes in Kii Mountain Range\", \"country\": \"JP\", \"tags\": [\"heritage\", \"route\"], \"score\": 7},\n    {\"name\": \"nearby context\", \"country\": \"JP\", \"tags\": [\"context\"], \"score\": 4},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"tags\": [\"heritage\"], \"score\": 6}\n]\nselected = []\nfor item in items:\n    has_topic_tag = \"heritage\" in item[\"tags\"] or \"route\" in item[\"tags\"]\n    if item[\"country\"] == \"JP\" and has_topic_tag and item[\"score\"] >= 5:\n        selected.append(item)\nordered = sorted(selected, key=lambda item: item[\"score\"], reverse=True)\nnames = [item[\"name\"] for item in ordered]\nprint(\" | \".join(names))",
            "options": [
              "Sacred Sites and Pilgrimage Routes in Kii Mountain Range",
              "context",
              "other",
              "Error"
            ],
            "answer": "Sacred Sites and Pilgrimage Routes in Kii Mountain Range",
            "hint": "country が JP で、score が 5 以上の要素だけを残します。その後 score の大きい順に並びます。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Sacred Sites and Pilgrimage Routes in Kii Mountain Range です。",
            "correctAnswer": "Sacred Sites and Pilgrimage Routes in Kii Mountain Range",
            "executionSteps": [
              "items を1件ずつ調べる。",
              "country・tag・score の複数条件をすべて満たす要素だけ selected に入れる。",
              "score で並べ替え、name を取り出して連結する。"
            ],
            "commonMistakes": [
              "片方の条件だけで選ぶと、余分な項目が混ざります。",
              "出力は辞書全体ではなく name の文字列です。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 5 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "紀伊山地の霊場と参詣道を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_execute_JP_python_02",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "variables",
            "questionType": "output-predict",
            "title": "Kurobe Dam: final-filter-sort-trace",
            "prompt": "黒部ダムを含むデータを、条件で絞り込んで出力を追跡します。",
            "code": "items = [\n    {\"name\": \"Kurobe Dam\", \"country\": \"JP\", \"tags\": [\"heritage\", \"route\"], \"score\": 8},\n    {\"name\": \"nearby context\", \"country\": \"JP\", \"tags\": [\"context\"], \"score\": 5},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"tags\": [\"heritage\"], \"score\": 7}\n]\nselected = []\nfor item in items:\n    has_topic_tag = \"heritage\" in item[\"tags\"] or \"route\" in item[\"tags\"]\n    if item[\"country\"] == \"JP\" and has_topic_tag and item[\"score\"] >= 6:\n        selected.append(item)\nordered = sorted(selected, key=lambda item: item[\"score\"], reverse=True)\nnames = [item[\"name\"] for item in ordered]\nprint(\" | \".join(names))",
            "options": [
              "Kurobe Dam",
              "context",
              "other",
              "Error"
            ],
            "answer": "Kurobe Dam",
            "hint": "country が JP で、score が 6 以上の要素だけを残します。その後 score の大きい順に並びます。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Kurobe Dam です。",
            "correctAnswer": "Kurobe Dam",
            "executionSteps": [
              "items を1件ずつ調べる。",
              "country・tag・score の複数条件をすべて満たす要素だけ selected に入れる。",
              "score で並べ替え、name を取り出して連結する。"
            ],
            "commonMistakes": [
              "片方の条件だけで選ぶと、余分な項目が混ざります。",
              "出力は辞書全体ではなく name の文字列です。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 6 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "黒部ダムを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_execute_JP_python_03",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "dicts",
            "questionType": "output-predict",
            "title": "Gokayama gassho-zukuri villages: final-filter-sort-trace",
            "prompt": "五箇山の合掌造り集落を含むデータを、条件で絞り込んで出力を追跡します。",
            "code": "villages = [\n    {\"name\": \"Gokayama gassho-zukuri villages\", \"area\": \"Toyama\", \"houses\": 18, \"listed\": True},\n    {\"name\": \"comparison village\", \"area\": \"Toyama\", \"houses\": 4, \"listed\": True},\n    {\"name\": \"outside sample\", \"area\": \"other\", \"houses\": 20, \"listed\": True}\n]\ngroups = {}\nfor village in villages:\n    if village[\"listed\"] and village[\"area\"] == \"Toyama\":\n        groups[village[\"area\"]] = groups.get(village[\"area\"], 0) + village[\"houses\"]\nresult = \"Gokayama gassho-zukuri villages\" if groups.get(\"Toyama\", 0) >= 20 else \"review\"\nprint(result)",
            "options": [
              "Gokayama gassho-zukuri villages",
              "review",
              "Toyama",
              "Error"
            ],
            "answer": "Gokayama gassho-zukuri villages",
            "hint": "country が JP で、score が 7 以上の要素だけを残します。その後 score の大きい順に並びます。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Gokayama gassho-zukuri villages です。",
            "correctAnswer": "Gokayama gassho-zukuri villages",
            "executionSteps": [
              "listed かつ Toyama の village だけを集計する。",
              "18 + 4 で Toyama の合計は22になる。",
              "22 >= 20 なので Gokayama gassho-zukuri villages を表示する。"
            ],
            "commonMistakes": [
              "片方の条件だけで選ぶと、余分な項目が混ざります。",
              "出力は辞書全体ではなく name の文字列です。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "五箇山の合掌造り集落を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          }
        ]
      },
      "javascript": {
        "id": "final_execute_JP_javascript",
        "type": "EXECUTE_FINAL",
        "title": "EXECUTE FINAL: JAPAN JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_execute_JP_javascript_01",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "output-predict",
            "title": "Shikoku 88-temple pilgrimage: final-filter-sort-map",
            "prompt": "四国八十八箇所巡礼を含む配列データを、filter/map/sort で処理した出力を追跡します。",
            "code": "const items = [\n  { name: \"Shikoku 88-temple pilgrimage\", country: \"JP\", tags: [\"route\", \"heritage\"], score: 8 },\n  { name: \"local context\", country: \"JP\", tags: [\"context\"], score: 5 },\n  { name: \"outside sample\", country: \"other\", tags: [\"heritage\"], score: 7 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\")\n  .filter(item => item.tags.includes(\"heritage\") || item.tags.includes(\"route\"))\n  .filter(item => item.score >= 6)\n  .sort((a, b) => b.score - a.score)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
            "options": [
              "Shikoku 88-temple pilgrimage",
              "context",
              "other",
              "Error"
            ],
            "answer": "Shikoku 88-temple pilgrimage",
            "hint": "JP かつ score が 6 以上の要素を残します。Final では tag 条件と sort も確認します。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Shikoku 88-temple pilgrimage です。",
            "correctAnswer": "Shikoku 88-temple pilgrimage",
            "executionSteps": [
              "filter を段階的に適用して JP、tag、score 条件を確認する。",
              "score の降順に並べる。",
              "name だけを map で取り出して join する。"
            ],
            "commonMistakes": [
              "filter 後の配列と map 後の配列を混同しやすいです。",
              "other country の高い score は JP 条件で除外されます。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 6 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "四国八十八箇所巡礼を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_execute_JP_javascript_02",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "variables",
            "questionType": "output-predict",
            "title": "Sanriku ria coast: final-filter-sort-map",
            "prompt": "三陸のリアス海岸を含む配列データを、filter/map/sort で処理した出力を追跡します。",
            "code": "const coast = [\n  { name: \"Sanriku ria coast\", region: \"Sanriku\", bays: 5, kind: \"ria\" },\n  { name: \"plain coast\", region: \"other\", bays: 1, kind: \"plain\" },\n  { name: \"Sanriku inlet\", region: \"Sanriku\", bays: 2, kind: \"ria\" }\n];\nconst summary = coast.reduce((acc, item) => {\n  if (item.region === \"Sanriku\" && item.kind === \"ria\") {\n    acc.bays += item.bays;\n    acc.names.push(item.name);\n  }\n  return acc;\n}, { bays: 0, names: [] });\nconsole.log(summary.bays >= 7 ? summary.names[0] : \"review\");",
            "options": [
              "Sanriku ria coast",
              "review",
              "7",
              "Error"
            ],
            "answer": "Sanriku ria coast",
            "hint": "JP かつ score が 7 以上の要素を残します。Final では tag 条件と sort も確認します。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Sanriku ria coast です。",
            "correctAnswer": "Sanriku ria coast",
            "executionSteps": [
              "reduce で Sanriku かつ ria の項目だけ合計する。",
              "bays は 5 + 2 で 7 になる。",
              "7 >= 7 なので最初の名前を表示する。"
            ],
            "commonMistakes": [
              "filter 後の配列と map 後の配列を混同しやすいです。",
              "other country の高い score は JP 条件で除外されます。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。各行の処理を順番に実行し、変数の値がどのように変化していくかを追跡します。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "三陸のリアス海岸を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          },
          {
            "id": "final_execute_JP_javascript_03",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "output-predict",
            "title": "Toyota Production System kanban: final-filter-sort-map",
            "prompt": "トヨタ生産方式のかんばんを含む配列データを、filter/map/sort で処理した出力を追跡します。",
            "code": "const items = [\n  { name: \"Toyota Production System kanban\", country: \"JP\", tags: [\"route\", \"heritage\"], score: 10 },\n  { name: \"local context\", country: \"JP\", tags: [\"context\"], score: 7 },\n  { name: \"outside sample\", country: \"other\", tags: [\"heritage\"], score: 9 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\")\n  .filter(item => item.tags.includes(\"heritage\") || item.tags.includes(\"route\"))\n  .filter(item => item.score >= 8)\n  .sort((a, b) => b.score - a.score)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
            "options": [
              "Toyota Production System kanban",
              "context",
              "other",
              "Error"
            ],
            "answer": "Toyota Production System kanban",
            "hint": "JP かつ score が 8 以上の要素を残します。Final では tag 条件と sort も確認します。",
            "explanation": "条件を満たす主題データだけが残るため、出力は Toyota Production System kanban です。",
            "correctAnswer": "Toyota Production System kanban",
            "executionSteps": [
              "filter を段階的に適用して JP、tag、score 条件を確認する。",
              "score の降順に並べる。",
              "name だけを map で取り出して join する。"
            ],
            "commonMistakes": [
              "filter 後の配列と map 後の配列を混同しやすいです。",
              "other country の高い score は JP 条件で除外されます。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 8 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "トヨタ生産方式のかんばんを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
          }
        ]
      }
    },
    "US": {
      "python": {
        "id": "final_execute_US_python",
        "type": "EXECUTE_FINAL",
        "title": "EXECUTE FINAL: UNITED STATES PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_execute_US_python_01",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "lists",
            "questionType": "output-predict",
            "title": "Everglades ecosystem/site data: EXECUTE",
            "prompt": "Everglades ecosystem/site data のデータを条件で絞り、出力を追跡します。",
            "code": "records = [\n    {\"name\": \"Everglades ecosystem/site data\", \"country\": \"US\", \"tags\": [\"heritage\", \"science\", \"route\"], \"score\": 9},\n    {\"name\": \"context sample\", \"country\": \"US\", \"tags\": [\"context\"], \"score\": 4},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"tags\": [\"heritage\"], \"score\": 8}\n]\nselected = []\nfor item in records:\n    has_topic = \"heritage\" in item[\"tags\"] or \"science\" in item[\"tags\"] or \"route\" in item[\"tags\"]\n    if item[\"country\"] == \"US\" and has_topic and item[\"score\"] >= 8:\n        selected.append(item)\nordered = sorted(selected, key=lambda item: (-item[\"score\"], item[\"name\"]))\nlabels = [f\"{item['name']}:{item['score']}\" for item in ordered]\nprint(\" | \".join(labels))",
            "options": [
              "Everglades ecosystem/site data:9",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "Everglades ecosystem/site data:9",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は Everglades ecosystem/site data:9 です。",
            "correctAnswer": "Everglades ecosystem/site data:9",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 8 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "Everglades ecosystem/site data は Everglades National Park（UNESCO World Heritage Centre） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "Everglades National Park",
                "organization": "UNESCO World Heritage Centre",
                "url": "https://whc.unesco.org/en/list/76/"
              }
            ],
            "factIds": [
              "fact_us_everglades_ecosystem"
            ],
            "entityKeys": [
              "us:everglades_ecosystem"
            ]
          },
          {
            "id": "final_execute_US_python_02",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "lists",
            "questionType": "output-predict",
            "title": "Hubble launch/servicing timeline: EXECUTE",
            "prompt": "Hubble launch/servicing timeline のデータを条件で絞り、出力を追跡します。",
            "code": "records = [\n    {\"name\": \"Hubble launch/servicing timeline\", \"country\": \"US\", \"tags\": [\"heritage\", \"science\", \"route\"], \"score\": 10},\n    {\"name\": \"context sample\", \"country\": \"US\", \"tags\": [\"context\"], \"score\": 5},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"tags\": [\"heritage\"], \"score\": 9}\n]\nselected = []\nfor item in records:\n    has_topic = \"heritage\" in item[\"tags\"] or \"science\" in item[\"tags\"] or \"route\" in item[\"tags\"]\n    if item[\"country\"] == \"US\" and has_topic and item[\"score\"] >= 9:\n        selected.append(item)\nordered = sorted(selected, key=lambda item: (-item[\"score\"], item[\"name\"]))\nlabels = [f\"{item['name']}:{item['score']}\" for item in ordered]\nprint(\" | \".join(labels))",
            "options": [
              "Hubble launch/servicing timeline:10",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "Hubble launch/servicing timeline:10",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は Hubble launch/servicing timeline:10 です。",
            "correctAnswer": "Hubble launch/servicing timeline:10",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 9 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "Hubble launch/servicing timeline は Hubble Space Telescope（NASA Science） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "Hubble Space Telescope",
                "organization": "NASA Science",
                "url": "https://science.nasa.gov/mission/hubble/"
              }
            ],
            "factIds": [
              "fact_us_hubble_timeline"
            ],
            "entityKeys": [
              "us:hubble_timeline"
            ]
          },
          {
            "id": "final_execute_US_python_03",
            "worldId": "execute",
            "languageId": "python",
            "conceptId": "lists",
            "questionType": "output-predict",
            "title": "Interstate Highway System route data: EXECUTE",
            "prompt": "Interstate Highway System route data のデータを条件で絞り、出力を追跡します。",
            "code": "records = [\n    {\"name\": \"Interstate Highway System route data\", \"country\": \"US\", \"tags\": [\"heritage\", \"science\", \"route\"], \"score\": 11},\n    {\"name\": \"context sample\", \"country\": \"US\", \"tags\": [\"context\"], \"score\": 6},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"tags\": [\"heritage\"], \"score\": 10}\n]\nselected = []\nfor item in records:\n    has_topic = \"heritage\" in item[\"tags\"] or \"science\" in item[\"tags\"] or \"route\" in item[\"tags\"]\n    if item[\"country\"] == \"US\" and has_topic and item[\"score\"] >= 10:\n        selected.append(item)\nordered = sorted(selected, key=lambda item: (-item[\"score\"], item[\"name\"]))\nlabels = [f\"{item['name']}:{item['score']}\" for item in ordered]\nprint(\" | \".join(labels))",
            "options": [
              "Interstate Highway System route data:11",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "Interstate Highway System route data:11",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は Interstate Highway System route data:11 です。",
            "correctAnswer": "Interstate Highway System route data:11",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 10 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "Interstate Highway System route data は Interstate Highway System history（Federal Highway Administration） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "Interstate Highway System history",
                "organization": "Federal Highway Administration",
                "url": "https://www.fhwa.dot.gov/interstate/history.cfm"
              }
            ],
            "factIds": [
              "fact_us_interstate_highway_system"
            ],
            "entityKeys": [
              "us:interstate_highway_system"
            ]
          }
        ]
      },
      "javascript": {
        "id": "final_execute_US_javascript",
        "type": "EXECUTE_FINAL",
        "title": "EXECUTE FINAL: UNITED STATES JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_execute_US_javascript_01",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "output-predict",
            "title": "Chaco Culture site data: EXECUTE",
            "prompt": "Chaco Culture site data のデータを条件で絞り、出力を追跡します。",
            "code": "const records = [\n  { name: \"Chaco Culture site data\", country: \"US\", tags: [\"heritage\", \"route\", \"network\"], score: 9 },\n  { name: \"context sample\", country: \"US\", tags: [\"context\"], score: 4 },\n  { name: \"outside sample\", country: \"other\", tags: [\"heritage\"], score: 8 }\n];\nconst labels = records\n  .filter(item => item.country === \"US\")\n  .filter(item => item.tags.includes(\"heritage\") || item.tags.includes(\"route\") || item.tags.includes(\"network\"))\n  .filter(item => item.score >= 8)\n  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))\n  .map(item => `${item.name}:${item.score}`);\nconsole.log(labels.join(\" | \"));",
            "options": [
              "Chaco Culture site data:9",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "Chaco Culture site data:9",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は Chaco Culture site data:9 です。",
            "correctAnswer": "Chaco Culture site data:9",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 8 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "Chaco Culture site data は Chaco Culture（UNESCO World Heritage Centre） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "Chaco Culture",
                "organization": "UNESCO World Heritage Centre",
                "url": "https://whc.unesco.org/en/list/353/"
              }
            ],
            "factIds": [
              "fact_us_chaco_culture_site"
            ],
            "entityKeys": [
              "us:chaco_culture_site"
            ]
          },
          {
            "id": "final_execute_US_javascript_02",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "output-predict",
            "title": "Erie Canal route/timeline: EXECUTE",
            "prompt": "Erie Canal route/timeline のデータを条件で絞り、出力を追跡します。",
            "code": "const records = [\n  { name: \"Erie Canal route/timeline\", country: \"US\", tags: [\"heritage\", \"route\", \"network\"], score: 10 },\n  { name: \"context sample\", country: \"US\", tags: [\"context\"], score: 5 },\n  { name: \"outside sample\", country: \"other\", tags: [\"heritage\"], score: 9 }\n];\nconst labels = records\n  .filter(item => item.country === \"US\")\n  .filter(item => item.tags.includes(\"heritage\") || item.tags.includes(\"route\") || item.tags.includes(\"network\"))\n  .filter(item => item.score >= 9)\n  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))\n  .map(item => `${item.name}:${item.score}`);\nconsole.log(labels.join(\" | \"));",
            "options": [
              "Erie Canal route/timeline:10",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "Erie Canal route/timeline:10",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は Erie Canal route/timeline:10 です。",
            "correctAnswer": "Erie Canal route/timeline:10",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 9 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "Erie Canal route/timeline は Erie Canalway（National Park Service） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "Erie Canalway",
                "organization": "National Park Service",
                "url": "https://www.nps.gov/erie/index.htm"
              }
            ],
            "factIds": [
              "fact_us_erie_canal_route"
            ],
            "entityKeys": [
              "us:erie_canal_route"
            ]
          },
          {
            "id": "final_execute_US_javascript_03",
            "worldId": "execute",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "output-predict",
            "title": "ARPANET first-message log context: EXECUTE",
            "prompt": "ARPANET first-message log context のデータを条件で絞り、出力を追跡します。",
            "code": "const records = [\n  { name: \"ARPANET first-message log context\", country: \"US\", tags: [\"heritage\", \"route\", \"network\"], score: 11 },\n  { name: \"context sample\", country: \"US\", tags: [\"context\"], score: 6 },\n  { name: \"outside sample\", country: \"other\", tags: [\"heritage\"], score: 10 }\n];\nconst labels = records\n  .filter(item => item.country === \"US\")\n  .filter(item => item.tags.includes(\"heritage\") || item.tags.includes(\"route\") || item.tags.includes(\"network\"))\n  .filter(item => item.score >= 10)\n  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))\n  .map(item => `${item.name}:${item.score}`);\nconsole.log(labels.join(\" | \"));",
            "options": [
              "ARPANET first-message log context:11",
              "context sample",
              "outside sample",
              "Error"
            ],
            "answer": "ARPANET first-message log context:11",
            "hint": "country、kind/tag、score の条件を上から順に確認します。",
            "explanation": "条件をすべて満たす対象だけが残るため、出力は ARPANET first-message log context:11 です。",
            "correctAnswer": "ARPANET first-message log context:11",
            "executionSteps": [
              "配列/リストの各要素を確認する。",
              "USかつ対象条件を満たす要素だけ残す。",
              "必要なら並べ替え、最後に出力する値を読む。"
            ],
            "commonMistakes": [
              "scoreだけを見ると他国やcontextデータを選んでしまいます。",
              "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
            ],
            "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 10 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
            "countryNote": "ARPANET first-message log context は ARPANET（DARPA） をもとにした題材です。",
            "sourceRefs": [
              {
                "title": "ARPANET",
                "organization": "DARPA",
                "url": "https://www.darpa.mil/about-us/timeline/arpanet"
              }
            ],
            "factIds": [
              "fact_us_arpanet_first_message"
            ],
            "entityKeys": [
              "us:arpanet_first_message"
            ]
          }
        ]
      }
    }
  },
  "debug": {
    "JP": {
      "python": {
        "id": "final_debug_JP_python",
        "type": "DEBUG_FINAL",
        "title": "DEBUG FINAL: JAPAN PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_debug_JP_python_01",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "conditions",
            "questionType": "debug-step",
            "title": "Japan Standard Time UTC+9 date rollover: final-boundary-debug",
            "description": "日本標準時 UTC+9 の日付またぎを扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japan Standard Time UTC+9 date rollover\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return utc_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "日本標準時 UTC+9 の日付またぎのデータは存在しますが、期待した出力になりません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                  "配列の長さが常に0になっている",
                  "print 文がコメントアウトされている"
                ],
                "answer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
                "explanation": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                  "データを空にしてエラーを避ける",
                  "常に最初の record を表示する"
                ],
                "answer": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
                "explanation": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の動作がなぜ安全になるかを確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "午前0時をまたぐ日本時間の日付が正しく表示される。",
                  "国別データが不要になる",
                  "すべての入力が同じ結果になる"
                ],
                "answer": "午前0時をまたぐ日本時間の日付が正しく表示される。",
                "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
                "explanation": "午前0時をまたぐ日本時間の日付が正しく表示される。"
              }
            ],
            "correctAnswer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。 / `return local_time.strftime(\"%Y-%m-%d\")` に変更する / 午前0時をまたぐ日本時間の日付が正しく表示される。",
            "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japan Standard Time UTC+9 date rollover\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "commonMistakes": [
              "症状だけを見てデータ削除で直そうとしないこと。",
              "中間値を作っても、最後の比較や return で使わなければ反映されません。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "日本標準時 UTC+9 の日付またぎを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
              "fix": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
              "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
              "impact": "午前0時をまたぐ日本時間の日付が正しく表示される。",
              "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japan Standard Time UTC+9 date rollover\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))"
            }
          },
          {
            "id": "final_debug_JP_python_02",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "regex",
            "questionType": "debug-step",
            "title": "Japanese postal code format: final-boundary-debug",
            "description": "日本の郵便番号形式を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japanese postal code format\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return utc_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "日本の郵便番号形式のデータは存在しますが、期待した出力になりません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                  "配列の長さが常に0になっている",
                  "print 文がコメントアウトされている"
                ],
                "answer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
                "explanation": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                  "データを空にしてエラーを避ける",
                  "常に最初の record を表示する"
                ],
                "answer": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
                "explanation": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の動作がなぜ安全になるかを確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "午前0時をまたぐ日本時間の日付が正しく表示される。",
                  "国別データが不要になる",
                  "すべての入力が同じ結果になる"
                ],
                "answer": "午前0時をまたぐ日本時間の日付が正しく表示される。",
                "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
                "explanation": "午前0時をまたぐ日本時間の日付が正しく表示される。"
              }
            ],
            "correctAnswer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。 / `return local_time.strftime(\"%Y-%m-%d\")` に変更する / 午前0時をまたぐ日本時間の日付が正しく表示される。",
            "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japanese postal code format\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "commonMistakes": [
              "症状だけを見てデータ削除で直そうとしないこと。",
              "中間値を作っても、最後の比較や return で使わなければ反映されません。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "日本の郵便番号形式を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
              "fix": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
              "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
              "impact": "午前0時をまたぐ日本時間の日付が正しく表示される。",
              "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"Japanese postal code format\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))"
            }
          },
          {
            "id": "final_debug_JP_python_03",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "dicts",
            "questionType": "debug-step",
            "title": "JIS prefecture codes: final-boundary-debug",
            "description": "JIS 都道府県コードを扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"JIS prefecture codes\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return utc_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "JIS 都道府県コードのデータは存在しますが、期待した出力になりません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                  "配列ではなく Set を使っていること",
                  "print 文がコメントアウトされている"
                ],
                "answer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
                "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
                "explanation": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                  "表示する文字列だけを uppercase にする",
                  "常に最初の record を表示する"
                ],
                "answer": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
                "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
                "explanation": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の動作がなぜ安全になるかを確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "午前0時をまたぐ日本時間の日付が正しく表示される。",
                  "すべての国データを同じ年度へ丸める",
                  "すべての入力が同じ結果になる"
                ],
                "answer": "午前0時をまたぐ日本時間の日付が正しく表示される。",
                "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
                "explanation": "午前0時をまたぐ日本時間の日付が正しく表示される。"
              }
            ],
            "correctAnswer": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。 / `return local_time.strftime(\"%Y-%m-%d\")` に変更する / 午前0時をまたぐ日本時間の日付が正しく表示される。",
            "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"JIS prefecture codes\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))",
            "commonMistakes": [
              "症状だけを見てデータ削除で直そうとしないこと。",
              "中間値を作っても、最後の比較や return で使わなければ反映されません。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "JIS 都道府県コードを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "変換後の `local_time` ではなく、変換前の `utc_time` から日付を返している。",
              "fix": "`return local_time.strftime(\"%Y-%m-%d\")` に変更する",
              "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
              "impact": "午前0時をまたぐ日本時間の日付が正しく表示される。",
              "correctedCode": "from datetime import datetime, timedelta\n\nrecords = [\n    {\"name\": \"JIS prefecture codes\", \"utc\": \"2026-04-01 15:20\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"utc\": \"2026-04-01 02:00\", \"country\": \"JP\"}\n]\n\ndef local_date(record):\n    utc_time = datetime.strptime(record[\"utc\"], \"%Y-%m-%d %H:%M\")\n    local_time = utc_time + timedelta(hours=9)\n    return local_time.strftime(\"%Y-%m-%d\")\n\nfor record in records:\n    if record[\"country\"] == \"JP\":\n        print(record[\"name\"], local_date(record))"
            }
          }
        ]
      },
      "javascript": {
        "id": "final_debug_JP_javascript",
        "type": "DEBUG_FINAL",
        "title": "DEBUG FINAL: JAPAN JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_debug_JP_javascript_01",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "variables",
            "questionType": "debug-step",
            "title": "Japanese telephone-number formatting: final-boundary-debug",
            "description": "日本の電話番号整形を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "const records = [\n  { name: \"Japanese telephone-number formatting\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "日本の電話番号整形のデータはあるのに期待通り表示されません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                  "配列の末尾だけが処理される",
                  "console.log が非同期で遅れている"
                ],
                "answer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                "hint": "比較式または年度計算の条件を確認します。",
                "explanation": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "月が4月より前なら前年を返す条件を追加する",
                  "records を空配列にする",
                  "常に true を返す"
                ],
                "answer": "月が4月より前なら前年を返す条件を追加する",
                "hint": "データを消さず、条件式の扱いを正しくします。",
                "explanation": "月が4月より前なら前年を返す条件を追加する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の影響を確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "1月から3月の日付を前年度として扱える。",
                  "国別データが不要になる",
                  "どの入力でも同じ record を返す"
                ],
                "answer": "1月から3月の日付を前年度として扱える。",
                "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
                "explanation": "1月から3月の日付を前年度として扱える。"
              }
            ],
            "correctAnswer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。 / 月が4月より前なら前年を返す条件を追加する / 1月から3月の日付を前年度として扱える。",
            "correctedCode": "const records = [\n  { name: \"Japanese telephone-number formatting\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "commonMistakes": [
              "エラーを隠す修正ではなく、条件式を正しくします。",
              "日本語や日付の仕様をコードの条件に反映する必要があります。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「年度が4月開始なのに、常に暦年 `getFullYear()` を返している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "日本の電話番号整形を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
              "fix": "月が4月より前なら前年を返す条件を追加する",
              "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
              "impact": "1月から3月の日付を前年度として扱える。",
              "correctedCode": "const records = [\n  { name: \"Japanese telephone-number formatting\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}"
            }
          },
          {
            "id": "final_debug_JP_javascript_02",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "variables",
            "questionType": "debug-step",
            "title": "Japanese vertical writing/tategaki: final-boundary-debug",
            "description": "日本語の縦書きを扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "const records = [\n  { name: \"Japanese vertical writing/tategaki\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "日本語の縦書きのデータはあるのに期待通り表示されません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                  "配列ではなく Set を使っていること",
                  "console.log が非同期で遅れている"
                ],
                "answer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                "hint": "比較式または年度計算の条件を確認します。",
                "explanation": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "月が4月より前なら前年を返す条件を追加する",
                  "表示する文字列だけを uppercase にする",
                  "常に true を返す"
                ],
                "answer": "月が4月より前なら前年を返す条件を追加する",
                "hint": "データを消さず、条件式の扱いを正しくします。",
                "explanation": "月が4月より前なら前年を返す条件を追加する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の影響を確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "1月から3月の日付を前年度として扱える。",
                  "すべての国データを同じ年度へ丸める",
                  "どの入力でも同じ record を返す"
                ],
                "answer": "1月から3月の日付を前年度として扱える。",
                "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
                "explanation": "1月から3月の日付を前年度として扱える。"
              }
            ],
            "correctAnswer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。 / 月が4月より前なら前年を返す条件を追加する / 1月から3月の日付を前年度として扱える。",
            "correctedCode": "const records = [\n  { name: \"Japanese vertical writing/tategaki\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "commonMistakes": [
              "エラーを隠す修正ではなく、条件式を正しくします。",
              "日本語や日付の仕様をコードの条件に反映する必要があります。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「年度が4月開始なのに、常に暦年 `getFullYear()` を返している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "日本語の縦書きを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
              "fix": "月が4月より前なら前年を返す条件を追加する",
              "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
              "impact": "1月から3月の日付を前年度として扱える。",
              "correctedCode": "const records = [\n  { name: \"Japanese vertical writing/tategaki\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}"
            }
          },
          {
            "id": "final_debug_JP_javascript_03",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "variables",
            "questionType": "debug-step",
            "title": "Japanese fiscal year beginning in April: final-boundary-debug",
            "description": "日本の年度が4月に始まることを扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
            "code": "const records = [\n  { name: \"Japanese fiscal year beginning in April\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "日本の年度が4月に始まることのデータはあるのに期待通り表示されません。",
                "question": "主な原因はどれですか。",
                "options": [
                  "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                  "配列の末尾だけが処理される",
                  "console.log が非同期で遅れている"
                ],
                "answer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
                "hint": "比較式または年度計算の条件を確認します。",
                "explanation": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "月が4月より前なら前年を返す条件を追加する",
                  "records を空配列にする",
                  "常に true を返す"
                ],
                "answer": "月が4月より前なら前年を返す条件を追加する",
                "hint": "データを消さず、条件式の扱いを正しくします。",
                "explanation": "月が4月より前なら前年を返す条件を追加する"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由と影響",
                "prompt": "修正後の影響を確認します。",
                "question": "修正の影響として正しいものはどれですか。",
                "options": [
                  "1月から3月の日付を前年度として扱える。",
                  "国別データが不要になる",
                  "どの入力でも同じ record を返す"
                ],
                "answer": "1月から3月の日付を前年度として扱える。",
                "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
                "explanation": "1月から3月の日付を前年度として扱える。"
              }
            ],
            "correctAnswer": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。 / 月が4月より前なら前年を返す条件を追加する / 1月から3月の日付を前年度として扱える。",
            "correctedCode": "const records = [\n  { name: \"Japanese fiscal year beginning in April\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}",
            "commonMistakes": [
              "エラーを隠す修正ではなく、条件式を正しくします。",
              "日本語や日付の仕様をコードの条件に反映する必要があります。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「年度が4月開始なのに、常に暦年 `getFullYear()` を返している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "日本の年度が4月に始まることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
            "debugExplanation": {
              "cause": "年度が4月開始なのに、常に暦年 `getFullYear()` を返している。",
              "fix": "月が4月より前なら前年を返す条件を追加する",
              "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
              "impact": "1月から3月の日付を前年度として扱える。",
              "correctedCode": "const records = [\n  { name: \"Japanese fiscal year beginning in April\", date: \"2026-03-31\", country: \"JP\" },\n  { name: \"next term\", date: \"2026-04-01\", country: \"JP\" }\n];\nfunction fiscalYear(dateText) {\n  const date = new Date(dateText + \"T00:00:00+09:00\");\n  return date.getMonth() < 3 ? date.getFullYear() - 1 : date.getFullYear();\n}\nfor (const record of records) {\n  console.log(record.name, fiscalYear(record.date));\n}"
            }
          }
        ]
      }
    },
    "US": {
      "python": {
        "id": "final_debug_US_python",
        "type": "DEBUG_FINAL",
        "title": "DEBUG FINAL: UNITED STATES PYTHON",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_debug_US_python_01",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "conditions",
            "questionType": "debug-step",
            "title": "federal holiday observed-date rule: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "federal holiday observed-date rule の処理が失敗します。",
                "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
                "question": "主な原因はどれですか。",
                "options": [
                  "federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に lower() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に lower() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に lower() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "federal holiday observed-date rule は Federal Holidays（U.S. Office of Personnel Management） をもとにした題材です。",
            "debugExplanation": {
              "cause": "federal holiday observed-date rule で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に lower() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
            },
            "sourceRefs": [
              {
                "title": "Federal Holidays",
                "organization": "U.S. Office of Personnel Management",
                "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
              }
            ],
            "factIds": [
              "fact_us_federal_holiday_observed"
            ],
            "entityKeys": [
              "us:federal_holiday_observed"
            ]
          },
          {
            "id": "final_debug_US_python_02",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "conditions",
            "questionType": "debug-step",
            "title": "US customary mile/foot conversion: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "US customary mile/foot conversion の処理が失敗します。",
                "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
                "question": "主な原因はどれですか。",
                "options": [
                  "US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に lower() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に lower() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に lower() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "US customary mile/foot conversion は SI Units（NIST） をもとにした題材です。",
            "debugExplanation": {
              "cause": "US customary mile/foot conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に lower() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
            },
            "sourceRefs": [
              {
                "title": "SI Units",
                "organization": "NIST",
                "url": "https://www.nist.gov/pml/owm/metric-si/si-units"
              }
            ],
            "factIds": [
              "fact_us_mile_foot_conversion"
            ],
            "entityKeys": [
              "us:mile_foot_conversion"
            ]
          },
          {
            "id": "final_debug_US_python_03",
            "worldId": "debug",
            "languageId": "python",
            "conceptId": "loops",
            "questionType": "debug-step",
            "title": "dollar/cents monetary calculation: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "dollar/cents monetary calculation の処理が失敗します。",
                "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
                "question": "主な原因はどれですか。",
                "options": [
                  "dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に lower() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に lower() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に lower() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "dollar/cents monetary calculation は Currency and coins（U.S. Department of the Treasury） をもとにした題材です。",
            "debugExplanation": {
              "cause": "dollar/cents monetary calculation で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に lower() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
            },
            "sourceRefs": [
              {
                "title": "Currency and coins",
                "organization": "U.S. Department of the Treasury",
                "url": "https://home.treasury.gov/services/currency-and-coins"
              }
            ],
            "factIds": [
              "fact_us_dollar_cent_decimal"
            ],
            "entityKeys": [
              "us:dollar_cent_decimal"
            ]
          }
        ]
      },
      "javascript": {
        "id": "final_debug_US_javascript",
        "type": "DEBUG_FINAL",
        "title": "DEBUG FINAL: UNITED STATES JAVASCRIPT",
        "unlock": {
          "requiresStageClear": true
        },
        "questions": [
          {
            "id": "final_debug_US_javascript_01",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "functions",
            "questionType": "debug-step",
            "title": "US federal fiscal year Oct-1 boundary: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "US federal fiscal year Oct-1 boundary の処理が失敗します。",
                "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
                "question": "主な原因はどれですか。",
                "options": [
                  "US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に toLowerCase() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に toLowerCase() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に toLowerCase() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "US federal fiscal year Oct-1 boundary は Circular A-11（Office of Management and Budget） をもとにした題材です。",
            "debugExplanation": {
              "cause": "US federal fiscal year Oct-1 boundary で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に toLowerCase() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
            },
            "sourceRefs": [
              {
                "title": "Circular A-11",
                "organization": "Office of Management and Budget",
                "url": "https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf"
              }
            ],
            "factIds": [
              "fact_us_federal_fiscal_year_boundary"
            ],
            "entityKeys": [
              "us:federal_fiscal_year_boundary"
            ]
          },
          {
            "id": "final_debug_US_javascript_02",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "objects",
            "questionType": "debug-step",
            "title": "Washington state vs Washington-DC: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "Washington state vs Washington-DC の処理が失敗します。",
                "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
                "question": "主な原因はどれですか。",
                "options": [
                  "Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に toLowerCase() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に toLowerCase() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に toLowerCase() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "Washington state vs Washington-DC は District of Columbia QuickFacts（U.S. Census Bureau） をもとにした題材です。",
            "debugExplanation": {
              "cause": "Washington state vs Washington-DC で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に toLowerCase() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
            },
            "sourceRefs": [
              {
                "title": "District of Columbia QuickFacts",
                "organization": "U.S. Census Bureau",
                "url": "https://www.census.gov/quickfacts/fact/table/DC/PST045225"
              }
            ],
            "factIds": [
              "fact_us_washington_dc_disambiguation"
            ],
            "entityKeys": [
              "us:washington_dc_disambiguation"
            ]
          },
          {
            "id": "final_debug_US_javascript_03",
            "worldId": "debug",
            "languageId": "javascript",
            "conceptId": "arrays",
            "questionType": "debug-step",
            "title": "Hawaiʻi Unicode name normalization: DEBUG",
            "steps": [
              {
                "stepNum": 1,
                "stepTitle": "原因を特定",
                "prompt": "Hawaiʻi Unicode name normalization の処理が失敗します。",
                "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
                "question": "主な原因はどれですか。",
                "options": [
                  "Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない",
                  "出力関数の名前が違う",
                  "データが空になっている"
                ],
                "answer": "Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない",
                "hint": "入力値とキーの表記を比べます。",
                "explanation": "Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない"
              },
              {
                "stepNum": 2,
                "stepTitle": "修正を選ぶ",
                "prompt": "Step 1 の原因を踏まえて修正します。",
                "question": "正しい修正はどれですか。",
                "options": [
                  "参照前に toLowerCase() でキー形式をそろえる",
                  "常に最初の値を返す",
                  "キーを削除してから参照する"
                ],
                "answer": "参照前に toLowerCase() でキー形式をそろえる",
                "hint": "データを消さず、入力を同じ形式にそろえます。",
                "explanation": "参照前に toLowerCase() でキー形式をそろえる"
              },
              {
                "stepNum": 3,
                "stepTitle": "理由・影響",
                "prompt": "修正の効果を確認します。",
                "question": "この修正の効果はどれですか。",
                "options": [
                  "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                  "出典データが不要になる",
                  "どの入力でも同じ固定値を返す"
                ],
                "answer": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
                "hint": "表記ゆれを吸収できるかを考えます。",
                "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる"
              }
            ],
            "correctAnswer": "Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);",
            "executionSteps": [
              "Step 1でキー不一致を見つける。",
              "Step 2で入力正規化を入れる。",
              "Step 3で表記ゆれへの影響を確認する。"
            ],
            "commonMistakes": [
              "例外を握りつぶすだけでは正しいデータ参照になりません。",
              "表示名と内部キーを混同すると同じバグが再発します。"
            ],
            "programmingExplanation": "このDEBUG問題の本質的な原因は「Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
            "countryNote": "Hawaiʻi Unicode name normalization は About Hawaii（State of Hawaii） をもとにした題材です。",
            "debugExplanation": {
              "cause": "Hawaiʻi Unicode name normalization で入力表記を正規化せず、保存データのキー形式と一致しない",
              "fix": "参照前に toLowerCase() でキー形式をそろえる",
              "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
              "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
              "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
            },
            "sourceRefs": [
              {
                "title": "About Hawaii",
                "organization": "State of Hawaii",
                "url": "https://portal.ehawaii.gov/page/about_hawaii/"
              }
            ],
            "factIds": [
              "fact_us_hawaii_unicode_name"
            ],
            "entityKeys": [
              "us:hawaii_unicode_name"
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
