<script>
  import { base } from '$app/paths';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { home } from '$lib/content/home.js';
</script>

<svelte:head>
  <title>{home.pageTitle}</title>
</svelte:head>

<section class="hero home-hero">
  <div class="container hero-content">
    <p class="eyebrow">{home.hero.eyebrow}</p>

    <h1>{home.hero.title}</h1>

    <p class="hero-text"><InlineText text={home.hero.text} /></p>

    <div class="hero-actions">
      <a href="{base}/guided-pathways/" class="primary-button">
        <span
          class="hero-button-icon"
          style={`--icon-url: url("https://api.iconify.design/icon-park-outline:map-draw.svg");`}
          aria-hidden="true"
        ></span>
        {home.hero.primaryButton}
      </a>
      <a href="{base}/tools/" class="secondary-button">
        <span
          class="hero-button-icon"
          style={`--icon-url: url("https://api.iconify.design/icon-park-outline:search.svg");`}
          aria-hidden="true"
        ></span>
        {home.hero.secondaryButton}
      </a>
    </div>
  </div>
</section>

<style>
  .home-hero h1 {
    max-width: 1060px;
    font-size: clamp(3.2rem, 6.2vw, 5.6rem);
    margin-bottom: 22px;
  }

  .home-hero .hero-text {
    font-size: 1.15rem;
    margin-bottom: 28px;
  }

  .hero-actions {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .hero-actions .primary-button,
  .hero-actions .secondary-button {
    min-height: 58px;
    padding: 16px 24px;
    font-size: 1.05rem;
  }

  .hero-button-icon {
    width: 1.25em;
    height: 1.25em;
    background-color: currentColor;
    flex: 0 0 auto;
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  @media (max-width: 640px) {
    .home-hero h1 {
      font-size: clamp(3rem, 15vw, 4.7rem);
    }
  }
</style>
