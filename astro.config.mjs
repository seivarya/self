// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://seivarya.in",
    integrations: [// theme isn't req. for now ig
    mdx(), sitemap()],

    markdown: {
        shikiConfig: {
            theme: "catppuccin-macchiato",
        },
    },
    vite: {
        build: {},
    },

    adapter: cloudflare(),
    prefetch: true,
    output: "static",
    devToolbar: {
        enabled: false
    }
});
