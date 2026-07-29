/*
  CASE CATALOGUE RECORDS

  HOW TO ADD A CASE:
  1. Copy one complete createCase({ ... }) block below.
  2. Give the case a unique id and slug.
  3. Replace the company, taxonomy, R strategies and page text.
  4. Add the external source link in `caseLink`.
  5. Optional: add an image path in `image` and a short description in `imageAlt`.
  6. Save the file. The website automatically creates:
     - a card on the Cases page
     - a detail page at /cases/your-slug/
     - a card in a matching sector tool's Case examples section

  The sector badge colour is assigned automatically from the sector name.
  Existing sector names have fixed theme colours. A new sector name also works:
  the badge component generates a consistent fallback colour automatically.

  The slug becomes the page URL. Use lowercase words separated by hyphens.
  Leave caseLink as an empty string when there is no external case source yet.
  Use arrays when a taxonomy field has more than one value:
    country: ['Netherlands', 'Denmark'],
    sector: ['Plastics', 'Construction'],
    rStrategies: ['Reuse (R3)', 'Recycle (R8)']
  Arrays are the clearest option. The code also understands comma, semicolon
  and spaced slash separators if older copied text uses them.

  If an editor accidentally writes "portugal" or "PORTUGAL", it is normalised
  to "Portugal" for filtering, so duplicate filter options are avoided.
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
 *   rStrategyDescription?: string;
 *   description: string;
 *   about: string;
 *   caseLink?: string;
 *   image?: string;
 *   imageAlt?: string;
 *   filterValues?: {
 *     countries: string[];
 *     sectors: string[];
 *     rStrategies: string[];
 *   };
 * }} CaseStudy
 */

/** @type {Record<string, string>} */
const CASE_VALUE_OVERRIDES = {
  'business to business': 'Business to Business',
  'construction and buildings': 'Construction',
  'electronics and ict': 'Electronics and ICT',
  'finplast-prim srl': 'FINPLAST-PRIM SRL',
  'food and agriculture': 'Food and Agriculture',
  'food and nutrients': 'Food and Agriculture',
  horesca: 'HORESCA',
  ict: 'ICT',
  'mud jeans': 'MUD Jeans',
  'nh hotel group': 'NH Hotel Group',
  'refurbish (r5)': 'Refurbish (R5)',
  'reduce (r2)': 'Reduce (R2)',
  'repair (r4)': 'Repair (R4)',
  'repurpose (r7)': 'Repurpose (R7)',
  'reuse (r3)': 'Reuse (R3)',
  'recycle (r8)': 'Recycle (R8)',
  's.r.l. "refurb"': 'S.R.L. "REFURB"',
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
function createCase(caseStudy) {
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

/** @type {CaseStudy[]} */
export const cases = [
  // TEXTILES CASES
  createCase({
    id: 'case-001',
    slug: 'mud-jeans-lease-closed-loop',
    companyName: 'MUD Jeans',
    country: 'Netherlands',
    sector: 'Textiles',
    rStrategies: ['Reuse (R3)', 'Recycle (R8)'],
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
    sector: 'Textiles',
    rStrategies: ['Repair (R4)', 'Reuse (R3)'],
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
    sector: 'Textiles',
    rStrategies: ['Recycle (R8)'],
    description:
      "Italian Small and medium-sized enterprise (SME) producing clothing from recycled cashmere and cotton sourced from industrial offcuts in Prato, one of Europe's oldest textile recycling clusters.",
    about:
      "Italian Small and medium-sized enterprise (SME) producing clothing from recycled cashmere and cotton sourced from industrial offcuts in Prato, one of Europe's oldest textile recycling clusters.",
    caseLink: ''
  }),
  createCase({
    id: 'case-004',
    slug: 'elvis-kresse-zero-waste',
    companyName: 'Elvis & Kresse',
    country: 'United Kingdom',
    sector: 'Textiles',
    rStrategies: ['Repurpose (R7)', 'Recycle (R8)'],
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
    sector: 'Textiles',
    rStrategies: ['Repurpose (R7)', 'Reuse (R3)'],
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
    sector: 'Textiles',
    rStrategies: ['Reuse (R3)', 'Repair (R4)', 'Recycle (R8)'],
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
    sector: 'Food and Agriculture',
    rStrategies: ['Repurpose (R7)', 'Recycle (R8)'],
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
    sector: 'Food and Agriculture',
    rStrategies: ['Reuse (R3)'],
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
    sector: 'Food and Agriculture',
    rStrategies: ['Reduce (R2)'],
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
    sector: 'Construction',
    rStrategies: ['Reuse (R3)'],
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
    sector: 'Construction',
    rStrategies: ['Recycle (R8)'],
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
    sector: 'Construction',
    rStrategies: ['Reuse (R3)', 'Repurpose (R7)'],
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
    sector: 'Construction',
    rStrategies: ['Reuse (R3)'],
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
    sector: 'Construction',
    rStrategies: ['Recycle (R8)'],
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
    sector: 'Tourism',
    rStrategies: ['Reduce (R2)', 'Reuse (R3)', 'Recycle (R8)'],
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
    sector: 'Tourism',
    rStrategies: ['Repurpose (R7)', 'Recycle (R8)'],
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
    sector: 'Tourism',
    rStrategies: ['Reduce (R2)'],
    description:
      'This group was established to share knowledge across hotels in Amsterdam and assist them in their circular transition.',
    about:
      'This group was established to share knowledge across hotels in Amsterdam and assist them in their circular transition.',
    caseLink: ''
  }),

  // MOLDOVA CASES
  createCase({
    id: 'case-018',
    slug: 'uniplast-srl-polyethylene-recovery',
    companyName: 'UNIPLAST SRL',
    country: 'Republic of Moldova',
    sector: 'Plastics, Construction',
    rStrategies: ['Recycle (R8)'],
    description:
      'UNIPLAST SRL recovers polyethylene waste and reprocesses it into secondary raw material used to manufacture its own pipes for irrigation and low-pressure water networks.',
    about: `UNIPLAST SRL operates an integrated circular manufacturing model in which recovered polyethylene waste is converted into secondary raw material and used within the company's own production process. Based in Chișinău, the company manufactures and distributes plastic pipes, fittings and related equipment for water supply, sewerage, irrigation, heating, gas and other technical networks. It also holds an environmental authorisation for plastic-waste management and recovery operations.

Unlike recyclers that sell recovered plastic as granulate, UNIPLAST retains more of the material's value by incorporating the secondary polyethylene directly into finished products. Collected HDPE and LDPE waste enters the company's authorised recovery process, where it is prepared and reprocessed into secondary raw material. This material is subsequently used to manufacture pipes for irrigation systems and low-pressure installations. Virgin-grade polyethylene continues to be used for applications subject to stricter technical and safety requirements, including potable-water networks.

The model connects waste recovery with an established market for agricultural and infrastructure products. Its value proposition is therefore based on transforming recovered plastic into locally manufactured pipes with a new service life, while reducing reliance on virgin polymers in technically suitable applications. According to a UNDP study on plastic-waste management in Moldova, UNIPLAST reported collecting and recovering approximately 2,400 tonnes of plastic waste annually. This figure should be reconfirmed before final publication because it reflects the study's reporting period.

The main environmental benefits are the diversion of recoverable polyethylene from disposal and the substitution of part of the virgin material input. Economically, the integrated model reduces dependence on externally supplied raw materials and captures more value internally by selling finished products rather than secondary granulate alone. EU-UNDP support awarded in 2026 will contribute to modernising or expanding the company's recycling capacity. The principal lesson is that conventional manufacturers can adopt circularity by integrating authorised waste recovery with existing production lines and clearly separating recycled-material applications according to technical requirements.`,
    caseLink: 'https://uniplast.md/'
  }),
  createCase({
    id: 'case-019',
    slug: 'finplast-prim-recycled-granules',
    companyName: 'FINPLAST-PRIM SRL',
    country: 'Republic of Moldova',
    sector: 'Plastics',
    rStrategies: ['Recycle (R8)'],
    rStrategyDescription:
      'Plastic waste is reprocessed into granules that can substitute virgin raw materials in new manufacturing processes; other collected packaging materials are recovered and directed into appropriate recycling streams.',
    description:
      'FINPLAST-PRIM SRL collects, sorts and recycles plastic and other packaging waste into a differentiated range of recycled plastic granules sold to manufacturers.',
    about: `FINPLAST-PRIM SRL operates a circular business model based on converting plastic waste into commercially valuable secondary raw materials. Based in Bălți, northern Moldova, the company is a producer and supplier of recycled plastic granules and an authorised operator for the collection, sorting and recycling of packaging and other recyclable waste.

The model connects two customer groups within the plastics value chain. On the supply side, FINPLAST-PRIM provides waste-management services to companies that need their plastic and packaging waste collected and processed. On the demand side, it supplies manufacturers with recycled HDPE, LDPE, PP, PS and PET/PETE granules that can substitute part of their virgin raw-material input. Value is therefore created both by managing waste streams and by converting recovered plastics into marketable feedstock for new production.

Collected plastic film and rigid plastics are segregated by polymer type and quality, cleaned, shredded and reprocessed into different grades of recycled granules. The company's commercial portfolio comprises 17 recycled-plastic products, including four HDPE, six LDPE, five PP, one PS and one PET/PETE variant. This differentiated portfolio enables FINPLAST-PRIM to respond to varying manufacturing requirements rather than selling recovered plastic as an undifferentiated waste material.

The company also manages paper and cardboard, wood, glass and metal packaging, offering business clients a consolidated solution for several recyclable waste streams. Its website reports processed quantities of 2,640 tonnes of plastic, 8,280 tonnes of paper and cardboard, 620 tonnes of wood and 560 tonnes of glass, although the reporting period should be confirmed.

The model closes material loops, diverts recyclable waste from disposal and strengthens Moldova's domestic market for secondary raw materials. EU-UNDP support awarded in 2026 will help modernise or expand its recycling capacity. The principal lesson is that recycling generates greater circular and economic value when recovered waste is converted into differentiated, market-ready raw materials linked to identifiable manufacturing demand.`,
    caseLink: 'https://finplast.md/'
  }),
  createCase({
    id: 'case-020',
    slug: 'refurb-srl-electronics-refurbishment',
    companyName: 'S.R.L. "REFURB"',
    country: 'Republic of Moldova',
    sector: 'Electronics and ICT',
    rStrategies: ['Refurbish (R5)', 'Reuse (R3)'],
    rStrategyDescription:
      'Used devices are evaluated, tested, repaired or upgraded, graded by condition and resold with a warranty; refurbishment is the dominant strategy, with reuse occurring when the refurbished device returns to active use for its original function.',
    description:
      'S.R.L. "REFURB" refurbishes, repairs and resells used electronics and ICT equipment, extending their useful life through a warranted resale model and a laptop Trade-In programme.',
    about: `S.R.L. "REFURB" operates a circular retail and service model that extends the useful life of electronics and ICT equipment through refurbishment, resale, repair and Trade-In. Based in Chișinău, the company sells both new and refurbished smartphones, laptops, desktop computers, monitors, servers, televisions and audio equipment through its physical store and online platform, refurb.md.

The circular value proposition is to offer professionally refurbished devices as a reliable and more affordable alternative to newly manufactured equipment. According to the company, IT equipment undergoes a refurbishment process that includes, but is not limited to, testing, cleaning, repairing, reconfiguring, retesting and repackaging. Following this process, devices are returned to the market as functional products intended to perform similarly to new equipment. Refurbished products are presented with detailed technical specifications, condition grades such as Refurbished A or B, and a minimum 12-month warranty in accordance with applicable legal requirements. These features differentiate the model from informal second-hand resale by reducing customer uncertainty regarding functionality, quality and after-sales protection.

The company's Trade-In programme strengthens the return loop by allowing customers to exchange an old laptop for a refurbished one. Devices are tested and evaluated by the company's engineers, after which their assessed value is deducted from the replacement product's price. According to REFURB, more than 500 customers have used this service. Products may also be purchased through interest-free instalment options, while the company advertises savings of up to 50% on selected equipment.

The model generates value by recovering the remaining functional and economic value of existing devices instead of directing them prematurely to electronic-waste treatment. It makes technology more financially accessible while delaying e-waste generation and demand for new equipment. The case demonstrates that a standardised refurbishment process, warranties, condition grading and convenient Trade-In arrangements are essential for building consumer confidence and turning refurbished electronics into a credible commercial alternative to new products.`,
    caseLink: 'https://refurb.md/'
  }),
  createCase({
    id: 'case-021',
    slug: 'banca-de-alimente-food-redistribution',
    companyName: 'Asociația Obștească Banca de Alimente - Banca de Alimente Moldova',
    country: 'Republic of Moldova',
    sector: 'Food and Nutrients',
    rStrategies: ['Reuse (R3)'],
    rStrategyDescription:
      'Safe, edible products that can no longer be sold are redirected for their original purpose, human consumption; this also constitutes food-waste prevention, as products are recovered before becoming waste.',
    description:
      'Banca de Alimente Moldova recovers safe, edible surplus food from agri-food companies and redistributes it through a national network of social services supporting vulnerable people.',
    about: `Banca de Alimente Moldova operates a nonprofit circular redistribution model that recovers safe, edible surplus food and redirects it to social services supporting vulnerable people. Established in 2021 as Moldova's first food bank, the organisation connects agri-food producers, distributors and retailers holding unsold products with charities, canteens, placement centres and other social-service providers.

Its circular value proposition is based on preserving food at its highest value: human consumption rather than allowing it to become waste. Surplus products are collected from donor companies, checked and managed according to food-safety requirements, stored using appropriate facilities, including cold storage where necessary, and redistributed according to remaining shelf life and beneficiary needs. The model therefore depends on coordinated logistics, food-flow management and durable partnerships, not simply on accepting occasional donations.

During its first five years, Banca de Alimente recovered and redistributed 583 tonnes of food, equivalent to approximately 1,166,000 meal portions. Its national network grew to 95 donor companies and 105 partner social services, reaching more than 12,500 beneficiaries. The organisation estimates that its food-recovery activity has also avoided approximately 1,450 tonnes of greenhouse-gas emissions, while preserving the water, energy, land, labour and transport embedded in food production.

The model creates environmental value by preventing food waste, social value by improving access to food and economic value by helping donor companies avoid disposal and associated management costs. Since 2022, Banca de Alimente has been an associate member of the European Food Banks Federation, supporting peer learning and alignment with European practice. The principal lesson is that preventing food waste at scale requires reliable logistics, food-safety controls and coordinated partnerships across the entire food value chain.`,
    caseLink: 'https://bancadealimente.md/'
  }),
  createCase({
    id: 'case-022',
    slug: 'garma-grup-biogas-fertilizer',
    companyName: 'Garma-Grup SRL',
    country: 'Republic of Moldova',
    sector: 'Food and Nutrients',
    rStrategies: ['Recycle (R8)', 'Reduce (R2)'],
    rStrategyDescription:
      'Biodegradable residues are biologically processed and their nutrients returned to agricultural use as organic fertilizer (Recycle); the model also decreases demand for conventional energy and synthetic fertilizers (Reduce).',
    description:
      'Garma-Grup SRL converts manure, alcohol-production residues and slaughterhouse waste into biogas, renewable electricity and organic fertilizer through anaerobic digestion.',
    about: `Garma-Grup SRL is an integrated agrifood company based in Fîrlădeni, Hîncești district, whose activities include crop cultivation, feed production, cattle farming, grain and pasta processing, ethyl-alcohol production and renewable-energy generation. Its circular business model connects these operations so that biological residues from one activity become productive inputs for another.

Manure from the company's cattle farm and organic residues from alcohol production are used as the principal feedstock for its anaerobic-digestion facility. Garma-Grup also processes organic waste received from nearby slaughterhouses, creating industrial symbiosis between livestock farming, food processing, waste management and energy production. Instead of being discarded or left to decompose, these materials are converted into biogas. According to the company, the facility can produce up to 50,000 m3 of biogas per day. The biogas is used to generate steam for alcohol production and renewable electricity through three Jenbacher cogeneration units with a combined reported capacity exceeding 3 MW. The electricity supplies the company's operations, while surplus production is delivered to the national grid.

The remaining organic material is used as fertilizer on approximately 500 hectares of company-managed agricultural land, returning nutrients to crop production and reducing dependence on synthetic fertilizers. This closes biological resource loops while improving the efficiency of the company's integrated production system.

The model generates environmental benefits by diverting organic residues from uncontrolled disposal, reducing potential soil and water pollution and replacing part of the company's conventional energy and fertilizer requirements. Economically, it transforms waste-management costs into energy savings, productive agricultural inputs and potential revenue from surplus electricity. The case demonstrates how an agrifood producer can embed circularity in its core business model by combining internal resource recovery, renewable-energy generation, nutrient recycling and partnerships with external waste generators.`,
    caseLink: 'https://garma-grup.md/en/about-us/'
  }),
  createCase({
    id: 'case-023',
    slug: 'unfloria-textile-care-services',
    companyName: 'Unfloria SRL',
    country: 'Republic of Moldova',
    sector: 'Textiles',
    rStrategies: ['Repair (R4)', 'Refurbish (R5)', 'Reduce (R2)'],
    rStrategyDescription:
      'Professional textile care maintains product quality and extends useful life (Repair); cleaning and restoration of feather pillows (Refurbish); lower demand for replacement textiles and in-house laundry resources (Reduce).',
    description:
      "UNFLORIA SRL provides professional textile laundry, cleaning and restoration services that extend the useful life of clients' garments, linens, carpets and feather pillows.",
    about: `UNFLORIA SRL is a textile-service company based in Ungheni that provides professional laundry, ecological dry-cleaning and textile-maintenance services to private companies, public institutions and individual customers. Its activities include washing and caring for garments, linen, workwear, knitwear, carpets and other household or institutional textiles, as well as the specialised cleaning, sanitisation and restoration of feather pillows.

The company operates through a product-as-a-service-oriented circular business model, generating value through professional textile care rather than relying exclusively on the sale of new products. Through service contracts, UNFLORIA assumes responsibility for washing, cleaning, sanitising and maintaining textiles used by its clients. The products are treated according to their material characteristics and care requirements and are returned hygienised, in good condition and suitable for continued use.

Outsourcing these activities to a specialised provider enables companies and public institutions to avoid or reduce the resources required for an in-house laundry, including investments in washing and drying equipment, energy and water consumption, detergents, maintenance costs and dedicated personnel. At the same time, clients benefit from professionally cleaned textiles that meet high hygiene and quality standards. Appropriate treatment helps preserve textile structure, appearance and functionality, extending product lifetimes and reducing replacement frequency and related expenditure.

The cleaning, sanitisation and restoration of feather pillows is particularly relevant to circularity. Existing pillows and their natural filling are recovered and restored for continued use instead of being prematurely discarded and replaced.

UNFLORIA reports using biodegradable detergents and solvents and integrating solar energy into its operations. These practices complement the service model by reducing the environmental impact of textile maintenance.

The case demonstrates how specialised and centralised textile-care services can create economic benefits for clients while slowing textile consumption and waste generation. By combining professional maintenance, high-quality sanitisation, resource-efficient service delivery and pillow restoration, UNFLORIA helps keep textile products functional and in use for longer.`,
    caseLink: 'https://unfloria.md/'
  })
];

/* Filter values are derived automatically, so editors maintain each value once. */
export const caseSectors = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.sectors ?? []))].sort();
export const caseCountries = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.countries ?? []))].sort();
export const caseRStrategies = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.rStrategies ?? []))].sort();
