# Implementation Plan

## Recommended Stack

### Primary Recommendation

- `Astro`
- `TypeScript`
- `Tailwind CSS`
- `MDX / Markdown + JSON or YAML`
- `Astro content collections`
- optional `React` islands for limited interactivity
- deploy to `Vercel` or `Netlify`

## Why This Stack Fits This Project

This site is:

- content-heavy
- mostly static
- institution-facing
- performance-sensitive
- not dependent on logged-in user flows
- not dependent on frequent realtime data

That makes Astro a better fit than a heavier fullstack app framework.

Astro’s docs explicitly position content collections as the best way to manage structured content in an Astro project, with type safety and schema validation, and note that build-time collections are the best fit when performance is critical and the content is relatively static. Astro also documents its islands architecture as rendering most of the page as fast static HTML, adding JavaScript only where interactivity is actually needed. That maps well to this site: most pages should be static, while a few UI pieces like a team modal or filter controls may need interaction. Sources: Astro content collections docs and Astro islands docs.

## Why Not Start With Next.js

Next.js is a strong choice, and its App Router is mature and current. But for this specific site, starting with Next.js adds more complexity than benefit unless one of these becomes true:

- you need a true CMS admin panel immediately
- you need authenticated workflows
- you need preview/publishing workflows for nontechnical editors
- you expect the site to become a broader web app

If those become requirements, the best upgrade path is:

- `Next.js + Payload`

Payload’s docs describe it as a Next.js fullstack framework that gives you an admin panel, database schema, APIs, auth, and media handling. That is compelling if DART Lab later needs nontechnical editing workflows, live preview, or a real editorial backend. It is not the lightest way to launch the first version of an institutional site.

## Recommended Content Model In Code

### Keep content local for v1

Use local structured content in the repo for launch:

- `src/content/publications/*.md`
- `src/content/team/*.md`
- `src/content/site/*.json`

This gives:

- version control for all content
- easy PR review
- no CMS maintenance overhead
- strong typing with schema validation

### Add a CMS only if needed

If the team later wants a nontechnical editing interface, add one after launch rather than before launch.

Preferred future migration path:

1. Keep Astro frontend
2. Add a headless CMS only when editing needs justify it
3. If an integrated app/admin stack is needed, reassess with `Next.js + Payload`

## Styling Recommendation

- `Tailwind CSS` for layout, spacing, and consistency
- avoid a component library for v1
- hand-build a small design system that matches the institutional tone

This avoids forcing startup-style defaults into a site that needs to look like a policy institute.

## Deployment Recommendation

### Best default

- `Vercel`

Reason:

- straightforward Astro deployment
- fast preview URLs
- simple GitHub integration

### Equivalent option

- `Netlify`

Either is fine for this project.

## Build Phases

### Phase 1: Foundation

- scaffold Astro + TypeScript + Tailwind
- set typography, spacing, colors, and layout primitives
- define content collections for team and publications

### Phase 2: Core Pages

- Home
- Publications
- Programs
- Team
- About
- Get Involved
- Contact

### Phase 3: Detail Views

- publication detail pages
- team member detail pages or modal overlays

### Phase 4: Polish

- responsive QA
- SEO metadata
- image optimization
- final copy cleanup

## Practical Next Steps

1. Approve the stack: `Astro + TypeScript + Tailwind + content collections`.
2. Convert the current CSV placeholders into launch content.
3. Scaffold the app in this repo.
4. Build the layout system and top navigation first.
5. Build the homepage and publications page before the rest.
6. Add deployment and preview review.

