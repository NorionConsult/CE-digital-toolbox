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
    'Reporting can help businesses monitor performance, support decision-making and communicate progress to internal and external stakeholders. Feedback loops make it possible to learn from data, customers, partners, and day-to-day experience.'
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
  ]
};

/* 4. DETAILED SECTION 1 */
const choosingIndicatorsSection = {
  id: 'choosing-indicators',
  title: 'Choosing Indicators',
  resourceTag: 'monitor:choosing-indicators',
  paragraphs: [
    "The indicators used to measure circularity should be relevant, practical, and linked to the company's circular goals. The right indicators help SMEs track real progress, support decisions, and identify where improvement is needed. It is often more useful to focus on a small number of clear indicators, such as reuse rates, repair volumes, waste reduction, or product lifetime, than to collect too much data that is difficult to use."
  ],
  /*
    INDICATOR INFO BOXES:
    Edit the title, icon and item list below to change the four boxes.
    Icons use Iconify's icon-park-outline library:
    https://icon-sets.iconify.design/icon-park-outline/
  */
  baselineCards: [
    {
      title: 'Material Use',
      icon: 'recycling',
      items: [
        '% recycled content in products',
        'Raw material consumption (kg)',
        'Virgin material reduction (%)',
        'Waste generated per unit output'
      ]
    },
    {
      title: 'Product Life',
      icon: 'tool',
      items: [
        'Product average lifespan',
        'Repair & maintenance revenue',
        'Return/take-back rate',
        'Products sold refurbished vs new'
      ]
    },
    {
      title: 'Circular Revenue',
      icon: 'wallet',
      items: [
        'Revenue from circular services',
        'Cost savings from waste reduction',
        'Circular vs linear revenue ratio',
        'Customer retention in service models'
      ]
    },
    {
      title: 'Environmental',
      icon: 'earth',
      items: [
        'CO2 emissions per unit',
        'Energy from renewable sources',
        'Water consumption (litres/unit)',
        'Waste to landfill (tonnes/year)'
      ]
    }
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
    'Interpreting results is an essential part of managing a circular economy transition. For SMEs, it helps turn monitoring into practical learning by showing whether circular actions are on track, which initiatives are delivering value, and where adjustments are needed. Results should be compared against the milestones and targets set during planning, using a simple status system such as red, amber and green to make progress easy to communicate. Where targets are not being met, SMEs should look beyond the numbers and identify the underlying causes, such as resource gaps, behavioural barriers, operational challenges or dependencies on partners. Equally important is understanding what is working well, so successful approaches can be replicated and scaled. By capturing these insights and sharing them with relevant teams, leadership, customers or funders, SMEs can strengthen accountability, build trust and feed learning into the next cycle of circular improvement.'
  ],
  /*
    RESULT INTERPRETATION VISUAL:
    Replace src to change the visual. It is clickable/zoomable on the page.
  */
  inlineImage: {
    afterParagraph: 1,
    title: 'Interpreting monitoring results',
    src: '/downloads/module6/UNIDO_Digital Toolbox (EU4GREENRecoveryEast) - m6-visualisation.svg',
    alt: 'Visualisation for interpreting circular economy monitoring results',
    caption: 'A four-step framework for continuous improvement. Use monitoring results to understand progress, gaps and next improvement actions.',
    maxWidth: '680px',
    zoomable: true
  }
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
  ],
  moduleSummary,
  downloads
});
