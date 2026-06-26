import { defineModulePage } from './_shared.js';

/*
  MODULE 6: MONITOR
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '06',
  slug: 'monitor',
  shortName: 'Module 6',
  title: 'Monitor',
  colourClass: 'module-card-outline',
  description:
    'Selected tools for ongoing monitoring of solutions, including data gathering, selection of relevant indicators, and re-diagnosis after implementation.'
};

const hero = {
  intro:
    'This module helps users track progress and learn from implementation. It includes tools for monitoring outcomes, selecting indicators and revisiting the baseline after circular economy actions have been tested.',
  icon: '/module-icons/icon-monitor.png',
  iconAlt: 'Monitor module icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'choosing-indicators', label: 'Choose indicators' },
  { sectionId: 'measuring-success', label: 'Measure success' },
  { sectionId: 'interpreting-results', label: 'Interpret results' },
  { sectionId: 'continuous-improvement', label: 'Improve continuously' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Monitoring',
  paragraphs: [
    'To improve circularity in practice, SMEs need to track progress and learn from results over time. This module focuses on how to report on circular activities in a simple and useful way, and how to use feedback to identify what should be improved.',
    'Reporting can help businesses monitor performance, support decision-making and communicate progress to internal and external stakeholders.'
  ],
  cards: [
    {
      sectionId: 'choosing-indicators',
      number: '1',
      title: 'Choosing Indicators',
      description:
        'Select relevant and practical metrics that track your specific circular actions and connect directly to your goals.',
      keyOutputs: ['Defined performance indicators', 'Indicator definitions and owners', 'Measurement priorities']
    },
    {
      sectionId: 'measuring-success',
      number: '2',
      title: 'Measuring Success',
      description:
        'Use tools and frameworks to collect and track performance data in a way that is manageable for an SME.',
      keyOutputs: ['Data collection plan', 'Established baseline and targets', 'Simple performance dashboard']
    },
    {
      sectionId: 'interpreting-results',
      number: '3',
      title: 'Interpreting Results',
      description:
        'Understand what your data shows, what is working, what is not and where improvement efforts should be focused.',
      keyOutputs: ['Performance review', 'Identified successes and gaps', 'Prioritised improvement areas']
    },
    {
      sectionId: 'continuous-improvement',
      number: '4',
      title: 'Continuous Improvement',
      description:
        'Use insights from monitoring to strengthen circular practices, adjust plans and build on what works.',
      keyOutputs: ['Agreed improvement actions', 'Updated targets and plans', 'Documented learning and feedback']
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const choosingIndicatorsSection = {
  id: 'choosing-indicators',
  title: 'Choosing Indicators',
  resourceTag: 'monitor:choosing-indicators',
  paragraphs: [
    'Useful indicators connect circular economy ambitions with observable changes in materials, operations, value creation and environmental performance.',
    'Use this section to explain how indicators are selected, defined and assigned to responsible people.'
  ]
};

/* 5. DETAILED SECTION 2 */
const measuringSuccessSection = {
  id: 'measuring-success',
  title: 'Measuring Success',
  resourceTag: 'monitor:measuring-success',
  paragraphs: [
    'A practical measurement approach defines what data is needed, where it comes from, how often it is collected and who is responsible.',
    'Use this space to describe data sources, baselines, targets, reporting frequency and suitable tools.'
  ]
};

/* 6. DETAILED SECTION 3 */
const interpretingResultsSection = {
  id: 'interpreting-results',
  title: 'Interpreting Results',
  resourceTag: 'monitor:interpreting-results',
  paragraphs: [
    'Monitoring creates value when results are discussed, compared with expectations and converted into useful decisions.',
    'Use this section to explain how teams should review performance, identify causes and communicate findings.'
  ]
};

/* 7. DETAILED SECTION 4 */
const continuousImprovementSection = {
  id: 'continuous-improvement',
  title: 'Continuous Improvement',
  resourceTag: 'monitor:continuous-improvement',
  paragraphs: [
    'Continuous improvement closes the loop between implementation, measurement and the next round of decisions.',
    'Use this section to describe how results, stakeholder feedback and operational learning should update future actions.'
  ]
};

/* 8. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that the business can measure circular progress and turn monitoring results into practical improvements.',
    'Monitoring is an ongoing process. Revisit the Diagnose module when a new baseline or a broader reassessment is needed.'
  ],
  checklist: [
    'Selected indicators that connect directly to circular goals',
    'Defined responsibilities and data sources for each indicator',
    'Established baselines, targets and reporting intervals',
    'Reviewed performance and identified important gaps',
    'Agreed improvement actions based on the results',
    'Created a repeatable monitoring and feedback process'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-6-monitor.pdf',
  toolsPdf: '/downloads/tool-catalogue.pdf'
};

export const monitor = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [
    choosingIndicatorsSection,
    measuringSuccessSection,
    interpretingResultsSection,
    continuousImprovementSection
  ],
  moduleSummary,
  downloads
});
