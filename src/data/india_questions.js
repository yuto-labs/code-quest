const SRC = {
  newDelhi: 'https://www.britannica.com/place/New-Delhi',
  independence: 'https://www.britannica.com/event/Indian-Independence-Act',
  constitution: 'https://www.britannica.com/topic/Constitution-of-India',
  states: 'https://www.britannica.com/place/India',
  ganges: 'https://www.britannica.com/place/Ganges-River',
  tajMahal: 'https://whc.unesco.org/en/list/252',
  qutbMinar: 'https://whc.unesco.org/en/list/233',
  jaipur: 'https://whc.unesco.org/en/list/1338',
  mumbai: 'https://www.britannica.com/place/Mumbai',
  iisc: 'https://www.britannica.com/topic/Indian-Institute-of-Science',
  railways: 'https://www.britannica.com/topic/Indian-Railways',
  tharDesert: 'https://www.britannica.com/place/Thar-Desert',
  ajanta: 'https://whc.unesco.org/en/list/242',
  classicalArts: 'https://www.britannica.com/art/Indian-dance',
  rupee: 'https://www.britannica.com/topic/rupee',
  postal: 'https://www.britannica.com/place/India',
  westernGhats: 'https://whc.unesco.org/en/list/1342',
  parliament: 'https://www.britannica.com/place/New-Delhi',
  chennai: 'https://www.britannica.com/place/Chennai',
  flag: 'https://www.britannica.com/topic/flag-of-India',
  transport: 'https://www.britannica.com/place/India',
  gatewayOfIndia: 'https://www.britannica.com/topic/Gateway-of-India',
  redFort: 'https://whc.unesco.org/en/list/231',
  ellora: 'https://whc.unesco.org/en/list/243',
  scienceInstitutions: 'https://www.britannica.com/topic/Indian-Space-Research-Organisation',
  yoga: 'https://www.britannica.com/topic/yoga',
  brahmaputra: 'https://www.britannica.com/place/Brahmaputra-River',
  nationalMuseum: 'https://www.britannica.com/place/New-Delhi',
  konark: 'https://whc.unesco.org/en/list/246',
  sundarbans: 'https://whc.unesco.org/en/list/452',
  ports: 'https://www.britannica.com/place/India',
  phone: 'https://www.britannica.com/place/India',
  delhiGurugram: 'https://www.britannica.com/place/Delhi',
  heritageLookup: 'https://whc.unesco.org/en/list/252',
  shivajiTerminus: 'https://whc.unesco.org/en/list/945',
  supremeCourt: 'https://www.britannica.com/topic/Supreme-Court-of-India',
  mountainRailways: 'https://whc.unesco.org/en/list/944',
  greatHimalayan: 'https://whc.unesco.org/en/list/1406',
  nalanda: 'https://whc.unesco.org/en/list/1502',
  ravan: 'https://www.nobelprize.org/prizes/physics/1930/raman/biographical/',
  timezone: 'https://www.timeanddate.com/time/zones/ist',
  isro: 'https://www.britannica.com/topic/Indian-Space-Research-Organisation',
  script: 'https://www.britannica.com/topic/Devanagari-alphabet',
  cricket: 'https://www.britannica.com/sports/cricket',
  raniKiVav: 'https://whc.unesco.org/en/list/922',
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
  return `in:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、インドの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'IN',
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
    countryId: 'IN',
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
  { id: 'in_py_d01', languageId: 'python', world: 'decode', title: 'New Delhi as capital', titleJa: 'ニューデリー（首都）', category: 'geography-capital', objective: 'strings', source: SRC.newDelhi, summaryJa: 'ニューデリーはインドの首都です。', prompt: 'ニューデリーはインドの首都です。下のコードを実行すると India\'s capital is New Delhi. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("India\'s capital is " + capital + ".")', answer: '"New Delhi"', expectedOutput: "India's capital is New Delhi.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"New Delhi" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'in_py_d02', languageId: 'python', world: 'decode', title: 'Indian independence', titleJa: 'インドの独立', category: 'history', objective: 'integers', source: SRC.independence, summaryJa: 'インドは1947年に独立しました。', prompt: '年が1947のとき Independence:1947 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Independence:{year}"\nprint(label)', answer: '1947', expectedOutput: 'Independence:1947', hint: '整数は引用符なしで書きます。', explanation: 'year に1947を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'in_py_d03', languageId: 'python', world: 'decode', title: 'Constitution of India', titleJa: 'インド憲法の施行', category: 'politics-history', objective: 'condition', source: SRC.constitution, summaryJa: 'インド憲法は1950年に施行されました。', prompt: '年が1950のとき in effect と表示されるよう、if の条件を完成させてください。', code: 'year = 1950\nif ___BLANK___:\n    print("in effect")\nelse:\n    print("other")', answer: 'year == 1950', expectedOutput: 'in effect', hint: '値が等しいかは == で比較します。', explanation: 'year == 1950 が True になるため in effect が出力されます。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'in_py_d04', languageId: 'python', world: 'decode', title: 'Indian state and union territory sample labels', titleJa: 'インドの州・連邦直轄地のサンプルラベル', category: 'geography-administration', objective: 'list', source: SRC.states, summaryJa: 'インドにはマハーラーシュトラ州、タミル・ナードゥ州などのサンプル地域ラベルがあります。', prompt: 'リストから Rajasthan を取り出して表示するよう、添字を埋めてください。', code: 'states = ["Maharashtra", "Tamil Nadu", "Rajasthan"]\nprint(states[___BLANK___])', answer: '2', expectedOutput: 'Rajasthan', hint: 'Python のリストは0番目から数えます。', explanation: 'Rajasthan はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'in_py_d05', languageId: 'python', world: 'decode', title: 'Ganges River', titleJa: 'ガンジス川', category: 'geography-nature', objective: 'dictionary', source: SRC.ganges, summaryJa: 'ガンジス川は北インドと結びつく主要な河川です。', prompt: '辞書から region を取り出して Northern India と表示されるよう、キーを埋めてください。', code: 'river = {"name": "Ganges", "region": "Northern India"}\nprint(river[___BLANK___])', answer: '"region"', expectedOutput: 'Northern India', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"region" キーの値が Northern India です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_IN_python_01', languageId: 'python', world: 'decode', title: 'Taj Mahal', titleJa: 'タージ・マハル', category: 'world-heritage', objective: 'function', source: SRC.tajMahal, summaryJa: 'タージ・マハルはインドのアグラにあります。', prompt: '関数と条件を使い、city が Agra のときだけ Taj Mahal:Agra と表示するよう空欄を埋めてください。', code: 'name = "Taj Mahal"\ncity = "Agra"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Agra"', expectedOutput: 'Taj Mahal:Agra', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Agra と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_IN_python_02', languageId: 'python', world: 'decode', title: 'Qutb Minar', titleJa: 'クトゥブ・ミナール', category: 'world-heritage', objective: 'loop', source: SRC.qutbMinar, summaryJa: 'クトゥブ・ミナールはデリーにあります。', prompt: 'city が Delhi の記念碑名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'monuments = [\n    {"name": "Qutb Minar", "city": "Delhi"},\n    {"name": "Other", "city": "Agra"}\n]\nfor monument in monuments:\n    if ___BLANK___:\n        print(monument["name"])', answer: 'monument["city"] == "Delhi"', expectedOutput: 'Qutb Minar', hint: '各辞書の city キーを比較します。', explanation: 'Qutb Minar の city だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_IN_python_03', languageId: 'python', world: 'decode', title: 'Jaipur City', titleJa: 'ジャイプル市街', category: 'world-heritage', objective: 'dictionary', source: SRC.jaipur, summaryJa: 'ジャイプル市街はラジャスタン州にある世界遺産です。', prompt: '辞書と関数を使い、Jaipur:Rajasthan と表示するキーを埋めてください。', code: 'city = {"name": "Jaipur", "state": "Rajasthan"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(city))', answer: '"state"', expectedOutput: 'Jaipur:Rajasthan', hint: 'Rajasthan を取り出すキーを選びます。', explanation: '"state" キーの値が Rajasthan です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'in_py_e01', languageId: 'python', world: 'execute', title: 'Mumbai', titleJa: 'ムンバイ', category: 'geography-city', objective: 'function', source: SRC.mumbai, summaryJa: 'ムンバイはマハーラーシュトラ州の主要都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, state):\n    return f"{name}:{state}"\nprint(city_label("Mumbai", "Maharashtra"))', options: ['Mumbai:Maharashtra', 'Maharashtra:Mumbai', 'Mumbai', 'Error'], answer: 'Mumbai:Maharashtra', expectedOutput: 'Mumbai:Maharashtra', hint: 'return の f-string で name と state の順番を見ます。', explanation: 'name が先、state が後ろなので Mumbai:Maharashtra です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'in_py_e02', languageId: 'python', world: 'execute', title: 'Indian Institute of Science', titleJa: 'インド理科大学院', category: 'education', objective: 'dictionary', source: SRC.iisc, summaryJa: 'インド理科大学院はベンガルールにあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'institute = {"name": "Indian Institute of Science", "city": "Bengaluru"}\nprint(institute["city"])', options: ['Bengaluru', 'Indian Institute of Science', 'Mumbai', 'city'], answer: 'Bengaluru', expectedOutput: 'Bengaluru', hint: '"city" キーの値を見ます。', explanation: 'institute["city"] は Bengaluru を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'in_py_e03', languageId: 'python', world: 'execute', title: 'Indian Railways sample routes', titleJa: 'インド鉄道のサンプル路線', category: 'transport', objective: 'loop', source: SRC.railways, summaryJa: 'サンプルとして Delhi–Agra、Mumbai–Pune などの路線ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'routes = ["Delhi-Agra", "Mumbai-Pune"]\nresult = ""\nfor route in routes:\n    result += route + "|"\nprint(result[:-1])', options: ['Delhi-Agra|Mumbai-Pune', 'Mumbai-Pune|Delhi-Agra', 'Delhi-Agra|', 'Mumbai-Pune'], answer: 'Delhi-Agra|Mumbai-Pune', expectedOutput: 'Delhi-Agra|Mumbai-Pune', hint: 'routes の並び順と最後の | の削除を見ます。', explanation: 'Delhi-Agra、Mumbai-Pune の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'in_py_e04', languageId: 'python', world: 'execute', title: 'Thar Desert', titleJa: 'タール砂漠', category: 'geography-nature', objective: 'loop', source: SRC.tharDesert, summaryJa: 'タール砂漠はインド北西部と結びつく砂漠です。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Thar", "northwest": True},\n    {"name": "Other", "northwest": False}\n]\nselected = [r["name"] for r in records if r["northwest"]]\nprint(selected[0])', options: ['Thar', 'Other', 'True', 'False'], answer: 'Thar', expectedOutput: 'Thar', hint: 'northwest が True の辞書だけ残します。', explanation: 'Thar の northwest だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_IN_python_01', languageId: 'python', world: 'execute', title: 'Ajanta Caves', titleJa: 'アジャンター石窟群', category: 'world-heritage', objective: 'loop', source: SRC.ajanta, summaryJa: 'アジャンター石窟群はマハーラーシュトラ州にあります。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Cave 1", "state": "Maharashtra", "period": 200},\n    {"name": "Other", "state": "Rajasthan", "period": 100},\n    {"name": "Cave 2", "state": "Maharashtra", "period": 50}\n]\nselected = sorted([r for r in records if r["state"] == "Maharashtra"], key=lambda r: r["period"])\nprint(">".join(r["name"] for r in selected))', options: ['Cave 2>Cave 1', 'Cave 1>Cave 2', 'Other>Cave 1', 'Cave 1>Other'], answer: 'Cave 2>Cave 1', expectedOutput: 'Cave 2>Cave 1', hint: 'state で絞ったあと period の昇順です。', explanation: 'Maharashtra は Cave 2(50) と Cave 1(200) で、昇順に Cave 2 が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_IN_python_02', languageId: 'python', world: 'execute', title: 'Indian classical arts dataset', titleJa: 'インド古典舞踊のデータセット', category: 'culture', objective: 'dictionary', source: SRC.classicalArts, summaryJa: 'サンプルとして Bharatanatyam、Kathak、Odissi、Kathakali を扱います。', prompt: '辞書とリストから solo が True の件数を集計した結果を選んでください。', code: 'arts = [\n    {"name": "Bharatanatyam", "solo": True},\n    {"name": "Kathak", "solo": True},\n    {"name": "Odissi", "solo": False},\n    {"name": "Kathakali", "solo": False}\n]\ncount = sum(1 for art in arts if art["solo"])\nprint(count)', options: ['2', '4', '1', 'Bharatanatyam'], answer: '2', expectedOutput: '2', hint: 'solo が True の辞書だけ数えます。', explanation: 'Bharatanatyam、Kathak の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'in_py_b01', languageId: 'python', world: 'debug', title: 'Indian rupee formatting', titleJa: 'インドルピーの表示', category: 'finance', objective: 'strings', source: SRC.rupee, summaryJa: 'インドの通貨はインドルピーです。', prompt: '金額を ₹10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("₹" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、₹10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"₹{amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'in_py_b02', languageId: 'python', world: 'debug', title: 'Indian postal-code style labels', titleJa: 'インド郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postal, summaryJa: 'インドの郵便番号（PINコード）は6桁で、先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'pincode = 1001\nprint(pincode)', cause: '郵便番号を数値として保存すると先頭ゼロを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号も失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'pincode = "001001"\nprint(pincode)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDや郵便番号は計算対象ではなく文字列データとして扱います。' },
  { id: 'in_py_b03', languageId: 'python', world: 'debug', title: 'Indian state abbreviation lookup', titleJa: '州略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.states, summaryJa: 'インドの州には MH、TN、RJ、KL、DL などの略号があります。', prompt: '略号 RJ から州名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"MH": "Maharashtra", "TN": "Tamil Nadu"}\ncode = "RJ"\nprint(abbreviations[code])', cause: '辞書に RJ のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"MH": "Maharashtra", "TN": "Tamil Nadu", "RJ": "Rajasthan"}\ncode = "RJ"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'RJ というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_IN_python_01', languageId: 'python', world: 'debug', title: 'Western Ghats', titleJa: '西ガーツ山脈', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.westernGhats, summaryJa: '西ガーツ山脈はインドにある世界遺産です。', prompt: '生息種数データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Western Ghats", "species_count": "325"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["species_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'species_count がない辞書でも record["species_count"] を直接読んでいる', fix: 'record.get("species_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Western Ghats", "species_count": "325"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("species_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に species_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'in_js_d01', languageId: 'javascript', world: 'decode', title: 'Parliament House in New Delhi', titleJa: '国会議事堂（ニューデリー）', category: 'politics-architecture', objective: 'object', source: SRC.parliament, summaryJa: 'インドの国会議事堂はニューデリーにあります。', prompt: 'オブジェクトから city を取り出して New Delhi と表示されるよう、空欄を埋めてください。', code: 'const building = { name: "Parliament House", city: "New Delhi" };\nconsole.log(building.___BLANK___);', answer: 'city', expectedOutput: 'New Delhi', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'building.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'in_js_d02', languageId: 'javascript', world: 'decode', title: 'Chennai and the Coromandel Coast', titleJa: 'チェンナイとコロマンデル海岸', category: 'geography', objective: 'strings', source: SRC.chennai, summaryJa: 'チェンナイはインド南東部の沿岸に位置します。', prompt: 'テンプレートリテラルで Chennai:southeastern coast と表示されるよう空欄を埋めてください。', code: 'const city = "Chennai";\nconst position = ___BLANK___;\nconsole.log(`${city}:${position}`);', answer: '"southeastern coast"', expectedOutput: 'Chennai:southeastern coast', hint: 'position に入る文字列を引用符付きで書きます。', explanation: '"southeastern coast" を入れると ${position} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'in_js_d03', languageId: 'javascript', world: 'decode', title: 'Indian flag colors', titleJa: 'インド国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'インド国旗はサフラン・白・緑の3色で構成されています。', prompt: '配列から green を取り出す添字を埋めてください。', code: 'const colors = ["saffron", "white", "green"];\nconsole.log(colors[___BLANK___]);', answer: '2', expectedOutput: 'green', hint: '配列は0番目から数えます。', explanation: 'green は3番目の要素なので添字は2です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'in_js_d04', languageId: 'javascript', world: 'decode', title: 'Indian transport mode labels', titleJa: 'インドの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'インドには鉄道、道路、航空、メトロなどの交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'in_js_d05', languageId: 'javascript', world: 'decode', title: 'Gateway of India', titleJa: 'インド門', category: 'monument', objective: 'loop', source: SRC.gatewayOfIndia, summaryJa: 'インド門はムンバイにあります。', prompt: 'for...of で city が Mumbai の記念碑だけを表示するよう、条件の空欄を埋めてください。', code: 'const monuments = [\n  { name: "Gateway of India", city: "Mumbai" },\n  { name: "Other", city: "Chennai" }\n];\nfor (const monument of monuments) {\n  if (___BLANK___) console.log(monument.name);\n}', answer: 'monument.city === "Mumbai"', expectedOutput: 'Gateway of India', hint: '各 monument の city を比較します。', explanation: 'Gateway of India の city だけが Mumbai なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_IN_javascript_01', languageId: 'javascript', world: 'decode', title: 'Red Fort Complex', titleJa: 'レッド・フォート（ラール・キラー）複合体', category: 'world-heritage', objective: 'array', source: SRC.redFort, summaryJa: 'レッド・フォート複合体はデリーにあります。', prompt: 'array methods で Delhi の record を取り出してください。', code: 'const forts = [{name:"Red Fort", city:"Delhi"}, {name:"Other", city:"Agra"}];\nconst found = forts.filter(fort => fort.city === ___BLANK___)[0];\nconsole.log(found.name);', answer: '"Delhi"', expectedOutput: 'Red Fort', hint: 'city と比較する文字列を引用符付きで書きます。', explanation: 'city が Delhi の要素だけが残ります。', programmingExplanation: 'filter は条件に合う配列要素を残し、[0] で最初の要素を取ります。' },
  { id: 'final_decode_IN_javascript_02', languageId: 'javascript', world: 'decode', title: 'Ellora Caves', titleJa: 'エローラ石窟群', category: 'world-heritage', objective: 'object', source: SRC.ellora, summaryJa: 'エローラ石窟群はマハーラーシュトラ州にあります。', prompt: 'find で Ellora の record を探す条件を埋めてください。', code: 'const records = [{name:"Ajanta", state:"Maharashtra"}, {name:"Ellora", state:"Maharashtra"}];\nconst found = records.find(item => item.name === ___BLANK___);\nconsole.log(found.state);', answer: '"Ellora"', expectedOutput: 'Maharashtra', hint: 'name と一致する文字列を書きます。', explanation: 'Ellora の record が見つかり、state が表示されます。', programmingExplanation: 'find は条件が true になる最初の要素を返します。' },
  { id: 'final_decode_IN_javascript_03', languageId: 'javascript', world: 'decode', title: 'Indian science institutions', titleJa: 'インドの科学研究機関', category: 'science-institution', objective: 'class', source: SRC.scienceInstitutions, summaryJa: 'サンプルとして ISRO、IISc、BARC を扱います。', prompt: 'class のインスタンスを map して ISRO:agency と表示してください。', code: 'class Institution {\n  constructor(name, kind) { this.name = name; this.kind = kind; }\n}\nconst items = [new Institution("ISRO", ___BLANK___)];\nconsole.log(items.map(item => `${item.name}:${item.kind}`).join(","));', answer: '"agency"', expectedOutput: 'ISRO:agency', hint: 'constructor の kind に入る文字列です。', explanation: 'kind に agency が入り、map で表示用文字列に変換されます。', programmingExplanation: 'class で作ったオブジェクトのプロパティは this に保存され、map で変換できます。' },
];

const jsExecute = [
  { id: 'in_js_e01', languageId: 'javascript', world: 'execute', title: 'Yoga as cultural practice', titleJa: '文化的実践としてのヨガ', category: 'culture', objective: 'array', source: SRC.yoga, summaryJa: 'ヨガはインドに歴史的な起源を持ちます。', prompt: 'map と join の出力を選んでください。', code: 'const practices = ["yoga"];\nconst label = practices.map(p => p.toUpperCase()).join("-");\nconsole.log(label);', options: ['YOGA', 'yoga', 'Y-O', 'Yoga'], answer: 'YOGA', expectedOutput: 'YOGA', hint: '各要素を大文字化します。', explanation: 'yoga が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'in_js_e02', languageId: 'javascript', world: 'execute', title: 'Brahmaputra River sample segments', titleJa: 'ブラマプトラ川のサンプル区間', category: 'geography', objective: 'loop', source: SRC.brahmaputra, summaryJa: 'ブラマプトラ川はインド北東部と結びつく主要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [30, 50, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['100', '80', '30', '305020'], answer: '100', expectedOutput: '100', hint: '数値を左から足していきます。', explanation: '30 + 50 + 20 = 100 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'in_js_e03', languageId: 'javascript', world: 'execute', title: 'National Museum, New Delhi', titleJa: 'ニューデリーの国立博物館', category: 'museum', objective: 'object', source: SRC.nationalMuseum, summaryJa: '国立博物館はニューデリーにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const museum = { city: "New Delhi", galleries: ["sculpture", "manuscripts"] };\nlet result = museum.city;\nfor (const item of museum.galleries) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['New Delhi:sculpture:manuscripts', 'sculpture:manuscripts:New Delhi', 'New Delhi', 'manuscripts:sculpture'], answer: 'New Delhi:sculpture:manuscripts', expectedOutput: 'New Delhi:sculpture:manuscripts', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに sculpture、manuscripts が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'in_js_e04', languageId: 'javascript', world: 'execute', title: 'Konark Sun Temple', titleJa: 'コナーラクの太陽神殿', category: 'world-heritage', objective: 'function', source: SRC.konark, summaryJa: 'コナーラクの太陽神殿はオディシャ州にあります。', prompt: '関数と条件の戻り値を選んでください。', code: 'function templeLabel(state) {\n  return state === "Odisha" ? "Konark" : "other";\n}\nconsole.log(templeLabel("Odisha"));', options: ['Konark', 'other', 'Odisha', 'true'], answer: 'Konark', expectedOutput: 'Konark', hint: '"Odisha" === "Odisha" の判定を見ます。', explanation: '条件が true なので "Konark" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_IN_javascript_01', languageId: 'javascript', world: 'execute', title: 'Sundarbans National Park', titleJa: 'スンダルバンス国立公園', category: 'world-heritage-nature', objective: 'array', source: SRC.sundarbans, summaryJa: 'スンダルバンス国立公園はインドの西ベンガル地域にあります。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const parks = [\n  { name: "Sundarbans", region: "West Bengal", area: 5 },\n  { name: "Other", region: "Odisha", area: 3 },\n  { name: "Mangrove Block", region: "West Bengal", area: 2 }\n];\nconst names = parks.filter(p => p.region === "West Bengal").map(p => p.name).sort();\nconsole.log(names.join(">"));', options: ['Mangrove Block>Sundarbans', 'Sundarbans>Mangrove Block', 'Other>Sundarbans', 'Other>Mangrove Block>Sundarbans'], answer: 'Mangrove Block>Sundarbans', expectedOutput: 'Mangrove Block>Sundarbans', hint: 'region で絞ったあと、名前をアルファベット順にします。', explanation: 'Mangrove Block と Sundarbans が残り、sort で Mangrove Block が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_IN_javascript_02', languageId: 'javascript', world: 'execute', title: 'Indian ports and trade-route sample data', titleJa: 'インドの港湾・貿易路サンプルデータ', category: 'transport', objective: 'object', source: SRC.ports, summaryJa: 'サンプルとして Mumbai、Chennai、Kolkata、Kochi の港湾データを扱います。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const ports = [{name:"Mumbai", routes:[2,3]}, {name:"Chennai", routes:[5]}];\nconst total = ports.reduce((sum, port) => sum + port.routes.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Mumbai-Chennai'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Mumbai は5、Chennai は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'in_js_b01', languageId: 'javascript', world: 'debug', title: 'Indian phone-number formatting', titleJa: 'インドの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'サンプルとしてインドの携帯電話番号は10桁で構成されるものとして扱います。', prompt: '10桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "9876543210";\nif (digits.length === 9) {\n  console.log(`${digits.slice(0,5)} ${digits.slice(5)}`);\n}', cause: '10桁の番号なのに length === 9 と判定している', fix: 'length === 10 に修正してから slice する', impact: '10桁の番号を正しく整形できる', why: 'サンプル digits は10文字だからです。', correctedCode: 'const digits = "9876543210";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,5)} ${digits.slice(5)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が9のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'in_js_b02', languageId: 'javascript', world: 'debug', title: 'Delhi and Gurugram labels', titleJa: 'デリーとグルガーオン', category: 'geography-city', objective: 'object', source: SRC.delhiGurugram, summaryJa: 'デリーとグルガーオンは首都圏として扱われるサンプルラベルです。', prompt: 'region が NCR の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Delhi", region: "NCR" }, { name: "Gurugram", region: "NCR" }];\nconst labels = cities.filter(city => city.area === "NCR").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには region があるのに area を参照している', fix: 'city.region === "NCR" に修正する', impact: 'Delhi と Gurugram の両方を正しく選べる', why: '存在しない area は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Delhi", region: "NCR" }, { name: "Gurugram", region: "NCR" }];\nconst labels = cities.filter(city => city.region === "NCR").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'in_js_b03', languageId: 'javascript', world: 'debug', title: 'Heritage-site record lookup', titleJa: '世界遺産レコードの参照', category: 'world-heritage', objective: 'object', source: SRC.heritageLookup, summaryJa: 'サンプルの世界遺産データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Sample Heritage Site" };\nconsole.log(record.detail.state.toUpperCase());', cause: 'record.detail が undefined のまま state を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Sample Heritage Site" };\nconst state = record.detail?.state ?? "unknown";\nconsole.log(state.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_IN_javascript_01', languageId: 'javascript', world: 'debug', title: 'Chhatrapati Shivaji Terminus', titleJa: 'チャトラパティ・シヴァージー・ターミナス', category: 'world-heritage-transport', objective: 'object', source: SRC.shivajiTerminus, summaryJa: 'チャトラパティ・シヴァージー・ターミナスはムンバイにあります。', prompt: 'ターミナスのレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Chhatrapati Shivaji Terminus", city: "Mumbai", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.city ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Chhatrapati Shivaji Terminus", city: "Mumbai", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'in_java_d01', languageId: 'java', world: 'decode', title: 'Supreme Court of India', titleJa: 'インド最高裁判所', category: 'politics', objective: 'strings', source: SRC.supremeCourt, summaryJa: 'インド最高裁判所はニューデリーにあります。', prompt: 'Supreme Court:New Delhi と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String institution = "Supreme Court";\n    String city = ___BLANK___;\n    System.out.println(institution + ":" + city);\n  }\n}', answer: '"New Delhi"', expectedOutput: 'Supreme Court:New Delhi', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "New Delhi" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'in_java_d02', languageId: 'java', world: 'decode', title: 'Republic Day', titleJa: '共和国記念日', category: 'history', objective: 'numbers', source: SRC.constitution, summaryJa: 'インド憲法は1950年1月26日に施行されました。', prompt: 'Republic:1950 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Republic:" + year;\n    System.out.println(label);\n  }\n}', answer: '1950', expectedOutput: 'Republic:1950', hint: 'int なので引用符なしの数値です。', explanation: 'year に1950を入れると文字列連結で Republic:1950 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'in_java_d03', languageId: 'java', world: 'decode', title: 'Indian independence year', titleJa: 'インド独立年', category: 'history', objective: 'condition', source: SRC.independence, summaryJa: 'インドは1947年に独立しました。', prompt: 'year が1947のとき Independence と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1947;\n    if (___BLANK___) {\n      System.out.println("Independence");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1947', expectedOutput: 'Independence', hint: '値が等しいかは == で比較します。', explanation: 'year == 1947 が true になるため Independence が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'in_java_d04', languageId: 'java', world: 'decode', title: 'Indian communication mode labels', titleJa: 'インドの交通・通信手段ラベル', category: 'transport', objective: 'switch', source: SRC.transport, summaryJa: 'インドでは鉄道・道路・航空・港湾など複数の交通手段が使われています。', prompt: 'mode が air のとき Air transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "air";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Air transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"air"', expectedOutput: 'Air transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "air" が一致し、Air transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'in_java_d05', languageId: 'java', world: 'decode', title: 'Indian regions sample', titleJa: 'インドの地域区分サンプル', category: 'geography', objective: 'array', source: SRC.states, summaryJa: 'サンプルとして North、South、East、West、Northeast の地域ラベルを扱います。', prompt: 'regions 配列を拡張 for で読み、Northeast だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"North", "Northeast", "South"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("Northeast")', expectedOutput: 'Northeast', hint: 'String の内容比較は equals です。', explanation: 'region が Northeast のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_IN_java_01', languageId: 'java', world: 'decode', title: 'Mountain Railways of India', titleJa: 'インドの山岳鉄道群', category: 'world-heritage', objective: 'method', source: SRC.mountainRailways, summaryJa: 'インドの山岳鉄道群は世界遺産です。', prompt: 'category が railway のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("railway")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"railway"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"railway" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_IN_java_02', languageId: 'java', world: 'decode', title: 'Great Himalayan National Park', titleJa: 'グレート・ヒマラヤ国立公園', category: 'world-heritage-nature', objective: 'collections', source: SRC.greatHimalayan, summaryJa: 'グレート・ヒマラヤ国立公園保全地域はヒマーチャル・プラデーシュ州にあります。', prompt: 'ArrayList から protected の park だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Park {\n  String name;\n  boolean protectedArea;\n  Park(String n, boolean p) { name = n; protectedArea = p; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Park> parks = new ArrayList<>();\n    parks.add(new Park("Great Himalayan", true));\n    parks.add(new Park("Other", false));\n    for (Park p : parks) {\n      if (___BLANK___) System.out.println(p.name);\n    }\n  }\n}', answer: 'p.protectedArea', expectedOutput: 'Great Himalayan', hint: 'protectedArea フィールドが true の record だけです。', explanation: 'Great Himalayan の protectedArea だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_IN_java_03', languageId: 'java', world: 'decode', title: 'Nalanda Mahavihara', titleJa: 'ナーランダー僧院遺跡', category: 'world-heritage', objective: 'class', source: SRC.nalanda, summaryJa: 'ナーランダー僧院遺跡はビハール州にあります。', prompt: 'HashMap から Nalanda の州を取り出し Nalanda:Bihar と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String state;\n  Site(String n, String s) { name = n; state = s; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("Nalanda", new Site("Nalanda", "Bihar"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.state);\n  }\n}', answer: '"Nalanda"', expectedOutput: 'Nalanda:Bihar', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Nalanda キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'in_java_e01', languageId: 'java', world: 'execute', title: 'C. V. Raman', titleJa: 'C. V. ラマン', category: 'science-history', objective: 'strings', source: SRC.ravan, summaryJa: 'C. V. ラマンはノーベル物理学賞を受賞したインドの物理学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "C. V. Raman";\n    if (scientist.equals("C. V. Raman")) System.out.println("physics");\n    else System.out.println("other");\n  }\n}', options: ['physics', 'other', 'C. V. Raman', 'true'], answer: 'physics', expectedOutput: 'physics', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので physics が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'in_java_e02', languageId: 'java', world: 'execute', title: 'Indian time zone sample', titleJa: 'インドの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'インドはインド標準時（IST）を使用しています。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 5));\n  }\n}', options: ['15', '10', '5', '50'], answer: '15', expectedOutput: '15', hint: '10 + 5 を計算します。', explanation: 'UTC 10時に5を足すので15です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'in_java_e03', languageId: 'java', world: 'execute', title: 'Indian Space Research Organisation', titleJa: 'インド宇宙研究機関（ISRO）', category: 'science', objective: 'collections', source: SRC.isro, summaryJa: 'ISRO はインドの宇宙機関です。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("ISRO");\n    labels.add("space");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['ISRO>space', 'space>ISRO', 'ISRO>', 'space'], answer: 'ISRO>space', expectedOutput: 'ISRO>space', hint: '追加した順に result へ入ります。', explanation: 'ISRO、space の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'in_java_e04', languageId: 'java', world: 'execute', title: 'Indian script label sample', titleJa: 'インドの文字体系ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.script, summaryJa: 'サンプルとしてインドの文字体系に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Devanagari extends ScriptType {\n  @Override\n  String label() { return "Devanagari"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Devanagari();\n    System.out.println(type.label());\n  }\n}', options: ['Devanagari', 'script', 'ScriptType', 'error'], answer: 'Devanagari', expectedOutput: 'Devanagari', hint: '実体は Devanagari です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_IN_java_01', languageId: 'java', world: 'execute', title: 'Indian state capital records', titleJa: 'インドの州都レコード', category: 'geography-administration', objective: 'collections', source: SRC.states, summaryJa: 'サンプルとして Maharashtra–Mumbai、Tamil Nadu–Chennai、Rajasthan–Jaipur の州都データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい州都を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> capitals = new HashMap<>();\n    capitals.put("Mumbai", 9);\n    capitals.put("Jaipur", 1);\n    String result = "";\n    for (String city : capitals.keySet()) if (isLarge(capitals.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Mumbai', 'Jaipur', 'MumbaiJaipur', '9'], answer: 'Mumbai', expectedOutput: 'Mumbai', hint: 'population が4以上の city だけです。', explanation: 'Mumbai の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_IN_java_02', languageId: 'java', world: 'execute', title: 'Indian research observatory records', titleJa: 'インドの研究観測拠点レコード', category: 'science-geography', objective: 'collections', source: SRC.isro, summaryJa: 'インドの研究機関による観測データのサンプルを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Bengaluru", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Bengaluru:active', 'Closed:active', 'Bengaluru', 'active:Bengaluru'], answer: 'Bengaluru:active', expectedOutput: 'Bengaluru:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Bengaluru だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'in_java_b01', languageId: 'java', world: 'debug', title: 'Indian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.states, summaryJa: 'インドの都市コードは DEL、BOM、MAA、BLR などです。', prompt: '都市コード BLR を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BLR");\n    if (code == "BLR") System.out.println("Bengaluru");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("BLR") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BLR");\n    if (code.equals("BLR")) System.out.println("Bengaluru");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'in_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero station code formatting', titleJa: '先頭ゼロ付き駅コードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.railways, summaryJa: '駅コード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル駅コード 0007 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 7;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0007"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0007";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'in_java_b03', languageId: 'java', world: 'debug', title: 'Cricket score average', titleJa: 'クリケットの得点平均', category: 'sport', objective: 'numbers', source: SRC.cricket, summaryJa: 'サンプルの試合得点データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int matches = 2;\n    double average = total / matches;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または matches を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int matches = 2;\n    double average = (double) total / matches;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_IN_java_01', languageId: 'java', world: 'debug', title: 'Rani ki Vav', titleJa: 'ラーニー・キ・ヴァヴ（女王の階段井戸）', category: 'world-heritage', objective: 'collections', source: SRC.raniKiVav, summaryJa: 'ラーニー・キ・ヴァヴはグジャラート州にあります。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> depths = new HashMap<>();\n    depths.put("Rani ki Vav", "27");\n    String depthText = depths.get("Other Stepwell");\n    int depth = Integer.parseInt(depthText);\n    System.out.println(depth);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> depths = new HashMap<>();\n    depths.put("Rani ki Vav", "27");\n    String depthText = depths.get("Rani ki Vav");\n    try {\n      if (depthText != null) System.out.println(Integer.parseInt(depthText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const INDIA_FACTS = allSpecs.map(makeFact);
export const INDIA_ASSIGNMENTS = allSpecs.map(assignment);

export const IN_PY_DECODE = pyDecode.map(decode);
export const IN_PY_EXECUTE = pyExecute.map(execute);
export const IN_PY_DEBUG = pyDebug.map(debug);
export const IN_JS_DECODE = jsDecode.map(decode);
export const IN_JS_EXECUTE = jsExecute.map(execute);
export const IN_JS_DEBUG = jsDebug.map(debug);
export const IN_JAVA_DECODE = javaDecode.map(decode);
export const IN_JAVA_EXECUTE = javaExecute.map(execute);
export const IN_JAVA_DEBUG = javaDebug.map(debug);

export const INDIA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: INDIA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: INDIA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: INDIA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: INDIA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: INDIA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: INDIA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: INDIA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: INDIA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: INDIA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
