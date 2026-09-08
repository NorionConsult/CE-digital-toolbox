import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 1: LEARN
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '01',
  slug: 'learn',
  shortName: { en: 'Phase 1', uk: 'Фаза 1', ro: 'Faza 1', hy: 'Փուլ 1' },
  title: { en: 'Learn', uk: 'Навчання', ro: 'Învață', hy: 'Սովորել' },
  colourClass: 'phase-card-green',
  description: {
    en: 'Introduces key Circular Economy (CE) and Resource Efficient and Cleaner Production (RECP) concepts, terms, and models to understand the benefits, risks, and potential of circular economy, without prior knowledge.',
    uk: 'Знайомить з ключовими поняттями, термінами та моделями циркулярної економіки (CE) і ресурсоефективного та чистого виробництва (RECP), щоб зрозуміти переваги, ризики й потенціал циркулярної економіки без попередніх знань.',
    ro: 'Introduce concepte, termeni și modele-cheie de economie circulară (CE) și producție eficientă din punctul de vedere al resurselor și mai curată (RECP), pentru a înțelege beneficiile, riscurile și potențialul economiei circulare fără cunoștințe anterioare.',
    hy: 'Ներկայացնում է շրջանաձեւ տնտեսության (CE) եւ ռեսուրսաարդյունավետ ու մաքուր արտադրության (RECP) հիմնական գաղափարները, տերմիններն ու մոդելները՝ օգնելով հասկանալ շրջանաձեւ տնտեսության օգուտները, ռիսկերը եւ ներուժը՝ առանց նախնական գիտելիքների։'
  }
};

const hero = {
  intro: {
    en: 'This phase introduces the core concepts behind circular economy and resource efficient cleaner production. It is intended as a starting point for those who need a shared language and overview before selecting specific tools.',
    uk: 'Ця фаза знайомить з основними поняттями циркулярної економіки та ресурсоефективного чистого виробництва. Вона є відправною точкою для тих, кому потрібні спільна мова й огляд перед вибором конкретних інструментів.',
    ro: 'Această fază introduce conceptele de bază ale economiei circulare și ale producției mai curate și eficiente în utilizarea resurselor. Este un punct de plecare pentru cei care au nevoie de un limbaj comun și o privire de ansamblu înainte de a alege instrumente specifice.',
    hy: 'Այս փուլը ներկայացնում է շրջանաձեւ տնտեսության եւ ռեսուրսաարդյունավետ մաքուր արտադրության հիմնական գաղափարները։ Այն մեկնարկային կետ է նրանց համար, ովքեր նախքան կոնկրետ գործիքներ ընտրելը կարիք ունեն ընդհանուր լեզվի եւ ակնարկի։'
  },
  icon: '/icons/phase-icons/icon-learn.png',
  iconAlt: { en: 'Learn phase icon', uk: 'Іконка фази Навчання', ro: 'Pictograma fazei Învață', hy: 'Սովորել փուլի պատկերակ' },
  hideSectionNavigation: true,
  hidePathwayCards: true
};

/* 2. HERO SECTION BUTTONS
  Hidden for Phase 1 for now. Add buttons here later if this page needs
  quick links in the hero again.
*/
/** @type {{ sectionId: string; label: string }[]} */
const sectionButtons = [];

/* 3. PHASE OVERVIEW
  Pathway cards are hidden for Phase 1. Keep `cards` empty unless the cards
  should be shown again later.
*/
const pathwaySection = {
  title: {
    en: 'Are you new to circular economy?',
    uk: 'Ви тільки знайомитеся з циркулярною економікою?',
    ro: 'Ești la început cu economia circulară?',
    hy: 'Դուք նո՞ր եք ծանոթանում շրջանաձեւ տնտեսությանը։'
  },
  /*
    Edit the phase overview text here.
    Each quoted line inside the brackets becomes one paragraph on the page.
  */
  paragraphs: [
    {
      en: 'If you are new to Circular Economy (CE) and Resource Efficient and Cleaner Production (RECP) concepts, you can first and foremost familiarise yourself with the terminology and foundational principles. This section will provide you with a selection of introductory courses to get a comprehensive introduction to the key concepts.',
      uk: 'Якщо ви тільки знайомитеся з поняттями циркулярної економіки (CE) та ресурсоефективного й чистого виробництва (RECP), спершу варто ознайомитися з термінологією та базовими принципами. У цьому розділі зібрано вступні курси, які допоможуть отримати цілісне розуміння ключових понять.',
      ro: 'Dacă ești la început cu conceptele de economie circulară (CE) și producție eficientă din punctul de vedere al resurselor și mai curată (RECP), primul pas este să te familiarizezi cu terminologia și principiile de bază. Această secțiune îți oferă cursuri introductive pentru o înțelegere mai completă a conceptelor-cheie.',
      hy: 'Եթե նոր եք ծանոթանում շրջանաձեւ տնտեսության (CE) եւ ռեսուրսաարդյունավետ ու մաքուր արտադրության (RECP) գաղափարներին, նախ ծանոթացեք տերմինաբանությանը եւ հիմնարար սկզբունքներին։ Այս բաժնում ներկայացված են ներածական դասընթացներ, որոնք կօգնեն ամբողջական պատկերացում կազմել հիմնական գաղափարների մասին։'
    },
    {
      en: 'Afterwards, you can explore the practical tools and resources available to support your circular economy journey by following to the next phase in this Circular Economy Toolbox, exploring relevant sectors or accessing the tools and resources directly. The phases are designed to be flexible, allowing you to navigate through the content based on your specific needs and interests. Before you start, review your understanding of circular economy vs. linear economy.',
      uk: 'Після цього ви можете перейти до практичних інструментів і ресурсів, які підтримують ваш шлях до циркулярної економіки: перейти до наступної фази, переглянути відповідні сектори або відкрити каталог інструментів напряму. Фази побудовані гнучко, щоб ви могли рухатися відповідно до власних потреб та інтересів. Перед початком перегляньте різницю між циркулярною та лінійною економікою.',
      ro: 'Apoi poți explora instrumentele și resursele practice care sprijină parcursul tău către economia circulară: mergând la faza următoare, explorând sectoarele relevante sau accesând direct catalogul de instrumente. Fazele sunt flexibile, astfel încât să poți naviga în funcție de nevoile și interesele tale. Înainte de a începe, revizuiește diferența dintre economia circulară și economia liniară.',
      hy: 'Այնուհետեւ կարող եք ուսումնասիրել գործնական գործիքներն ու ռեսուրսները՝ անցնելով հաջորդ փուլին, դիտելով համապատասխան ոլորտները կամ անմիջապես բացելով գործիքների կատալոգը։ Փուլերը ճկուն են, որպեսզի կարողանաք շարժվել ձեր կարիքներին եւ հետաքրքրություններին համապատասխան։ Սկսելուց առաջ վերանայեք շրջանաձեւ եւ գծային տնտեսության տարբերությունը։'
    }
  ],
  /*
    Add extra blocks below the overview text here.
    Each subsection can have a subtitle, paragraph text and one optional image.
  */
  subsections: [
    {
      title: { en: 'Linear vs. circular', uk: 'Лінійна чи циркулярна', ro: 'Linear versus circular', hy: 'Գծային եւ շրջանաձեւ' },
      paragraphs: [
        {
          en: 'In contrast to a linear economy, which follows a “take, make, dispose” model, a circular economy aims to keep resources in use for as long as possible and minimise waste, environmental degradation, and climate impacts.',
          uk: 'На відміну від лінійної економіки, що працює за моделлю «взяти, виготовити, викинути», циркулярна економіка прагне зберігати ресурси у використанні якомога довше та мінімізувати відходи, деградацію довкілля і кліматичні впливи.',
          ro: 'Spre deosebire de economia liniară, care urmează modelul „extrage, produce, aruncă”, economia circulară urmărește menținerea resurselor în uz cât mai mult timp și reducerea deșeurilor, degradării mediului și impacturilor climatice.',
          hy: 'Ի տարբերություն գծային տնտեսության, որը հետեւում է «վերցնել, արտադրել, թափել» մոդելին, շրջանաձեւ տնտեսությունը ձգտում է ռեսուրսները հնարավորինս երկար պահել օգտագործման մեջ եւ նվազեցնել թափոնները, շրջակա միջավայրի դեգրադացիան ու կլիմայական ազդեցությունները։'
        },
        {
          en: "A widely used way of illustrating the circular economy is the Ellen MacArthur Foundation’s **butterfly diagram** (shown below). The diagram depicts two main cycles, technical and biological, and shows how products, materials, and resources can circulate from use and consumption back into production processes, reducing waste and optimising resource use. || If you want to learn more, see the eLearning courses below to continue learning about the basic concepts of circular economy and resource efficiency.",
          uk: 'Поширений спосіб пояснити циркулярну економіку - це **діаграма метелика** Фонду Еллен Макартур (нижче). Вона показує два основні цикли, технічний і біологічний, та пояснює, як продукти, матеріали й ресурси можуть повертатися з використання та споживання назад у виробничі процеси, зменшуючи відходи й оптимізуючи використання ресурсів. || Щоб дізнатися більше, перегляньте нижче електронні курси про базові поняття циркулярної економіки та ресурсоефективності.',
          ro: 'O modalitate des folosită pentru a ilustra economia circulară este **diagrama fluture** a Fundației Ellen MacArthur (prezentată mai jos). Diagrama arată două cicluri principale, tehnic și biologic, și explică modul în care produsele, materialele și resursele pot circula de la utilizare și consum înapoi în procesele de producție, reducând deșeurile și optimizând utilizarea resurselor. || Pentru a afla mai multe, vezi cursurile eLearning de mai jos despre conceptele de bază ale economiei circulare și eficienței resurselor.',
          hy: 'Շրջանաձեւ տնտեսությունը պատկերելու տարածված ձեւերից է Էլեն ՄակԱրթուր հիմնադրամի **թիթեռի դիագրամը** (ստորեւ)։ Այն ներկայացնում է երկու հիմնական շրջափուլ՝ տեխնիկական եւ կենսաբանական, եւ ցույց է տալիս, թե ինչպես կարող են ապրանքները, նյութերն ու ռեսուրսները օգտագործումից եւ սպառումից վերադառնալ արտադրական գործընթացներ՝ նվազեցնելով թափոնները եւ օպտիմալացնելով ռեսուրսների օգտագործումը։ || Ավելին իմանալու համար դիտեք ստորեւ ներկայացված էլեկտրոնային դասընթացները շրջանաձեւ տնտեսության եւ ռեսուրսաարդյունավետության հիմնական գաղափարների վերաբերյալ։'
        }
      ],
      image: {
        src: '/phase-content/phase-1/Circular economy butterfly diagram.png',
        alt: {
          en: 'Circular economy butterfly diagram showing technical and biological cycles',
          uk: 'Діаграма метелика циркулярної економіки з технічним і біологічним циклами',
          ro: 'Diagrama fluture a economiei circulare cu cicluri tehnice și biologice',
          hy: 'Շրջանաձեւ տնտեսության թիթեռի դիագրամ՝ տեխնիկական եւ կենսաբանական շրջափուլերով'
        },
        caption: {
          en: 'The butterfly diagram by the Ellen MacArthur Foundation, 2019',
          uk: 'Діаграма метелика Фонду Еллен Макартур, 2019',
          ro: 'Diagrama fluture a Fundației Ellen MacArthur, 2019',
          hy: 'Էլեն ՄակԱրթուր հիմնադրամի թիթեռի դիագրամ, 2019'
        }
      }
    }
  ],
  cards: []
};

/* 4. DETAILED SECTION 1: E-COURSES AND LEARNING RESOURCES */
/*
  LEARNING RESOURCE CARDS:
  Add more cards by copying one object inside `cards` and changing the values.
  These cards do not create separate pages. Their button opens the `url` directly.
  Each card controls one full green container: card on the left, description
  text on the right.
*/
const LearningresourcesSection = {
  id: 'learning-resources',
  title: { en: 'E-courses and learning resources', uk: 'Е-курси та навчальні ресурси', ro: 'Cursuri online și resurse de învățare', hy: 'Էլեկտրոնային դասընթացներ եւ ուսումնական ռեսուրսներ' },
  paragraphs: [
    {
      en: 'Use this section to introduce the learning resources that can help you build a basic understanding before you continue into the more practical journey phases.',
      uk: 'Використайте цей розділ, щоб ознайомитися з навчальними ресурсами, які допоможуть сформувати базове розуміння перед переходом до практичніших фаз.',
      ro: 'Folosește această secțiune pentru a descoperi resursele de învățare care te pot ajuta să construiești o înțelegere de bază înainte de a continua cu fazele mai practice.',
      hy: 'Օգտագործեք այս բաժինը՝ ծանոթանալու ուսումնական ռեսուրսներին, որոնք կօգնեն կազմել հիմնական պատկերացում նախքան ավելի գործնական փուլերին անցնելը։'
    }
  ],
  hideStepEyebrow: true,
  showRelevantTools: false,
  learningResources: {
    labels: {
      badge: { en: 'Online course', uk: 'Онлайн-курс', ro: 'Curs online', hy: 'Առցանց դասընթաց' },
      about: { en: 'What is this?', uk: 'Що це?', ro: 'Ce este acesta?', hy: 'Ի՞նչ է սա։' },
      learningGoals: { en: 'Learning goals', uk: 'Навчальні цілі', ro: 'Obiective de învățare', hy: 'Ուսումնական նպատակներ' },
      whyTakeCourse: { en: 'Why should I take this course?', uk: 'Чому варто пройти цей курс?', ro: 'De ce să urmez acest curs?', hy: 'Ինչո՞ւ անցնել այս դասընթացը։' }
    },
    cards: [
      {
        courseTitle: 'Circular Economy explained (video playlist)',
        shortDescription:
          'A short curated playlist of whiteboard-style explainer videos from the Ellen MacArthur Foundation, walking through the core idea of the circular economy and why it matters for business.',
        language: 'English',
        provider: 'Ellen MacArthur Foundation',
        url: 'https://www.ellenmacarthurfoundation.org/playlist-circular-economy-explained',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'A free, bite-sized video collection that introduces the circular economy concept including the well-known explainer narrated by Dame Ellen MacArthur herself, which uses her solo round-the-world sailing experience to illustrate the difference between a linear "take-make-waste" model and a circular one.'
        ],
        learningGoals: [
          'Understand the basic difference between a linear and a circular economy',
          'Understand why finite resources make the current "take-make-waste" model unsustainable',
          'See real-world examples of value retention, such as remanufacturing and cascading material use, in everyday terms'
        ],
        whyTakeCourse: [
          "At only a few minutes per video, this is a fast way to build a non-technical understanding of the circular economy before moving into more detailed toolbox content. It's an ideal starting point for staff who have never encountered the concept before and need a plain-language explanation."
        ]
      },
      {
        courseTitle: 'Circular Economy in Industry',
        shortDescription:
          'A ten-part e-learning course covering circular economy principles and their application across industrial value chains, developed for green-transition skills building.',
        language: 'English',
        provider: 'United Nations Industrial Development Organisation (UNIDO)',
        url: 'https://www.unido.org/learning-resources/circular-economy-industry',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'A structured, modular e-learning course that progresses from the economic foundations of the circular economy through to applied industrial topics: circular design, value retention strategies such as remanufacturing, reconditioning and refurbishing, recycling processes, circularity in use and consumption, the circular bioeconomy, trade and environment linkages, and the role of renewable energy in circular, low-carbon industrial systems.'
        ],
        learningGoals: [
          'Build a solid conceptual and economic foundation in circular economy principles',
          'Learn how circular design and value-retention strategies, such as remanufacturing, refurbishing and recycling, apply across industrial value chains',
          'Understand how circularity connects to broader systems such as the bioeconomy, trade, and renewable energy'
        ],
        whyTakeCourse: [
          'This course goes well beyond a basic introduction, offering a comprehensive, progressive curriculum that is directly relevant to industrial and manufacturing small-medium enterprises (SMEs). Because it is modular, learners can work through it section by section and revisit specific topics, such as remanufacturing or circular design, as they apply concepts to their own business. It is a strong next step once the basic vocabulary from an introductory resource has been established.'
        ]
      },
      {
        courseTitle: 'SWITCH circular economy journey',
        shortDescription:
          'A circular economy programme which aims to support micro-enterprises and small-medium enterprises (SMEs) with specific tracks that walk businesses through circular economy practices via games and journey phases.',
        language: 'English',
        provider: 'SWITCH to Circular Economy Value Chains',
        url: 'https://switch.circle-economy.com/',
        buttonLabel: 'Open resource',
        aboutCourse: [
          'An interactive, gamified online platform built specifically for Micro, small and medium-sized enterprise (MSME) suppliers in developing countries who are part of global value chains. Users pick a sector track, such as Textiles, Plastics & Packaging, or Electronics & Information and Communication Technology (ICT), then work through a series of interactive games and journey phases. Each phase presents sector-relevant circular economy content followed by interactive questions, covering topics like recycling barriers and traceability. A free login is required, which enables personalised progress tracking across tracks.'
        ],
        learningGoals: [
          "Identify circular economy opportunities and challenges specific to your sector's value chain, such as textiles, plastics, or electronics",
          'Understand practical barriers to recycling and how to address them',
          'Learn the basics of material traceability for transparency in a circular supply chain'
        ],
        whyTakeCourse: [
          "Unlike generic introductory resources, this tool is purpose-built for you as an SME supplier operating within larger value chains, with content tailored to your specific sector rather than the circular economy in the abstract. Its game-based, interactive format makes it a practical, hands-on complement to more conceptual resources - well suited if you\'re ready to apply circular thinking directly to your own sector and supply-chain role."
        ]
      }
    ]
  }
};

/* 5. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумок фази', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    {
      en: 'Use this checklist to confirm that you have a basic understanding of the key circular economy principles.',
      uk: 'Скористайтеся цим чеклістом, щоб переконатися, що ви маєте базове розуміння ключових принципів циркулярної економіки.',
      ro: 'Folosește această listă de verificare pentru a confirma că ai o înțelegere de bază a principiilor-cheie ale economiei circulare.',
      hy: 'Օգտագործեք այս ստուգաթերթը՝ համոզվելու համար, որ ունեք շրջանաձեւ տնտեսության հիմնական սկզբունքների բազային պատկերացում։'
    },
    {
      en: 'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.',
      uk: 'Щоб перейти до наступної фази, позначте всі пункти й натисніть кнопку, що з’явиться після чекліста, або поверніться на головну сторінку, щоб знайти іншу відповідну фазу, секторний інструмент чи каталог інструментів.',
      ro: 'Pentru a continua la faza următoare, bifează toate căsuțele și apasă butonul care apare după listă sau revino la pagina principală pentru a găsi faza potrivită, instrumentele sectoriale ori catalogul de instrumente.',
      hy: 'Հաջորդ փուլին անցնելու համար նշեք բոլոր կետերը եւ սեղմեք ստուգաթերթից հետո հայտնվող կոճակը, կամ վերադարձեք գլխավոր էջ՝ գտնելու համապատասխան փուլը, ոլորտային գործիքը կամ գործիքների էջը։'
    }
  ],
  checklist: [
    { en: 'You understand that products and materials should be kept in use for as long as possible', uk: 'Ви розумієте, що продукти й матеріали слід зберігати у використанні якомога довше', ro: 'Înțelegi că produsele și materialele trebuie menținute în uz cât mai mult timp posibil', hy: 'Դուք հասկանում եք, որ ապրանքներն ու նյութերը պետք է հնարավորինս երկար մնան օգտագործման մեջ' },
    { en: 'You understand that raw materials are finite', uk: 'Ви розумієте, що сировина є обмеженою', ro: 'Înțelegi că materiile prime sunt finite', hy: 'Դուք հասկանում եք, որ հումքային ռեսուրսները սահմանափակ են' },
    { en: 'You understand that circularity means regenerating natural systems, not just reducing harm', uk: 'Ви розумієте, що циркулярність означає відновлення природних систем, а не лише зменшення шкоди', ro: 'Înțelegi că circularitatea înseamnă regenerarea sistemelor naturale, nu doar reducerea daunelor', hy: 'Դուք հասկանում եք, որ շրջանաձեւությունը նշանակում է բնական համակարգերի վերականգնում, ոչ միայն վնասի նվազեցում' },
    { en: 'You understand that some strategies retain more value than others', uk: 'Ви розумієте, що деякі стратегії зберігають більше цінності, ніж інші', ro: 'Înțelegi că unele strategii păstrează mai multă valoare decât altele', hy: 'Դուք հասկանում եք, որ որոշ ռազմավարություններ ավելի շատ արժեք են պահպանում, քան մյուսները' },
    { en: 'You understand that circularity is a systems-wide shift, not just recycling', uk: 'Ви розумієте, що циркулярність є системною зміною, а не лише переробкою', ro: 'Înțelegi că circularitatea este o schimbare la nivel de sistem, nu doar reciclare', hy: 'Դուք հասկանում եք, որ շրջանաձեւությունը համակարգային փոփոխություն է, ոչ միայն վերամշակում' },
    { en: 'You understand what the Circular Economy is and why it matters for your business', uk: 'Ви розумієте, що таке циркулярна економіка і чому вона важлива для вашого бізнесу', ro: 'Înțelegi ce este economia circulară și de ce contează pentru afacerea ta', hy: 'Դուք հասկանում եք, թե ինչ է շրջանաձեւ տնտեսությունը եւ ինչու է այն կարեւոր ձեր բիզնեսի համար' }
  ]
};

export const learn = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [LearningresourcesSection],
  phaseSummary
});
