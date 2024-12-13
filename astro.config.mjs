// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  // Content collections are stable in Astro 5.x
  // If we encounter issues, we might need to enable:
  // experimental: { contentCollections: true }
});
