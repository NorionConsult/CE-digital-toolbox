/**
 * @typedef {string | Record<string, string>} TranslatedText
 */

/**
 * @typedef {{
 *   id: string;
 *   slug: string;
 *   companyName: string;
 *   country: string | string[];
 *   countries?: string[];
 *   countryDisplay?: string;
 *   sector: string | string[];
 *   sectors?: string[];
 *   sectorDisplay?: string;
 *   rStrategies: string[] | string;
 *   rStrategyDescription?: TranslatedText;
 *   summary: TranslatedText;
 *   description: TranslatedText;
 *   caseLink?: string;
 *   image?: string;
 *   imageAlt?: TranslatedText;
 *   filterValues?: {
 *     countries: string[];
 *     sectors: string[];
 *     rStrategies: string[];
 *   };
 * }} CaseStudy
 */

/** @type {Record<string, string>} */
const CASE_VALUE_OVERRIDES = {
  agriculture: 'Food and Agriculture',
  'agriculture and agro-processing': 'Food and Agriculture',
  'agro-processing': 'Food and Agriculture',
  'buildings and construction': 'Construction',
  'business to business': 'Business to Business',
  'construction and buildings': 'Construction',
  'digital/traceability technology': 'Digital/Traceability Technology',
  'electronics and ict': 'Electronics and ICT',
  'finplast-prim srl': 'FINPLAST-PRIM SRL',
  'food and agriculture': 'Food and Agriculture',
  'food and beverage': 'Food and Agriculture',
  'food and nutrients': 'Food and Agriculture',
  horesca: 'HORESCA',
  ict: 'ICT',
  'it services': 'IT Services',
  'products-as-a-service': 'Products-as-a-Service',
  'recycle (r8)': 'Recycle (R8)',
  'reduce (r2)': 'Reduce (R2)',
  'refurbish (r5)': 'Refurbish (R5)',
  'repair (r4)': 'Repair (R4)',
  'repurpose (r6)': 'Repurpose (R6)',
  'repurpose (r7)': 'Repurpose (R7)',
  'rethink (r1)': 'Rethink (R1)',
  'reuse (r3)': 'Reuse (R3)',
  's.r.l. "refurb"': 'S.R.L. "REFURB"',
  'textiles and fashion': 'Textiles',
  'unfloria srl': 'Unfloria SRL',
  'uniplast srl': 'UNIPLAST SRL'
};

const LOWERCASE_WORDS = new Set(['and', 'or', 'of', 'the', 'to', 'for', 'in', 'with']);

/**
 * @param {string[] | string | undefined} value
 * @returns {string[]}
 */
function splitCaseList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(/\s+\/\s+|[;,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

/**
 * @param {string} value
 * @returns {string}
 */
function titleCaseTaxonomyValue(value) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index > 0 && LOWERCASE_WORDS.has(word)) return word;
      return word
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-');
    })
    .join(' ');
}

/**
 * Keeps taxonomy filters tidy even if editors use different casing.
 * @param {string} value
 * @returns {string}
 */
function normaliseCaseValue(value) {
  const cleanedValue = String(value).trim().replace(/\s+/g, ' ');
  const override = CASE_VALUE_OVERRIDES[cleanedValue.toLowerCase()];

  if (override) return override;

  return titleCaseTaxonomyValue(cleanedValue);
}

/**
 * Allows the template to stay stable even if a case is copied with a comma-separated string.
 * Editors should normally use an array, for example: ['Reuse (R3)', 'Recycle (R8)'].
 * @param {string[] | string | undefined} value
 * @returns {string[]}
 */
function normaliseCaseList(value) {
  return [...new Set(splitCaseList(value).map(normaliseCaseValue))];
}

/**
 * Keeps optional case fields predictable for the shared card and page templates.
 * @param {CaseStudy} caseStudy
 * @returns {CaseStudy}
 */
export function createCase(caseStudy) {
  const countries = normaliseCaseList(caseStudy.country);
  const sectors = normaliseCaseList(caseStudy.sector);
  const rStrategies = normaliseCaseList(caseStudy.rStrategies);

  return {
    caseLink: '',
    image: '',
    imageAlt: '',
    rStrategyDescription: '',
    ...caseStudy,
    country: countries.join(', '),
    countries,
    countryDisplay: countries.join(', '),
    sector: sectors.join(', '),
    sectors,
    sectorDisplay: sectors.join(', '),
    rStrategies,
    filterValues: {
      countries,
      sectors,
      rStrategies
    }
  };
}
