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

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、エジプトの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
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
  { id: 'eg_py_e01', languageId: 'python', world: 'execute', title: 'Alexandria', titleJa: 'アレクサンドリア', category: 'geography-city', objective: 'function', source: SRC.alexandria, summaryJa: 'アレクサンドリアはエジプトの主要な地中海沿岸都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, sea):\n    return f"{name}:{sea}"\nprint(city_label("Alexandria", "Mediterranean"))', options: ['Alexandria:Mediterranean', 'Mediterranean:Alexandria', 'Alexandria', 'Error'], answer: 'Alexandria:Mediterranean', expectedOutput: 'Alexandria:Mediterranean', hint: 'return の f-string で name と sea の順番を見ます。', explanation: 'name が先、sea が後ろなので Alexandria:Mediterranean です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'eg_py_e02', languageId: 'python', world: 'execute', title: 'Aswan High Dam', titleJa: 'アスワン・ハイ・ダム', category: 'engineering', objective: 'dictionary', source: SRC.aswan, summaryJa: 'アスワン・ハイ・ダムはナイル川にあります。', prompt: '辞書 lookup の結果を選んでください。', code: 'dam = {"name": "Aswan High Dam", "river": "Nile"}\nprint(dam["river"])', options: ['Nile', 'Aswan High Dam', 'Cairo', 'river'], answer: 'Nile', expectedOutput: 'Nile', hint: '"river" キーの値を見ます。', explanation: 'dam["river"] は Nile を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'eg_py_e03', languageId: 'python', world: 'execute', title: 'Egyptian Museum in Cairo', titleJa: 'カイロのエジプト考古学博物館', category: 'museum', objective: 'loop', source: SRC.egyptianMuseum, summaryJa: 'エジプト考古学博物館はカイロにあります。', prompt: 'リストを順に連結した出力を選んでください。', code: 'labels = ["Museum", "Cairo"]\nresult = ""\nfor label in labels:\n    result += label + "|"\nprint(result[:-1])', options: ['Museum|Cairo', 'Cairo|Museum', 'Museum|', 'Cairo'], answer: 'Museum|Cairo', expectedOutput: 'Museum|Cairo', hint: 'labels の並び順と最後の | の削除を見ます。', explanation: 'Museum、Cairo の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。' },
  { id: 'eg_py_e04', languageId: 'python', world: 'execute', title: 'Sinai Peninsula', titleJa: 'シナイ半島', category: 'geography', objective: 'loop', source: SRC.sinai, summaryJa: 'シナイ半島はエジプト北東部にあります。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Sinai", "northeast": True},\n    {"name": "Delta", "northeast": False}\n]\nselected = [r["name"] for r in records if r["northeast"]]\nprint(selected[0])', options: ['Sinai', 'Delta', 'True', 'False'], answer: 'Sinai', expectedOutput: 'Sinai', hint: 'northeast が True の辞書だけ残します。', explanation: 'Sinai の northeast だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_EG_python_01', languageId: 'python', world: 'execute', title: 'Islamic Cairo', titleJa: 'イスラーム地区カイロ（歴史的カイロ）', category: 'world-heritage', objective: 'loop', source: SRC.islamicCairo, summaryJa: '歴史的カイロは世界遺産に登録されています。', prompt: '記録を絞り、year の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Al-Azhar Mosque", "kind": "historic", "year": 970},\n    {"name": "Other", "kind": "modern", "year": 2000},\n    {"name": "Sultan Hassan Mosque", "kind": "historic", "year": 1356}\n]\nselected = sorted([r for r in records if r["kind"] == "historic"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['Al-Azhar Mosque>Sultan Hassan Mosque', 'Sultan Hassan Mosque>Al-Azhar Mosque', 'Other>Al-Azhar Mosque', 'Al-Azhar Mosque>Other'], answer: 'Al-Azhar Mosque>Sultan Hassan Mosque', expectedOutput: 'Al-Azhar Mosque>Sultan Hassan Mosque', hint: 'kind で絞ったあと year の昇順です。', explanation: 'historic は Al-Azhar(970) と Sultan Hassan(1356) で、昇順に Al-Azhar が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_EG_python_02', languageId: 'python', world: 'execute', title: 'Egypt transport dataset', titleJa: 'エジプトの交通データセット', category: 'transport', objective: 'dictionary', source: SRC.transport, summaryJa: 'エジプトにはナイル川交通、カイロメトロ、スエズ運河、砂漠道路、鉄道などの交通手段があります。', prompt: '辞書とリストから active が True の件数を集計した結果を選んでください。', code: 'routes = [\n    {"name": "Nile transport", "active": True},\n    {"name": "Cairo Metro", "active": True},\n    {"name": "Desert road", "active": False},\n    {"name": "Railway", "active": True},\n    {"name": "Suez Canal", "active": False}\n]\ncount = sum(1 for route in routes if route["active"])\nprint(count)', options: ['3', '5', '2', 'Nile transport'], answer: '3', expectedOutput: '3', hint: 'active が True の辞書だけ数えます。', explanation: 'Nile transport、Cairo Metro、Railway の3件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'eg_py_b01', languageId: 'python', world: 'debug', title: 'Egyptian pound formatting', titleJa: 'エジプトポンドの表示', category: 'finance', objective: 'strings', source: SRC.pound, summaryJa: 'エジプトの通貨はエジプトポンドです。', prompt: '金額を E£10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("E£" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、E£10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"E£{amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'eg_py_b02', languageId: 'python', world: 'debug', title: 'Egyptian postal-code style labels', titleJa: 'エジプト郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postal, summaryJa: 'エジプトの郵便番号は5桁で、先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'postcode = 1130\nprint(postcode)', cause: '郵便番号を数値として保存すると先頭ゼロを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号も失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postcode = "01130"\nprint(postcode)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDや郵便番号は計算対象ではなく文字列データとして扱います。' },
  { id: 'eg_py_b03', languageId: 'python', world: 'debug', title: 'Governorate abbreviation lookup', titleJa: '県略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.governorates, summaryJa: 'エジプトの県には CAI、GIZ、ALX、ASN などの略号があります。', prompt: '略号 ALX から県名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"CAI": "Cairo", "GIZ": "Giza"}\ncode = "ALX"\nprint(abbreviations[code])', cause: '辞書に ALX のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"CAI": "Cairo", "GIZ": "Giza", "ALX": "Alexandria"}\ncode = "ALX"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'ALX というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。' },
];

const pyFinalDebug = [
  { id: 'final_debug_EG_python_01', languageId: 'python', world: 'debug', title: 'Wadi Al-Hitan', titleJa: 'ワディ・アル・ヒタン（クジラの谷）', category: 'world-heritage-nature', objective: 'dictionary', source: SRC.wadiAlHitan, summaryJa: 'ワディ・アル・ヒタンはクジラの化石で知られる世界遺産です。', prompt: '化石数データを数値化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Wadi Al-Hitan", "fossil_count": "365"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    if int(record["fossil_count"]) > 100:\n        large.append(record["name"])\nprint(large)', cause: 'fossil_count がない辞書でも record["fossil_count"] を直接読んでいる', fix: 'record.get("fossil_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Wadi Al-Hitan", "fossil_count": "365"}, {"name": "Other"}]\nlarge = []\nfor record in records:\n    count = record.get("fossil_count")\n    if count is not None and int(count) > 100:\n        large.append(record["name"])\nprint(large)', hint: '2件目の辞書に fossil_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。' },
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
  { id: 'eg_js_e01', languageId: 'javascript', world: 'execute', title: 'Rosetta Stone', titleJa: 'ロゼッタストーン', category: 'archaeology', objective: 'array', source: SRC.rosetta, summaryJa: 'ロゼッタストーンはエジプトのロゼッタ付近で発見されました。', prompt: 'map と join の出力を選んでください。', code: 'const words = ["rosetta"];\nconst label = words.map(w => w.toUpperCase()).join("-");\nconsole.log(label);', options: ['ROSETTA', 'rosetta', 'R-O', 'Rosetta'], answer: 'ROSETTA', expectedOutput: 'ROSETTA', hint: '各要素を大文字化します。', explanation: 'rosetta が大文字になります。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'eg_js_e02', languageId: 'javascript', world: 'execute', title: 'Red Sea coast', titleJa: '紅海沿岸', category: 'geography', objective: 'loop', source: SRC.redSea, summaryJa: 'エジプトには紅海沿岸地域があります。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [40, 60, 20];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['120', '100', '40', '406020'], answer: '120', expectedOutput: '120', hint: '数値を左から足していきます。', explanation: '40 + 60 + 20 = 120 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'eg_js_e03', languageId: 'javascript', world: 'execute', title: 'Cairo Metro', titleJa: 'カイロメトロ', category: 'transport', objective: 'object', source: SRC.cairoMetro, summaryJa: 'カイロメトロはカイロ都市圏の地下鉄です。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const metro = { city: "Cairo", lines: ["line1", "line2"] };\nlet result = metro.city;\nfor (const item of metro.lines) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Cairo:line1:line2', 'line1:line2:Cairo', 'Cairo', 'line2:line1'], answer: 'Cairo:line1:line2', expectedOutput: 'Cairo:line1:line2', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに line1、line2 が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'eg_js_e04', languageId: 'javascript', world: 'execute', title: 'Philae temple complex', titleJa: 'フィラエ神殿群', category: 'world-heritage', objective: 'function', source: SRC.philae, summaryJa: 'フィラエ神殿群はアスワン地域と結びつく遺跡です。', prompt: '関数と条件の戻り値を選んでください。', code: 'function templeLabel(region) {\n  return region === "Aswan" ? "Philae" : "other";\n}\nconsole.log(templeLabel("Aswan"));', options: ['Philae', 'other', 'Aswan', 'true'], answer: 'Philae', expectedOutput: 'Philae', hint: '"Aswan" === "Aswan" の判定を見ます。', explanation: '条件が true なので "Philae" が返ります。', programmingExplanation: '三項演算子は 条件 ? trueの値 : falseの値 で結果を選びます。' },
];

const jsFinalExecute = [
  { id: 'final_execute_EG_javascript_01', languageId: 'javascript', world: 'execute', title: 'Egyptian oases', titleJa: 'エジプトのオアシス', category: 'geography-nature', objective: 'array', source: SRC.oases, summaryJa: 'エジプトの西部砂漠にはシワ、バハリヤ、ファラフラ、ダクラ、ハルガなどのオアシスがあります。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const oases = [\n  { name: "Siwa", region: "western", area: 2 },\n  { name: "Bahariya", region: "western", area: 3 },\n  { name: "Other", region: "eastern", area: 5 }\n];\nconst names = oases.filter(o => o.region === "western").map(o => o.name).sort();\nconsole.log(names.join(">"));', options: ['Bahariya>Siwa', 'Siwa>Bahariya', 'Other>Siwa', 'Other>Bahariya>Siwa'], answer: 'Bahariya>Siwa', expectedOutput: 'Bahariya>Siwa', hint: 'region で絞ったあと、名前をアルファベット順にします。', explanation: 'Bahariya と Siwa が残り、sort で Bahariya が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_EG_javascript_02', languageId: 'javascript', world: 'execute', title: 'Nile Valley site records', titleJa: 'ナイル渓谷の遺跡レコード', category: 'world-heritage', objective: 'object', source: SRC.nileValley, summaryJa: 'ナイル渓谷にはカイロ、ルクソール、アスワン、エドフなどの遺跡が連なります。', prompt: '入れ子配列を reduce で合計した結果を選んでください。', code: 'const cities = [{name:"Luxor", sites:[2,3]}, {name:"Aswan", sites:[5]}];\nconst total = cities.reduce((sum, city) => sum + city.sites.reduce((a,b) => a + b, 0), 0);\nconsole.log(total);', options: ['10', '5', '3', 'Luxor-Aswan'], answer: '10', expectedOutput: '10', hint: '内側の配列も合計します。', explanation: 'Luxor は5、Aswan は5、合計10です。', programmingExplanation: 'reduce を入れ子にすると、グループごとの合計と全体合計を順に作れます。' },
];

const jsDebug = [
  { id: 'eg_js_b01', languageId: 'javascript', world: 'debug', title: 'Egyptian phone-number formatting', titleJa: 'エジプトの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: 'エジプトの携帯電話番号は11桁で構成されます。', prompt: '11桁の番号を区切って表示したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "01012345678";\nif (digits.length === 10) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく整形できる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "01012345678";\nif (digits.length === 11) {\n  console.log(`${digits.slice(0,3)} ${digits.slice(3)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が10のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'eg_js_b02', languageId: 'javascript', world: 'debug', title: 'Cairo and Giza labels', titleJa: 'カイロとギザ', category: 'geography-city', objective: 'object', source: SRC.giza2, summaryJa: 'カイロとギザはエジプトの隣接する主要都市圏です。', prompt: 'Cairo region の都市だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const cities = [{ name: "Cairo", region: "Greater Cairo" }, { name: "Giza", region: "Greater Cairo" }];\nconst labels = cities.filter(city => city.area === "Greater Cairo").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには region があるのに area を参照している', fix: 'city.region === "Greater Cairo" に修正する', impact: 'Cairo と Giza の両方を正しく選べる', why: '存在しない area は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Cairo", region: "Greater Cairo" }, { name: "Giza", region: "Greater Cairo" }];\nconst labels = cities.filter(city => city.region === "Greater Cairo").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'eg_js_b03', languageId: 'javascript', world: 'debug', title: 'Museum record lookup', titleJa: '博物館レコードの参照', category: 'museum', objective: 'object', source: SRC.egyptianMuseum, summaryJa: 'エジプト考古学博物館の展示データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Egyptian Museum" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Egyptian Museum" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_EG_javascript_01', languageId: 'javascript', world: 'debug', title: 'Citadel of Qaitbay', titleJa: 'カイトベイ要塞', category: 'world-heritage-history', objective: 'object', source: SRC.citadelQaitbay, summaryJa: 'カイトベイ要塞はアレクサンドリアにある歴史的な要塞です。', prompt: 'カイトベイ要塞のレコードを安全に読み、coastal が true の場合だけ表示したいコードです。', code: 'const site = { name: "Citadel of Qaitbay", city: "Alexandria", coastal: true };\nif (site.coastl === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'coastal を coastl と誤記し、details も存在確認なしで読んでいる', fix: 'site.coastal を比較し、site.details?.city ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Citadel of Qaitbay", city: "Alexandria", coastal: true };\nif (site.coastal === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
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
  { id: 'eg_java_e01', languageId: 'java', world: 'execute', title: 'Ahmed Zewail', titleJa: 'アハメド・ズウェイル', category: 'science-history', objective: 'strings', source: SRC.zewail, summaryJa: 'アハメド・ズウェイルはノーベル化学賞を受賞したエジプト出身の科学者です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String scientist = "Ahmed Zewail";\n    if (scientist.equals("Ahmed Zewail")) System.out.println("chemistry");\n    else System.out.println("other");\n  }\n}', options: ['chemistry', 'other', 'Ahmed Zewail', 'true'], answer: 'chemistry', expectedOutput: 'chemistry', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので chemistry が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'eg_java_e02', languageId: 'java', world: 'execute', title: 'Egyptian time zone sample', titleJa: 'エジプトの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezone, summaryJa: 'エジプトは東ヨーロッパ時間（EET）を使用しています。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(10, 2));\n  }\n}', options: ['12', '10', '2', '8'], answer: '12', expectedOutput: '12', hint: '10 + 2 を計算します。', explanation: 'UTC 10時に2を足すので12です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'eg_java_e03', languageId: 'java', world: 'execute', title: 'Al-Azhar University', titleJa: 'アズハル大学', category: 'education', objective: 'collections', source: SRC.alAzhar, summaryJa: 'アズハル大学はカイロにあります。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Al-Azhar");\n    labels.add("Cairo");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Al-Azhar>Cairo', 'Cairo>Al-Azhar', 'Al-Azhar>', 'Cairo'], answer: 'Al-Azhar>Cairo', expectedOutput: 'Al-Azhar>Cairo', hint: '追加した順に result へ入ります。', explanation: 'Al-Azhar、Cairo の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'eg_java_e04', languageId: 'java', world: 'execute', title: 'Egyptian language label sample', titleJa: 'エジプトの言語ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.language, summaryJa: 'エジプトの言語・文字に関するサンプルデータを扱えます。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class ScriptType {\n  String label() { return "script"; }\n}\nclass Hieroglyphic extends ScriptType {\n  @Override\n  String label() { return "Hieroglyphic"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ScriptType type = new Hieroglyphic();\n    System.out.println(type.label());\n  }\n}', options: ['Hieroglyphic', 'script', 'ScriptType', 'error'], answer: 'Hieroglyphic', expectedOutput: 'Hieroglyphic', hint: '実体は Hieroglyphic です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_EG_java_01', languageId: 'java', world: 'execute', title: 'Egyptian governorate center records', titleJa: 'エジプトの県庁所在地レコード', category: 'geography-administration', objective: 'collections', source: SRC.governorates, summaryJa: 'エジプトの各県には県庁所在地が存在します。', prompt: 'HashMap とメソッドで人口規模が大きい県庁所在地を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 4; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> centers = new HashMap<>();\n    centers.put("Cairo", 9);\n    centers.put("Luxor", 1);\n    String result = "";\n    for (String city : centers.keySet()) if (isLarge(centers.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Cairo', 'Luxor', 'CairoLuxor', '9'], answer: 'Cairo', expectedOutput: 'Cairo', hint: 'population が4以上の city だけです。', explanation: 'Cairo の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_EG_java_02', languageId: 'java', world: 'execute', title: 'Nile research station records', titleJa: 'ナイル川研究拠点レコード', category: 'science-geography', objective: 'collections', source: SRC.nileValley, summaryJa: 'ナイル川流域ではエジプトの研究機関による観測データが扱われます。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station {\n  String name;\n  boolean active;\n  Station(String n, boolean a) { name = n; active = a; }\n  String label() { return name + ":active"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Aswan", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Aswan:active', 'Closed:active', 'Aswan', 'active:Aswan'], answer: 'Aswan:active', expectedOutput: 'Aswan:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Aswan だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'eg_java_b01', languageId: 'java', world: 'debug', title: 'Egyptian city-code lookup', titleJa: '都市コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.governorates, summaryJa: 'エジプトの都市コードは CAI、GIZ、LXR などです。', prompt: '都市コード LXR を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("LXR");\n    if (code == "LXR") System.out.println("Luxor");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("LXR") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("LXR");\n    if (code.equals("LXR")) System.out.println("Luxor");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。' },
  { id: 'eg_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero site code formatting', titleJa: '先頭ゼロ付き遺跡コードの形式', category: 'administration-formatting', objective: 'strings', source: SRC.postal, summaryJa: '遺跡コード風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル遺跡コード 0042 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 42;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "0042"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "0042";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID やコード形式は numeric type ではなく String として扱います。' },
  { id: 'eg_java_b03', languageId: 'java', world: 'debug', title: 'Museum visitor average', titleJa: '博物館来館者数の平均', category: 'museum', objective: 'numbers', source: SRC.egyptianMuseum, summaryJa: 'サンプルの来館者数データは平均計算の題材として扱えます。', prompt: '9と8の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = total / days;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または days を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int days = 2;\n    double average = (double) total / days;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_EG_java_01', languageId: 'java', world: 'debug', title: 'Siwa Oasis', titleJa: 'シワ・オアシス', category: 'geography-nature', objective: 'collections', source: SRC.siwa, summaryJa: 'シワ・オアシスはエジプトの西部砂漠にあります。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> populations = new HashMap<>();\n    populations.put("Siwa Oasis", "33000");\n    String popText = populations.get("Other Oasis");\n    int population = Integer.parseInt(popText);\n    System.out.println(population);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> populations = new HashMap<>();\n    populations.put("Siwa Oasis", "33000");\n    String popText = populations.get("Siwa Oasis");\n    try {\n      if (popText != null) System.out.println(Integer.parseInt(popText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
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
