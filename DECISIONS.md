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
