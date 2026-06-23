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

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、中国の歴史・文化・地理・科学を理解するときの代表的な題材です。`;
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
    historyJa: spec.historyJa || '',
    episodeJa: spec.episodeJa || '',
    keyPointsJa: spec.keyPointsJa || [spec.summaryJa, `${spec.titleJa}の年代・場所・役割を分けて見る`, '名称だけでなく背景と意義を確認する'],
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
