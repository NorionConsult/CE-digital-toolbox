<script>
  import { base } from '$app/paths';
  import SectorBadge from '$lib/components/cards/SectorBadge.svelte';
  import RichText from '$lib/components/formatting/RichText.svelte';
  import { site } from '$lib/content/site.js';

  export let caseStudy;

  $: rStrategyText = caseStudy.rStrategies?.length ? caseStudy.rStrategies.join(', ') : 'Not specified';
  $: sectorBadges = caseStudy.sectors?.length ? caseStudy.sectors : [caseStudy.sector];
  $: taxonomyRows = [
    ['Company name', caseStudy.companyName],
    ['Country', caseStudy.countryDisplay || caseStudy.country],
    ['R strategy', rStrategyText],
    ['Sector', caseStudy.sectorDisplay || caseStudy.sector]
  ];

  $: caseLink = caseStudy.caseLink;
</script>

<svelte:head>
  <title>{caseStudy.companyName} | {site.name}</title>
</svelte:head>

<section class="case-hero">
  <div class="container case-hero-layout" class:case-hero-layout-with-image={caseStudy.image}>
    <div class="case-hero-content">
      <a href="{base}/cases/" class="back-link">Back to cases</a>
      <div class="case-badges" aria-label="Case sectors">
        {#each sectorBadges as sector}
          <SectorBadge {sector} />
        {/each}
      </div>
      <h1>{caseStudy.companyName}</h1>
      <RichText text={caseStudy.summary} className="case-summary" />

      {#if caseLink}
        <a class="primary-button case-source-link" href={caseLink} target="_blank" rel="noreferrer">
          {site.labels.openCase}
        </a>
      {/if}
    </div>

    {#if caseStudy.image}
      <figure class="case-hero-image">
        <img src="{base}{caseStudy.image}" alt={caseStudy.imageAlt || caseStudy.companyName} />
      </figure>
    {/if}
  </div>
</section>

<section class="case-detail-section">
  <div class="container case-detail-layout">
    <article class="case-main">
      {#if caseStudy.rStrategyDescription}
        <section class="case-text-block">
          <h2>How does this case apply circular strategies?</h2>
          <RichText text={caseStudy.rStrategyDescription} />
        </section>
      {/if}

      <section class="case-text-block">
        <h2>Description of case</h2>
        <RichText text={caseStudy.description} />
      </section>
    </article>

    <aside class="case-taxonomy" aria-label="Case taxonomy">
      <h2>About</h2>
      <dl>
        {#each taxonomyRows as row}
          <div>
            <dt>{row[0]}</dt>
            <dd>{row[1]}</dd>
          </div>
        {/each}
      </dl>
    </aside>
  </div>
</section>

<style>
  .case-hero {
    padding: var(--page-hero-padding);
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .case-hero-layout {
    display: grid;
    align-items: center;
    gap: 48px;
  }

  .case-hero-layout-with-image {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 380px);
  }

  .case-hero-content {
    display: grid;
    justify-items: start;
  }

  .case-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .case-hero h1 {
    max-width: 900px;
    margin: 20px 0 24px;
    font-size: clamp(2.8rem, 7vw, 5.75rem);
    line-height: 0.95;
    text-transform: uppercase;
  }

  :global(.case-summary) {
    max-width: 740px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
  }

  .case-source-link {
    margin-top: 28px;
  }

  .case-hero-image {
    overflow: hidden;
    border-radius: 22px;
    background-color: var(--white);
    box-shadow: 0 14px 36px rgba(10, 46, 54, 0.14);
  }

  .case-hero-image img {
    display: block;
    width: 100%;
    max-height: 320px;
    object-fit: cover;
  }

  .case-detail-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .case-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 48px;
    align-items: start;
  }

  .case-main {
    display: grid;
    gap: 36px;
  }

  .case-text-block {
    display: grid;
    gap: 16px;
  }

  .case-text-block h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  .case-taxonomy h2 {
    margin-bottom: 12px;
    font-size: 1.65rem;
    text-transform: uppercase;
  }

  .case-taxonomy {
    position: sticky;
    top: 112px;
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    background-color: var(--light-bg);
  }

  .case-taxonomy dl {
    display: grid;
    gap: 12px;
  }

  .case-taxonomy div {
    padding-top: 12px;
    border-top: 1px solid var(--soft-border);
  }

  dt {
    color: var(--dark);
    font-weight: 700;
  }

  dd {
    margin-top: 2px;
    color: var(--muted);
  }

  @media (max-width: 900px) {
    .case-hero-layout-with-image,
    .case-detail-layout {
      grid-template-columns: 1fr;
    }

    .case-taxonomy {
      position: static;
    }
  }
</style>
