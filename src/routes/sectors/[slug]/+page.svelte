<script>
  import { base } from '$app/paths';
  import CaseCard from '$lib/components/cards/CaseCard.svelte';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';
  import { sectorPage } from '$lib/content/sector-page.js';
  import { site } from '$lib/content/site.js';

  export let data;
  const { sector, relatedResources, relatedCases } = data;

  /*
    Every sector file keeps sections in this shared order. The explicit types
    keep the page template simple while editors work only in the content files.
  */
  /** @type {any} */
  const introductionSection = sector.sections[0];
  /** @type {any} */
  const casesSection = sector.sections[1];
  /** @type {any} */
  const barriersSection = sector.sections[2];
  /** @type {any} */
  const bestPracticesSection = sector.sections[3];
  /** @type {any} */
  const relevantToolsSection = sector.sections[4];
  /** @type {any} */
  const networkSection = sector.sections[5];
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
      <p class="sector-intro"><InlineText text={sector.description} /></p>

      <nav class="sector-section-navigation" aria-label={`${sector.title} page sections`}>
        {#each sector.navigation as item}
          <a class="back-link sector-navigation-link" href={`#${item.sectionId}`}>{item.label}</a>
        {/each}
      </nav>
    </div>
  </div>
</section>

<section id={introductionSection.id} class="sector-section sector-introduction-section">
  <div class="container sector-section-content">
    <div class="section-intro">
      <p class="eyebrow">{sector.number}</p>
      <h2>{introductionSection.title}</h2>
    </div>

    <div class="sector-prose">
      {#each introductionSection.paragraphs as paragraph}
        <p><InlineText text={paragraph} /></p>
      {/each}
    </div>
  </div>
</section>

<section id={casesSection.id} class="sector-section sector-cases-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.title}</p>
      <h2>{casesSection.title}</h2>
      <p><InlineText text={casesSection.intro} /></p>
    </div>

    {#if relatedCases.length > 0}
      <div class="sector-case-grid">
        {#each relatedCases as caseStudy (caseStudy.id)}
          <CaseCard {caseStudy} variant="compact" />
        {/each}
      </div>
    {:else}
      <p class="empty-message">{sectorPage.casesEmpty}</p>
    {/if}

    <a class="secondary-button section-action" href="{base}/cases/">{sectorPage.browseCases}</a>
  </div>
</section>

<section id={barriersSection.id} class="sector-section sector-barriers-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.title}</p>
      <h2>{barriersSection.title}</h2>
      <p><InlineText text={barriersSection.intro} /></p>
    </div>

    <div class="barrier-opportunity-grid">
      <section class="barrier-list">
        <h3>{sectorPage.barriersTitle}</h3>
        <ul>
          {#each barriersSection.barriers as barrier}
            <li><InlineText text={barrier} /></li>
          {/each}
        </ul>
      </section>

      <section class="opportunity-list">
        <h3>{sectorPage.opportunitiesTitle}</h3>
        <ul>
          {#each barriersSection.opportunities as opportunity}
            <li><InlineText text={opportunity} /></li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</section>

<section id={bestPracticesSection.id} class="sector-section sector-best-practices-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.title}</p>
      <h2>{bestPracticesSection.title}</h2>
      <p><InlineText text={bestPracticesSection.intro} /></p>
    </div>

    <div class="best-practices-grid">
      {#each bestPracticesSection.groups as group}
        <section class="best-practices-group">
          <h3>{group.title}</h3>
          <ul>
            {#each group.items as item}
              <li><InlineText text={item} /></li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </div>
</section>

<section id={relevantToolsSection.id} class="sector-section sector-tools-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.title}</p>
      <h2>{relevantToolsSection.title}</h2>
      <p><InlineText text={relevantToolsSection.intro} /></p>
    </div>

    {#if relatedResources.length > 0}
      <div class="embedded-resource-grid">
        {#each relatedResources as resource (resource.id)}
          <ResourceCard {resource} variant="compact" />
        {/each}
      </div>
    {:else}
      <p class="empty-message">{sectorPage.toolsEmpty}</p>
    {/if}
  </div>
</section>

<section id={networkSection.id} class="sector-section sector-network-section">
  <div class="container">
    <div class="section-intro">
      <p class="eyebrow">{sector.title}</p>
      <h2>{networkSection.title}</h2>
      <p><InlineText text={networkSection.intro} /></p>
    </div>

    <div class="network-grid">
      {#each networkSection.items as item}
        <article class="network-item">
          <h3>{item.name}</h3>
          <p><InlineText text={item.description} /></p>
          {#if item.link}
            <a href={item.link} target="_blank" rel="noreferrer">{sectorPage.visitNetwork}</a>
          {/if}
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
    border-radius: 15px;
    box-shadow: var(--shadow);
  }

  .sector-hero h1 {
    margin-bottom: 28px;
    font-size: clamp(3rem, 7vw, 6.5rem);
    line-height: 0.95;
    text-transform: uppercase;
  }

  .sector-intro {
    max-width: 720px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
  }

  .sector-section-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  .sector-navigation-link {
    width: fit-content;
    margin-bottom: 0;
    font-size: 0.92rem;
  }

  .sector-section {
    scroll-margin-top: 110px;
    padding: 64px 0;
  }

  .sector-introduction-section,
  .sector-barriers-section,
  .sector-tools-section {
    background-color: var(--white);
  }

  .sector-cases-section,
  .sector-best-practices-section,
  .sector-network-section {
    background-color: var(--light-bg);
  }

  .sector-prose {
    max-width: 900px;
  }

  .sector-section h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
  }

  .sector-barriers-section .section-intro {
    max-width: none;
  }

  .sector-barriers-section .section-intro h2 {
    white-space: nowrap;
  }

  .sector-prose {
    display: grid;
    gap: 18px;
  }

  .sector-case-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .section-action {
    width: fit-content;
    margin-top: 28px;
  }

  .barrier-opportunity-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .barrier-opportunity-grid section {
    padding: 28px;
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .barrier-opportunity-grid h3 {
    margin-bottom: 18px;
    font-size: 1.65rem;
    text-transform: uppercase;
  }

  .barrier-list {
    border-left: 8px solid var(--dark);
  }

  .opportunity-list {
    border-left: 8px solid var(--green-primary);
  }

  .barrier-opportunity-grid ul {
    display: grid;
    gap: 12px;
    padding-left: 22px;
  }

  .best-practices-grid,
  .network-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .best-practices-group {
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--white);
  }

  .best-practices-group h3 {
    margin-bottom: 16px;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .best-practices-group ul {
    display: grid;
    gap: 12px;
    padding-left: 22px;
  }

  .network-item {
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--white);
  }

  .network-item h3 {
    margin-bottom: 10px;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .network-item a {
    display: inline-block;
    margin-top: 16px;
    color: var(--dark);
    font-weight: 700;
    text-underline-offset: 4px;
  }

  .network-item a:hover {
    color: var(--green-primary);
  }

  .empty-message {
    color: var(--muted);
  }

  @media (max-width: 1040px) {
    .sector-case-grid,
    .best-practices-grid,
    .network-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 800px) {
    .sector-hero-content,
    .barrier-opportunity-grid {
      grid-template-columns: 1fr;
    }

    .sector-barriers-section .section-intro h2 {
      white-space: normal;
    }
  }

  @media (max-width: 640px) {
    .sector-case-grid,
    .best-practices-grid,
    .network-grid {
      grid-template-columns: 1fr;
    }

    .sector-section-navigation {
      display: grid;
    }
  }
</style>
