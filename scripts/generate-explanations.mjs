import { writeFileSync, readFileSync } from 'node:fs';

// Detects the underlying code "shape" around ___BLANK___ regardless of the
// (sometimes inconsistent) conceptId label, so the generated explanation
// always describes what the code actually does.
function detectShape(code, blank, language) {
  if (!code) return 'unknown';
  const idx = code.indexOf('___BLANK___');
  const before = code.slice(Math.max(0, idx - 60), idx);
  const after = code.slice(idx + '___BLANK___'.length, idx + '___BLANK___'.length + 30);

  if (/,\s*$/.test(before) && /=\s*$/.test(before) === false && /\w+\s*,\s*\w+(\s*,\s*\w+)*\s*=\s*$/.test(before)) {
    return 'tuple-unpack';
  }
  if (/\?\s*$/.test(before.trimEnd()) || /\?\s*$/.test(before)) return 'ternary';
  if (/\[\s*$/.test(before) && /^\s*\]/.test(after)) {
    return /^"/.test(blank) || /^'/.test(blank) ? 'dict-key' : 'list-index';
  }
  if (/\.\s*$/.test(before)) {
    return /\(/.test(blank || '') ? 'method-call' : 'property-access';
  }
  if (/\bin\s+\w+\s*$/.test(after.trim()) || / in /.test(code.slice(idx, idx + 40))) return 'membership';
  return 'unknown';
}

function extractContainerName(code, idx) {
  const before = code.slice(0, idx);
  const m = before.match(/(\w+)\s*\[\s*$/) || before.match(/(\w+)\s*\.\s*$/);
  return m ? m[1] : 'データ';
}

function buildFillBlankExplanation(entry) {
  const { code, blank, languageId } = entry;
  const idx = code.indexOf('___BLANK___');
  const shape = detectShape(code, blank, languageId);
  const container = extractContainerName(code, idx);
  const isPy = languageId === 'python';

  switch (shape) {
    case 'dict-key': {
      const key = (blank || '').replace(/^["']|["']$/g, '');
      return `この問題は${isPy ? '辞書（dict）' : 'オブジェクト'}のキーアクセスを扱う問題です。${container} という${isPy ? '辞書' : 'オブジェクト'}から「${key}」というキーを指定して値を取り出し、変数に代入しています。キー名を1文字でも間違えると、Pythonでは${isPy ? 'KeyError' : 'undefined'}になったり意図しない値が表示されたりするため、コード中に書かれているキー名を正確に読み取ることが重要です。`;
    }
    case 'list-index': {
      return `この問題は${isPy ? 'リスト（list）' : '配列（array）'}の添字（インデックス）アクセスを扱う問題です。${container} という${isPy ? 'リスト' : '配列'}の${blank}番目（0から数え始めるインデックス）の要素を取り出しています。${isPy ? 'リスト' : '配列'}は値の並び順をそのまま保持するため、欲しい値が何番目にあるかを正確に数える必要があります。`;
    }
    case 'tuple-unpack': {
      return `この問題はタプルの分解代入（unpacking）を扱う問題です。${blank} は複数の要素を持つタプルで、左辺に変数を並べることで、対応する位置の値が順番に代入されます。辞書のキーアクセスとは異なり、名前ではなく「並んでいる位置」で値が対応づけられる点がこの構文の特徴です。`;
    }
    case 'ternary': {
      return `この問題は条件演算子（三項演算子）を使って値を選ぶ問題です。条件式が真のときに ${blank} が返され、変数に代入されます。if文を1行で書けるこの構文では、条件・真の場合の値・偽の場合の値の3つを正しい順序で対応させることがポイントです。`;
    }
    case 'method-call': {
      return `この問題は文字列のメソッド呼び出しを使う問題です。${container} という文字列に対して ${blank} を呼び出し、その結果を出力しています。文字列メソッドは元の文字列を変更せず、新しい値（この場合は真偽値や別の文字列）を返す点を理解することが重要です。`;
    }
    case 'property-access': {
      return `この問題は${isPy ? '辞書' : 'オブジェクト'}のプロパティ（属性）アクセスを扱う問題です。${container} という${isPy ? '辞書' : 'オブジェクト'}が持つ「${blank}」という名前のプロパティを取り出しています。ドット記法でアクセスする場合、プロパティ名はクォートを付けずにそのまま書く点が、文字列キーでの角かっこアクセスとの違いです。`;
    }
    case 'membership': {
      return `この問題は「in」演算子によるメンバーシップ判定（値がコレクションに含まれているかどうかの判定）を扱う問題です。${blank} は、指定した値がリストの要素として存在するかどうかを調べ、真偽値を返します。値が完全に一致する要素があるかどうかを確認する処理であり、部分一致では判定されない点に注意が必要です。`;
    }
    default:
      return null; // fall through to keep existing text if we can't confidently classify
  }
}

function buildDebugExplanation(entry) {
  const { debugExplanation } = entry;
  if (!debugExplanation) return null;
  const { cause, why } = debugExplanation;
  if (!cause) return null;
  return `このDEBUG問題の本質的な原因は「${cause}」という点です。${why ? why : '仕様に合わない比較や境界条件のまま処理を進めると、特定の入力でだけ結果が狂ってしまいます。'}修正前のコードと修正後のコードを見比べ、どの行の、どの条件が、なぜ正しい結果につながるのかを順番に確認することが、このタイプのデバッグ問題で身につけたい考え方です。`;
}

function buildOutputPredictExplanation(entry) {
  const { code, languageId } = entry;
  if (!code) return null;
  // Detect filter threshold and country/key check used in the snippet.
  const scoreMatch = code.match(/score["\']?\]?\s*[><=!]+\s*(\d+)/) || code.match(/>=\s*(\d+)/);
  const countryMatch = code.match(/country["\']?\]?\s*[=!]=+\s*["'](\w+)["']/);
  const country = countryMatch ? countryMatch[1] : null;
  const threshold = scoreMatch ? scoreMatch[1] : null;
  const isJsArrayMethods = /\.filter\(|\.map\(/.test(code);

  let detail;
  if (isJsArrayMethods) {
    detail = `filter で条件に合う要素だけを残し、map で必要な値だけを取り出すという2段階の処理を順番に追跡します。`;
  } else if (/for .*:\s*$/m.test(code) || /for \(/.test(code)) {
    detail = `for文で各要素を1つずつ確認し、if文の条件に合う場合だけ結果に追加していく処理を、要素ごとに手を動かして追跡します。`;
  } else {
    detail = `各行の処理を順番に実行し、変数の値がどのように変化していくかを追跡します。`;
  }
  const condDetail = (country && threshold)
    ? `この問題では「country が "${country}" と一致する」かつ「score が ${threshold} 以上」という2つの条件を両方満たす要素だけが選ばれる点に注目してください。`
    : '';
  return `この問題はコードの実行結果を予測する問題です。${detail}${condDetail}1行ずつ処理を追って、最終的に何が出力されるかを確認することが、このタイプの問題で身につけたい力です。`;
}

// Hand-written explanations for the compound-expression blanks that the
// generic shape detector can't safely parse (method chains, destructuring,
// spread syntax, etc). Keyed by question id; same id can appear in both
// challenges.js and the js_challenges.js it re-exports.
const MANUAL_OVERRIDES = {
  jp_py_d03: 'この問題はタプルの分解代入（unpacking）を扱う問題です。laureate は3要素のタプルで、name, year, field という3つの変数に順番に代入されます。辞書のキーアクセスとは異なり、名前ではなく要素の並び順（位置）によって値が対応づけられる点がこの構文の特徴です。',
  us_py_2: 'この問題は組み込み関数 len() でリストの要素数を数え、それを使って計算する問題です。len(items) はリスト items に含まれる要素の個数を返す整数値で、これに50を掛けることで合計を求めています。',
  us_py_4: 'この問題は「in」演算子によるメンバーシップ判定を扱う問題です。"bald eagle" in symbols は、指定した文字列がリスト symbols の要素として存在するかどうかを調べ、真偽値を返します。',
  us_py_5: 'この問題はタプルの分解代入を扱う問題です。yellowstone という3要素のタプルを、name, year, note という3つの変数に一度に分解して代入しています。要素の数と変数の数が一致している必要がある点に注意してください。',
  us_py_7: 'この問題はリストの添字（インデックス）アクセスを扱う問題です。crew[0] は、リスト crew の0番目（最初）の要素を取り出しています。',
  us_py_8: 'この問題は辞書のキーアクセスを扱う問題です。record["work"] は、辞書 record から「work」というキーに対応する値を取り出しています。',
  us_py_9: 'この問題は比較演算子を使って条件を判定する問題です。>= は左の値が右の値以上であるかどうかを判定し、真偽値を返します。比較演算子の種類（>、<、>=、<=、==、!=）によって判定の境界条件が変わるため、どの演算子が適切かを正確に選ぶ必要があります。',
  us_js_3: 'この問題は厳密等価演算子（===）を使って値を比較する問題です。partner === "France" は、変数 partner の値が文字列 "France" と完全に一致するかどうかを判定し、真偽値を返します。',
  us_js_6: 'この問題は比較演算子を使って条件を判定する問題です。>= は左の値が右の値以上であるかを判定し、真偽値を返します。比較演算子の種類によって判定の境界条件が変わるため、どの演算子が適切かを正確に選ぶ必要があります。',
  us_js_7: 'この問題はテンプレートリテラルを使った文字列の組み立てを扱う問題です。バッククォートで文字列を囲み、${...}の中に変数を書くことで、変数の値を直接文字列に埋め込むことができます。',
  us_js_8: 'この問題はオブジェクトの分割代入（destructuring）を扱う問題です。{ author } という書き方は、writer オブジェクトから author というプロパティを取り出し、同じ名前の変数に代入します。',
  us_js_9: 'この問題はスプレッド構文と Math.max を組み合わせて配列内の最大値を求める問題です。...peaks は配列 peaks の要素を個別の引数として展開し、Math.max にまとめて渡すことで、配列の中の最大値を求めています。',
  us_js_10: 'この問題は Object.values とインデックスアクセスを組み合わせる問題です。Object.values(bridge) は bridge オブジェクトの値だけを配列として取り出し、[1] でその1番目（インデックス1）の要素を取り出しています。',
  final_decode_US_python_02: 'この問題は sorted関数とラムダ式、負のインデックスを組み合わせた問題です。sorted(records, key=lambda item: item["year"]) は records を year の値で並べ替えた新しいリストを作り、[-1] でその最後の要素（最も year が大きい要素）を取り出し、["name"] でその名前を取り出しています。',
  final_decode_US_python_03: 'この問題は「in」演算子によるメンバーシップ判定を扱う問題です。"E Pluribus Unum" in aliases は、指定した文字列がリスト aliases の要素として存在するかどうかを調べ、真偽値を返します。',
  final_decode_US_javascript_01: 'この問題は配列の find メソッドで条件に合う要素を1つ探し、そのプロパティを取り出す問題です。winners.find(item => item.prize === "Peace") は条件に一致する最初の要素を返し、winner.name でその要素の name プロパティを取り出しています。',
  final_decode_US_javascript_02: 'この問題は Set オブジェクトの has メソッドと論理演算子 && を組み合わせた問題です。has メソッドはその値が Set に含まれているかどうかを真偽値で返し、&& は両方の条件が真である場合にだけ true を返します。',
  final_decode_US_javascript_03: 'この問題は配列の map メソッドと join メソッドを組み合わせた問題です。map で各要素から president プロパティだけを取り出した新しい配列を作り、join(" / ") でそれらを区切り文字でつないだ1つの文字列にしています。',
};

async function collect() {
  const entries = [];

  async function collectFlat(file, exportName, shape) {
    const m = await import(file);
    const data = m[exportName];
    function visit(q) {
      if (!q.programmingExplanation) return;
      entries.push({ file, raw: q });
    }
    if (shape === 'country-lang') for (const c of Object.values(data)) for (const l of Object.values(c)) l.forEach(visit);
    else if (shape === 'country') for (const l of Object.values(data)) l.forEach(visit);
    else if (shape === 'final') {
      function walk(o) {
        if (Array.isArray(o)) return o.forEach(walk);
        if (o && typeof o === 'object') {
          if (o.questionType) visit(o);
          for (const v of Object.values(o)) if (v && typeof v === 'object') walk(v);
        }
      }
      walk(data);
    }
  }

  await collectFlat('../src/data/challenges.js', 'CHALLENGES', 'country-lang');
  await collectFlat('../src/data/js_challenges.js', 'JS_CHALLENGES', 'country');
  await collectFlat('../src/data/debug_challenges.js', 'DEBUG_CHALLENGES', 'country-lang');
  await collectFlat('../src/data/execute_challenges.js', 'EXECUTE_CHALLENGES', 'country-lang');
  await collectFlat('../src/data/final_missions.js', 'FINAL_MISSIONS', 'final');
  return entries;
}

const entries = await collect();
console.log('total entries with programmingExplanation:', entries.length);

const results = [];
const unclassified = [];

for (const { file, raw } of entries) {
  let text = MANUAL_OVERRIDES[raw.id] || null;
  if (!text && raw.questionType === 'fill-blank' && raw.code) {
    text = buildFillBlankExplanation({ code: raw.code, blank: raw.blank, languageId: raw.languageId });
  } else if (raw.questionType === 'debug-step') {
    text = buildDebugExplanation(raw);
  } else if (raw.questionType === 'output-predict') {
    text = buildOutputPredictExplanation({ code: raw.code, languageId: raw.languageId });
  }
  if (text) {
    results.push({ file, id: raw.id, old: raw.programmingExplanation, new: text });
  } else {
    unclassified.push({ file, id: raw.id, questionType: raw.questionType, conceptId: raw.conceptId });
  }
}

console.log('classified:', results.length, 'unclassified:', unclassified.length);
writeFileSync('C:/Users/yuto1/AppData/Local/Temp/pe-results.json', JSON.stringify(results, null, 2), 'utf8');
writeFileSync('C:/Users/yuto1/AppData/Local/Temp/pe-unclassified.json', JSON.stringify(unclassified, null, 2), 'utf8');
console.log(JSON.stringify(results.slice(0, 8), null, 2));
if (unclassified.length) console.log('UNCLASSIFIED:', JSON.stringify(unclassified, null, 2));
