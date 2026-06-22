# C Path — Chapters 7–8 Exact Themes Spec

> **Status: RECORDED, NOT IMPLEMENTED.**
> This file is a content specification only. Do not generate the actual
> question objects / `course.js` / `questions.js` entries until explicitly
> told to implement.

See also `C_PATH_CHAPTERS_1_3_SPEC.md`, `C_PATH_CHAPTERS_4_6_SPEC.md`, and
`C_PATH_COURSE_RULES.md` (course-wide theme/quality/validation rules — read
that file before implementing any chapter).

---

## Chapter 7 — Memory and Safety Basics

Focus: `sizeof`, array bounds, initialization, null pointer checks, avoiding
buffer overflow, safe string handling, beginner-level safety.

1. **WRITE — array length with `sizeof`**
   - Theme: continent label array
   - Concept: `sizeof(array) / sizeof(array[0])`
   - Supplied: continent labels
   - Task: compute array length safely. Explain this only works for arrays
     in the same scope, not decayed pointers.

2. **WRITE — initialize all yearly counts**
   - Theme: museum archive yearly counts
   - Concept: array initialization
   - Supplied: a 3-year sample
   - Task: initialize all elements before printing.

3. **WRITE — safe copy of short country code**
   - Theme: country-code buffer
   - Concept: bounded char array + null terminator
   - Supplied: a code such as `"BR"` or `"JP"`
   - Task: store safely in a buffer with room for `'\0'`. Avoid unsafe
     `strcpy` unless buffer size and source are controlled and explained.

4. **READ — `sizeof` int array**
   - Theme: river length sample array
   - Concept: `sizeof` total bytes vs. element count
   - Supplied: a small `int lengths[]` array
   - Task: distinguish bytes from element count. Prefer asking for the
     result in terms of `sizeof(int)`, or use an element-count expression,
     to avoid platform-size ambiguity.

5. **READ — initialized vs. uninitialized values**
   - Theme: station temperature sample
   - Concept: initialized array values
   - Task: trace printed initialized values. **No UB in the correct READ code.**

6. **READ — safe fallback for missing string**
   - Theme: endangered-language translation label
   - Concept: `NULL` pointer check before `printf`
   - Supplied: a pointer that may be `NULL`
   - Task: trace the fallback output.

7. **FIX — buffer too small**
   - Theme: three-letter airport code
   - Bug: `char code[3]` used for a 3-letter string plus terminator
   - Fix: `char code[4]` or a string-literal pointer; explain room for `'\0'`.

8. **FIX — using `sizeof` on pointer as array length**
   - Theme: country-code list passed to a function
   - Bug: function computes `sizeof(codes) / sizeof(codes[0])` after the
     array has decayed to a pointer parameter
   - Fix: pass the length as an explicit parameter. (Key beginner C concept.)

9. **FIX — missing null check before string print**
   - Theme: optional museum website label
   - Bug: `printf("%s", website)` when `website` may be `NULL`
   - Fix: add an `if` check + fallback. No real URLs needed.

10. **MISSION — safe country-code lookup**
    - Combine: array length, string comparison, null-safe fallback, bounded access
    - Supplied: country-code/name records
    - Task: find a country name safely by code.
    - Corrected code must avoid out-of-bounds access and handle "not found".

---

## Chapter 8 — Practical C Data Processing

Focus: combining arrays, structs, functions, pointers, safe checks, small
world-data records. **No external libraries.**

1. **WRITE — struct-based capital lookup**
   - Concept: struct array + lookup function
   - Supplied: country-code/capital records
   - Task: complete a function returning a capital label or fallback.
     Must use safe bounds.

2. **WRITE — filter heritage sites by category**
   - Concept: array of structs, enum, loop, output
   - Supplied: heritage records
   - Task: print only matching-category records.

3. **WRITE — update indicator through pointer**
   - Concept: pointer parameter + null check
   - Theme: global development indicator sample (static sample values, not
     live statistics)
   - Task: safely update a numeric field.

4. **READ — fixed-order output over struct array**
   - Concept: loop over struct array in existing order
   - Theme: historical observatories
   - Supplied: records
   - Task: trace printed order. Do not require sorting unless already
     covered elsewhere in the course.

5. **READ — aggregation over records**
   - Concept: sum values in a struct array
   - Theme: museum collection sample counts
   - Supplied: small values
   - Task: compute the final sum.

6. **READ — safe lookup result**
   - Concept: function returning `const char *` with fallback
   - Theme: language-code directory
   - Supplied: records
   - Task: trace the returned label for both found and missing codes.

7. **FIX — wrong struct pointer field access**
   - Theme: transport station record
   - Bug: using `record.field` when `record` is a pointer (or `->` misused)
   - Fix: choose `.` vs `->` correctly.

8. **FIX — not-found lookup returns invalid pointer**
   - Theme: country directory
   - Bug: returns a pointer to a local buffer, or an uninitialized pointer,
     when no match is found
   - Fix: return a safe string-literal fallback or a caller-provided
     buffer. Resulting behavior must be fully defined.

9. **FIX — aggregation reads past array end**
   - Theme: river basin sample records
   - Bug: loop condition `<= count`
   - Fix: `i < count`; must prevent out-of-bounds access.

10. **MISSION — world data mini-processor**
    - Combine: structs, arrays, enum/category code, function, pointer-safe
      output, lookup fallback
    - Supplied: records from countries, heritage sites, or transport routes
    - Task:
      1. count records in one category
      2. return a label safely
      3. print a summary
    - Should feel like a final C-path capstone mission, beginner-to-intermediate.
    - **No file I/O, malloc, networking, or external libraries.**

---

## Implementation notes for later (not to act on now)

- Same target files: `src/data/c/course.js`, `src/data/c/questions.js`.
- Before implementing, read `C_PATH_COURSE_RULES.md` for the course-wide
  theme/quality/validation rules that apply across all 8 chapters.
- Confirm scope (which chapters/questions to generate first) before writing
  any question objects.
