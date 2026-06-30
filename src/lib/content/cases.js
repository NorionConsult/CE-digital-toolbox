/*
  CASE CATALOGUE RECORDS

  HOW TO ADD A CASE:
  1. Copy one complete createCase({ ... }) block below.
  2. Give the case a unique id and slug.
  3. Replace the company, taxonomy and page text.
  4. Add the external source link in `caseLink`.
  5. Save the file. The website automatically creates:
     - a card on the Cases page
     - a detail page at /cases/your-slug/
     - a card in a matching sector package's Case examples section

  The sector badge colour is assigned automatically from the sector name.
  Existing sector names have fixed theme colours. A new sector name also works:
  the badge component generates a consistent fallback colour automatically.

  The slug becomes the page URL. Use lowercase words separated by hyphens.
  Leave caseLink as an empty string when there is no external case source yet.
*/

/**
 * @typedef {{
 *   id: string;
 *   slug: string;
 *   companyName: string;
 *   country: string;
 *   clientSegment: string;
 *   sector: string;
 *   description: string;
 *   about: string;
 *   caseLink?: string;
 * }} CaseStudy
 */

/**
 * Keeps optional case fields predictable for the shared card and page templates.
 * @param {CaseStudy} caseStudy
 * @returns {CaseStudy}
 */
function createCase(caseStudy) {
  return {
    caseLink: '',
    ...caseStudy
  };
}

/** @type {CaseStudy[]} */
export const cases = [
  // TEXTILES CASES
  createCase({
    id: 'case-001',
    slug: 'mud-jeans-lease-closed-loop',
    companyName: 'MUD Jeans',
    country: 'Netherlands',
    clientSegment: 'Fashion brand',
    sector: 'Textiles',
    description:
      "Pioneered the 'Lease a Jeans' model, customers lease denim and return garments at end of life for closed-loop recycling into new products.",
    about:
      "MUD Jeans pioneered the 'Lease a Jeans' model, customers lease denim and return garments at end of life for closed-loop recycling into new products.",
    caseLink: ''
  }),
  createCase({
    id: 'case-002',
    slug: 'patagonia-worn-wear',
    companyName: 'Patagonia',
    country: 'United States / Europe',
    clientSegment: 'Outdoor apparel brand',
    sector: 'Textiles',
    description:
      'Worn Wear programme facilitates repair and resale of used garments, extending product lifecycles and generating secondary revenue.',
    about:
      'Patagonia combines durable product design with the Worn Wear programme to facilitate repair and resale of used garments, extending product lifecycles and generating secondary revenue.',
    caseLink: ''
  }),
  createCase({
    id: 'case-003',
    slug: 'rifo-recycled-fibres',
    companyName: 'Rifo',
    country: 'Italy',
    clientSegment: 'Textile manufacturer',
    sector: 'Textiles',
    description:
      "Italian SME producing clothing from recycled cashmere and cotton sourced from industrial offcuts in Prato, one of Europe's oldest textile recycling clusters.",
    about:
      "Italian SME producing clothing from recycled cashmere and cotton sourced from industrial offcuts in Prato, one of Europe's oldest textile recycling clusters.",
    caseLink: ''
  }),
  createCase({
    id: 'case-004',
    slug: 'elvis-kresse-zero-waste',
    companyName: 'Elvis & Kresse',
    country: 'United Kingdom',
    clientSegment: 'Accessories manufacturer',
    sector: 'Textiles',
    description:
      'Transforms decommissioned fire hoses and industrial waste streams into luxury accessories through a zero-waste, closed-loop production model.',
    about:
      'Transforms decommissioned fire hoses and industrial waste streams into luxury accessories through a zero-waste, closed-loop production model.',
    caseLink: ''
  }),
  createCase({
    id: 'case-005',
    slug: 'vestiaire',
    companyName: 'Vestiaire',
    country: 'United Kingdom',
    clientSegment: 'Fashion design SME',
    sector: 'Textiles',
    description:
      'Redesigns unsold fashion stock and deadstock fabric into new products through partnerships with brands, diverting surplus from landfill.',
    about:
      'Vestiaire redesigns unsold fashion stock and deadstock fabric into new products through partnerships with brands, diverting surplus from landfill.',
    caseLink: ''
  }),
  createCase({
    id: 'case-006',
    slug: 'houdini-sportswear-product-service',
    companyName: 'Houdini Sportswear',
    country: 'Sweden',
    clientSegment: 'Outdoor apparel brand',
    sector: 'Textiles',
    description:
      'Rents, repairs and takes back outdoor garments for closed-loop recycling, a leading example of product-as-a-service in sportswear.',
    about:
      'Houdini Sportswear rents, repairs and takes back outdoor garments for closed-loop recycling, a leading example of product-as-a-service in sportswear.',
    caseLink: ''
  }),

  // AGRICULTURE CASES
  createCase({
    id: 'case-007',
    slug: 'revive-eco-coffee-grounds',
    companyName: 'Revive Eco',
    country: 'United Kingdom',
    clientSegment: 'Circular ingredients SME',
    sector: 'Agriculture',
    description:
      'Valorises spent coffee grounds collected from cafes and food producers into natural skincare, cleaning and food ingredients.',
    about:
      'Valorises spent coffee grounds collected from cafes and food producers into natural skincare, cleaning and food ingredients.',
    caseLink: ''
  }),
  createCase({
    id: 'case-008',
    slug: 'foodwaste-ch-redistribution',
    companyName: 'FoodWaste.ch',
    country: 'Switzerland',
    clientSegment: 'Food redistribution platform',
    sector: 'Agriculture',
    description:
      'A digital platform connects agri-food businesses with buyers elsewhere in the value chain, reducing farm-level food waste through redistribution.',
    about:
      'A digital platform connecting agri-food businesses with surplus to buyers elsewhere in the value chain, reducing farm-level food waste through redistribution.',
    caseLink: ''
  }),
  createCase({
    id: 'case-009',
    slug: 'lettus-grow-vertical-farming',
    companyName: 'LettUs Grow',
    country: 'United Kingdom',
    clientSegment: 'Agricultural technology SME',
    sector: 'Agriculture',
    description:
      'Aeroponic vertical farming technology enabling year-round, pesticide-free growing with 95% less water, applicable to urban and peri-urban agri-SMEs.',
    about:
      'Aeroponic vertical farming technology enabling year-round, pesticide-free growing with 95% less water, applicable to urban and peri-urban agri-SMEs.',
    caseLink: ''
  }),

  // CONSTRUCTION CASES
  createCase({
    id: 'case-010',
    slug: 'concular-material-reuse',
    companyName: 'Concular',
    country: 'Germany',
    clientSegment: 'Digital construction platform',
    sector: 'Construction',
    description:
      'A digital platform enables pre-demolition material audits and reuse planning, linking SMEs with salvaged-material markets across Europe.',
    about:
      'Digital platform enabling pre-demolition material audits and reuse planning, which links construction SMEs with salvaged materials markets across Europe.',
    caseLink: ''
  }),
  createCase({
    id: 'case-011',
    slug: 'troldtekt-design-for-end-of-life',
    companyName: 'Troldtekt',
    country: 'Denmark',
    clientSegment: 'Building-material manufacturer',
    sector: 'Construction',
    description:
      'Produces acoustic ceiling panels from FSC wood fibres and cement. Cradle-to-cradle certified product with Danish SME roots and EU-wide market reach.',
    about:
      'Produces acoustic ceiling panels from FSC wood fibres and cement. Cradle-to-cradle certified product with Danish SME roots and EU-wide market reach.',
    caseLink: ''
  }),
  createCase({
    id: 'case-012',
    slug: 'madaster-material-passports',
    companyName: 'Madaster',
    country: 'Netherlands / Denmark',
    clientSegment: 'Material-passport platform',
    sector: 'Construction',
    description:
      'Material passport platform allowing buildings to be registered as material banks, enabling future material recovery and reuse at end of building life.',
    about:
      'Material passport platform allowing buildings to be registered as material banks, enabling future material recovery and reuse at end of building life.',
    caseLink: ''
  }),
  createCase({
    id: 'case-013',
    slug: 'wetter-ag',
    companyName: 'Wetter AG',
    country: 'Sweden',
    clientSegment: 'Real estate developers',
    sector: 'Construction',
    description:
      'A former carpentry factory was renovated and expanded into a mixed-use think tank and workshop space using predominantly reclaimed materials sourced from other local demolition projects, cutting construction-phase emissions by 59%.',
    about:
      'A former carpentry factory was renovated and expanded into a mixed-use think tank and workshop space using predominantly reclaimed materials sourced from other local demolition projects, cutting construction-phase emissions by 59%.',
    caseLink: ''
  }),
  createCase({
    id: 'case-014',
    slug: 'stonecycling-upcycled-materials',
    companyName: 'StoneCycling',
    country: 'Netherlands',
    clientSegment: 'Building-material manufacturer',
    sector: 'Construction',
    description:
      'Upcycles ceramic and construction waste into new architectural materials, waste from demolition becomes premium building products for new projects.',
    about:
      'Upcycles ceramic and construction waste into new architectural materials, waste from demolition becomes premium building products for new projects.',
    caseLink: ''
  }),

  // TOURISM CASES
  createCase({
    id: 'case-015',
    slug: 'iberostar-circular-economy',
    companyName: 'Iberostar',
    country: 'Spain',
    clientSegment: 'Hospitality',
    sector: 'Tourism',
    description:
      'Iberostar, a Spanish family-owned hotel group, has embedded circular economy principles company-wide through its Wave of Change programme with goals of zero waste by 2025 and carbon neutrality by 2030.',
    about:
      'Iberostar, a Spanish family-owned hotel group, has embedded circular economy principles company-wide through its Wave of Change programme with goals of zero waste by 2025 and carbon neutrality by 2030.',
    caseLink: ''
  }),
  createCase({
    id: 'case-016',
    slug: 'nh-hotel-group-circular-economy',
    companyName: 'NH Hotel Group',
    country: 'Denmark',
    clientSegment: 'HORESCA',
    sector: 'Tourism',
    description:
      "Framed by its commitment to caring for the planet, NH Hotel Group has reinforced its flagship circular economy initiative, CORK2CORK, which gives a second life to cork stoppers collected at restaurants in some of the company's hotels.",
    about:
      "Framed by its commitment to caring for the planet, NH Hotel Group has reinforced its flagship circular economy initiative, CORK2CORK, which gives a second life to cork stoppers collected at restaurants in some of the company's hotels.",
    caseLink: ''
  }),
  createCase({
    id: 'case-017',
    slug: 'green-hotel-club-foundation',
    companyName: 'Green Hotel Club Foundation',
    country: 'Netherlands',
    clientSegment: 'HORESCA',
    sector: 'Tourism',
    description:
      'This group was established to share knowledge across hotels in Amsterdam and assist them in their circular transition.',
    about:
      'This group was established to share knowledge across hotels in Amsterdam and assist them in their circular transition.',
    caseLink: ''
  })
];

/* Filter values are derived automatically, so editors maintain each value once. */
export const caseSectors = [...new Set(cases.map((caseStudy) => caseStudy.sector))].sort();
export const caseCountries = [...new Set(cases.map((caseStudy) => caseStudy.country))].sort();
export const caseClientSegments = [...new Set(cases.map((caseStudy) => caseStudy.clientSegment))].sort();
