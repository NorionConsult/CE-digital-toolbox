<script>
  import JourneyPhaseBadges from '$lib/components/cards/JourneyPhaseBadges.svelte';
  import SectorBadge from '$lib/components/cards/SectorBadge.svelte';

  /** @type {{ journeyPhases?: string[]; filterValues?: { sectors?: string[] }; sectorDisplay?: string; sector?: string }} */
  export let resource;
  /** @type {'card' | 'hero'} */
  export let variant = 'card';

  /**
   * @param {{ journeyPhases?: string[] }} item
   * @returns {string[]}
   */
  function getPhaseBadges(item) {
    return (item.journeyPhases ?? []).filter((phase) => phase !== 'None');
  }

  /**
   * @param {{ filterValues?: { sectors?: string[] }; sectorDisplay?: string; sector?: string }} item
   * @returns {string[]}
   */
  function getSectorBadges(item) {
    const sectors = item.filterValues?.sectors ?? [item.sectorDisplay ?? item.sector ?? ''];

    return sectors.filter((sector) => sector !== '' && sector !== 'Cross-sector');
  }

  $: phaseBadges = getPhaseBadges(resource);
  $: sectorBadges = getSectorBadges(resource);
</script>

{#if phaseBadges.length > 0 || sectorBadges.length > 0}
  <div class="resource-badges" class:resource-badges-hero={variant === 'hero'}>
    {#if phaseBadges.length > 0}
      <JourneyPhaseBadges phases={phaseBadges} variant="inline" />
    {/if}

    {#each sectorBadges as sector}
      <SectorBadge {sector} />
    {/each}
  </div>
{/if}

<style>
  .resource-badges {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    margin-bottom: 12px;
  }

  .resource-badges-hero {
    margin-bottom: 0;
  }
</style>
