// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Base path must match the GitHub repo name for project pages (e.g. /las-chicas).
const base = process.env.PUBLIC_BASE_PATH ?? '/las-chicas';
const siteRoot = process.env.PUBLIC_SITE_URL ?? 'https://YOUR_USERNAME.github.io';

// https://astro.build/config
export default defineConfig({
  site: base === '/' ? siteRoot : `${siteRoot}${base}`,
  base,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
