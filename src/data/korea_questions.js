const SRC = {
  seoul: 'https://www.britannica.com/place/Seoul',
  hangul: 'https://www.britannica.com/topic/Hangul',
  sejong: 'https://www.britannica.com/biography/Sejong',
  democracy: 'https://www.britannica.com/place/South-Korea/Government-and-society',
  flag: 'https://www.britannica.com/topic/flag-of-South-Korea',
  joseon: 'https://www.britannica.com/place/Korea/The-Choson-dynasty',
  marchFirst: 'https://www.britannica.com/event/March-First-Movement',
  koreanWar: 'https://www.britannica.com/event/Korean-War',
  dmz: 'https://www.britannica.com/place/Demilitarized-Zone-Korea',
  hanRiver: 'https://www.britannica.com/place/Han-River-South-Korea',
  subway: 'https://www.britannica.com/place/Seoul/Transportation',
  semiconductor: 'https://www.britannica.com/place/South-Korea/Resources-and-power',
  kaist: 'https://www.britannica.com/place/South-Korea/Education',
  hallyu: 'https://www.britannica.com/topic/Hallyu',
  kimchi: 'https://www.britannica.com/topic/kimchi',
  bulguksa: 'https://whc.unesco.org/en/list/736',
  changdeokgung: 'https://whc.unesco.org/en/list/816',
  jongmyo: 'https://whc.unesco.org/en/list/737',
  jeju: 'https://whc.unesco.org/en/list/1264',
  geography: 'https://www.britannica.com/place/South-Korea',
  economy: 'https://www.britannica.com/place/South-Korea/Economy',
  international: 'https://www.britannica.com/place/South-Korea/Government-and-society',
  seoulOlympics: 'https://www.britannica.com/event/Seoul-1988-Olympic-Games',
  pyeongchang: 'https://www.britannica.com/event/Pyeongchang-2018-Olympic-Winter-Games',
  worldCup2002: 'https://www.britannica.com/sports/World-Cup-soccer',
  postalCode: 'https://www.britannica.com/place/South-Korea',
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
  return `kr:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

const FACT_DETAILS = {
  kr_py_d01: {
    backgroundJa: 'ソウルは韓国の首都で、漢江沿いに広がる人口約950万人の大都市です。',
    historyJa: '14世紀末に朝鮮王朝の都「漢城」として定められ、現在まで継続して韓国の中心都市です。',
    episodeJa: '漢江を境に北の江北と南の江南に分かれ、江南は1970年代以降に急速に開発された新しい中心地区です。',
    keyPointsJa: ['朝鮮王朝以来の都', '人口約950万人', '漢江で江北・江南に分かれる', '江南は1970年代以降に発展'],
  },
  kr_py_d02: {
    backgroundJa: 'ハングルは1443年に世宗大王が創製した、朝鮮語の音を表すための文字体系です。',
    historyJa: '1443年に創製され、1446年に「訓民正音」として公布されました。',
    episodeJa: '子音と母音を組み合わせて音節を作る合理的な構造を持ち、創製の経緯を説明する解説書も同時に作られました。',
    keyPointsJa: ['1443年に創製', '1446年に訓民正音として公布', '世宗大王が中心となって作成', '音を表す合理的な文字体系'],
  },
  kr_py_d03: {
    backgroundJa: '韓国は大統領制をとる民主国家で、国民が直接選出する大統領と国会（立法府）から構成されます。',
    historyJa: '1948年に大韓民国が成立し、現行憲法は1987年の民主化を経て改正されたものです。',
    episodeJa: '権力分立の原則のもとで行政・立法・司法が分かれ、1988年には憲法裁判所が設置されました。',
    keyPointsJa: ['1948年に大韓民国成立', '大統領制の民主国家', '1987年に現行憲法へ改正', '1988年に憲法裁判所設置'],
  },
  kr_py_d04: {
    backgroundJa: '韓国にはソウル、釜山、仁川などの主要都市があります。',
    historyJa: '釜山は韓国第2の都市で、朝鮮半島南東部の港湾都市として発展しました。',
    episodeJa: '仁川はソウルの西に位置し、韓国最大の国際空港である仁川国際空港が所在します。',
    keyPointsJa: ['ソウルが首都', '釜山は韓国第2の都市', '仁川は国際空港の所在地', '主要都市は港湾・空港の拠点'],
  },
  kr_py_d05: {
    backgroundJa: 'キムチは白菜などの野菜を発酵させた韓国の伝統的な食文化を代表する料理です。',
    historyJa: '発酵保存の知恵は古くから伝わり、地域や家庭によって作り方が異なる多様な種類があります。',
    episodeJa: '2013年にキムジャン（キムチを作り共有する文化）がユネスコ無形文化遺産に登録されました。',
    keyPointsJa: ['白菜などを発酵させた料理', '地域・家庭で作り方が異なる', '2013年にユネスコ無形文化遺産登録', '韓国の食文化を代表する'],
  },
  final_decode_KR_python_01: {
    backgroundJa: '仏国寺は慶州にある仏教寺院で、石窟庵とともに新羅時代の仏教美術を代表する世界遺産です。',
    historyJa: '8世紀の新羅時代に建立され、1995年にユネスコ世界遺産に登録されました。',
    episodeJa: '境内には多宝塔・釈迦塔などの石造建築が現存し、当時の建築技術と仏教美術の水準の高さを示しています。',
    keyPointsJa: ['8世紀の新羅時代に建立', '1995年にユネスコ世界遺産登録', '石窟庵とともに登録', '多宝塔・釈迦塔が現存'],
  },
  final_decode_KR_python_02: {
    backgroundJa: '三・一独立運動は1919年3月1日に朝鮮半島全土で起こった独立運動です。',
    historyJa: '日本の植民地統治下で起こり、これを機に上海で大韓民国臨時政府が樹立されました。',
    episodeJa: '現在3月1日は韓国の国民の祝日「三一節」として、独立運動を記念する式典が行われます。',
    keyPointsJa: ['1919年3月1日に発生', '日本の植民地統治下の運動', '上海で臨時政府樹立につながる', '3月1日は国民の祝日「三一節」'],
  },
  final_decode_KR_python_03: {
    backgroundJa: '済州島は朝鮮半島南方に位置する韓国最大の島で、火山活動によって形成された島です。',
    historyJa: '済州火山島と溶岩洞窟群として2007年にユネスコ世界遺産（自然遺産）に登録されました。',
    episodeJa: '島の最高峰ハルラ山は韓国最高峰でもあり、独特な火山地形と生態系が評価されています。',
    keyPointsJa: ['韓国最大の島', '2007年にユネスコ世界遺産登録（自然遺産）', 'ハルラ山は韓国最高峰', '火山活動で形成された地形'],
  },
  kr_py_e01: {
    backgroundJa: 'ソウルの地下鉄は世界最大級の路線網を持つ都市交通システムです。',
    historyJa: '1974年に1号線が開業し、その後路線網が拡大し続けています。',
    episodeJa: '首都圏電鉄として仁川・京畿道とも広く接続し、1日あたり数百万人が利用します。',
    keyPointsJa: ['1974年に1号線開業', '世界最大級の路線網', '首都圏全体と接続', '1日数百万人が利用'],
  },
  kr_py_e02: {
    backgroundJa: 'ハングルは子音と母音を組み合わせて音節を作る文字体系です。',
    historyJa: '基本の子音と母音はそれぞれ独立した字母として設計され、組み合わせることで様々な音節を表現できます。',
    episodeJa: '創製当初は子音17字・母音11字で構成され、現代では一部の字が使われなくなり24字が基本字母として使われています。',
    keyPointsJa: ['子音と母音を組み合わせる', '創製当初は28字', '現代では24字が基本', '組み合わせで音節を作る'],
  },
  kr_py_e03: {
    backgroundJa: 'Hallyu（韓流）は音楽・ドラマ・映画・ファッション・美容・食文化などを含む韓国大衆文化の世界的な広がりです。',
    historyJa: '1990年代後半から東アジアを中心に広がり、2000年代以降は世界的な現象となりました。',
    episodeJa: '2020年には韓国映画「パラサイト 半地下の家族」がアカデミー賞作品賞を受賞し、国際的な評価が高まりました。',
    keyPointsJa: ['1990年代後半から拡大', '音楽・ドラマ・映画など多分野', '2020年に映画がアカデミー賞受賞', '世界的な文化的影響力を持つ'],
  },
  kr_py_e04: {
    backgroundJa: '韓国は半導体・自動車・造船・電池などの産業で世界的な地位を持つ国です。',
    historyJa: '1960年代以降の輸出主導型の経済成長を経て、ハイテク産業を中心とする経済構造に発展しました。',
    episodeJa: '半導体は韓国の主要な輸出品の一つで、世界のサプライチェーンにおいて重要な役割を担っています。',
    keyPointsJa: ['1960年代以降に輸出主導で成長', '半導体・自動車・造船が主要産業', '世界のサプライチェーンで重要', 'ハイテク産業中心の経済'],
  },
  final_execute_KR_python_01: {
    backgroundJa: '韓国には登録年や種別の異なる複数のユネスコ世界遺産があります。',
    historyJa: '仏国寺と石窟庵は1995年、済州火山島は2007年にそれぞれユネスコ世界遺産に登録されました。',
    episodeJa: '韓国国内のユネスコ世界遺産は文化遺産・自然遺産を合わせて十数件に及び、各地域に分布しています。',
    keyPointsJa: ['登録年は遺産ごとに異なる', '文化遺産と自然遺産がある', '各地域に分布', '十数件の世界遺産がある'],
  },
  final_execute_KR_python_02: {
    backgroundJa: '韓国はOECD、G20、APECなど複数の国際機関に加盟しています。',
    historyJa: 'OECDには1996年に加盟し、国連には1991年に南北同時加盟という形で加盟しました。',
    episodeJa: '2010年にはソウルでG20首脳会合が開催され、韓国は国際的な経済協力の場でも役割を担っています。',
    keyPointsJa: ['国連には1991年に南北同時加盟', 'OECDには1996年加盟', '2010年にG20ソウル会合開催', 'APECにも加盟'],
  },
  kr_py_b01: {
    backgroundJa: 'ウォン（KRW）は韓国の公式通貨です。',
    historyJa: '1962年に現行のウォンが導入され、それ以前の貨幣を置き換えました。',
    episodeJa: 'ウォン紙幣には朝鮮王朝の王や学者などの肖像が描かれ、世宗大王の肖像が1万ウォン札に使われています。',
    keyPointsJa: ['1962年に現行ウォン導入', '韓国の公式通貨', '紙幣に歴史上の人物の肖像', '1万ウォン札に世宗大王'],
  },
  kr_py_b02: {
    backgroundJa: '韓国の郵便番号は2015年から導入された5桁の形式です。',
    historyJa: '韓国郵政事業本部が2015年に現行の5桁郵便番号制度を導入しました。',
    episodeJa: '先頭の数字は地域を示し、識別コードの先頭ゼロは数値ではなく文字列として保持する必要があります。',
    keyPointsJa: ['2015年に現行制度を導入', '5桁の郵便番号形式', '先頭の数字が地域を示す', '韓国郵政事業本部が管理'],
  },
  kr_py_b03: {
    backgroundJa: '韓国の主要都市には英語表記の略号が使われる場合があります。',
    historyJa: '国際的な物流や観光案内では都市名の略号表記が便宜的に使われることがあります。',
    episodeJa: 'ソウルは「SEL」、釜山は「PUS」のように、空港コードとしての3文字略号も国際的に使われています。',
    keyPointsJa: ['都市名の略号表記がある', 'ソウルの空港コードはSEL', '釜山の空港コードはPUS', '国際的な物流・観光で使用'],
  },
  final_debug_KR_python_01: {
    backgroundJa: '韓国は1988年のソウルオリンピックと2018年の平昌冬季オリンピックという2つの夏季・冬季オリンピックを開催しました。',
    historyJa: 'ソウルオリンピックは1988年、平昌冬季オリンピックは2018年に開催されました。',
    episodeJa: '2002年には日本と共同でFIFAワールドカップを開催し、アジアで初めての共同開催となりました。',
    keyPointsJa: ['1988年にソウルオリンピック開催', '2018年に平昌冬季オリンピック開催', '2002年に日韓共同でW杯開催', 'アジア初の共同開催W杯'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、韓国の歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'KR',
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
    countryId: 'KR',
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
  { id: 'kr_py_d01', languageId: 'python', world: 'decode', title: 'Seoul as capital', titleJa: 'ソウル（首都）', category: 'geography-capital', objective: 'strings', source: SRC.seoul, summaryJa: 'ソウルは韓国の首都です。', prompt: 'ソウルは韓国の首都です。下のコードを実行すると Korea\'s capital is Seoul. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("Korea\'s capital is " + capital + ".")', answer: '"Seoul"', expectedOutput: "Korea's capital is Seoul.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"Seoul" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'kr_py_d02', languageId: 'python', world: 'decode', title: 'Hangul creation year', titleJa: 'ハングル創製の年', category: 'history-language', objective: 'integers', source: SRC.hangul, summaryJa: 'ハングルは1443年に世宗大王が創製しました。', prompt: '年が1443のとき Hangul:1443 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Hangul:{year}"\nprint(label)', answer: '1443', expectedOutput: 'Hangul:1443', hint: '整数は引用符なしで書きます。', explanation: 'year に1443を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'kr_py_d03', languageId: 'python', world: 'decode', title: 'Constitutional democracy condition', titleJa: '大統領制の条件分岐', category: 'politics-system', objective: 'condition', source: SRC.democracy, summaryJa: '韓国は大統領制をとる民主国家です。', prompt: '政治体制名が presidential のとき democracy と表示されるよう、if の条件を完成させてください。', code: 'system = "presidential"\nif ___BLANK___:\n    print("democracy")\nelse:\n    print("other")', answer: 'system == "presidential"', expectedOutput: 'democracy', hint: '文字列が完全に一致するか == で比較します。', explanation: 'system の値と対象を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'kr_py_d04', languageId: 'python', world: 'decode', title: 'Korean major cities sample list', titleJa: '韓国の主要都市サンプルリスト', category: 'geography', objective: 'list', source: SRC.seoul, summaryJa: '韓国にはソウル、釜山、仁川などの主要都市があります。', prompt: 'リストから Incheon を取り出して表示するよう、添字を埋めてください。', code: 'cities = ["Seoul", "Busan", "Incheon"]\nprint(cities[___BLANK___])', answer: '2', expectedOutput: 'Incheon', hint: 'Python のリストは0番目から数えます。', explanation: 'Incheon はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'kr_py_d05', languageId: 'python', world: 'decode', title: 'Kimchi food culture lookup', titleJa: 'キムチの食文化', category: 'food-culture', objective: 'dictionary', source: SRC.kimchi, summaryJa: 'キムチは韓国を代表する発酵食品です。', prompt: '辞書から main_ingredient を取り出して napa cabbage と表示されるよう、キーを埋めてください。', code: 'kimchi = {"name": "Kimchi", "main_ingredient": "napa cabbage"}\nprint(kimchi[___BLANK___])', answer: '"main_ingredient"', expectedOutput: 'napa cabbage', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"main_ingredient" キーの値が napa cabbage です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_KR_python_01', languageId: 'python', world: 'decode', title: 'Bulguksa Temple', titleJa: '仏国寺', category: 'world-heritage', objective: 'function', source: SRC.bulguksa, summaryJa: '仏国寺は韓国にある世界遺産です。', prompt: '関数と条件を使い、city が Gyeongju のときだけ Bulguksa Temple:Gyeongju と表示するよう空欄を埋めてください。', code: 'name = "Bulguksa Temple"\ncity = "Gyeongju"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Gyeongju"', expectedOutput: 'Bulguksa Temple:Gyeongju', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Gyeongju と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_KR_python_02', languageId: 'python', world: 'decode', title: 'March First Movement', titleJa: '三・一独立運動', category: 'history', objective: 'loop', source: SRC.marchFirst, summaryJa: '三・一独立運動は1919年に起きた独立運動です。', prompt: 'year が1919の出来事だけを出力するよう、if 条件の空欄を埋めてください。', code: 'events = [\n    {"name": "March First Movement", "year": 1919},\n    {"name": "Other", "year": 1945}\n]\nfor event in events:\n    if ___BLANK___:\n        print(event["name"])', answer: 'event["year"] == 1919', expectedOutput: 'March First Movement', hint: '各辞書の year キーを比較します。', explanation: 'March First Movement の year だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_KR_python_03', languageId: 'python', world: 'decode', title: 'Jeju Volcanic Island', titleJa: '済州火山島と溶岩洞窟群', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.jeju, summaryJa: '済州島は韓国にある世界遺産（自然遺産）です。', prompt: '辞書と関数を使い、Jeju:volcanic と表示するキーを埋めてください。', code: 'site = {"name": "Jeju", "type": "volcanic"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"type"', expectedOutput: 'Jeju:volcanic', hint: 'volcanic を取り出すキーを選びます。', explanation: '"type" キーの値が volcanic です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'kr_py_e01', languageId: 'python', world: 'execute', title: 'Seoul subway', titleJa: 'ソウルの地下鉄', category: 'urban-transport', objective: 'function', source: SRC.subway, summaryJa: 'ソウルの地下鉄は1974年に開業しました。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def line_label(name, year):\n    return f"{name}:{year}"\nprint(line_label("Line 1", 1974))', options: ['Line 1:1974', '1974:Line 1', 'Line 1', 'Error'], answer: 'Line 1:1974', expectedOutput: 'Line 1:1974', hint: 'return の f-string で name と year の順番を見ます。', explanation: 'name が先、year が後ろなので Line 1:1974 です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。', optionExplanations: { 'Line 1:1974': '正解。f"{name}:{year}"はnameが先、yearが後なのでLine 1:1974になります。', '1974:Line 1': 'f文字列は{name}:{year}の順で定義されているため、nameが先になります。', 'Line 1': 'f文字列にはyearの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'kr_py_e02', languageId: 'python', world: 'execute', title: 'Hangul letter count', titleJa: 'ハングルの字母数', category: 'history-language', objective: 'dictionary', source: SRC.hangul, summaryJa: 'ハングルは子音と母音を合わせて24の基本字母を持ちます。', prompt: '辞書 lookup の結果を選んでください。', code: 'hangul = {"name": "Hangul", "letters": 24}\nprint(hangul["letters"])', options: ['24', 'Hangul', '14', 'letters'], answer: '24', expectedOutput: '24', hint: '"letters" キーの値を見ます。', explanation: 'hangul["letters"] は 24 を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。', optionExplanations: { '24': '正解。hangul["letters"]はlettersキーの値である24を返します。', 'Hangul': 'これはnameキーの値で、コードが読んでいるのはlettersキーなので出力されません。', '14': 'hangul辞書にはletters=24しか登録されておらず、14という値は含まれていません。', 'letters': '"letters"はキーの名前そのものであり、辞書アクセスはキーに対応する値を返します。' } },
  { id: 'kr_py_e03', languageId: 'python', world: 'execute', title: 'Hallyu cultural exports sample', titleJa: '韓流の文化的輸出サンプル', category: 'culture', objective: 'loop', source: SRC.hallyu, summaryJa: 'サンプルとして Music、Drama などの韓流カテゴリーラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'categories = ["Music", "Drama"]\nresult = ""\nfor category in categories:\n    result += category + "|"\nprint(result[:-1])', options: ['Music|Drama', 'Drama|Music', 'Music|', 'Drama'], answer: 'Music|Drama', expectedOutput: 'Music|Drama', hint: 'categories の並び順と最後の | の削除を見ます。', explanation: 'Music、Drama の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。', optionExplanations: { 'Music|Drama': '正解。categoriesの順にMusic|Drama|となり、[:-1]で末尾の|だけが取り除かれます。', 'Drama|Music': 'forループはcategoriesの並び順（Musicが先）通りに処理するため、順序が入れ替わることはありません。', 'Music|': '[:-1]は末尾1文字だけを除くスライスで、2件目のDramaまで削ってしまうことはありません。', 'Drama': '1件目のMusicも結果に含まれるため、2件目だけが残ることはありません。' } },
  { id: 'kr_py_e04', languageId: 'python', world: 'execute', title: 'Semiconductor export records', titleJa: '半導体輸出のレコード', category: 'industry', objective: 'loop', source: SRC.semiconductor, summaryJa: '半導体は韓国の主要な輸出産業の一つです。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Semiconductors", "export": True},\n    {"name": "Other", "export": False}\n]\nselected = [r["name"] for r in records if r["export"]]\nprint(selected[0])', options: ['Semiconductors', 'Other', 'True', 'False'], answer: 'Semiconductors', expectedOutput: 'Semiconductors', hint: 'export が True の辞書だけ残します。', explanation: 'Semiconductors の export だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。', optionExplanations: { 'Semiconductors': '正解。exportがTrueなのはSemiconductorsだけなので、selectedにはSemiconductorsのみが入りselected[0]はSemiconductorsです。', 'Other': 'OtherのexportはFalseなので、リスト内包表記の条件で除外されselectedには入りません。', 'True': 'selectedはname（文字列）のリストであり、exportの真偽値そのものが出力されるわけではありません。', 'False': 'selected[0]はリストの先頭要素であるSemiconductors（文字列）であり、真偽値Falseが出力されることはありません。' } },
];

const pyFinalExecute = [
  { id: 'final_execute_KR_python_01', languageId: 'python', world: 'execute', title: 'Korean UNESCO sites records', titleJa: '韓国のユネスコ世界遺産レコード', category: 'world-heritage', objective: 'loop', source: SRC.jongmyo, summaryJa: '韓国には複数のユネスコ世界遺産があります。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "kind": "heritage", "year": 2007},\n    {"name": "Other", "kind": "park", "year": 1980},\n    {"name": "Site B", "kind": "heritage", "year": 1995}\n]\nselected = sorted([r for r in records if r["kind"] == "heritage"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと year の昇順です。', explanation: 'heritage は Site B(1995) と Site A(2007) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。', optionExplanations: { 'Site B>Site A': '正解。kind==heritageで絞るとSite A(2007)とSite B(1995)が残り、year昇順でSite B(1995)が先になります。', 'Site A>Site B': 'yearの昇順で並べるとSite B(1995)がSite A(2007)より先になるため、この順序にはなりません。', 'Other>Site A': 'Otherのkindはparkでheritageではないため、フィルタ条件で除外されます。', 'Site A>Other': 'Otherはheritageではないため除外され、また並び順もyear昇順とは異なります。' } },
  { id: 'final_execute_KR_python_02', languageId: 'python', world: 'execute', title: 'Korean international memberships dataset', titleJa: '韓国の国際機関加盟データセット', category: 'international-role', objective: 'dictionary', source: SRC.international, summaryJa: 'サンプルとして OECD、G20などの加盟データを扱います。', prompt: '辞書とリストから member が True の件数を集計した結果を選んでください。', code: 'organizations = [\n    {"name": "OECD", "member": True},\n    {"name": "G20", "member": True},\n    {"name": "European Union", "member": False},\n    {"name": "NATO", "member": False}\n]\ncount = sum(1 for o in organizations if o["member"])\nprint(count)', options: ['2', '4', '1', 'OECD'], answer: '2', expectedOutput: '2', hint: 'member が True の辞書だけ数えます。', explanation: 'OECD、G20 の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。', optionExplanations: { '2': '正解。memberがTrueなのはOECDとG20の2件なので、countは2になります。', '4': 'organizationsには4件のデータがありますが、memberがTrueなのはそのうち2件だけです。', '1': 'OECDとG20の両方がTrueなので、1件だけがカウントされるわけではありません。', 'OECD': 'countはTrueの件数を表す整数で、o自体の名前が出力されるわけではありません。' } },
];

const pyDebug = [
  { id: 'kr_py_b01', languageId: 'python', world: 'debug', title: 'KRW currency formatting for Korea', titleJa: 'ウォン（KRW）の表示', category: 'finance', objective: 'strings', source: SRC.economy, summaryJa: 'ウォン（KRW）は韓国の通貨です。', prompt: '金額を 1000.50 KRW と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "1000.5"\nprint(amount + 0 + " KRW")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、1000.50 KRW と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 1000.5\nprint(f"{amount:.2f} KRW")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。', causeOptionExplanations: { '文字列 amount に数値 0 を + で足している': '正解。amountは文字列"1000.5"で、文字列に数値0を+で足すことはできずTypeErrorになります。', '出力文の文字列だけが間違っている': '" KRW"の部分の書き方自体は正しく、問題はamountと0の加算部分にあります。', 'データの件数が不足している': 'amountには値が1つ入っており、件数ではなく型の不一致が原因です。' }, fixOptionExplanations: { 'amount を float にして、f-string で小数2桁に整形する': '正解。floatに変換しf"{amount:.2f}"とすれば、1000.50 KRWのように整形できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '金額データを無視して固定文字列を出すと、実際の金額が反映されません。' }, impactOptionExplanations: { '数値計算と表示形式を分け、1000.50 KRW と安定して表示できる': '正解。floatとf-stringの書式指定により、計算と表示形式を分けて安定して表示できます。', '常に例外を出して停止する': '修正後はamountがfloat型になるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'amountのデータはそのまま使われ続けます。修正は型と表示形式だけです。' } },
  { id: 'kr_py_b02', languageId: 'python', world: 'debug', title: 'Korean postal-code style labels', titleJa: '韓国の郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postalCode, summaryJa: 'サンプルの郵便番号風コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号風サンプルを表示するコードです。数値保存の不具合を直します。', code: 'postal_zone = 3\nprint(postal_zone)', cause: '郵便番号風コードを数値として保存すると先頭ゼロを保持できない', fix: '郵便番号風コードを最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号風コードも失わずに表示できる', why: '識別コードは計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postal_zone = "03"\nprint(postal_zone)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。', causeOptionExplanations: { '郵便番号風コードを数値として保存すると先頭ゼロを保持できない': '正解。3を整数として保存すると先頭ゼロの情報が失われ、本来の表記03になりません。', '出力文の文字列だけが間違っている': 'print(postal_zone)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'postal_zoneには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { '郵便番号風コードを最初から文字列として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の郵便番号風データを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む郵便番号風コードも失わずに表示できる': '正解。文字列として保存すれば、先頭ゼロを含む表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': '郵便番号風コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'kr_py_b03', languageId: 'python', world: 'debug', title: 'Airport code lookup', titleJa: '空港コード lookup', category: 'administration', objective: 'dictionary', source: SRC.subway, summaryJa: 'サンプルとして SEL、PUS などの空港コードを扱います。', prompt: '略号 PUS から都市名を引くコードです。キーの不一致を直します。', code: 'codes = {"SEL": "Seoul", "ICN": "Incheon"}\ncode = "PUS"\nprint(codes[code])', cause: '辞書に PUS のキーが登録されていないのに直接アクセスしている', fix: 'codes.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'codes = {"SEL": "Seoul", "ICN": "Incheon", "PUS": "Busan"}\ncode = "PUS"\nprint(codes.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'PUS というキーは codes に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。', causeOptionExplanations: { '辞書に PUS のキーが登録されていないのに直接アクセスしている': '正解。codesにはSELとICNしか登録されておらず、PUSを角括弧で読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(codes[code])自体の書き方は正しく、問題はキーが存在しないことです。', 'データの件数が不足している': '辞書には2件のデータがあり、件数不足ではなくPUSというキーが未登録であることが原因です。' }, fixOptionExplanations: { 'codes.get(code, "unknown") のように安全に取得する': '正解。getにデフォルト値を渡すことで、キーが無い場合でも例外を出さずに"unknown"を返せます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '都市名データを無視して固定文字列にすると、実際に登録されている都市の名前も正しく取得できなくなります。' }, impactOptionExplanations: { '登録されていない略号でも例外を出さずに処理できる': '正解。get(code, "unknown")により、未登録の略号でもKeyErrorを起こさず安全に処理を続けられます。', '常に例外を出して停止する': '修正後はgetのデフォルト値によりKeyError自体が発生しなくなります。', '題材データを使わなくなる': '登録済みの都市データはそのまま使われ続けます。修正はキーが無いときの取得方法だけです。' } },
];

const pyFinalDebug = [
  { id: 'final_debug_KR_python_01', languageId: 'python', world: 'debug', title: 'Korean Olympic Games dataset', titleJa: '韓国のオリンピック開催データセット', category: 'sports-history', objective: 'dictionary', source: SRC.seoulOlympics, summaryJa: '韓国は1988年と2018年にオリンピックを開催しました。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Seoul Olympics", "year_count": "1988"}, {"name": "Other"}]\nearly = []\nfor record in records:\n    if int(record["year_count"]) < 2000:\n        early.append(record["name"])\nprint(early)', cause: 'year_count がない辞書でも record["year_count"] を直接読んでいる', fix: 'record.get("year_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Seoul Olympics", "year_count": "1988"}, {"name": "Other"}]\nearly = []\nfor record in records:\n    count = record.get("year_count")\n    if count is not None and int(count) < 2000:\n        early.append(record["name"])\nprint(early)', hint: '2件目の辞書に year_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。', causeOptionExplanations: { 'year_count がない辞書でも record["year_count"] を直接読んでいる': '正解。2件目の辞書にはyear_countキーが無く、角括弧で直接読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(early)自体の書き方は正しく、問題はループ内でのキーアクセスです。', 'データの件数が不足している': 'recordsには2件のデータがあり、件数不足ではなく2件目にキーが無いことが原因です。' }, fixOptionExplanations: { 'record.get("year_count") を確認してから int に変換する': '正解。getでNoneかどうか確認してからintに変換すれば、キーが無い行を安全に読み飛ばせます。', '条件を削除する': 'if文の条件を削除すると、すべての行でint変換を試みてしまい同じエラーが起きます。', 'すべての値を同じ文字列にする': '数値データを無視して固定文字列にすると、実際の判定が正しく行えなくなります。' }, impactOptionExplanations: { '欠損行を飛ばし、数値化できる行だけ判定できる': '正解。getとNone判定により、year_countが無い行を飛ばして安全に判定できます。', '常に例外を出して停止する': '修正後はキーが無い場合にNoneとして扱われるため、KeyError自体が発生しなくなります。', '題材データを使わなくなる': 'Seoul Olympicsなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

Object.assign(FACT_DETAILS, {
  kr_js_d01: {
    backgroundJa: '漢江はソウルを流れる主要な河川で、市街を江北と江南に分けています。',
    historyJa: '古代から交通・防衛・農業の要として利用され、現在は市民の憩いの場としても整備されています。',
    episodeJa: '漢江沿いには公園や自転車道が整備され、漢江公園は市民の代表的なレクリエーション空間です。',
    keyPointsJa: ['ソウルを流れる主要河川', '江北・江南を分ける', '古代から交通の要', '漢江公園が整備されている'],
  },
  kr_js_d02: {
    backgroundJa: 'ハングルの母音字母は基本となる単純な形を組み合わせて作られています。',
    historyJa: '創製当初の母音は天・地・人を象徴する3つの基本形を組み合わせて構成されました。',
    episodeJa: 'この設計思想により、少数の基本字母から多くの母音を体系的に表現できるようになっています。',
    keyPointsJa: ['天・地・人を象徴する基本形', '基本形の組み合わせで母音を作る', '体系的な設計', '世宗大王の時代に考案'],
  },
  kr_js_d03: {
    backgroundJa: '韓国の国旗「太極旗」は白地に太極図と四卦が描かれた旗です。',
    historyJa: '1949年に現在のデザインが正式に制定されました。',
    episodeJa: '中央の太極図は陰陽の調和を、四隅の卦は天・地・水・火を象徴しています。',
    keyPointsJa: ['1949年に正式制定', '中央に太極図', '四隅に四卦', '陰陽の調和を象徴'],
  },
  kr_js_d04: {
    backgroundJa: '朝鮮戦争は1950年に始まり、休戦協定により朝鮮半島は南北に分断されたままとなっています。',
    historyJa: '1950年6月25日に開戦し、1953年7月27日に休戦協定が結ばれました。',
    episodeJa: '休戦協定にもとづき非武装地帯（DMZ）が設定され、現在も南北を隔てる境界として存在しています。',
    keyPointsJa: ['1950年6月25日に開戦', '1953年7月27日に休戦', '非武装地帯（DMZ）が設定', '南北分断が現在も続く'],
  },
  kr_js_d05: {
    backgroundJa: '朝鮮王朝は1392年から1897年まで続いた、朝鮮半島の長期王朝です。',
    historyJa: '李成桂（太祖）が1392年に建国し、儒教を国家統治の基本理念としました。',
    episodeJa: '科挙という官僚選抜試験制度が整備され、儒教的な教育・社会秩序が広く浸透しました。',
    keyPointsJa: ['1392年に李成桂が建国', '1897年まで約500年続く', '儒教を統治理念とする', '科挙制度を整備'],
  },
  final_decode_KR_javascript_01: {
    backgroundJa: '石窟庵は仏国寺と並ぶ慶州の仏教石窟寺院で、本尊の釈迦如来坐像が有名です。',
    historyJa: '8世紀の新羅時代に建立され、1995年に仏国寺とともにユネスコ世界遺産に登録されました。',
    episodeJa: '人工の石窟内に精巧な仏像群が配置され、新羅時代の仏教美術と建築技術の高さを示しています。',
    keyPointsJa: ['8世紀の新羅時代に建立', '1995年にユネスコ世界遺産登録', '仏国寺とともに登録', '釈迦如来坐像が本尊'],
  },
  final_decode_KR_javascript_02: {
    backgroundJa: '昌徳宮は朝鮮王朝の宮殿の一つで、自然との調和を重視した造園が特徴です。',
    historyJa: '1405年に建立され、1997年にユネスコ世界遺産に登録されました。',
    episodeJa: '後苑と呼ばれる庭園は地形を生かした自然な配置で、朝鮮王朝の造園美学を体現しています。',
    keyPointsJa: ['1405年に建立', '1997年にユネスコ世界遺産登録', '後苑の庭園が特徴', '自然との調和を重視'],
  },
  final_decode_KR_javascript_03: {
    backgroundJa: '平昌2018冬季オリンピックは韓国で開催された2回目の冬季・夏季を含むオリンピックです。',
    historyJa: '2018年2月に江原道平昌で開催され、冬季競技大会として韓国初の開催となりました。',
    episodeJa: '1988年のソウル夏季大会から30年を経て、韓国は夏季・冬季両方のオリンピック開催国となりました。',
    keyPointsJa: ['2018年に平昌で開催', '韓国初の冬季オリンピック', '1988年ソウル大会から30年後', '夏季・冬季両方の開催国に'],
  },
  kr_js_e01: {
    backgroundJa: 'ソウルの地下鉄は1974年の開業以来、世界最大級の路線網に成長しました。',
    historyJa: '1号線の開業を起点に、首都圏全域へ路線が拡大しました。',
    episodeJa: '現在の路線網は仁川・京畿道とも広く接続し、首都圏の通勤・通学を支える基盤となっています。',
    keyPointsJa: ['1974年に1号線開業', '世界最大級の路線網', '首都圏全域と接続', '通勤・通学の基盤'],
  },
  kr_js_e02: {
    backgroundJa: '漢江はソウル市街を流れる主要な河川です。',
    historyJa: '全長約494kmで、江原道に源を発し黄海に注ぎます。',
    episodeJa: '「漢江の奇跡」という言葉は1960〜70年代の韓国の急速な経済成長を象徴する表現として使われます。',
    keyPointsJa: ['全長約494km', '黄海に注ぐ', '「漢江の奇跡」という表現', 'ソウルを流れる主要河川'],
  },
  kr_js_e03: {
    backgroundJa: 'Hallyu（韓流）には音楽・ドラマ・映画など複数のカテゴリーが含まれます。',
    historyJa: '1990年代後半から東アジアで広がり、2000年代以降は世界的に拡大しました。',
    episodeJa: 'K-popグループは世界各地でコンサートを行い、Netflixなどの配信サービスで韓国ドラマも世界的に視聴されています。',
    keyPointsJa: ['1990年代後半から拡大', '音楽・ドラマ・映画など複数分野', '配信サービスで世界的に視聴', 'K-popは世界的にコンサート開催'],
  },
  kr_js_e04: {
    backgroundJa: '済州島の溶岩洞窟群は火山活動によって形成された、世界的に評価される地形です。',
    historyJa: '2007年にユネスコ世界遺産（自然遺産）に登録されました。',
    episodeJa: '万丈窟をはじめとする溶岩洞窟は世界最長級の規模を持ち、独特な地質構造が保存されています。',
    keyPointsJa: ['2007年にユネスコ世界遺産登録', '万丈窟が代表的', '世界最長級の溶岩洞窟', '火山活動で形成'],
  },
  final_execute_KR_javascript_01: {
    backgroundJa: '韓国には登録年の異なる複数のユネスコ世界遺産があります。',
    historyJa: '宗廟は1995年、済州火山島は2007年にそれぞれユネスコ世界遺産に登録されました。',
    episodeJa: '韓国国内のユネスコ世界遺産は文化遺産・自然遺産を合わせて十数件に及びます。',
    keyPointsJa: ['登録年は遺産ごとに異なる', '文化遺産と自然遺産がある', '各地域に分布', '十数件の世界遺産がある'],
  },
  final_execute_KR_javascript_02: {
    backgroundJa: '韓国の主要産業には半導体・自動車・造船・電池などが含まれます。',
    historyJa: '1960年代以降の輸出主導型の経済成長を経て、ハイテク産業中心の経済構造に発展しました。',
    episodeJa: '半導体・自動車は韓国の代表的な輸出産業で、世界のサプライチェーンで重要な役割を担っています。',
    keyPointsJa: ['1960年代以降に輸出主導で成長', '半導体・自動車が代表的輸出産業', '世界のサプライチェーンで重要', 'ハイテク産業中心の経済'],
  },
  kr_js_b01: {
    backgroundJa: '韓国の郵便番号は2015年から導入された5桁形式です。',
    historyJa: '韓国郵政事業本部が2015年に現行の5桁郵便番号制度を導入しました。',
    episodeJa: '先頭の数字は地域を示し、識別コードの桁数は固定されています。',
    keyPointsJa: ['2015年に現行制度を導入', '5桁の郵便番号形式', '先頭の数字が地域を示す', '韓国郵政事業本部が管理'],
  },
  kr_js_b02: {
    backgroundJa: '仏国寺と石窟庵は1995年にともにユネスコ世界遺産に登録されました。',
    historyJa: '8世紀の新羅時代に建立された仏教遺産で、慶州に位置しています。',
    episodeJa: '両遺産は新羅時代の仏教美術と建築技術を代表する例として高く評価されています。',
    keyPointsJa: ['1995年にともに登録', '8世紀の新羅時代に建立', '慶州に位置', '新羅仏教美術を代表'],
  },
  kr_js_b03: {
    backgroundJa: '宗廟は朝鮮王朝の王と王妃の位牌を祀る霊廟です。',
    historyJa: '14世紀末に建立され、1995年にユネスコ世界遺産に登録されました。',
    episodeJa: '毎年5月には宗廟大祭という伝統的な祭礼が行われ、儒教儀礼の重要な事例として継承されています。',
    keyPointsJa: ['14世紀末に建立', '1995年にユネスコ世界遺産登録', '宗廟大祭が毎年5月に開催', '儒教儀礼を継承'],
  },
  final_debug_KR_javascript_01: {
    backgroundJa: '昌徳宮は朝鮮王朝の宮殿で、自然との調和を重視した造園が評価されています。',
    historyJa: '1997年にユネスコ世界遺産に登録されました。',
    episodeJa: '後苑をはじめとする庭園は地形をそのまま生かした配置で、朝鮮王朝の造園美学を伝えています。',
    keyPointsJa: ['1997年にユネスコ世界遺産登録', '後苑の庭園が特徴', '自然との調和を重視', '朝鮮王朝の宮殿'],
  },
});

const jsDecode = [
  { id: 'kr_js_d01', languageId: 'javascript', world: 'decode', title: 'Han River in Seoul', titleJa: '漢江（ソウル）', category: 'geography-city', objective: 'object', source: SRC.hanRiver, summaryJa: '漢江はソウルを流れる主要な河川です。', prompt: 'オブジェクトから city を取り出して Seoul と表示されるよう、空欄を埋めてください。', code: 'const river = { name: "Han River", city: "Seoul" };\nconsole.log(river.___BLANK___);', answer: 'city', expectedOutput: 'Seoul', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'river.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'kr_js_d02', languageId: 'javascript', world: 'decode', title: 'Hangul vowel label', titleJa: 'ハングルの母音ラベル', category: 'history-language', objective: 'strings', source: SRC.hangul, summaryJa: 'ハングルの母音は基本形を組み合わせて作られます。', prompt: 'テンプレートリテラルで Hangul:vowel と表示されるよう空欄を埋めてください。', code: 'const name = "Hangul";\nconst kind = ___BLANK___;\nconsole.log(`${name}:${kind}`);', answer: '"vowel"', expectedOutput: 'Hangul:vowel', hint: 'kind に入る文字列を引用符付きで書きます。', explanation: '"vowel" を入れると ${kind} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'kr_js_d03', languageId: 'javascript', world: 'decode', title: 'Korean flag elements', titleJa: '太極旗の構成要素', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: '太極旗は白地に太極図と四卦が描かれた韓国の国旗です。', prompt: '配列から trigrams を取り出す添字を埋めてください。', code: 'const elements = ["white", "taegeuk", "trigrams"];\nconsole.log(elements[___BLANK___]);', answer: '2', expectedOutput: 'trigrams', hint: '配列は0番目から数えます。', explanation: 'trigrams は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'kr_js_d04', languageId: 'javascript', world: 'decode', title: 'Korean peninsula division labels', titleJa: '朝鮮半島の分断ラベル', category: 'history-geography', objective: 'switch', source: SRC.dmz, summaryJa: '朝鮮半島は1953年の休戦協定以来、南北に分断されています。', prompt: 'status が divided のとき separated と表示されるよう case を埋めてください。', code: 'const status = "divided";\nswitch (status) {\n  case ___BLANK___:\n    console.log("separated");\n    break;\n  default:\n    console.log("other");\n}', answer: '"divided"', expectedOutput: 'separated', hint: 'case には status と一致する文字列を書きます。', explanation: 'case "divided" が一致し、separated が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'kr_js_d05', languageId: 'javascript', world: 'decode', title: 'Joseon Dynasty founding year', titleJa: '朝鮮王朝建国の年', category: 'history', objective: 'object', source: SRC.joseon, summaryJa: '朝鮮王朝は1392年に建国されました。', prompt: 'Joseon Dynasty:1392 と表示されるよう、year の値を埋めてください。', code: 'const dynasty = { name: "Joseon Dynasty", year: ___BLANK___ };\nconsole.log(`${dynasty.name}:${dynasty.year}`);', answer: '1392', expectedOutput: 'Joseon Dynasty:1392', hint: 'year は引用符なしの数値です。', explanation: 'year に1392を入れるとテンプレートリテラルに展開されます。', programmingExplanation: 'オブジェクトのプロパティはテンプレートリテラルの ${} に展開できます。' },
];

const jsFinalDecode = [
  { id: 'final_decode_KR_javascript_01', languageId: 'javascript', world: 'decode', title: 'Seokguram Grotto', titleJa: '石窟庵', category: 'world-heritage', objective: 'function', source: SRC.bulguksa, summaryJa: '石窟庵はカナダ慶州にある世界遺産です。', prompt: '関数と条件を使い、city が Gyeongju のときだけ Seokguram Grotto:Gyeongju と表示するよう空欄を埋めてください。', code: 'const name = "Seokguram Grotto";\nconst city = "Gyeongju";\nfunction label(site, place) {\n  if (place === ___BLANK___) return `${site}:${place}`;\n  return "skip";\n}\nconsole.log(label(name, city));', answer: '"Gyeongju"', expectedOutput: 'Seokguram Grotto:Gyeongju', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Gyeongju と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、テンプレートリテラルを組み合わせています。' },
  { id: 'final_decode_KR_javascript_02', languageId: 'javascript', world: 'decode', title: 'Changdeokgung Palace Complex', titleJa: '昌徳宮', category: 'world-heritage', objective: 'loop', source: SRC.changdeokgung, summaryJa: '昌徳宮は韓国にある世界遺産です。', prompt: 'kind が palace の建物名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'const buildings = [\n  { name: "Changdeokgung", kind: "palace" },\n  { name: "Other", kind: "shrine" }\n];\nfor (const building of buildings) {\n  if (___BLANK___) console.log(building.name);\n}', answer: 'building.kind === "palace"', expectedOutput: 'Changdeokgung', hint: '各 building の kind を比較します。', explanation: 'Changdeokgung の kind だけが palace なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
  { id: 'final_decode_KR_javascript_03', languageId: 'javascript', world: 'decode', title: 'PyeongChang 2018 Winter Olympics', titleJa: '平昌2018冬季オリンピック', category: 'sports-history', objective: 'function', source: SRC.pyeongchang, summaryJa: '平昌2018冬季オリンピックは2018年に韓国で開催されました。', prompt: 'year が2018のとき hosted と表示されるよう、空欄を埋めてください。', code: 'const event = { name: "PyeongChang 2018", year: 2018 };\nfunction isHost(data) {\n  if (data.year === ___BLANK___) return "hosted";\n  return "other";\n}\nconsole.log(isHost(event));', answer: '2018', expectedOutput: 'hosted', hint: 'year と比較する数値を引用符なしで書きます。', explanation: 'data.year が2018と一致するので hosted が返ります。', programmingExplanation: '関数の引数として渡したオブジェクトのプロパティを条件式で比較します。' },
];

const jsExecute = [
  { id: 'kr_js_e01', languageId: 'javascript', world: 'execute', title: 'Seoul subway line', titleJa: 'ソウル地下鉄の路線', category: 'urban-transport', objective: 'function', source: SRC.subway, summaryJa: 'ソウルの地下鉄は1974年に開業しました。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'function lineLabel(name, year) {\n  return `${name}:${year}`;\n}\nconsole.log(lineLabel("Line 1", 1974));', options: ['Line 1:1974', '1974:Line 1', 'Line 1', 'Error'], answer: 'Line 1:1974', expectedOutput: 'Line 1:1974', hint: 'テンプレートリテラルで name と year の順番を見ます。', explanation: 'name が先、year が後ろなので Line 1:1974 です。', programmingExplanation: '関数の戻り値はテンプレートリテラルで組み立てられた文字列です。', optionExplanations: { 'Line 1:1974': '正解。`${name}:${year}`はnameが先、yearが後なのでLine 1:1974になります。', '1974:Line 1': 'テンプレートリテラルは${name}:${year}の順で定義されているため、nameが先になります。', 'Line 1': 'テンプレートリテラルにはyearの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'kr_js_e02', languageId: 'javascript', world: 'execute', title: 'Han River length lookup', titleJa: '漢江の長さのlookup', category: 'geography', objective: 'object', source: SRC.hanRiver, summaryJa: '漢江はソウルを流れる主要な河川です。', prompt: 'オブジェクト lookup の結果を選んでください。', code: 'const river = { name: "Han River", length_km: 494 };\nconsole.log(river.length_km);', options: ['494', 'Han River', '194', 'length_km'], answer: '494', expectedOutput: '494', hint: 'length_km プロパティの値を見ます。', explanation: 'river.length_km は 494 を返します。', programmingExplanation: 'オブジェクトのプロパティ名を指定すると対応する値だけを取り出せます。', optionExplanations: { '494': '正解。river.length_kmはlength_kmプロパティの値である494を返します。', 'Han River': 'これはnameプロパティの値で、コードが読んでいるのはlength_kmプロパティなので出力されません。', '194': 'riverオブジェクトには194という値は含まれておらず、length_kmの値は494です。', 'length_km': '"length_km"はプロパティの名前そのものであり、ドット記法アクセスは対応する値を返します。' } },
  { id: 'kr_js_e03', languageId: 'javascript', world: 'execute', title: 'Hallyu category records', titleJa: '韓流カテゴリーのレコード', category: 'culture', objective: 'array', source: SRC.hallyu, summaryJa: 'Hallyu（韓流）には音楽・ドラマなど複数のカテゴリーがあります。', prompt: 'filter と map の出力を選んでください。', code: 'const records = [\n  { name: "K-pop", global: true },\n  { name: "Local Show", global: false }\n];\nconst selected = records.filter(r => r.global).map(r => r.name);\nconsole.log(selected[0]);', options: ['K-pop', 'Local Show', 'true', 'false'], answer: 'K-pop', expectedOutput: 'K-pop', hint: 'global が true の record だけ残します。', explanation: 'K-pop の global だけが true なので選ばれます。', programmingExplanation: 'filter は条件に合う要素を残し、map は値を変換します。', optionExplanations: { 'K-pop': '正解。globalがtrueなのはK-popだけなので、selectedにはK-popのみが入りselected[0]はK-popです。', 'Local Show': 'Local Showのglobalはfalseなので、filterの条件で除外されselectedには入りません。', 'true': 'selectedはname（文字列）の配列であり、globalの真偽値そのものが出力されるわけではありません。', 'false': 'selected[0]は配列の先頭要素であるK-pop（文字列）であり、真偽値falseが出力されることはありません。' } },
  { id: 'kr_js_e04', languageId: 'javascript', world: 'execute', title: 'Jeju lava tube records', titleJa: '済州の溶岩洞窟レコード', category: 'geography-nature', objective: 'array', source: SRC.jeju, summaryJa: '済州島の溶岩洞窟群はユネスコ世界遺産です。', prompt: 'filter と map の出力を選んでください。', code: 'const records = [\n  { name: "Manjanggul", volcanic: true },\n  { name: "Other", volcanic: false }\n];\nconst selected = records.filter(r => r.volcanic).map(r => r.name);\nconsole.log(selected[0]);', options: ['Manjanggul', 'Other', 'true', 'false'], answer: 'Manjanggul', expectedOutput: 'Manjanggul', hint: 'volcanic が true の record だけ残します。', explanation: 'Manjanggul の volcanic だけが true なので選ばれます。', programmingExplanation: 'filter は条件に合う要素を残し、map は値を変換します。', optionExplanations: { 'Manjanggul': '正解。volcanicがtrueなのはManjanggulだけなので、selectedにはManjanggulのみが入りselected[0]はManjanggulです。', 'Other': 'Othervolcanicはfalseなので、filterの条件で除外されselectedには入りません。', 'true': 'selectedはname（文字列）の配列であり、volcanicの真偽値そのものが出力されるわけではありません。', 'false': 'selected[0]は配列の先頭要素であるManjanggul（文字列）であり、真偽値falseが出力されることはありません。' } },
];

const jsFinalExecute = [
  { id: 'final_execute_KR_javascript_01', languageId: 'javascript', world: 'execute', title: 'Korean UNESCO sites sorted', titleJa: '韓国のユネスコ世界遺産（年代順）', category: 'world-heritage', objective: 'array', source: SRC.jongmyo, summaryJa: '韓国には登録年の異なる複数のユネスコ世界遺産があります。', prompt: 'objects を条件で絞り、年代でソートした出力を選んでください。', code: 'const records = [\n  { name: "Site A", kind: "heritage", year: 2007 },\n  { name: "Other", kind: "park", year: 1980 },\n  { name: "Site B", kind: "heritage", year: 1995 }\n];\nconst selected = records.filter(r => r.kind === "heritage").sort((a, b) => a.year - b.year).map(r => r.name);\nconsole.log(selected.join(">"));', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと year の昇順です。', explanation: 'heritage は Site B(1995) と Site A(2007) で、昇順に Site B が先です。', programmingExplanation: 'filter、sort、map、join を順に適用します。', optionExplanations: { 'Site B>Site A': '正解。kind==="heritage"で絞るとSite A(2007)とSite B(1995)が残り、year昇順でSite B(1995)が先になります。', 'Site A>Site B': 'sortはyearの昇順で並べ替えるため、Site B(1995)がSite A(2007)より先になり、この順序にはなりません。', 'Other>Site A': 'Otherのkindはparkでheritageではないため、filterの条件で除外されます。', 'Site A>Other': 'Otherはheritageではないため除外され、また並び順もyear昇順とは異なります。' } },
  { id: 'final_execute_KR_javascript_02', languageId: 'javascript', world: 'execute', title: 'Korean technology export count', titleJa: '韓国のテクノロジー輸出カウント', category: 'industry', objective: 'array', source: SRC.semiconductor, summaryJa: 'サンプルとして半導体、自動車などのデータを扱います。', prompt: 'filter の length を使った件数の出力を選んでください。', code: 'const industries = [\n  { name: "Semiconductors", export: true },\n  { name: "Automobiles", export: true },\n  { name: "Local Crafts", export: false },\n  { name: "Local Market", export: false }\n];\nconst count = industries.filter(i => i.export).length;\nconsole.log(count);', options: ['2', '4', '1', 'Semiconductors'], answer: '2', expectedOutput: '2', hint: 'export が true の要素だけ数えます。', explanation: 'Semiconductors、Automobiles の2件が true です。', programmingExplanation: 'filter で条件に合う要素を残し、length で件数を数えます。', optionExplanations: { '2': '正解。exportがtrueなのはSemiconductorsとAutomobilesの2件なので、countは2になります。', '4': 'industriesには4件のデータがありますが、exportがtrueなのはそのうち2件だけです。', '1': 'SemiconductorsとAutomobilesの両方がtrueなので、1件だけがカウントされるわけではありません。', 'Semiconductors': 'countはtrueの件数を表す整数で、要素の名前そのものが出力されるわけではありません。' } },
];

const jsDebug = [
  { id: 'kr_js_b01', languageId: 'javascript', world: 'debug', title: 'Korean postal code formatting', titleJa: '韓国の郵便番号の形式', category: 'administration', objective: 'strings', source: SRC.postalCode, summaryJa: '韓国の郵便番号は5桁形式です。', prompt: '5桁の郵便番号を区切って表示したいコードです。文字数の判定の不具合を直します。', code: 'const code = "03187";\nif (code.length === 4) {\n  console.log(`${code.slice(0, 2)} ${code.slice(2)}`);\n}', cause: '5桁の郵便番号なのに length === 4 と判定している', fix: 'length === 5 に修正してから slice する', impact: '5桁の郵便番号を正しく整形できる', why: 'サンプル code は5桁だからです。', correctedCode: 'const code = "03187";\nif (code.length === 5) {\n  console.log(`${code.slice(0, 2)} ${code.slice(2)}`);\n}', hint: 'code の文字数を数えます。', explanation: '条件が4のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。', causeOptionExplanations: { '5桁の郵便番号なのに length === 4 と判定している': '正解。codeは5桁の文字列ですが、条件がlength === 4なのでif文の中に入らず何も出力されません。', '出力文の文字列だけが間違っている': 'console.logとテンプレートリテラルの書き方自体は正しく、問題はif文の条件にあります。', 'データの件数が不足している': 'codeは"03187"という5桁のデータを正しく持っており、件数不足ではありません。' }, fixOptionExplanations: { 'length === 5 に修正してから slice する': '正解。codeの実際の長さである5に条件を合わせれば、if文の中に入りslice処理が実行されます。', '条件を削除する': '条件を削除すると桁数チェックが効かなくなり、想定外の長さの郵便番号でも整形してしまいます。', 'すべての値を同じ文字列にする': '郵便番号データを無視して固定文字列にすると、実際の郵便番号が反映されません。' }, impactOptionExplanations: { '5桁の郵便番号を正しく整形できる': '正解。条件をlength === 5に直すことで、5桁の郵便番号が正しく区切って表示されるようになります。', '常に例外を出して停止する': 'この修正は条件式の値を直すだけで、例外を発生させるものではありません。', '題材データを使わなくなる': 'codeの郵便番号データはそのまま使われ続けます。修正は判定する桁数だけです。' } },
  { id: 'kr_js_b02', languageId: 'javascript', world: 'debug', title: 'Bulguksa and Seokguram registration', titleJa: '仏国寺と石窟庵の登録', category: 'world-heritage', objective: 'object', source: SRC.bulguksa, summaryJa: '仏国寺と石窟庵は1995年にともにユネスコ世界遺産に登録されました。', prompt: 'registered が true の遺産だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const sites = [{ name: "Bulguksa", registered: true }, { name: "Seokguram", registered: true }];\nconst labels = sites.filter(s => s.listed === true).map(s => s.name);\nconsole.log(labels.join(","));', cause: 'データには registered があるのに listed を参照している', fix: 's.registered === true に修正する', impact: 'Bulguksa と Seokguram の両方を正しく選べる', why: '存在しない listed は undefined になり、比較が true になりません。', correctedCode: 'const sites = [{ name: "Bulguksa", registered: true }, { name: "Seokguram", registered: true }];\nconst labels = sites.filter(s => s.registered === true).map(s => s.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。', causeOptionExplanations: { 'データには registered があるのに listed を参照している': '正解。各オブジェクトはregisteredプロパティを持ちますが、フィルタ条件はs.listedを見ているため常にundefinedとなり一致しません。', '出力文の文字列だけが間違っている': 'console.logとjoinの書き方自体は正しく、問題はfilterの条件にあります。', 'データの件数が不足している': 'sitesにはBulguksaとSeokguramの2件があり、件数不足ではなくプロパティ名の不一致が原因です。' }, fixOptionExplanations: { 's.registered === true に修正する': '正解。実際に存在するregisteredプロパティを参照することで、BulguksaとSeokguramの両方が正しく一致します。', '条件を削除する': '条件を削除するとフィルタの意味がなくなり、絞り込みたい意図が反映されません。', 'すべての値を同じ文字列にする': '遺産データを無視して固定文字列にすると、実際のregisteredに基づく絞り込みができなくなります。' }, impactOptionExplanations: { 'Bulguksa と Seokguram の両方を正しく選べる': '正解。正しいプロパティ名registeredで比較することで、両遺産が正しく選ばれます。', '常に例外を出して停止する': '存在しないプロパティを読んでもJavaScriptではundefinedになるだけで、例外は発生しません。', '題材データを使わなくなる': 'BulguksaとSeokguramのデータはそのまま使われ続けます。修正は参照するプロパティ名だけです。' } },
  { id: 'kr_js_b03', languageId: 'javascript', world: 'debug', title: 'Jongmyo Shrine record lookup', titleJa: '宗廟レコードの参照', category: 'world-heritage', objective: 'object', source: SRC.jongmyo, summaryJa: 'サンプルの宗廟データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Jongmyo Shrine" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Jongmyo Shrine" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。', causeOptionExplanations: { 'record.detail が undefined のまま city を読んでいる': '正解。recordにはdetailプロパティが無いためrecord.detailはundefinedで、その先のcityを読むとTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logの書き方自体は正しく、問題はrecord.detail.cityというプロパティアクセスの部分です。', 'データの件数が不足している': 'recordは1件のオブジェクトとして正しく存在しており、件数不足ではなくdetailプロパティが無いことが原因です。' }, fixOptionExplanations: { 'optional chaining と代替値を使う': '正解。record.detail?.city ?? "unknown" とすることで、detailが無くてもエラーにならず代替値を使えます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'レコードのデータを無視して固定文字列にすると、本来の名前や都市の情報が表示されなくなります。' }, impactOptionExplanations: { 'detail がないレコードでも停止せず unknown を表示できる': '正解。optional chainingと??により、detailが無い場合でも例外を起こさずunknownとして処理を続けられます。', '常に例外を出して停止する': '修正後はdetailが無くても安全に処理されるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'nameなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsFinalDebug = [
  { id: 'final_debug_KR_javascript_01', languageId: 'javascript', world: 'debug', title: 'Changdeokgung Palace record', titleJa: '昌徳宮のレコード', category: 'world-heritage-history', objective: 'object', source: SRC.changdeokgung, summaryJa: '昌徳宮は韓国にある世界遺産です。', prompt: '宮殿のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Changdeokgung", kind: "palace", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.kind);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.kind ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Changdeokgung", kind: "palace", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.kind ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。', causeOptionExplanations: { 'heritage を heritag と誤記し、details も存在確認なしで読んでいる': '正解。site.heritagは誤記でundefinedになりif文が実行されず、さらにsite.detailsも存在しないため次の行でTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logとtoUpperCaseの呼び方自体は正しく、問題はプロパティ名の誤記とdetailsへの未確認アクセスです。', 'データの件数が不足している': 'siteは1つのオブジェクトとして正しく定義されており、件数不足ではなくプロパティ名と存在確認の問題です。' }, fixOptionExplanations: { 'site.heritage を比較し、site.details?.kind ?? "unknown" のように安全に読む': '正解。正しいプロパティ名heritageで判定し、details?.kind ?? "unknown" で欠損にも安全に対応できます。', '条件を削除する': '条件を削除すると、heritageがtrueかどうかに関わらず常に名前が表示されてしまい、意図と異なります。', 'すべての値を同じ文字列にする': '宮殿のデータを無視して固定文字列にすると、実際の名前や種類の情報が表示されなくなります。' }, impactOptionExplanations: { '正しい boolean 判定ができ、欠損 details があっても停止しない': '正解。プロパティ名を直し安全なアクセスにすることで、正しい判定と欠損時の継続動作の両方が実現します。', '常に例外を出して停止する': '修正後はoptional chainingにより欠損があってもTypeErrorは発生しなくなります。', '題材データを使わなくなる': 'name・kind・heritageなどの既存データはそのまま使われ続けます。修正はプロパティ名と読み取り方だけです。' } },
];

Object.assign(FACT_DETAILS, {
  kr_java_d01: {
    backgroundJa: 'ソウルは韓国の首都で、漢江沿いに広がる人口約950万人の大都市です。',
    historyJa: '14世紀末に朝鮮王朝の都「漢城」として定められ、現在まで継続して韓国の中心都市です。',
    episodeJa: '漢江を境に北の江北と南の江南に分かれ、江南は1970年代以降に急速に開発された新しい中心地区です。',
    keyPointsJa: ['朝鮮王朝以来の都', '人口約950万人', '漢江で江北・江南に分かれる', '江南は1970年代以降に発展'],
  },
  kr_java_d02: {
    backgroundJa: 'ハングルは1443年に世宗大王が創製した、朝鮮語の音を表すための文字体系です。',
    historyJa: '1443年に創製され、1446年に「訓民正音」として公布されました。',
    episodeJa: '子音と母音を組み合わせて音節を作る合理的な構造を持ち、当時の言語学的知見の高さを示しています。',
    keyPointsJa: ['1443年に創製', '1446年に訓民正音として公布', '世宗大王が中心となって作成', '音を表す合理的な文字体系'],
  },
  kr_java_d03: {
    backgroundJa: '韓国は大統領制をとる民主国家で、国民が直接選出する大統領と国会から構成されます。',
    historyJa: '1948年に大韓民国が成立し、現行憲法は1987年の民主化を経て改正されたものです。',
    episodeJa: '権力分立の原則のもとで行政・立法・司法が分かれ、1988年には憲法裁判所が設置されました。',
    keyPointsJa: ['1948年に大韓民国成立', '大統領制の民主国家', '1987年に現行憲法へ改正', '1988年に憲法裁判所設置'],
  },
  kr_java_d04: {
    backgroundJa: '朝鮮戦争は1950年に始まり、休戦協定により朝鮮半島は南北に分断されたままとなっています。',
    historyJa: '1950年6月25日に開戦し、1953年7月27日に休戦協定が結ばれました。',
    episodeJa: '休戦協定にもとづき非武装地帯（DMZ）が設定され、現在も南北を隔てる境界として存在しています。',
    keyPointsJa: ['1950年6月25日に開戦', '1953年7月27日に休戦', '非武装地帯（DMZ）が設定', '南北分断が現在も続く'],
  },
  kr_java_d05: {
    backgroundJa: '韓国にはソウル、釜山、仁川などの主要都市があります。',
    historyJa: '釜山は韓国第2の都市で、朝鮮半島南東部の港湾都市として発展しました。',
    episodeJa: '仁川はソウルの西に位置し、韓国最大の国際空港である仁川国際空港が所在します。',
    keyPointsJa: ['ソウルが首都', '釜山は韓国第2の都市', '仁川は国際空港の所在地', '主要都市は港湾・空港の拠点'],
  },
  final_decode_KR_java_01: {
    backgroundJa: '昌徳宮は朝鮮王朝の宮殿の一つで、自然との調和を重視した造園が特徴です。',
    historyJa: '1405年に建立され、1997年にユネスコ世界遺産に登録されました。',
    episodeJa: '後苑と呼ばれる庭園は地形を生かした自然な配置で、朝鮮王朝の造園美学を体現しています。',
    keyPointsJa: ['1405年に建立', '1997年にユネスコ世界遺産登録', '後苑の庭園が特徴', '自然との調和を重視'],
  },
  final_decode_KR_java_02: {
    backgroundJa: '三・一独立運動は1919年3月1日に朝鮮半島全土で起こった独立運動です。',
    historyJa: '日本の植民地統治下で起こり、これを機に上海で大韓民国臨時政府が樹立されました。',
    episodeJa: '現在3月1日は韓国の国民の祝日「三一節」として、独立運動を記念する式典が行われます。',
    keyPointsJa: ['1919年3月1日に発生', '日本の植民地統治下の運動', '上海で臨時政府樹立につながる', '3月1日は国民の祝日「三一節」'],
  },
  final_decode_KR_java_03: {
    backgroundJa: 'ハングルは子音と母音を組み合わせて音節を作る文字体系です。',
    historyJa: '基本の子音と母音はそれぞれ独立した字母として設計され、組み合わせることで様々な音節を表現できます。',
    episodeJa: '創製当初は子音17字・母音11字で構成され、現代では一部の字が使われなくなり24字が基本字母として使われています。',
    keyPointsJa: ['子音と母音を組み合わせる', '創製当初は28字', '現代では24字が基本', '組み合わせで音節を作る'],
  },
  kr_java_e01: {
    backgroundJa: '世宗大王はハングルを創製したことで知られる朝鮮王朝第4代の王です。',
    historyJa: '1397年に生まれ、1418年に即位し、1450年に没しました。',
    episodeJa: '科学技術・農業・音楽など多分野で業績を残し、韓国では最も尊敬される王の一人とされています。',
    keyPointsJa: ['朝鮮王朝第4代の王', 'ハングルを創製', '科学技術・農業でも業績', '韓国で最も尊敬される王の一人'],
  },
  kr_java_e02: {
    backgroundJa: '韓国標準時（KST）は協定世界時（UTC）より9時間進んでいます。',
    historyJa: '1961年以降、韓国はUTC+9を標準時として採用しています。',
    episodeJa: '日本標準時と同じ時差であるため、両国間では時差調整が不要です。',
    keyPointsJa: ['UTC+9を採用', '1961年以降の標準', '日本標準時と同じ時差', '時差調整が不要'],
  },
  kr_java_e03: {
    backgroundJa: 'ソウルの地下鉄は世界最大級の路線網を持つ都市交通システムです。',
    historyJa: '1974年に1号線が開業し、その後路線網が拡大し続けています。',
    episodeJa: '首都圏電鉄として仁川・京畿道とも広く接続し、1日あたり数百万人が利用します。',
    keyPointsJa: ['1974年に1号線開業', '世界最大級の路線網', '首都圏全体と接続', '1日数百万人が利用'],
  },
  kr_java_e04: {
    backgroundJa: 'Hallyu（韓流）にはドラマ・映画・音楽などの複数のメディア区分があります。',
    historyJa: '1990年代後半から広がり、2000年代以降は世界的な現象となりました。',
    episodeJa: '韓国ドラマは配信サービスを通じて世界的に視聴され、メディアごとに異なる表現形式を持ちます。',
    keyPointsJa: ['1990年代後半から拡大', 'ドラマ・映画・音楽など複数区分', '配信サービスで世界的に視聴', 'メディアごとに異なる表現形式'],
  },
  final_execute_KR_java_01: {
    backgroundJa: '韓国にはソウルをはじめ人口の異なる複数の都市があります。',
    historyJa: 'ソウルは人口約950万人で韓国最大の都市、他の都市は規模が異なります。',
    episodeJa: '釜山は人口約330万人で韓国第2の都市として知られています。',
    keyPointsJa: ['ソウルが最大の都市', '釜山が第2の都市', '都市ごとに人口規模が異なる', '首都圏に人口が集中'],
  },
  final_execute_KR_java_02: {
    backgroundJa: '韓国には文化・科学・産業を支える複数の機関があります。',
    historyJa: 'KAISTは1971年に設立された韓国の代表的な科学技術大学です。',
    episodeJa: '半導体・自動車関連の研究機関や文化機関も多く設立され、韓国の産業・文化発展を支えています。',
    keyPointsJa: ['KAISTは1971年設立', '科学技術系の機関が複数', '産業・文化発展を支える', '研究機関の設立が続く'],
  },
  kr_java_b01: {
    backgroundJa: '韓国には行政区分として道（province）が設けられています。',
    historyJa: '江原道や京畿道など、複数の道がそれぞれ異なる地域コードを持ちます。',
    episodeJa: '地域コードの比較では文字列の内容比較が必要で、参照比較とは異なる結果になることがあります。',
    keyPointsJa: ['行政区分として道がある', '江原道・京畿道などが存在', '地域コードは文字列で管理', '内容比較が必要'],
  },
  kr_java_b02: {
    backgroundJa: '韓国の郵便番号は2015年から導入された5桁の形式です。',
    historyJa: '韓国郵政事業本部が2015年に現行の5桁郵便番号制度を導入しました。',
    episodeJa: '先頭の数字は地域を示し、識別コードの先頭ゼロは数値ではなく文字列として保持する必要があります。',
    keyPointsJa: ['2015年に現行制度を導入', '5桁の郵便番号形式', '先頭の数字が地域を示す', '韓国郵政事業本部が管理'],
  },
  kr_java_b03: {
    backgroundJa: '1988年のソウルオリンピックには多くの国・地域が参加しました。',
    historyJa: 'ソウルオリンピックは1988年に開催され、韓国にとって初の夏季オリンピック開催となりました。',
    episodeJa: '参加国・地域別のメダル集計などの統計データは、平均計算の際に整数除算に注意が必要です。',
    keyPointsJa: ['1988年に開催', '韓国初の夏季オリンピック', '統計データの集計が行われる', '整数除算に注意が必要'],
  },
  final_debug_KR_java_01: {
    backgroundJa: '宗廟は朝鮮王朝の王と王妃の位牌を祀る霊廟で、1995年にユネスコ世界遺産に登録されました。',
    historyJa: '14世紀末に建立され、現在も宗廟大祭という伝統儀礼が継承されています。',
    episodeJa: '登録年などのデータを管理する際には、キーが存在しない場合の安全な取得が必要です。',
    keyPointsJa: ['14世紀末に建立', '1995年にユネスコ世界遺産登録', '宗廟大祭を継承', 'データ管理では安全な取得が必要'],
  },
});

const javaDecode = [
  { id: 'kr_java_d01', languageId: 'java', world: 'decode', title: 'Seoul as capital in Java', titleJa: 'ソウル（首都・Java）', category: 'geography-capital', objective: 'strings', source: SRC.seoul, summaryJa: 'ソウルは韓国の首都です。', prompt: '文字列連結で Korea capital: Seoul と表示されるよう、空欄を埋めてください。', code: 'String capital = ___BLANK___;\nSystem.out.println("Korea capital: " + capital);', answer: '"Seoul"', expectedOutput: 'Korea capital: Seoul', hint: 'capital に入る文字列をダブルクオートで書きます。', explanation: '"Seoul" を入れると + 演算子で連結されます。', programmingExplanation: 'Java の文字列は + 演算子で連結できます。' },
  { id: 'kr_java_d02', languageId: 'java', world: 'decode', title: 'Hangul creation year in Java', titleJa: 'ハングル創製の年（Java）', category: 'history-language', objective: 'numbers', source: SRC.hangul, summaryJa: 'ハングルは1443年に世宗大王が創製しました。', prompt: 'year が1443のとき Hangul:1443 と表示されるよう、空欄を埋めてください。', code: 'int year = ___BLANK___;\nSystem.out.println("Hangul:" + year);', answer: '1443', expectedOutput: 'Hangul:1443', hint: 'int リテラルは引用符なしで書きます。', explanation: 'year に1443を入れると文字列連結で展開されます。', programmingExplanation: 'int 型の変数は + 演算子で文字列と連結できます。' },
  { id: 'kr_java_d03', languageId: 'java', world: 'decode', title: 'Constitutional democracy condition in Java', titleJa: '大統領制の条件分岐（Java）', category: 'politics-system', objective: 'condition', source: SRC.democracy, summaryJa: '韓国は大統領制をとる民主国家です。', prompt: '政治体制名が presidential のとき democracy と表示されるよう、if の条件を完成させてください。', code: 'String system = "presidential";\nif (___BLANK___) {\n    System.out.println("democracy");\n} else {\n    System.out.println("other");\n}', answer: 'system.equals("presidential")', expectedOutput: 'democracy', hint: '文字列の内容比較には equals を使います。', explanation: 'system の内容が一致するので democracy が出力されます。', programmingExplanation: 'Java では文字列の内容比較に equals メソッドを使います。' },
  { id: 'kr_java_d04', languageId: 'java', world: 'decode', title: 'Korean peninsula division switch labels', titleJa: '朝鮮半島の分断ラベル（switch）', category: 'history-geography', objective: 'switch', source: SRC.dmz, summaryJa: '朝鮮半島は1953年の休戦協定以来、南北に分断されています。', prompt: 'status が divided のとき separated と表示されるよう case を埋めてください。', code: 'String status = "divided";\nswitch (status) {\n    case ___BLANK___:\n        System.out.println("separated");\n        break;\n    default:\n        System.out.println("other");\n}', answer: '"divided"', expectedOutput: 'separated', hint: 'case には status と一致する文字列を書きます。', explanation: 'case "divided" が一致し、separated が出力されます。', programmingExplanation: 'Java の switch は文字列の値を直接比較できます。' },
  { id: 'kr_java_d05', languageId: 'java', world: 'decode', title: 'Korean major cities sample array', titleJa: '韓国の主要都市サンプル配列', category: 'geography', objective: 'array', source: SRC.seoul, summaryJa: '韓国にはソウル、釜山、仁川などの主要都市があります。', prompt: '配列から Incheon を取り出して表示するよう、添字を埋めてください。', code: 'String[] cities = {"Seoul", "Busan", "Incheon"};\nSystem.out.println(cities[___BLANK___]);', answer: '2', expectedOutput: 'Incheon', hint: 'Java の配列は0番目から数えます。', explanation: 'Incheon は配列の3番目なので添字は2です。', programmingExplanation: '配列の添字は0から始まります。' },
];

const javaFinalDecode = [
  { id: 'final_decode_KR_java_01', languageId: 'java', world: 'decode', title: 'Changdeokgung Palace method lookup', titleJa: '昌徳宮（メソッド）', category: 'world-heritage', objective: 'method', source: SRC.changdeokgung, summaryJa: '昌徳宮は韓国にある世界遺産です。', prompt: 'メソッドと条件を使い、city が Seoul のときだけ Changdeokgung:Seoul と表示するよう空欄を埋めてください。', code: 'static String label(String site, String place) {\n    if (place.equals(___BLANK___)) return site + ":" + place;\n    return "skip";\n}\npublic static void main(String[] args) {\n    System.out.println(label("Changdeokgung", "Seoul"));\n}', answer: '"Seoul"', expectedOutput: 'Changdeokgung:Seoul', hint: 'place と比較する都市名をダブルクオートで書きます。', explanation: 'place が Seoul と一致するので連結した文字列が返ります。', programmingExplanation: 'メソッド、条件分岐、文字列連結を組み合わせています。' },
  { id: 'final_decode_KR_java_02', languageId: 'java', world: 'decode', title: 'March First Movement event records', titleJa: '三・一独立運動（イベント記録）', category: 'history', objective: 'collections', source: SRC.marchFirst, summaryJa: '三・一独立運動は1919年に起きた独立運動です。', prompt: 'year が1919の出来事だけを出力するよう、if 条件の空欄を埋めてください。', code: 'import java.util.*;\nclass Event {\n    String name; int year;\n    Event(String n, int y) { name = n; year = y; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        List<Event> events = new ArrayList<>();\n        events.add(new Event("March First Movement", 1919));\n        events.add(new Event("Other", 1945));\n        for (Event event : events) {\n            if (___BLANK___) {\n                System.out.println(event.name);\n            }\n        }\n    }\n}', answer: 'event.year == 1919', expectedOutput: 'March First Movement', hint: '各 Event の year フィールドを比較します。', explanation: 'March First Movement の year だけが一致するので出力されます。', programmingExplanation: 'for-each と if を組み合わせ、条件に合う要素だけを処理します。' },
  { id: 'final_decode_KR_java_03', languageId: 'java', world: 'decode', title: 'Hangul letter map lookup', titleJa: 'ハングル字母のlookup', category: 'history-language', objective: 'collections', source: SRC.hangul, summaryJa: 'ハングルは子音と母音を合わせて24の基本字母を持ちます。', prompt: 'HashMap から letters キーの値を取り出すよう空欄を埋めてください。', code: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> hangul = new HashMap<>();\n        hangul.put("letters", 24);\n        System.out.println(hangul.get(___BLANK___));\n    }\n}', answer: '"letters"', expectedOutput: '24', hint: 'get に渡すキーをダブルクオートで書きます。', explanation: '"letters" キーの値が24です。', programmingExplanation: 'HashMap の get メソッドはキーに対応する値を返します。' },
];

const javaExecute = [
  { id: 'kr_java_e01', languageId: 'java', world: 'execute', title: 'Sejong name equality check', titleJa: '世宗大王の名前の比較', category: 'history-figure', objective: 'method', source: SRC.sejong, summaryJa: '世宗大王はハングルを創製した朝鮮王朝の王です。', prompt: '文字列比較メソッドの結果を選んでください。', code: 'String creator = "Sejong";\nString input = "Sejong";\nSystem.out.println(creator.equals(input));', options: ['true', 'false', 'Sejong', 'Error'], answer: 'true', expectedOutput: 'true', hint: 'equals は内容が同じか比較します。', explanation: 'creator と input の内容が同じなので true です。', programmingExplanation: 'Java の equals メソッドは文字列の内容を比較します。', optionExplanations: { 'true': '正解。creatorとinputはどちらも"Sejong"という同じ内容の文字列なので、equalsはtrueを返します。', 'false': 'creatorとinputは内容が完全に一致する文字列であり、falseになる理由はありません。', 'Sejong': 'equalsメソッドはboolean値を返すメソッドであり、文字列そのものが出力されるわけではありません。', 'Error': '同じ型の文字列同士をequalsで比較しているため、例外は発生しません。' } },
  { id: 'kr_java_e02', languageId: 'java', world: 'execute', title: 'Korea Standard Time offset', titleJa: '韓国標準時のオフセット', category: 'geography-time', objective: 'numbers', source: SRC.geography, summaryJa: '韓国標準時（KST）はUTCより9時間進んでいます。', prompt: '計算結果の出力を選んでください。', code: 'int utcOffset = 9;\nint utcHour = 3;\nint kstHour = (utcHour + utcOffset) % 24;\nSystem.out.println(kstHour);', options: ['12', '9', '3', '21'], answer: '12', expectedOutput: '12', hint: 'utcHour に utcOffset を足し、24で割った余りを見ます。', explanation: '3 + 9 = 12 で、24未満なので余りもそのまま12です。', programmingExplanation: '剰余演算子 % は24時間表記からあふれた値を調整するために使います。', optionExplanations: { '12': '正解。3+9=12で、12は24未満なので12 % 24は12のままです。', '9': 'これはutcOffsetの値であり、utcHourとの加算結果ではありません。', '3': 'これはutcHourの値であり、utcOffsetを加算する前の値です。', '21': '3+9の計算結果は12であり、21にはなりません。' } },
  { id: 'kr_java_e03', languageId: 'java', world: 'execute', title: 'Seoul subway station list', titleJa: 'ソウル地下鉄の駅リスト', category: 'urban-transport', objective: 'collections', source: SRC.subway, summaryJa: 'ソウルの地下鉄は1974年に開業しました。', prompt: 'ArrayList を連結した出力を選んでください。', code: 'import java.util.*;\nList<String> stations = new ArrayList<>();\nstations.add("Seoul");\nstations.add("City Hall");\nString result = String.join(">", stations);\nSystem.out.println(result);', options: ['Seoul>City Hall', 'City Hall>Seoul', 'Seoul', 'City Hall'], answer: 'Seoul>City Hall', expectedOutput: 'Seoul>City Hall', hint: 'stations への追加順を見ます。', explanation: 'Seoul が先に追加されているので Seoul>City Hall です。', programmingExplanation: 'String.join はリストの要素を区切り文字でつなげます。', optionExplanations: { 'Seoul>City Hall': '正解。stationsにはSeoulが先、City Hallが後に追加されているため、join結果もこの順序になります。', 'City Hall>Seoul': 'stationsへの追加順はSeoulが先でCity Hallが後なので、順序が入れ替わることはありません。', 'Seoul': 'resultにはstationsの全要素が連結されるため、2件目のCity Hallも含まれます。', 'City Hall': '1件目のSeoulも結果に含まれるため、2件目だけが残ることはありません。' } },
  { id: 'kr_java_e04', languageId: 'java', world: 'execute', title: 'Hallyu media type override', titleJa: 'Hallyuメディアタイプのオーバーライド', category: 'culture', objective: 'inheritance', source: SRC.hallyu, summaryJa: 'Hallyu（韓流）にはドラマ・映画など複数のメディア区分があります。', prompt: 'メソッドオーバーライドの出力を選んでください。', code: 'class Media {\n    String describe() { return "media"; }\n}\nclass KDrama extends Media {\n    @Override\n    String describe() { return "k-drama"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Media item = new KDrama();\n        System.out.println(item.describe());\n    }\n}', options: ['k-drama', 'media', 'Media', 'Error'], answer: 'k-drama', expectedOutput: 'k-drama', hint: '実際のインスタンスは KDrama です。', explanation: 'オーバーライドにより KDrama の describe が呼ばれます。', programmingExplanation: 'Java では実行時の実際の型のメソッドが呼ばれます（動的束縛）。', optionExplanations: { 'k-drama': '正解。itemの実際の型はKDramaなので、オーバーライドされたKDrama側のdescribeが呼ばれk-dramaを返します。', 'media': '宣言の型はMediaですが、動的束縛により実際のインスタンスKDramaのdescribeが呼ばれるため、mediaにはなりません。', 'Media': 'describeはStringを返すメソッドで、クラス名そのものが出力されるわけではありません。', 'Error': 'KDramaはMediaを正しく継承しオーバーライドしているため、例外は発生しません。' } },
];

const javaFinalExecute = [
  { id: 'final_execute_KR_java_01', languageId: 'java', world: 'execute', title: 'Korean city population query', titleJa: '韓国の都市人口クエリ', category: 'geography-demographics', objective: 'collections', source: SRC.seoul, summaryJa: 'ソウルは韓国最大の都市で、釜山が第2の都市です。', prompt: 'HashMap から人口が最大の都市名を選ぶ出力を選んでください。', code: 'import java.util.*;\nMap<String, Integer> cities = new HashMap<>();\ncities.put("Seoul", 9500000);\ncities.put("Busan", 3300000);\nString largest = "";\nint max = 0;\nfor (String city : cities.keySet()) {\n    if (cities.get(city) > max) {\n        max = cities.get(city);\n        largest = city;\n    }\n}\nSystem.out.println(largest);', options: ['Seoul', 'Busan', '9500000', '3300000'], answer: 'Seoul', expectedOutput: 'Seoul', hint: 'population が最大の city を追跡します。', explanation: 'Seoul の人口が最大なので largest になります。', programmingExplanation: 'keySet をループし、最大値を更新しながら対応するキーを保持します。', optionExplanations: { 'Seoul': '正解。Seoulの人口9500000がBusanの3300000より多いため、largestは最終的にSeoulになります。', 'Busan': 'Busanの人口3300000はSeoulの9500000より少ないため、maxの更新時にlargestとして残りません。', '9500000': 'largestは都市名（文字列）の変数であり、人口の数値そのものが出力されるわけではありません。', '3300000': 'largestには最大人口を持つ都市の名前が入るため、人口の数値が出力されることはありません。' } },
  { id: 'final_execute_KR_java_02', languageId: 'java', world: 'execute', title: 'Korean tech institution count', titleJa: '韓国のテクノロジー機関カウント', category: 'industry', objective: 'collections', source: SRC.kaist, summaryJa: 'KAISTなど韓国の科学技術機関は複数あります。', prompt: 'ArrayList と boolean フィールドを使った件数の出力を選んでください。', code: 'import java.util.*;\nclass Institution {\n    String name; boolean techFocused;\n    Institution(String n, boolean t) { name = n; techFocused = t; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        List<Institution> list = new ArrayList<>();\n        list.add(new Institution("KAIST", true));\n        list.add(new Institution("POSTECH", true));\n        list.add(new Institution("Local Museum", false));\n        int count = 0;\n        for (Institution inst : list) {\n            if (inst.techFocused) count++;\n        }\n        System.out.println(count);\n    }\n}', options: ['2', '3', '1', 'KAIST'], answer: '2', expectedOutput: '2', hint: 'techFocused が true の要素だけ数えます。', explanation: 'KAIST、POSTECH の2件が true です。', programmingExplanation: 'for-each ループで boolean フィールドを確認し、count を加算します。', optionExplanations: { '2': '正解。techFocusedがtrueなのはKAISTとPOSTECHの2件なので、countは2になります。', '3': 'listには3件のデータがありますが、techFocusedがtrueなのはそのうち2件だけです。', '1': 'KAISTとPOSTECHの両方がtrueなので、1件だけがカウントされるわけではありません。', 'KAIST': 'countはtrueの件数を表す整数で、機関の名前そのものが出力されるわけではありません。' } },
];

const javaDebug = [
  { id: 'kr_java_b01', languageId: 'java', world: 'debug', title: 'Province code comparison', titleJa: '道（province）コードの比較', category: 'administration', objective: 'strings', source: SRC.geography, summaryJa: '韓国には複数の道（province）が行政区分として存在します。', prompt: '道コードを比較したいコードです。参照比較の不具合を直します。', code: 'String code1 = new String("GW");\nString code2 = new String("GW");\nif (code1 == code2) {\n    System.out.println("same");\n} else {\n    System.out.println("different");\n}', cause: 'new String で作った別オブジェクトを == で比較している', fix: 'code1.equals(code2) に修正する', impact: '内容が同じ道コードを正しく same と判定できる', why: '== は参照を比較し、equals は内容を比較するためです。', correctedCode: 'String code1 = new String("GW");\nString code2 = new String("GW");\nif (code1.equals(code2)) {\n    System.out.println("same");\n} else {\n    System.out.println("different");\n}', hint: 'new String は毎回新しいオブジェクトを作ります。', explanation: '== は別オブジェクトなので false になります。', programmingExplanation: 'Java の文字列内容比較には equals を使う必要があります。', causeOptionExplanations: { 'new String で作った別オブジェクトを == で比較している': '正解。new Stringはそれぞれ別オブジェクトを生成するため、内容が同じでも==で比較するとfalseになります。', '出力文の文字列だけが間違っている': 'println自体の書き方は正しく、問題はif文の比較演算子の使い方です。', 'データの件数が不足している': 'code1とcode2には正しく値が入っており、件数の問題ではなく比較方法が原因です。' }, fixOptionExplanations: { 'code1.equals(code2) に修正する': '正解。equalsメソッドは内容を比較するため、code1とcode2が同じ"GW"であれば正しくtrueと判定されます。', '条件を削除する': 'このコードにはif文の条件はあり、削除すると分岐ができなくなります。', 'すべての値を同じ文字列にする': 'コードのデータを無視して固定文字列にすると、実際の比較結果が反映されません。' }, impactOptionExplanations: { '内容が同じ道コードを正しく same と判定できる': '正解。equalsに修正することで、内容が同じ道コードは正しくsameと判定されます。', '常に例外を出して停止する': 'この修正は比較方法を直すだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '道コードのデータはそのまま使われ続けます。修正は比較方法だけです。' } },
  { id: 'kr_java_b02', languageId: 'java', world: 'debug', title: 'Korean postal code as int', titleJa: '韓国の郵便番号をintで保存', category: 'administration', objective: 'numbers', source: SRC.postalCode, summaryJa: '韓国の郵便番号は先頭ゼロを含む5桁形式です。', prompt: '先頭ゼロを含む郵便番号を保存するコードです。型の不具合を直します。', code: 'int postalCode = 03187;\nSystem.out.println(postalCode);', cause: '先頭ゼロを含む数値を int リテラルとして書いている（コンパイルエラーになる）', fix: '郵便番号を String 型で保存する', impact: '先頭ゼロを含む郵便番号をそのまま表示できる', why: '先頭ゼロ付きの int リテラルは8進数とみなされ、9を含むと不正な構文になるためです。', correctedCode: 'String postalCode = "03187";\nSystem.out.println(postalCode);', hint: '先頭ゼロのある数値はそのまま int として書けません。', explanation: '03187 のような表記は Java では不正な8進数リテラルになります。', programmingExplanation: 'IDやコードは計算対象ではなく文字列として保存します。', causeOptionExplanations: { '先頭ゼロを含む数値を int リテラルとして書いている（コンパイルエラーになる）': '正解。先頭の0は8進数リテラルとみなされ、03187には8進数で無効な数字9が含まれるためコンパイルエラーになります。', '出力文の文字列だけが間違っている': 'println(postalCode)自体の書き方は正しく、問題はpostalCodeの宣言部分です。', 'データの件数が不足している': 'postalCodeには値を1つ設定しようとしており、件数の問題ではなくリテラルの表記が原因です。' }, fixOptionExplanations: { '郵便番号を String 型で保存する': '正解。Stringで保存すれば、先頭ゼロを含む表記もそのまま正しく保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の郵便番号データを無視して固定文字列にすると、正しい郵便番号が表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む郵便番号をそのまま表示できる': '正解。String型で保存することで、先頭ゼロを含む郵便番号の表記をそのまま失わずに表示できます。', '常に例外を出して停止する': 'String型に修正することでコンパイルエラー自体が解消され、例外も発生しません。', '題材データを使わなくなる': '郵便番号のデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'kr_java_b03', languageId: 'java', world: 'debug', title: 'Olympic medal average calculation', titleJa: 'オリンピックメダル平均の計算', category: 'sports-history', objective: 'numbers', source: SRC.seoulOlympics, summaryJa: '1988年のソウルオリンピックには多くの国・地域が参加しました。', prompt: '平均メダル数を計算するコードです。整数除算の不具合を直します。', code: 'int totalMedals = 33;\nint games = 2;\nint average = totalMedals / games;\nSystem.out.println(average);', cause: 'int 同士の除算で小数部分が切り捨てられている', fix: 'double に変換してから除算する', impact: '16.5 のような小数を含む正確な平均値を表示できる', why: 'Java では int / int の結果は int になり、小数部分が失われるためです。', correctedCode: 'int totalMedals = 33;\nint games = 2;\ndouble average = (double) totalMedals / games;\nSystem.out.println(average);', hint: '除算の前にどちらかを double にキャストします。', explanation: '33 / 2 は int では16になり、0.5が失われます。', programmingExplanation: '整数同士の除算は小数点以下が切り捨てられるため、キャストが必要です。', causeOptionExplanations: { 'int 同士の除算で小数部分が切り捨てられている': '正解。totalMedalsとgamesは両方int型なので、33/2は整数除算となり小数部分の0.5が切り捨てられ16になります。', '出力文の文字列だけが間違っている': 'println(average)自体の書き方は正しく、問題は除算の計算部分です。', 'データの件数が不足している': 'totalMedalsとgamesには正しく値が入っており、件数の問題ではなく整数除算が原因です。' }, fixOptionExplanations: { 'double に変換してから除算する': '正解。(double) totalMedals / gamesとキャストすることで、小数部分を含む正確な除算結果が得られます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '計算結果を無視して固定文字列にすると、実際の平均値が表示されなくなります。' }, impactOptionExplanations: { '16.5 のような小数を含む正確な平均値を表示できる': '正解。doubleにキャストして除算することで、16.5のような小数を含む正確な平均値が計算されます。', '常に例外を出して停止する': 'この修正は型変換を加えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': 'totalMedalsとgamesのデータはそのまま使われ続けます。修正は除算時の型変換だけです。' } },
];

const javaFinalDebug = [
  { id: 'final_debug_KR_java_01', languageId: 'java', world: 'debug', title: 'Jongmyo Shrine year lookup', titleJa: '宗廟の登録年lookup', category: 'world-heritage-history', objective: 'collections', source: SRC.jongmyo, summaryJa: '宗廟は1995年にユネスコ世界遺産に登録されました。', prompt: 'HashMap からキーを安全に取得し、文字列を数値に変換したいコードです。', code: 'import java.util.*;\nMap<String, String> registry = new HashMap<>();\nregistry.put("Jongmyo", "1995");\nString yearStr = registry.get("Bulguksa");\nint year = Integer.parseInt(yearStr);\nSystem.out.println(year);', cause: '登録されていない Bulguksa キーを get した結果（null）を parseInt に渡している', fix: 'get の戻り値が null かどうかを確認してから parseInt する', impact: '登録されていないキーでも例外を出さずに処理できる', why: 'null を parseInt に渡すと NumberFormatException が発生するためです。', correctedCode: 'import java.util.*;\nMap<String, String> registry = new HashMap<>();\nregistry.put("Jongmyo", "1995");\nString yearStr = registry.get("Bulguksa");\nif (yearStr != null) {\n    int year = Integer.parseInt(yearStr);\n    System.out.println(year);\n} else {\n    System.out.println("unknown");\n}', hint: 'registry には Jongmyo しか登録されていません。', explanation: 'Bulguksa は registry に存在しないので get は null を返します。', programmingExplanation: 'null チェックと例外処理を組み合わせて欠損データに備えます。', causeOptionExplanations: { '登録されていない Bulguksa キーを get した結果（null）を parseInt に渡している': '正解。registryにはJongmyoしか登録されておらず、registry.get("Bulguksa")はnullを返し、それをparseIntに渡すとNumberFormatExceptionになります。', '出力文の文字列だけが間違っている': 'println(year)自体の書き方は正しく、問題はその前のgetとparseIntの部分です。', 'データの件数が不足している': 'registryには1件のデータが正しく登録されており、件数不足ではなくBulguksaが未登録であることが原因です。' }, fixOptionExplanations: { 'get の戻り値が null かどうかを確認してから parseInt する': '正解。yearStrがnullでないことを確認してからparseIntすることで、未登録キーでも安全に処理できます。', '条件を削除する': 'このコードには元々if文の条件はなく、追加すべきnullチェックを省略すると同じエラーが起きます。', 'すべての値を同じ文字列にする': '登録年のデータを無視して固定文字列にすると、実際の登録年が正しく扱えなくなります。' }, impactOptionExplanations: { '登録されていないキーでも例外を出さずに処理できる': '正解。nullチェックを追加することで、未登録キーに対してもNumberFormatExceptionを起こさず安全に処理できます。', '常に例外を出して停止する': '修正後はnullチェックによりNumberFormatException自体が発生しなくなります。', '題材データを使わなくなる': 'Jongmyoの登録データはそのまま使われ続けます。修正は未登録キーへの対応方法だけです。' } },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const KOREA_FACTS = allSpecs.map(makeFact);
export const KOREA_ASSIGNMENTS = allSpecs.map(assignment);

export const KR_PY_DECODE = pyDecode.map(decode);
export const KR_PY_EXECUTE = pyExecute.map(execute);
export const KR_PY_DEBUG = pyDebug.map(debug);

export const KR_JS_DECODE = jsDecode.map(decode);
export const KR_JS_EXECUTE = jsExecute.map(execute);
export const KR_JS_DEBUG = jsDebug.map(debug);

export const KR_JAVA_DECODE = javaDecode.map(decode);
export const KR_JAVA_EXECUTE = javaExecute.map(execute);
export const KR_JAVA_DEBUG = javaDebug.map(debug);

export const KOREA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: KOREA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: KOREA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: KOREA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: KOREA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: KOREA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: KOREA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: KOREA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: KOREA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: KOREA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
