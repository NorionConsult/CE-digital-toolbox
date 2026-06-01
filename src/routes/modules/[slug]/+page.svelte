<script>
  import { base } from '$app/paths';
  import { modulePage } from '$lib/content/module-page.js';
  import { site } from '$lib/content/site.js';

  export let data;
  const { module } = data;
</script>

<svelte:head>
  <title>{module.shortName}: {module.title} | {site.name}</title>
</svelte:head>

<section class="subpage-hero">
  <div class="container subpage-content">
    <a href="{base}/#modules" class="back-link">{modulePage.backLink}</a>

    <p class="eyebrow">{module.shortName}</p>
    <h1>{module.title}</h1>

    <p class="subpage-intro">{module.intro}</p>

    <div class="download-buttons">
      <a href="{base}{module.modulePdf}" class="download-button primary" download>
        {modulePage.moduleDownload}
      </a>

      <a href="{base}{module.cataloguePdf}" class="download-button secondary" download>
        {modulePage.catalogueDownload}
      </a>
    </div>
  </div>
</section>

<section class="module-next-section">
  <div class="container module-next-content">
    <div>
      <p class="eyebrow">{modulePage.nextEyebrow}</p>
      <h2>{modulePage.nextTitle}</h2>
    </div>
    <p>{modulePage.nextText}</p>
    <a href="{base}/library/" class="secondary-button">{modulePage.libraryButton}</a>
  </div>
</section>

<style>
  .subpage-hero {
    padding: 50px 0 50px;
  }

  .module-next-section {
    padding: 50px 0;
    background-color: var(--white);
  }

  .module-next-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr auto;
    gap: 32px;
    align-items: center;
  }

  .module-next-content h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .module-next-content {
      grid-template-columns: 1fr;
    }
  }
</style>
