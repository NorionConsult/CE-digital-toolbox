/*
  Edit this file for global website text.
  These values are used by the header, footer and browser page titles.
*/
export const site = {
  name: 'Circular Economy Toolbox',
  headerLogo: {
    src: '/logos/logo-toolbox-header.png',
    alt: 'Circular Economy Toolbox logo'
  },
  /*
    Partner logos shown in the global header menu area on every page.
    Change these values here once to update them everywhere.
  */
  headerPartnerLogos: {
    enabled: true,
    logoHeight: 'clamp(34px, 4vw, 52px)',
    logos: [
      {
        src: '/logos/EU-logo-header.png',
        alt: 'European Union logo',
        width: 'clamp(180px, 20vw, 245px)'
      },
      {
        src: '/logos/EU4Green-logo-header.png',
        alt: 'EU4Green logo',
        width: 'clamp(70px, 8vw, 96px)'
      }
    ]
  },
  /* Footer logos */
  footerLogos: [
    {
      src: '/logos/EU-logo.png',
      alt: 'European Union logo',
      width: '185px'
    },
    {
      src: '/logos/EU4Green-logo.png',
      alt: 'EU4Green logo',
      width: '72px'
    }
  ],
  /* The labels object contains all the text labels used throughout the website. If changed once here, it will update everywhere. */
  labels: {
    viewPhase: 'View phase',
    viewTools: 'View tools',
    viewSector: 'View sector tools',
    viewResource: 'View tool',
    viewCase: 'View case',
    openTool: 'Open tool',
    openCase: 'Visit company site'
  },
  /* The navigation array controls the main menu labels and links in the header.*/
  navigation: [
    { label: 'Follow guides', href: '/guided-pathways/' },
    { label: 'Browse Tools', href: '/tools/' },
    { label: 'Find Cases', href: '/cases/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' }
  ]
};
