<script>
  import { base } from '$app/paths';
  import { sectorPage } from '$lib/content/sector-page.js';
  import { site } from '$lib/content/site.js';
  import InteractiveChecklist from '$lib/components/sections/InteractiveChecklist.svelte';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';

  export let data;
  const { sector, relatedResources } = data;
</script>

<svelte:head>
  <title>{sector.title} | {site.name}</title>
</svelte:head>

<section class="sector-hero">
  <div class="container sector-hero-content">
    <a href="{base}/#sectors" class="back-link">{sectorPage.backLink}</a>

    <img class="sector-hero-image" src="{base}{sector.image}" alt={sector.imageAlt} />

    <div class="sector-hero-copy">
      <p class="eyebrow">{sector.number}</p>
      <h1>{sector.title}</h1>
      <p class="sector-intro">{sector.description}</p>
    </div>
  </div>
</section>

<section class="sector-content-section">
  <div class="container sector-content-layout">
    <article class="sector-main-content">
      <div>
        <p class="eyebrow">{sector.number}</p>
        <h2>{sector.introductionTitle}</h2>
      </div>

      <div class="sector-body-text">
        {#each sector.introductionParagraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>

      <InteractiveChecklist
        title={sector.checklistTitle}
        items={sector.checklistItems}
        completeLabel={sectorPage.checklistComplete}
      />
    </article>
  </div>
</section>

<section class="sector-tools-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sectorPage.toolsEyebrow}</p>
      <h2>{sectorPage.toolsTitle}</h2>
    </div>

    {#if relatedResources.length > 0}
      <div class="sector-resource-grid">
        {#each relatedResources as resource (resource.id)}
          <ResourceCard {resource} />
        {/each}
      </div>
    {:else}
      <p class="sector-empty-tools">{sectorPage.toolsEmpty}</p>
    {/if}
  </div>
</section>

<section class="sector-cases-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.number}</p>
      <h2>{sector.casesTitle}</h2>
    </div>

    <div class="case-grid">
      {#each sector.caseExamples as example}
        <article class="case-card">
          <img src="{base}{example.image}" alt={example.imageAlt} />
          <div>
            <h3>{example.title}</h3>
            <p>{example.text}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .sector-hero {
    padding: 50px 0;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .sector-hero-content {
    display: grid;
    grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1fr);
    gap: 56px;
    align-items: center;
  }

  .sector-hero-content .back-link {
    grid-column: 1 / -1;
    width: fit-content;
    margin-bottom: 0;
  }

  .sector-hero-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 22px;
    box-shadow: var(--shadow);
  }

  .sector-hero h1 {
    font-size: clamp(3rem, 7vw, 6.5rem);
    line-height: 0.95;
    margin-bottom: 28px;
    text-transform: uppercase;
  }

  .sector-intro {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
    max-width: 720px;
  }

  .sector-content-section,
  .sector-cases-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .sector-main-content {
    max-width: 860px;
  }

  .sector-main-content {
    display: grid;
    gap: 28px;
  }

  .sector-main-content h2,
  .sector-tools-section h2,
  .sector-cases-section h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
  }

  .sector-body-text {
    display: grid;
    gap: 18px;
  }

  .sector-tools-section {
    padding: 64px 0;
    background-color: var(--light-bg);
  }

  .sector-resource-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .sector-empty-tools {
    color: var(--muted);
  }

  .case-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .case-card {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 24px;
    align-items: start;
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    background-color: var(--light-bg);
  }

  .case-card img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 14px;
  }

  .case-card h3 {
    font-size: 1.55rem;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  @media (max-width: 980px) {
    .sector-hero-content,
    .case-card {
      grid-template-columns: 1fr;
    }

    .sector-resource-grid,
    .case-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .sector-resource-grid,
    .case-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
