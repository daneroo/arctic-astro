// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  i18n: {
    defaultLocale: "fr", // Note: If changing this, also update src/pages/index.astro redirect
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
