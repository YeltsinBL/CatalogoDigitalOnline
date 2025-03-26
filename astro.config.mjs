// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output:'server',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@utils": "/src/utils",
        "@assets": "/src/assets",
        "@styles": "/src/styles",
        "@icons": "/src/icons",
        "@lib": "/src/lib",
        "@store": "/src/store"
      }
    }
  },
  integrations: [react()]
});