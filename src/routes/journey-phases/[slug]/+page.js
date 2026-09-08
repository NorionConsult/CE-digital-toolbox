import { error } from '@sveltejs/kit';
import { journeyPhases } from '$lib/content/technical/registries/journey-phases.js';
import { resources } from '$lib/content/editable/tools/tool-catalogue.js';
import { translate } from '$lib/translation-helper.js';

/** @param {string} value */
function normaliseReference(value) {
  return String(value ?? '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/*
  Tells SvelteKit which dynamic journey phase pages should be generated as static HTML.
*/
export function entries() {
  return journeyPhases.map((journeyPhase) => ({ slug: journeyPhase.slug }));
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

  const phaseReferences = new Set([
    normaliseReference(journeyPhase.slug),
    normaliseReference(translate(journeyPhase.title, 'en'))
  ]);
  const relatedResources = resources.filter((resource) => {
    const matchesPhase = resource.journeyPhases.some((/** @type {string} */ phase) =>
      phaseReferences.has(normaliseReference(phase))
    );
    const matchesSection = resource.placements.phaseSections.some((/** @type {string} */ tag) =>
      phaseSubsectionTags.has(tag)
    );

    return matchesPhase || matchesSection;
  });
  const phaseIndex = journeyPhases.findIndex((item) => item.slug === journeyPhase.slug);
  const nextPhase = journeyPhases[phaseIndex + 1] ?? null;

  return { journeyPhase, relatedResources, nextPhase };
}
