import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://extraspecialstudio.co.uk",
  output: "static",
  integrations: [sitemap()],
});
