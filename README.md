# CE Digital Toolbox

This is a SvelteKit static website for the CE Digital Toolbox. The project is organised like a small theme: content files are separate from shared layout, and the global header and footer have their own clear files.

## Main Folders

```text
src/
├── lib/
│   ├── content/           # Edit website text, modules, sectors and tool cards here
│   ├── theme/             # Edit the global header and footer here
│   └── components/        # Reusable page building blocks
├── routes/                # Website pages and page templates
└── app.css                # Global colours, fonts, spacing and shared styles

static/
├── downloads/             # PDF files served as public downloads
├── images/                # Sector package images
└── logos/                 # Footer logos
```

## Where To Edit Common Things

Global header, header logo and navigation:

```text
src/lib/theme/SiteHeader.svelte
src/lib/content/site.js
static/logos/
```

Global footer and contact email:

```text
src/lib/theme/SiteFooter.svelte
src/lib/content/site.js
```

Home page text:

```text
src/lib/content/home.js
```

Journey module cards and module pages:

```text
src/lib/content/modules.js
```

Sector package cards:

```text
src/lib/content/sectors.js
static/images/
```

Sector package pages:

```text
src/lib/content/sectors.js
src/lib/content/sector-page.js
src/routes/sectors/[slug]/
```

Catalogue/resource cards and resource subpages:

```text
src/lib/content/resources.js
```

Catalogue page labels and intro text:

```text
src/lib/content/library-page.js
```

Shared module page labels:

```text
src/lib/content/module-page.js
```

Colours, fonts and shared visual style:

```text
src/app.css
```

## Add A New Resource Page

1. Open:

```text
src/lib/content/resources.js
```

2. Copy one existing resource block and change the `id`, `cardNumber`, `slug`, title, description, taxonomy fields, page text and tool link.

The catalogue filters are created automatically from these resource records, so new sectors, years, languages or providers appear without editing another file.

## Add A New Module

1. Add the module PDF to:

```text
static/downloads/modules/
```

2. Open:

```text
src/lib/content/modules.js
```

3. Copy one existing module block and change the text, slug and PDF path.

SvelteKit will automatically create the matching module page from the slug.

## Replace Sector Images

Add images to:

```text
static/images/
```

Then update the matching `image` and `imageAlt` values in:

```text
src/lib/content/sectors.js
```

## Edit Sector Pages

Open:

```text
src/lib/content/sectors.js
```

Each sector block controls the card, sector page hero, introduction text, checklist items and case example placeholders. The sector page automatically shows catalogue resources where the resource `sector` value matches the sector title.

## Replace Footer Logos

Add logos to:

```text
static/logos/
```

Then update `footerLogos` in:

```text
src/lib/content/site.js
```

## About The Build Folder

SvelteKit creates `build/` when running `npm run build`. That folder is generated output for deployment, so it repeats files from `static/`.

Good practice is to keep editable assets only in `static/` and ignore `build/` in git unless your deployment workflow specifically requires committing built files.

## Translate The Website

Most visible text is in:

```text
src/lib/content/
```

To create another language, copy the content files, translate the text values, and then point the page imports to the translated files. The structure is intentionally simple so a later language switcher can be added without rewriting the theme.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

The local address is usually:

```text
http://localhost:5173
```

## Check And Build

Check the Svelte code:

```bash
npm run check
```

Build the static site:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Deployment

The site is configured for static hosting through SvelteKit and can be deployed to GitHub Pages or another static host. PDF files in `static/downloads/` are copied into the final build automatically.
