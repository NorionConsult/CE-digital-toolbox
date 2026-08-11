import { error } from '@sveltejs/kit';
import { sectors } from '$lib/content/sectors.js';
import { resources } from '$lib/content/tool-catalogue.js';
import { cases } from '$lib/content/cases.js';

/** @type {Record<string, string[]>} */
const sectorCaseAliases = {
  'Food and Agriculture': ['Food and Agriculture', 'Agriculture and Food']
};

/**
 * @param {string} value
 * @returns {string}
 */
function normaliseCaseReference(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Editors choose featured sector cases by company/case name in the sector files.
 * This function accepts either the visible company name or the case slug, keeps
 * the chosen order, and falls back to the first matching sector cases if no
 * featured names are defined yet.
 * @param {any} casesSection
 * @param {any[]} matchingCases
 * @returns {any[]}
 */
function getFeaturedSectorCases(casesSection, matchingCases) {
  const featuredCaseNames = casesSection?.featuredCaseNames ?? [];

  if (!Array.isArray(featuredCaseNames) || featuredCaseNames.length === 0) {
    return matchingCases.slice(0, 3);
  }

  const selectedCases = [];
  const usedCaseIds = new Set();

  for (const caseName of featuredCaseNames) {
    const reference = normaliseCaseReference(caseName);
    const matchingCase = matchingCases.find(
      (caseStudy) =>
        normaliseCaseReference(caseStudy.companyName) === reference ||
        normaliseCaseReference(caseStudy.slug) === reference
    );

    if (matchingCase && !usedCaseIds.has(matchingCase.id)) {
      selectedCases.push(matchingCase);
      usedCaseIds.add(matchingCase.id);
    }
  }

  if (selectedCases.length === 0) {
    return matchingCases.slice(0, 3);
  }

  return selectedCases.slice(0, 3);
}

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
  const matchingCases = cases.filter((caseStudy) =>
    (caseStudy.filterValues?.sectors ?? []).some((caseSector) =>
      matchingCaseSectors.includes(caseSector)
    )
  );
  const relatedCases = getFeaturedSectorCases(sector.sections[1], matchingCases);

  return { sector, relatedResources, relatedCases };
}
