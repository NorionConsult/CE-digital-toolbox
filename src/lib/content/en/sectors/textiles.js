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
    'The EU Strategy for Sustainable and Circular Textiles (2022) sets binding targets for recyclable design, Extended Producer Responsibility (EPR) and ecodesign by 2030.',
    'Fast fashion remains dominant, driving overproduction, short product lifespans and high resource consumption - all areas where circular economy practices offer direct alternatives.',
    'Increasing regulatory pressure from the EU Ecodesign for Sustainable Products Regulation (ESPR) and Digital Product Passport (DPP) is reshaping SME obligations.',
    'Key circular economy opportunities include design for durability and disassembly, repair and resale services, fibre-to-fibre recycling, and clothing-as-a-service models.'
  ]
};

export const textilesCasesSection = {
  id: 'case-examples',
  title: 'Case examples',
  intro: "The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the textiles sector to find all relevant cases.",
  // Add exactly three case names from src/lib/content/cases.js.
  // These names control which cases appear on this sector guide page.
  featuredCaseNames: [
    'Unfloria SRL',
    'By Botany',
    'The Rug Code'
  ]
};

export const textilesBarriersSection = {
  id: 'barriers-opportunities',
  title: 'Key barriers and opportunities',
  intro: 'Textile small-medium enterprises (SMEs) face technical, behavioural and market barriers, while new regulation and business models are creating strong opportunities.',
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
    'Business-to-business (B2B) textile exchange platforms reduce waste and lower procurement spend.'
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
  intro: ''
};

export const textiles = {
  number: 'Sector 3',
  slug: 'textiles',
  title: 'Textiles',
  description: 'This sector tool provides tools and guidance for textile small-medium enterprises (SMEs) to adopt circular economy practices.',
  image: '/images/textiles.jpg',
  imageAlt: 'Textiles sector',
  navigation: [
    { label: 'Introduction', sectionId: textilesIntroSection.id },
    { label: 'Cases', sectionId: textilesCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: textilesBarriersSection.id },
    { label: 'Best practices', sectionId: textilesBestPracticesSection.id },
    { label: 'Relevant tools', sectionId: textilesRelevantToolsSection.id }
  ],
  sections: [
    textilesIntroSection,
    textilesCasesSection,
    textilesBarriersSection,
    textilesBestPracticesSection,
    textilesRelevantToolsSection
  ]
};
