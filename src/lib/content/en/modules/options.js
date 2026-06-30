import { defineModulePage } from './_shared.js';

/*
  MODULE 3: OPTIONS
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '03',
  slug: 'options',
  shortName: 'Module 3',
  title: 'Options',
  colourClass: 'module-card-yellow',
  description:
    'Offers tools to support innovation and design processes, review practices, and identify relevant strategies to address diagnosed hotspots.'
};

const hero = {
  intro:
    'This module supports the identification and comparison of possible circular economy options. It can be used to explore strategies, generate ideas and move from diagnosis to practical opportunities.',
  icon: '/module-icons/icon-options.png',
  iconAlt: 'Options module icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'explore-ce-strategies', label: 'Design principles' },
  { sectionId: 'identify-your-options', label: 'Identify options' },
  { sectionId: 'assess-and-prioritise', label: 'Redesign process' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'What strategy is best for you?',
  paragraphs: [
    'The Options module bridges diagnosis with decision-making. Based on what you have learned about your business, you will explore which circular strategies are out there and how to redesign your products for the circular economy.'
  ],
  cards: [
    {
      sectionId: 'explore-ce-strategies',
      number: '1',
      title: 'Understand design principles',
      description:
        'Explore the core DfX strategies: Design for Longevity, Repairability, Disassembly, and Recyclability,  and how they apply to your products.',
      keyOutputs: [
        'A clear understanding of the design for X principles',
        'Gain insight of how to apply these strategies to your SME',
        'An awareness of the regulation surrounding these principles'
      ]
    },
    {
      sectionId: 'identify-your-options',
      number: '2',
      title: 'Identify Your Options',
      description:
        'Use structured tools to map which strategies are feasible and relevant for your specific business, sector and supply chain.',
      keyOutputs: [
        'A shared visual map of relevant circular strategies',
        'A clear picture of current circular activities',
        'A long-list of feasible options for your business'
      ]
    },
    {
      sectionId: 'assess-and-prioritise',
      number: '3',
      title: 'Redesigning for Circular value',
      description:
        'Apply circular design strategies to generate concrete product or process improvements your team can take forward into a business case.',
      keyOutputs: [
        'Understand the redesign process',
        'Begin your redesign journey with the two tools',
        'Notes on what needs further testing'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const exploreStrategiesSection = {
  id: 'explore-ce-strategies',
  title: 'Understand Design Principles',
  resourceTag: 'options:explore-strategies',
  paragraphs: [
    'Circular economy strategies provide different ways to preserve value, reduce waste and keep products, components and materials in use for longer. For this end, there are different models and frameworks.',
    "One of these are the DfX framework, which helps teams translate circular economy ambition into design decisions. DfX stand for 'Design for X' where the X stands for Longevity, Repairability, Disassembly, Recyclability. These four aspects are typically the most actionable for SME teams working with circular design of products. The EU regulation, particularly the ESPR, Right to Repair, and packaging regulations, are based and align with these design principles. This means the design choices of companies will soon affect market access. The visualisation below describe these four design strategies that keep products and materials in use longer and can be applied at different scales and degrees."
  ],
  /*
    DFX FRAMEWORK INFO BOX:
    Edit the cards below to change the text, icons or source note.
    Icons use Iconify's icon-park-outline library:
    https://icon-sets.iconify.design/icon-park-outline/
  */
  m3DfxFramework: {
    title: 'The DfX Framework',
    intro: 'The DfX Framework',
    source:
      'Source: Mesa, Jaime A. (2023). Design for circularity and durability: an integrated approach from DfX guidelines. Research in Engineering Design. 34, 3. 10.1007/s00163-023-00419-1.',
    cards: [
      {
        title: 'Design for Longevity',
        icon: 'time',
        meaning:
          'Products built to last: high durability, quality materials, resistance to wear.',
        application: [
          'Use modular components',
          'Avoid planned obsolescence',
          'Design timeless aesthetics'
        ],
        regulation: 'ESPR durability requirements · Right to Repair Directive'
      },
      {
        title: 'Design for Repairability',
        icon: 'tool',
        meaning: 'Products that can be fixed, not thrown away.',
        application: [
          'Accessible fasteners',
          'Spare parts availability',
          'Clear repair instructions'
        ],
        regulation: 'Right to Repair (EU 2024/1799) · Energy-related products'
      },
      {
        title: 'Design for Disassembly',
        icon: 'screwdriver',
        meaning: 'Products that can be taken apart efficiently at end of life.',
        application: [
          'Reversible connections',
          'Material compatibility',
          'Labelled components'
        ],
        regulation: 'ESPR 2025-2030 working plan · Electronics & textiles first'
      },
      {
        title: 'Design for Recyclability',
        icon: 'recycling',
        meaning: 'Materials that can re-enter the production cycle cleanly.',
        application: [
          'Mono-material design',
          'Avoid hazardous additives',
          'Clearly marked materials'
        ],
        regulation:
          'Packaging & Packaging Waste Regulation · Critical Raw Materials Act'
      }
    ]
  },
  /*
    The circular business model cards were moved to Module 4:
    src/lib/content/en/modules/business-case.js
  */
};

/* 5. DETAILED SECTION 2 */
const identifyOptionsSection = {
  id: 'identify-your-options',
  title: 'Identify Your Options',
  resourceTag: 'options:identify-options',
  paragraphs: [
    'This section helps teams translate broad circular economy strategies into options that relate directly to their products, operations and value chain.',
    'Use this space to describe the option-generation process, workshop activities and any supporting examples or images.',
    "The image above shows the '9R strategies' form a hierarchy of circular economy interventions ranked from highest to lowest value preservation.",
    'At the top, R0 (Refuse) eliminates the need for a product entirely, preserving the most value by avoiding resource consumption altogether.',
    'Moving down, R1-R2 (Rethink/Reduce) minimise resource use, while R3-R6 (Reuse, Repair, Refurbish, Remanufacture) focus on keeping products and components in active use for as long as possible.',
    'R7 (Repurpose) gives materials a new function, R8 (Recycle) recovers raw material value through processing, and R9 (Recover), typically energy recovery through incineration, sits at the bottom of the hierarchy as the lowest value preservation strategy, extracting only calorific value once all other options are exhausted.',
    "The framework's core principle is that the higher the R, the more embedded economic, social and environmental value is lost."
  ],
  /*
    This image appears after paragraph 2 and before "The image above shows...".
    Replace src to change the visual, or edit the alt text and caption below.
  */
  inlineImage: {
    afterParagraph: 2,
    title: 'Circular Economy strategies',
    src: '/downloads/module3/UNIDO_Digital Toolbox (EU4GREENRecoveryEast) - Frame 13.svg',
    alt: 'The 9R circular economy strategies arranged by value preservation',
    caption: 'The 9R hierarchy of circular economy strategies.',
    maxWidth: '680px',
    zoomable: true
  },
  showRelevantTools: false,
  /*
    M3 WHEEL WORKSHOP
    Edit all Module 3 wheel workshop wording, timings, lists and the canvas link below.
    The workshop appears immediately after the section paragraphs above.
  */
  m3WheelWorkshop: {
    subtitle: 'Tool highlight: process facilitation',
    title: 'Circular Strategies Wheel Workshop',
    icon: 'recycling',
    introduction:
      "The Circular Strategies Wheel gives your team a shared visual overview of circular strategies across the three phases of a product or service's life: start of life, product life and end of life. It turns circularity from an abstract idea into something tangible and actionable, helping your team connect relevant strategies to your business context. By working through it together, you will identify key opportunities, areas of interest and practical barriers, creating a grounded, team-owned starting point for building your circular business model.",
    outcome:
      'By the end of the exercise, your team will have a prioritised view of the most relevant circular strategies, a shared understanding of key opportunities and obstacles, and a clear focus area for developing your circular business model.',
    preparation: {
      title: 'Preparation',
      time: '5 min',
      text:
        'Print the Circular Strategies Wheel at A1 size and position it so the whole team can read and work on it at the same time, ideally on a wall at standing height. Make sure every participant has pens and a set of all three Post-it colours before you begin.',
      details: ['Time: 30-35 minutes', 'Best for: Teams of 3-8 people'],
      listTitle: 'You will need:',
      items: [
        'Circular Strategies Wheel canvas, printed at A1 and placed where everyone can reach it',
        'Post-its in three colours: green for opportunities, yellow for curiosities and pink for challenges',
        'Pens for everyone'
      ],
      linkLabel: 'Circular Strategies Wheel Canvas',
      link:
        'https://ddc.dk/wp-content/uploads/2020/10/Circular_strategies_wheel_canvas.pdf'
    },
    steps: [
      {
        number: '1',
        title: 'Individual brainstorm',
        time: '10-15 min',
        text:
          'Working individually and in silence, each person reviews the circular strategies on the wheel and responds with Post-its: green for clear potential, yellow for areas of curiosity and pink for challenges or obstacles.',
        tip:
          'Start with a 5-minute timer to encourage instinctive responses. When time is up, each person shares and places their Post-its on the wheel. Then run a second 5-minute round; hearing others’ perspectives often sparks new ideas.'
      },
      {
        number: '2',
        title: 'Team discussion',
        time: '10 min',
        text:
          'With all the Post-its on the wheel, review them together as a team across the three life-cycle phases. Discuss patterns, surprises, tensions and where opportunities or challenges overlap. The discussion should lead to one guiding question: what is most interesting for us to focus on when starting to build our circular business model?',
        tip:
          "Do not put the wheel away at the end of the session. Hang it somewhere visible in your workspace so colleagues who were not in the room can contribute Post-its over the following days; fresh perspectives often surface things the core team missed."
      }
    ]
  }
};

/* 6. DETAILED SECTION 3 */
const assessPrioritiseSection = {
  id: 'assess-and-prioritise',
  title: 'Redesigning Your Process',
  resourceTag: 'options:assess-prioritise',
  paragraphs: [
    'Use this step to translate selected design options into changes across sourcing, production, products, packaging and recovery.'
  ],
  /*
    PROCESS REDESIGN INFO BOX:
    Edit the columns below to change headings, icons, subtitles or actions.
  */
  m3ProcessRedesign: {
    title: 'Redesigning Your Processes',
    intro:
      "Circular design is not just about the product, it is also about how you make it, what happens in production, and how waste is managed.",
    footer: 'Material flow loops back — recovery feeds input again',
    columns: [
      {
        title: 'Input',
        subtitle: 'Sourcing & Materials',
        icon: 'recycling',
        actions: [
          'Switch to recycled or secondary raw materials',
          'Source from suppliers with circularity credentials',
          'Reduce virgin material inputs'
        ]
      },
      {
        title: 'Process',
        subtitle: 'Production & Manufacturing',
        icon: 'tool',
        actions: [
          'Lean manufacturing: eliminate process waste',
          'Closed-loop water and solvent recovery',
          'Capture and reuse production offcuts'
        ]
      },
      {
        title: 'Output',
        subtitle: 'Products & Packaging',
        icon: 'box',
        actions: [
          'Design products for longevity and take-back',
          'Eliminate single-use or non-recyclable packaging',
          'Label materials clearly for end-of-life sorting'
        ]
      },
      {
        title: 'Recovery',
        subtitle: 'End-of-Life Management',
        icon: 'recycling',
        actions: [
          'Set up a take-back or buy-back scheme',
          'Partner with reprocessors or recyclers',
          'Reintroduce recovered materials as inputs'
        ]
      }
    ]
  }
};

/* 7. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Take your shortlisted options into a structured financial and value analysis, building the case for investment and action.'
  ],
  checklist: [
    'A clear understanding of the circular strategy landscape and 9R hierarchy',
    'Team-generated ideas mapped across the Circular Strategies Wheel',
    'A long-list of possible circular options for your business',
    'A shortlist of 1-3 priority strategies to take into Module 4',
    'Clear notes on what needs further feasibility and value analysis'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-3-options.pdf',
  toolsPdf: '/downloads/tool-catalogue.pdf'
};

export const options = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [
    exploreStrategiesSection,
    identifyOptionsSection,
    assessPrioritiseSection
  ],
  moduleSummary,
  downloads
});
