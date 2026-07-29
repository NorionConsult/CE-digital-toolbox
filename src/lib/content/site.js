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
    logoHeight: 'clamp(18px, 2vw, 26px)',
    logos: [
      {
        src: '/logos/EU-logo-header.png',
        alt: 'European Union logo',
        width: 'clamp(112px, 11vw, 150px)'
      },
      {
        src: '/logos/EU4Green-logo-header.png',
        alt: 'EU4Green logo',
        width: 'clamp(48px, 5vw, 66px)'
      }
    ]
  },
  contactEmail: 'digitaltoolbox@norion.dk',
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
  labels: {
    viewPhase: 'View phase',
    viewTools: 'View tools',
    viewSector: 'View sector tools',
    viewResource: 'View tool',
    viewCase: 'View case',
    openTool: 'Open tool',
    openCase: 'Visit company site'
  },
  navigation: [
    { label: 'Follow guides', href: '/guided-pathways/' },
    { label: 'Browse Tools', href: '/tools/' },
    { label: 'Find Cases', href: '/cases/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' }
  ]
};
