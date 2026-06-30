const SRC = {
  ottawa: 'https://www.britannica.com/place/Ottawa',
  confederation: 'https://www.britannica.com/event/Canadian-Confederation',
  officialLanguages: 'https://www.britannica.com/topic/Official-Languages-Act',
  provinces: 'https://www.britannica.com/place/Canada',
  flag: 'https://www.britannica.com/topic/flag-of-Canada',
  rideauCanal: 'https://whc.unesco.org/en/list/1221',
  grosMorne: 'https://whc.unesco.org/en/list/419',
  sGangGwaay: 'https://whc.unesco.org/en/list/157',
  lAnseAuxMeadows: 'https://whc.unesco.org/en/list/4',
  cnTower: 'https://www.britannica.com/topic/CN-Tower',
  parliamentHill: 'https://www.britannica.com/topic/Parliament-Hill',
  railway: 'https://www.britannica.com/topic/Canadian-Pacific-Railway',
  greatLakes: 'https://www.britannica.com/place/Great-Lakes',
  g7: 'https://www.britannica.com/topic/Group-of-Seven',
  nato: 'https://www.britannica.com/topic/North-Atlantic-Treaty-Organization',
  banff: 'https://www.britannica.com/place/Banff-National-Park',
  insulin: 'https://www.nobelprize.org/prizes/medicine/1923/banting/biographical/',
  postalCode: 'https://www.britannica.com/place/Canada',
  currency: 'https://www.britannica.com/topic/Canadian-dollar',
  multiculturalism: 'https://www.britannica.com/event/Canadian-Multiculturalism-Act',
  reconciliation: 'https://www.britannica.com/topic/Truth-and-Reconciliation-Commission-of-Canada',
  hudsonsBay: 'https://www.britannica.com/topic/Hudsons-Bay-Company',
  nrc: 'https://www.britannica.com/place/Canada',
  timezones: 'https://www.britannica.com/place/Canada',
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
  return `ca:${title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

const FACT_DETAILS = {
  ca_py_d01: {
    backgroundJa: 'オタワはカナダの首都で、オンタリオ州東部のオタワ川沿いに位置します。',
    historyJa: '1857年にイギリスのヴィクトリア女王により、トロント・モントリオール・ケベック・キングストンの対立を避ける妥協案として首都に選定されました。',
    episodeJa: 'オタワはオンタリオ州とケベック州の境界（オタワ川）近くに位置し、英語圏と仏語圏の中間地点という地理的バランスも選定理由の一つでした。',
    keyPointsJa: ['1857年に首都として選定', 'オンタリオ州に位置', 'オタワ川沿いの都市', '英語圏・仏語圏の中間に位置'],
  },
  ca_py_d02: {
    backgroundJa: 'カナダ連邦は1867年7月1日に成立した国家で、現在もこの日が建国記念日とされています。',
    historyJa: '1867年7月1日、英領北アメリカ法によりカナダ州（オンタリオ・ケベック）、ニューブランズウィック、ノバスコシアの4州が統合してカナダ連邦が成立しました。',
    episodeJa: '7月1日は「カナダ・デー」として国民の祝日に定められ、各地でイベントや花火が開催されます。',
    keyPointsJa: ['1867年7月1日に連邦成立', '英領北アメリカ法に基づく', '当初は4州で結成', '7月1日はカナダ・デー'],
  },
  ca_py_d03: {
    backgroundJa: 'カナダは英語とフランス語の両方を連邦の公用語とする二言語国家です。',
    historyJa: '1969年に公用語法（Official Languages Act）が制定され、英語とフランス語が連邦レベルで同等の公用語と定められました。',
    episodeJa: 'ケベック州ではフランス語人口が多数派で、連邦の公的文書や案内表示は両言語で表記されることが一般的です。',
    keyPointsJa: ['1969年に公用語法制定', '英語とフランス語が公用語', 'ケベック州はフランス語が多数派', '連邦文書は両言語表記'],
  },
  ca_py_d04: {
    backgroundJa: 'カナダは10の州（プロビンス）と3つの準州（テリトリー）から構成される連邦国家です。',
    historyJa: 'ブリティッシュコロンビア州は1871年にカナダ連邦に加入し、太平洋岸の州として連邦の領土を広げました。',
    episodeJa: '準州のうちヌナブト準州は1999年4月1日に北西準州から分離して新設された、最も新しい行政区分です。',
    keyPointsJa: ['10州・3準州で構成', 'BC州は1871年に連邦加入', 'ヌナブトは1999年新設', '準州はヨーコン・NWT・ヌナブト'],
  },
  ca_py_d05: {
    backgroundJa: 'カナダの国旗は赤い楓（メープル）の葉を中央に配した「メープルリーフ・フラッグ」です。',
    historyJa: '1965年2月15日に正式採用され、それまでのイギリス国旗を含む旗から独自の国旗へ切り替わりました。',
    episodeJa: '採用された日（2月15日）は現在「国旗の日」として記念され、デザインは歴史学者ジョージ・スタンレーらの案が基になりました。',
    keyPointsJa: ['1965年2月15日に採用', '赤い楓の葉が中央のデザイン', '2月15日は国旗の日', 'ジョージ・スタンレーらが考案'],
  },
  final_decode_CA_python_01: {
    backgroundJa: 'リドー運河はオンタリオ州オタワとキングストンを結ぶ運河で、現在も稼働する北米最古の運河です。',
    historyJa: '1826年から1832年にかけて軍事目的で建設され、2007年にユネスコ世界遺産に登録されました。',
    episodeJa: '冬季には運河の一部が世界最大級のスケートリンクとして開放され、毎年多くの市民や観光客がスケートを楽しみます。',
    keyPointsJa: ['1826〜1832年に建設', '2007年にユネスコ世界遺産登録', '現役で稼働する運河', '冬は天然スケートリンクになる'],
  },
  final_decode_CA_python_02: {
    backgroundJa: 'グロスモーン国立公園はニューファンドランド・ラブラドール州にある、地質学的に重要な国立公園です。',
    historyJa: '1987年にユネスコ世界遺産（自然遺産）に登録され、プレートテクトニクスを示す貴重な地形が評価されました。',
    episodeJa: '公園内では地球のマントル層が地表に露出した珍しい地形が見られ、地質学の研究者にも重要な調査地となっています。',
    keyPointsJa: ['1987年にユネスコ世界遺産登録', 'プレートテクトニクスの証拠', 'マントル層が地表に露出', 'ニューファンドランド州に位置'],
  },
  final_decode_CA_python_03: {
    backgroundJa: 'SGang Gwaay（アンソニー島）はブリティッシュコロンビア州ハイダ・グワイ諸島にある、ハイダ族の旧居住地です。',
    historyJa: '19世紀後半に住民が離れて廃村となり、1981年にユネスコ世界遺産に登録されました。',
    episodeJa: '島には10本以上のトーテムポールや住居跡が残り、ハイダ族の伝統的な木彫り文化を今に伝えています。',
    keyPointsJa: ['1981年にユネスコ世界遺産登録', 'ハイダ族の旧居住地', 'トーテムポールが現存', 'ハイダ・グワイ諸島に位置'],
  },
  ca_py_e01: {
    backgroundJa: 'トロントはオンタリオ州の州都で、カナダ最大の人口を持つ都市です。',
    historyJa: '1793年にヨーク（York）として建設され、1834年にトロントへ改称されました。',
    episodeJa: 'トロントは多文化都市として知られ、住民の半数以上が国外出身者という、北米でも特に移民比率の高い都市です。',
    keyPointsJa: ['1793年に建設（旧名ヨーク）', '1834年にトロントへ改称', 'オンタリオ州の州都', '移民比率が非常に高い'],
  },
  ca_py_e02: {
    backgroundJa: 'パーラメント・ヒル（国会議事堂）はオタワにあるカナダ連邦議会の議事堂です。',
    historyJa: '1859年から1866年にゴシック・リバイバル様式で建設されました。',
    episodeJa: '1916年に火災で中央棟の大半が焼失し、1922年に現在のピース・タワーを含む形で再建されました。',
    keyPointsJa: ['1859〜1866年に建設', '1916年に火災で焼失', '1922年に再建（ピース・タワー）', 'オタワに位置する連邦議会'],
  },
  ca_py_e03: {
    backgroundJa: 'カナダ太平洋鉄道（CPR）は東西のカナダを結んだ大陸横断鉄道です。',
    historyJa: '1881年に建設が始まり、1885年11月7日にブリティッシュコロンビア州クレイグェラチーで最後の犬釘（ラストスパイク）が打たれて全線が完成しました。',
    episodeJa: 'BC州の連邦加入（1871年）の条件として鉄道建設が約束され、完成によりモントリオールとバンクーバーが鉄道で直結されました。',
    keyPointsJa: ['1881年に建設開始', '1885年11月7日に全線完成', 'BC州加入の条件として建設', 'モントリオールとバンクーバーを結ぶ'],
  },
  ca_py_e04: {
    backgroundJa: '五大湖はカナダとアメリカの国境に広がる世界最大級の淡水湖群で、スペリオル湖・ヒューロン湖・エリー湖・オンタリオ湖の4湖がカナダと接しています。',
    historyJa: '5つの湖のうち、ミシガン湖だけが完全にアメリカ国内にあり、残り4湖はカナダとアメリカの国境を成しています。',
    episodeJa: '五大湖は世界の淡水の約20%を占めるとされ、五大湖周辺はカナダの工業・農業地帯としても重要な地域です。',
    keyPointsJa: ['4湖がカナダと国境を接する', 'ミシガン湖のみ米国内', '世界の淡水の約20%とされる', 'カナダの工業・農業地帯'],
  },
  final_execute_CA_python_01: {
    backgroundJa: 'カナダには複数のユネスコ世界遺産があり、登録年や種別（文化遺産・自然遺産）が異なります。',
    historyJa: 'リドー運河は2007年、SGang Gwaayは1981年にそれぞれユネスコ世界遺産（文化遺産）に登録されました。',
    episodeJa: 'カナダ国内のユネスコ世界遺産は20件前後に及び、自然遺産と文化遺産の両方が幅広い地域に分布しています。',
    keyPointsJa: ['登録年は遺産ごとに異なる', '文化遺産と自然遺産がある', 'カナダ全土に分布', '20件前後の世界遺産がある'],
  },
  final_execute_CA_python_02: {
    backgroundJa: 'カナダはG7、NATO、コモンウェルス、国連など複数の国際機関の加盟国です。',
    historyJa: 'NATOには1949年の発足時から加盟する創設国であり、国連には1945年の発足時から加盟しています。',
    episodeJa: 'カナダはかつてイギリスの自治領であった歴史からコモンウェルス（英連邦）にも加盟し、国際社会で多面的な役割を担っています。',
    keyPointsJa: ['NATO創設国（1949年）', '国連発足時から加盟（1945年）', 'コモンウェルス加盟国', 'G7のメンバー国'],
  },
  ca_py_b01: {
    backgroundJa: 'カナダドル（CAD）はカナダの公式通貨です。',
    historyJa: '1858年にカナダドルが導入され、それ以前使われていたカナダポンドなどの通貨を置き換えました。',
    episodeJa: 'カナダドルの紙幣には著名なカナダ人や国の象徴が描かれ、近年はポリマー（プラスチック）製の耐久性の高い紙幣が発行されています。',
    keyPointsJa: ['1858年に導入', 'カナダの公式通貨', 'ポリマー紙幣を採用', '記号はC$またはCAD'],
  },
  ca_py_b02: {
    backgroundJa: 'カナダの郵便番号は1971年から導入された、英数字混在の6文字形式（例: K1A 0B1）です。',
    historyJa: 'カナダポストが1971年に現在の郵便番号制度を導入し、それ以前は簡易な「郵便ゾーン番号」が使われていました。',
    episodeJa: '先頭の文字は地域を示し、例えばオタワを含む地域は「K」で始まる番号が割り当てられています。',
    keyPointsJa: ['1971年に現行制度を導入', '英数字混在の6文字形式', '先頭の文字が地域を示す', 'カナダポストが管理'],
  },
  ca_py_b03: {
    backgroundJa: 'カナダの州・準州には2文字の略号があり、郵便や行政で使われます。',
    historyJa: '州・準州の2文字略号はカナダポストの郵便番号制度とともに普及しました。',
    episodeJa: 'ブリティッシュコロンビア州は「BC」、オンタリオ州は「ON」、ケベック州は「QC」のように、州名の頭文字に基づく略号が使われます。',
    keyPointsJa: ['州・準州ごとに2文字略号', 'BC＝ブリティッシュコロンビア', 'ON＝オンタリオ、QC＝ケベック', '郵便・行政で使用'],
  },
  final_debug_CA_python_01: {
    backgroundJa: 'インスリンは1921〜1922年にカナダのトロント大学で発見されたホルモンで、糖尿病治療に革命をもたらしました。',
    historyJa: 'フレデリック・バンティングとチャールズ・ベストが1921年に発見し、ジョン・マクロードとジェームズ・コリップの協力で精製が進められました。',
    episodeJa: 'バンティングとマクロードは1923年にノーベル生理学・医学賞を受賞し、バンティングは当時32歳で史上最年少の受賞者となりました。',
    keyPointsJa: ['1921年にバンティングらが発見', 'トロント大学での研究', '1923年にノーベル賞受賞', 'バンティングは史上最年少受賞'],
  },
};

function makeFact(spec) {
  const details = FACT_DETAILS[spec.id] || {};
  const backgroundJa = details.backgroundJa || `${spec.summaryJa} ${spec.titleJa}は、カナダの歴史・文化・地理・科学を理解するときの代表的な題材です。`;
  return {
    factId: factIdFromQuestion(spec.id),
    countryId: 'CA',
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
    countryId: 'CA',
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
  { id: 'ca_py_d01', languageId: 'python', world: 'decode', title: 'Ottawa as capital', titleJa: 'オタワ（首都）', category: 'geography-capital', objective: 'strings', source: SRC.ottawa, summaryJa: 'オタワはカナダの首都です。', prompt: 'オタワはカナダの首都です。下のコードを実行すると Canada\'s capital is Ottawa. と表示されるよう、空欄を埋めてください。', code: 'capital = ___BLANK___\nprint("Canada\'s capital is " + capital + ".")', answer: '"Ottawa"', expectedOutput: "Canada's capital is Ottawa.", hint: 'capital に入る文字列を引用符付きで書きます。', explanation: '"Ottawa" を入れると文の中に連結されます。', programmingExplanation: 'Python の文字列は + で連結できます。' },
  { id: 'ca_py_d02', languageId: 'python', world: 'decode', title: 'Canadian Confederation year', titleJa: 'カナダ連邦結成の年', category: 'history', objective: 'integers', source: SRC.confederation, summaryJa: 'カナダ連邦は1867年に結成されました。', prompt: '年が1867のとき Confederation:1867 と表示されるよう、空欄を埋めてください。', code: 'year = ___BLANK___\nlabel = f"Confederation:{year}"\nprint(label)', answer: '1867', expectedOutput: 'Confederation:1867', hint: '整数は引用符なしで書きます。', explanation: 'year に1867を入れると f-string が展開されます。', programmingExplanation: 'f-string は波かっこの中の変数を文字列に展開します。' },
  { id: 'ca_py_d03', languageId: 'python', world: 'decode', title: 'Official languages condition', titleJa: 'カナダの公用語の条件分岐', category: 'culture-language', objective: 'condition', source: SRC.officialLanguages, summaryJa: 'カナダでは英語とフランス語が公用語です。', prompt: '言語名が French のとき official と表示されるよう、if の条件を完成させてください。', code: 'language = "French"\nif ___BLANK___:\n    print("official")\nelse:\n    print("other")', answer: 'language == "French"', expectedOutput: 'official', hint: '文字列が完全に一致するか == で比較します。', explanation: 'language の値と対象を比較する条件が True になります。', programmingExplanation: 'Python の == は値の等価比較です。' },
  { id: 'ca_py_d04', languageId: 'python', world: 'decode', title: 'Canadian provinces sample list', titleJa: 'カナダの州サンプルリスト', category: 'geography', objective: 'list', source: SRC.provinces, summaryJa: 'カナダは10州・3準州から構成されます。', prompt: 'リストから British Columbia を取り出して表示するよう、添字を埋めてください。', code: 'provinces = ["Ontario", "Quebec", "British Columbia"]\nprint(provinces[___BLANK___])', answer: '2', expectedOutput: 'British Columbia', hint: 'Python のリストは0番目から数えます。', explanation: 'British Columbia はリストの3番目なので添字は2です。', programmingExplanation: 'リストの添字は0から始まります。' },
  { id: 'ca_py_d05', languageId: 'python', world: 'decode', title: 'Maple Leaf flag lookup', titleJa: 'メープルリーフ・フラッグ', category: 'national-symbol', objective: 'dictionary', source: SRC.flag, summaryJa: 'カナダ国旗は赤い楓の葉が中央に描かれた旗です。', prompt: '辞書から color を取り出して red と表示されるよう、キーを埋めてください。', code: 'flag = {"name": "Maple Leaf Flag", "color": "red"}\nprint(flag[___BLANK___])', answer: '"color"', expectedOutput: 'red', hint: '値そのものではなく、値を取り出すキーを書きます。', explanation: '"color" キーの値が red です。', programmingExplanation: '辞書は角括弧にキーを指定して値を取り出します。' },
];

const pyFinalDecode = [
  { id: 'final_decode_CA_python_01', languageId: 'python', world: 'decode', title: 'Rideau Canal', titleJa: 'リドー運河', category: 'world-heritage', objective: 'function', source: SRC.rideauCanal, summaryJa: 'リドー運河はカナダにある世界遺産です。', prompt: '関数と条件を使い、city が Ottawa のときだけ Rideau Canal:Ottawa と表示するよう空欄を埋めてください。', code: 'name = "Rideau Canal"\ncity = "Ottawa"\ndef label(site, place):\n    if place == ___BLANK___:\n        return f"{site}:{place}"\n    return "skip"\nprint(label(name, city))', answer: '"Ottawa"', expectedOutput: 'Rideau Canal:Ottawa', hint: 'place と比較する都市名を引用符付きで書きます。', explanation: 'place が Ottawa と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、f-string を組み合わせています。' },
  { id: 'final_decode_CA_python_02', languageId: 'python', world: 'decode', title: 'Gros Morne National Park', titleJa: 'グロスモーン国立公園', category: 'world-heritage', objective: 'loop', source: SRC.grosMorne, summaryJa: 'グロスモーン国立公園はカナダにある世界遺産です。', prompt: 'province が Newfoundland and Labrador の公園名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'parks = [\n    {"name": "Gros Morne National Park", "province": "Newfoundland and Labrador"},\n    {"name": "Other", "province": "Ontario"}\n]\nfor park in parks:\n    if ___BLANK___:\n        print(park["name"])', answer: 'park["province"] == "Newfoundland and Labrador"', expectedOutput: 'Gros Morne National Park', hint: '各辞書の province キーを比較します。', explanation: 'Gros Morne National Park の province だけが一致するので出力されます。', programmingExplanation: 'for と if を組み合わせ、条件に合う値だけを処理します。' },
  { id: 'final_decode_CA_python_03', languageId: 'python', world: 'decode', title: 'SGang Gwaay', titleJa: 'SGang Gwaay（アンソニー島）', category: 'world-heritage', objective: 'dictionary', source: SRC.sGangGwaay, summaryJa: 'SGang Gwaayはカナダにある世界遺産です。', prompt: '辞書と関数を使い、SGang Gwaay:Haida Gwaii と表示するキーを埋めてください。', code: 'site = {"name": "SGang Gwaay", "region": "Haida Gwaii"}\ndef describe(data):\n    return f"{data[\'name\']}:{data[___BLANK___]}"\nprint(describe(site))', answer: '"region"', expectedOutput: 'SGang Gwaay:Haida Gwaii', hint: 'Haida Gwaii を取り出すキーを選びます。', explanation: '"region" キーの値が Haida Gwaii です。', programmingExplanation: '関数に辞書を渡し、キーを指定して値を取り出します。' },
];

const pyExecute = [
  { id: 'ca_py_e01', languageId: 'python', world: 'execute', title: 'Toronto', titleJa: 'トロント', category: 'geography-city', objective: 'function', source: SRC.cnTower, summaryJa: 'トロントはオンタリオ州の州都です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'def city_label(name, province):\n    return f"{name}:{province}"\nprint(city_label("Toronto", "Ontario"))', options: ['Toronto:Ontario', 'Ontario:Toronto', 'Toronto', 'Error'], answer: 'Toronto:Ontario', expectedOutput: 'Toronto:Ontario', hint: 'return の f-string で name と province の順番を見ます。', explanation: 'name が先、province が後ろなので Toronto:Ontario です。', programmingExplanation: '関数呼び出しでは引数が仮引数に渡され、return の式が出力されます。', optionExplanations: { 'Toronto:Ontario': '正解。f"{name}:{province}"はnameが先、provinceが後なのでToronto:Ontarioになります。', 'Ontario:Toronto': 'f文字列は{name}:{province}の順で定義されているため、nameが先になります。', 'Toronto': 'f文字列にはprovinceの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'ca_py_e02', languageId: 'python', world: 'execute', title: 'Parliament Hill', titleJa: 'パーラメント・ヒル', category: 'landmark', objective: 'dictionary', source: SRC.parliamentHill, summaryJa: 'パーラメント・ヒルはオタワにある連邦議会の議事堂です。', prompt: '辞書 lookup の結果を選んでください。', code: 'landmark = {"name": "Parliament Hill", "city": "Ottawa"}\nprint(landmark["city"])', options: ['Ottawa', 'Parliament Hill', 'Toronto', 'city'], answer: 'Ottawa', expectedOutput: 'Ottawa', hint: '"city" キーの値を見ます。', explanation: 'landmark["city"] は Ottawa を返します。', programmingExplanation: '辞書のキーを指定すると対応する値だけを取り出せます。', optionExplanations: { 'Ottawa': '正解。landmark["city"]はcityキーの値であるOttawaを返します。', 'Parliament Hill': 'これはnameキーの値で、コードが読んでいるのはcityキーなので出力されません。', 'Toronto': 'landmark辞書にはTorontoという値は含まれておらず、cityの値はOttawaです。', 'city': '"city"はキーの名前そのものであり、辞書アクセスはキーに対応する値を返します。' } },
  { id: 'ca_py_e03', languageId: 'python', world: 'execute', title: 'Canadian Pacific Railway sample stops', titleJa: 'カナダ太平洋鉄道のサンプル停車地', category: 'transport', objective: 'loop', source: SRC.railway, summaryJa: 'サンプルとして Montreal、Toronto などの鉄道停車地ラベルを扱います。', prompt: 'リストを順に連結した出力を選んでください。', code: 'stops = ["Montreal", "Toronto"]\nresult = ""\nfor stop in stops:\n    result += stop + "|"\nprint(result[:-1])', options: ['Montreal|Toronto', 'Toronto|Montreal', 'Montreal|', 'Toronto'], answer: 'Montreal|Toronto', expectedOutput: 'Montreal|Toronto', hint: 'stops の並び順と最後の | の削除を見ます。', explanation: 'Montreal、Toronto の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for ループで文字列を累積し、スライスで末尾1文字を除きます。', optionExplanations: { 'Montreal|Toronto': '正解。stopsの順にMontreal|Toronto|となり、[:-1]で末尾の|だけが取り除かれます。', 'Toronto|Montreal': 'forループはstopsの並び順（Montrealが先）通りに処理するため、順序が入れ替わることはありません。', 'Montreal|': '[:-1]は末尾1文字だけを除くスライスで、2件目のTorontoまで削ってしまうことはありません。', 'Toronto': '1件目のMontrealも結果に含まれるため、2件目だけが残ることはありません。' } },
  { id: 'ca_py_e04', languageId: 'python', world: 'execute', title: 'Great Lakes border records', titleJa: '五大湖の国境レコード', category: 'geography', objective: 'loop', source: SRC.greatLakes, summaryJa: '五大湖のうち4湖はカナダと国境を接しています。', prompt: 'records を条件で絞った出力を選んでください。', code: 'records = [\n    {"name": "Lake Superior", "borders_canada": True},\n    {"name": "Lake Michigan", "borders_canada": False}\n]\nselected = [r["name"] for r in records if r["borders_canada"]]\nprint(selected[0])', options: ['Lake Superior', 'Lake Michigan', 'True', 'False'], answer: 'Lake Superior', expectedOutput: 'Lake Superior', hint: 'borders_canada が True の辞書だけ残します。', explanation: 'Lake Superior の borders_canada だけが True なので選ばれます。', programmingExplanation: 'リスト内包表記は、条件に合う要素だけを新しいリストへ入れます。', optionExplanations: { 'Lake Superior': '正解。borders_canadaがTrueなのはLake Superiorだけなので、selectedにはLake Superiorのみが入りselected[0]はLake Superiorです。', 'Lake Michigan': 'Lake MichiganのborderS_canadaはFalseなので、リスト内包表記の条件で除外されselectedには入りません。', 'True': 'selectedはname（文字列）のリストであり、borders_canadaの真偽値そのものが出力されるわけではありません。', 'False': 'selected[0]はリストの先頭要素であるLake Superior（文字列）であり、真偽値Falseが出力されることはありません。' } },
];

const pyFinalExecute = [
  { id: 'final_execute_CA_python_01', languageId: 'python', world: 'execute', title: 'Canadian UNESCO sites records', titleJa: 'カナダのユネスコ世界遺産レコード', category: 'world-heritage', objective: 'loop', source: SRC.sGangGwaay, summaryJa: 'カナダには複数のユネスコ世界遺産があります。', prompt: '記録を絞り、年代の昇順に並べた出力を選んでください。', code: 'records = [\n    {"name": "Site A", "kind": "heritage", "year": 2007},\n    {"name": "Other", "kind": "park", "year": 1980},\n    {"name": "Site B", "kind": "heritage", "year": 1981}\n]\nselected = sorted([r for r in records if r["kind"] == "heritage"], key=lambda r: r["year"])\nprint(">".join(r["name"] for r in selected))', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと year の昇順です。', explanation: 'heritage は Site B(1981) と Site A(2007) で、昇順に Site B が先です。', programmingExplanation: 'フィルタリング、sorted の key、join を順番に追跡します。', optionExplanations: { 'Site B>Site A': '正解。kind==heritageで絞るとSite A(2007)とSite B(1981)が残り、year昇順でSite B(1981)が先になります。', 'Site A>Site B': 'yearの昇順で並べるとSite B(1981)がSite A(2007)より先になるため、この順序にはなりません。', 'Other>Site A': 'Otherのkindはparkでheritageではないため、フィルタ条件で除外されます。', 'Site A>Other': 'Otherはheritageではないため除外され、また並び順もyear昇順とは異なります。' } },
  { id: 'final_execute_CA_python_02', languageId: 'python', world: 'execute', title: 'Canadian international memberships dataset', titleJa: 'カナダの国際機関加盟データセット', category: 'international-role', objective: 'dictionary', source: SRC.nato, summaryJa: 'サンプルとして G7、NATO、コモンウェルスなどの加盟データを扱います。', prompt: '辞書とリストから member が True の件数を集計した結果を選んでください。', code: 'organizations = [\n    {"name": "G7", "member": True},\n    {"name": "NATO", "member": True},\n    {"name": "European Union", "member": False},\n    {"name": "Warsaw Pact", "member": False}\n]\ncount = sum(1 for o in organizations if o["member"])\nprint(count)', options: ['2', '4', '1', 'G7'], answer: '2', expectedOutput: '2', hint: 'member が True の辞書だけ数えます。', explanation: 'G7、NATO の2件が True です。', programmingExplanation: '条件式を満たすたびに1を足し、sum で合計します。', optionExplanations: { '2': '正解。memberがTrueなのはG7とNATOの2件なので、countは2になります。', '4': 'organizationsには4件のデータがありますが、memberがTrueなのはそのうち2件だけです。', '1': 'G7とNATOの両方がTrueなので、1件だけがカウントされるわけではありません。', 'G7': 'countはTrueの件数を表す整数で、o自体の名前が出力されるわけではありません。' } },
];

const pyDebug = [
  { id: 'ca_py_b01', languageId: 'python', world: 'debug', title: 'CAD currency formatting for Canada', titleJa: 'カナダドル（CAD）の表示', category: 'finance', objective: 'strings', source: SRC.currency, summaryJa: 'カナダドル（CAD）はカナダの通貨です。', prompt: '金額を 10.50 CAD と表示したいコードです。文字列と数値の扱いを直します。', code: 'amount = "10.5"\nprint(amount + 0 + " CAD")', cause: '文字列 amount に数値 0 を + で足している', fix: 'amount を float にして、f-string で小数2桁に整形する', impact: '数値計算と表示形式を分け、10.50 CAD と安定して表示できる', why: '文字列連結と数値加算は別の処理だからです。', correctedCode: 'amount = 10.5\nprint(f"{amount:.2f} CAD")', hint: '表示用の小数桁は f-string の書式で指定します。', explanation: '文字列と数値をそのまま足すと TypeError になります。', programmingExplanation: 'f"{value:.2f}" は小数2桁の文字列を作ります。', causeOptionExplanations: { '文字列 amount に数値 0 を + で足している': '正解。amountは文字列"10.5"で、文字列に数値0を+で足すことはできずTypeErrorになります。', '出力文の文字列だけが間違っている': '" CAD"の部分の書き方自体は正しく、問題はamountと0の加算部分にあります。', 'データの件数が不足している': 'amountには値が1つ入っており、件数ではなく型の不一致が原因です。' }, fixOptionExplanations: { 'amount を float にして、f-string で小数2桁に整形する': '正解。floatに変換しf"{amount:.2f}"とすれば、10.50 CADのように整形できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '金額データを無視して固定文字列を出すと、実際の金額が反映されません。' }, impactOptionExplanations: { '数値計算と表示形式を分け、10.50 CAD と安定して表示できる': '正解。floatとf-stringの書式指定により、計算と表示形式を分けて安定して表示できます。', '常に例外を出して停止する': '修正後はamountがfloat型になるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'amountのデータはそのまま使われ続けます。修正は型と表示形式だけです。' } },
  { id: 'ca_py_b02', languageId: 'python', world: 'debug', title: 'Canadian postal-code style labels', titleJa: 'カナダの郵便番号風の表示', category: 'administration', objective: 'strings', source: SRC.postalCode, summaryJa: 'サンプルの郵便番号風コードは先頭ゼロを含む場合があります。', prompt: '先頭ゼロを含む可能性がある郵便番号風サンプルを表示するコードです。数値保存の不具合を直します。', code: 'postal_zone = 6\nprint(postal_zone)', cause: '郵便番号風コードを数値として保存すると先頭ゼロを保持できない', fix: '郵便番号風コードを最初から文字列として保存する', impact: '先頭ゼロを含む郵便番号風コードも失わずに表示できる', why: '識別コードは計算対象ではなく、表記を保つ必要があるからです。', correctedCode: 'postal_zone = "06"\nprint(postal_zone)', hint: '計算しない番号は数値ではなく文字列が安全です。', explanation: '数値リテラルでは表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコードは計算対象ではなく文字列データとして扱います。', causeOptionExplanations: { '郵便番号風コードを数値として保存すると先頭ゼロを保持できない': '正解。6を整数として保存すると先頭ゼロの情報が失われ、本来の表記06になりません。', '出力文の文字列だけが間違っている': 'print(postal_zone)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'postal_zoneには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { '郵便番号風コードを最初から文字列として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の郵便番号風データを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを含む郵便番号風コードも失わずに表示できる': '正解。文字列として保存すれば、先頭ゼロを含む表記をそのまま失わずに表示できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': '郵便番号風コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'ca_py_b03', languageId: 'python', world: 'debug', title: 'Province abbreviation lookup', titleJa: '州の略号 lookup', category: 'administration', objective: 'dictionary', source: SRC.provinces, summaryJa: 'サンプルとして ON、QC、BC などの州の略号を扱います。', prompt: '略号 BC から州名を引くコードです。キーの不一致を直します。', code: 'abbreviations = {"ON": "Ontario", "QC": "Quebec"}\ncode = "BC"\nprint(abbreviations[code])', cause: '辞書に BC のキーが登録されていないのに直接アクセスしている', fix: 'abbreviations.get(code, "unknown") のように安全に取得する', impact: '登録されていない略号でも例外を出さずに処理できる', why: '存在しないキーを角括弧で読むと KeyError になるからです。', correctedCode: 'abbreviations = {"ON": "Ontario", "QC": "Quebec", "BC": "British Columbia"}\ncode = "BC"\nprint(abbreviations.get(code, "unknown"))', hint: '辞書に存在するキーを確認します。', explanation: 'BC というキーは abbreviations に存在しません。', programmingExplanation: '辞書アクセスでは存在しないキーを指定すると KeyError になります。', causeOptionExplanations: { '辞書に BC のキーが登録されていないのに直接アクセスしている': '正解。abbreviationsにはONとQCしか登録されておらず、BCを角括弧で読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(abbreviations[code])自体の書き方は正しく、問題はキーが存在しないことです。', 'データの件数が不足している': '辞書には2件のデータがあり、件数不足ではなくBCというキーが未登録であることが原因です。' }, fixOptionExplanations: { 'abbreviations.get(code, "unknown") のように安全に取得する': '正解。getにデフォルト値を渡すことで、キーが無い場合でも例外を出さずに"unknown"を返せます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '州名データを無視して固定文字列にすると、実際に登録されている州の名前も正しく取得できなくなります。' }, impactOptionExplanations: { '登録されていない略号でも例外を出さずに処理できる': '正解。get(code, "unknown")により、未登録の略号でもKeyErrorを起こさず安全に処理を続けられます。', '常に例外を出して停止する': '修正後はgetのデフォルト値によりKeyError自体が発生しなくなります。', '題材データを使わなくなる': '登録済みの州データはそのまま使われ続けます。修正はキーが無いときの取得方法だけです。' } },
];

const pyFinalDebug = [
  { id: 'final_debug_CA_python_01', languageId: 'python', world: 'debug', title: 'Insulin discovery dataset', titleJa: 'インスリン発見のデータセット', category: 'world-heritage-science', objective: 'dictionary', source: SRC.insulin, summaryJa: 'インスリンはカナダのトロント大学で発見されました。', prompt: 'サンプル数値データを整数化し、欠損を安全に扱うコードです。', code: 'records = [{"name": "Insulin", "year_count": "1921"}, {"name": "Other"}]\nearly = []\nfor record in records:\n    if int(record["year_count"]) < 1922:\n        early.append(record["name"])\nprint(early)', cause: 'year_count がない辞書でも record["year_count"] を直接読んでいる', fix: 'record.get("year_count") を確認してから int に変換する', impact: '欠損行を飛ばし、数値化できる行だけ判定できる', why: 'get はキーがない場合に None を返せるからです。', correctedCode: 'records = [{"name": "Insulin", "year_count": "1921"}, {"name": "Other"}]\nearly = []\nfor record in records:\n    count = record.get("year_count")\n    if count is not None and int(count) < 1922:\n        early.append(record["name"])\nprint(early)', hint: '2件目の辞書に year_count キーがありません。', explanation: '欠損キーを直接読むと KeyError になります。', programmingExplanation: 'get、None 判定、int 変換を順に組み合わせます。', causeOptionExplanations: { 'year_count がない辞書でも record["year_count"] を直接読んでいる': '正解。2件目の辞書にはyear_countキーが無く、角括弧で直接読むとKeyErrorになります。', '出力文の文字列だけが間違っている': 'print(early)自体の書き方は正しく、問題はループ内でのキーアクセスです。', 'データの件数が不足している': 'recordsには2件のデータがあり、件数不足ではなく2件目にキーが無いことが原因です。' }, fixOptionExplanations: { 'record.get("year_count") を確認してから int に変換する': '正解。getでNoneかどうか確認してからintに変換すれば、キーが無い行を安全に読み飛ばせます。', '条件を削除する': 'if文の条件を削除すると、すべての行でint変換を試みてしまい同じエラーが起きます。', 'すべての値を同じ文字列にする': '数値データを無視して固定文字列にすると、実際の判定が正しく行えなくなります。' }, impactOptionExplanations: { '欠損行を飛ばし、数値化できる行だけ判定できる': '正解。getとNone判定により、year_countが無い行を飛ばして安全に判定できます。', '常に例外を出して停止する': '修正後はキーが無い場合にNoneとして扱われるため、KeyError自体が発生しなくなります。', '題材データを使わなくなる': 'Insulinなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

Object.assign(FACT_DETAILS, {
  ca_js_d01: {
    backgroundJa: 'パーラメント・ヒルはオタワにあるカナダ連邦議会の議事堂です。',
    historyJa: '1859〜1866年にゴシック・リバイバル様式で建設されました。',
    episodeJa: '1916年の火災で中央棟が焼失し、1922年に現在のピース・タワーを含む形で再建されました。',
    keyPointsJa: ['1859〜1866年に建設', '1916年に火災で焼失', '1922年に再建', 'オタワに位置する連邦議会'],
  },
  ca_js_d02: {
    backgroundJa: 'カナダでは英語とフランス語が連邦の公用語として並立しています。',
    historyJa: '1969年に公用語法が制定され、両言語が連邦レベルで同等の地位を得ました。',
    episodeJa: '連邦政府の文書や標識は両言語で表記されることが多く、二言語表記はカナダの行政の特徴の一つです。',
    keyPointsJa: ['1969年に公用語法制定', '英語とフランス語が公用語', '連邦文書は両言語表記', 'ケベック州はフランス語が多数派'],
  },
  ca_js_d03: {
    backgroundJa: 'カナダ国旗は赤・白・赤の縦帯に、中央の白地に赤い楓の葉が描かれたデザインです。',
    historyJa: '1965年2月15日に正式採用されました。',
    episodeJa: '採用前は長くイギリス国旗を含む旗が使われ、新国旗の制定は独自の国民的シンボルを持つ大きな転機となりました。',
    keyPointsJa: ['1965年2月15日に採用', '赤白赤の配色', '中央に赤い楓の葉', '2月15日は国旗の日'],
  },
  ca_js_d04: {
    backgroundJa: 'カナダでは鉄道、航空、道路など複数の交通手段が広大な国土を結んでいます。',
    historyJa: 'カナダ太平洋鉄道（CPR）は1885年に大陸横断鉄道として完成しました。',
    episodeJa: '鉄道はモントリオールとバンクーバーを結び、東西カナダの経済的・政治的統合に大きく貢献しました。',
    keyPointsJa: ['CPRは1885年に完成', '大陸横断鉄道', 'モントリオール〜バンクーバー間', '東西統合に貢献'],
  },
  ca_js_d05: {
    backgroundJa: 'バンフ国立公園はアルバータ州ロッキー山脈にある、カナダ最古の国立公園です。',
    historyJa: '1885年に温泉保護区として設立され、カナダ初の国立公園となりました。',
    episodeJa: '公園内のレイク・ルイーズなどは世界的に有名な景勝地で、年間数百万人の観光客が訪れます。',
    keyPointsJa: ['1885年に設立', 'カナダ最古の国立公園', 'アルバータ州ロッキー山脈', 'レイク・ルイーズが有名'],
  },
  final_decode_CA_javascript_01: {
    backgroundJa: 'L\'Anse aux Meadowsはニューファンドランド島にある、北米で唯一確認されているヴァイキングの居住遺跡です。',
    historyJa: '11世紀頃のノルウェー系ヴァイキングの居住地跡で、1978年にユネスコ世界遺産に登録されました。',
    episodeJa: 'この遺跡はコロンブスの到達より約500年早い、ヨーロッパ人による北米到達の証拠として重要視されています。',
    keyPointsJa: ['11世紀頃のヴァイキング居住跡', '1978年にユネスコ世界遺産登録', '北米で唯一確認された遺跡', 'コロンブスより約500年早い'],
  },
  final_decode_CA_javascript_02: {
    backgroundJa: 'カナダ太平洋鉄道の「ラストスパイク」はブリティッシュコロンビア州クレイグェラチーで打たれました。',
    historyJa: '1885年11月7日に最後の犬釘が打たれ、大陸横断鉄道が全線完成しました。',
    episodeJa: 'この場所は現在歴史的記念地として保存され、鉄道完成はBC州の連邦加入条件を果たす重要な出来事でした。',
    keyPointsJa: ['1885年11月7日に完成', 'クレイグェラチーで最後の犬釘', 'BC州加入条件を実現', '東西カナダを結ぶ'],
  },
  final_decode_CA_javascript_03: {
    backgroundJa: 'インスリンは1921年にフレデリック・バンティングらがトロント大学で発見したホルモンです。',
    historyJa: 'バンティングとチャールズ・ベストが1921年に研究を開始し、糖尿病治療に革命をもたらしました。',
    episodeJa: '1923年にバンティングとマクロードがノーベル生理学・医学賞を受賞し、バンティングは当時32歳で史上最年少受賞者となりました。',
    keyPointsJa: ['1921年に発見', 'トロント大学での研究', '1923年にノーベル賞受賞', '糖尿病治療に革命をもたらした'],
  },
  ca_js_e01: {
    backgroundJa: 'トロントはオンタリオ州の州都で、カナダ最大の都市です。',
    historyJa: '1793年にヨークとして建設され、1834年にトロントへ改称されました。',
    episodeJa: 'CNタワーは1976年に完成し、長年「世界一高い自立式構造物」として知られていました。',
    keyPointsJa: ['1793年に建設（旧名ヨーク）', '1834年にトロントへ改称', 'CNタワーは1976年完成', 'カナダ最大の都市'],
  },
  ca_js_e02: {
    backgroundJa: 'パーラメント・ヒルはオタワにある連邦議会の議事堂です。',
    historyJa: '1859〜1866年に建設され、1916年の火災後1922年に再建されました。',
    episodeJa: 'ピース・タワーは第一次世界大戦の戦没者を追悼する目的で建てられ、現在もオタワの象徴的な建造物です。',
    keyPointsJa: ['1859〜1866年に建設', '1922年にピース・タワー含む再建', '第一次大戦戦没者追悼の意味', 'オタワの象徴的建造物'],
  },
  ca_js_e03: {
    backgroundJa: 'カナダ太平洋鉄道はモントリオールとバンクーバーを結ぶ大陸横断鉄道です。',
    historyJa: '1881年に建設が始まり、1885年に全線完成しました。',
    episodeJa: 'BC州は1871年の連邦加入時に鉄道建設を条件としており、CPRの完成はこの約束を果たすものでした。',
    keyPointsJa: ['1881年に建設開始', '1885年に全線完成', 'BC州加入条件を実現', 'モントリオール〜バンクーバー間'],
  },
  ca_js_e04: {
    backgroundJa: '五大湖のうち4湖（スペリオル・ヒューロン・エリー・オンタリオ）はカナダと国境を接しています。',
    historyJa: 'ミシガン湖だけが完全にアメリカ国内にあり、他の4湖はカナダとアメリカの国境を成しています。',
    episodeJa: '五大湖は世界の淡水の約20%を占めるとされ、カナダの工業・農業地帯としても重要な役割を果たしています。',
    keyPointsJa: ['4湖がカナダと国境を接する', 'ミシガン湖のみ米国内', '世界の淡水の約20%とされる', '工業・農業地帯として重要'],
  },
  final_execute_CA_javascript_01: {
    backgroundJa: 'カナダには登録年や種別の異なる複数のユネスコ世界遺産があります。',
    historyJa: 'SGang Gwaayは1981年、リドー運河は2007年にそれぞれユネスコ世界遺産に登録されました。',
    episodeJa: 'カナダ国内のユネスコ世界遺産は文化遺産・自然遺産を合わせて20件前後に及びます。',
    keyPointsJa: ['登録年は遺産ごとに異なる', '文化遺産と自然遺産がある', 'カナダ全土に分布', '20件前後の世界遺産がある'],
  },
  final_execute_CA_javascript_02: {
    backgroundJa: '国立研究会議（NRC）やCBCなどはカナダ連邦政府と結びつく機関です。',
    historyJa: 'NRCは1916年に設立されたカナダの主要な科学研究機関です。',
    episodeJa: 'CBC（カナダ放送協会）は1936年設立の公共放送局で、英語・フランス語の両方で放送を行っています。',
    keyPointsJa: ['NRCは1916年設立', 'CBCは1936年設立', '英仏両言語で放送', '連邦政府と結びつく機関'],
  },
  ca_js_b01: {
    backgroundJa: 'カナダの郵便番号は1971年から導入された6文字の英数字混在形式です。',
    historyJa: 'カナダポストが1971年に現行の郵便番号制度を導入しました。',
    episodeJa: '例えば「K1A 0B1」のように、文字と数字が交互に並ぶ独自の形式が採用されています。',
    keyPointsJa: ['1971年に現行制度を導入', '6文字の英数字混在形式', '文字と数字が交互', 'カナダポストが管理'],
  },
  ca_js_b02: {
    backgroundJa: 'オンタリオ州とケベック州は1867年のカナダ連邦結成時の原加盟州です。',
    historyJa: '1867年の連邦結成時、カナダ州（オンタリオ・ケベック）、ニューブランズウィック、ノバスコシアの4州が参加しました。',
    episodeJa: 'オンタリオ州とケベック州はもともと1つの「カナダ州」として統治されており、連邦結成時に2州に分割されました。',
    keyPointsJa: ['1867年の連邦結成時に参加', 'もとは1つのカナダ州', '結成時に2州へ分割', '原加盟州は4州'],
  },
  ca_js_b03: {
    backgroundJa: 'リドー運河はオタワとキングストンを結ぶ、現在も稼働する世界遺産の運河です。',
    historyJa: '1826〜1832年に建設され、2007年にユネスコ世界遺産に登録されました。',
    episodeJa: '冬季には運河の一部が世界最大級の天然スケートリンクとして市民に開放されます。',
    keyPointsJa: ['1826〜1832年に建設', '2007年にユネスコ世界遺産登録', '現役で稼働する運河', '冬は天然スケートリンクになる'],
  },
  final_debug_CA_javascript_01: {
    backgroundJa: 'グロスモーン国立公園はニューファンドランド・ラブラドール州にある自然遺産です。',
    historyJa: '1987年にユネスコ世界遺産（自然遺産）に登録され、プレートテクトニクスの証拠となる地形が評価されました。',
    episodeJa: '公園内では地球のマントル層が地表に露出する珍しい地形が見られ、地質学的に重要な調査地となっています。',
    keyPointsJa: ['1987年にユネスコ世界遺産登録', 'プレートテクトニクスの証拠', 'マントル層が地表に露出', 'ニューファンドランド州に位置'],
  },
});

const jsDecode = [
  { id: 'ca_js_d01', languageId: 'javascript', world: 'decode', title: 'Parliament Hill in Ottawa', titleJa: 'パーラメント・ヒル（オタワ）', category: 'architecture-history', objective: 'object', source: SRC.parliamentHill, summaryJa: 'パーラメント・ヒルはオタワにあります。', prompt: 'オブジェクトから city を取り出して Ottawa と表示されるよう、空欄を埋めてください。', code: 'const building = { name: "Parliament Hill", city: "Ottawa" };\nconsole.log(building.___BLANK___);', answer: 'city', expectedOutput: 'Ottawa', hint: 'ドット記法ではプロパティ名だけを書きます。', explanation: 'building.city は city プロパティの値を返します。', programmingExplanation: 'JavaScript のオブジェクトはプロパティ名で値を参照します。' },
  { id: 'ca_js_d02', languageId: 'javascript', world: 'decode', title: 'Official language status label', titleJa: '公用語ステータスのラベル', category: 'culture-language', objective: 'strings', source: SRC.officialLanguages, summaryJa: 'カナダでは英語とフランス語が公用語です。', prompt: 'テンプレートリテラルで French:official と表示されるよう空欄を埋めてください。', code: 'const language = "French";\nconst status = ___BLANK___;\nconsole.log(`${language}:${status}`);', answer: '"official"', expectedOutput: 'French:official', hint: 'status に入る文字列を引用符付きで書きます。', explanation: '"official" を入れると ${status} に展開されます。', programmingExplanation: 'テンプレートリテラルはバッククォート内で ${} に変数を埋め込めます。' },
  { id: 'ca_js_d03', languageId: 'javascript', world: 'decode', title: 'Canadian flag colors', titleJa: 'カナダ国旗の色', category: 'national-symbol', objective: 'array', source: SRC.flag, summaryJa: 'カナダ国旗は赤・白・赤の3色構成です。', prompt: '配列から white を取り出す添字を埋めてください。', code: 'const colors = ["red", "white", "red"];\nconsole.log(colors[___BLANK___]);', answer: '1', expectedOutput: 'white', hint: '配列は0番目から数えます。', explanation: 'white は2番目の要素なので添字は1です。', programmingExplanation: '配列アクセスでは角括弧に番号を入れて要素を取り出します。' },
  { id: 'ca_js_d04', languageId: 'javascript', world: 'decode', title: 'Canadian transport mode labels', titleJa: 'カナダの交通手段ラベル', category: 'transport', objective: 'switch', source: SRC.railway, summaryJa: 'カナダには鉄道、航空、道路など複数の交通手段があります。', prompt: 'mode が rail のとき train と表示されるよう case を埋めてください。', code: 'const mode = "rail";\nswitch (mode) {\n  case ___BLANK___:\n    console.log("train");\n    break;\n  default:\n    console.log("other");\n}', answer: '"rail"', expectedOutput: 'train', hint: 'case には mode と一致する文字列を書きます。', explanation: 'case "rail" が一致し、train が出力されます。', programmingExplanation: 'switch は値と case を厳密に比較して、一致した分岐を実行します。' },
  { id: 'ca_js_d05', languageId: 'javascript', world: 'decode', title: 'Banff National Park founding year', titleJa: 'バンフ国立公園の設立年', category: 'geography-nature', objective: 'object', source: SRC.banff, summaryJa: 'バンフ国立公園はカナダ最古の国立公園です。', prompt: 'Banff National Park:1885 と表示されるよう、year の値を埋めてください。', code: 'const park = { name: "Banff National Park", year: ___BLANK___ };\nconsole.log(`${park.name}:${park.year}`);', answer: '1885', expectedOutput: 'Banff National Park:1885', hint: 'year は引用符なしの数値です。', explanation: 'year に1885を入れるとテンプレートリテラルに展開されます。', programmingExplanation: 'オブジェクトのプロパティはテンプレートリテラルの ${} に展開できます。' },
];

const jsFinalDecode = [
  { id: 'final_decode_CA_javascript_01', languageId: 'javascript', world: 'decode', title: "L'Anse aux Meadows", titleJa: 'ランス・オ・メドー', category: 'world-heritage', objective: 'function', source: SRC.lAnseAuxMeadows, summaryJa: "L'Anse aux Meadowsはカナダにある世界遺産です。", prompt: '関数と条件を使い、province が Newfoundland and Labrador のときだけ L\'Anse aux Meadows:Newfoundland and Labrador と表示するよう空欄を埋めてください。', code: 'const name = "L\'Anse aux Meadows";\nconst province = "Newfoundland and Labrador";\nfunction label(site, place) {\n  if (place === ___BLANK___) return `${site}:${place}`;\n  return "skip";\n}\nconsole.log(label(name, province));', answer: '"Newfoundland and Labrador"', expectedOutput: "L'Anse aux Meadows:Newfoundland and Labrador", hint: 'place と比較する州名を引用符付きで書きます。', explanation: 'place が Newfoundland and Labrador と一致するので連結した文字列が返ります。', programmingExplanation: '関数、条件分岐、テンプレートリテラルを組み合わせています。' },
  { id: 'final_decode_CA_javascript_02', languageId: 'javascript', world: 'decode', title: 'Last Spike site of the railway', titleJa: 'ラストスパイクの地', category: 'world-heritage', objective: 'loop', source: SRC.railway, summaryJa: 'カナダ太平洋鉄道のラストスパイクはブリティッシュコロンビア州で打たれました。', prompt: 'province が British Columbia の地点名だけを出力するよう、if 条件の空欄を埋めてください。', code: 'const sites = [\n  { name: "Last Spike Site", province: "British Columbia" },\n  { name: "Other", province: "Ontario" }\n];\nfor (const site of sites) {\n  if (___BLANK___) console.log(site.name);\n}', answer: 'site.province === "British Columbia"', expectedOutput: 'Last Spike Site', hint: '各 site の province を比較します。', explanation: 'Last Spike Site の province だけが British Columbia なので出力されます。', programmingExplanation: 'for...of は配列の要素を1つずつ取り出し、if で条件判定します。' },
  { id: 'final_decode_CA_javascript_03', languageId: 'javascript', world: 'decode', title: 'Insulin discovery year', titleJa: 'インスリン発見の年', category: 'science-history', objective: 'function', source: SRC.insulin, summaryJa: 'インスリンは1921年にトロント大学で発見されました。', prompt: 'year が1921のとき discovered と表示されるよう、空欄を埋めてください。', code: 'const discovery = { name: "Insulin", year: 1921 };\nfunction isEarly(data) {\n  if (data.year === ___BLANK___) return "discovered";\n  return "other";\n}\nconsole.log(isEarly(discovery));', answer: '1921', expectedOutput: 'discovered', hint: 'year と比較する数値を引用符なしで書きます。', explanation: 'data.year が1921と一致するので discovered が返ります。', programmingExplanation: '関数の引数として渡したオブジェクトのプロパティを条件式で比較します。' },
];

const jsExecute = [
  { id: 'ca_js_e01', languageId: 'javascript', world: 'execute', title: 'Toronto and CN Tower', titleJa: 'トロントとCNタワー', category: 'geography-city', objective: 'function', source: SRC.cnTower, summaryJa: 'トロントはカナダ最大の都市です。', prompt: '関数の戻り値を追跡し、出力を選んでください。', code: 'function cityLabel(name, province) {\n  return `${name}:${province}`;\n}\nconsole.log(cityLabel("Toronto", "Ontario"));', options: ['Toronto:Ontario', 'Ontario:Toronto', 'Toronto', 'Error'], answer: 'Toronto:Ontario', expectedOutput: 'Toronto:Ontario', hint: 'テンプレートリテラルで name と province の順番を見ます。', explanation: 'name が先、province が後ろなので Toronto:Ontario です。', programmingExplanation: '関数の戻り値はテンプレートリテラルで組み立てられた文字列です。', optionExplanations: { 'Toronto:Ontario': '正解。`${name}:${province}`はnameが先、provinceが後なのでToronto:Ontarioになります。', 'Ontario:Toronto': 'テンプレートリテラルは${name}:${province}の順で定義されているため、nameが先になります。', 'Toronto': 'テンプレートリテラルにはprovinceの値も含まれるため、nameだけが出力されることはありません。', 'Error': '渡された引数は文字列として正しく連結されるため、例外は発生しません。' } },
  { id: 'ca_js_e02', languageId: 'javascript', world: 'execute', title: 'Parliament Hill lookup', titleJa: 'パーラメント・ヒルのlookup', category: 'landmark', objective: 'object', source: SRC.parliamentHill, summaryJa: 'パーラメント・ヒルはオタワにあります。', prompt: 'オブジェクト lookup の結果を選んでください。', code: 'const landmark = { name: "Parliament Hill", city: "Ottawa" };\nconsole.log(landmark.city);', options: ['Ottawa', 'Parliament Hill', 'Toronto', 'city'], answer: 'Ottawa', expectedOutput: 'Ottawa', hint: 'city プロパティの値を見ます。', explanation: 'landmark.city は Ottawa を返します。', programmingExplanation: 'オブジェクトのプロパティ名を指定すると対応する値だけを取り出せます。', optionExplanations: { 'Ottawa': '正解。landmark.cityはcityプロパティの値であるOttawaを返します。', 'Parliament Hill': 'これはnameプロパティの値で、コードが読んでいるのはcityプロパティなので出力されません。', 'Toronto': 'landmarkオブジェクトにはTorontoという値は含まれておらず、cityの値はOttawaです。', 'city': '"city"はプロパティの名前そのものであり、ドット記法アクセスは対応する値を返します。' } },
  { id: 'ca_js_e03', languageId: 'javascript', world: 'execute', title: 'Railway sample stops', titleJa: '鉄道のサンプル停車地', category: 'transport', objective: 'loop', source: SRC.railway, summaryJa: 'サンプルとして Montreal、Toronto、Vancouver の鉄道停車地ラベルを扱います。', prompt: '配列を順に連結した出力を選んでください。', code: 'const stops = ["Montreal", "Toronto", "Vancouver"];\nlet result = "";\nfor (const stop of stops) {\n  result += stop + "|";\n}\nconsole.log(result.slice(0, -1));', options: ['Montreal|Toronto|Vancouver', 'Vancouver|Toronto|Montreal', 'Montreal|Toronto|', 'Vancouver'], answer: 'Montreal|Toronto|Vancouver', expectedOutput: 'Montreal|Toronto|Vancouver', hint: 'stops の並び順と slice(0, -1) の効果を見ます。', explanation: 'Montreal、Toronto、Vancouver の順に追加され、最後の区切りだけ削られます。', programmingExplanation: 'for...of で文字列を累積し、slice で末尾1文字を除きます。', optionExplanations: { 'Montreal|Toronto|Vancouver': '正解。stopsの順にMontreal|Toronto|Vancouver|となり、slice(0,-1)で末尾の|だけが取り除かれます。', 'Vancouver|Toronto|Montreal': 'for...ofループはstopsの並び順（Montrealが先）通りに処理するため、順序が入れ替わることはありません。', 'Montreal|Toronto|': 'slice(0,-1)は末尾1文字だけを除く処理で、3件目のVancouverまで削ってしまうことはありません。', 'Vancouver': 'Montreal、Torontoも結果に含まれるため、3件目だけが残ることはありません。' } },
  { id: 'ca_js_e04', languageId: 'javascript', world: 'execute', title: 'Great Lakes records', titleJa: '五大湖のレコード', category: 'geography', objective: 'array', source: SRC.greatLakes, summaryJa: '五大湖のうち4湖はカナダと国境を接しています。', prompt: 'filter と map の出力を選んでください。', code: 'const records = [\n  { name: "Lake Superior", greatLake: true },\n  { name: "Other", greatLake: false }\n];\nconst selected = records.filter(r => r.greatLake).map(r => r.name);\nconsole.log(selected[0]);', options: ['Lake Superior', 'Other', 'true', 'false'], answer: 'Lake Superior', expectedOutput: 'Lake Superior', hint: 'greatLake が true の record だけ残します。', explanation: 'Lake Superior の greatLake だけが true なので選ばれます。', programmingExplanation: 'filter は条件に合う要素を残し、map は値を変換します。', optionExplanations: { 'Lake Superior': '正解。greatLakeがtrueなのはLake Superiorだけなので、selectedにはLake Superiorのみが入りselected[0]はLake Superiorです。', 'Other': 'OthergreatLakeはfalseなので、filterの条件で除外されselectedには入りません。', 'true': 'selectedはname（文字列）の配列であり、greatLakeの真偽値そのものが出力されるわけではありません。', 'false': 'selected[0]は配列の先頭要素であるLake Superior（文字列）であり、真偽値falseが出力されることはありません。' } },
];

const jsFinalExecute = [
  { id: 'final_execute_CA_javascript_01', languageId: 'javascript', world: 'execute', title: 'Canadian UNESCO sites sorted', titleJa: 'カナダのユネスコ世界遺産（年代順）', category: 'world-heritage', objective: 'array', source: SRC.rideauCanal, summaryJa: 'カナダには登録年の異なる複数のユネスコ世界遺産があります。', prompt: 'objects を条件で絞り、年代でソートした出力を選んでください。', code: 'const records = [\n  { name: "Site A", kind: "heritage", year: 2007 },\n  { name: "Other", kind: "park", year: 1980 },\n  { name: "Site B", kind: "heritage", year: 1981 }\n];\nconst selected = records.filter(r => r.kind === "heritage").sort((a, b) => a.year - b.year).map(r => r.name);\nconsole.log(selected.join(">"));', options: ['Site B>Site A', 'Site A>Site B', 'Other>Site A', 'Site A>Other'], answer: 'Site B>Site A', expectedOutput: 'Site B>Site A', hint: 'kind で絞ったあと year の昇順です。', explanation: 'heritage は Site B(1981) と Site A(2007) で、昇順に Site B が先です。', programmingExplanation: 'filter、sort、map、join を順に適用します。', optionExplanations: { 'Site B>Site A': '正解。kind==="heritage"で絞るとSite A(2007)とSite B(1981)が残り、year昇順でSite B(1981)が先になります。', 'Site A>Site B': 'sortはyearの昇順で並べ替えるため、Site B(1981)がSite A(2007)より先になり、この順序にはなりません。', 'Other>Site A': 'Otherのkindはparkでheritageではないため、filterの条件で除外されます。', 'Site A>Other': 'Otherはheritageではないため除外され、また並び順もyear昇順とは異なります。' } },
  { id: 'final_execute_CA_javascript_02', languageId: 'javascript', world: 'execute', title: 'Canadian federal institutions count', titleJa: 'カナダの連邦機関カウント', category: 'institution', objective: 'array', source: SRC.nrc, summaryJa: 'サンプルとして国立研究会議（NRC）、CBCなどのデータを扱います。', prompt: 'filter の length を使った件数の出力を選んでください。', code: 'const institutions = [\n  { name: "National Research Council", federal: true },\n  { name: "CBC", federal: true },\n  { name: "Hudson\'s Bay Company", federal: false },\n  { name: "Local Shop", federal: false }\n];\nconst count = institutions.filter(i => i.federal).length;\nconsole.log(count);', options: ['2', '4', '1', 'National Research Council'], answer: '2', expectedOutput: '2', hint: 'federal が true の要素だけ数えます。', explanation: 'National Research Council、CBC の2件が true です。', programmingExplanation: 'filter で条件に合う要素を残し、length で件数を数えます。', optionExplanations: { '2': '正解。federalがtrueなのはNational Research CouncilとCBCの2件なので、countは2になります。', '4': 'institutionsには4件のデータがありますが、federalがtrueなのはそのうち2件だけです。', '1': 'National Research CouncilとCBCの両方がtrueなので、1件だけがカウントされるわけではありません。', 'National Research Council': 'countはtrueの件数を表す整数で、要素の名前そのものが出力されるわけではありません。' } },
];

const jsDebug = [
  { id: 'ca_js_b01', languageId: 'javascript', world: 'debug', title: 'Canadian postal code formatting', titleJa: 'カナダの郵便番号の形式', category: 'administration', objective: 'strings', source: SRC.postalCode, summaryJa: 'カナダの郵便番号は6文字の英数字混在形式です。', prompt: '6文字の郵便番号を区切って表示したいコードです。文字数の判定の不具合を直します。', code: 'const code = "K1A0B1";\nif (code.length === 5) {\n  console.log(`${code.slice(0, 3)} ${code.slice(3)}`);\n}', cause: '6文字の郵便番号なのに length === 5 と判定している', fix: 'length === 6 に修正してから slice する', impact: '6文字の郵便番号を正しく整形できる', why: 'サンプル code は6文字だからです。', correctedCode: 'const code = "K1A0B1";\nif (code.length === 6) {\n  console.log(`${code.slice(0, 3)} ${code.slice(3)}`);\n}', hint: 'code の文字数を数えます。', explanation: '条件が5のままだと整形処理に入りません。', programmingExplanation: '文字列 length と slice の開始・終了位置を合わせます。', causeOptionExplanations: { '6文字の郵便番号なのに length === 5 と判定している': '正解。codeは6文字の文字列ですが、条件がlength === 5なのでif文の中に入らず何も出力されません。', '出力文の文字列だけが間違っている': 'console.logとテンプレートリテラルの書き方自体は正しく、問題はif文の条件にあります。', 'データの件数が不足している': 'codeは"K1A0B1"という6文字のデータを正しく持っており、件数不足ではありません。' }, fixOptionExplanations: { 'length === 6 に修正してから slice する': '正解。codeの実際の長さである6に条件を合わせれば、if文の中に入りslice処理が実行されます。', '条件を削除する': '条件を削除すると桁数チェックが効かなくなり、想定外の長さの郵便番号でも整形してしまいます。', 'すべての値を同じ文字列にする': '郵便番号データを無視して固定文字列にすると、実際の郵便番号が反映されません。' }, impactOptionExplanations: { '6文字の郵便番号を正しく整形できる': '正解。条件をlength === 6に直すことで、6文字の郵便番号が正しく区切って表示されるようになります。', '常に例外を出して停止する': 'この修正は条件式の値を直すだけで、例外を発生させるものではありません。', '題材データを使わなくなる': 'codeの郵便番号データはそのまま使われ続けます。修正は判定する桁数だけです。' } },
  { id: 'ca_js_b02', languageId: 'javascript', world: 'debug', title: 'Founding provinces of Confederation', titleJa: '連邦結成時の原加盟州', category: 'history', objective: 'object', source: SRC.confederation, summaryJa: 'オンタリオ州とケベック州は1867年の連邦結成時の原加盟州です。', prompt: 'founding が true の州だけを表示したいコードです。プロパティ名の不一致を直します。', code: 'const provinces = [{ name: "Ontario", founding: true }, { name: "Quebec", founding: true }];\nconst labels = provinces.filter(p => p.original === true).map(p => p.name);\nconsole.log(labels.join(","));', cause: 'データには founding があるのに original を参照している', fix: 'p.founding === true に修正する', impact: 'Ontario と Quebec の両方を正しく選べる', why: '存在しない original は undefined になり、比較が true になりません。', correctedCode: 'const provinces = [{ name: "Ontario", founding: true }, { name: "Quebec", founding: true }];\nconst labels = provinces.filter(p => p.founding === true).map(p => p.name);\nconsole.log(labels.join(","));', hint: 'オブジェクトに実際にあるキーを確認します。', explanation: 'property name mismatch により条件が成立しません。', programmingExplanation: 'JavaScript では存在しないプロパティを読むと undefined になります。', causeOptionExplanations: { 'データには founding があるのに original を参照している': '正解。各オブジェクトはfoundingプロパティを持ちますが、フィルタ条件はp.originalを見ているため常にundefinedとなり一致しません。', '出力文の文字列だけが間違っている': 'console.logとjoinの書き方自体は正しく、問題はfilterの条件にあります。', 'データの件数が不足している': 'provincesにはOntarioとQuebecの2件があり、件数不足ではなくプロパティ名の不一致が原因です。' }, fixOptionExplanations: { 'p.founding === true に修正する': '正解。実際に存在するfoundingプロパティを参照することで、OntarioとQuebecの両方が正しく一致します。', '条件を削除する': '条件を削除するとフィルタの意味がなくなり、絞り込みたい意図が反映されません。', 'すべての値を同じ文字列にする': '州データを無視して固定文字列にすると、実際のfoundingに基づく絞り込みができなくなります。' }, impactOptionExplanations: { 'Ontario と Quebec の両方を正しく選べる': '正解。正しいプロパティ名foundingで比較することで、両州が正しく選ばれます。', '常に例外を出して停止する': '存在しないプロパティを読んでもJavaScriptではundefinedになるだけで、例外は発生しません。', '題材データを使わなくなる': 'OntarioとQuebecのデータはそのまま使われ続けます。修正は参照するプロパティ名だけです。' } },
  { id: 'ca_js_b03', languageId: 'javascript', world: 'debug', title: 'Heritage site record lookup', titleJa: '世界遺産レコードの参照', category: 'world-heritage', objective: 'object', source: SRC.rideauCanal, summaryJa: 'サンプルの世界遺産データも安全な参照の題材になります。', prompt: '欠けている detail があっても安全に表示したいコードです。undefined property access を直します。', code: 'const record = { name: "Rideau Canal" };\nconsole.log(record.detail.city.toUpperCase());', cause: 'record.detail が undefined のまま city を読んでいる', fix: 'optional chaining と代替値を使う', impact: 'detail がないレコードでも停止せず unknown を表示できる', why: 'undefined に対してさらにプロパティを読むと TypeError になります。', correctedCode: 'const record = { name: "Rideau Canal" };\nconst city = record.detail?.city ?? "unknown";\nconsole.log(city.toUpperCase());', hint: 'detail が存在するか確認してから読む必要があります。', explanation: 'undefined の先を読むとエラーになります。', programmingExplanation: 'optional chaining `?.` と nullish coalescing `??` で欠損値に備えます。', causeOptionExplanations: { 'record.detail が undefined のまま city を読んでいる': '正解。recordにはdetailプロパティが無いためrecord.detailはundefinedで、その先のcityを読むとTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logの書き方自体は正しく、問題はrecord.detail.cityというプロパティアクセスの部分です。', 'データの件数が不足している': 'recordは1件のオブジェクトとして正しく存在しており、件数不足ではなくdetailプロパティが無いことが原因です。' }, fixOptionExplanations: { 'optional chaining と代替値を使う': '正解。record.detail?.city ?? "unknown" とすることで、detailが無くてもエラーにならず代替値を使えます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': 'レコードのデータを無視して固定文字列にすると、本来の名前や都市の情報が表示されなくなります。' }, impactOptionExplanations: { 'detail がないレコードでも停止せず unknown を表示できる': '正解。optional chainingと??により、detailが無い場合でも例外を起こさずunknownとして処理を続けられます。', '常に例外を出して停止する': '修正後はdetailが無くても安全に処理されるため、TypeError自体が発生しなくなります。', '題材データを使わなくなる': 'nameなどの既存データはそのまま使われ続けます。修正は欠損時の読み取り方だけです。' } },
];

const jsFinalDebug = [
  { id: 'final_debug_CA_javascript_01', languageId: 'javascript', world: 'debug', title: 'Gros Morne National Park record', titleJa: 'グロスモーン国立公園のレコード', category: 'world-heritage-history', objective: 'object', source: SRC.grosMorne, summaryJa: 'グロスモーン国立公園はカナダにある世界遺産です。', prompt: '公園のレコードを安全に読み、heritage が true の場合だけ表示したいコードです。', code: 'const site = { name: "Gros Morne National Park", province: "Newfoundland and Labrador", heritage: true };\nif (site.heritag === true) console.log(site.name.toUpperCase());\nconsole.log(site.details.province);', cause: 'heritage を heritag と誤記し、details も存在確認なしで読んでいる', fix: 'site.heritage を比較し、site.details?.province ?? "unknown" のように安全に読む', impact: '正しい boolean 判定ができ、欠損 details があっても停止しない', why: '存在しないプロパティは undefined になり、未確認アクセスは TypeError になるためです。', correctedCode: 'const site = { name: "Gros Morne National Park", province: "Newfoundland and Labrador", heritage: true };\nif (site.heritage === true) console.log(site.name.toUpperCase());\nconsole.log(site.details?.province ?? "unknown");', hint: '実際のプロパティ名と、存在しない入れ子を確認します。', explanation: 'プロパティ名の誤りと安全でないアクセスが重なっています。', programmingExplanation: 'strict comparison、正しい property name、optional chaining を組み合わせて修正します。', causeOptionExplanations: { 'heritage を heritag と誤記し、details も存在確認なしで読んでいる': '正解。site.heritagは誤記でundefinedになりif文が実行されず、さらにsite.detailsも存在しないため次の行でTypeErrorになります。', '出力文の文字列だけが間違っている': 'console.logとtoUpperCaseの呼び方自体は正しく、問題はプロパティ名の誤記とdetailsへの未確認アクセスです。', 'データの件数が不足している': 'siteは1つのオブジェクトとして正しく定義されており、件数不足ではなくプロパティ名と存在確認の問題です。' }, fixOptionExplanations: { 'site.heritage を比較し、site.details?.province ?? "unknown" のように安全に読む': '正解。正しいプロパティ名heritageで判定し、details?.province ?? "unknown" で欠損にも安全に対応できます。', '条件を削除する': '条件を削除すると、heritageがtrueかどうかに関わらず常に名前が表示されてしまい、意図と異なります。', 'すべての値を同じ文字列にする': '公園のデータを無視して固定文字列にすると、実際の名前や州の情報が表示されなくなります。' }, impactOptionExplanations: { '正しい boolean 判定ができ、欠損 details があっても停止しない': '正解。プロパティ名を直し安全なアクセスにすることで、正しい判定と欠損時の継続動作の両方が実現します。', '常に例外を出して停止する': '修正後はoptional chainingにより欠損があってもTypeErrorは発生しなくなります。', '題材データを使わなくなる': 'name・province・heritageなどの既存データはそのまま使われ続けます。修正はプロパティ名と読み取り方だけです。' } },
];

Object.assign(FACT_DETAILS, {
  ca_java_d01: {
    backgroundJa: 'オタワはカナダの首都で、オンタリオ州東部に位置します。',
    historyJa: '1857年にヴィクトリア女王により首都として選定されました。',
    episodeJa: 'トロント・モントリオール・ケベック・キングストンの対立を避ける妥協案として選ばれた経緯があります。',
    keyPointsJa: ['1857年に首都として選定', 'オンタリオ州に位置', '対立を避ける妥協案として選定', 'オタワ川沿いの都市'],
  },
  ca_java_d02: {
    backgroundJa: 'カナダ連邦は1867年7月1日に成立しました。',
    historyJa: '英領北アメリカ法により、カナダ州、ニューブランズウィック、ノバスコシアの4州が統合しました。',
    episodeJa: '7月1日は現在「カナダ・デー」として国民の祝日に定められています。',
    keyPointsJa: ['1867年7月1日に成立', '英領北アメリカ法に基づく', '当初は4州で結成', '7月1日はカナダ・デー'],
  },
  ca_java_d03: {
    backgroundJa: 'カナダの公用語法は1969年に制定されました。',
    historyJa: '英語とフランス語を連邦レベルで同等の公用語と定めた法律です。',
    episodeJa: 'この法律によりカナダの行政文書や案内表示は両言語で表記されることが一般化しました。',
    keyPointsJa: ['1969年に公用語法制定', '英語とフランス語が公用語', '連邦文書は両言語表記', 'ケベック州はフランス語が多数派'],
  },
  ca_java_d04: {
    backgroundJa: 'カナダ太平洋鉄道（CPR）は大陸横断鉄道として広大な国土を結びました。',
    historyJa: '1885年11月7日に全線が完成しました。',
    episodeJa: 'BC州の連邦加入（1871年）の条件として鉄道建設が約束され、完成によりモントリオールとバンクーバーが直結されました。',
    keyPointsJa: ['1885年11月7日に完成', 'BC州加入の条件として建設', 'モントリオールとバンクーバーを結ぶ', '大陸横断鉄道'],
  },
  ca_java_d05: {
    backgroundJa: 'カナダは10州・3準州から構成される連邦国家です。',
    historyJa: 'ケベック州はフランス語が多数派の州として知られます。',
    episodeJa: '州ごとに異なる歴史的背景と文化を持ち、連邦制のもとで一定の自治権を有しています。',
    keyPointsJa: ['10州・3準州で構成', 'ケベック州はフランス語が多数派', '州ごとに自治権がある', '連邦制国家'],
  },
  final_decode_CA_java_01: {
    backgroundJa: 'リドー運河はオタワとキングストンを結ぶ、現在も稼働する世界遺産の運河です。',
    historyJa: '1826〜1832年に軍事目的で建設されました。',
    episodeJa: '2007年にユネスコ世界遺産に登録され、冬季には天然のスケートリンクとして開放されます。',
    keyPointsJa: ['1826〜1832年に建設', '2007年にユネスコ世界遺産登録', '現役で稼働する運河', '冬は天然スケートリンクになる'],
  },
  final_decode_CA_java_02: {
    backgroundJa: 'グロスモーン国立公園はニューファンドランド・ラブラドール州にある自然遺産です。',
    historyJa: '1987年にユネスコ世界遺産（自然遺産）に登録されました。',
    episodeJa: '地球のマントル層が地表に露出する珍しい地形が見られ、地質学的に重要な調査地です。',
    keyPointsJa: ['1987年にユネスコ世界遺産登録', 'プレートテクトニクスの証拠', 'マントル層が地表に露出', 'ニューファンドランド州に位置'],
  },
  final_decode_CA_java_03: {
    backgroundJa: 'SGang Gwaay（アンソニー島）はハイダ・グワイ諸島にあるハイダ族の旧居住地です。',
    historyJa: '1981年にユネスコ世界遺産に登録されました。',
    episodeJa: '島には10本以上のトーテムポールが現存し、ハイダ族の伝統的な木彫り文化を伝えています。',
    keyPointsJa: ['1981年にユネスコ世界遺産登録', 'ハイダ族の旧居住地', 'トーテムポールが現存', 'ハイダ・グワイ諸島に位置'],
  },
  ca_java_e01: {
    backgroundJa: 'インスリンは1921年にトロント大学のフレデリック・バンティングらが発見しました。',
    historyJa: 'バンティングとチャールズ・ベストが研究を開始し、糖尿病治療に革命をもたらしました。',
    episodeJa: '1923年にバンティングとマクロードがノーベル生理学・医学賞を受賞しました。',
    keyPointsJa: ['1921年に発見', 'トロント大学での研究', '1923年にノーベル賞受賞', '糖尿病治療に革命をもたらした'],
  },
  ca_java_e02: {
    backgroundJa: 'カナダは国土が広く、太平洋標準時から大西洋標準時まで複数の標準時間帯があります。',
    historyJa: 'バンクーバーは太平洋標準時（UTC-8）、トロントは東部標準時（UTC-5）を使用します。',
    episodeJa: '東西の時差は最大で4.5時間に及び、ニューファンドランド標準時はさらに30分のずれを持つ独自の時間帯です。',
    keyPointsJa: ['複数の標準時間帯がある', '太平洋標準時〜大西洋標準時', '東西の時差は最大約4.5時間', 'ニューファンドランドは30分ずれた時間帯'],
  },
  ca_java_e03: {
    backgroundJa: 'カナダ太平洋鉄道はモントリオールとバンクーバーを結ぶ大陸横断鉄道です。',
    historyJa: '1881年に建設が始まり、1885年に全線完成しました。',
    episodeJa: '鉄道完成によりカナダ東西の経済的・政治的統合が大きく進みました。',
    keyPointsJa: ['1881年に建設開始', '1885年に全線完成', 'モントリオール〜バンクーバー間', '東西統合に貢献'],
  },
  ca_java_e04: {
    backgroundJa: 'ケベック州ではフランス語が多数派で、カナダ英語とは異なる言語文化を持ちます。',
    historyJa: 'ケベック・フランス語は17世紀のフランス植民地時代の言語を基盤としています。',
    episodeJa: 'ケベック州はフランス語憲章（1977年）により州内での公的なフランス語使用を促進しています。',
    keyPointsJa: ['17世紀の植民地時代が起源', '1977年にフランス語憲章制定', 'ケベック州で多数派', '独自の言語文化を持つ'],
  },
  final_execute_CA_java_01: {
    backgroundJa: 'トロントとシャーロットタウンはカナダの異なる規模の都市の例です。',
    historyJa: 'トロントはカナダ最大の都市、シャーロットタウンはプリンスエドワードアイランド州の州都です。',
    episodeJa: 'シャーロットタウンは1864年のシャーロットタウン会議の開催地で、カナダ連邦結成の議論が始まった場所として知られます。',
    keyPointsJa: ['トロントはカナダ最大の都市', 'シャーロットタウンはPEI州都', '1864年に連邦結成の会議開催', '都市規模は大きく異なる'],
  },
  final_execute_CA_java_02: {
    backgroundJa: '国立研究会議（NRC）はカナダの主要な連邦科学研究機関です。',
    historyJa: '1916年に設立され、現在も国の科学技術政策に関わっています。',
    episodeJa: 'NRCは航空・医療・材料科学など幅広い分野で研究を行い、カナダの技術革新を支えています。',
    keyPointsJa: ['1916年に設立', '連邦の科学研究機関', '幅広い分野で研究', 'カナダの技術革新を支える'],
  },
  ca_java_b01: {
    backgroundJa: 'カナダの州・準州には2文字の略号があり、郵便や行政で使われます。',
    historyJa: 'ブリティッシュコロンビア州は「BC」という略号で表されます。',
    episodeJa: 'BC州は1871年にカナダ連邦に加入し、太平洋岸の州として連邦の領土を広げました。',
    keyPointsJa: ['BC＝ブリティッシュコロンビア', '1871年に連邦加入', '太平洋岸の州', '郵便・行政で略号を使用'],
  },
  ca_java_b02: {
    backgroundJa: 'カナダの郵便番号は1971年から導入された、英数字混在の6文字形式です。',
    historyJa: 'カナダポストが1971年に現行の郵便番号制度を導入しました。',
    episodeJa: '先頭の文字は地域を示し、識別コードの先頭ゼロは数値ではなく文字列として保持する必要があります。',
    keyPointsJa: ['1971年に現行制度を導入', '英数字混在の6文字形式', '先頭の文字が地域を示す', 'カナダポストが管理'],
  },
  ca_java_b03: {
    backgroundJa: 'カナダの国立公園では来訪者数などの統計が定期的に記録されます。',
    historyJa: 'バンフ国立公園は1885年に設立されたカナダ最古の国立公園です。',
    episodeJa: '国立公園の年間来訪者数は数値データとして集計され、平均値の計算にも使われます。',
    keyPointsJa: ['バンフは1885年設立', 'カナダ最古の国立公園', '来訪者数は統計データ', '平均値計算にも使われる'],
  },
  final_debug_CA_java_01: {
    backgroundJa: 'リドー運河はオタワとキングストンを結ぶ、現在も稼働する世界遺産の運河です。',
    historyJa: '1826〜1832年に建設され、2007年にユネスコ世界遺産に登録されました。',
    episodeJa: '世界遺産の登録年データは正確な記録として保管され、欠損や誤りに備えた安全な処理が求められます。',
    keyPointsJa: ['1826〜1832年に建設', '2007年にユネスコ世界遺産登録', '現役で稼働する運河', '登録年データは正確な記録'],
  },
});

const javaDecode = [
  { id: 'ca_java_d01', languageId: 'java', world: 'decode', title: 'Ottawa as capital of Canada', titleJa: 'カナダの首都オタワ', category: 'history-landmark', objective: 'strings', source: SRC.ottawa, summaryJa: 'オタワはカナダの首都です。', prompt: 'Canada:Ottawa と表示されるよう、capital の文字列を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String country = "Canada";\n    String capital = ___BLANK___;\n    System.out.println(country + ":" + capital);\n  }\n}', answer: '"Ottawa"', expectedOutput: 'Canada:Ottawa', hint: 'Java の String はダブルクォートで囲みます。', explanation: 'capital に "Ottawa" を入れると + で連結されます。', programmingExplanation: 'Java の System.out.println は式の結果を1行に出力します。' },
  { id: 'ca_java_d02', languageId: 'java', world: 'decode', title: 'Canadian Confederation year in Java', titleJa: 'カナダ連邦結成の年（Java）', category: 'history', objective: 'numbers', source: SRC.confederation, summaryJa: 'カナダ連邦は1867年に結成されました。', prompt: 'Confederation:1867 と表示されるよう、int の値を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = ___BLANK___;\n    String label = "Confederation:" + year;\n    System.out.println(label);\n  }\n}', answer: '1867', expectedOutput: 'Confederation:1867', hint: 'int なので引用符なしの数値です。', explanation: 'year に1867を入れると文字列連結で Confederation:1867 になります。', programmingExplanation: 'Java では String と int を + すると表示用の文字列として連結されます。' },
  { id: 'ca_java_d03', languageId: 'java', world: 'decode', title: 'Official Languages Act year', titleJa: '公用語法制定の年', category: 'history-culture', objective: 'condition', source: SRC.officialLanguages, summaryJa: 'カナダの公用語法は1969年に制定されました。', prompt: 'year が1969のとき OfficialLanguagesAct と表示されるよう、条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    int year = 1969;\n    if (___BLANK___) {\n      System.out.println("OfficialLanguagesAct");\n    } else {\n      System.out.println("other");\n    }\n  }\n}', answer: 'year == 1969', expectedOutput: 'OfficialLanguagesAct', hint: '値が等しいかは == で比較します。', explanation: 'year == 1969 が true になるため OfficialLanguagesAct が出力されます。', programmingExplanation: '比較演算子 == は左右の値が等しいかを調べます。' },
  { id: 'ca_java_d04', languageId: 'java', world: 'decode', title: 'Canadian travel mode labels', titleJa: 'カナダの移動手段ラベル', category: 'transport', objective: 'switch', source: SRC.railway, summaryJa: 'カナダでは鉄道・航空・道路など複数の移動手段が使われています。', prompt: 'mode が rail のとき Railway transport と表示されるよう、switch の case を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String mode = "rail";\n    switch (mode) {\n      case ___BLANK___:\n        System.out.println("Railway transport");\n        break;\n      default:\n        System.out.println("other");\n    }\n  }\n}', answer: '"rail"', expectedOutput: 'Railway transport', hint: 'case には mode と同じ文字列を書きます。', explanation: 'case "rail" が一致し、Railway transport が出力されます。', programmingExplanation: 'switch は値に一致する case の処理を実行します。' },
  { id: 'ca_java_d05', languageId: 'java', world: 'decode', title: 'Canadian provinces sample', titleJa: 'カナダの州サンプル', category: 'geography', objective: 'array', source: SRC.provinces, summaryJa: 'サンプルとして Ontario、Quebec、Alberta などの州ラベルを扱います。', prompt: 'provinces 配列を拡張 for で読み、Quebec だけを表示するよう条件を埋めてください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String[] provinces = {"Ontario", "Quebec", "Alberta"};\n    for (String province : provinces) {\n      if (___BLANK___) System.out.println(province);\n    }\n  }\n}', answer: 'province.equals("Quebec")', expectedOutput: 'Quebec', hint: 'String の内容比較は equals です。', explanation: 'province が Quebec のときだけ出力されます。', programmingExplanation: 'enhanced for は配列の要素を1つずつ変数に入れて処理します。' },
];

const javaFinalDecode = [
  { id: 'final_decode_CA_java_01', languageId: 'java', world: 'decode', title: 'Rideau Canal in Java', titleJa: 'リドー運河（Java）', category: 'world-heritage', objective: 'method', source: SRC.rideauCanal, summaryJa: 'リドー運河はカナダにある世界遺産です。', prompt: 'category が canal のとき heritage と表示するよう、メソッド呼び出しの空欄を埋めてください。', code: 'public class Main {\n  static String label(String category) {\n    if (category.equals("canal")) return "heritage";\n    return "other";\n  }\n  public static void main(String[] args) {\n    System.out.println(label(___BLANK___));\n  }\n}', answer: '"canal"', expectedOutput: 'heritage', hint: 'category に渡す文字列を引用符付きで書きます。', explanation: '"canal" が category に入り、heritage が返ります。', programmingExplanation: 'メソッドの引数は呼び出し時に渡した値で初期化されます。' },
  { id: 'final_decode_CA_java_02', languageId: 'java', world: 'decode', title: 'Gros Morne National Park in Java', titleJa: 'グロスモーン国立公園（Java）', category: 'world-heritage', objective: 'collections', source: SRC.grosMorne, summaryJa: 'グロスモーン国立公園はカナダにある世界遺産です。', prompt: 'ArrayList から park が true の record だけを出力するよう、条件を埋めてください。', code: 'import java.util.ArrayList;\nclass Site {\n  String name;\n  boolean park;\n  Site(String n, boolean p) { name = n; park = p; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Site> sites = new ArrayList<>();\n    sites.add(new Site("Gros Morne", true));\n    sites.add(new Site("Other", false));\n    for (Site s : sites) {\n      if (___BLANK___) System.out.println(s.name);\n    }\n  }\n}', answer: 's.park', expectedOutput: 'Gros Morne', hint: 'park フィールドが true の record だけです。', explanation: 'Gros Morne の park だけが true です。', programmingExplanation: 'ArrayList、クラス、拡張 for、boolean フィールドを組み合わせています。' },
  { id: 'final_decode_CA_java_03', languageId: 'java', world: 'decode', title: 'SGang Gwaay in Java', titleJa: 'SGang Gwaay（Java）', category: 'world-heritage-science', objective: 'class', source: SRC.sGangGwaay, summaryJa: 'SGang Gwaayはカナダにある世界遺産です。', prompt: 'HashMap から SGangGwaay の地域を取り出し SGang Gwaay:HaidaGwaii と表示するキーを埋めてください。', code: 'import java.util.HashMap;\nclass Site {\n  String name;\n  String region;\n  Site(String n, String r) { name = n; region = r; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Site> map = new HashMap<>();\n    map.put("SGangGwaay", new Site("SGang Gwaay", "HaidaGwaii"));\n    Site site = map.get(___BLANK___);\n    System.out.println(site.name + ":" + site.region);\n  }\n}', answer: '"SGangGwaay"', expectedOutput: 'SGang Gwaay:HaidaGwaii', hint: 'put したキーと同じ文字列で get します。', explanation: 'HashMap の SGangGwaay キーから site オブジェクトを取り出します。', programmingExplanation: 'class、コンストラクタ、HashMap.get、フィールド参照を組み合わせています。' },
];

const javaExecute = [
  { id: 'ca_java_e01', languageId: 'java', world: 'execute', title: 'Frederick Banting', titleJa: 'フレデリック・バンティング', category: 'science-history', objective: 'strings', source: SRC.insulin, summaryJa: 'フレデリック・バンティングはインスリンの発見と結びつく人物です。', prompt: 'String.equals の比較結果を追跡し、出力を選んでください。', code: 'public class Main {\n  public static void main(String[] args) {\n    String discoverer = "Banting";\n    if (discoverer.equals("Banting")) System.out.println("insulin");\n    else System.out.println("other");\n  }\n}', options: ['insulin', 'other', 'Banting', 'true'], answer: 'insulin', expectedOutput: 'insulin', hint: 'equals の比較は true になります。', explanation: '文字列内容が一致するので insulin が出ます。', programmingExplanation: 'Java の String 内容比較には equals を使います。', optionExplanations: { 'insulin': '正解。discoverer.equals("Banting")はtrueになるため、if節のinsulinが出力されます。', 'other': 'equalsによる文字列内容の比較はtrueになるため、else節のotherは実行されません。', 'Banting': '出力されるのはif/elseで選ばれた固定文字列insulinまたはotherであり、discovererの値そのものではありません。', 'true': 'if文の条件式の評価結果ではなく、その分岐内で実行されるSystem.out.printlnの文字列が出力されます。' } },
  { id: 'ca_java_e02', languageId: 'java', world: 'execute', title: 'Canadian time-zone sample', titleJa: 'カナダの時間帯サンプル', category: 'geography-time', objective: 'method', source: SRC.timezones, summaryJa: 'カナダには太平洋標準時から大西洋標準時まで複数の時間帯があります。', prompt: 'メソッド戻り値と足し算を追跡し、出力を選んでください。', code: 'public class Main {\n  static int localHour(int utcHour, int offset) { return utcHour + offset; }\n  public static void main(String[] args) {\n    System.out.println(localHour(12, -5));\n  }\n}', options: ['7', '12', '-5', '17'], answer: '7', expectedOutput: '7', hint: '12 + (-5) を計算します。', explanation: 'UTC 12時にオフセット-5を足すので7です。', programmingExplanation: 'int 引数を受け取り、return で計算結果を返します。', optionExplanations: { '7': '正解。localHour(12, -5)はutcHour + offsetを計算するため、12 + (-5) = 7が返ります。', '12': 'これはutcHourの値だけで、offsetの-5を足す前の値です。', '-5': 'これはoffset引数の値だけで、utcHourの12を足す前の値です。', '17': 'returnの式はutcHour + offsetという加算であり、offsetが負の値であることを無視した12+5の結果ではありません。' } },
  { id: 'ca_java_e03', languageId: 'java', world: 'execute', title: 'Railway sample labels in Java', titleJa: '鉄道のサンプルラベル（Java）', category: 'transport', objective: 'collections', source: SRC.railway, summaryJa: 'カナダ太平洋鉄道のサンプルラベルとして扱います。', prompt: 'ArrayList を順に連結した出力を選んでください。', code: 'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> labels = new ArrayList<>();\n    labels.add("Montreal");\n    labels.add("Toronto");\n    String result = "";\n    for (String label : labels) result += label + ">";\n    System.out.println(result.substring(0, result.length() - 1));\n  }\n}', options: ['Montreal>Toronto', 'Toronto>Montreal', 'Montreal>', 'Toronto'], answer: 'Montreal>Toronto', expectedOutput: 'Montreal>Toronto', hint: '追加した順に result へ入ります。', explanation: 'Montreal、Toronto の順に追加され、最後の > を削ります。', programmingExplanation: 'ArrayList、拡張 for、文字列連結、substring を追跡します。', optionExplanations: { 'Montreal>Toronto': '正解。labelsにはMontreal、Torontoの順で追加されており、result"Montreal>Toronto>"からsubstringで末尾の>を削るとMontreal>Torontoになります。', 'Toronto>Montreal': '拡張forループはlabelsに追加された順（Montrealが先）に処理するため、順序が入れ替わることはありません。', 'Montreal>': '拡張forループはTorontoの分も処理するため、Montrealだけで止まることはありません。', 'Toronto': 'Montrealも結果に含まれるため、2件目のTorontoだけが残ることはありません。' } },
  { id: 'ca_java_e04', languageId: 'java', world: 'execute', title: 'Quebec French label sample', titleJa: 'ケベック・フランス語ラベルのサンプル', category: 'language-culture', objective: 'inheritance', source: SRC.officialLanguages, summaryJa: 'サンプルとしてケベック州のフランス語に関するラベルデータを扱います。', prompt: '継承とオーバーライドされたメソッド呼び出しの出力を選んでください。', code: 'class LanguageType {\n  String label() { return "language"; }\n}\nclass QuebecFrench extends LanguageType {\n  @Override\n  String label() { return "QuebecFrench"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    LanguageType type = new QuebecFrench();\n    System.out.println(type.label());\n  }\n}', options: ['QuebecFrench', 'language', 'LanguageType', 'error'], answer: 'QuebecFrench', expectedOutput: 'QuebecFrench', hint: '実体は QuebecFrench です。', explanation: '変数の型は親でも、実行時のオブジェクトの override が呼ばれます。', programmingExplanation: 'ポリモーフィズムにより、子クラスで上書きしたメソッドが実行されます。', optionExplanations: { 'QuebecFrench': '正解。typeの実体（実際に生成されたオブジェクト）はQuebecFrenchなので、overrideされたlabel()が呼ばれます。', 'language': '変数の宣言型はLanguageTypeですが、実行時にはQuebecFrenchのoverrideされたメソッドが呼ばれるため親クラスの値は使われません。', 'LanguageType': 'これは型の名前であり、label()メソッドが返す文字列ではありません。', 'error': 'QuebecFrenchはLanguageTypeを正しく継承してoverrideしているため、コンパイルも実行も問題なく行われます。' } },
];

const javaFinalExecute = [
  { id: 'final_execute_CA_java_01', languageId: 'java', world: 'execute', title: 'Canadian city-population records', titleJa: 'カナダの都市・人口レコード', category: 'geography', objective: 'collections', source: SRC.cnTower, summaryJa: 'サンプルとして Toronto、Charlottetown などの都市データを扱います。', prompt: 'HashMap とメソッドで人口規模が大きい都市を選んだ出力を選んでください。', code: 'import java.util.HashMap;\npublic class Main {\n  static boolean isLarge(int population) { return population >= 2; }\n  public static void main(String[] args) {\n    HashMap<String, Integer> cities = new HashMap<>();\n    cities.put("Toronto", 3);\n    cities.put("Charlottetown", 0);\n    String result = "";\n    for (String city : cities.keySet()) if (isLarge(cities.get(city))) result += city;\n    System.out.println(result);\n  }\n}', options: ['Toronto', 'Charlottetown', 'TorontoCharlottetown', '3'], answer: 'Toronto', expectedOutput: 'Toronto', hint: 'population が2以上の city だけです。', explanation: 'Toronto の population だけが条件を満たします。', programmingExplanation: 'HashMap、keySet、メソッド戻り値、条件分岐を組み合わせます。', optionExplanations: { 'Toronto': '正解。isLarge(3)はtrueでisLarge(0)はfalseなので、population>=2を満たすTorontoだけがresultに追加されます。', 'Charlottetown': 'Charlottetownのpopulationは0でisLarge(0)はfalseになるため、resultには追加されません。', 'TorontoCharlottetown': 'isLargeの条件を満たすのはTorontoだけで、Charlottetownは条件を満たさないため連結されません。', '3': 'resultにはisLargeの条件を満たしたcity名（文字列）が入り、population自体の数値が出力されるわけではありません。' } },
  { id: 'final_execute_CA_java_02', languageId: 'java', world: 'execute', title: 'Canadian federal institution sample records', titleJa: 'カナダの連邦機関サンプルレコード', category: 'science-institution', objective: 'collections', source: SRC.nrc, summaryJa: 'サンプルとしてカナダの連邦機関データを扱います。', prompt: 'objects、ArrayList、condition、method output を追跡した出力を選んでください。', code: 'import java.util.ArrayList;\nclass Institution {\n  String name;\n  boolean federal;\n  Institution(String n, boolean f) { name = n; federal = f; }\n  String label() { return name + ":federal"; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Institution> institutions = new ArrayList<>();\n    institutions.add(new Institution("National Research Council", true));\n    institutions.add(new Institution("Local Shop", false));\n    for (Institution institution : institutions) if (institution.federal) System.out.println(institution.label());\n  }\n}', options: ['National Research Council:federal', 'Local Shop:federal', 'National Research Council', 'federal:National Research Council'], answer: 'National Research Council:federal', expectedOutput: 'National Research Council:federal', hint: 'federal が true の Institution だけ label() を呼びます。', explanation: 'National Research Council だけが federal なので label() の結果が表示されます。', programmingExplanation: 'クラス、ArrayList、boolean フィールド、インスタンスメソッドをまとめて追跡します。', optionExplanations: { 'National Research Council:federal': '正解。National Research Councilのfederalはtrueなのでif条件を満たし、label()が呼ばれてNational Research Council:federalが表示されます。', 'Local Shop:federal': 'Local Shopのfederalはfalseなのでif条件を満たさず、label()は呼ばれず出力されません。', 'National Research Council': 'label()はname + ":federal"を返すため、nameだけでなく":federal"も含めて出力されます。', 'federal:National Research Council': 'label()はname + ":federal"の順で連結しているため、nameが先、":federal"が後になります。' } },
];

const javaDebug = [
  { id: 'ca_java_b01', languageId: 'java', world: 'debug', title: 'Province code lookup', titleJa: '州コード lookup（Java）', category: 'administration', objective: 'strings', source: SRC.provinces, summaryJa: 'カナダの州コードは ON、QC、BC などです。', prompt: '州コード BC を判定する Java コードです。String 比較の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BC");\n    if (code == "BC") System.out.println("BritishColumbia");\n  }\n}', cause: 'String の内容比較に == を使っている', fix: 'code.equals("BC") に修正する', impact: '別オブジェクトの String でも内容が同じなら一致判定できる', why: '== は参照の同一性、equals は文字列内容を比較するためです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String code = new String("BC");\n    if (code.equals("BC")) System.out.println("BritishColumbia");\n  }\n}', hint: 'Java の String 比較方法を思い出します。', explanation: '== では参照が違うと false になります。', programmingExplanation: 'equals はオブジェクトが表す内容を比較します。', causeOptionExplanations: { 'String の内容比較に == を使っている': '正解。new String("BC")で作られたcodeはリテラル"BC"とは別オブジェクトなので、==による参照比較はfalseになります。', '出力文の文字列だけが間違っている': 'System.out.printlnの書き方自体は正しく、問題はif文の比較方法にあります。', 'データの件数が不足している': 'codeには"BC"という値が正しく入っており、件数の問題ではなく比較方法が原因です。' }, fixOptionExplanations: { 'code.equals("BC") に修正する': '正解。equalsは文字列の内容を比較するため、別オブジェクトでも内容が同じなら一致判定できます。', '条件を削除する': '条件を削除すると州コードに関わらず常にBritishColumbiaと表示されてしまい、判定の意味がなくなります。', 'すべての値を同じ文字列にする': '州コードのデータを無視して固定文字列にすると、実際のコードに基づく判定ができなくなります。' }, impactOptionExplanations: { '別オブジェクトの String でも内容が同じなら一致判定できる': '正解。equalsを使うことで、newで作られた別オブジェクトでも文字列の内容が同じなら正しく一致と判定できます。', '常に例外を出して停止する': 'この修正は比較方法を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '州コードのデータはそのまま使われ続けます。修正は比較方法だけです。' } },
  { id: 'ca_java_b02', languageId: 'java', world: 'debug', title: 'Leading-zero postal code formatting', titleJa: '先頭ゼロ付き郵便番号風の形式', category: 'administration-formatting', objective: 'strings', source: SRC.postalCode, summaryJa: '郵便番号風のサンプルは先頭ゼロを保つため文字列として扱います。', prompt: 'サンプル郵便番号風コード 06 を保持したいコードです。数値保存の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int sample = 6;\n    System.out.println(sample);\n  }\n}', cause: '先頭ゼロを含む識別コードを数値として保存している', fix: 'String sample = "06"; として保存する', impact: '先頭ゼロを失わず、表示形式をそのまま保てる', why: '識別コードは計算対象ではなく表記を保つデータだからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    String sample = "06";\n    System.out.println(sample);\n  }\n}', hint: '計算しないコードは String が安全です。', explanation: '数値型では表記上の先頭ゼロを保持できません。', programmingExplanation: 'IDやコード形式は numeric type ではなく String として扱います。', causeOptionExplanations: { '先頭ゼロを含む識別コードを数値として保存している': '正解。6をintとして保存すると先頭ゼロの情報が失われ、本来の表記06になりません。', '出力文の文字列だけが間違っている': 'System.out.println(sample)自体は正しく書けており、出力文の指定ミスではありません。', 'データの件数が不足している': 'sampleには値が1つ正しく入っており、件数の問題ではなく数値型で保存していることが原因です。' }, fixOptionExplanations: { 'String sample = "06"; として保存する': '正解。最初から文字列で保存すれば、先頭ゼロも含めて意図した表記をそのまま保持できます。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '実際の郵便番号風データを無視して固定文字列にすると、正しいコードが表示されません。' }, impactOptionExplanations: { '先頭ゼロを失わず、表示形式をそのまま保てる': '正解。文字列として保存すれば、先頭ゼロを含む表記をそのまま失わずに保持できます。', '常に例外を出して停止する': '文字列として保存する修正は例外処理とは無関係で、エラーを発生させるものではありません。', '題材データを使わなくなる': '郵便番号風コードのデータ自体はそのまま使われ続けます。修正は保存する型だけです。' } },
  { id: 'ca_java_b03', languageId: 'java', world: 'debug', title: 'National park visitor average', titleJa: '国立公園来訪者数の平均', category: 'park-statistics', objective: 'numbers', source: SRC.banff, summaryJa: 'サンプルの来訪者数データは平均計算の題材として扱えます。', prompt: '17と2の平均8.5を出したいコードです。整数除算の不具合を直します。', code: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int years = 2;\n    double average = total / years;\n    System.out.println(average);\n  }\n}', cause: 'int 同士の割り算なので小数部が切り捨てられる', fix: 'total または years を double に変換してから割る', impact: '8.5 のような小数平均を正しく表せる', why: 'Java は int / int を整数除算として計算するからです。', correctedCode: 'public class Main {\n  public static void main(String[] args) {\n    int total = 17;\n    int years = 2;\n    double average = (double) total / years;\n    System.out.println(average);\n  }\n}', hint: '割り算の前に片方を double にします。', explanation: 'int / int は8になってから double に入ります。', programmingExplanation: 'キャストにより小数を含む割り算へ変えます。', causeOptionExplanations: { 'int 同士の割り算なので小数部が切り捨てられる': '正解。totalとyearsはどちらもintなので17/2は整数除算で8になり、小数部の.5が切り捨てられてからdoubleに代入されます。', '出力文の文字列だけが間違っている': 'System.out.println(average)自体は正しく書けており、問題は割り算の計算方法にあります。', 'データの件数が不足している': 'totalとyearsにはそれぞれ正しい値が入っており、件数の問題ではなく整数除算が原因です。' }, fixOptionExplanations: { 'total または years を double に変換してから割る': '正解。どちらか一方を(double)でキャストしてから割ることで、小数を含む正しい除算になります。', '条件を削除する': 'このコードにはif文などの条件はなく、削除すべき条件もありません。', 'すべての値を同じ文字列にする': '来訪者数データを無視して固定文字列にすると、実際の平均値が計算・表示できなくなります。' }, impactOptionExplanations: { '8.5 のような小数平均を正しく表せる': '正解。キャストにより小数を含む除算になるため、17÷2=8.5のような正しい平均が表示されます。', '常に例外を出して停止する': 'このキャストによる修正は計算結果を変えるだけで、例外を発生させるものではありません。', '題材データを使わなくなる': '来訪者数データはそのまま使われ続けます。修正は割り算の計算方法だけです。' } },
];

const javaFinalDebug = [
  { id: 'final_debug_CA_java_01', languageId: 'java', world: 'debug', title: 'Rideau Canal year lookup', titleJa: 'リドー運河の登録年lookup', category: 'world-heritage', objective: 'collections', source: SRC.rideauCanal, summaryJa: 'リドー運河はカナダにある世界遺産です。', prompt: 'HashMap の欠損値を確認し、数値変換を安全に行う Java コードへ直します。', code: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> years = new HashMap<>();\n    years.put("Rideau Canal", "2007");\n    String yearText = years.get("Other Site");\n    int year = Integer.parseInt(yearText);\n    System.out.println(year);\n  }\n}', cause: '存在しないキーを get して null を parseInt に渡している', fix: 'get した値が null でないか確認し、try/catch で変換失敗にも備える', impact: '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる', why: 'HashMap.get はキーがないと null を返し、parseInt は null を処理できないためです。', correctedCode: 'import java.util.HashMap;\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, String> years = new HashMap<>();\n    years.put("Rideau Canal", "2007");\n    String yearText = years.get("Rideau Canal");\n    try {\n      if (yearText != null) System.out.println(Integer.parseInt(yearText));\n      else System.out.println("unknown");\n    } catch (NumberFormatException e) {\n      System.out.println("invalid");\n    }\n  }\n}', hint: 'get の戻り値が null かもしれない点を見ます。', explanation: 'null を Integer.parseInt に渡すと安全に処理できません。', programmingExplanation: 'HashMap、null check、Integer.parseInt、try/catch を組み合わせて安全に変換します。', causeOptionExplanations: { '存在しないキーを get して null を parseInt に渡している': '正解。"Other Site"はyearsに登録されておらずgetはnullを返すため、Integer.parseInt(null)でNullPointerExceptionになります。', '出力文の文字列だけが間違っている': 'System.out.println(year)自体は正しく書けており、問題は登録されていないキーを取得・変換している部分です。', 'データの件数が不足している': 'yearsには"Rideau Canal"が正しく登録されており、件数不足ではなく検索するキーが間違っていることが原因です。' }, fixOptionExplanations: { 'get した値が null でないか確認し、try/catch で変換失敗にも備える': '正解。nullチェックとtry/catchを組み合わせることで、欠損キーや不正な数値文字列の両方に安全に対応できます。', '条件を削除する': 'このコードには元々条件分岐がなく、削除すべき条件もありません。むしろnullチェックを追加する必要があります。', 'すべての値を同じ文字列にする': '年代データを無視して固定文字列にすると、実際の年代の値が表示・判定できなくなります。' }, impactOptionExplanations: { '欠損キーや不正な数値文字列でも処理が落ちず、安全に分岐できる': '正解。nullチェックとtry/catchにより、キーが無い場合も数値変換に失敗する場合も、処理が落ちずに分岐できます。', '常に例外を出して停止する': '修正後はnullチェックとtry/catchにより、例外で停止せず安全に処理を続けられるようになります。', '題材データを使わなくなる': '"Rideau Canal"の年代データはそのまま使われ続けます。修正は欠損・不正値への対応方法だけです。' } },
];

const allSpecs = [
  ...pyDecode, ...pyFinalDecode, ...pyExecute, ...pyFinalExecute, ...pyDebug, ...pyFinalDebug,
  ...jsDecode, ...jsFinalDecode, ...jsExecute, ...jsFinalExecute, ...jsDebug, ...jsFinalDebug,
  ...javaDecode, ...javaFinalDecode, ...javaExecute, ...javaFinalExecute, ...javaDebug, ...javaFinalDebug,
];

export const CANADA_FACTS = allSpecs.map(makeFact);
export const CANADA_ASSIGNMENTS = allSpecs.map(assignment);

export const CA_PY_DECODE = pyDecode.map(decode);
export const CA_PY_EXECUTE = pyExecute.map(execute);
export const CA_PY_DEBUG = pyDebug.map(debug);
export const CA_JS_DECODE = jsDecode.map(decode);
export const CA_JS_EXECUTE = jsExecute.map(execute);
export const CA_JS_DEBUG = jsDebug.map(debug);
export const CA_JAVA_DECODE = javaDecode.map(decode);
export const CA_JAVA_EXECUTE = javaExecute.map(execute);
export const CA_JAVA_DEBUG = javaDebug.map(debug);

export const CANADA_FINAL_MISSIONS = {
  decode: {
    python: mission('DECODE FINAL: CANADA PYTHON', pyFinalDecode.map(decode), 'DECODE_FINAL'),
    javascript: mission('DECODE FINAL: CANADA JAVASCRIPT', jsFinalDecode.map(decode), 'DECODE_FINAL'),
    java: mission('DECODE FINAL: CANADA JAVA', javaFinalDecode.map(decode), 'DECODE_FINAL'),
  },
  execute: {
    python: mission('EXECUTE FINAL: CANADA PYTHON', pyFinalExecute.map(execute), 'EXECUTE_FINAL'),
    javascript: mission('EXECUTE FINAL: CANADA JAVASCRIPT', jsFinalExecute.map(execute), 'EXECUTE_FINAL'),
    java: mission('EXECUTE FINAL: CANADA JAVA', javaFinalExecute.map(execute), 'EXECUTE_FINAL'),
  },
  debug: {
    python: mission('DEBUG FINAL: CANADA PYTHON', pyFinalDebug.map(debug), 'DEBUG_FINAL'),
    javascript: mission('DEBUG FINAL: CANADA JAVASCRIPT', jsFinalDebug.map(debug), 'DEBUG_FINAL'),
    java: mission('DEBUG FINAL: CANADA JAVA', javaFinalDebug.map(debug), 'DEBUG_FINAL'),
  },
};
