const SRC = {
  jomon: 'https://jomon-japan.jp/en/learn/jomon-culture',
  heian: 'https://www.city.kyoto.lg.jp/sogo/page/0000015604.html',
  sekigahara: 'https://www.sekigahara1600.com/',
  tea: 'https://japanesetea.sg/tea-culture/tea-utensils/',
  islands: 'https://www.japan.go.jp/kizuna/2021/03/the_japanese_archipelago.html',
  gion: 'https://kyoto.travel/en/season_festivals/gion_matsuri.html',
  shogi: 'https://www.shogi.or.jp/knowledge/',
  ogasawara: 'https://whc.unesco.org/en/list/1362',
  ando: 'https://www.cupnoodles-museum.jp/en/osaka_ikeda/about/',
  boj: 'https://www.boj.or.jp/en/about/outline/history/index.htm',
  akashi: 'https://www.jb-honshi.co.jp/english/technology/akashi.html',
  shiretoko: 'https://whc.unesco.org/en/list/1193',
  tomioka: 'https://whc.unesco.org/en/list/1449',
  arita: 'https://www.japan.travel/en/spot/822/',
  gardens: 'https://www.japan.travel/en/guide/japanese-gardens/',
  expo70: 'https://www.expo70-park.jp/languages/english/',
  kushiro: 'https://www.env.go.jp/park/kushiro/',
  colors: 'https://www.colordic.org/w/',
  bunraku: 'https://ich.unesco.org/en/RL/ningyo-johruri-bunraku-puppet-theatre-00064',
  karate: 'https://ich.unesco.org/en/RL/traditional-okinawan-karate-01218',
  gusuku: 'https://whc.unesco.org/en/list/972',
  iwami: 'https://whc.unesco.org/en/list/1246',
  setonaikai: 'https://www.env.go.jp/park/setonaikai/',
  urushi: 'https://www.japan.travel/en/guide/japanese-lacquerware/',
  shichifukujin: 'https://www.tnm.jp/modules/r_collection/index.php?controller=dtl&colid=A10569',
  edoKiriko: 'https://www.sangyo-rodo.metro.tokyo.lg.jp/shoko/dentokogei/edokiriko/',
  tokyoTower: 'https://www.tokyotower.co.jp/en/history/',
  eto: 'https://www.ndl.go.jp/koyomi/e/chapter3/s8.html',
  beppu: 'https://www.japan.travel/en/destinations/kyushu/oita/beppu-and-around/',
  sumo: 'https://www.sumo.or.jp/EnSumoDataRikishi/Banzuke/',
  rakugo: 'https://www.ntj.jac.go.jp/en/kokuritsu/rakugo.html',
};

const FACTS = [
  ['jp_java_d01', 'archaeology', 'jomon_pottery', '縄文土器', '縄文土器は縄文時代を代表する土器で、縄目の文様を持つ土器として知られます。', ['decode'], SRC.jomon],
  ['jp_java_d02', 'history', 'heian_capital', '平安京への遷都', '794年、都は平安京へ移され、平安時代の始まりと結びつきます。', ['decode'], SRC.heian],
  ['jp_java_d03', 'history', 'sekigahara_1600', '関ヶ原の戦い', '関ヶ原の戦いは1600年に起き、徳川家康の時代への大きな転機になりました。', ['decode'], SRC.sekigahara],
  ['jp_java_d04', 'traditional-culture', 'tea_utensils', '茶道の道具', '茶碗、茶筅、茶杓などは茶道で使われる代表的な道具です。', ['decode'], SRC.tea],
  ['jp_java_d05', 'geography', 'japan_main_islands', '日本の四つの主要な島', '日本列島の主要な島として北海道、本州、四国、九州がよく挙げられます。', ['decode'], SRC.islands],
  ['jp_java_d06', 'traditional-culture', 'gion_matsuri', '京都の祇園祭', '祇園祭は京都を代表する祭礼として知られ、山鉾行事でも有名です。', ['decode'], SRC.gion],
  ['jp_java_d07', 'traditional-game', 'shogi_pieces', '将棋の駒', '将棋は複数の種類の駒を使う日本の盤上ゲームです。', ['decode'], SRC.shogi],
  ['jp_java_d08', 'world-heritage-nature', 'ogasawara_islands', '小笠原諸島', '小笠原諸島は世界自然遺産で、固有種でも知られる島々です。', ['decode'], SRC.ogasawara],
  ['jp_java_d09', 'invention-food', 'ando_momofuku_instant_ramen', '安藤百福とインスタントラーメン', '安藤百福は1958年にインスタントラーメンを開発しました。', ['decode'], SRC.ando],
  ['jp_java_d10', 'industry-finance', 'bank_of_japan', '日本銀行', '日本銀行は1882年に設立された日本の中央銀行です。', ['decode'], SRC.boj],
  ['final_decode_JP_java_01', 'architecture-transport', 'akashi_kaikyo_bridge', '明石海峡大橋', '明石海峡大橋は1998年に開通し、神戸側と淡路島を結びます。', ['decode'], SRC.akashi],
  ['final_decode_JP_java_02', 'world-heritage-nature', 'shiretoko', '知床', '知床は2005年に世界自然遺産へ登録されました。', ['decode'], SRC.shiretoko],
  ['final_decode_JP_java_03', 'world-heritage-industry', 'tomioka_silk_mill', '富岡製糸場', '富岡製糸場は1872年に操業を開始し、2014年に世界遺産へ登録されました。', ['decode'], SRC.tomioka],
  ['jp_java_e01', 'traditional-craft', 'arita_ware', '有田焼', '有田焼は佐賀県有田地域と結びつく磁器として知られます。', ['execute'], SRC.arita],
  ['jp_java_e02', 'garden-culture', 'three_great_gardens', '日本三名園', '兼六園、後楽園、偕楽園は日本三名園としてよく知られています。', ['execute'], SRC.gardens],
  ['jp_java_e03', 'modern-history', 'expo_1970_osaka', '1970年大阪万博', '日本万国博覧会は1970年に大阪で開催されました。', ['execute'], SRC.expo70],
  ['jp_java_e04', 'nature-conservation', 'kushiro_marsh', '釧路湿原', '釧路湿原は北海道の広大な湿地として保護されています。', ['execute'], SRC.kushiro],
  ['jp_java_e05', 'traditional-color', 'japanese_traditional_colors', '日本の伝統色', '藍、紅、若草などは日本の色名として親しまれています。', ['execute'], SRC.colors],
  ['jp_java_e06', 'traditional-culture', 'bunraku', '文楽', '文楽は日本の伝統的な人形劇です。', ['execute'], SRC.bunraku],
  ['jp_java_e07', 'martial-art', 'karate_ryukyu', '空手と琉球', '空手は琉球・沖縄の歴史と深く結びついて発展しました。', ['execute'], SRC.karate],
  ['final_execute_JP_java_01', 'world-heritage-culture', 'gusuku_ryukyu', '琉球王国のグスク及び関連遺産群', '琉球王国のグスク及び関連遺産群は2000年に世界遺産へ登録されました。', ['execute'], SRC.gusuku],
  ['final_execute_JP_java_02', 'world-heritage-industry', 'iwami_ginzan', '石見銀山', '石見銀山は2007年に世界遺産へ登録されました。', ['execute'], SRC.iwami],
  ['final_execute_JP_java_03', 'national-park', 'setonaikai_national_park', '瀬戸内海国立公園', '瀬戸内海国立公園は1934年に指定された最初期の国立公園の一つです。', ['execute'], SRC.setonaikai],
  ['jp_java_b01', 'traditional-craft', 'urushi_lacquerware', '漆・漆器', '漆器には漆の木の樹液を加工した塗料が使われます。', ['debug'], SRC.urushi],
  ['jp_java_b02', 'folk-belief', 'shichifukujin', '七福神', '七福神は七柱の福の神として知られます。', ['debug'], SRC.shichifukujin],
  ['jp_java_b03', 'traditional-craft', 'edo_kiriko', '江戸切子', '江戸切子は東京と結びつくカットガラスの工芸です。', ['debug'], SRC.edoKiriko],
  ['jp_java_b04', 'architecture', 'tokyo_tower', '東京タワー', '東京タワーは1958年に開業しました。', ['debug'], SRC.tokyoTower],
  ['jp_java_b05', 'calendar-culture', 'eto_zodiac', '十二支', '十二支は12の動物で表されます。', ['debug'], SRC.eto],
  ['final_debug_JP_java_01', 'hot-spring', 'beppu_onsen', '別府温泉', '別府は大分県の温泉地として知られます。', ['debug'], SRC.beppu],
  ['final_debug_JP_java_02', 'traditional-sport', 'sumo_banzuke', '相撲の番付', '相撲の番付には横綱、大関、関脇、小結、前頭などの階級があります。', ['debug'], SRC.sumo],
  ['final_debug_JP_java_03', 'traditional-performance', 'rakugo', '落語', '落語は一人の演者が座って物語を演じる話芸です。', ['debug'], SRC.rakugo],
];

function sourceRef(url) {
  return [{ title: 'Reference source', organization: new URL(url).hostname, url }];
}

function factIdFromQuestion(questionId) {
  return `fact_${questionId}`;
}

function makeTopicBackground(titleJa, summaryJa, category) {
  return `${summaryJa}${titleJa}は、年号・場所・名称だけを丸暗記するよりも、どの時代や地域の中で意味を持つのかを合わせて見ると理解しやすい題材です。分類は ${category} で、歴史、文化、自然、産業、制度のいずれに関わるかを意識すると、同じ日本の題材でも性質の違いが見えてきます。背景には、その土地で続いた生活や技術、社会の変化、保存や継承の取り組みが重なっています。名称に含まれる地名、関係する年、使われる道具や制度、何を代表しているのかを整理すると、事実を断片ではなく一つの文脈として捉えられます。さらに、誰が関わったのか、どの地域で受け継がれているのか、いつ制度化または評価されたのかを分けて見ると、似た名前の文化・地理・産業の題材とも混同しにくくなります。`;
}

function factObject([questionId, category, entity, titleJa, summaryJa, worlds, url]) {
  const factId = factIdFromQuestion(questionId);
  const backgroundJa = makeTopicBackground(titleJa, summaryJa, category);
  return {
    factId,
    countryId: 'JP',
    category,
    entityKeys: [`jp:${entity}`],
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
    keyPointsJa: [summaryJa, `${titleJa}を識別する基本情報です。`, '年・地域・名称などを混同しないことが大切です。'],
  };
}

export const JP_JAVA_FACTS = FACTS.map(factObject);

function meta(questionId, conceptId, cognitiveTask, progressionGroupId = '') {
  const fact = JP_JAVA_FACTS.find(item => item.factId === factIdFromQuestion(questionId));
  return {
    questionId,
    countryId: 'JP',
    worldId: questionId.includes('_e') || questionId.includes('execute') ? 'execute' : questionId.includes('_b') || questionId.includes('debug') ? 'debug' : 'decode',
    languageId: 'java',
    factIds: [fact.factId],
    entityKeys: fact.entityKeys,
    learningObjectiveId: `lo_${questionId}`,
    programmingConceptIds: [conceptId],
    cognitiveTask,
    progressionGroupId,
  };
}

function commonFields(questionId, conceptId, title, prompt, code, answer, completedCode, explanation, extra = {}) {
  const fact = JP_JAVA_FACTS.find(item => item.factId === factIdFromQuestion(questionId));
  return {
    id: questionId,
    worldId: extra.worldId || 'decode',
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
    ...extra,
  };
}

function decode(questionId, conceptId, title, prompt, code, blank, completedCode, expectedOutput, hint, programmingExplanation) {
  return commonFields(questionId, conceptId, title, prompt, code, blank, completedCode, `空欄に ${blank} を入れると、期待される出力「${expectedOutput}」になります。`, {
    expectedOutput,
    hint,
    executionSteps: ['コード内の事実データを確認する。', '空欄に入る Java 構文を選ぶ。', '完成したコードの出力を期待結果と照合する。'],
    commonMistakes: ['事実名だけでなく、Java の型・メソッド・添字も確認しましょう。'],
    programmingExplanation,
  });
}

function execute(questionId, conceptId, title, prompt, code, options, answer, hint, explanation, programmingExplanation) {
  return commonFields(questionId, conceptId, title, prompt, code, answer, code, explanation, {
    worldId: 'execute',
    questionType: 'output-predict',
    options,
    hint,
    executionSteps: ['変数に入る値を上から順に追う。', '条件やメソッド呼び出しで残る値を確認する。', 'System.out.println の出力だけを答える。'],
    commonMistakes: ['配列やリストの順番、String.equals、オーバーライドの呼び出し先を混同しないようにします。'],
    programmingExplanation,
  });
}

function debugStep(num, title, prompt, question, options, answer, hint, explanation) {
  return { stepNum: num, stepTitle: title, prompt, question, options, answer, hint, explanation };
}

function debug(questionId, conceptId, title, description, code, steps, correctedCode, debugExplanation) {
  const answer = steps.map(step => step.answer).join(' / ');
  return commonFields(questionId, conceptId, title, description, code, answer, correctedCode, steps[0].explanation, {
    worldId: 'debug',
    questionType: 'debug-step',
    steps,
    correctedCode,
    executionSteps: ['Step 1 で原因を特定する。', 'Step 2 で最小の修正を選ぶ。', 'Step 3 で影響を説明する。'],
    commonMistakes: ['エラー文だけでなく、Java の比較・null・static・配列範囲・オーバーライド規則を確認します。'],
    programmingExplanation: `${debugExplanation.cause} ${debugExplanation.fix} ${debugExplanation.impact}`,
    debugExplanation: { ...debugExplanation, correctedCode },
  });
}

export const JP_JAVA_DECODE = [
  decode('jp_java_d01', 'strings', '縄文土器: String と出力', '縄文土器を題材に、期待される出力と同じ結果になるように空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String artifact = "縄文土器";\n        System.out.println(___BLANK___);\n    }\n}', 'artifact', 'public class Main {\n    public static void main(String[] args) {\n        String artifact = "縄文土器";\n        System.out.println(artifact);\n    }\n}', '縄文土器', '出力したい文字列はすでに String 変数に入っています。変数名をそのまま使います。', 'String 型の変数を System.out.println に渡すと、その中身が表示されます。'),
  decode('jp_java_d02', 'variables', '平安京への遷都: int と連結', '平安京への遷都を題材に、794年を含む説明が出力されるように空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        int year = ___BLANK___;\n        String city = "平安京";\n        System.out.println(year + "年: " + city);\n    }\n}', '794', 'public class Main {\n    public static void main(String[] args) {\n        int year = 794;\n        String city = "平安京";\n        System.out.println(year + "年: " + city);\n    }\n}', '794年: 平安京', 'int に入れる数値なので、引用符は付けません。', 'int 変数と文字列を + でつなぐと、表示用の文字列になります。'),
  decode('jp_java_d03', 'conditionals', '関ヶ原の戦い: 比較と if/else', '関ヶ原の戦いの年を判定し、1600年なら Sekigahara と出力されるように空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        int battleYear = 1600;\n        if (battleYear ___BLANK___ 1600) {\n            System.out.println("Sekigahara");\n        } else {\n            System.out.println("Other");\n        }\n    }\n}', '==', 'public class Main {\n    public static void main(String[] args) {\n        int battleYear = 1600;\n        if (battleYear == 1600) {\n            System.out.println("Sekigahara");\n        } else {\n            System.out.println("Other");\n        }\n    }\n}', 'Sekigahara', '値が等しいかを調べる演算子を使います。代入の = ではありません。', 'Java で数値の等価比較をするときは == を使います。'),
  decode('jp_java_d04', 'switch', '茶道の道具: switch', '茶道の道具データから、茶筅に対応する説明が出るように switch の空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String tool = "茶筅";\n        switch (tool) {\n            case "茶碗": System.out.println("飲む器"); break;\n            case ___BLANK___: System.out.println("抹茶を点てる道具"); break;\n            case "茶杓": System.out.println("抹茶をすくう道具"); break;\n        }\n    }\n}', '"茶筅"', 'public class Main {\n    public static void main(String[] args) {\n        String tool = "茶筅";\n        switch (tool) {\n            case "茶碗": System.out.println("飲む器"); break;\n            case "茶筅": System.out.println("抹茶を点てる道具"); break;\n            case "茶杓": System.out.println("抹茶をすくう道具"); break;\n        }\n    }\n}', '抹茶を点てる道具', 'case には tool と一致させたい文字列を書きます。', 'switch は1つの値を複数の case と照合します。String の case では引用符が必要です。'),
  decode('jp_java_d05', 'arrays', '日本の四つの主要な島: 配列添字', '北海道、本州、四国、九州の配列から本州が出力されるように空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] islands = {"北海道", "本州", "四国", "九州"};\n        System.out.println(islands[___BLANK___]);\n    }\n}', '1', 'public class Main {\n    public static void main(String[] args) {\n        String[] islands = {"北海道", "本州", "四国", "九州"};\n        System.out.println(islands[1]);\n    }\n}', '本州', '配列の添字は0から始まります。本州は2番目です。', 'Java の配列は 0 始まりなので、2番目の要素は添字 1 です。'),
  decode('jp_java_d06', 'loops', '京都の祇園祭: 拡張 for', '祇園祭の要素を順に出力する拡張 for が完成するように空欄を埋めてください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] features = {"京都", "祇園祭"};\n        for (String feature ___BLANK___ features) {\n            System.out.println(feature);\n        }\n    }\n}', ':', 'public class Main {\n    public static void main(String[] args) {\n        String[] features = {"京都", "祇園祭"};\n        for (String feature : features) {\n            System.out.println(feature);\n        }\n    }\n}', '京都\n祇園祭', '拡張 for は「変数 : 配列」の形です。', '拡張 for は配列の要素を先頭から1つずつ取り出します。'),
  decode('jp_java_d07', 'methods', '将棋の駒: 引数と戻り値', '将棋の駒名を受け取り、表示用ラベルを返すメソッド呼び出しを完成させてください。', 'public class Main {\n    static String label(String piece) {\n        return piece + "の駒";\n    }\n    public static void main(String[] args) {\n        System.out.println(label(___BLANK___));\n    }\n}', '"飛車"', 'public class Main {\n    static String label(String piece) {\n        return piece + "の駒";\n    }\n    public static void main(String[] args) {\n        System.out.println(label("飛車"));\n    }\n}', '飛車の駒', 'piece は String 型なので、渡す値は引用符つきの文字列です。', 'メソッドの引数に値を渡すと、仮引数 piece として処理に使われます。'),
  decode('jp_java_d08', 'collections', '小笠原諸島: ArrayList', '小笠原諸島の特徴リストから「固有種」が出力されるように空欄を埋めてください。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> features = new ArrayList<>();\n        features.add("世界自然遺産");\n        features.add("固有種");\n        System.out.println(features.get(___BLANK___));\n    }\n}', '1', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> features = new ArrayList<>();\n        features.add("世界自然遺産");\n        features.add("固有種");\n        System.out.println(features.get(1));\n    }\n}', '固有種', 'ArrayList の get も0始まりです。', 'ArrayList は add した順番で要素を保持し、get(index) で取り出します。'),
  decode('jp_java_d09', 'classes', '安藤百福: クラスとコンストラクタ', '安藤百福と1958年のデータを持つオブジェクトを作るため、コンストラクタ引数を埋めてください。', 'class Invention {\n    String inventor;\n    int year;\n    Invention(String inventor, int year) {\n        this.inventor = inventor;\n        this.year = year;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Invention ramen = new Invention("安藤百福", ___BLANK___);\n        System.out.println(ramen.inventor + ":" + ramen.year);\n    }\n}', '1958', 'class Invention {\n    String inventor;\n    int year;\n    Invention(String inventor, int year) {\n        this.inventor = inventor;\n        this.year = year;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Invention ramen = new Invention("安藤百福", 1958);\n        System.out.println(ramen.inventor + ":" + ramen.year);\n    }\n}', '安藤百福:1958', 'year は int なので数値だけを渡します。', 'new でオブジェクトを作るとき、コンストラクタ引数がフィールドの初期値になります。'),
  decode('jp_java_d10', 'collections', '日本銀行: HashMap', '日本銀行の設立年を HashMap から取り出すため、get のキーを埋めてください。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> founded = new HashMap<>();\n        founded.put("日本銀行", 1882);\n        System.out.println(founded.get(___BLANK___));\n    }\n}', '"日本銀行"', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> founded = new HashMap<>();\n        founded.put("日本銀行", 1882);\n        System.out.println(founded.get("日本銀行"));\n    }\n}', '1882', 'put したときと同じキー文字列を get に渡します。', 'HashMap はキーと値を対応づけ、get(key) で値を取り出します。'),
];

export const JP_JAVA_EXECUTE = [
  execute('jp_java_e01', 'strings', '有田焼: String.equals の追跡', '有田焼の産地ラベルを String.equals で判定したときの出力を選んでください。', 'public class Main {\n    public static void main(String[] args) {\n        String area = "有田";\n        if (area.equals("有田")) {\n            System.out.println("佐賀の磁器");\n        } else {\n            System.out.println("別の工芸");\n        }\n    }\n}', ['佐賀の磁器', '別の工芸', '有田', 'true'], '佐賀の磁器', 'String の内容比較は equals の結果を見ます。', 'area の中身は "有田" なので equals が true になり、最初の出力になります。', 'String.equals は文字列の内容が等しいかを判定します。'),
  execute('jp_java_e02', 'arrays', '日本三名園: 配列を順に連結', '兼六園、後楽園、偕楽園の配列を順に処理した出力を選んでください。', 'public class Main {\n    public static void main(String[] args) {\n        String[] gardens = {"兼六園", "後楽園", "偕楽園"};\n        String result = "";\n        for (String garden : gardens) {\n            result += garden + " ";\n        }\n        System.out.println(result.trim());\n    }\n}', ['兼六園 後楽園 偕楽園', '偕楽園 後楽園 兼六園', '兼六園', 'Error'], '兼六園 後楽園 偕楽園', '拡張 for は配列の順番を保って進みます。', '配列の先頭から順に result へ足し、最後に trim で末尾の空白を消します。', '配列 iteration と文字列連結の順序を追います。'),
  execute('jp_java_e03', 'methods', '1970年大阪万博: メソッド戻り値', '開催年を受け取るメソッドの戻り値を追ってください。', 'public class Main {\n    static String expoLabel(int year) {\n        return "大阪万博:" + year;\n    }\n    public static void main(String[] args) {\n        String label = expoLabel(1970);\n        System.out.println(label);\n    }\n}', ['大阪万博:1970', '1970:大阪万博', '大阪万博', 'Error'], '大阪万博:1970', 'return された文字列が label に入ります。', 'expoLabel(1970) は "大阪万博:" と 1970 を連結して返します。', 'メソッドの戻り値が変数へ代入され、出力に使われます。'),
  execute('jp_java_e04', 'collections', '釧路湿原: ArrayList filtering', '湿地として保護されている項目だけを ArrayList から抽出した出力を選んでください。', 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> sites = new ArrayList<>();\n        sites.add("釧路湿原:湿地");\n        sites.add("摩周湖:湖");\n        for (String site : sites) {\n            if (site.contains("湿地")) {\n                System.out.println(site.split(":")[0]);\n            }\n        }\n    }\n}', ['釧路湿原', '摩周湖', '湿地', '釧路湿原\n摩周湖'], '釧路湿原', 'contains("湿地") を満たす要素だけが出力されます。', '1件目だけが条件に合い、split(":")[0] で名前部分だけを取り出します。', 'ArrayList の各要素を条件で絞り、文字列を分割します。'),
  execute('jp_java_e05', 'collections', '日本の伝統色: HashMap lookup', 'HashMap に入れた色名データから、紅の説明を取り出す出力を選んでください。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, String> colors = new HashMap<>();\n        colors.put("藍", "blue");\n        colors.put("紅", "red");\n        colors.put("若草", "green");\n        System.out.println(colors.get("紅"));\n    }\n}', ['red', 'blue', 'green', '紅'], 'red', 'HashMap はキーに対応する値を返します。', 'キー "紅" に対応する値は "red" です。', 'put と get のキー対応を追います。'),
  execute('jp_java_e06', 'classes', '文楽: コンストラクタとフィールド', '文楽データのオブジェクトを作った後、出力される値を選んでください。', 'class Performance {\n    String name;\n    String type;\n    Performance(String name, String type) {\n        this.name = name;\n        this.type = type;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Performance bunraku = new Performance("文楽", "人形劇");\n        System.out.println(bunraku.name + ":" + bunraku.type);\n    }\n}', ['文楽:人形劇', '人形劇:文楽', '文楽', 'Error'], '文楽:人形劇', 'コンストラクタで name と type に入る順番を追います。', 'new Performance("文楽", "人形劇") により name は文楽、type は人形劇です。', 'コンストラクタ引数がフィールドに代入される流れを追います。'),
  execute('jp_java_e07', 'inheritance', '空手と琉球: オーバーライド', '継承したクラスのメソッド呼び出しで、どの出力になるか選んでください。', 'class MartialArt {\n    String origin() { return "武道"; }\n}\nclass Karate extends MartialArt {\n    @Override\n    String origin() { return "琉球・沖縄"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MartialArt art = new Karate();\n        System.out.println(art.origin());\n    }\n}', ['琉球・沖縄', '武道', 'Karate', 'Error'], '琉球・沖縄', '変数の型ではなく、実際のオブジェクトが Karate である点を見ます。', '実体は Karate なので、オーバーライドされた origin() が呼ばれます。', 'Java の動的ディスパッチでは、実際のオブジェクト側のメソッドが選ばれます。'),
];

export const JP_JAVA_DEBUG = [
  debug('jp_java_b01', 'strings', '漆・漆器: == と equals のバグ', '漆器の材料名を判定する Java コードのバグを、原因・修正・影響の3段階で確認します。', 'public class Main {\n    public static void main(String[] args) {\n        String material = new String("漆");\n        if (material == "漆") {\n            System.out.println("漆器の塗料");\n        }\n    }\n}', [
    debugStep(1, '原因を特定', '文字列の内容は同じなのに出力されません。', '主な原因はどれですか。', ['String を == で比較している', 'println がない', '変数 material が int 型'], 'String を == で比較している', 'String の内容比較と参照比較の違いを見ます。', '== は同じオブジェクト参照かを見ます。'),
    debugStep(2, '修正を選ぶ', '内容が同じかを判定する最小修正を選びます。', '正しい修正はどれですか。', ['material.equals("漆") を使う', 'material = "漆" を使う', 'if を消す'], 'material.equals("漆") を使う', 'String の内容比較メソッドを使います。', 'equals で文字列の内容を比較できます。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響として正しいものはどれですか。', ['同じ内容の文字列なら漆器の塗料と出力できる', 'すべての文字列で必ず出力される', 'null でも必ず安全になる'], '同じ内容の文字列なら漆器の塗料と出力できる', '条件が true になるケースを見ます。', '内容が漆なら出力されます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String material = new String("漆");\n        if (material.equals("漆")) {\n            System.out.println("漆器の塗料");\n        }\n    }\n}', { cause: 'String を == で比較している。', fix: 'material.equals("漆") を使う。', why: 'equals は文字列の内容を比較するため。', impact: '同じ内容の文字列なら正しく判定できる。' }),
  debug('jp_java_b02', 'arrays', '七福神: 配列添字の範囲外', '七福神の配列を扱うコードの範囲外アクセスを修正します。', 'public class Main {\n    public static void main(String[] args) {\n        String[] gods = {"恵比寿", "大黒天", "毘沙門天", "弁財天", "福禄寿", "寿老人", "布袋"};\n        System.out.println(gods[7]);\n    }\n}', [
    debugStep(1, '原因を特定', '7柱の名前を持つ配列で例外が起きます。', '原因はどれですか。', ['添字7は8番目を指すため範囲外', '配列が空', 'String が使えない'], '添字7は8番目を指すため範囲外', 'Java の配列添字は0から始まります。', '7要素の最後は添字6です。'),
    debugStep(2, '修正を選ぶ', '最後の要素を出したい場合の修正はどれですか。', '正しい修正はどれですか。', ['gods[6] にする', 'gods[0] にする', 'gods[8] にする'], 'gods[6] にする', '7番目の要素は添字6です。', '最後の要素へ正しくアクセスします。'),
    debugStep(3, '影響を説明', '修正後の出力を確認します。', '修正の影響として正しいものはどれですか。', ['ArrayIndexOutOfBoundsException を避けられる', '配列の要素数が8になる', 'すべての神名が出る'], 'ArrayIndexOutOfBoundsException を避けられる', '例外原因が消えるかを見ます。', '範囲内の添字になり、例外を避けられます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String[] gods = {"恵比寿", "大黒天", "毘沙門天", "弁財天", "福禄寿", "寿老人", "布袋"};\n        System.out.println(gods[6]);\n    }\n}', { cause: '7要素の配列に添字7でアクセスしている。', fix: '最後の要素なら gods[6] を使う。', why: 'Java 配列は0始まりだから。', impact: '範囲外例外を避けて最後の名前を表示できる。' }),
  debug('jp_java_b03', 'null-safety', '江戸切子: null にメソッド呼び出し', '江戸切子の地域名データが null のときに落ちるコードを修正します。', 'public class Main {\n    public static void main(String[] args) {\n        String craftArea = null;\n        if (craftArea.equals("東京")) {\n            System.out.println("江戸切子");\n        }\n    }\n}', [
    debugStep(1, '原因を特定', '実行時に NullPointerException が起きます。', '原因はどれですか。', ['null に対して equals を呼んでいる', '東京が文字列ではない', 'println が多すぎる'], 'null に対して equals を呼んでいる', 'メソッドを呼んでいる左側の値を見ます。', 'craftArea が null なので equals を呼べません。'),
    debugStep(2, '修正を選ぶ', '安全に比較する修正はどれですか。', '正しい修正はどれですか。', ['craftArea != null && craftArea.equals("東京")', 'craftArea == null && craftArea.equals("東京")', 'craftArea.equals(null)'], 'craftArea != null && craftArea.equals("東京")', 'null でないことを先に確認します。', '&& は左が false なら右を評価しません。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響として正しいものはどれですか。', ['null のとき例外を避けられる', 'null のとき必ず江戸切子と出る', 'equals が不要になる'], 'null のとき例外を避けられる', 'null の場合に右側が呼ばれない点を見ます。', '例外を避けつつ、東京のときだけ出力できます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String craftArea = null;\n        if (craftArea != null && craftArea.equals("東京")) {\n            System.out.println("江戸切子");\n        }\n    }\n}', { cause: 'null に対して equals を呼んでいる。', fix: 'craftArea != null を先に確認する。', why: '&& の短絡評価で null 時に equals を呼ばないため。', impact: 'NullPointerException を避けられる。' }),
  debug('jp_java_b04', 'static', '東京タワー: static と instance', '東京タワーの開業年を扱うコードで、static ではないフィールドをクラス名から読んでいるバグを修正します。', 'class Tower {\n    int openedYear = 1958;\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Tower.openedYear);\n    }\n}', [
    debugStep(1, '原因を特定', 'コンパイルエラーになります。', '原因はどれですか。', ['インスタンスフィールドをクラス名から読んでいる', '1958 が int ではない', 'class が使えない'], 'インスタンスフィールドをクラス名から読んでいる', 'openedYear に static があるか見ます。', 'openedYear はオブジェクトに属するフィールドです。'),
    debugStep(2, '修正を選ぶ', '最小修正として適切なのはどれですか。', '正しい修正はどれですか。', ['Tower tower = new Tower(); System.out.println(tower.openedYear);', 'System.out.println(openedYear);', 'Tower.openedYear() にする'], 'Tower tower = new Tower(); System.out.println(tower.openedYear);', 'オブジェクトを作ってから読みます。', 'new Tower() でインスタンスを作り、tower.openedYear を読みます。'),
    debugStep(3, '影響を説明', '修正後の出力を確認します。', '修正の影響として正しいものはどれですか。', ['1958 を出力できる', 'static フィールドに変わる', 'クラス定義が不要になる'], '1958 を出力できる', 'どの所有者から読むかを見ます。', 'インスタンスから読むことで開業年を表示できます。'),
  ], 'class Tower {\n    int openedYear = 1958;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Tower tower = new Tower();\n        System.out.println(tower.openedYear);\n    }\n}', { cause: 'インスタンスフィールドをクラス名から読んでいる。', fix: 'Tower オブジェクトを作り、tower.openedYear を読む。', why: 'static でないフィールドは各オブジェクトに属するため。', impact: '1958 を正しく出力できる。' }),
  debug('jp_java_b05', 'loops', '十二支: off-by-one ループ', '十二支の配列をすべて出すループの終了条件を修正します。', 'public class Main {\n    public static void main(String[] args) {\n        String[] zodiac = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};\n        for (int i = 0; i <= zodiac.length; i++) {\n            System.out.println(zodiac[i]);\n        }\n    }\n}', [
    debugStep(1, '原因を特定', '最後で配列範囲外になります。', '原因はどれですか。', ['i <= zodiac.length で length 番目まで進む', '配列が11個しかない', 'i++ がない'], 'i <= zodiac.length で length 番目まで進む', '配列の最後の添字は length - 1 です。', 'i が 12 になったとき範囲外です。'),
    debugStep(2, '修正を選ぶ', '12個を安全に出す条件はどれですか。', '正しい修正はどれですか。', ['i < zodiac.length', 'i <= zodiac.length - 2', 'i == zodiac.length'], 'i < zodiac.length', '0 から length - 1 まで進めます。', '< を使うと最後の有効添字で止まります。'),
    debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響として正しいものはどれですか。', ['12個すべてを範囲内で出力できる', '最後の亥だけ出ない', '13個出る'], '12個すべてを範囲内で出力できる', '0から11までの12回を確認します。', '十二支の12要素をすべて安全に出力できます。'),
  ], 'public class Main {\n    public static void main(String[] args) {\n        String[] zodiac = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};\n        for (int i = 0; i < zodiac.length; i++) {\n            System.out.println(zodiac[i]);\n        }\n    }\n}', { cause: 'ループ条件が i <= zodiac.length になっている。', fix: 'i < zodiac.length にする。', why: '最後の有効添字は length - 1 だから。', impact: '12要素をすべて範囲内で出力できる。' }),
];

export const JP_JAVA_FINAL_MISSIONS = {
  decode: {
    id: 'final_decode_JP_java',
    type: 'DECODE_FINAL',
    title: 'DECODE FINAL: JAPAN JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      decode('final_decode_JP_java_01', 'methods', '明石海峡大橋: final variables + method + condition', '明石海峡大橋のデータを使い、1998年開通なら橋名を出力するコードを完成させてください。', 'public class Main {\n    static String bridgeLabel(String name, int opened) {\n        if (opened == 1998) {\n            return name + " connects Kobe and Awaji";\n        }\n        return "unknown";\n    }\n    public static void main(String[] args) {\n        String result = bridgeLabel("明石海峡大橋", ___BLANK___);\n        System.out.println(result);\n    }\n}', '1998', 'public class Main {\n    static String bridgeLabel(String name, int opened) {\n        if (opened == 1998) {\n            return name + " connects Kobe and Awaji";\n        }\n        return "unknown";\n    }\n    public static void main(String[] args) {\n        String result = bridgeLabel("明石海峡大橋", 1998);\n        System.out.println(result);\n    }\n}', '明石海峡大橋 connects Kobe and Awaji', '条件が true になる開通年を int として渡します。', 'メソッド引数、条件分岐、戻り値を組み合わせています。'),
      decode('final_decode_JP_java_02', 'collections', '知床: final ArrayList + loop + condition', '知床が2005年登録の自然遺産として出力されるように条件の空欄を埋めてください。', 'import java.util.ArrayList;\nclass Site {\n    String name; int year; String type;\n    Site(String name, int year, String type) { this.name = name; this.year = year; this.type = type; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Site> sites = new ArrayList<>();\n        sites.add(new Site("知床", 2005, "自然"));\n        sites.add(new Site("別の遺産", 2010, "文化"));\n        for (Site site : sites) {\n            if (site.year == ___BLANK___ && site.type.equals("自然")) {\n                System.out.println(site.name);\n            }\n        }\n    }\n}', '2005', 'import java.util.ArrayList;\nclass Site {\n    String name; int year; String type;\n    Site(String name, int year, String type) { this.name = name; this.year = year; this.type = type; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Site> sites = new ArrayList<>();\n        sites.add(new Site("知床", 2005, "自然"));\n        sites.add(new Site("別の遺産", 2010, "文化"));\n        for (Site site : sites) {\n            if (site.year == 2005 && site.type.equals("自然")) {\n                System.out.println(site.name);\n            }\n        }\n    }\n}', '知床', '年と種類の両方を満たす条件です。', 'ArrayList、拡張 for、&& 条件を組み合わせています。'),
      decode('final_decode_JP_java_03', 'classes', '富岡製糸場: final class + constructor + map', '富岡製糸場の操業開始年を Map から取得して表示するように空欄を埋めてください。', 'import java.util.HashMap;\nclass Heritage {\n    String name;\n    Heritage(String name) { this.name = name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heritage site = new Heritage("富岡製糸場");\n        HashMap<String, Integer> years = new HashMap<>();\n        years.put("start", 1872);\n        years.put("worldHeritage", 2014);\n        System.out.println(site.name + ":" + years.get(___BLANK___));\n    }\n}', '"start"', 'import java.util.HashMap;\nclass Heritage {\n    String name;\n    Heritage(String name) { this.name = name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heritage site = new Heritage("富岡製糸場");\n        HashMap<String, Integer> years = new HashMap<>();\n        years.put("start", 1872);\n        years.put("worldHeritage", 2014);\n        System.out.println(site.name + ":" + years.get("start"));\n    }\n}', '富岡製糸場:1872', '操業開始年は start キーに入っています。', 'クラス、コンストラクタ、HashMap lookup を組み合わせています。'),
    ],
  },
  execute: {
    id: 'final_execute_JP_java',
    type: 'EXECUTE_FINAL',
    title: 'EXECUTE FINAL: JAPAN JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      execute('final_execute_JP_java_01', 'collections', '琉球王国のグスク: final filtering/order', '登録年2000のグスク関連データだけを順に出力した結果を選んでください。', 'import java.util.ArrayList;\nclass Site {\n    String name; int year; int order;\n    Site(String name, int year, int order) { this.name = name; this.year = year; this.order = order; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Site> sites = new ArrayList<>();\n        sites.add(new Site("今帰仁城跡", 2000, 2));\n        sites.add(new Site("首里城跡", 2000, 1));\n        String result = "";\n        for (int target = 1; target <= 2; target++) {\n            for (Site site : sites) {\n                if (site.year == 2000 && site.order == target) {\n                    result += site.name + " ";\n                }\n            }\n        }\n        System.out.println(result.trim());\n    }\n}', ['首里城跡 今帰仁城跡', '今帰仁城跡 首里城跡', '首里城跡', 'Error'], '首里城跡 今帰仁城跡', '外側の target が出力順を決めています。', 'target=1 で首里城跡、target=2 で今帰仁城跡が追加されます。', 'ネストしたループで順序を明示して抽出しています。'),
      execute('final_execute_JP_java_02', 'collections', '石見銀山: final HashMap + method', 'HashMap の値とメソッド戻り値を使った出力を選んでください。', 'import java.util.HashMap;\npublic class Main {\n    static String label(String name, int year) {\n        return name + ":" + year;\n    }\n    public static void main(String[] args) {\n        HashMap<String, Integer> registered = new HashMap<>();\n        registered.put("石見銀山", 2007);\n        for (String name : registered.keySet()) {\n            System.out.println(label(name, registered.get(name)));\n        }\n    }\n}', ['石見銀山:2007', '2007:石見銀山', '石見銀山', 'Error'], '石見銀山:2007', 'keySet で名前を取り、get で年を取り出します。', 'name は石見銀山、registered.get(name) は2007なので、label が連結します。', 'HashMap のキーと値をメソッドへ渡す流れを追います。'),
      execute('final_execute_JP_java_03', 'classes', '瀬戸内海国立公園: final objects + ArrayList', '国立公園オブジェクトを条件で選んだ出力を選んでください。', 'import java.util.ArrayList;\nclass Park {\n    String name; int year;\n    Park(String name, int year) { this.name = name; this.year = year; }\n    String label() { return name + ":" + year; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Park> parks = new ArrayList<>();\n        parks.add(new Park("瀬戸内海国立公園", 1934));\n        parks.add(new Park("別の公園", 1950));\n        for (Park park : parks) {\n            if (park.year <= 1934) {\n                System.out.println(park.label());\n            }\n        }\n    }\n}', ['瀬戸内海国立公園:1934', '別の公園:1950', '瀬戸内海国立公園\n別の公園', 'Error'], '瀬戸内海国立公園:1934', 'year <= 1934 を満たすオブジェクトだけです。', '1934年の瀬戸内海国立公園だけが条件を満たし、label() が呼ばれます。', 'オブジェクト、ArrayList、条件、メソッド出力を組み合わせています。'),
    ],
  },
  debug: {
    id: 'final_debug_JP_java',
    type: 'DEBUG_FINAL',
    title: 'DEBUG FINAL: JAPAN JAVA',
    unlock: { requiresStageClear: true },
    questions: [
      debug('final_debug_JP_java_01', 'exceptions', '別府温泉: final numeric parsing', '℃ を含む文字列から数値を取り出す処理のバグを修正します。', 'public class Main {\n    public static void main(String[] args) {\n        String temperature = "42℃";\n        int value = Integer.parseInt(temperature);\n        System.out.println(value + 1);\n    }\n}', [
        debugStep(1, '原因を特定', 'NumberFormatException が起きます。', '原因はどれですか。', ['42℃ をそのまま parseInt している', 'int は使えない', 'println がない'], '42℃ をそのまま parseInt している', '数字以外の文字が含まれています。', '℃ があるため整数として解析できません。'),
        debugStep(2, '修正を選ぶ', '安全に数値化する修正はどれですか。', '正しい修正はどれですか。', ['temperature.replace("℃", "") を parseInt する', 'temperature + 1 にする', 'parseInt を消す'], 'temperature.replace("℃", "") を parseInt する', '単位記号を取り除いてから解析します。', '数字部分だけにして parseInt します。'),
        debugStep(3, '影響を説明', '修正後の動作を確認します。', '修正の影響はどれですか。', ['43 を出力できる', '42℃1 と出る', '常に0になる'], '43 を出力できる', '42 に 1 を足します。', '数値として加算できるため 43 になります。'),
      ], 'public class Main {\n    public static void main(String[] args) {\n        String temperature = "42℃";\n        int value = Integer.parseInt(temperature.replace("℃", ""));\n        System.out.println(value + 1);\n    }\n}', { cause: '単位記号つき文字列をそのまま parseInt している。', fix: 'replace で ℃ を除いてから parseInt する。', why: 'parseInt は数字だけの文字列を期待するため。', impact: '温度を数値として計算できる。' }),
      debug('final_debug_JP_java_02', 'collections', '相撲の番付: final missing HashMap key', '番付 HashMap にないキーを読んで null 関連の失敗が起きるコードを修正します。', 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ranks = new HashMap<>();\n        ranks.put("横綱", 1);\n        ranks.put("大関", 2);\n        ranks.put("関脇", 3);\n        ranks.put("小結", 4);\n        ranks.put("前頭", 5);\n        int rank = ranks.get("幕下");\n        System.out.println(rank);\n    }\n}', [
        debugStep(1, '原因を特定', '実行時に null 関連の失敗が起きます。', '原因はどれですか。', ['HashMap にないキー 幕下 を get している', 'HashMap が空', '前頭の値が大きい'], 'HashMap にないキー 幕下 を get している', 'put されているキー一覧と get のキーを比べます。', '幕下 は登録されていないため null になります。'),
        debugStep(2, '修正を選ぶ', '登録済みデータで前頭を読む修正はどれですか。', '正しい修正はどれですか。', ['ranks.get("前頭") にする', 'ranks.get(null) にする', 'ranks.clear() する'], 'ranks.get("前頭") にする', '問題で与えたキーの中から選びます。', '前頭 は put 済みなので値を取得できます。'),
        debugStep(3, '影響を説明', '修正後の出力を確認します。', '修正の影響はどれですか。', ['5 を出力できる', 'null を出力する', 'キーが増える'], '5 を出力できる', '前頭に対応する値を見ます。', 'HashMap から登録済みキーの値を安全に取り出せます。'),
      ], 'import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> ranks = new HashMap<>();\n        ranks.put("横綱", 1);\n        ranks.put("大関", 2);\n        ranks.put("関脇", 3);\n        ranks.put("小結", 4);\n        ranks.put("前頭", 5);\n        int rank = ranks.get("前頭");\n        System.out.println(rank);\n    }\n}', { cause: 'HashMap に存在しないキーを get している。', fix: '登録済みキーである 前頭 を使う。', why: '存在しないキーの get は null を返し、int への代入で失敗するため。', impact: '登録済みの番付値を安全に出力できる。' }),
      debug('final_debug_JP_java_03', 'inheritance', '落語: final override signature', '落語の演目クラスで @Override が失敗するメソッド署名を修正します。', 'class Performance {\n    String describe(String style) {\n        return "performance:" + style;\n    }\n}\nclass Rakugo extends Performance {\n    @Override\n    String describe() {\n        return "座って演じる話芸";\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Performance p = new Rakugo();\n        System.out.println(p.describe("落語"));\n    }\n}', [
        debugStep(1, '原因を特定', '@Override のコンパイルエラーになります。', '原因はどれですか。', ['子クラスの describe に String 引数がない', 'return が文字列ではない', 'class が足りない'], '子クラスの describe に String 引数がない', '親メソッドの引数と子メソッドの引数を比べます。', '引数リストが違うため同じメソッドを上書きしていません。'),
        debugStep(2, '修正を選ぶ', '正しくオーバーライドする修正はどれですか。', '正しい修正はどれですか。', ['String describe(String style) にする', 'String describe(int style) にする', '@Override を消すだけ'], 'String describe(String style) にする', '親と同じ署名にします。', '引数と戻り値の互換性をそろえます。'),
        debugStep(3, '影響を説明', '修正後の呼び出しを確認します。', '修正の影響はどれですか。', ['Rakugo 側の describe が呼ばれる', '親の describe しか呼べない', '引数が不要になる'], 'Rakugo 側の describe が呼ばれる', '実体は Rakugo です。', '正しくオーバーライドされ、動的ディスパッチで子クラス側が選ばれます。'),
      ], 'class Performance {\n    String describe(String style) {\n        return "performance:" + style;\n    }\n}\nclass Rakugo extends Performance {\n    @Override\n    String describe(String style) {\n        return style + ":座って演じる話芸";\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Performance p = new Rakugo();\n        System.out.println(p.describe("落語"));\n    }\n}', { cause: 'オーバーライドするメソッドの引数が親と一致していない。', fix: 'String describe(String style) にする。', why: 'Java のオーバーライドは署名の一致が必要だから。', impact: 'Rakugo 側の処理が正しく呼ばれる。' }),
    ],
  },
};

export const JP_JAVA_ASSIGNMENTS = [
  ...JP_JAVA_DECODE.map(q => meta(q.id, q.conceptId, 'complete-syntax')),
  ...JP_JAVA_EXECUTE.map(q => meta(q.id, q.conceptId, 'predict-output')),
  ...JP_JAVA_DEBUG.map(q => meta(q.id, q.conceptId, 'identify-defect')),
  ...JP_JAVA_FINAL_MISSIONS.decode.questions.map(q => meta(q.id, q.conceptId, 'complete-syntax')),
  ...JP_JAVA_FINAL_MISSIONS.execute.questions.map(q => meta(q.id, q.conceptId, 'predict-output')),
  ...JP_JAVA_FINAL_MISSIONS.debug.questions.map(q => meta(q.id, q.conceptId, 'identify-defect')),
];
