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
  { sectionId: 'quick-scan-tool', label: 'Run quick scan' },
  { sectionId: 'validate-case', label: 'Validate case' },
  { sectionId: 'test-and-pilot', label: 'Prepare pilot' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Validating a circular opportunity',
  paragraphs: [
    'Before choosing a direction, you need to know which circular opportunities make sense for your business financially, operationally and strategically. This phase helps you identify the right circular business model, validate the opportunities and understand the path forward.'
  ],
  cards: [
    {
      sectionId: 'quick-scan-tool',
      number: '1',
      title: 'Quick Scan Tool',
      description:
        'Evaluate shortlisted circular options based on impact, feasibility, risks and alignment with your existing operations and goals.',
      keyOutputs: [
        'Circular models screened against six criteria',
        'A clearer view of feasibility and potential impact'
      ]
    },
    {
      sectionId: 'validate-case',
      number: '2',
      title: 'Validate the Case',
      description:
        'Understand the barriers, enablers and risks required to move from an idea to a stronger circular business case.',
      keyOutputs: [
        'Barrier and Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis',
        'A shortlist of one to three priority strategies'
      ]
    },
    {
      sectionId: 'test-and-pilot',
      number: '3',
      title: 'Test & Pilot',
      description:
        'Prepare a small-scale test before committing to full implementation, including material flows, partners and learning goals.',
      keyOutputs: [
        'Pilot logic mapped',
        'Testing assumptions and learning goals defined'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const quickScanBusinessModelOptions = [
  'Product as a Service (PaaS)',
  'Resource Recovery',
  'Extended Product Life',
  'Sharing Platforms',
  'Circular Supply Chains'
];

const quickScanSection = {
  id: 'quick-scan-tool',
  title: 'Quick Scan Tool',
  resourceTag: 'validate:quick-scan',
  paragraphs: [
    'Not every circular option will offer the same value or be equally practical to implement. A transparent assessment helps teams compare opportunities consistently.',
    'Use this section to support the assessment through criteria and a prioritisation method. The result can be downloaded. Please use Firefox, Safari or Google Chrome if you want the download to work correctly.'
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
    // These options mirror the circular business model cards in Phase 3: Explore.
    businessModelOptions: quickScanBusinessModelOptions,
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

/* 5. DETAILED SECTION 2 */
const validateCaseSection = {
  id: 'validate-case',
  title: 'Validate the Case',
  resourceTag: 'validate:validate-case',
  paragraphs: [
    "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis is a useful tool when trying to identify what hidden barriers could come into effect for each of the three circular strategies you have identified.",
    "It's a simple framework for assessing a business, project, or decision by looking at four areas: Strengths and Weaknesses are internal factors (what you're good at, and where you fall short), while Opportunities and Threats are external factors (favourable conditions you could exploit, and risks in your environment you need to watch for). Typically laid out as a 2x2 grid, it helps surface a clear, balanced picture before making strategic decisions."
  ]
};

/* 6. DETAILED SECTION 3 */
const testPilotSection = {
  id: 'test-and-pilot',
  title: 'Test & Pilot',
  resourceTag: 'validate:test-and-pilot',
  paragraphs: [
    'Before a validated circular opportunity becomes a full implementation project, test the logic at a smaller scale. A pilot helps you check whether the idea works in practice, who needs to be involved and which assumptions still need evidence.',
    'Start by making the circular flow visible. Use a tool such as the **Circular Loop Designer** to map where inputs come from, how products or materials move through use, and what happens at end of life. This helps surface missing partners, unclear responsibilities, technical barriers and material flow gaps before you commit time and money to implementation.',
    'A useful pilot should be time-bounded, specific and measurable. Define what you want to learn, what success would look like, who is responsible, and which data or feedback will be collected. The output of this section should be a clear pilot concept that can be turned into an implementation plan in the next phase.'
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you have a quick scan result, a validated case and a clear pilot focus for your selected circular opportunity.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Selected one or more models to screen in the quick scan',
    'Completed a rapid feasibility and impact assessment',
    'Selected a priority model or strategy for further development',
    'Identified key barriers, risks and enabling conditions',
    'Defined what should be tested before implementation',
  ]
};

export const validate = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [quickScanSection, validateCaseSection, testPilotSection],
  phaseSummary
});
