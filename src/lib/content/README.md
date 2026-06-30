# Editing Website Content

Most day-to-day website edits happen in this folder.

```text
site.js              Global site name, header logo, navigation, contact email, footer logos and shared button labels
home.js              Home page text
modules.js           Loads the current language module files
sectors.js           Loads the current language sector files
resources.js         Tools/resource cards, taxonomy, page text and tool links
tools-page.js        Tools page intro, filter labels and empty state text
cases.js             Case cards, taxonomy and automatically generated case pages
cases-page.js        Cases page intro, filter labels and empty state text
module-page.js       Labels shared by all module detail pages
sector-page.js       Labels shared by all sector package pages

en/modules/          English module content, one file per module page
en/sectors/          English sector content, one file per sector page
```

To edit one module page, open its file:

```text
src/lib/content/en/modules/diagnose.js
```

Each module file follows the order in which content appears on the website:

```text
1. Home page module card and module hero
2. Hero section buttons
3. Pathway overview and pathway cards
4. Detailed sections in page order
5. Module Summary
6. Download paths
```

Important editing notes:

- Edit visible text, lists, image paths and captions freely.
- Keep `slug`, `sectionId`, `id`, `resourceTag` and `colourClass` unchanged unless the website structure is also being updated.
- A pathway card and its detailed section are connected when `sectionId` and `id` contain the same value.
- `_shared.js` assembles the page data and normally should not be edited.

### Awareness Learning Resource Cards

The Awareness module has a special learning resources section for e-courses and
introductory learning links. Edit it here:

```text
src/lib/content/en/modules/awareness.js
```

Inside `LearningresourcesSection`, edit `learningResources.cards`. Each card is
shown directly on the Awareness page and does not create a separate subpage.
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

Normal tool cards are still edited in `resources.js`. To place a normal tool in
the Awareness page's Relevant tools section, add this tag to the tool:

```js
placements: {
  moduleSections: ['awareness:relevant-tools']
}
```

To edit one sector page, open its file:

```text
src/lib/content/en/sectors/construction.js
```

Current English sector files:

```text
src/lib/content/en/sectors/agriculture.js
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
sector: 'Agriculture',
```

Relevant tools are also connected automatically. Edit a tool's `placements`
inside `resources.js` and add the sector slug:

```js
placements: {
  moduleSections: [],
  sectors: ['agriculture'],
  sectorSections: []
}
```

To add a new module or sector, copy an existing file in the relevant folder and
add it to that folder's `index.js`.

For future translations, create matching language folders such as:

```text
src/lib/content/hy/modules/
src/lib/content/uk/modules/
src/lib/content/ro/modules/
```

Keep the same filenames and exported fields in each language folder so the page templates can stay global.

PDF files live in:

```text
static/downloads/
```

Tools resources are now pages generated from `resources.js`; they do not need PDF files unless a future resource explicitly links to one.

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
- a card in the Case examples section of the matching sector package

The sector connection uses the case's `sector` value. For example:

```js
sector: 'Textiles',
```

Sector badge colours are assigned automatically. Agriculture, Construction,
Textiles and Tourism have fixed theme colours. New sector names are also
supported and receive a consistent generated outline colour.

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
4. Update `placements` if it should also appear in a module or sector page.

The `slug` becomes the page URL. Use lowercase words separated by hyphens.

### Journey Phase Badge Colours

Badge colours are assigned automatically from the matching module colour.
Editors do not need to add colour codes or CSS classes.

Use these exact phase names:

```text
Awareness
Diagnose
Options
Business Case
Implement
Monitor
```

Use `journeyPhase` for the primary phase and include all relevant phases in
`journeyPhases`:

```js
journeyPhase: 'Monitor',
journeyPhases: ['Monitor', 'Business Case', 'Options'],
```

This example automatically displays three separately coloured badges on the
Tools card, embedded module/sector cards and the resource page. Global
module colours are maintained in `src/app.css`.

### Placing Cards on Other Pages

To control where a tool appears, edit its `placements` block:

```js
placements: {
  moduleSections: ['diagnose:baseline-mapping'],
  sectors: ['construction'],
  sectorSections: ['construction:relevant-tools']
}
```

- `moduleSections` places cards under a particular module subsection.
- `sectors` places cards in the general Relevant Tools area of a sector page.
- `sectorSections` places cards in a named sector subsection. The current tool
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
