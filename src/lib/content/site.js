/*
  Edit this file for global website text.
  These values are used by the header, footer and browser page titles.
*/
export const site = {
  name: 'CE Digital Toolbox',
  headerLogo: {
    src: '/logos/logo-toolbox.png',
    alt: 'CE Digital Toolbox logo'
  },
  contactEmail: 'digitaltoolbox@norion.dk',
  footerLogos: [
    {
      src: '/logos/EU-logo.png',
      alt: 'European Union logo',
      width: 'clamp(170px, 23vw, 300px)'
    },
    {
      src: '/logos/EU4Green-logo.png',
      alt: 'EU4Green logo',
      width: 'clamp(72px, 8vw, 110px)'
    }
  ],
  labels: {
    viewModule: 'View module',
    viewTools: 'View tools',
    viewSector: 'View package',
    viewResource: 'View resource',
    viewCase: 'View case',
    openTool: 'Open tool'
  },
  navigation: [
    { label: 'Modules', href: '/#modules' },
    { label: 'Tools', href: '/tools/' },
    { label: 'Cases', href: '/cases/' },
    { label: 'Sector Packages', href: '/#sectors' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' }
  ]
};
