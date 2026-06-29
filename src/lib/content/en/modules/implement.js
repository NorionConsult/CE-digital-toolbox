import { defineModulePage } from './_shared.js';

/*
  MODULE 5: IMPLEMENT
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '05',
  slug: 'implement',
  shortName: 'Module 5',
  title: 'Implement',
  colourClass: 'module-card-dark',
  description:
    'Tools that support the identification of key value chain partnerships, circular solutions or practices to test, and help move ideas into the testing phase.'
};

const hero = {
  intro:
    'This module supports implementation planning and testing. It includes tools that can help users identify partners, define actions, prepare pilots and move selected circular solutions into practice.',
  icon: '/module-icons/icon-implement.png',
  iconAlt: 'Implement module icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'implementation-plan', label: 'Plan implementation' },
  { sectionId: 'roadmap-and-milestones', label: 'Build roadmap' },
  { sectionId: 'tools-and-support', label: 'Find support' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'From strategy to action',
  paragraphs: [
    'This Implement module focuses on how SMEs can put circular strategies into practice. Once circular opportunities and priorities have been identified, the next step is to turn them into concrete actions across the business. Implementation involves testing ideas, making operational changes, involving the right people, and working with partners where needed. For SMEs, this often means taking a step-by-step approach that fits available resources and business needs.'
  ],
  cards: [
    {
      sectionId: 'implementation-plan',
      number: '1',
      title: 'Implementation Plan',
      description:
        'Build a structured implementation plan that connects your shortlisted circular strategies to concrete actions, owners and timelines.',
      keyOutputs: ['Defined implementation actions', 'Named owners and responsibilities', 'Initial timeline']
    },
    {
      sectionId: 'roadmap-and-milestones',
      number: '2',
      title: 'Roadmap & Milestones',
      description:
        'Turn your plan into a visual roadmap with clear milestones, making it easier to organise actions, track progress and stay focused.',
      keyOutputs: ['Visual implementation roadmap', 'Agreed milestones', 'Progress review schedule']
    },
    {
      sectionId: 'tools-and-support',
      number: '3',
      title: 'Tools & Support',
      description:
        'Explore practical tools for planning, roadmapping and milestone-setting that are proven to work for SMEs.',
      keyOutputs: ['Selected implementation tools', 'Identified support needs', 'Partner and stakeholder overview']
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const implementationPlanSection = {
  id: 'implementation-plan',
  title: 'Implementation Plan',
  resourceTag: 'implement:implementation-plan',
  paragraphs: [
    'Implementation planning turns a selected circular strategy into a sequence of practical activities that the business can manage.',
    'Use this section to describe scope, actions, responsibilities, required resources, dependencies and expected results.'
  ]
};

/* 5. DETAILED SECTION 2 */
const roadmapMilestonesSection = {
  id: 'roadmap-and-milestones',
  title: 'Roadmap & Milestones',
  resourceTag: 'implement:roadmap-milestones',
  paragraphs: [
    'A roadmap helps teams see how individual actions fit together over time and where important decisions or dependencies occur.',
    'Use this space to explain the roadmap format, milestone-setting process and how progress reviews should be organised.'
  ]
};

/* 6. DETAILED SECTION 3 */
const toolsSupportSection = {
  id: 'tools-and-support',
  title: 'Tools & Support',
  resourceTag: 'implement:tools-support',
  paragraphs: [
    'Implementation often depends on the right combination of internal capabilities, external expertise, partners and practical tools.',
    'Use this section to introduce supporting resources and explain how users can identify the assistance needed for successful delivery.'
  ]
};

/* 7. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that the circular initiative has a practical plan, responsible owners and a workable delivery roadmap.',
    'Continue to the Monitor module to define indicators, measure results and improve the initiative over time.'
  ],
  checklist: [
    'Defined the scope of the circular implementation initiative',
    'Converted the selected strategy into concrete actions',
    'Assigned owners, responsibilities and resources',
    'Created a roadmap with milestones and review points',
    'Identified the tools, partners and support required',
    'Confirmed the team is ready to begin and track implementation'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-5-implement.pdf',
  toolsPdf: '/downloads/tool-catalogue.pdf'
};

export const implement = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [implementationPlanSection, roadmapMilestonesSection, toolsSupportSection],
  moduleSummary,
  downloads
});
