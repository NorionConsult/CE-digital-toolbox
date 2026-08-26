/*
  TEXTILES SECTOR PAGE
  Content follows the order in which it appears on the page.
  Keep section IDs unchanged because hero buttons and resource tags use them.
*/

export const textilesIntroSection = {
  id: 'introduction',
  title: 'Introduction to sector',
  paragraphs: [
    "The textile sector covers the production, processing and use of fibres, fabrics, clothing and other textile products. It relies heavily on raw materials, water, energy and chemicals, while generating significant waste and pollution across its value chain. The EU textile sector generates approximately 16 kg of textile waste per person annually (Source: European Environment Agency, 2024. Management of used and waste textiles in Europe's circular economy), with less than 1% recycled back into new fibres (Source: Ellen MacArthur Foundation, 2017. A new textiles economy: Redesigning fashion's future). || Engaging with circular economy practices can help businesses reduce resource use and waste, extend the life of products and materials, and build more resilient and sustainable value chains. Key circular economy opportunities include design for durability and disassembly, repair and resale services, fibre-to-fibre recycling, and clothing-as-a-service models."
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
  title: 'Common barriers and opportunities',
  intro: 'Textile small-medium enterprises (SMEs) face technical, behavioural and market barriers, while new regulation and business models are creating strong opportunities.',
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'High cost of fibre sorting, collection and recycling infrastructure.',
      source: "EEA, Textile Waste Management in Europe's CE, 2024"
    },
    {
      text: 'Blended fabrics such as polyester-cotton are difficult or impossible to recycle.',
      source: 'European Commission JRC, Textiles and the Environment, 2022'
    },
    {
      text: 'Consumer habits favour low-cost fast fashion over resale or repair.',
      source: 'Chatham House / circulareconomy.earth, 2024'
    },
    {
      text: 'Limited supply-chain transparency hinders traceability claims.',
      source: 'EU ESPR / DPP Regulatory Impact Assessment, EC, 2023'
    },
    {
      text: 'Greenwashing risks erode consumer and investor trust.',
      source: 'EU Green Claims Directive Proposal, EC, 2023'
    },
    {
      text: 'Small-batch production limits scale advantages in sustainable materials.',
      source: 'Farrukh et al., Sustainable Development, 2024'
    }
  ],
  opportunities: [
    {
      text: 'The European resale apparel market is projected to grow from EUR 16 billion to EUR 26 billion by 2030.',
      source: 'Circular Fashion Federation / KPMG, 2025'
    },
    {
      text: 'EU extended producer responsibility schemes create demand for take-back and collection infrastructure.',
      source: 'EC Waste Framework Directive revision, 2023'
    },
    {
      text: 'Digital Product Passports enable traceability and consumer engagement.',
      source: 'EU ESPR Regulation, 2024'
    },
    {
      text: 'Repair cafes and rental or subscription models generate new revenue streams.',
      source: 'Circular Fashion Federation / KPMG, 2025'
    },
    {
      text: 'Deadstock and surplus fabric upcycling can reduce input material costs.',
      source: 'EEA Briefing - Destruction of Unsold Textiles, 2024'
    },
    {
      text: 'Business-to-business (B2B) textile exchange platforms reduce waste and lower procurement spend.',
      source: 'EU Textiles Strategy, EC, 2022'
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
  description: 'This sector guide provides tools and guidance for textile small-medium enterprises (SMEs) to adopt circular economy practices.',
  image: '/images/textiles.jpg',
  imageAlt: 'Textiles sector',
  navigation: [
    { label: 'Introduction', sectionId: textilesIntroSection.id },
    { label: 'Cases', sectionId: textilesCasesSection.id },
    { label: 'Barriers & opportunities', sectionId: textilesBarriersSection.id },
    { label: 'Relevant tools', sectionId: textilesRelevantToolsSection.id }
  ],
  sections: [
    textilesIntroSection,
    textilesCasesSection,
    textilesBarriersSection,
    textilesRelevantToolsSection
  ]
};
