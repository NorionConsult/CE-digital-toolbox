/*
  Technical helper functions for the Tool Catalogue.
  Editors should not edit this file. Tool entries are edited in:
  src/lib/content/tool-catalogue.js
*/

const LANGUAGE_MULTIPLE_LABEL = 'Multiple';
const DOWNLOADABLE_TOOL_EXTENSIONS = [
  'pdf',
  'doc',
  'docx',
  'ppt',
  'pptx',
  'xls',
  'xlsx',
  'csv',
  'zip',
  'odt',
  'ods',
  'odp'
];

/** @type {Record<string, Record<string, string>>} */
const FILTER_LABELS = {
  journeyPhases: {
    awareness: 'Learn',
    learn: 'Learn',
    assess: 'Assess',
    diagnose: 'Assess',
    diagnosis: 'Assess',
    options: 'Explore',
    explore: 'Explore',
    validate: 'Validate',
    'business case': 'Validate',
    'business-case': 'Validate',
    implement: 'Implement',
    implementation: 'Implement',
    monitor: 'Monitor',
    monitoring: 'Monitor',
    none: 'None',
    'sector tools': 'None'
  },
  sector: {
    all: 'Cross-sector',
    across: 'Cross-sector',
    crosssector: 'Cross-sector',
    'cross sector': 'Cross-sector',
    'cross-sector': 'Cross-sector',
    agriculture: 'Food and Agriculture',
    'food and agriculture': 'Food and Agriculture',
    'food-and-agriculture': 'Food and Agriculture',
    construction: 'Construction',
    textiles: 'Textiles',
    tourism: 'Tourism',
    manufacturing: 'Manufacturing',
    plastics: 'Plastics'
  },
  language: {
    english: 'English',
    dutch: 'Dutch',
    chinese: 'Chinese',
    ukrainian: 'Ukrainian',
    russian: 'Russian',
    portuguese: 'Portuguese',
    spanish: 'Spanish',
    georgian: 'Georgian',
    arabic: 'Arabic',
    romanian: 'Romanian',
    armenian: 'Armenian',
    multiple: LANGUAGE_MULTIPLE_LABEL
  },
  access: {
    free: 'Free',
    paid: 'Paid',
    'sign up': 'Sign up',
    signup: 'Sign up',
    'sign-up': 'Sign up',
    register: 'Sign up'
  }
};

/**
 * @param {string} value
 */
function titleCase(value) {
  return value
    .split(/(\s+|-)/)
    .map((part) => {
      if (/^\s+$|^-$/u.test(part)) {
        return part;
      }

      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * @param {string} value
 * @param {'journeyPhases' | 'sector' | 'language' | 'access'} type
 */
function normalizeFilterValue(value, type) {
  const cleaned = String(value ?? '').trim().replace(/\s+/g, ' ');
  const lookupKey = cleaned.toLowerCase().replace(/\s*-\s*/g, '-');
  const compactKey = lookupKey.replace(/[^a-z0-9]/g, '');

  return (
    FILTER_LABELS[type]?.[lookupKey] ??
    FILTER_LABELS[type]?.[compactKey] ??
    titleCase(cleaned)
  );
}

/**
 * @param {string | string[] | undefined} value
 * @param {'journeyPhases' | 'sector' | 'language' | 'access'} type
 */
function normalizeFilterList(value, type) {
  const list = Array.isArray(value) ? value : [value ?? ''];
  const splitPattern = type === 'language' || type === 'journeyPhases' ? /[,/;|]+/ : /[,;|]+/;
  const normalised = list
    .flatMap((item) => String(item ?? '').split(splitPattern))
    .map((item) => normalizeFilterValue(item, type))
    .filter(Boolean);

  return [...new Set(normalised)];
}

/**
 * @param {string | undefined} value
 */
function normalizeEffortValue(value) {
  const cleaned = String(value ?? '').trim().toLowerCase();

  if (cleaned === 'low') return 'Low';
  if (cleaned === 'medium') return 'Medium';
  if (cleaned === 'high') return 'High';

  return cleaned ? titleCase(cleaned) : 'Not specified';
}

/**
 * @param {string} language
 */
function getLanguageList(language) {
  return normalizeFilterList(language, 'language').filter(
    (item) => item !== LANGUAGE_MULTIPLE_LABEL
  );
}

/**
 * @param {string} language
 */
function getCompactLanguageDisplay(language) {
  const languages = getLanguageList(language);

  return languages.length > 3 ? LANGUAGE_MULTIPLE_LABEL : languages.join(', ');
}

/**
 * @param {string} language
 */
function getFullLanguageDisplay(language) {
  const languages = getLanguageList(language);

  return languages.join(', ');
}

/**
 * @param {string[]} values
 */
function sortFilterValues(values) {
  return values.sort((a, b) => {
    if (a === LANGUAGE_MULTIPLE_LABEL) return 1;
    if (b === LANGUAGE_MULTIPLE_LABEL) return -1;
    return a.localeCompare(b);
  });
}

/**
 * @param {any} tool
 */
function prepareTool(tool) {
  const normalisedJourneyPhases = normalizeFilterList(tool.journeyPhases ?? [], 'journeyPhases');
  const journeyPhases = normalisedJourneyPhases.filter((phase) => phase !== 'None');
  const journeyPhaseFilterValues = journeyPhases.length > 0 ? journeyPhases : ['None'];
  const languages = normalizeFilterList(tool.language, 'language');
  const languageDisplay = getCompactLanguageDisplay(tool.language);
  const languageFullDisplay = getFullLanguageDisplay(tool.language);
  const sectorDisplay = normalizeFilterValue(tool.sector, 'sector');
  const effortDisplay = normalizeEffortValue(tool.effort);
  const accessDisplay = normalizeFilterValue(tool.access, 'access');

  return {
    ...tool,
    journeyPhases,
    sectorDisplay,
    effort: effortDisplay,
    effortDisplay,
    languageDisplay,
    languageFullDisplay,
    accessDisplay,
    filterValues: {
      journeyPhases: journeyPhaseFilterValues,
      sectors: [sectorDisplay],
      languages,
      access: [accessDisplay]
    },
    placements: {
      phaseSections: tool.placements?.phaseSections ?? [],
      sectors: tool.placements?.sectors ?? [],
      sectorSections: tool.placements?.sectorSections ?? []
    }
  };
}

/**
 * @param {any[]} toolCatalogue
 */
export function buildToolCatalogue(toolCatalogue) {
  const resources = toolCatalogue.map(prepareTool);

  return {
    resources,
    journeyPhases: ['Learn', 'Assess', 'Explore', 'Validate', 'Implement', 'Monitor'],
    sectors: sortFilterValues([
      ...new Set(resources.flatMap((resource) => resource.filterValues.sectors))
    ]),
    languages: sortFilterValues([
      ...new Set(resources.flatMap((resource) => resource.filterValues.languages))
    ]),
    accessOptions: sortFilterValues([
      ...new Set(resources.flatMap((resource) => resource.filterValues.access))
    ])
  };
}

/**
 * Checks whether a tool link points directly to a downloadable file.
 * Query strings and hash anchors are ignored, so `tool.pdf?download=1` still works.
 *
 * @param {string | undefined} toolLink
 */
export function isDownloadableToolLink(toolLink) {
  if (!toolLink) {
    return false;
  }

  const cleanLink = String(toolLink).split(/[?#]/)[0].toLowerCase();
  const extension = cleanLink.match(/\.([a-z0-9]+)$/)?.[1];

  return extension ? DOWNLOADABLE_TOOL_EXTENSIONS.includes(extension) : false;
}
