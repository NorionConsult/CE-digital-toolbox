<script>
  import { getJourneyPhaseClass } from '$lib/content/journey-phases.js';

  /** @type {string[]} */
  export let phases = [];
  /** @type {'card' | 'hero' | 'inline'} */
  export let variant = 'card';
</script>

<div
  class="journey-phase-badges"
  class:journey-phase-badges-hero={variant === 'hero'}
  class:journey-phase-badges-inline={variant === 'inline'}
  aria-label="Journey phases"
>
  {#each phases as phase}
    <span class="journey-phase-badge {getJourneyPhaseClass(phase)}">{phase}</span>
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
    border: 1px solid var(--module-border);
    border-radius: 999px;
    background-color: var(--module-bg);
    color: var(--module-text);
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
</style>
