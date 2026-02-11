import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  })],
  site: 'https://dshakers.github.io',
  base: '/perito-gabinete-web',
  output: 'static',
});
