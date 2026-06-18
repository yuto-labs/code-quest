export const FINAL_MISSION_TYPES = Object.freeze({
  decode: 'DECODE_FINAL',
  execute: 'EXECUTE_FINAL',
  debug: 'DEBUG_FINAL',
});

export function buildFinalMissionId(worldId, countryId, languageId) {
  return `final_${worldId}*${countryId}*${languageId}`;
}

export const FINAL_MISSIONS = {
  decode: {
    JP: {
      python: {
        id: buildFinalMissionId('decode', 'JP', 'python'),
        type: FINAL_MISSION_TYPES.decode,
        title: 'DECODE FINAL: JAPAN PYTHON',
        unlock: { requiresStageClear: true },
        questions: [
          {
            id: 'final_decode_JP_python_q1',
            title: 'FINAL SYNTAX MIX',
            description: 'Complete the variable assignment.',
            code: 'capital = ___BLANK___\nprint(capital)',
            blank: '"Tokyo"',
            hint: 'Strings need quotes.',
            explanation: 'The final checks a basic variable plus string literal.',
          },
        ],
      },
    },
  },
  execute: {
    JP: {
      python: {
        id: buildFinalMissionId('execute', 'JP', 'python'),
        type: FINAL_MISSION_TYPES.execute,
        title: 'EXECUTE FINAL: JAPAN PYTHON',
        unlock: { requiresStageClear: true },
        questions: [
          {
            id: 'final_execute_JP_python_q1',
            title: 'TRACE MULTI STEP FLOW',
            questionType: 'output-predict',
            prompt: 'Predict the output after reassignment and addition.',
            code: 'x = 2\ny = 3\nx = x + y\nprint(x * y)',
            options: ['9', '15', '18', '23'],
            answer: '15',
            hint: 'x becomes 5 before the print.',
            explanation: 'x + y is 5, then 5 * 3 prints 15.',
          },
        ],
      },
    },
  },
  debug: {
    JP: {
      python: {
        id: buildFinalMissionId('debug', 'JP', 'python'),
        type: FINAL_MISSION_TYPES.debug,
        title: 'DEBUG FINAL: JAPAN PYTHON',
        unlock: { requiresStageClear: true },
        questions: [
          {
            id: 'final_debug_JP_python_q1',
            title: 'REPAIR FINAL BUG',
            questionType: 'debug-step',
            description: 'The code should add one to the visitor count and print 11.',
            code: 'visitors = "10"\nvisitors = visitors + 1\nprint(visitors)',
            steps: [
              {
                stepNum: 1,
                stepTitle: 'IDENTIFY',
                question: 'What is the cause?',
                options: ['String and number are added directly', 'print() is missing', 'The variable name is invalid'],
                answer: 'String and number are added directly',
                hint: 'Look at the type of visitors.',
                explanation: 'The value is a string, so adding a number fails.',
              },
              {
                stepNum: 2,
                stepTitle: 'FIX',
                question: 'Which fix is best?',
                options: ['visitors = int(visitors) + 1', 'visitors = visitors + "1"', 'print = visitors + 1'],
                answer: 'visitors = int(visitors) + 1',
                hint: 'Convert before doing arithmetic.',
                explanation: 'int() converts the string to a number before adding.',
              },
              {
                stepNum: 3,
                stepTitle: 'IMPACT',
                question: 'What does the fixed code print?',
                options: ['11', '101', 'TypeError'],
                answer: '11',
                hint: 'After conversion, this is numeric addition.',
                explanation: '10 + 1 is 11.',
              },
            ],
          },
        ],
      },
    },
  },
};

export function getFinalMission(worldId, countryId, languageId) {
  return FINAL_MISSIONS[worldId]?.[countryId]?.[languageId] || null;
}

export function listFinalMissions() {
  const missions = [];
  for (const [worldId, countries] of Object.entries(FINAL_MISSIONS)) {
    for (const [countryId, languages] of Object.entries(countries)) {
      for (const [languageId, mission] of Object.entries(languages)) {
        missions.push({ ...mission, worldId, countryId, languageId });
      }
    }
  }
  return missions;
}
