import { JP_JAVA_ASSIGNMENTS } from './jp_java_questions.js';
import { US_JAVA_ASSIGNMENTS } from './us_java_questions.js';
import { FRANCE_ASSIGNMENTS } from './france_questions.js';
import { BRAZIL_ASSIGNMENTS } from './brazil_questions.js';

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

export const QUESTION_ASSIGNMENTS = [
  {
    "questionId": "jp_py_d01",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d01"
    ],
    "entityKeys": [
      "jp:jp_py_d01"
    ],
    "learningObjectiveId": "lo_jp_py_d01",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d02",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d02"
    ],
    "entityKeys": [
      "jp:jp_py_d02"
    ],
    "learningObjectiveId": "lo_jp_py_d02",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d03",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d03"
    ],
    "entityKeys": [
      "jp:jp_py_d03"
    ],
    "learningObjectiveId": "lo_jp_py_d03",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d04",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d04"
    ],
    "entityKeys": [
      "jp:jp_py_d04"
    ],
    "learningObjectiveId": "lo_jp_py_d04",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "recall-from-given-context",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d05",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d05"
    ],
    "entityKeys": [
      "jp:jp_py_d05"
    ],
    "learningObjectiveId": "lo_jp_py_d05",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d06",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d06"
    ],
    "entityKeys": [
      "jp:jp_py_d06"
    ],
    "learningObjectiveId": "lo_jp_py_d06",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d07",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d07"
    ],
    "entityKeys": [
      "jp:jp_py_d07"
    ],
    "learningObjectiveId": "lo_jp_py_d07",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d08",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d08"
    ],
    "entityKeys": [
      "jp:jp_py_d08"
    ],
    "learningObjectiveId": "lo_jp_py_d08",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d09",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d09"
    ],
    "entityKeys": [
      "jp:jp_py_d09"
    ],
    "learningObjectiveId": "lo_jp_py_d09",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_d10",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_d10"
    ],
    "entityKeys": [
      "jp:jp_py_d10"
    ],
    "learningObjectiveId": "lo_jp_py_d10",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e01",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e01"
    ],
    "entityKeys": [
      "jp:jp_py_e01"
    ],
    "learningObjectiveId": "lo_jp_py_e01",
    "programmingConceptIds": [
      "comprehension"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e02",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e02"
    ],
    "entityKeys": [
      "jp:jp_py_e02"
    ],
    "learningObjectiveId": "lo_jp_py_e02",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e03",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e03"
    ],
    "entityKeys": [
      "jp:jp_py_e03"
    ],
    "learningObjectiveId": "lo_jp_py_e03",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e04",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e04"
    ],
    "entityKeys": [
      "jp:jp_py_e04"
    ],
    "learningObjectiveId": "lo_jp_py_e04",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e05",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e05"
    ],
    "entityKeys": [
      "jp:jp_py_e05"
    ],
    "learningObjectiveId": "lo_jp_py_e05",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e06",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e06"
    ],
    "entityKeys": [
      "jp:jp_py_e06"
    ],
    "learningObjectiveId": "lo_jp_py_e06",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_e07",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_e07"
    ],
    "entityKeys": [
      "jp:jp_py_e07"
    ],
    "learningObjectiveId": "lo_jp_py_e07",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_b01",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_b01"
    ],
    "entityKeys": [
      "jp:jp_py_b01"
    ],
    "learningObjectiveId": "lo_jp_py_b01",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_b02",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_b02"
    ],
    "entityKeys": [
      "jp:jp_py_b02"
    ],
    "learningObjectiveId": "lo_jp_py_b02",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_b03",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_b03"
    ],
    "entityKeys": [
      "jp:jp_py_b03"
    ],
    "learningObjectiveId": "lo_jp_py_b03",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_b04",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_b04"
    ],
    "entityKeys": [
      "jp:jp_py_b04"
    ],
    "learningObjectiveId": "lo_jp_py_b04",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_py_b05",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_jp_py_b05"
    ],
    "entityKeys": [
      "jp:jp_py_b05"
    ],
    "learningObjectiveId": "lo_jp_py_b05",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_python_01",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_final_decode_JP_python_01"
    ],
    "entityKeys": [
      "jp:final_decode_JP_python_01"
    ],
    "learningObjectiveId": "lo_final_decode_JP_python_01",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_python_02",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_final_decode_JP_python_02"
    ],
    "entityKeys": [
      "jp:final_decode_JP_python_02"
    ],
    "learningObjectiveId": "lo_final_decode_JP_python_02",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_python_03",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_final_decode_JP_python_03"
    ],
    "entityKeys": [
      "jp:final_decode_JP_python_03"
    ],
    "learningObjectiveId": "lo_final_decode_JP_python_03",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_python_01",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_final_execute_JP_python_01"
    ],
    "entityKeys": [
      "jp:final_execute_JP_python_01"
    ],
    "learningObjectiveId": "lo_final_execute_JP_python_01",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_python_02",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_final_execute_JP_python_02"
    ],
    "entityKeys": [
      "jp:final_execute_JP_python_02"
    ],
    "learningObjectiveId": "lo_final_execute_JP_python_02",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_python_03",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_final_execute_JP_python_03"
    ],
    "entityKeys": [
      "jp:final_execute_JP_python_03"
    ],
    "learningObjectiveId": "lo_final_execute_JP_python_03",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_python_01",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_final_debug_JP_python_01"
    ],
    "entityKeys": [
      "jp:final_debug_JP_python_01"
    ],
    "learningObjectiveId": "lo_final_debug_JP_python_01",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_python_02",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_final_debug_JP_python_02"
    ],
    "entityKeys": [
      "jp:final_debug_JP_python_02"
    ],
    "learningObjectiveId": "lo_final_debug_JP_python_02",
    "programmingConceptIds": [
      "regex"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_python_03",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_final_debug_JP_python_03"
    ],
    "entityKeys": [
      "jp:final_debug_JP_python_03"
    ],
    "learningObjectiveId": "lo_final_debug_JP_python_03",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d01",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d01"
    ],
    "entityKeys": [
      "jp:jp_js_d01"
    ],
    "learningObjectiveId": "lo_jp_js_d01",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d02",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d02"
    ],
    "entityKeys": [
      "jp:jp_js_d02"
    ],
    "learningObjectiveId": "lo_jp_js_d02",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d03",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d03"
    ],
    "entityKeys": [
      "jp:jp_js_d03"
    ],
    "learningObjectiveId": "lo_jp_js_d03",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d04",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d04"
    ],
    "entityKeys": [
      "jp:jp_js_d04"
    ],
    "learningObjectiveId": "lo_jp_js_d04",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d05",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d05"
    ],
    "entityKeys": [
      "jp:jp_js_d05"
    ],
    "learningObjectiveId": "lo_jp_js_d05",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d06",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d06"
    ],
    "entityKeys": [
      "jp:jp_js_d06"
    ],
    "learningObjectiveId": "lo_jp_js_d06",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d07",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d07"
    ],
    "entityKeys": [
      "jp:jp_js_d07"
    ],
    "learningObjectiveId": "lo_jp_js_d07",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d08",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d08"
    ],
    "entityKeys": [
      "jp:jp_js_d08"
    ],
    "learningObjectiveId": "lo_jp_js_d08",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d09",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d09"
    ],
    "entityKeys": [
      "jp:jp_js_d09"
    ],
    "learningObjectiveId": "lo_jp_js_d09",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_d10",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_d10"
    ],
    "entityKeys": [
      "jp:jp_js_d10"
    ],
    "learningObjectiveId": "lo_jp_js_d10",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e01",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e01"
    ],
    "entityKeys": [
      "jp:jp_js_e01"
    ],
    "learningObjectiveId": "lo_jp_js_e01",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e02",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e02"
    ],
    "entityKeys": [
      "jp:jp_js_e02"
    ],
    "learningObjectiveId": "lo_jp_js_e02",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e03",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e03"
    ],
    "entityKeys": [
      "jp:jp_js_e03"
    ],
    "learningObjectiveId": "lo_jp_js_e03",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e04",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e04"
    ],
    "entityKeys": [
      "jp:jp_js_e04"
    ],
    "learningObjectiveId": "lo_jp_js_e04",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e05",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e05"
    ],
    "entityKeys": [
      "jp:jp_js_e05"
    ],
    "learningObjectiveId": "lo_jp_js_e05",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e06",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e06"
    ],
    "entityKeys": [
      "jp:jp_js_e06"
    ],
    "learningObjectiveId": "lo_jp_js_e06",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_e07",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_e07"
    ],
    "entityKeys": [
      "jp:jp_js_e07"
    ],
    "learningObjectiveId": "lo_jp_js_e07",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_b01",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_b01"
    ],
    "entityKeys": [
      "jp:jp_js_b01"
    ],
    "learningObjectiveId": "lo_jp_js_b01",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_b02",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_b02"
    ],
    "entityKeys": [
      "jp:jp_js_b02"
    ],
    "learningObjectiveId": "lo_jp_js_b02",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_b03",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_b03"
    ],
    "entityKeys": [
      "jp:jp_js_b03"
    ],
    "learningObjectiveId": "lo_jp_js_b03",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_b04",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_b04"
    ],
    "entityKeys": [
      "jp:jp_js_b04"
    ],
    "learningObjectiveId": "lo_jp_js_b04",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "jp_js_b05",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_jp_js_b05"
    ],
    "entityKeys": [
      "jp:jp_js_b05"
    ],
    "learningObjectiveId": "lo_jp_js_b05",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_javascript_01",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_final_decode_JP_javascript_01"
    ],
    "entityKeys": [
      "jp:final_decode_JP_javascript_01"
    ],
    "learningObjectiveId": "lo_final_decode_JP_javascript_01",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_javascript_02",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_final_decode_JP_javascript_02"
    ],
    "entityKeys": [
      "jp:final_decode_JP_javascript_02"
    ],
    "learningObjectiveId": "lo_final_decode_JP_javascript_02",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_JP_javascript_03",
    "countryId": "JP",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_final_decode_JP_javascript_03"
    ],
    "entityKeys": [
      "jp:final_decode_JP_javascript_03"
    ],
    "learningObjectiveId": "lo_final_decode_JP_javascript_03",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_javascript_01",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_final_execute_JP_javascript_01"
    ],
    "entityKeys": [
      "jp:final_execute_JP_javascript_01"
    ],
    "learningObjectiveId": "lo_final_execute_JP_javascript_01",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_javascript_02",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_final_execute_JP_javascript_02"
    ],
    "entityKeys": [
      "jp:final_execute_JP_javascript_02"
    ],
    "learningObjectiveId": "lo_final_execute_JP_javascript_02",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "filter-or-group",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_JP_javascript_03",
    "countryId": "JP",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_final_execute_JP_javascript_03"
    ],
    "entityKeys": [
      "jp:final_execute_JP_javascript_03"
    ],
    "learningObjectiveId": "lo_final_execute_JP_javascript_03",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "predict-output",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_javascript_01",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_final_debug_JP_javascript_01"
    ],
    "entityKeys": [
      "jp:final_debug_JP_javascript_01"
    ],
    "learningObjectiveId": "lo_final_debug_JP_javascript_01",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_javascript_02",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_final_debug_JP_javascript_02"
    ],
    "entityKeys": [
      "jp:final_debug_JP_javascript_02"
    ],
    "learningObjectiveId": "lo_final_debug_JP_javascript_02",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_JP_javascript_03",
    "countryId": "JP",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_final_debug_JP_javascript_03"
    ],
    "entityKeys": [
      "jp:final_debug_JP_javascript_03"
    ],
    "learningObjectiveId": "lo_final_debug_JP_javascript_03",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_1",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_federal_branches"
    ],
    "entityKeys": [
      "us:federal_branches"
    ],
    "learningObjectiveId": "lo_us_federal_branches",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_2",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_senate_composition"
    ],
    "entityKeys": [
      "us:senate_composition"
    ],
    "learningObjectiveId": "lo_us_senate_composition",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_3",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_flag_stars_stripes"
    ],
    "entityKeys": [
      "us:flag_stars_stripes"
    ],
    "learningObjectiveId": "lo_us_flag_stars_stripes",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_4",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_bald_eagle_symbol"
    ],
    "entityKeys": [
      "us:bald_eagle_symbol"
    ],
    "learningObjectiveId": "lo_us_bald_eagle_symbol",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_5",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_yellowstone_establishment"
    ],
    "entityKeys": [
      "us:yellowstone_establishment"
    ],
    "learningObjectiveId": "lo_us_yellowstone_establishment",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_6",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_independence_hall_documents"
    ],
    "entityKeys": [
      "us:independence_hall_documents"
    ],
    "learningObjectiveId": "lo_us_independence_hall_documents",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_7",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_apollo11_crew"
    ],
    "entityKeys": [
      "us:apollo11_crew"
    ],
    "learningObjectiveId": "lo_us_apollo11_crew",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_8",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_mark_twain_huck_finn"
    ],
    "entityKeys": [
      "us:mark_twain_huck_finn"
    ],
    "learningObjectiveId": "lo_us_mark_twain_huck_finn",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_9",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_mississippi_river_length"
    ],
    "entityKeys": [
      "us:mississippi_river_length"
    ],
    "learningObjectiveId": "lo_us_mississippi_river_length",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_py_10",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_route66_route"
    ],
    "entityKeys": [
      "us:route66_route"
    ],
    "learningObjectiveId": "lo_us_route66_route",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_1",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_grand_canyon_site"
    ],
    "entityKeys": [
      "us:grand_canyon_site"
    ],
    "learningObjectiveId": "lo_us_grand_canyon_site",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_2",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_great_lakes_basin"
    ],
    "entityKeys": [
      "us:great_lakes_basin"
    ],
    "learningObjectiveId": "lo_us_great_lakes_basin",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_3",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_louisiana_purchase_timeline"
    ],
    "entityKeys": [
      "us:louisiana_purchase_timeline"
    ],
    "learningObjectiveId": "lo_us_louisiana_purchase_timeline",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_4",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_promontory_summit"
    ],
    "entityKeys": [
      "us:promontory_summit"
    ],
    "learningObjectiveId": "lo_us_promontory_summit",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_5",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_new_orleans_jazz"
    ],
    "entityKeys": [
      "us:new_orleans_jazz"
    ],
    "learningObjectiveId": "lo_us_new_orleans_jazz",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_6",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_wright_flyer_1903"
    ],
    "entityKeys": [
      "us:wright_flyer_1903"
    ],
    "learningObjectiveId": "lo_us_wright_flyer_1903",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_py_7",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_hoover_dam_engineering"
    ],
    "entityKeys": [
      "us:hoover_dam_engineering"
    ],
    "learningObjectiveId": "lo_us_hoover_dam_engineering",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_py_1",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_usps_state_abbreviation"
    ],
    "entityKeys": [
      "us:usps_state_abbreviation"
    ],
    "learningObjectiveId": "lo_us_usps_state_abbreviation",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_py_2",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_zip_leading_zero"
    ],
    "entityKeys": [
      "us:zip_leading_zero"
    ],
    "learningObjectiveId": "lo_us_zip_leading_zero",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_py_3",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_us_date_parsing"
    ],
    "entityKeys": [
      "us:us_date_parsing"
    ],
    "learningObjectiveId": "lo_us_us_date_parsing",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_py_4",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_us_time_zone_mapping"
    ],
    "entityKeys": [
      "us:us_time_zone_mapping"
    ],
    "learningObjectiveId": "lo_us_us_time_zone_mapping",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_py_5",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_nanp_phone_format"
    ],
    "entityKeys": [
      "us:nanp_phone_format"
    ],
    "learningObjectiveId": "lo_us_nanp_phone_format",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_1",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_house_composition"
    ],
    "entityKeys": [
      "us:house_composition"
    ],
    "learningObjectiveId": "lo_us_house_composition",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_2",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_federal_state_structure"
    ],
    "entityKeys": [
      "us:federal_state_structure"
    ],
    "learningObjectiveId": "lo_us_federal_state_structure",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_3",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_statue_liberty_france"
    ],
    "entityKeys": [
      "us:statue_liberty_france"
    ],
    "learningObjectiveId": "lo_us_statue_liberty_france",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_4",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_liberty_bell_inscription"
    ],
    "entityKeys": [
      "us:liberty_bell_inscription"
    ],
    "learningObjectiveId": "lo_us_liberty_bell_inscription",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_5",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_yosemite_world_heritage"
    ],
    "entityKeys": [
      "us:yosemite_world_heritage"
    ],
    "learningObjectiveId": "lo_us_yosemite_world_heritage",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_6",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_mesa_verde_dwellings"
    ],
    "entityKeys": [
      "us:mesa_verde_dwellings"
    ],
    "learningObjectiveId": "lo_us_mesa_verde_dwellings",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_7",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_george_washington_presidency"
    ],
    "entityKeys": [
      "us:george_washington_presidency"
    ],
    "learningObjectiveId": "lo_us_george_washington_presidency",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_8",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_hemingway_nobel_literature"
    ],
    "entityKeys": [
      "us:hemingway_nobel_literature"
    ],
    "learningObjectiveId": "lo_us_hemingway_nobel_literature",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_9",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_denali_elevation"
    ],
    "entityKeys": [
      "us:denali_elevation"
    ],
    "learningObjectiveId": "lo_us_denali_elevation",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "us_js_10",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_golden_gate_bridge"
    ],
    "entityKeys": [
      "us:golden_gate_bridge"
    ],
    "learningObjectiveId": "lo_us_golden_gate_bridge",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_1",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_alaska_purchase_timeline"
    ],
    "entityKeys": [
      "us:alaska_purchase_timeline"
    ],
    "learningObjectiveId": "lo_us_alaska_purchase_timeline",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_2",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_lewis_clark_route"
    ],
    "entityKeys": [
      "us:lewis_clark_route"
    ],
    "learningObjectiveId": "lo_us_lewis_clark_route",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_3",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_san_antonio_missions"
    ],
    "entityKeys": [
      "us:san_antonio_missions"
    ],
    "learningObjectiveId": "lo_us_san_antonio_missions",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_4",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_beale_street_blues"
    ],
    "entityKeys": [
      "us:beale_street_blues"
    ],
    "learningObjectiveId": "lo_us_beale_street_blues",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_5",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_voyager_pale_blue_dot"
    ],
    "entityKeys": [
      "us:voyager_pale_blue_dot"
    ],
    "learningObjectiveId": "lo_us_voyager_pale_blue_dot",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_6",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_gps_segments"
    ],
    "entityKeys": [
      "us:gps_segments"
    ],
    "learningObjectiveId": "lo_us_gps_segments",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "ex_us_js_7",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_brooklyn_bridge_structure"
    ],
    "entityKeys": [
      "us:brooklyn_bridge_structure"
    ],
    "learningObjectiveId": "lo_us_brooklyn_bridge_structure",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_js_1",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_ampm_noon_midnight"
    ],
    "entityKeys": [
      "us:ampm_noon_midnight"
    ],
    "learningObjectiveId": "lo_us_ampm_noon_midnight",
    "programmingConceptIds": [
      "functions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_js_2",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_fahrenheit_conversion"
    ],
    "entityKeys": [
      "us:fahrenheit_conversion"
    ],
    "learningObjectiveId": "lo_us_fahrenheit_conversion",
    "programmingConceptIds": [
      "functions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_js_3",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_usps_secondary_address"
    ],
    "entityKeys": [
      "us:usps_secondary_address"
    ],
    "learningObjectiveId": "lo_us_usps_secondary_address",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_js_4",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_zip_plus4_validation"
    ],
    "entityKeys": [
      "us:zip_plus4_validation"
    ],
    "learningObjectiveId": "lo_us_zip_plus4_validation",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "dbg_us_js_5",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_state_territory_dc_model"
    ],
    "entityKeys": [
      "us:state_territory_dc_model"
    ],
    "learningObjectiveId": "lo_us_state_territory_dc_model",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_US_python_01",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_bill_of_rights_freedoms"
    ],
    "entityKeys": [
      "us:bill_of_rights_freedoms"
    ],
    "learningObjectiveId": "lo_us_bill_of_rights_freedoms",
    "programmingConceptIds": [
      "dicts"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": "prog_us_constitution_freedoms"
  },
  {
    "questionId": "final_decode_US_python_02",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_toni_morrison_nobel"
    ],
    "entityKeys": [
      "us:toni_morrison_nobel"
    ],
    "learningObjectiveId": "lo_us_toni_morrison_nobel",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_US_python_03",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "python",
    "factIds": [
      "fact_us_great_seal_motto"
    ],
    "entityKeys": [
      "us:great_seal_motto"
    ],
    "learningObjectiveId": "lo_us_great_seal_motto",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_python_01",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_everglades_ecosystem"
    ],
    "entityKeys": [
      "us:everglades_ecosystem"
    ],
    "learningObjectiveId": "lo_us_everglades_ecosystem",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_python_02",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_hubble_timeline"
    ],
    "entityKeys": [
      "us:hubble_timeline"
    ],
    "learningObjectiveId": "lo_us_hubble_timeline",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_python_03",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "python",
    "factIds": [
      "fact_us_interstate_highway_system"
    ],
    "entityKeys": [
      "us:interstate_highway_system"
    ],
    "learningObjectiveId": "lo_us_interstate_highway_system",
    "programmingConceptIds": [
      "lists"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_python_01",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_federal_holiday_observed"
    ],
    "entityKeys": [
      "us:federal_holiday_observed"
    ],
    "learningObjectiveId": "lo_us_federal_holiday_observed",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_python_02",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_mile_foot_conversion"
    ],
    "entityKeys": [
      "us:mile_foot_conversion"
    ],
    "learningObjectiveId": "lo_us_mile_foot_conversion",
    "programmingConceptIds": [
      "conditions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_python_03",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "python",
    "factIds": [
      "fact_us_dollar_cent_decimal"
    ],
    "entityKeys": [
      "us:dollar_cent_decimal"
    ],
    "learningObjectiveId": "lo_us_dollar_cent_decimal",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_US_javascript_01",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_mlk_nobel_peace"
    ],
    "entityKeys": [
      "us:mlk_nobel_peace"
    ],
    "learningObjectiveId": "lo_us_mlk_nobel_peace",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_decode_US_javascript_02",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_first_amendment_freedoms"
    ],
    "entityKeys": [
      "us:first_amendment_freedoms"
    ],
    "learningObjectiveId": "lo_us_first_amendment_freedoms",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": "prog_us_constitution_freedoms"
  },
  {
    "questionId": "final_decode_US_javascript_03",
    "countryId": "US",
    "worldId": "decode",
    "languageId": "javascript",
    "factIds": [
      "fact_us_mount_rushmore_presidents"
    ],
    "entityKeys": [
      "us:mount_rushmore_presidents"
    ],
    "learningObjectiveId": "lo_us_mount_rushmore_presidents",
    "programmingConceptIds": [
      "objects"
    ],
    "cognitiveTask": "complete-syntax",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_javascript_01",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_chaco_culture_site"
    ],
    "entityKeys": [
      "us:chaco_culture_site"
    ],
    "learningObjectiveId": "lo_us_chaco_culture_site",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_javascript_02",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_erie_canal_route"
    ],
    "entityKeys": [
      "us:erie_canal_route"
    ],
    "learningObjectiveId": "lo_us_erie_canal_route",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_execute_US_javascript_03",
    "countryId": "US",
    "worldId": "execute",
    "languageId": "javascript",
    "factIds": [
      "fact_us_arpanet_first_message"
    ],
    "entityKeys": [
      "us:arpanet_first_message"
    ],
    "learningObjectiveId": "lo_us_arpanet_first_message",
    "programmingConceptIds": [
      "arrays"
    ],
    "cognitiveTask": "trace-data",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_javascript_01",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_federal_fiscal_year_boundary"
    ],
    "entityKeys": [
      "us:federal_fiscal_year_boundary"
    ],
    "learningObjectiveId": "lo_us_federal_fiscal_year_boundary",
    "programmingConceptIds": [
      "functions"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_javascript_02",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_washington_dc_disambiguation"
    ],
    "entityKeys": [
      "us:washington_dc_disambiguation"
    ],
    "learningObjectiveId": "lo_us_washington_dc_disambiguation",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  },
  {
    "questionId": "final_debug_US_javascript_03",
    "countryId": "US",
    "worldId": "debug",
    "languageId": "javascript",
    "factIds": [
      "fact_us_hawaii_unicode_name"
    ],
    "entityKeys": [
      "us:hawaii_unicode_name"
    ],
    "learningObjectiveId": "lo_us_hawaii_unicode_name",
    "programmingConceptIds": [
      "variables"
    ],
    "cognitiveTask": "identify-defect",
    "progressionGroupId": ""
  }
];

QUESTION_ASSIGNMENTS.push(...JP_JAVA_ASSIGNMENTS);
QUESTION_ASSIGNMENTS.push(...US_JAVA_ASSIGNMENTS);
QUESTION_ASSIGNMENTS.push(...FRANCE_ASSIGNMENTS);
QUESTION_ASSIGNMENTS.push(...BRAZIL_ASSIGNMENTS);
