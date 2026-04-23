# DART Lab Website

Source-of-truth repository for rebuilding the DART Lab website from [`Downloads/Website plan.pdf`](../Downloads/Website%20plan.pdf).

This repository is structured for a coded build of the DART Lab site. It captures the information architecture, content schema, design constraints, and implementation plan needed to build and maintain the site in code.

## Project Goal

Build a highly professional, institutional website for DART Lab that:

- clearly explains what the organization does
- presents publications and programs in a credible, easy-to-scan way
- supports partnerships, recruitment, and outreach
- feels closer to a policy institute than a student club or startup

## Primary Reference

- Current site: `https://www.dartlabjtresearch.org`
- Design reference: `https://www.whitehouse.gov`

## Repository Layout

- `docs/project-brief.md` — distilled brief from the PDF
- `docs/sitemap.md` — top-level information architecture
- `docs/page-specs.md` — section-by-section page requirements
- `docs/content-models.md` — structured content definitions for code/CMS use
- `docs/design-system.md` — visual rules, tokens, and component guidance
- `docs/implementation-plan.md` — recommended tech stack and build phases
- `docs/webflow-build-checklist.md` — legacy checklist from the original brief
- `content/publications.csv` — starter import template for publications
- `content/team-members.csv` — starter import template for team members
- `assets/README.md` — expected asset inventory

## Required Pages

1. Home
2. Publications
3. Programs
4. Team
5. About
6. Get Involved
7. Contact

## Recommended Stack

- `Astro` for the site framework
- `TypeScript` for typed content and safer refactors
- `Tailwind CSS` for disciplined styling and fast iteration
- `Astro content collections` for publications and team data
- `React` only for small interactive components if needed
- `Vercel` or `Netlify` for deployment

## Immediate Next Steps

1. Confirm final DART Lab wordmark, colors, and approved imagery.
2. Replace placeholder content with real team, publication, and program data.
3. Scaffold the Astro app in this repo.
4. Implement the seven-page structure from `docs/page-specs.md`.
5. Add publication and team detail pages from structured content files.
6. Deploy a preview and review on desktop and mobile.

## Local Development

Once the Astro app is scaffolded, start it locally with:

```bash
./scripts/start-local.sh
```
