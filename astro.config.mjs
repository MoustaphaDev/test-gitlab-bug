import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: 'https://git.tech.rz.db.de/LeopoldHock/astro-on-gitlab', // my company's gitlab domain
  outDir: './public', // this is where gitlab pages expects the output
  publicDir: './static', // needs to be changed because it conflicts with where gitlab pages expects the build
});
