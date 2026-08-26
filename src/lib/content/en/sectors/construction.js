/*
  CONSTRUCTION SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure
    and resource placement tags are also being changed.
  - Construction case cards are edited separately in src/lib/content/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const constructionIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    'The construction sector includes the design, building, renovation and demolition of buildings and infrastructure. It is one of the largest users of raw materials and generates substantial amounts of waste, while also contributing significantly to energy use and greenhouse gas emissions. Construction and demolition waste accounts for approximately 35% of all EU waste, the single largest waste stream in Europe, yet recovery rates remain far below circular economy targets (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Circular economy practices can help the sector use materials more efficiently, extend the lifetime of buildings and components, and reduce the need for virgin resources, some which have potential to disrupt the sector due to low access and high demand (e.g. sand). Urban mining, recovering and reusing materials from existing structures, is a fast-growing area offering SMEs a competitive advantage in procurement and project differentiation.'
  ]
};

// 2. CASE EXAMPLES
// Add exactly three case names from src/lib/content/cases.js to `featuredCaseNames`.
// The names should match the visible company/case names in the case catalogue.
// Recommended: choose one case from Armenia, one from Moldova, and one from Ukraine.
export const constructionCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the construction sector to find all relevant cases.',
  featuredCaseNames: [
    'UNIPLAST SRL',
    'Ararat Chanshin LLC',
    'Eco Build Ukraine'
  ]
};

// 3. Common barriers and opportunities
export const constructionBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Common barriers and opportunities',
  intro: 'Construction small-medium enterprises face data, regulatory, cost and skills barriers, while renovation, material passports and secondary-material markets are opening new opportunities.',
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'Lack of material traceability data in existing building stock.',
      source: 'Bellini & Bang, 2022 and Raghu et al., 2023'
    },
    {
      text: 'Regulatory uncertainty around certification of recycled and salvaged materials.',
      source: 'EU Construction and Demolition Waste Protocol and Guidelines'
    },
    {
      text: 'Client and contractor resistance to longer design and planning timelines.',
      source: 'Barriers to Circular Procurement in Construction, 2024'
    },
    {
      text: 'Higher upfront cost of deconstruction compared with conventional demolition.',
      source: 'Dantata et al., Analysis of Cost and Duration of Deconstruction and Demolition in Massachusetts, 2024'
    },
    {
      text: 'Fragmented supply chains hinder the development of secondary-material markets.',
      source: 'MDPI, Sustainability: Circular Economy of EU Construction and Demolition Waste, 2025'
    },
    {
      text: 'Skills gaps in design for disassembly, adaptive reuse and material-passport creation.',
      source: 'Review of Barriers, Drivers and Stakeholders Towards CE in Construction, 2023'
    }
  ],
  opportunities: [
    {
      text: 'Digital Building Passports enable material tracking, reuse planning and asset-value retention.',
      source: 'From Data Templates to Material Passports and Digital Product Passports, 2023'
    },
    {
      text: 'Urban mining and material banks can reduce procurement costs and supply risk.',
      source: 'European.realestate, How Circular Economy is Reshaping European Construction, 2026'
    },
    {
      text: 'Green public procurement criteria increasingly favour circular construction small-medium enterprises (SMEs).',
      source: 'ECCO, Green Public Procurement: A Catalyst for Competitiveness, 2025'
    },
    {
      text: 'Modular and prefabricated construction supports disassembly and material reuse.',
      source: 'Towards a Sustainable Circular Economy: Reusing Modular Building Components, 2024'
    },
    {
      text: 'The growing secondary-material market creates opportunities for reclaimed stone, timber, brick and glass.',
      source: 'Europe Green Building Materials Market, 2026'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Construction sector slug to a resource's
// placements in src/lib/content/tool-catalogue.js to display it automatically.
export const constructionRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const construction = {
  number: 'Sector 1',
  slug: 'construction',
  title: 'Construction',
  description: 'This sector guide provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
  image: '/images/construction.jpg',
  imageAlt: 'Construction sector',
  navigation: [
    { label: 'Introduction', sectionId: constructionIntroSection.id },
    { label: 'Cases', sectionId: constructionCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: constructionBarriersSection.id },
    { label: 'Relevant tools', sectionId: constructionRelevantToolsSection.id }
  ],
  sections: [
    constructionIntroSection,
    constructionCasesSection,
    constructionBarriersSection,
    constructionRelevantToolsSection
  ]
};
