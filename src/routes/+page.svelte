<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { home } from '$lib/content/editable/pages/home.js';
  import { getLanguageFromPathname, localizeContent, localizePath } from '$lib/translation-helper.js';
  import { iconParkUrl } from '$lib/utils/assets.js';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentHome = localizeContent(home, currentLanguage);
</script>

<svelte:head>
  <title>{currentHome.pageTitle}</title>
</svelte:head>

<section class="hero home-hero">
  <div class="container hero-content">
    <p class="eyebrow">{currentHome.hero.eyebrow}</p>

    <h1>{currentHome.hero.title}</h1>

    <p class="hero-text"><InlineText text={currentHome.hero.text} /></p>

    <div class="hero-actions">
      <a href="{base}{localizePath('/guided-pathways/', currentLanguage)}" class="primary-button">
        <span
          class="hero-button-icon"
          style={`--icon-url: url("${iconParkUrl('map-draw')}");`}
          aria-hidden="true"
        ></span>
        {currentHome.hero.primaryButton}
      </a>
      <a href="{base}{localizePath('/tools/', currentLanguage)}" class="secondary-button">
        <span
          class="hero-button-icon"
          style={`--icon-url: url("${iconParkUrl('search')}");`}
          aria-hidden="true"
        ></span>
        {currentHome.hero.secondaryButton}
      </a>
    </div>
  </div>
</section>

<style>
  .home-hero {
    flex: 1 0 auto;
  }

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
      font-size: clamp(2rem, 8.5vw, 2.8rem);
      overflow-wrap: anywhere;
    }
  }
</style>
