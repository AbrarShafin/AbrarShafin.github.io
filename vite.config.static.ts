// Static build config for GitHub Pages.
// Usage: bun run build:static  (output in ./dist)
// For a project page (username.github.io/repo), set BASE_PATH=/repo/
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env["BASE_PATH"] ?? "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
