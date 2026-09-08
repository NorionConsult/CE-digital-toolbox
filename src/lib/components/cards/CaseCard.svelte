<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { site } from '$lib/content/editable/global/site.js';
  import { translateTaxonomyDisplay, translateTaxonomyList } from '$lib/content/technical/taxonomy-labels.js';
  import { getLanguageFromPathname, localizeContent, localizePath, translate } from '$lib/translation-helper.js';
  import SectorBadge from './SectorBadge.svelte';

  export let caseStudy;
  export let variant = 'default';

  const labels = {
    companyName: { en: 'Company name', uk: 'Назва компанії', ro: 'Numele companiei', hy: 'Ընկերության անունը' },
    country: { en: 'Country', uk: 'Країна', ro: 'Țară', hy: 'Երկիր' },
    rStrategy: { en: 'R strategy', uk: 'R-стратегія', ro: 'Strategie R', hy: 'R ռազմավարություն' },
    notSpecified: { en: 'Not specified', uk: 'Не зазначено', ro: 'Nespecificat', hy: 'Նշված չէ' }
  };

  $: isCompact = variant === 'compact';
  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
  $: currentCaseStudy = localizeContent(caseStudy, currentLanguage);
  $: rStrategyText = currentCaseStudy.rStrategies?.length
    ? translateTaxonomyList(currentCaseStudy.rStrategies, 'rStrategies', currentLanguage).join(', ')
    : translate(labels.notSpecified, currentLanguage);
  $: countryText = translateTaxonomyDisplay(currentCaseStudy.countryDisplay || currentCaseStudy.country, 'countries', currentLanguage);
  $: sectorBadges = currentCaseStudy.sectors?.length ? currentCaseStudy.sectors : [currentCaseStudy.sector];
</script>

<article class="case-card" class:case-card-compact={isCompact}>
  <div class="case-card-heading">
    <div class="case-badges" aria-label="Case sectors">
      {#each sectorBadges as sector}
        <SectorBadge {sector} />
      {/each}
    </div>
    <h3>{currentCaseStudy.companyName}</h3>
    <p>{currentCaseStudy.summary}</p>
  </div>

  <dl aria-label="Case taxonomy">
    <div>
      <dt>{translate(labels.companyName, currentLanguage)}</dt>
      <dd>{currentCaseStudy.companyName}</dd>
    </div>
    <div>
      <dt>{translate(labels.country, currentLanguage)}</dt>
      <dd>{countryText}</dd>
    </div>
    <div>
      <dt>{translate(labels.rStrategy, currentLanguage)}</dt>
      <dd>{rStrategyText}</dd>
    </div>
  </dl>

  <a href="{base}{localizePath(`/cases/${currentCaseStudy.slug}/`, currentLanguage)}" class="case-link" target="_blank" rel="noreferrer">
    {currentSite.labels.viewCase}
  </a>
</article>

<style>
  .case-card {
    display: flex;
    flex-direction: column;
    gap: 22px;
    min-height: 330px;
    padding: 28px;
    border: 1px solid var(--soft-border);
    border-radius: 22px;
    background-color: var(--white);
    box-shadow: 0 8px 24px rgba(10, 46, 54, 0.06);
  }

  .case-card-heading {
    display: grid;
    gap: 12px;
  }

  .case-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  h3 {
    color: var(--dark);
    font-size: 1.65rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .case-card-heading p {
    color: var(--muted);
  }

  dl {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  dl div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-top: 10px;
    border-top: 1px solid var(--soft-border);
  }

  dt {
    flex: 0 0 auto;
    color: var(--dark);
    font-weight: 700;
    white-space: nowrap;
  }

  dd {
    min-width: 0;
    color: var(--muted);
    text-align: right;
  }

  .case-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--action-button-padding);
    border: 0;
    border-radius: var(--action-button-radius);
    background-color: var(--blue);
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
  }

  .case-link:hover {
    background-color: var(--button-highlight);
  }

  .case-card-compact {
    min-height: 290px;
    padding: 22px;
    border-radius: 18px;
  }
</style>
