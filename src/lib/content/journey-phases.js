import { modules } from '$lib/content/modules.js';

/*
  Resource phase badges use the same colour classes as their matching modules.
  This keeps catalogue cards, embedded cards and resource pages in sync.
*/
/**
 * @param {string} journeyPhase
 */
export function getJourneyPhaseClass(journeyPhase) {
  const matchingModule = modules.find((module) => module.title === journeyPhase);

  return matchingModule?.colourClass ?? 'module-card-outline';
}
