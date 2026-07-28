import { error } from '@sveltejs/kit';
import { journeyPhases } from '$lib/content/journey-phases.js';
import { resources } from '$lib/content/resources.js';

/*
  Tells SvelteKit which dynamic journey phase pages should be generated as static HTML.
*/
export function entries() {
  return journeyPhases.map((journeyPhase) => ({ slug: journeyPhase.slug }));
}

/**
 * @param {{ journeyPhase?: string; journeyPhases?: string[] }} resource
 */
function getJourneyPhases(resource) {
  return resource.journeyPhases ?? (resource.journeyPhase ? [resource.journeyPhase] : []);
}

/*
  Loads the correct journey phase based on the URL slug.
*/
export function load({ params }) {
  const journeyPhase = journeyPhases.find((item) => item.slug === params.slug);

  if (!journeyPhase) {
    throw error(404, 'Journey phase not found');
  }

  const phaseSubsectionTags = new Set(
    (journeyPhase.sections ?? []).map((section) => section.resourceTag).filter(Boolean)
  );

  const relatedResources = resources.filter(
    (resource) =>
      getJourneyPhases(resource).includes(journeyPhase.title) ||
      resource.placements.phaseSections.some((tag) => phaseSubsectionTags.has(tag))
  );
  const phaseIndex = journeyPhases.findIndex((item) => item.slug === journeyPhase.slug);
  const nextPhase = journeyPhases[phaseIndex + 1] ?? null;

  return { journeyPhase, relatedResources, nextPhase };
}
