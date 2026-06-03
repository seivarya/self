# sitey

> [!NOTE]
> the site is highly customized to a strict monospace styling, utilizing raw css variable maps. modifying font layouts or globally overriding component scripts requires carefully handling the custom mdx overrides registry.

## table of contents
- [architecture & build pipeline](#architecture--build-pipeline)
- [project structure](#project-structure)
- [features](#features)
- [component breakdown](#component-breakdown)

***

## architecture & build pipeline
at the foundation, astro compiles all routes under `src/pages/` into pre-rendered static HTML and CSS files. content collections are loaded during compilation, mapping Markdown/MDX directories into structured datasets.

1. **static compilation**: during the build phase (`astro build`), astro compiles all pages into optimized static outputs.
2. **content resolution**: `src/content.config.ts` defines schema properties for the `notes` and `writings` collections, validating headers using zod.
3. **routing hydration**: dynamic slug matching inside `src/pages/content/` resolves individual collection IDs via `getStaticPaths()`, compiling posts into renderable HTML components.
4. **webring integration**: `src/components/webring.astro` directly imports the member list from `src/content/data/webring.json`, rendering each site as a keyboard-key styled link.

> [!NOTE]
> to prevent external layout flashes or clock sync delays, critical header scripts and clocks utilize the `is:inline` tag to execute instantly as the browser parses the HTML tree.

## project structure
```text
sitey/
├── public/                    # static assets served as-is
│   ├── 404.webp               # custom 404 page graphics
│   └── robots.txt             # search indexing configurations
├── src/
│   ├── assets/                # visual resources (clock.svg)
│   ├── components/            # reusable page components
│   │   ├── mdx/               # customized mdx element wrappers
│   │   │   ├── overrides.ts   # element mapping definitions
│   │   │   └── ...
│   │   ├── artbox.astro       # art showcase frames
│   │   ├── cleanindex.astro   # minimal post listing rows
│   │   ├── clock.astro        # ticking client-side clock
│   │   ├── footer.astro       # site footer with loading animation
│   │   ├── header.astro       # navigation header with theme toggles
│   │   ├── navigation.astro   # navigation links component
│   │   ├── post.astro         # blog post layout wrap
│   │   ├── projectbox.astro   # github repository visual cards
│   │   ├── socials.astro      # SVG social icon links
│   │   └── webring.astro      # styled peer webring list
│   ├── content/               # markdown / mdx collection directories
│   │   ├── arts/              # art images
│   │   ├── data/              # local json data caches
│   │   │   └── webring.json   # peer webring member list
│   │   ├── notes/             # technical blogs and notes
│   │   └── writings/          # personal logs
│   ├── layouts/
│   │   └── home.astro         # global page layout wrap
│   ├── pages/                 # file-based routing entrypoints
│   │   ├── content/           # dynamic post routes
│   │   │   ├── notes/         # dynamic notes resolver ([slug].astro)
│   │   │   └── writings/      # dynamic writings resolver ([slug].astro)
│   │   ├── 404.astro          # error page
│   │   ├── arts.astro         # art gallery page
│   │   ├── index.astro        # profile / bio page
│   │   ├── notes.astro        # list page for notes
│   │   ├── projects.astro     # projects showcase page
│   │   └── writings.astro     # list page for writings
│   ├── content.config.ts      # content collections configurations
│   ├── env.d.ts               # environment type variables
│   └── styles/
│       ├── global.css         # variables, fonts, and base resets
│       └── mdx.css            # markdown specific styling
├── astro.config.mjs           # framework configurations and plugins
├── package.json               # packages and automation scripts
└── tsconfig.json              # typescript settings
```

## features
- **custom selection overlay**: features a custom, transparent text selection tint (`--color-selection`) dynamically shifting per theme for premium readability.
- **persisted global state**: utilizes astro view transitions (`<ClientRouter />`) to retain clock and footer states seamlessly during page changes.
- **keyboard-key webring tags**: renders webring links styled as interactive keyboard buttons with custom translational shadows on hover.
- **custom mdx elements**: replaces standard markdown HTML parsing with custom components mapping headings, blockquotes, and visual links to modular classes.
