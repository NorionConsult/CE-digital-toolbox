/*
  CASE CATALOGUE RECORDS

  HOW TO ADD A CASE:
  1. Copy one complete createCase({ ... }) block below.
  2. Give the case a unique id and slug.
  3. Replace the company, taxonomy and page text.
  4. Save the file. The website automatically creates:
     - a card on the Cases page
     - a detail page at /cases/your-slug/
     - a card in a matching sector package's Case examples section

  The sector badge colour is assigned automatically from the sector name.
  Existing sector names have fixed theme colours. A new sector name also works:
  the badge component generates a consistent fallback colour automatically.

  The slug becomes the page URL. Use lowercase words separated by hyphens.
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
 *   challenge: string;
 *   approach: string;
 *   outcomes: string[];
 *   lessons: string[];
 *   image?: string;
 *   imageAlt?: string;
 *   externalLink?: string;
 * }} CaseStudy
 */

/**
 * Keeps optional case fields predictable for the shared card and page templates.
 * @param {CaseStudy} caseStudy
 * @returns {CaseStudy}
 */
function createCase(caseStudy) {
  return {
    image: '',
    imageAlt: '',
    externalLink: '',
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
    description: 'Customers lease denim and return garments at end of life for closed-loop recycling into new products.',
    about: 'MUD Jeans pioneered a lease model that keeps ownership and responsibility for denim within the business relationship.',
    challenge: 'Conventional denim production consumes significant resources while worn garments commonly leave the value chain as waste.',
    approach: 'The company offers jeans through a leasing model and takes products back so fibres and components can be recovered for new denim.',
    outcomes: [
      'Longer customer relationships through a service-based model.',
      'Returned garments become inputs for future products.',
      'A practical example of closed-loop textile production.'
    ],
    lessons: [
      'Take-back logistics must be designed together with the commercial model.',
      'Clear customer communication helps make return behaviour part of the service.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the MUD Jeans case'
  }),
  createCase({
    id: 'case-002',
    slug: 'patagonia-worn-wear',
    companyName: 'Patagonia',
    country: 'United States / Europe',
    clientSegment: 'Outdoor apparel brand',
    sector: 'Textiles',
    description: 'The Worn Wear programme supports repair and resale of used garments, extending product lifecycles and generating secondary revenue.',
    about: 'Patagonia combines durable product design with repair, reuse and resale services through its Worn Wear programme.',
    challenge: 'Outdoor garments can remain useful for many years, but damage and changing customer needs can shorten their active life.',
    approach: 'The programme provides repair support and creates a resale channel for used products.',
    outcomes: [
      'Products remain in use for longer.',
      'Repair and resale create additional customer touchpoints.',
      'Secondary products create value beyond the first sale.'
    ],
    lessons: [
      'Durable design and repair services reinforce one another.',
      'Resale can become a visible part of the core brand proposition.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the Patagonia case'
  }),
  createCase({
    id: 'case-003',
    slug: 'rifo-recycled-fibres',
    companyName: 'Rifo',
    country: 'Italy',
    clientSegment: 'Textile manufacturer',
    sector: 'Textiles',
    description: 'An Italian SME produces clothing from recycled cashmere and cotton sourced from industrial offcuts in Prato.',
    about: 'Rifo uses recycled fibres and local textile expertise to turn production offcuts into new clothing.',
    challenge: 'High-value textile offcuts can be lost when collection, sorting and recycling systems are disconnected.',
    approach: 'The business sources industrial offcuts and uses established recycling capabilities in the Prato textile cluster.',
    outcomes: [
      'Industrial textile waste is returned to productive use.',
      'Recycled fibres replace a share of virgin material demand.',
      'Local cluster knowledge supports a circular supply chain.'
    ],
    lessons: [
      'Regional industrial clusters can provide the partners needed for material recovery.',
      'Reliable sourcing and material quality are central to recycled-fibre products.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the Rifo case'
  }),
  createCase({
    id: 'case-004',
    slug: 'elvis-kresse-zero-waste',
    companyName: 'Elvis & Kresse',
    country: 'United Kingdom',
    clientSegment: 'Accessories manufacturer',
    sector: 'Textiles',
    description: 'Decommissioned fire hoses and industrial waste streams are transformed into luxury accessories through a zero-waste production model.',
    about: 'Elvis & Kresse creates premium accessories from materials that would otherwise be discarded.',
    challenge: 'Specialised industrial materials can be difficult to recycle through conventional waste systems.',
    approach: 'The company builds products and a brand story around rescued fire hose and other industrial waste streams.',
    outcomes: [
      'Difficult waste streams are converted into durable products.',
      'Material provenance becomes part of the customer value proposition.',
      'A zero-waste approach supports a distinctive market position.'
    ],
    lessons: [
      'Unusual waste streams can support premium products when design quality is strong.',
      'Long-term supplier relationships are important for consistent recovered materials.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the Elvis and Kresse case'
  }),
  createCase({
    id: 'case-005',
    slug: 'renewlondon-deadstock-redesign',
    companyName: 'Renewlondon',
    country: 'United Kingdom',
    clientSegment: 'Fashion design SME',
    sector: 'Textiles',
    description: 'Unwanted fashion stock and deadstock fabric are redesigned into new products through partnerships with brands.',
    about: 'Renewlondon works with surplus stock and deadstock fabric to create new products and prevent usable material from becoming waste.',
    challenge: 'Unsold inventory and surplus fabric represent embedded material, labour and financial value that can be lost.',
    approach: 'The business collaborates with brands to redesign existing stock and materials for new uses.',
    outcomes: [
      'Surplus textiles are diverted from disposal.',
      'Brands gain a practical route for addressing deadstock.',
      'Redesign creates new value from existing products and materials.'
    ],
    lessons: [
      'Partnerships give redesign businesses access to consistent material streams.',
      'Design flexibility is essential when inputs vary between projects.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the Renewlondon case'
  }),
  createCase({
    id: 'case-006',
    slug: 'houdini-sportswear-product-service',
    companyName: 'Houdini Sportswear',
    country: 'Sweden',
    clientSegment: 'Outdoor apparel brand',
    sector: 'Textiles',
    description: 'Outdoor garments are rented, repaired and taken back for closed-loop recycling through a product-as-a-service model.',
    about: 'Houdini Sportswear combines rental, repair and take-back services to keep outdoor garments and materials circulating.',
    challenge: 'Technical garments contain valuable materials but may be used only occasionally or discarded before their functional life ends.',
    approach: 'The company offers access through rental, supports repairs and accepts products back for recovery.',
    outcomes: [
      'Rental increases utilisation of technical clothing.',
      'Repair extends garment life.',
      'Take-back supports closed-loop material recovery.'
    ],
    lessons: [
      'Product-as-a-service works best when durability and maintenance are designed into the offer.',
      'Several circular services can reinforce one another within one customer journey.'
    ],
    image: '/images/textiles.jpg',
    imageAlt: 'Textile materials representing the Houdini Sportswear case'
  }),

  // AGRICULTURE CASES
  createCase({
    id: 'case-007',
    slug: 'koppert-biological-systems',
    companyName: 'Koppert Biological Systems',
    country: 'Netherlands',
    clientSegment: 'Agricultural biologicals provider',
    sector: 'Agriculture',
    description: 'Produces biological crop-protection products and natural bee pollinators, replacing chemical pesticides with nature-based closed-loop systems.',
    about: 'Koppert Biological Systems applies nature-based methods to crop protection and pollination.',
    challenge: 'Agricultural producers need effective pest-management and pollination systems while reducing dependence on synthetic chemical inputs.',
    approach: 'The company supplies biological crop-protection products and natural pollinators that work with ecological processes.',
    outcomes: [
      'Chemical pesticide use can be reduced.',
      'Nature-based crop-management methods support resilient production.',
      'Biological inputs create an alternative to conventional treatment systems.'
    ],
    lessons: [
      'Circular agriculture can include replacing synthetic inputs with regenerative biological systems.',
      'Solutions must remain practical and reliable for growers.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the Koppert Biological Systems case'
  }),
  createCase({
    id: 'case-008',
    slug: 'revive-eco-coffee-grounds',
    companyName: 'Revive Eco',
    country: 'United Kingdom',
    clientSegment: 'Circular ingredients SME',
    sector: 'Agriculture',
    description: 'Valorises spent coffee grounds collected from cafes and food producers into natural skincare, cleaning and food ingredients.',
    about: 'Revive Eco turns a common food-service residue into ingredients for new products.',
    challenge: 'Spent coffee grounds are produced in large volumes and can lose value when treated only as waste.',
    approach: 'The business collects coffee grounds and processes them into inputs for skincare, cleaning and food applications.',
    outcomes: [
      'Organic residues become useful commercial ingredients.',
      'Food businesses gain a valorisation route for coffee waste.',
      'Industrial symbiosis connects waste producers with new product markets.'
    ],
    lessons: [
      'Consistent collection partnerships are important for residue-based businesses.',
      'One waste stream can support several end markets.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the Revive Eco case'
  }),
  createCase({
    id: 'case-009',
    slug: 'foodwaste-ch-redistribution',
    companyName: 'FoodWaste.ch',
    country: 'Switzerland',
    clientSegment: 'Food redistribution platform',
    sector: 'Agriculture',
    description: 'A digital platform connects agri-food businesses with buyers elsewhere in the value chain, reducing farm-level food waste through redistribution.',
    about: 'FoodWaste.ch uses digital connections to keep surplus food products within the value chain.',
    challenge: 'Usable agricultural and food products can be lost when producers cannot quickly find alternative buyers.',
    approach: 'The platform connects businesses holding surplus products with potential buyers and users.',
    outcomes: [
      'Surplus products can be redistributed before becoming waste.',
      'Businesses gain access to additional value-chain partners.',
      'Digital matching supports more efficient food-resource use.'
    ],
    lessons: [
      'Timely information is essential for redistributing perishable products.',
      'Platforms can reduce waste without requiring ownership of processing infrastructure.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the FoodWaste.ch case'
  }),
  createCase({
    id: 'case-010',
    slug: 'circular-bio-based-europe',
    companyName: 'Circular Bio-Based Europe',
    country: 'European Union',
    clientSegment: 'Bio-based funding programme',
    sector: 'Agriculture',
    description: 'An EU programme funds agri-SMEs to convert agricultural crop residues and waste streams into high-value bio-based products and materials.',
    about: 'Circular Bio-Based Europe supports innovation and partnerships for bio-based value chains.',
    challenge: 'Agricultural residues often require research, investment and cross-sector partnerships before they can become viable products.',
    approach: 'The programme funds collaborative projects that convert residues and by-products into bio-based products and materials.',
    outcomes: [
      'Agri-SMEs gain access to innovation funding.',
      'Agricultural waste streams can enter higher-value applications.',
      'Partnerships connect agriculture with research and industry.'
    ],
    lessons: [
      'Funding programmes can reduce the investment barrier for circular innovation.',
      'Bio-based projects often depend on collaboration across several sectors.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the Circular Bio-Based Europe case'
  }),
  createCase({
    id: 'case-011',
    slug: 'agrosustain-bioactive-coatings',
    companyName: 'AgroSustain',
    country: 'Switzerland',
    clientSegment: 'Agri-food technology SME',
    sector: 'Agriculture',
    description: 'Uses bioactive coatings from agricultural by-products to extend the shelf life of fresh produce and reduce post-harvest losses.',
    about: 'AgroSustain develops coatings that help fresh produce remain usable for longer.',
    challenge: 'Fresh produce can be lost after harvest because of spoilage and limited shelf life.',
    approach: 'The company creates bioactive coatings using agricultural by-products instead of relying only on synthetic preservatives.',
    outcomes: [
      'Fresh-produce shelf life can be extended.',
      'Post-harvest food losses can be reduced.',
      'Agricultural by-products gain a new productive use.'
    ],
    lessons: [
      'Product-life extension is a practical circular strategy for perishable goods.',
      'By-products can become inputs for solutions elsewhere in the same value chain.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the AgroSustain case'
  }),
  createCase({
    id: 'case-012',
    slug: 'lettus-grow-vertical-farming',
    companyName: 'LettUs Grow',
    country: 'United Kingdom',
    clientSegment: 'Agricultural technology SME',
    sector: 'Agriculture',
    description: 'Aeroponic vertical-farming technology enables year-round, pesticide-free growing with substantially less water for urban and peri-urban agri-SMEs.',
    about: 'LettUs Grow develops aeroponic systems for controlled-environment and vertical agriculture.',
    challenge: 'Conventional growing can be constrained by land, seasons, water demand and pesticide use.',
    approach: 'The technology supports year-round production in controlled environments with precision resource management.',
    outcomes: [
      'Water demand can be significantly reduced.',
      'Food can be grown closer to urban markets.',
      'Year-round production reduces dependence on seasonal conditions.'
    ],
    lessons: [
      'Precision systems can reduce resource demand but require suitable investment and skills.',
      'Urban agriculture can shorten supply chains for selected crops.'
    ],
    image: '/images/agriculture.jpg',
    imageAlt: 'Agricultural produce representing the LettUs Grow case'
  }),

  // CONSTRUCTION CASES
  createCase({
    id: 'case-013',
    slug: 'rotor-urban-mining',
    companyName: 'Rotor',
    country: 'Belgium',
    clientSegment: 'Deconstruction specialist',
    sector: 'Construction',
    description: 'A deconstruction specialist salvages, catalogues and resells architectural components from buildings before demolition.',
    about: 'Rotor demonstrates urban mining at scale by recovering reusable building components.',
    challenge: 'Conventional demolition can destroy components that still have functional and market value.',
    approach: 'The company selectively removes, documents and resells architectural materials before demolition.',
    outcomes: [
      'Reusable components remain in circulation.',
      'Material value is retained before demolition.',
      'Buyers gain access to salvaged architectural products.'
    ],
    lessons: [
      'Early access to buildings is essential for selective salvage.',
      'Cataloguing and market visibility help recovered products find new users.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the Rotor case'
  }),
  createCase({
    id: 'case-014',
    slug: 'concular-material-reuse',
    companyName: 'Concular',
    country: 'Germany',
    clientSegment: 'Digital construction platform',
    sector: 'Construction',
    description: 'A digital platform enables pre-demolition material audits and reuse planning, linking SMEs with salvaged-material markets across Europe.',
    about: 'Concular provides digital tools and market connections for building-material reuse.',
    challenge: 'Reusable materials are difficult to recover when information becomes available too late or potential buyers cannot be identified.',
    approach: 'The platform supports material audits, reuse planning and connections to secondary-material markets.',
    outcomes: [
      'Materials can be identified before demolition.',
      'Reuse options become visible during project planning.',
      'SMEs can connect with wider markets for salvaged products.'
    ],
    lessons: [
      'Material information must be collected early in the project.',
      'Digital platforms can connect local recovery work with regional demand.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the Concular case'
  }),
  createCase({
    id: 'case-015',
    slug: 'troldtekt-design-for-end-of-life',
    companyName: 'Troldtekt',
    country: 'Denmark',
    clientSegment: 'Building-material manufacturer',
    sector: 'Construction',
    description: 'Produces acoustic ceiling panels from certified wood fibres and cement, with cradle-to-cradle certification and an EU-wide market reach.',
    about: 'Troldtekt integrates material selection, certification and end-of-life considerations into acoustic building products.',
    challenge: 'Building products need to meet performance requirements while supporting healthier material cycles and credible documentation.',
    approach: 'The company combines certified inputs with cradle-to-cradle product development and market certification.',
    outcomes: [
      'Circularity considerations are integrated into product design.',
      'Certification provides transparent information for clients.',
      'A Danish SME product reaches a wider European market.'
    ],
    lessons: [
      'Product certification can support trust in circular building materials.',
      'End-of-life planning begins with material and design choices.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the Troldtekt case'
  }),
  createCase({
    id: 'case-016',
    slug: 'madaster-material-passports',
    companyName: 'Madaster',
    country: 'Netherlands / Denmark',
    clientSegment: 'Material-passport platform',
    sector: 'Construction',
    description: 'A material-passport platform registers buildings as material banks, enabling future material recovery and reuse at the end of building life.',
    about: 'Madaster creates structured records of the materials contained in buildings.',
    challenge: 'Material value is often lost because future owners and project teams do not know what a building contains.',
    approach: 'The platform records material information so buildings can be managed as material banks.',
    outcomes: [
      'Building materials become traceable over time.',
      'Future recovery and reuse planning becomes easier.',
      'Material information can support asset and circularity decisions.'
    ],
    lessons: [
      'Material passports are most useful when information remains current.',
      'Digital records support future reuse but depend on good source data.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the Madaster case'
  }),
  createCase({
    id: 'case-017',
    slug: 'vestia-housing-modular-redesign',
    companyName: 'Vestia Housing',
    country: 'Netherlands',
    clientSegment: 'Social housing provider',
    sector: 'Construction',
    description: 'A social-housing operator redesigns apartments for adaptability and modular reconfiguration, helping extend building service life by more than 40 years.',
    about: 'Vestia Housing uses adaptable and modular design to keep housing useful as needs change.',
    challenge: 'Fixed apartment layouts can become obsolete even when the main building structure remains serviceable.',
    approach: 'The operator redesigns spaces so they can be reconfigured and adapted instead of replaced.',
    outcomes: [
      'Building service life can be extended.',
      'Apartments can respond to changing resident needs.',
      'Adaptability reduces pressure for demolition and replacement.'
    ],
    lessons: [
      'Designing for change protects long-term building value.',
      'Modularity can support both social needs and resource efficiency.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the Vestia Housing case'
  }),
  createCase({
    id: 'case-018',
    slug: 'stonecycling-upcycled-materials',
    companyName: 'StoneCycling',
    country: 'Netherlands',
    clientSegment: 'Building-material manufacturer',
    sector: 'Construction',
    description: 'Upcycles ceramic and construction waste into new architectural materials, transforming waste from demolition sites into premium building products.',
    about: 'StoneCycling creates architectural products from recovered ceramic and construction waste.',
    challenge: 'Mineral and ceramic waste is generated in large volumes and commonly downcycled or discarded.',
    approach: 'The company processes waste materials into new products for architectural applications.',
    outcomes: [
      'Construction waste becomes a higher-value building product.',
      'Virgin-material demand can be reduced.',
      'Upcycled materials gain a visible role in new projects.'
    ],
    lessons: [
      'Strong design can move recycled materials into premium markets.',
      'Consistent material quality is important for construction applications.'
    ],
    image: '/images/construction.jpg',
    imageAlt: 'Construction materials representing the StoneCycling case'
  })
];

/* Filter values are derived automatically, so editors maintain each value once. */
export const caseSectors = [...new Set(cases.map((caseStudy) => caseStudy.sector))].sort();
export const caseCountries = [...new Set(cases.map((caseStudy) => caseStudy.country))].sort();
export const caseClientSegments = [...new Set(cases.map((caseStudy) => caseStudy.clientSegment))].sort();
