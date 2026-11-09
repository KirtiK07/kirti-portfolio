# Decisions

## Why a new repo instead of restructuring the old `Portfolio` repo
The old repo/site was a generic template-feeling design with no README and stale content.
Rather than editing it in place, this is a clean rebuild in a new repo (`kirti-portfolio`)
so the old one can be cleanly archived once this one is live, and the new repo's history
starts from real, intentional commits.

## Why the same stack as the old portfolio (React + Vite + Tailwind + Framer Motion)
No reason to relitigate a good stack choice — it's fast, modern, and already what the resume
lists under "Languages & Frameworks". Tailwind v4's Vite plugin (`@tailwindcss/vite`) replaces
the old PostCSS config entirely, so setup is simpler than the previous version of this stack.

## Content structure
Followed `GitHub_Profile_Revamp_Plan.md` §5 directly: hero with links, featured projects
(pulling real one-liners + metrics from each project's own README, not invented numbers),
experience timeline, "now" line, contact. Kept to one scroll — no separate routed pages —
because the plan is explicit that recruiters don't scroll/click past a first screen.

## Which 4 projects are featured
llm-cost-router and voice-triage-agent (the plan's own priority pick + voice agent build,
both benchmarked) plus QueryPal and CodeSense AI (the two existing projects with the
strongest, most concrete results). SchemaCraft and the book-rental/food-recommendation
projects were left off the homepage to keep it to one screen — all are still linked from
GitHub itself.

## Dark-only theme, no light/dark toggle
Single deliberate dark theme (slate + teal accent) rather than a toggle. Keeps the visual
design coherent and cuts scope — a toggle adds a second palette to maintain for no signal
value on a project like this.

## Google Fonts import order
`@import url(fonts...)` has to come before `@import "tailwindcss"` in `index.css` — a plain
CSS rule (`@import` must precede all other rules) that Tailwind's own compiler still enforces
and warns on if violated.

## November 2026 redesign: static datasheet page
Replaced the React page with one static `index.html`. This supersedes the stack, featured-project
and dark-only decisions above.

- **No React, Tailwind or Framer Motion.** A page with one small interaction doesn't need them, and
  plain HTML renders without any JS. Vite stays only so the existing Vercel project settings keep
  working unchanged.
- **Six featured projects, each with errata.** The repos already publish their weak numbers, so the
  page leads with that instead of hiding it. Candor joined the featured set.
- **Light and dark themes.** The theme follows the visitor's system setting, with a toggle.
- **Voice agent "worst of 5" instead of p95.** The repo's p95 recovery (3,155 ms) comes from
  extrapolating over 5 samples and exceeds the slowest real run (2,800 ms), so the page shows the
  observed worst case.
- **Voice agent demo marked offline.** The hosted demo returned `FUNCTION_INVOCATION_FAILED` on
  2026-11-09. Remove "(currently offline)" from both pages once it's fixed.
- **Public resume has no phone number.** `public/Kirti-Kolare-Resume.pdf` is a copy with the number
  deleted from the file, not covered up. Remake it the same way whenever the resume changes.

## November 2026: 3D solar system
The datasheet page read as dull, so the home page is now a one-screen 3D solar system. This
supersedes the static layout and light/dark theme decisions in the redesign above.

- **Three.js from a pinned CDN build (0.158.0).** It is the last convenient version with a plain
  script build, so the page stays one file with no bundling. A move to ES modules is only needed if
  the version has to change.
- **Tabs instead of scrolling.** The metrics and errata all stayed. They moved into a panel so the
  page fits one screen, with the errata tab marked in yellow so it stays easy to find.
- **Planet features mean something.** For example, QueryPal has 16 satellites for its 16 safety
  tests. Planet size and orbit carry no meaning.
- **Dark only.** The subject is space, so a light theme would not suit it.
- **Plain version kept at `/datasheet.html`.** It serves screen readers and slow devices. Devices
  without WebGL fall back to the buttons and panels, and reduced-motion users get a still view.

## November 2026: sections as planets, projects as creatures
The owner asked for a more dynamic universe and no plain version. This supersedes the
"one planet per project" and "plain version kept" decisions above.

- **Plain version removed** at the owner's request. Devices without WebGL still get the
  section buttons and panels, so all content stays reachable.
- **Every section is a planet.** Experience has one moon per internship, Skills has one crystal
  colour per group, Education has one satellite per chapter, and Contact has a beacon. The
  matching tab lights up its moon, crystals or satellite.
- **Projects are creatures** standing on the projects planet. Their features carry meaning
  (QueryPal has 16 eyes for its 16 safety tests, Candor's halo has 3 gold beads for its 3
  fact-check steps). Tabs change what the creature does, and Errata makes it shrink and look
  away, so weak spots still get their own visible moment.
- **Close-up camera uses the planet's surface normal as "up"**, so a resident stands upright on
  screen wherever it is on the planet.
- **Type:** Cormorant Garamond for headings, Jost for text, IBM Plex Mono for small labels.
- **Three distant galaxies** are decorative only. They hold no content.
