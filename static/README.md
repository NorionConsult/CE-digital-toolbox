# Static Assets

The folders here are public website assets. Files in `static/` are served from
the root of the website, so `static/icons/example.svg` is used in code as
`/icons/example.svg`.

## Folder Map

- `icons/` contains local interface icons, country flag icons, and SME journey phase icons.
- `images/sectors/` contains sector guide images.
- `images/cases/` contains case catalogue images, grouped by country.
- `logos/` contains header and footer logos.
- `phase-content/` contains images and files used inside the journey phase pages.
- `tools/` contains local files linked from tool pages, such as PDFs.

Tools are generated as pages from
`src/lib/content/editable/tools/tool-catalogue.js`, not from PDF files. Add a PDF
to `tools/` only when a tool's `toolLink` should open or download that specific
file.

When a tool's `toolLink` points directly to a downloadable file, the tool page
button automatically changes from "Open tool" to "Download tool". This works for
common file types such as PDF, Word, PowerPoint, Excel, CSV and ZIP files.

Local interface icons live in `icons/`:

- Icon Park SVG files are in `icons/icon-park/` and use names like `icon-park-arrow-right.svg`.
- Country flags are in `icons/circle-flags/`.
- SME journey phase icons are in `icons/phase-icons/`.
