/*
  Library records used by the filtering library page.
  Replace the filler records with the final PDF resources.

  Taxonomy fields used for filtering:
  - journeyPhase: Awareness, Diagnose, Options, Business Case, Implement, Monitor
  - year: publication or update year
  - language: document language
  - provider: source organisation or provider
*/
export const resources = [
  {
    id: 'resource-001',
    title: 'Circular economy awareness checklist',
    description: 'Placeholder PDF for an introductory checklist supporting basic CE awareness and terminology.',
    journeyPhase: 'Awareness',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    file: '/downloads/library/awareness-checklist.pdf'
  },
  {
    id: 'resource-002',
    title: 'RECP introduction guide',
    description: 'Placeholder PDF for a short guide introducing resource efficient and cleaner production concepts.',
    journeyPhase: 'Awareness',
    year: '2025',
    language: 'English',
    provider: 'UNIDO',
    file: '/downloads/library/recp-introduction-guide.pdf'
  },
  {
    id: 'resource-003',
    title: 'Circular maturity self-assessment',
    description: 'Placeholder PDF for a simple diagnostic tool assessing circular economy maturity in SMEs.',
    journeyPhase: 'Diagnose',
    year: '2026',
    language: 'English',
    provider: 'EU4Green Recovery East',
    file: '/downloads/library/circular-maturity-self-assessment.pdf'
  },
  {
    id: 'resource-004',
    title: 'Hotspot mapping worksheet',
    description: 'Placeholder PDF for identifying resource, waste and emission hotspots across operations.',
    journeyPhase: 'Diagnose',
    year: '2024',
    language: 'Russian',
    provider: 'Norion',
    file: '/downloads/library/hotspot-mapping-worksheet.pdf'
  },
  {
    id: 'resource-005',
    title: 'Circular options ideation canvas',
    description: 'Placeholder PDF for generating, clustering and prioritising possible circular economy strategies.',
    journeyPhase: 'Options',
    year: '2026',
    language: 'English',
    provider: 'Norion',
    file: '/downloads/library/circular-options-ideation-canvas.pdf'
  },
  {
    id: 'resource-006',
    title: 'Design for circularity worksheet',
    description: 'Placeholder PDF for reviewing design choices and identifying opportunities for reuse, repair and recycling.',
    journeyPhase: 'Options',
    year: '2025',
    language: 'Ukrainian',
    provider: 'EU4Green Recovery East',
    file: '/downloads/library/design-for-circularity-worksheet.pdf'
  },
  {
    id: 'resource-007',
    title: 'Circular business case template',
    description: 'Placeholder PDF for comparing costs, risks, benefits and expected value of circular economy options.',
    journeyPhase: 'Business Case',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    file: '/downloads/library/circular-business-case-template.pdf'
  },
  {
    id: 'resource-008',
    title: 'Implementation planning template',
    description: 'Placeholder PDF for planning partners, milestones, activities and responsibilities for implementation.',
    journeyPhase: 'Implement',
    year: '2025',
    language: 'Georgian',
    provider: 'Norion',
    file: '/downloads/library/implementation-planning-template.pdf'
  },
  {
    id: 'resource-009',
    title: 'Pilot learning log',
    description: 'Placeholder PDF for capturing observations, challenges and learning during pilot activities.',
    journeyPhase: 'Implement',
    year: '2024',
    language: 'English',
    provider: 'EU4Green Recovery East',
    file: '/downloads/library/pilot-learning-log.pdf'
  },
  {
    id: 'resource-010',
    title: 'Monitoring indicators overview',
    description: 'Placeholder PDF for selecting and documenting indicators for circular economy monitoring.',
    journeyPhase: 'Monitor',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    file: '/downloads/library/monitoring-indicators-overview.pdf'
  },
  {
    id: 'resource-011',
    title: 'Progress review template',
    description: 'Placeholder PDF for reviewing results after implementation and deciding whether to adjust, scale or repeat.',
    journeyPhase: 'Monitor',
    year: '2025',
    language: 'Armenian',
    provider: 'Norion',
    file: '/downloads/library/progress-review-template.pdf'
  },
  {
    id: 'resource-012',
    title: 'Tool catalogue master file',
    description: 'Placeholder PDF for the full digital toolbox catalogue across modules and sectors.',
    journeyPhase: 'Monitor',
    year: '2026',
    language: 'English',
    provider: 'UNIDO',
    file: '/downloads/tool-catalogue.pdf'
  }
];

/*
  Utility arrays for the filter drop-downs.
  They are derived from the resource list to avoid maintaining filter values twice.
*/
export const journeyPhases = [...new Set(resources.map((resource) => resource.journeyPhase))];
export const years = [...new Set(resources.map((resource) => resource.year))].sort((a, b) => b.localeCompare(a));
export const languages = [...new Set(resources.map((resource) => resource.language))].sort();
export const providers = [...new Set(resources.map((resource) => resource.provider))].sort();
