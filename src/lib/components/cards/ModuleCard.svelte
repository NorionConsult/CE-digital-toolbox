<script>
  /*
    Reusable card for a journey module.
    The component receives module data as a prop and renders a consistent card.
  */
  import { base } from '$app/paths';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { site } from '$lib/content/site.js';

  export let module;
</script>

<article class="module-card {module.colourClass}">
  <div>
    <div class="module-number">{module.shortName}</div>
    <h3>{module.title}</h3>
    <p><InlineText text={module.description} /></p>
  </div>

  <a href="{base}/modules/{module.slug}/" class="module-link">{site.labels.viewModule}</a>
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
    font-size: var(--home-module-card-title-size, 2.4rem);
    text-transform: uppercase;
    margin-bottom: 16px;
    color: inherit;
  }

  .module-card p {
    margin-bottom: 28px;
  }

  .module-link {
    color: inherit;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid currentColor;
    width: fit-content;
  }

  .module-link:hover {
    opacity: 0.75;
  }

  @media (max-width: 640px) {
    .module-card {
      min-height: 260px;
    }
  }
</style>
