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
    "summaryJa": "湯川秀樹は1949年に日本人として初めてノーベル物理学賞を受賞した理論物理学者です。",
    "detailJa": "湯川秀樹は1949年に日本人として初めてノーベル物理学賞を受賞した理論物理学者です。 湯川秀樹は1935年、原子核内で陽子と中性子を結びつける力を媒介する「中間子」という未知の粒子の存在を理論的に予言しました。当時の物理学は実験が先行する分野が多い中、理論計算から新粒子の存在を導き出した点が高く評価されました。",
    "keyPointsJa": [
      "1949年にノーベル物理学賞を受賞",
      "中間子の存在を理論的に予言した",
      "京都大学を中心に研究活動を行った",
      "戦後の日本の科学界に大きな自信を与えた"
    ],
    "backgroundJa": "湯川秀樹は1935年、原子核内で陽子と中性子を結びつける力を媒介する「中間子」という未知の粒子の存在を理論的に予言しました。当時の物理学は実験が先行する分野が多い中、理論計算から新粒子の存在を導き出した点が高く評価されました。",
    "historyJa": "湯川の予言から12年後の1947年、宇宙線の観測によって中間子（パイ中間子）が実際に発見され、理論の正しさが裏付けられました。これを受けて1949年、ノーベル物理学賞が湯川に贈られ、日本人科学者として初の受賞となりました。",
    "episodeJa": "受賞は第二次世界大戦の敗戦から間もない1949年のことで、戦後の混乱の中にあった日本社会に大きな希望を与えたといわれています。湯川はその後も京都大学基礎物理学研究所の初代所長として、若手研究者の育成に力を注ぎました。"
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
    "summaryJa": "一円硬貨は日本で発行されている額面1円のアルミ製硬貨です。",
    "detailJa": "一円硬貨は日本で発行されている額面1円のアルミ製硬貨です。 一円硬貨は1955年に現在のデザインで発行が始まりました。表面には成長を象徴する若木が描かれ、文字以外の図柄が用いられている点が他の多くの硬貨と異なります。",
    "keyPointsJa": [
      "1955年から現行デザインで発行",
      "純アルミニウムでできている硬貨",
      "表面には若木がデザインされている",
      "製造コストが額面の1円を上回ることがある"
    ],
    "backgroundJa": "一円硬貨は1955年に現在のデザインで発行が始まりました。表面には成長を象徴する若木が描かれ、文字以外の図柄が用いられている点が他の多くの硬貨と異なります。",
    "historyJa": "一円硬貨は純アルミニウムで作られており、非常に軽い硬貨として知られています。製造には金属の精製や加工のコストがかかるため、額面の1円を上回る製造費がかかっていると指摘されることがあります。",
    "episodeJa": "日常生活では消費税の計算などで1円単位の支払いが発生するため、現在も広く使われています。一方で電子マネーやキャッシュレス決済の普及により、硬貨そのものの使用頻度は徐々に変化してきています。"
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
    "summaryJa": "東海道新幹線は1964年に東京オリンピックの開幕直前に開業した世界初の高速鉄道です。",
    "detailJa": "東海道新幹線は1964年に東京オリンピックの開幕直前に開業した世界初の高速鉄道です。 東海道新幹線は東京と大阪を結ぶ路線として計画され、在来線とは異なる専用の線路と車両を新たに整備することで高速運転を実現しました。これは当時の世界の鉄道技術の中でも先進的な取り組みでした。",
    "keyPointsJa": [
      "1964年10月1日に開業",
      "東京〜大阪間を結ぶ",
      "世界で最初の高速鉄道とされる",
      "時速200kmを超える営業運転を実現"
    ],
    "backgroundJa": "東海道新幹線は東京と大阪を結ぶ路線として計画され、在来線とは異なる専用の線路と車両を新たに整備することで高速運転を実現しました。これは当時の世界の鉄道技術の中でも先進的な取り組みでした。",
    "historyJa": "開業は1964年10月1日で、同じ年に開催された東京オリンピックの開幕直前というタイミングでした。これにより新幹線は日本の戦後復興と高度経済成長を象徴する存在としても語られています。",
    "episodeJa": "開業当初の最高速度は時速210kmで、当時の鉄道としては世界最速級でした。その後も技術改良が重ねられ、現在の新幹線網は日本全国に広がる高速鉄道システムへと発展しています。"
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
    "summaryJa": "QRコードは1994年に日本の企業デンソーウェーブが開発した二次元コードです。",
    "detailJa": "QRコードは1994年に日本の企業デンソーウェーブが開発した二次元コードです。 QRコードは自動車部品メーカーであるデンソーの開発部門（現デンソーウェーブ）が、工場での部品管理を効率化する目的で開発した二次元コードです。名前の「QR」は「Quick Response（早い応答）」の意味から付けられました。",
    "keyPointsJa": [
      "1994年にデンソーウェーブが開発",
      "「Quick Response」の略がQR",
      "従来のバーコードより多くの情報を格納できる",
      "誰でも使える規格として無償公開された"
    ],
    "backgroundJa": "QRコードは自動車部品メーカーであるデンソーの開発部門（現デンソーウェーブ）が、工場での部品管理を効率化する目的で開発した二次元コードです。名前の「QR」は「Quick Response（早い応答）」の意味から付けられました。",
    "historyJa": "従来の一次元バーコードは数字や英字を中心に少量の情報しか記録できませんでしたが、QRコードは縦横に情報を配置することで、より多くの文字数や複数言語の情報を格納できるようになりました。",
    "episodeJa": "デンソーウェーブはQRコードの特許権を保有しつつも、規格化された読み取り方法に関しては特許権を行使しない方針を取り、誰でも自由に使える技術として普及させました。これが現在のスマートフォン決済や情報案内など幅広い分野での活用につながっています。"
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
    "summaryJa": "法隆寺地域の仏教建造物は1993年に登録された日本初の世界文化遺産です。",
    "detailJa": "法隆寺地域の仏教建造物は1993年に登録された日本初の世界文化遺産です。 法隆寺は奈良県斑鳩町にある寺院で、聖徳太子によって建立されたと伝えられています。境内には現存する世界最古の木造建築とされる五重塔や金堂が含まれます。",
    "keyPointsJa": [
      "1993年に日本初の世界文化遺産として登録",
      "現存する世界最古の木造建築群とされる",
      "聖徳太子と関わりが深い寺院",
      "法隆寺と法起寺の建造物が対象"
    ],
    "backgroundJa": "法隆寺は奈良県斑鳩町にある寺院で、聖徳太子によって建立されたと伝えられています。境内には現存する世界最古の木造建築とされる五重塔や金堂が含まれます。",
    "historyJa": "1993年、法隆寺と法起寺の建造物群は、姫路城とともに日本で初めて世界文化遺産に登録されました。これは日本の文化財が国際的に評価される大きな出来事でした。",
    "episodeJa": "法隆寺の建造物は7世紀の建立当時の姿を伝える資料として、世界の建築史研究でも重要視されています。長い年月を経て幾度も修理が行われながらも、当初の建築技術や様式が今に伝えられている点が高く評価されています。"
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
    "summaryJa": "桜は日本文化で古くから親しまれてきた花ですが、法律で定められた国花ではありません。",
    "detailJa": "桜は日本文化で古くから親しまれてきた花ですが、法律で定められた国花ではありません。 日本には法律で正式に定められた「国花」はありませんが、桜は広く国を象徴する花として親しまれています。皇室の紋章としては菊が使われており、桜と菊はそれぞれ異なる文化的な位置づけを持っています。",
    "keyPointsJa": [
      "法律で定められた正式な国花は存在しない",
      "皇室の紋章には菊が使われている",
      "花見の風習は奈良・平安時代から続く",
      "春の訪れと人生の儚さの象徴とされる"
    ],
    "backgroundJa": "日本には法律で正式に定められた「国花」はありませんが、桜は広く国を象徴する花として親しまれています。皇室の紋章としては菊が使われており、桜と菊はそれぞれ異なる文化的な位置づけを持っています。",
    "historyJa": "桜を眺めて楽しむ「花見」の風習は奈良時代から平安時代にかけて貴族の間で広まり、後に江戸時代には庶民の間にも広く定着しました。",
    "episodeJa": "桜は短い期間で咲いて散ることから、古くから人生の儚さや美しさの象徴として和歌や文学に多く詠まれてきました。現在も毎年春になると各地で花見が行われ、日本の季節行事として定着しています。"
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
    "summaryJa": "屋久島は1993年に登録された日本初の世界自然遺産の一つで、豊かな森林生態系で知られます。",
    "detailJa": "屋久島は1993年に登録された日本初の世界自然遺産の一つで、豊かな森林生態系で知られます。 屋久島は鹿児島県に属する島で、標高の高い山々を中心に亜熱帯から亜寒帯まで多様な植生がみられることが特徴です。島内には樹齢数千年とされる屋久杉の巨木が点在しています。",
    "keyPointsJa": [
      "1993年に日本初の世界自然遺産として登録",
      "樹齢数千年とされる縄文杉が有名",
      "亜熱帯から亜寒帯までの植生が分布",
      "年間降水量が非常に多い島"
    ],
    "backgroundJa": "屋久島は鹿児島県に属する島で、標高の高い山々を中心に亜熱帯から亜寒帯まで多様な植生がみられることが特徴です。島内には樹齢数千年とされる屋久杉の巨木が点在しています。",
    "historyJa": "屋久島は白神山地とともに1993年、日本で最初に世界自然遺産に登録されました。これは日本の自然環境が国際的にも高く評価された出来事でした。",
    "episodeJa": "島の中でも特に有名なのが「縄文杉」と呼ばれる屋久杉で、推定樹齢は数千年とされています。豊富な雨量と独特の地形が育んだ原生的な森林景観は、登山客や研究者から高い関心を集めています。"
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
    "summaryJa": "白神山地は1993年に登録された世界自然遺産で、広大なブナの原生林が残る地域です。",
    "detailJa": "白神山地は1993年に登録された世界自然遺産で、広大なブナの原生林が残る地域です。 白神山地は青森県と秋田県の県境に広がる山地で、人間の影響をほとんど受けていない広大なブナの原生林が残っていることで知られています。",
    "keyPointsJa": [
      "1993年に世界自然遺産として登録",
      "人の影響をほぼ受けないブナ原生林が広がる",
      "青森県と秋田県にまたがる山地",
      "多様な動植物の生息地となっている"
    ],
    "backgroundJa": "白神山地は青森県と秋田県の県境に広がる山地で、人間の影響をほとんど受けていない広大なブナの原生林が残っていることで知られています。",
    "historyJa": "白神山地は屋久島とともに1993年、日本で最初の世界自然遺産として登録されました。手つかずの自然が広い範囲にわたって保存されていることが評価の理由となっています。",
    "episodeJa": "ブナ林は保水力が高く、地域の水源としても重要な役割を果たしています。世界遺産の登録後は核心地域への立ち入りが制限されるなど、自然環境を守るための取り組みが続けられています。"
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
    "summaryJa": "国会議事堂は1936年に完成した、日本の国会が開かれる建物です。",
    "detailJa": "国会議事堂は1936年に完成した、日本の国会が開かれる建物です。 国会議事堂は東京都千代田区永田町にあり、衆議院と参議院の議場や議員が活動する施設を備えた建物です。建物は中央の塔を中心に左右対称の構造になっています。",
    "keyPointsJa": [
      "1936年に完成",
      "中央に塔がある左右対称の建築",
      "衆議院と参議院の議場がそれぞれ置かれている",
      "建設には約17年の期間を要した"
    ],
    "backgroundJa": "国会議事堂は東京都千代田区永田町にあり、衆議院と参議院の議場や議員が活動する施設を備えた建物です。建物は中央の塔を中心に左右対称の構造になっています。",
    "historyJa": "建設は1920年に始まり、計画から完成まで長い年月を経て1936年に完成しました。当時の最先端の建築技術と国内産の材料が用いられたことでも知られています。",
    "episodeJa": "建物の左側（南側）に衆議院、右側（北側）に参議院の議場が置かれており、それぞれの院が独立して審議を行えるようになっています。完成から長い年月が経つ今も、日本の立法府の象徴として使われ続けています。"
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
    "summaryJa": "はやぶさは小惑星イトカワからサンプルを持ち帰った日本の探査機です。",
    "detailJa": "はやぶさは小惑星イトカワからサンプルを持ち帰った日本の探査機です。 はやぶさはJAXA（宇宙航空研究開発機構）が開発した小惑星探査機で、2003年に打ち上げられました。目的地である小惑星イトカワに到達し、表面の微粒子を採取することを目指しました。",
    "keyPointsJa": [
      "2003年に打ち上げられた",
      "小惑星イトカワに着陸した",
      "2010年に地球へサンプルを持ち帰った",
      "世界初の小惑星サンプルリターンを達成"
    ],
    "backgroundJa": "はやぶさはJAXA（宇宙航空研究開発機構）が開発した小惑星探査機で、2003年に打ち上げられました。目的地である小惑星イトカワに到達し、表面の微粒子を採取することを目指しました。",
    "historyJa": "探査機は機体の故障や通信の途絶など多くの困難に遭遇しましたが、2010年6月に地球へ帰還し、世界で初めて小惑星の物質を持ち帰ることに成功しました。",
    "episodeJa": "帰還時には機体本体が大気圏で燃え尽きる一方、サンプルを収めたカプセルだけが分離され、オーストラリアの砂漠に着陸しました。この快挙は国内外から大きな注目を集め、後継機「はやぶさ2」の開発にもつながりました。"
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
    "summaryJa": "はやぶさ2は小惑星リュウグウからサンプルを持ち帰った日本の探査機です。",
    "detailJa": "はやぶさ2は小惑星リュウグウからサンプルを持ち帰った日本の探査機です。 はやぶさ2は初代「はやぶさ」の後継機として2014年に打ち上げられた探査機で、目的地は小惑星リュウグウでした。リュウグウは太陽系の初期の状態を知る手がかりを持つとされる天体です。",
    "keyPointsJa": [
      "2014年に打ち上げられた",
      "小惑星リュウグウに着陸した",
      "人工クレーターを作る実験を行った",
      "2020年に地球へサンプルを持ち帰った"
    ],
    "backgroundJa": "はやぶさ2は初代「はやぶさ」の後継機として2014年に打ち上げられた探査機で、目的地は小惑星リュウグウでした。リュウグウは太陽系の初期の状態を知る手がかりを持つとされる天体です。",
    "historyJa": "はやぶさ2はリュウグウの表面だけでなく、衝突装置を使って人工的にクレーターを作り、地下の物質を採取するという初代機にはなかった新しい挑戦を行いました。",
    "episodeJa": "2020年12月、サンプルを収めたカプセルが地球に帰還し、リュウグウの砂や岩石を持ち帰ることに成功しました。探査機本体はその後も別の小惑星探査へ向けて飛行を続けています。"
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
    "summaryJa": "能は役柄ごとに決まった構成を持つ日本の伝統芸能です。",
    "detailJa": "能は役柄ごとに決まった構成を持つ日本の伝統芸能です。 能は歌や舞、台詞を組み合わせた日本の伝統的な舞台芸術で、主役を演じる「シテ」と、シテの相手役となる「ワキ」を中心に物語が進みます。シテはしばしば能面を着けて演じます。",
    "keyPointsJa": [
      "ユネスコ無形文化遺産に登録されている",
      "主役を演じる「シテ」と相手役の「ワキ」がいる",
      "能面を使って役柄を表現する",
      "室町時代に観阿弥・世阿弥によって大成された"
    ],
    "backgroundJa": "能は歌や舞、台詞を組み合わせた日本の伝統的な舞台芸術で、主役を演じる「シテ」と、シテの相手役となる「ワキ」を中心に物語が進みます。シテはしばしば能面を着けて演じます。",
    "historyJa": "能は室町時代に観阿弥と世阿弥という父子によって芸術として大成されました。それ以前から存在した猿楽などの芸能を基礎としながら、洗練された様式美を持つ舞台芸術へと発展しました。",
    "episodeJa": "能は2001年にユネスコの無形文化遺産に登録され、世界的にも評価される日本の伝統文化となっています。現在も能楽堂などで定期的に上演が行われています。"
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
    "summaryJa": "松尾芭蕉は紀行文「おくのほそ道」で知られる江戸時代の俳人です。",
    "detailJa": "松尾芭蕉は紀行文「おくのほそ道」で知られる江戸時代の俳人です。 松尾芭蕉は江戸時代前期に活躍した俳人で、簡潔な言葉で自然や心情を描く俳句を文学的な高みへと押し上げた人物として知られています。",
    "keyPointsJa": [
      "江戸時代前期に活躍した俳人",
      "「おくのほそ道」は東北・北陸を旅した紀行文",
      "俳句を文学として高めた人物とされる",
      "「古池や蛙飛びこむ水の音」など多くの句を残した"
    ],
    "backgroundJa": "松尾芭蕉は江戸時代前期に活躍した俳人で、簡潔な言葉で自然や心情を描く俳句を文学的な高みへと押し上げた人物として知られています。",
    "historyJa": "「おくのほそ道」は芭蕉が江戸を出発し、東北・北陸地方を旅した記録をまとめた紀行文です。旅先で詠んだ俳句とともに、土地ごとの風景や感慨が記されています。",
    "episodeJa": "「古池や蛙飛びこむ水の音」をはじめ、芭蕉の句は現在も国語教育の中で広く扱われています。旅をしながら俳句を詠むという芭蕉の生き方そのものも、後世の文学に大きな影響を与えました。"
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
    "summaryJa": "日本語の表記では漢字・ひらがな・カタカナという3種類の文字体系が使い分けられます。",
    "detailJa": "日本語の表記では漢字・ひらがな・カタカナという3種類の文字体系が使い分けられます。 漢字はもともと中国から伝わった文字で、意味を持つ表意文字として使われます。一方、ひらがなとカタカナは漢字の形を簡略化・変形させて作られた表音文字で、平安時代頃に成立したとされています。",
    "keyPointsJa": [
      "漢字は中国から伝わった表意文字",
      "ひらがなとカタカナは漢字を基に日本で作られた",
      "外来語や擬音語にはカタカナを使うことが多い",
      "同じ言葉でも表記によって意味の伝わり方が変わる"
    ],
    "backgroundJa": "漢字はもともと中国から伝わった文字で、意味を持つ表意文字として使われます。一方、ひらがなとカタカナは漢字の形を簡略化・変形させて作られた表音文字で、平安時代頃に成立したとされています。",
    "historyJa": "ひらがなは主に漢字の草書体を崩して作られ、カタカナは漢字の一部分を取って作られました。当初ひらがなは女性が使う文字、カタカナは僧侶や学者が漢文を読む際の補助として使われることが多かったといわれています。",
    "episodeJa": "現代の日本語では、外来語や擬音語・擬態語にカタカナを使う、和語や助詞にひらがなを使うなど、3つの文字を組み合わせて文章を書くのが一般的です。同じ言葉でも表記を変えることで印象が変わるため、検索システムなどでは表記の違いに注意する必要があります。"
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
    "summaryJa": "日本では西暦に加えて、天皇の在位期間に基づく元号（和暦）で日付を表すことがあります。",
    "detailJa": "日本では西暦に加えて、天皇の在位期間に基づく元号（和暦）で日付を表すことがあります。 日本では西暦と並んで、天皇の在位期間ごとに定められる元号（和暦）が日付の表記に使われます。元号は天皇の即位に合わせて改められ、それぞれの元号には開始年が定められています。",
    "keyPointsJa": [
      "元号は天皇の即位に合わせて改められる",
      "元号にはそれぞれ開始年が存在する",
      "公文書や免許証などで和暦表記が使われる",
      "改元の年は西暦と元号が両方使われる境界年になる"
    ],
    "backgroundJa": "日本では西暦と並んで、天皇の在位期間ごとに定められる元号（和暦）が日付の表記に使われます。元号は天皇の即位に合わせて改められ、それぞれの元号には開始年が定められています。",
    "historyJa": "元号は645年の「大化」が最初とされ、長い歴史を持つ制度です。近代以降は天皇一代につき一つの元号を用いる「一世一元」の制度が定着し、明治・大正・昭和・平成・令和と続いています。",
    "episodeJa": "改元が行われた年は、改元前と改元後で西暦と元号の対応が変わる「境界年」となるため、日付を扱うシステムでは特に注意が必要です。現在も住民票や運転免許証などの公的な書類では和暦表記が広く使われています。"
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
    "summaryJa": "日本の住所は都道府県から番地まで、広い地域から細かい場所へ進む順で書かれます。",
    "detailJa": "日本の住所は都道府県から番地まで、広い地域から細かい場所へ進む順で書かれます。 日本の住所表記は「都道府県→市区町村→町名→番地」という、範囲の広い単位から狭い単位へ進む順序で書かれるのが特徴です。これは英語圏の住所表記とは逆の順序になります。",
    "keyPointsJa": [
      "都道府県から始まり番地で終わる順序",
      "郵便番号と組み合わせて使われることが多い",
      "英語表記では番地から都道府県へと順序が逆になる",
      "建物名や部屋番号は番地の後に続けて書く"
    ],
    "backgroundJa": "日本の住所表記は「都道府県→市区町村→町名→番地」という、範囲の広い単位から狭い単位へ進む順序で書かれるのが特徴です。これは英語圏の住所表記とは逆の順序になります。",
    "historyJa": "この表記順は日本の行政区分の構造、すなわち都道府県の下に市区町村があり、その下に町や番地が定められているという階層構造を反映したものです。",
    "episodeJa": "海外向けに住所を英語で表記する場合は、番地や建物名から始めて都道府県を最後に書くなど、順序を入れ替える必要があります。住所データを扱うシステムを作る際は、この表記順の違いに注意が必要です。"
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
    "summaryJa": "日本円の金額表示では、桁区切りのカンマや円記号の使い方が重要になります。",
    "detailJa": "日本円の金額表示では、桁区切りのカンマや円記号の使い方が重要になります。 日本円は1円が最小単位で、米ドルのセントのような補助単位を持たない点が特徴です。金額を表示する際は、読みやすくするために3桁ごとにカンマで区切ることが一般的です。",
    "keyPointsJa": [
      "3桁ごとにカンマで区切って表示する",
      "円記号「¥」を数字の前に付けることが多い",
      "日本円は基本的に補助単位（セントなど）を持たない",
      "金額を文字列として扱うか数値として扱うかの区別が必要"
    ],
    "backgroundJa": "日本円は1円が最小単位で、米ドルのセントのような補助単位を持たない点が特徴です。金額を表示する際は、読みやすくするために3桁ごとにカンマで区切ることが一般的です。",
    "historyJa": "明治時代に円が導入された当初は「銭」「厘」といった補助単位も存在しましたが、現在では実質的に使われておらず、1円単位での取引が基本となっています。",
    "episodeJa": "プログラムで金額を扱う際は、画面表示用の「1,000円」のような文字列と、計算に使う数値の「1000」を区別する必要があります。表示形式のまま計算しようとすると、カンマや円記号が原因でエラーになることがあります。"
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
    "summaryJa": "日本の駅名は日本語表記とローマ字表記を併用して案内されることがあります。",
    "detailJa": "日本の駅名は日本語表記とローマ字表記を併用して案内されることがあります。 日本の鉄道駅では、駅名標に漢字表記とひらがな表記、さらにローマ字表記を並べて案内するのが一般的です。これは訪日外国人を含む多くの利用者にとって分かりやすい案内とするための工夫です。",
    "keyPointsJa": [
      "駅名標には漢字・ひらがな・ローマ字が並記される",
      "訪日外国人向けの案内として整備が進んだ",
      "ローマ字表記には長音記号の有無など表記ゆれがある",
      "検索システムでは表記の正規化が必要になる"
    ],
    "backgroundJa": "日本の鉄道駅では、駅名標に漢字表記とひらがな表記、さらにローマ字表記を並べて案内するのが一般的です。これは訪日外国人を含む多くの利用者にとって分かりやすい案内とするための工夫です。",
    "historyJa": "ローマ字表記の整備は、海外からの旅行者が増える中で進められてきました。ただし長音記号（ō や û など）を使うかどうかなど、表記の方法には複数のルールが存在します。",
    "episodeJa": "同じ駅名でも「Tōkyō」と「Tokyo」のように表記が異なる場合があるため、駅名を検索するシステムを作る際は、表記の違いを統一する「正規化」という処理が必要になります。"
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
    "summaryJa": "大日本帝国憲法は1889年に公布された、日本で最初の近代的な憲法です。",
    "detailJa": "大日本帝国憲法は1889年に公布された、日本で最初の近代的な憲法です。 大日本帝国憲法は、明治政府が近代国家としての体制を整えるために制定した憲法で、伊藤博文らが中心となって起草作業を進めました。",
    "keyPointsJa": [
      "1889年2月11日に公布",
      "伊藤博文らが起草の中心となった",
      "天皇主権を基本とする憲法だった",
      "1947年に日本国憲法の施行により失効"
    ],
    "backgroundJa": "大日本帝国憲法は、明治政府が近代国家としての体制を整えるために制定した憲法で、伊藤博文らが中心となって起草作業を進めました。",
    "historyJa": "1889年2月11日に明治天皇によって公布され、翌1890年に施行されました。天皇が統治権を持つことを基本としつつ、議会（帝国議会）を設置するなど、当時のヨーロッパの憲法も参考にした制度が取り入れられました。",
    "episodeJa": "この憲法は第二次世界大戦の終結まで効力を持ち続けましたが、戦後の1947年に国民主権を基本とする日本国憲法が施行されたことで効力を失いました。近代日本の出発点を理解する上で重要な出来事とされています。"
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
    "summaryJa": "大江健三郎は1994年にノーベル文学賞を受賞した日本の小説家です。",
    "detailJa": "大江健三郎は1994年にノーベル文学賞を受賞した日本の小説家です。 大江健三郎は戦後の日本文学を代表する作家の一人で、社会や人間の内面を深く掘り下げた作品を多く発表しました。",
    "keyPointsJa": [
      "1994年にノーベル文学賞を受賞",
      "川端康成に続く日本人2人目の受賞",
      "代表作に「個人的な体験」などがある",
      "戦後の日本社会を題材にした作品を多く書いた"
    ],
    "backgroundJa": "大江健三郎は戦後の日本文学を代表する作家の一人で、社会や人間の内面を深く掘り下げた作品を多く発表しました。",
    "historyJa": "1994年にノーベル文学賞を受賞し、1968年の川端康成に続く日本人2人目の受賞者となりました。受賞理由では、現代における人間の窮状を鮮烈に描き出した作品世界が評価されました。",
    "episodeJa": "代表作の一つ「個人的な体験」は、障がいを持つ子どもの誕生をめぐる父親の心の動きを描いた作品で、大江自身の実体験も反映されているといわれています。"
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
    "summaryJa": "金閣寺は正式名称を鹿苑寺という、京都市にある臨済宗の寺院です。",
    "detailJa": "金閣寺は正式名称を鹿苑寺という、京都市にある臨済宗の寺院です。 金閣寺は通称で、正式名称は鹿苑寺です。境内にある金箔で装飾された舎利殿が「金閣」と呼ばれ、寺全体の通称として広く使われるようになりました。",
    "keyPointsJa": [
      "正式名称は鹿苑寺",
      "金箔で覆われた舎利殿が「金閣」と呼ばれる",
      "室町幕府3代将軍足利義満の別荘がもとになった",
      "1994年に世界文化遺産に登録"
    ],
    "backgroundJa": "金閣寺は通称で、正式名称は鹿苑寺です。境内にある金箔で装飾された舎利殿が「金閣」と呼ばれ、寺全体の通称として広く使われるようになりました。",
    "historyJa": "もとは室町幕府の3代将軍足利義満が建てた別荘「北山殿」で、義満の死後に寺院として整備されました。義満の法号「鹿苑院」にちなんで鹿苑寺と名付けられたとされています。",
    "episodeJa": "現在の金閣は1950年の放火で焼失した後、1955年に再建されたものです。1994年には古都京都の文化財の一部として世界文化遺産に登録され、国内外から多くの観光客が訪れています。"
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
    "summaryJa": "紀伊山地の霊場と参詣道は、2004年に登録された宗教文化に関わる世界遺産です。",
    "detailJa": "紀伊山地の霊場と参詣道は、2004年に登録された宗教文化に関わる世界遺産です。 紀伊山地の霊場と参詣道は、和歌山県・奈良県・三重県にまたがる吉野・大峯、熊野三山、高野山という3つの霊場と、それらを結ぶ参詣道で構成される世界遺産です。",
    "keyPointsJa": [
      "2004年に世界文化遺産として登録",
      "吉野・熊野・高野山の3つの霊場を含む",
      "霊場を結ぶ参詣道も登録対象",
      "神道と仏教が融合した信仰の形を伝える"
    ],
    "backgroundJa": "紀伊山地の霊場と参詣道は、和歌山県・奈良県・三重県にまたがる吉野・大峯、熊野三山、高野山という3つの霊場と、それらを結ぶ参詣道で構成される世界遺産です。",
    "historyJa": "これらの霊場は神道の自然崇拝と仏教の信仰が結びついて発展してきた特徴を持ち、平安時代以降、皇族や貴族、庶民まで多くの人々が参詣に訪れてきました。",
    "episodeJa": "2004年にユネスコの世界文化遺産に登録され、「紀伊山地の霊場と参詣道」として、霊場そのものだけでなく参詣道を含む文化的景観全体が評価された点が特徴です。現在も熊野古道などを歩く巡礼や観光が行われています。"
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
    "summaryJa": "黒部ダムは富山県にある日本最大級のアーチ式ダムで、戦後の大規模電力開発を象徴する建造物です。",
    "detailJa": "黒部ダムは富山県にある日本最大級のアーチ式ダムで、戦後の大規模電力開発を象徴する建造物です。 黒部ダムは富山県の黒部川上流に建設されたアーチ式ダムで、関西電力が運営する黒部川第四発電所（くろよん）の水源として1963年に完成しました。",
    "keyPointsJa": [
      "1963年に完成した日本最大級のアーチ式ダム",
      "「くろよん」として知られる黒部川第四発電所と一体",
      "建設には多くの困難と犠牲者を伴った",
      "観光放水が有名な観光地でもある"
    ],
    "backgroundJa": "黒部ダムは富山県の黒部川上流に建設されたアーチ式ダムで、関西電力が運営する黒部川第四発電所（くろよん）の水源として1963年に完成しました。",
    "historyJa": "建設は険しい山岳地帯での難工事として知られ、トンネル工事中の破砕帯との遭遇など多くの困難に直面し、多くの犠牲者を出しながら完成にいたりました。この苦労は映画やドキュメンタリーでも取り上げられています。",
    "episodeJa": "完成後は戦後復興期の電力不足を解消する重要な施設となり、現在も観光放水が行われる人気の観光地として、夏季には多くの観光客が訪れています。"
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
    "summaryJa": "五箇山の合掌造り集落は、富山県にある伝統的な茅葺き屋根の家屋群で構成される世界遺産です。",
    "detailJa": "五箇山の合掌造り集落は、富山県にある伝統的な茅葺き屋根の家屋群で構成される世界遺産です。 五箇山は富山県南西部の山間地にある地域で、急な角度の茅葺き屋根を持つ「合掌造り」と呼ばれる伝統的な家屋が残る集落として知られています。",
    "keyPointsJa": [
      "1995年に世界文化遺産として登録",
      "白川郷とともに登録された",
      "急な角度の茅葺き屋根が特徴",
      "養蚕などの伝統的な生業を支えた建築様式"
    ],
    "backgroundJa": "五箇山は富山県南西部の山間地にある地域で、急な角度の茅葺き屋根を持つ「合掌造り」と呼ばれる伝統的な家屋が残る集落として知られています。",
    "historyJa": "合掌造りの屋根の形は、雪の多い地域で雪を落としやすくするための工夫であり、屋根裏の広い空間は養蚕などの作業にも利用されてきました。",
    "episodeJa": "1995年に岐阜県の白川郷とともに「白川郷・五箇山の合掌造り集落」として世界文化遺産に登録されました。山間の集落に残る独自の建築文化が国際的に評価された例です。"
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
    "summaryJa": "日本標準時はUTC（協定世界時）より9時間進んだ時刻で、UTC+9として扱われます。",
    "detailJa": "日本標準時はUTC（協定世界時）より9時間進んだ時刻で、UTC+9として扱われます。 日本標準時（JST）は、兵庫県明石市付近を通る東経135度の経線を基準に定められた時刻で、世界の基準時刻であるUTC（協定世界時）より9時間進んでいます。",
    "keyPointsJa": [
      "日本全国で単一の標準時を使用",
      "UTC（協定世界時）より9時間進んでいる",
      "兵庫県明石市付近を通る東経135度線が基準",
      "日付をまたぐ深夜の時刻計算には注意が必要"
    ],
    "backgroundJa": "日本標準時（JST）は、兵庫県明石市付近を通る東経135度の経線を基準に定められた時刻で、世界の基準時刻であるUTC（協定世界時）より9時間進んでいます。",
    "historyJa": "日本は国土の東西の幅が比較的狭いため、国内で単一の標準時を採用しています。これは複数のタイムゾーンを持つ国（例えばアメリカ）とは異なる特徴です。",
    "episodeJa": "日付や時刻を扱うプログラムでは、UTCとJSTの9時間のずれを正しく計算する必要があります。特に深夜0時前後の処理では、UTCに変換すると前日や翌日の日付になる場合があるため、日付境界の扱いに注意が必要です。"
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
    "summaryJa": "日本の郵便番号は「3桁＋ハイフン＋4桁」の合計7桁の数字で構成されます。",
    "detailJa": "日本の郵便番号は「3桁＋ハイフン＋4桁」の合計7桁の数字で構成されます。 日本の郵便番号は現在「123-4567」のように3桁・ハイフン・4桁の形式で表されます。この7桁制は1998年の郵便番号改正で導入され、それ以前は3桁または5桁の制度が使われていました。",
    "keyPointsJa": [
      "1998年から7桁制（3桁-4桁）が導入された",
      "上3桁が地域、下4桁がより詳細な地域を示す",
      "ハイフンの有無や位置の確認が重要",
      "正規表現でのパターンチェックがよく使われる"
    ],
    "backgroundJa": "日本の郵便番号は現在「123-4567」のように3桁・ハイフン・4桁の形式で表されます。この7桁制は1998年の郵便番号改正で導入され、それ以前は3桁または5桁の制度が使われていました。",
    "historyJa": "上3桁は都道府県や主要な地域を表し、下4桁はより細かい町域や事業所などを区別するために使われます。これにより配達業務の効率化が図られました。",
    "episodeJa": "システムで郵便番号を扱う際は、桁数が正しいか、ハイフンが正しい位置にあるかを確認する必要があり、こうした形式チェックには正規表現がよく使われます。"
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
    "summaryJa": "JIS都道府県コードは、各都道府県に2桁の数字を割り当てた標準化されたコードです。",
    "detailJa": "JIS都道府県コードは、各都道府県に2桁の数字を割り当てた標準化されたコードです。 JIS都道府県コードは、日本産業規格（JIS）によって各都道府県に割り当てられた2桁の数字コードです。北海道が「01」、東京都が「13」、沖縄県が「47」など、地理的な順序におおむね対応した番号が振られています。",
    "keyPointsJa": [
      "日本産業規格（JIS）で定められたコード",
      "北海道が01、沖縄県が47など番号が割り当てられている",
      "1桁の番号にはゼロを付けて2桁にする",
      "住所データベースなどで都道府県を一意に識別するために使われる"
    ],
    "backgroundJa": "JIS都道府県コードは、日本産業規格（JIS）によって各都道府県に割り当てられた2桁の数字コードです。北海道が「01」、東京都が「13」、沖縄県が「47」など、地理的な順序におおむね対応した番号が振られています。",
    "historyJa": "このコードは住所や統計データを扱うシステムにおいて、都道府県名の表記ゆれ（漢字や英語表記の違いなど）に影響されずに地域を一意に識別するための仕組みとして利用されています。",
    "episodeJa": "北海道や青森県のように番号が1桁になる都道府県（1〜9）には、先頭にゼロを付けて2桁の文字列として扱う必要があります。これを数値として扱うとゼロが失われてしまうため、文字列としての扱いに注意が必要です。"
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
    "summaryJa": "青色LEDの開発は2014年のノーベル物理学賞受賞につながった日本関係の重要な研究成果です。",
    "detailJa": "青色LEDの開発は2014年のノーベル物理学賞受賞につながった日本関係の重要な研究成果です。 発光ダイオード（LED）には赤色・緑色のものが先に開発されていましたが、青色LEDの実現は技術的に非常に難しく、長年にわたって研究者を悩ませてきました。",
    "keyPointsJa": [
      "2014年にノーベル物理学賞を受賞",
      "赤﨑勇・天野浩・中村修二の3氏が受賞",
      "赤色・緑色LEDに続く最後の色として開発が難しかった",
      "白色LED照明の実現につながった"
    ],
    "backgroundJa": "発光ダイオード（LED）には赤色・緑色のものが先に開発されていましたが、青色LEDの実現は技術的に非常に難しく、長年にわたって研究者を悩ませてきました。",
    "historyJa": "1990年代に赤﨑勇、天野浩、中村修二の3氏がそれぞれ青色LEDの実用化に関する重要な研究成果を上げ、これにより光の三原色がすべてLEDで実現可能になりました。",
    "episodeJa": "2014年、この功績により3氏にノーベル物理学賞が贈られました。青色LEDの実現は、省電力で長寿命な白色LED照明の普及にもつながり、現在の生活に広く役立てられています。"
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
    "summaryJa": "吉野彰はリチウムイオン電池の開発で2019年にノーベル化学賞を受賞した日本の研究者です。",
    "detailJa": "吉野彰はリチウムイオン電池の開発で2019年にノーベル化学賞を受賞した日本の研究者です。 吉野彰は旭化成の研究者として、現在のリチウムイオン電池の基本となる構造を確立した人物です。リチウムイオン電池は軽量で繰り返し充電できる電池として、多くの携帯機器に使われています。",
    "keyPointsJa": [
      "2019年にノーベル化学賞を受賞",
      "リチウムイオン電池の基本構造を確立した",
      "旭化成の研究者として開発を進めた",
      "スマートフォンや電気自動車に広く使われている"
    ],
    "backgroundJa": "吉野彰は旭化成の研究者として、現在のリチウムイオン電池の基本となる構造を確立した人物です。リチウムイオン電池は軽量で繰り返し充電できる電池として、多くの携帯機器に使われています。",
    "historyJa": "1980年代に吉野はリチウムイオン電池の基本構造を確立し、その後実用化が進められました。共同研究者であるジョン・グッドイナフ、マイケル・スタンリー・ウィッティンガムとともに研究が評価されました。",
    "episodeJa": "2019年、この功績により3氏にノーベル化学賞が贈られました。リチウムイオン電池はスマートフォンやノートパソコンだけでなく、電気自動車のバッテリーとしても広く使われ、現代の電子機器を支える基盤技術となっています。"
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
    "summaryJa": "山中伸弥はiPS細胞（人工多能性幹細胞）の作製で2012年にノーベル生理学・医学賞を受賞した研究者です。",
    "detailJa": "山中伸弥はiPS細胞（人工多能性幹細胞）の作製で2012年にノーベル生理学・医学賞を受賞した研究者です。 山中伸弥は、皮膚などの体の細胞に特定の遺伝子を導入することで、さまざまな組織に分化できる多能性を持つ細胞（iPS細胞）を作り出す技術を開発しました。",
    "keyPointsJa": [
      "2012年にノーベル生理学・医学賞を受賞",
      "皮膚などの体細胞から多能性幹細胞を作製",
      "京都大学iPS細胞研究所の所長を務める",
      "再生医療への応用が期待される技術"
    ],
    "backgroundJa": "山中伸弥は、皮膚などの体の細胞に特定の遺伝子を導入することで、さまざまな組織に分化できる多能性を持つ細胞（iPS細胞）を作り出す技術を開発しました。",
    "historyJa": "2006年にマウスの細胞でiPS細胞の作製に成功し、翌2007年には人間の細胞でも同様の成果を発表しました。この功績により2012年、ジョン・ガードン博士とともにノーベル生理学・医学賞を受賞しました。",
    "episodeJa": "iPS細胞は受精卵を使わずに多能性を持つ細胞を作れるため、倫理的な課題が少なく、再生医療や難病の研究に広く応用されています。山中は京都大学iPS細胞研究所の所長として、現在も研究を続けています。"
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
    "summaryJa": "姫路城は白い外観から「白鷺城」の愛称で知られる兵庫県の城で、世界文化遺産にも登録されています。",
    "detailJa": "姫路城は白い外観から「白鷺城」の愛称で知られる兵庫県の城で、世界文化遺産にも登録されています。 姫路城は兵庫県姫路市にある城で、白い漆喰で塗られた外壁が美しいことから「白鷺城」という愛称で親しまれています。",
    "keyPointsJa": [
      "1993年に日本初の世界文化遺産として登録",
      "白漆喰の外壁から「白鷺城」と呼ばれる",
      "江戸時代初期の天守がほぼ現存している",
      "大規模な改修が2015年に完了"
    ],
    "backgroundJa": "姫路城は兵庫県姫路市にある城で、白い漆喰で塗られた外壁が美しいことから「白鷺城」という愛称で親しまれています。",
    "historyJa": "現在の天守は江戸時代初期の1609年頃に完成したもので、戦災や災害を免れて当時の姿をほぼそのまま残していることが高く評価されています。",
    "episodeJa": "1993年、法隆寺とともに日本で初めて世界文化遺産に登録されました。2009年から2015年にかけて大規模な保存修理工事が行われ、「平成の大修理」として注目を集めました。"
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
    "summaryJa": "富士山は標高3776メートルで日本最高峰の山であり、2013年に世界文化遺産に登録されました。",
    "detailJa": "富士山は標高3776メートルで日本最高峰の山であり、2013年に世界文化遺産に登録されました。 富士山は静岡県と山梨県にまたがる標高3776メートルの活火山で、日本で最も高い山として知られています。",
    "keyPointsJa": [
      "標高3776メートルで日本最高峰",
      "静岡県と山梨県にまたがる活火山",
      "2013年に「信仰の対象と芸術の源泉」として世界文化遺産に登録",
      "葛飾北斎などの芸術作品にも多く描かれてきた"
    ],
    "backgroundJa": "富士山は静岡県と山梨県にまたがる標高3776メートルの活火山で、日本で最も高い山として知られています。",
    "historyJa": "古くから信仰の対象とされ、登山や周辺の巡礼が宗教的な行為として行われてきました。同時に葛飾北斎の浮世絵をはじめ、多くの芸術作品の題材にもなってきました。",
    "episodeJa": "2013年、こうした信仰と芸術における役割が評価され、「富士山-信仰の対象と芸術の源泉」として世界文化遺産に登録されました。現在も夏季には多くの登山者が山頂を目指しています。"
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
    "summaryJa": "フランシスコ・ザビエルは1549年に日本へ来航し、キリスト教を伝えたイエズス会の宣教師です。",
    "detailJa": "フランシスコ・ザビエルは1549年に日本へ来航し、キリスト教を伝えたイエズス会の宣教師です。 フランシスコ・ザビエルはスペイン出身のイエズス会宣教師で、アジア各地での布教活動を行いました。1549年に鹿児島に上陸し、日本での布教を開始しました。",
    "keyPointsJa": [
      "1549年に鹿児島に上陸した",
      "イエズス会の宣教師として活動",
      "日本に初めてキリスト教を伝えた人物とされる",
      "その後の南蛮文化の伝来にもつながった"
    ],
    "backgroundJa": "フランシスコ・ザビエルはスペイン出身のイエズス会宣教師で、アジア各地での布教活動を行いました。1549年に鹿児島に上陸し、日本での布教を開始しました。",
    "historyJa": "ザビエルの来日をきっかけに、その後多くの宣教師が日本を訪れ、キリスト教の布教活動とともに、医学や天文学などの西洋の知識、いわゆる「南蛮文化」が日本に伝わりました。",
    "episodeJa": "ザビエルは日本での布教の後、中国での活動を目指しましたが、その途上で病に倒れ亡くなりました。彼の来日は、日本と西洋世界との直接的な接触の始まりとして歴史上重要な出来事とされています。"
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
    "summaryJa": "ウィリアム・アダムスは江戸時代初期に来航し、徳川家康に仕えたイギリス人航海士です。",
    "detailJa": "ウィリアム・アダムスは江戸時代初期に来航し、徳川家康に仕えたイギリス人航海士です。 ウィリアム・アダムスはイギリス出身の航海士で、1600年に乗っていた船が豊後（現在の大分県）に漂着したことから日本との関わりが始まりました。",
    "keyPointsJa": [
      "1600年に豊後（現在の大分県）に漂着",
      "日本名「三浦按針」として知られる",
      "徳川家康の外交・貿易顧問として活躍した",
      "日本に来た最初のイギリス人とされる"
    ],
    "backgroundJa": "ウィリアム・アダムスはイギリス出身の航海士で、1600年に乗っていた船が豊後（現在の大分県）に漂着したことから日本との関わりが始まりました。",
    "historyJa": "アダムスはその後徳川家康に重用され、外交や貿易に関する顧問として活躍しました。日本名「三浦按針」を名乗り、領地を与えられて武士としての身分も得ました。",
    "episodeJa": "アダムスは日本に来た最初のイギリス人として知られ、彼を通じてイギリスとの貿易関係も生まれました。その生涯は小説や映像作品の題材にもなっています。"
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
    "summaryJa": "紫式部は平安時代中期に活躍した女性作家で、長編小説「源氏物語」の作者として知られます。",
    "detailJa": "紫式部は平安時代中期に活躍した女性作家で、長編小説「源氏物語」の作者として知られます。 紫式部は平安時代中期に活躍した女性作家で、一条天皇の后である藤原彰子に女官として仕えながら創作活動を行いました。",
    "keyPointsJa": [
      "平安時代中期の女性作家・歌人",
      "「源氏物語」の作者として知られる",
      "一条天皇の后である彰子に仕えた",
      "世界最古の長編小説の一つとされる"
    ],
    "backgroundJa": "紫式部は平安時代中期に活躍した女性作家で、一条天皇の后である藤原彰子に女官として仕えながら創作活動を行いました。",
    "historyJa": "代表作「源氏物語」は、主人公・光源氏の生涯とその周囲の人々を描いた長編小説で、当時の貴族社会の様子や心情の描写が高く評価されています。",
    "episodeJa": "「源氏物語」は世界的に見ても最古の長編小説の一つとされ、現在も日本国内外で研究や翻訳が続けられています。2024年のNHK大河ドラマでも紫式部の生涯が取り上げられました。"
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
    "summaryJa": "1543年、種子島に伝わった鉄砲が、その後の日本の戦術や社会に大きな影響を与えました。",
    "detailJa": "1543年、種子島に伝わった鉄砲が、その後の日本の戦術や社会に大きな影響を与えました。 1543年、種子島に漂着したポルトガル人によって鉄砲が日本に伝えられたとされています。これは戦国時代の合戦のあり方を大きく変える出来事となりました。",
    "keyPointsJa": [
      "1543年にポルトガル人によって伝えられたとされる",
      "鹿児島県の種子島が伝来の地とされる",
      "戦国時代の合戦の戦術を大きく変えた",
      "国内でも鉄砲の生産技術が発展した"
    ],
    "backgroundJa": "1543年、種子島に漂着したポルトガル人によって鉄砲が日本に伝えられたとされています。これは戦国時代の合戦のあり方を大きく変える出来事となりました。",
    "historyJa": "鉄砲伝来後、日本国内でも急速に製造技術が広まり、特に堺や国友（滋賀県）などが鉄砲の生産地として知られるようになりました。織田信長が長篠の戦いで鉄砲を効果的に使用したことも有名です。",
    "episodeJa": "種子島は現在もこの出来事にちなんで「鉄砲伝来の地」として知られ、関連する史跡や資料館が整備されています。"
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
    "summaryJa": "1853年のペリー来航は、長く続いた日本の鎖国政策が終わるきっかけとなった出来事です。",
    "detailJa": "1853年のペリー来航は、長く続いた日本の鎖国政策が終わるきっかけとなった出来事です。 アメリカ海軍提督マシュー・ペリーは1853年、艦隊を率いて浦賀（現在の神奈川県横須賀市）に来航し、日本に開国を求めました。",
    "keyPointsJa": [
      "1853年にアメリカのペリー提督が浦賀に来航",
      "1854年に日米和親条約が締結された",
      "江戸幕府の鎖国政策が終わるきっかけとなった",
      "幕末の動乱の出発点とされる"
    ],
    "backgroundJa": "アメリカ海軍提督マシュー・ペリーは1853年、艦隊を率いて浦賀（現在の神奈川県横須賀市）に来航し、日本に開国を求めました。",
    "historyJa": "ペリーの来航は江戸幕府に大きな衝撃を与え、翌1854年には日米和親条約が結ばれ、長く続いた鎖国政策が事実上終わることになりました。",
    "episodeJa": "この出来事は幕末の政治的混乱や、後の明治維新へとつながる大きな転換点とされており、日本の近代史を語る上で欠かせない出来事の一つです。"
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
    "summaryJa": "和紙は植物の繊維を原料とした日本の伝統的な紙で、独自の製法によって作られます。",
    "detailJa": "和紙は植物の繊維を原料とした日本の伝統的な紙で、独自の製法によって作られます。 和紙は楮（こうぞ）や三椨（みつまた）といった植物の繊維を原料とし、「流し漉き」と呼ばれる日本独自の製法で作られる伝統的な紙です。",
    "keyPointsJa": [
      "楮（こうぞ）や三椨（みつまた）などの植物繊維が原料",
      "「流し漉き」という独自の製法で作られる",
      "丈夫で長持ちすることが特徴",
      "ユネスコ無形文化遺産に登録された産地もある"
    ],
    "backgroundJa": "和紙は楮（こうぞ）や三椨（みつまた）といった植物の繊維を原料とし、「流し漉き」と呼ばれる日本独自の製法で作られる伝統的な紙です。",
    "historyJa": "洋紙に比べて繊維が長く絡み合っているため丈夫で長持ちすることが特徴で、古くから書画や障子、工芸品などさまざまな用途に使われてきました。",
    "episodeJa": "島根県の石州半紙や岐阜県の本美濃紙、埼玉県の細川紙などの産地はユネスコの無形文化遺産に登録されており、地域ごとに異なる技法や特徴を持つ和紙づくりが今も受け継がれています。"
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
    "summaryJa": "伊勢神宮の式年遷宮は、20年に一度社殿を新しく建て替える伝統行事です。",
    "detailJa": "伊勢神宮の式年遷宮は、20年に一度社殿を新しく建て替える伝統行事です。 伊勢神宮の式年遷宮は、20年に一度、社殿や神宝などを新しく作り直し、神様に新しい場所へ移っていただく伝統行事です。",
    "keyPointsJa": [
      "20年に一度社殿を新築する行事",
      "飛鳥時代から続くとされる伝統",
      "建築技術や祭祀の伝承を目的の一つとする",
      "2013年に62回目の遷宮が行われた"
    ],
    "backgroundJa": "伊勢神宮の式年遷宮は、20年に一度、社殿や神宝などを新しく作り直し、神様に新しい場所へ移っていただく伝統行事です。",
    "historyJa": "この行事は飛鳥時代の690年頃から続いているとされ、長い歴史の中で一時的な中断はあったものの、基本的に20年というサイクルが守られてきました。",
    "episodeJa": "式年遷宮には、社殿を新しく保つことに加えて、建築や工芸の技術を次の世代に伝承するという目的もあるとされています。直近では2013年に62回目の遷宮が行われました。"
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
    "summaryJa": "東京スカイツリーは2012年に開業した高さ634メートルの電波塔・観光施設です。",
    "detailJa": "東京スカイツリーは2012年に開業した高さ634メートルの電波塔・観光施設です。 東京スカイツリーは東京都墨田区にある電波塔で、2012年に開業しました。高さは634メートルで、建造物として日本で最も高い建物です。",
    "keyPointsJa": [
      "2012年に開業",
      "高さ634メートルで日本一の高さ",
      "東京の地名「武蔵」にちなんだ高さとされる",
      "テレビ・ラジオの電波塔としての役割も持つ"
    ],
    "backgroundJa": "東京スカイツリーは東京都墨田区にある電波塔で、2012年に開業しました。高さは634メートルで、建造物として日本で最も高い建物です。",
    "historyJa": "この高さ634メートルは、かつてこの地域を含む一帯の旧国名「武蔵」にちなんで決められたとされています。展望デッキからは東京の街並みを一望できます。",
    "episodeJa": "電波塔としての機能に加えて、商業施設や水族館なども併設されており、東京の新しい観光名所として国内外から多くの人が訪れています。"
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
    "summaryJa": "八木・宇田アンテナは、八木秀次と宇田新太郎によって発明された指向性アンテナです。",
    "detailJa": "八木・宇田アンテナは、八木秀次と宇田新太郎によって発明された指向性アンテナです。 八木・宇田アンテナは、特定の方向からの電波を効率よく受信・送信できる指向性アンテナで、1920年代に東北帝国大学の八木秀次と宇田新太郎によって発明されました。",
    "keyPointsJa": [
      "1920年代に日本で発明された",
      "八木秀次と宇田新太郎が開発した",
      "特定の方向への電波を強める指向性アンテナ",
      "海外では「八木アンテナ」として広く知られる"
    ],
    "backgroundJa": "八木・宇田アンテナは、特定の方向からの電波を効率よく受信・送信できる指向性アンテナで、1920年代に東北帝国大学の八木秀次と宇田新太郎によって発明されました。",
    "historyJa": "この技術は当初日本国内では十分に注目されませんでしたが、第二次世界大戦中に連合国側がレーダー技術として活用していたことが知られると、その重要性が国内でも再評価されました。",
    "episodeJa": "現在も「八木アンテナ」として、テレビ受信用のアンテナなど広く実用化されており、無線通信技術の基礎となる発明として国際的にも高く評価されています。"
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
    "summaryJa": "青函トンネルは本州と北海道を結ぶ、全長約53.85kmの海底トンネルです。",
    "detailJa": "青函トンネルは本州と北海道を結ぶ、全長約53.85kmの海底トンネルです。 青函トンネルは本州の青森県と北海道を結ぶ鉄道トンネルで、津軽海峡の海底を通っています。1988年に開業し、当時世界最長の海底トンネルとして注目されました。",
    "keyPointsJa": [
      "1988年に開業",
      "全長約53.85kmで海底部は約23.3km",
      "本州（青森県）と北海道（北海道）を結ぶ",
      "北海道新幹線も通過する"
    ],
    "backgroundJa": "青函トンネルは本州の青森県と北海道を結ぶ鉄道トンネルで、津軽海峡の海底を通っています。1988年に開業し、当時世界最長の海底トンネルとして注目されました。",
    "historyJa": "建設のきっかけの一つには、1954年に津軽海峡で起きた洞爺丸事故などの海難事故があり、安全な交通手段として海底トンネルの建設が求められた背景があります。",
    "episodeJa": "現在は在来線に加えて北海道新幹線もこのトンネルを通っており、本州と北海道を結ぶ重要な交通インフラとなっています。"
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
    "summaryJa": "小野小町は平安時代の歌人で、美人の代名詞として多くの伝承が残されています。",
    "detailJa": "小野小町は平安時代の歌人で、美人の代名詞として多くの伝承が残されています。 小野小町は平安時代前期に活躍したとされる女性歌人で、優れた歌人を指す「六歌仙」や「三十六歌仙」に数えられています。",
    "keyPointsJa": [
      "平安時代前期の女性歌人",
      "六歌仙・三十六歌仙に数えられる",
      "美貌に関する多くの伝承や逸話が残る",
      "生涯の詳細は不明な点が多い"
    ],
    "backgroundJa": "小野小町は平安時代前期に活躍したとされる女性歌人で、優れた歌人を指す「六歌仙」や「三十六歌仙」に数えられています。",
    "historyJa": "小町に関する記録は少なく、生没年や経歴の詳細は分かっていない部分が多いものの、絶世の美女であったという伝承が各地に残されており、後世の文学や芸能の題材にもなっています。",
    "episodeJa": "「花の色は移りにけりないたづらに我が身世にふる眺めせし間に」など、小町が詠んだ和歌は「小倉百人一首」にも収められ、現在も広く知られています。"
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
    "summaryJa": "日本語の氏名は「姓（苗字）→名（名前）」の順で表記されるのが一般的です。",
    "detailJa": "日本語の氏名は「姓（苗字）→名（名前）」の順で表記されるのが一般的です。 日本語では氏名を「姓（苗字）→名（名前）」の順で表記するのが基本です。これは英語をはじめとする多くの言語で「名→姓」の順が一般的であることと対照的です。",
    "keyPointsJa": [
      "姓を先に、名を後に書く順序が基本",
      "英語などでは名を先に書く順序が多い",
      "国際的な場では順序を入れ替えることもある",
      "システムでは姓と名を別々のデータとして扱うことが多い"
    ],
    "backgroundJa": "日本語では氏名を「姓（苗字）→名（名前）」の順で表記するのが基本です。これは英語をはじめとする多くの言語で「名→姓」の順が一般的であることと対照的です。",
    "historyJa": "近年では国際的な文書や場面において、日本人の氏名を表記する際にこの順序の違いをどう扱うかが議論されることがあります。",
    "episodeJa": "名前を扱うシステムを設計する際は、姓と名を別々のフィールドとして保存し、表示する場面に応じて順序を切り替えられるようにすることが望ましいとされています。"
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
    "summaryJa": "日本語の文字には、全角文字と半角文字という2種類の幅の文字が存在します。",
    "detailJa": "日本語の文字には、全角文字と半角文字という2種類の幅の文字が存在します。 日本語の文章では、漢字やひらがな・カタカナなどの「全角文字」と、英数字や記号に使われることが多い「半角文字」という幅の異なる文字が混在します。",
    "keyPointsJa": [
      "全角文字は主に2バイト相当の幅を持つ",
      "半角文字は主に1バイト相当の幅を持つ",
      "同じ文字でも全角・半角で別のコードとして扱われる",
      "検索やデータ照合の際に表記ゆれの原因になりやすい"
    ],
    "backgroundJa": "日本語の文章では、漢字やひらがな・カタカナなどの「全角文字」と、英数字や記号に使われることが多い「半角文字」という幅の異なる文字が混在します。",
    "historyJa": "これはコンピュータが日本語を扱うようになった歴史の中で、欧文用の文字コードと日本語用の文字コードを区別する必要があったことに由来します。",
    "episodeJa": "同じ「A」という文字でも全角の「A」と半角の「A」は内部的には別の文字として扱われるため、検索や名前の照合を行うシステムでは、全角・半角の表記を統一する処理が必要になることがよくあります。"
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
    "summaryJa": "五十音順は、日本語のひらがなを「あ・い・う・え・お」の順に並べた配列順です。",
    "detailJa": "五十音順は、日本語のひらがなを「あ・い・う・え・お」の順に並べた配列順です。 五十音順は、日本語の音を「あ・い・う・え・お」をはじめとする一定の順序に並べたもので、辞書の見出し語や名簿、五十音表などさまざまな場面で使われています。",
    "keyPointsJa": [
      "「あ」行から「わ」行までの順序で構成される",
      "辞書や名簿など多くの場面で並べ替えの基準に使われる",
      "清音・濁音・半濁音の扱いにルールがある",
      "コンピュータでは文字コードの順序と必ずしも一致しない"
    ],
    "backgroundJa": "五十音順は、日本語の音を「あ・い・う・え・お」をはじめとする一定の順序に並べたもので、辞書の見出し語や名簿、五十音表などさまざまな場面で使われています。",
    "historyJa": "この並びは平安時代に成立したとされる「五十音図」を基にしており、長い歴史を持つ日本語の体系的な整理方法です。",
    "episodeJa": "コンピュータ上で文字コード順に文字を並べると、必ずしも五十音順とは一致しないことがあるため、日本語のデータを正しい五十音順で並べ替えるには、専用の変換処理が必要になる場合があります。"
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
    "summaryJa": "日本の都道府県名には「都」「道」「府」「県」という4種類の接尾辞があります。",
    "detailJa": "日本の都道府県名には「都」「道」「府」「県」という4種類の接尾辞があります。 日本の都道府県は「1都1道2府43県」という構成で、東京都の「都」、北海道の「道」、大阪府・京都府の「府」、それ以外43の「県」という4種類の接尾辞が使われています。",
    "keyPointsJa": [
      "東京都だけが「都」を使う",
      "北海道だけが「道」を使う",
      "大阪府・京都府が「府」を使う",
      "残り43は「県」を使う"
    ],
    "backgroundJa": "日本の都道府県は「1都1道2府43県」という構成で、東京都の「都」、北海道の「道」、大阪府・京都府の「府」、それ以外43の「県」という4種類の接尾辞が使われています。",
    "historyJa": "この区分は明治時代の廃藩置県以降、行政上の整理が進む中で形成されてきたもので、それぞれの呼び方の違いに法律上の権限の差は基本的にありません。",
    "episodeJa": "都道府県名を扱うプログラムでは、この接尾辞の違いを意識して、名前から都道府県を正しく判定したり、表示形式を統一したりする処理が必要になることがあります。"
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
    "summaryJa": "富士山は標高3776メートルで日本最高峰の山であり、2013年に世界文化遺産に登録されました。",
    "detailJa": "富士山は標高3776メートルで日本最高峰の山であり、2013年に世界文化遺産に登録されました。 富士山は静岡県と山梨県にまたがる標高3776メートルの活火山で、日本で最も高い山として知られています。",
    "keyPointsJa": [
      "標高3776メートルで日本最高峰",
      "静岡県と山梨県にまたがる活火山",
      "2013年に「信仰の対象と芸術の源泉」として世界文化遺産に登録",
      "夏季には多くの登山者が訪れる"
    ],
    "backgroundJa": "富士山は静岡県と山梨県にまたがる標高3776メートルの活火山で、日本で最も高い山として知られています。",
    "historyJa": "古くから信仰の対象とされ、登山や周辺の巡礼が宗教的な行為として行われてきました。葛飾北斎の浮世絵をはじめ、多くの芸術作品の題材にもなってきました。",
    "episodeJa": "2013年、「富士山-信仰の対象と芸術の源泉」として世界文化遺産に登録され、現在も夏季には多くの登山者が山頂を目指しています。"
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
    "summaryJa": "スーパーカミオカンデは岐阜県の地下にある、ニュートリノを観測するための施設です。",
    "detailJa": "スーパーカミオカンデは岐阜県の地下にある、ニュートリノを観測するための施設です。 スーパーカミオカンデは、岐阜県飛驒市の旧神岡鉱山の地下約1000メートルに設置された観測施設で、宇宙線などの影響を避けてニュートリノという非常に観測しにくい粒子を捉えるために作られました。",
    "keyPointsJa": [
      "岐阜県飛驒市の地下約1000mに設置",
      "純水を満たした巨大な水槽でニュートリノを観測",
      "梶田隆章が2015年にノーベル物理学賞を受賞",
      "前身の「カミオカンデ」も重要な観測施設だった"
    ],
    "backgroundJa": "スーパーカミオカンデは、岐阜県飛驒市の旧神岡鉱山の地下約1000メートルに設置された観測施設で、宇宙線などの影響を避けてニュートリノという非常に観測しにくい粒子を捉えるために作られました。",
    "historyJa": "前身の「カミオカンデ」では小柴昌俊が超新星からのニュートリノ観測に成功し2002年にノーベル物理学賞を受賞、その後継であるスーパーカミオカンデでは梶田隆章がニュートリノ振動の発見により2015年にノーベル物理学賞を受賞しました。",
    "episodeJa": "巨大な水槽に満たされた純水の中を粒子が通過する際に生じるわずかな光を検出するという仕組みで、日本の素粒子物理学研究を支える重要な施設として、現在も観測が続けられています。"
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
    "summaryJa": "厳島神社は広島県にある、海上に立つ大鳥居で知られる世界文化遺産の神社です。",
    "detailJa": "厳島神社は広島県にある、海上に立つ大鳥居で知られる世界文化遺産の神社です。 厳島神社は広島県の宮島（厳島）にある神社で、海上に立つ朱色の大鳥居が特徴的な景観として知られています。",
    "keyPointsJa": [
      "1996年に世界文化遺産に登録",
      "海上に立つ大鳥居が有名",
      "潮の満ち引きで景観が大きく変化する",
      "平清盛が現在の社殿の基礎を整えたとされる"
    ],
    "backgroundJa": "厳島神社は広島県の宮島（厳島）にある神社で、海上に立つ朱色の大鳥居が特徴的な景観として知られています。",
    "historyJa": "現在の社殿の基礎は、平安時代末期に平清盛によって整えられたとされています。社殿が海上に建てられているため、潮の満ち引きによって水に浮かぶように見える時間帯と、干潮時に鳥居まで歩いて行ける時間帯があります。",
    "episodeJa": "1996年に世界文化遺産に登録され、日本三景の一つにも数えられる宮島の景観とともに、国内外から多くの観光客が訪れる名所となっています。"
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
    "summaryJa": "四国八十八箇所巡礼は、四国にある88の寺院を巡る伝統的な巡礼の旅です。",
    "detailJa": "四国八十八箇所巡礼は、四国にある88の寺院を巡る伝統的な巡礼の旅です。 四国八十八箇所は、弘法大師空海にゆかりがあるとされる四国4県（徳島・高知・愛媛・香川）に点在する88の寺院を巡る巡礼の旅です。",
    "keyPointsJa": [
      "四国4県にある88の寺院を巡る",
      "弘法大師空海ゆかりの地とされる",
      "巡礼者は「お遍路さん」と呼ばれる",
      "全行程は約1400kmに及ぶ"
    ],
    "backgroundJa": "四国八十八箇所は、弘法大師空海にゆかりがあるとされる四国4県（徳島・高知・愛媛・香川）に点在する88の寺院を巡る巡礼の旅です。",
    "historyJa": "巡礼の起源は古く、江戸時代には現在のような巡礼の形式が確立したとされています。巡礼者は白い装束を身にまとい「お遍路さん」と呼ばれます。",
    "episodeJa": "全行程は約1400キロメートルにおよび、すべて歩いて巡ると1ヶ月から2ヶ月程度かかるといわれています。現在は自動車やバスツアーで巡る人も多く、信仰だけでなく観光としても親しまれています。"
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
    "summaryJa": "三陸海岸は岩手県・宮城県にまたがる、入り組んだリアス海岸が続く地域です。",
    "detailJa": "三陸海岸は岩手県・宮城県にまたがる、入り組んだリアス海岸が続く地域です。 三陸海岸は岩手県から宮城県にかけて広がる海岸地域で、入り組んだ湾や岬が連続する「リアス海岸」と呼ばれる地形が特徴です。",
    "keyPointsJa": [
      "岩手県から宮城県にかけて広がる海岸",
      "入り組んだ地形の「リアス海岸」が特徴",
      "豊かな漁場として知られる",
      "2011年の東日本大震災で大きな被害を受けた"
    ],
    "backgroundJa": "三陸海岸は岩手県から宮城県にかけて広がる海岸地域で、入り組んだ湾や岬が連続する「リアス海岸」と呼ばれる地形が特徴です。",
    "historyJa": "この地形は海に面した山地が沈降し、谷だった部分に海水が入り込むことで形成されたとされ、波が穏やかな湾内は養殖業などに適した豊かな漁場となっています。",
    "episodeJa": "一方でリアス海岸は奥に進むほど波の高さが増しやすい特徴があり、2011年の東日本大震災では津波による大きな被害を受けました。震災後は防災や復興のまちづくりが進められています。"
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
    "summaryJa": "トヨタ生産方式の「かんばん」は、必要なものを必要なときに必要な量だけ作るための管理ツールです。",
    "detailJa": "トヨタ生産方式の「かんばん」は、必要なものを必要なときに必要な量だけ作るための管理ツールです。 「かんばん」は、トヨタ自動車が確立した生産管理の仕組みである「トヨタ生産方式」の中で使われる、部品の生産や運搬の指示を伝えるための札（カード）です。",
    "keyPointsJa": [
      "トヨタ自動車が確立した生産管理の手法",
      "「ジャストインタイム」の考え方を実現する道具",
      "工程間で部品の生産・運搬の指示を伝える札",
      "在庫の無駄を減らすことを目的とする"
    ],
    "backgroundJa": "「かんばん」は、トヨタ自動車が確立した生産管理の仕組みである「トヨタ生産方式」の中で使われる、部品の生産や運搬の指示を伝えるための札（カード）です。",
    "historyJa": "必要なものを必要なときに必要な量だけ生産・供給する「ジャストインタイム」の考え方を実現するための道具として考案され、過剰な在庫を持たずに効率的な生産を行うことを目的としています。",
    "episodeJa": "かんばん方式は製造業だけでなく、ソフトウェア開発の現場でもタスク管理の手法「カンバン方式」として応用されており、世界的に影響を与えた日本発の管理手法として知られています。"
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
    "summaryJa": "日本の電話番号は市外局番・市内局番・加入者番号からなる形式で表記されます。",
    "detailJa": "日本の電話番号は市外局番・市内局番・加入者番号からなる形式で表記されます。 日本の固定電話番号は、地域ごとに割り当てられた市外局番、市内局番、加入者番号の3つの部分から構成されます。市外局番の桁数は地域によって異なります。",
    "keyPointsJa": [
      "固定電話は市外局番から始まる",
      "携帯電話は090・080・070などで始まる",
      "桁数は番号の種類によって異なる",
      "ハイフンの位置にも一定のルールがある"
    ],
    "backgroundJa": "日本の固定電話番号は、地域ごとに割り当てられた市外局番、市内局番、加入者番号の3つの部分から構成されます。市外局番の桁数は地域によって異なります。",
    "historyJa": "携帯電話の番号は「090」「080」「070」などで始まる11桁の番号が使われており、固定電話とは異なる番号体系が採用されています。",
    "episodeJa": "電話番号を扱うシステムでは、固定電話と携帯電話で桁数やハイフンの位置のルールが異なるため、これらを区別して正しく処理する必要があります。"
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
    "summaryJa": "日本語の縦書きは、文字を上から下へ、行を右から左へ進めて読む伝統的な表記方法です。",
    "detailJa": "日本語の縦書きは、文字を上から下へ、行を右から左へ進めて読む伝統的な表記方法です。 日本語には、文字を上から下へ、行を右から左へと進めて読む「縦書き」という伝統的な表記方法があります。これは漢字や仮名の成立とともに発展してきた書字方向です。",
    "keyPointsJa": [
      "文字は上から下へ進む",
      "行は右から左へ進む",
      "小説や新聞のコラムなどで今も使われる",
      "Webやアプリでは横書きが主流となっている"
    ],
    "backgroundJa": "日本語には、文字を上から下へ、行を右から左へと進めて読む「縦書き」という伝統的な表記方法があります。これは漢字や仮名の成立とともに発展してきた書字方向です。",
    "historyJa": "現在も小説や新聞のコラム、年賀状などでは縦書きが好んで使われる一方、コンピュータやWebの表示は基本的に横書きを前提に設計されてきました。",
    "episodeJa": "CSSの`writing-mode`プロパティなどを使うことで、Webページ上でも縦書き表示を実現できるようになっており、近年は縦書きに対応したデジタル作品やアプリも増えています。"
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
    "summaryJa": "日本の多くの企業や行政機関では、4月1日から翌年3月31日までを1年度とする会計年度が使われます。",
    "detailJa": "日本の多くの企業や行政機関では、4月1日から翌年3月31日までを1年度とする会計年度が使われます。 日本では多くの企業や国・地方自治体が、4月1日から翌年3月31日までを1つの「年度」とする会計制度を採用しています。",
    "keyPointsJa": [
      "4月1日に始まり翌年3月31日に終わる",
      "国の予算や多くの企業の決算もこの周期に合わせている",
      "学校の入学・卒業の時期とも一致する",
      "海外では1月始まりなど異なる会計年度を使う国も多い"
    ],
    "backgroundJa": "日本では多くの企業や国・地方自治体が、4月1日から翌年3月31日までを1つの「年度」とする会計制度を採用しています。",
    "historyJa": "この4月始まりの制度は、明治時代に国の会計制度として定められたことに由来するとされ、学校の入学・卒業の時期もこの年度に合わせて運用されています。",
    "episodeJa": "海外では1月始まりの会計年度を採用する国も多く、国際的なシステムを開発する際は、こうした年度の開始時期の違いに注意する必要があります。"
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
    "summaryJa": "アメリカ連邦政府は、立法・行政・司法の三権が互いに抑制し合う仕組みで構成されています。",
    "detailJa": "アメリカ連邦政府は、立法・行政・司法の三権が互いに抑制し合う仕組みで構成されています。 アメリカ合衆国憲法は、権力が一つの機関に集中することを防ぐため、立法権を連邦議会に、行政権を大統領に、司法権を連邦裁判所にそれぞれ分ける「三権分立」を採用しています。",
    "keyPointsJa": [
      "立法権は連邦議会（上院・下院）が持つ",
      "行政権は大統領が持つ",
      "司法権は最高裁判所などの連邦裁判所が持つ",
      "三権が互いをチェックする「抑制と均衡」の仕組みがある"
    ],
    "backgroundJa": "アメリカ合衆国憲法は、権力が一つの機関に集中することを防ぐため、立法権を連邦議会に、行政権を大統領に、司法権を連邦裁判所にそれぞれ分ける「三権分立」を採用しています。",
    "historyJa": "この仕組みは、イギリスからの独立後に絶対的な権力者を生まないようにするという建国時の理念に基づいて設計されました。各府は他の府の行動を制限する権限（拒否権や違憲審査権など）を持ち、互いを監視しています。",
    "episodeJa": "例えば大統領は議会が可決した法案に拒否権を行使できますが、議会は一定数以上の賛成があればこれを覆すことができます。こうした「抑制と均衡」の関係が、アメリカの政治制度の大きな特徴とされています。"
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
    "summaryJa": "アメリカ上院は各州から2名ずつ選出される議員、合計100名で構成されます。",
    "detailJa": "アメリカ上院は各州から2名ずつ選出される議員、合計100名で構成されます。 アメリカ上院は、人口の多い州も少ない州も平等に2名ずつ代表を送ることができる仕組みになっており、合計で100名の議員で構成されています。",
    "keyPointsJa": [
      "各州から人口に関わらず2名ずつ選出",
      "合計100名の議員で構成",
      "任期は6年で2年ごとに約3分の1が改選",
      "条約の承認や高官人事の承認権を持つ"
    ],
    "backgroundJa": "アメリカ上院は、人口の多い州も少ない州も平等に2名ずつ代表を送ることができる仕組みになっており、合計で100名の議員で構成されています。",
    "historyJa": "これは人口に応じて議席数が決まる下院とは異なる仕組みで、小さな州の意見も国政に反映されるようにするための制度として設計されました。任期は6年で、2年ごとに議員の約3分の1が改選されます。",
    "episodeJa": "上院は条約の承認や、最高裁判所判事をはじめとする高官の人事承認といった、下院にはない独自の権限を持っており、アメリカの政治制度の中で重要な役割を果たしています。"
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
    "summaryJa": "アメリカ国旗は50の州を表す星と、独立当時の13州を表す13本の縞模様で構成されています。",
    "detailJa": "アメリカ国旗は50の州を表す星と、独立当時の13州を表す13本の縞模様で構成されています。 アメリカ国旗は、現在の50州を表す50個の星と、独立を宣言した当時の13植民地を表す赤白13本の縞模様から構成されています。",
    "keyPointsJa": [
      "50個の星が現在の50州を表す",
      "13本の縞は独立当時の13州を表す",
      "新しい州が加わるたびに星の数が増えてきた",
      "現在のデザインは1960年から使われている"
    ],
    "backgroundJa": "アメリカ国旗は、現在の50州を表す50個の星と、独立を宣言した当時の13植民地を表す赤白13本の縞模様から構成されています。",
    "historyJa": "州の数が増えるたびに星の数も増やされてきた歴史があり、ハワイ州が加わった1959年の翌年、1960年に現在の50個の星を持つデザインが正式に採用されました。",
    "episodeJa": "このように国旗のデザインそのものが、アメリカという国が独立後に州を増やしながら拡大してきた歴史を物語る形になっています。"
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
    "summaryJa": "ハクトウワシは1782年にアメリカ合衆国の国鳥として国璽に採用された猛禽類です。",
    "detailJa": "ハクトウワシは1782年にアメリカ合衆国の国鳥として国璽に採用された猛禽類です。 ハクトウワシは北米大陸に生息する大型の猛禽類で、1782年にアメリカ合衆国の国璽（国の正式な印章）のデザインに採用されたことから、国を象徴する鳥として広く認識されています。",
    "keyPointsJa": [
      "1782年に国の象徴として正式に採用",
      "アメリカ大陸に固有の猛禽類",
      "力強さと自由の象徴とされる",
      "一度は絶滅が危惧された時期もある"
    ],
    "backgroundJa": "ハクトウワシは北米大陸に生息する大型の猛禽類で、1782年にアメリカ合衆国の国璽（国の正式な印章）のデザインに採用されたことから、国を象徴する鳥として広く認識されています。",
    "historyJa": "20世紀には農薬の影響などで生息数が大きく減少し、絶滅が危惧される時期もありましたが、保護活動や規制によって個体数は回復し、現在は絶滅危惧種から除外されています。",
    "episodeJa": "国の正式な象徴であることから、政府の文書やコインなど多くの公的な場面でハクトウワシの図柄が使われています。"
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
    "summaryJa": "イエローストーン国立公園は1872年に指定された、世界で最初の国立公園です。",
    "detailJa": "イエローストーン国立公園は1872年に指定された、世界で最初の国立公園です。 イエローストーン国立公園は、1872年にアメリカで指定された、世界で最初の国立公園です。ワイオミング州を中心に、モンタナ州・アイダホ州にまたがる広大な敷地を持ちます。",
    "keyPointsJa": [
      "1872年に世界初の国立公園として指定された",
      "ワイオミング州を中心に3州にまたがる",
      "巨大な火山地形（カルデラ）の上にある",
      "間欠泉「オールド・フェイスフル」が有名"
    ],
    "backgroundJa": "イエローストーン国立公園は、1872年にアメリカで指定された、世界で最初の国立公園です。ワイオミング州を中心に、モンタナ州・アイダホ州にまたがる広大な敷地を持ちます。",
    "historyJa": "公園の地下には巨大な火山地形（カルデラ）が存在し、これによって多数の温泉や間欠泉といった独特の地熱現象が見られます。",
    "episodeJa": "中でも規則的に噴出することで知られる間欠泉「オールド・フェイスフル」は、公園を代表する観光名所として多くの旅行者を集めています。"
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
    "summaryJa": "独立記念館は、アメリカ独立宣言と合衆国憲法が採択されたフィラデルフィアの建物です。",
    "detailJa": "独立記念館は、アメリカ独立宣言と合衆国憲法が採択されたフィラデルフィアの建物です。 独立記念館はペンシルベニア州フィラデルフィアにある建物で、1776年にアメリカ独立宣言が、1787年にアメリカ合衆国憲法が、それぞれこの場所で採択・制定されました。",
    "keyPointsJa": [
      "1776年に独立宣言が採択された",
      "1787年に合衆国憲法が制定された",
      "フィラデルフィア（ペンシルベニア州）にある",
      "1979年に世界文化遺産に登録された"
    ],
    "backgroundJa": "独立記念館はペンシルベニア州フィラデルフィアにある建物で、1776年にアメリカ独立宣言が、1787年にアメリカ合衆国憲法が、それぞれこの場所で採択・制定されました。",
    "historyJa": "もともとはペンシルベニア植民地の議会堂として建てられたもので、アメリカ建国に関わる重要な決定がこの建物で次々と行われたことから、建国の歴史を象徴する場所となりました。",
    "episodeJa": "1979年には「自由の鐘」とともに世界文化遺産に登録され、現在もアメリカ建国の歴史を伝える史跡として一般に公開されています。"
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
    "summaryJa": "アポロ11号は1969年に人類を初めて月面に着陸させたアメリカの宇宙ミッションです。",
    "detailJa": "アポロ11号は1969年に人類を初めて月面に着陸させたアメリカの宇宙ミッションです。 アポロ11号は、ニール・アームストロング、バズ・オルドリン、マイケル・コリンズの3人の宇宙飛行士が搭乗し、1969年7月にNASAが実施した有人月面探査ミッションです。",
    "keyPointsJa": [
      "1969年7月20日に月面着陸を達成",
      "船長ニール・アームストロングらが搭乗",
      "「人類にとって大きな飛躍」という言葉が有名",
      "NASAのアポロ計画の中心的な成果"
    ],
    "backgroundJa": "アポロ11号は、ニール・アームストロング、バズ・オルドリン、マイケル・コリンズの3人の宇宙飛行士が搭乗し、1969年7月にNASAが実施した有人月面探査ミッションです。",
    "historyJa": "1969年7月20日、アームストロングとオルドリンが月面に降り立ち、人類史上初めて人間が地球以外の天体に到達しました。アームストロングが月面に降りた際に語った「これは一人の人間にとっては小さな一歩だが、人類にとっては大きな飛躍である」という言葉は広く知られています。",
    "episodeJa": "このミッションは、当時のアメリカとソビエト連邦の間で行われていた宇宙開発競争の大きな到達点となり、世界中で大きな話題となりました。"
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
    "summaryJa": "マーク・トウェインは「ハックルベリー・フィンの冒険」などで知られるアメリカの作家です。",
    "detailJa": "マーク・トウェインは「ハックルベリー・フィンの冒険」などで知られるアメリカの作家です。 マーク・トウェインは本名サミュエル・クレメンズというアメリカの作家で、ミシシッピ川の水先案内人としての経験を持つことが、後の作品に大きな影響を与えました。",
    "keyPointsJa": [
      "本名はサミュエル・クレメンズ",
      "代表作に「トム・ソーヤーの冒険」がある",
      "「ハックルベリー・フィンの冒険」はアメリカ文学の傑作とされる",
      "ミシシッピ川での経験が作品の題材になった"
    ],
    "backgroundJa": "マーク・トウェインは本名サミュエル・クレメンズというアメリカの作家で、ミシシッピ川の水先案内人としての経験を持つことが、後の作品に大きな影響を与えました。",
    "historyJa": "代表作「トム・ソーヤーの冒険」とその続編にあたる「ハックルベリー・フィンの冒険」は、少年たちの冒険を通してアメリカ南部の社会や人種問題を描いた作品として知られています。",
    "episodeJa": "「ハックルベリー・フィンの冒険」は、当時のアメリカ社会の問題に踏み込んだ内容から賛否を呼びましたが、現在ではアメリカ文学を代表する作品の一つとして高く評価されています。"
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
    "summaryJa": "ミシシッピ川はアメリカ中央部を流れる、北米大陸で最も長い川の一つです。",
    "detailJa": "ミシシッピ川はアメリカ中央部を流れる、北米大陸で最も長い川の一つです。 ミシシッピ川はアメリカ中央部を北から南へ流れる大河で、全長は約3700キロメートルに及びます。ミネソタ州に源を発し、メキシコ湾へと流れ込みます。",
    "keyPointsJa": [
      "全長は約3700km",
      "ミネソタ州からメキシコ湾まで流れる",
      "アメリカの物流や農業を支える重要な水路",
      "ミズーリ川と合わせると北米最長級の水系となる"
    ],
    "backgroundJa": "ミシシッピ川はアメリカ中央部を北から南へ流れる大河で、全長は約3700キロメートルに及びます。ミネソタ州に源を発し、メキシコ湾へと流れ込みます。",
    "historyJa": "古くから先住民の生活や、ヨーロッパ人による開拓・物流の重要な水路として利用されてきました。支流のミズーリ川と合わせると、北米大陸でも最長級の河川水系を形成します。",
    "episodeJa": "現在も農産物や工業製品の輸送路として重要な役割を担っており、流域には多くの大都市が発展しています。"
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
    "summaryJa": "ルート66は、シカゴからロサンゼルスまでを結んでいたアメリカの歴史的な国道です。",
    "detailJa": "ルート66は、シカゴからロサンゼルスまでを結んでいたアメリカの歴史的な国道です。 ルート66は1926年に開通した、イリノイ州シカゴからカリフォルニア州ロサンゼルスまでを結ぶ国道で、「マザーロード」の愛称で親しまれてきました。",
    "keyPointsJa": [
      "1926年に開通した国道",
      "シカゴからロサンゼルスまでを結んだ",
      "「マザーロード」の愛称で知られる",
      "1985年に正式な国道としては廃止された"
    ],
    "backgroundJa": "ルート66は1926年に開通した、イリノイ州シカゴからカリフォルニア州ロサンゼルスまでを結ぶ国道で、「マザーロード」の愛称で親しまれてきました。",
    "historyJa": "20世紀のアメリカにおける自動車文化や西部開拓の象徴として、多くの音楽や映画の題材にもなりました。その後、州間高速道路網の整備が進む中で、1985年に正式な国道としては廃止されました。",
    "episodeJa": "廃止後も観光名所として一部の区間が保存・整備されており、「ヒストリック・ルート66」として現在も多くの旅行者が訪れています。"
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
    "summaryJa": "グランドキャニオンはアリゾナ州にある、コロラド川が削り出した世界最大級の峡谷です。",
    "detailJa": "グランドキャニオンはアリゾナ州にある、コロラド川が削り出した世界最大級の峡谷です。 グランドキャニオンはアリゾナ州北部にある峡谷で、コロラド川が数百万年という長い年月をかけて岩盤を削り出して形成されました。",
    "keyPointsJa": [
      "アリゾナ州北部に位置する",
      "コロラド川が長い年月をかけて削り出した",
      "1979年に世界自然遺産に登録された",
      "地層から地球の歴史を読み取ることができる"
    ],
    "backgroundJa": "グランドキャニオンはアリゾナ州北部にある峡谷で、コロラド川が数百万年という長い年月をかけて岩盤を削り出して形成されました。",
    "historyJa": "峡谷の壁には地層が積み重なって露出しており、地球の長い歴史を物語る貴重な地質学的資料となっています。1979年に世界自然遺産に登録されました。",
    "episodeJa": "深さは最大で約1800メートルにおよび、その圧倒的な規模から、毎年多くの観光客がハイキングや展望を楽しみに訪れています。"
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
    "summaryJa": "五大湖はアメリカとカナダの国境に広がる、世界最大級の淡水湖群です。",
    "detailJa": "五大湖はアメリカとカナダの国境に広がる、世界最大級の淡水湖群です。 五大湖は、スペリオル湖・ミシガン湖・ヒューロン湖・エリー湖・オンタリオ湖という5つの湖から構成される、アメリカとカナダの国境地帯に広がる巨大な淡水湖群です。",
    "keyPointsJa": [
      "スペリオル湖・ミシガン湖・ヒューロン湖・エリー湖・オンタリオ湖の5つ",
      "世界の淡水の約2割を占めるとされる",
      "アメリカとカナダの国境にまたがる",
      "物流や工業地帯の発展を支えてきた"
    ],
    "backgroundJa": "五大湖は、スペリオル湖・ミシガン湖・ヒューロン湖・エリー湖・オンタリオ湖という5つの湖から構成される、アメリカとカナダの国境地帯に広がる巨大な淡水湖群です。",
    "historyJa": "これらの湖は世界の地表にある淡水のおよそ2割を占めるとされ、運河や水路と結びついて、周辺地域の物流・工業発展を支える重要な役割を果たしてきました。",
    "episodeJa": "五大湖周辺にはデトロイトやシカゴなどの大都市が発展し、現在も水運や観光、漁業など多様な活動の舞台となっています。"
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
    "summaryJa": "ルイジアナ買収は、1803年にアメリカがフランスから広大な領土を購入した出来事です。",
    "detailJa": "ルイジアナ買収は、1803年にアメリカがフランスから広大な領土を購入した出来事です。 ルイジアナ買収は、1803年にトーマス・ジェファーソン大統領のもとで行われた、フランスから広大な領土を購入した出来事です。",
    "keyPointsJa": [
      "1803年に実施された",
      "フランスから現在のアメリカ中西部にあたる広大な土地を購入",
      "アメリカの国土を約2倍に拡大させた",
      "トーマス・ジェファーソン大統領のもとで行われた"
    ],
    "backgroundJa": "ルイジアナ買収は、1803年にトーマス・ジェファーソン大統領のもとで行われた、フランスから広大な領土を購入した出来事です。",
    "historyJa": "購入された土地は現在のアメリカ中西部にあたる広範囲に及び、これによってアメリカの国土面積はおよそ2倍に拡大しました。",
    "episodeJa": "この領土拡大は、その後のアメリカの西方への開拓（西部開拓）を進める大きな足がかりとなり、アメリカ史における重要な転換点とされています。"
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
    "summaryJa": "1869年、ユタ州プロモントリー・サミットで大陸横断鉄道の東西の線がつながりました。",
    "detailJa": "1869年、ユタ州プロモントリー・サミットで大陸横断鉄道の東西の線がつながりました。 アメリカ大陸横断鉄道は、東から建設を進めるユニオン・パシフィック鉄道と、西から建設を進めるセントラル・パシフィック鉄道という2つの会社によって作られました。",
    "keyPointsJa": [
      "1869年5月10日に東西の路線が結合した",
      "ユタ州プロモントリー・サミットが結合地点",
      "「黄金の犬釘」を打ち込む式典が行われた",
      "東海岸と西海岸の移動時間を大幅に短縮した"
    ],
    "backgroundJa": "アメリカ大陸横断鉄道は、東から建設を進めるユニオン・パシフィック鉄道と、西から建設を進めるセントラル・パシフィック鉄道という2つの会社によって作られました。",
    "historyJa": "1869年5月10日、ユタ州のプロモントリー・サミットで両社の線路がついにつながり、東海岸と西海岸を鉄道で結ぶことが可能になりました。この際、記念の「黄金の犬釘」を打ち込む式典が行われました。",
    "episodeJa": "それまで馬車などで数ヶ月かかっていた東西間の移動が、鉄道によって数日程度に短縮され、アメリカの経済や社会に大きな変化をもたらしました。"
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
    "summaryJa": "ニューオーリンズは、20世紀初頭にジャズが生まれた発祥の地として知られる都市です。",
    "detailJa": "ニューオーリンズは、20世紀初頭にジャズが生まれた発祥の地として知られる都市です。 ニューオーリンズはルイジアナ州にある港湾都市で、アフリカ系、ヨーロッパ系、カリブ海地域など多様な文化が融合する独特の環境を持っていました。",
    "keyPointsJa": [
      "ルイジアナ州にある港湾都市",
      "20世紀初頭にジャズが生まれた発祥の地とされる",
      "アフリカ系・ヨーロッパ系など多様な文化が融合した",
      "ルイ・アームストロングなど多くのミュージシャンを輩出"
    ],
    "backgroundJa": "ニューオーリンズはルイジアナ州にある港湾都市で、アフリカ系、ヨーロッパ系、カリブ海地域など多様な文化が融合する独特の環境を持っていました。",
    "historyJa": "こうした文化の融合を背景に、20世紀初頭、ブラスバンドやブルースなどの要素が組み合わさって「ジャズ」という新しい音楽形式がこの地で生まれたとされています。",
    "episodeJa": "ニューオーリンズはルイ・アームストロングをはじめ多くの著名なジャズミュージシャンを輩出し、現在も街中で生演奏のジャズを楽しめる音楽の都として知られています。"
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
    "summaryJa": "ライトフライヤーは、1903年にライト兄弟が動力飛行に初めて成功した飛行機です。",
    "detailJa": "ライトフライヤーは、1903年にライト兄弟が動力飛行に初めて成功した飛行機です。 ライトフライヤーは、自転車店を営んでいたオービルとウィルバーのライト兄弟が開発した飛行機で、1903年12月17日、ノースカロライナ州キティホークで初飛行に成功しました。",
    "keyPointsJa": [
      "1903年12月17日に初飛行に成功",
      "ノースカロライナ州キティホークで飛行した",
      "操縦可能な動力飛行として世界初とされる",
      "飛行時間はわずか12秒だった"
    ],
    "backgroundJa": "ライトフライヤーは、自転車店を営んでいたオービルとウィルバーのライト兄弟が開発した飛行機で、1903年12月17日、ノースカロライナ州キティホークで初飛行に成功しました。",
    "historyJa": "この飛行は人が操縦できる動力飛行機による、持続的かつ制御可能な初めての飛行として記録されています。最初の飛行時間はわずか12秒、距離は約36メートルでした。",
    "episodeJa": "この成功は航空技術の発展の出発点とされ、ライト兄弟の挑戦から100年余りで、人類は宇宙旅行が可能な技術まで到達することになりました。"
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
    "summaryJa": "フーバーダムは、ネバダ州とアリゾナ州の境にある、コロラド川に建設された巨大なダムです。",
    "detailJa": "フーバーダムは、ネバダ州とアリゾナ州の境にある、コロラド川に建設された巨大なダムです。 フーバーダムは、コロラド川にネバダ州とアリゾナ州の境にまたがる形で建設された大規模なダムで、1936年に完成しました。",
    "keyPointsJa": [
      "1936年に完成",
      "ネバダ州とアリゾナ州の境にある",
      "世界恐慌時代の公共事業の象徴とされる",
      "貯水池「ミード湖」を形成している"
    ],
    "backgroundJa": "フーバーダムは、コロラド川にネバダ州とアリゾナ州の境にまたがる形で建設された大規模なダムで、1936年に完成しました。",
    "historyJa": "建設は世界恐慌の時代に行われ、多くの雇用を生み出す公共事業として実施されたことから、当時の経済復興を象徴する建造物としても語られています。",
    "episodeJa": "ダムによって作られた貯水池「ミード湖」は、アメリカ最大級の人工湖であり、周辺地域への電力供給や灌漑、レクリエーションの場としても利用されています。"
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
    "summaryJa": "USPS州略称は、アメリカ郵便公社が定めた、各州を表す2文字の略称です。",
    "detailJa": "USPS州略称は、アメリカ郵便公社が定めた、各州を表す2文字の略称です。 USPS（アメリカ郵便公社）は、住所の州名部分を簡潔に表記するため、各州・地域に2文字の英大文字からなる略称を定めています。",
    "keyPointsJa": [
      "各州・地域に2文字の英大文字を割り当てる",
      "カリフォルニア州はCA、ニューヨーク州はNYなど",
      "住所表記を簡潔にするために使われる",
      "似た略称を持つ州もあるため注意が必要"
    ],
    "backgroundJa": "USPS（アメリカ郵便公社）は、住所の州名部分を簡潔に表記するため、各州・地域に2文字の英大文字からなる略称を定めています。",
    "historyJa": "例えばカリフォルニア州は「CA」、ニューヨーク州は「NY」、テキサス州は「TX」のように表記され、郵便物の宛先などで広く使われています。",
    "episodeJa": "アラバマ州（AL）とアラスカ州（AK）のように似た略称を持つ州もあるため、住所データを処理するシステムでは、略称の正確な対応関係を確認する必要があります。"
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
    "summaryJa": "アメリカのZIPコード（郵便番号）には、先頭がゼロで始まるものが存在します。",
    "detailJa": "アメリカのZIPコード（郵便番号）には、先頭がゼロで始まるものが存在します。 アメリカのZIPコード（郵便番号）は基本的に5桁の数字で構成されますが、マサチューセッツ州やコネチカット州などニューイングランド地方の一部には、先頭がゼロで始まる番号（例：02134）が存在します。",
    "keyPointsJa": [
      "ZIPコードは基本的に5桁の数字",
      "ニューイングランド地方などには先頭がゼロの番号がある",
      "数値として扱うと先頭のゼロが失われる",
      "文字列として保存・処理する必要がある"
    ],
    "backgroundJa": "アメリカのZIPコード（郵便番号）は基本的に5桁の数字で構成されますが、マサチューセッツ州やコネチカット州などニューイングランド地方の一部には、先頭がゼロで始まる番号（例：02134）が存在します。",
    "historyJa": "こうした番号をプログラム上で「数値」として扱うと、先頭のゼロが失われて4桁の数字として認識されてしまう問題が起こります。",
    "episodeJa": "これを防ぐため、ZIPコードはシステム上では数値ではなく「文字列」として保存・処理するのが基本的な設計上の注意点とされています。"
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
    "summaryJa": "アメリカ式の日付表記は「月/日/年」の順で書かれるのが一般的です。",
    "detailJa": "アメリカ式の日付表記は「月/日/年」の順で書かれるのが一般的です。 アメリカでは日付を「月/日/年」（例：12/25/2024）の順で表記するのが一般的で、これは日本の「年/月/日」やヨーロッパの多くの国で使われる「日/月/年」とは異なる順序です。",
    "keyPointsJa": [
      "「月/日/年」の順で表記する",
      "日本式の「年/月/日」とは順序が異なる",
      "「12/05/2024」のような表記は月と日を誤解しやすい",
      "国際的なシステムではISO 8601形式が推奨される"
    ],
    "backgroundJa": "アメリカでは日付を「月/日/年」（例：12/25/2024）の順で表記するのが一般的で、これは日本の「年/月/日」やヨーロッパの多くの国で使われる「日/月/年」とは異なる順序です。",
    "historyJa": "この表記の違いにより、例えば「05/06/2024」という日付は、アメリカ式では「5月6日」、日本式やヨーロッパ式では「6月5日」または「2024年5月6日」と解釈が分かれてしまうことがあります。",
    "episodeJa": "こうした誤解を避けるため、国際的なシステムでは「2024-05-06」のように年から始める「ISO 8601」という形式を使うことが推奨されています。"
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
    "summaryJa": "アメリカ本土は東部・中部・山岳部・太平洋という4つの主要なタイムゾーンに分かれています。",
    "detailJa": "アメリカ本土は東部・中部・山岳部・太平洋という4つの主要なタイムゾーンに分かれています。 アメリカ本土は国土が東西に非常に広いため、東部標準時、中部標準時、山岳部標準時、太平洋標準時という4つの主要なタイムゾーンに分かれています。",
    "keyPointsJa": [
      "東部・中部・山岳部・太平洋の4つの主要タイムゾーンがある",
      "アラスカ州・ハワイ州はさらに別のタイムゾーンを使う",
      "国土が東西に広いことが理由",
      "同じ国内でも時刻が最大数時間異なる"
    ],
    "backgroundJa": "アメリカ本土は国土が東西に非常に広いため、東部標準時、中部標準時、山岳部標準時、太平洋標準時という4つの主要なタイムゾーンに分かれています。",
    "historyJa": "アラスカ州やハワイ州はさらに別のタイムゾーンを採用しており、同じアメリカ国内でも地域によって時刻が数時間異なることがあります。",
    "episodeJa": "これは日本のように国内全域で単一の標準時を使う国とは大きく異なる点で、アメリカ向けのシステムを開発する際は、利用者がどのタイムゾーンにいるかを意識した時刻処理が必要になります。"
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
    "summaryJa": "北米電話番号計画（NANP）は、アメリカ・カナダなどで使われる統一的な電話番号の形式です。",
    "detailJa": "北米電話番号計画（NANP）は、アメリカ・カナダなどで使われる統一的な電話番号の形式です。 北米電話番号計画（NANP）は、アメリカやカナダ、カリブ海の一部地域などで共有されている電話番号の体系で、国番号は「+1」、番号は基本的に「地域番号3桁＋3桁＋4桁」の合計10桁で構成されます。",
    "keyPointsJa": [
      "3桁の地域番号＋3桁＋4桁の合計10桁が基本",
      "アメリカ・カナダなど北米の複数の国・地域で共有される",
      "国番号は「+1」",
      "地域番号は地理的な区域を表す"
    ],
    "backgroundJa": "北米電話番号計画（NANP）は、アメリカやカナダ、カリブ海の一部地域などで共有されている電話番号の体系で、国番号は「+1」、番号は基本的に「地域番号3桁＋3桁＋4桁」の合計10桁で構成されます。",
    "historyJa": "この体系のおかげで、これらの国・地域間では国番号を変えるだけで同じ形式の電話番号を扱うことができ、通信インフラの構築が効率化されました。",
    "episodeJa": "電話番号を扱うシステムを設計する際は、この10桁の構成と先頭の国番号の有無を正しく判定する処理が必要になります。"
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
    "summaryJa": "アメリカは連邦政府と50の州政府がそれぞれ独自の権限を持つ「連邦制」の国家です。",
    "detailJa": "アメリカは連邦政府と50の州政府がそれぞれ独自の権限を持つ「連邦制」の国家です。 アメリカ合衆国は、国全体を統治する連邦政府と、50の州それぞれが独自の政府を持つ「連邦制」という仕組みを採用しています。",
    "keyPointsJa": [
      "連邦政府と50の州政府が存在する",
      "州ごとに独自の法律や税制を持つことができる",
      "憲法で連邦と州の権限分担が定められている",
      "教育や警察などは主に州の権限とされる"
    ],
    "backgroundJa": "アメリカ合衆国は、国全体を統治する連邦政府と、50の州それぞれが独自の政府を持つ「連邦制」という仕組みを採用しています。",
    "historyJa": "合衆国憲法では、外交や国防など連邦政府が担う権限と、それ以外の多くの分野で州が独自に決定できる権限が分担されています。",
    "episodeJa": "このため教育制度や刑法、運転免許の規則などは州によって異なることが多く、アメリカ全体に共通する制度と、州ごとに異なる制度が併存しています。"
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
    "summaryJa": "自由の鐘は、フィラデルフィアにある独立の象徴として知られる鐘です。",
    "detailJa": "自由の鐘は、フィラデルフィアにある独立の象徴として知られる鐘です。 自由の鐘はペンシルベニア州フィラデルフィアにある鐘で、独立記念館の近くに展示されており、アメリカの自由と独立を象徴する存在として知られています。",
    "keyPointsJa": [
      "フィラデルフィアの独立記念館近くに展示されている",
      "鐘には聖書の一節が刻まれている",
      "大きなひびが入っていることで有名",
      "アメリカの自由と独立を象徴する存在"
    ],
    "backgroundJa": "自由の鐘はペンシルベニア州フィラデルフィアにある鐘で、独立記念館の近くに展示されており、アメリカの自由と独立を象徴する存在として知られています。",
    "historyJa": "鐘には聖書の一節にちなんだ「すべての住民に自由を告げ知らせよ」という意味の言葉が刻まれており、独立宣言を伝えるために鳴らされたという伝承があります。",
    "episodeJa": "現在の鐘には大きなひびが入っており、鳴らすことはできませんが、その姿そのものがアメリカの歴史を物語る存在として多くの観光客が訪れています。"
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
    "summaryJa": "ヨセミテ国立公園はカリフォルニア州にある、壮大な渓谷や滝で知られる国立公園です。",
    "detailJa": "ヨセミテ国立公園はカリフォルニア州にある、壮大な渓谷や滝で知られる国立公園です。 ヨセミテ国立公園はカリフォルニア州のシエラネバダ山脈にある国立公園で、氷河によって作られた壮大な渓谷や、いくつもの美しい滝が見られることで知られています。",
    "keyPointsJa": [
      "カリフォルニア州シエラネバダ山脈にある",
      "1984年に世界自然遺産に登録された",
      "巨大な一枚岩「エル・キャピタン」で知られる",
      "巨木セコイアの森も見られる"
    ],
    "backgroundJa": "ヨセミテ国立公園はカリフォルニア州のシエラネバダ山脈にある国立公園で、氷河によって作られた壮大な渓谷や、いくつもの美しい滝が見られることで知られています。",
    "historyJa": "園内には世界最大級の一枚岩として知られる「エル・キャピタン」があり、ロッククライミングの聖地としても世界的に有名です。1984年には世界自然遺産に登録されました。",
    "episodeJa": "巨大なセコイアの木々が並ぶ森も園内に広がっており、アメリカの自然保護運動の歴史を語る上でも重要な場所とされています。"
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
    "summaryJa": "メサ・ヴェルデは、先住民プエブロ族が断崖に築いた住居跡が残るコロラド州の遺跡です。",
    "detailJa": "メサ・ヴェルデは、先住民プエブロ族が断崖に築いた住居跡が残るコロラド州の遺跡です。 メサ・ヴェルデはコロラド州にある国立公園で、先住民プエブロ族の祖先が断崖の窪みに築いた集合住宅のような住居跡が数多く残されています。",
    "keyPointsJa": [
      "コロラド州にある国立公園・遺跡",
      "先住民プエブロ族が築いた断崖の住居跡が残る",
      "1978年に世界文化遺産に登録された",
      "12世紀から13世紀頃に築かれたとされる"
    ],
    "backgroundJa": "メサ・ヴェルデはコロラド州にある国立公園で、先住民プエブロ族の祖先が断崖の窪みに築いた集合住宅のような住居跡が数多く残されています。",
    "historyJa": "これらの住居は12世紀から13世紀頃に築かれたとされ、北米の先住民文化の高度な建築技術や生活の様子を伝える貴重な遺跡として、1978年に世界文化遺産に登録されました。",
    "episodeJa": "なぜ人々がこの地を離れたのかについては気候変動や水資源の問題など複数の説があり、現在も研究が続けられています。"
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
    "summaryJa": "アーネスト・ヘミングウェイは1954年にノーベル文学賞を受賞したアメリカの作家です。",
    "detailJa": "アーネスト・ヘミングウェイは1954年にノーベル文学賞を受賞したアメリカの作家です。 アーネスト・ヘミングウェイは、簡潔で力強い文体を特徴とするアメリカの作家で、第一次世界大戦やスペイン内戦に従軍記者として関わった経験が、多くの作品に影響を与えました。",
    "keyPointsJa": [
      "1954年にノーベル文学賞を受賞",
      "代表作に「老人と海」がある",
      "簡潔で力強い文体で知られる",
      "従軍記者としての経験も作品に影響を与えた"
    ],
    "backgroundJa": "アーネスト・ヘミングウェイは、簡潔で力強い文体を特徴とするアメリカの作家で、第一次世界大戦やスペイン内戦に従軍記者として関わった経験が、多くの作品に影響を与えました。",
    "historyJa": "代表作「老人と海」は、年老いた漁師と大魚との闘いを描いた中編小説で、1953年にピューリツァー賞を、翌1954年にはノーベル文学賞を受賞するきっかけとなりました。",
    "episodeJa": "ヘミングウェイの文体は「ハードボイルド」と呼ばれる簡潔で無駄のない表現の代表例とされ、後世の多くの作家に影響を与えました。"
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
    "summaryJa": "デナリはアラスカ州にある、北米大陸で最も高い山です。",
    "detailJa": "デナリはアラスカ州にある、北米大陸で最も高い山です。 デナリはアラスカ州にある標高約6190メートルの山で、北米大陸で最も高い山として知られています。「デナリ」とは先住民の言葉で「高いもの」を意味します。",
    "keyPointsJa": [
      "標高約6190メートルで北米最高峰",
      "アラスカ州にある",
      "先住民の言葉で「高いもの」を意味する",
      "以前は「マッキンリー山」と呼ばれていた"
    ],
    "backgroundJa": "デナリはアラスカ州にある標高約6190メートルの山で、北米大陸で最も高い山として知られています。「デナリ」とは先住民の言葉で「高いもの」を意味します。",
    "historyJa": "この山は長らく第25代アメリカ大統領にちなんで「マッキンリー山」と呼ばれていましたが、2015年に先住民の呼び名であった「デナリ」へと正式に名称が変更されました。",
    "episodeJa": "極寒の気候と高い標高から、登山の難易度が非常に高い山として知られ、世界中の登山家から「セブンサミット」の一つとして挑戦の対象とされています。"
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
    "summaryJa": "ゴールデンゲートブリッジは、サンフランシスコ湾の入り口にかかる赤橙色の吊り橋です。",
    "detailJa": "ゴールデンゲートブリッジは、サンフランシスコ湾の入り口にかかる赤橙色の吊り橋です。 ゴールデンゲートブリッジは、カリフォルニア州サンフランシスコ湾の入り口にかかる吊り橋で、1937年に完成しました。",
    "keyPointsJa": [
      "1937年に完成",
      "サンフランシスコのシンボルとされる",
      "橙色は「インターナショナル・オレンジ」と呼ばれる",
      "完成当時は世界最長の吊り橋だった"
    ],
    "backgroundJa": "ゴールデンゲートブリッジは、カリフォルニア州サンフランシスコ湾の入り口にかかる吊り橋で、1937年に完成しました。",
    "historyJa": "完成当時は世界最長の吊り橋であり、橋の色である「インターナショナル・オレンジ」という独特の橙色は、海上の視認性を高めるために選ばれたとされています。",
    "episodeJa": "現在もサンフランシスコを象徴する建造物として、多くの観光客や写真愛好家が訪れる名所となっています。"
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
    "summaryJa": "アラスカ購入は、1867年にアメリカがロシアから領土を購入した出来事です。",
    "detailJa": "アラスカ購入は、1867年にアメリカがロシアから領土を購入した出来事です。 アラスカ購入は、1867年にアメリカがロシア帝国から、現在のアラスカ州にあたる広大な土地を720万ドルで購入した出来事です。",
    "keyPointsJa": [
      "1867年に実施された",
      "ロシア帝国から購入した",
      "購入価格は720万ドルだった",
      "当時は「冷蔵庫の購入」と揶揄された"
    ],
    "backgroundJa": "アラスカ購入は、1867年にアメリカがロシア帝国から、現在のアラスカ州にあたる広大な土地を720万ドルで購入した出来事です。",
    "historyJa": "当時、アラスカは利用価値が低いと考えられており、この取引は「冷蔵庫を買うようなものだ」と揶揄されることもありました。",
    "episodeJa": "しかし後にアラスカでは金や石油などの豊かな資源が発見され、現在ではアメリカにとって戦略的・経済的に重要な州となっています。"
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
    "summaryJa": "ルイス・クラーク探検隊は、1804年から1806年にかけてアメリカ西部を探査した遠征隊です。",
    "detailJa": "ルイス・クラーク探検隊は、1804年から1806年にかけてアメリカ西部を探査した遠征隊です。 ルイス・クラーク探検隊は、トーマス・ジェファーソン大統領の指示により、メリウェザー・ルイスとウィリアム・クラークが率いて行われたアメリカ西部の探査遠征です。",
    "keyPointsJa": [
      "1804年から1806年にかけて実施された",
      "メリウェザー・ルイスとウィリアム・クラークが率いた",
      "ルイジアナ買収で得た領土の調査が目的の一つ",
      "太平洋まで陸路で到達した"
    ],
    "backgroundJa": "ルイス・クラーク探検隊は、トーマス・ジェファーソン大統領の指示により、メリウェザー・ルイスとウィリアム・クラークが率いて行われたアメリカ西部の探査遠征です。",
    "historyJa": "1804年から1806年にかけて、ルイジアナ買収によって新たに得た広大な領土の地理や動植物、先住民の生活などを調査しながら、太平洋岸まで陸路で到達することに成功しました。",
    "episodeJa": "先住民女性サカガウィアの案内や協力が探検の成功に大きく貢献したことも知られており、この遠征はアメリカの西部開拓の出発点として歴史的に重要視されています。"
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
    "summaryJa": "サンアントニオ・ミッションズは、テキサス州にある18世紀のスペイン伝道施設群です。",
    "detailJa": "サンアントニオ・ミッションズは、テキサス州にある18世紀のスペイン伝道施設群です。 サンアントニオ・ミッションズは、18世紀にスペインがテキサス州サンアントニオに建てたカトリックの伝道施設（ミッション）群で、先住民への布教と定住化を目的としていました。",
    "keyPointsJa": [
      "テキサス州サンアントニオにある",
      "18世紀にスペインが建てた伝道施設群",
      "2015年に世界文化遺産に登録された",
      "アラモ伝道院もこの一群に含まれる"
    ],
    "backgroundJa": "サンアントニオ・ミッションズは、18世紀にスペインがテキサス州サンアントニオに建てたカトリックの伝道施設（ミッション）群で、先住民への布教と定住化を目的としていました。",
    "historyJa": "この一群には、テキサス独立戦争の舞台として知られる「アラモ伝道院」も含まれており、宗教と歴史の両面で重要な意味を持つ史跡となっています。",
    "episodeJa": "2015年に世界文化遺産に登録され、スペイン統治時代の建築や文化が北米に残された貴重な例として評価されています。"
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
    "summaryJa": "ビール・ストリートは、テネシー州メンフィスにある、ブルース音楽発展の中心地として知られる通りです。",
    "detailJa": "ビール・ストリートは、テネシー州メンフィスにある、ブルース音楽発展の中心地として知られる通りです。 ビール・ストリートはテネシー州メンフィスにある通りで、20世紀初頭からアフリカ系アメリカ人の音楽文化が花開いた場所として知られています。",
    "keyPointsJa": [
      "テネシー州メンフィスにある通り",
      "ブルース音楽が発展した中心地とされる",
      "W.C.ハンディの活動でも知られる",
      "現在も多くのライブハウスが軒を連ねる"
    ],
    "backgroundJa": "ビール・ストリートはテネシー州メンフィスにある通りで、20世紀初頭からアフリカ系アメリカ人の音楽文化が花開いた場所として知られています。",
    "historyJa": "「ブルースの父」と呼ばれる作曲家W.C.ハンディがこの地で活動し、ブルース音楽の発展に大きな役割を果たしたことで知られています。",
    "episodeJa": "現在もビール・ストリートには多くのライブハウスやクラブが軒を連ね、ブルースをはじめとする音楽文化を体感できる観光地として人気を集めています。"
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
    "summaryJa": "ボイジャー1号は1977年に打ち上げられ、太陽系を越えて飛行を続けるNASAの探査機です。",
    "detailJa": "ボイジャー1号は1977年に打ち上げられ、太陽系を越えて飛行を続けるNASAの探査機です。 ボイジャー1号は1977年にNASAが打ち上げた無人探査機で、木星や土星をはじめとする太陽系外縁の天体を観測してきました。",
    "keyPointsJa": [
      "1977年に打ち上げられた",
      "木星・土星などを観測した",
      "太陽系の外側に到達した人工物とされる",
      "「ペイル・ブルー・ドット」という地球の写真を撮影した"
    ],
    "backgroundJa": "ボイジャー1号は1977年にNASAが打ち上げた無人探査機で、木星や土星をはじめとする太陽系外縁の天体を観測してきました。",
    "historyJa": "1990年、地球から約60億キロメートル離れた地点から地球を撮影し、その姿が小さな点のように写ったことから「ペイル・ブルー・ドット（淡い青色の点）」と呼ばれる有名な写真が生まれました。",
    "episodeJa": "ボイジャー1号は現在も太陽系の外側を飛行し続けており、人類が作った人工物として最も遠くまで到達している探査機として知られています。"
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
    "summaryJa": "GPSは、アメリカが運用する人工衛星を利用した位置情報システムで、3つの要素から構成されます。",
    "detailJa": "GPSは、アメリカが運用する人工衛星を利用した位置情報システムで、3つの要素から構成されます。 GPS（全地球位置情報システム）は、アメリカが運用する衛星を利用した位置情報システムで、「宇宙部分（衛星群）」「制御部分（地上の管理施設）」「利用者部分（受信機）」という3つの要素から構成されています。",
    "keyPointsJa": [
      "宇宙部分（衛星群）・制御部分・利用者部分の3要素で構成",
      "もともとは軍事目的で開発された",
      "複数の衛星からの信号で位置を計算する",
      "現在はカーナビやスマートフォンなど広く利用される"
    ],
    "backgroundJa": "GPS（全地球位置情報システム）は、アメリカが運用する衛星を利用した位置情報システムで、「宇宙部分（衛星群）」「制御部分（地上の管理施設）」「利用者部分（受信機）」という3つの要素から構成されています。",
    "historyJa": "もともとは軍事目的で開発されたシステムですが、1980年代以降民間にも利用が開放され、現在ではカーナビやスマートフォンの位置情報機能など、私たちの生活に広く活用されています。",
    "episodeJa": "受信機は複数の衛星からの信号を受け取り、信号が届くまでの時間差を計算することで、現在の位置を正確に特定する仕組みになっています。"
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
    "summaryJa": "ブルックリン橋は、1883年に完成したニューヨークのマンハッタンとブルックリンを結ぶ吊り橋です。",
    "detailJa": "ブルックリン橋は、1883年に完成したニューヨークのマンハッタンとブルックリンを結ぶ吊り橋です。 ブルックリン橋は、ニューヨーク市のマンハッタン地区とブルックリン地区を結ぶ吊り橋で、1883年に完成しました。",
    "keyPointsJa": [
      "1883年に完成",
      "マンハッタンとブルックリンを結ぶ",
      "完成当時は世界最長の吊り橋だった",
      "設計者ジョン・ローブリングの死後に工事が完成した"
    ],
    "backgroundJa": "ブルックリン橋は、ニューヨーク市のマンハッタン地区とブルックリン地区を結ぶ吊り橋で、1883年に完成しました。",
    "historyJa": "設計者のジョン・ローブリングは工事中に事故で亡くなり、息子のワシントン・ローブリングが工事を引き継いで完成させました。完成当時は世界最長の吊り橋として注目を集めました。",
    "episodeJa": "現在もニューヨークを象徴する建造物の一つとして、歩道や自転車道を通る多くの市民や観光客に利用されています。"
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
    "summaryJa": "アメリカでは時刻を12時間制で表し、正午と正午より前か後かを「AM」「PM」で示します。",
    "detailJa": "アメリカでは時刻を12時間制で表し、正午と正午より前か後かを「AM」「PM」で示します。 アメリカでは日常的に12時間制の時刻表記が使われ、正午より前の時間帯を「AM」、後の時間帯を「PM」として区別します。",
    "keyPointsJa": [
      "12時間制で時刻を表す",
      "正午より前は「AM」、後は「PM」と表記する",
      "正午は「12:00 PM」、深夜0時は「12:00 AM」と表記する",
      "24時間制とは表記の仕組みが異なる"
    ],
    "backgroundJa": "アメリカでは日常的に12時間制の時刻表記が使われ、正午より前の時間帯を「AM」、後の時間帯を「PM」として区別します。",
    "historyJa": "この表記では、正午は「12:00 PM」、深夜0時（午前0時）は「12:00 AM」と表記するというルールがあり、24時間制（0時から23時で表す方式）とは数値と意味の対応が異なります。",
    "episodeJa": "12時間制と24時間制の間で時刻を変換するプログラムを作る場合、12時という境界の時刻をAM/PMのどちらにするかを正しく扱う必要があり、間違いやすいポイントとして知られています。"
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
    "summaryJa": "アメリカでは温度を表す単位として、摂氏ではなく華氏が日常的に使われます。",
    "detailJa": "アメリカでは温度を表す単位として、摂氏ではなく華氏が日常的に使われます。 アメリカでは日常的に温度を「華氏（°F）」という単位で表すのが一般的で、これは多くの国で使われている「摂氏（°C）」とは異なる尺度です。",
    "keyPointsJa": [
      "水の凍る温度は華氏32度",
      "水の沸騰する温度は華氏212度",
      "摂氏から華氏への変換には決まった計算式がある",
      "日常生活の気温表現では華氏が主流"
    ],
    "backgroundJa": "アメリカでは日常的に温度を「華氏（°F）」という単位で表すのが一般的で、これは多くの国で使われている「摂氏（°C）」とは異なる尺度です。",
    "historyJa": "華氏では水が凍る温度が32度、沸騰する温度が212度と定められており、摂氏（それぞれ0度・100度）とは数値の基準が異なります。",
    "episodeJa": "摂氏から華氏に変換するには「華氏 = 摂氏 × 9/5 + 32」という計算式が使われ、国際的な気温データを扱うシステムでは、この単位の違いに注意して変換処理を行う必要があります。"
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
    "summaryJa": "USPSの住所表記では、アパートや部屋番号などを示す「セカンダリーアドレス」が使われます。",
    "detailJa": "USPSの住所表記では、アパートや部屋番号などを示す「セカンダリーアドレス」が使われます。 アメリカの住所表記では、同じ建物内に複数の部屋や事務所がある場合、番地に続けて「Apt（アパートメント）」「Suite（スイート）」「Unit（ユニット）」などの略語と番号を追記する「セカンダリーアドレス」が使われます。",
    "keyPointsJa": [
      "番地の後に部屋番号などを追記する形式",
      "「Apt」「Suite」「Unit」などの略語が使われる",
      "同じ建物内の複数の住所を区別するために必要",
      "省略すると配達に支障が出ることがある"
    ],
    "backgroundJa": "アメリカの住所表記では、同じ建物内に複数の部屋や事務所がある場合、番地に続けて「Apt（アパートメント）」「Suite（スイート）」「Unit（ユニット）」などの略語と番号を追記する「セカンダリーアドレス」が使われます。",
    "historyJa": "これはアパートやオフィスビルなど、一つの建物番地に多数の住居・事務所が存在する状況に対応するための仕組みです。",
    "episodeJa": "この情報が省略されたり誤って記載されたりすると、郵便物が正しい部屋に届かない原因となるため、住所データを扱うシステムでは番地情報とセカンダリーアドレスを区別して保存することが推奨されます。"
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
    "summaryJa": "ZIP+4は、通常の5桁のZIPコードに4桁を追加して、より詳細な地域を特定する形式です。",
    "detailJa": "ZIP+4は、通常の5桁のZIPコードに4桁を追加して、より詳細な地域を特定する形式です。 ZIP+4は、通常の5桁のZIPコードに、ハイフンと4桁の追加コードを組み合わせた形式（例：12345-6789）で、より細かい配達区域を特定するために使われます。",
    "keyPointsJa": [
      "5桁のZIPコードにハイフンと4桁を追加する形式",
      "より詳細な配達区域を特定できる",
      "形式は「12345-6789」のようになる",
      "正規表現によるパターンチェックがよく使われる"
    ],
    "backgroundJa": "ZIP+4は、通常の5桁のZIPコードに、ハイフンと4桁の追加コードを組み合わせた形式（例：12345-6789）で、より細かい配達区域を特定するために使われます。",
    "historyJa": "これにより、同じ5桁のZIPコード内であっても、特定の建物や配達ルートをより詳細に区別できるようになり、配達の効率化に役立てられています。",
    "episodeJa": "システムでこの形式の住所を検証する際は、5桁の数字、ハイフン、4桁の数字という構成が正しいかどうかを確認するために、正規表現によるパターンチェックがよく使われます。"
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
    "summaryJa": "アメリカは50の州に加えて、特別区であるワシントンD.C.と複数の準州から構成されています。",
    "detailJa": "アメリカは50の州に加えて、特別区であるワシントンD.C.と複数の準州から構成されています。 アメリカ合衆国は50の州に加えて、首都が置かれているワシントンD.C.（コロンビア特別区）、そしてプエルトリコやグアムなどの準州（テリトリー）から構成されています。",
    "keyPointsJa": [
      "50の州が存在する",
      "首都ワシントンD.C.はどの州にも属さない特別区",
      "プエルトリコなど複数の準州（テリトリー）がある",
      "準州の住民は連邦議会への投票権が制限される場合がある"
    ],
    "backgroundJa": "アメリカ合衆国は50の州に加えて、首都が置かれているワシントンD.C.（コロンビア特別区）、そしてプエルトリコやグアムなどの準州（テリトリー）から構成されています。",
    "historyJa": "ワシントンD.C.はどの州にも属さない特別な行政区として設置され、準州は州とは異なる地位を持つ地域で、住民の権利（連邦議会への投票権など）が州とは異なる場合があります。",
    "episodeJa": "こうした行政区分の違いを正しく理解することは、アメリカの住所や行政データを扱うシステムを設計する際にも重要なポイントとなります。"
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
    "summaryJa": "権利章典は、1791年に追加されたアメリカ合衆国憲法修正第1条から第10条までの条項です。",
    "detailJa": "権利章典は、1791年に追加されたアメリカ合衆国憲法修正第1条から第10条までの条項です。 権利章典は、1791年に発効したアメリカ合衆国憲法修正第1条から第10条までの条項を指し、言論・宗教・集会の自由といった基本的な権利を保障する内容が含まれています。",
    "keyPointsJa": [
      "1791年に発効した憲法修正第1条から第10条",
      "言論・宗教の自由などの基本的人権を保障する",
      "武器を保有する権利についても定める",
      "アメリカの人権保障の基礎とされる"
    ],
    "backgroundJa": "権利章典は、1791年に発効したアメリカ合衆国憲法修正第1条から第10条までの条項を指し、言論・宗教・集会の自由といった基本的な権利を保障する内容が含まれています。",
    "historyJa": "合衆国憲法が制定された当初、個人の権利保障に関する規定が不十分だという批判があったことから、追加の修正条項として権利章典が定められました。",
    "episodeJa": "現在もアメリカの裁判や政治の議論において、権利章典の解釈はしばしば重要な論点となり、アメリカ社会の人権保障の基礎として位置づけられています。"
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
    "summaryJa": "トニ・モリスンは1993年にノーベル文学賞を受賞したアメリカの作家です。",
    "detailJa": "トニ・モリスンは1993年にノーベル文学賞を受賞したアメリカの作家です。 トニ・モリスンは、アフリカ系アメリカ人の歴史や経験を題材にした作品を多く手がけたアメリカの作家です。",
    "keyPointsJa": [
      "1993年にノーベル文学賞を受賞",
      "アフリカ系アメリカ人女性として初の受賞",
      "代表作に「ビラブド」がある",
      "アフリカ系アメリカ人の歴史や経験を描いた"
    ],
    "backgroundJa": "トニ・モリスンは、アフリカ系アメリカ人の歴史や経験を題材にした作品を多く手がけたアメリカの作家です。",
    "historyJa": "1993年にノーベル文学賞を受賞し、アフリカ系アメリカ人女性として初めての受賞者となりました。代表作「ビラブド（Beloved）」は奴隷制の歴史を背景にした作品として高く評価されています。",
    "episodeJa": "モリスンの作品は、アメリカの歴史の中であまり語られてこなかった人々の経験を文学として描き出した点で、世界的に重要な評価を受けています。"
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
    "summaryJa": "アメリカ合衆国の国璽には、「多数からなる一つ」を意味するラテン語の標語が刻まれています。",
    "detailJa": "アメリカ合衆国の国璽には、「多数からなる一つ」を意味するラテン語の標語が刻まれています。 アメリカ合衆国の国璽（国の正式な印章）は1782年に制定され、ハクトウワシの図柄とともに、ラテン語で「E Pluribus Unum（多数からなる一つ）」という標語が刻まれています。",
    "keyPointsJa": [
      "国の正式な文書に使われる印章",
      "「E Pluribus Unum（多数からなる一つ）」という標語が刻まれている",
      "ハクトウワシの図柄も含まれる",
      "1782年に制定された"
    ],
    "backgroundJa": "アメリカ合衆国の国璽（国の正式な印章）は1782年に制定され、ハクトウワシの図柄とともに、ラテン語で「E Pluribus Unum（多数からなる一つ）」という標語が刻まれています。",
    "historyJa": "この標語は、独立当時の13の植民地が一つの国家としてまとまったことを表すもので、後に多様な人々や州から成る一つの国家という意味でも広く理解されるようになりました。",
    "episodeJa": "国璽は条約や公式文書に押される印章として使われ、アメリカという国の成り立ちを象徴する重要なシンボルとなっています。"
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
    "summaryJa": "エバーグレーズはフロリダ州南部に広がる、世界最大級の湿地生態系です。",
    "detailJa": "エバーグレーズはフロリダ州南部に広がる、世界最大級の湿地生態系です。 エバーグレーズはフロリダ州南部に広がる広大な湿地帯で、世界でも有数の規模を持つ亜熱帯の湿地生態系として知られています。",
    "keyPointsJa": [
      "フロリダ州南部に位置する",
      "世界最大級の亜熱帯湿地生態系",
      "1979年に世界自然遺産に登録された",
      "ワニなど多様な野生動物の生息地"
    ],
    "backgroundJa": "エバーグレーズはフロリダ州南部に広がる広大な湿地帯で、世界でも有数の規模を持つ亜熱帯の湿地生態系として知られています。",
    "historyJa": "ゆっくりと流れる浅い水の中に草原や森林が広がる独特の景観を持ち、アメリカアリゲーターをはじめ多様な野生動物が生息しています。1979年に世界自然遺産に登録されました。",
    "episodeJa": "20世紀以降、開発や水利用の影響で湿地の面積が減少したことが問題となり、現在は生態系の保護と再生に向けた取り組みが進められています。"
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
    "summaryJa": "ハッブル宇宙望遠鏡は、1990年に打ち上げられたNASAの宇宙望遠鏡です。",
    "detailJa": "ハッブル宇宙望遠鏡は、1990年に打ち上げられたNASAの宇宙望遠鏡です。 ハッブル宇宙望遠鏡は1990年にスペースシャトルによって打ち上げられた宇宙望遠鏡で、地球の大気の影響を受けずに天体を観測できる点が大きな特徴です。",
    "keyPointsJa": [
      "1990年に打ち上げられた",
      "地球の大気の影響を受けずに観測できる",
      "宇宙の膨張速度の精密な測定に貢献した",
      "複数回の修理・改修ミッションが行われた"
    ],
    "backgroundJa": "ハッブル宇宙望遠鏡は1990年にスペースシャトルによって打ち上げられた宇宙望遠鏡で、地球の大気の影響を受けずに天体を観測できる点が大きな特徴です。",
    "historyJa": "打ち上げ直後にレンズの欠陥が見つかりましたが、1993年の修理ミッションで補正装置が取り付けられ、その後も複数回の修理・改修を経て、長期間にわたり観測を続けてきました。",
    "episodeJa": "ハッブルが撮影した数多くの天体写真は、宇宙の膨張速度の精密な測定や、はるか遠くの銀河の発見など、現代天文学の発展に大きく貢献しています。"
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
    "summaryJa": "州間高速道路システムは、1956年から整備が進められたアメリカ全土を結ぶ高速道路網です。",
    "detailJa": "州間高速道路システムは、1956年から整備が進められたアメリカ全土を結ぶ高速道路網です。 州間高速道路システムは、1956年に成立した連邦補助高速道路法に基づき、アイゼンハワー大統領のもとで整備が進められたアメリカ全土を結ぶ高速道路網です。",
    "keyPointsJa": [
      "1956年の連邦補助高速道路法により整備が始まった",
      "アイゼンハワー大統領のもとで推進された",
      "番号の付け方に一定のルールがある",
      "全長は約7万7000km以上に及ぶ"
    ],
    "backgroundJa": "州間高速道路システムは、1956年に成立した連邦補助高速道路法に基づき、アイゼンハワー大統領のもとで整備が進められたアメリカ全土を結ぶ高速道路網です。",
    "historyJa": "道路の番号には一定のルールがあり、東西方向の道路には偶数、南北方向の道路には奇数の番号が付けられるなど、利用者が方向を把握しやすい工夫がされています。",
    "episodeJa": "現在の総延長は約7万7000キロメートル以上に及び、人や物資の移動を支えるアメリカの経済活動の基盤となっています。"
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
    "summaryJa": "アメリカの連邦祝日が土曜・日曜にあたる場合、別の平日に振り替えて祝う規則があります。",
    "detailJa": "アメリカの連邦祝日が土曜・日曜にあたる場合、別の平日に振り替えて祝う規則があります。 アメリカの連邦祝日が土曜日にあたる場合は前の金曜日に、日曜日にあたる場合は次の月曜日に休日を振り替えるという規則があります。",
    "keyPointsJa": [
      "土曜にあたる祝日は前の金曜に振り替える",
      "日曜にあたる祝日は次の月曜に振り替える",
      "官公庁や多くの企業がこの規則に従う",
      "実際の記念日と休日が異なる日になることがある"
    ],
    "backgroundJa": "アメリカの連邦祝日が土曜日にあたる場合は前の金曜日に、日曜日にあたる場合は次の月曜日に休日を振り替えるという規則があります。",
    "historyJa": "これにより官公庁や多くの企業では、実際の記念日（祝日の本来の日付）とは異なる日に休業日が設定されることがあります。",
    "episodeJa": "祝日カレンダーを扱うシステムでは、本来の日付と、実際に休業日として扱われる振替後の日付の両方を区別して管理する必要があります。"
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
    "summaryJa": "アメリカでは距離の単位として、メートルではなくマイルやフィートが日常的に使われます。",
    "detailJa": "アメリカでは距離の単位として、メートルではなくマイルやフィートが日常的に使われます。 アメリカでは距離を表す単位として、国際的に広く使われる「メートル法」ではなく、「マイル」や「フィート」といったヤード・ポンド法の単位が日常生活で使われています。",
    "keyPointsJa": [
      "1マイルは約1609メートル",
      "1フィートは約30.48センチメートル",
      "道路標識や身長表記などで使われる",
      "メートル法とは換算が必要"
    ],
    "backgroundJa": "アメリカでは距離を表す単位として、国際的に広く使われる「メートル法」ではなく、「マイル」や「フィート」といったヤード・ポンド法の単位が日常生活で使われています。",
    "historyJa": "1マイルは約1609メートル、1フィートは約30.48センチメートルに相当し、道路標識の距離表示や、人の身長を「5フィート10インチ」のように表す場面などで使われます。",
    "episodeJa": "国際的なデータやシステムを扱う際は、メートル法とヤード・ポンド法の単位換算を正しく行う必要があり、変換ミスは実用上のトラブルにつながることもあります。"
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
    "summaryJa": "アメリカドルは1ドルが100セントに相当する、十進法に基づいた貨幣制度です。",
    "detailJa": "アメリカドルは1ドルが100セントに相当する、十進法に基づいた貨幣制度です。 アメリカドルは1ドルが100セントに相当する、十進法に基づいた分かりやすい貨幣制度を採用しています。",
    "keyPointsJa": [
      "1ドル＝100セントという十進法の制度",
      "金額はドルとセントの2つの単位で表される",
      "小数点を使って「$1.50」のように表記する",
      "計算誤差を防ぐための処理が必要になる"
    ],
    "backgroundJa": "アメリカドルは1ドルが100セントに相当する、十進法に基づいた分かりやすい貨幣制度を採用しています。",
    "historyJa": "金額は「$1.50」のように、ドルを整数部分、セントを小数点以下2桁で表すのが一般的です。",
    "episodeJa": "プログラムで金額を扱う際、小数を用いた計算では誤差が生じることがあるため、金額をセント単位の整数として内部で扱うなど、誤差を防ぐ工夫がよく用いられます。"
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
    "summaryJa": "マーティン・ルーサー・キング牧師は、1964年にノーベル平和賞を受賞した公民権運動の指導者です。",
    "detailJa": "マーティン・ルーサー・キング牧師は、1964年にノーベル平和賞を受賞した公民権運動の指導者です。 マーティン・ルーサー・キング牧師は、1950年代から60年代にかけてアメリカで展開された公民権運動の中心的な指導者として知られています。",
    "keyPointsJa": [
      "1964年にノーベル平和賞を受賞",
      "アフリカ系アメリカ人の公民権運動を主導した",
      "「I Have a Dream」の演説が有名",
      "非暴力的な抗議活動を訴えた"
    ],
    "backgroundJa": "マーティン・ルーサー・キング牧師は、1950年代から60年代にかけてアメリカで展開された公民権運動の中心的な指導者として知られています。",
    "historyJa": "1963年に行われたワシントン大行進での「I Have a Dream（私には夢がある）」という演説は、人種を超えた平等な社会を訴えるものとして広く知られています。",
    "episodeJa": "非暴力的な方法で人種差別の撤廃を訴え続けたこうした活動が評価され、1964年にノーベル平和賞を受賞しました。彼の誕生日にちなんだ1月の第3月曜日は、現在アメリカの連邦祝日となっています。"
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
    "summaryJa": "アメリカ合衆国憲法修正第1条は、言論・宗教・出版・集会・請願の自由を保障する条項です。",
    "detailJa": "アメリカ合衆国憲法修正第1条は、言論・宗教・出版・集会・請願の自由を保障する条項です。 アメリカ合衆国憲法修正第1条は、権利章典の最初の条項として、言論、出版、宗教、集会、そして政府に請願する権利の自由を保障しています。",
    "keyPointsJa": [
      "権利章典の最初の条項",
      "言論の自由を保障する",
      "宗教の自由（国教を定めない原則）を保障する",
      "出版・集会・請願の自由も含まれる"
    ],
    "backgroundJa": "アメリカ合衆国憲法修正第1条は、権利章典の最初の条項として、言論、出版、宗教、集会、そして政府に請願する権利の自由を保障しています。",
    "historyJa": "この条項は、政府が特定の宗教を国教として定めることを禁じるとともに、個人が自由に意見を表明し、メディアが報道できる権利の基礎となっています。",
    "episodeJa": "現在もインターネット上の表現や報道の自由をめぐる議論において、この修正第1条の解釈がしばしば重要な論点として扱われています。"
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
    "summaryJa": "ラシュモア山には、4人の歴代アメリカ大統領の顔が彫られた巨大な彫刻があります。",
    "detailJa": "ラシュモア山には、4人の歴代アメリカ大統領の顔が彫られた巨大な彫刻があります。 ラシュモア山はサウスダコタ州にある山で、ジョージ・ワシントン、トーマス・ジェファーソン、セオドア・ルーズベルト、エイブラハム・リンカーンという4人の大統領の顔が、巨大な彫刻として山肌に彫られています。",
    "keyPointsJa": [
      "サウスダコタ州にある彫刻記念碑",
      "ワシントン・ジェファーソン・セオドア・ルーズベルト・リンカーンの顔が彫られている",
      "完成までに14年を要した",
      "彫刻家ガットソン・ボーグラムが手がけた"
    ],
    "backgroundJa": "ラシュモア山はサウスダコタ州にある山で、ジョージ・ワシントン、トーマス・ジェファーソン、セオドア・ルーズベルト、エイブラハム・リンカーンという4人の大統領の顔が、巨大な彫刻として山肌に彫られています。",
    "historyJa": "彫刻家ガットソン・ボーグラムの設計のもと、1927年から1941年まで14年にわたる工事を経て完成しました。",
    "episodeJa": "それぞれの大統領は、アメリカの建国・発展・拡張・統一という異なる時代の重要な役割を象徴する人物として選ばれており、現在も国を代表する記念碑として多くの観光客を集めています。"
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
    "summaryJa": "チャコ文化は、ニューメキシコ州に残る先住民プエブロ族の古代遺跡群です。",
    "detailJa": "チャコ文化は、ニューメキシコ州に残る先住民プエブロ族の古代遺跡群です。 チャコ文化は、ニューメキシコ州のチャコ・キャニオンを中心に9世紀から12世紀頃にかけて栄えた、先住民プエブロ族の祖先による高度な文化です。",
    "keyPointsJa": [
      "ニューメキシコ州チャコ・キャニオンにある",
      "9世紀から12世紀頃に栄えた先住民文化",
      "高度な天文学的知識を反映した建築が見られる",
      "1987年に世界文化遺産に登録された"
    ],
    "backgroundJa": "チャコ文化は、ニューメキシコ州のチャコ・キャニオンを中心に9世紀から12世紀頃にかけて栄えた、先住民プエブロ族の祖先による高度な文化です。",
    "historyJa": "残された建造物には、太陽や月の動きに合わせて設計されたと考えられる構造が見られ、当時の人々が高度な天文学的知識を持っていたことがうかがえます。",
    "episodeJa": "1987年に世界文化遺産に登録され、北米先住民の社会組織や建築技術の高さを示す重要な遺跡として研究が続けられています。"
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
    "summaryJa": "エリー運河は、1825年に完成した、五大湖と大西洋を結ぶニューヨーク州の運河です。",
    "detailJa": "エリー運河は、1825年に完成した、五大湖と大西洋を結ぶニューヨーク州の運河です。 エリー運河は、ニューヨーク州を通って、五大湖の一つであるエリー湖とハドソン川を結ぶ運河で、1825年に完成しました。",
    "keyPointsJa": [
      "1825年に完成",
      "五大湖とハドソン川・大西洋を結ぶ",
      "全長は約580km",
      "アメリカ中西部の経済発展を後押しした"
    ],
    "backgroundJa": "エリー運河は、ニューヨーク州を通って、五大湖の一つであるエリー湖とハドソン川を結ぶ運河で、1825年に完成しました。",
    "historyJa": "この運河によって、内陸の五大湖周辺地域から大西洋岸のニューヨーク港まで、船で物資を輸送できるようになり、アメリカ中西部の農業や商業の発展を大きく後押ししました。",
    "episodeJa": "完成当時は驚異的な土木事業とされ、その後の鉄道網の発展前において、アメリカの経済成長を支える重要な交通路として機能しました。"
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
    "summaryJa": "ARPANETは、1969年に世界初の通信が行われた、インターネットの起源となったネットワークです。",
    "detailJa": "ARPANETは、1969年に世界初の通信が行われた、インターネットの起源となったネットワークです。 ARPANETは、アメリカ国防省の高等研究計画局（ARPA）が開発した、コンピュータ同士を接続するネットワークで、1969年にカリフォルニア大学ロサンゼルス校とスタンフォード研究所の間で最初の通信が行われました。",
    "keyPointsJa": [
      "1969年に最初の通信が行われた",
      "アメリカ国防省の研究機関ARPAが開発",
      "カリフォルニア大学ロサンゼルス校とスタンフォード研究所を接続した",
      "現在のインターネットの原型とされる"
    ],
    "backgroundJa": "ARPANETは、アメリカ国防省の高等研究計画局（ARPA）が開発した、コンピュータ同士を接続するネットワークで、1969年にカリフォルニア大学ロサンゼルス校とスタンフォード研究所の間で最初の通信が行われました。",
    "historyJa": "このネットワークは、複数のコンピュータが分散して情報をやり取りできる仕組みを実証するもので、後に世界中に広がるインターネットの直接の起源となりました。",
    "episodeJa": "最初の通信では「LOGIN」という単語を送信しようとしましたが、システムがクラッシュし「LO」までしか送信できなかったという逸話が残されています。"
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
    "summaryJa": "アメリカ連邦政府の会計年度は、10月1日に始まり翌年9月30日に終わります。",
    "detailJa": "アメリカ連邦政府の会計年度は、10月1日に始まり翌年9月30日に終わります。 アメリカ連邦政府の会計年度は10月1日に始まり、翌年の9月30日に終わるという仕組みになっています。これは日本の多くの企業や行政機関が採用する4月始まりの会計年度とは異なる時期です。",
    "keyPointsJa": [
      "10月1日から翌年9月30日までが1会計年度",
      "日本の4月始まりの会計年度とは時期が異なる",
      "予算編成や財政報告の基準となる",
      "1976年にこの制度が導入された"
    ],
    "backgroundJa": "アメリカ連邦政府の会計年度は10月1日に始まり、翌年の9月30日に終わるという仕組みになっています。これは日本の多くの企業や行政機関が採用する4月始まりの会計年度とは異なる時期です。",
    "historyJa": "この10月始まりの制度は1976年に導入されたもので、それ以前は7月始まりの会計年度が使われていました。",
    "episodeJa": "国際的なシステムで日付や予算データを扱う際は、こうした会計年度の開始時期の違いに注意して処理する必要があります。"
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
    "summaryJa": "ハワイの地名や言葉には、発音上重要な「オキナ」や「カハコー」という記号が使われます。",
    "detailJa": "ハワイの地名や言葉には、発音上重要な「オキナ」や「カハコー」という記号が使われます。 ハワイ語には、発音上重要な「オキナ（ʻ）」という声門閉鎖音を示す記号と、「カハコー」と呼ばれる母音の上に引く長音記号があり、地名や言葉の正確な表記に欠かせません。",
    "keyPointsJa": [
      "「オキナ」は声門閉鎖音を示す記号",
      "「カハコー」は長母音を示す記号",
      "正しい表記にはUnicodeでの文字対応が必要",
      "記号を省略すると意味や発音が変わることがある"
    ],
    "backgroundJa": "ハワイ語には、発音上重要な「オキナ（ʻ）」という声門閉鎖音を示す記号と、「カハコー」と呼ばれる母音の上に引く長音記号があり、地名や言葉の正確な表記に欠かせません。",
    "historyJa": "これらの記号は通常のアルファベットとは異なる特殊な文字であるため、コンピュータ上で正しく表示するには、Unicodeという文字コードの規格で適切に対応している必要があります。",
    "episodeJa": "システムでハワイの地名を扱う際にこれらの記号を省略したり、誤った文字コードで処理すると、表記が不正確になったり、検索で正しく一致しなくなったりすることがあるため、文字の正規化に注意が必要です。"
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
