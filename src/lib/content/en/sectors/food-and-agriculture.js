/*
  FOOD AND AGRICULTURE SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - To make a paragraph change in the text, add \r\n at the end of the line and continue the paragraph on the next line. Making a space in the code will NOT result in a line break on the page. Use \r\n to create a new paragraph.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure and resource placement tags are also being changed.
  - Food and Agriculture case cards are edited separately in src/lib/content/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const foodAndAgricultureIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    'The food and agriculture sector includes the production, processing, distribution and consumption of food and agricultural products. It depends directly on natural resources such as land, water and healthy soils, while also contributing to greenhouse gas emissions, biodiversity loss and organic waste. || The food and agriculture sector contributes approximately 10% of EU greenhouse gas emissions (Source: European Environment Agency, 2025. Greenhouse gas emissions from agriculture) and accounts for around 70% of global freshwater consumption, making it central to the circular economy transition. Up to 30% of food produced globally is wasted, with much of this occurring at farm and post-harvest processing stages before reaching consumers (Source: FAO, 2011. Global food losses and food waste: Extent, causes and prevention). || Circular economy practices can help businesses reduce losses, make better use of by-products and resources, and support more sustainable and resilient food systems. Key circular economy opportunities include agroecology, precision farming, food-waste valorisation, short supply chains and agricultural biorefinery models.'
  ]
};

// 2. CASE EXAMPLES
// Add exactly three case names from src/lib/content/cases.js to `featuredCaseNames`.
// The names should match the visible company/case names in the case catalogue.
export const foodAndAgricultureCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the food and agriculture sector to find all relevant cases.',
  featuredCaseNames: [
    'Banca de Alimente Moldova',
    'Garma-Grup SRL',
    'Permaculture in Armenia'
  ]
};

// 3. Common barriers and opportunities
export const foodAndAgricultureBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Common barriers and opportunities',
  intro: 'Agricultural small-medium enterprises (SMEs) face investment, knowledge and regulatory barriers, while new markets, technologies and nutrient-recovery models are creating practical opportunities.',
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'High capital cost of precision technology and circular economy equipment.',
      source: 'European Parliament Digital Agriculture Report, 2024'
    },
    {
      text: 'Fragmented land ownership limits the scale of circular nutrient systems.',
      source: 'ScienceDirect, Classification of farmland ownership fragmentation, 2016'
    },
    {
      text: 'Knowledge gaps among small farms on circular economy practices and returns.',
      source: 'Diversification of Agriculture and Circular Economy in EU Countries, 2023'
    },
    {
      text: 'Complex regulation around organic waste, nutrient recovery and biogas.',
      source: 'EU Joint Research Centre / Wageningen University & Research, 2024'
    },
    {
      text: 'Price competition from conventional non-circular producers.',
      source: 'Circle Economy, Circular Agroecology for a Resilient Europe, 2025'
    },
    {
      text: 'Short-term subsidy structures can discourage longer-term circular economy investment.',
      source: 'IEEP, Supporting a Transition to Sustainable Farming Systems, 2024'
    }
  ],
  opportunities: [
    {
      text: 'Growing consumer demand for organic, local and sustainably certified produce.',
      source: 'IMARC Group, 2024'
    },
    {
      text: 'Biogas and biomass energy from agricultural residues create new income streams.',
      source: 'European Biogas Association Statistical Report, 2025'
    },
    {
      text: 'Precision agriculture technology can significantly reduce input costs.',
      source: 'MDPI, Sustainability, Farm-level Economic and Environmental Benefits of Precision Agriculture Technology Adoption, 2025'
    },
    {
      text: 'Nutrient recovery from manure and slurry reduces dependence on synthetic fertilisers.',
      source: 'Wageningen University & Research, 2024'
    },
    {
      text: 'Agri-food waste can become feedstock for bio-based materials and bioplastics.',
      source: 'Renewable Carbon News / Waste Framework Directive data, 2024'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Food and Agriculture sector slug to a resource's
// placements in src/lib/content/tool-catalogue.js to display it automatically.
export const foodAndAgricultureRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const foodAndAgriculture = {
  number: 'Sector 2',
  slug: 'food-and-agriculture',
  title: 'Food and Agriculture',
  description: 'This sector guide provides tools, cases and practical guidance for food and agriculture small-medium enterprises (SMEs) adopting circular economy practices.',
  image: '/images/agriculture.jpg',
  imageAlt: 'Food and Agriculture sector',
  navigation: [
    { label: 'Introduction', sectionId: foodAndAgricultureIntroSection.id },
    { label: 'Cases', sectionId: foodAndAgricultureCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: foodAndAgricultureBarriersSection.id },
    { label: 'Relevant tools', sectionId: foodAndAgricultureRelevantToolsSection.id }
  ],
  sections: [
    foodAndAgricultureIntroSection,
    foodAndAgricultureCasesSection,
    foodAndAgricultureBarriersSection,
    foodAndAgricultureRelevantToolsSection
  ]
};
