# Code Quest Context

## App Overview

Code Quest is a React + Vite learning game. The app uses a retro pixel-game style where users choose countries on a world map, select a programming language, and solve fill-in-the-blank coding quizzes.

Main areas:

- `src/App.jsx`: screen routing, local progress, Supabase sync, auth wiring.
- `src/screens/MapScreen.jsx`: world map, country unlock state, stage entry animation.
- `src/screens/LanguageScreen.jsx`: country detail and language selection.
- `src/screens/ChallengeScreen.jsx`: quiz gameplay, hearts, score, combo, clear/game-over flow.
- `src/screens/ReferenceScreen.jsx`: Python reference viewer.
- `src/screens/ProgressScreen.jsx`: completion and score summary.
- `src/data/challenges.js`: Python quiz data.
- `src/data/js_challenges.js`: JavaScript quiz data.
- `src/data/countries.js`: country metadata and progression order.
- `src/lib/sync.js`: Supabase progress load/save/merge.

## Current Local Setup Notes

- The repo is `https://github.com/yuto-labs/code-quest`.
- `npm run build` succeeds.
- `npm run lint` passes with 0 errors (2 pre-existing warnings in App.jsx about exhaustive-deps, unrelated to game logic).
- The source contains visible mojibake in Japanese strings and emoji-like labels. Treat that as an existing issue, not intentional copy.

## Architecture Notes

### Country System
- `src/data/countries.js`: 47 total countries (20 G20 quiz countries + 27 OECD display-only countries).
- G20 countries (JP US FR BR AU EG IN RU CN DE GB KR CA IT MX SA AR TR ID ZA): have quiz content, follow level-based unlock chain.
- OECD countries (AT BE CL CO CR CZ DK EE FI GR HU IS IE IL LV LT LU NL NZ NO PL PT SK SI ES SE CH): display-only, always locked, no quiz questions. Added to map for visual completeness.
- `src/utils/progress.js` `getUnlockedIds()` only considers countries with content in `AVAILABLE_STAGES`; OECD countries are safely ignored by all unlock/progress logic.

### Background Images
- G20 countries: `/public/G20/[FILE].png` via `FILE_MAP` in `WireframeBackground.jsx` (note: CN maps to `CH.png` for historical reasons).
- OECD countries: `/public/OECD/[ID].png` — filename matches country ID exactly (e.g. AT.png, BE.png).
- `src/components/WireframeBackground.jsx` checks G20 first, then OECD, then renders a dark fallback.

### Map (MapScreen.jsx)
- `ISO_MAP`: maps numeric ISO 3166-1 codes → country IDs. Covers all 47 countries.
- `REVERSE_ISO`: inverse lookup for marker hover highlighting.
- `ZoomableGroup` from `react-simple-maps` uses SVG transforms (not CSS transforms), so it does NOT affect `position:fixed` HUD elements.
- `touchAction:'none'` on `mapWrap` gives d3-zoom full control of touch pan/pinch on mobile.
- `viewport` meta has `maximum-scale=1.0, user-scalable=no` (in `index.html`) to disable browser-level pinch zoom on mobile.
- `--vv-offset` CSS variable (set by App.jsx VisualViewport listener) compensates for iOS software keyboard pushing the visual viewport. **Only applied on touch devices** in MapScreen — desktop uses `env(safe-area-inset-top, 0px)` only to avoid HUD drift on browser zoom.
- Desktop tooltip: `position:fixed`, bottom-center-right (`left: calc(50% + 60px)`, `bottom: 72px`).
- Mobile tooltip: `position:fixed`, bottom-center (`left: 50%`, `bottom: 64px`).

### Sync & Lives
- `src/utils/metadata.js`: `__cq_meta` packed into Supabase `progress` JSON column. `mergeAttempts()` uses revision numbers (higher wins); same revision → newer timestamp wins, lives can only decrease.
- `src/App.jsx`: `latestRef` pattern — ref updated in `useEffect` after every render; async callbacks read it for fresh state. `saveRevisionRef` (monotonic counter) prevents superseded debounced cloud writes.
- `getInitialLives()`: returns `MAX_LIVES` when attempt is missing, completed, **or failed** (so returning to a failed challenge gives fresh lives, not immediate game-over).

### ChallengeScreen
- `initialLives` prop sets starting hearts; `onLivesChange` saves to `meta.attempts[attemptId]`; `onRestart` resets attempt to MAX_LIVES.
- Both clear screen and game-over screen use `position:'relative', zIndex:1` on the content div so `WireframeBackground` (position:absolute) doesn't overlay interactive elements.

## Codex CLI Setup Note

Codex CLI was installed locally after the default Windows PowerShell 5.1 installer failed on `RuntimeInformation.OSArchitecture`.

The working Codex CLI executable is:

```text
C:\Users\yuto1\AppData\Local\OpenAI\Codex\bin\f1c7ee7a13db5fed\codex.exe
```

It reports:

```text
codex-cli 0.140.0-alpha.2
```

The user PATH was updated so this Codex CLI bin path comes before the broken WindowsApps `codex.exe`. Open a new CMD or PowerShell before testing `codex`.

Recommended check:

```cmd
cd "C:\Users\yuto1\OneDrive\デスクトップ\code-quest"
codex --version
codex login
codex
```
