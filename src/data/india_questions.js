const SRC = {
  newDelhi: 'https://www.britannica.com/place/New-Delhi',
  independence: 'https://www.britannica.com/event/Indian-Independence-Act',
  constitution: 'https://www.britannica.com/topic/Constitution-of-India',
  states: 'https://www.britannica.com/place/India',
  ganges: 'https://www.britannica.com/place/Ganges-River',
  tajMahal: 'https://whc.unesco.org/en/list/252',
  qutbMinar: 'https://whc.unesco.org/en/list/233',
  jaipur: 'https://whc.unesco.org/en/list/1338',
  mumbai: 'https://www.britannica.com/place/Mumbai',
  iisc: 'https://www.britannica.com/topic/Indian-Institute-of-Science',
  railways: 'https://www.britannica.com/topic/Indian-Railways',
  tharDesert: 'https://www.britannica.com/place/Thar-Desert',
  ajanta: 'https://whc.unesco.org/en/list/242',
  classicalArts: 'https://www.britannica.com/art/Indian-dance',
  rupee: 'https://www.britannica.com/topic/rupee',
  postal: 'https://www.britannica.com/place/India',
  westernGhats: 'https://whc.unesco.org/en/list/1342',
  parliament: 'https://www.britannica.com/place/New-Delhi',
  chennai: 'https://www.britannica.com/place/Chennai',
  flag: 'https://www.britannica.com/topic/flag-of-India',
  transport: 'https://www.britannica.com/place/India',
  gatewayOfIndia: 'https://www.britannica.com/topic/Gateway-of-India',
  redFort: 'https://whc.unesco.org/en/list/231',
  ellora: 'https://whc.unesco.org/en/list/243',
  scienceInstitutions: 'https://www.britannica.com/topic/Indian-Space-Research-Organisation',
  yoga: 'https://www.britannica.com/topic/yoga',
  brahmaputra: 'https://www.britannica.com/place/Brahmaputra-River',
  nationalMuseum: 'https://www.britannica.com/place/New-Delhi',
  konark: 'https://whc.unesco.org/en/list/246',
  sundarbans: 'https://whc.unesco.org/en/list/452',
  ports: 'https://www.britannica.com/place/India',
  phone: 'https://www.britannica.com/place/India',
  delhiGurugram: 'https://www.britannica.com/place/Delhi',
  heritageLookup: 'https://whc.unesco.org/en/list/252',
  shivajiTerminus: 'https://whc.unesco.org/en/list/945',
  supremeCourt: 'https://www.britannica.com/topic/Supreme-Court-of-India',
  mountainRailways: 'https://whc.unesco.org/en/list/944',
  greatHimalayan: 'https://whc.unesco.org/en/list/1406',
  nalanda: 'https://whc.unesco.org/en/list/1502',
  ravan: 'https://www.nobelprize.org/prizes/physics/1930/raman/biographical/',
  timezone: 'https://www.timeanddate.com/time/zones/ist',
  isro: 'https://www.britannica.com/topic/Indian-Space-Research-Organisation',
  script: 'https://www.britannica.com/topic/Devanagari-alphabet',
  cricket: 'https://www.britannica.com/sports/cricket',
  raniKiVav: 'https://whc.unesco.org/en/list/922',
};

const conceptByLanguage = {
  python: {
    strings: 'variables',
    integers: 'variables',
    condition: 'conditions',
    list: 'lists',
    dictionary: 'dicts',
    function: 'functions',
    loop: 'loops',
  },
  javascript: {
    strings: 'variables',
    object: 'objects',
    array: 'arrays',
    switch: 'variables',
    loop: 'arrays',
    function: 'functions',
    class: 'objects',
  },
  java: {
    strings: 'strings',
    numbers: 'primitive-types',
    condition: 'conditionals',
    switch: 'switch',
    array: 'arrays',
    method: 'methods',
    collections: 'collections',
    class: 'classes',
    inheritance: 'inheritance',
  },
};

function conceptFor(spec) {
  return conceptByLanguage[spec.languageId]?.[spec.objective] || 'variables';
}

function sourceRef(url) {
  return [{ title: 'Reference source', organization: new URL(url).hostname, url }];
}

function factIdFromQuestion(questionId) {
  return `fact_${questionId}`;
}

function entityKey(title) {
  return `in:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

// 各題材の調査済み詳細（JPの country_facts.js と同水準の背景・歴史・エピソード）。
// id をキーに makeFact() がここから backgroundJa/historyJa/episodeJa/keyPointsJa を補う。
const FACT_DETAILS = {
  in_py_d01: {
    backgroundJa: 'ニューデリーはイギリス領インド時代に建設された計画都市で、独立後もインドの首都として政治の中心を担っています。',
    historyJa: '1911年に首都をカルカッタからデリーへ移すことが発表され、建築家エドウィン・ラッチェンスとハーバート・ベイカーの設計により1931年に完成・遷都しました。',
    episodeJa: 'ラッチェンスはヨーロッパの新古典主義にムガル・仏教・ヒンドゥーの意匠を融合させた独自の「デリー・オーダー」という建築様式を考案しました。',
    keyPointsJa: ['1911年に遷都が発表された', '設計はラッチェンスとベイカーが担当', '完成・遷都は1931年', '独自の「デリー・オーダー」様式を生み出した'],
  },
  in_py_d02: {
    backgroundJa: 'インドは1947年にイギリスの統治から独立し、新しい主権国家としての歴史を歩み始めました。',
    historyJa: 'インド独立法は1947年7月18日に成立し、1947年8月15日に独立が発効しました。',
    episodeJa: 'マウントバッテン総督は当初1948年6月を予定していた移行日を前倒しし、第二次世界大戦で日本が降伏した8月15日に合わせたとされています。',
    keyPointsJa: ['独立法成立は1947年7月18日', '独立発効は1947年8月15日', 'ジャワハルラール・ネルーが初代首相に就任', '同時にインドとパキスタンに分離した'],
  },
  in_py_d03: {
    backgroundJa: 'インド憲法は世界最長の成文憲法とされ、独立後のインド民主主義の基盤を定めています。',
    historyJa: '1949年11月26日に制憲議会で採択され、1950年1月26日に施行されました。',
    episodeJa: '施行日の1月26日は、1930年にインド国民会議が「完全独立（プールナ・スワラージ）」を宣言した日にちなんで選ばれました。',
    keyPointsJa: ['採択は1949年11月26日', '施行は1950年1月26日（共和国記念日）', '起草委員会の委員長はB.R.アンベードカル', '原文は395条・8附則からなる世界最長の憲法'],
  },
  in_py_d04: {
    backgroundJa: 'インドは28の州と8の連邦直轄地からなる連邦国家で、州境は言語や歴史を反映して何度も再編されてきました。',
    historyJa: '1956年の「州再編法」により、主に言語を基準とした大規模な州の再編が行われました。',
    episodeJa: '2019年にはジャンムー・カシミール州が再編法により2つの連邦直轄地に分割され、2020年にはダードラー・ナガル・ハヴェーリーとダマン・ディーウが統合されるなど、現在も区分の見直しが続いています。',
    keyPointsJa: ['現在は28州・8連邦直轄地', '1956年に言語基準で大規模再編', '2019年にジャンムー・カシミールが分割', 'マハーラーシュトラ・タミル・ナードゥ・ラジャスタンは大規模州の代表例'],
  },
  in_py_d05: {
    backgroundJa: 'ガンジス川はヒンドゥー教で最も神聖視される川で、北インドの暮らしと信仰を支える大河です。',
    historyJa: 'ウッタラーカンド州のガンゴートリー氷河、標高約7,756メートルのゴームクと呼ばれる氷洞付近を源流としています。',
    episodeJa: '全長は測定の起点によって約2,510kmから2,650kmまで諸説あり、単一の確定値はありませんが、ヒンドゥー教徒はこの川での沐浴が罪を清めると信じています。',
    keyPointsJa: ['源流はガンゴートリー氷河（標高約7,756m）', '全長は約2,510〜2,650km（諸説あり）', '北インドの信仰生活の中心', 'チベット国境に近いウッタルカシ県に源を発する'],
  },
  final_decode_IN_python_01: {
    backgroundJa: 'タージ・マハルはアグラにあるムガル朝の霊廟で、ユネスコ世界遺産に登録された「永遠の愛の象徴」です。',
    historyJa: '1631年に皇帝シャー・ジャハーンが亡き王妃ムムターズ・マハルのために建設を命じ、1632年に着工、1648年に主要部分が完成しました。',
    episodeJa: '建設には2万人以上の職人がインド・ペルシア・ヨーロッパ・オスマン帝国から集められ、資材の運搬には約1,000頭の象が使われたと伝えられています。',
    keyPointsJa: ['1631年に建設が命じられた', '1632年着工、1648年に主要部完成', '建築には2万人以上の職人が参加', '建材運搬に約1,000頭の象が使われた'],
  },
  final_decode_IN_python_02: {
    backgroundJa: 'クトゥブ・ミナールはデリー・スルタン朝の始まりを象徴する、世界最高のレンガ造りミナレットです。',
    historyJa: '1199年頃にクトゥブッディーン・アイバクが建設を始め、その後を継いだイルトゥトミシュが完成させました。',
    episodeJa: 'アイバクは最初の1層しか完成させられず、残りの3層はイルトゥトミシュによって増築され、高さ72.5メートル・399段の階段を持つ塔になりました。',
    keyPointsJa: ['建設開始は1199年頃', '完成者はイルトゥトミシュ', '高さ72.5m、399段の階段', '1993年にユネスコ世界遺産登録'],
  },
  final_decode_IN_python_03: {
    backgroundJa: 'ジャイプル市街は「ピンク・シティ」と呼ばれる計画都市で、ヒンドゥー・ムガル・西洋建築が融合しています。',
    historyJa: '1727年にマハーラージャ・サワーイー・ジャイ・シング2世によって創建されました。',
    episodeJa: 'ヴェーダの建築理論に基づく格子状の街路と大広場「チャウパール」を持つ点が評価され、2019年にユネスコ世界遺産に登録されました。',
    keyPointsJa: ['創建は1727年', '創建者はサワーイー・ジャイ・シング2世', '2019年にユネスコ世界遺産登録', '丘陵ではなく平地に築かれた珍しい計画都市'],
  },
  in_py_e01: {
    backgroundJa: 'ムンバイはマハーラーシュトラ州の州都で、インド経済の中心となる大都市です。',
    historyJa: '旧称「ボンベイ」から「ムンバイ」への正式名称変更は1995年3月4日にマハーラーシュトラ州政府が決定し、同年11月に中央政府も追随しました。',
    episodeJa: '新名称はこの地に元々住んでいたコーリ漁民の守護女神ムンバーデーヴィーにちなんでおり、植民地時代の名残を見直す動きの一環として改称されました。',
    keyPointsJa: ['1995年3月4日に州政府が改称を決定', '女神ムンバーデーヴィーが名称の由来', '都市人口は約1,250万人、都市圏は2,300万人超', '改称はシヴ・セーナーが主導した'],
  },
  in_py_e02: {
    backgroundJa: 'インド理科大学院（IISc）はベンガルールにあるインド屈指の研究大学で、アジアでも最初期の理系高等研究機関です。',
    historyJa: '実業家ジャムシェトジー・タータが1896年に構想し、1909年5月27日に政府命令で正式に設立、1911年7月24日に開校しました。',
    episodeJa: '創設者タータは1904年に死去し、自らが構想した大学の開校を見届けることはできませんでしたが、マイソール藩王が寄贈した371エーカーの土地に学校が建てられました。',
    keyPointsJa: ['1896年にJ.タータが構想', '正式設立は1909年5月27日', '開校時は学生24名・学部2つのみ', '初代学長はイギリス人化学者モリス・トラバース'],
  },
  in_py_e03: {
    backgroundJa: 'インド鉄道はアジアで最初に開業した鉄道網のひとつで、現在も世界有数の規模を誇ります。',
    historyJa: '最初の旅客列車は1853年4月16日にボンベイとターネー間の34kmで運行されました。',
    episodeJa: 'この開業列車は客車14両・乗客約400人を3台の蒸気機関車（サーヒブ、シンド、サルタンと命名）が牽引したと記録されています。',
    keyPointsJa: ['最初の旅客列車は1853年4月16日運行', '現在の総延長は約13万5,000km', '2023〜24年度の乗客数は69億人超', '従業員数120万人以上でインド第2位の雇用主'],
  },
  in_py_e04: {
    backgroundJa: 'タール砂漠はインド北西部からパキスタンにまたがる世界最大級の砂漠で、人口密度が非常に高いことで知られます。',
    historyJa: '大部分はラジャスタン州に位置する古くからの乾燥地帯で、面積は約26万4,000平方キロメートルに及びます。',
    episodeJa: '世界の砂漠の中でも人口密度が最も高く、1平方キロメートルあたり約83人が暮らしているとされています。',
    keyPointsJa: ['面積は約26万4,000km²', '世界で最も人口密度の高い砂漠', '約3分の2がインド側、3分の1がパキスタン側', '世界9位の亜熱帯砂漠とされる'],
  },
  final_execute_IN_python_01: {
    backgroundJa: 'アジャンター石窟群はマハーラーシュトラ州にある仏教の石窟寺院群で、古代インド美術の最高峰とされています。',
    historyJa: '石窟は2つの時期に分けて造られ、最初期は紀元前2世紀頃、後期は5世紀頃に集中的に開削されました。',
    episodeJa: '1819年にイギリス軍人ジョン・スミスが虎狩りの最中に現地の羊飼いの少年に案内され、第10窟を発見したことが再発見のきっかけになりました。',
    keyPointsJa: ['石窟は全30窟', '建造は紀元前2世紀頃と5世紀頃の2期', '1819年にジョン・スミスが再発見', '1983年にユネスコ世界遺産登録'],
  },
  final_execute_IN_python_02: {
    backgroundJa: 'インドには地域ごとに発展した古典舞踊が複数あり、バラタナティヤム・カタック・オディッシー・カタカリはその代表例です。',
    historyJa: 'バラタナティヤムはタミル・ナードゥの寺院でデーヴァダーシーが奉納してきた舞踊で、カタックは北インドの宮廷で発展しました。',
    episodeJa: 'カタックは他の3つの舞踊と異なり、ムガル朝期にペルシアや中央アジアの宮廷文化の影響を強く受けて様式が形成された点が特徴的です。',
    keyPointsJa: ['バラタナティヤムはタミル・ナードゥの寺院舞踊', 'カタックは北インド宮廷由来でペルシア文化の影響を受ける', 'オディッシーはオディシャ州で寺院彫刻の姿勢を取り入れる', 'カタカリはケーララ州で南インド武術の動きを採り入れる'],
  },
  in_py_b01: {
    backgroundJa: 'インドルピーはインドの公式通貨で、現在の₹記号は国家的なデザイン公募によって生まれた比較的新しいシンボルです。',
    historyJa: '「ルピー」の語はサンスクリット語の「ルーピヤ（精製された銀）」に由来し、1540年代にシェール・シャー・スーリーが鋳造した銀貨に起源を持ちます。',
    episodeJa: '現在の₹記号は2009年の公募（応募3,000件超）から選ばれ、IIT出身のウダヤ・クマール・ダルマリンガムが考案したデザインが2010年7月15日に正式採用されました。',
    keyPointsJa: ['語源はサンスクリット語「ルーピヤ」', '起源は1540年代のシェール・シャー・スーリーの銀貨', '₹記号は2010年7月15日に正式採用', 'デーヴァナーガリー文字とラテン文字Rを融合した意匠'],
  },
  in_py_b02: {
    backgroundJa: 'インドの郵便番号（PINコード）は1972年に導入された6桁の番号制度で、全国の郵便配達を支えています。',
    historyJa: '1972年8月15日に郵便電信省のシュリーラーム・ビカジー・ヴェランカルが考案し、導入されました。',
    episodeJa: '6桁のうち最初の1桁が9つの郵便地帯のいずれかを示し、最後の3桁で配達担当の郵便局まで一意に特定できる仕組みになっています。',
    keyPointsJa: ['導入は1972年8月15日', '考案者はS.B.ヴェランカル', '6桁のうち先頭1桁が郵便地帯を示す', '最後の3桁で配達担当郵便局が特定される'],
  },
  in_py_b03: {
    backgroundJa: 'インドの州を示す2文字の略号は車両登録番号などに使われ、各州を識別する公式な制度です。',
    historyJa: '1989年の中央自動車規則（Central Motor Vehicles Rules）により制度が整えられました。',
    episodeJa: 'デリー（DL）は他州と異なり、地区番号の先頭ゼロを表記しない慣習があり、例えば「DL 02」ではなく「DL 2」と書かれることがあります。',
    keyPointsJa: ['MH=マハーラーシュトラ、TN=タミル・ナードゥ、RJ=ラジャスタン、KL=ケーララ、DL=デリー', '制度の基盤は1989年の中央自動車規則', '登録番号は州コード＋地区番号＋系列文字＋番号の形式', 'デリーは地区番号の先頭ゼロを省略する慣習がある'],
  },
  final_debug_IN_python_01: {
    backgroundJa: '西ガーツ山脈はインド西部を南北に走る山地で、世界でも有数の生物多様性ホットスポットとして知られます。',
    historyJa: 'ヒマラヤやアルプスよりも古い、世界最古級の山脈のひとつとされ、2012年にユネスコ世界遺産に登録されました。',
    episodeJa: 'ここに生息するハンミョウ類の約80％が固有種で、両生類179種のうち65％が西ガーツ山脈にしか見られない固有種です。',
    keyPointsJa: ['2012年にユネスコ世界遺産登録', 'ヒマラヤより古い世界最古級の山脈', '両生類179種のうち65％が固有種', '絶滅危惧種325種以上が生息'],
  },
  in_js_d01: {
    backgroundJa: 'インドの国会議事堂はニューデリーにあり、上院（ラージヤ・サバー）と下院（ローク・サバー）が置かれた立法の中心です。',
    historyJa: '旧議事堂はエドウィン・ラッチェンスとハーバート・ベイカーの設計で1921年に着工し、1927年1月に開館しました。',
    episodeJa: '旧議事堂の円形構造はマディヤ・プラデーシュ州モレーナにあるチャウサト・ヨーギニー寺院を参考にしたとされ、144本の砂岩の柱を持ちます。',
    keyPointsJa: ['旧議事堂は1921年着工、1927年開館', '円形構造はチャウサト・ヨーギニー寺院に由来', '新議事堂は建築家ビマル・パテール設計で2023年5月28日に開所', '新議事堂は三角形の建物で面積約6万4,500m²'],
  },
  in_js_d02: {
    backgroundJa: 'チェンナイはインド南東部、ベンガル湾沿いのコロマンデル海岸に位置する港湾都市です。',
    historyJa: '1639〜40年にイギリス東インド会社がフォート・セント・ジョージを築いたマドラスパトナムとして都市が始まりました。',
    episodeJa: '1639年8月22日、交渉人フランシス・デイがヴィジャヤナガル王の代理人から、海岸沿い約9.7km・内陸約1.6kmの土地譲渡を取りつけたと記録されています。',
    keyPointsJa: ['1639〜40年にフォート・セント・ジョージが築かれた', '旧称マドラスから1996年にチェンナイへ改称', 'ベンガル湾のコロマンデル海岸に位置', '歴史的にトンダイマンダラム地方の中心地だった'],
  },
  in_js_d03: {
    backgroundJa: 'インド国旗はサフラン・白・緑の3色と中央の紺色のアショーカ・チャクラで構成される国家の象徴です。',
    historyJa: 'ピンガリ・ヴェンカヤが1921年にガンディーへ提案した案を基に、1947年7月22日に正式採用されました。',
    episodeJa: 'ヴェンカヤの当初案はヒンドゥー教を表す赤とイスラム教を表す緑の2色でしたが、ガンディーが他の宗教を表す白を加え、後にサフラン・白・緑へ変更されました。',
    keyPointsJa: ['正式採用は1947年7月22日', '考案者はピンガリ・ヴェンカヤ', 'サフランは勇気、白は平和と真実、緑は豊穣を表す', 'アショーカ・チャクラは24本の輻を持つ'],
  },
  in_js_d04: {
    backgroundJa: 'インドには鉄道・道路・航空・メトロなど多様な交通手段があり、その規模は世界でも有数です。',
    historyJa: '鉄道は1853年の開業を起点に発展し、現在の総延長は約13万5,000kmで世界4位の規模を持ちます。',
    episodeJa: 'インド鉄道は1日あたり2,300万人以上が利用し、120万人以上の従業員を抱える世界9位の雇用主とされています。',
    keyPointsJa: ['鉄道網は線路長で世界4位', '1日の利用者は2,300万人超', '従業員数は世界9位の規模', '乗客数では世界最大の鉄道網とされる'],
  },
  in_js_d05: {
    backgroundJa: 'インド門はムンバイの海岸に建つ記念門で、市の象徴的な観光地のひとつです。',
    historyJa: '1911年12月2日のジョージ5世とメアリー王妃のアポロ・バンダル上陸を記念し、1914年8月に設計が承認されました。',
    episodeJa: '第一次世界大戦の影響で工事が遅れ、実際に完成・公開されたのは1924年12月4日で、当時の総督リーディング卿が公開式を行いました。',
    keyPointsJa: ['国王夫妻の上陸記念として計画', '設計はジョージ・ウィテット', 'インド・サラセン様式の建築', '完成・公開は1924年12月4日'],
  },
  final_decode_IN_javascript_01: {
    backgroundJa: 'レッド・フォート複合体はデリーにあるムガル朝の城塞宮殿で、毎年独立記念日の式典が行われる場所です。',
    historyJa: 'シャー・ジャハーンの命により1638年5月13日に着工し、1648年4月6日に完成しました。',
    episodeJa: '設計はタージ・マハルにも関わったとされるウスタード・アハマド・ラホーリーによるもので、城壁の高さは約23メートルに及びます。',
    keyPointsJa: ['着工は1638年5月13日、完成は1648年4月6日', 'タージ・マハルの設計者とされる人物が関与', '2007年にユネスコ世界遺産登録', '毎年8月15日に首相が城壁から演説する'],
  },
  final_decode_IN_javascript_02: {
    backgroundJa: 'エローラ石窟群はマハーラーシュトラ州にある仏教・ヒンドゥー教・ジャイナ教の石窟が共存する遺跡群です。',
    historyJa: '主に紀元600年から1000年頃にかけて、仏教窟（5〜8世紀）、ヒンドゥー教窟（7〜10世紀）、ジャイナ教窟（9〜12世紀）の順に開削されました。',
    episodeJa: '第16窟のカイラーサ寺院は一つの巨大な岩を彫り抜いて作られた単一の石造構造物で、エローラの中でも特に有名です。',
    keyPointsJa: ['仏教・ヒンドゥー教・ジャイナ教の石窟が共存', '第16窟カイラーサ寺院は一枚岩を彫った構造', 'アジャンター石窟群から約100km西に位置', '両遺跡ともマハーラーシュトラ州のユネスコ世界遺産'],
  },
  final_decode_IN_javascript_03: {
    backgroundJa: 'ISRO・IISc・BARCはインドの宇宙開発・基礎科学・原子力研究を支える代表的な研究機関です。',
    historyJa: 'IIScは1909年設立、BARCは1954年にトロンベイ原子力研究所として始まり1967年に改称、ISROは1969年8月15日に設立されました。',
    episodeJa: 'ISROの創設者ヴィクラム・サーラーバーイーはIISc出身で、後にIIScとISROの双方を同時に率いたサティシュ・ダワンが両機関を結びつける役割を果たしました。',
    keyPointsJa: ['IISc設立は1909年', 'BARCは1954年創設、1967年に改称', 'ISRO設立は1969年8月15日', 'サティシュ・ダワンがIIScとISROの両方を指導した'],
  },
  in_js_e01: {
    backgroundJa: 'ヨガはインド古来の身体・精神修養法で、現在は世界的な健康実践として広がっています。',
    historyJa: 'その起源は伝統的にパタンジャリの時代（紀元前500〜200年頃とされるが伝説的で確証はない）にまで遡るとされます。',
    episodeJa: '2016年12月1日にユネスコの無形文化遺産代表リストに登録され、これは2015年6月21日に始まった国際ヨガデーの制定に続くものでした。',
    keyPointsJa: ['ユネスコ無形文化遺産登録は2016年12月1日', '国際ヨガデーは2015年6月21日に開始', '伝統的にグル・シシュヤ（師弟）制度で伝承', 'エチオピアでの第11回政府間委員会で登録が承認された'],
  },
  in_js_e02: {
    backgroundJa: 'ブラマプトラ川はチベット・インド・バングラデシュを流れる国際河川で、インド北東部の重要な水系です。',
    historyJa: 'チベットのカイラス山近くのアンシ氷河を源流とし、ヤルンツァンポ川として流れ始めます。',
    episodeJa: 'この川はチベットでツァンポ、インド側でシアン（ディハン）、そしてブラマプトラと、流れる地域によって名前を3回変える珍しい川です。',
    keyPointsJa: ['源流はチベットのアンシ氷河付近', '名称はチベット→シアン→ブラマプトラと3回変わる', '全長は約2,900〜3,080km（諸説あり）', '最終的にガンジス川と合流しベンガル湾へ注ぐ'],
  },
  in_js_e03: {
    backgroundJa: '国立博物館（ニューデリー）はインド美術・考古資料を収蔵する代表的な博物館です。',
    historyJa: '1949年8月15日に総督C.ラージャゴーパーラーチャリーにより開館し、現在の建物は1955年5月12日にネルーが礎石を置き1960年に開館しました。',
    episodeJa: '所蔵品にはモヘンジョダロ出土の「踊る少女」像やパシュパティ印章があり、約5,000年分・20万点を超える資料を収蔵しています。',
    keyPointsJa: ['開館は1949年8月15日', '現建物の開館は1960年', '「踊る少女」像など約20万点を収蔵', '7〜20世紀の写本約1万4,000点も所蔵'],
  },
  in_js_e04: {
    backgroundJa: 'コナーラクの太陽神殿はオディシャ州にある13世紀の寺院で、太陽神を運ぶ戦車を模した姿で知られます。',
    historyJa: '東ガンガ朝の王ナラシンハデーヴァ1世（在位1238〜1264年）の命により、紀元1250年頃に建てられました。',
    episodeJa: '寺院の24個の石の車輪（直径約3.7m）はそれぞれ日時計として機能し、分単位まで正確に時刻を示すよう設計されています。',
    keyPointsJa: ['建立は紀元1250年頃', '建立者は東ガンガ朝ナラシンハデーヴァ1世', '24個の車輪は日時計として機能する', '7頭の石の馬が戦車を引く構図を表す'],
  },
  final_execute_IN_javascript_01: {
    backgroundJa: 'スンダルバンス国立公園は西ベンガル州にある世界最大のマングローブ林で、ベンガルトラの生息地として知られます。',
    historyJa: 'インド側のスンダルバンスは1987年にユネスコ世界遺産に登録されました。',
    episodeJa: 'この地のトラは長距離を泳いで魚や蟹を捕食する珍しい生態を持ち、世界のトラの中でも最も生息密度が高い個体群とされています。',
    keyPointsJa: ['インド側登録は1987年', 'マングローブ林面積は約14万ヘクタール', 'ベンガルトラ約400〜450頭が生息', '鳥類260種以上が記録されている'],
  },
  final_execute_IN_javascript_02: {
    backgroundJa: 'ムンバイ・チェンナイ・コルカタ・コーチンはインドを代表する港湾都市で、それぞれ異なる歴史的背景を持ちます。',
    historyJa: 'コルカタ港は1870年に設立されたインド最古の現役港で、フーグリー川沿いに位置する唯一の河川港です。',
    episodeJa: 'コーチンの天然港は1341年のペリヤール川の大洪水によって形成されたと伝えられ、後にローマ人、ポルトガル人、オランダ人、イギリス人が利用しました。',
    keyPointsJa: ['コルカタ港は1870年設立で最古の現役港', 'コーチンの港は1341年の洪水で形成されたとされる', 'ムンバイは西海岸最大・最重要の港', 'インドには主要港が13港ある'],
  },
  in_js_b01: {
    backgroundJa: 'インドの電話番号は10桁に統一されており、通信網の拡大に合わせて段階的に桁数が増やされてきました。',
    historyJa: '現在の全国採番計画（National Numbering Plan）は2003年に通信省によって策定されました。',
    episodeJa: '1980年代の電話番号はわずか6桁でしたが、契約者数の急増を見込んで段階的に拡張され、現在は7億5,000万契約者まで対応できるよう設計されています。',
    keyPointsJa: ['現在は固定で10桁', '採番計画は2003年策定', '携帯番号は6・7・8・9のいずれかで始まる', '1980年代は6桁だった'],
  },
  in_js_b02: {
    backgroundJa: 'デリーとグルガーオン（グルグラム）は首都圏（NCR）を構成する都市で、近年改称が行われた地域でもあります。',
    historyJa: 'グルガーオンは2016年4月12日にハリヤーナー州首相マノハル・ラール・カッタルが改称を提案し、同年9月27日に中央政府が承認してグルグラムへ正式に改称されました。',
    episodeJa: '新名称「グルグラム」は、パーンダヴァ兄弟が師ドローナーチャーリヤに与えたとされる村「グルダクシナー」に由来する伝説的な地名です。',
    keyPointsJa: ['改称提案は2016年4月12日', '正式承認は2016年9月27日', '名称はグル（師）への謝礼の村に由来', 'NCRはデリー首都圏とその周辺地域を指す'],
  },
  in_js_b03: {
    backgroundJa: 'インドには44件のユネスコ世界遺産があり（2025年時点）、文化遺産・自然遺産・複合遺産で構成されています。',
    historyJa: '最初の登録は1983年で、以来文化遺産35〜36件、自然遺産7件、複合遺産1件（カンチェンジュンガ国立公園）が登録されています。',
    episodeJa: '2025年7月には「マラータ軍事景観群」としてマハーラーシュトラ州の11の砦とタミル・ナードゥ州の1砦が単一の遺産として新たに登録されました。',
    keyPointsJa: ['2025年時点で世界遺産は44件', '文化遺産35〜36件、自然遺産7件、複合遺産1件', '2025年に「マラータ軍事景観群」が新規登録', '2024年にはアッサムの「モイダム」が登録された'],
  },
  final_debug_IN_javascript_01: {
    backgroundJa: 'チャトラパティ・シヴァージー・ターミナスはムンバイの象徴的な鉄道駅で、ヴィクトリア朝ゴシック建築とインド建築が融合した世界遺産です。',
    historyJa: '1878年から1887年にかけて建設され、設計はフレデリック・ウィリアム・スティーブンスが担当しました。',
    episodeJa: '元の名称「ヴィクトリア・ターミナス」は1996年3月にマラータ王シヴァージーにちなんでチャトラパティ・シヴァージー・ターミナスへ改称されました。',
    keyPointsJa: ['建設は1878〜1887年', '設計者はF.W.スティーブンス', '1996年3月に現名称へ改称', '2004年にユネスコ世界遺産登録'],
  },
  in_java_d01: {
    backgroundJa: 'インド最高裁判所はニューデリーにあるインド司法の最高機関で、独立後の1950年に発足しました。',
    historyJa: '1950年1月26日、共和国憲法施行の2日後に設立され、当初は旧国会議事堂内で開廷していました。',
    episodeJa: '現在の庁舎は1958年に完成し、「正義の天秤」を模した形状で、高さ約27.6メートルのドームを持っています。',
    keyPointsJa: ['設立は1950年1月26日', '現庁舎は1958年完成', '「正義の天秤」をかたどった建物', '当初は最高裁長官＋判事7名で構成'],
  },
  in_java_d02: {
    backgroundJa: '共和国記念日はインド憲法が施行された日を記念する国の祝日です。',
    historyJa: 'インド憲法は1949年11月26日に採択され、1950年1月26日に施行されて共和国記念日となりました。',
    episodeJa: '1月26日が選ばれたのは、1930年にインド国民会議が「完全独立（プールナ・スワラージ）」を宣言した日にちなんだためです。',
    keyPointsJa: ['憲法採択は1949年11月26日', '施行・共和国記念日は1950年1月26日', '日付は1930年の独立宣言にちなむ', '起草委員長はB.R.アンベードカル'],
  },
  in_java_d03: {
    backgroundJa: 'インドは1947年にイギリスの統治から独立し、新しい国家としての歩みを始めました。',
    historyJa: 'インド独立法は1947年7月18日に成立し、1947年8月15日に独立が発効しました。',
    episodeJa: 'マウントバッテン総督は当初1948年6月の予定だった移行を前倒しし、第二次世界大戦で日本が降伏した8月15日に合わせて独立日を定めました。',
    keyPointsJa: ['独立法成立は1947年7月18日', '独立発効は1947年8月15日', 'ネルーが初代首相に就任', '同時にインドとパキスタンに分離した'],
  },
  in_java_d04: {
    backgroundJa: 'インドには鉄道・道路・航空・港湾など多様な交通手段があり、国全体の物流と移動を支えています。',
    historyJa: '鉄道は1853年の開業を起点に発展し、現在は線路総延長で世界4位の規模を持ちます。',
    episodeJa: 'インド鉄道は1日あたり2,300万人以上が利用し、従業員数は120万人を超え、世界9位の規模の雇用主とされています。',
    keyPointsJa: ['鉄道網は線路長で世界4位', '1日の利用者は2,300万人超', '従業員数は世界9位の規模', '乗客数では世界最大の鉄道網とされる'],
  },
  in_java_d05: {
    backgroundJa: 'インドは北部・南部・東部・西部・北東部などの地域区分で語られることが多く、各地域は文化や地理的特徴が異なります。',
    historyJa: '現行の州区分の骨格は1956年の州再編法によって形成されました。',
    episodeJa: '北東部にはアッサムを含む「セブン・シスターズ」と呼ばれる7州があり、独自の言語・民族文化を持つ地域として知られています。',
    keyPointsJa: ['1956年の州再編法が現行区分の基礎', '北東部は「セブン・シスターズ」と呼ばれる地域を含む', '州・連邦直轄地は現在28州・8直轄地', '地域区分は地理だけでなく文化的背景も反映する'],
  },
  final_decode_IN_java_01: {
    backgroundJa: 'インドの山岳鉄道群は急峻な地形を克服した鉄道技術の傑作として評価され、ユネスコ世界遺産に登録されています。',
    historyJa: 'ダージリン・ヒマラヤ鉄道は1881年開業（1999年登録）、ニルギリ山岳鉄道は1891〜1908年建設（2005年に拡張登録）、カールカー・シムラー鉄道は1898〜1903年建設（2008年に拡張登録）されました。',
    episodeJa: 'ニルギリ線は1854年に建設が提案されたものの、地形の険しさから着工までに約40年を要した経緯があります。',
    keyPointsJa: ['ダージリン線は1881年開業（最古の山岳鉄道）', 'ニルギリ線は1891〜1908年建設', 'カールカー・シムラー線は1898〜1903年建設', '3線とも険しい山岳地形に挑む工法が評価され登録'],
  },
  final_decode_IN_java_02: {
    backgroundJa: 'グレート・ヒマラヤ国立公園保全地域はヒマーチャル・プラデーシュ州にあるユネスコ世界遺産で、西ヒマラヤ地域の生物多様性の宝庫です。',
    historyJa: '2014年6月23日、ドーハで開催された第38回世界遺産委員会でユネスコ世界遺産に登録されました。',
    episodeJa: '園内に分布する被子植物のうち58％が西ヒマラヤ地域の固有種という、非常に高い固有種率を示しています。',
    keyPointsJa: ['登録は2014年6月23日', '被子植物の58％が西ヒマラヤ固有種', '維管束植物805種が確認されている', '鳥類181種、哺乳類31種が記録されている'],
  },
  final_decode_IN_java_03: {
    backgroundJa: 'ナーランダー僧院遺跡はビハール州にあった世界最古級の寄宿制大学で、仏教学の一大中心地でした。',
    historyJa: 'グプタ朝のクマーラグプタ1世によって紀元427年頃に創設され、700年以上にわたり機能しました。',
    episodeJa: '1202年頃、デリー・スルタン朝のバフティヤール・ハルジー軍によって破壊され、その繁栄に終止符が打たれました。',
    keyPointsJa: ['創設は紀元427年頃、創設者はクマーラグプタ1世', '700年以上にわたり仏教学の中心地として機能', '1202年頃に破壊された', '2016年7月15日にユネスコ世界遺産登録'],
  },
  in_java_e01: {
    backgroundJa: 'C.V.ラマンはノーベル物理学賞を受賞したインドの物理学者で、アジア人として初めて自然科学分野でノーベル賞を受けた人物です。',
    historyJa: '1928年2月28日、カルカッタ大学で学生K.S.クリシュナンとともに「ラマン効果」を発見し、1930年11月にノーベル物理学賞の受賞が発表されました。',
    episodeJa: '発見からわずか7年で、ラマン効果を用いた研究論文が700本以上発表され、分子構造解析の手法を大きく簡便化しました。',
    keyPointsJa: ['ラマン効果発見は1928年2月28日', 'ノーベル物理学賞は1930年受賞', '発見の地はカルカッタ大学', '発見日の2月28日はインドの「国家科学デー」になっている'],
  },
  in_java_e02: {
    backgroundJa: 'インドはインド標準時（IST）という単一の時間帯を国全体で採用しており、UTC+5:30で運用されています。',
    historyJa: '1905年の決定に基づき、1906年1月1日からインド標準時が正式に導入されました。',
    episodeJa: '基準となる東経82度30分の経線は主要都市ではなく、ウッタル・プラデーシュ州ミルザープル近郊のシャンカルガル要塞付近を通っています。',
    keyPointsJa: ['正式導入は1906年1月1日', '基準経線は東経82度30分', 'UTC+5:30で夏時間は採用しない', '独立後の1947年以降、国内唯一の標準時として定着'],
  },
  in_java_e03: {
    backgroundJa: 'インド宇宙研究機関（ISRO）はインドの国家宇宙機関で、低コストでの宇宙開発の実績で知られています。',
    historyJa: '1962年設立のINCOSPARを前身として、1969年8月15日にヴィクラム・サーラーバーイーによって設立されました。',
    episodeJa: '2013年に打ち上げられたマンガルヤーンは、初挑戦で火星周回軌道に到達した世界初の探査機となりました。',
    keyPointsJa: ['設立は1969年8月15日', '最初の人工衛星アーリヤバータは1975年打ち上げ', 'マンガルヤーン（2013年）は初挑戦で火星軌道投入に成功', 'チャンドラヤーン3号（2023年）で月の南極付近に世界初着陸'],
  },
  in_java_e04: {
    backgroundJa: 'デーヴァナーガリー文字はヒンディー語・サンスクリット語・マラーティー語など120以上の言語で使われる表記体系です。',
    historyJa: '紀元前3世紀のブラーフミー文字からグプタ文字を経て発展し、8世紀頃にナーガリー（デーヴァナーガリー）の書体が現れました。',
    episodeJa: 'この文字が独立後にヒンディー語の公式な表記文字として正式に採用されたのは1947年の独立以降のことです。',
    keyPointsJa: ['起源はブラーフミー文字（紀元前3世紀）', '8世紀頃にデーヴァナーガリーの書体が成立', 'ヒンディー語公式表記としての採用は1947年独立後', '文字の上部にある横線「シローレーカー」が特徴'],
  },
  final_execute_IN_java_01: {
    backgroundJa: 'マハーラーシュトラ・タミル・ナードゥ・ラジャスタンはそれぞれムンバイ・チェンナイ・ジャイプルを州都とする主要な州です。',
    historyJa: '現行の州区分の骨格は1956年の州再編法によって形成され、各州都の役割もこの頃にほぼ固まりました。',
    episodeJa: 'ムンバイは都市人口約1,250万人、都市圏では2,300万人を超え、インド最大の経済都市として国内総生産の大きな割合を占めています。',
    keyPointsJa: ['1956年の州再編法が現行区分の基礎', 'ムンバイはマハーラーシュトラ州の州都で人口約1,250万人', 'チェンナイはタミル・ナードゥ州の州都', 'ジャイプルはラジャスタン州の州都で1727年創建'],
  },
  final_execute_IN_java_02: {
    backgroundJa: 'インドの研究機関は天文・宇宙分野でも観測拠点を持ち、ベンガルールはその中心地のひとつです。',
    historyJa: 'ベンガルールにはインド理科大学院（1909年設立）をはじめとする研究機関が集積し、科学研究都市として発展してきました。',
    episodeJa: 'ISROの本部もベンガルールに置かれ、IIScの卒業生ヴィクラム・サーラーバーイーが設立に深く関わったという歴史的つながりがあります。',
    keyPointsJa: ['IIScは1909年設立、ベンガルールに所在', 'ISRO本部もベンガルールにある', 'サーラーバーイーはIISc出身でISRO創設者', 'ベンガルールはインドの科学研究の中心都市の一つ'],
  },
  in_java_b01: {
    backgroundJa: 'インドの都市コード（DEL、BOM、MAA、BLRなど）は都市を識別するために使われる略号で、航空コードや旧称の頭文字に由来するものもあります。',
    historyJa: 'BLR（ベンガルール）のような空港コードは、国際航空運送協会（IATA）の規則に基づいて各都市に割り当てられています。',
    episodeJa: 'BOM（ムンバイ）やMAA（チェンナイ）のように、改称前の旧称（ボンベイ、マドラス）の頭文字がそのまま空港コードとして残っている例があります。',
    keyPointsJa: ['DEL=デリー、BOM=ムンバイ、MAA=チェンナイ、BLR=ベンガルール', '空港コードはIATAの規則で割り当てられる', '旧称の頭文字が残るコードもある（BOM、MAA）', '都市名が改称されてもコードが変わらない例が多い'],
  },
  in_java_b02: {
    backgroundJa: 'インド鉄道の駅コードは先頭ゼロを含む場合があり、識別番号として表記をそのまま保つ必要があります。',
    historyJa: 'インド鉄道の駅・路線コードの体系は、鉄道網拡大に伴って20世紀を通じて整備されてきました。',
    episodeJa: '識別コードは計算に使われる数値ではなく、桁数や先頭ゼロを含めた「表記」そのものに意味があるため、文字列として扱うのが適切です。',
    keyPointsJa: ['駅コードは先頭ゼロを含む場合がある', '識別コードは計算対象ではなく表記が重要', '鉄道網拡大とともにコード体系が整備された', '文字列として保存すれば表記をそのまま保てる'],
  },
  in_java_b03: {
    backgroundJa: 'クリケットはインドで最も人気のあるスポーツで、19世紀にイギリス植民地時代に伝わりました。',
    historyJa: 'インドクリケット統制委員会（BCCI）は1928年12月1日にマドラス（現チェンナイ）で設立されました。',
    episodeJa: 'インドの初の公式テストマッチは1932年6月25日、ロンドンのローズ球場で行われ、これによりインドは6番目のテストクリケット国となりました。',
    keyPointsJa: ['BCCI設立は1928年12月1日', '初の公式テストマッチは1932年6月25日（ローズ球場）', 'インドは6番目のテストクリケット国', 'カルカッタ・クリケット・クラブは1792年設立とされる'],
  },
  final_debug_IN_java_01: {
    backgroundJa: 'ラーニー・キ・ヴァヴはグジャラート州パータンにある精緻な階段井戸で、ソランキー朝時代の水利建築の傑作です。',
    historyJa: 'ソランキー朝の王ビーマ1世（在位1022〜1064年頃）を偲んで、王妃ウダヤマティが紀元1063年頃に建設を命じたと伝えられています。',
    episodeJa: '7層の階段を持ち、深さ約28メートル・長さ約65メートルに及ぶ巨大な構造物で、円形の井戸の竪穴は直径約10メートル・深さ約30メートルあります。',
    keyPointsJa: ['建設は紀元1063年頃、王妃ウダヤマティが発願', '7層の階段、深さ約28m・長さ約65m', '円形井戸の竪穴は直径約10m・深さ約30m', '2014年6月22日にユネスコ世界遺産登録'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、インドの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'IN',
    category: spec.category,
    entityKeys: [entityKey(spec.title)],
    aliases: [spec.title, spec.titleJa, spec.id],
    statement: spec.summaryJa,
    detail: backgroundJa,
    factStatus: 'verified',
    sourceRefs: sourceRef(spec.source),
    allowedWorlds: [spec.world],
    allowedLanguageIds: [spec.languageId],
    relatedFactIds: [],
    titleJa: spec.titleJa,
    summaryJa: spec.summaryJa,
    detailJa: backgroundJa,
    backgroundJa,
    historyJa: details.historyJa || spec.historyJa || '',
    episodeJa: details.episodeJa || spec.episodeJa || '',
    keyPointsJa: details.keyPointsJa || spec.keyPointsJa || [spec.summaryJa, `${spec.titleJa}の年代・場所・役割を分けて見る`, '名称だけでなく背景と意義を確認する'],
  };
}

function common(spec, code, answer, completedCode, extra = {}) {
  const factId = factIdFromQuestion(spec.id);
  return {
    id: spec.id,
    worldId: spec.world,
    languageId: spec.languageId,
    conceptId: conceptFor(spec),
    questionType: extra.questionType || 'fill-blank',
    title: spec.title,
    description: spec.prompt,
    prompt: spec.prompt,
    code,
    answer,
    blank: extra.blank ?? answer,
    expectedOutput: spec.expectedOutput,
    options: extra.options,
    optionExplanations: extra.optionExplanations,
    hint: spec.hint,
    explanation: spec.explanation,
    correctAnswer: answer,
    completedCode,
    correctedCode: extra.correctedCode,
    executionSteps: spec.executionSteps || ['コード内のデータを確認する', '条件や添字、戻り値を順番に追う', '最後に出力される値を選ぶ'],
    commonMistakes: spec.commonMistakes || ['題材名だけで選ばず、コードが参照している変数・キー・条件を確認する'],
    programmingExplanation: spec.programmingExplanation,
    countryNote: spec.summaryJa,
    sourceRefs: sourceRef(spec.source),
    factIds: [factId],
    entityKeys: [entityKey(spec.title)],
    debugExplanation: extra.debugExplanation,
    steps: extra.steps,
  };
}

function decode(spec) {
  return common(spec, spec.code, spec.answer, spec.completedCode || spec.code.replace('___BLANK___', spec.answer), {
    blank: spec.answer,
  });
}

function execute(spec) {
  return common(spec, spec.code, spec.answer, spec.code, {
    questionType: 'output-predict',
    options: spec.options,
    optionExplanations: spec.optionExplanations,
  });
}

function debug(spec) {
  const steps = [
    {
      stepNum: 1,
      stepTitle: '原因を特定',
      prompt: spec.prompt,
      question: 'このコードの主な不具合はどれですか。',
      options: [spec.cause, spec.wrongCause || '出力文の文字列だけが間違っている', spec.otherCause || 'データの件数が不足している'],
      answer: spec.cause,
      hint: spec.hint,
      explanation: spec.cause,
      optionExplanations: spec.causeOptionExplanations,
    },
    {
      stepNum: 2,
      stepTitle: '修正を選ぶ',
      prompt: '最小の修正を選んでください。',
      question: '正しい修正はどれですか。',
      options: [spec.fix, spec.wrongFix || '条件を削除する', spec.otherFix || 'すべての値を同じ文字列にする'],
      answer: spec.fix,
      hint: '原因に対応する1行だけを直します。',
      explanation: spec.fix,
      optionExplanations: spec.fixOptionExplanations,
    },
    {
      stepNum: 3,
      stepTitle: '影響を説明',
      prompt: '修正後の影響を確認します。',
      question: 'この修正で何が改善されますか。',
      options: [spec.impact, spec.wrongImpact || '常に例外を出して停止する', spec.otherImpact || '題材データを使わなくなる'],
      answer: spec.impact,
      hint: '修正後にどの値が安全に扱えるかを見ます。',
      explanation: spec.impact,
      optionExplanations: spec.impactOptionExplanations,
    },
  ];
  return common(spec, spec.code, steps.map(step => step.answer).join(' / '), spec.correctedCode, {
    questionType: 'debug-step',
    steps,
    correctedCode: spec.correctedCode,
    debugExplanation: {
      cause: spec.cause,
      fix: spec.fix,
      why: spec.why,
      impact: spec.impact,
      correctedCode: spec.correctedCode,
    },
  });
}

function assignment(spec) {
  return {
    questionId: spec.id,
    countryId: 'IN',
    worldId: spec.world,
    languageId: spec.languageId,
    factIds: [factIdFromQuestion(spec.id)],
    entityKeys: [entityKey(spec.title)],
    learningObjectiveId: `lo_${spec.id}`,
    programmingConceptIds: [conceptFor(spec)],
    cognitiveTask: spec.world === 'debug' ? 'identify-defect' : spec.world === 'execute' ? 'trace-data' : 'complete-syntax',
    progressionGroupId: '',
  };
}

function mission(title, questions, type) {
  return { type, title, unlock: { requiresStageClear: true }, questions };
}

const pyDecode = [
  { id: 'in_py_d01', languageId: 'python', world: 'decode', title: 'New Delhi as capital', titleJa: 'ニューデリー（首都）', category: 'geography-capital', objective: 'strings', source: SRC.newDelhi, summaryJa: 'ニューデリーはインドの首都です。', prompt: 'ニューデリーはインドの首都です。下のコードを実行すると India\'s capital is New Delhi. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("India\'s capital is " + capital + ".")', answer: '"New Delhi"', expectedOutput: "India's capital is New Delhi.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"New Delhi" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'in_py_d02', languageId: 'python', world: 'decode', title: 'Indian independence', titleJa: 'インドの独立', category: 'history', objective: 'integers', source: SRC.independence, summaryJa: 'インドは1947年に独立しました。', prompt: '年が1947のとき Independence:1947 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Independence:{year}"\nprint(label)', answer: '1947', expectedOutput: 'Independence:1947', hint: '整数は引用符なしで書きます。', explanation: 'year に1947を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'in_py_d03', languageId: 'python', world: 'decode', title: 'Constitution of India', titleJa: 'インド憲法の施行', category: 'politics-history', objective: 'condition', source: SRC.constitution, summaryJa: 'インド憲法は1950年に施行されました。', prompt: '年が1950のとき in effect と表示されるよう、if の条件を完成させてください。', code: 'year = 1950\nif ___BLANK___:\n    print("in effect")\nelse:\n    print("other")', answer: 'year == 1950', expectedOutput: 'in effect', hint: '値が等しいかは == で比較します。', explanation: 'year == 1950 が True になるため in effect が出力されます。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'in_py_d04', languageId: 'python', world: 'decode', title: 'Indian state and union territory sample labels', titleJa: 'インドの州・連邦直轄地のサンプルラベル', category: 'geography-administration', objective: 'list', source: SRC.states, summaryJa: 'インドにはマハーラーシュトラ州、タミル・ナードゥ州などのサンプル地域ラベルがあります。', prompt: 'リストから Rajasthan を取り出して表示するよう、添字を埋めてください。', code: 'states = ["Maharashtra", "Tamil Nadu", "Rajasthan"]\nprint(states[___BLANK___])', answer: '2', expectedOutput: 'Rajasthan', hint: 'Python のリストは0番目から数えます。', explanation: 'Rajasthan はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'in_py_d05', languageId: 'python', world: 'decode', title: 'Ganges River', titleJa: 'ガンジス川', category: 'geography-nature', objective: 'dictionary', source: SRC.ganges, summaryJa: 'ガンジス川は北インドと結びつく主要な河川です。', prompt: '辞書から region を取り出して Northern India と表示されるよう、キーを埋めてください。', code: 'river = {"name": "Ganges", "region": "Northern India"}\nprint(river[___BLANK___])', answer: '"region"', expectedOutput: 'Northern India', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"region" キーの値が Northern India です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_IN_python_01', languageId: 'python', world: 'decode', title: 'Taj Mahal', titleJa: 'タージ・マハル', category: 'world-heritage', objective: 'function', source: SRC.tajMahal, summaryJa: 'タージ・マハルはインドのアグラにあります。', prompt: '関数と条件を使い、city が Agra のときだけ Taj Mahal:Agra と表示するよう空欄を埋めてください。', code: 'name = "Taj Mahal"\ncity = "Agra"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Agra"', expectedOutput: 'Taj Mahal:Agra', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Agra と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_IN_python_02', languageId: 'python', world: 'decode', title: 'Qutb Minar', titleJa: 'クトゥブ・ミナール', category: 'world-heritage', objective: 'loop', source: SRC.qutbMinar, summaryJa: 'クトゥブ・ミナールはデリーにあります。', prompt: 'city が Delhi の記念碑名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'monuments = [\n    {"name": "Qutb Minar", "city": "Delhi"},\n    {"name": "Other", "city": "Agra"}\n]\nfor monument in monuments:\n    if ___BLANK___:\n        print(monument["name"])', answer: 'monument["city"] == "Delhi"', expectedOutput: 'Qutb Minar', hint: '各辞書の city キーを比較します。', explanation: 'Qutb Minar の city だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_IN_python_03', languageId: 'python', world: 'decode', title: 'Jaipur City', titleJa: 'ジャイプル市街', category: 'world-heritage', objective: 'dictionary', source: SRC.jaipur, summaryJa: 'ジャイプル市街はラジャスタン州にある世界遺産です。', prompt: '辞書と関数を使い、Jaipur:Rajasthan と表示するキーを埋めてください。', code: 'city = {"name": "Jaipur", "state": "Rajasthan"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(city))', answer: '"state"', expectedOutput: 'Jaipur:Rajasthan', hint: 'Rajasthan を取り出すキーを選びます。', explanation: '"state" キーの値が Rajasthan です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'in_py_e01', languageId: 'python', world: 'execute', title: 'Mumbai', titleJa: 'ムンバイ', category: 'geography-city', objective: 'function', source: SRC.mumbai, summaryJa: 'ムンバイはマハーラーシュトラ州の主要都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, state):\n    return f"{name}:{state}"\nprint(city_label("Mumbai", "Maharashtra"))', options: ['Mumbai:Maharashtra', 'Maharashtra:Mumbai', 'Mumbai', 'Error'], answer: 'Mumbai:Maharashtra', expectedOutput: 'Mumbai:Maharashtra', hint: 'return の f-string で name と state の順番を見ます。', explanation: 'name が先、state が後ろなので Mumbai:Maharashtra です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。', optionExplanations: { 'Mumbai:Maharashtra': '正解。f"{name}:{state}"はnameが先、stateが後なのでMumbai:Maharashtraになります。', 'Maharashtra:Mumbai': 'f文字列は{name}:{state}の順で定義されているため、nameが先になります。', 'Mumbai': 'f文字列にはstateの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は正しく連結されるため、例外は発生しません。' } },
  { id: 'in_py_e02', languageId: 'python', world: 'execute', title: 'Indian Institute of Science', titleJa: 'インド理科大学院', category: 'education', objective: 'dictionary', source: SRC.iisc, summaryJa: 'インド理科大学院はベンガルールにあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'institute = {"name": "Indian Institute of Science", "city": "Bengaluru"}\nprint(institute["city"])', options: ['Bengaluru', 'Indian Institute of Science', 'Mumbai', 'city'], answer: 'Bengaluru', expectedOutput: 'Bengaluru', hint: '"city" キーの値を見ます。', explanation: 'institute["city"] は Bengaluru を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。', optionExplanations: { 'Bengaluru': '正解。institute["city"]はcityキーの値であるBengaluruを返します。', 'Indian Institute of Science': 'これはnameキーの値で、コードが読んでいるのはcityキーなので出力されません。', 'Mumbai': 'institute辞書にはMumbaiという値は含まれておらず、cityの値はBengaluruです。', 'city': '"city"はキーの名前そのものであり、辞書アクセスはキーに対応する値を返します。' } },
  { id: 'in_py_e03', languageId: 'python', world: 'execute', title: 'Indian Railways sample routes', titleJa: 'インド鉄道のサンプル路線', category: 'transport', objective: 'loop', source: SRC.railways, summaryJa: 'サンプルとして Delhi–Agra、Mumbai–Pune などの路線ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'routes = ["Delhi-Agra", "Mumbai-Pune"]\nresult = ""\nfor route in routes:\n    result += route + "|"\nprint(result[:-1])', options: ['Delhi-Agra|Mumbai-Pune', 'Mumbai-Pune|Delhi-Agra', 'Delhi-Agra|', 'Mumbai-Pune'], answer: 'Delhi-Agra|Mumbai-Pune', expectedOutput: 'Delhi-Agra|Mumbai-Pune', hint: 'routes の並び順と最後の | の削除を見ます。', explanation: 'Delhi-Agra、Mumbai-Pune の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。', optionExplanations: { 'Delhi-Agra|Mumbai-Pune': '正解。routesの順にDelhi-Agra|Mumbai-Pune|となり、[:-1]で末尾の|だけが取り除かれます。', 'Mumbai-Pune|Delhi-Agra': 'forループはroutesの並び順（Delhi-Agraが先）通りに処理するため、順序が入れ替わることはありません。', 'Delhi-Agra|': '[:-1]は末尾1文字だけを除くスライスで、2件目のMumbai-Puneまで削ってしまうことはありません。', 'Mumbai-Pune': '1件目のDelhi-Agraも結果に含まれるため、2件目だけが残ることはありません。' } },
  { id: 'in_py_e04', languageId: 'python', world: 'execute', title: 'Thar Desert', titleJa: 'タール砂漠', category: 'geography-nature', objective: 'loop', source: SRC.tharDesert, summaryJa: 'タール砂漠はインド北西部と結びつく砂漠です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Thar", "northwest": True},\n    {"name": "Other", "northwest": False}\n]\nselected = [r["name"] for r in records if r["northwest"]]\nprint(selected[0])', options: ['Thar', 'Other', 'True', 'False'], answer: 'Thar', expectedOutput: 'Thar', hint: 'northwest が True の辞書だけ残します。', explanation: 'Thar の northwest だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。', optionExplanations: { 'Thar': '正解。northwestがTrueなのはTharだけなので、selectedにはTharのみが入りselected[0]はTharです。', 'Other': 'OtherのnorthwestはFalseなので、リスト内包表記の条件で除外されselectedには入りません。', 'True': 'selectedはname（文字列）のリストであり、northwestの真偽値そのものが出力されるわけではありません。', 'False': 'selected[0]はリストの先頭要素であるThar（文字列）であり、真偽値Falseが出力されることはありません。' } },
];

const pyFinalExecute = [
  { id: 'final_execute_IN_python_01', languageId: 'python', world: 'execute', title: 'Ajanta Caves', titleJa: 'アジャンター石窟群', category: 'world-heritage', objective: 'loop', source: SRC.ajanta, summaryJa: 'アジャンター石窟群はマハーラーシュトラ州にあります。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Cave 1", "state": "Maharashtra", "period": 200},\n    {"name": "Other", "state": "Rajasthan", "period": 100},\n    {"name": "Cave 2", "state": "Maharashtra", "period": 50}\n]\nselected = sorted([r for r in records if r["state"] == "Maharashtra"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Cave 2>Cave 1', 'Cave 1>Cave 2', 'Other>Cave 1', 'Cave 1>Other'], answer: 'Cave 2>Cave 1', expectedOutput: 'Cave 2>Cave 1', hint: 'state で絞ったあと period の昇順です。', explanation: 'Maharashtra は Cave 2(50) と Cave 1(200) で、昇順に Cave 2 が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。', optionExplanations: { 'Cave 2>Cave 1': '正解。state==Maharashtraで絞るとCave 1(200)とCave 2(50)が残り、period昇順でCave 2(50)が先になります。', 'Cave 1>Cave 2': 'periodの昇順で並べるとCave 2(50)がCave 1(200)より先になるため、この順序にはなりません。', 'Other>Cave 1': 'OtherのstateはRajasthanでMaharashtraではないため、フィルタ条件で除外されます。', 'Cave 1>Other': 'OtherはMaharashtraではないため除外され、また並び順もperiod昇順とは異なります。' } },
  { id: 'final_execute_IN_python_02', languageId: 'python', world: 'execute', title: 'Indian classical arts dataset', titleJa: 'インド古典舞踊のデータセット', category: 'culture', objective: 'dictionary', source: SRC.classicalArts, summaryJa: 'サンプルとして Bharatanatyam、Kathak、Odissi、Kathakali を扱います。', prompt: '辞書とリストから solo が True の件数を集計した結果を選んでください。', code: 'arts = [\n    {"name": "Bharatanatyam", "solo": True},\n    {"name": "Kathak", "solo": True},\n    {"name": "Odissi", "solo": False},\n    {"name": "Kathakali", "solo": False}\n]\ncount = sum(1 for art in arts if art["solo"])\nprint(count)', options: ['2', '4', '1', 'Bharatanatyam'], answer: '2', expectedOutput: '2', hint: 'solo が True の辞書だけ数えます。', explanation: 'Bharatanatyam、Kathak の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。', optionExplanations: { '2': '正解。soloがTrueなのはBharatanatyamとKathakの2件なので、countは2になります。', '4': 'artsには4件のデータがありますが、soloがTrueなのはそのうち2件だけです。', '1': 'BharatanatyamとKathakの両方がTrueなので、1件だけがカウントされるわけではありません。', 'Bharatanatyam': 'countはTrueの件数を表す整数で、art自体の名前が出力されるわけではありません。' } },
];

const pyDebug = [
  { id: 'in_py_b01', languageId: 'python', world: 'debug', title: 'Indian rupee formatting', titleJa: 'インドルピーの表示', category: 'finance', objective: 'strings', source: SRC.rupee, summaryJa: 'インドの通貨はインドルピーです。', prompt: '金額を ₹10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("₹" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、₹10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"₹{amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。', causeOptionExplanations: { '文字列 amount に数値 0 を + で足している': '正解。amountは文字列"10.5"で、文字列に数値0を+で足すことはできずTypeErrorになります。', '出力文の文字列だけが間違っている': '"₹"の部分の書き方自体は正しく、問題はamountと0の加算部分にあります。', 'データの件数が不足している': 'amountには値が1つ入っており、件数ではなく型の不一致が原因です。' }, fixOptionExplanations: { 'amount を float にして、f-string で小数2桁に整形する': '正解。floatに変換しf"{amount:.2f}"とすれば、₹10.50のように整形できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '金額データを無視して固定文字列を出すと、実際の金額が反映されません。' }, impactOptionExplanations: { '数値計算と表示形式を分け、₹10.50 と安定して表示できる': '正解。floatとf-stringの書式指定により、計算と表示形式を分けて安定して表示できます。', '常に例外を出して停止する': '修正後はamountがfloat型になるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'amountのデータはそのまま使われ続けます。修正は型と表示形式だけです。' } },
  { id: 'in_py_b02', languageId: 'python', world: 'debug', title: 'Indian postal-code style labels', titleJa: 'インド郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postal, summaryJa: 'インドの郵便番号（PINコード）は6桁で、先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'pincode = 1001\nprint(pincode)', cause: '郵便番号を数値として保存すると先頭ゼロを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号も失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'pincode = "001001"\nprint(pincode)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDや郵便番号は計算対象ではなく文字列データとして扱います。', causeOptionExplanations: { '郵便番号を数値として保存すると先頭ゼロを保持できない': '正解。1001を整数として保存すると先頭の0が情報として失われ、本来の6桁表記001001になりません。', '出力文の文字列だけが間違っている': 'print(pincode)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'pincodeには値が1つ入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { '郵便番号を最初から文字列として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した6桁表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際のPINコードデータを無視して固定文字列を出すと、正しい番号が表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む郵便番号も失わずに表示できる': '正解。文字列として保存すれば、先頭ゼロを含む6桁表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': 'PINコードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'in_py_b03', languageId: 'python', world: 'debug', title: 'Indian state abbreviation lookup', titleJa: '州略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.states, summaryJa: 'インドの州には MH、TN、RJ、KL、DL などの略号があります。', prompt: '略号 RJ から州名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"MH": "Maharashtra", "TN": "Tamil Nadu"}\ncode = "RJ"\nprint(abbreviations[code])', cause: '辞書に RJ のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"MH": "Maharashtra", "TN": "Tamil Nadu", "RJ": "Rajasthan"}\ncode = "RJ"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'RJ というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。', causeOptionExplanations: { '辞書に RJ のキーが登録されていないのに直接アクセスしている': '正解。abbreviationsにはMHとTNしか登録されておらず、RJを角括弧で読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(abbreviations[code])自体の書き方は正しく、問題はキーが存在しないことです。', 'データの件数が不足している': '辞書には2件のデータがあり、件数不足ではなくRJというキーが未登録であることが原因です。' }, fixOptionExplanations: { 'abbreviations.get(code, "unknown") のように安全に取得する': '正解。getにデフォルト値を渡すことで、キーが無い場合でも例外を出さずに"unknown"を返せます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '州名データを無視して固定文字列にすると、実際に登録されている州の名前も正しく取得できなくなります。' }, impactOptionExplanations: { '登録されていない略号でも例外を出さずに処理できる': '正解。get(code, "unknown")により、未登録の略号でもKeyErrorを起こさず安全に処理を続けられます。', '常に例外を出して停止する': '修正後はgetのデフォルト値によりKeyError自体が発生しなくなります。', '題材データを使わなくなる': '登録済みの州データはそのまま使われ続けます。修正はキーが無いときの取得方法だけです。' } },
];

const pyFinalDebug = [
  { id: 'final_debug_IN_python_01', languageId: 'python', world: 'debug', title: 'Western Ghats', titleJa: '西ガーツ山脈', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.westernGhats, summaryJa: '西ガーツ山脈はインドにある世界遺産です。', prompt: '生息種数データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Western Ghats", "species_count": "325"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["species_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'species_count がない辞書でも record["species_count"] を直接読んでいる', fix: 'record.get("species_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Western Ghats", "species_count": "325"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("species_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に species_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。', causeOptionExplanations: { 'species_count がない辞書でも record["species_count"] を直接読んでいる': '正解。2件目の辞書にはspecies_countキーが無く、角括弧で直接読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(large)自体の書き方は正しく、問題はループ内でのキーアクセスです。', 'データの件数が不足している': 'recordsには2件のデータがあり、件数不足ではなく2件目にキーが無いことが原因です。' }, fixOptionExplanations: { 'record.get("species_count") を確認してから int に変換する': '正解。getでNoneかどうか確認してからintに変換すれば、キーが無い行を安全に読み飛ばせます。', '条件を削除する': 'if文の条件を削除すると、すべての行でint変換を試みてしまい同じエラーが起きます。', 'すべての値を同じ文字列にする': '生息種数データを無視して固定文字列にすると、実際の判定が正しく行えなくなります。' }, impactOptionExplanations: { '欠損行を飛ばし、数値化できる行だけ判定できる': '正解。getとNone判定により、species_countが無い行を飛ばして安全に判定できます。', '常に例外を出して停止する': '修正後はキーが無い場合にNoneとして扱われるため、KeyError自体が発生しなくなります。', '題材データを使わなくなる': 'Western Ghatsなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsDecode = [
  { id: 'in_js_d01', languageId: 'javascript', world: 'decode', title: 'Parliament House in New Delhi', titleJa: '国会議事堂（ニューデリー）', category: 'politics-architecture', objective: 'object', source: SRC.parliament, summaryJa: 'インドの国会議事堂はニューデリーにあります。', prompt: 'オブジェクトから city を取り出して New Delhi と表示されるよう、空欄を埋めてください。', code: 'const building = { name: "Parliament House", city: "New Delhi" };\nconsole.log(building.___BLANK___);', answer: 'city', expectedOutput: 'New Delhi', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'building.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'in_js_d02', languageId: 'javascript', world: 'decode', title: 'Chennai and the Coromandel Coast', titleJa: 'チェンナイとコロマンデル海岸', category: 'geography', objective: 'strings', source: SRC.chennai, summaryJa: 'チェンナイはインド南東部の沿岸に位置します。', prompt: 'テンプレートリテラルで Chennai:southeastern coast と表示されるよう空欄を埋めてください。', code: 'const city = "Chennai";\nconst position = ___BLANK___;\nconsole.log(`${city}:${position}`);', answer: '"southeastern coast"', expectedOutput: 'Chennai:southeastern coast', hint: 'position に入る文字列を引用符付きで書きます。', explanation: '"southeastern coast" を入れると ${position} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'in_js_d03', languageId: 'javascript', world: 'decode', title: 'Indian flag colors', titleJa: 'インド国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'インド国旗はサフラン・白・緑の3色で構成されています。', prompt: '配列から green を取り出す添字を埋めてください。', code: 'const colors = ["saffron", "white", "green"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'green', hint: '配列は0番目から数えます。', explanation: 'green は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'in_js_d04', languageId: 'javascript', world: 'decode', title: 'Indian transport mode labels', titleJa: 'インドの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'インドには鉄道、道路、航空、メトロなどの交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'in_js_d05', languageId: 'javascript', world: 'decode', title: 'Gateway of India', titleJa: 'インド門', category: 'monument', objective: 'loop', source: SRC.gatewayOfIndia, summaryJa: 'インド門はムンバイにあります。', prompt: 'for...of で city が Mumbai の記念碑だけを表示するよう、条件の空欄を埋めてください。', code: 'const monuments = [\n  { name: "Gateway of India", city: "Mumbai" },\n  { name: "Other", city: "Chennai" }\n];\nfor (const monument of monuments) {\n  if (___BLANK___) console.log(monument.name);\n}', answer: 'monument.city === "Mumbai"', expectedOutput: 'Gateway of India', hint: '各 monument の city を比較します。', explanation: 'Gateway of India の city だけが Mumbai なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_IN_javascript_01', languageId: 'javascript', world: 'decode', title: 'Red Fort Complex', titleJa: 'レッド・フォート（ラール・キラー）複合体', category: 'world-heritage', objective: 'array', source: SRC.redFort, summaryJa: 'レッド・フォート複合体はデリーにあります。', prompt: 'array methods で Delhi の record を取り出してください。', code: 'const forts = [{name:"Red Fort", city:"Delhi"}, {name:"Other", city:"Agra"}];\nconst found = forts.filter(fort => fort.city === ___BLANK___)[0];\nconsole.log(found.name);', answer: '"Delhi"', expectedOutput: 'Red Fort', hint: 'city と比較する文字列を引用符付きで書きます。', explanation: 'city が Delhi の要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_IN_javascript_02', languageId: 'javascript', world: 'decode', title: 'Ellora Caves', titleJa: 'エローラ石窟群', category: 'world-heritage', objective: 'object', source: SRC.ellora, summaryJa: 'エローラ石窟群はマハーラーシュトラ州にあります。', prompt: 'find で Ellora の record を探す条件を埋めてください。', code: 'const records = [{name:"Ajanta", state:"Maharashtra"}, {name:"Ellora", state:"Maharashtra"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.state);', answer: '"Ellora"', expectedOutput: 'Maharashtra', hint: 'name と一致する文字列を書きます。', explanation: 'Ellora の record が見つかり、state が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_IN_javascript_03', languageId: 'javascript', world: 'decode', title: 'Indian science institutions', titleJa: 'インドの科学研究機関', category: 'science-institution', objective: 'class', source: SRC.scienceInstitutions, summaryJa: 'サンプルとして ISRO、IISc、BARC を扱います。', prompt: 'class のインスタンスを map して ISRO:agency と表示してください。', code: 'class Institution {\n  constructor(name, kind) { this.name = name; this.kind = kind; }\n}\nconst items = [new Institution("ISRO", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.kind}`).join(","));', answer: '"agency"', expectedOutput: 'ISRO:agency', hint: 'constructor の kind に入る文字列です。', explanation: 'kind に agency が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'in_js_e01', languageId: 'javascript', world: 'execute', title: 'Yoga as cultural practice', titleJa: '文化的実践としてのヨガ', category: 'culture', objective: 'array', source: SRC.yoga, summaryJa: 'ヨガはインドに歴史的な起源を持ちます。', prompt: 'map と join の出力を選んでください。', code: 'const practices = ["yoga"];\nconst label = practices.map(p => p.toUpperCase()).join("-");\nconsole.log(label);', options: ['YOGA', 'yoga', 'Y-O', 'Yoga'], answer: 'YOGA', expectedOutput: 'YOGA', hint: '各要素を大文字化します。', explanation: 'yoga が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。', optionExplanations: { 'YOGA': '正解。toUpperCase()でyogaがすべて大文字になり、要素が1つなのでjoinの区切り文字は使われずYOGAになります。', 'yoga': 'toUpperCase()が適用されるため、小文字のままのyogaが出力されることはありません。', 'Y-O': 'practicesの要素は"yoga"という1つの文字列全体で、文字単位に分割されて区切られるわけではありません。', 'Yoga': 'toUpperCase()は文字列全体を大文字化するため、先頭だけが大文字になることはありません。' } },
  { id: 'in_js_e02', languageId: 'javascript', world: 'execute', title: 'Brahmaputra River sample segments', titleJa: 'ブラマプトラ川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.brahmaputra, summaryJa: 'ブラマプトラ川はインド北東部と結びつく主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 50, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['100', '80', '30', '305020'], answer: '100', expectedOutput: '100', hint: '数値を左から足していきます。', explanation: '30 + 50 + 20 = 100 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。', optionExplanations: { '100': '正解。reduceは初期値0から30,50,20を順に足していくので、合計は100になります。', '80': '30+50の途中経過にとどまった値で、最後の20をまだ足し終えていません。', '30': '配列の最初の要素だけの値で、reduceはすべての要素を順に加算するため最終結果はこれだけではありません。', '305020': 'reduceのコールバックは+演算子で数値同士を足しているため、文字列のように連結されることはありません。' } },
  { id: 'in_js_e03', languageId: 'javascript', world: 'execute', title: 'National Museum, New Delhi', titleJa: 'ニューデリーの国立博物館', category: 'museum', objective: 'object', source: SRC.nationalMuseum, summaryJa: '国立博物館はニューデリーにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const museum = { city: "New Delhi", galleries: ["sculpture", "manuscripts"] };\nlet result = museum.city;\nfor (const item of museum.galleries) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['New Delhi:sculpture:manuscripts', 'sculpture:manuscripts:New Delhi', 'New Delhi', 'manuscripts:sculpture'], answer: 'New Delhi:sculpture:manuscripts', expectedOutput: 'New Delhi:sculpture:manuscripts', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに sculpture、manuscripts が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。', optionExplanations: { 'New Delhi:sculpture:manuscripts': '正解。resultはNew Delhiから始まり、galleriesの順にsculpture、manuscriptsが追加されます。', 'sculpture:manuscripts:New Delhi': 'resultはmuseum.cityで初期化されるため、New Delhiが先頭に来てgalleriesの要素はその後に追加されます。', 'New Delhi': 'for...ofループでgalleriesの2要素がresultに追加されるため、New Delhiだけで終わることはありません。', 'manuscripts:sculpture': 'galleriesの順序はsculptureが先でmanuscriptsが後であり、また先頭のNew Delhiも結果に含まれます。' } },
  { id: 'in_js_e04', languageId: 'javascript', world: 'execute', title: 'Konark Sun Temple', titleJa: 'コナーラクの太陽神殿', category: 'world-heritage', objective: 'function', source: SRC.konark, summaryJa: 'コナーラクの太陽神殿はオディシャ州にあります。', prompt: '関数と条件の戻り値を選んでください。', code: 'function templeLabel(state) {\n  return state === "Odisha" ? "Konark" : "other";\n}\nconsole.log(templeLabel("Odisha"));', options: ['Konark', 'other', 'Odisha', 'true'], answer: 'Konark', expectedOutput: 'Konark', hint: '"Odisha" === "Odisha" の判定を見ます。', explanation: '条件が true なので "Konark" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。', optionExplanations: { 'Konark': '正解。state === "Odisha"がtrueになるため、三項演算子は"Konark"を返します。', 'other': '条件が一致してtrueになるため、falseの場合の値である"other"は返りません。', 'Odisha': 'state自体が表示されるのではなく、三項演算子が返す"Konark"という固定の文字列が表示されます。', 'true': '関数は文字列"Konark"を返しており、条件式の真偽値そのものを返しているわけではありません。' } },
];

const jsFinalExecute = [
  { id: 'final_execute_IN_javascript_01', languageId: 'javascript', world: 'execute', title: 'Sundarbans National Park', titleJa: 'スンダルバンス国立公園', category: 'world-heritage-nature', objective: 'array', source: SRC.sundarbans, summaryJa: 'スンダルバンス国立公園はインドの西ベンガル地域にあります。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const parks = [\n  { name: "Sundarbans", region: "West Bengal", area: 5 },\n  { name: "Other", region: "Odisha", area: 3 },\n  { name: "Mangrove Block", region: "West Bengal", area: 2 }\n];\nconst names = parks.filter(p => p.region === "West Bengal").map(p => p.name).sort();\nconsole.log(names.join(">"));', options: ['Mangrove Block>Sundarbans', 'Sundarbans>Mangrove Block', 'Other>Sundarbans', 'Other>Mangrove Block>Sundarbans'], answer: 'Mangrove Block>Sundarbans', expectedOutput: 'Mangrove Block>Sundarbans', hint: 'region で絞ったあと、名前をアルファベット順にします。', explanation: 'Mangrove Block と Sundarbans が残り、sort で Mangrove Block が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。', optionExplanations: { 'Mangrove Block>Sundarbans': '正解。West Bengalで絞るとMangrove BlockとSundarbansが残り、sortのアルファベット順でMangrove Blockが先になります。', 'Sundarbans>Mangrove Block': 'sort()はアルファベット順に並べ替えるため、元の配列の出現順（Sundarbansが先）のままにはなりません。', 'Other>Sundarbans': 'OtherのregionはOdishaでWest Bengalではないため、filterの条件で除外されます。', 'Other>Mangrove Block>Sundarbans': 'OtherはWest Bengalではないためfilterで除外され、3件すべてが残ることはありません。' } },
  { id: 'final_execute_IN_javascript_02', languageId: 'javascript', world: 'execute', title: 'Indian ports and trade-route sample data', titleJa: 'インドの港湾・貿易路サンプルデータ', category: 'transport', objective: 'object', source: SRC.ports, summaryJa: 'サンプルとして Mumbai、Chennai、Kolkata、Kochi の港湾データを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const ports = [{name:"Mumbai", routes:[2,3]}, {name:"Chennai", routes:[5]}];\nconst total = ports.reduce((sum, port) => sum + port.routes.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Mumbai-Chennai'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Mumbai は5、Chennai は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。', optionExplanations: { '10': '正解。Mumbaiのroutes(2+3=5)とChennaiのroutes(5)を外側のreduceで合計すると5+5=10になります。', '5': 'これはMumbaiまたはChennaiどちらか1港分の内側のreduceの結果で、外側のreduceでの全体合計ではありません。', '3': 'これはMumbaiのroutes配列の一部の値[3]にすぎず、内側・外側どちらのreduceの最終結果でもありません。', 'Mumbai-Chennai': '+演算子は数値の加算として使われているため、港名が文字列として連結されることはありません。' } },
];

const jsDebug = [
  { id: 'in_js_b01', languageId: 'javascript', world: 'debug', title: 'Indian phone-number formatting', titleJa: 'インドの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてインドの携帯電話番号は10桁で構成されるものとして扱います。', prompt: '10桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "9876543210";\nif (digits.length === 9) {\n  console.log(`${digits.slice(0,5)} ${digits.slice(5)}`);\n}', cause: '10桁の番号なのに length === 9 と判定している', fix: 'length === 10 に修正してから slice する', impact: '10桁の番号を正しく整形できる', why: 'サンプル digits は10文字だからです。', correctedCode: 'const digits = "9876543210";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,5)} ${digits.slice(5)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が9のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。', causeOptionExplanations: { '10桁の番号なのに length === 9 と判定している': '正解。digitsは10文字の文字列ですが、条件がlength === 9なのでif文の中に入らず何も出力されません。', '出力文の文字列だけが間違っている': 'console.logとテンプレートリテラルの書き方自体は正しく、問題はif文の条件にあります。', 'データの件数が不足している': 'digitsは"9876543210"という10文字のデータを正しく持っており、件数不足ではありません。' }, fixOptionExplanations: { 'length === 10 に修正してから slice する': '正解。digitsの実際の長さである10に条件を合わせれば、if文の中に入りslice処理が実行されます。', '条件を削除する': '条件を削除すると桁数チェックが効かなくなり、想定外の長さの番号でも整形してしまいます。', 'すべての値を同じ文字列にする': '電話番号データを無視して固定文字列にすると、実際の番号が反映されません。' }, impactOptionExplanations: { '10桁の番号を正しく整形できる': '正解。条件をlength === 10に直すことで、10桁の番号が正しく区切って表示されるようになります。', '常に例外を出して停止する': 'この修正は条件式の値を直すだけで、例外を発生させるものではありません。', '題材データを使わなくなる': 'digitsの電話番号データはそのまま使われ続けます。修正は判定する桁数だけです。' } },
  { id: 'in_js_b02', languageId: 'javascript', world: 'debug', title: 'Delhi and Gurugram labels', titleJa: 'デリーとグルガーオン', category: 'geography-city', objective: 'object', source: SRC.delhiGurugram, summaryJa: 'デリーとグルガーオンは首都圏として扱われるサンプルラベルです。', prompt: 'region が NCR の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Delhi", region: "NCR" }, { name: "Gurugram", region: "NCR" }];\nconst labels = cities.filter(city => city.area === "NCR").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには region があるのに area を参照している', fix: 'city.region === "NCR" に修正する', impact: 'Delhi と Gurugram の両方を正しく選べる', why: '存在しない area は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Delhi", region: "NCR" }, { name: "Gurugram", region: "NCR" }];\nconst labels = cities.filter(city => city.region === "NCR").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。', causeOptionExplanations: { 'データには region があるのに area を参照している': '正解。各オブジェクトはregionプロパティを持ちますが、フィルタ条件はcity.areaを見ているため常にundefinedとなり一致しません。', '出力文の文字列だけが間違っている': 'console.logとjoinの書き方自体は正しく、問題はfilterの条件にあります。', 'データの件数が不足している': 'citiesにはDelhiとGurugramの2件があり、件数不足ではなくプロパティ名の不一致が原因です。' }, fixOptionExplanations: { 'city.region === "NCR" に修正する': '正解。実際に存在するregionプロパティを参照することで、DelhiとGurugramの両方が正しく一致します。', '条件を削除する': '条件を削除するとフィルタの意味がなくなり、絞り込みたい意図が反映されません。', 'すべての値を同じ文字列にする': '都市データを無視して固定文字列にすると、実際のregionに基づく絞り込みができなくなります。' }, impactOptionExplanations: { 'Delhi と Gurugram の両方を正しく選べる': '正解。正しいプロパティ名regionで比較することで、NCRに属する両都市が正しく選ばれます。', '常に例外を出して停止する': '存在しないプロパティを読んでもJavaScriptではundefinedになるだけで、例外は発生しません。', '題材データを使わなくなる': 'DelhiとGurugramのデータはそのまま使われ続けます。修正は参照するプロパティ名だけです。' } },
  { id: 'in_js_b03', languageId: 'javascript', world: 'debug', title: 'Heritage-site record lookup', titleJa: '世界遺産レコードの参照', category: 'world-heritage', objective: 'object', source: SRC.heritageLookup, summaryJa: 'サンプルの世界遺産データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Heritage Site" };\nconsole.log(record.detail.state.toUpperCase());', cause: 'record.detail が undefined のまま state を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Heritage Site" };\nconst state = record.detail?.state ?? "unknown";\nconsole.log(state.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。', causeOptionExplanations: { 'record.detail が undefined のまま state を読んでいる': '正解。recordにはdetailプロパティが無いためrecord.detailはundefinedで、その先のstateを読むとTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logの書き方自体は正しく、問題はrecord.detail.stateというプロパティアクセスの部分です。', 'データの件数が不足している': 'recordは1件のオブジェクトとして正しく存在しており、件数不足ではなくdetailプロパティが無いことが原因です。' }, fixOptionExplanations: { 'optional chaining と代替値を使う': '正解。record.detail?.state ?? "unknown" とすることで、detailが無くてもエラーにならず代替値を使えます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'レコードのデータを無視して固定文字列にすると、本来の名前や州の情報が表示されなくなります。' }, impactOptionExplanations: { 'detail がないレコードでも停止せず unknown を表示できる': '正解。optional chainingと??により、detailが無い場合でも例外を起こさずunknownとして処理を続けられます。', '常に例外を出して停止する': '修正後はdetailが無くても安全に処理されるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'nameなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsFinalDebug = [
  { id: 'final_debug_IN_javascript_01', languageId: 'javascript', world: 'debug', title: 'Chhatrapati Shivaji Terminus', titleJa: 'チャトラパティ・シヴァージー・ターミナス', category: 'world-heritage-transport', objective: 'object', source: SRC.shivajiTerminus, summaryJa: 'チャトラパティ・シヴァージー・ターミナスはムンバイにあります。', prompt: 'ターミナスのレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Chhatrapati Shivaji Terminus", city: "Mumbai", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.city ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Chhatrapati Shivaji Terminus", city: "Mumbai", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。', causeOptionExplanations: { 'heritage を heritag と誤記し、details も存在確認なしで読んでいる': '正解。site.heritagは誤記でundefinedになりif文が実行されず、さらにsite.detailsも存在しないため次の行でTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logとtoUpperCaseの呼び方自体は正しく、問題はプロパティ名の誤記とdetailsへの未確認アクセスです。', 'データの件数が不足している': 'siteは1つのオブジェクトとして正しく定義されており、件数不足ではなくプロパティ名と存在確認の問題です。' }, fixOptionExplanations: { 'site.heritage を比較し、site.details?.city ?? "unknown" のように安全に読む': '正解。正しいプロパティ名heritageで判定し、details?.city ?? "unknown" で欠損にも安全に対応できます。', '条件を削除する': '条件を削除すると、heritageがtrueかどうかに関わらず常に名前が表示されてしまい、意図と異なります。', 'すべての値を同じ文字列にする': 'ターミナスのデータを無視して固定文字列にすると、実際の名前や都市の情報が表示されなくなります。' }, impactOptionExplanations: { '正しい boolean 判定ができ、欠損 details があっても停止しない': '正解。プロパティ名を直し安全なアクセスにすることで、正しい判定と欠損時の継続動作の両方が実現します。', '常に例外を出して停止する': '修正後はoptional chainingにより欠損があってもTypeErrorは発生しなくなります。', '題材データを使わなくなる': 'name・city・heritageなどの既存データはそのまま使われ続けます。修正はプロパティ名と読み取り方だけです。' } },
];

const javaDecode = [
  { id: 'in_java_d01', languageId: 'java', world: 'decode', title: 'Supreme Court of India', titleJa: 'インド最高裁判所', category: 'politics', objective: 'strings', source: SRC.supremeCourt, summaryJa: 'インド最高裁判所はニューデリーにあります。', prompt: 'Supreme Court:New Delhi と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String institution = "Supreme Court";\n    String city = ___BLANK___;\n    System.out.println(institution + ":" + city);\n  }\n}', answer: '"New Delhi"', expectedOutput: 'Supreme Court:New Delhi', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "New Delhi" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'in_java_d02', languageId: 'java', world: 'decode', title: 'Republic Day', titleJa: '共和国記念日', category: 'history', objective: 'numbers', source: SRC.constitution, summaryJa: 'インド憲法は1950年1月26日に施行されました。', prompt: 'Republic:1950 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Republic:" + year;\n    System.out.println(label);\n  }\n}', answer: '1950', expectedOutput: 'Republic:1950', hint: 'int なので引用符なしの数値です。', explanation: 'year に1950を入れると文字列連結で Republic:1950 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'in_java_d03', languageId: 'java', world: 'decode', title: 'Indian independence year', titleJa: 'インド独立年', category: 'history', objective: 'condition', source: SRC.independence, summaryJa: 'インドは1947年に独立しました。', prompt: 'year が1947のとき Independence と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1947;\n    if (___BLANK___) {\n      System.out.println("Independence");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1947', expectedOutput: 'Independence', hint: '値が等しいかは == で比較します。', explanation: 'year == 1947 が true になるため Independence が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'in_java_d04', languageId: 'java', world: 'decode', title: 'Indian communication mode labels', titleJa: 'インドの交通・通信手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'インドでは鉄道・道路・航空・港湾など複数の交通手段が使われています。', prompt: 'mode が air のとき Air transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "air";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Air transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"air"', expectedOutput: 'Air transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "air" が一致し、Air transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'in_java_d05', languageId: 'java', world: 'decode', title: 'Indian regions sample', titleJa: 'インドの地域区分サンプル', category: 'geography', objective: 'array', source: SRC.states, summaryJa: 'サンプルとして North、South、East、West、Northeast の地域ラベルを扱います。', prompt: 'regions 配列を拡張 for で読み、Northeast だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"North", "Northeast", "South"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Northeast")', expectedOutput: 'Northeast', hint: 'String の内容比較は equals です。', explanation: 'region が Northeast のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_IN_java_01', languageId: 'java', world: 'decode', title: 'Mountain Railways of India', titleJa: 'インドの山岳鉄道群', category: 'world-heritage', objective: 'method', source: SRC.mountainRailways, summaryJa: 'インドの山岳鉄道群は世界遺産です。', prompt: 'category が railway のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("railway")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"railway"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"railway" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_IN_java_02', languageId: 'java', world: 'decode', title: 'Great Himalayan National Park', titleJa: 'グレート・ヒマラヤ国立公園', category: 'world-heritage-nature', objective: 'collections', source: SRC.greatHimalayan, summaryJa: 'グレート・ヒマラヤ国立公園保全地域はヒマーチャル・プラデーシュ州にあります。', prompt: 'ArrayList から protected の park だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Park {\n  String name;\n  boolean protectedArea;\n  Park(String n, boolean p) { name = n; protectedArea = p; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Park> parks = new ArrayList<>();\n    parks.add(new Park("Great Himalayan", true));\n    parks.add(new Park("Other", false));\n    for (Park p : parks) {\n      if (___BLANK___) System.out.println(p.name);\n    }\n  }\n}', answer: 'p.protectedArea', expectedOutput: 'Great Himalayan', hint: 'protectedArea フィールドが true の record だけです。', explanation: 'Great Himalayan の protectedArea だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_IN_java_03', languageId: 'java', world: 'decode', title: 'Nalanda Mahavihara', titleJa: 'ナーランダー僧院遺跡', category: 'world-heritage', objective: 'class', source: SRC.nalanda, summaryJa: 'ナーランダー僧院遺跡はビハール州にあります。', prompt: 'HashMap から Nalanda の州を取り出し Nalanda:Bihar と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String state;\n  Site(String n, String s) { name = n; state = s; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("Nalanda", new Site("Nalanda", "Bihar"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.state);\n  }\n}', answer: '"Nalanda"', expectedOutput: 'Nalanda:Bihar', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Nalanda キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'in_java_e01', languageId: 'java', world: 'execute', title: 'C. V. Raman', titleJa: 'C. V. ラマン', category: 'science-history', objective: 'strings', source: SRC.ravan, summaryJa: 'C. V. ラマンはノーベル物理学賞を受賞したインドの物理学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "C. V. Raman";\n    if (scientist.equals("C. V. Raman")) System.out.println("physics");\n    else System.out.println("other");\n  }\n}', options: ['physics', 'other', 'C. V. Raman', 'true'], answer: 'physics', expectedOutput: 'physics', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので physics が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。', optionExplanations: { 'physics': '正解。scientist.equals("C. V. Raman")はtrueになるため、if節のphysicsが出力されます。', 'other': 'equalsによる文字列内容の比較はtrueになるため、else節のotherは実行されません。', 'C. V. Raman': '出力されるのはif/elseで選ばれた固定文字列physicsまたはotherであり、scientistの値そのものではありません。', 'true': 'if文の条件式の評価結果ではなく、その分岐内で実行されるSystem.out.printlnの文字列が出力されます。' } },
  { id: 'in_java_e02', languageId: 'java', world: 'execute', title: 'Indian time zone sample', titleJa: 'インドの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'インドはインド標準時（IST）を使用しています。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 5));\n  }\n}', options: ['15', '10', '5', '50'], answer: '15', expectedOutput: '15', hint: '10 + 5 を計算します。', explanation: 'UTC 10時に5を足すので15です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。', optionExplanations: { '15': '正解。localHour(10, 5)はutcHour + offsetを計算するため、10 + 5 = 15が返ります。', '10': 'これはutcHourの値だけで、offsetの5を足す前の値です。', '5': 'これはoffset引数の値だけで、utcHourの10を足す前の値です。', '50': 'returnの式はutcHour + offsetという加算であり、10 * 5のような乗算ではありません。' } },
  { id: 'in_java_e03', languageId: 'java', world: 'execute', title: 'Indian Space Research Organisation', titleJa: 'インド宇宙研究機関（ISRO）', category: 'science', objective: 'collections', source: SRC.isro, summaryJa: 'ISRO はインドの宇宙機関です。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("ISRO");\n    labels.add("space");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['ISRO>space', 'space>ISRO', 'ISRO>', 'space'], answer: 'ISRO>space', expectedOutput: 'ISRO>space', hint: '追加した順に result へ入ります。', explanation: 'ISRO、space の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。', optionExplanations: { 'ISRO>space': '正解。labelsにはISRO、spaceの順で追加されており、result"ISRO>space>"からsubstringで末尾の>を削るとISRO>spaceになります。', 'space>ISRO': '拡張forループはlabelsに追加された順（ISROが先）に処理するため、順序が入れ替わることはありません。', 'ISRO>': '拡張forループはspaceの分も処理するため、ISROだけで止まることはありません。', 'space': 'ISROも結果に含まれるため、2件目のspaceだけが残ることはありません。' } },
  { id: 'in_java_e04', languageId: 'java', world: 'execute', title: 'Indian script label sample', titleJa: 'インドの文字体系ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.script, summaryJa: 'サンプルとしてインドの文字体系に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Devanagari extends ScriptType {\n  @Override\n  String label() { return "Devanagari"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Devanagari();\n    System.out.println(type.label());\n  }\n}', options: ['Devanagari', 'script', 'ScriptType', 'error'], answer: 'Devanagari', expectedOutput: 'Devanagari', hint: '実体は Devanagari です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。', optionExplanations: { 'Devanagari': '正解。typeの実体（実際に生成されたオブジェクト）はDevanagariなので、overrideされたlabel()が呼ばれます。', 'script': '変数の宣言型はScriptTypeですが、実行時にはDevanagariのoverrideされたメソッドが呼ばれるため親クラスの値は使われません。', 'ScriptType': 'これは型の名前であり、label()メソッドが返す文字列ではありません。', 'error': 'DevanagariはScriptTypeを正しく継承してoverrideしているため、コンパイルも実行も問題なく行われます。' } },
];

const javaFinalExecute = [
  { id: 'final_execute_IN_java_01', languageId: 'java', world: 'execute', title: 'Indian state capital records', titleJa: 'インドの州都レコード', category: 'geography-administration', objective: 'collections', source: SRC.states, summaryJa: 'サンプルとして Maharashtra–Mumbai、Tamil Nadu–Chennai、Rajasthan–Jaipur の州都データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい州都を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> capitals = new HashMap<>();\n    capitals.put("Mumbai", 9);\n    capitals.put("Jaipur", 1);\n    String result = "";\n    for (String city : capitals.keySet()) if (isLarge(capitals.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Mumbai', 'Jaipur', 'MumbaiJaipur', '9'], answer: 'Mumbai', expectedOutput: 'Mumbai', hint: 'population が4以上の city だけです。', explanation: 'Mumbai の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。', optionExplanations: { 'Mumbai': '正解。isLarge(9)はtrueでisLarge(1)はfalseなので、population>=4を満たすMumbaiだけがresultに追加されます。', 'Jaipur': 'Jaipurのpopulationは1でisLarge(1)はfalseになるため、resultには追加されません。', 'MumbaiJaipur': 'isLargeの条件を満たすのはMumbaiだけで、Jaipurは条件を満たさないため連結されません。', '9': 'resultにはisLargeの条件を満たしたcity名（文字列）が入り、population自体の数値が出力されるわけではありません。' } },
  { id: 'final_execute_IN_java_02', languageId: 'java', world: 'execute', title: 'Indian research observatory records', titleJa: 'インドの研究観測拠点レコード', category: 'science-geography', objective: 'collections', source: SRC.isro, summaryJa: 'インドの研究機関による観測データのサンプルを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Bengaluru", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Bengaluru:active', 'Closed:active', 'Bengaluru', 'active:Bengaluru'], answer: 'Bengaluru:active', expectedOutput: 'Bengaluru:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Bengaluru だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。', optionExplanations: { 'Bengaluru:active': '正解。Bengaluruのactiveはtrueなのでif条件を満たし、label()が呼ばれてBengaluru:activeが表示されます。', 'Closed:active': 'Closedのactiveはfalseなのでif条件を満たさず、label()は呼ばれず出力されません。', 'Bengaluru': 'label()はname + ":active"を返すため、nameだけでなく":active"も含めて出力されます。', 'active:Bengaluru': 'label()はname + ":active"の順で連結しているため、nameが先、":active"が後になります。' } },
];

const javaDebug = [
  { id: 'in_java_b01', languageId: 'java', world: 'debug', title: 'Indian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.states, summaryJa: 'インドの都市コードは DEL、BOM、MAA、BLR などです。', prompt: '都市コード BLR を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BLR");\n    if (code == "BLR") System.out.println("Bengaluru");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("BLR") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BLR");\n    if (code.equals("BLR")) System.out.println("Bengaluru");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。', causeOptionExplanations: { 'String の内容比較に == を使っている': '正解。new String("BLR")で作られたcodeはリテラル"BLR"とは別オブジェクトなので、==による参照比較はfalseになります。', '出力文の文字列だけが間違っている': 'System.out.printlnの書き方自体は正しく、問題はif文の比較方法にあります。', 'データの件数が不足している': 'codeには"BLR"という値が正しく入っており、件数の問題ではなく比較方法が原因です。' }, fixOptionExplanations: { 'code.equals("BLR") に修正する': '正解。equalsは文字列の内容を比較するため、別オブジェクトでも内容が同じなら一致判定できます。', '条件を削除する': '条件を削除すると都市コードに関わらず常にBengaluruと表示されてしまい、判定の意味がなくなります。', 'すべての値を同じ文字列にする': '都市コードのデータを無視して固定文字列にすると、実際のコードに基づく判定ができなくなります。' }, impactOptionExplanations: { '別オブジェクトの String でも内容が同じなら一致判定できる': '正解。equalsを使うことで、newで作られた別オブジェクトでも文字列の内容が同じなら正しく一致と判定できます。', '常に例外を出して停止する': 'この修正は比較方法を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '都市コードのデータはそのまま使われ続けます。修正は比較方法だけです。' } },
  { id: 'in_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero station code formatting', titleJa: '先頭ゼロ付き駅コードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.railways, summaryJa: '駅コード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル駅コード 0007 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 7;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0007"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0007";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。', causeOptionExplanations: { '先頭ゼロを含む識別コードを数値として保存している': '正解。7をintとして保存すると先頭ゼロの情報が失われ、本来の表記0007になりません。', '出力文の文字列だけが間違っている': 'System.out.println(sample)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'sampleには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { 'String sample = "0007"; として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した4桁表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の駅コードデータを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを失わず、表示形式をそのまま保てる': '正解。文字列として保存すれば、先頭ゼロを含む4桁表記をそのまま失わずに保持できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': '駅コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'in_java_b03', languageId: 'java', world: 'debug', title: 'Cricket score average', titleJa: 'クリケットの得点平均', category: 'sport', objective: 'numbers', source: SRC.cricket, summaryJa: 'サンプルの試合得点データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int matches = 2;\n    double average = total / matches;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または matches を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int matches = 2;\n    double average = (double) total / matches;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。', causeOptionExplanations: { 'int 同士の割り算なので小数部が切り捨てられる': '正解。totalとmatchesはどちらもintなので17/2は整数除算で8になり、小数部の.5が切り捨てられてからdoubleに代入されます。', '出力文の文字列だけが間違っている': 'System.out.println(average)自体は正しく書けており、問題は割り算の計算方法にあります。', 'データの件数が不足している': 'totalとmatchesにはそれぞれ正しい値が入っており、件数の問題ではなく整数除算が原因です。' }, fixOptionExplanations: { 'total または matches を double に変換してから割る': '正解。どちらか一方を(double)でキャストしてから割ることで、小数を含む正しい除算になります。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '得点データを無視して固定文字列にすると、実際の平均値が計算・表示できなくなります。' }, impactOptionExplanations: { '8.5 のような小数平均を正しく表せる': '正解。キャストにより小数を含む除算になるため、17÷2=8.5のような正しい平均が表示されます。', '常に例外を出して停止する': 'このキャストによる修正は計算結果を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '得点データはそのまま使われ続けます。修正は割り算の計算方法だけです。' } },
];

const javaFinalDebug = [
  { id: 'final_debug_IN_java_01', languageId: 'java', world: 'debug', title: 'Rani ki Vav', titleJa: 'ラーニー・キ・ヴァヴ（女王の階段井戸）', category: 'world-heritage', objective: 'collections', source: SRC.raniKiVav, summaryJa: 'ラーニー・キ・ヴァヴはグジャラート州にあります。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> depths = new HashMap<>();\n    depths.put("Rani ki Vav", "27");\n    String depthText = depths.get("Other Stepwell");\n    int depth = Integer.parseInt(depthText);\n    System.out.println(depth);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> depths = new HashMap<>();\n    depths.put("Rani ki Vav", "27");\n    String depthText = depths.get("Rani ki Vav");\n    try {\n      if (depthText != null) System.out.println(Integer.parseInt(depthText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。', causeOptionExplanations: { '存在しないキーを get して null を parseInt に渡している': '正解。"Other Stepwell"はdepthsに登録されておらずgetはnullを返すため、Integer.parseInt(null)でNullPointerExceptionになります。', '出力文の文字列だけが間違っている': 'System.out.println(depth)自体は正しく書けており、問題は登録されていないキーを取得・変換している部分です。', 'データの件数が不足している': 'depthsには"Rani ki Vav"が正しく登録されており、件数不足ではなく検索するキーが間違っていることが原因です。' }, fixOptionExplanations: { 'get した値が null でないか確認し、try/catch で変換失敗にも備える': '正解。nullチェックとtry/catchを組み合わせることで、欠損キーや不正な数値文字列の両方に安全に対応できます。', '条件を削除する': 'このコードには元々条件分岐がなく、削除すべき条件もありません。むしろnullチェックを追加する必要があります。', 'すべての値を同じ文字列にする': '深さのデータを無視して固定文字列にすると、実際の深さの値が表示・判定できなくなります。' }, impactOptionExplanations: { '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる': '正解。nullチェックとtry/catchにより、キーが無い場合も数値変換に失敗する場合も、処理が落ちずに分岐できます。', '常に例外を出して停止する': '修正後はnullチェックとtry/catchにより、例外で停止せず安全に処理を続けられるようになります。', '題材データを使わなくなる': '"Rani ki Vav"の深さデータはそのまま使われ続けます。修正は欠損・不正値への対応方法だけです。' } },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const INDIA_FACTS = allSpecs.map(makeFact);
export const INDIA_ASSIGNMENTS = allSpecs.map(assignment);

export const IN_PY_DECODE = pyDecode.map(decode);
export const IN_PY_EXECUTE = pyExecute.map(execute);
export const IN_PY_DEBUG = pyDebug.map(debug);
export const IN_JS_DECODE = jsDecode.map(decode);
export const IN_JS_EXECUTE = jsExecute.map(execute);
export const IN_JS_DEBUG = jsDebug.map(debug);
export const IN_JAVA_DECODE = javaDecode.map(decode);
export const IN_JAVA_EXECUTE = javaExecute.map(execute);
export const IN_JAVA_DEBUG = javaDebug.map(debug);

export const INDIA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: INDIA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: INDIA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: INDIA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: INDIA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: INDIA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: INDIA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: INDIA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: INDIA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: INDIA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
