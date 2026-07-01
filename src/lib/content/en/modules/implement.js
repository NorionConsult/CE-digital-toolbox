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
  { sectionId: 'test-and-pilot', label: 'Run your test' }
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
      sectionId: 'test-and-pilot',
      number: '3',
      title: 'Test & Pilot',
      description:
        'Run a small-scale, time-bounded test of your circular strategy before committing to full implementation, using structured tools to design the experiment, map the material flows, and measure what works.',
      keyOutputs: ['Test results', 'Pilot feedback']
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const implementationPlanSection = {
  id: 'implementation-plan',
  title: 'Implementation Plan',
  resourceTag: 'implement:implementation-plan',
  paragraphs: [
    "Implementation planning turns a selected circular strategy into a sequence of practical activities that the business can manage.",
    "Scope defines what the plan covers. Usually the 1-3 prioritised circular opportunities, which parts of the business they affect, the timeframe, and what's deliberately left out of scope for this round. Actions are the concrete, sequenced steps needed to move each solution from idea to reality, separating quick wins from longer structural changes.",
     "Responsibilities assign clear ownership of each action who leads, who supports, who signs off, and where external partners are needed. Required resources cover the budget, time, equipment, training, and expertise needed to execute your plan, including any funding gaps that need to be addressed. Dependencies will show what each action relies on before it can succeed, helping to show  bottlenecks and inform in what order you should impliment your circular actions. Expected results are the measurable environmental, economic, or operational outcomes you expect to see once actions are complete, tied to the KPI Canvas. In practice, the canvas lays these out as a simple grid per opportunity, so your team can see how each piece connects and revisit it as the plan evolves."
  ],
  /*
    IMPLEMENTATION PRINCIPLES INFO BOX:
    Edit the title, icon names and text below to change this box.
    Icons use Iconify's icon-park-outline library:
    https://icon-sets.iconify.design/icon-park-outline/
  */
  principleBox: {
    title: 'Key principles for SMEs',
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
          'Partners, advisors, and EU-funded programmes can provide resources, expertise, and funding SMEs can access.'
      }
    ]
  }
};

/* 5. DETAILED SECTION 2 */
const roadmapMilestonesSection = {
  id: 'roadmap-and-milestones',
  title: 'Roadmap & Milestones',
  resourceTag: 'implement:roadmap-milestones',
  paragraphs: [
    "Setting milestones helps yous turn circular strategies into manageable steps. Instead of treating implementation as one large change, milestones make it easier to organise actions, track progress, and stay focused on priorities. Milestones also help businesses identify what needs to happen first, who is responsible, and when progress should be reviewed. This makes implementation more practical and allows adjustments to be made if challenges arise. By working with clear milestones, you can keep momentum, measure progress over time, and move towards circular goals in a more structured way.",
    "Process milestone – A key step in how you work e.g. ‘Suplier audit completed’",
    "Output milestone – A deliverable produced e.g. ‘Takeback scheme launched’",
    "Review milestone – A checkpoint for learning e.g. ‘Month 3 progress review’"
  ]
};

/* 6. DETAILED SECTION 3 */
const testPilotSection = {
  id: 'test-and-pilot',
  title: 'Test & Pilot',
  resourceTag: 'implement:test-and-pilot',
  paragraphs: [
    'Before you can test a circular strategy in the real world, you need to be able to see it clearly and, so do the partners, suppliers, and colleagues who will need to make it work alongside you. That is where these two tools come in, and they work best used together',
    'Start with the **Circular Loop Designer**. Use it to map out the material flows your pilot strategy depends on: where inputs come from, how products move through use, and what happens to materials at end of life. The colour-coded arrows help you distinguish what already exists (green), what is traditional and needs to change (red), and what still needs to be built (blue). This is not just a drawing exercise, it is a way of surfacing the gaps, dependencies, and missing partners in your circular model before you commit time and money to testing it. A loop that looks simple in a strategy document often reveals significant complexity once you try to map the actual actors and flows. Better to find that out at the drawing stage than halfway through a pilot.'
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
  detailSections: [implementationPlanSection, roadmapMilestonesSection, testPilotSection],
  moduleSummary,
  downloads
});
