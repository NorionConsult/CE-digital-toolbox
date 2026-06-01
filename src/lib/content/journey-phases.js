import { modules } from '$lib/content/modules.js';

/*
  Resource cards use journeyPhase as the single taxonomy value.
  This helper finds the matching module colour class automatically.
*/
/**
 * @param {string} journeyPhase
 */
export function getJourneyPhaseClass(journeyPhase) {
  const matchingModule = modules.find((module) => module.title === journeyPhase);

  return matchingModule?.colourClass ?? 'module-card-outline';
}
