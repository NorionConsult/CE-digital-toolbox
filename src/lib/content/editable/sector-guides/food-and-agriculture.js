/*
  FOOD AND AGRICULTURE SECTOR PAGE

  EDITING NOTES:
  - The content below follows the same order as the page.
  - Edit text inside quotes and add or remove list entries as needed.
  - To make a paragraph change in the text, add \r\n at the end of the line and continue the paragraph on the next line. Making a space in the code will NOT result in a line break on the page. Use \r\n to create a new paragraph.
  - Keep `id`, `slug` and `sectionId` values unchanged unless the page structure and resource placement tags are also being changed.
  - Food and Agriculture case cards are edited separately in src/lib/content/editable/cases/cases.js.
*/

// 1. INTRODUCTION TO SECTOR
export const foodAndAgricultureIntroSection = {
  id: 'introduction',
  title: { en: 'Introduction to sector', uk: 'Вступ до сектору', ro: 'Introducere în sector', hy: 'Ոլորտի ներածություն' },
  paragraphs: [
    {
      en: 'The food and agriculture sector includes the production, processing, distribution and consumption of food and agricultural products. It depends directly on natural resources such as land, water and healthy soils, while also contributing to greenhouse gas emissions, biodiversity loss and organic waste. || The food and agriculture sector contributes approximately 10% of EU greenhouse gas emissions (Source: European Environment Agency, 2025. Greenhouse gas emissions from agriculture) and accounts for around 70% of global freshwater consumption, making it central to the circular economy transition. Up to 30% of food produced globally is wasted, with much of this occurring at farm and post-harvest processing stages before reaching consumers (Source: FAO, 2011. Global food losses and food waste: Extent, causes and prevention). || Circular economy practices can help businesses reduce losses, make better use of by-products and resources, and support more sustainable and resilient food systems. Key circular economy opportunities include agroecology, precision farming, food-waste valorisation, short supply chains and agricultural biorefinery models.',
      uk: 'Сектор харчової промисловості та сільського господарства охоплює виробництво, переробку, розподіл і споживання харчових та аграрних продуктів. Він безпосередньо залежить від природних ресурсів, таких як земля, вода і здорові ґрунти, а також спричиняє викиди парникових газів, втрату біорізноманіття та органічні відходи. || Цей сектор відповідає приблизно за 10% викидів парникових газів у ЄС (Source: European Environment Agency, 2025. Greenhouse gas emissions from agriculture) і близько 70% світового споживання прісної води, тому є центральним для переходу до циркулярної економіки. До 30% виробленої у світі їжі втрачається, значною мірою на фермах і післязбиральних етапах до потрапляння до споживачів (Source: FAO, 2011. Global food losses and food waste: Extent, causes and prevention). || Практики циркулярної економіки можуть допомогти бізнесу зменшити втрати, краще використовувати побічні продукти та ресурси й підтримати сталіші та стійкіші продовольчі системи. Ключові можливості включають агроекологію, точне землеробство, валоризацію харчових відходів, короткі ланцюги постачання та аграрні біопереробні моделі.',
      ro: 'Sectorul alimentar și agricol include producția, procesarea, distribuția și consumul de produse alimentare și agricole. Depinde direct de resurse naturale precum terenul, apa și solurile sănătoase, contribuind totodată la emisiile de gaze cu efect de seră, pierderea biodiversității și deșeuri organice. || Sectorul alimentar și agricol generează aproximativ 10% din emisiile de gaze cu efect de seră ale UE (Source: European Environment Agency, 2025. Greenhouse gas emissions from agriculture) și reprezintă aproximativ 70% din consumul global de apă dulce, ceea ce îl face central pentru tranziția către economia circulară. Până la 30% din alimentele produse la nivel global sunt irosite, o mare parte la nivel de fermă și procesare post-recoltare înainte de a ajunge la consumatori (Source: FAO, 2011. Global food losses and food waste: Extent, causes and prevention). || Practicile de economie circulară pot ajuta afacerile să reducă pierderile, să valorifice mai bine subprodusele și resursele și să sprijine sisteme alimentare mai durabile și reziliente. Oportunitățile-cheie includ agroecologia, agricultura de precizie, valorificarea deșeurilor alimentare, lanțurile scurte de aprovizionare și modelele de biorafinărie agricolă.',
      hy: 'Սննդի եւ գյուղատնտեսության ոլորտը ներառում է սննդամթերքի եւ գյուղատնտեսական արտադրանքի արտադրությունը, մշակումը, բաշխումը եւ սպառումը։ Այն անմիջապես կախված է բնական ռեսուրսներից, ինչպիսիք են հողը, ջուրը եւ առողջ հողածածկույթը, միաժամանակ նպաստելով ջերմոցային գազերի արտանետումներին, կենսաբազմազանության կորստին եւ օրգանական թափոններին։ || Սննդի եւ գյուղատնտեսության ոլորտը կազմում է ԵՄ ջերմոցային գազերի արտանետումների մոտ 10%-ը (Source: European Environment Agency, 2025. Greenhouse gas emissions from agriculture) եւ քաղցրահամ ջրի համաշխարհային սպառման մոտ 70%-ը, ինչն այն դարձնում է շրջանաձեւ տնտեսության անցման առանցքային ոլորտ։ Աշխարհում արտադրված սննդի մինչեւ 30%-ը կորչում է, հաճախ ֆերմայում եւ բերքահավաքից հետո մշակման փուլերում՝ մինչեւ սպառողներին հասնելը (Source: FAO, 2011. Global food losses and food waste: Extent, causes and prevention). || Շրջանաձեւ տնտեսության գործելակերպերը կարող են օգնել բիզնեսներին նվազեցնել կորուստները, ավելի լավ օգտագործել կողմնակի արտադրանքներն ու ռեսուրսները եւ աջակցել ավելի կայուն ու դիմացկուն սննդային համակարգերի։ Հիմնական հնարավորություններն են ագրոէկոլոգիան, ճշգրիտ գյուղատնտեսությունը, սննդային թափոնների արժեւորումը, կարճ մատակարարման շղթաները եւ գյուղատնտեսական կենսավերամշակման մոդելները։'
    }
  ]
};

// 2. CASE EXAMPLES
// Add exactly three case names from src/lib/content/editable/cases/cases.js to `featuredCaseNames`.
// The names should match the visible company/case names in the case catalogue.
// Recommended: choose one case from Armenia, one from Moldova, and one from Ukraine.
export const foodAndAgricultureCasesSection = {
  id: 'case-examples',
  title: { en: 'Case examples', uk: 'Приклади кейсів', ro: 'Exemple de cazuri', hy: 'Օրինակներ' },
  intro: { en: 'The following examples show how circular economy strategies and practices have been applied in real businesses. To explore more cases, visit the “Case Collection” page and filter by the food and agriculture sector to find all relevant cases.', uk: 'Наведені приклади показують, як стратегії та практики циркулярної економіки застосовувалися в реальному бізнесі. Щоб переглянути більше кейсів, відкрийте сторінку «Колекція кейсів» і відфільтруйте їх за сектором харчової промисловості та сільського господарства.', ro: 'Exemplele de mai jos arată cum au fost aplicate strategiile și practicile economiei circulare în afaceri reale. Pentru mai multe cazuri, vizitează pagina „Colecția de cazuri” și filtrează după sectorul alimentar și agricol.', hy: 'Ստորեւ բերված օրինակները ցույց են տալիս, թե ինչպես են շրջանաձեւ տնտեսության ռազմավարություններն ու գործելակերպերը կիրառվել իրական բիզնեսներում։ Այլ օրինակներ դիտելու համար այցելեք «Օրինակների հավաքածու» էջ եւ զտեք ըստ սննդի եւ գյուղատնտեսության ոլորտի։' },
  featuredCaseNames: [
    'Banca de Alimente Moldova',
    'Permaculture in Armenia',
    'Eco Build Ukraine'
  ]
};

// 3. Common barriers and opportunities
export const foodAndAgricultureBarriersSection = {
  id: 'barriers-opportunities',
  title: { en: 'Common barriers and opportunities', uk: 'Поширені бар’єри та можливості', ro: 'Bariere și oportunități comune', hy: 'Ընդհանուր խոչընդոտներ եւ հնարավորություններ' },
  intro: { en: 'Agricultural small-medium enterprises (SMEs) face investment, knowledge and regulatory barriers, while new markets, technologies and nutrient-recovery models are creating practical opportunities.', uk: 'Аграрні МСП стикаються з інвестиційними, знаннєвими та регуляторними бар’єрами, тоді як нові ринки, технології та моделі відновлення поживних речовин створюють практичні можливості.', ro: 'IMM-urile agricole se confruntă cu bariere legate de investiții, cunoștințe și reglementare, în timp ce noile piețe, tehnologii și modele de recuperare a nutrienților creează oportunități practice.', hy: 'Գյուղատնտեսական ՓՄՁ-ները բախվում են ներդրումային, գիտելիքային եւ կարգավորող խոչընդոտների, մինչդեռ նոր շուկաները, տեխնոլոգիաները եւ սննդանյութերի վերականգնման մոդելները ստեղծում են գործնական հնարավորություններ։' },
  // Each bullet can include a `source`. Editors can update the statement and
  // its source together here. If no source is available, leave `source: ''`.
  barriers: [
    {
      text: 'High capital cost of precision technology and circular economy equipment.',
      source: 'European Parliament Digital Agriculture Report, 2024'
    },
    {
      text: 'Fragmented land ownership limits the scale of circular nutrient systems.',
      source: 'ScienceDirect, Classification of farmland ownership fragmentation, 2016'
    },
    {
      text: 'Knowledge gaps among small farms on circular economy practices and returns.',
      source: 'Diversification of Agriculture and Circular Economy in EU Countries, 2023'
    },
    {
      text: 'Complex regulation around organic waste, nutrient recovery and biogas.',
      source: 'EU Joint Research Centre / Wageningen University & Research, 2024'
    },
    {
      text: 'Price competition from conventional non-circular producers.',
      source: 'Circle Economy, Circular Agroecology for a Resilient Europe, 2025'
    },
    {
      text: 'Short-term subsidy structures can discourage longer-term circular economy investment.',
      source: 'IEEP, Supporting a Transition to Sustainable Farming Systems, 2024'
    }
  ],
  opportunities: [
    {
      text: 'Growing consumer demand for organic, local and sustainably certified produce.',
      source: 'IMARC Group, 2024'
    },
    {
      text: 'Biogas and biomass energy from agricultural residues create new income streams.',
      source: 'European Biogas Association Statistical Report, 2025'
    },
    {
      text: 'Precision agriculture technology can significantly reduce input costs.',
      source: 'MDPI, Sustainability, Farm-level Economic and Environmental Benefits of Precision Agriculture Technology Adoption, 2025'
    },
    {
      text: 'Nutrient recovery from manure and slurry reduces dependence on synthetic fertilisers.',
      source: 'Wageningen University & Research, 2024'
    },
    {
      text: 'Agri-food waste can become feedstock for bio-based materials and bioplastics.',
      source: 'Renewable Carbon News / Waste Framework Directive data, 2024'
    }
  ]
};

// 4. RELEVANT TOOLS
// Tools are not listed here. Add the Food and Agriculture sector slug to a resource's
// placements in src/lib/content/editable/tools/tool-catalogue.js to display it automatically.
export const foodAndAgricultureRelevantToolsSection = {
  id: 'relevant-tools',
  title: { en: 'Relevant tools', uk: 'Релевантні інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' },
  intro: ''
};

// SECTOR CARD, HERO AND NAVIGATION
export const foodAndAgriculture = {
  number: { en: 'Sector 2', uk: 'Сектор 2', ro: 'Sector 2', hy: 'Ոլորտ 2' },
  slug: 'food-and-agriculture',
  title: { en: 'Food and Agriculture', uk: 'Харчова промисловість і сільське господарство', ro: 'Alimentație și agricultură', hy: 'Սնունդ եւ գյուղատնտեսություն' },
  description: { en: 'This sector guide provides tools, cases and practical guidance for food and agriculture small-medium enterprises (SMEs) adopting circular economy practices.', uk: 'Цей секторний путівник надає інструменти, кейси та практичні рекомендації для МСП у харчовій промисловості та сільському господарстві, які впроваджують практики циркулярної економіки.', ro: 'Acest ghid sectorial oferă instrumente, cazuri și orientări practice pentru IMM-urile din alimentație și agricultură care adoptă practici de economie circulară.', hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ, օրինակներ եւ գործնական ուղեցույցներ սննդի ու գյուղատնտեսության ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։' },
  image: '/images/sectors/agriculture.jpg',
  imageAlt: { en: 'Food and Agriculture sector', uk: 'Сектор харчової промисловості та сільського господарства', ro: 'Sectorul alimentației și agriculturii', hy: 'Սննդի եւ գյուղատնտեսության ոլորտ' },
  navigation: [
    { label: { en: 'Introduction', uk: 'Вступ', ro: 'Introducere', hy: 'Ներածություն' }, sectionId: foodAndAgricultureIntroSection.id },
    { label: { en: 'Cases', uk: 'Кейси', ro: 'Cazuri', hy: 'Օրինակներ' }, sectionId: foodAndAgricultureCasesSection.id },
    { label: { en: 'Barriers & opportunities', uk: 'Бар’єри та можливості', ro: 'Bariere și oportunități', hy: 'Խոչընդոտներ եւ հնարավորություններ' }, sectionId: foodAndAgricultureBarriersSection.id },
    { label: { en: 'Relevant tools', uk: 'Релевантні інструменти', ro: 'Instrumente relevante', hy: 'Համապատասխան գործիքներ' }, sectionId: foodAndAgricultureRelevantToolsSection.id }
  ],
  sections: [
    foodAndAgricultureIntroSection,
    foodAndAgricultureCasesSection,
    foodAndAgricultureBarriersSection,
    foodAndAgricultureRelevantToolsSection
  ]
};
