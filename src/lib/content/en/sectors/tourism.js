/*
  TOURISM SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure
    and resource placement tags are also being changed.
  - Tourism case cards can be added in src/lib/content/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const tourismIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    'The tourism sector brings together accommodation, food services, transport, attractions and other activities that support visitors and destinations. Tourism contributes almost EUR 1.8 trillion to EU GDP and supports over 23 million jobs, approximately 10% of total economic output (Source: European Commission, 2024. Tourism across the EU) While it is an important source of income and employment, tourism can also place pressure on energy, water, materials and local ecosystems, while generating significant waste. Tourists consume three to four times more water per day than permanent residents, placing seasonal pressure on local infrastructure and ecosystems. || Applying circular economy practices can help tourism businesses reduce their environmental footprint, use resources more efficiently and contribute to the long-term sustainability of the destinations on which they depend.'
  ]
};

// 2. CASE EXAMPLES
// Add up to three case names from src/lib/content/cases.js to `featuredCaseNames`.
// Recommended: choose one case from Armenia, one from Moldova, and one from Ukraine.
// Tourism-specific cases can be added here when they are available in the case catalogue.
export const tourismCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the tourism sector to find all relevant cases.',
  featuredCaseNames: [
    'Chystota (Cleaning Company)'
  ]
};

// 3. Common barriers and opportunities
export const tourismBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Common barriers and opportunities',
  intro: 'Tourism small-medium enterprises (SMEs) face investment, seasonality, reporting and capacity barriers, while traveller demand, certification and local circular supply chains are creating new opportunities.',
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'High upfront cost of energy-efficient, water-saving and waste-reduction technology for SME hospitality operators.',
      source: 'McGrady Clarke, Hospitality Sustainability Outlook, 2024'
    },
    {
      text: 'Seasonal fluctuations, such as changes in visitor numbers and weather conditions, creates inconsistent waste volumes, complicating infrastructure investment and supplier contracts.',
      source: 'Waste and Tourism: Drivers of Sustainable WM, 2025'
    },
    {
      text: 'Greenwashing risk and a lack of standardised sustainability metrics make credible reporting difficult for small operators.',
      source: 'Earth5R, Sustainable Tourism 20 Destinations, 2025; EU Tourism Platform, 2024'
    },
    {
      text: 'Fragmented supply chains and dependence on imported goods limit the ability to source locally and reduce transport emissions.',
      source: 'Springer, Rethinking Tourism Sustainability Certification, CE Approach, 2024'
    },
    {
      text: 'Limited management capacity and staff expertise in circular economy practices among micro and small tourism businesses.',
      source: 'Taylor & Francis Online, Accelerating SME Tourism Engagement with Climate Change, 2024'
    },
    {
      text: 'Regulatory complexity varies across EU member states, increasing the compliance burden for internationally operating small-medium enterprises (SMEs).',
      source: 'McGrady Clarke, Hospitality Sustainability Outlook, 2024'
    }
  ],
  opportunities: [
    {
      text: 'Demand for certified circular and regenerative tourism is growing, with many global travellers seeking more sustainable options.',
      source: 'Sustainable Travel Report, 2023; WEF, Future of Tourism, 2023'
    },
    {
      text: 'Eco-certification, including Green Key, Travelife and the EU Ecolabel, creates market differentiation and access to new traveller segments.',
      source: 'Frontiers, Analysis of Sustainability Certifications in Hotel Industry, 2023'
    },
    {
      text: 'Local and short food-supply chains reduce transport waste, support community economies and improve product freshness.',
      source: 'PMC, CE and Sustainable Development in Tourism, 2024'
    },
    {
      text: 'Food-surplus platforms can turn unsold meals and avoidable waste into new revenue.',
      source: 'Too Good To Go, About Us, 2025'
    },
    {
      text: 'Circular amenity design, refillable dispensers, reusable linen and upcycled furnishings can reduce procurement costs and waste.',
      source: 'Sustainable Hospitality Alliance / HCMI guidance, 2024'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Tourism sector slug to a resource's
// placements in src/lib/content/tool-catalogue.js to display it automatically.
export const tourismRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const tourism = {
  number: 'Sector 4',
  slug: 'tourism',
  title: 'Tourism',
  description: 'This sector guide provides practical guidance for tourism and hospitality small-medium enterprises (SMEs) adopting circular economy practices.',
  image: '/images/tourism.jpg',
  imageAlt: 'Tourism sector',
  navigation: [
    { label: 'Introduction', sectionId: tourismIntroSection.id },
    { label: 'Cases', sectionId: tourismCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: tourismBarriersSection.id },
    { label: 'Relevant tools', sectionId: tourismRelevantToolsSection.id }
  ],
  sections: [
    tourismIntroSection,
    tourismCasesSection,
    tourismBarriersSection,
    tourismRelevantToolsSection
  ]
};
