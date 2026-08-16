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
    'The tourism sector brings together accommodation, food services, transport, attractions and other activities that support visitors and destinations. Tourism contributes almost EUR 1.8 trillion to EU GDP and supports over 23 million jobs, approximately 10% of total economic output. While it is an important source of income and employment, tourism can also place pressure on energy, water, materials and local ecosystems, while generating significant waste. Tourists consume three to four times more water per day than permanent residents, placing seasonal pressure on local infrastructure and ecosystems. || Applying circular economy practices can help tourism businesses reduce their environmental footprint, use resources more efficiently and contribute to the long-term sustainability of the destinations on which they depend.'
  ]
};

// 2. CASE EXAMPLES
// Add up to three Tourism case names from src/lib/content/cases.js when they are available.
// Leave this empty until Tourism cases have been added to the case catalogue.
export const tourismCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the tourism sector to find all relevant cases.',
  featuredCaseNames: []
};

// 3. KEY BARRIERS AND OPPORTUNITIES
export const tourismBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Tourism small-medium enterprises (SMEs) face investment, seasonality, reporting and capacity barriers, while traveller demand, certification and local circular supply chains are creating new opportunities.',
  barriers: [
    'High upfront cost of energy-efficient, water-saving and waste-reduction technology for SME hospitality operators.',
    'Seasonal fluctuations create inconsistent waste volumes, complicating infrastructure investment and supplier contracts.',
    'Greenwashing risk and a lack of standardised sustainability metrics make credible reporting difficult for small operators.',
    'Fragmented supply chains and dependence on imported goods limit the ability to source locally and reduce transport emissions.',
    'Limited management capacity and staff expertise in circular economy practices among micro and small tourism businesses.',
    'Regulatory complexity varies across EU member states, increasing the compliance burden for internationally operating small-medium enterprises (SMEs).'
  ],
  opportunities: [
    'Demand for certified circular and regenerative tourism is growing, with many global travellers seeking more sustainable options.',
    'The EU Renovation Wave and energy-efficiency directives are driving demand for sustainable hospitality refurbishment and retrofits.',
    'Eco-certification, including Green Key, Travelife and the EU Ecolabel, creates market differentiation and access to new traveller segments.',
    'Local and short food-supply chains reduce transport waste, support community economies and improve product freshness.',
    'Food-surplus platforms can turn unsold meals and avoidable waste into new revenue.',
    'Circular amenity design, refillable dispensers, reusable linen and upcycled furnishings can reduce procurement costs and waste.'
  ]
};

// 4. BEST PRACTICES
// Each object becomes one bullet-point group on the page.
export const tourismBestPracticesSection = {
  id: 'best-practices',
  title: 'Best practices',
  intro: 'Explore practical actions across energy, resources, food supply chains, certification and reporting.',
  groups: [
    {
      title: 'Energy and resources',
      items: [
        'Conduct an energy, water and waste audit and set annual reduction targets.',
        'Switch to renewable-energy sources and install smart energy-management systems.',
        'Replace single-use plastics with reusable, refillable or compostable alternatives.',
        'Implement greywater recycling and rainwater harvesting for non-potable uses.',
        'Design or refurbish guest rooms and amenities for durability and material reuse.'
      ]
    },
    {
      title: 'Food and supply chain',
      items: [
        'Source food and beverages locally and seasonally to reduce transport emissions.',
        'Partner with food-surplus redistribution platforms to monetise unsold meals.',
        'Establish supplier codes of conduct covering circular economy, labour and environmental standards.'
      ]
    },
    {
      title: 'Certification and reporting',
      items: [
        'Pursue Green Key, Travelife or EU Ecolabel certification for market differentiation.',
        'Measure and report the business carbon footprint using the Hotel Carbon Measurement Initiative.'
      ]
    }
  ]
};

// 5. RELEVANT TOOLS
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
    { label: 'Best practices', sectionId: tourismBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: tourismRelevantToolsSection.id }
  ],
  sections: [
    tourismIntroSection,
    tourismCasesSection,
    tourismBarriersSection,
    tourismBestPracticesSection,
    tourismRelevantToolsSection
  ]
};
