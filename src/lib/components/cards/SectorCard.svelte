<script>
  /*
    Reusable card for sector packages.
    These link to dedicated sector pages.
  */
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';

  export let sector;
</script>

<article class="sector-card">
  <img class="sector-image" src="{base}{sector.image}" alt={sector.imageAlt} />
  <p class="sector-number">{sector.number}</p>
  <h3>{sector.title}</h3>
  <p>{sector.description}</p>
  <a href="{base}/sectors/{sector.slug}/" class="sector-link">{site.labels.viewSector}</a>
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
    margin-top: auto;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid currentColor;
    width: fit-content;
  }
</style>
