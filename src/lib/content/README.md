# Editing Website Content

Most day-to-day website edits happen in this folder.

```text
site.js              Global site name, header logo, navigation, contact email, footer logos and shared button labels
home.js              Home page text
modules.js           Loads the current language module files
sectors.js           Loads the current language sector files
resources.js         Catalogue/resource cards, taxonomy, page text and tool links
library-page.js      Catalogue page intro, filter labels and empty state text
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

To edit one sector page, open its file:

```text
src/lib/content/en/sectors/construction.js
```

To add a new module or sector, copy an existing file in the relevant folder and add it to that folder's `index.js`.

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

Catalogue resources are now pages generated from `resources.js`; they do not need PDF files unless a future resource explicitly links to one.

## Adding Catalogue Resources

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
Catalogue card, embedded module/sector cards and the resource page. Global
module colours are maintained in `src/app.css`.

### Placing Cards on Other Pages

To control where a catalogue tool appears, edit its `placements` block:

```js
placements: {
  moduleSections: ['diagnose:baseline-mapping'],
  sectors: ['construction'],
  sectorSections: ['construction:materials']
}
```

- `moduleSections` places cards under a particular module subsection.
- `sectors` places cards in the general Relevant Tools area of a sector page.
- `sectorSections` is ready for future subsections within sector pages.
- Several tags can be added when one tool belongs in several places.

Sector images live in:

```text
static/images/
```

Footer logos live in:

```text
static/logos/
```
