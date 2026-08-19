<script>
  /*
    Reusable card for a journey phase.
    The component receives journey phase data as a prop and renders a consistent card.
  */
  import { base } from '$app/paths';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { site } from '$lib/content/site.js';

  export let journeyPhase;
</script>

<article class="module-card {journeyPhase.colourClass}">
  <div>
    <div class="module-number">{journeyPhase.shortName}</div>
    <h3>{journeyPhase.title}</h3>
    <p><InlineText text={journeyPhase.description} /></p>
  </div>

  <a href="{base}/journey-phases/{journeyPhase.slug}/" class="module-link">
    {site.labels.viewPhase}
    <span class="link-arrow" aria-hidden="true"></span>
  </a>
</article>

<style>
  .module-card {
    min-height: 320px;
    padding: 32px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--module-bg);
    border: 2px solid var(--module-border);
    color: var(--module-text);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .module-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
  }

  .module-number {
    font-weight: 700;
    font-size: 0.95rem;
    opacity: 0.8;
    margin-bottom: 20px;
  }

  .module-card h3 {
    font-size: var(--home-journey-phase-card-title-size, 2.4rem);
    text-transform: uppercase;
    margin-bottom: 16px;
    color: inherit;
  }

  .module-card p {
    margin-bottom: 28px;
  }

  .module-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: inherit;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid currentColor;
    width: fit-content;
    transition: color 0.18s ease;
  }

  .link-arrow {
    width: 0.95em;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: url("https://api.iconify.design/icon-park-outline:arrow-right.svg") center / contain no-repeat;
    mask: url("https://api.iconify.design/icon-park-outline:arrow-right.svg") center / contain no-repeat;
    transition: transform 0.18s ease;
  }

  .module-link:hover {
    color: var(--green-secondary);
  }

  .module-link:hover .link-arrow,
  .module-link:focus-visible .link-arrow {
    transform: translateX(3px);
  }

  @media (max-width: 640px) {
    .module-card {
      min-height: 260px;
    }
  }
</style>
