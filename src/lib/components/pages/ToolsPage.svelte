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

  const NO_PHASE = 'None';

  /**
   * @param {any} resource
   * @param {{
   *   search?: string;
   *   sector?: string;
   *   phase?: string;
   *   language?: string;
   *   access?: string;
   * }} filters
   */
  function resourceMatchesFilters(resource, filters) {
    const matchesSearch =
      !filters.search ||
      resource.title.toLowerCase().includes(filters.search) ||
      resource.description.toLowerCase().includes(filters.search) ||
      resource.sectorDisplay.toLowerCase().includes(filters.search) ||
      resource.languageDisplay.toLowerCase().includes(filters.search) ||
      resource.provider.toLowerCase().includes(filters.search) ||
      resource.accessDisplay.toLowerCase().includes(filters.search);

    const matchesSector =
      !filters.sector || resource.filterValues.sectors.includes(filters.sector);
    const matchesPhase =
      !filters.phase || resource.filterValues.journeyPhases.includes(filters.phase);
    const matchesLanguage =
      !filters.language || resource.filterValues.languages.includes(filters.language);
    const matchesAccess =
      !filters.access || resource.filterValues.access.includes(filters.access);

    return matchesSearch && matchesSector && matchesPhase && matchesLanguage && matchesAccess;
  }

  $: resourcesMatchingNonPhaseFilters = resources.filter((resource) =>
    resourceMatchesFilters(resource, {
      search: normalisedSearch,
      sector: selectedSector,
      language: selectedLanguage,
      access: selectedAccess
    })
  );

  $: availableJourneyPhaseSet = new Set(
    resourcesMatchingNonPhaseFilters
      .flatMap((resource) => resource.filterValues.journeyPhases)
      .filter((phase) => phase !== NO_PHASE)
  );

  $: disabledJourneyPhases = journeyPhases.filter(
    (phase) => phase !== selectedPhase && !availableJourneyPhaseSet.has(phase)
  );

  $: resourcesMatchingNonLanguageFilters = resources.filter((resource) =>
    resourceMatchesFilters(resource, {
      search: normalisedSearch,
      sector: selectedSector,
      phase: selectedPhase,
      access: selectedAccess
    })
  );

  $: availableLanguageSet = new Set(
    resourcesMatchingNonLanguageFilters.flatMap((resource) => resource.filterValues.languages)
  );

  $: disabledLanguages = languages.filter(
    (language) => language !== selectedLanguage && !availableLanguageSet.has(language)
  );

  $: resourcesMatchingNonAccessFilters = resources.filter((resource) =>
    resourceMatchesFilters(resource, {
      search: normalisedSearch,
      sector: selectedSector,
      phase: selectedPhase,
      language: selectedLanguage
    })
  );

  $: availableAccessSet = new Set(
    resourcesMatchingNonAccessFilters.flatMap((resource) => resource.filterValues.access)
  );

  $: disabledAccessOptions = accessOptions.filter(
    (access) => access !== selectedAccess && !availableAccessSet.has(access)
  );

  $: filteredResources = resources.filter((resource) =>
    resourceMatchesFilters(resource, {
      search: normalisedSearch,
      sector: selectedSector,
      phase: selectedPhase,
      language: selectedLanguage,
      access: selectedAccess
    })
  );

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

      <FilterSelect id="sector-filter" label={toolsPage.sectorLabel} bind:value={selectedSector} options={sectors} />
      <FilterSelect
        id="phase-filter"
        label={toolsPage.phaseLabel}
        bind:value={selectedPhase}
        options={journeyPhases}
        disabledOptions={disabledJourneyPhases}
        disabledOptionTitle={toolsPage.disabledPhaseTitle}
      />
      <FilterSelect
        id="language-filter"
        label={toolsPage.languageLabel}
        bind:value={selectedLanguage}
        options={languages}
        disabledOptions={disabledLanguages}
        disabledOptionTitle={toolsPage.disabledLanguageTitle}
      />
      <FilterSelect
        id="access-filter"
        label={toolsPage.accessLabel}
        bind:value={selectedAccess}
        options={accessOptions}
        disabledOptions={disabledAccessOptions}
        disabledOptionTitle={toolsPage.disabledAccessTitle}
      />

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
