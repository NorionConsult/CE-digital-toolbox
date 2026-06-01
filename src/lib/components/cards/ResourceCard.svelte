<script>
  /*
    The PDF link points to the file path in src/lib/content/resources.js.
    Replace placeholder PDFs in static/downloads/library with final files using the same filenames.
  */
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';

  export let resource;
</script>

<article class="resource-card">
  <div>
    <p class="resource-phase">{resource.journeyPhase}</p>
    <h3>{resource.title}</h3>
    <p class="resource-description">{resource.description}</p>
  </div>

  <dl class="resource-meta" aria-label="Resource metadata">
    <div>
      <dt>Year</dt>
      <dd>{resource.year}</dd>
    </div>
    <div>
      <dt>Language</dt>
      <dd>{resource.language}</dd>
    </div>
    <div>
      <dt>Provider</dt>
      <dd>{resource.provider}</dd>
    </div>
  </dl>

  <a href="{base}{resource.file}" class="download-link" download>{site.labels.downloadPdf}</a>
</article>

<style>
  .resource-card {
    background-color: var(--white);
    border: 1px solid var(--soft-border);
    border-radius: 22px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 330px;
    box-shadow: 0 8px 24px rgba(10, 46, 54, 0.06);
  }

  .resource-phase {
    color: var(--green-secondary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.82rem;
    margin-bottom: 10px;
  }

  .resource-card h3 {
    font-size: 1.65rem;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .resource-description {
    color: var(--muted);
  }

  .resource-meta {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  .resource-meta div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--soft-border);
    padding-top: 10px;
  }

  dt {
    font-weight: 700;
    color: var(--dark);
  }

  dd {
    color: var(--muted);
    text-align: right;
  }

  .download-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    border-radius: 999px;
    background-color: var(--dark);
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
  }

  .download-link:hover {
    background-color: var(--blue);
  }
</style>
