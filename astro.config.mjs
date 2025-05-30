import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://noto.stki.org',
  integrations: [tailwind(), preact(), sitemap()],
  redirects: {
      '/comments': {
        status: 302,
        destination: '/activity2023'
      },
      '/sitemap.xml': {
        status: 302,
        destination: '/sitemap-0.xml'
      }
  }
});
