import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sriram-nuthi.web.app",
  output: "static",
  outDir: "./dist",
  integrations: [mdx(), sitemap()],
});
