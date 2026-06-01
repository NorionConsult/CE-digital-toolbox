/*
  Catalogue/resource records.
  To add a resource, copy one full block, change the slug and replace the text.

  Taxonomy fields used for filtering and module matching:
  - journeyPhase: Awareness, Diagnose, Options, Business Case, Implement, Monitor
  - sector: Cross-sector, Construction, Food, Textiles, Tourism, etc.
  - year: publication or update year
  - language: document language
  - provider: source organisation or provider
*/
const placeholderDetails = {
  timeRequired: '30-45 minutes.',
  peopleNeeded: 'Ideally 1-3 people with relevant operational or management knowledge.',
  preparationNeeded: 'Low. Review current practices, available data and priorities before using the tool.',
  output: 'A structured overview, worksheet or recommendation set that can support next steps.',
  bestUse: 'Use during planning, internal discussion, prioritisation or follow-up work.',
  toolLink: 'https://example.com'
};

export const resources = [
  {
    id: 'resource-001',
    cardNumber: 'Tool card #1',
    slug: 'circular-economy-awareness-checklist',
    title: 'Circular economy awareness checklist',
    description: 'Introductory checklist supporting basic CE awareness and terminology.',
    about:
      'This resource helps users build a shared understanding of circular economy concepts, common terminology and practical starting points. It is intended for teams that need a simple entry point before selecting more detailed tools.',
    journeyPhase: 'Awareness',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    ...placeholderDetails
  },
  {
    id: 'resource-002',
    cardNumber: 'Tool card #2',
    slug: 'recp-introduction-guide',
    title: 'RECP introduction guide',
    description: 'Short guide introducing resource efficient and cleaner production concepts.',
    about:
      'This resource introduces resource efficient and cleaner production principles and explains how they relate to circular economy work. It can be used to align teams before more detailed diagnosis or option generation.',
    journeyPhase: 'Awareness',
    sector: 'Cross-sector',
    year: '2025',
    language: 'English',
    provider: 'UNIDO',
    ...placeholderDetails
  },
  {
    id: 'resource-003',
    cardNumber: 'Tool card #3',
    slug: 'circular-maturity-self-assessment',
    title: 'Circular maturity self-assessment',
    description: 'Diagnostic tool assessing circular economy maturity in SMEs.',
    about:
      'This resource supports an SME in assessing its circular economy maturity level. It helps identify strengths, gaps and priority actions that can inform a more focused circular transition strategy.',
    journeyPhase: 'Diagnose',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'EU4Green Recovery East',
    ...placeholderDetails
  },
  {
    id: 'resource-004',
    cardNumber: 'Tool card #4',
    slug: 'hotspot-mapping-worksheet',
    title: 'Hotspot mapping worksheet',
    description: 'Worksheet for identifying resource, waste and emission hotspots across operations.',
    about:
      'This resource helps users map operational hotspots and identify where circular economy or RECP actions could create the most value. It is useful when teams need to move from broad ambition to specific improvement areas.',
    journeyPhase: 'Diagnose',
    sector: 'Cross-sector',
    year: '2024',
    language: 'Russian',
    provider: 'Norion',
    ...placeholderDetails
  },
  {
    id: 'resource-005',
    cardNumber: 'Tool card #5',
    slug: 'circular-options-ideation-canvas',
    title: 'Circular options ideation canvas',
    description: 'Canvas for generating, clustering and prioritising possible circular economy strategies.',
    about:
      'This resource provides a structured canvas for generating and comparing circular economy options. It can support workshops, team discussions and early prioritisation of potential solutions.',
    journeyPhase: 'Options',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'Norion',
    ...placeholderDetails
  },
  {
    id: 'resource-006',
    cardNumber: 'Tool card #6',
    slug: 'design-for-circularity-worksheet',
    title: 'Design for circularity worksheet',
    description: 'Worksheet for reviewing design choices and opportunities for reuse, repair and recycling.',
    about:
      'This resource helps teams examine product, service or process design choices through a circularity lens. It is useful for identifying opportunities linked to durability, reuse, repair, recycling and lower-impact materials.',
    journeyPhase: 'Options',
    sector: 'Cross-sector',
    year: '2025',
    language: 'Ukrainian',
    provider: 'EU4Green Recovery East',
    ...placeholderDetails
  },
  {
    id: 'resource-007',
    cardNumber: 'Tool card #7',
    slug: 'circular-business-case-template',
    title: 'Circular business case template',
    description: 'Template for comparing costs, risks, benefits and expected value of circular options.',
    about:
      'This resource helps users turn selected circular economy options into a clearer business case. It supports comparison of expected benefits, risks, costs, barriers and value creation potential.',
    journeyPhase: 'Business Case',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    ...placeholderDetails
  },
  {
    id: 'resource-008',
    cardNumber: 'Tool card #8',
    slug: 'implementation-planning-template',
    title: 'Implementation planning template',
    description: 'Template for planning partners, milestones, activities and responsibilities.',
    about:
      'This resource supports practical implementation planning once a circular option has been selected. It helps clarify actions, partners, responsibilities, milestones and follow-up needs.',
    journeyPhase: 'Implement',
    sector: 'Cross-sector',
    year: '2025',
    language: 'Georgian',
    provider: 'Norion',
    ...placeholderDetails
  },
  {
    id: 'resource-009',
    cardNumber: 'Tool card #9',
    slug: 'pilot-learning-log',
    title: 'Pilot learning log',
    description: 'Log for capturing observations, challenges and learning during pilot activities.',
    about:
      'This resource helps users document lessons from pilots and tests. It can be used to track assumptions, observations, barriers and decisions before scaling or adjusting an implementation effort.',
    journeyPhase: 'Implement',
    sector: 'Cross-sector',
    year: '2024',
    language: 'English',
    provider: 'EU4Green Recovery East',
    ...placeholderDetails
  },
  {
    id: 'resource-010',
    cardNumber: 'Tool card #10',
    slug: 'monitoring-indicators-overview',
    title: 'Monitoring indicators overview',
    description: 'Overview for selecting and documenting circular economy monitoring indicators.',
    about:
      'This resource helps teams select monitoring indicators and document how progress will be measured. It is useful for turning implementation learning into comparable evidence over time.',
    journeyPhase: 'Monitor',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    ...placeholderDetails
  },
  {
    id: 'resource-011',
    cardNumber: 'Tool card #11',
    slug: 'progress-review-template',
    title: 'Progress review template',
    description: 'Template for reviewing results after implementation and deciding whether to adjust or scale.',
    about:
      'This resource supports a structured review after implementation. It can help teams compare intended and actual outcomes, decide what to change and identify whether a solution is ready to scale.',
    journeyPhase: 'Monitor',
    sector: 'Cross-sector',
    year: '2025',
    language: 'Armenian',
    provider: 'Norion',
    ...placeholderDetails
  },
  {
    id: 'resource-012',
    cardNumber: 'Tool card #12',
    slug: 'tool-catalogue-master-file',
    title: 'Tool catalogue master file',
    description: 'Full digital toolbox catalogue across modules and sectors.',
    about:
      'This resource provides a broader catalogue view across the digital toolbox. It can be used as a reference when users need to compare tools across phases, sectors or providers.',
    journeyPhase: 'Monitor',
    sector: 'Cross-sector',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    ...placeholderDetails
  },
  {
    id: 'resource-013',
    cardNumber: 'Tool card #13',
    slug: 'tool-catalogue-template',
    title: 'Tool catalogue template',
    description: 'Template for creating and maintaining the digital toolbox catalogue.',
    about:
      'This resource provides a broader catalogue view across the digital toolbox. It can be used as a reference when users need to compare tools across phases, sectors or providers.',
    journeyPhase: 'Monitor',
    sector: 'Food',
    year: '2026',
    language: 'English',
    provider: 'New Provider',
    ...placeholderDetails
  }
];

/*
  Utility arrays for the filter drop-downs.
  They are derived from the resource list to avoid maintaining filter values twice.
*/
export const journeyPhases = [...new Set(resources.map((resource) => resource.journeyPhase))];
export const sectors = [...new Set(resources.map((resource) => resource.sector))].sort();
export const years = [...new Set(resources.map((resource) => resource.year))].sort((a, b) => b.localeCompare(a));
export const languages = [...new Set(resources.map((resource) => resource.language))].sort();
export const providers = [...new Set(resources.map((resource) => resource.provider))].sort();
