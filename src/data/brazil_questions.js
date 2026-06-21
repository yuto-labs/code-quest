const SRC = {
  brasilia: 'https://whc.unesco.org/en/list/445',
  portuguese: 'https://www.gov.br/mre/en/subjects/culture-and-education/culture/language',
  independence: 'https://www.britannica.com/place/Brazil/Independence',
  states: 'https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-structure.html',
  amazon: 'https://www.britannica.com/place/Amazon-Rainforest',
  pampulha: 'https://whc.unesco.org/en/list/1493',
  salvador: 'https://whc.unesco.org/en/list/309',
  iguacu: 'https://whc.unesco.org/en/list/355',
  rio2016: 'https://olympics.com/en/olympic-games/rio-2016',
  christ: 'https://www.britannica.com/topic/Christ-the-Redeemer',
  masp: 'https://masp.org.br/en',
  pantanal: 'https://whc.unesco.org/en/list/999',
  serraCapivara: 'https://whc.unesco.org/en/list/606',
  biomes: 'https://www.ibge.gov.br/en/geosciences/environmental-information/vegetation.html',
  real: 'https://www.bcb.gov.br/en/banknotesandcoins',
  postal: 'https://www.correios.com.br/',
  chapada: 'https://whc.unesco.org/en/list/1035',
  niemeyer: 'https://whc.unesco.org/en/list/445',
  sugarloaf: 'https://riotur.rio/en/que_fazer/sugarloaf/',
  capoeira: 'https://ich.unesco.org/en/RL/capoeira-circle-00892',
  amazonRiver: 'https://www.britannica.com/place/Amazon-River',
  maracana: 'https://www.britannica.com/place/Maracana-Stadium',
  ouroPreto: 'https://whc.unesco.org/en/list/124',
  noronha: 'https://whc.unesco.org/en/list/1000',
  architecture: 'https://whc.unesco.org/en/list/1493',
  bossaNova: 'https://www.britannica.com/art/bossa-nova',
  saoFrancisco: 'https://www.britannica.com/place/Sao-Francisco-River',
  nationalLibrary: 'https://www.bn.gov.br/en',
  coffee: 'https://www.britannica.com/place/Brazil/Agriculture',
  atlanticForest: 'https://whc.unesco.org/en/list/893',
  mercosur: 'https://www.mercosur.int/en/about-mercosur/mercosur-in-brief/',
  phone: 'https://www.gov.br/anatel/pt-br',
  pernambuco: 'https://www.britannica.com/place/Pernambuco',
  saoLuis: 'https://whc.unesco.org/en/list/821',
  congress: 'https://www.congressonacional.leg.br/',
  flag: 'https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais',
  tiradentes: 'https://www.britannica.com/biography/Tiradentes',
  samba: 'https://ich.unesco.org/en/RL/samba-de-roda-of-the-reconcavo-of-bahia-00101',
  regions: 'https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-division.html',
  paraty: 'https://whc.unesco.org/en/list/1308',
  centralAmazon: 'https://whc.unesco.org/en/list/998',
  valongo: 'https://whc.unesco.org/en/list/1548',
  santosDumont: 'https://www.britannica.com/biography/Alberto-Santos-Dumont',
  timeZones: 'https://www.timeanddate.com/time/zone/brazil',
  pelourinho: 'https://whc.unesco.org/en/list/309',
  languages: 'https://pib.socioambiental.org/en/Languages',
  coffeeStates: 'https://www.conab.gov.br/info-agro/safras/cafe',
  lencois: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/cerrado/lista-de-ucs/parna-dos-lencois-maranhenses',
};

const conceptMap = {
  python: {
    strings: 'variables',
    numbers: 'variables',
    condition: 'conditions',
    list: 'lists',
    dict: 'dicts',
    function: 'functions',
    loop: 'loops',
    format: 'variables',
  },
  javascript: {
    object: 'objects',
    strings: 'variables',
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
  return conceptMap[spec.languageId]?.[spec.objective] || 'variables';
}

function sourceRef(url) {
  return [{ title: 'Reference source', organization: new URL(url).hostname, url }];
}

function slug(value) {
  return String(value).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function factId(spec) {
  return `fact_${spec.id}`;
}

function entityKey(spec) {
  return `br:${slug(spec.title)}`;
}

function topicDetail(spec) {
  return `${spec.summaryJa} ${spec.titleJa}は、ブラジルの歴史・文化・地理を理解するうえで重要な題材です。ここでは必要な事実を問題文やデータ内に示し、名称だけで答えるのではなく、値の取り出し、条件判定、反復処理、デバッグなどの手順を通して確認できるようにしています。`;
}

function makeFact(spec) {
  const detail = topicDetail(spec);
  return {
    factId: factId(spec),
    countryId: 'BR',
    category: spec.category,
    entityKeys: [entityKey(spec)],
    aliases: [spec.title, spec.titleJa, spec.id],
    statement: spec.summaryJa,
    detail,
    factStatus: 'verified',
    sourceRefs: sourceRef(spec.source),
    allowedWorlds: [spec.world],
    allowedLanguageIds: [spec.languageId],
    relatedFactIds: [],
    titleJa: spec.titleJa,
    summaryJa: spec.summaryJa,
    detailJa: detail,
    backgroundJa: detail,
    historyJa: spec.historyJa || '',
    episodeJa: spec.episodeJa || '',
    keyPointsJa: spec.keyPointsJa || [spec.summaryJa, `${spec.titleJa}の場所・年・役割を区別する`, '必要な事実は問題内のデータから確認する'],
  };
}

function baseQuestion(spec, code, answer, completedCode, extra = {}) {
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
    executionSteps: spec.executionSteps || [
      '問題文とコード内のデータを確認する。',
      '空欄、条件、または参照する値をコードの流れに合わせて決める。',
      `期待される出力 ${spec.expectedOutput || answer} と一致するか確認する。`,
    ],
    commonMistakes: spec.commonMistakes || [
      'テーマ名だけで選ばず、コードが実際に参照している変数・キー・条件を見る。',
      '文字列は引用符、数値は引用符なしなど、言語ごとの書き方を区別する。',
    ],
    programmingExplanation: spec.programmingExplanation,
    countryNote: spec.summaryJa,
    sourceRefs: sourceRef(spec.source),
    factIds: [factId(spec)],
    entityKeys: [entityKey(spec)],
    debugExplanation: extra.debugExplanation,
    steps: extra.steps,
  };
}

function decode(spec) {
  return baseQuestion(spec, spec.code, spec.answer, spec.completedCode || spec.code.replace('___BLANK___', spec.answer), { blank: spec.answer });
}

function execute(spec) {
  return baseQuestion(spec, spec.code, spec.answer, spec.code, {
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
      question: '主な原因はどれですか。',
      options: [spec.cause, spec.wrongCause || '出力文の文字列だけが間違っている', spec.otherCause || 'データ件数が不足している'],
      answer: spec.cause,
      hint: spec.hint,
      explanation: spec.cause,
    },
    {
      stepNum: 2,
      stepTitle: '修正を選ぶ',
      prompt: 'Step 1 の原因を踏まえて、最小で安全な修正を選んでください。',
      question: '正しい修正はどれですか。',
      options: [spec.fix, spec.wrongFix || '対象データをすべて削除する', spec.otherFix || '常に固定文字列を出力する'],
      answer: spec.fix,
      hint: '原因になっている行だけを直す選択肢を探します。',
      explanation: spec.fix,
    },
    {
      stepNum: 3,
      stepTitle: '影響を説明',
      prompt: '修正後の理由と影響を確認します。',
      question: 'この修正で何が改善されますか。',
      options: [spec.impact, spec.wrongImpact || '例外を隠して処理を止める', spec.otherImpact || 'テーマデータを使わなくなる'],
      answer: spec.impact,
      hint: '修正後に安全に扱える値や範囲を見ます。',
      explanation: spec.impact,
    },
  ];
  return baseQuestion(spec, spec.code, steps.map(step => step.answer).join(' / '), spec.correctedCode, {
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
    countryId: 'BR',
    worldId: spec.world,
    languageId: spec.languageId,
    factIds: [factId(spec)],
    entityKeys: [entityKey(spec)],
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
  { id: 'br_py_d01', languageId: 'python', world: 'decode', title: 'Brasilia inauguration', titleJa: 'ブラジリアの首都移転', category: 'history-capital', objective: 'strings', source: SRC.brasilia, summaryJa: 'ブラジリアは1960年にブラジルの首都として開かれました。', prompt: 'ブラジリアは1960年にブラジルの首都として開かれました。下のコードを実行すると Brasilia:1960 と表示されるよう、空欄を埋めてください。', code: 'city = "Brasilia"\nyear = ___BLANK___\nprint(city + ":" + str(year))', answer: '1960', expectedOutput: 'Brasilia:1960', hint: '年は数値なので引用符なしで書きます。', explanation: 'year に 1960 を入れると str(year) で文字列化され、都市名と連結されます。', programmingExplanation: 'Python では文字列と数値を直接 + できないため、str() で数値を文字列に変換します。' },
  { id: 'br_py_d02', languageId: 'python', world: 'decode', title: 'Portuguese language in Brazil', titleJa: 'ブラジルのポルトガル語', category: 'language', objective: 'strings', source: SRC.portuguese, summaryJa: 'ポルトガル語はブラジルの公用語です。', prompt: 'ブラジルの公用語 Portuguese を使い、Brazil:Portuguese と表示されるよう f-string の空欄を埋めてください。', code: 'country = "Brazil"\nlanguage = "Portuguese"\nmessage = f"{country}:{___BLANK___}"\nprint(message)', answer: 'language', expectedOutput: 'Brazil:Portuguese', hint: 'f-string の波かっこの中には変数名を書きます。', explanation: 'language 変数の値が Portuguese なので、期待する出力になります。', programmingExplanation: 'f-string は `{変数名}` の位置に変数の値を展開します。' },
  { id: 'br_py_d03', languageId: 'python', world: 'decode', title: 'Brazilian independence', titleJa: 'ブラジル独立', category: 'history', objective: 'condition', source: SRC.independence, summaryJa: 'ブラジルは1822年に独立を宣言しました。', prompt: 'year が1822のとき independent と表示されるよう、if の条件を完成させてください。', code: 'year = 1822\nif ___BLANK___:\n    print("independent")\nelse:\n    print("other")', answer: 'year == 1822', expectedOutput: 'independent', hint: '値が等しいかは == で比較します。', explanation: 'year == 1822 が True になるため independent が出力されます。', programmingExplanation: '= は代入、== は比較です。if は比較結果が True のときだけ内側を実行します。' },
  { id: 'br_py_d04', languageId: 'python', world: 'decode', title: 'Brazilian states and Federal District', titleJa: 'ブラジルの州と連邦区', category: 'administration', objective: 'list', source: SRC.states, summaryJa: 'ブラジルには26州と1つの連邦区があります。', prompt: 'リストから Federal District を取り出して表示するよう、添字を埋めてください。', code: 'units = ["26 states", "Federal District"]\nprint(units[___BLANK___])', answer: '1', expectedOutput: 'Federal District', hint: 'リストは0番目から数えます。', explanation: 'Federal District は2番目の要素なので添字は 1 です。', programmingExplanation: 'Python のリストアクセスでは `list[0]` が最初、`list[1]` が2番目です。' },
  { id: 'br_py_d05', languageId: 'python', world: 'decode', title: 'Amazon rainforest in Brazil', titleJa: 'ブラジルとアマゾン熱帯雨林', category: 'geography-nature', objective: 'dict', source: SRC.amazon, summaryJa: 'アマゾン熱帯雨林はブラジルを含む南米の広大な熱帯雨林です。', prompt: '辞書から region を取り出して Amazon と表示されるよう、キーを埋めてください。', code: 'forest = {"country": "Brazil", "region": "Amazon"}\nprint(forest[___BLANK___])', answer: '"region"', expectedOutput: 'Amazon', hint: 'Amazon という値に対応するキーを指定します。', explanation: '"region" キーに Amazon が入っています。', programmingExplanation: '辞書はキーと値の対応表です。角括弧にキーを入れて値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_BR_python_01', languageId: 'python', world: 'decode', title: 'Pampulha Modern Ensemble', titleJa: 'パンプーリャ近代建築群', category: 'world-heritage-architecture', objective: 'function', source: SRC.pampulha, summaryJa: 'パンプーリャ近代建築群はベロオリゾンテにある世界遺産です。', prompt: 'Pampulha が Belo Horizonte にあるときだけ Pampulha:Belo Horizonte と表示するよう、条件の空欄を埋めてください。', code: 'name = "Pampulha"\ncity = "Belo Horizonte"\ndef label(site, place):\n    if ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: 'place == "Belo Horizonte"', expectedOutput: 'Pampulha:Belo Horizonte', hint: '関数内の引数 place と都市名を比較します。', explanation: 'place が Belo Horizonte と一致するので、site と place を連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせ、引数の値で戻り値を切り替えます。' },
  { id: 'final_decode_BR_python_02', languageId: 'python', world: 'decode', title: 'Historic Centre of Salvador de Bahia', titleJa: 'サルヴァドール・デ・バイア歴史地区', category: 'world-heritage-history', objective: 'loop', source: SRC.salvador, summaryJa: 'サルヴァドールはブラジル最初の植民地首都として知られます。', prompt: 'capital が True の都市名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'cities = [\n    {"name": "Salvador", "capital": True},\n    {"name": "Recife", "capital": False}\n]\nfor city in cities:\n    if ___BLANK___:\n        print(city["name"])', answer: 'city["capital"]', expectedOutput: 'Salvador', hint: '各辞書の capital キーは True / False です。', explanation: 'Salvador の capital だけが True なので、Salvador が出力されます。', programmingExplanation: 'リスト内の辞書をループで取り出し、真偽値のフィールドを条件に使います。' },
  { id: 'final_decode_BR_python_03', languageId: 'python', world: 'decode', title: 'Iguacu National Park', titleJa: 'イグアス国立公園', category: 'world-heritage-nature', objective: 'dict', source: SRC.iguacu, summaryJa: 'イグアス国立公園はブラジルのパラナ州にあります。', prompt: '辞書と関数を使って Iguacu:Parana と表示されるよう、参照キーを埋めてください。', code: 'park = {"name": "Iguacu", "state": "Parana"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(park))', answer: '"state"', expectedOutput: 'Iguacu:Parana', hint: 'Parana が入っているキーを指定します。', explanation: '"state" キーから Parana を取り出して name と連結します。', programmingExplanation: '辞書アクセス、関数の引数、f-string の組み合わせです。' },
];

const pyExecute = [
  { id: 'br_py_e01', languageId: 'python', world: 'execute', title: 'Rio de Janeiro 2016 Olympics', titleJa: 'リオデジャネイロ2016年大会', category: 'sports-history', objective: 'function', source: SRC.rio2016, summaryJa: 'リオデジャネイロは2016年夏季オリンピックを開催しました。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def host_label(city, year):\n    return f"{city}:{year}"\nprint(host_label("Rio de Janeiro", 2016))', options: ['Rio de Janeiro:2016', '2016:Rio de Janeiro', 'Rio:Olympics', 'Brazil:2016'], answer: 'Rio de Janeiro:2016', expectedOutput: 'Rio de Janeiro:2016', hint: 'return の f-string で city と year の順番を見ます。', explanation: 'city が先、year が後ろなので Rio de Janeiro:2016 です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。' },
  { id: 'br_py_e02', languageId: 'python', world: 'execute', title: 'Christ the Redeemer', titleJa: 'コルコバードのキリスト像', category: 'landmark', objective: 'dict', source: SRC.christ, summaryJa: 'コルコバードのキリスト像はリオデジャネイロに立つランドマークです。', prompt: '辞書 lookup の結果を選んでください。', code: 'landmark = {"name": "Christ the Redeemer", "city": "Rio de Janeiro"}\nprint(landmark["city"])', options: ['Rio de Janeiro', 'Christ the Redeemer', 'Brazil', 'city'], answer: 'Rio de Janeiro', expectedOutput: 'Rio de Janeiro', hint: '"city" キーの値を見ます。', explanation: 'landmark["city"] は Rio de Janeiro を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。' },
  { id: 'br_py_e03', languageId: 'python', world: 'execute', title: 'Sao Paulo Museum of Art', titleJa: 'サンパウロ美術館', category: 'museum-art', objective: 'loop', source: SRC.masp, summaryJa: 'MASP はサンパウロと結びつく美術館です。', prompt: 'リストを順に連結した出力を選んでください。', code: 'parts = ["MASP", "Sao Paulo"]\nlabel = ""\nfor part in parts:\n    label += part + "|"\nprint(label[:-1])', options: ['MASP|Sao Paulo', 'Sao Paulo|MASP', 'MASP|', 'Sao Paulo'], answer: 'MASP|Sao Paulo', expectedOutput: 'MASP|Sao Paulo', hint: 'parts の並び順と最後の | の削除を見ます。', explanation: 'MASP、Sao Paulo の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライス `[:-1]` で末尾1文字を除きます。' },
  { id: 'br_py_e04', languageId: 'python', world: 'execute', title: 'Pantanal wetlands', titleJa: 'パンタナル湿地', category: 'geography-nature', objective: 'loop', source: SRC.pantanal, summaryJa: 'パンタナルは世界最大級の熱帯湿地の一つとして知られます。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Pantanal", "type": "wetland"},\n    {"name": "Amazon", "type": "forest"}\n]\nselected = [r["name"] for r in records if r["type"] == "wetland"]\nprint(selected[0])', options: ['Pantanal', 'Amazon', 'wetland', 'forest'], answer: 'Pantanal', expectedOutput: 'Pantanal', hint: 'type が wetland の辞書だけ残します。', explanation: 'Pantanal の type だけが wetland なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。' },
];

const pyFinalExecute = [
  { id: 'final_execute_BR_python_01', languageId: 'python', world: 'execute', title: 'Serra da Capivara National Park', titleJa: 'セラ・ダ・カピバラ国立公園', category: 'world-heritage-archaeology', objective: 'loop', source: SRC.serraCapivara, summaryJa: 'セラ・ダ・カピバラ国立公園は考古遺跡と岩絵で知られます。', prompt: '記録を絞り、year の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "rock art", "kind": "archaeology", "year": 1991},\n    {"name": "trail", "kind": "nature", "year": 2000},\n    {"name": "site", "kind": "archaeology", "year": 1989}\n]\nselected = sorted([r for r in records if r["kind"] == "archaeology"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['site>rock art', 'rock art>site', 'trail>site', 'rock art>trail'], answer: 'site>rock art', expectedOutput: 'site>rock art', hint: 'kind で絞ったあと year の昇順です。', explanation: 'archaeology は site(1989) と rock art(1991) で、昇順に site が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。' },
  { id: 'final_execute_BR_python_02', languageId: 'python', world: 'execute', title: 'Brazilian biomes dataset', titleJa: 'ブラジルのバイオーム', category: 'geography-nature', objective: 'dict', source: SRC.biomes, summaryJa: 'ブラジルにはAmazon、Cerrado、Caatinga、Atlantic Forest、Pantanal、Pampaなどの主要バイオームがあります。', prompt: '辞書とリストから protected が True の件数を集計した結果を選んでください。', code: 'biomes = [\n    {"name": "Amazon", "protected": True},\n    {"name": "Cerrado", "protected": True},\n    {"name": "Caatinga", "protected": False},\n    {"name": "Atlantic Forest", "protected": True},\n    {"name": "Pantanal", "protected": False},\n    {"name": "Pampa", "protected": False}\n]\ncount = sum(1 for biome in biomes if biome["protected"])\nprint(count)', options: ['3', '6', '2', 'Amazon'], answer: '3', expectedOutput: '3', hint: 'protected が True の辞書だけ数えます。', explanation: 'Amazon、Cerrado、Atlantic Forest の3件が True です。', programmingExplanation: '条件式を満たすたびに 1 を足し、sum で合計します。' },
];

const pyDebug = [
  { id: 'br_py_b01', languageId: 'python', world: 'debug', title: 'Carnival date labels', titleJa: 'カーニバルの日付ラベル', category: 'culture-festival', objective: 'loop', source: SRC.samba, summaryJa: 'ブラジルのカーニバルは音楽やパレードと結びつく大きな文化行事です。', prompt: '3つのイベントラベルをすべて表示したいコードです。境界条件の不具合を直します。', code: 'labels = ["opening", "parade", "final"]\nfor i in range(len(labels) + 1):\n    print(labels[i])', cause: 'range(len(labels) + 1) が存在しない添字まで進む', fix: 'range(len(labels)) に修正する', impact: '3つのラベルだけを範囲外エラーなしで表示できる', why: '最後の有効な添字は len(labels) - 1 だからです。', correctedCode: 'labels = ["opening", "parade", "final"]\nfor i in range(len(labels)):\n    print(labels[i])', hint: '最後の i が len(labels) になるか確認します。', explanation: 'len + 1 により範囲外アクセスが起きます。', programmingExplanation: 'range の終了値は含まれませんが、len + 1 だと len まで到達してしまいます。' },
  { id: 'br_py_b02', languageId: 'python', world: 'debug', title: 'Brazilian real currency formatting', titleJa: 'ブラジルレアルの表示', category: 'finance', objective: 'format', source: SRC.real, summaryJa: 'ブラジルの通貨はレアルです。', prompt: '金額を R$10.50 と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint("R$" + amount + 0)', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、R$10.50 と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"R${amount:.2f}")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。' },
  { id: 'br_py_b03', languageId: 'python', world: 'debug', title: 'Brazilian postal code format', titleJa: 'ブラジル郵便番号の形式', category: 'administration', objective: 'strings', source: SRC.postal, summaryJa: 'ブラジルの郵便番号は表示形式を保つため文字列として扱うのが安全です。', prompt: '先頭ゼロを含む可能性がある郵便番号を表示するコードです。数値保存の不具合を直します。', code: 'postal_code = 1234567\nprint(str(postal_code).zfill(8))', cause: '郵便番号を数値として保存すると先頭ゼロや区切りを保持できない', fix: '郵便番号を最初から文字列として保存する', impact: '先頭ゼロを含むコードも失わずに表示できる', why: '識別番号は計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postal_code = "01234567"\nprint(postal_code)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID や郵便番号は arithmetic ではなく文字列データとして扱います。' },
];

const pyFinalDebug = [
  { id: 'final_debug_BR_python_01', languageId: 'python', world: 'debug', title: 'Chapada dos Veadeiros', titleJa: 'シャパーダ・ドス・ヴェアデイロス', category: 'world-heritage-nature', objective: 'dict', source: SRC.chapada, summaryJa: 'シャパーダ・ドス・ヴェアデイロス国立公園はゴイアス州にあります。', prompt: '面積データを数値化し、欠損を安全に扱いながら Goiás の公園だけを選ぶコードです。', code: 'parks = [{"name": "Chapada", "state": "Goias", "area": "2405"}, {"name": "Other", "state": "Goias"}]\nlarge = []\nfor park in parks:\n    if park["state"] == "Goias" and int(park["area"]) > 1000:\n        large.append(park["name"])\nprint(large)', cause: 'area がない辞書でも park["area"] を直接読んでいる', fix: 'park.get("area") を確認し、値がある場合だけ int に変換する', impact: '欠損行を安全に飛ばし、数値化できる公園だけを判定できる', why: 'get はキーがない場合に None を返せるため、変換前に確認できます。', correctedCode: 'parks = [{"name": "Chapada", "state": "Goias", "area": "2405"}, {"name": "Other", "state": "Goias"}]\nlarge = []\nfor park in parks:\n    area = park.get("area")\n    if park["state"] == "Goias" and area is not None and int(area) > 1000:\n        large.append(park["name"])\nprint(large)', hint: '2件目の辞書に area キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換、複合条件を順に組み合わせます。' },
];

const jsDecode = [
  { id: 'br_js_d01', languageId: 'javascript', world: 'decode', title: 'Oscar Niemeyer and Brasilia', titleJa: 'オスカー・ニーマイヤーとブラジリア', category: 'architecture', objective: 'object', source: SRC.niemeyer, summaryJa: 'オスカー・ニーマイヤーはブラジリアと結びつく建築家の一人です。', prompt: 'オブジェクトから architect を取り出して Niemeyer と表示されるよう、空欄を埋めてください。', code: 'const record = { city: "Brasilia", architect: "Niemeyer" };\nconsole.log(record.___BLANK___);', answer: 'architect', expectedOutput: 'Niemeyer', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'record.architect が Niemeyer を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'br_js_d02', languageId: 'javascript', world: 'decode', title: 'Sugarloaf Mountain', titleJa: 'シュガーローフ・マウンテン', category: 'geography-landmark', objective: 'strings', source: SRC.sugarloaf, summaryJa: 'シュガーローフ・マウンテンはリオデジャネイロにあります。', prompt: 'テンプレートリテラルで Sugarloaf:Rio de Janeiro と表示されるよう、city の値を埋めてください。', code: 'const name = "Sugarloaf";\nconst city = ___BLANK___;\nconsole.log(`${name}:${city}`);', answer: '"Rio de Janeiro"', expectedOutput: 'Sugarloaf:Rio de Janeiro', hint: 'city に入る文字列を引用符付きで書きます。', explanation: 'city に Rio de Janeiro が入り、テンプレートリテラルに展開されます。', programmingExplanation: '`${変数}` は変数の値を文字列に埋め込みます。' },
  { id: 'br_js_d03', languageId: 'javascript', world: 'decode', title: 'Capoeira', titleJa: 'カポエイラ', category: 'traditional-culture', objective: 'array', source: SRC.capoeira, summaryJa: 'カポエイラは武術、ダンス、音楽を組み合わせるブラジルの文化です。', prompt: '配列から dance を取り出して表示する添字を埋めてください。', code: 'const parts = ["martial art", "dance", "music"];\nconsole.log(parts[___BLANK___]);', answer: '1', expectedOutput: 'dance', hint: '配列は0番目から数えます。', explanation: 'dance は2番目の要素なので添字は 1 です。', programmingExplanation: '配列のインデックスアクセスでは 0 が最初の要素です。' },
  { id: 'br_js_d04', languageId: 'javascript', world: 'decode', title: 'Amazon River', titleJa: 'アマゾン川', category: 'geography-nature', objective: 'switch', source: SRC.amazonRiver, summaryJa: 'アマゾン川は南米を代表する大河です。', prompt: 'river が Amazon のとき South America と表示されるよう、case を埋めてください。', code: 'const river = "Amazon";\nswitch (river) {\n  case ___BLANK___:\n    console.log("South America");\n    break;\n  default:\n    console.log("other");\n}', answer: '"Amazon"', expectedOutput: 'South America', hint: 'case には river と一致する文字列を書きます。', explanation: 'case "Amazon" が一致し、South America が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'br_js_d05', languageId: 'javascript', world: 'decode', title: 'Maracana Stadium', titleJa: 'マラカナン・スタジアム', category: 'sports-architecture', objective: 'loop', source: SRC.maracana, summaryJa: 'マラカナン・スタジアムはリオデジャネイロにあります。', prompt: 'for...of で Rio de Janeiro の stadium だけを表示するよう、条件の空欄を埋めてください。', code: 'const places = [\n  { name: "Maracana", city: "Rio de Janeiro" },\n  { name: "Other", city: "Sao Paulo" }\n];\nfor (const place of places) {\n  if (___BLANK___) console.log(place.name);\n}', answer: 'place.city === "Rio de Janeiro"', expectedOutput: 'Maracana', hint: '各 place の city を比較します。', explanation: 'Maracana の city だけが Rio de Janeiro なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
];

const jsFinalDecode = [
  { id: 'final_decode_BR_javascript_01', languageId: 'javascript', world: 'decode', title: 'Ouro Preto', titleJa: 'オウロ・プレット', category: 'world-heritage-history', objective: 'array', source: SRC.ouroPreto, summaryJa: 'オウロ・プレットはミナスジェライス州の歴史都市です。', prompt: 'array methods で Minas Gerais の historic town を取り出す条件を埋めてください。', code: 'const towns = [\n  { name: "Ouro Preto", state: "Minas Gerais", historic: true },\n  { name: "Other", state: "Bahia", historic: true }\n];\nconst found = towns.filter(town => ___BLANK___)[0];\nconsole.log(found.name);', answer: 'town.state === "Minas Gerais" && town.historic', expectedOutput: 'Ouro Preto', hint: 'state と historic の両方を確認します。', explanation: 'Ouro Preto だけが Minas Gerais かつ historic です。', programmingExplanation: 'filter に複合条件を渡し、残った配列の先頭要素を取り出します。' },
  { id: 'final_decode_BR_javascript_02', languageId: 'javascript', world: 'decode', title: 'Fernando de Noronha', titleJa: 'フェルナンド・デ・ノローニャ', category: 'world-heritage-nature', objective: 'object', source: SRC.noronha, summaryJa: 'フェルナンド・デ・ノローニャはブラジルに属する群島です。', prompt: 'find で Brazil に属する archipelago を探す条件を埋めてください。', code: 'const islands = [\n  { name: "Fernando de Noronha", country: "Brazil", type: "archipelago" },\n  { name: "Other", country: "Other", type: "island" }\n];\nconst island = islands.find(item => ___BLANK___);\nconsole.log(island.name);', answer: 'item.country === "Brazil" && item.type === "archipelago"', expectedOutput: 'Fernando de Noronha', hint: 'country と type を両方見ます。', explanation: 'Brazil かつ archipelago の record が見つかります。', programmingExplanation: 'find は条件に合う最初の要素を返します。' },
  { id: 'final_decode_BR_javascript_03', languageId: 'javascript', world: 'decode', title: 'Brazilian modernist architecture', titleJa: 'ブラジル近代建築', category: 'architecture', objective: 'class', source: SRC.architecture, summaryJa: 'ブラジル近代建築はブラジリアやパンプーリャの建築群と結びつきます。', prompt: 'class で作った建物レコードを map し、Pampulha:modernist と表示されるよう空欄を埋めてください。', code: 'class Building {\n  constructor(name, style) { this.name = name; this.style = style; }\n}\nconst buildings = [new Building("Pampulha", ___BLANK___)];\nconsole.log(buildings.map(item => `${item.name}:${item.style}`).join(","));', answer: '"modernist"', expectedOutput: 'Pampulha:modernist', hint: 'constructor の style に入る文字列です。', explanation: 'style に modernist が入り、map で表示用文字列へ変換されます。', programmingExplanation: 'class の constructor はインスタンス作成時にプロパティを初期化します。' },
];

const jsExecute = [
  { id: 'br_js_e01', languageId: 'javascript', world: 'execute', title: 'Bossa nova', titleJa: 'ボサノヴァ', category: 'music-culture', objective: 'array', source: SRC.bossaNova, summaryJa: 'ボサノヴァはブラジルの音楽スタイルです。', prompt: 'map と join の出力を選んでください。', code: 'const styles = ["bossa", "nova"];\nconst label = styles.map(part => part.toUpperCase()).join("-");\nconsole.log(label);', options: ['BOSSA-NOVA', 'bossa-nova', 'BOSSA,NOVA', 'nova-bossa'], answer: 'BOSSA-NOVA', expectedOutput: 'BOSSA-NOVA', hint: '各要素を大文字化して - で結合します。', explanation: 'bossa と nova が大文字になり、ハイフンで連結されます。', programmingExplanation: 'map は各要素を変換し、join は配列を文字列にまとめます。' },
  { id: 'br_js_e02', languageId: 'javascript', world: 'execute', title: 'Sao Francisco River', titleJa: 'サンフランシスコ川', category: 'geography-nature', objective: 'array', source: SRC.saoFrancisco, summaryJa: 'サンフランシスコ川はブラジルの重要な河川です。', prompt: '区間データを reduce で合計した出力を選んでください。', code: 'const segments = [200, 300, 500];\nconst total = segments.reduce((sum, length) => sum + length, 0);\nconsole.log(total);', options: ['1000', '500', '200300500', '3'], answer: '1000', expectedOutput: '1000', hint: '数値を左から足していきます。', explanation: '200 + 300 + 500 = 1000 です。', programmingExplanation: 'reduce は累積値 sum に各要素を加えて1つの結果を作ります。' },
  { id: 'br_js_e03', languageId: 'javascript', world: 'execute', title: 'National Library of Brazil', titleJa: 'ブラジル国立図書館', category: 'library-culture', objective: 'object', source: SRC.nationalLibrary, summaryJa: 'ブラジル国立図書館はリオデジャネイロにあります。', prompt: 'object と array の反復で作られる出力を選んでください。', code: 'const library = { city: "Rio de Janeiro", collections: ["maps", "books"] };\nlet result = library.city;\nfor (const item of library.collections) {\n  result += ":" + item;\n}\nconsole.log(result);', options: ['Rio de Janeiro:maps:books', 'maps:books:Rio de Janeiro', 'Rio de Janeiro', 'books:maps'], answer: 'Rio de Janeiro:maps:books', expectedOutput: 'Rio de Janeiro:maps:books', hint: 'result は city から始まり、配列順に追加されます。', explanation: 'city の後ろに maps、books が順に追加されます。', programmingExplanation: 'オブジェクトの中の配列を for...of で順に処理します。' },
  { id: 'br_js_e04', languageId: 'javascript', world: 'execute', title: 'Brazilian coffee history', titleJa: 'ブラジルのコーヒー史', category: 'industry-agriculture', objective: 'function', source: SRC.coffee, summaryJa: 'コーヒーはブラジルの農業史と深く結びつく作物です。', prompt: '関数、条件、戻り値を追跡した出力を選んでください。', code: 'function coffeeLabel(crop, exportCrop) {\n  if (exportCrop) return `${crop}:export`;\n  return `${crop}:local`;\n}\nconsole.log(coffeeLabel("coffee", true));', options: ['coffee:export', 'coffee:local', 'export:coffee', 'true'], answer: 'coffee:export', expectedOutput: 'coffee:export', hint: 'exportCrop が true の分岐です。', explanation: 'true なので最初の return が実行されます。', programmingExplanation: 'if の条件が true のとき、関数はその return で終了します。' },
];

const jsFinalExecute = [
  { id: 'final_execute_BR_javascript_01', languageId: 'javascript', world: 'execute', title: 'Atlantic Forest reserves', titleJa: '大西洋岸森林保護区', category: 'world-heritage-nature', objective: 'array', source: SRC.atlanticForest, summaryJa: '大西洋岸森林はブラジルの主要なバイオームの一つです。', prompt: 'objects を条件で絞り、名前をソートした出力を選んでください。', code: 'const reserves = [\n  { name: "Serra", biome: "Atlantic Forest", area: 2 },\n  { name: "Amazon", biome: "Amazon", area: 5 },\n  { name: "Coast", biome: "Atlantic Forest", area: 3 }\n];\nconst names = reserves.filter(r => r.biome === "Atlantic Forest").map(r => r.name).sort();\nconsole.log(names.join(">"));', options: ['Coast>Serra', 'Serra>Coast', 'Amazon>Coast', 'Coast>Amazon>Serra'], answer: 'Coast>Serra', expectedOutput: 'Coast>Serra', hint: 'biome で絞ったあと、名前をアルファベット順にします。', explanation: 'Coast と Serra が残り、sort で Coast が先になります。', programmingExplanation: 'filter、map、sort、join を順に適用します。' },
  { id: 'final_execute_BR_javascript_02', languageId: 'javascript', world: 'execute', title: 'Mercosur founding members', titleJa: 'メルコスール創設加盟国', category: 'international-relations', objective: 'array', source: SRC.mercosur, summaryJa: 'メルコスールは南米の地域統合枠組みで、創設加盟国データとして複数国を扱えます。', prompt: 'founding が true の国を地域別に集計した結果を選んでください。', code: 'const groups = [\n  { region: "South America", members: [{ name: "Brazil", founding: true }, { name: "Argentina", founding: true }] },\n  { region: "Other", members: [{ name: "Observer", founding: false }] }\n];\nconst total = groups.reduce((sum, group) => sum + group.members.filter(m => m.founding).length, 0);\nconsole.log(total);', options: ['2', '3', '1', 'Brazil'], answer: '2', expectedOutput: '2', hint: '内側の members で founding が true のものだけ数えます。', explanation: 'Brazil と Argentina の2件が true です。', programmingExplanation: 'reduce と filter を組み合わせ、入れ子配列の件数を合計します。' },
];

const jsDebug = [
  { id: 'br_js_b01', languageId: 'javascript', world: 'debug', title: 'Brazilian phone-number formatting', titleJa: 'ブラジルの電話番号形式', category: 'administration', objective: 'strings', source: SRC.phone, summaryJa: '電話番号は桁数や区切りを保つため文字列として扱うのが安全です。', prompt: '電話番号を (21) 99999-0000 と整形したいコードです。長さと切り出しの不具合を直します。', code: 'const digits = "21999990000";\nif (digits.length === 10) {\n  console.log(`(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`);\n}', cause: '11桁の番号なのに length === 10 と判定している', fix: 'length === 11 に修正してから slice する', impact: '11桁の番号を正しく市外局番・前半・後半に分けられる', why: 'サンプル digits は11文字だからです。', correctedCode: 'const digits = "21999990000";\nif (digits.length === 11) {\n  console.log(`(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`);\n}', hint: 'digits の文字数を数えます。', explanation: '条件が 10 のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。' },
  { id: 'br_js_b02', languageId: 'javascript', world: 'debug', title: 'Recife and Olinda labels', titleJa: 'レシフェとオリンダ', category: 'geography-city', objective: 'object', source: SRC.pernambuco, summaryJa: 'レシフェとオリンダはペルナンブーコ州の都市です。', prompt: 'Pernambuco の都市だけを表示したいコードです。プロパティ名の不具合を直します。', code: 'const cities = [{ name: "Recife", state: "Pernambuco" }, { name: "Olinda", state: "Pernambuco" }];\nconst labels = cities.filter(city => city.region === "Pernambuco").map(city => city.name);\nconsole.log(labels.join(","));', cause: 'データには state があるのに region を参照している', fix: 'city.state === "Pernambuco" に修正する', impact: 'Recife と Olinda の両方を正しく選べる', why: '存在しない region は undefined になり、比較が true になりません。', correctedCode: 'const cities = [{ name: "Recife", state: "Pernambuco" }, { name: "Olinda", state: "Pernambuco" }];\nconst labels = cities.filter(city => city.state === "Pernambuco").map(city => city.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。' },
  { id: 'br_js_b03', languageId: 'javascript', world: 'debug', title: 'Amazon basin record', titleJa: 'アマゾン流域レコード', category: 'geography-nature', objective: 'object', source: SRC.amazon, summaryJa: 'アマゾン流域はブラジルを含む広い地域にまたがります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Amazon basin" };\nconsole.log(record.detail.country.toUpperCase());', cause: 'record.detail が undefined のまま country を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Amazon basin" };\nconst country = record.detail?.country ?? "unknown";\nconsole.log(country.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。' },
];

const jsFinalDebug = [
  { id: 'final_debug_BR_javascript_01', languageId: 'javascript', world: 'debug', title: 'Historic Centre of Sao Luis', titleJa: 'サン・ルイス歴史地区', category: 'world-heritage-history', objective: 'object', source: SRC.saoLuis, summaryJa: 'サン・ルイスはマラニョン州の州都で、歴史地区が世界遺産に登録されています。', prompt: 'サン・ルイスのレコードを安全に読み、capital が true の場合だけ表示したいコードです。', code: 'const site = { name: "Sao Luis", state: "Maranhao", capital: true };\nif (site.capitol === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.city);', cause: 'capital を capitol と誤記し、details も存在確認なしで読んでいる', fix: 'site.capital を比較し、site.details?.city ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Sao Luis", state: "Maranhao", capital: true };\nif (site.capital === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.city ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。' },
];

const javaDecode = [
  { id: 'br_java_d01', languageId: 'java', world: 'decode', title: 'National Congress of Brazil', titleJa: 'ブラジル国民会議', category: 'politics-architecture', objective: 'strings', source: SRC.congress, summaryJa: 'ブラジルの国民会議はブラジリアにあります。', prompt: 'Brazil Congress:Brasilia と表示されるよう、city の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String place = "Brazil Congress";\n    String city = ___BLANK___;\n    System.out.println(place + ":" + city);\n  }\n}', answer: '"Brasilia"', expectedOutput: 'Brazil Congress:Brasilia', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'city に "Brasilia" を入れると、+ で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'br_java_d02', languageId: 'java', world: 'decode', title: 'Brazilian flag motto', titleJa: 'ブラジル国旗の標語', category: 'national-symbol', objective: 'numbers', source: SRC.flag, summaryJa: 'ブラジル国旗には「Ordem e Progresso」という標語があります。', prompt: '標語の単語数2を使い Motto words:2 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int words = ___BLANK___;\n    String motto = "Motto words:" + words;\n    System.out.println(motto);\n  }\n}', answer: '2', expectedOutput: 'Motto words:2', hint: 'int なので引用符なしの数値です。', explanation: 'words に 2 を入れると文字列連結で Motto words:2 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'br_java_d03', languageId: 'java', world: 'decode', title: 'Tiradentes', titleJa: 'チラデンテス', category: 'history-person', objective: 'condition', source: SRC.tiradentes, summaryJa: 'チラデンテスはインコンフィデンシア・ミネイラと結びつく人物です。', prompt: 'movement が Inconfidencia Mineira のとき Tiradentes と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String movement = "Inconfidencia Mineira";\n    if (___BLANK___) {\n      System.out.println("Tiradentes");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'movement.equals("Inconfidencia Mineira")', expectedOutput: 'Tiradentes', hint: 'Java の String 比較は equals を使います。', explanation: 'movement.equals(...) が true なので Tiradentes が出力されます。', programmingExplanation: 'String の内容比較には == ではなく equals を使います。' },
  { id: 'br_java_d04', languageId: 'java', world: 'decode', title: 'Samba schools', titleJa: 'サンバ学校', category: 'traditional-culture', objective: 'switch', source: SRC.samba, summaryJa: 'サンバ学校はカーニバルのパレード文化と結びつきます。', prompt: 'role が drum のとき bateria と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String role = "drum";\n    switch (role) {\n      case ___BLANK___:\n        System.out.println("bateria");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"drum"', expectedOutput: 'bateria', hint: 'case には role と同じ文字列を書きます。', explanation: 'case "drum" が一致し、bateria が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'br_java_d05', languageId: 'java', world: 'decode', title: 'Brazilian regions', titleJa: 'ブラジルの地域区分', category: 'geography-administration', objective: 'array', source: SRC.regions, summaryJa: 'ブラジルの地域区分には North、Northeast、Central-West、Southeast、South があります。', prompt: 'regions 配列を拡張 for で読み、South だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] regions = {"North", "Northeast", "Central-West", "Southeast", "South"};\n    for (String region : regions) {\n      if (___BLANK___) System.out.println(region);\n    }\n  }\n}', answer: 'region.equals("South")', expectedOutput: 'South', hint: 'String の内容比較は equals です。', explanation: 'region が South のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_BR_java_01', languageId: 'java', world: 'decode', title: 'Paraty and Ilha Grande', titleJa: 'パラチーとイーリャ・グランジ', category: 'world-heritage-mixed', objective: 'method', source: SRC.paraty, summaryJa: 'パラチーとイーリャ・グランジは文化と生物多様性に関わる世界遺産です。', prompt: 'culture と biodiversity が両方 true のとき mixed と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(boolean culture, boolean biodiversity) {\n    if (culture && biodiversity) return "mixed";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(true, ___BLANK___));\n  }\n}', answer: 'true', expectedOutput: 'mixed', hint: '&& の両方を true にします。', explanation: 'true と true が渡るため mixed が返ります。', programmingExplanation: 'メソッド、boolean 引数、&& 条件を組み合わせています。' },
  { id: 'final_decode_BR_java_02', languageId: 'java', world: 'decode', title: 'Central Amazon Conservation Complex', titleJa: '中央アマゾン保全地域群', category: 'world-heritage-nature', objective: 'collections', source: SRC.centralAmazon, summaryJa: '中央アマゾン保全地域群はブラジルの自然世界遺産です。', prompt: 'ArrayList から natural の項目だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Site { String name; String type; Site(String n, String t){ name=n; type=t; } }\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Site> sites = new ArrayList<>();\n    sites.add(new Site("Central Amazon", "natural"));\n    sites.add(new Site("Other", "cultural"));\n    for (Site site : sites) {\n      if (___BLANK___) System.out.println(site.name);\n    }\n  }\n}', answer: 'site.type.equals("natural")', expectedOutput: 'Central Amazon', hint: 'site.type の文字列内容を比較します。', explanation: 'Central Amazon の type だけが natural です。', programmingExplanation: 'ArrayList、オブジェクト、拡張 for、String.equals を組み合わせています。' },
  { id: 'final_decode_BR_java_03', languageId: 'java', world: 'decode', title: 'Cais do Valongo', titleJa: 'ヴァロンゴ埠頭', category: 'world-heritage-history', objective: 'class', source: SRC.valongo, summaryJa: 'ヴァロンゴ埠頭はリオデジャネイロにある世界遺産です。', prompt: 'HashMap から Valongo の都市を取り出し Valongo:Rio de Janeiro と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Wharf { String name; String city; Wharf(String n, String c){ name=n; city=c; } }\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Wharf> map = new HashMap<>();\n    map.put("Valongo", new Wharf("Valongo", "Rio de Janeiro"));\n    Wharf wharf = map.get(___BLANK___);\n    System.out.println(wharf.name + ":" + wharf.city);\n  }\n}', answer: '"Valongo"', expectedOutput: 'Valongo:Rio de Janeiro', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の Valongo キーから wharf オブジェクトを取り出します。', programmingExplanation: 'class、constructor、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'br_java_e01', languageId: 'java', world: 'execute', title: 'Santos Dumont', titleJa: 'サントス・デュモン', category: 'invention-science', objective: 'strings', source: SRC.santosDumont, summaryJa: 'アルベルト・サントス・デュモンはブラジルの航空の先駆者として知られます。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String pioneer = "Santos Dumont";\n    if (pioneer.equals("Santos Dumont")) System.out.println("aviation");\n    else System.out.println("other");\n  }\n}', options: ['aviation', 'other', 'Santos Dumont', 'true'], answer: 'aviation', expectedOutput: 'aviation', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので aviation が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。' },
  { id: 'br_java_e02', languageId: 'java', world: 'execute', title: 'Brazilian time zones', titleJa: 'ブラジルの時間帯', category: 'geography-time', objective: 'method', source: SRC.timeZones, summaryJa: 'ブラジルには複数のUTCオフセットの時間帯があります。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(15, -3));\n  }\n}', options: ['12', '18', '-3', '15'], answer: '12', expectedOutput: '12', hint: '15 + (-3) を計算します。', explanation: 'UTC 15 時に -3 を足すので 12 です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。' },
  { id: 'br_java_e03', languageId: 'java', world: 'execute', title: 'Pelourinho district', titleJa: 'ペロウリーニョ地区', category: 'world-heritage-history', objective: 'collections', source: SRC.pelourinho, summaryJa: 'ペロウリーニョはサルヴァドールの歴史地区として知られます。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Pelourinho");\n    labels.add("Salvador");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Pelourinho>Salvador', 'Salvador>Pelourinho', 'Pelourinho>', 'Salvador'], answer: 'Pelourinho>Salvador', expectedOutput: 'Pelourinho>Salvador', hint: '追加した順に result へ入ります。', explanation: 'Pelourinho、Salvador の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。' },
  { id: 'br_java_e04', languageId: 'java', world: 'execute', title: 'Indigenous languages in Brazil', titleJa: 'ブラジルの先住民言語', category: 'language-culture', objective: 'inheritance', source: SRC.languages, summaryJa: 'ブラジルには多様な先住民言語が存在します。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class LanguageFamily { String label() { return "family"; } }\nclass TupiFamily extends LanguageFamily { @Override String label() { return "Tupi"; } }\npublic class Main {\n  public static void main(String[] args) {\n    LanguageFamily family = new TupiFamily();\n    System.out.println(family.label());\n  }\n}', options: ['Tupi', 'family', 'LanguageFamily', 'error'], answer: 'Tupi', expectedOutput: 'Tupi', hint: '実体は TupiFamily です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。' },
];

const javaFinalExecute = [
  { id: 'final_execute_BR_java_01', languageId: 'java', world: 'execute', title: 'Coffee-producing states', titleJa: 'ブラジルのコーヒー生産州', category: 'industry-agriculture', objective: 'collections', source: SRC.coffeeStates, summaryJa: 'ブラジルでは複数の州がコーヒー生産と結びつきます。', prompt: 'HashMap とメソッドで high の州名を連結した出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean high(int score) { return score >= 80; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> states = new HashMap<>();\n    states.put("Minas Gerais", 90);\n    states.put("Bahia", 60);\n    String result = "";\n    for (String state : states.keySet()) if (high(states.get(state))) result += state;\n    System.out.println(result);\n  }\n}', options: ['Minas Gerais', 'Bahia', 'Minas GeraisBahia', '90'], answer: 'Minas Gerais', expectedOutput: 'Minas Gerais', hint: 'score が 80 以上の state だけです。', explanation: 'Minas Gerais の score だけが90で条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。' },
  { id: 'final_execute_BR_java_02', languageId: 'java', world: 'execute', title: 'Amazon research station records', titleJa: 'アマゾン研究拠点レコード', category: 'science-geography', objective: 'class', source: SRC.amazon, summaryJa: 'アマゾン地域では森林や生物多様性を調べる研究拠点データを扱えます。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Station { String name; boolean active; Station(String n, boolean a){ name=n; active=a; } String label(){ return name + ":active"; } }\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Station> stations = new ArrayList<>();\n    stations.add(new Station("Manaus", true));\n    stations.add(new Station("Closed", false));\n    for (Station station : stations) if (station.active) System.out.println(station.label());\n  }\n}', options: ['Manaus:active', 'Closed:active', 'Manaus', 'active:Manaus'], answer: 'Manaus:active', expectedOutput: 'Manaus:active', hint: 'active が true の Station だけ label() を呼びます。', explanation: 'Manaus だけが active なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。' },
];

const javaDebug = [
  { id: 'br_java_b01', languageId: 'java', world: 'debug', title: 'Brazilian state abbreviation lookup', titleJa: 'ブラジル州略号 lookup', category: 'administration', objective: 'strings', source: SRC.states, summaryJa: 'ブラジルの州略号は文字列コードとして扱います。', prompt: '州略号 SP を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SP");\n    if (code == "SP") System.out.println("Sao Paulo");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("SP") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("SP");\n    if (code.equals("SP")) System.out.println("Sao Paulo");\n  }\n}', hint: 'Java の String は内容比較に equals を使います。', explanation: '== は同じオブジェクトかを見ます。', programmingExplanation: 'String comparison bug の基本です。' },
  { id: 'br_java_b02', languageId: 'java', world: 'debug', title: 'CPF-like numeric string formatting', titleJa: 'CPF風の数値文字列形式', category: 'administration-formatting', objective: 'strings', source: SRC.postal, summaryJa: '個人情報ではないサンプルの番号形式は、先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル番号 01234567890 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    long sample = 01234567890L;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別番号を数値として保存している', fix: 'String sample = "01234567890"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別番号は計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "01234567890";\n    System.out.println(sample);\n  }\n}', hint: '計算しない番号は String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'ID や番号形式は numeric type ではなく String として扱います。' },
  { id: 'br_java_b03', languageId: 'java', world: 'debug', title: 'Carnival score average', titleJa: 'カーニバル採点平均', category: 'culture-festival', objective: 'numbers', source: SRC.samba, summaryJa: 'カーニバルの採点データは平均計算の題材として扱えます。', prompt: '9点と10点の平均 9.5 を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 19;\n    int judges = 2;\n    double average = total / judges;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または judges を double に変換してから割る', impact: '9.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 19;\n    int judges = 2;\n    double average = (double) total / judges;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は 9 になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。' },
];

const javaFinalDebug = [
  { id: 'final_debug_BR_java_01', languageId: 'java', world: 'debug', title: 'Lencois Maranhenses National Park', titleJa: 'レンソイス・マラニャンセス国立公園', category: 'geography-nature', objective: 'collections', source: SRC.lencois, summaryJa: 'レンソイス・マラニャンセス国立公園はマラニョン州にあります。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> areas = new HashMap<>();\n    areas.put("Lencois Maranhenses", "1550");\n    String areaText = areas.get("Other Park");\n    int area = Integer.parseInt(areaText);\n    System.out.println(area);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null や不正文字列を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> areas = new HashMap<>();\n    areas.put("Lencois Maranhenses", "1550");\n    String areaText = areas.get("Lencois Maranhenses");\n    try {\n      if (areaText != null) System.out.println(Integer.parseInt(areaText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。' },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const BRAZIL_FACTS = allSpecs.map(makeFact);
export const BRAZIL_ASSIGNMENTS = allSpecs.map(assignment);

export const BR_PY_DECODE = pyDecode.map(decode);
export const BR_PY_EXECUTE = pyExecute.map(execute);
export const BR_PY_DEBUG = pyDebug.map(debug);
export const BR_JS_DECODE = jsDecode.map(decode);
export const BR_JS_EXECUTE = jsExecute.map(execute);
export const BR_JS_DEBUG = jsDebug.map(debug);
export const BR_JAVA_DECODE = javaDecode.map(decode);
export const BR_JAVA_EXECUTE = javaExecute.map(execute);
export const BR_JAVA_DEBUG = javaDebug.map(debug);

export const BRAZIL_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: BRAZIL PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: BRAZIL JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: BRAZIL JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: BRAZIL PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: BRAZIL JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: BRAZIL JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: BRAZIL PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: BRAZIL JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: BRAZIL JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
