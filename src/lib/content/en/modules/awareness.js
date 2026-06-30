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
  iconAlt: 'Awareness module icon',
  hideSectionNavigation: true,
  hidePathwayCards: true
};

/* 2. HERO SECTION BUTTONS
  Hidden for Module 1 for now. Add buttons here later if this page needs
  quick links in the hero again.
*/
/** @type {{ sectionId: string; label: string }[]} */
const sectionButtons = [];

/* 3. MODULE OVERVIEW
  Pathway cards are hidden for Module 1. Keep `cards` empty unless the cards
  should be shown again later.
*/
const pathwaySection = {
  title: 'Module overview',
  /*
    Edit the module overview text here.
    Each quoted line inside the brackets becomes one paragraph on the page.
  */
  paragraphs: [
    'If you are new to Circular Economy and RECP concepts, you can first and foremost familiarise yourself with the terminology and foundational principles. This section will provide you with a selection of introductory courses to get a comprehensive introduction to the key concepts.',
    'After you have familiarised yourself with the terminology and foundational principles, you can explore the practical tools and resources available to support your circular economy journey by following to the next module in this CE digital toolbox, exploring relevant sectors or accessing the tools and resources directly.',
    'The modules are designed to be flexible, allowing you to navigate through the content based on your specific needs and interests.'
  ],
  cards: []
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
  hideStepEyebrow: true,
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
        courseTitle: 'Circular Economy explained (video playlist)',
        shortDescription:
          'A short curated playlist of whiteboard-style explainer videos from the Ellen MacArthur Foundation, walking through the core idea of the circular economy and why it matters for business.',
        language: 'English',
        provider: 'Ellen MacArthur Foundation',
        url: 'https://www.ellenmacarthurfoundation.org/playlist-circular-economy-explained',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'A free, bite-sized video collection that introduces the circular economy concept including the well-known explainer narrated by Dame Ellen MacArthur herself, which uses her solo round-the-world sailing experience to illustrate the difference between a linear "take-make-waste" model and a circular one.'
        ],
        learningGoals: [
          'Understand the basic difference between a linear and a circular economy',
          'Grasp why finite resources make the current "take-make-waste" model unsustainable',
          'See real-world examples of value retention, such as remanufacturing and cascading material use, in everyday terms'
        ],
        whyTakeCourse: [
          "At only a few minutes per video, this is the fastest possible way to build a non-technical understanding of the circular economy before moving into more detailed toolbox content. It's an ideal starting point for staff who have never encountered the concept before and need a plain-language explanation."
        ]
      },
      {
        courseTitle: 'Circular Economy in Industry',
        shortDescription:
          'A ten-module e-learning course covering circular economy principles and their application across industrial value chains, developed for green-transition skills building.',
        language: 'English',
        provider: 'United Nations Industrial Development Organization (UNIDO)',
        url: 'https://habitable-cove.eu/inres/incur_res_023/',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'A structured, modular e-learning course that progresses from the economic foundations of the circular economy through to applied industrial topics: circular design, value retention strategies such as remanufacturing, reconditioning and refurbishing, recycling processes, circularity in use and consumption, the circular bioeconomy, trade and environment linkages, and the role of renewable energy in circular, low-carbon industrial systems.'
        ],
        learningGoals: [
          'Build a solid conceptual and economic foundation in circular economy principles',
          'Learn how circular design and value-retention strategies, such as remanufacturing, refurbishing and recycling, apply across industrial value chains',
          'Understand how circularity connects to broader systems such as the bioeconomy, trade, and renewable energy'
        ],
        whyTakeCourse: [
          'This course goes well beyond a basic introduction, offering a comprehensive, progressive curriculum that is directly relevant to industrial and manufacturing SMEs. Because it is modular, learners can work through it section by section and revisit specific topics, such as remanufacturing or circular design, as they apply concepts to their own business. It is a strong next step once the basic vocabulary from an introductory resource has been established.'
        ]
      },
      {
        courseTitle: 'SWITCH circular economy journey',
        shortDescription:
          'A circular economy programme which aims to support micro-enterprises and SMEs with specific tracks that walk businesses through circular economy practices via games and modules.',
        language: 'English',
        provider: 'SWITCH to Circular Economy Value Chains',
        url: 'https://switch.circle-economy.com/',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'An interactive, gamified online platform built specifically for MSME suppliers in developing countries who are part of global value chains. Users pick a sector track, such as Textiles, Plastics & Packaging, or Electronics & ICT, then work through a series of interactive games and modules. Each module presents sector-relevant circular economy content followed by interactive questions, covering topics like recycling barriers and traceability. A free login is required, which enables personalised progress tracking across tracks.'
        ],
        learningGoals: [
          "Identify circular economy opportunities and challenges specific to your sector's value chain, such as textiles, plastics, or electronics",
          'Understand practical barriers to recycling and how to address them',
          'Learn the basics of material traceability for transparency in a circular supply chain'
        ],
        whyTakeCourse: [
          'Unlike generic introductory resources, this tool is purpose-built for SME suppliers operating within larger value chains, with content tailored to specific sectors rather than circular economy in the abstract. Its game-based, interactive format makes it a practical, hands-on complement to more conceptual resources, well suited for SMEs ready to apply circular thinking directly to their own sector and supply chain role.'
        ]
      }
    ]
  }
};

/* 5. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that you have a basic understanding of the key circular economy principles.',
    'To continue to the next module, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable module, sector package, or explore the tools page.'
  ],
  checklist: [
    'You understand that waste is a design flaw, not an inevitability',
    'You understand that products and materials should be kept in use for as long as possible',
    'You understand that raw materials are finite',
    'You understand that circularity means regenerating natural systems, not just reducing harm',
    'You understand that some strategies retain more value than others',
    'You understand that circularity is a systems-wide shift, not just recycling'
  ]
};

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
  detailSections: [LearningresourcesSection],
  moduleSummary,
  downloads
});
