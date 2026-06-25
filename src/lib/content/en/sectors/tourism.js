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
    'Tourism contributes almost EUR 1.8 trillion to EU GDP and supports over 23 million jobs, approximately 10% of total economic output.',
    'Europe accounts for 51% of international tourist arrivals globally, making it the world\'s most visited region.',
    'Tourists consume three to four times more water per day than permanent residents, placing seasonal pressure on local infrastructure and ecosystems.',
    'Tourism and food services generate waste streams containing approximately 37-72% organic waste, 6-40% paper and 5-15% plastic, with limited recovery systems in most destinations.',
    'In a business-as-usual scenario, tourism is projected to increase energy consumption by 154%, greenhouse-gas emissions by 131% and solid waste by 251% by 2050.',
    'SMEs make up the vast majority of European tourism businesses, accounting for approximately half the sector\'s greenhouse-gas emissions, yet face disproportionate barriers to sustainability investment.'
  ]
};

// 2. CASE EXAMPLES
// No Tourism cases were supplied in the source document. Add them in cases.js
// with sector: 'Tourism' and they will appear here automatically.
export const tourismCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'Tourism case examples have not yet been added. New cases can be created in the Cases content file and will appear here automatically.'
};

// 3. KEY BARRIERS AND OPPORTUNITIES
export const tourismBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Tourism SMEs face investment, seasonality, reporting and capacity barriers, while traveller demand, certification and local circular supply chains are creating new opportunities.',
  barriers: [
    'High upfront cost of energy-efficient, water-saving and waste-reduction technology for SME hospitality operators.',
    'Seasonal fluctuations create inconsistent waste volumes, complicating infrastructure investment and supplier contracts.',
    'Greenwashing risk and a lack of standardised sustainability metrics make credible reporting difficult for small operators.',
    'Fragmented supply chains and dependence on imported goods limit the ability to source locally and reduce transport emissions.',
    'Limited management capacity and staff expertise in circular economy practices among micro and small tourism businesses.',
    'Regulatory complexity varies across EU member states, increasing the compliance burden for internationally operating SMEs.'
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
// placements in src/lib/content/resources.js to display it automatically.
export const tourismRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: 'Tools tagged for the Tourism sector appear here automatically.'
};

// 6. NETWORK AND COLLABORATIONS
// Add a URL to `link` when the website should show a Visit website link.
export const tourismNetworkSection = {
  id: 'networks-collaborations',
  title: 'Network and collaborations',
  intro: 'These networks can support standards, certification, destination partnerships, peer learning and circular tourism action.',
  items: [
    {
      name: 'Global Sustainable Tourism Council (GSTC)',
      description: 'International body setting sustainability and circular economy standards for tourism, providing certification pathways, free tools and resources for hospitality SMEs.',
      link: ''
    },
    {
      name: 'ResCom (Regional Tourism Networks)',
      description: 'Regional resource and knowledge-sharing platforms connecting tourism SMEs with circular economy collaboration opportunities at destination and national level.',
      link: ''
    },
    {
      name: 'CELTH - Centre of Expertise Leisure',
      description: 'Dutch knowledge centre for sustainable and circular tourism transitions, producing applied research, sector toolkits and circular economy frameworks available to EU SMEs.',
      link: ''
    },
    {
      name: 'The Tourism Declares Alliance',
      description: 'Global network of tourism businesses committing to climate and circular economy action through community, peer learning, tools and public commitments.',
      link: ''
    },
    {
      name: 'Destination Management Organisations (DMOs)',
      description: 'Regional destination-management organisations increasingly coordinate circular tourism initiatives and local SME programmes, making them key implementation partners.',
      link: ''
    },
    {
      name: 'VisitDenmark and regional tourism bodies',
      description: 'National and regional tourism bodies in Denmark support circular economy transitions through green-certification pathways, funding guidance and local SME partnerships.',
      link: ''
    }
  ]
};

// SECTOR CARD, HERO AND NAVIGATION
export const tourism = {
  number: 'Sector 4',
  slug: 'tourism',
  title: 'Tourism',
  description: 'This sector package provides practical guidance for tourism and hospitality SMEs adopting circular economy practices.',
  image: '/images/tourism.jpg',
  imageAlt: 'Tourism sector',
  navigation: [
    { label: 'Introduction', sectionId: tourismIntroSection.id },
    { label: 'Cases', sectionId: tourismCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: tourismBarriersSection.id },
    { label: 'Best practices', sectionId: tourismBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: tourismRelevantToolsSection.id },
    { label: 'Networks', sectionId: tourismNetworkSection.id }
  ],
  sections: [
    tourismIntroSection,
    tourismCasesSection,
    tourismBarriersSection,
    tourismBestPracticesSection,
    tourismRelevantToolsSection,
    tourismNetworkSection
  ]
};
