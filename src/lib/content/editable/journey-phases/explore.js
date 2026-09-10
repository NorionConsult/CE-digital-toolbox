import { defineJourneyPhasePage } from '../../technical/journey-phase-page-utils.js';

/*
  PHASE 3: EXPLORE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '03',
  slug: 'explore',
  shortName: { en: 'Phase 3', uk: 'Фаза 3', ro: 'Faza 3', hy: 'Փուլ 3' },
  title: { en: 'Explore', uk: 'Дослідження', ro: 'Explorează', hy: 'Ուսումնասիրել' },
  colourClass: 'phase-card-yellow',
  description: {
    en: 'Offers tools to support innovation and design processes, review practices, and identify relevant strategies to address assessed hotspots.',
    uk: 'Пропонує інструменти для підтримки інновацій і процесів дизайну, перегляду практик та визначення релевантних стратегій для роботи з виявленими гарячими точками.',
    ro: 'Oferă instrumente pentru sprijinirea inovării și proceselor de design, revizuirea practicilor și identificarea strategiilor relevante pentru punctele critice evaluate.',
    hy: 'Առաջարկում է գործիքներ նորարարության եւ դիզայնի գործընթացներին աջակցելու, գործելակերպերը վերանայելու եւ գնահատված խնդրահարույց կետերը լուծելու համապատասխան ռազմավարություններ գտնելու համար։'
  }
};

const hero = {
  intro: {
    en: 'This phase supports the identification and comparison of possible circular economy choices. It can be used to explore strategies, generate ideas and move from assessment to practical opportunities.',
    uk: 'Ця фаза підтримує визначення та порівняння можливих варіантів циркулярної економіки. Її можна використовувати для дослідження стратегій, генерування ідей і переходу від оцінювання до практичних можливостей.',
    ro: 'Această fază sprijină identificarea și compararea opțiunilor posibile de economie circulară. Poate fi folosită pentru a explora strategii, a genera idei și a trece de la evaluare la oportunități practice.',
    hy: 'Այս փուլը աջակցում է շրջանաձեւ տնտեսության հնարավոր տարբերակների բացահայտմանը եւ համեմատությանը։ Այն կարելի է օգտագործել ռազմավարություններ ուսումնասիրելու, գաղափարներ ստեղծելու եւ գնահատումից գործնական հնարավորությունների անցնելու համար։'
  },
  icon: '/icons/phase-icons/icon-explore.png',
  iconAlt: { en: 'Explore phase icon', uk: 'Іконка фази Дослідження', ro: 'Pictograma fazei Explorează', hy: 'Ուսումնասիրել փուլի պատկերակ' }
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'identify-options', label: { en: 'Identify options', uk: 'Визначити варіанти', ro: 'Identifică opțiuni', hy: 'Գտնել տարբերակներ' } },
  { sectionId: 'shape-value-model', label: { en: 'Shape value model', uk: 'Сформувати модель цінності', ro: 'Modelează valoarea', hy: 'Ձեւավորել արժեքի մոդելը' } },
  { sectionId: 'develop-solutions', label: { en: 'Develop solutions', uk: 'Розробити рішення', ro: 'Dezvoltă soluții', hy: 'Մշակել լուծումներ' } }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: { en: 'What option is applicable for you?', uk: 'Який варіант підходить вам?', ro: 'Ce opțiune ți se potrivește?', hy: 'Ո՞ր տարբերակն է ձեզ համապատասխանում։' },
  paragraphs: [
    { en: 'The Explore phase bridges assessment with decision-making. Based on what you have learned about your business, you will consider which circular strategies are out there and how to redesign your products, services or value chains for the circular economy.', uk: 'Фаза дослідження поєднує оцінювання з ухваленням рішень. На основі того, що ви дізналися про свій бізнес, ви розглянете наявні циркулярні стратегії та способи переосмислення продуктів, послуг або ланцюгів створення цінності для циркулярної економіки.', ro: 'Faza Explorează face legătura dintre evaluare și luarea deciziilor. Pe baza a ceea ce ai aflat despre afacerea ta, vei analiza ce strategii circulare există și cum îți poți redesena produsele, serviciile sau lanțurile valorice pentru economia circulară.', hy: 'Ուսումնասիրել փուլը կապում է գնահատումը որոշումների կայացման հետ։ Ձեր բիզնեսի մասին սովորածի հիման վրա դուք կդիտարկեք առկա շրջանաձեւ ռազմավարությունները եւ ինչպես վերաձեւավորել արտադրանքը, ծառայությունները կամ արժեքի շղթաները շրջանաձեւ տնտեսության համար։' }
  ],
  cards: [
    {
      sectionId: 'identify-options',
      number: '1',
      title: { en: 'Identify Your Options', uk: 'Визначте свої варіанти', ro: 'Identifică opțiunile', hy: 'Գտեք ձեր տարբերակները' },
      description: {
        en: 'Use structured tools to map which strategies are feasible and relevant for your specific business, sector and supply chain.',
        uk: 'Використовуйте структуровані інструменти, щоб визначити, які стратегії є здійсненними й релевантними для вашого бізнесу, сектору та ланцюга постачання.',
        ro: 'Folosește instrumente structurate pentru a cartografia strategiile fezabile și relevante pentru afacerea, sectorul și lanțul tău de aprovizionare.',
        hy: 'Օգտագործեք կառուցվածքային գործիքներ՝ պարզելու համար, թե որ ռազմավարություններն են իրագործելի եւ համապատասխան ձեր բիզնեսի, ոլորտի եւ մատակարարման շղթայի համար։'
      },
      keyOutputs: [
        { en: 'A shared visual map of relevant circular strategies', uk: 'Спільна візуальна карта релевантних циркулярних стратегій', ro: 'O hartă vizuală comună a strategiilor circulare relevante', hy: 'Համապատասխան շրջանաձեւ ռազմավարությունների ընդհանուր տեսողական քարտեզ' },
        { en: 'A clear picture of current circular activities', uk: 'Чітке уявлення про поточні циркулярні дії', ro: 'O imagine clară a activităților circulare actuale', hy: 'Ընթացիկ շրջանաձեւ գործողությունների հստակ պատկեր' },
        { en: 'A long-list of feasible options for your business', uk: 'Довгий список здійсненних варіантів для вашого бізнесу', ro: 'O listă extinsă de opțiuni fezabile pentru afacerea ta', hy: 'Ձեր բիզնեսի համար իրագործելի տարբերակների երկար ցուցակ' }
      ]
    },
    {
      sectionId: 'shape-value-model',
      number: '2',
      title: { en: 'Shape the Value Model', uk: 'Сформуйте модель цінності', ro: 'Modelează valoarea', hy: 'Ձեւավորեք արժեքի մոդելը' },
      description: {
        en: 'Explore how your circular solution could deliver value for customers and your business.',
        uk: 'Дослідіть, як ваше циркулярне рішення може створювати цінність для клієнтів і бізнесу.',
        ro: 'Explorează cum soluția ta circulară poate crea valoare pentru clienți și pentru afacerea ta.',
        hy: 'Ուսումնասիրեք, թե ինչպես կարող է ձեր շրջանաձեւ լուծումը արժեք ստեղծել հաճախորդների եւ ձեր բիզնեսի համար։'
      },
      keyOutputs: [
        { en: 'A clearer view of possible circular value models', uk: 'Чіткіше бачення можливих циркулярних моделей цінності', ro: 'O perspectivă mai clară asupra posibilelor modele circulare de valoare', hy: 'Հնարավոր շրջանաձեւ արժեքի մոդելների ավելի հստակ պատկեր' },
        { en: 'A stronger concept for customer and business value creation', uk: 'Сильніша концепція створення цінності для клієнтів і бізнесу', ro: 'Un concept mai solid pentru crearea de valoare pentru clienți și afacere', hy: 'Հաճախորդների եւ բիզնեսի համար արժեք ստեղծելու ավելի ուժեղ հայեցակարգ' }
      ]
    },
    {
      sectionId: 'develop-solutions',
      number: '3',
      title: { en: 'Develop Solutions', uk: 'Розробіть рішення', ro: 'Dezvoltă soluții', hy: 'Մշակեք լուծումներ' },
      description: {
        en: 'Turn promising circular strategies into clearer solution concepts that can be discussed, improved and prepared for evaluation.',
        uk: 'Перетворіть перспективні циркулярні стратегії на чіткіші концепції рішень, які можна обговорити, покращити й підготувати до оцінювання.',
        ro: 'Transformă strategiile circulare promițătoare în concepte de soluții mai clare, care pot fi discutate, îmbunătățite și pregătite pentru evaluare.',
        hy: 'Խոստումնալից շրջանաձեւ ռազմավարությունները վերածեք ավելի հստակ լուծումների գաղափարների, որոնք կարելի է քննարկել, բարելավել եւ պատրաստել գնահատման համար։'
      },
      keyOutputs: [
        { en: 'Bundled ideas and stronger solution concepts', uk: 'Згруповані ідеї та сильніші концепції рішень', ro: 'Idei grupate și concepte de soluții mai solide', hy: 'Միավորված գաղափարներ եւ ավելի ուժեղ լուծումների հայեցակարգեր' },
        { en: 'A clearer view of which solutions fit your business', uk: 'Чіткіше бачення того, які рішення підходять вашому бізнесу', ro: 'O perspectivă mai clară asupra soluțiilor care se potrivesc afacerii tale', hy: 'Ավելի հստակ պատկեր, թե որ լուծումներն են համապատասխանում ձեր բիզնեսին' },
        { en: 'Initial concepts ready to evaluate in the next phase', uk: 'Початкові концепції, готові до оцінювання в наступній фазі', ro: 'Concepte inițiale pregătite pentru evaluare în faza următoare', hy: 'Նախնական հայեցակարգեր, որոնք պատրաստ են գնահատման հաջորդ փուլում' }
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const identifyOptionsSection = {
  id: 'identify-options',
  title: { en: 'Identify Your Options', uk: 'Визначте свої варіанти', ro: 'Identifică opțiunile', hy: 'Գտեք ձեր տարբերակները' },
  resourceTag: 'explore:identify-options',
  paragraphs: [
    {
      en: 'This section helps you translate broad circular economy strategies into options that relate directly to your products, operations and value chain.',
      uk: 'Цей розділ допомагає перетворити широкі стратегії циркулярної економіки на варіанти, що безпосередньо пов’язані з вашими продуктами, операціями та ланцюгом цінності.',
      ro: 'Această secțiune te ajută să transformi strategiile generale de economie circulară în opțiuni legate direct de produsele, operațiunile și lanțul valoric al afacerii tale.',
      hy: 'Այս բաժինը օգնում է լայն շրջանաձեւ տնտեսության ռազմավարությունները վերածել տարբերակների, որոնք անմիջապես կապված են ձեր արտադրանքի, գործառնությունների եւ արժեքի շղթայի հետ։'
    }
  ],
  /*
    CIRCULAR ECONOMY STRATEGIES IMAGE:
    The description text appears below the subtitle and before the image.
    Replace src to change the visual, or edit the text, alt text and caption below.
  */
  inlineImage: {
    afterParagraph: 1,
    title: { en: 'Circular Economy strategies', uk: 'Стратегії циркулярної економіки', ro: 'Strategii de economie circulară', hy: 'Շրջանաձեւ տնտեսության ռազմավարություններ' },
    description: {
      en: "The image below shows how the 9R strategies form a hierarchy of circular economy interventions, ranked according to how much value they preserve. At the top, R0 Refuse avoids the need for a product or resource altogether. R1 Rethink and R2 Reduce focus on using products and resources more efficiently, while R3-R6 Reuse, Repair, Refurbish and Remanufacture aim to keep products, components and their embedded value in use for as long as possible. || Further down the hierarchy, R7 Repurpose gives products or components a new function, R8 Recycle recovers material value through processing, and R9 Recover, typically through energy recovery, retains only a limited share of the original value. || The key principle is that the further down the hierarchy an intervention sits, the more of the economic, environmental and social value embedded in the product is generally lost. Recycling can therefore be important, but it should not automatically be the starting point for circular innovation.|| The framework can help challenge existing assumptions, identify a wider range of possible strategies and prioritise exploration of higher-value options before moving towards recycling or recovery. With this perspective in mind, you can move on to a practical workshop exercise to explore relevant circular strategies, or use other tools in the Explore phase to identify and develop possible options.",
      uk: 'Зображення нижче показує, як стратегії 9R утворюють ієрархію циркулярних втручань, упорядковану за тим, скільки цінності вони зберігають. На верхньому рівні R0 Refuse допомагає взагалі уникнути потреби у продукті чи ресурсі. R1 Rethink і R2 Reduce зосереджуються на ефективнішому використанні продуктів і ресурсів, тоді як R3-R6 Reuse, Repair, Refurbish і Remanufacture спрямовані на те, щоб продукти, компоненти та їхня вбудована цінність залишалися у використанні якомога довше. || Нижче в ієрархії R7 Repurpose надає продуктам або компонентам нову функцію, R8 Recycle відновлює матеріальну цінність через переробку, а R9 Recover, зазвичай через енергетичне відновлення, зберігає лише обмежену частину початкової цінності. || Ключовий принцип полягає в тому, що чим нижче втручання розташоване в ієрархії, тим більше економічної, екологічної та соціальної цінності продукту зазвичай втрачається. Переробка може бути важливою, але вона не має автоматично бути стартовою точкою циркулярних інновацій.|| Ця рамка допомагає ставити під сумнів наявні припущення, визначати ширший спектр можливих стратегій і пріоритезувати варіанти з вищим збереженням цінності перед переходом до переробки або відновлення. З цією перспективою ви можете перейти до практичного воркшопу з вивчення релевантних циркулярних стратегій або використати інші інструменти фази Explore для визначення й розвитку можливих варіантів.',
      ro: 'Imaginea de mai jos arată cum strategiile 9R formează o ierarhie a intervențiilor de economie circulară, ordonate după câtă valoare păstrează. În partea de sus, R0 Refuse evită complet nevoia unui produs sau resursă. R1 Rethink și R2 Reduce se concentrează pe utilizarea mai eficientă a produselor și resurselor, iar R3-R6 Reuse, Repair, Refurbish și Remanufacture urmăresc să mențină produsele, componentele și valoarea lor în uz cât mai mult timp posibil. || Mai jos în ierarhie, R7 Repurpose oferă produselor sau componentelor o funcție nouă, R8 Recycle recuperează valoarea materială prin procesare, iar R9 Recover, de obicei prin recuperare energetică, păstrează doar o parte limitată din valoarea inițială. || Principiul-cheie este că, pe măsură ce o intervenție se află mai jos în ierarhie, se pierde de regulă mai mult din valoarea economică, de mediu și socială încorporată în produs. Reciclarea poate fi importantă, dar nu ar trebui să fie automat punctul de plecare pentru inovarea circulară.|| Acest cadru poate ajuta la provocarea presupunerilor existente, identificarea unei game mai largi de strategii și prioritizarea opțiunilor cu valoare mai mare înainte de a trece la reciclare sau recuperare. Cu această perspectivă, poți continua cu un atelier practic pentru explorarea strategiilor circulare relevante sau poți folosi alte instrumente din faza Explore pentru a identifica și dezvolta opțiuni posibile.',
      hy: 'Ստորեւ ներկայացված պատկերը ցույց է տալիս, թե ինչպես են 9R ռազմավարությունները կազմում շրջանաձեւ տնտեսության միջամտությունների հիերարխիա՝ դասավորված ըստ պահպանվող արժեքի։ Վերեւում R0 Refuse-ը ամբողջությամբ խուսափում է արտադրանքի կամ ռեսուրսի անհրաժեշտությունից։ R1 Rethink-ը եւ R2 Reduce-ը կենտրոնանում են արտադրանքի եւ ռեսուրսների ավելի արդյունավետ օգտագործման վրա, մինչդեռ R3-R6 Reuse, Repair, Refurbish եւ Remanufacture ռազմավարությունները նպատակ ունեն արտադրանքը, բաղադրիչները եւ դրանց մեջ ներդրված արժեքը հնարավորինս երկար պահել օգտագործման մեջ։ || Հիերարխիայի ավելի ներքեւում R7 Repurpose-ը ապրանքներին կամ բաղադրիչներին տալիս է նոր գործառույթ, R8 Recycle-ը վերամշակման միջոցով վերականգնում է նյութական արժեքը, իսկ R9 Recover-ը, սովորաբար էներգիայի վերականգնման միջոցով, պահպանում է սկզբնական արժեքի միայն սահմանափակ մասը։ || Հիմնական սկզբունքն այն է, որ որքան ավելի ներքեւ է միջամտությունը հիերարխիայում, այնքան ավելի շատ է սովորաբար կորցվում արտադրանքի մեջ ներդրված տնտեսական, բնապահպանական եւ սոցիալական արժեքը։ Վերամշակումը կարող է կարեւոր լինել, բայց այն չպետք է ավտոմատ կերպով լինի շրջանաձեւ նորարարության մեկնարկային կետը։|| Այս շրջանակը կարող է օգնել վերանայել առկա ենթադրությունները, բացահայտել հնարավոր ռազմավարությունների ավելի լայն շրջանակ եւ առաջնահերթություն տալ ավելի բարձր արժեք պահող տարբերակների ուսումնասիրությանը՝ նախքան վերամշակման կամ վերականգնման ուղղությամբ շարժվելը։ Այս տեսանկյունով կարող եք անցնել գործնական աշխատարանի՝ համապատասխան շրջանաձեւ ռազմավարությունները ուսումնասիրելու համար, կամ օգտագործել Explore փուլի այլ գործիքները՝ հնարավոր տարբերակները բացահայտելու եւ զարգացնելու համար։'
    },
    src: '/phase-content/phase-3/UNIDO_Digital Toolbox (EU4GREENRecoveryEast) - 9R diagram.svg',
    alt: { en: 'The 9R circular economy strategies arranged by value preservation', uk: 'Стратегії циркулярної економіки 9R, упорядковані за збереженням цінності', ro: 'Strategiile economiei circulare 9R organizate după păstrarea valorii', hy: '9R շրջանաձեւ տնտեսության ռազմավարությունները՝ դասավորված ըստ արժեքի պահպանման' },
    caption: {
      en: 'The 9R hierarchy of circular economy strategies. Based on: United Nations Economic Commission for Europe, & Organisation for Economic Co-operation and Development. (2024). Conference of European Statisticians guidelines for measuring circular economy, Part A: Conceptual framework, indicators and measurement framework (ECE/CES/STAT/2023/5). United Nations',
      uk: 'Ієрархія стратегій циркулярної економіки 9R. На основі: United Nations Economic Commission for Europe, & Organisation for Economic Co-operation and Development. (2024). Conference of European Statisticians guidelines for measuring circular economy, Part A: Conceptual framework, indicators and measurement framework (ECE/CES/STAT/2023/5). United Nations',
      ro: 'Ierarhia 9R a strategiilor de economie circulară. Pe baza: United Nations Economic Commission for Europe, & Organisation for Economic Co-operation and Development. (2024). Conference of European Statisticians guidelines for measuring circular economy, Part A: Conceptual framework, indicators and measurement framework (ECE/CES/STAT/2023/5). United Nations',
      hy: 'Շրջանաձեւ տնտեսության 9R ռազմավարությունների հիերարխիան։ Հիմնված է՝ United Nations Economic Commission for Europe, & Organisation for Economic Co-operation and Development. (2024). Conference of European Statisticians guidelines for measuring circular economy, Part A: Conceptual framework, indicators and measurement framework (ECE/CES/STAT/2023/5). United Nations'
    },
    maxWidth: '680px',
    zoomable: true
  },
  /*
    Relevant tools are connected in src/lib/content/editable/tools/tool-catalogue.js.
    To show a tool here, add this tag to the tool's placements.phaseSections:
    explore:identify-options
  */
  /*
    CIRCULAR STRATEGIES WORKSHOP
    Edit all Phase 3 wheel workshop wording, timings, lists and the canvas link below.
    The workshop appears immediately after the section paragraphs above.
  */
  circularStrategiesWorkshop: {
    subtitle: { en: 'Explore possible circular strategies', uk: 'Дослідіть можливі циркулярні стратегії', ro: 'Explorează posibile strategii circulare', hy: 'Ուսումնասիրեք հնարավոր շրջանաձեւ ռազմավարությունները' },
    title: {
      en: 'Circular Strategies Wheel Workshop',
      uk: 'Воркшоп Circular Strategies Wheel',
      ro: 'Atelierul Circular Strategies Wheel',
      hy: 'Circular Strategies Wheel աշխատարան'
    },
    icon: 'recycling',
    introduction: {
      en: "The Circular Strategies Wheel gives your team a shared visual overview of circular strategies across the three phases of a product or service's life: start of life, product life and end of life. It turns circularity from an abstract idea into something tangible and actionable, helping your team connect relevant strategies to your business context. By working through it together, you will identify key opportunities, areas of interest and practical barriers, creating a grounded, team-owned starting point for building your circular business model.",
      uk: 'Circular Strategies Wheel дає вашій команді спільний візуальний огляд циркулярних стратегій на трьох етапах життя продукту або послуги: початок життя, використання продукту та кінець життя. Він перетворює циркулярність з абстрактної ідеї на щось відчутне й практичне, допомагаючи пов’язати релевантні стратегії з вашим бізнес-контекстом. Працюючи з ним разом, ви визначите ключові можливості, сфери інтересу та практичні бар’єри і створите обґрунтовану командну відправну точку для побудови циркулярної бізнес-моделі.',
      ro: 'Circular Strategies Wheel oferă echipei tale o imagine vizuală comună asupra strategiilor circulare în cele trei etape ale vieții unui produs sau serviciu: începutul vieții, viața produsului și sfârșitul vieții. Transformă circularitatea dintr-o idee abstractă în ceva concret și acționabil, ajutând echipa să conecteze strategiile relevante la contextul afacerii. Lucrând împreună cu acest instrument, veți identifica oportunități-cheie, zone de interes și bariere practice, creând un punct de pornire fundamentat și asumat de echipă pentru dezvoltarea modelului de afaceri circular.',
      hy: 'Circular Strategies Wheel-ը ձեր թիմին տալիս է շրջանաձեւ ռազմավարությունների ընդհանուր տեսողական պատկեր՝ արտադրանքի կամ ծառայության կյանքի երեք փուլերում՝ կյանքի սկիզբ, արտադրանքի կյանք եւ կյանքի ավարտ։ Այն շրջանաձեւությունը վերածում է վերացական գաղափարից շոշափելի եւ կիրառելի բանի՝ օգնելով թիմին կապել համապատասխան ռազմավարությունները ձեր բիզնես համատեքստի հետ։ Միասին աշխատելով՝ դուք կբացահայտեք հիմնական հնարավորությունները, հետաքրքրության ոլորտները եւ գործնական խոչընդոտները՝ ստեղծելով հիմնավորված, թիմի կողմից ընդունված մեկնարկային կետ շրջանաձեւ բիզնես մոդել կառուցելու համար։'
    },
    outcome: {
      en: 'By the end of the exercise, your team will have a prioritised view of the most relevant circular strategies, a shared understanding of key opportunities and obstacles, and a clear focus area for developing your circular business model.',
      uk: 'Наприкінці вправи ваша команда матиме пріоритезований огляд найрелевантніших циркулярних стратегій, спільне розуміння ключових можливостей і перешкод та чітку фокусну сферу для розвитку циркулярної бізнес-моделі.',
      ro: 'La finalul exercițiului, echipa ta va avea o imagine prioritizată a celor mai relevante strategii circulare, o înțelegere comună a oportunităților și obstacolelor-cheie și o zonă clară de focus pentru dezvoltarea modelului de afaceri circular.',
      hy: 'Վարժության ավարտին ձեր թիմը կունենա առավել համապատասխան շրջանաձեւ ռազմավարությունների առաջնահերթացված պատկեր, հիմնական հնարավորությունների ու խոչընդոտների ընդհանուր ըմբռնում եւ հստակ ուղղություն շրջանաձեւ բիզնես մոդելը զարգացնելու համար։'
    },
    preparation: {
      title: { en: 'Preparation', uk: 'Підготовка', ro: 'Pregătire', hy: 'Նախապատրաստում' },
      time: '5 min',
      text: {
        en: 'Print the Circular Strategies Wheel at A1 size and position it so the whole team can read and work on it at the same time, ideally on a wall at standing height. Make sure every participant has pens and a set of all three Post-it colours before you begin.',
        uk: 'Надрукуйте Circular Strategies Wheel у форматі A1 і розмістіть так, щоб уся команда могла одночасно читати й працювати з ним, бажано на стіні на рівні очей. Перед початком переконайтеся, що кожен учасник має ручки та стікери всіх трьох кольорів.',
        ro: 'Tipărește Circular Strategies Wheel la dimensiunea A1 și amplasează-l astfel încât întreaga echipă să îl poată citi și folosi în același timp, ideal pe un perete la înălțimea de lucru. Înainte de început, asigură-te că fiecare participant are pixuri și seturi de Post-it în toate cele trei culori.',
        hy: 'Տպեք Circular Strategies Wheel-ը A1 չափով եւ տեղադրեք այնպես, որ ամբողջ թիմը կարողանա միաժամանակ կարդալ եւ աշխատել դրա վրա, ցանկալի է՝ պատին կանգնած բարձրության վրա։ Սկսելուց առաջ համոզվեք, որ յուրաքանչյուր մասնակից ունի գրիչներ եւ երեք գույնի Post-it նշումներ։'
      },
      details: [
        { en: 'Time: 30-35 minutes', uk: 'Час: 30-35 хвилин', ro: 'Timp: 30-35 de minute', hy: 'Ժամանակ՝ 30-35 րոպե' },
        { en: 'Best for: Teams of 3-8 people', uk: 'Найкраще для: команд із 3-8 людей', ro: 'Potrivit pentru: echipe de 3-8 persoane', hy: 'Լավագույնը՝ 3-8 հոգանոց թիմերի համար' }
      ],
      listTitle: { en: 'You will need:', uk: 'Вам знадобиться:', ro: 'Vei avea nevoie de:', hy: 'Ձեզ պետք կլինի՝' },
      items: [
        { en: 'Circular Strategies Wheel canvas, printed at A1 and placed where everyone can reach it', uk: 'Полотно Circular Strategies Wheel, надруковане у форматі A1 і розміщене так, щоб усі могли до нього дістатися', ro: 'Canvasul Circular Strategies Wheel, tipărit la A1 și amplasat unde toți îl pot accesa', hy: 'Circular Strategies Wheel կտավը՝ տպված A1 չափով եւ տեղադրված բոլորի համար հասանելի վայրում' },
        { en: 'Post-its in three colours: green for opportunities, yellow for curiosities and pink for challenges', uk: 'Стікери трьох кольорів: зелені для можливостей, жовті для запитань/цікавості та рожеві для викликів', ro: 'Post-it-uri în trei culori: verde pentru oportunități, galben pentru curiozități și roz pentru provocări', hy: 'Post-it նշումներ երեք գույնով՝ կանաչը հնարավորությունների, դեղինը հետաքրքրությունների, վարդագույնը մարտահրավերների համար' },
        { en: 'Pens for everyone', uk: 'Ручки для всіх', ro: 'Pixuri pentru toți', hy: 'Գրիչներ բոլորի համար' }
      ],
      linkLabel: 'Circular Strategies Wheel Canvas',
      link:
        'https://ddc.dk/wp-content/uploads/2020/10/Circular_strategies_wheel_canvas.pdf'
    },
    steps: [
      {
        number: '1',
        title: { en: 'Individual brainstorm', uk: 'Індивідуальний мозковий штурм', ro: 'Brainstorming individual', hy: 'Անհատական գաղափարների գեներացում' },
        time: '10-15 min',
        text: {
          en: 'Working individually and in silence, each person reviews the circular strategies on the wheel and responds with Post-its: green for clear potential, yellow for areas of curiosity and pink for challenges or obstacles.',
          uk: 'Працюючи індивідуально й мовчки, кожен учасник переглядає циркулярні стратегії на колесі та відповідає стікерами: зелені - для очевидного потенціалу, жовті - для зон цікавості, рожеві - для викликів або перешкод.',
          ro: 'Lucrând individual și în liniște, fiecare persoană analizează strategiile circulare de pe roată și răspunde cu Post-it-uri: verde pentru potențial clar, galben pentru zone de curiozitate și roz pentru provocări sau obstacole.',
          hy: 'Անհատապես եւ լուռ աշխատելով՝ յուրաքանչյուր մասնակից ուսումնասիրում է անիվի շրջանաձեւ ռազմավարությունները եւ արձագանքում Post-it նշումներով՝ կանաչը հստակ ներուժի, դեղինը հետաքրքրության ոլորտների, վարդագույնը մարտահրավերների կամ խոչընդոտների համար։'
        },
        tip: {
          en: 'Start with a 5-minute timer to encourage instinctive responses. When time is up, each person shares and places their Post-its on the wheel. Then run a second 5-minute round; hearing others’ perspectives often sparks new ideas.',
          uk: 'Почніть із таймера на 5 хвилин, щоб заохотити інтуїтивні відповіді. Коли час мине, кожен ділиться думками й розміщує стікери на колесі. Потім проведіть другий 5-хвилинний раунд: погляди інших часто запускають нові ідеї.',
          ro: 'Începe cu un cronometru de 5 minute pentru a încuraja răspunsurile instinctive. Când timpul expiră, fiecare persoană își prezintă ideile și pune Post-it-urile pe roată. Apoi organizează o a doua rundă de 5 minute; perspectivele celorlalți declanșează adesea idei noi.',
          hy: 'Սկսեք 5 րոպեանոց ժամանակաչափով՝ բնազդային արձագանքները խրախուսելու համար։ Երբ ժամանակը ավարտվում է, յուրաքանչյուր մասնակից կիսվում է եւ տեղադրում իր Post-it նշումները անիվի վրա։ Այնուհետեւ անցկացրեք երկրորդ 5 րոպեանոց փուլը․ մյուսների տեսանկյունները հաճախ նոր գաղափարներ են առաջացնում։'
        }
      },
      {
        number: '2',
        title: { en: 'Team discussion', uk: 'Командне обговорення', ro: 'Discuție în echipă', hy: 'Թիմային քննարկում' },
        time: '10 min',
        text: {
          en: 'With all the Post-its on the wheel, review them together as a team across the three life-cycle phases. Discuss patterns, surprises, tensions and where opportunities or challenges overlap. The discussion should lead to one guiding question: what is most interesting for us to focus on when starting to build our circular business model?',
          uk: 'Коли всі стікери розміщено на колесі, перегляньте їх разом як команда на трьох фазах життєвого циклу. Обговоріть закономірності, несподіванки, напруження та місця, де можливості або виклики перетинаються. Обговорення має привести до одного орієнтовного запитання: на чому нам найцікавіше зосередитися, коли ми починаємо будувати циркулярну бізнес-модель?',
          ro: 'Cu toate Post-it-urile pe roată, analizați-le împreună ca echipă în cele trei etape ale ciclului de viață. Discutați tipare, surprize, tensiuni și zone în care oportunitățile sau provocările se suprapun. Discuția ar trebui să ducă la o întrebare-ghid: pe ce este cel mai interesant să ne concentrăm atunci când începem să construim modelul nostru de afaceri circular?',
          hy: 'Երբ բոլոր Post-it նշումները տեղադրված են անիվի վրա, թիմով վերանայեք դրանք կյանքի ցիկլի երեք փուլերում։ Քննարկեք օրինաչափությունները, անակնկալները, լարվածությունները եւ այն կետերը, որտեղ հնարավորությունները կամ մարտահրավերները համընկնում են։ Քննարկումը պետք է հանգեցնի մեկ ուղղորդող հարցի՝ ինչի՞ վրա է մեզ ամենահետաքրքիրը կենտրոնանալ, երբ սկսում ենք կառուցել մեր շրջանաձեւ բիզնես մոդելը։'
        },
        tip: {
          en: "Do not put the wheel away at the end of the session. Hang it somewhere visible in your workspace so colleagues who were not in the room can contribute Post-its over the following days; fresh perspectives often surface things the core team missed.",
          uk: 'Не прибирайте колесо наприкінці сесії. Повісьте його на видному місці в робочому просторі, щоб колеги, які не були в кімнаті, могли додати стікери протягом наступних днів. Свіжі погляди часто виявляють те, що основна команда пропустила.',
          ro: 'Nu pune roata deoparte la finalul sesiunii. Agaț-o într-un loc vizibil din spațiul de lucru, astfel încât colegii care nu au fost în sală să poată adăuga Post-it-uri în zilele următoare. Perspectivele proaspete scot adesea la iveală lucruri ratate de echipa de bază.',
          hy: 'Սեանսի ավարտին անիվը մի պահեք մի կողմ։ Կախեք այն աշխատանքային տարածքում տեսանելի տեղում, որպեսզի սենյակում չգտնվող գործընկերները հաջորդ օրերին կարողանան ավելացնել Post-it նշումներ։ Թարմ տեսանկյունները հաճախ բացահայտում են բաներ, որոնք հիմնական թիմը բաց է թողել։'
        }
      }
    ]
  }
};

/* 5. DETAILED SECTION 2 */
const shapeValueModelSection = {
  id: 'shape-value-model',
  title: { en: 'Shape the Value Model', uk: 'Сформуйте модель цінності', ro: 'Modelează valoarea', hy: 'Ձեւավորեք արժեքի մոդելը' },
  resourceTag: 'explore:shape-value-model',
  paragraphs: [
    {
      en: 'A circular solution also needs a clear value model. Use this section to explore how your solution could create value for customers, reduce waste or costs, strengthen relationships and support your business goals.',
      uk: 'Циркулярне рішення також потребує чіткої моделі цінності. Використовуйте цей розділ, щоб дослідити, як ваше рішення може створювати цінність для клієнтів, зменшувати відходи або витрати, зміцнювати відносини та підтримувати бізнес-цілі.',
      ro: 'O soluție circulară are nevoie și de un model de valoare clar. Folosește această secțiune pentru a explora cum soluția ta poate crea valoare pentru clienți, reduce deșeurile sau costurile, consolida relațiile și sprijini obiectivele afacerii.',
      hy: 'Շրջանաձեւ լուծումը նույնպես պետք է ունենա հստակ արժեքի մոդել։ Օգտագործեք այս բաժինը՝ ուսումնասիրելու համար, թե ինչպես կարող է ձեր լուծումը արժեք ստեղծել հաճախորդների համար, նվազեցնել թափոնները կամ ծախսերը, ամրապնդել հարաբերությունները եւ աջակցել բիզնես նպատակներին։'
    },
    {
      en: 'These circular value models can help you think through how a concept could work commercially before you evaluate it in the next phase.',
      uk: 'Ці циркулярні моделі цінності допоможуть продумати, як концепція може працювати комерційно, перш ніж ви оціните її в наступній фазі.',
      ro: 'Aceste modele circulare de valoare te pot ajuta să analizezi cum ar putea funcționa comercial un concept înainte de a-l evalua în faza următoare.',
      hy: 'Այս շրջանաձեւ արժեքի մոդելները կօգնեն մտածել, թե ինչպես կարող է հայեցակարգը աշխատել առեւտրային առումով՝ նախքան հաջորդ փուլում դրա գնահատումը։'
    }
  ],
  /*
    CIRCULAR VALUE MODEL CARDS
    Edit the introductory text, card titles, descriptions, examples and icons
    below. Icons use local Icon Park SVG files from static/icons/icon-park/.
  */
  businessModelsTitle: { en: 'Circular value models', uk: 'Циркулярні моделі цінності', ro: 'Modele circulare de valoare', hy: 'Շրջանաձեւ արժեքի մոդելներ' },
  businessModelsIntro: {
    en: "The circular options below detail different strategies for making your business more circular. Each option below represents a proven way to create commercial value while keeping products, materials or resources in use for longer. || As an SME, you do not need to adopt all five; most businesses start by introducing just one or two that fit naturally with what they already do well.",
    uk: 'Циркулярні варіанти нижче описують різні стратегії, які можуть зробити ваш бізнес більш циркулярним. Кожен варіант показує перевірений спосіб створювати комерційну цінність, водночас довше утримуючи продукти, матеріали або ресурси у використанні. || Як МСП, вам не потрібно впроваджувати всі п’ять моделей. Більшість бізнесів починає з однієї або двох, які природно поєднуються з тим, що вони вже добре роблять.',
    ro: 'Opțiunile circulare de mai jos descriu strategii diferite pentru a face afacerea mai circulară. Fiecare opțiune reprezintă o modalitate testată de a crea valoare comercială, menținând în același timp produsele, materialele sau resursele în uz mai mult timp. || Ca IMM, nu trebuie să adopți toate cele cinci modele. Cele mai multe afaceri încep cu unul sau două care se potrivesc firesc cu ceea ce fac deja bine.',
    hy: 'Ստորեւ ներկայացված շրջանաձեւ տարբերակները նկարագրում են ձեր բիզնեսը ավելի շրջանաձեւ դարձնելու տարբեր ռազմավարություններ։ Յուրաքանչյուր տարբերակ ներկայացնում է առեւտրային արժեք ստեղծելու փորձված եղանակ՝ միաժամանակ արտադրանքը, նյութերը կամ ռեսուրսները ավելի երկար պահելով օգտագործման մեջ։ || Որպես ՓՄՁ՝ պետք չէ կիրառել բոլոր հինգը։ Բիզնեսների մեծ մասը սկսում է մեկ կամ երկու մոդելից, որոնք բնականորեն համապատասխանում են իրենց արդեն լավ արածին։'
  },
  businessModelCards: [
    {
      title: { en: 'Product as a Service (PaaS)', uk: 'Продукт як послуга (PaaS)', ro: 'Produs ca serviciu (PaaS)', hy: 'Ապրանքը որպես ծառայություն (PaaS)' },
      icon: 'delivery',
      text: {
        en: "Instead of selling a product, you sell its function: the customer pays to use it, not to own it. The customer typically pays based on usage or time under a short- or long-term contract, while the provider keeps ownership of the product throughout its life. This creates a strong incentive to design products that are durable, easy to maintain and repair, and able to stay in use for longer. The model can also create a closer, ongoing relationship with customers, since the provider is often responsible for maintenance and servicing throughout the contract. For the business, revenue becomes recurring rather than one-off, which can make income more predictable.",
        uk: 'Замість продажу продукту ви продаєте його функцію: клієнт платить за користування, а не за володіння. Зазвичай клієнт платить залежно від використання або часу за коротко- чи довгостроковим договором, а постачальник зберігає право власності на продукт протягом усього строку його життя. Це створює сильний стимул проєктувати продукти довговічними, простими в обслуговуванні та ремонті й здатними довше залишатися у використанні. Модель також може створити ближчі й постійні відносини з клієнтами, оскільки постачальник часто відповідає за технічне обслуговування протягом договору. Для бізнесу дохід стає повторюваним, а не одноразовим, що може зробити його більш передбачуваним.',
        ro: 'În loc să vinzi un produs, vinzi funcția lui: clientul plătește pentru utilizare, nu pentru proprietate. De obicei, clientul plătește în funcție de utilizare sau timp, printr-un contract pe termen scurt sau lung, iar furnizorul păstrează proprietatea asupra produsului pe toată durata de viață. Acest lucru creează un stimulent puternic pentru proiectarea unor produse durabile, ușor de întreținut și reparat, care pot rămâne în uz mai mult timp. Modelul poate crea și o relație mai apropiată și continuă cu clienții, deoarece furnizorul este adesea responsabil de întreținere și service pe durata contractului. Pentru afacere, veniturile devin recurente, nu punctuale, ceea ce le poate face mai previzibile.',
        hy: 'Ապրանք վաճառելու փոխարեն դուք վաճառում եք դրա գործառույթը․ հաճախորդը վճարում է օգտագործման, ոչ թե սեփականության համար։ Սովորաբար հաճախորդը վճարում է օգտագործման կամ ժամանակի հիման վրա՝ կարճաժամկետ կամ երկարաժամկետ պայմանագրով, իսկ մատակարարը պահպանում է արտադրանքի սեփականությունը դրա կյանքի ողջ ընթացքում։ Սա ուժեղ խթան է ստեղծում նախագծելու արտադրանք, որը դիմացկուն է, հեշտ է սպասարկել եւ վերանորոգել, եւ կարող է ավելի երկար մնալ օգտագործման մեջ։ Մոդելը կարող է նաեւ ստեղծել հաճախորդների հետ ավելի մոտ եւ շարունակական հարաբերություն, քանի որ մատակարարը հաճախ պատասխանատու է սպասարկման համար պայմանագրի ընթացքում։ Բիզնեսի համար եկամուտը դառնում է կրկնվող, ոչ թե մեկանգամյա, ինչը կարող է այն դարձնել ավելի կանխատեսելի։'
      },
      example: { en: 'Leasing industrial machinery with full maintenance included.', uk: 'Промислове обладнання в лізинг із повним технічним обслуговуванням.', ro: 'Leasing pentru utilaje industriale cu întreținere completă inclusă.', hy: 'Արդյունաբերական սարքավորումների լիզինգ՝ ամբողջական սպասարկմամբ։' }
    },
    {
      title: { en: 'Resource Recovery', uk: 'Відновлення ресурсів', ro: 'Recuperarea resurselor', hy: 'Ռեսուրսների վերականգնում' },
      icon: 'recycling-pool',
      text: {
        en: "Instead of discarding resources on your waste streams (e.g. by-products, residues), you treat it as a resource in its own right; something you can sell, reuse or trade with other businesses. This works best when you have a reasonably steady volume and quality of material flowing through your operations, so recovery is worth the effort. It often requires investment in sorting, processing or storage, and may involve building relationships with other businesses that can use what you would otherwise throw away.",
        uk: 'Замість того щоб викидати ресурси у потоках відходів, наприклад побічні продукти або залишки, ви розглядаєте їх як самостійний ресурс: те, що можна продати, повторно використати або обміняти з іншими бізнесами. Це найкраще працює, коли через ваші операції проходить достатньо стабільний обсяг і якість матеріалу, щоб відновлення було виправданим. Часто потрібні інвестиції в сортування, обробку або зберігання, а також налагодження відносин з іншими бізнесами, які можуть використати те, що інакше було б викинуто.',
        ro: 'În loc să elimini resursele din fluxurile de deșeuri, de exemplu subproduse sau reziduuri, le tratezi ca resurse în sine: ceva ce poți vinde, reutiliza sau schimba cu alte afaceri. Acest model funcționează cel mai bine atunci când ai un volum și o calitate relativ stabile ale materialelor care trec prin operațiunile tale, astfel încât recuperarea să merite efortul. Deseori necesită investiții în sortare, procesare sau depozitare și poate implica relații cu alte afaceri care pot folosi ceea ce altfel ai arunca.',
        hy: 'Թափոնների հոսքերում առկա ռեսուրսները, օրինակ՝ կողմնակի արտադրանքները կամ մնացորդները, դեն նետելու փոխարեն դրանք դիտարկում եք որպես առանձին ռեսուրս՝ բան, որը կարող եք վաճառել, կրկնօգտագործել կամ փոխանակել այլ բիզնեսների հետ։ Սա լավագույնս աշխատում է, երբ ձեր գործողությունների միջով անցնող նյութի ծավալը եւ որակը բավականաչափ կայուն են, որպեսզի վերականգնումը արժենա ջանքը։ Այն հաճախ պահանջում է ներդրում տեսակավորման, մշակման կամ պահեստավորման մեջ եւ կարող է ներառել հարաբերությունների ստեղծում այլ բիզնեսների հետ, որոնք կարող են օգտագործել այն, ինչ դուք այլապես կնետեիք։'
      },
      example: { en: 'Using production off-cuts to create secondary products.', uk: 'Використання виробничих обрізків для створення вторинних продуктів.', ro: 'Folosirea resturilor de producție pentru a crea produse secundare.', hy: 'Արտադրական կտրվածքների օգտագործում երկրորդային արտադրանք ստեղծելու համար։' }
    },
    {
      title: { en: 'Extended Product Life', uk: 'Подовження строку служби продукту', ro: 'Durată de viață extinsă a produsului', hy: 'Արտադրանքի կյանքի երկարացում' },
      icon: 'history',
      text: {
        en: 'Instead of a product being sold once and eventually discarded, you keep it in use for as long as possible through repair, upgrades and resale. This means thinking about the whole lifecycle of a product, not just the point of sale. Design decisions made early on, such as modularity, ease of disassembly and standard components, directly determine how easy repair and refurbishment will be later.',
        uk: 'Замість того щоб продати продукт один раз і зрештою його викинути, ви утримуєте його у використанні якомога довше через ремонт, оновлення та перепродаж. Це означає думати про весь життєвий цикл продукту, а не лише про момент продажу. Ранні дизайнерські рішення, такі як модульність, легкість розбирання та стандартні компоненти, безпосередньо визначають, наскільки простими будуть ремонт і відновлення пізніше.',
        ro: 'În loc ca un produs să fie vândut o singură dată și apoi eliminat, îl menții în uz cât mai mult timp posibil prin reparații, actualizări și revânzare. Aceasta înseamnă să te gândești la întregul ciclu de viață al produsului, nu doar la momentul vânzării. Deciziile de design luate devreme, precum modularitatea, ușurința de dezasamblare și componentele standard, determină direct cât de ușoare vor fi ulterior reparația și recondiționarea.',
        hy: 'Ապրանքը մեկ անգամ վաճառելու եւ վերջում դեն նետելու փոխարեն այն հնարավորինս երկար պահում եք օգտագործման մեջ՝ վերանորոգման, արդիականացման եւ վերավաճառքի միջոցով։ Սա նշանակում է մտածել արտադրանքի ամբողջ կյանքի ցիկլի մասին, ոչ միայն վաճառքի պահին։ Վաղ ընդունված դիզայնի որոշումները, օրինակ՝ մոդուլայնությունը, ապամոնտաժման հեշտությունը եւ ստանդարտ բաղադրիչները, ուղղակիորեն որոշում են, թե որքան հեշտ կլինի հետագայում վերանորոգումը եւ վերականգնումը։'
      },
      example: { en: 'Offering a refurbishment programme for electronics.', uk: 'Програма відновлення електроніки.', ro: 'Oferirea unui program de recondiționare pentru electronice.', hy: 'Էլեկտրոնիկայի վերականգնման ծրագրի առաջարկ։' }
    },
    {
      title: { en: 'Sharing Platforms', uk: 'Платформи спільного використання', ro: 'Platforme de partajare', hy: 'Համօգտագործման հարթակներ' },
      icon: 'share-one',
      text: {
        en: 'Instead of each customer owning their own product, several users share access to the same one. This addresses idle capacity; the fact that many products sit unused for most of their life. By pooling access across multiple users, you can deliver the same level of use from fewer physical assets, which has environmental benefits and can also be more cost-effective for users than ownership.',
        uk: 'Замість того щоб кожен клієнт володів власним продуктом, кілька користувачів спільно отримують доступ до одного й того самого продукту. Це вирішує проблему простою: багато продуктів більшу частину свого життя залишаються невикористаними. Об’єднуючи доступ для кількох користувачів, можна забезпечити той самий рівень використання з меншою кількістю фізичних активів, що має екологічні переваги й може бути економічно вигіднішим для користувачів, ніж володіння.',
        ro: 'În loc ca fiecare client să dețină propriul produs, mai mulți utilizatori împart accesul la același produs. Acest lucru abordează capacitatea neutilizată: faptul că multe produse stau nefolosite cea mai mare parte a vieții lor. Prin punerea accesului în comun pentru mai mulți utilizatori, poți livra același nivel de utilizare cu mai puține active fizice, ceea ce are beneficii de mediu și poate fi mai rentabil pentru utilizatori decât proprietatea.',
        hy: 'Յուրաքանչյուր հաճախորդի կողմից սեփական արտադրանք ունենալու փոխարեն մի քանի օգտատերեր կիսում են նույն արտադրանքի հասանելիությունը։ Սա լուծում է չօգտագործվող կարողության խնդիրը․ շատ ապրանքներ իրենց կյանքի մեծ մասում չեն օգտագործվում։ Մի քանի օգտատերերի համար հասանելիությունը միավորելով՝ կարող եք նույն օգտագործման մակարդակը ապահովել ավելի քիչ ֆիզիկական ակտիվներով, ինչը ունի բնապահպանական օգուտներ եւ օգտատերերի համար կարող է ավելի ծախսարդյունավետ լինել, քան սեփականությունը։'
      },
      example: { en: 'Tool-sharing service for construction small-medium enterprises (SMEs) in an industrial park.', uk: 'Сервіс спільного користування інструментами для будівельних МСП в індустріальному парку.', ro: 'Serviciu de partajare a uneltelor pentru IMM-uri din construcții într-un parc industrial.', hy: 'Գործիքների համօգտագործման ծառայություն շինարարական ՓՄՁ-ների համար արդյունաբերական պարկում։' }
    },
    {
      title: { en: 'Circular Supply Chains', uk: 'Циркулярні ланцюги постачання', ro: 'Lanțuri de aprovizionare circulare', hy: 'Շրջանաձեւ մատակարարման շղթաներ' },
      icon: 'link-one',
      text: {
        en: 'Instead of focusing only on what happens to your product after it is sold, you focus on what goes into it in the first place by sourcing recycled or secondary materials rather than virgin ones. This typically requires closer collaboration with suppliers, because recycled or secondary materials often vary more in quality or supply than virgin materials. Over time, it can reduce exposure to virgin material price volatility and strengthen supplier relationships.',
        uk: 'Замість того щоб зосереджуватися лише на тому, що відбувається з продуктом після продажу, ви звертаєте увагу на те, що входить у нього з самого початку, використовуючи перероблені або вторинні матеріали замість первинних. Зазвичай це потребує тіснішої співпраці з постачальниками, оскільки перероблені або вторинні матеріали часто більше відрізняються за якістю чи доступністю, ніж первинні. З часом це може зменшити залежність від коливань цін на первинні матеріали та зміцнити відносини з постачальниками.',
        ro: 'În loc să te concentrezi doar pe ce se întâmplă cu produsul după vânzare, te concentrezi pe ce intră în el de la început, aprovizionându-te cu materiale reciclate sau secundare în locul celor virgine. De obicei, acest lucru necesită o colaborare mai strânsă cu furnizorii, deoarece materialele reciclate sau secundare pot varia mai mult ca nivel de calitate sau disponibilitate decât materialele virgine. În timp, poate reduce expunerea la volatilitatea prețurilor materialelor virgine și poate întări relațiile cu furnizorii.',
        hy: 'Միայն այն բանի վրա կենտրոնանալու փոխարեն, թե ինչ է տեղի ունենում ձեր արտադրանքի հետ վաճառքից հետո, դուք կենտրոնանում եք այն բանի վրա, թե ինչ է սկզբից մտնում դրա մեջ՝ առաջնային նյութերի փոխարեն ձեռք բերելով վերամշակված կամ երկրորդային նյութեր։ Սա սովորաբար պահանջում է ավելի սերտ համագործակցություն մատակարարների հետ, քանի որ վերամշակված կամ երկրորդային նյութերը հաճախ ավելի շատ են տարբերվում որակով կամ մատակարարմամբ, քան առաջնային նյութերը։ Ժամանակի ընթացքում դա կարող է նվազեցնել առաջնային նյութերի գների տատանումների ազդեցությունը եւ ամրապնդել մատակարարների հետ հարաբերությունները։'
      },
      example: { en: 'Switching to recycled feedstock and partnering with a local recycler.', uk: 'Перехід на перероблену сировину та партнерство з місцевим переробником.', ro: 'Trecerea la materii prime reciclate și parteneriatul cu un reciclator local.', hy: 'Վերամշակված հումքի անցում եւ համագործակցություն տեղական վերամշակողի հետ։' }
    }
  ],
  /*
    TEXT AFTER THE CIRCULAR VALUE MODEL CARDS
    This block appears after the accordion cards and before the relevant tools.
  */
  afterBusinessModelsTitle: { en: 'Stakeholder and value chain perspectives', uk: 'Перспективи зацікавлених сторін і ланцюга цінності', ro: 'Perspectivele părților interesate și ale lanțului valoric', hy: 'Շահագրգիռ կողմերի եւ արժեքի շղթայի տեսանկյուններ' },
  afterBusinessModelsText: {
    en: 'The core of any marketable circular business is the value proposition for users, customers and partners. In addition to exploring circular value models, it is important to understand how stakeholders experience the value offered by a new model. To build this understanding, it is relevant to map the stakeholders involved and review the value chains as they work today. The relevant tools below can help you do this, including tools for value chain mapping and user interviews, so your exploration is guided by the people and relationships that matter most.',
    uk: 'Основою будь-якого ринкового циркулярного бізнесу є ціннісна пропозиція для користувачів, клієнтів і партнерів. Окрім вивчення циркулярних моделей цінності, важливо зрозуміти, як зацікавлені сторони сприймають цінність, яку пропонує нова модель. Щоб сформувати це розуміння, варто закартувати залучені зацікавлені сторони та переглянути, як ланцюги цінності працюють сьогодні. Інструменти нижче допоможуть це зробити, зокрема через картування ланцюга цінності та інтерв’ю з користувачами, щоб ваше дослідження спиралося на людей і відносини, які мають найбільше значення.',
    ro: 'Nucleul oricărei afaceri circulare viabile pe piață este propunerea de valoare pentru utilizatori, clienți și parteneri. Pe lângă explorarea modelelor circulare de valoare, este important să înțelegi cum experimentează părțile interesate valoarea oferită de un model nou. Pentru a construi această înțelegere, este util să cartografiezi părțile interesate implicate și să revizuiești lanțurile valorice așa cum funcționează astăzi. Instrumentele relevante de mai jos te pot ajuta, inclusiv prin cartografierea lanțului valoric și interviuri cu utilizatorii, astfel încât explorarea ta să fie ghidată de oamenii și relațiile care contează cel mai mult.',
    hy: 'Ցանկացած շուկայում կիրառելի շրջանաձեւ բիզնեսի հիմքում օգտատերերի, հաճախորդների եւ գործընկերների համար արժեքային առաջարկն է։ Շրջանաձեւ արժեքի մոդելները ուսումնասիրելուց բացի կարեւոր է հասկանալ, թե ինչպես են շահագրգիռ կողմերը ընկալում նոր մոդելի առաջարկած արժեքը։ Այս ըմբռնումը կառուցելու համար օգտակար է քարտեզագրել ներգրավված շահագրգիռ կողմերին եւ վերանայել, թե ինչպես են արժեքի շղթաները այսօր աշխատում։ Ստորեւ ներկայացված համապատասխան գործիքները կարող են օգնել այս հարցում, այդ թվում՝ արժեքի շղթայի քարտեզագրման եւ օգտատերերի հարցազրույցների միջոցով, որպեսզի ձեր ուսումնասիրությունը առաջնորդվի ամենակարեւոր մարդկանցով եւ հարաբերություններով։'
  }
};

/* 6. DETAILED SECTION 3 */
const developSolutionsSection = {
  id: 'develop-solutions',
  title: { en: 'Develop Solutions', uk: 'Розробіть рішення', ro: 'Dezvoltă soluții', hy: 'Մշակեք լուծումներ' },
  resourceTag: 'explore:develop-solutions',
  paragraphs: [
    {
      en: 'Once you have identified some relevant circular strategies, mapped the stakeholders or value chains, the next step is to ask: What could these circular strategies look like in practice in our business? || This is where you stop thinking in abstract terms such as repair, reuse or reduce and turn these into actual ideas. Through the process of exploration, it is relevant to innovate and think new ideas in order to change the business-as-usual ways of doing things. || Combine, refine and shape early ideas into concepts that can be reviewed and evaluated in the next phase, using the relevant tools below. At this stage it is also relevant to stay open and explore a wide range of options, even if they seem far-fetched or challenging. The goal is to generate a list of ideas that can be narrowed down later based on feasibility, impact and alignment with your business goals.',
      uk: 'Після того як ви визначили релевантні циркулярні стратегії та закартували зацікавлені сторони або ланцюги цінності, наступне запитання таке: як ці циркулярні стратегії можуть виглядати на практиці в нашому бізнесі? || Саме тут ви перестаєте мислити абстрактними словами, такими як ремонт, повторне використання чи скорочення, і перетворюєте їх на реальні ідеї. У процесі дослідження важливо інновувати й пропонувати нові ідеї, щоб змінювати звичні способи роботи. || Поєднуйте, уточнюйте й формулюйте ранні ідеї у концепції, які можна переглянути й оцінити в наступній фазі, використовуючи інструменти нижче. На цьому етапі також важливо залишатися відкритими й досліджувати широкий спектр варіантів, навіть якщо вони здаються сміливими або складними. Мета - створити список ідей, який пізніше можна звузити за здійсненністю, впливом і відповідністю бізнес-цілям.',
      ro: 'După ce ai identificat câteva strategii circulare relevante și ai cartografiat părțile interesate sau lanțurile valorice, următorul pas este să întrebi: cum ar putea arăta aceste strategii circulare în practică în afacerea noastră? || Aici încetezi să gândești în termeni abstracți precum reparare, reutilizare sau reducere și îi transformi în idei concrete. În procesul de explorare, este important să inovezi și să gândești idei noi pentru a schimba modul obișnuit de lucru. || Combină, rafinează și modelează ideile inițiale în concepte care pot fi analizate și evaluate în faza următoare, folosind instrumentele relevante de mai jos. În această etapă este important să rămâi deschis și să explorezi o gamă largă de opțiuni, chiar dacă par îndrăznețe sau dificile. Scopul este să generezi o listă de idei care poate fi restrânsă ulterior pe baza fezabilității, impactului și alinierii cu obiectivele afacerii.',
      hy: 'Երբ բացահայտել եք որոշ համապատասխան շրջանաձեւ ռազմավարություններ եւ քարտեզագրել շահագրգիռ կողմերին կամ արժեքի շղթաները, հաջորդ քայլն է հարցնել՝ ինչպիսի՞ն կարող են լինել այս շրջանաձեւ ռազմավարությունները գործնականում մեր բիզնեսում։ || Այստեղ դուք դադարում եք մտածել վերացական հասկացություններով, ինչպիսիք են վերանորոգումը, կրկնօգտագործումը կամ նվազեցումը, եւ դրանք վերածում եք իրական գաղափարների։ Ուսումնասիրության ընթացքում կարեւոր է նորարարել եւ մտածել նոր գաղափարներ՝ սովորական աշխատանքային ձեւերը փոխելու համար։ || Միավորեք, հստակեցրեք եւ ձեւավորեք վաղ գաղափարները հայեցակարգերի, որոնք կարելի է վերանայել եւ գնահատել հաջորդ փուլում՝ օգտագործելով ստորեւ ներկայացված համապատասխան գործիքները։ Այս փուլում նաեւ կարեւոր է բաց մնալ եւ ուսումնասիրել տարբերակների լայն շրջանակ, նույնիսկ եթե դրանք թվում են հեռու կամ բարդ։ Նպատակը գաղափարների ցանկ ստեղծելն է, որը հետագայում կարելի է նեղացնել՝ ըստ իրագործելիության, ազդեցության եւ բիզնես նպատակների հետ համապատասխանության։'
    }
  ],
  /*
    Relevant tools are connected in src/lib/content/editable/tools/tool-catalogue.js.
    To show a tool here, add this tag to the tool's placements.phaseSections:
    explore:develop-solutions
  */
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумок фази', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    { en: 'Use this checklist to confirm that you understand the circular principles and have identified relevant strategies for your business.', uk: 'Скористайтеся цим чеклістом, щоб підтвердити, що ви розумієте циркулярні принципи та визначили релевантні стратегії для вашого бізнесу.', ro: 'Folosește această listă pentru a confirma că înțelegi principiile circulare și ai identificat strategii relevante pentru afacerea ta.', hy: 'Օգտագործեք այս ստուգաթերթը՝ հաստատելու համար, որ հասկանում եք շրջանաձեւ սկզբունքները եւ բացահայտել եք ձեր բիզնեսի համար համապատասխան ռազմավարություններ։' },
    { en: 'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.', uk: 'Щоб перейти до наступної фази, позначте всі пункти й натисніть кнопку після чекліста або поверніться на головну сторінку, щоб знайти іншу відповідну фазу, секторний інструмент чи каталог інструментів.', ro: 'Pentru a continua la faza următoare, bifează toate căsuțele și apasă butonul de după listă sau revino la pagina principală pentru a găsi faza potrivită, instrumente sectoriale ori catalogul de instrumente.', hy: 'Հաջորդ փուլին անցնելու համար նշեք բոլոր կետերը եւ սեղմեք ստուգաթերթից հետո հայտնվող կոճակը, կամ վերադարձեք գլխավոր էջ՝ համապատասխան փուլը, ոլորտային գործիքը կամ գործիքների էջը գտնելու համար։' }
  ],
  checklist: [
    { en: 'A clear understanding of the 9R framework can support circular redesign', uk: 'Чітке розуміння рамки 9R може підтримати циркулярний редизайн', ro: 'O înțelegere clară a cadrului 9R poate sprijini redesignul circular', hy: '9R շրջանակի հստակ ըմբռնումը կարող է աջակցել շրջանաձեւ վերադիզայնին' },
    { en: 'Shared understanding with your team on circular strategies', uk: 'Спільне розуміння циркулярних стратегій у вашій команді', ro: 'O înțelegere comună cu echipa asupra strategiilor circulare', hy: 'Թիմի հետ շրջանաձեւ ռազմավարությունների ընդհանուր ըմբռնում' },
    { en: 'Familiarised yourself with circular options and value model that you can evaluate in the next phase', uk: 'Ознайомлено з циркулярними варіантами та моделлю цінності, які можна оцінити в наступній фазі', ro: 'Te-ai familiarizat cu opțiuni circulare și un model de valoare care pot fi evaluate în faza următoare', hy: 'Ծանոթացել եք շրջանաձեւ տարբերակներին եւ արժեքի մոդելին, որոնք կարող եք գնահատել հաջորդ փուլում' },
    { en: 'Developed ideas or identified options that can become valuable circular solutions for your business.', uk: 'Розроблено ідеї або визначено варіанти, які можуть стати цінними циркулярними рішеннями для вашого бізнесу.', ro: 'Ai dezvoltat idei sau ai identificat opțiuni care pot deveni soluții circulare valoroase pentru afacerea ta.', hy: 'Մշակել եք գաղափարներ կամ բացահայտել տարբերակներ, որոնք կարող են դառնալ արժեքավոր շրջանաձեւ լուծումներ ձեր բիզնեսի համար։' }
  ]
};

export const explore = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [identifyOptionsSection, shapeValueModelSection, developSolutionsSection],
  phaseSummary
});
