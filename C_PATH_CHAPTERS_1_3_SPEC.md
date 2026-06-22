# C Path — Chapters 1–3 Exact Themes Spec

> **Status: RECORDED, NOT IMPLEMENTED.**
> This file is a content specification only. Do not generate the actual
> question objects / `course.js` / `questions.js` entries until explicitly
> told to implement.

## Global rules (apply to every question below)

- Use the **exact themes** listed here for Chapters 1–3. Do not substitute
  generic world-data examples or silently swap topics.
- Every question must supply **all world facts needed to answer** inside the
  prompt text, code, table, or supplied data block. The learner solves the
  **C task**, not unstated world trivia.
- Correct/fixed code must use **safe, defined C behavior** — no UB, even in
  the "before" state of a FIX question (the bug must be a real, nameable C
  mistake; the fixed answer must be fully defined behavior).
- Question types per the existing course taxonomy: **WRITE**, **READ**,
  **FIX**, **MISSION**.

---

## Chapter 1 — C Basics

Focus: `main`, `printf`, `int`, `double`, `char`, variables, simple
arithmetic, format specifiers.

1. **WRITE — United Nations founding year**
   - Concept: `int` variable + `printf` with `%d`
   - Fact (supplied in prompt): UN established in 1945
   - Output: `"The United Nations was established in 1945."`
   - No arrays.

2. **WRITE — Olympic rings count**
   - Concept: `int` + `printf`
   - Fact: Olympic symbol has five interlaced rings
   - Output: `"Olympic rings: 5"`
   - Beginner-level.

3. **WRITE — World Health Organization abbreviation**
   - Concept: char array string literal + `printf` with `%s`
   - Fact: WHO = World Health Organization (commonly abbreviated WHO)
   - Avoid pointer-heavy explanation; focus on string literal usage.

4. **READ — Antarctic Treaty year**
   - Concept: trace `int` + `printf` output
   - Fact: Antarctic Treaty signed in 1959
   - Code includes `int year = 1959;` + a `printf`; learner predicts exact output.

5. **READ — ISS first long-duration crew**
   - Concept: `int` + simple arithmetic
   - Fact: Expedition 1 began in 2000
   - Trace e.g. `years_after_1900 = 2000 - 1900;`; ask for final printed value.

6. **READ — UNESCO name initials**
   - Concept: `char` variables + `printf` with `%c`
   - Fact: UNESCO associated with education, science, culture (state in prompt if used)
   - Trace printing individual chars `'U'`, `'N'`, `'E'`.
   - Do not require recalling the full expansion from memory — supply it if needed.

7. **FIX — wrong format specifier for population value**
   - Theme: Vatican City sample population display (use a **supplied
     illustrative value**, not a real population statistic)
   - Bug: `%d` used for a `double` (or `%f` for an `int`, pick one)
   - Fix: correct format specifier; output must be deterministic.

8. **FIX — character vs string confusion**
   - Theme: country-code label (use supplied codes: `"BR"`, `"JP"`, `"FR"`)
   - Bug: storing `"BR"` in a `char` instead of a char array / string literal pointer
   - Fix: use proper string storage. Avoid advanced pointer explanation.

9. **FIX — uninitialized variable**
   - Theme: museum founding-year label (supply a museum name + year in the prompt)
   - Bug: `printf` of an `int` before it's assigned
   - Fix: initialize before use; no UB in the corrected answer.

10. **MISSION — international organization summary card**
    - Combine: `int`, double/int arithmetic, char array/string literal, format specifiers
    - Supplied facts: UN established 1945, WHO came into being 1948, UNESCO established 1945
    - Task: complete a short program printing one formatted org summary.
    - Stay within Chapter 1 concepts only (no loops/arrays).

---

## Chapter 2 — Conditions and Loops

Focus: `if`/`else`, `switch`, `for`, `while`, loop counters, simple accumulation.

1. **WRITE — hemisphere label**
   - Concept: `if`/`else` producing a string label
   - Supplied labels: Northern, Southern, Both
   - Task: complete a condition printing whether a sample location is in the
     Northern Hemisphere. All data supplied inline.

2. **WRITE — UNESCO site category switch**
   - Concept: `switch` over an integer category code
   - Supplied codes: `1` = cultural, `2` = natural, `3` = mixed
   - No real UNESCO trivia required — codes are given.

3. **WRITE — river length comparison**
   - Concept: `if`/`else` comparison
   - Supplied: a small static table of illustrative river lengths in the prompt
   - Task: compare two numeric values, print the longer river's label.

4. **READ — time-zone offset counter**
   - Concept: `for` loop + `printf`
   - Supplied: UTC offsets for three sample cities (static, included in code)
   - Task: trace loop output exactly.

5. **READ — World Cup host list counter**
   - Concept: `while` loop counter
   - Supplied: a small static list of historical host years/countries (no
     current/future tournaments)
   - Task: predict how many items get printed.

6. **READ — climate-zone score accumulation**
   - Concept: `for` loop with accumulation
   - Supplied: small static climate-zone scores (not live data)
   - Task: trace the final total.

7. **FIX — off-by-one loop in continent list**
   - Theme: seven-continent label list
   - Bug: loop condition `<= count` instead of `< count`
   - Fix: prevent out-of-bounds access; corrected code must be safe.

8. **FIX — missing break in switch**
   - Theme: transport mode label
   - Supplied codes: `1` = rail, `2` = air, `3` = ship
   - Bug: switch falls through (e.g. rail → air/ship)
   - Fix: add correct `break` statements.

9. **FIX — while loop never updates counter**
   - Theme: museum ticket batches (supply simple batch data)
   - Bug: `while` loop body never increments the counter → infinite loop
   - Fix: add the increment.

10. **MISSION — world heritage category counter**
    - Combine: array of category codes, `for` loop, `if`/`switch`, accumulation
    - Supplied: records with categories cultural/natural/mixed as numeric codes
    - Task: count how many records match a selected category.
    - All facts supplied; no external trivia required.

---

## Chapter 3 — Arrays and Strings

Focus: arrays, indexes, char arrays, string literals, null terminator basics,
`strlen`/`strcmp` where appropriate, simple traversal.

1. **WRITE — Great Lakes array**
   - Concept: `const char *names[]` (or char labels) with index access
   - Supplied: Superior, Michigan, Huron, Erie, Ontario
   - Task: complete code printing one indexed lake name. No mutating string literals.

2. **WRITE — official language labels**
   - Concept: array of string literals + loop
   - Supplied: country–language pairs (given, not recalled)
   - Task: complete the array, print all language labels.

3. **WRITE — country-code string comparison**
   - Concept: `strcmp` for comparing strings
   - Supplied codes: `"JP"`, `"BR"`, `"FR"`
   - Task: use `strcmp` instead of `==`. Sets up the common C string-equality bug.

4. **READ — alphabetized city labels**
   - Concept: array index tracing
   - Supplied: city labels from different continents (given)
   - Task: identify which string prints at a given (in-range) index.

5. **READ — UNESCO abbreviation length**
   - Concept: `strlen`
   - Supplied string: `"UNESCO"`
   - Task: predict `strlen` result = 6; mention `strlen` counts chars before `'\0'`.

6. **READ — route-code traversal**
   - Concept: char array traversal until `'\0'`
   - Supplied: short route code `"RAIL"`
   - Task: trace printed characters; keep simple and safe (no OOB read).

7. **FIX — string comparison with `==`**
   - Theme: language-code lookup (supplied codes)
   - Bug: comparing strings with `==`
   - Fix: `strcmp(...) == 0`.

8. **FIX — missing null terminator**
   - Theme: airport code char array
   - Bug: `char code[3] = {'H','N','D'};` then used as a string (no room for `'\0'`)
   - Fix: allocate room for `'\0'` or use a string literal; explain the null
     terminator. Corrected code must be safe.

9. **FIX — out-of-bounds array index**
   - Theme: continent array
   - Bug: reading `continents[7]` when there are 7 entries indexed 0–6
   - Fix: correct the index or loop boundary; no UB in fixed code.

10. **MISSION — country-code directory**
    - Combine: arrays of strings, indexes, `strcmp`, loop, safe fallback
    - Supplied: country codes + names
    - Task: find a country name by code, print a fallback if not found.
    - Corrected code must avoid out-of-bounds access and use `strcmp`.

---

## Implementation notes for later (not to act on now)

- Existing C path files: `src/data/c/course.js`, `src/data/c/questions.js`.
- When implementation is greenlit, follow the same content-quality bar as
  `codequest-theme-explanation-standard` memory (real, accurate supplied
  facts — no vague stereotypes — even though these are now self-contained
  "supplied data" facts rather than country-deep-dive facts).
- Confirm scope (which chapters/questions to generate first) before writing
  any question objects.
