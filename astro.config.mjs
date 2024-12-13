// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  i18n: {
    defaultLocale: "fr", // Note: If changing this, also update src/pages/index.astro redirect
    locales: ["en", "fr"],
    routing: {
      // making this true works, but causes a 2 second delay to redirect / to /{defaultLocale}
      // so instead we set it to false and made a custom index.astro page to do the redirect
      prefixDefaultLocale: false,
    },
  },
});
