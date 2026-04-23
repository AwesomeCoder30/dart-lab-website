# DART Lab Website

Source-of-truth repository for rebuilding the DART Lab website from [`Downloads/Website plan.pdf`](../Downloads/Website%20plan.pdf).

This repository is structured for a Webflow-first build. It does not assume a coded frontend as the final production system. Instead, it captures the information architecture, CMS schema, content templates, and design constraints needed to execute the site cleanly and consistently.

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
- `docs/content-models.md` — Webflow CMS collection definitions
- `docs/design-system.md` — visual rules, tokens, and component guidance
- `docs/webflow-build-checklist.md` — implementation checklist for the site build
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

## Immediate Next Steps

1. Confirm final DART Lab wordmark, colors, and approved imagery.
2. Fill the CSV templates with real team and publication data.
3. Build the CMS collections in Webflow from `docs/content-models.md`.
4. Create the seven-page structure and implement sections from `docs/page-specs.md`.
5. Review typography, spacing, and navigation against `docs/design-system.md`.

