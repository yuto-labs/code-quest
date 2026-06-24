const SRC = {
  canberra: 'https://www.britannica.com/place/Canberra',
  federation: 'https://www.britannica.com/event/Commonwealth-of-Australia',
  opera: 'https://whc.unesco.org/en/list/166',
  states: 'https://www.britannica.com/place/Australia',
  reef: 'https://whc.unesco.org/en/list/154',
  exhibition: 'https://whc.unesco.org/en/list/1131',
  kakadu: 'https://whc.unesco.org/en/list/147',
  tasmania: 'https://whc.unesco.org/en/list/181',
  uluru: 'https://whc.unesco.org/en/list/447',
  anu: 'https://www.anu.edu.au/about/our-organisation/our-history',
  flyingDoctor: 'https://www.flyingdoctor.org.au/about-the-rfds/our-history/',
  murray: 'https://www.britannica.com/place/Murray-River',
  convictSites: 'https://whc.unesco.org/en/list/1306',
  biomes: 'https://www.britannica.com/place/Australia/Plant-and-animal-life',
  aud: 'https://www.rba.gov.au/banknotes/',
  postcode: 'https://auspost.com.au/postcodes',
  blueMountains: 'https://whc.unesco.org/en/list/917',
  parliament: 'https://www.aph.gov.au/About_Parliament/Parliament_House_Art_and_Architecture',
  tram: 'https://www.yarratrams.com.au/about-us/our-history/',
  flag: 'https://www.aiatsis.gov.au/explore/australian-aboriginal-flag',
  marsupial: 'https://www.britannica.com/animal/marsupial',
  bondi: 'https://www.britannica.com/place/Bondi-Beach',
  ningaloo: 'https://whc.unesco.org/en/list/1369',
  daintree: 'https://whc.unesco.org/en/list/486',
  parkes: 'https://www.csiro.au/en/about/facilities-collections/ATNF/Parkes-radio-telescope',
  didgeridoo: 'https://www.britannica.com/art/didjeridu',
  greatOcean: 'https://www.britannica.com/place/Great-Ocean-Road',
  nga: 'https://nga.gov.au/about-us/',
  snowy: 'https://www.snowyhydro.com.au/our-scheme/about/',
  gondwana: 'https://whc.unesco.org/en/list/368',
  routes: 'https://www.britannica.com/place/Australia/Transportation',
  phone: 'https://www.acma.gov.au/numbering',
  queensland: 'https://www.britannica.com/place/Queensland',
  highCourt: 'https://www.hcourt.gov.au/about/history',
  constitution: 'https://www.aph.gov.au/About_Parliament/Senate/Powers_practice_n_procedures/constitution',
  eureka: 'https://www.britannica.com/event/Eureka-Stockade',
  fossilSites: 'https://whc.unesco.org/en/list/698',
  heard: 'https://whc.unesco.org/en/list/577',
  macquarie: 'https://whc.unesco.org/en/list/629',
  florey: 'https://www.nobelprize.org/prizes/medicine/1945/florey/biographical/',
  timezones: 'https://www.timeanddate.com/time/zones/aest',
  ais: 'https://ais.gov.au/about',
  languageFamily: 'https://aiatsis.gov.au/explore/language',
  southernOcean: 'https://www.antarctica.gov.au/antarctic-operations/',
  sport: 'https://www.britannica.com/place/Australia/Sports-and-recreation',
  lordHowe: 'https://whc.unesco.org/en/list/186',
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
  return `au:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

// 各題材の調査済み詳細（背景・歴史・エピソード）。id をキーに makeFact() がここから補う。
const FACT_DETAILS = {
  au_py_d01: {
    backgroundJa: 'キャンベラはオーストラリア連邦の首都で、シドニーとメルボルンの対立を避けるために選ばれた完全な計画都市です。',
    historyJa: '1901年の連邦成立後、両都市の妥協案として新首都の建設地が定められ、1913年3月12日に「キャンベラ」と命名されました。',
    episodeJa: '設計は1911年の国際コンペで137件の応募から選ばれ、米シカゴの建築家ウォルター・バーリー・グリフィンとマリオン・マホニー・グリフィン夫妻の案が採用されました。',
    keyPointsJa: ['1913年3月12日に命名式が行われた', 'シドニーとメルボルンの妥協で建設地が決まった', '設計はグリフィン夫妻による国際コンペ案', '名前はアボリジニ語で「集会の場」を意味するとされる'],
  },
  au_py_d02: {
    backgroundJa: '1901年の連邦成立は、6つの英国植民地が一つの国家として統合された、オーストラリア建国の出発点です。',
    historyJa: '1900年7月9日にイギリス議会がオーストラリア連邦憲法法に裁可を与え、1901年1月1日に発効してニューサウスウェールズなど6植民地が連邦の州になりました。',
    episodeJa: '1901年1月1日、シドニーのセンテニアル・パークでホープタウン伯爵が連邦成立を宣言し、初代首相にはエドモンド・バートンが就任しました。',
    keyPointsJa: ['1901年1月1日に連邦成立', '6つの植民地が州として統合', '初代首相はエドモンド・バートン', '憲法は1891〜1898年の会議で起草された'],
  },
  au_py_d03: {
    backgroundJa: 'シドニー・オペラハウスはシドニー湾に面した劇場施設で、20世紀建築を代表する傑作として知られています。',
    historyJa: 'デンマーク人建築家ヨーン・ウツソンが1957年の国際設計コンペで選ばれ、1973年に開館しました。',
    episodeJa: '建設費は当初の700万ドルから1億200万ドルに膨らみ、工期も4年の予定が14年に延びる中でウツソンは1966年に途中辞任し、2007年にUNESCO世界遺産に登録されました。',
    keyPointsJa: ['1957年の国際コンペでウツソン案が採用', '1973年に開館', '建設費は当初予定の約14倍に膨張', '2007年にUNESCO世界遺産登録'],
  },
  au_py_d04: {
    backgroundJa: 'オーストラリアは6つの州と2つの本土特別地域、複数の海外領土からなる連邦国家です。',
    historyJa: '各州はもともと別々の英国植民地で、最古のニューサウスウェールズは1788年に流刑植民地として始まり、1901年の連邦成立で現在の州になりました。',
    episodeJa: '面積最大の州は西オーストラリア州の約253万平方キロメートルで、最小はオーストラリア首都特別地域の約2,358平方キロメートルです。',
    keyPointsJa: ['6州と2本土特別地域で構成', 'NSWは1788年に最初の植民地として成立', '西オーストラリア州が面積最大', '国土全体の面積は約774万平方キロメートル'],
  },
  au_py_d05: {
    backgroundJa: 'グレートバリアリーフはクイーンズランド州沖に広がる世界最大のサンゴ礁群で、宇宙からも見える生物がつくった最大の構造物です。',
    historyJa: '現在の形は約8,000年前の最終氷期後に形成が始まり、1981年にUNESCO世界遺産に登録されました。',
    episodeJa: '全長約2,300kmにわたり2,900以上の個別の礁と900の島からなり、400種のサンゴ、1,500種の魚類、4,000種の貝類が生息しています。',
    keyPointsJa: ['全長約2,300km、面積約34万平方km', '2,900以上の礁と900の島で構成', '1981年にUNESCO世界遺産登録', '1,500種の魚類が生息する世界最大のサンゴ礁系'],
  },
  final_decode_AU_python_01: {
    backgroundJa: 'ロイヤル・エキシビション・ビルディングとカールトン庭園はメルボルンにある19世紀の博覧会建築で、現存する数少ない万博会場の一つです。',
    historyJa: '建築家ジョセフ・リードの設計により1879〜1880年に建設され、1880年メルボルン万国博覧会の会場として開館しました。',
    episodeJa: '1901年5月9日、この建物で1万2000人が見守る中オーストラリア初の連邦議会が開会し、2004年にはオーストラリアの建造物として初めてUNESCO世界遺産に登録されました。',
    keyPointsJa: ['1880年メルボルン万博のために建設', '建築家はジョセフ・リード', '1901年に初の連邦議会開会の地となった', '2004年にUNESCO世界遺産登録（豪初の建造物）'],
  },
  final_decode_AU_python_02: {
    backgroundJa: 'カカドゥ国立公園はノーザンテリトリーにある広大な国立公園で、自然と文化の両面でUNESCO世界遺産に登録されています。',
    historyJa: '1964年にアボリジニ保護区として保護が始まり、1979年に国立公園となり、1981年にUNESCO世界遺産に登録されました。',
    episodeJa: '5,000か所以上の岩絵が記録され、さらに1万か所が存在すると推定されており、一部は2万年以上前に描かれたと考えられています。',
    keyPointsJa: ['1981年にUNESCO世界遺産登録（自然・文化の複合遺産）', '5,000か所以上の岩絵が確認されている', 'アボリジニの居住は4万年以上前から続く', 'オーストラリア最大級の国立公園'],
  },
  final_decode_AU_python_03: {
    backgroundJa: 'タスマニア原生地域はタスマニア州の約4分の1を占める広大な原生地域で、世界最後の温帯原生自然の一つです。',
    historyJa: '1982年にフランクリン川ダム建設への抗議運動を受けてUNESCO世界遺産に登録され、1989年に範囲が拡大されました。',
    episodeJa: '世界遺産の評価基準10項目のうち7項目を満たし、中国の泰山と並んで世界最高水準の評価を獲得した世界遺産の一つです。',
    keyPointsJa: ['面積はタスマニア州の約25%（約1.58万平方km）', '1982年に世界遺産登録、1989年に拡大', '世界遺産基準10項目中7項目を満たす', 'タスマニアデビルなど希少動物の最後の生息地'],
  },
  au_py_e01: {
    backgroundJa: 'ウルルはノーザンテリトリーにある巨大な一枚岩で、先住民アナング族の聖地として深い精神的意味を持っています。',
    historyJa: '砂岩の年代は約6億年前と推定され、1873年に探検家ウィリアム・ゴスが非アボリジニ人として初めて目撃し「エアーズロック」と命名しました。',
    episodeJa: '1985年10月26日に所有権がアナング族に返還され、2019年10月26日にはついに登山が正式に禁止されました。',
    keyPointsJa: ['高さ348m、幅9.4kmの一枚岩', '1985年に所有権がアナング族へ返還', '1987年と1994年にUNESCO世界遺産登録', '2019年10月26日に登山が禁止された'],
  },
  au_py_e02: {
    backgroundJa: 'オーストラリア国立大学はキャンベラにある大学で、オーストラリア議会の法律によって設立された唯一の大学です。',
    historyJa: '1946年8月1日のオーストラリア国立大学法により設立され、当初は大学院のみの研究大学でした。',
    episodeJa: '設立時の学術諮問委員にはノーベル賞受賞者ハワード・フローリーらが名を連ね、1960年に旧キャンベラ大学カレッジを統合して初めて学部生を受け入れました。',
    keyPointsJa: ['1946年に連邦議会の法律で設立', '当初は大学院のみの研究大学だった', '1960年に学部教育を開始', '6人のノーベル賞受賞者を輩出'],
  },
  au_py_e03: {
    backgroundJa: 'ロイヤル・フライング・ドクター・サービスは、遠隔地に住む人々へ航空機で医療を届けるオーストラリアの組織です。',
    historyJa: '1928年5月15日、長老派の牧師ジョン・フリンによりクイーンズランド州クロンカリーで「内陸ミッション航空医療サービス」として始まりました。',
    episodeJa: '発足からわずか2日後の5月17日に最初の飛行が行われ、設立1年目で約50回、総距離約3万2000kmを飛行する世界初の本格的な航空救急サービスとなりました。',
    keyPointsJa: ['1928年5月15日に設立', '創設者は牧師ジョン・フリン', '世界初の総合的な航空救急サービス', '1955年に「ロイヤル」の称号を授与'],
  },
  au_py_e04: {
    backgroundJa: 'マレー川はオーストラリア最長の川で、南東部を流れる重要な灌漑・水資源です。',
    historyJa: '1824年に探検家ヒュームとホーヴェルが発見し、1830年にチャールズ・スタートが本流を確認して「マレー」と命名しました。',
    episodeJa: '全長は約2,508kmに及び、アマゾン川・ナイル川に次いで航行可能な距離が世界第3位の長さを誇ります。',
    keyPointsJa: ['全長約2,508kmでオーストラリア最長', '1824年にヒュームとホーヴェルが発見', 'NSW州とビクトリア州の境界を形成', '航行可能な河川として世界第3位の長さ'],
  },
  final_execute_AU_python_01: {
    backgroundJa: 'オーストラリアの流刑地遺跡は、18〜19世紀の英国による流刑制度を物語る11の遺跡群からなるUNESCO世界遺産です。',
    historyJa: '1787〜1868年の約80年間に約16万6000人がオーストラリアへ流刑され、2010年にこれらの遺跡群がUNESCO世界遺産に登録されました。',
    episodeJa: 'フリーマントル監獄は1855年に開設され1991年まで使われ、シドニー湾のコカトゥー島は1839〜1869年に再犯者を収容する苛烈な労働の流刑地として使われました。',
    keyPointsJa: ['2010年にUNESCO世界遺産登録', '1787〜1868年に約16万6000人が流刑された', 'フリーマントル監獄は1855〜1991年に運用', 'コカトゥー島は1839〜1869年の流刑地'],
  },
  final_execute_AU_python_02: {
    backgroundJa: 'オーストラリアには砂漠、サバンナ、雨林、温帯林、サンゴ礁など複数の主要バイオームが存在し、国土の35%が砂漠です。',
    historyJa: '熱帯サバンナは国土の約23%を占め、ブルームからタウンズビルまで北部を横断するように広がっています。',
    episodeJa: 'デインツリーなどの雨林は約1億8000万年前から続く非常に古い生態系で、サバンナの乾季は5月から10月まで続き森林火災を伴います。',
    keyPointsJa: ['国土の約35%が砂漠', '熱帯サバンナは国土の約23%', '雨林の一部は1億8000万年前から存在', 'ユーカリは最も代表的な樹種'],
  },
  au_py_b01: {
    backgroundJa: 'オーストラリアの通貨はオーストラリアドルで、世界初の全面ポリマー紙幣の流通国として知られています。',
    historyJa: '1966年2月14日に十進法貨幣制度へ切り替わり、ポンドからオーストラリアドルへ移行しました。',
    episodeJa: '1988年の建国200周年を記念して世界初のポリマー紙幣（10ドル）が発行され、1996年には全紙幣がポリマー製となった世界初の国になりました。',
    keyPointsJa: ['1966年2月14日に十進法のドルへ移行', '1988年に世界初のポリマー紙幣を発行', '1996年に全紙幣がポリマー化（世界初）', 'ポリマー紙幣は耐久性が高くリサイクル可能'],
  },
  au_py_b02: {
    backgroundJa: 'オーストラリアの郵便番号は4桁の数字で、地域ごとの郵便物処理を効率化するために導入された制度です。',
    historyJa: '1967年7月1日に郵政公社が導入し、シドニーのレッドファーン郵便交換局の機械処理向けに開発されました。',
    episodeJa: '最初の数字は当時のラジオ局コールサインの地域番号に対応しており、2（NSW）、3（VIC）、4（QLD）、5（SA）、6（WA）、7（TAS）のように割り当てられました。',
    keyPointsJa: ['1967年7月1日に導入', '4桁の数字で構成', '最初の数字は州を表す（2=NSW、3=VICなど）', '導入1年後には郵便物の70%以上に記載された'],
  },
  au_py_b03: {
    backgroundJa: 'オーストラリアの州・特別地域にはNSW、VIC、QLDなどのアルファベット略号が使われ、住所表記などで頻繁に登場します。',
    historyJa: '各州の略号は連邦成立(1901年)前後から定着した呼称で、現在も公的な郵便表記の標準として使われています。',
    episodeJa: '6州2特別地域の略号のうち、西オーストラリア州（WA）は国土の3分の1近くを占める最大の州で、ACT（首都特別地域）は最小です。',
    keyPointsJa: ['NSW・VIC・QLD・WA・SA・TASの6州', 'ACT・NTの2特別地域がある', '略号は郵便表記で標準的に使用', 'WAが面積最大、ACTが面積最小'],
  },
  final_debug_AU_python_01: {
    backgroundJa: 'グレーター・ブルー・マウンテンズ地域はニューサウスウェールズ州にある広大な保護区域で、ユーカリの多様性で知られる世界遺産です。',
    historyJa: '70年に及ぶ自然保護運動の末、2000年に約103万ヘクタールがUNESCO世界遺産に登録されました。',
    episodeJa: '世界のユーカリ種の約13%にあたる91種がこの地域に分布し、1994年には恐竜時代から生き残る「生きた化石」ウォレマイ・パインが発見されました。',
    keyPointsJa: ['2000年にUNESCO世界遺産登録（約103万ha）', '世界のユーカリ種の13%（91種）が分布', '1994年にウォレマイ・パインが発見された', 'アボリジニの居住歴は少なくとも1万2000年'],
  },
  au_js_d01: {
    backgroundJa: '国会議事堂はキャンベラのキャピタル・ヒルにあるオーストラリア連邦議会の議事堂で、南半球最大級の建築物の一つです。',
    historyJa: '1980年の国際設計競技で329件の中からミッチェル・ジュルゴラ＆ソープ社の案が選ばれ、1988年5月9日にエリザベス2世により開館しました。',
    episodeJa: '建設費は11億ドル超（2022年換算で約26億ドル）に達し、屋上の旗竿は高さ81m・重さ250トンのステンレス製です。',
    keyPointsJa: ['1988年5月9日にエリザベス2世が開館', '設計コンペには329件の応募', '建設費は11億ドル超', '屋上の旗竿は高さ81m・重さ250トン'],
  },
  au_js_d02: {
    backgroundJa: 'メルボルンは世界最大級の路面電車網を持つ都市で、トラムは市内交通の重要な役割を担っています。',
    historyJa: '最初のケーブルトラムは1885年に開業し、1906年から電気トラムの継続運行が始まりました。',
    episodeJa: '現在は500台以上のトラムと250kmの複線、約1,700の停留所、24路線を持つ世界最大の現役都市トラム網で、年間1億5000万人以上が利用しています。',
    keyPointsJa: ['1885年にケーブルトラムが開業', '1906年から電気トラムが継続運行', '世界最大の現役都市トラム網（24路線）', '年間利用者は1.5億人を超える'],
  },
  au_js_d03: {
    backgroundJa: 'アボリジナル・フラッグは黒・赤・黄の3色からなる旗で、アボリジニの人々を象徴する公式の旗です。',
    historyJa: 'アボリジニの芸術家ハロルド・トーマスが1971年に制作し、同年7月にアデレードで初めて掲げられました。',
    episodeJa: '黒は先住民の人々、黄色い円は生命を与える太陽、赤は大地と儀式で使われる赭土を表し、トーマスは2022年1月に著作権を連邦政府へ移譲しました。',
    keyPointsJa: ['1971年にハロルド・トーマスが制作', '黒＝民族、黄＝太陽、赤＝大地と赭土', '1995年に「アボリジニの旗」として正式承認', '2022年に著作権が連邦政府へ移譲された'],
  },
  au_js_d04: {
    backgroundJa: 'カンガルー、コアラ、ウォンバットはオーストラリアに生息する有袋類で、未発達な子を育児嚢で育てる独自の繁殖方法を持ちます。',
    historyJa: '有袋類と有胎盤類の進化的分岐は約1.25億〜1.6億年前のジュラ紀後期〜白亜紀前期に起こったとされています。',
    episodeJa: '世界の有袋類の約70%がオーストラリアと周辺の島々に生息し、最大のアカカンガルーは体高1.8m、体重90kgに達します。',
    keyPointsJa: ['世界の有袋類の約70%がオーストラリアに生息', '有袋類と有胎盤類は約1.25億年前に分岐', 'アカカンガルーは体高1.8mに達する', 'コアラとウォンバットは同じ祖先群から分岐'],
  },
  au_js_d05: {
    backgroundJa: 'ボンダイビーチはシドニーにある世界的に有名な海岸で、サーフィン文化発祥の地としても知られています。',
    historyJa: '名前はダラワル語で波が岩に打ち寄せる音を意味し、1882年に公共の海岸として一般開放されました。',
    episodeJa: '1907年に世界初のライフセービングクラブ「ボンダイ・サーフ・ベイザーズ・ライフセービング・クラブ」が結成され、赤と黄の四分割帽は今もパトロールの象徴です。',
    keyPointsJa: ['1882年に公共の海岸として開放', '1907年に世界初のライフセービングクラブが発足', '2000年シドニー五輪のビーチバレー会場', '2017年に国指定サーフィン保護区に指定'],
  },
  final_decode_AU_javascript_01: {
    backgroundJa: 'ニンガルー海岸はウェスタンオーストラリア州にある世界遺産で、世界最大級のジンベイザメの群れが見られる海域です。',
    historyJa: '2011年6月24日にUNESCO世界遺産に登録され、陸海合わせて約60万4500ヘクタールが保護されています。',
    episodeJa: 'サンゴの一斉産卵後の栄養豊富な海域に毎年300〜500頭のジンベイザメが集まり、その85%が平均体長5mの若い雄だとされています。',
    keyPointsJa: ['2011年にUNESCO世界遺産登録', '面積約60万4500ヘクタール', '毎年300〜500頭のジンベイザメが集まる', '700種以上のサンゴ礁魚が生息'],
  },
  final_decode_AU_javascript_02: {
    backgroundJa: 'デインツリー多雨林はクイーンズランド州にある世界最古級の熱帯雨林で、地球上の植物進化の生きた記録とされています。',
    historyJa: '推定樹齢約1億8000万年とされ、アマゾン熱帯雨林より約1億年古く、1988年にUNESCO世界遺産に登録されました。',
    episodeJa: '面積約1,200平方kmの中に約3,000種の植物、オーストラリアのカエル・爬虫類・有袋類の30%、コウモリ・チョウ類の90%が生息しています。',
    keyPointsJa: ['推定樹齢約1億8000万年で世界最古級', '1988年にUNESCO世界遺産登録', '面積約1,200平方km', '豪のカエル・爬虫類・有袋類の30%が生息'],
  },
  final_decode_AU_javascript_03: {
    backgroundJa: 'パークス天文台はオーストラリアにある主要な電波望遠鏡施設で、CSIROが運用する科学観測の中核拠点です。',
    historyJa: '1961年に完成し、CSIRO電波物理研究所長E・G・「タフィ」・バウエンの提唱でカーネギー財団とロックフェラー財団の資金援助を受けて建設されました。',
    episodeJa: '1969年7月のアポロ11号月面着陸時、強風（時速110km）の悪天候下で月からの中継映像をNASAより高品質に受信し、世界の6億人がその映像を見ました。',
    keyPointsJa: ['1961年に完成', 'アポロ11号の月面中継を受信（1969年）', '受信映像は世界6億人に届けられた', '強風下でも信号品質は劣化しなかった'],
  },
  au_js_e01: {
    backgroundJa: 'ディジュリドゥはアボリジナルの伝統音楽と結びつく管楽器で、低く響く独特の音色が特徴です。',
    historyJa: '北部オーストラリア（アーネムランド）のアボリジニにより少なくとも1,000年前に発展し、最古の記録はカカドゥ国立公園周辺の岩絵で約1,500年前とされます。',
    episodeJa: '伝統的にシロアリが中をうろにしたユーカリの枝が使われ、内部の空洞は1本ごとに異なるため音色も唯一無二になります。',
    keyPointsJa: ['少なくとも1,000年前から使われている', '北部アーネムランド地域が起源', 'シロアリが空洞化したユーカリ材を使用', '「ディジュリドゥ」の名は白人移住者による擬音語'],
  },
  au_js_e02: {
    backgroundJa: 'グレートオーシャンロードはビクトリア州沿岸を走る観光道路で、世界最大級の戦争記念碑として知られています。',
    historyJa: '第一次世界大戦の帰還兵約3,000人により1919年9月19日から建設が始まり、1932年11月に完成しました。',
    episodeJa: '建設には重機を使わずツルハシとシャベル、馬車だけで作業が進められ、1か月あたり約3kmしか進まない過酷な工事でした。',
    keyPointsJa: ['全長約240kmの観光道路', '1919〜1932年に帰還兵が建設', '世界最大級の戦争記念碑とされる', '建設は手作業中心で進捗は月3km程度'],
  },
  au_js_e03: {
    backgroundJa: 'オーストラリア国立美術館はキャンベラにある国立の美術館で、16万点を超える美術品を所蔵しています。',
    historyJa: '1967年に設立が決まり、1968年に建築家コリン・マディガンの設計案が選ばれ、1982年にエリザベス2世により開館しました。',
    episodeJa: '建設費は8200万ドルに達し、打ちっぱなしコンクリートのブルータリズム建築は「国民性の表現」を意図して設計されました。',
    keyPointsJa: ['1967年に設立決定、1982年開館', '建築家はコリン・マディガン', '建設費は8200万ドル', '16万点を超える美術品を所蔵'],
  },
  au_js_e04: {
    backgroundJa: 'スノーウィー・マウンテンズ計画はオーストラリアを代表する水力発電・灌漑事業で、国内最大の土木事業とされます。',
    historyJa: '1949年10月17日に着工し、25年をかけて1974年に完成しました。',
    episodeJa: '7つの発電所と16の主要ダムを145kmのトンネルと80kmの水路でつなぎ、延べ10万人以上、30か国以上からの移民が建設に携わりました。',
    keyPointsJa: ['1949年着工、1974年完成（25年）', '7発電所・16ダムを145kmのトンネルで接続', '延べ10万人以上が建設に従事', '建設費は当時で約8億2000万ドル'],
  },
  final_execute_AU_javascript_01: {
    backgroundJa: 'ゴンドワナ多雨林群はニューサウスウェールズ州とクイーンズランド州にまたがる41の保護区からなる世界遺産で、超大陸ゴンドワナの生物進化を伝えます。',
    historyJa: '1986年にUNESCO世界遺産に登録され、1994年に範囲が拡大、2007年に現在の名称になりました。',
    episodeJa: 'オーストラリアは約4000万年前にゴンドワナ大陸から分離し、この地域には分離以前の系譜をひくシダや裸子植物が今も自生しています。',
    keyPointsJa: ['1986年に登録、1994年に拡大', '面積約37万ヘクタール、41の保護区', '豪は約4000万年前にゴンドワナから分離', '2019〜2020年の森林火災で約53%が被災'],
  },
  final_execute_AU_javascript_02: {
    backgroundJa: 'オーストラリアにはインディアン・パシフィック号などの長距離鉄道ルートがあり、大陸を横断する交通の象徴となっています。',
    historyJa: 'インディアン・パシフィック号は1970年2月23日に初運行し、シドニーとパースを結ぶ初の直通大陸横断列車となりました。',
    episodeJa: '全長4,353kmの旅程には、ヌラボー平原を走る世界最長の直線鉄道区間（478km、カーブなし）が含まれています。',
    keyPointsJa: ['1970年2月23日に初運行', '全長4,353km、所要約65時間', '世界最長の直線鉄道区間（478km）を含む', '1917年完成の大陸横断鉄道が前身'],
  },
  au_js_b01: {
    backgroundJa: 'オーストラリアの携帯電話番号は10桁で構成され、先頭は「04」で始まる国内標準形式です。',
    historyJa: '自動車電話は1981年に登場し、1987年には携帯型の「セルラー」電話が初めて現れました。',
    episodeJa: '当初のアナログ携帯番号は018や015などで始まっていましたが、2001年9月25日の番号ポータビリティ導入後は通信会社を問わず同じ形式が使われています。',
    keyPointsJa: ['現在の携帯番号は「04」+8桁で10桁', '1987年に携帯型「セルラー」電話が登場', '2001年に番号ポータビリティが導入', '2015年に「05」も携帯用に追加予約'],
  },
  au_js_b02: {
    backgroundJa: 'ブリスベンとゴールドコーストはクイーンズランド州の主要都市で、観光・行政の中心地として発展してきました。',
    historyJa: 'ブリスベンは1823年にジョン・オックスリーが探検し、1902年に市に昇格、ゴールドコーストは1959年5月16日に市に昇格しました。',
    episodeJa: 'ゴールドコーストの中心地「サーファーズパラダイス」は1933年にエルストンから改名され、それを境に豪を代表するリゾート地として発展しました。',
    keyPointsJa: ['ブリスベンは1902年に市に昇格', 'ゴールドコーストは1959年に市に昇格', 'サーファーズパラダイスは1933年に改名', 'クイーンズランド州はテキサス州の2倍超の面積'],
  },
  au_js_b03: {
    backgroundJa: 'グレートバリアリーフはサンゴ礁の保全データの題材としても扱われる世界最大のサンゴ礁系です。',
    historyJa: '1981年にUNESCO世界遺産に登録され、現在も気候変動によるサンゴの白化現象が継続的な課題となっています。',
    episodeJa: '2016年と2017年には記録的な海水温上昇により大規模な白化現象が連続して発生し、保全データの収集と分析が一段と重要になりました。',
    keyPointsJa: ['1981年にUNESCO世界遺産登録', '2,900以上の礁、900の島で構成', '2016〜2017年に大規模な白化現象が連続発生', '保全のため定期的な健康状態の監視データが使われる'],
  },
  final_debug_AU_javascript_01: {
    backgroundJa: 'フリーマントル刑務所はウェスタンオーストラリア州にある世界遺産の流刑地遺跡で、150年以上にわたり収容施設として使われました。',
    historyJa: '1855年に開設され、1991年まで運用が続き、2010年にUNESCOの「オーストラリアの流刑地遺跡」の一つとして世界遺産に登録されました。',
    episodeJa: '15エーカーの敷地には監房棟、トンネル、門衛所などが残り、2010年の登録は西オーストラリア州で初の建造物としての世界遺産登録でした。',
    keyPointsJa: ['1855年開設、1991年まで運用', '2010年にUNESCO世界遺産登録', '西オーストラリア州初の建造物世界遺産', '敷地面積は約15エーカー'],
  },
  au_java_d01: {
    backgroundJa: 'オーストラリア高等裁判所はキャンベラにある国の最上位裁判所で、憲法の解釈や州際の争いを判断する役割を担います。',
    historyJa: '1901年憲法第71条で設置が定められ、1903年の司法法施行により実際に発足し、同年10月6日にメルボルンで初公判が開かれました。',
    episodeJa: '初代裁判長サー・サミュエル・グリフィスをはじめ、初代首相エドモンド・バートンも判事として加わり、1975年に英国枢密院への上訴権が廃止されました。',
    keyPointsJa: ['1901年憲法で設置、1903年に発足', '初公判は1903年10月6日メルボルン', '初代裁判長はサミュエル・グリフィス', '1975年に英国枢密院への上訴を廃止'],
  },
  au_java_d02: {
    backgroundJa: 'オーストラリア憲法は連邦制と二院制議会を定める国の基本法で、1901年に施行されました。',
    historyJa: '1891〜1898年の制憲会議で起草され、1900年7月9日に英国議会で裁可、1901年1月1日に施行されました。',
    episodeJa: '英国・米国などの制度を組み合わせたハイブリッド型で、連邦と州に権限を分ける連邦主義を採用しています。',
    keyPointsJa: ['1901年1月1日に施行', '1891〜1898年の会議で起草', '英・米の制度を組み合わせた連邦憲法', '連邦と州に権限を分ける連邦主義を採用'],
  },
  au_java_d03: {
    backgroundJa: 'ユーレカ・ストッカード事件は1854年にビクトリア州バララットで起きた金鉱労働者の蜂起です。',
    historyJa: '採掘許可料の高さや警察の取り締まりへの不満が高まり、1854年12月3日に政府軍と衝突しました。',
    episodeJa: '戦闘は約15分で終結し、鉱夫22人と兵士5人が死亡したとされ、首謀者ピーター・ララーは反乱罪で起訴されましたが全員無罪となりました。',
    keyPointsJa: ['1854年12月3日に蜂起', '採掘許可料への不満が背景', '指導者はピーター・ララー', '反乱罪に問われた者は全員無罪'],
  },
  au_java_d04: {
    backgroundJa: 'オーストラリアでは鉄道・道路・航空・フェリーなど複数の交通手段が国内の長距離移動を支えています。',
    historyJa: '1912年に連邦政府が大陸横断鉄道の建設を始め、1917年に完成、1970年にはインディアン・パシフィック号がシドニー・パース間で初運行しました。',
    episodeJa: 'ヌラボー平原を通る区間には478kmにわたりカーブが一つもない世界最長の直線鉄道があります。',
    keyPointsJa: ['大陸横断鉄道は1917年完成', 'インディアン・パシフィック号は1970年に初運行', '世界最長の直線鉄道区間（478km）を含む', '鉄道・道路・航空・フェリーが主要交通手段'],
  },
  au_java_d05: {
    backgroundJa: 'オーストラリアは6州と2特別地域から構成される連邦国家で、各地域は異なる歴史と役割を持ちます。',
    historyJa: 'タスマニア州はもともと「ヴァン・ディーメンズ・ランド」と呼ばれ、1856年に現在の名称に改称されました。',
    episodeJa: 'タスマニアには世界遺産タスマニア原生地域があり、州土の約25%を占める広大な保護区が今も残されています。',
    keyPointsJa: ['6州と2特別地域で構成', 'タスマニアは1856年に現名称へ改称', 'タスマニア原生地域は州土の約25%', '州ごとに異なる歴史的経緯を持つ'],
  },
  final_decode_AU_java_01: {
    backgroundJa: 'オーストラリアの哺乳類化石遺跡（リバースリー・ナラコート）は、異なる時代の哺乳類化石を保存する世界10大化石産地の一つです。',
    historyJa: '1994年にUNESCO世界遺産に登録され、リバースリーは漸新世〜中新世（約1000万〜3000万年前）、ナラコートは中期更新世以降（約53万年前〜現在）の化石を保存しています。',
    episodeJa: 'ナラコートの地層は人類がオーストラリアに到達した時期と重なり、巨大有袋類（メガファウナ）が絶滅していく過程を読み取れる貴重な資料です。',
    keyPointsJa: ['1994年にUNESCO世界遺産登録', 'リバースリーは1000万〜3000万年前の化石', 'ナラコートは53万年前〜現在の化石', '世界10大化石産地の一つとされる'],
  },
  final_decode_AU_java_02: {
    backgroundJa: 'ハード島とマクドナルド諸島はオーストラリアの外部領土で、人の影響がほぼない原始的な生態系を保つ世界遺産です。',
    historyJa: '1853年に米国船長ジョン・ハードがハード島を発見し、1947年に英国からオーストラリアへ移管されました。',
    episodeJa: 'ハード島には豪唯一の活火山「ビッグベン」（標高2,745m）があり、マクドナルド島の火山も約7万5000年の休止期を経て再び活動を始めています。',
    keyPointsJa: ['1947年に英国からオーストラリアへ移管', '1997年にUNESCO世界遺産登録', 'ビッグベンは豪唯一の活火山', '外来種が一切定着していない希少な生態系'],
  },
  final_decode_AU_java_03: {
    backgroundJa: 'マッコーリー島はオーストラリアの亜南極にある島で、海底のマントル岩石が海面上に露出する世界で唯一の場所として知られています。',
    historyJa: '1810年7月11日にフレデリック・ハッセルボローが発見し、1997年12月5日にUNESCO世界遺産に登録されました。',
    episodeJa: '85万羽を超えるロイヤルペンギンの繁殖地でもあり、2014年には外来種（ネズミ・ウサギなど）の完全駆除に成功しました。',
    keyPointsJa: ['1810年に発見、1997年に世界遺産登録', '海洋地殻とマントル岩石が露出する唯一の島', '85万羽超のロイヤルペンギンが繁殖', '2014年に外来種の完全駆除に成功'],
  },
  au_java_e01: {
    backgroundJa: 'ハワード・フローリーはペニシリンの実用化に関わったオーストラリア出身の科学者です。',
    historyJa: '1898年9月24日にアデレードで生まれ、1938年からオックスフォード大学でドイツ出身のエルンスト・チェインらと共にペニシリンの精製研究を進めました。',
    episodeJa: 'フレミングが発見してから10年後に実用化に成功し、1945年にフレミング・チェインと共にノーベル生理学・医学賞を受賞、オーストラリア人として初の受賞者となりました。',
    keyPointsJa: ['1898年アデレード生まれ', '1938年からペニシリンの実用化研究を主導', '1945年にノーベル生理学・医学賞を受賞', '豪人として初のノーベル賞受賞者'],
  },
  au_java_e02: {
    backgroundJa: 'オーストラリアには複数のUTCオフセットの時間帯があり、東部・中部・西部で標準時が異なります。',
    historyJa: '1895年に各植民地が標準時を導入し、1899年に南オーストラリア州が独自に30分早い中部標準時（UTC+9:30）を採用しました。',
    episodeJa: '東部標準時（AEST）はUTC+10で、夏時間（AEDT）にはUTC+11になりますが、クイーンズランド州は夏時間を採用していません。',
    keyPointsJa: ['東部標準時はUTC+10（夏時間UTC+11）', '中部標準時は1899年から30分早いUTC+9:30', '西部標準時はUTC+8', 'クイーンズランド州は夏時間を採用しない'],
  },
  au_java_e03: {
    backgroundJa: 'オーストラリア・スポーツ研究所はキャンベラにあるオーストラリアの国立スポーツ研究施設です。',
    historyJa: '1976年モントリオール五輪での金メダル0という結果を受け、1981年1月26日（オーストラリアの日）に開所しました。',
    episodeJa: '開所当初は8競技・約150人の奨学生から始まり、設立以降オーストラリアが獲得した五輪金メダルの60%がAIS設立後の成果とされています。',
    keyPointsJa: ['1981年1月26日に開所', 'モントリオール五輪の金メダル0が設立の契機', '開所時は8競技・約150人の選手', '豪の五輪金メダルの60%がAIS設立後'],
  },
  au_java_e04: {
    backgroundJa: 'オーストラリアには複数の先住民言語系統があり、パマ・ニュンガン語族はその中で最大の系統です。',
    historyJa: '1788年の英国植民以前、パマ・ニュンガン語族は国土の約90%を覆い、約300の言語を含んでいたとされています。',
    episodeJa: 'オーストラリア先住民の言語は全体で約27の語族・400の言語に分類され、現在話者がいるのは約145言語に減少しています。',
    keyPointsJa: ['豪先住民言語は約27語族・400言語に分類', 'パマ・ニュンガン語族は約300言語を含む最大系統', '植民前は国土の約90%を覆っていた', '現在話者がいるのは約145言語'],
  },
  final_execute_AU_java_01: {
    backgroundJa: 'オーストラリアの各州・特別地域には州都が存在し、それぞれが行政・経済の中心地として機能しています。',
    historyJa: 'メルボルンはビクトリア州の州都として1851年の分離以降に発展し、ホバートはタスマニア州最古の都市として1804年に建設されました。',
    episodeJa: 'メルボルンの人口は約500万人と国内2番目に多く、ホバートは人口約25万人程度の小規模な州都です。',
    keyPointsJa: ['ビクトリア州は1851年にNSWから分離', 'メルボルンは人口約500万人の州都', 'ホバートは1804年建設のタスマニア州都', '州都の規模は州ごとに大きく異なる'],
  },
  final_execute_AU_java_02: {
    backgroundJa: '南極海ではオーストラリアの研究機関が観測拠点を持ち、気候や海洋環境のデータを収集しています。',
    historyJa: 'デービス基地は1957年1月13日に開設され、国際地球観測年(IGY)の科学活動拠点として設立されました。',
    episodeJa: '1965年に一時閉鎖されましたが1969年2月19日に再開され、現在はオーストラリア南極観測網で最も活発に利用される基地の一つです。',
    keyPointsJa: ['1957年1月13日に開設', '国際地球観測年の拠点として設立', '1965〜1969年は一時閉鎖', 'プリンセス・エリザベス・ランドに位置'],
  },
  au_java_b01: {
    backgroundJa: 'オーストラリアの州略号はNSW、VIC、QLDなど住所表記や行政手続きで広く使われています。',
    historyJa: '各州の略号は1901年の連邦成立前後から定着し、現在もAuspostなど公的機関の表記基準として用いられています。',
    episodeJa: 'ビクトリア州（VIC）は1851年にニューサウスウェールズ州から分離して成立した州で、メルボルンを州都としています。',
    keyPointsJa: ['NSW・VIC・QLD・WA・SA・TASの6州略号', 'ビクトリア州は1851年にNSWから分離', '略号は郵便・行政表記の標準', '6州2特別地域で構成される連邦'],
  },
  au_java_b02: {
    backgroundJa: 'サンプルの郵便番号風コードは、オーストラリアで実際に使われる4桁の郵便番号制度を題材にしています。',
    historyJa: '郵便番号制度は1967年7月1日に導入され、当時の8,000か所の配達局を効率的に処理するために作られました。',
    episodeJa: '番号の先頭1桁は導入当時のラジオ局コールサインの地域区分に対応し、たとえば0始まりはノーザンテリトリーなど特定地域を示します。',
    keyPointsJa: ['1967年7月1日に4桁郵便番号を導入', '導入時に約5,000の郵便番号を割り当て', '先頭の数字は地域区分を表す', '1990年にOCR読み取り用の郵便番号枠が導入'],
  },
  au_java_b03: {
    backgroundJa: 'サンプルの採点データはスポーツの審査における平均点計算の題材として扱われます。',
    historyJa: 'オーストラリアは1981年のオーストラリア・スポーツ研究所設立以降、組織的な選手育成とデータに基づく評価の仕組みを整えてきました。',
    episodeJa: 'オーストラリアは1976年モントリオール五輪で金メダルを一つも獲得できなかったことを教訓に、その後のスポーツ強化策で多くのメダルを獲得するようになりました。',
    keyPointsJa: ['AISは1981年に設立', '1976年五輪は金メダル0が転機', 'AIS設立後、豪の金メダルの60%を獲得', 'データに基づく選手評価が定着した'],
  },
  final_debug_AU_java_01: {
    backgroundJa: 'ロード・ハウ島群はオーストラリアの世界遺産で、火山活動によって形成された孤立した島々の生態系を持ちます。',
    historyJa: '約700万年前の海底火山活動で形成され、1982年にUNESCO世界遺産に登録されました。',
    episodeJa: '世界最南端の真のサンゴ礁を持ち、絶滅したとされていた世界最大のナナフシ「ロード・ハウ・アイランド・ファスミド」がボールズ・ピラミッドで再発見されました。',
    keyPointsJa: ['約700万年前の海底火山活動で形成', '1982年にUNESCO世界遺産登録', '世界最南端の真のサンゴ礁を持つ', '絶滅したとされたナナフシが再発見された'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、オーストラリアの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'AU',
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
    countryId: 'AU',
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
  { id: 'au_py_d01', languageId: 'python', world: 'decode', title: 'Canberra as capital', titleJa: 'キャンベラ（首都）', category: 'geography-capital', objective: 'strings', source: SRC.canberra, summaryJa: 'キャンベラはオーストラリアの首都です。', prompt: 'キャンベラはオーストラリアの首都です。下のコードを実行すると Canberra:capital と表示されるよう、空欄を埋めてください。', code: 'city = "Canberra"\nrole = ___BLANK___\nprint(city + ":" + role)', answer: '"capital"', expectedOutput: 'Canberra:capital', hint: 'role に入る文字列を引用符付きで書きます。', explanation: '"capital" を入れると city と連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'au_py_d02', languageId: 'python', world: 'decode', title: 'Federation of Australia', titleJa: 'オーストラリア連邦の成立', category: 'history-federation', objective: 'integers', source: SRC.federation, summaryJa: 'オーストラリアは1901年に連邦国家として成立しました。', prompt: '年が1901のとき Federation:1901 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Federation:{year}"\nprint(label)', answer: '1901', expectedOutput: 'Federation:1901', hint: '整数は引用符なしで書きます。', explanation: 'year に 1901 を入れると f-string の {year} が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'au_py_d03', languageId: 'python', world: 'decode', title: 'Sydney Opera House', titleJa: 'シドニー・オペラハウス', category: 'world-heritage', objective: 'condition', source: SRC.opera, summaryJa: 'シドニー・オペラハウスはシドニーにある世界遺産の劇場施設です。', prompt: '登録地名が Sydney のとき heritage と表示されるよう、if の条件を完成させてください。', code: 'city = "Sydney"\nif ___BLANK___:\n    print("heritage")\nelse:\n    print("other")', answer: 'city == "Sydney"', expectedOutput: 'heritage', hint: '文字列が完全に一致するか == で比較します。', explanation: 'city の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'au_py_d04', languageId: 'python', world: 'decode', title: 'Australian states and territories', titleJa: 'オーストラリアの州と特別地域', category: 'geography-administration', objective: 'list', source: SRC.states, summaryJa: 'オーストラリアは6州と2つの特別地域で構成されています。', prompt: 'リストから Queensland を取り出して表示するよう、添字を埋めてください。', code: 'states = ["New South Wales", "Queensland", "Victoria"]\nprint(states[___BLANK___])', answer: '1', expectedOutput: 'Queensland', hint: 'Python のリストは0番目から数えます。', explanation: 'Queensland はリストの2番目なので添字は1です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'au_py_d05', languageId: 'python', world: 'decode', title: 'Great Barrier Reef', titleJa: 'グレートバリアリーフ', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.reef, summaryJa: 'グレートバリアリーフはクイーンズランド州沖に広がる世界遺産のサンゴ礁です。', prompt: '辞書から location を取り出して Queensland と表示されるよう、キーを埋めてください。', code: 'reef = {"name": "Great Barrier Reef", "location": "Queensland"}\nprint(reef[___BLANK___])', answer: '"location"', expectedOutput: 'Queensland', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"location" キーの値が Queensland です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_AU_python_01', languageId: 'python', world: 'decode', title: 'Royal Exhibition Building and Carlton Gardens', titleJa: 'ロイヤル・エキシビション・ビルディングとカールトン庭園', category: 'world-heritage', objective: 'function', source: SRC.exhibition, summaryJa: 'ロイヤル・エキシビション・ビルディングとカールトン庭園はメルボルンにある世界遺産です。', prompt: '関数と条件を使い、city が Melbourne のときだけ Royal Exhibition Building:Melbourne と表示するよう空欄を埋めてください。', code: 'name = "Royal Exhibition Building"\ncity = "Melbourne"\ndef label(building, place):\n    if place == ___BLANK___:\n        return f"{building}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Melbourne"', expectedOutput: 'Royal Exhibition Building:Melbourne', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Melbourne と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-stringを組み合わせています。' },
  { id: 'final_decode_AU_python_02', languageId: 'python', world: 'decode', title: 'Kakadu National Park', titleJa: 'カカドゥ国立公園', category: 'world-heritage-nature', objective: 'loop', source: SRC.kakadu, summaryJa: 'カカドゥ国立公園はノーザンテリトリーにある世界遺産です。', prompt: 'territory が Northern Territory の公園名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'parks = [\n    {"name": "Kakadu", "territory": "Northern Territory"},\n    {"name": "Other", "territory": "Victoria"}\n]\nfor park in parks:\n    if ___BLANK___:\n        print(park["name"])', answer: 'park["territory"] == "Northern Territory"', expectedOutput: 'Kakadu', hint: '各辞書の territory キーを比較します。', explanation: 'Kakadu の territory だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_AU_python_03', languageId: 'python', world: 'decode', title: 'Tasmanian Wilderness', titleJa: 'タスマニア原生地域', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.tasmania, summaryJa: 'タスマニア原生地域はタスマニア州にある世界遺産です。', prompt: '辞書と関数を使い、Tasmanian Wilderness:Tasmania と表示するキーを埋めてください。', code: 'site = {"name": "Tasmanian Wilderness", "state": "Tasmania"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"state"', expectedOutput: 'Tasmanian Wilderness:Tasmania', hint: 'Tasmania を取り出すキーを選びます。', explanation: '"state" キーの値が Tasmania です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'au_py_e01', languageId: 'python', world: 'execute', title: 'Uluru', titleJa: 'ウルル', category: 'world-heritage-nature', objective: 'function', source: SRC.uluru, summaryJa: 'ウルルはノーザンテリトリーにある世界遺産の一枚岩です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def site_label(name, territory):\n    return f"{name}:{territory}"\nprint(site_label("Uluru", "Northern Territory"))', options: ['Uluru:Northern Territory', 'Northern Territory:Uluru', 'Uluru', 'Error'], answer: 'Uluru:Northern Territory', expectedOutput: 'Uluru:Northern Territory', hint: 'return の f-string で name と territory の順番を見ます。', explanation: 'name が先、territory が後ろなので Uluru:Northern Territory です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'au_py_e02', languageId: 'python', world: 'execute', title: 'Australian National University', titleJa: 'オーストラリア国立大学', category: 'education', objective: 'dictionary', source: SRC.anu, summaryJa: 'オーストラリア国立大学はキャンベラにある大学です。', prompt: '辞書 lookup の結果を選んでください。', code: 'university = {"name": "Australian National University", "city": "Canberra"}\nprint(university["city"])', options: ['Canberra', 'Australian National University', 'Sydney', 'city'], answer: 'Canberra', expectedOutput: 'Canberra', hint: '"city" キーの値を見ます。', explanation: 'university["city"] は Canberra を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'au_py_e03', languageId: 'python', world: 'execute', title: 'Flying Doctor service', titleJa: 'ロイヤル・フライング・ドクター・サービス', category: 'medical-history', objective: 'loop', source: SRC.flyingDoctor, summaryJa: 'ロイヤル・フライング・ドクター・サービスは遠隔地への医療提供と結びつくオーストラリアの組織です。', prompt: 'リストを順に連結した出力を選んでください。', code: 'regions = ["Outback", "Remote"]\nlabel = ""\nfor region in regions:\n    label += region + "|"\nprint(label[:-1])', options: ['Outback|Remote', 'Remote|Outback', 'Outback|', 'Remote'], answer: 'Outback|Remote', expectedOutput: 'Outback|Remote', hint: 'regions の並び順と最後の | の削除を見ます。', explanation: 'Outback、Remote の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'au_py_e04', languageId: 'python', world: 'execute', title: 'Murray River', titleJa: 'マレー川', category: 'geography-nature', objective: 'loop', source: SRC.murray, summaryJa: 'マレー川はオーストラリア最長の川の一つです。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Murray", "type": "river"},\n    {"name": "Eyre", "type": "lake"}\n]\nselected = [r["name"] for r in records if r["type"] == "river"]\nprint(selected[0])', options: ['Murray', 'Eyre', 'river', 'lake'], answer: 'Murray', expectedOutput: 'Murray', hint: 'type が river の辞書だけ残します。', explanation: 'Murray の type だけが river なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_AU_python_01', languageId: 'python', world: 'execute', title: 'Australian convict sites', titleJa: 'オーストラリアの流刑地遺跡', category: 'world-heritage-history', objective: 'loop', source: SRC.convictSites, summaryJa: 'オーストラリアの流刑地遺跡は18〜19世紀の流刑制度を伝える世界遺産です。', prompt: '記録を絞り、year の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Fremantle Prison", "kind": "convict", "year": 1850},\n    {"name": "Other", "kind": "heritage", "year": 1900},\n    {"name": "Cockatoo Island", "kind": "convict", "year": 1839}\n]\nselected = sorted([r for r in records if r["kind"] == "convict"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['Cockatoo Island>Fremantle Prison', 'Fremantle Prison>Cockatoo Island', 'Other>Cockatoo Island', 'Cockatoo Island>Other'], answer: 'Cockatoo Island>Fremantle Prison', expectedOutput: 'Cockatoo Island>Fremantle Prison', hint: 'kind で絞ったあと year の昇順です。', explanation: 'convict は Cockatoo Island(1839) と Fremantle Prison(1850) で、昇順に Cockatoo Island が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_AU_python_02', languageId: 'python', world: 'execute', title: 'Australian biomes dataset', titleJa: 'オーストラリアの主要バイオーム', category: 'geography-nature', objective: 'dictionary', source: SRC.biomes, summaryJa: 'オーストラリアには砂漠、雨林、サバンナ、温帯林、サンゴ礁など複数の主要バイオームがあります。', prompt: '辞書とリストから protected が True の件数を集計した結果を選んでください。', code: 'biomes = [\n    {"name": "Desert", "protected": True},\n    {"name": "Rainforest", "protected": True},\n    {"name": "Savanna", "protected": False},\n    {"name": "Temperate Forest", "protected": True},\n    {"name": "Reef", "protected": False}\n]\ncount = sum(1 for biome in biomes if biome["protected"])\nprint(count)', options: ['3', '5', '2', 'Desert'], answer: '3', expectedOutput: '3', hint: 'protected が True の辞書だけ数えます。', explanation: 'Desert、Rainforest、Temperate Forest の3件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'au_py_b01', languageId: 'python', world: 'debug', title: 'Australian dollar formatting', titleJa: 'オーストラリアドルの表示', category: 'finance', objective: 'strings', source: SRC.aud, summaryJa: 'オーストラリアの通貨はオーストラリアドルです。', prompt: '金額を A$10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("A$" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、A$10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"A${amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'au_py_b02', languageId: 'python', world: 'debug', title: 'Australian postcode format', titleJa: 'オーストラリア郵便番号の形式', category: 'administration', objective: 'strings', source: SRC.postcode, summaryJa: 'オーストラリアの郵便番号は4桁で、先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'postcode = 800\nprint(postcode)', cause: '郵便番号を数値として保存すると先頭ゼロを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号も失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postcode = "0800"\nprint(postcode)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDや郵便番号は計算対象ではなく文字列データとして扱います。' },
  { id: 'au_py_b03', languageId: 'python', world: 'debug', title: 'State abbreviation lookup', titleJa: '州略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.states, summaryJa: 'オーストラリアの州・特別地域には NSW、VIC、QLD などの略号があります。', prompt: '略号 QLD から州名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"NSW": "New South Wales", "VIC": "Victoria"}\ncode = "QLD"\nprint(abbreviations[code])', cause: '辞書に QLD のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"NSW": "New South Wales", "VIC": "Victoria", "QLD": "Queensland"}\ncode = "QLD"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'QLD というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_AU_python_01', languageId: 'python', world: 'debug', title: 'Blue Mountains', titleJa: 'グレーター・ブルー・マウンテンズ地域', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.blueMountains, summaryJa: 'グレーター・ブルー・マウンテンズ地域はニューサウスウェールズ州にある世界遺産です。', prompt: '面積データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Blue Mountains", "area": "10300"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if float(record["area"]) > 1000:\n        large.append(record["name"])\nprint(large)', cause: 'area がない辞書でも record["area"] を直接読んでいる', fix: 'record.get("area") を確認してから float に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Blue Mountains", "area": "10300"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    area = record.get("area")\n    if area is not None and float(area) > 1000:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に area キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、float 変換を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'au_js_d01', languageId: 'javascript', world: 'decode', title: 'Parliament House in Canberra', titleJa: '国会議事堂（キャンベラ）', category: 'politics-architecture', objective: 'object', source: SRC.parliament, summaryJa: '国会議事堂はキャンベラにあるオーストラリア連邦議会の議事堂です。', prompt: 'オブジェクトから city を取り出して Canberra と表示されるよう、空欄を埋めてください。', code: 'const building = { name: "Parliament House", city: "Canberra" };\nconsole.log(building.___BLANK___);', answer: 'city', expectedOutput: 'Canberra', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'building.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'au_js_d02', languageId: 'javascript', world: 'decode', title: 'Melbourne tram network', titleJa: 'メルボルンの路面電車網', category: 'transport-culture', objective: 'strings', source: SRC.tram, summaryJa: 'メルボルンは世界最大級の路面電車網で知られる都市です。', prompt: 'テンプレートリテラルで Melbourne:tram と表示されるよう空欄を埋めてください。', code: 'const city = "Melbourne";\nconst transport = ___BLANK___;\nconsole.log(`${city}:${transport}`);', answer: '"tram"', expectedOutput: 'Melbourne:tram', hint: 'transport に入る文字列を引用符付きで書きます。', explanation: '"tram" を入れると ${transport} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'au_js_d03', languageId: 'javascript', world: 'decode', title: 'Australian Aboriginal flag colors', titleJa: 'アボリジナル・フラッグの色', category: 'culture-symbol', objective: 'array', source: SRC.flag, summaryJa: 'アボリジナル・フラッグは黒・赤・黄の3色で構成されています。', prompt: '配列から yellow を取り出す添字を埋めてください。', code: 'const colors = ["black", "red", "yellow"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'yellow', hint: '配列は0番目から数えます。', explanation: 'yellow は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'au_js_d04', languageId: 'javascript', world: 'decode', title: 'Australian animal group labels', titleJa: 'オーストラリアの動物グループ', category: 'nature', objective: 'switch', source: SRC.marsupial, summaryJa: 'カンガルー、コアラ、ウォンバットはオーストラリアに生息する有袋類です。', prompt: 'animal が koala のとき marsupial と表示されるよう case を埋めてください。', code: 'const animal = "koala";\nswitch (animal) {\n  case ___BLANK___:\n    console.log("marsupial");\n    break;\n  default:\n    console.log("other");\n}', answer: '"koala"', expectedOutput: 'marsupial', hint: 'case には animal と一致する文字列を書きます。', explanation: 'case "koala" が一致し、marsupial が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'au_js_d05', languageId: 'javascript', world: 'decode', title: 'Bondi Beach', titleJa: 'ボンダイビーチ', category: 'geography-landmark', objective: 'loop', source: SRC.bondi, summaryJa: 'ボンダイビーチはシドニーにある有名な海岸です。', prompt: 'for...of で city が Sydney のビーチだけを表示するよう、条件の空欄を埋めてください。', code: 'const beaches = [\n  { name: "Bondi", city: "Sydney" },\n  { name: "Other", city: "Perth" }\n];\nfor (const beach of beaches) {\n  if (___BLANK___) console.log(beach.name);\n}', answer: 'beach.city === "Sydney"', expectedOutput: 'Bondi', hint: '各 beach の city を比較します。', explanation: 'Bondi の city だけが Sydney なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_AU_javascript_01', languageId: 'javascript', world: 'decode', title: 'Ningaloo Coast', titleJa: 'ニンガルー海岸', category: 'world-heritage-nature', objective: 'array', source: SRC.ningaloo, summaryJa: 'ニンガルー海岸はウェスタンオーストラリア州にある世界遺産です。', prompt: 'array methods で coast を含む名前を取り出してください。', code: 'const sites = ["reef", "coast", "desert"];\nconst result = sites.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"coast"', expectedOutput: 'coast', hint: 'includes に探したい部分文字列を渡します。', explanation: '"coast" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_AU_javascript_02', languageId: 'javascript', world: 'decode', title: 'Daintree Rainforest', titleJa: 'デインツリー多雨林', category: 'world-heritage-nature', objective: 'object', source: SRC.daintree, summaryJa: 'デインツリー多雨林はクイーンズランド州の湿潤熱帯地域にある世界遺産です。', prompt: 'find で Daintree の record を探す条件を埋めてください。', code: 'const records = [{name:"Kakadu", type:"wetland"}, {name:"Daintree", type:"rainforest"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.type);', answer: '"Daintree"', expectedOutput: 'rainforest', hint: 'name と一致する文字列を書きます。', explanation: 'Daintree の record が見つかり、type が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_AU_javascript_03', languageId: 'javascript', world: 'decode', title: 'Australian scientific observatories', titleJa: 'オーストラリアの天文観測施設', category: 'science', objective: 'class', source: SRC.parkes, summaryJa: 'パークス天文台はオーストラリアにある主要な電波望遠鏡施設です。', prompt: 'class のインスタンスを map して Parkes:radio と表示してください。', code: 'class Observatory {\n  constructor(name, type) { this.name = name; this.type = type; }\n}\nconst items = [new Observatory("Parkes", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.type}`).join(","));', answer: '"radio"', expectedOutput: 'Parkes:radio', hint: 'constructor の type に入る文字列です。', explanation: 'type に radio が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'au_js_e01', languageId: 'javascript', world: 'execute', title: 'Didgeridoo', titleJa: 'ディジュリドゥ', category: 'music-culture', objective: 'array', source: SRC.didgeridoo, summaryJa: 'ディジュリドゥはアボリジナルの伝統音楽と結びつく管楽器です。', prompt: 'map と join の出力を選んでください。', code: 'const words = ["didgeridoo"];\nconst label = words.map(w => w.toUpperCase()).join("-");\nconsole.log(label);', options: ['DIDGERIDOO', 'didgeridoo', 'D-I', 'Didgeridoo'], answer: 'DIDGERIDOO', expectedOutput: 'DIDGERIDOO', hint: '各要素を大文字化します。', explanation: 'didgeridoo が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'au_js_e02', languageId: 'javascript', world: 'execute', title: 'Great Ocean Road', titleJa: 'グレートオーシャンロード', category: 'transport-tourism', objective: 'loop', source: SRC.greatOcean, summaryJa: 'グレートオーシャンロードはビクトリア州沿岸の観光道路です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [50, 70, 30];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['150', '100', '50', '5070 30'], answer: '150', expectedOutput: '150', hint: '数値を左から足していきます。', explanation: '50 + 70 + 30 = 150 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'au_js_e03', languageId: 'javascript', world: 'execute', title: 'National Gallery of Australia', titleJa: 'オーストラリア国立美術館', category: 'museum-art', objective: 'object', source: SRC.nga, summaryJa: 'オーストラリア国立美術館はキャンベラにある美術館です。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const gallery = { city: "Canberra", collections: ["paintings", "sculptures"] };\nlet result = gallery.city;\nfor (const item of gallery.collections) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Canberra:paintings:sculptures', 'paintings:sculptures:Canberra', 'Canberra', 'sculptures:paintings'], answer: 'Canberra:paintings:sculptures', expectedOutput: 'Canberra:paintings:sculptures', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに paintings、sculptures が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'au_js_e04', languageId: 'javascript', world: 'execute', title: 'Snowy Mountains Scheme', titleJa: 'スノーウィー・マウンテンズ計画', category: 'engineering-history', objective: 'function', source: SRC.snowy, summaryJa: 'スノーウィー・マウンテンズ計画はオーストラリアを代表する水力発電・灌漑事業です。', prompt: '関数と条件の戻り値を選んでください。', code: 'function projectLabel(scale) {\n  return scale > 1000 ? "major" : "minor";\n}\nconsole.log(projectLabel(1500));', options: ['major', 'minor', '1500', 'true'], answer: 'major', expectedOutput: 'major', hint: '1500 > 1000 の判定を見ます。', explanation: '条件が true なので "major" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_AU_javascript_01', languageId: 'javascript', world: 'execute', title: 'Gondwana Rainforests of Australia', titleJa: 'オーストラリアのゴンドワナ多雨林群', category: 'world-heritage-nature', objective: 'array', source: SRC.gondwana, summaryJa: 'ゴンドワナ多雨林群は複数の州にまたがる世界遺産の雨林群です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const reserves = [\n  { name: "Lamington", biome: "rainforest", area: 2 },\n  { name: "Outback", biome: "desert", area: 5 },\n  { name: "Border Ranges", biome: "rainforest", area: 3 }\n];\nconst names = reserves.filter(r => r.biome === "rainforest").map(r => r.name).sort();\nconsole.log(names.join(">"));', options: ['Border Ranges>Lamington', 'Lamington>Border Ranges', 'Outback>Border Ranges', 'Outback>Lamington>Border Ranges'], answer: 'Border Ranges>Lamington', expectedOutput: 'Border Ranges>Lamington', hint: 'biome で絞ったあと、名前をアルファベット順にします。', explanation: 'Border Ranges と Lamington が残り、sort で Border Ranges が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_AU_javascript_02', languageId: 'javascript', world: 'execute', title: 'Australian rail and road routes', titleJa: 'オーストラリアの鉄道・道路ルート', category: 'transport', objective: 'object', source: SRC.routes, summaryJa: 'オーストラリアにはインディアン・パシフィック号などの長距離鉄道ルートがあります。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"Rail", segments:[2,3]}, {name:"Road", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Rail-Road'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Rail は5、Road は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'au_js_b01', languageId: 'javascript', world: 'debug', title: 'Australian phone-number formatting', titleJa: 'オーストラリアの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'オーストラリアの携帯電話番号は10桁で構成されます。', prompt: '10桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "0412345678";\nif (digits.length === 9) {\n  console.log(`${digits.slice(0,4)} ${digits.slice(4)}`);\n}', cause: '10桁の番号なのに length === 9 と判定している', fix: 'length === 10 に修正してから slice する', impact: '10桁の番号を正しく整形できる', why: 'サンプル digits は10文字だからです。', correctedCode: 'const digits = "0412345678";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,4)} ${digits.slice(4)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が9のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'au_js_b02', languageId: 'javascript', world: 'debug', title: 'Brisbane and Gold Coast labels', titleJa: 'ブリスベンとゴールドコースト', category: 'geography-city', objective: 'object', source: SRC.queensland, summaryJa: 'ブリスベンとゴールドコーストはクイーンズランド州の都市です。', prompt: 'Queensland の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Brisbane", state: "Queensland" }, { name: "Gold Coast", state: "Queensland" }];\nconst labels = cities.filter(city => city.region === "Queensland").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには state があるのに region を参照している', fix: 'city.state === "Queensland" に修正する', impact: 'Brisbane と Gold Coast の両方を正しく選べる', why: '存在しない region は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Brisbane", state: "Queensland" }, { name: "Gold Coast", state: "Queensland" }];\nconst labels = cities.filter(city => city.state === "Queensland").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'au_js_b03', languageId: 'javascript', world: 'debug', title: 'Coral reef record', titleJa: 'サンゴ礁レコード', category: 'geography-nature', objective: 'object', source: SRC.reef, summaryJa: 'グレートバリアリーフはサンゴ礁の保全データの題材としても扱われます。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Coral reef" };\nconsole.log(record.detail.region.toUpperCase());', cause: 'record.detail が undefined のまま region を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Coral reef" };\nconst region = record.detail?.region ?? "unknown";\nconsole.log(region.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_AU_javascript_01', languageId: 'javascript', world: 'debug', title: 'Fremantle Prison', titleJa: 'フリーマントル刑務所', category: 'world-heritage-history', objective: 'object', source: SRC.convictSites, summaryJa: 'フリーマントル刑務所はウェスタンオーストラリア州にある世界遺産の流刑地遺跡です。', prompt: 'フリーマントル刑務所のレコードを安全に読み、convict が true の場合だけ表示したいコードです。', code: 'const site = { name: "Fremantle Prison", state: "Western Australia", convict: true };\nif (site.convit === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.state);', cause: 'convict を convit と誤記し、details も存在確認なしで読んでいる', fix: 'site.convict を比較し、site.details?.state ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Fremantle Prison", state: "Western Australia", convict: true };\nif (site.convict === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.state ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'au_java_d01', languageId: 'java', world: 'decode', title: 'High Court of Australia', titleJa: 'オーストラリア高等裁判所', category: 'politics', objective: 'strings', source: SRC.highCourt, summaryJa: 'オーストラリア高等裁判所はキャンベラにあります。', prompt: 'High Court:Canberra と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String court = "High Court";\n    String city = ___BLANK___;\n    System.out.println(court + ":" + city);\n  }\n}', answer: '"Canberra"', expectedOutput: 'High Court:Canberra', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Canberra" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'au_java_d02', languageId: 'java', world: 'decode', title: 'Australian Constitution', titleJa: 'オーストラリア憲法', category: 'politics-history', objective: 'numbers', source: SRC.constitution, summaryJa: 'オーストラリア憲法は1901年に施行されました。', prompt: 'Constitution:1901 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Constitution:" + year;\n    System.out.println(label);\n  }\n}', answer: '1901', expectedOutput: 'Constitution:1901', hint: 'int なので引用符なしの数値です。', explanation: 'year に1901を入れると文字列連結で Constitution:1901 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'au_java_d03', languageId: 'java', world: 'decode', title: 'Eureka Stockade', titleJa: 'ユーレカ・ストッカード事件', category: 'history', objective: 'condition', source: SRC.eureka, summaryJa: 'ユーレカ・ストッカード事件は1854年に起きました。', prompt: 'year が1854のとき Eureka Stockade と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1854;\n    if (___BLANK___) {\n      System.out.println("Eureka Stockade");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1854', expectedOutput: 'Eureka Stockade', hint: '値が等しいかは == で比較します。', explanation: 'year == 1854 が true になるため Eureka Stockade が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'au_java_d04', languageId: 'java', world: 'decode', title: 'Australian transport modes', titleJa: 'オーストラリアの交通手段', category: 'transport', objective: 'switch', source: SRC.routes, summaryJa: 'オーストラリアでは鉄道・道路・航空・フェリーなど複数の交通手段が使われています。', prompt: 'mode が rail のとき train と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "rail";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("train");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'au_java_d05', languageId: 'java', world: 'decode', title: 'Australian regions', titleJa: 'オーストラリアの州・特別地域', category: 'geography-administration', objective: 'array', source: SRC.states, summaryJa: 'オーストラリアは6州と2特別地域から構成されます。', prompt: 'regions 配列を拡張 for で読み、Tasmania だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"Victoria", "Tasmania", "Queensland"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Tasmania")', expectedOutput: 'Tasmania', hint: 'String の内容比較は equals です。', explanation: 'region が Tasmania のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_AU_java_01', languageId: 'java', world: 'decode', title: 'Australian Fossil Mammal Sites', titleJa: 'オーストラリアの哺乳類化石遺跡', category: 'world-heritage-science', objective: 'method', source: SRC.fossilSites, summaryJa: 'オーストラリアの哺乳類化石遺跡（リバースリー・ナラコート）は世界遺産です。', prompt: 'category が fossil のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("fossil")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"fossil"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"fossil" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_AU_java_02', languageId: 'java', world: 'decode', title: 'Heard and McDonald Islands', titleJa: 'ハード島とマクドナルド諸島', category: 'world-heritage-nature', objective: 'collections', source: SRC.heard, summaryJa: 'ハード島とマクドナルド諸島はオーストラリアの外部領土で、世界遺産に登録されています。', prompt: 'ArrayList から external の territory だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Territory {\n  String name;\n  boolean external;\n  Territory(String n, boolean e) { name = n; external = e; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Territory> territories = new ArrayList<>();\n    territories.add(new Territory("Heard Island", true));\n    territories.add(new Territory("Tasmania", false));\n    for (Territory t : territories) {\n      if (___BLANK___) System.out.println(t.name);\n    }\n  }\n}', answer: 't.external', expectedOutput: 'Heard Island', hint: 'external フィールドが true の record だけです。', explanation: 'Heard Island の external だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_AU_java_03', languageId: 'java', world: 'decode', title: 'Macquarie Island', titleJa: 'マッコーリー島', category: 'world-heritage-nature', objective: 'class', source: SRC.macquarie, summaryJa: 'マッコーリー島はオーストラリアの亜南極島で世界遺産です。', prompt: 'HashMap から Macquarie の地域を取り出し Macquarie:Subantarctic と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Island {\n  String name;\n  String region;\n  Island(String n, String r) { name = n; region = r; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Island> map = new HashMap<>();\n    map.put("Macquarie", new Island("Macquarie", "Subantarctic"));\n    Island island = map.get(___BLANK___);\n    System.out.println(island.name + ":" + island.region);\n  }\n}', answer: '"Macquarie"', expectedOutput: 'Macquarie:Subantarctic', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Macquarie キーから island オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'au_java_e01', languageId: 'java', world: 'execute', title: 'Howard Florey', titleJa: 'ハワード・フローリー', category: 'science-history', objective: 'strings', source: SRC.florey, summaryJa: 'ハワード・フローリーはペニシリンの実用化に関わったオーストラリア出身の科学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Howard Florey";\n    if (scientist.equals("Howard Florey")) System.out.println("penicillin");\n    else System.out.println("other");\n  }\n}', options: ['penicillin', 'other', 'Howard Florey', 'true'], answer: 'penicillin', expectedOutput: 'penicillin', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので penicillin が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'au_java_e02', languageId: 'java', world: 'execute', title: 'Australian time zones', titleJa: 'オーストラリアの時間帯', category: 'geography-time', objective: 'method', source: SRC.timezones, summaryJa: 'オーストラリアには複数のUTCオフセットの時間帯があります。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(0, 10));\n  }\n}', options: ['10', '0', '-10', '100'], answer: '10', expectedOutput: '10', hint: '0 + 10 を計算します。', explanation: 'UTC 0時に10を足すので10です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'au_java_e03', languageId: 'java', world: 'execute', title: 'Australian Institute of Sport', titleJa: 'オーストラリア・スポーツ研究所', category: 'sport-institution', objective: 'collections', source: SRC.ais, summaryJa: 'オーストラリア・スポーツ研究所はキャンベラにあります。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("AIS");\n    labels.add("Canberra");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['AIS>Canberra', 'Canberra>AIS', 'AIS>', 'Canberra'], answer: 'AIS>Canberra', expectedOutput: 'AIS>Canberra', hint: '追加した順に result へ入ります。', explanation: 'AIS、Canberra の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'au_java_e04', languageId: 'java', world: 'execute', title: 'Indigenous language family sample', titleJa: '先住民言語系統のサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.languageFamily, summaryJa: 'オーストラリアには複数の先住民言語系統のサンプルデータを扱えます。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class LanguageFamily {\n  String label() { return "family"; }\n}\nclass PamaNyungan extends LanguageFamily {\n  @Override\n  String label() { return "Pama-Nyungan"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    LanguageFamily family = new PamaNyungan();\n    System.out.println(family.label());\n  }\n}', options: ['Pama-Nyungan', 'family', 'LanguageFamily', 'error'], answer: 'Pama-Nyungan', expectedOutput: 'Pama-Nyungan', hint: '実体は PamaNyungan です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_AU_java_01', languageId: 'java', world: 'execute', title: 'Australian state capital records', titleJa: 'オーストラリアの州都レコード', category: 'geography-administration', objective: 'collections', source: SRC.states, summaryJa: 'オーストラリアの各州・特別地域には州都が存在します。', prompt: 'HashMap とメソッドで人口規模が大きい州都を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> capitals = new HashMap<>();\n    capitals.put("Melbourne", 5);\n    capitals.put("Hobart", 1);\n    String result = "";\n    for (String city : capitals.keySet()) if (isLarge(capitals.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Melbourne', 'Hobart', 'MelbourneHobart', '5'], answer: 'Melbourne', expectedOutput: 'Melbourne', hint: 'population が4以上の city だけです。', explanation: 'Melbourne の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_AU_java_02', languageId: 'java', world: 'execute', title: 'Southern Ocean research records', titleJa: '南極海研究レコード', category: 'science-geography', objective: 'collections', source: SRC.southernOcean, summaryJa: '南極海ではオーストラリアの研究機関による観測データが扱われます。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Davis", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Davis:active', 'Closed:active', 'Davis', 'active:Davis'], answer: 'Davis:active', expectedOutput: 'Davis:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Davis だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'au_java_b01', languageId: 'java', world: 'debug', title: 'Victoria abbreviation lookup', titleJa: '州略号 lookup（Java）', category: 'administration', objective: 'strings', source: SRC.states, summaryJa: 'オーストラリアの州略号は NSW、VIC、QLD などです。', prompt: '州略号 VIC を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("VIC");\n    if (code == "VIC") System.out.println("Victoria");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("VIC") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("VIC");\n    if (code.equals("VIC")) System.out.println("Victoria");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'au_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero code formatting', titleJa: '先頭ゼロ付きコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.postcode, summaryJa: '郵便番号風のサンプルコードは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル郵便番号 0800 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 800;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別番号を数値として保存している', fix: 'String sample = "0800"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別番号は計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0800";\n    System.out.println(sample);\n  }\n}', hint: '計算しない番号は String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID や番号形式は numeric type ではなく String として扱います。' },
  { id: 'au_java_b03', languageId: 'java', world: 'debug', title: 'Sports score average', titleJa: 'スポーツ採点平均', category: 'sport', objective: 'numbers', source: SRC.sport, summaryJa: 'サンプルの採点データは平均計算の題材として扱えます。', prompt: '8点と9点の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int judges = 2;\n    double average = total / judges;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または judges を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int judges = 2;\n    double average = (double) total / judges;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_AU_java_01', languageId: 'java', world: 'debug', title: 'Lord Howe Island Group', titleJa: 'ロード・ハウ島群', category: 'world-heritage-nature', objective: 'collections', source: SRC.lordHowe, summaryJa: 'ロード・ハウ島群はオーストラリアの世界遺産で、ニューサウスウェールズ州に属します。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> areas = new HashMap<>();\n    areas.put("Lord Howe Island", "1455");\n    String areaText = areas.get("Other Island");\n    int area = Integer.parseInt(areaText);\n    System.out.println(area);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> areas = new HashMap<>();\n    areas.put("Lord Howe Island", "1455");\n    String areaText = areas.get("Lord Howe Island");\n    try {\n      if (areaText != null) System.out.println(Integer.parseInt(areaText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const AUSTRALIA_FACTS = allSpecs.map(makeFact);
export const AUSTRALIA_ASSIGNMENTS = allSpecs.map(assignment);

export const AU_PY_DECODE = pyDecode.map(decode);
export const AU_PY_EXECUTE = pyExecute.map(execute);
export const AU_PY_DEBUG = pyDebug.map(debug);
export const AU_JS_DECODE = jsDecode.map(decode);
export const AU_JS_EXECUTE = jsExecute.map(execute);
export const AU_JS_DEBUG = jsDebug.map(debug);
export const AU_JAVA_DECODE = javaDecode.map(decode);
export const AU_JAVA_EXECUTE = javaExecute.map(execute);
export const AU_JAVA_DEBUG = javaDebug.map(debug);

export const AUSTRALIA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: AUSTRALIA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: AUSTRALIA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: AUSTRALIA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: AUSTRALIA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: AUSTRALIA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: AUSTRALIA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: AUSTRALIA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: AUSTRALIA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: AUSTRALIA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
