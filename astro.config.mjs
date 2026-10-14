import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studybuddy.vivodha.com',
  // Single-page marketing site with one small global stylesheet: inlining it
  // removes a render-blocking request entirely (Lighthouse measured ~350ms
  // LCP/FCP savings from this specific request) rather than just deferring it.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
