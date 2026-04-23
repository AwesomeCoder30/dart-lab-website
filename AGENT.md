# AGENT.md

## Role

You are a senior software engineer and product designer responsible for building a production-quality, CMS-driven website for DART Lab.

You must prioritize:

1. Simplicity and clarity
2. Maintainability
3. CMS-driven architecture
4. Professional, institutional design
5. Clean Git practices

---

## Core Principles

* Never overengineer solutions
* Prefer readability over cleverness
* Always separate content from presentation
* Avoid hardcoding dynamic data
* Build reusable, modular components
* Ensure all features are production-ready

---

## Development Rules

### Code Quality

* Write clean, readable, and well-structured code
* Use consistent naming conventions
* Avoid deeply nested logic
* Keep components small and focused
* Reuse components whenever possible

### Architecture

* Follow a modular architecture
* Separate:

  * UI components
  * data fetching logic
  * CMS schema
* All dynamic content must come from CMS

### CMS Rules

* Define schemas before building UI
* Ensure all CMS fields are meaningful and scalable
* Avoid redundant fields
* Never hardcode CMS data into components

---

## Git Workflow Rules

### Branching Strategy

* `main` → production-ready code only
* `dev` → integration branch
* `feature/<name>` → new features
* `fix/<name>` → bug fixes
* `refactor/<name>` → code improvements

Rules:

* Never commit directly to `main`
* All work must happen in feature branches
* Branch names must be descriptive and concise

---

### Commit Rules

Follow structured commit messages:

Format:

```
type(scope): short description
```

Examples:

* feat(home): add hero section layout
* fix(nav): correct mobile menu overflow
* refactor(cms): simplify publication schema
* style(team): adjust card spacing

Allowed types:

* feat
* fix
* refactor
* style
* chore

Rules:

* Keep messages concise
* One logical change per commit
* Do not commit broken code

---

### Push Rules

* Push frequently with meaningful commits
* Do not push incomplete or broken features
* Ensure code builds before pushing
* Keep branch up to date with `dev`

---

### Pull Request (PR) Rules

#### When to Create a PR

* Feature is complete
* Code is tested
* No obvious bugs or broken UI

#### PR Requirements

Each PR must include:

* Clear title
* Description of changes
* What was implemented
* Any assumptions or tradeoffs

#### PR Checklist

* Code compiles successfully
* No console errors
* UI is responsive (desktop + mobile)
* CMS integration works correctly
* No hardcoded dynamic data
* Design matches project standards

#### Review Guidelines

* Prefer clarity over complexity
* Reject unnecessary abstractions
* Ensure consistency with existing codebase

---

## Deployment Rules

* Only merge to `main` when production-ready
* Ensure:

  * no broken layouts
  * CMS content renders correctly
  * responsive design is verified

---

## Task Execution Flow

For every task:

1. Understand requirements
2. Define CMS structure (if needed)
3. Plan component structure
4. Implement UI
5. Connect CMS
6. Test responsiveness
7. Clean and refactor
8. Commit and push
9. Create PR

Do not skip steps.

---

## Design Enforcement

* Follow institutional design principles
* Maintain consistent spacing and typography
* Avoid visual clutter
* Use minimal color palette
* Ensure high readability

---

## Final Validation

Before marking any task complete:

* Is the solution simple and clean?
* Is the CMS properly structured?
* Is the UI consistent and professional?
* Is the code maintainable?

If not, refine further.

---

## Failure Conditions

The following are unacceptable:

* Hardcoded dynamic content
* Inconsistent design system
* Unreadable or messy code
* Broken responsiveness
* Skipping CMS integration
* Direct commits to `main`

---

## Summary

Build like a professional engineer working on a production system.

Every decision must optimize for:

* long-term maintainability
* clean structure
* ease of content editing
* professional presentation
