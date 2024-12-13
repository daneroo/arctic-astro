// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
