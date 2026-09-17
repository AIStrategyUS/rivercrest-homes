import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tnhomecashoffer.com',
  output: 'static',
  integrations: [sitemap()],
  experimental: {
    contentLayer: true,
  },
});
