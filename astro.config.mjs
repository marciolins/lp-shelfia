import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.PUBLIC_SITE_URL || "https://www.shelfia.com.br",
  trailingSlash: "never",
  devToolbar: { enabled: false },
});
