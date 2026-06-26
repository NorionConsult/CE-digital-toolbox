<script>
  /*
    The page link points to the resource slug in src/lib/content/resources.js.
  */
  import { base } from '$app/paths';
  import JourneyPhaseBadges from '$lib/components/cards/JourneyPhaseBadges.svelte';
  import { site } from '$lib/content/site.js';

  export let resource;
  export let variant = 'default';

  $: journeyPhases = resource.journeyPhases ?? [resource.journeyPhase];
  $: isCompact = variant === 'compact';
</script>

<article class="tool-card resource-card" class:resource-card-compact={isCompact}>
  <div>
    <JourneyPhaseBadges phases={journeyPhases} />
    <h3>{resource.title}</h3>
    <p class="resource-description">{resource.description}</p>
  </div>

  <dl class="resource-meta" aria-label="Resource metadata">
    <div>
      <dt>Language</dt>
      <dd>{resource.language}</dd>
    </div>
    <div>
      <dt>Sector</dt>
      <dd>{resource.sector}</dd>
    </div>
    <div>
      <dt>Provider</dt>
      <dd>{resource.provider}</dd>
    </div>
    <div>
      <dt>Access</dt>
      <dd>{resource.access}</dd>
    </div>
  </dl>

  <a href="{base}/tools/{resource.slug}/" class="resource-link">{site.labels.viewResource}</a>
</article>

<style>
  .resource-card {
    position: relative;
    overflow: hidden;
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

  .resource-card h3 {
    font-size: var(--tool-card-title-size, 1.65rem);
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

  .resource-link {
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

  .resource-link:hover {
    border-color: var(--blue);
    background-color: var(--blue);
  }

  .resource-card-compact {
    gap: var(--embedded-tool-card-gap, 16px);
    min-height: var(--embedded-tool-card-min-height, 280px);
    padding: var(--embedded-tool-card-padding, 20px);
    border-radius: var(--embedded-tool-card-radius, 18px);
  }

  .resource-card-compact .resource-meta {
    gap: 8px;
  }

  .resource-card-compact .resource-meta div {
    gap: 10px;
    padding-top: 8px;
  }

</style>
