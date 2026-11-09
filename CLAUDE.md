# kirti-portfolio — CLAUDE.md

## What this project is
Kirti Kolare's personal portfolio site — the page a recruiter lands on after clicking the
resume/LinkedIn link. One screen: a 3D solar system where 6 planets are projects with real benchmarked metrics
pulled from their own repos, plus other builds, experience, and contact. Replaces the old
`KirtiK07/Portfolio` repo/site.

## Stack
Single static `index.html` (content, CSS and JS inline) using Three.js from a pinned CDN URL, built by Vite. Plain version in `public/datasheet.html`. No backend. Deployed on Vercel.

## Workflow rules (inherited from parent workspace)
- Work in stages: plan → scaffold → build → test → document → deploy.
- Stop and summarize between stages before continuing.
- No stage is "done" without passing tests written alongside the code (not after).
- No hardcoded secrets — this project has none (fully static, no API calls).
- Keep DECISIONS.md updated in plain language for any non-obvious technical choice.
- README.md must cover: problem, architecture, how to run.
- Git identity for this repo is set locally (not global) as:
  ```
  git config user.name "Kirti Kolare"
  git config user.email "kirtikolare15@gmail.com"
  ```

## Current stage
done — pushed to `KirtiK07/kirti-portfolio`, deployed to Vercel, live at
https://kirti-portfolio-zeta.vercel.app, and linked from the resume. Old `KirtiK07/Portfolio`
repo archived.

## Open questions
- Custom domain vs. default `*.vercel.app` URL — none requested, using Vercel default for now.
