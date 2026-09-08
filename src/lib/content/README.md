# Editing Website Content

Most day-to-day website edits happen in:

```text
src/lib/content/editable/
```

Technical helper files live in:

```text
src/lib/content/technical/
```

Editors should normally avoid the technical folder unless a developer asks for a specific change there.

## Folder Map

```text
editable/global/site.js              Site name, header logo, partner logos, navigation and acronym guide
editable/global/buttons.js           Shared button labels used across the website
editable/global/footer.js            Footer logos and copyright text

editable/pages/home.js               Home page text
editable/pages/guided-pathways.js    Guided pathways page text and overview sections
editable/pages/tools-page.js         Tools catalogue intro, filters and empty state text
editable/pages/cases-page.js         Cases page intro, filters and empty state text
editable/pages/about-page.js         About page text and bottom call to action
editable/pages/contact-page.js       Contact page text, form URLs and contact email links
editable/pages/journey-phase-page.js Labels shared by all journey phase pages
editable/pages/sector-page.js        Labels shared by all sector guide pages

editable/journey-phases/             One file per SME journey phase page
editable/sector-guides/              One file per sector guide page
editable/tools/tool-catalogue.js      Tool cards, tool pages, taxonomy and tool links
editable/cases/cases.js              Case cards, taxonomy and case pages

technical/tool-catalogue-utils.js     Tool normalisation, filters and automatic button behaviour
technical/phase-badge-colours.js      Journey phase badge colour matching
technical/registries/journey-phases.js Ordered list of journey phase files
technical/registries/sector-guides.js  Ordered list of sector guide files
```

## Global Text

To edit text used everywhere, open:

```text
src/lib/content/editable/global/
```

Use `site.js` for the site name, header logo, header partner logos and main menu. Use `buttons.js` for shared button labels such as `View phase`, `View tool` and `Download tool`. Use `footer.js` for footer logos and copyright text.

## Translating Text

The website supports these front-end languages:

```text
en = English
uk = Ukrainian
ro = Romanian
hy = Armenian
```

English is always the fallback language. If a visitor selects Ukrainian,
Romanian or Armenian and a specific translation is missing, the website will
show the English text for that field instead of showing an empty space.

The language selector in the main menu remembers the visitor's choice while
they move around the site. Page slugs stay in the existing stable format for
now, so translated pages use URLs such as `/uk/tools/example-tool/` while the
final slug segment remains unchanged.

Editors can keep ordinary English strings while content is still untranslated:

```js
title: 'Phase Summary'
```

When a text field is ready to translate, replace the string with a language
object:

```js
title: {
  en: 'Phase Summary',
  uk: '...',
  ro: '...',
  hy: '...'
}
```

This can be used for visible text such as titles, paragraph text, button labels,
card descriptions, footer text, page intros, tool descriptions and case
descriptions.

In the tool catalogue, the translated user-facing fields are normally
`description`, `about`, `timeRequired`, `preparationNeeded`, `output`,
`bestFor` and `format`. In the case catalogue, the translated user-facing
fields are normally `summary`, `description`, `rStrategyDescription` and
`imageAlt`.

Do not translate technical values such as:

```text
id
slug
sectionId
resourceTag
placements
toolLink
image paths
icon paths
colour classes
```

Those values connect pages, filters, links and assets together. They should stay
stable even when the visible text changes language.

Filter labels and badges such as sectors, countries, R strategies, access
types, effort levels and tool languages are translated centrally in:

```text
src/lib/content/technical/taxonomy-labels.js
```

This keeps filtering stable while still showing translated labels to visitors.
Editors usually do not need to edit this file unless a new taxonomy value is
added and should also appear translated.

## Editing Contact Emails

To change the email addresses shown on the Contact page, open:

```text
src/lib/content/editable/pages/contact-page.js
```

Edit the `contactEmails` list. Change only the `label` and `email` text unless you want to change which contact is highlighted. The website automatically uses the `email` value to create the clickable mail link. Country flags are set with `flagIcon`; these are local SVG files in `static/icons/circle-flags/`.

## Guided Pathways Page

To edit the page shown at `/guided-pathways/`, open:

```text
src/lib/content/editable/pages/guided-pathways.js
```

This file is organised in the same order as the page:

```text
1. Page hero
2. SME journey section
3. Interactive journey diagram text
4. Sector tools section
```

The detailed journey phase pages and sector guide pages are edited in their own folders:

```text
src/lib/content/editable/journey-phases/
src/lib/content/editable/sector-guides/
```

## Journey Phase Pages

To edit one journey phase page, open its file:

```text
src/lib/content/editable/journey-phases/learn.js
src/lib/content/editable/journey-phases/assess.js
src/lib/content/editable/journey-phases/explore.js
src/lib/content/editable/journey-phases/evaluate.js
src/lib/content/editable/journey-phases/implement.js
src/lib/content/editable/journey-phases/monitor.js
```

Each journey phase file follows the order in which content appears on the website:

```text
1. Home page journey phase card and page hero
2. Hero buttons
3. Pathway overview and pathway cards
4. Detailed sections in page order
5. Phase summary
6. Download paths
```

Important editing notes:

- Edit visible text, lists, image paths and captions freely.
- Keep `slug`, `sectionId`, `id`, `resourceTag` and `colourClass` unchanged unless the website structure is also being updated.
- A pathway card and its detailed section are connected when `sectionId` and `id` contain the same value.
- `_shared.js` assembles shared journey phase data and normally should not be edited.
- Page order is controlled in `src/lib/content/technical/registries/journey-phases.js`.

### Learn Phase Learning Resource Cards

The Learn phase has a special learning resources section for e-courses and introductory learning links. Edit it here:

```text
src/lib/content/editable/journey-phases/learn.js
```

Inside `LearningresourcesSection`, edit `learningResources.cards`. Each card is shown directly on the Learn page and does not create a separate tool page.

Normal tools are edited in:

```text
src/lib/content/editable/tools/tool-catalogue.js
```

To place a normal tool in the Learn page's Relevant tools section, add this tag to the tool:

```js
placements: {
  phaseSections: ['learn:relevant-tools']
}
```

## Sector Guide Pages

To edit one sector guide page, open its file:

```text
src/lib/content/editable/sector-guides/food-and-agriculture.js
src/lib/content/editable/sector-guides/construction.js
src/lib/content/editable/sector-guides/textiles.js
src/lib/content/editable/sector-guides/tourism.js
```

Each sector file follows the order in which content appears on the website:

```text
1. Sector card and hero
2. Hero navigation buttons
3. Introduction to sector
4. Case examples
5. Common barriers and opportunities
6. Relevant tools
```

The sector files contain comments above every editable section. In general:

- Edit `paragraphs` to change the Introduction to sector text.
- Edit `featuredCaseNames` inside the sector's `CasesSection` to choose the case cards shown on that sector guide page. Use the visible company or case names from `src/lib/content/editable/cases/cases.js`.
- Edit `intro`, `barriers` and `opportunities` inside the sector's `BarriersSection`.
- Barriers and opportunities can include sources directly next to each bullet:

```js
{
  text: 'Write the bullet statement here.',
  source: 'Write the source here, or leave this empty.'
}
```

Relevant tools are connected from each tool's `placements` block in:

```text
src/lib/content/editable/tools/tool-catalogue.js
```

Sector guide order is controlled in `src/lib/content/technical/registries/sector-guides.js`.

Example:

```js
placements: {
  phaseSections: [],
  sectors: ['food-and-agriculture'],
  sectorSections: []
}
```

## Adding Cases

To add a case, open:

```text
src/lib/content/editable/cases/cases.js
```

Copy one complete `createCase({ ... })` block and update its values. Give it a unique `id` and `slug`. The `slug` becomes its page URL.

Use arrays when a case has more than one country, sector or R strategy:

```js
country: ['Netherlands', 'Denmark'],
sector: ['Textiles', 'Construction'],
rStrategies: ['Reuse (R3)', 'Recycle (R8)']
```

The website automatically shows these as comma-separated values and uses each item separately in the filters. Filtering is not case-sensitive.

## Adding Tools

To add a tool, open:

```text
src/lib/content/editable/tools/tool-catalogue.js
```

Copy one complete `{ ... }` block and paste it after an existing tool. Then:

1. Give the tool a unique `id` and `slug`.
2. Replace the title, descriptions, taxonomy, detail text and `toolLink`.
3. Set its journey phase badges using `journeyPhases`.
4. Update `placements` if it should also appear in a journey phase or sector page.

The tool page button text is automatic. If `toolLink` ends in a downloadable file type such as `.pdf`, `.docx`, `.pptx`, `.xlsx`, `.csv` or `.zip`, the button says `Download tool`. Other links say `Open tool`.

Use these exact phase names:

```text
Learn
Assess
Explore
Evaluate
Implement
Monitor
```

For tools available in more than one language, write the languages as a comma-separated or slash-separated list:

```js
language: 'English, Dutch'
// or
language: 'English/Dutch'
```

The public language filter is intentionally limited to:

```text
English
Armenian
Romanian
Ukrainian
```

Editors can still write additional languages when that is accurate for a tool. Those extra languages remain visible on the tool card and tool page, but they are not added as public filter choices.

## Formatting Long Paragraph Text

These formatting rules work in long editable text fields, including:

- tool `about` text
- SME journey phase paragraph fields such as `paragraphs`, `bodyParagraphs`, `closingParagraphs` and `summaryParagraphs`
- sector guide intro and paragraph fields
- case `summary`, `description` and `rStrategyDescription`

Do not use these formatting shortcuts in technical fields such as `id`, `slug`, `sectionId`, image paths, URLs, taxonomy values, button labels or titles.

To make two paragraphs while keeping the text in one field, write `||` between paragraphs:

```js
about: 'First paragraph text. || Second paragraph text.'
```

To add a link inside the text, use this format:

```js
about: 'Read the [official guide](https://example.com/guide) before starting.'
```

To add a numbered list, use `||` before each item and start each item with `1.`, `2.`, `3.`:

```js
about: 'Use this tool in three steps: || 1. Map the current process || 2. Identify gaps || 3. Select next actions'
```

To add a bulleted list, use `||` before each item and start each item with `-`:

```js
about: 'This tool is useful for: || - quick screening || - team workshops || - early planning'
```

Bold text works with double asterisks:

```js
about: 'Use **Circular Loop Designer** before scaling the idea.'
```

## Static Files

Images, icons, phase page media and local tool files live outside the content
folder:

```text
static/icons/
static/icons/icon-park/
static/icons/phase-icons/
static/images/
static/images/sectors/
static/images/cases/
static/logos/
static/phase-content/
static/tools/
```

Tools are generated as pages from `editable/tools/tool-catalogue.js`; they do not need PDF files unless a specific tool explicitly links to one.

Icon Park SVG files are stored locally in `static/icons/icon-park/`.
They use the pattern `icon-park-original-name.svg`, for example
`icon-park-arrow-right.svg`. The SME journey phase image icons are stored in
`static/icons/phase-icons/`.
