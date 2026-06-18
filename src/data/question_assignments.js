export const COGNITIVE_TASKS = Object.freeze([
  'recall-from-given-context',
  'complete-syntax',
  'predict-output',
  'trace-data',
  'filter-or-group',
  'choose-implementation',
  'identify-defect',
  'select-fix',
  'explain-impact',
]);

export const REQUIRED_ASSIGNMENT_FIELDS = Object.freeze([
  'questionId',
  'countryId',
  'worldId',
  'languageId',
  'factIds',
  'entityKeys',
  'learningObjectiveId',
  'programmingConceptIds',
  'cognitiveTask',
  'progressionGroupId',
]);

// Future question metadata lives here instead of inside country fact data.
// Existing legacy questions can remain without records; the validator reports
// those as warnings until metadata is filled in gradually.
export const QUESTION_ASSIGNMENTS = [
  {
    questionId: "jp_py_d01",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d01"
    ],
    entityKeys: [
      "jp:jp_py_d01"
    ],
    learningObjectiveId: "lo_jp_py_d01",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d02",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d02"
    ],
    entityKeys: [
      "jp:jp_py_d02"
    ],
    learningObjectiveId: "lo_jp_py_d02",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d03",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d03"
    ],
    entityKeys: [
      "jp:jp_py_d03"
    ],
    learningObjectiveId: "lo_jp_py_d03",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d04",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d04"
    ],
    entityKeys: [
      "jp:jp_py_d04"
    ],
    learningObjectiveId: "lo_jp_py_d04",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d05",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d05"
    ],
    entityKeys: [
      "jp:jp_py_d05"
    ],
    learningObjectiveId: "lo_jp_py_d05",
    programmingConceptIds: [
      "conditions"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d06",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d06"
    ],
    entityKeys: [
      "jp:jp_py_d06"
    ],
    learningObjectiveId: "lo_jp_py_d06",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d07",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d07"
    ],
    entityKeys: [
      "jp:jp_py_d07"
    ],
    learningObjectiveId: "lo_jp_py_d07",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d08",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d08"
    ],
    entityKeys: [
      "jp:jp_py_d08"
    ],
    learningObjectiveId: "lo_jp_py_d08",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d09",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d09"
    ],
    entityKeys: [
      "jp:jp_py_d09"
    ],
    learningObjectiveId: "lo_jp_py_d09",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_d10",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_jp_py_d10"
    ],
    entityKeys: [
      "jp:jp_py_d10"
    ],
    learningObjectiveId: "lo_jp_py_d10",
    programmingConceptIds: [
      "conditions"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e01",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e01"
    ],
    entityKeys: [
      "jp:jp_py_e01"
    ],
    learningObjectiveId: "lo_jp_py_e01",
    programmingConceptIds: [
      "comprehension"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e02",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e02"
    ],
    entityKeys: [
      "jp:jp_py_e02"
    ],
    learningObjectiveId: "lo_jp_py_e02",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e03",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e03"
    ],
    entityKeys: [
      "jp:jp_py_e03"
    ],
    learningObjectiveId: "lo_jp_py_e03",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e04",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e04"
    ],
    entityKeys: [
      "jp:jp_py_e04"
    ],
    learningObjectiveId: "lo_jp_py_e04",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e05",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e05"
    ],
    entityKeys: [
      "jp:jp_py_e05"
    ],
    learningObjectiveId: "lo_jp_py_e05",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e06",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e06"
    ],
    entityKeys: [
      "jp:jp_py_e06"
    ],
    learningObjectiveId: "lo_jp_py_e06",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_e07",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_jp_py_e07"
    ],
    entityKeys: [
      "jp:jp_py_e07"
    ],
    learningObjectiveId: "lo_jp_py_e07",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_b01",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_jp_py_b01"
    ],
    entityKeys: [
      "jp:jp_py_b01"
    ],
    learningObjectiveId: "lo_jp_py_b01",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_b02",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_jp_py_b02"
    ],
    entityKeys: [
      "jp:jp_py_b02"
    ],
    learningObjectiveId: "lo_jp_py_b02",
    programmingConceptIds: [
      "conditions"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_b03",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_jp_py_b03"
    ],
    entityKeys: [
      "jp:jp_py_b03"
    ],
    learningObjectiveId: "lo_jp_py_b03",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_b04",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_jp_py_b04"
    ],
    entityKeys: [
      "jp:jp_py_b04"
    ],
    learningObjectiveId: "lo_jp_py_b04",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_py_b05",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_jp_py_b05"
    ],
    entityKeys: [
      "jp:jp_py_b05"
    ],
    learningObjectiveId: "lo_jp_py_b05",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_python_01",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_final_decode_JP_python_01"
    ],
    entityKeys: [
      "jp:final_decode_JP_python_01"
    ],
    learningObjectiveId: "lo_final_decode_JP_python_01",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_python_02",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_final_decode_JP_python_02"
    ],
    entityKeys: [
      "jp:final_decode_JP_python_02"
    ],
    learningObjectiveId: "lo_final_decode_JP_python_02",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_python_03",
    countryId: "JP",
    worldId: "decode",
    languageId: "python",
    factIds: [
      "fact_final_decode_JP_python_03"
    ],
    entityKeys: [
      "jp:final_decode_JP_python_03"
    ],
    learningObjectiveId: "lo_final_decode_JP_python_03",
    programmingConceptIds: [
      "conditions"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_python_01",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_final_execute_JP_python_01"
    ],
    entityKeys: [
      "jp:final_execute_JP_python_01"
    ],
    learningObjectiveId: "lo_final_execute_JP_python_01",
    programmingConceptIds: [
      "lists"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_python_02",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_final_execute_JP_python_02"
    ],
    entityKeys: [
      "jp:final_execute_JP_python_02"
    ],
    learningObjectiveId: "lo_final_execute_JP_python_02",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_python_03",
    countryId: "JP",
    worldId: "execute",
    languageId: "python",
    factIds: [
      "fact_final_execute_JP_python_03"
    ],
    entityKeys: [
      "jp:final_execute_JP_python_03"
    ],
    learningObjectiveId: "lo_final_execute_JP_python_03",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_python_01",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_final_debug_JP_python_01"
    ],
    entityKeys: [
      "jp:final_debug_JP_python_01"
    ],
    learningObjectiveId: "lo_final_debug_JP_python_01",
    programmingConceptIds: [
      "conditions"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_python_02",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_final_debug_JP_python_02"
    ],
    entityKeys: [
      "jp:final_debug_JP_python_02"
    ],
    learningObjectiveId: "lo_final_debug_JP_python_02",
    programmingConceptIds: [
      "regex"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_python_03",
    countryId: "JP",
    worldId: "debug",
    languageId: "python",
    factIds: [
      "fact_final_debug_JP_python_03"
    ],
    entityKeys: [
      "jp:final_debug_JP_python_03"
    ],
    learningObjectiveId: "lo_final_debug_JP_python_03",
    programmingConceptIds: [
      "dicts"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d01",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d01"
    ],
    entityKeys: [
      "jp:jp_js_d01"
    ],
    learningObjectiveId: "lo_jp_js_d01",
    programmingConceptIds: [
      "objects"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d02",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d02"
    ],
    entityKeys: [
      "jp:jp_js_d02"
    ],
    learningObjectiveId: "lo_jp_js_d02",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d03",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d03"
    ],
    entityKeys: [
      "jp:jp_js_d03"
    ],
    learningObjectiveId: "lo_jp_js_d03",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d04",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d04"
    ],
    entityKeys: [
      "jp:jp_js_d04"
    ],
    learningObjectiveId: "lo_jp_js_d04",
    programmingConceptIds: [
      "objects"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d05",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d05"
    ],
    entityKeys: [
      "jp:jp_js_d05"
    ],
    learningObjectiveId: "lo_jp_js_d05",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d06",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d06"
    ],
    entityKeys: [
      "jp:jp_js_d06"
    ],
    learningObjectiveId: "lo_jp_js_d06",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d07",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d07"
    ],
    entityKeys: [
      "jp:jp_js_d07"
    ],
    learningObjectiveId: "lo_jp_js_d07",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d08",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d08"
    ],
    entityKeys: [
      "jp:jp_js_d08"
    ],
    learningObjectiveId: "lo_jp_js_d08",
    programmingConceptIds: [
      "objects"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d09",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d09"
    ],
    entityKeys: [
      "jp:jp_js_d09"
    ],
    learningObjectiveId: "lo_jp_js_d09",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_d10",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_d10"
    ],
    entityKeys: [
      "jp:jp_js_d10"
    ],
    learningObjectiveId: "lo_jp_js_d10",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e01",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e01"
    ],
    entityKeys: [
      "jp:jp_js_e01"
    ],
    learningObjectiveId: "lo_jp_js_e01",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e02",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e02"
    ],
    entityKeys: [
      "jp:jp_js_e02"
    ],
    learningObjectiveId: "lo_jp_js_e02",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e03",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e03"
    ],
    entityKeys: [
      "jp:jp_js_e03"
    ],
    learningObjectiveId: "lo_jp_js_e03",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e04",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e04"
    ],
    entityKeys: [
      "jp:jp_js_e04"
    ],
    learningObjectiveId: "lo_jp_js_e04",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e05",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e05"
    ],
    entityKeys: [
      "jp:jp_js_e05"
    ],
    learningObjectiveId: "lo_jp_js_e05",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e06",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e06"
    ],
    entityKeys: [
      "jp:jp_js_e06"
    ],
    learningObjectiveId: "lo_jp_js_e06",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_e07",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_e07"
    ],
    entityKeys: [
      "jp:jp_js_e07"
    ],
    learningObjectiveId: "lo_jp_js_e07",
    programmingConceptIds: [
      "objects"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_b01",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_b01"
    ],
    entityKeys: [
      "jp:jp_js_b01"
    ],
    learningObjectiveId: "lo_jp_js_b01",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_b02",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_b02"
    ],
    entityKeys: [
      "jp:jp_js_b02"
    ],
    learningObjectiveId: "lo_jp_js_b02",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_b03",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_b03"
    ],
    entityKeys: [
      "jp:jp_js_b03"
    ],
    learningObjectiveId: "lo_jp_js_b03",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_b04",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_b04"
    ],
    entityKeys: [
      "jp:jp_js_b04"
    ],
    learningObjectiveId: "lo_jp_js_b04",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "jp_js_b05",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_jp_js_b05"
    ],
    entityKeys: [
      "jp:jp_js_b05"
    ],
    learningObjectiveId: "lo_jp_js_b05",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_javascript_01",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_final_decode_JP_javascript_01"
    ],
    entityKeys: [
      "jp:final_decode_JP_javascript_01"
    ],
    learningObjectiveId: "lo_final_decode_JP_javascript_01",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_javascript_02",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_final_decode_JP_javascript_02"
    ],
    entityKeys: [
      "jp:final_decode_JP_javascript_02"
    ],
    learningObjectiveId: "lo_final_decode_JP_javascript_02",
    programmingConceptIds: [
      "objects"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_decode_JP_javascript_03",
    countryId: "JP",
    worldId: "decode",
    languageId: "javascript",
    factIds: [
      "fact_final_decode_JP_javascript_03"
    ],
    entityKeys: [
      "jp:final_decode_JP_javascript_03"
    ],
    learningObjectiveId: "lo_final_decode_JP_javascript_03",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "complete-syntax",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_javascript_01",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_final_execute_JP_javascript_01"
    ],
    entityKeys: [
      "jp:final_execute_JP_javascript_01"
    ],
    learningObjectiveId: "lo_final_execute_JP_javascript_01",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_javascript_02",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_final_execute_JP_javascript_02"
    ],
    entityKeys: [
      "jp:final_execute_JP_javascript_02"
    ],
    learningObjectiveId: "lo_final_execute_JP_javascript_02",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "filter-or-group",
    progressionGroupId: ""
  },
  {
    questionId: "final_execute_JP_javascript_03",
    countryId: "JP",
    worldId: "execute",
    languageId: "javascript",
    factIds: [
      "fact_final_execute_JP_javascript_03"
    ],
    entityKeys: [
      "jp:final_execute_JP_javascript_03"
    ],
    learningObjectiveId: "lo_final_execute_JP_javascript_03",
    programmingConceptIds: [
      "arrays"
    ],
    cognitiveTask: "predict-output",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_javascript_01",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_final_debug_JP_javascript_01"
    ],
    entityKeys: [
      "jp:final_debug_JP_javascript_01"
    ],
    learningObjectiveId: "lo_final_debug_JP_javascript_01",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_javascript_02",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_final_debug_JP_javascript_02"
    ],
    entityKeys: [
      "jp:final_debug_JP_javascript_02"
    ],
    learningObjectiveId: "lo_final_debug_JP_javascript_02",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  },
  {
    questionId: "final_debug_JP_javascript_03",
    countryId: "JP",
    worldId: "debug",
    languageId: "javascript",
    factIds: [
      "fact_final_debug_JP_javascript_03"
    ],
    entityKeys: [
      "jp:final_debug_JP_javascript_03"
    ],
    learningObjectiveId: "lo_final_debug_JP_javascript_03",
    programmingConceptIds: [
      "variables"
    ],
    cognitiveTask: "identify-defect",
    progressionGroupId: ""
  }
];
