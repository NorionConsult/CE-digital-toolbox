/*
  Tool Catalogue entries.

  HOW TO ADD A TOOL:
  1. Copy one complete { ... } block below.
  2. Give it a unique id and slug.
  3. Replace all visible text, taxonomy values and the toolLink.
  4. Set journeyPhases using one or more exact phase names:
     Learn, Assess, Explore, Evaluate, Implement, Monitor.
  5. Add a placements block if the tool should appear on journey phase or sector pages.

  The slug becomes the tool page URL, so use lowercase words separated with hyphens
  and do not reuse a slug from another tool.

  The id is the stable internal identifier for the tool. It is not shown on the website.
  Keep each id unique and do not change it after a tool has been published. This can be used for internal analytics.

	  Normalization, filter lists and display cleanup are handled in
	  src/lib/content/tool-catalogue-utils.js. Editors should not edit that file.

	  TOOL BUTTON TEXT:
	  Editors only need to update `toolLink`. If the link ends in a downloadable
	  file type such as .pdf, .docx, .pptx, .xlsx, .csv or .zip, the tool page
	  button automatically says "Download tool". Other links say "Open tool".

	  TOOL ABOUT TEXT:
	  In `about`, add links like this: [visible link text](https://example.com).
	  To make a paragraph break inside one text field, write || between paragraphs.
	  You can also use an array of strings if you prefer one paragraph per line.
	*/

import { buildToolCatalogue } from './tool-catalogue-utils.js';

const toolCatalogue = [
  {
    /* Unique internal identifier for the tool. Do not change after publishing. Set the identifier as the next number in the same format: resource-XXX */
    id: 'resource-001',
    /* slug makes the tool page URL. It should be a lowercase, hyphen-separated text. no spaces in between. */
    slug: 'sme-reporting-tool',
    title: 'SME Reporting Tool',
    /* Short description of the tool which appears in the front of each tool card in the tool catalogue overview. It is also visible on the tool page. */
    description:
      'The SME Reporting Tool helps small businesses create annual greenhouse gas emission reports and track their reduction efforts.',
    /* Longer description of the tool which appears on the tool page. Add links like [visible link text](https://example.com). To split paragraphs in one text field, write || between paragraphs. */
      about:
      'The SME Reporting Tool is provided as a free resource to enable you to create a climate report summarising your annual greenhouse gas emissions, including the actions you are taking and the impact of your emissions reduction effort.',
    /* journeyPhases is an array of the exact names of the journey phases where this tool is relevant. Use one or more of these values: Learn, Assess, Explore, Evaluate, Implement, Monitor. */
      journeyPhases: ['Monitor', 'Evaluate', 'Explore'],
    /* placements is not required for a tool to be specified. Added only to the tools that appear in the SME Journey pages or Sector guides. The name of the subsection is used to identify the section where the tool appears. */
    placements: {
      phaseSections: ['monitor:measuring-success'],
    },
    /* sector is a short text description of the sector or industry where the tool is relevant. It can be a single sector or multiple sectors. */
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Medium',
    /* language should have a comma in between to separate multiple languages */
    language: 'English',
    /* provider is the name of the organisation or company that provides the tool. */
    provider: 'SME Climate Hub',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Free',
    /* timeRequired is a short text description of the time required to use the tool. It can be a range or an estimate. */
    timeRequired: '2-3 hours',
    /* preparationNeeded is a short text description of the preparation needed to use the tool. This includes any prerequisites, setup steps or materials. */
    preparationNeeded:
      'Be ready with your measurable data and metrics to be used within the platform.',
    /* output is a short text description of the output of the tool. This can be a report, a certificate, a plan, or any other tangible result. */
    output: 'An annual greenhouse emission report',
    /* bestFor is a short text description of the target audience for the tool. This can be a specific sector, size of company, or any other relevant characteristic. */
    bestFor: 'small-medium enterprises (SMEs) in all sectors',
    /* format is a short text description of the format of the tool. This can be a digital platform, a PDF, a workshop, or any other relevant format. */
    format: 'Online platform',
    /* toolLink is the URL to the tool page or downloadable file. The button text is automatic: downloadable file links show "Download tool"; other links show "Open tool". */
    toolLink: 'https://smeclimatehub.org/report-your-progress/'
  },
  {
    id: 'resource-003',
    slug: 'circulytics-guide',
    title: 'Circulytics Guide',
    description:
      'A guide to show you which analytics to use to best measure the circularity of your operations.',
    about:
      'Circulytics is a framework of indicators for tracking circular economy performance. It allows companies to highlight successes in transition, and identify where to focus efforts for improvement in line with the three principles of a circular economy, all driven by design: eliminate waste and pollution, circulate products and materials, and regenerate nature.',
    journeyPhases: ['Monitor'],
     placements: {
      phaseSections: ['monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'High',
    language: 'English, Chinese, Portuguese, Spanish',
    provider: 'Ellen MacArthur Foundation',
    /* access should be either 'Free', 'Sign up' or 'Paid' */   
    access: 'Free',
    timeRequired: 'Half a day',
    preparationNeeded: 'None',
    output:
      'You will gain a better understanding of what it means to measure circularity within the value chain.',
    bestFor: 'SMEs in all sectors',
    format: 'PDF',
    toolLink:
      'https://content.ellenmacarthurfoundation.org/web/753ec75d78ad3222/circulytics-indicators/?viewType=grid'
  },
  {
    id: 'resource-005',
    slug: 'climate-action-planner',
    title: 'Climate and Action Planner',
    description:
      'A climate action plan outlines how an organisation will reduce greenhouse gas emissions and prepare for the impacts of climate change.',
    about:
      "The SME Climate Hub Climate Action Planner is a free online tool that helps SMEs create a customised climate action plan. By answering a short self-assessment, businesses receive tailored recommendations to reduce emissions, cut costs, improve resilience, and build a practical sustainability roadmap with progress tracking and clear priorities.|| **How the Climate Action Planner works**|| **1.	Register/log in:** From the \"Build a Climate Action Plan\" page where the link here takes you, click \"Access Climate Action Planner\" once you land on the page, then click on \"Login\". As a new user, create a free account by clicking on \"Sign up\", and choose either to sign up as a \"Tool user\" or a \"committed business\".  Fill out the fields with your name, email, and set a password. If you already have an account, you can log in instead. || **2.	Self-Assess:** Answer a deep-dive questionnaire covering energy usage, supply chains, employee engagement, and waste management. No prior emissions measurement needed. || **3.	Review recommendations:** The tool pulls from a library of 750+ actions and surfaces ones tailored to your sector, goals, and key emissions areas. || **4.	Shortlist actions:** Compare strategies, read details on each (business case and potential impact), and pick the ones that fit your capabilities and timeline. || **5.	Manage your plan:** Your custom action plan lands in a dashboard where you can track progress, view more detail on further actions, and download a report.",
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan'],
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Medium',
    language: 'English',
    provider: 'SME Climate Hub',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Sign up',
    timeRequired: '2-3 hours',
    preparationNeeded: 'None',
    output:
      'Actions aligned to your industry and business goals. Practical steps, business case insights, expected impacts, and a roadmap with trackable actions and priorities.',
    bestFor: 'small-medium enterprises (SMEs) in all sectors',
    /* format is a short text description of the format of the tool. This can be a digital platform, a PDF, a workshop, or any other relevant format. */
    format: 'Online platform',
    toolLink: 'https://smeclimatehub.org/build-a-climate-action-plan/'
  },
  {
    id: 'resource-006',
    slug: 'roadmap-to-circular-business',
    title: 'Roadmap to circular business',
    description:
      'A practical set of canvases designed to help businesses move from early circular action to intentional, long-term change.',
    about:
      'The Roadmap to Circular Business is a workshop tool that helps organisations turn circular economy ideas into a practical action plan. It supports teams in defining their circular ambition, prioritising actions, assigning responsibilities, and planning next steps. The output is a circular transition roadmap with clear priorities, milestones, and ownership.',
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Low',
    language: 'English',
    provider: 'The Good Tribe',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Sign up',
    timeRequired: '1-2 hours per canvas',
    preparationNeeded:
      'Basic understanding of the organisation\'s circular opportunities, current capabilities, and key stakeholders. No detailed sustainability data is required. Access to a Miro account to use it in its intended format.',
    output: 'A roadmap and plan to lead your business towards circular strategy implementation',
    bestFor:
      'All small-medium enterprises (SMEs), particularly SMEs ready to move from opportunity identification to implementation.',
    format: 'Online collaborative board (Miro)',
    toolLink: 'https://miro.com/templates/roadmap-to-circular-business/'
  },
  {
    id: 'resource-007',
    slug: 'implementation-template',
    title: 'Implementation Template',
    description:
      'Tool for crystallising your circular business model by reflecting on its key building blocks, including your value proposition, infrastructure, customers and financing.',
    about:
      'A structured road mapping tool developed for manufacturing companies. Guides businesses through mapping their current state, defining ambitions, and building a concrete roadmap with prioritised actions. The tool uses a visual canvas approach with facilitation guidance, making it well suited to use in team workshops. Outputs include a prioritised action plan with owners and timelines.',
    journeyPhases: ['Implement'],
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'Teknologiateollisuus',
    access: 'Free',
    timeRequired: '20-30 minutes',
    preparationNeeded:
      'A shortlisted circular opportunity or business model concept, plus basic customer, partner and financial information.',
    output: 'A completed Circular Business Model Canvas containing a vision statement.',
    bestFor: 'Manufacturing/production small-medium enterprises (SMEs)',
    format: 'Powerpoint',
    toolLink:
      'https://teknologiateollisuus.fi/wp-content/uploads/2024/08/CE2018_Business-model-canvas_v1-0.pptx'
  },
  {
    id: 'resource-008',
    slug: 'miro-swot-analysis-template',
    title: 'Strengths, Weaknesses, Opportunities and Threats (SWOT) Analysis Template (Miro)',
    description:
      'Free online collaborative whiteboard with ready-made Strengths, Weaknesses, Opportunities and Threats (SWOT) template, sticky notes, real-time team editing, and voting tools for a structured online workshop.',
    about:
      "A Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis applied to circular business models examines four dimensions to build a clear strategic picture. Strengths identify what your organisation already does well, weaknesses expose internal gaps, opportunities look outward at favourable conditions, and threats capture external risks. The real value comes from using these dimensions dynamically to reveal priorities and vulnerabilities. To access Miro templates, you frist need a user. You can create a free user to access the templates, if you do not have a Miro account. Once you can access the templates, you can follow the instructions to use them. || **Step by step guide** || **1.	Set the objective:** Define what you're analysing and keep the scope specific so the analysis stays focused. ||**2.	Gather the right people:** Pull in a small group with different perspectives (ops, sales, finance, etc.). || **3.	List Strengths:** Internal, positive factors: what you do well, unique resources, etc. || **4.	List Weaknesses:** Internal, negative factors: gaps, resource constraints, etc.|| **5.	List Opportunities:** External, positive factors: market trends, gaps you could exploit, emerging needs.|| **6.	List Threats:** External, negative factors: competition, regulatory shifts, etc. || **7.	Rank items** by impact and likelihood so you're not treating everything as equally urgent.|| **8.	Match strengths to opportunities** to see where you can go on offense, and weaknesses to threats to see where you're most exposed. || **9.	Pick two or three priorities** per quadrant and assign owners and next steps.",
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Miro',
    access: 'Sign up',
    timeRequired: '1-2 hours',
    preparationNeeded: 'Miro account and identified the circular strategy you wish to pursue with your business',
    output: 'Completed Strengths, Weaknesses, Opportunities and Threats (SWOT) matrix with prioritised actions; exportable for sharing with team or advisors.',
    bestFor: 'small-medium enterprises (SMEs) running the transition readiness workshop from Phase 4 with their team.',
    format: 'Either online Miro board or PDF if printed.',
    toolLink: 'https://miro.com/strategic-planning/swot-analysis/'
  },
  {
    id: 'resource-009',
    slug: 'cti-tool-circular-transition-indicators',
    title: 'Circular Transition Indicators (CTI) Tool',
    description:
      'Online assessment that quantifies circular performance across material flows, waste, and resource use, with guidance to improve results and set SMART targets.',
    about:
      'The Circular Transition Indicators (CTI) indicators and methodology are one of the main building blocks that the Global Circularity Protocol (GCP) uses for circularity metrics and the protocol is designed to align with International Organisation for Standardization (ISO) 59020, European Sustainability Reporting Standards (ESRS) E5, Global Reporting Initiative (GRI) and the Greenhouse Gas Protocol. CTI Tool was developed together with the World Business Council for Sustainable Development (WBCSD) for applying the CTI in practice. By using CTI Tool you build the material level data and indicators that the GCP expects, which means you can reuse your CTI work when you start working with the GCP.',
    journeyPhases: ['Evaluate'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'World Business Council for Sustainable Development (WBCSD) / Circular IQ',
    access: 'Paid',
    timeRequired: '2-4 hours',
    preparationNeeded: 'Prepare the relevant business, material flow and resource use data before starting.',
    output:
      'Circular performance score; risk and opportunity analysis; prioritised actions and SMART improvement targets.',
    bestFor: 'All small-medium enterprises (SMEs)',
    format: 'Digital tool',
    toolLink: 'http://ctitool.com/'
  },
  {
    id: 'resource-010',
    slug: 'business-model-canvas-for-circular-economy',
    title: 'Business Model Canvas for Circular Economy',
    description:
      'Adapts the classic Business Model Canvas to map circular value creation, delivery, and capture for a chosen circular business model.',
    about:
      'The Circular Business Development Canvas Pack aims to empower businesses to transition from traditional linear models to innovative circular practices. By focusing on reducing waste, enhancing resource efficiency, and closing the loop, these canvases provide a structured approach to embedding circular economy principles into core operations, customers, and revenue. The ultimate goal is to foster a regenerative business model that benefits   the environment and drives economic value and social impact. A step-by-step guide on how to carry out this workshop can be found within the circular canvas pack.',
    journeyPhases: ['Evaluate'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation / Business Model Lab',
    access: 'Sign up',
    timeRequired: '2-4 hours (workshop format)',
    preparationNeeded: 'Print out PDF, pens and prepare participants',
    output:
      'Completed circular Business Model Canvas (BMC); clear view of how the circular business model changes your operations.',
    bestFor: 'small-medium enterprises (SMEs) that have identified a preferred circular business model and want to develop it in detail.',
    format: 'PDF',
    toolLink:
      'https://circulareconomy.europa.eu/platform/sites/default/files/2025-02/Circular%2BBusiness%2BDevelopment%2BCanvas%2BPack%2B-%2BVersion%2B1%2C%2BJanuary%2B2025%2B-%2BThe%2BGood%2BTribe.pdf'
  },
  {
    id: 'resource-011',
    slug: 'saxion-quickscan-circular-business-models',
    title: 'Saxion Quickscan Circular Business Models',
    description:
      'Helps you rapidly assess which circular business models best fit their situation using a scored matrix approach.',
    about:
      'With the Quickscan Circular Business Model (CBM) you gain insight into the possibilities of a circular business model for your company. You use a questionnaire to assess where you are now when it comes to sustainable and circular entrepreneurship. You then explore the possibilities for a more circular business model by choosing a basic type of circular business model and selecting options for building blocks such as the organisational form and the revenue model.',
    journeyPhases: ['Evaluate', 'Assess'],
    placements: {
      phaseSections:['evaluate:shortlist-strategies']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Saxion University of Applied Sciences',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded:
      'General knowledge of your business and the opportunities you have identified in the previous phase.',
    output: 'Prioritised Circular Business Model (CBM) shortlist; scored overview of options; basis for business case development.',
    bestFor: 'small-medium enterprises (SMEs) new to circular business modelling wanting a structured starting point.',
    format: 'Excel',
    toolLink:
      'https://businessmodellab.nl/dam/jcr:d91068cb-94f8-4c9d-8ac0-c76a45ae1256/tool_quickscan-circulair-businessmodel%20EN.xlsx'
  },
  {
    id: 'resource-012',
    slug: 'position-green-sustainability-roi-calculator',
    title: 'Position Green Sustainability Return on Investment (ROI) Calculator',
    description:
      'Online calculator that builds a data-backed business case for circular investment by computing financial return, payback time, and emissions impact using discounted cash flow logic.',
    about:
      'Calculate your sustainability Return on Investment (ROI). Build your business case and prove the value of your sustainability work. See the financial return, payback period, and emissions impact of sustainability investments based on your inputs and real business drivers. Model real business scenarios, test cost and savings drivers, quantify financial and carbon impact, and export a decision-ready summary.',
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Position Green',
    access: 'Free',
    timeRequired: '30-60 minutes',
    preparationNeeded: 'Prepare relevant investment, cost, savings and emissions data before starting.',
    output:
      'Return on Investment (ROI) percentage, payback period, and emissions impact; scenario comparison; board-ready financial summary.',
    bestFor:
      'SMEs building a financial case for a circular investment, pilot project, or green finance application.',
    format: 'Digital tool',
    toolLink: 'https://www.positiongreen.com/drive-business-value/roi-calculator/'
  },
  {
    id: 'resource-013',
    slug: 'circular-economy-trend-cards',
    title: 'Circular Economy Trend Cards',
    description:
      'Provides you with an overview of the current trends and key questions in the circular economy space with the aim of inspiring discussions and brainstorms.',
    about:
      'Printable or digital cards covering key circular economy trends, opportunities, and threats. Designed to facilitate team discussions and feed into Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis. Prompts strategic thinking about which circular options are relevant given market and regulatory trends. Freely available and easy to use in a workshop setting. For best use, it can be combined with a SWOT Matrix template or other circular business model ideation tools. Depending on the amount of people to include in the workshop to discuss the questions and trends in the cards, it can take 1-3 hours to complete a facilitated exercise.',
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections:['explore:identify-options']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit Norden / Rise Research Institutes',
    access: 'Free',
    timeRequired: '1-3 hours',
    preparationNeeded: 'None',
    output:
      'Identified circular economy trends, opportunities, threats, and discussion inputs for Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis or future business model ideas.',
    bestFor: 'All small-medium enterprises (SMEs)',
    format: 'workshop cards, PDF',
    toolLink: 'https://circitnord.com/wp-content/uploads/2020/04/T02_Circular-Economy-Trends-Cards_CC.pdf'
  },
  {
    id: 'resource-014',
    slug: 'circular-pathfinder',
    title: 'Circular Pathfinder',
    description:
      'Helps companies identify suitable circular design strategies for their products through a guided decision process.',
    about:
      'An ideation tool that helps you explore and identify the most suitable circular pathways for your products. Based on best practices from other companies, you answer a few questions and receive tailored circular strategy recommendations. Simple, free, and requires no prior circular economy expertise.',
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections:['explore:identify-options']
    },
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'European Commission / IDEAL&CO',
    access: 'Free',
    timeRequired: '15-30 minutes',
    preparationNeeded:
      'Users should have basic knowledge of their product, materials, lifecycle, and business model.',
    output:
      'Suggested circular design strategies and guidance on relevant circular economy approaches for the product.',
    bestFor: 'Manufacturing small-medium enterprises (SMEs), product developers, and companies exploring circular product design or redesign.',
    format: 'Digital tool',
    toolLink: 'https://www.ideal-co.nl/pathfinder/'
  },
  {
    id: 'resource-015',
    slug: 'circular-strategies-wheel-workshop',
    title: 'Circular Strategies Wheel Workshop',
    description: 'To identify circular strategies that fit your business',
    about:
      'The Circular Strategies Wheel gives your team a shared visual overview of circular strategies across the three phases of a product or service\'s life: start of life, product life, and end of life. It turns circularity from an abstract idea into something tangible and actionable, helping your team connect relevant strategies to your business context. By working through it together, you identify key opportunities, areas of interest, and practical barriers, creating a grounded, team-owned starting point for building your circular business model.',
    journeyPhases: ['Explore'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Danish Design Center',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Print out, post its, pens and people',
    output: 'An overview of the circular strategies most relevant to your SME',
    bestFor: 'All SMEs',
    format: 'Miro board or print out',
    toolLink: 'https://ddc.dk/wp-content/uploads/2020/10/Circular_strategies_wheel_canvas.pdf'
  },
  {
    id: 'resource-017',
    slug: 'up2circ-assessment',
    title: 'Up2Circ Assessment',
    description:
      'Assists you in self evaluating your current standing in their circular journey by asking simple questions and providing insights based on answers.',
    about:
      'This Up2Circ Circularity Assessment Tool will help you to become familiar with the circular economy, score how well you integrate circular strategies into your business, and discover opportunities for improvement and challenges to address.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Up2Circ',
    access: 'Free',
    timeRequired: '15-20 minutes',
    preparationNeeded: 'None',
    output: 'Self assessment and recommendations',
    bestFor: 'small-medium enterprises (SMEs) in all sectors',
    format: 'Digital tool',
    toolLink: 'https://up2circ.eu/up2circ-assessment/#gf_9'
  },
  {
    id: 'resource-018',
    slug: 'smart-circular-economy-assessment-scea',
    title: 'Smart Material Choices Assessment',
    description: 'Helps you benchmark your current Circular Economy level and understand key gaps.',
    about:
      'Learn to make smart material choices by asking the right questions. These steps will help you make better choices about what materials go into your products as well as their impact on the wider system.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: '30-45 min',
    preparationNeeded: 'Basic business data',
    output: 'Circular Economy (CE) maturity overview across 5 dimensions with visual output and priority recommendations.',
    bestFor: 'small-medium enterprises (SMEs) new to circular economy want a quick, accessible starting point.',
    format: 'PDF',
    toolLink: 'http://ellenmacarthurfoundation.org/smart-material-choices'
  },
  {
    id: 'resource-019',
    slug: 'i-go-assessment-tool',
    title: 'I-GO Assessment Tool',
    description: 'Assesses organisational readiness for resource efficiency and circularity.',
    about:
      'I-GO helps you become more productive, competitive, and resilient by making it easier to access tailored knowledge and support services on resource efficiency. It is the I-GO Assistant tool that guides businesses through self-assessment, suggests practical improvements, and connects them with customised support based on your specific needs.',
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English, Ukrainian, Russian, Portuguese, Spanish, Georgian, Arabic',
    provider: 'International Green Economy Association / Green Growth Knowledge Partnership (GGKP)',
    access: 'Free',
    timeRequired: '45-60 minutes',
    preparationNeeded: 'Project data, operations info',
    output: 'Structured diagnosis of green economy readiness with scored indicators.',
    bestFor: 'small-medium enterprises (SMEs) with some sustainability activity looking for a more structured review.',
    format: 'Digital tool',
    toolLink: 'https://igosolution.org/'
  },
  {
    id: 'resource-020',
    slug: 'material-flow-analysis-mfa-workshop',
    title: 'Material Flow Analysis (MFA) Workshop',
    description:
      'Maps materials used in production and helps to showcase material flows of your products',
    about:
      'Material Flow Analysis (MFA) gives a quantitative overview of the flow of materials in a defined system which for instance can be the flow of materials in a manufacturing company. An MFA always consists of a system boundary, one or more processes, material flows and stocks of materials within processes.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:mapping-resources']
    },
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'Ready2Loop',
    access: 'Sign up',
    timeRequired: '5-12 hours',
    preparationNeeded: 'Material, energy and waste data',
    output:
      'Overview of flows of materials in the system. Overview of the quantities and type of materials utilised in the system.',
    bestFor: 'small-medium enterprises (SMEs) with physical products',
    format: 'Print out',
    toolLink: 'https://ready2loop.org/en/981/Material+Flow+Analysis+%28MFA%29'
  },
  {
    id: 'resource-021',
    slug: 'stan-tool',
    title: 'STAN Tool',
    description: 'Visualises the material flow data of your products/services',
    about:
      'STAN allows users to create graphical Material Flow Analysis (MFA) models using predefined elements such as processes, flows, system boundaries, and text fields. Users can input or import data like mass flows, stocks, concentrations, and transfer coefficients across different layers (materials, substances, energy) and time periods. The software can calculate unknown values automatically and visualize results as Sankey diagrams, where flow widths represent quantities. Models can also be printed or exported, and Microsoft Excel is used for importing and exporting data.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:mapping-resources']
    },
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'STAN2WEB',
    access: 'Sign up',
    timeRequired: 'Half-day to a day',
    preparationNeeded: 'Preparing the material data, their quantity and uses.',
    output: 'Material Flow Analysis (MFA) graphics',
    bestFor: 'Advanced users with detailed material data',
    format: 'Digital tool',
    toolLink: 'https://www.stan2web.net/download%20files/software/STAN-2-7-101-EN.zip'
  },
  {
    id: 'resource-022',
    slug: 'hotspot-analysis-tool',
    title: 'The Hotspot Analysis Tool',
    description: 'The tool provides a range of sustainable consumption and production indicators for identifying unsustainable hotspots at country and sector level, pointing to where policy action is needed.',
    about:
      'The Sustainable Consumption and Production Hotspots Analysis Tool (SCP-HAT) Country Profile tool provides an overview of a country\'s environmental performance across key sustainable consumption and production policy areas, including materials use, climate change, energy, water, and pollution. It helps policymakers, NGOs, and the public identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis. For you as an SMEs, it can be used to identify the most relevant sustainability hotspots for your sector and country, helping you prioritise actions and investments to improve environmental performance. The tool contains data for Ukraine, Moldova, Georgia, Armenia, and Azerbaijan and data can be compared across countries.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Life Cycle Initiative',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded: 'No preparation needed, the data is in the platform itself.',
    output:
      'Users can identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis.',
    bestFor: 'All SMEs across all sectors interested in data at national and sector levels.',
    format: 'Digital platform with databases',
    toolLink: 'https://scp-hat.org/module-2-scp-hotspots/'
  },
  {
    id: 'resource-023',
    slug: 'footprint-calculator',
    title: 'Footprint Calculator',
    description:
      'Displays carbon footprint and eco-cost results by lifecycle stage, with additional Life Cycle Impact Assessment (LCIA) insights to identify the most impactful processes',
    about:
      'The Circular Strategies Scanner helps manufacturing companies understand, map, and improve their circular economy strategies across products and operations. It is typically used in workshops to identify current initiatives, explore new opportunities for circularity, and support innovation and shared strategic vision.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Manufacturing',
    effort: 'Medium',
    language: 'English',
    provider: 'The footprinters',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded: 'Material, energy, and waste data',
    output: 'Carbon footprint and eco-cost results by lifecycle stage.',
    bestFor: 'Manufacturing SMEs with physical products',
    format: 'Digital tool',
    toolLink: 'https://footprintcalc.org/'
  },
  {
    id: 'resource-024',
    slug: 'future-adaptive-design-guide',
    title: 'Future Adaptive Design Guide',
    description:
      'Supports circularity and identifies strategies for extending product life while reducing environmental impact.',
    about:
      'Future adaptive design helps companies reduce business risks in circular business models by creating durable, flexible, and upgradeable products that remain useful and attractive over longer lifetimes. The approach provides tools and methods to support circular business innovation, improve profitability, identify strategies for extending product life, and reduce environmental impact.',
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Manufacturing',
    effort: 'Medium',
    language: 'English',
    provider: 'RISE Research',
    access: 'Free',
    timeRequired: 'Flexible - workshop format',
    preparationNeeded: 'Product or process design information',
    output: 'Design-focused hotspots; adaptation opportunities for circularity.',
    bestFor: 'SMEs working with product or process design for circular business models.',
    format: 'PDF',
    toolLink:
      'https://www.ri.se/sites/default/files/2023-09/Future%20Adaptive%20Design_Guide_2023-1.pdf'
  },
  /**{
    id: 'resource-025',
    slug: 'milestones-and-action-planning-tool',
    title: 'Milestones and Action Planning Tool',
    description:
      'To develop a clear set of measurable milestones to monitor progress towards a circular economy strategy',
    about:
      "A practical milestone-setting framework designed to help organisations break circular strategies into trackable steps. Helps teams identify key actions, assign ownership, and define what 'progress' looks like at each stage.",
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
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
  }),*/
  {
    id: 'resource-026',
    slug: 'circular-loop-designer',
    title: 'The Circular Loop Designer',
    description:
      'To help teams visually map and design closed material loops for their business, sketching how materials, products, and processes flow between actors in a circular system, and identifying which parties need to be involved at each stage',
    about:
      "The Circular Loop Designer is a browser-based drawing tool that lets teams sketch closed material loops using a purpose-built library of icons and arrows. Users can start from an empty canvas or select from a range of pre-built examples, covering four types of circular loop logic: closing a material loop as completely as possible; keeping materials in circulation for as long as possible; sourcing and retaining materials as locally as possible; and radically reducing material use across the loop. Arrows are colour-coded to distinguish sustainable flows (green), traditional flows (red), and flows still under development (blue), making it easy to show the current state alongside the desired future state. Parties and roles can be added at each stage of the loop, turning the diagram into a stakeholder map as well as a material flow map.",
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
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
  },
  {
    id: 'resource-027',
    slug: 'ecoCEO',
    title: 'ecoCEO',
    description:
      'To simulate running a circular electronics company making decisions on resource management, production processes, and revenue models, while responding to external disruptions such as policy changes and market shocks that test the resilience of circular vs. linear strategies',
    about:
      "ecoCEO is a free, web-based serious game developed by the Flemish Institute for Technological Research (VITO) with support from European Institute of Innovation and Technology (EIT) Raw Materials. Players manage a company producing electronic goods (microchips, smartphones, and e-bikes) making decisions on which raw materials to use, which production processes to invest in, and which revenue models to adopt. The game tests those decisions against unforeseen events including policy measures, resource scarcity, and market disruptions, making visible how circular strategies (take-back systems, reuse, design-for-repair, product-service systems) improve business resilience compared to linear approaches. This tool is designed to engage youth between 15-18 years old of age, but can also be used with adult learners. It is best for SMEs working in the educational sector and engaging youth or professionals through gamification and experiential learning.",
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Flemish Institute for Technological Research (VITO) / European Institute of Innovation and Technology (EIT) Raw Materials',
    access: 'Sign up',
    timeRequired: '1 – 2 hours',
    preparationNeeded: 'Sign up is required to access the game but no installation required, as it is a web-based platform. No prior knowledge of circular economy is required.',
    output: 'Understanding of how circular business decisions (recycling, take-back, repair, product-service systems) affect company performance and resilience; discussion material for debriefing on circular economy strategy trade-offs',
    bestFor: 'SMEs in the educational sector and teams at an introductory stage of circular economy engagement who benefit from learning through doing; also useful as an icebreaker or warm-up activity before deeper strategy workshop',
    format: 'Online game',
    toolLink:
      'https://ecoceo.vito.be/en/ecoceo-game'
  },
  {
    id: 'resource-028',
    slug: 'sme-carbon-footprint-calculator',
    title: 'Carbon Footprint Calculator',
    description:
      'The openLCA software tool aims to assist users in performing a self-assessment and includes free demo sessions on how to use the tool.',
    about:
      'openLCA is a modular tool for sustainability assessment and life cycle modelling. It is open source, customisable, and can be used to create models at different levels of complexity.',
    journeyPhases: ['Assess', 'Evaluate', 'Monitor'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'English',
    provider: 'Green Delta',
    access: 'Free',
    timeRequired: 'Days to weeks',
    preparationNeeded: 'You will need the emissions data of your company to make your own assessments and some skills to apply Life Cycle Assessment (LCA) methodology.',
    output: 'A wide range of options depending on the use, however most important for SMEs this tool can support a Life Cycle Assessment (LCA) model of your company\'s carbon footprint, based on existing databases and resulting in models that support your LCA reporting.',
    bestFor: 'All SMEs concerned with climate and emissions reduction',
    format: 'Software',
    toolLink: 'https://www.openlca.org/download/'
  },
  {
    id: 'resource-030',
    slug: 'bpf-eco-tool-finder',
    title: 'BPF Eco tool finder',
    description:
      'A simplified eco-design tool for early-stage packaging design decisions, showing the recyclability impact of design choices before production begins.',
    about:
      'The BPF Eco Tool Finder is a searchable directory from the British Plastics Federation for sustainable packaging design resources. It lets users filter by resource type (interactive tools, recyclability guides, Life Cycle Assessment (LCA) tools, recycled content, eLearning), plastic material (Polyethylene Terephthalate (PET), High-Density Polyethylene (HDPE), Polyvinyl Chloride (PVC), etc.), and product type (bottles, caps, trays, films, and more).',
    journeyPhases: ['Assess'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'British Plastics Federation',
    access: 'Free',
    timeRequired: '10-20 minutes',
    preparationNeeded: 'An overview of your businesses packaging needs.',
    output: 'A deeper understanding of how to best utilise plastic packaging in an effective manner.',
    bestFor: 'Packaging designers, brand managers and retailers at the early design stage',
    format: 'Digital tool',
    toolLink: 'https://ecodesign.bpf.co.uk/search'
  },
  {
    id: 'resource-031',
    slug: 'circular-packaging-assessment-tool',
    title: 'Circular Packaging Assessment Tool',
    description:
      'A free web tool that assesses packaging across five system-wide dimensions, including design for recyclability, community access and packaging fate.',
    about:
      'The tool goes beyond technical recyclability to help brands, retailers and packaging designers understand system-level recyclability, improvement recommendations and Extended Producer Responsibility (EPR) compliance guidance.',
    journeyPhases: ['Assess'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'The Recycling Partnership',
    access: 'Sign up',
    timeRequired: '30-60 minutes',
    preparationNeeded: 'Know your packaging format, material and design features.',
    output: 'System-level recyclability assessment, improvement recommendations and Extended Producer Responsibility (EPR) compliance guidance',
    bestFor: 'Brands, retailers and packaging designers',
    format: 'Digital tool',
    toolLink: 'https://the-recycling-partnership.us.auth0.com/login?state=hKFo2SBORzZKZGtWTkJxSTZBVlp0LUcwT2lGM2JXbExKRlpZeaFupWxvZ2luo3RpZNkgc0pMVGlWOFdJY3hTZXNjV1lsTk5sMUFJTmduM3NZaGWjY2lk2SBlVnQ0U2lzc0VTUHpGbXBoa0ptSzh0NTBScnRrc21ocA&client=eVt4SissESPzFmphkJmK8t50Rrtksmhp&protocol=oauth2&scope=openid%20profile%20email&response_type=id_token&redirect_uri=https%3A%2F%2Fapi.packaging.recyclingpartnership.org%2Fauth%2Fcallback&response_mode=form_post&nonce=xWgTW6dMeXdwqfpT4dbri4fe-c0e51XbvGYpeyvE5L8'
  },
  {
    id: 'resource-033',
    slug: 'recyclass-plastics',
    title: 'Recyclass Plastics',
    description:
      'A data-driven planning tool that calculates the circularity of plastic packaging and helps companies model reduction, reuse, redesign and substitution solutions.',
    about:
      'Recyclass online analysis tool is a digital tool to help companies improve plastic packaging strategy, reduce plastic waste and build actionable strategies with cost and carbon impact metrics.',
    journeyPhases: ['Explore'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'Recyclass',
    access: 'Free',
    timeRequired: '15-30 minutes',
    preparationNeeded: 'Detailed packaging data by type, weight and volume, plus current sustainability targets.',
    output: 'Product-specific analysis with recyclability score and class. The analysis results can be downloaded but signing up is required for that part.',
    bestFor: 'Manufacturers, brands and retailers using or designing plastic packaging.',
    format: 'Online analysis tool',
    toolLink: 'https://tool.recyclass.eu/en/plastics/tool/#step-1'
  },
  {
    id: 'resource-034',
    slug: 'green-key-toolbox',
    title: 'Green Key Toolbox',
    description:
      'A practical toolbox divided into 13 topics that match Green Key criteria and help tourism SMEs prepare for circular and environmental improvements.',
    about:
      'The Green Key Toolbox brings together helpful tips, ready-to-use templates and real-world best practice examples for tourism businesses working towards Green Key certification and improved environmental standards.',
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'High',
    language: 'English',
    provider: 'Green Key',
    access: 'Sign up',
    timeRequired: '1-2 days',
    preparationNeeded: 'None',
    output: 'Better understanding of what it takes to be circular in the tourism sector',
    bestFor: 'Hotels, resorts and other tourism service industries',
    format: 'Digital tool',
    toolLink: 'https://www.greenkey.global/green-key-toolbox-1'
  },
  {
    id: 'resource-035',
    slug: 'hcmi-hotel-carbon-measurement-initiative',
    title: 'Hotel Carbon Measurement Initiative (HCMI)',
    description:
      'A free standardised methodology and tool for hotels to calculate the carbon footprint of stays and meetings.',
    about:
      'The Hotel Carbon Measurement Initiative (HCMI) is a globally recognised carbon measurement tool for the hospitality industry, giving hotels standardised data to track emissions, benchmark against peers and meet corporate buyer requirements. The tool provides guides on how to use the templates to calculate carbon footprint for guestrooms and meetings, among others, on energy and consumption data. The offline excel sheet provides a structure approach to carbon accounting, and the guides together with the excel example provide a clear method to follow. As a result, you can generate a report with essential information to support your sustainability strategy and communicate your progress to stakeholders.',
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Medium',
    language: 'English',
    provider: 'Sustainable Hospitality Alliance (SHA) & World Travel & Tourism Council (WTTC)',
    access: 'Free',
    timeRequired: 'a half day or ongoing, data input per billing period.',
    preparationNeeded: 'Energy, water and fuel consumption data by property with the correct amounts and units.',
    output: 'Carbon footprint per occupied room, per meeting space hour and total property',
    bestFor: 'Hotels and accommodation providers of any size globally',
    format: 'Excel template',
    toolLink: 'https://sustainablehospitalityalliance.org/wp-content/uploads/2020/02/HCMI-v2.0.zip'
  },
  {
    id: 'resource-036',
    slug: 'cross-re-tour-aat-tool',
    title: 'Cross-Re-Tour AAT Tool',
    description:
      'A diagnostic tool for tourism SMEs that profiles progress towards digital and green transformation and identifies opportunities to improve competitiveness.',
    about:
      'The Cross-Re-Tour Automated Assessment Tool is a free online diagnostic tool for tourism SMEs. It assesses environmental practices, innovation capacity and strategic orientation to help businesses understand their wider sustainability readiness.',
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Low',
    language: 'English',
    provider: 'Cross-Re-Tour consortium',
    access: 'Sign up',
    timeRequired: '20-40 minutes',
    preparationNeeded: 'No preparation requirements are listed; the tool is designed to be completed from existing business knowledge.',
    output: 'Profile across strategic orientation, innovation capabilities and sustainable innovation capabilities',
    bestFor: 'Tourism SMEs looking to understand readiness for digital and green transition',
    format: 'Digital tool',
    toolLink: 'https://crossretour.eu/cross-re-tour-aat-tool/'
  },
  {
    id: 'resource-037',
    slug: 'circular-tourism-self-assessment',
    title: 'Circular Tourism Self Assessment',
    description:
      'A circular economy management and monitoring tool for tourism businesses and destinations.',
    about:
      'The Circular Tourism Tools assess tourism impact from a circular economy perspective at destination and industry level. The assessment produces scores, collaboration ratings and a curated dataset of global best practices.',
    journeyPhases: ['Monitor', 'Assess'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Medium',
    language: 'English',
    provider: 'Interreg',
    access: 'Sign up',
    timeRequired: '2-4 hours',
    preparationNeeded: 'Basic awareness of energy, water, waste, sourcing practices and stakeholder relationships is helpful.',
    output: 'Circularity score, question breakdown, collaboration rating and best-practice dataset',
    bestFor: 'Hotels, guesthouses and accommodation providers of all sizes',
    format: 'Digital tool',
    toolLink: 'https://www.incircle-kp.eu/self-assessment/'
  },
  {
    id: 'resource-041',
    slug: 'bre-smartwaste',
    title: 'BRE SMARTWaste',
    description:
      'A cloud-based construction waste and sustainability tracking platform for waste, materials, carbon, water and transport emissions.',
    about:
      'SMARTWaste helps construction SMEs track waste and carbon data in real time, reduce disposal costs and generate audit-quality Building Research Establishment Environmental Assessment Method (BREEAM) compliance evidence.',
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'High',
    language: 'English',
    provider: 'BRE Group (Building Research Establishment)',
    access: 'Sign up',
    timeRequired: 'Ongoing / per project, with data entry taking minutes per input',
    preparationNeeded: 'Project registration required; scales from 1 to 100+ projects.',
    output: 'Project waste reports, carbon calculations and Building Research Establishment Environmental Assessment Method (BREEAM) evidence packages',
    bestFor: 'Construction SMEs managing new build, refurbishment or demolition projects',
    format: 'Digital tool',
    toolLink: 'https://bregroup.com/products/smartwaste/assessment-tool'
  },
  {
    id: 'resource-042',
    slug: 'levels-eu-sustainable-buildings-framework',
    title: 'Level(s) - EU Sustainable Buildings Framework',
    description:
      'An EU framework for assessing and reporting building sustainability performance across the full lifecycle.',
    about:
      'Level(s) helps construction SMEs measure and report building sustainability across carbon, materials, water, health and life-cycle cost, supporting alignment with EU sustainability requirements. It is an assessment and reporting tool with guidance, templates and e-learning modules to support building sustainability across the full lifecycle, from design to construction, operation and end-of-life. The framework contributes and supports alignment across other EU directives and standards, including the Sustainable Finance, Energy Performance of Buildings Directive (EPBD), Sustainable Development Goals (SDGs) and the European Green Deal. Depending on the manual, elearning module or ressource you choose, the time required, language and access can vary.',
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'High',
    language: 'English',
    provider: 'European Commission (DG Environment)',
    access: 'Free',
    timeRequired: 'Variable, used across the full project lifecycle',
    preparationNeeded: 'None for basic use; building data for full Life Cycle Assessment (LCA).',
    output: 'Lifecycle sustainability assessment and compliance report',
    bestFor: 'Construction SMEs, architects, developers and residential and commercial building projects',
    format: 'Framework, elearning courses and manuals',
    toolLink: 'https://green-forum.ec.europa.eu/green-business/levels/quick-introduction-levels_en'
  },
  {
    id: 'resource-043',
    slug: 'farm-carbon-toolkit',
    title: 'Farm Carbon Toolkit',
    description:
      'A carbon calculator for farms and growers that produces carbon output reports for farm, product and supply-chain emissions work.',
    about:
      'The Farm Carbon Toolkit calculator is designed for farmers and growers, and can also support researchers, agricultural professionals and consultants delivering carbon footprints.',
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Farm Carbon',
    access: 'Sign up',
    timeRequired: '3-4 hours',
    preparationNeeded: 'Overview of your land, produce inputs and outputs.',
    output: 'Carbon output report',
    bestFor: 'Farms looking to reduce scope emissions or value-chain emissions',
    format: 'Digital tool',
    toolLink: 'https://calculator.farmcarbontoolkit.org.uk/'
  },
  {
    id: 'resource-044',
    slug: 'food-circularity-check',
    title: 'Food Circularity Check',
    description:
      'A circularity self-assessment tool designed to help food companies understand their circular economy maturity level.',
    about:
      'The Food Circularity Check is an online self-assessment developed for food and agri-food businesses. It gives companies a structured picture of how circular their operations are and where gaps and opportunities exist.',
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Circular Economy for Food',
    access: 'Free',
    timeRequired: '30-45 minutes',
    preparationNeeded: 'Production and supply-chain data needed.',
    output: 'Downloadable summary showing completion percentage across six categories',
    bestFor: 'Farms looking to reduce scope emissions or value-chain emissions',
    format: 'Questionnaire',
    toolLink: 'https://circulareconomyforfood.eu/en/food-circularity-check/'
  },
  {
    id: 'resource-045',
    slug: 'o-farms-circular-toolkit',
    title: 'O-Farms Circular Toolkit',
    description:
      'A set of six practical tools for agri-SMEs, entrepreneur support organisations and practitioners working with circular agribusinesses.',
    about:
      'The Circular Toolkit by O-Farms supports SMEs in finding inspiration for circular product development, assessing circularity, discovering opportunities, amplifying impact and increasing revenue.',
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'O-farms',
    access: 'Sign up',
    timeRequired: '2-3 hours per workshop',
    preparationNeeded: 'Farm nutrient and input data required.',
    output: 'Completed worksheets to guide internal decisions and external conversations about circular strategy',
    bestFor: 'Arable, livestock and mixed-farm SMEs',
    format: 'Digital tool',
    toolLink: 'https://circulartoolkit.org/'
  },
  {
    id: 'resource-046',
    slug: 'wrap-food-waste-reduction-toolkit',
    title: 'WRAP Food Waste Reduction Toolkit',
    description:
      'Practical measurement and tracking tools for agri-food businesses to quantify food waste, identify hotspots and set reduction targets.',
    about:
      'This Waste and Resources Action Programme (WRAP) data capture sheet supports the Target, Measure, Act principles for food waste reduction and aligns with Sustainable Development Goal 12.3 and the international Food Loss & Waste Standard.',
    journeyPhases: ['Evaluate'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Waste and Resources Action Programme (WRAP)',
    access: 'Free',
    timeRequired: 'Self-directed; modular use',
    preparationNeeded: 'Basic food waste data helpful.',
    output: 'Waste measurement reports, hotspot analysis and action plan',
    bestFor: 'Farmers, growers, food manufacturers and retailers',
    format: 'Digital tool',
    toolLink: 'https://www.wrap.ngo/resources/tool/food-loss-and-waste-data-capture-sheet'
  },
  {
    id: 'resource-047',
    slug: 'circular-toolbox',
    title: 'Circular Toolbox',
    description:
      'A step-by-step toolbox that helps apparel brands adopt circular business models and independently drive circular innovation.',
    about:
      'The Circular Toolbox guides apparel brands through a five-step circular innovation process, from team formation and customer understanding to prototyping, fine-tuning and piloting a new concept.',
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English, Dutch',
    provider: 'Circular Economy',
    access: 'Sign up',
    timeRequired: '10-month process',
    preparationNeeded: 'Leadership sign-off and a cross-functional team.',
    output: 'Guided five-step circular innovation process from team formation to piloting',
    bestFor: 'Textile SMEs and brands',
    format: 'Digital tool',
    toolLink: 'https://thecirculartoolbox.com/html/the-circular-toolbox-is-a-step-by-step-guide-for-apparel-brands-to-design-and-launch-a-rental-or-resale-pilot-in-10-months-the-toolbox-provides-resources-to-accompany-you-along-your-circular-innovation-journey-5ici.html'
  },
  {
    id: 'resource-048',
    slug: 'rehub-eu-textile-recycling',
    title: 'Re.Hub (EU Textile Recycling)',
    description:
      'An EU mapping tool and network for textile collection, sorting and recycling infrastructure.',
    about:
      'Re.Hub connects businesses to Europe\'s textile recycling network and helps identify local collection, sorting and recycling partners to close textile material loops.',
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Low',
    language: 'English',
    provider: 'Re.Hub / European Commission',
    access: 'Sign up',
    timeRequired: 'Self-directed browsing',
    preparationNeeded: 'None',
    output: 'Map of local recycling partners and routes',
    bestFor: 'Textiles SMEs seeking recycling solutions',
    format: 'Digital tool',
    toolLink: 'https://www.rehubs.eu/_files/ugd/e3cc3f_7d307d9d9c084c82b5b23ee5ebbbd493.pdf'
  },
  {
    id: 'resource-049',
    slug: 'fibretrace',
    title: 'Fibretrace',
    description:
      'A fibre traceability platform using embedded tracers and blockchain to authenticate sustainability claims from raw material to finished garment.',
    about:
      'Fibretrace gives textile businesses end-to-end visibility of the supply chain, supporting verified sustainability claims from fibre to finished product.',
    journeyPhases: ['Monitor', 'Assess'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English',
    provider: 'Fibretrace',
    access: 'Paid',
    timeRequired: 'Ongoing / integration required',
    preparationNeeded: 'Platform onboarding needed.',
    output: 'Real-time supply-chain traceability data',
    bestFor: 'Textile and apparel SMEs',
    format: 'Digital tool',
    toolLink: 'https://www.fibretrace.io/'
  },
  {
    id: 'resource-050',
    slug: 'higg-product-tools',
    title: 'Higg Product Tools',
    description:
      'An industry measurement suite for environmental and social sustainability across textile supply chains.',
    about:
      'The Higg Product Module and Higg Materials Sustainability Index provide insights into the environmental impacts of materials and products so designers and organisations can assess, compare and communicate impact performance.',
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Medium',
    language: 'English',
    provider: 'Sustainable Apparel Coalition',
    access: 'Sign up',
    timeRequired: 'Ongoing / continuous',
    preparationNeeded: 'None',
    output: 'Benchmarked sustainability scores and reports',
    bestFor: 'Textile and apparel SMEs',
    format: 'Digital tool',
    toolLink: 'https://cascale.org/tools-programs/higg-index-tools/product-tools/'
  },
  {
    id: 'resource-051',
    slug: 'pdca-form-template',
    title: 'Plan, Do, Check, Act (PDCA) Form Template',
    description:
      'A four-step Plan-Do-Check-Act framework that helps SMEs interpret results, identify root causes and plan targeted improvements.',
    about:
      'The Plan, Do, Check, Act (PDCA) cycle is a continuous improvement framework that works well for circular economy implementation. You can use as an overall project management tool to review results of implemented actions, decide what to adjust, set new targets and implement improvements. The framework is simple yet powerful, and is essential in systematic reviews. || The tool provider also offers templates with more advanced versions of the PDCA framework, including problem solving templates with more detailed fields and other formats such as Excel sheets and google sheets. If the template is too simplified for your use-case, review the more detailed templates in their website: [HERE](https://www.smartsheet.com/content/pdca-templates). These templates can also be utilised to inform your own review document frameworks, wherever these are located for best follow-up.',
    journeyPhases: ['Explore', 'Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'SmartSheet',
    access: 'Free',
    timeRequired: '1-2 hour per review cycle',
    preparationNeeded: 'Collect relevant data and results from the previous implementation cycle for the review part of the PDCA process.',
    output: 'Prioritised action plan for the next circular improvement cycle',
    bestFor: 'All SMEs working with improvement cycles and continuous processes, especially those already implementing circular actions and ready to refine their efforts in a structured way.',
    format: 'PDF template',
    toolLink: 'https://www.smartsheet.com/sites/default/files/2024-09/IC-PDCA-Form-Template-12190_PDF.pdf'
  },
  {
    id: 'resource-052',
    slug: 'circulab-business-ecosystem-canvas',
    title: 'Circulab Business Ecosystem Canvas',
    description:
      'A visual canvas tool to map circular ecosystems, review what is and is not working, and redesign a circular business model from real results.',
    about:
      'The Circulab Business Ecosystem Canvas guides teams through reviewing a current circular model, identifying which value flows are working, which partners to engage differently and where circular revenue opportunities remain untapped.',
    journeyPhases: ['Assess', 'Monitor'],
    placements: {
      phaseSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Circulab',
    access: 'Sign up',
    timeRequired: '2-3 hours',
    preparationNeeded: 'Gather measurement data and key results from your indicators before the session.',
    output: 'Updated circular business model canvas with identified improvements',
    bestFor: 'SMEs already implementing circular actions and ready to refine their model',
    format: 'Digital tool',
    toolLink: 'https://circulab.com/toolbox-circular-economy/'
  },
  {
    id: 'resource-053',
    slug: 'implementation-canvas-circular-business-development-canvas-pack',
    title: 'Implementation Canvas (Circular Business Development Canvas Pack)',
    description:
      'A canvas for mapping concrete, actionable steps for putting a circular strategy into practice once solutions have been identified.',
    about:
      'This implementation canvas is part of the Circular Business Development Canvas Pack. It supports teams in turning chosen circular strategies into concrete roadmaps with actions, owners and timelines.',
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'The Good Tribe',
    access: 'Sign up',
    timeRequired: '60-120 minutes (workshop format)',
    preparationNeeded: 'A Miro account, your circular strategy or audit outputs, and relevant team members or stakeholders.',
    output: 'Structured implementation plan with defined actions, owners and timelines',
    bestFor: 'Teams ready to move from strategy to execution after audit and ideation canvases',
    format: 'Online collaborative whiteboard (Miro template)',
    toolLink: 'https://miro.com/templates/circular-businessdevelopment-canvaspack/'
  },
  {
    id: 'resource-056',
    slug: 'shortlisting-of-options',
    title: 'Shortlisting of Options',
    description:
      'A template for shortlisting circular options and assigning responsibility for reviewing feasibility.',
    about:
      'This resource helps teams move from screened business models to a shortlist of one to three priority strategies that can be developed into a business case.',
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'EU4GRE',
    access: 'Free',
    timeRequired: '15-30 minutes',
    preparationNeeded: 'Basic knowledge of your options, a pen and the printout.',
    output: 'Filled-out shortlist of circular options with responsibilities and priorities',
    bestFor: 'All SMEs that benefit from a quick shortlisting exercise',
    format: 'Print out',
    toolLink: '/downloads/tools/Tool-Shortlisting-your-priority-options.pdf'
  },
  {
    id: 'resource-057',
    slug: 'ncm-business-development-toolkit',
    title: 'NCM business development toolkit',
    description:
      'A toolkit for identifying inefficiencies, customer pain points and circular business model opportunities.',
    about:
      'The Business Model Development Toolkit guides teams through exercises to assess five linear-model inefficiencies, reflect on customer pain points and explore circular business sub-models before choosing opportunities to develop further.',
    journeyPhases: ['Explore','Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'The Nordic Council of Ministers',
    access: 'Free',
    timeRequired: '1-5 hours',
    preparationNeeded: 'Basic knowledge of company operations, a pen and the playbook printouts.',
    output: 'Identified inefficiencies, assessed potential circular business opportunities that lead to a concrete  idea.',
    bestFor: 'All SMEs exploring which circular business models suit their company',
    format: 'PDF exercises / printable worksheet',
    toolLink: 'https://www.nordicinnovation.org/sites/default/files/documents/2021/Nordic%20Circular%20Economy%20Playbook%20-%20Business%20Model%20Development%20Toolkit.pdf'
  },
  {
    id: 'resource-058',
    slug: 'product-design-audit-map',
    title: 'Product Design Audit Map',
    description:
      'A scoring matrix for assessing design flaws in a product lifecycle and identifying circular design improvement suggestions.',
    about:
      'The Design for X (DfX) scoring matrix builds on hotspot analysis and helps teams evaluate resource-intensive products to identify where design changes could improve circularity.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'United Nations Industrial Development Organisation (UNIDO)',
    access: 'Free',
    timeRequired: '45-60 minutes',
    preparationNeeded: 'Printout of scoring sheet, post-its, pens and product samples or specifications.',
    output: 'Circular design improvement suggestions for your products',
    bestFor: 'All SMEs, particularly manufacturing SMEs or businesses with a physical product',
    format: 'Print out',
    toolLink: '/downloads/tools/Tool-Product%20Design%20Audit%20Map.pdf'
  },
  {
    id: 'resource-059',
    slug: 'how-might-we',
    title: 'How Might We',
    description:
      'Reframe problem insights as open-ended How Might We questions, turning challenges into opportunities and creating a productive launchpad for brainstorming.',
    about:
      'The How Might We method from Technical University of Denmark (DTU)\'s Design Kit is a simple but powerful reframing technique used in human-centred design. Teams take insight statements gathered from research and rephrase them as How Might We questions, a format that implies a solution is possible without prescribing what it should be. The method is used in the ideation phase to open creative space before brainstorming. A well-crafted question is neither too narrow, which limits ideas, nor too broad, which makes it hard to act on.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:identify-options']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'DTU Skylab',
    access: 'Free',
    timeRequired: '1 hour',
    preparationNeeded: 'Existing insight statements from prior research, plus pens and post-its.',
    output: 'A set of How Might We questions to guide ideation',
    bestFor: 'Design teams in the ideation phase that have gathered user insights and want solution-neutral design challenges',
    format: 'Print out',
    toolLink: 'https://universaldesignguide.com/method/how-might-we/'
  },
  {
    id: 'resource-060',
    slug: 'bundle-ideas',
    title: 'Bundle Ideas',
    description:
      'A method for moving from a large volume of individual ideas to a smaller set of robust composite solutions.',
    about:
      'Bundle Ideas is an IDEO.org method for moving from divergent brainstorming to convergent concept development by clustering, combining and synthesising the strongest elements across concepts.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'A wall or board covered with ideas and drawings from a prior brainstorm session, plus pens and post-its.',
    output: 'Coherent idea groupings or early-stage solution concepts ready to be developed and shared',
    bestFor: 'Design teams that have completed a brainstorm and need to converge their thinking',
    format: 'Print out',
    toolLink: 'https://www.designkit.org/methods/30.html'
  },
  {
    id: 'resource-061',
    slug: 'create-a-concept',
    title: 'Create a Concept',
    description:
      'A method for developing bundled ideas into polished, testable concepts that address the original design challenge.',
    about:
      'Create a Concept is an IDEO.org method that bridges ideation and prototyping. Teams turn their strongest idea clusters into coherent concepts that are more complete than raw ideas but not yet final solutions.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'Bundled idea clusters from a prior session, plus pens, post-its and paper.',
    output: 'One or more robust concept drafts ready to be tested with end users',
    bestFor: 'Design teams ready to commit to a direction before prototyping',
    format: 'Print out',
    toolLink: 'https://www.designkit.org/methods/create-a-concept.html'
  },
  {
    id: 'resource-062',
    slug: 'safe-and-circular-product-redesign',
    title: 'Safe and Circular Product Redesign',
    description:
      'A workshop that challenges participants to redesign a commercial carpet tile to be safe and circular.',
    about:
      'This Ellen MacArthur Foundation workshop helps users understand the implications of choosing materials for circular products, including the need to design out chemicals of concern and enable material recovery.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: '1.5 hours',
    preparationNeeded: 'Works best with a diverse team from different backgrounds.',
    output: 'Three redesign concepts documented with a memorable name',
    bestFor: 'All SMEs that can benefit from a redesign workshop',
    format: 'Printeable workshop template',
    toolLink: 'https://www.ellenmacarthurfoundation.org/product-redesign-workshop'
  },
  {
    id: 'resource-063',
    slug: 'circular-design-toolbox',
    title: 'Circular Design Toolbox',
    description:
      'A collection of canvas-based tools for assessing, ideating, developing and communicating circular economy strategies.',
    about:
      'The Ecodesign Toolkit by EcoDesign Circle is an open-access collection of downloadable PDFs and interactive Mural boards for circular and ecodesign work across products, services, systems and business models.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EcoDesign Circle / Fraunhofer IZM',
    access: 'Free',
    timeRequired: 'Varies by tool; individual canvases can be used in 1-3 hour workshops',
    preparationNeeded: 'Low; most tools are available as free PDF downloads and/or Mural online boards.',
    output: 'Completed canvases, design briefs, business model concepts, ecodesign assessments or pitch materials',
    bestFor: 'SMEs, designers and sustainability professionals integrating circular thinking into product, service and business strategy',
    format: 'Toolbox',
    toolLink: 'https://circulardesign.tools/'
  },
  {
    id: 'resource-065',
    slug: 'wrap-textiles-sorting-and-recycling-database',
    title: 'WRAP Textiles Sorting and Recycling Database',
    description:
      'A database mapping textile sorting and recycling capacity.',
    about:
      'This Waste and Resources Action Programme (WRAP) database maps textile sorting and recycling infrastructure, helping brands, waste managers and local authorities match textile waste streams with suitable sorting and recycling partners. It supports the development of end-of-life routes for used and unwanted textiles.',
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Low',
    language: 'English',
    provider: 'Waste and Resources Action Programme (WRAP)',
    access: 'Free',
    timeRequired: 'N/A',
    preparationNeeded: 'None',
    output: 'Directory of sorting and recycling providers and capabilities',
    bestFor: 'Textile brands and waste managers seeking end-of-life partners',
    format: 'Online database',
    toolLink: 'https://airtable.com/appHr39OzGJywew0j/shr8Ngc3JEAGtGSDy/tbl7pBGFWDXP01FmS/viw5GB3B8Q1fqkDZQ'
  },
  {
    id: 'resource-066',
    slug: 'carbonfact-digital-product-passport-software',
    title: 'Carbonfact - Digital Product Passport (DPP) Software',
    description:
      'Software for building Life Cycle Assessment (LCA)-based Digital Product Passports for fashion and apparel products.',
    about:
      'Carbonfact runs product-level life cycle assessments across a brand catalogue and publishes the results as consumer-facing Digital Product Passports with Quick Response (QR) codes. It covers 16 Product Environmental Footprint (PEF) environmental indicators and the French Eco-Score, helping brands and suppliers prepare for upcoming EU textile Digital Product Passport (DPP) requirements.',
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English',
    provider: 'Carbonfact',
    access: 'Paid',
    timeRequired: 'N/A',
    preparationNeeded: 'None',
    output: 'Digital Product Passport (DPP) pages with Quick Response (QR) codes and 16 Product Environmental Footprint (PEF) indicators',
    bestFor: 'Fashion, footwear and apparel brands preparing for EU Digital Product Passport (DPP)',
    format: 'Software as a Service (SaaS) platform',
    toolLink: 'https://www.carbonfact.com/digital-product-passport-software'
  },
  {
    id: 'resource-067',
    slug: 'youcontrol-esg-profile-for-business',
    title: 'YouControl - ESG profile for Business',
    description:
      'Automates the assessment of environmental, social and governance (ESG) factors of Ukrainian companies.',
    about:
      'YouControl Environmental, social and governance (ESG) Profile helps users check Ukrainian companies by name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code, review an environmental, social and governance (ESG) profile, and use automated sustainability assessment as a pre-screen before deeper due diligence.',
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'YouControl (Ukraine)',
    access: 'Paid',
    timeRequired: '30-60 minutes for the interface; 2-3 hours to understand the categories',
    preparationNeeded: 'Company name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code of the entity to be checked',
    output: 'Environmental, social and governance (ESG) profile with environmental and social (E&S) impact category and sustainability signals',
    bestFor: 'SMEs applying for bank finance, exporters and procurement teams',
    format: 'Online module',
    toolLink: 'https://youcontrol.com.ua/esg-for-business/'
  },
  {
    id: 'resource-068',
    slug: 'saveecobot-esg-profile-of-an-enterprise',
    title: 'SaveEcoBot - Environmental, social and governance (ESG) Profile of an Enterprise',
    description:
      'Collects and systematises environmental, social and governance data for enterprises.',
    about:
      'SaveEcoBot Environmental, social and governance (ESG) gives users access to a catalogue of company documents, permits, licences, reports, declarations, inspections and environmental records. It supports a standardised environmental, social and governance (ESG) compliance check and downloadable PDF extracts for due diligence.',
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'SaveEcoBot (Environmental, social and governance (ESG) SaveEcoBot)',
    access: 'Paid',
    timeRequired: '1-2 hours to read the document catalogue',
    preparationNeeded: 'Name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code of the enterprise or sole trader',
    output: 'Environmental, social and governance (ESG) profile, automated risk assessment and a PDF extract',
    bestFor: 'SMEs preparing for bank, investor or buyer environmental and social (E&S) due diligence',
    format: 'Online platform and Application Programming Interface (API) access',
    toolLink: 'https://esg.saveecobot.com/'
  },
  {
    id: 'resource-069',
    slug: 'recycle-marketplace-for-recyclables',
    title: 'Recycle - Marketplace for Recyclables',
    description:
      'A marketplace for selling sorted recyclables to certified buyers and reducing waste costs.',
    about:
      'Recycle allows businesses to register, sort and accumulate recyclable materials, request pickup, and receive payment after carrier weighing. It supports documentation and waste reporting for participating organisations.',
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'Recycle (LLC Recycle UA), Ukraine',
    access: 'Sign up',
    timeRequired: '10-15 minutes to register, plus time for account confirmation',
    preparationNeeded: 'Sorted recyclables and a bank account of a company or sole trader',
    output: 'Income from recyclables, primary documents and waste reports',
    bestFor: 'SMEs, offices, food service, producers and condominiums',
    format: 'Mobile app and web account',
    toolLink: 'https://recycle-app.com/'
  },
  {
    id: 'resource-070',
    slug: 'ecohub-zero-waste-kharkiv',
    title: 'EcoHub - Zero Waste Kharkiv',
    description:
      'A public space for putting zero waste principles into practice through sorting, reuse and repair.',
    about:
      'EcoHub Zero Waste Kharkiv provides sorting rules, a self-service deep sorting station, a Reuse Lab, and paid support services such as re-sorting, consultation and delivery.',
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian',
    provider: 'NGO Zero Waste Kharkiv',
    access: 'Free',
    timeRequired: '20-30 minutes to read sorting rules; 1-2 hours for a first visit',
    preparationNeeded: 'Clean, dry and pre-sorted waste; reusable items where relevant',
    output: 'Waste sent to recycling and items reused, repaired or resold',
    bestFor: 'Micro and small businesses in Kharkiv region, including retail and food service',
    format: 'Physical hub plus website with sorting rules and guides',
    toolLink: 'https://zerowastekharkiv.org.ua/ecohub'
  },
  {
    id: 'resource-071',
    slug: 'cc-yard-circular-construction-yard',
    title: 'CC Yard - Circular Construction Yard',
    description:
      'Supports reuse of building materials salvaged from damaged buildings.',
    about:
      'CC Yard and Zero Waste Yard in Kharkiv collect, sort, record and store reusable building materials such as bricks, timber, windows, doors, roofing and sanitary ware so they can return to use in repair and reconstruction.',
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'Ukrainian',
    provider: 'NGO Zero Waste Kharkiv with Derhachi city council',
    access: 'Free',
    timeRequired: '15 minutes to get oriented',
    preparationNeeded: 'Contact the team in advance; materials must be fit for reuse',
    output: 'Reusable bricks, timber, windows, doors and sanitary ware',
    bestFor: 'Construction SMEs and communities repairing damaged buildings',
    format: 'Physical sites',
    toolLink: 'https://zerowastekharkiv.org.ua/'
  },
  {
    id: 'resource-073',
    slug: 'national-map-of-recycling-collection-points',
    title: 'National Map of Recycling Collection Points',
    description:
      'An online map for finding where to hand over sorted recyclables across Ukraine.',
    about:
      'The map helps users find nearby recycling collection points, check accepted materials, read sorting guidance, add missing points and report closed points.',
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'Ukrainian',
    provider: "Youth movement Let's do it Ukraine, supported by PepsiCo",
    access: 'Free',
    timeRequired: '20-30 minutes if reading sorting rules by fraction',
    preparationNeeded: 'Know which materials you need to hand over',
    output: 'Address, contacts and accepted materials of the nearest points',
    bestFor: 'Micro and small businesses, offices and condominiums',
    format: 'Interactive online map with sorting guidance',
    toolLink: 'https://recyclingpoints.org/'
  },
  {
    id: 'resource-074',
    slug: 'calculator-of-waste-from-destruction',
    title: 'Calculator of Waste from Destruction',
    description:
      'Estimates the volume of waste generated by war-related building damage.',
    about:
      'The calculator helps users estimate demolition waste by selecting building type, development type, storeys and relevant damage conditions such as fire or asbestos-containing materials.',
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'Ukraine Support Team coalition; methodology by NGO Rethink',
    access: 'Free',
    timeRequired: '1-2 hours to read methodology; 5-10 minutes for a first calculation',
    preparationNeeded: 'Building type, number of storeys and demolition or footprint area',
    output: 'Estimated quantity of demolition waste for a given building',
    bestFor: 'Construction and demolition SMEs, communities and utilities',
    format: 'Online calculator plus PDF methodological recommendations',
    toolLink: 'https://ustcoalition.com.ua/online-instruments'
  },
  {
    id: 'resource-075',
    slug: 'guide-waste-management-infrastructure-projects',
    title: 'Guide: Waste Management Infrastructure Projects',
    description:
      'A step-by-step guide showing how waste management infrastructure projects have been delivered.',
    about:
      'The guide includes more than 30 practical cases from Ukraine and the EU, covering waste prevention, reuse and repair, separate collection, recycling, composting, recovery, disposal and education.',
    journeyPhases: ['Learn'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'Ukrainian',
    provider: 'Ukrainian Zero Waste Alliance',
    access: 'Free',
    timeRequired: '4-6 hours to read in full',
    preparationNeeded: 'None',
    output: '30+ practical cases from Ukraine and the EU with implementation steps',
    bestFor: 'Communities, utilities and SMEs working with them',
    format: 'PDF, published via Google Drive',
    toolLink: 'https://drive.google.com/file/d/1gPIz3KfLrAf--tc9tM4gbL2u2VfKBggH/view'
  },
  {
    id: 'resource-076',
    slug: 'circulup-embedding-circularity-toolkit',
    title: 'CirculUP! Embedding Circularity Toolkit',
    description:
      'A localised toolkit helping Armenian SMEs apply circular design principles.',
    about:
      'CirculUP! provides downloadable resources tailored for Armenian SMEs, incubators and accelerators, including toolkits and Circular Economy Guidelines in Armenian and English.',
    journeyPhases: ['Learn','Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Armenian, English',
    provider: 'CirculUP! (Impact Hub Yerevan & Environment and Health NGO)',
    access: 'Free',
    timeRequired: '1-2 hours',
    preparationNeeded: 'None',
    output: 'Toolkit for incubators and accelerators; Circular Economy (CE) Guidelines in Armenian and English',
    bestFor: 'Armenian small-medium enterprises (SMEs), incubators and accelerators',
    format: 'PDF toolkit',
    toolLink: 'https://circulup.am/resources'
  },
  {
    id: 'resource-077',
    slug: 'recycle-it-waste-sorting-logistics-network',
    title: 'Recycle It! Waste Sorting and Logistics Network',
    description:
      'Provides direct access to sorting bins and recyclable pickup for Armenian organisations.',
    about:
      'Recycle It! is a practical logistics service that provides sorting bins for plastic, paper, glass and metal, plus routine pickup and transport to local recycling sites.',
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'ISSD NGO (Innovative Solutions for Sustainable Development)',
    access: 'Free',
    timeRequired: '15-20 minutes',
    preparationNeeded: 'None',
    output: 'On-site sorting bins and scheduled pickup to recycling sites',
    bestFor: 'Armenian businesses wanting to start sorting waste',
    format: 'On-the-ground service; phone/email sign-up',
    toolLink: 'https://issdngo.com/en/start-sorting'
  },
  {
    id: 'resource-078',
    slug: 'green-economy-online-training-for-armenia',
    title: 'Green Economy Online Training for Armenia',
    description:
      'An e-learning course on inclusive green economies and resource efficiency.',
    about:
      'This localised, interactive course equips SME managers, environmental officers and civil servants with a basic understanding of inclusive green economies and resource efficiency.',
    journeyPhases: ['Learn'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'English',
    provider: 'American University of Armenia (AUA)',
    access: 'Free',
    timeRequired: '1 day',
    preparationNeeded: 'None',
    output: 'Completion of an online training course',
    bestFor: 'SME managers, environmental officers and civil servants',
    format: 'E-learning course',
    toolLink: 'https://ilearngreen.aua.am/'
  },
  {
    id: 'resource-079',
    slug: 'mershenq-undp-gcf-energy-efficient-building-retrofits',
    title: 'Mershenq - UNDP-GCF Energy Efficient Building Retrofits',
    description:
      'Reports and guidelines on building energy efficiency retrofits.',
    about:
      'Mershenq provides reports, trainings, guidelines and resources related to building energy efficiency, retrofitting and emissions reduction under a United Nations Development Programme (UNDP)-Green Climate Fund (GCF) project. Materials include guidebooks, energy audit guidance and Energy Management Information System (EMIS) training.',
    journeyPhases: ['Assess', 'Implement'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'English, Armenian',
    provider: 'UNDP Armenia',
    access: 'Free',
    timeRequired: '1-2 hours per publication',
    preparationNeeded: 'None',
    output: 'Guidebooks, training courses and monitoring methodologies',
    bestFor: 'Facility managers, contractors and municipalities',
    format: 'PDF guidebooks and training courses',  
    toolLink: 'https://mershenq.am/en/publications/guidelines'
  },
  {
    id: 'resource-080',
    slug: 'recp-armenia-resources',
    title: 'Resource Efficient and Cleaner Production (RECP) Armenia Resources',
    description:
      'Resources supporting Resource Efficient and Cleaner Production implementation.',
    about:
      'Resource Efficient and Cleaner Production (RECP) Armenia resources include primers, leaflets and business cases documenting how Armenian small-medium enterprises (SMEs) applied Resource Efficient and Cleaner Production measures across food production, poultry, battery manufacturing, dried fruit processing, lime production, construction and dairy processing.',
    journeyPhases: ['Learn'],
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'EU4Environment',
    access: 'Free',
    timeRequired: 'N/A',
    preparationNeeded: 'None',
    output: 'Resource Efficient and Cleaner Production (RECP) toolkit and supporting materials',
    bestFor: 'Armenian small-medium enterprises (SMEs), manufacturing and industrial sectors',
    format: 'PDF toolkit',
    toolLink: 'https://recp.am/en/news/recp-materials'
  },
  {
    id: 'resource-081',
    slug: 'acba-business-club-and-sme-courses',
    title: 'ACBA Business Club and SME Courses',
    description:
      'Networking and free trainings for Armenian small-medium enterprises (SMEs).',
    about:
      'ACBA Business Club provides Armenian small-medium enterprises (SMEs) with networking opportunities and free business management trainings, including modules covering environmental, social and governance (ESG), strategy and sustainable business adaptation.',
    journeyPhases: ['Explore'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Armenian',
    provider: 'ACBA Bank OJSC',
    access: 'Free',
    timeRequired: '2-4 hours',
    preparationNeeded: 'None',
    output: 'Free training courses and networking events',
    bestFor: 'Armenian small-medium enterprises (SMEs) managers',
    format: 'Online courses and networking events',
    toolLink: 'https://sme.acba.am/hy/courses'
  },
  {
    id: 'resource-082',
    slug: 'recyclass-steel',
    title: 'Recyclass Steel',
    description:
      'A free self-assessment platform for evaluating how well steel packaging is designed for recycling.',
    about:
      "The RecyClass Steel Tool is a free online self-assessment platform, published by RecyClass with CIRCPACK (Veolia), that lets brands evaluate steel packaging recyclability against the RecyClass Recyclability Methodology, aligned with EN 13430. Users work through five steps: describing the packaging, confirming eligibility under the methodology's scope, selecting packaging type, and completing a Design for Recycling assessment covering mass balance (recoverable material), design incompatibilities affecting recyclate quality, and an \"easy to empty\" index. || The tool then assigns a class: A (no recyclability issues, closed-loop potential), B (minor issues, mostly closed-loop), C (issues affecting quality or causing material loss), or Not Recyclable (major design flaws or missing EU collection infrastructure). Results and a downloadable PDF report are generated once the analysis is complete, alongside a mapping of European waste management systems. It's meant as a design and screening aid, not certification; independent third-party verification is still required for formal recyclability claims.",
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Circpack',
    access: 'Free',
    timeRequired: '15 – 30 minutes',
    preparationNeeded: 'Knowledge of your packaging materials including mass, dimensions and design features',
    output: 'Recyclability class and a downloadable PDF report with improvement recommendations (sign up required to download report).',
    bestFor: 'Manufacturers, brands and retailers using or designing steel packagings',
    format: 'Online analysis tool',
    toolLink: 'https://tool.recyclass.eu/en/steel/tool/#step-1'
  },
  {
    id: 'resource-083',
    slug: 'recyclass-aluminium',
    title: 'Recyclass Aluminium',
    description:
      'A free self-assessment platform for evaluating how well alumminium packaging is designed for recycling.',
    about:
      "The RecyClass Aluminium Tool is a free online self-assessment platform, published by RecyClass with CIRCPACK (Veolia), that lets brands evaluate aluminium packaging recyclability against the RecyClass recyclability methodology, aligned with EN 13430. Users work through five steps: describing the packaging, confirming eligibility (mainly aluminium by weight, accepted in household collection), selecting packaging type and characteristics (cans, bottles, foil, thickness, sortability), and entering total versus aluminium net weight to calculate a mass-balance ratio. || The tool then assigns a class: A (95%+ recyclable content), B (80 to 95%), C (70 to 80%), or Not Recyclable (below 70%). It's meant as a design and screening aid, not certification. RecyClass notes the output can support evidence for the EU's PPWR (Regulation 2025/40) but isn't sufficient proof of conformity on its own; independent third-party certification is still required.",
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Circpack',
    access: 'Free',
    timeRequired: '15 – 30 minutes',
    preparationNeeded: 'Knowledge of your packaging materials including mass, dimensions and design features',
    output: 'Recyclability class and a downloadable PDF report with improvement recommendations (sign up required to download report).',
    bestFor: 'Manufacturers, brands and retailers using or designing aluminium packagings',
    format: 'Online analysis tool',
    toolLink: 'https://tool.recyclass.eu/en/aluminium/tool/#step-1'
  },
  {
    id: 'resource-084',
    slug: 'design-for-x-dfx-framework',
    title: 'The Design for X (DfX) Explorer',
    description:
      'To identify concrete design strategies that support reuse, repair, refurbishment, remanufacturing and recycling',
    about:
      'Design for X is an interactive tool that helps you explore how products, components and systems can be designed for different circular strategies. Design for X stands for multiple design strategies, where X can stand for reuse, longevity, repair, reassembly,etc. Therefore it is Design for X.|| With this online tool, you can filter according to the circular outcome you want to enable, such as reuse, maintenance, refurbishment, remanufacturing or recycling, and explore relevant design approaches. || The tool encourages you to think beyond the product itself and consider the full lifecycle, including production, use, maintenance, reverse logistics and recovery. This makes it useful when translating a broad circular ambition into more concrete product and system design choices.',
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: ['Cross-sector','Manufacturing'],
    effort: 'Low',
    language: 'English',
    provider: 'Circular Design',
    access: 'Free',
    timeRequired: '30-60 minutes for an initial exploration.',
    preparationNeeded:
      'No preparation needed, as this tools is to inspire and learn about the DfX framework.',
    output:
      'A selection of relevant design strategies and considerations that can be used to develop or improve a circular product concept.',
    bestFor:
      'SMEs exploring circular product design principles and early redesign opportunities.',
    format: 'Interactive online tool',
    toolLink: 'https://www.circulardesign.it/design-for-x/#Reuse'
  },
  {
    id: 'resource-085',
    slug: 'proteus-pss-tool-book',
    title: 'PROTEUS Product-Service System Tool Book',
    description:
      'To develop circular product-service systems and new ways of creating value.',
    about:
      'The PROTEUS Product-Service System Tool Book helps teams explore how products and services can be combined into new value propositions. Rather than focusing only on selling more physical products, product-service systems focus on the outcome or value a customer needs and consider which combination of products, services and relationships can deliver it. || The workbook brings together 11 tools covering areas such as the business ecosystem, user activities, product lifecycles, service design, total cost of ownership and concept evaluation. The tools can be used individually or combined within a structured process moving from analysing the current situation, to defining priorities, developing concepts and evaluating the most promising options.',
    journeyPhases: ['Explore', 'Evaluate'],
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'Technical University of Denmark (DTU) / PROTEUS Innovation Consortium',
    access: 'Free',
    timeRequired:
      'Variable. Individual workshops typically require a few hours plus preparation; using several tools as part of a full development process requires multiple sessions.',
    preparationNeeded:
      'Choose the product, service or business opportunity you want to explore. Bring together a cross-functional team and gather relevant knowledge about customers, products and services, the value chain and business performance.',
    output:
      'Structured product-service system concepts, supported by a better understanding of customer needs, lifecycle opportunities, stakeholders, value creation and business implications.',
    bestFor:
      'Product-based and manufacturing small-medium enterprises (SMEs) that want to explore service-based or outcome-based business models.',
    format: 'PDF workbook and workshop tools',
    toolLink: 'https://backend.orbit.dtu.dk/ws/portalfiles/portal/81262011/PSS_Tool_Book.pdf'
  },
  {
    id: 'resource-086',
    slug: 'value-chain-mapping-as-is',
    title: 'Value Chain Mapping / As-Is',
    description:
      'To understand your current value chain and identify where circular opportunities may exist.',
    about:
      'The As-Is Value Chain Mapping tool helps your team build a shared picture of how your current value chain works before trying to redesign it. It takes you through the different stages of the value chain and helps distinguish between activities controlled by your organisation and those carried out by suppliers, customers or other partners. || For each stage, the team maps the resources being used, important stakeholders, inefficiencies and wider influences such as regulation or market trends. Connections between these elements are then made visible, revealing where resources or capabilities are underused, where value is lost and where collaboration may be required.',
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EIS / HI Advisory',
    access: 'Free',
    timeRequired: '2-3 hours',
    preparationNeeded:
      'Bring together participants with knowledge from different parts and levels of the organisation. Print the worksheet in a large format or recreate it on a digital whiteboard, and have sticky notes and pens ready.',
    output:
      'A visual map of the current value chain showing key stages, resources, stakeholders, inefficiencies and external influences.',
    bestFor:
      'Small-medium enterprises (SMEs) that want to understand their current system before identifying circular strategies, redesigning their value chain or engaging new partners.',
    format: 'Printable worksheet',
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-4_value-chain-mapping_a2.pdf'
  },
  {
    id: 'resource-087',
    slug: 'user-interviews',
    title: 'User Interviews',
    description:
      'To understand user needs, behaviours and barriers before designing circular solutions.',
    about:
      'User interviews help you understand how customers, users and other stakeholders actually experience a product, service or system. In a circular economy context, this is important because solutions such as reuse, repair, sharing, take-back and product-service models often depend on people changing behaviours or interacting with a product in new ways. || The worksheet supports the preparation of a semi-structured interview plan based on research questions. It encourages open questions, follow-up questions and systematic recording of insights across interviewees, so recurring needs, challenges and patterns can inform circular solution development.',
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EIS / HI Advisory',
    access: 'Free',
    timeRequired: '1-2 weeks, including preparation, interviews and collection of insights',
    preparationNeeded:
      'Define what you need to learn and which user or stakeholder groups you need to speak to.',
    output:
      'Structured qualitative insights into user needs, behaviours, motivations, barriers and opportunities.',
    bestFor:
      'Small-medium enterprises (SMEs) developing solutions where customer or user behaviour is important, including reuse, repair, sharing, return systems and service models.',
    format: 'Printable interview planning worksheet',
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-6_user-interviews_a2.pdf'
  },
  {
    id: 'resource-088',
    slug: 'cevaluator',
    title: 'CEvaluator',
    description:
      'To assess the circularity, opportunities and financing risks of a circular project.',
    about:
      'CEvaluator is an online checklist for examining a circular project from both a circularity and financing perspective. It was originally developed to help financial organisations assess circular investment cases, but it can also help small-medium enterprises (SMEs) prepare a circular project or financing application. || The assessment considers circular design and production, circular use models, value retention, environmental sustainability, opportunities and risks. Rather than producing a single circularity percentage, CEvaluator provides a qualitative overview of how a project performs across different dimensions and where additional evidence or risk mitigation may be needed.',
    journeyPhases: ['Assess', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:verify-potential'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English, Dutch, French',
    provider: 'Circular Flanders / OVAM / VITO',
    access: 'Free',
    timeRequired:
      'Variable, depending on the complexity of the project and how much supporting information is already available.',
    preparationNeeded:
      'Have a clear description of the project and business model available, together with evidence on circular activities, environmental performance, financing needs, risks and expected benefits.',
    output:
      'A qualitative overview of circular performance together with relevant opportunities and risks for financing the project.',
    bestFor:
      'Circular small-medium enterprises (SMEs) preparing an investment or funding case, as well as organisations evaluating whether a circular project is ready for financing.',
    format: 'Online assessment',
    toolLink: 'https://www.cevaluator.be/'
  },
  {
    id: 'resource-089',
    slug: 'test-card',
    title: 'Test Card',
    description:
      'To turn assumptions about a new solution into clear experiments that can be tested.',
    about:
      'The Test Card helps your team test whether the assumptions behind a new product, service or business model hold up in practice before committing substantial resources to implementation. Instead of relying on discussion or intuition, the tool turns an assumption into a structured experiment with clear evidence and a predefined threshold for success. || For a circular solution, this could involve testing whether customers will return a product, whether they are willing to pay for repair or rental, whether a supplier will accept recovered materials, or whether a new service can operate at an acceptable cost.',
    journeyPhases: ['Evaluate', 'Implement'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Strategyzer',
    access: 'Free',
    timeRequired:
      'Around 30-60 minutes to design an individual test, followed by the time required to carry out the experiment.',
    preparationNeeded:
      'Start with a circular solution or business-model concept that you want to evaluate. Identify the assumptions that are most important for the idea to succeed.',
    output:
      'A clearly defined experiment describing the assumption to test, how it will be tested, what evidence will be collected and the threshold for success.',
    bestFor:
      'Small-medium enterprises (SMEs) that have developed a circular concept but still need evidence about demand, behaviour, operations, partnerships, pricing or other assumptions.',
    format: 'Printable test card / digital worksheet',
    toolLink: 'https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card'
  },
  {
    id: 'resource-090',
    slug: 'circular-designs-evaluation-pack',
    title: 'Circular Designs Evaluation Pack',
    description:
      'To compare circular concepts and decide which ideas are worth pursuing.',
    about:
      'The Circular Designs Evaluation Pack helps your team assess and compare circular product and service concepts before investing further time and resources in development. Instead of looking only at environmental benefits, the tool examines each concept from three perspectives: whether it creates value for users, whether it makes sense for the organisation and whether it is likely to benefit the environment. || Concepts can then be positioned according to their potential and difficulty of implementation. This makes it easier to distinguish quick opportunities, ideas requiring further development and more ambitious concepts that could deliver significant benefits but require substantial organisational change.',
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Use2Use / Chalmers University of Technology',
    access: 'Free',
    timeRequired:
      'Approximately 45-60 minutes for 1-3 concepts. More complex concepts may require additional research before the assessment can be completed.',
    preparationNeeded:
      'Select one to three circular concepts to compare and describe each one briefly. Ideally involve people who understand customers, operations, sustainability and the commercial side of the business.',
    output:
      'A structured comparison of circular concepts showing user value, organisational value, environmental benefits, implementation challenges and questions requiring further investigation.',
    bestFor:
      'Small-medium enterprises (SMEs) that have generated several circular product or service ideas and need to decide which concepts should progress.',
    format: 'Printable evaluation canvas',
    toolLink: 'https://usercontent.one/wp/www.use2use.se/wp-content/uploads/2022/03/CircularDesignsEvaluationPack.pdf'
  },
  {
    id: 'resource-091',
    slug: 'circular-pilot-canvas',
    title: 'Circular Pilot Canvas',
    description:
      'To plan a real-world pilot and test whether a circular solution can work in practice.',
    about:
      'The Circular Pilot Canvas helps your team turn a promising circular concept into a structured real-world pilot. It is designed around three fundamental questions: Is there demand for the solution? Is the circular business model worthwhile? And can the organisations involved actually deliver it? || The canvas brings these questions together across value proposition, circular business model, and feasibility and readiness. The team defines what the pilot will test, who needs to participate, what value the solution creates, how circularity will be measured and how responsibilities are distributed.',
    journeyPhases: ['Evaluate','Implement'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot'],
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: ['Cross-sector', 'Construction', 'Manufacturing'],
    effort: 'Medium',
    language: 'English',
    provider: 'Nordic Circularity Piloting Program / Combient Pure',
    access: 'Free',
    timeRequired:
      'Approximately 1.5 to 2 hours for an initial pilot-planning workshop.',
    preparationNeeded:
      'A circular solution selected for further development. Bring together the organisations or functions needed to deliver the pilot and prepare initial information on customers, partners, benefits, costs and operational requirements.',
    output:
      'A structured pilot plan covering what will be tested, stakeholders, expected benefits, circularity goals, costs, risks, roles, success criteria, and timeline.',
    bestFor:
      'Small-medium enterprises (SMEs) that want to test a circular product, service or business model with customers and value-chain partners under real-world conditions.',
    format: 'Printable canvas',
    toolLink: 'https://assets.ctfassets.net/a2tjr1gs85zs/7nITcohRhMxFY7aLd3KlH4/668c49380f237b3e326d996058355437/Circular_Piloting_Canvas.pdf'
  },
  {
    id: 'resource-092',
    slug: 'prioritising-circular-solutions',
    title: 'Prioritising Circular Solutions',
    description:
      'To identify which circular ideas should be taken forward first.',
    about:
      'The Prioritising Circular Solutions tool helps your team move from a long list of circular ideas to a smaller number of priorities for further development. It is particularly useful after an ideation workshop, when many possible actions have been generated but it is not yet clear which ones deserve attention first. || The team consolidates the ideas and positions them on a visual matrix according to expected impact, contribution or effort required and timing. The result is a practical first prioritisation that can feed into business-case development, feasibility assessment or implementation planning.',
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'EIS Circular Design Toolbox / HI Advisory',
    access: 'Free',
    timeRequired: '45-60 minutes',
    preparationNeeded:
      'Bring the circular ideas or solutions generated during earlier analysis or ideation activities. Remove obvious duplicates and formulate each idea clearly enough for comparison.',
    output:
      'A visual prioritisation of circular solutions, including a small number of high-priority actions to take forward.',
    bestFor:
      'Small-medium enterprises (SMEs) that have identified several possible circular actions and need a quick, collaborative method for agreeing what to focus on first.',
    format: 'Printable prioritisation matrix',
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-11_prioritising-circular-solutions_a2.pdf'
  },
  {
    id: 'resource-093',
    slug: 'authorized-waste-operator-search',
    title: 'Căutare operatori autorizați pe tip de deșeu',
    description:
      'Interactive Power BI dashboard for finding licensed waste and recycling operators by waste type.',
    about:
      'Built under the Waste Statistics - Key Facilitator for the Circular Economy project, this dashboard pulls data from the Environment Agency on authorised waste management operators, their permits and contact details. Users can search by waste type to identify licensed recyclers or collectors and access relevant permit documents.',
    journeyPhases: ['Implement'],
    sector: ['Cross-sector', 'Waste Management', 'Recycling'],
    effort: 'Low',
    language: 'Romanian',
    provider: 'E-Circular, funded by the Austrian Development Agency (ADA/ADC)',
    access: 'Free',
    timeRequired: '5-15 minutes per search',
    preparationNeeded: 'Know the waste type or category you need to search for.',
    output:
      'A list of authorised operators with permit details and contact information per waste type.',
    bestFor:
      'Businesses, local authorities and citizens looking to identify a licensed recycler or waste operator for a specific waste stream.',
    format: 'Digital tool',
    toolLink: 'https://e-circular.org/statistici/cautare-operatori-autorizatii/'
  },
  {
    id: 'resource-094',
    slug: 'organic-armenia-all-green-circular-economy',
    title: 'Organic Armenia - All Green Educational Platform',
    description:
      'Webpage introducing circular economy principles and their link to organic agriculture, with a downloadable awareness-raising booklet.',
    about:
      'Part of Organic Armenia\'s All Green educational platform, this page explains circular economy principles as an alternative to the linear produce-use-discard model and connects them to organic agriculture practices such as composting, returning crop residues to soil and renewable energy use. || It links to the Armenian booklet Circular Economy and Organic Agriculture: Their Connection, Composting, prepared under the EU-funded Circular Future programme in cooperation with Impact Hub Yerevan and Environment and Health NGO.',
    journeyPhases: ['Learn'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Low',
    language: 'English, Armenian',
    provider:
      'Organic Armenia Agricultural Association NGO; booklet co-funded by the European Union through CirculUP!',
    access: 'Free',
    timeRequired: '20-30 minutes',
    preparationNeeded: 'None',
    output: 'Awareness resource and downloadable booklet',
    bestFor:
      'Farmers, smallholders and agri-businesses new to circular economy concepts, particularly in organic and agricultural value chains.',
    format: 'Downloadable PDF',
    toolLink: 'https://www.organicarmenia.bio/en/all-green/circular-economy'
  },
  {
    id: 'resource-095',
    slug: 'organic-armenia-training',
    title: 'Organic Armenia - Training',
    description:
      'Directory of training courses on organic agriculture and circular economy, including a dedicated circular economy course.',
    about:
      'Organic Armenia Training lists professional development courses run by Organic Armenia. It includes Organic Agriculture: From Introduction to Practical Application and Circular Future, an online course covering circular economy principles, zero-waste approaches and composting or vermicomposting as circular economy examples in organic production. || Some listed courses may show as completed, so the page can function as both a course catalogue and a place to check whether new cohorts are planned.',
    journeyPhases: ['Learn'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'High',
    language: 'Armenian, English',
    provider: 'Organic Armenia Agricultural Association NGO',
    access: 'Free',
    timeRequired:
      'Multi-week hybrid programme for organic agriculture; shorter online format for the Circular Future course.',
    preparationNeeded: 'None to browse; registration or interest submission may be needed to join a future cohort.',
    output: 'Structured training curricula and certificates of participation for completed cohorts',
    bestFor:
      'Farmers, smallholders and organisations wanting structured circular economy and organic agriculture training in Armenia.',
    format: 'Digital training catalogue',
    toolLink: 'https://www.organicarmenia.bio/en/all-green/trainings'
  },
  {
    id: 'resource-096',
    slug: 'stakeholder-value-mapping',
    title: 'Stakeholder Value Mapping',
    description:
      'To understand what different stakeholders gain or lose from a circular solution and identify opportunities for creating shared value.',
    about:
      'Stakeholder Value Mapping helps your team explore what a circular transition means for the different stakeholders involved. A circular solution may create significant benefits for your company while requiring customers, suppliers or other partners to change how they work. Understanding what motivates these actors, and where they may experience costs or disadvantages, can therefore be critical for turning a circular idea into a workable value chain. || The exercise compares the current situation with the proposed new circular value chain. For each important stakeholder, the team first identifies the value they currently receive from the company. This can include tangible value such as products, services or financial benefits, as well as less tangible benefits such as knowledge, innovation opportunities or stronger business relationships. || The tool is particularly useful after Business Ecosystem Mapping, another tool provided by CIRCit, because CIRCit recommends transferring the most important stakeholders from the ecosystem map into the Stakeholder Value Mapping exercise.',
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit',
    access: 'Free',
    timeRequired:
      '60-90 minutes as a starting point, depending on the number of stakeholders being assessed.',
    preparationNeeded:
      'Ideally complete a Business Ecosystem Map first and select the stakeholders most relevant to the proposed transition. Bring together people who understand customers, suppliers, operations and business relationships. Include perspectives beyond immediate commercial partners where relevant, including society and the environment.',
    output:
      'A structured overview of value currently created for each stakeholder, unmet needs, existing pain points, missed or destroyed value, new value opportunities, stakeholders that may lose out and areas where interests can be aligned.',
    bestFor:
      'Small-medium enterprises (SMEs) developing circular solutions that require customers, suppliers or partners to participate or change their behaviour, particularly where the benefits and responsibilities are distributed across several organisations.',
    format: 'Printable stakeholder mapping canvas',
    toolLink: 'https://circitnord.com/tools/stakeholder-value-mapping/'
  },
  {
    id: 'resource-097',
    slug: 'business-ecosystem-mapping',
    title: 'Business Ecosystem Mapping',
    description:
      'To understand the stakeholders, relationships and flows surrounding your business.',
    about:
      'Business Ecosystem Mapping helps your team understand the network of organisations and other actors that influence how your business currently operates. This is particularly important when developing circular solutions, because keeping products and materials in circulation often requires new forms of cooperation across suppliers, customers, service providers and other stakeholders. || Stakeholders are positioned according to how closely they are connected to the company. The team maps important resource and service flows, financial flows and information flows between the different actors. Looking at these relationships together can reveal dependencies, missing connections and stakeholders that may either support or create barriers to a circular transition. || The resulting ecosystem map provides a common starting point for discussing which relationships may need to change, which new actors could be required, and where collaboration will be particularly important for implementing a circular solution. CIRCit recommends involving participants from different parts of the company so that the map reflects different perspectives on the existing ecosystem. To continue and expand the mapping on stakeholders, you can use the Stakeholder Value Mapping tool by the same provider.',
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit',
    access: 'Free',
    timeRequired:
      '1 to 1.5 hours for a focused mapping workshop. More complex ecosystems may require additional research or follow-up.',
    preparationNeeded:
      'Prepare the stakeholder cards and a large working surface or digital whiteboard. It can also be useful to gather basic information beforehand about important suppliers, customers, partners and other organisations that influence the business.',
    output:
      'A visual overview of important stakeholders in and around the value chain, how closely they are connected to the company, resource and service flows, financial flows, information flows, relationships and dependencies that may support or hinder circular solutions.',
    bestFor:
      'Small-medium enterprises (SMEs) exploring circular opportunities that depend on collaboration beyond their own organisation, for example take-back systems, reuse, repair, refurbishment, reverse logistics, secondary materials or service-based business models.',
    format: 'Printable cards and workshop guide',
    toolLink: 'https://circitnord.com/tools/business-ecosystem-mapping/'
  },
  {
    id: 'resource-098',
    slug: 'build-run-prototypes',
    title: 'Build & Run Prototypes',
    description:
      'To turn a circular idea into a tangible prototype and test it with users before investing in full development.',
    about:
      'Build & Run Prototypes helps your team move from an idea to something that people can see, experience or interact with. Instead of developing a complete solution immediately, the method encourages you to create a simple and inexpensive version that is detailed enough to communicate the idea and generate useful feedback. || A prototype does not have to be a finished physical product. Depending on what you want to test, it could be a mock-up, model, storyboard, role play or another simple representation of the proposed product or service. This makes the method relevant for circular solutions such as a new repair service, take-back process, reusable packaging system, rental offer or redesigned customer journey, as well as for physical product concepts. || For circular solutions, prototyping is particularly valuable because it allows you to test important parts of the solution before committing significant resources. You can explore, for example, whether users understand a return process, whether a service is convenient to use, or whether a proposed interaction works as intended. Repeated testing helps reduce uncertainty and provides practical evidence about what should be changed before moving towards a larger pilot or implementation.',
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:verify-potential'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Design Kit / IDEO.org',
    access: 'Free',
    timeRequired:
      'Variable, from a few days to a few weeks, depending on what is being prototyped and how many rounds of testing and iteration are needed.',
    preparationNeeded:
      'Start with a circular concept that you want to evaluate. Decide which part of the concept needs to be made tangible and who should test it. Gather simple materials for creating the prototype.',
    output:
      'One or more tested and improved prototypes, together with documented feedback and learning about how users understand and interact with the proposed solution.',
    bestFor:
      'Small-medium enterprises (SMEs) that have developed a promising circular product, service or business-model concept and need to make it tangible, test it with intended users and improve it before investing in a full pilot or implementation.',
    format: 'Step-by-step method and downloadable cards',
    toolLink: 'https://www.designkit.org/methods/build-run-prototypes.html'
  },
  {
    id: 'resource-099',
    slug: 'bawear-score',
    title: 'bAwear Score',
    description:
      'Life Cycle Assessment (LCA)-based environmental impact measurement platform for textiles and apparel products.',
    about:
      'bAwear Score is a platform for measuring environmental impacts in textiles and apparel. It calculates product-level results using Life Cycle Assessment (LCA), based on the ReCiPe 2016 Midpoint method and aligned with International Organisation for Standardization (ISO) 14040/14044. The platform can be used to compare material and process options, identify the life cycle stages with the highest impact, support greenhouse gas reporting and prepare for upcoming EU product information requirements. || The platform includes Quick Score for indicative results and Expert studies for detailed assessments using primary supplier data. Results can be used by product development, sourcing, sustainability, corporate social responsibility and quality teams to make design and sourcing decisions based on measured data rather than assumptions.',
    journeyPhases: ['Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['evaluate:verify-potential', 'monitor:choosing-indicators'],
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Medium',
    language: 'English',
    provider: 'bAwear B.V.',
    access: 'Sign up',
    timeRequired:
      'About 30 minutes for first setup; 10-15 minutes for one Quick Score calculation when data is ready; Expert studies vary by scope and supplier data availability.',
    preparationNeeded:
      'Collect product type, fibre composition, product weight, yarn and fabric construction, wet processes, countries of production, transport mode and distance. Primary supplier data on energy, water and waste improves accuracy.',
    output:
      'Product impact profile across impact categories, results split by life cycle stage, comparison against a reference product and an exportable report.',
    bestFor:
      'Small and medium textile and apparel companies, including brands, retailers, manufacturers and importers or exporters that need to compare material or process options before committing to a design.',
    format: 'Digital platform',
    toolLink: 'https://bawear-score.com'
  },
  {
    id: 'resource-100',
    slug: 'material-circularity-indicator-mci-calculator',
    title: 'Material Circularity Indicator (MCI) Calculator',
    description:
      'A circularity calculator that measures how effectively a product keeps its materials in use throughout its life cycle.',
    about:
      'The Material Circularity Indicator (MCI) Calculator helps assess how effectively materials are kept in use throughout a product life cycle. The Material Circularity Indicator (MCI) score runs from 0% for a fully linear product to 100% for a fully circular product. It can support product design decisions, circular economy performance reporting, benchmarking and procurement decisions. || The tool includes a trial version for comparing scenarios, benchmarking performance and testing the concept. A professional version provides expanded functionality for decision-grade results and stronger support for external claims. Editors should note that the source document did not include the tool URL; the link used here is the official Thinkstep ANZ calculator page.',
    journeyPhases: ['Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['evaluate:verify-potential', 'monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Thinkstep ANZ',
    access: 'Sign up',
    timeRequired:
      '1-3 hours if the bill of materials and product life cycle inputs are ready, including time to interpret the results.',
    preparationNeeded:
      'Prepare a bill of materials and product life cycle data, including material types, quantities, product destination and relevant inflows and outflows.',
    output:
      'Material Circularity Indicator (MCI) score, product circularity analysis, scenario comparison and identification of product-level hotspots.',
    bestFor:
      'Small-medium enterprises (SMEs) that want to deepen their understanding of product circularity and compare circular design options.',
    format: 'Excel template',
    toolLink:
      'https://www.thinkstep-anz.com/services/circular-economy/material-circularity-indicator-mci-calculator/'
  }
];

export const { resources, journeyPhases, sectors, languages, accessOptions } =
  buildToolCatalogue(toolCatalogue);
