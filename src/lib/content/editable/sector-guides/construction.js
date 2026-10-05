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
  title: { en: 'Introduction to sector', uk: 'Огляд сектору', ro: 'Introducere în sector', hy: 'Ոլորտի ներածություն' },
  paragraphs: [
    {
      en: 'The construction sector includes the design, building, renovation and demolition of buildings and infrastructure. It is one of the largest users of raw materials and generates substantial amounts of waste, while also contributing significantly to energy use and greenhouse gas emissions. Construction and demolition waste accounts for approximately 35% of all EU waste, the single largest waste stream in Europe, yet recovery rates remain far below circular economy targets (Source: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings.). || Circular economy practices can help the sector use materials more efficiently, extend the lifetime of buildings and components, and reduce the need for virgin resources, some which have potential to disrupt the sector due to low access and high demand (e.g. sand). Urban mining, recovering and reusing materials from existing structures, is a fast-growing area offering SMEs a competitive advantage in procurement and project differentiation.',
      uk: 'Будівельний сектор охоплює проєктування, будівництво, реновацію та демонтаж будівель і інфраструктури. Він належить до найбільших споживачів первинної сировини та утворює колосальні обсяги відходів, зумовлюючи значну частку загального енергоспоживання та викидів парникових газів. Відходи будівництва та знесення становлять близько 35% усіх відходів у ЄС – це найбільший окремий потік відходів у Європі, проте рівень їх вторинного використання й відновлення досі залишається значно нижчим за цільові орієнтири циркулярної економіки (Джерело: Interreg Europe, 2022. Collection and recycling of construction and demolition waste: Key learnings). || Практики циркулярної економіки допомагають галузі раціональніше використовувати матеріали, подовжувати термін експлуатації будівель і конструктивних елементів, а також скорочувати потребу в первинних ресурсах. Дефіцит окремих із них уже зараз загрожує перебоями в роботі сектору через обмежену доступність на тлі високого попиту (наприклад, будівельного піску). «Міський майнінг» (видобуток і повторне використання матеріалів із наявних споруд під час демонтажу) – це напрям, що стрімко розвивається, забезпечуючи МСП відчутні конкурентні переваги під час участі в закупівлях і виділення серед конкурентів.',
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
    uk: 'Наведені нижче приклади демонструють, як циркулярні стратегії та підходи втілюються в реальному бізнесі. Щоб ознайомитися з іншими практичними прикладами, перейдіть до розділу «Добірка прикладів» та відфільтруйте матеріали за будівельною галуззю.',
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
  title: { en: 'Common barriers and opportunities', uk: 'Типові бар´єри та можливості', ro: 'Bariere și oportunități comune', hy: 'Ընդհանուր խոչընդոտներ եւ հնարավորություններ' },
  intro: {
    en: 'Construction small-medium enterprises face data, regulatory, cost and skills barriers, while renovation, material passports and secondary-material markets are opening new opportunities.',
    uk: 'Малі та середні підприємства будівельної галузі стикаються з перешкодами, пов´язаними з браком даних, нормативним регулюванням, витратами та дефіцитом кваліфікованих кадрів. Водночас реновація, цифрові паспорти матеріалів та ринки вторинної сировини відкривають нові перспективи.',
    ro: 'IMM-urile din construcții se confruntă cu bariere legate de date, reglementare, costuri și competențe, în timp ce renovarea, pașapoartele materialelor și piețele materialelor secundare deschid noi oportunități.',
    hy: 'Շինարարական ՓՄՁ-ները բախվում են տվյալների, կարգավորման, ծախսերի եւ հմտությունների խոչընդոտների, մինչդեռ վերանորոգումը, նյութերի անձնագրերը եւ երկրորդային նյութերի շուկաները նոր հնարավորություններ են բացում։'
  },
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: {
        en: 'Lack of material traceability data in existing building stock.',
        uk: 'Брак даних щодо простежуваності матеріалів у наявному фонді будівель.',
        ro: 'Lipsa datelor de trasabilitate a materialelor în stocul existent de clădiri.',
        hy: 'Առկա շենքային ֆոնդում նյութերի հետագծելիության տվյալների պակաս։'
      },
      source: 'Bellini & Bang, 2022 and Raghu et al., 2023'
    },
    {
      text: {
        en: 'Regulatory uncertainty around certification of recycled and salvaged materials.',
        uk: 'Нормативна невизначеність щодо сертифікації перероблених та повторно використаних матеріалів.',
        ro: 'Incertitudine de reglementare privind certificarea materialelor reciclate și recuperate.',
        hy: 'Վերամշակված եւ վերականգնված նյութերի հավաստագրման շուրջ կարգավորող անորոշություն։'
      },
      source: 'EU Construction and Demolition Waste Protocol and Guidelines'
    },
    {
      text: {
        en: 'Client and contractor resistance to longer design and planning timelines.',
        uk: 'Спротив замовників і підрядників довшим термінам проєктування та планування.',
        ro: 'Rezistența clienților și contractorilor față de termene mai lungi de proiectare și planificare.',
        hy: 'Հաճախորդների եւ կապալառուների դիմադրություն նախագծման եւ պլանավորման ավելի երկար ժամկետներին։'
      },
      source: 'Barriers to Circular Procurement in Construction, 2024'
    },
    {
      text: {
        en: 'Higher upfront cost of deconstruction compared with conventional demolition.',
        uk: 'Вищі початкові витрати на вибірковий демонтаж (деконструкцію) порівняно зі звичайним знесенням будівель.',
        ro: 'Costuri inițiale mai mari pentru deconstrucție comparativ cu demolarea convențională.',
        hy: 'Ապակառուցման ավելի բարձր նախնական ծախսեր՝ սովորական քանդման համեմատ։'
      },
      source: 'Dantata et al., Analysis of Cost and Duration of Deconstruction and Demolition in Massachusetts, 2024'
    },
    {
      text: {
        en: 'Fragmented supply chains hinder the development of secondary-material markets.',
        uk: 'Фрагментованість ланцюгів постачання, що стримує розвиток ринків вторинної сировини.',
        ro: 'Lanțurile de aprovizionare fragmentate împiedică dezvoltarea piețelor de materiale secundare.',
        hy: 'Մասնատված մատակարարման շղթաները խոչընդոտում են երկրորդային նյութերի շուկաների զարգացմանը։'
      },
      source: 'MDPI, Sustainability: Circular Economy of EU Construction and Demolition Waste, 2025'
    },
    {
      text: {
        en: 'Skills gaps in design for disassembly, adaptive reuse and material-passport creation.',
        uk: 'Дефіцит навичок і компетенцій у сферах проєктування з урахуванням демонтажу, адаптивного повторного використання та створення паспортів матеріалів.',
        ro: 'Lacune de competențe în proiectarea pentru dezasamblare, reutilizare adaptivă și crearea pașapoartelor materialelor.',
        hy: 'Հմտությունների պակաս՝ ապամոնտաժման, հարմարվողական կրկնօգտագործման եւ նյութերի անձնագրերի ստեղծման համար նախագծման ոլորտում։'
      },
      source: 'Review of Barriers, Drivers and Stakeholders Towards CE in Construction, 2023'
    }
  ],
  opportunities: [
    {
      text: {
        en: 'Digital Building Passports enable material tracking, reuse planning and asset-value retention.',
        uk: 'Цифрові будівельні паспорти уможливлюють відстеження матеріалів, планування повторного використання та збереження вартості активів.',
        ro: 'Pașapoartele digitale ale clădirilor permit urmărirea materialelor, planificarea reutilizării și păstrarea valorii activelor.',
        hy: 'Շենքերի թվային անձնագրերը հնարավորություն են տալիս հետեւել նյութերին, պլանավորել կրկնօգտագործումը եւ պահպանել ակտիվների արժեքը։'
      },
      source: 'From Data Templates to Material Passports and Digital Product Passports, 2023'
    },
    {
      text: {
        en: 'Urban mining and material banks can reduce procurement costs and supply risk.',
        uk: '«Міський майнінг» та банки матеріалів можуть знизити витрати на закупівлі й мінімізувати ризики постачання.',
        ro: 'Mineritul urban și băncile de materiale pot reduce costurile de achiziție și riscurile de aprovizionare.',
        hy: 'Քաղաքային հանքարդյունահանումը եւ նյութերի բանկերը կարող են նվազեցնել գնումների ծախսերը եւ մատակարարման ռիսկերը։'
      },
      source: 'European.realestate, How Circular Economy is Reshaping European Construction, 2026'
    },
    {
      text: {
        en: 'Green public procurement criteria increasingly favour circular construction small-medium enterprises (SMEs).',
        uk: 'Критерії зелених публічних закупівель дедалі більше надають перевагу циркулярним малим і середнім підприємствам у будівельній галузі.',
        ro: 'Criteriile de achiziții publice verzi favorizează tot mai mult IMM-urile din construcții cu soluții circulare.',
        hy: 'Կանաչ պետական գնումների չափանիշները ավելի ու ավելի են նպաստում շրջանաձեւ շինարարական ՓՄՁ-ներին։'
      },
      source: 'ECCO, Green Public Procurement: A Catalyst for Competitiveness, 2025'
    },
    {
      text: {
        en: 'Modular and prefabricated construction supports disassembly and material reuse.',
        uk: 'Модульне та збірно-панельне будівництво сприяє простоті демонтажу й повторному використанню компонентів.',
        ro: 'Construcțiile modulare și prefabricate sprijină dezasamblarea și reutilizarea materialelor.',
        hy: 'Մոդուլային եւ նախապատրաստված շինարարությունը աջակցում է ապամոնտաժմանը եւ նյութերի կրկնօգտագործմանը։'
      },
      source: 'Towards a Sustainable Circular Economy: Reusing Modular Building Components, 2024'
    },
    {
      text: {
        en: 'The growing secondary-material market creates opportunities for reclaimed stone, timber, brick and glass.',
        uk: 'Зростання ринку вторинних матеріалів відкриває можливості для повторного використання каменю, деревини, цегли та скла.',
        ro: 'Piața în creștere a materialelor secundare creează oportunități pentru piatră, lemn, cărămidă și sticlă recuperate.',
        hy: 'Երկրորդային նյութերի աճող շուկան հնարավորություններ է ստեղծում վերականգնված քարի, փայտի, աղյուսի եւ ապակու համար։'
      },
      source: 'Europe Green Building Materials Market, 2026'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Construction sector slug to a resource's
// placements in src/lib/content/editable/tools/tool-catalogue.js to display it automatically.
export const constructionRelevantToolsSection = {
  id: 'relevant-tools',
  title: { en: 'Relevant tools', uk: 'Рекомендовані інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' },
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const construction = {
  number: { en: 'Sector 1', uk: 'Сектор 1', ro: 'Sector 1', hy: 'Ոլորտ 1' },
  slug: 'construction',
  title: { en: 'Construction', uk: 'Будівництво', ro: 'Construcții', hy: 'Շինարարություն' },
  description: {
    en: 'This sector guide provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
    uk: 'Цей галузевий посібник містить практичні інструменти, приклади з досвіду підприємств (кейси) та прикладні рекомендації для малого й середнього бізнесу будівельної галузі, що впроваджує практики циркулярної економіки.',
    ro: 'Acest ghid sectorial oferă instrumente, cazuri și orientări practice pentru IMM-urile din construcții care adoptă practici de economie circulară.',
    hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ, օրինակներ եւ գործնական ուղեցույցներ շինարարական ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։'
  },
  image: '/images/sectors/construction.jpg',
  imageAlt: { en: 'Construction sector', uk: 'Будівельний сектор', ro: 'Sectorul construcțiilor', hy: 'Շինարարության ոլորտ' },
  navigation: [
    { label: { en: 'Introduction', uk: 'Вступ', ro: 'Introducere', hy: 'Ներածություն' }, sectionId: constructionIntroSection.id },
    { label: { en: 'Cases', uk: 'Практичні приклади', ro: 'Cazuri', hy: 'Օրինակներ' }, sectionId: constructionCasesSection.id },
    { label: { en: 'Barriers & opportunities', uk: 'Бар´єри та можливості', ro: 'Bariere și oportunități', hy: 'Խոչընդոտներ եւ հնարավորություններ' }, sectionId: constructionBarriersSection.id },
    { label: { en: 'Relevant tools', uk: 'Рекомендовані інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' }, sectionId: constructionRelevantToolsSection.id }
  ],
  sections: [
    constructionIntroSection,
    constructionCasesSection,
    constructionBarriersSection,
    constructionRelevantToolsSection
  ]
};
