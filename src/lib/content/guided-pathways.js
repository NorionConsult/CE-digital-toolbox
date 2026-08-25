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
      'The toolbox is organised into journey phases, sector guides, a case study collection, and a tool catalogue. It is recommended to start with the journey phases in the SME journey or explore the tools by sectors in the selected sector guides. Both routes lead to tool examples and practical steps to guide you in your transition.',
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
      'The SME journey represents a typical process that SMEs follow when transitioning to circular economy practices, to help you identify where you might be and from there which tools can be relevant to use. Each journey phase contains selected tools and practical guidance. Although this journey is depicted in a linear way, in reality you will often move back and forth between phases. Therefore, start where it makes more sense at your current moment.',
    callToAction: {
      text:
        "**Where are you on the SME journey?** || Use this interactive diagram to understand which phase is most suitable for you to start with."
    }
  },

  /* 3. SECTOR TOOLS SECTION INTRO */
  sectorsSection: {
    eyebrow: 'For specific sectors',
    title: 'Selected sector guides',
    text:
      'Through the EU4Green Recovery East Programme project, four relevant sectors were selected. These are Construction, Food and Agriculture, Textiles, and Tourism. Sector guides are available to support those working specifically in these sectors in identifying relevant tools and cases.'
  },

  /*
    4. SECTOR TOOL CARDS
    Copy one complete card object to add a new sector card to this overview page.
    The slug must match an existing sector page route.
  */
  sectors: [
    {
      number: 'Sector 1',
      slug: 'construction',
      title: 'Construction',
      description:
        'This sector guide provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
      image: '/images/construction.jpg',
      imageAlt: 'Construction sector'
    },
    {
      number: 'Sector 2',
      slug: 'food-and-agriculture',
      title: 'Food and Agriculture',
      description:
        'This sector guide provides tools, cases and practical guidance for food and agriculture small-medium enterprises (SMEs) adopting circular economy practices.',
      image: '/images/agriculture.jpg',
      imageAlt: 'Food and Agriculture sector'
    },
    {
      number: 'Sector 3',
      slug: 'textiles',
      title: 'Textiles',
      description:
        'This sector guide provides tools and guidance for textile small-medium enterprises (SMEs) to adopt circular economy practices.',
      image: '/images/textiles.jpg',
      imageAlt: 'Textiles sector'
    },
    {
      number: 'Sector 4',
      slug: 'tourism',
      title: 'Tourism',
      description:
        'This sector guide provides practical guidance for tourism and hospitality small-medium enterprises (SMEs) adopting circular economy practices.',
      image: '/images/tourism.jpg',
      imageAlt: 'Tourism sector'
    }
  ]
};
