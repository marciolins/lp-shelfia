import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
  site: process.env.PUBLIC_SITE_URL || "https://lp.shelfia.com.br",
  trailingSlash: "never",
  devToolbar: { enabled: false },
});
