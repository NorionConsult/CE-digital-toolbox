import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 2: ASSESS
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect links and tools.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '02',
  slug: 'assess',
  shortName: 'Phase 2',
  title: 'Assess',
  colourClass: 'module-card-lime',
  description:
    'Provides tools to assess Circular Economy (CE) adoption, identify impacts and gaps, perform hotspot analysis, and set a baseline.'
};

const hero = {
  intro:
    'This phase helps you assess your starting point. It includes tools and guidance for assessing circular economy maturity, identifying hotspots and establishing an initial baseline.',
  icon: '/phase-icons/icon-assess.png',
  iconAlt: 'Assess phase icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'maturity-assessment', label: 'Assess maturity' },
  { sectionId: 'baseline-mapping', label: 'Map baseline' },
  { sectionId: 'hotspot-analysis', label: 'Analyse hotspots' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'How far are you?',
  paragraphs: [
    'Before a business can become more circular, it needs to understand where it stands today.',
    'This phase guides you through a structured diagnostic process, assessing circular economy maturity, mapping resource flows, and identifying the specific hotspots where waste, inefficiency, or environmental impact is highest.',
    'Rather than jumping straight to solutions, this phase builds the factual foundation that makes every subsequent decision more targeted and effective. The phase works through three interconnected stages.'
  ],
  cards: [
    {
      sectionId: 'maturity-assessment',
      number: '1',
      title: 'Maturity Assessment',
      description: 'Assess how circular your business already is across key dimensions.',
      keyOutputs: ['Circular Economy (CE) maturity score', 'Priority areas for focus']
    },
    {
      sectionId: 'baseline-mapping',
      number: '2',
      title: 'Baseline Mapping',
      description: 'Map your resource inputs, outputs, waste streams and energy flows systematically.',
      keyOutputs: ['Input/output inventory', 'Waste stream overview']
    },
    {
      sectionId: 'hotspot-analysis',
      number: '3',
      title: 'Hotspot Analysis',
      description: 'Pinpoint the most resource-intensive or wasteful activities in your operations.',
      keyOutputs: ['Hotspot map', 'Priorities for action']
    }
  ]
};

/* 4. DETAILED SECTION 1: MATURITY ASSESSMENT */
/*
  MATURITY VISUALISATION TEXT:
  Edit the five maturity levels and popup recommendations in:
  src/lib/components/sections/MaturityCurve.svelte

  RELEVANT TOOLS:
  Edit resources in src/lib/content/tool-catalogue.js.
  Add 'assess:maturity-assessment' to:
  placements.phaseSections
*/
const maturitySection = {
  id: 'maturity-assessment',
  title: 'Maturity Assessment',
  resourceTag: 'assess:maturity-assessment',
  /* EDIT THIS BELOW */
  paragraphs: [
    'The maturity assessment gives you a structured way to understand your current level of circular economy readiness. It helps teams reflect on strategy, operations, products, supply chain practices and internal capabilities before selecting specific actions. This creates a shared starting point for discussion and makes it easier to decide where more detailed mapping or improvement work is needed.|| The tools in this section are collections of good questions to ask before moving on to action. If there are some relevant questions which are hard to answer then the first action steps is to gather enought insight, data or understanding to be able to answer these questions first.'
  ]
};

/* 5. DETAILED SECTION 2: BASELINE MAPPING */
/*
  RELEVANT TOOLS:
  In src/lib/content/tool-catalogue.js, add 'assess:baseline-mapping' to:
  placements.phaseSections
*/
const baselineSection = {
  id: 'baseline-mapping',
  title: 'Baseline Mapping',
  resourceTag: 'assess:baseline-mapping',
  paragraphs: [
    'A baseline captures your business as it is today: all materials entering and leaving, energy used, water consumed, and waste generated. It gives you a factual starting point to measure improvement over time. || Many cost savings and circular opportunities are invisible until you map your flows. A simple resource map reveals which inputs cost the most, where waste is highest, and where efficiency gains are possible. || On the image to the side, you can see an example of how an input/output map can look like. You can start by creating your own input/output map inspired by the example, as either a poster for multiple people to map on or an Excel sheet for a digital version. The map can be as simple or as detailed as you need, but it should capture the main flows of materials, energy and water. If you need more advanced tools you can look into Material Flow Analysis (MFA) or the Stan tools.'
  ],
  image: {
    src: '/downloads/phase2/M2_Baseline_mapping_MFexample.png',
    alt: 'Example input and output map for a small packaging manufacturer',
    caption: 'Example input/output map showing resource flows through a production process.',
    zoomable: true
  }
};

/* 6. DETAILED SECTION 3: HOTSPOT ANALYSIS */
/*
  RELEVANT TOOLS:
  In src/lib/content/tool-catalogue.js, add 'assess:hotspot-analysis' to:
  placements.phaseSections
*/
const hotspotSection = {
  id: 'hotspot-analysis',
  title: 'Hotspot Analysis',
  resourceTag: 'assess:hotspot-analysis',
  paragraphs: [
    'A hotspot is a point in your business where resource use, waste, cost, or environmental impact is disproportionately high. Hotspots are the priority areas where small changes can deliver the greatest circular economy benefits.'
  ],
  baselineCards: [
    {
      title: 'Energy Hotspots',
      text: 'Processes or equipment consuming disproportionate electricity, heat or fuel.',
      icon: 'lightning'
    },
    {
      title: 'Material Hotspots',
      text: 'Materials that are expensive, scarce, or lost as waste in significant quantities.',
      icon: 'box'
    },
    {
      title: 'Water Hotspots',
      text: 'Production stages consuming or polluting large volumes of water.',
      icon: 'water-level'
    }
  ],
  factbox: {
    title: 'Identify Hotspots',
    items: [
      'Review your input/output map and highlight the largest flows',
      'Flag activities with high energy or water use',
      'Identify the costliest waste streams',
      'Look for processes with high defect or rework rates',
      'Consider supplier-side risks (price volatility, scarcity)',
      'Gather staff insights (they often know where waste happens)'
    ]
  },
  closingParagraphs: [
    'Your hotspot analysis directly feeds into Phase 3 (Explore) - once you know where your biggest impacts are, you can identify the most impactful circular strategies to address them.'
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: 'Phase Summary',
  paragraphs: [
    'Use this checklist to confirm that you have mapped a practical baseline and identified your key hotspots.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Mapped your resource inputs, outputs, and waste streams',
    'Identified your main hotspots (e.g. energy, materials, water)',
    'Explored practical tools  (e.g. Smart Circular Economy Assessment (SCEA), I-GO, ready2LOOP, Hotspot Analysis Tool, and Footprint Calculator)'
  ]
};

export const assess = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [maturitySection, baselineSection, hotspotSection],
  phaseSummary
});
