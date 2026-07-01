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
  title: 'Building a circular business case',
  paragraphs: [
    'Before choosing a direction, you need to know which circular opportunities make sense for your business financially, operationally and strategically. This module helps SMEs identify the right circular business model, build a compelling business case and understand the path forward.'
  ],
  cards: [
    {
      sectionId: 'circular-business-models',
      number: '1',
      title: 'Circular Business Models',
      description:
        'Explore how circular strategies can be translated into business model archetypes that fit your sector, customers and capabilities.',
      keyOutputs: [
        'A clear view of six circular business model archetypes',
        'Examples of how business models preserve value',
        'Initial ideas for which models may fit your business'
      ]
    },
    {
      sectionId: 'quick-scan-tool',
      number: '2',
      title: 'Quick Scan Tool',
      description:
        'Evaluate shortlisted circular business model options based on impact, feasibility, risks and alignment with your existing operations and goals.',
      keyOutputs: [
        'Circular business models screened against six criteria',
        'A clearer view of feasibility and potential impact'
      ]
    },
    {
      sectionId: 'business-case',
      number: '3',
      title: 'Business Case',
      description:
        'Understand the barriers, enablers and steps required to move from your current business model to a circular one.',
      keyOutputs: [
        'Barrier and SWOT analysis', 
        'A shortlist of one to three priority strategies'
      ]
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
  ],
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
const quickScanSection = {
  id: 'quick-scan-tool',
  title: 'Quick Scan Tool',
  resourceTag: 'business-case:quick-scan',
  paragraphs: [
    'Not every circular business model will offer the same value or be equally practical to implement. A transparent assessment helps teams compare opportunities consistently.',
    'Use this section to explain the assessment criteria, prioritisation method and how the final ranking should be interpreted.'
  ],
  /*
    QUICK SCAN QUESTIONNAIRE
    Edit the questionnaire title, instructions, categories, questions and
    result messages below. The interactive layout is in:
    src/lib/components/sections/M4Questionnaire.svelte
  */
  m4Questionnaire: {
    title: 'Screening Your Options',
    introduction:
      'Use these criteria to pressure-test each shortlisted strategy before committing to a business case.',
    businessModelLabel: 'Circular business model to assess',
    businessModelPlaceholder: 'Select a circular business model',
    // These options update automatically when the business model card titles above are edited.
    businessModelOptions: businessModelsSection.businessModelCards.map((card) => card.title),
    otherBusinessModelLabel: 'Other',
    selectBusinessModelText:
      'Select the circular business model you want to assess, then answer every question to see your result.',
    yesLabel: 'Yes',
    noLabel: 'No',
    resultsTitle: 'Results',
    answeredLabel: 'answered',
    downloadLabel: 'Download results',
    downloadingLabel: 'Preparing PDF...',
    downloadFilename: 'module-4-business-case-quick-scan-results.pdf',
    pdfDisclaimer:
      'These are guiding questions part of Module 4: Business Case of the CE Digital Toolbox. The results do not guarantee a correct assessment, as these are only for indicative use and for learning purposes and should always be used together with other assessment tools and context awareness.',
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
          {
            text: 'Does it fit within our current processes or require major change?',
            yesLabel: 'Fits',
            noLabel: 'Not fit'
          }
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
  },
  closingParagraphs: [
    'Once you have screened business models to consider, you can now move on to shortlist your priority options. In this step, you can narrow down from 1-3 strategies to develop into a business case. For a template to screen your options, see the tool "Shortlisting options template". These considerations can help you understand and clarify the key aspects that these options bring to support further development of your business case in the next module.'
  ]
};

/* 6. DETAILED SECTION 3 */
const transitionPlanningSection = {
  id: 'business-case',
  title: 'Business Case',
  resourceTag: 'business-case:business-case',
  paragraphs: [
    "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. SWOT is a fantastic tool to use when trying to identify what hidden barriers could come into effect for each of the three circular strategies you have identified. SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.",
    "It's a simple framework for assessing a business, project, or decision by looking at four areas: Strengths and Weaknesses are internal factors (what you're good at, and where you fall short), while Opportunities and Threats are external factors (favourable conditions you could exploit, and risks in your environment you need to watch for). Typically laid out as a 2x2 grid, it helps surface a clear, balanced picture before making strategic decisions."
  ]
};

/* 7. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that your selected circular opportunity has a clear business model, quick scan result and transition rationale.',
    'Continue to the Implement module when the preferred model, risks and transition steps are sufficiently understood.'
  ],
  checklist: [
    'Reviewed the relevant circular business model archetypes',
    'Selected one or more models to screen in the quick scan',
    'Completed a rapid feasibility and impact assessment',
    'Selected a priority model or strategy for further development',
    'Identified key barriers, risks and enabling conditions',
    'Developed the business model with the NCM toolkit'

  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-4-business-case.pdf',
  toolsPdf: '/downloads/tool-catalogue.pdf'
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
