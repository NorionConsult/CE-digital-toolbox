<script>
  import FilterSelect from '$lib/components/forms/FilterSelect.svelte';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';
  import { libraryPage } from '$lib/content/library-page.js';
  import { resources, journeyPhases, sectors, languages, accessOptions } from '$lib/content/resources.js';

  let selectedPhase = '';
  let selectedSector = '';
  let selectedLanguage = '';
  let selectedAccess = '';
  let searchTerm = '';

  $: normalisedSearch = searchTerm.trim().toLowerCase();

  $: filteredResources = resources.filter((resource) => {
    const matchesSearch =
      !normalisedSearch ||
      resource.title.toLowerCase().includes(normalisedSearch) ||
      resource.description.toLowerCase().includes(normalisedSearch) ||
      resource.sector.toLowerCase().includes(normalisedSearch) ||
      resource.provider.toLowerCase().includes(normalisedSearch) ||
      resource.access.toLowerCase().includes(normalisedSearch);

    const matchesPhase = !selectedPhase || (resource.journeyPhases ?? [resource.journeyPhase]).includes(selectedPhase);
    const matchesSector = !selectedSector || resource.sector === selectedSector;
    const matchesLanguage = !selectedLanguage || resource.language === selectedLanguage;
    const matchesAccess = !selectedAccess || resource.access === selectedAccess;

    return matchesSearch && matchesPhase && matchesSector && matchesLanguage && matchesAccess;
  });

  function resetFilters() {
    selectedPhase = '';
    selectedSector = '';
    selectedLanguage = '';
    selectedAccess = '';
    searchTerm = '';
  }
</script>

<svelte:head>
  <title>{libraryPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero library-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{libraryPage.eyebrow}</p>
    <h1>{libraryPage.title}</h1>
    <p class="subpage-intro">{libraryPage.intro}</p>
  </div>
</section>

<section class="library-section">
  <div class="container">
    <form class="filter-panel" aria-label={libraryPage.filtersLabel} on:submit|preventDefault>
      <label class="search-field" for="resource-search">
        <span>{libraryPage.searchLabel}</span>
        <input
          id="resource-search"
          type="search"
          bind:value={searchTerm}
          placeholder={libraryPage.searchPlaceholder}
        />
      </label>

      <FilterSelect id="phase-filter" label={libraryPage.phaseLabel} bind:value={selectedPhase} options={journeyPhases} />
      <FilterSelect id="sector-filter" label={libraryPage.sectorLabel} bind:value={selectedSector} options={sectors} />
      <FilterSelect id="language-filter" label={libraryPage.languageLabel} bind:value={selectedLanguage} options={languages} />
      <FilterSelect id="access-filter" label={libraryPage.accessLabel} bind:value={selectedAccess} options={accessOptions} />

      <button type="button" class="reset-button" on:click={resetFilters}>{libraryPage.resetButton}</button>
    </form>

    <div class="library-results-bar" aria-live="polite">
      <p>
        {libraryPage.resultPrefix}
        <strong>{filteredResources.length}</strong>
        {libraryPage.resultMiddle}
        <strong>{resources.length}</strong>
        {libraryPage.resultSuffix}
      </p>
    </div>

    {#if filteredResources.length > 0}
      <div class="resource-grid">
        {#each filteredResources as resource (resource.id)}
          <ResourceCard {resource} />
        {/each}
      </div>
    {:else}
      <div class="empty-state">
        <h2>{libraryPage.emptyTitle}</h2>
        <p>{libraryPage.emptyText}</p>
        <button type="button" class="reset-button" on:click={resetFilters}>{libraryPage.resetButton}</button>
      </div>
    {/if}
  </div>
</section>

<style>
  .library-hero {
    padding: 88px 0 72px;
  }

  .filter-panel {
    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr) auto;
    gap: 16px;
    align-items: end;
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 24px;
    background-color: var(--light-bg);
    margin-bottom: 28px;
  }

  .search-field {
    display: grid;
    gap: 8px;
  }

  .search-field span {
    font-weight: 700;
    color: var(--dark);
  }

  input {
    width: 100%;
    border: 1px solid var(--soft-border);
    border-radius: 12px;
    padding: 12px 14px;
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

  .library-results-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--muted);
  }

  .resource-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .empty-state {
    padding: 48px;
    border-radius: 24px;
    background-color: var(--light-bg);
    border: 1px solid var(--soft-border);
    text-align: center;
  }

  .empty-state h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .empty-state p {
    margin-bottom: 24px;
  }

  @media (max-width: 1120px) {
    .filter-panel {
      grid-template-columns: repeat(2, 1fr);
    }

    .resource-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .filter-panel,
    .resource-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
