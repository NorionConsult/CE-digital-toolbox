<script>
  import { base } from '$app/paths';
  import { modulePage } from '$lib/content/module-page.js';
  import { site } from '$lib/content/site.js';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';

  export let data;
  const { module, relatedResources } = data;
</script>

<svelte:head>
  <title>{module.shortName}: {module.title} | {site.name}</title>
</svelte:head>

<section class="subpage-hero">
  <div class="container subpage-content module-hero-content">
    <a href="{base}/#modules" class="back-link">{modulePage.backLink}</a>

    <div class="module-hero-icon {module.colourClass}">
      <img src="{base}{module.icon}" alt={module.iconAlt} />
    </div>

    <div class="module-hero-copy">
      <p class="eyebrow">{module.shortName}</p>
      <h1>{module.title}</h1>

      <p class="subpage-intro">{module.intro}</p>

      <!--<div class="download-buttons">
        <a href="{base}{module.modulePdf}" class="download-button primary" download>
          {modulePage.moduleDownload}
        </a>

        <a href="{base}{module.cataloguePdf}" class="download-button secondary" download>
          {modulePage.catalogueDownload}
        </a>
      
      </div>
      -->
    </div>
  </div>
</section>

<section class="module-body-section">
  <div class="container module-body-content">
    <div class="module-body-text">
      <p class="eyebrow">{module.shortName}</p>
      <h2>{module.bodyTitle}</h2>

      {#each module.bodyParagraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    <div class="module-image-grid" aria-label="Module images">
      {#each module.bodyImages as image}
        <figure>
          <img src="{base}{image.src}" alt={image.alt} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>

<section class="module-tools-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{modulePage.relatedEyebrow}</p>
      <h2>{modulePage.relatedTitle}</h2>
    </div>

    {#if relatedResources.length > 0}
      <div class="module-resource-grid">
        {#each relatedResources as resource (resource.id)}
          <ResourceCard {resource} />
        {/each}
      </div>
    {:else}
      <p class="module-empty-tools">{modulePage.relatedEmpty}</p>
    {/if}
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

  .module-hero-content {
    max-width: 1120px;
    display: grid;
    grid-template-columns: 200px minmax(0, 820px);
    gap: 56px;
  }

  .module-hero-content .back-link {
    grid-column: 1 / -1;
    width: fit-content;
    margin-bottom: 0;
  }

  .module-hero-icon {
    width: 210px;
    aspect-ratio: 1;
    border-radius: 28px;
    display: grid;
    place-items: center;
    border: 0px solid var(--dark);
  }

  .module-hero-icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
<!--delete square
  .module-hero-icon.module-card-green {
    background-color: var(--green-primary);
    color: var(--dark);
  } 
-->
  .module-hero-icon.module-card-lime {
    background-color: var(--green-secondary);
    color: var(--white);
  }

  .module-hero-icon.module-card-yellow {
    background-color: var(--yellow);
    color: var(--dark);
  }

  .module-hero-icon.module-card-blue {
    background-color: var(--blue);
    color: var(--white);
  }

  .module-hero-icon.module-card-dark {
    background-color: var(--dark);
    color: var(--white);
  }

  .module-hero-icon.module-card-outline {
    background-color: var(--white);
    color: var(--dark);
  }

  .module-body-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .module-body-content {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
    gap: 56px;
    align-items: start;
  }

  .module-body-text {
    max-width: 720px;
  }

  .module-body-text h2,
  .module-tools-section h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .module-body-text p + p {
    margin-top: 18px;
  }

  .module-image-grid {
    display: grid;
    gap: 24px;
  }

  .module-image-grid figure {
    display: grid;
    gap: 10px;
  }

  .module-image-grid img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
  }

  .module-image-grid figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .module-tools-section {
    padding: 64px 0;
    background-color: var(--light-bg);
  }

  .module-resource-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .module-empty-tools {
    color: var(--muted);
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
    .module-hero-content {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }

    .module-hero-icon {
      width: 96px;
      border-radius: 18px;
      order: 2;
    }

    .module-hero-copy {
      display: contents;
    }

    .module-hero-copy .eyebrow {
      order: 1;
      margin-bottom: 0;
    }

    .module-hero-copy h1 {
      order: 3;
    }

    .module-hero-copy .subpage-intro {
      order: 4;
    }

    /*.module-hero-copy .download-buttons {
      order: 5;
    }*/

    .module-body-content,
    .module-next-content {
      grid-template-columns: 1fr;
    }

    .module-resource-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .module-resource-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
