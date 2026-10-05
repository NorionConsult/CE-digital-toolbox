import { defineJourneyPhasePage } from '../../technical/journey-phase-page-utils.js';

/*
  PHASE 6: MONITOR
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '06',
  slug: 'monitor',
  shortName: { en: 'Phase 6', uk: 'Етап 6', ro: 'Faza 6', hy: 'Փուլ 6' },
  title: { en: 'Monitor', uk: 'Моніторинг', ro: 'Monitorizează', hy: 'Մշտադիտարկել' },
  colourClass: 'phase-card-outline',
  description: {
    en: 'Selected tools for ongoing monitoring of solutions, including data gathering, selection of relevant indicators, and reassessment after implementation.',
    uk: 'Добірка інструментів для постійного моніторингу рішень, зокрема збору даних, вибору релевантних показників і повторного оцінювання після впровадження.',
    ro: 'Instrumente selectate pentru monitorizarea continuă a soluțiilor, inclusiv colectarea datelor, alegerea indicatorilor relevanți și reevaluarea după implementare.',
    hy: 'Ընտրված գործիքներ լուծումների շարունակական մոնիթորինգի համար՝ ներառյալ տվյալների հավաքագրումը, համապատասխան ցուցանիշների ընտրությունը եւ իրականացումից հետո վերագնահատումը։'
  }
};

const hero = {
  intro: {
    en: 'This phase helps you track progress and learn from implementation. It includes tools for monitoring outcomes, selecting indicators and revisiting the baseline after circular economy actions have been implemented.',
    uk: 'Цей етап допомагає відстежувати прогрес і робити висновки за результатами впровадження. Він містить інструменти для моніторингу досягнень, вибору показників (індикаторів) та повторного аналізу вихідного стану (базової лінії) після реалізації заходів циркулярної економіки.',
    ro: 'Această fază te ajută să urmărești progresul și să înveți din implementare. Include instrumente pentru monitorizarea rezultatelor, selectarea indicatorilor și revizuirea bazei după ce acțiunile circulare au fost implementate.',
    hy: 'Այս փուլը օգնում է հետեւել առաջընթացին եւ սովորել իրականացումից։ Այն ներառում է գործիքներ արդյունքները մոնիթորինգի, ցուցանիշներ ընտրելու եւ շրջանաձեւ գործողությունների իրականացումից հետո ելակետը վերանայելու համար։'
  },
  icon: '/icons/phase-icons/icon-monitor.png',
  iconAlt: { en: 'Monitor phase icon', uk: 'Іконка фази Моніторинг', ro: 'Pictograma fazei Monitorizează', hy: 'Մոնիթորինգ փուլի պատկերակ' }
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'choosing-indicators', label: { en: 'Choose indicators', uk: 'Вибрати показники', ro: 'Alege indicatori', hy: 'Ընտրել ցուցանիշներ' } },
  { sectionId: 'measuring-success', label: { en: 'Measure success', uk: 'Виміряти успіх', ro: 'Măsoară succesul', hy: 'Չափել հաջողությունը' } },
  { sectionId: 'interpreting-results', label: { en: 'Interpret results', uk: 'Інтерпретувати результати', ro: 'Interpretează rezultatele', hy: 'Մեկնաբանել արդյունքները' } }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: { en: 'Monitoring', uk: 'Моніторинг', ro: 'Monitorizare', hy: 'Մշտադիտարկել' },
  paragraphs: [
    { en: 'To improve circularity in practice, you need to track progress and learn from results over time. Feedback loops make it possible to learn from data, customers, partners, and day-to-day experience. Monitoring supports decision-making and communicate progress to internal and external stakeholders. || This phase focuses on choosing indicators for your circular activities in a simple and useful way, how to measure success to track what should be improved and how to interpret and review your results', uk: 'Щоб підвищувати рівень циркулярності на практиці, необхідно регулярно відстежувати динаміку та робити висновки з отриманих результатів. Налагоджений зворотний зв´язок дає змогу вчитися на основі даних, відгуків клієнтів, досвіду партнерів і щоденної практики. Моніторинг допомагає ухвалювати зважені рішення та звітувати про досягнутий прогрес внутрішнім і зовнішнім зацікавленим сторонам (стейкголдерам). || Цей етап зосереджений на простому та зручному виборі показників для ваших циркулярних заходів, методиці вимірювання успіху для виявлення зон розвитку, а також на тому, як інтерпретувати й переглядати отримані результати.', ro: 'Pentru a îmbunătăți circularitatea în practică, trebuie să urmărești progresul și să înveți din rezultate în timp. Buclele de feedback permit învățarea din date, clienți, parteneri și experiența de zi cu zi. Monitorizarea sprijină luarea deciziilor și comunicarea progresului către părți interesate interne și externe. || Această fază se concentrează pe alegerea unor indicatori simpli și utili pentru activitățile circulare, măsurarea succesului și interpretarea rezultatelor.', hy: 'Շրջանաձեւությունը գործնականում բարելավելու համար պետք է հետեւել առաջընթացին եւ ժամանակի ընթացքում սովորել արդյունքներից։ Հետադարձ կապի շրջափուլերը հնարավորություն են տալիս սովորել տվյալներից, հաճախորդներից, գործընկերներից եւ առօրյա փորձից։ Մոնիթորինգը աջակցում է որոշումների կայացմանը եւ առաջընթացի հաղորդակցմանը ներքին ու արտաքին շահագրգիռ կողմերին։ || Այս փուլը կենտրոնանում է շրջանաձեւ գործողությունների համար պարզ եւ օգտակար ցուցանիշներ ընտրելու, հաջողությունը չափելու եւ արդյունքները մեկնաբանելու վրա։' }
  ],
  cards: [
    {
      sectionId: 'choosing-indicators',
      number: '1',
      title: { en: 'Choosing Indicators', uk: 'Вибір показників', ro: 'Alegerea indicatorilor', hy: 'Ցուցանիշների ընտրություն' },
      description: { en: 'Select relevant and practical metrics that track your specific circular actions and connect directly to your goals.', uk: 'Доберіть релевантні та практичні показники, які відображають ваші конкретні циркулярні заходи й безпосередньо пов´язані з поставленими бізнес-цілями.', ro: 'Selectează metrici relevante și practice care urmăresc acțiunile circulare specifice și se conectează direct la obiectivele tale.', hy: 'Ընտրեք համապատասխան եւ գործնական չափորոշիչներ, որոնք հետեւում են ձեր կոնկրետ շրջանաձեւ գործողություններին եւ անմիջապես կապվում ձեր նպատակներին։' },
      keyOutputs: [{ en: 'Defined performance indicators', uk: 'Визначені показники ефективності (KPI)', ro: 'Indicatori de performanță definiți', hy: 'Սահմանված կատարողական ցուցանիշներ' }, { en: 'Indicator definitions and owners', uk: 'Опис індикаторів та закріплені за ними відповідальні особи', ro: 'Definiții ale indicatorilor și responsabili', hy: 'Ցուցանիշների սահմանումներ եւ պատասխանատուներ' }, { en: 'Measurement priorities', uk: 'Пріоритети для вимірювання', ro: 'Priorități de măsurare', hy: 'Չափման առաջնահերթություններ' }]
    },
    {
      sectionId: 'measuring-success',
      number: '2',
      title: { en: 'Measuring Success', uk: 'Вимірювання успіху', ro: 'Măsurarea succesului', hy: 'Հաջողության չափում' },
      description: { en: 'Use tools and frameworks to collect and track performance data in a way that is manageable for you.', uk: 'Використовуйте інструменти та методичні підходи для збору й відстеження даних про результативність у зручний і посильний для вас спосіб.', ro: 'Folosește instrumente și cadre pentru a colecta și urmări datele de performanță într-un mod gestionabil pentru tine.', hy: 'Օգտագործեք գործիքներ եւ շրջանակներ՝ կատարողականի տվյալները ձեզ համար կառավարելի ձեւով հավաքելու եւ հետեւելու համար։' },
      keyOutputs: [{ en: 'Data collection plan', uk: 'План збору даних', ro: 'Plan de colectare a datelor', hy: 'Տվյալների հավաքագրման պլան' }, { en: 'Established baseline and targets', uk: 'Зафіксована базова лінія (вихідний стан) та встановлені цільові орієнтири', ro: 'Bază și ținte stabilite', hy: 'Սահմանված ելակետ եւ թիրախներ' }, { en: 'Simple performance dashboard', uk: 'Проста інформаційна панель (дешборд) результативності', ro: 'Tablou simplu de performanță', hy: 'Պարզ կատարողական վահանակ' }]
    },
    {
      sectionId: 'interpreting-results',
      number: '3',
      title: { en: 'Interpreting Results', uk: 'Інтерпретація результатів', ro: 'Interpretarea rezultatelor', hy: 'Արդյունքների մեկնաբանում' },
      description: { en: 'Understand what your data shows, what is working, what is not and where improvement efforts should be focused.', uk: 'З´ясуйте, про що свідчать зібрані дані: що працює ефективно, що ні, та на чому саме варто зосередити зусилля для вдосконалення процесів.', ro: 'Înțelege ce arată datele tale, ce funcționează, ce nu funcționează și unde trebuie concentrate eforturile de îmbunătățire.', hy: 'Հասկացեք, թե ինչ են ցույց տալիս ձեր տվյալները, ինչն է աշխատում, ինչը՝ ոչ, եւ որտեղ պետք է կենտրոնացնել բարելավման ջանքերը։' },
      keyOutputs: [{ en: 'Performance review', uk: 'Огляд та оцінка результативності', ro: 'Revizuirea performanței', hy: 'Կատարողականի վերանայում' }, { en: 'Identified successes and gaps', uk: 'Визначені успішні практики та виявлені прогалини', ro: 'Succese și lacune identificate', hy: 'Բացահայտված հաջողություններ եւ բացեր' }, { en: 'Prioritised improvement areas', uk: 'Пріоритетні напрями для вдосконалення', ro: 'Zone prioritare de îmbunătățire', hy: 'Առաջնահերթ բարելավման ոլորտներ' }]
    },
  ]
};

/* 4. DETAILED SECTION 1 */
const choosingIndicatorsSection = {
  id: 'choosing-indicators',
  title: { en: 'Choosing Indicators', uk: 'Вибір показників', ro: 'Alegerea indicatorilor', hy: 'Ցուցանիշների ընտրություն' },
  resourceTag: 'monitor:choosing-indicators',
  paragraphs: [
    { en: "The indicators used to measure circularity should be relevant, practical, and linked to your circular goals. The right indicators help you track real progress, support decisions, and identify where improvement is needed. It is often more useful to focus on a small number of clear indicators, such as reuse rates, repair volumes, waste reduction, or product lifetime, than to collect too much data that is difficult to use.", uk: 'Показники, що використовуються для вимірювання циркулярності, мають бути актуальними, практичними та безпосередньо пов´язаними з вашими цілями. Правильно підібрані показники допомагають відстежувати реальний прогрес, обґрунтовувати управлінські рішення та виявляти напрями, які потребують удосконалення. Набагато корисніше зосередитися на невеликій кількості чітких метрик – як-от частка повторного використання, обсяги ремонту, скорочення відходів чи термін служби виробів, – ніж збирати надлишковий масив даних, який потім важко опрацювати та застосувати.', ro: 'Indicatorii folosiți pentru măsurarea circularității trebuie să fie relevanți, practici și conectați la obiectivele tale circulare. Indicatorii potriviți te ajută să urmărești progresul real, să susții deciziile și să identifici unde este nevoie de îmbunătățire. De multe ori este mai util să te concentrezi pe un număr mic de indicatori clari, precum ratele de reutilizare, volumele de reparații, reducerea deșeurilor sau durata de viață a produsului, decât să colectezi prea multe date greu de folosit.', hy: 'Շրջանաձեւությունը չափելու ցուցանիշները պետք է լինեն համապատասխան, գործնական եւ կապված ձեր շրջանաձեւ նպատակների հետ։ Ճիշտ ցուցանիշները օգնում են հետեւել իրական առաջընթացին, աջակցել որոշումներին եւ գտնել, թե որտեղ է պետք բարելավում։ Հաճախ ավելի օգտակար է կենտրոնանալ քիչ թվով հստակ ցուցանիշների վրա, օրինակ՝ կրկնօգտագործման մակարդակ, վերանորոգման ծավալ, թափոնների նվազում կամ արտադրանքի ծառայության ժամկետ, քան հավաքել չափազանց շատ դժվար օգտագործվող տվյալներ։' }
  ],
  /*
    INDICATOR INFO BOXES:
    Edit the title, icon and item list below to change the four boxes.
    Icons use local Icon Park SVG files from static/icons/icon-park/.
  */
  baselineCards: [
    {
      title: { en: 'Material Use', uk: 'Використання матеріалів', ro: 'Utilizarea materialelor', hy: 'Նյութերի օգտագործում' },
      icon: 'recycling',
      items: [
        { en: '% recycled content in products', uk: 'Частка вторинної (переробленої) сировини у виробах (%)', ro: '% conținut reciclat în produse', hy: 'արտադրանքում վերամշակված բովանդակության %' },
        { en: 'Raw material consumption (kg)', uk: 'Споживання сировини (кг)', ro: 'Consum de materii prime (kg)', hy: 'Հումքի սպառում (կգ)' },
        { en: 'Virgin material reduction (%)', uk: 'Скорочення використання первинної сировини (%)', ro: 'Reducerea materialelor virgine (%)', hy: 'Առաջնային նյութերի նվազեցում (%)' },
        { en: 'Waste generated per unit output', uk: 'Утворення відходів на одиницю готової продукції', ro: 'Deșeuri generate per unitate de producție', hy: 'Արտադրանքի մեկ միավորի հաշվով առաջացած թափոններ' }
      ]
    },
    {
      title: { en: 'Product Life', uk: 'Життєвий цикл продукції', ro: 'Durata de viață a produsului', hy: 'Արտադրանքի կյանքի տեւողություն' },
      icon: 'tool',
      items: [
        { en: 'Product average lifespan', uk: 'Середній термін служби виробу', ro: 'Durata medie de viață a produsului', hy: 'Արտադրանքի միջին ծառայության ժամկետ' },
        { en: 'Repair & maintenance revenue', uk: 'Дохід від ремонту та технічного обслуговування', ro: 'Venituri din reparații și întreținere', hy: 'Վերանորոգման եւ սպասարկման եկամուտ' },
        { en: 'Return/take-back rate', uk: 'Рівень повернення продукції (частка зворотного забору)', ro: 'Rata de returnare/preluare', hy: 'Վերադարձի/հետվերցման մակարդակ' },
        { en: 'Products sold refurbished vs new', uk: 'Співвідношення проданих оновлених виробів до нових', ro: 'Produse recondiționate vândute comparativ cu produse noi', hy: 'Վաճառված վերականգնված ապրանքներ՝ նորերի համեմատ' }
      ]
    },
    {
      title: { en: 'Circular Revenue', uk: 'Доходи від циркулярної діяльності', ro: 'Venituri circulare', hy: 'Շրջանաձեւ եկամուտ' },
      icon: 'wallet',
      items: [
        { en: 'Revenue from circular services', uk: 'Дохід від циркулярних послуг', ro: 'Venituri din servicii circulare', hy: 'Շրջանաձեւ ծառայություններից եկամուտ' },
        { en: 'Cost savings from waste reduction', uk: 'Економія витрат завдяки скороченню відходів', ro: 'Economii de costuri din reducerea deșeurilor', hy: 'Թափոնների նվազեցումից ծախսերի խնայողություն' },
        { en: 'Circular vs linear revenue ratio', uk: 'Співвідношення циркулярного доходу до лінійного', ro: 'Raportul dintre veniturile circulare și cele liniare', hy: 'Շրջանաձեւ եւ գծային եկամտի հարաբերակցություն' },
        { en: 'Customer retention in service models', uk: 'Рівень утримання клієнтів у сервісних моделях обслуговування', ro: 'Retenția clienților în modele de servicii', hy: 'Հաճախորդների պահպանում ծառայության մոդելներում' }
      ]
    },
    {
      title: { en: 'Environmental', uk: 'Екологічні показники', ro: 'Mediu', hy: 'Բնապահպանական' },
      icon: 'earth',
      items: [
        { en: 'Carbon dioxide (CO2) emissions per unit', uk: 'Викиди діоксиду вуглецю (CO2) на одиницю продукції', ro: 'Emisii de dioxid de carbon (CO2) per unitate', hy: 'Ածխաթթու գազի (CO2) արտանետումներ մեկ միավորի հաշվով' },
        { en: 'Energy from renewable sources', uk: 'Частка енергії з відновлюваних джерел', ro: 'Energie din surse regenerabile', hy: 'Էներգիա վերականգնվող աղբյուրներից' },
        { en: 'Water consumption (litres/unit)', uk: 'Споживання води (літрів на одиницю продукції)', ro: 'Consum de apă (litri/unitate)', hy: 'Ջրի սպառում (լիտր/միավոր)' },
        { en: 'Waste to landfill (tonnes/year)', uk: 'Обсяг відходів, спрямованих на захоронення на сміттєзвалищах (тонн/рік)', ro: 'Deșeuri la depozitare (tone/an)', hy: 'Աղբավայր ուղարկվող թափոններ (տոննա/տարի)' }
      ]
    }
  ]
};

/* 5. DETAILED SECTION 2 */
const measuringSuccessSection = {
  id: 'measuring-success',
  title: { en: 'Measuring Success', uk: 'Вимірювання успіху', ro: 'Măsurarea succesului', hy: 'Հաջողության չափում' },
  resourceTag: 'monitor:measuring-success',
  paragraphs: [
    {
      en: "With the right indicators chosen in the step above, the next step is to put them to use. The two tools on the following section help you collect and organise data against your selected metrics, turning your circular ambitions into measurable, trackable progress.|| - **Track progress against your circular goals**: The indicators you selected in the previous step are directly linked to your circular strategy. Measuring them consistently tells you whether your actions are having the intended effect, and gives you evidence to act on. || - **Support smarter decisions inside your business**: The data from your chosen metrics makes it easier to prioritise investments, allocate resources, and decide where to scale circular activities. Without measurement, improvement is guesswork. ||- **Communicate progress to stakeholders credibly**: Customers, funders, and partners increasingly expect evidence, not just intentions. The indicators selected give you a credible, consistent basis for reporting.|| A recommended tool is the **SME Reporting Tool**, which uses your selected indicators to create an annual climate and circularity report tracking greenhouse gas emissions and key reductions over time.",
      uk: 'Після того як на попередньому кроці визначено правильні показники, наступне завдання – застосувати їх на практиці. Два інструменти в наступному розділі допоможуть збирати й упорядковувати дані відповідно до обраних метрик, перетворюючи ваші циркулярні наміри на вимірюваний та контрольований прогрес.|| - **Відстежуйте прогрес на шляху до циркулярних цілей**: показники, обрані на попередньому кроці, безпосередньо пов´язані з вашою циркулярною стратегією. Регулярне вимірювання показників дає змогу оцінити, чи мають вжиті заходи очікуваний ефект, і надає дані для подальшого ухвалення рішень. || - **Приймайте більш зважені рішення всередині компанії**: дані обраних метрик спрощують визначення пріоритетів для інвестицій, розподіл ресурсів та ухвалення рішень щодо масштабування циркулярних ініціатив. Без належних вимірювань будь-які спроби вдосконалення залишаються лише здогадками. ||- **Переконливо повідомляйте про досягнуті результати зацікавленим сторонам**: клієнти, інвестори та партнери дедалі частіше очікують конкретних доказів, а не просто декларації намірів. Обрані показники забезпечують надійну, послідовну та переконливу основу для звітності.|| Рекомендованим рішенням вважається - **SME Reporting Tool**, який на основі ваших показників формує щорічний звіт із клімату та циркулярності, відстежуючи динаміку викидів парникових газів і ключові показники скорочення ресурсоспоживання.',
      ro: 'După ce ai ales indicatorii potriviți în pasul anterior, următorul pas este să îi folosești. Cele două instrumente din secțiunea următoare te ajută să colectezi și să organizezi date pentru metricile selectate, transformând ambițiile circulare în progres măsurabil și ușor de urmărit.|| - **Urmărește progresul față de obiectivele circulare**: indicatorii selectați în pasul anterior sunt conectați direct la strategia ta circulară. Măsurarea lor consecventă arată dacă acțiunile au efectul dorit și oferă dovezi pe baza cărora poți acționa. || - **Sprijină decizii mai inteligente în afacere**: datele din metricile alese facilitează prioritizarea investițiilor, alocarea resurselor și decizia privind extinderea activităților circulare. Fără măsurare, îmbunătățirea se bazează pe presupuneri. ||- **Comunică progresul credibil către părțile interesate**: clienții, finanțatorii și partenerii așteaptă tot mai mult dovezi, nu doar intenții. Indicatorii selectați oferă o bază credibilă și consecventă pentru raportare.|| Un instrument recomandat este **SME Reporting Tool**, care folosește indicatorii selectați pentru a crea un raport anual de climă și circularitate, urmărind emisiile de gaze cu efect de seră și reducerile-cheie în timp.',
      hy: 'Վերեւի քայլում ճիշտ ցուցանիշները ընտրելուց հետո հաջորդ քայլը դրանք գործնականում օգտագործելն է։ Հաջորդ բաժնի երկու գործիքները կօգնեն հավաքել եւ կազմակերպել տվյալները ձեր ընտրած չափորոշիչների համաձայն՝ շրջանաձեւ նպատակները դարձնելով չափելի եւ հետեւելի առաջընթաց։|| - **Հետեւեք ձեր շրջանաձեւ նպատակների առաջընթացին**. նախորդ քայլում ընտրված ցուցանիշները անմիջապես կապված են ձեր շրջանաձեւ ռազմավարության հետ։ Դրանց կանոնավոր չափումը ցույց է տալիս՝ արդյոք գործողությունները տալիս են սպասվող արդյունքը, եւ տրամադրում է ապացույցներ հետագա գործողությունների համար։ || - **Աջակցեք ավելի խելացի որոշումներին բիզնեսի ներսում**. ընտրված չափորոշիչների տվյալները հեշտացնում են ներդրումների առաջնահերթացումը, ռեսուրսների բաշխումը եւ այն որոշումը, թե որտեղ մասշտաբավորել շրջանաձեւ գործողությունները։ Առանց չափման բարելավումը ենթադրություն է։ ||- **Հավաստիորեն հաղորդեք առաջընթացը շահագրգիռ կողմերին**. հաճախորդները, ֆինանսավորողները եւ գործընկերները ավելի ու ավելի են ակնկալում ապացույցներ, ոչ միայն մտադրություններ։ Ընտրված ցուցանիշները տալիս են հաշվետվության վստահելի եւ հետեւողական հիմք։|| Առաջարկվող գործիք է **SME Reporting Tool**-ը, որը օգտագործում է ընտրված ցուցանիշները՝ ստեղծելու տարեկան կլիմայի եւ շրջանաձեւության հաշվետվություն, որը հետեւում է ջերմոցային գազերի արտանետումներին եւ հիմնական կրճատումներին ժամանակի ընթացքում։'
    }
  ]
};

/* 6. DETAILED SECTION 3 */
const interpretingResultsSection = {
  id: 'interpreting-results',
  title: { en: 'Interpreting Results', uk: 'Інтерпретація результатів', ro: 'Interpretarea rezultatelor', hy: 'Արդյունքների մեկնաբանում' },
  resourceTag: 'monitor:interpreting-results',
  paragraphs: [
    {
      en: "Interpreting results is an essential part of managing a circular economy transition. It helps you turn monitoring into practical learning by showing whether circular actions are performing how you would expect them to, which initiatives are doing well, and where you need to make adjustments. Results should be compared against the milestones and targets set during planning. ||Where targets are not being met, small-medium enterprises (SMEs) should look beyond the numbers and identify the underlying causes, such as resource gaps, behavioural barriers, operational challenges or dependencies on partners. Equally important is understanding what is working well, so successful approaches can be replicated and scaled. By capturing these insights and sharing them with relevant teams, leadership, customers or funders, you can strengthen accountability, build trust and feed learning into the next cycle of circular improvement.",
      uk: 'Інтерпретація результатів – невід´ємна частина управління переходом до циркулярної економіки. Вона допомагає перетворити звичайний моніторинг на практичний досвід, наочно показуючи, чи працюють циркулярні заходи так, як очікувалося, які ініціативи успішні, а де необхідно внести корективи. Отримані результати слід порівнювати з контрольними точками та цільовими показниками, встановленими на етапі планування. ||Якщо цілей не досягнуто, малому та середньому бізнесу варто дивитися глибше за сухі цифри та виявляти першопричини – як-от брак ресурсів, поведінкові бар´єри, операційні труднощі чи залежність від партнерів. Не менш важливо розуміти й те, що працює ефективно, аби масштабувати та поширювати успішні практики на інші процеси. Фіксуючи ці висновки й ділячись ними з профільними командами, керівництвом, клієнтами або інвесторами, Ви підвищуєте відповідальність, зміцнюєте довіру та закладаєте напрацьований досвід у наступний цикл циркулярного вдосконалення.',
      ro: 'Interpretarea rezultatelor este o parte esențială a gestionării tranziției către economia circulară. Te ajută să transformi monitorizarea în învățare practică, arătând dacă acțiunile circulare funcționează conform așteptărilor, care inițiative merg bine și unde trebuie făcute ajustări. Rezultatele ar trebui comparate cu etapele și țintele stabilite în planificare. ||Atunci când țintele nu sunt atinse, întreprinderile mici și mijlocii ar trebui să privească dincolo de cifre și să identifice cauzele de bază, cum ar fi lipsa resurselor, bariere comportamentale, provocări operaționale sau dependențe de parteneri. La fel de important este să înțelegi ce funcționează bine, astfel încât abordările reușite să poată fi replicate și extinse. Prin colectarea acestor învățăminte și partajarea lor cu echipele relevante, conducerea, clienții sau finanțatorii, poți consolida responsabilitatea, încrederea și învățarea pentru următorul ciclu de îmbunătățire circulară.',
      hy: 'Արդյունքների մեկնաբանումը շրջանաձեւ տնտեսության անցումը կառավարելու կարեւոր մաս է։ Այն օգնում է մոնիթորինգը վերածել գործնական ուսուցման՝ ցույց տալով, թե արդյոք շրջանաձեւ գործողությունները կատարում են սպասվածը, որ նախաձեռնություններն են լավ աշխատում եւ որտեղ են անհրաժեշտ հարմարեցումներ։ Արդյունքները պետք է համեմատել պլանավորման ընթացքում սահմանված հանգրվանների եւ թիրախների հետ։ ||Երբ թիրախները չեն կատարվում, փոքր եւ միջին ձեռնարկությունները պետք է նայեն թվերից այն կողմ եւ բացահայտեն հիմքային պատճառները, ինչպիսիք են ռեսուրսների պակասը, վարքային խոչընդոտները, գործառնական դժվարությունները կամ գործընկերներից կախվածությունը։ Նույնքան կարեւոր է հասկանալ, թե ինչն է լավ աշխատում, որպեսզի հաջող մոտեցումները կրկնվեն եւ մասշտաբավորվեն։ Այս գիտելիքները հավաքելով եւ համապատասխան թիմերի, ղեկավարության, հաճախորդների կամ ֆինանսավորողների հետ կիսելով՝ կարող եք ամրապնդել հաշվետվողականությունը, վստահությունը եւ ուսուցումը հաջորդ շրջանաձեւ բարելավման ցիկլի համար։'
    }
  ],
};

/* 8. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумки етапу', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    { en: 'Use this checklist to confirm that you can measure circular progress and turn monitoring results into practical improvements.', uk: 'Скористайтеся цим чеклістом, щоб переконатися, що Ви здатні вимірювати прогрес у впровадженні циркулярних підходів і перетворювати результати моніторингу на практичні вдосконалення.', ro: 'Folosește această listă pentru a confirma că poți măsura progresul circular și transforma rezultatele monitorizării în îmbunătățiri practice.', hy: 'Օգտագործեք այս ստուգաթերթը՝ հաստատելու համար, որ կարող եք չափել շրջանաձեւ առաջընթացը եւ մոնիթորինգի արդյունքները վերածել գործնական բարելավումների։' },
    { en: 'Monitoring is an ongoing process and the SME journey can be revisited', uk: 'Моніторинг – це безперервний процес, і до шляху МСП можна повертатися знову.', ro: 'Monitorizarea este un proces continuu, iar parcursul IMM poate fi revizitat.', hy: 'Մոնիթորինգը շարունակական գործընթաց է, եւ ՓՄՁ ուղին կարելի է նորից վերանայել։' }
  ],
  checklist: [
    { en: 'Selected indicators that connect directly to circular goals', uk: 'Обрано показники (індикатори), які безпосередньо пов´язані з цілями циркулярності', ro: 'Ai selectat indicatori conectați direct la obiectivele circulare', hy: 'Ընտրվել են ցուցանիշներ, որոնք անմիջապես կապված են շրջանաձեւ նպատակների հետ' },
    { en: 'Defined responsibilities and data sources for each indicator', uk: 'Визначено відповідальних осіб та джерела даних для кожного показника', ro: 'Ai definit responsabilități și surse de date pentru fiecare indicator', hy: 'Յուրաքանչյուր ցուցանիշի համար սահմանվել են պատասխանատվություններ եւ տվյալների աղբյուրներ' },
    { en: 'Established targets and reporting intervals', uk: 'Встановлено цільові орієнтири та періодичність звітування', ro: 'Ai stabilit ținte și intervale de raportare', hy: 'Սահմանվել են թիրախներ եւ հաշվետվության պարբերականություն' },
    { en: 'Reviewed performance and identified important gaps', uk: 'Проаналізовано досягнуті результати та виявлено суттєві прогалини', ro: 'Ai revizuit performanța și ai identificat lacune importante', hy: 'Վերանայվել է կատարողականը եւ բացահայտվել են կարեւոր բացեր' },
    { en: 'Agreed improvement actions based on the results', uk: 'Узгоджено заходи щодо вдосконалення на основі отриманих результатів', ro: 'Ai agreat acțiuni de îmbunătățire pe baza rezultatelor', hy: 'Արդյունքների հիման վրա համաձայնեցվել են բարելավման գործողություններ' },
    { en: 'Created a repeatable monitoring and feedback process', uk: 'Налагоджено регулярний процес моніторингу та зворотного зв´язку', ro: 'Ai creat un proces repetabil de monitorizare și feedback', hy: 'Ստեղծվել է կրկնվող մոնիթորինգի եւ հետադարձ կապի գործընթաց' }
  ]
};

export const monitor = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [
    choosingIndicatorsSection,
    measuringSuccessSection,
    interpretingResultsSection,
  ],
  phaseSummary
});
