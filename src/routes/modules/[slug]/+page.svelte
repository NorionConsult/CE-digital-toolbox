<script>
  import { base } from '$app/paths';
  import { modulePage } from '$lib/content/module-page.js';
  import { site } from '$lib/content/site.js';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';

  export let data;
  const { module, relatedResources, nextModule } = data;

  let checkedSummaryItems = [];

  $: deepDiveSections = module.deepDiveSections ?? [];
  $: summaryChecklist = module.summaryChecklist ?? [];
  $: summaryComplete = summaryChecklist.length > 0 && checkedSummaryItems.length === summaryChecklist.length;

  /**
   * @param {{ toolSlugs?: string[] }} section
   */
  function getSectionResources(section) {
    const slugs = section.toolSlugs ?? [];

    return relatedResources.filter((resource) => slugs.includes(resource.slug));
  }
</script>

<svelte:head>
  <title>{module.shortName}: {module.title} | {site.name}</title>
</svelte:head>

<section class="subpage-hero">
  <div class="container subpage-content module-hero-content">
    <a href="{base}/#modules" class="back-link">{modulePage.backLink}</a>

    <div class="module-hero-icon">
      <img src="{base}{module.icon}" alt={module.iconAlt} />
    </div>

    <div class="module-hero-copy">
      <p class="eyebrow">{module.shortName}</p>
      <h1>{module.title}</h1>

      <p class="subpage-intro">{module.intro}</p>

      <!--<div class="download-buttons">
        <a href="{base}{module.modulePdf}" class="download-button primary" download>
          {modulePage.moduleDownload}
        </a>

        <a href="{base}{module.cataloguePdf}" class="download-button secondary" download>
          {modulePage.catalogueDownload}
        </a>
      
      </div>
      -->
    </div>
  </div>
</section>

<section class:module-body-section={deepDiveSections.length === 0} class:module-pathway-section={deepDiveSections.length > 0}>
  <div class="container module-body-content" class:module-body-content-wide={deepDiveSections.length > 0}>
    <div class="module-body-text">
      <h2>{module.bodyTitle}</h2>

      {#each module.bodyParagraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    {#if deepDiveSections.length > 0}
      <div class="module-pathway-grid">
        {#each deepDiveSections as section}
          <article class="pathway-card">
            <div class="pathway-card-top">
              <span>{section.number}</span>
              <h3>{section.title}</h3>
            </div>

            <div class="pathway-card-body">
              <p>{section.description}</p>

              <div class="pathway-outputs">
                <h4>Key outputs:</h4>
                <ul>
                  {#each section.keyOutputs as output}
                    <li>{output}</li>
                  {/each}
                </ul>
              </div>

              <a href="#{section.id}" class="pathway-link" aria-label="Open {section.title} section">
                <span>Open section</span>
              </a>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="module-image-grid" aria-label="Module images">
        {#each module.bodyImages as image}
          <figure>
            <img src="{base}{image.src}" alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        {/each}
      </div>
    {/if}
  </div>
</section>

{#if deepDiveSections.length > 0}
  <section class="module-detail-intro" aria-hidden="true">
    <div class="container">
      <div></div>
    </div>
  </section>

  {#each deepDiveSections as section}
    {@const sectionResources = getSectionResources(section)}
    <section class="module-detail-section" id={section.id}>
      <div class="container module-detail-layout">
        <article class="module-detail-copy">
          <p class="eyebrow">Step {section.number}</p>
          <h2>{section.bodyTitle}</h2>

          {#each section.bodyParagraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </article>

        <figure class="module-detail-image">
          <img src="{base}{section.image.src}" alt={section.image.alt} />
          <figcaption>{section.image.caption}</figcaption>
        </figure>
      </div>

      <div class="container module-detail-tools">
        <div class="section-intro">
          <h3 class="subsection-title">{modulePage.relatedTitle}</h3>
        </div>

        {#if sectionResources.length > 0}
          <div class="module-resource-grid">
            {#each sectionResources as resource (resource.id)}
              <ResourceCard {resource} />
            {/each}
          </div>
        {:else}
          <p class="module-empty-tools">{modulePage.relatedEmpty}</p>
        {/if}
      </div>
    </section>
  {/each}

  <section class="module-summary-section">
    <div class="container module-summary-content">
      <div class="module-summary-copy">
        <p class="eyebrow">{module.shortName}</p>
        <h2>{module.summaryTitle}</h2>
        <p>{module.summaryText}</p>
      </div>

      <div class="module-summary-checklist" aria-label={module.summaryTitle}>
        <div class="summary-progress">
          <h3>Checklist</h3>
          <p>{checkedSummaryItems.length} / {summaryChecklist.length} complete</p>
        </div>

        <div class="summary-items">
          {#each summaryChecklist as item, index}
            <label>
              <input type="checkbox" bind:group={checkedSummaryItems} value={index} />
              <span>{item}</span>
            </label>
          {/each}
        </div>

        {#if summaryComplete && nextModule}
          <a href="{base}/modules/{nextModule.slug}/" class="module-next-button summary-next-link">
            Continue to {nextModule.shortName}: {nextModule.title}
          </a>
        {/if}
      </div>
    </div>
  </section>
{:else}
  <section class="module-tools-section">
    <div class="container">
      <div class="section-intro">
        <h3 class="subsection-title">{modulePage.relatedTitle}</h3>
      </div>

      {#if relatedResources.length > 0}
        <div class="module-resource-grid">
          {#each relatedResources as resource (resource.id)}
            <ResourceCard {resource} />
          {/each}
        </div>
      {:else}
        <p class="module-empty-tools">{modulePage.relatedEmpty}</p>
      {/if}
    </div>
  </section>
{/if}

<section class="module-complete-section">
  <div class="container">
    <div class="module-complete-banner">
      <p>Well done with finishing this module!</p>

      {#if nextModule}
        <a href="{base}/modules/{nextModule.slug}/" class="module-next-button">
          Continue to {nextModule.shortName}: {nextModule.title}
        </a>
      {/if}
    </div>
  </div>
</section>

<style>
  .subpage-hero {
    padding: 50px 0 50px;
  }

  .module-hero-content {
    max-width: 1120px;
    display: grid;
    grid-template-columns: 200px minmax(0, 820px);
    gap: 56px;
  }

  .module-hero-content .back-link {
    grid-column: 1 / -1;
    width: fit-content;
    margin-bottom: 0;
  }

  .module-hero-icon {
    width: 210px;
    aspect-ratio: 1;
    border-radius: 28px;
    display: grid;
    place-items: center;
    border: 0px solid var(--dark);
  }

  .module-hero-icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .module-body-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .module-body-content {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
    gap: 56px;
    align-items: start;
  }

  .module-body-content-wide {
    grid-template-columns: 1fr;
  }

  .module-body-text {
    max-width: 720px;
  }

  .module-body-content-wide .module-body-text {
    max-width: 920px;
  }

  .module-body-text h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .module-body-text p + p {
    margin-top: 18px;
  }

  .module-image-grid {
    display: grid;
    gap: 24px;
  }

  .module-image-grid figure {
    display: grid;
    gap: 10px;
  }

  .module-image-grid img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
  }

  .module-image-grid figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .module-tools-section {
    padding: 64px 0;
    background-color: var(--light-bg);
  }

  .module-pathway-section {
    padding: 72px 0;
    background-color: var(--light-bg);
  }

  .module-detail-copy h2,
  .module-summary-copy h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .module-pathway-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
    margin-top: 40px;
  }

  .pathway-card {
    min-height: 520px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--soft-border);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--white);
    box-shadow: 0 12px 26px rgba(10, 46, 54, 0.08);
  }

  .pathway-card-top {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 20px;
    padding: 24px 28px;
    background-color: var(--module-bg);
    color: var(--module-text);
  }

  .pathway-card-top span {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .pathway-card-top h3 {
    color: inherit;
    font-size: clamp(1.45rem, 2vw, 2rem);
    text-transform: uppercase;
  }

  .pathway-card-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 24px;
    padding: 34px 28px 28px;
  }

  .pathway-card-body > p {
    color: var(--muted);
    font-size: 1.15rem;
  }

  .pathway-outputs {
    margin-top: auto;
  }

  .pathway-outputs h4 {
    color: var(--green-secondary);
    font-size: 1rem;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .pathway-outputs ul {
    padding-left: 20px;
  }

  .pathway-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: fit-content;
    min-width: 140px;
    min-height: 58px;
    padding: 14px 18px;
    border-radius: 16px;
    background-color: var(--dark);
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
  }

  .pathway-link:hover {
    background-color: var(--blue);
  }

  .module-detail-intro {
    padding: 0;
    background:
      linear-gradient(to bottom, var(--light-bg) 0 50%, var(--white) 50% 100%);
  }

  .module-detail-intro div div {
    height: 22px;
    border-radius: 999px;
    background-color: var(--green-secondary);
  }

  .module-detail-section {
    padding: 72px 0;
    background-color: var(--white);
    scroll-margin-top: 110px;
  }

  .module-detail-section:nth-of-type(even) {
    background-color: var(--light-bg);
  }

  .module-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
    gap: 56px;
    align-items: start;
  }

  .module-detail-copy {
    max-width: 760px;
  }

  .module-detail-copy p + p {
    margin-top: 18px;
  }

  .module-detail-image {
    display: grid;
    gap: 10px;
  }

  .module-detail-image img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
  }

  .module-detail-image figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .module-detail-tools {
    margin-top: 46px;
  }

  .module-resource-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .module-empty-tools {
    color: var(--muted);
  }

  .module-summary-section {
    padding: 72px 0;
    background-color: var(--light-bg);
  }

  .module-complete-section {
    padding: 56px 0 72px;
    background-color: var(--white);
  }

  .module-complete-banner {
    display: grid;
    place-items: center;
    gap: 22px;
    min-height: 140px;
    padding: 32px;
    border-radius: 28px;
    background:
      linear-gradient(120deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0) 38%),
      linear-gradient(135deg, #d8f4b2, var(--green-primary) 52%, var(--green-secondary));
    box-shadow: 0 18px 38px rgba(10, 46, 54, 0.14);
    text-align: center;
  }

  .module-complete-banner p {
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.7rem, 3.6vw, 3rem);
    line-height: 1.05;
    text-transform: uppercase;
    color: var(--dark);
  }

  .module-next-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    min-height: 48px;
    padding: 12px 20px;
    border: 2px solid currentColor;
    border-radius: 999px;
    background-color: transparent;
    color: var(--dark);
    font-weight: 700;
    text-decoration: none;
    box-shadow: inset 0 0 0 1px rgba(10, 46, 54, 0.08), 0 8px 20px rgba(10, 46, 54, 0.08);
    transition: box-shadow 0.18s ease, transform 0.18s ease;
  }

  .module-next-button:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 0 0 2px rgba(10, 46, 54, 0.16), 0 12px 24px rgba(10, 46, 54, 0.14);
  }

  .module-summary-content {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(320px, 1fr);
    gap: 48px;
    align-items: start;
  }

  .module-summary-copy p {
    max-width: 640px;
  }

  .module-summary-checklist {
    display: grid;
    gap: 18px;
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    background-color: var(--white);
  }

  .summary-progress {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: baseline;
  }

  .summary-progress h3 {
    font-size: 1.45rem;
    text-transform: uppercase;
  }

  .summary-progress p {
    color: var(--muted);
    font-weight: 700;
    white-space: nowrap;
  }

  .summary-items {
    display: grid;
    gap: 12px;
  }

  .summary-items label {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: start;
    padding: 14px;
    border-radius: 14px;
    background-color: var(--light-bg);
  }

  .summary-items input {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    accent-color: var(--green-primary);
  }

  @media (max-width: 900px) {
    .module-hero-content {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }

    .module-hero-icon {
      width: 96px;
      border-radius: 18px;
      order: 2;
    }

    .module-hero-copy {
      display: contents;
    }

    .module-hero-copy .eyebrow {
      order: 1;
      margin-bottom: 0;
    }

    .module-hero-copy h1 {
      order: 3;
    }

    .module-hero-copy .subpage-intro {
      order: 4;
    }

    /*.module-hero-copy .download-buttons {
      order: 5;
    }*/

    .module-body-content,
    .module-detail-layout,
    .module-summary-content {
      grid-template-columns: 1fr;
    }

    .module-pathway-grid,
    .module-resource-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .module-pathway-grid,
    .module-resource-grid {
      grid-template-columns: 1fr;
    }

    .summary-progress {
      display: grid;
    }
  }
</style>
