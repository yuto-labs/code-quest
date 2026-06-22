const SRC = {
  lascaux: 'https://archeologie.culture.gouv.fr/lascaux/en',
  bayeux: 'https://www.bayeuxmuseum.com/en/the-bayeux-tapestry/',
  montSaintMichel: 'https://whc.unesco.org/en/list/80',
  canalMidi: 'https://whc.unesco.org/en/list/770',
  camembert: 'https://www.inao.gouv.fr/',
  carcassonne: 'https://whc.unesco.org/en/list/345',
  chartres: 'https://whc.unesco.org/en/list/81',
  pontGard: 'https://whc.unesco.org/en/list/344',
  minitel: 'https://www.ina.fr/ina-eclaire-actu/minitel',
  pasteur: 'https://www.pasteur.fr/en/institut-pasteur/history/louis-pasteur',
  lumiere: 'https://www.institut-lumiere.org/',
  braille: 'https://www.afb.org/about-afb/history/louis-braille',
  metric: 'https://www.bipm.org/en/measurement-units/history-si',
  tgv: 'https://www.sncf-voyageurs.com/en/travel-with-us/in-france/tgv-inoui/',
  fete: 'https://www.culture.gouv.fr/',
  republicanCalendar: 'https://www.britannica.com/topic/French-republican-calendar',
  limoges: 'https://www.limoges-tourisme.com/en/discover/limoges-porcelain/',
  burgundy: 'https://whc.unesco.org/en/list/1425',
  avignon: 'https://whc.unesco.org/en/list/228',
  strasbourgClock: 'https://www.visit.alsace/en/223007305-the-astronomical-clock/',
  aubusson: 'https://ich.unesco.org/en/RL/aubusson-tapestry-00250',
  roquefort: 'https://www.inao.gouv.fr/',
  camargue: 'https://www.parc-camargue.fr/',
  loire: 'https://whc.unesco.org/en/list/933',
  vezelay: 'https://whc.unesco.org/en/list/84',
  nancy: 'https://www.ecole-de-nancy.com/',
  tour: 'https://www.letour.fr/en/history',
  cannes: 'https://www.festival-cannes.com/en/festival/history/',
  metro: 'https://www.ratp.fr/en/decouvrir/coulisses/histoire-du-metro',
  concorde: 'https://www.museeairespace.fr/en/',
  citeScience: 'https://www.cite-sciences.fr/',
  parisAgreement: 'https://unfccc.int/process-and-meetings/the-paris-agreement',
  telephone: 'https://www.arcep.fr/',
  normandy: 'https://www.normandie-tourisme.fr/en/unmissable-sites/d-day-landing-beaches/',
  guiana: 'https://www.esa.int/Enabling_Support/Space_Transportation/Europe_s_Spaceport',
  fontainebleau: 'https://whc.unesco.org/en/list/160',
  eiffel: 'https://www.toureiffel.paris/en/the-monument/history',
  louvre: 'https://www.louvre.fr/en',
  notreDame: 'https://www.notredamedeparis.fr/en/',
  versailles: 'https://whc.unesco.org/en/list/83',
  curie: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/',
  champagne: 'https://whc.unesco.org/en/list/1465',
  ariane: 'https://www.esa.int/Enabling_Support/Space_Transportation/Launch_vehicles/Ariane_5',
  airbus: 'https://www.airbus.com/en/who-we-are/our-history',
  dordogne: 'https://www.dordogne-perigord-tourisme.fr/',
  orsay: 'https://www.musee-orsay.fr/en',
  sorbonne: 'https://www.sorbonne-universite.fr/en/university/history',
  marianne: 'https://www.elysee.fr/en/french-presidency/marianne',
  provence: 'https://www.france.fr/en/provence/',
  lyon: 'https://www.lyon.fr/',
  bordeaux: 'https://whc.unesco.org/en/list/1256',
  chateaux: 'https://www.chambord.org/en/',
  secu: 'https://www.securite-sociale.fr/',
  guadeloupe: 'https://www.guadeloupe-islands.com/',
};

// 各題材の調査済み詳細（JPの country_facts.js と同水準の背景・歴史・エピソード）。
// id をキーに makeFact() がここから backgroundJa/historyJa/episodeJa/keyPointsJa を補う。
const FACT_DETAILS = {
  fr_py_d01: {
    backgroundJa: 'ラスコー洞窟壁画は、フランス南西部ドルドーニュ地方の洞窟内に残る後期旧石器時代の壁画群で、馬・牛・鹿などの動物が躍動感ある線で描かれています。',
    historyJa: '1940年、地元の少年4人が偶然この洞窟を発見し、その後の調査で約1万7000年前の壁画であることが判明しました。',
    episodeJa: '公開後に訪問者の呼気で湿度・カビが増え顔料が劣化したため、1963年に本物の洞窟は閉鎖され、現在はラスコーIVなどの精密な複製施設で見学する形になっています。',
    keyPointsJa: ['1940年に少年たちが偶然発見', '約1万7000年前の後期旧石器時代の壁画', '保存のため本物の洞窟は非公開', '複製施設（ラスコーIVなど）で見学できる'],
  },
  fr_py_d02: {
    backgroundJa: 'バイユーのタペストリーは、1066年のノルマン征服（ヘイスティングズの戦いを含む）の経緯を刺繍で描いた全長約70メートルの記録物です。',
    historyJa: '製作は11世紀後半（1070年代頃）と推定され、ノルマンディー公ウィリアムによるイングランド征服を、ノルマン側の視点を交えつつ描いています。',
    episodeJa: '名前に「タペストリー（綴織）」とありますが、実際は織物ではなく麻布に毛糸で刺繍した作品で、現在もバイユーの専用美術館に保管・展示されています。',
    keyPointsJa: ['1066年のノルマン征服を描いた刺繍作品', '全長約70メートル', '製作は11世紀後半と推定', '実際は織物ではなく刺繍'],
  },
  fr_py_d03: {
    backgroundJa: 'モン・サン＝ミシェルは、ノルマンディー沖の小島に建つベネディクト会の修道院で、満潮時には海に囲まれる独特の景観を持つ世界遺産です。',
    historyJa: '8世紀に礎が築かれたとされ、中世を通じて巡礼地として発展し、百年戦争期には要塞としても機能しました。',
    episodeJa: '潮の干満差が非常に大きく、かつては砂洲を歩いて渡る巡礼者が引き潮の急変に巻き込まれる事故もあったため、2014年に海洋景観を回復する新しい橋が整備されました。',
    keyPointsJa: ['8世紀創建のベネディクト会修道院', '満潮時は島になる独特の地形', '中世は巡礼地・要塞として発展', '2014年に新しい橋で海洋景観を回復'],
  },
  fr_py_d04: {
    backgroundJa: 'ミディ運河は、フランス南部でガロンヌ川と地中海を結ぶ17世紀建造の運河で、当時の土木技術を象徴する世界遺産です。',
    historyJa: 'ピエール＝ポール・リケが計画・建設を主導し、1681年に完成しました。',
    episodeJa: '運河沿いには日陰と土手の補強を兼ねてプラタナスの並木が植えられましたが、近年は「キャンカーステイン病」という病気で多くの木が失われ、計画的な植え替えが進められています。',
    keyPointsJa: ['17世紀にピエール＝ポール・リケが建設', '1681年完成', 'ガロンヌ川と地中海を結ぶ', '並木のプラタナスが病気で減少し再生中'],
  },
  fr_py_d05: {
    backgroundJa: 'カマンベール・ド・ノルマンディは、ノルマンディー地方で作られる白カビ熟成タイプのチーズで、AOC（原産地呼称）によって製法が保護されています。',
    historyJa: '18世紀末、ノルマンディーの農婦マリー・アレルが製法を確立したという伝承が広く知られています。',
    episodeJa: '伝統的には薄い木箱に入れて運ばれ、これがチーズを型崩れさせずに長距離輸送できる工夫として定着し、現在もパッケージの定番デザインになっています。',
    keyPointsJa: ['ノルマンディー地方の白カビチーズ', '18世紀末のマリー・アレルの伝承', 'AOCで製法が保護されている', '木箱入りの伝統的な包装'],
  },
  fr_py_e01: {
    backgroundJa: 'ミニテルは、フランステレコムが1982年に開始したオンライン情報端末サービスで、World Wide Web以前に大規模に普及したビデオテックス通信の代表例です。',
    historyJa: '電話帳の電子化を目的に配布が始まり、最盛期には900万台以上の端末が利用されました。',
    episodeJa: 'インターネットの普及により利用者が減少し、2012年6月にサービスが完全終了しましたが、約30年にわたり予約・通販・チャットなど多様な用途で使われ続けました。',
    keyPointsJa: ['1982年開始のオンライン情報端末サービス', '最盛期は900万台以上が稼働', 'Web普及前の大規模オンラインサービス', '2012年にサービス終了'],
  },
  fr_py_e02: {
    backgroundJa: 'ルイ・パスツールは、狂犬病ワクチンの開発や低温殺菌法（パスチャライゼーション）の確立で知られるフランスの細菌学者です。',
    historyJa: '1885年、狂犬病の犬に咬まれた少年ジョセフ・メイステルに人類初の狂犬病ワクチンを投与し、発症を防ぐことに成功しました。',
    episodeJa: 'この成功が大きな反響を呼び、1887年にはパスツールの名を冠したパスツール研究所がパリに設立され、現在も感染症研究の中核機関として続いています。',
    keyPointsJa: ['1885年に人類初の狂犬病ワクチン投与に成功', '低温殺菌法（パスチャライゼーション）の確立者', '1887年にパスツール研究所が設立', '細菌学・免疫学の基礎を築いた'],
  },
  fr_py_e03: {
    backgroundJa: 'リュミエール兄弟（オーギュストとルイ）は、シネマトグラフを用いて世界初の商業的な映画上映を行った人物として知られます。',
    historyJa: '1895年12月28日、パリのグラン・カフェで複数の短編映像を有料で公開上映し、これが世界初の商業映画上映とされています。',
    episodeJa: '上映作品の一つ「列車の到着」では、画面に向かって列車が迫る映像に観客が驚いて席を立ったという逸話が広く語られています（後年の誇張という説もあります）。',
    keyPointsJa: ['1895年に世界初の商業映画上映を行った', '上映場所はパリのグラン・カフェ', '「列車の到着」など複数の短編を公開', '映画史の出発点とされる出来事'],
  },
  fr_py_e04: {
    backgroundJa: 'ルイ・ブライユは、視覚障害者向けの6点式点字システムを考案したフランス人で、現在も世界中で使われる点字の基礎を作りました。',
    historyJa: '幼少期の事故で視力を失い、パリの王立盲学校在学中の1824年頃に点字システムの原型を考案、1829年に体系化して発表しました。',
    episodeJa: '当時軍隊で使われていたシャルル・バルビエの夜間文字（突起による暗号）を参考にしつつ、より読みやすい6点配列へ独自に改良した点が評価されています。',
    keyPointsJa: ['幼少期の事故で視力を失う', '1824年頃に点字システムを考案', '1829年に体系化して発表', 'バルビエの夜間文字を参考に改良'],
  },
  fr_py_b01: {
    backgroundJa: 'フェット・ド・ラ・ミュジック（音楽の日）は、毎年6月21日にフランス発祥で開催される無料の音楽イベントです。',
    historyJa: '1982年、当時の文化大臣ジャック・ラングの発案で始まりました。',
    episodeJa: '現在では120以上の国と地域で同様の催しが行われるまでに広がっており、プロ・アマ問わず街中で誰でも演奏に参加できる点が特徴です。',
    keyPointsJa: ['1982年にジャック・ラングが発案', '毎年6月21日に開催', '現在120以上の国に拡大', '誰でも参加できる無料の音楽祭'],
  },
  fr_py_b02: {
    backgroundJa: 'フランス共和暦は、フランス革命期に従来のグレゴリオ暦を置き換えるために導入された独自の暦法です。',
    historyJa: '1793年に正式採用され、1805年にナポレオンによって廃止されました。',
    episodeJa: '月の名前は気候や農作業にちなみ（ヴァンデミエール＝ぶどう収穫月、ブリュメール＝霧月など）、1週間を10日とする「デカード」制も導入されましたが、長くは定着しませんでした。',
    keyPointsJa: ['1793年にフランス革命期に採用', '1805年にナポレオンが廃止', '月名は気候・農作業にちなむ', '1週10日の「デカード」制を採用'],
  },
  fr_py_b03: {
    backgroundJa: 'リモージュ磁器は、フランス中部リモージュ地方で作られる高級磁器で、繊細な絵付けと白磁の美しさで知られます。',
    historyJa: '1768年近郊でカオリン（陶石）が発見されたことを契機に、18世紀後半から本格的な磁器生産が始まりました。',
    episodeJa: '王室や貴族の食器として広く愛用され、現在も世界各国の高級レストランやホテルでリモージュ製の食器が使われています。',
    keyPointsJa: ['1768年のカオリン発見が生産の契機', '18世紀後半から磁器生産が本格化', '繊細な絵付けと白磁が特徴', '世界の高級食器として現在も流通'],
  },
  fr_js_d01: {
    backgroundJa: 'アヴィニョン教皇宮殿は、14世紀に教皇庁が置かれた南フランス・アヴィニョンに建つヨーロッパ最大級のゴシック宮殿です。',
    historyJa: '1309年から1377年まで、政治的混乱を背景に教皇庁がローマからアヴィニョンに移され、この「アヴィニョン教皇period」の間に宮殿が築かれました。',
    episodeJa: 'ローマに教皇庁が戻った後も、対立教皇がアヴィニョンに残った時期（教会大分裂）があり、一時は2人の教皇が並立する事態にもなりました。',
    keyPointsJa: ['1309年から1377年まで教皇庁が置かれた', 'ヨーロッパ最大級のゴシック宮殿', '教会大分裂期にも関わる場所', '現在は世界遺産として公開'],
  },
  fr_js_d02: {
    backgroundJa: 'ストラスブール大聖堂の天文時計は、天体の動きや暦の情報を表示する複雑な機構を備えた歴史的な時計です。',
    historyJa: '現在見られるものは1838年から1843年にかけて作られた3代目で、初代は1352年、2代目は1574年に設置されました。',
    episodeJa: '正午になると仕掛けが作動し、機械仕掛けの雄鶏が鳴く演出があり、毎日多くの観光客がこの時間に時計の前に集まります。',
    keyPointsJa: ['現在の時計は1838〜1843年製の3代目', '初代は1352年に設置', '正午に雄鶏が鳴く仕掛けがある', '天体の動きや暦を表示する機構'],
  },
  fr_js_d03: {
    backgroundJa: 'オービュッソンのタペストリーは、フランス中部の町オービュッソンを中心に発展した綴織（つづれおり）の伝統工芸です。',
    historyJa: '15〜16世紀頃から織物産地として発展し、王室や貴族の注文を受ける一大産業に成長しました。',
    episodeJa: '2009年にユネスコ無形文化遺産に登録され、伝統技法を継承する工房が今も現地で作品づくりを続けています。',
    keyPointsJa: ['15〜16世紀から織物産地として発展', '王室・貴族向けの綴織を製作', '2009年にユネスコ無形文化遺産登録', '現在も伝統技法が継承されている'],
  },
  fr_js_d04: {
    backgroundJa: 'ロックフォールは、南フランスのロックフォール＝シュル＝スールゾン産の青カビチーズで、最も古いAOC（原産地呼称）の一つです。',
    historyJa: '1925年にAOCの認定を受け、コンバルー山の天然洞窟内でのみ熟成させることが製法上の条件とされています。',
    episodeJa: '羊飼いがパンとチーズを洞窟に置き忘れ、数か月後に戻ると青カビがついて美味しくなっていた、という伝承が起源譚として広く語られています。',
    keyPointsJa: ['1925年に最古級のAOC認定を受ける', 'コンバルー山の洞窟でのみ熟成', '羊飼いの伝承が起源譚として有名', '青カビによる風味が特徴'],
  },
  fr_js_d05: {
    backgroundJa: 'カマルグは、ローヌ川河口に広がる湿地帯で、独特の生態系と景観を持つ南フランスの自然保護区です。',
    historyJa: '1970年に自然公園として正式に指定され、湿地の保全と農業・牧畜の共存が図られています。',
    episodeJa: '野生の白馬「カマルグ馬」と、群れをなすフラミンゴの生息地として特に有名で、バードウォッチングの名所にもなっています。',
    keyPointsJa: ['ローヌ川河口の湿地帯', '1970年に自然公園として指定', '野生の白馬カマルグ馬で有名', 'フラミンゴの生息地としても知られる'],
  },
  fr_js_e01: {
    backgroundJa: 'ツール・ド・フランスは、フランス全土を周る世界最高峰のロードレースで、毎年7月頃に開催されます。',
    historyJa: '1903年、新聞「ロト」の発行人アンリ・デグランジュが販促を兼ねて創設しました。',
    episodeJa: '総合順位首位の選手が着る「マイヨ・ジョーヌ（黄色いジャージ）」は1919年に導入され、これは新聞ロトの用紙が黄色だったことに由来するとされています。',
    keyPointsJa: ['1903年にアンリ・デグランジュが創設', '新聞ロトの販促が目的だった', 'マイヨ・ジョーヌは1919年導入', '新聞用紙の黄色にちなむ色'],
  },
  fr_js_e02: {
    backgroundJa: 'カンヌ映画祭は、フランス南部カンヌで毎年開催される世界的な国際映画祭です。',
    historyJa: '1939年の開催が予定されていましたが第二次世界大戦の勃発で延期され、戦後の1946年に正式に始まりました。',
    episodeJa: '最高賞「パルム・ドール」は1955年に創設され、それ以前は別の名称の賞が用いられていました。',
    keyPointsJa: ['1939年開催予定が戦争で延期', '1946年に正式開始', '最高賞パルム・ドールは1955年創設', '世界三大映画祭の一つ'],
  },
  fr_js_e03: {
    backgroundJa: 'パリ・メトロは、1900年に開業したパリの都市鉄道網で、現在もパリ市内交通の中心を担っています。',
    historyJa: '1900年のパリ万国博覧会に合わせて1号線が開業しました。',
    episodeJa: '建築家エクトール・ギマールが手掛けたアール・ヌーヴォー様式の入口（緑色の鉄骨と曲線装飾）は、現在もパリの街並みを象徴するデザインとして親しまれています。',
    keyPointsJa: ['1900年のパリ万博に合わせて開業', '1号線が最初に開業', 'ギマール設計のアール・ヌーヴォー入口が有名', '現在もパリの主要交通網'],
  },
  fr_js_e04: {
    backgroundJa: 'コンコルドは、英仏共同開発の超音速旅客機で、1976年から2003年まで商業運航されました。',
    historyJa: '初飛行は1969年で、マッハ2前後の速度でパリ・ニューヨーク間などを通常の半分以下の時間で結びました。',
    episodeJa: '2000年のパリ近郊での墜落事故と、運航コストの高さ・需要低迷が重なり、2003年に全機が退役しました。',
    keyPointsJa: ['英仏共同開発の超音速旅客機', '初飛行は1969年', '1976〜2003年に商業運航', '2000年の事故後に退役が加速'],
  },
  fr_js_b01: {
    backgroundJa: 'フランスの電話番号は10桁で構成され、1996年の番号制度改革以降、2桁ごとに区切って表記するのが一般的です。',
    historyJa: '1996年の電話番号制度改革で、それまでの8桁から現在の10桁の番号体系に移行しました。',
    episodeJa: '最初の2桁は地域や事業者の種別を表すことが多く、表記の区切り方も含めて番号の読みやすさが重視されています。',
    keyPointsJa: ['現在は10桁の電話番号', '1996年の制度改革で現行体系に', '2桁ごとに区切って表記するのが一般的', '最初の2桁が地域・種別を示す'],
  },
  fr_js_b02: {
    backgroundJa: 'ノルマンディー上陸作戦（D-Day）は、1944年6月6日に連合軍が実施した第二次世界大戦最大規模の上陸作戦です。',
    historyJa: '上陸地点はユタ、オマハ、ゴールド、ジュノー、ソードの5海岸に分けられ、米英加など連合軍が同時に上陸しました。',
    episodeJa: 'オマハ・ビーチは地形や防御の強さから特に激しい戦闘となり、連合軍側で最も多くの死傷者を出した海岸として記憶されています。',
    keyPointsJa: ['1944年6月6日のD-Day作戦', '5つの海岸（ユタ・オマハ・ゴールド・ジュノー・ソード）に上陸', 'オマハ・ビーチが最激戦地', '第二次世界大戦の転換点とされる'],
  },
  fr_js_b03: {
    backgroundJa: 'ギアナ宇宙センターは、南米のフランス領ギアナ・クールーにある欧州の主要なロケット発射場です。',
    historyJa: '1968年に開設され、赤道に近い地理的条件がロケット打ち上げに有利なことから選定されました。',
    episodeJa: 'アリアンシリーズなど欧州宇宙機関（ESA）のロケットが主に発射され、他国の衛星打ち上げも数多く受け入れています。',
    keyPointsJa: ['1968年開設のフランス領ギアナの発射場', '赤道に近く打ち上げに有利', 'アリアンロケットの発射拠点', 'ESAなど複数機関が利用'],
  },
  fr_java_d01: {
    backgroundJa: 'エッフェル塔は、1889年のパリ万国博覧会のために建設された鉄骨タワーで、現在はパリを象徴する建造物です。',
    historyJa: 'ギュスターヴ・エッフェルが設計・建設し、当時は多くの芸術家から「醜い鉄骨」と批判されました。',
    episodeJa: '当初は万博終了後20年で解体される予定でしたが、無線通信のアンテナとして軍事・科学的に有用と判断され、解体を免れて現在まで残されています。',
    keyPointsJa: ['1889年のパリ万博のために建設', 'ギュスターヴ・エッフェルが設計', '建設当初は批判が多かった', '無線アンテナ利用で解体を回避'],
  },
  fr_java_d02: {
    backgroundJa: 'ルーヴル美術館は、もとフランス王宮だった建物を利用した世界最大級の美術館です。',
    historyJa: 'フランス革命期の1793年に王室コレクションを公開する美術館として開館しました。',
    episodeJa: '建築家イオ・ミン・ペイによるガラスのピラミッド型エントランスは1989年に完成し、当初は歴史的建造物との不調和を懸念する声もありましたが、現在は美術館の象徴的存在になっています。',
    keyPointsJa: ['旧フランス王宮を利用した美術館', '1793年に革命期に開館', 'ガラスのピラミッドは1989年完成', '世界最大級の来館者数を誇る'],
  },
  fr_java_d03: {
    backgroundJa: 'ノートルダム大聖堂は、パリのシテ島に建つゴシック建築を代表する大聖堂です。',
    historyJa: '建設は1163年に始まり、おおよそ1345年頃に完成したとされています。',
    episodeJa: '2019年4月に大規模火災が発生し尖塔などを焼失しましたが、その後の修復が進められ、2024年12月に再開されました。',
    keyPointsJa: ['建設開始は1163年', '完成はおよそ1345年', '2019年の火災で大きく損傷', '2024年12月に再開'],
  },
  fr_java_d04: {
    backgroundJa: 'ヴェルサイユ宮殿は、フランス王政の権力を象徴する大宮殿で、もとは狩猟用の館でした。',
    historyJa: 'ルイ14世が1661年から大規模な拡張を始め、1682年に宮廷と政府機能を正式にヴェルサイユへ移しました。',
    episodeJa: '宮殿内の「鏡の回廊」は、第一次世界大戦を終結させたヴェルサイユ条約の調印式（1919年）が行われた場所として知られています。',
    keyPointsJa: ['ルイ14世が1661年から拡張', '1682年に宮廷機能を移転', '鏡の回廊でヴェルサイユ条約調印（1919年）', 'フランス王政の権力を象徴'],
  },
  fr_java_d05: {
    backgroundJa: 'マリー・キュリーは、放射性元素ポロニウムとラジウムを発見したフランスの物理学者・化学者です。',
    historyJa: '夫ピエール・キュリーと共に1898年にポロニウムとラジウムを発見し、1903年にノーベル物理学賞、1911年にノーベル化学賞を単独受賞しました。',
    episodeJa: '異なる2分野でノーベル賞を受賞した史上初の人物となりましたが、長年の放射線研究の影響とされる病気により1934年に亡くなりました。',
    keyPointsJa: ['1898年にポロニウムとラジウムを発見', '1903年ノーベル物理学賞', '1911年ノーベル化学賞（2分野受賞は史上初）', '放射線研究の影響で1934年に死去'],
  },
  fr_java_e01: {
    backgroundJa: 'シャンパーニュ地方の丘陵・メゾン・カーヴは、伝統的なスパークリングワイン製法と結びつく世界遺産の景観です。',
    historyJa: '伝統的な「シャンパーニュ製法」は17世紀から発展し、ドン・ペリニヨンら修道士の貢献が伝承として知られています。',
    episodeJa: '法律上、この地域で定められた製法により作られたものだけが「シャンパン（Champagne）」と呼ぶことができ、他地域のスパークリングワインとは厳格に区別されます。',
    keyPointsJa: ['17世紀から発展した伝統製法', '2015年にユネスコ世界遺産登録', '「シャンパン」呼称は地域限定', 'ドン・ペリニヨンらの伝承が有名'],
  },
  fr_java_e02: {
    backgroundJa: 'アリアンロケットは、欧州が開発した打ち上げ機シリーズで、欧州宇宙機関（ESA）の主力ロケットです。',
    historyJa: '1979年に初代アリアンが打ち上げられ、その後アリアン5などへ発展しました。',
    episodeJa: 'アリアン5は1996年の初飛行でソフトウェアの不具合が原因の打ち上げ失敗を起こしましたが、その後は信頼性の高い主力機として商業衛星打ち上げを支えています。',
    keyPointsJa: ['1979年に初代アリアンが打ち上げ', 'ESAの主力打ち上げ機シリーズ', 'アリアン5は1996年に初飛行失敗', 'その後は高い信頼性を確立'],
  },
  fr_java_e03: {
    backgroundJa: 'トゥールーズは、航空機メーカーAirbusの本社・組立拠点が置かれる南フランスの都市です。',
    historyJa: 'Airbusは1970年に欧州各国の航空機メーカーが連携する形で設立され、トゥールーズが最終組立の中心地となりました。',
    episodeJa: '超大型機A380の部品は欧州各国の工場から船や専用輸送機で運ばれ、トゥールーズで最終組立が行われる国際分業体制が特徴です。',
    keyPointsJa: ['1970年に欧州各国の連携で設立', 'トゥールーズが最終組立拠点', 'A380など大型機も組立', '欧州各国からの部品輸送が特徴'],
  },
  fr_java_e04: {
    backgroundJa: 'ドルドーニュ地方は、先史時代の遺跡と中世の集落・城が多く残る南西フランスの地域です。',
    historyJa: '中世には英仏間の領土争い（百年戦争期など）の最前線となり、防衛のための新興都市「バスティード」が各地に建設されました。',
    episodeJa: 'ラスコー洞窟をはじめとする数多くの先史遺跡も同地方に集中しており、旧石器時代から中世まで重層的な歴史が見られる地域です。',
    keyPointsJa: ['先史遺跡（ラスコー等）が集中', '中世は英仏紛争の最前線', '防衛拠点「バスティード」が多数現存', '旧石器時代から中世までの重層的な歴史'],
  },
  fr_java_b01: {
    backgroundJa: 'オルセー美術館は、19世紀末の絵画を中心に収蔵するパリの美術館で、もとは鉄道駅の建物でした。',
    historyJa: '1900年に「オルセー駅」として開業した建物が、1986年に美術館として転用・開館しました。',
    episodeJa: '印象派の作品を多数収蔵しており、ルーヴル美術館（古典）とポンピドゥー・センター（現代）の間の時代を補う形で位置づけられています。',
    keyPointsJa: ['もとは1900年開業の鉄道駅', '1986年に美術館として開館', '印象派作品を多数収蔵', 'ルーヴルとポンピドゥーの間の時代を担う'],
  },
  fr_java_b02: {
    backgroundJa: 'ソルボンヌは、パリ大学の歴史を象徴する名称で、中世から続く高等教育の中心地です。',
    historyJa: '1257年、ロベール・ド・ソルボンが神学校として創設したことが起源です。',
    episodeJa: '1968年5月、学生・労働者による大規模な抗議運動「五月革命」の舞台の一つとなり、フランス社会に大きな影響を与えました。',
    keyPointsJa: ['1257年にロベール・ド・ソルボンが創設', 'もとは神学校として発足', '1968年の五月革命の舞台の一つ', 'パリの高等教育史を象徴する名称'],
  },
  fr_java_b03: {
    backgroundJa: 'マリアンヌは、フランス共和国を象徴する女性像で、自由・平等・友愛の理念を体現する存在として扱われます。',
    historyJa: 'フランス革命期に共和国の象徴として定着し、その名は当時よく使われた女性名にちなむとされています。',
    episodeJa: '硬貨や切手のほか各市町村の役場に胸像が置かれ、モデルにはブリジット・バルドーやカトリーヌ・ドヌーヴなど著名な女性が選ばれてきました。',
    keyPointsJa: ['フランス革命期に共和国の象徴として定着', '自由・平等・友愛を体現する女性像', '硬貨・切手・役場の胸像に使用', '著名な女性がモデルに選ばれてきた'],
  },
  final_decode_FR_python_01: {
    backgroundJa: 'カルカソンヌは、中世の城壁がほぼ完全な姿で残る南フランスの城塞都市です。',
    historyJa: '城壁の多くは19世紀に建築家ヴィオレ＝ル＝デュクによって大規模に修復・復元されました。',
    episodeJa: '修復の際に追加された円錐形の屋根は、実際には南フランスの伝統的様式ではなく北フランス風だったため、史実との不一致を指摘する議論が今も続いています。',
    keyPointsJa: ['中世の城壁が残る城塞都市', '19世紀にヴィオレ＝ル＝デュクが修復', '円錐屋根の様式に historical な議論あり', '世界遺産として保護されている'],
  },
  final_decode_FR_python_02: {
    backgroundJa: 'シャルトル大聖堂は、12〜13世紀建造のゴシック建築で、特に「シャルトルブルー」と呼ばれるステンドグラスの青色で有名です。',
    historyJa: '現在の大聖堂は1194年の火災後に再建され、おおむね1220年代までに主要部分が完成しました。',
    episodeJa: '第二次世界大戦中、空襲による破壊を避けるためステンドグラスは取り外されて保管され、戦後に元の位置へ戻されました。',
    keyPointsJa: ['1194年の火災後に再建', '「シャルトルブルー」のステンドグラスが有名', '戦時中はガラスを取り外して保護', 'ゴシック建築の代表例'],
  },
  final_decode_FR_python_03: {
    backgroundJa: 'ポン・デュ・ガールは、南フランスに残る古代ローマの水道橋で、ニームへ水を供給する全長約50kmの水道網の一部です。',
    historyJa: '1世紀頃にローマ帝国の技術で建設されました。',
    episodeJa: '高さ約49メートルで現存する古代ローマの水道橋の中でも最も高い構造物の一つとされ、当時の精密な測量・建築技術を物語っています。',
    keyPointsJa: ['1世紀頃の古代ローマの水道橋', '全長約50kmの水道網の一部', '高さ約49メートルで現存最高クラス', 'ニームへ水を供給していた'],
  },
  final_execute_FR_python_01: {
    backgroundJa: 'メートル法は、フランス革命期に従来の地域ごとの度量衡を統一するために開発された測定基準です。',
    historyJa: '1790年代に科学者たちが地球の大きさを基準に検討を進め、1795年に法的に採用、1799年に基準器（メートル原器）が確定しました。',
    episodeJa: '当初、1メートルは「北極から赤道までの距離の1000万分の1」と定義されており、地球そのものを基準にした点が画期的でした。',
    keyPointsJa: ['フランス革命期に開発', '1795年に法的採用', '地球の大きさを基準に定義', '現在の国際単位系（SI）の基礎'],
  },
  final_execute_FR_python_02: {
    backgroundJa: 'TGVは、1981年に運行を開始したフランスの高速鉄道で、世界初期の高速鉄道網の一つです。',
    historyJa: '最初の路線はパリ・リヨン間で、当時は世界最速級の営業運転を実現しました。',
    episodeJa: '2007年の試験走行では、改良型車両が時速574.8kmという従来型レール鉄道の世界最高速度を記録しました。',
    keyPointsJa: ['1981年運行開始（パリ・リヨン間）', '世界初期の高速鉄道網', '2007年に世界最高速度574.8kmを記録', '現在もフランス国内の主要交通網'],
  },
  final_debug_FR_python_01: {
    backgroundJa: 'ブルゴーニュの「クリマ」は、ブドウ畑を細かく区分した特定の区画を指す伝統的な概念で、ワイン文化を象徴する世界遺産です。',
    historyJa: '中世にシトー会やクリュニー会の修道士たちが土壌や気候の違いを観察し、区画ごとの個性を体系化したことが起源とされています。',
    episodeJa: '1,200以上のクリマが識別されており、隣接する区画でも土壌や向きの違いによって全く異なる風味のワインが生まれると考えられています。',
    keyPointsJa: ['ブドウ畑を細かく区分する伝統概念', '中世の修道士が体系化', '1,200以上のクリマが存在', '2015年にユネスコ世界遺産登録'],
  },
  final_decode_FR_javascript_01: {
    backgroundJa: 'ロワール渓谷は、ルネサンス期に築かれた多数の城館と河川景観が一体となった文化的景観で、世界遺産に登録されています。',
    historyJa: '2000年にユネスコ世界遺産に登録され、15〜16世紀にフランス王や貴族が建てた城館群が中心的な価値とされています。',
    episodeJa: 'シャンボール城の二重螺旋階段は、互いに視線が合わずに上り下りできる珍しい構造で、レオナルド・ダ・ヴィンチの関与を示唆する説もあります。',
    keyPointsJa: ['2000年にユネスコ世界遺産登録', '15〜16世紀のルネサンス様式の城館群', 'シャンボール城の二重螺旋階段が有名', 'ダ・ヴィンチ関与説もある'],
  },
  final_decode_FR_javascript_02: {
    backgroundJa: 'ヴェズレーの教会と丘は、中世の巡礼路（サンティアゴ・デ・コンポステーラへの道）の重要な出発点とされるロマネスク様式の聖堂です。',
    historyJa: '中世にはマグダラのマリアの聖遺物伝承で知られ、多くの巡礼者を集めました。',
    episodeJa: '1146年、聖ベルナールがこの地で第2回十字軍への参加を呼びかける説教を行ったことが歴史上の重要な出来事として記録されています。',
    keyPointsJa: ['ロマネスク様式の聖堂と巡礼路の拠点', '中世巡礼路の重要な出発点', '1146年に聖ベルナールが十字軍を提唱', 'マグダラのマリアの聖遺物伝承で有名'],
  },
  final_decode_FR_javascript_03: {
    backgroundJa: 'ナンシー派は、19世紀末から20世紀初頭にフランス東部ナンシーで展開したアール・ヌーヴォーの装飾芸術運動です。',
    historyJa: 'エミール・ガレを中心に1901年頃から活動が盛り上がり、1909年頃まで活発に作品が生み出されました。',
    episodeJa: 'ナンシーが古くからガラス工芸や鉄工芸で知られていたことを背景に、植物模様を多用した独自の様式（ドーム兄弟のクリスタル工芸など）が発展しました。',
    keyPointsJa: ['19世紀末〜20世紀初頭のアール・ヌーヴォー運動', 'エミール・ガレが中心人物', 'ナンシーのガラス・鉄工芸の伝統が背景', '植物模様を多用した装飾様式'],
  },
  final_execute_FR_javascript_01: {
    backgroundJa: 'シテ科学産業博物館は、パリのラ・ヴィレット公園内にある大型の科学展示施設です。',
    historyJa: '1986年に開館し、フランスを代表する科学博物館の一つとなりました。',
    episodeJa: '館内には球形のドーム型映像施設「ラ・ジェオード」があり、独特の建築デザインでも知られています。',
    keyPointsJa: ['1986年開館', 'パリのラ・ヴィレット公園内', '球形シネマ「ラ・ジェオード」が有名', 'フランス代表する科学博物館'],
  },
  final_execute_FR_javascript_02: {
    backgroundJa: 'パリ協定は、2015年にパリで開催されたCOP21で採択された、気候変動対策のための国際的な法的枠組みです。',
    historyJa: '2015年12月に採択され、世界の平均気温上昇を産業革命前と比べて2度未満、できれば1.5度に抑えることを目標としています。',
    episodeJa: '採択地であるパリの名がそのまま協定名になっており、ほぼすべての国連加盟国が参加する歴史的な合意となりました。',
    keyPointsJa: ['2015年12月にパリのCOP21で採択', '気温上昇を2度未満、努力目標1.5度', '法的拘束力を持つ国際枠組み', 'ほぼ全ての国連加盟国が参加'],
  },
  final_debug_FR_javascript_01: {
    backgroundJa: 'フォンテーヌブロー宮殿は、700年以上にわたりフランスの歴代君主が利用してきた由緒ある宮殿です。',
    historyJa: '中世から続く狩猟用の館を起源とし、ヴェルサイユよりも長期間にわたり継続的に王室が利用した宮殿として知られています。',
    episodeJa: '1814年、ナポレオンがこの宮殿で退位文書に署名し、エルバ島へ流刑となる前の演説を行った歴史的な場所でもあります。',
    keyPointsJa: ['700年以上利用された歴代君主の宮殿', 'ヴェルサイユより長く継続利用された', '1814年にナポレオンが退位文書に署名', '世界遺産に登録されている'],
  },
  final_decode_FR_java_01: {
    backgroundJa: 'プロヴァンスのラベンダー畑は、香水産業と結びついた南フランスを象徴する農業景観です。',
    historyJa: '19世紀から香水・精油用にラベンダー栽培が本格化し、地域の主要産業の一つとなりました。',
    episodeJa: '7月頃に見頃を迎えるヴァランソル高原周辺の紫一面の景観は、世界中から観光客と写真家を集める名所になっています。',
    keyPointsJa: ['19世紀から香水用栽培が本格化', '南フランスの主要農業景観', 'ヴァランソル高原が代表的な名所', '見頃は7月頃'],
  },
  final_decode_FR_java_02: {
    backgroundJa: 'リヨンは、フランス国内で「美食の都」と呼ばれることが多い都市で、伝統的な「ブション」と呼ばれる小さなビストロ文化が根づいています。',
    historyJa: 'ブションは、もともと近隣の商人や労働者向けに安価でボリュームのある料理を出す簡素な食堂として発展しました。',
    episodeJa: '20世紀を代表する料理人ポール・ボキューズもリヨン近郊を拠点に活動し、リヨンの美食の名声を国際的に高めました。',
    keyPointsJa: ['「美食の都」と呼ばれる都市', '伝統的なビストロ「ブション」が有名', 'ポール・ボキューズの拠点でもあった', '庶民的な料理文化が発展'],
  },
  final_decode_FR_java_03: {
    backgroundJa: 'ボルドーは、ジロンド川の湾曲部に沿って広がる「月の港」と呼ばれる港湾都市で、世界遺産にも登録されています。',
    historyJa: '古代ローマ時代からワイン交易の拠点として発展し、18世紀には新古典主義様式の都市整備が大規模に行われました。',
    episodeJa: '川が大きく弧を描く地形が三日月（月）のように見えることから「月の港（Port of the Moon）」という呼び名が生まれました。',
    keyPointsJa: ['古代ローマ時代からワイン交易の拠点', '18世紀の新古典主義都市整備', '「月の港」の名は川の弧状地形に由来', '2007年にユネスコ世界遺産登録'],
  },
  final_execute_FR_java_01: {
    backgroundJa: 'シャンボール城は、ロワール渓谷最大の城館で、フランソワ1世の命によって建設されました。',
    historyJa: '建設は1519年に始まり、フランス・ルネサンス建築の代表作とされています。',
    episodeJa: '有名な二重螺旋階段を備えますが、城自体は王の居住用としては実質的に未完成のまま使われることが少なかったとも言われています。',
    keyPointsJa: ['1519年にフランソワ1世が建設開始', 'ロワール渓谷最大の城館', '二重螺旋階段が特徴的', 'ルネサンス建築の代表作'],
  },
  final_execute_FR_java_02: {
    backgroundJa: 'フランスの社会保障制度は、医療・家族・年金・労災などの分野を支える連帯（solidarité）の理念に基づく仕組みです。',
    historyJa: '第二次世界大戦後の1945年、解放直後のフランスで創設されました。',
    episodeJa: '創設の理念は「すべての人が同じ制度のもとで保護される」という普遍的カバレッジの考え方で、現在のフランス社会の基盤の一つとなっています。',
    keyPointsJa: ['1945年、解放直後に創設', '連帯（solidarité）の理念に基づく', '医療・家族・年金・労災を支える', '普遍的カバレッジを重視'],
  },
  final_debug_FR_java_01: {
    backgroundJa: 'グアドループは、カリブ海に位置するフランスの海外地域で、フランス領としての歴史が17世紀から続いています。',
    historyJa: '17世紀にフランスの植民地として統治が始まり、現在はフランス本土と同じくユーロを使用する海外県（領）です。',
    episodeJa: '島の形が蝶のように見えることから「蝶の島」とも呼ばれ、カリブ海地域にありながら法制度・通貨はフランス本土と一体化している点が特徴です。',
    keyPointsJa: ['17世紀からフランス領として統治', 'カリブ海に位置するフランス海外地域', '蝶のような形状から「蝶の島」とも呼ばれる', '通貨・法制度はフランス本土と一体'],
  },
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
    object: 'classes',
    map: 'dicts',
    array: 'lists',
    switch: 'conditions',
    class: 'classes',
    inheritance: 'classes',
  },
  javascript: {
    strings: 'variables',
    integers: 'variables',
    condition: 'variables',
    list: 'arrays',
    dictionary: 'objects',
    function: 'functions',
    loop: 'arrays',
    object: 'objects',
    map: 'objects',
    array: 'arrays',
    switch: 'variables',
    class: 'objects',
    inheritance: 'objects',
  },
  java: {
    strings: 'strings',
    integers: 'primitive-types',
    condition: 'conditionals',
    list: 'arrays',
    dictionary: 'collections',
    function: 'methods',
    loop: 'loops',
    object: 'classes',
    map: 'collections',
    array: 'arrays',
    switch: 'switch',
    class: 'classes',
    inheritance: 'inheritance',
  },
};

function conceptFor(spec) {
  return spec.conceptId || conceptByLanguage[spec.languageId]?.[spec.objective] || 'variables';
}

function sourceRef(url) {
  return [{ title: 'Reference source', organization: new URL(url).hostname, url }];
}

function factIdFromQuestion(questionId) {
  return `fact_${questionId}`;
}

function entityKey(title) {
  return `fr:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa
    || `${spec.summaryJa} ${spec.titleJa}は、フランスの歴史・文化・科学・産業を理解するときの代表的な題材です。成立した時代や地域、保存・継承のされ方を見ると、名前だけでなく背景まで整理できます。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'FR',
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
    countryId: 'FR',
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

const pyDecode = [
  { id: 'fr_py_d01', languageId: 'python', world: 'decode', title: 'Lascaux cave paintings', titleJa: 'ラスコー洞窟壁画', category: 'heritage-art', objective: 'strings', source: SRC.lascaux, summaryJa: 'ラスコー洞窟壁画は旧石器時代の洞窟壁画として知られるフランスの文化遺産です。', prompt: 'ラスコー洞窟壁画を題材に、下のコードを実行すると Lascaux:paintings と表示されるように空欄を埋めてください。', code: 'site = "Lascaux"\ntype_name = ___BLANK___\nprint(site + ":" + type_name)', answer: '"paintings"', expectedOutput: 'Lascaux:paintings', hint: '文字列として連結する値を入れます。', explanation: '空欄に "paintings" を入れると、site と連結されて期待する出力になります。', programmingExplanation: 'Python の文字列は + で連結できます。変数 site の値と文字列リテラルをつなぎます。' },
  { id: 'fr_py_d02', languageId: 'python', world: 'decode', title: 'Bayeux Tapestry', titleJa: 'バイユーのタペストリー', category: 'heritage-art', objective: 'integers', source: SRC.bayeux, summaryJa: 'バイユーのタペストリーはノルマン征服を描く長大な刺繍作品です。', prompt: 'バイユーのタペストリーの長さデータを使い、Bayeux length:70 と表示されるように空欄を埋めてください。', code: 'length_m = ___BLANK___\nlabel = f"Bayeux length:{length_m}"\nprint(label)', answer: '70', expectedOutput: 'Bayeux length:70', hint: 'f-string に入る整数値をそのまま書きます。', explanation: 'length_m に 70 を代入すると、f-string の {length_m} が 70 に置き換わります。', programmingExplanation: '整数は引用符なしで書き、f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'fr_py_d03', languageId: 'python', world: 'decode', title: 'Mont-Saint-Michel', titleJa: 'モン・サン＝ミシェル', category: 'world-heritage', objective: 'condition', source: SRC.montSaintMichel, summaryJa: 'モン・サン＝ミシェルとその湾は世界遺産として知られるフランスの名所です。', prompt: '登録地名が Mont-Saint-Michel のとき heritage と表示されるように、if の条件を完成させてください。', code: 'site = "Mont-Saint-Michel"\nif ___BLANK___:\n    print("heritage")\nelse:\n    print("other")', answer: 'site == "Mont-Saint-Michel"', expectedOutput: 'heritage', hint: '文字列が完全に一致するか == で比較します。', explanation: 'site の値と対象名を比較する条件が True になり、heritage が出力されます。', programmingExplanation: 'Python の == は値の等価比較です。if は条件が True のブロックを実行します。' },
  { id: 'fr_py_d04', languageId: 'python', world: 'decode', title: 'Canal du Midi', titleJa: 'ミディ運河', category: 'world-heritage', objective: 'list', source: SRC.canalMidi, summaryJa: 'ミディ運河はフランス南部の歴史的運河で、世界遺産に登録されています。', prompt: 'リストから Canal du Midi を取り出して表示するように、添字を埋めてください。', code: 'sites = ["Carcassonne", "Canal du Midi", "Chartres"]\nprint(sites[___BLANK___])', answer: '1', expectedOutput: 'Canal du Midi', hint: 'Python のリストは 0 番目から数えます。', explanation: 'Canal du Midi はリストの2番目なので、添字は 1 です。', programmingExplanation: 'リストの添字は 0 から始まります。sites[1] は2番目の要素を返します。' },
  { id: 'fr_py_d05', languageId: 'python', world: 'decode', title: 'Camembert de Normandie', titleJa: 'カマンベール・ド・ノルマンディ', category: 'food-culture', objective: 'dictionary', source: SRC.camembert, summaryJa: 'カマンベール・ド・ノルマンディはノルマンディ地方と結びつくチーズです。', prompt: '辞書から Camembert の region を取り出して Normandy と表示されるように、キーを埋めてください。', code: 'cheese = {"name": "Camembert", "region": "Normandy"}\nprint(cheese[___BLANK___])', answer: '"region"', expectedOutput: 'Normandy', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"region" キーに対応する値が Normandy です。', programmingExplanation: '辞書は key と value の対応表です。角括弧にキーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'fr_py_e01', languageId: 'python', world: 'execute', title: 'Minitel', titleJa: 'ミニテル', category: 'technology-history', objective: 'loop', source: SRC.minitel, summaryJa: 'ミニテルはフランスで普及したオンライン情報端末サービスです。', prompt: 'while ループで作られる出力を選んでください。', code: 'years = [1982, 1990, 2012]\ni = 0\nresult = ""\nwhile i < len(years):\n    result += str(years[i]) + "|"\n    i += 1\nprint(result[:-1])', options: ['1982|1990|2012', '2012|1990|1982', '1982|2012', '1990|2012'], answer: '1982|1990|2012', expectedOutput: '1982|1990|2012', hint: 'i は 0 から順に増えます。', explanation: 'リストの先頭から順に文字列へ追加し、最後の | だけを削ります。', programmingExplanation: 'while では条件が True の間だけ処理を繰り返し、i += 1 で次の添字へ進みます。' },
  { id: 'fr_py_e02', languageId: 'python', world: 'execute', title: 'Louis Pasteur and rabies vaccination', titleJa: 'ルイ・パスツールと狂犬病ワクチン', category: 'science-history', objective: 'function', source: SRC.pasteur, summaryJa: 'ルイ・パスツールはワクチン研究などで知られるフランスの科学者です。', prompt: '関数の戻り値と条件分岐を追い、出力を選んでください。', code: 'def status(year):\n    if year >= 1885:\n        return "rabies vaccine era"\n    return "before"\nprint(status(1885))', options: ['rabies vaccine era', 'before', '1885', 'True'], answer: 'rabies vaccine era', expectedOutput: 'rabies vaccine era', hint: '1885 >= 1885 の比較結果を見ます。', explanation: '条件が True なので最初の return が実行されます。', programmingExplanation: 'return は関数の結果を返して処理を終えます。if の比較式が True かを先に判断します。' },
  { id: 'fr_py_e03', languageId: 'python', world: 'execute', title: 'Lumiere brothers and early public cinema', titleJa: 'リュミエール兄弟と初期映画', category: 'film-history', objective: 'loop', source: SRC.lumiere, summaryJa: 'リュミエール兄弟は初期の公開映画上映と結びつけて語られます。', prompt: 'enumerate の番号と作品名を追い、出力を選んでください。', code: 'films = ["Arrival", "Factory"]\nlines = []\nfor index, title in enumerate(films, start=1):\n    lines.append(f"{index}:{title}")\nprint(",".join(lines))', options: ['1:Arrival,2:Factory', '0:Arrival,1:Factory', 'Arrival,Factory', '2:Arrival,1:Factory'], answer: '1:Arrival,2:Factory', expectedOutput: '1:Arrival,2:Factory', hint: 'enumerate(..., start=1) は番号を 1 から始めます。', explanation: '番号 1, 2 と各 title が組になり、join でカンマ区切りになります。', programmingExplanation: 'enumerate は添字と値を同時に取り出します。start を指定すると最初の番号を変えられます。' },
  { id: 'fr_py_e04', languageId: 'python', world: 'execute', title: 'Louis Braille and the Braille system', titleJa: 'ルイ・ブライユと点字', category: 'invention-accessibility', objective: 'dictionary', source: SRC.braille, summaryJa: 'ルイ・ブライユは点字体系の発展と結びつく人物です。', prompt: '入れ子データから値を取り出した結果を選んでください。', code: 'braille = {"cells": [{"dots": 6, "name": "basic cell"}]}\ncell = braille["cells"][0]\nprint(f"{cell[\'name\']}:{cell[\'dots\']}")', options: ['basic cell:6', 'cells:6', 'basic cell:dots', '6:basic cell'], answer: 'basic cell:6', expectedOutput: 'basic cell:6', hint: 'まず "cells" のリストから 0 番目を取り出します。', explanation: 'cell は辞書 {"dots": 6, "name": "basic cell"} になります。', programmingExplanation: '辞書とリストが入れ子になっているときは、外側から順にキーと添字をたどります。' },
];

const pyDebug = [
  { id: 'fr_py_b01', languageId: 'python', world: 'debug', title: 'Fete de la Musique', titleJa: '音楽の日', category: 'culture-festival', objective: 'loop', source: SRC.fete, summaryJa: 'Fete de la Musique はフランス発祥の音楽イベントとして知られます。', prompt: '曲名リストをすべて表示したいコードです。境界条件の不具合を直します。', code: 'songs = ["street", "jazz", "choir"]\nfor i in range(len(songs) + 1):\n    print(songs[i])', cause: 'range(len(songs) + 1) が存在しない添字まで進む', fix: 'range(len(songs)) に修正する', impact: '3曲だけを安全に順番表示できる', why: '最後の有効な添字は len(songs) - 1 だからです。', correctedCode: 'songs = ["street", "jazz", "choir"]\nfor i in range(len(songs)):\n    print(songs[i])', hint: '最後に i が何になるかを見ます。', explanation: 'len + 1 により範囲外アクセスが起きます。', programmingExplanation: 'Python の range は終了値を含みませんが、len + 1 にすると len まで到達します。' },
  { id: 'fr_py_b02', languageId: 'python', world: 'debug', title: 'French Republican calendar', titleJa: 'フランス共和暦', category: 'calendar-history', objective: 'dictionary', source: SRC.republicanCalendar, summaryJa: 'フランス共和暦は革命期に使われた独自の暦です。', prompt: '月番号から共和暦の月名を引くコードです。キーの対応を直します。', code: 'months = {1: "Vendemiaire", 2: "Brumaire"}\nmonth_number = 0\nprint(months[month_number])', cause: '辞書は 1 始まりのキーなのに 0 を参照している', fix: 'month_number = 1 に修正する', impact: '存在するキーから Vendemiaire を取得できる', why: '辞書のキーはデータで定義した番号に合わせる必要があります。', correctedCode: 'months = {1: "Vendemiaire", 2: "Brumaire"}\nmonth_number = 1\nprint(months[month_number])', hint: '辞書に存在するキーを確認します。', explanation: '0 というキーは months に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
  { id: 'fr_py_b03', languageId: 'python', world: 'debug', title: 'Limoges porcelain', titleJa: 'リモージュ磁器', category: 'craft', objective: 'strings', source: SRC.limoges, summaryJa: 'リモージュ磁器はフランスの陶磁器文化と結びつく工芸です。', prompt: '入力表記の大文字小文字が混ざっても判定できるようにします。', code: 'crafts = ["limoges porcelain", "glass"]\nname = "Limoges Porcelain"\nprint(name in crafts)', cause: '比較前に大文字小文字をそろえていない', fix: 'name.lower() in crafts に修正する', impact: '表記ゆれがあっても同じ工芸名として判定できる', why: 'リスト側が小文字なので、入力も小文字化して比較します。', correctedCode: 'crafts = ["limoges porcelain", "glass"]\nname = "Limoges Porcelain"\nprint(name.lower() in crafts)', hint: '文字列の形をそろえてから membership を見ます。', explanation: '大小文字が違う文字列はそのままでは一致しません。', programmingExplanation: 'lower() は文字列を小文字に変換します。in はリスト内に同じ値があるか調べます。' },
];

const jsDecode = [
  { id: 'fr_js_d01', languageId: 'javascript', world: 'decode', title: 'Palace of the Popes in Avignon', titleJa: 'アヴィニョン教皇宮殿', category: 'world-heritage', objective: 'object', source: SRC.avignon, summaryJa: 'アヴィニョン教皇宮殿は中世ヨーロッパ史と結びつく大規模な宮殿です。', prompt: 'オブジェクトから city を取り出して Avignon と表示されるように空欄を埋めてください。', code: 'const palace = { name: "Palace of the Popes", city: "Avignon" };\nconsole.log(palace.___BLANK___);', answer: 'city', expectedOutput: 'Avignon', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'palace.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトは property:value の形で値を持ちます。' },
  { id: 'fr_js_d02', languageId: 'javascript', world: 'decode', title: 'Strasbourg astronomical clock', titleJa: 'ストラスブールの天文時計', category: 'science-architecture', objective: 'array', source: SRC.strasbourgClock, summaryJa: 'ストラスブール大聖堂の天文時計は天文表示を備えた歴史的な時計です。', prompt: '配列から clock を取り出して表示する添字を埋めてください。', code: 'const features = ["cathedral", "clock", "figures"];\nconsole.log(features[___BLANK___]);', answer: '1', expectedOutput: 'clock', hint: '配列は 0 番目から数えます。', explanation: 'clock は2番目の要素なので添字は 1 です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'fr_js_d03', languageId: 'javascript', world: 'decode', title: 'Aubusson tapestry', titleJa: 'オービュッソンのタペストリー', category: 'craft', objective: 'strings', source: SRC.aubusson, summaryJa: 'オービュッソンのタペストリーはフランスの織物工芸として知られます。', prompt: 'テンプレートリテラルで Aubusson:tapestry と表示されるように空欄を埋めてください。', code: 'const place = "Aubusson";\nconst craft = ___BLANK___;\nconsole.log(`${place}:${craft}`);', answer: '"tapestry"', expectedOutput: 'Aubusson:tapestry', hint: 'craft に入る文字列を書きます。', explanation: '"tapestry" を入れると ${craft} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'fr_js_d04', languageId: 'javascript', world: 'decode', title: 'Roquefort cheese', titleJa: 'ロックフォールチーズ', category: 'food-culture', objective: 'switch', source: SRC.roquefort, summaryJa: 'ロックフォールはフランス南部と結びつく青かびチーズです。', prompt: 'switch で Roquefort の種類が cheese と表示されるように case を埋めてください。', code: 'const item = "Roquefort";\nswitch (item) {\n  case ___BLANK___:\n    console.log("cheese");\n    break;\n  default:\n    console.log("other");\n}', answer: '"Roquefort"', expectedOutput: 'cheese', hint: 'case には item と同じ文字列を書きます。', explanation: 'case "Roquefort" が item と一致します。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'fr_js_d05', languageId: 'javascript', world: 'decode', title: 'Camargue wetlands', titleJa: 'カマルグ湿地', category: 'nature', objective: 'loop', source: SRC.camargue, summaryJa: 'カマルグはローヌ川河口部の湿地景観で知られます。', prompt: 'wetland を含む値だけを表示する条件を完成させてください。', code: 'const areas = ["marsh wetland", "city"];\nfor (const area of areas) {\n  if (area.includes(___BLANK___)) console.log(area);\n}', answer: '"wetland"', expectedOutput: 'marsh wetland', hint: 'includes に探したい部分文字列を渡します。', explanation: '"wetland" を含む要素だけが出力されます。', programmingExplanation: 'for...of は配列の値を順に取り出し、includes は部分文字列の有無を返します。' },
];

const jsExecute = [
  { id: 'fr_js_e01', languageId: 'javascript', world: 'execute', title: 'Tour de France', titleJa: 'ツール・ド・フランス', category: 'sport', objective: 'loop', source: SRC.tour, summaryJa: 'ツール・ド・フランスはフランスを代表する自転車ロードレースです。', prompt: 'reduce で合計される距離を選んでください。', code: 'const stages = [120, 80, 100];\nconst total = stages.reduce((sum, km) => sum + km, 0);\nconsole.log(total);', options: ['300', '120', '200', '100'], answer: '300', expectedOutput: '300', hint: '0 から始めて3つの数を足します。', explanation: '120 + 80 + 100 = 300 です。', programmingExplanation: 'reduce は累積値を更新しながら配列を1つの値にまとめます。' },
  { id: 'fr_js_e02', languageId: 'javascript', world: 'execute', title: 'Cannes Film Festival', titleJa: 'カンヌ映画祭', category: 'film-culture', objective: 'array', source: SRC.cannes, summaryJa: 'カンヌ映画祭はフランスの国際映画祭として知られます。', prompt: 'filter と map の結果を選んでください。', code: 'const films = [{title:"A", selected:true},{title:"B", selected:false},{title:"C", selected:true}];\nconsole.log(films.filter(f => f.selected).map(f => f.title).join("-"));', options: ['A-C', 'A-B-C', 'B', 'C-A'], answer: 'A-C', expectedOutput: 'A-C', hint: 'selected が true のものだけ残します。', explanation: 'A と C だけが残り、title を取り出して - で連結します。', programmingExplanation: 'filter は条件に合う要素を残し、map は各要素を別の値へ変換します。' },
  { id: 'fr_js_e03', languageId: 'javascript', world: 'execute', title: 'Paris Metro', titleJa: 'パリ・メトロ', category: 'transport', objective: 'object', source: SRC.metro, summaryJa: 'パリ・メトロはパリ都市交通の代表的な鉄道網です。', prompt: 'Object.entries の出力順を追ってください。', code: 'const lines = { one: "La Defense", four: "Bagneux" };\nconst labels = [];\nfor (const [line, end] of Object.entries(lines)) {\n  labels.push(`${line}:${end}`);\n}\nconsole.log(labels.join(","));', options: ['one:La Defense,four:Bagneux', 'four:Bagneux,one:La Defense', 'La Defense,Bagneux', 'one,four'], answer: 'one:La Defense,four:Bagneux', expectedOutput: 'one:La Defense,four:Bagneux', hint: 'オブジェクトに書かれた順で entries が処理されます。', explanation: 'one の組、four の組の順に labels へ追加されます。', programmingExplanation: 'Object.entries は [key, value] の配列を作り、for...of で順に取り出せます。' },
  { id: 'fr_js_e04', languageId: 'javascript', world: 'execute', title: 'Concorde supersonic aircraft', titleJa: 'コンコルド超音速機', category: 'aviation', objective: 'function', source: SRC.concorde, summaryJa: 'コンコルドは英仏共同開発の超音速旅客機として知られます。', prompt: '関数と条件の戻り値を選んでください。', code: 'function speedLabel(mach) {\n  return mach > 1 ? "supersonic" : "subsonic";\n}\nconsole.log(speedLabel(2));', options: ['supersonic', 'subsonic', '2', 'true'], answer: 'supersonic', expectedOutput: 'supersonic', hint: '2 > 1 の判定を見ます。', explanation: '条件が true なので "supersonic" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsDebug = [
  { id: 'fr_js_b01', languageId: 'javascript', world: 'debug', title: 'French telephone-number formatting', titleJa: 'フランスの電話番号表記', category: 'administration', objective: 'strings', source: SRC.telephone, summaryJa: 'フランスの電話番号は桁数や区切りをそろえて扱う必要があります。', prompt: '10桁の番号を2桁ごとに区切りたいコードです。', code: 'const digits = "0123456789";\nconst formatted = digits.match(/.{1,3}/g).join(" ");\nconsole.log(formatted);', cause: '2桁ごとではなく3桁ごとに分割している', fix: '正規表現を /.{1,2}/g に修正する', impact: '01 23 45 67 89 のように2桁区切りになる', why: '量指定子の 2 が1グループの最大文字数を表します。', correctedCode: 'const digits = "0123456789";\nconst formatted = digits.match(/.{1,2}/g).join(" ");\nconsole.log(formatted);', hint: 'match の正規表現が何文字ずつ拾うかを見ます。', explanation: '3文字区切りでは電話番号の表示と合いません。', programmingExplanation: '正規表現の .{1,2} は1から2文字のまとまりを探します。' },
  { id: 'fr_js_b02', languageId: 'javascript', world: 'debug', title: 'Normandy landing beaches', titleJa: 'ノルマンディー上陸作戦の海岸', category: 'history', objective: 'loop', source: SRC.normandy, summaryJa: 'ノルマンディーの上陸海岸は第二次世界大戦史と結びつく場所です。', prompt: '対象の beach を見つけたら止めるコードです。', code: 'const beaches = ["Utah", "Omaha", "Gold"];\nlet found = "";\nfor (let i = 0; i <= beaches.length; i++) {\n  if (beaches[i] === "Omaha") found = beaches[i];\n}\nconsole.log(found);', cause: 'i <= beaches.length で範囲外まで読む可能性がある', fix: 'i < beaches.length に修正する', impact: '存在する要素だけを安全に確認できる', why: '配列の最後の添字は length - 1 です。', correctedCode: 'const beaches = ["Utah", "Omaha", "Gold"];\nlet found = "";\nfor (let i = 0; i < beaches.length; i++) {\n  if (beaches[i] === "Omaha") found = beaches[i];\n}\nconsole.log(found);', hint: '配列の最後の添字を確認します。', explanation: 'length と同じ添字は存在しません。', programmingExplanation: 'for ループの境界条件は配列アクセスの安全性に直結します。' },
  { id: 'fr_js_b03', languageId: 'javascript', world: 'debug', title: 'Guiana Space Centre', titleJa: 'ギアナ宇宙センター', category: 'space', objective: 'object', source: SRC.guiana, summaryJa: 'ギアナ宇宙センターは欧州の宇宙打ち上げ拠点として知られます。', prompt: '施設データがない場合でも安全に表示したいコードです。', code: 'const center = { name: "Guiana Space Centre" };\nconsole.log(center.location.city.toUpperCase());', cause: '存在しない location プロパティの中を読もうとしている', fix: 'center.location?.city ?? "unknown" のように安全に読む', impact: '欠けているデータでも例外で止まらない', why: 'optional chaining は途中が undefined のとき undefined を返します。', correctedCode: 'const center = { name: "Guiana Space Centre" };\nconst city = center.location?.city ?? "unknown";\nconsole.log(city);', hint: 'location があるかどうかを先に考えます。', explanation: 'undefined の city を読むと TypeError になります。', programmingExplanation: '?. と ?? を組み合わせると、欠損データを安全に扱えます。' },
];

const javaDecode = [
  { id: 'fr_java_d01', languageId: 'java', world: 'decode', title: 'Eiffel Tower', titleJa: 'エッフェル塔', category: 'architecture', objective: 'strings', source: SRC.eiffel, summaryJa: 'エッフェル塔は1889年のパリ万博と結びつく鉄塔です。', prompt: 'Eiffel:1889 と表示されるように文字列を完成させてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String name = "Eiffel";\n    System.out.println(name + ":" + ___BLANK___);\n  }\n}', answer: '1889', expectedOutput: 'Eiffel:1889', hint: '数値を文字列連結の右側に置きます。', explanation: '1889 を入れると name と連結されます。', programmingExplanation: 'Java では文字列と数値を + でつなぐと文字列として連結されます。' },
  { id: 'fr_java_d02', languageId: 'java', world: 'decode', title: 'Louvre Museum', titleJa: 'ルーヴル美術館', category: 'museum', objective: 'array', source: SRC.louvre, summaryJa: 'ルーヴル美術館はパリを代表する美術館です。', prompt: '配列から Louvre を表示する添字を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] museums = {"Orsay", "Louvre", "Rodin"};\n    System.out.println(museums[___BLANK___]);\n  }\n}', answer: '1', expectedOutput: 'Louvre', hint: 'Java の配列も 0 番目から数えます。', explanation: 'Louvre は2番目なので添字は 1 です。', programmingExplanation: '配列は型[] で作り、角括弧で要素を取り出します。' },
  { id: 'fr_java_d03', languageId: 'java', world: 'decode', title: 'Notre-Dame de Paris', titleJa: 'ノートルダム大聖堂', category: 'architecture-religion', objective: 'condition', source: SRC.notreDame, summaryJa: 'ノートルダム大聖堂はパリの歴史的な大聖堂です。', prompt: 'city が Paris のとき cathedral と表示される条件を完成させてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String city = "Paris";\n    if (city.___BLANK___("Paris")) System.out.println("cathedral");\n  }\n}', answer: 'equals', expectedOutput: 'cathedral', hint: 'Java の String 比較は equals を使います。', explanation: 'city.equals("Paris") が true になります。', programmingExplanation: 'String の内容比較には == ではなく equals メソッドを使います。' },
  { id: 'fr_java_d04', languageId: 'java', world: 'decode', title: 'Palace of Versailles', titleJa: 'ヴェルサイユ宮殿', category: 'world-heritage', objective: 'switch', source: SRC.versailles, summaryJa: 'ヴェルサイユ宮殿はフランス王政史と結びつく宮殿です。', prompt: 'switch で Versailles の種類を palace と表示する case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String site = "Versailles";\n    switch (site) {\n      case ___BLANK___: System.out.println("palace"); break;\n      default: System.out.println("other");\n    }\n  }\n}', answer: '"Versailles"', expectedOutput: 'palace', hint: 'case には site と同じ文字列を書きます。', explanation: 'case "Versailles" が一致して palace を出力します。', programmingExplanation: 'switch は式の値と case ラベルを比較して分岐します。' },
  { id: 'fr_java_d05', languageId: 'java', world: 'decode', title: 'Marie Curie', titleJa: 'マリー・キュリー', category: 'science-history', objective: 'function', source: SRC.curie, summaryJa: 'マリー・キュリーはノーベル賞史に残る科学者です。', prompt: 'メソッドに Physics を渡して Curie:Physics と表示されるようにしてください。', code: 'public class Main {\n  static String label(String field) { return "Curie:" + field; }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"Physics"', expectedOutput: 'Curie:Physics', hint: 'メソッドの引数に文字列を渡します。', explanation: '"Physics" が field に入り、戻り値に連結されます。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
];

const javaExecute = [
  { id: 'fr_java_e01', languageId: 'java', world: 'execute', title: 'Champagne hillsides houses and cellars', titleJa: 'シャンパーニュの丘陵・メゾンとカーヴ', category: 'world-heritage-food', objective: 'array', source: SRC.champagne, summaryJa: 'シャンパーニュの景観はワイン文化と結びつく世界遺産です。', prompt: 'enhanced for で連結される出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] words = {"hillsides", "houses", "cellars"};\n    String result = "";\n    for (String word : words) result += word.charAt(0);\n    System.out.println(result);\n  }\n}', options: ['hhc', 'hHC', 'hillsideshousescellars', 'chh'], answer: 'hhc', expectedOutput: 'hhc', hint: '各単語の先頭文字だけを足します。', explanation: 'h, h, c が順に追加されます。', programmingExplanation: 'enhanced for は配列の値を順に取り出し、charAt(0) は先頭文字を返します。' },
  { id: 'fr_java_e02', languageId: 'java', world: 'execute', title: 'Ariane launch vehicle', titleJa: 'アリアンロケット', category: 'space-industry', objective: 'condition', source: SRC.ariane, summaryJa: 'アリアンは欧州の宇宙輸送を支える打ち上げ機シリーズです。', prompt: '条件分岐の結果を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int payload = 5;\n    if (payload >= 5) System.out.println("launch-ready");\n    else System.out.println("hold");\n  }\n}', options: ['launch-ready', 'hold', '5', 'true'], answer: 'launch-ready', expectedOutput: 'launch-ready', hint: '5 >= 5 は true です。', explanation: '条件が true なので最初の println が実行されます。', programmingExplanation: '比較演算子 >= は左辺が右辺以上かを調べます。' },
  { id: 'fr_java_e03', languageId: 'java', world: 'execute', title: 'Airbus in Toulouse', titleJa: 'トゥールーズとエアバス', category: 'aviation-industry', objective: 'object', source: SRC.airbus, summaryJa: 'トゥールーズはエアバス産業と強く結びつく都市です。', prompt: 'オブジェクトのフィールド出力を選んでください。', code: 'class Maker { String city; Maker(String city){ this.city = city; } }\npublic class Main {\n  public static void main(String[] args) {\n    Maker airbus = new Maker("Toulouse");\n    System.out.println("Airbus:" + airbus.city);\n  }\n}', options: ['Airbus:Toulouse', 'Toulouse:Airbus', 'Airbus:null', 'Maker:Toulouse'], answer: 'Airbus:Toulouse', expectedOutput: 'Airbus:Toulouse', hint: 'constructor が city フィールドに値を入れます。', explanation: 'new Maker("Toulouse") により city が Toulouse になります。', programmingExplanation: 'コンストラクタ内の this.city は作成したオブジェクトのフィールドを指します。' },
  { id: 'fr_java_e04', languageId: 'java', world: 'execute', title: 'Dordogne river valley', titleJa: 'ドルドーニュ渓谷', category: 'geography', objective: 'loop', source: SRC.dordogne, summaryJa: 'ドルドーニュ地方は河川景観や歴史的集落で知られます。', prompt: '合計される値を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int[] visits = {2, 3, 4};\n    int total = 0;\n    for (int v : visits) total += v;\n    System.out.println(total);\n  }\n}', options: ['9', '6', '4', '234'], answer: '9', expectedOutput: '9', hint: '2 + 3 + 4 を計算します。', explanation: 'total は 0 から始まり、各値が足されて 9 になります。', programmingExplanation: 'int 配列の値を enhanced for で順に取り出し、累積変数に加えます。' },
];

const javaDebug = [
  { id: 'fr_java_b01', languageId: 'java', world: 'debug', title: 'Musee d Orsay', titleJa: 'オルセー美術館', category: 'museum', objective: 'strings', source: SRC.orsay, summaryJa: 'オルセー美術館は近代美術を中心に収蔵するパリの美術館です。', prompt: '美術館名の文字列比較を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String museum = new String("Orsay");\n    System.out.println(museum == "Orsay");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'museum.equals("Orsay") に修正する', impact: '文字列の中身が同じか正しく判定できる', why: '== は参照の同一性を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String museum = new String("Orsay");\n    System.out.println(museum.equals("Orsay"));\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'fr_java_b02', languageId: 'java', world: 'debug', title: 'Sorbonne University', titleJa: 'ソルボンヌ大学', category: 'education-history', objective: 'array', source: SRC.sorbonne, summaryJa: 'ソルボンヌはパリの高等教育史と結びつく名称です。', prompt: '学部名配列を安全に表示するループを直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] faculties = {"Arts", "Science"};\n    for (int i = 0; i <= faculties.length; i++) System.out.println(faculties[i]);\n  }\n}', cause: 'i <= faculties.length で範囲外の添字に到達する', fix: 'i < faculties.length に修正する', impact: '配列内の要素だけを表示できる', why: '最後の添字は length - 1 です。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String[] faculties = {"Arts", "Science"};\n    for (int i = 0; i < faculties.length; i++) System.out.println(faculties[i]);\n  }\n}', hint: '配列の長さと最後の添字は同じではありません。', explanation: 'length と同じ添字は範囲外です。', programmingExplanation: '配列走査の基本条件は i < array.length です。' },
  { id: 'fr_java_b03', languageId: 'java', world: 'debug', title: 'Marianne symbol', titleJa: 'マリアンヌ', category: 'national-symbol', objective: 'object', source: SRC.marianne, summaryJa: 'マリアンヌはフランス共和国を象徴する女性像です。', prompt: '欠けた説明データでも安全に扱うコードへ直します。', code: 'class SymbolData { String note; }\npublic class Main {\n  public static void main(String[] args) {\n    SymbolData data = new SymbolData();\n    System.out.println(data.note.toUpperCase());\n  }\n}', cause: 'note が null のままメソッドを呼んでいる', fix: 'null チェックをしてから toUpperCase() を呼ぶ', impact: '説明が未設定でも NullPointerException を防げる', why: 'null にはメソッドを呼び出せません。', correctedCode: 'class SymbolData { String note; }\npublic class Main {\n  public static void main(String[] args) {\n    SymbolData data = new SymbolData();\n    if (data.note != null) System.out.println(data.note.toUpperCase());\n    else System.out.println("UNKNOWN");\n  }\n}', hint: 'フィールドの初期値を確認します。', explanation: '参照型フィールドは明示的に入れないと null です。', programmingExplanation: 'null チェックにより、存在しないオブジェクトへのメソッド呼び出しを避けます。' },
];

const pyFinalDecode = [
  { id: 'final_decode_FR_python_01', languageId: 'python', world: 'decode', title: 'Carcassonne fortified city', titleJa: 'カルカソンヌの歴史的城塞都市', category: 'world-heritage', objective: 'function', source: SRC.carcassonne, summaryJa: 'カルカソンヌは城壁都市として知られるフランスの世界遺産です。', prompt: '関数と条件を使い、Carcassonne:fortified と表示されるように空欄を埋めてください。', code: 'def label(name, walls):\n    if walls:\n        return f"{name}:fortified"\n    return f"{name}:open"\nprint(label("Carcassonne", ___BLANK___))', answer: 'True', expectedOutput: 'Carcassonne:fortified', hint: 'if walls が True になる値を入れます。', explanation: 'True を渡すと fortified 側の return が実行されます。', programmingExplanation: '真偽値を引数として渡し、if で処理を分けます。' },
  { id: 'final_decode_FR_python_02', languageId: 'python', world: 'decode', title: 'Chartres Cathedral stained glass', titleJa: 'シャルトル大聖堂のステンドグラス', category: 'world-heritage', objective: 'loop', source: SRC.chartres, summaryJa: 'シャルトル大聖堂はステンドグラスでも知られる世界遺産です。', prompt: 'blue を含む窓だけを集めて blue と表示する条件を埋めてください。', code: 'windows = ["blue", "clear", "blue"]\nselected = []\nfor color in windows:\n    if color == ___BLANK___:\n        selected.append(color)\nprint(selected[0])', answer: '"blue"', expectedOutput: 'blue', hint: 'color と同じ文字列を比較します。', explanation: '"blue" と一致する要素だけ selected に入ります。', programmingExplanation: 'for と if を組み合わせると、条件に合う値だけを集められます。' },
  { id: 'final_decode_FR_python_03', languageId: 'python', world: 'decode', title: 'Pont du Gard', titleJa: 'ポン・デュ・ガール', category: 'world-heritage', objective: 'dictionary', source: SRC.pontGard, summaryJa: 'ポン・デュ・ガールは古代ローマ水道橋として知られるフランスの世界遺産です。', prompt: '辞書と関数を使い、Pont du Gard:bridge と表示するキーを埋めてください。', code: 'record = {"name": "Pont du Gard", "type": "bridge"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(record))', answer: '"type"', expectedOutput: 'Pont du Gard:bridge', hint: 'bridge を取り出す辞書キーを選びます。', explanation: '"type" キーの値が bridge です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyFinalExecute = [
  { id: 'final_execute_FR_python_01', languageId: 'python', world: 'execute', title: 'Origins of the metric system in revolutionary France', titleJa: '革命期フランスとメートル法', category: 'science-standards', objective: 'dictionary', source: SRC.metric, summaryJa: 'メートル法は革命期フランスの標準化の流れと結びついて発展しました。', prompt: '辞書とリスト処理で合計される値を選んでください。', code: 'units = [{"name": "metre", "base": True}, {"name": "litre", "base": False}, {"name": "gram", "base": True}]\ncount = sum(1 for unit in units if unit["base"])\nprint(count)', options: ['2', '3', '1', 'metre'], answer: '2', expectedOutput: '2', hint: 'base が True の辞書だけ数えます。', explanation: 'metre と gram の2件が条件に合います。', programmingExplanation: 'ジェネレータ式を sum に渡すと、条件に合う件数を数えられます。' },
  { id: 'final_execute_FR_python_02', languageId: 'python', world: 'execute', title: 'TGV service', titleJa: 'TGV', category: 'transport', objective: 'list', source: SRC.tgv, summaryJa: 'TGV はフランスの高速鉄道サービスとして知られます。', prompt: '速度条件で絞り、速い順に並べた結果を選んでください。', code: 'trains = [{"name":"A","speed":300},{"name":"B","speed":260},{"name":"C","speed":320}]\nfast = [t for t in trains if t["speed"] >= 300]\nfast.sort(key=lambda t: t["speed"], reverse=True)\nprint("-".join(t["name"] for t in fast))', options: ['C-A', 'A-C', 'A-B-C', 'B-A'], answer: 'C-A', expectedOutput: 'C-A', hint: '300以上を残し、速度の降順です。', explanation: 'C(320), A(300) の順に残ります。', programmingExplanation: 'リスト内包表記で絞り込み、sort の key と reverse で順序を指定します。' },
];

const pyFinalDebug = [
  { id: 'final_debug_FR_python_01', languageId: 'python', world: 'debug', title: 'Burgundy vineyard climats', titleJa: 'ブルゴーニュのクリマ', category: 'world-heritage-wine', objective: 'dictionary', source: SRC.burgundy, summaryJa: 'ブルゴーニュのクリマはブドウ畑の区画とワイン文化を示す世界遺産です。', prompt: '面積データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "A", "area": "12.5"}, {"name": "B"}]\nlarge = []\nfor record in records:\n    if float(record["area"]) > 10:\n        large.append(record["name"])\nprint(large)', cause: 'area がない辞書でも record["area"] を読んでいる', fix: 'record.get("area") を確認してから float に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せます。', correctedCode: 'records = [{"name": "A", "area": "12.5"}, {"name": "B"}]\nlarge = []\nfor record in records:\n    area = record.get("area")\n    if area is not None and float(area) > 10:\n        large.append(record["name"])\nprint(large)', hint: 'B の辞書に area キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get と None 判定を使うと、欠損データを含む一覧を安全に処理できます。' },
];

const jsFinalDecode = [
  { id: 'final_decode_FR_javascript_01', languageId: 'javascript', world: 'decode', title: 'Loire Valley cultural landscape', titleJa: 'ロワール渓谷', category: 'world-heritage', objective: 'array', source: SRC.loire, summaryJa: 'ロワール渓谷は城館と河川景観で知られる文化的景観です。', prompt: 'array methods と条件で castle を含む名前を取り出してください。', code: 'const sites = ["river", "castle", "garden"];\nconst result = sites.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"castle"', expectedOutput: 'castle', hint: 'includes に探す文字列を渡します。', explanation: '"castle" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_FR_javascript_02', languageId: 'javascript', world: 'decode', title: 'Vezelay Basilica', titleJa: 'ヴェズレーの教会と丘', category: 'world-heritage', objective: 'object', source: SRC.vezelay, summaryJa: 'ヴェズレーは巡礼路と結びつくフランスの世界遺産です。', prompt: 'find で Vezelay の record を探す条件を埋めてください。', code: 'const records = [{name:"Chartres", type:"cathedral"}, {name:"Vezelay", type:"basilica"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.type);', answer: '"Vezelay"', expectedOutput: 'basilica', hint: 'name と一致する文字列を書きます。', explanation: 'Vezelay の record が見つかり、type が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_FR_javascript_03', languageId: 'javascript', world: 'decode', title: 'Ecole de Nancy and Art Nouveau', titleJa: 'ナンシー派とアール・ヌーヴォー', category: 'art-history', objective: 'class', source: SRC.nancy, summaryJa: 'ナンシー派はアール・ヌーヴォーと結びつく装飾芸術運動です。', prompt: 'class のインスタンスを map して Nancy:Art Nouveau と表示してください。', code: 'class Movement { constructor(city, style) { this.city = city; this.style = style; } }\nconst items = [new Movement("Nancy", ___BLANK___)];\nconsole.log(items.map(item => `${item.city}:${item.style}`).join(","));', answer: '"Art Nouveau"', expectedOutput: 'Nancy:Art Nouveau', hint: 'constructor の style に入る文字列です。', explanation: 'style フィールドに Art Nouveau が入り、map で表示用文字列になります。', programmingExplanation: 'class で作った object のプロパティは this に保存され、map で変換できます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_FR_javascript_01', languageId: 'javascript', world: 'execute', title: 'Cite des sciences et de l industrie', titleJa: 'シテ科学産業博物館', category: 'science-museum', objective: 'array', source: SRC.citeScience, summaryJa: 'シテ科学産業博物館はパリの科学展示施設です。', prompt: '条件で絞り、名前をソートした結果を選んでください。', code: 'const halls = [{name:"Space", open:true}, {name:"Math", open:true}, {name:"Archive", open:false}];\nconst names = halls.filter(h => h.open).map(h => h.name).sort();\nconsole.log(names.join("-"));', options: ['Math-Space', 'Space-Math', 'Archive-Math-Space', 'Space'], answer: 'Math-Space', expectedOutput: 'Math-Space', hint: 'open が true のものだけ残し、アルファベット順です。', explanation: 'Math と Space が残り、sort で Math が先です。', programmingExplanation: 'filter, map, sort を順に適用して配列を変換します。' },
  { id: 'final_execute_FR_javascript_02', languageId: 'javascript', world: 'execute', title: 'Paris Agreement', titleJa: 'パリ協定', category: 'environment', objective: 'array', source: SRC.parisAgreement, summaryJa: 'パリ協定は気候変動対策の国際的な枠組みです。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const groups = [{region:"A", pledges:[1,2]}, {region:"B", pledges:[3]}];\nconst total = groups.reduce((sum, group) => sum + group.pledges.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['6', '3', '2', 'A-B'], answer: '6', expectedOutput: '6', hint: '内側の配列も合計します。', explanation: 'A は 3、B は 3、合計 6 です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_FR_javascript_01', languageId: 'javascript', world: 'debug', title: 'Palace of Fontainebleau', titleJa: 'フォンテーヌブロー宮殿', category: 'world-heritage', objective: 'object', source: SRC.fontainebleau, summaryJa: 'フォンテーヌブロー宮殿は長い王室史を持つフランスの宮殿です。', prompt: 'プロパティ名と安全なアクセスを直します。', code: 'const site = { name: "Fontainebleau", kind: "palace" };\nif (site.type === "palace") console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'type という存在しないプロパティと details の未確認アクセスがある', fix: 'site.kind を比較し、site.details?.city のように安全に読む', impact: '正しいプロパティで判定し、欠損データでも停止しない', why: '存在しないプロパティは undefined になります。', correctedCode: 'const site = { name: "Fontainebleau", kind: "palace" };\nif (site.kind === "palace") console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'kind が正しいキーで、details は存在確認が必要です。', programmingExplanation: 'strict comparison と optional chaining を組み合わせると、安全に object を扱えます。' },
];

const javaFinalDecode = [
  { id: 'final_decode_FR_java_01', languageId: 'java', world: 'decode', title: 'Provence lavender', titleJa: 'プロヴァンスのラベンダー', category: 'regional-culture', objective: 'function', source: SRC.provence, summaryJa: 'プロヴァンスはラベンダー畑の景観でも知られる地域です。', prompt: 'メソッドと条件を使い Provence:lavender と表示してください。', code: 'public class Main {\n  static String label(String region, boolean flower) { return flower ? region + ":lavender" : region + ":other"; }\n  public static void main(String[] args) { System.out.println(label("Provence", ___BLANK___)); }\n}', answer: 'true', expectedOutput: 'Provence:lavender', hint: '三項演算子で前半を選ぶ真偽値です。', explanation: 'true を渡すと lavender 側が返ります。', programmingExplanation: 'Java の boolean は true/false の小文字で書きます。' },
  { id: 'final_decode_FR_java_02', languageId: 'java', world: 'decode', title: 'Lyon gastronomy', titleJa: 'リヨンの食文化', category: 'food-culture', objective: 'array', source: SRC.lyon, summaryJa: 'リヨンは食文化の都市としても知られます。', prompt: 'ArrayList から bouchon を含む値だけ表示する条件を埋めてください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> places = new ArrayList<>();\n    places.add("bouchon"); places.add("museum");\n    for (String place : places) if (place.equals(___BLANK___)) System.out.println(place);\n  }\n}', answer: '"bouchon"', expectedOutput: 'bouchon', hint: 'equals に比較したい文字列を渡します。', explanation: '"bouchon" と一致する要素だけ出力します。', programmingExplanation: 'ArrayList も enhanced for で走査できます。String 比較には equals を使います。' },
  { id: 'final_decode_FR_java_03', languageId: 'java', world: 'decode', title: 'Bordeaux port city', titleJa: 'ボルドー月の港', category: 'world-heritage', objective: 'map', source: SRC.bordeaux, summaryJa: 'ボルドーは港湾都市の歴史的景観で世界遺産に登録されています。', prompt: 'HashMap とメソッドで Bordeaux:port と表示するキーを埋めてください。', code: 'import java.util.HashMap;\npublic class Main {\n  static String describe(HashMap<String,String> data) { return data.get("city") + ":" + data.get(___BLANK___); }\n  public static void main(String[] args) {\n    HashMap<String,String> data = new HashMap<>();\n    data.put("city", "Bordeaux"); data.put("role", "port");\n    System.out.println(describe(data));\n  }\n}', answer: '"role"', expectedOutput: 'Bordeaux:port', hint: 'port が入っている key を指定します。', explanation: '"role" キーから port が取り出されます。', programmingExplanation: 'HashMap の get は key に対応する値を返します。' },
];

const javaFinalExecute = [
  { id: 'final_execute_FR_java_01', languageId: 'java', world: 'execute', title: 'Chateau de Chambord', titleJa: 'シャンボール城', category: 'architecture', objective: 'object', source: SRC.chateaux, summaryJa: 'シャンボール城はロワール地方を代表する城館の一つです。', prompt: 'オブジェクト一覧を条件で選び、出力される名前を選んでください。', code: 'import java.util.ArrayList;\nclass Castle { String name; int towers; Castle(String n, int t){ name=n; towers=t; } }\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Castle> castles = new ArrayList<>();\n    castles.add(new Castle("Chambord", 4)); castles.add(new Castle("Small", 1));\n    for (Castle castle : castles) if (castle.towers >= 4) System.out.println(castle.name);\n  }\n}', options: ['Chambord', 'Small', '4', 'Chambord Small'], answer: 'Chambord', expectedOutput: 'Chambord', hint: 'towers が 4 以上の object だけです。', explanation: 'Chambord だけが条件を満たします。', programmingExplanation: 'クラスのフィールドを条件に使い、ArrayList を走査します。' },
  { id: 'final_execute_FR_java_02', languageId: 'java', world: 'execute', title: 'French social security', titleJa: 'フランスの社会保障', category: 'public-system', objective: 'map', source: SRC.secu, summaryJa: 'フランスの社会保障制度は医療や年金などの分野を支える仕組みです。', prompt: 'HashMap とループで合計される値を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String,Integer> branches = new HashMap<>();\n    branches.put("health", 2); branches.put("pension", 3);\n    int total = 0;\n    for (int value : branches.values()) total += value;\n    System.out.println(total);\n  }\n}', options: ['5', '2', '3', 'healthpension'], answer: '5', expectedOutput: '5', hint: 'values() の数値をすべて足します。', explanation: '2 + 3 = 5 です。', programmingExplanation: 'HashMap.values() は値の collection を返し、for で合計できます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_FR_java_01', languageId: 'java', world: 'debug', title: 'Guadeloupe archipelago', titleJa: 'グアドループ', category: 'overseas-geography', objective: 'object', source: SRC.guadeloupe, summaryJa: 'グアドループはカリブ海にあるフランスの海外地域です。', prompt: '数値文字列と欠損データを安全に扱うコードへ直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String area = "1,628 km2";\n    int value = Integer.parseInt(area);\n    System.out.println(value);\n  }\n}', cause: '単位とカンマを含む文字列をそのまま整数化している', fix: '数字以外を取り除いてから parseInt し、例外にも備える', impact: '表示用文字列から必要な数値だけを安全に取り出せる', why: 'parseInt は純粋な数字文字列だけを受け付けます。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String area = "1,628 km2";\n    try {\n      int value = Integer.parseInt(area.replaceAll("[^0-9]", ""));\n      System.out.println(value);\n    } catch (NumberFormatException e) {\n      System.out.println("unknown");\n    }\n  }\n}', hint: 'parseInt に渡す前の文字列を確認します。', explanation: 'カンマや単位があると NumberFormatException になります。', programmingExplanation: 'replaceAll で不要な文字を除去し、try/catch で変換失敗に備えます。' },
];

const allSpecs = [
  ...pyDecode, ...pyExecute, ...pyDebug, ...pyFinalDecode, ...pyFinalExecute, ...pyFinalDebug,
  ...jsDecode, ...jsExecute, ...jsDebug, ...jsFinalDecode, ...jsFinalExecute, ...jsFinalDebug,
  ...javaDecode, ...javaExecute, ...javaDebug, ...javaFinalDecode, ...javaFinalExecute, ...javaFinalDebug,
];

export const FRANCE_FACTS = allSpecs.map(makeFact);
export const FRANCE_ASSIGNMENTS = allSpecs.map(assignment);

export const FR_PY_DECODE = pyDecode.map(decode);
export const FR_PY_EXECUTE = pyExecute.map(execute);
export const FR_PY_DEBUG = pyDebug.map(debug);
export const FR_JS_DECODE = jsDecode.map(decode);
export const FR_JS_EXECUTE = jsExecute.map(execute);
export const FR_JS_DEBUG = jsDebug.map(debug);
export const FR_JAVA_DECODE = javaDecode.map(decode);
export const FR_JAVA_EXECUTE = javaExecute.map(execute);
export const FR_JAVA_DEBUG = javaDebug.map(debug);

function mission(title, questions, type) {
  return { type, title, unlock: { requiresStageClear: true }, questions };
}

export const FRANCE_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: FRANCE PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: FRANCE JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: FRANCE JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: FRANCE PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: FRANCE JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: FRANCE JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: FRANCE PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: FRANCE JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: FRANCE JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
