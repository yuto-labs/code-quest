// DEBUG world: diagnose and repair realistic code.
// Every question uses exactly 3 steps:
//   Step 1 — identify the faulty line or cause
//   Step 2 — choose the best correction
//   Step 3 — choose the reason or resulting impact
// questionType: 'debug-step'
// Each step: { stepNum, stepTitle, prompt, code?, question, options, answer, hint?, explanation? }

export const DEBUG_CHALLENGES = {
  JP: {
    python: [
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
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。"
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
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる"
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
            "explanation": "入力表記の大小差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"kanji-hiragana-katakana search\", \"key\": \"kanji-hiragana-katakana-search\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"KANJI-HIRAGANA-KATAKANA-SEARCH\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "DEBUG では、原因の行、修正の行、修正後の影響を分けて考えます。データを保ったまま、比較または境界処理を正しくします。",
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
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。"
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
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる"
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
            "explanation": "入力表記の大小差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese era conversion\", \"key\": \"japanese-era-conversion\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ERA-CONVERSION\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "DEBUG では、原因の行、修正の行、修正後の影響を分けて考えます。データを保ったまま、比較または境界処理を正しくします。",
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
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。"
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
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる"
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
            "explanation": "入力表記の大小差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese address order\", \"key\": \"japanese-address-order\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-ADDRESS-ORDER\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "DEBUG では、原因の行、修正の行、修正後の影響を分けて考えます。データを保ったまま、比較または境界処理を正しくします。",
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
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。"
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
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる"
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
            "explanation": "入力表記の大小差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"Japanese yen display\", \"key\": \"japanese-yen-display\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"JAPANESE-YEN-DISPLAY\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "DEBUG では、原因の行、修正の行、修正後の影響を分けて考えます。データを保ったまま、比較または境界処理を正しくします。",
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
            "explanation": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。"
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
            "explanation": "比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる"
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
            "explanation": "入力表記の大小差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存データの key と検索 query の大文字小文字が違うのに、正規化せず直接比較している。 / 比較前に `record[\"key\"].casefold()` と `query.casefold()` を使って表記をそろえる / 入力表記の大小差による検索漏れを減らせる。",
        "correctedCode": "records = [\n    {\"name\": \"station names in Japanese and romaji\", \"key\": \"station-names-in-japanese-and-romaji\", \"country\": \"JP\"},\n    {\"name\": \"comparison\", \"key\": \"comparison\", \"country\": \"JP\"}\n]\nquery = \"STATION-NAMES-IN-JAPANESE-AND-ROMAJI\"\n\nfor record in records:\n    if record[\"key\"].casefold() == query.casefold():\n        print(record[\"name\"])",
        "commonMistakes": [
          "症状だけを見てデータ削除で直そうとしないこと。",
          "中間値を作っても、最後の比較や return で使わなければ反映されません。"
        ],
        "programmingExplanation": "DEBUG では、原因の行、修正の行、修正後の影響を分けて考えます。データを保ったまま、比較または境界処理を正しくします。",
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
    javascript: [
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
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。"
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
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する"
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
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"Ono no Komachi and traditional three beauties claim\", key: \"ono-no-komachi-and-traditional-three-beauties-claim\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"ONO-NO-KOMACHI-AND-TRADITIONAL-THREE-BEAUTIES-CLAIM\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "DEBUG は、壊れている条件式を特定し、最小修正で仕様に合わせる練習です。",
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
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。"
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
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する"
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
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"Japanese personal-name order\", key: \"japanese-personal-name-order\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"JAPANESE-PERSONAL-NAME-ORDER\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "DEBUG は、壊れている条件式を特定し、最小修正で仕様に合わせる練習です。",
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
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。"
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
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する"
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
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"full-width and half-width characters\", key: \"full-width-and-half-width-characters\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"FULL-WIDTH-AND-HALF-WIDTH-CHARACTERS\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "DEBUG は、壊れている条件式を特定し、最小修正で仕様に合わせる練習です。",
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
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。"
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
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する"
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
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"gojuon ordering\", key: \"gojuon-ordering\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"GOJUON-ORDERING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "DEBUG は、壊れている条件式を特定し、最小修正で仕様に合わせる練習です。",
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
            "explanation": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。"
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
            "explanation": "`record.key.toLowerCase() === query.toLowerCase()` で比較する"
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
            "explanation": "入力の大文字小文字差による検索漏れを減らせる。"
          }
        ],
        "correctAnswer": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。 / `record.key.toLowerCase() === query.toLowerCase()` で比較する / 入力の大文字小文字差による検索漏れを減らせる。",
        "correctedCode": "const records = [\n  { name: \"to-do-fu-ken suffix handling\", key: \"to-do-fu-ken-suffix-handling\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"TO-DO-FU-KEN-SUFFIX-HANDLING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}",
        "commonMistakes": [
          "エラーを隠す修正ではなく、条件式を正しくします。",
          "日本語や日付の仕様をコードの条件に反映する必要があります。"
        ],
        "programmingExplanation": "DEBUG は、壊れている条件式を特定し、最小修正で仕様に合わせる練習です。",
        "countryNote": "都道府県の接尾辞処理を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。",
        "debugExplanation": {
          "cause": "保存キーと検索語の大文字小文字が違うのに、正規化せず厳密比較している。",
          "fix": "`record.key.toLowerCase() === query.toLowerCase()` で比較する",
          "why": "仕様に合わせた比較や境界条件を入れないと、特定の入力だけ失敗するため。",
          "impact": "入力の大文字小文字差による検索漏れを減らせる。",
          "correctedCode": "const records = [\n  { name: \"to-do-fu-ken suffix handling\", key: \"to-do-fu-ken-suffix-handling\", country: \"JP\" },\n  { name: \"comparison\", key: \"comparison\", country: \"JP\" }\n];\nconst query = \"TO-DO-FU-KEN-SUFFIX-HANDLING\";\nfor (const record of records) {\n  if (record.key.toLowerCase() === query.toLowerCase()) {\n    console.log(record.name);\n  }\n}"
        }
      }
    ],
  },
  US: {
    python: [
      {
        id: 'dbg_us_py_1',
        worldId: 'debug',
        conceptId: 'conditions',
        questionType: 'debug-step',
        title: 'コロン抜けの SyntaxError',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '投票年齢チェックにバグがあります',
            code: `age = 20
if age >= 18
    print("You can vote!")`,
            question: 'このコードのエラーは？',
            options: [
              'age >= 18 の条件が間違っている',
              'if 文の末尾にコロン : が抜けている',
              'print() の文字列に問題がある',
              'age = 20 は整数なので if では使えない',
            ],
            answer: 'if 文の末尾にコロン : が抜けている',
            hint: 'Python の if 文は : で終わる必要があります',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '正しい構文に修正してください',
            question: '正しいコードを選べ',
            options: [
              'if age >= 18;\n    print(...)',
              'if age >= 18:\n    print(...)',
              'if (age >= 18)\n    print(...)',
              'if age >= 18 then\n    print(...)',
            ],
            answer: 'if age >= 18:\n    print(...)',
            explanation: 'Python の if, for, while, def, class などはすべてコロン : で終わります。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'コロンが必要な Python の構文を整理しましょう',
            question: 'コロン : が末尾に必要なキーワードはどれ？',
            options: [
              'if と for のみ',
              'print と return',
              'if, for, while, def, class, with, try, except, else, elif, finally',
              'import と from',
            ],
            answer: 'if, for, while, def, class, with, try, except, else, elif, finally',
            explanation: 'Python ではブロックを開始するすべての構文がコロン : で終わります。インデントと組み合わせて { } の代わりにコードブロックを表現します。',
          },
        ],
      },
      {
        id: 'dbg_us_py_2',
        worldId: 'debug',
        conceptId: 'loops',
        questionType: 'debug-step',
        title: '無限ループのバグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '1 から 5 まで表示するコードが無限ループになっています',
            code: `i = 1
while i <= 5:
    print(i)`,
            question: 'このコードが無限ループになる理由は？',
            options: [
              'while の条件が間違っている',
              'i を更新（インクリメント）するコードが抜けている',
              'print() が i の値を変えてしまう',
              '1 から 5 は range() を使わないと表示できない',
            ],
            answer: 'i を更新（インクリメント）するコードが抜けている',
            hint: 'i の値がずっと 1 のままです',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'ループを正しく終わらせるには？',
            question: '追加すべきコードは？',
            options: [
              'print(i) の前に i += 1 を追加',
              'print(i) の後に i += 1 を追加',
              'while i <= 5 を while True に変更',
              'break を追加する',
            ],
            answer: 'print(i) の後に i += 1 を追加',
            explanation: 'while ループ内で i を増やさないと条件が常に True になり無限ループになります。print 後に i += 1 を追加します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: '無限ループが起きるとどうなるか理解しましょう',
            question: 'while ループが必ず終了するために必要なことは？',
            options: [
              '条件を常に True にする',
              'ループ本体の中で、いつかは条件を False にする変更を行う',
              '毎回 break 文を書く',
              'range() を必ず使う',
            ],
            answer: 'ループ本体の中で、いつかは条件を False にする変更を行う',
            explanation: 'while ループは条件が False になるまで繰り返します。i += 1 のような更新か break / return で必ず終了できる設計が必要です。無限ループはプログラムをフリーズさせます。',
          },
        ],
      },
      {
        id: 'dbg_us_py_3',
        worldId: 'debug',
        conceptId: 'dicts',
        questionType: 'debug-step',
        title: '辞書キーの KeyError',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'アメリカの州情報辞書にアクセスするコードがエラーになります',
            code: `state_info = {
    "California": "Sacramento",
    "Texas": "Austin",
    "New York": "Albany"
}
print(state_info["new york"])`,
            question: 'エラーの原因は？',
            options: [
              'state_info に New York が存在しない',
              '"new york"（小文字）と "New York"（大文字）は異なるキー',
              '辞書は文字列キーをサポートしない',
              'print() は辞書の値を表示できない',
            ],
            answer: '"new york"（小文字）と "New York"（大文字）は異なるキー',
            hint: 'Python の辞書キーは大文字・小文字を区別します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'KeyError を避けるより安全なアクセス方法は？',
            question: '最も安全な方法を選べ',
            options: [
              'state_info["New York"] に修正する',
              'state_info.get("new york", "Not found") を使う',
              'try-except で KeyError をキャッチする',
              '辞書のキーをすべて小文字に統一して state_info["new york"] にする',
            ],
            answer: 'state_info.get("new york", "Not found") を使う',
            hint: 'get() はキーが存在しない場合にデフォルト値を返します',
            explanation: '正しいキー "New York" の使用も正解ですが、get() を使うとキー不在でも安全にアクセスできます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'dict[key] と dict.get(key) の使い分けを理解しましょう',
            question: 'get() が dict[key] より優れているのはどんな状況？',
            options: [
              'キーが必ず存在することが保証されている場合',
              'キーが存在するか不確かで、デフォルト値を返したい場合',
              '辞書を書き換えたい場合',
              '辞書のサイズを知りたい場合',
            ],
            answer: 'キーが存在するか不確かで、デフォルト値を返したい場合',
            explanation: '確実に存在するキーなら dict[key]、不確かなら dict.get(key, default)。外部データや設定ファイルを扱う場面では get() が安全です。KeyError で処理が止まるリスクを防げます。',
          },
        ],
      },
    ],
  },
  FR: {
    python: [
      {
        id: 'dbg_fr_py_2',
        worldId: 'debug',
        conceptId: 'loops',
        questionType: 'debug-step',
        title: 'range の終端バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'エッフェル塔の 1〜10 階を 2 階ごとに表示しようとしていますが、10 階が出ません',
            code: `floors = [f"Floor {i}" for i in range(2, 10, 2)]
print(floors)`,
            question: 'このコードの問題は？',
            options: [
              'range(2, 10, 2) は 2 から始まるので Floor 1 が出ない',
              'range(2, 10, 2) の終端 10 は含まれないため Floor 10 が出ない',
              'f-string の書き方が間違っている',
              '問題ない、正常に動作する',
            ],
            answer: 'range(2, 10, 2) の終端 10 は含まれないため Floor 10 が出ない',
            hint: 'range(start, stop, step) の stop は含まれません（exclusive）',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'Floor 2, 4, 6, 8, 10 をすべて表示するには？',
            question: '正しい修正を選べ',
            options: [
              'range(2, 10, 2) のまま',
              'range(2, 11, 2) に変更する',
              'range(2, 12, 2) に変更する',
              'range(1, 10, 2) に変更する',
            ],
            answer: 'range(2, 11, 2) に変更する',
            explanation: 'range(2, 11, 2) → 2, 4, 6, 8, 10。stop=11 にすることで 10 が含まれるようになります。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'range の終端が exclusive（含まない）な設計理由を選べ',
            question: 'range(0, n) が n を含まない設計の利点は？',
            options: [
              '計算が速くなるから',
              'range(0, len(lst)) でリストの全インデックスをちょうど過不足なく生成でき、スライス記法とも一致するから',
              'Python の伝統だから',
              '負の数への対応が楽になるから',
            ],
            answer: 'range(0, len(lst)) でリストの全インデックスをちょうど過不足なく生成でき、スライス記法とも一致するから',
            explanation: 'range(0, 5) = 0,1,2,3,4 はちょうど 5 要素のリストのインデックスと一致します。lst[0:5] と同じ「終端を含まない」ルールで統一されているため、直感的に使えます。',
          },
        ],
      },
      {
        id: 'dbg_fr_py_1',
        worldId: 'debug',
        conceptId: 'loops',
        questionType: 'debug-step',
        title: 'range の引数バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'フランスの都市を 1 から 5 番まで表示しようとしています',
            code: `cities = ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
for i in range(1, 5):
    print(f"{i}. {cities[i]}")`,
            question: 'このコードの問題は？',
            options: [
              '正常に動作する',
              'range(1, 5) は 1〜4 なので "Paris"（インデックス0）が表示されない',
              'cities[i] でインデックスエラーが発生する',
              'f-string の書き方が間違っている',
            ],
            answer: 'range(1, 5) は 1〜4 なので "Paris"（インデックス0）が表示されない',
            hint: 'range(1, 5) は何の値を生成しますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '1. Paris から 5. Nice まで番号付きで表示するには？',
            question: '正しいコードを選べ',
            options: [
              'for i in range(0, 5): で i+1 を番号にする',
              'for i in range(1, 6): を使う',
              'enumerate() を使って for i, city in enumerate(cities, 1)',
              'どれでも動く',
            ],
            answer: 'enumerate() を使って for i, city in enumerate(cities, 1)',
            explanation: 'enumerate(cities, 1) でインデックスを 1 始まりで取得できます。for i, city in enumerate(cities, 1): print(f"{i}. {city}") が最もシンプル。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'enumerate() と range(len()) の違いを理解しましょう',
            question: 'enumerate() が for i in range(len(lst)) より優れている理由は？',
            options: [
              '実行速度が速いから',
              'インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから',
              'エラーが発生しないから',
              'Python 3 でのみ使えるから',
            ],
            answer: 'インデックスと値を同時に取得でき、リスト長に依存しない読みやすいコードが書けるから',
            explanation: 'for i in range(len(lst)): ... lst[i] は動きますが、for i, val in enumerate(lst, 1): の方が簡潔でバグが入りにくいです。start 引数で開始番号も自由に指定できます。',
          },
        ],
      },
    ],
  },
  DE: {
    python: [
      {
        id: 'dbg_de_py_2',
        worldId: 'debug',
        conceptId: 'files',
        questionType: 'debug-step',
        title: 'ミュータブルなデフォルト引数のバグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ドイツの都市を収集する関数が 2 回目以降おかしな動作をします',
            code: `def add_city(city, cities=[]):
    cities.append(city)
    return cities

print(add_city("Berlin"))
print(add_city("Munich"))`,
            question: '2 回目の呼び出し add_city("Munich") の出力は？',
            options: [
              "['Munich']",
              "['Berlin', 'Munich']",
              "['Berlin']",
              'Error',
            ],
            answer: "['Berlin', 'Munich']",
            hint: 'デフォルト引数のリストは関数定義時に一度だけ作られます',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '毎回新しい空リストから始める正しい書き方は？',
            question: '正しい修正を選べ',
            options: [
              'def add_city(city, cities=[]): のまま使う',
              'def add_city(city, cities=None):\n    if cities is None:\n        cities = []',
              'def add_city(city, cities=list()): に変更する',
              'cities.clear() を先頭に追加する',
            ],
            answer: 'def add_city(city, cities=None):\n    if cities is None:\n        cities = []',
            explanation: 'cities=None をデフォルトにして、関数内で None の場合のみ新しい [] を作ります。これで毎回独立したリストが使われます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'ミュータブルなデフォルト引数が危険な理由を選べ',
            question: 'def func(lst=[]) が問題になる理由は？',
            options: [
              'リストは引数に使えないから',
              'デフォルト引数はdef文の実行時に一度だけ評価・作成されるため、呼び出しのたびに同じオブジェクトが使い回されるから',
              'Python のバグだから',
              'append() がデフォルト引数を変更できないから',
            ],
            answer: 'デフォルト引数はdef文の実行時に一度だけ評価・作成されるため、呼び出しのたびに同じオブジェクトが使い回されるから',
            explanation: 'デフォルト引数はモジュールロード時に 1 回だけ評価されます。ミュータブルなオブジェクト（list/dict/set）は状態が累積します。None パターンはこれを防ぐ Python の定番イディオムです。',
          },
        ],
      },
      {
        id: 'dbg_de_py_1',
        worldId: 'debug',
        conceptId: 'files',
        questionType: 'debug-step',
        title: '比較演算子の混同バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ベルリンの人口が最大かチェックするコードにバグがあります',
            code: `berlin_pop = 3769495
hamburg_pop = 1847253
if berlin_pop = hamburg_pop:
    print("Same population")
else:
    print("Different populations")`,
            question: 'このコードの問題は？',
            options: [
              '= は代入、比較には == を使う必要がある',
              'if 文の中で変数は使えない',
              'print() の引数が間違っている',
              'else ブロックが不要',
            ],
            answer: '= は代入、比較には == を使う必要がある',
            hint: 'Python で等しいかどうかを比較する演算子は？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '= と == の違いを正しく説明しているのは？',
            question: '正しい説明を選べ',
            options: [
              '= も == もどちらも比較に使える',
              '= は代入（左辺に値を入れる）、== は等値比較（両辺が等しいか確認）',
              '== は整数のみで使え、文字列では = を使う',
              'if 文の中では = が比較になる',
            ],
            answer: '= は代入（左辺に値を入れる）、== は等値比較（両辺が等しいか確認）',
            explanation: 'if berlin_pop == hamburg_pop: が正しい。= は変数に値を代入する演算子、== は 2 つの値が等しいか比較する演算子です。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'if 文で = が SyntaxError になる理由を選べ',
            question: 'Python が if 文内の = を許可しない理由は？',
            options: [
              'if 文は代入をサポートしていない（Python の構文規則）',
              'berlin_pop と hamburg_pop が整数だから',
              '比較は int 型に使えないから',
              '変数が未定義だから',
            ],
            answer: 'if 文は代入をサポートしていない（Python の構文規則）',
            explanation: 'Python では if/while の条件式に通常の代入 = は書けません（SyntaxError）。これは意図しない代入バグを防ぐ設計です。Python 3.8 以降の := (walrus operator) は別途使用可能です。',
          },
        ],
      },
    ],
  },
  GB: {
    python: [
      {
        id: 'dbg_gb_py_2',
        worldId: 'debug',
        conceptId: 'regex',
        questionType: 'debug-step',
        title: 're.match と re.search の使い間違い',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ロンドンのイベント情報から年を取り出そうとしていますが None が返ります',
            code: `import re
text = "Visit London in 2024"
result = re.match(r"\\d+", text)
print(result)`,
            question: 'None が返る理由は？',
            options: [
              '\\d+ が間違っている',
              're.match は文字列の先頭からしかマッチしないため、先頭に数字がない場合 None になる',
              '2024 は整数なので re では使えない',
              'import re が必要ない',
            ],
            answer: 're.match は文字列の先頭からしかマッチしないため、先頭に数字がない場合 None になる',
            hint: 're.match と re.search の違いは「どこから」マッチするか',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '"Visit London in 2024" から "2024" を取り出すには？',
            question: '正しい修正を選べ',
            options: [
              're.match(r"\\d+", text) のまま',
              're.search(r"\\d+", text) に変更する',
              're.fullmatch(r"\\d+", text) に変更する',
              'text.find("2024") を使う',
            ],
            answer: 're.search(r"\\d+", text) に変更する',
            explanation: 're.search() は文字列全体からパターンを探します。result.group() で "2024" が取得できます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 're の主要メソッドを整理しましょう',
            question: 're.match / re.search / re.fullmatch の違いは？',
            options: [
              'すべて同じ動作をする',
              'match=先頭のみ、search=文字列全体の最初のマッチ、fullmatch=文字列全体がパターンに一致',
              'match=全マッチ、search=最初のみ、fullmatch=最後のみ',
              'match と search は同じで fullmatch だけ異なる',
            ],
            answer: 'match=先頭のみ、search=文字列全体の最初のマッチ、fullmatch=文字列全体がパターンに一致',
            explanation: 're.match は先頭から、re.search は文字列内の任意位置から最初のマッチを返します。re.fullmatch は文字列全体がパターンと完全一致するか確認します。入力検証には fullmatch、部分検索には search を使いましょう。',
          },
        ],
      },
      {
        id: 'dbg_gb_py_1',
        worldId: 'debug',
        conceptId: 'regex',
        questionType: 'debug-step',
        title: '文字列インデックスの範囲外バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ロンドンの郵便番号からエリアコードを取得しようとしています',
            code: `postcode = "SW1A 1AA"
area = postcode[0:10]
print(f"Area: {area}")`,
            question: 'このコードの動作は？',
            options: [
              'IndexError が発生する',
              '"SW1A 1AA" がそのまま表示される（文字列スライスは範囲外でも動く）',
              '"SW1A " が表示される',
              '"SW1A 1" が表示される',
            ],
            answer: '"SW1A 1AA" がそのまま表示される（文字列スライスは範囲外でも動く）',
            hint: 'Python の文字列スライスは範囲外でもエラーにならず、存在する部分を返します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 最適な修正',
            prompt: 'エリアコード（スペース前の部分）を取得する最良の方法は？',
            question: '最も堅牢な方法を選べ',
            options: [
              'postcode[0:4]（固定長）',
              'postcode.split(" ")[0]',
              'postcode[:postcode.index(" ")]',
              'どれも正しい',
            ],
            answer: 'postcode.split(" ")[0]',
            explanation: 'split(" ")[0] はスペースで分割して最初の部分を取得。郵便番号の長さが変わっても対応できます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'split() が固定スライスより堅牢な理由を選べ',
            question: 'postcode.split(" ")[0] が postcode[0:4] より優れているのは？',
            options: [
              '実行が速いから',
              '郵便番号の長さが変わっても正しく動き、意図が明確で可読性が高いから',
              'スライスは Python では非推奨だから',
              '分割後の要素数を確認できるから',
            ],
            answer: '郵便番号の長さが変わっても正しく動き、意図が明確で可読性が高いから',
            explanation: 'postcode[0:4] は "SW1A" のような固定長にしか対応できません。"SW1" など長さが変わると壊れます。split(" ")[0] はスペースを区切りとする意図が明確で、長さに依存しません。',
          },
        ],
      },
    ],
  },
  ZA: {
    python: [
      {
        id: 'dbg_za_py_2',
        worldId: 'debug',
        conceptId: 'typehints',
        questionType: 'debug-step',
        title: 'クラス変数の共有バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '南アフリカの言語クラスにバグがあります。lang2 を変更していないのに official に値が入っています',
            code: `class Language:
    official = []

lang1 = Language()
lang1.official.append("Zulu")
lang2 = Language()
print(lang2.official)`,
            question: '出力は何ですか？',
            options: [
              '[]',
              "['Zulu']",
              'None',
              'Error',
            ],
            answer: "['Zulu']",
            hint: 'official はどこで定義されていますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '各インスタンスが独立した official リストを持つようにするには？',
            question: '正しい修正を選べ',
            options: [
              'official = [] をクラスの外に移動する',
              '__init__(self) メソッドで self.official = [] を定義する',
              'official = tuple() に変更する',
              'lang1 と lang2 を別のクラスにする',
            ],
            answer: '__init__(self) メソッドで self.official = [] を定義する',
            explanation: 'def __init__(self): self.official = [] とすることで、インスタンス生成時に各自の独立したリストが作られます。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'クラス変数とインスタンス変数の違いを理解しましょう',
            question: 'クラス変数がすべてのインスタンスで共有される理由は？',
            options: [
              'Python の仕様でクラス変数は自動的にコピーされるから',
              'クラス変数はクラスオブジェクト自体に属し、インスタンスが直接変更しない限り全インスタンスで同じオブジェクトを参照するから',
              'append() が特殊な動作をするから',
              'リスト型のみこの動作が起きるから',
            ],
            answer: 'クラス変数はクラスオブジェクト自体に属し、インスタンスが直接変更しない限り全インスタンスで同じオブジェクトを参照するから',
            explanation: 'クラス変数はクラス定義時に 1 回だけ作られます。lang1.official.append() はクラス変数のリストを直接変更するため lang2 にも影響します。self.official = [] は各インスタンスに固有のインスタンス変数を作ります。',
          },
        ],
      },
      {
        id: 'dbg_za_py_1',
        worldId: 'debug',
        conceptId: 'typehints',
        questionType: 'debug-step',
        title: 'ミュータブル/イミュータブルの落とし穴',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: '南アフリカの主要言語リストをコピーして編集しようとしています',
            code: `original = ["Zulu", "Xhosa", "Afrikaans"]
copy = original
copy.append("English")
print(original)`,
            question: '出力は何ですか？',
            options: [
              "['Zulu', 'Xhosa', 'Afrikaans']",
              "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
              "['English']",
              'Error',
            ],
            answer: "['Zulu', 'Xhosa', 'Afrikaans', 'English']",
            hint: 'copy = original はリストをコピーしますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'original を変更せずに copy に English を追加するには？',
            question: '正しい方法を選べ',
            options: [
              'copy = original.copy()',
              'copy = list(original)',
              'copy = original[:]',
              '上記すべて正しい',
            ],
            answer: '上記すべて正しい',
            explanation: 'copy = original は同じリストへの参照を作るだけです。copy() / list() / [:] はどれも浅いコピーを作成します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'copy = original の代入で何が起きるか理解しましょう',
            question: 'copy = original が「参照のコピー」になる理由は？',
            options: [
              'Python はリストを自動的に複製するから',
              'Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから',
              'append() が original にも適用される仕様があるから',
              'リスト型は immutable だから',
            ],
            answer: 'Python の変数はオブジェクトへの参照であり、= は参照をコピーするだけで新しいオブジェクトを作らないから',
            explanation: 'Python の変数はメモリ上のオブジェクトへのポインタです。copy = original は同じリストを指す 2 つの名前を作るだけです。copy() / list() / [:] は新しいリストオブジェクトを作成します。',
          },
        ],
      },
    ],
  },
  BR: {
    python: [
      {
        id: 'dbg_br_py_1',
        worldId: 'debug',
        conceptId: 'lists',
        questionType: 'debug-step',
        title: 'append と extend の混同バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ブラジルの都市リストを結合しようとしていますが、結果が入れ子リストになっています',
            code: `cities = ["São Paulo", "Rio de Janeiro"]
new_cities = ["Brasília", "Salvador"]
cities.append(new_cities)
print(len(cities))`,
            question: 'len(cities) の値は？',
            options: ['2', '3', '4', 'Error'],
            answer: '3',
            hint: 'append() はリスト全体を 1 要素として追加します',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'cities に 4 つの都市を 1 フラットなリストとして追加するには？',
            question: '正しい方法を選べ',
            options: [
              'cities.append(new_cities) のまま',
              'cities.extend(new_cities) に変更する',
              'cities + new_cities に変更する（再代入なし）',
              'cities.insert(new_cities) に変更する',
            ],
            answer: 'cities.extend(new_cities) に変更する',
            explanation: 'extend() は反復可能オブジェクトの各要素を 1 つずつ追加します。append() はオブジェクト全体を 1 要素として追加するため、リストを渡すと入れ子になります。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'append() と extend() の使い分けを整理しましょう',
            question: 'append() を使うべき場面はどれ？',
            options: [
              '複数の要素をまとめてリストに追加したい場合',
              '1 つの要素（値やオブジェクト）をリストの末尾に追加したい場合',
              'リストをフラットに結合したい場合',
              '常に extend() の方が良い',
            ],
            answer: '1 つの要素（値やオブジェクト）をリストの末尾に追加したい場合',
            explanation: 'append(x) はどんな型でも 1 要素として追加します。extend(iterable) はリストやタプルなどの各要素を展開して追加します。cities.append("Fortaleza") は文字列 1 つを追加、cities.extend(["Fortaleza", "Manaus"]) は 2 つを展開して追加します。',
          },
        ],
      },
      {
        id: 'dbg_br_py_2',
        worldId: 'debug',
        conceptId: 'lists',
        questionType: 'debug-step',
        title: 'sort() の戻り値バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'ブラジルの人口をソートして変数に代入しようとしていますが None が返ります',
            code: `populations = [12325, 6747, 3094, 2900]
ranked = populations.sort()
print(ranked)`,
            question: 'この出力は？',
            options: [
              '[2900, 3094, 6747, 12325]',
              '[12325, 6747, 3094, 2900]',
              'None',
              'Error',
            ],
            answer: 'None',
            hint: 'list.sort() は何を返しますか？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'ソート済みの新しいリストを ranked に代入するには？',
            question: '正しい修正を選べ',
            options: [
              'populations.sort() のまま',
              'ranked = sorted(populations) に変更する',
              'ranked = populations.sorted() に変更する',
              'populations.sort(inplace=False) に変更する',
            ],
            answer: 'ranked = sorted(populations) に変更する',
            explanation: 'sorted() は元のリストを変更せず新しいソート済みリストを返します。populations.sort() は in-place でリスト自体を変更し None を返します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'sort() と sorted() の使い分けを整理しましょう',
            question: 'sorted() が list.sort() より適している場面はどれ？',
            options: [
              '元のリストを変更したい場合',
              '元のリストを保持しつつ、ソート済みコピーが必要な場合',
              '大きなリストを高速にソートしたい場合',
              '降順ソートが必要な場合',
            ],
            answer: '元のリストを保持しつつ、ソート済みコピーが必要な場合',
            explanation: 'list.sort() は in-place で元を変更・None を返します。sorted() は元を変更せず新しいリストを返します。どちらも key= や reverse= が使えます。元データを保持したい場合は sorted() を選びましょう。',
          },
        ],
      },
    ],
  },
  AU: {
    python: [
      {
        id: 'dbg_au_py_1',
        worldId: 'debug',
        conceptId: 'functions',
        questionType: 'debug-step',
        title: 'スコープのバグ: UnboundLocalError',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'シドニーからウロンゴンまでの距離を 2 倍にする関数がエラーになります',
            code: `distance = 100

def double_distance():
    distance = distance * 2
    return distance

print(double_distance())`,
            question: 'このエラーの原因は？',
            options: [
              'distance = 100 がグローバル変数として使えないから',
              '関数内で distance に代入しているためローカル変数として扱われ、代入前に参照して UnboundLocalError になる',
              'distance * 2 の計算が間違っている',
              '関数に引数がないから',
            ],
            answer: '関数内で distance に代入しているためローカル変数として扱われ、代入前に参照して UnboundLocalError になる',
            hint: '関数内で変数に代入すると、その変数はローカルスコープとして扱われます',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: 'このバグを修正する最も安全な方法は？',
            question: '正しい修正を選べ',
            options: [
              'global distance を関数の先頭に追加する',
              '引数として渡す: def double_distance(d): return d * 2',
              'distance を関数の中で定義し直す',
              'distance = distance * 2 を distance *= 2 に変更する',
            ],
            answer: '引数として渡す: def double_distance(d): return d * 2',
            explanation: '引数として渡す方法が最も安全です。global 宣言は動きますが、関数がグローバル状態に依存するため再利用性が下がります。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: 'Python のスコープルール LEGB を理解しましょう',
            question: 'Python が関数内の変数をローカルと判断する条件は？',
            options: [
              '変数名が大文字で始まる場合',
              '関数内のどこかで代入（= による束縛）が行われている場合、その変数全体がローカルとして扱われる',
              'グローバルに同名変数が存在する場合',
              'return 文の後に使われる場合',
            ],
            answer: '関数内のどこかで代入（= による束縛）が行われている場合、その変数全体がローカルとして扱われる',
            explanation: 'Python は関数をコンパイルするとき、代入がある変数をローカルとマークします。そのため代入前に参照するとまだ値がない UnboundLocalError になります。グローバルを参照のみするなら問題ありませんが、変更するには global 宣言か引数渡しが必要です。',
          },
        ],
      },
      {
        id: 'dbg_au_py_2',
        worldId: 'debug',
        conceptId: 'functions',
        questionType: 'debug-step',
        title: '*args の要素数不一致バグ',
        steps: [
          {
            stepNum: 1,
            stepTitle: '🔍 バグの特定',
            prompt: 'オーストラリアの都市情報を表示する関数が TypeError になります',
            code: `def describe(city, state, country):
    return f"{city}, {state}, {country}"

info = ["Sydney", "NSW"]
print(describe(*info))`,
            question: 'このエラーの原因は？',
            options: [
              'describe 関数の引数の書き方が間違っている',
              '*info でリストを展開すると 2 つの引数になるが、describe は 3 つ必要なので TypeError',
              'f-string の書き方が間違っている',
              '*info は辞書に対してのみ使える',
            ],
            answer: '*info でリストを展開すると 2 つの引数になるが、describe は 3 つ必要なので TypeError',
            hint: '*info はリストを展開して引数として渡します。info の要素数は？',
          },
          {
            stepNum: 2,
            stepTitle: '🔧 修正方法',
            prompt: '正しく動かすための修正方法を選べ',
            question: '最も適切な修正はどれ？',
            options: [
              'info = ["Sydney", "NSW"] のまま',
              'info = ["Sydney", "NSW", "Australia"] に修正する',
              'describe(*info) を describe(info) に変更する',
              'describe の引数を 2 つに減らす',
            ],
            answer: 'info = ["Sydney", "NSW", "Australia"] に修正する',
            explanation: 'describe は 3 引数なので、*info で展開するリストも 3 要素必要です。info に "Australia" を追加することで一致します。',
          },
          {
            stepNum: 3,
            stepTitle: '💡 理由・影響',
            prompt: '*args によるアンパック展開を理解しましょう',
            question: 'func(*lst) の動作として正しいのはどれ？',
            options: [
              'lst をリストとして 1 つの引数にまとめて渡す',
              'lst の各要素を個別の位置引数として展開して渡す',
              'lst を辞書に変換して渡す',
              'lst の最初の要素のみを渡す',
            ],
            answer: 'lst の各要素を個別の位置引数として展開して渡す',
            explanation: 'func(*[a, b, c]) は func(a, b, c) と同じです。リストの要素数が関数の必須引数数と一致している必要があります。辞書のアンパックは **kwargs で行います。',
          },
        ],
      },
    ],
  },
};

export const DEBUG_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: 'JS', available: true },
];
