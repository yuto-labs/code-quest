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

function makeFact(spec) {
  const backgroundJa = `${spec.summaryJa} ${spec.titleJa}は、イギリス（United Kingdom）の歴史・文化・地理・科学を理解するときの代表的な題材です。`;
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
