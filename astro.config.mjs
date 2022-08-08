import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://git.tech.rz.db.de', // my company's gitlab domain
  base: '/LeopoldHock/astro-on-gitlab', // path deriving from my user and repository name
  outDir: './public', // this is where gitlab pages expects the output
  publicDir: './static', // needs to be changed because it conflicts with where gitlab pages expects the build
});
