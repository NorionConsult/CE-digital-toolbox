import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 3: EXPLORE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '03',
  slug: 'explore',
  shortName: 'Phase 3',
  title: 'Explore',
  colourClass: 'module-card-yellow',
  description:
    'Offers tools to support innovation and design processes, review practices, and identify relevant strategies to address assessed hotspots.'
};

const hero = {
  intro:
    'This phase supports the identification and comparison of possible circular economy choices. It can be used to explore strategies, generate ideas and move from assessment to practical opportunities.',
  icon: '/phase-icons/icon-explore.png',
  iconAlt: 'Explore phase icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'explore-ce-strategies', label: 'Design principles' },
  { sectionId: 'identify-your-options', label: 'Identify options' },
  { sectionId: 'assess-and-prioritise', label: 'Redesign circular value' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'What strategy is best for you?',
  paragraphs: [
    'The Explore phase bridges assessment with decision-making. Based on what you have learned about your business, you will explore which circular strategies are out there and how to redesign your products for the circular economy.'
  ],
  cards: [
    {
      sectionId: 'explore-ce-strategies',
      number: '1',
      title: 'Understand design principles',
      description:
        'Explore the core Design for X (DfX) strategies: Design for Longevity, Repairability, Disassembly, and Recyclability, and how they apply to your products.',
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
        'Explore circular business model archetypes and consider how circular strategies could create, deliver and retain value in your business.',
      keyOutputs: [
        'A clear view of circular business model archetypes',
        'Examples of how business models preserve value',
        'Initial ideas for which models may fit your business'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const exploreStrategiesSection = {
  id: 'explore-ce-strategies',
  title: 'Understand Design Principles',
  resourceTag: 'explore:explore-strategies',
  paragraphs: [
    'Circular economy strategies provide different ways to preserve value, reduce waste and keep products, components and materials in use for longer. For this end, there are different models and frameworks.',
    "One of these is the Design for X (DfX) framework, which helps teams translate circular economy ambition into design decisions. Design for X (DfX) means designing for a specific circular outcome, such as longevity, repairability, disassembly or recyclability. These four aspects are typically the most actionable for SME teams working with circular design of products. EU regulation, particularly the Ecodesign for Sustainable Products Regulation (ESPR), Right to Repair, and packaging regulations, is based on and aligned with these design principles. This means the design choices of companies will soon affect market access. The visualisation below describes four design strategies that keep products and materials in use longer and can be applied at different scales and degrees."
  ],
  /*
    DFX FRAMEWORK INFO BOX:
    Edit the cards below to change the text, icons or source note.
    Icons use Iconify's icon-park-outline library:
    https://icon-sets.iconify.design/icon-park-outline/
  */
  m3DfxFramework: {
    title: 'The Design for X (DfX) Framework',
    intro: 'The Design for X (DfX) Framework',
    source:
      'Source: Mesa, Jaime A. (2023). Design for circularity and durability: an integrated approach from Design for X (DfX) guidelines. Research in Engineering Design. 34, 3. 10.1007/s00163-023-00419-1.',
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
        regulation: 'Ecodesign for Sustainable Products Regulation (ESPR) durability requirements · Right to Repair Directive'
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
        regulation: 'Ecodesign for Sustainable Products Regulation (ESPR) 2025-2030 working plan · Electronics & textiles first'
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
  showRelevantTools: false
};

/* 5. DETAILED SECTION 2 */
const identifyOptionsSection = {
  id: 'identify-your-options',
  title: 'Identify Your Options',
  resourceTag: 'explore:identify-options',
  paragraphs: [
    "This section helps you translate broad circular economy strategies into options that relate directly to your products, operations and value chain. The image below shows how the '9R strategies' form a hierarchy of circular economy interventions, ranked from highest to lowest value preservation. At the top, R0 (Refuse) eliminates the need for a product entirely, preserving the most value by avoiding resource consumption altogether.",
    "Moving down, R1-R2 (Rethink/Reduce) minimise resource use, while R3-R6 (Reuse, Repair, Refurbish, Remanufacture) focus on keeping products and components in active use for as long as possible. R7 (Repurpose) gives materials a new function, R8 (Recycle) recovers raw material value through processing, and R9 (Recover), typically energy recovery through incineration, sits at the bottom of the hierarchy as the lowest value preservation strategy, extracting only calorific value once all other options are exhausted. The framework's core principle is that the higher the R, the more embedded economic, social and environmental value is lost."
  ],
  /*
    This image appears after paragraph 2 and before "The image above shows...".
    Replace src to change the visual, or edit the alt text and caption below.
  */
  inlineImage: {
    afterParagraph: 2,
    title: 'Circular Economy strategies',
    src: '/downloads/phase3/UNIDO_Digital Toolbox (EU4GREENRecoveryEast) - 9R diagram.svg',
    alt: 'The 9R circular economy strategies arranged by value preservation',
    caption: 'The 9R hierarchy of circular economy strategies. Based on: United Nations Economic Commission for Europe, & Organisation for Economic Co-operation and Development. (2024). Conference of European Statisticians guidelines for measuring circular economy, Part A: Conceptual framework, indicators and measurement framework (ECE/CES/STAT/2023/5). United Nations',
    maxWidth: '680px',
    zoomable: true
  },
  showRelevantTools: false,
  /*
    M3 WHEEL WORKSHOP
    Edit all Phase 3 wheel workshop wording, timings, lists and the canvas link below.
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
  title: 'Redesigning Circular Value',
  resourceTag: 'explore:redesign-circular-value',
  paragraphs: [
    'Circular business models describe how a company can create, deliver and retain value while reducing resource use and waste.',
    'Use this section to explore how circular strategies can become practical business model choices.'
  ],
  /*
    CIRCULAR BUSINESS MODEL CARDS
    Edit the introductory text, card titles, descriptions, examples and icons
    below. Icon names use the Icon Park Outline set from Iconify.
  */
  businessModelsTitle: 'Circular options',
  businessModelsIntro:
    "The circular options below detail different strategies for making your business more circular. Each option below represents a proven way to create commercial value while keeping products, materials or resources in use for longer. || As an SME, you do not need to adopt all five; most businesses start by introducing just one or two that fit naturally with what they already do well.",
  businessModelCards: [
    {
      title: 'Product as a Service (PaaS)',
      icon: 'delivery',
      text:
        "Instead of selling a product, you sell access to what it does: the customer pays to use it, not to own it. The customer typically pays based on usage or time under a short- or long-term contract, while the provider keeps ownership of the product throughout its life. This creates a strong incentive to design products that are durable, easy to maintain and repair, and able to stay in use for longer. The model can also create a closer, ongoing relationship with customers, since the provider is often responsible for maintenance and servicing throughout the contract. For the business, revenue becomes recurring rather than one-off, which can make income more predictable.",
      example: 'Leasing industrial machinery with full maintenance included.'
    },
    {
      title: 'Resource Recovery',
      icon: 'recycling-pool',
      text:
        "Instead of discarding your waste, you treat it as a resource in its own right; something you can sell, reuse or trade with other businesses. This works best when you have a reasonably steady volume and quality of material flowing through your operations, so recovery is worth the effort. It often requires investment in sorting, processing or storage, and may involve building relationships with other businesses that can use what you would otherwise throw away.",
      example: 'Using production off-cuts to create secondary products.'
    },
    {
      title: 'Extended Product Life',
      icon: 'history',
      text:
        'Instead of a product being sold once and eventually discarded, you keep it in use for as long as possible through repair, upgrades and resale. This means thinking about the whole lifecycle of a product, not just the point of sale. Design decisions made early on, such as modularity, ease of disassembly and standard components, directly determine how easy repair and refurbishment will be later.',
      example: 'Offering a takeback and refurbishment programme for electronics.'
    },
    {
      title: 'Sharing Platforms',
      icon: 'share-one',
      text:
        'Instead of each customer owning their own product, several users share access to the same one. This addresses idle capacity; the fact that many products sit unused for most of their life. By pooling access across multiple users, you can deliver the same level of use from fewer physical assets, which has environmental benefits and can also be more cost-effective for users than ownership.',
      example: 'Tool-sharing service for construction small-medium enterprises (SMEs) in a business park.'
    },
    {
      title: 'Circular Supply Chains',
      icon: 'link-one',
      text:
        'Instead of focusing only on what happens to your product after it is sold, you focus on what goes into it in the first place by sourcing recycled or secondary materials rather than virgin ones. This typically requires closer collaboration with suppliers, because recycled or secondary materials often vary more in quality or supply than virgin materials. Over time, it can reduce exposure to virgin material price volatility and strengthen supplier relationships.',
      example: 'Switching to recycled feedstock and partnering with a local recycler.'
    }
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you understand the circular design principles and have identified relevant strategies for your business.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'A clear understanding of the Design for X (DfX) redesign process',
    'A completed Design for X (DfX) audit',
    'Design proposal and completion of the Circular strategies wheel workshop',
    'Awareness of circular business model archetypes that could fit your business'
  ]
};

export const explore = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [
    exploreStrategiesSection,
    identifyOptionsSection,
    assessPrioritiseSection
  ],
  phaseSummary
});
