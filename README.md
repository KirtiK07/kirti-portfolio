# Kirti Kolare Portfolio

Live: https://kirti-portfolio-zeta.vercel.app

## Problem
A resume link needs somewhere to land that backs up its claims quickly: real projects, real
metrics and real links. Most portfolios only show the flattering numbers, so this one also lists
each project's weak spots.

## Architecture
A single static page: a live 3D solar system built with Three.js, loaded from a pinned CDN URL.
Each planet is a project, the star is the about and contact section, and the asteroid belt holds
the smaller projects. Selecting one flies the camera to it and opens a panel with tabs, so the page
itself never scrolls. All content, CSS and JS live in `index.html`; Vite only builds it for Vercel.

`public/datasheet.html` is the plain version, for slow devices and screen readers. Devices without
WebGL still get the project buttons and panels.

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
Project content is in the `PROJECTS` array in `index.html`. Keep `public/datasheet.html` in step
with it. Pushing to `master` deploys to Vercel.
