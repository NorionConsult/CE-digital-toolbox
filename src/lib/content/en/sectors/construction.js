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
    'Construction and demolition waste accounts for approximately 35% of all EU waste, the single largest waste stream in Europe, yet recovery rates remain far below circular economy targets.',
    'Buildings are responsible for around 40% of EU energy consumption and 36% of Carbon dioxide (CO2) emissions. Renovation and retrofit therefore represent the sector\'s largest circular economy opportunity.',
    'Small-medium enterprises (SMEs) account for over 90% of European construction firms, yet most lack dedicated circular economy knowledge, tools and supply-chain capacity for implementation.',
    'The EU Construction Products Regulation reform and revised Waste Framework Directive are driving new requirements for material traceability and end-of-life planning.',
    'Key circular economy principles for construction include design for disassembly, material reuse and repurposing, adaptive reuse of existing buildings, and digital building material passports.',
    'Urban mining, recovering and reusing materials from existing structures, is a fast-growing area offering small-medium enterprises (SMEs) a competitive advantage in procurement and project differentiation.'
  ]
};

// 2. CASE EXAMPLES
// Add exactly three case names from src/lib/content/cases.js to `featuredCaseNames`.
// The names should match the visible company/case names in the case catalogue.
export const constructionCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the construction sector to find all relevant cases.',
  featuredCaseNames: [
    'Natural Self-Cleaning Pool',
    'Kindergartens in Yerevan Retrofitting Case Study',
    'Ararat Chanshin LLC'
  ]
};

// 3. KEY BARRIERS AND OPPORTUNITIES
export const constructionBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Constructionsmall-medium enterprises (SMEs) face data, regulatory, cost and skills barriers, while renovation, material passports and secondary-material markets are opening new opportunities.',
  barriers: [
    'Lack of material traceability data in existing building stock.',
    'Regulatory uncertainty around certification of recycled and salvaged materials.',
    'Client and contractor resistance to longer design and planning timelines.',
    'Higher upfront cost of deconstruction compared with conventional demolition.',
    'Fragmented supply chains hinder the development of secondary-material markets.',
    'Skills gaps in design for disassembly, adaptive reuse and material-passport creation.'
  ],
  opportunities: [
    'Digital Building Passports enable material tracking, reuse planning and asset-value retention.',
    'Urban mining and material banks can reduce procurement costs and supply risk.',
    'Green public procurement criteria increasingly favour circular construction small-medium enterprises (SMEs).',
    'Modular and prefabricated construction supports disassembly and material reuse.',
    'The growing secondary-material market creates opportunities for reclaimed stone, timber, brick and glass.'
  ]
};

// 4. BEST PRACTICES
// Each object becomes one bullet-point group on the page.
export const constructionBestPracticesSection = {
  id: 'best-practices',
  title: 'Best practices',
  intro: 'Explore practical actions across design, procurement, partnerships, waste and compliance.',
  groups: [
    {
      title: 'Design and materials',
      items: [
        'Conduct pre-demolition and pre-renovation material audits for every project.',
        'Use Building Information Modelling to plan material reuse and disassembly.',
        'Design structural connections and joints for reversibility and disassembly.'
      ]
    },
    {
      title: 'Procurement and partnerships',
      items: [
        'Specify minimum recycled content in procurement contracts and specifications.',
        'Partner with deconstruction specialists for selective salvage before demolition.',
        'Use material-exchange platforms to source and list surplus or reclaimed stock.',
        'Prioritise adaptive-reuse strategies before recommending demolition to clients.'
      ]
    },
    {
      title: 'Waste and compliance',
      items: [
        'Track and set reduction targets for construction-site waste volumes and landfill rates.',
        'Engage the supply chain on circular economy requirements, standards and material-return protocols.'
      ]
    }
  ]
};

// 5. RELEVANT TOOLS
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
  description: 'This sector tool provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
  image: '/images/construction.jpg',
  imageAlt: 'Construction sector',
  navigation: [
    { label: 'Introduction', sectionId: constructionIntroSection.id },
    { label: 'Cases', sectionId: constructionCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: constructionBarriersSection.id },
    { label: 'Best practices', sectionId: constructionBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: constructionRelevantToolsSection.id }
  ],
  sections: [
    constructionIntroSection,
    constructionCasesSection,
    constructionBarriersSection,
    constructionBestPracticesSection,
    constructionRelevantToolsSection
  ]
};
