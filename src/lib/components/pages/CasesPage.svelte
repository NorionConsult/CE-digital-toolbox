<script>
  import CaseCard from '$lib/components/cards/CaseCard.svelte';
  import FilterSelect from '$lib/components/forms/FilterSelect.svelte';
  import { cases, caseClientSegments, caseCountries, caseSectors } from '$lib/content/cases.js';
  import { casesPage } from '$lib/content/cases-page.js';

  let selectedSector = '';
  let selectedCountry = '';
  let selectedClientSegment = '';
  let searchTerm = '';

  $: normalisedSearch = searchTerm.trim().toLowerCase();
  $: filteredCases = cases.filter((caseStudy) => {
    const matchesSearch =
      !normalisedSearch ||
      caseStudy.companyName.toLowerCase().includes(normalisedSearch) ||
      caseStudy.description.toLowerCase().includes(normalisedSearch) ||
      caseStudy.sector.toLowerCase().includes(normalisedSearch) ||
      caseStudy.country.toLowerCase().includes(normalisedSearch) ||
      caseStudy.clientSegment.toLowerCase().includes(normalisedSearch);

    const matchesSector = !selectedSector || caseStudy.sector === selectedSector;
    const matchesCountry = !selectedCountry || caseStudy.country === selectedCountry;
    const matchesClientSegment = !selectedClientSegment || caseStudy.clientSegment === selectedClientSegment;

    return matchesSearch && matchesSector && matchesCountry && matchesClientSegment;
  });

  function resetFilters() {
    selectedSector = '';
    selectedCountry = '';
    selectedClientSegment = '';
    searchTerm = '';
  }
</script>

<svelte:head>
  <title>{casesPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero cases-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{casesPage.eyebrow}</p>
    <h1>{casesPage.title}</h1>
    <p class="subpage-intro">{casesPage.intro}</p>
  </div>
</section>

<section class="cases-section">
  <div class="container">
    <form class="filter-panel" aria-label={casesPage.filtersLabel} on:submit|preventDefault>
      <label class="search-field" for="case-search">
        <span>{casesPage.searchLabel}</span>
        <input id="case-search" type="search" bind:value={searchTerm} placeholder={casesPage.searchPlaceholder} />
      </label>

      <FilterSelect id="case-sector-filter" label={casesPage.sectorLabel} bind:value={selectedSector} options={caseSectors} />
      <FilterSelect id="case-country-filter" label={casesPage.countryLabel} bind:value={selectedCountry} options={caseCountries} />
      <FilterSelect
        id="case-client-filter"
        label={casesPage.clientSegmentLabel}
        bind:value={selectedClientSegment}
        options={caseClientSegments}
      />

      <button type="button" class="reset-button" on:click={resetFilters}>{casesPage.resetButton}</button>
    </form>

    <div class="results-bar" aria-live="polite">
      <p>
        {casesPage.resultPrefix}
        <strong>{filteredCases.length}</strong>
        {casesPage.resultMiddle}
        <strong>{cases.length}</strong>
        {casesPage.resultSuffix}
      </p>
    </div>

    {#if filteredCases.length > 0}
      <div class="case-grid">
        {#each filteredCases as caseStudy (caseStudy.id)}
          <CaseCard {caseStudy} />
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <h2>{casesPage.emptyTitle}</h2>
        <p>{casesPage.emptyText}</p>
        <button type="button" class="reset-button" on:click={resetFilters}>{casesPage.resetButton}</button>
      </div>
    {/if}
  </div>
</section>

<style>
  .cases-hero {
    padding: 88px 0 72px;
  }

  .cases-section {
    padding: 50px 0;
    background-color: var(--white);
  }

  .filter-panel {
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr) auto;
    gap: 16px;
    align-items: end;
    padding: 24px;
    margin-bottom: 28px;
    border: 1px solid var(--soft-border);
    border-radius: 24px;
    background-color: var(--light-bg);
  }

  .search-field {
    display: grid;
    gap: 8px;
  }

  .search-field span {
    color: var(--dark);
    font-weight: 700;
  }

  input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--soft-border);
    border-radius: 12px;
    background-color: var(--white);
    color: var(--dark);
  }

  input:focus {
    outline: 3px solid rgba(9, 187, 136, 0.25);
    border-color: var(--green-primary);
  }

  .reset-button {
    min-height: 50px;
  }

  .results-bar {
    margin-bottom: 24px;
    color: var(--muted);
  }

  .case-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .empty-state {
    padding: 48px;
    border: 1px solid var(--soft-border);
    border-radius: 24px;
    background-color: var(--light-bg);
    text-align: center;
  }

  .empty-state h2 {
    margin-bottom: 12px;
    font-size: 2.2rem;
    text-transform: uppercase;
  }

  .empty-state p {
    margin-bottom: 24px;
  }

  @media (max-width: 1120px) {
    .filter-panel,
    .case-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .filter-panel,
    .case-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
