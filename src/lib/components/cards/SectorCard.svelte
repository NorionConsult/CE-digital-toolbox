<script>
  /*
    Reusable card for sector tools.
    These link to dedicated sector pages.
  */
  import { base } from '$app/paths';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { site } from '$lib/content/site.js';

  export let sector;
</script>

<article class="sector-card">
  <img class="sector-image" src="{base}{sector.image}" alt={sector.imageAlt} />
  <p class="sector-number">{sector.number}</p>
  <h3>{sector.title}</h3>
  <p><InlineText text={sector.description} /></p>
  <a href="{base}/sectors/{sector.slug}/" class="sector-link">
    {site.labels.viewSector}
    <span class="link-arrow" aria-hidden="true"></span>
  </a>
</article>

<style>
  .sector-card {
    background-color: var(--light-bg);
    border: 1px solid var(--soft-border);
    border-radius: 24px;
    padding: 28px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .sector-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
  }

  .sector-image {
    width: 100%;
    height: 160px;
    border-radius: 18px;
    object-fit: cover;
    background-color: var(--white);
  }

  .sector-number {
    font-weight: 700;
    color: var(--green-secondary);
  }

  .sector-card h3 {
    font-size: var(--home-sector-card-title-size, 2rem);
    text-transform: uppercase;
  }

  .sector-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: auto;
    color: var(--dark);
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

  .sector-link:hover,
  .sector-link:focus-visible {
    color: var(--green-secondary);
  }

  .sector-link:hover .link-arrow,
  .sector-link:focus-visible .link-arrow {
    transform: translateX(3px);
  }
</style>
