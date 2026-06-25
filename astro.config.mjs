// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://seivarya.in",
	integrations: [// theme isn't req. for now ig
		mdx(), sitemap()],

	markdown: {
		shikiConfig: {
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-macchiato",
			},
		},
	},
	vite: {
		build: {},
	},
	prefetch: true,
	output: "static",
	devToolbar: {
		enabled: false
	}
});
