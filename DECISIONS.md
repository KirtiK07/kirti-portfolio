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
- **Voice agent demo not linked.** The hosted demo returned `FUNCTION_INVOCATION_FAILED` on
  2026-11-09. Add the link back in `index.html` once it's fixed.
- **Resume PDF not hosted.** It contains a phone number, so publishing it is the owner's call.
