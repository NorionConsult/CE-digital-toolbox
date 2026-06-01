# Editing Website Content

Most day-to-day website edits happen in this folder.

```text
site.js           Global site name, header logo, navigation, contact email, footer logos and shared button labels
home.js           Home page text
modules.js        Journey module cards, module icons, body text, body images and module detail pages
sectors.js        Sector package cards, page text, checklists, case examples and image paths
resources.js      Catalogue/resource cards, taxonomy, page text and tool links
library-page.js   Catalogue page intro, filter labels and empty state text
module-page.js    Labels shared by all module detail pages
sector-page.js    Labels shared by all sector package pages
```

To add a new card or page, copy an existing block in the relevant file and edit the values inside the quotes.

PDF files live in:

```text
static/downloads/
```

Catalogue resources are now pages generated from `resources.js`; they do not need PDF files unless a future resource explicitly links to one.

Sector images live in:

```text
static/images/
```

Footer logos live in:

```text
static/logos/
```
