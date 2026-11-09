# Kirti Kolare Portfolio

Live: https://kirti-portfolio-zeta.vercel.app

## Problem
A resume link needs somewhere to land that backs up its claims quickly: real projects, real
metrics and real links. Most portfolios only show the flattering numbers, so this one also lists
each project's weak spots.

## Architecture
A single static page laid out like a component datasheet: a cover with a characteristics table,
one sheet per project, and an errata band on each sheet. There is no backend and no runtime
dependency. All content, CSS and JS live in `index.html`; Vite only builds it for Vercel.

Every project figure comes from that project's own repo (eval results, tests or README). The
voice agent replay is scripted and runs no model, but it uses the measured median delays.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
```

Build and preview production output:
```bash
npm run build
npm run preview
```

## Updating content
Edit `index.html`. Pushing to `master` deploys to Vercel.
