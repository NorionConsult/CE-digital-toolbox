<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import RichText from '$lib/components/formatting/RichText.svelte';
  import SectorCard from '$lib/components/cards/SectorCard.svelte';
  import SectionIntro from '$lib/components/sections/SectionIntro.svelte';
  import JourneyPhaseDiagram from '$lib/components/sections/JourneyPhaseDiagram.svelte';
  import { guidedPathways } from '$lib/content/editable/pages/guided-pathways.js';
  import { site } from '$lib/content/editable/global/site.js';
  import { getLanguageFromPathname, localizeContent, localizePath } from '$lib/translation-helper.js';
  import { iconParkUrl } from '$lib/utils/assets.js';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentGuidedPathways = localizeContent(guidedPathways, currentLanguage);
  $: currentSite = localizeContent(site, currentLanguage);
  $: currentPagePath = localizePath('/guided-pathways/', currentLanguage);

  /** @param {string} path */
  function getHeroButtonHref(path) {
    if (path.startsWith('#')) {
      return `${base}${currentPagePath}${path}`;
    }

    return `${base}${localizePath(path, currentLanguage)}`;
  }
</script>

<svelte:head>
  <title>{currentGuidedPathways.pageTitle} | {currentSite.name}</title>
</svelte:head>

<section class="guided-pathways-hero">
  <div class="container">
    <p class="eyebrow">{currentGuidedPathways.hero.eyebrow}</p>
    <h1>{currentGuidedPathways.hero.title}</h1>
    <p class="hero-text">{currentGuidedPathways.hero.text}</p>

    <div class="guided-pathways-hero-actions">
      {#each currentGuidedPathways.hero.buttons as button}
        <a href={getHeroButtonHref(button.href)} class={`${button.style}-button`}>
          <span
            class="guided-pathways-hero-button-icon"
            style={`--icon-url: url("${iconParkUrl(button.icon)}");`}
            aria-hidden="true"
          ></span>
          {button.label}
        </a>
      {/each}
    </div>
  </div>
</section>

<section id="journey-phases" class="journey-phases-section">
  <div class="container">
    <SectionIntro
      eyebrow={currentGuidedPathways.journeyPhasesSection.eyebrow}
      title={currentGuidedPathways.journeyPhasesSection.title}
      text={currentGuidedPathways.journeyPhasesSection.text}
    />

    {#if currentGuidedPathways.journeyPhasesSection.callToAction}
      <article class="journey-phase-cta-card">
        <div class="journey-phase-cta-text">
          <RichText text={currentGuidedPathways.journeyPhasesSection.callToAction.text} />
        </div>
        <div class="journey-phase-cta-diagram">
          <JourneyPhaseDiagram />
        </div>
      </article>
    {/if}
  </div>
</section>

<section id="sectors" class="sectors-section">
  <div class="container">
    <SectionIntro
      eyebrow={currentGuidedPathways.sectorsSection.eyebrow}
      title={currentGuidedPathways.sectorsSection.title}
      text={currentGuidedPathways.sectorsSection.text}
    />

    <div class="sector-grid">
      {#each currentGuidedPathways.sectors as sector}
        <SectorCard {sector} />
      {/each}
    </div>
  </div>
</section>

<style>
  .guided-pathways-hero {
    padding: var(--page-hero-padding);
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .guided-pathways-hero h1 {
    max-width: 920px;
    font-size: clamp(3rem, 6vw, 5.8rem);
    line-height: 0.95;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  .guided-pathways-hero-actions {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .guided-pathways-hero-actions .primary-button,
  .guided-pathways-hero-actions .secondary-button {
    min-height: 58px;
    padding: 16px 24px;
    font-size: 1.05rem;
  }

  .guided-pathways-hero-button-icon {
    width: 1.25em;
    height: 1.25em;
    background-color: currentColor;
    flex: 0 0 auto;
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .journey-phase-cta-card {
    margin: 0 0 32px;
    padding: 24px;
    border: 1px solid rgba(64, 171, 87, 0.38);
    border-radius: 15px;
    background-color: rgba(64, 171, 87, 0.1);
  }

  .journey-phase-cta-text {
    max-width: 760px;
  }

  .journey-phase-cta-card :global(.rich-text) {
    gap: 0;
  }

  .journey-phase-cta-card :global(.rich-text p) {
    margin: 0;
    color: var(--dark);
    font-size: 1.08rem;
    line-height: 1.45;
  }

  .journey-phase-cta-diagram {
    margin-top: 28px;
    padding-top: 28px;
  }

  .journey-phase-cta-diagram :global(.journey-diagram-curve) {
    margin-top: 0;
  }

  .journey-phase-cta-diagram :global(.journey-diagram-visual) {
    max-width: 100%;
  }

  .sector-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    .sector-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
