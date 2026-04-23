import { getCollection } from 'astro:content';

export async function getSiteSettings() {
  const settings = await getCollection('settings');
  const site = settings.find((entry) => entry.id === 'site');

  if (!site) {
    throw new Error('Site settings are missing.');
  }

  return site;
}

export async function getPage(slug: string) {
  const pages = await getCollection('pages');
  const page = pages.find((entry) => entry.id === slug);

  if (!page) {
    throw new Error(`Page content "${slug}" is missing.`);
  }

  return page;
}
