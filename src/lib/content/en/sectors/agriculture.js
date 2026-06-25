/*
  AGRICULTURE SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure
    and resource placement tags are also being changed.
  - Agriculture case cards are edited separately in src/lib/content/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const agricultureIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    'Agriculture contributes approximately 10% of EU greenhouse gas emissions and accounts for around 70% of global freshwater consumption, making it central to the circular economy transition.',
    'Up to 30% of food produced globally is wasted, with much of this occurring at farm and post-harvest processing stages before reaching consumers.',
    'The EU Farm to Fork Strategy targets a 50% reduction in pesticide use and 20% reduction in fertiliser use by 2030, while expanding organic farmland to 25% of total agricultural area.',
    'SME farms and agri-food businesses face input cost volatility, soil degradation, biodiversity loss and tightening regulatory requirements, all of which circular economy strategies can address.',
    'Circular agriculture closes nutrient loops, returning compost, digestate and recovered nutrients to land rather than losing them as waste or pollution.',
    'Key circular economy opportunities include agroecology, precision farming, food-waste valorisation, short supply chains and agricultural biorefinery models.'
  ]
};

// 2. CASE EXAMPLES
// Case cards shown here are connected automatically through sector: 'Agriculture'
// in src/lib/content/cases.js.
export const agricultureCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following case examples show how circular economy strategies and practices have been applied in real business scenarios. Open the Cases page to explore every case.'
};

// 3. KEY BARRIERS AND OPPORTUNITIES
export const agricultureBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Agricultural SMEs face investment, knowledge and regulatory barriers, while new markets, technologies and nutrient-recovery models are creating practical opportunities.',
  barriers: [
    'High capital cost of precision technology and circular economy equipment.',
    'Fragmented land ownership limits the scale of circular nutrient systems.',
    'Knowledge gaps among small farms on circular economy practices and returns.',
    'Complex regulation around organic waste, nutrient recovery and biogas.',
    'Price competition from conventional non-circular producers.',
    'Short-term subsidy structures can discourage longer-term circular economy investment.'
  ],
  opportunities: [
    'Growing consumer demand for organic, local and sustainably certified produce.',
    'Biogas and biomass energy from agricultural residues create new income streams.',
    'Precision agriculture technology can significantly reduce input costs.',
    'Nutrient recovery from manure and slurry reduces dependence on synthetic fertilisers.',
    'Agri-food waste can become feedstock for bio-based materials and bioplastics.',
    'EU Common Agricultural Policy subsidies are increasingly tied to sustainability and circularity outcomes.'
  ]
};

// 4. BEST PRACTICES
// Each object becomes one bullet-point group on the page.
export const agricultureBestPracticesSection = {
  id: 'best-practices',
  title: 'Best practices',
  intro: 'Explore practical actions across new methods, business models, traceability and compliance.',
  groups: [
    {
      title: 'New methods',
      items: [
        'Explore nutrient recovery from manure, digestate and slurry.',
        'Measure and set targets to reduce food waste at harvest, storage and processing.',
        'Engage with local food networks and short supply chains to reduce transport waste.'
      ]
    },
    {
      title: 'Business model',
      items: [
        'Implement on-farm composting or anaerobic digestion for organic residues.',
        'Adopt precision irrigation and nutrient management to reduce input use.',
        'Build supply-chain partnerships for surplus redistribution and valorisation.',
        'Trial cover cropping and reduced tillage practices to restore soil health.',
        'Investigate biorefinery or industrial symbiosis partnerships for crop residues.'
      ]
    },
    {
      title: 'Traceability and compliance',
      items: [
        'Track and reduce energy and water consumption across farm operations.',
        'Engage with local food networks and regional circular economy platforms to share resources and access support.'
      ]
    }
  ]
};

// 5. RELEVANT TOOLS
// Tools are not listed here. Add the Agriculture sector slug to a resource's
// placements in src/lib/content/resources.js to display it automatically.
export const agricultureRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: 'Tools tagged for the Agriculture sector appear here automatically.'
};

// 6. NETWORK AND COLLABORATIONS
// Add a URL to `link` when the website should show a Visit website link.
export const agricultureNetworkSection = {
  id: 'networks-collaborations',
  title: 'Network and collaborations',
  intro: 'These networks can support funding, partnerships, standards, knowledge sharing and practical circular economy action.',
  items: [
    {
      name: 'Circular Bio-Based Europe (CBE JU)',
      description: 'EU Joint Undertaking funding agri-SMEs to develop bio-based products from agricultural waste, residues and by-products, with open calls and partnership opportunities.',
      link: ''
    },
    {
      name: 'EIT Food',
      description: 'EU innovation community connecting agri-food SMEs with research institutions, investors and circular economy accelerators to develop circular food-system solutions.',
      link: ''
    },
    {
      name: 'IFOAM Organics Europe',
      description: 'European network of organic and agroecological farming organisations providing policy support, knowledge sharing and market access for sustainable agri-SMEs.',
      link: ''
    },
    {
      name: 'ResCom (Nordic Agri Networks)',
      description: 'Nordic collaboration platform facilitating resource sharing and circular food-system partnerships, connecting farms and agri-food SMEs with regional circular economy opportunities.',
      link: ''
    },
    {
      name: 'Organic Denmark (Okologisk Danmark)',
      description: 'National network supporting Danish agri-SMEs in organic and circular transitions through policy advocacy, certification guidance and sector collaboration.',
      link: ''
    },
    {
      name: 'SME Climate Hub',
      description: 'Free tools and sector-specific guidance for agri-SMEs committing to emissions reduction and circular economy transitions, benchmarking and reporting included.',
      link: 'https://smeclimatehub.org/'
    }
  ]
};

// SECTOR CARD, HERO AND NAVIGATION
export const agriculture = {
  number: 'Sector 2',
  slug: 'agriculture',
  title: 'Agriculture',
  description: 'This sector package provides tools, cases and practical guidance for agriculture and agri-food SMEs adopting circular economy practices.',
  image: '/images/agriculture.jpg',
  imageAlt: 'Agriculture sector',
  navigation: [
    { label: 'Introduction', sectionId: agricultureIntroSection.id },
    { label: 'Cases', sectionId: agricultureCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: agricultureBarriersSection.id },
    { label: 'Best practices', sectionId: agricultureBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: agricultureRelevantToolsSection.id },
    { label: 'Networks', sectionId: agricultureNetworkSection.id }
  ],
  sections: [
    agricultureIntroSection,
    agricultureCasesSection,
    agricultureBarriersSection,
    agricultureBestPracticesSection,
    agricultureRelevantToolsSection,
    agricultureNetworkSection
  ]
};
