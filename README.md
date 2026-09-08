# Circular Economy Toolbox

This is a SvelteKit static website for the Circular Economy Toolbox. The project is organised like a small theme: content files are separate from shared layout, and the global header and footer have their own clear files.

## Main Folders

```text
src/
├── lib/
│   ├── content/           # Editable content plus technical content helpers
│   ├── theme/             # Edit the global header and footer here
│   └── components/        # Reusable page building blocks
├── routes/                # Website pages and page templates
└── app.css                # Global colours, fonts, spacing and shared styles

static/
├── icons/                 # Local interface icons and journey phase icons
├── images/                # Website images, including sector and case images
├── logos/                 # Footer logos
├── phase-content/         # Images and files used inside journey phase pages
└── tools/                 # Local files linked from tool pages
```

## Where To Edit Common Things

Global header, header logo and navigation:

```text
src/lib/theme/SiteHeader.svelte
src/lib/content/editable/global/site.js
src/lib/content/editable/global/buttons.js
src/lib/content/editable/global/footer.js
static/logos/
```

Global footer:

```text
src/lib/theme/SiteFooter.svelte
src/lib/content/editable/global/footer.js
```

Home page text:

```text
src/lib/content/editable/pages/home.js
```

Journey phase cards and journey phase pages:

```text
src/lib/content/editable/journey-phases/
src/lib/content/editable/pages/journey-phase-page.js
src/lib/content/technical/registries/journey-phases.js
```

Sector tools:

```text
src/lib/content/editable/sector-guides/
src/lib/content/editable/pages/sector-page.js
src/lib/content/technical/registries/sector-guides.js
static/images/
```

Tools:

```text
src/lib/content/editable/tools/tool-catalogue.js
```

Tools page labels and intro text:

```text
src/lib/content/editable/pages/tools-page.js
```

Shared journey phase page labels:

```text
src/lib/content/editable/pages/journey-phase-page.js
```

Translation helper and supported language setup:

```text
src/lib/translation-helper.js
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
src/lib/content/editable/tools/tool-catalogue.js
```

2. Copy one existing tool block and change the title, description, journey phases, language, provider, access and link.

3. If the tool should download a local PDF, Word, PowerPoint, Excel, CSV or ZIP file, add the file under `static/tools/` and set `toolLink` to that file path.

The tool page button text is automatic. If `toolLink` ends in a downloadable file type such as `.pdf`, `.docx`, `.pptx`, `.xlsx`, `.csv` or `.zip`, the button says **Download tool**. Other links say **Open tool**. Editors do not need to add a separate button label.

For longer paragraph text fields, write `||` between paragraphs if you want a
paragraph break inside one text field. Add links with
`[visible link text](https://example.com)`. For lists, write each item after
`||` and start it with `1.`, `2.`, `3.` for numbered lists or `-` for bullet
lists. This works for tool about text, journey phase paragraphs, sector guide
paragraphs and case descriptions.

The Tools filters are created automatically from the tools. The public language filter is intentionally limited to English, Armenian, Romanian and Ukrainian, while the full language text entered by editors still appears on tool cards and tool pages.

## Add A New Journey Phase

1. Open:

```text
src/lib/content/editable/journey-phases/
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
src/lib/content/editable/sector-guides/
```

## Replace Footer Logos

Add logos to:

```text
static/logos/
```

Then update `footerLogos` in:

```text
src/lib/content/editable/global/footer.js
```

## About The Build Folder

SvelteKit creates `build/` when running `npm run build`. That folder is generated output for deployment, so it repeats files from `static/`.

Good practice is to keep editable assets only in `static/` and ignore `build/` in git unless your deployment workflow specifically requires committing built files.

## Translate The Website

Most visible text is in:

```text
src/lib/content/editable/
```

To translate a text value, keep it in the same editable file and replace the plain string with a language object such as `{ en: 'English text', uk: 'Ukrainian text', ro: 'Romanian text', hy: 'Armenian text' }`. English is the fallback language, so editors can add translations gradually without breaking pages that still only have English text.

The main menu language selector stores the visitor's choice and keeps them on that language while they navigate. Slugs stay stable for now, so translated paths look like `/uk/tools/example-tool/` while the tool slug itself remains unchanged.

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
