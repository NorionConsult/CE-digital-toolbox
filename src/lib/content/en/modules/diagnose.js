import { defineModulePage } from './_shared.js';

/*
  MODULE 2: DIAGNOSE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect links and tools.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '02',
  slug: 'diagnose',
  shortName: 'Module 2',
  title: 'Diagnose',
  colourClass: 'module-card-lime',
  description:
    'Provides tools to assess CE adoption, identify impacts and gaps, perform hotspot analysis, and set a baseline.'
};

const hero = {
  intro:
    'This module helps users assess their starting point. It includes tools and guidance for diagnosing circular economy maturity, identifying hotspots and establishing an initial baseline.',
  icon: '/module-icons/icon-diagnose.png',
  iconAlt: 'Diagnose module icon'
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'maturity-assessment', label: 'Assess maturity' },
  { sectionId: 'baseline-mapping', label: 'Map baseline' },
  { sectionId: 'hotspot-analysis', label: 'Analyse hotspots' }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: 'Where are you now?',
  paragraphs: [
    'Before a business can become more circular, it needs to understand where it stands today.',
    'This module guides SMEs through a structured diagnostic process, assessing circular economy maturity, mapping resource flows, and identifying the specific hotspots where waste, inefficiency, or environmental impact is highest.',
    'Rather than jumping straight to solutions, this module builds the factual foundation that makes every subsequent decision more targeted and effective. The module works through three interconnected stages.'
  ],
  cards: [
    {
      sectionId: 'maturity-assessment',
      number: '1',
      title: 'Maturity Assessment',
      description: 'Quick self-diagnosis of how circular your business already is across key dimensions.',
      keyOutputs: ['CE maturity score', 'Priority areas for focus']
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
  Edit resources in src/lib/content/resources.js.
  Add 'diagnose:maturity-assessment' to:
  placements.moduleSections
*/
const maturitySection = {
  id: 'maturity-assessment',
  title: 'Maturity Assessment',
  resourceTag: 'diagnose:maturity-assessment',
  /* EDIT THIS BELOW */
  paragraphs: [
    'The maturity assessment gives SMEs a structured way to understand their current level of circular economy readiness. It helps teams reflect on strategy, operations, products, supply chain practices and internal capabilities before selecting specific actions. The result is a simple overview of strengths and gaps. This creates a shared starting point for discussion and makes it easier to decide where more detailed mapping or improvement work is needed. Before using assessment tools, reflect on your current situation. Most SMEs fall somewhere along this maturity spectrum.'
  ]
};

/* 5. DETAILED SECTION 2: BASELINE MAPPING */
/*
  RELEVANT TOOLS:
  In src/lib/content/resources.js, add 'diagnose:baseline-mapping' to:
  placements.moduleSections
*/
const baselineSection = {
  id: 'baseline-mapping',
  title: 'Baseline Mapping',
  resourceTag: 'diagnose:baseline-mapping',
  paragraphs: [
    'A baseline captures your business as it is today: all materials entering and leaving, energy used, water consumed, and waste generated. It gives you a factual starting point to measure improvement over time.',
    'Many cost savings and circular opportunities are invisible until you map your flows. A simple resource map reveals which inputs cost the most, where waste is highest, and where efficiency gains are possible.'
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
  image: {
    src: '/downloads/module2/M2_Baseline_mapping_MFexample.png',
    alt: 'Example input and output map for a small packaging manufacturer',
    caption: 'Example input/output map showing resource flows through a production process.',
    zoomable: true
  }
};

/* 6. DETAILED SECTION 3: HOTSPOT ANALYSIS */
/*
  RELEVANT TOOLS:
  In src/lib/content/resources.js, add 'diagnose:hotspot-analysis' to:
  placements.moduleSections
*/
const hotspotSection = {
  id: 'hotspot-analysis',
  title: 'Hotspot Analysis',
  resourceTag: 'diagnose:hotspot-analysis',
  paragraphs: [
    'A hotspot is a point in your business where resource use, waste, cost, or environmental impact is disproportionately high. Hotspots are the priority areas where small changes can deliver the greatest circular economy benefits.'
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
    'Your hotspot analysis directly feeds into Module 3 (Options) – once you know where your biggest impacts are, you can identify the most impactful circular strategies to address them.'
  ]
};

/* 7. MODULE SUMMARY */
const moduleSummary = {
  title: 'Module Summary',
  paragraphs: [
    'Use this checklist to confirm that the diagnose work has created a practical baseline before moving to the options module.',
    'To continue to the next module, click below or go back to home to find the next suitable module, sector, or explore the tool catalogue.'
  ],
  checklist: [
    'Understood what the Circular Economy is and why it matters for your business.',
    'Identified your current CE maturity level (1–5 scale)',
    'Mapped your resource inputs, outputs, and waste streams',
    'Identified your main hotspots: energy, materials, water',
    'Explored practical tools: SCEA, I-GO, ready2LOOP, MCI, Saxion Scan',
    'Reviewed a real-world case example and potential savings'
  ]
};

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-2-diagnose.pdf',
  cataloguePdf: '/downloads/tool-catalogue.pdf'
};

export const diagnose = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [maturitySection, baselineSection, hotspotSection],
  moduleSummary,
  downloads
});
