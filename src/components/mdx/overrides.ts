// For basic styling, /styles/mdx.css will do just fine! Using custom component overrides
// for standard HTML elements (h1-h6, blockquote, etc.) strips away compiler-generated
// attributes (like heading IDs for anchor links). We keep this object empty for now.

import Link from "./hyprlink.astro";

export const mdxOverrides = {
	a: Link
};
