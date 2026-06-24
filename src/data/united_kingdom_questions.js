const SRC = {
  london: 'https://www.britannica.com/place/London',
  underground: 'https://www.britannica.com/topic/London-Underground',
  thames: 'https://www.britannica.com/place/Thames-River',
  nations: 'https://www.britannica.com/place/United-Kingdom',
  stonehenge: 'https://whc.unesco.org/en/list/373',
  westminster: 'https://whc.unesco.org/en/list/426',
  towerOfLondon: 'https://whc.unesco.org/en/list/488',
  bath: 'https://whc.unesco.org/en/list/428',
  britishMuseum: 'https://www.britannica.com/topic/British-Museum',
  royalObservatory: 'https://www.britannica.com/place/Royal-Greenwich-Observatory',
  railRoute: 'https://www.britannica.com/place/United-Kingdom',
  lakeDistrict: 'https://whc.unesco.org/en/list/422',
  maritimeGreenwich: 'https://whc.unesco.org/en/list/795',
  institutions: 'https://www.britannica.com/topic/British-Broadcasting-Corporation',
  poundSterling: 'https://www.britannica.com/topic/pound-sterling',
  postcode: 'https://www.britannica.com/place/United-Kingdom',
  cityAbbrev: 'https://www.britannica.com/place/United-Kingdom',
  dorsetDevonCoast: 'https://whc.unesco.org/en/list/1029',
  buckinghamPalace: 'https://www.britannica.com/topic/Buckingham-Palace',
  edinburgh: 'https://www.britannica.com/place/Edinburgh',
  flag: 'https://www.britannica.com/topic/flag-of-the-United-Kingdom',
  transport: 'https://www.britannica.com/place/United-Kingdom',
  kewGardens: 'https://whc.unesco.org/en/list/451',
  edinburghTowns: 'https://whc.unesco.org/en/list/728',
  blenheimPalace: 'https://whc.unesco.org/en/list/425',
  scienceFigures: 'https://www.nobelprize.org/prizes/medicine/1945/fleming/biographical/',
  fleming: 'https://www.nobelprize.org/prizes/medicine/1945/fleming/biographical/',
  severn: 'https://www.britannica.com/place/Severn-River',
  nationalGallery: 'https://www.britannica.com/topic/National-Gallery-art-museum-London',
  cardiff: 'https://www.britannica.com/place/Cardiff',
  giantsCauseway: 'https://whc.unesco.org/en/list/369',
  routeData: 'https://www.britannica.com/place/United-Kingdom',
  phone: 'https://www.britannica.com/place/United-Kingdom',
  twoCities: 'https://www.britannica.com/place/Edinburgh',
  museumLookup: 'https://www.britannica.com/topic/British-Museum',
  ironbridge: 'https://whc.unesco.org/en/list/371',
  westminsterAbbey: 'https://whc.unesco.org/en/list/426',
  britishMuseumYear: 'https://www.britannica.com/topic/British-Museum',
  undergroundYear: 'https://www.britannica.com/topic/London-Underground',
  regions: 'https://www.britannica.com/place/United-Kingdom',
  canterbury: 'https://whc.unesco.org/en/list/496',
  durham: 'https://whc.unesco.org/en/list/370',
  orkney: 'https://whc.unesco.org/en/list/514',
  newton: 'https://www.britannica.com/biography/Isaac-Newton',
  timezone: 'https://www.timeanddate.com/time/zones/gmt',
  undergroundSample: 'https://www.britannica.com/topic/London-Underground',
  scriptSample: 'https://www.britannica.com/topic/English-language',
  cityNation: 'https://www.britannica.com/place/United-Kingdom',
  researchSite: 'https://www.britannica.com/place/Royal-Greenwich-Observatory',
  museumVisitor: 'https://www.britannica.com/topic/British-Museum',
  pontcysyllte: 'https://whc.unesco.org/en/list/1303',
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
  return `gb:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

const FACT_DETAILS = {
  gb_py_d01: {
    backgroundJa: 'ロンドンはイギリスの首都で、テムズ川沿いに広がる世界最大級の国際都市です。',
    historyJa: '紀元43年頃、古代ローマ人が「ロンディニウム」として築いた都市が起源です。',
    episodeJa: '大ロンドン圏の人口は約900万人で、ロンドンには2,000年以上前のローマ城壁の遺構が今も街の一部に残っています。',
    keyPointsJa: ['紀元43年頃にローマが建設', '「ロンディニウム」が起源', '人口約900万人', 'ローマ城壁の遺構が現存'],
  },
  gb_py_d02: {
    backgroundJa: 'ロンドン地下鉄は世界初の地下鉄道で、「チューブ」の愛称で親しまれています。',
    historyJa: '1863年1月10日、メトロポリタン鉄道が世界初の地下鉄道として開業しました。',
    episodeJa: '当初は蒸気機関車が地下トンネルを走り、煙対策のため一部区間は開口部から排煙する工夫が施されていました。',
    keyPointsJa: ['1863年1月10日に開業', '世界初の地下鉄道', '当初は蒸気機関車を使用', '現在11路線・272駅'],
  },
  gb_py_d03: {
    backgroundJa: 'テムズ川はイングランド南部を流れる河川で、ロンドンを貫流する同国を代表する川です。',
    historyJa: '全長約346kmで、古代ローマ時代からロンドンの建設地として利用されてきました。',
    episodeJa: '川の名はケルト語の「広がる、流れる」を意味する語に由来するとされ、現在も観光船や水上タクシーが運航しています。',
    keyPointsJa: ['全長約346km', 'ロンドンを貫流', 'ケルト語起源の名前', '観光船・水上交通が発達'],
  },
  gb_py_d04: {
    backgroundJa: 'イギリス（United Kingdom）はイングランド・スコットランド・ウェールズ・北アイルランドの4つの構成国（ネイション）からなる主権国家です。',
    historyJa: '1707年にイングランドとスコットランドが連合し、1801年にアイルランドが加わり、1922年に北アイルランドを除く部分が分離しました。',
    episodeJa: '各構成国はそれぞれ独自の首都（ロンドン・エディンバラ・カーディフ・ベルファスト）とサッカー代表チームを持つなど、強い地域的アイデンティティを保っています。',
    keyPointsJa: ['1707年に英・スコットランドが連合', '1801年にアイルランド加入', '1922年に北アイルランドのみ残留', '4構成国がそれぞれ首都を持つ'],
  },
  gb_py_d05: {
    backgroundJa: 'ストーンヘンジはイングランド南部ウィルトシャーにある巨石記念物で、新石器時代から青銅器時代にかけて築かれました。',
    historyJa: '建設は約紀元前3000年頃に始まり、現在見られる巨石の配置は紀元前2500年頃に整えられたとされています。',
    episodeJa: '最大の石は重さ約25トンに達し、約240km離れたウェールズの採石場から運ばれた石も使われていることが分析で判明しています。',
    keyPointsJa: ['建設開始は紀元前3000年頃', '巨石配置は紀元前2500年頃', '最大の石は重さ約25トン', '1986年にユネスコ世界遺産登録'],
  },
  final_decode_GB_python_01: {
    backgroundJa: 'ウェストミンスター宮殿（国会議事堂）とウェストミンスター寺院は、イギリスの政治と王室儀礼の中心を担う世界遺産です。',
    historyJa: '寺院は1245年にヘンリー3世が再建を命じ、宮殿は1834年の火災後、1840〜1870年に現在の姿に再建されました。',
    episodeJa: 'ウェストミンスター寺院では1066年以降ほぼ全ての英国君主の戴冠式が行われ、宮殿の時計塔（ビッグベン）は1859年に完成しました。',
    keyPointsJa: ['寺院は1245年に再建', '宮殿は1840〜1870年に再建', '1066年以降の戴冠式の舞台', '1987年にユネスコ世界遺産登録'],
  },
  final_decode_GB_python_02: {
    backgroundJa: 'ロンドン塔はテムズ川岸に建つ城塞で、王室の宝物庫や牢獄として様々な役割を果たしてきました。',
    historyJa: '1078年頃、ウィリアム征服王の命で中心の「ホワイト・タワー」が建設されました。',
    episodeJa: '歴代の王族・貴族が幽閉・処刑された歴史を持ち、現在は「クラウン・ジュエル」と呼ばれる戴冠用宝飾品が展示されています。',
    keyPointsJa: ['1078年頃にホワイト・タワー建設', 'ウィリアム征服王が建設命令', '王族・貴族の幽閉地としても使用', '1988年にユネスコ世界遺産登録'],
  },
  final_decode_GB_python_03: {
    backgroundJa: 'バース市街はイングランド南西部の都市で、古代ローマの温泉施設と18世紀のジョージ王朝建築が共存する世界遺産です。',
    historyJa: '紀元60〜70年頃にローマ人が温泉施設「アクア・スリス」を建設し、18世紀に温泉保養地として再開発されました。',
    episodeJa: '小説家ジェイン・オースティンがこの街に住み、作品の舞台にもしたことで知られ、1987年にユネスコ世界遺産に登録されました。',
    keyPointsJa: ['紀元60〜70年頃にローマが温泉施設建設', '18世紀にジョージ王朝建築で再開発', 'ジェイン・オースティンの作品の舞台', '1987年にユネスコ世界遺産登録'],
  },
  gb_py_e01: {
    backgroundJa: '大英博物館はロンドンにある世界最大級の博物館で、800万点を超える人類史の収蔵品を持ちます。',
    historyJa: '1753年に医師ハンス・スローンの収集品を基に設立され、1759年に一般公開されました。',
    episodeJa: 'ロゼッタストーンやエルギン・マーブル（パルテノン彫刻）など、所有権をめぐり国際的な議論が続く収蔵品もあります。',
    keyPointsJa: ['1753年に設立', '1759年に一般公開', '収蔵品800万点超', 'ロゼッタストーンを所蔵'],
  },
  gb_py_e02: {
    backgroundJa: '王立グリニッジ天文台はロンドン郊外にある天文台で、本初子午線（経度0度）の基準として知られます。',
    historyJa: '1675年にチャールズ2世の命で設立され、1884年の国際会議でこの天文台を通る経線が世界の本初子午線に定められました。',
    episodeJa: '天文台の中庭には経度0度を示す真鍮の線が引かれ、観光客が線をまたいで写真を撮る名所になっています。',
    keyPointsJa: ['1675年に設立', '1884年に本初子午線に決定', '航海用の正確な時計開発を主導', '1997年にユネスコ世界遺産登録'],
  },
  gb_py_e03: {
    backgroundJa: 'イギリスの鉄道網は世界最古の鉄道システムで、現在はナショナル・レールが主要路線を運営しています。',
    historyJa: '1825年に世界初の公共鉄道（ストックトン・ダーリントン鉄道）が開業しました。',
    episodeJa: '高速鉄道計画HS2はロンドンとバーミンガムを結ぶ路線として進められており、既存路線も含めると総延長は約1万6,000kmに及びます。',
    keyPointsJa: ['1825年に世界初の公共鉄道', 'ストックトン・ダーリントン鉄道が最初', '総延長約1万6,000km', 'HS2計画が進行中'],
  },
  gb_py_e04: {
    backgroundJa: 'イングリッシュ・レイク・ディストリクトはイングランド北西部の湖水地方で、詩人ワーズワースが愛した景観です。',
    historyJa: '氷河期の地形が現在の湖や谷を形成し、19世紀にロマン主義の詩人たちがこの地を題材に作品を残しました。',
    episodeJa: '2017年にユネスコ世界遺産に登録され、絵本作家ビアトリクス・ポターもこの地で「ピーターラビット」シリーズの構想を練りました。',
    keyPointsJa: ['氷河期の地形が起源', 'ワーズワースら詩人が愛した', '2017年にユネスコ世界遺産登録', 'ビアトリクス・ポターと縁が深い'],
  },
  final_execute_GB_python_01: {
    backgroundJa: 'マリタイム・グリニッジはロンドン南東部の地区で、王立天文台や旧王立海軍学校など海事・天文学の歴史的建造物群を含む世界遺産です。',
    historyJa: '17〜18世紀にクリストファー・レンらが手がけた建築群が整備され、1997年にユネスコ世界遺産に登録されました。',
    episodeJa: '本初子午線（経度0度）がこの地区を通っており、地区内には経度0度の標示と国立海事博物館があります。',
    keyPointsJa: ['17〜18世紀に建築群が整備', '1997年にユネスコ世界遺産登録', '本初子午線が通る', 'クリストファー・レンが関与'],
  },
  final_execute_GB_python_02: {
    backgroundJa: '大英博物館、BBC、ナショナル・ギャラリーなどはイギリスを代表する文化機関です。',
    historyJa: 'BBC（英国放送協会）は1922年に設立され、1927年に国王による特許状を得て公共放送局となりました。',
    episodeJa: 'BBCは世界初の定期テレビ放送を1936年に開始し、現在も広告に依存しない受信許可料制度で運営されています。',
    keyPointsJa: ['BBCは1922年設立', '1936年に世界初の定期テレビ放送', '受信許可料制度で運営', '大英博物館は1753年設立'],
  },
  gb_py_b01: {
    backgroundJa: 'ポンド・スターリングはイギリスの公式通貨で、現存する通貨の中で最も古いとされる通貨の一つです。',
    historyJa: '「スターリング」という呼称は12世紀には使われていたとされ、ポンドという単位は8世紀のアングロサクソン時代に銀1ポンド分の貨を指す単位として始まりました。',
    episodeJa: '現存する通貨として継続使用期間が世界最長級とされ、補助単位ペンスは1971年の十進法化以前は1ポンド＝240ペンスでした。',
    keyPointsJa: ['起源は8世紀のアングロサクソン時代', '世界最古級の現存通貨', '1971年に十進法化', '「スターリング」は12世紀から使用'],
  },
  gb_py_b02: {
    backgroundJa: 'イギリスの郵便番号は文字と数字を組み合わせた独自の形式で、先頭に文字が来るため数値として扱えないデータです。',
    historyJa: 'イギリスの郵便番号制度は1959年にノリッジで試験導入され、1974年に全国展開が完了しました。',
    episodeJa: '形式は「SW1A 1AA」のように地域・地区・配達区域を表す文字と数字の組み合わせで、一つの番号が数軒〜十数軒という非常に細かい単位を示します。',
    keyPointsJa: ['1959年にノリッジで試験導入', '1974年に全国展開完了', '文字と数字の組み合わせ形式', '数軒単位の細かさで割り当て'],
  },
  gb_py_b03: {
    backgroundJa: 'イギリスの都市には自動車ナンバープレートの地域識別記号など、略号で区別される仕組みがあります。',
    historyJa: 'イギリスの現行ナンバープレート制度は2001年に導入され、最初の2文字が登録地域を示します。',
    episodeJa: 'ロンドンは「L」、エディンバラは「S」のように地域記号が割り当てられており、これらは都市そのものの正式な略号制度ではありません。',
    keyPointsJa: ['現行プレート制度は2001年導入', '最初の2文字が地域を示す', 'ロンドンは「L」系の記号', '都市の正式略号制度ではない'],
  },
  final_debug_GB_python_01: {
    backgroundJa: 'ドーセットと東デヴォン海岸（ジュラシック・コースト）は約1億8,500万年分の地層が連続して観察できる世界遺産です。',
    historyJa: '三畳紀・ジュラ紀・白亜紀の地層が連続して露出しており、2001年にユネスコ世界遺産に登録されました。',
    episodeJa: '19世紀の化石採集家メアリー・アニングがこの海岸で多くの恐竜・海生爬虫類の化石を発見し、古生物学の発展に大きく貢献しました。',
    keyPointsJa: ['約1億8,500万年分の地層', '2001年にユネスコ世界遺産登録', 'メアリー・アニングが化石発見', '三畳紀〜白亜紀の地層が連続'],
  },
  gb_js_d01: {
    backgroundJa: 'バッキンガム宮殿はロンドンにある英国君主の公式王宮です。',
    historyJa: '1703年に貴族の邸宅として建てられ、1837年にヴィクトリア女王が即位して以降、王室の公式住居となりました。',
    episodeJa: '衛兵交換式は観光名物として知られ、宮殿には775室（寝室240室を含む）があるとされています。',
    keyPointsJa: ['1703年に邸宅として建設', '1837年から王室の公式住居', '衛兵交換式が観光名物', '部屋数は775室とされる'],
  },
  gb_js_d02: {
    backgroundJa: 'エディンバラはスコットランドの首都で、エディンバラ城を中心とする旧市街と新市街が世界遺産に登録されています。',
    historyJa: 'エディンバラ城は11世紀には要塞として存在していたとされ、1437年から事実上の首都機能を持つようになりました。',
    episodeJa: '毎年8月に開催されるエディンバラ・フェスティバル・フリンジは世界最大の芸術祭で、1947年に始まりました。',
    keyPointsJa: ['11世紀から城が存在', '1437年から首都機能', 'フェスティバル・フリンジは1947年開始', '1995年にユネスコ世界遺産登録'],
  },
  gb_js_d03: {
    backgroundJa: 'ユニオンフラッグ（連合王国旗）は赤・白・青を基調とする旗で、3つの十字を組み合わせて作られています。',
    historyJa: '1606年にイングランドの聖ジョージ十字とスコットランドの聖アンドリュー十字を組み合わせた旗が制定され、1801年にアイルランドの聖パトリック十字が加わり現在の形になりました。',
    episodeJa: '非対称な配置の白い斜め線（カウンターチェンジ）が特徴で、上下を逆に掲げると「弔旗」のような誤った意味になるため掲揚方法に注意が必要とされます。',
    keyPointsJa: ['1606年に英・スコットランドの十字を統合', '1801年にアイルランドの十字を追加', '3つの十字の組み合わせ', '上下逆掲揚は誤りとされる'],
  },
  gb_js_d04: {
    backgroundJa: 'イギリスでは鉄道、地下鉄、バス、航空など多様な交通手段が利用されています。',
    historyJa: '世界初の公共鉄道は1825年に開業し、ロンドン地下鉄は1863年に開業しました。',
    episodeJa: 'ロンドンのブラックキャブ（タクシー）の運転手は「ナレッジ」と呼ばれる試験に合格する必要があり、習得に数年かかることもあります。',
    keyPointsJa: ['1825年に世界初の公共鉄道', '1863年に地下鉄開業', 'ブラックキャブには特別試験', '世界最古の鉄道システム'],
  },
  gb_js_d05: {
    backgroundJa: 'キュー王立植物園はロンドン南西部にある世界的な植物研究機関で、3万種を超える植物を所蔵しています。',
    historyJa: '1759年に王室の庭園として始まり、1840年に公共の植物園として開園しました。',
    episodeJa: 'パームハウス（温室）は1844〜1848年に建設されたガラスと鉄の構造で、当時の造船技術を応用した先進的な設計でした。',
    keyPointsJa: ['1759年に王室庭園として開始', '1840年に公共開園', 'パームハウスは1844〜1848年建設', '2003年にユネスコ世界遺産登録'],
  },
  final_decode_GB_javascript_01: {
    backgroundJa: 'エディンバラの旧市街と新市街は中世の旧市街と18世紀の都市計画による新市街が対照的に共存する世界遺産です。',
    historyJa: '新市街は1767年、建築家ジェイムズ・クレイグの設計案を基に建設が始まりました。',
    episodeJa: '旧市街の中世的な迷路状の街路と、新市街の整然としたジョージ王朝建築の対比が評価され、1995年にユネスコ世界遺産に登録されました。',
    keyPointsJa: ['新市街は1767年に建設開始', 'ジェイムズ・クレイグが設計', '旧市街と新市街の対比が特徴', '1995年にユネスコ世界遺産登録'],
  },
  final_decode_GB_javascript_02: {
    backgroundJa: 'ブレナム宮殿はオックスフォードシャーにあるバロック建築の宮殿で、チャーチル元首相の生誕地です。',
    historyJa: '1705〜1722年に第1代マールバラ公爵への褒賞として建設されました。',
    episodeJa: 'ウィンストン・チャーチルはこの宮殿で1874年に生まれ、1987年にユネスコ世界遺産に登録されました。',
    keyPointsJa: ['1705〜1722年に建設', 'マールバラ公爵への褒賞', 'チャーチルの生誕地', '1987年にユネスコ世界遺産登録'],
  },
  final_decode_GB_javascript_03: {
    backgroundJa: 'アイザック・ニュートン、アレクサンダー・フレミング、アラン・チューリングはイギリスの科学史を代表する人物です。',
    historyJa: 'ニュートンは1687年に『プリンキピア』を出版し、フレミングは1928年にペニシリンを発見し、チューリングは1936年に計算機科学の理論的基礎を築きました。',
    episodeJa: 'フレミングは培養皿の汚染という偶然からペニシリンを発見し、チューリングは第二次世界大戦中にエニグマ暗号の解読に貢献しました。',
    keyPointsJa: ['ニュートンは1687年に万有引力理論を発表', 'フレミングは1928年にペニシリン発見', 'チューリングは1936年に計算理論を提唱', 'チューリングは戦時中の暗号解読に貢献'],
  },
  gb_js_e01: {
    backgroundJa: 'アレクサンダー・フレミングは抗生物質ペニシリンを発見したスコットランド出身の細菌学者です。',
    historyJa: '1928年、培養していたブドウ球菌の皿にアオカビが混入し、その周囲で細菌が死滅していることに気づきペニシリンを発見しました。',
    episodeJa: '1945年にハワード・フローリー、エルンスト・チェインと共にノーベル生理学・医学賞を受賞し、ペニシリンは第二次世界大戦中の負傷兵治療に大きく貢献しました。',
    keyPointsJa: ['1928年にペニシリンを発見', '偶然の培養皿汚染がきっかけ', '1945年にノーベル賞受賞', '大戦中の負傷兵治療に貢献'],
  },
  gb_js_e02: {
    backgroundJa: 'セヴァーン川はイギリス最長の河川で、ウェールズに源を発しブリストル海峡に注ぎます。',
    historyJa: '全長約354kmで、河口部は世界でも有数の大きな潮位差（最大約15m）を持つことで知られています。',
    episodeJa: '河口にはセヴァーン・ボアと呼ばれる潮津波（高潮による逆流現象）が発生し、サーファーが波に乗るイベントも開催されます。',
    keyPointsJa: ['全長約354kmでUK最長', '潮位差は最大約15m', 'セヴァーン・ボアという現象', 'ウェールズに源を発する'],
  },
  gb_js_e03: {
    backgroundJa: 'ナショナル・ギャラリーはロンドンのトラファルガー広場にある国立美術館です。',
    historyJa: '1824年に保険業者ジョン・ジュリアス・アンガースタインの絵画38点を国が購入したことから設立されました。',
    episodeJa: '入館は無料で、ゴッホの「ひまわり」やファン・エイクの「アルノルフィーニ夫妻像」など2,300点以上の西洋絵画を所蔵しています。',
    keyPointsJa: ['1824年に設立', '当初は絵画38点から開始', '入館無料', '2,300点以上を所蔵'],
  },
  gb_js_e04: {
    backgroundJa: 'カーディフはウェールズの首都で、19世紀には世界最大級の石炭輸出港として栄えました。',
    historyJa: '1905年に都市の地位を得て、1955年に正式にウェールズの首都に定められました。',
    episodeJa: '最盛期の1913年には世界の石炭輸出量の約3分の1がカーディフ港を経由していたとされています。',
    keyPointsJa: ['1955年にウェールズの首都に', '1913年に世界石炭輸出の3分の1経由', '19世紀に港湾都市として発展', '1905年に都市の地位獲得'],
  },
  final_execute_GB_javascript_01: {
    backgroundJa: 'ジャイアンツ・コーズウェイは北アイルランド海岸にある玄武岩柱群で、火山活動によって形成された自然景観です。',
    historyJa: '約5,000万〜6,000万年前の火山活動で形成され、1986年にユネスコ世界遺産に登録されました。',
    episodeJa: '約4万本の六角形の玄武岩柱が連なり、巨人フィン・マックールが作った道という伝説が地名の由来となっています。',
    keyPointsJa: ['約5,000万〜6,000万年前に形成', '1986年にユネスコ世界遺産登録', '約4万本の玄武岩柱', '巨人フィン・マックールの伝説'],
  },
  final_execute_GB_javascript_02: {
    backgroundJa: 'イギリスの鉄道・港湾網は世界最古の鉄道システムと歴史的な港湾都市が組み合わさった輸送体系です。',
    historyJa: '世界初の公共鉄道は1825年に開業し、リバプール港は18〜19世紀に大西洋貿易の主要港として栄えました。',
    episodeJa: 'HS2高速鉄道計画はロンドンと中部・北部を結ぶ路線として進められており、既存路線の総延長は約1万6,000kmに及びます。',
    keyPointsJa: ['1825年に世界初の公共鉄道', 'リバプール港は大西洋貿易で繁栄', '総延長約1万6,000km', 'HS2計画が進行中'],
  },
  gb_js_b01: {
    backgroundJa: 'イギリスの電話番号は市外局番と加入者番号で構成され、先頭ゼロを含む形式です。',
    historyJa: 'イギリスの電話番号制度では市外局番がロンドンの「020」のように先頭ゼロを含む形式に統一されています。',
    episodeJa: '携帯電話番号は「07」で始まる11桁の番号が使われ、これらの先頭ゼロは数値として扱うと失われてしまいます。',
    keyPointsJa: ['ロンドンの市外局番は020', '携帯番号は07始まりの11桁', '先頭ゼロは文字列で保持が必要', '全国で統一された桁数制度'],
  },
  gb_js_b02: {
    backgroundJa: 'ロンドンとエディンバラはイギリスを代表する2都市で、それぞれイングランドとスコットランドの中心地です。',
    historyJa: 'ロンドンは紀元43年頃のローマ建設、エディンバラは11世紀の城塞建設にそれぞれ起源を持ちます。',
    episodeJa: '人口はロンドンが約900万人、エディンバラが約53万人で、エディンバラは毎年世界最大の芸術祭フェスティバル・フリンジが開催されます。',
    keyPointsJa: ['ロンドンは紀元43年頃起源', 'エディンバラは11世紀の城が起源', 'ロンドンは人口約900万人', 'エディンバラはフェスティバル開催地'],
  },
  gb_js_b03: {
    backgroundJa: '大英博物館は所蔵品データベースの参照例としてよく扱われる、世界最大級の博物館収蔵機関です。',
    historyJa: '1753年の設立以来、所蔵品の整理・目録化が進められてきました。',
    episodeJa: '所蔵品は800万点を超え、近年はオンラインコレクションの公開やデジタル化が進められています。',
    keyPointsJa: ['1753年設立', '所蔵品800万点超', 'オンライン公開が進む', '世界最大級の博物館'],
  },
  final_debug_GB_javascript_01: {
    backgroundJa: 'アイアンブリッジ峡谷はイングランド・シュロップシャー州にある産業革命発祥の地とされる世界遺産です。',
    historyJa: '1709年にエイブラハム・ダービー1世がコークスによる製鉄法を確立し、1779年に世界初の鉄橋「アイアンブリッジ」が架けられました。',
    episodeJa: 'この鉄橋は現在も歩行者専用橋として残り、1986年にイギリス最初のユネスコ世界遺産6件の一つとして登録されました。',
    keyPointsJa: ['1709年にコークス製鉄法を確立', '1779年に世界初の鉄橋を建設', '1986年にユネスコ世界遺産登録', '産業革命発祥の地とされる'],
  },
  gb_java_d01: {
    backgroundJa: 'ウェストミンスター寺院はロンドンにあるゴシック建築の寺院で、英国君主の戴冠式が行われる場所です。',
    historyJa: '960年頃に最初の修道院が建てられ、1245年にヘンリー3世が現在のゴシック様式での再建を命じました。',
    episodeJa: '1066年のウィリアム征服王以降、ほぼすべての英国君主の戴冠式がここで行われ、多くの王族・著名人が埋葬されています。',
    keyPointsJa: ['960年頃に最初の修道院', '1245年にヘンリー3世が再建命令', '1066年以降の戴冠式の舞台', '1987年にユネスコ世界遺産登録'],
  },
  gb_java_d02: {
    backgroundJa: '大英博物館はロンドンにある世界最大級の博物館で、人類の歴史と文化を網羅する収蔵品を持ちます。',
    historyJa: '1753年、医師ハンス・スローンの収集品の購入により設立が決定し、1759年に一般公開されました。',
    episodeJa: '世界初の国立公共博物館とされ、入館は設立当初から現在まで無料で続けられています。',
    keyPointsJa: ['1753年設立決定', '1759年に一般公開', '世界初の国立公共博物館', '入館無料が継続'],
  },
  gb_java_d03: {
    backgroundJa: 'ロンドン地下鉄は1863年に開業した世界初の地下鉄道です。',
    historyJa: '1863年1月10日にメトロポリタン鉄道のパディントン-ファリンドン間が開業しました。',
    episodeJa: '開業初日には約3万8,000人が利用し、当初は蒸気機関車が地下トンネルを走行していました。',
    keyPointsJa: ['1863年1月10日に開業', '開業初日3万8,000人利用', '当初は蒸気機関車', '世界初の地下鉄道'],
  },
  gb_java_d04: {
    backgroundJa: 'イギリスでは鉄道、地下鉄、バス、フェリーなど多様な交通手段が利用されています。',
    historyJa: '世界初の公共鉄道は1825年、世界初の地下鉄は1863年にそれぞれ開業しました。',
    episodeJa: 'ロンドンのバスは「ルートマスター」と呼ばれる二階建てバスが長年運行され、現在は新型のニュー・バス・フォー・ロンドンが導入されています。',
    keyPointsJa: ['1825年に世界初の公共鉄道', '1863年に世界初の地下鉄', '二階建てバスが象徴的', '新型バスが導入されている'],
  },
  gb_java_d05: {
    backgroundJa: 'イギリスはイングランド・スコットランド・ウェールズ・北アイルランドの4つの構成国からなります。',
    historyJa: '1707年の連合法でイングランドとスコットランドが統合され、1801年にアイルランドが加わりました。',
    episodeJa: '1922年にアイルランド自由国が分離した結果、北アイルランドのみが連合王国に残り、現在の4構成国体制が確立しました。',
    keyPointsJa: ['1707年に英・スコットランド統合', '1801年にアイルランド加入', '1922年に北部のみ残留', '4構成国体制が確立'],
  },
  final_decode_GB_java_01: {
    backgroundJa: 'カンタベリー大聖堂、聖アウグスティヌス修道院、聖マーティン教会は、イングランドへのキリスト教伝来を伝える世界遺産です。',
    historyJa: '597年、教皇グレゴリウス1世の使者聖アウグスティヌスがカンタベリーに到着し、イングランドへの本格的なキリスト教布教が始まりました。',
    episodeJa: '聖マーティン教会は現存する英語圏最古の使用中の教会堂とされ、1988年にこの3施設がユネスコ世界遺産に登録されました。',
    keyPointsJa: ['597年に聖アウグスティヌスが到着', '英国国教会の精神的中心地', '聖マーティン教会は英語圏最古級', '1988年にユネスコ世界遺産登録'],
  },
  final_decode_GB_java_02: {
    backgroundJa: 'ダラム城と大聖堂は北イングランドにあるノルマン様式建築群で、聖カスバートの聖遺物を祀る大聖堂が中心です。',
    historyJa: '城は1072年にウィリアム征服王の命で建設が始まり、大聖堂は1093年から建設されました。',
    episodeJa: '大聖堂のリブ・ヴォールト天井は後のゴシック建築様式の先駆けとされ、1986年にユネスコ世界遺産に登録されました。',
    keyPointsJa: ['城は1072年に建設開始', '大聖堂は1093年に建設開始', 'ゴシック建築の先駆けとされる', '1986年にユネスコ世界遺産登録'],
  },
  final_decode_GB_java_03: {
    backgroundJa: '新石器時代のオークニーはスコットランド北部の島々にある先史時代の遺跡群で、巨石記念物と集落跡を含みます。',
    historyJa: '主要な遺跡は紀元前3000〜2000年頃に築かれ、1999年にユネスコ世界遺産に登録されました。',
    episodeJa: 'スカラ・ブレイの集落は1850年の暴風で砂丘が崩れて偶然発見され、石造りの家具まで5,000年前の姿で保存されていました。',
    keyPointsJa: ['紀元前3000〜2000年頃に築造', '1999年にユネスコ世界遺産登録', 'スカラ・ブレイは1850年に発見', '石造り家具が現存'],
  },
  gb_java_e01: {
    backgroundJa: 'アイザック・ニュートンは万有引力の法則や運動の法則を確立したイギリスの科学者です。',
    historyJa: '1687年に『自然哲学の数学的諸原理（プリンキピア）』を出版し、古典力学の基礎を築きました。',
    episodeJa: 'リンゴが木から落ちるのを見て万有引力を思いついたという逸話が有名ですが、本人の記述によれば着想のきっかけの一つに過ぎないとされています。',
    keyPointsJa: ['1687年に『プリンキピア』出版', '万有引力・運動の法則を確立', 'リンゴの逸話が有名', '古典力学の基礎を築いた'],
  },
  gb_java_e02: {
    backgroundJa: 'イギリスは国土全体でグリニッジ標準時（GMT、UTC+0）を基準とする標準時を使用しています。',
    historyJa: '1884年の国際会議でグリニッジ天文台を通る経線が本初子午線（経度0度）に定められました。',
    episodeJa: '夏季（3月末〜10月末）にはイギリス夏時間（BST、UTC+1）に移行する制度が1916年から導入されています。',
    keyPointsJa: ['1884年に本初子午線を決定', '標準時はUTC+0（GMT）', '夏季はBST（UTC+1）に移行', '1916年からサマータイム導入'],
  },
  gb_java_e03: {
    backgroundJa: 'ロンドン地下鉄は11路線・272駅からなる世界初の地下鉄道網です。',
    historyJa: '1863年に開業し、現在の路線網は20世紀前半までに大部分が整備されました。',
    episodeJa: '路線図は1933年にハリー・ベックが考案したデザインが基になっており、地理的な正確さよりも分かりやすさを重視した図式として世界中の地下鉄図に影響を与えました。',
    keyPointsJa: ['1863年開業', '11路線・272駅', '路線図は1933年にベックが考案', '世界の地下鉄図に影響'],
  },
  gb_java_e04: {
    backgroundJa: '英語はイギリス発祥のゲルマン語系言語で、現在は世界で最も広く使われる言語の一つです。',
    historyJa: '5〜6世紀にアングロサクソン人が持ち込んだ言語を起源とし、1066年のノルマン征服でフランス語の影響を強く受けました。',
    episodeJa: '現代英語の語彙の多くはフランス語・ラテン語起源であり、これはノルマン征服後の支配層の言語が影響したためとされています。',
    keyPointsJa: ['5〜6世紀のアングロサクソン語が起源', '1066年のノルマン征服で仏語の影響', '語彙の多くが仏・羅起源', '世界で最も広く使われる言語の一つ'],
  },
  final_execute_GB_java_01: {
    backgroundJa: 'イギリスの主要都市はそれぞれイングランド・スコットランド・ウェールズ・北アイルランドのいずれかに属します。',
    historyJa: '各構成国の首都（ロンドン・エディンバラ・カーディフ・ベルファスト）はそれぞれ異なる時代に行政の中心となりました。',
    episodeJa: 'ロンドンの人口は約900万人で他の構成国首都を大きく上回り、4都市合わせるとイギリス全人口の約5分の1が集中しています。',
    keyPointsJa: ['4構成国にそれぞれ首都がある', 'ロンドンが人口最大', '4都市で人口の約5分の1', '各都市が異なる時代に中心化'],
  },
  final_execute_GB_java_02: {
    backgroundJa: 'イギリスは王立グリニッジ天文台など、歴史的な科学研究機関を多数持っています。',
    historyJa: '王立協会は1660年に設立された世界最古の科学学会の一つです。',
    episodeJa: '王立協会の会員にはニュートン、ダーウィン、ホーキングなど時代を代表する科学者が名を連ね、現在も科学研究の助成・評価を行っています。',
    keyPointsJa: ['王立協会は1660年設立', '世界最古級の科学学会', 'ニュートンらが会員だった', '現在も研究助成を実施'],
  },
  gb_java_b01: {
    backgroundJa: 'イギリスの鉄道駅には識別用の駅コード（CRSコード）が使われ、これは文字列として保持すべきデータです。',
    historyJa: 'CRSコード（3文字の駅コード）は1970年代の鉄道予約システム導入とともに整備されました。',
    episodeJa: 'ロンドンのキングス・クロス駅は「KGX」、エディンバラ・ウェイバリー駅は「EDB」のように、駅名に基づく3文字略号が使われています。',
    keyPointsJa: ['CRSコードは1970年代に整備', 'キングス・クロスは「KGX」', '予約システムで現在も使用', '3文字の略号形式'],
  },
  gb_java_b02: {
    backgroundJa: 'イギリスの郵便番号は文字と数字を組み合わせた形式で、先頭が文字となる先頭ゼロとは別種の保持上の注意点があります。',
    historyJa: 'イギリスの郵便番号制度は1959年に試験導入され、1974年に全国展開されました。',
    episodeJa: '形式は地域記号＋数字＋スペース＋数字＋文字2つ（例：SW1A 1AA）で構成され、データとして扱う際は常に文字列として保持する必要があります。',
    keyPointsJa: ['1959年に試験導入', '1974年に全国展開', '文字と数字の混在形式', '常に文字列として扱う必要'],
  },
  gb_java_b03: {
    backgroundJa: '大英博物館は世界で最も来館者数の多い博物館の一つで、来館者数データの集計例としてよく扱われます。',
    historyJa: '1759年の一般公開以来、来館者数の記録が続けられてきました。',
    episodeJa: '2023年には年間来館者数が約580万人に達し、入館無料の博物館として世界トップクラスの来館者数を記録しています。',
    keyPointsJa: ['1759年一般公開', '2023年は年間約580万人', '入館無料を継続', '世界トップクラスの来館者数'],
  },
  final_debug_GB_java_01: {
    backgroundJa: 'ポントカサステ水路橋と運河は北ウェールズにある運河橋で、産業革命期の土木技術の傑作とされる世界遺産です。',
    historyJa: '1795〜1805年にトーマス・テルフォードとウィリアム・ジェソップにより建設されました。',
    episodeJa: '高さ約38m、長さ約307mで世界最長・最高の運河水路橋とされ、鋳鉄製の水路に今も狭舟（ナローボート）が航行しています。',
    keyPointsJa: ['1795〜1805年に建設', 'テルフォードとジェソップが設計', '世界最長・最高の運河水路橋', '2009年にユネスコ世界遺産登録'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、イギリス（United Kingdom）の歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'GB',
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
    countryId: 'GB',
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
  { id: 'gb_py_d01', languageId: 'python', world: 'decode', title: 'London as capital', titleJa: 'ロンドン（首都）', category: 'geography-capital', objective: 'strings', source: SRC.london, summaryJa: 'ロンドンはイギリスの首都です。', prompt: 'ロンドンはイギリスの首都です。下のコードを実行すると The capital of the United Kingdom is London. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("The capital of the United Kingdom is " + capital + ".")', answer: '"London"', expectedOutput: 'The capital of the United Kingdom is London.', hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"London" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'gb_py_d02', languageId: 'python', world: 'decode', title: 'London Underground opening year', titleJa: 'ロンドン地下鉄の開通年', category: 'history-infrastructure', objective: 'integers', source: SRC.underground, summaryJa: 'ロンドン地下鉄は1863年に開通しました。', prompt: '年が1863のとき Underground:1863 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Underground:{year}"\nprint(label)', answer: '1863', expectedOutput: 'Underground:1863', hint: '整数は引用符なしで書きます。', explanation: 'year に1863を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'gb_py_d03', languageId: 'python', world: 'decode', title: 'River Thames label', titleJa: 'テムズ川', category: 'geography-nature', objective: 'condition', source: SRC.thames, summaryJa: 'テムズ川はロンドンと結びつく河川です。', prompt: '河川名が Thames のとき river と表示されるよう、if の条件を完成させてください。', code: 'river = "Thames"\nif ___BLANK___:\n    print("river")\nelse:\n    print("other")', answer: 'river == "Thames"', expectedOutput: 'river', hint: '文字列が完全に一致するか == で比較します。', explanation: 'river の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'gb_py_d04', languageId: 'python', world: 'decode', title: 'United Kingdom component-country labels', titleJa: 'イギリスを構成する地域のラベル', category: 'geography', objective: 'list', source: SRC.nations, summaryJa: 'サンプルとして England、Scotland、Wales、Northern Ireland のラベルを扱います。', prompt: 'リストから Wales を取り出して表示するよう、添字を埋めてください。', code: 'nations = ["England", "Scotland", "Wales"]\nprint(nations[___BLANK___])', answer: '2', expectedOutput: 'Wales', hint: 'Python のリストは0番目から数えます。', explanation: 'Wales はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'gb_py_d05', languageId: 'python', world: 'decode', title: 'Stonehenge lookup', titleJa: 'ストーンヘンジ', category: 'world-heritage', objective: 'dictionary', source: SRC.stonehenge, summaryJa: 'ストーンヘンジ、エイヴベリーと関連遺跡群はイギリスにある世界遺産です。', prompt: '辞書から category を取り出して heritage と表示されるよう、キーを埋めてください。', code: 'site = {"name": "Stonehenge", "category": "heritage"}\nprint(site[___BLANK___])', answer: '"category"', expectedOutput: 'heritage', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"category" キーの値が heritage です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_GB_python_01', languageId: 'python', world: 'decode', title: 'Palace of Westminster and Westminster Abbey', titleJa: 'ウェストミンスター宮殿とウェストミンスター寺院', category: 'world-heritage', objective: 'function', source: SRC.westminster, summaryJa: 'ウェストミンスター宮殿とウェストミンスター寺院、セント・マーガレット教会はイギリスにある世界遺産です。', prompt: '関数と条件を使い、city が London のときだけ Westminster:London と表示するよう空欄を埋めてください。', code: 'name = "Westminster"\ncity = "London"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"London"', expectedOutput: 'Westminster:London', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が London と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_GB_python_02', languageId: 'python', world: 'decode', title: 'Tower of London', titleJa: 'ロンドン塔', category: 'world-heritage', objective: 'loop', source: SRC.towerOfLondon, summaryJa: 'ロンドン塔はイギリスにある世界遺産です。', prompt: 'city が London の遺産名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'sites = [\n    {"name": "Tower of London", "city": "London"},\n    {"name": "Other", "city": "Bath"}\n]\nfor site in sites:\n    if ___BLANK___:\n        print(site["name"])', answer: 'site["city"] == "London"', expectedOutput: 'Tower of London', hint: '各辞書の city キーを比較します。', explanation: 'Tower of London の city だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_GB_python_03', languageId: 'python', world: 'decode', title: 'City of Bath', titleJa: 'バース市街', category: 'world-heritage', objective: 'dictionary', source: SRC.bath, summaryJa: 'バース市街はイギリスにある世界遺産です。', prompt: '辞書と関数を使い、Bath:heritage city と表示するキーを埋めてください。', code: 'city = {"name": "Bath", "type": "heritage city"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(city))', answer: '"type"', expectedOutput: 'Bath:heritage city', hint: 'heritage city を取り出すキーを選びます。', explanation: '"type" キーの値が heritage city です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'gb_py_e01', languageId: 'python', world: 'execute', title: 'British Museum', titleJa: '大英博物館', category: 'museum', objective: 'function', source: SRC.britishMuseum, summaryJa: '大英博物館は1753年の議会法によって設立され、1759年に開館しました。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def museum_label(name, year):\n    return f"{name}:{year}"\nprint(museum_label("British Museum", 1759))', options: ['British Museum:1759', '1759:British Museum', 'British Museum', 'Error'], answer: 'British Museum:1759', expectedOutput: 'British Museum:1759', hint: 'return の f-string で name と year の順番を見ます。', explanation: 'name が先、year が後ろなので British Museum:1759 です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'gb_py_e02', languageId: 'python', world: 'execute', title: 'Royal Observatory Greenwich', titleJa: '王立グリニッジ天文台', category: 'science-history', objective: 'dictionary', source: SRC.royalObservatory, summaryJa: '王立グリニッジ天文台は本初子午線と結びつく施設です。', prompt: '辞書 lookup の結果を選んでください。', code: 'observatory = {"name": "Royal Observatory", "concept": "Prime Meridian"}\nprint(observatory["concept"])', options: ['Prime Meridian', 'Royal Observatory', 'London', 'concept'], answer: 'Prime Meridian', expectedOutput: 'Prime Meridian', hint: '"concept" キーの値を見ます。', explanation: 'observatory["concept"] は Prime Meridian を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'gb_py_e03', languageId: 'python', world: 'execute', title: 'UK rail route sample stops', titleJa: 'イギリスの鉄道路線サンプル停車地', category: 'transport', objective: 'loop', source: SRC.railRoute, summaryJa: 'サンプルとして London、Birmingham などの鉄道停車地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["London", "Birmingham"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['London|Birmingham', 'Birmingham|London', 'London|', 'Birmingham'], answer: 'London|Birmingham', expectedOutput: 'London|Birmingham', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'London、Birmingham の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'gb_py_e04', languageId: 'python', world: 'execute', title: 'Lake District records', titleJa: 'イングリッシュ・レイク・ディストリクト', category: 'world-heritage-nature', objective: 'loop', source: SRC.lakeDistrict, summaryJa: 'イングリッシュ・レイク・ディストリクトはイギリスにある世界遺産です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Lake District", "natural": True},\n    {"name": "Other", "natural": False}\n]\nselected = [r["name"] for r in records if r["natural"]]\nprint(selected[0])', options: ['Lake District', 'Other', 'True', 'False'], answer: 'Lake District', expectedOutput: 'Lake District', hint: 'natural が True の辞書だけ残します。', explanation: 'Lake District の natural だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_GB_python_01', languageId: 'python', world: 'execute', title: 'Maritime Greenwich records', titleJa: 'マリタイム・グリニッジのレコード', category: 'world-heritage', objective: 'loop', source: SRC.maritimeGreenwich, summaryJa: 'マリタイム・グリニッジはイギリスにある世界遺産です。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "kind": "maritime", "period": 200},\n    {"name": "Other", "kind": "park", "period": 100},\n    {"name": "Site B", "kind": "maritime", "period": 50}\n]\nselected = sorted([r for r in records if r["kind"] == "maritime"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと period の昇順です。', explanation: 'maritime は Site B(50) と Site A(200) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_GB_python_02', languageId: 'python', world: 'execute', title: 'United Kingdom cultural institutions dataset', titleJa: 'イギリスの文化機関データセット', category: 'culture', objective: 'dictionary', source: SRC.institutions, summaryJa: 'サンプルとして British Museum、Royal Society、BBC、National Gallery を扱います。', prompt: '辞書とリストから london が True の件数を集計した結果を選んでください。', code: 'institutions = [\n    {"name": "British Museum", "london": True},\n    {"name": "National Gallery", "london": True},\n    {"name": "Royal Society", "london": False},\n    {"name": "BBC", "london": False}\n]\ncount = sum(1 for i in institutions if i["london"])\nprint(count)', options: ['2', '4', '1', 'British Museum'], answer: '2', expectedOutput: '2', hint: 'london が True の辞書だけ数えます。', explanation: 'British Museum、National Gallery の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'gb_py_b01', languageId: 'python', world: 'debug', title: 'Pound sterling formatting', titleJa: 'ポンド・スターリングの表示', category: 'finance', objective: 'strings', source: SRC.poundSterling, summaryJa: 'ポンド・スターリングはイギリスの通貨です。', prompt: '金額を 10.50 GBP と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " GBP")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 GBP と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} GBP")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'gb_py_b02', languageId: 'python', world: 'debug', title: 'UK postcode-style labels', titleJa: 'イギリス郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postcode, summaryJa: 'サンプルの郵便番号は先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号風コードを表示するコードです。数値保存の不具合を直します。', code: 'postal_code = 12\nprint(postal_code)', cause: '郵便番号風コードを数値として保存すると先頭ゼロを保持できない', fix: '郵便番号風コードを最初から文字列として保存する', impact: '先頭ゼロを含むコードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postal_code = "0012"\nprint(postal_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。' },
  { id: 'gb_py_b03', languageId: 'python', world: 'debug', title: 'UK city abbreviation lookup', titleJa: '都市略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.cityAbbrev, summaryJa: 'サンプルとして LON、EDI、CAR、BEL、MAN などの都市略号を扱います。', prompt: '略号 CAR から都市名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"LON": "London", "EDI": "Edinburgh"}\ncode = "CAR"\nprint(abbreviations[code])', cause: '辞書に CAR のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"LON": "London", "EDI": "Edinburgh", "CAR": "Cardiff"}\ncode = "CAR"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'CAR というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_GB_python_01', languageId: 'python', world: 'debug', title: 'Dorset and East Devon Coast', titleJa: 'ドーセットと東デヴォン海岸', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.dorsetDevonCoast, summaryJa: 'ドーセットと東デヴォン海岸はイギリスにある世界遺産です。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Dorset Coast", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["sample_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'sample_count がない辞書でも record["sample_count"] を直接読んでいる', fix: 'record.get("sample_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Dorset Coast", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("sample_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に sample_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'gb_js_d01', languageId: 'javascript', world: 'decode', title: 'Buckingham Palace in London', titleJa: 'バッキンガム宮殿（ロンドン）', category: 'architecture', objective: 'object', source: SRC.buckinghamPalace, summaryJa: 'バッキンガム宮殿はロンドンにあります。', prompt: 'オブジェクトから city を取り出して London と表示されるよう、空欄を埋めてください。', code: 'const palace = { name: "Buckingham Palace", city: "London" };\nconsole.log(palace.___BLANK___);', answer: 'city', expectedOutput: 'London', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'palace.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'gb_js_d02', languageId: 'javascript', world: 'decode', title: 'Edinburgh as Scotland’s capital', titleJa: 'スコットランドの首都エディンバラ', category: 'geography-capital', objective: 'strings', source: SRC.edinburgh, summaryJa: 'エディンバラはスコットランドの首都です。', prompt: 'テンプレートリテラルで Edinburgh:Scotland と表示されるよう空欄を埋めてください。', code: 'const city = "Edinburgh";\nconst country = ___BLANK___;\nconsole.log(`${city}:${country}`);', answer: '"Scotland"', expectedOutput: 'Edinburgh:Scotland', hint: 'country に入る文字列を引用符付きで書きます。', explanation: '"Scotland" を入れると ${country} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'gb_js_d03', languageId: 'javascript', world: 'decode', title: 'Union Flag colors', titleJa: 'ユニオンフラッグの色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'ユニオンフラッグは赤・白・青の3色で構成されています。', prompt: '配列から blue を取り出す添字を埋めてください。', code: 'const colors = ["red", "white", "blue"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'blue', hint: '配列は0番目から数えます。', explanation: 'blue は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'gb_js_d04', languageId: 'javascript', world: 'decode', title: 'UK transport mode labels', titleJa: 'イギリスの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'イギリスには鉄道、地下鉄、フェリー、バスなどの交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'gb_js_d05', languageId: 'javascript', world: 'decode', title: 'Royal Botanic Gardens, Kew', titleJa: 'キュー王立植物園', category: 'world-heritage', objective: 'loop', source: SRC.kewGardens, summaryJa: 'キュー王立植物園はイギリスにある世界遺産です。', prompt: 'for...of で city が London の庭園だけを表示するよう、条件の空欄を埋めてください。', code: 'const gardens = [\n  { name: "Kew Gardens", city: "London" },\n  { name: "Other", city: "Bath" }\n];\nfor (const garden of gardens) {\n  if (___BLANK___) console.log(garden.name);\n}', answer: 'garden.city === "London"', expectedOutput: 'Kew Gardens', hint: '各 garden の city を比較します。', explanation: 'Kew Gardens の city だけが London なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_GB_javascript_01', languageId: 'javascript', world: 'decode', title: 'Old and New Towns of Edinburgh', titleJa: 'エディンバラの旧市街と新市街', category: 'world-heritage', objective: 'array', source: SRC.edinburghTowns, summaryJa: 'エディンバラの旧市街と新市街はイギリスにある世界遺産です。', prompt: 'array methods で edinburgh を含む名前を取り出してください。', code: 'const cities = ["bath", "edinburgh-towns", "london"];\nconst result = cities.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"edinburgh"', expectedOutput: 'edinburgh-towns', hint: 'includes に探したい部分文字列を渡します。', explanation: '"edinburgh" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_GB_javascript_02', languageId: 'javascript', world: 'decode', title: 'Blenheim Palace', titleJa: 'ブレナム宮殿', category: 'world-heritage', objective: 'object', source: SRC.blenheimPalace, summaryJa: 'ブレナム宮殿はイギリスにある世界遺産です。', prompt: 'find で Blenheim の record を探す条件を埋めてください。', code: 'const records = [{name:"Tower", kind:"castle"}, {name:"Blenheim", kind:"palace"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.kind);', answer: '"Blenheim"', expectedOutput: 'palace', hint: 'name と一致する文字列を書きます。', explanation: 'Blenheim の record が見つかり、kind が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_GB_javascript_03', languageId: 'javascript', world: 'decode', title: 'UK science and computing figures', titleJa: 'イギリスの科学・計算機科学分野のサンプル', category: 'science-culture', objective: 'class', source: SRC.scienceFigures, summaryJa: 'サンプルとして Alexander Fleming、Ada Lovelace、Alan Turing を扱います。', prompt: 'class のインスタンスを map して Fleming:medicine と表示してください。', code: 'class Figure {\n  constructor(name, field) { this.name = name; this.field = field; }\n}\nconst items = [new Figure("Fleming", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.field}`).join(","));', answer: '"medicine"', expectedOutput: 'Fleming:medicine', hint: 'constructor の field に入る文字列です。', explanation: 'field に medicine が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'gb_js_e01', languageId: 'javascript', world: 'execute', title: 'Alexander Fleming', titleJa: 'アレクサンダー・フレミング', category: 'science-history', objective: 'array', source: SRC.fleming, summaryJa: 'アレクサンダー・フレミングは1945年にノーベル生理学・医学賞を受賞しました。', prompt: 'map と join の出力を選んでください。', code: 'const names = ["fleming"];\nconst label = names.map(n => n.toUpperCase()).join("-");\nconsole.log(label);', options: ['FLEMING', 'fleming', 'F-L', 'Fleming'], answer: 'FLEMING', expectedOutput: 'FLEMING', hint: '各要素を大文字化します。', explanation: 'fleming が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'gb_js_e02', languageId: 'javascript', world: 'execute', title: 'River Severn sample segments', titleJa: 'セヴァーン川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.severn, summaryJa: 'セヴァーン川はイギリスと結びつく河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 40, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['90', '70', '30', '304020'], answer: '90', expectedOutput: '90', hint: '数値を左から足していきます。', explanation: '30 + 40 + 20 = 90 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'gb_js_e03', languageId: 'javascript', world: 'execute', title: 'National Gallery', titleJa: 'ナショナル・ギャラリー', category: 'museum', objective: 'object', source: SRC.nationalGallery, summaryJa: 'ナショナル・ギャラリーはロンドンにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const gallery = { city: "London", collections: ["paintings", "drawings"] };\nlet result = gallery.city;\nfor (const item of gallery.collections) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['London:paintings:drawings', 'paintings:drawings:London', 'London', 'drawings:paintings'], answer: 'London:paintings:drawings', expectedOutput: 'London:paintings:drawings', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに paintings、drawings が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'gb_js_e04', languageId: 'javascript', world: 'execute', title: 'Cardiff city label', titleJa: 'ウェールズの首都カーディフ', category: 'geography-capital', objective: 'function', source: SRC.cardiff, summaryJa: 'カーディフはウェールズの首都です。', prompt: '関数と条件の戻り値を選んでください。', code: 'function cityLabel(country) {\n  return country === "Wales" ? "Cardiff" : "other";\n}\nconsole.log(cityLabel("Wales"));', options: ['Cardiff', 'other', 'Wales', 'true'], answer: 'Cardiff', expectedOutput: 'Cardiff', hint: '"Wales" === "Wales" の判定を見ます。', explanation: '条件が true なので "Cardiff" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_GB_javascript_01', languageId: 'javascript', world: 'execute', title: 'Giant’s Causeway and Causeway Coast', titleJa: 'ジャイアンツ・コーズウェイとコーズウェイ海岸', category: 'world-heritage-nature', objective: 'array', source: SRC.giantsCauseway, summaryJa: 'ジャイアンツ・コーズウェイとコーズウェイ海岸はイギリスにある世界遺産です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const sites = [\n  { name: "Site A", coastal: true, area: 5 },\n  { name: "Other", coastal: false, area: 3 },\n  { name: "Site B", coastal: true, area: 2 }\n];\nconst names = sites.filter(s => s.coastal).map(s => s.name).sort();\nconsole.log(names.join(">"));', options: ['Site A>Site B', 'Site B>Site A', 'Other>Site A', 'Other>Site B>Site A'], answer: 'Site A>Site B', expectedOutput: 'Site A>Site B', hint: 'coastal で絞ったあと、名前をアルファベット順にします。', explanation: 'Site A と Site B が残り、sort で Site A が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_GB_javascript_02', languageId: 'javascript', world: 'execute', title: 'UK rail and port sample data', titleJa: 'イギリスの鉄道・港湾サンプルデータ', category: 'transport', objective: 'object', source: SRC.routeData, summaryJa: 'サンプルとして London 鉄道と Liverpool 港湾のデータを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"London", segments:[2,3]}, {name:"Liverpool", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'London-Liverpool'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'London は5、Liverpool は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'gb_js_b01', languageId: 'javascript', world: 'debug', title: 'UK phone-number formatting', titleJa: 'イギリスの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてイギリスの電話番号は11桁で構成されるものとして扱います。', prompt: '11桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "02079460000";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく整形できる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "02079460000";\nif (digits.length === 11) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が10のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'gb_js_b02', languageId: 'javascript', world: 'debug', title: 'London and Edinburgh labels', titleJa: 'ロンドンとエディンバラ', category: 'geography-city', objective: 'object', source: SRC.twoCities, summaryJa: 'ロンドンとエディンバラはイギリスの主要都市です。', prompt: 'major が true の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "London", major: true }, { name: "Edinburgh", major: true }];\nconst labels = cities.filter(city => city.large === true).map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには major があるのに large を参照している', fix: 'city.major === true に修正する', impact: 'London と Edinburgh の両方を正しく選べる', why: '存在しない large は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "London", major: true }, { name: "Edinburgh", major: true }];\nconst labels = cities.filter(city => city.major === true).map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'gb_js_b03', languageId: 'javascript', world: 'debug', title: 'Museum record lookup', titleJa: '博物館レコードの参照', category: 'museum', objective: 'object', source: SRC.museumLookup, summaryJa: 'サンプルの博物館データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Museum" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Museum" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_GB_javascript_01', languageId: 'javascript', world: 'debug', title: 'Ironbridge Gorge', titleJa: 'アイアンブリッジ峡谷', category: 'world-heritage-industry', objective: 'object', source: SRC.ironbridge, summaryJa: 'アイアンブリッジ峡谷はイギリスにある世界遺産です。', prompt: '峡谷のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Ironbridge Gorge", region: "Shropshire", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.region);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.region ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Ironbridge Gorge", region: "Shropshire", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.region ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'gb_java_d01', languageId: 'java', world: 'decode', title: 'Westminster Abbey in London', titleJa: 'ウェストミンスター寺院（ロンドン）', category: 'history-landmark', objective: 'strings', source: SRC.westminsterAbbey, summaryJa: 'ウェストミンスター寺院はロンドンにあります。', prompt: 'Abbey:London と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String site = "Abbey";\n    String city = ___BLANK___;\n    System.out.println(site + ":" + city);\n  }\n}', answer: '"London"', expectedOutput: 'Abbey:London', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "London" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'gb_java_d02', languageId: 'java', world: 'decode', title: 'British Museum founding year', titleJa: '大英博物館の設立年', category: 'history-museum', objective: 'numbers', source: SRC.britishMuseumYear, summaryJa: '大英博物館は1753年の議会法によって設立されました。', prompt: 'Founded:1753 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Founded:" + year;\n    System.out.println(label);\n  }\n}', answer: '1753', expectedOutput: 'Founded:1753', hint: 'int なので引用符なしの数値です。', explanation: 'year に1753を入れると文字列連結で Founded:1753 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'gb_java_d03', languageId: 'java', world: 'decode', title: 'London Underground opening year check', titleJa: 'ロンドン地下鉄の開通年', category: 'history-infrastructure', objective: 'condition', source: SRC.undergroundYear, summaryJa: 'ロンドン地下鉄は1863年に開通しました。', prompt: 'year が1863のとき Underground と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1863;\n    if (___BLANK___) {\n      System.out.println("Underground");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1863', expectedOutput: 'Underground', hint: '値が等しいかは == で比較します。', explanation: 'year == 1863 が true になるため Underground が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'gb_java_d04', languageId: 'java', world: 'decode', title: 'UK travel mode labels', titleJa: 'イギリスの移動手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'イギリスでは鉄道・地下鉄・フェリー・道路など複数の移動手段が使われています。', prompt: 'mode が ferry のとき Ferry transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "ferry";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Ferry transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"ferry"', expectedOutput: 'Ferry transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "ferry" が一致し、Ferry transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'gb_java_d05', languageId: 'java', world: 'decode', title: 'UK nation sample labels', titleJa: 'イギリスを構成する地域のサンプルラベル', category: 'geography', objective: 'array', source: SRC.regions, summaryJa: 'サンプルとして England、Scotland、Wales、Northern Ireland のラベルを扱います。', prompt: 'nations 配列を拡張 for で読み、Northern Ireland だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] nations = {"England", "Northern Ireland", "Scotland"};\n    for (String nation : nations) {\n      if (___BLANK___) System.out.println(nation);\n    }\n  }\n}', answer: 'nation.equals("Northern Ireland")', expectedOutput: 'Northern Ireland', hint: 'String の内容比較は equals です。', explanation: 'nation が Northern Ireland のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_GB_java_01', languageId: 'java', world: 'decode', title: 'Canterbury Cathedral, St Augustine’s Abbey, and St Martin’s Church', titleJa: 'カンタベリー大聖堂、聖アウグスティヌス修道院、聖マーティン教会', category: 'world-heritage', objective: 'method', source: SRC.canterbury, summaryJa: 'カンタベリー大聖堂、聖アウグスティヌス修道院、聖マーティン教会はイギリスにある世界遺産です。', prompt: 'category が cathedral のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("cathedral")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"cathedral"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"cathedral" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_GB_java_02', languageId: 'java', world: 'decode', title: 'Durham Castle and Cathedral', titleJa: 'ダラム城と大聖堂', category: 'world-heritage', objective: 'collections', source: SRC.durham, summaryJa: 'ダラム城と大聖堂はイギリスにある世界遺産です。', prompt: 'ArrayList から durham の record だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Site {\n  String name;\n  boolean durham;\n  Site(String n, boolean d) { name = n; durham = d; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Site> sites = new ArrayList<>();\n    sites.add(new Site("Durham", true));\n    sites.add(new Site("Other", false));\n    for (Site s : sites) {\n      if (___BLANK___) System.out.println(s.name);\n    }\n  }\n}', answer: 's.durham', expectedOutput: 'Durham', hint: 'durham フィールドが true の record だけです。', explanation: 'Durham の durham だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_GB_java_03', languageId: 'java', world: 'decode', title: 'Heart of Neolithic Orkney', titleJa: '新石器時代のオークニー', category: 'world-heritage', objective: 'class', source: SRC.orkney, summaryJa: '新石器時代のオークニーはイギリスにある世界遺産です。', prompt: 'HashMap から Orkney の地域を取り出し Orkney:Neolithic と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String period;\n  Site(String n, String p) { name = n; period = p; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("Orkney", new Site("Orkney", "Neolithic"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.period);\n  }\n}', answer: '"Orkney"', expectedOutput: 'Orkney:Neolithic', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Orkney キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'gb_java_e01', languageId: 'java', world: 'execute', title: 'Isaac Newton', titleJa: 'アイザック・ニュートン', category: 'science-history', objective: 'strings', source: SRC.newton, summaryJa: 'アイザック・ニュートンは運動の法則と万有引力の法則と結びつく人物です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Newton";\n    if (scientist.equals("Newton")) System.out.println("gravity");\n    else System.out.println("other");\n  }\n}', options: ['gravity', 'other', 'Newton', 'true'], answer: 'gravity', expectedOutput: 'gravity', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので gravity が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'gb_java_e02', languageId: 'java', world: 'execute', title: 'UK time-zone sample', titleJa: 'イギリスの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'イギリスではグリニッジ標準時（GMT）が基準として使われます。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 0));\n  }\n}', options: ['10', '0', '100', '-10'], answer: '10', expectedOutput: '10', hint: '10 + 0 を計算します。', explanation: 'UTC 10時に0を足すので10です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'gb_java_e03', languageId: 'java', world: 'execute', title: 'London Underground sample labels', titleJa: 'ロンドン地下鉄のサンプルラベル', category: 'transport', objective: 'collections', source: SRC.undergroundSample, summaryJa: 'サンプルとしてロンドン地下鉄の路線ラベルを扱います。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Central");\n    labels.add("Victoria");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Central>Victoria', 'Victoria>Central', 'Central>', 'Victoria'], answer: 'Central>Victoria', expectedOutput: 'Central>Victoria', hint: '追加した順に result へ入ります。', explanation: 'Central、Victoria の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'gb_java_e04', languageId: 'java', world: 'execute', title: 'UK language label sample', titleJa: 'イギリスの言語ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.scriptSample, summaryJa: 'サンプルとしてイギリスの言語・地域に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class LanguageType {\n  String label() { return "language"; }\n}\nclass Welsh extends LanguageType {\n  @Override\n  String label() { return "Welsh"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    LanguageType type = new Welsh();\n    System.out.println(type.label());\n  }\n}', options: ['Welsh', 'language', 'LanguageType', 'error'], answer: 'Welsh', expectedOutput: 'Welsh', hint: '実体は Welsh です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_GB_java_01', languageId: 'java', world: 'execute', title: 'UK city-nation records', titleJa: 'イギリスの都市・地域レコード', category: 'geography', objective: 'collections', source: SRC.cityNation, summaryJa: 'サンプルとして London–England、Edinburgh–Scotland、Cardiff–Wales、Belfast–Northern Ireland のデータを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市の地域を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("London", 9);\n    cities.put("Belfast", 1);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['London', 'Belfast', 'LondonBelfast', '9'], answer: 'London', expectedOutput: 'London', hint: 'population が4以上の city だけです。', explanation: 'London の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_GB_java_02', languageId: 'java', world: 'execute', title: 'UK research and observatory sample records', titleJa: 'イギリスの研究・観測拠点サンプルレコード', category: 'science-geography', objective: 'collections', source: SRC.researchSite, summaryJa: 'サンプルとして Royal Observatory Greenwich や Jodrell Bank Observatory のデータを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Observatory {\n  String name;\n  boolean active;\n  Observatory(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Observatory> observatories = new ArrayList<>();\n    observatories.add(new Observatory("Greenwich", true));\n    observatories.add(new Observatory("Closed", false));\n    for (Observatory o : observatories) if (o.active) System.out.println(o.label());\n  }\n}', options: ['Greenwich:active', 'Closed:active', 'Greenwich', 'active:Greenwich'], answer: 'Greenwich:active', expectedOutput: 'Greenwich:active', hint: 'active が true の Observatory だけ label() を呼びます。', explanation: 'Greenwich だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'gb_java_b01', languageId: 'java', world: 'debug', title: 'UK city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.cityAbbrev, summaryJa: 'イギリスの都市コードは LON、EDI、CAR、BEL、MAN などです。', prompt: '都市コード MAN を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("MAN");\n    if (code == "MAN") System.out.println("Manchester");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("MAN") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("MAN");\n    if (code.equals("MAN")) System.out.println("Manchester");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'gb_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero archive code formatting', titleJa: '先頭ゼロ付きアーカイブコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.postcode, summaryJa: 'アーカイブコード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプルアーカイブコード 0009 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 9;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0009"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0009";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'gb_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.museumVisitor, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_GB_java_01', languageId: 'java', world: 'debug', title: 'Pontcysyllte Aqueduct and Canal', titleJa: 'ポントカサステ水路橋と運河', category: 'world-heritage', objective: 'collections', source: SRC.pontcysyllte, summaryJa: 'ポントカサステ水路橋と運河はイギリスにある世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Pontcysyllte", "200");\n    String ageText = ages.get("Other Site");\n    int age = Integer.parseInt(ageText);\n    System.out.println(age);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Pontcysyllte", "200");\n    String ageText = ages.get("Pontcysyllte");\n    try {\n      if (ageText != null) System.out.println(Integer.parseInt(ageText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const UNITED_KINGDOM_FACTS = allSpecs.map(makeFact);
export const UNITED_KINGDOM_ASSIGNMENTS = allSpecs.map(assignment);

export const GB_PY_DECODE = pyDecode.map(decode);
export const GB_PY_EXECUTE = pyExecute.map(execute);
export const GB_PY_DEBUG = pyDebug.map(debug);
export const GB_JS_DECODE = jsDecode.map(decode);
export const GB_JS_EXECUTE = jsExecute.map(execute);
export const GB_JS_DEBUG = jsDebug.map(debug);
export const GB_JAVA_DECODE = javaDecode.map(decode);
export const GB_JAVA_EXECUTE = javaExecute.map(execute);
export const GB_JAVA_DEBUG = javaDebug.map(debug);

export const UNITED_KINGDOM_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: UNITED KINGDOM PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: UNITED KINGDOM JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: UNITED KINGDOM JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: UNITED KINGDOM PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: UNITED KINGDOM JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: UNITED KINGDOM JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: UNITED KINGDOM PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: UNITED KINGDOM JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: UNITED KINGDOM JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
