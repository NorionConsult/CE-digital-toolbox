/*
  TEXTILES SECTOR PAGE
  Content follows the order in which it appears on the page.
  Keep section IDs unchanged because hero buttons and resource tags use them.
*/

export const textilesIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    'The EU textile sector generates approximately 16 kg of textile waste per person annually, with less than 1% recycled back into new fibres.',
    'SMEs represent over 70% of European textile businesses, spanning design, manufacturing, retail, repair and resale.',
    'The EU Strategy for Sustainable and Circular Textiles (2022) sets binding targets for recyclable design, extended producer responsibility (EPR) and ecodesign by 2030.',
    'Fast fashion remains dominant, driving overproduction, short product lifespans and high resource consumption - all areas where circular economy practices offer direct alternatives.',
    'Increasing regulatory pressure from the EU Ecodesign for Sustainable Products Regulation (ESPR) and Digital Product Passport (DPP) is reshaping SME obligations.',
    'Key circular economy opportunities include design for durability and disassembly, repair and resale services, fibre-to-fibre recycling, and clothing-as-a-service models.'
  ]
};

export const textilesCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: 'The following examples show how circular economy strategies and practices have been applied in real business scenarios. Open the Cases page to explore every case.'
};

export const textilesBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Textile SMEs face technical, behavioural and market barriers, while new regulation and business models are creating strong opportunities.',
  barriers: [
    'High cost of fibre sorting, collection and recycling infrastructure.',
    'Blended fabrics such as polyester-cotton are difficult or impossible to recycle.',
    'Consumer habits favour low-cost fast fashion over resale or repair.',
    'Limited supply-chain transparency hinders traceability claims.',
    'Greenwashing risks erode consumer and investor trust.',
    'Small-batch production limits scale advantages in sustainable materials.'
  ],
  opportunities: [
    'The European resale apparel market is projected to grow from EUR 16 billion to EUR 26 billion by 2030.',
    'EU extended producer responsibility schemes create demand for take-back and collection infrastructure.',
    'Digital Product Passports enable traceability and consumer engagement.',
    'Repair cafes and rental or subscription models generate new revenue streams.',
    'Deadstock and surplus fabric upcycling can reduce input material costs.',
    'B2B textile exchange platforms reduce waste and lower procurement spend.'
  ]
};

export const textilesBestPracticesSection = {
  id: 'best-practices',
  title: 'Best practices',
  intro: 'Explore practical circular actions across design, business models, traceability and compliance.',
  groups: [
    {
      title: 'Design and materials',
      items: [
        'Design for durability, disassembly and recyclability from the outset.',
        'Audit material composition and eliminate blended fibres where possible.',
        'Transition to natural, certified organic or certified recycled fibres.'
      ]
    },
    {
      title: 'Business model',
      items: [
        'Map and reduce overproduction through demand-led or made-to-order models.',
        'Explore clothing rental, leasing or subscription business models.',
        'Partner with certified fibre recyclers for closed-loop end-of-life routing.',
        'Implement a take-back, return or buy-back programme.',
        'Offer repair, alteration or resale services to customers.'
      ]
    },
    {
      title: 'Traceability and compliance',
      items: [
        'Adopt Digital Product Passports for end-to-end traceability.',
        'Communicate circular economy credentials transparently and avoid greenwashing claims.'
      ]
    }
  ]
};

export const textilesRelevantToolsSection = {
  id: 'relevant-tools',
  title: 'Relevant tools',
  intro: 'Tools tagged for the Textiles sector appear here automatically.'
};

export const textilesNetworkSection = {
  id: 'networks-collaborations',
  title: 'Network and collaborations',
  intro: 'These networks and platforms can support learning, partnerships, standards and access to practical tools.',
  items: [
    {
      name: 'European Clothing Action Plan (ECAP)',
      description: 'EU initiative connecting fashion and textile businesses with tools and funding to reduce textile waste and build circular supply chains across the value chain.',
      link: ''
    },
    {
      name: 'Textile Exchange',
      description: 'Global nonprofit driving responsible fibre and materials use through circularity standards, certified materials and life-cycle thinking.',
      link: 'https://textileexchange.org/'
    },
    {
      name: 'ResCom (Nordic Textile Reuse)',
      description: 'Nordic collaboration platform promoting reuse, repair and collection networks for textiles, relevant for Scandinavian SMEs seeking regional circular economy partners.',
      link: ''
    },
    {
      name: 'Fashion for Good',
      description: 'Global circular innovation platform connecting brands, retailers and investors with start-ups developing textile recycling and sustainable material technologies.',
      link: 'https://www.fashionforgood.com/'
    },
    {
      name: 'WRAP Textiles 2030 (UK)',
      description: 'Industry-wide sustainability commitment with targets on emissions, water and waste, offering tools, guidance and peer learning relevant to textile SMEs.',
      link: 'https://wrap.org.uk/taking-action/textiles/initiatives/textiles-2030'
    },
    {
      name: 'SME Climate Hub',
      description: 'Free platform offering circular economy action guides, carbon calculators and emissions tracking tools with resources relevant to textile businesses.',
      link: 'https://smeclimatehub.org/'
    }
  ]
};

export const textiles = {
  number: 'Sector 3',
  slug: 'textiles',
  title: 'Textiles',
  description: 'This sector package provides tools and guidance for textile SMEs to adopt circular economy practices.',
  image: '/images/textiles.jpg',
  imageAlt: 'Textiles sector',
  navigation: [
    { label: 'Introduction', sectionId: textilesIntroSection.id },
    { label: 'Cases', sectionId: textilesCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: textilesBarriersSection.id },
    { label: 'Best practices', sectionId: textilesBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: textilesRelevantToolsSection.id },
    { label: 'Networks', sectionId: textilesNetworkSection.id }
  ],
  sections: [
    textilesIntroSection,
    textilesCasesSection,
    textilesBarriersSection,
    textilesBestPracticesSection,
    textilesRelevantToolsSection,
    textilesNetworkSection
  ]
};
