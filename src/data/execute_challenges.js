import { JP_JAVA_EXECUTE } from './jp_java_questions.js';
import { US_JAVA_EXECUTE } from './us_java_questions.js';
import { FR_JAVA_EXECUTE, FR_JS_EXECUTE, FR_PY_EXECUTE } from './france_questions.js';
import { BR_JAVA_EXECUTE, BR_JS_EXECUTE, BR_PY_EXECUTE } from './brazil_questions.js';
import { AU_JAVA_EXECUTE, AU_JS_EXECUTE, AU_PY_EXECUTE } from './australia_questions.js';
import { EG_JAVA_EXECUTE, EG_JS_EXECUTE, EG_PY_EXECUTE } from './egypt_questions.js';
import { IN_JAVA_EXECUTE, IN_JS_EXECUTE, IN_PY_EXECUTE } from './india_questions.js';
import { RU_JAVA_EXECUTE, RU_JS_EXECUTE, RU_PY_EXECUTE } from './russia_questions.js';
import { CN_JAVA_EXECUTE, CN_JS_EXECUTE, CN_PY_EXECUTE } from './china_questions.js';
import { DE_JAVA_EXECUTE, DE_JS_EXECUTE, DE_PY_EXECUTE } from './germany_questions.js';
import { GB_JAVA_EXECUTE, GB_JS_EXECUTE, GB_PY_EXECUTE } from './united_kingdom_questions.js';

export const EXECUTE_CHALLENGES = {
  "JP": {
    "python": [
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 3 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 4 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 2 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 3 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 2 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 3 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "松尾芭蕉とおくのほそ道を、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ],
    "javascript": [
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 3 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 4 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 2 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 3 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 4 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"JP\" と一致する」かつ「score が 2 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
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
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "青函トンネルを、コード内のデータとして扱います。事実そのものは問題文とデータに示し、解答では処理の読み取りを中心にします。"
      }
    ]
  },
  "US": {
    "python": [
      {
        "id": "ex_us_py_1",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Grand Canyon geologic/site data: EXECUTE",
        "prompt": "Grand Canyon geologic/site data のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Grand Canyon geologic/site data\", \"country\": \"US\", \"kind\": \"target\", \"score\": 5},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 3},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 8}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 5:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "Grand Canyon geologic/site data",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Grand Canyon geologic/site data",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Grand Canyon geologic/site data です。",
        "correctAnswer": "Grand Canyon geologic/site data",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 5 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Grand Canyon geologic/site data は Grand Canyon National Park（UNESCO World Heritage Centre） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Grand Canyon National Park",
            "organization": "UNESCO World Heritage Centre",
            "url": "https://whc.unesco.org/en/list/75/"
          }
        ],
        "factIds": [
          "fact_us_grand_canyon_site"
        ],
        "entityKeys": [
          "us:grand_canyon_site"
        ]
      },
      {
        "id": "ex_us_py_2",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Great Lakes basin data: EXECUTE",
        "prompt": "Great Lakes basin data のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Great Lakes basin data\", \"country\": \"US\", \"kind\": \"target\", \"score\": 6},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 4},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 9}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 6:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "Great Lakes basin data",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Great Lakes basin data",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Great Lakes basin data です。",
        "correctAnswer": "Great Lakes basin data",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 6 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Great Lakes basin data は Great Lakes（U.S. Environmental Protection Agency） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Great Lakes",
            "organization": "U.S. Environmental Protection Agency",
            "url": "https://www.epa.gov/greatlakes"
          }
        ],
        "factIds": [
          "fact_us_great_lakes_basin"
        ],
        "entityKeys": [
          "us:great_lakes_basin"
        ]
      },
      {
        "id": "ex_us_py_3",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "Louisiana Purchase timeline: EXECUTE",
        "prompt": "Louisiana Purchase timeline のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Louisiana Purchase timeline\", \"country\": \"US\", \"kind\": \"target\", \"score\": 7},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 5},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 10}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 7:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "Louisiana Purchase timeline",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Louisiana Purchase timeline",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Louisiana Purchase timeline です。",
        "correctAnswer": "Louisiana Purchase timeline",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 7 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Louisiana Purchase timeline は Louisiana Purchase（Office of the Historian, U.S. Department of State） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Louisiana Purchase",
            "organization": "Office of the Historian, U.S. Department of State",
            "url": "https://history.state.gov/milestones/1801-1829/louisiana-purchase"
          }
        ],
        "factIds": [
          "fact_us_louisiana_purchase_timeline"
        ],
        "entityKeys": [
          "us:louisiana_purchase_timeline"
        ]
      },
      {
        "id": "ex_us_py_4",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "transcontinental railroad/Promontory Summit: EXECUTE",
        "prompt": "transcontinental railroad/Promontory Summit のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"transcontinental railroad/Promontory Summit\", \"country\": \"US\", \"kind\": \"target\", \"score\": 8},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 6},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 11}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 8:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "transcontinental railroad/Promontory Summit",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "transcontinental railroad/Promontory Summit",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は transcontinental railroad/Promontory Summit です。",
        "correctAnswer": "transcontinental railroad/Promontory Summit",
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
        "countryNote": "transcontinental railroad/Promontory Summit は Golden Spike history（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Golden Spike history",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/gosp/learn/historyculture/index.htm"
          }
        ],
        "factIds": [
          "fact_us_promontory_summit"
        ],
        "entityKeys": [
          "us:promontory_summit"
        ]
      },
      {
        "id": "ex_us_py_5",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "jazz origins/New Orleans: EXECUTE",
        "prompt": "jazz origins/New Orleans のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"jazz origins/New Orleans\", \"country\": \"US\", \"kind\": \"target\", \"score\": 9},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 7},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 12}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 9:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "jazz origins/New Orleans",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "jazz origins/New Orleans",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は jazz origins/New Orleans です。",
        "correctAnswer": "jazz origins/New Orleans",
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
        "countryNote": "jazz origins/New Orleans は New Orleans Jazz history（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "New Orleans Jazz history",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/jazz/learn/historyculture/index.htm"
          }
        ],
        "factIds": [
          "fact_us_new_orleans_jazz"
        ],
        "entityKeys": [
          "us:new_orleans_jazz"
        ]
      },
      {
        "id": "ex_us_py_6",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "variables",
        "questionType": "output-predict",
        "title": "Wright Flyer 1903 flight data: EXECUTE",
        "prompt": "Wright Flyer 1903 flight data のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Wright Flyer 1903 flight data\", \"country\": \"US\", \"kind\": \"target\", \"score\": 10},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 8},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 13}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 10:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "Wright Flyer 1903 flight data",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Wright Flyer 1903 flight data",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Wright Flyer 1903 flight data です。",
        "correctAnswer": "Wright Flyer 1903 flight data",
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
        "countryNote": "Wright Flyer 1903 flight data は The First Flight（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "The First Flight",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm"
          }
        ],
        "factIds": [
          "fact_us_wright_flyer_1903"
        ],
        "entityKeys": [
          "us:wright_flyer_1903"
        ]
      },
      {
        "id": "ex_us_py_7",
        "worldId": "execute",
        "languageId": "python",
        "conceptId": "conditions",
        "questionType": "output-predict",
        "title": "Hoover Dam engineering data: EXECUTE",
        "prompt": "Hoover Dam engineering data のデータを条件で絞り、出力を追跡します。",
        "code": "items = [\n    {\"name\": \"Hoover Dam engineering data\", \"country\": \"US\", \"kind\": \"target\", \"score\": 11},\n    {\"name\": \"context sample\", \"country\": \"US\", \"kind\": \"context\", \"score\": 9},\n    {\"name\": \"outside sample\", \"country\": \"other\", \"kind\": \"target\", \"score\": 14}\n]\nselected = []\nfor item in items:\n    if item[\"country\"] == \"US\" and item[\"kind\"] == \"target\" and item[\"score\"] >= 11:\n        selected.append(item)\nselected.sort(key=lambda item: item[\"score\"], reverse=True)\nprint(selected[0][\"name\"])",
        "options": [
          "Hoover Dam engineering data",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Hoover Dam engineering data",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Hoover Dam engineering data です。",
        "correctAnswer": "Hoover Dam engineering data",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。この問題では「country が \"US\" と一致する」かつ「score が 11 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Hoover Dam engineering data は Hoover Dam FAQ（Bureau of Reclamation） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Hoover Dam FAQ",
            "organization": "Bureau of Reclamation",
            "url": "https://www.usbr.gov/lc/hooverdam/faqs/damfaqs.html"
          }
        ],
        "factIds": [
          "fact_us_hoover_dam_engineering"
        ],
        "entityKeys": [
          "us:hoover_dam_engineering"
        ]
      }
    ],
    "javascript": [
      {
        "id": "ex_us_js_1",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Alaska Purchase timeline: EXECUTE",
        "prompt": "Alaska Purchase timeline のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"Alaska Purchase timeline\", country: \"US\", kind: \"target\", score: 5 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 3 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 8 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 5)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "Alaska Purchase timeline",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Alaska Purchase timeline",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Alaska Purchase timeline です。",
        "correctAnswer": "Alaska Purchase timeline",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 5 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Alaska Purchase timeline は Alaska Purchase（Office of the Historian, U.S. Department of State） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Alaska Purchase",
            "organization": "Office of the Historian, U.S. Department of State",
            "url": "https://history.state.gov/milestones/1866-1898/alaska-purchase"
          }
        ],
        "factIds": [
          "fact_us_alaska_purchase_timeline"
        ],
        "entityKeys": [
          "us:alaska_purchase_timeline"
        ]
      },
      {
        "id": "ex_us_js_2",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Lewis and Clark expedition route: EXECUTE",
        "prompt": "Lewis and Clark expedition route のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"Lewis and Clark expedition route\", country: \"US\", kind: \"target\", score: 6 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 4 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 9 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 6)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "Lewis and Clark expedition route",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Lewis and Clark expedition route",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Lewis and Clark expedition route です。",
        "correctAnswer": "Lewis and Clark expedition route",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 6 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Lewis and Clark expedition route は Lewis and Clark Trail（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Lewis and Clark Trail",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/lecl/index.htm"
          }
        ],
        "factIds": [
          "fact_us_lewis_clark_route"
        ],
        "entityKeys": [
          "us:lewis_clark_route"
        ]
      },
      {
        "id": "ex_us_js_3",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "San Antonio Missions: EXECUTE",
        "prompt": "San Antonio Missions のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"San Antonio Missions\", country: \"US\", kind: \"target\", score: 7 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 5 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 10 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 7)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "San Antonio Missions",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "San Antonio Missions",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は San Antonio Missions です。",
        "correctAnswer": "San Antonio Missions",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 7 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "San Antonio Missions は San Antonio Missions（UNESCO World Heritage Centre） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "San Antonio Missions",
            "organization": "UNESCO World Heritage Centre",
            "url": "https://whc.unesco.org/en/list/1466/"
          }
        ],
        "factIds": [
          "fact_us_san_antonio_missions"
        ],
        "entityKeys": [
          "us:san_antonio_missions"
        ]
      },
      {
        "id": "ex_us_js_4",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "blues music/Beale Street context: EXECUTE",
        "prompt": "blues music/Beale Street context のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"blues music/Beale Street context\", country: \"US\", kind: \"target\", score: 8 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 6 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 11 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 8)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "blues music/Beale Street context",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "blues music/Beale Street context",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は blues music/Beale Street context です。",
        "correctAnswer": "blues music/Beale Street context",
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
        "countryNote": "blues music/Beale Street context は Beale Street Historic District（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Beale Street Historic District",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/places/beale-street-historic-district.htm"
          }
        ],
        "factIds": [
          "fact_us_beale_street_blues"
        ],
        "entityKeys": [
          "us:beale_street_blues"
        ]
      },
      {
        "id": "ex_us_js_5",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "objects",
        "questionType": "output-predict",
        "title": "Voyager 1 Pale Blue Dot: EXECUTE",
        "prompt": "Voyager 1 Pale Blue Dot のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"Voyager 1 Pale Blue Dot\", country: \"US\", kind: \"target\", score: 9 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 7 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 12 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 9)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "Voyager 1 Pale Blue Dot",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Voyager 1 Pale Blue Dot",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Voyager 1 Pale Blue Dot です。",
        "correctAnswer": "Voyager 1 Pale Blue Dot",
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
        "countryNote": "Voyager 1 Pale Blue Dot は Voyager（NASA Science） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Voyager",
            "organization": "NASA Science",
            "url": "https://science.nasa.gov/mission/voyager/"
          }
        ],
        "factIds": [
          "fact_us_voyager_pale_blue_dot"
        ],
        "entityKeys": [
          "us:voyager_pale_blue_dot"
        ]
      },
      {
        "id": "ex_us_js_6",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "GPS system segments: EXECUTE",
        "prompt": "GPS system segments のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"GPS system segments\", country: \"US\", kind: \"target\", score: 10 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 8 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 13 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 10)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "GPS system segments",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "GPS system segments",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は GPS system segments です。",
        "correctAnswer": "GPS system segments",
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
        "countryNote": "GPS system segments は GPS system segments（GPS.gov） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "GPS system segments",
            "organization": "GPS.gov",
            "url": "https://www.gps.gov/systems/gps/"
          }
        ],
        "factIds": [
          "fact_us_gps_segments"
        ],
        "entityKeys": [
          "us:gps_segments"
        ]
      },
      {
        "id": "ex_us_js_7",
        "worldId": "execute",
        "languageId": "javascript",
        "conceptId": "arrays",
        "questionType": "output-predict",
        "title": "Brooklyn Bridge opening/structure data: EXECUTE",
        "prompt": "Brooklyn Bridge opening/structure data のデータを条件で絞り、出力を追跡します。",
        "code": "const items = [\n  { name: \"Brooklyn Bridge opening/structure data\", country: \"US\", kind: \"target\", score: 11 },\n  { name: \"context sample\", country: \"US\", kind: \"context\", score: 9 },\n  { name: \"outside sample\", country: \"other\", kind: \"target\", score: 14 }\n];\nconst selected = items\n  .filter(item => item.country === \"US\" && item.kind === \"target\" && item.score >= 11)\n  .sort((a, b) => b.score - a.score);\nconsole.log(selected[0].name);",
        "options": [
          "Brooklyn Bridge opening/structure data",
          "context sample",
          "outside sample",
          "Error"
        ],
        "answer": "Brooklyn Bridge opening/structure data",
        "hint": "country、kind/tag、score の条件を上から順に確認します。",
        "explanation": "条件をすべて満たす対象だけが残るため、出力は Brooklyn Bridge opening/structure data です。",
        "correctAnswer": "Brooklyn Bridge opening/structure data",
        "executionSteps": [
          "配列/リストの各要素を確認する。",
          "USかつ対象条件を満たす要素だけ残す。",
          "必要なら並べ替え、最後に出力する値を読む。"
        ],
        "commonMistakes": [
          "scoreだけを見ると他国やcontextデータを選んでしまいます。",
          "出力はデータ全体ではなく、最後に組み立てたnameまたはlabelです。"
        ],
        "programmingExplanation": "この問題はコードの実行結果を予測する問題です。filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。この問題では「country が \"US\" と一致する」かつ「score が 11 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。",
        "countryNote": "Brooklyn Bridge opening/structure data は Brooklyn Bridge（National Park Service） をもとにした題材です。",
        "sourceRefs": [
          {
            "title": "Brooklyn Bridge",
            "organization": "National Park Service",
            "url": "https://www.nps.gov/places/brooklyn-bridge.htm"
          }
        ],
        "factIds": [
          "fact_us_brooklyn_bridge_structure"
        ],
        "entityKeys": [
          "us:brooklyn_bridge_structure"
        ]
      }
    ]
  },
  "FR": {
    "python": [
      {
        "id": "ex_fr_py_1",
        "worldId": "execute",
        "conceptId": "loops",
        "questionType": "output-predict",
        "title": "while ループの出力を予測しよう",
        "prompt": "このコードは何を出力しますか？",
        "code": "count = 0\nwhile count < 3:\n    print(f\"Tour {count + 1}\")\n    count += 1",
        "options": [
          "Tour 0\nTour 1\nTour 2",
          "Tour 1\nTour 2\nTour 3",
          "Tour 1\nTour 2\nTour 3\nTour 4",
          "無限ループ"
        ],
        "answer": "Tour 1\nTour 2\nTour 3",
        "hint": "count は 0,1,2 と増え、3 になるとループを抜けます",
        "explanation": "count=0: print(Tour 1), count=1: print(Tour 2), count=2: print(Tour 3), count=3: 条件 False でループ終了。"
      },
      {
        "id": "ex_fr_py_2",
        "worldId": "execute",
        "conceptId": "loops",
        "questionType": "output-predict",
        "title": "フィルタ処理の出力を予測しよう",
        "prompt": "このコードの出力は？",
        "code": "cities = [\"Paris\", \"Lyon\", \"Nice\", \"Toulouse\"]\nresult = []\nfor city in cities:\n    if len(city) > 4:\n        result.append(city)\nprint(result)",
        "options": [
          "['Paris', 'Lyon', 'Nice', 'Toulouse']",
          "['Paris', 'Toulouse']",
          "['Lyon', 'Nice']",
          "['Paris']"
        ],
        "answer": "['Paris', 'Toulouse']",
        "hint": "len(\"Paris\")=5, len(\"Lyon\")=4, len(\"Nice\")=4, len(\"Toulouse\")=8",
        "explanation": "len > 4 を満たすのは Paris(5) と Toulouse(8)。Lyon(4) と Nice(4) は除外されます。"
      },
      {
        "id": "ex_fr_py_3",
        "worldId": "execute",
        "conceptId": "loops",
        "questionType": "multiple-blanks",
        "title": "enumerate でインデックス付き表示を完成させよう",
        "prompt": "パリの観光地を 1 から番号付きで表示するコードの空欄を埋めてください",
        "code": "landmarks = [\"Eiffel Tower\", \"Louvre\", \"Versailles\"]\nfor ___BLANK_0___, name in enumerate(landmarks, ___BLANK_1___):\n    print(f\"{i}. {name}\")",
        "blanks": [
          "i",
          "1"
        ],
        "hint": "enumerate(iterable, start) の start は番号の開始値です",
        "explanation": "enumerate(landmarks, 1) でインデックスを 1 から始めます。for i, name in enumerate(...) で番号と要素を同時に取得できます。"
      }
    ]
  },
  "ZA": {
    "python": [
      {
        "id": "ex_za_py_1",
        "worldId": "execute",
        "conceptId": "typehints",
        "questionType": "multiple-choice",
        "title": "型ヒント付き関数の出力を予測しよう",
        "prompt": "このコードを実行したときの出力は？",
        "code": "def greet(name: str, times: int) -> str:\n    return name * times\n\nresult = greet(\"Ubuntu! \", 3)\nprint(result)",
        "options": [
          "Ubuntu! Ubuntu! Ubuntu! ",
          "Ubuntu! 3",
          "Error: type mismatch",
          "None"
        ],
        "answer": "Ubuntu! Ubuntu! Ubuntu! ",
        "hint": "文字列 * 数値は文字列を繰り返します。型ヒントは実行時には強制されません。",
        "explanation": "\"Ubuntu! \" * 3 → \"Ubuntu! Ubuntu! Ubuntu! \"。Pythonの型ヒントは注釈のみで実行時チェックなし。"
      },
      {
        "id": "ex_za_py_2",
        "worldId": "execute",
        "conceptId": "typehints",
        "questionType": "multiple-blanks",
        "title": "Optional 型ヒントのコードを完成させよう",
        "prompt": "辞書から値を安全に取得する関数の空欄を埋めてください",
        "code": "from typing import ___BLANK_0___\n\ndef get_capital(country: str) -> Optional[str]:\n    capitals = {\"South Africa\": \"Pretoria\", \"Japan\": \"Tokyo\"}\n    return capitals.___BLANK_1___(country)\n\nprint(get_capital(\"Kenya\"))",
        "blanks": [
          "Optional",
          "get"
        ],
        "hint": "キーが存在しない場合に None を返す辞書メソッドは？",
        "explanation": "Optional[str] は str または None を返すことを示します。dict.get(key) はキーが存在しない場合 None を返します。\"Kenya\" はキーにないので None が出力されます。"
      },
      {
        "id": "ex_za_py_3",
        "worldId": "execute",
        "conceptId": "typehints",
        "questionType": "output-predict",
        "title": "dataclass の出力を予測しよう",
        "prompt": "このコードの出力は？",
        "code": "from dataclasses import dataclass\n\n@dataclass\nclass Country:\n    name: str\n    languages: int\n\nsa = Country(\"South Africa\", 11)\nprint(sa.languages * 2)",
        "options": [
          "11",
          "22",
          "None",
          "Error"
        ],
        "answer": "22",
        "hint": "dataclass は __init__ を自動生成します。sa.languages の値は？",
        "explanation": "@dataclass は name と languages の __init__ を自動生成します。sa.languages = 11、11 * 2 = 22。"
      }
    ]
  },
  "BR": {
    "python": [
      {
        "id": "ex_br_py_1",
        "worldId": "execute",
        "conceptId": "lists",
        "questionType": "code-ordering",
        "title": "コードブロックを正しい順序に並べよう",
        "prompt": "ブラジルの都市リストを作り、ソートして表示する。3 つのブロックを正しい実行順序に並べてください。",
        "blocks": [
          "print(cities)",
          "cities = [\"São Paulo\", \"Rio de Janeiro\", \"Brasília\", \"Salvador\"]",
          "cities.sort()"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "リストは使う前に作る。表示は処理が終わってから。",
        "explanation": "まず cities を定義し（index 1）、sort() で昇順に並べ替え（index 2）、最後に print() で表示（index 0）します。"
      },
      {
        "id": "ex_br_py_2",
        "worldId": "execute",
        "conceptId": "lists",
        "questionType": "output-predict",
        "title": "リスト内包表記の結果を予測しよう",
        "prompt": "このコードの出力は？",
        "code": "cities = [\"São Paulo\", \"Rio\", \"Brasília\", \"Salvador\", \"Fortaleza\"]\nlong_names = [c for c in cities if len(c) > 5]\nprint(len(long_names))",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "4",
        "hint": "長さが 5 より大きい(>5)都市名をカウント。\"Rio\" の長さは？",
        "explanation": "\"São Paulo\"(9), \"Rio\"(3), \"Brasília\"(8), \"Salvador\"(8), \"Fortaleza\"(9)。len > 5 を満たすのは Rio 以外の 4 つ。"
      },
      {
        "id": "ex_br_py_3",
        "worldId": "execute",
        "conceptId": "lists",
        "questionType": "multiple-blanks",
        "title": "人口リストをソートして上位を取得するコードを完成させよう",
        "prompt": "空欄を埋めてブラジルの主要都市の人口(万人)を降順で上位 3 件取得してください",
        "code": "population = [1232, 674, 309, 290, 264]\npopulation.___BLANK_0___(reverse=True)\ntop3 = population[___BLANK_1___]\nprint(top3)",
        "blanks": [
          "sort",
          ":3"
        ],
        "hint": "in-place ソートのメソッド名と、先頭 3 件を取るスライスは？",
        "explanation": "sort(reverse=True) で降順に並べ替え。[:3] で先頭 3 件を取得。結果は [1232, 674, 309]。"
      }
    ]
  }
};

if (EXECUTE_CHALLENGES.JP) EXECUTE_CHALLENGES.JP.java = JP_JAVA_EXECUTE;
if (EXECUTE_CHALLENGES.US) EXECUTE_CHALLENGES.US.java = US_JAVA_EXECUTE;
if (EXECUTE_CHALLENGES.FR) {
  EXECUTE_CHALLENGES.FR.python = FR_PY_EXECUTE;
  EXECUTE_CHALLENGES.FR.javascript = FR_JS_EXECUTE;
  EXECUTE_CHALLENGES.FR.java = FR_JAVA_EXECUTE;
}
if (EXECUTE_CHALLENGES.BR) {
  EXECUTE_CHALLENGES.BR.python = BR_PY_EXECUTE;
  EXECUTE_CHALLENGES.BR.javascript = BR_JS_EXECUTE;
  EXECUTE_CHALLENGES.BR.java = BR_JAVA_EXECUTE;
}
EXECUTE_CHALLENGES.AU = {
  python: AU_PY_EXECUTE,
  javascript: AU_JS_EXECUTE,
  java: AU_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.EG = {
  python: EG_PY_EXECUTE,
  javascript: EG_JS_EXECUTE,
  java: EG_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.IN = {
  python: IN_PY_EXECUTE,
  javascript: IN_JS_EXECUTE,
  java: IN_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.RU = {
  python: RU_PY_EXECUTE,
  javascript: RU_JS_EXECUTE,
  java: RU_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.CN = {
  python: CN_PY_EXECUTE,
  javascript: CN_JS_EXECUTE,
  java: CN_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.DE = {
  python: DE_PY_EXECUTE,
  javascript: DE_JS_EXECUTE,
  java: DE_JAVA_EXECUTE,
};
EXECUTE_CHALLENGES.GB = {
  python: GB_PY_EXECUTE,
  javascript: GB_JS_EXECUTE,
  java: GB_JAVA_EXECUTE,
};

export const EXECUTE_LANGUAGES = [
  { id: 'python', name: 'Python', emoji: '🐍', available: true },
  { id: 'javascript', name: 'JavaScript', emoji: 'JS', available: true },
  { id: 'java', name: 'JAVA', emoji: 'JV', available: true },
];
