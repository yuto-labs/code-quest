import { JP_JAVA_DEBUG } from './jp_java_questions.js';
import { US_JAVA_DEBUG } from './us_java_questions.js';
import { FR_JAVA_DEBUG, FR_JS_DEBUG, FR_PY_DEBUG } from './france_questions.js';
import { BR_JAVA_DEBUG, BR_JS_DEBUG, BR_PY_DEBUG } from './brazil_questions.js';
import { AU_JAVA_DEBUG, AU_JS_DEBUG, AU_PY_DEBUG } from './australia_questions.js';
import { EG_JAVA_DEBUG, EG_JS_DEBUG, EG_PY_DEBUG } from './egypt_questions.js';
import { IN_JAVA_DEBUG, IN_JS_DEBUG, IN_PY_DEBUG } from './india_questions.js';
import { RU_JAVA_DEBUG, RU_JS_DEBUG, RU_PY_DEBUG } from './russia_questions.js';
import { CN_JAVA_DEBUG, CN_JS_DEBUG, CN_PY_DEBUG } from './china_questions.js';
import { DE_JAVA_DEBUG, DE_JS_DEBUG, DE_PY_DEBUG } from './germany_questions.js';
import { GB_JAVA_DEBUG, GB_JS_DEBUG, GB_PY_DEBUG } from './united_kingdom_questions.js';

export const DEBUG_CHALLENGES = {
  "JP": {
    "python": [
      {
        "id": "jp_py_b01",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "kanji-hiragana-katakana search: normalization-debug",
        "description": "漢字・ひらがな・カタカナが混在する検索を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "records = [\n    {\"name\": \"kanji-hiragana-katakana search\", \"key\": \"kanji-hiragana-katakana-search\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"KANJI-HIRAGANA-KATAKANA-SEARCH\"\n\nfor record in records:\n    if record[\"key\"] == query:\n        print(record[\"name\"])",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "漢字・ひらがな・カタカナが混在する検索のデータは存在しますが、期待した出力になりません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
              "配列の長さが常に0になっている",
              "print 文がコメントアウトされている"
            ],
            "answer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "optionExplanations": {
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。": "正解。query は全て大文字ですが key は元の表記のままで、casefold などの正規化なしに == で比較しているため一致しません。",
              "配列の長さが常に0になっている": "records には2件のデータが入っており、配列自体は空ではありません。",
              "print 文がコメントアウトされている": "print 文はコメント化されておらず、if の条件が False のため実行に到達しないだけです。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
              "データを空にしてエラーを避ける",
              "常に最初の record を表示する"
            ],
            "answer": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "optionExplanations": {
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる": "正解。両方の文字列を同じ大文字小文字に揃えてから比較するので、表記の違いに関わらず正しく一致判定できます。",
              "データを空にしてエラーを避ける": "データを消すと表示すべき record まで失われ、検索自体が機能しなくなります。",
              "常に最初の record を表示する": "query の内容を無視して固定のrecordを返すことになり、別のqueryで検索しても正しく動きません。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の動作がなぜ安全になるかを確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力表記の大小差による検索漏れを減らせる。",
              "国別データが不要になる",
              "すべての入力が同じ結果になる"
            ],
            "answer": "入力表記の大小差による検索漏れを減らせる。",
            "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
            "explanation": "入力表記の大小差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力表記の大小差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "すべての入力が同じ結果になる": "casefold は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"kanji-hiragana-katakana search\", \"key\": \"kanji-hiragana-katakana-search\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"KANJI-HIRAGANA-KATAKANA-SEARCH\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "漢字・ひらがな・カタカナが混在する検索を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
          "fix": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
          "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
          "impact": "入力表記の大小差による検索漏れを減らせる。",
          "correctedCode": "records = [\n    {\"name\": \"kanji-hiragana-katakana search\", \"key\": \"kanji-hiragana-katakana-search\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"KANJI-HIRAGANA-KATAKANA-SEARCH\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])"
        }
      },
      {
        "id": "jp_py_b02",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "debug-step",
        "title": "Japanese era conversion: normalization-debug",
        "description": "和暦変換を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "records = [\n    {\"name\": \"Japanese era conversion\", \"key\": \"japanese-era-conversion\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ERA-CONVERSION\"\n\nfor record in records:\n    if record[\"key\"] == query:\n        print(record[\"name\"])",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "和暦変換のデータは存在しますが、期待した出力になりません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
              "配列の長さが常に0になっている",
              "print 文がコメントアウトされている"
            ],
            "answer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "optionExplanations": {
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。": "正解。query は全て大文字ですが key は元の表記のままで、casefold などの正規化なしに == で比較しているため一致しません。",
              "配列の長さが常に0になっている": "records には2件のデータが入っており、配列自体は空ではありません。",
              "print 文がコメントアウトされている": "print 文はコメント化されておらず、if の条件が False のため実行に到達しないだけです。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
              "データを空にしてエラーを避ける",
              "常に最初の record を表示する"
            ],
            "answer": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "optionExplanations": {
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる": "正解。両方の文字列を同じ大文字小文字に揃えてから比較するので、表記の違いに関わらず正しく一致判定できます。",
              "データを空にしてエラーを避ける": "データを消すと表示すべき record まで失われ、検索自体が機能しなくなります。",
              "常に最初の record を表示する": "query の内容を無視して固定のrecordを返すことになり、別のqueryで検索しても正しく動きません。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の動作がなぜ安全になるかを確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力表記の大小差による検索漏れを減らせる。",
              "国別データが不要になる",
              "すべての入力が同じ結果になる"
            ],
            "answer": "入力表記の大小差による検索漏れを減らせる。",
            "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
            "explanation": "入力表記の大小差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力表記の大小差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "すべての入力が同じ結果になる": "casefold は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese era conversion\", \"key\": \"japanese-era-conversion\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ERA-CONVERSION\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "和暦変換を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
          "fix": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
          "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
          "impact": "入力表記の大小差による検索漏れを減らせる。",
          "correctedCode": "records = [\n    {\"name\": \"Japanese era conversion\", \"key\": \"japanese-era-conversion\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ERA-CONVERSION\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])"
        }
      },
      {
        "id": "jp_py_b03",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "debug-step",
        "title": "Japanese address order: normalization-debug",
        "description": "日本の住所表記順を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "records = [\n    {\"name\": \"Japanese address order\", \"key\": \"japanese-address-order\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ADDRESS-ORDER\"\n\nfor record in records:\n    if record[\"key\"] == query:\n        print(record[\"name\"])",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "日本の住所表記順のデータは存在しますが、期待した出力になりません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
              "配列の長さが常に0になっている",
              "print 文がコメントアウトされている"
            ],
            "answer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "optionExplanations": {
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。": "正解。query は全て大文字ですが key は元の表記のままで、casefold などの正規化なしに == で比較しているため一致しません。",
              "配列の長さが常に0になっている": "records には2件のデータが入っており、配列自体は空ではありません。",
              "print 文がコメントアウトされている": "print 文はコメント化されておらず、if の条件が False のため実行に到達しないだけです。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
              "データを空にしてエラーを避ける",
              "常に最初の record を表示する"
            ],
            "answer": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "optionExplanations": {
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる": "正解。両方の文字列を同じ大文字小文字に揃えてから比較するので、表記の違いに関わらず正しく一致判定できます。",
              "データを空にしてエラーを避ける": "データを消すと表示すべき record まで失われ、検索自体が機能しなくなります。",
              "常に最初の record を表示する": "query の内容を無視して固定のrecordを返すことになり、別のqueryで検索しても正しく動きません。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の動作がなぜ安全になるかを確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力表記の大小差による検索漏れを減らせる。",
              "国別データが不要になる",
              "すべての入力が同じ結果になる"
            ],
            "answer": "入力表記の大小差による検索漏れを減らせる。",
            "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
            "explanation": "入力表記の大小差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力表記の大小差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "すべての入力が同じ結果になる": "casefold は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese address order\", \"key\": \"japanese-address-order\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ADDRESS-ORDER\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "日本の住所表記順を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
          "fix": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
          "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
          "impact": "入力表記の大小差による検索漏れを減らせる。",
          "correctedCode": "records = [\n    {\"name\": \"Japanese address order\", \"key\": \"japanese-address-order\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ADDRESS-ORDER\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])"
        }
      },
      {
        "id": "jp_py_b04",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "Japanese yen display: normalization-debug",
        "description": "日本円の表示形式を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "records = [\n    {\"name\": \"Japanese yen display\", \"key\": \"japanese-yen-display\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-YEN-DISPLAY\"\n\nfor record in records:\n    if record[\"key\"] == query:\n        print(record[\"name\"])",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "日本円の表示形式のデータは存在しますが、期待した出力になりません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
              "配列の長さが常に0になっている",
              "print 文がコメントアウトされている"
            ],
            "answer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "optionExplanations": {
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。": "正解。query は全て大文字ですが key は元の表記のままで、casefold などの正規化なしに == で比較しているため一致しません。",
              "配列の長さが常に0になっている": "records には2件のデータが入っており、配列自体は空ではありません。",
              "print 文がコメントアウトされている": "print 文はコメント化されておらず、if の条件が False のため実行に到達しないだけです。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
              "データを空にしてエラーを避ける",
              "常に最初の record を表示する"
            ],
            "answer": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "optionExplanations": {
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる": "正解。両方の文字列を同じ大文字小文字に揃えてから比較するので、表記の違いに関わらず正しく一致判定できます。",
              "データを空にしてエラーを避ける": "データを消すと表示すべき record まで失われ、検索自体が機能しなくなります。",
              "常に最初の record を表示する": "query の内容を無視して固定のrecordを返すことになり、別のqueryで検索しても正しく動きません。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の動作がなぜ安全になるかを確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力表記の大小差による検索漏れを減らせる。",
              "国別データが不要になる",
              "すべての入力が同じ結果になる"
            ],
            "answer": "入力表記の大小差による検索漏れを減らせる。",
            "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
            "explanation": "入力表記の大小差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力表記の大小差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "すべての入力が同じ結果になる": "casefold は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese yen display\", \"key\": \"japanese-yen-display\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-YEN-DISPLAY\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "日本円の表示形式を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
          "fix": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
          "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
          "impact": "入力表記の大小差による検索漏れを減らせる。",
          "correctedCode": "records = [\n    {\"name\": \"Japanese yen display\", \"key\": \"japanese-yen-display\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-YEN-DISPLAY\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])"
        }
      },
      {
        "id": "jp_py_b05",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "debug-step",
        "title": "station names in Japanese and romaji: normalization-debug",
        "description": "駅名の日本語表記とローマ字表記を扱う Python コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "records = [\n    {\"name\": \"station names in Japanese and romaji\", \"key\": \"station-names-in-japanese-and-romaji\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"STATION-NAMES-IN-JAPANESE-AND-ROMAJI\"\n\nfor record in records:\n    if record[\"key\"] == query:\n        print(record[\"name\"])",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "駅名の日本語表記とローマ字表記のデータは存在しますが、期待した出力になりません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
              "配列の長さが常に0になっている",
              "print 文がコメントアウトされている"
            ],
            "answer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "hint": "値を作っている行ではなく、比較または return で使っている変数を見ます。",
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
            "optionExplanations": {
              "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。": "正解。query は全て大文字ですが key は元の表記のままで、casefold などの正規化なしに == で比較しているため一致しません。",
              "配列の長さが常に0になっている": "records には2件のデータが入っており、配列自体は空ではありません。",
              "print 文がコメントアウトされている": "print 文はコメント化されておらず、if の条件が False のため実行に到達しないだけです。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、最小で安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
              "データを空にしてエラーを避ける",
              "常に最初の record を表示する"
            ],
            "answer": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "hint": "データを消さず、処理の対象になる値を正しくそろえる修正を選びます。",
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
            "optionExplanations": {
              "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる": "正解。両方の文字列を同じ大文字小文字に揃えてから比較するので、表記の違いに関わらず正しく一致判定できます。",
              "データを空にしてエラーを避ける": "データを消すと表示すべき record まで失われ、検索自体が機能しなくなります。",
              "常に最初の record を表示する": "query の内容を無視して固定のrecordを返すことになり、別のqueryで検索しても正しく動きません。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の動作がなぜ安全になるかを確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力表記の大小差による検索漏れを減らせる。",
              "国別データが不要になる",
              "すべての入力が同じ結果になる"
            ],
            "answer": "入力表記の大小差による検索漏れを減らせる。",
            "hint": "修正で改善される境界ケースまたは表記ゆれに注目します。",
            "explanation": "入力表記の大小差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力表記の大小差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "すべての入力が同じ結果になる": "casefold は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"station names in Japanese and romaji\", \"key\": \"station-names-in-japanese-and-romaji\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"STATION-NAMES-IN-JAPANESE-AND-ROMAJI\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。」という点です。原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "駅名の日本語表記とローマ字表記を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。",
          "fix": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる",
          "why": "原因になっている値の表現または時刻境界を、処理前後で一貫させる必要があるため。",
          "impact": "入力表記の大小差による検索漏れを減らせる。",
          "correctedCode": "records = [\n    {\"name\": \"station names in Japanese and romaji\", \"key\": \"station-names-in-japanese-and-romaji\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"STATION-NAMES-IN-JAPANESE-AND-ROMAJI\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])"
        }
      }
    ],
    "javascript": [
      {
        "id": "jp_js_b01",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "Ono no Komachi and traditional three beauties claim: normalization-debug",
        "description": "小野小町と伝統的な三美人説を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "const records = [\n  { name: \"Ono no Komachi and traditional three beauties claim\", key: \"ono-no-komachi-and-traditional-three-beauties-claim\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"ONO-NO-KOMACHI-AND-TRADITIONAL-THREE-BEAUTIES-CLAIM\";\nfor (const record of records) {\n  if (record.key === query) {\n    console.log(record.name);\n  }\n}",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "小野小町と伝統的な三美人説のデータはあるのに期待通り表示されません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
              "配列の末尾だけが処理される",
              "console.log が非同期で遅れている"
            ],
            "answer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "hint": "比較式または年度計算の条件を確認します。",
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "optionExplanations": {
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。": "正解。query は全て大文字ですが key は元の表記のままで、toLowerCase などの正規化なしに === で比較しているため一致しません。",
              "配列の末尾だけが処理される": "for...of はすべての要素を順番に処理するので、末尾だけが処理されるわけではありません。",
              "console.log が非同期で遅れている": "console.log は同期的に実行されるため、非同期の遅延が原因ではありません。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
              "records を空配列にする",
              "常に true を返す"
            ],
            "answer": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "hint": "データを消さず、条件式の扱いを正しくします。",
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "optionExplanations": {
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する": "正解。両方を小文字に揃えてから比較するので、表記の大文字小文字に関わらず正しく一致判定できます。",
              "records を空配列にする": "配列を空にすると表示すべきrecordまで失われ、検索自体が機能しなくなります。",
              "常に true を返す": "条件を無視して常にtrueにすると、関係ない record まで一致したことになってしまいます。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の影響を確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力の大文字小文字差による検索漏れを減らせる。",
              "国別データが不要になる",
              "どの入力でも同じ record を返す"
            ],
            "answer": "入力の大文字小文字差による検索漏れを減らせる。",
            "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力の大文字小文字差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "どの入力でも同じ record を返す": "toLowerCase は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"Ono no Komachi and traditional three beauties claim\", key: \"ono-no-komachi-and-traditional-three-beauties-claim\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"ONO-NO-KOMACHI-AND-TRADITIONAL-THREE-BEAUTIES-CLAIM\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "小野小町と伝統的な三美人説を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"Ono no Komachi and traditional three beauties claim\", key: \"ono-no-komachi-and-traditional-three-beauties-claim\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"ONO-NO-KOMACHI-AND-TRADITIONAL-THREE-BEAUTIES-CLAIM\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      },
      {
        "id": "jp_js_b02",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "Japanese personal-name order: normalization-debug",
        "description": "日本語の姓名順を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "const records = [\n  { name: \"Japanese personal-name order\", key: \"japanese-personal-name-order\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"JAPANESE-PERSONAL-NAME-ORDER\";\nfor (const record of records) {\n  if (record.key === query) {\n    console.log(record.name);\n  }\n}",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "日本語の姓名順のデータはあるのに期待通り表示されません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
              "配列の末尾だけが処理される",
              "console.log が非同期で遅れている"
            ],
            "answer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "hint": "比較式または年度計算の条件を確認します。",
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "optionExplanations": {
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。": "正解。query は全て大文字ですが key は元の表記のままで、toLowerCase などの正規化なしに === で比較しているため一致しません。",
              "配列の末尾だけが処理される": "for...of はすべての要素を順番に処理するので、末尾だけが処理されるわけではありません。",
              "console.log が非同期で遅れている": "console.log は同期的に実行されるため、非同期の遅延が原因ではありません。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
              "records を空配列にする",
              "常に true を返す"
            ],
            "answer": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "hint": "データを消さず、条件式の扱いを正しくします。",
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "optionExplanations": {
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する": "正解。両方を小文字に揃えてから比較するので、表記の大文字小文字に関わらず正しく一致判定できます。",
              "records を空配列にする": "配列を空にすると表示すべきrecordまで失われ、検索自体が機能しなくなります。",
              "常に true を返す": "条件を無視して常にtrueにすると、関係ない record まで一致したことになってしまいます。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の影響を確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力の大文字小文字差による検索漏れを減らせる。",
              "国別データが不要になる",
              "どの入力でも同じ record を返す"
            ],
            "answer": "入力の大文字小文字差による検索漏れを減らせる。",
            "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力の大文字小文字差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "どの入力でも同じ record を返す": "toLowerCase は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"Japanese personal-name order\", key: \"japanese-personal-name-order\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"JAPANESE-PERSONAL-NAME-ORDER\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "日本語の姓名順を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"Japanese personal-name order\", key: \"japanese-personal-name-order\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"JAPANESE-PERSONAL-NAME-ORDER\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      },
      {
        "id": "jp_js_b03",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "full-width and half-width characters: normalization-debug",
        "description": "全角文字と半角文字を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "const records = [\n  { name: \"full-width and half-width characters\", key: \"full-width-and-half-width-characters\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"FULL-WIDTH-AND-HALF-WIDTH-CHARACTERS\";\nfor (const record of records) {\n  if (record.key === query) {\n    console.log(record.name);\n  }\n}",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "全角文字と半角文字のデータはあるのに期待通り表示されません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
              "配列の末尾だけが処理される",
              "console.log が非同期で遅れている"
            ],
            "answer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "hint": "比較式または年度計算の条件を確認します。",
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "optionExplanations": {
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。": "正解。query は全て大文字ですが key は元の表記のままで、toLowerCase などの正規化なしに === で比較しているため一致しません。",
              "配列の末尾だけが処理される": "for...of はすべての要素を順番に処理するので、末尾だけが処理されるわけではありません。",
              "console.log が非同期で遅れている": "console.log は同期的に実行されるため、非同期の遅延が原因ではありません。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
              "records を空配列にする",
              "常に true を返す"
            ],
            "answer": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "hint": "データを消さず、条件式の扱いを正しくします。",
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "optionExplanations": {
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する": "正解。両方を小文字に揃えてから比較するので、表記の大文字小文字に関わらず正しく一致判定できます。",
              "records を空配列にする": "配列を空にすると表示すべきrecordまで失われ、検索自体が機能しなくなります。",
              "常に true を返す": "条件を無視して常にtrueにすると、関係ない record まで一致したことになってしまいます。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の影響を確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力の大文字小文字差による検索漏れを減らせる。",
              "国別データが不要になる",
              "どの入力でも同じ record を返す"
            ],
            "answer": "入力の大文字小文字差による検索漏れを減らせる。",
            "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力の大文字小文字差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "どの入力でも同じ record を返す": "toLowerCase は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"full-width and half-width characters\", key: \"full-width-and-half-width-characters\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"FULL-WIDTH-AND-HALF-WIDTH-CHARACTERS\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "全角文字と半角文字を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"full-width and half-width characters\", key: \"full-width-and-half-width-characters\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"FULL-WIDTH-AND-HALF-WIDTH-CHARACTERS\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      },
      {
        "id": "jp_js_b04",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "debug-step",
        "title": "gojuon ordering: normalization-debug",
        "description": "五十音順を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "const records = [\n  { name: \"gojuon ordering\", key: \"gojuon-ordering\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"GOJUON-ORDERING\";\nfor (const record of records) {\n  if (record.key === query) {\n    console.log(record.name);\n  }\n}",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "五十音順のデータはあるのに期待通り表示されません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
              "配列の末尾だけが処理される",
              "console.log が非同期で遅れている"
            ],
            "answer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "hint": "比較式または年度計算の条件を確認します。",
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "optionExplanations": {
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。": "正解。query は全て大文字ですが key は元の表記のままで、toLowerCase などの正規化なしに === で比較しているため一致しません。",
              "配列の末尾だけが処理される": "for...of はすべての要素を順番に処理するので、末尾だけが処理されるわけではありません。",
              "console.log が非同期で遅れている": "console.log は同期的に実行されるため、非同期の遅延が原因ではありません。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
              "records を空配列にする",
              "常に true を返す"
            ],
            "answer": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "hint": "データを消さず、条件式の扱いを正しくします。",
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "optionExplanations": {
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する": "正解。両方を小文字に揃えてから比較するので、表記の大文字小文字に関わらず正しく一致判定できます。",
              "records を空配列にする": "配列を空にすると表示すべきrecordまで失われ、検索自体が機能しなくなります。",
              "常に true を返す": "条件を無視して常にtrueにすると、関係ない record まで一致したことになってしまいます。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の影響を確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力の大文字小文字差による検索漏れを減らせる。",
              "国別データが不要になる",
              "どの入力でも同じ record を返す"
            ],
            "answer": "入力の大文字小文字差による検索漏れを減らせる。",
            "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力の大文字小文字差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "どの入力でも同じ record を返す": "toLowerCase は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"gojuon ordering\", key: \"gojuon-ordering\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"GOJUON-ORDERING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "五十音順を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"gojuon ordering\", key: \"gojuon-ordering\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"GOJUON-ORDERING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      },
      {
        "id": "jp_js_b05",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "to-do-fu-ken suffix handling: normalization-debug",
        "description": "都道府県の接尾辞処理を扱う JavaScript コードの不具合を、原因・修正・影響の3段階で確認します。",
        "code": "const records = [\n  { name: \"to-do-fu-ken suffix handling\", key: \"to-do-fu-ken-suffix-handling\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"TO-DO-FU-KEN-SUFFIX-HANDLING\";\nfor (const record of records) {\n  if (record.key === query) {\n    console.log(record.name);\n  }\n}",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "都道府県の接尾辞処理のデータはあるのに期待通り表示されません。",
            "question": "主な原因はどれですか。",
            "options": [
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
              "配列の末尾だけが処理される",
              "console.log が非同期で遅れている"
            ],
            "answer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "hint": "比較式または年度計算の条件を確認します。",
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
            "optionExplanations": {
              "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。": "正解。query は全て大文字ですが key は元の表記のままで、toLowerCase などの正規化なしに === で比較しているため一致しません。",
              "配列の末尾だけが処理される": "for...of はすべての要素を順番に処理するので、末尾だけが処理されるわけではありません。",
              "console.log が非同期で遅れている": "console.log は同期的に実行されるため、非同期の遅延が原因ではありません。"
            }
          },
          {
            "stepNum": 2,
            "stepTitle": "修正を選ぶ",
            "prompt": "Step 1 の原因を踏まえて、安全な修正を選びます。",
            "question": "正しい修正はどれですか。",
            "options": [
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
              "records を空配列にする",
              "常に true を返す"
            ],
            "answer": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "hint": "データを消さず、条件式の扱いを正しくします。",
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
            "optionExplanations": {
              "`record.key.toLowerCase() === query.toLowerCase()` で比較する": "正解。両方を小文字に揃えてから比較するので、表記の大文字小文字に関わらず正しく一致判定できます。",
              "records を空配列にする": "配列を空にすると表示すべきrecordまで失われ、検索自体が機能しなくなります。",
              "常に true を返す": "条件を無視して常にtrueにすると、関係ない record まで一致したことになってしまいます。"
            }
          },
          {
            "stepNum": 3,
            "stepTitle": "理由と影響",
            "prompt": "修正後の影響を確認します。",
            "question": "修正の影響として正しいものはどれですか。",
            "options": [
              "入力の大文字小文字差による検索漏れを減らせる。",
              "国別データが不要になる",
              "どの入力でも同じ record を返す"
            ],
            "answer": "入力の大文字小文字差による検索漏れを減らせる。",
            "hint": "表記ゆれまたは日付境界を正しく扱えるかを見ます。",
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。",
            "optionExplanations": {
              "入力の大文字小文字差による検索漏れを減らせる。": "正解。表記の大文字小文字差だけで一致しなかった検索漏れを防げるようになります。",
              "国別データが不要になる": "country フィールドは比較ロジックと無関係で、修正によって不要になるわけではありません。",
              "どの入力でも同じ record を返す": "toLowerCase は大文字小文字を揃えるだけで、異なるキーの値同士が同じ結果になるわけではありません。"
            }
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"to-do-fu-ken suffix handling\", key: \"to-do-fu-ken-suffix-handling\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"TO-DO-FU-KEN-SUFFIX-HANDLING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "このDEBUG問題の本質的な原因は「保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。」という点です。仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "都道府県の接尾辞処理を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"to-do-fu-ken suffix handling\", key: \"to-do-fu-ken-suffix-handling\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"TO-DO-FU-KEN-SUFFIX-HANDLING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      }
    ]
  },
  "US": {
    "python": [
      {
        "id": "dbg_us_py_1",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "debug-step",
        "title": "USPS state abbreviation lookup: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "USPS state abbreviation lookup の処理が失敗します。",
            "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
            "question": "主な原因はどれですか。",
            "options": [
              "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（\"ny\"）ですが input_code は大文字（\"NY\"）のままで、表記を揃えずに参照しているため KeyError になります。",
              "出力関数の名前が違う": "print は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には \"ny\" と \"ca\" の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に lower() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に lower() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "辞書からキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "USPS state abbreviation lookup は Publication 28 Appendix B（United States Postal Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "USPS state abbreviation lookup で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に lower() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
        },
        "sourceRefs": [
          {
            "title": "Publication 28 Appendix B",
            "organization": "United States Postal Service",
            "url": "https://pe.usps.com/text/pub28/28apb.htm"
          }
        ],
        "factIds": [
          "fact_us_usps_state_abbreviation"
        ],
        "entityKeys": [
          "us:usps_state_abbreviation"
        ]
      },
      {
        "id": "dbg_us_py_2",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "debug-step",
        "title": "ZIP code leading-zero preservation: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "ZIP code leading-zero preservation の処理が失敗します。",
            "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
            "question": "主な原因はどれですか。",
            "options": [
              "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（\"ny\"）ですが input_code は大文字（\"NY\"）のままで、表記を揃えずに参照しているため KeyError になります。",
              "出力関数の名前が違う": "print は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には \"ny\" と \"ca\" の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に lower() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に lower() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "辞書からキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "ZIP code leading-zero preservation は ZIP Code history（United States Postal Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "ZIP code leading-zero preservation で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に lower() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
        },
        "sourceRefs": [
          {
            "title": "ZIP Code history",
            "organization": "United States Postal Service",
            "url": "https://about.usps.com/who/profile/history/zip-code.htm"
          }
        ],
        "factIds": [
          "fact_us_zip_leading_zero"
        ],
        "entityKeys": [
          "us:zip_leading_zero"
        ]
      },
      {
        "id": "dbg_us_py_3",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "debug-step",
        "title": "MM/DD/YYYY parsing: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "MM/DD/YYYY parsing の処理が失敗します。",
            "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
            "question": "主な原因はどれですか。",
            "options": [
              "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（\"ny\"）ですが input_code は大文字（\"NY\"）のままで、表記を揃えずに参照しているため KeyError になります。",
              "出力関数の名前が違う": "print は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には \"ny\" と \"ca\" の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に lower() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に lower() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "辞書からキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "MM/DD/YYYY parsing は Time and Date FAQs（NIST） をもとにした題材です。",
        "debugExplanation": {
          "cause": "MM/DD/YYYY parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に lower() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
        },
        "sourceRefs": [
          {
            "title": "Time and Date FAQs",
            "organization": "NIST",
            "url": "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-and-date-faqs"
          }
        ],
        "factIds": [
          "fact_us_us_date_parsing"
        ],
        "entityKeys": [
          "us:us_date_parsing"
        ]
      },
      {
        "id": "dbg_us_py_4",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "debug-step",
        "title": "US time-zone mapping: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "US time-zone mapping の処理が失敗します。",
            "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
            "question": "主な原因はどれですか。",
            "options": [
              "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（\"ny\"）ですが input_code は大文字（\"NY\"）のままで、表記を揃えずに参照しているため KeyError になります。",
              "出力関数の名前が違う": "print は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には \"ny\" と \"ca\" の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に lower() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に lower() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "辞書からキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "US time-zone mapping は Time Zones（U.S. Department of Transportation） をもとにした題材です。",
        "debugExplanation": {
          "cause": "US time-zone mapping で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に lower() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
        },
        "sourceRefs": [
          {
            "title": "Time Zones",
            "organization": "U.S. Department of Transportation",
            "url": "https://www.transportation.gov/regulations/time-zones"
          }
        ],
        "factIds": [
          "fact_us_us_time_zone_mapping"
        ],
        "entityKeys": [
          "us:us_time_zone_mapping"
        ]
      },
      {
        "id": "dbg_us_py_5",
        "worldId": "debug",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "debug-step",
        "title": "North American phone formatting: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "North American phone formatting の処理が失敗します。",
            "code": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\"\nprint(lookup[input_code])",
            "question": "主な原因はどれですか。",
            "options": [
              "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（\"ny\"）ですが input_code は大文字（\"NY\"）のままで、表記を揃えずに参照しているため KeyError になります。",
              "出力関数の名前が違う": "print は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には \"ny\" と \"ca\" の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に lower() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に lower() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "辞書からキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に lower() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "North American phone formatting は North American Numbering Plan（Federal Communications Commission） をもとにした題材です。",
        "debugExplanation": {
          "cause": "North American phone formatting で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に lower() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "lookup = {\"ny\": \"New York\", \"ca\": \"California\"}\ninput_code = \"NY\".lower()\nprint(lookup[input_code])"
        },
        "sourceRefs": [
          {
            "title": "North American Numbering Plan",
            "organization": "Federal Communications Commission",
            "url": "https://www.fcc.gov/general/north-american-numbering-plan"
          }
        ],
        "factIds": [
          "fact_us_nanp_phone_format"
        ],
        "entityKeys": [
          "us:nanp_phone_format"
        ]
      }
    ],
    "javascript": [
      {
        "id": "dbg_us_js_1",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "functions",
        "questionType": "debug-step",
        "title": "12-hour AM/PM conversion: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "12-hour AM/PM conversion の処理が失敗します。",
            "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
            "question": "主な原因はどれですか。",
            "options": [
              "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（ny）ですが inputCode は大文字（\"NY\"）のままで、表記を揃えずに参照しているため undefined になります。",
              "出力関数の名前が違う": "console.log は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には ny と ca の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に toLowerCase() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に toLowerCase() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "オブジェクトからキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "12-hour AM/PM conversion は Time and Frequency FAQs（NIST） をもとにした題材です。",
        "debugExplanation": {
          "cause": "12-hour AM/PM conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に toLowerCase() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
        },
        "sourceRefs": [
          {
            "title": "Time and Frequency FAQs",
            "organization": "NIST",
            "url": "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-and-frequency-faqs"
          }
        ],
        "factIds": [
          "fact_us_ampm_noon_midnight"
        ],
        "entityKeys": [
          "us:ampm_noon_midnight"
        ]
      },
      {
        "id": "dbg_us_js_2",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "functions",
        "questionType": "debug-step",
        "title": "Fahrenheit display/conversion: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "Fahrenheit display/conversion の処理が失敗します。",
            "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
            "question": "主な原因はどれですか。",
            "options": [
              "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（ny）ですが inputCode は大文字（\"NY\"）のままで、表記を揃えずに参照しているため undefined になります。",
              "出力関数の名前が違う": "console.log は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には ny と ca の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に toLowerCase() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に toLowerCase() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "オブジェクトからキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "Fahrenheit display/conversion は Temperature（National Weather Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "Fahrenheit display/conversion で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に toLowerCase() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
        },
        "sourceRefs": [
          {
            "title": "Temperature",
            "organization": "National Weather Service",
            "url": "https://www.weather.gov/jetstream/temp"
          }
        ],
        "factIds": [
          "fact_us_fahrenheit_conversion"
        ],
        "entityKeys": [
          "us:fahrenheit_conversion"
        ]
      },
      {
        "id": "dbg_us_js_3",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "debug-step",
        "title": "USPS apartment/suite address parsing: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "USPS apartment/suite address parsing の処理が失敗します。",
            "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
            "question": "主な原因はどれですか。",
            "options": [
              "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（ny）ですが inputCode は大文字（\"NY\"）のままで、表記を揃えずに参照しているため undefined になります。",
              "出力関数の名前が違う": "console.log は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には ny と ca の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に toLowerCase() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に toLowerCase() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "オブジェクトからキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "USPS apartment/suite address parsing は Publication 28（United States Postal Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "USPS apartment/suite address parsing で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に toLowerCase() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
        },
        "sourceRefs": [
          {
            "title": "Publication 28",
            "organization": "United States Postal Service",
            "url": "https://pe.usps.com/text/pub28/welcome.htm"
          }
        ],
        "factIds": [
          "fact_us_usps_secondary_address"
        ],
        "entityKeys": [
          "us:usps_secondary_address"
        ]
      },
      {
        "id": "dbg_us_js_4",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "functions",
        "questionType": "debug-step",
        "title": "ZIP+4 validation: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "ZIP+4 validation の処理が失敗します。",
            "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
            "question": "主な原因はどれですか。",
            "options": [
              "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（ny）ですが inputCode は大文字（\"NY\"）のままで、表記を揃えずに参照しているため undefined になります。",
              "出力関数の名前が違う": "console.log は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には ny と ca の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に toLowerCase() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に toLowerCase() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "オブジェクトからキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "ZIP+4 validation は ZIP Code history（United States Postal Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "ZIP+4 validation で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に toLowerCase() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
        },
        "sourceRefs": [
          {
            "title": "ZIP Code history",
            "organization": "United States Postal Service",
            "url": "https://about.usps.com/who/profile/history/zip-code.htm"
          }
        ],
        "factIds": [
          "fact_us_zip_plus4_validation"
        ],
        "entityKeys": [
          "us:zip_plus4_validation"
        ]
      },
      {
        "id": "dbg_us_js_5",
        "worldId": "debug",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "debug-step",
        "title": "states/territories/DC data model: DEBUG",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "原因を特定",
            "prompt": "states/territories/DC data model の処理が失敗します。",
            "code": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\";\nconsole.log(lookup[inputCode]);",
            "question": "主な原因はどれですか。",
            "options": [
              "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない",
              "出力関数の名前が違う",
              "データが空になっている"
            ],
            "answer": "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない",
            "hint": "入力値とキーの表記を比べます。",
            "explanation": "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない",
            "optionExplanations": {
              "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない": "正解。lookup のキーは小文字（ny）ですが inputCode は大文字（\"NY\"）のままで、表記を揃えずに参照しているため undefined になります。",
              "出力関数の名前が違う": "console.log は正しく使われており、関数名の誤りはありません。",
              "データが空になっている": "lookup には ny と ca の2件のデータがあり、空ではありません。"
            }
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
            "explanation": "参照前に toLowerCase() でキー形式をそろえる",
            "optionExplanations": {
              "参照前に toLowerCase() でキー形式をそろえる": "正解。入力を保存データと同じ小文字キーに揃えてから参照するので、表記が違っても正しく一致します。",
              "常に最初の値を返す": "入力の内容を無視して固定の値を返すことになり、別のキーで参照しても正しい結果になりません。",
              "キーを削除してから参照する": "オブジェクトからキーを削除すると、その後の参照でそもそも値が存在しなくなり問題が解決しません。"
            }
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
            "explanation": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
            "optionExplanations": {
              "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる": "正解。入力を保存データと同じ表記に揃えてから参照するので、大文字小文字の違いがあっても同じデータを正しく引けるようになります。",
              "出典データが不要になる": "出典データ（lookupの内容）は修正後も必要で、表記を揃える処理が不要にするわけではありません。",
              "どの入力でも同じ固定値を返す": "lower()/toLowerCase() は表記を揃えるだけで、入力ごとに対応する別の値を正しく返します。固定値にはなりません。"
            }
          }
        ],
        "correctAnswer": "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない / 参照前に toLowerCase() でキー形式をそろえる / 大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
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
        "programmingExplanation": "このDEBUG問題の本質的な原因は「states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない」という点です。入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。",
        "countryNote": "states/territories/DC data model は Publication 28 Appendix B（United States Postal Service） をもとにした題材です。",
        "debugExplanation": {
          "cause": "states/territories/DC data model で入力表記を正規化せず、保存データのキー形式と一致しない",
          "fix": "参照前に toLowerCase() でキー形式をそろえる",
          "why": "入力と保存データの形式を同じにしてから参照すれば、存在するデータを正しく引けます。",
          "impact": "大文字小文字や表記ゆれのある入力でも、同じ実体を安定して参照できる",
          "correctedCode": "const lookup = { ny: \"New York\", ca: \"California\" };\nconst inputCode = \"NY\".toLowerCase();\nconsole.log(lookup[inputCode]);"
        },
        "sourceRefs": [
          {
            "title": "Publication 28 Appendix B",
            "organization": "United States Postal Service",
            "url": "https://pe.usps.com/text/pub28/28apb.htm"
          }
        ],
        "factIds": [
          "fact_us_state_territory_dc_model"
        ],
        "entityKeys": [
          "us:state_territory_dc_model"
        ]
      }
    ]
  },
  "FR": {
    "python": [
      {
        "id": "dbg_fr_py_2",
        "worldId": "debug",
        "conceptId": "loops",
        "questionType": "debug-step",
        "title": "range の終端バグ",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "エッフェル塔の 1〜10 階を 2 階ごとに表示しようとしていますが、10 階が出ません",
            "code": "floors = [f\"Floor {i}\" for i in range(2, 10, 2)]\nprint(floors)",
            "question": "このコードの問題は？",
            "options": [
              "range(2, 10, 2) は 2 から始まるので Floor 1 が出ない",
              "range(2, 10, 2) の終端 10 は含まれないため Floor 10 が出ない",
              "f-string の書き方が間違っている",
              "問題ない、正常に動作する"
            ],
            "answer": "range(2, 10, 2) の終端 10 は含まれないため Floor 10 が出ない",
            "hint": "range(start, stop, step) の stop は含まれません（exclusive）"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "Floor 2, 4, 6, 8, 10 をすべて表示するには？",
            "question": "正しい修正を選べ",
            "options": [
              "range(2, 10, 2) のまま",
              "range(2, 11, 2) に変更する",
              "range(2, 12, 2) に変更する",
              "range(1, 10, 2) に変更する"
            ],
            "answer": "range(2, 11, 2) に変更する",
            "explanation": "range(2, 11, 2) → 2, 4, 6, 8, 10。stop=11 にすることで 10 が含まれるようになります。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "range の終端が exclusive（含まない）な設計理由を選べ",
            "question": "range(0, n) が n を含まない設計の利点は？",
            "options": [
              "計算が速くなるから",
              "range(0, len(lst)) でリストの全インデックスをちょうど過不足なく生成でき、スライス記法とも一致するから",
              "Python の伝統だから",
              "負の数への対応が楽になるから"
            ],
            "answer": "range(0, len(lst)) でリストの全インデックスをちょうど過不足なく生成でき、スライス記法とも一致するから",
            "explanation": "range(0, 5) = 0,1,2,3,4 はちょうど 5 要素のリストのインデックスと一致します。lst[0:5] と同じ「終端を含まない」ルールで統一されているため、直感的に使えます。"
          }
        ]
      },
      {
        "id": "dbg_fr_py_1",
        "worldId": "debug",
        "conceptId": "loops",
        "questionType": "debug-step",
        "title": "range の引数バグ",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "フランスの都市を 1 から 5 番まで表示しようとしています",
            "code": "cities = [\"Paris\", \"Marseille\", \"Lyon\", \"Toulouse\", \"Nice\"]\nfor i in range(1, 5):\n    print(f\"{i}. {cities[i]}\")",
            "question": "このコードの問題は？",
            "options": [
              "正常に動作する",
              "range(1, 5) は 1〜4 なので \"Paris\"（インデックス0）が表示されない",
              "cities[i] でインデックスエラーが発生する",
              "f-string の書き方が間違っている"
            ],
            "answer": "range(1, 5) は 1〜4 なので \"Paris\"（インデックス0）が表示されない",
            "hint": "range(1, 5) は何の値を生成しますか？"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "1. Paris から 5. Nice まで番号付きで表示するには？",
            "question": "正しいコードを選べ",
            "options": [
              "for i in range(0, 5): で i+1 を番号にする",
              "for i in range(1, 6): を使う",
              "enumerate() を使って for i, city in enumerate(cities, 1)",
              "どれでも動く"
            ],
            "answer": "enumerate() を使って for i, city in enumerate(cities, 1)",
            "explanation": "enumerate(cities, 1) でインデックスを 1 始まりで取得できます。for i, city in enumerate(cities, 1): print(f\"{i}. {city}\") が最もシンプル。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "enumerate() と range(len()) の違いを理解しましょう",
            "question": "enumerate() が for i in range(len(lst)) より優れている理由は？",
            "options": [
              "実行速度が速いから",
              "インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから",
              "エラーが発生しないから",
              "Python 3 でのみ使えるから"
            ],
            "answer": "インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから",
            "explanation": "for i in range(len(lst)): ... lst[i] は動きますが、for i, val in enumerate(lst, 1): の方が簡潔でバグが入りにくいです。start 引数で開始番号も自由に指定できます。"
          }
        ]
      }
    ]
  },
  "ZA": {
    "python": [
      {
        "id": "dbg_za_py_2",
        "worldId": "debug",
        "conceptId": "typehints",
        "questionType": "debug-step",
        "title": "クラス変数の共有バグ",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "南アフリカの言語クラスにバグがあります。lang2 を変更していないのに official に値が入っています",
            "code": "class Language:\n    official = []\n\nlang1 = Language()\nlang1.official.append(\"Zulu\")\nlang2 = Language()\nprint(lang2.official)",
            "question": "出力は何ですか？",
            "options": [
              "[]",
              "['Zulu']",
              "None",
              "Error"
            ],
            "answer": "['Zulu']",
            "hint": "official はどこで定義されていますか？"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "各インスタンスが独立した official リストを持つようにするには？",
            "question": "正しい修正を選べ",
            "options": [
              "official = [] をクラスの外に移動する",
              "__init__(self) メソッドで self.official = [] を定義する",
              "official = tuple() に変更する",
              "lang1 と lang2 を別のクラスにする"
            ],
            "answer": "__init__(self) メソッドで self.official = [] を定義する",
            "explanation": "def __init__(self): self.official = [] とすることで、インスタンス生成時に各自の独立したリストが作られます。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "クラス変数とインスタンス変数の違いを理解しましょう",
            "question": "クラス変数がすべてのインスタンスで共有される理由は？",
            "options": [
              "Python の仕様でクラス変数は自動的にコピーされるから",
              "クラス変数はクラスオブジェクト自体に属し、インスタンスが直接変更しない限り全インスタンスで同じオブジェクトを参照するから",
              "append() が特殊な動作をするから",
              "リスト型のみこの動作が起きるから"
            ],
            "answer": "クラス変数はクラスオブジェクト自体に属し、インスタンスが直接変更しない限り全インスタンスで同じオブジェクトを参照するから",
            "explanation": "クラス変数はクラス定義時に 1 回だけ作られます。lang1.official.append() はクラス変数のリストを直接変更するため lang2 にも影響します。self.official = [] は各インスタンスに固有のインスタンス変数を作ります。"
          }
        ]
      },
      {
        "id": "dbg_za_py_1",
        "worldId": "debug",
        "conceptId": "typehints",
        "questionType": "debug-step",
        "title": "ミュータブル/イミュータブルの落とし穴",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "南アフリカの主要言語リストをコピーして編集しようとしています",
            "code": "original = [\"Zulu\", \"Xhosa\", \"Afrikaans\"]\ncopy = original\ncopy.append(\"English\")\nprint(original)",
            "question": "出力は何ですか？",
            "options": [
              "['Zulu', 'Xhosa', 'Afrikaans']",
              "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
              "['English']",
              "Error"
            ],
            "answer": "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
            "hint": "copy = original はリストをコピーしますか？"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "original を変更せずに copy に English を追加するには？",
            "question": "正しい方法を選べ",
            "options": [
              "copy = original.copy()",
              "copy = list(original)",
              "copy = original[:]",
              "上記すべて正しい"
            ],
            "answer": "上記すべて正しい",
            "explanation": "copy = original は同じリストへの参照を作るだけです。copy() / list() / [:] はどれも浅いコピーを作成します。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "copy = original の代入で何が起きるか理解しましょう",
            "question": "copy = original が「参照のコピー」になる理由は？",
            "options": [
              "Python はリストを自動的に複製するから",
              "Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから",
              "append() が original にも適用される仕様があるから",
              "リスト型は immutable だから"
            ],
            "answer": "Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから",
            "explanation": "Python の変数はメモリ上のオブジェクトへのポインタです。copy = original は同じリストを指す 2 つの名前を作るだけです。copy() / list() / [:] は新しいリストオブジェクトを作成します。"
          }
        ]
      }
    ]
  },
  "BR": {
    "python": [
      {
        "id": "dbg_br_py_1",
        "worldId": "debug",
        "conceptId": "lists",
        "questionType": "debug-step",
        "title": "append と extend の混同バグ",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "ブラジルの都市リストを結合しようとしていますが、結果が入れ子リストになっています",
            "code": "cities = [\"São Paulo\", \"Rio de Janeiro\"]\nnew_cities = [\"Brasília\", \"Salvador\"]\ncities.append(new_cities)\nprint(len(cities))",
            "question": "len(cities) の値は？",
            "options": [
              "2",
              "3",
              "4",
              "Error"
            ],
            "answer": "3",
            "hint": "append() はリスト全体を 1 要素として追加します"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "cities に 4 つの都市を 1 フラットなリストとして追加するには？",
            "question": "正しい方法を選べ",
            "options": [
              "cities.append(new_cities) のまま",
              "cities.extend(new_cities) に変更する",
              "cities + new_cities に変更する（再代入なし）",
              "cities.insert(new_cities) に変更する"
            ],
            "answer": "cities.extend(new_cities) に変更する",
            "explanation": "extend() は反復可能オブジェクトの各要素を 1 つずつ追加します。append() はオブジェクト全体を 1 要素として追加するため、リストを渡すと入れ子になります。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "append() と extend() の使い分けを整理しましょう",
            "question": "append() を使うべき場面はどれ？",
            "options": [
              "複数の要素をまとめてリストに追加したい場合",
              "1 つの要素（値やオブジェクト）をリストの末尾に追加したい場合",
              "リストをフラットに結合したい場合",
              "常に extend() の方が良い"
            ],
            "answer": "1 つの要素（値やオブジェクト）をリストの末尾に追加したい場合",
            "explanation": "append(x) はどんな型でも 1 要素として追加します。extend(iterable) はリストやタプルなどの各要素を展開して追加します。cities.append(\"Fortaleza\") は文字列 1 つを追加、cities.extend([\"Fortaleza\", \"Manaus\"]) は 2 つを展開して追加します。"
          }
        ]
      },
      {
        "id": "dbg_br_py_2",
        "worldId": "debug",
        "conceptId": "lists",
        "questionType": "debug-step",
        "title": "sort() の戻り値バグ",
        "steps": [
          {
            "stepNum": 1,
            "stepTitle": "🔍 バグの特定",
            "prompt": "ブラジルの人口をソートして変数に代入しようとしていますが None が返ります",
            "code": "populations = [12325, 6747, 3094, 2900]\nranked = populations.sort()\nprint(ranked)",
            "question": "この出力は？",
            "options": [
              "[2900, 3094, 6747, 12325]",
              "[12325, 6747, 3094, 2900]",
              "None",
              "Error"
            ],
            "answer": "None",
            "hint": "list.sort() は何を返しますか？"
          },
          {
            "stepNum": 2,
            "stepTitle": "🔧 修正方法",
            "prompt": "ソート済みの新しいリストを ranked に代入するには？",
            "question": "正しい修正を選べ",
            "options": [
              "populations.sort() のまま",
              "ranked = sorted(populations) に変更する",
              "ranked = populations.sorted() に変更する",
              "populations.sort(inplace=False) に変更する"
            ],
            "answer": "ranked = sorted(populations) に変更する",
            "explanation": "sorted() は元のリストを変更せず新しいソート済みリストを返します。populations.sort() は in-place でリスト自体を変更し None を返します。"
          },
          {
            "stepNum": 3,
            "stepTitle": "💡 理由・影響",
            "prompt": "sort() と sorted() の使い分けを整理しましょう",
            "question": "sorted() が list.sort() より適している場面はどれ？",
            "options": [
              "元のリストを変更したい場合",
              "元のリストを保持しつつ、ソート済みコピーが必要な場合",
              "大きなリストを高速にソートしたい場合",
              "降順ソートが必要な場合"
            ],
            "answer": "元のリストを保持しつつ、ソート済みコピーが必要な場合",
            "explanation": "list.sort() は in-place で元を変更・None を返します。sorted() は元を変更せず新しいリストを返します。どちらも key= や reverse= が使えます。元データを保持したい場合は sorted() を選びましょう。"
          }
        ]
      }
    ]
  }
};

if (DEBUG_CHALLENGES.JP) DEBUG_CHALLENGES.JP.java = JP_JAVA_DEBUG;
if (DEBUG_CHALLENGES.US) DEBUG_CHALLENGES.US.java = US_JAVA_DEBUG;
if (DEBUG_CHALLENGES.FR) {
  DEBUG_CHALLENGES.FR.python = FR_PY_DEBUG;
  DEBUG_CHALLENGES.FR.javascript = FR_JS_DEBUG;
  DEBUG_CHALLENGES.FR.java = FR_JAVA_DEBUG;
}
if (DEBUG_CHALLENGES.BR) {
  DEBUG_CHALLENGES.BR.python = BR_PY_DEBUG;
  DEBUG_CHALLENGES.BR.javascript = BR_JS_DEBUG;
  DEBUG_CHALLENGES.BR.java = BR_JAVA_DEBUG;
}
DEBUG_CHALLENGES.AU = {
  python: AU_PY_DEBUG,
  javascript: AU_JS_DEBUG,
  java: AU_JAVA_DEBUG,
};
DEBUG_CHALLENGES.EG = {
  python: EG_PY_DEBUG,
  javascript: EG_JS_DEBUG,
  java: EG_JAVA_DEBUG,
};
DEBUG_CHALLENGES.IN = {
  python: IN_PY_DEBUG,
  javascript: IN_JS_DEBUG,
  java: IN_JAVA_DEBUG,
};
DEBUG_CHALLENGES.RU = {
  python: RU_PY_DEBUG,
  javascript: RU_JS_DEBUG,
  java: RU_JAVA_DEBUG,
};
DEBUG_CHALLENGES.CN = {
  python: CN_PY_DEBUG,
  javascript: CN_JS_DEBUG,
  java: CN_JAVA_DEBUG,
};
DEBUG_CHALLENGES.DE = {
  python: DE_PY_DEBUG,
  javascript: DE_JS_DEBUG,
  java: DE_JAVA_DEBUG,
};
DEBUG_CHALLENGES.GB = {
  python: GB_PY_DEBUG,
  javascript: GB_JS_DEBUG,
  java: GB_JAVA_DEBUG,
};

export const DEBUG_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: 'JS', available: true },
  { id: 'java', name: 'JAVA', emoji: 'JV', available: true },
];
