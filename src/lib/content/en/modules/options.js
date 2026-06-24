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
  { sectionId: 'explore-ce-strategies', label: 'Explore strategies' },
  { sectionId: 'identify-your-options', label: 'Identify options' },
  { sectionId: 'assess-and-prioritise', label: 'Assess options' },
  { sectionId: 'prepare-for-business-case', label: 'Prepare business case' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'What strategy is best for you?',
  paragraphs: [
    'The Options module bridges diagnosis with decision-making. Based on what you have learned about your business, you will explore which circular strategies and business models best fit your context, resources and goals.'
  ],
  cards: [
    {
      sectionId: 'explore-ce-strategies',
      number: '1',
      title: 'Explore CE Strategies',
      description:
        'Understand the range of circular strategies available, from keeping products in use longer to redesigning material flows.',
      keyOutputs: [
        'A clear grasp of the 9R framework and value-preservation hierarchy',
        'Understanding of inner-loop versus outer-loop strategies',
        'Awareness of the six circular business model archetypes'
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
      title: 'Assess & Prioritise',
      description:
        'Evaluate your shortlisted options based on impact, feasibility and alignment with your existing operations and goals.',
      keyOutputs: [
        'Options plotted on an impact-versus-feasibility matrix',
        'Options screened against six key criteria',
        'A ranked view of your strongest options'
      ]
    },
    {
      sectionId: 'prepare-for-business-case',
      number: '4',
      title: 'Prepare for the Business Case',
      description:
        'Narrow down to one to three priority strategies to take forward for deeper financial and value analysis.',
      keyOutputs: [
        'A shortlist of one to three priority strategies',
        'A completed profile for each shortlisted option',
        'A clear handoff into the Business Case module'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const exploreStrategiesSection = {
  id: 'explore-ce-strategies',
  title: 'Explore CE Strategies',
  resourceTag: 'options:explore-strategies',
  paragraphs: [
    'Circular economy strategies provide different ways to preserve value, reduce waste and keep products, components and materials in use for longer.',
    "Use this section to introduce the relevant strategy frameworks and explain how users can recognise which approaches may fit their business context.",
    "The image above shows the '9R strategies' form a hierarchy of circular economy interventions ranked from highest to lowest value preservation.",
    "At the top, R0 (Refuse) eliminates the need for a product entirely, preserving the most value by avoiding resource consumption altogether",
    "Moving down, R1–R2 (Rethink/Reduce) minimise resource use, while R3–R6 (Reuse, Repair, Refurbish, Remanufacture) focus on keeping products and components in active use for as long as possible.",
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
    src: '/downloads/module3/9r-strategies-hierarchy.svg',
    alt: 'The 9R circular economy strategies arranged by value preservation',
    caption: 'The 9R hierarchy of circular economy strategies.',
    zoomable: true
  },
  /*
    CIRCULAR BUSINESS MODEL CARDS
    Edit the introductory text, card titles, descriptions, examples and icons
    below. Icon names use the Icon Park Outline set from Iconify.
  */
  businessModelsTitle: 'Circular business models',
  businessModelsIntro:
    "Circular business models are how circular strategies get put into practice in your business. As an SME, you don't need to adopt all six; most businesses start by introducing just one or two that fit naturally with what they already do well. Each archetype below represents a proven way other companies have created commercial value while keeping products, materials or resources in use for longer, often unlocking new revenue streams or reducing costs along the way. Explore each one to see how it works and what it could look like for a business like yours.",
  businessModelCards: [
    {
      title: 'Product as a Service (PaaS)',
      icon: 'delivery',
      text:
        "The fundamental shift here is in who carries the risk of obsolescence and failure. When you sell a product, the customer absorbs the cost of breakdowns and replacement; when you sell access to its function instead, that cost sits with you as the provider. This changes your incentives completely: a product that breaks down or wears out quickly is now a cost to your business rather than a future sale, so you're motivated to design for durability, ease of repair and long service life. It also opens up a much closer, ongoing relationship with the customer, since you're typically the one handling maintenance and servicing throughout the contract. Revenue becomes recurring rather than one-off, which can make cash flow more predictable, though it usually requires more upfront capital since you're retaining ownership of the asset rather than receiving full payment at the point of sale.",
      example: 'Leasing industrial machinery with full maintenance included.'
    },
    {
      title: 'Resource Recovery',
      icon: 'recycling-pool',
      text:
        "This model treats what would normally be waste as a resource stream in its own right, which means it depends on having reasonably consistent volumes and qualities of material flowing through your operations to make recovery worthwhile. The economics tend to work best when the recovered material can substitute directly for something you'd otherwise have to buy in, or when there's a ready market for it elsewhere. It often requires some investment in sorting, processing or storage infrastructure, and may involve forming relationships with other businesses that can use what you'd otherwise discard, an industrial symbiosis approach. The environmental case is usually straightforward, since less material ends up in landfill or incineration, but the business case depends heavily on the value of the recovered material relative to the cost of recovering it.",
      example: 'Using production off-cuts to create secondary products.'
    },
    {
      title: 'Extended Product Life',
      icon: 'history',
      text:
        'This archetype works across the whole lifecycle of a product rather than at a single point in it. Design decisions made early on, around modularity, ease of disassembly and component standardisation, directly determine how feasible repair and refurbishment will be later. The business model also shifts your relationship with customers from a single transaction to multiple touchpoints over time: a sale, then repairs, then perhaps a buyback and resale as refurbished stock. This can build customer loyalty since people return to a trusted source for servicing, but it requires capability you may not currently have in-house, like a reverse logistics process for getting products back, and refurbishment skills or partnerships.',
      example: 'Offering a takeback and refurbishment programme for electronics.'
    },
    {
      title: 'Sharing Platforms',
      icon: 'share-one',
      text:
        "Sharing models work by addressing idle capacity, the fact that most products spend the majority of their life unused. A drill might be used for a few hours a year; a shared meeting room might sit empty most of the working day. By pooling access across multiple users, you can achieve the same level of utility from fewer physical assets, which has obvious environmental benefits and can also be more cost-effective for users than ownership. The challenge is usually less about the concept and more about the logistics: booking systems, maintenance schedules, accountability for damage and trust between users. This model often works particularly well in business clusters or local networks, where there's a natural pool of similar businesses with similar but non-overlapping needs.",
      example: 'Tool-sharing service for construction SMEs in a business park.'
    },
    {
      title: 'Circular Supply Chains',
      icon: 'link-one',
      text:
        "This is about working upstream rather than downstream, redesigning what comes into your business rather than what happens after a product leaves it. It typically requires closer collaboration with suppliers than a conventional purchasing relationship, since recycled or secondary materials often come with more variability in quality or supply than virgin materials, and managing that variability is usually a shared problem between buyer and supplier. There's often a risk and reliability trade-off in the early stages, since switching to circular inputs can mean accepting some uncertainty while the supply relationship matures. Over time, though, it can reduce exposure to virgin material price volatility and strengthen ties with suppliers who are themselves shifting toward more circular practices.",
      example: 'Switching to recycled feedstock and partnering with a local recycler.'
    },
    {
      title: 'Sustainable Procurement',
      icon: 'shopping-bag',
      text:
        "Of all six archetypes, this is the one with the lowest barrier to entry, since it doesn't necessarily require new infrastructure or a new business model, just a different set of criteria applied to decisions you're already making. The leverage point is that procurement choices ripple outward: requiring take-back schemes or recycled content from suppliers effectively pushes circular practices up the supply chain, even to suppliers who haven't otherwise engaged with circularity. It's often a useful starting point for SMEs precisely because it can be implemented incrementally, supplier by supplier or contract by contract, rather than requiring a single large transformation.",
      example: 'Requiring suppliers to take back packaging after delivery.'
    }
  ]
};

/* 5. DETAILED SECTION 2 */
const identifyOptionsSection = {
  id: 'identify-your-options',
  title: 'Identify Your Options',
  resourceTag: 'options:identify-options',
  paragraphs: [
    'This section helps teams translate broad circular economy strategies into options that relate directly to their products, operations and value chain.',
    'Use this space to describe the option-generation process, workshop activities and any supporting examples or images.'
  ],
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
  title: 'Assess & Prioritise',
  resourceTag: 'options:assess-prioritise',
  paragraphs: [
    'Not every circular option will offer the same value or be equally practical to implement. A transparent assessment helps teams compare opportunities consistently.',
    'Use this section to explain the assessment criteria, prioritisation method and how the final ranking should be interpreted.'
  ],
  /*
    M3 QUESTIONNAIRE
    Edit the questionnaire title, instructions, categories, questions and
    result messages below. The interactive layout is in:
    src/lib/components/sections/M3Questionnaire.svelte
  */
  m3Questionnaire: {
    title: 'Screening Your Options',
    introduction:
      'Use these criteria to pressure-test each shortlisted strategy before committing to a business case.',
    yesLabel: 'Yes',
    noLabel: 'No',
    resultsTitle: 'Results',
    answeredLabel: 'answered',
    incompleteText: 'Answer every question to see your result.',
    positiveResult:
      'There seems to be potential! This strategy should be considered to be tested.',
    negativeResult:
      'It seems this strategy is not a good fit. Are there other strategies to consider or are there ways to make this strategy feasible?',
    categories: [
      {
        title: 'Strategic Fit',
        questions: [
          'Does this align with our long-term business direction?',
          'Does it complement our existing strengths and capabilities?'
        ]
      },
      {
        title: 'Operational Feasibility',
        questions: [
          'Do we have (or can we build) the skills needed?',
          'Does it fit within our current processes or require major change?'
        ]
      },
      {
        title: 'Resource Requirements',
        questions: [
          {
            text: 'What upfront investment is required (time, capital, people)?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          'Are there grants, subsidies, or partnerships that could reduce this?'
        ]
      },
      {
        title: 'Market & Customer Readiness',
        questions: [
          'Will our customers value this change?',
          'Is there market demand or regulatory pressure driving this direction?'
        ]
      },
      {
        title: 'Environmental & Social Impact',
        questions: [
          {
            text: 'What measurable reduction in material use or emissions could this deliver?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          'Does it create wider social or community value?'
        ]
      },
      {
        title: 'Risk & Dependencies',
        questions: [
          {
            text: 'What are the key risks (supply chain, customer, regulatory)?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          "Are there dependencies on partners or technology we don't control?"
        ]
      }
    ]
  }
};

/* 7. DETAILED SECTION 4 */
const prepareBusinessCaseSection = {
  id: 'prepare-for-business-case',
  title: 'Prepare for the Business Case',
  resourceTag: 'options:prepare-business-case',
  paragraphs: [
    'The final step is to turn the strongest options into a clear shortlist that can be examined in more detail.',
    'Use this space to explain what information should accompany each shortlisted option before users continue to Module 4.'
  ]
};

/* 8. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that you have identified and prioritised the circular options that are most relevant to your business.',
    'Continue to the Business Case module to test the value, feasibility and transition requirements of your selected options.'
  ],
  checklist: [
    'Reviewed the main circular economy strategy frameworks',
    'Mapped strategies that are relevant to the business',
    'Created a long-list of feasible circular options',
    'Compared options using impact and feasibility criteria',
    'Selected one to three priority strategies',
    'Prepared the selected options for business case development'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-3-options.pdf',
  cataloguePdf: '/downloads/tool-catalogue.pdf'
};

export const options = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [
    exploreStrategiesSection,
    identifyOptionsSection,
    assessPrioritiseSection,
    prepareBusinessCaseSection
  ],
  moduleSummary,
  downloads
});
