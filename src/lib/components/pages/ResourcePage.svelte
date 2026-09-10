<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import RichText from '$lib/components/formatting/RichText.svelte';
  import ResourceBadges from '$lib/components/cards/ResourceBadges.svelte';
  import { site } from '$lib/content/editable/global/site.js';
  import { translateTaxonomyDisplay, translateTaxonomyList, translateTaxonomyValue } from '$lib/content/technical/taxonomy-labels.js';
  import { isDownloadableToolLink } from '$lib/content/technical/tool-catalogue-utils.js';
  import { getLanguageFromPathname, localizeContent, localizePath, translate } from '$lib/translation-helper.js';

  export let resource;

  const labels = {
    backToTools: { en: 'Back to tools', uk: 'Назад до інструментів', ro: 'Înapoi la instrumente', hy: 'Վերադառնալ գործիքներին' },
    timeRequired: { en: 'Time required', uk: 'Потрібний час', ro: 'Timp necesar', hy: 'Պահանջվող ժամանակ' },
    preparationNeeded: { en: 'Preparation needed', uk: 'Потрібна підготовка', ro: 'Pregătire necesară', hy: 'Պահանջվող նախապատրաստություն' },
    output: { en: 'Output', uk: 'Результат', ro: 'Rezultat', hy: 'Արդյունք' },
    bestFor: { en: 'Best for', uk: 'Найкраще підходить для', ro: 'Potrivit pentru', hy: 'Լավագույնը՝' },
    about: { en: 'About', uk: 'Про інструмент', ro: 'Despre', hy: 'Մասին' },
    journey: { en: 'SME journey', uk: 'Шлях МСП', ro: 'Parcursul IMM', hy: 'ՓՄՁ ուղին' },
    sector: { en: 'Sector', uk: 'Сектор', ro: 'Sector', hy: 'Ոլորտ' },
    effort: { en: 'Effort', uk: 'Зусилля', ro: 'Efort', hy: 'Ջանք' },
    format: { en: 'Format', uk: 'Формат', ro: 'Format', hy: 'Ձեւաչափ' },
    language: { en: 'Language', uk: 'Мова', ro: 'Limbă', hy: 'Լեզու' },
    provider: { en: 'Provider', uk: 'Постачальник', ro: 'Furnizor', hy: 'Մատակարար' },
    access: { en: 'Access', uk: 'Доступ', ro: 'Acces', hy: 'Մուտք' },
    none: { en: 'None', uk: 'Немає', ro: 'Niciuna', hy: 'Չկա' },
    resourceTaxonomy: {
      en: 'Resource taxonomy',
      uk: 'Таксономія ресурсу',
      ro: 'Taxonomia resursei',
      hy: 'Ռեսուրսի դասակարգում'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
  $: currentResource = localizeContent(resource, currentLanguage);
  $: journeyPhases = currentResource.journeyPhases ?? [];
  $: journeyPhaseText = journeyPhases.length > 0
    ? translateTaxonomyList(journeyPhases, 'journeyPhases', currentLanguage).join(', ')
    : translate(labels.none, currentLanguage);
  $: sectorText = translateTaxonomyDisplay(currentResource.sectorDisplay ?? currentResource.sector, 'sectors', currentLanguage);
  $: effortText = translateTaxonomyValue(currentResource.effortDisplay ?? currentResource.effort, 'effort', currentLanguage);
  $: languageText = translateTaxonomyDisplay(currentResource.languageFullDisplay ?? currentResource.language, 'languages', currentLanguage);
  $: accessText = translateTaxonomyValue(currentResource.accessDisplay ?? currentResource.access, 'access', currentLanguage);
  $: isLocalToolLink = currentResource.toolLink?.startsWith('/');
  $: toolHref = isLocalToolLink ? `${base}${currentResource.toolLink}` : currentResource.toolLink;
  $: isDownloadableTool = isDownloadableToolLink(currentResource.toolLink);
  $: shouldDownloadTool = isLocalToolLink && isDownloadableTool;

  $: detailRows = [
    [translate(labels.timeRequired, currentLanguage), currentResource.timeRequired],
    [translate(labels.preparationNeeded, currentLanguage), currentResource.preparationNeeded],
    [translate(labels.output, currentLanguage), currentResource.output],
    [translate(labels.bestFor, currentLanguage), currentResource.bestFor]
  ];

  $: taxonomyRows = [
    [translate(labels.journey, currentLanguage), journeyPhaseText],
    [translate(labels.sector, currentLanguage), sectorText],
    [translate(labels.effort, currentLanguage), effortText],
    [translate(labels.format, currentLanguage), currentResource.format],
    [translate(labels.language, currentLanguage), languageText],
    [translate(labels.provider, currentLanguage), currentResource.provider],
    [translate(labels.access, currentLanguage), accessText]
  ];

</script>

<svelte:head>
  <title>{currentResource.title} | {currentSite.name}</title>
</svelte:head>

<section class="resource-hero">
  <div class="container resource-hero-content">
    <a href="{base}{localizePath('/tools/', currentLanguage)}" class="back-link">
      {translate(labels.backToTools, currentLanguage)}
    </a>

    <div class="resource-kicker">
      <ResourceBadges resource={currentResource} variant="hero" />
    </div>

    <h1>{currentResource.title}</h1>
    <p class="resource-summary">{currentResource.description}</p>

    {#if currentResource.toolLink}
      <a
        class="primary-button resource-tool-link"
        href={toolHref}
        target={shouldDownloadTool ? undefined : '_blank'}
        rel={shouldDownloadTool ? undefined : 'noreferrer'}
        download={shouldDownloadTool ? '' : undefined}
      >
        {isDownloadableTool ? currentSite.labels.downloadTool : currentSite.labels.openTool}
      </a>
    {/if}
  </div>
</section>

<section class="resource-detail-section">
  <div class="container resource-detail-layout">
    <article class="resource-main">
      <RichText text={currentResource.about} className="resource-about" />

      <div class="resource-detail-grid">
        {#each detailRows as row}
          <section class="resource-detail-item">
            <h3>{row[0]}</h3>
            <p>{row[1]}</p>
          </section>
        {/each}
      </div>

    </article>

    <aside class="resource-taxonomy" aria-label={translate(labels.resourceTaxonomy, currentLanguage)}>
      <h2>{translate(labels.about, currentLanguage)}</h2>
      <dl>
        {#each taxonomyRows as row}
          <div>
            <dt>{row[0]}</dt>
            <dd>{row[1]}</dd>
          </div>
        {/each}
      </dl>
    </aside>
  </div>
</section>

<style>
  .resource-hero {
    padding: var(--page-hero-padding);
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .resource-hero-content {
    max-width: var(--site-container-max);
  }

  .resource-kicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .resource-hero h1 {
    font-size: clamp(2.8rem, 7vw, 5.75rem);
    line-height: 0.95;
    text-transform: uppercase;
    margin-bottom: 24px;
    overflow-wrap: anywhere;
  }

  .resource-summary {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
    max-width: 740px;
  }

  .resource-hero .resource-tool-link {
    width: fit-content;
    margin-top: 28px;
  }

  .resource-detail-section {
    padding: 64px 0;
    background-color: var(--white);
  }

  .resource-detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 48px;
    align-items: start;
  }

  .resource-main {
    display: grid;
    gap: 28px;
  }

  .resource-taxonomy h2 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    text-transform: uppercase;
  }

  :global(.resource-about) {
    display: grid;
    gap: 18px;
  }

  :global(.resource-about p),
  :global(.resource-about ol),
  :global(.resource-about ul) {
    max-width: 760px;
    font-size: 1.08rem;
  }

  :global(.resource-about ol),
  :global(.resource-about ul) {
    display: grid;
    gap: 10px;
    padding-left: 26px;
  }

  :global(.resource-about li) {
    line-height: 1.45;
  }

  .resource-detail-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .resource-detail-item {
    border-top: 2px solid var(--soft-border);
    padding-top: 16px;
  }

  .resource-detail-item h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .resource-tool-link {
    width: fit-content;
  }

  .resource-taxonomy {
    background-color: var(--light-bg);
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    padding: 24px;
    position: sticky;
    top: 112px;
  }

  .resource-taxonomy h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  .resource-taxonomy dl {
    display: grid;
    gap: 12px;
  }

  .resource-taxonomy div {
    border-top: 1px solid var(--soft-border);
    padding-top: 12px;
  }

  .resource-taxonomy dt {
    color: var(--dark);
    font-weight: 700;
  }

  .resource-taxonomy dd {
    color: var(--muted);
    margin-top: 2px;
  }

  @media (max-width: 900px) {
    .resource-detail-layout,
    .resource-detail-grid {
      grid-template-columns: 1fr;
    }

    .resource-taxonomy {
      position: static;
    }
  }

  @media (max-width: 640px) {
    .resource-hero h1 {
      font-size: clamp(2rem, 9.5vw, 2.9rem);
      line-height: 0.95;
    }

    .resource-summary {
      font-size: 1.08rem;
    }

    .resource-hero .resource-tool-link {
      margin-top: 22px;
    }
  }
</style>
