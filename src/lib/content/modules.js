const placeholderParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, nibh non fermentum porttitor, lorem neque consequat arcu, vitae cursus nibh sem sed lectus. Sed euismod, libero in interdum gravida, urna massa volutpat libero, non luctus erat arcu et nibh.',
  'Praesent vitae justo sed nibh suscipit tincidunt. Maecenas sit amet augue in erat posuere volutpat. Curabitur sed mauris vel neque tincidunt fermentum. Donec at arcu vel massa dictum blandit, vitae consequat lorem.',
  'Aliquam erat volutpat. Suspendisse potenti. Etiam posuere, nibh at facilisis porttitor, ligula massa interdum lacus, sed luctus mi mi ac neque. Vivamus luctus, lectus sed aliquet posuere, sapien nibh tristique leo, sed feugiat ipsum justo vel erat.'
];

const placeholderImages = [
  {
    src: '/images/construction.jpg',
    alt: 'Placeholder image for module content',
    caption: 'Placeholder caption text for a supporting module image.'
  },
  {
    src: '/images/textiles.jpg',
    alt: 'Placeholder image for module content',
    caption: 'Placeholder caption text for a second supporting module image.'
  }
];
const module2Bodyparagraph = [
  'Before a business can become more circular, it needs to understand where it stands today.',
  'This module guides SMEs through a structured diagnostic process, assessing circular economy maturity, mapping resource flows, and identifying the specific hotspots where waste, inefficiency, or environmental impact is highest.',
  'Rather than jumping straight to solutions, this module builds the factual foundation that makes every subsequent decision more targeted and effective. The module works through three interconnected stages.'
];

const diagnoseDeepDives = [
  {
    id: 'maturity-assessment',
    number: '1',
    title: 'Maturity Assessment',
    description: 'Quick self-diagnosis of how circular your business already is across key dimensions.',
    keyOutputs: ['CE maturity score', 'Priority areas for focus'],
    bodyTitle: 'Maturity Assessment',
    bodyParagraphs: [
      'The maturity assessment gives SMEs a structured way to understand their current level of circular economy readiness. It helps teams reflect on strategy, operations, products, supply chain practices and internal capabilities before selecting specific actions.',
      'The result is a simple overview of strengths and gaps. This creates a shared starting point for discussion and makes it easier to decide where more detailed mapping or improvement work is needed.'
    ],
    image: {
      src: '/images/construction.jpg',
      alt: 'Team reviewing circular economy maturity results',
      caption: 'Placeholder image: maturity assessment results can be replaced with a final visual later.'
    },
    toolSlugs: ['circular-maturity-self-assessment']
  },
  {
    id: 'baseline-mapping',
    number: '2',
    title: 'Baseline Mapping',
    description: 'Map your resource inputs, outputs, waste streams and energy flows systematically.',
    keyOutputs: ['Input/output inventory', 'Waste stream overview'],
    bodyTitle: 'Baseline Mapping',
    bodyParagraphs: [
      'Baseline mapping documents what enters and leaves the business. This can include materials, water, energy, packaging, products, emissions and waste streams. The purpose is to create a practical picture of the current system.',
      'A clear baseline makes later decisions more reliable. It helps reveal hidden inefficiencies, repeated losses and areas where circular strategies could reduce cost, waste or environmental impact.'
    ],
    image: {
      src: '/images/food.jpg',
      alt: 'Resource flow mapping worksheet',
      caption: 'Placeholder image: replace with a process map, worksheet or resource flow diagram.'
    },
    toolSlugs: ['hotspot-mapping-worksheet']
  },
  {
    id: 'hotspot-analysis',
    number: '3',
    title: 'Hotspot Analysis',
    description: 'Pinpoint the most resource-intensive or wasteful activities in your operations.',
    keyOutputs: ['Hotspot map', 'Priorities for action'],
    bodyTitle: 'Hotspot Analysis',
    bodyParagraphs: [
      'Hotspot analysis uses the baseline to identify where the largest losses, costs or environmental impacts occur. It helps teams focus their effort instead of trying to solve every issue at once.',
      'The outcome should be a ranked set of hotspots and action areas. These priorities create the bridge to Module 3, where options and circular strategies can be identified.'
    ],
    image: {
      src: '/images/textiles.jpg',
      alt: 'Hotspot analysis overview',
      caption: 'Placeholder image: replace with a hotspot map, chart or prioritisation overview.'
    },
    toolSlugs: ['hotspot-mapping-worksheet', 'circular-maturity-self-assessment']
  }
];

const diagnoseSummaryChecklist = [
  'Completed the maturity assessment.',
  'Mapped main material, water and energy inputs.',
  'Mapped main outputs, emissions and waste streams.',
  'Identified the most important resource or waste hotspots.',
  'Selected priority areas for deeper exploration.',
  'Prepared the findings for Module 3.'
];

/*
  Edit this file to add or update journey modules.
  Each module becomes one front page card and one module detail page.
*/
export const modules = [
  {
    number: '01',
    slug: 'awareness',
    shortName: 'Module 1',
    title: 'Awareness',
    colourClass: 'module-card-green',
    description:
      'Introduces key CE and RECP concepts, terms, and models to understand the benefits, risks, and potential of CE, even without prior knowledge.',
    intro:
      'This module introduces the core concepts behind circular economy and resource efficient cleaner production. It is intended as a starting point for users who need a shared language and overview before selecting specific tools.',
    icon: '/module-icons/icon-awareness.png',
    iconAlt: 'Awareness module icon',
    bodyTitle: 'Module overview',
    bodyParagraphs: placeholderParagraphs,
    bodyImages: placeholderImages,
    modulePdf: '/downloads/modules/module-1-awareness.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  },
  {
    number: '02',
    slug: 'diagnose',
    shortName: 'Module 2',
    title: 'Diagnose',
    colourClass: 'module-card-lime',
    description:
      'Provides tools to assess CE adoption, identify impacts and gaps, perform hotspot analysis, and set a baseline.',
    intro:
      'This module helps users assess their starting point. It includes tools and guidance for diagnosing circular economy maturity, identifying hotspots and establishing an initial baseline.',
    icon: '/module-icons/icon-diagnose.png',
    iconAlt: 'Diagnose module icon',
    bodyTitle: 'Where are you now?',
    bodyParagraphs: module2Bodyparagraph,
    bodyImages: [],
    deepDiveSections: diagnoseDeepDives,
    summaryTitle: 'Module Summary',
    summaryText:
      'Use this checklist to confirm that the diagnose work has created a practical baseline before moving to the options module.',
    summaryChecklist: diagnoseSummaryChecklist,
    modulePdf: '/downloads/modules/module-2-diagnose.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  },
  {
    number: '03',
    slug: 'options',
    shortName: 'Module 3',
    title: 'Options',
    colourClass: 'module-card-yellow',
    description:
      'Offers tools to support innovation and design processes, review practices, and identify relevant strategies to address diagnosed hotspots.',
    intro:
      'This module supports the identification and comparison of possible circular economy options. It can be used to explore strategies, generate ideas and move from diagnosis to practical opportunities.',
    icon: '/module-icons/icon-options.png',
    iconAlt: 'Options module icon',
    bodyTitle: 'Module overview',
    bodyParagraphs: placeholderParagraphs,
    bodyImages: placeholderImages,
    modulePdf: '/downloads/modules/module-3-options.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  },
  {
    number: '04',
    slug: 'business-case',
    shortName: 'Module 4',
    title: 'Business Case',
    colourClass: 'module-card-blue',
    description:
      'Brings tools which support the transformation from linear to circular business models and the identification of risks, relevant barriers, and potential gains.',
    intro:
      'This module focuses on turning circular economy opportunities into a clearer business case. It includes tools that help users consider feasibility, benefits, risks, barriers and potential value creation.',
    icon: '/module-icons/icon-business%20case.png',
    iconAlt: 'Business Case module icon',
    bodyTitle: 'Module overview',
    bodyParagraphs: placeholderParagraphs,
    bodyImages: placeholderImages,
    modulePdf: '/downloads/modules/module-4-business-case.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  },
  {
    number: '05',
    slug: 'implement',
    shortName: 'Module 5',
    title: 'Implement',
    colourClass: 'module-card-dark',
    description:
      'Tools that support the identification of key value chain partnerships, circular solutions or practices to test, and help move ideas into the testing phase.',
    intro:
      'This module supports implementation planning and testing. It includes tools that can help users identify partners, define actions, prepare pilots and move selected circular solutions into practice.',
    icon: '/module-icons/icon-implement.png',
    iconAlt: 'Implement module icon',
    bodyTitle: 'Module overview',
    bodyParagraphs: placeholderParagraphs,
    bodyImages: placeholderImages,
    modulePdf: '/downloads/modules/module-5-implement.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  },
  {
    number: '06',
    slug: 'monitor',
    shortName: 'Module 6',
    title: 'Monitor',
    colourClass: 'module-card-outline',
    description:
      'Selected tools for ongoing monitoring of solutions, including data gathering, selection of relevant indicators, and re-diagnosis after implementation.',
    intro:
      'This module helps users track progress and learn from implementation. It includes tools for monitoring outcomes, selecting indicators and revisiting the baseline after circular economy actions have been tested.',
    icon: '/module-icons/icon-monitor.png',
    iconAlt: 'Monitor module icon',
    bodyTitle: 'Module overview',
    bodyParagraphs: placeholderParagraphs,
    bodyImages: placeholderImages,
    modulePdf: '/downloads/modules/module-6-monitor.pdf',
    cataloguePdf: '/downloads/tool-catalogue.pdf'
  }
];
