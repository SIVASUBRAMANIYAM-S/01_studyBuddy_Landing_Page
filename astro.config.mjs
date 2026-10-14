import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studybuddy.vivodha.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
