<script>
  import FilterSelect from '$lib/components/forms/FilterSelect.svelte';
  import ResourceCard from '$lib/components/cards/ResourceCard.svelte';
  import { toolsPage } from '$lib/content/tools-page.js';
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
  <title>{toolsPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero tools-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{toolsPage.eyebrow}</p>
    <h1>{toolsPage.title}</h1>
    <p class="subpage-intro">{toolsPage.intro}</p>
  </div>
</section>

<section class="tools-section">
  <div class="container">
    <form class="filter-panel" aria-label={toolsPage.filtersLabel} on:submit|preventDefault>
      <label class="search-field" for="resource-search">
        <span>{toolsPage.searchLabel}</span>
        <input
          id="resource-search"
          type="search"
          bind:value={searchTerm}
          placeholder={toolsPage.searchPlaceholder}
        />
      </label>

      <FilterSelect id="phase-filter" label={toolsPage.phaseLabel} bind:value={selectedPhase} options={journeyPhases} />
      <FilterSelect id="sector-filter" label={toolsPage.sectorLabel} bind:value={selectedSector} options={sectors} />
      <FilterSelect id="language-filter" label={toolsPage.languageLabel} bind:value={selectedLanguage} options={languages} />
      <FilterSelect id="access-filter" label={toolsPage.accessLabel} bind:value={selectedAccess} options={accessOptions} />

      <button type="button" class="reset-button" on:click={resetFilters}>{toolsPage.resetButton}</button>
    </form>

    <div class="tools-results-bar" aria-live="polite">
      <p>
        {toolsPage.resultPrefix}
        <strong>{filteredResources.length}</strong>
        {toolsPage.resultMiddle}
        <strong>{resources.length}</strong>
        {toolsPage.resultSuffix}
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
        <h2>{toolsPage.emptyTitle}</h2>
        <p>{toolsPage.emptyText}</p>
        <button type="button" class="reset-button" on:click={resetFilters}>{toolsPage.resetButton}</button>
      </div>
    {/if}
  </div>
</section>

<style>
  .tools-hero {
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

  .tools-results-bar {
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
