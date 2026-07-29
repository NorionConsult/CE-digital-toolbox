# Editing Website Content

Most day-to-day website edits happen in this folder.

```text
site.js              Global site name, header logo, header partner logos, navigation, contact email, footer logos and shared button labels
home.js              Home page text
guided-pathways.js   Guided pathways page hero, journey phase cards and sector tool cards
contact-page.js      Contact page text and form button URLs
journey-phases.js    Loads the current language journey phase files
sectors.js           Loads the current language sector files
resources.js         Tools/resource cards, taxonomy, page text and tool links
tools-page.js        Tools page intro, filter labels and empty state text
cases.js             Case cards, taxonomy and automatically generated case pages
cases-page.js        Cases page intro, filter labels and empty state text
journey-phase-page.js Labels shared by all journey phase detail pages
sector-page.js       Labels shared by all sector tool pages

en/journey-phases/   English journey phase content, one file per journey phase page
en/sectors/          English sector content, one file per sector page
```

## Editing The Guided Pathways Page

To edit the page shown at `/guided-pathways/`, open:

```text
src/lib/content/guided-pathways.js
```

This file is organised in the same order as the page:

```text
1. Page hero
2. Journey phases section intro
3. Journey phase cards
4. Sector tools section intro
5. Sector tool cards
```

Edit the text, image paths and card descriptions there when changing the
overview page. The card `slug` values connect each card to its existing page
URL, so only change a `slug` if the matching page URL is also being changed.

The individual journey phase pages and sector pages are still edited in their
own files. This keeps detailed page content separate while making the Guided
pathways overview page editable from one place.

To edit one journey phase page, open its file:

```text
src/lib/content/en/journey-phases/assess.js
```

Each journey phase file follows the order in which content appears on the website:

```text
1. Home page journey phase card and journey phase hero
2. Hero section buttons
3. Pathway overview and pathway cards
4. Detailed sections in page order
5. Phase Summary
6. Download paths
```

Important editing notes:

- Edit visible text, lists, image paths and captions freely.
- Keep `slug`, `sectionId`, `id`, `resourceTag` and `colourClass` unchanged unless the website structure is also being updated.
- A pathway card and its detailed section are connected when `sectionId` and `id` contain the same value.
- `_shared.js` assembles the page data and normally should not be edited.

### Learn Phase Learning Resource Cards

The Learn phase has a special learning resources section for e-courses and
introductory learning links. Edit it here:

```text
src/lib/content/en/journey-phases/learn.js
```

Inside `LearningresourcesSection`, edit `learningResources.cards`. Each card is
shown directly on the Learn page and does not create a separate subpage.
Each card creates one green learning-resource container: the card preview on
the left and the matching explanation text on the right. Copy one complete card
object to add another course:

```js
{
  courseTitle: 'Course title here',
  shortDescription: 'Short description here.',
  language: 'English',
  provider: 'Provider name',
  url: 'https://example.com',
  buttonLabel: 'Open resource',
  aboutCourse: [
    'Short explanation of the course.'
  ],
  learningGoals: [
    'Objective 1',
    'Objective 2'
  ],
  whyTakeCourse: [
    'Why this course is useful.'
  ]
}
```

The right-side headings are edited in `learningResources.labels`. Keep the
current labels `What is this?`, `Learning goals` and
`Why should I take this course?` if you want the section structure to stay the
same.

Normal tools are still edited in `resources.js`. To place a normal tool in
the Learn page's Relevant tools section, add this tag to the tool:

```js
placements: {
  phaseSections: ['learn:relevant-tools']
}
```

To edit one sector page, open its file:

```text
src/lib/content/en/sectors/construction.js
```

Current English sector files:

```text
src/lib/content/en/sectors/food-and-agriculture.js
src/lib/content/en/sectors/construction.js
src/lib/content/en/sectors/textiles.js
src/lib/content/en/sectors/tourism.js
```

Each sector file follows the order in which content appears on the website:

```text
1. Sector card and hero
2. Hero navigation buttons
3. Introduction to sector
4. Case examples
5. Key barriers and opportunities
6. Best practices
7. Relevant tools
8. Network and collaborations
```

Each section has a sector-specific name such as `textilesIntroSection` or
`textilesNetworkSection`, making it easy to find the correct content.

### Editing Sector Content

The sector files contain comments above every editable section. In general:

- Edit `paragraphs` to change the Introduction to sector text.
- Edit `intro`, `barriers` and `opportunities` inside the sector's
  `BarriersSection`.
- Edit the `groups` array inside the sector's `BestPracticesSection`. Each group
  has a title and an `items` list of bullet points.
- Edit `items` inside the sector's `NetworkSection`. Each network has a `name`,
  `description` and optional `link`.
- Edit the final sector object to change the home-page card and hero
  `description`, image path or image description.

Keep these technical connection values unchanged unless the page structure is
also being deliberately changed:

```text
id
slug
sectionId
```

Sector case cards are not written inside the sector file. They are stored in:

```text
src/lib/content/cases.js
```

A case appears automatically on a sector page when its `sector` matches the
sector title, for example:

```js
sector: 'Food and Agriculture',
```

Relevant tools are also connected automatically. Edit a tool's `placements`
inside `resources.js` and add the sector slug:

```js
placements: {
  phaseSections: [],
  sectors: ['food-and-agriculture'],
  sectorSections: []
}
```

To add a new journey phase or sector, copy an existing file in the relevant folder and
add it to that folder's `index.js`.

For future translations, create matching language folders such as:

```text
src/lib/content/hy/journey-phases/
src/lib/content/uk/journey-phases/
src/lib/content/ro/journey-phases/
```

Keep the same filenames and exported fields in each language folder so the page templates can stay global.

Download files used by specific tools live in:

```text
static/downloads/
```

Tools are generated as pages from `resources.js`; they do not need PDF files
unless a specific tool explicitly links to one.

## Adding Cases

To add a case, open:

```text
src/lib/content/cases.js
```

Copy one complete `createCase({ ... })` block and update its values. Give it a
unique `id` and `slug`. The `slug` becomes its page URL.

Each case uses these editor-facing fields:

```js
companyName: 'Company name',
country: 'Country',
clientSegment: 'Client segment',
sector: 'Textiles',
description: 'Short text shown on the case card and in the page hero.',
about: 'Longer text shown on the individual case page.',
caseLink: 'https://example.com'
```

The `caseLink` field controls the "Open case" button in the case page hero.
Leave it as an empty string if there is no external case source yet.

One case record automatically creates:

- a card on the Cases page
- a detail page at `/cases/the-case-slug/`
- a card in the Case examples section of the matching sector tool

The sector connection uses the case's `sector` value. For example:

```js
sector: 'Textiles',
```

Sector badge colours are assigned automatically. Food and Agriculture,
Construction, Textiles and Tourism have fixed theme colours. New sector names
are also supported and receive a consistent generated outline colour.

## Adding Tools Resources

To add a resource, open:

```text
src/lib/content/resources.js
```

Copy one complete `createResource({ ... })` block and paste it after an existing
resource. Then:

1. Give the resource a unique `id`, `cardNumber` and `slug`.
2. Replace the title, descriptions, taxonomy, detail text and `toolLink`.
3. Set its journey phase badges using `journeyPhase` and `journeyPhases`.
4. Update `placements` if it should also appear in a journey phase or sector page.

The `slug` becomes the page URL. Use lowercase words separated by hyphens.

### Filter Values

The Tools page filters are cleaned automatically for editors. This means
capitalisation does not create duplicate filter options:

```js
language: 'enGlish'
```

will still appear as `English` in the filter. The same clean-up applies to:

- `journeyPhase` and `journeyPhases`
- `sector`
- `language`
- `access`

For tools available in more than one language, write the languages as a simple
comma-separated or slash-separated list:

```js
language: 'English, Dutch'
// or
language: 'English/Dutch'
```

The filter will show separate `English` and `Dutch` options, and the tool will
appear under both. If more than three languages are listed, the card displays
`Multiple` to keep the card readable, but the tool still appears under each
individual language filter.

### Journey Phase Badge Colours

Badge colours are assigned automatically from the matching journey phase colour.
Editors do not need to add colour codes or CSS classes.

Use these exact phase names:

```text
Learn
Assess
Explore
Validate
Implement
Monitor
None
```

Use `None` when a tool does not belong to one of the six journey phases.
For example, sector-only tools can use:

```js
journeyPhase: 'None',
journeyPhases: [],
sector: 'Textiles',
```

The Tools page can filter by `None`, but the card will not show a `None` badge.
If the sector is set, the card will show a sector badge instead.

Use `journeyPhase` for the primary phase and include all relevant phases in
`journeyPhases`:

```js
journeyPhase: 'Monitor',
journeyPhases: ['Monitor', 'Validate', 'Explore'],
```

This example automatically displays three separately coloured badges on the
Tools card, embedded journey phase/sector cards and the resource page. Global
journey phase colours are maintained in `src/app.css`.

### Placing Cards on Other Pages

To control where a tool appears, edit its `placements` block:

```js
placements: {
  phaseSections: ['assess:baseline-mapping'],
  sectors: ['construction'],
  sectorSections: ['construction:relevant-tools']
}
```

- `phaseSections` places tools under a particular journey phase subsection.
- `sectors` places tools in the general Relevant Tools area of a sector page.
- `sectorSections` places tools in a named sector subsection. The current tool
  section ID is `relevant-tools`.
- Several tags can be added when one tool belongs in several places.

Sector images live in:

```text
static/images/
```

Footer logos live in:

```text
static/logos/
```
