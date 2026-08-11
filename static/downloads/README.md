# Downloads folder

Place downloadable files in this folder only when a specific tool or page links
to that file.

Tools are generated as pages from `src/lib/content/tool-catalogue.js`, not from
PDF files. Add a PDF here only when a tool's `toolLink` should open or download
that specific file.

When a tool's `toolLink` points directly to a downloadable file, the tool page
button automatically changes from "Open tool" to "Download tool". This works for
common file types such as PDF, Word, PowerPoint, Excel, CSV and ZIP files.

Sector images live in `static/images/`.
Footer logos live in `static/logos/`.
