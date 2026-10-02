import { defineJourneyPhasePage } from '../../technical/journey-phase-page-utils.js';

/*
  PHASE 2: ASSESS
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect links and tools.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '02',
  slug: 'assess',
  shortName: { en: 'Phase 2', uk: 'Етап 2', ro: 'Faza 2', hy: 'Փուլ 2' },
  title: { en: 'Assess', uk: 'Оцінювання', ro: 'Evaluează', hy: 'Գնահատել' },
  colourClass: 'phase-card-lime',
  description: {
    en: 'Provides tools to assess Circular Economy adoption, identify impacts and gaps, perform hotspot analysis, and set a baseline.',
    uk: 'Надає інструменти для оцінювання впровадження циркулярної економіки, визначення впливів і прогалин, аналізу гарячих точок та встановлення базової лінії.',
    ro: 'Oferă instrumente pentru evaluarea adoptării economiei circulare, identificarea impacturilor și lacunelor, analiza punctelor critice și stabilirea unei baze de referință.',
    hy: 'Տրամադրում է գործիքներ շրջանաձեւ տնտեսության կիրառումը գնահատելու, ազդեցություններն ու բացերը գտնելու, խնդրահարույց կետերը վերլուծելու եւ ելակետ սահմանելու համար։'
  }
};

const hero = {
  intro: {
    en: 'This phase helps you assess your starting point. It includes tools and guidance for assessing circular economy maturity, identifying hotspots and establishing an initial baseline.',
    uk: 'Цей етап допомагає визначити вашу вихідну точку. Він містить інструменти та рекомендації для оцінки рівня циркулярної зрілості бізнесу, виявлення проблемних зон («критичних точок») і формування базових показників.',
    ro: 'Această fază te ajută să îți evaluezi punctul de plecare. Include instrumente și orientări pentru evaluarea maturității economiei circulare, identificarea punctelor critice și stabilirea unei baze inițiale.',
    hy: 'Այս փուլը օգնում է գնահատել ձեր մեկնարկային կետը։ Այն ներառում է գործիքներ եւ ուղեցույցներ շրջանաձեւ տնտեսության հասունությունը գնահատելու, խնդրահարույց կետերը գտնելու եւ նախնական ելակետ սահմանելու համար։'
  },
  icon: '/icons/phase-icons/icon-assess.png',
  iconAlt: { en: 'Assess phase icon', uk: 'Іконка фази Оцінювання', ro: 'Pictograma fazei Evaluează', hy: 'Գնահատել փուլի պատկերակ' }
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'maturity-assessment', label: { en: 'Assess maturity', uk: 'Оцінка зрілості', ro: 'Evaluează maturitatea', hy: 'Գնահատել հասունությունը' } },
  { sectionId: 'mapping-resources', label: { en: 'Map resources', uk: 'Картування ресурсів', ro: 'Cartografiază resursele', hy: 'Քարտեզագրել ռեսուրսները' } },
  { sectionId: 'hotspot-analysis', label: { en: 'Analyse hotspots', uk: 'Аналіз «критичних точок»', ro: 'Analizează punctele critice', hy: 'Վերլուծել խնդրահարույց կետերը' } }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: { en: 'Where are you?', uk: 'Де Ви перебуваєте зараз?', ro: 'Unde te afli?', hy: 'Որտե՞ղ եք հիմա։' },
  paragraphs: [
    { en: 'Before a business can become more circular, it needs to understand where it stands today.', uk: 'Перш ніж запроваджувати циркулярні практики, підприємству необхідно чітко зрозуміти свій поточний стан.', ro: 'Înainte ca o afacere să devină mai circulară, trebuie să înțeleagă unde se află astăzi.', hy: 'Մինչեւ բիզնեսը կարողանա դառնալ ավելի շրջանաձեւ, պետք է հասկանալ, թե որտեղ է գտնվում այսօր։' },
    { en: 'This phase guides you through a structured diagnostic process, assessing circular economy maturity, mapping resource flows, and identifying the specific hotspots where waste, inefficiency, or environmental impact is highest.', uk: 'Цей етап веде вас через послідовний процес діагностики: оцінювання рівня циркулярної зрілості, картування матеріальних і ресурсних потоків та виявлення конкретних критичних ділянок, де втрати, неефективність або навантаження на довкілля найвищі.', ro: 'Această fază te ghidează printr-un proces diagnostic structurat: evaluarea maturității economiei circulare, cartografierea fluxurilor de resurse și identificarea punctelor critice în care deșeurile, ineficiența sau impactul asupra mediului sunt cele mai ridicate.', hy: 'Այս փուլը ձեզ առաջնորդում է կառուցվածքային ախտորոշման գործընթացով՝ գնահատելով շրջանաձեւ տնտեսության հասունությունը, քարտեզագրելով ռեսուրսների հոսքերը եւ գտնելով այն կետերը, որտեղ թափոնները, անարդյունավետությունը կամ բնապահպանական ազդեցությունը ամենաբարձրն են։' },
    { en: 'Rather than jumping straight to solutions, this phase builds the factual foundation that makes every subsequent decision more targeted and effective. The phase works through three interconnected stages. As for example, the resource mapping is very important, as it builds the groundwork for the hotspot analysis and shows where resources can be used better. ', uk: 'Замість того щоб одразу хапатися за перші-ліпші рішення, цей етап створює фактичну базу, яка робить усі подальші кроки точнішими та результативнішими. Робота складається із трьох взаємоповʼязаних кроків. Зокрема картування ресурсів вкрай важливе, оскільки воно закладає основу для аналізу критичних точок і показує резерви ефективнішого використання матеріалів та енергії.', ro: 'În loc să treci direct la soluții, această fază construiește baza factuală care face fiecare decizie ulterioară mai țintită și mai eficientă. Faza include trei etape conectate. De exemplu, cartografierea resurselor este foarte importantă, deoarece pregătește analiza punctelor critice și arată unde resursele pot fi folosite mai bine.', hy: 'Լուծումներին անմիջապես անցնելու փոխարեն այս փուլը ստեղծում է փաստական հիմք, որը հաջորդ որոշումները դարձնում է ավելի նպատակային եւ արդյունավետ։ Փուլը բաղկացած է երեք փոխկապակցված քայլերից։ Օրինակ՝ ռեսուրսների քարտեզագրումը շատ կարեւոր է, քանի որ հիմք է ստեղծում խնդրահարույց կետերի վերլուծության համար եւ ցույց է տալիս, թե որտեղ կարելի է ռեսուրսներն ավելի լավ օգտագործել։' }
  ],
  cards: [
    {
      sectionId: 'maturity-assessment',
      number: '1',
      title: { en: 'Maturity Assessment', uk: 'Оцінювання зрілості', ro: 'Evaluarea maturității', hy: 'Հասունության գնահատում' },
      description: { en: 'Assess how circular your business already is across key dimensions.', uk: 'Оцініть рівень циркулярності вашого бізнесу за ключовими напрямами.', ro: 'Evaluează cât de circulară este deja afacerea ta în dimensiunile-cheie.', hy: 'Գնահատեք, թե որքան շրջանաձեւ է ձեր բիզնեսը հիմնական ուղղություններով։' },
      keyOutputs: [{ en: 'Circular Economy maturity score', uk: 'Рівень циркулярної зрілості бізнесу (у балах)', ro: 'Scor de maturitate în economia circulară', hy: 'Շրջանաձեւ տնտեսության հասունության գնահատական' }, { en: 'Priority areas', uk: 'Пріоритетні напрями для вдосконалення', ro: 'Zone prioritare', hy: 'Առաջնահերթ ոլորտներ' }]
    },
    {
      sectionId: 'mapping-resources',
      number: '2',
      title: { en: 'Mapping Resources', uk: 'Картування ресурсів', ro: 'Cartografierea resurselor', hy: 'Ռեսուրսների քարտեզագրում' },
      description: { en: 'Map your resource inputs, outputs, waste streams and energy flows systematically.', uk: 'Систематично відобразіть вхідні ресурси, готову продукцію, потоки відходів та енергоспоживання.', ro: 'Cartografiază sistematic intrările și ieșirile de resurse, fluxurile de deșeuri și fluxurile de energie.', hy: 'Համակարգված քարտեզագրեք ռեսուրսների մուտքերը, ելքերը, թափոնների եւ էներգիայի հոսքերը։' },
      keyOutputs: [{ en: 'Input/output inventory', uk: 'Баланс вхідних і вихідних потоків (інвентаризація)', ro: 'Inventar de intrări/ieșiri', hy: 'Մուտքերի/ելքերի ցուցակ' }, { en: 'Waste stream overview', uk: 'Огляд структури відходів', ro: 'Prezentarea fluxurilor de deșeuri', hy: 'Թափոնների հոսքերի ակնարկ' }]
    },
    {
      sectionId: 'hotspot-analysis',
      number: '3',
      title: { en: 'Hotspot Analysis', uk: 'Аналіз «критичних точок»', ro: 'Analiza punctelor critice', hy: 'Խնդրահարույց կետերի վերլուծություն' },
      description: { en: 'Pinpoint the most resource-intensive or wasteful activities in your operations.', uk: 'Визначте найбільш ресурсомісткі процеси та операції з найбільшими втратами у вашій діяльності.', ro: 'Identifică activitățile cele mai intensive în resurse sau cele mai risipitoare din operațiunile tale.', hy: 'Գտեք ձեր գործունեության մեջ ամենառեսուրսատար կամ ամենաշատ թափոն առաջացնող գործողությունները։' },
      keyOutputs: [{ en: 'Hotspot map', uk: 'Карта критичних зон («гарячих точок»)', ro: 'Hartă a punctelor critice', hy: 'Խնդրահարույց կետերի քարտեզ' }, { en: 'Priorities for investigation', uk: 'Пріоритети для подальшого детального дослідження', ro: 'Priorități pentru analiză', hy: 'Ուսումնասիրության առաջնահերթություններ' }]
    }
  ]
};

/* 4. DETAILED SECTION 1: MATURITY ASSESSMENT */
/*
  RELEVANT TOOLS:
  Edit resources in src/lib/content/editable/tools/tool-catalogue.js.
  Add 'assess:maturity-assessment' to:
  placements.phaseSections
*/
const maturitySection = {
  id: 'maturity-assessment',
  title: { en: 'Maturity Assessment', uk: 'Оцінювання зрілості', ro: 'Evaluarea maturității', hy: 'Հասունության գնահատում' },
  resourceTag: 'assess:maturity-assessment',
  /* EDIT THIS BELOW */
  paragraphs: [
    { en: 'The maturity assessment gives you a structured way to understand your current level of circular economy readiness. It helps you reflect on strategy, operations, products, supply chain practices and internal capabilities before proposing solutions. This creates a shared starting point for discussion and makes it easier to decide where more detailed mapping or improvement work is needed.|| The tools in this section are collections of good questions to ask before moving on to action. If there are relevant questions which are hard to answer then the first action step is to collect enough insights, data or understanding to be able to answer these questions first.', uk: 'Оцінка зрілості дає змогу системно визначити поточний рівень готовності вашого підприємства до циркулярної економіки. Вона допомагає проаналізувати стратегію, операційні процеси, продукцію, практики в ланцюзі постачання та внутрішні компетенції команди ще до формулювання рішень. Це створює спільну основу для обговорення та спрощує вибір напрямів, які потребують детальнішого аналізу чи першочергового вдосконалення. || Інструменти цього розділу – це перелік важливих запитань, на які варто відповісти перед переходом до дій. Якщо на якісь суттєві запитання важко знайти відповідь, першим практичним кроком має стати збір необхідних даних, спостережень і фактів, які дадуть змогу усунути ці прогалини.', ro: 'Evaluarea maturității îți oferă o modalitate structurată de a înțelege nivelul actual de pregătire pentru economia circulară. Te ajută să reflectezi asupra strategiei, operațiunilor, produselor, practicilor din lanțul de aprovizionare și capacităților interne înainte de a propune soluții. Astfel se creează un punct comun de pornire pentru discuții și devine mai ușor să decizi unde este nevoie de cartografiere sau îmbunătățire mai detaliată. || Instrumentele din această secțiune sunt seturi de întrebări utile înainte de a trece la acțiune. Dacă anumite întrebări relevante sunt greu de răspuns, primul pas este să colectezi suficiente informații, date sau înțelegere pentru a putea răspunde.', hy: 'Հասունության գնահատումը կառուցվածքային ձեւ է տալիս հասկանալու շրջանաձեւ տնտեսությանը պատրաստվածության ձեր ներկա մակարդակը։ Այն օգնում է քննարկել ռազմավարությունը, գործողությունները, արտադրանքը, մատակարարման շղթայի գործելակերպերը եւ ներքին կարողությունները՝ նախքան լուծումներ առաջարկելը։ Սա ստեղծում է ընդհանուր մեկնարկային կետ եւ հեշտացնում է որոշել, թե որտեղ է պետք ավելի մանրամասն քարտեզագրում կամ բարելավում։ || Այս բաժնի գործիքները օգտակար հարցերի հավաքածուներ են՝ գործողության անցնելուց առաջ։ Եթե կան կարեւոր հարցեր, որոնց դժվար է պատասխանել, առաջին քայլը բավարար տվյալներ, պատկերացում կամ գիտելիք հավաքելն է։' }
  ]
};

/* 5. DETAILED SECTION 2: MAPPING RESOURCES */
/*
  RELEVANT TOOLS:
  In src/lib/content/editable/tools/tool-catalogue.js, add 'assess:mapping-resources' to:
  placements.phaseSections
*/
const mappingResourcesSection = {
  id: 'mapping-resources',
  title: { en: 'Mapping Resources', uk: 'Картування ресурсів', ro: 'Cartografierea resurselor', hy: 'Ռեսուրսների քարտեզագրում' },
  resourceTag: 'assess:mapping-resources',
  paragraphs: [
    { en: 'Mapping your resources is a critical step to creating a baseline. A baseline captures your business as it is today: all materials entering and leaving, energy used, water consumed, and waste generated. It gives you a factual starting point to measure improvement over time. || Many circular opportunities are invisible until you map your flows. A simple resource map reveals which inputs cost the most, where waste is highest, and where efficiency gains are possible. || On the image to the side, you can see an example of how an input/output map can look like. You can start by creating your own input/output map inspired by the example, as either a poster for multiple people to map on or an Excel sheet for a digital version. The map can be as simple or as detailed as you need, but it should capture the main flows of materials, energy, and water. || Whether you are a manufacturing, construction or service-based business with only one office, you can map your inputs that are required for your business to function. || If you need more advanced tools you can look into Material Flow Analysis (MFA) or the Stan tools.', uk: 'Картування ресурсів – це ключовий крок для формування базової лінії (вихідних показників). Базова лінія фіксує поточний стан вашого бізнесу: усі матеріали, що надходять і виходять, обсяги спожитої енергії та води, а також утворені відходи. Вона дає фактичну відправну точку для відстеження та вимірювання прогресу в часі. || Багато можливостей циркулярної економіки залишаються непомітними, доки Ви наочно не зобразите свої потоки. Проста карта ресурсів показує, які вхідні матеріали коштують найбільше, де утворюється найбільше відходів і де криється потенціал для підвищення ефективності. || На зображенні поруч показано, як може виглядати карта вхідних і вихідних потоків. Ви можете створити власну карту за цим прикладом: у вигляді постера для спільної командної роботи або в таблиці Excel як цифровий варіант. Карта може бути настільки простою або детальною, наскільки це потрібно саме вам, проте вона обов ʼязково має охоплювати основні потоки матеріалів, енергії та води. || Незалежно від того, чи працюєте Ви у виробництві, будівництві або сфері послуг з єдиним офісом, Ви завжди можете нанести на карту вхідні ресурси, необхідні для роботи вашого бізнесу. || Якщо вам потрібні складніші аналітичні інструменти, зверніть увагу на аналіз матеріальних потоків (MFA) або програмні рішення на кшталт Stan.', ro: 'Cartografierea resurselor este un pas esențial pentru crearea unei baze de referință. Baza surprinde afacerea așa cum este astăzi: materialele care intră și ies, energia folosită, apa consumată și deșeurile generate. Ea oferă un punct factual de pornire pentru măsurarea îmbunătățirilor în timp. || Multe oportunități circulare rămân invizibile până când îți cartografiezi fluxurile. O hartă simplă a resurselor arată ce intrări costă cel mai mult, unde deșeurile sunt cele mai mari și unde sunt posibile câștiguri de eficiență. || În imaginea alăturată poți vedea un exemplu de hartă intrări/ieșiri. Poți începe prin a crea propria hartă inspirată de acest exemplu, fie ca poster pentru lucru în echipă, fie ca fișier Excel pentru o versiune digitală. Harta poate fi simplă sau detaliată, dar ar trebui să surprindă principalele fluxuri de materiale, energie și apă. || Indiferent dacă ești o afacere de producție, construcții sau servicii cu un singur birou, poți cartografia intrările necesare funcționării afacerii. || Dacă ai nevoie de instrumente mai avansate, poți analiza Material Flow Analysis (MFA) sau instrumentele STAN.', hy: 'Ռեսուրսների քարտեզագրումը ելակետ ստեղծելու կարեւոր քայլ է։ Ելակետը ցույց է տալիս բիզնեսի ներկա վիճակը՝ մուտք գործող եւ դուրս եկող բոլոր նյութերը, օգտագործված էներգիան, սպառված ջուրը եւ առաջացած թափոնները։ Այն տալիս է փաստական մեկնարկային կետ՝ ժամանակի ընթացքում բարելավումը չափելու համար։ || Շատ շրջանաձեւ հնարավորություններ անտեսանելի են, մինչեւ հոսքերը չքարտեզագրվեն։ Պարզ ռեսուրսային քարտեզը ցույց է տալիս, թե որ մուտքերն են ամենաթանկը, որտեղ են թափոնները շատ եւ որտեղ են հնարավոր արդյունավետության բարելավումներ։ || Կողքի պատկերում կարելի է տեսնել մուտք/ելք քարտեզի օրինակ։ Կարող եք ստեղծել ձեր սեփական քարտեզը՝ օրինակով ոգեշնչված, որպես պաստառ թիմային աշխատանքի համար կամ Excel աղյուսակ թվային տարբերակի համար։ Քարտեզը կարող է լինել պարզ կամ մանրամասն, բայց պետք է ընդգրկի նյութերի, էներգիայի եւ ջրի հիմնական հոսքերը։ || Անկախ նրանից՝ արտադրական, շինարարական, թե ծառայությունների բիզնես եք մեկ գրասենյակով, կարող եք քարտեզագրել այն մուտքերը, որոնք անհրաժեշտ են բիզնեսի աշխատանքի համար։ || Ավելի առաջադեմ գործիքների համար կարող եք դիտարկել Material Flow Analysis (MFA) կամ STAN գործիքները։' }
  ],
  image: {
    src: '/phase-content/phase-2/mapping-resources-input-output-example.png',
    alt: { en: 'Example input and output map for a small packaging manufacturer', uk: 'Приклад карти входів і виходів для малого виробника пакування', ro: 'Exemplu de hartă intrări/ieșiri pentru un mic producător de ambalaje', hy: 'Մուտք/ելք քարտեզի օրինակ փոքր փաթեթավորման արտադրողի համար' },
    caption: { en: 'Example input/output map showing resource flows through a production process.', uk: 'Приклад карти вхідних і вихідних потоків, що відображає рух ресурсів у виробничому процесі.', ro: 'Exemplu de hartă intrări/ieșiri care arată fluxurile de resurse într-un proces de producție.', hy: 'Մուտք/ելք քարտեզի օրինակ, որը ցույց է տալիս ռեսուրսների հոսքերը արտադրական գործընթացում։' },
    zoomable: true
  }
};

/* 6. DETAILED SECTION 3: HOTSPOT ANALYSIS */
/*
  RELEVANT TOOLS:
  In src/lib/content/editable/tools/tool-catalogue.js, add 'assess:hotspot-analysis' to:
  placements.phaseSections
*/
const hotspotSection = {
  id: 'hotspot-analysis',
  title: { en: 'Hotspot Analysis', uk: 'Аналіз «критичних точок»', ro: 'Analiza punctelor critice', hy: 'Խնդրահարույց կետերի վերլուծություն' },
  resourceTag: 'assess:hotspot-analysis',
  paragraphs: [
    { en: 'A hotspot is a point in your business where resource use, waste, cost, or environmental impact is disproportionately high. Hotspots are the priority areas where small changes can deliver the greatest circular economy benefits.', uk: '«Критична точка» (гаряча точка) – це дільниця або процес у діяльності підприємства, де споживання ресурсів, утворення відходів, фінансові витрати або навантаження на довкілля непропорційно високі. ЦСаме такі критичні ділянки є пріоритетними напрямами: навіть невеликі зміни тут можуть дати найбільший ефект для переходу до циркулярної економіки.', ro: 'Un punct critic este un loc din afacerea ta unde utilizarea resurselor, deșeurile, costurile sau impactul asupra mediului sunt disproporționat de ridicate. Punctele critice sunt zone prioritare în care schimbările mici pot aduce cele mai mari beneficii circulare.', hy: 'Խնդրահարույց կետը բիզնեսի այն հատվածն է, որտեղ ռեսուրսների օգտագործումը, թափոնները, ծախսերը կամ բնապահպանական ազդեցությունը անհամաչափ բարձր են։ Դրանք առաջնահերթ ոլորտներ են, որտեղ փոքր փոփոխությունները կարող են տալ ամենամեծ շրջանաձեւ օգուտները։' }
  ],
  baselineCards: [
    {
      title: { en: 'Energy Hotspots', uk: 'Енергетичні «критичні точки»', ro: 'Puncte critice de energie', hy: 'Էներգիայի խնդրահարույց կետեր' },
      text: { en: 'Processes or equipment consuming disproportionate electricity, heat or fuel.', uk: 'Процеси або обладнання, що споживають надмірну кількість електроенергії, тепла чи палива.', ro: 'Procese sau echipamente care consumă disproporționat de multă electricitate, căldură sau combustibil.', hy: 'Գործընթացներ կամ սարքավորումներ, որոնք անհամաչափ շատ էլեկտրաէներգիա, ջերմություն կամ վառելիք են սպառում։' },
      icon: 'lightning'
    },
    {
      title: { en: 'Material Hotspots', uk: 'Матеріальні «критичні точки»', ro: 'Puncte critice de materiale', hy: 'Նյութերի խնդրահարույց կետեր' },
      text: { en: 'Materials that are expensive, scarce, or lost as waste in significant quantities.', uk: 'Матеріали та сировина, які є дорогими, дефіцитними або втрачаються у значних обсягах як відходи..', ro: 'Materiale costisitoare, rare sau pierdute ca deșeuri în cantități semnificative.', hy: 'Նյութեր, որոնք թանկ են, սակավ են կամ զգալի քանակով կորչում են որպես թափոն։' },
      icon: 'box'
    },
    {
      title: { en: 'Water Hotspots', uk: 'Водні «критичні точки»', ro: 'Puncte critice de apă', hy: 'Ջրի խնդրահարույց կետեր' },
      text: { en: 'Production stages consuming or polluting large volumes of water.', uk: 'Етапи виробництва, повʼязані з надмірним забором або забрудненням значних обсягів води.', ro: 'Etape de producție care consumă sau poluează volume mari de apă.', hy: 'Արտադրական փուլեր, որոնք սպառում կամ աղտոտում են մեծ ծավալի ջուր։' },
      icon: 'water-level'
    }
  ],
  factbox: {
    title: { en: 'Identify Hotspots', uk: 'Як виявити «критичні точки»', ro: 'Identifică punctele critice', hy: 'Գտեք խնդրահարույց կետերը' },
    items: [
      { en: 'Review your input/output map and highlight the largest flows', uk: 'Проаналізуйте карту вхідних і вихідних потоків та позначте найбільші з них', ro: 'Revizuiește harta intrări/ieșiri și evidențiază cele mai mari fluxuri', hy: 'Վերանայեք մուտք/ելք քարտեզը եւ ընդգծեք ամենամեծ հոսքերը' },
      { en: 'Flag activities with high energy or water use', uk: 'Зверніть увагу на процеси з високим рівнем споживання енергії чи води', ro: 'Marchează activitățile cu consum ridicat de energie sau apă', hy: 'Նշեք բարձր էներգիայի կամ ջրի սպառում ունեցող գործողությունները' },
      { en: 'Identify the costliest waste streams', uk: 'Визначте потоки відходів, утилізація яких або втрати на яких коштують найбільше', ro: 'Identifică cele mai costisitoare fluxuri de deșeuri', hy: 'Գտեք ամենածախսատար թափոնների հոսքերը' },
      { en: 'Look for processes with high defect or rework rates', uk: 'Знайдіть виробничі процеси з високим рівнем браку або повторного виконання робіт', ro: 'Caută procese cu rate ridicate de defecte sau relucrări', hy: 'Գտեք բարձր թերությունների կամ վերամշակման մակարդակ ունեցող գործընթացները' },
      { en: 'Consider supplier-side risks (price volatility, scarcity)', uk: 'Оцініть ризики з боку постачальників (коливання цін, дефіцит сировини)', ro: 'Ia în considerare riscurile de la furnizori (volatilitatea prețurilor, raritate)', hy: 'Հաշվի առեք մատակարարների ռիսկերը (գների տատանում, սակավություն)' },
      { en: 'Gather staff insights (they often know where waste happens)', uk: 'Залучіть спостереження працівників (вони зазвичай найкраще знають, де виникають реальні втрати)', ro: 'Colectează observațiile angajaților (ei știu adesea unde apare risipa)', hy: 'Հավաքեք աշխատակիցների դիտարկումները (նրանք հաճախ գիտեն, թե որտեղ են առաջանում կորուստները)' }
    ]
  },
  closingParagraphs: [
    { en: 'Your hotspot analysis directly feeds into Phase 3 (Explore) - once you know where your biggest impacts are, you can identify the most impactful circular strategies to address them.', uk: 'Результати аналізу «критичних точок» слугують прямою основою для Етапу 3 (Дослідження): щойно Ви визначите ділянки найбільшого впливу, Ви зможете підібрати найрезультативніші циркулярні стратегії для їх оптимізації.', ro: 'Analiza punctelor critice duce direct către Faza 3 (Explorează): odată ce știi unde se află cele mai mari impacturi, poți identifica strategiile circulare cu cel mai mare efect pentru a le aborda.', hy: 'Խնդրահարույց կետերի վերլուծությունը անմիջապես տանում է դեպի Փուլ 3 (Ուսումնասիրել). երբ գիտեք, որտեղ են ձեր ամենամեծ ազդեցությունները, կարող եք գտնել դրանց լուծման ամենաարդյունավետ շրջանաձեւ ռազմավարությունները։' }
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумки етапу', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    { en: 'Use this checklist to confirm that you have mapped a practical baseline and identified your key hotspots.', uk: 'Скористайтеся цим чеклістом, щоб переконатися, що Ви сформували практичну базову лінію (вихідні показники) та визначили свої ключові критичні зони («гарячі точки»).', ro: 'Folosește această listă pentru a confirma că ai cartografiat o bază practică și ai identificat punctele critice principale.', hy: 'Օգտագործեք այս ստուգաթերթը՝ համոզվելու համար, որ քարտեզագրել եք գործնական ելակետը եւ գտել հիմնական խնդրահարույց կետերը։' },
    { en: 'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.', uk: 'Щоб перейти до наступного етапу, позначте всі пункти та натисніть кнопку, яка з´явиться під чеклістом. Також Ви можете повернутися на головну сторінку, щоб обрати інший відповідний етап, галузеві інструменти або відкрити каталог інструментів.', ro: 'Pentru a continua la faza următoare, bifează toate căsuțele și apasă butonul de după listă sau revino la pagina principală pentru a găsi faza potrivită, instrumente sectoriale ori catalogul de instrumente.', hy: 'Հաջորդ փուլին անցնելու համար նշեք բոլոր կետերը եւ սեղմեք ստուգաթերթից հետո հայտնվող կոճակը, կամ վերադարձեք գլխավոր էջ՝ համապատասխան փուլը, ոլորտային գործիքը կամ գործիքների էջը գտնելու համար։' }
  ],
  checklist: [
    { en: 'Mapped your resource inputs, outputs, and waste streams', uk: 'Складено карту вхідних і вихідних матеріальних потоків, а також потоків відходів', ro: 'Ai cartografiat intrările, ieșirile și fluxurile de deșeuri', hy: 'Քարտեզագրվել են ռեսուրսների մուտքերը, ելքերը եւ թափոնների հոսքերը' },
    { en: 'Identified your main hotspots (e.g. energy, materials, water)', uk: 'Визначено головні «критичні точки» (наприклад, енергія, матеріали, вода)', ro: 'Ai identificat principalele puncte critice, de exemplu energie, materiale sau apă', hy: 'Գտել եք հիմնական խնդրահարույց կետերը, օրինակ՝ էներգիա, նյութեր կամ ջուր' },
    { en: 'Explored practical tools  (e.g. Smart Circular Economy Assessment (SCEA), I-GO, ready2LOOP, Hotspot Analysis Tool, and Footprint Calculator)', uk: 'Опрацьовано практичні інструменти (зокрема Інструмент оцінювання «розумної» циркулярної економіки (SCEA), платформу I-GO, опитувальник ready2LOOP, Інструмент аналізу «критичних точок» (Hotspot Analysis Tool) та Калькулятор екологічного сліду (Footprint Calculator).', ro: 'Ai explorat instrumente practice, de exemplu Smart Circular Economy Assessment (SCEA), I-GO, ready2LOOP, Hotspot Analysis Tool și Footprint Calculator', hy: 'Ուսումնասիրվել են գործնական գործիքներ, օրինակ՝ Smart Circular Economy Assessment (SCEA), I-GO, ready2LOOP, Hotspot Analysis Tool եւ Footprint Calculator' }
  ]
};

export const assess = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [maturitySection, mappingResourcesSection, hotspotSection],
  phaseSummary
});
