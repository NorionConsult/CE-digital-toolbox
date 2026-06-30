import { defineModulePage } from './_shared.js';

/*
  MODULE 1: AWARENESS
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '01',
  slug: 'awareness',
  shortName: 'Module 1',
  title: 'Awareness',
  colourClass: 'module-card-green',
  description:
    'Introduces key CE and RECP concepts, terms, and models to understand the benefits, risks, and potential of CE, even without prior knowledge.'
};

const hero = {
  intro:
    'This module introduces the core concepts behind circular economy and resource efficient cleaner production. It is intended as a starting point for users who need a shared language and overview before selecting specific tools.',
  icon: '/module-icons/icon-awareness.png',
  iconAlt: 'Awareness module icon'
};

/* 2. HERO SECTION BUTTONS*/
const sectionButtons = [
  { sectionId: 'learning-resources', label: 'Learning resources' },
  { sectionId: 'relevant-tools', label: 'Relevant tools' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Module overview',
  /*
    Edit the module overview text here.
    Each quoted line inside the brackets becomes one paragraph on the page.
  */
  paragraphs: [
    'If you are new to Circular Economy and RECP concepts, you can first and foremost familiarise yourself with the terminology and foundational principles. This section will provide you with a selection of introductory courses to get a comprehensive introduction to the key concepts.',
    'After you have familiarized yourself with the terminology and foundational principles, you can explore the practical tools and resources available to support your circular economy journey by following to the next module in this CE digital toolbox, exploring relevant sectors or accessing the tools and resources directly.',
    'The modules are designed to be flexible, allowing you to navigate through the content based on your specific needs and interests.'
  ],
  cards: [
    {
      sectionId: 'learning-resources',
      number: '1',
      title: 'Learning Resources',
      description:
        'Start with e-courses and learning materials that introduce circular economy and RECP concepts.',
      keyOutputs: [
        'Shared terminology',
        'Introductory learning pathway',
        'Better understanding of CE and RECP basics'
      ]
    },
    {
      sectionId: 'relevant-tools',
      number: '2',
      title: 'Relevant Tools',
      description:
        'Explore tools that support awareness building and help users decide where to continue next.',
      keyOutputs: [
        'Selected awareness tools',
        'Links to practical resources',
        'Starting points for the next module'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1: E-COURSES AND LEARNING RESOURCES */
/*
  LEARNING RESOURCE CARDS:
  Add more cards by copying one object inside `cards` and changing the values.
  These cards do not create separate pages. Their button opens the `url` directly.
  Each card controls one full green container: card on the left, description
  text on the right.
*/
const LearningresourcesSection = {
  id: 'learning-resources',
  title: 'E-courses and learning resources',
  paragraphs: [
    'Use this section to introduce the learning resources that can help users build a basic understanding before they continue into the more practical modules.'
  ],
  showRelevantTools: false,
  learningResources: {
    labels: {
      badge: 'Online course',
      about: 'What is this?',
      learningGoals: 'Learning goals',
      whyTakeCourse: 'Why should I take this course?'
    },
    cards: [
      {
        courseTitle: 'Course title here',
        shortDescription:
          'Add a short description of the course or learning resource here.',
        language: 'English',
        provider: 'Provider name',
        url: '#',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'Add a short explanation of what this specific course or learning resource covers.'
        ],
        learningGoals: [
          'Objective 1',
          'Objective 2',
          'Objective 3'
        ],
        whyTakeCourse: [
          'Add a short explanation of why this resource is useful and how it helps the user continue through the toolbox.'
        ]
      },
      {
        courseTitle: 'Second course title here',
        shortDescription:
          'Add another short description here. Copy this block to add more learning resources.',
        language: 'English',
        provider: 'Provider name',
        url: '#',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'Add a short explanation of what this specific course or learning resource covers.'
        ],
        learningGoals: [
          'Objective 1',
          'Objective 2',
          'Objective 3'
        ],
        whyTakeCourse: [
          'Add a short explanation of why the resource is useful and how it helps the user continue through the toolbox.'
        ]
      }
    ]
  }
};

/* 5. DETAILED SECTION 2: RELEVANT TOOLS */
/*
  RELEVANT TOOLS:
  General tool cards are edited in src/lib/content/resources.js.
  To place a tool specifically here, add:
  placements: { moduleSections: ['awareness:relevant-tools'] }
  The section also shows tools whose journey phase is Awareness.
*/
const relevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  paragraphs: [
    'Use this section to introduce tools and resources that help users build awareness before moving into diagnosis and practical circular economy action.'
  ],
  resourceTag: 'awareness:relevant-tools',
  showAllModuleTools: true
};

/* 6. MODULE SUMMARY: add this block later if the Awareness page needs a checklist. */
const moduleSummary = null;

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-1-awareness.pdf',
  toolsPdf: '/downloads/tool-catalogue.pdf'
};

export const awareness = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [LearningresourcesSection, relevantToolsSection],
  moduleSummary,
  downloads
});
