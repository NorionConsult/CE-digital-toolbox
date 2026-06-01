# Downloads folder

Place downloadable PDF files in this folder.

- `tool-catalogue.pdf` is the shared full catalogue.
- `modules/` contains one PDF per module.

When replacing a PDF, either keep the same filename or update the corresponding path in:

- `src/lib/content/modules.js`

Catalogue resources are generated as pages from `src/lib/content/resources.js`, not from PDFs.

Sector images live in `static/images/`.
Footer logos live in `static/logos/`.
