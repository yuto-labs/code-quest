# C Path — Course-Wide Theme and Quality Rules

> **Status: RECORDED, NOT IMPLEMENTED.**
> Applies to all 8 chapters (`C_PATH_CHAPTERS_1_3_SPEC.md`,
> `C_PATH_CHAPTERS_4_6_SPEC.md`, `C_PATH_CHAPTERS_7_8_SPEC.md`). Read this
> file before implementing any C Path question.

## Theme rules

- Use every specified central theme **exactly once** across the course.
- Avoid turning questions into trivia.
- Avoid current rankings, current officeholders, live statistics, or any
  volatile/time-sensitive values.
- Prefer stable facts from official institutions, UNESCO, museums,
  archives, scientific institutions, or government sources.
- Every required world fact must be provided **inside the prompt, code,
  table, or supplied data** — never assumed as background knowledge.
- The **programming concept** must determine the answer, not recalled trivia.

## Programming rules

- Use standard C.
- Correct code must avoid:
  - undefined behavior
  - out-of-bounds access
  - uninitialized reads
  - unsafe string handling
- FIX questions may show unsafe/broken code, but the intended final fix
  must be safe and fully defined.
- Keep snippets short enough to trace manually.
- Use plausible distractors; ensure only the intended answer is correct.
- Avoid platform-specific behavior.
- Avoid external libraries.
- Avoid file I/O unless the current Code Path architecture already
  supports it safely.
- Do **not** introduce `malloc`/`free` unless a later, explicit
  memory-management chapter is added.
- Do not simply translate SQL Path, TypeScript Path, or World Quest
  questions — C Path content must be written for C concepts.

## Reference rules

- Link every question to the closest valid C Reference concept.
- Add only the minimum missing C Reference entries needed.
- Do not create dangling Reference, fact, entity, or assignment links.

## Validation checklist (must pass before considering the C Path done)

- [ ] exactly 80 C Path questions
- [ ] exactly 8 chapters
- [ ] exactly 10 questions per chapter
- [ ] each chapter has exactly: 3 WRITE, 3 READ, 3 FIX, 1 MISSION
- [ ] no duplicate IDs
- [ ] no missing required fields
- [ ] no invalid Reference links
- [ ] all C snippets are valid C, or intentionally/safely fixable in FIX questions
- [ ] lint passes
- [ ] production build passes

## Implementation notes for later (not to act on now)

- Confirm scope (which chapters/questions to generate first) before writing
  any question objects.
- Run the validation checklist above after each implementation batch, not
  only at the very end.
