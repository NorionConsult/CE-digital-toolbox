import { defineJourneyPhasePage } from '../../technical/journey-phase-page-utils.js';

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
        shortDescription: {
          en: 'A short curated playlist of whiteboard-style explainer videos from the Ellen MacArthur Foundation, walking through the core idea of the circular economy and why it matters for business.',
          uk: 'Коротка добірка пояснювальних відео у стилі whiteboard від Ellen MacArthur Foundation, що знайомить з основною ідеєю циркулярної економіки та її значенням для бізнесу.',
          ro: 'O scurtă selecție de videoclipuri explicative de tip whiteboard de la Ellen MacArthur Foundation, care prezintă ideea de bază a economiei circulare și de ce contează pentru afaceri.',
          hy: 'Ellen MacArthur Foundation-ի կարճ ընտրված տեսաշար՝ whiteboard ոճի բացատրական տեսանյութերով, որը ներկայացնում է շրջանաձեւ տնտեսության հիմնական գաղափարը եւ դրա կարեւորությունը բիզնեսի համար։'
        },
        language: 'English',
        provider: 'Ellen MacArthur Foundation',
        url: 'https://www.ellenmacarthurfoundation.org/playlist-circular-economy-explained',
        buttonLabel: { en: 'Open resource', uk: 'Відкрити ресурс', ro: 'Deschide resursa', hy: 'Բացել ռեսուրսը' },
        aboutCourse: [
          {
            en: 'A free, bite-sized video collection that introduces the circular economy concept including the well-known explainer narrated by Dame Ellen MacArthur herself, which uses her solo round-the-world sailing experience to illustrate the difference between a linear "take-make-waste" model and a circular one.',
            uk: 'Безкоштовна коротка відеодобірка, що знайомить з концепцією циркулярної економіки, зокрема з відомим поясненням від самої Dame Ellen MacArthur, яка використовує свій досвід одиночної навколосвітньої подорожі під вітрилами, щоб показати різницю між лінійною моделлю "take-make-waste" і циркулярною моделлю.',
            ro: 'O colecție gratuită de videoclipuri scurte care introduce conceptul de economie circulară, inclusiv cunoscutul material explicativ narat chiar de Dame Ellen MacArthur, care folosește experiența sa de navigație solo în jurul lumii pentru a ilustra diferența dintre modelul liniar "take-make-waste" și unul circular.',
            hy: 'Անվճար, կարճ տեսանյութերի հավաքածու, որը ներկայացնում է շրջանաձեւ տնտեսության գաղափարը, ներառյալ հայտնի բացատրական տեսանյութը՝ Dame Ellen MacArthur-ի ձայնավորմամբ, որտեղ նա իր շուրջերկրյա միայնակ նավարկության փորձով ցույց է տալիս գծային "take-make-waste" մոդելի եւ շրջանաձեւ մոդելի տարբերությունը։'
          }
        ],
        learningGoals: [
          { en: 'Understand the basic difference between a linear and a circular economy', uk: 'Зрозуміти базову різницю між лінійною та циркулярною економікою', ro: 'Înțelege diferența de bază dintre economia liniară și cea circulară', hy: 'Հասկանալ գծային եւ շրջանաձեւ տնտեսության հիմնական տարբերությունը' },
          { en: 'Understand why finite resources make the current "take-make-waste" model unsustainable', uk: 'Зрозуміти, чому обмежені ресурси роблять нинішню модель "take-make-waste" несталою', ro: 'Înțelege de ce resursele finite fac actualul model "take-make-waste" nesustenabil', hy: 'Հասկանալ, թե ինչու են սահմանափակ ռեսուրսները ներկայիս "take-make-waste" մոդելը դարձնում անկայուն' },
          { en: 'See real-world examples of value retention, such as remanufacturing and cascading material use, in everyday terms', uk: 'Побачити практичні приклади збереження цінності, такі як ремануфактура та каскадне використання матеріалів, простими словами', ro: 'Vezi exemple reale de păstrare a valorii, precum remanufacturarea și utilizarea în cascadă a materialelor, explicate simplu', hy: 'Տեսնել արժեքի պահպանման իրական օրինակներ, օրինակ՝ վերարտադրություն եւ նյութերի կասկադային օգտագործում, պարզ լեզվով' }
        ],
        whyTakeCourse: [
          {
            en: "At only a few minutes per video, this is a fast way to build a non-technical understanding of the circular economy before moving into more detailed toolbox content. It's an ideal starting point for staff who have never encountered the concept before and need a plain-language explanation.",
            uk: 'Оскільки кожне відео триває лише кілька хвилин, це швидкий спосіб сформувати нетехнічне розуміння циркулярної економіки перед переходом до детальнішого контенту toolbox. Це добра відправна точка для працівників, які раніше не стикалися з цією концепцією і потребують простого пояснення.',
            ro: 'Cu videoclipuri de doar câteva minute, aceasta este o modalitate rapidă de a construi o înțelegere non-tehnică a economiei circulare înainte de a trece la conținut mai detaliat din toolbox. Este un punct de pornire ideal pentru personalul care nu a întâlnit conceptul până acum și are nevoie de o explicație clară.',
            hy: 'Քանի որ յուրաքանչյուր տեսանյութ ընդամենը մի քանի րոպե է, սա արագ միջոց է շրջանաձեւ տնտեսության ոչ տեխնիկական ըմբռնում ձեւավորելու համար՝ նախքան toolbox-ի ավելի մանրամասն բովանդակությանը անցնելը։ Սա լավ մեկնարկային կետ է այն աշխատակիցների համար, ովքեր նախկինում չեն հանդիպել այս գաղափարին եւ կարիք ունեն պարզ բացատրության։'
          }
        ]
      },
      {
        courseTitle: 'Circular Economy in Industry',
        shortDescription: {
          en: 'A ten-part e-learning course covering circular economy principles and their application across industrial value chains, developed for green-transition skills building.',
          uk: 'Електронний курс із десяти частин про принципи циркулярної економіки та їх застосування в промислових ланцюгах цінності, розроблений для розвитку навичок зеленого переходу.',
          ro: 'Un curs e-learning în zece părți despre principiile economiei circulare și aplicarea lor în lanțurile valorice industriale, dezvoltat pentru formarea competențelor de tranziție verde.',
          hy: 'Տասը մասից բաղկացած էլեկտրոնային ուսուցման դասընթաց շրջանաձեւ տնտեսության սկզբունքների եւ դրանց կիրառման մասին արդյունաբերական արժեքի շղթաներում՝ մշակված կանաչ անցման հմտություններ զարգացնելու համար։'
        },
        language: 'English',
        provider: 'United Nations Industrial Development Organisation (UNIDO)',
        url: 'https://www.unido.org/learning-resources/circular-economy-industry',
        buttonLabel: { en: 'Open resource', uk: 'Відкрити ресурс', ro: 'Deschide resursa', hy: 'Բացել ռեսուրսը' },
        aboutCourse: [
          {
            en: 'A structured, modular e-learning course that progresses from the economic foundations of the circular economy through to applied industrial topics: circular design, value retention strategies such as remanufacturing, reconditioning and refurbishing, recycling processes, circularity in use and consumption, the circular bioeconomy, trade and environment linkages, and the role of renewable energy in circular, low-carbon industrial systems.',
            uk: 'Структурований модульний електронний курс, що переходить від економічних основ циркулярної економіки до прикладних промислових тем: циркулярний дизайн, стратегії збереження цінності, такі як ремануфактура, відновлення та рефабрикація, процеси переробки, циркулярність у використанні та споживанні, циркулярна біоекономіка, зв’язки між торгівлею й довкіллям та роль відновлюваної енергії в циркулярних низьковуглецевих промислових системах.',
            ro: 'Un curs e-learning structurat și modular care pornește de la fundamentele economice ale economiei circulare și ajunge la teme industriale aplicate: design circular, strategii de păstrare a valorii precum remanufacturarea, recondiționarea și refurbishing-ul, procese de reciclare, circularitate în utilizare și consum, bioeconomia circulară, legături între comerț și mediu și rolul energiei regenerabile în sistemele industriale circulare cu emisii reduse de carbon.',
            hy: 'Կառուցվածքային, մոդուլային էլեկտրոնային դասընթաց, որը սկսվում է շրջանաձեւ տնտեսության տնտեսական հիմքերից եւ անցնում կիրառական արդյունաբերական թեմաների՝ շրջանաձեւ դիզայն, արժեքի պահպանման ռազմավարություններ, ինչպիսիք են վերարտադրությունը, վերականգնումը եւ թարմացումը, վերամշակման գործընթացներ, շրջանաձեւություն օգտագործման եւ սպառման մեջ, շրջանաձեւ կենսատնտեսություն, առեւտրի եւ շրջակա միջավայրի կապեր, ինչպես նաեւ վերականգնվող էներգիայի դերը շրջանաձեւ եւ ցածր ածխածնային արդյունաբերական համակարգերում։'
          }
        ],
        learningGoals: [
          { en: 'Build a solid conceptual and economic foundation in circular economy principles', uk: 'Сформувати міцну концептуальну та економічну основу принципів циркулярної економіки', ro: 'Construiește o bază conceptuală și economică solidă în principiile economiei circulare', hy: 'Ձեւավորել շրջանաձեւ տնտեսության սկզբունքների ամուր հայեցակարգային եւ տնտեսական հիմք' },
          { en: 'Learn how circular design and value-retention strategies, such as remanufacturing, refurbishing and recycling, apply across industrial value chains', uk: 'Дізнатися, як циркулярний дизайн і стратегії збереження цінності, такі як ремануфактура, відновлення та переробка, застосовуються в промислових ланцюгах цінності', ro: 'Învață cum se aplică designul circular și strategiile de păstrare a valorii, precum remanufacturarea, recondiționarea și reciclarea, în lanțurile valorice industriale', hy: 'Սովորել, թե ինչպես են շրջանաձեւ դիզայնը եւ արժեքի պահպանման ռազմավարությունները, օրինակ՝ վերարտադրությունը, վերականգնումը եւ վերամշակումը, կիրառվում արդյունաբերական արժեքի շղթաներում' },
          { en: 'Understand how circularity connects to broader systems such as the bioeconomy, trade, and renewable energy', uk: 'Зрозуміти, як циркулярність пов’язана з ширшими системами, такими як біоекономіка, торгівля та відновлювана енергія', ro: 'Înțelege cum se conectează circularitatea la sisteme mai largi precum bioeconomia, comerțul și energia regenerabilă', hy: 'Հասկանալ, թե ինչպես է շրջանաձեւությունը կապվում ավելի լայն համակարգերի հետ, ինչպիսիք են կենսատնտեսությունը, առեւտուրը եւ վերականգնվող էներգիան' }
        ],
        whyTakeCourse: [
          {
            en: 'This course goes well beyond a basic introduction, offering a comprehensive, progressive curriculum that is directly relevant to industrial and manufacturing small-medium enterprises (SMEs). Because it is modular, learners can work through it section by section and revisit specific topics, such as remanufacturing or circular design, as they apply concepts to their own business. It is a strong next step once the basic vocabulary from an introductory resource has been established.',
            uk: 'Цей курс виходить далеко за межі базового вступу й пропонує комплексну послідовну програму, безпосередньо релевантну для промислових і виробничих МСП. Завдяки модульній структурі учасники можуть проходити його по розділах і повертатися до конкретних тем, таких як ремануфактура або циркулярний дизайн, коли застосовують концепції у власному бізнесі. Це сильний наступний крок після засвоєння базової термінології з вступного ресурсу.',
            ro: 'Acest curs depășește cu mult o introducere de bază, oferind un curriculum cuprinzător și progresiv, direct relevant pentru IMM-urile industriale și de producție. Pentru că este modular, cursanții îl pot parcurge pe secțiuni și pot reveni la teme specifice, precum remanufacturarea sau designul circular, pe măsură ce aplică conceptele în propria afacere. Este un pas următor solid după stabilirea vocabularului de bază dintr-o resursă introductivă.',
            hy: 'Այս դասընթացը շատ ավելին է, քան բազային ներածություն՝ առաջարկելով համապարփակ եւ աստիճանական ծրագիր, որը անմիջապես համապատասխան է արդյունաբերական եւ արտադրական ՓՄՁ-ներին։ Քանի որ այն մոդուլային է, սովորողները կարող են այն անցնել բաժին առ բաժին եւ վերադառնալ կոնկրետ թեմաների, օրինակ՝ վերարտադրություն կամ շրջանաձեւ դիզայն, երբ հասկացությունները կիրառում են իրենց բիզնեսում։ Սա լավ հաջորդ քայլ է, երբ ներածական ռեսուրսից արդեն ձեւավորվել է հիմնական բառապաշարը։'
          }
        ]
      },
      {
        courseTitle: 'SWITCH circular economy journey',
        shortDescription: {
          en: 'A circular economy programme which aims to support micro-enterprises and small-medium enterprises (SMEs) with specific tracks that walk businesses through circular economy practices via games and journey phases.',
          uk: 'Програма з циркулярної економіки, що підтримує мікро-, малі та середні підприємства через спеціальні треки, які проводять бізнес через практики циркулярної економіки за допомогою ігор і етапів шляху.',
          ro: 'Un program de economie circulară care sprijină microîntreprinderile și întreprinderile mici și mijlocii prin trasee specifice ce ghidează afacerile prin practici circulare, folosind jocuri și etape de parcurs.',
          hy: 'Շրջանաձեւ տնտեսության ծրագիր, որի նպատակն է աջակցել միկրո, փոքր եւ միջին ձեռնարկություններին հատուկ ուղիների միջոցով, որոնք խաղերի եւ ճանապարհի փուլերի օգնությամբ բիզնեսներին անցկացնում են շրջանաձեւ տնտեսության գործելակերպերով։'
        },
        language: 'English',
        provider: 'SWITCH to Circular Economy Value Chains',
        url: 'https://switch.circle-economy.com/',
        buttonLabel: { en: 'Open resource', uk: 'Відкрити ресурс', ro: 'Deschide resursa', hy: 'Բացել ռեսուրսը' },
        aboutCourse: [
          {
            en: 'An interactive, gamified online platform built specifically for Micro, small and medium-sized enterprise (MSME) suppliers in developing countries who are part of global value chains. Users pick a sector track, such as Textiles, Plastics & Packaging, or Electronics & Information and Communication Technology (ICT), then work through a series of interactive games and journey phases. Each phase presents sector-relevant circular economy content followed by interactive questions, covering topics like recycling barriers and traceability. A free login is required, which enables personalised progress tracking across tracks.',
            uk: 'Інтерактивна гейміфікована онлайн-платформа, створена спеціально для постачальників-мікро-, малих і середніх підприємств у країнах, що розвиваються, які є частиною глобальних ланцюгів цінності. Користувачі обирають секторний трек, наприклад Textiles, Plastics & Packaging або Electronics & Information and Communication Technology (ICT), а потім проходять серію інтерактивних ігор і фаз. Кожна фаза містить секторно релевантний контент про циркулярну економіку та інтерактивні запитання на теми, як-от бар’єри переробки та простежуваність. Потрібна безкоштовна реєстрація, яка дає змогу персонально відстежувати прогрес у різних треках.',
            ro: 'O platformă online interactivă și gamificată, creată special pentru furnizorii microîntreprinderi și IMM-uri din țări în curs de dezvoltare care fac parte din lanțuri valorice globale. Utilizatorii aleg un traseu sectorial, precum Textiles, Plastics & Packaging sau Electronics & Information and Communication Technology (ICT), apoi parcurg o serie de jocuri interactive și etape. Fiecare etapă prezintă conținut de economie circulară relevant pentru sector, urmat de întrebări interactive, pe teme precum barierele de reciclare și trasabilitatea. Este necesară o autentificare gratuită, care permite urmărirea personalizată a progresului pe trasee.',
            hy: 'Ինտերակտիվ, խաղայնացված առցանց հարթակ, որը հատուկ ստեղծված է զարգացող երկրներում համաշխարհային արժեքային շղթաների մաս կազմող միկրո, փոքր եւ միջին ձեռնարկություն մատակարարների համար։ Օգտատերերը ընտրում են ոլորտային ուղի, օրինակ՝ Textiles, Plastics & Packaging կամ Electronics & Information and Communication Technology (ICT), ապա անցնում են ինտերակտիվ խաղերի եւ փուլերի շարք։ Յուրաքանչյուր փուլ ներկայացնում է ոլորտին համապատասխան շրջանաձեւ տնտեսության բովանդակություն, որին հաջորդում են ինտերակտիվ հարցեր՝ վերամշակման խոչընդոտների եւ հետագծելիության նման թեմաներով։ Պահանջվում է անվճար մուտք, որը թույլ է տալիս անհատականացված կերպով հետեւել առաջընթացին տարբեր ուղիներում։'
          }
        ],
        learningGoals: [
          { en: "Identify circular economy opportunities and challenges specific to your sector's value chain, such as textiles, plastics, or electronics", uk: 'Визначити можливості та виклики циркулярної економіки, специфічні для ланцюга цінності вашого сектору, наприклад текстилю, пластику чи електроніки', ro: 'Identifică oportunități și provocări de economie circulară specifice lanțului valoric al sectorului tău, precum textile, plastic sau electronice', hy: 'Բացահայտել ձեր ոլորտի արժեքի շղթային հատուկ շրջանաձեւ տնտեսության հնարավորություններն ու մարտահրավերները, օրինակ՝ տեքստիլ, պլաստիկ կամ էլեկտրոնիկա' },
          { en: 'Understand practical barriers to recycling and how to address them', uk: 'Зрозуміти практичні бар’єри переробки та способи їх подолання', ro: 'Înțelege barierele practice în reciclare și cum pot fi abordate', hy: 'Հասկանալ վերամշակման գործնական խոչընդոտները եւ ինչպես լուծել դրանք' },
          { en: 'Learn the basics of material traceability for transparency in a circular supply chain', uk: 'Вивчити основи простежуваності матеріалів для прозорості в циркулярному ланцюгу постачання', ro: 'Învață elementele de bază ale trasabilității materialelor pentru transparență într-un lanț de aprovizionare circular', hy: 'Սովորել նյութերի հետագծելիության հիմունքները շրջանաձեւ մատակարարման շղթայում թափանցիկության համար' }
        ],
        whyTakeCourse: [
          {
            en: "Unlike generic introductory resources, this tool is purpose-built for you as an SME supplier operating within larger value chains, with content tailored to your specific sector rather than the circular economy in the abstract. Its game-based, interactive format makes it a practical, hands-on complement to more conceptual resources - well suited if you\'re ready to apply circular thinking directly to your own sector and supply-chain role.",
            uk: 'На відміну від загальних вступних ресурсів, цей інструмент створений спеціально для вас як МСП-постачальника, що працює у більших ланцюгах цінності, з контентом, адаптованим до вашого сектору, а не до циркулярної економіки загалом. Його ігровий інтерактивний формат робить його практичним доповненням до більш концептуальних ресурсів і добре підходить, якщо ви готові застосувати циркулярне мислення безпосередньо до свого сектору та ролі в ланцюгу постачання.',
            ro: 'Spre deosebire de resursele introductive generale, acest instrument este creat special pentru tine ca furnizor IMM care operează în lanțuri valorice mai mari, cu conținut adaptat sectorului tău, nu economiei circulare în abstract. Formatul său interactiv, bazat pe jocuri, îl face o completare practică și aplicată a resurselor mai conceptuale, potrivită dacă ești gata să aplici gândirea circulară direct în sectorul și rolul tău din lanțul de aprovizionare.',
            hy: 'Ընդհանուր ներածական ռեսուրսներից տարբեր՝ այս գործիքը հատուկ ստեղծված է ձեզ համար՝ որպես ավելի մեծ արժեքային շղթաներում գործող ՓՄՁ մատակարարի, եւ բովանդակությունը հարմարեցված է ձեր ոլորտին, ոչ թե շրջանաձեւ տնտեսության վերացական գաղափարին։ Դրա խաղային եւ ինտերակտիվ ձեւաչափը այն դարձնում է գործնական լրացում ավելի հայեցակարգային ռեսուրսներին եւ լավ է համապատասխանում, եթե պատրաստ եք շրջանաձեւ մտածողությունը ուղղակիորեն կիրառել ձեր ոլորտում եւ մատակարարման շղթայում ունեցած դերում։'
          }
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
