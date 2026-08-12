import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 4: VALIDATE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '04',
  slug: 'validate',
  shortName: 'Phase 4',
  title: 'Validate',
  colourClass: 'module-card-blue',
  description:
    'Brings tools which support the transformation from linear to circular business models and the identification of risks, relevant barriers, and potential gains.'
};

const hero = {
  intro:
    'This phase focuses on validating circular economy opportunities by clarifying their feasibility, benefits, risks, barriers and potential value creation.',
  icon: '/phase-icons/icon-validate.png',
  iconAlt: 'Validate phase icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'circular-business-models', label: 'Explore models' },
  { sectionId: 'quick-scan-tool', label: 'Run quick scan' },
  { sectionId: 'transition-planning', label: 'Plan transition' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Validating a circular opportunity',
  paragraphs: [
    'Before choosing a direction, you need to know which circular opportunities make sense for your business financially, operationally and strategically. This phase helps you identify the right circular business model, validate the opportunities and understand the path forward.'
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
      sectionId: 'validate-case',
      number: '3',
      title: 'Validate the Case',
      description:
        'Understand the barriers, enablers and steps required to move from your current business model to a circular one.',
      keyOutputs: [
        'Barrier and Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis', 
        'A shortlist of one to three priority strategies'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const businessModelsSection = {
  id: 'circular-business-models',
  title: 'Circular Business Models',
  resourceTag: 'validate:business-models',
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
    "Circular business models are how circular strategies get put into practice in your business. As an SME, you don't need to adopt all five; most businesses start by introducing just one or two that fit naturally with what they already do well. Each archetype below represents a proven way other companies have created commercial value while keeping products, materials or resources in use for longer, often unlocking new revenue streams or reducing costs along the way. Explore each one to see how it works and what it could look like for a business like yours.",
  businessModelCards: [
    {
      title: 'Product as a Service (PaaS)',
      icon: 'delivery',
      text:
        "Instead of selling a product outright, you sell access to what it does: the customer pays to use it, not to own it. This shifts who carries the risk when something breaks down or wears out. When you sell a product, the customer absorbs the cost of repairs and replacement; when you sell access instead, that cost sits with you as the provider. This changes your incentives completely: a product that breaks down or wears out quickly is now a cost to your business rather than a future sale, so you're motivated to design for durability, easy repair and a long service life. It also opens up a closer, ongoing relationship with the customer, since you're typically the one handling maintenance and servicing throughout the contract. Revenue becomes recurring rather than one-off, which can make cash flow more predictable, though it usually requires more upfront capital, since you retain ownership of the asset instead of receiving full payment at the point of sale.",
      example: 'Leasing industrial machinery with full maintenance included.'
    },
    {
      title: 'Resource Recovery',
      icon: 'recycling-pool',
      text:
        "Instead of discarding your waste, you treat it as a resource in its own right; something you can sell, reuse or trade with other businesses. This works best when you have a reasonably steady volume and quality of material flowing through your operations, so recovery is worth the effort. The economics tend to work best when the recovered material can replace something you'd otherwise have to buy in, or when there's a ready market for it elsewhere. It often requires some investment in sorting, processing or storage, and may involve building relationships with other businesses that can use what you'd otherwise throw away, an approach known as industrial symbiosis. The environmental case is usually straightforward, since less material ends up in landfill or incineration, but the business case depends heavily on the value of the recovered material compared with the cost of recovering it.",
      example: 'Using production off-cuts to create secondary products.'
    },
    {
      title: 'Extended Product Life',
      icon: 'history',
      text:
        'Instead of a product being sold once and eventually discarded, you keep it in use for as long as possible, through repair, upgrades and resale. This means thinking about the whole lifecycle of a product, not just the point of sale. Design decisions made early on, such as modularity, ease of disassembly and standard components, directly determine how easy repair and refurbishment will be later. This model also shifts your relationship with customers from a single transaction to multiple touchpoints over time: a sale, then repairs, then perhaps a buyback and resale as refurbished stock. This can build customer loyalty, since people return to a trusted source for servicing, but it requires capabilities you may not currently have in-house, such as a process for getting products back (reverse logistics) and refurbishment skills or partnerships.',
      example: 'Offering a takeback and refurbishment programme for electronics.'
    },
    {
      title: 'Sharing Platforms',
      icon: 'share-one',
      text:
        "Instead of each customer owning their own product, several users share access to the same one. This addresses idle capacity; the fact that most products sit unused for most of their life. A drill might be used for a few hours a year; a shared meeting room might sit empty most of the working day. By pooling access across multiple users, you can deliver the same level of use from fewer physical assets, which has clear environmental benefits and can also be more cost-effective for users than ownership. The challenge is usually less about the concept and more about the logistics: booking systems, maintenance schedules, accountability for damage and trust between users. This model often works particularly well in business clusters or local networks, where there's a natural pool of similar businesses with similar but non-overlapping needs.",
      example: 'Tool-sharing service for construction small-medium enterprises (SMEs) in a business park.'
    },
    {
      title: 'Circular Supply Chains',
      icon: 'link-one',
      text:
        "Instead of focusing on what happens to your product after it's sold, you focus on what goes into it in the first place, by sourcing recycled or secondary materials rather than virgin ones. This typically requires closer collaboration with suppliers than a conventional purchasing relationship, since recycled or secondary materials often vary more in quality or supply than virgin materials, and managing that variability is usually a shared problem between you and your supplier. There's often a trade-off between risk and reliability in the early stages, since switching to circular inputs can mean accepting some uncertainty while the supply relationship matures. Over time, though, it can reduce your exposure to price swings in virgin materials and strengthen ties with suppliers who are themselves shifting toward more circular practices.",
      example: 'Switching to recycled feedstock and partnering with a local recycler.'
    },
  ]
};

/* 5. DETAILED SECTION 2 */
const quickScanSection = {
  id: 'quick-scan-tool',
  title: 'Quick Scan Tool',
  resourceTag: 'validate:quick-scan',
  paragraphs: [
    'Not every circular business model will offer the same value or be equally practical to implement. A transparent assessment helps teams compare opportunities consistently.',
    'Use this section to support the assessment through criteria and a prioritisation method.  The result can be downloaded. Please use Firefox, Safari of Google Chrome browser if you want the download to work correctly.'
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
      'Use this questionnaire criteria to pressure-test each shortlisted strategy before committing to a business case.',
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
    downloadFilename: 'phase-4-validate-quick-scan-results.pdf',
    pdfDisclaimer:
      'These are guiding questions part of Phase 4: Validate of the Circular Economy Toolbox. The results do not guarantee a correct assessment, as these are only for indicative use and for learning purposes and should always be used together with other assessment tools and context awareness.',
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
    'Once you have screened business models to consider, you can now move on to shortlist your priority options. In this step, you can narrow down from 1-3 strategies to develop into a business case. For a template to screen your options, see the tool "Shortlisting of Options" template. These considerations can help you understand and clarify the key aspects that these options bring to support further development of your business case in the next phase.'
  ]
};

/* 6. DETAILED SECTION 3 */
const validateCaseSection = {
  id: 'validate-case',
  title: 'Validate the Case',
  resourceTag: 'validate:validate-case',
  paragraphs: [
    "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis is a useful tool when trying to identify what hidden barriers could come into effect for each of the three circular strategies you have identified.",
    "It's a simple framework for assessing a business, project, or decision by looking at four areas: Strengths and Weaknesses are internal factors (what you're good at, and where you fall short), while Opportunities and Threats are external factors (favourable conditions you could exploit, and risks in your environment you need to watch for). Typically laid out as a 2x2 grid, it helps surface a clear, balanced picture before making strategic decisions."
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you have a clear business model, quick scan result and transition rationale for your selected circular opportunity.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Reviewed the relevant circular business model archetypes',
    'Selected one or more models to screen in the quick scan',
    'Completed a rapid feasibility and impact assessment',
    'Selected a priority model or strategy for further development',
    'Identified key barriers, risks and enabling conditions',
  ]
};

export const validate = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [businessModelsSection, quickScanSection, validateCaseSection],
  phaseSummary
});
