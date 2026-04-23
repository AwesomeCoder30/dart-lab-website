import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const navigationItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const highlightSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const sectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  items: z.array(z.string()).default([]),
  ctaLabel: z.string().optional(),
  ctaHref: z.string().optional(),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    siteUrl: z.string().url().optional(),
    navigation: z.array(navigationItemSchema),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    lead: z.string().optional(),
    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    secondaryCtaLabel: z.string().optional(),
    secondaryCtaHref: z.string().optional(),
    highlights: z.array(highlightSchema).default([]),
    sections: z.array(sectionSchema).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    authors: z.array(z.string()),
    publishDate: z.coerce.date(),
    category: z.enum(['Policy Brief', 'Research', 'Op-ed']),
    externalUrl: z.string().url().optional(),
    pdfPath: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'Leadership',
      'Advisor',
      'Collaborator',
      'Member',
      'Alumni',
    ]),
    positionTitle: z.string().optional(),
    school: z.string(),
    graduationYearLabel: z.string(),
    bioShort: z.string(),
    email: z.string().email().optional(),
    linkedinUrl: z.string().url().optional(),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  pages,
  publications,
  settings,
  team,
};
