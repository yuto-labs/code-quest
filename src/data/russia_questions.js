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

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、ロシアの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
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
  { id: 'ru_py_e01', languageId: 'python', world: 'execute', title: 'State Hermitage Museum', titleJa: '国立エルミタージュ美術館', category: 'museum', objective: 'function', source: SRC.hermitage, summaryJa: '国立エルミタージュ美術館はサンクトペテルブルクにあります。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def museum_label(name, city):\n    return f"{name}:{city}"\nprint(museum_label("Hermitage", "Saint Petersburg"))', options: ['Hermitage:Saint Petersburg', 'Saint Petersburg:Hermitage', 'Hermitage', 'Error'], answer: 'Hermitage:Saint Petersburg', expectedOutput: 'Hermitage:Saint Petersburg', hint: 'return の f-string で name と city の順番を見ます。', explanation: 'name が先、city が後ろなので Hermitage:Saint Petersburg です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'ru_py_e02', languageId: 'python', world: 'execute', title: 'Bolshoi Theatre', titleJa: 'ボリショイ劇場', category: 'culture', objective: 'dictionary', source: SRC.bolshoi, summaryJa: 'ボリショイ劇場はモスクワにあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'theatre = {"name": "Bolshoi Theatre", "city": "Moscow"}\nprint(theatre["city"])', options: ['Moscow', 'Bolshoi Theatre', 'Saint Petersburg', 'city'], answer: 'Moscow', expectedOutput: 'Moscow', hint: '"city" キーの値を見ます。', explanation: 'theatre["city"] は Moscow を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'ru_py_e03', languageId: 'python', world: 'execute', title: 'Trans-Siberian Railway sample stops', titleJa: 'シベリア鉄道のサンプル停車地', category: 'transport', objective: 'loop', source: SRC.transSiberian, summaryJa: 'サンプルとして Moscow、Yekaterinburg などのシベリア鉄道停車地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["Moscow", "Yekaterinburg"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['Moscow|Yekaterinburg', 'Yekaterinburg|Moscow', 'Moscow|', 'Yekaterinburg'], answer: 'Moscow|Yekaterinburg', expectedOutput: 'Moscow|Yekaterinburg', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'Moscow、Yekaterinburg の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'ru_py_e04', languageId: 'python', world: 'execute', title: 'Kamchatka Peninsula records', titleJa: 'カムチャツカ半島のレコード', category: 'geography-nature', objective: 'loop', source: SRC.kamchatka, summaryJa: 'カムチャツカ半島は火山とロシア極東と結びつく地域です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Kamchatka", "fareast": True},\n    {"name": "Other", "fareast": False}\n]\nselected = [r["name"] for r in records if r["fareast"]]\nprint(selected[0])', options: ['Kamchatka', 'Other', 'True', 'False'], answer: 'Kamchatka', expectedOutput: 'Kamchatka', hint: 'fareast が True の辞書だけ残します。', explanation: 'Kamchatka の fareast だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_RU_python_01', languageId: 'python', world: 'execute', title: 'Lake Baikal World Heritage records', titleJa: 'バイカル湖の世界遺産レコード', category: 'world-heritage-nature', objective: 'loop', source: SRC.baikalFinal, summaryJa: 'バイカル湖は世界遺産に登録されています。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "site": "natural", "period": 200},\n    {"name": "Other", "site": "cultural", "period": 100},\n    {"name": "Site B", "site": "natural", "period": 50}\n]\nselected = sorted([r for r in records if r["site"] == "natural"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'site で絞ったあと period の昇順です。', explanation: 'natural は Site B(50) と Site A(200) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_RU_python_02', languageId: 'python', world: 'execute', title: 'Russian cultural institutions dataset', titleJa: 'ロシアの文化機関データセット', category: 'culture', objective: 'dictionary', source: SRC.culturalInstitutions, summaryJa: 'サンプルとして Hermitage、Bolshoi Theatre、Tretyakov Gallery、Mariinsky Theatre を扱います。', prompt: '辞書とリストから moscow が True の件数を集計した結果を選んでください。', code: 'institutions = [\n    {"name": "Bolshoi Theatre", "moscow": True},\n    {"name": "Tretyakov Gallery", "moscow": True},\n    {"name": "Hermitage", "moscow": False},\n    {"name": "Mariinsky Theatre", "moscow": False}\n]\ncount = sum(1 for inst in institutions if inst["moscow"])\nprint(count)', options: ['2', '4', '1', 'Bolshoi Theatre'], answer: '2', expectedOutput: '2', hint: 'moscow が True の辞書だけ数えます。', explanation: 'Bolshoi Theatre、Tretyakov Gallery の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'ru_py_b01', languageId: 'python', world: 'debug', title: 'Russian ruble formatting', titleJa: 'ロシアルーブルの表示', category: 'finance', objective: 'strings', source: SRC.ruble, summaryJa: 'ロシアの通貨はロシアルーブルです。', prompt: '金額を 10.50 RUB と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " RUB")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 RUB と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} RUB")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'ru_py_b02', languageId: 'python', world: 'debug', title: 'Russian station-code style labels', titleJa: 'ロシアの駅コード風の表示', category: 'administration', objective: 'strings', source: SRC.stationCode, summaryJa: 'サンプルの駅コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある駅コードを表示するコードです。数値保存の不具合を直します。', code: 'station_code = 12\nprint(station_code)', cause: '駅コードを数値として保存すると先頭ゼロを保持できない', fix: '駅コードを最初から文字列として保存する', impact: '先頭ゼロを含む駅コードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'station_code = "0012"\nprint(station_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。' },
  { id: 'ru_py_b03', languageId: 'python', world: 'debug', title: 'Russian city abbreviation lookup', titleJa: '都市略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.cityAbbrev, summaryJa: 'サンプルとして MOW、SPB、KZN、NSK などの都市略号を扱います。', prompt: '略号 KZN から都市名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"MOW": "Moscow", "SPB": "Saint Petersburg"}\ncode = "KZN"\nprint(abbreviations[code])', cause: '辞書に KZN のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"MOW": "Moscow", "SPB": "Saint Petersburg", "KZN": "Kazan"}\ncode = "KZN"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'KZN というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_RU_python_01', languageId: 'python', world: 'debug', title: 'Lena Pillars Nature Park', titleJa: 'レナ石柱自然公園', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.lenaPillars, summaryJa: 'レナ石柱自然公園はロシアにある世界遺産です。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Lena Pillars", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["sample_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'sample_count がない辞書でも record["sample_count"] を直接読んでいる', fix: 'record.get("sample_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Lena Pillars", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("sample_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に sample_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
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
  { id: 'ru_js_e01', languageId: 'javascript', world: 'execute', title: 'Yuri Gagarin', titleJa: 'ユーリイ・ガガーリン', category: 'science-history', objective: 'array', source: SRC.gagarin, summaryJa: 'ユーリイ・ガガーリンは初めて宇宙に到達した人物です。', prompt: 'map と join の出力を選んでください。', code: 'const names = ["gagarin"];\nconst label = names.map(n => n.toUpperCase()).join("-");\nconsole.log(label);', options: ['GAGARIN', 'gagarin', 'G-A', 'Gagarin'], answer: 'GAGARIN', expectedOutput: 'GAGARIN', hint: '各要素を大文字化します。', explanation: 'gagarin が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'ru_js_e02', languageId: 'javascript', world: 'execute', title: 'Volga River sample segments', titleJa: 'ヴォルガ川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.volga, summaryJa: 'ヴォルガ川はロシアの主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 40, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['90', '70', '30', '304020'], answer: '90', expectedOutput: '90', hint: '数値を左から足していきます。', explanation: '30 + 40 + 20 = 90 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'ru_js_e03', languageId: 'javascript', world: 'execute', title: 'Mariinsky Theatre', titleJa: 'マリインスキー劇場', category: 'culture', objective: 'object', source: SRC.mariinsky, summaryJa: 'マリインスキー劇場はサンクトペテルブルクにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const theatre = { city: "Saint Petersburg", productions: ["ballet", "opera"] };\nlet result = theatre.city;\nfor (const item of theatre.productions) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Saint Petersburg:ballet:opera', 'ballet:opera:Saint Petersburg', 'Saint Petersburg', 'opera:ballet'], answer: 'Saint Petersburg:ballet:opera', expectedOutput: 'Saint Petersburg:ballet:opera', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに ballet、opera が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'ru_js_e04', languageId: 'javascript', world: 'execute', title: 'Moscow State University', titleJa: 'モスクワ国立大学', category: 'education', objective: 'function', source: SRC.msu, summaryJa: 'モスクワ国立大学はモスクワにあります。', prompt: '関数と条件の戻り値を選んでください。', code: 'function universityLabel(city) {\n  return city === "Moscow" ? "MSU" : "other";\n}\nconsole.log(universityLabel("Moscow"));', options: ['MSU', 'other', 'Moscow', 'true'], answer: 'MSU', expectedOutput: 'MSU', hint: '"Moscow" === "Moscow" の判定を見ます。', explanation: '条件が true なので "MSU" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_RU_javascript_01', languageId: 'javascript', world: 'execute', title: 'Virgin Komi Forests', titleJa: 'コミ原生林', category: 'world-heritage-nature', objective: 'array', source: SRC.komiForests, summaryJa: 'コミ原生林は世界遺産です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const forests = [\n  { name: "Komi North", biome: "boreal", area: 5 },\n  { name: "Other", biome: "steppe", area: 3 },\n  { name: "Komi South", biome: "boreal", area: 2 }\n];\nconst names = forests.filter(f => f.biome === "boreal").map(f => f.name).sort();\nconsole.log(names.join(">"));', options: ['Komi North>Komi South', 'Komi South>Komi North', 'Other>Komi North', 'Other>Komi South>Komi North'], answer: 'Komi North>Komi South', expectedOutput: 'Komi North>Komi South', hint: 'biome で絞ったあと、名前をアルファベット順にします。', explanation: 'Komi North と Komi South が残り、sort で Komi North が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_RU_javascript_02', languageId: 'javascript', world: 'execute', title: 'Russian rail and river-route sample data', titleJa: 'ロシアの鉄道・河川ルートサンプルデータ', category: 'transport', objective: 'object', source: SRC.routeData, summaryJa: 'サンプルとしてシベリア鉄道ルートとヴォルガ川ルートのデータを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"Trans-Siberian", segments:[2,3]}, {name:"Volga", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Trans-Siberian-Volga'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Trans-Siberian は5、Volga は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'ru_js_b01', languageId: 'javascript', world: 'debug', title: 'Russian phone-number formatting', titleJa: 'ロシアの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてロシアの電話番号は10桁で構成されるものとして扱います。', prompt: '10桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "9161234567";\nif (digits.length === 9) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '10桁の番号なのに length === 9 と判定している', fix: 'length === 10 に修正してから slice する', impact: '10桁の番号を正しく整形できる', why: 'サンプル digits は10文字だからです。', correctedCode: 'const digits = "9161234567";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が9のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'ru_js_b02', languageId: 'javascript', world: 'debug', title: 'Moscow and Saint Petersburg labels', titleJa: 'モスクワとサンクトペテルブルク', category: 'geography-city', objective: 'object', source: SRC.twoCities, summaryJa: 'モスクワとサンクトペテルブルクはロシアの主要都市です。', prompt: 'major が true の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Moscow", major: true }, { name: "Saint Petersburg", major: true }];\nconst labels = cities.filter(city => city.large === true).map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには major があるのに large を参照している', fix: 'city.major === true に修正する', impact: 'Moscow と Saint Petersburg の両方を正しく選べる', why: '存在しない large は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Moscow", major: true }, { name: "Saint Petersburg", major: true }];\nconst labels = cities.filter(city => city.major === true).map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'ru_js_b03', languageId: 'javascript', world: 'debug', title: 'Theatre record lookup', titleJa: '劇場レコードの参照', category: 'culture', objective: 'object', source: SRC.theatreLookup, summaryJa: 'サンプルの劇場データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Theatre" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Theatre" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_RU_javascript_01', languageId: 'javascript', world: 'debug', title: 'Solovetsky Islands', titleJa: 'ソロヴェツキー諸島', category: 'world-heritage-history', objective: 'object', source: SRC.solovetsky, summaryJa: 'ソロヴェツキー諸島の文化・歴史複合体は世界遺産です。', prompt: '諸島のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Solovetsky Islands", region: "Arkhangelsk", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.region);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.region ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Solovetsky Islands", region: "Arkhangelsk", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.region ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
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
  { id: 'ru_java_e01', languageId: 'java', world: 'execute', title: 'Dmitri Mendeleev', titleJa: 'ドミトリ・メンデレーエフ', category: 'science-history', objective: 'strings', source: SRC.mendeleev, summaryJa: 'ドミトリ・メンデレーエフは周期表と結びつく科学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Mendeleev";\n    if (scientist.equals("Mendeleev")) System.out.println("periodic table");\n    else System.out.println("other");\n  }\n}', options: ['periodic table', 'other', 'Mendeleev', 'true'], answer: 'periodic table', expectedOutput: 'periodic table', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので periodic table が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'ru_java_e02', languageId: 'java', world: 'execute', title: 'Russian time-zone sample', titleJa: 'ロシアの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'ロシアではモスクワ時間（MSK）などの時間帯が使われます。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 3));\n  }\n}', options: ['13', '10', '3', '30'], answer: '13', expectedOutput: '13', hint: '10 + 3 を計算します。', explanation: 'UTC 10時に3を足すので13です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'ru_java_e03', languageId: 'java', world: 'execute', title: 'Trans-Siberian Railway labels', titleJa: 'シベリア鉄道のラベル', category: 'transport', objective: 'collections', source: SRC.transSiberian, summaryJa: 'シベリア鉄道はロシア横断の旅と結びつきます。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Trans-Siberian");\n    labels.add("route");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Trans-Siberian>route', 'route>Trans-Siberian', 'Trans-Siberian>', 'route'], answer: 'Trans-Siberian>route', expectedOutput: 'Trans-Siberian>route', hint: '追加した順に result へ入ります。', explanation: 'Trans-Siberian、route の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'ru_java_e04', languageId: 'java', world: 'execute', title: 'Russian script label sample', titleJa: 'ロシアの文字体系ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.scriptSample, summaryJa: 'サンプルとしてロシアの文字体系に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Cyrillic extends ScriptType {\n  @Override\n  String label() { return "Cyrillic"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Cyrillic();\n    System.out.println(type.label());\n  }\n}', options: ['Cyrillic', 'script', 'ScriptType', 'error'], answer: 'Cyrillic', expectedOutput: 'Cyrillic', hint: '実体は Cyrillic です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_RU_java_01', languageId: 'java', world: 'execute', title: 'Russian city-region records', titleJa: 'ロシアの都市・地域レコード', category: 'geography', objective: 'collections', source: SRC.cityRegion, summaryJa: 'サンプルとして Moscow–Central、Saint Petersburg–Northwest などの都市・地域データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市の地域を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("Moscow", 9);\n    cities.put("Kazan", 1);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Moscow', 'Kazan', 'MoscowKazan', '9'], answer: 'Moscow', expectedOutput: 'Moscow', hint: 'population が4以上の city だけです。', explanation: 'Moscow の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_RU_java_02', languageId: 'java', world: 'execute', title: 'Arctic research station sample records', titleJa: '北極研究拠点のサンプルレコード', category: 'science-geography', objective: 'collections', source: SRC.arcticResearch, summaryJa: 'サンプルとして北極圏の研究拠点データを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Arctic Station A", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Arctic Station A:active', 'Closed:active', 'Arctic Station A', 'active:Arctic Station A'], answer: 'Arctic Station A:active', expectedOutput: 'Arctic Station A:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Arctic Station A だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'ru_java_b01', languageId: 'java', world: 'debug', title: 'Russian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.cityAbbrev, summaryJa: 'ロシアの都市コードは MOW、SPB、KZN、NSK などです。', prompt: '都市コード SPB を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SPB");\n    if (code == "SPB") System.out.println("Saint Petersburg");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("SPB") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SPB");\n    if (code.equals("SPB")) System.out.println("Saint Petersburg");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'ru_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero archive code formatting', titleJa: '先頭ゼロ付きアーカイブコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.stationCode, summaryJa: 'アーカイブコード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプルアーカイブコード 0005 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 5;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0005"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0005";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'ru_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.museumVisitor, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_RU_java_01', languageId: 'java', world: 'debug', title: 'Bolgar Historical and Archaeological Complex', titleJa: 'ボルガル歴史考古遺跡群', category: 'world-heritage', objective: 'collections', source: SRC.bolgar, summaryJa: 'ボルガル歴史考古遺跡群は世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Bolgar", "900");\n    String ageText = ages.get("Other Site");\n    int age = Integer.parseInt(ageText);\n    System.out.println(age);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Bolgar", "900");\n    String ageText = ages.get("Bolgar");\n    try {\n      if (ageText != null) System.out.println(Integer.parseInt(ageText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
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
