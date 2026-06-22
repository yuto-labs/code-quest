# C Path — Chapters 4–6 Exact Themes Spec

> **Status: RECORDED, NOT IMPLEMENTED.**
> This file is a content specification only. Do not generate the actual
> question objects / `course.js` / `questions.js` entries until explicitly
> told to implement.

## Global rules (apply to every question below)

- Use the **exact themes** listed here for Chapters 4–6. Do not replace them.
- Every question must supply **all world facts needed to answer** inside the
  prompt text, code, table, or supplied data block.
- Correct/fixed code must use **safe, defined C behavior** — no UB, even in
  the "before" state of a FIX question.
- Question types per the existing course taxonomy: **WRITE**, **READ**,
  **FIX**, **MISSION**.

See also `C_PATH_CHAPTERS_1_3_SPEC.md` for Chapters 1–3 (same conventions).

---

## Chapter 4 — Functions and Scope

Focus: function parameters, return values, local variables, prototypes where
appropriate, simple helper functions.

1. **WRITE — population density helper**
   - Concept: function with `double` parameters and `double` return
   - Supplied: sample population and area values (not live stats)
   - Task: complete a function returning `population / area`.

2. **WRITE — museum founding-year message**
   - Concept: function parameter + `printf` in `main`
   - Supplied: museum name + founding year
   - Task: complete a small helper returning/printing the year.

3. **WRITE — Celsius to Fahrenheit conversion**
   - Concept: function return value + arithmetic
   - Theme: polar research station temperature
   - Supplied: a Celsius value
   - Task: return `celsius * 9.0 / 5.0 + 32.0`.

4. **READ — decade label function**
   - Concept: integer division or conditional return
   - Supplied: historical event years
   - Task: trace return value such as `1960s`. Deterministic output.

5. **READ — route-distance function**
   - Concept: parameter passing by value
   - Supplied: transport-route distances (with units stated, no ambiguity)
   - Task: trace function result.

6. **READ — health-rate calculation**
   - Concept: `double` return + local variable scope
   - Supplied: cases and population sample values
   - Task: predict calculated/rounded printed output; specify `printf` precision explicitly.

7. **FIX — missing function prototype**
   - Theme: international organization age helper
   - Bug: function called before declaration, requiring a prototype
   - Fix: add prototype or reorder definition; keep compatible with modern C.

8. **FIX — returning pointer to local array**
   - Theme: country label builder
   - Bug: returning the address of a local `char` array
   - Fix: avoid returning a local array — use a caller-provided buffer, or
     return a string literal when safe. Keep beginner-level and safe.

9. **FIX — integer division in average calculation**
   - Theme: museum visitor sample data
   - Bug: average computed with `int` division when `double` precision is needed
   - Fix: cast operands or use `double` variables.

10. **MISSION — city comparison helper**
    - Combine: function parameters, return value, local variables, `if`/`else`
    - Supplied: city records with static population + area sample values
    - Task: compute density per city, return the label of the denser city.
    - All data supplied.

---

## Chapter 5 — Pointers

Focus: address-of `&`, dereference `*`, pointer parameters, simple pointer
tracing, null checks. **Avoid advanced pointer arithmetic.**

1. **WRITE — swap two route distances**
   - Concept: pointer parameters + dereference
   - Supplied: route-distance values
   - Task: complete a safe swap function using `int *`. No pointer arithmetic.

2. **WRITE — update museum visitor count**
   - Concept: pass pointer to `int`, increment through it
   - Supplied: visitor-count sample
   - Task: write a function updating a count via pointer.

3. **WRITE — safe pointer check**
   - Concept: `if (ptr != NULL)`
   - Theme: optional translation label
   - Supplied: label data
   - Task: print a fallback when the pointer is `NULL`.

4. **READ — address and dereference trace**
   - Concept: `int` value, pointer to `int`, `*ptr` update
   - Theme: world heritage site count sample
   - Task: predict the final value after a pointer update.

5. **READ — pointer parameter modifies caller value**
   - Concept: pass address to function
   - Theme: conservation-area score
   - Task: trace before/after printed value.

6. **READ — const pointer to string literal**
   - Concept: `const char *` label
   - Theme: organization abbreviation labels
   - Task: trace printed string without mutation.

7. **FIX — missing address-of operator**
   - Theme: climate score update
   - Bug: passing a value where `int *` is expected
   - Fix: pass `&score`; explain why the function needs an address.

8. **FIX — dereferencing NULL**
   - Theme: missing language translation
   - Bug: `*ptr` or `printf("%s", ptr)` without a `NULL` check
   - Fix: guard against `NULL`, print a fallback.

9. **FIX — pointer assigned incompatible type**
   - Theme: route distance as `double`
   - Bug: `int *` used for a `double` value (or mismatched pointer type)
   - Fix: match pointer type to the pointed-to value's type.

10. **MISSION — safe record updater**
    - Combine: pointer parameter, null check, dereference, helper function
    - Supplied: records for global indicators or heritage counts
    - Task: safely update a numeric field only when the pointer is valid.
    - Corrected code must avoid null dereference.

---

## Chapter 6 — Structs and Enums

Focus: struct definitions, struct fields, arrays of structs, enum constants,
simple records.

1. **WRITE — country profile struct**
   - Concept: struct with name, region, capital fields
   - Supplied: sample country data
   - Task: complete a struct definition, print fields.

2. **WRITE — heritage site struct**
   - Concept: struct with year + category fields
   - Supplied: site records
   - Task: initialize and print one record.

3. **WRITE — transport enum**
   - Concept: enum constants + `switch`
   - Supplied transport types: `RAIL`, `AIR`, `SHIP`
   - Task: map enum value to label.

4. **READ — scientist record**
   - Concept: struct field access
   - Supplied: scientist + field data (all facts given, no unstated trivia)
   - Task: predict printed field values.

5. **READ — river record array**
   - Concept: array of structs + loop
   - Supplied: river/country records
   - Task: trace which records get printed.

6. **READ — enum branch output**
   - Concept: `switch` over enum
   - Theme: UNESCO category enum — `CULTURAL`, `NATURAL`, `MIXED`
   - Task: predict the branch label.

7. **FIX — struct field typo**
   - Theme: museum record
   - Bug: accessing `museum.foundedYear` when the struct defines `founded_year`
     (or similar mismatch)
   - Fix: correct the field name; keep naming clear.

8. **FIX — uninitialized struct field**
   - Theme: treaty record
   - Bug: printing a field that was never initialized
   - Fix: initialize all required fields; corrected code must not read
     indeterminate values.

9. **FIX — wrong enum case handling**
   - Theme: transport record
   - Bug: missing enum branch, or wrong label mapped
   - Fix: correct switch mapping; include `default` only if appropriate.

10. **MISSION — world site registry**
    - Combine: struct, enum, array of structs, loop, condition
    - Supplied: records for cultural, natural, and mixed heritage sites
    - Task: count or print records of a selected category.
    - Corrected code must use safe array bounds.

---

## Implementation notes for later (not to act on now)

- Same target files as Chapters 1–3: `src/data/c/course.js`,
  `src/data/c/questions.js`.
- Apply the same accuracy bar as `codequest-theme-explanation-standard`
  memory — supplied facts must be precise, not vague/stereotyped, even
  though they are self-contained "supplied data" rather than deep country
  trivia.
- Confirm scope (which chapters/questions to generate first) before writing
  any question objects.
