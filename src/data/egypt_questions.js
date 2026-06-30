const SRC = {
  cairo: 'https://www.britannica.com/place/Cairo',
  revolution: 'https://www.britannica.com/event/Egyptian-Revolution-of-1952',
  nile: 'https://www.britannica.com/place/Nile-River',
  governorates: 'https://www.britannica.com/place/Egypt',
  giza: 'https://whc.unesco.org/en/list/86',
  memphis: 'https://whc.unesco.org/en/list/86',
  thebes: 'https://whc.unesco.org/en/list/87',
  nubian: 'https://whc.unesco.org/en/list/88',
  alexandria: 'https://www.britannica.com/place/Alexandria-Egypt',
  aswan: 'https://www.britannica.com/topic/Aswan-High-Dam',
  egyptianMuseum: 'https://www.britannica.com/topic/Egyptian-Museum',
  sinai: 'https://www.britannica.com/place/Sinai-Peninsula',
  islamicCairo: 'https://whc.unesco.org/en/list/89',
  transport: 'https://www.britannica.com/place/Egypt/Transportation',
  pound: 'https://www.britannica.com/topic/Egyptian-pound',
  postal: 'https://www.britannica.com/place/Egypt',
  wadiAlHitan: 'https://whc.unesco.org/en/list/1186',
  suez: 'https://www.britannica.com/topic/Suez-Canal',
  flag: 'https://www.britannica.com/topic/flag-of-Egypt',
  nileDelta: 'https://www.britannica.com/place/Nile-Delta',
  khanElKhalili: 'https://www.britannica.com/topic/Khan-al-Khalili',
  saintCatherine: 'https://whc.unesco.org/en/list/954',
  abuMena: 'https://whc.unesco.org/en/list/90',
  libraries: 'https://www.bibalex.org/en/Default',
  rosetta: 'https://www.britannica.com/topic/Rosetta-Stone',
  redSea: 'https://www.britannica.com/place/Red-Sea',
  cairoMetro: 'https://www.britannica.com/place/Cairo',
  philae: 'https://whc.unesco.org/en/list/88',
  oases: 'https://www.britannica.com/place/Siwa',
  nileValley: 'https://www.britannica.com/place/Nile-River',
  phone: 'https://www.britannica.com/place/Egypt',
  giza2: 'https://www.britannica.com/place/Giza',
  citadelQaitbay: 'https://www.britannica.com/place/Alexandria-Egypt',
  parliament: 'https://www.britannica.com/place/Egypt/Government-and-society',
  edfu: 'https://www.britannica.com/place/Edfu',
  zewail: 'https://www.nobelprize.org/prizes/chemistry/1999/zewail/biographical/',
  timezone: 'https://www.timeanddate.com/time/zones/eet',
  alAzhar: 'https://www.britannica.com/topic/Al-Azhar-University',
  language: 'https://www.britannica.com/place/Egypt/Languages',
  siwa: 'https://www.britannica.com/place/Siwa',
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
  return `eg:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

// 各題材の調査済み詳細（JPの country_facts.js と同水準の背景・歴史・エピソード）。
// id をキーに makeFact() がここから backgroundJa/historyJa/episodeJa/keyPointsJa を補う。
const FACT_DETAILS = {
  eg_py_d01: {
    backgroundJa: 'カイロはエジプトの首都で、ナイル川東岸に広がる大都市圏であり、政治・経済・文化の中心です。',
    historyJa: '969年にファーティマ朝の将軍ジャウハルがフスタートの北に新都を建設し、カリフ・ムイッズによってカイロ（「征服者」の意）と名付けられました。',
    episodeJa: '14世紀には人口約50万人に達する当時世界最大級の都市の一つで、現在の大カイロ圏は2,200万人を超える規模に成長しています。',
    keyPointsJa: ['969年にファーティマ朝が建設', '「カイロ」は「征服者」を意味する', '「千の尖塔の都市」と呼ばれる', '現在の大カイロ圏は人口2,200万人超'],
  },
  eg_py_d02: {
    backgroundJa: '現代エジプト共和国は、1952年の革命を経て王政が廃止された後に成立した政体です。',
    historyJa: '1952年7月23日に自由将校団（ナギーブ、ナセルら）が国王ファルークを打倒し、1953年6月18日に正式に共和国が宣言されました。',
    episodeJa: 'ファルーク国王は生後6か月の息子フアード2世に譲位しましたが、その治世は実質的に1年足らずで終わり、1953年に王政そのものが廃止されました。',
    keyPointsJa: ['1952年7月23日に自由将校団が決起', '初代大統領はムハンマド・ナギーブ', '1953年6月18日に共和国を宣言', 'ナセルは1956年に大統領となった'],
  },
  eg_py_d03: {
    backgroundJa: 'ナイル川はエジプトを南北に貫いて流れる、世界最長級の河川であり、エジプトにとって唯一の主要な水源です。',
    historyJa: 'スーダンのハルツームで白ナイル（源流はタンザニアのヴィクトリア湖）と青ナイル（源流はエチオピアのタナ湖）が合流し、地中海まで流れ込みます。',
    episodeJa: '全長は約7,088kmに及び、世界最長の河川とされ、かつての毎年の増水はナイル流域に肥沃な泥を運び古代から農業を支えてきました。',
    keyPointsJa: ['全長約7,088kmで世界最長級', '白ナイルと青ナイルがハルツームで合流', '地中海に注ぐ', 'エジプトの人口の大半がナイル沿いに集中'],
  },
  eg_py_d04: {
    backgroundJa: 'エジプトは27の県（ムハーファザ）に分かれ、各県には大統領が任命する知事が置かれています。',
    historyJa: '2009年にルクソール県が分離独立し、現在の27県体制となりました。',
    episodeJa: '県はさらに郡（マルカズ）や市・村に細分化され、知事は首相を通じて中央政府に報告する仕組みになっています。',
    keyPointsJa: ['現在は27の県に分かれる', '2009年にルクソール県が独立', '知事は大統領が任命', '県の下に郡・市・村がある'],
  },
  eg_py_d05: {
    backgroundJa: 'ギザのピラミッド群はカイロ近郊にある古代エジプトの王墓群で、クフ王の大ピラミッドを中心とする世界遺産です。',
    historyJa: '大ピラミッドは古王国時代第4王朝のクフ王のために紀元前2600年頃、約26年かけて建設されたとされています。',
    episodeJa: '完成時の高さは約146.6mで、約230万個・総重量約600万トンの石材が使われ、3,700年以上にわたり世界最高の建造物でした。',
    keyPointsJa: ['建設は紀元前2600年頃', '完成時の高さ約146.6m', '3,700年以上世界最高の建造物だった', '古代世界の七不思議で唯一現存'],
  },
  final_decode_EG_python_01: {
    backgroundJa: 'メンフィスとその墓地遺跡は、ギザからダハシュールに至るピラミッド地帯を含む古代エジプトの首都の遺跡群です。',
    historyJa: '伝承によれば初代王メネスが紀元前3100年頃にメンフィスを建設し、サッカラ（第1王朝）からダハシュール・ギザ（第4王朝）へと墓地が発展しました。',
    episodeJa: 'この地域には38基を超えるピラミッドが含まれ、唯一現存する古代の七不思議である大ピラミッドもこの遺跡群の一部です。',
    keyPointsJa: ['メンフィスは3千年以上首都として機能', '38基を超えるピラミッドを含む', 'マスタバ墳から真正ピラミッドへの変遷が分かる', '1979年にユネスコ世界遺産登録'],
  },
  final_decode_EG_python_02: {
    backgroundJa: '古代都市テーベ（現ルクソール）とその墓地遺跡は、中王国・新王国時代のエジプトの首都として栄えた地域です。',
    historyJa: '主要な遺構は新王国時代（紀元前1550〜1069年頃）に建てられ、1979年にユネスコ世界遺産に登録されました。',
    episodeJa: '王家の谷にあるツタンカーメンの墓（KV62）は1922年に未盗掘のまま発見され、20世紀最大の考古学的発見の一つとされています。',
    keyPointsJa: ['新王国時代の遺構が中心', '東岸にカルナック神殿とルクソール神殿', '西岸に王家の谷・王妃の谷', 'ツタンカーメンの墓は1922年発見'],
  },
  final_decode_EG_python_03: {
    backgroundJa: 'ヌビア遺跡群は、アスワン・ハイ・ダムの建設で水没の危機にあったアブ・シンベルとフィラエの神殿を含む世界遺産です。',
    historyJa: 'エジプトは1959年にユネスコへ救済を要請し、約20年に及ぶ移築事業は1980年3月に完了が発表されました。',
    episodeJa: 'アブ・シンベル大神殿は1968年に石材を切り出して高台へ移設され、費用は4,170万ドル、48か国の国際協力で資金が集められました。',
    keyPointsJa: ['1959年にユネスコへ救済要請', 'アブ・シンベルは1968年に高台へ移設', '費用4,170万ドル、48か国が協力', '「史上最大の考古学的救済作業」と評される'],
  },
  eg_py_e01: {
    backgroundJa: 'アレクサンドリアはエジプト北部の地中海沿岸にある主要港湾都市です。',
    historyJa: '紀元前331年（諸説あり332年）にアレクサンドロス大王が小さな港町ラコティスの地に建設しました。',
    episodeJa: 'プトレマイオス2世の時代に建てられたファロス島の大灯台は高さ100m以上で古代世界の七不思議の一つに数えられ、約1,200m以上の堤防ヘプタスタディオンで本土と結ばれていました。',
    keyPointsJa: ['紀元前331年にアレクサンドロス大王が建設', 'プトレマイオス朝時代の知の都', '古代の大灯台は七不思議の一つ', '伝説の図書館（大図書館）の所在地'],
  },
  eg_py_e02: {
    backgroundJa: 'アスワン・ハイ・ダムはナイル川上流のアスワン近郊にある大規模なダムです。',
    historyJa: '1960年に着工し1970年に完成、1971年にサダト大統領のもとで正式に開業しました。',
    episodeJa: 'ダムによって誕生した人造湖ナセル湖の総容量は1,690億立方メートルに及び、12基の発電機で合計2.1ギガワットの電力を生み出します。',
    keyPointsJa: ['1960〜1970年に建設', '1971年に正式開業', 'ナセル湖は世界最大級の人造湖', '洪水制御・灌漑・発電を目的とする'],
  },
  eg_py_e03: {
    backgroundJa: 'エジプト考古学博物館はカイロのタハリール広場にあり、古代エジプト文物の世界最大級の収蔵を誇ります。',
    historyJa: '前身は1858年にフランス人考古学者オーギュスト・マリエットがブーラークに設立し、現在のタハリール広場の建物は1902年に開館しました。',
    episodeJa: '1922年のハワード・カーターによるツタンカーメン王墓発見後、黄金のマスクなどの副葬品が収蔵され、所蔵品は12万点を超えるとされます。',
    keyPointsJa: ['前身は1858年マリエットが設立', '現在の建物は1902年開館', '所蔵品は12万点超', 'ツタンカーメン副葬品の多くは新博物館へ移管中'],
  },
  eg_py_e04: {
    backgroundJa: 'シナイ半島はエジプト北東部にある三角形の半島で、エジプト唯一のアジア側領土です。',
    historyJa: '地中海と紅海に挟まれ、アフリカとアジアを結ぶ陸橋として国土の約6％（約6万km²）を占めます。',
    episodeJa: '半島南部にあるシナイ山（標高2,285m）は『出エジプト記』でモーセが十戒を授かったとされる山として知られています。',
    keyPointsJa: ['国土の約6％・約6万km²', 'アフリカとアジアを結ぶ陸橋', 'シナイ山の標高は2,285m', 'スエズ運河を含むスエズ地峡でアフリカと接続'],
  },
  final_execute_EG_python_01: {
    backgroundJa: '歴史的カイロ（イスラーム地区カイロ）は中世イスラーム期の建築が集まるカイロの旧市街で、世界遺産に登録されています。',
    historyJa: 'アズハル・モスクは970年に建設が始まり972年に完成、スルタン・ハサン・モスクは1356〜1361年頃にマムルーク朝のもとで建てられました。',
    episodeJa: 'アズハル・モスクは970年の創建以来、現在まで継続してイスラーム学の中心として機能している点で世界的にも珍しい存在です。',
    keyPointsJa: ['アズハル・モスクは970〜972年建設', 'スルタン・ハサン・モスクは1356〜1361年建設', '14世紀のマムルーク朝期が黄金期', '1979年にユネスコ世界遺産登録'],
  },
  final_execute_EG_python_02: {
    backgroundJa: 'エジプトの交通網は古代からのナイル川水運に加え、鉄道・地下鉄・スエズ運河・砂漠道路など多様な手段で構成されています。',
    historyJa: '1854年にアレクサンドリア〜カフル・エル・ザイヤート間で、アフリカ・中東初の鉄道が開業しました。',
    episodeJa: '1858年にはカイロ〜スエズ間の鉄道も完成し、これはスエズ運河の開通（1869年）より11年も早く地中海と紅海を結ぶ陸上交通を実現していました。',
    keyPointsJa: ['1854年にアフリカ・中東初の鉄道が開業', '1858年にカイロ〜スエズ間も完成', 'スエズ運河開通（1869年）より11年早い', 'ナイル川水運も現在も重要な交通手段'],
  },
  eg_py_b01: {
    backgroundJa: 'エジプトの通貨はエジプトポンド（ギネイ）で、100ピアストル（キルシュ）に分かれます。',
    historyJa: '1834年にムハンマド・アリー・パシャの財政改革のもとでエジプトポンドが導入されました。',
    episodeJa: '1916年には1ピアストルが10ミリームに細分化され、それ以前のオスマン帝国由来のピアストル制度から段階的に現在の体系へ整理されてきました。',
    keyPointsJa: ['1834年にムハンマド・アリーが導入', '1ポンド＝100ピアストル', '1916年にミリーム単位を導入', 'オスマン帝国のクルシュ制度に由来'],
  },
  eg_py_b02: {
    backgroundJa: 'エジプトの郵便番号制度はエジプト郵政公社（1865年設立）によって管理され、地域コードとして数字が使われます。',
    historyJa: 'エジプト郵政（Egypt Post）は1865年10月29日に設立され、近年は7桁の郵便番号体系も導入されています。',
    episodeJa: 'カイロの代表的な郵便番号11511のように先頭の数字が地域・県を示す仕組みになっており、識別目的の番号は先頭ゼロを保つために文字列として扱う必要があります。',
    keyPointsJa: ['エジプト郵政は1865年設立', '郵便番号は地域・県を示す数字から始まる', '先頭ゼロを保つため文字列として扱うべき', '近年7桁の体系も使われている'],
  },
  eg_py_b03: {
    backgroundJa: 'エジプトの自動車ナンバープレートは、カイロ・ギザ・アレクサンドリアなど登録された県名を表示する仕組みです。',
    historyJa: '現在のプレートはアラビア文字と英語表記を併用し、県ごとに異なる桁数・文字構成が使われています。',
    episodeJa: '実際のプレートでは「CAIRO」「GIZA」「ALEXANDRIA」のように県名が英語でそのまま表示され、航空会社のような3文字略号の公式制度は存在しません。',
    keyPointsJa: ['プレートはアラビア文字と英語を併用', '県名はフルスペルで表示される', '3文字の公式略号制度はない', '県ごとにプレートの桁数構成が異なる'],
  },
  final_debug_EG_python_01: {
    backgroundJa: 'ワディ・アル・ヒタン（クジラの谷）は、西部砂漠にある古代クジラの化石が見つかる自然世界遺産です。',
    historyJa: '最初のクジラ化石は1902〜1903年の冬に発見され、2005年7月にユネスコ世界遺産に登録されました。',
    episodeJa: 'ここで見つかる化石群は、クジラが陸生動物から海洋生物へ進化した過程を示す重要な証拠とされ、進化論の「ミッシングリンク」を裏付ける数百の化石が保存されています。',
    keyPointsJa: ['最初の化石発見は1902〜1903年', '2005年にユネスコ世界遺産登録', '西部砂漠（ファイユーム）に位置', 'クジラの陸→海への進化を示す証拠'],
  },
  eg_js_d01: {
    backgroundJa: 'スエズ運河は地中海と紅海を結ぶ人工の海面水路で、エジプトの重要な国際交通インフラです。',
    historyJa: '1854年にサイード・パシャがフェルディナン・ド・レセップスに利権を与え、1859年に着工、1869年11月17日に開通しました。',
    episodeJa: '全長約193kmの運河の開通により、ヨーロッパとアジアを結ぶ航海は喜望峰回りに比べて大幅に短縮されました。',
    keyPointsJa: ['1859年着工、1869年開通', '全長約193km', 'フェルディナン・ド・レセップスが建設主導', '喜望峰回りより大幅に航路を短縮'],
  },
  eg_js_d02: {
    backgroundJa: 'ルクソール神殿はルクソール（古代テーベ）にあるアモン神を中心に祀る大規模な神殿です。',
    historyJa: '中心部はアメンホテプ3世により紀元前1390年頃に建設が始まり、ラムセス2世が後にペリスタイル中庭や塔門を増築しました。',
    episodeJa: '神殿の入口にはオベリスクが一対あったが、片方は現在フランスのパリ、コンコルド広場に移されています。',
    keyPointsJa: ['建設はアメンホテプ3世（紀元前1390年頃）', 'ラムセス2世が大規模に増築', 'オベリスクの片方はパリのコンコルド広場に移設', 'カルナック神殿とスフィンクス参道で結ばれる'],
  },
  eg_js_d03: {
    backgroundJa: 'エジプト国旗は赤・白・黒の横三色旗で、中央に黄金の「サラディンの鷲」が描かれています。',
    historyJa: '配色は1952年の革命に由来し、現在のサラディンの鷲を配した形は1984年10月9日に正式採用されました。',
    episodeJa: '鷲は12世紀にエジプト・シリア・イエメンなどを統一した英雄サラディンにちなんでおり、赤は独立闘争の血、白は清廉、黒は脱した抑圧を象徴します。',
    keyPointsJa: ['現行デザインは1984年採用', '鷲はサラディンにちなむ', '赤＝血、白＝清廉、黒＝抑圧の終わり', 'パン・アラブカラーの一部'],
  },
  eg_js_d04: {
    backgroundJa: 'ナイルデルタは地中海に面した扇状の三角州地帯で、エジプトでも特に人口密度が高い農業地帯です。',
    historyJa: '地中海沿岸約240km、南北約160kmに広がり、約7,000万人が住むと推定されています。',
    episodeJa: 'タンタ、マンスーラ、ザガジグといった都市がデルタの中心地として発展し、ガルビーヤ県やダカハリーヤ県などの県庁所在地になっています。',
    keyPointsJa: ['地中海沿岸約240kmに広がる', '約7,000万人が住む人口密集地帯', 'タンタやマンスーラが代表的な都市', '世界最大級の河川デルタの一つ'],
  },
  eg_js_d05: {
    backgroundJa: 'ハーン・ハリーリはカイロのイスラーム地区にある歴史的な市場街区です。',
    historyJa: 'マムルーク朝スルタン・バルクークのもとで厩舎長を務めたジャハルカス・アル・ハリーリにより1382年に創設されました。',
    episodeJa: '創設から640年以上を経た現在も営業を続け、スルタン・バルクークやカイトベイによって門や隊商宿が増築され、現在の姿の基礎が築かれました。',
    keyPointsJa: ['1382年にジャハルカス・アル・ハリーリが創設', '640年以上の歴史を持つ', 'バルクークやカイトベイが増築', '歴史的カイロ世界遺産の一部'],
  },
  final_decode_EG_javascript_01: {
    backgroundJa: 'セント・カトリーナ地域はシナイ半島南部にある世界遺産で、シナイ山とその麓の修道院を含みます。',
    historyJa: 'ビザンツ皇帝ユスティニアヌス1世の命により527〜565年頃に聖カトリーナ修道院が建設され、2002年にユネスコ世界遺産に登録されました。',
    episodeJa: '修道院の図書館には4世紀から19世紀の写本4,559点が所蔵され、ギリシャ語写本の質と量はバチカンに次ぐとされています。',
    keyPointsJa: ['修道院は6世紀（527〜565年頃）建設', '現存する世界最古の継続使用修道院', '写本4,559点を所蔵', '2002年にユネスコ世界遺産登録'],
  },
  final_decode_EG_javascript_02: {
    backgroundJa: 'アブ・メナはアレクサンドリア近郊にある初期キリスト教の巡礼都市遺跡で、殉教者聖メナスの墓を中心に発展しました。',
    historyJa: '聖メナスは紀元296年頃に没し、巡礼地としての複合施設は主に5〜7世紀に発展、1979年にユネスコ世界遺産に登録されました。',
    episodeJa: '地下水位の上昇による建物崩壊のため2001年に危機遺産リストに加えられましたが、保全活動が進み2025年にそのリストから解除されました。',
    keyPointsJa: ['主要施設は5〜7世紀に発展', '1979年にユネスコ世界遺産登録', '2001年に危機遺産リストへ', '2025年に危機遺産リストから解除'],
  },
  final_decode_EG_javascript_03: {
    backgroundJa: 'ビブリオテカ・アレクサンドリーナは、古代の図書館にちなんでアレクサンドリアに建てられた現代の図書館・文化施設です。',
    historyJa: '1989年の国際設計コンペでノルウェーのスノヘッタ案が選ばれ、2002年10月17日に開館しました。',
    episodeJa: '11階建ての建物は最大400万冊、圧縮書庫を使えば800万冊を収蔵可能で、プラネタリウムや複数の付属博物館も備えています。',
    keyPointsJa: ['1989年に国際設計コンペで選定', '2002年10月17日に開館', '最大800万冊を収蔵可能', '古代アレクサンドリア図書館へのオマージュ'],
  },
  eg_js_e01: {
    backgroundJa: 'ロゼッタストーンはエジプトのロゼッタ（ラシード）付近で発見された石碑で、ヒエログリフ解読の鍵となりました。',
    historyJa: '1799年7月15日にナポレオンのエジプト遠征中、フランス軍人ピエール・ブシャールにより発見されました。',
    episodeJa: '1822年9月27日、ジャン＝フランソワ・シャンポリオンがパリの碑文・文芸アカデミーでヒエログリフを完全に解読したと発表し、現在は大英博物館に所蔵されています。',
    keyPointsJa: ['1799年にブシャールが発見', 'ヒエログリフ・デモティック・ギリシャ語の3言語で刻まれる', '1822年にシャンポリオンが解読を発表', '現在は大英博物館に所蔵'],
  },
  eg_js_e02: {
    backgroundJa: '紅海沿岸はエジプト東部の海岸地域で、ダイビングやリゾート観光で知られています。',
    historyJa: 'フルガダやシャルム・エル・シェイクなどの都市が代表的なリゾートとして発展しました。',
    episodeJa: '紅海全体では1,000種を超える魚類と200種以上のサンゴが確認されており、視界が30m以上に達することも珍しくありません。',
    keyPointsJa: ['フルガダ・シャルム・エル・シェイクが代表的', '1,000種超の魚類が生息', '200種以上のサンゴが確認されている', 'ラス・ムハンマド国立公園などが人気'],
  },
  eg_js_e03: {
    backgroundJa: 'カイロメトロはカイロ都市圏の地下鉄で、アフリカ・中東で最初に開業した本格的な地下鉄路線です。',
    historyJa: '1982年に建設が始まり、1987年9月27日に1号線の一部（ヘルワン〜ラムセス広場）が開業しました。',
    episodeJa: '構想自体は1930年代に技師サイイド・アブデル・ワーヘドが提案していたもので、2024年時点で3路線・84駅・全長106.8kmに拡大しています。',
    keyPointsJa: ['1987年9月27日に一部開業', 'アフリカ・中東初の本格地下鉄', '構想は1930年代から存在', '2024年時点で3路線・84駅'],
  },
  eg_js_e04: {
    backgroundJa: 'フィラエ神殿群はもともとアスワン近郊のフィラエ島にあった、女神イシスを祀る神殿複合体です。',
    historyJa: '主にプトレマイオス朝・ローマ時代に建設され、アスワン・ハイ・ダムの建設に伴い水没の危機にさらされました。',
    episodeJa: 'ユネスコの支援で1977〜1980年に約4万個のブロックに分解され、約500m離れたアギルキア島へ移築・再建されました。',
    keyPointsJa: ['プトレマイオス朝・ローマ時代に建設', 'アスワン・ハイ・ダムで水没の危機', '1977〜1980年にアギルキア島へ移築', 'ヌビア遺跡群として世界遺産登録'],
  },
  final_execute_EG_javascript_01: {
    backgroundJa: 'エジプトの西部砂漠には、シワ、バハリヤ、ファラフラ、ダクラ、ハルガという5つの主要なオアシスがあります。',
    historyJa: 'バハリヤには中王国時代（紀元前2050〜1710年頃）から利用された400以上の鉱泉・硫黄泉があり、ダクラには10世紀の街カスル・アル・ダクラが残ります。',
    episodeJa: 'シワは大砂海のすぐ近くに位置するエジプトで最も孤立したオアシスとされ、ダクラ周辺には約500の温泉が確認されています。',
    keyPointsJa: ['西部砂漠の5大オアシス', 'バハリヤには400以上の鉱泉・硫黄泉', 'シワは最も孤立したオアシス', 'ダクラには10世紀の街カスル・アル・ダクラ'],
  },
  final_execute_EG_javascript_02: {
    backgroundJa: 'ナイル渓谷にはカイロからアスワンに至るまでルクソールやエドフなど多数の古代遺跡が連なります。',
    historyJa: 'エドフ神殿は紀元前237年にプトレマイオス3世のもとで着工し、紀元前57年にプトレマイオス12世の時代に完成しました（180年に及ぶ工事）。',
    episodeJa: '砂に埋もれていたため彫刻や碑文の保存状態が非常に良く、現在エジプトで最も保存状態の良い神殿の一つとされています。',
    keyPointsJa: ['ナイル渓谷沿いに多数の遺跡が連なる', 'エドフ神殿は紀元前237〜57年に建設', '砂に埋もれ保存状態が良好', 'ホルス神とセト神の神話の舞台とされる'],
  },
  eg_js_b01: {
    backgroundJa: 'エジプトの携帯電話番号は国内表記で11桁で構成され、010・011・012・015のいずれかで始まります。',
    historyJa: '1998年にモビニル（現オランジュ）、1999年にボーダフォンが参入し、2011年の改革で現在の11桁形式に統一されました。',
    episodeJa: '現在は010がボーダフォン、011がエティサラート（e&）、012がオランジュ、015がWE（テレコム・エジプト）に割り当てられています。',
    keyPointsJa: ['国内表記は11桁', '010/011/012/015のいずれかで始まる', '2011年の改革で現行形式に統一', '4社体制（ボーダフォン・エティサラート・オランジュ・WE）'],
  },
  eg_js_b02: {
    backgroundJa: 'カイロとギザはナイル川を挟んで隣接するエジプトの主要都市圏で、ともに大カイロ圏を構成します。',
    historyJa: 'カイロは969年にファーティマ朝が建設し、ギザは古王国時代からピラミッド地帯として知られています。',
    episodeJa: 'カイロとギザは行政上は別の県ですが、都市機能としては一体化しており、大カイロ圏全体で人口2,000万人を超える規模になっています。',
    keyPointsJa: ['カイロは969年建設', 'ギザは古王国時代のピラミッド地帯', '行政上は別の県だが都市機能は一体', '大カイロ圏の人口は2,000万人超'],
  },
  eg_js_b03: {
    backgroundJa: 'エジプト考古学博物館はカイロのタハリール広場にあり、世界最大級の古代エジプト文物コレクションを持ちます。',
    historyJa: '1858年にオーギュスト・マリエットがブーラークに設立した博物館を前身とし、1902年に現在のタハリール広場の建物が開館しました。',
    episodeJa: '所蔵品は12万点を超えるとされ、近年はギザの新博物館（グランド・エジプシャン・ミュージアム）への文物の移管も進められています。',
    keyPointsJa: ['前身は1858年マリエット設立', '現在の建物は1902年開館', '所蔵品12万点超', '一部はギザの新博物館へ移管中'],
  },
  final_debug_EG_javascript_01: {
    backgroundJa: 'カイトベイ要塞はアレクサンドリアにある15世紀の要塞で、古代の「アレクサンドリアの大灯台」があった場所に建てられています。',
    historyJa: 'マムルーク朝スルタン・カイトベイのもとで1477〜1479年に建設され、1303年と1323年の地震で崩壊した灯台の石材が再利用されました。',
    episodeJa: '1453年のコンスタンティノープル陥落によるオスマン帝国の海上進出に対する防衛策として築かれ、建設には10万ディナールを超える費用が投じられたとされています。',
    keyPointsJa: ['1477〜1479年に建設', '古代の大灯台跡地に建設', '崩壊した灯台の石材を再利用', 'オスマン帝国への防衛策として築造'],
  },
  eg_java_d01: {
    backgroundJa: 'エジプト議会（代表院）はカイロを拠点とするエジプトの国家立法機関です。',
    historyJa: '1866年にイスマーイール・パシャが諮問代表評議会を設立したのがエジプト最初の代議機関で、現在のカイロの旧議会建物もこの時期に建てられました。',
    episodeJa: 'エジプトは135年以上の議会史の中で32の議会を持ち、2024年4月2日には新行政首都の新議事堂が開所しました。',
    keyPointsJa: ['1866年に最初の代議機関を設立', '135年以上で32の議会を経験', '2012年憲法以降「代表院」に改称', '2024年に新行政首都の議事堂が開所'],
  },
  eg_java_d02: {
    backgroundJa: '1952年革命は自由将校団による無血の軍事クーデターで、エジプトの王政を終わらせました。',
    historyJa: '1952年7月23日に決起し、国王ファルークは1952年7月26日に退位、1953年6月に王政そのものが廃止されました。',
    episodeJa: 'ファルークは生後6か月の息子フアード2世に譲位しましたが、その治世はわずか1年足らずで終わり、エジプトは正式に共和国となりました。',
    keyPointsJa: ['1952年7月23日に決起', 'ナギーブとナセルが指導', 'ファルークは1952年7月26日に退位', '1953年6月に王政廃止・共和国宣言'],
  },
  eg_java_d03: {
    backgroundJa: 'スエズ運河の開通は、地中海と紅海を結ぶ19世紀最大級の工学的・外交的イベントでした。',
    historyJa: '1869年11月17日に正式に開通し、その前夜の11月15日からポートサイドで祝賀行事が始まりました。',
    episodeJa: '式典には約6,000人の来賓が参加し、フランス皇后ウジェニーを乗せた帝室ヨット「レーグル号」を先頭に77隻の船団（うち50隻が軍艦）が運河を通過しました。',
    keyPointsJa: ['1869年11月17日に開通', '式典には約6,000人が参加', '77隻の船団が運河を通過', '祝賀行事は数週間続いた'],
  },
  eg_java_d04: {
    backgroundJa: 'エジプトでは河川・鉄道・運河・道路など複数の交通手段が国土を結んでいます。',
    historyJa: '1854年にアレクサンドリア〜カフル・エル・ザイヤート間でアフリカ・中東初の鉄道が開業し、1858年にはカイロ〜スエズ間も完成しました。',
    episodeJa: 'これらの鉄道はスエズ運河の開通（1869年）より十数年早く、地中海と紅海を結ぶ陸上交通として機能していました。',
    keyPointsJa: ['1854年にアフリカ・中東初の鉄道開業', '1858年にカイロ〜スエズ間も完成', 'スエズ運河開通より十数年早い', 'ナイル水運も現在も重要な手段'],
  },
  eg_java_d05: {
    backgroundJa: 'エジプトはナイルデルタ、ナイル渓谷、西部砂漠、シナイ、紅海沿岸など複数の地域に分かれます。',
    historyJa: 'ナイル渓谷とデルタは国土の約5％を占めるにすぎませんが、人口の約99％がこの地域に集中しています。',
    episodeJa: '西部砂漠はリビア砂漠の一部で東部砂漠に比べてワディ（涸れ川）が少なく、シナイ半島は地中海と紅海に挟まれた山岳地帯となっています。',
    keyPointsJa: ['ナイル渓谷とデルタは国土の約5%', 'そこに人口の約99%が集中', '西部砂漠はワディが少ない', 'シナイは山岳が多くアフリカ・アジアの陸橋'],
  },
  final_decode_EG_java_01: {
    backgroundJa: 'ビブリオテカ・アレクサンドリーナはアレクサンドリアにある現代の図書館で、古代のアレクサンドリア図書館へのオマージュとして建てられました。',
    historyJa: '1989年の国際設計コンペでノルウェーのスノヘッタ案が選ばれ、2002年10月17日に開館しました。',
    episodeJa: '11階建ての建物は圧縮書庫を使えば最大800万冊を収蔵可能で、プラネタリウムや複数の付属博物館も併設されています。',
    keyPointsJa: ['1989年に国際設計コンペで選定', '2002年10月17日開館', '最大800万冊を収蔵可能', 'プラネタリウムや博物館も併設'],
  },
  final_decode_EG_java_02: {
    backgroundJa: 'エドフ神殿はエジプト南部のエドフにある、ハヤブサの姿をした神ホルスを祀るプトレマイオス朝時代の神殿です。',
    historyJa: '紀元前237年にプトレマイオス3世のもとで着工し、紀元前57年にプトレマイオス12世の時代に完成、180年に及ぶ大工事でした。',
    episodeJa: '異教信仰が禁止された後に砂に埋もれて保存されたため、現在エジプトで最も保存状態の良い神殿の一つとされています。',
    keyPointsJa: ['紀元前237〜57年に建設（180年）', 'ハヤブサの神ホルスを祀る', '砂に埋もれて保存状態が良好', 'ホルスとセトの神話の舞台'],
  },
  final_decode_EG_java_03: {
    backgroundJa: 'エジプト考古学博物館はカイロのタハリール広場にあり、世界最大級の古代エジプト文物を所蔵します。',
    historyJa: '1858年にオーギュスト・マリエットがブーラークに設立した博物館を前身とし、1902年に現在の建物が開館しました。',
    episodeJa: '所蔵品は12万点を超え、中東で最初の国立博物館として、また今も世界各国からの研究者に利用されています。',
    keyPointsJa: ['前身は1858年マリエット設立', '現在の建物は1902年開館', '中東初の国立博物館', '所蔵品12万点超'],
  },
  eg_java_e01: {
    backgroundJa: 'アハメド・ズウェイルはエジプト出身の化学者で、「フェムト化学の父」と呼ばれています。',
    historyJa: '1946年2月26日にダマンフールで生まれ、1999年にノーベル化学賞を受賞しました。',
    episodeJa: '受賞理由はフェムト秒（千兆分の1秒）単位のレーザー分光法で化学反応の遷移状態を観測した功績で、「世界最速のカメラ」とも称される技術です。',
    keyPointsJa: ['1946年にダマンフールで誕生', '1999年にノーベル化学賞を受賞', 'フェムト秒分光法（フェムト化学）の開拓者', 'アラブ系・アフリカ系で科学分野初のノーベル賞受賞者の一人'],
  },
  eg_java_e02: {
    backgroundJa: 'エジプトは東ヨーロッパ時間（EET、UTC+2）を標準時として使用しています。',
    historyJa: '夏時間は1988年に導入され、2011年の革命後に廃止、2014〜2015年に一時復活した後、2023年3月に議会の決定で再び恒久的に導入されました。',
    episodeJa: '夏時間が実施される際はUTC+3となり、エジプトは近隣のチュニジアやアルジェリアが時刻変更を完全に廃止しているのと対照的に、夏時間制度の変更が比較的多い国です。',
    keyPointsJa: ['標準時はUTC+2（EET）', '夏時間は2023年3月に恒久導入', '夏時間時はUTC+3', '夏時間導入・廃止の変遷が多い国'],
  },
  eg_java_e03: {
    backgroundJa: 'アズハル大学はカイロにある世界最古級の学位授与大学で、イスラーム学の中心地です。',
    historyJa: 'ファーティマ朝の将軍ジャウハルの命により970年に建設が始まり、972年6月24日に完成しました。',
    episodeJa: '名称は予言者ムハンマドの娘ファーティマの尊称「アル・ザフラー（光輝く者）」にちなんでおり、エジプト最古の学位授与大学とされています。',
    keyPointsJa: ['970〜972年に建設', 'エジプト最古の学位授与大学', '名称はファーティマの尊称にちなむ', 'クルアーン学・イスラーム法などを伝統的に教授'],
  },
  eg_java_e04: {
    backgroundJa: 'ヒエログリフは古代エジプトで使われた表音・表意文字を組み合わせた正式な文字体系です。',
    historyJa: '紀元前3200年頃から使われ始め、394年にフィラエ神殿に刻まれたものが最後の使用例とされています。',
    episodeJa: '1822年にジャン＝フランソワ・シャンポリオンがロゼッタストーンを用いてヒエログリフを完全に解読し、これが近代エジプト学の出発点となりました。',
    keyPointsJa: ['紀元前3200年頃から使用開始', '394年のフィラエ神殿の刻文が最後の使用例', '1822年にシャンポリオンが解読', 'ガーディナーの標準記号表は763種を収録'],
  },
  final_execute_EG_java_01: {
    backgroundJa: 'エジプトの27県には県庁所在地が存在し、カイロやルクソールなど人口規模が大きく異なる都市が含まれます。',
    historyJa: 'カイロ県の人口は2023〜2024年時点で約1,020万〜1,040万人とされ、エジプトで最も人口の多い県です。',
    episodeJa: 'ルクソール県（約141万人）やアスワン県（約167万人）は観光地として有名ですが、行政区としての人口規模はカイロに遠く及びません。',
    keyPointsJa: ['カイロ県は約1,000万人超で最多', 'ルクソール県は約141万人', 'アスワン県は約167万人', '人口値は県全体（都市＋農村）の統計'],
  },
  final_execute_EG_java_02: {
    backgroundJa: 'アスワン・ハイ・ダムの完成以降、ナイル川下流の水量や流量を観測する研究機関がエジプトに存在します。',
    historyJa: 'アスワン・ハイ・ダムは1960〜1970年に建設され、ダム下流の流量や土砂量の変化はナイル研究所などによって継続的に観測されています。',
    episodeJa: 'ダム建設後、下流の流量は70％超、土砂量は98％減少したと報告されており、これが下流域の農業に肥料依存をもたらす一因となりました。',
    keyPointsJa: ['ダムは1960〜1970年に建設', 'ダム下流の流量は70%超減少', '土砂量は98%減少と報告', '電力の約40%をこのダムが供給'],
  },
  eg_java_b01: {
    backgroundJa: 'エジプトの都市にはカイロ・ギザ・アレクサンドリア・アスワンなど主要都市が存在し、サンプルとして略号風の表記が使われることがあります。',
    historyJa: 'カイロは969年、アレクサンドリアは紀元前331年、アスワンは古代から要衝として発展してきました。',
    episodeJa: '実際のエジプトの車両ナンバープレートでは「CAIRO」「GIZA」のように県名がそのまま英語表記され、CAI・GIZ・ALXのような3文字の公式略号制度は存在しません。',
    keyPointsJa: ['カイロは969年建設', 'アレクサンドリアは紀元前331年建設', '実際のプレートは県名をフルスペルで表示', '3文字の公式略号制度はない'],
  },
  eg_java_b02: {
    backgroundJa: 'エジプトの遺跡や行政コードのサンプルは、先頭ゼロを含む識別番号の扱いを学ぶ題材として使われます。',
    historyJa: 'エジプト郵政は1865年に設立され、現代の郵便番号は地域を示す数字から始まり先頭ゼロを含む場合があります。',
    episodeJa: '識別コードは計算に使う数値ではなく表記を保持する情報のため、プログラムでは数値型ではなく文字列として保存するのが適切です。',
    keyPointsJa: ['エジプト郵政は1865年設立', '郵便番号は地域コードを含む数字', '識別コードは文字列で保持すべき', '数値型では先頭ゼロが失われる'],
  },
  eg_java_b03: {
    backgroundJa: 'エジプト考古学博物館などの来館者数データは、平均計算の題材として利用できます。',
    historyJa: '博物館の前身は1858年にマリエットが設立し、1902年にタハリール広場の建物が開館しました。',
    episodeJa: '近年開業したグランド・エジプシャン・ミュージアム（2025年11月開業）は開業初週に1日平均約1万9000人、その後も1日1万5000人前後の来館者を集めています。',
    keyPointsJa: ['博物館の建物は1902年開館', '所蔵品は12万点超', '新博物館は2025年11月開業', '新博物館の来館者は1日1万5000人前後'],
  },
  final_debug_EG_java_01: {
    backgroundJa: 'シワ・オアシスはエジプト西部砂漠、リビア国境近くにあるオアシスで、シーウィ語を話すベルベル系住民が暮らしています。',
    historyJa: '紀元前331年、アレクサンドロス大王がエジプト征服後にシワのアモン神オラクルを訪れ、「ゼウス・アモンの息子」と認められたと伝えられています。',
    episodeJa: 'アモン神オラクルはデルフォイの神託に並ぶ名声を持ち、シワはカイロから約560km、リビア国境から約50kmという、エジプトで最も孤立したオアシスの一つです。',
    keyPointsJa: ['紀元前331年にアレクサンドロス大王が訪問', 'アモン神オラクルがデルフォイ並みに有名', 'カイロから約560km、国境から約50km', 'シーウィ語を話すベルベル系住民が暮らす'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、エジプトの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'EG',
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
    countryId: 'EG',
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
  { id: 'eg_py_d01', languageId: 'python', world: 'decode', title: 'Cairo as capital', titleJa: 'カイロ（首都）', category: 'geography-capital', objective: 'strings', source: SRC.cairo, summaryJa: 'カイロはエジプトの首都です。', prompt: 'カイロはエジプトの首都です。下のコードを実行すると Cairo:capital と表示されるよう、空欄を埋めてください。', code: 'city = "Cairo"\nrole = ___BLANK___\nprint(city + ":" + role)', answer: '"capital"', expectedOutput: 'Cairo:capital', hint: 'role に入る文字列を引用符付きで書きます。', explanation: '"capital" を入れると city と連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'eg_py_d02', languageId: 'python', world: 'decode', title: 'Modern Egyptian Republic', titleJa: '現代エジプト共和国の成立', category: 'history-republic', objective: 'integers', source: SRC.revolution, summaryJa: 'エジプトは1953年に共和国となりました。', prompt: '年が1953のとき Republic:1953 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Republic:{year}"\nprint(label)', answer: '1953', expectedOutput: 'Republic:1953', hint: '整数は引用符なしで書きます。', explanation: 'year に1953を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'eg_py_d03', languageId: 'python', world: 'decode', title: 'Nile River in Egypt', titleJa: 'エジプトを流れるナイル川', category: 'geography-nature', objective: 'condition', source: SRC.nile, summaryJa: 'ナイル川はエジプトを流れる主要な河川です。', prompt: '河川名が Nile のとき river と表示されるよう、if の条件を完成させてください。', code: 'river = "Nile"\nif ___BLANK___:\n    print("river")\nelse:\n    print("other")', answer: 'river == "Nile"', expectedOutput: 'river', hint: '文字列が完全に一致するか == で比較します。', explanation: 'river の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'eg_py_d04', languageId: 'python', world: 'decode', title: 'Egyptian governorate labels', titleJa: 'エジプトの県（governorate）', category: 'geography-administration', objective: 'list', source: SRC.governorates, summaryJa: 'エジプトはカイロ、ギザ、アレクサンドリアなど複数の県で構成されています。', prompt: 'リストから Alexandria を取り出して表示するよう、添字を埋めてください。', code: 'governorates = ["Cairo", "Giza", "Alexandria"]\nprint(governorates[___BLANK___])', answer: '2', expectedOutput: 'Alexandria', hint: 'Python のリストは0番目から数えます。', explanation: 'Alexandria はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'eg_py_d05', languageId: 'python', world: 'decode', title: 'Giza pyramid complex', titleJa: 'ギザのピラミッド群', category: 'world-heritage', objective: 'dictionary', source: SRC.giza, summaryJa: 'ギザのピラミッド群はカイロ近郊にある世界遺産です。', prompt: '辞書から location を取り出して Cairo と表示されるよう、キーを埋めてください。', code: 'site = {"name": "Giza pyramid complex", "location": "Cairo"}\nprint(site[___BLANK___])', answer: '"location"', expectedOutput: 'Cairo', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"location" キーの値が Cairo です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_EG_python_01', languageId: 'python', world: 'decode', title: 'Memphis and its Necropolis', titleJa: 'メンフィスとその墓地遺跡', category: 'world-heritage', objective: 'function', source: SRC.memphis, summaryJa: 'メンフィスとその墓地遺跡（ギザからダハシュールに至るピラミッド地帯）は世界遺産です。', prompt: '関数と条件を使い、category が pyramid のときだけ Memphis:pyramid と表示するよう空欄を埋めてください。', code: 'name = "Memphis"\ncategory = "pyramid"\ndef label(site, kind):\n    if kind == ___BLANK___:\n        return f"{site}:{kind}"\n    return "skip"\nprint(label(name, category))', answer: '"pyramid"', expectedOutput: 'Memphis:pyramid', hint: 'kind と比較するカテゴリ名を引用符付きで書きます。', explanation: 'kind が pyramid と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_EG_python_02', languageId: 'python', world: 'decode', title: 'Ancient Thebes', titleJa: '古代都市テーベ', category: 'world-heritage', objective: 'loop', source: SRC.thebes, summaryJa: '古代都市テーベとその墓地遺跡はルクソールと結びつく世界遺産です。', prompt: 'city が Luxor の遺跡名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'sites = [\n    {"name": "Thebes", "city": "Luxor"},\n    {"name": "Other", "city": "Cairo"}\n]\nfor site in sites:\n    if ___BLANK___:\n        print(site["name"])', answer: 'site["city"] == "Luxor"', expectedOutput: 'Thebes', hint: '各辞書の city キーを比較します。', explanation: 'Thebes の city だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_EG_python_03', languageId: 'python', world: 'decode', title: 'Nubian Monuments from Abu Simbel to Philae', titleJa: 'アブ・シンベルからフィラエまでのヌビア遺跡群', category: 'world-heritage', objective: 'dictionary', source: SRC.nubian, summaryJa: 'ヌビア遺跡群にはアブ・シンベルとフィラエが含まれます。', prompt: '辞書と関数を使い、Abu Simbel:Nubia と表示するキーを埋めてください。', code: 'site = {"name": "Abu Simbel", "region": "Nubia"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"region"', expectedOutput: 'Abu Simbel:Nubia', hint: 'Nubia を取り出すキーを選びます。', explanation: '"region" キーの値が Nubia です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'eg_py_e01', languageId: 'python', world: 'execute', title: 'Alexandria', titleJa: 'アレクサンドリア', category: 'geography-city', objective: 'function', source: SRC.alexandria, summaryJa: 'アレクサンドリアはエジプトの主要な地中海沿岸都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, sea):\n    return f"{name}:{sea}"\nprint(city_label("Alexandria", "Mediterranean"))', options: ['Alexandria:Mediterranean', 'Mediterranean:Alexandria', 'Alexandria', 'Error'], answer: 'Alexandria:Mediterranean', expectedOutput: 'Alexandria:Mediterranean', hint: 'return の f-string で name と sea の順番を見ます。', explanation: 'name が先、sea が後ろなので Alexandria:Mediterranean です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。', optionExplanations: { 'Alexandria:Mediterranean': '正解。f"{name}:{sea}"はnameが先、seaが後なのでAlexandria:Mediterraneanになります。', 'Mediterranean:Alexandria': 'f文字列は{name}:{sea}の順で定義されているため、nameが先になります。', 'Alexandria': 'f文字列にはseaの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'eg_py_e02', languageId: 'python', world: 'execute', title: 'Aswan High Dam', titleJa: 'アスワン・ハイ・ダム', category: 'engineering', objective: 'dictionary', source: SRC.aswan, summaryJa: 'アスワン・ハイ・ダムはナイル川にあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'dam = {"name": "Aswan High Dam", "river": "Nile"}\nprint(dam["river"])', options: ['Nile', 'Aswan High Dam', 'Cairo', 'river'], answer: 'Nile', expectedOutput: 'Nile', hint: '"river" キーの値を見ます。', explanation: 'dam["river"] は Nile を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。', optionExplanations: { 'Nile': '正解。dam["river"]はriverキーに対応する値Nileを返します。', 'Aswan High Dam': 'これはnameキーの値で、コードが参照しているのはriverキーです。', 'Cairo': 'damにはCairoという値は含まれておらず、riverキーの値はNileです。', 'river': '"river"はキーの名前で、print()で出力されるのはそのキーに対応する値です。' } },
  { id: 'eg_py_e03', languageId: 'python', world: 'execute', title: 'Egyptian Museum in Cairo', titleJa: 'カイロのエジプト考古学博物館', category: 'museum', objective: 'loop', source: SRC.egyptianMuseum, summaryJa: 'エジプト考古学博物館はカイロにあります。', prompt: 'リストを順に連結した出力を選んでください。', code: 'labels = ["Museum", "Cairo"]\nresult = ""\nfor label in labels:\n    result += label + "|"\nprint(result[:-1])', options: ['Museum|Cairo', 'Cairo|Museum', 'Museum|', 'Cairo'], answer: 'Museum|Cairo', expectedOutput: 'Museum|Cairo', hint: 'labels の並び順と最後の | の削除を見ます。', explanation: 'Museum、Cairo の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。', optionExplanations: { 'Museum|Cairo': '正解。labelsの順（Museum→Cairo）に|区切りで追加され、末尾の|だけ取り除かれます。', 'Cairo|Museum': 'forループはlabelsの順（Museum→Cairo）通りに処理するため、順序が逆になることはありません。', 'Museum|': '[:-1]は末尾の|だけを除くもので、Cairo部分が消えることはありません。', 'Cairo': 'labelsの2要素は両方ループで処理されるため、Museumの部分が欠けることはありません。' } },
  { id: 'eg_py_e04', languageId: 'python', world: 'execute', title: 'Sinai Peninsula', titleJa: 'シナイ半島', category: 'geography', objective: 'loop', source: SRC.sinai, summaryJa: 'シナイ半島はエジプト北東部にあります。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Sinai", "northeast": True},\n    {"name": "Delta", "northeast": False}\n]\nselected = [r["name"] for r in records if r["northeast"]]\nprint(selected[0])', options: ['Sinai', 'Delta', 'True', 'False'], answer: 'Sinai', expectedOutput: 'Sinai', hint: 'northeast が True の辞書だけ残します。', explanation: 'Sinai の northeast だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。', optionExplanations: { 'Sinai': '正解。northeastがTrueなのはSinaiだけなので、selected[0]はSinaiになります。', 'Delta': 'Deltaのnortheastはfalseなので、selectedには入りません。', 'True': 'Trueはnortheastキーの値（フィルタ条件）で、出力されるのはr["name"]の値です。', 'False': 'FalseはDeltaのnortheastで条件に合わず除外され、出力にも使われません。' } },
];

const pyFinalExecute = [
  { id: 'final_execute_EG_python_01', languageId: 'python', world: 'execute', title: 'Islamic Cairo', titleJa: 'イスラーム地区カイロ（歴史的カイロ）', category: 'world-heritage', objective: 'loop', source: SRC.islamicCairo, summaryJa: '歴史的カイロは世界遺産に登録されています。', prompt: '記録を絞り、year の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Al-Azhar Mosque", "kind": "historic", "year": 970},\n    {"name": "Other", "kind": "modern", "year": 2000},\n    {"name": "Sultan Hassan Mosque", "kind": "historic", "year": 1356}\n]\nselected = sorted([r for r in records if r["kind"] == "historic"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['Al-Azhar Mosque>Sultan Hassan Mosque', 'Sultan Hassan Mosque>Al-Azhar Mosque', 'Other>Al-Azhar Mosque', 'Al-Azhar Mosque>Other'], answer: 'Al-Azhar Mosque>Sultan Hassan Mosque', expectedOutput: 'Al-Azhar Mosque>Sultan Hassan Mosque', hint: 'kind で絞ったあと year の昇順です。', explanation: 'historic は Al-Azhar(970) と Sultan Hassan(1356) で、昇順に Al-Azhar が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。', optionExplanations: { 'Al-Azhar Mosque>Sultan Hassan Mosque': '正解。kind="historic"のAl-Azhar(970)とSultan Hassan(1356)をyear昇順にすると、970年が先になります。', 'Sultan Hassan Mosque>Al-Azhar Mosque': 'sortedはkey=yearで昇順なので、年が早いAl-Azhar(970)がSultan Hassan(1356)より先になります。', 'Other>Al-Azhar Mosque': 'Otherはkind="modern"でhistoricの条件に合わず、リストに含まれません。', 'Al-Azhar Mosque>Other': 'Otherはkind="modern"なのでフィルタで除外され、historicのAl-AzharとSultan Hassanだけが残ります。' } },
  { id: 'final_execute_EG_python_02', languageId: 'python', world: 'execute', title: 'Egypt transport dataset', titleJa: 'エジプトの交通データセット', category: 'transport', objective: 'dictionary', source: SRC.transport, summaryJa: 'エジプトにはナイル川交通、カイロメトロ、スエズ運河、砂漠道路、鉄道などの交通手段があります。', prompt: '辞書とリストから active が True の件数を集計した結果を選んでください。', code: 'routes = [\n    {"name": "Nile transport", "active": True},\n    {"name": "Cairo Metro", "active": True},\n    {"name": "Desert road", "active": False},\n    {"name": "Railway", "active": True},\n    {"name": "Suez Canal", "active": False}\n]\ncount = sum(1 for route in routes if route["active"])\nprint(count)', options: ['3', '5', '2', 'Nile transport'], answer: '3', expectedOutput: '3', hint: 'active が True の辞書だけ数えます。', explanation: 'Nile transport、Cairo Metro、Railway の3件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。', optionExplanations: { '3': '正解。active:TrueなのはNile transport、Cairo Metro、Railwayの3件です。', '5': 'routesの全件数は5ですが、active:Trueなのはそのうち3件だけです。', '2': 'active:TrueなのはNile transport、Cairo Metro、Railwayの3件あり、2件ではありません。', 'Nile transport': 'sumは件数（整数）を返すもので、要素の名前の文字列が出力されるわけではありません。' } },
];

const pyDebug = [
  { id: 'eg_py_b01', languageId: 'python', world: 'debug', title: 'Egyptian pound formatting', titleJa: 'エジプトポンドの表示', category: 'finance', objective: 'strings', source: SRC.pound, summaryJa: 'エジプトの通貨はエジプトポンドです。', prompt: '金額を E£10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("E£" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、E£10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"E£{amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。', causeOptionExplanations: { '文字列 amount に数値 0 を + で足している': '正解。amountは文字列"10.5"で、文字列に数値0を+で足すことはできずTypeErrorになります。', '出力文の文字列だけが間違っている': '"E£"の部分は正しく書けており、問題はamountと0の加算部分です。', 'データの件数が不足している': 'amountには値が1つ入っており、件数の問題ではなく型の不一致が原因です。' }, fixOptionExplanations: { 'amount を float にして、f-string で小数2桁に整形する': '正解。floatに変換しf"{amount:.2f}"とすることで、E£10.50のように整形できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '金額データを無視して固定文字列を出すと、実際の金額が反映されません。' }, impactOptionExplanations: { '数値計算と表示形式を分け、E£10.50 と安定して表示できる': '正解。floatとf-stringの書式指定により、計算と表示形式を分けて安定して表示できます。', '常に例外を出して停止する': '修正後はamountがfloat型になるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'amountのデータはそのまま使われ続けます。修正は型と表示形式だけです。' } },
  { id: 'eg_py_b02', languageId: 'python', world: 'debug', title: 'Egyptian postal-code style labels', titleJa: 'エジプト郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postal, summaryJa: 'エジプトの郵便番号は5桁で、先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'postcode = 1130\nprint(postcode)', cause: '郵便番号を数値として保存すると先頭ゼロを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号も失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postcode = "01130"\nprint(postcode)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDや郵便番号は計算対象ではなく文字列データとして扱います。', causeOptionExplanations: { '郵便番号を数値として保存すると先頭ゼロを保持できない': '正解。1130を整数として保存すると先頭ゼロの情報が失われ、01130という意図した表記になりません。', '出力文の文字列だけが間違っている': 'print(postcode)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'postcodeには値が1つ入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { '郵便番号を最初から文字列として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の郵便番号データを無視して固定文字列を出すと、正しい番号が表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む郵便番号も失わずに表示できる': '正解。文字列として保存すれば、先頭ゼロを含む表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを隠すものではありません。', '題材データを使わなくなる': '郵便番号のデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'eg_py_b03', languageId: 'python', world: 'debug', title: 'Governorate abbreviation lookup', titleJa: '県略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.governorates, summaryJa: 'エジプトの県には CAI、GIZ、ALX、ASN などの略号があります。', prompt: '略号 ALX から県名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"CAI": "Cairo", "GIZ": "Giza"}\ncode = "ALX"\nprint(abbreviations[code])', cause: '辞書に ALX のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"CAI": "Cairo", "GIZ": "Giza", "ALX": "Alexandria"}\ncode = "ALX"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'ALX というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。', causeOptionExplanations: { '辞書に ALX のキーが登録されていないのに直接アクセスしている': '正解。abbreviationsにはCAIとGIZしか登録されておらず、ALXを角括弧で読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(abbreviations[code])自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'abbreviationsには2件のデータがあり、件数不足ではなくALXが登録されていないことが原因です。' }, fixOptionExplanations: { 'abbreviations.get(code, "unknown") のように安全に取得する': '正解。getに第2引数のデフォルト値を渡すことで、キーが無くてもKeyErrorを避けられます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'abbreviationsの値を変えても、ALXが登録されていない問題自体は直りません。' }, impactOptionExplanations: { '登録されていない略号でも例外を出さずに処理できる': '正解。getとデフォルト値により、登録されていない略号でも安全に"unknown"などを返せます。', '常に例外を出して停止する': '修正後はgetで安全に取得するため、KeyErrorは発生しなくなります。', '題材データを使わなくなる': 'abbreviationsのデータはそのまま使われ続けます。修正は取得方法だけです。' } },
];

const pyFinalDebug = [
  { id: 'final_debug_EG_python_01', languageId: 'python', world: 'debug', title: 'Wadi Al-Hitan', titleJa: 'ワディ・アル・ヒタン（クジラの谷）', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.wadiAlHitan, summaryJa: 'ワディ・アル・ヒタンはクジラの化石で知られる世界遺産です。', prompt: '化石数データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Wadi Al-Hitan", "fossil_count": "365"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["fossil_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'fossil_count がない辞書でも record["fossil_count"] を直接読んでいる', fix: 'record.get("fossil_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Wadi Al-Hitan", "fossil_count": "365"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("fossil_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に fossil_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。', causeOptionExplanations: { 'fossil_count がない辞書でも record["fossil_count"] を直接読んでいる': '正解。"Other"の辞書にはfossil_countキーが無く、直接読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(large)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'recordsには2件のデータがあり、件数不足ではなく"Other"にfossil_countキーが無いことが原因です。' }, fixOptionExplanations: { 'record.get("fossil_count") を確認してから int に変換する': '正解。getはキーが無い場合Noneを返すので、None判定をしてから安全にint変換できます。', '条件を削除する': 'if文の条件を削除すると、fossil_count>100かどうかの絞り込み自体ができなくなります。', 'すべての値を同じ文字列にする': 'recordsの値を変えても、fossil_countキーが無い行を直接読む問題自体は直りません。' }, impactOptionExplanations: { '欠損行を飛ばし、数値化できる行だけ判定できる': '正解。Noneチェックにより、fossil_countが無い行を安全にスキップして処理できます。', '常に例外を出して停止する': '修正後はgetとNone判定があるため、KeyErrorは発生しなくなります。', '題材データを使わなくなる': 'recordsのデータはそのまま使われ続けます。修正はfossil_countの読み取り方法だけです。' } },
];

const jsDecode = [
  { id: 'eg_js_d01', languageId: 'javascript', world: 'decode', title: 'Suez Canal', titleJa: 'スエズ運河', category: 'geography-infrastructure', objective: 'object', source: SRC.suez, summaryJa: 'スエズ運河は地中海と紅海を結ぶ運河です。', prompt: 'オブジェクトから connects を取り出して Red Sea と表示されるよう、空欄を埋めてください。', code: 'const canal = { name: "Suez Canal", connects: "Red Sea" };\nconsole.log(canal.___BLANK___);', answer: 'connects', expectedOutput: 'Red Sea', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'canal.connects は connects プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'eg_js_d02', languageId: 'javascript', world: 'decode', title: 'Luxor Temple', titleJa: 'ルクソール神殿', category: 'world-heritage', objective: 'strings', source: SRC.thebes, summaryJa: 'ルクソール神殿はルクソールにあります。', prompt: 'テンプレートリテラルで Luxor:temple と表示されるよう空欄を埋めてください。', code: 'const city = "Luxor";\nconst kind = ___BLANK___;\nconsole.log(`${city}:${kind}`);', answer: '"temple"', expectedOutput: 'Luxor:temple', hint: 'kind に入る文字列を引用符付きで書きます。', explanation: '"temple" を入れると ${kind} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'eg_js_d03', languageId: 'javascript', world: 'decode', title: 'Egyptian flag colors', titleJa: 'エジプト国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'エジプト国旗は赤・白・黒の3色で構成されています。', prompt: '配列から black を取り出す添字を埋めてください。', code: 'const colors = ["red", "white", "black"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'black', hint: '配列は0番目から数えます。', explanation: 'black は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'eg_js_d04', languageId: 'javascript', world: 'decode', title: 'Nile Delta city labels', titleJa: 'ナイルデルタの都市', category: 'geography', objective: 'switch', source: SRC.nileDelta, summaryJa: 'ナイルデルタにはタンタやマンスーラなどの都市があります。', prompt: 'code が delta のとき Nile Delta city と表示されるよう case を埋めてください。', code: 'const code = "delta";\nswitch (code) {\n  case ___BLANK___:\n    console.log("Nile Delta city");\n    break;\n  default:\n    console.log("other");\n}', answer: '"delta"', expectedOutput: 'Nile Delta city', hint: 'case には code と一致する文字列を書きます。', explanation: 'case "delta" が一致し、Nile Delta city が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'eg_js_d05', languageId: 'javascript', world: 'decode', title: 'Khan el-Khalili', titleJa: 'ハーン・ハリーリ市場', category: 'culture-market', objective: 'loop', source: SRC.khanElKhalili, summaryJa: 'ハーン・ハリーリはカイロにある有名な市場街区です。', prompt: 'for...of で city が Cairo の市場だけを表示するよう、条件の空欄を埋めてください。', code: 'const markets = [\n  { name: "Khan el-Khalili", city: "Cairo" },\n  { name: "Other", city: "Luxor" }\n];\nfor (const market of markets) {\n  if (___BLANK___) console.log(market.name);\n}', answer: 'market.city === "Cairo"', expectedOutput: 'Khan el-Khalili', hint: '各 market の city を比較します。', explanation: 'Khan el-Khalili の city だけが Cairo なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_EG_javascript_01', languageId: 'javascript', world: 'decode', title: 'Saint Catherine Area', titleJa: 'セント・カトリーナ地域', category: 'world-heritage', objective: 'array', source: SRC.saintCatherine, summaryJa: 'セント・カトリーナ地域はシナイ半島にある世界遺産です。', prompt: 'array methods で sinai を含む名前を取り出してください。', code: 'const areas = ["delta", "sinai-protected", "desert"];\nconst result = areas.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"sinai"', expectedOutput: 'sinai-protected', hint: 'includes に探したい部分文字列を渡します。', explanation: '"sinai" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_EG_javascript_02', languageId: 'javascript', world: 'decode', title: 'Abu Mena', titleJa: 'アブ・メナ', category: 'world-heritage', objective: 'object', source: SRC.abuMena, summaryJa: 'アブ・メナはエジプトにある世界遺産の考古遺跡です。', prompt: 'find で Abu Mena の record を探す条件を埋めてください。', code: 'const records = [{name:"Giza", type:"pyramid"}, {name:"Abu Mena", type:"archaeological"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.type);', answer: '"Abu Mena"', expectedOutput: 'archaeological', hint: 'name と一致する文字列を書きます。', explanation: 'Abu Mena の record が見つかり、type が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_EG_javascript_03', languageId: 'javascript', world: 'decode', title: 'Egyptian libraries and archives', titleJa: 'エジプトの図書館・文書館', category: 'culture-institution', objective: 'class', source: SRC.libraries, summaryJa: 'ビブリオテカ・アレクサンドリーナとダール・アル・クトゥブはエジプトの代表的な図書館・文書館です。', prompt: 'class のインスタンスを map して Bibliotheca Alexandrina:library と表示してください。', code: 'class Archive {\n  constructor(name, kind) { this.name = name; this.kind = kind; }\n}\nconst items = [new Archive("Bibliotheca Alexandrina", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.kind}`).join(","));', answer: '"library"', expectedOutput: 'Bibliotheca Alexandrina:library', hint: 'constructor の kind に入る文字列です。', explanation: 'kind に library が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'eg_js_e01', languageId: 'javascript', world: 'execute', title: 'Rosetta Stone', titleJa: 'ロゼッタストーン', category: 'archaeology', objective: 'array', source: SRC.rosetta, summaryJa: 'ロゼッタストーンはエジプトのロゼッタ付近で発見されました。', prompt: 'map と join の出力を選んでください。', code: 'const words = ["rosetta"];\nconst label = words.map(w => w.toUpperCase()).join("-");\nconsole.log(label);', options: ['ROSETTA', 'rosetta', 'R-O', 'Rosetta'], answer: 'ROSETTA', expectedOutput: 'ROSETTA', hint: '各要素を大文字化します。', explanation: 'rosetta が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。', optionExplanations: { 'ROSETTA': '正解。toUpperCase()によりrosettaは全て大文字に変換されます。', 'rosetta': 'toUpperCase()が呼ばれているため、小文字のままにはなりません。', 'R-O': '要素は1つだけで、joinは複数要素を結合するものなので一部だけが出ることはありません。', 'Rosetta': 'toUpperCase()は全文字を大文字化するため、先頭だけ大文字になることはありません。' } },
  { id: 'eg_js_e02', languageId: 'javascript', world: 'execute', title: 'Red Sea coast', titleJa: '紅海沿岸', category: 'geography', objective: 'loop', source: SRC.redSea, summaryJa: 'エジプトには紅海沿岸地域があります。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [40, 60, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['120', '100', '40', '406020'], answer: '120', expectedOutput: '120', hint: '数値を左から足していきます。', explanation: '40 + 60 + 20 = 120 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。', optionExplanations: { '120': '正解。reduceの初期値0に40,60,20を順に足すと120になります。', '100': '40+60のような部分合計で、reduceは3つすべてを合計します。', '40': 'これはsegmentsの最初の要素だけの値で、reduceは3つすべてを合計します。', '406020': '+は数値の加算であり、文字列のように数字を連結することはありません。' } },
  { id: 'eg_js_e03', languageId: 'javascript', world: 'execute', title: 'Cairo Metro', titleJa: 'カイロメトロ', category: 'transport', objective: 'object', source: SRC.cairoMetro, summaryJa: 'カイロメトロはカイロ都市圏の地下鉄です。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const metro = { city: "Cairo", lines: ["line1", "line2"] };\nlet result = metro.city;\nfor (const item of metro.lines) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Cairo:line1:line2', 'line1:line2:Cairo', 'Cairo', 'line2:line1'], answer: 'Cairo:line1:line2', expectedOutput: 'Cairo:line1:line2', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに line1、line2 が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。', optionExplanations: { 'Cairo:line1:line2': '正解。resultはmetro.cityで始まり、linesの順（line1→line2）に追加されます。', 'line1:line2:Cairo': 'resultはmetro.cityで初期化されるため、cityが必ず先頭になります。', 'Cairo': 'for...ofでlinesの全要素（line1,line2）が追加されるため、cityだけにはなりません。', 'line2:line1': 'linesは["line1","line2"]の順なので、line1が先、line2が後になります。' } },
  { id: 'eg_js_e04', languageId: 'javascript', world: 'execute', title: 'Philae temple complex', titleJa: 'フィラエ神殿群', category: 'world-heritage', objective: 'function', source: SRC.philae, summaryJa: 'フィラエ神殿群はアスワン地域と結びつく遺跡です。', prompt: '関数と条件の戻り値を選んでください。', code: 'function templeLabel(region) {\n  return region === "Aswan" ? "Philae" : "other";\n}\nconsole.log(templeLabel("Aswan"));', options: ['Philae', 'other', 'Aswan', 'true'], answer: 'Philae', expectedOutput: 'Philae', hint: '"Aswan" === "Aswan" の判定を見ます。', explanation: '条件が true なので "Philae" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。', optionExplanations: { 'Philae': '正解。region==="Aswan"がtrueなので三項演算子は"Philae"を返します。', 'other': '"other"はregion==="Aswan"がfalseの場合の値で、今回region="Aswan"なのでtrue側が選ばれます。', 'Aswan': 'Aswanはregionに渡した引数の値で、返されるのは三項演算子で選ばれた文字列です。', 'true': '条件式の評価結果ではなく、その結果に応じて選ばれた文字列が出力されます。' } },
];

const jsFinalExecute = [
  { id: 'final_execute_EG_javascript_01', languageId: 'javascript', world: 'execute', title: 'Egyptian oases', titleJa: 'エジプトのオアシス', category: 'geography-nature', objective: 'array', source: SRC.oases, summaryJa: 'エジプトの西部砂漠にはシワ、バハリヤ、ファラフラ、ダクラ、ハルガなどのオアシスがあります。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const oases = [\n  { name: "Siwa", region: "western", area: 2 },\n  { name: "Bahariya", region: "western", area: 3 },\n  { name: "Other", region: "eastern", area: 5 }\n];\nconst names = oases.filter(o => o.region === "western").map(o => o.name).sort();\nconsole.log(names.join(">"));', options: ['Bahariya>Siwa', 'Siwa>Bahariya', 'Other>Siwa', 'Other>Bahariya>Siwa'], answer: 'Bahariya>Siwa', expectedOutput: 'Bahariya>Siwa', hint: 'region で絞ったあと、名前をアルファベット順にします。', explanation: 'Bahariya と Siwa が残り、sort で Bahariya が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。', optionExplanations: { 'Bahariya>Siwa': '正解。region="western"のSiwaとBahariyaが残り、sort()のアルファベット順でBahariyaが先になります。', 'Siwa>Bahariya': 'sort()は引数なしだとアルファベット順なので、B（Bahariya）がS（Siwa）より先になります。', 'Other>Siwa': 'Otherはregion="eastern"でwesternの条件に合わず、filterで除外されます。', 'Other>Bahariya>Siwa': 'Otherはfilterで除外されるため、3件すべてが残ることはありません。' } },
  { id: 'final_execute_EG_javascript_02', languageId: 'javascript', world: 'execute', title: 'Nile Valley site records', titleJa: 'ナイル渓谷の遺跡レコード', category: 'world-heritage', objective: 'object', source: SRC.nileValley, summaryJa: 'ナイル渓谷にはカイロ、ルクソール、アスワン、エドフなどの遺跡が連なります。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const cities = [{name:"Luxor", sites:[2,3]}, {name:"Aswan", sites:[5]}];\nconst total = cities.reduce((sum, city) => sum + city.sites.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Luxor-Aswan'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Luxor は5、Aswan は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。', optionExplanations: { '10': '正解。Luxorのsites[2,3]の合計5とAswanのsites[5]の合計5を足すと10になります。', '5': 'これはLuxorまたはAswanの片方だけの合計で、外側のreduceは両都市を足し合わせます。', '3': 'これはLuxorのsitesの最初の要素だけの値で、内側・外側どちらのreduceでも合計されません。', 'Luxor-Aswan': 'reduceは数値の合計を計算するもので、都市名の文字列を連結することはありません。' } },
];

const jsDebug = [
  { id: 'eg_js_b01', languageId: 'javascript', world: 'debug', title: 'Egyptian phone-number formatting', titleJa: 'エジプトの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'エジプトの携帯電話番号は11桁で構成されます。', prompt: '11桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "01012345678";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく整形できる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "01012345678";\nif (digits.length === 11) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が10のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。', causeOptionExplanations: { '11桁の番号なのに length === 10 と判定している': '正解。"01012345678"は11文字なので、length===10の条件はfalseになりif内が実行されません。', '出力文の文字列だけが間違っている': 'console.logのテンプレート部分は正しく書けており、問題はif条件の桁数指定です。', 'データの件数が不足している': 'digitsには11桁すべての数字が含まれており、件数不足ではなく条件の桁数が原因です。' }, fixOptionExplanations: { 'length === 11 に修正してから slice する': '正解。実際の桁数11に条件を合わせることで、if内のslice処理が実行されます。', '条件を削除する': 'if文の条件を削除すると、整形すべきかどうかの判定自体ができなくなります。', 'すべての値を同じ文字列にする': '実際の電話番号データを無視して固定文字列を出すと、正しい番号が表示されません。' }, impactOptionExplanations: { '11桁の番号を正しく整形できる': '正解。条件を11桁に合わせることで、sliceによる分割処理が正しく実行されます。', '常に例外を出して停止する': 'この修正は条件式の桁数を直すだけで、例外処理とは関係ありません。', '題材データを使わなくなる': 'digitsのデータはそのまま使われ続けます。修正は条件の桁数だけです。' } },
  { id: 'eg_js_b02', languageId: 'javascript', world: 'debug', title: 'Cairo and Giza labels', titleJa: 'カイロとギザ', category: 'geography-city', objective: 'object', source: SRC.giza2, summaryJa: 'カイロとギザはエジプトの隣接する主要都市圏です。', prompt: 'Cairo region の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Cairo", region: "Greater Cairo" }, { name: "Giza", region: "Greater Cairo" }];\nconst labels = cities.filter(city => city.area === "Greater Cairo").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには region があるのに area を参照している', fix: 'city.region === "Greater Cairo" に修正する', impact: 'Cairo と Giza の両方を正しく選べる', why: '存在しない area は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Cairo", region: "Greater Cairo" }, { name: "Giza", region: "Greater Cairo" }];\nconst labels = cities.filter(city => city.region === "Greater Cairo").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。', causeOptionExplanations: { 'データには region があるのに area を参照している': '正解。cityオブジェクトにareaは無くundefinedになり、"Greater Cairo"とは一致しません。', '出力文の文字列だけが間違っている': 'console.logのjoin部分は正しく書けており、問題はfilterの条件で参照しているプロパティ名です。', 'データの件数が不足している': 'citiesには2件のデータがあり、件数不足ではなく参照しているプロパティ名が原因です。' }, fixOptionExplanations: { 'city.region === "Greater Cairo" に修正する': '正解。実際に存在するregionプロパティで比較することで、両方の都市が正しく選ばれます。', '条件を削除する': '条件を削除すると絞り込みの意味がなくなり、目的の都市を選べません。', 'すべての値を同じ文字列にする': '実際の都市データを無視して固定文字列を出すと、正しい都市名が表示されません。' }, impactOptionExplanations: { 'Cairo と Giza の両方を正しく選べる': '正解。正しいプロパティ名regionで比較することで、両方の都市が条件を満たして選ばれます。', '常に例外を出して停止する': 'この修正はプロパティ名を直すだけで、例外処理とは関係ありません。', '題材データを使わなくなる': 'citiesのデータはそのまま使われ続けます。修正は参照するプロパティ名だけです。' } },
  { id: 'eg_js_b03', languageId: 'javascript', world: 'debug', title: 'Museum record lookup', titleJa: '博物館レコードの参照', category: 'museum', objective: 'object', source: SRC.egyptianMuseum, summaryJa: 'エジプト考古学博物館の展示データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Egyptian Museum" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Egyptian Museum" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。', causeOptionExplanations: { 'record.detail が undefined のまま city を読んでいる': '正解。recordにはdetailが無くundefinedで、その先のcityを読もうとしてTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.log自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'recordにはnameプロパティがあり、件数の問題ではなくdetailが未定義であることが原因です。' }, fixOptionExplanations: { 'optional chaining と代替値を使う': '正解。?.でdetailが無くてもエラーにならず、??でデフォルト値"unknown"を補えます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'recordの内容を無視して固定文字列を出すと、実際のデータに応じた表示ができません。' }, impactOptionExplanations: { 'detail がないレコードでも停止せず unknown を表示できる': '正解。optional chainingとnullish coalescingにより、detailが無くてもエラーにならず処理が続きます。', '常に例外を出して停止する': '修正後は?.と??により安全に読めるようになるため、TypeErrorは発生しなくなります。', '題材データを使わなくなる': 'recordのデータはそのまま使われ続けます。修正はdetailへの安全なアクセス方法だけです。' } },
];

const jsFinalDebug = [
  { id: 'final_debug_EG_javascript_01', languageId: 'javascript', world: 'debug', title: 'Citadel of Qaitbay', titleJa: 'カイトベイ要塞', category: 'world-heritage-history', objective: 'object', source: SRC.citadelQaitbay, summaryJa: 'カイトベイ要塞はアレクサンドリアにある歴史的な要塞です。', prompt: 'カイトベイ要塞のレコードを安全に読み、coastal が true の場合だけ表示したいコードです。', code: 'const site = { name: "Citadel of Qaitbay", city: "Alexandria", coastal: true };\nif (site.coastl === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'coastal を coastl と誤記し、details も存在確認なしで読んでいる', fix: 'site.coastal を比較し、site.details?.city ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Citadel of Qaitbay", city: "Alexandria", coastal: true };\nif (site.coastal === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。', causeOptionExplanations: { 'coastal を coastl と誤記し、details も存在確認なしで読んでいる': '正解。siteにcoastlは無くundefinedで条件がfalseになり、details.cityはdetails自体が無くTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.log自体は正しく書けており、問題はプロパティ名の誤記と未確認アクセスです。', 'データの件数が不足している': 'siteにはname、city、coastalが定義されており、件数の問題ではなくプロパティ名と安全性が原因です。' }, fixOptionExplanations: { 'site.coastal を比較し、site.details?.city ?? "unknown" のように安全に読む': '正解。正しいプロパティ名coastalで判定し、?.と??でdetailsが無くてもエラーを防げます。', '条件を削除する': '判定自体が目的なので、条件を削除するとcoastalかどうかの判定ができなくなります。', 'すべての値を同じ文字列にする': '実際のsiteデータを無視して固定文字列を出すと、正しい判定結果が得られません。' }, impactOptionExplanations: { '正しい boolean 判定ができ、欠損 details があっても停止しない': '正解。coastalでの正しい判定と?.による安全なアクセスで、欠損データがあっても処理が止まりません。', '常に例外を出して停止する': '修正後はoptional chainingがあるため、TypeErrorは発生しなくなります。', '題材データを使わなくなる': 'siteのデータはそのまま使われ続けます。修正はプロパティ名とアクセス方法だけです。' } },
];

const javaDecode = [
  { id: 'eg_java_d01', languageId: 'java', world: 'decode', title: 'Egyptian Parliament', titleJa: 'エジプト議会', category: 'politics', objective: 'strings', source: SRC.parliament, summaryJa: 'エジプト議会はカイロにあります。', prompt: 'Parliament:Cairo と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String institution = "Parliament";\n    String city = ___BLANK___;\n    System.out.println(institution + ":" + city);\n  }\n}', answer: '"Cairo"', expectedOutput: 'Parliament:Cairo', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Cairo" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'eg_java_d02', languageId: 'java', world: 'decode', title: '1952 Revolution', titleJa: '1952年革命', category: 'history', objective: 'numbers', source: SRC.revolution, summaryJa: 'エジプト革命は1952年に起きました。', prompt: 'Revolution:1952 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Revolution:" + year;\n    System.out.println(label);\n  }\n}', answer: '1952', expectedOutput: 'Revolution:1952', hint: 'int なので引用符なしの数値です。', explanation: 'year に1952を入れると文字列連結で Revolution:1952 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'eg_java_d03', languageId: 'java', world: 'decode', title: 'Opening of the Suez Canal', titleJa: 'スエズ運河の開通', category: 'history-infrastructure', objective: 'condition', source: SRC.suez, summaryJa: 'スエズ運河は1869年に開通しました。', prompt: 'year が1869のとき Suez Canal opened と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1869;\n    if (___BLANK___) {\n      System.out.println("Suez Canal opened");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1869', expectedOutput: 'Suez Canal opened', hint: '値が等しいかは == で比較します。', explanation: 'year == 1869 が true になるため Suez Canal opened が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'eg_java_d04', languageId: 'java', world: 'decode', title: 'Egyptian transport modes', titleJa: 'エジプトの交通手段', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'エジプトでは河川・鉄道・運河・道路など複数の交通手段が使われています。', prompt: 'mode が river のとき Nile transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "river";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Nile transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"river"', expectedOutput: 'Nile transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "river" が一致し、Nile transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'eg_java_d05', languageId: 'java', world: 'decode', title: 'Egyptian regions', titleJa: 'エジプトの地域区分', category: 'geography-administration', objective: 'array', source: SRC.governorates, summaryJa: 'エジプトはナイルデルタ、ナイル渓谷、西部砂漠、シナイ、紅海沿岸などの地域に分かれます。', prompt: 'regions 配列を拡張 for で読み、Sinai だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"Nile Delta", "Sinai", "Western Desert"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Sinai")', expectedOutput: 'Sinai', hint: 'String の内容比較は equals です。', explanation: 'region が Sinai のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_EG_java_01', languageId: 'java', world: 'decode', title: 'Bibliotheca Alexandrina', titleJa: 'ビブリオテカ・アレクサンドリーナ', category: 'culture-institution', objective: 'method', source: SRC.libraries, summaryJa: 'ビブリオテカ・アレクサンドリーナはアレクサンドリアにあります。', prompt: 'city が Alexandria のとき library と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String city) {\n    if (city.equals("Alexandria")) return "library";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"Alexandria"', expectedOutput: 'library', hint: 'city に渡す文字列を引用符付きで書きます。', explanation: '"Alexandria" が city に入り、library が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_EG_java_02', languageId: 'java', world: 'decode', title: 'Temple of Edfu', titleJa: 'エドフ神殿', category: 'world-heritage', objective: 'collections', source: SRC.edfu, summaryJa: 'エドフ神殿はエジプトのエドフにあります。', prompt: 'ArrayList から wellPreserved の temple だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Temple {\n  String name;\n  boolean wellPreserved;\n  Temple(String n, boolean w) { name = n; wellPreserved = w; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Temple> temples = new ArrayList<>();\n    temples.add(new Temple("Edfu", true));\n    temples.add(new Temple("Other", false));\n    for (Temple t : temples) {\n      if (___BLANK___) System.out.println(t.name);\n    }\n  }\n}', answer: 't.wellPreserved', expectedOutput: 'Edfu', hint: 'wellPreserved フィールドが true の record だけです。', explanation: 'Edfu の wellPreserved だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_EG_java_03', languageId: 'java', world: 'decode', title: 'Egyptian Museum records', titleJa: 'エジプト考古学博物館のレコード', category: 'museum', objective: 'class', source: SRC.egyptianMuseum, summaryJa: 'エジプト考古学博物館はカイロにあります。', prompt: 'HashMap から Museum の都市を取り出し Museum:Cairo と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Record {\n  String name;\n  String city;\n  Record(String n, String c) { name = n; city = c; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Record> map = new HashMap<>();\n    map.put("Museum", new Record("Museum", "Cairo"));\n    Record record = map.get(___BLANK___);\n    System.out.println(record.name + ":" + record.city);\n  }\n}', answer: '"Museum"', expectedOutput: 'Museum:Cairo', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Museum キーから record オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'eg_java_e01', languageId: 'java', world: 'execute', title: 'Ahmed Zewail', titleJa: 'アハメド・ズウェイル', category: 'science-history', objective: 'strings', source: SRC.zewail, summaryJa: 'アハメド・ズウェイルはノーベル化学賞を受賞したエジプト出身の科学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Ahmed Zewail";\n    if (scientist.equals("Ahmed Zewail")) System.out.println("chemistry");\n    else System.out.println("other");\n  }\n}', options: ['chemistry', 'other', 'Ahmed Zewail', 'true'], answer: 'chemistry', expectedOutput: 'chemistry', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので chemistry が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。', optionExplanations: { 'chemistry': '正解。scientist.equals("Ahmed Zewail")がtrueなので最初のprintln("chemistry")が実行されます。', 'other': '"other"はelse側の出力で、equalsがtrueの今回は実行されません。', 'Ahmed Zewail': 'scientistの値そのものではなく、if/elseで選ばれた文字列が出力されます。', 'true': '比較結果のbooleanではなく、その結果で選ばれたprintlnの文字列が出力されます。' } },
  { id: 'eg_java_e02', languageId: 'java', world: 'execute', title: 'Egyptian time zone sample', titleJa: 'エジプトの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'エジプトは東ヨーロッパ時間（EET）を使用しています。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 2));\n  }\n}', options: ['12', '10', '2', '8'], answer: '12', expectedOutput: '12', hint: '10 + 2 を計算します。', explanation: 'UTC 10時に2を足すので12です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。', optionExplanations: { '12': '正解。localHour(10,2)はutcHour+offsetを計算し、10+2=12を返します。', '10': '10はutcHourの引数の値で、返されるのはoffsetを加えた後の計算結果です。', '2': '2はoffsetの引数の値で、返されるのはutcHourを加えた後の計算結果です。', '8': '10+2は加算なので、引いた結果である8になることはありません。' } },
  { id: 'eg_java_e03', languageId: 'java', world: 'execute', title: 'Al-Azhar University', titleJa: 'アズハル大学', category: 'education', objective: 'collections', source: SRC.alAzhar, summaryJa: 'アズハル大学はカイロにあります。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Al-Azhar");\n    labels.add("Cairo");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Al-Azhar>Cairo', 'Cairo>Al-Azhar', 'Al-Azhar>', 'Cairo'], answer: 'Al-Azhar>Cairo', expectedOutput: 'Al-Azhar>Cairo', hint: '追加した順に result へ入ります。', explanation: 'Al-Azhar、Cairo の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。', optionExplanations: { 'Al-Azhar>Cairo': '正解。labelsの追加順（Al-Azhar→Cairo）通りに連結され、末尾の>だけ取り除かれます。', 'Cairo>Al-Azhar': '拡張forはlabelsの順（Al-Azhar→Cairo）通りに処理するため、順序が逆になることはありません。', 'Al-Azhar>': 'substringは末尾の>だけを除くもので、Cairo部分が消えることはありません。', 'Cairo': 'labelsの2要素は両方ループで処理されるため、Al-Azharの部分が欠けることはありません。' } },
  { id: 'eg_java_e04', languageId: 'java', world: 'execute', title: 'Egyptian language label sample', titleJa: 'エジプトの言語ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.language, summaryJa: 'エジプトの言語・文字に関するサンプルデータを扱えます。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Hieroglyphic extends ScriptType {\n  @Override\n  String label() { return "Hieroglyphic"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Hieroglyphic();\n    System.out.println(type.label());\n  }\n}', options: ['Hieroglyphic', 'script', 'ScriptType', 'error'], answer: 'Hieroglyphic', expectedOutput: 'Hieroglyphic', hint: '実体は Hieroglyphic です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。', optionExplanations: { 'Hieroglyphic': '正解。typeの実体はHieroglyphicなので、オーバーライドされたlabel()が呼ばれHieroglyphicが返ります。', 'script': '変数の型はScriptTypeですが、実行時には実体（Hieroglyphic）のoverrideされたメソッドが呼ばれます。', 'ScriptType': 'label()はクラス名ではなく文字列"script"または"Hieroglyphic"を返すメソッドです。', 'error': 'HieroglyphicはScriptTypeを正しく継承・オーバーライドしているため、コンパイルエラーや実行時エラーは起きません。' } },
];

const javaFinalExecute = [
  { id: 'final_execute_EG_java_01', languageId: 'java', world: 'execute', title: 'Egyptian governorate center records', titleJa: 'エジプトの県庁所在地レコード', category: 'geography-administration', objective: 'collections', source: SRC.governorates, summaryJa: 'エジプトの各県には県庁所在地が存在します。', prompt: 'HashMap とメソッドで人口規模が大きい県庁所在地を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> centers = new HashMap<>();\n    centers.put("Cairo", 9);\n    centers.put("Luxor", 1);\n    String result = "";\n    for (String city : centers.keySet()) if (isLarge(centers.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Cairo', 'Luxor', 'CairoLuxor', '9'], answer: 'Cairo', expectedOutput: 'Cairo', hint: 'population が4以上の city だけです。', explanation: 'Cairo の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。', optionExplanations: { 'Cairo': '正解。isLarge(population)はpopulation>=4を判定し、Cairo(9)だけがtrueでresultに追加されます。', 'Luxor': 'Luxorのpopulationは1でisLarge(1)はfalseなので、resultには追加されません。', 'CairoLuxor': 'isLarge(1)はfalseでLuxorは条件を満たさないため、両方が連結されることはありません。', '9': '9はCairoのpopulationの値で、出力されるのはisLarge判定を通過したcity名です。' } },
  { id: 'final_execute_EG_java_02', languageId: 'java', world: 'execute', title: 'Nile research station records', titleJa: 'ナイル川研究拠点レコード', category: 'science-geography', objective: 'collections', source: SRC.nileValley, summaryJa: 'ナイル川流域ではエジプトの研究機関による観測データが扱われます。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Aswan", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Aswan:active', 'Closed:active', 'Aswan', 'active:Aswan'], answer: 'Aswan:active', expectedOutput: 'Aswan:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Aswan だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。', optionExplanations: { 'Aswan:active': '正解。Aswanのactiveはtrueなのでif文を通過し、label()が"Aswan:active"を返します。', 'Closed:active': 'Closedのactiveはfalseなので、if (station.active)の条件を満たさずlabel()は呼ばれません。', 'Aswan': 'label()メソッドはname + ":active"を返すため、":active"部分も含めて出力されます。', 'active:Aswan': 'label()はname + ":active"の順で連結するため、nameが先、activeが後になります。' } },
];

const javaDebug = [
  { id: 'eg_java_b01', languageId: 'java', world: 'debug', title: 'Egyptian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.governorates, summaryJa: 'エジプトの都市コードは CAI、GIZ、LXR などです。', prompt: '都市コード LXR を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("LXR");\n    if (code == "LXR") System.out.println("Luxor");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("LXR") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("LXR");\n    if (code.equals("LXR")) System.out.println("Luxor");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。', causeOptionExplanations: { 'String の内容比較に == を使っている': '正解。new String("LXR")は新しい参照を作るため、==では文字列リテラルと参照が異なりfalseになります。', '出力文の文字列だけが間違っている': 'System.out.println自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'codeには"LXR"という値が入っており、件数不足ではなく比較方法が原因です。' }, fixOptionExplanations: { 'code.equals("LXR") に修正する': '正解。equalsは文字列の内容を比較するため、参照が違っても中身が同じならtrueになります。', '条件を削除する': '比較自体が目的なので、条件を削除すると判定の意味がなくなります。', 'すべての値を同じ文字列にする': '実際のcodeの値を無視して固定文字列を出すと、正しい判定にはなりません。' }, impactOptionExplanations: { '別オブジェクトの String でも内容が同じなら一致判定できる': '正解。equalsを使うことで、参照に関わらず文字列の内容で正しく判定できます。', '常に例外を出して停止する': 'equalsへの変更で例外が発生するようになるわけではなく、正しくtrue/falseが返ります。', '題材データを使わなくなる': 'codeのデータはそのまま使われ続けます。修正は比較方法だけです。' } },
  { id: 'eg_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero site code formatting', titleJa: '先頭ゼロ付き遺跡コードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.postal, summaryJa: '遺跡コード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル遺跡コード 0042 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 42;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0042"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0042";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。', causeOptionExplanations: { '先頭ゼロを含む識別コードを数値として保存している': '正解。42をint型として保存すると先頭ゼロの情報が失われ、0042という意図した表記になりません。', '出力文の文字列だけが間違っている': 'System.out.println自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'sampleには値が1つ入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { 'String sample = "0042"; として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際のコードデータを無視して固定文字列を出すと、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを失わず、表示形式をそのまま保てる': '正解。文字列として保存すれば、先頭ゼロを含む表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを隠すものではありません。', '題材データを使わなくなる': 'コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'eg_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.egyptianMuseum, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。', causeOptionExplanations: { 'int 同士の割り算なので小数部が切り捨てられる': '正解。total/daysはint同士の演算なので17/2は8に切り捨てられ、その後doubleに入ります。', '出力文の文字列だけが間違っている': 'System.out.println自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'totalとdaysには値が入っており、件数の問題ではなく整数除算が原因です。' }, fixOptionExplanations: { 'total または days を double に変換してから割る': '正解。片方をdoubleにキャストすれば、計算自体が小数を含む除算になり8.5が得られます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の来館者データを無視して固定文字列を出すと、正しい平均が表示されません。' }, impactOptionExplanations: { '8.5 のような小数平均を正しく表せる': '正解。キャストにより除算自体が小数を含むようになり、8.5のような正しい平均を表せます。', '常に例外を出して停止する': 'この修正はキャストを加えるだけで、例外処理とは無関係です。', '題材データを使わなくなる': 'totalとdaysのデータはそのまま使われ続けます。修正は計算方法だけです。' } },
];

const javaFinalDebug = [
  { id: 'final_debug_EG_java_01', languageId: 'java', world: 'debug', title: 'Siwa Oasis', titleJa: 'シワ・オアシス', category: 'geography-nature', objective: 'collections', source: SRC.siwa, summaryJa: 'シワ・オアシスはエジプトの西部砂漠にあります。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> populations = new HashMap<>();\n    populations.put("Siwa Oasis", "33000");\n    String popText = populations.get("Other Oasis");\n    int population = Integer.parseInt(popText);\n    System.out.println(population);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', causeOptionExplanations: { '存在しないキーを get して null を parseInt に渡している': '正解。populationsに"Other Oasis"キーは無くgetはnullを返し、Integer.parseInt(null)はNullPointerExceptionになります。', '出力文の文字列だけが間違っている': 'System.out.println自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'populationsには1件のデータがあり、件数の問題ではなく存在しないキーを参照していることが原因です。' }, fixOptionExplanations: { 'get した値が null でないか確認し、try/catch で変換失敗にも備える': '正解。nullチェックとtry/catchにより、欠損キーや不正な文字列でも安全に処理できます。', '条件を削除する': 'このコードには元々if文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の人口データを無視して固定文字列を出すと、正しい数値が表示されません。' }, impactOptionExplanations: { '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる': '正解。nullチェックとtry/catchにより、欠損や不正な値があっても安全に分岐して処理を続けられます。', '常に例外を出して停止する': '修正後はtry/catchで例外を捕捉して処理を続けるため、エラーで停止することはありません。', '題材データを使わなくなる': 'populationsのデータはそのまま使われ続けます。修正は値の確認方法だけです。' }, why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> populations = new HashMap<>();\n    populations.put("Siwa Oasis", "33000");\n    String popText = populations.get("Siwa Oasis");\n    try {\n      if (popText != null) System.out.println(Integer.parseInt(popText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const EGYPT_FACTS = allSpecs.map(makeFact);
export const EGYPT_ASSIGNMENTS = allSpecs.map(assignment);

export const EG_PY_DECODE = pyDecode.map(decode);
export const EG_PY_EXECUTE = pyExecute.map(execute);
export const EG_PY_DEBUG = pyDebug.map(debug);
export const EG_JS_DECODE = jsDecode.map(decode);
export const EG_JS_EXECUTE = jsExecute.map(execute);
export const EG_JS_DEBUG = jsDebug.map(debug);
export const EG_JAVA_DECODE = javaDecode.map(decode);
export const EG_JAVA_EXECUTE = javaExecute.map(execute);
export const EG_JAVA_DEBUG = javaDebug.map(debug);

export const EGYPT_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: EGYPT PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: EGYPT JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: EGYPT JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: EGYPT PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: EGYPT JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: EGYPT JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: EGYPT PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: EGYPT JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: EGYPT JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
