import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 5: IMPLEMENT
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '05',
  slug: 'implement',
  shortName: 'Phase 5',
  title: 'Implement',
  colourClass: 'module-card-dark',
  description:
    'Tools that support planning, ownership, milestones, partnerships and practical delivery of selected circular economy actions.'
};

const hero = {
  intro:
    'This phase supports implementation planning and delivery. It includes tools that can help users define actions, assign responsibilities, identify partners, set milestones and move selected circular solutions into practice.',
  icon: '/phase-icons/icon-implement.png',
  iconAlt: 'Implement phase icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'implementation-plan', label: 'Plan implementation' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'From strategy to action',
  paragraphs: [
    'This Implement phase focuses on how small-medium enterprises (SMEs) can put evaluated circular strategies into practice. Once circular opportunities have been screened and tested at a small scale, the next step is to turn them into concrete actions across the business. Implementation involves making operational changes, involving the right people, setting milestones, and working with partners where needed.'
  ],
  cards: [
    {
      sectionId: 'implementation-plan',
      number: '1',
      title: 'Implementation Plan & Roadmap',
      description:
        'Build a structured plan that connects your selected circular strategy to concrete actions, owners, resources, milestones and review points.',
      keyOutputs: [
        'Defined implementation actions',
        'Named owners and responsibilities',
        'Milestones and review schedule'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const implementationPlanSection = {
  id: 'implementation-plan',
  title: 'Implementation Plan & Roadmap',
  resourceTag: 'implement:implementation-plan',
  paragraphs: [
    'Implementation planning turns a selected circular strategy into a sequence of practical activities that the business can manage. At this point, the focus is no longer on choosing the idea, but on organising the work needed to make it happen.',
    "Start by defining the scope: which circular opportunity is being implemented, which parts of the business it affects, the timeframe, and what is deliberately left out for this round. Then translate the opportunity into concrete actions, separating quick wins from longer structural changes.",
    'A useful implementation roadmap combines actions, responsibilities, resources and milestones. Responsibilities clarify who leads, who supports, who signs off, and where external partners are needed. Resources cover budget, time, equipment, training and expertise. Milestones turn the plan into manageable steps, such as a process milestone, an output milestone or a review milestone, so progress can be checked and adjusted over time.',
    'The result should be a practical roadmap that your team can revisit as the work evolves: clear enough to guide action, but flexible enough to adapt as you learn.'
  ],
  /*
    IMPLEMENTATION PRINCIPLES INFO BOX:
    Edit the title, icon names and text below to change this box.
    Icons use Iconify's icon-park-outline library:
    https://icon-sets.iconify.design/icon-park-outline/
  */
  principleBox: {
    title: 'Key principles for small-medium enterprises (SMEs)',
    items: [
      {
        title: 'Start small',
        icon: 'zoom-in',
        text:
          'Pick one or two circular actions to implement first. Success builds momentum and confidence for the next step.'
      },
      {
        title: 'Involve your team',
        icon: 'personal-collection',
        text:
          'Implementation works best when the people who will carry out the actions have been part of designing them.'
      },
      {
        title: 'Be specific',
        icon: 'aiming',
        text:
          'Assign a named person, a specific date, and a measurable outcome to each action. Ambiguity is the most common reason implementation stalls.'
      },
      {
        title: 'Plan to adapt',
        icon: 'adjustment',
        text:
          'Your first implementation plan will change. Build in regular review points so you can adjust as you learn.'
      },
      {
        title: 'Use external support',
        icon: 'add-user',
        text:
          'Partners, advisors, and EU-funded programmes can provide resources, expertise, and funding small-medium enterprises (SMEs) can access.'
      }
    ]
  }
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you have a practical implementation plan, responsible owners and a workable delivery roadmap for your circular initiative.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Defined the scope of the circular implementation initiative',
    'Converted the selected strategy into concrete actions',
    'Assigned owners, responsibilities and resources',
    'Created a roadmap with milestones and review points',
    'Identified the tools, partners and support required',
    'Confirmed the team is ready to begin implementation'
  ]
};

export const implement = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [implementationPlanSection],
  phaseSummary
});
