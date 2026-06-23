const SRC = {
  berlin: 'https://www.britannica.com/place/Berlin',
  frgFounding: 'https://www.britannica.com/place/Germany/The-Federal-Republic-of-Germany',
  rhine: 'https://www.britannica.com/place/Rhine-River',
  cities: 'https://www.britannica.com/place/Germany',
  cologneCathedral: 'https://whc.unesco.org/en/list/292',
  aachenCathedral: 'https://whc.unesco.org/en/list/3',
  upperMiddleRhine: 'https://whc.unesco.org/en/list/1066',
  bauhaus: 'https://whc.unesco.org/en/list/729',
  munich: 'https://www.britannica.com/place/Munich',
  brandenburgGate: 'https://www.britannica.com/topic/Brandenburg-Gate',
  railRoute: 'https://www.britannica.com/topic/Deutsche-Bahn-AG',
  blackForest: 'https://www.britannica.com/place/Black-Forest',
  museumIsland: 'https://whc.unesco.org/en/list/896',
  institutions: 'https://www.britannica.com/topic/Goethe-Institut',
  euro: 'https://www.britannica.com/topic/euro',
  stationCode: 'https://www.britannica.com/place/Germany',
  cityAbbrev: 'https://www.britannica.com/place/Germany',
  messelPit: 'https://whc.unesco.org/en/list/720',
  reichstag: 'https://www.britannica.com/topic/Reichstag-building-Berlin-Germany',
  hamburg: 'https://www.britannica.com/place/Hamburg',
  flag: 'https://www.britannica.com/topic/flag-of-Germany',
  transport: 'https://www.britannica.com/place/Germany',
  neuschwanstein: 'https://www.britannica.com/topic/Neuschwanstein-Castle',
  lubeck: 'https://whc.unesco.org/en/list/272',
  wurzburg: 'https://whc.unesco.org/en/list/169',
  scienceFigures: 'https://www.nobelprize.org/prizes/physics/1918/planck/biographical/',
  maxPlanck: 'https://www.nobelprize.org/prizes/physics/1918/planck/biographical/',
  deutschesMuseum: 'https://www.britannica.com/topic/Deutsches-Museum',
  frankfurt: 'https://www.britannica.com/place/Frankfurt-am-Main',
  waddenSea: 'https://whc.unesco.org/en/list/1314',
  routeData: 'https://www.britannica.com/place/Germany',
  phone: 'https://www.britannica.com/place/Germany',
  twoCities: 'https://www.britannica.com/place/Munich',
  museumLookup: 'https://www.britannica.com/topic/Deutsches-Museum',
  wartburg: 'https://whc.unesco.org/en/list/897',
  tiananmenStyleGate: 'https://www.britannica.com/topic/Brandenburg-Gate',
  reunification: 'https://www.britannica.com/event/German-reunification',
  zhangHengStylePlanck: 'https://www.nobelprize.org/prizes/physics/1918/planck/biographical/',
  regions: 'https://www.britannica.com/place/Germany',
  speyerCathedral: 'https://whc.unesco.org/en/list/168',
  maulbronn: 'https://whc.unesco.org/en/list/546',
  swabianJura: 'https://whc.unesco.org/en/list/1527',
  gutenberg: 'https://www.britannica.com/biography/Johannes-Gutenberg',
  timezone: 'https://www.timeanddate.com/time/zones/cet',
  autobahn: 'https://www.britannica.com/topic/Autobahn',
  scriptSample: 'https://www.britannica.com/topic/German-language',
  cityState: 'https://www.britannica.com/place/Germany',
  researchInstitute: 'https://www.britannica.com/place/Germany',
  museumVisitor: 'https://www.britannica.com/topic/Deutsches-Museum',
  wiesChurch: 'https://whc.unesco.org/en/list/271',
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
  return `de:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、ドイツの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'DE',
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
    countryId: 'DE',
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
  { id: 'de_py_d01', languageId: 'python', world: 'decode', title: 'Berlin as capital', titleJa: 'ベルリン（首都）', category: 'geography-capital', objective: 'strings', source: SRC.berlin, summaryJa: 'ベルリンはドイツの首都です。', prompt: 'ベルリンはドイツの首都です。下のコードを実行すると Germany\'s capital is Berlin. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("Germany\'s capital is " + capital + ".")', answer: '"Berlin"', expectedOutput: "Germany's capital is Berlin.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"Berlin" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'de_py_d02', languageId: 'python', world: 'decode', title: 'Federal Republic of Germany founding year', titleJa: 'ドイツ連邦共和国の建国年', category: 'history', objective: 'integers', source: SRC.frgFounding, summaryJa: 'ドイツ連邦共和国は1949年に建国されました。', prompt: '年が1949のとき Founded:1949 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Founded:{year}"\nprint(label)', answer: '1949', expectedOutput: 'Founded:1949', hint: '整数は引用符なしで書きます。', explanation: 'year に1949を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'de_py_d03', languageId: 'python', world: 'decode', title: 'Rhine River label', titleJa: 'ライン川', category: 'geography-nature', objective: 'condition', source: SRC.rhine, summaryJa: 'ライン川はドイツと結びつく主要な河川です。', prompt: '河川名が Rhine のとき river と表示されるよう、if の条件を完成させてください。', code: 'river = "Rhine"\nif ___BLANK___:\n    print("river")\nelse:\n    print("other")', answer: 'river == "Rhine"', expectedOutput: 'river', hint: '文字列が完全に一致するか == で比較します。', explanation: 'river の値と対象名を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'de_py_d04', languageId: 'python', world: 'decode', title: 'German city sample labels', titleJa: 'ドイツの都市サンプルラベル', category: 'geography', objective: 'list', source: SRC.cities, summaryJa: 'サンプルとして Berlin、Munich、Hamburg などの都市ラベルを扱います。', prompt: 'リストから Hamburg を取り出して表示するよう、添字を埋めてください。', code: 'cities = ["Berlin", "Munich", "Hamburg"]\nprint(cities[___BLANK___])', answer: '2', expectedOutput: 'Hamburg', hint: 'Python のリストは0番目から数えます。', explanation: 'Hamburg はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'de_py_d05', languageId: 'python', world: 'decode', title: 'Cologne Cathedral lookup', titleJa: 'ケルン大聖堂', category: 'world-heritage', objective: 'dictionary', source: SRC.cologneCathedral, summaryJa: 'ケルン大聖堂はドイツにある世界遺産です。', prompt: '辞書から city を取り出して Cologne と表示されるよう、キーを埋めてください。', code: 'site = {"name": "Cologne Cathedral", "city": "Cologne"}\nprint(site[___BLANK___])', answer: '"city"', expectedOutput: 'Cologne', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"city" キーの値が Cologne です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_DE_python_01', languageId: 'python', world: 'decode', title: 'Aachen Cathedral', titleJa: 'アーヘン大聖堂', category: 'world-heritage', objective: 'function', source: SRC.aachenCathedral, summaryJa: 'アーヘン大聖堂はドイツにある世界遺産です。', prompt: '関数と条件を使い、city が Aachen のときだけ Aachen Cathedral:Aachen と表示するよう空欄を埋めてください。', code: 'name = "Aachen Cathedral"\ncity = "Aachen"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Aachen"', expectedOutput: 'Aachen Cathedral:Aachen', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Aachen と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_DE_python_02', languageId: 'python', world: 'decode', title: 'Upper Middle Rhine Valley', titleJa: 'ライン川上中流域', category: 'world-heritage', objective: 'loop', source: SRC.upperMiddleRhine, summaryJa: 'ライン川上中流域はドイツにある世界遺産です。', prompt: 'river が Rhine の渓谷名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'valleys = [\n    {"name": "Upper Middle Rhine Valley", "river": "Rhine"},\n    {"name": "Other", "river": "Elbe"}\n]\nfor valley in valleys:\n    if ___BLANK___:\n        print(valley["name"])', answer: 'valley["river"] == "Rhine"', expectedOutput: 'Upper Middle Rhine Valley', hint: '各辞書の river キーを比較します。', explanation: 'Upper Middle Rhine Valley の river だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_DE_python_03', languageId: 'python', world: 'decode', title: 'Bauhaus and its Sites in Weimar, Dessau and Bernau', titleJa: 'バウハウスとその関連遺産群（ヴァイマール、デッサウ、ベルナウ）', category: 'world-heritage', objective: 'dictionary', source: SRC.bauhaus, summaryJa: 'バウハウス関連遺産群はヴァイマール、デッサウ、ベルナウにある世界遺産です。', prompt: '辞書と関数を使い、Bauhaus:Dessau と表示するキーを埋めてください。', code: 'site = {"name": "Bauhaus", "city": "Dessau"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"city"', expectedOutput: 'Bauhaus:Dessau', hint: 'Dessau を取り出すキーを選びます。', explanation: '"city" キーの値が Dessau です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'de_py_e01', languageId: 'python', world: 'execute', title: 'Munich', titleJa: 'ミュンヘン', category: 'geography-city', objective: 'function', source: SRC.munich, summaryJa: 'ミュンヘンはバイエルン州の主要都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, state):\n    return f"{name}:{state}"\nprint(city_label("Munich", "Bavaria"))', options: ['Munich:Bavaria', 'Bavaria:Munich', 'Munich', 'Error'], answer: 'Munich:Bavaria', expectedOutput: 'Munich:Bavaria', hint: 'return の f-string で name と state の順番を見ます。', explanation: 'name が先、state が後ろなので Munich:Bavaria です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'de_py_e02', languageId: 'python', world: 'execute', title: 'Brandenburg Gate', titleJa: 'ブランデンブルク門', category: 'landmark', objective: 'dictionary', source: SRC.brandenburgGate, summaryJa: 'ブランデンブルク門はベルリンにあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'landmark = {"name": "Brandenburg Gate", "city": "Berlin"}\nprint(landmark["city"])', options: ['Berlin', 'Brandenburg Gate', 'Munich', 'city'], answer: 'Berlin', expectedOutput: 'Berlin', hint: '"city" キーの値を見ます。', explanation: 'landmark["city"] は Berlin を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'de_py_e03', languageId: 'python', world: 'execute', title: 'German rail route sample stops', titleJa: 'ドイツの鉄道路線サンプル停車地', category: 'transport', objective: 'loop', source: SRC.railRoute, summaryJa: 'サンプルとして Berlin、Leipzig などの鉄道停車地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["Berlin", "Leipzig"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['Berlin|Leipzig', 'Leipzig|Berlin', 'Berlin|', 'Leipzig'], answer: 'Berlin|Leipzig', expectedOutput: 'Berlin|Leipzig', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'Berlin、Leipzig の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'de_py_e04', languageId: 'python', world: 'execute', title: 'Black Forest region records', titleJa: 'シュヴァルツヴァルト（黒い森）の地域レコード', category: 'geography', objective: 'loop', source: SRC.blackForest, summaryJa: 'シュヴァルツヴァルトはドイツ南西部の地域です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Black Forest", "southwest": True},\n    {"name": "Other", "southwest": False}\n]\nselected = [r["name"] for r in records if r["southwest"]]\nprint(selected[0])', options: ['Black Forest', 'Other', 'True', 'False'], answer: 'Black Forest', expectedOutput: 'Black Forest', hint: 'southwest が True の辞書だけ残します。', explanation: 'Black Forest の southwest だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_DE_python_01', languageId: 'python', world: 'execute', title: 'Museum Island, Berlin records', titleJa: 'ベルリンの博物館島レコード', category: 'world-heritage', objective: 'loop', source: SRC.museumIsland, summaryJa: 'ベルリンの博物館島は世界遺産です。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "kind": "museum", "period": 200},\n    {"name": "Other", "kind": "park", "period": 100},\n    {"name": "Site B", "kind": "museum", "period": 50}\n]\nselected = sorted([r for r in records if r["kind"] == "museum"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと period の昇順です。', explanation: 'museum は Site B(50) と Site A(200) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_DE_python_02', languageId: 'python', world: 'execute', title: 'German cultural institutions dataset', titleJa: 'ドイツの文化機関データセット', category: 'culture', objective: 'dictionary', source: SRC.institutions, summaryJa: 'サンプルとして Berlin Philharmonic、Deutsches Museum、Goethe-Institut、Bauhaus Dessau を扱います。', prompt: '辞書とリストから berlin が True の件数を集計した結果を選んでください。', code: 'institutions = [\n    {"name": "Berlin Philharmonic", "berlin": True},\n    {"name": "Goethe-Institut", "berlin": True},\n    {"name": "Deutsches Museum", "berlin": False},\n    {"name": "Bauhaus Dessau", "berlin": False}\n]\ncount = sum(1 for i in institutions if i["berlin"])\nprint(count)', options: ['2', '4', '1', 'Berlin Philharmonic'], answer: '2', expectedOutput: '2', hint: 'berlin が True の辞書だけ数えます。', explanation: 'Berlin Philharmonic、Goethe-Institut の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'de_py_b01', languageId: 'python', world: 'debug', title: 'Euro formatting for Germany', titleJa: 'ドイツのユーロ表示', category: 'finance', objective: 'strings', source: SRC.euro, summaryJa: 'ユーロはドイツの通貨です。', prompt: '金額を 10.50 EUR と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " EUR")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 EUR と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} EUR")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'de_py_b02', languageId: 'python', world: 'debug', title: 'German station-code style labels', titleJa: 'ドイツの駅コード風の表示', category: 'administration', objective: 'strings', source: SRC.stationCode, summaryJa: 'サンプルの駅コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある駅コードを表示するコードです。数値保存の不具合を直します。', code: 'station_code = 12\nprint(station_code)', cause: '駅コードを数値として保存すると先頭ゼロを保持できない', fix: '駅コードを最初から文字列として保存する', impact: '先頭ゼロを含む駅コードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'station_code = "0012"\nprint(station_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。' },
  { id: 'de_py_b03', languageId: 'python', world: 'debug', title: 'German city abbreviation lookup', titleJa: '都市略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.cityAbbrev, summaryJa: 'サンプルとして BER、MUC、HAM、CGN、FRA などの都市略号を扱います。', prompt: '略号 HAM から都市名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"BER": "Berlin", "MUC": "Munich"}\ncode = "HAM"\nprint(abbreviations[code])', cause: '辞書に HAM のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"BER": "Berlin", "MUC": "Munich", "HAM": "Hamburg"}\ncode = "HAM"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'HAM というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_DE_python_01', languageId: 'python', world: 'debug', title: 'Messel Pit Fossil Site', titleJa: 'メッセル採掘場化石遺跡', category: 'world-heritage-science', objective: 'dictionary', source: SRC.messelPit, summaryJa: 'メッセル採掘場化石遺跡はドイツにある世界遺産です。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Messel Pit", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["sample_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'sample_count がない辞書でも record["sample_count"] を直接読んでいる', fix: 'record.get("sample_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Messel Pit", "sample_count": "150"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("sample_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に sample_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'de_js_d01', languageId: 'javascript', world: 'decode', title: 'Reichstag building in Berlin', titleJa: '国会議事堂（ベルリン）', category: 'architecture-history', objective: 'object', source: SRC.reichstag, summaryJa: '国会議事堂（ライヒスターク）はベルリンにあります。', prompt: 'オブジェクトから city を取り出して Berlin と表示されるよう、空欄を埋めてください。', code: 'const building = { name: "Reichstag", city: "Berlin" };\nconsole.log(building.___BLANK___);', answer: 'city', expectedOutput: 'Berlin', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'building.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'de_js_d02', languageId: 'javascript', world: 'decode', title: 'Hamburg port label', titleJa: 'ハンブルクの港', category: 'geography', objective: 'strings', source: SRC.hamburg, summaryJa: 'ハンブルクはドイツ北部の主要な港湾都市です。', prompt: 'テンプレートリテラルで Hamburg:port city と表示されるよう空欄を埋めてください。', code: 'const city = "Hamburg";\nconst kind = ___BLANK___;\nconsole.log(`${city}:${kind}`);', answer: '"port city"', expectedOutput: 'Hamburg:port city', hint: 'kind に入る文字列を引用符付きで書きます。', explanation: '"port city" を入れると ${kind} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'de_js_d03', languageId: 'javascript', world: 'decode', title: 'German flag colors', titleJa: 'ドイツ国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'ドイツ国旗は黒・赤・金の3色で構成されています。', prompt: '配列から gold を取り出す添字を埋めてください。', code: 'const colors = ["black", "red", "gold"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'gold', hint: '配列は0番目から数えます。', explanation: 'gold は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'de_js_d04', languageId: 'javascript', world: 'decode', title: 'German transport mode labels', titleJa: 'ドイツの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'ドイツには鉄道、メトロ、河川、アウトバーンなどの交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'de_js_d05', languageId: 'javascript', world: 'decode', title: 'Neuschwanstein Castle', titleJa: 'ノイシュヴァンシュタイン城', category: 'architecture', objective: 'loop', source: SRC.neuschwanstein, summaryJa: 'ノイシュヴァンシュタイン城はバイエルン州にあります。', prompt: 'for...of で state が Bavaria の城だけを表示するよう、条件の空欄を埋めてください。', code: 'const castles = [\n  { name: "Neuschwanstein", state: "Bavaria" },\n  { name: "Other", state: "Hesse" }\n];\nfor (const castle of castles) {\n  if (___BLANK___) console.log(castle.name);\n}', answer: 'castle.state === "Bavaria"', expectedOutput: 'Neuschwanstein', hint: '各 castle の state を比較します。', explanation: 'Neuschwanstein の state だけが Bavaria なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_DE_javascript_01', languageId: 'javascript', world: 'decode', title: 'Hanseatic City of Lübeck', titleJa: 'ハンザ都市リューベック', category: 'world-heritage', objective: 'array', source: SRC.lubeck, summaryJa: 'ハンザ都市リューベックは世界遺産です。', prompt: 'array methods で hanseatic を含む名前を取り出してください。', code: 'const cities = ["castle", "hanseatic-lubeck", "tower"];\nconst result = cities.filter(name => name.includes(___BLANK___))[0];\nconsole.log(result);', answer: '"hanseatic"', expectedOutput: 'hanseatic-lubeck', hint: 'includes に探したい部分文字列を渡します。', explanation: '"hanseatic" を含む要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_DE_javascript_02', languageId: 'javascript', world: 'decode', title: 'Würzburg Residence', titleJa: 'ヴュルツブルク司教宮殿', category: 'world-heritage', objective: 'object', source: SRC.wurzburg, summaryJa: 'ヴュルツブルク司教宮殿は世界遺産です。', prompt: 'find で Würzburg の record を探す条件を埋めてください。', code: 'const records = [{name:"Cologne", kind:"cathedral"}, {name:"Würzburg", kind:"residence"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.kind);', answer: '"Würzburg"', expectedOutput: 'residence', hint: 'name と一致する文字列を書きます。', explanation: 'Würzburg の record が見つかり、kind が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_DE_javascript_03', languageId: 'javascript', world: 'decode', title: 'German science and design figures', titleJa: 'ドイツの科学・デザイン分野のサンプル', category: 'science-culture', objective: 'class', source: SRC.scienceFigures, summaryJa: 'サンプルとして Max Planck、Johannes Gutenberg、Walter Gropius を扱います。', prompt: 'class のインスタンスを map して Max Planck:physics と表示してください。', code: 'class Figure {\n  constructor(name, field) { this.name = name; this.field = field; }\n}\nconst items = [new Figure("Max Planck", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.field}`).join(","));', answer: '"physics"', expectedOutput: 'Max Planck:physics', hint: 'constructor の field に入る文字列です。', explanation: 'field に physics が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'de_js_e01', languageId: 'javascript', world: 'execute', title: 'Max Planck', titleJa: 'マックス・プランク', category: 'science-history', objective: 'array', source: SRC.maxPlanck, summaryJa: 'マックス・プランクは1918年にノーベル物理学賞を受賞しました。', prompt: 'map と join の出力を選んでください。', code: 'const names = ["planck"];\nconst label = names.map(n => n.toUpperCase()).join("-");\nconsole.log(label);', options: ['PLANCK', 'planck', 'P-L', 'Planck'], answer: 'PLANCK', expectedOutput: 'PLANCK', hint: '各要素を大文字化します。', explanation: 'planck が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'de_js_e02', languageId: 'javascript', world: 'execute', title: 'Elbe River sample segments', titleJa: 'エルベ川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.rhine, summaryJa: 'エルベ川はドイツと結びつく主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 40, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['90', '70', '30', '304020'], answer: '90', expectedOutput: '90', hint: '数値を左から足していきます。', explanation: '30 + 40 + 20 = 90 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'de_js_e03', languageId: 'javascript', world: 'execute', title: 'Deutsches Museum', titleJa: 'ドイツ博物館', category: 'museum', objective: 'object', source: SRC.deutschesMuseum, summaryJa: 'ドイツ博物館はミュンヘンにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const museum = { city: "Munich", collections: ["technology", "science"] };\nlet result = museum.city;\nfor (const item of museum.collections) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Munich:technology:science', 'technology:science:Munich', 'Munich', 'science:technology'], answer: 'Munich:technology:science', expectedOutput: 'Munich:technology:science', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに technology、science が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'de_js_e04', languageId: 'javascript', world: 'execute', title: 'Frankfurt transport hub sample', titleJa: 'フランクフルトの交通拠点サンプル', category: 'transport', objective: 'function', source: SRC.frankfurt, summaryJa: 'フランクフルト・アム・マインはドイツの主要な金融・交通都市です。', prompt: '関数と条件の戻り値を選んでください。', code: 'function hubLabel(city) {\n  return city === "Frankfurt" ? "transport hub" : "other";\n}\nconsole.log(hubLabel("Frankfurt"));', options: ['transport hub', 'other', 'Frankfurt', 'true'], answer: 'transport hub', expectedOutput: 'transport hub', hint: '"Frankfurt" === "Frankfurt" の判定を見ます。', explanation: '条件が true なので "transport hub" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_DE_javascript_01', languageId: 'javascript', world: 'execute', title: 'Wadden Sea', titleJa: 'ワッデン海', category: 'world-heritage-nature', objective: 'array', source: SRC.waddenSea, summaryJa: 'ワッデン海はドイツなど複数国にまたがる世界遺産です。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const sites = [\n  { name: "Site A", coastal: true, area: 5 },\n  { name: "Other", coastal: false, area: 3 },\n  { name: "Site B", coastal: true, area: 2 }\n];\nconst names = sites.filter(s => s.coastal).map(s => s.name).sort();\nconsole.log(names.join(">"));', options: ['Site A>Site B', 'Site B>Site A', 'Other>Site A', 'Other>Site B>Site A'], answer: 'Site A>Site B', expectedOutput: 'Site A>Site B', hint: 'coastal で絞ったあと、名前をアルファベット順にします。', explanation: 'Site A と Site B が残り、sort で Site A が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_DE_javascript_02', languageId: 'javascript', world: 'execute', title: 'German rail and river-route sample data', titleJa: 'ドイツの鉄道・河川ルートサンプルデータ', category: 'transport', objective: 'object', source: SRC.routeData, summaryJa: 'サンプルとして Berlin–Munich 鉄道とライン川ルートのデータを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const routes = [{name:"Berlin-Munich", segments:[2,3]}, {name:"Rhine", segments:[5]}];\nconst total = routes.reduce((sum, route) => sum + route.segments.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Berlin-Munich-Rhine'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Berlin-Munich は5、Rhine は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'de_js_b01', languageId: 'javascript', world: 'debug', title: 'German phone-number formatting', titleJa: 'ドイツの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてドイツの携帯電話番号は11桁で構成されるものとして扱います。', prompt: '11桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "01512345678";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,4)} ${digits.slice(4)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく整形できる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "01512345678";\nif (digits.length === 11) {\n  console.log(`${digits.slice(0,4)} ${digits.slice(4)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が10のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'de_js_b02', languageId: 'javascript', world: 'debug', title: 'Berlin and Munich labels', titleJa: 'ベルリンとミュンヘン', category: 'geography-city', objective: 'object', source: SRC.twoCities, summaryJa: 'ベルリンとミュンヘンはドイツの主要都市です。', prompt: 'major が true の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Berlin", major: true }, { name: "Munich", major: true }];\nconst labels = cities.filter(city => city.large === true).map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには major があるのに large を参照している', fix: 'city.major === true に修正する', impact: 'Berlin と Munich の両方を正しく選べる', why: '存在しない large は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Berlin", major: true }, { name: "Munich", major: true }];\nconst labels = cities.filter(city => city.major === true).map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'de_js_b03', languageId: 'javascript', world: 'debug', title: 'Museum record lookup', titleJa: '博物館レコードの参照', category: 'museum', objective: 'object', source: SRC.museumLookup, summaryJa: 'サンプルの博物館データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Museum" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Museum" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_DE_javascript_01', languageId: 'javascript', world: 'debug', title: 'Wartburg Castle', titleJa: 'ヴァルトブルク城', category: 'world-heritage-history', objective: 'object', source: SRC.wartburg, summaryJa: 'ヴァルトブルク城はドイツにある世界遺産です。', prompt: '城のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Wartburg Castle", state: "Thuringia", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.state);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.state ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Wartburg Castle", state: "Thuringia", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.state ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'de_java_d01', languageId: 'java', world: 'decode', title: 'Brandenburg Gate in Berlin', titleJa: 'ブランデンブルク門（ベルリン）', category: 'history-landmark', objective: 'strings', source: SRC.brandenburgGate, summaryJa: 'ブランデンブルク門はベルリンにあります。', prompt: 'Gate:Berlin と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String site = "Gate";\n    String city = ___BLANK___;\n    System.out.println(site + ":" + city);\n  }\n}', answer: '"Berlin"', expectedOutput: 'Gate:Berlin', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Berlin" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'de_java_d02', languageId: 'java', world: 'decode', title: 'German reunification year', titleJa: 'ドイツ再統一の年', category: 'history', objective: 'numbers', source: SRC.reunification, summaryJa: 'ドイツ再統一は1990年に行われました。', prompt: 'Reunification:1990 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Reunification:" + year;\n    System.out.println(label);\n  }\n}', answer: '1990', expectedOutput: 'Reunification:1990', hint: 'int なので引用符なしの数値です。', explanation: 'year に1990を入れると文字列連結で Reunification:1990 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'de_java_d03', languageId: 'java', world: 'decode', title: 'Max Planck Nobel year', titleJa: 'マックス・プランクのノーベル賞受賞年', category: 'science-history', objective: 'condition', source: SRC.maxPlanck, summaryJa: 'マックス・プランクは1918年にノーベル物理学賞を受賞しました。', prompt: 'year が1918のとき NobelPhysics と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1918;\n    if (___BLANK___) {\n      System.out.println("NobelPhysics");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1918', expectedOutput: 'NobelPhysics', hint: '値が等しいかは == で比較します。', explanation: 'year == 1918 が true になるため NobelPhysics が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'de_java_d04', languageId: 'java', world: 'decode', title: 'German travel mode labels', titleJa: 'ドイツの移動手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'ドイツでは鉄道・メトロ・河川・アウトバーンなど複数の移動手段が使われています。', prompt: 'mode が river のとき River transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "river";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("River transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"river"', expectedOutput: 'River transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "river" が一致し、River transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'de_java_d05', languageId: 'java', world: 'decode', title: 'German regions sample', titleJa: 'ドイツの地域区分サンプル', category: 'geography', objective: 'array', source: SRC.regions, summaryJa: 'サンプルとして Bavaria、Saxony、North Rhine-Westphalia などの地域ラベルを扱います。', prompt: 'regions 配列を拡張 for で読み、Saxony だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"Bavaria", "Saxony", "Hesse"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Saxony")', expectedOutput: 'Saxony', hint: 'String の内容比較は equals です。', explanation: 'region が Saxony のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_DE_java_01', languageId: 'java', world: 'decode', title: 'Speyer Cathedral', titleJa: 'シュパイアー大聖堂', category: 'world-heritage', objective: 'method', source: SRC.speyerCathedral, summaryJa: 'シュパイアー大聖堂はドイツにある世界遺産です。', prompt: 'category が cathedral のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("cathedral")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"cathedral"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"cathedral" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_DE_java_02', languageId: 'java', world: 'decode', title: 'Maulbronn Monastery Complex', titleJa: 'マウルブロン修道院', category: 'world-heritage', objective: 'collections', source: SRC.maulbronn, summaryJa: 'マウルブロン修道院はドイツにある世界遺産です。', prompt: 'ArrayList から monastery の record だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Site {\n  String name;\n  boolean monastery;\n  Site(String n, boolean m) { name = n; monastery = m; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Site> sites = new ArrayList<>();\n    sites.add(new Site("Maulbronn", true));\n    sites.add(new Site("Other", false));\n    for (Site s : sites) {\n      if (___BLANK___) System.out.println(s.name);\n    }\n  }\n}', answer: 's.monastery', expectedOutput: 'Maulbronn', hint: 'monastery フィールドが true の record だけです。', explanation: 'Maulbronn の monastery だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_DE_java_03', languageId: 'java', world: 'decode', title: 'Caves and Ice Age Art in the Swabian Jura', titleJa: 'シュヴァーベン・アルプの洞窟と氷河期芸術', category: 'world-heritage-science', objective: 'class', source: SRC.swabianJura, summaryJa: 'シュヴァーベン・アルプの洞窟と氷河期芸術はドイツにある世界遺産です。', prompt: 'HashMap から Cave の地域を取り出し Cave:SwabianJura と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String region;\n  Site(String n, String r) { name = n; region = r; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("Cave", new Site("Cave", "SwabianJura"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.region);\n  }\n}', answer: '"Cave"', expectedOutput: 'Cave:SwabianJura', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Cave キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'de_java_e01', languageId: 'java', world: 'execute', title: 'Johannes Gutenberg', titleJa: 'ヨハネス・グーテンベルク', category: 'science-history', objective: 'strings', source: SRC.gutenberg, summaryJa: 'ヨハネス・グーテンベルクはヨーロッパの活版印刷術と結びつく人物です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String inventor = "Gutenberg";\n    if (inventor.equals("Gutenberg")) System.out.println("printing");\n    else System.out.println("other");\n  }\n}', options: ['printing', 'other', 'Gutenberg', 'true'], answer: 'printing', expectedOutput: 'printing', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので printing が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'de_java_e02', languageId: 'java', world: 'execute', title: 'German time-zone sample', titleJa: 'ドイツの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'ドイツでは中央ヨーロッパ時間（CET）が使われます。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 1));\n  }\n}', options: ['11', '10', '1', '101'], answer: '11', expectedOutput: '11', hint: '10 + 1 を計算します。', explanation: 'UTC 10時に1を足すので11です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'de_java_e03', languageId: 'java', world: 'execute', title: 'Autobahn sample labels', titleJa: 'アウトバーンのサンプルラベル', category: 'transport', objective: 'collections', source: SRC.autobahn, summaryJa: 'アウトバーンはドイツの高速道路網のサンプルラベルとして扱います。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("A1");\n    labels.add("A2");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['A1>A2', 'A2>A1', 'A1>', 'A2'], answer: 'A1>A2', expectedOutput: 'A1>A2', hint: '追加した順に result へ入ります。', explanation: 'A1、A2 の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'de_java_e04', languageId: 'java', world: 'execute', title: 'German language label sample', titleJa: 'ドイツの言語ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.scriptSample, summaryJa: 'サンプルとしてドイツの言語・方言に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class LanguageType {\n  String label() { return "language"; }\n}\nclass Bavarian extends LanguageType {\n  @Override\n  String label() { return "Bavarian"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    LanguageType type = new Bavarian();\n    System.out.println(type.label());\n  }\n}', options: ['Bavarian', 'language', 'LanguageType', 'error'], answer: 'Bavarian', expectedOutput: 'Bavarian', hint: '実体は Bavarian です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_DE_java_01', languageId: 'java', world: 'execute', title: 'German city-state records', titleJa: 'ドイツの都市・州レコード', category: 'geography', objective: 'collections', source: SRC.cityState, summaryJa: 'サンプルとして Berlin–Berlin、Munich–Bavaria などの都市・州データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市の州を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("Berlin", 9);\n    cities.put("Cologne", 1);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Berlin', 'Cologne', 'BerlinCologne', '9'], answer: 'Berlin', expectedOutput: 'Berlin', hint: 'population が4以上の city だけです。', explanation: 'Berlin の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_DE_java_02', languageId: 'java', world: 'execute', title: 'German research institute sample records', titleJa: 'ドイツの研究機関サンプルレコード', category: 'science-geography', objective: 'collections', source: SRC.researchInstitute, summaryJa: 'サンプルとしてドイツの研究機関データを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Institute {\n  String name;\n  boolean active;\n  Institute(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Institute> institutes = new ArrayList<>();\n    institutes.add(new Institute("Institute A", true));\n    institutes.add(new Institute("Closed", false));\n    for (Institute institute : institutes) if (institute.active) System.out.println(institute.label());\n  }\n}', options: ['Institute A:active', 'Closed:active', 'Institute A', 'active:Institute A'], answer: 'Institute A:active', expectedOutput: 'Institute A:active', hint: 'active が true の Institute だけ label() を呼びます。', explanation: 'Institute A だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'de_java_b01', languageId: 'java', world: 'debug', title: 'German city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.cityAbbrev, summaryJa: 'ドイツの都市コードは BER、MUC、HAM、CGN、FRA などです。', prompt: '都市コード CGN を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("CGN");\n    if (code == "CGN") System.out.println("Cologne");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("CGN") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("CGN");\n    if (code.equals("CGN")) System.out.println("Cologne");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'de_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero archive code formatting', titleJa: '先頭ゼロ付きアーカイブコードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.stationCode, summaryJa: 'アーカイブコード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプルアーカイブコード 0006 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 6;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0006"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0006";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'de_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.museumVisitor, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_DE_java_01', languageId: 'java', world: 'debug', title: 'Pilgrimage Church of Wies', titleJa: 'ヴィース巡礼教会', category: 'world-heritage', objective: 'collections', source: SRC.wiesChurch, summaryJa: 'ヴィース巡礼教会はドイツにある世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Wies Church", "250");\n    String ageText = ages.get("Other Site");\n    int age = Integer.parseInt(ageText);\n    System.out.println(age);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> ages = new HashMap<>();\n    ages.put("Wies Church", "250");\n    String ageText = ages.get("Wies Church");\n    try {\n      if (ageText != null) System.out.println(Integer.parseInt(ageText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const GERMANY_FACTS = allSpecs.map(makeFact);
export const GERMANY_ASSIGNMENTS = allSpecs.map(assignment);

export const DE_PY_DECODE = pyDecode.map(decode);
export const DE_PY_EXECUTE = pyExecute.map(execute);
export const DE_PY_DEBUG = pyDebug.map(debug);
export const DE_JS_DECODE = jsDecode.map(decode);
export const DE_JS_EXECUTE = jsExecute.map(execute);
export const DE_JS_DEBUG = jsDebug.map(debug);
export const DE_JAVA_DECODE = javaDecode.map(decode);
export const DE_JAVA_EXECUTE = javaExecute.map(execute);
export const DE_JAVA_DEBUG = javaDebug.map(debug);

export const GERMANY_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: GERMANY PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: GERMANY JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: GERMANY JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: GERMANY PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: GERMANY JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: GERMANY JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: GERMANY PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: GERMANY JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: GERMANY JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
