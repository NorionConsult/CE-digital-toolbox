/*
  Edit this file for global website text.
  These values are used by the header, footer and browser page titles.

  ACRONYM WRITING GUIDE FOR EDITORS
  When an acronym appears in public website text, write the full term first and keep
  the acronym in parentheses. After that, the acronym can be used again if the same
  paragraph or card would otherwise become too long.

  Common acronyms used in this website:
  CE = Circular Economy (CE)
  RECP = Resource Efficient and Cleaner Production (RECP)
  MSME = Micro, small and medium-sized enterprise (MSME)
  CTI = Circular Transition Indicators (CTI)
  GCP = Global Circularity Protocol (GCP)
  WBCSD = World Business Council for Sustainable Development (WBCSD)
  SCEA = Smart Circular Economy Assessment (SCEA)
  MFA = Material Flow Analysis (MFA)
  MCI = Material Circularity Indicator (MCI)
  GGKP = Green Growth Knowledge Partnership (GGKP)
  PEF = Product Environmental Footprint (PEF)
  EDRPOU = Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU)
  B2B = Business-to-business (B2B)
  GDP = Gross Domestic Product (GDP)
  LED = Light-emitting diode (LED)
  UV = Ultraviolet (UV)
  API = Application Programming Interface (API)
  QR = Quick Response (QR)
  SaaS = Software as a Service (SaaS)
  E&S = Environmental and social (E&S)
  HDPE = High-density polyethylene (HDPE)
  LDPE = Low-density polyethylene (LDPE)
  PET/PETE = Polyethylene terephthalate (PET/PETE)
  PP = Polypropylene (PP)
  PS = Polystyrene (PS)
  PA = Polyamide (PA)
  UNDP = United Nations Development Programme (UNDP)
  GCF = Green Climate Fund (GCF)
  EMIS = Energy Management Information System (EMIS)
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
  footerCopyright:
    '© 2026 EU4 GreenRecovery East programme. All rights reserved. Licensed to the European Union under conditions.',
  /* The labels object contains all the text labels used throughout the website. If changed once here, it will update everywhere. */
  labels: {
    viewPhase: 'View phase',
    viewTools: 'View tools',
    viewSector: 'View sector tools',
    viewResource: 'View tool',
    viewCase: 'View case',
    openTool: 'Open tool',
    downloadTool: 'Download tool',
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
