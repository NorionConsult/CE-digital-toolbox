<script>
  import { base } from '$app/paths';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { modulePage } from '$lib/content/module-page.js';
  import { site } from '$lib/content/site.js';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';
  import M4Questionnaire from '$lib/components/sections/M4Questionnaire.svelte';
  import MaturityCurve from '$lib/components/sections/MaturityCurve.svelte';

  export let data;
  /** @type {any} */
  let module;
  /** @type {any[]} */
  let relatedResources = [];
  /** @type {any} */
  let nextModule = null;
  $: ({ module, relatedResources, nextModule } = data);

  let checkedSummaryItems = [];
  let currentModuleSlug = '';
  /** @type {{ src: string; alt: string; caption?: string } | null} */
  let zoomedImage = null;

  $: if (module?.slug && module.slug !== currentModuleSlug) {
    currentModuleSlug = module.slug;
    checkedSummaryItems = [];
  }

  $: moduleSections = module?.sections ?? [];
  $: summaryChecklist = module?.summaryChecklist ?? [];
  $: isSummaryComplete =
    summaryChecklist.length > 0 && checkedSummaryItems.length === summaryChecklist.length;

  /**
   * @param {{ resourceTag?: string; showAllModuleTools?: boolean }} section
   */
  function getSectionResources(section) {
    if (section.showAllModuleTools) {
      return relatedResources;
    }

    if (!section.resourceTag) {
      return [];
    }

    const resourceTag = section.resourceTag;

    return relatedResources.filter((resource) =>
      resource.placements.moduleSections.includes(resourceTag)
    );
  }

  /**
   * @param {{ src: string; alt: string; caption?: string }} image
   */
  function openZoomedImage(image) {
    zoomedImage = image;
  }

  function closeZoomedImage() {
    zoomedImage = null;
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

      <p class="subpage-intro"><InlineText text={module.intro} /></p>

      {#if moduleSections.length > 0 && !module.hideSectionNavigation}
        <nav class="module-section-navigation" aria-label="{module.title} sections">
          {#each moduleSections as section}
            <a href="#{section.id}" class="back-link">
              {section.navigationLabel ?? section.title}
            </a>
          {/each}
        </nav>
      {/if}

      <!--<div class="download-buttons">
        <a href="{base}{module.modulePdf}" class="download-button primary" download>
          {modulePage.moduleDownload}
        </a>

        <a href="{base}{module.toolsPdf}" class="download-button secondary" download>
          {modulePage.toolsDownload}
        </a>
      
      </div>
      -->
    </div>
  </div>
</section>

<section
  class={module.colourClass}
  class:module-body-section={moduleSections.length === 0}
  class:module-pathway-section={moduleSections.length > 0}
>
  <div class="container module-body-content" class:module-body-content-wide={moduleSections.length > 0}>
    <div class="module-body-text">
      <h2>{module.bodyTitle}</h2>

      {#each module.bodyParagraphs as paragraph}
        <p><InlineText text={paragraph} /></p>
      {/each}
    </div>

    {#if moduleSections.length > 0 && !module.hidePathwayCards}
      <div class="module-pathway-grid">
        {#each moduleSections as section}
          <article class="pathway-card">
            <div class="pathway-card-top">
              <span>{section.number}</span>
              <h3>{section.title}</h3>
            </div>

            <div class="pathway-card-body">
              <p><InlineText text={section.description} /></p>

              <div class="pathway-outputs">
                <h4>Key outputs:</h4>
                <ul>
                  {#each section.keyOutputs as output}
                    <li>{output}</li>
                  {/each}
                </ul>
              </div>

              <a href="#{section.id}" class="pathway-link" aria-label="Start {section.title} section">
                <span>Start</span>
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

{#if moduleSections.length > 0}
  {#each moduleSections as section, sectionIndex}
    {@const sectionResources = getSectionResources(section)}
    {@const hasSideContent = section.image}
    <section
      class="module-detail-section {module.colourClass}"
      class:module-detail-section-muted={sectionIndex % 2 === 1}
      id={section.id}
    >
      <div class="container module-detail-layout" class:module-detail-layout-wide={!hasSideContent}>
        <article class="module-detail-copy" class:module-detail-copy-wide={!hasSideContent}>
          {#if !section.hideStepEyebrow && section.number}
            <p class="eyebrow">Step {section.number}</p>
          {/if}
          <h2>{section.bodyTitle}</h2>

          {#each section.bodyParagraphs as paragraph, paragraphIndex}
            <p><InlineText text={paragraph} /></p>

            {#if section.inlineImage?.afterParagraph === paragraphIndex + 1}
              <figure
                class="module-inline-image"
                style:--inline-image-width={section.inlineImage.maxWidth ?? '760px'}
              >
                {#if section.inlineImage.title}
                  <h3 class="subsection-title">{section.inlineImage.title}</h3>
                {/if}

                {#if section.inlineImage.zoomable}
                  <button
                    type="button"
                    class="module-inline-image-button"
                    aria-label="Open larger image"
                    on:click={() => section.inlineImage && openZoomedImage(section.inlineImage)}
                  >
                    <img src="{base}{section.inlineImage.src}" alt={section.inlineImage.alt} />
                  </button>
                {:else}
                  <img src="{base}{section.inlineImage.src}" alt={section.inlineImage.alt} />
                {/if}

                {#if section.inlineImage.caption}
                  <figcaption>{section.inlineImage.caption}</figcaption>
                {/if}
              </figure>
            {/if}
          {/each}

          {#if section.m4Questionnaire}
            <M4Questionnaire {...section.m4Questionnaire} />
          {/if}

          {#if section.factbox}
            <aside class="hotspot-factbox">
              <h3 class="subsection-title">{section.factbox.title}</h3>
              <ul>
                {#each section.factbox.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </aside>
          {/if}

          {#if section.principleBox}
            <aside class="module-principle-box">
              <h3>{section.principleBox.title}</h3>

              <div class="module-principle-list">
                {#each section.principleBox.items as item}
                  <article class="module-principle-item">
                    <span
                      class="module-principle-icon"
                      style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${item.icon}.svg");`}
                      aria-hidden="true"
                    ></span>

                    <div>
                      <h4>{item.title}</h4>
                      <p><InlineText text={item.text} /></p>
                    </div>
                  </article>
                {/each}
              </div>
            </aside>
          {/if}

          {#if section.m3DfxFramework}
            <aside class="m3-dfx-framework">
              <div class="m3-dfx-heading">
                <p><InlineText text={section.m3DfxFramework.intro} /></p>
              </div>

              <div class="m3-dfx-grid">
                {#each section.m3DfxFramework.cards as card}
                  <article class="m3-dfx-card">
                    <div class="m3-dfx-card-header">
                      <span
                        class="m3-dfx-icon"
                        style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${card.icon}.svg");`}
                        aria-hidden="true"
                      ></span>
                      <h4>{card.title}</h4>
                    </div>

                    <div class="m3-dfx-card-body">
                      <section>
                        <h5>What it means</h5>
                        <p><InlineText text={card.meaning} /></p>
                      </section>

                      <section>
                        <h5>How to apply it</h5>
                        {#if Array.isArray(card.application)}
                          <ul>
                            {#each card.application as item}
                              <li><InlineText text={item} /></li>
                            {/each}
                          </ul>
                        {:else}
                          <p><InlineText text={card.application} /></p>
                        {/if}
                      </section>

                      <section>
                        <h5>EU regulation</h5>
                        <p><InlineText text={card.regulation} /></p>
                      </section>
                    </div>
                  </article>
                {/each}
              </div>

              {#if section.m3DfxFramework.source}
                <p class="m3-dfx-source"><InlineText text={section.m3DfxFramework.source} /></p>
              {/if}
            </aside>
          {/if}

          {#if section.m3ProcessRedesign}
            <aside class="m3-process-redesign">
              <div class="m3-process-heading">
                <p><InlineText text={section.m3ProcessRedesign.intro} /></p>
              </div>

              <div class="m3-process-flow-arrow m3-process-flow-arrow-top" aria-hidden="true"></div>

              <div class="m3-process-grid">
                {#each section.m3ProcessRedesign.columns as column}
                  <article class="m3-process-column">
                    <div class="m3-process-top">
                      <span
                        class="m3-process-icon"
                        style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${column.icon}.svg");`}
                        aria-hidden="true"
                      ></span>
                      <h4>{column.title}</h4>
                      <p><InlineText text={column.subtitle} /></p>
                    </div>

                    <ul>
                      {#each column.actions as action}
                        <li><InlineText text={action} /></li>
                      {/each}
                    </ul>
                  </article>
                {/each}
              </div>

              <div class="m3-process-flow-arrow" aria-hidden="true"></div>

              {#if section.m3ProcessRedesign.footer}
                <p class="m3-process-footer">
                  <span aria-hidden="true">↻</span>
                  <InlineText text={section.m3ProcessRedesign.footer} />
                </p>
              {/if}
            </aside>
          {/if}

          {#if section.closingParagraphs}
            <div class="module-detail-closing">
              {#each section.closingParagraphs as paragraph}
                <p><InlineText text={paragraph} /></p>
              {/each}
            </div>
          {/if}

          {#if section.m3WheelWorkshop}
            <div class="m3-wheel-workshop-highlight">
              <h3 class="subsection-title">{section.m3WheelWorkshop.subtitle}</h3>

              <div class="m3-wheel-workshop-card-collection">
                <div class="m3-wheel-workshop-overview-grid">
                  <article class="m3-wheel-workshop-card m3-wheel-workshop-introduction">
                    <div class="m3-wheel-workshop-title-row">
                      <h3>{section.m3WheelWorkshop.title}</h3>
                      <span
                        class="m3-wheel-workshop-title-icon"
                        style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${section.m3WheelWorkshop.icon}.svg");`}
                        aria-hidden="true"
                      ></span>
                    </div>
                    <p><InlineText text={section.m3WheelWorkshop.introduction} /></p>
                    <p class="m3-wheel-workshop-outcome">
                      <strong>Expected outcomes:</strong> <InlineText text={section.m3WheelWorkshop.outcome} />
                    </p>
                  </article>

                  <article class="m3-wheel-workshop-card m3-wheel-workshop-preparation">
                    <div class="m3-wheel-workshop-card-heading">
                      <h3>{section.m3WheelWorkshop.preparation.title}</h3>
                      <span class="m3-wheel-workshop-time">{section.m3WheelWorkshop.preparation.time}</span>
                    </div>

                    <p><InlineText text={section.m3WheelWorkshop.preparation.text} /></p>

                    <div class="m3-wheel-workshop-details">
                      {#each section.m3WheelWorkshop.preparation.details as detail}
                        <p><InlineText text={detail} /></p>
                      {/each}
                    </div>

                    <div>
                      <strong>{section.m3WheelWorkshop.preparation.listTitle}</strong>
                      <ul>
                        {#each section.m3WheelWorkshop.preparation.items as item}
                          <li><InlineText text={item} /></li>
                        {/each}
                      </ul>
                    </div>

                    <p class="m3-wheel-workshop-link">
                      <strong>Link:</strong>
                      <a
                        href={section.m3WheelWorkshop.preparation.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {section.m3WheelWorkshop.preparation.linkLabel}
                      </a>
                    </p>
                  </article>
                </div>

                <div class="m3-wheel-workshop-step-grid">
                  {#each section.m3WheelWorkshop.steps as step}
                    <article class="m3-wheel-workshop-card m3-wheel-workshop-step-card">
                      <div class="m3-wheel-workshop-card-heading">
                        <div>
                          <p class="m3-wheel-workshop-step-number">Step {step.number}</p>
                          <h3>{step.title}</h3>
                        </div>
                        <span class="m3-wheel-workshop-time">{step.time}</span>
                      </div>

                      <p><InlineText text={step.text} /></p>
                      <p><strong>Tip:</strong> <InlineText text={step.tip} /></p>
                    </article>
                  {/each}
                </div>
              </div>
            </div>
          {/if}

          {#if section.learningResources}
            <div class="m1-learning-resource-list" aria-label="Learning resources">
              {#each section.learningResources.cards as card}
                <article class="m1-learning-resource-item">
                  <div class="m1-learning-resource-card">
                    <div>
                      <p class="m1-learning-resource-badge">
                        {section.learningResources.labels?.badge ?? 'Learning resource'}
                      </p>
                      <h3>{card.courseTitle}</h3>
                      <p><InlineText text={card.shortDescription} /></p>
                    </div>

                    <dl class="m1-learning-resource-meta" aria-label="Course information">
                      <div>
                        <dt>Language</dt>
                        <dd>{card.language}</dd>
                      </div>
                      <div>
                        <dt>Provider</dt>
                        <dd>{card.provider}</dd>
                      </div>
                    </dl>

                    <a href={card.url} class="resource-link" target="_blank" rel="noreferrer">
                      {card.buttonLabel ?? 'Open resource'}
                    </a>
                  </div>

                  <div class="m1-learning-resource-details">
                    <section>
                      <h3>{section.learningResources.labels?.about ?? 'What is this?'}</h3>
                      {#each card.aboutCourse as paragraph}
                        <p><InlineText text={paragraph} /></p>
                      {/each}
                    </section>

                    <section>
                      <h3>{section.learningResources.labels?.learningGoals ?? 'Learning goals'}</h3>
                      <ul>
                        {#each card.learningGoals as goal}
                          <li><InlineText text={goal} /></li>
                        {/each}
                      </ul>
                    </section>

                    <section>
                      <h3>{section.learningResources.labels?.whyTakeCourse ?? 'Why should I take this course?'}</h3>
                      {#each card.whyTakeCourse as paragraph}
                        <p><InlineText text={paragraph} /></p>
                      {/each}
                    </section>
                  </div>
                </article>
              {/each}
            </div>
          {/if}

        </article>

        {#if section.image}
          <figure class="module-detail-image">
            {#if section.image.zoomable}
              <button
                type="button"
                class="module-detail-image-button"
                aria-label="Open larger image"
                on:click={() => section.image && openZoomedImage(section.image)}
              >
                <img src="{base}{section.image.src}" alt={section.image.alt} />
              </button>
            {:else}
              <img src="{base}{section.image.src}" alt={section.image.alt} />
            {/if}
            <figcaption>{section.image.caption}</figcaption>
          </figure>
        {/if}
      </div>

      {#if section.businessModelCards}
        <div class="container business-models-content">
          {#if section.businessModelsTitle}
            <h3 class="subsection-title business-models-title">{section.businessModelsTitle}</h3>
          {/if}

          {#if section.businessModelsIntro}
            <p class="business-models-intro">{section.businessModelsIntro}</p>
          {/if}

          <div class="business-model-card-grid">
            {#each section.businessModelCards as card}
              <details class="business-model-card">
                <summary class="business-model-card-heading">
                  <span
                    class="business-model-card-icon"
                    style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${card.icon}.svg");`}
                    aria-hidden="true"
                  ></span>
                  <h3>{card.title}</h3>
                  <span class="business-model-card-toggle" aria-hidden="true"></span>
                </summary>

                <div class="business-model-card-content">
                  <p><InlineText text={card.text} /></p>
                  <p class="business-model-example"><strong>Example:</strong> <InlineText text={card.example} /></p>
                </div>
              </details>
            {/each}
          </div>
        </div>
      {/if}

      {#if section.baselineCards}
        <div class="container baseline-card-grid">
          {#each section.baselineCards as card}
            <div class="baseline-card">
              <span
                class="baseline-card-icon"
                style={`--icon-url: url("https://api.iconify.design/icon-park-outline:${card.icon}.svg");`}
                aria-hidden="true"
              ></span>
              <h3>{card.title}</h3>
              {#if card.items}
                <ul>
                  {#each card.items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              {:else}
                <p><InlineText text={card.text} /></p>
              {/if}
            </div>
          {/each}
        </div>
      {/if}

      {#if module.slug === 'diagnose' && section.id === 'maturity-assessment'}
        <div class="container">
          <MaturityCurve />
        </div>
      {/if}

      {#if section.showRelevantTools !== false}
        <div class="container module-detail-tools">
          <div class="section-intro">
            <h3 class="subsection-title">{modulePage.relatedTitle}</h3>
          </div>

          {#if sectionResources.length > 0}
            <div class="module-resource-grid embedded-resource-grid">
              {#each sectionResources as resource (resource.id)}
                <ResourceCard {resource} variant="compact" />
              {/each}
            </div>
          {:else}
            <p class="module-empty-tools">{modulePage.relatedEmpty}</p>
          {/if}
        </div>
      {/if}
    </section>
  {/each}

  {#if module.summaryTitle}
    <section class="module-summary-section {module.colourClass}">
      <div class="container module-summary-content">
        <div class="module-summary-copy">
          <p class="eyebrow">{module.shortName}</p>
          <h2>{module.summaryTitle}</h2>

          <div class="module-summary-text">
            {#each module.summaryParagraphs ?? [module.summaryText] as paragraph}
              {#if paragraph}
                <p><InlineText text={paragraph} /></p>
              {/if}
            {/each}
          </div>

          <a href="{base}/#modules" class="back-link summary-copy-next-link">
            {modulePage.summaryBackLink}
          </a>
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

          {#if isSummaryComplete}
            <div class="summary-completion">
              {#if module.slug === 'monitor'}
                <div class="summary-final-message">
                  <p>{modulePage.finalCongratulations}</p>
                </div>

                <div class="summary-completion-actions">
                  <a href="{base}/#sectors" class="secondary-button">
                    {modulePage.exploreSectors}
                  </a>
                  <a href="{base}/cases/" class="secondary-button">
                    {modulePage.seeCases}
                  </a>
                  <a href="{base}/tools/" class="secondary-button">
                    {modulePage.seeTools}
                  </a>
                </div>
              {:else if nextModule}
                <div class="summary-completion-actions">
                  <a
                    href="{base}/modules/{nextModule.slug}/"
                    class="pathway-link summary-next-module-link"
                    aria-label="Go to {nextModule.shortName}: {nextModule.title}"
                  >
                    {modulePage.nextModule}
                  </a>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </section>
  {/if}
{:else}
  <section class="module-tools-section">
    <div class="container">
      <div class="section-intro">
        <h3 class="subsection-title">{modulePage.relatedTitle}</h3>
      </div>

      {#if relatedResources.length > 0}
        <div class="module-resource-grid embedded-resource-grid">
          {#each relatedResources as resource (resource.id)}
            <ResourceCard {resource} variant="compact" />
          {/each}
        </div>
      {:else}
        <p class="module-empty-tools">{modulePage.relatedEmpty}</p>
      {/if}
    </div>
  </section>
{/if}

{#if zoomedImage}
  <div class="image-zoom-modal" role="dialog" aria-modal="true" aria-label="Larger module image" tabindex="-1">
    <button type="button" class="image-zoom-backdrop" aria-label="Close image" on:click={closeZoomedImage}></button>
    <div class="image-zoom-content">
      <button type="button" class="image-zoom-close" aria-label="Close image" on:click={closeZoomedImage}>x</button>
      <img src="{base}{zoomedImage.src}" alt={zoomedImage.alt} />
      {#if zoomedImage.caption}
        <p>{zoomedImage.caption}</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  .subpage-hero {
    padding: 50px 0 50px;
  }

  .module-hero-content {
    max-width: var(--site-container-max);
    display: grid;
    grid-template-columns: 200px minmax(0, 820px);
    gap: 56px;
  }

  .module-hero-content .back-link {
    grid-column: 1 / -1;
    width: fit-content;
    margin-bottom: 0;
  }

  .module-section-navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px 28px;
  }

  .module-section-navigation .back-link {
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
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 28px;
    margin-top: 40px;
  }

  .pathway-card {
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
    align-items: start;
    gap: 20px;
    padding: 24px 28px;
    background-color: transparent;
    color: var(--dark);
  }

  .pathway-card-top span {
    color: var(--module-accent);
    font-size: clamp(1.45rem, 2vw, 2rem);
    font-weight: 700;
    line-height: 1.1;
  }

  .pathway-card-top h3 {
    color: inherit;
    font-size: clamp(1.45rem, 2vw, 2rem);
    line-height: 1.1;
    text-transform: uppercase;
  }

  .pathway-card-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 16px;
    padding: 34px 28px 28px;
  }

  .pathway-card-body > p {
    color: var(--muted);
    font-size: 1.15rem;
  }

  .pathway-outputs {
    margin-top: 0;
  }

  .pathway-outputs h4 {
    color: var(--module-accent);
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
    width: fit-content;
    padding: var(--action-button-padding);
    border: 2px solid var(--dark);
    border-radius: var(--action-button-radius);
    background-color: var(--dark);
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
    margin-top: auto;
  }

  .pathway-link:hover {
    border-color: var(--blue);
    background-color: var(--blue);
  }

  .summary-next-module-link {
    margin-top: 0;
  }

  .module-detail-section {
    padding: 72px 0;
    background-color: var(--white);
    scroll-margin-top: 110px;
  }

  .module-detail-section .eyebrow {
    color: var(--module-accent);
  }

  .module-detail-section-muted {
    background-color: var(--light-bg);
  }

  .module-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
    gap: 56px;
    align-items: start;
  }

  .module-detail-layout-wide {
    grid-template-columns: minmax(0, 980px);
  }

  .module-detail-copy {
    max-width: 760px;
  }

  .module-detail-copy-wide {
    max-width: 980px;
  }

  .module-detail-copy p + p {
    margin-top: 18px;
  }

  .module-inline-image {
    display: grid;
    gap: 18px;
    width: 100%;
    margin: 32px 0;
  }

  .module-inline-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .module-inline-image-button {
    width: min(100%, var(--inline-image-width));
    margin: 0 auto;
    padding: 0;
    border: 0;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--white);
    cursor: zoom-in;
  }

  .module-inline-image-button img {
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .module-inline-image-button:hover img,
  .module-inline-image-button:focus-visible img {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(10, 46, 54, 0.16);
  }

  .module-inline-image figcaption {
    width: min(100%, var(--inline-image-width));
    margin: 0 auto;
    color: var(--muted);
    font-size: 0.95rem;
    text-align: center;
  }

  .business-models-content {
    display: grid;
    gap: 18px;
    margin-top: 36px;
  }

  .business-models-title {
    width: min(100%, 980px);
  }

  .business-models-intro {
    width: min(100%, 980px);
    color: var(--text);
  }

  .business-model-card-grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: 22px;
  }

  .business-model-card {
    min-width: 0;
    padding: 24px;
    border: 2px solid var(--module-accent);
    border-radius: 15px;
    background-color: var(--white);
    box-shadow: 0 10px 24px rgba(10, 46, 54, 0.07);
  }

  .business-model-card-heading {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) 34px;
    gap: 12px;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    list-style: none;
  }

  .business-model-card-heading::-webkit-details-marker {
    display: none;
  }

  .business-model-card-heading::marker {
    content: "";
  }

  .business-model-card-icon {
    width: 30px;
    height: 30px;
    background-color: var(--module-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .business-model-card h3 {
    color: var(--dark);
    font-size: clamp(1.25rem, 1.8vw, 1.65rem);
    line-height: 1.1;
    text-transform: uppercase;
  }

  .business-model-card-toggle {
    position: relative;
    width: 32px;
    height: 32px;
    border: 2px solid var(--dark);
    border-radius: 50%;
    transition:
      background-color 0.18s ease,
      transform 0.18s ease;
  }

  .business-model-card-toggle::before,
  .business-model-card-toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--dark);
    transform: translate(-50%, -50%);
  }

  .business-model-card-toggle::after {
    transform: translate(-50%, -50%) rotate(90deg);
    transition: transform 0.18s ease;
  }

  .business-model-card-heading:hover .business-model-card-toggle {
    background-color: color-mix(in srgb, var(--module-accent) 25%, var(--white));
  }

  .business-model-card[open] .business-model-card-toggle::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .business-model-card[open] .business-model-card-toggle {
    transform: rotate(180deg);
  }

  .business-model-card[open] .business-model-card-heading {
    border-bottom-color: var(--module-accent);
  }

  .business-model-card-content {
    display: grid;
    gap: 18px;
    padding-top: 18px;
  }

  .business-model-card p {
    color: var(--text);
    font-size: 0.98rem;
    line-height: 1.45;
  }

  .business-model-example {
    color: var(--muted) !important;
    font-style: italic;
  }

  .m3-wheel-workshop-highlight {
    display: grid;
    gap: 22px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 42px;
  }

  .m3-wheel-workshop-card-collection {
    display: grid;
    gap: 22px;
    padding: 22px;
    border: 2px solid var(--yellow);
    border-radius: 15px;
    background-color: var(--yellow);
  }

  .m3-wheel-workshop-overview-grid,
  .m3-wheel-workshop-step-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .m3-wheel-workshop-card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 0;
    padding: 24px;
    border: 2px solid var(--yellow);
    border-radius: 15px;
    background-color: var(--white);
    box-shadow: 0 10px 24px rgba(10, 46, 54, 0.07);
  }

  .m3-wheel-workshop-card p,
  .m3-wheel-workshop-card p + p {
    margin-top: 0;
    color: var(--text);
    line-height: 1.45;
  }

  .m3-wheel-workshop-title-row,
  .m3-wheel-workshop-card-heading {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 4px solid var(--yellow);
  }

  .m3-wheel-workshop-title-row h3,
  .m3-wheel-workshop-card-heading h3,
  .m3-wheel-workshop-step-number {
    color: var(--dark);
    line-height: 1.08;
    text-transform: uppercase;
  }

  .m3-wheel-workshop-title-row h3 {
    max-width: 520px;
    font-size: clamp(1.7rem, 3vw, 2.6rem);
  }

  .m3-wheel-workshop-title-icon {
    flex: 0 0 auto;
    width: 64px;
    height: 64px;
    background-color: var(--dark);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .m3-wheel-workshop-card-heading h3 {
    font-size: clamp(1.25rem, 2vw, 1.65rem);
  }

  .m3-wheel-workshop-step-number {
    margin-bottom: 6px;
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    font-weight: 700;
  }

  .m3-wheel-workshop-step-card .m3-wheel-workshop-card-heading h3 {
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: none;
  }

  .m3-wheel-workshop-outcome {
    margin-top: auto !important;
    padding-top: 18px;
    border-top: 1px solid rgba(10, 46, 54, 0.18);
  }

  .m3-wheel-workshop-time {
    flex: 0 0 auto;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: var(--dark);
    color: var(--yellow);
    font-weight: 700;
    white-space: nowrap;
  }

  .m3-wheel-workshop-details {
    display: grid;
    gap: 2px;
  }

  .m3-wheel-workshop-card ul {
    margin-top: 6px;
    padding-left: 22px;
  }

  .m3-wheel-workshop-card li + li {
    margin-top: 5px;
  }

  .m3-wheel-workshop-link {
    margin-top: auto !important;
  }

  .m3-wheel-workshop-link a {
    color: var(--dark);
    font-weight: 700;
    text-underline-offset: 3px;
  }

  .m3-wheel-workshop-link a:hover {
    color: var(--module-accent);
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

  .module-detail-image-button {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: 20px;
    background: transparent;
    cursor: zoom-in;
  }

  .module-detail-image-button img {
    height: auto;
    aspect-ratio: auto;
    object-fit: contain;
    background-color: var(--white);
    transition: box-shadow 0.18s ease, transform 0.18s ease;
  }

  .module-detail-image-button:hover img,
  .module-detail-image-button:focus-visible img {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(10, 46, 54, 0.16);
  }

  .module-detail-image figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .module-detail-tools {
    margin-top: 46px;
  }

  .m1-learning-resource-list {
    display: grid;
    gap: 28px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 36px;
  }

  .m1-learning-resource-item {
    display: grid;
    grid-template-columns: var(--embedded-tool-card-width) minmax(280px, 1fr);
    gap: 30px;
    align-items: start;
    padding: 24px;
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--module-accent) 24%, var(--white));
  }

  .m1-learning-resource-item + .m1-learning-resource-item {
    margin-top: 0;
  }

  .m1-learning-resource-card {
    position: relative;
    overflow: hidden;
    background-color: var(--white);
    border: 1px solid var(--soft-border);
    border-radius: 22px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 330px;
    box-shadow: 0 8px 24px rgba(10, 46, 54, 0.06);
  }

  .m1-learning-resource-badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 12px;
    padding: 6px 10px;
    border: 1px solid var(--module-border);
    border-radius: 999px;
    background-color: var(--module-bg);
    color: var(--module-text);
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .m1-learning-resource-card h3 {
    color: var(--dark);
    font-size: var(--tool-card-title-size, 1.65rem);
    line-height: 1.1;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .m1-learning-resource-card p {
    color: var(--muted);
  }

  .m1-learning-resource-meta {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  .m1-learning-resource-meta div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--soft-border);
    padding-top: 10px;
  }

  .m1-learning-resource-meta dt {
    color: var(--dark);
    font-weight: 700;
  }

  .m1-learning-resource-meta dd {
    margin: 0;
    color: var(--muted);
    text-align: right;
  }

  .m1-learning-resource-card .resource-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--action-button-padding);
    border: 2px solid var(--dark);
    border-radius: var(--action-button-radius);
    background-color: var(--dark);
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
  }

  .m1-learning-resource-card .resource-link:hover {
    border-color: var(--blue);
    background-color: var(--blue);
  }

  .m1-learning-resource-details {
    display: grid;
    gap: 20px;
    padding: 8px 4px;
  }

  .m1-learning-resource-details section {
    display: grid;
    gap: 6px;
  }

  .m1-learning-resource-details h3 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.08rem;
    font-weight: 700;
    line-height: 1.1;
  }

  .m1-learning-resource-details p,
  .m1-learning-resource-details li {
    color: var(--dark);
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .m1-learning-resource-details ul {
    margin: 0;
    padding-left: 22px;
  }

  .hotspot-factbox {
    display: grid;
    gap: 22px;
    margin-top: 32px;
    padding: 28px 32px;
    border: 2px solid var(--green-secondary);
    border-radius: 8px;
    background-color: transparent;
    color: var(--muted);
    box-shadow: 0 16px 32px rgba(10, 46, 54, 0.12);
  }

  .hotspot-factbox h3 {
    color: var(--green-secondary);
  }

  .hotspot-factbox ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 34px;
    padding-left: 22px;
  }

  .hotspot-factbox li {
    padding-left: 8px;
    color: inherit;
    font-size: 1rem;
    line-height: 1.3;
  }

  .hotspot-factbox li::marker {
    color: var(--blue);
    font-size: 0.8em;
  }

  .module-principle-box {
    display: grid;
    gap: 24px;
    margin-top: 34px;
    padding: 32px;
    border: 2px solid var(--module-accent);
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--module-accent) 12%, var(--white));
    box-shadow: 0 12px 24px rgba(10, 46, 54, 0.08);
  }

  .module-principle-box h3 {
    color: var(--module-accent);
    font-family: Tahoma, Arial, sans-serif;
    font-size: clamp(1.55rem, 2.8vw, 2.2rem);
    line-height: 1.12;
  }

  .module-principle-list {
    display: grid;
    gap: 18px;
  }

  .module-principle-item {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
  }

  .module-principle-icon {
    width: 38px;
    height: 38px;
    margin-top: 4px;
    background-color: var(--module-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .module-principle-item h4 {
    margin-bottom: 4px;
    color: var(--module-accent);
    font-family: Tahoma, Arial, sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    line-height: 1.2;
  }

  .module-principle-item p {
    color: var(--dark);
    font-size: 1rem;
    line-height: 1.35;
  }

  .m3-dfx-framework,
  .m3-process-redesign {
    display: grid;
    gap: 26px;
    width: min(var(--site-container-max), 92vw);
    max-width: calc(100vw - 32px);
    margin-top: 36px;
    padding: 30px;
    border-radius: 15px;
    background-color: var(--module-accent);
  }

  .m3-dfx-heading,
  .m3-process-heading {
    display: grid;
    gap: 10px;
  }

  .m3-dfx-heading p,
  .m3-process-heading p {
    color: var(--dark);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    font-weight: 400;
    line-height: 1.2;
  }

  .m3-dfx-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .m3-dfx-card {
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--white);
  }

  .m3-dfx-card-header {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    min-height: 118px;
    padding: 22px;
    background-color: var(--dark);
    color: var(--white);
  }

  .m3-dfx-icon {
    width: 44px;
    height: 44px;
    background-color: var(--module-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .m3-dfx-card-header h4 {
    color: var(--white);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    line-height: 1.12;
    text-transform: uppercase;
  }

  .m3-dfx-card-body {
    display: grid;
    gap: 0;
    padding: 22px;
  }

  .m3-dfx-card-body section {
    display: grid;
    gap: 12px;
    padding: 18px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--module-accent) 55%, var(--white));
  }

  .m3-dfx-card-body section:first-child {
    padding-top: 0;
  }

  .m3-dfx-card-body section:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .m3-dfx-card-body h5 {
    color: var(--dark);
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
  }

  .m3-dfx-card-body p {
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.28;
  }

  .m3-dfx-card-body ul {
    display: grid;
    gap: 7px;
    margin: 0;
    padding-left: 20px;
  }

  .m3-dfx-card-body li {
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.28;
  }

  .m3-dfx-card-body li::marker {
    color: var(--module-accent);
    font-size: 0.8em;
  }

  .m3-dfx-card-body section:last-child p {
    font-style: italic;
  }

  .m3-dfx-source {
    color: color-mix(in srgb, var(--dark) 58%, var(--module-accent));
    font-size: 0.8rem;
    font-style: italic;
    line-height: 1.35;
  }

  .m3-process-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 22px;
    position: relative;
  }

  .m3-process-column {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    min-height: 390px;
    padding: 26px;
    border-radius: 15px;
    background-color: var(--dark);
    color: var(--white);
  }

  .m3-process-top {
    display: grid;
    justify-items: center;
    gap: 10px;
    text-align: center;
  }

  .m3-process-icon {
    width: 54px;
    height: 54px;
    position: relative;
  }

  .m3-process-icon::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--module-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .m3-process-top h4 {
    color: var(--white);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    line-height: 1.08;
    text-transform: uppercase;
  }

  .m3-process-top p {
    color: color-mix(in srgb, var(--white) 82%, var(--module-accent));
    font-style: italic;
    line-height: 1.25;
  }

  .m3-process-column ul {
    display: grid;
    gap: 22px;
    margin: 0;
    padding: 8px 0 0;
    color: inherit;
    list-style: none;
  }

  .m3-process-column li {
    position: relative;
    padding-left: 28px;
    color: inherit;
    font-size: clamp(1rem, 1.4vw, 1.12rem);
    font-weight: 400;
    line-height: 1.3;
  }

  .m3-process-column li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.45em;
    width: 10px;
    height: 10px;
    background-color: var(--module-accent);
    border-radius: 999px;
  }

  .m3-process-flow-arrow {
    position: relative;
    height: 22px;
    margin: 24px 24px 8px;
  }

  .m3-process-flow-arrow-top {
    margin: 12px 24px 14px;
  }

  .m3-process-flow-arrow::before {
    content: "";
    position: absolute;
    left: 0;
    right: 10px;
    top: 50%;
    height: 2px;
    background-color: var(--dark);
    transform: translateY(-50%);
  }

  .m3-process-flow-arrow::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 11px;
    height: 11px;
    border-right: 2px solid var(--dark);
    border-bottom: 2px solid var(--dark);
    transform: translateY(-50%) rotate(-45deg);
  }

  .m3-process-flow-arrow-top::before {
    left: 10px;
    right: 0;
  }

  .m3-process-flow-arrow-top::after {
    left: 0;
    right: auto;
    transform: translateY(-50%) rotate(135deg);
  }

  .m3-process-footer {
    display: flex;
    justify-content: center;
    gap: 8px;
    color: var(--muted);
    font-style: italic;
    line-height: 1.3;
  }

  .m3-process-footer span {
    color: var(--module-accent);
    font-weight: 700;
  }

  .baseline-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }

  .baseline-card {
    display: grid;
    justify-items: center;
    gap: 14px;
    min-height: 250px;
    padding: 28px 24px;
    border: 2px solid var(--module-accent);
    border-radius: 8px;
    background-color: transparent;
    box-shadow: 0 12px 22px rgba(10, 46, 54, 0.08);
    text-align: center;
  }

  .baseline-card-icon {
    width: 68px;
    height: 68px;
    background-color: var(--module-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .baseline-card h3 {
    font-family: Tahoma, Arial, sans-serif;
    color: var(--module-accent);
    font-size: clamp(1.08rem, 1.8vw, 1.35rem);
    line-height: 1.16;
    text-transform: uppercase;
  }

  .baseline-card p {
    color: var(--muted);
    font-weight: 400;
    line-height: 1.35;
  }

  .baseline-card ul {
    display: grid;
    gap: 10px;
    width: 100%;
    margin: 0;
    padding-left: 20px;
    text-align: left;
  }

  .baseline-card li {
    color: var(--muted);
    font-weight: 400;
    line-height: 1.35;
  }

  .baseline-card li::marker {
    color: var(--module-accent);
  }

  .module-detail-closing {
    margin-top: 28px;
  }

  .image-zoom-modal {
    position: fixed;
    inset: 0;
    z-index: 20;
    display: grid;
    place-items: center;
    padding: 24px;
    background-color: rgba(10, 46, 54, 0.74);
  }

  .image-zoom-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: transparent;
    cursor: zoom-out;
  }

  .image-zoom-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 12px;
    width: min(1180px, 94vw);
    max-height: 92vh;
  }

  .image-zoom-content img {
    width: 100%;
    max-height: 82vh;
    object-fit: contain;
    border-radius: 12px;
    background-color: var(--white);
  }

  .image-zoom-content p {
    color: var(--white);
    font-size: 0.95rem;
  }

  .image-zoom-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 2px solid var(--white);
    border-radius: 50%;
    background-color: rgba(10, 46, 54, 0.82);
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .module-empty-tools {
    color: var(--muted);
  }

  .module-summary-section {
    padding: 72px 0;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .module-summary-section .eyebrow,
  .module-summary-section h2,
  .module-summary-section .module-summary-text p {
    color: var(--dark);
  }

  .module-summary-content {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(320px, 1fr);
    gap: 48px;
    align-items: start;
  }

  .module-summary-text {
    display: grid;
    gap: 28px;
    max-width: 640px;
  }

  .module-summary-text p {
    margin: 0;
  }

  .summary-copy-next-link {
    display: inline-block;
    margin-top: 44px;
    margin-bottom: 0;
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

  .summary-completion {
    display: grid;
    gap: 18px;
  }

  .summary-final-message {
    padding: 18px 20px;
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--green-secondary) 16%, var(--white));
    border: 2px solid var(--green-secondary);
  }

  .summary-final-message p {
    color: var(--dark);
    font-weight: 700;
    line-height: 1.45;
  }

  .summary-completion-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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

    .module-section-navigation {
      order: 5;
    }

    /*.module-hero-copy .download-buttons {
      order: 5;
    }*/

    .module-body-content,
    .module-detail-layout,
    .m1-learning-resource-item,
    .module-summary-content {
      grid-template-columns: 1fr;
    }

    .module-pathway-grid,
    .baseline-card-grid,
    .m3-dfx-grid,
    .m3-process-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .business-model-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .m3-wheel-workshop-overview-grid,
    .m3-wheel-workshop-step-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .module-pathway-grid,
    .baseline-card-grid,
    .m3-dfx-grid,
    .m3-process-grid {
      grid-template-columns: 1fr;
    }

    .m3-dfx-framework,
    .m3-process-redesign {
      padding: 20px;
    }

    .m3-dfx-card-header {
      min-height: auto;
    }

    .m3-process-column,
    .m3-process-column ul {
      min-height: auto;
    }

    .m3-process-flow-arrow {
      display: none;
    }

    .business-model-card-grid {
      grid-template-columns: 1fr;
    }

    .m3-wheel-workshop-card {
      padding: 20px;
    }

    .m3-wheel-workshop-card-collection {
      padding: 14px;
    }

    .m3-wheel-workshop-title-icon {
      width: 48px;
      height: 48px;
    }

    .m3-wheel-workshop-card-heading {
      align-items: flex-start;
    }

    .hotspot-factbox {
      padding: 28px 24px;
    }

    .hotspot-factbox ul {
      grid-template-columns: 1fr;
    }

    .summary-progress {
      display: grid;
    }
  }
</style>
