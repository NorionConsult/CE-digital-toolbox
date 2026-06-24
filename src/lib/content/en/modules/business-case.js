import { defineModulePage } from './_shared.js';

/*
  MODULE 4: BUSINESS CASE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '04',
  slug: 'business-case',
  shortName: 'Module 4',
  title: 'Business Case',
  colourClass: 'module-card-blue',
  description:
    'Brings tools which support the transformation from linear to circular business models and the identification of risks, relevant barriers, and potential gains.'
};

const hero = {
  intro:
    'This module focuses on turning circular economy opportunities into a clearer business case. It includes tools that help users consider feasibility, benefits, risks, barriers and potential value creation.',
  icon: '/module-icons/icon-business%20case.png',
  iconAlt: 'Business Case module icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'circular-business-models', label: 'Explore models' },
  { sectionId: 'quick-scan-tool', label: 'Run quick scan' },
  { sectionId: 'transition-planning', label: 'Plan transition' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Building your circular business case',
  paragraphs: [
    'Before choosing a direction, you need to know which circular opportunities make sense for your business financially, operationally and strategically. This module helps SMEs identify the right circular business model, build a compelling business case and understand the path forward.'
  ],
  cards: [
    {
      sectionId: 'circular-business-models',
      number: '1',
      title: 'Circular Business Models',
      description:
        'Explore the range of circular business models and identify which best fits your sector and capabilities.',
      keyOutputs: ['Circular business model typology overview', 'Best-fit model shortlist']
    },
    {
      sectionId: 'quick-scan-tool',
      number: '2',
      title: 'Quick Scan Tool',
      description:
        'Use a structured rapid assessment to evaluate circular business model options and their feasibility.',
      keyOutputs: ['Scored circular business model options', 'Priority model for development']
    },
    {
      sectionId: 'transition-planning',
      number: '3',
      title: 'Transition Planning',
      description:
        'Understand the barriers, enablers and steps required to move from your current business model to a circular one.',
      keyOutputs: ['Barrier and SWOT analysis', 'Phased transition roadmap']
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const businessModelsSection = {
  id: 'circular-business-models',
  title: 'Circular Business Models',
  resourceTag: 'business-case:business-models',
  paragraphs: [
    'Circular business models describe how a company can create, deliver and retain value while reducing resource use and waste.',
    'Use this section to explain the model types, provide examples and help users identify which models align with their selected circular opportunities.'
  ]
};

/* 5. DETAILED SECTION 2 */
const quickScanSection = {
  id: 'quick-scan-tool',
  title: 'Quick Scan Tool',
  resourceTag: 'business-case:quick-scan',
  paragraphs: [
    'A quick scan provides an initial comparison of shortlisted business model options before more detailed planning begins.',
    'Use this space to describe the assessment questions, scoring approach and how users should discuss and document their results.'
  ]
};

/* 6. DETAILED SECTION 3 */
const transitionPlanningSection = {
  id: 'transition-planning',
  title: 'Transition Planning',
  resourceTag: 'business-case:transition-planning',
  paragraphs: [
    'A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them.',
    'Use this section to describe barriers, enabling conditions, risks, responsibilities and the phases of the proposed transition.'
  ]
};

/* 7. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that your selected circular opportunity has a clear business model and transition rationale.',
    'Continue to the Implement module when the preferred model, risks and transition steps are sufficiently understood.'
  ],
  checklist: [
    'Reviewed the relevant circular business model types',
    'Shortlisted the models that best fit the business',
    'Completed a rapid feasibility assessment',
    'Selected a priority model for further development',
    'Identified key barriers, risks and enabling conditions',
    'Prepared a phased transition roadmap'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-4-business-case.pdf',
  cataloguePdf: '/downloads/tool-catalogue.pdf'
};

export const businessCase = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [businessModelsSection, quickScanSection, transitionPlanningSection],
  moduleSummary,
  downloads
});
