<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
  import SectorBadge from './SectorBadge.svelte';

  export let caseStudy;
  export let variant = 'default';

  $: isCompact = variant === 'compact';
  $: rStrategyText = caseStudy.rStrategies?.length ? caseStudy.rStrategies.join(', ') : 'Not specified';
  $: sectorBadges = caseStudy.sectors?.length ? caseStudy.sectors : [caseStudy.sector];
</script>

<article class="case-card" class:case-card-compact={isCompact}>
  <div class="case-card-heading">
    <div class="case-badges" aria-label="Case sectors">
      {#each sectorBadges as sector}
        <SectorBadge {sector} />
      {/each}
    </div>
    <h3>{caseStudy.companyName}</h3>
    <p>{caseStudy.summary}</p>
  </div>

  <dl aria-label="Case taxonomy">
    <div>
      <dt>Company name</dt>
      <dd>{caseStudy.companyName}</dd>
    </div>
    <div>
      <dt>Country</dt>
      <dd>{caseStudy.countryDisplay || caseStudy.country}</dd>
    </div>
    <div>
      <dt>R strategy</dt>
      <dd>{rStrategyText}</dd>
    </div>
  </dl>

  <a href="{base}/cases/{caseStudy.slug}/" class="case-link" target="_blank" rel="noreferrer">
    {site.labels.viewCase}
  </a>
</article>

<style>
  .case-card {
    display: flex;
    flex-direction: column;
    gap: 22px;
    min-height: 330px;
    padding: 28px;
    border: 1px solid var(--soft-border);
    border-radius: 22px;
    background-color: var(--white);
    box-shadow: 0 8px 24px rgba(10, 46, 54, 0.06);
  }

  .case-card-heading {
    display: grid;
    gap: 12px;
  }

  .case-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  h3 {
    font-size: 1.65rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .case-card-heading p {
    color: var(--muted);
  }

  dl {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  dl div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-top: 10px;
    border-top: 1px solid var(--soft-border);
  }

  dt {
    flex: 0 0 auto;
    color: var(--dark);
    font-weight: 700;
    white-space: nowrap;
  }

  dd {
    min-width: 0;
    color: var(--muted);
    text-align: right;
  }

  .case-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--action-button-padding);
    border: 2px solid var(--dark);
    border-radius: var(--action-button-radius);
    background-color: var(--dark);
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
  }

  .case-link:hover {
    border-color: var(--blue);
    background-color: var(--blue);
  }

  .case-card-compact {
    min-height: 290px;
    padding: 22px;
    border-radius: 18px;
  }
</style>
