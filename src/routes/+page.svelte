<script>
  import { base } from '$app/paths';
  import ModuleCard from '$lib/components/cards/ModuleCard.svelte';
  import SectorCard from '$lib/components/cards/SectorCard.svelte';
  import SectionIntro from '$lib/components/sections/SectionIntro.svelte';
  import { home } from '$lib/content/home.js';
  import { modules } from '$lib/content/modules.js';
  import { sectors } from '$lib/content/sectors.js';
</script>

<svelte:head>
  <title>{home.pageTitle}</title>
</svelte:head>

<section class="hero">
  <div class="container hero-content">
    <p class="eyebrow">{home.hero.eyebrow}</p>

    <h1>{home.hero.title}</h1>

    <p class="hero-text">{home.hero.text}</p>

    <div class="hero-actions">
      <a href="{base}/#modules" class="primary-button">{home.hero.primaryButton}</a>
      <a href="{base}/catalogue/" class="secondary-button">{home.hero.secondaryButton}</a>
    </div>
  </div>
</section>

<section id="modules" class="modules-section">
  <div class="container">
    <SectionIntro
      eyebrow={home.modulesSection.eyebrow}
      title={home.modulesSection.title}
      text={home.modulesSection.text}
    />

    <div class="module-grid">
      {#each modules as module}
        <ModuleCard {module} />
      {/each}
    </div>
  </div>
</section>

<section id="sectors" class="sectors-section">
  <div class="container">
    <SectionIntro
      eyebrow={home.sectorsSection.eyebrow}
      title={home.sectorsSection.title}
      text={home.sectorsSection.text}
    />

    <div class="sector-grid">
      {#each sectors as sector}
        <SectorCard {sector} />
      {/each}
    </div>
  </div>
</section>

<section id="about" class="about-section">
  <div class="container about-content">
    <div>
      <p class="eyebrow">{home.aboutSection.eyebrow}</p>
      <h2>{home.aboutSection.title}</h2>
    </div>

    <p>{home.aboutSection.text}</p>
  </div>
</section>

<style>
  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .module-grid {
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
    .module-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .module-grid,
    .sector-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
