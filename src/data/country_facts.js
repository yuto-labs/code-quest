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
    "summaryJa": "日本国憲法は、天皇を日本国と日本国民統合の象徴と位置づけています。",
    "detailJa": "日本国憲法は、天皇を日本国と日本国民統合の象徴と位置づけています。 戦後の日本国憲法では、主権は国民にあるとされ、天皇は政治を決める権力者ではなく象徴として定められました。国事に関する行為も、内閣の助言と承認にもとづいて行われるため、制度上は政治的な判断権と切り離されています。 明治憲法下の天皇像とは異なり、1947年施行の日本国憲法では象徴天皇制が採用されました。第1条は象徴としての地位を、第3条は内閣の助言と承認を、第4条は国政に関する権能を持たないことを示しています。",
    "keyPointsJa": [
      "日本国と日本国民統合の象徴",
      "国政に関する権能を持たない",
      "国事行為には内閣の助言と承認が必要",
      "主権は国民にある"
    ],
    "backgroundJa": "戦後の日本国憲法では、主権は国民にあるとされ、天皇は政治を決める権力者ではなく象徴として定められました。国事に関する行為も、内閣の助言と承認にもとづいて行われるため、制度上は政治的な判断権と切り離されています。",
    "historyJa": "明治憲法下の天皇像とは異なり、1947年施行の日本国憲法では象徴天皇制が採用されました。第1条は象徴としての地位を、第3条は内閣の助言と承認を、第4条は国政に関する権能を持たないことを示しています。",
    "episodeJa": "国会の召集や法律の公布などは「国事行為」と呼ばれます。これは天皇が政治を決めるという意味ではなく、内閣が責任を負う形式的・儀礼的な行為として行われる点が重要です。"
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
    "summaryJa": "日本の国会は衆議院と参議院の二つの議院で構成されています。",
    "detailJa": "日本の国会は衆議院と参議院の二つの議院で構成されています。 二院制は、法律や予算などを一つの議院だけで決めず、異なる任期や選ばれ方を持つ議院で重ねて審議する仕組みです。衆議院は内閣信任や予算などで強い権限を持ち、参議院は解散がないため継続性を持ちます。 日本国憲法第42条は、国会を衆議院と参議院の二院で構成すると定めています。戦前の帝国議会にあった貴族院はなくなり、戦後はどちらの議院も選挙で選ばれる議員によって構成される形になりました。",
    "keyPointsJa": [
      "衆議院と参議院で構成",
      "衆議院には解散がある",
      "参議院には解散がない",
      "二つの議院で審議を重ねる"
    ],
    "backgroundJa": "二院制は、法律や予算などを一つの議院だけで決めず、異なる任期や選ばれ方を持つ議院で重ねて審議する仕組みです。衆議院は内閣信任や予算などで強い権限を持ち、参議院は解散がないため継続性を持ちます。",
    "historyJa": "日本国憲法第42条は、国会を衆議院と参議院の二院で構成すると定めています。戦前の帝国議会にあった貴族院はなくなり、戦後はどちらの議院も選挙で選ばれる議員によって構成される形になりました。",
    "episodeJa": "衆議院議員は任期が短く、解散もあるため、政治の変化を比較的早く反映します。参議院は任期が長く、半数ずつ改選されるため、急な変化をならす役割も持ちます。この違いが二院制を理解する鍵です。"
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
    "detailJa": "湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られます。 湯川秀樹とノーベル賞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本人初のノーベル賞受賞者」という点です。歴史的には「日本人初のノーベル賞受賞者」「理論物理学の業績で知られる」という背景があり、湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本人初のノーベル賞受賞者",
      "理論物理学の業績で知られる",
      "湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られます",
      "学問や文化への貢献が国際的に評価された事例として位置づけられます",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "湯川秀樹とノーベル賞は、湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本人初のノーベル賞受賞者」という点です。",
    "historyJa": "湯川秀樹とノーベル賞を歴史的にみると、「日本人初のノーベル賞受賞者」「理論物理学の業績で知られる」という背景があります。湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "湯川秀樹とノーベル賞について具体的に知っておきたいのは「日本人初のノーベル賞受賞者」と「理論物理学の業績で知られる」です。湯川秀樹は日本人として初めてノーベル賞を受けた科学者として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "日章旗は日本の国旗で、一般に「日の丸」とも呼ばれます。",
    "detailJa": "日章旗は日本の国旗で、一般に「日の丸」とも呼ばれます。 白地に赤い円を置く意匠は、太陽を強く意識した日本の象徴として広く知られています。現在は国旗及び国歌に関する法律で、日章旗が国旗、君が代が国歌と定められています。正式名称と通称を分けて見ると、この題材の意味が分かりやすくなります。 日の丸の意匠は近代以前から船印などに用いられ、明治期には国を示す旗として使われるようになりました。1999年の法律により、日章旗という名称で国旗として明文化され、国の象徴を法律上どう扱うかが整理されました。",
    "keyPointsJa": [
      "正式名称は日章旗",
      "一般には日の丸とも呼ばれる",
      "白地に赤い円の意匠",
      "1999年の法律で国旗と明文化"
    ],
    "backgroundJa": "白地に赤い円を置く意匠は、太陽を強く意識した日本の象徴として広く知られています。現在は国旗及び国歌に関する法律で、日章旗が国旗、君が代が国歌と定められています。正式名称と通称を分けて見ると、この題材の意味が分かりやすくなります。",
    "historyJa": "日の丸の意匠は近代以前から船印などに用いられ、明治期には国を示す旗として使われるようになりました。1999年の法律により、日章旗という名称で国旗として明文化され、国の象徴を法律上どう扱うかが整理されました。",
    "episodeJa": "「日章旗」は法律上の名称で、「日の丸」は赤い円の見た目から定着した通称です。同じ旗を指していても、公式文書では日章旗、日常の会話では日の丸というように、場面によって呼び方が変わる点が特徴です。"
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
    "summaryJa": "日本の広域自治体は、現在47の都道府県で構成されています。",
    "detailJa": "日本の広域自治体は、現在47の都道府県で構成されています。 都道府県は、国と市区町村の間にある広域自治体です。東京の「都」、北海道の「道」、大阪・京都の「府」、その他の「県」は名称が異なりますが、地方行政を担う基本的な単位として機能します。学校、道路、防災、地域行政などにも関わります。 明治維新後、1871年の廃藩置県で藩は県へ置き換えられ、その後に府県の統合や分割が進みました。現在の47都道府県という形は、近代国家として地方制度を整える過程で定着していきました。",
    "keyPointsJa": [
      "現在は47都道府県",
      "1都1道2府43県",
      "廃藩置県後に府県統合が進んだ",
      "国と市区町村の間の広域自治体"
    ],
    "backgroundJa": "都道府県は、国と市区町村の間にある広域自治体です。東京の「都」、北海道の「道」、大阪・京都の「府」、その他の「県」は名称が異なりますが、地方行政を担う基本的な単位として機能します。学校、道路、防災、地域行政などにも関わります。",
    "historyJa": "明治維新後、1871年の廃藩置県で藩は県へ置き換えられ、その後に府県の統合や分割が進みました。現在の47都道府県という形は、近代国家として地方制度を整える過程で定着していきました。",
    "episodeJa": "「1都1道2府43県」と分けて数えると合計47になります。単なる数字ではなく、藩から県へ移った明治期の制度改革を経て、現在の地方自治の枠組みにつながっている点を押さえると理解が深まります。"
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
    "detailJa": "一円硬貨は額面が1円の日本の硬貨です。 一円硬貨は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「最小額面の硬貨」という点です。歴史的には「最小額面の硬貨」「金額表示では数値として確認できる」という背景があり、一円硬貨は額面が1円の日本の硬貨ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "最小額面の硬貨",
      "金額表示では数値として確認できる",
      "一円硬貨は額面が1円の日本の硬貨です",
      "国を表す象徴は、法律や慣習、歴史的な記憶と結びついて理解されます",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "一円硬貨は、一円硬貨は額面が1円の日本の硬貨ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「最小額面の硬貨」という点です。",
    "historyJa": "一円硬貨を歴史的にみると、「最小額面の硬貨」「金額表示では数値として確認できる」という背景があります。一円硬貨は額面が1円の日本の硬貨ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "一円硬貨について具体的に知っておきたいのは「最小額面の硬貨」と「金額表示では数値として確認できる」です。一円硬貨は額面が1円の日本の硬貨ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "東海道新幹線は1964年に開業した日本の高速鉄道路線です。 東海道新幹線は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1964年開業」という点です。歴史的には「1964年開業」「東京と大阪方面を結ぶ主要路線」という背景があり、東海道新幹線は1964年に開業した日本の高速鉄道路線ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "1964年開業",
      "東京と大阪方面を結ぶ主要路線",
      "東海道新幹線は1964年に開業した日本の高速鉄道路線です",
      "人や物の移動を支える交通網の発展を知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "東海道新幹線は、東海道新幹線は1964年に開業した日本の高速鉄道路線ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1964年開業」という点です。",
    "historyJa": "東海道新幹線を歴史的にみると、「1964年開業」「東京と大阪方面を結ぶ主要路線」という背景があります。東海道新幹線は1964年に開業した日本の高速鉄道路線ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "東海道新幹線について具体的に知っておきたいのは「1964年開業」と「東京と大阪方面を結ぶ主要路線」です。東海道新幹線は1964年に開業した日本の高速鉄道路線ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "QR",
    "summaryJa": "QRは日本で開発された二次元です。",
    "detailJa": "QRは日本で開発された二次元です。 QRは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「二次元の一種」という点です。歴史的には「二次元の一種」「文字列やURLなどを表せる」という背景があり、QRは日本で開発された二次元ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "二次元の一種",
      "文字列やURLなどを表せる",
      "QRは日本で開発された二次元です",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "QRは、QRは日本で開発された二次元ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「二次元の一種」という点です。",
    "historyJa": "QRを歴史的にみると、「二次元の一種」「文字列やURLなどを表せる」という背景があります。QRは日本で開発された二次元ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "QRについて具体的に知っておきたいのは「二次元の一種」と「文字列やURLなどを表せる」です。QRは日本で開発された二次元ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "法隆寺地域の仏教建造物は日本の世界遺産として登録されています。 法隆寺地域の仏教建造物は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の世界遺産」という点です。歴史的には「日本の世界遺産」「古い木造建築群として知られる」という背景があり、法隆寺地域の仏教建造物は日本の世界遺産として登録されていますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本の世界遺産",
      "古い木造建築群として知られる",
      "法隆寺地域の仏教建造物は日本の世界遺産として登録されています",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "法隆寺地域の仏教建造物は、法隆寺地域の仏教建造物は日本の世界遺産として登録されていますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の世界遺産」という点です。",
    "historyJa": "法隆寺地域の仏教建造物を歴史的にみると、「日本の世界遺産」「古い木造建築群として知られる」という背景があります。法隆寺地域の仏教建造物は日本の世界遺産として登録されていますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "法隆寺地域の仏教建造物について具体的に知っておきたいのは「日本の世界遺産」と「古い木造建築群として知られる」です。法隆寺地域の仏教建造物は日本の世界遺産として登録されていますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "桜は日本文化で親しまれる花ですが、法定の国花とは断定されません。 桜の文化的象徴性は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化的象徴として親しまれる」という点です。歴史的には「文化的象徴として親しまれる」「法定の国花とは区別する」という背景があり、桜は日本文化で親しまれる花ですが、法定の国花とは断定されませんという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "文化的象徴として親しまれる",
      "法定の国花とは区別する",
      "桜は日本文化で親しまれる花ですが、法定の国花とは断定されません",
      "長く受け継がれてきた表現や行事を、断定しすぎず文化として理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "桜の文化的象徴性は、桜は日本文化で親しまれる花ですが、法定の国花とは断定されませんという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化的象徴として親しまれる」という点です。",
    "historyJa": "桜の文化的象徴性を歴史的にみると、「文化的象徴として親しまれる」「法定の国花とは区別する」という背景があります。桜は日本文化で親しまれる花ですが、法定の国花とは断定されませんという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "桜の文化的象徴性について具体的に知っておきたいのは「文化的象徴として親しまれる」と「法定の国花とは区別する」です。桜は日本文化で親しまれる花ですが、法定の国花とは断定されませんという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "屋久島は自然環境で知られる日本の世界自然遺産です。 屋久島は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の世界自然遺産」という点です。歴史的には「日本の世界自然遺産」「豊かな森林環境で知られる」という背景があり、屋久島は自然環境で知られる日本の世界自然遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本の世界自然遺産",
      "豊かな森林環境で知られる",
      "屋久島は自然環境で知られる日本の世界自然遺産です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "屋久島は、屋久島は自然環境で知られる日本の世界自然遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の世界自然遺産」という点です。",
    "historyJa": "屋久島を歴史的にみると、「日本の世界自然遺産」「豊かな森林環境で知られる」という背景があります。屋久島は自然環境で知られる日本の世界自然遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "屋久島について具体的に知っておきたいのは「日本の世界自然遺産」と「豊かな森林環境で知られる」です。屋久島は自然環境で知られる日本の世界自然遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "白神山地はブナ林で知られる日本の自然遺産です。 白神山地は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ブナ林が特徴」という点です。歴史的には「ブナ林が特徴」「自然環境の保護で知られる」という背景があり、白神山地はブナ林で知られる日本の自然遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "ブナ林が特徴",
      "自然環境の保護で知られる",
      "白神山地はブナ林で知られる日本の自然遺産です",
      "地形や自然環境の特徴を通して地域を理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "白神山地は、白神山地はブナ林で知られる日本の自然遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ブナ林が特徴」という点です。",
    "historyJa": "白神山地を歴史的にみると、「ブナ林が特徴」「自然環境の保護で知られる」という背景があります。白神山地はブナ林で知られる日本の自然遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "白神山地について具体的に知っておきたいのは「ブナ林が特徴」と「自然環境の保護で知られる」です。白神山地はブナ林で知られる日本の自然遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "国会議事堂は日本の国会が開かれる建物です。 国会議事堂は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国会の会議が行われる」という点です。歴史的には「国会の会議が行われる」「政治制度と建築の」という背景があり、国会議事堂は日本の国会が開かれる建物ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "国会の会議が行われる",
      "政治制度と建築の",
      "国会議事堂は日本の国会が開かれる建物です",
      "建物や構造物を通して、社会の制度や技術の変化を知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "国会議事堂は、国会議事堂は日本の国会が開かれる建物ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国会の会議が行われる」という点です。",
    "historyJa": "国会議事堂を歴史的にみると、「国会の会議が行われる」「政治制度と建築の」という背景があります。国会議事堂は日本の国会が開かれる建物ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "国会議事堂について具体的に知っておきたいのは「国会の会議が行われる」と「政治制度と建築の」です。国会議事堂は日本の国会が開かれる建物ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "はやぶさは小惑星イトカワを対象にした日本の探査機です。 はやぶさとイトカワは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小惑星イトカワを探査」という点です。歴史的には「小惑星イトカワを探査」「宇宙科学の」という背景があり、はやぶさは小惑星イトカワを対象にした日本の探査機ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "小惑星イトカワを探査",
      "宇宙科学の",
      "はやぶさは小惑星イトカワを対象にした日本の探査機です",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "はやぶさとイトカワは、はやぶさは小惑星イトカワを対象にした日本の探査機ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小惑星イトカワを探査」という点です。",
    "historyJa": "はやぶさとイトカワを歴史的にみると、「小惑星イトカワを探査」「宇宙科学の」という背景があります。はやぶさは小惑星イトカワを対象にした日本の探査機ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "はやぶさとイトカワについて具体的に知っておきたいのは「小惑星イトカワを探査」と「宇宙科学の」です。はやぶさは小惑星イトカワを対象にした日本の探査機ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "はやぶさ2は小惑星リュウグウを対象にした日本の探査機です。 はやぶさ2とリュウグウは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小惑星リュウグウを探査」という点です。歴史的には「小惑星リュウグウを探査」「サンプルリターンで知られる」という背景があり、はやぶさ2は小惑星リュウグウを対象にした日本の探査機ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "小惑星リュウグウを探査",
      "サンプルリターンで知られる",
      "はやぶさ2は小惑星リュウグウを対象にした日本の探査機です",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "はやぶさ2とリュウグウは、はやぶさ2は小惑星リュウグウを対象にした日本の探査機ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小惑星リュウグウを探査」という点です。",
    "historyJa": "はやぶさ2とリュウグウを歴史的にみると、「小惑星リュウグウを探査」「サンプルリターンで知られる」という背景があります。はやぶさ2は小惑星リュウグウを対象にした日本の探査機ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "はやぶさ2とリュウグウについて具体的に知っておきたいのは「小惑星リュウグウを探査」と「サンプルリターンで知られる」です。はやぶさ2は小惑星リュウグウを対象にした日本の探査機ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "能は役柄や演者の構成を持つ日本の伝統芸能です。 能の役柄は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の伝統芸能」という点です。歴史的には「日本の伝統芸能」「役割の分類を確認できる」という背景があり、能は役柄や演者の構成を持つ日本の伝統芸能ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本の伝統芸能",
      "役割の分類を確認できる",
      "能は役柄や演者の構成を持つ日本の伝統芸能です",
      "長く受け継がれてきた表現や行事を、断定しすぎず文化として理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "能の役柄は、能は役柄や演者の構成を持つ日本の伝統芸能ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本の伝統芸能」という点です。",
    "historyJa": "能の役柄を歴史的にみると、「日本の伝統芸能」「役割の分類を確認できる」という背景があります。能は役柄や演者の構成を持つ日本の伝統芸能ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "能の役柄について具体的に知っておきたいのは「日本の伝統芸能」と「役割の分類を確認できる」です。能は役柄や演者の構成を持つ日本の伝統芸能ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "松尾芭蕉は紀行文「おくのほそ道」で知られる俳人です。 松尾芭蕉とおくのほそ道は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「俳諧の代表的な人物」という点です。歴史的には「俳諧の代表的な人物」「旅の順序を追う」という背景があり、松尾芭蕉は紀行文「おくのほそ道」で知られる俳人ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "俳諧の代表的な人物",
      "旅の順序を追う",
      "松尾芭蕉は紀行文「おくのほそ道」で知られる俳人です",
      "人物や作品を通して、言葉や表現が時代に残る理由を考えることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "松尾芭蕉とおくのほそ道は、松尾芭蕉は紀行文「おくのほそ道」で知られる俳人ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「俳諧の代表的な人物」という点です。",
    "historyJa": "松尾芭蕉とおくのほそ道を歴史的にみると、「俳諧の代表的な人物」「旅の順序を追う」という背景があります。松尾芭蕉は紀行文「おくのほそ道」で知られる俳人ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "松尾芭蕉とおくのほそ道について具体的に知っておきたいのは「俳諧の代表的な人物」と「旅の順序を追う」です。松尾芭蕉は紀行文「おくのほそ道」で知られる俳人ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本語の表記では漢字・ひらがな・カタカナが使われます。 漢字・ひらがな・カタカナは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「複数の文字体系がある」という点です。歴史的には「複数の文字体系がある」「検索では表記差に注意する」という背景があり、日本語の表記では漢字・ひらがな・カタカナが使われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "複数の文字体系がある",
      "検索では表記差に注意する",
      "日本語の表記では漢字・ひらがな・カタカナが使われます",
      "文字や表記の違いを理解し、言葉の成り立ちを考えることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "漢字・ひらがな・カタカナは、日本語の表記では漢字・ひらがな・カタカナが使われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「複数の文字体系がある」という点です。",
    "historyJa": "漢字・ひらがな・カタカナを歴史的にみると、「複数の文字体系がある」「検索では表記差に注意する」という背景があります。日本語の表記では漢字・ひらがな・カタカナが使われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "漢字・ひらがな・カタカナについて具体的に知っておきたいのは「複数の文字体系がある」と「検索では表記差に注意する」です。日本語の表記では漢字・ひらがな・カタカナが使われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本では西暦と元号を対応させて日付を表すことがあります。 日本の元号変換は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「元号には開始年がある」という点です。歴史的には「元号には開始年がある」「境界年のが重要」という背景があり、日本では西暦と元号を対応させて日付を表すことがありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "元号には開始年がある",
      "境界年のが重要",
      "日本では西暦と元号を対応させて日付を表すことがあります",
      "日本の社会や文化を理解するためです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本の元号変換は、日本では西暦と元号を対応させて日付を表すことがありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「元号には開始年がある」という点です。",
    "historyJa": "日本の元号変換を歴史的にみると、「元号には開始年がある」「境界年のが重要」という背景があります。日本では西暦と元号を対応させて日付を表すことがありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本の元号変換について具体的に知っておきたいのは「元号には開始年がある」と「境界年のが重要」です。日本では西暦と元号を対応させて日付を表すことがありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本の住所は広い地域から細かい場所へ進む順で書かれることがあります。 日本の住所表記順は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「都道府県から始まる」という点です。歴史的には「都道府県から始まる」「分割順を間違えやすい」という背景があり、日本の住所は広い地域から細かい場所へ進む順で書かれることがありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "都道府県から始まる",
      "分割順を間違えやすい",
      "日本の住所は広い地域から細かい場所へ進む順で書かれることがあります",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本の住所表記順は、日本の住所は広い地域から細かい場所へ進む順で書かれることがありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「都道府県から始まる」という点です。",
    "historyJa": "日本の住所表記順を歴史的にみると、「都道府県から始まる」「分割順を間違えやすい」という背景があります。日本の住所は広い地域から細かい場所へ進む順で書かれることがありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本の住所表記順について具体的に知っておきたいのは「都道府県から始まる」と「分割順を間違えやすい」です。日本の住所は広い地域から細かい場所へ進む順で書かれることがありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本円の金額表示では桁区切りや記号の扱いが重要です。 日本円の表示は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「円記号や桁区切りを使う」という点です。歴史的には「円記号や桁区切りを使う」「数値と文字列を区別する」という背景があり、日本円の金額表示では桁区切りや記号の扱いが重要ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "円記号や桁区切りを使う",
      "数値と文字列を区別する",
      "日本円の金額表示では桁区切りや記号の扱いが重要です",
      "お金や表示単位を通して、日常生活と制度の関係を理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本円の表示は、日本円の金額表示では桁区切りや記号の扱いが重要ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「円記号や桁区切りを使う」という点です。",
    "historyJa": "日本円の表示を歴史的にみると、「円記号や桁区切りを使う」「数値と文字列を区別する」という背景があります。日本円の金額表示では桁区切りや記号の扱いが重要ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本円の表示について具体的に知っておきたいのは「円記号や桁区切りを使う」と「数値と文字列を区別する」です。日本円の金額表示では桁区切りや記号の扱いが重要ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本の駅名は日本語表記とローマ字表記を併用することがあります。 駅名の日本語・ローマ字表記は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「表記ゆれが起きやすい」という点です。歴史的には「表記ゆれが起きやすい」「検索キーの正規化が重要」という背景があり、日本の駅名は日本語表記とローマ字表記を併用することがありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "表記ゆれが起きやすい",
      "検索キーの正規化が重要",
      "日本の駅名は日本語表記とローマ字表記を併用することがあります",
      "交通の案内で使われる表記の違いを理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "駅名の日本語・ローマ字表記は、日本の駅名は日本語表記とローマ字表記を併用することがありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「表記ゆれが起きやすい」という点です。",
    "historyJa": "駅名の日本語・ローマ字表記を歴史的にみると、「表記ゆれが起きやすい」「検索キーの正規化が重要」という背景があります。日本の駅名は日本語表記とローマ字表記を併用することがありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "駅名の日本語・ローマ字表記について具体的に知っておきたいのは「表記ゆれが起きやすい」と「検索キーの正規化が重要」です。日本の駅名は日本語表記とローマ字表記を併用することがありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "大日本帝国憲法は1889年に公布された日本の近代憲法です。 大日本帝国憲法の公布は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1889年公布」という点です。歴史的には「1889年公布」「明治期の政治制度の」という背景があり、大日本帝国憲法は1889年に公布された日本の近代憲法ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "1889年公布",
      "明治期の政治制度の",
      "大日本帝国憲法は1889年に公布された日本の近代憲法です",
      "近代国家の制度づくりと憲法の位置づけを考える入口になることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "大日本帝国憲法の公布は、大日本帝国憲法は1889年に公布された日本の近代憲法ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1889年公布」という点です。",
    "historyJa": "大日本帝国憲法の公布を歴史的にみると、「1889年公布」「明治期の政治制度の」という背景があります。大日本帝国憲法は1889年に公布された日本の近代憲法ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "大日本帝国憲法の公布について具体的に知っておきたいのは「1889年公布」と「明治期の政治制度の」です。大日本帝国憲法は1889年に公布された日本の近代憲法ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "大江健三郎はノーベル文学賞で知られる日本の作家です。 大江健三郎とノーベル文学賞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本文学の」という点です。歴史的には「日本文学の」「人物と受賞情報を扱う」という背景があり、大江健三郎はノーベル文学賞で知られる日本の作家ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本文学の",
      "人物と受賞情報を扱う",
      "大江健三郎はノーベル文学賞で知られる日本の作家です",
      "文学作品や言葉の表現が国際的に評価された事例として位置づけられます",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "大江健三郎とノーベル文学賞は、大江健三郎はノーベル文学賞で知られる日本の作家ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本文学の」という点です。",
    "historyJa": "大江健三郎とノーベル文学賞を歴史的にみると、「日本文学の」「人物と受賞情報を扱う」という背景があります。大江健三郎はノーベル文学賞で知られる日本の作家ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "大江健三郎とノーベル文学賞について具体的に知っておきたいのは「日本文学の」と「人物と受賞情報を扱う」です。大江健三郎はノーベル文学賞で知られる日本の作家ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です。 金閣寺と鹿苑寺は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「通称と正式名称がある」という点です。歴史的には「通称と正式名称がある」「金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です」という背景があり、金閣寺は鹿苑寺という正式名称でも知られる京都の寺院ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "通称と正式名称がある",
      "金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です",
      "宗教施設や名称の由来を通して文化の重なりを理解するです",
      "日本を理解する基本事項",
      "金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です。"
    ],
    "backgroundJa": "金閣寺と鹿苑寺は、金閣寺は鹿苑寺という正式名称でも知られる京都の寺院ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「通称と正式名称がある」という点です。",
    "historyJa": "金閣寺と鹿苑寺を歴史的にみると、「通称と正式名称がある」「金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です」という背景があります。金閣寺は鹿苑寺という正式名称でも知られる京都の寺院ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "金閣寺と鹿苑寺について具体的に知っておきたいのは「通称と正式名称がある」と「金閣寺は鹿苑寺という正式名称でも知られる京都の寺院です」です。金閣寺は鹿苑寺という正式名称でも知られる京都の寺院ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産です。 紀伊山地の霊場と参詣道は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の」という点です。歴史的には「世界遺産の」「条件抽出と並べ替えに」という背景があり、紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "世界遺産の",
      "条件抽出と並べ替えに",
      "紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産です",
      "信仰の場や巡礼の道が文化的景観として評価されることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "紀伊山地の霊場と参詣道は、紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の」という点です。",
    "historyJa": "紀伊山地の霊場と参詣道を歴史的にみると、「世界遺産の」「条件抽出と並べ替えに」という背景があります。紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "紀伊山地の霊場と参詣道について具体的に知っておきたいのは「世界遺産の」と「条件抽出と並べ替えに」です。紀伊山地の霊場と参詣道は宗教文化と山岳景観に関わる世界遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "黒部ダムは日本の大規模なダム建設と電力開発に関わるです。",
    "detailJa": "黒部ダムは日本の大規模なダム建設と電力開発に関わるです。 黒部ダムは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「土木・産業の」という点です。歴史的には「土木・産業の」「数値計算に」という背景があり、黒部ダムは日本の大規模なダム建設と電力開発に関わるですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "土木・産業の",
      "数値計算に",
      "黒部ダムは日本の大規模なダム建設と電力開発に関わるです",
      "土木や建築の技術が社会基盤を支えてきたことを知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "黒部ダムは、黒部ダムは日本の大規模なダム建設と電力開発に関わるですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「土木・産業の」という点です。",
    "historyJa": "黒部ダムを歴史的にみると、「土木・産業の」「数値計算に」という背景があります。黒部ダムは日本の大規模なダム建設と電力開発に関わるですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "黒部ダムについて具体的に知っておきたいのは「土木・産業の」と「数値計算に」です。黒部ダムは日本の大規模なダム建設と電力開発に関わるですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産です。 五箇山の合掌造り集落は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「合掌造りの集落」という点です。歴史的には「合掌造りの集落」「グループに」という背景があり、五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "合掌造りの集落",
      "グループに",
      "五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産です",
      "建築と暮らしの形が文化的価値として残されていることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "五箇山の合掌造り集落は、五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「合掌造りの集落」という点です。",
    "historyJa": "五箇山の合掌造り集落を歴史的にみると、「合掌造りの集落」「グループに」という背景があります。五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "五箇山の合掌造り集落について具体的に知っておきたいのは「合掌造りの集落」と「グループに」です。五箇山の合掌造り集落は伝統的な建築景観で知られる世界遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "日本標準時はUTC+9として扱われ、日付またぎのに関係します。",
    "detailJa": "日本標準時はUTC+9として扱われ、日付またぎのに関係します。 日本標準時と日付境界は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「UTC+9が」という点です。歴史的には「UTC+9が」「深夜の境界に注意」という背景があり、日本標準時はUTC+9として扱われ、日付またぎのに関係しますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "UTC+9が",
      "深夜の境界に注意",
      "日本標準時はUTC+9として扱われ、日付またぎのに関係します",
      "地域と時刻の関係を理解するための実用的です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本標準時と日付境界は、日本標準時はUTC+9として扱われ、日付またぎのに関係しますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「UTC+9が」という点です。",
    "historyJa": "日本標準時と日付境界を歴史的にみると、「UTC+9が」「深夜の境界に注意」という背景があります。日本標準時はUTC+9として扱われ、日付またぎのに関係しますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本標準時と日付境界について具体的に知っておきたいのは「UTC+9が」と「深夜の境界に注意」です。日本標準時はUTC+9として扱われ、日付またぎのに関係しますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本の郵便番号は桁数とハイフン位置を確認する形式です。 日本の郵便番号形式は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「3桁-4桁の形」という点です。歴史的には「3桁-4桁の形」「正規表現の」という背景があり、日本の郵便番号は桁数とハイフン位置を確認する形式ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "3桁-4桁の形",
      "正規表現の",
      "日本の郵便番号は桁数とハイフン位置を確認する形式です",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本の郵便番号形式は、日本の郵便番号は桁数とハイフン位置を確認する形式ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「3桁-4桁の形」という点です。",
    "historyJa": "日本の郵便番号形式を歴史的にみると、「3桁-4桁の形」「正規表現の」という背景があります。日本の郵便番号は桁数とハイフン位置を確認する形式ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本の郵便番号形式について具体的に知っておきたいのは「3桁-4桁の形」と「正規表現の」です。日本の郵便番号は桁数とハイフン位置を確認する形式ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "JIS都道府県",
    "summaryJa": "JIS都道府県は都道府県を番号で表す標準化されたです。",
    "detailJa": "JIS都道府県は都道府県を番号で表す標準化されたです。 JIS都道府県は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ゼロ埋めに注意」という点です。歴史的には「ゼロ埋めに注意」「文字列キーとして扱う」という背景があり、JIS都道府県は都道府県を番号で表す標準化されたですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "ゼロ埋めに注意",
      "文字列キーとして扱う",
      "JIS都道府県は都道府県を番号で表す標準化されたです",
      "行政番号や標準化された表記が社会を支えることを知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "JIS都道府県は、JIS都道府県は都道府県を番号で表す標準化されたですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ゼロ埋めに注意」という点です。",
    "historyJa": "JIS都道府県を歴史的にみると、「ゼロ埋めに注意」「文字列キーとして扱う」という背景があります。JIS都道府県は都道府県を番号で表す標準化されたですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "JIS都道府県について具体的に知っておきたいのは「ゼロ埋めに注意」と「文字列キーとして扱う」です。JIS都道府県は都道府県を番号で表す標準化されたですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "君が代は、日本の国歌として法律で定められています。",
    "detailJa": "君が代は、日本の国歌として法律で定められています。 君が代は短い歌詞とゆったりした旋律で知られる日本の国歌です。現在は国旗及び国歌に関する法律により、日章旗が国旗、君が代が国歌と定められています。儀式や国際行事で演奏されることが多く、国家を表す音楽として扱われます。 歌詞は古歌に由来し、近代以降に国を表す歌として使われるようになりました。1999年の法律で国歌として明文化され、国旗の日章旗とともに、国の象徴を制度上どう扱うかが整理されました。",
    "keyPointsJa": [
      "日本の国歌",
      "1999年の法律で明文化",
      "古歌に由来する歌詞",
      "儀式や国際行事で演奏される"
    ],
    "backgroundJa": "君が代は短い歌詞とゆったりした旋律で知られる日本の国歌です。現在は国旗及び国歌に関する法律により、日章旗が国旗、君が代が国歌と定められています。儀式や国際行事で演奏されることが多く、国家を表す音楽として扱われます。",
    "historyJa": "歌詞は古歌に由来し、近代以降に国を表す歌として使われるようになりました。1999年の法律で国歌として明文化され、国旗の日章旗とともに、国の象徴を制度上どう扱うかが整理されました。",
    "episodeJa": "君が代は歌詞が非常に短い国歌としても知られます。短さだけでなく、古い和歌に由来する表現が近代国家の儀礼に組み込まれた点を見ると、文化と制度の両方に関わる題材だと分かります。"
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
    "detailJa": "青色LEDの研究は日本関係のノーベル物理学賞受賞につながりました。 青色LEDとノーベル賞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「青色LEDが」という点です。歴史的には「青色LEDが」「複数の受賞者を扱う」という背景があり、青色LEDの研究は日本関係のノーベル物理学賞受賞につながりましたという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "青色LEDが",
      "複数の受賞者を扱う",
      "青色LEDの研究は日本関係のノーベル物理学賞受賞につながりました",
      "科学技術の成果が社会に広がり、国際的に評価された事例です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "青色LEDとノーベル賞は、青色LEDの研究は日本関係のノーベル物理学賞受賞につながりましたという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「青色LEDが」という点です。",
    "historyJa": "青色LEDとノーベル賞を歴史的にみると、「青色LEDが」「複数の受賞者を扱う」という背景があります。青色LEDの研究は日本関係のノーベル物理学賞受賞につながりましたという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "青色LEDとノーベル賞について具体的に知っておきたいのは「青色LEDが」と「複数の受賞者を扱う」です。青色LEDの研究は日本関係のノーベル物理学賞受賞につながりましたという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "吉野彰はリチウムイオン電池に関する業績で知られます。 吉野彰とリチウムイオン電池は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「電池技術の」という点です。歴史的には「電池技術の」「ノーベル賞関連の科学者」という背景があり、吉野彰はリチウムイオン電池に関する業績で知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "電池技術の",
      "ノーベル賞関連の科学者",
      "吉野彰はリチウムイオン電池に関する業績で知られます",
      "科学技術の成果が社会に広がり、国際的に評価された事例です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "吉野彰とリチウムイオン電池は、吉野彰はリチウムイオン電池に関する業績で知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「電池技術の」という点です。",
    "historyJa": "吉野彰とリチウムイオン電池を歴史的にみると、「電池技術の」「ノーベル賞関連の科学者」という背景があります。吉野彰はリチウムイオン電池に関する業績で知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "吉野彰とリチウムイオン電池について具体的に知っておきたいのは「電池技術の」と「ノーベル賞関連の科学者」です。吉野彰はリチウムイオン電池に関する業績で知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "山中伸弥はiPS細胞の研究で知られる科学者です。 山中伸弥とiPS細胞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「iPS細胞が」という点です。歴史的には「iPS細胞が」「生命科学の業績」という背景があり、山中伸弥はiPS細胞の研究で知られる科学者ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "iPS細胞が",
      "生命科学の業績",
      "山中伸弥はiPS細胞の研究で知られる科学者です",
      "生命科学や基礎研究の成果が広く評価された事例です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "山中伸弥とiPS細胞は、山中伸弥はiPS細胞の研究で知られる科学者ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「iPS細胞が」という点です。",
    "historyJa": "山中伸弥とiPS細胞を歴史的にみると、「iPS細胞が」「生命科学の業績」という背景があります。山中伸弥はiPS細胞の研究で知られる科学者ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "山中伸弥とiPS細胞について具体的に知っておきたいのは「iPS細胞が」と「生命科学の業績」です。山中伸弥はiPS細胞の研究で知られる科学者ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "姫路城は白鷺城の愛称でも知られる日本の城です。 姫路城と白鷺城は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の城」という点です。歴史的には「世界遺産の城」「別名の扱いが重要」という背景があり、姫路城は白鷺城の愛称でも知られる日本の城ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "世界遺産の城",
      "別名の扱いが重要",
      "姫路城は白鷺城の愛称でも知られる日本の城です",
      "建築と暮らしの形が文化的価値として残されていることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "姫路城と白鷺城は、姫路城は白鷺城の愛称でも知られる日本の城ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の城」という点です。",
    "historyJa": "姫路城と白鷺城を歴史的にみると、「世界遺産の城」「別名の扱いが重要」という背景があります。姫路城は白鷺城の愛称でも知られる日本の城ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "姫路城と白鷺城について具体的に知っておきたいのは「世界遺産の城」と「別名の扱いが重要」です。姫路城は白鷺城の愛称でも知られる日本の城ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "富士山は日本を代表する山で、標高情報でも扱われます。",
    "detailJa": "富士山は日本を代表する山で、標高情報でも扱われます。 富士山は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本を代表する山」という点です。歴史的には「日本を代表する山」「標高比較の」という背景があり、富士山は日本を代表する山で、標高情報でも扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本を代表する山",
      "標高比較の",
      "富士山は日本を代表する山で、標高情報でも扱われます",
      "地形や自然環境の特徴を通して地域を理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "富士山は、富士山は日本を代表する山で、標高情報でも扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本を代表する山」という点です。",
    "historyJa": "富士山を歴史的にみると、「日本を代表する山」「標高比較の」という背景があります。富士山は日本を代表する山で、標高情報でも扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "富士山について具体的に知っておきたいのは「日本を代表する山」と「標高比較の」です。富士山は日本を代表する山で、標高情報でも扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られます。 フランシスコ・ザビエル来日は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1549年の来日が」という点です。歴史的には「1549年の来日が」「国際交流史の人物」という背景があり、フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "1549年の来日が",
      "国際交流史の人物",
      "フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られます",
      "海外との接触や交流が社会の変化につながったことを知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "フランシスコ・ザビエル来日は、フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「1549年の来日が」という点です。",
    "historyJa": "フランシスコ・ザビエル来日を歴史的にみると、「1549年の来日が」「国際交流史の人物」という背景があります。フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "フランシスコ・ザビエル来日について具体的に知っておきたいのは「1549年の来日が」と「国際交流史の人物」です。フランシスコ・ザビエルは16世紀に日本へ来た宣教師として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ウィリアム・アダムスは日本に来航した英国人航海士として知られます。 ウィリアム・アダムス来航は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本名は三浦按針」という点です。歴史的には「日本名は三浦按針」「国際交流史の人物」という背景があり、ウィリアム・アダムスは日本に来航した英国人航海士として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本名は三浦按針",
      "国際交流史の人物",
      "ウィリアム・アダムスは日本に来航した英国人航海士として知られます",
      "海外との接触や交流が社会の変化につながったことを知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "ウィリアム・アダムス来航は、ウィリアム・アダムスは日本に来航した英国人航海士として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本名は三浦按針」という点です。",
    "historyJa": "ウィリアム・アダムス来航を歴史的にみると、「日本名は三浦按針」「国際交流史の人物」という背景があります。ウィリアム・アダムスは日本に来航した英国人航海士として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ウィリアム・アダムス来航について具体的に知っておきたいのは「日本名は三浦按針」と「国際交流史の人物」です。ウィリアム・アダムスは日本に来航した英国人航海士として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "紫式部は「源氏物語」の作者として知られます。 紫式部と源氏物語は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「平安時代の文学者」という点です。歴史的には「平安時代の文学者」「作品名との対応が重要」という背景があり、紫式部は「源氏物語」の作者として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "平安時代の文学者",
      "作品名との対応が重要",
      "紫式部は「源氏物語」の作者として知られます",
      "人物や作品を通して、言葉や表現が時代に残る理由を考えることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "紫式部と源氏物語は、紫式部は「源氏物語」の作者として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「平安時代の文学者」という点です。",
    "historyJa": "紫式部と源氏物語を歴史的にみると、「平安時代の文学者」「作品名との対応が重要」という背景があります。紫式部は「源氏物語」の作者として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "紫式部と源氏物語について具体的に知っておきたいのは「平安時代の文学者」と「作品名との対応が重要」です。紫式部は「源氏物語」の作者として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "歌舞伎は、日本の伝統芸能として知られる演劇です。",
    "detailJa": "歌舞伎は、日本の伝統芸能として知られる演劇です。 歌舞伎は、音楽、舞踊、演技、衣装、舞台装置が一体になった日本の演劇です。写実的な芝居だけでなく、見得や隈取などの様式美を通じて人物の感情や性格を強く表現します。 歌舞伎は江戸時代に町人文化の中で発展しました。長い上演の歴史の中で演目や型が受け継がれ、役者の家や芸の継承とも結びつきながら、現在まで続く舞台芸術になりました。 舞台上で役者が動きを止めて強い姿勢を見せる「見得」は、観客に人物の感情や場面の盛り上がりを伝える代表的な表現です。物語だけでなく、型そのものを味わう点が歌舞伎の特徴です。 現在の舞台でも、古典演目だけでなく新しい演出が加えられることがあります。長く続く芸能でありながら、観客に伝わる形を更新してきた点も重要です。",
    "keyPointsJa": [
      "日本の伝統芸能",
      "音楽・舞踊・演技が結びつく",
      "江戸時代に発展",
      "見得や隈取などの様式美"
    ],
    "backgroundJa": "歌舞伎は、音楽、舞踊、演技、衣装、舞台装置が一体になった日本の演劇です。写実的な芝居だけでなく、見得や隈取などの様式美を通じて人物の感情や性格を強く表現します。",
    "historyJa": "歌舞伎は江戸時代に町人文化の中で発展しました。長い上演の歴史の中で演目や型が受け継がれ、役者の家や芸の継承とも結びつきながら、現在まで続く舞台芸術になりました。",
    "episodeJa": "舞台上で役者が動きを止めて強い姿勢を見せる「見得」は、観客に人物の感情や場面の盛り上がりを伝える代表的な表現です。物語だけでなく、型そのものを味わう点が歌舞伎の特徴です。 現在の舞台でも、古典演目だけでなく新しい演出が加えられることがあります。長く続く芸能でありながら、観客に伝わる形を更新してきた点も重要です。"
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
    "detailJa": "鉄砲伝来は種子島と結びつけて語られる日本史の出来事です。 種子島への鉄砲伝来は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「種子島が重要地点」という点です。歴史的には「種子島が重要地点」「出来事の順序を扱う」という背景があり、鉄砲伝来は種子島と結びつけて語られる日本史の出来事ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "種子島が重要地点",
      "出来事の順序を扱う",
      "鉄砲伝来は種子島と結びつけて語られる日本史の出来事です",
      "海外との接触や交流が社会の変化につながったことを知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "種子島への鉄砲伝来は、鉄砲伝来は種子島と結びつけて語られる日本史の出来事ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「種子島が重要地点」という点です。",
    "historyJa": "種子島への鉄砲伝来を歴史的にみると、「種子島が重要地点」「出来事の順序を扱う」という背景があります。鉄砲伝来は種子島と結びつけて語られる日本史の出来事ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "種子島への鉄砲伝来について具体的に知っておきたいのは「種子島が重要地点」と「出来事の順序を扱う」です。鉄砲伝来は種子島と結びつけて語られる日本史の出来事ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ペリー来航は日本の開国過程と結びつく出来事です。 ペリー来航と開国は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「19世紀の対外交渉」という点です。歴史的には「19世紀の対外交渉」「ペリー来航は日本の開国過程と結びつく出来事です」という背景があり、ペリー来航は日本の開国過程と結びつく出来事ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "19世紀の対外交渉",
      "ペリー来航は日本の開国過程と結びつく出来事です",
      "海外との接触や交流が社会の変化につながったことを知るです",
      "日本を理解する基本事項",
      "ペリー来航は日本の開国過程と結びつく出来事です。"
    ],
    "backgroundJa": "ペリー来航と開国は、ペリー来航は日本の開国過程と結びつく出来事ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「19世紀の対外交渉」という点です。",
    "historyJa": "ペリー来航と開国を歴史的にみると、「19世紀の対外交渉」「ペリー来航は日本の開国過程と結びつく出来事です」という背景があります。ペリー来航は日本の開国過程と結びつく出来事ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ペリー来航と開国について具体的に知っておきたいのは「19世紀の対外交渉」と「ペリー来航は日本の開国過程と結びつく出来事です」です。ペリー来航は日本の開国過程と結びつく出来事ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "和紙は日本の伝統的な紙文化です。 和紙の伝統は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「伝統工芸の」という点です。歴史的には「伝統工芸の」「種類や地域を分類できる」という背景があり、和紙は日本の伝統的な紙文化ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "伝統工芸の",
      "種類や地域を分類できる",
      "和紙は日本の伝統的な紙文化です",
      "長く受け継がれてきた表現や行事を、断定しすぎず文化として理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "和紙の伝統は、和紙は日本の伝統的な紙文化ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「伝統工芸の」という点です。",
    "historyJa": "和紙の伝統を歴史的にみると、「伝統工芸の」「種類や地域を分類できる」という背景があります。和紙は日本の伝統的な紙文化ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "和紙の伝統について具体的に知っておきたいのは「伝統工芸の」と「種類や地域を分類できる」です。和紙は日本の伝統的な紙文化ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られます。 伊勢神宮の式年遷宮は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「周期の考え方が重要」という点です。歴史的には「周期の考え方が重要」「剰余計算の」という背景があり、伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "周期の考え方が重要",
      "剰余計算の",
      "伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られます",
      "信仰と建築、定期的な造営や維持の考え方が結びつくことです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "伊勢神宮の式年遷宮は、伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「周期の考え方が重要」という点です。",
    "historyJa": "伊勢神宮の式年遷宮を歴史的にみると、「周期の考え方が重要」「剰余計算の」という背景があります。伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "伊勢神宮の式年遷宮について具体的に知っておきたいのは「周期の考え方が重要」と「剰余計算の」です。伊勢神宮の式年遷宮は周期性を持つ伝統行事として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "東京スカイツリーは高さ情報で扱われる日本の電波塔です。",
    "detailJa": "東京スカイツリーは高さ情報で扱われる日本の電波塔です。 東京スカイツリーは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「高さの数値が」という点です。歴史的には「高さの数値が」「単位変換に」という背景があり、東京スカイツリーは高さ情報で扱われる日本の電波塔ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "高さの数値が",
      "単位変換に",
      "東京スカイツリーは高さ情報で扱われる日本の電波塔です",
      "建物や構造物を通して、社会の制度や技術の変化を知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "東京スカイツリーは、東京スカイツリーは高さ情報で扱われる日本の電波塔ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「高さの数値が」という点です。",
    "historyJa": "東京スカイツリーを歴史的にみると、「高さの数値が」「単位変換に」という背景があります。東京スカイツリーは高さ情報で扱われる日本の電波塔ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "東京スカイツリーについて具体的に知っておきたいのは「高さの数値が」と「単位変換に」です。東京スカイツリーは高さ情報で扱われる日本の電波塔ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "八木・宇田アンテナは日本の発明・科学技術に関するです。",
    "detailJa": "八木・宇田アンテナは日本の発明・科学技術に関するです。 八木・宇田アンテナは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「アンテナ技術の」という点です。歴史的には「アンテナ技術の」「発明史として扱う」という背景があり、八木・宇田アンテナは日本の発明・科学技術に関するですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "アンテナ技術の",
      "発明史として扱う",
      "八木・宇田アンテナは日本の発明・科学技術に関するです",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "八木・宇田アンテナは、八木・宇田アンテナは日本の発明・科学技術に関するですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「アンテナ技術の」という点です。",
    "historyJa": "八木・宇田アンテナを歴史的にみると、「アンテナ技術の」「発明史として扱う」という背景があります。八木・宇田アンテナは日本の発明・科学技術に関するですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "八木・宇田アンテナについて具体的に知っておきたいのは「アンテナ技術の」と「発明史として扱う」です。八木・宇田アンテナは日本の発明・科学技術に関するですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "青函トンネルは本州と北海道を結ぶ交通インフラです。 青函トンネルは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「鉄道トンネルの」という点です。歴史的には「鉄道トンネルの」「経路情報として扱う」という背景があり、青函トンネルは本州と北海道を結ぶ交通インフラですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "鉄道トンネルの",
      "経路情報として扱う",
      "青函トンネルは本州と北海道を結ぶ交通インフラです",
      "人や物の移動を支える交通網の発展を知ることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "青函トンネルは、青函トンネルは本州と北海道を結ぶ交通インフラですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「鉄道トンネルの」という点です。",
    "historyJa": "青函トンネルを歴史的にみると、「鉄道トンネルの」「経路情報として扱う」という背景があります。青函トンネルは本州と北海道を結ぶ交通インフラですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "青函トンネルについて具体的に知っておきたいのは「鉄道トンネルの」と「経路情報として扱う」です。青函トンネルは本州と北海道を結ぶ交通インフラですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "小野小町に関する美人伝承は伝統的な言い伝えとして扱います。 小野小町と伝承は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「伝統的な評価を含む」という点です。歴史的には「伝統的な評価を含む」「断定表現を避ける」という背景があり、小野小町に関する美人伝承は伝統的な言い伝えとして扱いますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "伝統的な評価を含む",
      "断定表現を避ける",
      "小野小町に関する美人伝承は伝統的な言い伝えとして扱います",
      "文学や伝承の評価が時代によって変わることを含めて理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "小野小町と伝承は、小野小町に関する美人伝承は伝統的な言い伝えとして扱いますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「伝統的な評価を含む」という点です。",
    "historyJa": "小野小町と伝承を歴史的にみると、「伝統的な評価を含む」「断定表現を避ける」という背景があります。小野小町に関する美人伝承は伝統的な言い伝えとして扱いますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "小野小町と伝承について具体的に知っておきたいのは「伝統的な評価を含む」と「断定表現を避ける」です。小野小町に関する美人伝承は伝統的な言い伝えとして扱いますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本語では姓を先、名を後に置く表記が一般的です。 日本語の氏名順は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「姓と名の順序が重要」という点です。歴史的には「姓と名の順序が重要」「表示順のバグになりやすい」という背景があり、日本語では姓を先、名を後に置く表記が一般的ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "姓と名の順序が重要",
      "表示順のバグになりやすい",
      "日本語では姓を先、名を後に置く表記が一般的です",
      "名前や表記順の習慣を通して文化の違いを理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本語の氏名順は、日本語では姓を先、名を後に置く表記が一般的ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「姓と名の順序が重要」という点です。",
    "historyJa": "日本語の氏名順を歴史的にみると、「姓と名の順序が重要」「表示順のバグになりやすい」という背景があります。日本語では姓を先、名を後に置く表記が一般的ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本語の氏名順について具体的に知っておきたいのは「姓と名の順序が重要」と「表示順のバグになりやすい」です。日本語では姓を先、名を後に置く表記が一般的ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本語入力では全角文字と半角文字の違いが問題になることがあります。 全角・半角文字は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「見た目が似ても別文字」という点です。歴史的には「見た目が似ても別文字」「入力正規化が重要」という背景があり、日本語入力では全角文字と半角文字の違いが問題になることがありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "見た目が似ても別文字",
      "入力正規化が重要",
      "日本語入力では全角文字と半角文字の違いが問題になることがあります",
      "文字や表記の違いを理解し、言葉の成り立ちを考えることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "全角・半角文字は、日本語入力では全角文字と半角文字の違いが問題になることがありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「見た目が似ても別文字」という点です。",
    "historyJa": "全角・半角文字を歴史的にみると、「見た目が似ても別文字」「入力正規化が重要」という背景があります。日本語入力では全角文字と半角文字の違いが問題になることがありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "全角・半角文字について具体的に知っておきたいのは「見た目が似ても別文字」と「入力正規化が重要」です。日本語入力では全角文字と半角文字の違いが問題になることがありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "五十音順は日本語の文字を並べる代表的な順序です。 五十音順は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本語の並び順」という点です。歴史的には「日本語の並び順」「単純な英字と異なる」という背景があり、五十音順は日本語の文字を並べる代表的な順序ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本語の並び順",
      "単純な英字と異なる",
      "五十音順は日本語の文字を並べる代表的な順序です",
      "文字や表記の違いを理解し、言葉の成り立ちを考えることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "五十音順は、五十音順は日本語の文字を並べる代表的な順序ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本語の並び順」という点です。",
    "historyJa": "五十音順を歴史的にみると、「日本語の並び順」「単純な英字と異なる」という背景があります。五十音順は日本語の文字を並べる代表的な順序ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "五十音順について具体的に知っておきたいのは「日本語の並び順」と「単純な英字と異なる」です。五十音順は日本語の文字を並べる代表的な順序ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "都・道・府・県は日本の自治体名に付く接尾辞です。 都道府県の接尾辞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「接尾辞を取り除くが必要」という点です。歴史的には「接尾辞を取り除くが必要」「地名の一部として残る場合もある」という背景があり、都・道・府・県は日本の自治体名に付く接尾辞ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "接尾辞を取り除くが必要",
      "地名の一部として残る場合もある",
      "都・道・府・県は日本の自治体名に付く接尾辞です",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "都道府県の接尾辞は、都・道・府・県は日本の自治体名に付く接尾辞ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「接尾辞を取り除くが必要」という点です。",
    "historyJa": "都道府県の接尾辞を歴史的にみると、「接尾辞を取り除くが必要」「地名の一部として残る場合もある」という背景があります。都・道・府・県は日本の自治体名に付く接尾辞ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "都道府県の接尾辞について具体的に知っておきたいのは「接尾辞を取り除くが必要」と「地名の一部として残る場合もある」です。都・道・府・県は日本の自治体名に付く接尾辞ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "富士山は日本を代表する山で、標高情報でも扱われます。",
    "detailJa": "富士山は日本を代表する山で、標高情報でも扱われます。 富士山は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本を代表する山」という点です。歴史的には「日本を代表する山」「標高比較の」という背景があり、富士山は日本を代表する山で、標高情報でも扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "日本を代表する山",
      "標高比較の",
      "富士山は日本を代表する山で、標高情報でも扱われます",
      "作品や表現が、地域の景観や文化記憶と結びつくことです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "富士山は、富士山は日本を代表する山で、標高情報でも扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「日本を代表する山」という点です。",
    "historyJa": "富士山を歴史的にみると、「日本を代表する山」「標高比較の」という背景があります。富士山は日本を代表する山で、標高情報でも扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "富士山について具体的に知っておきたいのは「日本を代表する山」と「標高比較の」です。富士山は日本を代表する山で、標高情報でも扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です。 スーパーカミオカンデは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「科学施設の」という点です。歴史的には「科学施設の」「スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です」という背景があり、スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "科学施設の",
      "スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です",
      "観測や研究施設を通して自然を調べる科学のです",
      "日本を理解する基本事項",
      "スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です。"
    ],
    "backgroundJa": "スーパーカミオカンデは、スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「科学施設の」という点です。",
    "historyJa": "スーパーカミオカンデを歴史的にみると、「科学施設の」「スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です」という背景があります。スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "スーパーカミオカンデについて具体的に知っておきたいのは「科学施設の」と「スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設です」です。スーパーカミオカンデはニュートリノ観測で知られる日本の大型実験施設ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "厳島神社は海上に立つ鳥居で知られる日本の世界遺産です。 厳島神社は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の」という点です。歴史的には「世界遺産の」「集合の包含に」という背景があり、厳島神社は海上に立つ鳥居で知られる日本の世界遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "世界遺産の",
      "集合の包含に",
      "厳島神社は海上に立つ鳥居で知られる日本の世界遺産です",
      "信仰の場や巡礼の道が文化的景観として評価されることです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "厳島神社は、厳島神社は海上に立つ鳥居で知られる日本の世界遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「世界遺産の」という点です。",
    "historyJa": "厳島神社を歴史的にみると、「世界遺産の」「集合の包含に」という背景があります。厳島神社は海上に立つ鳥居で知られる日本の世界遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "厳島神社について具体的に知っておきたいのは「世界遺産の」と「集合の包含に」です。厳島神社は海上に立つ鳥居で知られる日本の世界遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです。",
    "detailJa": "四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです。 四国八十八箇所巡礼は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「88の寺院が」という点です。歴史的には「88の寺院が」「四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです」という背景があり、四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "88の寺院が",
      "四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです",
      "信仰の場と地域の移動が結びつくです",
      "日本を理解する基本事項",
      "四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです。"
    ],
    "backgroundJa": "四国八十八箇所巡礼は、四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「88の寺院が」という点です。",
    "historyJa": "四国八十八箇所巡礼を歴史的にみると、「88の寺院が」「四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです」という背景があります。四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "四国八十八箇所巡礼について具体的に知っておきたいのは「88の寺院が」と「四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のです」です。四国八十八箇所巡礼は四国の寺院をめぐる宗教文化のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "三陸海岸は入り組んだリアス海岸で知られる地形のです。",
    "detailJa": "三陸海岸は入り組んだリアス海岸で知られる地形のです。 三陸のリアス海岸は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地形分類の」という点です。歴史的には「地形分類の」「地域ごとのに」という背景があり、三陸海岸は入り組んだリアス海岸で知られる地形のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "地形分類の",
      "地域ごとのに",
      "三陸海岸は入り組んだリアス海岸で知られる地形のです",
      "地形や自然環境の特徴を通して地域を理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "三陸のリアス海岸は、三陸海岸は入り組んだリアス海岸で知られる地形のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地形分類の」という点です。",
    "historyJa": "三陸のリアス海岸を歴史的にみると、「地形分類の」「地域ごとのに」という背景があります。三陸海岸は入り組んだリアス海岸で知られる地形のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "三陸のリアス海岸について具体的に知っておきたいのは「地形分類の」と「地域ごとのに」です。三陸海岸は入り組んだリアス海岸で知られる地形のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です。 トヨタ生産方式のかんばんは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「生産管理の」という点です。歴史的には「生産管理の」「かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です」という背景があり、かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "生産管理の",
      "かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です",
      "ものづくりや生産の仕組みを通して産業の考え方を理解するです",
      "日本を理解する基本事項",
      "かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です。"
    ],
    "backgroundJa": "トヨタ生産方式のかんばんは、かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「生産管理の」という点です。",
    "historyJa": "トヨタ生産方式のかんばんを歴史的にみると、「生産管理の」「かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です」という背景があります。かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "トヨタ生産方式のかんばんについて具体的に知っておきたいのは「生産管理の」と「かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方です」です。かんばんはトヨタ生産方式で生産や補充の流れを管理する考え方ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本の電話番号は市外局番や区切り方を含めて整形する必要があります。 日本の電話番号形式は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数字の正規化が重要」という点です。歴史的には「数字の正規化が重要」「形式チェックの」という背景があり、日本の電話番号は市外局番や区切り方を含めて整形する必要がありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "数字の正規化が重要",
      "形式チェックの",
      "日本の電話番号は市外局番や区切り方を含めて整形する必要があります",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本の電話番号形式は、日本の電話番号は市外局番や区切り方を含めて整形する必要がありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数字の正規化が重要」という点です。",
    "historyJa": "日本の電話番号形式を歴史的にみると、「数字の正規化が重要」「形式チェックの」という背景があります。日本の電話番号は市外局番や区切り方を含めて整形する必要がありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本の電話番号形式について具体的に知っておきたいのは「数字の正規化が重要」と「形式チェックの」です。日本の電話番号は市外局番や区切り方を含めて整形する必要がありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本語には横書きだけでなく縦書きの組版文化があります。 日本語の縦書きは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「表示方向の」という点です。歴史的には「表示方向の」「レイアウト設定のバグに注意」という背景があり、日本語には横書きだけでなく縦書きの組版文化がありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "表示方向の",
      "レイアウト設定のバグに注意",
      "日本語には横書きだけでなく縦書きの組版文化があります",
      "文字や書き方の習慣を通して文化的な表現を理解することです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本語の縦書きは、日本語には横書きだけでなく縦書きの組版文化がありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「表示方向の」という点です。",
    "historyJa": "日本語の縦書きを歴史的にみると、「表示方向の」「レイアウト設定のバグに注意」という背景があります。日本語には横書きだけでなく縦書きの組版文化がありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本語の縦書きについて具体的に知っておきたいのは「表示方向の」と「レイアウト設定のバグに注意」です。日本語には横書きだけでなく縦書きの組版文化がありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "日本の年度は4月に始まる扱いがよく使われます。 日本の年度開始は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「4月開始が」という点です。歴史的には「4月開始が」「日付境界のに」という背景があり、日本の年度は4月に始まる扱いがよく使われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "4月開始が",
      "日付境界のに",
      "日本の年度は4月に始まる扱いがよく使われます",
      "制度上の年度や日付の扱いを理解するためです",
      "日本を理解する基本事項"
    ],
    "backgroundJa": "日本の年度開始は、日本の年度は4月に始まる扱いがよく使われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「4月開始が」という点です。",
    "historyJa": "日本の年度開始を歴史的にみると、「4月開始が」「日付境界のに」という背景があります。日本の年度は4月に始まる扱いがよく使われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "日本の年度開始について具体的に知っておきたいのは「4月開始が」と「日付境界のに」です。日本の年度は4月に始まる扱いがよく使われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ連邦政府は立法・行政・司法の三部門で説明されます。 アメリカ連邦政府の三権は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「三権分立の」という点です。歴史的には「三権分立の」「役割名を情報で扱う」という背景があり、アメリカ連邦政府は立法・行政・司法の三部門で説明されますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "三権分立の",
      "役割名を情報で扱う",
      "アメリカ連邦政府は立法・行政・司法の三部門で説明されます",
      "政治制度の中で、権限や役割の分担を理解するための基礎になることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ連邦政府の三権は、アメリカ連邦政府は立法・行政・司法の三部門で説明されますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「三権分立の」という点です。",
    "historyJa": "アメリカ連邦政府の三権を歴史的にみると、「三権分立の」「役割名を情報で扱う」という背景があります。アメリカ連邦政府は立法・行政・司法の三部門で説明されますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ連邦政府の三権について具体的に知っておきたいのは「三権分立の」と「役割名を情報で扱う」です。アメリカ連邦政府は立法・行政・司法の三部門で説明されますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ上院は各州から選ばれる議員で構成されます。 アメリカ上院は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「上院は連邦議会の一院」という点です。歴史的には「上院は連邦議会の一院」「人数や州との関係を扱う」という背景があり、アメリカ上院は各州から選ばれる議員で構成されますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "上院は連邦議会の一院",
      "人数や州との関係を扱う",
      "アメリカ上院は各州から選ばれる議員で構成されます",
      "政治制度の中で、権限や役割の分担を理解するための基礎になることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ上院は、アメリカ上院は各州から選ばれる議員で構成されますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「上院は連邦議会の一院」という点です。",
    "historyJa": "アメリカ上院を歴史的にみると、「上院は連邦議会の一院」「人数や州との関係を扱う」という背景があります。アメリカ上院は各州から選ばれる議員で構成されますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ上院について具体的に知っておきたいのは「上院は連邦議会の一院」と「人数や州との関係を扱う」です。アメリカ上院は各州から選ばれる議員で構成されますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ国旗は星と縞の数が重要な国の象徴です。 アメリカ国旗は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「星は州を表す」という点です。歴史的には「星は州を表す」「縞は建国時の州に由来する」という背景があり、アメリカ国旗は星と縞の数が重要な国の象徴ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "星は州を表す",
      "縞は建国時の州に由来する",
      "アメリカ国旗は星と縞の数が重要な国の象徴です",
      "国を表す象徴は、法律や慣習、歴史的な記憶と結びついて理解されます",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ国旗は、アメリカ国旗は星と縞の数が重要な国の象徴ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「星は州を表す」という点です。",
    "historyJa": "アメリカ国旗を歴史的にみると、「星は州を表す」「縞は建国時の州に由来する」という背景があります。アメリカ国旗は星と縞の数が重要な国の象徴ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ国旗について具体的に知っておきたいのは「星は州を表す」と「縞は建国時の州に由来する」です。アメリカ国旗は星と縞の数が重要な国の象徴ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ハクトウワシはアメリカの国の象徴として知られます。 ハクトウワシは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国の象徴の鳥」という点です。歴史的には「国の象徴の鳥」「ハクトウワシはアメリカの国の象徴として知られます」という背景があり、ハクトウワシはアメリカの国の象徴として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "国の象徴の鳥",
      "ハクトウワシはアメリカの国の象徴として知られます",
      "国を表す象徴は、法律や慣習、歴史的な記憶と結びついて理解されます",
      "アメリカを理解する基本事項",
      "ハクトウワシはアメリカの国の象徴として知られます。"
    ],
    "backgroundJa": "ハクトウワシは、ハクトウワシはアメリカの国の象徴として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国の象徴の鳥」という点です。",
    "historyJa": "ハクトウワシを歴史的にみると、「国の象徴の鳥」「ハクトウワシはアメリカの国の象徴として知られます」という背景があります。ハクトウワシはアメリカの国の象徴として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ハクトウワシについて具体的に知っておきたいのは「国の象徴の鳥」と「ハクトウワシはアメリカの国の象徴として知られます」です。ハクトウワシはアメリカの国の象徴として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "イエローストーンはアメリカの国立公園史で重要な場所です。 イエローストーン国立公園は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国立公園の」という点です。歴史的には「国立公園の」「設立年を扱う」という背景があり、イエローストーンはアメリカの国立公園史で重要な場所ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "国立公園の",
      "設立年を扱う",
      "イエローストーンはアメリカの国立公園史で重要な場所です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "イエローストーン国立公園は、イエローストーンはアメリカの国立公園史で重要な場所ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国立公園の」という点です。",
    "historyJa": "イエローストーン国立公園を歴史的にみると、「国立公園の」「設立年を扱う」という背景があります。イエローストーンはアメリカの国立公園史で重要な場所ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "イエローストーン国立公園について具体的に知っておきたいのは「国立公園の」と「設立年を扱う」です。イエローストーンはアメリカの国立公園史で重要な場所ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "独立記念館はアメリカの建国文書と結びつく歴史的建造物です。 独立記念館は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「独立宣言などと関係」という点です。歴史的には「独立宣言などと関係」「文書リストの」という背景があり、独立記念館はアメリカの建国文書と結びつく歴史的建造物ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "独立宣言などと関係",
      "文書リストの",
      "独立記念館はアメリカの建国文書と結びつく歴史的建造物です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "独立記念館は、独立記念館はアメリカの建国文書と結びつく歴史的建造物ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「独立宣言などと関係」という点です。",
    "historyJa": "独立記念館を歴史的にみると、「独立宣言などと関係」「文書リストの」という背景があります。独立記念館はアメリカの建国文書と結びつく歴史的建造物ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "独立記念館について具体的に知っておきたいのは「独立宣言などと関係」と「文書リストの」です。独立記念館はアメリカの建国文書と結びつく歴史的建造物ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アポロ11号は月面着陸で知られるNASAのミッションです。 アポロ11号は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「月面着陸のミッション」という点です。歴史的には「月面着陸のミッション」「乗員名を扱う」という背景があり、アポロ11号は月面着陸で知られるNASAのミッションですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "月面着陸のミッション",
      "乗員名を扱う",
      "アポロ11号は月面着陸で知られるNASAのミッションです",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アポロ11号は、アポロ11号は月面着陸で知られるNASAのミッションですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「月面着陸のミッション」という点です。",
    "historyJa": "アポロ11号を歴史的にみると、「月面着陸のミッション」「乗員名を扱う」という背景があります。アポロ11号は月面着陸で知られるNASAのミッションですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アポロ11号について具体的に知っておきたいのは「月面着陸のミッション」と「乗員名を扱う」です。アポロ11号は月面着陸で知られるNASAのミッションですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "マーク・トウェインはアメリカ文学で知られる作家です。 マーク・トウェインは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「作品名との対応が重要」という点です。歴史的には「作品名との対応が重要」「マーク・トウェインはアメリカ文学で知られる作家です」という背景があり、マーク・トウェインはアメリカ文学で知られる作家ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "作品名との対応が重要",
      "マーク・トウェインはアメリカ文学で知られる作家です",
      "人物や作品を通して、言葉や表現が時代に残る理由を考えるです",
      "アメリカを理解する基本事項",
      "マーク・トウェインはアメリカ文学で知られる作家です。"
    ],
    "backgroundJa": "マーク・トウェインは、マーク・トウェインはアメリカ文学で知られる作家ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「作品名との対応が重要」という点です。",
    "historyJa": "マーク・トウェインを歴史的にみると、「作品名との対応が重要」「マーク・トウェインはアメリカ文学で知られる作家です」という背景があります。マーク・トウェインはアメリカ文学で知られる作家ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "マーク・トウェインについて具体的に知っておきたいのは「作品名との対応が重要」と「マーク・トウェインはアメリカ文学で知られる作家です」です。マーク・トウェインはアメリカ文学で知られる作家ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ミシシッピ川はアメリカの地理を代表する大河です。 ミシシッピ川は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地理情報の」という点です。歴史的には「地理情報の」「長さや比較に」という背景があり、ミシシッピ川はアメリカの地理を代表する大河ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "地理情報の",
      "長さや比較に",
      "ミシシッピ川はアメリカの地理を代表する大河です",
      "地形や自然環境の特徴を通して地域を理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ミシシッピ川は、ミシシッピ川はアメリカの地理を代表する大河ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地理情報の」という点です。",
    "historyJa": "ミシシッピ川を歴史的にみると、「地理情報の」「長さや比較に」という背景があります。ミシシッピ川はアメリカの地理を代表する大河ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ミシシッピ川について具体的に知っておきたいのは「地理情報の」と「長さや比較に」です。ミシシッピ川はアメリカの地理を代表する大河ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ルート66はアメリカの道路文化と結びつく歴史的な道路です。 ルート66は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ルート66はアメリカの道路文化と結びつく歴史的な道路です」という点です。歴史的には「ルート66はアメリカの道路文化と結びつく歴史的な道路です」「人や物の移動を支える交通網の発展を知るです」という背景があり、ルート66はアメリカの道路文化と結びつく歴史的な道路ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "ルート66はアメリカの道路文化と結びつく歴史的な道路です",
      "人や物の移動を支える交通網の発展を知るです",
      "アメリカを理解する基本事項",
      "ルート66はアメリカの道路文化と結びつく歴史的な道路です。"
    ],
    "backgroundJa": "ルート66は、ルート66はアメリカの道路文化と結びつく歴史的な道路ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ルート66はアメリカの道路文化と結びつく歴史的な道路です」という点です。",
    "historyJa": "ルート66を歴史的にみると、「ルート66はアメリカの道路文化と結びつく歴史的な道路です」「人や物の移動を支える交通網の発展を知るです」という背景があります。ルート66はアメリカの道路文化と結びつく歴史的な道路ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ルート66について具体的に知っておきたいのは「ルート66はアメリカの道路文化と結びつく歴史的な道路です」と「人や物の移動を支える交通網の発展を知るです」です。ルート66はアメリカの道路文化と結びつく歴史的な道路ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "グランドキャニオンは地形と世界遺産の文脈で扱われる場所です。 グランドキャニオンは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地形情報の」という点です。歴史的には「地形情報の」「条件抽出に」という背景があり、グランドキャニオンは地形と世界遺産の文脈で扱われる場所ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "地形情報の",
      "条件抽出に",
      "グランドキャニオンは地形と世界遺産の文脈で扱われる場所です",
      "地形や自然環境の特徴を通して地域を理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "グランドキャニオンは、グランドキャニオンは地形と世界遺産の文脈で扱われる場所ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地形情報の」という点です。",
    "historyJa": "グランドキャニオンを歴史的にみると、「地形情報の」「条件抽出に」という背景があります。グランドキャニオンは地形と世界遺産の文脈で扱われる場所ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "グランドキャニオンについて具体的に知っておきたいのは「地形情報の」と「条件抽出に」です。グランドキャニオンは地形と世界遺産の文脈で扱われる場所ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "五大湖は北アメリカの大きな湖群です。 五大湖は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「湖の集合を扱う」という点です。歴史的には「湖の集合を扱う」「五大湖は北アメリカの大きな湖群です」という背景があり、五大湖は北アメリカの大きな湖群ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "湖の集合を扱う",
      "五大湖は北アメリカの大きな湖群です",
      "地形や自然環境の特徴を通して地域を理解するです",
      "アメリカを理解する基本事項",
      "五大湖は北アメリカの大きな湖群です。"
    ],
    "backgroundJa": "五大湖は、五大湖は北アメリカの大きな湖群ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「湖の集合を扱う」という点です。",
    "historyJa": "五大湖を歴史的にみると、「湖の集合を扱う」「五大湖は北アメリカの大きな湖群です」という背景があります。五大湖は北アメリカの大きな湖群ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "五大湖について具体的に知っておきたいのは「湖の集合を扱う」と「五大湖は北アメリカの大きな湖群です」です。五大湖は北アメリカの大きな湖群ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ルイジアナ買収はアメリカ領土拡大史の重要な出来事です。 ルイジアナ買収は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「年や出来事を並べる」という点です。歴史的には「年や出来事を並べる」「ルイジアナ買収はアメリカ領土拡大史の重要な出来事です」という背景があり、ルイジアナ買収はアメリカ領土拡大史の重要な出来事ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "年や出来事を並べる",
      "ルイジアナ買収はアメリカ領土拡大史の重要な出来事です",
      "領土や外交、移動の歴史が現在の地域理解につながるです",
      "アメリカを理解する基本事項",
      "ルイジアナ買収はアメリカ領土拡大史の重要な出来事です。"
    ],
    "backgroundJa": "ルイジアナ買収は、ルイジアナ買収はアメリカ領土拡大史の重要な出来事ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「年や出来事を並べる」という点です。",
    "historyJa": "ルイジアナ買収を歴史的にみると、「年や出来事を並べる」「ルイジアナ買収はアメリカ領土拡大史の重要な出来事です」という背景があります。ルイジアナ買収はアメリカ領土拡大史の重要な出来事ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ルイジアナ買収について具体的に知っておきたいのは「年や出来事を並べる」と「ルイジアナ買収はアメリカ領土拡大史の重要な出来事です」です。ルイジアナ買収はアメリカ領土拡大史の重要な出来事ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "大陸横断鉄道はプロモントリー・サミットと結びつく交通史のです。",
    "detailJa": "大陸横断鉄道はプロモントリー・サミットと結びつく交通史のです。 大陸横断鉄道は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「鉄道史の出来事」という点です。歴史的には「鉄道史の出来事」「イベント順序を扱う」という背景があり、大陸横断鉄道はプロモントリー・サミットと結びつく交通史のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "鉄道史の出来事",
      "イベント順序を扱う",
      "大陸横断鉄道はプロモントリー・サミットと結びつく交通史のです",
      "人や物の移動を支える交通網の発展を知ることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "大陸横断鉄道は、大陸横断鉄道はプロモントリー・サミットと結びつく交通史のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「鉄道史の出来事」という点です。",
    "historyJa": "大陸横断鉄道を歴史的にみると、「鉄道史の出来事」「イベント順序を扱う」という背景があります。大陸横断鉄道はプロモントリー・サミットと結びつく交通史のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "大陸横断鉄道について具体的に知っておきたいのは「鉄道史の出来事」と「イベント順序を扱う」です。大陸横断鉄道はプロモントリー・サミットと結びつく交通史のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ジャズはニューオーリンズと深く結びつく音楽文化です。 ニューオーリンズのジャズは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「音楽文化の」という点です。歴史的には「音楽文化の」「重複除去や分類に」という背景があり、ジャズはニューオーリンズと深く結びつく音楽文化ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "音楽文化の",
      "重複除去や分類に",
      "ジャズはニューオーリンズと深く結びつく音楽文化です",
      "長く受け継がれてきた表現や行事を、断定しすぎず文化として理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ニューオーリンズのジャズは、ジャズはニューオーリンズと深く結びつく音楽文化ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「音楽文化の」という点です。",
    "historyJa": "ニューオーリンズのジャズを歴史的にみると、「音楽文化の」「重複除去や分類に」という背景があります。ジャズはニューオーリンズと深く結びつく音楽文化ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ニューオーリンズのジャズについて具体的に知っておきたいのは「音楽文化の」と「重複除去や分類に」です。ジャズはニューオーリンズと深く結びつく音楽文化ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "ライトフライヤーは1903年の飛行で知られる航空史のです。",
    "detailJa": "ライトフライヤーは1903年の飛行で知られる航空史のです。 ライトフライヤーは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「初期航空史の」という点です。歴史的には「初期航空史の」「ライトフライヤーは1903年の飛行で知られる航空史のです」という背景があり、ライトフライヤーは1903年の飛行で知られる航空史のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "初期航空史の",
      "ライトフライヤーは1903年の飛行で知られる航空史のです",
      "観測、実験、開発の積み重ねが社会に影響した科学技術のです",
      "アメリカを理解する基本事項",
      "ライトフライヤーは1903年の飛行で知られる航空史のです。"
    ],
    "backgroundJa": "ライトフライヤーは、ライトフライヤーは1903年の飛行で知られる航空史のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「初期航空史の」という点です。",
    "historyJa": "ライトフライヤーを歴史的にみると、「初期航空史の」「ライトフライヤーは1903年の飛行で知られる航空史のです」という背景があります。ライトフライヤーは1903年の飛行で知られる航空史のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ライトフライヤーについて具体的に知っておきたいのは「初期航空史の」と「ライトフライヤーは1903年の飛行で知られる航空史のです」です。ライトフライヤーは1903年の飛行で知られる航空史のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "フーバーダムはアメリカの大規模土木・電力開発のです。",
    "detailJa": "フーバーダムはアメリカの大規模土木・電力開発のです。 フーバーダムは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ダムの工学情報」という点です。歴史的には「ダムの工学情報」「計算問題に」という背景があり、フーバーダムはアメリカの大規模土木・電力開発のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "ダムの工学情報",
      "計算問題に",
      "フーバーダムはアメリカの大規模土木・電力開発のです",
      "土木や建築の技術が社会基盤を支えてきたことを知ることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "フーバーダムは、フーバーダムはアメリカの大規模土木・電力開発のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「ダムの工学情報」という点です。",
    "historyJa": "フーバーダムを歴史的にみると、「ダムの工学情報」「計算問題に」という背景があります。フーバーダムはアメリカの大規模土木・電力開発のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "フーバーダムについて具体的に知っておきたいのは「ダムの工学情報」と「計算問題に」です。フーバーダムはアメリカの大規模土木・電力開発のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "USPSの州略称は州名を短いで表すために使われます。",
    "detailJa": "USPSの州略称は州名を短いで表すために使われます。 USPS州略称は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「大文字小文字に注意」という点です。歴史的には「大文字小文字に注意」「辞書検索の」という背景があり、USPSの州略称は州名を短いで表すために使われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "大文字小文字に注意",
      "辞書検索の",
      "USPSの州略称は州名を短いで表すために使われます",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "USPS州略称は、USPSの州略称は州名を短いで表すために使われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「大文字小文字に注意」という点です。",
    "historyJa": "USPS州略称を歴史的にみると、「大文字小文字に注意」「辞書検索の」という背景があります。USPSの州略称は州名を短いで表すために使われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "USPS州略称について具体的に知っておきたいのは「大文字小文字に注意」と「辞書検索の」です。USPSの州略称は州名を短いで表すために使われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "ZIPの先頭ゼロ",
    "summaryJa": "ZIPは文字列として扱うことで先頭ゼロを保てます。",
    "detailJa": "ZIPは文字列として扱うことで先頭ゼロを保てます。 ZIPの先頭ゼロは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数値化するとゼロが落ちる」という点です。歴史的には「数値化するとゼロが落ちる」「文字列が安全」という背景があり、ZIPは文字列として扱うことで先頭ゼロを保てますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "数値化するとゼロが落ちる",
      "文字列が安全",
      "ZIPは文字列として扱うことで先頭ゼロを保てます",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ZIPの先頭ゼロは、ZIPは文字列として扱うことで先頭ゼロを保てますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数値化するとゼロが落ちる」という点です。",
    "historyJa": "ZIPの先頭ゼロを歴史的にみると、「数値化するとゼロが落ちる」「文字列が安全」という背景があります。ZIPは文字列として扱うことで先頭ゼロを保てますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ZIPの先頭ゼロについて具体的に知っておきたいのは「数値化するとゼロが落ちる」と「文字列が安全」です。ZIPは文字列として扱うことで先頭ゼロを保てますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカでは月・日・年の順で日付を書く形式が使われます。 アメリカ式日付表記は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「月と日の順序が重要」という点です。歴史的には「月と日の順序が重要」「日付解析のバグになりやすい」という背景があり、アメリカでは月・日・年の順で日付を書く形式が使われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "月と日の順序が重要",
      "日付解析のバグになりやすい",
      "アメリカでは月・日・年の順で日付を書く形式が使われます",
      "制度上の年度や日付の扱いを理解するためです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ式日付表記は、アメリカでは月・日・年の順で日付を書く形式が使われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「月と日の順序が重要」という点です。",
    "historyJa": "アメリカ式日付表記を歴史的にみると、「月と日の順序が重要」「日付解析のバグになりやすい」という背景があります。アメリカでは月・日・年の順で日付を書く形式が使われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ式日付表記について具体的に知っておきたいのは「月と日の順序が重要」と「日付解析のバグになりやすい」です。アメリカでは月・日・年の順で日付を書く形式が使われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカでは地域ごとに異なるタイムゾーンが使われます。 アメリカのタイムゾーンは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地域と時差の対応が重要」という点です。歴史的には「地域と時差の対応が重要」「キーの取り違えに注意」という背景があり、アメリカでは地域ごとに異なるタイムゾーンが使われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "地域と時差の対応が重要",
      "キーの取り違えに注意",
      "アメリカでは地域ごとに異なるタイムゾーンが使われます",
      "地域と時刻の関係を理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカのタイムゾーンは、アメリカでは地域ごとに異なるタイムゾーンが使われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「地域と時差の対応が重要」という点です。",
    "historyJa": "アメリカのタイムゾーンを歴史的にみると、「地域と時差の対応が重要」「キーの取り違えに注意」という背景があります。アメリカでは地域ごとに異なるタイムゾーンが使われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカのタイムゾーンについて具体的に知っておきたいのは「地域と時差の対応が重要」と「キーの取り違えに注意」です。アメリカでは地域ごとに異なるタイムゾーンが使われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "北米の電話番号は桁数や区切りを整えて表示します。 北米電話番号は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数字だけを取り出す」という点です。歴史的には「数字だけを取り出す」「整形ルールを確認する」という背景があり、北米の電話番号は桁数や区切りを整えて表示しますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "数字だけを取り出す",
      "整形ルールを確認する",
      "北米の電話番号は桁数や区切りを整えて表示します",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "北米電話番号は、北米の電話番号は桁数や区切りを整えて表示しますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「数字だけを取り出す」という点です。",
    "historyJa": "北米電話番号を歴史的にみると、「数字だけを取り出す」「整形ルールを確認する」という背景があります。北米の電話番号は桁数や区切りを整えて表示しますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "北米電話番号について具体的に知っておきたいのは「数字だけを取り出す」と「整形ルールを確認する」です。北米の電話番号は桁数や区切りを整えて表示しますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "アメリカ下院の議席数",
    "summaryJa": "アメリカ合衆国下院は、州の人口に応じて配分される議席を持つ議院です。",
    "detailJa": "アメリカ合衆国下院は、州の人口に応じて配分される議席を持つ議院です。 連邦議会は上院と下院の二院制で、下院は人口に基づく代表を重視します。各州には少なくとも1議席が割り当てられ、人口調査の結果に応じて議席配分が見直されます。人口の変化が代表数に反映される点が特徴です。 下院の議席配分は合衆国憲法の代表制と結びついています。現在よく使われる435議席という枠組みは、人口増加と州の増加に対応しながら、20世紀に固定されてきました。 人口の多い州ほど多くの下院議席を持ちますが、人口の少ない州にも最低1議席があります。この仕組みにより、州ごとの人口差を反映しつつ、すべての州が下院に代表を送れます。 上院が各州2人で構成されるのに対し、下院は人口差を反映するため、同じ連邦議会でも代表の考え方が異なります。この違いが二院制の意味をはっきりさせます。",
    "keyPointsJa": [
      "人口に基づいて議席配分",
      "各州に最低1議席",
      "投票権を持つ議員は435人",
      "連邦議会の一院"
    ],
    "backgroundJa": "連邦議会は上院と下院の二院制で、下院は人口に基づく代表を重視します。各州には少なくとも1議席が割り当てられ、人口調査の結果に応じて議席配分が見直されます。人口の変化が代表数に反映される点が特徴です。",
    "historyJa": "下院の議席配分は合衆国憲法の代表制と結びついています。現在よく使われる435議席という枠組みは、人口増加と州の増加に対応しながら、20世紀に固定されてきました。",
    "episodeJa": "人口の多い州ほど多くの下院議席を持ちますが、人口の少ない州にも最低1議席があります。この仕組みにより、州ごとの人口差を反映しつつ、すべての州が下院に代表を送れます。 上院が各州2人で構成されるのに対し、下院は人口差を反映するため、同じ連邦議会でも代表の考え方が異なります。この違いが二院制の意味をはっきりさせます。"
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
    "detailJa": "アメリカでは連邦政府と州政府が異なる役割を持ちます。 連邦政府と州政府は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「政府構造の」という点です。歴史的には「政府構造の」「入れ子情報に向く」という背景があり、アメリカでは連邦政府と州政府が異なる役割を持ちますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "政府構造の",
      "入れ子情報に向く",
      "アメリカでは連邦政府と州政府が異なる役割を持ちます",
      "政治制度の中で、権限や役割の分担を理解するための基礎になることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "連邦政府と州政府は、アメリカでは連邦政府と州政府が異なる役割を持ちますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「政府構造の」という点です。",
    "historyJa": "連邦政府と州政府を歴史的にみると、「政府構造の」「入れ子情報に向く」という背景があります。アメリカでは連邦政府と州政府が異なる役割を持ちますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "連邦政府と州政府について具体的に知っておきたいのは「政府構造の」と「入れ子情報に向く」です。アメリカでは連邦政府と州政府が異なる役割を持ちますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "自由の女神とフランス",
    "summaryJa": "自由の女神像は、フランスからアメリカへ贈られた自由と民主主義の象徴です。",
    "detailJa": "自由の女神像は、フランスからアメリカへ贈られた自由と民主主義の象徴です。 自由の女神像はニューヨーク港に立つ記念像で、アメリカ独立と自由の理念を祝うためにフランス側の構想から生まれました。移民が海からアメリカへ入る時代には、新しい生活の入口を象徴する存在にもなりました。 像は19世紀後半に制作され、1886年に奉献されました。アメリカとフランスの友好、独立革命の記憶、自由を掲げる政治的理想が重なった記念物として理解されます。 正式名称は「世界を照らす自由」です。右手のたいまつ、左手の銘板、足元の壊れた鎖など、像の細部には自由や抑圧からの解放を示す意味が込められています。 台座を含む建設にはアメリカ側の協力も必要で、像そのものは国際的な共同事業として完成しました。そのため単なる観光名所ではなく、二国間の関係を示す記念物でもあります。",
    "keyPointsJa": [
      "フランスから贈られた",
      "ニューヨーク港に立つ",
      "1886年に奉献",
      "自由と民主主義の象徴"
    ],
    "backgroundJa": "自由の女神像はニューヨーク港に立つ記念像で、アメリカ独立と自由の理念を祝うためにフランス側の構想から生まれました。移民が海からアメリカへ入る時代には、新しい生活の入口を象徴する存在にもなりました。",
    "historyJa": "像は19世紀後半に制作され、1886年に奉献されました。アメリカとフランスの友好、独立革命の記憶、自由を掲げる政治的理想が重なった記念物として理解されます。",
    "episodeJa": "正式名称は「世界を照らす自由」です。右手のたいまつ、左手の銘板、足元の壊れた鎖など、像の細部には自由や抑圧からの解放を示す意味が込められています。 台座を含む建設にはアメリカ側の協力も必要で、像そのものは国際的な共同事業として完成しました。そのため単なる観光名所ではなく、二国間の関係を示す記念物でもあります。"
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
    "detailJa": "自由の鐘はアメリカの独立や自由の象徴として知られます。 自由の鐘は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「刻まれた文言が」という点です。歴史的には「刻まれた文言が」「文字列検索に」という背景があり、自由の鐘はアメリカの独立や自由の象徴として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "刻まれた文言が",
      "文字列検索に",
      "自由の鐘はアメリカの独立や自由の象徴として知られます",
      "国を表す象徴は、法律や慣習、歴史的な記憶と結びついて理解されます",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "自由の鐘は、自由の鐘はアメリカの独立や自由の象徴として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「刻まれた文言が」という点です。",
    "historyJa": "自由の鐘を歴史的にみると、「刻まれた文言が」「文字列検索に」という背景があります。自由の鐘はアメリカの独立や自由の象徴として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "自由の鐘について具体的に知っておきたいのは「刻まれた文言が」と「文字列検索に」です。自由の鐘はアメリカの独立や自由の象徴として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ヨセミテ国立公園は世界遺産として知られる自然景観の場所です。 ヨセミテ国立公園は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「自然遺産の」という点です。歴史的には「自然遺産の」「アクセスに」という背景があり、ヨセミテ国立公園は世界遺産として知られる自然景観の場所ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "自然遺産の",
      "アクセスに",
      "ヨセミテ国立公園は世界遺産として知られる自然景観の場所です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ヨセミテ国立公園は、ヨセミテ国立公園は世界遺産として知られる自然景観の場所ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「自然遺産の」という点です。",
    "historyJa": "ヨセミテ国立公園を歴史的にみると、「自然遺産の」「アクセスに」という背景があります。ヨセミテ国立公園は世界遺産として知られる自然景観の場所ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ヨセミテ国立公園について具体的に知っておきたいのは「自然遺産の」と「アクセスに」です。ヨセミテ国立公園は世界遺産として知られる自然景観の場所ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "メサ・ヴェルデは崖住居で知られる世界遺産です。 メサ・ヴェルデは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。歴史的には「文化遺産の」「数値比較に」という背景があり、メサ・ヴェルデは崖住居で知られる世界遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "文化遺産の",
      "数値比較に",
      "メサ・ヴェルデは崖住居で知られる世界遺産です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "メサ・ヴェルデは、メサ・ヴェルデは崖住居で知られる世界遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。",
    "historyJa": "メサ・ヴェルデを歴史的にみると、「文化遺産の」「数値比較に」という背景があります。メサ・ヴェルデは崖住居で知られる世界遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "メサ・ヴェルデについて具体的に知っておきたいのは「文化遺産の」と「数値比較に」です。メサ・ヴェルデは崖住居で知られる世界遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "ジョージ・ワシントン初代大統領",
    "summaryJa": "ジョージ・ワシントンは、アメリカ合衆国の初代大統領として知られます。",
    "detailJa": "ジョージ・ワシントンは、アメリカ合衆国の初代大統領として知られます。 ワシントンは独立戦争で大陸軍を率いた後、新しい連邦政府のもとで初代大統領に選ばれました。個人の名声だけでなく、憲法にもとづく大統領職を実際に始動させた人物として重要です。 1789年に大統領に就任したワシントンは、行政部門の運営、閣僚制度、任期後に権力を平和的に移す慣例など、後の大統領制に大きな影響を与えました。 二期を務めた後に自ら退任したことは、権力を独占しない共和国のあり方を示す例として語られます。初代大統領という肩書きだけでなく、制度の前例を作った点がこのテーマの核心です。 大統領という役職がまだ前例の少ない時代に、ワシントンの行動は後の政治文化の基準になりました。個人崇拝ではなく制度を安定させる選択が注目されます。",
    "keyPointsJa": [
      "アメリカ合衆国の初代大統領",
      "1789年に就任",
      "大統領職の前例を作った",
      "平和的な権力移行の象徴"
    ],
    "backgroundJa": "ワシントンは独立戦争で大陸軍を率いた後、新しい連邦政府のもとで初代大統領に選ばれました。個人の名声だけでなく、憲法にもとづく大統領職を実際に始動させた人物として重要です。",
    "historyJa": "1789年に大統領に就任したワシントンは、行政部門の運営、閣僚制度、任期後に権力を平和的に移す慣例など、後の大統領制に大きな影響を与えました。",
    "episodeJa": "二期を務めた後に自ら退任したことは、権力を独占しない共和国のあり方を示す例として語られます。初代大統領という肩書きだけでなく、制度の前例を作った点がこのテーマの核心です。 大統領という役職がまだ前例の少ない時代に、ワシントンの行動は後の政治文化の基準になりました。個人崇拝ではなく制度を安定させる選択が注目されます。"
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
    "detailJa": "アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です。 アーネスト・ヘミングウェイは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「分割代入に」という点です。歴史的には「分割代入に」「アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です」という背景があり、アーネスト・ヘミングウェイはノーベル文学賞で知られる作家ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "分割代入に",
      "アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です",
      "文学作品や言葉の表現が国際的に評価された事例として位置づけられます",
      "アメリカを理解する基本事項",
      "アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です。"
    ],
    "backgroundJa": "アーネスト・ヘミングウェイは、アーネスト・ヘミングウェイはノーベル文学賞で知られる作家ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「分割代入に」という点です。",
    "historyJa": "アーネスト・ヘミングウェイを歴史的にみると、「分割代入に」「アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です」という背景があります。アーネスト・ヘミングウェイはノーベル文学賞で知られる作家ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アーネスト・ヘミングウェイについて具体的に知っておきたいのは「分割代入に」と「アーネスト・ヘミングウェイはノーベル文学賞で知られる作家です」です。アーネスト・ヘミングウェイはノーベル文学賞で知られる作家ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "デナリはアメリカの高峰として知られる地理のです。",
    "detailJa": "デナリはアメリカの高峰として知られる地理のです。 デナリは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「標高比較の」という点です。歴史的には「標高比較の」「デナリはアメリカの高峰として知られる地理のです」という背景があり、デナリはアメリカの高峰として知られる地理のですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "標高比較の",
      "デナリはアメリカの高峰として知られる地理のです",
      "地形や自然環境の特徴を通して地域を理解するです",
      "アメリカを理解する基本事項",
      "デナリはアメリカの高峰として知られる地理のです。"
    ],
    "backgroundJa": "デナリは、デナリはアメリカの高峰として知られる地理のですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「標高比較の」という点です。",
    "historyJa": "デナリを歴史的にみると、「標高比較の」「デナリはアメリカの高峰として知られる地理のです」という背景があります。デナリはアメリカの高峰として知られる地理のですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "デナリについて具体的に知っておきたいのは「標高比較の」と「デナリはアメリカの高峰として知られる地理のです」です。デナリはアメリカの高峰として知られる地理のですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ゴールデンゲートブリッジはサンフランシスコの橋として知られます。 ゴールデンゲートブリッジは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「橋の情報を扱う」という点です。歴史的には「橋の情報を扱う」「値の取り出しに」という背景があり、ゴールデンゲートブリッジはサンフランシスコの橋として知られますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "橋の情報を扱う",
      "値の取り出しに",
      "ゴールデンゲートブリッジはサンフランシスコの橋として知られます",
      "建物や構造物を通して、社会の制度や技術の変化を知ることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ゴールデンゲートブリッジは、ゴールデンゲートブリッジはサンフランシスコの橋として知られますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「橋の情報を扱う」という点です。",
    "historyJa": "ゴールデンゲートブリッジを歴史的にみると、「橋の情報を扱う」「値の取り出しに」という背景があります。ゴールデンゲートブリッジはサンフランシスコの橋として知られますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ゴールデンゲートブリッジについて具体的に知っておきたいのは「橋の情報を扱う」と「値の取り出しに」です。ゴールデンゲートブリッジはサンフランシスコの橋として知られますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アラスカ購入はアメリカの領土史に関する出来事です。 アラスカ購入は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「購入年などを扱う」という点です。歴史的には「購入年などを扱う」「アラスカ購入はアメリカの領土史に関する出来事です」という背景があり、アラスカ購入はアメリカの領土史に関する出来事ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "購入年などを扱う",
      "アラスカ購入はアメリカの領土史に関する出来事です",
      "領土や外交、移動の歴史が現在の地域理解につながるです",
      "アメリカを理解する基本事項",
      "アラスカ購入はアメリカの領土史に関する出来事です。"
    ],
    "backgroundJa": "アラスカ購入は、アラスカ購入はアメリカの領土史に関する出来事ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「購入年などを扱う」という点です。",
    "historyJa": "アラスカ購入を歴史的にみると、「購入年などを扱う」「アラスカ購入はアメリカの領土史に関する出来事です」という背景があります。アラスカ購入はアメリカの領土史に関する出来事ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アラスカ購入について具体的に知っておきたいのは「購入年などを扱う」と「アラスカ購入はアメリカの領土史に関する出来事です」です。アラスカ購入はアメリカの領土史に関する出来事ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ルイス・クラーク探検隊は西方探検の経路で扱われます。 ルイス・クラーク探検隊は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「経路追跡の」という点です。歴史的には「経路追跡の」「reduceに向く」という背景があり、ルイス・クラーク探検隊は西方探検の経路で扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "経路追跡の",
      "reduceに向く",
      "ルイス・クラーク探検隊は西方探検の経路で扱われます",
      "領土や外交、移動の歴史が現在の地域理解につながることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ルイス・クラーク探検隊は、ルイス・クラーク探検隊は西方探検の経路で扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「経路追跡の」という点です。",
    "historyJa": "ルイス・クラーク探検隊を歴史的にみると、「経路追跡の」「reduceに向く」という背景があります。ルイス・クラーク探検隊は西方探検の経路で扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ルイス・クラーク探検隊について具体的に知っておきたいのは「経路追跡の」と「reduceに向く」です。ルイス・クラーク探検隊は西方探検の経路で扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "サンアントニオ・ミッションズは世界遺産として扱われる史跡群です。 サンアントニオ・ミッションズは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。歴史的には「文化遺産の」「filterとmapに」という背景があり、サンアントニオ・ミッションズは世界遺産として扱われる史跡群ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "文化遺産の",
      "filterとmapに",
      "サンアントニオ・ミッションズは世界遺産として扱われる史跡群です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "サンアントニオ・ミッションズは、サンアントニオ・ミッションズは世界遺産として扱われる史跡群ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。",
    "historyJa": "サンアントニオ・ミッションズを歴史的にみると、「文化遺産の」「filterとmapに」という背景があります。サンアントニオ・ミッションズは世界遺産として扱われる史跡群ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "サンアントニオ・ミッションズについて具体的に知っておきたいのは「文化遺産の」と「filterとmapに」です。サンアントニオ・ミッションズは世界遺産として扱われる史跡群ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ビール・ストリートはブルース音楽の文脈で知られる場所です。 ビール・ストリートとブルースは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「音楽文化の」という点です。歴史的には「音楽文化の」「ビール・ストリートはブルース音楽の文脈で知られる場所です」という背景があり、ビール・ストリートはブルース音楽の文脈で知られる場所ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "音楽文化の",
      "ビール・ストリートはブルース音楽の文脈で知られる場所です",
      "長く受け継がれてきた表現や行事を、断定しすぎず文化として理解するです",
      "アメリカを理解する基本事項",
      "ビール・ストリートはブルース音楽の文脈で知られる場所です。"
    ],
    "backgroundJa": "ビール・ストリートとブルースは、ビール・ストリートはブルース音楽の文脈で知られる場所ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「音楽文化の」という点です。",
    "historyJa": "ビール・ストリートとブルースを歴史的にみると、「音楽文化の」「ビール・ストリートはブルース音楽の文脈で知られる場所です」という背景があります。ビール・ストリートはブルース音楽の文脈で知られる場所ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ビール・ストリートとブルースについて具体的に知っておきたいのは「音楽文化の」と「ビール・ストリートはブルース音楽の文脈で知られる場所です」です。ビール・ストリートはブルース音楽の文脈で知られる場所ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機です。 ボイジャー1号は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「宇宙探査の」という点です。歴史的には「宇宙探査の」「入れ子を追う」という背景があり、ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "宇宙探査の",
      "入れ子を追う",
      "ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機です",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ボイジャー1号は、ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「宇宙探査の」という点です。",
    "historyJa": "ボイジャー1号を歴史的にみると、「宇宙探査の」「入れ子を追う」という背景があります。ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ボイジャー1号について具体的に知っておきたいのは「宇宙探査の」と「入れ子を追う」です。ボイジャー1号は「ペイル・ブルー・ドット」と結びつく探査機ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "GPSは複数のセグメントで構成される測位システムです。 GPSの構成要素は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「システム構成の」という点です。歴史的には「システム構成の」「map/filterに」という背景があり、GPSは複数のセグメントで構成される測位システムですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "システム構成の",
      "map/filterに",
      "GPSは複数のセグメントで構成される測位システムです",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "GPSの構成要素は、GPSは複数のセグメントで構成される測位システムですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「システム構成の」という点です。",
    "historyJa": "GPSの構成要素を歴史的にみると、「システム構成の」「map/filterに」という背景があります。GPSは複数のセグメントで構成される測位システムですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "GPSの構成要素について具体的に知っておきたいのは「システム構成の」と「map/filterに」です。GPSは複数のセグメントで構成される測位システムですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ブルックリン橋は開通年や構造で扱われる橋です。 ブルックリン橋は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「交通建築の」という点です。歴史的には「交通建築の」「複数情報のに」という背景があり、ブルックリン橋は開通年や構造で扱われる橋ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "交通建築の",
      "複数情報のに",
      "ブルックリン橋は開通年や構造で扱われる橋です",
      "都市や交通を支える構造物の歴史と技術を理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ブルックリン橋は、ブルックリン橋は開通年や構造で扱われる橋ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「交通建築の」という点です。",
    "historyJa": "ブルックリン橋を歴史的にみると、「交通建築の」「複数情報のに」という背景があります。ブルックリン橋は開通年や構造で扱われる橋ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ブルックリン橋について具体的に知っておきたいのは「交通建築の」と「複数情報のに」です。ブルックリン橋は開通年や構造で扱われる橋ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "12時間表記では正午と真夜中の扱いが特に重要です。 12時間表記のAM/PM変換は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「12 AMと12 PMに注意」という点です。歴史的には「12 AMと12 PMに注意」「境界条件の」という背景があり、12時間表記では正午と真夜中の扱いが特に重要ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "12 AMと12 PMに注意",
      "境界条件の",
      "12時間表記では正午と真夜中の扱いが特に重要です",
      "制度上の年度や日付の扱いを理解するためです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "12時間表記のAM/PM変換は、12時間表記では正午と真夜中の扱いが特に重要ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「12 AMと12 PMに注意」という点です。",
    "historyJa": "12時間表記のAM/PM変換を歴史的にみると、「12 AMと12 PMに注意」「境界条件の」という背景があります。12時間表記では正午と真夜中の扱いが特に重要ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "12時間表記のAM/PM変換について具体的に知っておきたいのは「12 AMと12 PMに注意」と「境界条件の」です。12時間表記では正午と真夜中の扱いが特に重要ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカでは気温表示に華氏を使う場面があります。 華氏温度は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「摂氏との変換が必要」という点です。歴史的には「摂氏との変換が必要」「演算順序に注意」という背景があり、アメリカでは気温表示に華氏を使う場面がありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "摂氏との変換が必要",
      "演算順序に注意",
      "アメリカでは気温表示に華氏を使う場面があります",
      "地域で使われる気象表現や単位の違いを理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "華氏温度は、アメリカでは気温表示に華氏を使う場面がありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「摂氏との変換が必要」という点です。",
    "historyJa": "華氏温度を歴史的にみると、「摂氏との変換が必要」「演算順序に注意」という背景があります。アメリカでは気温表示に華氏を使う場面がありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "華氏温度について具体的に知っておきたいのは「摂氏との変換が必要」と「演算順序に注意」です。アメリカでは気温表示に華氏を使う場面がありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカの住所ではアパートやスイート番号の表記順が重要です。 USPSの部屋番号表記は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「住所解析の」という点です。歴史的には「住所解析の」「トークン順序に注意」という背景があり、アメリカの住所ではアパートやスイート番号の表記順が重要ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "住所解析の",
      "トークン順序に注意",
      "アメリカの住所ではアパートやスイート番号の表記順が重要です",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "USPSの部屋番号表記は、アメリカの住所ではアパートやスイート番号の表記順が重要ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「住所解析の」という点です。",
    "historyJa": "USPSの部屋番号表記を歴史的にみると、「住所解析の」「トークン順序に注意」という背景があります。アメリカの住所ではアパートやスイート番号の表記順が重要ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "USPSの部屋番号表記について具体的に知っておきたいのは「住所解析の」と「トークン順序に注意」です。アメリカの住所ではアパートやスイート番号の表記順が重要ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "ZIP+4は基本のZIPに4桁を追加する形式です。",
    "detailJa": "ZIP+4は基本のZIPに4桁を追加する形式です。 ZIP+4形式は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「追加4桁は任意」という点です。歴史的には「追加4桁は任意」「正規表現の」という背景があり、ZIP+4は基本のZIPに4桁を追加する形式ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "追加4桁は任意",
      "正規表現の",
      "ZIP+4は基本のZIPに4桁を追加する形式です",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ZIP+4形式は、ZIP+4は基本のZIPに4桁を追加する形式ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「追加4桁は任意」という点です。",
    "historyJa": "ZIP+4形式を歴史的にみると、「追加4桁は任意」「正規表現の」という背景があります。ZIP+4は基本のZIPに4桁を追加する形式ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ZIP+4形式について具体的に知っておきたいのは「追加4桁は任意」と「正規表現の」です。ZIP+4は基本のZIPに4桁を追加する形式ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "summaryJa": "アメリカの住所情報では州、準州、DCを区別して扱います。",
    "detailJa": "アメリカの住所情報では州、準州、DCを区別して扱います。 州・準州・DCの分類は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「分類の違いが重要」という点です。歴史的には「分類の違いが重要」「enum設計の」という背景があり、アメリカの住所情報では州、準州、DCを区別して扱いますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "分類の違いが重要",
      "enum設計の",
      "アメリカの住所情報では州、準州、DCを区別して扱います",
      "行政上の区分や表記の決まりを理解するための実用的です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "州・準州・DCの分類は、アメリカの住所情報では州、準州、DCを区別して扱いますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「分類の違いが重要」という点です。",
    "historyJa": "州・準州・DCの分類を歴史的にみると、「分類の違いが重要」「enum設計の」という背景があります。アメリカの住所情報では州、準州、DCを区別して扱いますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "州・準州・DCの分類について具体的に知っておきたいのは「分類の違いが重要」と「enum設計の」です。アメリカの住所情報では州、準州、DCを区別して扱いますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "権利章典はアメリカ憲法の修正条項として基本的権利を示します。 権利章典は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「修正条項の」という点です。歴史的には「修正条項の」「含まれる自由を確認する」という背景があり、権利章典はアメリカ憲法の修正条項として基本的権利を示しますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "修正条項の",
      "含まれる自由を確認する",
      "権利章典はアメリカ憲法の修正条項として基本的権利を示します",
      "人権や統治の考え方を理解するための基礎になることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "権利章典は、権利章典はアメリカ憲法の修正条項として基本的権利を示しますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「修正条項の」という点です。",
    "historyJa": "権利章典を歴史的にみると、「修正条項の」「含まれる自由を確認する」という背景があります。権利章典はアメリカ憲法の修正条項として基本的権利を示しますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "権利章典について具体的に知っておきたいのは「修正条項の」と「含まれる自由を確認する」です。権利章典はアメリカ憲法の修正条項として基本的権利を示しますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "トニ・モリスンはノーベル文学賞で知られるアメリカの作家です。 トニ・モリスンは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「人物と受賞情報を扱う」という点です。歴史的には「人物と受賞情報を扱う」「トニ・モリスンはノーベル文学賞で知られるアメリカの作家です」という背景があり、トニ・モリスンはノーベル文学賞で知られるアメリカの作家ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "人物と受賞情報を扱う",
      "トニ・モリスンはノーベル文学賞で知られるアメリカの作家です",
      "文学作品や言葉の表現が国際的に評価された事例として位置づけられます",
      "アメリカを理解する基本事項",
      "トニ・モリスンはノーベル文学賞で知られるアメリカの作家です。"
    ],
    "backgroundJa": "トニ・モリスンは、トニ・モリスンはノーベル文学賞で知られるアメリカの作家ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「人物と受賞情報を扱う」という点です。",
    "historyJa": "トニ・モリスンを歴史的にみると、「人物と受賞情報を扱う」「トニ・モリスンはノーベル文学賞で知られるアメリカの作家です」という背景があります。トニ・モリスンはノーベル文学賞で知られるアメリカの作家ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "トニ・モリスンについて具体的に知っておきたいのは「人物と受賞情報を扱う」と「トニ・モリスンはノーベル文学賞で知られるアメリカの作家です」です。トニ・モリスンはノーベル文学賞で知られるアメリカの作家ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ合衆国の国璽には国の標語や象徴が含まれます。 アメリカ合衆国の国璽は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国の象徴の」という点です。歴史的には「国の象徴の」「別名や標語を扱う」という背景があり、アメリカ合衆国の国璽には国の標語や象徴が含まれますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "国の象徴の",
      "別名や標語を扱う",
      "アメリカ合衆国の国璽には国の標語や象徴が含まれます",
      "国を表す象徴は、法律や慣習、歴史的な記憶と結びついて理解されます",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ合衆国の国璽は、アメリカ合衆国の国璽には国の標語や象徴が含まれますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「国の象徴の」という点です。",
    "historyJa": "アメリカ合衆国の国璽を歴史的にみると、「国の象徴の」「別名や標語を扱う」という背景があります。アメリカ合衆国の国璽には国の標語や象徴が含まれますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ合衆国の国璽について具体的に知っておきたいのは「国の象徴の」と「別名や標語を扱う」です。アメリカ合衆国の国璽には国の標語や象徴が含まれますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "エバーグレーズは湿地生態系で知られる世界遺産です。 エバーグレーズは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「自然遺産の」という点です。歴史的には「自然遺産の」「生態系情報を扱う」という背景があり、エバーグレーズは湿地生態系で知られる世界遺産ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "自然遺産の",
      "生態系情報を扱う",
      "エバーグレーズは湿地生態系で知られる世界遺産です",
      "生態系や自然景観の価値を保護する考え方につながることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "エバーグレーズは、エバーグレーズは湿地生態系で知られる世界遺産ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「自然遺産の」という点です。",
    "historyJa": "エバーグレーズを歴史的にみると、「自然遺産の」「生態系情報を扱う」という背景があります。エバーグレーズは湿地生態系で知られる世界遺産ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "エバーグレーズについて具体的に知っておきたいのは「自然遺産の」と「生態系情報を扱う」です。エバーグレーズは湿地生態系で知られる世界遺産ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われます。 ハッブル宇宙望遠鏡は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「宇宙科学の」という点です。歴史的には「宇宙科学の」「タイムラインに」という背景があり、ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "宇宙科学の",
      "タイムラインに",
      "ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われます",
      "観測、実験、開発の積み重ねが社会に影響した科学技術です",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ハッブル宇宙望遠鏡は、ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「宇宙科学の」という点です。",
    "historyJa": "ハッブル宇宙望遠鏡を歴史的にみると、「宇宙科学の」「タイムラインに」という背景があります。ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ハッブル宇宙望遠鏡について具体的に知っておきたいのは「宇宙科学の」と「タイムラインに」です。ハッブル宇宙望遠鏡は打ち上げや整備の時系列で扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "州間高速道路システムはアメリカの広域交通網です。 州間高速道路システムは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「路線情報をする」という点です。歴史的には「路線情報をする」「州間高速道路システムはアメリカの広域交通網です」という背景があり、州間高速道路システムはアメリカの広域交通網ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "路線情報をする",
      "州間高速道路システムはアメリカの広域交通網です",
      "人や物の移動を支える交通網の発展を知るです",
      "アメリカを理解する基本事項",
      "州間高速道路システムはアメリカの広域交通網です。"
    ],
    "backgroundJa": "州間高速道路システムは、州間高速道路システムはアメリカの広域交通網ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「路線情報をする」という点です。",
    "historyJa": "州間高速道路システムを歴史的にみると、「路線情報をする」「州間高速道路システムはアメリカの広域交通網です」という背景があります。州間高速道路システムはアメリカの広域交通網ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "州間高速道路システムについて具体的に知っておきたいのは「路線情報をする」と「州間高速道路システムはアメリカの広域交通網です」です。州間高速道路システムはアメリカの広域交通網ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "連邦祝日は曜日によって振替日を考える場合があります。 連邦祝日の振替規則は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「週末境界が重要」という点です。歴史的には「週末境界が重要」「連邦祝日は曜日によって振替日を考える場合があります」という背景があり、連邦祝日は曜日によって振替日を考える場合がありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "週末境界が重要",
      "連邦祝日は曜日によって振替日を考える場合があります",
      "制度上の年度や日付の扱いを理解するためのです",
      "アメリカを理解する基本事項",
      "連邦祝日は曜日によって振替日を考える場合があります。"
    ],
    "backgroundJa": "連邦祝日の振替規則は、連邦祝日は曜日によって振替日を考える場合がありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「週末境界が重要」という点です。",
    "historyJa": "連邦祝日の振替規則を歴史的にみると、「週末境界が重要」「連邦祝日は曜日によって振替日を考える場合があります」という背景があります。連邦祝日は曜日によって振替日を考える場合がありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "連邦祝日の振替規則について具体的に知っておきたいのは「週末境界が重要」と「連邦祝日は曜日によって振替日を考える場合があります」です。連邦祝日は曜日によって振替日を考える場合がありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ慣用単位ではマイルやフィートを使う場面があります。 マイルとフィートは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「単位変換の」という点です。歴史的には「単位変換の」「換算値の境界に注意」という背景があり、アメリカ慣用単位ではマイルやフィートを使う場面がありますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "単位変換の",
      "換算値の境界に注意",
      "アメリカ慣用単位ではマイルやフィートを使う場面があります",
      "単位や標準が社会の共通理解を支えることを知ることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "マイルとフィートは、アメリカ慣用単位ではマイルやフィートを使う場面がありますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「単位変換の」という点です。",
    "historyJa": "マイルとフィートを歴史的にみると、「単位変換の」「換算値の境界に注意」という背景があります。アメリカ慣用単位ではマイルやフィートを使う場面がありますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "マイルとフィートについて具体的に知っておきたいのは「単位変換の」と「換算値の境界に注意」です。アメリカ慣用単位ではマイルやフィートを使う場面がありますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ドルとセントの計算では丸め誤差や表示形式に注意が必要です。 ドルとセントは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小数計算の」という点です。歴史的には「小数計算の」「金額表示では丸めが重要」という背景があり、ドルとセントの計算では丸め誤差や表示形式に注意が必要ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "小数計算の",
      "金額表示では丸めが重要",
      "ドルとセントの計算では丸め誤差や表示形式に注意が必要です",
      "お金や表示単位を通して、日常生活と制度の関係を理解することです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ドルとセントは、ドルとセントの計算では丸め誤差や表示形式に注意が必要ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「小数計算の」という点です。",
    "historyJa": "ドルとセントを歴史的にみると、「小数計算の」「金額表示では丸めが重要」という背景があります。ドルとセントの計算では丸め誤差や表示形式に注意が必要ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ドルとセントについて具体的に知っておきたいのは「小数計算の」と「金額表示では丸めが重要」です。ドルとセントの計算では丸め誤差や表示形式に注意が必要ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "キング牧師はノーベル平和賞で知られる公民権運動の人物です。 キング牧師とノーベル平和賞は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「検索と文字列生成に」という点です。歴史的には「検索と文字列生成に」「キング牧師はノーベル平和賞で知られる公民権運動の人物です」という背景があり、キング牧師はノーベル平和賞で知られる公民権運動の人物ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "検索と文字列生成に",
      "キング牧師はノーベル平和賞で知られる公民権運動の人物です",
      "社会運動や思想の影響が国際的に評価された事例です",
      "アメリカを理解する基本事項",
      "キング牧師はノーベル平和賞で知られる公民権運動の人物です。"
    ],
    "backgroundJa": "キング牧師とノーベル平和賞は、キング牧師はノーベル平和賞で知られる公民権運動の人物ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「検索と文字列生成に」という点です。",
    "historyJa": "キング牧師とノーベル平和賞を歴史的にみると、「検索と文字列生成に」「キング牧師はノーベル平和賞で知られる公民権運動の人物です」という背景があります。キング牧師はノーベル平和賞で知られる公民権運動の人物ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "キング牧師とノーベル平和賞について具体的に知っておきたいのは「検索と文字列生成に」と「キング牧師はノーベル平和賞で知られる公民権運動の人物です」です。キング牧師はノーベル平和賞で知られる公民権運動の人物ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "憲法修正第1条は複数の自由を示す条文として扱われます。 憲法修正第1条は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「五つの自由が」という点です。歴史的には「五つの自由が」「憲法修正第1条は複数の自由を示す条文として扱われます」という背景があり、憲法修正第1条は複数の自由を示す条文として扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "五つの自由が",
      "憲法修正第1条は複数の自由を示す条文として扱われます",
      "権利や信仰、表現の自由をめぐる制度理解につながるです",
      "アメリカを理解する基本事項",
      "憲法修正第1条は複数の自由を示す条文として扱われます。"
    ],
    "backgroundJa": "憲法修正第1条は、憲法修正第1条は複数の自由を示す条文として扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「五つの自由が」という点です。",
    "historyJa": "憲法修正第1条を歴史的にみると、「五つの自由が」「憲法修正第1条は複数の自由を示す条文として扱われます」という背景があります。憲法修正第1条は複数の自由を示す条文として扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "憲法修正第1条について具体的に知っておきたいのは「五つの自由が」と「憲法修正第1条は複数の自由を示す条文として扱われます」です。憲法修正第1条は複数の自由を示す条文として扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ラシュモア山には複数の大統領像が刻まれています。 ラシュモア山は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「大統領名の集合を扱う」という点です。歴史的には「大統領名の集合を扱う」「ラシュモア山には複数の大統領像が刻まれています」という背景があり、ラシュモア山には複数の大統領像が刻まれていますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "大統領名の集合を扱う",
      "ラシュモア山には複数の大統領像が刻まれています",
      "アメリカの社会や文化を理解するためのです",
      "アメリカを理解する基本事項",
      "ラシュモア山には複数の大統領像が刻まれています。"
    ],
    "backgroundJa": "ラシュモア山は、ラシュモア山には複数の大統領像が刻まれていますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「大統領名の集合を扱う」という点です。",
    "historyJa": "ラシュモア山を歴史的にみると、「大統領名の集合を扱う」「ラシュモア山には複数の大統領像が刻まれています」という背景があります。ラシュモア山には複数の大統領像が刻まれていますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ラシュモア山について具体的に知っておきたいのは「大統領名の集合を扱う」と「ラシュモア山には複数の大統領像が刻まれています」です。ラシュモア山には複数の大統領像が刻まれていますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡です。 チャコ文化は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。歴史的には「文化遺産の」「入れ子情報に」という背景があり、チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "文化遺産の",
      "入れ子情報に",
      "チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡です",
      "文化や自然の価値を次世代へ残すために保護される場所に関わることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "チャコ文化は、チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「文化遺産の」という点です。",
    "historyJa": "チャコ文化を歴史的にみると、「文化遺産の」「入れ子情報に」という背景があります。チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "チャコ文化について具体的に知っておきたいのは「文化遺産の」と「入れ子情報に」です。チャコ文化は世界遺産の文脈で扱われるアメリカ南西部の遺跡ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "エリー運河はアメリカの交通史で重要な運河です。 エリー運河は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「運河ルートの」という点です。歴史的には「運河ルートの」「経路計算に」という背景があり、エリー運河はアメリカの交通史で重要な運河ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "運河ルートの",
      "経路計算に",
      "エリー運河はアメリカの交通史で重要な運河です",
      "人や物の移動を支える交通網の発展を知ることです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "エリー運河は、エリー運河はアメリカの交通史で重要な運河ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「運河ルートの」という点です。",
    "historyJa": "エリー運河を歴史的にみると、「運河ルートの」「経路計算に」という背景があります。エリー運河はアメリカの交通史で重要な運河ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "エリー運河について具体的に知っておきたいのは「運河ルートの」と「経路計算に」です。エリー運河はアメリカの交通史で重要な運河ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "ARPANETは初期インターネット史で知られるネットワークです。 ARPANETは、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「最初のメッセージが」という点です。歴史的には「最初のメッセージが」「ARPANETは初期インターネット史で知られるネットワークです」という背景があり、ARPANETは初期インターネット史で知られるネットワークですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "最初のメッセージが",
      "ARPANETは初期インターネット史で知られるネットワークです",
      "観測、実験、開発の積み重ねが社会に影響した科学技術のです",
      "アメリカを理解する基本事項",
      "ARPANETは初期インターネット史で知られるネットワークです。"
    ],
    "backgroundJa": "ARPANETは、ARPANETは初期インターネット史で知られるネットワークですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「最初のメッセージが」という点です。",
    "historyJa": "ARPANETを歴史的にみると、「最初のメッセージが」「ARPANETは初期インターネット史で知られるネットワークです」という背景があります。ARPANETは初期インターネット史で知られるネットワークですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ARPANETについて具体的に知っておきたいのは「最初のメッセージが」と「ARPANETは初期インターネット史で知られるネットワークです」です。ARPANETは初期インターネット史で知られるネットワークですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "detailJa": "アメリカ連邦会計年度は10月1日に始まる年度として扱われます。 アメリカ連邦会計年度は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「10月1日が境界」という点です。歴史的には「10月1日が境界」「日付境界の」という背景があり、アメリカ連邦会計年度は10月1日に始まる年度として扱われますという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "10月1日が境界",
      "日付境界の",
      "アメリカ連邦会計年度は10月1日に始まる年度として扱われます",
      "制度上の年度や日付の扱いを理解するためです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "アメリカ連邦会計年度は、アメリカ連邦会計年度は10月1日に始まる年度として扱われますという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「10月1日が境界」という点です。",
    "historyJa": "アメリカ連邦会計年度を歴史的にみると、「10月1日が境界」「日付境界の」という背景があります。アメリカ連邦会計年度は10月1日に始まる年度として扱われますという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "アメリカ連邦会計年度について具体的に知っておきたいのは「10月1日が境界」と「日付境界の」です。アメリカ連邦会計年度は10月1日に始まる年度として扱われますという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
    "titleJa": "ワシントン州とワシントンD.C.",
    "summaryJa": "ワシントン州とワシントンD.C.は、名前が似ていますが別の行政区分です。",
    "detailJa": "ワシントン州とワシントンD.C.は、名前が似ていますが別の行政区分です。 ワシントン州はアメリカ西海岸にある州で、ワシントンD.C.は連邦政府の首都として置かれた特別区です。同じ「Washington」という名前でも、州と首都地区を区別しないと地理や行政の意味が変わります。 ワシントンD.C.はどの州にも属さない連邦の首都地区として設けられました。一方、ワシントン州は太平洋岸北西部の州で、州政府と地域社会を持つ通常の州として扱われます。",
    "keyPointsJa": [
      "ワシントン州は州",
      "ワシントンD.C.は連邦首都地区",
      "D.C.はDistrict of Columbiaの略",
      "同名でも行政区分が異なる"
    ],
    "backgroundJa": "ワシントン州はアメリカ西海岸にある州で、ワシントンD.C.は連邦政府の首都として置かれた特別区です。同じ「Washington」という名前でも、州と首都地区を区別しないと地理や行政の意味が変わります。",
    "historyJa": "ワシントンD.C.はどの州にも属さない連邦の首都地区として設けられました。一方、ワシントン州は太平洋岸北西部の州で、州政府と地域社会を持つ通常の州として扱われます。",
    "episodeJa": "住所や統計では、Washington と書かれていても州を指すのか首都地区を指すのかを確認する必要があります。D.C.は District of Columbia の略で、州名ではない点が混同を防ぐ手がかりになります。"
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
    "detailJa": "Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要です。 ハワイ名称のUnicode正規化は、背景を知ることで名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「オキナを含む表記」という点です。歴史的には「オキナを含む表記」「Unicode正規化の」という背景があり、Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要ですという事実は時代や制度の変化と結びついています。",
    "keyPointsJa": [
      "オキナを含む表記",
      "Unicode正規化の",
      "Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要です",
      "地名の表記と文字の扱いが結びつくことです",
      "アメリカを理解する基本事項"
    ],
    "backgroundJa": "ハワイ名称のUnicode正規化は、Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要ですという事実です。背景を知ることで、名称だけでなく成立の経緯や役割が見えてきます。特に注目したいのは「オキナを含む表記」という点です。",
    "historyJa": "ハワイ名称のUnicode正規化を歴史的にみると、「オキナを含む表記」「Unicode正規化の」という背景があります。Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要ですという事実は、時代や制度の変化と結びついて成り立っています。",
    "episodeJa": "ハワイ名称のUnicode正規化について具体的に知っておきたいのは「オキナを含む表記」と「Unicode正規化の」です。Hawaiʻi の表記では特殊な記号を含む文字列正規化が重要ですという点を踏まえると、実際にどのような場面で意味を持つかが分かります。"
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
