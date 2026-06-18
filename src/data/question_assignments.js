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
export const QUESTION_ASSIGNMENTS = [];
