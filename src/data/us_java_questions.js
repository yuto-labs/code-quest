const SRC = {
  smithsonian: 'https://www.si.edu/about/history',
  emancipation: 'https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation',
  montgomery: 'https://www.nps.gov/articles/montgomery-bus-boycott.htm',
  football: 'https://operations.nfl.com/the-rules/nfl-video-rulebook/scoring-plays/',
  nyc: 'https://www.nyc.gov/site/planning/data-maps/nyc-population/geographic-reference.page',
  broadway: 'https://www.nyc.gov/site/mome/industries/broadway.page',
  loc: 'https://www.loc.gov/about/history-of-the-library/',
  olympics: 'https://www.teamusa.com/news/2024/july/24/olympic-games-hosted-in-the-united-states',
  modelT: 'https://www.thehenryford.org/collections-and-research/digital-collections/artifact/187889/',
  federalReserve: 'https://www.federalreserve.gov/aboutthefed/federal-reserve-system.htm',
  undergroundRailroad: 'https://www.nps.gov/subjects/undergroundrailroad/what-is-the-underground-railroad.htm',
  stHelens: 'https://www.usgs.gov/volcanoes/mount-st.-helens/1980-eruption-mount-st-helens',
  carnegie: 'https://www.carnegiehall.org/About/History',
  ellis: 'https://www.nps.gov/elis/learn/historyculture/index.htm',
  appalachian: 'https://www.nps.gov/appa/index.htm',
  columbian: 'https://www.loc.gov/collections/worlds-columbian-exposition/about-this-collection/',
  redwood: 'https://www.nps.gov/redw/index.htm',
  harlem: 'https://www.loc.gov/classroom-materials/harlem-renaissance/',
  met: 'https://www.metmuseum.org/about-the-met/history',
  pony: 'https://www.nps.gov/poex/learn/historyculture/index.htm',
  selma: 'https://www.nps.gov/semo/index.htm',
  mammoth: 'https://whc.unesco.org/en/list/150',
  spaceNeedle: 'https://www.spaceneedle.com/history',
  baseball: 'https://www.mlb.com/glossary/standard-stats/batting-average',
  columbia: 'https://www.fs.usda.gov/recarea/crgnsa/recarea/?recid=29872',
  hollywood: 'https://walkoffame.com/history/',
  empire: 'https://www.esbnyc.com/about/history',
  census: 'https://www.census.gov/programs-surveys/decennial-census/about.html',
  gateway: 'https://www.nps.gov/jeff/learn/historyculture/gateway-arch.htm',
  freedomTrail: 'https://www.nps.gov/bost/planyourvisit/freedomtrail.htm',
  navajo: 'https://www.nationalww2museum.org/war/articles/american-indian-code-talkers',
};

const FACT_ROWS = [
  ['us_java_d01', 'education-culture', 'smithsonian_institution', 'スミソニアン協会', 'スミソニアン協会は1846年に設立されたアメリカの博物館・研究機関群です。', ['decode'], SRC.smithsonian],
  ['us_java_d02', 'history', 'emancipation_proclamation', '奴隷解放宣言', '奴隷解放宣言は1863年に効力を持った、南北戦争期の重要な大統領布告です。', ['decode'], SRC.emancipation],
  ['us_java_d03', 'civil-rights', 'montgomery_bus_boycott', 'モンゴメリー・バス・ボイコット', 'モンゴメリー・バス・ボイコットは1955年に始まり1956年に終わった公民権運動です。', ['decode'], SRC.montgomery],
  ['us_java_d04', 'sport', 'american_football_scoring', 'アメリカンフットボールの得点', 'アメリカンフットボールではタッチダウン6点、フィールドゴール3点、セーフティ2点などで得点します。', ['decode'], SRC.football],
  ['us_java_d05', 'geography-administration', 'nyc_five_boroughs', 'ニューヨーク市の5区', 'ニューヨーク市はマンハッタン、ブルックリン、クイーンズ、ブロンクス、スタテンアイランドの5区で構成されます。', ['decode'], SRC.nyc],
  ['us_java_d06', 'performing-arts', 'broadway_theatre', 'ブロードウェイ演劇', 'ブロードウェイはマンハッタンの劇場文化と強く結びつく地域・興行の呼び名です。', ['decode'], SRC.broadway],
  ['us_java_d07', 'library-history', 'library_of_congress', 'アメリカ議会図書館', 'アメリカ議会図書館は1800年に設立された、アメリカ議会に属する図書館です。', ['decode'], SRC.loc],
  ['us_java_d08', 'sport-history', 'us_olympic_host_cities', 'アメリカのオリンピック開催都市', 'アメリカではセントルイス、ロサンゼルス、レークプラシッド、アトランタ、ソルトレークシティなどがオリンピックを開催しました。', ['decode'], SRC.olympics],
  ['us_java_d09', 'industry-transport', 'ford_model_t', 'フォード・モデルT', 'フォード・モデルTは1908年に発表された、自動車の大衆化と結びつく車種です。', ['decode'], SRC.modelT],
  ['us_java_d10', 'industry-finance', 'federal_reserve_banks', '連邦準備銀行', '連邦準備制度には12の地区連邦準備銀行があります。', ['decode'], SRC.federalReserve],
  ['final_decode_US_java_01', 'history-network', 'underground_railroad', '地下鉄道', '地下鉄道は文字通りの鉄道ではなく、逃亡奴隷を支援した経路と協力者のネットワークでした。', ['decode'], SRC.undergroundRailroad],
  ['final_decode_US_java_02', 'geology', 'mount_st_helens', 'セントヘレンズ山', 'セントヘレンズ山の大噴火は1980年に起こりました。', ['decode'], SRC.stHelens],
  ['final_decode_US_java_03', 'performing-arts', 'carnegie_hall', 'カーネギーホール', 'カーネギーホールは1891年に開館したニューヨークの著名なコンサートホールです。', ['decode'], SRC.carnegie],
  ['us_java_e01', 'immigration-history', 'ellis_island', 'エリス島', 'エリス島の連邦移民局は1892年に開設されました。', ['execute'], SRC.ellis],
  ['us_java_e02', 'geography-trail', 'appalachian_trail', 'アパラチアン・トレイル', 'アパラチアン・トレイルはアメリカ東部の山地を通る長距離自然歩道です。', ['execute'], SRC.appalachian],
  ['us_java_e03', 'world-fair', 'worlds_columbian_exposition', 'シカゴ万国博覧会', '世界コロンビア博覧会は1893年にシカゴで開催されました。', ['execute'], SRC.columbian],
  ['us_java_e04', 'nature-conservation', 'redwood_parks', 'レッドウッド国立・州立公園', 'レッドウッド国立・州立公園は海岸レッドウッドの生態系を保護しています。', ['execute'], SRC.redwood],
  ['us_java_e05', 'literature-culture', 'harlem_renaissance', 'ハーレム・ルネサンス', 'ハーレム・ルネサンスはハーレムを中心に広がった重要な黒人文化運動です。', ['execute'], SRC.harlem],
  ['us_java_e06', 'museum-history', 'metropolitan_museum', 'メトロポリタン美術館', 'メトロポリタン美術館は1870年に創設されました。', ['execute'], SRC.met],
  ['us_java_e07', 'transport-history', 'pony_express', 'ポニー・エクスプレス', 'ポニー・エクスプレスは1860年から1861年まで運行された郵便輸送サービスです。', ['execute'], SRC.pony],
  ['final_execute_US_java_01', 'civil-rights', 'selma_montgomery_trail', 'セルマからモンゴメリー国立歴史トレイル', 'セルマからモンゴメリー国立歴史トレイルは1965年の投票権を求める行進を記念しています。', ['execute'], SRC.selma],
  ['final_execute_US_java_02', 'world-heritage-nature', 'mammoth_cave', 'マンモス・ケーブ国立公園', 'マンモス・ケーブは1981年に世界遺産へ登録されました。', ['execute'], SRC.mammoth],
  ['final_execute_US_java_03', 'architecture-world-fair', 'space_needle', 'スペースニードル', 'スペースニードルは1962年のシアトル万国博覧会のために建設されました。', ['execute'], SRC.spaceNeedle],
  ['us_java_b01', 'sport-statistics', 'baseball_batting_average', '野球の打率', '野球の打率は安打数を打数で割って求める代表的な打撃指標です。', ['debug'], SRC.baseball],
  ['us_java_b02', 'geography-nature', 'columbia_river_gorge', 'コロンビア川峡谷', 'コロンビア川峡谷はオレゴン州とワシントン州の境界付近に広がる景勝地です。', ['debug'], SRC.columbia],
  ['us_java_b03', 'entertainment-history', 'hollywood_walk_of_fame', 'ハリウッド・ウォーク・オブ・フェーム', 'ハリウッド・ウォーク・オブ・フェームは映画や音楽などの人物・団体を星形プレートで顕彰します。', ['debug'], SRC.hollywood],
  ['us_java_b04', 'architecture', 'empire_state_building', 'エンパイア・ステート・ビル', 'エンパイア・ステート・ビルは1931年に開業したニューヨークの高層建築です。', ['debug'], SRC.empire],
  ['us_java_b05', 'administration-statistics', 'us_census', 'アメリカ合衆国国勢調査', 'アメリカ合衆国の国勢調査は10年ごとに実施されます。', ['debug'], SRC.census],
  ['final_debug_US_java_01', 'architecture', 'gateway_arch', 'ゲートウェイ・アーチ', 'ゲートウェイ・アーチは高さ630フィートで、1965年に完成しました。', ['debug'], SRC.gateway],
  ['final_debug_US_java_02', 'history-trail', 'boston_freedom_trail', 'ボストン・フリーダム・トレイル', 'ボストン・フリーダム・トレイルは市内の歴史的地点を結ぶルートです。', ['debug'], SRC.freedomTrail],
  ['final_debug_US_java_03', 'military-language-history', 'navajo_code_talkers', 'ナバホ暗号通信兵', 'ナバホ暗号通信兵は第二次世界大戦中、ナバホ語をもとにした軍事暗号通信を使いました。', ['debug'], SRC.navajo],
];

function sourceRef(url) {
  return [{ title: 'Reference source', organization: new URL(url).hostname, url }];
}

function factIdFromQuestion(questionId) {
  return `fact_${questionId}`;
}

function makeTopicBackground(titleJa, summaryJa, category) {
  return `${summaryJa} ${titleJa}は、アメリカの歴史、社会、文化、自然、産業を理解するときの手がかりになるテーマです。名称や年だけを切り離して覚えるより、どの地域、制度、出来事、人々の活動と結びついているかを見ると、同じアメリカの題材でも性質の違いが分かります。この項目は ${category} に関わり、博物館、交通、芸術、自然保護、公民権、統計、建築など、国の成り立ちや地域の特色を表す一部として読むことができます。時代背景、場所、目的、社会的な意味を合わせて見ることで、単なる固有名詞ではなく、アメリカの多様な歩みを示す知識として整理できます。`;
}

function factObject([questionId, category, entity, titleJa, summaryJa, worlds, url]) {
  const factId = factIdFromQuestion(questionId);
  const backgroundJa = makeTopicBackground(titleJa, summaryJa, category);
  return {
    factId,
    countryId: 'US',
    category,
    entityKeys: [`us:${entity}`],
    aliases: [titleJa, entity, questionId],
    statement: summaryJa,
    detail: backgroundJa,
    factStatus: 'verified',
    sourceRefs: sourceRef(url),
    allowedWorlds: worlds,
    allowedLanguageIds: ['java'],
    relatedFactIds: [],
    titleJa,
    summaryJa,
    detailJa: backgroundJa,
    backgroundJa,
    keyPointsJa: [summaryJa, `${titleJa}を識別する中心情報です。`, '年、場所、役割を分けて見ると覚えやすくなります。'],
  };
}

export const US_JAVA_FACTS = FACT_ROWS.map(factObject);

function factFor(questionId) {
  return US_JAVA_FACTS.find(item => item.factId === factIdFromQuestion(questionId));
}

function worldOf(questionId) {
  if (questionId.includes('_e') || questionId.includes('execute')) return 'execute';
  if (questionId.includes('_b') || questionId.includes('debug')) return 'debug';
  return 'decode';
}

function commonFields(questionId, conceptId, title, prompt, code, answer, completedCode, explanation, extra = {}) {
  const fact = factFor(questionId);
  return {
    id: questionId,
    worldId: extra.worldId || worldOf(questionId),
    languageId: 'java',
    conceptId,
    title,
    description: prompt,
    prompt,
    expectedOutput: extra.expectedOutput,
    code,
    answer,
    blank: extra.blank ?? answer,
    options: extra.options,
    hint: extra.hint,
    explanation,
    correctAnswer: answer,
    completedCode,
    executionSteps: extra.executionSteps || [],
    commonMistakes: extra.commonMistakes || [],
    programmingExplanation: extra.programmingExplanation,
    countryNote: fact.summaryJa,
    sourceRefs: fact.sourceRefs,
    questionType: extra.questionType || 'fill-blank',
    factIds: [fact.factId],
    entityKeys: fact.entityKeys,
    ...extra,
  };
}

function decode(questionId, conceptId, title, prompt, code, blank, completedCode, expectedOutput, hint, programmingExplanation) {
  return commonFields(questionId, conceptId, title, prompt, code, blank, completedCode, `空欄に ${blank} を入れると、期待される出力「${expectedOutput}」になります。`, {
    expectedOutput,
    hint,
    executionSteps: ['コード内の事実データを確認する。', '空欄に必要な Java 構文または値を入れる。', '完成したコードの出力を期待結果と比べる。'],
    commonMistakes: ['事実名だけで選ばず、型、添字、メソッド呼び出し、条件式を確認します。'],
    programmingExplanation,
  });
}

function execute(questionId, conceptId, title, prompt, code, options, answer, hint, explanation, programmingExplanation) {
  return commonFields(questionId, conceptId, title, prompt, code, answer, code, explanation, {
    worldId: 'execute',
    questionType: 'output-predict',
    options,
    hint,
    executionSteps: ['初期値とデータの並びを確認する。', '条件分岐、ループ、メソッド呼び出しの順番で値を追う。', 'System.out.println に渡される最終値を選ぶ。'],
    commonMistakes: ['配列やリストの順番、String.equals、オーバーライド後の実行メソッドを取り違えないようにします。'],
    programmingExplanation,
  });
}

function debugStep(stepNum, stepTitle, prompt, question, options, answer, hint, explanation) {
  return { stepNum, stepTitle, prompt, question, options, answer, hint, explanation };
}

function debug(questionId, conceptId, title, description, code, steps, correctedCode, debugExplanation) {
  const answer = steps.map(step => step.answer).join(' / ');
  return commonFields(questionId, conceptId, title, description, code, answer, correctedCode, steps[0].explanation, {
    worldId: 'debug',
    questionType: 'debug-step',
    steps,
    correctedCode,
    executionSteps: ['Step 1 で原因を特定する。', 'Step 2 で最小の修正を選ぶ。', 'Step 3 で修正の影響を説明する。'],
    commonMistakes: ['エラーが出た行だけでなく、型、null、配列範囲、static、オーバーライド条件を確認します。'],
    programmingExplanation: `${debugExplanation.cause} ${debugExplanation.fix} ${debugExplanation.impact}`,
    debugExplanation: { ...debugExplanation, correctedCode },
  });
}

export const US_JAVA_DECODE = [
  decode('us_java_d01', 'strings', 'Smithsonian Institution: String output', 'Smithsonian Institution was established in 1846. 下のコードを実行したとき「Smithsonian:1846」と出力されるよう、空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String founded = "Smithsonian:1846";\n        System.out.println(___BLANK___);\n    }\n}', 'founded', 'public class Main {\n    public static void main(String[] args) {\n        String founded = "Smithsonian:1846";\n        System.out.println(founded);\n    }\n}', 'Smithsonian:1846', '出力したい文字列はすでに String 変数に入っています。', 'String 変数名を System.out.println に渡すと、その中身が出力されます。'),
  decode('us_java_d02', 'variables', 'Emancipation Proclamation: int and concat', 'Emancipation Proclamation took effect in 1863. 「Emancipation:1863」と出力されるよう、int の空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        int year = ___BLANK___;\n        String event = "Emancipation";\n        System.out.println(event + ":" + year);\n    }\n}', '1863', 'public class Main {\n    public static void main(String[] args) {\n        int year = 1863;\n        String event = "Emancipation";\n        System.out.println(event + ":" + year);\n    }\n}', 'Emancipation:1863', 'int に入れる数値なので引用符は付けません。', 'int と String を + でつなぐと、表示用の文字列として連結されます。'),
  decode('us_java_d03', 'conditionals', 'Montgomery Bus Boycott: if else', 'Montgomery Bus Boycott began in 1955 and ended in 1956. 1955年なら「began」と出力されるよう、比較演算子を入れてください。', 'public class Main {\n    public static void main(String[] args) {\n        int year = 1955;\n        if (year ___BLANK___ 1955) {\n            System.out.println("began");\n        } else {\n            System.out.println("ended");\n        }\n    }\n}', '==', 'public class Main {\n    public static void main(String[] args) {\n        int year = 1955;\n        if (year == 1955) {\n            System.out.println("began");\n        } else {\n            System.out.println("ended");\n        }\n    }\n}', 'began', '等しいかを調べる演算子です。代入の = ではありません。', 'Java で数値の等価比較を行うときは == を使います。'),
  decode('us_java_d04', 'switch', 'American football scoring: switch', 'Touchdown は6点、field goal は3点、safety は2点です。play が field goal のとき 3 が出力されるよう、case の空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String play = "field goal";\n        switch (play) {\n            case "touchdown": System.out.println(6); break;\n            case ___BLANK___: System.out.println(3); break;\n            case "safety": System.out.println(2); break;\n        }\n    }\n}', '"field goal"', 'public class Main {\n    public static void main(String[] args) {\n        String play = "field goal";\n        switch (play) {\n            case "touchdown": System.out.println(6); break;\n            case "field goal": System.out.println(3); break;\n            case "safety": System.out.println(2); break;\n        }\n    }\n}', '3', 'switch の対象 play と同じ文字列を case に書きます。', 'String の case ラベルは引用符つきの文字列リテラルで書きます。'),
  decode('us_java_d05', 'arrays', 'New York City boroughs: array index', 'New York City の5区は Manhattan, Brooklyn, Queens, the Bronx, Staten Island です。Queens が出力されるよう、配列の添字を入れてください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] boroughs = {"Manhattan", "Brooklyn", "Queens", "the Bronx", "Staten Island"};\n        System.out.println(boroughs[___BLANK___]);\n    }\n}', '2', 'public class Main {\n    public static void main(String[] args) {\n        String[] boroughs = {"Manhattan", "Brooklyn", "Queens", "the Bronx", "Staten Island"};\n        System.out.println(boroughs[2]);\n    }\n}', 'Queens', 'Java の配列は0番目から数えます。Queens は3番目の要素です。', '配列アクセスでは、先頭を 0 として添字を数えます。'),
  decode('us_java_d06', 'loops', 'Broadway theatre: enhanced for', 'Broadway is strongly associated with theatre in Manhattan. 配列の2語を順に出力する拡張 for が完成するよう、空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] words = {"Broadway", "theatre"};\n        for (String word ___BLANK___ words) {\n            System.out.println(word);\n        }\n    }\n}', ':', 'public class Main {\n    public static void main(String[] args) {\n        String[] words = {"Broadway", "theatre"};\n        for (String word : words) {\n            System.out.println(word);\n        }\n    }\n}', 'Broadway\ntheatre', '拡張 for は「変数 : 配列」の形です。', '拡張 for は配列やコレクションの要素を先頭から1つずつ取り出します。'),
  decode('us_java_d07', 'methods', 'Library of Congress: method return', 'Library of Congress was established in 1800. メソッドに年を渡して「Library:1800」と出力されるよう、空欄を埋めてください。', 'public class Main {\n    static String label(int year) {\n        return "Library:" + year;\n    }\n    public static void main(String[] args) {\n        System.out.println(label(___BLANK___));\n    }\n}', '1800', 'public class Main {\n    static String label(int year) {\n        return "Library:" + year;\n    }\n    public static void main(String[] args) {\n        System.out.println(label(1800));\n    }\n}', 'Library:1800', '引数の型は int です。数値だけを書きます。', 'メソッドに渡した値は仮引数 year として使われ、return の文字列に連結されます。'),
  decode('us_java_d08', 'collections', 'United States Olympic host cities: ArrayList', 'Past U.S. Olympic host cities のリストから Los Angeles が出力されるよう、get の添字を入れてください。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> cities = new ArrayList<>();\n        cities.add("St. Louis");\n        cities.add("Los Angeles");\n        cities.add("Atlanta");\n        System.out.println(cities.get(___BLANK___));\n    }\n}', '1', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> cities = new ArrayList<>();\n        cities.add("St. Louis");\n        cities.add("Los Angeles");\n        cities.add("Atlanta");\n        System.out.println(cities.get(1));\n    }\n}', 'Los Angeles', 'ArrayList も0番目から数えます。', 'add した順番で要素が入り、get(index) で指定位置の値を取り出します。'),
  decode('us_java_d09', 'classes', 'Ford Model T: class and constructor', 'Ford Model T was introduced in 1908. オブジェクトの year が1908になるよう、コンストラクタ引数を埋めてください。', 'class Car {\n    String name;\n    int year;\n    Car(String name, int year) {\n        this.name = name;\n        this.year = year;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car modelT = new Car("Model T", ___BLANK___);\n        System.out.println(modelT.name + ":" + modelT.year);\n    }\n}', '1908', 'class Car {\n    String name;\n    int year;\n    Car(String name, int year) {\n        this.name = name;\n        this.year = year;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car modelT = new Car("Model T", 1908);\n        System.out.println(modelT.name + ":" + modelT.year);\n    }\n}', 'Model T:1908', 'year フィールドは int なので数値を渡します。', 'new Car(...) の引数がコンストラクタでフィールドへ代入されます。'),
  decode('us_java_d10', 'collections', 'Federal Reserve Banks: HashMap', 'Federal Reserve System has 12 regional Reserve Banks. HashMap から banks の値 12 を取り出すよう、get のキーを埋めてください。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> fed = new HashMap<>();\n        fed.put("banks", 12);\n        fed.put("districts", 12);\n        System.out.println(fed.get(___BLANK___));\n    }\n}', '"banks"', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> fed = new HashMap<>();\n        fed.put("banks", 12);\n        fed.put("districts", 12);\n        System.out.println(fed.get("banks"));\n    }\n}', '12', 'put したキーと同じ文字列を get に渡します。', 'HashMap はキーと値を対応させ、get(key) で値を取り出します。'),
];

export const US_JAVA_EXECUTE = [
  execute('us_java_e01', 'strings', 'Ellis Island: String.equals', 'Ellis Island の移民局データを String.equals で判定した出力を選んでください。', 'public class Main {\n    public static void main(String[] args) {\n        String site = "Ellis Island";\n        if (site.equals("Ellis Island")) {\n            System.out.println("opened:1892");\n        } else {\n            System.out.println("other");\n        }\n    }\n}', ['opened:1892', 'other', 'Ellis Island', 'true'], 'opened:1892', 'equals の比較結果が true のとき、最初の println が実行されます。', 'site の中身は "Ellis Island" なので equals は true になり、1892年のラベルが出力されます。', 'String.equals は文字列の内容比較を行います。'),
  execute('us_java_e02', 'arrays', 'Appalachian Trail: array accumulation', 'アパラチアン・トレイルの州データを順に連結した出力を選んでください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] states = {"Georgia", "North Carolina", "Maine"};\n        String route = "";\n        for (String state : states) {\n            route += state.substring(0, 2) + "-";\n        }\n        System.out.println(route.substring(0, route.length() - 1));\n    }\n}', ['Ge-No-Ma', 'GA-NC-ME', 'Georgia-North Carolina-Maine', 'Ma-No-Ge'], 'Ge-No-Ma', 'substring(0, 2) は先頭2文字です。', '各州名の先頭2文字を配列順に取り、末尾のハイフンだけを最後に削ります。', 'ループ、文字列連結、substring、length を組み合わせて出力を追跡します。'),
  execute('us_java_e03', 'methods', 'World’s Columbian Exposition: method return', '1893年にChicagoで開催された博覧会ラベルを作るメソッドの出力を選んでください。', 'public class Main {\n    static String fairLabel(String city, int year) {\n        return city + ":" + year;\n    }\n    public static void main(String[] args) {\n        String label = fairLabel("Chicago", 1893);\n        System.out.println(label);\n    }\n}', ['Chicago:1893', '1893:Chicago', 'World Fair', 'Chicago'], 'Chicago:1893', 'return された文字列が label に入ります。', 'fairLabel("Chicago", 1893) は city と year をコロンで連結して返します。', 'メソッドの戻り値が変数へ入り、その値が println に渡されます。'),
  execute('us_java_e04', 'collections', 'Redwood parks: ArrayList filtering', '海岸レッドウッドを保護する parks データを条件で絞った出力を選んでください。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> parks = new ArrayList<>();\n        parks.add("Redwood:coastal redwood");\n        parks.add("Desert:dry lands");\n        for (String park : parks) {\n            if (park.contains("coastal redwood")) {\n                System.out.println(park.split(":")[0]);\n            }\n        }\n    }\n}', ['Redwood', 'Desert', 'coastal redwood', 'Redwood:coastal redwood'], 'Redwood', 'contains の条件に合う要素だけが出力されます。', '1つ目だけが条件に合い、split(":")[0] によって名前部分だけが取り出されます。', 'ArrayList の走査、contains、split を順に追います。'),
  execute('us_java_e05', 'collections', 'Harlem Renaissance: HashMap lookup', 'ハーレム・ルネサンスの人物カテゴリを HashMap から取り出した出力を選んでください。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> roles = new HashMap<>();\n        roles.put("Langston Hughes", "poet");\n        roles.put("Duke Ellington", "musician");\n        roles.put("Zora Neale Hurston", "writer");\n        System.out.println(roles.get("Duke Ellington"));\n    }\n}', ['musician', 'poet', 'writer', 'Duke Ellington'], 'musician', 'get に渡したキーに対応する値を探します。', 'キー "Duke Ellington" に対応して保存されている値は "musician" です。', 'HashMap はキーが完全一致したときだけ対応する値を返します。'),
  execute('us_java_e06', 'classes', 'Metropolitan Museum of Art: object fields', 'Metropolitan Museum of Art のオブジェクトを作った後の出力を選んでください。', 'class Museum {\n    String name;\n    int founded;\n    Museum(String name, int founded) {\n        this.name = name;\n        this.founded = founded;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Museum met = new Museum("Met", 1870);\n        System.out.println(met.name + ":" + met.founded);\n    }\n}', ['Met:1870', '1870:Met', 'Metropolitan Museum of Art', 'Error'], 'Met:1870', 'コンストラクタ引数がフィールドに代入されます。', 'new Museum("Met", 1870) により name は Met、founded は1870になります。', 'オブジェクトのフィールド値をドットで取り出して連結します。'),
  execute('us_java_e07', 'inheritance', 'Pony Express: override dispatch', 'Pony Express の継承コードで実際に呼ばれるメソッドの出力を選んでください。', 'class MailRoute {\n    String period() { return "general mail"; }\n}\nclass PonyExpress extends MailRoute {\n    @Override\n    String period() { return "1860-1861"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MailRoute route = new PonyExpress();\n        System.out.println(route.period());\n    }\n}', ['1860-1861', 'general mail', 'PonyExpress', 'Error'], '1860-1861', '変数の型より、実際のオブジェクトのクラスを見ます。', '実体は PonyExpress なので、オーバーライドされた period() が呼ばれます。', 'Java の動的ディスパッチでは、実行時のオブジェクト型のメソッドが選ばれます。'),
];

export const US_JAVA_DEBUG = [
  debug('us_java_b01', 'operators', 'Baseball batting average: integer division bug', '野球の打率を計算する Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        int hits = 30;\n        int atBats = 100;\n        double average = hits / atBats;\n        System.out.println(average);\n    }\n}', [
    debugStep(1, '原因を特定', '30安打100打数なら0.3になるはずですが、0.0になります。', '主な原因はどれですか。', ['int 同士の割り算で小数部分が落ちている', 'println が使えない', '変数名 hits が長すぎる'], 'int 同士の割り算で小数部分が落ちている', '割り算の前にどちらかを double にします。', 'int / int は整数除算になります。'),
    debugStep(2, '修正を選ぶ', '小数を残す最小修正を選びます。', '正しい修正はどれですか。', ['double average = (double) hits / atBats;', 'double average = hits / atBats;', 'int average = hits / atBats;'], 'double average = (double) hits / atBats;', '片方を double にキャストします。', 'double を含む割り算になり、小数が残ります。'),
    debugStep(3, '影響を説明', '修正後の出力を確認します。', '修正の影響として正しいものはどれですか。', ['0.3 のような小数の打率を出せる', '必ず1になる', 'コンパイルできなくなる'], '0.3 のような小数の打率を出せる', '30 / 100 を小数として計算します。', '整数除算による情報の欠落を防げます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        int hits = 30;\n        int atBats = 100;\n        double average = (double) hits / atBats;\n        System.out.println(average);\n    }\n}', { cause: 'int 同士の割り算で小数部分が落ちています。', fix: '(double) hits のように片方を double にします。', why: 'double を含む演算は小数計算になります。', impact: '打率を 0.3 のような小数で表示できます。' }),
  debug('us_java_b02', 'arrays', 'Columbia River Gorge: array bounds bug', 'コロンビア川峡谷の州境データを扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        String[] states = {"Oregon", "Washington"};\n        for (int i = 0; i <= states.length; i++) {\n            System.out.println(states[i]);\n        }\n    }\n}', [
    debugStep(1, '原因を特定', '最後に配列範囲外エラーになります。', '主な原因はどれですか。', ['i <= states.length で最後に存在しない添字を読む', 'states が空である', 'println が配列を出せない'], 'i <= states.length で最後に存在しない添字を読む', '添字の最大値は length - 1 です。', 'i == states.length のとき範囲外です。'),
    debugStep(2, '修正を選ぶ', '全要素だけを安全に出力します。', '正しい修正はどれですか。', ['i < states.length にする', 'i <= states.length + 1 にする', 'states[2] を追加する'], 'i < states.length にする', '配列ループの基本条件です。', '0 から length - 1 までを回れます。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['Oregon と Washington だけを安全に出力できる', 'どちらも出力されない', '同じ州が無限に出る'], 'Oregon と Washington だけを安全に出力できる', '存在する2要素だけを読むためです。', '範囲外アクセスを防ぎます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String[] states = {"Oregon", "Washington"};\n        for (int i = 0; i < states.length; i++) {\n            System.out.println(states[i]);\n        }\n    }\n}', { cause: 'ループ条件が <= のため、存在しない添字 states.length まで進みます。', fix: '条件を i < states.length にします。', why: '配列添字は0から length - 1 までです。', impact: '境界の2州を範囲外エラーなしで出力できます。' }),
  debug('us_java_b03', 'null-safety', 'Hollywood Walk of Fame: null method bug', 'Hollywood Walk of Fame の星カテゴリを扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        String category = null;\n        if (category.equals("Film")) {\n            System.out.println("star");\n        }\n    }\n}', [
    debugStep(1, '原因を特定', 'NullPointerException が起きます。', '主な原因はどれですか。', ['null の変数に equals を呼んでいる', 'Film が長すぎる', 'if 文が使えない'], 'null の変数に equals を呼んでいる', 'メソッドを呼ぶ相手が null か確認します。', 'null にはメソッドを呼べません。'),
    debugStep(2, '修正を選ぶ', 'null でも落ちない修正を選びます。', '正しい修正はどれですか。', ['if ("Film".equals(category))', 'if (category.equals("Film"))', 'if (category = "Film")'], 'if ("Film".equals(category))', '文字列リテラル側から equals を呼ぶと安全です。', '"Film" は null ではないため、引数が null でも false になります。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['category が null でも例外にならず判定できる', '必ず star と出る', 'コンパイル不能になる'], 'category が null でも例外にならず判定できる', 'null は一致しない値として扱われます。', 'レビュー画面などで欠損データがあっても落ちにくくなります。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String category = null;\n        if ("Film".equals(category)) {\n            System.out.println("star");\n        }\n    }\n}', { cause: 'null の category に equals を呼んでいます。', fix: '"Film".equals(category) の形にします。', why: 'リテラル側は null ではないため安全に比較できます。', impact: '欠損カテゴリでも例外ではなく false として扱えます。' }),
  debug('us_java_b04', 'static', 'Empire State Building: static instance bug', 'Empire State Building の開業年を扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'class Building {\n    int opened = 1931;\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Building.opened);\n    }\n}', [
    debugStep(1, '原因を特定', 'opened にアクセスできません。', '主な原因はどれですか。', ['インスタンスフィールドをクラス名から読んでいる', '1931 は int ではない', 'class は使えない'], 'インスタンスフィールドをクラス名から読んでいる', 'static か instance かを見ます。', 'opened は static ではありません。'),
    debugStep(2, '修正を選ぶ', 'インスタンスフィールドとして読む修正を選びます。', '正しい修正はどれですか。', ['Building building = new Building(); System.out.println(building.opened);', 'System.out.println(Building.opened);', 'System.out.println(opened);'], 'Building building = new Building(); System.out.println(building.opened);', 'new でオブジェクトを作ります。', 'インスタンスのフィールドはオブジェクト参照から読みます。'),
    debugStep(3, '影響を説明', '修正後の出力を確認します。', '修正の影響はどれですか。', ['1931 を正しく出力できる', '必ず0になる', 'static でないと Java は動かない'], '1931 を正しく出力できる', '作成した Building の opened フィールドを読むためです。', 'static と instance の役割を分けて扱えます。'),
  ], 'class Building {\n    int opened = 1931;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Building building = new Building();\n        System.out.println(building.opened);\n    }\n}', { cause: 'static ではない opened を Building.opened として読んでいます。', fix: 'new Building() で作ったインスタンスから opened を読みます。', why: 'インスタンスフィールドは各オブジェクトに属する値です。', impact: 'Empire State Building の開業年 1931 を正しく出力できます。' }),
  debug('us_java_b05', 'loops', 'United States census: off-by-one loop bug', '10年ごとの国勢調査年を扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        int[] years = {2000, 2010, 2020};\n        for (int i = 0; i <= years.length; i++) {\n            System.out.println(years[i]);\n        }\n    }\n}', [
    debugStep(1, '原因を特定', '最後に配列範囲外エラーになります。', '主な原因はどれですか。', ['ループ条件が1回多く回る', '10年ごとではない', 'int 配列は使えない'], 'ループ条件が1回多く回る', 'i が length と等しいときの添字を考えます。', '最後の有効添字は length - 1 です。'),
    debugStep(2, '修正を選ぶ', '3つの年だけを出力します。', '正しい修正はどれですか。', ['i < years.length', 'i <= years.length', 'i < years.length + 1'], 'i < years.length', '配列ループの終了条件です。', '0,1,2 の3回だけ回ります。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['2000, 2010, 2020 を範囲外エラーなしで出力できる', '2020 だけ出る', '何も出ない'], '2000, 2010, 2020 を範囲外エラーなしで出力できる', '配列内の3要素だけを読むためです。', 'off-by-one の境界ミスを防げます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        int[] years = {2000, 2010, 2020};\n        for (int i = 0; i < years.length; i++) {\n            System.out.println(years[i]);\n        }\n    }\n}', { cause: 'ループ条件が <= で1回多く回っています。', fix: 'i < years.length にします。', why: '配列の有効添字は0から length - 1 までです。', impact: '10年ごとの国勢調査年を安全に出力できます。' }),
];

export const US_JAVA_FINAL_MISSIONS = {
  decode: {
    id: 'final_decode_US_java',
    type: 'DECODE_FINAL',
    title: 'DECODE FINAL: UNITED STATES JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      decode('final_decode_US_java_01', 'methods', 'Underground Railroad: final method + condition', 'Underground Railroad は文字通りの鉄道ではなく、経路と支援のネットワークでした。network なら説明文を出力するよう、空欄を埋めてください。', 'public class Main {\n    static String describe(String kind) {\n        if (kind.equals("network")) {\n            return "routes and assistance";\n        }\n        return "literal railroad";\n    }\n    public static void main(String[] args) {\n        String result = describe(___BLANK___);\n        System.out.println(result);\n    }\n}', '"network"', 'public class Main {\n    static String describe(String kind) {\n        if (kind.equals("network")) {\n            return "routes and assistance";\n        }\n        return "literal railroad";\n    }\n    public static void main(String[] args) {\n        String result = describe("network");\n        System.out.println(result);\n    }\n}', 'routes and assistance', '条件が true になる String をメソッドへ渡します。', 'メソッド、String.equals、条件分岐、戻り値を組み合わせています。'),
      decode('final_decode_US_java_02', 'collections', 'Mount St. Helens: final ArrayList filter', 'Mount St. Helens の大噴火は1980年です。1980年の火山名だけが出力されるよう、条件の空欄を埋めてください。', 'import java.util.ArrayList;\nclass Volcano {\n    String name; int year;\n    Volcano(String name, int year) { this.name = name; this.year = year; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Volcano> volcanoes = new ArrayList<>();\n        volcanoes.add(new Volcano("Mount St. Helens", 1980));\n        volcanoes.add(new Volcano("Other volcano", 1915));\n        for (Volcano volcano : volcanoes) {\n            if (volcano.year == ___BLANK___) {\n                System.out.println(volcano.name);\n            }\n        }\n    }\n}', '1980', 'import java.util.ArrayList;\nclass Volcano {\n    String name; int year;\n    Volcano(String name, int year) { this.name = name; this.year = year; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Volcano> volcanoes = new ArrayList<>();\n        volcanoes.add(new Volcano("Mount St. Helens", 1980));\n        volcanoes.add(new Volcano("Other volcano", 1915));\n        for (Volcano volcano : volcanoes) {\n            if (volcano.year == 1980) {\n                System.out.println(volcano.name);\n            }\n        }\n    }\n}', 'Mount St. Helens', 'year は int なので数値で比較します。', 'ArrayList、オブジェクト、拡張 for、条件分岐を組み合わせています。'),
      decode('final_decode_US_java_03', 'classes', 'Carnegie Hall: final class object map', 'Carnegie Hall は1891年に開館しました。オブジェクトを HashMap に入れ、opened 年を出力するよう get のキーを埋めてください。', 'import java.util.HashMap;\nclass Hall {\n    String name; int opened;\n    Hall(String name, int opened) { this.name = name; this.opened = opened; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Hall> halls = new HashMap<>();\n        halls.put("Carnegie", new Hall("Carnegie Hall", 1891));\n        Hall hall = halls.get(___BLANK___);\n        System.out.println(hall.name + ":" + hall.opened);\n    }\n}', '"Carnegie"', 'import java.util.HashMap;\nclass Hall {\n    String name; int opened;\n    Hall(String name, int opened) { this.name = name; this.opened = opened; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Hall> halls = new HashMap<>();\n        halls.put("Carnegie", new Hall("Carnegie Hall", 1891));\n        Hall hall = halls.get("Carnegie");\n        System.out.println(hall.name + ":" + hall.opened);\n    }\n}', 'Carnegie Hall:1891', 'put したキーと同じ String を get に渡します。', 'クラス、コンストラクタ、HashMap、フィールド参照を組み合わせています。'),
    ],
  },
  execute: {
    id: 'final_execute_US_java',
    type: 'EXECUTE_FINAL',
    title: 'EXECUTE FINAL: UNITED STATES JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      execute('final_execute_US_java_01', 'collections', 'Selma to Montgomery Trail: final list filter order', '1965年の投票権行進を記念するルートデータを、条件で絞って順に出力した結果を選んでください。', 'import java.util.ArrayList;\nclass Stop {\n    String name; int order; boolean votingRights;\n    Stop(String name, int order, boolean votingRights) { this.name = name; this.order = order; this.votingRights = votingRights; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Stop> stops = new ArrayList<>();\n        stops.add(new Stop("Selma", 1, true));\n        stops.add(new Stop("Lowndes", 2, true));\n        stops.add(new Stop("Other", 3, false));\n        String result = "";\n        for (Stop stop : stops) {\n            if (stop.votingRights && stop.order <= 2) {\n                result += stop.name + ">";\n            }\n        }\n        System.out.println(result.substring(0, result.length() - 1));\n    }\n}', ['Selma>Lowndes', 'Lowndes>Selma', 'Selma>Lowndes>Other', 'Other'], 'Selma>Lowndes', '条件に合う行だけを配列順に連結します。', 'votingRights が true で order が2以下の2件だけが残り、末尾の > を削ります。', 'オブジェクトリスト、boolean 条件、数値比較、文字列連結を組み合わせています。'),
      execute('final_execute_US_java_02', 'collections', 'Mammoth Cave: final HashMap loop method', 'Mammoth Cave の世界遺産登録年を HashMap とメソッドで判定した出力を選んでください。', 'import java.util.HashMap;\npublic class Main {\n    static String label(String name, int year) {\n        if (year == 1981) {\n            return name + ":World Heritage";\n        }\n        return name + ":Other";\n    }\n    public static void main(String[] args) {\n        HashMap<String, Integer> years = new HashMap<>();\n        years.put("Mammoth Cave", 1981);\n        years.put("Other Cave", 1995);\n        for (String name : years.keySet()) {\n            if (name.equals("Mammoth Cave")) {\n                System.out.println(label(name, years.get(name)));\n            }\n        }\n    }\n}', ['Mammoth Cave:World Heritage', 'Mammoth Cave:Other', 'Other Cave:World Heritage', '1981'], 'Mammoth Cave:World Heritage', 'keySet で名前を取り、対象名だけ label に渡します。', 'Mammoth Cave の年は1981なので label は World Heritage を返します。', 'HashMap、keySet、equals、メソッド戻り値をまとめて追跡します。'),
      execute('final_execute_US_java_03', 'classes', 'Space Needle: final object list method', 'Space Needle のデータをオブジェクト、ArrayList、条件、メソッドで処理した出力を選んでください。', 'import java.util.ArrayList;\nclass Landmark {\n    String name; int year; String event;\n    Landmark(String name, int year, String event) { this.name = name; this.year = year; this.event = event; }\n    String label() { return name + ":" + event; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Landmark> sites = new ArrayList<>();\n        sites.add(new Landmark("Space Needle", 1962, "Seattle World Fair"));\n        sites.add(new Landmark("Other Tower", 1970, "Other Fair"));\n        for (Landmark site : sites) {\n            if (site.year == 1962) {\n                System.out.println(site.label());\n            }\n        }\n    }\n}', ['Space Needle:Seattle World Fair', 'Other Tower:Other Fair', 'Space Needle:1962', 'Seattle World Fair:Space Needle'], 'Space Needle:Seattle World Fair', '1962年のオブジェクトだけ label() が呼ばれます。', '条件に合うのは Space Needle で、label() は name と event をコロンで連結します。', 'クラス、コンストラクタ、ArrayList、条件分岐、インスタンスメソッドを組み合わせています。'),
    ],
  },
  debug: {
    id: 'final_debug_US_java',
    type: 'DEBUG_FINAL',
    title: 'DEBUG FINAL: UNITED STATES JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      debug('final_debug_US_java_01', 'exceptions', 'Gateway Arch: final parsing bug', 'Gateway Arch の高さ "630 ft" を数値化する Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        String heightText = "630 ft";\n        int height = Integer.parseInt(heightText);\n        System.out.println(height);\n    }\n}', [
        debugStep(1, '原因を特定', '"630 ft" をそのまま parseInt して例外になります。', '主な原因はどれですか。', ['数値以外の ft を含んだ文字列を整数変換している', '630 は整数ではない', 'println が int を出せない'], '数値以外の ft を含んだ文字列を整数変換している', 'parseInt は数字だけの文字列を期待します。', 'ft が含まれているため NumberFormatException になります。'),
        debugStep(2, '修正を選ぶ', '前処理と例外処理を入れた修正を選びます。', '正しい修正はどれですか。', ['String numberOnly = heightText.replace(" ft", ""); int height = Integer.parseInt(numberOnly);', 'int height = Integer.parseInt(heightText);', 'int height = 0;'], 'String numberOnly = heightText.replace(" ft", ""); int height = Integer.parseInt(numberOnly);', '単位を取り除いてから変換します。', '数字部分だけにすると安全に整数化できます。'),
        debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['630 を数値として扱える', 'ft だけが出力される', '必ず例外になる'], '630 を数値として扱える', '変換前の文字列から単位を除くためです。', '高さの比較や計算に使える数値になります。'),
      ], 'public class Main {\n    public static void main(String[] args) {\n        String heightText = "630 ft";\n        try {\n            String numberOnly = heightText.replace(" ft", "");\n            int height = Integer.parseInt(numberOnly);\n            System.out.println(height);\n        } catch (NumberFormatException error) {\n            System.out.println("invalid height");\n        }\n    }\n}', { cause: '単位つきの文字列をそのまま整数変換しています。', fix: 'replace で ft を除き、try/catch で失敗にも備えます。', why: 'parseInt は数字だけの文字列を整数にできます。', impact: 'Gateway Arch の高さ630フィートを数値として扱えます。' }),
      debug('final_debug_US_java_02', 'collections', 'Boston Freedom Trail: final missing key bug', 'Boston Freedom Trail の地点データを HashMap で扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> sites = new HashMap<>();\n        sites.put("Common", "Boston Common");\n        sites.put("House", "Old State House");\n        String site = sites.get("Church");\n        System.out.println(site.toUpperCase());\n    }\n}', [
        debugStep(1, '原因を特定', 'HashMap から取り出した値が null になり例外が起きます。', '主な原因はどれですか。', ['存在しないキー Church を get している', 'HashMap は文字列を保存できない', 'toUpperCase は常に失敗する'], '存在しないキー Church を get している', 'put したキー一覧と get のキーを比べます。', 'ないキーの get は null を返します。'),
        debugStep(2, '修正を選ぶ', '欠損キーでも安全な修正を選びます。', '正しい修正はどれですか。', ['String site = sites.getOrDefault("Church", "Unknown site");', 'String site = sites.get("Church");', 'sites = null;'], 'String site = sites.getOrDefault("Church", "Unknown site");', 'getOrDefault はキーがないときの代替値を指定できます。', 'null ではない文字列が入るため toUpperCase を呼べます。'),
        debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['キーがない地点でも落ちずに Unknown site を表示できる', '必ず Boston Common になる', 'HashMap が空になる'], 'キーがない地点でも落ちずに Unknown site を表示できる', '代替値を用意したためです。', 'ルート地点の入力ゆれや欠損に強くなります。'),
      ], 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> sites = new HashMap<>();\n        sites.put("Common", "Boston Common");\n        sites.put("House", "Old State House");\n        String site = sites.getOrDefault("Church", "Unknown site");\n        System.out.println(site.toUpperCase());\n    }\n}', { cause: 'HashMap に存在しないキーを get し、null にメソッドを呼んでいます。', fix: 'getOrDefault で代替値を用意します。', why: '代替値があれば null にならず後続処理が安全です。', impact: 'Freedom Trail の地点キーが欠けてもレビュー表示が落ちません。' }),
      debug('final_debug_US_java_03', 'inheritance', 'Navajo Code Talkers: final override signature bug', 'Navajo Code Talkers の通信コードを扱う Java コードの不具合を、原因・修正・影響の3段階で確認します。', 'class CodeSystem {\n    String encode(String word) { return "plain:" + word; }\n}\nclass NavajoCode extends CodeSystem {\n    @Override\n    String encode(Object word) { return "code:" + word; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        CodeSystem system = new NavajoCode();\n        System.out.println(system.encode("message"));\n    }\n}', [
        debugStep(1, '原因を特定', '@Override の行でコンパイルエラーになります。', '主な原因はどれですか。', ['引数型が String ではなく Object で、親メソッドと署名が違う', 'message が短すぎる', '継承は Java で使えない'], '引数型が String ではなく Object で、親メソッドと署名が違う', 'オーバーライドはメソッド名だけでなく引数も一致します。', 'Object 引数では別メソッド扱いになります。'),
        debugStep(2, '修正を選ぶ', '正しくオーバーライドする修正を選びます。', '正しい修正はどれですか。', ['String encode(String word) にする', 'String encode(Object word) のままにする', '@Override を消して何もしない'], 'String encode(String word) にする', '親と同じ引数型にします。', '@Override が親メソッドとの一致を検査してくれます。'),
        debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['NavajoCode 側の encode が呼ばれ code:message と出る', 'plain:message だけになる', '何も出ない'], 'NavajoCode 側の encode が呼ばれ code:message と出る', '実体は NavajoCode だからです。', '正しい署名なら動的ディスパッチで子クラスの処理が使われます。'),
      ], 'class CodeSystem {\n    String encode(String word) { return "plain:" + word; }\n}\nclass NavajoCode extends CodeSystem {\n    @Override\n    String encode(String word) { return "code:" + word; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        CodeSystem system = new NavajoCode();\n        System.out.println(system.encode("message"));\n    }\n}', { cause: 'オーバーライドしたいメソッドの引数型が親と一致していません。', fix: '子クラス側も String encode(String word) にします。', why: 'Java のオーバーライドは名前、引数、戻り値の互換性が必要です。', impact: 'NavajoCode の通信コード処理が正しく呼ばれます。' }),
    ],
  },
};

function meta(questionId, conceptId, cognitiveTask) {
  const fact = factFor(questionId);
  return {
    questionId,
    countryId: 'US',
    worldId: worldOf(questionId),
    languageId: 'java',
    factIds: [fact.factId],
    entityKeys: fact.entityKeys,
    learningObjectiveId: `lo_${questionId}`,
    programmingConceptIds: [conceptId],
    cognitiveTask,
    progressionGroupId: '',
  };
}

export const US_JAVA_ASSIGNMENTS = [
  ...US_JAVA_DECODE.map(q => meta(q.id, q.conceptId, 'complete-syntax')),
  ...US_JAVA_EXECUTE.map(q => meta(q.id, q.conceptId, 'predict-output')),
  ...US_JAVA_DEBUG.map(q => meta(q.id, q.conceptId, 'identify-defect')),
  ...US_JAVA_FINAL_MISSIONS.decode.questions.map(q => meta(q.id, q.conceptId, 'complete-syntax')),
  ...US_JAVA_FINAL_MISSIONS.execute.questions.map(q => meta(q.id, q.conceptId, 'predict-output')),
  ...US_JAVA_FINAL_MISSIONS.debug.questions.map(q => meta(q.id, q.conceptId, 'identify-defect')),
];
