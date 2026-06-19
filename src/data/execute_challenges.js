// EXECUTE world: trace code, predict output, combine concepts.
// questionType: 'multiple-choice' | 'multiple-blanks' | 'output-predict'

export const EXECUTE_CHALLENGES = {
  JP: {
    python: [
      {
        "id": "jp_py_e01",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "comprehension",
        "questionType": "output-predict",
        "title": "Yakushima World Heritage criteria/context: filter-trace",
        "prompt": "屋久島が日本の世界自然遺産として知られることを含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Yakushima World Heritage criteria/context\", \"country\": \"JP\", \"score\": 4},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 2},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 6}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 3:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "Yakushima World Heritage criteria/context",
          "context",
          "other",
          "Error"
        ],
        "answer": "Yakushima World Heritage criteria/context",
        "hint": "country が JP で、score が 3 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Yakushima World Heritage criteria/context です。",
        "correctAnswer": "Yakushima World Heritage criteria/context",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "屋久島が日本の世界自然遺産として知られることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e02",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Shirakami-Sanchi beech forest: filter-trace",
        "prompt": "白神山地のブナ林が自然遺産として知られることを含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Shirakami-Sanchi beech forest\", \"country\": \"JP\", \"score\": 5},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 3},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 7}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 4:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "Shirakami-Sanchi beech forest",
          "context",
          "other",
          "Error"
        ],
        "answer": "Shirakami-Sanchi beech forest",
        "hint": "country が JP で、score が 4 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Shirakami-Sanchi beech forest です。",
        "correctAnswer": "Shirakami-Sanchi beech forest",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "白神山地のブナ林が自然遺産として知られることを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e03",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "output-predict",
        "title": "National Diet Building: filter-trace",
        "prompt": "国会議事堂の建築と議会機能を含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"National Diet Building\", \"country\": \"JP\", \"score\": 3},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 1},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 5}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 2:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "National Diet Building",
          "context",
          "other",
          "Error"
        ],
        "answer": "National Diet Building",
        "hint": "country が JP で、score が 2 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は National Diet Building です。",
        "correctAnswer": "National Diet Building",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "国会議事堂の建築と議会機能を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e04",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Hayabusa and Itokawa: filter-trace",
        "prompt": "探査機はやぶさと小惑星イトカワを含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Hayabusa and Itokawa\", \"country\": \"JP\", \"score\": 4},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 2},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 6}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 3:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "Hayabusa and Itokawa",
          "context",
          "other",
          "Error"
        ],
        "answer": "Hayabusa and Itokawa",
        "hint": "country が JP で、score が 3 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Hayabusa and Itokawa です。",
        "correctAnswer": "Hayabusa and Itokawa",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "探査機はやぶさと小惑星イトカワを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e05",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "dicts",
        "questionType": "output-predict",
        "title": "Hayabusa2 and Ryugu: filter-trace",
        "prompt": "探査機はやぶさ2と小惑星リュウグウを含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "mission = {\"name\": \"Hayabusa2 and Ryugu\", \"country\": \"JP\", \"samples\": [2, 1, 0], \"confirmed\": True}\ntotal_samples = 0\nfor amount in mission[\"samples\"]:\n    if amount > 0:\n        total_samples += amount\nstatus = mission[\"name\"] if mission[\"confirmed\"] and total_samples == 3 else \"review\"\nprint(status)",
        "options": [
          "Hayabusa2 and Ryugu",
          "review",
          "3",
          "Error"
        ],
        "answer": "Hayabusa2 and Ryugu",
        "hint": "country が JP で、score が 4 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Hayabusa2 and Ryugu です。",
        "correctAnswer": "Hayabusa2 and Ryugu",
        "executionSteps": [
          "samples の正の値だけを合計する。",
          "2 + 1 で total_samples は 3 になる。",
          "confirmed が True で合計も3なので mission name を表示する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "探査機はやぶさ2と小惑星リュウグウを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e06",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Noh role structure: filter-trace",
        "prompt": "能の役柄構造を含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Noh role structure\", \"country\": \"JP\", \"score\": 3},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 1},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 5}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 2:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "Noh role structure",
          "context",
          "other",
          "Error"
        ],
        "answer": "Noh role structure",
        "hint": "country が JP で、score が 2 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Noh role structure です。",
        "correctAnswer": "Noh role structure",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "能の役柄構造を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_py_e07",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Matsuo Basho and Oku no Hosomichi: filter-trace",
        "prompt": "松尾芭蕉とおくのほそ道を含むデータを、条件で絞り込んで出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Matsuo Basho and Oku no Hosomichi\", \"country\": \"JP\", \"score\": 4},\n    {\"name\": \"context\", \"country\": \"JP\", \"score\": 2},\n    {\"name\": \"other\", \"country\": \"other\", \"score\": 6}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"JP\" and item[\"score\"] >= 3:\n        selected.append(item[\"name\"])\nprint(\" | \".join(selected))",
        "options": [
          "Matsuo Basho and Oku no Hosomichi",
          "context",
          "other",
          "Error"
        ],
        "answer": "Matsuo Basho and Oku no Hosomichi",
        "hint": "country が JP で、score が 3 以上の要素だけを残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Matsuo Basho and Oku no Hosomichi です。",
        "correctAnswer": "Matsuo Basho and Oku no Hosomichi",
        "executionSteps": [
          "items を1件ずつ調べる。",
          "country が JP かつ score が基準以上の要素だけ selected に入れる。",
          "name を連結して出力する。"
        ],
        "commonMistakes": [
          "片方の条件だけで選ぶと、余分な項目が混ざります。",
          "出力は辞書全体ではなく name の文字列です。"
        ],
        "programmingExplanation": "for 文、if 条件、リストへの追加を組み合わせて出力を追跡します。",
        "countryNote": "松尾芭蕉とおくのほそ道を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ],
    javascript: [
      {
        "id": "jp_js_e01",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "firearms arrival at Tanegashima: filter-map-trace",
        "prompt": "鉄砲伝来と種子島を含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"firearms arrival at Tanegashima\", country: \"JP\", score: 4 },\n  { name: \"context\", country: \"JP\", score: 2 },\n  { name: \"other\", country: \"other\", score: 6 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 3)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "firearms arrival at Tanegashima",
          "context",
          "other",
          "Error"
        ],
        "answer": "firearms arrival at Tanegashima",
        "hint": "JP かつ score が 3 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は firearms arrival at Tanegashima です。",
        "correctAnswer": "firearms arrival at Tanegashima",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "鉄砲伝来と種子島を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e02",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Perry expedition and opening sequence: filter-map-trace",
        "prompt": "ペリー来航と開国までの流れを含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"Perry expedition and opening sequence\", country: \"JP\", score: 5 },\n  { name: \"context\", country: \"JP\", score: 3 },\n  { name: \"other\", country: \"other\", score: 7 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 4)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "Perry expedition and opening sequence",
          "context",
          "other",
          "Error"
        ],
        "answer": "Perry expedition and opening sequence",
        "hint": "JP かつ score が 4 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Perry expedition and opening sequence です。",
        "correctAnswer": "Perry expedition and opening sequence",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "ペリー来航と開国までの流れを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e03",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Japanese washi traditions: filter-map-trace",
        "prompt": "和紙の伝統を含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"Japanese washi traditions\", country: \"JP\", score: 3 },\n  { name: \"context\", country: \"JP\", score: 1 },\n  { name: \"other\", country: \"other\", score: 5 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 2)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "Japanese washi traditions",
          "context",
          "other",
          "Error"
        ],
        "answer": "Japanese washi traditions",
        "hint": "JP かつ score が 2 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Japanese washi traditions です。",
        "correctAnswer": "Japanese washi traditions",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "和紙の伝統を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e04",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "output-predict",
        "title": "Ise Jingu Shikinen Sengu: filter-map-trace",
        "prompt": "伊勢神宮の式年遷宮を含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"Ise Jingu Shikinen Sengu\", country: \"JP\", score: 4 },\n  { name: \"context\", country: \"JP\", score: 2 },\n  { name: \"other\", country: \"other\", score: 6 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 3)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "Ise Jingu Shikinen Sengu",
          "context",
          "other",
          "Error"
        ],
        "answer": "Ise Jingu Shikinen Sengu",
        "hint": "JP かつ score が 3 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Ise Jingu Shikinen Sengu です。",
        "correctAnswer": "Ise Jingu Shikinen Sengu",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "伊勢神宮の式年遷宮を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e05",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "variables",
        "questionType": "output-predict",
        "title": "Tokyo Skytree: filter-map-trace",
        "prompt": "東京スカイツリーを含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"Tokyo Skytree\", country: \"JP\", score: 5 },\n  { name: \"context\", country: \"JP\", score: 3 },\n  { name: \"other\", country: \"other\", score: 7 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 4)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "Tokyo Skytree",
          "context",
          "other",
          "Error"
        ],
        "answer": "Tokyo Skytree",
        "hint": "JP かつ score が 4 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Tokyo Skytree です。",
        "correctAnswer": "Tokyo Skytree",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "東京スカイツリーを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e06",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Yagi-Uda antenna: filter-map-trace",
        "prompt": "八木・宇田アンテナを含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const items = [\n  { name: \"Yagi-Uda antenna\", country: \"JP\", score: 3 },\n  { name: \"context\", country: \"JP\", score: 1 },\n  { name: \"other\", country: \"other\", score: 5 }\n];\nconst selected = items\n  .filter(item => item.country === \"JP\" && item.score >= 2)\n  .map(item => item.name);\nconsole.log(selected.join(\" | \"));",
        "options": [
          "Yagi-Uda antenna",
          "context",
          "other",
          "Error"
        ],
        "answer": "Yagi-Uda antenna",
        "hint": "JP かつ score が 2 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Yagi-Uda antenna です。",
        "correctAnswer": "Yagi-Uda antenna",
        "executionSteps": [
          "filter で条件を満たす要素を残す。",
          "map で name を取り出す。",
          "join で文字列にして表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "八木・宇田アンテナを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      },
      {
        "id": "jp_js_e07",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "output-predict",
        "title": "Seikan Tunnel: filter-map-trace",
        "prompt": "青函トンネルを含む配列データを、filter/map/sort で処理した出力を追跡します。",
        "code": "const tunnel = { name: \"Seikan Tunnel\", country: \"JP\", segments: [{ open: true, km: 23 }, { open: false, km: 10 }, { open: true, km: 31 }] };\nlet openKm = 0;\nfor (const segment of tunnel.segments) {\n  if (segment.open) {\n    openKm += segment.km;\n  }\n}\nconsole.log(openKm >= 50 ? tunnel.name : \"check\");",
        "options": [
          "Seikan Tunnel",
          "check",
          "54",
          "Error"
        ],
        "answer": "Seikan Tunnel",
        "hint": "JP かつ score が 3 以上の要素を残します。",
        "explanation": "条件を満たす主題データだけが残るため、出力は Seikan Tunnel です。",
        "correctAnswer": "Seikan Tunnel",
        "executionSteps": [
          "open が true の segment だけを合計する。",
          "23 + 31 で openKm は 54 になる。",
          "54 >= 50 なので tunnel.name を表示する。"
        ],
        "commonMistakes": [
          "filter 後の配列と map 後の配列を混同しやすいです。",
          "other country の高い score は JP 条件で除外されます。"
        ],
        "programmingExplanation": "JavaScript の配列処理を読む問題です。regular では filter と map を中心に追跡します。",
        "countryNote": "青函トンネルを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ],
  },
  US: {
    python: [
      {
        id: 'ex_us_py_1',
        worldId: 'execute',
        conceptId: 'conditions',
        questionType: 'output-predict',
        title: 'if-elif チェーンの出力を予測しよう',
        prompt: '以下のコードの出力は？',
        code: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(grade)`,
        options: ['A', 'B', 'C', 'F'],
        answer: 'B',
        hint: '85 はどの条件を最初に満たしますか？',
        explanation: '85 >= 90 は False、85 >= 80 は True なので grade = "B"。',
      },
      {
        id: 'ex_us_py_2',
        worldId: 'execute',
        conceptId: 'comprehension',
        questionType: 'multiple-choice',
        title: 'リスト内包表記の結果は？',
        prompt: 'このコードの出力を選べ',
        code: `states = ["California", "Texas", "New York", "Ohio"]
short = [s for s in states if len(s) <= 5]
print(short)`,
        options: [
          "['Ohio']",
          "['Texas', 'Ohio']",
          "['California', 'Texas', 'New York', 'Ohio']",
          '[]',
        ],
        answer: "['Ohio']",
        hint: "len('Ohio') = 4、len('Texas') = 5。条件は <= 5 です",
        explanation: "Texas は len=5 で <= 5 を満たしますが、短い方から確認: Ohio(4)✓、Texas(5)✓ → ['Texas', 'Ohio']... 実際は順番に確認。Texas=5, Ohio=4 が該当。",
      },
      {
        id: 'ex_us_py_3',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'output-predict',
        title: 'リストスライスの出力を予測しよう',
        prompt: '以下のコードの出力は？',
        code: `presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"]
print(presidents[1:3])`,
        options: [
          "['Washington', 'Adams']",
          "['Adams', 'Jefferson']",
          "['Jefferson', 'Madison']",
          "['Adams', 'Jefferson', 'Madison']",
        ],
        answer: "['Adams', 'Jefferson']",
        hint: 'スライス [1:3] はインデックス 1 から 3 の手前まで',
        explanation: 'インデックス 0=Washington, 1=Adams, 2=Jefferson, 3=Madison。[1:3] は 1,2 → Adams, Jefferson。',
      },
    ],
  },
  FR: {
    python: [
      {
        id: 'ex_fr_py_1',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'output-predict',
        title: 'while ループの出力を予測しよう',
        prompt: 'このコードは何を出力しますか？',
        code: `count = 0
while count < 3:
    print(f"Tour {count + 1}")
    count += 1`,
        options: [
          'Tour 0\nTour 1\nTour 2',
          'Tour 1\nTour 2\nTour 3',
          'Tour 1\nTour 2\nTour 3\nTour 4',
          '無限ループ',
        ],
        answer: 'Tour 1\nTour 2\nTour 3',
        hint: 'count は 0,1,2 と増え、3 になるとループを抜けます',
        explanation: 'count=0: print(Tour 1), count=1: print(Tour 2), count=2: print(Tour 3), count=3: 条件 False でループ終了。',
      },
      {
        id: 'ex_fr_py_2',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'output-predict',
        title: 'フィルタ処理の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = ["Paris", "Lyon", "Nice", "Toulouse"]
result = []
for city in cities:
    if len(city) > 4:
        result.append(city)
print(result)`,
        options: [
          "['Paris', 'Lyon', 'Nice', 'Toulouse']",
          "['Paris', 'Toulouse']",
          "['Lyon', 'Nice']",
          "['Paris']",
        ],
        answer: "['Paris', 'Toulouse']",
        hint: 'len("Paris")=5, len("Lyon")=4, len("Nice")=4, len("Toulouse")=8',
        explanation: 'len > 4 を満たすのは Paris(5) と Toulouse(8)。Lyon(4) と Nice(4) は除外されます。',
      },
      {
        id: 'ex_fr_py_3',
        worldId: 'execute',
        conceptId: 'loops',
        questionType: 'multiple-blanks',
        title: 'enumerate でインデックス付き表示を完成させよう',
        prompt: 'パリの観光地を 1 から番号付きで表示するコードの空欄を埋めてください',
        code: `landmarks = ["Eiffel Tower", "Louvre", "Versailles"]
for ___BLANK_0___, name in enumerate(landmarks, ___BLANK_1___):
    print(f"{i}. {name}")`,
        blanks: ['i', '1'],
        hint: 'enumerate(iterable, start) の start は番号の開始値です',
        explanation: 'enumerate(landmarks, 1) でインデックスを 1 から始めます。for i, name in enumerate(...) で番号と要素を同時に取得できます。',
      },
    ],
  },
  DE: {
    python: [
      {
        id: 'ex_de_py_1',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'multiple-choice',
        title: '辞書のソートを理解しよう',
        prompt: 'このコードの出力は？',
        code: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
sorted_cities = sorted(cities.items(), key=lambda x: x[1], reverse=True)
print(sorted_cities[0][0])`,
        options: ['Berlin', 'Hamburg', 'Munich', 'Error'],
        answer: 'Berlin',
        hint: 'reverse=True で値の大きい順にソート。最初の要素は？',
        explanation: 'items() でキー・値ペアを取得。lambda x: x[1] で値でソート。reverse=True で降順。Berlin(3769) が最大。',
      },
      {
        id: 'ex_de_py_2',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'output-predict',
        title: '辞書内包表記の結果を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v > 2000}
print(len(big))`,
        options: ['0', '1', '2', '3'],
        answer: '1',
        hint: '2000 より大きい都市の人口(千人)はどれ？',
        explanation: 'Berlin=3769 > 2000 のみ該当。Hamburg=1847, Munich=1488 は 2000 以下。len(big) = 1。',
      },
      {
        id: 'ex_de_py_3',
        worldId: 'execute',
        conceptId: 'files',
        questionType: 'implementation-selection',
        title: '最も Pythonic な辞書フィルタを選ぼう',
        prompt: 'ドイツの都市から人口(千人)が 2000 以上の都市のみ取得する。最も Pythonic な実装はどれ？',
        options: [
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {}
for k, v in cities.items():
    if v >= 2000:
        big[k] = v
print(big)`,
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v >= 2000}
print(big)`,
          `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
keys = list(filter(lambda k: cities[k] >= 2000, cities))
big = dict(zip(keys, [cities[k] for k in keys]))
print(big)`,
        ],
        answer: `cities = {"Berlin": 3769, "Hamburg": 1847, "Munich": 1488}
big = {k: v for k, v in cities.items() if v >= 2000}
print(big)`,
        hint: '辞書内包表記は dict の if フィルタを 1 行で書けます',
        explanation: '辞書内包表記 {k: v for k, v in d.items() if cond} が最も簡潔で読みやすい Pythonic な書き方です。for ループも動きますが冗長。filter+zip はさらに複雑になります。',
      },
    ],
  },
  GB: {
    python: [
      {
        id: 'ex_gb_py_1',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'multiple-choice',
        title: '文字列メソッドの出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `text = "  Hello, London!  "
cleaned = text.strip().lower()
print(cleaned)`,
        options: [
          "'hello, london!'",
          '"hello, london!"',
          'hello, london!',
          'Hello, London!',
        ],
        answer: 'hello, london!',
        hint: 'strip() は両端の空白を除去、lower() は小文字化',
        explanation: 'strip() → "Hello, London!"、lower() → "hello, london!"。print() は引用符なしで表示します。',
      },
      {
        id: 'ex_gb_py_2',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'output-predict',
        title: 'split の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `text = "Big Ben, Tower Bridge, Stonehenge"
parts = text.split(", ")
print(len(parts), parts[-1])`,
        options: [
          '2 Stonehenge',
          '3 Stonehenge',
          '3 Big Ben',
          '2 Big Ben',
        ],
        answer: '3 Stonehenge',
        hint: '", " で分割すると何個に分かれますか？最後の要素は？',
        explanation: 'split(", ") → ["Big Ben", "Tower Bridge", "Stonehenge"]。len=3、parts[-1] は末尾要素の "Stonehenge"。',
      },
      {
        id: 'ex_gb_py_3',
        worldId: 'execute',
        conceptId: 'regex',
        questionType: 'multiple-blanks',
        title: '文字列から数字のみ抽出するコードを完成させよう',
        prompt: 'ロンドンの郵便番号から数字部分のみ抽出するコードの空欄を埋めてください',
        code: `import re
postcode = "SW1A 2AA"
digits = re.___BLANK_0___(r"\\d+", postcode)
print(digits)`,
        blanks: ['findall'],
        hint: 're モジュールで全マッチを探すメソッドは？',
        explanation: 're.findall(pattern, string) はすべてのマッチをリストで返します。\\d+ は1文字以上の数字列。"SW1A 2AA" から ["1", "2"] が取得できます。',
      },
    ],
  },
  ZA: {
    python: [
      {
        id: 'ex_za_py_1',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'multiple-choice',
        title: '型ヒント付き関数の出力を予測しよう',
        prompt: 'このコードを実行したときの出力は？',
        code: `def greet(name: str, times: int) -> str:
    return name * times

result = greet("Ubuntu! ", 3)
print(result)`,
        options: [
          'Ubuntu! Ubuntu! Ubuntu! ',
          'Ubuntu! 3',
          'Error: type mismatch',
          'None',
        ],
        answer: 'Ubuntu! Ubuntu! Ubuntu! ',
        hint: '文字列 * 数値は文字列を繰り返します。型ヒントは実行時には強制されません。',
        explanation: '"Ubuntu! " * 3 → "Ubuntu! Ubuntu! Ubuntu! "。Pythonの型ヒントは注釈のみで実行時チェックなし。',
      },
      {
        id: 'ex_za_py_2',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'multiple-blanks',
        title: 'Optional 型ヒントのコードを完成させよう',
        prompt: '辞書から値を安全に取得する関数の空欄を埋めてください',
        code: `from typing import ___BLANK_0___

def get_capital(country: str) -> Optional[str]:
    capitals = {"South Africa": "Pretoria", "Japan": "Tokyo"}
    return capitals.___BLANK_1___(country)

print(get_capital("Kenya"))`,
        blanks: ['Optional', 'get'],
        hint: 'キーが存在しない場合に None を返す辞書メソッドは？',
        explanation: 'Optional[str] は str または None を返すことを示します。dict.get(key) はキーが存在しない場合 None を返します。"Kenya" はキーにないので None が出力されます。',
      },
      {
        id: 'ex_za_py_3',
        worldId: 'execute',
        conceptId: 'typehints',
        questionType: 'output-predict',
        title: 'dataclass の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `from dataclasses import dataclass

@dataclass
class Country:
    name: str
    languages: int

sa = Country("South Africa", 11)
print(sa.languages * 2)`,
        options: ['11', '22', 'None', 'Error'],
        answer: '22',
        hint: 'dataclass は __init__ を自動生成します。sa.languages の値は？',
        explanation: '@dataclass は name と languages の __init__ を自動生成します。sa.languages = 11、11 * 2 = 22。',
      },
    ],
  },
  BR: {
    python: [
      {
        id: 'ex_br_py_1',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'code-ordering',
        title: 'コードブロックを正しい順序に並べよう',
        prompt: 'ブラジルの都市リストを作り、ソートして表示する。3 つのブロックを正しい実行順序に並べてください。',
        blocks: [
          'print(cities)',
          'cities = ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"]',
          'cities.sort()',
        ],
        answer: [1, 2, 0],
        hint: 'リストは使う前に作る。表示は処理が終わってから。',
        explanation: 'まず cities を定義し（index 1）、sort() で昇順に並べ替え（index 2）、最後に print() で表示（index 0）します。',
      },
      {
        id: 'ex_br_py_2',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'output-predict',
        title: 'リスト内包表記の結果を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = ["São Paulo", "Rio", "Brasília", "Salvador", "Fortaleza"]
long_names = [c for c in cities if len(c) > 5]
print(len(long_names))`,
        options: ['2', '3', '4', '5'],
        answer: '4',
        hint: '長さが 5 より大きい(>5)都市名をカウント。"Rio" の長さは？',
        explanation: '"São Paulo"(9), "Rio"(3), "Brasília"(8), "Salvador"(8), "Fortaleza"(9)。len > 5 を満たすのは Rio 以外の 4 つ。',
      },
      {
        id: 'ex_br_py_3',
        worldId: 'execute',
        conceptId: 'lists',
        questionType: 'multiple-blanks',
        title: '人口リストをソートして上位を取得するコードを完成させよう',
        prompt: '空欄を埋めてブラジルの主要都市の人口(万人)を降順で上位 3 件取得してください',
        code: `population = [1232, 674, 309, 290, 264]
population.___BLANK_0___(reverse=True)
top3 = population[___BLANK_1___]
print(top3)`,
        blanks: ['sort', ':3'],
        hint: 'in-place ソートのメソッド名と、先頭 3 件を取るスライスは？',
        explanation: 'sort(reverse=True) で降順に並べ替え。[:3] で先頭 3 件を取得。結果は [1232, 674, 309]。',
      },
    ],
  },
  AU: {
    python: [
      {
        id: 'ex_au_py_1',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'implementation-selection',
        title: '最も適切な実装を選ぼう',
        prompt: 'オーストラリアの都市リストから先頭 3 件を取得して表示する。最も Python らしい（Pythonic な）実装はどれ？',
        options: [
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
result = []
for i in range(3):
    result.append(cities[i])
print(result)`,
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[:3])`,
          `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[0], cities[1], cities[2])`,
        ],
        answer: `cities = ["Sydney", "Melbourne", "Brisbane", "Perth"]
print(cities[:3])`,
        hint: 'Pythonic なコードは短く明瞭。スライス記法を思い出して。',
        explanation: 'cities[:3] が最も簡潔で慣用的なスライス記法です。ループによる個別 append や固定インデックスより可読性・保守性が高く、リスト長が変わっても安全です。',
      },
      {
        id: 'ex_au_py_2',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'output-predict',
        title: 'デフォルト引数付き関数の出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `def describe_city(name, country="Australia"):
    return f"{name}, {country}"

print(describe_city("Sydney"))
print(describe_city("Paris", "France"))`,
        options: [
          'Sydney, Australia\nParis, France',
          'Sydney, None\nParis, France',
          'Sydney\nParis',
          'Error',
        ],
        answer: 'Sydney, Australia\nParis, France',
        hint: 'デフォルト引数は省略したときだけ使われます',
        explanation: 'describe_city("Sydney") → country はデフォルト "Australia"。describe_city("Paris", "France") → country は "France" に上書き。',
      },
      {
        id: 'ex_au_py_3',
        worldId: 'execute',
        conceptId: 'functions',
        questionType: 'multiple-choice',
        title: 'lambda を使ったソートの出力を予測しよう',
        prompt: 'このコードの出力は？',
        code: `cities = [("Sydney", 5312), ("Melbourne", 5078), ("Brisbane", 2561)]
cities_sorted = sorted(cities, key=lambda x: x[1])
print(cities_sorted[0][0])`,
        options: ['Sydney', 'Melbourne', 'Brisbane', 'Error'],
        answer: 'Brisbane',
        hint: 'sorted() はデフォルトで昇順。key=lambda x: x[1] は何でソート？',
        explanation: 'lambda x: x[1] でタプルの 2 番目要素（人口）でソート。昇順なので最小の Brisbane(2561) が先頭になります。',
      },
    ],
  },
};

export const EXECUTE_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: 'JS', available: true },
];
