import { journeyPhases } from '$lib/content/technical/registries/journey-phases.js';
import { translate } from '$lib/translation-helper.js';

/*
  Resource phase badges use the same colour classes as their matching journey phases.
  This keeps Tools page cards, embedded cards and resource pages in sync.
*/
/**
 * @param {string} journeyPhase
 */
export function getJourneyPhaseClass(journeyPhase) {
  const matchingPhase = journeyPhases.find((phase) => translate(phase.title, 'en') === journeyPhase);

  return matchingPhase?.colourClass ?? 'phase-card-outline';
}
