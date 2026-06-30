<script>
  import { base } from '$app/paths';
  import SectorBadge from '$lib/components/cards/SectorBadge.svelte';
  import { site } from '$lib/content/site.js';

  export let caseStudy;

  $: taxonomyRows = [
    ['Company name', caseStudy.companyName],
    ['Country', caseStudy.country],
    ['Client segment', caseStudy.clientSegment],
    ['Sector', caseStudy.sector]
  ];

  $: caseLink = caseStudy.caseLink;
</script>

<svelte:head>
  <title>{caseStudy.companyName} | {site.name}</title>
</svelte:head>

<section class="case-hero">
  <div class="container case-hero-content">
    <a href="{base}/cases/" class="back-link">Back to cases</a>
    <SectorBadge sector={caseStudy.sector} />
    <h1>{caseStudy.companyName}</h1>
    <p>{caseStudy.description}</p>

    {#if caseLink}
      <a class="primary-button case-source-link" href={caseLink} target="_blank" rel="noreferrer">
        {site.labels.openCase}
      </a>
    {/if}
  </div>
</section>

<section class="case-detail-section">
  <div class="container case-detail-layout">
    <article class="case-main">
      <p>{caseStudy.about}</p>
    </article>

    <aside class="case-taxonomy" aria-label="Case taxonomy">
      <h2>Taxonomy</h2>
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
    padding: 50px 0;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .case-hero-content {
    display: grid;
    justify-items: start;
  }

  .case-hero h1 {
    max-width: 900px;
    margin: 20px 0 24px;
    font-size: clamp(2.8rem, 7vw, 5.75rem);
    line-height: 0.95;
    text-transform: uppercase;
  }

  .case-hero p {
    max-width: 740px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
  }

  .case-source-link {
    margin-top: 28px;
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
    .case-detail-layout {
      grid-template-columns: 1fr;
    }

    .case-taxonomy {
      position: static;
    }
  }
</style>
