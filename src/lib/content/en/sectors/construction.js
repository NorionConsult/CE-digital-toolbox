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
    'Buildings are responsible for around 40% of EU energy consumption and 36% of CO2 emissions. Renovation and retrofit therefore represent the sector\'s largest circular economy opportunity.',
    'SMEs account for over 90% of European construction firms, yet most lack dedicated circular economy knowledge, tools and supply-chain capacity for implementation.',
    'The EU Construction Products Regulation reform and revised Waste Framework Directive are driving new requirements for material traceability and end-of-life planning.',
    'Key circular economy principles for construction include design for disassembly, material reuse and repurposing, adaptive reuse of existing buildings, and digital building material passports.',
    'Urban mining, recovering and reusing materials from existing structures, is a fast-growing area offering SMEs a competitive advantage in procurement and project differentiation.'
  ]
};

// 2. CASE EXAMPLES
// Case cards shown here are connected automatically through sector: 'Construction'
// in src/lib/content/cases.js.
export const constructionCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following case examples show how circular economy strategies and practices have been applied in real business scenarios. Open the Cases page to explore every case.'
};

// 3. KEY BARRIERS AND OPPORTUNITIES
export const constructionBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Construction SMEs face data, regulatory, cost and skills barriers, while renovation, material passports and secondary-material markets are opening new opportunities.',
  barriers: [
    'Lack of material traceability data in existing building stock.',
    'Regulatory uncertainty around certification of recycled and salvaged materials.',
    'Client and contractor resistance to longer design and planning timelines.',
    'Higher upfront cost of deconstruction compared with conventional demolition.',
    'Fragmented supply chains hinder the development of secondary-material markets.',
    'Skills gaps in design for disassembly, adaptive reuse and material-passport creation.'
  ],
  opportunities: [
    'The EU Renovation Wave is driving demand for circular economy-aligned retrofit and refurbishment.',
    'Digital Building Passports enable material tracking, reuse planning and asset-value retention.',
    'Urban mining and material banks can reduce procurement costs and supply risk.',
    'Green public procurement criteria increasingly favour circular construction SMEs.',
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
        'Register building materials through a digital building material-passport system.',
        'Track and set reduction targets for construction-site waste volumes and landfill rates.',
        'Engage the supply chain on circular economy requirements, standards and material-return protocols.'
      ]
    }
  ]
};

// 5. RELEVANT TOOLS
// Tools are not listed here. Add the Construction sector slug to a resource's
// placements in src/lib/content/resources.js to display it automatically.
export const constructionRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: 'Tools tagged for the Construction sector appear here automatically.'
};

// 6. NETWORK AND COLLABORATIONS
// Add a URL to `link` when the website should show a Visit website link.
export const constructionNetworkSection = {
  id: 'networks-collaborations',
  title: 'Network and collaborations',
  intro: 'These networks can support circular renovation, material passports, certification, knowledge sharing and collaboration.',
  items: [
    {
      name: 'CIRCuIT (EU Horizon Project)',
      description: 'EU Horizon 2020 project connecting cities and construction SMEs to pilot circular renovation practices, linking clusters in Copenhagen, Hamburg, Brussels and Helsinki.',
      link: ''
    },
    {
      name: 'Buildings Performance Institute Europe (BPIE)',
      description: 'EU think tank advancing circular-building strategies and Renovation Wave policy, providing sector intelligence, tools and guidance for construction SMEs.',
      link: ''
    },
    {
      name: 'Madaster Foundation',
      description: 'Non-profit advancing material passports for buildings across Europe, offering free tools, community and support for construction SMEs beginning their circular economy journey.',
      link: ''
    },
    {
      name: 'Green Building Councils (GBCs)',
      description: 'National Green Building Councils across Europe provide certification, circular economy networking and guidance for construction businesses.',
      link: ''
    },
    {
      name: 'ResCom (Regional CE Networks)',
      description: 'Regional resource-sharing and collaboration networks supporting material exchange, knowledge sharing and project collaboration between construction SMEs.',
      link: ''
    },
    {
      name: 'European Construction Sector Observatory',
      description: 'EU-funded platform providing circular economy trends, sector intelligence and policy updates for construction SMEs, useful for benchmarking and regulatory foresight.',
      link: ''
    }
  ]
};

// SECTOR CARD, HERO AND NAVIGATION
export const construction = {
  number: 'Sector 1',
  slug: 'construction',
  title: 'Construction',
  description: 'This sector package provides tools, cases and practical guidance for construction SMEs adopting circular economy practices.',
  image: '/images/construction.jpg',
  imageAlt: 'Construction sector',
  navigation: [
    { label: 'Introduction', sectionId: constructionIntroSection.id },
    { label: 'Cases', sectionId: constructionCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: constructionBarriersSection.id },
    { label: 'Best practices', sectionId: constructionBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: constructionRelevantToolsSection.id },
    { label: 'Networks', sectionId: constructionNetworkSection.id }
  ],
  sections: [
    constructionIntroSection,
    constructionCasesSection,
    constructionBarriersSection,
    constructionBestPracticesSection,
    constructionRelevantToolsSection,
    constructionNetworkSection
  ]
};
