// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://sahilkumbhar.pages.dev';

export default defineConfig({
  site,
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
