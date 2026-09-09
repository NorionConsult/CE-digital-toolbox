import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 4: EVALUATE
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values aligned with the visible subsection names because
  they connect page links and relevant tool placements.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '04',
  slug: 'evaluate',
  shortName: { en: 'Phase 4', uk: 'Фаза 4', ro: 'Faza 4', hy: 'Փուլ 4' },
  title: { en: 'Evaluate', uk: 'Оцінка', ro: 'Evaluează', hy: 'Գնահատել' },
  colourClass: 'phase-card-blue',
  description: {
    en: 'Brings tools which support the transformation from linear to circular business models and the identification of risks, relevant barriers, and potential gains.',
    uk: 'Містить інструменти, що підтримують перехід від лінійних до циркулярних бізнес-моделей та визначення ризиків, бар’єрів і потенційних вигод.',
    ro: 'Reunește instrumente care sprijină trecerea de la modele de afaceri liniare la modele circulare și identificarea riscurilor, barierelor relevante și beneficiilor potențiale.',
    hy: 'Ներառում է գործիքներ, որոնք աջակցում են գծային բիզնես մոդելներից շրջանաձեւ մոդելների անցմանը եւ ռիսկերի, համապատասխան խոչընդոտների ու հնարավոր օգուտների բացահայտմանը։'
  }
};

const hero = {
  intro: {
    en: 'This phase focuses on prioritizing circular economy opportunities by clarifying their feasibility, benefits, risks, barriers and potential value creation.',
    uk: 'Ця фаза зосереджена на пріоритезації можливостей циркулярної економіки через уточнення їхньої здійсненності, вигод, ризиків, бар’єрів і потенціалу створення цінності.',
    ro: 'Această fază se concentrează pe prioritizarea oportunităților de economie circulară prin clarificarea fezabilității, beneficiilor, riscurilor, barierelor și potențialului de creare a valorii.',
    hy: 'Այս փուլը կենտրոնանում է շրջանաձեւ տնտեսության հնարավորությունների առաջնահերթեցման վրա՝ հստակեցնելով դրանց իրագործելիությունը, օգուտները, ռիսկերը, խոչընդոտները եւ արժեք ստեղծելու ներուժը։'
  },
  icon: '/icons/phase-icons/icon-evaluate.png',
  iconAlt: { en: 'Evaluate phase icon', uk: 'Іконка фази Оцінка', ro: 'Pictograma fazei Evaluează', hy: 'Գնահատել փուլի պատկերակ' }
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'shortlist-strategies', label: { en: 'Shortlist options', uk: 'Відібрати варіанти', ro: 'Selectează opțiuni', hy: 'Կազմել տարբերակների կարճ ցուցակ' } },
  { sectionId: 'verify-potential', label: { en: 'Verify potential', uk: 'Перевірити потенціал', ro: 'Verifică potențialul', hy: 'Ստուգել ներուժը' } },
  { sectionId: 'test-and-pilot', label: { en: 'Prepare pilot', uk: 'Підготувати пілот', ro: 'Pregătește pilotarea', hy: 'Պատրաստել փորձարկումը' } }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: { en: 'Evaluating a circular opportunity', uk: 'Оцінювання циркулярної можливості', ro: 'Evaluarea unei oportunități circulare', hy: 'Շրջանաձեւ հնարավորության գնահատում' },
  paragraphs: [
    { en: 'Before choosing a direction, you need to know which circular options make sense for your business financially, operationally and strategically. This phase helps you identify the right circular option, assess how it will affect your business opportunities, and understand a path forward.', uk: 'Перш ніж обрати напрям, потрібно зрозуміти, які циркулярні варіанти мають сенс для вашого бізнесу фінансово, операційно та стратегічно. Ця фаза допомагає визначити правильний варіант, оцінити його вплив на бізнес-можливості та зрозуміти шлях уперед.', ro: 'Înainte de a alege o direcție, trebuie să știi ce opțiuni circulare au sens pentru afacerea ta din punct de vedere financiar, operațional și strategic. Această fază te ajută să identifici opțiunea circulară potrivită, să evaluezi cum îți poate influența oportunitățile de afaceri și să înțelegi drumul înainte.', hy: 'Ուղղություն ընտրելուց առաջ պետք է հասկանալ, թե որ շրջանաձեւ տարբերակներն են իմաստալից ձեր բիզնեսի համար ֆինանսական, գործառնական եւ ռազմավարական տեսանկյունից։ Այս փուլը օգնում է գտնել ճիշտ շրջանաձեւ տարբերակը, գնահատել դրա ազդեցությունը բիզնես հնարավորությունների վրա եւ հասկանալ առաջ շարժվելու ուղին։' }
  ],
  cards: [
    {
      sectionId: 'shortlist-strategies',
      number: '1',
      title: { en: 'Shortlist options', uk: 'Відбір варіантів', ro: 'Selectarea opțiunilor', hy: 'Տարբերակների կարճ ցուցակ' },
      description: {
        en: 'Evaluate shortlisted circular options based on impact, feasibility, risks and alignment with your existing operations and goals.',
        uk: 'Оцініть відібрані циркулярні варіанти за впливом, здійсненністю, ризиками та відповідністю вашим операціям і цілям.',
        ro: 'Evaluează opțiunile circulare selectate pe baza impactului, fezabilității, riscurilor și alinierii cu operațiunile și obiectivele existente.',
        hy: 'Գնահատեք կարճ ցուցակում ներառված շրջանաձեւ տարբերակները ըստ ազդեցության, իրագործելիության, ռիսկերի եւ ձեր ընթացիկ գործողություններին ու նպատակներին համապատասխանության։'
      },
      keyOutputs: [
        'Circular options screened against relevant criteria',
        'A clearer view of feasibility and potential impact'
      ]
    },
    {
      sectionId: 'verify-potential',
      number: '2',
      title: { en: 'Verify potential', uk: 'Перевірка потенціалу', ro: 'Verificarea potențialului', hy: 'Ներուժի ստուգում' },
      description: {
        en: 'Understand the barriers, enablers and risks required to move from an idea to a stronger circular business case.',
        uk: 'Зрозумійте бар’єри, сприятливі умови та ризики, потрібні для переходу від ідеї до сильнішого циркулярного бізнес-кейсу.',
        ro: 'Înțelege barierele, factorii favorizanți și riscurile necesare pentru a trece de la idee la un caz de afaceri circular mai solid.',
        hy: 'Հասկացեք խոչընդոտները, նպաստող գործոնները եւ ռիսկերը, որոնք անհրաժեշտ է հաշվի առնել գաղափարից ավելի ուժեղ շրջանաձեւ բիզնես հիմնավորման անցնելու համար։'
      },
      keyOutputs: [
        'Barrier and Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis',
        'A shortlist of one to three priority strategies'
      ]
    },
    {
      sectionId: 'test-and-pilot',
      number: '3',
      title: { en: 'Test & Pilot', uk: 'Тестування і пілотування', ro: 'Testează și pilotează', hy: 'Փորձարկել եւ պիլոտավորել' },
      description: {
        en: 'Prepare a small-scale test before committing to full implementation, including material flows, partners and learning goals.',
        uk: 'Підготуйте тест у малому масштабі перед повним впровадженням, зокрема матеріальні потоки, партнерів і навчальні цілі.',
        ro: 'Pregătește un test la scară mică înainte de implementarea completă, incluzând fluxuri de materiale, parteneri și obiective de învățare.',
        hy: 'Պատրաստեք փոքր մասշտաբի փորձարկում՝ նախքան ամբողջական իրականացումը՝ ներառելով նյութական հոսքերը, գործընկերներին եւ սովորելու նպատակները։'
      },
      keyOutputs: [
        'Pilot logic mapped',
        'Testing assumptions and learning goals defined'
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const shortlistStrategiesOptions = [
  'Product as a Service (PaaS)',
  'Resource Recovery',
  'Extended Product Life',
  'Sharing Platforms',
  'Circular Supply Chains'
];

const shortlistStrategiesSection = {
  id: 'shortlist-strategies',
  title: { en: 'Shortlist strategies', uk: 'Відбір стратегій', ro: 'Selectarea strategiilor', hy: 'Ռազմավարությունների կարճ ցուցակ' },
  resourceTag: 'evaluate:shortlist-strategies',
  paragraphs: [
    {
      en: 'Not every circular option will offer the same value or be equally practical to implement. This section can help you compare circular options to find what is best for your business. If you already have a particular idea from the phase before you can move to verify the potential of the idea or concept. If you rather keep working on the circular strategies, use the screening tool here to think further on the options identified in the former phase. || You can download the result of this section to share with others (Please use Google Chrome, Safari, or Firefox for a better print).',
      uk: 'Не кожен циркулярний варіант матиме однакову цінність або буде однаково практичним для впровадження. Цей розділ допоможе порівняти циркулярні варіанти й знайти найкращий для вашого бізнесу. Якщо у вас уже є конкретна ідея з попередньої фази, ви можете перейти до перевірки потенціалу цієї ідеї або концепції. Якщо ви хочете ще попрацювати з циркулярними стратегіями, скористайтеся інструментом відбору тут, щоб глибше обміркувати варіанти, визначені в попередній фазі. || Результат цього розділу можна завантажити й поділитися ним з іншими. Для кращого друку використовуйте Google Chrome, Safari або Firefox.',
      ro: 'Nu fiecare opțiune circulară va oferi aceeași valoare sau va fi la fel de practică de implementat. Această secțiune te ajută să compari opțiunile circulare și să identifici ce este mai potrivit pentru afacerea ta. Dacă ai deja o idee concretă din faza anterioară, poți trece la verificarea potențialului ideii sau conceptului. Dacă preferi să continui lucrul cu strategiile circulare, folosește instrumentul de selecție de aici pentru a analiza mai departe opțiunile identificate anterior. || Poți descărca rezultatul acestei secțiuni pentru a-l împărtăși cu alții. Pentru o imprimare mai bună, folosește Google Chrome, Safari sau Firefox.',
      hy: 'Ոչ բոլոր շրջանաձեւ տարբերակներն են նույն արժեքը տալիս կամ նույնքան գործնական իրականացնելու համար։ Այս բաժինը կօգնի համեմատել շրջանաձեւ տարբերակները եւ գտնել ձեր բիզնեսի համար ամենահարմարը։ Եթե նախորդ փուլից արդեն ունեք կոնկրետ գաղափար, կարող եք անցնել այդ գաղափարի կամ հայեցակարգի ներուժի ստուգմանը։ Եթե նախընտրում եք շարունակել աշխատել շրջանաձեւ ռազմավարությունների վրա, օգտագործեք այստեղի զտման գործիքը՝ նախորդ փուլում բացահայտված տարբերակները ավելի խորացնելու համար։ || Այս բաժնի արդյունքը կարող եք ներբեռնել եւ կիսվել ուրիշների հետ։ Ավելի լավ տպագրության համար օգտագործեք Google Chrome, Safari կամ Firefox։'
    }
  ],
  /*
    SHORTLIST STRATEGIES QUESTIONNAIRE
    Edit the questionnaire title, instructions, categories, questions and
    result messages below. The interactive layout is in:
    src/lib/components/sections/StrategyShortlistQuestionnaire.svelte
  */
  strategyShortlistQuestionnaire: {
    title: { en: 'Screening your options', uk: 'Відбір ваших варіантів', ro: 'Analizează opțiunile', hy: 'Զտեք ձեր տարբերակները' },
    introduction: {
      en: "Use this questionnaire to see how well each circular option could work for you. First, select a circular option to assess. Then, answer the questionnaire below according to your business. Based on your responses, you'll be given an estimate of how well this circular option model could work for you.",
      uk: 'Скористайтеся цією анкетою, щоб побачити, наскільки добре кожен циркулярний варіант може працювати для вас. Спочатку виберіть циркулярний варіант для оцінювання. Потім дайте відповіді відповідно до вашого бізнесу. На основі відповідей ви отримаєте орієнтовну оцінку того, наскільки добре ця циркулярна модель може вам підійти.',
      ro: 'Folosește acest chestionar pentru a vedea cât de bine ar putea funcționa fiecare opțiune circulară pentru tine. Mai întâi selectează opțiunea circulară de evaluat. Apoi răspunde la întrebări în funcție de afacerea ta. Pe baza răspunsurilor, vei primi o estimare a potrivirii acestei opțiuni circulare pentru tine.',
      hy: 'Օգտագործեք այս հարցաշարը՝ տեսնելու, թե որքան լավ կարող է յուրաքանչյուր շրջանաձեւ տարբերակ աշխատել ձեր համար։ Նախ ընտրեք գնահատվող շրջանաձեւ տարբերակը, ապա պատասխանեք հարցերին ձեր բիզնեսի համաձայն։ Ձեր պատասխանների հիման վրա կստանաք նախնական գնահատում, թե որքանով է այս շրջանաձեւ մոդելը համապատասխանում ձեզ։'
    },
    businessModelLabel: { en: 'Circular option to assess', uk: 'Циркулярний варіант для оцінювання', ro: 'Opțiunea circulară de evaluat', hy: 'Գնահատվող շրջանաձեւ տարբերակ' },
    businessModelPlaceholder: { en: 'Select a circular option', uk: 'Виберіть циркулярний варіант', ro: 'Selectează o opțiune circulară', hy: 'Ընտրեք շրջանաձեւ տարբերակ' },
    // These options mirror the circular value model cards in Phase 3: Explore.
    businessModelOptions: shortlistStrategiesOptions,
    otherBusinessModelLabel: { en: 'Other', uk: 'Інше', ro: 'Altul', hy: 'Այլ' },
    selectBusinessModelText: {
      en: 'Select the circular option you want to assess, then answer every question to see your result.',
      uk: 'Виберіть циркулярний варіант для оцінювання, а потім дайте відповідь на всі запитання, щоб побачити результат.',
      ro: 'Selectează opțiunea circulară pe care vrei să o evaluezi, apoi răspunde la fiecare întrebare pentru a vedea rezultatul.',
      hy: 'Ընտրեք այն շրջանաձեւ տարբերակը, որը ցանկանում եք գնահատել, ապա պատասխանեք բոլոր հարցերին՝ արդյունքը տեսնելու համար։'
    },
    yesLabel: { en: 'Yes', uk: 'Так', ro: 'Da', hy: 'Այո' },
    noLabel: { en: 'No', uk: 'Ні', ro: 'Nu', hy: 'Ոչ' },
    resultsTitle: { en: 'Results', uk: 'Результати', ro: 'Rezultate', hy: 'Արդյունքներ' },
    answeredLabel: { en: 'answered', uk: 'відповіді надано', ro: 'răspunsuri', hy: 'պատասխանված' },
    downloadLabel: { en: 'Download results', uk: 'Завантажити результати', ro: 'Descarcă rezultatele', hy: 'Ներբեռնել արդյունքները' },
    downloadingLabel: { en: 'Preparing PDF...', uk: 'Підготовка PDF...', ro: 'Se pregătește PDF-ul...', hy: 'Պատրաստվում է PDF...' },
    downloadFilename: 'phase-4-evaluate-shortlist-strategies-results.pdf',
    pdfDisclaimer: {
      en: 'These are guiding questions part of Phase 4: Evaluate of the Circular Economy Toolbox. The results do not guarantee a correct assessment, as these are only for indicative use and for learning purposes and should always be used together with other assessment tools and business context.',
      uk: 'Це орієнтовні запитання з Фази 4: Оцінювання у Circular Economy Toolbox. Результати не гарантують правильну оцінку, оскільки призначені лише для орієнтовного використання та навчання і мають застосовуватися разом з іншими інструментами оцінювання та бізнес-контекстом.',
      ro: 'Acestea sunt întrebări orientative din Faza 4: Evaluare a Circular Economy Toolbox. Rezultatele nu garantează o evaluare corectă, deoarece sunt doar orientative și pentru învățare și ar trebui folosite întotdeauna împreună cu alte instrumente de evaluare și cu contextul afacerii.',
      hy: 'Սրանք Circular Economy Toolbox-ի 4-րդ փուլի՝ Գնահատման, ուղղորդող հարցեր են։ Արդյունքները չեն երաշխավորում ճիշտ գնահատում, քանի որ դրանք միայն ցուցիչ եւ ուսուցողական նպատակ ունեն եւ միշտ պետք է օգտագործվեն այլ գնահատման գործիքների ու բիզնես համատեքստի հետ միասին։'
    },
    incompleteText: { en: 'Answer every question to see your result.', uk: 'Дайте відповідь на всі запитання, щоб побачити результат.', ro: 'Răspunde la toate întrebările pentru a vedea rezultatul.', hy: 'Պատասխանեք բոլոր հարցերին՝ արդյունքը տեսնելու համար։' },
    positiveResult: {
      en: 'There seems to be potential! This strategy should be considered to be tested.',
      uk: 'Схоже, потенціал є. Цю стратегію варто розглянути для тестування.',
      ro: 'Se pare că există potențial. Această strategie ar trebui luată în considerare pentru testare.',
      hy: 'Կարծես ներուժ կա։ Այս ռազմավարությունը արժե դիտարկել փորձարկման համար։'
    },
    negativeResult: {
      en: 'It seems this strategy is not a good fit. Are there other strategies to consider or are there ways to make this strategy feasible?',
      uk: 'Схоже, ця стратегія не дуже підходить. Чи є інші стратегії для розгляду або способи зробити цю стратегію здійсненною?',
      ro: 'Se pare că această strategie nu se potrivește bine. Există alte strategii de analizat sau modalități de a o face fezabilă?',
      hy: 'Կարծես այս ռազմավարությունը լավ չի համապատասխանում։ Կա՞ն այլ ռազմավարություններ դիտարկելու համար կամ եղանակներ այս ռազմավարությունը իրագործելի դարձնելու համար։'
    },
    categories: [
      {
        title: { en: 'Strategic Fit', uk: 'Стратегічна відповідність', ro: 'Potrivire strategică', hy: 'Ռազմավարական համապատասխանություն' },
        questions: [
          { en: 'Does this align with our long-term business direction?', uk: 'Чи відповідає це нашому довгостроковому напрямку бізнесу?', ro: 'Se aliniază aceasta cu direcția pe termen lung a afacerii?', hy: 'Արդյո՞ք սա համապատասխանում է մեր բիզնեսի երկարաժամկետ ուղղությանը։' },
          { en: 'Does it complement our existing strengths and capabilities?', uk: 'Чи доповнює це наші наявні сильні сторони та можливості?', ro: 'Completează punctele noastre forte și capacitățile existente?', hy: 'Արդյո՞ք սա լրացնում է մեր առկա ուժեղ կողմերն ու կարողությունները։' }
        ]
      },
      {
        title: { en: 'Operational Feasibility', uk: 'Операційна здійсненність', ro: 'Fezabilitate operațională', hy: 'Գործառնական իրագործելիություն' },
        questions: [
          { en: 'Do we have (or can we build) the skills needed?', uk: 'Чи маємо ми потрібні навички або можемо їх розвинути?', ro: 'Avem sau putem dezvolta competențele necesare?', hy: 'Ունե՞նք անհրաժեշտ հմտությունները կամ կարո՞ղ ենք դրանք զարգացնել։' },
          {
            text: { en: 'Does it fit within our current processes or require major change?', uk: 'Чи вписується це в наші поточні процеси, чи потребує значних змін?', ro: 'Se potrivește cu procesele noastre actuale sau necesită schimbări majore?', hy: 'Արդյո՞ք սա տեղավորվում է մեր ներկա գործընթացներում, թե պահանջում է մեծ փոփոխություն։' },
            yesLabel: { en: 'Fits', uk: 'Підходить', ro: 'Se potrivește', hy: 'Համապատասխանում է' },
            noLabel: { en: 'Not fit', uk: 'Не підходить', ro: 'Nu se potrivește', hy: 'Չի համապատասխանում' }
          }
        ]
      },
      {
        title: { en: 'Resource Requirements', uk: 'Потреби в ресурсах', ro: 'Cerințe de resurse', hy: 'Ռեսուրսների պահանջներ' },
        questions: [
          {
            text: { en: 'What upfront investment is required (time, capital, people)?', uk: 'Які початкові інвестиції потрібні: час, капітал, люди?', ro: 'Ce investiție inițială este necesară: timp, capital, oameni?', hy: 'Ի՞նչ նախնական ներդրում է պահանջվում՝ ժամանակ, կապիտալ, մարդիկ։' },
            yesLabel: { en: 'Multiple', uk: 'Багато', ro: 'Multiple', hy: 'Մի քանի' },
            noLabel: { en: 'Few', uk: 'Небагато', ro: 'Puține', hy: 'Քիչ' }
          },
          { en: 'Are there grants, subsidies, or partnerships that could reduce this?', uk: 'Чи є гранти, субсидії або партнерства, які можуть це зменшити?', ro: 'Există granturi, subvenții sau parteneriate care ar putea reduce acest efort?', hy: 'Կա՞ն դրամաշնորհներ, սուբսիդիաներ կամ գործընկերություններ, որոնք կարող են դա նվազեցնել։' }
        ]
      },
      {
        title: { en: 'Market & Customer Readiness', uk: 'Готовність ринку та клієнтів', ro: 'Pregătirea pieței și a clienților', hy: 'Շուկայի եւ հաճախորդների պատրաստակամություն' },
        questions: [
          { en: 'Will our customers value this change?', uk: 'Чи оцінять наші клієнти цю зміну?', ro: 'Vor aprecia clienții noștri această schimbare?', hy: 'Արդյո՞ք մեր հաճախորդները կգնահատեն այս փոփոխությունը։' },
          { en: 'Is there market demand or regulatory pressure driving this direction?', uk: 'Чи є ринковий попит або регуляторний тиск, що підтримує цей напрям?', ro: 'Există cerere de piață sau presiune de reglementare care susține această direcție?', hy: 'Կա՞ շուկայի պահանջարկ կամ կարգավորող ճնշում, որը մղում է այս ուղղությամբ։' }
        ]
      },
      {
        title: { en: 'Environmental & Social Impact', uk: 'Екологічний і соціальний вплив', ro: 'Impact de mediu și social', hy: 'Բնապահպանական եւ սոցիալական ազդեցություն' },
        questions: [
          {
            text: { en: 'What measurable reduction in material use or emissions could this deliver?', uk: 'Якого вимірюваного скорочення використання матеріалів або викидів це може дати?', ro: 'Ce reducere măsurabilă a utilizării materialelor sau a emisiilor ar putea aduce?', hy: 'Նյութերի օգտագործման կամ արտանետումների ի՞նչ չափելի կրճատում կարող է սա ապահովել։' },
            yesLabel: { en: 'Multiple', uk: 'Багато', ro: 'Multiple', hy: 'Մի քանի' },
            noLabel: { en: 'Few', uk: 'Небагато', ro: 'Puține', hy: 'Քիչ' }
          },
          { en: 'Does it create wider social or community value (better circumstances for the workers, more jobs, access to better and affordable products)?', uk: 'Чи створює це ширшу соціальну або громадську цінність: кращі умови для працівників, більше робочих місць, доступ до кращих і доступних продуктів?', ro: 'Creează valoare socială sau comunitară mai largă: condiții mai bune pentru lucrători, mai multe locuri de muncă, acces la produse mai bune și accesibile?', hy: 'Արդյո՞ք սա ստեղծում է ավելի լայն սոցիալական կամ համայնքային արժեք՝ ավելի լավ պայմաններ աշխատողների համար, ավելի շատ աշխատատեղեր, ավելի լավ եւ մատչելի ապրանքների հասանելիություն։' }
        ]
      },
      {
        title: { en: 'Risk & Dependencies', uk: 'Ризики та залежності', ro: 'Riscuri și dependențe', hy: 'Ռիսկեր եւ կախվածություններ' },
        questions: [
          {
            text: { en: 'What are the key risks (supply chain, customer, regulatory)?', uk: 'Які ключові ризики: ланцюг постачання, клієнти, регулювання?', ro: 'Care sunt riscurile-cheie: lanț de aprovizionare, clienți, reglementare?', hy: 'Որո՞նք են հիմնական ռիսկերը՝ մատակարարման շղթա, հաճախորդներ, կարգավորում։' },
            yesLabel: { en: 'Multiple', uk: 'Багато', ro: 'Multiple', hy: 'Մի քանի' },
            noLabel: { en: 'Few', uk: 'Небагато', ro: 'Puține', hy: 'Քիչ' }
          },
          { en: "Are there dependencies on partners or technology we don't control?", uk: 'Чи є залежність від партнерів або технологій, які ми не контролюємо?', ro: 'Există dependențe de parteneri sau tehnologii pe care nu le controlăm?', hy: 'Կա՞ կախվածություն գործընկերներից կամ տեխնոլոգիաներից, որոնք մենք չենք վերահսկում։' }
        ]
      }
    ]
  },
  closingParagraphs: [
    {
      en: 'Based on the results of the screenings above, you can begin to identify the highest-scoring, most feasible circular options. Once you narrow down 1 to 3 options, you will be able to develop a viable business case which incorporates them into a viable strategy to use in the next phase. || For a template to help narrow down your options, see the "Shortlisting of Options" tool below. Using this tool can help you clarify key aspects each option brings to support your business case.',
      uk: 'На основі результатів відбору ви можете визначити циркулярні варіанти з найвищими оцінками та найбільшою здійсненністю. Коли ви звузите вибір до 1-3 варіантів, зможете розробити життєздатний бізнес-кейс і включити їх у стратегію для наступної фази. || Для шаблону, який допоможе звузити варіанти, перегляньте інструмент "Shortlisting of Options" нижче. Він допоможе уточнити ключові аспекти кожного варіанту для підтримки вашого бізнес-кейсу.',
      ro: 'Pe baza rezultatelor analizelor de mai sus, poți începe să identifici opțiunile circulare cu punctajul cel mai ridicat și cea mai mare fezabilitate. După ce restrângi lista la 1-3 opțiuni, vei putea dezvolta un caz de afaceri viabil care le transformă într-o strategie de folosit în faza următoare. || Pentru un șablon care te ajută să restrângi opțiunile, vezi instrumentul "Shortlisting of Options" de mai jos. Acesta te poate ajuta să clarifici aspectele-cheie ale fiecărei opțiuni pentru a susține cazul de afaceri.',
      hy: 'Վերեւի զտման արդյունքների հիման վրա կարող եք սկսել բացահայտել ամենաբարձր գնահատված եւ առավել իրագործելի շրջանաձեւ տարբերակները։ Երբ ընտրությունը նեղացնեք մինչեւ 1-3 տարբերակ, կկարողանաք մշակել կենսունակ բիզնես հիմնավորում, որը դրանք կներառի հաջորդ փուլում կիրառվող ռազմավարության մեջ։ || Տարբերակները նեղացնելու համար տեսեք ստորեւ ներկայացված "Shortlisting of Options" գործիքը։ Այն կօգնի հստակեցնել յուրաքանչյուր տարբերակի հիմնական կողմերը ձեր բիզնես հիմնավորումը աջակցելու համար։'
    }
  ]
};

/* 5. DETAILED SECTION 2 */
const verifyPotentialSection = {
  id: 'verify-potential',
  title: { en: 'Verify potential', uk: 'Перевірка потенціалу', ro: 'Verificarea potențialului', hy: 'Ներուժի ստուգում' },
  resourceTag: 'evaluate:verify-potential',
  paragraphs: [
    {
      en: "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. It is important to identify what hidden barriers could come into effect for each of the strategies, ideas and concepts you have identified. || Use the tools below to evaluate the business case you selected in Step 1 of this section or the ideas you developed in the Explore phase.",
      uk: 'Сильний бізнес-кейс враховує не лише потенційні вигоди, а й організаційні, операційні та ринкові зміни, потрібні для їх реалізації. Важливо визначити, які приховані бар’єри можуть виникнути для кожної зі стратегій, ідей і концепцій, які ви визначили. || Використовуйте інструменти нижче, щоб оцінити бізнес-кейс, вибраний у кроці 1 цього розділу, або ідеї, розроблені у фазі Explore.',
      ro: 'Un caz de afaceri solid ia în considerare nu doar beneficiile potențiale, ci și schimbările organizaționale, operaționale și de piață necesare pentru a le realiza. Este important să identifici ce bariere ascunse ar putea apărea pentru fiecare strategie, idee și concept identificat. || Folosește instrumentele de mai jos pentru a evalua cazul de afaceri selectat la pasul 1 al acestei secțiuni sau ideile dezvoltate în faza Explore.',
      hy: 'Ուժեղ բիզնես հիմնավորումը հաշվի է առնում ոչ միայն հնարավոր օգուտները, այլ նաեւ կազմակերպական, գործառնական եւ շուկայական փոփոխությունները, որոնք անհրաժեշտ են դրանք իրագործելու համար։ Կարեւոր է բացահայտել, թե ինչ թաքնված խոչընդոտներ կարող են առաջանալ ձեր բացահայտած յուրաքանչյուր ռազմավարության, գաղափարի եւ հայեցակարգի համար։ || Օգտագործեք ստորեւ ներկայացված գործիքները՝ գնահատելու այս բաժնի 1-ին քայլում ընտրված բիզնես հիմնավորումը կամ Explore փուլում մշակված գաղափարները։'
    }
  ]
};

/* 6. DETAILED SECTION 3 */
const testPilotSection = {
  id: 'test-and-pilot',
  title: { en: 'Test & Pilot', uk: 'Тестування і пілотування', ro: 'Testează și pilotează', hy: 'Փորձարկել եւ պիլոտավորել' },
  resourceTag: 'evaluate:test-and-pilot',
  paragraphs: [
    {
      en: "Before an evaluated circular opportunity becomes a full implementation project, it's helpful to test the logic at a smaller scale. Testing ideas or prototypes in the real world can help to evaluate a solution. || A pilot helps you check whether the idea works in practice, who needs to be involved, and which assumptions still need evidence.|| A useful pilot should be time-bounded, specific and measurable. The tools, such as the test card, can help you define what you want to learn, what success would look like, who is responsible, and which data or feedback will be collected.|| This helps surface missing partners, unclear responsibilities, technical barriers and material flow gaps before you commit time and money to implementation.||The output of this section should be a clear pilot concept that can be turned into an implementation plan in the next phase.",
      uk: 'Перш ніж оцінена циркулярна можливість стане повним проєктом впровадження, корисно протестувати її логіку в меншому масштабі. Тестування ідей або прототипів у реальному середовищі допомагає оцінити рішення. || Пілот допомагає перевірити, чи працює ідея на практиці, хто має бути залучений і які припущення ще потребують доказів.|| Корисний пілот має бути обмеженим у часі, конкретним і вимірюваним. Інструменти, такі як test card, допоможуть визначити, що ви хочете дізнатися, як виглядатиме успіх, хто відповідальний і які дані або відгуки будуть зібрані.|| Це допомагає виявити відсутніх партнерів, нечіткі обов’язки, технічні бар’єри та прогалини в матеріальних потоках до того, як ви вкладете час і кошти у впровадження.|| Результатом цього розділу має бути чітка пілотна концепція, яку можна перетворити на план впровадження в наступній фазі.',
      ro: 'Înainte ca o oportunitate circulară evaluată să devină un proiect complet de implementare, este util să îi testezi logica la scară mai mică. Testarea ideilor sau prototipurilor în lumea reală poate ajuta la evaluarea soluției. || Un pilot te ajută să verifici dacă ideea funcționează în practică, cine trebuie implicat și ce ipoteze mai au nevoie de dovezi.|| Un pilot util trebuie să fie limitat în timp, specific și măsurabil. Instrumente precum test card te pot ajuta să definești ce vrei să înveți, cum arată succesul, cine este responsabil și ce date sau feedback vor fi colectate.|| Acest lucru scoate la iveală parteneri lipsă, responsabilități neclare, bariere tehnice și lacune în fluxurile de materiale înainte de a investi timp și bani în implementare.|| Rezultatul acestei secțiuni ar trebui să fie un concept pilot clar, care poate fi transformat într-un plan de implementare în faza următoare.',
      hy: 'Մինչ գնահատված շրջանաձեւ հնարավորությունը դառնա ամբողջական իրականացման նախագիծ, օգտակար է դրա տրամաբանությունը փորձարկել փոքր մասշտաբով։ Իրական միջավայրում գաղափարների կամ նախատիպերի փորձարկումը կարող է օգնել գնահատել լուծումը։ || Պիլոտը օգնում է ստուգել՝ արդյոք գաղափարը գործնականում աշխատում է, ով պետք է ներգրավվի եւ որ ենթադրություններն են դեռ ապացույցների կարիք ունենում։|| Օգտակար պիլոտը պետք է լինի ժամանակով սահմանափակ, կոնկրետ եւ չափելի։ Գործիքները, օրինակ՝ test card-ը, կարող են օգնել սահմանել, թե ինչ եք ուզում սովորել, ինչպիսին է հաջողությունը, ով է պատասխանատու եւ ինչ տվյալներ կամ հետադարձ կապ է հավաքվելու։|| Սա օգնում է բացահայտել բացակայող գործընկերներին, անհստակ պատասխանատվությունները, տեխնիկական խոչընդոտները եւ նյութական հոսքերի բացերը՝ մինչեւ ժամանակ եւ գումար ներդնելը իրականացման մեջ։|| Այս բաժնի արդյունքը պետք է լինի հստակ պիլոտային հայեցակարգ, որը հաջորդ փուլում կարող է վերածվել իրականացման պլանի։'
    }
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумок фази', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    { en: 'Use this checklist to confirm that you have shortlisted strategies, verified their potential and defined a clear pilot focus for your selected circular opportunity.', uk: 'Скористайтеся цим чеклістом, щоб підтвердити, що ви відібрали стратегії, перевірили їхній потенціал і визначили чіткий фокус пілоту для вибраної циркулярної можливості.', ro: 'Folosește această listă pentru a confirma că ai selectat strategiile, le-ai verificat potențialul și ai definit un focus pilot clar pentru oportunitatea circulară aleasă.', hy: 'Օգտագործեք այս ստուգաթերթը՝ հաստատելու համար, որ զտել եք ռազմավարությունները, ստուգել դրանց ներուժը եւ սահմանել հստակ պիլոտային ուղղություն ընտրված շրջանաձեւ հնարավորության համար։' },
    { en: 'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.', uk: 'Щоб перейти до наступної фази, позначте всі пункти й натисніть кнопку після чекліста або поверніться на головну сторінку, щоб знайти іншу відповідну фазу, секторний інструмент чи каталог інструментів.', ro: 'Pentru a continua la faza următoare, bifează toate căsuțele și apasă butonul de după listă sau revino la pagina principală pentru a găsi faza potrivită, instrumente sectoriale ori catalogul de instrumente.', hy: 'Հաջորդ փուլին անցնելու համար նշեք բոլոր կետերը եւ սեղմեք ստուգաթերթից հետո հայտնվող կոճակը, կամ վերադարձեք գլխավոր էջ՝ համապատասխան փուլը, ոլորտային գործիքը կամ գործիքների էջը գտնելու համար։' }
  ],
  checklist: [
    { en: 'Selected one or more circular opportunities to screen through the shortlist strategies step', uk: 'Вибрано одну або кілька циркулярних можливостей для відбору на кроці короткого списку стратегій', ro: 'Ai selectat una sau mai multe oportunități circulare pentru analiză în pasul de selecție a strategiilor', hy: 'Ընտրվել է մեկ կամ մի քանի շրջանաձեւ հնարավորություն՝ ռազմավարությունների զտման քայլում դիտարկելու համար' },
    { en: 'Narrowed down one to three feasible circular options for further development', uk: 'Звужено вибір до одного-трьох здійсненних циркулярних варіантів для подальшого розвитку', ro: 'Ai restrâns lista la una-trei opțiuni circulare fezabile pentru dezvoltare ulterioară', hy: 'Ընտրությունը նեղացվել է մեկից երեք իրագործելի շրջանաձեւ տարբերակի՝ հետագա զարգացման համար' },
    { en: 'Evaluated circular options by identifying key barriers, risks and enabling conditions', uk: 'Оцінено циркулярні варіанти через визначення ключових бар’єрів, ризиків і умов, що сприяють реалізації', ro: 'Ai evaluat opțiunile circulare prin identificarea principalelor bariere, riscuri și condiții favorabile', hy: 'Շրջանաձեւ տարբերակները գնահատվել են՝ բացահայտելով հիմնական խոչընդոտները, ռիսկերը եւ նպաստող պայմանները' },
    { en: 'Defined what should be tested in a pilot before implementation', uk: 'Визначено, що потрібно протестувати в пілоті перед впровадженням', ro: 'Ai definit ce trebuie testat într-un pilot înainte de implementare', hy: 'Սահմանվել է, թե ինչ պետք է փորձարկվի պիլոտում մինչեւ իրականացումը' },
  ]
};

export const evaluate = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [shortlistStrategiesSection, verifyPotentialSection, testPilotSection],
  phaseSummary
});
