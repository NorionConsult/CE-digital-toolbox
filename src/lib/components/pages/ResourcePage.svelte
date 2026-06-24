<script>
  import { base } from '$app/paths';
  import { getJourneyPhaseClass } from '$lib/content/journey-phases.js';
  import { site } from '$lib/content/site.js';

  export let resource;

  $: journeyPhaseClass = getJourneyPhaseClass(resource.journeyPhase);
  $: journeyPhaseText = (resource.journeyPhases ?? [resource.journeyPhase]).join(', ');

  $: detailRows = [
    ['Time required', resource.timeRequired],
    ['Preparation needed', resource.preparationNeeded],
    ['Output', resource.output],
    ['Best for', resource.bestFor]
  ];

  $: taxonomyRows = [
    ['SME journey', journeyPhaseText],
    ['Sector', resource.sector],
    ['Language', resource.language],
    ['Provider', resource.provider],
    ['Access', resource.access]
  ];
</script>

<svelte:head>
  <title>{resource.title} | {site.name}</title>
</svelte:head>

<section class="resource-hero">
  <div class="container resource-hero-content">
    <a href="{base}/catalogue/" class="back-link">Back to catalogue</a>

    <div class="resource-kicker {journeyPhaseClass}">
      <span>{resource.cardNumber}</span>
      <span>{journeyPhaseText}</span>
    </div>

    <h1>{resource.title}</h1>
    <p class="resource-summary">{resource.description}</p>
  </div>
</section>

<section class="resource-detail-section">
  <div class="container resource-detail-layout">
    <article class="resource-main">
      <p>{resource.about}</p>

      <div class="resource-detail-grid">
        {#each detailRows as row}
          <section class="resource-detail-item">
            <h3>{row[0]}</h3>
            <p>{row[1]}</p>
          </section>
        {/each}
      </div>

      {#if resource.toolLink}
        <a class="primary-button resource-tool-link" href={resource.toolLink} target="_blank" rel="noreferrer">
          {site.labels.openTool}
        </a>
      {/if}
    </article>

    <aside class="resource-taxonomy" aria-label="Resource taxonomy">
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
  .resource-hero {
    padding: 50px 0;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .resource-hero-content {
    max-width: var(--site-container-max);
  }

  .resource-kicker {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    width: fit-content;
    border: 1px solid var(--module-border);
    border-radius: 999px;
    padding: 8px 12px;
    background-color: var(--module-bg);
    color: var(--module-text);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.85rem;
  }

  .resource-kicker span + span::before {
    content: "/";
    margin-right: 10px;
    opacity: 0.65;
  }

  .resource-hero h1 {
    font-size: clamp(2.8rem, 7vw, 5.75rem);
    line-height: 0.95;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .resource-summary {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
    max-width: 740px;
  }

  .resource-detail-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .resource-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 48px;
    align-items: start;
  }

  .resource-main {
    display: grid;
    gap: 28px;
  }

  .resource-taxonomy h2 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    text-transform: uppercase;
  }

  .resource-main > p {
    max-width: 760px;
    font-size: 1.08rem;
  }

  .resource-detail-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .resource-detail-item {
    border-top: 2px solid var(--soft-border);
    padding-top: 16px;
  }

  .resource-detail-item h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .resource-tool-link {
    width: fit-content;
  }

  .resource-taxonomy {
    background-color: var(--light-bg);
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    padding: 24px;
    position: sticky;
    top: 112px;
  }

  .resource-taxonomy h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  .resource-taxonomy dl {
    display: grid;
    gap: 12px;
  }

  .resource-taxonomy div {
    border-top: 1px solid var(--soft-border);
    padding-top: 12px;
  }

  .resource-taxonomy dt {
    color: var(--dark);
    font-weight: 700;
  }

  .resource-taxonomy dd {
    color: var(--muted);
    margin-top: 2px;
  }

  @media (max-width: 900px) {
    .resource-detail-layout,
    .resource-detail-grid {
      grid-template-columns: 1fr;
    }

    .resource-taxonomy {
      position: static;
    }
  }
</style>
