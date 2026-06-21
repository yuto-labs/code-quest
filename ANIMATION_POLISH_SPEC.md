# Animation Polish Spec

Status: **implemented**. See "Implementation notes" at the bottom for what
landed, what was already done by prior work, and any gaps.

## Purpose

Improve the sense of progress and feedback without slowing down learning or
adding extra clicks.

## Animation principles

- Animations must be short, subtle, and non-blocking.
- Never prevent NEXT, BACK, answer retry, or navigation.
- Never add an extra confirmation click.
- Animate only the UI element whose state changed.
- Do not animate the entire screen unless it is a very subtle content
  transition.
- Respect `prefers-reduced-motion`.
- Avoid new dependencies.
- Reuse existing CSS variables, timing, shadows, borders, and visual
  language (see `src/index.css` for current keyframes/colors).
- Keep animations consistent across WORLD QUEST, WORLD SHUFFLE, REVIEW ROOM,
  SQL PATH, and TypeScript PATH where applicable.

## Animations to add

### 1. Correct-answer micro feedback
- When the user answers correctly, briefly emphasize the selected answer or
  input area.
- Show a small check / CORRECT state.
- Use a short glow, scale, or opacity change.
- Do not delay explanation or NEXT.

### 2. Wrong-answer micro feedback
- When the user answers incorrectly, show a small, gentle feedback state.
- Avoid harsh shaking or large red flashes.
- Allow immediate retry.

### 3. Progress-dot activation
- When a question is completed, animate only the newly completed progress
  dot or step.
- Completed steps should light up.
- Current step may have a subtle pulse.
- Future steps remain dim.
- Works with variable question counts.

### 4. Content-only NEXT transition
- On NEXT, keep the main header, BACK button, and navigation stable.
- Apply only a subtle fade / translate transition to the question content
  area.
- Rapid NEXT clicking must not create stale timers or animation-state bugs.

### 5. Review and mastery chips
- When REVIEW ROOM, WORLD SHUFFLE, or replay clears a review item, briefly
  show a small "REVIEW CLEARED" chip.
- When eligible self-solved completion adds mastery progress, briefly show
  "MASTERY +1".
- Do not show these chips when no state changed.
- Do not duplicate chips after reload, sync, or repeated completion.

### 6. Unlock highlight
- When a country, language, chapter, or next stage becomes newly available,
  briefly highlight the newly unlocked card.
- Do not open a modal.
- Do not require confirmation.
- Do not replay the unlock animation repeatedly after refresh.

### 7. Chapter / stage completion polish
- On completion, show a short completion state on the current card or
  progress area.
- Preserve existing return/navigation behavior.
- Do not add an intermediate blocking screen.

## Reduced motion

If `prefers-reduced-motion` is enabled, replace motion with immediate state
changes and a subtle opacity/color change only.

## Validation checklist (run before considering this done)

- [ ] Animations do not block controls (NEXT/BACK/retry always clickable).
- [ ] Rapid clicking does not create stale timers (audit every `setTimeout`
      used for animation state the same way `ChallengeScreen.jsx`'s
      `timersRef`/`clearTimers()` pattern already does).
- [ ] Animations do not replay repeatedly after refresh (unlock highlight,
      review/mastery chips need a "seen" flag, likely in `meta`, not just
      local component state).
- [ ] Mobile layout remains stable.
- [ ] Reduced-motion behavior verified.
- [ ] `npm run lint` and `npm run build` pass.

## Relevant existing code to reuse/extend (read before implementing)

- `src/index.css` — existing keyframes (`fadeIn`, `shake`, `flashFade`,
  `correctFade`, `correctScale`, `pipBlink`, `sqlStepPulse`,
  `sqlAnswerGlow`, `sqlUnlockGlow`, etc.) and CSS vars (`--accent`,
  `--accent2`, `--danger`, `--border2`).
- `src/screens/ChallengeScreen.jsx` — `screenEffect`, `showCorrectOverlay`,
  `schedule()`/`timersRef`/`clearTimers()` pattern for safe timer cleanup.
- `src/screens/WorldShuffleScreen.jsx` — simpler correct/wrong/next flow,
  no existing micro-animations yet.
- `src/components/RewardToast.jsx` — existing toast pattern, candidate to
  reuse/extend for "REVIEW CLEARED" / "MASTERY +1" chips instead of a new
  component.
- `src/utils/medals.js`, `src/utils/metadata.js` — where "newly unlocked" /
  "newly mastered" / "newly cleared" booleans are already computed
  (`newlyMastered`, stage-clear detection) — animations should trigger off
  these existing one-shot flags, not be re-derived from scratch.

## Implementation notes (filled in after implementing)

- **Items #6/#7 (unlock highlight, chapter completion polish) were already
  implemented for SQL PATH and TypeScript PATH** before this work started
  (`sqlUnlockNotice`/`typescriptUnlockNotice` + `.sql-new-unlock`/
  `.sql-chapter-complete` classes). Found and fixed a real bug while
  reviewing: `typescriptUnlockNotice` had no auto-clear timeout, so its
  highlight/banner stayed visible forever instead of ~1.8s.
- **Item #6 (unlock highlight) extended to WORLD QUEST**: `handleComplete`
  in `App.jsx` now diffs `getUnlockedIds()` before/after a stage clears to
  find the newly-unlocked country, stores it in `mapUnlockNotice` (auto-
  clears after 1.8s, never persisted to `meta`, so it can't replay after a
  refresh), and `MapScreen.jsx` renders a finite (3-iteration) pulsing ring
  around that marker via `.map-unlock-pulse`.
- **Items #1/#2 (correct/wrong micro feedback)**: reused the existing
  `screenEffect`/`feedbackCorrect`/`feedbackWrong` mechanism in
  `ChallengeScreen.jsx` rather than adding a parallel system. Added
  `.answer-correct-pop` (small scale pop) to the correct-feedback box.
  Softened the wrong-answer `shake` keyframe amplitude (+/-10px -> +/-4px)
  and the full-screen red flash opacity (0.22 -> 0.12) globally, satisfying
  "avoid harsh shaking or large red flashes" without removing the existing
  signal entirely. Added the same correct-pop treatment to
  `WorldShuffleScreen.jsx`, which previously had no micro feedback at all.
- **Item #3 (progress-dot activation)**: added to both `ChallengeScreen.jsx`
  and `WorldShuffleScreen.jsx`. Falls back to the existing continuous
  xp-bar when `questions.length > 12` so it stays usable with longer stages
  (SQL/TypeScript chapters already had their own dot/route UI from prior
  work and were left untouched).
- **Item #4 (content-only NEXT transition)**: the question-content
  container (`styles.content` in ChallengeScreen, `<main>` in
  WorldShuffleScreen) is now `key`-ed by the question identity with a
  `.content-enter` class. Re-keying causes a DOM remount of *only* that
  subtree on NEXT, which retriggers the CSS enter animation without any
  JS timer -- so there's no stale-timer risk from this change specifically.
  Existing timer-based effects (`screenEffect`, combo popup, etc.) already
  used the pre-existing `timersRef`/`clearTimers()` pattern in
  `ChallengeScreen.jsx` and were not changed.
- **Item #5 (review/mastery chips)**: reused `RewardToast` (added a
  `--chip` style variant) instead of a new component.
  - `medals.js` `recordQuestionMastery()` now also returns
    `questionNewlyMastered` (true only the first time a given question is
    added to the mastered set), distinct from `newlyMastered` (full-stage
    completion).
  - `App.jsx` `handleQuestionMastered` (regular WORLD QUEST path) and
    `recordShuffleOutcome` (WORLD SHUFFLE path) fire at most one chip per
    action, prioritizing MASTERY MEDAL > REVIEW CLEARED > MASTERY +1, so
    toasts never stack for the same answer.
  - Both signals are transition-based (computed from the state change at
    the moment it happens, not re-derived from steady-state data), so they
    cannot fire again on reload/sync/repeated completion by construction --
    no separate "seen" tracking was needed for these two.
  - No "REVIEW ROOM" screen exists in the codebase yet; the chip fires
    from WORLD SHUFFLE's existing review-clearing logic, which is the only
    place review items are currently resolved.
- Bug fix found along the way: `WorldShuffleScreen.jsx`'s `next()` sets an
  `advancingRef` guard to prevent double-advance, but never reset it if
  `onSaveRun` failed -- a single failed save would permanently disable the
  NEXT button for that question. Now resets the ref in the `catch` branch.
- Reduced motion: covered by the pre-existing global
  `@media (prefers-reduced-motion: reduce)` rule in `index.css`
  (`*, *::before, *::after { animation-duration: 0.001ms !important; ... }`),
  which automatically applies to every new keyframe/class added here.
- Validation run: `npm run lint` (0 errors, same 6 pre-existing warnings),
  `npm run build` (succeeds), `node scripts/validate-questions.mjs` (all
  structural checks pass, unaffected since no question data was touched).
