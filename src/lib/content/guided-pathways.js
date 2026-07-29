/*
  Edit this file for the Guided pathways page.

  This page is intentionally collected in one file so editors can update the
  page hero, journey phase overview cards and sector tool overview cards without
  jumping between several files.

  Important:
  - These cards control the overview page only.
  - The detailed journey phase pages are edited in src/lib/content/en/journey-phases/.
  - The detailed sector pages are edited in src/lib/content/en/sectors/.
  - Keep slug values unchanged unless the matching page URL is also changed.
*/
export const guidedPathways = {
  pageTitle: 'Guided pathways',

  /* 1. PAGE HERO */
  hero: {
    eyebrow: 'Guided pathways',
    title: 'Find the right tools',
    text:
      'Start from the circular economy journey phases or explore tools by selected sectors. Use these guided routes to find tools, examples, and practical steps that fit where you are in the transition.',
    buttons: [
      {
        label: 'Follow journey phases',
        href: '#journey-phases',
        style: 'primary',
        icon: 'icon-park-outline:connection-point-two'
      },
      {
        label: 'Follow sector guides',
        href: '#sectors',
        style: 'secondary',
        icon: 'icon-park-outline:handle-round'
      }
    ]
  },

  /* 2. JOURNEY PHASES SECTION INTRO */
  journeyPhasesSection: {
    eyebrow: 'For a structured approach',
    title: 'The SME journey',
    text:
      'The SME journey represents a typical process that SMEs follow when transitioning to circular economy practices, to help you identify where you might be and from there which tools can be relevant to use. Each journey phase contain selected tools, descriptions, target users, links, and practical guidance on how the tools can be applied.'
  },

  /*
    3. JOURNEY PHASE CARDS
    Copy one complete card object to add a new phase card to this overview page.
    The slug must match an existing journey phase page folder route.
  */
  journeyPhases: [
    {
      number: '01',
      slug: 'learn',
      shortName: 'Phase 1',
      title: 'Learn',
      colourClass: 'module-card-green',
      description:
        'Introduces key CE and Resource Efficient and Cleaner Production (RECP) concepts, terms, and models to understand the benefits, risks, and potential of CE, even without prior knowledge.'
    },
    {
      number: '02',
      slug: 'diagnose',
      shortName: 'Phase 2',
      title: 'Diagnose',
      colourClass: 'module-card-lime',
      description:
        'Provides tools to assess CE adoption, identify impacts and gaps, perform hotspot analysis, and set a baseline.'
    },
    {
      number: '03',
      slug: 'options',
      shortName: 'Phase 3',
      title: 'Options',
      colourClass: 'module-card-yellow',
      description:
        'Offers tools to support innovation and design processes, review practices, and identify relevant strategies to address diagnosed hotspots.'
    },
    {
      number: '04',
      slug: 'business-case',
      shortName: 'Phase 4',
      title: 'Business Case',
      colourClass: 'module-card-blue',
      description:
        'Brings tools which support the transformation from linear to circular business models and the identification of risks, relevant barriers, and potential gains.'
    },
    {
      number: '05',
      slug: 'implement',
      shortName: 'Phase 5',
      title: 'Implement',
      colourClass: 'module-card-dark',
      description:
        'Tools that support the identification of key value chain partnerships, circular solutions or practices to test, and help move ideas into the testing phase.'
    },
    {
      number: '06',
      slug: 'monitor',
      shortName: 'Phase 6',
      title: 'Monitor',
      colourClass: 'module-card-outline',
      description:
        'Selected tools for ongoing monitoring of solutions, including data gathering, selection of relevant indicators, and re-diagnosis after implementation.'
    }
  ],

  /* 4. SECTOR TOOLS SECTION INTRO */
  sectorsSection: {
    eyebrow: 'For specific sectors',
    title: 'Sector guides',
    text:
      'Through the EU4Green Recovery East Programme project, four relevant sectors were selected as priority sectors for the region as seen below. Each sector guide focuses on a specific industry and contains selected tools, descriptions, cases and practical guidance on how the tools can be applied for the specific challenges and opportunities of that sector.'
  },

  /*
    5. SECTOR TOOL CARDS
    Copy one complete card object to add a new sector card to this overview page.
    The slug must match an existing sector page route.
  */
  sectors: [
    {
      number: 'Sector 1',
      slug: 'construction',
      title: 'Construction',
      description:
        'This sector guide provides tools, cases and practical guidance for construction SMEs adopting circular economy practices.',
      image: '/images/construction.jpg',
      imageAlt: 'Construction sector'
    },
    {
      number: 'Sector 2',
      slug: 'agriculture',
      title: 'Agriculture',
      description:
        'This sector guide provides tools, cases and practical guidance for agriculture and agri-food SMEs adopting circular economy practices.',
      image: '/images/agriculture.jpg',
      imageAlt: 'Agriculture sector'
    },
    {
      number: 'Sector 3',
      slug: 'textiles',
      title: 'Textiles',
      description:
        'This sector guide provides tools and guidance for textile SMEs to adopt circular economy practices.',
      image: '/images/textiles.jpg',
      imageAlt: 'Textiles sector'
    },
    {
      number: 'Sector 4',
      slug: 'tourism',
      title: 'Tourism',
      description:
        'This sector guide provides practical guidance for tourism and hospitality SMEs adopting circular economy practices.',
      image: '/images/tourism.jpg',
      imageAlt: 'Tourism sector'
    }
  ]
};
