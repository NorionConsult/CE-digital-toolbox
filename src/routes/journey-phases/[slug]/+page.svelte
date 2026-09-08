<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import RichText from '$lib/components/formatting/RichText.svelte';
  import { journeyPhasePage } from '$lib/content/editable/pages/journey-phase-page.js';
  import { journeyPhases } from '$lib/content/technical/registries/journey-phases.js';
  import { site } from '$lib/content/editable/global/site.js';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';
  import CompactJourneyPhaseMap from '$lib/components/sections/CompactJourneyPhaseMap.svelte';
  import StrategyShortlistQuestionnaire from '$lib/components/sections/StrategyShortlistQuestionnaire.svelte';
  import { getLanguageFromPathname, localizeContent, localizePath } from '$lib/translation-helper.js';
  import { iconParkUrl } from '$lib/utils/assets.js';

  export let data;
  /** @type {any} */
  let journeyPhase;
  /** @type {any[]} */
  let relatedResources = [];
  /** @type {any} */
  let nextPhase = null;
  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentData = localizeContent(data, currentLanguage);
  $: currentJourneyPhasePage = localizeContent(journeyPhasePage, currentLanguage);
  $: currentJourneyPhases = localizeContent(journeyPhases, currentLanguage);
  $: currentSite = localizeContent(site, currentLanguage);
  $: ({ journeyPhase, relatedResources, nextPhase } = currentData);

  /** @type {{ src: string; alt: string; caption?: string } | null} */
  let zoomedImage = null;
  /** @type {boolean[]} */
  let summaryChecks = [];
  let currentSummaryKey = '';

  $: phaseSections = journeyPhase?.sections ?? [];
  $: summaryChecklist = journeyPhase?.summaryChecklist ?? [];
  $: summaryKey = `${journeyPhase?.slug ?? ''}-${summaryChecklist.length}`;
  $: if (summaryKey !== currentSummaryKey) {
    currentSummaryKey = summaryKey;
    summaryChecks = summaryChecklist.map(() => false);
  }
  $: summaryCompletedCount = summaryChecks.filter(Boolean).length;
  $: isSummaryComplete =
    summaryChecklist.length > 0 && summaryCompletedCount === summaryChecklist.length;

  /**
   * @param {{ resourceTag?: string; showAllPhaseTools?: boolean }} section
   */
  function getSectionResources(section) {
    if (section.showAllPhaseTools) {
      return relatedResources;
    }

    if (!section.resourceTag) {
      return [];
    }

    const resourceTag = section.resourceTag;

    return relatedResources.filter((resource) =>
      resource.placements.phaseSections.includes(resourceTag)
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

  /**
   * @param {number} index
   */
  function toggleSummaryCheck(index) {
    summaryChecks[index] = !summaryChecks[index];
    summaryChecks = [...summaryChecks];
  }

  /**
   * @param {MouseEvent} event
   */
  function preventLockedSummaryNavigation(event) {
    if (!isSummaryComplete) {
      event.preventDefault();
    }
  }
</script>

<svelte:head>
  <title>{journeyPhase.shortName}: {journeyPhase.title} | {currentSite.name}</title>
</svelte:head>

<section class="subpage-hero">
  <div class="container subpage-content phase-hero-content">
    <div class="phase-hero-topline">
      <a href="{base}{localizePath('/guided-pathways/#journey-phases', currentLanguage)}" class="back-link journey-back-link">
        <span
          class="back-link-arrow"
          style={`--icon-url: url("${iconParkUrl('arrow-left')}");`}
          aria-hidden="true"
        ></span>
        {currentJourneyPhasePage.backLink}
      </a>

      <CompactJourneyPhaseMap phases={currentJourneyPhases} activeSlug={journeyPhase.slug} />
    </div>

    <div class="phase-hero-icon">
      <img src="{base}{journeyPhase.icon}" alt={journeyPhase.iconAlt} />
    </div>

    <div class="phase-hero-copy">
      <p class="eyebrow">{journeyPhase.shortName}</p>
      <h1>{journeyPhase.title}</h1>

      <RichText text={journeyPhase.intro} className="subpage-intro" />

      {#if phaseSections.length > 0 && !journeyPhase.hideSectionNavigation}
        <nav class="phase-section-navigation" aria-label={`${journeyPhase.title} sections`}>
          {#each phaseSections as section}
            <a href="#{section.id}" class="back-link">
              {section.navigationLabel ?? section.title}
            </a>
          {/each}
        </nav>
      {/if}

    </div>
  </div>
</section>

<section
  class={journeyPhase.colourClass}
  class:phase-body-section={phaseSections.length === 0}
  class:phase-pathway-section={phaseSections.length > 0}
>
  <div class="container phase-body-content" class:phase-body-content-wide={phaseSections.length > 0}>
    <div class="phase-body-text">
      <h2>{journeyPhase.bodyTitle}</h2>

      <RichText text={journeyPhase.bodyParagraphs} />

      {#each journeyPhase.bodySubsections ?? [] as subsection}
        <section class="phase-body-subsection">
          <h3 class="subsection-title">{subsection.title}</h3>

          <RichText text={subsection.paragraphs} />

          {#if subsection.image}
            <figure class="phase-body-subsection-image">
              <img src="{base}{subsection.image.src}" alt={subsection.image.alt} />
              {#if subsection.image.caption}
                <figcaption>{subsection.image.caption}</figcaption>
              {/if}
            </figure>
          {/if}
        </section>
      {/each}
    </div>

    {#if phaseSections.length > 0 && !journeyPhase.hidePathwayCards}
      <div class="phase-pathway-grid" class:phase-pathway-grid-single={phaseSections.length === 1}>
        {#each phaseSections as section}
          <article class="pathway-card">
            <div class="pathway-card-top">
              <span>{section.number}</span>
              <h3>{section.title}</h3>
            </div>

            <div class="pathway-card-body">
              <p><InlineText text={section.description} /></p>

              <div class="pathway-outputs">
                <h4>{currentJourneyPhasePage.keyOutputs}</h4>
                <ul>
                  {#each section.keyOutputs as output}
                    <li>{output}</li>
                  {/each}
                </ul>
              </div>

              <a href="#{section.id}" class="pathway-link" aria-label={`${currentJourneyPhasePage.start} ${section.title} section`}>
                <span>{currentJourneyPhasePage.start}</span>
              </a>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="phase-image-grid" aria-label={currentJourneyPhasePage.journeyPhaseImages}>
        {#each journeyPhase.bodyImages as image}
          <figure>
            <img src="{base}{image.src}" alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        {/each}
      </div>
    {/if}
  </div>
</section>

{#if phaseSections.length > 0}
  {#each phaseSections as section, sectionIndex}
    {@const sectionResources = getSectionResources(section)}
    {@const hasSideContent = section.image}
    <section
      class="phase-detail-section {journeyPhase.colourClass}"
      class:phase-detail-section-muted={sectionIndex % 2 === 1}
      id={section.id}
    >
      <div class="container phase-detail-content">
        <header class="phase-detail-heading" class:phase-detail-heading-wide={!hasSideContent}>
          {#if !section.hideStepEyebrow && section.number}
            <p class="eyebrow">{currentJourneyPhasePage.step} {section.number}</p>
          {/if}
          <h2>{section.bodyTitle}</h2>
        </header>

        <div class="phase-detail-layout" class:phase-detail-layout-wide={!hasSideContent}>
          <article class="phase-detail-copy" class:phase-detail-copy-wide={!hasSideContent}>
          {#each section.bodyParagraphs as paragraph, paragraphIndex}
            <RichText text={paragraph} />

            {#if section.inlineImage?.afterParagraph === paragraphIndex + 1}
              <figure
                class="phase-inline-image"
                style:--inline-image-width={section.inlineImage.maxWidth ?? '760px'}
              >
                {#if section.inlineImage.title}
                  <h3 class="subsection-title">{section.inlineImage.title}</h3>
                {/if}

                {#if section.inlineImage.description}
                  <RichText text={section.inlineImage.description} />
                {/if}

                {#if section.inlineImage.zoomable}
                  <button
                    type="button"
                    class="phase-inline-image-button"
                    aria-label={currentJourneyPhasePage.openLargerImage}
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

          {#if section.strategyShortlistQuestionnaire}
            <StrategyShortlistQuestionnaire {...section.strategyShortlistQuestionnaire} />
          {/if}

          {#if section.baselineCards}
            <div class="baseline-card-grid">
              {#each section.baselineCards as card}
                <div class="baseline-card">
                  <span
                    class="baseline-card-icon"
                    style={`--icon-url: url("${iconParkUrl(card.icon)}");`}
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
                <RichText text={card.text} />
                  {/if}
                </div>
              {/each}
            </div>
          {/if}

          {#if section.factbox}
            <aside class="hotspot-factbox">
              <h3>{section.factbox.title}</h3>
              <ul>
                {#each section.factbox.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </aside>
          {/if}

          {#if section.principleBox}
            <aside class="phase-principle-box">
              <h3>{section.principleBox.title}</h3>

              <div class="phase-principle-list">
                {#each section.principleBox.items as item}
                  <article class="phase-principle-item">
                    <span
                      class="phase-principle-icon"
                      style={`--icon-url: url("${iconParkUrl(item.icon)}");`}
                      aria-hidden="true"
                    ></span>

                    <div>
                      <h4>{item.title}</h4>
                      <RichText text={item.text} />
                    </div>
                  </article>
                {/each}
              </div>
            </aside>
          {/if}

          {#if section.designForXFramework}
            <aside class="design-for-x-framework">
              <div class="design-for-x-heading">
                <RichText text={section.designForXFramework.intro} />
              </div>

              <div class="design-for-x-grid">
                {#each section.designForXFramework.cards as card}
                  <article class="design-for-x-card">
                    <div class="design-for-x-card-header">
                      <span
                        class="design-for-x-icon"
                        style={`--icon-url: url("${iconParkUrl(card.icon)}");`}
                        aria-hidden="true"
                      ></span>
                      <h4>{card.title}</h4>
                    </div>

                    <div class="design-for-x-card-body">
                      <section>
                        <h5>{currentJourneyPhasePage.whatItMeans}</h5>
                        <RichText text={card.meaning} />
                      </section>

                      <section>
                        <h5>{currentJourneyPhasePage.howToApplyIt}</h5>
                        {#if Array.isArray(card.application)}
                          <ul>
                            {#each card.application as item}
                              <li><InlineText text={item} /></li>
                            {/each}
                          </ul>
                        {:else}
                          <RichText text={card.application} />
                        {/if}
                      </section>

                      <section>
                        <h5>{currentJourneyPhasePage.euRegulation}</h5>
                        <RichText text={card.regulation} />
                      </section>
                    </div>
                  </article>
                {/each}
              </div>

              {#if section.designForXFramework.source}
                <RichText text={section.designForXFramework.source} className="design-for-x-source" />
              {/if}
            </aside>
          {/if}

          {#if section.processRedesign}
            <aside class="process-redesign">
              <div class="process-redesign-heading">
                <RichText text={section.processRedesign.intro} />
              </div>

              <div class="process-redesign-flow-arrow process-redesign-flow-arrow-top" aria-hidden="true"></div>

              <div class="process-redesign-grid">
                {#each section.processRedesign.columns as column}
                  <article class="process-redesign-column">
                    <div class="process-redesign-top">
                      <span
                        class="process-redesign-icon"
                        style={`--icon-url: url("${iconParkUrl(column.icon)}");`}
                        aria-hidden="true"
                      ></span>
                      <h4>{column.title}</h4>
                      <RichText text={column.subtitle} />
                    </div>

                    <ul>
                      {#each column.actions as action}
                        <li><InlineText text={action} /></li>
                      {/each}
                    </ul>
                  </article>
                {/each}
              </div>

              <div class="process-redesign-flow-arrow" aria-hidden="true"></div>

              {#if section.processRedesign.footer}
                <div class="process-redesign-footer">
                  <span aria-hidden="true">↻</span>
                  <RichText text={section.processRedesign.footer} />
                </div>
              {/if}
            </aside>
          {/if}

          {#if section.closingParagraphs}
            <div class="phase-detail-closing">
              <RichText text={section.closingParagraphs} />
            </div>
          {/if}

          {#if section.circularStrategiesWorkshop}
            <div class="circular-strategies-workshop-highlight">
              <h3 class="subsection-title">{section.circularStrategiesWorkshop.subtitle}</h3>

              <div class="circular-strategies-workshop-card-collection">
                <div class="circular-strategies-workshop-overview-grid">
                  <article class="circular-strategies-workshop-card circular-strategies-workshop-introduction">
                    <div class="circular-strategies-workshop-title-row">
                      <h3>{section.circularStrategiesWorkshop.title}</h3>
                      <span
                        class="circular-strategies-workshop-title-icon"
                        style={`--icon-url: url("${iconParkUrl(section.circularStrategiesWorkshop.icon)}");`}
                        aria-hidden="true"
                      ></span>
                    </div>
                    <RichText text={section.circularStrategiesWorkshop.introduction} />
                    <p class="circular-strategies-workshop-outcome">
                      <strong>{currentJourneyPhasePage.expectedOutcomes}</strong> <InlineText text={section.circularStrategiesWorkshop.outcome} />
                    </p>
                  </article>

                  <article class="circular-strategies-workshop-card circular-strategies-workshop-preparation">
                    <div class="circular-strategies-workshop-card-heading">
                      <h3>{section.circularStrategiesWorkshop.preparation.title}</h3>
                      <span class="circular-strategies-workshop-time">{section.circularStrategiesWorkshop.preparation.time}</span>
                    </div>

                    <RichText text={section.circularStrategiesWorkshop.preparation.text} />

                    <div class="circular-strategies-workshop-details">
                      {#each section.circularStrategiesWorkshop.preparation.details as detail}
                        <RichText text={detail} />
                      {/each}
                    </div>

                    <div>
                      <strong>{section.circularStrategiesWorkshop.preparation.listTitle}</strong>
                      <ul>
                        {#each section.circularStrategiesWorkshop.preparation.items as item}
                          <li><InlineText text={item} /></li>
                        {/each}
                      </ul>
                    </div>

                    <p class="circular-strategies-workshop-link">
                      <strong>{currentJourneyPhasePage.link}</strong>
                      <a
                        href={section.circularStrategiesWorkshop.preparation.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {section.circularStrategiesWorkshop.preparation.linkLabel}
                      </a>
                    </p>
                  </article>
                </div>

                <div class="circular-strategies-workshop-step-grid">
                  {#each section.circularStrategiesWorkshop.steps as step}
                    <article class="circular-strategies-workshop-card circular-strategies-workshop-step-card">
                      <div class="circular-strategies-workshop-card-heading">
                        <div>
                          <p class="circular-strategies-workshop-step-number">{currentJourneyPhasePage.step} {step.number}</p>
                          <h3>{step.title}</h3>
                        </div>
                        <span class="circular-strategies-workshop-time">{step.time}</span>
                      </div>

                      <RichText text={step.text} />
                      <p><strong>{currentJourneyPhasePage.tip}</strong> <InlineText text={step.tip} /></p>
                    </article>
                  {/each}
                </div>
              </div>
            </div>
          {/if}

          {#if section.learningResources}
            <div class="learning-resource-list" aria-label={currentJourneyPhasePage.learningResource}>
              {#each section.learningResources.cards as card}
                <article class="learning-resource-item">
                  <div class="learning-resource-card">
                    <div>
                      <p class="learning-resource-badge">
                        {section.learningResources.labels?.badge ?? currentJourneyPhasePage.learningResource}
                      </p>
                      <h3>{card.courseTitle}</h3>
                      <RichText text={card.shortDescription} />
                    </div>

                    <dl class="learning-resource-meta" aria-label={currentJourneyPhasePage.learningResource}>
                      <div>
                        <dt>{currentJourneyPhasePage.language}</dt>
                        <dd>{card.language}</dd>
                      </div>
                      <div>
                        <dt>{currentJourneyPhasePage.provider}</dt>
                        <dd>{card.provider}</dd>
                      </div>
                    </dl>

                    <a href={card.url} class="resource-link" target="_blank" rel="noreferrer">
                      {card.buttonLabel ?? 'Open resource'}
                    </a>
                  </div>

                  <div class="learning-resource-details">
                    <section>
                      <h3>{section.learningResources.labels?.about}</h3>
                      <RichText text={card.aboutCourse} />
                    </section>

                    <section>
                      <h3>{section.learningResources.labels?.learningGoals}</h3>
                      <ul>
                        {#each card.learningGoals as goal}
                          <li><InlineText text={goal} /></li>
                        {/each}
                      </ul>
                    </section>

                    <section>
                      <h3>{section.learningResources.labels?.whyTakeCourse}</h3>
                      <RichText text={card.whyTakeCourse} />
                    </section>
                  </div>
                </article>
              {/each}
            </div>
          {/if}

          </article>

        {#if section.image}
          <figure class="phase-detail-image">
            {#if section.image.zoomable}
              <button
                type="button"
                class="phase-detail-image-button"
                aria-label={currentJourneyPhasePage.openLargerImage}
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
      </div>

      {#if section.businessModelCards}
        <div class="container business-models-content">
          {#if section.businessModelsTitle}
            <h3 class="subsection-title business-models-title">{section.businessModelsTitle}</h3>
          {/if}

          {#if section.businessModelsIntro}
            <RichText text={section.businessModelsIntro} className="business-models-intro" />
          {/if}

          <div class="business-model-card-grid">
            {#each section.businessModelCards as card}
              <details class="business-model-card">
                <summary class="business-model-card-heading">
                  <span
                    class="business-model-card-icon"
                    style={`--icon-url: url("${iconParkUrl(card.icon)}");`}
                    aria-hidden="true"
                  ></span>
                  <h3>{card.title}</h3>
                  <span class="business-model-card-toggle" aria-hidden="true"></span>
                </summary>

                <div class="business-model-card-content">
                  <RichText text={card.text} />
                  <p class="business-model-example"><strong>{currentJourneyPhasePage.example}</strong> <InlineText text={card.example} /></p>
                </div>
              </details>
            {/each}
          </div>

          {#if section.afterBusinessModelsTitle || section.afterBusinessModelsText}
            <div class="business-models-afterword">
              {#if section.afterBusinessModelsTitle}
                <h3 class="subsection-title business-models-title">{section.afterBusinessModelsTitle}</h3>
              {/if}

              {#if section.afterBusinessModelsText}
                <RichText text={section.afterBusinessModelsText} className="business-models-intro" />
              {/if}
            </div>
          {/if}
        </div>
      {/if}

      {#if section.showRelevantTools !== false}
        <div class="container phase-detail-tools">
          <div class="section-intro">
            <h3 class="subsection-title">{currentJourneyPhasePage.relatedTitle}</h3>
          </div>

          {#if sectionResources.length > 0}
            <div class="phase-resource-grid embedded-resource-grid">
              {#each sectionResources as resource (resource.id)}
                <ResourceCard {resource} variant="compact" />
              {/each}
            </div>
          {:else}
            <p class="phase-empty-tools">{currentJourneyPhasePage.relatedEmpty}</p>
          {/if}
        </div>
      {/if}
    </section>
  {/each}

  {#if journeyPhase.summaryTitle}
    <section class="phase-summary-section {journeyPhase.colourClass}">
      <div class="container phase-summary-content">
        <div class="phase-summary-copy">
          <p class="eyebrow">{journeyPhase.shortName}</p>
          <h2>{journeyPhase.summaryTitle}</h2>

          <div class="phase-summary-text">
            <RichText text={journeyPhase.summaryParagraphs ?? [journeyPhase.summaryText]} />
          </div>

          <a
            href="{base}{localizePath('/guided-pathways/#journey-phases', currentLanguage)}"
            class="back-link journey-back-link summary-copy-next-link"
          >
            <span class="back-link-arrow" aria-hidden="true"></span>
            {currentJourneyPhasePage.summaryBackLink}
          </a>
        </div>

        <div class="phase-summary-checklist" aria-label={journeyPhase.summaryTitle}>
          <div class="summary-progress">
            <h3>{currentJourneyPhasePage.checklist}</h3>
            <p>{summaryCompletedCount} / {summaryChecklist.length} {currentJourneyPhasePage.complete}</p>
          </div>

          <div class="summary-items">
            {#each summaryChecklist as item, itemIndex}
              <label class="summary-item">
                <input
                  type="checkbox"
                  checked={summaryChecks[itemIndex]}
                  aria-label={item}
                  on:change={() => toggleSummaryCheck(itemIndex)}
                />
                <span>{item}</span>
              </label>
            {/each}
          </div>

          <div class="summary-completion">
            {#if journeyPhase.slug === 'monitor'}
              {#if isSummaryComplete}
                <div class="summary-final-message">
                  <p>{currentJourneyPhasePage.finalCongratulations}</p>
                </div>

                <div class="summary-completion-actions">
                  <a href="{base}{localizePath('/guided-pathways/#sectors', currentLanguage)}" class="primary-button">
                    {currentJourneyPhasePage.exploreSectors}
                  </a>
                  <a href="{base}{localizePath('/cases/', currentLanguage)}" class="primary-button">
                    {currentJourneyPhasePage.seeCases}
                  </a>
                  <a href="{base}{localizePath('/tools/', currentLanguage)}" class="primary-button">
                    {currentJourneyPhasePage.seeTools}
                  </a>
                </div>
              {/if}
            {:else if nextPhase}
              <div class="summary-completion-actions">
                <a
                  href="{base}{localizePath(`/journey-phases/${nextPhase.slug}/`, currentLanguage)}"
                  class="pathway-link summary-next-phase-link"
                  class:summary-action-disabled={!isSummaryComplete}
                  aria-disabled={!isSummaryComplete}
                  aria-label={`${currentJourneyPhasePage.nextPhase}: ${nextPhase.shortName}: ${nextPhase.title}`}
                  tabindex={isSummaryComplete ? 0 : -1}
                  title={isSummaryComplete ? undefined : 'Complete the checklist before moving on'}
                  on:click={preventLockedSummaryNavigation}
                >
                  {currentJourneyPhasePage.nextPhase}
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </section>
  {/if}
{:else}
  <section class="phase-tools-section">
    <div class="container">
      <div class="section-intro">
        <h3 class="subsection-title">{currentJourneyPhasePage.relatedTitle}</h3>
      </div>

      {#if relatedResources.length > 0}
        <div class="phase-resource-grid embedded-resource-grid">
          {#each relatedResources as resource (resource.id)}
            <ResourceCard {resource} variant="compact" />
          {/each}
        </div>
      {:else}
        <p class="phase-empty-tools">{currentJourneyPhasePage.relatedEmpty}</p>
      {/if}
    </div>
  </section>
{/if}

{#if zoomedImage}
  <div class="image-zoom-modal" role="dialog" aria-modal="true" aria-label={currentJourneyPhasePage.largerImage} tabindex="-1">
    <button type="button" class="image-zoom-backdrop" aria-label={currentJourneyPhasePage.closeImage} on:click={closeZoomedImage}></button>
    <div class="image-zoom-content">
      <button type="button" class="image-zoom-close" aria-label={currentJourneyPhasePage.closeImage} on:click={closeZoomedImage}>x</button>
      <img src="{base}{zoomedImage.src}" alt={zoomedImage.alt} />
      {#if zoomedImage.caption}
        <p>{zoomedImage.caption}</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  .phase-hero-content {
    max-width: var(--site-container-max);
    display: grid;
    grid-template-columns: 200px minmax(0, 820px);
    gap: 56px;
  }

  .phase-hero-topline {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    align-items: start;
    gap: 24px;
  }

  .phase-hero-topline .back-link {
    width: fit-content;
    margin: 0;
  }

  .journey-back-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .back-link-arrow {
    width: 0.95em;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
    transition: transform 0.18s ease;
  }

  .journey-back-link:hover .back-link-arrow,
  .journey-back-link:focus-visible .back-link-arrow {
    transform: translateX(-3px);
  }

  .phase-section-navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px 28px;
  }

  .phase-section-navigation .back-link {
    margin-bottom: 0;
  }

  .phase-hero-icon {
    width: 210px;
    aspect-ratio: 1;
    border-radius: 28px;
    display: grid;
    place-items: center;
    border: 0px solid var(--dark);
  }

  .phase-hero-icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .phase-body-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .phase-body-content {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
    gap: 56px;
    align-items: start;
  }

  .phase-body-content-wide {
    grid-template-columns: 1fr;
  }

  .phase-body-text {
    max-width: 720px;
  }

  .phase-body-content-wide .phase-body-text {
    max-width: 920px;
  }

  .phase-body-text h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .phase-body-subsection {
    display: grid;
    gap: 18px;
    margin-top: 40px;
  }

  .phase-body-subsection-image {
    display: grid;
    gap: 10px;
    max-width: 820px;
    margin: 10px 0 0;
  }

  .phase-body-subsection-image img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 15px;
  }

  .phase-body-subsection-image figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .phase-image-grid {
    display: grid;
    gap: 24px;
  }

  .phase-image-grid figure {
    display: grid;
    gap: 10px;
  }

  .phase-image-grid img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
  }

  .phase-image-grid figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .phase-tools-section {
    padding: 64px 0;
    background-color: var(--light-bg);
  }

  .phase-pathway-section {
    padding: 72px 0;
    background-color: var(--light-bg);
  }

  .phase-detail-heading h2,
  .phase-summary-copy h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    text-transform: uppercase;
  }

  .phase-summary-copy h2 {
    margin-bottom: 18px;
  }

  .phase-pathway-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 28px;
    margin-top: 40px;
  }

  .phase-pathway-grid-single {
    grid-template-columns: minmax(0, 920px);
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
    color: var(--phase-accent);
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
    color: var(--phase-accent);
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
    border: 0;
    border-radius: var(--action-button-radius);
    background-color: var(--blue);
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
    margin-top: auto;
  }

  .pathway-link:hover {
    background-color: var(--button-highlight);
  }

  .summary-next-phase-link {
    margin-top: 0;
  }

  .summary-action-disabled {
    border-color: var(--soft-border);
    background-color: color-mix(in srgb, var(--muted) 22%, var(--white));
    color: var(--muted);
    cursor: not-allowed;
    pointer-events: auto;
  }

  .summary-action-disabled:hover {
    border-color: var(--soft-border);
    background-color: color-mix(in srgb, var(--muted) 22%, var(--white));
    color: var(--muted);
  }

  .phase-detail-section {
    padding: 72px 0;
    background-color: var(--white);
    scroll-margin-top: 110px;
  }

  .phase-detail-section .eyebrow {
    color: var(--phase-accent);
  }

  .phase-detail-section-muted {
    background-color: var(--light-bg);
  }

  .phase-detail-content {
    display: grid;
    gap: 22px;
  }

  .phase-detail-heading {
    max-width: 760px;
  }

  .phase-detail-heading-wide {
    max-width: 980px;
  }

  .phase-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
    gap: 56px;
    align-items: start;
  }

  .phase-detail-layout-wide {
    grid-template-columns: minmax(0, 980px);
  }

  .phase-detail-copy {
    max-width: 760px;
  }

  .phase-detail-copy-wide {
    max-width: 980px;
  }

  .phase-inline-image {
    display: grid;
    gap: 18px;
    width: 100%;
    margin: 32px 0;
  }

  .phase-inline-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .phase-inline-image-button {
    width: min(100%, var(--inline-image-width));
    margin: 0 auto;
    padding: 0;
    border: 0;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--white);
    cursor: zoom-in;
  }

  .phase-inline-image-button img {
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .phase-inline-image-button:hover img,
  .phase-inline-image-button:focus-visible img {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(10, 46, 54, 0.16);
  }

  .phase-inline-image figcaption {
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

  :global(.business-models-intro) {
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

  .business-models-afterword {
    display: grid;
    gap: 12px;
    margin-top: 32px;
  }

  .business-model-card {
    min-width: 0;
    padding: 24px;
    border: 2px solid var(--phase-accent);
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
    background-color: var(--phase-accent);
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
    background-color: color-mix(in srgb, var(--phase-accent) 25%, var(--white));
  }

  .business-model-card[open] .business-model-card-toggle::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .business-model-card[open] .business-model-card-toggle {
    transform: rotate(180deg);
  }

  .business-model-card[open] .business-model-card-heading {
    border-bottom-color: var(--phase-accent);
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

  .circular-strategies-workshop-highlight {
    display: grid;
    gap: 22px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 42px;
  }

  .circular-strategies-workshop-card-collection {
    display: grid;
    gap: 22px;
    padding: 22px;
    border: 2px solid var(--yellow);
    border-radius: 15px;
    background-color: var(--yellow);
  }

  .circular-strategies-workshop-overview-grid,
  .circular-strategies-workshop-step-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .circular-strategies-workshop-card {
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

  .circular-strategies-workshop-card p {
    margin-top: 0;
    color: var(--text);
    line-height: 1.45;
  }

  .circular-strategies-workshop-title-row,
  .circular-strategies-workshop-card-heading {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 4px solid var(--yellow);
  }

  .circular-strategies-workshop-title-row h3,
  .circular-strategies-workshop-card-heading h3,
  .circular-strategies-workshop-step-number {
    color: var(--dark);
    line-height: 1.08;
    text-transform: uppercase;
  }

  .circular-strategies-workshop-title-row h3 {
    max-width: 520px;
    font-size: clamp(1.7rem, 3vw, 2.6rem);
  }

  .circular-strategies-workshop-title-icon {
    flex: 0 0 auto;
    width: 64px;
    height: 64px;
    background-color: var(--dark);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .circular-strategies-workshop-card-heading h3 {
    font-size: clamp(1.25rem, 2vw, 1.65rem);
  }

  .circular-strategies-workshop-step-number {
    margin-bottom: 6px;
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    font-weight: 700;
  }

  .circular-strategies-workshop-step-card .circular-strategies-workshop-card-heading h3 {
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: none;
  }

  .circular-strategies-workshop-outcome {
    margin-top: auto !important;
    padding-top: 18px;
    border-top: 1px solid rgba(10, 46, 54, 0.18);
  }

  .circular-strategies-workshop-time {
    flex: 0 0 auto;
    padding: 8px 12px;
    border-radius: 15px;
    background-color: var(--dark);
    color: var(--yellow);
    font-weight: 700;
    white-space: nowrap;
  }

  .circular-strategies-workshop-details {
    display: grid;
    gap: 2px;
  }

  .circular-strategies-workshop-card ul {
    margin-top: 6px;
    padding-left: 22px;
  }

  .circular-strategies-workshop-card li + li {
    margin-top: 5px;
  }

  .circular-strategies-workshop-link {
    margin-top: auto !important;
  }

  .circular-strategies-workshop-link a {
    color: var(--dark);
    font-weight: 700;
    text-underline-offset: 3px;
  }

  .circular-strategies-workshop-link a:hover {
    color: var(--phase-accent);
  }

  .phase-detail-image {
    display: grid;
    gap: 10px;
  }

  .phase-detail-image img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
  }

  .phase-detail-image-button {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: 20px;
    background: transparent;
    cursor: zoom-in;
  }

  .phase-detail-image-button img {
    height: auto;
    aspect-ratio: auto;
    object-fit: contain;
    background-color: var(--white);
    transition: box-shadow 0.18s ease, transform 0.18s ease;
  }

  .phase-detail-image-button:hover img,
  .phase-detail-image-button:focus-visible img {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(10, 46, 54, 0.16);
  }

  .phase-detail-image figcaption {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .phase-detail-tools {
    margin-top: 46px;
  }

  .learning-resource-list {
    display: grid;
    gap: 28px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 36px;
  }

  .learning-resource-item {
    display: grid;
    grid-template-columns: var(--embedded-tool-card-width) minmax(280px, 1fr);
    gap: 30px;
    align-items: start;
    padding: 24px;
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--phase-accent) 24%, var(--white));
  }

  .learning-resource-item + .learning-resource-item {
    margin-top: 0;
  }

  .learning-resource-card {
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

  .learning-resource-card .learning-resource-badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 12px;
    padding: 6px 10px;
    border: 1px solid var(--phase-border);
    border-radius: 999px;
    background-color: var(--phase-bg);
    color: var(--white);
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .learning-resource-card h3 {
    color: var(--dark);
    font-size: var(--tool-card-title-size, 1.65rem);
    line-height: 1.1;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .learning-resource-card p {
    color: var(--muted);
  }

  .learning-resource-meta {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  .learning-resource-meta div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--soft-border);
    padding-top: 10px;
  }

  .learning-resource-meta dt {
    color: var(--dark);
    font-weight: 700;
  }

  .learning-resource-meta dd {
    margin: 0;
    color: var(--muted);
    text-align: right;
  }

  .learning-resource-card .resource-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--action-button-padding);
    border: 0;
    border-radius: var(--action-button-radius);
    background-color: var(--blue);
    color: var(--white);
    font-weight: 700;
    text-decoration: none;
  }

  .learning-resource-card .resource-link:hover {
    background-color: var(--button-highlight);
  }

  .learning-resource-details {
    display: grid;
    gap: 20px;
    padding: 8px 4px;
  }

  .learning-resource-details section {
    display: grid;
    gap: 6px;
  }

  .learning-resource-details h3 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.08rem;
    font-weight: 700;
    line-height: 1.1;
  }

  .learning-resource-details p,
  .learning-resource-details li {
    color: var(--dark);
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .learning-resource-details ul {
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
    background-color: var(--green-secondary);
    color: var(--white);
    box-shadow: 0 16px 32px rgba(10, 46, 54, 0.12);
  }

  .hotspot-factbox h3 {
    font-family: Tahoma, Arial, sans-serif;
    color: var(--white);
    font-size: clamp(1.08rem, 1.8vw, 1.35rem);
    line-height: 1.16;
    text-transform: uppercase;
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
    color: var(--white);
    font-size: 0.8em;
  }

  .phase-principle-box {
    display: grid;
    gap: 24px;
    margin-top: 34px;
    padding: 32px;
    border: 2px solid var(--phase-accent);
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--phase-accent) 12%, var(--white));
    box-shadow: 0 12px 24px rgba(10, 46, 54, 0.08);
  }

  .phase-principle-box h3 {
    color: var(--phase-accent);
    font-family: Tahoma, Arial, sans-serif;
    font-size: clamp(1.55rem, 2.8vw, 2.2rem);
    line-height: 1.12;
  }

  .phase-principle-list {
    display: grid;
    gap: 18px;
  }

  .phase-principle-item {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
  }

  .phase-principle-icon {
    width: 38px;
    height: 38px;
    margin-top: 4px;
    background-color: var(--phase-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .phase-principle-item h4 {
    margin-bottom: 4px;
    color: var(--phase-accent);
    font-family: Tahoma, Arial, sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    line-height: 1.2;
  }

  .phase-principle-item p {
    color: var(--dark);
    font-size: 1rem;
    line-height: 1.35;
  }

  .design-for-x-framework,
  .process-redesign {
    display: grid;
    gap: 26px;
    width: min(var(--site-container-max), 92vw);
    max-width: calc(100vw - 32px);
    margin-top: 36px;
    padding: 30px;
    border-radius: 15px;
    background-color: var(--phase-accent);
  }

  .design-for-x-heading,
  .process-redesign-heading {
    display: grid;
    gap: 10px;
  }

  .design-for-x-heading p,
  .process-redesign-heading p {
    color: var(--dark);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    font-weight: 400;
    line-height: 1.2;
  }

  .design-for-x-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .design-for-x-card {
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--white);
  }

  .design-for-x-card-header {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    min-height: 118px;
    padding: 22px;
    background-color: var(--dark);
    color: var(--white);
  }

  .design-for-x-icon {
    width: 44px;
    height: 44px;
    background-color: var(--phase-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .design-for-x-card-header h4 {
    color: var(--white);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    line-height: 1.12;
    text-transform: uppercase;
  }

  .design-for-x-card-body {
    display: grid;
    gap: 0;
    padding: 22px;
  }

  .design-for-x-card-body section {
    display: grid;
    gap: 12px;
    padding: 18px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--phase-accent) 55%, var(--white));
  }

  .design-for-x-card-body section:first-child {
    padding-top: 0;
  }

  .design-for-x-card-body section:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .design-for-x-card-body h5 {
    color: var(--dark);
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
  }

  .design-for-x-card-body p {
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.28;
  }

  .design-for-x-card-body ul {
    display: grid;
    gap: 7px;
    margin: 0;
    padding-left: 20px;
  }

  .design-for-x-card-body li {
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.28;
  }

  .design-for-x-card-body li::marker {
    color: var(--phase-accent);
    font-size: 0.8em;
  }

  :global(.design-for-x-card-body section:last-child p) {
    font-style: italic;
  }

  :global(.design-for-x-source) {
    color: color-mix(in srgb, var(--dark) 58%, var(--phase-accent));
    font-size: 0.8rem;
    font-style: italic;
    line-height: 1.35;
  }

  .process-redesign-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 22px;
    position: relative;
  }

  .process-redesign-column {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    min-height: 390px;
    padding: 26px;
    border-radius: 15px;
    background-color: var(--dark);
    color: var(--white);
  }

  .process-redesign-top {
    display: grid;
    justify-items: center;
    gap: 10px;
    text-align: center;
  }

  .process-redesign-icon {
    width: 54px;
    height: 54px;
    position: relative;
  }

  .process-redesign-icon::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--phase-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .process-redesign-top h4 {
    color: var(--white);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    line-height: 1.08;
    text-transform: uppercase;
  }

  .process-redesign-top p {
    color: color-mix(in srgb, var(--white) 82%, var(--phase-accent));
    font-style: italic;
    line-height: 1.25;
  }

  .process-redesign-column ul {
    display: grid;
    gap: 22px;
    margin: 0;
    padding: 8px 0 0;
    color: inherit;
    list-style: none;
  }

  .process-redesign-column li {
    position: relative;
    padding-left: 28px;
    color: inherit;
    font-size: clamp(1rem, 1.4vw, 1.12rem);
    font-weight: 400;
    line-height: 1.3;
  }

  .process-redesign-column li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.45em;
    width: 10px;
    height: 10px;
    background-color: var(--phase-accent);
    border-radius: 999px;
  }

  .process-redesign-flow-arrow {
    position: relative;
    height: 22px;
    margin: 24px 24px 8px;
  }

  .process-redesign-flow-arrow-top {
    margin: 12px 24px 14px;
  }

  .process-redesign-flow-arrow::before {
    content: "";
    position: absolute;
    left: 0;
    right: 10px;
    top: 50%;
    height: 2px;
    background-color: var(--dark);
    transform: translateY(-50%);
  }

  .process-redesign-flow-arrow::after {
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

  .process-redesign-flow-arrow-top::before {
    left: 10px;
    right: 0;
  }

  .process-redesign-flow-arrow-top::after {
    left: 0;
    right: auto;
    transform: translateY(-50%) rotate(135deg);
  }

  .process-redesign-footer {
    display: flex;
    justify-content: center;
    gap: 8px;
    color: var(--muted);
    font-style: italic;
    line-height: 1.3;
  }

  .process-redesign-footer span {
    color: var(--phase-accent);
    font-weight: 700;
  }

  .baseline-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-top: 32px;
  }

  .phase-detail-copy-wide .baseline-card-grid,
  .phase-detail-copy-wide .hotspot-factbox {
    width: min(var(--site-container-max), 92vw);
  }

  .baseline-card {
    display: grid;
    justify-items: center;
    gap: 14px;
    min-height: 250px;
    padding: 28px 24px;
    border: 2px solid var(--phase-accent);
    border-radius: 8px;
    background-color: transparent;
    box-shadow: 0 12px 22px rgba(10, 46, 54, 0.08);
    text-align: center;
  }

  .baseline-card-icon {
    width: 68px;
    height: 68px;
    background-color: var(--phase-accent);
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .baseline-card h3 {
    font-family: Tahoma, Arial, sans-serif;
    color: var(--phase-accent);
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
    color: var(--phase-accent);
  }

  .phase-detail-closing {
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

  .phase-empty-tools {
    color: var(--muted);
  }

  .phase-summary-section {
    padding: 72px 0;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .phase-summary-section .eyebrow,
  .phase-summary-section h2,
  :global(.phase-summary-text p),
  :global(.phase-summary-text li) {
    color: var(--dark);
  }

  .phase-summary-content {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(320px, 1fr);
    gap: 48px;
    align-items: start;
  }

  .phase-summary-text {
    display: grid;
    gap: 28px;
    max-width: 640px;
  }

  .phase-summary-text p {
    margin: 0;
  }

  .summary-copy-next-link {
    display: inline-flex;
    margin-top: 44px;
    margin-bottom: 0;
  }

  .phase-summary-checklist {
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

  .summary-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: start;
    padding: 14px;
    border-radius: 14px;
    background-color: var(--light-bg);
    cursor: pointer;
  }

  .summary-items input {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    accent-color: var(--green-primary);
    opacity: 1;
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
    .phase-hero-content {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }

    .phase-hero-topline {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .phase-hero-icon {
      width: 96px;
      border-radius: 18px;
      order: 2;
    }

    .phase-hero-copy {
      display: contents;
    }

    .phase-hero-copy .eyebrow {
      order: 1;
      margin-bottom: 0;
    }

    .phase-hero-copy h1 {
      order: 3;
    }

    .phase-hero-copy :global(.subpage-intro) {
      order: 4;
    }

    .phase-section-navigation {
      order: 5;
    }

    .phase-body-content,
    .phase-detail-layout,
    .learning-resource-item,
    .phase-summary-content {
      grid-template-columns: 1fr;
    }

    .phase-pathway-grid,
    .baseline-card-grid,
    .design-for-x-grid,
    .process-redesign-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .business-model-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .circular-strategies-workshop-overview-grid,
    .circular-strategies-workshop-step-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .phase-pathway-grid,
    .baseline-card-grid,
    .design-for-x-grid,
    .process-redesign-grid {
      grid-template-columns: 1fr;
    }

    .design-for-x-framework,
    .process-redesign {
      padding: 20px;
    }

    .design-for-x-card-header {
      min-height: auto;
    }

    .process-redesign-column,
    .process-redesign-column ul {
      min-height: auto;
    }

    .process-redesign-flow-arrow {
      display: none;
    }

    .business-model-card-grid {
      grid-template-columns: 1fr;
    }

    .circular-strategies-workshop-card {
      padding: 20px;
    }

    .circular-strategies-workshop-card-collection {
      padding: 14px;
    }

    .circular-strategies-workshop-title-icon {
      width: 48px;
      height: 48px;
    }

    .circular-strategies-workshop-card-heading {
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
