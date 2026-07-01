/*
  Tools/resource records.
  HOW TO ADD A RESOURCE:
  1. Copy one complete createResource({ ... }) block below.
  2. Give it a unique id, cardNumber and slug.
  3. Replace all visible text, taxonomy values and the toolLink.
  4. Update journeyPhase and journeyPhases using the instructions below.
  5. Add a placements block if the card should appear on module or sector pages.

  The slug becomes the resource page URL, so use lowercase words separated
  with hyphens and do not reuse a slug from another resource.

  Taxonomy fields used for Tools page filtering and card information:
  - journeyPhase: primary phase retained for compatibility and module matching.
  - journeyPhases: every relevant phase shown as a separate coloured badge,
    and used by the Tools phase filter and resource taxonomy.
  - sector: Cross-sector, Manufacturing, etc.
  - language: document or tool language. For several languages, separate them
    with commas or slashes, for example: 'English, Dutch' or 'English/Dutch'.
    The filter automatically cleans capitalisation and splits them into single
    filter options. If more than three languages are listed, the card displays
    "Multiple" but still appears under each individual language filter.
  - provider: source organisation or provider
  - access: Free, Paid, or Sign up. Capitalisation is cleaned automatically.

  FILTERING NOTE:
  The Tools filters are not case sensitive. Editors can write "english",
  "enGlish" or "English" and the filter will show one clean "English" option.
  This also applies to journey phases, sectors and access values.

  JOURNEY PHASE BADGE COLOURS:
  Badge colours are assigned automatically. Editors should only write the
  phase names; no CSS class or colour code is needed here.

  Use these exact phase names:
  - Awareness
  - Diagnose
  - Options
  - Business Case
  - Implement
  - Monitor
  - None, when the tool is not assigned to a journey module

  The website matches each phase name to its module and uses that module's
  global colour from src/app.css. A resource with several journeyPhases gets
  several badges automatically, for example:

  journeyPhase: 'Monitor',
  journeyPhases: ['Monitor', 'Business Case', 'Options'],

  Keep journeyPhase as one primary value and include it in journeyPhases.
  If journeyPhase is 'None', keep journeyPhases as an empty list: [].
  The Tools page can filter by None, but no "None" badge is displayed on cards.

  WHERE A TOOL CARD APPEARS:
  Add a placements block inside a resource to place it on module or sector pages.

  placements: {
    moduleSections: ['diagnose:baseline-mapping'],
    sectors: ['construction'],
    sectorSections: ['construction:relevant-tools']
  },

  - moduleSections: module-slug:section-id
  - sectors: sector page slug, such as construction, agriculture, textiles or tourism
  - sectorSections: sector-slug:section-id tags, such as textiles:relevant-tools

  A resource can contain several tags and appear in several locations.
  Leave a list empty when the resource should not appear in that location.
*/
/**
 * @typedef {{
 *   moduleSections?: string[];
 *   sectors?: string[];
 *   sectorSections?: string[];
 * }} ResourcePlacementsInput
 *
 * @typedef {{
 *   id: string;
 *   cardNumber: string;
 *   slug: string;
 *   title: string;
 *   description: string;
 *   about: string;
 *   journeyPhase?: string;
 *   journeyPhases?: string[];
 *   placements?: ResourcePlacementsInput;
 *   sector: string;
 *   language: string;
 *   provider: string;
 *   access: string;
 *   timeRequired: string;
 *   preparationNeeded: string;
 *   output: string;
 *   bestFor: string;
 *   format: string;
 *   toolLink: string;
 * }} ResourceInput
 *
 * @typedef {ResourceInput & {
 *   journeyPhases: string[];
 *   filterValues: {
 *     journeyPhases: string[];
 *     sectors: string[];
 *     languages: string[];
 *     access: string[];
 *   };
 *   sectorDisplay: string;
 *   languageDisplay: string;
 *   accessDisplay: string;
 *   placements: {
 *     moduleSections: string[];
 *     sectors: string[];
 *     sectorSections: string[];
 *   };
 * }} Resource
 */

const LANGUAGE_MULTIPLE_LABEL = 'Multiple';

/** @type {Record<string, Record<string, string>>} */
const FILTER_LABELS = {
  journeyPhase: {
    awareness: 'Awareness',
    diagnose: 'Diagnose',
    diagnosis: 'Diagnose',
    options: 'Options',
    'business case': 'Business Case',
    implement: 'Implement',
    implementation: 'Implement',
    monitor: 'Monitor',
    monitoring: 'Monitor',
    none: 'None',
    'sector packages': 'None'
  },
  sector: {
    all: 'Cross-sector',
    across: 'Cross-sector',
    crosssector: 'Cross-sector',
    'cross sector': 'Cross-sector',
    'cross-sector': 'Cross-sector',
    agriculture: 'Agriculture',
    construction: 'Construction',
    textiles: 'Textiles',
    tourism: 'Tourism',
    manufacturing: 'Manufacturing',
    plastics: 'Plastics'
  },
  language: {
    english: 'English',
    dutch: 'Dutch',
    ukrainian: 'Ukrainian',
    russian: 'Russian',
    portuguese: 'Portuguese',
    spanish: 'Spanish',
    georgian: 'Georgian',
    arabic: 'Arabic',
    romanian: 'Romanian',
    armenian: 'Armenian',
    multiple: LANGUAGE_MULTIPLE_LABEL
  },
  access: {
    free: 'Free',
    paid: 'Paid',
    'sign up': 'Sign up',
    signup: 'Sign up',
    'sign-up': 'Sign up',
    register: 'Sign up'
  }
};

/**
 * @param {string} value
 */
function titleCase(value) {
  return value
    .split(/(\s+|-)/)
    /** @param {string} part */
    .map((part) => {
      if (/^\s+$|^-$/u.test(part)) {
        return part;
      }

      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * @param {string} value
 * @param {'journeyPhase' | 'sector' | 'language' | 'access'} type
 */
function normalizeFilterValue(value, type) {
  const cleaned = String(value ?? '').trim().replace(/\s+/g, ' ');
  const lookupKey = cleaned.toLowerCase().replace(/\s*-\s*/g, '-');
  const compactKey = lookupKey.replace(/[^a-z0-9]/g, '');

  return (
    FILTER_LABELS[type]?.[lookupKey] ??
    FILTER_LABELS[type]?.[compactKey] ??
    titleCase(cleaned)
  );
}

/**
 * @param {string | string[] | undefined} value
 * @param {'journeyPhase' | 'sector' | 'language' | 'access'} type
 */
function normalizeFilterList(value, type) {
  const list = Array.isArray(value) ? value : [value ?? ''];
  const splitPattern = type === 'language' || type === 'journeyPhase' ? /[,/;|]+/ : /[,;|]+/;
  const normalised = list
    .flatMap((item) => String(item ?? '').split(splitPattern))
    .map((item) => normalizeFilterValue(item, type))
    .filter(Boolean);

  return [...new Set(normalised)];
}

/**
 * @param {string} language
 */
function getLanguageDisplay(language) {
  const languages = normalizeFilterList(language, 'language').filter(
    (item) => item !== LANGUAGE_MULTIPLE_LABEL
  );

  return languages.length > 3 ? LANGUAGE_MULTIPLE_LABEL : languages.join(', ');
}

/**
 * @param {string[]} values
 */
function sortFilterValues(values) {
  return values.sort((a, b) => {
    if (a === LANGUAGE_MULTIPLE_LABEL) return 1;
    if (b === LANGUAGE_MULTIPLE_LABEL) return -1;
    return a.localeCompare(b);
  });
}

/**
 * @param {ResourceInput} resource
 * @returns {Resource}
 */
function createResource(resource) {
  const normalisedJourneyPhases = normalizeFilterList(
    resource.journeyPhases ?? (resource.journeyPhase ? [resource.journeyPhase] : []),
    'journeyPhase'
  );
  const journeyPhases = normalisedJourneyPhases.filter((phase) => phase !== 'None');
  const journeyPhaseFilterValues = journeyPhases.length > 0 ? journeyPhases : ['None'];
  const languages = normalizeFilterList(resource.language, 'language');
  const languageDisplay = getLanguageDisplay(resource.language);
  const languageFilterValues =
    languages.length > 3 ? [...languages, LANGUAGE_MULTIPLE_LABEL] : languages;
  const sectorDisplay = normalizeFilterValue(resource.sector, 'sector');
  const accessDisplay = normalizeFilterValue(resource.access, 'access');

  return {
    ...resource,
    journeyPhase: journeyPhases[0] ?? 'None',
    journeyPhases,
    sectorDisplay,
    languageDisplay,
    accessDisplay,
    filterValues: {
      journeyPhases: journeyPhaseFilterValues,
      sectors: [sectorDisplay],
      languages: languageFilterValues,
      access: [accessDisplay]
    },
    placements: {
      moduleSections: resource.placements?.moduleSections ?? [],
      sectors: resource.placements?.sectors ?? [],
      sectorSections: resource.placements?.sectorSections ?? []
    }
  };
}

/** @type {Resource[]} */
export const resources = [
  createResource({
    id: 'resource-001',
    cardNumber: 'Tool card #1',
    slug: 'sme-reporting-tool',
    title: 'SME Reporting Tool',
    description:
      'The SME Reporting Tool helps small businesses create annual greenhouse gas emission reports and track their reduction efforts.',
    about:
      'The SME Reporting Tool is provided as a free resource to enable SMEs to create a climate report summarizing their annual greenhouse gas emissions, including the actions they are taking and the impact of their emissions reduction effort.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Monitor', 'Business Case', 'Options'],
    placements: {
      moduleSections: ['monitor:measuring-success'],
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'SME Climate Hub',
    access: 'Free',
    timeRequired: '2-3 hours',
    preparationNeeded:
      'Be ready with your measurable data and metrics to be used within the platform.',
    output: 'An annual greenhouse emission report',
    bestFor: 'SMEs in all sectors',
    format: 'Digital tool',
    toolLink: 'https://smeclimatehub.org/report-your-progress/'
  }),
  createResource({
    id: 'resource-002',
    cardNumber: 'Tool card #2',
    slug: 'circular-tracker',
    title: 'Circular Tracker',
    description:
      'CircularTracker delivers a comprehensive assessment, analyzing key circularity elements such as material recovery, product longevity, reuse potential, and end-of-life strategies empowering data-driven decisions.',
    about:
      'CircularTracker provides a fast, simple, and standardised way to assess and compare the circularity of your products. Powered by the ISO-compliant Product Circularity Data Sheet (PCDS), it delivers data-driven insights to support sustainable product decisions.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Monitor', 'Diagnose'],
    placements: {
      moduleSections: ['monitor:measuring-success'],
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: '+Impakt (a Sweco product)',
    access: 'Free',
    timeRequired: '2-3 hours',
    preparationNeeded:
      'Be ready with your measurable data and metrics to be used within the platform.',
    output: 'Visual report with overview of your products circularity',
    bestFor: 'All SMEs looking to deepen their understanding of circularity',
    format: 'Digital tool',
    toolLink: 'https://circulartracker.eu/'
  }),
  createResource({
    id: 'resource-003',
    cardNumber: 'Tool card #3',
    slug: 'circulytics-guide',
    title: 'Circulytics Guide',
    description:
      'A guide to show SMEs which analytics to use to best measure the circularity of their operations.',
    about:
      'Circulytics is a framework of indicators for tracking circular economy performance. It allows companies to highlight successes in their transition, and identify where to focus efforts for improvement in line with the three principles of a circular economy, all driven by design: eliminate waste and pollution, circulate products and materials, and regenerate nature.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Monitor'],
     placements: {
      moduleSections: ['monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: 'Half a day',
    preparationNeeded: 'None',
    output:
      'SMEs will gain a better understanding of what it means to measure circularity within the value chain.',
    bestFor: 'SMEs in all sectors',
    format: 'PDF',
    toolLink:
      'https://content.ellenmacarthurfoundation.org/web/753ec75d78ad3222/circulytics-indicators/?viewType=grid'
  }),
  createResource({
    id: 'resource-004',
    cardNumber: 'Tool card #4',
    slug: 'circular-transition-indicators',
    title: 'Circular Transition Indicators',
    description:
      'The CTI Tool helps businesses measure and improve their circular performance by guiding companies through the Circular Transition Indicators (CTI) process.',
    about:
      'The tool structures data and calculates outcomes, supporting businesses in taking concrete actions towards their circularity goals. It also supports users to reach out to internal stakeholders and value chain partners for data requests that avoid confidentiality issues.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Monitor'],
    placements: {
      moduleSections: ['monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'World Business Council for Sustainable Development (WBCSD)',
    access: 'Paid',
    timeRequired: '30-45 minutes',
    preparationNeeded:
      'Be ready with your measurable data and metrics to be used within the platform.',
    output:
      'The tool structures material-level data, calculates circularity outcomes, and generates clear reports for internal steering, investors and regulators, including ESRS E5 and Global Circularity Protocol insights.',
    bestFor: 'SMEs in all sectors',
    format: 'Digital tool',
    toolLink: 'https://ctitool.com/'
  }),
  createResource({
    id: 'resource-005',
    cardNumber: 'Tool card #5',
    slug: 'climate-action-planner',
    title: 'Climate and Action Planner',
    description:
      'A climate action plan outlines how an organization will reduce greenhouse gas emissions and prepare for the impacts of climate change.',
    about:
      'The SME Climate Hub Climate Action Planner is a free online tool that helps SMEs create a customised climate action plan. By answering a short self-assessment, businesses receive tailored recommendations to reduce emissions, cut costs, improve resilience, and build a practical sustainability roadmap with progress tracking and clear priorities.',
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:roadmap-milestones'],
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'SME Climate Hub',
    access: 'Sign up',
    timeRequired: '2-3 hours',
    preparationNeeded: 'None',
    output:
      'Actions aligned to your industry and business goals. Practical steps, business case insights, expected impacts, and a roadmap with trackable actions and priorities.',
    bestFor: 'SMEs in all sectors',
    format: 'Digital tool',
    toolLink: 'https://smeclimatehub.org/build-a-climate-action-plan/'
  }),
  createResource({
    id: 'resource-006',
    cardNumber: 'Tool card #6',
    slug: 'roadmap-to-circular-business',
    title: 'Roadmap to circular business',
    description:
      'A practical set of canvases designed to help businesses move from early circular action to intentional, long-term change.',
    about:
      'The Roadmap to Circular Business is a workshop tool that helps organisations turn circular economy ideas into a practical action plan. It supports teams in defining their circular ambition, prioritising actions, assigning responsibilities, and planning next steps. The output is a circular transition roadmap with clear priorities, milestones, and ownership.',
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'The good tribe',
    access: 'Free',
    timeRequired: '20-30 minutes',
    preparationNeeded:
      'Basic understanding of the organisation\'s circular opportunities, current capabilities, and key stakeholders. No detailed sustainability data is required.',
    output: 'A roadmap and plan to lead your business towards circular strategy implementation',
    bestFor:
      'All SMEs, particularly SMEs ready to move from opportunity identification to implementation.',
    format: 'MIRO board',
    toolLink: 'https://miro.com/templates/roadmap-to-circular-business/'
  }),
  createResource({
    id: 'resource-007',
    cardNumber: 'Tool card #7',
    slug: 'implementation-template',
    title: 'Implementation Template',
    description:
      'Tool for crystallising your circular business model by reflecting on its key building blocks, including your value proposition, infrastructure, customers and financing.',
    about:
      'A structured road mapping tool developed for manufacturing companies. Guides businesses through mapping their current state, defining ambitions, and building a concrete roadmap with prioritised actions. The tool uses a visual canvas approach with facilitation guidance, making it well suited to use in team workshops. Outputs include a prioritised action plan with owners and timelines.',
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:implementation-plan']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'Teknologiateollisuus',
    access: 'Free',
    timeRequired: '20-30 minutes',
    preparationNeeded:
      'A shortlisted circular opportunity or business model concept, plus basic customer, partner and financial information.',
    output: 'A completed Circular Business Model Canvas containing a vision statement.',
    bestFor: 'Manufacturing/production SMEs',
    format: 'Powerpoint',
    toolLink:
      'https://teknologiateollisuus.fi/wp-content/uploads/2024/08/CE2018_Business-model-canvas_v1-0.pptx'
  }),
  createResource({
    id: 'resource-008',
    cardNumber: 'Tool card #8',
    slug: 'miro-swot-analysis-template',
    title: 'Miro SWOT Analysis Template',
    description:
      'Free online collaborative whiteboard with ready-made SWOT templates, sticky notes, real-time team editing, and voting tools.',
    about:
      'A SWOT analysis applied to circular business models examines four dimensions to build a clear strategic picture. Strengths identify what your organisation already does well, weaknesses expose internal gaps, opportunities look outward at favourable conditions, and threats capture external risks. The real value comes from using these dimensions dynamically to reveal priorities and vulnerabilities.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case'],
    placements: {
      moduleSections:['business-case:business-case']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Miro',
    access: 'Sign up',
    timeRequired: '1-2 hours',
    preparationNeeded: 'An understanding of the circular strategy you wish to pursue with your business',
    output: 'Completed SWOT matrix with prioritised actions; exportable for sharing with team or advisors.',
    bestFor: 'SMEs running the transition readiness workshop from Module 4 with their team.',
    format: 'Either online Miro board or PDF if printed.',
    toolLink: 'https://miro.com/strategic-planning/swot-analysis/'
  }),
  createResource({
    id: 'resource-009',
    cardNumber: 'Tool card #9',
    slug: 'cti-tool-circular-transition-indicators',
    title: 'CTI Tool - Circular Transition Indicators',
    description:
      'Free online assessment that quantifies circular performance across material flows, waste, and resource use, with guidance to improve results and set SMART targets.',
    about:
      'The CTI indicators and methodology are one of the main building blocks that GCP uses for circularity metrics and the protocol is designed to align with ISO 59020, ESRS E5, GRI and the Greenhouse Gas Protocol. CTI Tool was developed together with the WBCSD for applying the Circular Transition Indicators in practice. By using CTI Tool you build the material level data and indicators that GCP expects, which means you can reuse your CTI work when you start working with GCP.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'WBCSD / Circular IQ',
    access: 'Paid',
    timeRequired: '2-4 hours',
    preparationNeeded: 'Prepare the relevant business, material flow and resource use data before starting.',
    output:
      'Circular performance score; risk and opportunity analysis; prioritised actions and SMART improvement targets.',
    bestFor: 'All SMEs',
    format: 'Digital tool',
    toolLink: 'http://ctitool.com/'
  }),
  createResource({
    id: 'resource-010',
    cardNumber: 'Tool card #10',
    slug: 'business-model-canvas-for-circular-economy',
    title: 'Business Model Canvas for Circular Economy',
    description:
      'Adapts the classic Business Model Canvas to map circular value creation, delivery, and capture for a chosen circular business model.',
    about:
      'The Circular Business Development Canvas Pack aims to empower businesses to transition from traditional linear models to innovative circular practices. By focusing on reducing waste, enhancing resource efficiency, and closing the loop, these canvases provide a structured approach to embedding circular economy principles into core operations, customers, and revenue. The ultimate goal is to foster a regenerative business model that benefits the environment and drives economic value and social impact.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Ellen MacArthur Foundation / Business Model Lab',
    access: 'Sign up',
    timeRequired: '2-4 hours (workshop format)',
    preparationNeeded: 'Print out PDF, pens and prepare participants',
    output:
      'Completed circular BMC; clear view of how the circular business model changes your operations.',
    bestFor: 'SMEs that have identified a preferred circular business model and want to develop it in detail.',
    format: 'PDF',
    toolLink:
      'https://circulareconomy.europa.eu/platform/sites/default/files/2025-02/Circular%2BBusiness%2BDevelopment%2BCanvas%2BPack%2B-%2BVersion%2B1%2C%2BJanuary%2B2025%2B-%2BThe%2BGood%2BTribe.pdf'
  }),
  createResource({
    id: 'resource-011',
    cardNumber: 'Tool card #11',
    slug: 'saxion-quickscan-circular-business-models',
    title: 'Saxion Quickscan Circular Business Models',
    description:
      'Helps SMEs rapidly assess which circular business models best fit their situation using a scored matrix approach.',
    about:
      'With the Quickscan CBM you gain insight into the possibilities of a circular business model for your company. You use a questionnaire to assess where you are now when it comes to sustainable and circular entrepreneurship. You then explore the possibilities for a more circular business model by choosing a basic type of circular business model and selecting options for building blocks such as the organisational form and the revenue model.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case', 'Diagnose'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Saxion University of Applied Sciences',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded:
      'General knowledge of your business and the opportunities you have identified in the previous module.',
    output: 'Prioritised CBM shortlist; scored overview of options; basis for business case development.',
    bestFor: 'SMEs new to circular business modelling wanting a structured starting point.',
    format: 'Excel',
    toolLink:
      'https://businessmodellab.nl/dam/jcr:d91068cb-94f8-4c9d-8ac0-c76a45ae1256/tool_quickscan-circulair-businessmodel%20EN.xlsx'
  }),
  createResource({
    id: 'resource-012',
    cardNumber: 'Tool card #12',
    slug: 'position-green-sustainability-roi-calculator',
    title: 'Position Green Sustainability ROI Calculator',
    description:
      'Online calculator that builds a data-backed business case for circular investment by computing financial return, payback time, and emissions impact using discounted cash flow logic.',
    about:
      'Calculate your sustainability ROI. Build your business case and prove the value of your sustainability work. See the financial return, payback period, and emissions impact of sustainability investments based on your inputs and real business drivers. Model real business scenarios, test cost and savings drivers, quantify financial and carbon impact, and export a decision-ready summary.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Position Green',
    access: 'Free',
    timeRequired: '30-60 minutes',
    preparationNeeded: 'Prepare relevant investment, cost, savings and emissions data before starting.',
    output:
      'ROI percentage, payback period, and emissions impact; scenario comparison; board-ready financial summary.',
    bestFor:
      'SMEs building a financial case for a circular investment, pilot project, or green finance application.',
    format: 'Digital tool',
    toolLink: 'https://www.positiongreen.com/drive-business-value/roi-calculator/'
  }),
  createResource({
    id: 'resource-013',
    cardNumber: 'Tool card #13',
    slug: 'circular-economy-trend-cards',
    title: 'Circular Economy Trend Cards',
    description:
      'Provides users with an overview of the current trends in the circular economy space with the aim of inspiring them.',
    about:
      'Printable or digital cards covering key CE trends, opportunities, and threats. Designed to facilitate team discussions and feed into SWOT analysis. Prompts strategic thinking about which circular options are relevant given market and regulatory trends. Freely available and easy to use in a workshop setting.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections:['business-case:business-models']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'CIRCit Norden / Rise Research Institutes',
    access: 'Sign up',
    timeRequired: '1-3 hours',
    preparationNeeded: 'None',
    output:
      'Identified circular economy trends, opportunities, threats, and discussion inputs for SWOT analysis or future business model ideas.',
    bestFor: 'All SMEs',
    format: 'PDF',
    toolLink: 'https://circitnord.com/tools/circular-economy-trend-cards/?utm_source=chatgpt.com'
  }),
  createResource({
    id: 'resource-014',
    cardNumber: 'Tool card #14',
    slug: 'circular-pathfinder',
    title: 'Circular Pathfinder',
    description:
      'Helps companies identify suitable circular design strategies for their products through a guided decision process.',
    about:
      'An ideation tool that helps SMEs explore and identify the most suitable circular pathways for their products. Based on best practices from other companies, you answer a few questions and receive tailored circular strategy recommendations. Simple, free, and requires no prior circular economy expertise.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections:['business-case:business-models']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'European Commission / IDEAL&CO',
    access: 'Free',
    timeRequired: '15-30 minutes',
    preparationNeeded:
      'Users should have basic knowledge of their product, materials, lifecycle, and business model.',
    output:
      'Suggested circular design strategies and guidance on relevant circular economy approaches for the product.',
    bestFor: 'Manufacturing SMEs, product developers, and companies exploring circular product design or redesign.',
    format: 'Digital tool',
    toolLink: 'https://www.ideal-co.nl/pathfinder/'
  }),
  createResource({
    id: 'resource-015',
    cardNumber: 'Tool card #15',
    slug: 'circular-strategies-wheel-workshop',
    title: 'Circular Strategies Wheel Workshop',
    description: 'To identify circular strategies that fit your business',
    about:
      'The Circular Strategies Wheel gives your team a shared visual overview of circular strategies across the three phases of a product or service\'s life: start of life, product life, and end of life. It turns circularity from an abstract idea into something tangible and actionable, helping your team connect relevant strategies to your business context. By working through it together, you identify key opportunities, areas of interest, and practical barriers, creating a grounded, team-owned starting point for building your circular business model.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Circular Strategies Wheel Workshop',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Print out, post its, pens and people',
    output: 'An overview of the circular strategies most relevant to your SME',
    bestFor: 'All SMEs',
    format: 'Miro board or print out',
    toolLink: 'https://ddc.dk/wp-content/uploads/2020/10/Circular_strategies_wheel_canvas.pdf'
  }),
  createResource({
    id: 'resource-016',
    cardNumber: 'Tool card #16',
    slug: 'circular-economy-toolkit',
    title: 'Circular Economy toolkit',
    description: 'To get an overview of how circular your product or service is at this stage',
    about:
      'Learn to make smart material choices by asking the right questions. These steps will help you make better choices about what materials go into your products as well as their impact on the wider system.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose', 'Options'],
    placements: {
      moduleSections: ['diagnose:maturity-assessment']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Accenture',
    access: 'Free',
    timeRequired: '15-20 minutes',
    preparationNeeded: 'Knowledge of your product',
    output: 'Circularity overview which can be emailed',
    bestFor: 'SMEs in all sectors',
    format: 'Digital tool',
    toolLink: 'http://www.circulareconomytoolkit.org/Assessmenttool.html'
  }),
  createResource({
    id: 'resource-017',
    cardNumber: 'Tool card #17',
    slug: 'up2circ-assessment',
    title: 'Up2Circ Assessment',
    description:
      'Assists SMEs in self evaluating their current standing in their circular journey by asking simple questions and providing insights based on answers.',
    about:
      'This Up2Circ Circularity Assessment Tool will help you to become familiar with the circular economy, score how well you integrate circular strategies into your business, and discover opportunities for improvement and challenges to address.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:maturity-assessment']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Up2Circ',
    access: 'Free',
    timeRequired: '15-20 minutes',
    preparationNeeded: 'None',
    output: 'Self assessment and recommendations',
    bestFor: 'SMEs in all sectors',
    format: 'Digital tool',
    toolLink: 'https://up2circ.eu/up2circ-assessment/#gf_9'
  }),
  createResource({
    id: 'resource-018',
    cardNumber: 'Tool card #18',
    slug: 'smart-circular-economy-assessment-scea',
    title: 'Smart Circular Economy Assessment (SCEA)',
    description: 'Helps SMEs benchmark their current CE level and understand key gaps.',
    about:
      'Learn to make smart material choices by asking the right questions. These steps will help you make better choices about what materials go into your products as well as their impact on the wider system.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:maturity-assessment']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: '30-45 min',
    preparationNeeded: 'Basic business data',
    output: 'CE maturity overview across 5 dimensions with visual output and priority recommendations.',
    bestFor: 'SMEs new to CE want a quick, accessible starting point.',
    format: 'PDF',
    toolLink: 'http://ellenmacarthurfoundation.org/smart-material-choices'
  }),
  createResource({
    id: 'resource-019',
    cardNumber: 'Tool card #19',
    slug: 'i-go-assessment-tool',
    title: 'I-GO Assessment Tool',
    description: 'Assesses organisational readiness for resource efficiency and circularity.',
    about:
      'I-GO helps SMEs become more productive, competitive, and resilient by making it easier to access tailored knowledge and support services on resource efficiency. It is the I-GO Assistant tool that guides businesses through self-assessment, suggests practical improvements, and connects them with customised support based on their specific needs.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose', 'Options'],
    placements: {
      moduleSections: ['diagnose:maturity-assessment']
    },
    sector: 'Cross-sector',
    language: 'English, Ukrainian, Russian, Portuguese, Spanish, Georgian, Arabic',
    provider: 'International Green Economy Association / GGKP',
    access: 'Free',
    timeRequired: '45-60 minutes',
    preparationNeeded: 'Project data, operations info',
    output: 'Structured diagnosis of green economy readiness with scored indicators.',
    bestFor: 'SMEs with some sustainability activity looking for a more structured review.',
    format: 'Digital tool',
    toolLink: 'https://igosolution.org/'
  }),
  createResource({
    id: 'resource-020',
    cardNumber: 'Tool card #20',
    slug: 'material-flow-analysis-mfa-workshop',
    title: 'Material Flow Analysis (MFA) Workshop',
    description:
      'Maps materials used in production and helps to showcase material flows of your products',
    about:
      'Material Flow Analysis gives a quantitative overview of the flow of materials in a defined system which for instance can be the flow of materials in a manufacturing company. An MFA always consists of a system boundary, one or more processes, material flows and stocks of materials within processes.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:baseline-mapping']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'Ready2Loop',
    access: 'Sign up',
    timeRequired: '5-12 hours',
    preparationNeeded: 'Material, energy and waste data',
    output:
      'Overview of flows of materials in the system. Overview of the quantities and type of materials utilised in the system.',
    bestFor: 'SMEs with physical products',
    format: 'Print out',
    toolLink: 'https://ready2loop.org/en/981/Material+Flow+Analysis+%28MFA%29'
  }),
  createResource({
    id: 'resource-021',
    cardNumber: 'Tool card #21',
    slug: 'stan-tool',
    title: 'STAN Tool',
    description: 'Visualizes the material flow data of your products/services',
    about:
      'STAN allows users to create graphical MFA models using predefined elements such as processes, flows, system boundaries, and text fields. Users can input or import data like mass flows, stocks, concentrations, and transfer coefficients across different layers (materials, substances, energy) and time periods. The software can calculate unknown values automatically and visualize results as Sankey diagrams, where flow widths represent quantities. Models can also be printed or exported, and Microsoft Excel is used for importing and exporting data.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:baseline-mapping']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'STAN2WEB',
    access: 'Sign up',
    timeRequired: 'Half-day to a day',
    preparationNeeded: 'Preparing the material data, their quantity and uses.',
    output: 'MFA graphics',
    bestFor: 'Advanced users with detailed material data',
    format: 'Digital tool',
    toolLink: 'https://www.stan2web.net/download%20files/software/STAN-2-7-101-EN.zip'
  }),
  createResource({
    id: 'resource-022',
    cardNumber: 'Tool card #22',
    slug: 'hotspot-analysis-tool-ggkp',
    title: 'Hotspot Analysis Tool (GGKP)',
    description: 'Provides sector profile for each country',
    about:
      'The SCP-HAT Country Profile tool provides an overview of a country\'s environmental performance across key sustainable consumption and production policy areas, including materials use, climate change, energy, water, and pollution. It helps policymakers, NGOs, and the public identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:hotspot-analysis']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Green Growth Knowledge Platform',
    access: 'Free',
    timeRequired: 'Half day',
    preparationNeeded: 'Resource use data, process list',
    output:
      'Users can identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis.',
    bestFor: 'All SMEs across all sectors',
    format: 'Digital tool',
    toolLink: 'https://scp-hat.org/module-2-scp-hotspots/'
  }),
  createResource({
    id: 'resource-023',
    cardNumber: 'Tool card #23',
    slug: 'footprint-calculator',
    title: 'Footprint Calculator',
    description:
      'Displays carbon footprint and eco-cost results by lifecycle stage, with additional LCIA insights to identify the most impactful processes',
    about:
      'The Circular Strategies Scanner helps manufacturing companies understand, map, and improve their circular economy strategies across products and operations. It is typically used in workshops to identify current initiatives, explore new opportunities for circularity, and support innovation and shared strategic vision.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:hotspot-analysis']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'The footprinters',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded: 'Material, energy, and waste data',
    output: 'Carbon footprint and eco-cost results by lifecycle stage.',
    bestFor: 'Manufacturing SMEs with physical products',
    format: 'Digital tool',
    toolLink: 'https://footprintcalc.org/?utm_source=chatgpt.com#download'
  }),
  createResource({
    id: 'resource-024',
    cardNumber: 'Tool card #24',
    slug: 'future-adaptive-design-guide',
    title: 'Future Adaptive Design Guide',
    description:
      'Supports circularity and identifies strategies for extending product life while reducing environmental impact.',
    about:
      'Future adaptive design helps companies reduce business risks in circular business models by creating durable, flexible, and upgradeable products that remain useful and attractive over longer lifetimes. The approach provides tools and methods to support circular business innovation, improve profitability, identify strategies for extending product life, and reduce environmental impact.',
    journeyPhase: 'Diagnose',
    journeyPhases: ['Diagnose'],
    placements: {
      moduleSections: ['diagnose:hotspot-analysis']
    },
    sector: 'Manufacturing',
    language: 'English',
    provider: 'RISE Research',
    access: 'Free',
    timeRequired: 'Flexible - workshop format',
    preparationNeeded: 'Product or process design information',
    output: 'Design-focused hotspots; adaptation opportunities for circularity.',
    bestFor: 'SMEs working with product or process design for circular business models.',
    format: 'PDF',
    toolLink:
      'https://www.ri.se/en/system-innovation/circular-transition/expertise/future-adaptive-design-for-a-circular-economy'
  }),
  createResource({
    id: 'resource-025',
    cardNumber: 'Tool card #25',
    slug: 'milestones-and-action-planning-tool',
    title: 'Milestones and Action Planning Tool',
    description:
      'To develop a clear set of measurable milestones to monitor progress towards CE strategy',
    about:
      "A practical milestone-setting framework designed to help organisations break circular strategies into trackable steps. Helps teams identify key actions, assign ownership, and define what 'progress' looks like at each stage.",
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:roadmap-milestones']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'The Good Tribe',
    access: 'Free',
    timeRequired: 'Half day workshop',
    preparationNeeded: 'Clear understanding of the strategies to be implemented, who is responsible for what, desired outcomes.',
    output: 'Milestones for circular strategy implementation',
    bestFor: 'SMEs and larger organisations that are about to test or have tested circular initiatives.',
    format: 'Miro board',
    toolLink:
      'https://miro.com/templates/roadmap-to-circular-business/'
  }),
  createResource({
    id: 'resource-026',
    cardNumber: 'Tool card #26',
    slug: 'circular-loop-designer',
    title: 'The Circular Loop Designer',
    description:
      'To help teams visually map and design closed material loops for their business, sketching how materials, products, and processes flow between actors in a circular system, and identifying which parties need to be involved at each stage',
    about:
      "The Circular Loop Designer is a free, browser-based drawing tool that lets teams sketch closed material loops using a purpose-built library of icons and arrows. Users can start from an empty canvas or select from a range of pre-built examples, covering four types of circular loop logic: closing a material loop as completely as possible; keeping materials in circulation for as long as possible; sourcing and retaining materials as locally as possible; and radically reducing material use across the loop. Arrows are colour-coded to distinguish sustainable flows (green), traditional flows (red), and flows still under development (blue), making it easy to show the current state alongside the desired future state. Parties and roles can be added at each stage of the loop, turning the diagram into a stakeholder map as well as a material flow map.",
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:test-and-pilot']
    },
    sector: 'Cross-sector',
    language: 'English, Dutch',
    provider: 'Saxion University of Applied Sciences',
    access: 'Sign up',
    timeRequired: '4 hours',
    preparationNeeded: 'Low barrier to entry; free online tool, no installation required. A free Businessmodellab account is needed to save designs; beginners can start from one of the built-in examples',
    output: 'A shareable visual diagram of your circular material loop, exportable as an XML file, showing flows, actors, and the status of each connection (existing, sustainable, or still under development)',
    bestFor: 'SMEs at starter level who want to make their circular strategy concrete and visual — particularly useful for communicating loop designs to partners, suppliers, or internal stakeholders who need to see the full picture before committing',
    format: 'Online platform',
    toolLink:
      'https://businessmodellab.nl/en/tools/circular-loop-designer'
  }),
  createResource({
    id: 'resource-027',
    cardNumber: 'Tool card #27',
    slug: 'ecoCEO',
    title: 'ecoCEO',
    description:
      'To simulate running a circular electronics company making decisions on resource management, production processes, and revenue models, while responding to external disruptions such as policy changes and market shocks that test the resilience of circular vs. linear strategies',
    about:
      "ecoCEO is a free, web-based serious game developed by VITO with support from EIT Raw Materials. Players manage a company producing electronic goods (microchips, smartphones, and e-bikes) making decisions on which raw materials to use, which production processes to invest in, and which revenue models to adopt. The game tests those decisions against unforeseen events including policy measures, resource scarcity, and market disruptions, making visible how circular strategies (take-back systems, reuse, design-for-repair, product-service systems) improve business resilience compared to linear approaches.",
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    language: 'English',
    provider: 'VITO / EIT Raw Materials',
    access: 'Free',
    timeRequired: '1 – 2 Hours',
    preparationNeeded: 'Low, web-based, no installation or account required for players; teachers/facilitators can create a free account to access supporting materials',
    output: 'Experiential understanding of how circular business decisions (recycling, take-back, repair, product-service systems) affect company performance and resilience; discussion material for debriefing on CE strategy trade-offs',
    bestFor: 'SMEs and teams at an introductory stage of CE engagement who benefit from learning through doing; also useful as an icebreaker or warm-up activity before deeper strategy workshop',
    format: 'Online platform',
    toolLink:
      'https://ecoceo.vito.be/en/ecoceo-game'
  }),
  createResource({
    id: 'resource-028',
    cardNumber: 'Tool card #28',
    slug: 'sme-carbon-footprint-calculator',
    title: 'SME Carbon Footprint Calculator',
    description:
      'The openLCA online tool aims to assist users in performing a self-assessment and includes free demo sessions on how to use the tool.',
    about:
      'openLCA is a modular tool for sustainability assessment and life cycle modelling. It is open source, customisable, and can be used to create models at different levels of complexity.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Diagnose', 'Business Case', 'Monitor'],
    placements: {
      moduleSections: ['monitor:measuring-success']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Carbon Trust',
    access: 'Free',
    timeRequired: '2-4 hours',
    preparationNeeded: 'You will need the emissions data of your company.',
    output: 'A full LCA report',
    bestFor: 'All SMEs concerned with emissions reduction',
    format: 'PDF',
    toolLink: 'https://www.openlca.org/onlinelca/'
  }),
  createResource({
    id: 'resource-029',
    cardNumber: 'Tool card #29',
    slug: 'sustainable-procurement-platform',
    title: 'Sustainable Procurement Platform',
    description:
      'A repository of knowledge for procurement across a large variety of sectors, with search filters to guide users to tools suited to their needs.',
    about:
      'The Sustainable Procurement Platform Resource Centre is a knowledge hub run by ICLEI\'s Procura+ network, bringing together resources on sustainable, circular, and innovation-focused public procurement across Europe and beyond.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Options', 'Business Case', 'Implement'],
    placements: {
      moduleSections: ['business-case:circular-business-models']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'ICLEI',
    access: 'Free',
    timeRequired: 'Continuous',
    preparationNeeded: 'None',
    output: 'Procurement guidance, case studies and supporting resources',
    bestFor: 'Any SME that procures goods and services',
    format: 'PDF',
    toolLink: 'https://sustainable-procurement.org/resource-centre/?c=search&language=English&product=textiles'
  }),
  createResource({
    id: 'resource-030',
    cardNumber: 'Tool card #30',
    slug: 'packscore',
    title: 'PackScore',
    description:
      'A simplified eco-design tool for early-stage packaging design decisions, showing the recyclability impact of design choices before production begins.',
    about:
      'PackScore is a free sustainable design tool for plastic packaging designers. It enables users to assess different design iterations, compare packaging options and understand recyclability impacts using a traffic-light system.',
    journeyPhase: 'None',
    journeyPhases: [],
    sector: 'Plastics',
    language: 'English',
    provider: 'British Plastics Federation',
    access: 'Sign up',
    timeRequired: '10-20 minutes',
    preparationNeeded: 'Draft packaging concept, including material type, closure, labels and coatings.',
    output: 'Recyclability rating A-F with a traffic-light path showing the impact of each design decision',
    bestFor: 'Packaging designers, brand managers and retailers at the early design stage',
    format: 'Digital tool',
    toolLink: 'https://www.bpf.co.uk/design/packscore/packscore.aspx'
  }),
  createResource({
    id: 'resource-031',
    cardNumber: 'Tool card #31',
    slug: 'circular-packaging-assessment-tool',
    title: 'Circular Packaging Assessment Tool',
    description:
      'A free web tool that assesses packaging across five system-wide dimensions, including design for recyclability, community access and packaging fate.',
    about:
      'The tool goes beyond technical recyclability to help brands, retailers and packaging designers understand system-level recyclability, improvement recommendations and EPR compliance guidance.',
    journeyPhase: 'None',
    journeyPhases: [],
    sector: 'Plastics',
    language: 'English',
    provider: 'The Recycling Partnership',
    access: 'Sign up',
    timeRequired: '30-60 minutes',
    preparationNeeded: 'Know your packaging format, material and design features.',
    output: 'System-level recyclability assessment, improvement recommendations and EPR compliance guidance',
    bestFor: 'Brands, retailers and packaging designers',
    format: 'Digital tool',
    toolLink: 'https://www.bpf.co.uk/design/packscore/packscore.aspx'
  }),
  createResource({
    id: 'resource-032',
    cardNumber: 'Tool card #32',
    slug: 'recyclass-online-class',
    title: 'RecyClass Online Class',
    description:
      'A self-assessment tool for plastic, aluminium and steel packaging that produces a tailored recyclability report.',
    about:
      'The RecyClass Online Tool helps industry users assess the recyclability of packaging and provides country-specific insights on collection, sorting and recycling infrastructure in Europe.',
    journeyPhase: 'None',
    journeyPhases: [],
    sector: 'Plastics',
    language: 'English',
    provider: 'RecyClass',
    access: 'Sign up',
    timeRequired: '15-30 minutes per packaging item',
    preparationNeeded: 'Knowledge of your packaging materials.',
    output: 'Recyclability class A-C and a downloadable PDF report with improvement recommendations',
    bestFor: 'Manufacturers, brands and retailers using or designing plastic packaging',
    format: 'Digital tool',
    toolLink: 'https://recyclass.eu/testing/online-tool/'
  }),
  createResource({
    id: 'resource-033',
    cardNumber: 'Tool card #33',
    slug: 'plasticiq',
    title: 'PlasticIQ',
    description:
      'A data-driven planning tool that calculates the circularity of plastic packaging and helps companies model reduction, reuse, redesign and substitution solutions.',
    about:
      'Plastic IQ is a digital tool to help companies improve plastic packaging strategy, reduce plastic waste and build actionable strategies with cost and carbon impact metrics.',
    journeyPhase: 'None',
    journeyPhases: [],
    sector: 'Plastics',
    language: 'English',
    provider: 'Plastic IQ',
    access: 'Paid',
    timeRequired: '1-3 hours',
    preparationNeeded: 'Packaging data by type, weight and volume, plus current sustainability targets.',
    output: 'Company-specific dashboard with circularity score, cost and carbon impact, and an actionable strategy',
    bestFor: 'Manufacturers, brands and retailers using or designing plastic packaging',
    format: 'Digital tool',
    toolLink: 'https://recyclass.eu/testing/online-tool/'
  }),
  createResource({
    id: 'resource-034',
    cardNumber: 'Tool card #34',
    slug: 'green-key-toolbox',
    title: 'Green Key Toolbox',
    description:
      'A practical toolbox divided into 13 topics that match Green Key criteria and help tourism SMEs prepare for circular and environmental improvements.',
    about:
      'The Green Key Toolbox brings together helpful tips, ready-to-use templates and real-world best practice examples for tourism businesses working towards Green Key certification and improved environmental standards.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    language: 'English',
    provider: 'Green Key',
    access: 'Sign up',
    timeRequired: '1-2 days',
    preparationNeeded: 'None',
    output: 'Better understanding of what it takes to be circular in the tourism sector',
    bestFor: 'Hotels, resorts and other tourism service industries',
    format: 'Digital tool',
    toolLink: 'https://www.greenkey.global/green-key-toolbox-1'
  }),
  createResource({
    id: 'resource-035',
    cardNumber: 'Tool card #35',
    slug: 'hcmi-hotel-carbon-measurement-initiative',
    title: 'HCMI - Hotel Carbon Measurement Initiative',
    description:
      'A free standardised methodology and tool for hotels to calculate the carbon footprint of stays and meetings.',
    about:
      'HCMI is a globally recognised carbon measurement tool for the hospitality industry, giving hotels standardised data to track emissions, benchmark against peers and meet corporate buyer requirements.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    language: 'English',
    provider: 'Sustainable Hospitality Alliance (SHA) & WTTC',
    access: 'Sign up',
    timeRequired: 'Ongoing, data input per billing period',
    preparationNeeded: 'Energy, water and fuel consumption data by property.',
    output: 'Carbon footprint per occupied room, per meeting space hour and total property',
    bestFor: 'Hotels and accommodation providers of any size globally',
    format: 'Digital tool',
    toolLink: 'http://sustainablehospitalityalliance.org/resource/hotel-carbon-measurement-initiative'
  }),
  createResource({
    id: 'resource-036',
    cardNumber: 'Tool card #36',
    slug: 'cross-re-tour-aat-tool',
    title: 'Cross-Re-Tour AAT Tool',
    description:
      'A diagnostic tool for tourism SMEs that profiles progress towards digital and green transformation and identifies opportunities to improve competitiveness.',
    about:
      'The Cross-Re-Tour Automated Assessment Tool is a free online diagnostic tool for tourism SMEs. It assesses environmental practices, innovation capacity and strategic orientation to help businesses understand their wider sustainability readiness.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    language: 'English',
    provider: 'Cross-Re-Tour consortium',
    access: 'Sign up',
    timeRequired: '20-40 minutes',
    preparationNeeded: 'No preparation requirements are listed; the tool is designed to be completed from existing business knowledge.',
    output: 'Profile across strategic orientation, innovation capabilities and sustainable innovation capabilities',
    bestFor: 'Tourism SMEs looking to understand readiness for digital and green transition',
    format: 'Digital tool',
    toolLink: 'https://crossretour.eu/cross-re-tour-aat-tool/'
  }),
  createResource({
    id: 'resource-037',
    cardNumber: 'Tool card #37',
    slug: 'circular-tourism-self-assessment',
    title: 'Circular Tourism Self Assessment',
    description:
      'A circular economy management and monitoring tool for tourism businesses and destinations.',
    about:
      'The Circular Tourism Tools assess tourism impact from a circular economy perspective at destination and industry level. The assessment produces scores, collaboration ratings and a curated dataset of global best practices.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    language: 'English',
    provider: 'Interreg',
    access: 'Sign up',
    timeRequired: '2-4 hours',
    preparationNeeded: 'Basic awareness of energy, water, waste, sourcing practices and stakeholder relationships is helpful.',
    output: 'Circularity score, question breakdown, collaboration rating and best-practice dataset',
    bestFor: 'Hotels, guesthouses and accommodation providers of all sizes',
    format: 'Digital tool',
    toolLink: 'https://www.incircle-kp.eu/self-assessment/'
  }),
  createResource({
    id: 'resource-038',
    cardNumber: 'Tool card #38',
    slug: 'breeam-in-use-sustainable-standard',
    title: 'BREEAM In-Use Sustainable Standard',
    description:
      'A tool for exploring BREEAM data on certified building assessments and integrating it with websites, tools and software.',
    about:
      'The BREEAM API is a RESTful web service that gives developers programmatic access to BREEAM GreenBook data, including current listings and ratings from certified building and infrastructure assessments.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    language: 'English',
    provider: 'BREEAM',
    access: 'Paid',
    timeRequired: '60 minutes',
    preparationNeeded: 'None',
    output: 'Deeper understanding of certification assessments and suitable certification options',
    bestFor: 'All construction SMEs',
    format: 'Digital tool',
    toolLink: 'https://breeam.com/tools/api'
  }),
  createResource({
    id: 'resource-039',
    cardNumber: 'Tool card #39',
    slug: 'circular-construction-platform',
    title: 'Circular Construction Platform',
    description:
      'An AI-driven platform for pre-demolition auditing, digital material passports and matching reusable construction materials between projects.',
    about:
      'Concular digitises building materials before demolition or renovation, identifies what can be reused, matches materials with buyers and helps turn disposal costs into revenue.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    language: 'English',
    provider: 'Concular',
    access: 'Paid',
    timeRequired: 'Variable, with pre-demolition audits typically taking days to weeks',
    preparationNeeded: 'Building access for on-site or digital material audit.',
    output: 'Digital building resource passport, reuse potential assessment and material marketplace listing',
    bestFor: 'Construction SMEs involved in demolition, refurbishment or new build procurement',
    format: 'Digital tool',
    toolLink: 'https://concular.de/concular-one/'
  }),
  createResource({
    id: 'resource-040',
    cardNumber: 'Tool card #40',
    slug: 'madaster-materials-passport-platform',
    title: 'Madaster - Materials Passport Platform',
    description:
      'An online platform for creating digital material passports for buildings, including composition, origin, circularity score and residual value.',
    about:
      'Madaster tracks and traces products and materials throughout their lifecycle, supporting material reuse, recyclability, recovery and compliance with standards such as LEED, BREEAM, EU Taxonomy and digital product passport reporting.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    language: 'English',
    provider: 'BRE Group (Building Research Establishment)',
    access: 'Paid',
    timeRequired: 'Ongoing, registers materials throughout the project lifecycle',
    preparationNeeded: 'BIM file or Excel spreadsheet with material data.',
    output: 'Digital material passport, circularity indicator score and embodied carbon report',
    bestFor: 'Construction SMEs, architects and developers managing new build or renovation',
    format: 'Digital tool',
    toolLink: 'https://madaster.com/circularity-insights/'
  }),
  createResource({
    id: 'resource-041',
    cardNumber: 'Tool card #41',
    slug: 'bre-smartwaste',
    title: 'BRE SMARTWaste',
    description:
      'A cloud-based construction waste and sustainability tracking platform for waste, materials, carbon, water and transport emissions.',
    about:
      'SMARTWaste helps construction SMEs track waste and carbon data in real time, reduce disposal costs and generate audit-quality BREEAM compliance evidence.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    language: 'English',
    provider: 'BRE Group (Building Research Establishment)',
    access: 'Sign up',
    timeRequired: 'Ongoing / per project, with data entry taking minutes per input',
    preparationNeeded: 'Project registration required; scales from 1 to 100+ projects.',
    output: 'Project waste reports, carbon calculations and BREEAM evidence packages',
    bestFor: 'Construction SMEs managing new build, refurbishment or demolition projects',
    format: 'Digital tool',
    toolLink: 'https://bregroup.com/products/smartwaste/assessment-tool'
  }),
  createResource({
    id: 'resource-042',
    cardNumber: 'Tool card #42',
    slug: 'levels-eu-sustainable-buildings-framework',
    title: 'Level(s) - EU Sustainable Buildings Framework',
    description:
      'A free EU framework for assessing and reporting building sustainability performance across the full lifecycle.',
    about:
      'Level(s) helps construction SMEs measure and report building sustainability across carbon, materials, water, health and life-cycle cost, supporting alignment with EU sustainability requirements.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    language: 'English',
    provider: 'European Commission (DG Environment)',
    access: 'Sign up',
    timeRequired: 'Variable, used across the full project lifecycle',
    preparationNeeded: 'None for basic use; building data for full LCA.',
    output: 'Lifecycle sustainability assessment and compliance report',
    bestFor: 'Construction SMEs, architects, developers and residential and commercial building projects',
    format: 'Digital tool',
    toolLink: 'https://green-forum.ec.europa.eu/green-business/levels_en'
  }),
  createResource({
    id: 'resource-043',
    cardNumber: 'Tool card #43',
    slug: 'farm-carbon-toolkit',
    title: 'Farm Carbon Toolkit',
    description:
      'A carbon calculator for farms and growers that produces carbon output reports for farm, product and supply-chain emissions work.',
    about:
      'The Farm Carbon Toolkit calculator is designed for farmers and growers, and can also support researchers, agricultural professionals and consultants delivering carbon footprints.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['agriculture'],
      sectorSections: ['agriculture:relevant-tools']
    },
    sector: 'Agriculture',
    language: 'English',
    provider: 'Farm Carbon',
    access: 'Sign up',
    timeRequired: '3-4 hours',
    preparationNeeded: 'Overview of your land, produce inputs and outputs.',
    output: 'Carbon output report',
    bestFor: 'Farms looking to reduce scope emissions or value-chain emissions',
    format: 'Digital tool',
    toolLink: 'https://calculator.farmcarbontoolkit.org.uk/'
  }),
  createResource({
    id: 'resource-044',
    cardNumber: 'Tool card #44',
    slug: 'food-circularity-check',
    title: 'Food Circularity Check',
    description:
      'A circularity self-assessment tool designed to help food companies understand their circular economy maturity level.',
    about:
      'The Food Circularity Check is an online self-assessment developed for food and agri-food businesses. It gives companies a structured picture of how circular their operations are and where gaps and opportunities exist.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['agriculture'],
      sectorSections: ['agriculture:relevant-tools']
    },
    sector: 'Agriculture',
    language: 'English',
    provider: 'Circular Economy for Food',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Production and supply-chain data needed.',
    output: 'Downloadable summary showing completion percentage across six categories',
    bestFor: 'Farms looking to reduce scope emissions or value-chain emissions',
    format: 'Questionnaire',
    toolLink: 'https://circulareconomyforfood.eu/en/food-circularity-check/'
  }),
  createResource({
    id: 'resource-045',
    cardNumber: 'Tool card #45',
    slug: 'o-farms-circular-toolkit',
    title: 'O-Farms Circular Toolkit',
    description:
      'A set of six practical tools for agri-SMEs, entrepreneur support organisations and practitioners working with circular agribusinesses.',
    about:
      'The Circular Toolkit by O-Farms supports SMEs in finding inspiration for circular product development, assessing circularity, discovering opportunities, amplifying impact and increasing revenue.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['agriculture'],
      sectorSections: ['agriculture:relevant-tools']
    },
    sector: 'Agriculture',
    language: 'English',
    provider: 'O-farms',
    access: 'Sign up',
    timeRequired: '2-3 hours per workshop',
    preparationNeeded: 'Farm nutrient and input data required.',
    output: 'Completed worksheets to guide internal decisions and external conversations about circular strategy',
    bestFor: 'Arable, livestock and mixed-farm SMEs',
    format: 'Digital tool',
    toolLink: 'https://circulartoolkit.org/'
  }),
  createResource({
    id: 'resource-046',
    cardNumber: 'Tool card #46',
    slug: 'wrap-food-waste-reduction-toolkit',
    title: 'WRAP Food Waste Reduction Toolkit',
    description:
      'Practical measurement and tracking tools for agri-food businesses to quantify food waste, identify hotspots and set reduction targets.',
    about:
      'This WRAP data capture sheet supports the Target, Measure, Act principles for food waste reduction and aligns with Sustainable Development Goal 12.3 and the international Food Loss & Waste Standard.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['agriculture'],
      sectorSections: ['agriculture:relevant-tools']
    },
    sector: 'Agriculture',
    language: 'English',
    provider: 'WRAP (Waste & Resources Action Programme)',
    access: 'Free',
    timeRequired: 'Self-directed; modular use',
    preparationNeeded: 'Basic food waste data helpful.',
    output: 'Waste measurement reports, hotspot analysis and action plan',
    bestFor: 'Farmers, growers, food manufacturers and retailers',
    format: 'Digital tool',
    toolLink: 'https://www.wrap.ngo/resources/tool/food-loss-and-waste-data-capture-sheet'
  }),
  createResource({
    id: 'resource-047',
    cardNumber: 'Tool card #47',
    slug: 'circular-toolbox',
    title: 'Circular Toolbox',
    description:
      'A step-by-step toolbox that helps apparel brands adopt circular business models and independently drive circular innovation.',
    about:
      'The Circular Toolbox guides apparel brands through a five-step circular innovation process, from team formation and customer understanding to prototyping, fine-tuning and piloting a new concept.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    language: 'English/Dutch',
    provider: 'Circular Economy',
    access: 'Sign up',
    timeRequired: '10-month process',
    preparationNeeded: 'Leadership sign-off and a cross-functional team.',
    output: 'Guided five-step circular innovation process from team formation to piloting',
    bestFor: 'Textile SMEs and brands',
    format: 'Digital tool',
    toolLink: 'https://thecirculartoolbox.com/html/the-circular-toolbox-is-a-step-by-step-guide-for-apparel-brands-to-design-and-launch-a-rental-or-resale-pilot-in-10-months-the-toolbox-provides-resources-to-accompany-you-along-your-circular-innovation-journey-5ici.html'
  }),
  createResource({
    id: 'resource-048',
    cardNumber: 'Tool card #48',
    slug: 'rehub-eu-textile-recycling',
    title: 'Re.Hub (EU Textile Recycling)',
    description:
      'An EU mapping tool and network for textile collection, sorting and recycling infrastructure.',
    about:
      'Re.Hub connects businesses to Europe\'s textile recycling network and helps identify local collection, sorting and recycling partners to close textile material loops.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    language: 'English',
    provider: 'Re.Hub / European Commission',
    access: 'Sign up',
    timeRequired: 'Self-directed browsing',
    preparationNeeded: 'None',
    output: 'Map of local recycling partners and routes',
    bestFor: 'Textiles SMEs seeking recycling solutions',
    format: 'Digital tool',
    toolLink: 'https://www.rehubs.eu/_files/ugd/e3cc3f_7d307d9d9c084c82b5b23ee5ebbbd493.pdf'
  }),
  createResource({
    id: 'resource-049',
    cardNumber: 'Tool card #49',
    slug: 'fibretrace',
    title: 'Fibretrace',
    description:
      'A fibre traceability platform using embedded tracers and blockchain to authenticate sustainability claims from raw material to finished garment.',
    about:
      'Fibretrace gives textile businesses end-to-end visibility of the supply chain, supporting verified sustainability claims from fibre to finished product.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    language: 'English',
    provider: 'Fibretrace',
    access: 'Paid',
    timeRequired: 'Ongoing / integration required',
    preparationNeeded: 'Platform onboarding needed.',
    output: 'Real-time supply-chain traceability data',
    bestFor: 'Textile and apparel SMEs',
    format: 'Digital tool',
    toolLink: 'https://www.fibretrace.io/'
  }),
  createResource({
    id: 'resource-050',
    cardNumber: 'Tool card #50',
    slug: 'higg-product-tools',
    title: 'Higg Product Tools',
    description:
      'An industry measurement suite for environmental and social sustainability across textile supply chains.',
    about:
      'The Higg Product Module and Higg Materials Sustainability Index provide insights into the environmental impacts of materials and products so designers and organisations can assess, compare and communicate impact performance.',
    journeyPhase: 'None',
    journeyPhases: [],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    language: 'English',
    provider: 'Sustainable Apparel Coalition',
    access: 'Sign up',
    timeRequired: 'Ongoing / continuous',
    preparationNeeded: 'None',
    output: 'Benchmarked sustainability scores and reports',
    bestFor: 'Textile and apparel SMEs',
    format: 'Digital tool',
    toolLink: 'https://cascale.org/tools-programs/higg-index-tools/product-tools/'
  }),
  createResource({
    id: 'resource-051',
    cardNumber: 'Tool card #51',
    slug: 'pdca-cycle-planner-sme-toolkit',
    title: 'PDCA Cycle Planner (SME Toolkit)',
    description:
      'A four-step Plan-Do-Check-Act framework that helps SMEs interpret results, identify root causes and plan targeted improvements.',
    about:
      'The PDCA Cycle is a continuous improvement framework that works well for circular economy implementation. SMEs can use it to review indicator results, decide what to adjust, set new targets and implement improvements.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Options', 'Business Case', 'Monitor'],
    placements: {
      moduleSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'ASQ / Open-source (ISO 9001 framework)',
    access: 'Free',
    timeRequired: '1-2 hours per review cycle',
    preparationNeeded: 'Collect indicator data and results from the previous measurement cycle.',
    output: 'Prioritised action plan for the next circular improvement cycle',
    bestFor: 'All SMEs that want a repeatable process for ongoing circular improvement',
    format: 'Digital tool',
    toolLink: 'http://asq.org/quality-resources/pdca-cycle'
  }),
  createResource({
    id: 'resource-052',
    cardNumber: 'Tool card #52',
    slug: 'circulab-business-ecosystem-canvas',
    title: 'Circulab Business Ecosystem Canvas',
    description:
      'A visual canvas tool to map circular ecosystems, review what is and is not working, and redesign a circular business model from real results.',
    about:
      'The Circulab Business Ecosystem Canvas guides teams through reviewing a current circular model, identifying which value flows are working, which partners to engage differently and where circular revenue opportunities remain untapped.',
    journeyPhase: 'Monitor',
    journeyPhases: ['Diagnose', 'Monitor'],
    placements: {
      moduleSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Circulab',
    access: 'Free',
    timeRequired: '2-3 hours',
    preparationNeeded: 'Gather measurement data and key results from your indicators before the session.',
    output: 'Updated circular business model canvas with identified improvements',
    bestFor: 'SMEs already implementing circular actions and ready to refine their model',
    format: 'Digital tool',
    toolLink: 'https://circulab.com/toolbox-circular-economy/'
  }),
  createResource({
    id: 'resource-053',
    cardNumber: 'Tool card #53',
    slug: 'implementation-canvas-circular-business-development-canvas-pack',
    title: 'Implementation Canvas (Circular Business Development Canvas Pack)',
    description:
      'A canvas for mapping concrete, actionable steps for putting a circular strategy into practice once solutions have been identified.',
    about:
      'The Implementation Canvas is part of the Circular Business Development Canvas Pack. It supports teams in turning chosen circular strategies into concrete roadmaps with actions, owners and timelines.',
    journeyPhase: 'Implement',
    journeyPhases: ['Implement'],
    placements: {
      moduleSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Miro (Evelina Lundqvist / The Good Tribe)',
    access: 'Sign up',
    timeRequired: '60-120 minutes (workshop format)',
    preparationNeeded: 'A Miro account, your circular strategy or audit outputs, and relevant team members or stakeholders.',
    output: 'Structured implementation plan with defined actions, owners and timelines',
    bestFor: 'Teams ready to move from strategy to execution after audit and ideation canvases',
    format: 'Online collaborative whiteboard (Miro template)',
    toolLink: 'https://miro.com/templates/circular-businessdevelopment-canvaspack/'
  }),
  createResource({
    id: 'resource-054',
    cardNumber: 'Tool card #54',
    slug: 'shortlisting-workshop',
    title: 'Shortlisting Workshop',
    description:
      'A workshop slide that guides teams through narrowing strategic options to a focused shortlist of one to three candidates for business case development.',
    about:
      'The workshop template helps teams capture strategy type, key opportunity, target loop, quick-win potential and ownership for each option. It also provides decision guidance for keeping the shortlist focused and practical.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Options', 'Business Case'],
    placements: {
      moduleSections: ['business-case:quick-scan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'UNIDO',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Print out, post-its, pens and people.',
    output: 'Overview of the circular strategies most relevant to your SME',
    bestFor: 'All SMEs',
    format: 'Print out',
    toolLink: ''
  }),
  createResource({
    id: 'resource-055',
    cardNumber: 'Tool card #55',
    slug: 'mapping-of-options-workshop',
    title: 'Mapping of Options Workshop',
    description:
      'A workshop exercise that helps teams prioritise strategic options using an impact-feasibility matrix.',
    about:
      'Map Your Options guides teams to plot options against impact and feasibility, discuss the resulting quadrants, and select the top one to three candidates to take forward.',
    journeyPhase: 'Business Case',
    journeyPhases: ['Business Case'],
    placements: {
      moduleSections: ['business-case:quick-scan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'UNIDO',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Print out, post-its, pens and people.',
    output: 'Overview of the circular strategies most relevant to your SME',
    bestFor: 'All SMEs',
    format: 'Print out',
    toolLink: ''
  }),
  createResource({
    id: 'resource-056',
    cardNumber: 'Tool card #56',
    slug: 'shortlisting-of-options',
    title: 'Shortlisting of Options',
    description:
      'A template for shortlisting circular options and assigning responsibility for reviewing feasibility.',
    about:
      'This resource helps teams move from screened business models to a shortlist of one to three priority strategies that can be developed into a business case.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['business-case:quick-scan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'UNIDO',
    access: 'Free',
    timeRequired: '15-30 minutes',
    preparationNeeded: 'Basic knowledge of your options, a pen and the printout.',
    output: 'Filled-out shortlist of circular options with responsibilities and priorities',
    bestFor: 'All SMEs that benefit from a quick shortlisting exercise',
    format: 'Print out',
    toolLink: ''
  }),
  createResource({
    id: 'resource-057',
    cardNumber: 'Tool card #57',
    slug: 'ncm-business-development-toolkit',
    title: 'NCM business development toolkit',
    description:
      'A toolkit for identifying inefficiencies, customer pain points and circular business model opportunities.',
    about:
      'The Business Model Development Toolkit guides teams through exercises to assess five linear-model inefficiencies, reflect on customer pain points and explore circular business sub-models before choosing opportunities to develop further.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections:['business-case:business-case']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'The Nordic Council of Ministers',
    access: 'Free',
    timeRequired: '30-60 minutes',
    preparationNeeded: 'Basic knowledge of company operations, a pen and the playbook printouts.',
    output: 'Shortlist of 1-2 circular business opportunities ready for further development',
    bestFor: 'All SMEs exploring which circular business models suit their company',
    format: 'PDF exercises / printable worksheet',
    toolLink: 'https://www.nordicinnovation.org/tools/nordic-circular-economy-playbook-toolkit'
  }),
  createResource({
    id: 'resource-058',
    cardNumber: 'Tool card #58',
    slug: 'product-design-audit-map',
    title: 'Product Design Audit Map',
    description:
      'A scoring matrix for assessing design flaws in a product lifecycle and identifying circular design improvement suggestions.',
    about:
      'The DfX scoring matrix builds on hotspot analysis and helps teams evaluate resource-intensive products to identify where design changes could improve circularity.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:explore-strategies']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'UNIDO',
    access: 'Free',
    timeRequired: '45-60 minutes',
    preparationNeeded: 'Printout of scoring sheet, post-its, pens and product samples or specifications.',
    output: 'Circular design improvement suggestions for your products',
    bestFor: 'All SMEs, particularly manufacturing SMEs or businesses with a physical product',
    format: 'Print out',
    toolLink: ''
  }),
  createResource({
    id: 'resource-059',
    cardNumber: 'Tool card #59',
    slug: 'how-might-we-workshop',
    title: 'How Might We Workshop',
    description:
      'A method for reframing problem insights as open-ended How Might We questions that create a productive starting point for brainstorming.',
    about:
      'The How Might We method is a simple reframing technique from design practice. Teams translate insight statements into solution-neutral questions that are broad enough for creativity and specific enough to guide action.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:explore-strategies']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'DTU',
    access: 'Free',
    timeRequired: '1 hour',
    preparationNeeded: 'Existing insight statements from prior research, plus pens and post-its.',
    output: 'A set of How Might We questions to guide ideation',
    bestFor: 'Design teams that have gathered user insights and want actionable design challenges',
    format: 'Print out',
    toolLink: 'https://universaldesignguide.com/method/how-might-we/'
  }),
  createResource({
    id: 'resource-060',
    cardNumber: 'Tool card #60',
    slug: 'bundle-ideas',
    title: 'Bundle Ideas',
    description:
      'A method for moving from a large volume of individual ideas to a smaller set of robust composite solutions.',
    about:
      'Bundle Ideas is an IDEO.org method for moving from divergent brainstorming to convergent concept development by clustering, combining and synthesising the strongest elements across concepts.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:explore-strategies']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'A wall or board covered with ideas and drawings from a prior brainstorm session, plus pens and post-its.',
    output: 'Coherent idea groupings or early-stage solution concepts ready to be developed and shared',
    bestFor: 'Design teams that have completed a brainstorm and need to converge their thinking',
    format: 'Print out',
    toolLink: 'https://www.designkit.org/methods/30.html'
  }),
  createResource({
    id: 'resource-061',
    cardNumber: 'Tool card #61',
    slug: 'create-a-concept',
    title: 'Create a Concept',
    description:
      'A method for developing bundled ideas into polished, testable concepts that address the original design challenge.',
    about:
      'Create a Concept is an IDEO.org method that bridges ideation and prototyping. Teams turn their strongest idea clusters into coherent concepts that are more complete than raw ideas but not yet final solutions.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:explore-strategies']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'Bundled idea clusters from a prior session, plus pens, post-its and paper.',
    output: 'One or more robust concept drafts ready to be tested with end users',
    bestFor: 'Design teams ready to commit to a direction before prototyping',
    format: 'Print out',
    toolLink: 'https://www.designkit.org/methods/create-a-concept.html'
  }),
  createResource({
    id: 'resource-062',
    cardNumber: 'Tool card #62',
    slug: 'safe-and-circular-product-redesign',
    title: 'Safe and Circular Product Redesign',
    description:
      'A workshop that challenges participants to redesign a commercial carpet tile to be safe and circular.',
    about:
      'This Ellen MacArthur Foundation workshop helps users understand the implications of choosing materials for circular products, including the need to design out chemicals of concern and enable material recovery.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:redesign-circular-value']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'Works best with a diverse team from different backgrounds.',
    output: 'Three redesign concepts documented with a memorable name',
    bestFor: 'All SMEs that can benefit from a redesign workshop',
    format: 'Online Workshop',
    toolLink: 'https://www.designkit.org/methods/3.html'
  }),
  createResource({
    id: 'resource-063',
    cardNumber: 'Tool card #63',
    slug: 'circular-design-toolbox',
    title: 'Circular Design Toolbox',
    description:
      'A collection of canvas-based tools for assessing, ideating, developing and communicating circular economy strategies.',
    about:
      'The Ecodesign Toolkit by EcoDesign Circle is an open-access collection of downloadable PDFs and interactive Mural boards for circular and ecodesign work across products, services, systems and business models.',
    journeyPhase: 'Options',
    journeyPhases: ['Options'],
    placements: {
      moduleSections: ['options:redesign-circular-value']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'EcoDesign Circle / Fraunhofer IZM',
    access: 'Free',
    timeRequired: 'Varies by tool; individual canvases can be used in 1-3 hour workshops',
    preparationNeeded: 'Low; most tools are available as free PDF downloads and/or Mural online boards.',
    output: 'Completed canvases, design briefs, business model concepts, ecodesign assessments or pitch materials',
    bestFor: 'SMEs, designers and sustainability professionals integrating circular thinking into product, service and business strategy',
    format: 'Toolbox',
    toolLink: 'https://circulardesign.tools/'
  })
];

/*
  Utility arrays for the filter drop-downs.
  They are derived from the resource list to avoid maintaining filter values twice.
*/
export const journeyPhases = [
  ...new Set(resources.flatMap((resource) => resource.filterValues.journeyPhases))
];
export const sectors = sortFilterValues([
  ...new Set(resources.flatMap((resource) => resource.filterValues.sectors))
]);
export const languages = sortFilterValues([
  ...new Set(resources.flatMap((resource) => resource.filterValues.languages))
]);
export const accessOptions = sortFilterValues([
  ...new Set(resources.flatMap((resource) => resource.filterValues.access))
]);
