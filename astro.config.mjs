import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Troque pelo dominio final antes do deploy para canonical, sitemap e RSS.
export default defineConfig({
  site: 'https://devjunior.io',
  integrations: [
    mdx(),
    sitemap()
  ],
  output: 'static'
});
