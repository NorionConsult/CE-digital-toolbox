<script>
  import RichText from '$lib/components/formatting/RichText.svelte';
  import SectorCard from '$lib/components/cards/SectorCard.svelte';
  import SectionIntro from '$lib/components/sections/SectionIntro.svelte';
  import MaturityCurve from '$lib/components/sections/MaturityCurve.svelte';
  import { guidedPathways } from '$lib/content/guided-pathways.js';
  import { site } from '$lib/content/site.js';
</script>

<svelte:head>
  <title>{guidedPathways.pageTitle} | {site.name}</title>
</svelte:head>

<section class="guided-pathways-hero">
  <div class="container">
    <p class="eyebrow">{guidedPathways.hero.eyebrow}</p>
    <h1>{guidedPathways.hero.title}</h1>
    <p class="hero-text">{guidedPathways.hero.text}</p>

    <div class="guided-pathways-hero-actions">
      {#each guidedPathways.hero.buttons as button}
        <a href={button.href} class={`${button.style}-button`}>
          <span
            class="guided-pathways-hero-button-icon"
            style={`--icon-url: url("https://api.iconify.design/${button.icon}.svg");`}
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
      eyebrow={guidedPathways.journeyPhasesSection.eyebrow}
      title={guidedPathways.journeyPhasesSection.title}
      text={guidedPathways.journeyPhasesSection.text}
    />

    {#if guidedPathways.journeyPhasesSection.callToAction}
      <article class="journey-phase-cta-card">
        <div class="journey-phase-cta-text">
          <RichText text={guidedPathways.journeyPhasesSection.callToAction.text} />
        </div>
        <div class="journey-phase-cta-diagram">
          <MaturityCurve />
        </div>
      </article>
    {/if}
  </div>
</section>

<section id="sectors" class="sectors-section">
  <div class="container">
    <SectionIntro
      eyebrow={guidedPathways.sectorsSection.eyebrow}
      title={guidedPathways.sectorsSection.title}
      text={guidedPathways.sectorsSection.text}
    />

    <div class="sector-grid">
      {#each guidedPathways.sectors as sector}
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

  .journey-phase-cta-diagram :global(.maturity-curve) {
    margin-top: 0;
  }

  .journey-phase-cta-diagram :global(.maturity-visual) {
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
