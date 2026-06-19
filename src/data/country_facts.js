export const FACT_STATUS = Object.freeze({
  VERIFIED: 'verified',
  TRADITIONAL: 'traditional',
  DISPUTED: 'disputed',
  AVOID: 'avoid',
});

export const COUNTRY_FACTS = [
  {
    factId: "fact_jp_py_d01",
    countryId: "JP",
    category: "politics",
    entityKeys: [
      "jp:jp_py_d01"
    ],
    aliases: [
      "Emperor constitutional role",
      "jp_py_d01"
    ],
    statement: "Emperor constitutional role をコード内データとして使い、dict-access を確認します。",
    detail: "Emperor constitutional role を dict-access のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d02",
    countryId: "JP",
    category: "politics",
    entityKeys: [
      "jp:jp_py_d02"
    ],
    aliases: [
      "National Diet two chambers",
      "jp_py_d02"
    ],
    statement: "National Diet two chambers をコード内データとして使い、list-len を確認します。",
    detail: "National Diet two chambers を list-len のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d03",
    countryId: "JP",
    category: "nobel",
    entityKeys: [
      "jp:jp_py_d03"
    ],
    aliases: [
      "Hideki Yukawa Nobel Prize",
      "jp_py_d03"
    ],
    statement: "Hideki Yukawa Nobel Prize をコード内データとして使い、tuple-unpack を確認します。",
    detail: "Hideki Yukawa Nobel Prize を tuple-unpack のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.nobelprize.org/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d04",
    countryId: "JP",
    category: "national-symbol",
    entityKeys: [
      "jp:jp_py_d04"
    ],
    aliases: [
      "Nisshoki/Hinomaru",
      "jp_py_d04"
    ],
    statement: "Nisshoki/Hinomaru をコード内データとして使い、string-equality を確認します。",
    detail: "Nisshoki/Hinomaru を string-equality のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d05",
    countryId: "JP",
    category: "geography",
    entityKeys: [
      "jp:jp_py_d05"
    ],
    aliases: [
      "47 prefectures",
      "jp_py_d05"
    ],
    statement: "47 prefectures をコード内データとして使い、numeric-comparison を確認します。",
    detail: "47 prefectures を numeric-comparison のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d06",
    countryId: "JP",
    category: "national-symbol",
    entityKeys: [
      "jp:jp_py_d06"
    ],
    aliases: [
      "one-yen coin",
      "jp_py_d06"
    ],
    statement: "one-yen coin をコード内データとして使い、numeric-type を確認します。",
    detail: "one-yen coin を numeric-type のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d07",
    countryId: "JP",
    category: "industry-transport",
    entityKeys: [
      "jp:jp_py_d07"
    ],
    aliases: [
      "Tokaido Shinkansen 1964",
      "jp_py_d07"
    ],
    statement: "Tokaido Shinkansen 1964 をコード内データとして使い、f-string を確認します。",
    detail: "Tokaido Shinkansen 1964 を f-string のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.mlit.go.jp/en/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d08",
    countryId: "JP",
    category: "invention-science",
    entityKeys: [
      "jp:jp_py_d08"
    ],
    aliases: [
      "QR Code",
      "jp_py_d08"
    ],
    statement: "QR Code をコード内データとして使い、string-index-or-slice を確認します。",
    detail: "QR Code を string-index-or-slice のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.qrcode.com/en/history/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d09",
    countryId: "JP",
    category: "world-heritage",
    entityKeys: [
      "jp:jp_py_d09"
    ],
    aliases: [
      "Horyu-ji World Heritage",
      "jp_py_d09"
    ],
    statement: "Horyu-ji World Heritage をコード内データとして使い、list-index を確認します。",
    detail: "Horyu-ji World Heritage を list-index のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_d10",
    countryId: "JP",
    category: "traditional-culture",
    entityKeys: [
      "jp:jp_py_d10"
    ],
    aliases: [
      "sakura as cultural symbol, not statutory national flower",
      "jp_py_d10"
    ],
    statement: "sakura as cultural symbol, not statutory national flower（伝承・文化的関連として扱い、断定しません） をコード内データとして使い、membership を確認します。",
    detail: "sakura as cultural symbol, not statutory national flower を membership のコード課題で扱う。",
    factStatus: "traditional",
    sourceRefs: [],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e01",
    countryId: "JP",
    category: "world-heritage",
    entityKeys: [
      "jp:jp_py_e01"
    ],
    aliases: [
      "Yakushima World Heritage criteria/context",
      "jp_py_e01"
    ],
    statement: "Yakushima World Heritage criteria/context をコード内データとして使い、nested-filter を確認します。",
    detail: "Yakushima World Heritage criteria/context を nested-filter のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e02",
    countryId: "JP",
    category: "geography-nature",
    entityKeys: [
      "jp:jp_py_e02"
    ],
    aliases: [
      "Shirakami-Sanchi beech forest",
      "jp_py_e02"
    ],
    statement: "Shirakami-Sanchi beech forest をコード内データとして使い、list-comprehension を確認します。",
    detail: "Shirakami-Sanchi beech forest を list-comprehension のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e03",
    countryId: "JP",
    category: "architecture",
    entityKeys: [
      "jp:jp_py_e03"
    ],
    aliases: [
      "National Diet Building",
      "jp_py_e03"
    ],
    statement: "National Diet Building をコード内データとして使い、aggregation-duration を確認します。",
    detail: "National Diet Building を aggregation-duration のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e04",
    countryId: "JP",
    category: "invention-science",
    entityKeys: [
      "jp:jp_py_e04"
    ],
    aliases: [
      "Hayabusa and Itokawa",
      "jp_py_e04"
    ],
    statement: "Hayabusa and Itokawa をコード内データとして使い、code-ordering を確認します。",
    detail: "Hayabusa and Itokawa を code-ordering のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://global.jaxa.jp/projects/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e05",
    countryId: "JP",
    category: "invention-science",
    entityKeys: [
      "jp:jp_py_e05"
    ],
    aliases: [
      "Hayabusa2 and Ryugu",
      "jp_py_e05"
    ],
    statement: "Hayabusa2 and Ryugu をコード内データとして使い、nested-dict-tracing を確認します。",
    detail: "Hayabusa2 and Ryugu を nested-dict-tracing のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://global.jaxa.jp/projects/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e06",
    countryId: "JP",
    category: "traditional-culture",
    entityKeys: [
      "jp:jp_py_e06"
    ],
    aliases: [
      "Noh role structure",
      "jp_py_e06"
    ],
    statement: "Noh role structure をコード内データとして使い、set-deduplication を確認します。",
    detail: "Noh role structure を set-deduplication のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_e07",
    countryId: "JP",
    category: "literature-person",
    entityKeys: [
      "jp:jp_py_e07"
    ],
    aliases: [
      "Matsuo Basho and Oku no Hosomichi",
      "jp_py_e07"
    ],
    statement: "Matsuo Basho and Oku no Hosomichi をコード内データとして使い、enumerate-route-processing を確認します。",
    detail: "Matsuo Basho and Oku no Hosomichi を enumerate-route-processing のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_b01",
    countryId: "JP",
    category: "language-writing",
    entityKeys: [
      "jp:jp_py_b01"
    ],
    aliases: [
      "kanji-hiragana-katakana search",
      "jp_py_b01"
    ],
    statement: "kanji-hiragana-katakana search をコード内データとして使い、unicode-normalization を確認します。",
    detail: "kanji-hiragana-katakana search を unicode-normalization のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_b02",
    countryId: "JP",
    category: "history",
    entityKeys: [
      "jp:jp_py_b02"
    ],
    aliases: [
      "Japanese era conversion",
      "jp_py_b02"
    ],
    statement: "Japanese era conversion をコード内データとして使い、boundary-condition を確認します。",
    detail: "Japanese era conversion を boundary-condition のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_b03",
    countryId: "JP",
    category: "administration",
    entityKeys: [
      "jp:jp_py_b03"
    ],
    aliases: [
      "Japanese address order",
      "jp_py_b03"
    ],
    statement: "Japanese address order をコード内データとして使い、parsing-order を確認します。",
    detail: "Japanese address order を parsing-order のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_b04",
    countryId: "JP",
    category: "industry-finance",
    entityKeys: [
      "jp:jp_py_b04"
    ],
    aliases: [
      "Japanese yen display",
      "jp_py_b04"
    ],
    statement: "Japanese yen display をコード内データとして使い、number-formatting を確認します。",
    detail: "Japanese yen display を number-formatting のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_py_b05",
    countryId: "JP",
    category: "transport-language",
    entityKeys: [
      "jp:jp_py_b05"
    ],
    aliases: [
      "station names in Japanese and romaji",
      "jp_py_b05"
    ],
    statement: "station names in Japanese and romaji をコード内データとして使い、normalized-key-lookup を確認します。",
    detail: "station names in Japanese and romaji を normalized-key-lookup のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.mlit.go.jp/en/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_python_01",
    countryId: "JP",
    category: "politics-history",
    entityKeys: [
      "jp:final_decode_JP_python_01"
    ],
    aliases: [
      "Meiji Constitution promulgation context",
      "final_decode_JP_python_01"
    ],
    statement: "Meiji Constitution promulgation context をコード内データとして使い、dict-plus-comparison を確認します。",
    detail: "Meiji Constitution promulgation context を dict-plus-comparison のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_python_02",
    countryId: "JP",
    category: "nobel-literature",
    entityKeys: [
      "jp:final_decode_JP_python_02"
    ],
    aliases: [
      "Kenzaburo Oe Nobel Literature",
      "final_decode_JP_python_02"
    ],
    statement: "Kenzaburo Oe Nobel Literature をコード内データとして使い、list-plus-sort-key を確認します。",
    detail: "Kenzaburo Oe Nobel Literature を list-plus-sort-key のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.nobelprize.org/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_python_03",
    countryId: "JP",
    category: "architecture-religion",
    entityKeys: [
      "jp:final_decode_JP_python_03"
    ],
    aliases: [
      "Kinkaku-ji and Rokuon-ji naming",
      "final_decode_JP_python_03"
    ],
    statement: "Kinkaku-ji and Rokuon-ji naming をコード内データとして使い、alias-resolution-plus-membership を確認します。",
    detail: "Kinkaku-ji and Rokuon-ji naming を alias-resolution-plus-membership のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_python_01",
    countryId: "JP",
    category: "world-heritage-religion",
    entityKeys: [
      "jp:final_execute_JP_python_01"
    ],
    aliases: [
      "Sacred Sites and Pilgrimage Routes in Kii Mountain Range",
      "final_execute_JP_python_01"
    ],
    statement: "Sacred Sites and Pilgrimage Routes in Kii Mountain Range をコード内データとして使い、nested-filter-plus-sort を確認します。",
    detail: "Sacred Sites and Pilgrimage Routes in Kii Mountain Range を nested-filter-plus-sort のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_python_02",
    countryId: "JP",
    category: "architecture-industry",
    entityKeys: [
      "jp:final_execute_JP_python_02"
    ],
    aliases: [
      "Kurobe Dam",
      "final_execute_JP_python_02"
    ],
    statement: "Kurobe Dam をコード内データとして使い、multi-step-numeric-calculation を確認します。",
    detail: "Kurobe Dam を multi-step-numeric-calculation のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_python_03",
    countryId: "JP",
    category: "world-heritage-architecture",
    entityKeys: [
      "jp:final_execute_JP_python_03"
    ],
    aliases: [
      "Gokayama gassho-zukuri villages",
      "final_execute_JP_python_03"
    ],
    statement: "Gokayama gassho-zukuri villages をコード内データとして使い、group-count-summary を確認します。",
    detail: "Gokayama gassho-zukuri villages を group-count-summary のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_python_01",
    countryId: "JP",
    category: "geography-time",
    entityKeys: [
      "jp:final_debug_JP_python_01"
    ],
    aliases: [
      "Japan Standard Time UTC+9 date rollover",
      "final_debug_JP_python_01"
    ],
    statement: "Japan Standard Time UTC+9 date rollover をコード内データとして使い、timezone-boundary を確認します。",
    detail: "Japan Standard Time UTC+9 date rollover を timezone-boundary のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_python_02",
    countryId: "JP",
    category: "administration",
    entityKeys: [
      "jp:final_debug_JP_python_02"
    ],
    aliases: [
      "Japanese postal code format",
      "final_debug_JP_python_02"
    ],
    statement: "Japanese postal code format をコード内データとして使い、regex-validation を確認します。",
    detail: "Japanese postal code format を regex-validation のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.post.japanpost.jp/zipcode/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_python_03",
    countryId: "JP",
    category: "administration-standards",
    entityKeys: [
      "jp:final_debug_JP_python_03"
    ],
    aliases: [
      "JIS prefecture codes",
      "final_debug_JP_python_03"
    ],
    statement: "JIS prefecture codes をコード内データとして使い、zero-padding-key-mismatch を確認します。",
    detail: "JIS prefecture codes を zero-padding-key-mismatch のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.soumu.go.jp/denshijiti/code.html"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "python"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d01",
    countryId: "JP",
    category: "national-symbol",
    entityKeys: [
      "jp:jp_js_d01"
    ],
    aliases: [
      "Kimigayo national anthem",
      "jp_js_d01"
    ],
    statement: "Kimigayo national anthem をコード内データとして使い、object-property を確認します。",
    detail: "Kimigayo national anthem を object-property のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d02",
    countryId: "JP",
    category: "nobel-invention",
    entityKeys: [
      "jp:jp_js_d02"
    ],
    aliases: [
      "blue LED Nobel laureates",
      "jp_js_d02"
    ],
    statement: "blue LED Nobel laureates をコード内データとして使い、array-length を確認します。",
    detail: "blue LED Nobel laureates を array-length のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.nobelprize.org/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d03",
    countryId: "JP",
    category: "nobel-invention",
    entityKeys: [
      "jp:jp_js_d03"
    ],
    aliases: [
      "Akira Yoshino and lithium-ion battery",
      "jp_js_d03"
    ],
    statement: "Akira Yoshino and lithium-ion battery をコード内データとして使い、const-template を確認します。",
    detail: "Akira Yoshino and lithium-ion battery を const-template のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.nobelprize.org/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d04",
    countryId: "JP",
    category: "nobel-science",
    entityKeys: [
      "jp:jp_js_d04"
    ],
    aliases: [
      "Shinya Yamanaka and iPS cells",
      "jp_js_d04"
    ],
    statement: "Shinya Yamanaka and iPS cells をコード内データとして使い、object-destructuring を確認します。",
    detail: "Shinya Yamanaka and iPS cells を object-destructuring のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.nobelprize.org/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d05",
    countryId: "JP",
    category: "world-heritage-architecture",
    entityKeys: [
      "jp:jp_js_d05"
    ],
    aliases: [
      "Himeji Castle and Shirasagi-jo nickname",
      "jp_js_d05"
    ],
    statement: "Himeji Castle and Shirasagi-jo nickname をコード内データとして使い、strict-equality を確認します。",
    detail: "Himeji Castle and Shirasagi-jo nickname を strict-equality のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d06",
    countryId: "JP",
    category: "geography-nature",
    entityKeys: [
      "jp:jp_js_d06"
    ],
    aliases: [
      "Mount Fuji elevation/context",
      "jp_js_d06"
    ],
    statement: "Mount Fuji elevation/context をコード内データとして使い、numeric-comparison を確認します。",
    detail: "Mount Fuji elevation/context を numeric-comparison のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d07",
    countryId: "JP",
    category: "international-contact",
    entityKeys: [
      "jp:jp_js_d07"
    ],
    aliases: [
      "Francis Xavier arrival in Japan",
      "jp_js_d07"
    ],
    statement: "Francis Xavier arrival in Japan をコード内データとして使い、conditional を確認します。",
    detail: "Francis Xavier arrival in Japan を conditional のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d08",
    countryId: "JP",
    category: "international-contact",
    entityKeys: [
      "jp:jp_js_d08"
    ],
    aliases: [
      "William Adams arrival in Japan",
      "jp_js_d08"
    ],
    statement: "William Adams arrival in Japan をコード内データとして使い、object-values を確認します。",
    detail: "William Adams arrival in Japan を object-values のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d09",
    countryId: "JP",
    category: "literature-person",
    entityKeys: [
      "jp:jp_js_d09"
    ],
    aliases: [
      "Murasaki Shikibu and The Tale of Genji",
      "jp_js_d09"
    ],
    statement: "Murasaki Shikibu and The Tale of Genji をコード内データとして使い、string-concatenation を確認します。",
    detail: "Murasaki Shikibu and The Tale of Genji を string-concatenation のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_d10",
    countryId: "JP",
    category: "traditional-culture",
    entityKeys: [
      "jp:jp_js_d10"
    ],
    aliases: [
      "Kabuki theatre",
      "jp_js_d10"
    ],
    statement: "Kabuki theatre をコード内データとして使い、includes を確認します。",
    detail: "Kabuki theatre を includes のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e01",
    countryId: "JP",
    category: "international-contact",
    entityKeys: [
      "jp:jp_js_e01"
    ],
    aliases: [
      "firearms arrival at Tanegashima",
      "jp_js_e01"
    ],
    statement: "firearms arrival at Tanegashima をコード内データとして使い、array-sort を確認します。",
    detail: "firearms arrival at Tanegashima を array-sort のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e02",
    countryId: "JP",
    category: "international-contact",
    entityKeys: [
      "jp:jp_js_e02"
    ],
    aliases: [
      "Perry expedition and opening sequence",
      "jp_js_e02"
    ],
    statement: "Perry expedition and opening sequence をコード内データとして使い、timeline-reduce を確認します。",
    detail: "Perry expedition and opening sequence を timeline-reduce のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e03",
    countryId: "JP",
    category: "traditional-culture",
    entityKeys: [
      "jp:jp_js_e03"
    ],
    aliases: [
      "Japanese washi traditions",
      "jp_js_e03"
    ],
    statement: "Japanese washi traditions をコード内データとして使い、filter を確認します。",
    detail: "Japanese washi traditions を filter のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e04",
    countryId: "JP",
    category: "religion-architecture",
    entityKeys: [
      "jp:jp_js_e04"
    ],
    aliases: [
      "Ise Jingu Shikinen Sengu",
      "jp_js_e04"
    ],
    statement: "Ise Jingu Shikinen Sengu をコード内データとして使い、modulo-cycle を確認します。",
    detail: "Ise Jingu Shikinen Sengu を modulo-cycle のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.isejingu.or.jp/en/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e05",
    countryId: "JP",
    category: "architecture",
    entityKeys: [
      "jp:jp_js_e05"
    ],
    aliases: [
      "Tokyo Skytree",
      "jp_js_e05"
    ],
    statement: "Tokyo Skytree をコード内データとして使い、map-unit-conversion を確認します。",
    detail: "Tokyo Skytree を map-unit-conversion のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.tokyo-skytree.jp/en/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e06",
    countryId: "JP",
    category: "invention-science",
    entityKeys: [
      "jp:jp_js_e06"
    ],
    aliases: [
      "Yagi-Uda antenna",
      "jp_js_e06"
    ],
    statement: "Yagi-Uda antenna をコード内データとして使い、reduce-aggregation を確認します。",
    detail: "Yagi-Uda antenna を reduce-aggregation のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_e07",
    countryId: "JP",
    category: "industry-transport",
    entityKeys: [
      "jp:jp_js_e07"
    ],
    aliases: [
      "Seikan Tunnel",
      "jp_js_e07"
    ],
    statement: "Seikan Tunnel をコード内データとして使い、route-object-tracing を確認します。",
    detail: "Seikan Tunnel を route-object-tracing のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.mlit.go.jp/en/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_b01",
    countryId: "JP",
    category: "traditional-literature",
    entityKeys: [
      "jp:jp_js_b01"
    ],
    aliases: [
      "Ono no Komachi and traditional three beauties claim",
      "jp_js_b01"
    ],
    statement: "Ono no Komachi and traditional three beauties claim（伝承・文化的関連として扱い、断定しません） をコード内データとして使い、fact-status-modeling を確認します。",
    detail: "Ono no Komachi and traditional three beauties claim を fact-status-modeling のコード課題で扱う。",
    factStatus: "traditional",
    sourceRefs: [],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_b02",
    countryId: "JP",
    category: "language-culture",
    entityKeys: [
      "jp:jp_js_b02"
    ],
    aliases: [
      "Japanese personal-name order",
      "jp_js_b02"
    ],
    statement: "Japanese personal-name order をコード内データとして使い、display-order を確認します。",
    detail: "Japanese personal-name order を display-order のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_b03",
    countryId: "JP",
    category: "language-writing",
    entityKeys: [
      "jp:jp_js_b03"
    ],
    aliases: [
      "full-width and half-width characters",
      "jp_js_b03"
    ],
    statement: "full-width and half-width characters をコード内データとして使い、input-normalization を確認します。",
    detail: "full-width and half-width characters を input-normalization のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_b04",
    countryId: "JP",
    category: "language-writing",
    entityKeys: [
      "jp:jp_js_b04"
    ],
    aliases: [
      "gojuon ordering",
      "jp_js_b04"
    ],
    statement: "gojuon ordering をコード内データとして使い、Intl-Collator を確認します。",
    detail: "gojuon ordering を Intl-Collator のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_jp_js_b05",
    countryId: "JP",
    category: "administration",
    entityKeys: [
      "jp:jp_js_b05"
    ],
    aliases: [
      "to-do-fu-ken suffix handling",
      "jp_js_b05"
    ],
    statement: "to-do-fu-ken suffix handling をコード内データとして使い、suffix-parsing を確認します。",
    detail: "to-do-fu-ken suffix handling を suffix-parsing のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_javascript_01",
    countryId: "JP",
    category: "literature-art",
    entityKeys: [
      "jp:final_decode_JP_javascript_01"
    ],
    aliases: [
      "Hokusai and Thirty-six Views of Mount Fuji",
      "final_decode_JP_javascript_01"
    ],
    statement: "Hokusai and Thirty-six Views of Mount Fuji をコード内データとして使い、array-method-plus-template を確認します。",
    detail: "Hokusai and Thirty-six Views of Mount Fuji を array-method-plus-template のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_javascript_02",
    countryId: "JP",
    category: "science",
    entityKeys: [
      "jp:final_decode_JP_javascript_02"
    ],
    aliases: [
      "Super-Kamiokande",
      "final_decode_JP_javascript_02"
    ],
    statement: "Super-Kamiokande をコード内データとして使い、nested-object-plus-boolean を確認します。",
    detail: "Super-Kamiokande を nested-object-plus-boolean のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www-sk.icrr.u-tokyo.ac.jp/en/sk/"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_decode_JP_javascript_03",
    countryId: "JP",
    category: "world-heritage-religion",
    entityKeys: [
      "jp:final_decode_JP_javascript_03"
    ],
    aliases: [
      "Itsukushima Shrine",
      "final_decode_JP_javascript_03"
    ],
    statement: "Itsukushima Shrine をコード内データとして使い、set-plus-membership を確認します。",
    detail: "Itsukushima Shrine を set-plus-membership のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://whc.unesco.org/en/statesparties/jp"
    ],
    allowedWorlds: [
      "decode"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_javascript_01",
    countryId: "JP",
    category: "religion-geography",
    entityKeys: [
      "jp:final_execute_JP_javascript_01"
    ],
    aliases: [
      "Shikoku 88-temple pilgrimage",
      "final_execute_JP_javascript_01"
    ],
    statement: "Shikoku 88-temple pilgrimage をコード内データとして使い、filter-reduce-route を確認します。",
    detail: "Shikoku 88-temple pilgrimage を filter-reduce-route のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_javascript_02",
    countryId: "JP",
    category: "geography-nature",
    entityKeys: [
      "jp:final_execute_JP_javascript_02"
    ],
    aliases: [
      "Sanriku ria coast",
      "final_execute_JP_javascript_02"
    ],
    statement: "Sanriku ria coast をコード内データとして使い、grouping-plus-summary を確認します。",
    detail: "Sanriku ria coast を grouping-plus-summary のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_execute_JP_javascript_03",
    countryId: "JP",
    category: "industry",
    entityKeys: [
      "jp:final_execute_JP_javascript_03"
    ],
    aliases: [
      "Toyota Production System kanban",
      "final_execute_JP_javascript_03"
    ],
    statement: "Toyota Production System kanban をコード内データとして使い、queue-simulation を確認します。",
    detail: "Toyota Production System kanban を queue-simulation のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://global.toyota/en/company/vision-and-philosophy/production-system/"
    ],
    allowedWorlds: [
      "execute"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_javascript_01",
    countryId: "JP",
    category: "administration",
    entityKeys: [
      "jp:final_debug_JP_javascript_01"
    ],
    aliases: [
      "Japanese telephone-number formatting",
      "final_debug_JP_javascript_01"
    ],
    statement: "Japanese telephone-number formatting をコード内データとして使い、regex-normalization を確認します。",
    detail: "Japanese telephone-number formatting を regex-normalization のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_javascript_02",
    countryId: "JP",
    category: "traditional-language",
    entityKeys: [
      "jp:final_debug_JP_javascript_02"
    ],
    aliases: [
      "Japanese vertical writing/tategaki",
      "final_debug_JP_javascript_02"
    ],
    statement: "Japanese vertical writing/tategaki をコード内データとして使い、layout-config-defect を確認します。",
    detail: "Japanese vertical writing/tategaki を layout-config-defect のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "fact_final_debug_JP_javascript_03",
    countryId: "JP",
    category: "administration-time",
    entityKeys: [
      "jp:final_debug_JP_javascript_03"
    ],
    aliases: [
      "Japanese fiscal year beginning in April",
      "final_debug_JP_javascript_03"
    ],
    statement: "Japanese fiscal year beginning in April をコード内データとして使い、date-boundary を確認します。",
    detail: "Japanese fiscal year beginning in April を date-boundary のコード課題で扱う。",
    factStatus: "verified",
    sourceRefs: [
      "https://www.bunka.go.jp/english/"
    ],
    allowedWorlds: [
      "debug"
    ],
    allowedLanguageIds: [
      "javascript"
    ],
    relatedFactIds: []
  },
  {
    factId: "jp_broad_national_stereotype_avoid",
    countryId: "JP",
    category: "safety",
    entityKeys: [
      "stereotype:national"
    ],
    aliases: [
      "national stereotype"
    ],
    statement: "",
    detail: "Do not generate questions from broad claims about people by nationality.",
    factStatus: "avoid",
    sourceRefs: [],
    allowedWorlds: [],
    allowedLanguageIds: [],
    relatedFactIds: []
  }
];

export const COUNTRY_FACTS_BY_ID = Object.freeze(
  Object.fromEntries(COUNTRY_FACTS.map(fact => [fact.factId, fact]))
);

export function getCountryFacts({ countryId, worldId, languageId, includeAvoid = false } = {}) {
  return COUNTRY_FACTS.filter(fact => {
    if (!includeAvoid && fact.factStatus === FACT_STATUS.AVOID) return false;
    if (countryId && fact.countryId !== countryId) return false;
    if (worldId && fact.allowedWorlds.length > 0 && !fact.allowedWorlds.includes(worldId)) return false;
    if (languageId && fact.allowedLanguageIds.length > 0 && !fact.allowedLanguageIds.includes(languageId)) return false;
    return true;
  });
}

function isValidHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function validateSourceRef(ref, index, factId, issues) {
  if (typeof ref === 'string') {
    if (!isValidHttpUrl(ref)) {
      issues.push({ factId, rule: 'invalid-sourceRef-url', msg: `sourceRefs[${index}] must be an http(s) URL` });
    }
    return;
  }
  if (!ref || typeof ref !== 'object' || Array.isArray(ref)) {
    issues.push({ factId, rule: 'invalid-sourceRef-shape', msg: `sourceRefs[${index}] must be a URL string or object` });
    return;
  }
  if (!ref.url || !isValidHttpUrl(ref.url)) {
    issues.push({ factId, rule: 'invalid-sourceRef-url', msg: `sourceRefs[${index}].url must be an http(s) URL` });
  }
  if (!ref.title && !ref.organization && !ref.org && !ref.publisher) {
    issues.push({ factId, rule: 'invalid-sourceRef-shape', msg: `sourceRefs[${index}] needs title or organization metadata` });
  }
}

export function validateCountryFacts(facts = COUNTRY_FACTS) {
  const issues = [];
  const ids = new Set();
  const validStatuses = new Set(Object.values(FACT_STATUS));

  for (const fact of facts) {
    const factId = fact?.factId || '(missing factId)';
    if (!fact?.factId) {
      issues.push({ factId, rule: 'missing-factId', msg: 'Country fact is missing factId' });
    } else if (ids.has(fact.factId)) {
      issues.push({ factId, rule: 'duplicate-factId', msg: `Duplicate factId "${fact.factId}"` });
    } else {
      ids.add(fact.factId);
    }

    for (const key of ['countryId', 'category', 'statement', 'detail', 'factStatus']) {
      if (key === 'statement' && fact?.factStatus === FACT_STATUS.AVOID) continue;
      if (!fact?.[key]) {
        issues.push({ factId, rule: `missing-${key}`, msg: `Country fact is missing ${key}` });
      }
    }

    for (const key of ['entityKeys', 'aliases', 'sourceRefs', 'allowedWorlds', 'allowedLanguageIds', 'relatedFactIds']) {
      if (!Array.isArray(fact?.[key])) {
        issues.push({ factId, rule: `${key}-not-array`, msg: `${key} must be an array` });
      }
    }

    if (!validStatuses.has(fact?.factStatus)) {
      issues.push({ factId, rule: 'invalid-factStatus', msg: `Invalid factStatus "${fact?.factStatus}"` });
    }

    if (fact?.factStatus === FACT_STATUS.VERIFIED && (!Array.isArray(fact.sourceRefs) || fact.sourceRefs.length === 0)) {
      issues.push({ factId, rule: 'verified-missing-sourceRefs', msg: 'verified facts must include sourceRefs' });
    }
    if (Array.isArray(fact?.sourceRefs)) {
      fact.sourceRefs.forEach((ref, index) => validateSourceRef(ref, index, factId, issues));
    }

    if (fact?.factStatus === FACT_STATUS.AVOID) {
      if ((fact.allowedWorlds?.length ?? 0) > 0 || (fact.allowedLanguageIds?.length ?? 0) > 0) {
        issues.push({ factId, rule: 'avoid-is-usable', msg: 'avoid facts must not be allowed for question generation' });
      }
    }
  }

  return issues;
}
