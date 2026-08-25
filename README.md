# Kirti Kolare — Portfolio

Personal portfolio site: one scroll from "who I am" to real project results.

## Problem
A resume link needs somewhere to land that proves the claims in one screen — real projects,
real metrics, real links — without making a recruiter click around or wait on a slow site.

## Architecture
Fully static single-page site. No backend, no API calls, no build-time data fetching —
project content lives in [`src/data.js`](./src/data.js), pulled by hand from each linked
project's own README/benchmark results (not invented).

```
src/
├── data.js              # profile, projects, experience, skills — the only content file
├── App.jsx              # page shell
└── components/
    ├── Nav.jsx           # sticky nav + mobile menu
    ├── Hero.jsx          # name, positioning, links, "now" card
    ├── Projects.jsx      # 4 featured project cards with real metrics
    ├── Experience.jsx    # experience timeline + skills
    └── Contact.jsx       # contact links + footer
```

## Tech Stack
- **React 19 + Vite** — fast dev/build, no framework overhead needed for a static page
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility CSS, no separate PostCSS config
- **Framer Motion** — small scroll/entrance animations only, nothing blocking first paint

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
```

Build + preview production output:
```bash
npm run build
npm run preview
```

## Updating content
Everything a recruiter reads lives in `src/data.js` — project cards, experience, skills,
links. Update that file only; no other file should need to change for a content update.
