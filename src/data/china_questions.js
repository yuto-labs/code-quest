const SRC = {
  beijing: 'https://www.britannica.com/place/Beijing',
  prcFounding: 'https://www.britannica.com/place/China/The-Peoples-Republic-of-China',
  yangtze: 'https://www.britannica.com/place/Yangtze-River',
  cities: 'https://www.britannica.com/place/China',
  greatWall: 'https://whc.unesco.org/en/list/438',
  imperialPalaces: 'https://whc.unesco.org/en/list/439',
  qinMausoleum: 'https://whc.unesco.org/en/list/441',
  mogaoCaves: 'https://whc.unesco.org/en/list/440',
  shanghai: 'https://www.britannica.com/place/Shanghai',
  pekingMan: 'https://whc.unesco.org/en/list/449',
  silkRoad: 'https://www.britannica.com/place/China',
  yellowRiver: 'https://www.britannica.com/place/Huang-He',
  taishan: 'https://whc.unesco.org/en/list/437',
  institutions: 'https://www.britannica.com/topic/Palace-Museum',
  renminbi: 'https://www.britannica.com/topic/renminbi',
  stationCode: 'https://www.britannica.com/place/China',
  cityAbbrev: 'https://www.britannica.com/place/China',
  huangshan: 'https://whc.unesco.org/en/list/547',
  forbiddenCity: 'https://whc.unesco.org/en/list/439',
  westLake: 'https://whc.unesco.org/en/list/1334',
  flag: 'https://www.britannica.com/topic/flag-of-China',
  transport: 'https://www.britannica.com/place/China',
  suzhouGardens: 'https://whc.unesco.org/en/list/813',
  grandCanal: 'https://whc.unesco.org/en/list/1443',
  longmen: 'https://whc.unesco.org/en/list/1003',
  scienceFigures: 'https://www.nobelprize.org/prizes/medicine/2015/tu/biographical/',
  tuYouyou: 'https://www.nobelprize.org/prizes/medicine/2015/tu/biographical/',
  palaceMuseum: 'https://whc.unesco.org/en/list/439',
  beijingSubway: 'https://www.britannica.com/place/Beijing',
  yungang: 'https://whc.unesco.org/en/list/1039',
  routeData: 'https://www.britannica.com/place/China',
  phone: 'https://www.britannica.com/place/China',
  twoCities: 'https://www.britannica.com/place/Shanghai',
  museumLookup: 'https://www.britannica.com/topic/Palace-Museum',
  fujianTulou: 'https://whc.unesco.org/en/list/1113',
  tiananmen: 'https://www.britannica.com/topic/Tiananmen-Square',
  zhangHeng: 'https://www.britannica.com/biography/Zhang-Heng',
  regions: 'https://www.britannica.com/place/China',
  wulingyuan: 'https://whc.unesco.org/en/list/640',
  jiuzhaigou: 'https://whc.unesco.org/en/list/637',
  chengjiang: 'https://whc.unesco.org/en/list/1388',
  caiLun: 'https://www.britannica.com/biography/Cai-Lun',
  timezone: 'https://www.timeanddate.com/time/zones/cst-china',
  railSample: 'https://www.britannica.com/place/China',
  scriptSample: 'https://www.britannica.com/topic/Chinese-writing',
  cityProvince: 'https://www.britannica.com/place/China',
  researchSite: 'https://www.britannica.com/place/China',
  museumVisitor: 'https://www.britannica.com/topic/Palace-Museum',
  dazu: 'https://whc.unesco.org/en/list/912',
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
  return `cn:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

const FACT_DETAILS = {
  cn_py_d01: {
    backgroundJa: '北京は中華人民共和国の首都で、人口2,000万人を超える政治・文化の中心地です。',
    historyJa: '北京は金・元・明・清の各王朝で首都となり、現在の都市の骨格は1421年に明の永楽帝が遷都した際に整えられました。',
    episodeJa: '「北京」という名称は1403年に永楽帝が「北の都」を意味する語として定めたもので、それ以前は「北平」と呼ばれていました。',
    keyPointsJa: ['1421年に明の永楽帝が遷都', '元・明・清の首都だった', '人口2,000万人超', '「北京」は1403年に命名'],
  },
  cn_py_d02: {
    backgroundJa: '中華人民共和国は1949年に成立した現在の中国の正式国家で、毛沢東を初代国家主席とします。',
    historyJa: '1949年10月1日、毛沢東が北京の天安門で建国を宣言しました。',
    episodeJa: '建国宣言の式典には30万人以上が天安門広場に集まり、人民解放軍の閲兵式が行われました。',
    keyPointsJa: ['1949年10月1日に建国宣言', '天安門で毛沢東が宣言', '初代国家主席は毛沢東', '国慶節として現在も祝日'],
  },
  cn_py_d03: {
    backgroundJa: '長江（揚子江）はアジア最長・世界第3位の長さを持つ河川で、中国の経済・文化の大動脈です。',
    historyJa: 'チベット高原に源を発し、古くから中国文明の中心地の一つとして稲作農業を支えてきました。',
    episodeJa: '全長は約6,300kmに及び、流域人口は約4億人で中国の人口の3分の1近くが暮らしています。',
    keyPointsJa: ['全長約6,300kmでアジア最長', 'チベット高原に源を発する', '流域人口は約4億人', '三峡ダムが建設されている'],
  },
  cn_py_d04: {
    backgroundJa: '北京、上海、広州、深圳は中国を代表する大都市で、それぞれ政治・経済・貿易・ハイテク産業の中心地です。',
    historyJa: '深圳は1980年に経済特区に指定され、漁村から数十年でハイテク都市へ急成長しました。',
    episodeJa: '深圳の人口は1980年の指定時には約3万人でしたが、現在は1,700万人を超える大都市に成長しました。',
    keyPointsJa: ['深圳は1980年に経済特区指定', '広州は古くからの貿易港', '上海は経済の中心地', '北京は政治・文化の中心地'],
  },
  cn_py_d05: {
    backgroundJa: '万里の長城は中国北部を東西に走る防御施設群で、現存する人類最大級の建造物の一つです。',
    historyJa: '春秋戦国時代から各国が築いた城壁を秦の始皇帝が紀元前3世紀に連結し、現存する城壁の多くは明代（14〜17世紀）に再建されました。',
    episodeJa: '総延長は支線を含め約21,196kmに達し、月から見えるという俗説がありますが実際には肉眼で識別できないことが宇宙飛行士により確認されています。',
    keyPointsJa: ['始皇帝が城壁を連結（前3世紀）', '現存部分の多くは明代に再建', '総延長約21,196km', '1987年にユネスコ世界遺産登録'],
  },
  final_decode_CN_python_01: {
    backgroundJa: '明・清王朝の皇宮群は北京の紫禁城と瀋陽の故宮を含む世界遺産で、約500年の宮廷文化を伝えます。',
    historyJa: '紫禁城は1406〜1420年に明の永楽帝が建設し、1987年にユネスコ世界遺産に登録されました。',
    episodeJa: '紫禁城には9,999.5室の部屋があると伝えられ、天帝の宮殿が10,000室とされることへの謙譲から半室を加えたという逸話があります。',
    keyPointsJa: ['1406〜1420年に永楽帝が建設', '1987年にユネスコ世界遺産登録', '部屋数は9,999.5室と伝わる', '瀋陽故宮も登録範囲に含む'],
  },
  final_decode_CN_python_02: {
    backgroundJa: '秦の始皇帝陵は中国を統一した始皇帝の陵墓で、有名な兵馬俑坑を含む世界遺産です。',
    historyJa: '始皇帝陵の建設は紀元前246年頃に始まり、兵馬俑は1974年に陝西省の農民が井戸を掘削中に偶然発見しました。',
    episodeJa: '兵馬俑は約8,000体が確認されており、1体ごとに顔や表情が異なる写実的な作りで、「20世紀最大の考古学的発見」とも呼ばれています。',
    keyPointsJa: ['建設開始は紀元前246年頃', '兵馬俑は1974年に偶然発見', '兵馬俑は約8,000体確認', '1987年にユネスコ世界遺産登録'],
  },
  final_decode_CN_python_03: {
    backgroundJa: '莫高窟は甘粛省敦煌にある仏教石窟群で、シルクロードの東西交流を伝える世界遺産です。',
    historyJa: '4世紀（366年頃）に最初の石窟が開かれ、10世紀にわたって彫像や壁画が制作されました。',
    episodeJa: '現存する石窟は492窟に及び、1900年に「蔵経洞」と呼ばれる隠し部屋から5万点以上の古文書・経典が発見されました。',
    keyPointsJa: ['最初の石窟は4世紀に開削', '現存492窟', '1900年に蔵経洞から古文書発見', '1987年にユネスコ世界遺産登録'],
  },
  cn_py_e01: {
    backgroundJa: '上海は長江河口に位置する中国最大の都市で、金融・貿易の中心地として知られます。',
    historyJa: '19世紀のアヘン戦争後、1842年の南京条約で開港し、列強の租界が置かれて国際都市として発展しました。',
    episodeJa: '人口は2,400万人を超え、外灘（バンド）には租界時代の欧風建築が今も並び、対岸の浦東には超高層ビル群が建ち並びます。',
    keyPointsJa: ['1842年の南京条約で開港', '人口2,400万人超', '外灘に租界時代の建築が残る', '浦東は金融センターとして発展'],
  },
  cn_py_e02: {
    backgroundJa: '北京原人遺跡（周口店）は約77万〜23万年前の原人化石が発見された世界遺産です。',
    historyJa: '1921年に遺跡が発見され、1929年に裴文中によって最初の完全な頭蓋骨が発掘されました。',
    episodeJa: '発見された化石の多くは第二次世界大戦中に行方不明となり、現在も発見されていない「ピルトダウン」と並ぶ考古学上の謎とされています。',
    keyPointsJa: ['1921年に遺跡発見', '1929年に頭蓋骨発掘', '化石原本は戦時中に消失', '1987年にユネスコ世界遺産登録'],
  },
  cn_py_e03: {
    backgroundJa: 'シルクロードは中国とユーラシア西方を結んだ古代の交易路網で、絹だけでなく宗教・技術も伝えました。',
    historyJa: '紀元前2世紀、漢の張騫が西域へ派遣されたことが交易路開拓の契機とされています。',
    episodeJa: '2014年に中国・カザフスタン・キルギスにまたがる「シルクロード：長安－天山回廊の交易路網」がユネスコ世界遺産に登録されました。',
    keyPointsJa: ['前2世紀に張騫が西域へ派遣', '絹・香料・宗教・技術が伝播', '2014年にユネスコ世界遺産登録', '起点は長安（現西安）'],
  },
  cn_py_e04: {
    backgroundJa: '黄河は中国文明の発祥地とされる河川で、「中華民族の母なる川」と呼ばれます。',
    historyJa: '全長約5,464kmで、流域では約5,000年前から黄河文明が発展しました。',
    episodeJa: '黄土高原を流れる際に大量の黄色い土砂を含むため「黄河」と呼ばれ、過去に何度も流路を変え大洪水を起こしてきました。',
    keyPointsJa: ['全長約5,464km', '中国第2位の長さ', '黄河文明発祥の地', '黄土を含むため黄色い水'],
  },
  final_execute_CN_python_01: {
    backgroundJa: '泰山は山東省にある中国五岳の中で最も尊崇される山で、古来皇帝が天を祀る封禅の儀式を行いました。',
    historyJa: '歴代71人の皇帝が泰山で祭祀を行ったと伝えられ、1987年にユネスコ世界遺産に登録されました。',
    episodeJa: '山頂までの石段は約6,700段に及び、孔子や杜甫など多くの文人がこの山に登り詩を残しています。',
    keyPointsJa: ['歴代皇帝が封禅の儀式を実施', '石段は約6,700段', '1987年にユネスコ世界遺産登録', '中国五岳の中で最高位'],
  },
  final_execute_CN_python_02: {
    backgroundJa: '故宮博物院、国家博物館、上海博物館などは中国を代表する文化機関で、それぞれ宮廷文物・通史・地域文化を扱います。',
    historyJa: '故宮博物院は1925年、紫禁城を博物館として開放したことで設立されました。',
    episodeJa: '故宮博物院の所蔵品は180万点を超え、1933年の日中関係の緊張時には文物が南方へ疎開させられた歴史があります。',
    keyPointsJa: ['故宮博物院は1925年設立', '所蔵品180万点超', '1933年に文物疎開を実施', '国家博物館は2003年に統合発足'],
  },
  cn_py_b01: {
    backgroundJa: '人民元（元）は中華人民共和国の公式通貨で、補助単位に角・分を持ちます。',
    historyJa: '人民元は1948年12月、中国人民銀行の設立とともに発行が始まりました。',
    episodeJa: '紙幣には毛沢東の肖像が描かれていますが、硬貨やコインのデザインは発行年代ごとに大きく変化してきました。',
    keyPointsJa: ['1948年12月に発行開始', '発行元は中国人民銀行', '紙幣に毛沢東の肖像', '補助単位は角・分'],
  },
  cn_py_b02: {
    backgroundJa: '中国の鉄道駅には識別用の電報略号（電報コード）が使われており、これは数値ではなく文字列として保持すべきデータの一例です。',
    historyJa: '中国の鉄道駅電報コードは20世紀前半の電信網整備とともに導入され、現在も予約システムなどで使われています。',
    episodeJa: '北京は「BP」、上海は「SHH」のように、駅名のピンインの一部を組み合わせた略号が割り当てられています。',
    keyPointsJa: ['駅の電報コードは電信時代に整備', '北京は「BP」、上海は「SHH」', '現在も鉄道システムで使用', '先頭ゼロを含むコードは文字列で扱う'],
  },
  cn_py_b03: {
    backgroundJa: '中国の都市には国際的な車両ナンバープレートの地域コードなど、略号で区別される仕組みがあります。',
    historyJa: '中国の自動車ナンバープレートの省・直轄市コードは1994年の制度改正で現在の漢字1文字＋アルファベット方式に整理されました。',
    episodeJa: '北京は「京」、上海は「沪」、広東省は「粤」のように、各地域の古称や別名に由来する漢字が使われています。',
    keyPointsJa: ['1994年に現行のプレート方式に統一', '北京は「京」、上海は「沪」', '漢字は地域の古称に由来', '都市の英語略号は公式制度ではない'],
  },
  final_debug_CN_python_01: {
    backgroundJa: '黄山は奇岩・松・雲海で知られる安徽省の名山で、中国の水墨画や文学に多大な影響を与えました。',
    historyJa: '古くは「黟山」と呼ばれ、伝説の黄帝に由来して唐代（747年）に「黄山」と改名されたと伝わります。',
    episodeJa: '迎客松と呼ばれる樹齢800年を超える松が山の名物で、1990年にユネスコ世界遺産（複合遺産）に登録されました。',
    keyPointsJa: ['747年に「黄山」と改名と伝わる', '迎客松は樹齢800年超', '1990年にユネスコ世界遺産登録', '72の主峰を持つ'],
  },
  cn_js_d01: {
    backgroundJa: '紫禁城（故宮）は明・清王朝の皇宮で、現存する世界最大の木造宮殿建築群です。',
    historyJa: '1406年に建設が始まり1420年に完成し、1925年から故宮博物院として公開されています。',
    episodeJa: '敷地面積は約72万平方メートル、建物の数は980棟、部屋数は約8,700室に及びます。',
    keyPointsJa: ['1406〜1420年に建設', '面積約72万平方メートル', '建物980棟、約8,700室', '1987年にユネスコ世界遺産登録'],
  },
  cn_js_d02: {
    backgroundJa: '西湖は浙江省杭州市にある景勝地で、中国の詩や絵画に繰り返し描かれてきた湖です。',
    historyJa: '唐代から景観整備が進み、白居易や蘇東坡など歴代の文人・官僚が堤や橋の整備に関わりました。',
    episodeJa: '「西湖十景」として知られる景観群があり、2011年にユネスコ世界遺産（文化的景観）に登録されました。',
    keyPointsJa: ['唐代から景観整備が進む', '白居易・蘇東坡らが整備に関与', '「西湖十景」が有名', '2011年にユネスコ世界遺産登録'],
  },
  cn_js_d03: {
    backgroundJa: '中国国旗「五星紅旗」は赤地に黄色い星をあしらった国旗で、1949年の建国とともに制定されました。',
    historyJa: '1949年9月27日に全国政治協商会議で曾聯松のデザインが採用され、10月1日の建国式典で初めて掲げられました。',
    episodeJa: '大きな星は中国共産党を、4つの小さな星は労働者・農民・知識階級・民族資本家を表すとされています。',
    keyPointsJa: ['1949年9月27日に正式採用', 'デザインは曾聯松による', '大星は共産党、小星4つは4階層を象徴', '建国式典で初めて掲揚'],
  },
  cn_js_d04: {
    backgroundJa: '中国では高速鉄道、地下鉄、河川、航空など多様な交通手段が国土を結んでいます。',
    historyJa: '中国高速鉄道は2008年の北京-天津間開業から急速に拡大し、現在は世界最長の高速鉄道網を持ちます。',
    episodeJa: '高速鉄道の総延長は4万kmを超え、世界の高速鉄道網の3分の2以上を占めるとされています。',
    keyPointsJa: ['高速鉄道は2008年開業開始', '総延長4万km超', '世界の高速鉄道網の3分の2以上', '北京地下鉄は1969年開業'],
  },
  cn_js_d05: {
    backgroundJa: '蘇州古典園林は江南地方の文人庭園群で、限られた space に山水の趣を再現した造園技術の精華です。',
    historyJa: '現存する庭園の多くは明・清代（14〜19世紀）に造られ、起源は11世紀の北宋時代まで遡るものもあります。',
    episodeJa: '拙政園、留園など9つの庭園が1997年と2000年の2回に分けてユネスコ世界遺産に登録されました。',
    keyPointsJa: ['多くは明・清代に造園', '起源は11世紀まで遡るものも', '1997年・2000年に世界遺産登録', '拙政園・留園などが含まれる'],
  },
  final_decode_CN_javascript_01: {
    backgroundJa: '京杭大運河（大運河）は北京と杭州を結ぶ世界最長の運河で、南北の物資輸送を支えてきました。',
    historyJa: '建設は紀元前5世紀に始まり、7世紀の隋代に現在の規模に大幅拡張されました。',
    episodeJa: '全長は約1,776kmに及び、2014年にユネスコ世界遺産に登録された際の登録区間は中国全体で約1,011kmの運河網を含みます。',
    keyPointsJa: ['紀元前5世紀に建設開始', '隋代（7世紀）に大規模拡張', '全長約1,776km', '2014年にユネスコ世界遺産登録'],
  },
  final_decode_CN_javascript_02: {
    backgroundJa: '龍門石窟は河南省洛陽近郊にある仏教石窟群で、北魏から唐代にかけて彫られました。',
    historyJa: '493年の北魏遷都後に開削が始まり、唐代（7〜8世紀）まで約400年にわたり造営が続きました。',
    episodeJa: '最大の仏像である奉先寺の盧舎那仏は高さ約17.14mで、唐の則天武后の支援により作られたと伝わります。',
    keyPointsJa: ['493年の北魏遷都後に開削開始', '約400年間造営が続いた', '盧舎那仏は高さ約17.14m', '2000年にユネスコ世界遺産登録'],
  },
  final_decode_CN_javascript_03: {
    backgroundJa: '張衡、蔡倫、屠呦呦は中国の科学史を代表する人物で、それぞれ地震学・製紙術・薬学で功績を残しました。',
    historyJa: '張衡は132年に世界初の地震計を発明し、蔡倫は105年に製紙術を改良し、屠呦呦は2015年にノーベル生理学・医学賞を受賞しました。',
    episodeJa: '屠呦呦は博士号も海外留学経験もない中で中国伝統医学の古典から着想を得てアルテミシニンを発見し、中国人女性として初のノーベル賞受賞者となりました。',
    keyPointsJa: ['張衡の地震計は132年発明', '蔡倫の製紙術は105年に皇帝へ献上', '屠呦呦は2015年ノーベル賞受賞', '屠呦呦は中国初の女性ノーベル賞受賞者'],
  },
  cn_js_e01: {
    backgroundJa: '屠呦呦（トゥ・ヨウヨウ）は抗マラリア薬アルテミシニンを発見した中国の薬学者です。',
    historyJa: '1972年に中国伝統医学の古典からヨモギの一種（クソニンジン）由来の成分アルテミシニンを単離しました。',
    episodeJa: '2015年にノーベル生理学・医学賞を受賞し、中国出身の科学者として初の自然科学系ノーベル賞受賞者となりました。',
    keyPointsJa: ['1972年にアルテミシニンを単離', '2015年にノーベル賞受賞', '中国初の自然科学系ノーベル賞受賞者', '2000種以上の薬草候補を調査'],
  },
  cn_js_e02: {
    backgroundJa: '長江はアジア最長の河川で、上流から下流にかけて複数の地理的区間に分けられます。',
    historyJa: '長江は古来「江」と呼ばれ、三峡や洞庭湖など各区間ごとに異なる景観と歴史を持ちます。',
    episodeJa: '三峡ダムは2006年に完成し、世界最大級の発電容量（2,250万kW）を持つ水力発電所です。',
    keyPointsJa: ['全長約6,300km', '三峡ダムは2006年完成', '発電容量2,250万kW', '流域人口は約4億人'],
  },
  cn_js_e03: {
    backgroundJa: '故宮博物院は紫禁城を利用した博物館で、明・清両王朝の宮廷文物を中心に所蔵しています。',
    historyJa: '1925年10月10日に開館し、1933年には日中関係の緊張により文物の一部が南方へ疎開されました。',
    episodeJa: '所蔵品は180万点を超え、台北の国立故宮博物院は疎開した文物の一部を基に1965年に設立されたものです。',
    keyPointsJa: ['1925年10月10日開館', '所蔵品180万点超', '1933年に文物疎開', '台北国立故宮博物院は1965年設立'],
  },
  cn_js_e04: {
    backgroundJa: '北京地下鉄は中国初の地下鉄道網で、現在は世界最長クラスの路線網を持ちます。',
    historyJa: '1969年10月1日に最初の路線（環状線の一部）が開業しました。',
    episodeJa: '当初は軍事・防空目的も兼ねて建設され、一般向けの定期運行が始まったのは1981年のことです。',
    keyPointsJa: ['1969年10月1日に開業', '当初は軍事目的も兼ねた', '1981年に一般定期運行開始', '現在の総延長は800km超'],
  },
  final_execute_CN_javascript_01: {
    backgroundJa: '雲岡石窟は山西省大同にある仏教石窟群で、北魏時代を代表する仏教美術の宝庫です。',
    historyJa: '460年頃、北魏の文成帝の命により僧の曇曜が中心となって開削が始まりました。',
    episodeJa: '最大の仏像（第20窟の露天大仏）は高さ約13.7mに及び、252の石窟に5万体を超える仏像が彫られています。',
    keyPointsJa: ['460年頃に開削開始', '252の石窟が現存', '仏像は5万体超', '2001年にユネスコ世界遺産登録'],
  },
  final_execute_CN_javascript_02: {
    backgroundJa: '中国の鉄道・河川ルートは高速鉄道網と長江・大運河などの水運網が組み合わさった輸送体系です。',
    historyJa: '高速鉄道は2008年の開業以来急速に拡大し、内陸の水運は古代の大運河の時代から続いています。',
    episodeJa: '高速鉄道の総延長は4万kmを超え、世界の高速鉄道網の3分の2以上を中国が占めています。',
    keyPointsJa: ['高速鉄道は2008年開業開始', '総延長4万km超', '大運河は紀元前5世紀起源', '水運と鉄道網が併存'],
  },
  cn_js_b01: {
    backgroundJa: '中国の電話番号は地域固定電話と携帯電話で異なる桁数の形式を持ち、先頭ゼロを保つ場合があります。',
    historyJa: '中国の携帯電話番号は1990年代の携帯網拡大とともに11桁形式（1から始まる）が定着しました。',
    episodeJa: '固定電話の市外局番には北京の「010」のように先頭ゼロが付くものがあり、これは数値ではなく文字列として保持する必要があります。',
    keyPointsJa: ['携帯番号は11桁、1から始まる', '市外局番は先頭ゼロを含む場合がある', '北京の市外局番は010', '識別番号は文字列として扱うべき'],
  },
  cn_js_b02: {
    backgroundJa: '北京と上海は中国を代表する2大都市で、それぞれ政治と経済の中心という異なる役割を担います。',
    historyJa: '北京は1949年から首都、上海は1842年の開港以来経済・金融の中心として発展しました。',
    episodeJa: '人口は北京が約2,184万人、上海が約2,487万人で、いずれも世界最大級の都市圏を形成しています。',
    keyPointsJa: ['北京は1949年から首都', '上海は1842年開港', '人口は両都市とも2,000万人超', '北京は政治、上海は経済の中心'],
  },
  cn_js_b03: {
    backgroundJa: '故宮博物院は所蔵品データベースの参照例としてよく扱われる、世界最大級の博物館収蔵機関です。',
    historyJa: '1925年の開館以来、所蔵品の整理・目録化が進められ、現在は180万点を超える文物を管理しています。',
    episodeJa: '2010年代以降はデジタルアーカイブ化が進み、所蔵品の多くがオンラインで検索・公開されるようになりました。',
    keyPointsJa: ['1925年開館', '所蔵品180万点超', '2010年代にデジタル化が進展', 'オンライン目録を公開'],
  },
  final_debug_CN_javascript_01: {
    backgroundJa: '福建土楼は福建省にある客家の集合住宅群で、防御機能を兼ねた円形・方形の土造建築です。',
    historyJa: '現存する土楼は15世紀から20世紀にかけて建てられ、2008年にユネスコ世界遺産に登録されました。',
    episodeJa: '最大級の土楼は1棟で最大800人が暮らせる規模を持ち、土を突き固めた壁は厚さ1.5m、高さ18mに達するものもあります。',
    keyPointsJa: ['15〜20世紀に建設', '2008年にユネスコ世界遺産登録', '1棟で最大800人が居住可能', '壁の厚さは最大1.5m'],
  },
  cn_java_d01: {
    backgroundJa: '天安門広場は北京の中心部にある世界最大級の広場で、中国の政治的出来事の舞台となってきました。',
    historyJa: '現在の広場の規模は1949年の建国後、1958年の拡張工事で整えられました。',
    episodeJa: '広場の面積は約44万平方メートルで、最大100万人を収容できるとされ、毛主席紀念堂や人民英雄紀念碑があります。',
    keyPointsJa: ['1958年に現在の規模へ拡張', '面積約44万平方メートル', '最大100万人収容可能', '毛主席紀念堂が広場内にある'],
  },
  cn_java_d02: {
    backgroundJa: '屠呦呦は中国伝統医学からアルテミシニンを発見し、ノーベル賞を受賞した薬学者です。',
    historyJa: '1972年にアルテミシニンを単離し、2015年にノーベル生理学・医学賞を受賞しました。',
    episodeJa: '受賞時81歳で、博士号や海外留学経験を持たない「三無科学家（三つない科学者）」と呼ばれていたことも話題になりました。',
    keyPointsJa: ['2015年にノーベル賞受賞', '受賞時81歳', '博士号・留学経験なしで受賞', '中国初の自然科学系ノーベル賞'],
  },
  cn_java_d03: {
    backgroundJa: '張衡は後漢の科学者・発明家で、世界初の地震計（地動儀）を作った人物として知られます。',
    historyJa: '132年に地動儀を発明し、宮廷に設置して地震の方向を検知しました。',
    episodeJa: '地動儀がある時、誰も振動を感じなかったにもかかわらず西方の地震を検知し、数日後に隴西（現甘粛省）で地震が発生したことが記録に残っています。',
    keyPointsJa: ['132年に地動儀を発明', '8方向の地震検知が可能', '隴西の地震を事前検知した逸話', '世界初の地震計とされる'],
  },
  cn_java_d04: {
    backgroundJa: '中国では高速鉄道、地下鉄、河川、航空など多様な交通手段が利用されています。',
    historyJa: '高速鉄道は2008年に開業し、地下鉄（北京）は1969年に開業しました。',
    episodeJa: '中国の高速鉄道の総延長は2023年時点で4万5,000kmを超え、世界の高速鉄道網の3分の2以上を占めています。',
    keyPointsJa: ['高速鉄道は2008年開業', '北京地下鉄は1969年開業', '高速鉄道総延長4万5,000km超', '世界最大の高速鉄道網'],
  },
  cn_java_d05: {
    backgroundJa: '中国は華北・華南・西北・東北など複数の地理的地域に区分され、気候や文化が大きく異なります。',
    historyJa: '中国の行政区分は23省・5自治区・4直轄市・2特別行政区から構成されます。',
    episodeJa: '国土面積は約960万平方キロメートルで世界第3〜4位、東西の時差は実質4時間に及びますが全国で北京時間（UTC+8）に統一されています。',
    keyPointsJa: ['23省・5自治区・4直轄市・2特別行政区', '国土面積約960万平方キロ', '全国で北京時間に統一', '東西で気候・文化が大きく異なる'],
  },
  final_decode_CN_java_01: {
    backgroundJa: '武陵源風景名勝区は湖南省張家界にある奇岩群で、映画「アバター」の浮遊する山のモデルとも言われます。',
    historyJa: '1992年にユネスコ世界遺産（自然遺産）に登録されました。',
    episodeJa: '3,000を超える石柱峰が立ち並び、2010年には景観の一つが映画にちなんで「アバター・ハレルヤ山」と改名されました。',
    keyPointsJa: ['1992年にユネスコ世界遺産登録', '3,000を超える石柱峰', '映画「アバター」の景観モデル', '「アバター・ハレルヤ山」と改名された峰がある'],
  },
  final_decode_CN_java_02: {
    backgroundJa: '九寨溝風景名勝区は四川省にある色鮮やかな湖群で知られる自然景観区です。',
    historyJa: '1992年にユネスコ世界遺産に登録され、1997年には世界生物圏保護区にも指定されました。',
    episodeJa: '湖水は炭酸カルシウムの沈積により青・緑・ターコイズなど多彩な色を見せ、2017年の地震で一部の景観が影響を受けました。',
    keyPointsJa: ['1992年にユネスコ世界遺産登録', '1997年に世界生物圏保護区指定', '炭酸カルシウムで湖が多彩な色に', '2017年の地震で一部景観に影響'],
  },
  final_decode_CN_java_03: {
    backgroundJa: '澗江（チェンジャン）化石遺跡は雲南省にあるカンブリア紀の化石産地で、生命の急速な多様化を伝える世界遺産です。',
    historyJa: '約5億3,000万年前のカンブリア紀の地層から発見され、2012年にユネスコ世界遺産（中国初の化石関連遺産）に登録されました。',
    episodeJa: '196種を超える生物化石が発見されており、軟体部分まで保存された極めて良好な化石が含まれることで知られています。',
    keyPointsJa: ['約5億3,000万年前の地層', '2012年にユネスコ世界遺産登録', '中国初の化石関連世界遺産', '196種以上の化石を確認'],
  },
  cn_java_e01: {
    backgroundJa: '蔡倫は後漢の官僚で、現在につながる製紙技術を体系化した人物とされています。',
    historyJa: '105年に桑の皮・麻・古布・漁網などを原料とする製紙法を皇帝に献上しました。',
    episodeJa: 'この製法は『後漢書』に記録され、中国の「四大発明」の一つとして後世、製紙術は8世紀にイスラム世界、12世紀にヨーロッパへ伝わりました。',
    keyPointsJa: ['105年に製紙法を皇帝へ献上', '原料は桑の皮・麻・古布など', '中国の四大発明の一つ', '8世紀にイスラム世界へ伝播'],
  },
  cn_java_e02: {
    backgroundJa: '中国は国土が広いにもかかわらず、全国で北京時間（UTC+8）という単一の標準時を使用しています。',
    historyJa: '1949年の建国後、それまで複数あった時間帯を統一し、北京時間に一本化しました。',
    episodeJa: '東西の経度差から本来5つの時間帯に分かれるはずですが、政治的・行政的な統一のため全土が同じ時刻で運用されています。',
    keyPointsJa: ['1949年に標準時を統一', 'UTC+8（北京時間）に一本化', '本来は5つの時間帯に相当', '新疆など西部では日の出が遅い'],
  },
  cn_java_e03: {
    backgroundJa: '中国の鉄道網は高速鉄道（高鉄）と在来線が組み合わさった世界最大規模の路線網です。',
    historyJa: '高速鉄道は2008年の北京-天津間開業を皮切りに急速に拡大しました。',
    episodeJa: '京滬高速鉄道（北京-上海）は2011年開業で全長約1,318km、最高営業速度350km/hを誇ります。',
    keyPointsJa: ['高速鉄道は2008年開業開始', '京滬高速鉄道は2011年開業', '最高営業速度350km/h', '総延長は世界最長'],
  },
  cn_java_e04: {
    backgroundJa: '中国語の文字体系は漢字を基本とし、簡体字（中国本土）と繁体字（台湾・香港など）の2系統が使われています。',
    historyJa: '簡体字は1950年代の文字改革で制定され、1956年に最初の簡化字総表が公布されました。',
    episodeJa: '漢字は約3,000年前の甲骨文字に起源を持つとされ、現在の常用漢字は約3,500字程度とされています。',
    keyPointsJa: ['簡体字は1950年代に制定', '1956年に簡化字総表公布', '漢字の起源は甲骨文字', '簡体字と繁体字の2系統が現存'],
  },
  final_execute_CN_java_01: {
    backgroundJa: '中国の主要都市はそれぞれ省・直轄市に属し、人口規模や経済的役割が大きく異なります。',
    historyJa: '直轄市（北京・上海・天津・重慶）の制度は中華人民共和国成立後に整理され、現在の4直轄市体制が定着しました。',
    episodeJa: '重慶は2007年時点で人口3,000万人を超える「世界最大の直轄市」とされ、面積は8万2,000平方kmに及びます。',
    keyPointsJa: ['直轄市は北京・上海・天津・重慶の4市', '重慶は人口3,000万人規模', '重慶の面積は8万2,000平方km', '直轄市は省と同格の行政単位'],
  },
  final_execute_CN_java_02: {
    backgroundJa: '中国は南極・北極の科学研究にも参加し、複数の研究拠点を運営しています。',
    historyJa: '中国初の南極観測拠点「長城基地」は1985年に開設されました。',
    episodeJa: '中国は現在、南極に5つの観測基地（長城・中山・崑崙・泰山・秦嶺）を持ち、北極にも黄河基地（2004年開設）を運営しています。',
    keyPointsJa: ['長城基地は1985年開設', '南極に5基地を運営', '北極の黄河基地は2004年開設', '中国極地研究の拠点として機能'],
  },
  cn_java_b01: {
    backgroundJa: '中国の都市には鉄道電報コードなど、文字列として保持すべき識別コードが存在します。',
    historyJa: '鉄道電報コードは20世紀前半の電信網整備とともに導入され、現在も座席予約システムで使われています。',
    episodeJa: '北京は「BP」、上海は「SHH」、広州は「GZQ」のように、駅名のピンインに基づく略号が割り当てられています。',
    keyPointsJa: ['鉄道電報コードは電信時代に整備', '北京は「BP」、上海は「SHH」', '座席予約システムで現在も使用', 'コードは文字列として保持すべき'],
  },
  cn_java_b02: {
    backgroundJa: '中国の行政・物流コードには先頭ゼロを含む形式があり、数値ではなく文字列として扱うべきデータの一例です。',
    historyJa: '郵便番号（邮政编码）は1980年に導入された6桁制で、地域ごとに割り当てられています。',
    episodeJa: '北京の郵便番号は「100000」番台のように先頭が「1」で始まるなど、地域ごとの先頭数字が決まっています。',
    keyPointsJa: ['郵便番号は1980年に導入', '6桁の数字コード', '北京は「100000」番台', '先頭ゼロを保つには文字列が必要'],
  },
  cn_java_b03: {
    backgroundJa: '故宮博物院は世界で最も来館者数の多い博物館の一つで、来館者数データの集計例としてよく扱われます。',
    historyJa: '1925年の開館以来、来館者数の記録が続けられてきました。',
    episodeJa: '2019年には年間来館者数が初めて1,900万人を超え、新型コロナ流行後の2023年には1日あたりの入場制限（最大4万人）が設けられました。',
    keyPointsJa: ['1925年開館以来の記録がある', '2019年に年間1,900万人超を記録', '1日あたり最大4万人の入場制限', '世界で最も来館者が多い博物館の一つ'],
  },
  final_debug_CN_java_01: {
    backgroundJa: '大足石刻は重慶市大足区にある仏教・道教・儒教が融合した石刻群で、唐から南宋にかけて造営されました。',
    historyJa: '最初の造像は650年（唐代初期）に始まり、9世紀末から12〜13世紀の南宋期に最盛期を迎えました。',
    episodeJa: '75か所の保護区に約5万体の仏像が彫られ、1999年にユネスコ世界遺産に登録された際には「三教（儒・仏・道）の調和」が評価されました。',
    keyPointsJa: ['最初の造像は650年', '南宋期（12〜13世紀）に最盛期', '約5万体の仏像', '1999年にユネスコ世界遺産登録'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、中国の歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'CN',
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
    countryId: 'CN',
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
  { id: 'cn_py_d01', languageId: 'python', world: 'decode', title: 'Beijing as capital', titleJa: '北京（首都）', category: 'geography-capital', objective: 'strings', source: SRC.beijing, summaryJa: '北京は中国の首都です。', prompt: '北京は中国の首都です。下のコードを実行すると China\'s capital is Beijing. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("China\'s capital is " + capital + ".")', answer: '"Beijing"', expectedOutput: "China's capital is Beijing.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"Beijing" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'cn_py_d02', languageId: 'python', world: 'decode', title: 'Founding year of the People’s Republic of China', titleJa: '中華人民共和国の建国年', category: 'history', objective: 'integers', source: SRC.prcFounding, summaryJa: '中華人民共和国は1949年に建国されました。', prompt: '年が1949のとき Founded:1949 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Founded:{year}"\nprint(label)', answer: '1949', expectedOutput: 'Founded:1949', hint: '整数は引用符なしで書きます。', explanation: 'year に1949を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'cn_py_d03', languageId: 'python', world: 'decode', title: 'Yangtze River label', titleJa: '長江（ヤンツー川）', category: 'geography-nature', objective: 'condition', source: SRC.yangtze, summaryJa: '長江は中国の主要な河川です。', prompt: '河川名が Yangtze のとき river と表示されるよう、if の条件を完成させてください。', code: 'river = "Yangtze"\nif ___BLANK___:\n    print("river")\nelse:\n    print("other")', answer: 'river == "Yangtze"', expectedOutput: 'river', hint: '文字列が完全に一致するか == で比較します。', explanation: 'river の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'cn_py_d04', languageId: 'python', world: 'decode', title: 'Chinese city sample labels', titleJa: '中国の都市サンプルラベル', category: 'geography', objective: 'list', source: SRC.cities, summaryJa: 'サンプルとして Beijing、Shanghai、Xi’an などの都市ラベルを扱います。', prompt: 'リストから Xi’an を取り出して表示するよう、添字を埋めてください。', code: 'cities = ["Beijing", "Shanghai", "Xi’an"]\nprint(cities[___BLANK___])', answer: '2', expectedOutput: 'Xi’an', hint: 'Python のリストは0番目から数えます。', explanation: 'Xi’an はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'cn_py_d05', languageId: 'python', world: 'decode', title: 'Great Wall lookup', titleJa: '万里の長城', category: 'world-heritage', objective: 'dictionary', source: SRC.greatWall, summaryJa: '万里の長城は中国にある世界遺産です。', prompt: '辞書から category を取り出して heritage と表示されるよう、キーを埋めてください。', code: 'site = {"name": "Great Wall", "category": "heritage"}\nprint(site[___BLANK___])', answer: '"category"', expectedOutput: 'heritage', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"category" キーの値が heritage です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_CN_python_01', languageId: 'python', world: 'decode', title: 'Imperial Palaces of the Ming and Qing Dynasties', titleJa: '明・清王朝の皇宮群', category: 'world-heritage', objective: 'function', source: SRC.imperialPalaces, summaryJa: '明・清王朝の皇宮群は北京と瀋陽にある世界遺産です。', prompt: '関数と条件を使い、city が Beijing のときだけ Imperial Palace:Beijing と表示するよう空欄を埋めてください。', code: 'name = "Imperial Palace"\ncity = "Beijing"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Beijing"', expectedOutput: 'Imperial Palace:Beijing', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Beijing と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_CN_python_02', languageId: 'python', world: 'decode', title: 'Mausoleum of the First Qin Emperor', titleJa: '秦の始皇帝陵', category: 'world-heritage', objective: 'loop', source: SRC.qinMausoleum, summaryJa: '秦の始皇帝陵は中国にある世界遺産です。', prompt: 'type が mausoleum の遺跡名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'sites = [\n    {"name": "Qin Mausoleum", "type": "mausoleum"},\n    {"name": "Other", "type": "temple"}\n]\nfor site in sites:\n    if ___BLANK___:\n        print(site["name"])', answer: 'site["type"] == "mausoleum"', expectedOutput: 'Qin Mausoleum', hint: '各辞書の type キーを比較します。', explanation: 'Qin Mausoleum の type だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_CN_python_03', languageId: 'python', world: 'decode', title: 'Mogao Caves', titleJa: '莫高窟', category: 'world-heritage', objective: 'dictionary', source: SRC.mogaoCaves, summaryJa: '莫高窟は甘粛省にある世界遺産です。', prompt: '辞書と関数を使い、Mogao Caves:Gansu と表示するキーを埋めてください。', code: 'site = {"name": "Mogao Caves", "province": "Gansu"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"province"', expectedOutput: 'Mogao Caves:Gansu', hint: 'Gansu を取り出すキーを選びます。', explanation: '"province" キーの値が Gansu です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'cn_py_e01', languageId: 'python', world: 'execute', title: 'Shanghai', titleJa: '上海', category: 'geography-city', objective: 'function', source: SRC.shanghai, summaryJa: '上海は中国の主要都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, kind):\n    return f"{name}:{kind}"\nprint(city_label("Shanghai", "major city"))', options: ['Shanghai:major city', 'major city:Shanghai', 'Shanghai', 'Error'], answer: 'Shanghai:major city', expectedOutput: 'Shanghai:major city', hint: 'return の f-string で name と kind の順番を見ます。', explanation: 'name が先、kind が後ろなので Shanghai:major city です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'cn_py_e02', languageId: 'python', world: 'execute', title: 'Peking Man Site at Zhoukoudian', titleJa: '北京原人遺跡（周口店）', category: 'world-heritage-science', objective: 'dictionary', source: SRC.pekingMan, summaryJa: '北京原人遺跡は北京近郊にある世界遺産です。', prompt: '辞書 lookup の結果を選んでください。', code: 'site = {"name": "Peking Man Site", "location": "near Beijing"}\nprint(site["location"])', options: ['near Beijing', 'Peking Man Site', 'Shanghai', 'location'], answer: 'near Beijing', expectedOutput: 'near Beijing', hint: '"location" キーの値を見ます。', explanation: 'site["location"] は near Beijing を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'cn_py_e03', languageId: 'python', world: 'execute', title: 'Silk Road sample stops', titleJa: 'シルクロードのサンプル停留地', category: 'history', objective: 'loop', source: SRC.silkRoad, summaryJa: 'サンプルとして Xi’an、Dunhuang などのシルクロード停留地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["Xi’an", "Dunhuang"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['Xi’an|Dunhuang', 'Dunhuang|Xi’an', 'Xi’an|', 'Dunhuang'], answer: 'Xi’an|Dunhuang', expectedOutput: 'Xi’an|Dunhuang', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'Xi’an、Dunhuang の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'cn_py_e04', languageId: 'python', world: 'execute', title: 'Yellow River region records', titleJa: '黄河の地域レコード', category: 'geography-nature', objective: 'loop', source: SRC.yellowRiver, summaryJa: '黄河は中国の主要な河川です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Yellow River", "major": True},\n    {"name": "Other", "major": False}\n]\nselected = [r["name"] for r in records if r["major"]]\nprint(selected[0])', options: ['Yellow River', 'Other', 'True', 'False'], answer: 'Yellow River', expectedOutput: 'Yellow River', hint: 'major が True の辞書だけ残します。', explanation: 'Yellow River の major だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_CN_python_01', languageId: 'python', world: 'execute', title: 'Mount Taishan records', titleJa: '泰山のレコード', category: 'world-heritage-nature', objective: 'loop', source: SRC.taishan, summaryJa: '泰山は山東省にある世界遺産です。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "kind": "mountain", "period": 200},\n    {"name": "Other", "kind": "lake", "period": 100},\n    {"name": "Site B", "kind": "mountain", "period": 50}\n]\nselected = sorted([r for r in records if r["kind"] == "mountain"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと period の昇順です。', explanation: 'mountain は Site B(50) と Site A(200) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_CN_python_02', languageId: 'python', world: 'execute', title: 'Chinese cultural institutions dataset', titleJa: '中国の文化機関データセット', category: 'culture', objective: 'dictionary', source: SRC.institutions, summaryJa: 'サンプルとして Palace Museum、National Museum of China、Shanghai Museum、Shaanxi History Museum を扱います。', prompt: '辞書とリストから beijing が True の件数を集計した結果を選んでください。', code: 'museums = [\n    {"name": "Palace Museum", "beijing": True},\n    {"name": "National Museum of China", "beijing": True},\n    {"name": "Shanghai Museum", "beijing": False},\n    {"name": "Shaanxi History Museum", "beijing": False}\n]\ncount = sum(1 for m in museums if m["beijing"])\nprint(count)', options: ['2', '4', '1', 'Palace Museum'], answer: '2', expectedOutput: '2', hint: 'beijing が True の辞書だけ数えます。', explanation: 'Palace Museum、National Museum of China の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'cn_py_b01', languageId: 'python', world: 'debug', title: 'Renminbi yuan formatting', titleJa: '人民元（元）の表示', category: 'finance', objective: 'strings', source: SRC.renminbi, summaryJa: '中国の通貨は人民元で、基本単位は元です。', prompt: '金額を 10.50 yuan と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " yuan")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 yuan と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} yuan")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'cn_py_b02', languageId: 'python', world: 'debug', title: 'Chinese station-code style labels', titleJa: '中国の駅コード風の表示', category: 'administration', objective: 'strings', source: SRC.stationCode, summaryJa: 'サンプルの駅コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある駅コードを表示するコードです。数値保存の不具合を直します。', code: 'station_code = 12\nprint(station_code)', cause: '駅コードを数値として保存すると先頭ゼロを保持できない', fix: '駅コードを最初から文字列として保存する', impact: '先頭ゼロを含む駅コードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'station_code = "0012"\nprint(station_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。' },
  { id: 'cn_py_b03', languageId: 'python', world: 'debug', title: 'Chinese city abbreviation lookup', titleJa: '都市略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.cityAbbrev, summaryJa: 'サンプルとして BJS、SHA、CAN、CTU、XIY などの都市略号を扱います。', prompt: '略号 CTU から都市名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"BJS": "Beijing", "SHA": "Shanghai"}\ncode = "CTU"\nprint(abbreviations[code])', cause: '辞書に CTU のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"BJS": "Beijing", "SHA": "Shanghai", "CTU": "Chengdu"}\ncode = "CTU"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'CTU というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_CN_python_01', languageId: 'python', world: 'debug', title: 'Mount Huangshan', titleJa: '黄山', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.huangshan, summaryJa: '黄山は安徽省にある世界遺産です。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Huangshan", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["sample_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'sample_count がない辞書でも record["sample_count"] を直接読んでいる', fix: 'record.get("sample_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Huangshan", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("sample_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に sample_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'cn_js_d01', languageId: 'javascript', world: 'decode', title: 'Forbidden City in Beijing', titleJa: '紫禁城（北京）', category: 'world-heritage', objective: 'object', source: SRC.forbiddenCity, summaryJa: '紫禁城は北京にあります。', prompt: 'オブジェクトから city を取り出して Beijing と表示されるよう、空欄を埋めてください。', code: 'const palace = { name: "Forbidden City", city: "Beijing" };\nconsole.log(palace.___BLANK___);', answer: 'city', expectedOutput: 'Beijing', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'palace.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'cn_js_d02', languageId: 'javascript', world: 'decode', title: 'West Lake in Hangzhou', titleJa: '西湖（杭州）', category: 'world-heritage', objective: 'strings', source: SRC.westLake, summaryJa: '西湖の文化的景観は杭州にある世界遺産です。', prompt: 'テンプレートリテラルで West Lake:Hangzhou と表示されるよう空欄を埋めてください。', code: 'const site = "West Lake";\nconst city = ___BLANK___;\nconsole.log(`${site}:${city}`);', answer: '"Hangzhou"', expectedOutput: 'West Lake:Hangzhou', hint: 'city に入る文字列を引用符付きで書きます。', explanation: '"Hangzhou" を入れると ${city} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'cn_js_d03', languageId: 'javascript', world: 'decode', title: 'Chinese flag colors', titleJa: '中国国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: '中国国旗は赤・黄の2色で構成されています。', prompt: '配列から yellow を取り出す添字を埋めてください。', code: 'const colors = ["red", "yellow"];\nconsole.log(colors[___BLANK___]);', answer: '1', expectedOutput: 'yellow', hint: '配列は0番目から数えます。', explanation: 'yellow は2番目の要素なので添字は1です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'cn_js_d04', languageId: 'javascript', world: 'decode', title: 'Chinese transport mode labels', titleJa: '中国の交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: '中国には鉄道、メトロ、河川、航空などの交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'cn_js_d05', languageId: 'javascript', world: 'decode', title: 'Classical Gardens of Suzhou', titleJa: '蘇州古典園林', category: 'world-heritage', objective: 'loop', source: SRC.suzhouGardens, summaryJa: '蘇州古典園林は世界遺産です。', prompt: 'for...of で city が Suzhou の庭園だけを表示するよう、条件の空欄を埋めてください。', code: 'const gardens = [\n  { name: "Humble Administrator’s Garden", city: "Suzhou" },\n  { name: "Other", city: "Beijing" }\n];\nfor (const garden of gardens) {\n  if (___BLANK___) console.log(garden.name);\n}', answer: 'garden.city === "Suzhou"', expectedOutput: 'Humble Administrator’s Garden', hint: '各 garden の city を比較します。', explanation: 'Humble Administrator’s Garden の city だけが Suzhou なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_CN_javascript_01', languageId: 'javascript', world: 'decode', title: 'Grand Canal', titleJa: '京杭大運河（大運河）', category: 'world-heritage', objective: 'array', source: SRC.grandCanal, summaryJa: '大運河は中国にある世界遺産です。', prompt: 'array methods で canal を含む名前を取り出してください。', code: 'const sites = ["wall", "grand-canal", "tower"];\nconst result = sites.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"canal"', expectedOutput: 'grand-canal', hint: 'includes に探したい部分文字列を渡します。', explanation: '"canal" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_CN_javascript_02', languageId: 'javascript', world: 'decode', title: 'Longmen Grottoes', titleJa: '龍門石窟', category: 'world-heritage', objective: 'object', source: SRC.longmen, summaryJa: '龍門石窟は河南省にある世界遺産です。', prompt: 'find で Longmen の record を探す条件を埋めてください。', code: 'const records = [{name:"Yungang", province:"Shanxi"}, {name:"Longmen", province:"Henan"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.province);', answer: '"Longmen"', expectedOutput: 'Henan', hint: 'name と一致する文字列を書きます。', explanation: 'Longmen の record が見つかり、province が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_CN_javascript_03', languageId: 'javascript', world: 'decode', title: 'Chinese science figures', titleJa: '中国の科学者サンプル', category: 'science-culture', objective: 'class', source: SRC.scienceFigures, summaryJa: 'サンプルとして Tu Youyou、Zhang Heng、Cai Lun を扱います。', prompt: 'class のインスタンスを map して Tu Youyou:medicine と表示してください。', code: 'class Figure {\n  constructor(name, field) { this.name = name; this.field = field; }\n}\nconst items = [new Figure("Tu Youyou", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.field}`).join(","));', answer: '"medicine"', expectedOutput: 'Tu Youyou:medicine', hint: 'constructor の field に入る文字列です。', explanation: 'field に medicine が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'cn_js_e01', languageId: 'javascript', world: 'execute', title: 'Tu Youyou', titleJa: 'トゥ・ヨウヨウ（屠呦呦）', category: 'science-history', objective: 'array', source: SRC.tuYouyou, summaryJa: 'トゥ・ヨウヨウは2015年にノーベル生理学・医学賞を受賞しました。', prompt: 'map と join の出力を選んでください。', code: 'const names = ["tu-youyou"];\nconst label = names.map(n => n.toUpperCase()).join("-");\nconsole.log(label);', options: ['TU-YOUYOU', 'tu-youyou', 'T-U', 'Tu-Youyou'], answer: 'TU-YOUYOU', expectedOutput: 'TU-YOUYOU', hint: '各要素を大文字化します。', explanation: 'tu-youyou が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'cn_js_e02', languageId: 'javascript', world: 'execute', title: 'Yangtze River sample segments', titleJa: '長江のサンプル区間', category: 'geography', objective: 'loop', source: SRC.yangtze, summaryJa: '長江は中国の主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 40, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['90', '70', '30', '304020'], answer: '90', expectedOutput: '90', hint: '数値を左から足していきます。', explanation: '30 + 40 + 20 = 90 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'cn_js_e03', languageId: 'javascript', world: 'execute', title: 'Palace Museum', titleJa: '故宮博物院', category: 'museum', objective: 'object', source: SRC.palaceMuseum, summaryJa: '故宮博物院は北京にあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const museum = { city: "Beijing", collections: ["paintings", "ceramics"] };\nlet result = museum.city;\nfor (const item of museum.collections) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Beijing:paintings:ceramics', 'paintings:ceramics:Beijing', 'Beijing', 'ceramics:paintings'], answer: 'Beijing:paintings:ceramics', expectedOutput: 'Beijing:paintings:ceramics', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに paintings、ceramics が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'cn_js_e04', languageId: 'javascript', world: 'execute', title: 'Beijing Subway sample', titleJa: '北京地下鉄のサンプル', category: 'transport', objective: 'function', source: SRC.beijingSubway, summaryJa: '北京地下鉄は北京で運行されています。', prompt: '関数と条件の戻り値を選んでください。', code: 'function transportLabel(city) {\n  return city === "Beijing" ? "subway" : "other";\n}\nconsole.log(transportLabel("Beijing"));', options: ['subway', 'other', 'Beijing', 'true'], answer: 'subway', expectedOutput: 'subway', hint: '"Beijing" === "Beijing" の判定を見ます。', explanation: '条件が true なので "subway" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_CN_javascript_01', languageId: 'javascript', world: 'execute', title: 'Yungang Grottoes', titleJa: '雲岡石窟', category: 'world-heritage', objective: 'array', source: SRC.yungang, summaryJa: '雲岡石窟は山西省にある世界遺産です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const grottoes = [\n  { name: "Cave A", province: "Shanxi", area: 5 },\n  { name: "Other", province: "Henan", area: 3 },\n  { name: "Cave B", province: "Shanxi", area: 2 }\n];\nconst names = grottoes.filter(g => g.province === "Shanxi").map(g => g.name).sort();\nconsole.log(names.join(">"));', options: ['Cave A>Cave B', 'Cave B>Cave A', 'Other>Cave A', 'Other>Cave B>Cave A'], answer: 'Cave A>Cave B', expectedOutput: 'Cave A>Cave B', hint: 'province で絞ったあと、名前をアルファベット順にします。', explanation: 'Cave A と Cave B が残り、sort で Cave A が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_CN_javascript_02', languageId: 'javascript', world: 'execute', title: 'Chinese rail and river-route sample data', titleJa: '中国の鉄道・河川ルートサンプルデータ', category: 'transport', objective: 'object', source: SRC.routeData, summaryJa: 'サンプルとして高速鉄道ルートと長江ルートのデータを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"High-speed rail", segments:[2,3]}, {name:"Yangtze", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'High-speed rail-Yangtze'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'High-speed rail は5、Yangtze は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'cn_js_b01', languageId: 'javascript', world: 'debug', title: 'Chinese phone-number formatting', titleJa: '中国の電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとして中国の携帯電話番号は11桁で構成されるものとして扱います。', prompt: '11桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "13912345678";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく整形できる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "13912345678";\nif (digits.length === 11) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が10のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'cn_js_b02', languageId: 'javascript', world: 'debug', title: 'Beijing and Shanghai labels', titleJa: '北京と上海', category: 'geography-city', objective: 'object', source: SRC.twoCities, summaryJa: '北京と上海は中国の主要都市です。', prompt: 'major が true の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Beijing", major: true }, { name: "Shanghai", major: true }];\nconst labels = cities.filter(city => city.large === true).map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには major があるのに large を参照している', fix: 'city.major === true に修正する', impact: 'Beijing と Shanghai の両方を正しく選べる', why: '存在しない large は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Beijing", major: true }, { name: "Shanghai", major: true }];\nconst labels = cities.filter(city => city.major === true).map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'cn_js_b03', languageId: 'javascript', world: 'debug', title: 'Museum record lookup', titleJa: '博物館レコードの参照', category: 'museum', objective: 'object', source: SRC.museumLookup, summaryJa: 'サンプルの博物館データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Museum" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Museum" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_CN_javascript_01', languageId: 'javascript', world: 'debug', title: 'Fujian Tulou', titleJa: '福建土楼', category: 'world-heritage', objective: 'object', source: SRC.fujianTulou, summaryJa: '福建土楼は世界遺産です。', prompt: '土楼のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Fujian Tulou", province: "Fujian", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.province);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.province ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Fujian Tulou", province: "Fujian", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.province ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'cn_java_d01', languageId: 'java', world: 'decode', title: 'Tiananmen Square in Beijing', titleJa: '天安門広場（北京）', category: 'history-landmark', objective: 'strings', source: SRC.tiananmen, summaryJa: '天安門広場は北京にあります。', prompt: 'Square:Beijing と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String site = "Square";\n    String city = ___BLANK___;\n    System.out.println(site + ":" + city);\n  }\n}', answer: '"Beijing"', expectedOutput: 'Square:Beijing', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Beijing" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'cn_java_d02', languageId: 'java', world: 'decode', title: 'Tu Youyou Nobel year', titleJa: 'トゥ・ヨウヨウのノーベル賞受賞年', category: 'science-history', objective: 'numbers', source: SRC.tuYouyou, summaryJa: 'トゥ・ヨウヨウは2015年にノーベル生理学・医学賞を受賞しました。', prompt: 'NobelPrize:2015 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "NobelPrize:" + year;\n    System.out.println(label);\n  }\n}', answer: '2015', expectedOutput: 'NobelPrize:2015', hint: 'int なので引用符なしの数値です。', explanation: 'year に2015を入れると文字列連結で NobelPrize:2015 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'cn_java_d03', languageId: 'java', world: 'decode', title: 'Zhang Heng seismoscope sample', titleJa: '張衡と地震計のサンプル', category: 'science-history', objective: 'condition', source: SRC.zhangHeng, summaryJa: '張衡は初期の地震計と結びつく人物です。', prompt: 'invention が seismoscope のとき EarlyInvention と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String invention = "seismoscope";\n    if (___BLANK___) {\n      System.out.println("EarlyInvention");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'invention.equals("seismoscope")', expectedOutput: 'EarlyInvention', hint: 'String の内容比較は equals です。', explanation: 'invention.equals(...) が true になるため EarlyInvention が出力されます。', programmingExplanation: 'String の内容比較には == ではなく equals を使います。' },
  { id: 'cn_java_d04', languageId: 'java', world: 'decode', title: 'Chinese travel mode labels', titleJa: '中国の移動手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: '中国では鉄道・メトロ・河川・航空など複数の移動手段が使われています。', prompt: 'mode が air のとき Air transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "air";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Air transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"air"', expectedOutput: 'Air transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "air" が一致し、Air transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'cn_java_d05', languageId: 'java', world: 'decode', title: 'Chinese regions sample', titleJa: '中国の地域区分サンプル', category: 'geography', objective: 'array', source: SRC.regions, summaryJa: 'サンプルとして North、East、South、West、Northeast などの地域ラベルを扱います。', prompt: 'regions 配列を拡張 for で読み、East だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"North", "East", "South"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("East")', expectedOutput: 'East', hint: 'String の内容比較は equals です。', explanation: 'region が East のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_CN_java_01', languageId: 'java', world: 'decode', title: 'Wulingyuan Scenic and Historic Interest Area', titleJa: '武陵源風景名勝区', category: 'world-heritage-nature', objective: 'method', source: SRC.wulingyuan, summaryJa: '武陵源風景名勝区は湖南省にある世界遺産です。', prompt: 'category が natural のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("natural")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"natural"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"natural" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_CN_java_02', languageId: 'java', world: 'decode', title: 'Jiuzhaigou Valley Scenic and Historic Interest Area', titleJa: '九寨溝風景名勝区', category: 'world-heritage-nature', objective: 'collections', source: SRC.jiuzhaigou, summaryJa: '九寨溝風景名勝区は四川省にある世界遺産です。', prompt: 'ArrayList から sichuan の record だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Site {\n  String name;\n  boolean sichuan;\n  Site(String n, boolean s) { name = n; sichuan = s; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Site> sites = new ArrayList<>();\n    sites.add(new Site("Jiuzhaigou", true));\n    sites.add(new Site("Other", false));\n    for (Site s : sites) {\n      if (___BLANK___) System.out.println(s.name);\n    }\n  }\n}', answer: 's.sichuan', expectedOutput: 'Jiuzhaigou', hint: 'sichuan フィールドが true の record だけです。', explanation: 'Jiuzhaigou の sichuan だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_CN_java_03', languageId: 'java', world: 'decode', title: 'Chengjiang Fossil Site', titleJa: '澗江化石遺跡', category: 'world-heritage-science', objective: 'class', source: SRC.chengjiang, summaryJa: '澗江化石遺跡は雲南省にある世界遺産です。', prompt: 'HashMap から Chengjiang の省を取り出し Chengjiang:Yunnan と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String province;\n  Site(String n, String p) { name = n; province = p; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("Chengjiang", new Site("Chengjiang", "Yunnan"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.province);\n  }\n}', answer: '"Chengjiang"', expectedOutput: 'Chengjiang:Yunnan', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Chengjiang キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'cn_java_e01', languageId: 'java', world: 'execute', title: 'Cai Lun and papermaking', titleJa: '蔡倫と製紙術', category: 'science-history', objective: 'strings', source: SRC.caiLun, summaryJa: '蔡倫は製紙術と結びつく歴史的人物です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String inventor = "Cai Lun";\n    if (inventor.equals("Cai Lun")) System.out.println("papermaking");\n    else System.out.println("other");\n  }\n}', options: ['papermaking', 'other', 'Cai Lun', 'true'], answer: 'papermaking', expectedOutput: 'papermaking', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので papermaking が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'cn_java_e02', languageId: 'java', world: 'execute', title: 'Chinese time-zone sample', titleJa: '中国の時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: '中国では中国標準時（CST）が使われます。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 8));\n  }\n}', options: ['18', '10', '8', '80'], answer: '18', expectedOutput: '18', hint: '10 + 8 を計算します。', explanation: 'UTC 10時に8を足すので18です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'cn_java_e03', languageId: 'java', world: 'execute', title: 'China rail sample labels', titleJa: '中国の鉄道ラベルサンプル', category: 'transport', objective: 'collections', source: SRC.railSample, summaryJa: 'サンプルとして Beijing–Shanghai などの鉄道ルートラベルを扱います。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Beijing");\n    labels.add("Shanghai");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Beijing>Shanghai', 'Shanghai>Beijing', 'Beijing>', 'Shanghai'], answer: 'Beijing>Shanghai', expectedOutput: 'Beijing>Shanghai', hint: '追加した順に result へ入ります。', explanation: 'Beijing、Shanghai の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'cn_java_e04', languageId: 'java', world: 'execute', title: 'Chinese script label sample', titleJa: '中国の文字体系ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.scriptSample, summaryJa: 'サンプルとして中国の文字体系に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Hanzi extends ScriptType {\n  @Override\n  String label() { return "Hanzi"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Hanzi();\n    System.out.println(type.label());\n  }\n}', options: ['Hanzi', 'script', 'ScriptType', 'error'], answer: 'Hanzi', expectedOutput: 'Hanzi', hint: '実体は Hanzi です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_CN_java_01', languageId: 'java', world: 'execute', title: 'Chinese city-province records', titleJa: '中国の都市・省レコード', category: 'geography', objective: 'collections', source: SRC.cityProvince, summaryJa: 'サンプルとして Beijing–Beijing、Shanghai–Shanghai、Xi’an–Shaanxi などの都市・省データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市の省を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("Shanghai", 9);\n    cities.put("Xi’an", 1);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Shanghai', 'Xi’an', 'ShanghaiXi’an', '9'], answer: 'Shanghai', expectedOutput: 'Shanghai', hint: 'population が4以上の city だけです。', explanation: 'Shanghai の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_CN_java_02', languageId: 'java', world: 'execute', title: 'Chinese research-site sample records', titleJa: '中国の研究拠点サンプルレコード', category: 'science-geography', objective: 'collections', source: SRC.researchSite, summaryJa: 'サンプルとして中国の研究拠点データを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Station A", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Station A:active', 'Closed:active', 'Station A', 'active:Station A'], answer: 'Station A:active', expectedOutput: 'Station A:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Station A だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'cn_java_b01', languageId: 'java', world: 'debug', title: 'Chinese city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.cityAbbrev, summaryJa: '中国の都市コードは BJS、SHA、CAN、CTU、XIY などです。', prompt: '都市コード CAN を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("CAN");\n    if (code == "CAN") System.out.println("Guangzhou");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("CAN") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("CAN");\n    if (code.equals("CAN")) System.out.println("Guangzhou");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'cn_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero archive code formatting', titleJa: '先頭ゼロ付きアーカイブコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.stationCode, summaryJa: 'アーカイブコード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプルアーカイブコード 0008 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 8;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0008"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0008";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'cn_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.museumVisitor, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_CN_java_01', languageId: 'java', world: 'debug', title: 'Dazu Rock Carvings', titleJa: '大足石刻', category: 'world-heritage', objective: 'collections', source: SRC.dazu, summaryJa: '大足石刻は重慶にある世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Dazu", "1200");\n    String ageText = ages.get("Other Site");\n    int age = Integer.parseInt(ageText);\n    System.out.println(age);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Dazu", "1200");\n    String ageText = ages.get("Dazu");\n    try {\n      if (ageText != null) System.out.println(Integer.parseInt(ageText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const CHINA_FACTS = allSpecs.map(makeFact);
export const CHINA_ASSIGNMENTS = allSpecs.map(assignment);

export const CN_PY_DECODE = pyDecode.map(decode);
export const CN_PY_EXECUTE = pyExecute.map(execute);
export const CN_PY_DEBUG = pyDebug.map(debug);
export const CN_JS_DECODE = jsDecode.map(decode);
export const CN_JS_EXECUTE = jsExecute.map(execute);
export const CN_JS_DEBUG = jsDebug.map(debug);
export const CN_JAVA_DECODE = javaDecode.map(decode);
export const CN_JAVA_EXECUTE = javaExecute.map(execute);
export const CN_JAVA_DEBUG = javaDebug.map(debug);

export const CHINA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: CHINA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: CHINA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: CHINA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: CHINA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: CHINA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: CHINA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: CHINA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: CHINA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: CHINA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
