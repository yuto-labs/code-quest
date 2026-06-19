export const FACT_STATUS = Object.freeze({
  VERIFIED: 'verified',
  TRADITIONAL: 'traditional',
  DISPUTED: 'disputed',
  AVOID: 'avoid',
});

export const COUNTRY_FACTS = [
  {
    "factId": "fact_jp_py_d01",
    "countryId": "JP",
    "category": "politics",
    "entityKeys": [
      "jp:jp_py_d01"
    ],
    "aliases": [
      "Emperor constitutional role",
      "jp_py_d01"
    ],
    "statement": "Emperor constitutional role をコード内データとして使い、dict-access を確認します。",
    "detail": "Emperor constitutional role を dict-access のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "天皇の憲法上の地位",
    "summaryJa": "日本国憲法では、天皇は日本国と日本国民統合の象徴とされています。",
    "detailJa": "日本国憲法は、天皇を「日本国の象徴」であり「日本国民統合の象徴」と位置づけています。天皇は国政に関する権能を持たず、国事に関する行為は内閣の助言と承認に基づいて行われます。制度上の役割を、政治権力ではなく象徴的な地位として区別して理解することが大切です。",
    "keyPointsJa": [
      "日本国と日本国民統合の象徴",
      "国政に関する権能を持たない",
      "国事行為には内閣の助言と承認が必要"
    ]
  },
  {
    "factId": "fact_jp_py_d02",
    "countryId": "JP",
    "category": "politics",
    "entityKeys": [
      "jp:jp_py_d02"
    ],
    "aliases": [
      "National Diet two chambers",
      "jp_py_d02"
    ],
    "statement": "National Diet two chambers をコード内データとして使い、list-len を確認します。",
    "detail": "National Diet two chambers を list-len のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "国会の二院制",
    "summaryJa": "日本の国会は衆議院と参議院の二院で構成されます。",
    "detailJa": "",
    "keyPointsJa": [
      "衆議院と参議院で構成",
      "法律や予算などを審議する国の議会"
    ]
  },
  {
    "factId": "fact_jp_py_d03",
    "countryId": "JP",
    "category": "nobel",
    "entityKeys": [
      "jp:jp_py_d03"
    ],
    "aliases": [
      "Hideki Yukawa Nobel Prize",
      "jp_py_d03"
    ],
    "statement": "Hideki Yukawa Nobel Prize をコード内データとして使い、tuple-unpack を確認します。",
    "detail": "Hideki Yukawa Nobel Prize を tuple-unpack のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.nobelprize.org/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "湯川秀樹とノーベル賞",
    "summaryJa": "湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "日本人初のノーベル賞受賞者",
      "理論物理学の業績で知られる"
    ]
  },
  {
    "factId": "fact_jp_py_d04",
    "countryId": "JP",
    "category": "national-symbol",
    "entityKeys": [
      "jp:jp_py_d04"
    ],
    "aliases": [
      "Nisshoki/Hinomaru",
      "jp_py_d04"
    ],
    "statement": "Nisshoki/Hinomaru をコード内データとして使い、string-equality を確認します。",
    "detail": "Nisshoki/Hinomaru を string-equality のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日章旗・日の丸",
    "summaryJa": "日章旗は一般に「日の丸」と呼ばれる日本の国旗です。",
    "detailJa": "",
    "keyPointsJa": [
      "白地に赤い円の旗",
      "日章旗は日の丸の正式名称"
    ]
  },
  {
    "factId": "fact_jp_py_d05",
    "countryId": "JP",
    "category": "geography",
    "entityKeys": [
      "jp:jp_py_d05"
    ],
    "aliases": [
      "47 prefectures",
      "jp_py_d05"
    ],
    "statement": "47 prefectures をコード内データとして使い、numeric-comparison を確認します。",
    "detail": "47 prefectures を numeric-comparison のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "47都道府県",
    "summaryJa": "日本は47の都道府県に分かれています。",
    "detailJa": "",
    "keyPointsJa": [
      "都・道・府・県を合わせて47",
      "地域データの分類単位になる"
    ]
  },
  {
    "factId": "fact_jp_py_d06",
    "countryId": "JP",
    "category": "national-symbol",
    "entityKeys": [
      "jp:jp_py_d06"
    ],
    "aliases": [
      "one-yen coin",
      "jp_py_d06"
    ],
    "statement": "one-yen coin をコード内データとして使い、numeric-type を確認します。",
    "detail": "one-yen coin を numeric-type のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "一円硬貨",
    "summaryJa": "一円硬貨は額面が1円の日本の硬貨です。",
    "detailJa": "",
    "keyPointsJa": [
      "最小額面の硬貨",
      "金額表示では数値として扱える"
    ]
  },
  {
    "factId": "fact_jp_py_d07",
    "countryId": "JP",
    "category": "industry-transport",
    "entityKeys": [
      "jp:jp_py_d07"
    ],
    "aliases": [
      "Tokaido Shinkansen 1964",
      "jp_py_d07"
    ],
    "statement": "Tokaido Shinkansen 1964 をコード内データとして使い、f-string を確認します。",
    "detail": "Tokaido Shinkansen 1964 を f-string のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.mlit.go.jp/en/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "東海道新幹線",
    "summaryJa": "東海道新幹線は1964年に開業した日本の高速鉄道路線です。",
    "detailJa": "",
    "keyPointsJa": [
      "1964年開業",
      "東京と大阪方面を結ぶ主要路線"
    ]
  },
  {
    "factId": "fact_jp_py_d08",
    "countryId": "JP",
    "category": "invention-science",
    "entityKeys": [
      "jp:jp_py_d08"
    ],
    "aliases": [
      "QR Code",
      "jp_py_d08"
    ],
    "statement": "QR Code をコード内データとして使い、string-index-or-slice を確認します。",
    "detail": "QR Code を string-index-or-slice のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.qrcode.com/en/history/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "QRコード",
    "summaryJa": "QRコードは日本で開発された二次元コードです。",
    "detailJa": "",
    "keyPointsJa": [
      "二次元コードの一種",
      "文字列やURLなどを表せる"
    ]
  },
  {
    "factId": "fact_jp_py_d09",
    "countryId": "JP",
    "category": "world-heritage",
    "entityKeys": [
      "jp:jp_py_d09"
    ],
    "aliases": [
      "Horyu-ji World Heritage",
      "jp_py_d09"
    ],
    "statement": "Horyu-ji World Heritage をコード内データとして使い、list-index を確認します。",
    "detail": "Horyu-ji World Heritage を list-index のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "法隆寺地域の仏教建造物",
    "summaryJa": "法隆寺地域の仏教建造物は日本の世界遺産として登録されています。",
    "detailJa": "",
    "keyPointsJa": [
      "日本の世界遺産",
      "古い木造建築群として知られる"
    ]
  },
  {
    "factId": "fact_jp_py_d10",
    "countryId": "JP",
    "category": "traditional-culture",
    "entityKeys": [
      "jp:jp_py_d10"
    ],
    "aliases": [
      "sakura as cultural symbol, not statutory national flower",
      "jp_py_d10"
    ],
    "statement": "sakura as cultural symbol, not statutory national flower（伝承・文化的関連として扱い、断定しません） をコード内データとして使い、membership を確認します。",
    "detail": "sakura as cultural symbol, not statutory national flower を membership のコード課題で扱う。",
    "factStatus": "traditional",
    "sourceRefs": [],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "桜の文化的象徴性",
    "summaryJa": "桜は日本文化で親しまれる花ですが、法定の国花とは断定されません。",
    "detailJa": "",
    "keyPointsJa": [
      "文化的象徴として親しまれる",
      "法定の国花とは区別する"
    ]
  },
  {
    "factId": "fact_jp_py_e01",
    "countryId": "JP",
    "category": "world-heritage",
    "entityKeys": [
      "jp:jp_py_e01"
    ],
    "aliases": [
      "Yakushima World Heritage criteria/context",
      "jp_py_e01"
    ],
    "statement": "Yakushima World Heritage criteria/context をコード内データとして使い、nested-filter を確認します。",
    "detail": "Yakushima World Heritage criteria/context を nested-filter のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "屋久島",
    "summaryJa": "屋久島は自然環境で知られる日本の世界自然遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "日本の世界自然遺産",
      "豊かな森林環境で知られる"
    ]
  },
  {
    "factId": "fact_jp_py_e02",
    "countryId": "JP",
    "category": "geography-nature",
    "entityKeys": [
      "jp:jp_py_e02"
    ],
    "aliases": [
      "Shirakami-Sanchi beech forest",
      "jp_py_e02"
    ],
    "statement": "Shirakami-Sanchi beech forest をコード内データとして使い、list-comprehension を確認します。",
    "detail": "Shirakami-Sanchi beech forest を list-comprehension のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "白神山地",
    "summaryJa": "白神山地はブナ林で知られる日本の自然遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "ブナ林が特徴",
      "自然環境の保護で知られる"
    ]
  },
  {
    "factId": "fact_jp_py_e03",
    "countryId": "JP",
    "category": "architecture",
    "entityKeys": [
      "jp:jp_py_e03"
    ],
    "aliases": [
      "National Diet Building",
      "jp_py_e03"
    ],
    "statement": "National Diet Building をコード内データとして使い、aggregation-duration を確認します。",
    "detail": "National Diet Building を aggregation-duration のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "国会議事堂",
    "summaryJa": "国会議事堂は日本の国会が開かれる建物です。",
    "detailJa": "",
    "keyPointsJa": [
      "国会の会議が行われる",
      "政治制度と建築の題材"
    ]
  },
  {
    "factId": "fact_jp_py_e04",
    "countryId": "JP",
    "category": "invention-science",
    "entityKeys": [
      "jp:jp_py_e04"
    ],
    "aliases": [
      "Hayabusa and Itokawa",
      "jp_py_e04"
    ],
    "statement": "Hayabusa and Itokawa をコード内データとして使い、code-ordering を確認します。",
    "detail": "Hayabusa and Itokawa を code-ordering のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://global.jaxa.jp/projects/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "はやぶさとイトカワ",
    "summaryJa": "はやぶさは小惑星イトカワを対象にした日本の探査機です。",
    "detailJa": "",
    "keyPointsJa": [
      "小惑星イトカワを探査",
      "宇宙科学の題材"
    ]
  },
  {
    "factId": "fact_jp_py_e05",
    "countryId": "JP",
    "category": "invention-science",
    "entityKeys": [
      "jp:jp_py_e05"
    ],
    "aliases": [
      "Hayabusa2 and Ryugu",
      "jp_py_e05"
    ],
    "statement": "Hayabusa2 and Ryugu をコード内データとして使い、nested-dict-tracing を確認します。",
    "detail": "Hayabusa2 and Ryugu を nested-dict-tracing のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://global.jaxa.jp/projects/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "はやぶさ2とリュウグウ",
    "summaryJa": "はやぶさ2は小惑星リュウグウを対象にした日本の探査機です。",
    "detailJa": "",
    "keyPointsJa": [
      "小惑星リュウグウを探査",
      "サンプルリターンで知られる"
    ]
  },
  {
    "factId": "fact_jp_py_e06",
    "countryId": "JP",
    "category": "traditional-culture",
    "entityKeys": [
      "jp:jp_py_e06"
    ],
    "aliases": [
      "Noh role structure",
      "jp_py_e06"
    ],
    "statement": "Noh role structure をコード内データとして使い、set-deduplication を確認します。",
    "detail": "Noh role structure を set-deduplication のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "能の役柄",
    "summaryJa": "能は役柄や演者の構成を持つ日本の伝統芸能です。",
    "detailJa": "",
    "keyPointsJa": [
      "日本の伝統芸能",
      "役割の分類を扱える"
    ]
  },
  {
    "factId": "fact_jp_py_e07",
    "countryId": "JP",
    "category": "literature-person",
    "entityKeys": [
      "jp:jp_py_e07"
    ],
    "aliases": [
      "Matsuo Basho and Oku no Hosomichi",
      "jp_py_e07"
    ],
    "statement": "Matsuo Basho and Oku no Hosomichi をコード内データとして使い、enumerate-route-processing を確認します。",
    "detail": "Matsuo Basho and Oku no Hosomichi を enumerate-route-processing のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "松尾芭蕉とおくのほそ道",
    "summaryJa": "松尾芭蕉は紀行文「おくのほそ道」で知られる俳人です。",
    "detailJa": "",
    "keyPointsJa": [
      "俳諧の代表的な人物",
      "旅の順序を追う題材"
    ]
  },
  {
    "factId": "fact_jp_py_b01",
    "countryId": "JP",
    "category": "language-writing",
    "entityKeys": [
      "jp:jp_py_b01"
    ],
    "aliases": [
      "kanji-hiragana-katakana search",
      "jp_py_b01"
    ],
    "statement": "kanji-hiragana-katakana search をコード内データとして使い、unicode-normalization を確認します。",
    "detail": "kanji-hiragana-katakana search を unicode-normalization のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "漢字・ひらがな・カタカナ",
    "summaryJa": "日本語の表記では漢字・ひらがな・カタカナが使われます。",
    "detailJa": "",
    "keyPointsJa": [
      "複数の文字体系がある",
      "検索では表記差に注意する"
    ]
  },
  {
    "factId": "fact_jp_py_b02",
    "countryId": "JP",
    "category": "history",
    "entityKeys": [
      "jp:jp_py_b02"
    ],
    "aliases": [
      "Japanese era conversion",
      "jp_py_b02"
    ],
    "statement": "Japanese era conversion をコード内データとして使い、boundary-condition を確認します。",
    "detail": "Japanese era conversion を boundary-condition のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日本の元号変換",
    "summaryJa": "日本では西暦と元号を対応させて日付を表すことがあります。",
    "detailJa": "",
    "keyPointsJa": [
      "元号には開始年がある",
      "境界年の判定が重要"
    ]
  },
  {
    "factId": "fact_jp_py_b03",
    "countryId": "JP",
    "category": "administration",
    "entityKeys": [
      "jp:jp_py_b03"
    ],
    "aliases": [
      "Japanese address order",
      "jp_py_b03"
    ],
    "statement": "Japanese address order をコード内データとして使い、parsing-order を確認します。",
    "detail": "Japanese address order を parsing-order のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日本の住所表記順",
    "summaryJa": "日本の住所は広い地域から細かい場所へ進む順で書かれることがあります。",
    "detailJa": "",
    "keyPointsJa": [
      "都道府県から始まる",
      "分割順を間違えやすい"
    ]
  },
  {
    "factId": "fact_jp_py_b04",
    "countryId": "JP",
    "category": "industry-finance",
    "entityKeys": [
      "jp:jp_py_b04"
    ],
    "aliases": [
      "Japanese yen display",
      "jp_py_b04"
    ],
    "statement": "Japanese yen display をコード内データとして使い、number-formatting を確認します。",
    "detail": "Japanese yen display を number-formatting のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日本円の表示",
    "summaryJa": "日本円の金額表示では桁区切りや記号の扱いが重要です。",
    "detailJa": "",
    "keyPointsJa": [
      "円記号や桁区切りを使う",
      "数値と文字列を区別する"
    ]
  },
  {
    "factId": "fact_jp_py_b05",
    "countryId": "JP",
    "category": "transport-language",
    "entityKeys": [
      "jp:jp_py_b05"
    ],
    "aliases": [
      "station names in Japanese and romaji",
      "jp_py_b05"
    ],
    "statement": "station names in Japanese and romaji をコード内データとして使い、normalized-key-lookup を確認します。",
    "detail": "station names in Japanese and romaji を normalized-key-lookup のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.mlit.go.jp/en/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "駅名の日本語・ローマ字表記",
    "summaryJa": "日本の駅名は日本語表記とローマ字表記を併用することがあります。",
    "detailJa": "",
    "keyPointsJa": [
      "表記ゆれが起きやすい",
      "検索キーの正規化が重要"
    ]
  },
  {
    "factId": "fact_final_decode_JP_python_01",
    "countryId": "JP",
    "category": "politics-history",
    "entityKeys": [
      "jp:final_decode_JP_python_01"
    ],
    "aliases": [
      "Meiji Constitution promulgation context",
      "final_decode_JP_python_01"
    ],
    "statement": "Meiji Constitution promulgation context をコード内データとして使い、dict-plus-comparison を確認します。",
    "detail": "Meiji Constitution promulgation context を dict-plus-comparison のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "大日本帝国憲法の公布",
    "summaryJa": "大日本帝国憲法は1889年に公布された日本の近代憲法です。",
    "detailJa": "",
    "keyPointsJa": [
      "1889年公布",
      "明治期の政治制度の題材"
    ]
  },
  {
    "factId": "fact_final_decode_JP_python_02",
    "countryId": "JP",
    "category": "nobel-literature",
    "entityKeys": [
      "jp:final_decode_JP_python_02"
    ],
    "aliases": [
      "Kenzaburo Oe Nobel Literature",
      "final_decode_JP_python_02"
    ],
    "statement": "Kenzaburo Oe Nobel Literature をコード内データとして使い、list-plus-sort-key を確認します。",
    "detail": "Kenzaburo Oe Nobel Literature を list-plus-sort-key のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.nobelprize.org/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "大江健三郎とノーベル文学賞",
    "summaryJa": "大江健三郎はノーベル文学賞で知られる日本の作家です。",
    "detailJa": "",
    "keyPointsJa": [
      "日本文学の題材",
      "人物と受賞情報を扱う"
    ]
  },
  {
    "factId": "fact_final_decode_JP_python_03",
    "countryId": "JP",
    "category": "architecture-religion",
    "entityKeys": [
      "jp:final_decode_JP_python_03"
    ],
    "aliases": [
      "Kinkaku-ji and Rokuon-ji naming",
      "final_decode_JP_python_03"
    ],
    "statement": "Kinkaku-ji and Rokuon-ji naming をコード内データとして使い、alias-resolution-plus-membership を確認します。",
    "detail": "Kinkaku-ji and Rokuon-ji naming を alias-resolution-plus-membership のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "金閣寺と鹿苑寺",
    "summaryJa": "金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です。",
    "detailJa": "",
    "keyPointsJa": [
      "通称と正式名称がある",
      "別名判定の題材"
    ]
  },
  {
    "factId": "fact_final_execute_JP_python_01",
    "countryId": "JP",
    "category": "world-heritage-religion",
    "entityKeys": [
      "jp:final_execute_JP_python_01"
    ],
    "aliases": [
      "Sacred Sites and Pilgrimage Routes in Kii Mountain Range",
      "final_execute_JP_python_01"
    ],
    "statement": "Sacred Sites and Pilgrimage Routes in Kii Mountain Range をコード内データとして使い、nested-filter-plus-sort を確認します。",
    "detail": "Sacred Sites and Pilgrimage Routes in Kii Mountain Range を nested-filter-plus-sort のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "紀伊山地の霊場と参詣道",
    "summaryJa": "紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "世界遺産の題材",
      "条件抽出と並べ替えに使える"
    ]
  },
  {
    "factId": "fact_final_execute_JP_python_02",
    "countryId": "JP",
    "category": "architecture-industry",
    "entityKeys": [
      "jp:final_execute_JP_python_02"
    ],
    "aliases": [
      "Kurobe Dam",
      "final_execute_JP_python_02"
    ],
    "statement": "Kurobe Dam をコード内データとして使い、multi-step-numeric-calculation を確認します。",
    "detail": "Kurobe Dam を multi-step-numeric-calculation のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "黒部ダム",
    "summaryJa": "黒部ダムは日本の大規模なダム建設と電力開発に関わる題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "土木・産業の題材",
      "数値計算に使える"
    ]
  },
  {
    "factId": "fact_final_execute_JP_python_03",
    "countryId": "JP",
    "category": "world-heritage-architecture",
    "entityKeys": [
      "jp:final_execute_JP_python_03"
    ],
    "aliases": [
      "Gokayama gassho-zukuri villages",
      "final_execute_JP_python_03"
    ],
    "statement": "Gokayama gassho-zukuri villages をコード内データとして使い、group-count-summary を確認します。",
    "detail": "Gokayama gassho-zukuri villages を group-count-summary のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "五箇山の合掌造り集落",
    "summaryJa": "五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "合掌造りの集落",
      "グループ集計に使える"
    ]
  },
  {
    "factId": "fact_final_debug_JP_python_01",
    "countryId": "JP",
    "category": "geography-time",
    "entityKeys": [
      "jp:final_debug_JP_python_01"
    ],
    "aliases": [
      "Japan Standard Time UTC+9 date rollover",
      "final_debug_JP_python_01"
    ],
    "statement": "Japan Standard Time UTC+9 date rollover をコード内データとして使い、timezone-boundary を確認します。",
    "detail": "Japan Standard Time UTC+9 date rollover を timezone-boundary のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日本標準時と日付境界",
    "summaryJa": "日本標準時はUTC+9として扱われ、日付またぎの判定に関係します。",
    "detailJa": "",
    "keyPointsJa": [
      "UTC+9が題材",
      "深夜の境界に注意"
    ]
  },
  {
    "factId": "fact_final_debug_JP_python_02",
    "countryId": "JP",
    "category": "administration",
    "entityKeys": [
      "jp:final_debug_JP_python_02"
    ],
    "aliases": [
      "Japanese postal code format",
      "final_debug_JP_python_02"
    ],
    "statement": "Japanese postal code format をコード内データとして使い、regex-validation を確認します。",
    "detail": "Japanese postal code format を regex-validation のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.post.japanpost.jp/zipcode/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "日本の郵便番号形式",
    "summaryJa": "日本の郵便番号は桁数とハイフン位置を確認する形式です。",
    "detailJa": "",
    "keyPointsJa": [
      "3桁-4桁の形",
      "正規表現の題材"
    ]
  },
  {
    "factId": "fact_final_debug_JP_python_03",
    "countryId": "JP",
    "category": "administration-standards",
    "entityKeys": [
      "jp:final_debug_JP_python_03"
    ],
    "aliases": [
      "JIS prefecture codes",
      "final_debug_JP_python_03"
    ],
    "statement": "JIS prefecture codes をコード内データとして使い、zero-padding-key-mismatch を確認します。",
    "detail": "JIS prefecture codes を zero-padding-key-mismatch のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.soumu.go.jp/denshijiti/code.html"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "JIS都道府県コード",
    "summaryJa": "JIS都道府県コードは都道府県を番号で表す標準化されたコードです。",
    "detailJa": "",
    "keyPointsJa": [
      "ゼロ埋めに注意",
      "文字列キーとして扱う"
    ]
  },
  {
    "factId": "fact_jp_js_d01",
    "countryId": "JP",
    "category": "national-symbol",
    "entityKeys": [
      "jp:jp_js_d01"
    ],
    "aliases": [
      "Kimigayo national anthem",
      "jp_js_d01"
    ],
    "statement": "Kimigayo national anthem をコード内データとして使い、object-property を確認します。",
    "detail": "Kimigayo national anthem を object-property のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "君が代",
    "summaryJa": "君が代は日本の国歌です。",
    "detailJa": "",
    "keyPointsJa": [
      "日本の国歌",
      "国の象徴に関する題材"
    ]
  },
  {
    "factId": "fact_jp_js_d02",
    "countryId": "JP",
    "category": "nobel-invention",
    "entityKeys": [
      "jp:jp_js_d02"
    ],
    "aliases": [
      "blue LED Nobel laureates",
      "jp_js_d02"
    ],
    "statement": "blue LED Nobel laureates をコード内データとして使い、array-length を確認します。",
    "detail": "blue LED Nobel laureates を array-length のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.nobelprize.org/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "青色LEDとノーベル賞",
    "summaryJa": "青色LEDの研究は日本関係のノーベル物理学賞受賞につながりました。",
    "detailJa": "",
    "keyPointsJa": [
      "青色LEDが題材",
      "複数の受賞者を扱う"
    ]
  },
  {
    "factId": "fact_jp_js_d03",
    "countryId": "JP",
    "category": "nobel-invention",
    "entityKeys": [
      "jp:jp_js_d03"
    ],
    "aliases": [
      "Akira Yoshino and lithium-ion battery",
      "jp_js_d03"
    ],
    "statement": "Akira Yoshino and lithium-ion battery をコード内データとして使い、const-template を確認します。",
    "detail": "Akira Yoshino and lithium-ion battery を const-template のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.nobelprize.org/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "吉野彰とリチウムイオン電池",
    "summaryJa": "吉野彰はリチウムイオン電池に関する業績で知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "電池技術の題材",
      "ノーベル賞関連の科学者"
    ]
  },
  {
    "factId": "fact_jp_js_d04",
    "countryId": "JP",
    "category": "nobel-science",
    "entityKeys": [
      "jp:jp_js_d04"
    ],
    "aliases": [
      "Shinya Yamanaka and iPS cells",
      "jp_js_d04"
    ],
    "statement": "Shinya Yamanaka and iPS cells をコード内データとして使い、object-destructuring を確認します。",
    "detail": "Shinya Yamanaka and iPS cells を object-destructuring のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.nobelprize.org/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "山中伸弥とiPS細胞",
    "summaryJa": "山中伸弥はiPS細胞の研究で知られる科学者です。",
    "detailJa": "",
    "keyPointsJa": [
      "iPS細胞が題材",
      "生命科学の業績"
    ]
  },
  {
    "factId": "fact_jp_js_d05",
    "countryId": "JP",
    "category": "world-heritage-architecture",
    "entityKeys": [
      "jp:jp_js_d05"
    ],
    "aliases": [
      "Himeji Castle and Shirasagi-jo nickname",
      "jp_js_d05"
    ],
    "statement": "Himeji Castle and Shirasagi-jo nickname をコード内データとして使い、strict-equality を確認します。",
    "detail": "Himeji Castle and Shirasagi-jo nickname を strict-equality のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "姫路城と白鷺城",
    "summaryJa": "姫路城は白鷺城の愛称でも知られる日本の城です。",
    "detailJa": "",
    "keyPointsJa": [
      "世界遺産の城",
      "別名の扱いが重要"
    ]
  },
  {
    "factId": "fact_jp_js_d06",
    "countryId": "JP",
    "category": "geography-nature",
    "entityKeys": [
      "jp:jp_js_d06"
    ],
    "aliases": [
      "Mount Fuji elevation/context",
      "jp_js_d06"
    ],
    "statement": "Mount Fuji elevation/context をコード内データとして使い、numeric-comparison を確認します。",
    "detail": "Mount Fuji elevation/context を numeric-comparison のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "富士山",
    "summaryJa": "富士山は日本を代表する山で、標高データでも扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "日本を代表する山",
      "標高比較の題材"
    ]
  },
  {
    "factId": "fact_jp_js_d07",
    "countryId": "JP",
    "category": "international-contact",
    "entityKeys": [
      "jp:jp_js_d07"
    ],
    "aliases": [
      "Francis Xavier arrival in Japan",
      "jp_js_d07"
    ],
    "statement": "Francis Xavier arrival in Japan をコード内データとして使い、conditional を確認します。",
    "detail": "Francis Xavier arrival in Japan を conditional のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "フランシスコ・ザビエル来日",
    "summaryJa": "フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "1549年の来日が題材",
      "国際交流史の人物"
    ]
  },
  {
    "factId": "fact_jp_js_d08",
    "countryId": "JP",
    "category": "international-contact",
    "entityKeys": [
      "jp:jp_js_d08"
    ],
    "aliases": [
      "William Adams arrival in Japan",
      "jp_js_d08"
    ],
    "statement": "William Adams arrival in Japan をコード内データとして使い、object-values を確認します。",
    "detail": "William Adams arrival in Japan を object-values のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ウィリアム・アダムス来航",
    "summaryJa": "ウィリアム・アダムスは日本に来航した英国人航海士として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "日本名は三浦按針",
      "国際交流史の人物"
    ]
  },
  {
    "factId": "fact_jp_js_d09",
    "countryId": "JP",
    "category": "literature-person",
    "entityKeys": [
      "jp:jp_js_d09"
    ],
    "aliases": [
      "Murasaki Shikibu and The Tale of Genji",
      "jp_js_d09"
    ],
    "statement": "Murasaki Shikibu and The Tale of Genji をコード内データとして使い、string-concatenation を確認します。",
    "detail": "Murasaki Shikibu and The Tale of Genji を string-concatenation のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "紫式部と源氏物語",
    "summaryJa": "紫式部は「源氏物語」の作者として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "平安時代の文学者",
      "作品名との対応が重要"
    ]
  },
  {
    "factId": "fact_jp_js_d10",
    "countryId": "JP",
    "category": "traditional-culture",
    "entityKeys": [
      "jp:jp_js_d10"
    ],
    "aliases": [
      "Kabuki theatre",
      "jp_js_d10"
    ],
    "statement": "Kabuki theatre をコード内データとして使い、includes を確認します。",
    "detail": "Kabuki theatre を includes のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "歌舞伎",
    "summaryJa": "歌舞伎は日本の伝統芸能です。",
    "detailJa": "",
    "keyPointsJa": [
      "舞台芸能の一つ",
      "伝統文化の題材"
    ]
  },
  {
    "factId": "fact_jp_js_e01",
    "countryId": "JP",
    "category": "international-contact",
    "entityKeys": [
      "jp:jp_js_e01"
    ],
    "aliases": [
      "firearms arrival at Tanegashima",
      "jp_js_e01"
    ],
    "statement": "firearms arrival at Tanegashima をコード内データとして使い、array-sort を確認します。",
    "detail": "firearms arrival at Tanegashima を array-sort のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "種子島への鉄砲伝来",
    "summaryJa": "鉄砲伝来は種子島と結びつけて語られる日本史の出来事です。",
    "detailJa": "",
    "keyPointsJa": [
      "種子島が重要地点",
      "出来事の順序を扱う"
    ]
  },
  {
    "factId": "fact_jp_js_e02",
    "countryId": "JP",
    "category": "international-contact",
    "entityKeys": [
      "jp:jp_js_e02"
    ],
    "aliases": [
      "Perry expedition and opening sequence",
      "jp_js_e02"
    ],
    "statement": "Perry expedition and opening sequence をコード内データとして使い、timeline-reduce を確認します。",
    "detail": "Perry expedition and opening sequence を timeline-reduce のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ペリー来航と開国",
    "summaryJa": "ペリー来航は日本の開国過程と結びつく出来事です。",
    "detailJa": "",
    "keyPointsJa": [
      "19世紀の対外交渉",
      "時系列処理の題材"
    ]
  },
  {
    "factId": "fact_jp_js_e03",
    "countryId": "JP",
    "category": "traditional-culture",
    "entityKeys": [
      "jp:jp_js_e03"
    ],
    "aliases": [
      "Japanese washi traditions",
      "jp_js_e03"
    ],
    "statement": "Japanese washi traditions をコード内データとして使い、filter を確認します。",
    "detail": "Japanese washi traditions を filter のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "和紙の伝統",
    "summaryJa": "和紙は日本の伝統的な紙文化です。",
    "detailJa": "",
    "keyPointsJa": [
      "伝統工芸の題材",
      "種類や地域を分類できる"
    ]
  },
  {
    "factId": "fact_jp_js_e04",
    "countryId": "JP",
    "category": "religion-architecture",
    "entityKeys": [
      "jp:jp_js_e04"
    ],
    "aliases": [
      "Ise Jingu Shikinen Sengu",
      "jp_js_e04"
    ],
    "statement": "Ise Jingu Shikinen Sengu をコード内データとして使い、modulo-cycle を確認します。",
    "detail": "Ise Jingu Shikinen Sengu を modulo-cycle のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.isejingu.or.jp/en/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "伊勢神宮の式年遷宮",
    "summaryJa": "伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "周期の考え方が重要",
      "剰余計算の題材"
    ]
  },
  {
    "factId": "fact_jp_js_e05",
    "countryId": "JP",
    "category": "architecture",
    "entityKeys": [
      "jp:jp_js_e05"
    ],
    "aliases": [
      "Tokyo Skytree",
      "jp_js_e05"
    ],
    "statement": "Tokyo Skytree をコード内データとして使い、map-unit-conversion を確認します。",
    "detail": "Tokyo Skytree を map-unit-conversion のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.tokyo-skytree.jp/en/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "東京スカイツリー",
    "summaryJa": "東京スカイツリーは高さデータで扱われる日本の電波塔です。",
    "detailJa": "",
    "keyPointsJa": [
      "高さの数値が題材",
      "単位変換に使える"
    ]
  },
  {
    "factId": "fact_jp_js_e06",
    "countryId": "JP",
    "category": "invention-science",
    "entityKeys": [
      "jp:jp_js_e06"
    ],
    "aliases": [
      "Yagi-Uda antenna",
      "jp_js_e06"
    ],
    "statement": "Yagi-Uda antenna をコード内データとして使い、reduce-aggregation を確認します。",
    "detail": "Yagi-Uda antenna を reduce-aggregation のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "八木・宇田アンテナ",
    "summaryJa": "八木・宇田アンテナは日本の発明・科学技術に関する題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "アンテナ技術の題材",
      "発明史として扱う"
    ]
  },
  {
    "factId": "fact_jp_js_e07",
    "countryId": "JP",
    "category": "industry-transport",
    "entityKeys": [
      "jp:jp_js_e07"
    ],
    "aliases": [
      "Seikan Tunnel",
      "jp_js_e07"
    ],
    "statement": "Seikan Tunnel をコード内データとして使い、route-object-tracing を確認します。",
    "detail": "Seikan Tunnel を route-object-tracing のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.mlit.go.jp/en/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "青函トンネル",
    "summaryJa": "青函トンネルは本州と北海道を結ぶ交通インフラです。",
    "detailJa": "",
    "keyPointsJa": [
      "鉄道トンネルの題材",
      "経路データとして扱う"
    ]
  },
  {
    "factId": "fact_jp_js_b01",
    "countryId": "JP",
    "category": "traditional-literature",
    "entityKeys": [
      "jp:jp_js_b01"
    ],
    "aliases": [
      "Ono no Komachi and traditional three beauties claim",
      "jp_js_b01"
    ],
    "statement": "Ono no Komachi and traditional three beauties claim（伝承・文化的関連として扱い、断定しません） をコード内データとして使い、fact-status-modeling を確認します。",
    "detail": "Ono no Komachi and traditional three beauties claim を fact-status-modeling のコード課題で扱う。",
    "factStatus": "traditional",
    "sourceRefs": [],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "小野小町と伝承",
    "summaryJa": "小野小町に関する美人伝承は伝統的な言い伝えとして扱います。",
    "detailJa": "",
    "keyPointsJa": [
      "伝統的な評価を含む",
      "断定表現を避ける"
    ]
  },
  {
    "factId": "fact_jp_js_b02",
    "countryId": "JP",
    "category": "language-culture",
    "entityKeys": [
      "jp:jp_js_b02"
    ],
    "aliases": [
      "Japanese personal-name order",
      "jp_js_b02"
    ],
    "statement": "Japanese personal-name order をコード内データとして使い、display-order を確認します。",
    "detail": "Japanese personal-name order を display-order のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "日本語の氏名順",
    "summaryJa": "日本語では姓を先、名を後に置く表記が一般的です。",
    "detailJa": "",
    "keyPointsJa": [
      "姓と名の順序が重要",
      "表示順のバグになりやすい"
    ]
  },
  {
    "factId": "fact_jp_js_b03",
    "countryId": "JP",
    "category": "language-writing",
    "entityKeys": [
      "jp:jp_js_b03"
    ],
    "aliases": [
      "full-width and half-width characters",
      "jp_js_b03"
    ],
    "statement": "full-width and half-width characters をコード内データとして使い、input-normalization を確認します。",
    "detail": "full-width and half-width characters を input-normalization のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "全角・半角文字",
    "summaryJa": "日本語入力では全角文字と半角文字の違いが問題になることがあります。",
    "detailJa": "",
    "keyPointsJa": [
      "見た目が似ても別文字",
      "入力正規化が重要"
    ]
  },
  {
    "factId": "fact_jp_js_b04",
    "countryId": "JP",
    "category": "language-writing",
    "entityKeys": [
      "jp:jp_js_b04"
    ],
    "aliases": [
      "gojuon ordering",
      "jp_js_b04"
    ],
    "statement": "gojuon ordering をコード内データとして使い、Intl-Collator を確認します。",
    "detail": "gojuon ordering を Intl-Collator のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "五十音順",
    "summaryJa": "五十音順は日本語の文字を並べる代表的な順序です。",
    "detailJa": "",
    "keyPointsJa": [
      "日本語の並び順",
      "単純な英字ソートと異なる"
    ]
  },
  {
    "factId": "fact_jp_js_b05",
    "countryId": "JP",
    "category": "administration",
    "entityKeys": [
      "jp:jp_js_b05"
    ],
    "aliases": [
      "to-do-fu-ken suffix handling",
      "jp_js_b05"
    ],
    "statement": "to-do-fu-ken suffix handling をコード内データとして使い、suffix-parsing を確認します。",
    "detail": "to-do-fu-ken suffix handling を suffix-parsing のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "都道府県の接尾辞",
    "summaryJa": "都・道・府・県は日本の自治体名に付く接尾辞です。",
    "detailJa": "",
    "keyPointsJa": [
      "接尾辞を取り除く処理が必要",
      "地名の一部として残る場合もある"
    ]
  },
  {
    "factId": "fact_final_decode_JP_javascript_01",
    "countryId": "JP",
    "category": "literature-art",
    "entityKeys": [
      "jp:final_decode_JP_javascript_01"
    ],
    "aliases": [
      "Hokusai and Thirty-six Views of Mount Fuji",
      "final_decode_JP_javascript_01"
    ],
    "statement": "Hokusai and Thirty-six Views of Mount Fuji をコード内データとして使い、array-method-plus-template を確認します。",
    "detail": "Hokusai and Thirty-six Views of Mount Fuji を array-method-plus-template のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "富士山",
    "summaryJa": "富士山は日本を代表する山で、標高データでも扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "日本を代表する山",
      "標高比較の題材"
    ]
  },
  {
    "factId": "fact_final_decode_JP_javascript_02",
    "countryId": "JP",
    "category": "science",
    "entityKeys": [
      "jp:final_decode_JP_javascript_02"
    ],
    "aliases": [
      "Super-Kamiokande",
      "final_decode_JP_javascript_02"
    ],
    "statement": "Super-Kamiokande をコード内データとして使い、nested-object-plus-boolean を確認します。",
    "detail": "Super-Kamiokande を nested-object-plus-boolean のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "スーパーカミオカンデ",
    "summaryJa": "スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です。",
    "detailJa": "",
    "keyPointsJa": [
      "科学施設の題材",
      "真偽判定に使える"
    ]
  },
  {
    "factId": "fact_final_decode_JP_javascript_03",
    "countryId": "JP",
    "category": "world-heritage-religion",
    "entityKeys": [
      "jp:final_decode_JP_javascript_03"
    ],
    "aliases": [
      "Itsukushima Shrine",
      "final_decode_JP_javascript_03"
    ],
    "statement": "Itsukushima Shrine をコード内データとして使い、set-plus-membership を確認します。",
    "detail": "Itsukushima Shrine を set-plus-membership のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "厳島神社",
    "summaryJa": "厳島神社は海上に立つ鳥居で知られる日本の世界遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "世界遺産の題材",
      "集合の包含判定に使える"
    ]
  },
  {
    "factId": "fact_final_execute_JP_javascript_01",
    "countryId": "JP",
    "category": "religion-geography",
    "entityKeys": [
      "jp:final_execute_JP_javascript_01"
    ],
    "aliases": [
      "Shikoku 88-temple pilgrimage",
      "final_execute_JP_javascript_01"
    ],
    "statement": "Shikoku 88-temple pilgrimage をコード内データとして使い、filter-reduce-route を確認します。",
    "detail": "Shikoku 88-temple pilgrimage を filter-reduce-route のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "四国八十八箇所巡礼",
    "summaryJa": "四国八十八箇所巡礼は四国の寺院をめぐる宗教文化の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "88の寺院が題材",
      "経路処理に使える"
    ]
  },
  {
    "factId": "fact_final_execute_JP_javascript_02",
    "countryId": "JP",
    "category": "geography-nature",
    "entityKeys": [
      "jp:final_execute_JP_javascript_02"
    ],
    "aliases": [
      "Sanriku ria coast",
      "final_execute_JP_javascript_02"
    ],
    "statement": "Sanriku ria coast をコード内データとして使い、grouping-plus-summary を確認します。",
    "detail": "Sanriku ria coast を grouping-plus-summary のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "三陸のリアス海岸",
    "summaryJa": "三陸海岸は入り組んだリアス海岸で知られる地形の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "地形分類の題材",
      "地域ごとの集計に使える"
    ]
  },
  {
    "factId": "fact_final_execute_JP_javascript_03",
    "countryId": "JP",
    "category": "industry",
    "entityKeys": [
      "jp:final_execute_JP_javascript_03"
    ],
    "aliases": [
      "Toyota Production System kanban",
      "final_execute_JP_javascript_03"
    ],
    "statement": "Toyota Production System kanban をコード内データとして使い、queue-simulation を確認します。",
    "detail": "Toyota Production System kanban を queue-simulation のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://global.toyota/en/company/vision-and-philosophy/production-system/"
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "トヨタ生産方式のかんばん",
    "summaryJa": "かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です。",
    "detailJa": "",
    "keyPointsJa": [
      "生産管理の題材",
      "キュー処理に使える"
    ]
  },
  {
    "factId": "fact_final_debug_JP_javascript_01",
    "countryId": "JP",
    "category": "administration",
    "entityKeys": [
      "jp:final_debug_JP_javascript_01"
    ],
    "aliases": [
      "Japanese telephone-number formatting",
      "final_debug_JP_javascript_01"
    ],
    "statement": "Japanese telephone-number formatting をコード内データとして使い、regex-normalization を確認します。",
    "detail": "Japanese telephone-number formatting を regex-normalization のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "日本の電話番号形式",
    "summaryJa": "日本の電話番号は市外局番や区切り方を含めて整形する必要があります。",
    "detailJa": "",
    "keyPointsJa": [
      "数字の正規化が重要",
      "形式チェックの題材"
    ]
  },
  {
    "factId": "fact_final_debug_JP_javascript_02",
    "countryId": "JP",
    "category": "traditional-language",
    "entityKeys": [
      "jp:final_debug_JP_javascript_02"
    ],
    "aliases": [
      "Japanese vertical writing/tategaki",
      "final_debug_JP_javascript_02"
    ],
    "statement": "Japanese vertical writing/tategaki をコード内データとして使い、layout-config-defect を確認します。",
    "detail": "Japanese vertical writing/tategaki を layout-config-defect のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "日本語の縦書き",
    "summaryJa": "日本語には横書きだけでなく縦書きの組版文化があります。",
    "detailJa": "",
    "keyPointsJa": [
      "表示方向の題材",
      "レイアウト設定のバグに注意"
    ]
  },
  {
    "factId": "fact_final_debug_JP_javascript_03",
    "countryId": "JP",
    "category": "administration-time",
    "entityKeys": [
      "jp:final_debug_JP_javascript_03"
    ],
    "aliases": [
      "Japanese fiscal year beginning in April",
      "final_debug_JP_javascript_03"
    ],
    "statement": "Japanese fiscal year beginning in April をコード内データとして使い、date-boundary を確認します。",
    "detail": "Japanese fiscal year beginning in April を date-boundary のコード課題で扱う。",
    "factStatus": "verified",
    "sourceRefs": [
      "https://www.bunka.go.jp/english/"
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "日本の年度開始",
    "summaryJa": "日本の年度は4月に始まる扱いがよく使われます。",
    "detailJa": "",
    "keyPointsJa": [
      "4月開始が題材",
      "日付境界の判定に使える"
    ]
  },
  {
    "factId": "jp_broad_national_stereotype_avoid",
    "countryId": "JP",
    "category": "safety",
    "entityKeys": [
      "stereotype:national"
    ],
    "aliases": [
      "national stereotype"
    ],
    "statement": "",
    "detail": "Do not generate questions from broad claims about people by nationality.",
    "factStatus": "avoid",
    "sourceRefs": [],
    "allowedWorlds": [],
    "allowedLanguageIds": [],
    "relatedFactIds": [],
    "titleJa": "national stereotype",
    "summaryJa": "",
    "detailJa": "",
    "keyPointsJa": []
  },
  {
    "factId": "fact_us_federal_branches",
    "countryId": "US",
    "category": "politics",
    "entityKeys": [
      "us:federal_branches"
    ],
    "aliases": [
      "three federal branches/checks-balances",
      "federal branches"
    ],
    "statement": "three federal branches/checks-balances を dict-access のコード課題で扱う。",
    "detail": "three federal branches/checks-balances の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Branches of the U.S. government",
        "organization": "USAGov",
        "url": "https://www.usa.gov/branches-of-government"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ連邦政府の三権",
    "summaryJa": "アメリカ連邦政府は立法・行政・司法の三部門で説明されます。",
    "detailJa": "",
    "keyPointsJa": [
      "三権分立の題材",
      "役割名をデータで扱う"
    ]
  },
  {
    "factId": "fact_us_senate_composition",
    "countryId": "US",
    "category": "politics",
    "entityKeys": [
      "us:senate_composition"
    ],
    "aliases": [
      "United States Senate composition",
      "senate composition"
    ],
    "statement": "United States Senate composition を list-length/numeric のコード課題で扱う。",
    "detail": "United States Senate composition の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Senators",
        "organization": "United States Senate",
        "url": "https://www.senate.gov/senators/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ上院",
    "summaryJa": "アメリカ上院は各州から選ばれる議員で構成されます。",
    "detailJa": "",
    "keyPointsJa": [
      "上院は連邦議会の一院",
      "人数や州との関係を扱う"
    ]
  },
  {
    "factId": "fact_us_flag_stars_stripes",
    "countryId": "US",
    "category": "national-symbol",
    "entityKeys": [
      "us:flag_stars_stripes"
    ],
    "aliases": [
      "United States flag stars/stripes",
      "flag stars stripes"
    ],
    "statement": "United States flag stars/stripes を dict-access のコード課題で扱う。",
    "detail": "United States flag stars/stripes の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "The American flag",
        "organization": "USAGov",
        "url": "https://www.usa.gov/flag"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ国旗",
    "summaryJa": "アメリカ国旗は星と縞の数が重要な国の象徴です。",
    "detailJa": "",
    "keyPointsJa": [
      "星は州を表す",
      "縞は建国時の州に由来する"
    ]
  },
  {
    "factId": "fact_us_bald_eagle_symbol",
    "countryId": "US",
    "category": "national-symbol",
    "entityKeys": [
      "us:bald_eagle_symbol"
    ],
    "aliases": [
      "bald eagle national symbol",
      "bald eagle symbol"
    ],
    "statement": "bald eagle national symbol を membership/boolean のコード課題で扱う。",
    "detail": "bald eagle national symbol の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Bald Eagle",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/articles/bald-eagle.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ハクトウワシ",
    "summaryJa": "ハクトウワシはアメリカの国の象徴として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "国の象徴の鳥",
      "真偽判定に使える"
    ]
  },
  {
    "factId": "fact_us_yellowstone_establishment",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:yellowstone_establishment"
    ],
    "aliases": [
      "Yellowstone establishment/first-national-park scope",
      "yellowstone establishment"
    ],
    "statement": "Yellowstone establishment/first-national-park scope を tuple-unpack のコード課題で扱う。",
    "detail": "Yellowstone establishment/first-national-park scope の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Yellowstone History",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/yell/learn/historyculture/index.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "イエローストーン国立公園",
    "summaryJa": "イエローストーンはアメリカの国立公園史で重要な場所です。",
    "detailJa": "",
    "keyPointsJa": [
      "国立公園の題材",
      "設立年を扱う"
    ]
  },
  {
    "factId": "fact_us_independence_hall_documents",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:independence_hall_documents"
    ],
    "aliases": [
      "Independence Hall founding documents",
      "independence hall documents"
    ],
    "statement": "Independence Hall founding documents を list-index のコード課題で扱う。",
    "detail": "Independence Hall founding documents の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Independence Hall",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/inde/learn/historyculture/places-independencehall.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "独立記念館",
    "summaryJa": "独立記念館はアメリカの建国文書と結びつく歴史的建造物です。",
    "detailJa": "",
    "keyPointsJa": [
      "独立宣言などと関係",
      "文書リストの題材"
    ]
  },
  {
    "factId": "fact_us_apollo11_crew",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:apollo11_crew"
    ],
    "aliases": [
      "Apollo 11 mission and crew",
      "apollo11 crew"
    ],
    "statement": "Apollo 11 mission and crew を f-string のコード課題で扱う。",
    "detail": "Apollo 11 mission and crew の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Apollo 11 Mission Overview",
        "organization": "NASA",
        "url": "https://www.nasa.gov/history/apollo-11-mission-overview/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アポロ11号",
    "summaryJa": "アポロ11号は月面着陸で知られるNASAのミッションです。",
    "detailJa": "",
    "keyPointsJa": [
      "月面着陸のミッション",
      "乗員名を扱う"
    ]
  },
  {
    "factId": "fact_us_mark_twain_huck_finn",
    "countryId": "US",
    "category": "literature-person",
    "entityKeys": [
      "us:mark_twain_huck_finn"
    ],
    "aliases": [
      "Mark Twain/Huckleberry Finn",
      "mark twain huck finn"
    ],
    "statement": "Mark Twain/Huckleberry Finn を string/dict のコード課題で扱う。",
    "detail": "Mark Twain/Huckleberry Finn の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Mark Twain authority record",
        "organization": "Library of Congress",
        "url": "https://www.loc.gov/item/n50034943/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "マーク・トウェイン",
    "summaryJa": "マーク・トウェインはアメリカ文学で知られる作家です。",
    "detailJa": "",
    "keyPointsJa": [
      "文学者の題材",
      "作品名との対応が重要"
    ]
  },
  {
    "factId": "fact_us_mississippi_river_length",
    "countryId": "US",
    "category": "geography-nature",
    "entityKeys": [
      "us:mississippi_river_length"
    ],
    "aliases": [
      "Mississippi River geography",
      "mississippi river length"
    ],
    "statement": "Mississippi River geography を numeric-comparison のコード課題で扱う。",
    "detail": "Mississippi River geography の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Mississippi River",
        "organization": "U.S. Geological Survey",
        "url": "https://www.usgs.gov/special-topics/water-science-school/science/mississippi-river"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ミシシッピ川",
    "summaryJa": "ミシシッピ川はアメリカの地理を代表する大河です。",
    "detailJa": "",
    "keyPointsJa": [
      "地理データの題材",
      "長さや比較に使える"
    ]
  },
  {
    "factId": "fact_us_route66_route",
    "countryId": "US",
    "category": "industry-transport",
    "entityKeys": [
      "us:route66_route"
    ],
    "aliases": [
      "Route 66 establishment/route",
      "route66 route"
    ],
    "statement": "Route 66 establishment/route を string-slice のコード課題で扱う。",
    "detail": "Route 66 establishment/route の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Route 66",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/subjects/travelroute66/index.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ルート66",
    "summaryJa": "ルート66はアメリカの道路文化と結びつく歴史的な道路です。",
    "detailJa": "",
    "keyPointsJa": [
      "交通史の題材",
      "文字列処理に使える"
    ]
  },
  {
    "factId": "fact_us_grand_canyon_site",
    "countryId": "US",
    "category": "geography-nature",
    "entityKeys": [
      "us:grand_canyon_site"
    ],
    "aliases": [
      "Grand Canyon geologic/site data",
      "grand canyon site"
    ],
    "statement": "Grand Canyon geologic/site data を nested-filter-sort のコード課題で扱う。",
    "detail": "Grand Canyon geologic/site data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Grand Canyon National Park",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/75/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "グランドキャニオン",
    "summaryJa": "グランドキャニオンは地形と世界遺産の文脈で扱われる場所です。",
    "detailJa": "",
    "keyPointsJa": [
      "地形データの題材",
      "条件抽出に使える"
    ]
  },
  {
    "factId": "fact_us_great_lakes_basin",
    "countryId": "US",
    "category": "geography-nature",
    "entityKeys": [
      "us:great_lakes_basin"
    ],
    "aliases": [
      "Great Lakes basin data",
      "great lakes basin"
    ],
    "statement": "Great Lakes basin data を aggregate-group のコード課題で扱う。",
    "detail": "Great Lakes basin data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Great Lakes",
        "organization": "U.S. Environmental Protection Agency",
        "url": "https://www.epa.gov/greatlakes"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "五大湖",
    "summaryJa": "五大湖は北アメリカの大きな湖群です。",
    "detailJa": "",
    "keyPointsJa": [
      "湖の集合を扱う",
      "集計処理の題材"
    ]
  },
  {
    "factId": "fact_us_louisiana_purchase_timeline",
    "countryId": "US",
    "category": "international-history",
    "entityKeys": [
      "us:louisiana_purchase_timeline"
    ],
    "aliases": [
      "Louisiana Purchase timeline",
      "louisiana purchase timeline"
    ],
    "statement": "Louisiana Purchase timeline を sort-filter-timeline のコード課題で扱う。",
    "detail": "Louisiana Purchase timeline の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Louisiana Purchase",
        "organization": "Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/milestones/1801-1829/louisiana-purchase"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ルイジアナ買収",
    "summaryJa": "ルイジアナ買収はアメリカ領土拡大史の重要な出来事です。",
    "detailJa": "",
    "keyPointsJa": [
      "時系列の題材",
      "年や出来事を並べる"
    ]
  },
  {
    "factId": "fact_us_promontory_summit",
    "countryId": "US",
    "category": "industry-transport",
    "entityKeys": [
      "us:promontory_summit"
    ],
    "aliases": [
      "transcontinental railroad/Promontory Summit",
      "promontory summit"
    ],
    "statement": "transcontinental railroad/Promontory Summit を event-order-reduce のコード課題で扱う。",
    "detail": "transcontinental railroad/Promontory Summit の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Golden Spike history",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/gosp/learn/historyculture/index.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "大陸横断鉄道",
    "summaryJa": "大陸横断鉄道はプロモントリー・サミットと結びつく交通史の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "鉄道史の出来事",
      "イベント順序を扱う"
    ]
  },
  {
    "factId": "fact_us_new_orleans_jazz",
    "countryId": "US",
    "category": "traditional-culture",
    "entityKeys": [
      "us:new_orleans_jazz"
    ],
    "aliases": [
      "jazz origins/New Orleans",
      "new orleans jazz"
    ],
    "statement": "jazz origins/New Orleans を set-dedup-group のコード課題で扱う。",
    "detail": "jazz origins/New Orleans の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "New Orleans Jazz history",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/jazz/learn/historyculture/index.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ニューオーリンズのジャズ",
    "summaryJa": "ジャズはニューオーリンズと深く結びつく音楽文化です。",
    "detailJa": "",
    "keyPointsJa": [
      "音楽文化の題材",
      "重複除去や分類に使える"
    ]
  },
  {
    "factId": "fact_us_wright_flyer_1903",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:wright_flyer_1903"
    ],
    "aliases": [
      "Wright Flyer 1903 flight data",
      "wright flyer 1903"
    ],
    "statement": "Wright Flyer 1903 flight data を nested-condition-trace のコード課題で扱う。",
    "detail": "Wright Flyer 1903 flight data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "The First Flight",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ライトフライヤー",
    "summaryJa": "ライトフライヤーは1903年の飛行で知られる航空史の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "初期航空史の題材",
      "条件判定に使える"
    ]
  },
  {
    "factId": "fact_us_hoover_dam_engineering",
    "countryId": "US",
    "category": "architecture-industry",
    "entityKeys": [
      "us:hoover_dam_engineering"
    ],
    "aliases": [
      "Hoover Dam engineering data",
      "hoover dam engineering"
    ],
    "statement": "Hoover Dam engineering data を multi-step-calculation のコード課題で扱う。",
    "detail": "Hoover Dam engineering data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Hoover Dam FAQ",
        "organization": "Bureau of Reclamation",
        "url": "https://www.usbr.gov/lc/hooverdam/faqs/damfaqs.html"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "フーバーダム",
    "summaryJa": "フーバーダムはアメリカの大規模土木・電力開発の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "ダムの工学データ",
      "計算問題に使える"
    ]
  },
  {
    "factId": "fact_us_usps_state_abbreviation",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:usps_state_abbreviation"
    ],
    "aliases": [
      "USPS state abbreviation lookup",
      "usps state abbreviation"
    ],
    "statement": "USPS state abbreviation lookup を case-normalization/key-mismatch のコード課題で扱う。",
    "detail": "USPS state abbreviation lookup の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Publication 28 Appendix B",
        "organization": "United States Postal Service",
        "url": "https://pe.usps.com/text/pub28/28apb.htm"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "USPS州略称",
    "summaryJa": "USPSの州略称は州名を短いコードで表すために使われます。",
    "detailJa": "",
    "keyPointsJa": [
      "大文字小文字に注意",
      "辞書検索の題材"
    ]
  },
  {
    "factId": "fact_us_zip_leading_zero",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:zip_leading_zero"
    ],
    "aliases": [
      "ZIP code leading-zero preservation",
      "zip leading zero"
    ],
    "statement": "ZIP code leading-zero preservation を string-vs-integer のコード課題で扱う。",
    "detail": "ZIP code leading-zero preservation の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "ZIP Code history",
        "organization": "United States Postal Service",
        "url": "https://about.usps.com/who/profile/history/zip-code.htm"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ZIPコードの先頭ゼロ",
    "summaryJa": "ZIPコードは文字列として扱うことで先頭ゼロを保てます。",
    "detailJa": "",
    "keyPointsJa": [
      "数値化するとゼロが落ちる",
      "文字列処理が安全"
    ]
  },
  {
    "factId": "fact_us_us_date_parsing",
    "countryId": "US",
    "category": "administration-time",
    "entityKeys": [
      "us:us_date_parsing"
    ],
    "aliases": [
      "MM/DD/YYYY parsing",
      "us date parsing"
    ],
    "statement": "MM/DD/YYYY parsing を date-field-order のコード課題で扱う。",
    "detail": "MM/DD/YYYY parsing の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Time and Date FAQs",
        "organization": "NIST",
        "url": "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-and-date-faqs"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ式日付表記",
    "summaryJa": "アメリカでは月・日・年の順で日付を書く形式が使われます。",
    "detailJa": "",
    "keyPointsJa": [
      "月と日の順序が重要",
      "日付解析のバグになりやすい"
    ]
  },
  {
    "factId": "fact_us_us_time_zone_mapping",
    "countryId": "US",
    "category": "geography-time",
    "entityKeys": [
      "us:us_time_zone_mapping"
    ],
    "aliases": [
      "US time-zone mapping",
      "us time zone mapping"
    ],
    "statement": "US time-zone mapping を timezone-key-offset のコード課題で扱う。",
    "detail": "US time-zone mapping の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Time Zones",
        "organization": "U.S. Department of Transportation",
        "url": "https://www.transportation.gov/regulations/time-zones"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカのタイムゾーン",
    "summaryJa": "アメリカでは地域ごとに異なるタイムゾーンが使われます。",
    "detailJa": "",
    "keyPointsJa": [
      "地域と時差の対応が重要",
      "キーの取り違えに注意"
    ]
  },
  {
    "factId": "fact_us_nanp_phone_format",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:nanp_phone_format"
    ],
    "aliases": [
      "North American phone formatting",
      "nanp phone format"
    ],
    "statement": "North American phone formatting を digit-normalization のコード課題で扱う。",
    "detail": "North American phone formatting の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "North American Numbering Plan",
        "organization": "Federal Communications Commission",
        "url": "https://www.fcc.gov/general/north-american-numbering-plan"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "北米電話番号",
    "summaryJa": "北米の電話番号は桁数や区切りを整えて表示します。",
    "detailJa": "",
    "keyPointsJa": [
      "数字だけを取り出す",
      "整形ルールを確認する"
    ]
  },
  {
    "factId": "fact_us_house_composition",
    "countryId": "US",
    "category": "politics",
    "entityKeys": [
      "us:house_composition"
    ],
    "aliases": [
      "House of Representatives composition",
      "house composition"
    ],
    "statement": "House of Representatives composition を object-property のコード課題で扱う。",
    "detail": "House of Representatives composition の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "The House Explained",
        "organization": "U.S. House of Representatives",
        "url": "https://www.house.gov/the-house-explained"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ下院",
    "summaryJa": "アメリカ下院は連邦議会を構成する一院です。",
    "detailJa": "",
    "keyPointsJa": [
      "連邦議会の一院",
      "議席数を扱う"
    ]
  },
  {
    "factId": "fact_us_federal_state_structure",
    "countryId": "US",
    "category": "politics",
    "entityKeys": [
      "us:federal_state_structure"
    ],
    "aliases": [
      "federal/state government structure",
      "federal state structure"
    ],
    "statement": "federal/state government structure を nested-object のコード課題で扱う。",
    "detail": "federal/state government structure の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "State governments",
        "organization": "USAGov",
        "url": "https://www.usa.gov/state-governments"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "連邦政府と州政府",
    "summaryJa": "アメリカでは連邦政府と州政府が異なる役割を持ちます。",
    "detailJa": "",
    "keyPointsJa": [
      "政府構造の題材",
      "入れ子データに向く"
    ]
  },
  {
    "factId": "fact_us_statue_liberty_france",
    "countryId": "US",
    "category": "international-symbol",
    "entityKeys": [
      "us:statue_liberty_france"
    ],
    "aliases": [
      "Statue of Liberty/France connection",
      "statue liberty france"
    ],
    "statement": "Statue of Liberty/France connection を strict-equality のコード課題で扱う。",
    "detail": "Statue of Liberty/France connection の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Statue of Liberty history",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/stli/learn/historyculture/index.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "自由の女神像",
    "summaryJa": "自由の女神像はフランスとの関係を持つアメリカの象徴です。",
    "detailJa": "",
    "keyPointsJa": [
      "国際的な贈り物の題材",
      "厳密比較に使える"
    ]
  },
  {
    "factId": "fact_us_liberty_bell_inscription",
    "countryId": "US",
    "category": "national-symbol",
    "entityKeys": [
      "us:liberty_bell_inscription"
    ],
    "aliases": [
      "Liberty Bell inscription/symbolism",
      "liberty bell inscription"
    ],
    "statement": "Liberty Bell inscription/symbolism を string-includes のコード課題で扱う。",
    "detail": "Liberty Bell inscription/symbolism の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Liberty Bell",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/inde/learn/historyculture/stories-libertybell.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "自由の鐘",
    "summaryJa": "自由の鐘はアメリカの独立や自由の象徴として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "刻まれた文言が題材",
      "文字列検索に使える"
    ]
  },
  {
    "factId": "fact_us_yosemite_world_heritage",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:yosemite_world_heritage"
    ],
    "aliases": [
      "Yosemite World Heritage",
      "yosemite world heritage"
    ],
    "statement": "Yosemite World Heritage を array-index のコード課題で扱う。",
    "detail": "Yosemite World Heritage の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Yosemite National Park",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/308/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ヨセミテ国立公園",
    "summaryJa": "ヨセミテ国立公園は世界遺産として知られる自然景観の場所です。",
    "detailJa": "",
    "keyPointsJa": [
      "自然遺産の題材",
      "配列アクセスに使える"
    ]
  },
  {
    "factId": "fact_us_mesa_verde_dwellings",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:mesa_verde_dwellings"
    ],
    "aliases": [
      "Mesa Verde cliff dwellings",
      "mesa verde dwellings"
    ],
    "statement": "Mesa Verde cliff dwellings を numeric-comparison のコード課題で扱う。",
    "detail": "Mesa Verde cliff dwellings の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Mesa Verde National Park",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/27/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "メサ・ヴェルデ",
    "summaryJa": "メサ・ヴェルデは崖住居で知られる世界遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "文化遺産の題材",
      "数値比較に使える"
    ]
  },
  {
    "factId": "fact_us_george_washington_presidency",
    "countryId": "US",
    "category": "literature-person",
    "entityKeys": [
      "us:george_washington_presidency"
    ],
    "aliases": [
      "George Washington first presidency context",
      "george washington presidency"
    ],
    "statement": "George Washington first presidency context を template-literal のコード課題で扱う。",
    "detail": "George Washington first presidency context の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "George Washington",
        "organization": "The White House",
        "url": "https://www.whitehouse.gov/about-the-white-house/presidents/george-washington/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "和紙の伝統",
    "summaryJa": "和紙は日本の伝統的な紙文化です。",
    "detailJa": "",
    "keyPointsJa": [
      "伝統工芸の題材",
      "種類や地域を分類できる"
    ]
  },
  {
    "factId": "fact_us_hemingway_nobel_literature",
    "countryId": "US",
    "category": "nobel-literature",
    "entityKeys": [
      "us:hemingway_nobel_literature"
    ],
    "aliases": [
      "Ernest Hemingway Nobel Literature",
      "hemingway nobel literature"
    ],
    "statement": "Ernest Hemingway Nobel Literature を object-destructuring のコード課題で扱う。",
    "detail": "Ernest Hemingway Nobel Literature の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Ernest Hemingway facts",
        "organization": "Nobel Prize",
        "url": "https://www.nobelprize.org/prizes/literature/1954/hemingway/facts/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "アーネスト・ヘミングウェイ",
    "summaryJa": "アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です。",
    "detailJa": "",
    "keyPointsJa": [
      "文学賞の題材",
      "オブジェクト分割代入に使える"
    ]
  },
  {
    "factId": "fact_us_denali_elevation",
    "countryId": "US",
    "category": "geography-nature",
    "entityKeys": [
      "us:denali_elevation"
    ],
    "aliases": [
      "Denali geographic elevation context",
      "denali elevation"
    ],
    "statement": "Denali geographic elevation context を Math.max/comparison のコード課題で扱う。",
    "detail": "Denali geographic elevation context の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Denali",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/dena/learn/nature/denali.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "デナリ",
    "summaryJa": "デナリはアメリカの高峰として知られる地理の題材です。",
    "detailJa": "",
    "keyPointsJa": [
      "標高比較の題材",
      "最大値判定に使える"
    ]
  },
  {
    "factId": "fact_us_golden_gate_bridge",
    "countryId": "US",
    "category": "architecture",
    "entityKeys": [
      "us:golden_gate_bridge"
    ],
    "aliases": [
      "Golden Gate Bridge data",
      "golden gate bridge"
    ],
    "statement": "Golden Gate Bridge data を Object.values のコード課題で扱う。",
    "detail": "Golden Gate Bridge data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Golden Gate Bridge history",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/goga/learn/historyculture/bridge-history.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ゴールデンゲートブリッジ",
    "summaryJa": "ゴールデンゲートブリッジはサンフランシスコの橋として知られます。",
    "detailJa": "",
    "keyPointsJa": [
      "橋のデータを扱う",
      "値の取り出しに使える"
    ]
  },
  {
    "factId": "fact_us_alaska_purchase_timeline",
    "countryId": "US",
    "category": "international-history",
    "entityKeys": [
      "us:alaska_purchase_timeline"
    ],
    "aliases": [
      "Alaska Purchase timeline",
      "alaska purchase timeline"
    ],
    "statement": "Alaska Purchase timeline を sort-filter-timeline のコード課題で扱う。",
    "detail": "Alaska Purchase timeline の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Alaska Purchase",
        "organization": "Office of the Historian, U.S. Department of State",
        "url": "https://history.state.gov/milestones/1866-1898/alaska-purchase"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "アラスカ購入",
    "summaryJa": "アラスカ購入はアメリカの領土史に関する出来事です。",
    "detailJa": "",
    "keyPointsJa": [
      "時系列の題材",
      "購入年などを扱う"
    ]
  },
  {
    "factId": "fact_us_lewis_clark_route",
    "countryId": "US",
    "category": "international-history",
    "entityKeys": [
      "us:lewis_clark_route"
    ],
    "aliases": [
      "Lewis and Clark expedition route",
      "lewis clark route"
    ],
    "statement": "Lewis and Clark expedition route を reduce-route-trace のコード課題で扱う。",
    "detail": "Lewis and Clark expedition route の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Lewis and Clark Trail",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/lecl/index.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ルイス・クラーク探検隊",
    "summaryJa": "ルイス・クラーク探検隊は西方探検の経路で扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "経路追跡の題材",
      "reduce処理に向く"
    ]
  },
  {
    "factId": "fact_us_san_antonio_missions",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:san_antonio_missions"
    ],
    "aliases": [
      "San Antonio Missions",
      "san antonio missions"
    ],
    "statement": "San Antonio Missions を filter-map のコード課題で扱う。",
    "detail": "San Antonio Missions の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "San Antonio Missions",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/1466/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "サンアントニオ・ミッションズ",
    "summaryJa": "サンアントニオ・ミッションズは世界遺産として扱われる史跡群です。",
    "detailJa": "",
    "keyPointsJa": [
      "文化遺産の題材",
      "filterとmapに使える"
    ]
  },
  {
    "factId": "fact_us_beale_street_blues",
    "countryId": "US",
    "category": "traditional-culture",
    "entityKeys": [
      "us:beale_street_blues"
    ],
    "aliases": [
      "blues music/Beale Street context",
      "beale street blues"
    ],
    "statement": "blues music/Beale Street context を group-count-reduce のコード課題で扱う。",
    "detail": "blues music/Beale Street context の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Beale Street Historic District",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/places/beale-street-historic-district.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ビール・ストリートとブルース",
    "summaryJa": "ビール・ストリートはブルース音楽の文脈で知られる場所です。",
    "detailJa": "",
    "keyPointsJa": [
      "音楽文化の題材",
      "分類と集計に使える"
    ]
  },
  {
    "factId": "fact_us_voyager_pale_blue_dot",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:voyager_pale_blue_dot"
    ],
    "aliases": [
      "Voyager 1 Pale Blue Dot",
      "voyager pale blue dot"
    ],
    "statement": "Voyager 1 Pale Blue Dot を nested-object-trace のコード課題で扱う。",
    "detail": "Voyager 1 Pale Blue Dot の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Voyager",
        "organization": "NASA Science",
        "url": "https://science.nasa.gov/mission/voyager/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ボイジャー1号",
    "summaryJa": "ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機です。",
    "detailJa": "",
    "keyPointsJa": [
      "宇宙探査の題材",
      "入れ子オブジェクトを追う"
    ]
  },
  {
    "factId": "fact_us_gps_segments",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:gps_segments"
    ],
    "aliases": [
      "GPS system segments",
      "gps segments"
    ],
    "statement": "GPS system segments を map-filter-summary のコード課題で扱う。",
    "detail": "GPS system segments の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "GPS system segments",
        "organization": "GPS.gov",
        "url": "https://www.gps.gov/systems/gps/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "GPSの構成要素",
    "summaryJa": "GPSは複数のセグメントで構成される測位システムです。",
    "detailJa": "",
    "keyPointsJa": [
      "システム構成の題材",
      "map/filterに使える"
    ]
  },
  {
    "factId": "fact_us_brooklyn_bridge_structure",
    "countryId": "US",
    "category": "architecture-transport",
    "entityKeys": [
      "us:brooklyn_bridge_structure"
    ],
    "aliases": [
      "Brooklyn Bridge opening/structure data",
      "brooklyn bridge structure"
    ],
    "statement": "Brooklyn Bridge opening/structure data を multi-step-map-reduce のコード課題で扱う。",
    "detail": "Brooklyn Bridge opening/structure data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Brooklyn Bridge",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/places/brooklyn-bridge.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ブルックリン橋",
    "summaryJa": "ブルックリン橋は開通年や構造で扱われる橋です。",
    "detailJa": "",
    "keyPointsJa": [
      "交通建築の題材",
      "複数データの集計に使える"
    ]
  },
  {
    "factId": "fact_us_ampm_noon_midnight",
    "countryId": "US",
    "category": "administration-time",
    "entityKeys": [
      "us:ampm_noon_midnight"
    ],
    "aliases": [
      "12-hour AM/PM conversion",
      "ampm noon midnight"
    ],
    "statement": "12-hour AM/PM conversion を noon-midnight-boundary のコード課題で扱う。",
    "detail": "12-hour AM/PM conversion の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Time and Frequency FAQs",
        "organization": "NIST",
        "url": "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-and-frequency-faqs"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "12時間表記のAM/PM変換",
    "summaryJa": "12時間表記では正午と真夜中の扱いが特に重要です。",
    "detailJa": "",
    "keyPointsJa": [
      "12 AMと12 PMに注意",
      "境界条件の題材"
    ]
  },
  {
    "factId": "fact_us_fahrenheit_conversion",
    "countryId": "US",
    "category": "geography-weather",
    "entityKeys": [
      "us:fahrenheit_conversion"
    ],
    "aliases": [
      "Fahrenheit display/conversion",
      "fahrenheit conversion"
    ],
    "statement": "Fahrenheit display/conversion を conversion-precedence のコード課題で扱う。",
    "detail": "Fahrenheit display/conversion の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Temperature",
        "organization": "National Weather Service",
        "url": "https://www.weather.gov/jetstream/temp"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "華氏温度",
    "summaryJa": "アメリカでは気温表示に華氏を使う場面があります。",
    "detailJa": "",
    "keyPointsJa": [
      "摂氏との変換が必要",
      "演算順序に注意"
    ]
  },
  {
    "factId": "fact_us_usps_secondary_address",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:usps_secondary_address"
    ],
    "aliases": [
      "USPS apartment/suite address parsing",
      "usps secondary address"
    ],
    "statement": "USPS apartment/suite address parsing を tokenization-order のコード課題で扱う。",
    "detail": "USPS apartment/suite address parsing の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Publication 28",
        "organization": "United States Postal Service",
        "url": "https://pe.usps.com/text/pub28/welcome.htm"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "USPSの部屋番号表記",
    "summaryJa": "アメリカの住所ではアパートやスイート番号の表記順が重要です。",
    "detailJa": "",
    "keyPointsJa": [
      "住所解析の題材",
      "トークン順序に注意"
    ]
  },
  {
    "factId": "fact_us_zip_plus4_validation",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:zip_plus4_validation"
    ],
    "aliases": [
      "ZIP+4 validation",
      "zip plus4 validation"
    ],
    "statement": "ZIP+4 validation を regex-optional-suffix のコード課題で扱う。",
    "detail": "ZIP+4 validation の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "ZIP Code history",
        "organization": "United States Postal Service",
        "url": "https://about.usps.com/who/profile/history/zip-code.htm"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ZIP+4形式",
    "summaryJa": "ZIP+4は基本のZIPコードに4桁を追加する形式です。",
    "detailJa": "",
    "keyPointsJa": [
      "追加4桁は任意",
      "正規表現の題材"
    ]
  },
  {
    "factId": "fact_us_state_territory_dc_model",
    "countryId": "US",
    "category": "administration",
    "entityKeys": [
      "us:state_territory_dc_model"
    ],
    "aliases": [
      "states/territories/DC data model",
      "state territory dc model"
    ],
    "statement": "states/territories/DC data model を enum-category-mismatch のコード課題で扱う。",
    "detail": "states/territories/DC data model の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Publication 28 Appendix B",
        "organization": "United States Postal Service",
        "url": "https://pe.usps.com/text/pub28/28apb.htm"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "州・準州・DCの分類",
    "summaryJa": "アメリカの住所データでは州、準州、DCを区別して扱います。",
    "detailJa": "",
    "keyPointsJa": [
      "分類の違いが重要",
      "enum設計の題材"
    ]
  },
  {
    "factId": "fact_us_bill_of_rights_freedoms",
    "countryId": "US",
    "category": "politics-thought",
    "entityKeys": [
      "us:bill_of_rights_freedoms"
    ],
    "aliases": [
      "Bill of Rights amendments/freedoms",
      "bill of rights freedoms"
    ],
    "statement": "Bill of Rights amendments/freedoms を dict-plus-membership のコード課題で扱う。",
    "detail": "Bill of Rights amendments/freedoms の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Bill of Rights",
        "organization": "National Archives",
        "url": "https://www.archives.gov/founding-docs/bill-of-rights"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "権利章典",
    "summaryJa": "権利章典はアメリカ憲法の修正条項として基本的権利を示します。",
    "detailJa": "",
    "keyPointsJa": [
      "修正条項の題材",
      "含まれる自由を確認する"
    ]
  },
  {
    "factId": "fact_us_toni_morrison_nobel",
    "countryId": "US",
    "category": "nobel-literature",
    "entityKeys": [
      "us:toni_morrison_nobel"
    ],
    "aliases": [
      "Toni Morrison Nobel Literature",
      "toni morrison nobel"
    ],
    "statement": "Toni Morrison Nobel Literature を list-plus-sort-key のコード課題で扱う。",
    "detail": "Toni Morrison Nobel Literature の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Toni Morrison facts",
        "organization": "Nobel Prize",
        "url": "https://www.nobelprize.org/prizes/literature/1993/morrison/facts/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "トニ・モリスン",
    "summaryJa": "トニ・モリスンはノーベル文学賞で知られるアメリカの作家です。",
    "detailJa": "",
    "keyPointsJa": [
      "文学賞の題材",
      "人物と受賞情報を扱う"
    ]
  },
  {
    "factId": "fact_us_great_seal_motto",
    "countryId": "US",
    "category": "national-symbol",
    "entityKeys": [
      "us:great_seal_motto"
    ],
    "aliases": [
      "Great Seal/E-Pluribus-Unum",
      "great seal motto"
    ],
    "statement": "Great Seal/E-Pluribus-Unum を alias-plus-string-membership のコード課題で扱う。",
    "detail": "Great Seal/E-Pluribus-Unum の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Great Seal",
        "organization": "U.S. Department of State",
        "url": "https://www.state.gov/the-great-seal-of-the-united-states/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ合衆国の国璽",
    "summaryJa": "アメリカ合衆国の国璽には国の標語や象徴が含まれます。",
    "detailJa": "",
    "keyPointsJa": [
      "国の象徴の題材",
      "別名や標語を扱う"
    ]
  },
  {
    "factId": "fact_us_everglades_ecosystem",
    "countryId": "US",
    "category": "world-heritage-nature",
    "entityKeys": [
      "us:everglades_ecosystem"
    ],
    "aliases": [
      "Everglades ecosystem/site data",
      "everglades ecosystem"
    ],
    "statement": "Everglades ecosystem/site data を nested-filter-group-sort のコード課題で扱う。",
    "detail": "Everglades ecosystem/site data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Everglades National Park",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/76/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "エバーグレーズ",
    "summaryJa": "エバーグレーズは湿地生態系で知られる世界遺産です。",
    "detailJa": "",
    "keyPointsJa": [
      "自然遺産の題材",
      "生態系データを扱う"
    ]
  },
  {
    "factId": "fact_us_hubble_timeline",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:hubble_timeline"
    ],
    "aliases": [
      "Hubble launch/servicing timeline",
      "hubble timeline"
    ],
    "statement": "Hubble launch/servicing timeline を timeline-filter-transform のコード課題で扱う。",
    "detail": "Hubble launch/servicing timeline の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Hubble Space Telescope",
        "organization": "NASA Science",
        "url": "https://science.nasa.gov/mission/hubble/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ハッブル宇宙望遠鏡",
    "summaryJa": "ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "宇宙科学の題材",
      "タイムライン処理に使える"
    ]
  },
  {
    "factId": "fact_us_interstate_highway_system",
    "countryId": "US",
    "category": "industry-transport",
    "entityKeys": [
      "us:interstate_highway_system"
    ],
    "aliases": [
      "Interstate Highway System route data",
      "interstate highway system"
    ],
    "statement": "Interstate Highway System route data を aggregate-sort-summary のコード課題で扱う。",
    "detail": "Interstate Highway System route data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Interstate Highway System history",
        "organization": "Federal Highway Administration",
        "url": "https://www.fhwa.dot.gov/interstate/history.cfm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "州間高速道路システム",
    "summaryJa": "州間高速道路システムはアメリカの広域交通網です。",
    "detailJa": "",
    "keyPointsJa": [
      "道路網の題材",
      "路線データを集計する"
    ]
  },
  {
    "factId": "fact_us_federal_holiday_observed",
    "countryId": "US",
    "category": "administration-time",
    "entityKeys": [
      "us:federal_holiday_observed"
    ],
    "aliases": [
      "federal holiday observed-date rule",
      "federal holiday observed"
    ],
    "statement": "federal holiday observed-date rule を weekend-boundary のコード課題で扱う。",
    "detail": "federal holiday observed-date rule の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Federal Holidays",
        "organization": "U.S. Office of Personnel Management",
        "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "連邦祝日の振替規則",
    "summaryJa": "連邦祝日は曜日によって振替日を考える場合があります。",
    "detailJa": "",
    "keyPointsJa": [
      "週末境界が重要",
      "日付処理の題材"
    ]
  },
  {
    "factId": "fact_us_mile_foot_conversion",
    "countryId": "US",
    "category": "industry-standards",
    "entityKeys": [
      "us:mile_foot_conversion"
    ],
    "aliases": [
      "US customary mile/foot conversion",
      "mile foot conversion"
    ],
    "statement": "US customary mile/foot conversion を unit-conversion-boundary のコード課題で扱う。",
    "detail": "US customary mile/foot conversion の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "SI Units",
        "organization": "NIST",
        "url": "https://www.nist.gov/pml/owm/metric-si/si-units"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "マイルとフィート",
    "summaryJa": "アメリカ慣用単位ではマイルやフィートを使う場面があります。",
    "detailJa": "",
    "keyPointsJa": [
      "単位変換の題材",
      "換算値の境界に注意"
    ]
  },
  {
    "factId": "fact_us_dollar_cent_decimal",
    "countryId": "US",
    "category": "industry-finance",
    "entityKeys": [
      "us:dollar_cent_decimal"
    ],
    "aliases": [
      "dollar/cents monetary calculation",
      "dollar cent decimal"
    ],
    "statement": "dollar/cents monetary calculation を decimal-rounding-format のコード課題で扱う。",
    "detail": "dollar/cents monetary calculation の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Currency and coins",
        "organization": "U.S. Department of the Treasury",
        "url": "https://home.treasury.gov/services/currency-and-coins"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "python"
    ],
    "relatedFactIds": [],
    "titleJa": "ドルとセント",
    "summaryJa": "ドルとセントの計算では丸め誤差や表示形式に注意が必要です。",
    "detailJa": "",
    "keyPointsJa": [
      "小数計算の題材",
      "金額表示では丸めが重要"
    ]
  },
  {
    "factId": "fact_us_mlk_nobel_peace",
    "countryId": "US",
    "category": "nobel-thought",
    "entityKeys": [
      "us:mlk_nobel_peace"
    ],
    "aliases": [
      "Martin Luther King Jr Nobel Peace Prize",
      "mlk nobel peace"
    ],
    "statement": "Martin Luther King Jr Nobel Peace Prize を find-plus-template のコード課題で扱う。",
    "detail": "Martin Luther King Jr Nobel Peace Prize の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Martin Luther King Jr. facts",
        "organization": "Nobel Prize",
        "url": "https://www.nobelprize.org/prizes/peace/1964/king/facts/"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "キング牧師とノーベル平和賞",
    "summaryJa": "キング牧師はノーベル平和賞で知られる公民権運動の人物です。",
    "detailJa": "",
    "keyPointsJa": [
      "平和賞の題材",
      "検索と文字列生成に使える"
    ]
  },
  {
    "factId": "fact_us_first_amendment_freedoms",
    "countryId": "US",
    "category": "religion-thought",
    "entityKeys": [
      "us:first_amendment_freedoms"
    ],
    "aliases": [
      "First Amendment five freedoms",
      "first amendment freedoms"
    ],
    "statement": "First Amendment five freedoms を Set-plus-membership のコード課題で扱う。",
    "detail": "First Amendment five freedoms の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Bill of Rights transcript",
        "organization": "National Archives",
        "url": "https://www.archives.gov/founding-docs/bill-of-rights-transcript"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "憲法修正第1条",
    "summaryJa": "憲法修正第1条は複数の自由を示す条文として扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "五つの自由が題材",
      "Setの包含判定に使える"
    ]
  },
  {
    "factId": "fact_us_mount_rushmore_presidents",
    "countryId": "US",
    "category": "national-symbol-architecture",
    "entityKeys": [
      "us:mount_rushmore_presidents"
    ],
    "aliases": [
      "Mount Rushmore represented presidents",
      "mount rushmore presidents"
    ],
    "statement": "Mount Rushmore represented presidents を array-plus-object のコード課題で扱う。",
    "detail": "Mount Rushmore represented presidents の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Mount Rushmore history",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/moru/learn/historyculture/index.htm"
      }
    ],
    "allowedWorlds": [
      "decode"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ラシュモア山",
    "summaryJa": "ラシュモア山には複数の大統領像が刻まれています。",
    "detailJa": "",
    "keyPointsJa": [
      "大統領名の集合を扱う",
      "配列とオブジェクトに使える"
    ]
  },
  {
    "factId": "fact_us_chaco_culture_site",
    "countryId": "US",
    "category": "world-heritage",
    "entityKeys": [
      "us:chaco_culture_site"
    ],
    "aliases": [
      "Chaco Culture site data",
      "chaco culture site"
    ],
    "statement": "Chaco Culture site data を nested-filter-group-sort のコード課題で扱う。",
    "detail": "Chaco Culture site data の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Chaco Culture",
        "organization": "UNESCO World Heritage Centre",
        "url": "https://whc.unesco.org/en/list/353/"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "チャコ文化",
    "summaryJa": "チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡です。",
    "detailJa": "",
    "keyPointsJa": [
      "文化遺産の題材",
      "入れ子データ処理に使える"
    ]
  },
  {
    "factId": "fact_us_erie_canal_route",
    "countryId": "US",
    "category": "industry-transport",
    "entityKeys": [
      "us:erie_canal_route"
    ],
    "aliases": [
      "Erie Canal route/timeline",
      "erie canal route"
    ],
    "statement": "Erie Canal route/timeline を graph-route-reduce のコード課題で扱う。",
    "detail": "Erie Canal route/timeline の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Erie Canalway",
        "organization": "National Park Service",
        "url": "https://www.nps.gov/erie/index.htm"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "エリー運河",
    "summaryJa": "エリー運河はアメリカの交通史で重要な運河です。",
    "detailJa": "",
    "keyPointsJa": [
      "運河ルートの題材",
      "経路計算に使える"
    ]
  },
  {
    "factId": "fact_us_arpanet_first_message",
    "countryId": "US",
    "category": "invention-science",
    "entityKeys": [
      "us:arpanet_first_message"
    ],
    "aliases": [
      "ARPANET first-message log context",
      "arpanet first message"
    ],
    "statement": "ARPANET first-message log context を log-filter-reduce のコード課題で扱う。",
    "detail": "ARPANET first-message log context の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "ARPANET",
        "organization": "DARPA",
        "url": "https://www.darpa.mil/about-us/timeline/arpanet"
      }
    ],
    "allowedWorlds": [
      "execute"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ARPANET",
    "summaryJa": "ARPANETは初期インターネット史で知られるネットワークです。",
    "detailJa": "",
    "keyPointsJa": [
      "最初のメッセージが題材",
      "ログ処理に使える"
    ]
  },
  {
    "factId": "fact_us_federal_fiscal_year_boundary",
    "countryId": "US",
    "category": "administration-time",
    "entityKeys": [
      "us:federal_fiscal_year_boundary"
    ],
    "aliases": [
      "US federal fiscal year Oct-1 boundary",
      "federal fiscal year boundary"
    ],
    "statement": "US federal fiscal year Oct-1 boundary を fiscal-year-boundary のコード課題で扱う。",
    "detail": "US federal fiscal year Oct-1 boundary の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "Circular A-11",
        "organization": "Office of Management and Budget",
        "url": "https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "アメリカ連邦会計年度",
    "summaryJa": "アメリカ連邦会計年度は10月1日に始まる年度として扱われます。",
    "detailJa": "",
    "keyPointsJa": [
      "10月1日が境界",
      "日付境界の題材"
    ]
  },
  {
    "factId": "fact_us_washington_dc_disambiguation",
    "countryId": "US",
    "category": "geography-administration",
    "entityKeys": [
      "us:washington_dc_disambiguation"
    ],
    "aliases": [
      "Washington state vs Washington-DC",
      "washington dc disambiguation"
    ],
    "statement": "Washington state vs Washington-DC を entity-disambiguation のコード課題で扱う。",
    "detail": "Washington state vs Washington-DC の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "District of Columbia QuickFacts",
        "organization": "U.S. Census Bureau",
        "url": "https://www.census.gov/quickfacts/fact/table/DC/PST045225"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "和紙の伝統",
    "summaryJa": "和紙は日本の伝統的な紙文化です。",
    "detailJa": "",
    "keyPointsJa": [
      "伝統工芸の題材",
      "種類や地域を分類できる"
    ]
  },
  {
    "factId": "fact_us_hawaii_unicode_name",
    "countryId": "US",
    "category": "language-geography",
    "entityKeys": [
      "us:hawaii_unicode_name"
    ],
    "aliases": [
      "Hawaiʻi Unicode name normalization",
      "hawaii unicode name"
    ],
    "statement": "Hawaiʻi Unicode name normalization を unicode-normalization のコード課題で扱う。",
    "detail": "Hawaiʻi Unicode name normalization の事実は問題文とコード内データに表示し、解答はプログラミング処理で導く。",
    "factStatus": "verified",
    "sourceRefs": [
      {
        "title": "About Hawaii",
        "organization": "State of Hawaii",
        "url": "https://portal.ehawaii.gov/page/about_hawaii/"
      }
    ],
    "allowedWorlds": [
      "debug"
    ],
    "allowedLanguageIds": [
      "javascript"
    ],
    "relatedFactIds": [],
    "titleJa": "ハワイ名称のUnicode正規化",
    "summaryJa": "Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要です。",
    "detailJa": "",
    "keyPointsJa": [
      "オキナを含む表記",
      "Unicode正規化の題材"
    ]
  }
];

function validateSourceRef(ref, index, factId, issues) {
  if (typeof ref === 'string') {
    try {
      const url = new URL(ref);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error('bad protocol');
    } catch {
      issues.push({ factId, rule: 'invalid-sourceRef-url', msg: `sourceRefs[${index}] must be an http(s) URL` });
    }
    return;
  }
  if (!ref || typeof ref !== 'object' || Array.isArray(ref)) {
    issues.push({ factId, rule: 'invalid-sourceRef-shape', msg: `sourceRefs[${index}] must be a URL string or object` });
    return;
  }
  try {
    const url = new URL(ref.url);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error('bad protocol');
  } catch {
    issues.push({ factId, rule: 'invalid-sourceRef-url', msg: `sourceRefs[${index}].url must be an http(s) URL` });
  }
  if (!ref.title && !ref.organization) {
    issues.push({ factId, rule: 'invalid-sourceRef-shape', msg: `sourceRefs[${index}] needs title or organization metadata` });
  }
}

export function validateCountryFacts(facts = COUNTRY_FACTS) {
  const issues = [];
  const factIds = new Set();
  const entityKeys = new Map();
  for (const fact of facts) {
    const factId = fact?.factId || '(missing factId)';
    if (!fact?.factId) { issues.push({ factId, rule: 'missing-factId', msg: 'Fact needs factId' }); continue; }
    if (factIds.has(fact.factId)) issues.push({ factId, rule: 'duplicate-factId', msg: 'Duplicate factId' });
    factIds.add(fact.factId);
    for (const key of ['entityKeys', 'aliases', 'sourceRefs', 'allowedWorlds', 'allowedLanguageIds', 'relatedFactIds']) {
      if (!Array.isArray(fact[key])) issues.push({ factId, rule: 'invalid-fact-shape', msg: `${key} must be an array` });
    }
    for (const key of fact.entityKeys || []) {
      if (entityKeys.has(key) && entityKeys.get(key) !== fact.factId) issues.push({ factId, rule: 'duplicate-entityKey', msg: `entityKey ${key} already used by ${entityKeys.get(key)}` });
      entityKeys.set(key, fact.factId);
    }
    if (!Object.values(FACT_STATUS).includes(fact.factStatus)) issues.push({ factId, rule: 'invalid-factStatus', msg: 'Unknown factStatus' });
    if (fact?.factStatus === FACT_STATUS.VERIFIED && (!Array.isArray(fact.sourceRefs) || fact.sourceRefs.length === 0)) issues.push({ factId, rule: 'verified-missing-sourceRefs', msg: 'verified facts must include sourceRefs' });
    if (Array.isArray(fact?.sourceRefs)) fact.sourceRefs.forEach((ref, index) => validateSourceRef(ref, index, factId, issues));
  }
  return issues;
}

export const COUNTRY_FACTS_BY_ID = Object.fromEntries(COUNTRY_FACTS.map(fact => [fact.factId, fact]));
