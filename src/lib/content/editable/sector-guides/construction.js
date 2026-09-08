/*
  CONSTRUCTION SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure
    and resource placement tags are also being changed.
  - Construction case cards are edited separately in src/lib/content/editable/cases/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const constructionIntroSection = {
  id: 'introduction',
  title: { en: 'Introduction to sector', uk: 'Вступ до сектору', ro: 'Introducere în sector', hy: 'Ոլորտի ներածություն' },
  paragraphs: [
    {
      en: 'The construction sector includes the design, building, renovation and demolition of buildings and infrastructure. It is one of the largest users of raw materials and generates substantial amounts of waste, while also contributing significantly to energy use and greenhouse gas emissions. Construction and demolition waste accounts for approximately 35% of all EU waste, the single largest waste stream in Europe, yet recovery rates remain far below circular economy targets (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Circular economy practices can help the sector use materials more efficiently, extend the lifetime of buildings and components, and reduce the need for virgin resources, some which have potential to disrupt the sector due to low access and high demand (e.g. sand). Urban mining, recovering and reusing materials from existing structures, is a fast-growing area offering SMEs a competitive advantage in procurement and project differentiation.',
      uk: 'Будівельний сектор охоплює проєктування, будівництво, реновацію та демонтаж будівель і інфраструктури. Це один із найбільших споживачів сировини, який утворює значні обсяги відходів і суттєво впливає на енергоспоживання та викиди парникових газів. Будівельні відходи та відходи знесення становлять приблизно 35% усіх відходів ЄС - найбільший потік відходів у Європі, тоді як рівні відновлення залишаються нижчими за цілі циркулярної економіки (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Практики циркулярної економіки можуть допомогти сектору ефективніше використовувати матеріали, продовжувати строк служби будівель і компонентів та зменшувати потребу в первинних ресурсах, деякі з яких можуть створювати ризики для сектору через обмежений доступ і високий попит, наприклад пісок. Міський видобуток - відновлення і повторне використання матеріалів з наявних конструкцій - швидко розвивається та може дати МСП конкурентну перевагу в закупівлях і диференціації проєктів.',
      ro: 'Sectorul construcțiilor include proiectarea, construirea, renovarea și demolarea clădirilor și infrastructurii. Este unul dintre cei mai mari utilizatori de materii prime și generează cantități importante de deșeuri, contribuind totodată semnificativ la consumul de energie și emisiile de gaze cu efect de seră. Deșeurile din construcții și demolări reprezintă aproximativ 35% din toate deșeurile din UE, cel mai mare flux de deșeuri din Europa, însă ratele de recuperare rămân mult sub țintele economiei circulare (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Practicile de economie circulară pot ajuta sectorul să utilizeze materialele mai eficient, să prelungească durata de viață a clădirilor și componentelor și să reducă nevoia de resurse virgine, unele dintre acestea putând afecta sectorul din cauza accesului limitat și a cererii ridicate, de exemplu nisipul. Mineritul urban, prin recuperarea și reutilizarea materialelor din structuri existente, este o zonă în creștere care poate oferi IMM-urilor un avantaj competitiv în achiziții și diferențierea proiectelor.',
      hy: 'Շինարարության ոլորտը ներառում է շենքերի եւ ենթակառուցվածքների նախագծումը, կառուցումը, վերանորոգումը եւ ապամոնտաժումը։ Այն հումքային նյութերի խոշորագույն օգտագործողներից է եւ առաջացնում է մեծ քանակի թափոններ՝ միաժամանակ զգալիորեն նպաստելով էներգիայի սպառմանը եւ ջերմոցային գազերի արտանետումներին։ Շինարարության եւ ապամոնտաժման թափոնները կազմում են ԵՄ բոլոր թափոնների մոտ 35%-ը՝ Եվրոպայի ամենամեծ թափոնային հոսքը, սակայն վերականգնման մակարդակները դեռ զգալիորեն ցածր են շրջանաձեւ տնտեսության նպատակներից (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Շրջանաձեւ տնտեսության գործելակերպերը կարող են օգնել ոլորտին ավելի արդյունավետ օգտագործել նյութերը, երկարացնել շենքերի եւ բաղադրիչների ծառայության ժամկետը եւ նվազեցնել առաջնային ռեսուրսների կարիքը, որոնցից որոշները, օրինակ՝ ավազը, կարող են խափանումներ առաջացնել սահմանափակ հասանելիության եւ մեծ պահանջարկի պատճառով։ Քաղաքային հանքարդյունահանումը՝ առկա կառույցներից նյութերի վերականգնումն ու կրկնօգտագործումը, արագ զարգացող ուղղություն է, որը ՓՄՁ-ներին կարող է մրցակցային առավելություն տալ գնումների եւ նախագծերի տարբերակման մեջ։'
    }
  ]
};

// 2. CASE EXAMPLES
// Add exactly three case names from src/lib/content/editable/cases/cases.js to `featuredCaseNames`.
// The names should match the visible company/case names in the case catalogue.
// Recommended: choose one case from Armenia, one from Moldova, and one from Ukraine.
export const constructionCasesSection = {
  id: 'case-examples',
  title: { en: 'Case examples', uk: 'Приклади кейсів', ro: 'Exemple de cazuri', hy: 'Օրինակներ' },
  intro: {
    en: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the construction sector to find all relevant cases.',
    uk: 'Наведені приклади показують, як стратегії та практики циркулярної економіки застосовувалися в реальному бізнесі. Щоб переглянути більше кейсів, відкрийте сторінку «Колекція кейсів» і відфільтруйте їх за будівельним сектором.',
    ro: 'Exemplele de mai jos arată cum au fost aplicate strategiile și practicile economiei circulare în afaceri reale. Pentru mai multe cazuri, vizitează pagina „Colecția de cazuri” și filtrează după sectorul construcțiilor.',
    hy: 'Ստորեւ բերված օրինակները ցույց են տալիս, թե ինչպես են շրջանաձեւ տնտեսության ռազմավարություններն ու գործելակերպերը կիրառվել իրական բիզնեսներում։ Այլ օրինակներ դիտելու համար այցելեք «Օրինակների հավաքածու» էջ եւ զտեք ըստ շինարարության ոլորտի։'
  },
  featuredCaseNames: [
    'UNIPLAST SRL',
    'Ararat Chanshin LLC',
    'Eco Build Ukraine'
  ]
};

// 3. Common barriers and opportunities
export const constructionBarriersSection = {
  id: 'barriers-opportunities',
  title: { en: 'Common barriers and opportunities', uk: 'Поширені бар’єри та можливості', ro: 'Bariere și oportunități comune', hy: 'Ընդհանուր խոչընդոտներ եւ հնարավորություններ' },
  intro: {
    en: 'Construction small-medium enterprises face data, regulatory, cost and skills barriers, while renovation, material passports and secondary-material markets are opening new opportunities.',
    uk: 'Будівельні МСП стикаються з бар’єрами даних, регулювання, витрат і навичок, тоді як реновація, паспорти матеріалів і ринки вторинних матеріалів відкривають нові можливості.',
    ro: 'IMM-urile din construcții se confruntă cu bariere legate de date, reglementare, costuri și competențe, în timp ce renovarea, pașapoartele materialelor și piețele materialelor secundare deschid noi oportunități.',
    hy: 'Շինարարական ՓՄՁ-ները բախվում են տվյալների, կարգավորման, ծախսերի եւ հմտությունների խոչընդոտների, մինչդեռ վերանորոգումը, նյութերի անձնագրերը եւ երկրորդային նյութերի շուկաները նոր հնարավորություններ են բացում։'
  },
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'Lack of material traceability data in existing building stock.',
      source: 'Bellini & Bang, 2022 and Raghu et al., 2023'
    },
    {
      text: 'Regulatory uncertainty around certification of recycled and salvaged materials.',
      source: 'EU Construction and Demolition Waste Protocol and Guidelines'
    },
    {
      text: 'Client and contractor resistance to longer design and planning timelines.',
      source: 'Barriers to Circular Procurement in Construction, 2024'
    },
    {
      text: 'Higher upfront cost of deconstruction compared with conventional demolition.',
      source: 'Dantata et al., Analysis of Cost and Duration of Deconstruction and Demolition in Massachusetts, 2024'
    },
    {
      text: 'Fragmented supply chains hinder the development of secondary-material markets.',
      source: 'MDPI, Sustainability: Circular Economy of EU Construction and Demolition Waste, 2025'
    },
    {
      text: 'Skills gaps in design for disassembly, adaptive reuse and material-passport creation.',
      source: 'Review of Barriers, Drivers and Stakeholders Towards CE in Construction, 2023'
    }
  ],
  opportunities: [
    {
      text: 'Digital Building Passports enable material tracking, reuse planning and asset-value retention.',
      source: 'From Data Templates to Material Passports and Digital Product Passports, 2023'
    },
    {
      text: 'Urban mining and material banks can reduce procurement costs and supply risk.',
      source: 'European.realestate, How Circular Economy is Reshaping European Construction, 2026'
    },
    {
      text: 'Green public procurement criteria increasingly favour circular construction small-medium enterprises (SMEs).',
      source: 'ECCO, Green Public Procurement: A Catalyst for Competitiveness, 2025'
    },
    {
      text: 'Modular and prefabricated construction supports disassembly and material reuse.',
      source: 'Towards a Sustainable Circular Economy: Reusing Modular Building Components, 2024'
    },
    {
      text: 'The growing secondary-material market creates opportunities for reclaimed stone, timber, brick and glass.',
      source: 'Europe Green Building Materials Market, 2026'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Construction sector slug to a resource's
// placements in src/lib/content/editable/tools/tool-catalogue.js to display it automatically.
export const constructionRelevantToolsSection = {
  id: 'relevant-tools',
  title: { en: 'Relevant tools', uk: 'Релевантні інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' },
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const construction = {
  number: { en: 'Sector 1', uk: 'Сектор 1', ro: 'Sector 1', hy: 'Ոլորտ 1' },
  slug: 'construction',
  title: { en: 'Construction', uk: 'Будівництво', ro: 'Construcții', hy: 'Շինարարություն' },
  description: {
    en: 'This sector guide provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
    uk: 'Цей секторний путівник надає інструменти, кейси та практичні рекомендації для будівельних МСП, які впроваджують практики циркулярної економіки.',
    ro: 'Acest ghid sectorial oferă instrumente, cazuri și orientări practice pentru IMM-urile din construcții care adoptă practici de economie circulară.',
    hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ, օրինակներ եւ գործնական ուղեցույցներ շինարարական ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։'
  },
  image: '/images/sectors/construction.jpg',
  imageAlt: { en: 'Construction sector', uk: 'Будівельний сектор', ro: 'Sectorul construcțiilor', hy: 'Շինարարության ոլորտ' },
  navigation: [
    { label: { en: 'Introduction', uk: 'Вступ', ro: 'Introducere', hy: 'Ներածություն' }, sectionId: constructionIntroSection.id },
    { label: { en: 'Cases', uk: 'Кейси', ro: 'Cazuri', hy: 'Օրինակներ' }, sectionId: constructionCasesSection.id },
    { label: { en: 'Barriers & opportunities', uk: 'Бар’єри та можливості', ro: 'Bariere și oportunități', hy: 'Խոչընդոտներ եւ հնարավորություններ' }, sectionId: constructionBarriersSection.id },
    { label: { en: 'Relevant tools', uk: 'Релевантні інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' }, sectionId: constructionRelevantToolsSection.id }
  ],
  sections: [
    constructionIntroSection,
    constructionCasesSection,
    constructionBarriersSection,
    constructionRelevantToolsSection
  ]
};
