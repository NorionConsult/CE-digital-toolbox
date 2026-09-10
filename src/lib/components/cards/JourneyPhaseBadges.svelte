<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { journeyPhases } from '$lib/content/technical/registries/journey-phases.js';
  import { getJourneyPhaseClass } from '$lib/content/technical/phase-badge-colours.js';
  import { getLanguageFromPathname, translate } from '$lib/translation-helper.js';

  /** @type {string[]} */
  export let phases = [];
  /** @type {'card' | 'hero' | 'inline'} */
  export let variant = 'card';

  const labels = {
    journeyPhases: {
      en: 'Journey phases',
      uk: 'Фази шляху',
      ro: 'Fazele parcursului',
      hy: 'Ճանապարհի փուլերը'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: phaseLabelMap = new Map(
    journeyPhases.map((phase) => [translate(phase.title, 'en'), translate(phase.title, currentLanguage)])
  );

  /** @param {string} phase */
  function getPhaseLabel(phase) {
    return phaseLabelMap.get(phase) ?? phase;
  }
</script>

<div
  class="journey-phase-badges"
  class:journey-phase-badges-hero={variant === 'hero'}
  class:journey-phase-badges-inline={variant === 'inline'}
  aria-label={translate(labels.journeyPhases, currentLanguage)}
>
  {#each phases as phase}
    <span class="journey-phase-badge {getJourneyPhaseClass(phase)}">{getPhaseLabel(phase)}</span>
  {/each}
</div>

<style>
  .journey-phase-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 12px;
  }

  .journey-phase-badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 6px 10px;
    border: 1px solid var(--phase-border);
    border-radius: 999px;
    background-color: var(--phase-bg);
    color: var(--phase-text);
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .journey-phase-badges-hero {
    margin-bottom: 0;
  }

  .journey-phase-badges-inline {
    margin-bottom: 0;
  }

  .journey-phase-badges-hero .journey-phase-badge {
    padding: 8px 12px;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 480px) {
    .journey-phase-badge,
    .journey-phase-badges-hero .journey-phase-badge {
      padding: 5px 8px;
      font-size: 0.72rem;
      letter-spacing: 0.05em;
    }
  }
</style>
