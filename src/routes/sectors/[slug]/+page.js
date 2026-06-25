import { error } from '@sveltejs/kit';
import { sectors } from '$lib/content/sectors.js';
import { resources } from '$lib/content/resources.js';
import { cases } from '$lib/content/cases.js';

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
      resource.placements.sectorSections.some((tag) => tag.startsWith(sectorSectionPrefix))
  );
  const relatedCases = cases.filter(
    (caseStudy) => caseStudy.sector.toLowerCase() === sector.title.toLowerCase()
  );

  return { sector, relatedResources, relatedCases };
}
