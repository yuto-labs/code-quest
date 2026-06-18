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
- `npm run lint` currently fails with React lint errors around updating refs during render, plus a few unused variables and `process` in `vite.config.js`.
- The source contains visible mojibake in Japanese strings and emoji-like labels. Treat that as an existing issue, not intentional copy.

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
