<script>
  import JourneyPhaseBadges from '$lib/components/cards/JourneyPhaseBadges.svelte';
  import SectorBadge from '$lib/components/cards/SectorBadge.svelte';

  /** @type {{ journeyPhases?: string[]; journeyPhase?: string; sectorDisplay?: string; sector?: string }} */
  export let resource;
  /** @type {'card' | 'hero'} */
  export let variant = 'card';

  /**
   * @param {{ journeyPhases?: string[]; journeyPhase?: string }} item
   * @returns {string[]}
   */
  function getPhaseBadges(item) {
    return (item.journeyPhases ?? (item.journeyPhase ? [item.journeyPhase] : [])).filter(
      (phase) => phase !== 'None'
    );
  }

  /**
   * @param {{ sectorDisplay?: string; sector?: string }} item
   * @returns {string}
   */
  function getSectorBadge(item) {
    return item.sectorDisplay ?? item.sector ?? '';
  }

  $: phaseBadges = getPhaseBadges(resource);
  $: sectorBadge = getSectorBadge(resource);
  $: showSectorBadge = sectorBadge !== '' && sectorBadge !== 'Cross-sector';
</script>

{#if phaseBadges.length > 0 || showSectorBadge}
  <div class="resource-badges" class:resource-badges-hero={variant === 'hero'}>
    {#if phaseBadges.length > 0}
      <JourneyPhaseBadges phases={phaseBadges} variant="inline" />
    {/if}

    {#if showSectorBadge}
      <SectorBadge sector={sectorBadge} />
    {/if}
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
