<script>
  import JourneyPhaseCard from '$lib/components/cards/JourneyPhaseCard.svelte';
  import SectorCard from '$lib/components/cards/SectorCard.svelte';
  import SectionIntro from '$lib/components/sections/SectionIntro.svelte';
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
  </div>
</section>

<section id="journey-phases" class="journey-phases-section">
  <div class="container">
    <SectionIntro
      eyebrow={guidedPathways.journeyPhasesSection.eyebrow}
      title={guidedPathways.journeyPhasesSection.title}
      text={guidedPathways.journeyPhasesSection.text}
    />

    <div class="journey-phase-grid">
      {#each guidedPathways.journeyPhases as journeyPhase}
        <JourneyPhaseCard {journeyPhase} />
      {/each}
    </div>
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
    padding: 64px 0 48px;
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

  .journey-phase-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .sector-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 1000px) {
    .journey-phase-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .journey-phase-grid,
    .sector-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
