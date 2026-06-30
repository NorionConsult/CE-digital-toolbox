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
  - language: document or tool language
  - provider: source organisation or provider
  - access: Free, Paid, or Sign up

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

  The website matches each phase name to its module and uses that module's
  global colour from src/app.css. A resource with several journeyPhases gets
  several badges automatically, for example:

  journeyPhase: 'Monitor',
  journeyPhases: ['Monitor', 'Business Case', 'Options'],

  Keep journeyPhase as one primary value and include it in journeyPhases.

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
 *   journeyPhase: string;
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
 *   placements: {
 *     moduleSections: string[];
 *     sectors: string[];
 *     sectorSections: string[];
 *   };
 * }} Resource
 */

/**
 * @param {ResourceInput} resource
 * @returns {Resource}
 */
function createResource(resource) {
  const journeyPhases = resource.journeyPhases ?? [resource.journeyPhase];

  return {
    journeyPhases,
    ...resource,
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
    sector: 'Across',
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
    sector: 'Across',
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
    placements: {
      moduleSections: ['implement:test-and-pilot']
    },
    sector: 'Across',
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
  })
];

/*
  Utility arrays for the filter drop-downs.
  They are derived from the resource list to avoid maintaining filter values twice.
*/
export const journeyPhases = [
  ...new Set(resources.flatMap((resource) => resource.journeyPhases ?? [resource.journeyPhase]))
];
export const sectors = [...new Set(resources.map((resource) => resource.sector))].sort();
export const languages = [...new Set(resources.map((resource) => resource.language))].sort();
export const accessOptions = [...new Set(resources.map((resource) => resource.access))].sort();
