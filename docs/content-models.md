# Webflow CMS Content Models

The PDF explicitly requires CMS support for `Team Members` and `Publications`. Those collections are mandatory. A small set of optional helper collections is also included below to keep content maintainable.

## Required Collection: Publications

### Recommended Fields

- `name` — plain text
- `slug` — auto
- `publication_type` — option
  - Policy Brief
  - Research
  - Op-ed
- `summary` — plain text or rich text
- `authors_display` — plain text
- `primary_author` — reference to Team Members (optional)
- `co_authors` — plain text
- `publish_date` — date/time
- `external_url` — link
- `pdf_file` — file
- `featured` — switch
- `featured_order` — number
- `cover_image` — image (optional)
- `institution_tags` — plain text
- `seo_description` — plain text

### Notes

- support both PDFs and external links
- do not require a cover image
- if Webflow reference limits become awkward, `authors_display` can remain the system of record for launch

## Required Collection: Team Members

### Recommended Fields

- `name` — plain text
- `slug` — auto
- `category` — option
  - Leadership
  - Advisor
  - Collaborator
  - Member
  - Alumni
- `position_title` — plain text
- `school` — plain text
- `graduation_year_label` — plain text
- `short_label` — plain text
- `bio_short` — plain text
- `bio_full` — rich text
- `headshot` — image
- `linkedin_url` — link
- `email` — email
- `display_order` — number
- `featured_on_team_page` — switch
- `active` — switch

### Card Mapping

- visible card title: `name`
- visible card subtitle: `short_label`
- leadership title line: `position_title`
- expanded profile body: `bio_full`

## Optional Collection: Programs

Use this only if the Programs page needs to be maintained by non-designers after launch.

Suggested fields:

- `name`
- `slug`
- `summary`
- `audience`
- `description`
- `cta_label`
- `cta_url`
- `display_order`

## Optional Collection: Partners

Useful for the homepage and About page logo bands.

Suggested fields:

- `name`
- `slug`
- `logo`
- `website_url`
- `display_order`
- `featured`

