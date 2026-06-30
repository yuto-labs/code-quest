const SRC = {
  moscow: 'https://www.britannica.com/place/Moscow',
  metro: 'https://www.britannica.com/topic/Moscow-Metro',
  volga: 'https://www.britannica.com/place/Volga-River',
  cities: 'https://www.britannica.com/place/Russia',
  baikal: 'https://whc.unesco.org/en/list/754',
  kremlin: 'https://whc.unesco.org/en/list/545',
  spbHistoric: 'https://whc.unesco.org/en/list/540',
  kizhi: 'https://whc.unesco.org/en/list/544',
  hermitage: 'https://www.britannica.com/topic/Hermitage-Museum-Saint-Petersburg-Russia',
  bolshoi: 'https://www.britannica.com/topic/Bolshoi-Theatre',
  transSiberian: 'https://www.britannica.com/topic/Trans-Siberian-Railroad',
  kamchatka: 'https://whc.unesco.org/en/list/765',
  baikalFinal: 'https://whc.unesco.org/en/list/754',
  culturalInstitutions: 'https://www.britannica.com/topic/Tretyakov-Gallery',
  ruble: 'https://www.britannica.com/topic/ruble',
  stationCode: 'https://www.britannica.com/place/Russia',
  cityAbbrev: 'https://www.britannica.com/place/Russia',
  lenaPillars: 'https://whc.unesco.org/en/list/1299',
  saintBasil: 'https://www.britannica.com/topic/Saint-Basils-Cathedral',
  peterhof: 'https://www.britannica.com/place/Peterhof',
  flag: 'https://www.britannica.com/topic/flag-of-Russia',
  transport: 'https://www.britannica.com/place/Russia',
  tretyakov: 'https://www.britannica.com/topic/Tretyakov-Gallery',
  volcanoesKamchatka: 'https://whc.unesco.org/en/list/765',
  goldenMountains: 'https://whc.unesco.org/en/list/768',
  scienceFigures: 'https://www.britannica.com/biography/Dmitri-Mendeleev',
  gagarin: 'https://www.britannica.com/biography/Yuri-A-Gagarin',
  mariinsky: 'https://www.britannica.com/topic/Mariinsky-Theatre',
  msu: 'https://www.britannica.com/topic/Moscow-State-University',
  komiForests: 'https://whc.unesco.org/en/list/719',
  routeData: 'https://www.britannica.com/place/Russia',
  phone: 'https://www.britannica.com/place/Russia',
  twoCities: 'https://www.britannica.com/place/Saint-Petersburg',
  theatreLookup: 'https://www.britannica.com/topic/Bolshoi-Theatre',
  solovetsky: 'https://whc.unesco.org/en/list/632',
  ivanPavlov: 'https://www.nobelprize.org/prizes/medicine/1904/pavlov/biographical/',
  gagarinYear: 'https://www.britannica.com/biography/Yuri-A-Gagarin',
  regions: 'https://www.britannica.com/place/Russia',
  westernCaucasus: 'https://whc.unesco.org/en/list/900',
  wrangel: 'https://whc.unesco.org/en/list/1023',
  yaroslavl: 'https://whc.unesco.org/en/list/1170',
  mendeleev: 'https://www.britannica.com/biography/Dmitry-Ivanovich-Mendeleyev',
  timezone: 'https://www.timeanddate.com/time/zones/msk',
  scriptSample: 'https://www.britannica.com/topic/Cyrillic-alphabet',
  cityRegion: 'https://www.britannica.com/place/Russia',
  arcticResearch: 'https://www.britannica.com/place/Russia',
  museumVisitor: 'https://www.britannica.com/topic/Hermitage-Museum-Saint-Petersburg-Russia',
  bolgar: 'https://whc.unesco.org/en/list/981',
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
  return `ru:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

// 各題材の調査済み詳細（JPの country_facts.js と同水準の背景・歴史・エピソード）。
// id をキーに makeFact() がここから backgroundJa/historyJa/episodeJa/keyPointsJa を補う。
const FACT_DETAILS = {
  ru_py_d01: {
    backgroundJa: 'モスクワはロシア連邦の首都で、人口1,300万人を超えるヨーロッパ最大級の都市であり、政治・経済・文化の中心です。',
    historyJa: '年代記の初出は1147年で、1327年にモスクワ大公国の首都となりました。',
    episodeJa: 'モスクワは1712年にピョートル大帝が首都をサンクトペテルブルクへ移したため約200年間首都の地位を失い、1918年の革命後に再び首都へ戻りました。',
    keyPointsJa: ['年代記の初出は1147年', '1327年にモスクワ大公国の首都に', '1712〜1918年は首都の地位を失っていた', '現在の人口は1,300万人を超える'],
  },
  ru_py_d02: {
    backgroundJa: 'モスクワ地下鉄はソ連・ロシアで最初に開業した地下鉄道網で、豪華な装飾の駅が多く「地下の宮殿」とも呼ばれます。',
    historyJa: '1935年5月15日に最初の1路線（全長11km、13駅）が開業しました。',
    episodeJa: '開業初日には28万5000人が利用しましたが、当時の市民の多くはエスカレーターや地下を走る列車に不安を感じ、最初の1年間の平均利用者数は1日17万7000人程度にとどまりました。',
    keyPointsJa: ['1935年5月15日に開業', '最初の路線は全長11km・13駅', '開業初日の利用者は28万5000人', '駅は「地下の宮殿」と呼ばれる豪華な装飾が特徴'],
  },
  ru_py_d03: {
    backgroundJa: 'ヴォルガ川はヨーロッパ最長の河川で、ロシアの「母なる川」として経済・文化の両面で重要な役割を担っています。',
    historyJa: 'ヴァルダイ高地に源を発し、古くから9〜10世紀のヴァイキングやハザール、ヴォルガ・ブルガールの交易路として利用されてきました。',
    episodeJa: '全長は約3,530kmに及び、流域にはモスクワを含むロシアの主要都市の多くが集まり、流域面積はヨーロッパ・ロシアの約5分の2を占めます。',
    keyPointsJa: ['全長約3,530kmでヨーロッパ最長', 'カスピ海に注ぐ', '流域人口はロシア有数の規模', '古代から交易路として利用'],
  },
  ru_py_d04: {
    backgroundJa: 'モスクワ、サンクトペテルブルク、カザンはロシアを代表する都市で、それぞれ首都・旧帝都・タタールスタンの中心地という異なる役割を持ちます。',
    historyJa: 'カザンは13世紀末に都市として発展し、15世紀にカザン・ハン国の首都となりましたが、1552年にイヴァン4世（雷帝）に征服されました。',
    episodeJa: 'カザンのクレムリンはもとタタール人の要塞で、征服後にロシア風の城塞として改築された珍しい経緯を持ち、現在はタタールスタン共和国の首都として栄えています。',
    keyPointsJa: ['カザンは15世紀にハン国の首都だった', '1552年にイヴァン雷帝が征服', '現在はタタールスタン共和国の首都', 'モスクワとサンクトペテルブルクは人口規模で1位・2位'],
  },
  ru_py_d05: {
    backgroundJa: 'バイカル湖はシベリア南東部にある世界最深・最古の湖で、世界の淡水資源の約20％を蓄える「ガラパゴス」とも呼ばれる生態系の宝庫です。',
    historyJa: '約2,500万〜3,000万年前に形成され、1996年にユネスコ世界遺産に登録されました。',
    episodeJa: '最大水深は約1,642メートルに達し、貯水量は北米の五大湖を合計したよりも多いとされています。',
    keyPointsJa: ['最大水深約1,642mで世界最深', '約2,500万〜3,000万年前に形成', '世界の不凍淡水の約20％を蓄える', '1996年にユネスコ世界遺産登録'],
  },
  final_decode_RU_python_01: {
    backgroundJa: 'クレムリンと赤の広場は、ロシアの政治権力の象徴であるモスクワの城塞と、隣接する歴史的広場の複合体です。',
    historyJa: '最初の木造要塞は1156年の記録があり、現在の城壁は14〜17世紀にかけて築かれ、1990年にユネスコ世界遺産に登録されました。',
    episodeJa: '赤の広場に立つ聖ワシリイ大聖堂は1555〜1560年、イヴァン雷帝がカザン・ハン国征服を記念して建てたものです。',
    keyPointsJa: ['最初の要塞は1156年の記録に登場', '現在の城壁は14〜17世紀に築造', '1990年にユネスコ世界遺産登録', '聖ワシリイ大聖堂はカザン征服を記念'],
  },
  final_decode_RU_python_02: {
    backgroundJa: 'サンクトペテルブルク歴史地区は、ピョートル大帝が築いた旧帝都の中心部で、バロックと新古典主義建築が集まる世界遺産です。',
    historyJa: '1703年にピョートル大帝が建設を開始し、1990年にユネスコ世界遺産に登録されました。',
    episodeJa: 'ユネスコの登録範囲は市街地だけでなく、ペテルゴフなど郊外の宮殿群も含む126か所に及ぶ広大なものです。',
    keyPointsJa: ['1703年にピョートル大帝が建設開始', '1712〜1918年はロシア帝国の首都', '400以上の橋と運河が特徴', 'ユネスコ登録は市内外126か所に及ぶ'],
  },
  final_decode_RU_python_03: {
    backgroundJa: 'キジ・ポゴストは、カレリア共和国オネガ湖の島にある木造教会群で、ロシアの伝統的な木造建築の傑作とされる世界遺産です。',
    historyJa: '主要な木造教会は18世紀に建てられ、木造の鐘楼は1862年に追加、1990年にユネスコ世界遺産に登録されました。',
    episodeJa: '高さ約37メートルの主教会「キジの変容教会」は釘を使わず建てたという伝説があり、棟梁ネストルが完成後に斧を湖に投げ込んだという逸話が伝わっていますが、実際は装飾や屋根板の一部に釘が使われています。',
    keyPointsJa: ['オネガ湖の島にある木造教会群', '主要教会は18世紀建造', '鐘楼は1862年に追加', '「釘を使わない」伝説は一部誤りで実際は併用'],
  },
  ru_py_e01: {
    backgroundJa: '国立エルミタージュ美術館は、冬宮殿を中心とする世界最大級の美術館で、300万点を超える美術品・文化財を所蔵しています。',
    historyJa: '1764年、エカチェリーナ2世がベルリンの商人から絵画225点を購入したことが始まりで、1852年に一般公開されました。',
    episodeJa: '所蔵品を1点1分ずつ見ても全てを見終えるには約11年かかると言われるほどの規模で、レンブラントやラファエロなどの名作も収蔵しています。',
    keyPointsJa: ['1764年エカチェリーナ2世の購入が起源', '1852年に一般公開', '所蔵品は300万点超', '建物の中心は旧冬宮殿'],
  },
  ru_py_e02: {
    backgroundJa: 'ボリショイ劇場はモスクワにあるロシア最大のオペラ・バレエ劇場で、ロシア舞台芸術を象徴する存在です。',
    historyJa: '1776年にエカチェリーナ2世が興行許可を与えたことで創設され、現在の建物は1825年に開場しました。',
    episodeJa: 'チャイコフスキーの「白鳥の湖」は1877年にこの劇場で初演されており、「ボリショイ」はロシア語で「大きい・壮大な」という意味です。',
    keyPointsJa: ['1776年にエカチェリーナ2世が許可', '現在の建物は1825年開場', '「白鳥の湖」初演は1877年', '「ボリショイ」は「大きい」という意味'],
  },
  ru_py_e03: {
    backgroundJa: 'シベリア鉄道はモスクワとウラジオストクを結ぶ世界最長の鉄道路線で、ロシア横断の象徴的なインフラです。',
    historyJa: '建設は1891年に始まり、1916年に全線が開通しました。',
    episodeJa: '全長は約9,289kmで8つの時間帯を横断し、起工式では当時の皇太子ニコライ（後のニコライ2世）が自ら最初の土を運んだと伝えられています。',
    keyPointsJa: ['1891〜1916年に建設', '全長約9,289km', '8つの時間帯を横断', 'モスクワとウラジオストクを結ぶ'],
  },
  ru_py_e04: {
    backgroundJa: 'カムチャツカ半島はロシア極東にある火山地帯で、太平洋の「環太平洋火山帯」の一部をなす自然豊かな地域です。',
    historyJa: '半島には300を超える火山があり、その火山群は1996年にユネスコ世界遺産「カムチャツカの火山群」として登録されました。',
    episodeJa: '半島最高峰の活火山クリュチェフスカヤ山は標高4,750mでユーラシア大陸最高の活火山であり、ガイザー渓谷はユーラシア大陸で唯一の間欠泉地帯です。',
    keyPointsJa: ['半島には300を超える火山がある', '1996年にユネスコ世界遺産登録', 'クリュチェフスカヤ山はユーラシア最高の活火山', 'ガイザー渓谷はユーラシア唯一の間欠泉地帯'],
  },
  final_execute_RU_python_01: {
    backgroundJa: 'バイカル湖は世界最深・最古の湖として知られ、独自の生態系の価値からユネスコ世界遺産に登録されています。',
    historyJa: '約2,500万〜3,000万年前に形成され、1996年に「最も優れた淡水生態系の見本」としてユネスコ世界遺産に登録されました。',
    episodeJa: '世界の不凍淡水の20〜23％を蓄えており、これは北米の五大湖を合わせた量よりも多いとされています。',
    keyPointsJa: ['約2,500万〜3,000万年前に形成', '1996年ユネスコ世界遺産登録', '世界最深の湖（最大水深約1,642m）', '世界の不凍淡水の約20％を蓄える'],
  },
  final_execute_RU_python_02: {
    backgroundJa: 'エルミタージュ美術館、ボリショイ劇場、トレチャコフ美術館、マリインスキー劇場は、ロシアの文化を代表する施設群です。',
    historyJa: 'トレチャコフ美術館は商人パヴェル・トレチャコフが1856年から収集した作品を1892年にモスクワ市へ寄贈し、1893年に開館しました。',
    episodeJa: 'トレチャコフ美術館の童話風の外観は、建築家ではなく画家ヴィクトル・ヴァスネツォフが1900〜1903年に手がけたデザインです。',
    keyPointsJa: ['トレチャコフは1856年から収集を開始', '1893年に美術館として開館', '現在は18万点超を所蔵', '外観デザインは画家ヴァスネツォフによる'],
  },
  ru_py_b01: {
    backgroundJa: 'ロシアルーブルはロシアの公式通貨で、現存する通貨名称としては世界で最も古いものの一つです。',
    historyJa: '「ルーブル」という語は13世紀の年代記に登場し、1704年にピョートル大帝が定期的に鋳造された銀貨を導入しました。',
    episodeJa: '「ルーブル」はロシア語の「切る」を意味する動詞に由来し、中世ノヴゴロドで約200gの銀の延べ棒を4つに切り分けたことが語源とされています。',
    keyPointsJa: ['語源は13世紀の年代記', '1704年にピョートル大帝が銀貨を導入', '語源は「切る」を意味する動詞', '帝政・ソ連・現ロシアの3つの時代を経た'],
  },
  ru_py_b02: {
    backgroundJa: 'ロシアでは識別用のコードに先頭ゼロが含まれる場合があり、これは郵便番号などの行政コードでよく見られる特徴です。',
    historyJa: 'ロシアの郵便番号制度は1971年（ソ連時代）に導入され、6桁の数字コードとして現在も使われています。',
    episodeJa: 'モスクワの郵便番号は「1」から始まるなど、地域ごとに先頭の数字が決まっており、計算に使わない番号は先頭ゼロを保つため文字列として扱う必要があります。',
    keyPointsJa: ['郵便番号制度は1971年に導入', '6桁の数字コード', 'モスクワの郵便番号は1から始まる', '先頭ゼロを保つには文字列として扱う必要がある'],
  },
  ru_py_b03: {
    backgroundJa: 'ロシアの主要都市には省略表記が使われることがあり、サンプルとしてモスクワ・サンクトペテルブルク・カザン・ノヴォシビルスクを扱います。',
    historyJa: 'モスクワは1147年、サンクトペテルブルクは1703年、カザンは13世紀末に都市として記録され、ノヴォシビルスクはシベリア最大の都市として発展しました。',
    episodeJa: '実際のロシアでは都市そのものを示す全国共通の略号制度はなく、車両ナンバープレートの地域番号（モスクワ77など）が地域識別の実例として使われています。',
    keyPointsJa: ['モスクワは1147年初出', 'サンクトペテルブルクは1703年建設', 'カザンはタタールスタン共和国の首都', 'ノヴォシビルスクはシベリア最大の都市'],
  },
  final_debug_RU_python_01: {
    backgroundJa: 'レナ石柱自然公園は、シベリアのレナ川沿いにそびえる石柱群を保護するユネスコ世界遺産です。',
    historyJa: '石柱はカンブリア紀の巨大なサンゴ礁が化石化した地層からできており、2012年にユネスコ世界遺産に登録されました。',
    episodeJa: '石柱は高さ約100メートルに達し、夏は40℃近く、冬はマイナス60℃近くまで下がる極端な大陸性気候の中で、凍結と融解の繰り返しによって削られてきました。',
    keyPointsJa: ['2012年にユネスコ世界遺産登録', '石柱の高さは約100m', 'カンブリア紀のサンゴ礁が化石化した地層', '年間の気温差が100℃近い極端な気候'],
  },
  ru_js_d01: {
    backgroundJa: '聖ワシリイ大聖堂はモスクワの赤の広場に建つロシア正教の大聖堂で、ロシアを象徴する建築物の一つです。',
    historyJa: 'イヴァン雷帝の命により1555年から1561年にかけて、カザンとアストラハンの征服を記念して建てられました。',
    episodeJa: '建築家を盲目にしたという伝説がありますが、同じ建築家ポスニク・ヤコヴレフがその後もカザン・クレムリンなどの建設に関わった記録があり、史実とは考えられていません。',
    keyPointsJa: ['1555〜1561年にイヴァン雷帝が建設', 'カザン・アストラハン征服を記念', '9つのドームがそれぞれ礼拝堂に対応', '建築家失明伝説は史実ではないとされる'],
  },
  ru_js_d02: {
    backgroundJa: 'ペテルゴフはサンクトペテルブルク近郊にある宮殿と庭園の複合施設で、ピョートル大帝の夏の離宮として「ロシアのヴェルサイユ」とも呼ばれます。',
    historyJa: '1714年頃から建設が始まり、1723年に宮殿と最初の噴水が公開されました。',
    episodeJa: '噴水群はポンプを一切使わず、ロプシャ丘陵からの自然な水圧だけで300年以上稼働し続けており、現在も150以上の噴水が動いています。',
    keyPointsJa: ['1723年に宮殿と噴水が公開', 'ポンプを使わない自然水圧方式', '150以上の噴水が現在も稼働', 'ヴェルサイユに影響を受けた離宮'],
  },
  ru_js_d03: {
    backgroundJa: 'ロシア国旗は白・青・赤の横三色旗で、ピョートル大帝の時代に起源を持つ伝統的な配色です。',
    historyJa: '1693年にピョートル大帝が白海でロシア初の国旗を掲げ、1991年のソ連崩壊後に正式な国旗として復活しました。',
    episodeJa: 'オランダから輸入した船がオランダ国旗（赤白青）を掲げていたことに着想し、配色の順序を変えて作られたという経緯が伝えられています。',
    keyPointsJa: ['1693年にピョートル大帝が初めて使用', 'オランダ国旗を参考に配色を変更', '白＝自由、青＝信仰、赤＝勇気を象徴', '1991年に正式な国旗として復活'],
  },
  ru_js_d04: {
    backgroundJa: 'ロシアには鉄道、地下鉄（メトロ）、河川、航空など多様な交通手段があり、広大な国土を結ぶ役割を担っています。',
    historyJa: 'モスクワ地下鉄は1935年に開業し、シベリア鉄道は1891〜1916年に建設されました。',
    episodeJa: 'ヴォルガ川などの河川は古くから交易路として利用され、現代では運河網によってバルト海・黒海・カスピ海とも結ばれています。',
    keyPointsJa: ['モスクワ地下鉄は1935年開業', 'シベリア鉄道は1891〜1916年に建設', '河川交通は古代からの交易路', '運河で複数の海と接続'],
  },
  ru_js_d05: {
    backgroundJa: 'トレチャコフ美術館はモスクワにあるロシア美術専門の美術館で、商人パヴェル・トレチャコフの個人収集が基盤になっています。',
    historyJa: 'トレチャコフは1856年から収集を始め、1892年に約2,000点をモスクワ市へ寄贈、1893年8月15日に開館しました。',
    episodeJa: '最初に購入した作品はヴァシーリー・フドヤコフの「フィンランド密輸業者との衝突」とニコライ・シリデルの「誘惑」で、現在は所蔵数が18万点以上に増えています。',
    keyPointsJa: ['1856年から収集を開始', '1893年8月15日に開館', '最初の収蔵品は2作品から', '現在は18万点以上を所蔵'],
  },
  final_decode_RU_javascript_01: {
    backgroundJa: 'カムチャツカの火山群は、ロシア極東の火山地帯を保護するユネスコ世界遺産で、世界でも特に活発な火山地域の一つです。',
    historyJa: '1996年にユネスコ世界遺産に登録され、2001年にクリュチェフスコイ自然公園が追加されました。',
    episodeJa: '登録地域は6つの保護区からなる集合体で、半島全体では300を超える火山があるとされ、登録範囲はその一部にすぎません。',
    keyPointsJa: ['1996年にユネスコ世界遺産登録', '2001年に保護区が追加', '6つの保護区の集合体', '半島全体では300以上の火山が存在'],
  },
  final_decode_RU_javascript_02: {
    backgroundJa: 'アルタイの黄金山脈は、南シベリアのアルタイ共和国にある世界遺産で、ステップから高山帯まで連続した植生帯が見られる地域です。',
    historyJa: '1998年にユネスコ世界遺産に登録されました。',
    episodeJa: '登録地内にあるテレツコエ湖は「バイカル湖の弟」と呼ばれるほど水質の透明度が高く、シベリアで2番目に大きい湖とされています。',
    keyPointsJa: ['1998年にユネスコ世界遺産登録', 'オビ川とイルティシ川の源流地域', 'テレツコエ湖は「バイカルの弟」と呼ばれる', '絶滅危惧種のユキヒョウも生息'],
  },
  final_decode_RU_javascript_03: {
    backgroundJa: 'ロシアの科学者として、周期表のメンデレーエフ、条件反射のパヴロフ、宇宙飛行のガガーリンが代表的な人物です。',
    historyJa: 'メンデレーエフは1869年に元素を原子量順に並べた周期表を発表し、未発見の元素の存在を予言しました。',
    episodeJa: '周期表は夢で見て一気に書き上げたという逸話が有名ですが、実際は1860年頃から長年研究を重ねた成果であり、後年の誇張という見方が強くなっています。',
    keyPointsJa: ['1869年に周期表を発表', '未発見元素の性質を予言', 'ガリウムなど予言が後に実証された', '「夢で見た」逸話は誇張とされる'],
  },
  ru_js_e01: {
    backgroundJa: 'ユーリイ・ガガーリンは1961年に人類初の有人宇宙飛行を成し遂げたソ連の宇宙飛行士です。',
    historyJa: '1961年4月12日、ボストーク1号に搭乗してバイコヌール宇宙基地から打ち上げられ、地球を1周しました。',
    episodeJa: '飛行時間はわずか108分でしたが、当時27歳だったガガーリンは高度7kmでカプセルから脱出し、パラシュートで別々に着地するという当時極秘だった方式が採られていました。',
    keyPointsJa: ['1961年4月12日に人類初の有人宇宙飛行', 'ボストーク1号で地球を1周', '飛行時間は108分', '高度7kmでカプセルから脱出して着地'],
  },
  ru_js_e02: {
    backgroundJa: 'ヴォルガ川はロシアを代表する河川で、流域には多くの主要都市が集まり、水運や農業に重要な役割を果たしています。',
    historyJa: 'ヴァルダイ高地に源を発し、3,530kmを流れてカスピ海に注ぎます。',
    episodeJa: 'アストラハン付近の三角州は約160kmにわたり500本もの水路に分かれ、ロシア国内でペリカンやフラミンゴが自然に見られる唯一の場所として知られています。',
    keyPointsJa: ['全長約3,530kmでヨーロッパ最長', 'カスピ海に注ぐ', 'アストラハン三角州は500本の水路を持つ', '流域に多くの主要都市が集まる'],
  },
  ru_js_e03: {
    backgroundJa: 'マリインスキー劇場はサンクトペテルブルクにあるロシア屈指のオペラ・バレエ劇場です。',
    historyJa: '帝室バレエ団の起源は1783年に遡り、現在の建物は1860年に開場、皇妃マリヤ・アレクサンドロヴナにちなんで名付けられました。',
    episodeJa: 'チャイコフスキーの「眠れる森の美女」（1890年）や「くるみ割り人形」（1892年）が初演された劇場で、振付家マリウス・プティパとの黄金コンビで知られています。',
    keyPointsJa: ['現在の建物は1860年開場', '皇妃マリヤにちなんで命名', 'チャイコフスキー作品が多数初演', '振付家プティパの活動拠点'],
  },
  ru_js_e04: {
    backgroundJa: 'モスクワ国立大学はロシア最古かつ最も権威ある大学で、ロシアの高等教育を象徴する存在です。',
    historyJa: '1755年にミハイル・ロモノーソフの提唱で創設され、現在の本館は1947〜1953年に建設されました。',
    episodeJa: '本館は「モスクワの7姉妹」と呼ばれるスターリン様式の高層建築群の中で最も高く、1953年から1990年までヨーロッパ最高層の建物でした。',
    keyPointsJa: ['1755年にロモノーソフが創設', '本館は1947〜1953年に建設', '1990年までヨーロッパ最高層だった', '創設者ロモノーソフの名にちなむ'],
  },
  final_execute_RU_javascript_01: {
    backgroundJa: 'コミ原生林は、北ウラル山脈に広がるヨーロッパ最大級の手つかずの北方林を保護するユネスコ世界遺産です。',
    historyJa: '1995年にユネスコ世界遺産に登録され、ロシア初の自然遺産となりました。',
    episodeJa: 'ペチョラ・イリチ自然保護区（1930年設立）とユグィッド・ヴァ国立公園（1994年設立）を合わせた約328万ヘクタールに及び、一度も産業的な伐採を受けていません。',
    keyPointsJa: ['1995年にロシア初の自然遺産として登録', '北ウラル山脈に広がる', '約328万ヘクタールの面積', '産業的な伐採を受けていない原生林'],
  },
  final_execute_RU_javascript_02: {
    backgroundJa: 'シベリア鉄道とヴォルガ川は、ロシアの東西・南北を結ぶ代表的な鉄道・河川ルートです。',
    historyJa: 'シベリア鉄道は1891年に建設が始まり、ヴォルガ川は9〜10世紀から交易路として利用されてきました。',
    episodeJa: 'シベリア鉄道の建設には推定8万5000人以上が関わり、1906〜1914年には約400万人の農民がこの鉄道を使ってシベリアへ移住しました。',
    keyPointsJa: ['シベリア鉄道は1891年に建設開始', '建設に8万5000人以上が関与', '1906〜1914年に400万人がシベリア移住', 'ヴォルガ川は9世紀から交易路'],
  },
  ru_js_b01: {
    backgroundJa: 'ロシアの電話番号は10桁で構成され、国番号+7のあとに続く番号として国内で広く使われています。',
    historyJa: '国番号+7はソ連時代の統一電話番号制度を引き継いだもので、現在はカザフスタンとも共有されています。',
    episodeJa: '携帯電話番号は先頭が9で始まり、固定電話はモスクワが495/499、サンクトペテルブルクが812など地域ごとの番号が割り当てられています。',
    keyPointsJa: ['国番号は+7（カザフスタンと共有）', '国内番号は10桁', '携帯番号は9から始まる', '固定電話は地域ごとの番号がある'],
  },
  ru_js_b02: {
    backgroundJa: 'モスクワとサンクトペテルブルクはロシアの一・二位の人口を持つ都市で、それぞれ異なる歴史的役割を担ってきました。',
    historyJa: 'モスクワは1147年に初めて記録され、サンクトペテルブルクは1703年5月27日にピョートル大帝が建設しました。',
    episodeJa: 'サンクトペテルブルクは1712年から1918年まで首都として機能しており、モスクワが継続して首都だったわけではない期間が200年以上ありました。',
    keyPointsJa: ['モスクワの初出は1147年', 'サンクトペテルブルクは1703年建設', 'モスクワ人口は約1,300万人で1位', 'サンクトペテルブルクは約560万人で2位'],
  },
  ru_js_b03: {
    backgroundJa: 'ロシアの代表的な劇場としてボリショイ劇場とマリインスキー劇場があり、それぞれモスクワとサンクトペテルブルクを代表します。',
    historyJa: 'ボリショイ劇場は1776年にエカチェリーナ2世の許可で創設され、マリインスキー劇場の前身は1783年に設立されました。',
    episodeJa: 'マリインスキー劇場は改修後、世界最大級の舞台を持つ劇場の一つとなり、ボリショイ・バレエ団は200人を超える団員数で世界最大のバレエ団とされています。',
    keyPointsJa: ['ボリショイ劇場は1776年創設', 'マリインスキー劇場の前身は1783年設立', 'ボリショイ・バレエ団は200人超の団員数', 'マリインスキーは世界最大級の舞台を持つ'],
  },
  final_debug_RU_javascript_01: {
    backgroundJa: 'ソロヴェツキー諸島は白海に浮かぶ修道院複合体で、ロシア北部の重要な宗教的中心地として発展しました。',
    historyJa: '1436年に修道士ゾシマらによってソロヴェツキー修道院が創設され、1992年にユネスコ世界遺産に登録されました。',
    episodeJa: '17世紀には約350人の修道士と600〜700人の使用人・職人が暮らす一大拠点となりましたが、革命後の1920年代にはソビエト政府により強制労働収容所として転用され、1990年に再び宗教施設として復活しました。',
    keyPointsJa: ['1436年に修道院が創設', '17世紀は350人規模の修道士が在住', '1920年代に強制収容所として使用された歴史がある', '1992年にユネスコ世界遺産登録'],
  },
  ru_java_d01: {
    backgroundJa: 'モスクワ・クレムリンはロシアの権力の象徴である城塞で、モスクワの歴史的中心部に位置しています。',
    historyJa: '最初の木造要塞は1156年に築かれ、現在の赤レンガの城壁は1485年から1495年にかけて建設されました。',
    episodeJa: '城壁の建設にはイタリア人建築家も関わり、ロシアと西欧の建築技術が融合した独特の様式が生まれました。',
    keyPointsJa: ['最初の要塞は1156年に築造', '現在の城壁は15世紀末に建設', 'イタリア人建築家も関与', '1990年にユネスコ世界遺産登録'],
  },
  ru_java_d02: {
    backgroundJa: 'イヴァン・パヴロフは条件反射の研究で知られるロシアの生理学者で、ロシア人初のノーベル賞受賞者です。',
    historyJa: '1904年、消化の生理学に関する研究でノーベル生理学・医学賞を受賞しました。',
    episodeJa: '条件反射の発見は消化実験中の偶然の観察がきっかけで、犬がいつも給仕する助手の姿を見ただけで唾液を出すことに気づいたことから研究が始まりました。',
    keyPointsJa: ['1904年にノーベル生理学・医学賞を受賞', '受賞理由は消化の生理学研究', '条件反射は実験中の偶然の発見から', 'ロシア人初のノーベル賞受賞者'],
  },
  ru_java_d03: {
    backgroundJa: 'ユーリイ・ガガーリンは1961年に人類初の有人宇宙飛行を行ったソ連の宇宙飛行士です。',
    historyJa: '1961年4月12日、ボストーク1号でバイコヌール宇宙基地から打ち上げられ、地球を1周しました。',
    episodeJa: '飛行時間は108分、最高高度327km、当時27歳で、帰還後は世界的な英雄として迎えられました。',
    keyPointsJa: ['1961年4月12日に宇宙飛行', 'ボストーク1号に搭乗', '飛行時間は108分', '最高高度は327km'],
  },
  ru_java_d04: {
    backgroundJa: 'ロシアでは鉄道・地下鉄・河川・航空など複数の交通手段が広大な国土を結んでいます。',
    historyJa: 'シベリア鉄道は1891年から1916年にかけて建設され、モスクワとウラジオストクを結ぶ世界最長の鉄道となりました。',
    episodeJa: '河川交通は古代から続く交易の手段で、ヴォルガ川は運河によってバルト海・黒海・カスピ海とも接続されています。',
    keyPointsJa: ['シベリア鉄道は1891〜1916年建設', '全長約9,289kmで世界最長級', '河川交通は古代からの交易手段', '運河で複数の海と接続'],
  },
  ru_java_d05: {
    backgroundJa: 'ロシアはシベリア、極東、ヴォルガ地方など広大な地域に分かれ、地理・気候・文化が大きく異なります。',
    historyJa: '現在の連邦制度は1993年憲法に基づき、2000年には連邦管区という行政上のまとまりが新設されました。',
    episodeJa: 'シベリアは国土の大部分を占める一方で人口は希薄で、極東を含む東部地域全体の人口はモスクワ近郊圏よりも少ないとされています。',
    keyPointsJa: ['1993年憲法に基づく連邦制度', '2000年に連邦管区が新設', 'シベリアは面積が広いが人口は希薄', '地域ごとに気候・文化が大きく異なる'],
  },
  final_decode_RU_java_01: {
    backgroundJa: '西カフカスは、ヨーロッパで人間活動の影響をほとんど受けていない数少ない大規模山岳地域で、植物多様性の世界的中心地です。',
    historyJa: '1999年にユネスコ世界遺産に登録されました。',
    episodeJa: 'この地域は山地ヨーロッパバイソン（コーカサスバイソン）の発祥地であり、絶滅後の再導入の拠点ともなっています。',
    keyPointsJa: ['1999年にユネスコ世界遺産登録', '面積は約27.5万ヘクタール', '1,580種の植物が確認され約3分の1が固有種', '山地ヨーロッパバイソンの発祥地'],
  },
  final_decode_RU_java_02: {
    backgroundJa: 'ヴランゲリ島保護区は、北極圏で最も生物多様性が高いとされるロシア極北の自然保護区です。',
    historyJa: '1976年に保護区として設立され、2004年に隣接するヘラルド島とともにユネスコ世界遺産に登録されました。',
    episodeJa: '世界最大級のホッキョクグマの出産用巣穴密集地として知られ、毎年350〜600頭のメスがこの島で出産すると推定されています。',
    keyPointsJa: ['1976年に保護区設立', '2004年にユネスコ世界遺産登録', 'ホッキョクグマの巣穴密度が世界最高水準', '太平洋セイウチの世界最大級の生息地'],
  },
  final_decode_RU_java_03: {
    backgroundJa: 'ヤロスラヴリ歴史地区は、ヴォルガ川沿いにある「黄金の輪」を構成する歴史都市の一つです。',
    historyJa: '1010年頃にヤロスラフ賢公によって創設され、2005年にユネスコ世界遺産に登録されました。',
    episodeJa: 'エカチェリーナ2世の時代である1763年の都市計画改革により、中世の街並みの上に放射状の新古典主義的な街路網が重ねられました。',
    keyPointsJa: ['1010年頃にヤロスラフ賢公が創設', 'ヴォルガとコトロスリ川の合流点に位置', '1763年の都市計画改革で街路網を整備', '2005年にユネスコ世界遺産登録'],
  },
  ru_java_e01: {
    backgroundJa: 'ドミトリ・メンデレーエフは元素を周期表にまとめたロシアの化学者で、近代化学の基礎を築きました。',
    historyJa: '1869年、サンクトペテルブルク大学の教授だった時期に、元素を原子量順に並べた周期表を発表しました。',
    episodeJa: '周期表には未発見の元素のための空欄を残し、後にガリウムやスカンジウム、ゲルマニウムとして実際に発見されたことで、その予言の正確さが証明されました。',
    keyPointsJa: ['1869年に周期表を発表', '原子量順に元素を配置', '未発見元素の性質を予言', 'ガリウムなどの発見で予言が実証された'],
  },
  ru_java_e02: {
    backgroundJa: 'ロシアではモスクワ時間（MSK）をはじめとする複数の時間帯が使われ、国土の広さを反映しています。',
    historyJa: '現在は11の時間帯に分かれ、2014年からサマータイム制度は廃止されています。',
    episodeJa: 'モスクワ時間はUTC+3で、国民の約63％がこの時間帯内に住んでいる一方、国土の東部は人口が少なく時間帯の数だけ広がりが大きいことを示しています。',
    keyPointsJa: ['国内に11の時間帯がある', 'モスクワ時間はUTC+3', '人口の約63％がモスクワ時間内に住む', '2014年からサマータイムを廃止'],
  },
  ru_java_e03: {
    backgroundJa: 'シベリア鉄道はモスクワとウラジオストクを結ぶ世界最長の鉄道で、ロシア横断の旅と結びつく象徴的存在です。',
    historyJa: '1891年にアレクサンドル3世の命で建設が始まり、1916年に全線開通しました。',
    episodeJa: '直通で乗ると約6〜7日（7日6晩）かかる長旅で、財務大臣セルゲイ・ヴィッテが経済発展の手段として建設を強く推進した人物として知られています。',
    keyPointsJa: ['1891年に建設開始、1916年全線開通', '全長約9,289km、8つの時間帯を横断', '直通で約6〜7日かかる', 'セルゲイ・ヴィッテが建設を推進'],
  },
  ru_java_e04: {
    backgroundJa: 'キリル文字はロシア語などスラブ系言語で使われる文字体系で、聖キュリロスの名にちなんで名付けられています。',
    historyJa: '9世紀にキュリロスとメトディオスの宣教活動を起点とし、その弟子たちが9世紀末から10世紀初頭にブルガリアで体系化しました。',
    episodeJa: 'キュリロスとメトディオス自身が考案したのは別の文字「グラゴール文字」で、現在のキリル文字は弟子たちがギリシャ文字に近い形に簡略化して作ったものです。',
    keyPointsJa: ['9世紀のキュリロスとメトディオスの宣教が起点', '実際の考案者は弟子たち', 'もとはグラゴール文字という別の文字があった', '現在50以上の言語で使用されている'],
  },
  final_execute_RU_java_01: {
    backgroundJa: 'モスクワ・中央連邦管区、サンクトペテルブルク・北西連邦管区など、ロシアの都市は所属する地域区分と結びついています。',
    historyJa: '連邦管区制度は2000年に新設され、各地域の federal な監督を行うための行政上の区分として機能しています。',
    episodeJa: 'モスクワは中央連邦管区、サンクトペテルブルクは北西連邦管区に属し、これらの管区自体は独自の統治権限を持たない調整目的の区分です。',
    keyPointsJa: ['連邦管区は2000年に新設', '8つの連邦管区がある', '管区自体に独自の統治権限はない', 'モスクワとサンクトペテルブルクは連邦市'],
  },
  final_execute_RU_java_02: {
    backgroundJa: 'ロシアは北極圏での科学研究の歴史が長く、世界初の漂流式極地観測基地を運用した国として知られています。',
    historyJa: '1937年5月、ソ連は北極点付近に世界初の漂流観測基地「北極1号（NP-1）」を設置しました。',
    episodeJa: 'イヴァン・パパーニンら4人の隊員は氷盤に乗って274日間漂流し、2,850kmを移動した後に救出され、ソ連の英雄として迎えられました。',
    keyPointsJa: ['1937年に世界初の漂流観測基地を設置', '隊員4人が274日間漂流', '2,850kmを移動して救出された', '1937〜1991年に88回の観測を実施'],
  },
  ru_java_b01: {
    backgroundJa: 'ロシアの主要都市にはMOW、SPB、KZNなどの省略表記がサンプルとして使われることがあります。',
    historyJa: 'モスクワ・サンクトペテルブルク・カザンはそれぞれ1147年、1703年、13世紀末に都市として記録に登場しています。',
    episodeJa: '実際のロシアでは都市の略号制度よりも、車両ナンバープレートの地域番号（モスクワ77・サンクトペテルブルク78・カザン16など）が地域識別の実例として使われています。',
    keyPointsJa: ['モスクワは1147年初出', 'サンクトペテルブルクは1703年建設', '実際の地域識別は車両番号制度が代表例', 'カザンはタタールスタン共和国の首都'],
  },
  ru_java_b02: {
    backgroundJa: 'ロシアの郵便番号などの行政コードは先頭ゼロを含むことがあり、識別情報の保存方法として注意が必要な題材です。',
    historyJa: 'ロシアの郵便番号制度はソ連時代の1971年に導入され、6桁の数字コードとして現在まで使われています。',
    episodeJa: 'モスクワの郵便番号は1から始まるなど地域ごとに先頭の数字が割り当てられており、識別コードは計算対象ではないため先頭ゼロを保てる文字列として扱うのが適切です。',
    keyPointsJa: ['郵便番号制度は1971年に導入', '6桁の数字コード', 'モスクワの郵便番号は1から始まる', '識別コードは文字列として扱うのが適切'],
  },
  ru_java_b03: {
    backgroundJa: 'ロシアの主要美術館では来館者数の集計が行われ、エルミタージュ美術館はその代表例です。',
    historyJa: 'エルミタージュ美術館は1764年にエカチェリーナ2世の収集を起源とし、1852年に一般公開されました。',
    episodeJa: '所蔵品は300万点を超え、新型コロナ流行以降は来館者数が変動しており、年によって集計方法や数字が大きく異なる点が知られています。',
    keyPointsJa: ['1764年エカチェリーナ2世の収集が起源', '1852年に一般公開', '所蔵品は300万点を超える', '来館者数は年によって変動が大きい'],
  },
  final_debug_RU_java_01: {
    backgroundJa: 'ボルガル歴史考古遺跡群は、ヴォルガ・ブルガール人がイスラム教を受け入れた歴史を伝えるタタールスタン共和国の世界遺産です。',
    historyJa: '922年、ハン・アルムシュの時代にヴォルガ・ブルガールがイスラム教を公式に受け入れ、2014年にユネスコ世界遺産に登録されました。',
    episodeJa: 'ボルガルは13世紀にモンゴル帝国の一部となった後、ジョチ・ウルス（金帳汗国）最初の首都となり、後にカザンが台頭するまでヴォルガ地方の中心地として栄えました。',
    keyPointsJa: ['922年にイスラム教を公式に受容', '2014年にユネスコ世界遺産登録', '13世紀にジョチ・ウルス最初の首都に', 'カザンの近郊、ヴォルガ川右岸に位置'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、ロシアの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'RU',
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
    countryId: 'RU',
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
  { id: 'ru_py_d01', languageId: 'python', world: 'decode', title: 'Moscow as capital', titleJa: 'モスクワ（首都）', category: 'geography-capital', objective: 'strings', source: SRC.moscow, summaryJa: 'モスクワはロシアの首都です。', prompt: 'モスクワはロシアの首都です。下のコードを実行すると Russia\'s capital is Moscow. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("Russia\'s capital is " + capital + ".")', answer: '"Moscow"', expectedOutput: "Russia's capital is Moscow.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"Moscow" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'ru_py_d02', languageId: 'python', world: 'decode', title: 'Moscow Metro opening year', titleJa: 'モスクワ地下鉄の開通年', category: 'history-infrastructure', objective: 'integers', source: SRC.metro, summaryJa: 'モスクワ地下鉄は1935年に開通しました。', prompt: '年が1935のとき Metro:1935 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Metro:{year}"\nprint(label)', answer: '1935', expectedOutput: 'Metro:1935', hint: '整数は引用符なしで書きます。', explanation: 'year に1935を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'ru_py_d03', languageId: 'python', world: 'decode', title: 'Volga River label', titleJa: 'ヴォルガ川', category: 'geography-nature', objective: 'condition', source: SRC.volga, summaryJa: 'ヴォルガ川はロシアの主要な河川です。', prompt: '河川名が Volga のとき river と表示されるよう、if の条件を完成させてください。', code: 'river = "Volga"\nif ___BLANK___:\n    print("river")\nelse:\n    print("other")', answer: 'river == "Volga"', expectedOutput: 'river', hint: '文字列が完全に一致するか == で比較します。', explanation: 'river の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'ru_py_d04', languageId: 'python', world: 'decode', title: 'Russian city sample labels', titleJa: 'ロシアの都市サンプルラベル', category: 'geography', objective: 'list', source: SRC.cities, summaryJa: 'サンプルとして Moscow、Saint Petersburg、Kazan などの都市ラベルを扱います。', prompt: 'リストから Kazan を取り出して表示するよう、添字を埋めてください。', code: 'cities = ["Moscow", "Saint Petersburg", "Kazan"]\nprint(cities[___BLANK___])', answer: '2', expectedOutput: 'Kazan', hint: 'Python のリストは0番目から数えます。', explanation: 'Kazan はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'ru_py_d05', languageId: 'python', world: 'decode', title: 'Lake Baikal location lookup', titleJa: 'バイカル湖の所在地', category: 'geography-nature', objective: 'dictionary', source: SRC.baikal, summaryJa: 'バイカル湖はシベリアにあります。', prompt: '辞書から region を取り出して Siberia と表示されるよう、キーを埋めてください。', code: 'lake = {"name": "Lake Baikal", "region": "Siberia"}\nprint(lake[___BLANK___])', answer: '"region"', expectedOutput: 'Siberia', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"region" キーの値が Siberia です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_RU_python_01', languageId: 'python', world: 'decode', title: 'Kremlin and Red Square, Moscow', titleJa: 'クレムリンと赤の広場（モスクワ）', category: 'world-heritage', objective: 'function', source: SRC.kremlin, summaryJa: 'クレムリンと赤の広場はモスクワにある世界遺産です。', prompt: '関数と条件を使い、city が Moscow のときだけ Kremlin:Moscow と表示するよう空欄を埋めてください。', code: 'name = "Kremlin"\ncity = "Moscow"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Moscow"', expectedOutput: 'Kremlin:Moscow', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Moscow と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_RU_python_02', languageId: 'python', world: 'decode', title: 'Historic Centre of Saint Petersburg', titleJa: 'サンクトペテルブルク歴史地区', category: 'world-heritage', objective: 'loop', source: SRC.spbHistoric, summaryJa: 'サンクトペテルブルク歴史地区と関連建造物群は世界遺産です。', prompt: 'city が Saint Petersburg の記念碑名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'monuments = [\n    {"name": "Winter Palace", "city": "Saint Petersburg"},\n    {"name": "Other", "city": "Moscow"}\n]\nfor monument in monuments:\n    if ___BLANK___:\n        print(monument["name"])', answer: 'monument["city"] == "Saint Petersburg"', expectedOutput: 'Winter Palace', hint: '各辞書の city キーを比較します。', explanation: 'Winter Palace の city だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_RU_python_03', languageId: 'python', world: 'decode', title: 'Kizhi Pogost', titleJa: 'キジ・ポゴスト', category: 'world-heritage', objective: 'dictionary', source: SRC.kizhi, summaryJa: 'キジ・ポゴストはカレリア共和国にある世界遺産です。', prompt: '辞書と関数を使い、Kizhi Pogost:Karelia と表示するキーを埋めてください。', code: 'site = {"name": "Kizhi Pogost", "region": "Karelia"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"region"', expectedOutput: 'Kizhi Pogost:Karelia', hint: 'Karelia を取り出すキーを選びます。', explanation: '"region" キーの値が Karelia です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'ru_py_e01', languageId: 'python', world: 'execute', title: 'State Hermitage Museum', titleJa: '国立エルミタージュ美術館', category: 'museum', objective: 'function', source: SRC.hermitage, summaryJa: '国立エルミタージュ美術館はサンクトペテルブルクにあります。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def museum_label(name, city):\n    return f"{name}:{city}"\nprint(museum_label("Hermitage", "Saint Petersburg"))', options: ['Hermitage:Saint Petersburg', 'Saint Petersburg:Hermitage', 'Hermitage', 'Error'], answer: 'Hermitage:Saint Petersburg', expectedOutput: 'Hermitage:Saint Petersburg', hint: 'return の f-string で name と city の順番を見ます。', explanation: 'name が先、city が後ろなので Hermitage:Saint Petersburg です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。', optionExplanations: { 'Hermitage:Saint Petersburg': '正解。f"{name}:{city}"はnameが先、cityが後なのでHermitage:Saint Petersburgになります。', 'Saint Petersburg:Hermitage': 'f文字列は{name}:{city}の順で定義されているため、nameが先になります。', 'Hermitage': 'f文字列にはcityの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'ru_py_e02', languageId: 'python', world: 'execute', title: 'Bolshoi Theatre', titleJa: 'ボリショイ劇場', category: 'culture', objective: 'dictionary', source: SRC.bolshoi, summaryJa: 'ボリショイ劇場はモスクワにあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'theatre = {"name": "Bolshoi Theatre", "city": "Moscow"}\nprint(theatre["city"])', options: ['Moscow', 'Bolshoi Theatre', 'Saint Petersburg', 'city'], answer: 'Moscow', expectedOutput: 'Moscow', hint: '"city" キーの値を見ます。', explanation: 'theatre["city"] は Moscow を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。', optionExplanations: { 'Moscow': '正解。theatre["city"]はcityキーの値であるMoscowを返します。', 'Bolshoi Theatre': 'これはnameキーの値で、コードが読んでいるのはcityキーなので出力されません。', 'Saint Petersburg': 'theatre辞書にはSaint Petersburgという値は含まれておらず、cityの値はMoscowです。', 'city': '"city"はキーの名前そのものであり、辞書アクセスはキーに対応する値を返します。' } },
  { id: 'ru_py_e03', languageId: 'python', world: 'execute', title: 'Trans-Siberian Railway sample stops', titleJa: 'シベリア鉄道のサンプル停車地', category: 'transport', objective: 'loop', source: SRC.transSiberian, summaryJa: 'サンプルとして Moscow、Yekaterinburg などのシベリア鉄道停車地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["Moscow", "Yekaterinburg"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['Moscow|Yekaterinburg', 'Yekaterinburg|Moscow', 'Moscow|', 'Yekaterinburg'], answer: 'Moscow|Yekaterinburg', expectedOutput: 'Moscow|Yekaterinburg', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'Moscow、Yekaterinburg の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。', optionExplanations: { 'Moscow|Yekaterinburg': '正解。stopsの順にMoscow|Yekaterinburg|となり、[:-1]で末尾の|だけが取り除かれます。', 'Yekaterinburg|Moscow': 'forループはstopsの並び順（Moscowが先）通りに処理するため、順序が入れ替わることはありません。', 'Moscow|': '[:-1]は末尾1文字だけを除くスライスで、2件目のYekaterinburgまで削ってしまうことはありません。', 'Yekaterinburg': '1件目のMoscowも結果に含まれるため、2件目だけが残ることはありません。' } },
  { id: 'ru_py_e04', languageId: 'python', world: 'execute', title: 'Kamchatka Peninsula records', titleJa: 'カムチャツカ半島のレコード', category: 'geography-nature', objective: 'loop', source: SRC.kamchatka, summaryJa: 'カムチャツカ半島は火山とロシア極東と結びつく地域です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Kamchatka", "fareast": True},\n    {"name": "Other", "fareast": False}\n]\nselected = [r["name"] for r in records if r["fareast"]]\nprint(selected[0])', options: ['Kamchatka', 'Other', 'True', 'False'], answer: 'Kamchatka', expectedOutput: 'Kamchatka', hint: 'fareast が True の辞書だけ残します。', explanation: 'Kamchatka の fareast だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。', optionExplanations: { 'Kamchatka': '正解。fareastがTrueなのはKamchatkaだけなので、selectedにはKamchatkaのみが入りselected[0]はKamchatkaです。', 'Other': 'OtherのfareastはFalseなので、リスト内包表記の条件で除外されselectedには入りません。', 'True': 'selectedはname（文字列）のリストであり、fareastの真偽値そのものが出力されるわけではありません。', 'False': 'selected[0]はリストの先頭要素であるKamchatka（文字列）であり、真偽値Falseが出力されることはありません。' } },
];

const pyFinalExecute = [
  { id: 'final_execute_RU_python_01', languageId: 'python', world: 'execute', title: 'Lake Baikal World Heritage records', titleJa: 'バイカル湖の世界遺産レコード', category: 'world-heritage-nature', objective: 'loop', source: SRC.baikalFinal, summaryJa: 'バイカル湖は世界遺産に登録されています。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "site": "natural", "period": 200},\n    {"name": "Other", "site": "cultural", "period": 100},\n    {"name": "Site B", "site": "natural", "period": 50}\n]\nselected = sorted([r for r in records if r["site"] == "natural"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'site で絞ったあと period の昇順です。', explanation: 'natural は Site B(50) と Site A(200) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。', optionExplanations: { 'Site B>Site A': '正解。site==naturalで絞るとSite A(200)とSite B(50)が残り、period昇順でSite B(50)が先になります。', 'Site A>Site B': 'periodの昇順で並べるとSite B(50)がSite A(200)より先になるため、この順序にはなりません。', 'Other>Site A': 'Otherのsiteはculturalでnaturalではないため、フィルタ条件で除外されます。', 'Site A>Other': 'Otherはnaturalではないため除外され、また並び順もperiod昇順とは異なります。' } },
  { id: 'final_execute_RU_python_02', languageId: 'python', world: 'execute', title: 'Russian cultural institutions dataset', titleJa: 'ロシアの文化機関データセット', category: 'culture', objective: 'dictionary', source: SRC.culturalInstitutions, summaryJa: 'サンプルとして Hermitage、Bolshoi Theatre、Tretyakov Gallery、Mariinsky Theatre を扱います。', prompt: '辞書とリストから moscow が True の件数を集計した結果を選んでください。', code: 'institutions = [\n    {"name": "Bolshoi Theatre", "moscow": True},\n    {"name": "Tretyakov Gallery", "moscow": True},\n    {"name": "Hermitage", "moscow": False},\n    {"name": "Mariinsky Theatre", "moscow": False}\n]\ncount = sum(1 for inst in institutions if inst["moscow"])\nprint(count)', options: ['2', '4', '1', 'Bolshoi Theatre'], answer: '2', expectedOutput: '2', hint: 'moscow が True の辞書だけ数えます。', explanation: 'Bolshoi Theatre、Tretyakov Gallery の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。', optionExplanations: { '2': '正解。moscowがTrueなのはBolshoi TheatreとTretyakov Galleryの2件なので、countは2になります。', '4': 'institutionsには4件のデータがありますが、moscowがTrueなのはそのうち2件だけです。', '1': 'Bolshoi TheatreとTretyakov Galleryの両方がTrueなので、1件だけがカウントされるわけではありません。', 'Bolshoi Theatre': 'countはTrueの件数を表す整数で、inst自体の名前が出力されるわけではありません。' } },
];

const pyDebug = [
  { id: 'ru_py_b01', languageId: 'python', world: 'debug', title: 'Russian ruble formatting', titleJa: 'ロシアルーブルの表示', category: 'finance', objective: 'strings', source: SRC.ruble, summaryJa: 'ロシアの通貨はロシアルーブルです。', prompt: '金額を 10.50 RUB と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " RUB")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 RUB と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} RUB")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。', causeOptionExplanations: { '文字列 amount に数値 0 を + で足している': '正解。amountは文字列"10.5"で、文字列に数値0を+で足すことはできずTypeErrorになります。', '出力文の文字列だけが間違っている': '" RUB"の部分の書き方自体は正しく、問題はamountと0の加算部分にあります。', 'データの件数が不足している': 'amountには値が1つ入っており、件数ではなく型の不一致が原因です。' }, fixOptionExplanations: { 'amount を float にして、f-string で小数2桁に整形する': '正解。floatに変換しf"{amount:.2f}"とすれば、10.50 RUBのように整形できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '金額データを無視して固定文字列を出すと、実際の金額が反映されません。' }, impactOptionExplanations: { '数値計算と表示形式を分け、10.50 RUB と安定して表示できる': '正解。floatとf-stringの書式指定により、計算と表示形式を分けて安定して表示できます。', '常に例外を出して停止する': '修正後はamountがfloat型になるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'amountのデータはそのまま使われ続けます。修正は型と表示形式だけです。' } },
  { id: 'ru_py_b02', languageId: 'python', world: 'debug', title: 'Russian station-code style labels', titleJa: 'ロシアの駅コード風の表示', category: 'administration', objective: 'strings', source: SRC.stationCode, summaryJa: 'サンプルの駅コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある駅コードを表示するコードです。数値保存の不具合を直します。', code: 'station_code = 12\nprint(station_code)', cause: '駅コードを数値として保存すると先頭ゼロを保持できない', fix: '駅コードを最初から文字列として保存する', impact: '先頭ゼロを含む駅コードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'station_code = "0012"\nprint(station_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。', causeOptionExplanations: { '駅コードを数値として保存すると先頭ゼロを保持できない': '正解。12を整数として保存すると先頭ゼロの情報が失われ、本来の4桁表記0012になりません。', '出力文の文字列だけが間違っている': 'print(station_code)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'station_codeには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { '駅コードを最初から文字列として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した4桁表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の駅コードデータを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む駅コードも失わずに表示できる': '正解。文字列として保存すれば、先頭ゼロを含む4桁表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': '駅コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'ru_py_b03', languageId: 'python', world: 'debug', title: 'Russian city abbreviation lookup', titleJa: '都市略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.cityAbbrev, summaryJa: 'サンプルとして MOW、SPB、KZN、NSK などの都市略号を扱います。', prompt: '略号 KZN から都市名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"MOW": "Moscow", "SPB": "Saint Petersburg"}\ncode = "KZN"\nprint(abbreviations[code])', cause: '辞書に KZN のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"MOW": "Moscow", "SPB": "Saint Petersburg", "KZN": "Kazan"}\ncode = "KZN"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'KZN というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。', causeOptionExplanations: { '辞書に KZN のキーが登録されていないのに直接アクセスしている': '正解。abbreviationsにはMOWとSPBしか登録されておらず、KZNを角括弧で読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(abbreviations[code])自体の書き方は正しく、問題はキーが存在しないことです。', 'データの件数が不足している': '辞書には2件のデータがあり、件数不足ではなくKZNというキーが未登録であることが原因です。' }, fixOptionExplanations: { 'abbreviations.get(code, "unknown") のように安全に取得する': '正解。getにデフォルト値を渡すことで、キーが無い場合でも例外を出さずに"unknown"を返せます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '都市名データを無視して固定文字列にすると、実際に登録されている都市の名前も正しく取得できなくなります。' }, impactOptionExplanations: { '登録されていない略号でも例外を出さずに処理できる': '正解。get(code, "unknown")により、未登録の略号でもKeyErrorを起こさず安全に処理を続けられます。', '常に例外を出して停止する': '修正後はgetのデフォルト値によりKeyError自体が発生しなくなります。', '題材データを使わなくなる': '登録済みの都市データはそのまま使われ続けます。修正はキーが無いときの取得方法だけです。' } },
];

const pyFinalDebug = [
  { id: 'final_debug_RU_python_01', languageId: 'python', world: 'debug', title: 'Lena Pillars Nature Park', titleJa: 'レナ石柱自然公園', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.lenaPillars, summaryJa: 'レナ石柱自然公園はロシアにある世界遺産です。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Lena Pillars", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["sample_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'sample_count がない辞書でも record["sample_count"] を直接読んでいる', fix: 'record.get("sample_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Lena Pillars", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("sample_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に sample_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。', causeOptionExplanations: { 'sample_count がない辞書でも record["sample_count"] を直接読んでいる': '正解。2件目の辞書にはsample_countキーが無く、角括弧で直接読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(large)自体の書き方は正しく、問題はループ内でのキーアクセスです。', 'データの件数が不足している': 'recordsには2件のデータがあり、件数不足ではなく2件目にキーが無いことが原因です。' }, fixOptionExplanations: { 'record.get("sample_count") を確認してから int に変換する': '正解。getでNoneかどうか確認してからintに変換すれば、キーが無い行を安全に読み飛ばせます。', '条件を削除する': 'if文の条件を削除すると、すべての行でint変換を試みてしまい同じエラーが起きます。', 'すべての値を同じ文字列にする': '数値データを無視して固定文字列にすると、実際の判定が正しく行えなくなります。' }, impactOptionExplanations: { '欠損行を飛ばし、数値化できる行だけ判定できる': '正解。getとNone判定により、sample_countが無い行を飛ばして安全に判定できます。', '常に例外を出して停止する': '修正後はキーが無い場合にNoneとして扱われるため、KeyError自体が発生しなくなります。', '題材データを使わなくなる': 'Lena Pillarsなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsDecode = [
  { id: 'ru_js_d01', languageId: 'javascript', world: 'decode', title: "Saint Basil's Cathedral in Moscow", titleJa: '聖ワシリイ大聖堂（モスクワ）', category: 'architecture-religion', objective: 'object', source: SRC.saintBasil, summaryJa: '聖ワシリイ大聖堂はモスクワの赤の広場にあります。', prompt: 'オブジェクトから city を取り出して Moscow と表示されるよう、空欄を埋めてください。', code: 'const cathedral = { name: "Saint Basil\'s Cathedral", city: "Moscow" };\nconsole.log(cathedral.___BLANK___);', answer: 'city', expectedOutput: 'Moscow', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'cathedral.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'ru_js_d02', languageId: 'javascript', world: 'decode', title: 'Peterhof near Saint Petersburg', titleJa: 'ペテルゴフ（サンクトペテルブルク近郊）', category: 'architecture-history', objective: 'strings', source: SRC.peterhof, summaryJa: 'ペテルゴフはサンクトペテルブルク近郊にあります。', prompt: 'テンプレートリテラルで Peterhof:Saint Petersburg と表示されるよう空欄を埋めてください。', code: 'const site = "Peterhof";\nconst area = ___BLANK___;\nconsole.log(`${site}:${area}`);', answer: '"Saint Petersburg"', expectedOutput: 'Peterhof:Saint Petersburg', hint: 'area に入る文字列を引用符付きで書きます。', explanation: '"Saint Petersburg" を入れると ${area} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'ru_js_d03', languageId: 'javascript', world: 'decode', title: 'Russian flag colors', titleJa: 'ロシア国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'ロシア国旗は白・青・赤の3色で構成されています。', prompt: '配列から red を取り出す添字を埋めてください。', code: 'const colors = ["white", "blue", "red"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'red', hint: '配列は0番目から数えます。', explanation: 'red は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'ru_js_d04', languageId: 'javascript', world: 'decode', title: 'Russian transport mode labels', titleJa: 'ロシアの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'ロシアには鉄道、メトロ、河川、航空などの交通手段があります。', prompt: 'mode が metro のとき subway と表示されるよう case を埋めてください。', code: 'const mode = "metro";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("subway");\n    break;\n  default:\n    console.log("other");\n}', answer: '"metro"', expectedOutput: 'subway', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "metro" が一致し、subway が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'ru_js_d05', languageId: 'javascript', world: 'decode', title: 'Tretyakov Gallery', titleJa: 'トレチャコフ美術館', category: 'museum', objective: 'loop', source: SRC.tretyakov, summaryJa: 'トレチャコフ美術館はモスクワにあります。', prompt: 'for...of で city が Moscow の美術館だけを表示するよう、条件の空欄を埋めてください。', code: 'const galleries = [\n  { name: "Tretyakov Gallery", city: "Moscow" },\n  { name: "Other", city: "Saint Petersburg" }\n];\nfor (const gallery of galleries) {\n  if (___BLANK___) console.log(gallery.name);\n}', answer: 'gallery.city === "Moscow"', expectedOutput: 'Tretyakov Gallery', hint: '各 gallery の city を比較します。', explanation: 'Tretyakov Gallery の city だけが Moscow なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_RU_javascript_01', languageId: 'javascript', world: 'decode', title: 'Volcanoes of Kamchatka', titleJa: 'カムチャツカの火山群', category: 'world-heritage-nature', objective: 'array', source: SRC.volcanoesKamchatka, summaryJa: 'カムチャツカの火山群は世界遺産です。', prompt: 'array methods で kamchatka を含む名前を取り出してください。', code: 'const sites = ["altai", "kamchatka-volcanoes", "caucasus"];\nconst result = sites.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"kamchatka"', expectedOutput: 'kamchatka-volcanoes', hint: 'includes に探したい部分文字列を渡します。', explanation: '"kamchatka" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_RU_javascript_02', languageId: 'javascript', world: 'decode', title: 'Golden Mountains of Altai', titleJa: 'アルタイの黄金山脈', category: 'world-heritage-nature', objective: 'object', source: SRC.goldenMountains, summaryJa: 'アルタイの黄金山脈は世界遺産です。', prompt: 'find で Altai の record を探す条件を埋めてください。', code: 'const records = [{name:"Caucasus", kind:"mountain"}, {name:"Altai", kind:"mountain"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.kind);', answer: '"Altai"', expectedOutput: 'mountain', hint: 'name と一致する文字列を書きます。', explanation: 'Altai の record が見つかり、kind が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_RU_javascript_03', languageId: 'javascript', world: 'decode', title: 'Russian science figures', titleJa: 'ロシアの科学者サンプル', category: 'science-culture', objective: 'class', source: SRC.scienceFigures, summaryJa: 'サンプルとして Dmitri Mendeleev、Ivan Pavlov、Yuri Gagarin を扱います。', prompt: 'class のインスタンスを map して Mendeleev:chemistry と表示してください。', code: 'class Figure {\n  constructor(name, field) { this.name = name; this.field = field; }\n}\nconst items = [new Figure("Mendeleev", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.field}`).join(","));', answer: '"chemistry"', expectedOutput: 'Mendeleev:chemistry', hint: 'constructor の field に入る文字列です。', explanation: 'field に chemistry が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'ru_js_e01', languageId: 'javascript', world: 'execute', title: 'Yuri Gagarin', titleJa: 'ユーリイ・ガガーリン', category: 'science-history', objective: 'array', source: SRC.gagarin, summaryJa: 'ユーリイ・ガガーリンは初めて宇宙に到達した人物です。', prompt: 'map と join の出力を選んでください。', code: 'const names = ["gagarin"];\nconst label = names.map(n => n.toUpperCase()).join("-");\nconsole.log(label);', options: ['GAGARIN', 'gagarin', 'G-A', 'Gagarin'], answer: 'GAGARIN', expectedOutput: 'GAGARIN', hint: '各要素を大文字化します。', explanation: 'gagarin が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。', optionExplanations: { 'GAGARIN': '正解。toUpperCase()でgagarinがすべて大文字になり、要素が1つなのでjoinの区切り文字は使われずGAGARINになります。', 'gagarin': 'toUpperCase()が適用されるため、小文字のままのgagarinが出力されることはありません。', 'G-A': 'namesの要素は"gagarin"という1つの文字列全体で、文字単位に分割されて区切られるわけではありません。', 'Gagarin': 'toUpperCase()は文字列全体を大文字化するため、先頭だけが大文字になることはありません。' } },
  { id: 'ru_js_e02', languageId: 'javascript', world: 'execute', title: 'Volga River sample segments', titleJa: 'ヴォルガ川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.volga, summaryJa: 'ヴォルガ川はロシアの主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 40, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['90', '70', '30', '304020'], answer: '90', expectedOutput: '90', hint: '数値を左から足していきます。', explanation: '30 + 40 + 20 = 90 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。', optionExplanations: { '90': '正解。reduceは初期値0から30,40,20を順に足していくので、合計は90になります。', '70': '30+40の途中経過にとどまった値で、最後の20をまだ足し終えていません。', '30': '配列の最初の要素だけの値で、reduceはすべての要素を順に加算するため最終結果はこれだけではありません。', '304020': 'reduceのコールバックは+演算子で数値同士を足しているため、文字列のように連結されることはありません。' } },
  { id: 'ru_js_e03', languageId: 'javascript', world: 'execute', title: 'Mariinsky Theatre', titleJa: 'マリインスキー劇場', category: 'culture', objective: 'object', source: SRC.mariinsky, summaryJa: 'マリインスキー劇場はサンクトペテルブルクにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const theatre = { city: "Saint Petersburg", productions: ["ballet", "opera"] };\nlet result = theatre.city;\nfor (const item of theatre.productions) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Saint Petersburg:ballet:opera', 'ballet:opera:Saint Petersburg', 'Saint Petersburg', 'opera:ballet'], answer: 'Saint Petersburg:ballet:opera', expectedOutput: 'Saint Petersburg:ballet:opera', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに ballet、opera が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。', optionExplanations: { 'Saint Petersburg:ballet:opera': '正解。resultはSaint Petersburgから始まり、productionsの順にballet、operaが追加されます。', 'ballet:opera:Saint Petersburg': 'resultはtheatre.cityで初期化されるため、Saint Petersburgが先頭に来てproductionsの要素はその後に追加されます。', 'Saint Petersburg': 'for...ofループでproductionsの2要素がresultに追加されるため、Saint Petersburgだけで終わることはありません。', 'opera:ballet': 'productionsの順序はballetが先でoperaが後であり、また先頭のSaint Petersburgも結果に含まれます。' } },
  { id: 'ru_js_e04', languageId: 'javascript', world: 'execute', title: 'Moscow State University', titleJa: 'モスクワ国立大学', category: 'education', objective: 'function', source: SRC.msu, summaryJa: 'モスクワ国立大学はモスクワにあります。', prompt: '関数と条件の戻り値を選んでください。', code: 'function universityLabel(city) {\n  return city === "Moscow" ? "MSU" : "other";\n}\nconsole.log(universityLabel("Moscow"));', options: ['MSU', 'other', 'Moscow', 'true'], answer: 'MSU', expectedOutput: 'MSU', hint: '"Moscow" === "Moscow" の判定を見ます。', explanation: '条件が true なので "MSU" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。', optionExplanations: { 'MSU': '正解。city === "Moscow"がtrueになるため、三項演算子は"MSU"を返します。', 'other': '条件が一致してtrueになるため、falseの場合の値である"other"は返りません。', 'Moscow': 'cityの値そのものではなく、三項演算子が返す"MSU"という固定の文字列が表示されます。', 'true': '関数は文字列"MSU"を返しており、条件式の真偽値そのものを返しているわけではありません。' } },
];

const jsFinalExecute = [
  { id: 'final_execute_RU_javascript_01', languageId: 'javascript', world: 'execute', title: 'Virgin Komi Forests', titleJa: 'コミ原生林', category: 'world-heritage-nature', objective: 'array', source: SRC.komiForests, summaryJa: 'コミ原生林は世界遺産です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const forests = [\n  { name: "Komi North", biome: "boreal", area: 5 },\n  { name: "Other", biome: "steppe", area: 3 },\n  { name: "Komi South", biome: "boreal", area: 2 }\n];\nconst names = forests.filter(f => f.biome === "boreal").map(f => f.name).sort();\nconsole.log(names.join(">"));', options: ['Komi North>Komi South', 'Komi South>Komi North', 'Other>Komi North', 'Other>Komi South>Komi North'], answer: 'Komi North>Komi South', expectedOutput: 'Komi North>Komi South', hint: 'biome で絞ったあと、名前をアルファベット順にします。', explanation: 'Komi North と Komi South が残り、sort で Komi North が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。', optionExplanations: { 'Komi North>Komi South': '正解。boreal biomeで絞るとKomi NorthとKomi Southが残り、sortのアルファベット順でKomi Northが先になります。', 'Komi South>Komi North': 'sort()はアルファベット順に並べ替えるため、元の配列の出現順（Komi Northが先）のままにはなりません。', 'Other>Komi North': 'OtherのbiomeはsteppeでBorealではないため、filterの条件で除外されます。', 'Other>Komi South>Komi North': 'OtherはBorealではないためfilterで除外され、3件すべてが残ることはありません。' } },
  { id: 'final_execute_RU_javascript_02', languageId: 'javascript', world: 'execute', title: 'Russian rail and river-route sample data', titleJa: 'ロシアの鉄道・河川ルートサンプルデータ', category: 'transport', objective: 'object', source: SRC.routeData, summaryJa: 'サンプルとしてシベリア鉄道ルートとヴォルガ川ルートのデータを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"Trans-Siberian", segments:[2,3]}, {name:"Volga", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Trans-Siberian-Volga'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Trans-Siberian は5、Volga は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。', optionExplanations: { '10': '正解。Trans-Siberianのsegments(2+3=5)とVolgaのsegments(5)を外側のreduceで合計すると5+5=10になります。', '5': 'これはTrans-SiberianまたはVolgaどちらか1ルート分の内側のreduceの結果で、外側のreduceでの全体合計ではありません。', '3': 'これはTrans-Siberianのsegments配列の一部の値[3]にすぎず、内側・外側どちらのreduceの最終結果でもありません。', 'Trans-Siberian-Volga': '+演算子は数値の加算として使われているため、ルート名が文字列として連結されることはありません。' } },
];

const jsDebug = [
  { id: 'ru_js_b01', languageId: 'javascript', world: 'debug', title: 'Russian phone-number formatting', titleJa: 'ロシアの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてロシアの電話番号は10桁で構成されるものとして扱います。', prompt: '10桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "9161234567";\nif (digits.length === 9) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '10桁の番号なのに length === 9 と判定している', fix: 'length === 10 に修正してから slice する', impact: '10桁の番号を正しく整形できる', why: 'サンプル digits は10文字だからです。', correctedCode: 'const digits = "9161234567";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が9のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。', causeOptionExplanations: { '10桁の番号なのに length === 9 と判定している': '正解。digitsは10文字の文字列ですが、条件がlength === 9なのでif文の中に入らず何も出力されません。', '出力文の文字列だけが間違っている': 'console.logとテンプレートリテラルの書き方自体は正しく、問題はif文の条件にあります。', 'データの件数が不足している': 'digitsは"9161234567"という10文字のデータを正しく持っており、件数不足ではありません。' }, fixOptionExplanations: { 'length === 10 に修正してから slice する': '正解。digitsの実際の長さである10に条件を合わせれば、if文の中に入りslice処理が実行されます。', '条件を削除する': '条件を削除すると桁数チェックが効かなくなり、想定外の長さの番号でも整形してしまいます。', 'すべての値を同じ文字列にする': '電話番号データを無視して固定文字列にすると、実際の番号が反映されません。' }, impactOptionExplanations: { '10桁の番号を正しく整形できる': '正解。条件をlength === 10に直すことで、10桁の番号が正しく区切って表示されるようになります。', '常に例外を出して停止する': 'この修正は条件式の値を直すだけで、例外を発生させるものではありません。', '題材データを使わなくなる': 'digitsの電話番号データはそのまま使われ続けます。修正は判定する桁数だけです。' } },
  { id: 'ru_js_b02', languageId: 'javascript', world: 'debug', title: 'Moscow and Saint Petersburg labels', titleJa: 'モスクワとサンクトペテルブルク', category: 'geography-city', objective: 'object', source: SRC.twoCities, summaryJa: 'モスクワとサンクトペテルブルクはロシアの主要都市です。', prompt: 'major が true の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Moscow", major: true }, { name: "Saint Petersburg", major: true }];\nconst labels = cities.filter(city => city.large === true).map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには major があるのに large を参照している', fix: 'city.major === true に修正する', impact: 'Moscow と Saint Petersburg の両方を正しく選べる', why: '存在しない large は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Moscow", major: true }, { name: "Saint Petersburg", major: true }];\nconst labels = cities.filter(city => city.major === true).map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。', causeOptionExplanations: { 'データには major があるのに large を参照している': '正解。各オブジェクトはmajorプロパティを持ちますが、フィルタ条件はcity.largeを見ているため常にundefinedとなり一致しません。', '出力文の文字列だけが間違っている': 'console.logとjoinの書き方自体は正しく、問題はfilterの条件にあります。', 'データの件数が不足している': 'citiesにはMoscowとSaint Petersburgの2件があり、件数不足ではなくプロパティ名の不一致が原因です。' }, fixOptionExplanations: { 'city.major === true に修正する': '正解。実際に存在するmajorプロパティを参照することで、MoscowとSaint Petersburgの両方が正しく一致します。', '条件を削除する': '条件を削除するとフィルタの意味がなくなり、絞り込みたい意図が反映されません。', 'すべての値を同じ文字列にする': '都市データを無視して固定文字列にすると、実際のmajorに基づく絞り込みができなくなります。' }, impactOptionExplanations: { 'Moscow と Saint Petersburg の両方を正しく選べる': '正解。正しいプロパティ名majorで比較することで、両都市が正しく選ばれます。', '常に例外を出して停止する': '存在しないプロパティを読んでもJavaScriptではundefinedになるだけで、例外は発生しません。', '題材データを使わなくなる': 'MoscowとSaint Petersburgのデータはそのまま使われ続けます。修正は参照するプロパティ名だけです。' } },
  { id: 'ru_js_b03', languageId: 'javascript', world: 'debug', title: 'Theatre record lookup', titleJa: '劇場レコードの参照', category: 'culture', objective: 'object', source: SRC.theatreLookup, summaryJa: 'サンプルの劇場データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Theatre" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Theatre" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。', causeOptionExplanations: { 'record.detail が undefined のまま city を読んでいる': '正解。recordにはdetailプロパティが無いためrecord.detailはundefinedで、その先のcityを読むとTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logの書き方自体は正しく、問題はrecord.detail.cityというプロパティアクセスの部分です。', 'データの件数が不足している': 'recordは1件のオブジェクトとして正しく存在しており、件数不足ではなくdetailプロパティが無いことが原因です。' }, fixOptionExplanations: { 'optional chaining と代替値を使う': '正解。record.detail?.city ?? "unknown" とすることで、detailが無くてもエラーにならず代替値を使えます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'レコードのデータを無視して固定文字列にすると、本来の名前や都市の情報が表示されなくなります。' }, impactOptionExplanations: { 'detail がないレコードでも停止せず unknown を表示できる': '正解。optional chainingと??により、detailが無い場合でも例外を起こさずunknownとして処理を続けられます。', '常に例外を出して停止する': '修正後はdetailが無くても安全に処理されるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'nameなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsFinalDebug = [
  { id: 'final_debug_RU_javascript_01', languageId: 'javascript', world: 'debug', title: 'Solovetsky Islands', titleJa: 'ソロヴェツキー諸島', category: 'world-heritage-history', objective: 'object', source: SRC.solovetsky, summaryJa: 'ソロヴェツキー諸島の文化・歴史複合体は世界遺産です。', prompt: '諸島のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Solovetsky Islands", region: "Arkhangelsk", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.region);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.region ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Solovetsky Islands", region: "Arkhangelsk", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.region ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。', causeOptionExplanations: { 'heritage を heritag と誤記し、details も存在確認なしで読んでいる': '正解。site.heritagは誤記でundefinedになりif文が実行されず、さらにsite.detailsも存在しないため次の行でTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logとtoUpperCaseの呼び方自体は正しく、問題はプロパティ名の誤記とdetailsへの未確認アクセスです。', 'データの件数が不足している': 'siteは1つのオブジェクトとして正しく定義されており、件数不足ではなくプロパティ名と存在確認の問題です。' }, fixOptionExplanations: { 'site.heritage を比較し、site.details?.region ?? "unknown" のように安全に読む': '正解。正しいプロパティ名heritageで判定し、details?.region ?? "unknown" で欠損にも安全に対応できます。', '条件を削除する': '条件を削除すると、heritageがtrueかどうかに関わらず常に名前が表示されてしまい、意図と異なります。', 'すべての値を同じ文字列にする': '諸島のデータを無視して固定文字列にすると、実際の名前や地域の情報が表示されなくなります。' }, impactOptionExplanations: { '正しい boolean 判定ができ、欠損 details があっても停止しない': '正解。プロパティ名を直し安全なアクセスにすることで、正しい判定と欠損時の継続動作の両方が実現します。', '常に例外を出して停止する': '修正後はoptional chainingにより欠損があってもTypeErrorは発生しなくなります。', '題材データを使わなくなる': 'name・region・heritageなどの既存データはそのまま使われ続けます。修正はプロパティ名と読み取り方だけです。' } },
];

const javaDecode = [
  { id: 'ru_java_d01', languageId: 'java', world: 'decode', title: 'Moscow Kremlin', titleJa: 'モスクワ・クレムリン', category: 'architecture-history', objective: 'strings', source: SRC.kremlin, summaryJa: 'モスクワ・クレムリンはモスクワにあります。', prompt: 'Kremlin:Moscow と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String site = "Kremlin";\n    String city = ___BLANK___;\n    System.out.println(site + ":" + city);\n  }\n}', answer: '"Moscow"', expectedOutput: 'Kremlin:Moscow', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Moscow" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'ru_java_d02', languageId: 'java', world: 'decode', title: 'Ivan Pavlov Nobel year', titleJa: 'イヴァン・パヴロフのノーベル賞受賞年', category: 'science-history', objective: 'numbers', source: SRC.ivanPavlov, summaryJa: 'イヴァン・パヴロフは1904年にノーベル生理学・医学賞を受賞しました。', prompt: 'NobelPrize:1904 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "NobelPrize:" + year;\n    System.out.println(label);\n  }\n}', answer: '1904', expectedOutput: 'NobelPrize:1904', hint: 'int なので引用符なしの数値です。', explanation: 'year に1904を入れると文字列連結で NobelPrize:1904 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'ru_java_d03', languageId: 'java', world: 'decode', title: 'Yuri Gagarin spaceflight year', titleJa: 'ユーリイ・ガガーリンの宇宙飛行年', category: 'science-history', objective: 'condition', source: SRC.gagarinYear, summaryJa: 'ユーリイ・ガガーリンは1961年に初めて宇宙へ到達しました。', prompt: 'year が1961のとき Spaceflight と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1961;\n    if (___BLANK___) {\n      System.out.println("Spaceflight");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1961', expectedOutput: 'Spaceflight', hint: '値が等しいかは == で比較します。', explanation: 'year == 1961 が true になるため Spaceflight が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'ru_java_d04', languageId: 'java', world: 'decode', title: 'Russian travel mode labels', titleJa: 'ロシアの移動手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'ロシアでは鉄道・メトロ・河川・航空など複数の移動手段が使われています。', prompt: 'mode が river のとき River transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "river";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("River transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"river"', expectedOutput: 'River transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "river" が一致し、River transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'ru_java_d05', languageId: 'java', world: 'decode', title: 'Russian regions sample', titleJa: 'ロシアの地域区分サンプル', category: 'geography', objective: 'array', source: SRC.regions, summaryJa: 'サンプルとして Siberia、Far East、Volga region などの地域ラベルを扱います。', prompt: 'regions 配列を拡張 for で読み、Siberia だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"Far East", "Siberia", "Ural region"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Siberia")', expectedOutput: 'Siberia', hint: 'String の内容比較は equals です。', explanation: 'region が Siberia のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_RU_java_01', languageId: 'java', world: 'decode', title: 'Western Caucasus', titleJa: '西カフカス', category: 'world-heritage-nature', objective: 'method', source: SRC.westernCaucasus, summaryJa: '西カフカスは世界遺産です。', prompt: 'category が natural のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("natural")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"natural"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"natural" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_RU_java_02', languageId: 'java', world: 'decode', title: 'Wrangel Island Reserve', titleJa: 'ヴランゲリ島保護区', category: 'world-heritage-nature', objective: 'collections', source: SRC.wrangel, summaryJa: 'ヴランゲリ島の自然保護区は世界遺産です。', prompt: 'ArrayList から arctic の reserve だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Reserve {\n  String name;\n  boolean arctic;\n  Reserve(String n, boolean a) { name = n; arctic = a; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Reserve> reserves = new ArrayList<>();\n    reserves.add(new Reserve("Wrangel Island", true));\n    reserves.add(new Reserve("Other", false));\n    for (Reserve r : reserves) {\n      if (___BLANK___) System.out.println(r.name);\n    }\n  }\n}', answer: 'r.arctic', expectedOutput: 'Wrangel Island', hint: 'arctic フィールドが true の record だけです。', explanation: 'Wrangel Island の arctic だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_RU_java_03', languageId: 'java', world: 'decode', title: 'Historical Centre of Yaroslavl', titleJa: 'ヤロスラヴリ歴史地区', category: 'world-heritage', objective: 'class', source: SRC.yaroslavl, summaryJa: 'ヤロスラヴリ歴史地区は世界遺産です。', prompt: 'HashMap から Yaroslavl の地域を取り出し Yaroslavl:Volga と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass City {\n  String name;\n  String region;\n  City(String n, String r) { name = n; region = r; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, City> map = new HashMap<>();\n    map.put("Yaroslavl", new City("Yaroslavl", "Volga"));\n    City city = map.get(___BLANK___);\n    System.out.println(city.name + ":" + city.region);\n  }\n}', answer: '"Yaroslavl"', expectedOutput: 'Yaroslavl:Volga', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Yaroslavl キーから city オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'ru_java_e01', languageId: 'java', world: 'execute', title: 'Dmitri Mendeleev', titleJa: 'ドミトリ・メンデレーエフ', category: 'science-history', objective: 'strings', source: SRC.mendeleev, summaryJa: 'ドミトリ・メンデレーエフは周期表と結びつく科学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Mendeleev";\n    if (scientist.equals("Mendeleev")) System.out.println("periodic table");\n    else System.out.println("other");\n  }\n}', options: ['periodic table', 'other', 'Mendeleev', 'true'], answer: 'periodic table', expectedOutput: 'periodic table', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので periodic table が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。', optionExplanations: { 'periodic table': '正解。scientist.equals("Mendeleev")はtrueになるため、if節のperiodic tableが出力されます。', 'other': 'equalsによる文字列内容の比較はtrueになるため、else節のotherは実行されません。', 'Mendeleev': '出力されるのはif/elseで選ばれた固定文字列periodic tableまたはotherであり、scientistの値そのものではありません。', 'true': 'if文の条件式の評価結果ではなく、その分岐内で実行されるSystem.out.printlnの文字列が出力されます。' } },
  { id: 'ru_java_e02', languageId: 'java', world: 'execute', title: 'Russian time-zone sample', titleJa: 'ロシアの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'ロシアではモスクワ時間（MSK）などの時間帯が使われます。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 3));\n  }\n}', options: ['13', '10', '3', '30'], answer: '13', expectedOutput: '13', hint: '10 + 3 を計算します。', explanation: 'UTC 10時に3を足すので13です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。', optionExplanations: { '13': '正解。localHour(10, 3)はutcHour + offsetを計算するため、10 + 3 = 13が返ります。', '10': 'これはutcHourの値だけで、offsetの3を足す前の値です。', '3': 'これはoffset引数の値だけで、utcHourの10を足す前の値です。', '30': 'returnの式はutcHour + offsetという加算であり、10 * 3のような乗算ではありません。' } },
  { id: 'ru_java_e03', languageId: 'java', world: 'execute', title: 'Trans-Siberian Railway labels', titleJa: 'シベリア鉄道のラベル', category: 'transport', objective: 'collections', source: SRC.transSiberian, summaryJa: 'シベリア鉄道はロシア横断の旅と結びつきます。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Trans-Siberian");\n    labels.add("route");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Trans-Siberian>route', 'route>Trans-Siberian', 'Trans-Siberian>', 'route'], answer: 'Trans-Siberian>route', expectedOutput: 'Trans-Siberian>route', hint: '追加した順に result へ入ります。', explanation: 'Trans-Siberian、route の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。', optionExplanations: { 'Trans-Siberian>route': '正解。labelsにはTrans-Siberian、routeの順で追加されており、result"Trans-Siberian>route>"からsubstringで末尾の>を削るとTrans-Siberian>routeになります。', 'route>Trans-Siberian': '拡張forループはlabelsに追加された順（Trans-Siberianが先）に処理するため、順序が入れ替わることはありません。', 'Trans-Siberian>': '拡張forループはrouteの分も処理するため、Trans-Siberianだけで止まることはありません。', 'route': 'Trans-Siberianも結果に含まれるため、2件目のrouteだけが残ることはありません。' } },
  { id: 'ru_java_e04', languageId: 'java', world: 'execute', title: 'Russian script label sample', titleJa: 'ロシアの文字体系ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.scriptSample, summaryJa: 'サンプルとしてロシアの文字体系に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Cyrillic extends ScriptType {\n  @Override\n  String label() { return "Cyrillic"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Cyrillic();\n    System.out.println(type.label());\n  }\n}', options: ['Cyrillic', 'script', 'ScriptType', 'error'], answer: 'Cyrillic', expectedOutput: 'Cyrillic', hint: '実体は Cyrillic です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。', optionExplanations: { 'Cyrillic': '正解。typeの実体（実際に生成されたオブジェクト）はCyrillicなので、overrideされたlabel()が呼ばれます。', 'script': '変数の宣言型はScriptTypeですが、実行時にはCyrillicのoverrideされたメソッドが呼ばれるため親クラスの値は使われません。', 'ScriptType': 'これは型の名前であり、label()メソッドが返す文字列ではありません。', 'error': 'CyrillicはScriptTypeを正しく継承してoverrideしているため、コンパイルも実行も問題なく行われます。' } },
];

const javaFinalExecute = [
  { id: 'final_execute_RU_java_01', languageId: 'java', world: 'execute', title: 'Russian city-region records', titleJa: 'ロシアの都市・地域レコード', category: 'geography', objective: 'collections', source: SRC.cityRegion, summaryJa: 'サンプルとして Moscow–Central、Saint Petersburg–Northwest などの都市・地域データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市の地域を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("Moscow", 9);\n    cities.put("Kazan", 1);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Moscow', 'Kazan', 'MoscowKazan', '9'], answer: 'Moscow', expectedOutput: 'Moscow', hint: 'population が4以上の city だけです。', explanation: 'Moscow の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。', optionExplanations: { 'Moscow': '正解。isLarge(9)はtrueでisLarge(1)はfalseなので、population>=4を満たすMoscowだけがresultに追加されます。', 'Kazan': 'Kazanのpopulationは1でisLarge(1)はfalseになるため、resultには追加されません。', 'MoscowKazan': 'isLargeの条件を満たすのはMoscowだけで、Kazanは条件を満たさないため連結されません。', '9': 'resultにはisLargeの条件を満たしたcity名（文字列）が入り、population自体の数値が出力されるわけではありません。' } },
  { id: 'final_execute_RU_java_02', languageId: 'java', world: 'execute', title: 'Arctic research station sample records', titleJa: '北極研究拠点のサンプルレコード', category: 'science-geography', objective: 'collections', source: SRC.arcticResearch, summaryJa: 'サンプルとして北極圏の研究拠点データを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Arctic Station A", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Arctic Station A:active', 'Closed:active', 'Arctic Station A', 'active:Arctic Station A'], answer: 'Arctic Station A:active', expectedOutput: 'Arctic Station A:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Arctic Station A だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。', optionExplanations: { 'Arctic Station A:active': '正解。Arctic Station Aのactiveはtrueなのでif条件を満たし、label()が呼ばれてArctic Station A:activeが表示されます。', 'Closed:active': 'Closedのactiveはfalseなのでif条件を満たさず、label()は呼ばれず出力されません。', 'Arctic Station A': 'label()はname + ":active"を返すため、nameだけでなく":active"も含めて出力されます。', 'active:Arctic Station A': 'label()はname + ":active"の順で連結しているため、nameが先、":active"が後になります。' } },
];

const javaDebug = [
  { id: 'ru_java_b01', languageId: 'java', world: 'debug', title: 'Russian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.cityAbbrev, summaryJa: 'ロシアの都市コードは MOW、SPB、KZN、NSK などです。', prompt: '都市コード SPB を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SPB");\n    if (code == "SPB") System.out.println("Saint Petersburg");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("SPB") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SPB");\n    if (code.equals("SPB")) System.out.println("Saint Petersburg");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。', causeOptionExplanations: { 'String の内容比較に == を使っている': '正解。new String("SPB")で作られたcodeはリテラル"SPB"とは別オブジェクトなので、==による参照比較はfalseになります。', '出力文の文字列だけが間違っている': 'System.out.printlnの書き方自体は正しく、問題はif文の比較方法にあります。', 'データの件数が不足している': 'codeには"SPB"という値が正しく入っており、件数の問題ではなく比較方法が原因です。' }, fixOptionExplanations: { 'code.equals("SPB") に修正する': '正解。equalsは文字列の内容を比較するため、別オブジェクトでも内容が同じなら一致判定できます。', '条件を削除する': '条件を削除すると都市コードに関わらず常にSaint Petersburgと表示されてしまい、判定の意味がなくなります。', 'すべての値を同じ文字列にする': '都市コードのデータを無視して固定文字列にすると、実際のコードに基づく判定ができなくなります。' }, impactOptionExplanations: { '別オブジェクトの String でも内容が同じなら一致判定できる': '正解。equalsを使うことで、newで作られた別オブジェクトでも文字列の内容が同じなら正しく一致と判定できます。', '常に例外を出して停止する': 'この修正は比較方法を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '都市コードのデータはそのまま使われ続けます。修正は比較方法だけです。' } },
  { id: 'ru_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero archive code formatting', titleJa: '先頭ゼロ付きアーカイブコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.stationCode, summaryJa: 'アーカイブコード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプルアーカイブコード 0005 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 5;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0005"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0005";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。', causeOptionExplanations: { '先頭ゼロを含む識別コードを数値として保存している': '正解。5をintとして保存すると先頭ゼロの情報が失われ、本来の表記0005になりません。', '出力文の文字列だけが間違っている': 'System.out.println(sample)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'sampleには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { 'String sample = "0005"; として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した4桁表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際のアーカイブコードデータを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを失わず、表示形式をそのまま保てる': '正解。文字列として保存すれば、先頭ゼロを含む4桁表記をそのまま失わずに保持できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': 'アーカイブコードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'ru_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.museumVisitor, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。', causeOptionExplanations: { 'int 同士の割り算なので小数部が切り捨てられる': '正解。totalとdaysはどちらもintなので17/2は整数除算で8になり、小数部の.5が切り捨てられてからdoubleに代入されます。', '出力文の文字列だけが間違っている': 'System.out.println(average)自体は正しく書けており、問題は割り算の計算方法にあります。', 'データの件数が不足している': 'totalとdaysにはそれぞれ正しい値が入っており、件数の問題ではなく整数除算が原因です。' }, fixOptionExplanations: { 'total または days を double に変換してから割る': '正解。どちらか一方を(double)でキャストしてから割ることで、小数を含む正しい除算になります。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '来館者数データを無視して固定文字列にすると、実際の平均値が計算・表示できなくなります。' }, impactOptionExplanations: { '8.5 のような小数平均を正しく表せる': '正解。キャストにより小数を含む除算になるため、17÷2=8.5のような正しい平均が表示されます。', '常に例外を出して停止する': 'このキャストによる修正は計算結果を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '来館者数データはそのまま使われ続けます。修正は割り算の計算方法だけです。' } },
];

const javaFinalDebug = [
  { id: 'final_debug_RU_java_01', languageId: 'java', world: 'debug', title: 'Bolgar Historical and Archaeological Complex', titleJa: 'ボルガル歴史考古遺跡群', category: 'world-heritage', objective: 'collections', source: SRC.bolgar, summaryJa: 'ボルガル歴史考古遺跡群は世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Bolgar", "900");\n    String ageText = ages.get("Other Site");\n    int age = Integer.parseInt(ageText);\n    System.out.println(age);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Bolgar", "900");\n    String ageText = ages.get("Bolgar");\n    try {\n      if (ageText != null) System.out.println(Integer.parseInt(ageText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。', causeOptionExplanations: { '存在しないキーを get して null を parseInt に渡している': '正解。"Other Site"はagesに登録されておらずgetはnullを返すため、Integer.parseInt(null)でNullPointerExceptionになります。', '出力文の文字列だけが間違っている': 'System.out.println(age)自体は正しく書けており、問題は登録されていないキーを取得・変換している部分です。', 'データの件数が不足している': 'agesには"Bolgar"が正しく登録されており、件数不足ではなく検索するキーが間違っていることが原因です。' }, fixOptionExplanations: { 'get した値が null でないか確認し、try/catch で変換失敗にも備える': '正解。nullチェックとtry/catchを組み合わせることで、欠損キーや不正な数値文字列の両方に安全に対応できます。', '条件を削除する': 'このコードには元々条件分岐がなく、削除すべき条件もありません。むしろnullチェックを追加する必要があります。', 'すべての値を同じ文字列にする': '年代データを無視して固定文字列にすると、実際の年代の値が表示・判定できなくなります。' }, impactOptionExplanations: { '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる': '正解。nullチェックとtry/catchにより、キーが無い場合も数値変換に失敗する場合も、処理が落ちずに分岐できます。', '常に例外を出して停止する': '修正後はnullチェックとtry/catchにより、例外で停止せず安全に処理を続けられるようになります。', '題材データを使わなくなる': '"Bolgar"の年代データはそのまま使われ続けます。修正は欠損・不正値への対応方法だけです。' } },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const RUSSIA_FACTS = allSpecs.map(makeFact);
export const RUSSIA_ASSIGNMENTS = allSpecs.map(assignment);

export const RU_PY_DECODE = pyDecode.map(decode);
export const RU_PY_EXECUTE = pyExecute.map(execute);
export const RU_PY_DEBUG = pyDebug.map(debug);
export const RU_JS_DECODE = jsDecode.map(decode);
export const RU_JS_EXECUTE = jsExecute.map(execute);
export const RU_JS_DEBUG = jsDebug.map(debug);
export const RU_JAVA_DECODE = javaDecode.map(decode);
export const RU_JAVA_EXECUTE = javaExecute.map(execute);
export const RU_JAVA_DEBUG = javaDebug.map(debug);

export const RUSSIA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: RUSSIA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: RUSSIA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: RUSSIA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: RUSSIA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: RUSSIA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: RUSSIA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: RUSSIA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: RUSSIA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: RUSSIA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
