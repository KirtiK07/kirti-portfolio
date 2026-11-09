# Kirti Kolare Portfolio

Live: https://kirti-portfolio-zeta.vercel.app

## Problem
A resume link needs somewhere to land that backs up its claims quickly: real projects, real
metrics and real links. Most portfolios only show the flattering numbers, so this one also lists
each project's weak spots.

## Architecture
A single static page: a small 3D universe built with Three.js, loaded from a pinned CDN URL.
The star is the About section, and each planet is another section (projects, experience,
skills, education, contact), with the asteroid belt holding smaller projects. The projects
planet has six creature residents, one per project. Selecting anything flies the camera to it
and opens a panel with tabs, and each tab changes the scene: a moon or crystal group lights
up, or the creature waves, jumps, talks or shrinks. The page itself never scrolls. All
content, CSS and JS live in `index.html`; Vite only builds it for Vercel.

Devices without WebGL still get the section buttons and panels. Reduced-motion users get a
still view.

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
Content is in the `PROJECTS` and `SECTIONS` objects in `index.html`. Pushing to `master`
deploys to Vercel.
