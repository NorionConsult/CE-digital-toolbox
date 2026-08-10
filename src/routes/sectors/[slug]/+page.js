import { error } from '@sveltejs/kit';
import { sectors } from '$lib/content/sectors.js';
import { resources } from '$lib/content/tool-catalogue.js';
import { cases } from '$lib/content/cases.js';

/** @type {Record<string, string[]>} */
const sectorCaseAliases = {
  'Food and Agriculture': ['Food and Agriculture', 'Agriculture and Food']
};

export function entries() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function load({ params }) {
  const sector = sectors.find((item) => item.slug === params.slug);

  if (!sector) {
    throw error(404, 'Sector not found');
  }

  const sectorSectionPrefix = `${sector.slug}:`;
  const relatedResources = resources.filter(
    (resource) =>
      resource.placements.sectors.includes(sector.slug) ||
      resource.placements.sectorSections.some((/** @type {string} */ tag) =>
        tag.startsWith(sectorSectionPrefix)
      )
  );
  const matchingCaseSectors = sectorCaseAliases[sector.title] ?? [sector.title];
  const relatedCases = cases.filter((caseStudy) =>
    (caseStudy.filterValues?.sectors ?? []).some((caseSector) =>
      matchingCaseSectors.includes(caseSector)
    )
  );

  return { sector, relatedResources, relatedCases };
}
