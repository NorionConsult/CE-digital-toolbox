import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 4: VALIDATE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values aligned with the visible subsection names because
  they connect page links and relevant tool placements.
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
    'This phase focuses on prioritizing circular economy opportunities by clarifying their feasibility, benefits, risks, barriers and potential value creation.',
  icon: '/phase-icons/icon-validate.png',
  iconAlt: 'Validate phase icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'shortlist-strategies', label: 'Shortlist options' },
  { sectionId: 'verify-potential', label: 'Verify potential' },
  { sectionId: 'test-and-pilot', label: 'Prepare pilot' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Validating a circular opportunity',
  paragraphs: [
    'Before choosing a direction, you need to know which circular options make sense for your business financially, operationally and strategically. This phase helps you identify the right circular option, assess how it will affect your business opportunities, and understand a path forward.'
  ],
  cards: [
    {
      sectionId: 'shortlist-strategies',
      number: '1',
      title: 'Shortlist options',
      description:
        'Evaluate shortlisted circular options based on impact, feasibility, risks and alignment with your existing operations and goals.',
      keyOutputs: [
        'Circular options screened against relevant criteria',
        'A clearer view of feasibility and potential impact'
      ]
    },
    {
      sectionId: 'verify-potential',
      number: '2',
      title: 'Verify potential',
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
const shortlistStrategiesOptions = [
  'Product as a Service (PaaS)',
  'Resource Recovery',
  'Extended Product Life',
  'Sharing Platforms',
  'Circular Supply Chains'
];

const shortlistStrategiesSection = {
  id: 'shortlist-strategies',
  title: 'Shortlist strategies',
  resourceTag: 'validate:shortlist-strategies',
  paragraphs: [
    'Not every circular option will offer the same value or be equally practical to implement. This section can help you compare circular options to find what is best for your business. If you already have a particular idea from the phase before you can move to verify the potential of the idea or concept. If you rather keep working on the circular strategies, use the screening tool here to think further on the options identified in the former phase. || You can download the result of this section to share with others (Please use Google Chrome, Safari, or Firefox for a better print).'
  ],
  /*
    SHORTLIST STRATEGIES QUESTIONNAIRE
    Edit the questionnaire title, instructions, categories, questions and
    result messages below. The interactive layout is in:
    src/lib/components/sections/M4Questionnaire.svelte
  */
  m4Questionnaire: {
    title: 'Screening your options',
    introduction:
      "Use this questionnaire to see how well each circular option could work for you. First, select a circular option to assess. Then, answer the questionnaire below according to your business. Based on your responses, you'll be given an estimate of how well this circular option model could work for you.",
    businessModelLabel: 'Circular option to assess',
    businessModelPlaceholder: 'Select a circular option',
    // These options mirror the circular value model cards in Phase 3: Explore.
    businessModelOptions: shortlistStrategiesOptions,
    otherBusinessModelLabel: 'Other',
    selectBusinessModelText:
      'Select the circular option you want to assess, then answer every question to see your result.',
    yesLabel: 'Yes',
    noLabel: 'No',
    resultsTitle: 'Results',
    answeredLabel: 'answered',
    downloadLabel: 'Download results',
    downloadingLabel: 'Preparing PDF...',
    downloadFilename: 'phase-4-validate-shortlist-strategies-results.pdf',
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
          'Does it create wider social or community value (better circumstances for the workers, more jobs, access to better and affordable products)?'
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
    'Based on the results of the screenings above, you can begin to identify the highest-scoring, most feasible circular options. Once you narrow down 1 to 3 options, you will be able to develop a viable business case which incorporates them into a viable strategy to use in the next phase. || For a template to help narrow down your options, see the "Shortlisting of Options" tool below. Using this tool can help you clarify key aspects each option brings to support your business case.'
  ]
};

/* 5. DETAILED SECTION 2 */
const verifyPotentialSection = {
  id: 'verify-potential',
  title: 'Verify potential',
  resourceTag: 'validate:verify-potential',
  paragraphs: [
    "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. It is important to identify what hidden barriers could come into effect for each of the strategies, ideas and concepts you have identified. || Use the tools below to develop and further validate the business case you selected in Step 1 of this section or the ideas you developed in the Explore phase."
  ]
};

/* 6. DETAILED SECTION 3 */
const testPilotSection = {
  id: 'test-and-pilot',
  title: 'Test & Pilot',
  resourceTag: 'validate:test-and-pilot',
  paragraphs: [
    "Before a validated circular opportunity becomes a full implementation project, it's helpful to test the logic at a smaller scale. Testing ideas or prototypes in the real world can help to validate a solution. || A pilot helps you check whether the idea works in practice, who needs to be involved, and which assumptions still need evidence.|| A useful pilot should be time-bounded, specific and measurable. The tools, such as the test card, can help you define what you want to learn, what success would look like, who is responsible, and which data or feedback will be collected.|| This helps surface missing partners, unclear responsibilities, technical barriers and material flow gaps before you commit time and money to implementation.||The output of this section should be a clear pilot concept that can be turned into an implementation plan in the next phase."
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you have shortlisted strategies, verified their potential and defined a clear pilot focus for your selected circular opportunity.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Selected one or more circular opportunities to screen through the shortlist strategies step',
    'Narrowed down one to three feasible circular options for further development',
    'Validated circular options by identifying key barriers, risks and enabling conditions',
    'Defined what should be tested in a pilot before implementation',
  ]
};

export const validate = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [shortlistStrategiesSection, verifyPotentialSection, testPilotSection],
  phaseSummary
});
