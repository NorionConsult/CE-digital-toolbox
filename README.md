# Circular Economy Toolbox

This is a SvelteKit static website for the Circular Economy Toolbox. The project is organised like a small theme: content files are separate from shared layout, and the global header and footer have their own clear files.

## Main Folders

```text
src/
├── lib/
│   ├── content/           # Edit website text, journey phases, sectors and tools here
│   ├── theme/             # Edit the global header and footer here
│   └── components/        # Reusable page building blocks
├── routes/                # Website pages and page templates
└── app.css                # Global colours, fonts, spacing and shared styles

static/
├── downloads/             # Download files linked from specific tools
├── images/                # Sector tool images
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

Journey phase cards and journey phase pages:

```text
src/lib/content/journey-phases.js
src/lib/content/en/journey-phases/
```

Sector tools:

```text
src/lib/content/sectors.js
static/images/
```

Tools:

```text
src/lib/content/tool-catalogue.js
```

Tools page labels and intro text:

```text
src/lib/content/tools-page.js
```

Shared journey phase page labels:

```text
src/lib/content/journey-phase-page.js
```

Colours, fonts and shared visual style:

```text
src/app.css
```

Hero section padding:

```text
src/app.css
```

Change `--page-hero-padding` for desktop hero spacing and
`--page-hero-padding-mobile` for phone hero spacing.

## Format Bold Text

In editable paragraph and description text, wrap only the words that should be bold with double asterisks:

```js
'Use **Circular Loop Designer** and **ecoCEO** before scaling the idea.'
```

This will show only those names in bold on the website. This works in journey phase page text, sector page text, and homepage section/card text. Avoid using HTML tags such as `<strong>` in content files, because the `**bold text**` format is easier for editors and future translations.

## Add A New Tool

1. Open:

```text
src/lib/content/tool-catalogue.js
```

2. Copy one existing tool block and change the title, description, journey phases, language, provider, access and link.

3. If the tool should download a local PDF, Word, PowerPoint, Excel, CSV or ZIP file, add the file under `static/downloads/tools/` and set `toolLink` to that file path.

The tool page button text is automatic. If `toolLink` ends in a downloadable file type such as `.pdf`, `.docx`, `.pptx`, `.xlsx`, `.csv` or `.zip`, the button says **Download tool**. Other links say **Open tool**. Editors do not need to add a separate button label.

For longer paragraph text fields, write `||` between paragraphs if you want a
paragraph break inside one text field. Add links with
`[visible link text](https://example.com)`. For lists, write each item after
`||` and start it with `1.`, `2.`, `3.` for numbered lists or `-` for bullet
lists. This works for tool about text, journey phase paragraphs, sector guide
paragraphs and case descriptions.

The Tools filters are created automatically from the tools, so new languages, providers and access values appear without editing another file.

## Add A New Journey Phase

1. Open:

```text
src/lib/content/en/journey-phases/
```

2. Copy one existing journey phase file and change the text and slug.

SvelteKit will automatically create the matching journey phase page from the slug.

## Replace Sector Images

Add images to:

```text
static/images/
```

Then update the matching `image` and `imageAlt` values in:

```text
src/lib/content/sectors.js
```

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

The site is configured for static hosting through SvelteKit and can be deployed to GitHub Pages or another static host. PDF files and images in `static/` are copied into the final build automatically.

For this repository, GitHub Pages should publish from **GitHub Actions**, not from a manually committed `build/` folder. The workflow is in:

```text
.github/workflows/deploy.yml
```

Because the published address is:

```text
https://norionconsult.github.io/CE-digital-toolbox/
```

the GitHub build uses this base path:

```text
BASE_PATH=/CE-digital-toolbox
```

To publish:

1. Commit the source code on `main`.
2. Push `main` to GitHub.
3. In GitHub, open **Settings → Pages**.
4. Set **Build and deployment → Source** to **GitHub Actions**.
5. Open the **Actions** tab and confirm that “Deploy to GitHub Pages” finishes successfully.

Do not commit the generated `build/` folder unless the hosting setup is changed to a manual deployment. The workflow builds and uploads it automatically.
