/*
  Tool Catalogue entries.

  HOW TO ADD A TOOL:
  1. Copy one complete { ... } block below.
  2. Give it a unique id and slug.
  3. Replace all visible text, taxonomy values and the toolLink.
  4. Set journeyPhases using one or more exact phase names:
     Learn, Assess, Explore, Evaluate, Implement, Monitor.
  5. Add a placements block if the tool should appear on journey phase or sector pages.

  The slug becomes the tool page URL, so use lowercase words separated with hyphens
  and do not reuse a slug from another tool.

  The id is the stable internal identifier for the tool. It is not shown on the website.
  Keep each id unique and do not change it after a tool has been published. This can be used for internal analytics.

	  Normalization, filter lists and display cleanup are handled in
	  src/lib/content/technical/tool-catalogue-utils.js. Editors should not edit that file.

	  TOOL BUTTON TEXT:
	  Editors only need to update `toolLink`. If the link ends in a downloadable
	  file type such as .pdf, .docx, .pptx, .xlsx, .csv or .zip, the tool page
	  button automatically says "Download tool". Other links say "Open tool".

	  TOOL ABOUT TEXT:
	  In `about`, add links like this: [visible link text](https://example.com).
	  To make a paragraph break inside one text field, write || between paragraphs.
	  You can also use an array of strings if you prefer one paragraph per line.

	  TRANSLATED TOOL TEXT:
	  User-facing text fields such as `description`, `about`, `timeRequired`,
	  `preparationNeeded`, `output`, `bestFor` and `format` can use language
	  objects with `en`, `uk`, `ro` and `hy`. English is the fallback language.
	  Keep ids, slugs, tool links, taxonomy/filter values, provider names and
	  tool titles stable unless the actual tool record itself needs to change.
	*/

import { buildToolCatalogue } from '../../technical/tool-catalogue-utils.js';

const toolCatalogue = [
  {
    /* Unique internal identifier for the tool. Do not change after publishing. Set the identifier as the next number in the same format: resource-XXX */
    id: 'resource-001',
    /* slug makes the tool page URL. It should be a lowercase, hyphen-separated text. no spaces in between. */
    slug: 'sme-reporting-tool',
    title: 'SME Reporting Tool',
    /* Short description of the tool which appears in the front of each tool card in the tool catalogue overview. It is also visible on the tool page. */
    description:
      {
        en: "The SME Reporting Tool helps small businesses create annual greenhouse gas emission reports and track their reduction efforts.",
        uk: "Інструмент звітування SME допомагає малим підприємствам створювати щорічні звіти про викиди парникових газів і відстежувати їх зусилля щодо зменшення викидів.",
        ro: "Instrumentul de raportare pentru IMM-uri ajută întreprinderile mici să creeze rapoarte anuale privind emisiile de gaze cu efect de seră și să urmărească eforturile lor de reducere.",
        hy: "ՓՄՁ հաշվետվության գործիքն օգնում է փոքր բիզնեսին ստեղծել ջերմոցային գազերի արտանետումների տարեկան հաշվետվություններ և հետևել դրանց կրճատման ջանքերին:"
      },
    /* Longer description of the tool which appears on the tool page. Add links like [visible link text](https://example.com). To split paragraphs in one text field, write || between paragraphs. */
      about:
      {
        en: "The SME Reporting Tool is provided as a free resource to enable you to create a climate report summarising your annual greenhouse gas emissions, including the actions you are taking and the impact of your emissions reduction effort.",
        uk: "Інструмент звітності SME надається як безкоштовний ресурс, щоб ви могли створити кліматичний звіт, у якому підсумовуються ваші щорічні викиди парникових газів, включаючи дії, які ви вживаєте, і вплив ваших зусиль щодо скорочення викидів.",
        ro: "Instrumentul de raportare pentru IMM-uri este oferit ca o resursă gratuită pentru a vă permite să creați un raport climatic care să rezumă emisiile dvs. anuale de gaze cu efect de seră, inclusiv acțiunile pe care le întreprindeți și impactul efortului dumneavoastră de reducere a emisiilor.",
        hy: "ՓՄՁ հաշվետվության գործիքը տրամադրվում է որպես անվճար ռեսուրս, որը հնարավորություն է տալիս ստեղծել կլիմայական հաշվետվություն՝ ամփոփելով ձեր ջերմոցային գազերի տարեկան արտանետումները, ներառյալ ձեր ձեռնարկած գործողությունները և արտանետումների նվազեցման ջանքերի ազդեցությունը:"
      },
    /* journeyPhases is an array of the exact names of the journey phases where this tool is relevant. Use one or more of these values: Learn, Assess, Explore, Evaluate, Implement, Monitor. */
      journeyPhases: ['Monitor', 'Evaluate', 'Explore'],
    /* placements is not required for a tool to be specified. Added only to the tools that appear in the SME Journey pages or Sector guides. The name of the subsection is used to identify the section where the tool appears. */
    placements: {
      phaseSections: ['monitor:measuring-success'],
    },
    /* sector is a short text description of the sector or industry where the tool is relevant. It can be a single sector or multiple sectors. */
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Medium',
    /* language should have a comma in between to separate multiple languages */
    language: 'English',
    /* provider is the name of the organisation or company that provides the tool. */
    provider: 'SME Climate Hub',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Free',
    /* timeRequired is a short text description of the time required to use the tool. It can be a range or an estimate. */
    timeRequired: {
      en: "2-3 hours",
      uk: "2-3 години",
      ro: "2-3 ore",
      hy: "2-3 ժամ"
    },
    /* preparationNeeded is a short text description of the preparation needed to use the tool. This includes any prerequisites, setup steps or materials. */
    preparationNeeded:
      {
        en: "Be ready with your measurable data and metrics to be used within the platform.",
        uk: "Будьте готові до того, що ваші вимірювані дані та показники будуть використовуватися на платформі.",
        ro: "Fiți gata cu datele și valorile dvs. măsurabile pentru a fi utilizate în cadrul platformei.",
        hy: "Պատրաստ եղեք ձեր չափելի տվյալներին և չափանիշներին, որոնք կօգտագործվեն հարթակում:"
      },
    /* output is a short text description of the output of the tool. This can be a report, a certificate, a plan, or any other tangible result. */
    output: {
      en: "An annual greenhouse emission report",
      uk: "Річний звіт про викиди парникових газів",
      ro: "Un raport anual de emisii cu efect de seră",
      hy: "Ջերմոցային արտանետումների տարեկան հաշվետվություն"
    },
    /* bestFor is a short text description of the target audience for the tool. This can be a specific sector, size of company, or any other relevant characteristic. */
    bestFor: {
      en: "small-medium enterprises (SMEs) in all sectors",
      uk: "малі та середні підприємства (МСП) у всіх секторах",
      ro: "întreprinderi mici și mijlocii (IMM-uri) din toate sectoarele",
      hy: "փոքր-միջին ձեռնարկություններ (ՓՄՁ) բոլոր ոլորտներում"
    },
    /* format is a short text description of the format of the tool. This can be a digital platform, a PDF, a workshop, or any other relevant format. */
    format: {
      en: "Online platform",
      uk: "Онлайн-платформа",
      ro: "Platforma online",
      hy: "Առցանց հարթակ"
    },
    /* toolLink is the URL to the tool page or downloadable file. The button text is automatic: downloadable file links show "Download tool"; other links show "Open tool". */
    toolLink: 'https://smeclimatehub.org/report-your-progress/'
  },
  {
    id: 'resource-003',
    slug: 'circulytics-guide',
    title: 'Circulytics Guide',
    description:
      {
        en: "A guide to show you which analytics to use to best measure the circularity of your operations.",
        uk: "Посібник, який покаже вам, яку аналітику використовувати, щоб найкраще виміряти циклічність ваших операцій.",
        ro: "Un ghid pentru a vă arăta ce analize să utilizați pentru a măsura cel mai bine circularitatea operațiunilor dvs.",
        hy: "Ուղեցույց, որը ցույց կտա ձեզ, թե որ վերլուծություններն օգտագործել ձեր գործողությունների շրջանաձևությունը լավագույնս չափելու համար:"
      },
    about:
      {
        en: "Circulytics is a framework of indicators for tracking circular economy performance. It allows companies to highlight successes in transition, and identify where to focus efforts for improvement in line with the three principles of a circular economy, all driven by design: eliminate waste and pollution, circulate products and materials, and regenerate nature.",
        uk: "Circulytics — це система показників для відстеження ефективності циклічної економіки. Це дозволяє компаніям підкреслювати успіхи в перехідний період і визначати, на чому зосередити зусилля для вдосконалення відповідно до трьох принципів циркулярної економіки, які керуються дизайном: усунення відходів і забруднення, циркуляція продуктів і матеріалів і відродження природи.",
        ro: "Circulytics este un cadru de indicatori pentru urmărirea performanței economiei circulare. Permite companiilor să evidențieze succesele în tranziție și să identifice unde să concentreze eforturile pentru îmbunătățire în conformitate cu cele trei principii ale unei economii circulare, toate conduse de proiectare: eliminarea deșeurilor și a poluării, circulația produselor și materialelor și regenerarea naturii.",
        hy: "Circulytics-ը ցիկլային տնտեսության կատարողականին հետևելու ցուցիչների շրջանակ է: Այն թույլ է տալիս ընկերություններին ընդգծել անցումային շրջանի հաջողությունները և որոշել, թե որտեղ պետք է կենտրոնացնեն բարելավմանն ուղղված ջանքերը շրջանաձև տնտեսության երեք սկզբունքներին համապատասխան, որոնք բոլորն էլ առաջնորդվում են դիզայնով. վերացնել թափոնները և աղտոտվածությունը, շրջանառել ապրանքներն ու նյութերը և վերականգնել բնությունը:"
      },
    journeyPhases: ['Monitor'],
     placements: {
      phaseSections: ['monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'High',
    language: 'English, Chinese, Portuguese, Spanish',
    provider: 'Ellen MacArthur Foundation',
    /* access should be either 'Free', 'Sign up' or 'Paid' */   
    access: 'Free',
    timeRequired: {
      en: "Half a day",
      uk: "Півдня",
      ro: "O jumătate de zi",
      hy: "Կես օր"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output:
      {
        en: "You will gain a better understanding of what it means to measure circularity within the value chain.",
        uk: "Ви краще зрозумієте, що означає вимірювати циклічність у ланцюжку створення вартості.",
        ro: "Veți obține o mai bună înțelegere a ceea ce înseamnă măsurarea circularității în cadrul lanțului valoric.",
        hy: "Դուք ավելի լավ կհասկանաք, թե ինչ է նշանակում չափել շրջանաձևությունը արժեքային շղթայում:"
      },
    bestFor: {
      en: "SMEs in all sectors",
      uk: "МСП у всіх секторах",
      ro: "IMM-uri din toate sectoarele",
      hy: "ՓՄՁ բոլոր ոլորտներում"
    },
    format: {
      en: "PDF",
      uk: "PDF",
      ro: "PDF",
      hy: "PDF"
    },
    toolLink:
      'https://content.ellenmacarthurfoundation.org/web/753ec75d78ad3222/circulytics-indicators/?viewType=grid'
  },
  {
    id: 'resource-005',
    slug: 'climate-action-planner',
    title: 'Climate and Action Planner',
    description:
      {
        en: "A climate action plan outlines how an organisation will reduce greenhouse gas emissions and prepare for the impacts of climate change.",
        uk: "План дій щодо клімату визначає, як організація зменшить викиди парникових газів і підготується до наслідків зміни клімату.",
        ro: "Un plan de acțiune pentru climă subliniază modul în care o organizație va reduce emisiile de gaze cu efect de seră și se va pregăti pentru impactul schimbărilor climatice.",
        hy: "Կլիմայի գործողությունների ծրագիրը նախանշում է, թե ինչպես է կազմակերպությունը կրճատելու ջերմոցային գազերի արտանետումները և պատրաստվելու կլիմայի փոփոխության ազդեցությանը:"
      },
    about:
      {
        en: "The SME Climate Hub Climate Action Planner is a free online tool that helps SMEs create a customised climate action plan. By answering a short self-assessment, businesses receive tailored recommendations to reduce emissions, cut costs, improve resilience, and build a practical sustainability roadmap with progress tracking and clear priorities.|| **How the Climate Action Planner works**|| **1.\tRegister/log in:** From the \"Build a Climate Action Plan\" page where the link here takes you, click \"Access Climate Action Planner\" once you land on the page, then click on \"Login\". As a new user, create a free account by clicking on \"Sign up\", and choose either to sign up as a \"Tool user\" or a \"committed business\".  Fill out the fields with your name, email, and set a password. If you already have an account, you can log in instead. || **2.\tSelf-Assess:** Answer a deep-dive questionnaire covering energy usage, supply chains, employee engagement, and waste management. No prior emissions measurement needed. || **3.\tReview recommendations:** The tool pulls from a library of 750+ actions and surfaces ones tailored to your sector, goals, and key emissions areas. || **4.\tShortlist actions:** Compare strategies, read details on each (business case and potential impact), and pick the ones that fit your capabilities and timeline. || **5.\tManage your plan:** Your custom action plan lands in a dashboard where you can track progress, view more detail on further actions, and download a report.",
        uk: "The SME Climate Hub Climate Action Planner is a free online tool that helps SMEs create a customised climate action plan. Відповідаючи на коротке самооцінювання, підприємства отримують індивідуальні рекомендації щодо скорочення викидів, скорочення витрат, підвищення стійкості та створення практичної дорожньої карти сталого розвитку з відстеженням прогресу та чіткими пріоритетами.|| **Як працює Climate Action Planner**|| **1.\tЗареєструйтесь/увійдіть:** На сторінці «Створення плану дій щодо клімату», куди веде вас посилання, натисніть «Доступ до планувальника дій щодо клімату», коли ви потрапите на сторінку, а потім натисніть «Увійти». Як новий користувач, створіть безкоштовний обліковий запис, натиснувши «Зареєструватися», і виберіть, чи зареєструватися як «Користувач інструменту» або як «відданий бізнес».  Заповніть поля з вашим ім'ям, електронною поштою та встановіть пароль. Якщо у вас уже є обліковий запис, ви можете увійти замість нього. || **2.\tСамооцінка:** Дайте відповіді на детальну анкету, яка охоплює споживання енергії, ланцюжки постачання, залучення працівників і управління відходами. Попереднє вимірювання викидів не потрібне. || **3.\tОзнайомтеся з рекомендаціями:** Інструмент бере з бібліотеки понад 750 дій і пропонує ті, що адаптовані до вашого сектору, цілей і ключових сфер викидів. || **4.\tВибір дій:** Порівняйте стратегії, прочитайте подробиці про кожну (бізнес і потенційний вплив) і виберіть ті, які відповідають вашим можливостям і часовому графіку. || **5.\tКеруйте своїм планом:** Ваш спеціальний план дій розміщено на інформаційній панелі, де ви можете відстежувати прогрес, переглядати докладнішу інформацію про подальші дії та завантажувати звіт.",
        ro: "Planificatorul de acțiuni climatice SME Climate Hub este un instrument online gratuit care ajută IMM-urile să creeze un plan de acțiune climatic personalizat. Răspunzând la o scurtă autoevaluare, companiile primesc recomandări personalizate pentru a reduce emisiile, a reduce costurile, a îmbunătăți reziliența și a construi o foaie de parcurs practică de durabilitate, cu urmărirea progresului și priorități clare.|| **Cum funcționează Planificatorul de acțiuni climatice**|| **1.\tÎnregistrați-vă/conectați-vă:** Din pagina „Construiți un plan de acțiune pentru climă”, unde vă duce linkul de aici, faceți clic pe „Accesați Planificatorul de acțiuni pentru climă” odată ce ajungeți pe pagină, apoi faceți clic pe „Autentificare”. În calitate de utilizator nou, creați un cont gratuit făcând clic pe „Înscrieți-vă” și alegeți fie să vă înscrieți ca „Utilizator instrument” fie ca „afacere angajată”.  Completați câmpurile cu numele dvs., adresa de e-mail și setați o parolă. Dacă aveți deja un cont, vă puteți conecta în schimb. || **2.\tAuto-evaluare:** Răspundeți la un chestionar detaliat care acoperă utilizarea energiei, lanțurile de aprovizionare, implicarea angajaților și gestionarea deșeurilor. Nu este necesară măsurarea prealabilă a emisiilor. || **3.\tRecomandări de revizuire:** Instrumentul extrage dintr-o bibliotecă de peste 750 de acțiuni și suprafețe adaptate sectorului dvs., obiectivelor și zonelor cheie de emisii. || **4.\tLista scurtă de acțiuni:** Comparați strategiile, citiți detalii despre fiecare (caz de afaceri și impact potențial) și alegeți-le pe cele care se potrivesc cu capacitățile și cronologia dvs. || **5.\tGestionați-vă planul:** Planul dvs. de acțiune personalizat ajunge într-un tablou de bord unde puteți urmări progresul, puteți vedea mai multe detalii despre acțiunile ulterioare și puteți descărca un raport.",
        hy: "SME Climate Hub Climate Action Planner-ը անվճար առցանց գործիք է, որն օգնում է ՓՄՁ-ներին ստեղծել հարմարեցված կլիմայի գործողությունների ծրագիր: Պատասխանելով կարճ ինքնագնահատման՝ ձեռնարկությունները ստանում են համապատասխան առաջարկություններ՝ նվազեցնելու արտանետումները, կրճատել ծախսերը, բարելավել ճկունությունը և կառուցել գործնական կայունության ճանապարհային քարտեզ՝ առաջընթացի հետևումով և հստակ առաջնահերթություններով:|| **Ինչպես է աշխատում Կլիմայի գործողությունների պլանավորողը**|| **1.\tԳրանցվեք/մուտք գործեք՝** «Կառուցեք կլիմայի գործողությունների ծրագիր» էջից, որտեղ ձեզ տանում է հղումը, սեղմեք «Access Climate Action Planner»-ը, երբ վայրէջք կատարեք էջին, այնուհետև սեղմեք «Մուտք գործել»: Որպես նոր օգտվող, ստեղծեք անվճար հաշիվ՝ սեղմելով «Գրանցվել» և ընտրեք գրանցվել որպես «Գործիքների օգտատեր» կամ «պարտավոր բիզնես»:  Լրացրեք դաշտերը ձեր անունով, էլ.փոստով և սահմանեք գաղտնաբառ: Եթե ​​արդեն ունեք հաշիվ, փոխարենը կարող եք մուտք գործել: || **2.\tԻնքնագնահատում. ** Պատասխանեք խորը սուզված հարցաշարի, որը ներառում է էներգիայի օգտագործումը, մատակարարման շղթաները, աշխատակիցների ներգրավվածությունը և թափոնների կառավարումը: Արտանետումների նախնական չափումներ չեն պահանջվում: || **3.\tՎերանայեք առաջարկությունները.** Գործիքը դուրս է բերվում 750+ գործողությունների գրադարանից և ընդգրկում է այնպիսի գործողություն, որը հարմարեցված է ձեր ոլորտին, նպատակներին և հիմնական արտանետումների ոլորտներին: || **4.\tԳործողությունների կարճ ցուցակ.** Համեմատեք ռազմավարությունները, կարդացեք մանրամասներ յուրաքանչյուրի վերաբերյալ (բիզնեսի դեպք և հնարավոր ազդեցություն) և ընտրեք ձեր հնարավորություններին և ժամանակացույցին համապատասխանող գործողությունները: || **5.\tԿառավարեք ձեր պլանը.** Ձեր հատուկ գործողությունների ծրագիրը տեղադրվում է վահանակում, որտեղ կարող եք հետևել առաջընթացին, դիտել հետագա գործողությունների վերաբերյալ ավելի շատ մանրամասներ և ներբեռնել հաշվետվություն:"
      },
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan'],
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Medium',
    language: 'English',
    provider: 'SME Climate Hub',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Sign up',
    timeRequired: {
      en: "2-3 hours",
      uk: "2-3 години",
      ro: "2-3 ore",
      hy: "2-3 ժամ"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output:
      {
        en: "Actions aligned to your industry and business goals. Practical steps, business case insights, expected impacts, and a roadmap with trackable actions and priorities.",
        uk: "Дії, узгоджені з вашою галуззю та бізнес-цілями. Практичні кроки, аналіз бізнес-кейсу, очікуваний вплив і дорожня карта з діями та пріоритетами, які можна відстежити.",
        ro: "Acțiuni aliniate la industria și obiectivele dvs. de afaceri. Pași practici, perspective de business case, impacturi așteptate și o foaie de parcurs cu acțiuni și priorități urmăribile.",
        hy: "Գործողություններ, որոնք համահունչ են ձեր ոլորտի և բիզնեսի նպատակներին: Գործնական քայլեր, բիզնես դեպքերի պատկերացումներ, ակնկալվող ազդեցություններ և հետագծելի գործողություններով և առաջնահերթություններով ճանապարհային քարտեզ:"
      },
    bestFor: {
      en: "small-medium enterprises (SMEs) in all sectors",
      uk: "малі та середні підприємства (МСП) у всіх секторах",
      ro: "întreprinderi mici și mijlocii (IMM-uri) din toate sectoarele",
      hy: "փոքր-միջին ձեռնարկություններ (ՓՄՁ) բոլոր ոլորտներում"
    },
    /* format is a short text description of the format of the tool. This can be a digital platform, a PDF, a workshop, or any other relevant format. */
    format: {
      en: "Online platform",
      uk: "Онлайн-платформа",
      ro: "Platforma online",
      hy: "Առցանց հարթակ"
    },
    toolLink: 'https://smeclimatehub.org/build-a-climate-action-plan/'
  },
  {
    id: 'resource-006',
    slug: 'roadmap-to-circular-business',
    title: 'Roadmap to circular business',
    description:
      {
        en: "A practical set of canvases designed to help businesses move from early circular action to intentional, long-term change.",
        uk: "Практичний набір полотен, розроблений, щоб допомогти підприємствам перейти від ранніх циклічних дій до навмисних, довгострокових змін.",
        ro: "Un set practic de pânze concepute pentru a ajuta companiile să treacă de la acțiunea circulară timpurie la schimbarea intenționată, pe termen lung.",
        hy: "Կտավների գործնական հավաքածու, որը նախատեսված է բիզնեսին օգնելու վաղ շրջանաձև գործողություններից անցնել միտումնավոր, երկարաժամկետ փոփոխության:"
      },
    about:
      {
        en: "The Roadmap to Circular Business is a workshop tool that helps organisations turn circular economy ideas into a practical action plan. It supports teams in defining their circular ambition, prioritising actions, assigning responsibilities, and planning next steps. The output is a circular transition roadmap with clear priorities, milestones, and ownership.",
        uk: "Дорожня карта до кругового бізнесу – це інструмент семінару, який допомагає організаціям перетворити ідеї циклічної економіки на практичний план дій. Він підтримує команди у визначенні їхніх кругових амбіцій, пріоритетності дій, розподілі обов’язків і плануванні наступних кроків. Результатом є циклічна дорожня карта переходу з чіткими пріоритетами, віхами та власністю.",
        ro: "Foaia de parcurs pentru afaceri circulare este un instrument de atelier care ajută organizațiile să transforme ideile de economie circulară într-un plan de acțiune practic. Acesta sprijină echipele în definirea ambiției lor circulare, prioritizarea acțiunilor, atribuirea responsabilităților și planificarea pașilor următori. Rezultatul este o foaie de parcurs de tranziție circulară cu priorități clare, repere și asumare.",
        hy: "Շրջանաձև բիզնեսի ճանապարհային քարտեզը սեմինարի գործիք է, որն օգնում է կազմակերպություններին շրջանաձև տնտեսության գաղափարները վերածել գործնական գործողությունների ծրագրի: Այն աջակցում է թիմերին իրենց շրջանաձև հավակնությունները սահմանելու, գործողությունների առաջնահերթությունը, պարտականություններ նշանակելու և հաջորդ քայլերը պլանավորելու հարցում: Արդյունքը շրջանաձև անցումային ճանապարհային քարտեզ է՝ հստակ առաջնահերթություններով, հիմնաքարերով և սեփականության իրավունքով:"
      },
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    /* effort should be either 'Low', 'Medium' or 'High'. This is a quick assessment based on the time required and preparation needed. */
    effort: 'Low',
    language: 'English',
    provider: 'The Good Tribe',
    /* access should be either 'Free', 'Sign up' or 'Paid' */
    access: 'Sign up',
    timeRequired: {
      en: "1-2 hours per canvas",
      uk: "1-2 години на полотно",
      ro: "1-2 ore pe pânză",
      hy: "1-2 ժամ մեկ կտավի համար"
    },
    preparationNeeded:
      {
        en: "Basic understanding of the organisation's circular opportunities, current capabilities, and key stakeholders. No detailed sustainability data is required. Access to a Miro account to use it in its intended format.",
        uk: "Базове розуміння кругових можливостей організації, поточних можливостей і ключових зацікавлених сторін. Детальні дані про стійкість не потрібні. Доступ до облікового запису Miro, щоб використовувати його в призначеному форматі.",
        ro: "Înțelegerea de bază a oportunităților circulare ale organizației, a capacităților actuale și a părților interesate cheie. Nu sunt necesare date detaliate despre sustenabilitate. Acces la un cont Miro pentru a-l utiliza în formatul dorit.",
        hy: "Կազմակերպության շրջանաձև հնարավորությունների, ընթացիկ հնարավորությունների և հիմնական շահագրգիռ կողմերի հիմնական պատկերացում: Կայունության վերաբերյալ մանրամասն տվյալներ չեն պահանջվում: Մուտք գործեք Miro հաշիվ՝ այն իր նախատեսված ձևաչափով օգտագործելու համար:"
      },
    output: {
      en: "A roadmap and plan to lead your business towards circular strategy implementation",
      uk: "Дорожня карта та план ведення вашого бізнесу до реалізації циклічної стратегії",
      ro: "O foaie de parcurs și un plan pentru a vă conduce afacerea către implementarea strategiei circulare",
      hy: "Ճանապարհային քարտեզ և պլան՝ ձեր բիզնեսը տանելու դեպի շրջանաձև ռազմավարության իրականացում"
    },
    bestFor:
      {
        en: "All small-medium enterprises (SMEs), particularly SMEs ready to move from opportunity identification to implementation.",
        uk: "Усі малі та середні підприємства (МСП), особливо МСП, готові перейти від визначення можливостей до впровадження.",
        ro: "Toate întreprinderile mici și mijlocii (IMM-uri), în special IMM-urile gata să treacă de la identificarea oportunităților la implementare.",
        hy: "Բոլոր փոքր-միջին ձեռնարկությունները (ՓՄՁ), հատկապես ՓՄՁ-ները, որոնք պատրաստ են հնարավորությունների բացահայտումից անցնելու իրականացմանը:"
      },
    format: {
      en: "Online collaborative board (Miro)",
      uk: "Онлайн-дошка для спільної роботи (Miro)",
      ro: "Consiliu de colaborare online (Miro)",
      hy: "Առցանց համագործակցային խորհուրդ (Miro)"
    },
    toolLink: 'https://miro.com/templates/roadmap-to-circular-business/'
  },
  {
    id: 'resource-007',
    slug: 'implementation-template',
    title: 'Implementation Template',
    description:
      {
        en: "Tool for crystallising your circular business model by reflecting on its key building blocks, including your value proposition, infrastructure, customers and financing.",
        uk: "Інструмент для кристалізації вашої циклічної бізнес-моделі шляхом аналізу її основних будівельних блоків, зокрема вашої ціннісної пропозиції, інфраструктури, клієнтів і фінансування.",
        ro: "Instrument pentru cristalizarea modelului dvs. de afaceri circular, reflectând asupra elementelor sale cheie, inclusiv propunerea dvs. de valoare, infrastructura, clienții și finanțarea.",
        hy: "Գործիք՝ ձեր շրջանաձև բիզնես մոդելը բյուրեղացնելու համար՝ անդրադառնալով դրա հիմնական շինարարական բլոկներին, ներառյալ ձեր արժեքի առաջարկը, ենթակառուցվածքը, հաճախորդներին և ֆինանսավորումը:"
      },
    about:
      {
        en: "A structured road mapping tool developed for manufacturing companies. Guides businesses through mapping their current state, defining ambitions, and building a concrete roadmap with prioritised actions. The tool uses a visual canvas approach with facilitation guidance, making it well suited to use in team workshops. Outputs include a prioritised action plan with owners and timelines.",
        uk: "Інструмент структурованого планування доріг, розроблений для виробничих компаній. Скеровує бізнес через відображення поточного стану, визначення амбіцій і побудову конкретної дорожньої карти з пріоритетними діями. Інструмент використовує підхід візуального полотна з інструкціями фасилітації, що робить його добре придатним для використання в групових семінарах. Результати включають пріоритетний план дій із власниками та часовими рамками.",
        ro: "Un instrument structurat de cartografiere a drumurilor dezvoltat pentru companiile producătoare. Ghidează companiile prin maparea stării lor actuale, definirea ambițiilor și construirea unei foi de parcurs concrete cu acțiuni prioritizate. Instrumentul folosește o abordare vizuală a pânzei cu îndrumări de facilitare, ceea ce îl face foarte potrivit pentru utilizare în atelierele de echipă. Rezultatele includ un plan de acțiune prioritizat cu proprietarii și termenele.",
        hy: "Կառուցվածքային ճանապարհային քարտեզագրման գործիք, որը մշակվել է արտադրական ընկերությունների համար: Առաջնորդում է բիզնեսին իրենց ներկայիս վիճակի քարտեզագրման, հավակնությունների սահմանման և առաջնահերթ գործողություններով կոնկրետ ճանապարհային քարտեզ կառուցելու միջոցով: Գործիքը օգտագործում է վիզուալ կտավային մոտեցում՝ հեշտացնող ուղղորդմամբ՝ այն լավ պիտանի դարձնելով թիմային սեմինարներում օգտագործելու համար: Արդյունքները ներառում են առաջնահերթ գործողությունների ծրագիր սեփականատերերի հետ և ժամանակացույցեր:"
      },
    journeyPhases: ['Implement'],
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'Teknologiateollisuus',
    access: 'Free',
    timeRequired: {
      en: "20-30 minutes",
      uk: "20-30 хвилин",
      ro: "20-30 minute",
      hy: "20-30 րոպե"
    },
    preparationNeeded:
      {
        en: "A shortlisted circular opportunity or business model concept, plus basic customer, partner and financial information.",
        uk: "Концепція кругової можливості або бізнес-моделі короткого списку, а також основна інформація про клієнта, партнера та фінансову інформацію.",
        ro: "O oportunitate circulară pe lista scurtă sau un concept de model de afaceri, plus informații de bază privind clienții, partenerii și informațiile financiare.",
        hy: "Շրջանաձև հնարավորություն կամ բիզնես մոդելի հայեցակարգ, գումարած հիմնական հաճախորդի, գործընկերոջ և ֆինանսական տեղեկատվություն:"
      },
    output: {
      en: "A completed Circular Business Model Canvas containing a vision statement.",
      uk: "Завершена кругова бізнес-модель Canvas, що містить заяву про бачення.",
      ro: "O pânză de model de afaceri circulară completată care conține o declarație de viziune.",
      hy: "Ավարտված շրջանաձև բիզնես մոդելի կտավ, որը պարունակում է տեսլականի հայտարարություն:"
    },
    bestFor: {
      en: "Manufacturing/production small-medium enterprises (SMEs)",
      uk: "Виробництво/виробничі малі та середні підприємства (МСП)",
      ro: "Întreprinderi mici și mijlocii (IMM-uri) de producție/producție",
      hy: "Արտադրական/արտադրական փոքր-միջին ձեռնարկություններ (ՓՄՁ)"
    },
    format: {
      en: "Powerpoint",
      uk: "Powerpoint",
      ro: "Power point",
      hy: "Powerpoint"
    },
    toolLink:
      'https://teknologiateollisuus.fi/wp-content/uploads/2024/08/CE2018_Business-model-canvas_v1-0.pptx'
  },
  {
    id: 'resource-008',
    slug: 'miro-swot-analysis-template',
    title: 'Strengths, Weaknesses, Opportunities and Threats (SWOT) Analysis Template (Miro)',
    description:
      {
        en: "Free online collaborative whiteboard with ready-made Strengths, Weaknesses, Opportunities and Threats (SWOT) template, sticky notes, real-time team editing, and voting tools for a structured online workshop.",
        uk: "Безкоштовна онлайн-дошка для спільної роботи з готовим шаблоном сильних і слабких сторін, можливостей і загроз (SWOT), наліпками, командним редагуванням у режимі реального часу та інструментами голосування для структурованого онлайн-семінару.",
        ro: "Tablă albă colaborativă online gratuită cu șablon SWOT (Strengths, Weaknesses, Opportunities and Threats), note lipicioase, editare în timp real în echipă și instrumente de vot pentru un atelier online structurat.",
        hy: "Անվճար առցանց համագործակցային գրատախտակ՝ պատրաստի ուժեղ, թույլ կողմեր, հնարավորություններ և սպառնալիքներ (SWOT) ձևանմուշով, կպչուն գրառումներով, իրական ժամանակում թիմային խմբագրումով և քվեարկության գործիքներով՝ կառուցվածքային առցանց սեմինարի համար:"
      },
    about:
      {
        en: "A Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis applied to circular business models examines four dimensions to build a clear strategic picture. Strengths identify what your organisation already does well, weaknesses expose internal gaps, opportunities look outward at favourable conditions, and threats capture external risks. The real value comes from using these dimensions dynamically to reveal priorities and vulnerabilities. To access Miro templates, you frist need a user. You can create a free user to access the templates, if you do not have a Miro account. Once you can access the templates, you can follow the instructions to use them. || **Step by step guide** || **1.\tSet the objective:** Define what you're analysing and keep the scope specific so the analysis stays focused. ||**2.\tGather the right people:** Pull in a small group with different perspectives (ops, sales, finance, etc.). || **3.\tList Strengths:** Internal, positive factors: what you do well, unique resources, etc. || **4.\tList Weaknesses:** Internal, negative factors: gaps, resource constraints, etc.|| **5.\tList Opportunities:** External, positive factors: market trends, gaps you could exploit, emerging needs.|| **6.\tList Threats:** External, negative factors: competition, regulatory shifts, etc. || **7.\tRank items** by impact and likelihood so you're not treating everything as equally urgent.|| **8.\tMatch strengths to opportunities** to see where you can go on offense, and weaknesses to threats to see where you're most exposed. || **9.\tPick two or three priorities** per quadrant and assign owners and next steps.",
        uk: "Аналіз сильних і слабких сторін, можливостей і загроз (SWOT), застосований до циклічних бізнес-моделей, вивчає чотири виміри для створення чіткої стратегічної картини. Сильні сторони визначають те, що ваша організація вже робить добре, слабкі сторони виявляють внутрішні прогалини, можливості дивляться назовні за сприятливих умов, а загрози вловлюють зовнішні ризики. Справжня цінність полягає в динамічному використанні цих параметрів для виявлення пріоритетів і вразливостей. Щоб отримати доступ до шаблонів Miro, вам спочатку потрібен користувач. Ви можете створити безкоштовного користувача для доступу до шаблонів, якщо у вас немає облікового запису Miro. Отримавши доступ до шаблонів, ви можете дотримуватись інструкцій щодо їх використання. || **Покроковий посібник** || **1.\tПоставте ціль:** Визначте, що ви аналізуєте, і зберігайте конкретні рамки, щоб аналіз залишався зосередженим. ||**2.\tЗберіть потрібних людей:** об’єднайте невелику групу з різними поглядами (операції, продажі, фінанси тощо). || **3.\tПерелічіть сильні сторони:** Внутрішні позитивні фактори: те, що ви робите добре, унікальні ресурси тощо. || **4.\tПерелічіть слабкі сторони:** Внутрішні, негативні фактори: прогалини, обмеження ресурсів тощо.|| **5.\tСписок можливостей:** Зовнішні, позитивні фактори: ринкові тенденції, прогалини, якими ви можете скористатися, нові потреби.|| **6.\tСписок загроз:** Зовнішні, негативні фактори: конкуренція, нормативні зміни тощо. || **7.\tРозташуйте елементи** за впливом і ймовірністю, щоб не розглядати все як однаково термінове.|| **8.\tЗіставте сильні сторони з можливостями**, щоб побачити, де ви можете атакувати, і слабкі сторони з загрозами, щоб побачити, де ви найбільше піддані. || **9.\tВиберіть два або три пріоритети** на квадрант і призначте власників і наступні кроки.",
        ro: "O analiză SWOT (Strengths, Weaknesses, Opportunities and Threats) aplicată modelelor circulare de afaceri examinează patru dimensiuni pentru a construi o imagine strategică clară. Punctele forte identifică ceea ce organizația dvs. face deja bine, punctele slabe expun lacune interne, oportunitățile privesc spre exterior condiții favorabile, iar amenințările captează riscurile externe. Valoarea reală provine din utilizarea dinamică a acestor dimensiuni pentru a dezvălui prioritățile și vulnerabilitățile. Pentru a accesa șabloanele Miro, mai întâi aveți nevoie de un utilizator. Puteți crea un utilizator gratuit pentru a accesa șabloanele, dacă nu aveți un cont Miro. Odată ce puteți accesa șabloanele, puteți urma instrucțiunile pentru a le folosi. || **Ghid pas cu pas** || **1.\tStabiliți obiectivul:** Definiți ceea ce analizați și mențineți domeniul de aplicare specific, astfel încât analiza să rămână concentrată. ||**2.\tAdunați oamenii potriviți:** Atrageți un grup mic cu perspective diferite (operații, vânzări, finanțe etc.). || **3.\tListează punctele forte:** Factori interni, pozitivi: ceea ce faci bine, resurse unice etc. || **4.\tListați punctele slabe:** Factori interni, negativi: lacune, constrângeri de resurse etc.|| **5.\tLista de oportunitati:** Factori externi, pozitivi: tendintele pietei, lacunele pe care le-ati putea exploata, nevoile emergente.|| **6.\tLista amenințărilor:** Factori externi, negativi: concurență, schimbări de reglementare etc. || **7.\tClasifică articolele** după impact și probabilitate, astfel încât să nu tratezi totul ca la fel de urgent.|| **8.\tPotriviți punctele forte cu oportunitățile** pentru a vedea unde puteți ajunge în atac și punctele slabe cu amenințările pentru a vedea unde ești cel mai expus. || **9.\tAlegeți două sau trei priorități** pe cadran și atribuiți proprietari și pașii următori.",
        hy: "Ուժեղ կողմերի, թույլ կողմերի, հնարավորությունների և սպառնալիքների (SWOT) վերլուծությունը, որը կիրառվում է շրջանաձև բիզնես մոդելների համար, ուսումնասիրում է չորս հարթություն՝ հստակ ռազմավարական պատկեր ստեղծելու համար: Ուժեղ կողմերը բացահայտում են այն, ինչ ձեր կազմակերպությունն արդեն լավ է անում, թույլ կողմերը բացահայտում են ներքին բացերը, հնարավորությունները արտաքինից են նայում բարենպաստ պայմաններին, իսկ սպառնալիքները գրավում են արտաքին ռիսկերը: Իրական արժեքը գալիս է առաջնահերթություններն ու խոցելիությունները բացահայտելու համար այս չափումները դինամիկ կերպով օգտագործելուց: Miro-ի կաղապարներ մուտք գործելու համար նախ անհրաժեշտ է օգտատեր: Դուք կարող եք ստեղծել անվճար օգտվող՝ կաղապարներին մուտք գործելու համար, եթե չունեք Miro հաշիվ: Երբ դուք կարող եք մուտք գործել ձևանմուշներ, կարող եք հետևել դրանք օգտագործելու հրահանգներին: || **Քայլ առ քայլ ուղեցույց** || **1.\tՍահմանեք նպատակը.** Սահմանեք, թե ինչ եք վերլուծում և կոնկրետ պահեք շրջանակը, որպեսզի վերլուծությունը մնա կենտրոնացված: ||**2.\tՀավաքեք ճիշտ մարդկանց.** Քաշեք փոքր խմբի մեջ՝ տարբեր հեռանկարներով (օպերացիա, վաճառք, ֆինանսներ և այլն): || **3.\tՑանկի ուժեղ կողմեր.** Ներքին, դրական գործոններ՝ ինչ եք անում լավ, յուրահատուկ ռեսուրսներ և այլն: || **4.\tԹվարկեք թույլ կողմերը.** Ներքին, բացասական գործոններ՝ բացեր, ռեսուրսների սահմանափակումներ և այլն:|| **5.\tԹվարկեք հնարավորությունները.** Արտաքին, դրական գործոններ. շուկայի միտումներ, բացեր, որոնք դուք կարող եք օգտագործել, առաջացող կարիքներ:|| **6.\tԹվարկեք սպառնալիքները.** Արտաքին, բացասական գործոններ՝ մրցակցություն, կարգավորող փոփոխություններ և այլն: || **7.\tԴասակարգեք տարրերը** ըստ ազդեցության և հավանականության, որպեսզի ամեն ինչ նույնքան հրատապ չհամարեք:|| **8.\tՀամեմատեք ուժեղ կողմերը հնարավորությունների հետ**՝ տեսնելու, թե որտեղ կարող եք վիրավորվել, իսկ թույլ կողմերը՝ սպառնալիքներին, որպեսզի տեսնեք, թե որտեղ եք ամենաշատը ենթարկվում: || **9.\tԸնտրեք երկու կամ երեք առաջնահերթություն** յուրաքանչյուր քառորդի համար և նշանակեք սեփականատերերին և հաջորդ քայլերը:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Miro',
    access: 'Sign up',
    timeRequired: {
      en: "1-2 hours",
      uk: "1-2 години",
      ro: "1-2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded: {
      en: "Miro account and identified the circular strategy you wish to pursue with your business",
      uk: "обліковий запис Miro та визначили циклічну стратегію, яку ви хочете реалізувати у своєму бізнесі",
      ro: "Miro și a identificat strategia circulară pe care doriți să o urmați cu afacerea dvs",
      hy: "Miro հաշիվը և բացահայտեց շրջանաձև ռազմավարությունը, որը ցանկանում եք իրականացնել ձեր բիզնեսի հետ"
    },
    output: {
      en: "Completed Strengths, Weaknesses, Opportunities and Threats (SWOT) matrix with prioritised actions; exportable for sharing with team or advisors.",
      uk: "Заповнена матриця сильних і слабких сторін, можливостей і загроз (SWOT) із пріоритетними діями; можна експортувати для спільного використання з командою або радниками.",
      ro: "Matricea finalizată a punctelor forte, punctelor slabe, oportunităților și amenințărilor (SWOT) cu acțiuni prioritizate; exportabil pentru partajare cu echipa sau consilieri.",
      hy: "Ավարտված ուժեղ կողմերի, թույլ կողմերի, հնարավորությունների և սպառնալիքների (SWOT) մատրիցա՝ առաջնահերթ գործողություններով. արտահանելի՝ թիմի կամ խորհրդատուների հետ կիսվելու համար:"
    },
    bestFor: {
      en: "small-medium enterprises (SMEs) running the transition readiness workshop from Phase 4 with their team.",
      uk: "малі та середні підприємства (МСП), які разом зі своєю командою проводять семінар з підготовки до переходу з Фази 4.",
      ro: "întreprinderi mici și mijlocii (IMM-uri) care desfășoară împreună cu echipa atelierul de pregătire pentru tranziție din Faza 4.",
      hy: "փոքր-միջին ձեռնարկությունները (ՓՄՁ) իրենց թիմի հետ անցումային պատրաստության սեմինարն անցկացնում են 4-րդ փուլից:"
    },
    format: {
      en: "Either online Miro board or PDF if printed.",
      uk: "Онлайн-дошка Miro або PDF, якщо роздруковано.",
      ro: "Fie placa Miro online, fie PDF, dacă este tipărit.",
      hy: "Կամ առցանց Miro տախտակ կամ PDF, եթե տպագրված է:"
    },
    toolLink: 'https://miro.com/strategic-planning/swot-analysis/'
  },
  {
    id: 'resource-009',
    slug: 'cti-tool-circular-transition-indicators',
    title: 'Circular Transition Indicators (CTI) Tool',
    description:
      {
        en: "Online assessment that quantifies circular performance across material flows, waste, and resource use, with guidance to improve results and set SMART targets.",
        uk: "Онлайн-оцінка, яка кількісно оцінює циркулярну продуктивність матеріальних потоків, відходів і використання ресурсів, із вказівками для покращення результатів і встановлення цілей SMART.",
        ro: "Evaluare online care cuantifică performanța circulară în fluxurile de materiale, deșeurile și utilizarea resurselor, cu îndrumări pentru îmbunătățirea rezultatelor și stabilirea obiectivelor SMART.",
        hy: "Առցանց գնահատում, որը քանակականացնում է շրջանաձև կատարողականությունը նյութական հոսքերի, թափոնների և ռեսուրսների օգտագործման միջև՝ արդյունքները բարելավելու և SMART թիրախներ սահմանելու ուղեցույցով:"
      },
    about:
      {
        en: "The Circular Transition Indicators (CTI) indicators and methodology are one of the main building blocks that the Global Circularity Protocol (GCP) uses for circularity metrics and the protocol is designed to align with International Organization for Standardization (ISO) 59020, European Sustainability Reporting Standards (ESRS) E5, Global Reporting Initiative (GRI) and the Greenhouse Gas Protocol. CTI Tool was developed together with the World Business Council for Sustainable Development (WBCSD) for applying the CTI in practice. By using CTI Tool you build the material level data and indicators that the GCP expects, which means you can reuse your CTI work when you start working with the GCP.",
        uk: "Індикатори циклічного переходу (CTI) і методологія є одними з основних будівельних блоків, які Глобальний протокол круговості (GCP) використовує для показників циклізму, і протокол розроблений для узгодження з Міжнародною організацією зі стандартизації (ISO) 59020, Європейськими стандартами звітності про сталий розвиток (ESRS) E5, Глобальною ініціативою звітності (GRI) і Протоколом парникових газів. CTI Tool був розроблений спільно з Всесвітньою діловою радою зі сталого розвитку (WBCSD) для практичного застосування CTI. Використовуючи інструмент CTI, ви створюєте дані та індикатори на рівні матеріалу, які очікує GCP, що означає, що ви можете повторно використовувати свою роботу CTI, коли починаєте працювати з GCP.",
        ro: "Indicatorii și metodologia indicatorilor de tranziție circulară (CTI) sunt unul dintre principalele blocuri pe care Global Circularity Protocol (GCP) le folosește pentru metricile de circularitate, iar protocolul este conceput pentru a se alinia cu Organizația Internațională pentru Standardizare (ISO) 59020, Standardele europene de raportare pentru sustenabilitate (ESRS) E5, Global Reporting Initiative (GRI) și Protocolul pentru gaze cu efect de seră. Instrumentul CTI a fost dezvoltat împreună cu Consiliul Mondial de Afaceri pentru Dezvoltare Durabilă (WBCSD) pentru aplicarea CTI în practică. Folosind instrumentul CTI, construiți datele și indicatorii la nivel de material la care se așteaptă GCP, ceea ce înseamnă că vă puteți reutiliza munca CTI atunci când începeți să lucrați cu GCP.",
        hy: "Circular Transition Indicators (CTI) ցուցիչները և մեթոդաբանությունը հիմնական կառուցվածքային բլոկներից են, որոնք օգտագործում է Գլոբալ շրջանաձևության արձանագրությունը (GCP) շրջանաձևության չափումների համար, և արձանագրությունը նախագծված է ստանդարտացման միջազգային կազմակերպության (ISO) 59020, Եվրոպական կայունության հաշվետվության ստանդարտների (ESRS) E5, (GGRI) և Greenhouse Global Reporting Procol-ին համապատասխանեցնելու համար: CTI գործիքը մշակվել է Կայուն զարգացման համաշխարհային բիզնես խորհրդի (WBCSD) հետ համատեղ՝ CTI-ն գործնականում կիրառելու համար: Օգտագործելով CTI գործիքը, դուք ստեղծում եք նյութի մակարդակի տվյալներ և ցուցիչներ, որոնք ակնկալում է GCP-ն, ինչը նշանակում է, որ դուք կարող եք նորից օգտագործել ձեր CTI աշխատանքը, երբ սկսեք աշխատել GCP-ի հետ:"
      },
    journeyPhases: ['Evaluate'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'World Business Council for Sustainable Development (WBCSD) / Circular IQ',
    access: 'Paid',
    timeRequired: {
      en: "2-4 hours",
      uk: "2-4 години",
      ro: "2-4 ore",
      hy: "2-4 ժամ"
    },
    preparationNeeded: {
      en: "Prepare the relevant business, material flow and resource use data before starting.",
      uk: "Перед початком підготуйте відповідні дані про бізнес, матеріальні потоки та використання ресурсів.",
      ro: "Pregătiți datele relevante de afaceri, fluxul de materiale și utilizarea resurselor înainte de a începe.",
      hy: "Նախքան սկսելը պատրաստեք համապատասխան բիզնեսի, նյութական հոսքի և ռեսուրսների օգտագործման տվյալները:"
    },
    output:
      {
        en: "Circular performance score; risk and opportunity analysis; prioritised actions and SMART improvement targets.",
        uk: "Оцінка кругового виконання; аналіз ризиків і можливостей; пріоритетні дії та цілі вдосконалення SMART.",
        ro: "Scorul de performanță circular; analiza riscurilor și oportunităților; acțiunile prioritizate și obiectivele de îmbunătățire SMART.",
        hy: "Շրջանաձև կատարման միավոր; ռիսկերի և հնարավորությունների վերլուծություն; առաջնահերթ գործողություններ և SMART բարելավման թիրախներ:"
      },
    bestFor: {
      en: "All small-medium enterprises (SMEs)",
      uk: "Усі малі та середні підприємства (МСП)",
      ro: "Toate întreprinderile mici și mijlocii (IMM-uri)",
      hy: "Բոլոր փոքր և միջին ձեռնարկությունները (ՓՄՁ)"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://ctitool.com/'
  },
  {
    id: 'resource-010',
    slug: 'business-model-canvas-for-circular-economy',
    title: 'Business Model Canvas for Circular Economy',
    description:
      {
        en: "Adapts the classic Business Model Canvas to map circular value creation, delivery, and capture for a chosen circular business model.",
        uk: "Адаптує класичну бізнес-модель Canvas для відображення циклічного створення цінності, доставки та захоплення для вибраної циклічної бізнес-моделі.",
        ro: "Adaptează modelul de afaceri clasic Canvas pentru a mapa crearea, livrarea și captarea valorii circulare pentru un model de afaceri circular ales.",
        hy: "Հարմարեցնում է դասական Բիզնես մոդելի կտավը՝ շրջանաձև արժեք ստեղծելու, առաքելու և գրավելու համար ընտրված շրջանաձև բիզնես մոդելի համար:"
      },
    about:
      {
        en: "The Circular Business Development Canvas Pack aims to empower businesses to transition from traditional linear models to innovative circular practices. By focusing on reducing waste, enhancing resource efficiency, and closing the loop, these canvases provide a structured approach to embedding circular economy principles into core operations, customers, and revenue. The ultimate goal is to foster a regenerative business model that benefits   the environment and drives economic value and social impact. A step-by-step guide on how to carry out this workshop can be found within the circular canvas pack.",
        uk: "Пакет Circular Business Development Canvas Pack має на меті надати компаніям можливість переходити від традиційних лінійних моделей до інноваційних циклічних практик. Зосереджуючись на зменшенні відходів, підвищенні ресурсоефективності та замиканні циклу, ці полотна забезпечують структурований підхід до впровадження принципів циклічної економіки в основні операції, клієнтів і дохід. Кінцевою метою є сприяння регенераційній бізнес-моделі, яка приносить користь навколишньому середовищу та забезпечує економічну цінність і соціальний вплив. Покрокову інструкцію щодо проведення цього семінару можна знайти в круглому пакеті полотен.",
        ro: "Pachetul Circular Business Development Canvas are scopul de a împuternici întreprinderile să treacă de la modelele liniare tradiționale la practici circulare inovatoare. Concentrându-se pe reducerea deșeurilor, îmbunătățirea eficienței resurselor și închiderea buclei, aceste pânze oferă o abordare structurată pentru încorporarea principiilor economiei circulare în operațiunile de bază, clienții și veniturile. Scopul final este de a promova un model de afaceri regenerativ care aduce beneficii mediului și generează valoare economică și impact social. Un ghid pas cu pas despre cum să desfășurați acest atelier poate fi găsit în pachetul de pânză circulară.",
        hy: "Circular Business Development Canvas Pack-ը նպատակ ունի հզորացնել բիզնեսին ավանդական գծային մոդելներից անցնելու նորարարական շրջանաձև պրակտիկայի: Կենտրոնանալով թափոնների կրճատման, ռեսուրսների արդյունավետության բարձրացման և օղակը փակելու վրա՝ այս կտավները կառուցվածքային մոտեցում են ապահովում՝ հիմնական գործառնությունների, հաճախորդների և եկամուտների մեջ շրջանաձև տնտեսության սկզբունքները ներառելու համար: Վերջնական նպատակն է խթանել վերականգնվող բիզնես մոդելը, որն օգուտ կբերի շրջակա միջավայրին և խթանում է տնտեսական արժեքն ու սոցիալական ազդեցությունը: Այս սեմինարն իրականացնելու քայլ առ քայլ ուղեցույցը կարելի է գտնել շրջանաձև կտավի փաթեթում:"
      },
    journeyPhases: ['Evaluate'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation / Business Model Lab',
    access: 'Sign up',
    timeRequired: {
      en: "2-4 hours (workshop format)",
      uk: "2-4 години (формат воркшопу)",
      ro: "2-4 ore (format atelier)",
      hy: "2-4 ժամ (սեմինարի ձևաչափ)"
    },
    preparationNeeded: {
      en: "Print out PDF, pens and prepare participants",
      uk: "Роздрукуйте PDF, ручки та підготуйте учасників",
      ro: "Imprimați PDF, pixuri și pregătiți participanții",
      hy: "Տպեք PDF, գրիչներ և պատրաստեք մասնակիցներին"
    },
    output:
      {
        en: "Completed circular Business Model Canvas (BMC); clear view of how the circular business model changes your operations.",
        uk: "Завершена кругова бізнес-модель Canvas (BMC); чітке уявлення про те, як циркулярна бізнес-модель змінює ваші операції.",
        ro: "Modelul de afaceri circular (BMC) finalizat; vedere clară a modului în care modelul circular de afaceri vă schimbă operațiunile.",
        hy: "Ավարտված շրջանաձև բիզնես մոդելի կտավ (BMC); հստակ պատկերացում, թե ինչպես է շրջանաձև բիզնես մոդելը փոխում ձեր գործունեությունը:"
      },
    bestFor: {
      en: "small-medium enterprises (SMEs) that have identified a preferred circular business model and want to develop it in detail.",
      uk: "малі та середні підприємства (МСП), які визначили бажану циркулярну бізнес-модель і хочуть її детально розробити.",
      ro: "întreprinderi mici și mijlocii (IMM-uri) care au identificat un model de afaceri circular preferat și doresc să-l dezvolte în detaliu.",
      hy: "փոքր-միջին ձեռնարկություններ (ՓՄՁ), որոնք բացահայտել են նախընտրելի շրջանաձև բիզնես մոդել և ցանկանում են այն մանրամասն զարգացնել:"
    },
    format: {
      en: "PDF",
      uk: "PDF",
      ro: "PDF",
      hy: "PDF"
    },
    toolLink:
      'https://circulareconomy.europa.eu/platform/sites/default/files/2025-02/Circular%2BBusiness%2BDevelopment%2BCanvas%2BPack%2B-%2BVersion%2B1%2C%2BJanuary%2B2025%2B-%2BThe%2BGood%2BTribe.pdf'
  },
  {
    id: 'resource-011',
    slug: 'saxion-quickscan-circular-business-models',
    title: 'Saxion Quickscan Circular Business Models',
    description:
      {
        en: "Helps you rapidly assess which circular business models best fit their situation using a scored matrix approach.",
        uk: "Допомагає вам швидко оцінити, які циклічні бізнес-моделі найкраще відповідають їхній ситуації, використовуючи підхід оціненої матриці.",
        ro: "Vă ajută să evaluați rapid care modele de afaceri circulare se potrivesc cel mai bine cu situația lor, folosind o abordare cu matrice cu punctaj.",
        hy: "Օգնում է ձեզ արագ գնահատել, թե որ շրջանաձև բիզնես մոդելներն են լավագույնս համապատասխանում իրենց իրավիճակին՝ օգտագործելով գնահատված մատրիցային մոտեցումը:"
      },
    about:
      {
        en: "With the Quickscan Circular Business Model (CBM) you gain insight into the possibilities of a circular business model for your company. You use a questionnaire to assess where you are now when it comes to sustainable and circular entrepreneurship. You then explore the possibilities for a more circular business model by choosing a basic type of circular business model and selecting options for building blocks such as the organisational form and the revenue model.",
        uk: "За допомогою кругової бізнес-моделі Quickscan (CBM) ви дізнаєтеся про можливості циклічної бізнес-моделі для вашої компанії. Ви використовуєте анкету, щоб оцінити, де ви зараз перебуваєте, коли справа доходить до сталого та циклічного підприємництва. Потім ви досліджуєте можливості для більш циклічної бізнес-моделі, вибираючи базовий тип циклічної бізнес-моделі та вибираючи параметри для будівельних блоків, таких як організаційна форма та модель доходу.",
        ro: "Cu Quickscan Circular Business Model (CBM) obțineți o perspectivă asupra posibilităților unui model de afaceri circular pentru compania dumneavoastră. Folosiți un chestionar pentru a evalua unde vă aflați acum când vine vorba de antreprenoriat sustenabil și circular. Apoi explorați posibilitățile pentru un model de afaceri mai circular, alegând un tip de bază de model de afaceri circular și selectând opțiuni pentru blocuri, cum ar fi forma organizațională și modelul de venituri.",
        hy: "Quickscan Circular Business Model-ի (CBM) միջոցով դուք պատկերացում եք ստանում ձեր ընկերության համար շրջանաձև բիզնես մոդելի հնարավորությունների մասին: Դուք հարցաշար եք օգտագործում՝ գնահատելու համար, թե որտեղ եք այժմ, երբ խոսքը վերաբերում է կայուն և շրջանաձև ձեռներեցությանը: Այնուհետև դուք ուսումնասիրում եք ավելի շրջանաձև բիզնես մոդելի հնարավորությունները՝ ընտրելով շրջանաձև բիզնես մոդելի հիմնական տեսակը և ընտրելով այնպիսի բլոկների կառուցման տարբերակներ, ինչպիսիք են կազմակերպչական ձևը և եկամտի մոդելը:"
      },
    journeyPhases: ['Evaluate', 'Assess'],
    placements: {
      phaseSections:['evaluate:shortlist-strategies']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Saxion University of Applied Sciences',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours",
      uk: "1-2 години",
      ro: "1-2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded:
      {
        en: "General knowledge of your business and the opportunities you have identified in the previous phase.",
        uk: "Загальні знання про ваш бізнес і можливості, які ви визначили на попередньому етапі.",
        ro: "Cunoștințe generale despre afacerea dvs. și oportunitățile pe care le-ați identificat în faza anterioară.",
        hy: "Ընդհանուր գիտելիքներ ձեր բիզնեսի և այն հնարավորությունների մասին, որոնք դուք բացահայտել եք նախորդ փուլում:"
      },
    output: {
      en: "Prioritised Circular Business Model (CBM) shortlist; scored overview of options; basis for business case development.",
      uk: "Пріоритетизована кругова бізнес-модель (CBM) короткий список; оцінений огляд варіантів; основа для розробки бізнес-кейсів.",
      ro: "Lista scurtă a modelului circular de afaceri prioritar (CBM); vedere de ansamblu punctat asupra opțiunilor; baza pentru dezvoltarea cazului de afaceri.",
      hy: "Առաջնահերթ շրջանաձև բիզնես մոդելի (CBM) կարճ ցուցակ; ընտրանքների գնահատված ակնարկ; բիզնես գործի զարգացման հիմք:"
    },
    bestFor: {
      en: "small-medium enterprises (SMEs) new to circular business modelling wanting a structured starting point.",
      uk: "малі та середні підприємства (МСП), які не знайомі з циклічним бізнес-моделюванням, яким потрібна структурована стартова точка.",
      ro: "întreprinderile mici-mijlocii (IMM-uri) nou în modelarea circulară de afaceri care doresc un punct de plecare structurat.",
      hy: "փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք նոր են շրջաձև բիզնես մոդելավորման մեջ, որոնք ցանկանում են կառուցվածքային մեկնարկային կետ:"
    },
    format: {
      en: "Excel",
      uk: "Excel",
      ro: "Excela",
      hy: "Excel"
    },
    toolLink:
      'https://businessmodellab.nl/dam/jcr:d91068cb-94f8-4c9d-8ac0-c76a45ae1256/tool_quickscan-circulair-businessmodel%20EN.xlsx'
  },
  {
    id: 'resource-012',
    slug: 'position-green-sustainability-roi-calculator',
    title: 'Position Green Sustainability Return on Investment (ROI) Calculator',
    description:
      {
        en: "Online calculator that builds a data-backed business case for circular investment by computing financial return, payback time, and emissions impact using discounted cash flow logic.",
        uk: "Онлайн-калькулятор, який будує бізнес-обґрунтування циклічних інвестицій, обчислюючи фінансову віддачу, час окупності та вплив викидів за допомогою логіки дисконтованого грошового потоку.",
        ro: "Calculator online care construiește un caz de afaceri bazat pe date pentru investiții circulare, calculând randamentul financiar, timpul de rambursare și impactul emisiilor folosind logica fluxului de numerar redus.",
        hy: "Առցանց հաշվիչ, որը ստեղծում է տվյալների վրա հիմնված բիզնես գործ՝ շրջանաձև ներդրումների համար՝ հաշվարկելով ֆինանսական վերադարձը, վերադարձի ժամանակը և արտանետումների ազդեցությունը՝ օգտագործելով զեղչված դրամական հոսքերի տրամաբանությունը:"
      },
    about:
      {
        en: "Calculate your sustainability Return on Investment (ROI). Build your business case and prove the value of your sustainability work. See the financial return, payback period, and emissions impact of sustainability investments based on your inputs and real business drivers. Model real business scenarios, test cost and savings drivers, quantify financial and carbon impact, and export a decision-ready summary.",
        uk: "Розрахуйте рентабельність інвестицій (ROI). Створіть своє ділове обґрунтування та доведіть цінність вашої роботи зі сталого розвитку. Перегляньте фінансову віддачу, період окупності та вплив на викиди інвестицій у сталий розвиток на основі ваших вкладів і реальних рушійних сил бізнесу. Моделюйте реальні бізнес-сценарії, перевіряйте фактори, що впливають на витрати та заощадження, кількісно оцінюйте фінансовий вплив і вплив викидів вуглецю, а також експортуйте зведення, готове для прийняття рішень.",
        ro: "Calculați-vă rentabilitatea investiției (ROI) pentru sustenabilitate. Construiește-ți cazul de afaceri și dovedește valoarea muncii tale în domeniul durabilității. Vedeți rentabilitatea financiară, perioada de rambursare și impactul asupra emisiilor de investiții în sustenabilitate pe baza contribuțiilor dvs. și a factorilor de afaceri reali. Modelați scenarii de afaceri reale, testați factorii de cost și economii, cuantificați impactul financiar și de carbon și exportați un rezumat gata de decizie.",
        hy: "Հաշվարկեք ձեր կայուն ներդրումների վերադարձը (ROI): Կառուցեք ձեր բիզնեսի գործը և ապացուցեք ձեր կայուն աշխատանքի արժեքը: Տեսեք կայունության ներդրումների ֆինանսական վերադարձը, վերադարձի ժամկետը և արտանետումների ազդեցությունը՝ հիմնված ձեր ներդրումների և բիզնեսի իրական դրդապատճառների վրա: Մոդել իրական բիզնեսի սցենարներ, փորձարկեք ծախսերի և խնայողությունների դրդապատճառները, քանակականացրեք ֆինանսական և ածխածնի ազդեցությունը և արտահանեք որոշումների համար պատրաստ ամփոփագիր:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Position Green',
    access: 'Free',
    timeRequired: {
      en: "30-60 minutes",
      uk: "30-60 хвилин",
      ro: "30-60 de minute",
      hy: "30-60 րոպե"
    },
    preparationNeeded: {
      en: "Prepare relevant investment, cost, savings and emissions data before starting.",
      uk: "Перед початком підготуйте відповідні дані про інвестиції, витрати, заощадження та викиди.",
      ro: "Pregătiți date relevante privind investițiile, costurile, economiile și emisiile înainte de a începe.",
      hy: "Նախքան սկսելը պատրաստեք համապատասխան ներդրումների, ծախսերի, խնայողությունների և արտանետումների տվյալները:"
    },
    output:
      {
        en: "Return on Investment (ROI) percentage, payback period, and emissions impact; scenario comparison; board-ready financial summary.",
        uk: "Відсоток рентабельності інвестицій (ROI), період окупності та вплив викидів; порівняння сценаріїв; готовий до дошки фінансовий підсумок.",
        ro: "Procentul de rentabilitate a investiției (ROI), perioada de rambursare și impactul emisiilor; compararea scenariilor; rezumat financiar pregătit pentru consiliu.",
        hy: "Ներդրումների վերադարձի (ROI) տոկոսը, վերադարձի ժամկետը և արտանետումների ազդեցությունը. սցենարների համեմատություն; խորհրդի համար պատրաստ ֆինանսական ամփոփագիր."
      },
    bestFor:
      {
        en: "SMEs building a financial case for a circular investment, pilot project, or green finance application.",
        uk: "Малі та середні підприємства створюють фінансове обґрунтування циклічного інвестування, пілотного проекту або програми зеленого фінансування.",
        ro: "IMM-urile construiesc un caz financiar pentru o investiție circulară, un proiect pilot sau o aplicație de finanțare ecologică.",
        hy: "ՓՄՁ-ները ֆինանսական գործ են ստեղծում շրջանաձև ներդրումների, փորձնական ծրագրի կամ կանաչ ֆինանսավորման հայտի համար:"
      },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.positiongreen.com/drive-business-value/roi-calculator/'
  },
  {
    id: 'resource-013',
    slug: 'circular-economy-trend-cards',
    title: 'Circular Economy Trend Cards',
    description:
      {
        en: "Provides you with an overview of the current trends and key questions in the circular economy space with the aim of inspiring discussions and brainstorms.",
        uk: "Надає огляд поточних тенденцій і ключових питань у просторі циркулярної економіки з метою надихнути на дискусії та мозкові штурми.",
        ro: "Vă oferă o imagine de ansamblu asupra tendințelor actuale și a întrebărilor cheie din spațiul economiei circulare, cu scopul de a inspira discuții și brainstorming.",
        hy: "Ձեզ տրամադրում է շրջանաձև տնտեսության ոլորտում առկա միտումների և հիմնական հարցերի ակնարկ՝ նպատակ ունենալով ոգեշնչել քննարկումները և մտքերի փոթորիկը:"
      },
    about:
      {
        en: "Printable or digital cards covering key circular economy trends, opportunities, and threats. Designed to facilitate team discussions and feed into Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis. Prompts strategic thinking about which circular options are relevant given market and regulatory trends. Freely available and easy to use in a workshop setting. For best use, it can be combined with a SWOT Matrix template or other circular business model ideation tools. Depending on the amount of people to include in the workshop to discuss the questions and trends in the cards, it can take 1-3 hours to complete a facilitated exercise.",
        uk: "Роздруковані або цифрові картки, які висвітлюють ключові тенденції, можливості та загрози циклічної економіки. Розроблено, щоб полегшити групові обговорення та врахувати сильні сторони, слабкі сторони, можливості та загрози (SWOT). Спонукає до стратегічного мислення щодо того, які циклічні варіанти є актуальними з огляду на ринкові та регуляторні тенденції. Безкоштовно доступний і простий у використанні в умовах майстерні. Для найкращого використання його можна поєднати з шаблоном матриці SWOT або іншими інструментами створення ідей циклічної бізнес-моделі. Залежно від кількості людей, яких потрібно залучити до семінару для обговорення питань і тенденцій у картках, виконання полегшеної вправи може зайняти 1-3 години.",
        ro: "Carduri imprimabile sau digitale care acoperă tendințele, oportunitățile și amenințările cheie ale economiei circulare. Conceput pentru a facilita discuțiile în echipă și pentru a alimenta analiza punctelor forte, punctelor slabe, oportunităților și amenințărilor (SWOT). Determină o gândire strategică asupra opțiunilor circulare relevante, având în vedere tendințele pieței și ale reglementărilor. Disponibil gratuit și ușor de utilizat într-un cadru de atelier. Pentru o utilizare optimă, poate fi combinat cu un șablon SWOT Matrix sau cu alte instrumente circulare de ideare a modelelor de afaceri. În funcție de numărul de persoane care trebuie incluse în atelier pentru a discuta întrebările și tendințele din carduri, poate dura 1-3 ore pentru a finaliza un exercițiu facilitat.",
        hy: "Տպագրվող կամ թվային քարտեր, որոնք ընդգրկում են շրջանաձև տնտեսության հիմնական միտումները, հնարավորությունները և սպառնալիքները: Նախագծված է թիմային քննարկումները հեշտացնելու և ուժեղ կողմերի, թույլ կողմերի, հնարավորությունների և սպառնալիքների (SWOT) վերլուծության համար: Առաջարկում է ռազմավարական մտածել այն մասին, թե որ շրջանաձև տարբերակներն են տեղին շուկայական և կարգավորող միտումների առկայության դեպքում: Ազատ հասանելի և հեշտ օգտագործման համար սեմինարի միջավայրում: Լավագույն օգտագործման համար այն կարող է համակցվել SWOT Matrix ձևանմուշի կամ բիզնես մոդելի գաղափարի այլ շրջանաձև գործիքների հետ: Կախված այն մարդկանց քանակից, որոնք պետք է ընդգրկվեն սեմինարին՝ քարտերի հարցերն ու միտումները քննարկելու համար, հեշտացված վարժությունն ավարտելու համար կարող է տևել 1-3 ժամ:"
      },
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections:['explore:identify-options']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit Norden / Rise Research Institutes',
    access: 'Free',
    timeRequired: {
      en: "1-3 hours",
      uk: "1-3 години",
      ro: "1-3 ore",
      hy: "1-3 ժամ"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output:
      {
        en: "Identified circular economy trends, opportunities, threats, and discussion inputs for Strengths, Weaknesses, Opportunities and Threats (SWOT) analysis or future business model ideas.",
        uk: "Визначені тенденції циклічної економіки, можливості, загрози та вхідні дані для обговорення для аналізу сильних і слабких сторін, можливостей і загроз (SWOT) або ідей майбутніх бізнес-моделей.",
        ro: "Tendințele, oportunitățile, amenințările și inputurile pentru discuții ale economiei circulare au fost identificate pentru analiza punctelor forte, punctelor slabe, oportunităților și amenințărilor (SWOT) sau idei de modele de afaceri viitoare.",
        hy: "Սահմանել է շրջանաձև տնտեսության միտումները, հնարավորությունները, սպառնալիքները և քննարկման մուտքերը ուժեղ կողմերի, թույլ կողմերի, հնարավորությունների և սպառնալիքների (SWOT) վերլուծության կամ ապագա բիզնես մոդելի գաղափարների համար:"
      },
    bestFor: {
      en: "All small-medium enterprises (SMEs)",
      uk: "Усі малі та середні підприємства (МСП)",
      ro: "Toate întreprinderile mici și mijlocii (IMM-uri)",
      hy: "Բոլոր փոքր և միջին ձեռնարկությունները (ՓՄՁ)"
    },
    format: {
      en: "workshop cards, PDF",
      uk: "картки майстерні, PDF",
      ro: "carduri de atelier, PDF",
      hy: "սեմինարի քարտեր, PDF"
    },
    toolLink: 'https://circitnord.com/wp-content/uploads/2020/04/T02_Circular-Economy-Trends-Cards_CC.pdf'
  },
  {
    id: 'resource-014',
    slug: 'circular-pathfinder',
    title: 'Circular Pathfinder',
    description:
      {
        en: "Helps companies identify suitable circular design strategies for their products through a guided decision process.",
        uk: "Допомагає компаніям визначити відповідні стратегії циклічного проектування для своїх продуктів за допомогою керованого процесу прийняття рішень.",
        ro: "Ajută companiile să identifice strategii adecvate de proiectare circulară pentru produsele lor printr-un proces de decizie ghidat.",
        hy: "Օգնում է ընկերություններին որոշել իրենց արտադրանքի համար հարմար շրջանաձև նախագծման ռազմավարությունները՝ առաջնորդվող որոշումների գործընթացի միջոցով:"
      },
    about:
      {
        en: "An ideation tool that helps you explore and identify the most suitable circular pathways for your products. Based on best practices from other companies, you answer a few questions and receive tailored circular strategy recommendations. Simple, free, and requires no prior circular economy expertise.",
        uk: "Інструмент ідей, який допоможе вам досліджувати та визначати найбільш підходящі кільцеві шляхи для ваших продуктів. На основі передового досвіду інших компаній ви відповідаєте на кілька запитань і отримуєте індивідуальні рекомендації щодо циклічної стратегії. Простий, безкоштовний і не потребує попереднього досвіду в економіці замкнутого циклу.",
        ro: "Un instrument de ideare care vă ajută să explorați și să identificați cele mai potrivite căi circulare pentru produsele dvs. Pe baza celor mai bune practici de la alte companii, răspundeți la câteva întrebări și primiți recomandări de strategii circulare personalizate. Simplu, gratuit și nu necesită experiență anterioară în economia circulară.",
        hy: "Գաղափարման գործիք, որն օգնում է ձեզ ուսումնասիրել և բացահայտել ձեր արտադրանքի համար ամենահարմար շրջանաձև ուղիները: Այլ ընկերությունների լավագույն փորձի հիման վրա դուք պատասխանում եք մի քանի հարցերի և ստանում եք հարմարեցված շրջանաձև ռազմավարության առաջարկություններ: Պարզ, անվճար և չի պահանջում շրջանաձև տնտեսության նախնական փորձաքննություն:"
      },
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections:['explore:identify-options']
    },
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'European Commission / IDEAL&CO',
    access: 'Free',
    timeRequired: {
      en: "15-30 minutes",
      uk: "15-30 хвилин",
      ro: "15-30 minute",
      hy: "15-30 րոպե"
    },
    preparationNeeded:
      {
        en: "Users should have basic knowledge of their product, materials, lifecycle, and business model.",
        uk: "Користувачі повинні мати базові знання про свій продукт, матеріали, життєвий цикл і бізнес-модель.",
        ro: "Utilizatorii ar trebui să aibă cunoștințe de bază despre produsul lor, materialele, ciclul de viață și modelul de afaceri.",
        hy: "Օգտագործողները պետք է ունենան հիմնական գիտելիքներ իրենց արտադրանքի, նյութերի, կյանքի ցիկլի և բիզնես մոդելի մասին:"
      },
    output:
      {
        en: "Suggested circular design strategies and guidance on relevant circular economy approaches for the product.",
        uk: "Запропоновані стратегії циклічного проектування та вказівки щодо відповідних підходів циклічної економіки для продукту.",
        ro: "Strategii de proiectare circulară sugerate și îndrumări privind abordările relevante ale economiei circulare pentru produs.",
        hy: "Առաջարկվող շրջանաձև նախագծման ռազմավարություններ և ուղեցույց արտադրանքի համար համապատասխան շրջանաձև տնտեսության մոտեցումների վերաբերյալ:"
      },
    bestFor: {
      en: "Manufacturing small-medium enterprises (SMEs), product developers, and companies exploring circular product design or redesign.",
      uk: "Виробничі малі та середні підприємства (МСП), розробники продуктів і компанії, які вивчають круговий дизайн або редизайн продукту.",
      ro: "Întreprinderi de producție mici și mijlocii (IMM-uri), dezvoltatori de produse și companii care explorează proiectarea sau reproiectarea circulară a produselor.",
      hy: "Արտադրող փոքր և միջին ձեռնարկություններ (ՓՄՁ), արտադրանք մշակողներ և ընկերություններ, որոնք ուսումնասիրում են արտադրանքի շրջանաձև ձևավորում կամ վերանախագծում:"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.ideal-co.nl/pathfinder/'
  },
  {
    id: 'resource-015',
    slug: 'circular-strategies-wheel-workshop',
    title: 'Circular Strategies Wheel Workshop',
    description: {
      en: "To identify circular strategies that fit your business",
      uk: "Щоб визначити циклічні стратегії, які відповідають вашому бізнесу",
      ro: "Pentru a identifica strategiile circulare care se potrivesc afacerii dvs",
      hy: "Ձեր բիզնեսին համապատասխանող շրջանաձև ռազմավարությունները բացահայտելու համար"
    },
    about:
      {
        en: "The Circular Strategies Wheel gives your team a shared visual overview of circular strategies across the three phases of a product or service's life: start of life, product life, and end of life. It turns circularity from an abstract idea into something tangible and actionable, helping your team connect relevant strategies to your business context. By working through it together, you identify key opportunities, areas of interest, and practical barriers, creating a grounded, team-owned starting point for building your circular business model.",
        uk: "Колесо циклічних стратегій надає вашій команді спільний візуальний огляд циклічних стратегій на трьох етапах життєвого циклу продукту чи послуги: початок життєвого циклу, життєвий цикл продукту та кінець життєвого циклу. Він перетворює циркулярність із абстрактної ідеї на щось відчутне та дієве, допомагаючи вашій команді зв’язати релевантні стратегії з контекстом вашого бізнесу. Працюючи над ним разом, ви визначаєте ключові можливості, сфери інтересів і практичні перешкоди, створюючи обґрунтовану командну відправну точку для побудови вашої циклічної бізнес-моделі.",
        ro: "Roata Strategiilor Circulare oferă echipei dvs. o imagine de ansamblu comună a strategiilor circulare în cele trei faze ale vieții unui produs sau serviciu: începutul vieții, viața produsului și sfârșitul vieții. Transformă circularitatea dintr-o idee abstractă în ceva tangibil și acționabil, ajutându-ți echipa să conecteze strategiile relevante la contextul tău de afaceri. Lucrând împreună, identificați oportunitățile cheie, domeniile de interes și barierele practice, creând un punct de plecare bazat, deținut de echipă, pentru construirea modelului dvs. de afaceri circular.",
        hy: "Circular Strategies Wheel-ը ձեր թիմին տալիս է արտադրանքի կամ ծառայության կյանքի երեք փուլերի շրջանակային ռազմավարությունների ընդհանուր տեսողական ակնարկ՝ կյանքի սկիզբ, արտադրանքի ժամկետ և կյանքի ավարտ: Այն շրջանաձևությունը վերացական գաղափարից վերածում է շոշափելի և գործող բանի՝ օգնելով ձեր թիմին համապատասխան ռազմավարությունները կապել ձեր բիզնեսի համատեքստին: Միասին աշխատելով դրա միջոցով՝ դուք բացահայտում եք հիմնական հնարավորությունները, հետաքրքրությունների ոլորտները և գործնական խոչընդոտները՝ ստեղծելով հիմնավորված, թիմային ելակետ՝ ձեր շրջանաձև բիզնես մոդելը կառուցելու համար:"
      },
    journeyPhases: ['Explore'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Danish Design Center',
    access: 'Free',
    timeRequired: {
      en: "30-45 minutes",
      uk: "30-45 хвилин",
      ro: "30-45 minute",
      hy: "30-45 րոպե"
    },
    preparationNeeded: {
      en: "Print out, post its, pens and people",
      uk: "Роздрукуйте, розмістіть, ручки та люди",
      ro: "Imprimați, postați, pixuri și oameni",
      hy: "Տպեք, տեղադրեք այն, գրիչները և մարդկանց"
    },
    output: {
      en: "An overview of the circular strategies most relevant to your SME",
      uk: "Огляд циклічних стратегій, найбільш відповідних вашому МСП",
      ro: "O prezentare generală a strategiilor circulare cele mai relevante pentru IMM-ul dumneavoastră",
      hy: "Ձեր ՓՄՁ-ի համար առավել համապատասխան շրջանաձև ռազմավարությունների ակնարկ"
    },
    bestFor: {
      en: "All SMEs",
      uk: "Всі МСП",
      ro: "Toate IMM-urile",
      hy: "Բոլոր ՓՄՁ-ները"
    },
    format: {
      en: "Miro board or print out",
      uk: "Дошка Miro або роздрукувати",
      ro: "Miro tablă sau imprimă",
      hy: "Miro տախտակ կամ տպեք"
    },
    toolLink: 'https://ddc.dk/wp-content/uploads/2020/10/Circular_strategies_wheel_canvas.pdf'
  },
  {
    id: 'resource-017',
    slug: 'up2circ-assessment',
    title: 'Up2Circ Assessment',
    description:
      {
        en: "Assists you in self evaluating your current standing in their circular journey by asking simple questions and providing insights based on answers.",
        uk: "Допомагає вам самостійно оцінити ваше поточне становище в їхній круговій подорожі, ставлячи прості запитання та надаючи ідеї на основі відповідей.",
        ro: "Vă ajută să vă autoevaluați situația actuală în călătoria lor circulară punând întrebări simple și oferind perspective bazate pe răspunsuri.",
        hy: "Օգնում է ձեզ ինքնուրույն գնահատել ձեր ներկայիս դիրքը իրենց շրջանաձև ճանապարհորդության ընթացքում՝ տալով պարզ հարցեր և տրամադրելով պատկերացումներ՝ հիմնված պատասխանների վրա:"
      },
    about:
      {
        en: "This Up2Circ Circularity Assessment Tool will help you to become familiar with the circular economy, score how well you integrate circular strategies into your business, and discover opportunities for improvement and challenges to address.",
        uk: "Цей Інструмент оцінки замкнутості Up2Circ допоможе вам ознайомитися з економікою замкнутого циклу, оцінити, наскільки добре ви інтегруєте циклічні стратегії у свій бізнес, а також виявити можливості для вдосконалення та проблеми, які потрібно вирішити.",
        ro: "Acest instrument de evaluare a circularității Up2Circ vă va ajuta să vă familiarizați cu economia circulară, să notați cât de bine integrați strategiile circulare în afacerea dvs. și să descoperiți oportunități de îmbunătățire și provocări de abordat.",
        hy: "Այս Up2Circ Circularity Assessment Tool-ը կօգնի ձեզ ծանոթանալ շրջանաձև տնտեսությանը, գնահատել, թե որքան լավ եք ինտեգրում շրջանաձև ռազմավարությունները ձեր բիզնեսում և բացահայտել բարելավման հնարավորություններ և մարտահրավերներ, որոնք պետք է լուծվեն:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Up2Circ',
    access: 'Free',
    timeRequired: {
      en: "15-20 minutes",
      uk: "15-20 хвилин",
      ro: "15-20 minute",
      hy: "15-20 րոպե"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Self assessment and recommendations",
      uk: "Самооцінка та рекомендації",
      ro: "Autoevaluare și recomandări",
      hy: "Ինքնագնահատում և առաջարկություններ"
    },
    bestFor: {
      en: "small-medium enterprises (SMEs) in all sectors",
      uk: "малі та середні підприємства (МСП) у всіх секторах",
      ro: "întreprinderi mici și mijlocii (IMM-uri) din toate sectoarele",
      hy: "փոքր-միջին ձեռնարկություններ (ՓՄՁ) բոլոր ոլորտներում"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://up2circ.eu/up2circ-assessment/#gf_9'
  },
  {
    id: 'resource-018',
    slug: 'smart-circular-economy-assessment-scea',
    title: 'Smart Material Choices Assessment',
    description: {
      en: "Helps you benchmark your current Circular Economy level and understand key gaps.",
      uk: "Допоможе вам порівняти ваш поточний рівень циркулярної економіки та зрозуміти ключові прогалини.",
      ro: "Vă ajută să evaluați nivelul actual de economie circulară și să înțelegeți lacunele cheie.",
      hy: "Օգնում է գնահատել ձեր ընթացիկ շրջանաձև տնտեսության մակարդակը և հասկանալ հիմնական բացերը:"
    },
    about:
      {
        en: "Learn to make smart material choices by asking the right questions. These steps will help you make better choices about what materials go into your products as well as their impact on the wider system.",
        uk: "Навчіться робити розумний вибір матеріалу, ставлячи правильні запитання. Ці кроки допоможуть вам зробити кращий вибір щодо матеріалів, які використовуються у ваших продуктах, а також їхнього впливу на ширшу систему.",
        ro: "Învață să faci alegeri inteligente de materiale punând întrebările potrivite. Acești pași vă vor ajuta să faceți alegeri mai bune cu privire la materialele care intră în produsele dvs., precum și la impactul acestora asupra sistemului mai larg.",
        hy: "Սովորեք խելացի նյութերի ընտրություն կատարել՝ տալով ճիշտ հարցեր: Այս քայլերը կօգնեն ձեզ ավելի լավ ընտրություն կատարել, թե ինչ նյութեր են մտնում ձեր արտադրանքի մեջ, ինչպես նաև դրանց ազդեցությունն ավելի լայն համակարգի վրա:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: {
      en: "30-45 min",
      uk: "30-45 хв",
      ro: "30-45 min",
      hy: "30-45 րոպե"
    },
    preparationNeeded: {
      en: "Basic business data",
      uk: "Основні бізнес-дані",
      ro: "Date de bază ale afacerii",
      hy: "Հիմնական բիզնես տվյալները"
    },
    output: {
      en: "Circular Economy (CE) maturity overview across 5 dimensions with visual output and priority recommendations.",
      uk: "Огляд зрілості циркулярної економіки (CE) у 5 вимірах із наочними результатами та пріоритетними рекомендаціями.",
      ro: "Prezentare generală a maturității economiei circulare (CE) pe 5 dimensiuni, cu rezultate vizuale și recomandări prioritare.",
      hy: "Circular Economy (CE) հասունության ակնարկ 5 հարթություններում` տեսողական արդյունքով և առաջնահերթ առաջարկություններով:"
    },
    bestFor: {
      en: "small-medium enterprises (SMEs) new to circular economy want a quick, accessible starting point.",
      uk: "малі та середні підприємства (МСП), які новачки в циркулярній економіці, хочуть отримати швидку та доступну стартову точку.",
      ro: "Întreprinderile mici și mijlocii (IMM-uri) nou în economia circulară doresc un punct de plecare rapid și accesibil.",
      hy: "փոքր-միջին ձեռնարկությունները (ՓՄՁ), որոնք նոր են շրջագայական տնտեսության մեջ, ցանկանում են արագ, մատչելի մեկնարկային կետ:"
    },
    format: {
      en: "PDF",
      uk: "PDF",
      ro: "PDF",
      hy: "PDF"
    },
    toolLink: 'https://ellenmacarthurfoundation.org/smart-material-choices'
  },
  {
    id: 'resource-019',
    slug: 'i-go-assessment-tool',
    title: 'I-GO Assessment Tool',
    description: {
      en: "Assesses organisational readiness for resource efficiency and circularity.",
      uk: "Оцінює організаційну готовність до ресурсоефективності та циркулярності.",
      ro: "Evaluează gradul de pregătire organizațional pentru eficiența resurselor și circularitate.",
      hy: "Գնահատում է կազմակերպչական պատրաստվածությունը ռեսուրսների արդյունավետության և շրջանաձևության համար:"
    },
    about:
      {
        en: "I-GO helps you become more productive, competitive, and resilient by making it easier to access tailored knowledge and support services on resource efficiency. It is the I-GO Assistant tool that guides businesses through self-assessment, suggests practical improvements, and connects them with customised support based on your specific needs.",
        uk: "I-GO допомагає вам стати більш продуктивними, конкурентоспроможними та стійкими, спрощуючи доступ до спеціалізованих знань і послуг підтримки з ефективного використання ресурсів. Це інструмент I-GO Assistant, який проводить бізнес через самооцінку, пропонує практичні вдосконалення та зв’язує їх із індивідуальною підтримкою на основі ваших конкретних потреб.",
        ro: "I-GO vă ajută să deveniți mai productiv, mai competitiv și mai rezistent, facilitând accesul la cunoștințe personalizate și servicii de asistență privind eficiența resurselor. Este instrumentul I-GO Assistant care ghidează companiile prin autoevaluare, sugerează îmbunătățiri practice și le conectează cu asistență personalizată în funcție de nevoile dumneavoastră specifice.",
        hy: "I-GO-ն օգնում է ձեզ դառնալ ավելի արդյունավետ, մրցունակ և ճկուն՝ հեշտացնելով հարմարեցված գիտելիքների հասանելիությունը և ռեսուրսների արդյունավետության աջակցության ծառայությունները: Դա I-GO Assistant գործիքն է, որն ուղղորդում է բիզնեսին ինքնագնահատման միջոցով, առաջարկում գործնական բարելավումներ և կապում դրանք հարմարեցված աջակցության հետ՝ հիմնված ձեր հատուկ կարիքների վրա:"
      },
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['assess:maturity-assessment']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English, Ukrainian, Russian, Portuguese, Spanish, Georgian, Arabic',
    provider: 'International Green Economy Association / Green Growth Knowledge Partnership (GGKP)',
    access: 'Free',
    timeRequired: {
      en: "45-60 minutes",
      uk: "45-60 хвилин",
      ro: "45-60 minute",
      hy: "45-60 րոպե"
    },
    preparationNeeded: {
      en: "Project data, operations info",
      uk: "Дані проекту, інформація про операції",
      ro: "Date despre proiect, informații despre operațiuni",
      hy: "Ծրագրի տվյալներ, գործառնությունների տվյալներ"
    },
    output: {
      en: "Structured assessment of green economy readiness with scored indicators.",
      uk: "Структурована оцінка готовності зеленої економіки з бальними показниками.",
      ro: "Evaluare structurată a pregătirii pentru economia verde cu indicatori punctați.",
      hy: "Կանաչ տնտեսության պատրաստվածության կառուցվածքային գնահատում բալային ցուցանիշներով."
    },
    bestFor: {
      en: "small-medium enterprises (SMEs) with some sustainability activity looking for a more structured review.",
      uk: "малі та середні підприємства (МСП), які займаються певною діяльністю у сфері сталого розвитку, потребують більш структурованого огляду.",
      ro: "întreprinderi mici și mijlocii (IMM-uri) cu o anumită activitate de durabilitate care caută o revizuire mai structurată.",
      hy: "փոքր-միջին ձեռնարկությունները (ՓՄՁ), որոնք ունեն որոշակի կայուն գործունեություն, որոնք փնտրում են ավելի կառուցվածքային վերանայում:"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://igosolution.org/'
  },
  {
    id: 'resource-020',
    slug: 'material-flow-analysis-mfa-workshop',
    title: 'Material Flow Analysis (MFA) Workshop',
    description:
      {
        en: "Maps materials used in production and helps to showcase material flows of your products",
        uk: "Картографує матеріали, що використовуються у виробництві, і допомагає продемонструвати матеріальні потоки вашої продукції",
        ro: "Mapează materialele utilizate în producție și ajută la prezentarea fluxurilor de materiale ale produselor dvs",
        hy: "Քարտեզագրում է արտադրության մեջ օգտագործվող նյութերը և օգնում ցուցադրել ձեր արտադրանքի նյութական հոսքերը"
      },
    about:
      {
        en: "Material Flow Analysis (MFA) gives a quantitative overview of the flow of materials in a defined system which for instance can be the flow of materials in a manufacturing company. An MFA always consists of a system boundary, one or more processes, material flows and stocks of materials within processes.",
        uk: "Аналіз матеріальних потоків (MFA) дає кількісний огляд потоків матеріалів у певній системі, якою, наприклад, може бути потік матеріалів у виробничій компанії. MFA завжди складається з межі системи, одного або кількох процесів, матеріальних потоків і запасів матеріалів у процесах.",
        ro: "Analiza fluxului de materiale (MFA) oferă o imagine de ansamblu cantitativă a fluxului de materiale într-un sistem definit, care, de exemplu, poate fi fluxul de materiale într-o companie de producție. Un MFA constă întotdeauna dintr-o limită de sistem, unul sau mai multe procese, fluxuri de materiale și stocuri de materiale în cadrul proceselor.",
        hy: "Նյութերի հոսքի վերլուծությունը (MFA) տալիս է որոշակի համակարգում նյութերի հոսքի քանակական ակնարկ, որը, օրինակ, կարող է լինել նյութերի հոսքը արտադրական ընկերությունում: MFA-ն միշտ բաղկացած է համակարգի սահմանից, մեկ կամ մի քանի գործընթացներից, նյութերի հոսքերից և գործընթացներում նյութերի պաշարներից:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:mapping-resources']
    },
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'Ready2Loop',
    access: 'Sign up',
    timeRequired: {
      en: "5-12 hours",
      uk: "5-12 годин",
      ro: "5-12 ore",
      hy: "5-12 ժամ"
    },
    preparationNeeded: {
      en: "Material, energy and waste data",
      uk: "Дані про матеріали, енергію та відходи",
      ro: "Date despre materiale, energie și deșeuri",
      hy: "Նյութի, էներգիայի և թափոնների տվյալներ"
    },
    output:
      {
        en: "Overview of flows of materials in the system. Overview of the quantities and type of materials utilised in the system.",
        uk: "Огляд потоків матеріалів у системі. Огляд кількості та типу матеріалів, що використовуються в системі.",
        ro: "Prezentare generală a fluxurilor de materiale în sistem. Prezentare generală a cantităților și tipului de materiale utilizate în sistem.",
        hy: "Համակարգում նյութերի հոսքերի ակնարկ: Համակարգում օգտագործվող նյութերի քանակի և տեսակի ակնարկ:"
      },
    bestFor: {
      en: "small-medium enterprises (SMEs) with physical products",
      uk: "малі та середні підприємства (МСП) з фізичною продукцією",
      ro: "întreprinderi mici-mijlocii (IMM-uri) cu produse fizice",
      hy: "փոքր և միջին ձեռնարկություններ (ՓՄՁ) ֆիզիկական արտադրանքով"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: 'https://ready2loop.org/en/981/Material+Flow+Analysis+%28MFA%29'
  },
  {
    id: 'resource-021',
    slug: 'stan-tool',
    title: 'STAN Tool',
    description: {
      en: "Visualises the material flow data of your products/services",
      uk: "Візуалізує дані про матеріальні потоки ваших продуктів/послуг",
      ro: "Vizualizează datele fluxului de materiale ale produselor/serviciilor dvs",
      hy: "Պատկերացնում է ձեր արտադրանքի/ծառայությունների նյութական հոսքի տվյալները"
    },
    about:
      {
        en: "STAN allows users to create graphical Material Flow Analysis (MFA) models using predefined elements such as processes, flows, system boundaries, and text fields. Users can input or import data like mass flows, stocks, concentrations, and transfer coefficients across different layers (materials, substances, energy) and time periods. The software can calculate unknown values automatically and visualize results as Sankey diagrams, where flow widths represent quantities. Models can also be printed or exported, and Microsoft Excel is used for importing and exporting data.",
        uk: "STAN дозволяє користувачам створювати графічні моделі аналізу матеріальних потоків (MFA) з використанням попередньо визначених елементів, таких як процеси, потоки, межі системи та текстові поля. Користувачі можуть вводити або імпортувати такі дані, як масові потоки, запаси, концентрації та коефіцієнти перенесення між різними рівнями (матеріали, речовини, енергія) і періодами часу. Програмне забезпечення може автоматично обчислювати невідомі значення та візуалізувати результати як діаграми Санкі, де ширина потоку представляє величини. Моделі також можна роздрукувати або експортувати, а Microsoft Excel використовується для імпорту та експорту даних.",
        ro: "STAN permite utilizatorilor să creeze modele grafice de analiză a fluxului de materiale (MFA) folosind elemente predefinite, cum ar fi procese, fluxuri, limite de sistem și câmpuri de text. Utilizatorii pot introduce sau importa date precum fluxuri de masă, stocuri, concentrații și coeficienți de transfer pe diferite straturi (materiale, substanțe, energie) și perioade de timp. Software-ul poate calcula automat valori necunoscute și poate vizualiza rezultatele ca diagrame Sankey, unde lățimile debitului reprezintă cantități. Modelele pot fi, de asemenea, imprimate sau exportate, iar Microsoft Excel este utilizat pentru importarea și exportul de date.",
        hy: "STAN-ը թույլ է տալիս օգտվողներին ստեղծել նյութի հոսքի վերլուծության (MFA) գրաֆիկական մոդելներ՝ օգտագործելով նախապես սահմանված տարրեր, ինչպիսիք են գործընթացները, հոսքերը, համակարգի սահմանները և տեքստային դաշտերը: Օգտագործողները կարող են մուտքագրել կամ ներմուծել տվյալներ, ինչպիսիք են զանգվածային հոսքերը, պաշարները, կոնցենտրացիաները և փոխանցման գործակիցները տարբեր շերտերով (նյութեր, նյութեր, էներգիա) և ժամանակաշրջաններում: Ծրագիրը կարող է ավտոմատ կերպով հաշվարկել անհայտ արժեքները և պատկերացնել արդյունքները որպես Sankey դիագրամներ, որտեղ հոսքի լայնությունները ներկայացնում են քանակություններ: Մոդելները կարող են նաև տպվել կամ արտահանվել, իսկ Microsoft Excel-ն օգտագործվում է տվյալների ներմուծման և արտահանման համար:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:mapping-resources']
    },
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'STAN2WEB',
    access: 'Sign up',
    timeRequired: {
      en: "Half-day to a day",
      uk: "Від півдня до дня",
      ro: "De la o jumătate de zi până la o zi",
      hy: "Կես օրից մեկ օր"
    },
    preparationNeeded: {
      en: "Preparing the material data, their quantity and uses.",
      uk: "Підготовка матеріальних даних, їх кількість та використання.",
      ro: "Pregatirea datelor materialelor, cantitatea si utilizarile acestora.",
      hy: "Նյութական տվյալների, դրանց քանակի և օգտագործման պատրաստում:"
    },
    output: {
      en: "Material Flow Analysis (MFA) graphics",
      uk: "Графіки аналізу матеріальних потоків (MFA).",
      ro: "Grafică pentru analiza fluxului de materiale (MFA).",
      hy: "Նյութերի հոսքի վերլուծության (MFA) գրաֆիկա"
    },
    bestFor: {
      en: "Advanced users with detailed material data",
      uk: "Досвідчені користувачі з детальними матеріалами",
      ro: "Utilizatori avansați cu date detaliate despre materiale",
      hy: "Ընդլայնված օգտվողներ՝ մանրամասն նյութական տվյալներով"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.stan2web.net/download%20files/software/STAN-2-7-101-EN.zip'
  },
  {
    id: 'resource-022',
    slug: 'hotspot-analysis-tool',
    title: 'The Hotspot Analysis Tool',
    description: {
      en: "The tool provides a range of sustainable consumption and production indicators for identifying unsustainable hotspots at country and sector level, pointing to where policy action is needed.",
      uk: "Інструмент надає низку індикаторів сталого споживання та виробництва для виявлення нестабільних гарячих точок на рівні країни та сектору, вказуючи, де потрібні політичні дії.",
      ro: "Instrumentul oferă o serie de indicatori durabili de consum și producție pentru identificarea punctelor fierbinți nesustenabile la nivel de țară și de sector, indicând unde este nevoie de acțiuni politice.",
      hy: "Գործիքը տրամադրում է կայուն սպառման և արտադրության մի շարք ցուցանիշներ՝ երկրի և հատվածի մակարդակով անկայուն թեժ կետերը բացահայտելու համար՝ մատնանշելով, թե որտեղ է անհրաժեշտ քաղաքականության գործողությունները:"
    },
    about:
      {
        en: "The Sustainable Consumption and Production Hotspots Analysis Tool (SCP-HAT) Country Profile tool provides an overview of a country's environmental performance across key sustainable consumption and production policy areas, including materials use, climate change, energy, water, and pollution. It helps policymakers, NGOs, and the public identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis. For you as an SMEs, it can be used to identify the most relevant sustainability hotspots for your sector and country, helping you prioritise actions and investments to improve environmental performance. The tool contains data for Ukraine, Moldova, Georgia, Armenia, and Azerbaijan and data can be compared across countries.",
        uk: "Інструмент аналізу гарячих точок сталого споживання та виробництва (SCP-HAT) Інструмент профілю країни надає огляд екологічної ефективності країни в ключових сферах політики сталого споживання та виробництва, включаючи використання матеріалів, зміну клімату, енергію, воду та забруднення. Це допомагає політикам, неурядовим організаціям і громадськості визначати гарячі точки сталого розвитку та відстежувати екологічні тенденції за допомогою індикаторів, візуалізації даних і аналізу на рівні країни. Для вас, як малого та середнього бізнесу, його можна використовувати для визначення найбільш відповідних гарячих точок сталого розвитку для вашого сектору та країни, допомагаючи вам визначити пріоритети дій та інвестицій для покращення екологічної ефективності. Інструмент містить дані для України, Молдови, Грузії, Вірменії та Азербайджану, і дані можна порівнювати між країнами.",
        ro: "Instrumentul de analiză a punctelor fierbinți de consum și producție durabilă (SCP-HAT) Instrumentul Profilul țării oferă o privire de ansamblu asupra performanței de mediu a unei țări în domeniile cheie de politică de consum și producție durabile, inclusiv utilizarea materialelor, schimbările climatice, energie, apă și poluare. Acesta ajută factorii de decizie, ONG-urile și publicul să identifice punctele critice de sustenabilitate și să urmărească tendințele de mediu prin indicatori, vizualizări de date și analize la nivel de țară. Pentru dvs., în calitate de IMM, poate fi folosit pentru a identifica cele mai relevante puncte fierbinți de sustenabilitate pentru sectorul și țara dvs., ajutându-vă să prioritizați acțiunile și investițiile pentru îmbunătățirea performanței de mediu. Instrumentul conține date pentru Ucraina, Moldova, Georgia, Armenia și Azerbaidjan, iar datele pot fi comparate între țări.",
        hy: "Կայուն սպառման և արտադրության թեժ կետերի վերլուծության գործիքը (SCP-HAT) Երկրի պրոֆիլի գործիքը տրամադրում է երկրի բնապահպանական գործունեության ակնարկը կայուն սպառման և արտադրության քաղաքականության հիմնական ոլորտներում, ներառյալ նյութերի օգտագործումը, կլիմայի փոփոխությունը, էներգիան, ջուրը և աղտոտումը: Այն օգնում է քաղաքականություն մշակողներին, ՀԿ-ներին և հանրությանը բացահայտել կայունության թեժ կետերը և հետևել բնապահպանական միտումներին՝ ցուցիչների, տվյալների վիզուալիզացիայի և երկրի մակարդակով վերլուծության միջոցով: Ձեզ՝ որպես ՓՄՁ-ների, այն կարող է օգտագործվել ձեր ոլորտի և երկրի համար կայունության առավել համապատասխան թեժ կետերը բացահայտելու համար՝ օգնելով ձեզ առաջնահերթություն տալ գործողություններին և ներդրումներին՝ բարելավելու բնապահպանական արդյունավետությունը: Գործիքը պարունակում է տվյալներ Ուկրաինայի, Մոլդովայի, Վրաստանի, Հայաստանի և Ադրբեջանի համար, և տվյալները կարելի է համեմատել տարբեր երկրների միջև:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Life Cycle Initiative',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours",
      uk: "1-2 години",
      ro: "1-2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded: {
      en: "No preparation needed, the data is in the platform itself.",
      uk: "Підготовка не потрібна, дані знаходяться на самій платформі.",
      ro: "Nu este nevoie de pregătire, datele sunt în platformă în sine.",
      hy: "Նախապատրաստման կարիք չկա, տվյալները գտնվում են հենց հարթակում:"
    },
    output:
      {
        en: "Users can identify sustainability hotspots and track environmental trends through indicators, data visualisations, and country-level analysis.",
        uk: "Користувачі можуть визначати гарячі точки сталого розвитку та відстежувати екологічні тенденції за допомогою індикаторів, візуалізації даних та аналізу на рівні країни.",
        ro: "Utilizatorii pot identifica punctele critice de sustenabilitate și pot urmări tendințele de mediu prin indicatori, vizualizări de date și analize la nivel de țară.",
        hy: "Օգտագործողները կարող են բացահայտել կայունության թեժ կետերը և հետևել բնապահպանական միտումներին՝ ցուցիչների, տվյալների վիզուալիզացիայի և երկրի մակարդակով վերլուծության միջոցով:"
      },
    bestFor: {
      en: "All SMEs across all sectors interested in data at national and sector levels.",
      uk: "Усі МСП у всіх секторах зацікавлені в даних на національному та галузевому рівнях.",
      ro: "Toate IMM-urile din toate sectoarele interesate de date la nivel național și sectorial.",
      hy: "Բոլոր ՓՄՁ-ները բոլոր ոլորտներում, որոնք շահագրգռված են ազգային և ոլորտային մակարդակներում տվյալների մեջ:"
    },
    format: {
      en: "Digital platform with databases",
      uk: "Цифрова платформа з базами даних",
      ro: "Platformă digitală cu baze de date",
      hy: "Թվային հարթակ տվյալների բազաներով"
    },
    toolLink: 'https://scp-hat.org/module-2-scp-hotspots/'
  },
  {
    id: 'resource-023',
    slug: 'footprint-calculator',
    title: 'Footprint Calculator',
    description:
      {
        en: "Displays carbon footprint and eco-cost results by lifecycle stage, with additional Life Cycle Impact Assessment (LCIA) insights to identify the most impactful processes",
        uk: "Відображає результати вуглецевого сліду та ековартості за етапами життєвого циклу з додатковою оцінкою впливу життєвого циклу (LCIA) для визначення найбільш впливових процесів",
        ro: "Afișează rezultatele amprentei de carbon și ale costurilor ecologice pe etapele ciclului de viață, cu informații suplimentare privind evaluarea impactului ciclului de viață (LCIA) pentru a identifica procesele cu cel mai mare impact",
        hy: "Ցուցադրում է ածխածնի հետքը և էկո-արժեքի արդյունքներն ըստ կյանքի ցիկլի փուլի՝ կյանքի ցիկլի ազդեցության գնահատման (LCIA) լրացուցիչ պատկերացումներով՝ ամենաազդեցիկ գործընթացները բացահայտելու համար:"
      },
    about:
      {
        en: "The Circular Strategies Scanner helps manufacturing companies understand, map, and improve their circular economy strategies across products and operations. It is typically used in workshops to identify current initiatives, explore new opportunities for circularity, and support innovation and shared strategic vision.",
        uk: "Circular Strategies Scanner допомагає виробничим компаніям зрозуміти, відобразити та вдосконалити свої стратегії циклічної економіки для різних продуктів і операцій. Зазвичай він використовується на семінарах для виявлення поточних ініціатив, вивчення нових можливостей циклічного розвитку та підтримки інновацій і спільного стратегічного бачення.",
        ro: "Scanerul de strategii circulare ajută companiile de producție să înțeleagă, să mapați și să-și îmbunătățească strategiile de economie circulară pentru produse și operațiuni. Este de obicei folosit în ateliere pentru a identifica inițiativele actuale, pentru a explora noi oportunități de circularitate și pentru a sprijini inovația și viziunea strategică comună.",
        hy: "Circular Strategies Scanner-ն օգնում է արտադրական ընկերություններին հասկանալ, քարտեզագրել և բարելավել իրենց շրջանաձև տնտեսության ռազմավարությունները ապրանքների և գործառնությունների մեջ: Այն սովորաբար օգտագործվում է սեմինարների ժամանակ՝ բացահայտելու ընթացիկ նախաձեռնությունները, ուսումնասիրելու նոր հնարավորությունները շրջանաձևության համար և աջակցելու նորարարությանը և ընդհանուր ռազմավարական տեսլականին:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Manufacturing',
    effort: 'Medium',
    language: 'English',
    provider: 'The footprinters',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours",
      uk: "1-2 години",
      ro: "1-2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded: {
      en: "Material, energy, and waste data",
      uk: "Дані про матеріали, енергію та відходи",
      ro: "Date despre materiale, energie și deșeuri",
      hy: "Նյութի, էներգիայի և թափոնների տվյալները"
    },
    output: {
      en: "Carbon footprint and eco-cost results by lifecycle stage.",
      uk: "Результати викидів вуглецю та екологічних витрат за етапами життєвого циклу.",
      ro: "Amprenta de carbon și rezultatele eco-costurilor pe etapele ciclului de viață.",
      hy: "Ածխածնի հետքը և էկո-արժեքի արդյունքներն ըստ կյանքի ցիկլի փուլի:"
    },
    bestFor: {
      en: "Manufacturing SMEs with physical products",
      uk: "Виробництво МСП з фізичними продуктами",
      ro: "Fabricarea IMM-urilor cu produse fizice",
      hy: "ՓՄՁ-ների արտադրություն ֆիզիկական արտադրանքով"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://footprintcalc.org/'
  },
  {
    id: 'resource-024',
    slug: 'future-adaptive-design-guide',
    title: 'Future Adaptive Design Guide',
    description:
      {
        en: "Supports circularity and identifies strategies for extending product life while reducing environmental impact.",
        uk: "Підтримує циркулярність і визначає стратегії продовження терміну служби продукту при одночасному зниженні впливу на навколишнє середовище.",
        ro: "Sprijină circularitatea și identifică strategii pentru prelungirea duratei de viață a produsului, reducând în același timp impactul asupra mediului.",
        hy: "Աջակցում է շրջանաձևությանը և բացահայտում է արտադրանքի կյանքը երկարացնելու ռազմավարությունները՝ միաժամանակ նվազեցնելով շրջակա միջավայրի վրա ազդեցությունը:"
      },
    about:
      {
        en: "Future adaptive design helps companies reduce business risks in circular business models by creating durable, flexible, and upgradeable products that remain useful and attractive over longer lifetimes. The approach provides tools and methods to support circular business innovation, improve profitability, identify strategies for extending product life, and reduce environmental impact.",
        uk: "Адаптивний дизайн майбутнього допомагає компаніям зменшити бізнес-ризики в циклічних бізнес-моделях, створюючи довговічні, гнучкі та оновлювані продукти, які залишаються корисними та привабливими протягом тривалого терміну служби. Цей підхід надає інструменти та методи для підтримки циркулярних бізнес-інновацій, підвищення прибутковості, визначення стратегій продовження терміну служби продукту та зменшення впливу на навколишнє середовище.",
        ro: "Designul adaptiv viitor ajută companiile să reducă riscurile de afaceri în modelele de afaceri circulare prin crearea de produse durabile, flexibile și actualizabile, care rămân utile și atractive pe o durată mai lungă de viață. Abordarea oferă instrumente și metode pentru a sprijini inovația circulară în afaceri, a îmbunătăți profitabilitatea, a identifica strategii pentru prelungirea duratei de viață a produsului și pentru a reduce impactul asupra mediului.",
        hy: "Ապագա հարմարվողական դիզայնն օգնում է ընկերություններին նվազեցնել բիզնեսի ռիսկերը շրջանաձև բիզնես մոդելներում՝ ստեղծելով դիմացկուն, ճկուն և արդիականացվող ապրանքներ, որոնք մնում են օգտակար և գրավիչ ավելի երկար ժամկետներում: Մոտեցումը տրամադրում է գործիքներ և մեթոդներ՝ աջակցելու շրջանաձև բիզնեսի նորարարությանը, բարելավելու շահութաբերությունը, բացահայտելու արտադրանքի ժամկետը երկարացնելու ռազմավարությունները և նվազեցնել շրջակա միջավայրի վրա ազդեցությունը:"
      },
    journeyPhases: ['Assess'],
    placements: {
      phaseSections: ['assess:hotspot-analysis']
    },
    sector: 'Manufacturing',
    effort: 'Medium',
    language: 'English',
    provider: 'RISE Research',
    access: 'Free',
    timeRequired: {
      en: "Flexible - workshop format",
      uk: "Гнучкий формат семінару",
      ro: "Flexibil - format atelier",
      hy: "Ճկուն - սեմինարի ձևաչափ"
    },
    preparationNeeded: {
      en: "Product or process design information",
      uk: "Інформація про дизайн продукту або процесу",
      ro: "Informații despre proiectarea produsului sau procesului",
      hy: "Ապրանքի կամ գործընթացի նախագծման տեղեկատվություն"
    },
    output: {
      en: "Design-focused hotspots; adaptation opportunities for circularity.",
      uk: "Гарячі точки, орієнтовані на дизайн; можливості адаптації для круговості.",
      ro: "Hotspot-uri axate pe design; oportunități de adaptare pentru circularitate.",
      hy: "Դիզայնի վրա կենտրոնացած թեժ կետեր; հարմարվողականության հնարավորություններ շրջանաձևության համար:"
    },
    bestFor: {
      en: "SMEs working with product or process design for circular business models.",
      uk: "Малі та середні підприємства, які працюють із проектуванням продуктів або процесів для циклічних бізнес-моделей.",
      ro: "IMM-uri care lucrează cu design de produs sau proces pentru modele de afaceri circulare.",
      hy: "ՓՄՁ-ներ, որոնք աշխատում են արտադրանքի կամ գործընթացի նախագծման հետ՝ շրջանաձև բիզնես մոդելների համար:"
    },
    format: {
      en: "PDF",
      uk: "PDF",
      ro: "PDF",
      hy: "PDF"
    },
    toolLink:
      'https://www.ri.se/sites/default/files/2023-09/Future%20Adaptive%20Design_Guide_2023-1.pdf'
  },
  /**{
    id: 'resource-025',
    slug: 'milestones-and-action-planning-tool',
    title: 'Milestones and Action Planning Tool',
    description:
      {
        en: "To develop a clear set of measurable milestones to monitor progress towards a circular economy strategy",
        uk: "Розробити чіткий набір вимірних етапів для моніторингу прогресу на шляху до стратегії циклічної економіки",
        ro: "Pentru a dezvolta un set clar de repere măsurabile pentru a monitoriza progresul către o strategie de economie circulară",
        hy: "Մշակել շրջաբերական տնտեսության ռազմավարության ուղղությամբ առաջընթացը վերահսկելու համար չափելի ուղենիշների հստակ փաթեթ"
      },
    about:
      {
        en: "A practical milestone-setting framework designed to help organisations break circular strategies into trackable steps. Helps teams identify key actions, assign ownership, and define what 'progress' looks like at each stage.",
        uk: "Практична структура для встановлення основних етапів, розроблена, щоб допомогти організаціям розбивати циклічні стратегії на кроки, які можна відстежувати. Допомагає командам визначити ключові дії, призначити право власності та визначити, як виглядає «прогрес» на кожному етапі.",
        ro: "Un cadru practic de stabilire a reperelor, conceput pentru a ajuta organizațiile să despartă strategiile circulare în pași urmăribili. Ajută echipele să identifice acțiunile cheie, să atribuie calitatea de proprietar și să definească cum arată „progresul” în fiecare etapă.",
        hy: "Գործնական ուղենիշային շրջանակ, որը նախատեսված է կազմակերպություններին օգնելու շրջանաձև ռազմավարությունները բաժանել հետևելի քայլերի: Օգնում է թիմերին բացահայտել հիմնական գործողությունները, հատկացնել սեփականության իրավունքը և սահմանել, թե ինչպիսին է «առաջընթացը» յուրաքանչյուր փուլում:"
      },
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    language: 'English',
    provider: 'The Good Tribe',
    access: 'Free',
    timeRequired: {
      en: "Half day workshop",
      uk: "Південний семінар",
      ro: "Atelier de jumătate de zi",
      hy: "Կես օր սեմինար"
    },
    preparationNeeded: {
      en: "Clear understanding of the strategies to be implemented, who is responsible for what, desired outcomes.",
      uk: "Чітке розуміння стратегій, які необхідно реалізувати, хто за що відповідає, бажаних результатів.",
      ro: "Înțelegerea clară a strategiilor care trebuie implementate, cine este responsabil pentru ce, rezultatele dorite.",
      hy: "Իրականացվելիք ռազմավարությունների հստակ պատկերացում, ով ինչի համար է պատասխանատու, ցանկալի արդյունքների համար:"
    },
    output: {
      en: "Milestones for circular strategy implementation",
      uk: "Основні етапи реалізації циклічної стратегії",
      ro: "Etape pentru implementarea strategiei circulare",
      hy: "Շրջանաձև ռազմավարության իրականացման ուղենիշներ"
    },
    bestFor: {
      en: "SMEs and larger organisations that are about to test or have tested circular initiatives.",
      uk: "Малі та середні підприємства та великі організації, які збираються випробувати або випробували циркулярні ініціативи.",
      ro: "IMM-urile și organizațiile mai mari care sunt pe cale să testeze sau au testat inițiative circulare.",
      hy: "ՓՄՁ-ներ և ավելի մեծ կազմակերպություններ, որոնք պատրաստվում են փորձարկել կամ փորձարկված շրջանաձև նախաձեռնություններ:"
    },
    format: {
      en: "Miro board",
      uk: "Дошка Miro",
      ro: "Placa Miro",
      hy: "Միրո տախտակ"
    },
    toolLink:
      'https://miro.com/templates/roadmap-to-circular-business/'
  }),*/
  {
    id: 'resource-026',
    slug: 'circular-loop-designer',
    title: 'The Circular Loop Designer',
    description:
      {
        en: "To help teams visually map and design closed material loops for their business, sketching how materials, products, and processes flow between actors in a circular system, and identifying which parties need to be involved at each stage",
        uk: "Допомогти командам візуально скласти карту та спроектувати замкнуті матеріальні цикли для свого бізнесу, накресливши, як матеріали, продукти та процеси перетікають між учасниками циклічної системи, і визначивши, які сторони мають бути залучені на кожному етапі",
        ro: "Pentru a ajuta echipele să mapeze vizual și să proiecteze bucle de materiale închise pentru afacerea lor, schițând modul în care materialele, produsele și procesele circulă între actori într-un sistem circular și identificând părțile care trebuie implicate în fiecare etapă",
        hy: "Օգնել թիմերին տեսողականորեն քարտեզագրել և նախագծել փակ նյութական օղակներ իրենց բիզնեսի համար՝ ուրվագծելով, թե ինչպես են նյութերը, ապրանքները և գործընթացները հոսում շրջանաձև համակարգի դերակատարների միջև և բացահայտելով, թե որ կողմերը պետք է ներգրավվեն յուրաքանչյուր փուլում:"
      },
    about:
      {
        en: "The Circular Loop Designer is a browser-based drawing tool that lets teams sketch closed material loops using a purpose-built library of icons and arrows. Users can start from an empty canvas or select from a range of pre-built examples, covering four types of circular loop logic: closing a material loop as completely as possible; keeping materials in circulation for as long as possible; sourcing and retaining materials as locally as possible; and radically reducing material use across the loop. Arrows are colour-coded to distinguish sustainable flows (green), traditional flows (red), and flows still under development (blue), making it easy to show the current state alongside the desired future state. Parties and roles can be added at each stage of the loop, turning the diagram into a stakeholder map as well as a material flow map.",
        uk: "Circular Loop Designer — це інструмент для малювання на базі браузера, який дозволяє командам малювати замкнуті цикли матеріалів за допомогою спеціально створеної бібліотеки значків і стрілок. Користувачі можуть почати з порожнього полотна або вибрати з низки готових прикладів, що охоплюють чотири типи циклічної логіки циклу: максимально повне закриття матеріального циклу; утримання матеріалів в обігу якомога довше; пошук і зберігання матеріалів якомога на місці; і радикально зменшити використання матеріалу по всій петлі. Стрілки позначено кольором, щоб відрізнити стійкі потоки (зелені), традиційні потоки (червоні) та потоки, які ще розробляються (сині), що дозволяє легко показати поточний стан разом із бажаним майбутнім станом. Сторони та ролі можна додавати на кожному етапі циклу, перетворюючи діаграму на карту зацікавлених сторін, а також на карту матеріальних потоків.",
        ro: "Circular Loop Designer este un instrument de desen bazat pe browser care permite echipelor să schițeze bucle închise de material folosind o bibliotecă special creată de pictograme și săgeți. Utilizatorii pot începe de la o pânză goală sau pot selecta dintr-o gamă de exemple pre-construite, acoperind patru tipuri de logică a buclei circulare: închiderea unei bucle de material cât mai complet posibil; menținerea materialelor în circulație cât mai mult timp posibil; aprovizionarea și păstrarea materialelor cât mai local posibil; și reducerea radicală a utilizării materialelor de-a lungul buclei. Săgețile sunt codificate cu culori pentru a distinge fluxurile durabile (verde), fluxurile tradiționale (roșu) și fluxurile încă în curs de dezvoltare (albastru), ceea ce face mai ușor să afișați starea actuală alături de starea viitoare dorită. Partidele și rolurile pot fi adăugate la fiecare etapă a buclei, transformând diagrama într-o hartă a părților interesate, precum și într-o hartă a fluxului de materiale.",
        hy: "The Circular Loop Designer-ը բրաուզերի վրա հիմնված գծագրման գործիք է, որը թիմերին թույլ է տալիս ուրվագծել փակ նյութերի օղակները՝ օգտագործելով սրբապատկերների և սլաքների հատուկ կառուցված գրադարանը: Օգտատերերը կարող են սկսել դատարկ կտավից կամ ընտրել մի շարք նախապես պատրաստված օրինակներից, որոնք ներառում են չորս տեսակի շրջանաձև օղակի տրամաբանություն. նյութերը հնարավորինս երկար պահել շրջանառության մեջ. հնարավորինս տեղական նյութերի մատակարարում և պահպանում. և արմատապես նվազեցնելով նյութի օգտագործումը ամբողջ օղակում: Սլաքները գունավոր կոդավորված են՝ տարբերակելու կայուն հոսքերը (կանաչ), ավանդական հոսքերը (կարմիր) և հոսքերը դեռ մշակման փուլում են (կապույտ), ինչը հեշտացնում է ներկայիս վիճակը ցանկալի ապագա վիճակի կողքին ցուցադրելու համար: Կողմերն ու դերերը կարող են ավելացվել օղակի յուրաքանչյուր փուլում՝ դիագրամը վերածելով շահագրգիռ կողմերի քարտեզի, ինչպես նաև նյութի հոսքի քարտեզի:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English, Dutch',
    provider: 'Saxion University of Applied Sciences',
    access: 'Sign up',
    timeRequired: {
      en: "4 hours",
      uk: "4 години",
      ro: "4 ore",
      hy: "4 ժամ"
    },
    preparationNeeded: {
      en: "Low barrier to entry; free online tool, no installation required. A free Businessmodellab account is needed to save designs; beginners can start from one of the built-in examples",
      uk: "Низький бар'єр входу; безкоштовний онлайн-інструмент, встановлення не вимагається. Для збереження дизайнів потрібен безкоштовний обліковий запис Businessmodellab; новачки можуть почати з одного з вбудованих прикладів",
      ro: "Barieră scăzută la intrare; instrument online gratuit, nu necesită instalare. Este necesar un cont Businessmodellab gratuit pentru a salva design-urile; începătorii pot începe de la unul dintre exemplele încorporate",
      hy: "Մուտքի ցածր խոչընդոտ; անվճար առցանց գործիք, տեղադրում չի պահանջվում: Նախագծերը պահպանելու համար անհրաժեշտ է Businessmodellab անվճար հաշիվ; սկսնակները կարող են սկսել ներկառուցված օրինակներից մեկից"
    },
    output: {
      en: "A shareable visual diagram of your circular material loop, exportable as an XML file, showing flows, actors, and the status of each connection (existing, sustainable, or still under development)",
      uk: "Візуальна діаграма вашого кругового матеріального циклу, яку можна надати спільному доступу, яку можна експортувати як XML-файл, показуючи потоки, учасників і статус кожного з’єднання (існуюче, стійке або все ще розробляється)",
      ro: "O diagramă vizuală care poate fi partajată a buclei dvs. circulare de material, exportabilă ca fișier XML, care arată fluxurile, actorii și starea fiecărei conexiuni (existentă, sustenabilă sau încă în curs de dezvoltare)",
      hy: "Ձեր շրջանաձև նյութի հանգույցի համօգտագործվող տեսողական դիագրամ, որը արտահանվում է որպես XML ֆայլ, որը ցույց է տալիս հոսքերը, դերակատարները և յուրաքանչյուր կապի կարգավիճակը (առկա, կայուն կամ դեռ մշակման փուլում է)"
    },
    bestFor: {
      en: "SMEs at starter level who want to make their circular strategy concrete and visual — particularly useful for communicating loop designs to partners, suppliers, or internal stakeholders who need to see the full picture before committing",
      uk: "Малі та середні підприємства на початковому рівні, які хочуть зробити свою циклічну стратегію конкретною та візуальною — особливо корисною для передачі проектів циклів партнерам, постачальникам або внутрішнім зацікавленим сторонам, яким потрібно бачити повну картину, перш ніж здійснювати зобов’язання",
      ro: "IMM-uri la nivel de începător care doresc să-și facă strategia circulară concretă și vizuală — deosebit de utilă pentru comunicarea proiectelor de bucle către parteneri, furnizori sau părți interesate interne care trebuie să vadă imaginea completă înainte de a se angaja",
      hy: "Սկսնակ մակարդակի ՓՄՁ-ները, ովքեր ցանկանում են իրենց շրջանաձև ռազմավարությունը դարձնել կոնկրետ և տեսողական."
    },
    format: {
      en: "Online platform",
      uk: "Онлайн-платформа",
      ro: "Platforma online",
      hy: "Առցանց հարթակ"
    },
    toolLink:
      'https://businessmodellab.nl/en/tools/circular-loop-designer'
  },
  {
    id: 'resource-027',
    slug: 'ecoCEO',
    title: 'ecoCEO',
    description:
      {
        en: "To simulate running a circular electronics company making decisions on resource management, production processes, and revenue models, while responding to external disruptions such as policy changes and market shocks that test the resilience of circular vs. linear strategies",
        uk: "Змоделювати роботу електронної компанії циклічного циклу, яка приймає рішення щодо управління ресурсами, виробничими процесами та моделями доходів, реагуючи на зовнішні збої, такі як зміни політики та ринкові потрясіння, які перевіряють стійкість циклічних проти лінійних стратегій.",
        ro: "Pentru a simula conducerea unei companii de electronice circulare care ia decizii cu privire la gestionarea resurselor, procesele de producție și modelele de venituri, răspunzând în același timp la perturbări externe, cum ar fi schimbările de politică și șocurile pieței care testează rezistența strategiilor circulare vs. liniare",
        hy: "Մոդելավորել շրջանաձև էլեկտրոնիկայի ընկերության գործունեությունը, որը որոշումներ է կայացնում ռեսուրսների կառավարման, արտադրական գործընթացների և եկամուտների մոդելների վերաբերյալ՝ միաժամանակ արձագանքելով արտաքին խափանումներին, ինչպիսիք են քաղաքականության փոփոխությունները և շուկայական ցնցումները, որոնք ստուգում են շրջանաձև և գծային ռազմավարությունների ճկունությունը:"
      },
    about:
      {
        en: "ecoCEO is a free, web-based serious game developed by the Flemish Institute for Technological Research (VITO) with support from European Institute of Innovation and Technology (EIT) Raw Materials. Players manage a company producing electronic goods (microchips, smartphones, and e-bikes) making decisions on which raw materials to use, which production processes to invest in, and which revenue models to adopt. The game tests those decisions against unforeseen events including policy measures, resource scarcity, and market disruptions, making visible how circular strategies (take-back systems, reuse, design-for-repair, product-service systems) improve business resilience compared to linear approaches. This tool is designed to engage youth between 15-18 years old of age, but can also be used with adult learners. It is best for SMEs working in the educational sector and engaging youth or professionals through gamification and experiential learning.",
        uk: "ecoCEO — це безкоштовна серйозна веб-гра, розроблена Фламандським інститутом технологічних досліджень (VITO) за підтримки Європейського інституту інновацій і технологій (EIT) Raw Materials. Гравці керують компанією, що виробляє електронні товари (мікрочіпи, смартфони та електровелосипеди), приймаючи рішення про те, яку сировину використовувати, у які виробничі процеси інвестувати та які моделі прибутку прийняти. Гра перевіряє ці рішення на непередбачені події, включаючи політичні заходи, дефіцит ресурсів і збої на ринку, показуючи, як циклічні стратегії (системи повернення, повторне використання, проектування для ремонту, системи продуктів і послуг) покращують стійкість бізнесу порівняно з лінійними підходами. Цей інструмент призначений для залучення молоді віком від 15 до 18 років, але його також можна використовувати з дорослими учнями. Це найкраще для МСП, які працюють в освітньому секторі та залучають молодь або професіоналів через гейміфікацію та навчання на досвіді.",
        ro: "ecoCEO este un joc serios gratuit, bazat pe web, dezvoltat de Institutul Flamand de Cercetare Tehnologică (VITO) cu sprijinul materiilor prime Institutului European de Inovare și Tehnologie (EIT). Jucătorii administrează o companie care produce bunuri electronice (microcipuri, smartphone-uri și biciclete electrice) luând decizii cu privire la materii prime să folosească, în ce procese de producție să investească și ce modele de venituri să adopte. Jocul testează acele decizii împotriva evenimentelor neprevăzute, inclusiv măsurile de politică, deficitul de resurse și perturbările pieței, făcând vizibil modul în care strategiile circulare (sisteme de preluare, reutilizare, proiectare pentru reparare, sisteme de produse-servicii) îmbunătățesc rezistența afacerii în comparație cu abordările liniare. Acest instrument este conceput pentru a implica tinerii cu vârsta cuprinsă între 15 și 18 ani, dar poate fi folosit și cu cursanții adulți. Este cel mai bun pentru IMM-urile care lucrează în sectorul educațional și care implică tineri sau profesioniști prin gamification și învățare experiențială.",
        hy: "ecoCEO-ն անվճար, վեբ վրա հիմնված լուրջ խաղ է, որը մշակվել է Ֆլամանդական տեխնոլոգիական հետազոտությունների ինստիտուտի (VITO) կողմից՝ Նորարարությունների և տեխնոլոգիաների եվրոպական ինստիտուտի (EIT) հումքի աջակցությամբ: Խաղացողները ղեկավարում են էլեկտրոնային ապրանքներ (միկրոչիպեր, սմարթֆոններ և էլեկտրոնային հեծանիվներ) արտադրող ընկերություն՝ որոշումներ կայացնելով, թե որ հումքն օգտագործեն, որ արտադրական գործընթացներում ներդրումներ կատարեն և եկամուտների որ մոդելներ ընդունեն: Խաղը փորձարկում է այդ որոշումները անկանխատեսելի իրադարձությունների դեմ, ներառյալ քաղաքականության միջոցառումները, ռեսուրսների սակավությունը և շուկայի խափանումները՝ տեսանելի դարձնելով, թե ինչպես են շրջանաձև ռազմավարությունները (հետ վերցնելու համակարգեր, վերաօգտագործում, դիզայն՝ վերանորոգման համար, արտադրանքի սպասարկման համակարգեր) բարելավում են բիզնեսի ճկունությունը՝ համեմատած գծային մոտեցումների հետ: Այս գործիքը նախատեսված է 15-18 տարեկան երիտասարդներին ներգրավելու համար, բայց կարող է օգտագործվել նաև չափահաս սովորողների հետ: Դա լավագույնն է կրթական ոլորտում աշխատող ՓՄՁ-ների համար և ներգրավում երիտասարդներին կամ մասնագետներին խաղային և փորձառական ուսուցման միջոցով:"
      },
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Flemish Institute for Technological Research (VITO) / European Institute of Innovation and Technology (EIT) Raw Materials',
    access: 'Sign up',
    timeRequired: {
      en: "1 – 2 hours",
      uk: "1-2 години",
      ro: "1 – 2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded: {
      en: "Sign up is required to access the game but no installation required, as it is a web-based platform. No prior knowledge of circular economy is required.",
      uk: "Для доступу до гри потрібна реєстрація, але інсталяція не потрібна, оскільки це веб-платформа. Попередніх знань про циркулярну економіку не потрібно.",
      ro: "Este necesară înregistrarea pentru a accesa jocul, dar nu necesită instalare, deoarece este o platformă bazată pe web. Nu sunt necesare cunoștințe prealabile despre economia circulară.",
      hy: "Խաղին մուտք գործելու համար գրանցվեք, բայց տեղադրում չի պահանջվում, քանի որ այն վեբ հարթակ է: Շրջանաձև տնտեսության վերաբերյալ նախնական գիտելիքներ չեն պահանջվում:"
    },
    output: {
      en: "Understanding of how circular business decisions (recycling, take-back, repair, product-service systems) affect company performance and resilience; discussion material for debriefing on circular economy strategy trade-offs",
      uk: "Розуміння того, як циклічні бізнес-рішення (переробка, повернення, ремонт, системи обслуговування продуктів) впливають на ефективність і стійкість компанії; матеріал для обговорення компромісів стратегії циркулярної економіки",
      ro: "Înțelegerea modului în care deciziile de afaceri circulare (reciclare, preluare, reparare, sisteme de produse-servicii) afectează performanța și rezistența companiei; material de discuție pentru debriefing cu privire la compromisurile strategiei economiei circulare",
      hy: "Հասկանալը, թե ինչպես են շրջանաձև բիզնես որոշումները (վերամշակում, հետ վերցնել, վերանորոգում, արտադրանքի սպասարկման համակարգեր) ազդում ընկերության գործունեության և ճկունության վրա. Քննարկման նյութ՝ շրջանաձև տնտեսության ռազմավարության փոխզիջումների վերաբերյալ ամփոփման համար"
    },
    bestFor: {
      en: "SMEs in the educational sector and teams at an introductory stage of circular economy engagement who benefit from learning through doing; also useful as an icebreaker or warm-up activity before deeper strategy workshop",
      uk: "МСП в освітньому секторі та команди на початковому етапі залучення в економіку замкнутого циклу, які отримують вигоду від навчання через практику; також корисно як розминка або розминка перед поглибленим стратегічним семінаром",
      ro: "IMM-urile din sectorul educațional și echipele aflate într-o etapă introductivă a angajamentului economiei circulare care beneficiază de învățarea prin practică; utilă și ca activitate de spărgător de gheață sau de încălzire înainte de un atelier de strategie mai profund",
      hy: "Կրթական ոլորտում ՓՄՁ-ները և շրջանաձև տնտեսության ներգրավման ներածական փուլում գտնվող թիմերը, որոնք օգուտ են քաղում սովորելու միջոցով. օգտակար է նաև որպես սառցահատ կամ ջերմացնող գործունեություն ավելի խորը ռազմավարության սեմինարից առաջ"
    },
    format: {
      en: "Online game",
      uk: "Онлайн гра",
      ro: "Joc online",
      hy: "Առցանց խաղ"
    },
    toolLink:
      'https://ecoceo.vito.be/en/ecoceo-game'
  },
  {
    id: 'resource-028',
    slug: 'sme-carbon-footprint-calculator',
    title: 'Carbon Footprint Calculator',
    description:
      {
        en: "The openLCA software tool aims to assist users in performing a self-assessment and includes free demo sessions on how to use the tool.",
        uk: "Програмний інструмент openLCA має на меті допомогти користувачам у виконанні самооцінки та включає безкоштовні демонстраційні сесії щодо використання інструменту.",
        ro: "Instrumentul software openLCA își propune să ajute utilizatorii să efectueze o autoevaluare și include sesiuni demo gratuite despre cum să folosească instrumentul.",
        hy: "OpenLCA ծրագրային գործիքը նպատակ ունի օգնել օգտատերերին ինքնագնահատում կատարելիս և ներառում է անվճար ցուցադրական նիստեր, թե ինչպես օգտագործել գործիքը:"
      },
    about:
      {
        en: "openLCA is a modular tool for sustainability assessment and life cycle modelling. It is open source, customisable, and can be used to create models at different levels of complexity.",
        uk: "openLCA — це модульний інструмент для оцінки стійкості та моделювання життєвого циклу. Він має відкритий вихідний код, його можна налаштувати та використовувати для створення моделей різного рівня складності.",
        ro: "openLCA este un instrument modular pentru evaluarea durabilității și modelarea ciclului de viață. Este open source, personalizabil și poate fi folosit pentru a crea modele la diferite niveluri de complexitate.",
        hy: "openLCA-ն մոդուլային գործիք է կայունության գնահատման և կյանքի ցիկլի մոդելավորման համար: Այն բաց կոդով է, կարգավորելի և կարող է օգտագործվել բարդության տարբեր մակարդակների մոդելներ ստեղծելու համար:"
      },
    journeyPhases: ['Assess', 'Evaluate', 'Monitor'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'English',
    provider: 'Green Delta',
    access: 'Free',
    timeRequired: {
      en: "Days to weeks",
      uk: "Днів до тижнів",
      ro: "De la zile la săptămâni",
      hy: "Օրերից շաբաթներ"
    },
    preparationNeeded: {
      en: "You will need the emissions data of your company to make your own assessments and some skills to apply Life Cycle Assessment (LCA) methodology.",
      uk: "Вам знадобляться дані про викиди вашої компанії, щоб зробити власну оцінку, а також деякі навички для застосування методології оцінки життєвого циклу (LCA).",
      ro: "Veți avea nevoie de datele privind emisiile companiei dvs. pentru a vă face propriile evaluări și de unele abilități pentru a aplica metodologia de evaluare a ciclului de viață (LCA).",
      hy: "Ձեզ անհրաժեշտ կլինեն ձեր ընկերության արտանետումների տվյալները՝ ձեր սեփական գնահատումներն անելու և կյանքի ցիկլի գնահատման (LCA) մեթոդաբանությունը կիրառելու որոշ հմտություններ:"
    },
    output: {
      en: "A wide range of options depending on the use, however most important for SMEs this tool can support a Life Cycle Assessment (LCA) model of your company's carbon footprint, based on existing databases and resulting in models that support your LCA reporting.",
      uk: "Широкий діапазон опцій залежно від використання, але найважливіше для малих і середніх підприємств цей інструмент може підтримувати модель оцінки життєвого циклу (LCA) вуглецевого сліду вашої компанії на основі існуючих баз даних і в результаті створювати моделі, які підтримують вашу звітність LCA.",
      ro: "O gamă largă de opțiuni în funcție de utilizare, dar cel mai important pentru IMM-uri, acest instrument poate susține un model de evaluare a ciclului de viață (LCA) a amprentei de carbon a companiei dvs., bazat pe bazele de date existente și care rezultă în modele care sprijină raportarea dvs. LCA.",
      hy: "Ընտրանքների լայն շրջանակ՝ կախված կիրառությունից, սակայն ամենակարևորը ՓՄՁ-ների համար այս գործիքը կարող է աջակցել ձեր ընկերության ածխածնի հետքի կյանքի ցիկլի գնահատման (LCA) մոդելին, որը հիմնված է առկա տվյալների բազաների վրա և հանգեցնում է մոդելների, որոնք աջակցում են ձեր LCA հաշվետվություններին:"
    },
    bestFor: {
      en: "All SMEs concerned with climate and emissions reduction",
      uk: "Усі малі та середні підприємства, які займаються кліматом та скороченням викидів",
      ro: "Toate IMM-urile preocupate de climă și reducerea emisiilor",
      hy: "Բոլոր ՓՄՁ-ները, որոնք մտահոգված են կլիմայի և արտանետումների նվազեցմամբ"
    },
    format: {
      en: "Software",
      uk: "програмне забезпечення",
      ro: "Software",
      hy: "Ծրագրային ապահովում"
    },
    toolLink: 'https://www.openlca.org/download/'
  },
  {
    id: 'resource-030',
    slug: 'bpf-eco-tool-finder',
    title: 'BPF Eco tool finder',
    description:
      {
        en: "A simplified eco-design tool for early-stage packaging design decisions, showing the recyclability impact of design choices before production begins.",
        uk: "Спрощений інструмент еко-дизайну для прийняття рішень щодо дизайну упаковки на ранніх стадіях, який показує вплив вибору дизайну на придатність до переробки ще до початку виробництва.",
        ro: "Un instrument simplificat de proiectare ecologică pentru deciziile de proiectare a ambalajelor în stadiu incipient, care arată impactul asupra reciclabilității al alegerilor de proiectare înainte de începerea producției.",
        hy: "Պարզեցված էկո-դիզայնի գործիք փաթեթավորման նախագծման վաղ փուլերում որոշումների համար, որը ցույց է տալիս դիզայնի ընտրության վերամշակելիության ազդեցությունը մինչև արտադրությունը սկսելը:"
      },
    about:
      {
        en: "The BPF Eco Tool Finder is a searchable directory from the British Plastics Federation for sustainable packaging design resources. It lets users filter by resource type (interactive tools, recyclability guides, Life Cycle Assessment (LCA) tools, recycled content, eLearning), plastic material (Polyethylene Terephthalate (PET), High-Density Polyethylene (HDPE), Polyvinyl Chloride (PVC), etc.), and product type (bottles, caps, trays, films, and more).",
        uk: "BPF Eco Tool Finder – це каталог із можливістю пошуку від Британської федерації пластмас для ресурсів екологічного дизайну упаковки. Він дозволяє користувачам фільтрувати за типом ресурсу (інтерактивні інструменти, посібники з переробки, інструменти оцінки життєвого циклу (LCA), перероблений вміст, електронне навчання), пластиковим матеріалом (поліетилентерефталат (ПЕТ), поліетилен високої щільності (HDPE), полівінілхлорид (ПВХ) тощо) і типом продукту (пляшки, кришки, лотки, плівки тощо).",
        ro: "BPF Eco Tool Finder este un director care poate fi căutat de la British Plastics Federation pentru resurse de design durabil al ambalajelor. Permite utilizatorilor să filtreze după tipul de resursă (instrumente interactive, ghiduri de reciclare, instrumente de evaluare a ciclului de viață (LCA), conținut reciclat, eLearning), material plastic (polietilen tereftalat (PET), polietilenă de înaltă densitate (HDPE), clorură de polivinil (PVC), etc.) și tip de produs (sticle, capace și altele).",
        hy: "BPF Eco Tool Finder-ը Բրիտանական Պլաստիկ Ֆեդերացիայի կողմից որոնելի գրացուցակ է՝ կայուն փաթեթավորման նախագծման ռեսուրսների համար: Այն թույլ է տալիս օգտատերերին զտել ըստ ռեսուրսի տեսակի (ինտերակտիվ գործիքներ, վերամշակման ուղեցույցներ, կյանքի ցիկլի գնահատման (LCA) գործիքներ, վերամշակված բովանդակություն, էլեկտրոնային ուսուցում), պլաստիկ նյութեր (Պոլիէթիլենային տերեֆտալատ (PET), բարձր խտության պոլիէթիլեն (HDPE), պոլիվինիլ քլորիդ (PVC) և այլն) և թաղանթներ, թաղանթներ և այլն:"
      },
    journeyPhases: ['Assess'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'British Plastics Federation',
    access: 'Free',
    timeRequired: {
      en: "10-20 minutes",
      uk: "10-20 хвилин",
      ro: "10-20 minute",
      hy: "10-20 րոպե"
    },
    preparationNeeded: {
      en: "An overview of your businesses packaging needs.",
      uk: "Огляд потреб вашого бізнесу в упаковці.",
      ro: "O privire de ansamblu asupra nevoilor de ambalare ale afacerii dvs.",
      hy: "Ձեր բիզնեսի փաթեթավորման կարիքների ակնարկ:"
    },
    output: {
      en: "A deeper understanding of how to best utilise plastic packaging in an effective manner.",
      uk: "Глибше розуміння того, як найкраще ефективно використовувати пластикову упаковку.",
      ro: "O înțelegere mai profundă a modului de utilizare optimă a ambalajelor din plastic într-un mod eficient.",
      hy: "Ավելի խորը պատկերացում, թե ինչպես կարելի է լավագույնս օգտագործել պլաստիկ փաթեթավորումը արդյունավետ կերպով:"
    },
    bestFor: {
      en: "Packaging designers, brand managers and retailers at the early design stage",
      uk: "Дизайнери упаковки, бренд-менеджери та роздрібні продавці на ранній стадії дизайну",
      ro: "Designeri de ambalaje, manageri de marcă și retaileri în faza incipientă de proiectare",
      hy: "Փաթեթավորման դիզայներները, ապրանքանիշի մենեջերները և մանրածախ վաճառողները դիզայնի վաղ փուլում"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://ecodesign.bpf.co.uk/search'
  },
  {
    id: 'resource-031',
    slug: 'circular-packaging-assessment-tool',
    title: 'Circular Packaging Assessment Tool',
    description:
      {
        en: "A free web tool that assesses packaging across five system-wide dimensions, including design for recyclability, community access and packaging fate.",
        uk: "Безкоштовний веб-інструмент, який оцінює упаковку за п’ятьма загальносистемними параметрами, включно з придатністю до переробки, доступом для спільноти та долею упаковки.",
        ro: "Un instrument web gratuit care evaluează ambalajul în cinci dimensiuni la nivelul întregului sistem, inclusiv designul pentru reciclare, accesul comunității și soarta ambalajului.",
        hy: "Անվճար վեբ գործիք, որը գնահատում է փաթեթավորումը ամբողջ համակարգի հինգ չափսերով, ներառյալ վերամշակման, համայնքի հասանելիության և փաթեթավորման ճակատագիրը:"
      },
    about:
      {
        en: "The tool goes beyond technical recyclability to help brands, retailers and packaging designers understand system-level recyclability, improvement recommendations and Extended Producer Responsibility (EPR) compliance guidance.",
        uk: "Інструмент виходить за рамки технічної переробки, щоб допомогти брендам, роздрібним торговцям і дизайнерам упаковки зрозуміти можливість переробки на системному рівні, рекомендації щодо вдосконалення та вказівки щодо дотримання розширеної відповідальності виробника (EPR).",
        ro: "Instrumentul depășește reciclabilitatea tehnică pentru a ajuta mărcile, comercianții cu amănuntul și designerii de ambalaje să înțeleagă reciclabilitatea la nivel de sistem, recomandările de îmbunătățire și îndrumările de conformitate cu responsabilitatea extinsă a producătorului (EPR).",
        hy: "Գործիքը գերազանցում է տեխնիկական վերամշակման հնարավորությունը՝ օգնելու ապրանքանիշերին, մանրածախ վաճառողներին և փաթեթավորման դիզայներներին հասկանալ համակարգի մակարդակի վերամշակելիությունը, բարելավման առաջարկությունները և Արտադրողի ընդլայնված պատասխանատվության (EPR) համապատասխանության ուղեցույցը:"
      },
    journeyPhases: ['Assess'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'The Recycling Partnership',
    access: 'Sign up',
    timeRequired: {
      en: "30-60 minutes",
      uk: "30-60 хвилин",
      ro: "30-60 de minute",
      hy: "30-60 րոպե"
    },
    preparationNeeded: {
      en: "Know your packaging format, material and design features.",
      uk: "Знайте формат упаковки, матеріал і особливості дизайну.",
      ro: "Cunoaște-ți formatul de ambalare, materialul și caracteristicile de design.",
      hy: "Իմացեք ձեր փաթեթավորման ձևաչափը, նյութը և դիզայնի առանձնահատկությունները:"
    },
    output: {
      en: "System-level recyclability assessment, improvement recommendations and Extended Producer Responsibility (EPR) compliance guidance",
      uk: "Оцінка придатності до вторинної переробки на системному рівні, рекомендації щодо вдосконалення та вказівки щодо відповідності розширеній відповідальності виробника (EPR)",
      ro: "Evaluarea reciclabilității la nivel de sistem, recomandări de îmbunătățire și îndrumări de conformitate cu responsabilitatea extinsă a producătorului (EPR)",
      hy: "Համակարգի մակարդակի վերամշակման գնահատում, բարելավման առաջարկություններ և ընդլայնված արտադրողի պատասխանատվության (EPR) համապատասխանության ուղեցույց"
    },
    bestFor: {
      en: "Brands, retailers and packaging designers",
      uk: "Бренди, роздрібні продавці та дизайнери упаковки",
      ro: "Mărci, retaileri și designeri de ambalaje",
      hy: "Ապրանքանիշեր, մանրածախ վաճառողներ և փաթեթավորման դիզայներներ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://the-recycling-partnership.us.auth0.com/login?state=hKFo2SBORzZKZGtWTkJxSTZBVlp0LUcwT2lGM2JXbExKRlpZeaFupWxvZ2luo3RpZNkgc0pMVGlWOFdJY3hTZXNjV1lsTk5sMUFJTmduM3NZaGWjY2lk2SBlVnQ0U2lzc0VTUHpGbXBoa0ptSzh0NTBScnRrc21ocA&client=eVt4SissESPzFmphkJmK8t50Rrtksmhp&protocol=oauth2&scope=openid%20profile%20email&response_type=id_token&redirect_uri=https%3A%2F%2Fapi.packaging.recyclingpartnership.org%2Fauth%2Fcallback&response_mode=form_post&nonce=xWgTW6dMeXdwqfpT4dbri4fe-c0e51XbvGYpeyvE5L8'
  },
  {
    id: 'resource-033',
    slug: 'recyclass-plastics',
    title: 'Recyclass Plastics',
    description:
      {
        en: "A data-driven planning tool that calculates the circularity of plastic packaging and helps companies model reduction, reuse, redesign and substitution solutions.",
        uk: "Інструмент планування на основі даних, який розраховує циркулярність пластикової упаковки та допомагає компаніям моделювати рішення щодо скорочення, повторного використання, редизайну та заміни.",
        ro: "Un instrument de planificare bazat pe date care calculează circularitatea ambalajelor din plastic și ajută companiile să modeleze soluții de reducere, reutilizare, reproiectare și înlocuire.",
        hy: "Տվյալների վրա հիմնված պլանավորման գործիք, որը հաշվարկում է պլաստիկ փաթեթավորման շրջանաձևությունը և օգնում ընկերություններին մոդելավորել կրճատման, վերաօգտագործման, վերանախագծման և փոխարինման լուծումներ:"
      },
    about:
      {
        en: "Recyclass online analysis tool is a digital tool to help companies improve plastic packaging strategy, reduce plastic waste and build actionable strategies with cost and carbon impact metrics.",
        uk: "Інструмент онлайн-аналізу Recyclass — це цифровий інструмент, який допомагає компаніям покращити стратегію пластикової упаковки, зменшити кількість пластикових відходів і розробити ефективні стратегії з показниками вартості та впливу вуглецю.",
        ro: "Instrumentul de analiză online Recyclass este un instrument digital care ajută companiile să îmbunătățească strategia de ambalare din plastic, să reducă deșeurile de plastic și să construiască strategii acționabile cu indicatori de cost și impact asupra carbonului.",
        hy: "Recyclass առցանց վերլուծության գործիքը թվային գործիք է, որն օգնում է ընկերություններին բարելավել պլաստիկ փաթեթավորման ռազմավարությունը, նվազեցնել պլաստիկ թափոնները և կառուցել գործող ռազմավարություններ՝ ծախսերի և ածխածնի ազդեցության չափման ցուցանիշներով:"
      },
    journeyPhases: ['Explore'],
    sector: 'Plastics',
    effort: 'Low',
    language: 'English',
    provider: 'Recyclass',
    access: 'Free',
    timeRequired: {
      en: "15-30 minutes",
      uk: "15-30 хвилин",
      ro: "15-30 minute",
      hy: "15-30 րոպե"
    },
    preparationNeeded: {
      en: "Detailed packaging data by type, weight and volume, plus current sustainability targets.",
      uk: "Детальні дані про упаковку за типом, вагою та об’ємом, а також поточні цілі щодо сталого розвитку.",
      ro: "Date detaliate de ambalare în funcție de tip, greutate și volum, plus obiectivele actuale de sustenabilitate.",
      hy: "Մանրամասն փաթեթավորման տվյալներ ըստ տեսակի, քաշի և ծավալի, գումարած ընթացիկ կայունության թիրախները:"
    },
    output: {
      en: "Product-specific analysis with recyclability score and class. The analysis results can be downloaded but signing up is required for that part.",
      uk: "Аналіз конкретного продукту з показником придатності до переробки та класом. Результати аналізу можна завантажити, але для цього потрібно зареєструватися.",
      ro: "Analiză specifică produsului cu scorul de reciclare și clasa. Rezultatele analizei pot fi descărcate, dar este necesară înregistrarea pentru acea parte.",
      hy: "Արտադրանքի հատուկ վերլուծություն՝ վերամշակելիության գնահատականով և դասակարգով: Վերլուծության արդյունքները կարելի է ներբեռնել, սակայն գրանցումը պարտադիր է այդ մասի համար:"
    },
    bestFor: {
      en: "Manufacturers, brands and retailers using or designing plastic packaging.",
      uk: "Виробники, бренди та роздрібні торговці, які використовують або розробляють пластикову упаковку.",
      ro: "Producători, mărci și comercianți cu amănuntul care utilizează sau proiectează ambalaje din plastic.",
      hy: "Արտադրողներ, ապրանքանիշեր և մանրածախ առևտուր, որոնք օգտագործում կամ նախագծում են պլաստիկ փաթեթավորում:"
    },
    format: {
      en: "Online analysis tool",
      uk: "Онлайн інструмент аналізу",
      ro: "Instrument de analiză online",
      hy: "Առցանց վերլուծության գործիք"
    },
    toolLink: 'https://tool.recyclass.eu/en/plastics/tool/#step-1'
  },
  {
    id: 'resource-034',
    slug: 'green-key-toolbox',
    title: 'Green Key Toolbox',
    description:
      {
        en: "A practical toolbox divided into 13 topics that match Green Key criteria and help tourism SMEs prepare for circular and environmental improvements.",
        uk: "Практичний інструментарій, поділений на 13 тем, які відповідають критеріям Зеленого ключа та допомагають малим і середнім підприємствам у сфері туризму підготуватися до циклічних і екологічних покращень.",
        ro: "O cutie de instrumente practice împărțită în 13 subiecte care se potrivesc criteriilor cheie verde și ajută IMM-urile din turism să se pregătească pentru îmbunătățiri circulare și de mediu.",
        hy: "Գործնական գործիքների տուփ, որը բաժանված է 13 թեմաների, որոնք համապատասխանում են Green Key չափանիշներին և օգնում են զբոսաշրջային ՓՄՁ-ներին նախապատրաստվել շրջանաձև և բնապահպանական բարելավմանը:"
      },
    about:
      {
        en: "The Green Key Toolbox brings together helpful tips, ready-to-use templates and real-world best practice examples for tourism businesses working towards Green Key certification and improved environmental standards.",
        uk: "Набір інструментів «Зелений ключ» об’єднує корисні поради, готові до використання шаблони та практичні приклади передового досвіду для туристичних компаній, які працюють над сертифікацією «Зелений ключ» і покращують екологічні стандарти.",
        ro: "Green Key Toolbox reunește sfaturi utile, șabloane gata de utilizat și exemple de bune practici din lumea reală pentru întreprinderile din turism care lucrează pentru certificarea Green Key și standarde de mediu îmbunătățite.",
        hy: "Green Key Toolbox-ը միավորում է օգտակար խորհուրդներ, օգտագործման համար պատրաստ ձևանմուշներ և իրական աշխարհի լավագույն փորձի օրինակներ զբոսաշրջային բիզնեսների համար, ովքեր աշխատում են Green Key հավաստագրման և բարելավված բնապահպանական չափանիշների ուղղությամբ:"
      },
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'High',
    language: 'English',
    provider: 'Green Key',
    access: 'Sign up',
    timeRequired: {
      en: "1-2 days",
      uk: "1-2 дні",
      ro: "1-2 zile",
      hy: "1-2 օր"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Better understanding of what it takes to be circular in the tourism sector",
      uk: "Краще розуміння того, що потрібно, щоб бути циркулярним у туристичному секторі",
      ro: "O mai bună înțelegere a ceea ce este nevoie pentru a fi circular în sectorul turismului",
      hy: "Ավելի լավ հասկանալ, թե ինչ է անհրաժեշտ զբոսաշրջության ոլորտում շրջանաձև լինելու համար"
    },
    bestFor: {
      en: "Hotels, resorts and other tourism service industries",
      uk: "Готелі, курорти та інші галузі туристичних послуг",
      ro: "Hoteluri, stațiuni și alte industrii de servicii turistice",
      hy: "Հյուրանոցներ, հանգստավայրեր և զբոսաշրջության սպասարկման այլ ոլորտներ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.greenkey.global/green-key-toolbox-1'
  },
  {
    id: 'resource-035',
    slug: 'hcmi-hotel-carbon-measurement-initiative',
    title: 'Hotel Carbon Measurement Initiative (HCMI)',
    description:
      {
        en: "A free standardised methodology and tool for hotels to calculate the carbon footprint of stays and meetings.",
        uk: "Безкоштовна стандартизована методологія та інструмент для готелів для розрахунку вуглецевого сліду перебування та зустрічей.",
        ro: "O metodologie și un instrument standardizat gratuit pentru hoteluri pentru a calcula amprenta de carbon a sejururilor și întâlnirilor.",
        hy: "Անվճար ստանդարտացված մեթոդաբանություն և գործիք հյուրանոցների համար՝ կացության և հանդիպումների ածխածնի հետքը հաշվարկելու համար:"
      },
    about:
      {
        en: "The Hotel Carbon Measurement Initiative (HCMI) is a globally recognised carbon measurement tool for the hospitality industry, giving hotels standardised data to track emissions, benchmark against peers and meet corporate buyer requirements. The tool provides guides on how to use the templates to calculate carbon footprint for guestrooms and meetings, among others, on energy and consumption data. The offline excel sheet provides a structure approach to carbon accounting, and the guides together with the excel example provide a clear method to follow. As a result, you can generate a report with essential information to support your sustainability strategy and communicate your progress to stakeholders.",
        uk: "Hotel Carbon Measurement Initiative (HCMI) — це всесвітньо визнаний інструмент вимірювання вуглецю для індустрії гостинності, який надає готелям стандартизовані дані для відстеження викидів, порівняння з аналогами та задоволення вимог корпоративних покупців. Інструмент надає вказівки щодо використання шаблонів для розрахунку вуглецевого сліду для номерів і зустрічей, серед іншого, на основі даних про енергію та споживання. Офлайновий аркуш Excel забезпечує структурний підхід до обліку вуглецю, а посібники разом із прикладом Excel пропонують чіткий метод, якому слід слідувати. У результаті ви можете створити звіт із необхідною інформацією для підтримки вашої стратегії сталого розвитку та повідомити про свій прогрес зацікавленим сторонам.",
        ro: "Hotel Carbon Measurement Initiative (HCMI) este un instrument de măsurare a carbonului recunoscut la nivel mondial pentru industria ospitalității, oferind hotelurilor date standardizate pentru a urmări emisiile, a compara cu echivalentul și pentru a îndeplini cerințele cumpărătorilor corporativi. Instrumentul oferă ghiduri despre cum să utilizați șabloanele pentru a calcula amprenta de carbon pentru camere de oaspeți și întâlniri, printre altele, privind datele de energie și consum. Fișa excel offline oferă o abordare structurală a contabilității carbonului, iar ghidurile împreună cu exemplul excel oferă o metodă clară de urmat. Ca rezultat, puteți genera un raport cu informații esențiale pentru a vă sprijini strategia de durabilitate și pentru a comunica progresul dvs. părților interesate.",
        hy: "Հյուրանոցային ածխածնի չափման նախաձեռնությունը (HCMI) հյուրընկալության ոլորտի համար ածխածնի չափման գլոբալ ճանաչված գործիք է, որը հյուրանոցներին տալիս է ստանդարտացված տվյալներ՝ արտանետումները հետևելու, հասակակիցների համեմատ համեմատության և կորպորատիվ գնորդների պահանջները բավարարելու համար: Գործիքը ուղեցույցներ է տալիս այն մասին, թե ինչպես օգտագործել ձևանմուշները հյուրերի սենյակների և հանդիպումների համար ածխածնի հետքը հաշվարկելու համար, ի թիվս այլոց, էներգիայի և սպառման տվյալների վերաբերյալ: Օֆլայն excel թերթիկը տրամադրում է ածխածնի հաշվառման կառուցվածքային մոտեցում, իսկ ուղեցույցները excel օրինակի հետ միասին ապահովում են հստակ մեթոդ, որը պետք է հետևել: Որպես արդյունք, դուք կարող եք ստեղծել հաշվետվություն, որը պարունակում է կարևոր տեղեկատվություն՝ աջակցելու ձեր կայունության ռազմավարությանը և ձեր առաջընթացը շահագրգիռ կողմերին հաղորդելու համար:"
      },
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Medium',
    language: 'English',
    provider: 'Sustainable Hospitality Alliance (SHA) & World Travel & Tourism Council (WTTC)',
    access: 'Free',
    timeRequired: {
      en: "a half day or ongoing, data input per billing period.",
      uk: "півдня або постійно, введення даних за розрахунковий період.",
      ro: "o jumătate de zi sau în curs de desfășurare, introducerea datelor pe perioadă de facturare.",
      hy: "կես օր կամ շարունակական, տվյալների մուտքագրում յուրաքանչյուր հաշվարկային ժամանակահատվածի համար:"
    },
    preparationNeeded: {
      en: "Energy, water and fuel consumption data by property with the correct amounts and units.",
      uk: "Дані про споживання енергії, води та палива за властивостями з правильними кількостями та одиницями.",
      ro: "Date despre consumul de energie, apă și combustibil pe proprietate, cu cantitățile și unitățile corecte.",
      hy: "Էներգիայի, ջրի և վառելիքի սպառման տվյալներ ըստ սեփականության՝ ճիշտ քանակներով և միավորներով:"
    },
    output: {
      en: "Carbon footprint per occupied room, per meeting space hour and total property",
      uk: "Вуглецевий слід на зайняту кімнату, на годину місця для проведення зустрічей і загальну власність",
      ro: "Amprenta de carbon per cameră ocupată, per oră de spațiu de întâlnire și proprietate totală",
      hy: "Ածխածնի հետքը մեկ զբաղեցրած սենյակի, մեկ հանդիպման տարածքի ժամի և ընդհանուր գույքի համար"
    },
    bestFor: {
      en: "Hotels and accommodation providers of any size globally",
      uk: "Постачальники готелів і розміщення будь-якого розміру в усьому світі",
      ro: "Hoteluri și furnizori de cazare de orice dimensiune la nivel global",
      hy: "Աշխարհում ցանկացած չափի հյուրանոցներ և կացարանների մատակարարներ"
    },
    format: {
      en: "Excel template",
      uk: "Шаблон Excel",
      ro: "Șablon Excel",
      hy: "Excel ձևանմուշ"
    },
    toolLink: 'https://sustainablehospitalityalliance.org/resource/hotel-carbon-measurement-initiative/'
  },
  {
    id: 'resource-036',
    slug: 'cross-re-tour-aat-tool',
    title: 'Cross-Re-Tour AAT Tool',
    description:
      {
        en: "A diagnostic tool for tourism SMEs that profiles progress towards digital and green transformation and identifies opportunities to improve competitiveness.",
        uk: "Інструмент діагностики для туристичних МСП, який описує прогрес у напрямку цифрової та екологічної трансформації та визначає можливості для підвищення конкурентоспроможності.",
        ro: "Un instrument de diagnosticare pentru IMM-urile din turism care profilează progresul către transformarea digitală și ecologică și identifică oportunități de îmbunătățire a competitivității.",
        hy: "Զբոսաշրջության ՓՄՁ-ների համար ախտորոշիչ գործիք, որը բնութագրում է առաջընթացը դեպի թվային և կանաչ փոխակերպում և բացահայտում մրցունակությունը բարելավելու հնարավորությունները:"
      },
    about:
      {
        en: "The Cross-Re-Tour Automated Assessment Tool is a free online diagnostic tool for tourism SMEs. It assesses environmental practices, innovation capacity and strategic orientation to help businesses understand their wider sustainability readiness.",
        uk: "Інструмент автоматичної оцінки Cross-Re-Tour — це безкоштовний онлайн-інструмент діагностики для туристичних МСП. Він оцінює екологічні практики, інноваційний потенціал і стратегічну орієнтацію, щоб допомогти підприємствам зрозуміти їх ширшу готовність до сталого розвитку.",
        ro: "Instrumentul de evaluare automată Cross-Re-Tour este un instrument de diagnostic online gratuit pentru IMM-urile din turism. Evaluează practicile de mediu, capacitatea de inovare și orientarea strategică pentru a ajuta întreprinderile să înțeleagă gradul lor de pregătire pentru durabilitate.",
        hy: "Cross-Re-Tour Automated Assessment Tool-ը զբոսաշրջության ՓՄՁ-ների համար անվճար առցանց ախտորոշիչ գործիք է: Այն գնահատում է բնապահպանական պրակտիկան, նորարարական կարողությունները և ռազմավարական կողմնորոշումը, որպեսզի օգնի բիզնեսներին հասկանալ իրենց ավելի լայն կայունության պատրաստակամությունը:"
      },
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Low',
    language: 'English',
    provider: 'Cross-Re-Tour consortium',
    access: 'Sign up',
    timeRequired: {
      en: "20-40 minutes",
      uk: "20-40 хвилин",
      ro: "20-40 de minute",
      hy: "20-40 րոպե"
    },
    preparationNeeded: {
      en: "No preparation requirements are listed; the tool is designed to be completed from existing business knowledge.",
      uk: "Вимоги до підготовки не вказано; Інструмент розроблений таким чином, щоб доповнити наявні бізнес-знання.",
      ro: "Nu sunt enumerate cerințe de pregătire; instrumentul este conceput pentru a fi completat din cunoștințele de afaceri existente.",
      hy: "Նախապատրաստման պահանջներ նշված չեն. գործիքը նախագծված է, որպեսզի լրացվի առկա բիզնես գիտելիքներից:"
    },
    output: {
      en: "Profile across strategic orientation, innovation capabilities and sustainable innovation capabilities",
      uk: "Профіль через стратегічну орієнтацію, інноваційні можливості та стійкі інноваційні можливості",
      ro: "Profil prin orientare strategică, capacități de inovare și capacități de inovare durabilă",
      hy: "Անձնագիր ռազմավարական կողմնորոշման, նորարարական կարողությունների և կայուն նորարարական կարողությունների միջև"
    },
    bestFor: {
      en: "Tourism SMEs looking to understand readiness for digital and green transition",
      uk: "МСП у сфері туризму прагнуть зрозуміти готовність до цифрового та екологічного переходу",
      ro: "IMM-urile din turism care doresc să înțeleagă gradul de pregătire pentru tranziția digitală și ecologică",
      hy: "Զբոսաշրջության ՓՄՁ-ները ձգտում են հասկանալ թվային և կանաչ անցման պատրաստակամությունը"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://crossretour.eu/cross-re-tour-aat-tool/'
  },
  {
    id: 'resource-037',
    slug: 'circular-tourism-self-assessment',
    title: 'Circular Tourism Self Assessment',
    description:
      {
        en: "A circular economy management and monitoring tool for tourism businesses and destinations.",
        uk: "Інструмент управління економікою замкнутого циклу та моніторингу для туристичних підприємств і напрямків.",
        ro: "Un instrument de management și monitorizare a economiei circulare pentru întreprinderile și destinațiile turistice.",
        hy: "Շրջանաձև տնտեսության կառավարման և մոնիտորինգի գործիք զբոսաշրջային բիզնեսների և ուղղությունների համար:"
      },
    about:
      {
        en: "The Circular Tourism Tools assess tourism impact from a circular economy perspective at destination and industry level. The assessment produces scores, collaboration ratings and a curated dataset of global best practices.",
        uk: "Інструменти циркулярного туризму оцінюють вплив туризму з точки зору циркулярної економіки на рівні напрямків і галузей. Оцінка дає бали, рейтинги співпраці та підібраний набір даних передових світових практик.",
        ro: "Instrumentele de turism circulare evaluează impactul turismului dintr-o perspectivă a economiei circulare la nivel de destinație și industrie. Evaluarea produce scoruri, evaluări de colaborare și un set de date organizat de bune practici globale.",
        hy: "Շրջանաձև զբոսաշրջության գործիքները գնահատում են զբոսաշրջության ազդեցությունը շրջանաձև տնտեսության տեսանկյունից նպատակակետի և արդյունաբերության մակարդակում: Գնահատումը տալիս է միավորներ, համագործակցության վարկանիշներ և համաշխարհային լավագույն փորձի համադրված տվյալների հավաքածու:"
      },
    journeyPhases: ['Monitor', 'Assess'],
    placements: {
      sectors: ['tourism'],
      sectorSections: ['tourism:relevant-tools']
    },
    sector: 'Tourism',
    effort: 'Medium',
    language: 'English',
    provider: 'Interreg',
    access: 'Sign up',
    timeRequired: {
      en: "2-4 hours",
      uk: "2-4 години",
      ro: "2-4 ore",
      hy: "2-4 ժամ"
    },
    preparationNeeded: {
      en: "Basic understanding of energy, water, waste, sourcing practices and stakeholder relationships is helpful.",
      uk: "Корисно базове розуміння енергії, води, відходів, практик джерел і відносин із зацікавленими сторонами.",
      ro: "Înțelegerea de bază a energiei, apei, deșeurilor, practicilor de aprovizionare și a relațiilor cu părțile interesate este utilă.",
      hy: "Օգտակար է էներգիայի, ջրի, թափոնների, աղբյուրների ստացման պրակտիկայի և շահագրգիռ կողմերի փոխհարաբերությունների հիմնական ըմբռնումը:"
    },
    output: {
      en: "Circularity score, question breakdown, collaboration rating and best-practice dataset",
      uk: "Оцінка циклічності, розподіл запитань, рейтинг співпраці та набір даних передового досвіду",
      ro: "Scorul de circularitate, defalcarea întrebărilor, evaluarea colaborării și set de date privind cele mai bune practici",
      hy: "Շրջանաձևության գնահատական, հարցերի բաշխում, համագործակցության վարկանիշ և լավագույն փորձի տվյալների բազա"
    },
    bestFor: {
      en: "Hotels, guesthouses and accommodation providers of all sizes",
      uk: "Готелі, пансіонати та заклади розміщення будь-якого розміру",
      ro: "Hoteluri, pensiuni și furnizori de cazare de toate dimensiunile",
      hy: "Բոլոր չափերի հյուրանոցներ, հյուրատներ և կացարաններ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.incircle-kp.eu/self-assessment/'
  },
  {
    id: 'resource-041',
    slug: 'bre-smartwaste',
    title: 'BRE SMARTWaste',
    description:
      {
        en: "A cloud-based construction waste and sustainability tracking platform for waste, materials, carbon, water and transport emissions.",
        uk: "Хмарна платформа для відстеження будівельних відходів і сталого розвитку для відходів, матеріалів, вуглецю, води та транспортних викидів.",
        ro: "O platformă de urmărire a deșeurilor din construcții și a durabilității bazată pe cloud pentru deșeuri, materiale, emisii de carbon, apă și transport.",
        hy: "Թափոնների, նյութերի, ածխածնի, ջրի և տրանսպորտի արտանետումների համար ամպի վրա հիմնված շինարարական թափոնների և կայունության հետագծման հարթակ:"
      },
    about:
      {
        en: "SMARTWaste helps construction SMEs track waste and carbon data in real time, reduce disposal costs and generate audit-quality Building Research Establishment Environmental Assessment Method (BREEAM) compliance evidence.",
        uk: "SMARTWaste допомагає будівельним МСП відстежувати дані про відходи та вуглець в режимі реального часу, зменшувати витрати на утилізацію та генерувати докази відповідності методу оцінки навколишнього середовища будівельних дослідницьких установ (BREEAM) якості аудиту.",
        ro: "SMARTWaste ajută IMM-urile din construcții să urmărească datele privind deșeurile și emisiile de carbon în timp real, să reducă costurile de eliminare și să genereze dovezi de conformitate cu metoda de evaluare a mediului pentru instituțiile de cercetare a clădirilor (BREEAM) de calitate de audit.",
        hy: "SMARTWaste-ն օգնում է շինարարական ՓՄՁ-ներին իրական ժամանակում հետևել թափոնների և ածխածնի տվյալներին, նվազեցնել հեռացման ծախսերը և ստեղծել աուդիտի որակի Շենքերի հետազոտական ​​հաստատությունների շրջակա միջավայրի գնահատման մեթոդի (BREEAM) համապատասխանության ապացույցներ:"
      },
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'High',
    language: 'English',
    provider: 'BRE Group (Building Research Establishment)',
    access: 'Sign up',
    timeRequired: {
      en: "Ongoing / per project, with data entry taking minutes per input",
      uk: "Постійно/на проект, введення даних займає хвилини на введення",
      ro: "În desfășurare/per proiect, cu introducerea datelor luând minute pentru fiecare intrare",
      hy: "Ընթացիկ / մեկ նախագծի համար, տվյալների մուտքագրմամբ յուրաքանչյուր մուտքագրման րոպե տևում է"
    },
    preparationNeeded: {
      en: "Project registration required; scales from 1 to 100+ projects.",
      uk: "Необхідна реєстрація проекту; масштаби від 1 до 100+ проектів.",
      ro: "Este necesară înregistrarea proiectului; scala de la 1 la 100+ proiecte.",
      hy: "Պահանջվում է նախագծի գրանցում; մասշտաբներ 1-ից մինչև 100+ նախագծեր:"
    },
    output: {
      en: "Project waste reports, carbon calculations and Building Research Establishment Environmental Assessment Method (BREEAM) evidence packages",
      uk: "Звіти про відходи проекту, розрахунки вуглецю та пакети доказів Методу оцінки навколишнього середовища дослідницької установи будівель (BREEAM)",
      ro: "Rapoartele privind deșeurile de proiect, calculele de carbon și pachetele de dovezi ale metodei de evaluare a mediului pentru unitățile de cercetare a clădirilor (BREEAM)",
      hy: "Ծրագրի թափոնների հաշվետվություններ, ածխածնի հաշվարկներ և շենքերի հետազոտական ​​հաստատությունների շրջակա միջավայրի գնահատման մեթոդ (BREEAM) ապացույցների փաթեթներ"
    },
    bestFor: {
      en: "Construction SMEs managing new build, refurbishment or demolition projects",
      uk: "Будівельні МСП, які керують проектами нового будівництва, реконструкції чи знесення",
      ro: "IMM-uri din construcții care gestionează proiecte de construcții noi, retehnologizare sau demolare",
      hy: "Շինարարական ՓՄՁ-ներ, որոնք կառավարում են նոր կառուցման, վերանորոգման կամ քանդման ծրագրեր"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://bregroup.com/products/smartwaste/assessment-tool'
  },
  {
    id: 'resource-042',
    slug: 'levels-eu-sustainable-buildings-framework',
    title: 'Level(s) - EU Sustainable Buildings Framework',
    description:
      {
        en: "An EU framework for assessing and reporting building sustainability performance across the full lifecycle.",
        uk: "Рамкова основа ЄС для оцінки та звітності про стійкість будівлі протягом повного життєвого циклу.",
        ro: "Un cadru UE pentru evaluarea și raportarea performanței în domeniul sustenabilității clădirii pe întreg ciclul de viață.",
        hy: "ԵՄ շրջանակ՝ ողջ կյանքի ընթացքում կայունության կառուցման կատարողականը գնահատելու և զեկուցելու համար:"
      },
    about:
      {
        en: "Level(s) helps construction SMEs measure and report building sustainability across carbon, materials, water, health and life-cycle cost, supporting alignment with EU sustainability requirements. It is an assessment and reporting tool with guidance, templates and e-learning modules to support building sustainability across the full lifecycle, from design to construction, operation and end-of-life. The framework contributes and supports alignment across other EU directives and standards, including the Sustainable Finance, Energy Performance of Buildings Directive (EPBD), Sustainable Development Goals (SDGs) and the European Green Deal. Depending on the manual, elearning module or ressource you choose, the time required, language and access can vary.",
        uk: "Рівень(-и) допомагає будівельним МСП вимірювати та звітувати про стійкість будівель щодо вуглецю, матеріалів, води, охорони здоров’я та вартості життєвого циклу, підтримуючи узгодження з вимогами ЄС щодо стійкості. Це інструмент оцінки та звітності з інструкціями, шаблонами та модулями електронного навчання для підтримки стійкості будівель протягом усього життєвого циклу, від проектування до будівництва, експлуатації та завершення життєвого циклу. Рамкова основа сприяє і підтримує узгодження інших директив і стандартів ЄС, включаючи Стале фінансування, Директиву про енергетичну ефективність будівель (EPBD), Цілі сталого розвитку (ЦСР) і Європейську зелену угоду. Залежно від вибраного посібника, модуля електронного навчання чи ресурсу необхідний час, мова та доступ можуть відрізнятися.",
        ro: "Level(s) ajută IMM-urile din construcții să măsoare și să raporteze durabilitatea clădirii în ceea ce privește carbonul, materialele, apă, sănătatea și costurile ciclului de viață, susținând alinierea la cerințele UE de durabilitate. Este un instrument de evaluare și raportare cu îndrumări, șabloane și module de e-learning pentru a sprijini sustenabilitatea clădirii pe întreg ciclul de viață, de la proiectare la construcție, operare și sfârșitul vieții. Cadrul contribuie și sprijină alinierea la alte directive și standarde ale UE, inclusiv Finanțarea durabilă, Directiva privind performanța energetică a clădirilor (EPBD), Obiectivele de dezvoltare durabilă (ODD) și Pactul ecologic european. În funcție de manualul, modulul de elearning sau resursa pe care o alegeți, timpul necesar, limba și accesul pot varia.",
        hy: "Մակարդակ(ներ)ը օգնում է շինարարական ՓՄՁ-ներին չափել և զեկուցել շինարարության կայունությունը ածխածնի, նյութերի, ջրի, առողջության և կյանքի ցիկլի ծախսերի առումով՝ աջակցելով ԵՄ կայունության պահանջներին համապատասխանեցմանը: Այն գնահատման և հաշվետվության գործիք է՝ ուղեցույցներով, ձևանմուշներով և էլեկտրոնային ուսուցման մոդուլներով՝ աջակցելու շենքի կայունությանը ողջ կյանքի ընթացքում՝ նախագծումից մինչև շինարարություն, շահագործում և ժամկետի ավարտ: Շրջանակը նպաստում և աջակցում է ԵՄ այլ դիրեկտիվների և ստանդարտների համապատասխանեցմանը, ներառյալ Կայուն ֆինանսավորումը, Շենքերի էներգետիկ արդյունավետության հրահանգը (EPBD), Կայուն զարգացման նպատակները (SDGs) և Եվրոպական կանաչ գործարքը: Կախված ձեր ընտրած ձեռնարկից, էլեկտրոնային ուսուցման մոդուլից կամ ռեսուրսից, պահանջվող ժամանակը, լեզուն և հասանելիությունը կարող են տարբեր լինել:"
      },
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'High',
    language: 'English',
    provider: 'European Commission (DG Environment)',
    access: 'Free',
    timeRequired: {
      en: "Variable, used across the full project lifecycle",
      uk: "Змінна, використовується протягом усього життєвого циклу проекту",
      ro: "Variabil, utilizat pe parcursul întregului ciclu de viață al proiectului",
      hy: "Փոփոխական, որն օգտագործվում է ծրագրի ողջ կյանքի ընթացքում"
    },
    preparationNeeded: {
      en: "None for basic use; building data for full Life Cycle Assessment (LCA).",
      uk: "Немає для базового використання; дані будівлі для повної оцінки життєвого циклу (LCA).",
      ro: "Niciuna pentru utilizare de bază; date de construcție pentru evaluarea completă a ciclului de viață (LCA).",
      hy: "Հիմնական օգտագործման համար չկա; Կառուցման տվյալներ կյանքի ցիկլի ամբողջական գնահատման համար (LCA):"
    },
    output: {
      en: "Lifecycle sustainability assessment and compliance report",
      uk: "Оцінка стійкості життєвого циклу та звіт про відповідність",
      ro: "Evaluarea durabilității ciclului de viață și raportul de conformitate",
      hy: "Կյանքի ցիկլի կայունության գնահատում և համապատասխանության հաշվետվություն"
    },
    bestFor: {
      en: "Construction SMEs, architects, developers and residential and commercial building projects",
      uk: "Будівельні МСП, архітектори, забудовники та проекти житлових і комерційних будівель",
      ro: "IMM-uri de constructii, arhitecti, dezvoltatori si proiecte de constructii rezidentiale si comerciale",
      hy: "Շինարարական ՓՄՁ-ներ, ճարտարապետներ, կառուցապատողներ և բնակելի և առևտրային շենքերի նախագծեր"
    },
    format: {
      en: "Framework, elearning courses and manuals",
      uk: "Фреймворк, курси електронного навчання та посібники",
      ro: "Cadru, cursuri elearning și manuale",
      hy: "Շրջանակային, elearning դասընթացներ և ձեռնարկներ"
    },
    toolLink: 'https://green-forum.ec.europa.eu/green-business/levels/quick-introduction-levels_en'
  },
  {
    id: 'resource-043',
    slug: 'farm-carbon-toolkit',
    title: 'Farm Carbon Toolkit',
    description:
      {
        en: "A carbon calculator for farms and growers that produces carbon output reports for farm, product and supply-chain emissions work.",
        uk: "Калькулятор вуглецю для ферм і виробників, який створює звіти про викиди вуглецю для роботи на фермах, продуктах і ланцюгах постачання.",
        ro: "Un calculator de carbon pentru fermele și cultivatorii care produce rapoarte de producție de carbon pentru lucrările de emisii ale fermelor, ale produselor și ale lanțului de aprovizionare.",
        hy: "Ածխածնի հաշվիչ ֆերմերային տնտեսությունների և աճեցողների համար, որը արտադրում է ածխածնի ելքի հաշվետվություններ ֆերմերային տնտեսությունների, արտադրանքի և մատակարարման շղթայի արտանետումների աշխատանքների համար:"
      },
    about:
      {
        en: "The Farm Carbon Toolkit calculator is designed for farmers and growers, and can also support researchers, agricultural professionals and consultants delivering carbon footprints.",
        uk: "Калькулятор Farm Carbon Toolkit призначений для фермерів і виробників, а також може допомогти дослідникам, професіоналам у сільському господарстві та консультантам надавати вуглецеві сліди.",
        ro: "Calculatorul Farm Carbon Toolkit este conceput pentru fermieri și cultivatori și poate sprijini, de asemenea, cercetătorii, profesioniștii în agricultură și consultanții care livrează amprenta de carbon.",
        hy: "Farm Carbon Toolkit հաշվիչը նախատեսված է ֆերմերների և աճեցողների համար և կարող է նաև աջակցել հետազոտողներին, գյուղատնտեսության ոլորտի մասնագետներին և խորհրդատուներին, որոնք առաքում են ածխածնի հետքեր:"
      },
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Farm Carbon',
    access: 'Sign up',
    timeRequired: {
      en: "3-4 hours",
      uk: "3-4 години",
      ro: "3-4 ore",
      hy: "3-4 ժամ"
    },
    preparationNeeded: {
      en: "Overview of your land, produce inputs and outputs.",
      uk: "Огляд вашої землі, виробництво входів і виходів.",
      ro: "Privire de ansamblu asupra terenului dvs., produceți intrări și ieșiri.",
      hy: "Ձեր հողի ակնարկ, արտադրեք մուտքեր և ելքեր:"
    },
    output: {
      en: "Carbon output report",
      uk: "Звіт про вихід вуглецю",
      ro: "Raport de producție de carbon",
      hy: "Ածխածնի թողարկման հաշվետվություն"
    },
    bestFor: {
      en: "Farms looking to reduce scope emissions or value-chain emissions",
      uk: "Ферми, які прагнуть зменшити масштабні викиди або викиди в ланцюжку створення вартості",
      ro: "Fermele care caută să reducă emisiile din domeniul de aplicare sau emisiile din lanțul valoric",
      hy: "Ֆերմերային տնտեսություններ, որոնք ձգտում են նվազեցնել արտանետումների ծավալը կամ արժեքային շղթայի արտանետումները"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://calculator.farmcarbontoolkit.org.uk/'
  },
  {
    id: 'resource-044',
    slug: 'food-circularity-check',
    title: 'Food Circularity Check',
    description:
      {
        en: "A circularity self-assessment tool designed to help food companies understand their circular economy maturity level.",
        uk: "Інструмент самооцінки замкнутості, розроблений, щоб допомогти харчовим компаніям зрозуміти свій рівень зрілості циклічної економіки.",
        ro: "Un instrument de autoevaluare a circularității conceput pentru a ajuta companiile alimentare să înțeleagă nivelul de maturitate al economiei circulare.",
        hy: "Շրջանաձևության ինքնագնահատման գործիք, որը նախատեսված է սննդամթերքի ընկերություններին օգնելու հասկանալ իրենց շրջանաձև տնտեսության հասունության մակարդակը:"
      },
    about:
      {
        en: "The Food Circularity Check is an online self-assessment developed for food and agri-food businesses. It gives companies a structured picture of how circular their operations are and where gaps and opportunities exist.",
        uk: "Food Circularity Check – це онлайн-система самооцінки, розроблена для харчових та агропродовольчих підприємств. Це дає компаніям структуроване уявлення про те, наскільки циркулярною є їхня діяльність, а також прогалини та можливості.",
        ro: "Verificarea Circularității Alimentare este o autoevaluare online dezvoltată pentru întreprinderile alimentare și agroalimentare. Oferă companiilor o imagine structurată a cât de circulare sunt operațiunile lor și unde există lacune și oportunități.",
        hy: "Սննդի շրջանառության ստուգումը առցանց ինքնագնահատում է, որը մշակվել է պարենային և ագրոպարենային բիզնեսների համար: Այն ընկերություններին տալիս է կառուցվածքային պատկեր այն մասին, թե որքան շրջանաձև են նրանց գործունեությունը և որտեղ կան բացեր և հնարավորություններ:"
      },
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Circular Economy for Food',
    access: 'Free',
    timeRequired: {
      en: "30-45 minutes",
      uk: "30-45 хвилин",
      ro: "30-45 minute",
      hy: "30-45 րոպե"
    },
    preparationNeeded: {
      en: "Production and supply-chain data needed.",
      uk: "Необхідні дані про виробництво та ланцюг постачання.",
      ro: "Sunt necesare date privind producția și lanțul de aprovizionare.",
      hy: "Անհրաժեշտ է արտադրության և մատակարարման շղթայի տվյալներ:"
    },
    output: {
      en: "Downloadable summary showing completion percentage across six categories",
      uk: "Завантажуваний підсумок із відсотком завершення за шістьма категоріями",
      ro: "Rezumat descărcabil care arată procentul de finalizare în șase categorii",
      hy: "Ներբեռնվող ամփոփագիր, որը ցույց է տալիս ավարտվածության տոկոսը վեց կատեգորիաներում"
    },
    bestFor: {
      en: "Farms looking to reduce scope emissions or value-chain emissions",
      uk: "Ферми, які прагнуть зменшити масштабні викиди або викиди в ланцюжку створення вартості",
      ro: "Fermele care caută să reducă emisiile din domeniul de aplicare sau emisiile din lanțul valoric",
      hy: "Ֆերմերային տնտեսություններ, որոնք ձգտում են նվազեցնել արտանետումների ծավալը կամ արժեքային շղթայի արտանետումները"
    },
    format: {
      en: "Questionnaire",
      uk: "Анкета",
      ro: "Chestionar",
      hy: "Հարցաթերթիկ"
    },
    toolLink: 'https://circulareconomyforfood.eu/en/food-circularity-check/'
  },
  {
    id: 'resource-045',
    slug: 'o-farms-circular-toolkit',
    title: 'O-Farms Circular Toolkit',
    description:
      {
        en: "A set of six practical tools for agri-SMEs, entrepreneur support organisations and practitioners working with circular agribusinesses.",
        uk: "Набір із шести практичних інструментів для аграрних малих і середніх підприємств, організацій підтримки підприємців і практиків, які працюють із циклічним агробізнесом.",
        ro: "Un set de șase instrumente practice pentru IMM-uri agricole, organizații de sprijinire a antreprenorilor și practicieni care lucrează cu agro-afacerile circulare.",
        hy: "Վեց գործնական գործիքների հավաքածու ագրոՓՄՁ-ների, ձեռնարկատերերին աջակցող կազմակերպությունների և շրջանաձև ագրոբիզնեսի հետ աշխատող մասնագետների համար:"
      },
    about:
      {
        en: "The Circular Toolkit by O-Farms supports SMEs in finding inspiration for circular product development, assessing circularity, discovering opportunities, amplifying impact and increasing revenue.",
        uk: "Circular Toolkit від O-Farms допомагає малим і середнім підприємствам знайти натхнення для циклічної розробки продуктів, оцінити циклічність, виявити можливості, посилити вплив і збільшити дохід.",
        ro: "Setul de instrumente circular de la O-Farms sprijină IMM-urile în găsirea de inspirație pentru dezvoltarea de produse circulare, evaluarea circularității, descoperirea oportunităților, amplificarea impactului și creșterea veniturilor.",
        hy: "O-Farms-ի Circular Toolkit-ն աջակցում է ՓՄՁ-ներին՝ ոգեշնչում գտնելու շրջանաձև արտադրանքի մշակման, շրջանաձևության գնահատման, հնարավորությունների բացահայտման, ազդեցության ուժեղացման և եկամուտների ավելացման հարցում:"
      },
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'O-farms',
    access: 'Sign up',
    timeRequired: {
      en: "2-3 hours per workshop",
      uk: "2-3 години на майстер-клас",
      ro: "2-3 ore pe atelier",
      hy: "2-3 ժամ մեկ սեմինարի համար"
    },
    preparationNeeded: {
      en: "Farm nutrient and input data required.",
      uk: "Необхідні дані про поживні речовини та вхідні дані для ферми.",
      ro: "Sunt necesare date privind nutrienții și intrarea în fermă.",
      hy: "Պահանջվում են ֆերմերային սննդանյութերի և մուտքային տվյալներ:"
    },
    output: {
      en: "Completed worksheets to guide internal decisions and external conversations about circular strategy",
      uk: "Заповнені робочі аркуші для скерування внутрішніх рішень і зовнішніх розмов щодо циклічної стратегії",
      ro: "Fișe de lucru finalizate pentru a ghida deciziile interne și conversațiile externe despre strategia circulară",
      hy: "Լրացված աշխատանքային թերթիկներ՝ ներքին որոշումները և արտաքին զրույցները շրջանաձև ռազմավարության վերաբերյալ առաջնորդելու համար"
    },
    bestFor: {
      en: "Arable, livestock and mixed-farm SMEs",
      uk: "МСП, що займаються землеробством, тваринництвом та змішаними фермами",
      ro: "IMM-uri agricole, zootehnice și mixte",
      hy: "Վարելահող, անասնաբուծական և խառը գյուղատնտեսական ՓՄՁ-ներ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://circulartoolkit.org/'
  },
  {
    id: 'resource-046',
    slug: 'wrap-food-waste-reduction-toolkit',
    title: 'WRAP Food Waste Reduction Toolkit',
    description:
      {
        en: "Practical measurement and tracking tools for agri-food businesses to quantify food waste, identify hotspots and set reduction targets.",
        uk: "Практичні інструменти вимірювання та відстеження для агропродовольчих підприємств для кількісної оцінки харчових відходів, виявлення гарячих точок і встановлення цілей скорочення.",
        ro: "Instrumente practice de măsurare și urmărire pentru întreprinderile agroalimentare pentru a cuantifica risipa alimentară, a identifica punctele fierbinți și a stabili obiective de reducere.",
        hy: "Գործնական չափման և հետևելու գործիքներ ագրոպարենային բիզնեսի համար՝ սննդամթերքի թափոնները քանակականացնելու, թեժ կետերը բացահայտելու և կրճատման թիրախներ սահմանելու համար:"
      },
    about:
      {
        en: "This Waste and Resources Action Programme (WRAP) data capture sheet supports the Target, Measure, Act principles for food waste reduction and aligns with Sustainable Development Goal 12.3 and the international Food Loss & Waste Standard.",
        uk: "Ця таблиця збору даних Програми дій щодо відходів і ресурсів (WRAP) підтримує принципи «Ціль, міра, дія» для зменшення харчових відходів і відповідає Цілі сталого розвитку 12.3 і міжнародному стандарту щодо втрат і відходів їжі.",
        ro: "Această fișă de captare a datelor Programului de acțiune privind deșeurile și resursele (WRAP) susține principiile țintă, măsură, act pentru reducerea risipei alimentare și se aliniază cu Obiectivul de dezvoltare durabilă 12.3 și cu Standardul internațional privind pierderile și risipa de alimente.",
        hy: "Թափոնների և ռեսուրսների գործողությունների ծրագրի (WRAP) տվյալների հավաքագրման թերթիկը աջակցում է սննդամթերքի թափոնների նվազեցման նպատակային, չափման, գործողության սկզբունքներին և համահունչ է Կայուն զարգացման նպատակին 12.3-ին և սննդի կորստի և թափոնների միջազգային ստանդարտին:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Medium',
    language: 'English',
    provider: 'Waste and Resources Action Programme (WRAP)',
    access: 'Free',
    timeRequired: {
      en: "Self-directed; modular use",
      uk: "Самокерований; модульне використання",
      ro: "Autodirecționat; utilizare modulară",
      hy: "Ինքնուղղված; մոդուլային օգտագործումը"
    },
    preparationNeeded: {
      en: "Basic food waste data helpful.",
      uk: "Корисні основні дані про харчові відходи.",
      ro: "Datele de bază privind risipa alimentară sunt utile.",
      hy: "Սննդամթերքի թափոնների հիմնական տվյալները օգտակար են:"
    },
    output: {
      en: "Waste measurement reports, hotspot analysis and action plan",
      uk: "Звіти про вимірювання відходів, аналіз гарячих точок і план дій",
      ro: "Rapoarte de măsurare a deșeurilor, analiză hotspot și plan de acțiune",
      hy: "Թափոնների չափման հաշվետվություններ, թեժ կետերի վերլուծություն և գործողությունների պլան"
    },
    bestFor: {
      en: "Farmers, growers, food manufacturers and retailers",
      uk: "Фермери, виробники продуктів харчування та роздрібні торговці",
      ro: "Fermierii, cultivatorii, producătorii de alimente și comercianții cu amănuntul",
      hy: "Ֆերմերներ, աճեցնողներ, սննդամթերք արտադրողներ և մանրածախ առևտուր"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.wrap.ngo/resources/tool/food-loss-and-waste-data-capture-sheet'
  },
  {
    id: 'resource-047',
    slug: 'circular-toolbox',
    title: 'Circular Toolbox',
    description:
      {
        en: "A step-by-step toolbox that helps apparel brands adopt circular business models and independently drive circular innovation.",
        uk: "Покроковий набір інструментів, який допомагає брендам одягу запроваджувати кругові бізнес-моделі та самостійно впроваджувати циклічні інновації.",
        ro: "O cutie de instrumente pas cu pas care ajută mărcile de îmbrăcăminte să adopte modele de afaceri circulare și să conducă independent inovația circulară.",
        hy: "Քայլ առ քայլ գործիքների տուփ, որն օգնում է հագուստի ապրանքանիշերին ընդունել շրջանաձև բիզնես մոդելներ և ինքնուրույն առաջ մղել շրջանաձև նորարարություն:"
      },
    about:
      {
        en: "The Circular Toolbox guides apparel brands through a five-step circular innovation process, from team formation and customer understanding to prototyping, fine-tuning and piloting a new concept.",
        uk: "Circular Toolbox проводить бренди одягу через п’ятиетапний циклічний інноваційний процес, від формування команди та розуміння клієнта до прототипування, тонкого налаштування та пілотування нової концепції.",
        ro: "Cutia de instrumente circulară ghidează mărcile de îmbrăcăminte printr-un proces circular de inovare în cinci pași, de la formarea echipei și înțelegerea clienților până la crearea de prototipuri, reglarea fină și pilotarea unui nou concept.",
        hy: "Circular Toolbox-ն առաջնորդում է հագուստի ապրանքանիշերը հինգ քայլից բաղկացած շրջանաձև նորարարական գործընթացի միջոցով՝ սկսած թիմի ձևավորումից և հաճախորդների ըմբռնումից մինչև նոր հայեցակարգի նախատիպավորում, ճշգրտում և փորձարկում:"
      },
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English, Dutch',
    provider: 'Circular Economy',
    access: 'Sign up',
    timeRequired: {
      en: "10-month process",
      uk: "10-місячний процес",
      ro: "proces de 10 luni",
      hy: "10-ամսյա գործընթաց"
    },
    preparationNeeded: {
      en: "Leadership sign-off and a cross-functional team.",
      uk: "Підтвердження лідерства та міжфункціональна команда.",
      ro: "Semnarea conducerii și o echipă interfuncțională.",
      hy: "Ղեկավարության ստորագրում և բազմաֆունկցիոնալ թիմ:"
    },
    output: {
      en: "Guided five-step circular innovation process from team formation to piloting",
      uk: "Керований п’ятиетапний циклічний інноваційний процес від формування команди до пілотування",
      ro: "Proces de inovare circulară ghidat în cinci pași, de la formarea echipei până la pilotare",
      hy: "Առաջնորդվող հինգ քայլ շրջանաձև նորարարության գործընթաց՝ թիմի ձևավորումից մինչև փորձնական"
    },
    bestFor: {
      en: "Textile SMEs and brands",
      uk: "Текстильні МСП і бренди",
      ro: "IMM-uri și mărci textile",
      hy: "Տեքստիլ ՓՄՁ-ներ և ապրանքանիշեր"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://thecirculartoolbox.com/html/the-circular-toolbox-is-a-step-by-step-guide-for-apparel-brands-to-design-and-launch-a-rental-or-resale-pilot-in-10-months-the-toolbox-provides-resources-to-accompany-you-along-your-circular-innovation-journey-5ici.html'
  },
  {
    id: 'resource-048',
    slug: 'rehub-eu-textile-recycling',
    title: 'Re.Hub (EU Textile Recycling)',
    description:
      {
        en: "An EU mapping tool and network for textile collection, sorting and recycling infrastructure.",
        uk: "Інструмент картографування ЄС та мережа для інфраструктури збору, сортування та переробки текстилю.",
        ro: "Un instrument de cartografiere a UE și o rețea pentru infrastructura de colectare, sortare și reciclare a textilelor.",
        hy: "ԵՄ քարտեզագրման գործիք և ցանց տեքստիլի հավաքման, տեսակավորման և վերամշակման ենթակառուցվածքների համար:"
      },
    about:
      {
        en: "Re.Hub connects businesses to Europe's textile recycling network and helps identify local collection, sorting and recycling partners to close textile material loops.",
        uk: "Re.Hub об’єднує підприємства з європейською мережею переробки текстилю та допомагає знайти місцевих партнерів зі збору, сортування та переробки, щоб закрити петлі текстильних матеріалів.",
        ro: "Re.Hub conectează întreprinderile la rețeaua europeană de reciclare a textilelor și ajută la identificarea partenerilor locali de colectare, sortare și reciclare pentru a închide buclele de materiale textile.",
        hy: "Re.Hub-ը միացնում է բիզնեսները Եվրոպայի տեքստիլի վերամշակման ցանցին և օգնում է բացահայտել տեղական հավաքման, տեսակավորման և վերամշակման գործընկերներին՝ փակելու տեքստիլ նյութերի օղակները:"
      },
    journeyPhases: ['Explore'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Low',
    language: 'English',
    provider: 'Re.Hub / European Commission',
    access: 'Sign up',
    timeRequired: {
      en: "Self-directed browsing",
      uk: "Самостійний перегляд",
      ro: "Navigare autonomă",
      hy: "Ինքնուղղված զննարկում"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Map of local recycling partners and routes",
      uk: "Карта місцевих партнерів із переробки та маршрутів",
      ro: "Harta partenerilor locali de reciclare și a rutelor",
      hy: "Տեղական վերամշակման գործընկերների և երթուղիների քարտեզ"
    },
    bestFor: {
      en: "Textiles SMEs seeking recycling solutions",
      uk: "Текстильні малі та середні підприємства шукають рішення щодо переробки",
      ro: "IMM-uri din textile care caută soluții de reciclare",
      hy: "Տեքստիլ ՓՄՁ-ներ, որոնք փնտրում են վերամշակման լուծումներ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.rehubs.eu/_files/ugd/e3cc3f_7d307d9d9c084c82b5b23ee5ebbbd493.pdf'
  },
  {
    id: 'resource-049',
    slug: 'fibretrace',
    title: 'Fibretrace',
    description:
      {
        en: "A fibre traceability platform using embedded tracers and blockchain to authenticate sustainability claims from raw material to finished garment.",
        uk: "Платформа відстеження волокна, яка використовує вбудовані трасувальники та блокчейн для підтвердження автентичності тверджень щодо екологічності від сировини до готового одягу.",
        ro: "O platformă de trasabilitate a fibrelor care utilizează trasoare încorporate și blockchain pentru a autentifica afirmațiile de sustenabilitate de la materia primă până la îmbrăcămintea finită.",
        hy: "Օպտիկամանրաթելային հետագծելիության հարթակ, որն օգտագործում է ներկառուցված հետագծեր և բլոկչեյն՝ հաստատելու կայունության պահանջները հումքից մինչև պատրաստի հագուստ:"
      },
    about:
      {
        en: "Fibretrace gives textile businesses end-to-end visibility of the supply chain, supporting verified sustainability claims from fibre to finished product.",
        uk: "Fibretrace надає текстильним підприємствам наскрізну видимість ланцюга постачання, підтримуючи перевірені заяви про екологічність від волокна до готового продукту.",
        ro: "Fibretrace oferă companiilor din textile vizibilitate de la capăt la capăt a lanțului de aprovizionare, susținând afirmațiile verificate de sustenabilitate de la fibre până la produsul finit.",
        hy: "Fibretrace-ը տեքստիլ ձեռնարկություններին տալիս է մատակարարման շղթայի վերջնական տեսանելիություն՝ աջակցելով կայունության հաստատված պահանջներին մանրաթելից մինչև պատրաստի արտադրանք:"
      },
    journeyPhases: ['Monitor', 'Assess'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English',
    provider: 'Fibretrace',
    access: 'Paid',
    timeRequired: {
      en: "Ongoing / integration required",
      uk: "Триває / потрібна інтеграція",
      ro: "În curs de desfășurare / integrare necesară",
      hy: "Պահանջվում է շարունակական / ինտեգրում"
    },
    preparationNeeded: {
      en: "Platform onboarding needed.",
      uk: "Потрібна адаптація платформи.",
      ro: "Este necesară integrarea platformei.",
      hy: "Պահանջվում է պլատֆորմի տեղադրում:"
    },
    output: {
      en: "Real-time supply-chain traceability data",
      uk: "Дані відстеження ланцюга поставок у реальному часі",
      ro: "Date de trasabilitate în timp real a lanțului de aprovizionare",
      hy: "Իրական ժամանակի մատակարարման շղթայի հետագծելիության տվյալներ"
    },
    bestFor: {
      en: "Textile and apparel SMEs",
      uk: "МСП текстилю та одягу",
      ro: "IMM-uri din textile și îmbrăcăminte",
      hy: "Տեքստիլ և հագուստեղեն ՓՄՁ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://www.fibretrace.io/'
  },
  {
    id: 'resource-050',
    slug: 'higg-product-tools',
    title: 'Higg Product Tools',
    description:
      {
        en: "An industry measurement suite for environmental and social sustainability across textile supply chains.",
        uk: "Набір галузевих вимірювань для екологічної та соціальної стійкості в ланцюгах постачання текстилю.",
        ro: "O suită de măsurare a industriei pentru sustenabilitatea socială și de mediu în lanțurile de aprovizionare cu textile.",
        hy: "Արդյունաբերության չափման հավաքածու՝ բնապահպանական և սոցիալական կայունության համար տեքստիլ մատակարարման շղթաներում:"
      },
    about:
      {
        en: "The Higg Product Module and Higg Materials Sustainability Index provide insights into the environmental impacts of materials and products so designers and organisations can assess, compare and communicate impact performance.",
        uk: "Модуль продукту Хігга та індекс стійкості матеріалів Хігга дають уявлення про вплив матеріалів і продуктів на навколишнє середовище, щоб дизайнери та організації могли оцінювати, порівнювати та повідомляти про ефективність впливу.",
        ro: "Modulul de produse Higg și Indexul de durabilitate a materialelor Higg oferă perspective asupra impactului asupra mediului al materialelor și produselor, astfel încât designerii și organizațiile să poată evalua, compara și comunica performanța impactului.",
        hy: "Higg Product Module-ը և Higg Materials Sustainability Index-ը տրամադրում են պատկերացումներ նյութերի և արտադրանքի շրջակա միջավայրի վրա ազդեցության մասին, որպեսզի դիզայներներն ու կազմակերպությունները կարողանան գնահատել, համեմատել և հաղորդել ազդեցության կատարողականը:"
      },
    journeyPhases: ['Monitor'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Medium',
    language: 'English',
    provider: 'Sustainable Apparel Coalition',
    access: 'Sign up',
    timeRequired: {
      en: "Ongoing / continuous",
      uk: "Постійно/безперервно",
      ro: "În curs/continuu",
      hy: "Ընթացիկ / շարունակական"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Benchmarked sustainability scores and reports",
      uk: "Порівняльні показники стійкості та звіти",
      ro: "Scoruri și rapoarte de sustenabilitate evaluate",
      hy: "Հենանիշային կայունության միավորներ և հաշվետվություններ"
    },
    bestFor: {
      en: "Textile and apparel SMEs",
      uk: "МСП текстилю та одягу",
      ro: "IMM-uri din textile și îmbrăcăminte",
      hy: "Տեքստիլ և հագուստեղեն ՓՄՁ"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://cascale.org/tools-programs/higg-index-tools/product-tools/'
  },
  {
    id: 'resource-051',
    slug: 'pdca-form-template',
    title: 'Plan, Do, Check, Act (PDCA) Form Template',
    description:
      {
        en: "A four-step Plan-Do-Check-Act framework that helps SMEs interpret results, identify root causes and plan targeted improvements.",
        uk: "Чотирьохетапна структура «Плануй-Виконуй-Перевіряй-Дій», яка допомагає МСП інтерпретувати результати, визначати першопричини та планувати цілеспрямовані покращення.",
        ro: "Un cadru în patru etape Planificați-Efectuați-Verificați-Acționați, care ajută IMM-urile să interpreteze rezultatele, să identifice cauzele fundamentale și să planifice îmbunătățiri vizate.",
        hy: "Չորս քայլ Plan-Do-Check-Act շրջանակ, որն օգնում է ՓՄՁ-ներին մեկնաբանել արդյունքները, բացահայտել հիմնական պատճառները և պլանավորել նպատակային բարելավումներ:"
      },
    about:
      {
        en: "The Plan, Do, Check, Act (PDCA) cycle is a continuous improvement framework that works well for circular economy implementation. You can use as an overall project management tool to review results of implemented actions, decide what to adjust, set new targets and implement improvements. The framework is simple yet powerful, and is essential in systematic reviews. || The tool provider also offers templates with more advanced versions of the PDCA framework, including problem solving templates with more detailed fields and other formats such as Excel sheets and google sheets. If the template is too simplified for your use-case, review the more detailed templates in their website: [HERE](https://www.smartsheet.com/content/pdca-templates). These templates can also be utilised to inform your own review document frameworks, wherever these are located for best follow-up.",
        uk: "Цикл «Плануй, виконуй, перевіряй, дій» (PDCA) — це система безперервного вдосконалення, яка добре працює для впровадження циклічної економіки. Ви можете використовувати як загальний інструмент управління проектом, щоб переглядати результати впроваджених дій, вирішувати, що потрібно скоригувати, установлювати нові цілі та впроваджувати вдосконалення. Структура проста, але потужна, необхідна для систематичних оглядів. || Постачальник інструментів також пропонує шаблони з розширенішими версіями інфраструктури PDCA, включаючи шаблони вирішення проблем із детальнішими полями та іншими форматами, такими як таблиці Excel і таблиці Google. Якщо шаблон занадто спрощений для вашого випадку використання, перегляньте детальніші шаблони на їх веб-сайті: [HERE](https://www.smartsheet.com/content/pdca-templates). Ці шаблони також можна використовувати для інформування ваших власних структур перевірки документів, де б вони не були розташовані для найкращого подальшого виконання.",
        ro: "Ciclul Planificați, faceți, verificați, acționați (PDCA) este un cadru de îmbunătățire continuă care funcționează bine pentru implementarea economiei circulare. Puteți utiliza ca instrument general de management de proiect pentru a revizui rezultatele acțiunilor implementate, a decide ce să ajusteze, a stabili noi obiective și a implementa îmbunătățiri. Cadrul este simplu, dar puternic și este esențial în revizuirile sistematice. || Furnizorul de instrumente oferă, de asemenea, șabloane cu versiuni mai avansate ale cadrului PDCA, inclusiv șabloane de rezolvare a problemelor cu câmpuri mai detaliate și alte formate, cum ar fi foile Excel și foile Google. Dacă șablonul este prea simplificat pentru cazul dvs. de utilizare, examinați șabloanele mai detaliate de pe site-ul lor: [HERE](https://www.smartsheet.com/content/pdca-templates). Aceste șabloane pot fi, de asemenea, utilizate pentru a vă informa propriile cadre ale documentelor de revizuire, oriunde se află acestea, pentru o urmărire optimă.",
        hy: "Պլան, արա, ստուգում, ակտ (PDCA) ցիկլը շարունակական բարելավման շրջանակ է, որը լավ է աշխատում շրջանաձև տնտեսության իրականացման համար: Դուք կարող եք օգտագործել որպես ծրագրի կառավարման ընդհանուր գործիք՝ իրականացված գործողությունների արդյունքները վերանայելու, որոշելու, թե ինչ հարմարեցնել, սահմանել նոր թիրախներ և իրականացնել բարելավումներ: Շրջանակը պարզ է, բայց հզոր և կարևոր է համակարգված վերանայումների համար: || Գործիքի մատակարարը նաև առաջարկում է ձևանմուշներ PDCA շրջանակի ավելի առաջադեմ տարբերակներով, ներառյալ խնդիրների լուծման ձևանմուշներ ավելի մանրամասն դաշտերով և այլ ձևաչափերով, ինչպիսիք են Excel թերթերը և google թերթերը: Եթե ​​ձևանմուշը չափազանց պարզեցված է ձեր օգտագործման դեպքում, վերանայեք ավելի մանրամասն ձևանմուշները իրենց կայքում. [HERE](https://www.smartsheet.com/content/pdca-templates). Այս ձևանմուշները կարող են օգտագործվել նաև ձեր սեփական վերանայման փաստաթղթերի շրջանակները տեղեկացնելու համար, որտեղ էլ որ դրանք գտնվում են լավագույն հետևելու համար:"
      },
    journeyPhases: ['Explore', 'Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'SmartSheet',
    access: 'Free',
    timeRequired: {
      en: "1-2 hour per review cycle",
      uk: "1-2 години на цикл перегляду",
      ro: "1-2 ore pe ciclu de revizuire",
      hy: "1-2 ժամ մեկ վերանայման ցիկլի համար"
    },
    preparationNeeded: {
      en: "Collect relevant data and results from the previous implementation cycle for the review part of the PDCA process.",
      uk: "Зберіть відповідні дані та результати попереднього циклу реалізації для частини перегляду процесу PDCA.",
      ro: "Colectați date și rezultate relevante din ciclul de implementare anterior pentru partea de revizuire a procesului PDCA.",
      hy: "Հավաքեք համապատասխան տվյալներ և արդյունքներ նախորդ իրականացման շրջանից՝ PDCA գործընթացի վերանայման մասի համար:"
    },
    output: {
      en: "Prioritised action plan for the next circular improvement cycle",
      uk: "Пріоритезований план дій для наступного циклу циклічного вдосконалення",
      ro: "Plan de acțiune prioritizat pentru următorul ciclu circular de îmbunătățire",
      hy: "Առաջնահերթ գործողությունների ծրագիր հաջորդ շրջանաձև բարելավման ցիկլի համար"
    },
    bestFor: {
      en: "All SMEs working with improvement cycles and continuous processes, especially those already implementing circular actions and ready to refine their efforts in a structured way.",
      uk: "Усі МСП, які працюють із циклами вдосконалення та безперервними процесами, особливо ті, які вже впроваджують циклічні дії та готові вдосконалювати свої зусилля структурованим способом.",
      ro: "Toate IMM-urile care lucrează cu cicluri de îmbunătățire și procese continue, în special cele care implementează deja acțiuni circulare și sunt gata să-și rafineze eforturile într-un mod structurat.",
      hy: "Բոլոր ՓՄՁ-ները, որոնք աշխատում են բարելավման ցիկլերով և շարունակական գործընթացներով, հատկապես նրանք, ովքեր արդեն իրականացնում են շրջանաձև գործողություններ և պատրաստ են կատարելագործել իրենց ջանքերը կառուցվածքային ձևով:"
    },
    format: {
      en: "PDF template",
      uk: "PDF шаблон",
      ro: "Șablon PDF",
      hy: "PDF ձևանմուշ"
    },
    toolLink: 'https://www.smartsheet.com/sites/default/files/2024-09/IC-PDCA-Form-Template-12190_PDF.pdf'
  },
  {
    id: 'resource-052',
    slug: 'circulab-business-ecosystem-canvas',
    title: 'Circulab Business Ecosystem Canvas',
    description:
      {
        en: "A visual canvas tool to map circular ecosystems, review what is and is not working, and redesign a circular business model from real results.",
        uk: "Інструмент візуального полотна для картографування кругових екосистем, перегляду того, що працює, а що не працює, і перепроектування циклічної бізнес-моделі на основі реальних результатів.",
        ro: "Un instrument de pânză vizuală pentru a mapa ecosistemele circulare, a revizui ceea ce funcționează sau nu și a reproiecta un model de afaceri circular din rezultate reale.",
        hy: "Վիզուալ կտավ գործիք՝ շրջանաձև էկոհամակարգերը քարտեզագրելու, վերանայելու, թե ինչն է աշխատում և ինչ չէ, և վերանախագծում է շրջանաձև բիզնես մոդել իրական արդյունքներից:"
      },
    about:
      {
        en: "The Circulab Business Ecosystem Canvas guides teams through reviewing a current circular model, identifying which value flows are working, which partners to engage differently and where circular revenue opportunities remain untapped.",
        uk: "Circulab Business Ecosystem Canvas допомагає командам переглядати поточну циркулярну модель, визначаючи, які потоки цінностей працюють, яких партнерів залучати по-іншому та де можливості циркулярного доходу залишаються невикористаними.",
        ro: "Circulab Business Ecosystem Canvas ghidează echipele prin revizuirea unui model circular actual, identificând ce fluxuri de valoare funcționează, ce parteneri să se implice diferit și unde oportunitățile de venituri circulare rămân neexploatate.",
        hy: "Circulab Business Ecosystem Canvas-ը թիմերին ուղղորդում է ընթացիկ շրջանաձև մոդելի վերանայման միջոցով՝ բացահայտելով, թե որ արժեքային հոսքերն են գործում, որ գործընկերներն են տարբեր կերպ ներգրավվելու և որտեղ են եկամուտների շրջանաձև հնարավորությունները մնում չօգտագործված:"
      },
    journeyPhases: ['Assess', 'Monitor'],
    placements: {
      phaseSections: ['monitor:interpreting-results']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Circulab',
    access: 'Sign up',
    timeRequired: {
      en: "2-3 hours",
      uk: "2-3 години",
      ro: "2-3 ore",
      hy: "2-3 ժամ"
    },
    preparationNeeded: {
      en: "Gather measurement data and key results from your indicators before the session.",
      uk: "Зберіть дані вимірювань і ключові результати за своїми індикаторами перед сеансом.",
      ro: "Adunați date de măsurare și rezultate cheie de la indicatorii dvs. înainte de sesiune.",
      hy: "Նիստից առաջ հավաքեք չափման տվյալները և հիմնական արդյունքները ձեր ցուցանիշներից:"
    },
    output: {
      en: "Updated circular business model canvas with identified improvements",
      uk: "Оновлене полотно кругової бізнес-моделі з виявленими покращеннями",
      ro: "Modelul de afaceri circular actualizat cu îmbunătățiri identificate",
      hy: "Թարմացված շրջանաձև բիզնես մոդելի կտավ՝ հայտնաբերված բարելավումներով"
    },
    bestFor: {
      en: "SMEs already implementing circular actions and ready to refine their model",
      uk: "Малі та середні підприємства вже впроваджують циклічні дії та готові вдосконалювати свою модель",
      ro: "IMM-urile care implementează deja acțiuni circulare și sunt gata să-și perfecționeze modelul",
      hy: "ՓՄՁ-ներն արդեն իրականացնում են շրջանաձև գործողություններ և պատրաստ են կատարելագործել իրենց մոդելը"
    },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://circulab.com/toolbox-circular-economy/'
  },
  {
    id: 'resource-053',
    slug: 'implementation-canvas-circular-business-development-canvas-pack',
    title: 'Implementation Canvas (Circular Business Development Canvas Pack)',
    description:
      {
        en: "A canvas for mapping concrete, actionable steps for putting a circular strategy into practice once solutions have been identified.",
        uk: "Полотно для відображення конкретних дієвих кроків для практичної реалізації циклічної стратегії після того, як рішення визначено.",
        ro: "O pânză pentru cartografierea pașilor concreti, acționabili, pentru punerea în practică a unei strategii circulare odată ce soluțiile au fost identificate.",
        hy: "Կտավ՝ կոնկրետ, գործող քայլերի քարտեզագրման համար՝ լուծումների հայտնաբերումից հետո շրջանաձև ռազմավարությունը գործնականում կիրառելու համար:"
      },
    about:
      {
        en: "This implementation canvas is part of the Circular Business Development Canvas Pack. It supports teams in turning chosen circular strategies into concrete roadmaps with actions, owners and timelines.",
        uk: "Це полотно реалізації є частиною Circular Business Development Canvas Pack. Він допомагає командам перетворювати вибрані кругові стратегії на конкретні дорожні карти з діями, власниками та часовими рамками.",
        ro: "Această pânză de implementare face parte din Circular Business Development Canvas Pack. Acesta sprijină echipele în transformarea strategiilor circulare alese în foi de parcurs concrete cu acțiuni, proprietari și calendare.",
        hy: "Այս իրականացման կտավը Circular Business Development Canvas Pack-ի մի մասն է: Այն աջակցում է թիմերին՝ ընտրված շրջանաձև ռազմավարությունները վերածելու կոնկրետ ճանապարհային քարտեզների՝ գործողությունների, սեփականատերերի և ժամանակացույցի հետ:"
      },
    journeyPhases: ['Implement'],
    placements: {
      phaseSections: ['implement:implementation-plan']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'The Good Tribe',
    access: 'Sign up',
    timeRequired: {
      en: "60-120 minutes (workshop format)",
      uk: "60-120 хвилин (формат воркшопу)",
      ro: "60-120 de minute (format atelier)",
      hy: "60-120 րոպե (սեմինարի ձևաչափ)"
    },
    preparationNeeded: {
      en: "A Miro account, your circular strategy or audit outputs, and relevant team members or stakeholders.",
      uk: "Обліковий запис Miro, ваша циклічна стратегія або результати аудиту, а також відповідні члени команди чи зацікавлені сторони.",
      ro: "Un cont Miro, strategia dvs. circulară sau rezultatele auditului și membrii echipei sau părțile interesate relevanți.",
      hy: "Miro հաշիվը, ձեր շրջանաձև ռազմավարությունը կամ աուդիտի արդյունքները և համապատասխան թիմի անդամները կամ շահագրգիռ կողմերը:"
    },
    output: {
      en: "Structured implementation plan with defined actions, owners and timelines",
      uk: "Структурований план впровадження з визначеними діями, власниками та термінами",
      ro: "Plan de implementare structurat cu acțiuni, proprietari și calendare definite",
      hy: "Կառուցվածքային իրականացման պլան՝ սահմանված գործողություններով, սեփականատերերով և ժամկետներով"
    },
    bestFor: {
      en: "Teams ready to move from strategy to execution after audit and ideation canvases",
      uk: "Команди, готові перейти від стратегії до реалізації після аудиту та аналізу ідей",
      ro: "Echipe gata să treacă de la strategie la execuție după pânzele de audit și ideare",
      hy: "Թիմերը պատրաստ են անցնելու ռազմավարությունից կատարման աուդիտից և գաղափարական կտավներից հետո"
    },
    format: {
      en: "Online collaborative whiteboard (Miro template)",
      uk: "Онлайн-дошка для спільної роботи (шаблон Miro)",
      ro: "Tablă de colaborare online (șablon Miro)",
      hy: "Առցանց համագործակցային գրատախտակ (Miro կաղապար)"
    },
    toolLink: 'https://miro.com/templates/circular-businessdevelopment-canvaspack/'
  },
  {
    id: 'resource-056',
    slug: 'shortlisting-of-options',
    title: 'Shortlisting of Options',
    description:
      {
        en: "A template for shortlisting circular options and assigning responsibility for reviewing feasibility.",
        uk: "Шаблон для короткого списку циркулярних варіантів і призначення відповідальності за перевірку здійсненності.",
        ro: "Un șablon pentru selectarea opțiunilor circulare pe lista scurtă și atribuirea responsabilității pentru revizuirea fezabilității.",
        hy: "Շրջանաձև տարբերակների կարճ ցուցակում ընտրելու և իրագործելիության վերանայման պատասխանատվությունը վերապահելու ձևանմուշ:"
      },
    about:
      {
        en: "This resource helps teams move from screened business models to a shortlist of one to three priority strategies that can be developed into a business case.",
        uk: "Цей ресурс допомагає командам переходити від перевірених бізнес-моделей до короткого списку з однієї-трьох пріоритетних стратегій, які можна розвинути в бізнес-кейс.",
        ro: "Această resursă ajută echipele să treacă de la modele de afaceri verificate la o listă scurtă de una până la trei strategii prioritare care pot fi dezvoltate într-un caz de afaceri.",
        hy: "Այս ռեսուրսը թիմերին օգնում է ստուգված բիզնես մոդելներից անցնել մեկից երեք առաջնահերթ ռազմավարությունների կարճ ցուցակ, որոնք կարող են վերածվել բիզնեսի:"
      },
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies']
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'EU4GRE',
    access: 'Free',
    timeRequired: {
      en: "15-30 minutes",
      uk: "15-30 хвилин",
      ro: "15-30 minute",
      hy: "15-30 րոպե"
    },
    preparationNeeded: {
      en: "Basic knowledge of your options, a pen and the printout.",
      uk: "Базове знання ваших можливостей, ручка та роздруківка.",
      ro: "Cunoștințe de bază despre opțiunile dvs., un stilou și tipărirea.",
      hy: "Ձեր ընտրանքների, գրիչի և տպագրության հիմնական գիտելիքները:"
    },
    output: {
      en: "Filled-out shortlist of circular options with responsibilities and priorities",
      uk: "Заповнений короткий список циклічних варіантів із обов’язками та пріоритетами",
      ro: "Lista scurtă completă de opțiuni circulare cu responsabilități și priorități",
      hy: "Պատասխանատվություններով և առաջնահերթություններով շրջանաձև տարբերակների լրացված կարճ ցուցակ"
    },
    bestFor: {
      en: "All SMEs that benefit from a quick shortlisting exercise",
      uk: "Усі МСП, які виграють від швидкого складання короткого списку",
      ro: "Toate IMM-urile care beneficiază de un exercițiu rapid de preselecție",
      hy: "Բոլոր ՓՄՁ-ները, որոնք օգուտ են քաղում կարճ ցուցակի արագ անցկացումից"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: '/tools/Tool-Shortlisting-your-priority-options.pdf'
  },
  {
    id: 'resource-057',
    slug: 'ncm-business-development-toolkit',
    title: 'NCM business development toolkit',
    description:
      {
        en: "A toolkit for identifying inefficiencies, customer pain points and circular business model opportunities.",
        uk: "Набір інструментів для визначення неефективності, проблемних точок клієнтів і можливостей циклічної бізнес-моделі.",
        ro: "Un set de instrumente pentru identificarea ineficiențelor, punctelor critice ale clienților și oportunităților de model de afaceri circular.",
        hy: "Գործիքակազմ՝ անարդյունավետությունները, հաճախորդների ցավի կետերը և բիզնես մոդելի շրջանաձև հնարավորությունները բացահայտելու համար:"
      },
    about:
      {
        en: "The Business Model Development Toolkit guides teams through exercises to assess five linear-model inefficiencies, reflect on customer pain points and explore circular business sub-models before choosing opportunities to develop further.",
        uk: "Інструментарій розробки бізнес-моделі допоможе командам виконати вправи для оцінки п’яти неефективності лінійної моделі, обміркувати проблемні точки клієнтів і дослідити циклічні підмоделі бізнесу, перш ніж вибрати можливості для подальшого розвитку.",
        ro: "Setul de instrumente de dezvoltare a modelelor de afaceri ghidează echipele prin exerciții pentru a evalua cinci ineficiențe ale modelului liniar, pentru a reflecta asupra punctelor dureroase ale clienților și a explora submodele circulare de afaceri înainte de a alege oportunitățile de dezvoltare în continuare.",
        hy: "Բիզնես մոդելի զարգացման գործիքակազմը թիմերին ուղղորդում է վարժությունների միջոցով՝ գնահատելու հինգ գծային մոդելի անարդյունավետությունը, արտացոլելու հաճախորդների ցավի կետերը և ուսումնասիրելու բիզնեսի ենթամոդելները՝ նախքան հետագա զարգացման հնարավորություններ ընտրելը:"
      },
    journeyPhases: ['Explore','Evaluate'],
    placements: {
      phaseSections:['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'The Nordic Council of Ministers',
    access: 'Free',
    timeRequired: {
      en: "1-5 hours",
      uk: "1-5 годин",
      ro: "1-5 ore",
      hy: "1-5 ժամ"
    },
    preparationNeeded: {
      en: "Basic knowledge of company operations, a pen and the playbook printouts.",
      uk: "Базові знання про діяльність компанії, ручка та роздруківки посібника.",
      ro: "Cunoștințe de bază despre operațiunile companiei, un stilou și tipărite de playbook.",
      hy: "Ընկերության գործունեության հիմնական իմացություն, գրիչ և խաղատախտակի տպագրություն:"
    },
    output: {
      en: "Identified inefficiencies, assessed potential circular business opportunities that lead to a concrete idea.",
      uk: "Виявлено неефективність, оцінено потенційні кругові бізнес-можливості, які призвели до конкретної ідеї.",
      ro: "Identificarea ineficiențelor, evaluarea potențialelor oportunități circulare de afaceri care conduc la o idee concretă.",
      hy: "Բացահայտվել են անարդյունավետությունները, գնահատվել են պոտենցիալ շրջանաձև բիզնես հնարավորությունները, որոնք հանգեցնում են կոնկրետ գաղափարի:"
    },
    bestFor: {
      en: "All SMEs exploring which circular business models suit their company",
      uk: "Усі малі та середні підприємства досліджують, які циклічні бізнес-моделі підходять їхнім компаніям",
      ro: "Toate IMM-urile explorează ce modele circulare de afaceri se potrivesc companiei lor",
      hy: "Բոլոր ՓՄՁ-ները ուսումնասիրում են, թե որ շրջանաձև բիզնես մոդելներն են համապատասխանում իրենց ընկերությանը"
    },
    format: {
      en: "PDF exercises / printable worksheet",
      uk: "PDF вправи / аркуш для друку",
      ro: "Exerciții PDF / fișă de lucru imprimabilă",
      hy: "PDF վարժություններ / տպագրվող աշխատաթերթ"
    },
    toolLink: 'https://www.nordicinnovation.org/sites/default/files/documents/2021/Nordic%20Circular%20Economy%20Playbook%20-%20Business%20Model%20Development%20Toolkit.pdf'
  },
  {
    id: 'resource-058',
    slug: 'product-design-audit-map',
    title: 'Product Design Audit Map',
    description:
      {
        en: "A scoring matrix for assessing design flaws in a product lifecycle and identifying circular design improvement suggestions.",
        uk: "Матриця балів для оцінки недоліків дизайну в життєвому циклі продукту та визначення пропозицій щодо циклічного вдосконалення дизайну.",
        ro: "O matrice de punctaj pentru evaluarea defectelor de design în ciclul de viață al unui produs și identificarea sugestiilor de îmbunătățire a designului circular.",
        hy: "Գնահատման մատրիցա՝ արտադրանքի կյանքի ցիկլի նախագծման թերությունները գնահատելու և դիզայնի բարելավման շրջանաձև առաջարկները բացահայտելու համար:"
      },
    about:
      {
        en: "The Design for X (DfX) scoring matrix builds on hotspot analysis and helps teams evaluate resource-intensive products to identify where design changes could improve circularity.",
        uk: "Матриця оцінки Design for X (DfX) базується на аналізі гарячих точок і допомагає командам оцінювати ресурсомісткі продукти, щоб визначити, де зміни дизайну можуть покращити циркулярність.",
        ro: "Matricea de punctaj Design for X (DfX) se bazează pe analiza hotspot-ului și ajută echipele să evalueze produsele care necesită mult resurse pentru a identifica locurile în care modificările de proiectare ar putea îmbunătăți circularitatea.",
        hy: "Դիզայն X-ի համար (DfX) գնահատման մատրիցը հիմնված է թեժ կետերի վերլուծության վրա և թիմերին օգնում է գնահատել ռեսուրսներով ինտենսիվ արտադրանքները՝ պարզելու, թե դիզայնի փոփոխությունները որտեղ կարող են բարելավել շրջանաձևությունը:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['evaluate:verify-potential']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'United Nations Industrial Development Organization (UNIDO)',
    access: 'Free',
    timeRequired: {
      en: "45-60 minutes",
      uk: "45-60 хвилин",
      ro: "45-60 minute",
      hy: "45-60 րոպե"
    },
    preparationNeeded: {
      en: "Printout of scoring sheet, post-its, pens and product samples or specifications.",
      uk: "Роздруківка аркуша оцінки, листків, ручок і зразків продуктів або специфікацій.",
      ro: "Imprimare a foii de punctaj, post-it-uri, pixuri și mostre de produse sau specificații.",
      hy: "Վարկանիշային թերթիկի, գրիչների, գրիչների և արտադրանքի նմուշների կամ բնութագրերի տպագրություն:"
    },
    output: {
      en: "Circular design improvement suggestions for your products",
      uk: "Пропозиції щодо покращення кругового дизайну для ваших продуктів",
      ro: "Sugestii de îmbunătățire a designului circular pentru produsele dvs",
      hy: "Շրջանաձև դիզայնի բարելավման առաջարկներ ձեր արտադրանքի համար"
    },
    bestFor: {
      en: "All SMEs, particularly manufacturing SMEs or businesses with a physical product",
      uk: "Усі МСП, особливо виробничі МСП або підприємства з фізичним продуктом",
      ro: "Toate IMM-urile, în special IMM-urile producătoare sau întreprinderile cu un produs fizic",
      hy: "Բոլոր ՓՄՁ-ները, մասնավորապես, արտադրական ՓՄՁ-ները կամ ֆիզիկական արտադրանք ունեցող ձեռնարկությունները"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: '/tools/Tool-Product%20Design%20Audit%20Map.pdf'
  },
  {
    id: 'resource-059',
    slug: 'how-might-we',
    title: 'How Might We',
    description:
      {
        en: "Reframe problem insights as open-ended How Might We questions, turning challenges into opportunities and creating a productive launchpad for brainstorming.",
        uk: "Переформулюйте уявлення про проблеми як відкриті питання «Як ми можемо», перетворюючи виклики на можливості та створюючи продуктивну панель для мозкового штурму.",
        ro: "Reîncadrați perspectivele problemei ca întrebări deschise How Might We, transformând provocările în oportunități și creând o platformă de lansare productivă pentru brainstorming.",
        hy: "Խնդիրների պատկերացումները վերակառուցեք որպես բաց հարցադրումներ «Ինչպես կարող ենք մենք»՝ մարտահրավերները վերածելով հնարավորությունների և ստեղծելով արդյունավետ գործարկման հարթակ ուղեղային փոթորկի համար:"
      },
    about:
      {
        en: "The How Might We method from Technical University of Denmark (DTU)'s Design Kit is a simple but powerful reframing technique used in human-centred design. Teams take insight statements gathered from research and rephrase them as How Might We questions, a format that implies a solution is possible without prescribing what it should be. The method is used in the ideation phase to open creative space before brainstorming. A well-crafted question is neither too narrow, which limits ideas, nor too broad, which makes it hard to act on.",
        uk: "Метод «Як ми можемо» від Технічного університету Данії (DTU) Design Kit — це проста, але потужна техніка рефреймінгу, яка використовується в проектуванні, орієнтованому на людину. Команди беруть висновки, зібрані в результаті дослідження, і перефразують їх у запитання «Як ми можемо» — формат, який означає, що рішення можливе, не вказуючи, яким воно має бути. Метод використовується на етапі ідеї, щоб відкрити творчий простір перед мозковим штурмом. Добре сформульоване запитання не є ані надто вузьким, що обмежує ідеї, ані надто широким, що ускладнює його виконання.",
        ro: "Metoda How Might We de la setul de design al Universității Tehnice din Danemarca (DTU) este o tehnică de reîncadrare simplă, dar puternică, utilizată în proiectarea centrată pe om. Echipele preiau declarații de perspectivă adunate din cercetare și le reformulează ca întrebări Cum am putea noi, un format care implică că o soluție este posibilă fără a prescrie ceea ce ar trebui să fie. Metoda este folosită în faza de ideare pentru a deschide spațiul creativ înainte de brainstorming. O întrebare bine pusă la punct nu este nici prea restrânsă, ceea ce limitează ideile, nici prea amplă, ceea ce face greu să acționezi.",
        hy: "How Might We մեթոդը Դանիայի Տեխնիկական համալսարանի (DTU) Design Kit-ից պարզ, բայց հզոր վերակառուցման տեխնիկա է, որն օգտագործվում է մարդակենտրոն դիզայնում: Թիմերը վերցնում են հետազոտության արդյունքում հավաքված խորաթափանց հայտարարությունները և դրանք վերափոխում են որպես «Ինչպես կարող ենք մենք հարցեր», ձևաչափ, որը ենթադրում է, որ լուծումը հնարավոր է առանց նախանշելու, թե ինչ պետք է լինի: Մեթոդն օգտագործվում է մտահղացման փուլում՝ մտագրոհից առաջ ստեղծագործական տարածք բացելու համար: Լավ մշակված հարցը ոչ շատ նեղ է, ինչը սահմանափակում է գաղափարները, և ոչ էլ չափազանց լայն, ինչը դժվարացնում է գործելը:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:identify-options']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'DTU Skylab',
    access: 'Free',
    timeRequired: {
      en: "1 hour",
      uk: "1 година",
      ro: "1 oră",
      hy: "1 ժամ"
    },
    preparationNeeded: {
      en: "Existing insight statements from prior research, plus pens and post-its.",
      uk: "Існуючі висновки з попередніх досліджень, а також ручки та листочки.",
      ro: "Declarații de perspectivă existente din cercetări anterioare, plus pixuri și post-it-uri.",
      hy: "Գոյություն ունեցող պատկերացումներ նախորդ հետազոտություններից, գումարած գրիչներ և գրառումներ:"
    },
    output: {
      en: "A set of How Might We questions to guide ideation",
      uk: "Набір запитань «Як ми можемо» для формування ідей",
      ro: "Un set de întrebări How Might We pentru a ghida ideația",
      hy: "«Ինչպես կարող ենք մենք» հարցերի մի շարք՝ գաղափարները ուղղորդելու համար"
    },
    bestFor: {
      en: "Design teams in the ideation phase that have gathered user insights and want solution-neutral design challenges",
      uk: "Команди дизайнерів на етапі розробки ідей, які зібрали інформацію про користувачів і хочуть, щоб завдання дизайну були нейтральними щодо рішень",
      ro: "Echipe de proiectare în faza de ideare care au adunat informații despre utilizatori și doresc provocări de proiectare neutre pentru soluții",
      hy: "Գաղափարման փուլում գտնվող նախագծային թիմեր, որոնք հավաքել են օգտատերերի պատկերացումները և ցանկանում են լուծել չեզոք դիզայնի մարտահրավերներ"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: 'https://universaldesignguide.com/method/how-might-we/'
  },
  {
    id: 'resource-060',
    slug: 'bundle-ideas',
    title: 'Bundle Ideas',
    description:
      {
        en: "A method for moving from a large volume of individual ideas to a smaller set of robust composite solutions.",
        uk: "Метод переходу від великого обсягу окремих ідей до меншого набору надійних комплексних рішень.",
        ro: "O metodă de trecere de la un volum mare de idei individuale la un set mai mic de soluții compozite robuste.",
        hy: "Անհատական ​​գաղափարների մեծ ծավալից դեպի ամուր կոմպոզիտային լուծումների ավելի փոքր շարք անցնելու մեթոդ:"
      },
    about:
      {
        en: "Bundle Ideas is an IDEO.org method for moving from divergent brainstorming to convergent concept development by clustering, combining and synthesising the strongest elements across concepts.",
        uk: "Bundle Ideas — це метод IDEO.org для переходу від дивергентного мозкового штурму до розробки конвергентної концепції шляхом кластеризації, комбінування та синтезу найсильніших елементів концепцій.",
        ro: "Bundle Ideas este o metodă IDEO.org pentru trecerea de la brainstorming divergent la dezvoltarea conceptului convergent prin gruparea, combinarea și sintetizarea celor mai puternice elemente din concepte.",
        hy: "Bundle Ideas-ը IDEO.org-ի մեթոդ է՝ տարբերվող ուղեղային գրոհից դեպի կոնվերգենտ հայեցակարգի մշակում անցնելու համար՝ խմբավորելով, համադրելով և սինթեզելով ամենաուժեղ տարրերը հասկացությունների միջև:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: {
      en: "1.5 hours",
      uk: "1,5 години",
      ro: "1,5 ore",
      hy: "1,5 ժամ"
    },
    preparationNeeded: {
      en: "A wall or board covered with ideas and drawings from a prior brainstorm session, plus pens and post-its.",
      uk: "Стіна або дошка, покрита ідеями та малюнками з попереднього мозкового штурму, а також ручки та листочки.",
      ro: "Un perete sau o tablă acoperită cu idei și desene dintr-o sesiune anterioară de brainstorming, plus pixuri și post-it-uri.",
      hy: "Պատ կամ տախտակ, որը ծածկված է մտքերով և նկարներով, ինչպես նաև գրիչներ և գրիչներ:"
    },
    output: {
      en: "Coherent idea groupings or early-stage solution concepts ready to be developed and shared",
      uk: "Послідовні групи ідей або концепції рішень на ранній стадії, готові до розробки та спільного використання",
      ro: "Grupări coerente de idei sau concepte de soluții în stadiu incipient, gata pentru a fi dezvoltate și împărtășite",
      hy: "Համատեղ գաղափարների խմբավորումներ կամ լուծման վաղ փուլի հայեցակարգեր, որոնք պատրաստ են մշակման և տարածման"
    },
    bestFor: {
      en: "Design teams that have completed a brainstorm and need to converge their thinking",
      uk: "Команди дизайнерів, які завершили мозковий штурм і мають об’єднати свої думки",
      ro: "Proiectați echipe care au finalizat un brainstorming și trebuie să-și converge gândirea",
      hy: "Նախագծեք թիմեր, որոնք ավարտել են ուղեղի փոթորիկը և պետք է զուգակցեն իրենց մտածողությունը"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: 'https://www.designkit.org/methods/30.html'
  },
  {
    id: 'resource-061',
    slug: 'create-a-concept',
    title: 'Create a Concept',
    description:
      {
        en: "A method for developing bundled ideas into polished, testable concepts that address the original design challenge.",
        uk: "Метод для розробки комплексних ідей у ​​відшліфовані концепції, які можна перевірити, які вирішують завдання оригінального дизайну.",
        ro: "O metodă de dezvoltare a ideilor grupate în concepte șlefuite, testabile, care abordează provocarea originală de proiectare.",
        hy: "Համակցված գաղափարները զարգացնելու մեթոդ՝ հղկված, փորձարկվող գաղափարների մեջ, որոնք լուծում են սկզբնական դիզայնի մարտահրավերը:"
      },
    about:
      {
        en: "Create a Concept is an IDEO.org method that bridges ideation and prototyping. Teams turn their strongest idea clusters into coherent concepts that are more complete than raw ideas but not yet final solutions.",
        uk: "Create a Concept — це метод IDEO.org, який поєднує ідеї та прототипи. Команди перетворюють свої найсильніші кластери ідей на послідовні концепції, які є більш повними, ніж необроблені ідеї, але ще не є остаточними рішеннями.",
        ro: "Create a Concept este o metodă IDEO.org care face legătura între idee și prototipare. Echipele își transformă cele mai puternice grupuri de idei în concepte coerente, care sunt mai complete decât ideile brute, dar nu sunt încă soluții finale.",
        hy: "Ստեղծել հայեցակարգը IDEO.org մեթոդ է, որը կամրջում է մտահղացումն ու նախատիպավորումը: Թիմերն իրենց ամենաուժեղ գաղափարների կլաստերները վերածում են համահունչ հասկացությունների, որոնք ավելի ամբողջական են, քան հում գաղափարները, բայց դեռևս վերջնական լուծումներ չեն:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'IDEO.org (Design Kit)',
    access: 'Free',
    timeRequired: {
      en: "1.5 hours",
      uk: "1,5 години",
      ro: "1,5 ore",
      hy: "1,5 ժամ"
    },
    preparationNeeded: {
      en: "Bundled idea clusters from a prior session, plus pens, post-its and paper.",
      uk: "Збірні групи ідей із попереднього заняття, а також ручки, листки та папір.",
      ro: "Pachete de idei dintr-o sesiune anterioară, plus pixuri, post-it-uri și hârtie.",
      hy: "Նախորդ նիստից ստացված գաղափարների կլաստերներ, գումարած գրիչներ, գրառումներ և թուղթ:"
    },
    output: {
      en: "One or more robust concept drafts ready to be tested with end users",
      uk: "Один або кілька надійних чернеток концепції, готових до тестування з кінцевими користувачами",
      ro: "Una sau mai multe schițe de concept robuste gata pentru a fi testate cu utilizatorii finali",
      hy: "Մեկ կամ մի քանի ամուր կոնցեպտի նախագծեր, որոնք պատրաստ են փորձարկման վերջնական օգտագործողների հետ"
    },
    bestFor: {
      en: "Design teams ready to commit to a direction before prototyping",
      uk: "Команди дизайнерів готові взяти на себе певний напрямок до створення прототипу",
      ro: "Echipe de proiectare gata să se angajeze într-o direcție înainte de prototipare",
      hy: "Դիզայներական թիմերը պատրաստ են նախատիպավորումից առաջ որոշակի ուղղություն ստանձնել"
    },
    format: {
      en: "Print out",
      uk: "Роздрукувати",
      ro: "Imprima",
      hy: "Տպել"
    },
    toolLink: 'https://www.designkit.org/methods/create-a-concept.html'
  },
  {
    id: 'resource-062',
    slug: 'safe-and-circular-product-redesign',
    title: 'Safe and Circular Product Redesign',
    description:
      {
        en: "A workshop that challenges participants to redesign a commercial carpet tile to be safe and circular.",
        uk: "Семінар, на якому учасникам пропонується змінити дизайн комерційної килимової плитки, щоб вона була безпечною та круглою.",
        ro: "Un atelier care provoacă participanții să reproiecteze o placă de covor comercială pentru a fi sigură și circulară.",
        hy: "Սեմինար, որը մարտահրավեր է նետում մասնակիցներին վերանախագծել առևտրային գորգի սալիկը՝ անվտանգ և շրջանաձև լինելու համար:"
      },
    about:
      {
        en: "This Ellen MacArthur Foundation workshop helps users understand the implications of choosing materials for circular products, including the need to design out chemicals of concern and enable material recovery.",
        uk: "Цей семінар Фонду Еллен Макартур допомагає користувачам зрозуміти наслідки вибору матеріалів для круглих виробів, зокрема необхідність розробки хімічних речовин, що викликають занепокоєння, і відновлення матеріалів.",
        ro: "Acest atelier al Fundației Ellen MacArthur îi ajută pe utilizatori să înțeleagă implicațiile alegerii materialelor pentru produse circulare, inclusiv necesitatea de a proiecta substanțele chimice care prezintă motive de îngrijorare și de a permite recuperarea materialelor.",
        hy: "Ellen MacArthur Foundation-ի այս սեմինարն օգնում է օգտատերերին հասկանալ շրջանաձև արտադրանքի համար նյութեր ընտրելու հետևանքները, ներառյալ մտահոգիչ քիմիական նյութերը մշակելու և նյութի վերականգնումը հնարավոր դարձնելու անհրաժեշտությունը:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Ellen MacArthur Foundation',
    access: 'Free',
    timeRequired: {
      en: "1.5 hours",
      uk: "1,5 години",
      ro: "1,5 ore",
      hy: "1,5 ժամ"
    },
    preparationNeeded: {
      en: "Works best with a diverse team from different backgrounds.",
      uk: "Найкраще працює з різноманітною командою з різним професійним становищем.",
      ro: "Funcționează cel mai bine cu o echipă diversă din medii diferite.",
      hy: "Լավագույնս աշխատում է տարբեր ծագում ունեցող տարբեր թիմի հետ:"
    },
    output: {
      en: "Three redesign concepts documented with a memorable name",
      uk: "Три концепції редизайну, задокументовані під назвою, що запам’ятовується",
      ro: "Trei concepte de reproiectare documentate cu un nume memorabil",
      hy: "Երեք վերանախագծման գաղափարներ, որոնք վավերագրված են հիշարժան անունով"
    },
    bestFor: {
      en: "All SMEs that can benefit from a redesign workshop",
      uk: "Усі МСП, які можуть отримати вигоду від семінару з редизайну",
      ro: "Toate IMM-urile care pot beneficia de un atelier de reproiectare",
      hy: "Բոլոր ՓՄՁ-ները, որոնք կարող են օգտվել վերանախագծման սեմինարից"
    },
    format: {
      en: "Printeable workshop template",
      uk: "Шаблон семінару для друку",
      ro: "Șablon de atelier imprimabil",
      hy: "Արտադրական սեմինարի ձևանմուշ"
    },
    toolLink: 'https://www.ellenmacarthurfoundation.org/product-redesign-workshop'
  },
  {
    id: 'resource-063',
    slug: 'circular-design-toolbox',
    title: 'Circular Design Toolbox',
    description:
      {
        en: "A collection of canvas-based tools for assessing, ideating, developing and communicating circular economy strategies.",
        uk: "Колекція інструментів на основі канви для оцінювання, розробки ідей, розробки та передачі стратегій циклічної економіки.",
        ro: "O colecție de instrumente bazate pe pânză pentru evaluarea, ideea, dezvoltarea și comunicarea strategiilor de economie circulară.",
        hy: "Շրջանաձև տնտեսության ռազմավարությունների գնահատման, պատկերացումների, մշակման և հաղորդակցման համար կտավների վրա հիմնված գործիքների հավաքածու:"
      },
    about:
      {
        en: "The Ecodesign Toolkit by EcoDesign Circle is an open-access collection of downloadable PDFs and interactive Mural boards for circular and ecodesign work across products, services, systems and business models.",
        uk: "Набір інструментів екодизайну від EcoDesign Circle — це колекція PDF-файлів, які можна завантажити, та інтерактивних настінних дошок із відкритим доступом для циклічної роботи та роботи з екодизайну в продуктах, послугах, системах і бізнес-моделях.",
        ro: "Setul de instrumente pentru ecodesign de la EcoDesign Circle este o colecție cu acces deschis de PDF-uri descărcabile și panouri murale interactive pentru lucrări circulare și de proiectare ecologică pentru produse, servicii, sisteme și modele de afaceri.",
        hy: "EcoDesign Circle-ի կողմից Ecodesign Toolkit-ը ներբեռնվող PDF ֆայլերի և ինտերակտիվ որմնանկարների սալիկների բաց հասանելի հավաքածու է՝ արտադրանքների, ծառայությունների, համակարգերի և բիզնես մոդելների վրա շրջանաձև և էկոնախագծման աշխատանքների համար:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EcoDesign Circle / Fraunhofer IZM',
    access: 'Free',
    timeRequired: {
      en: "Varies by tool; individual canvases can be used in 1-3 hour workshops",
      uk: "Залежить від інструменту; окремі полотна можна використовувати на 1-3 годинних майстер-класах",
      ro: "Variază în funcție de instrument; pânzele individuale pot fi folosite în ateliere de 1-3 ore",
      hy: "Տատանվում է ըստ գործիքի; անհատական ​​կտավները կարող են օգտագործվել 1-3 ժամանոց սեմինարներում"
    },
    preparationNeeded: {
      en: "Low; most tools are available as free PDF downloads and/or Mural online boards.",
      uk: "Низький; більшість інструментів доступні як безкоштовні файли для завантаження у форматі PDF та/або онлайн-дошки з фресками.",
      ro: "Scăzut; majoritatea instrumentelor sunt disponibile ca descărcări gratuite PDF și/sau panouri murale online.",
      hy: "Ցածր; գործիքների մեծ մասը հասանելի են որպես PDF անվճար ներբեռնումներ և/կամ Mural առցանց տախտակներ:"
    },
    output: {
      en: "Completed canvases, design briefs, business model concepts, ecodesign assessments or pitch materials",
      uk: "Завершені полотна, дизайн-записи, концепції бізнес-моделей, оцінки екодизайну або презентаційні матеріали",
      ro: "Pânze finalizate, briefs de design, concepte de model de afaceri, evaluări de proiectare ecologică sau materiale de prezentare",
      hy: "Ավարտված կտավներ, դիզայնի համառոտ նկարներ, բիզնես մոդելի հայեցակարգեր, էկոդիզայնի գնահատումներ կամ սկիպիդար նյութեր"
    },
    bestFor: {
      en: "SMEs, designers and sustainability professionals integrating circular thinking into product, service and business strategy",
      uk: "МСП, дизайнери та професіонали в галузі сталого розвитку, які інтегрують циклічне мислення в продукти, послуги та бізнес-стратегії",
      ro: "IMM-uri, designeri și profesioniști în sustenabilitate care integrează gândirea circulară în strategia de produs, servicii și afaceri",
      hy: "ՓՄՁ-ները, դիզայներները և կայունության ոլորտի մասնագետները, որոնք ինտեգրում են շրջանաձև մտածողությունը արտադրանքի, ծառայության և բիզնես ռազմավարության մեջ"
    },
    format: {
      en: "Toolbox",
      uk: "Ящик інструментів",
      ro: "Cutie de instrumente",
      hy: "Գործիքների տուփ"
    },
    toolLink: 'https://circulardesign.tools/'
  },
  {
    id: 'resource-065',
    slug: 'wrap-textiles-sorting-and-recycling-database',
    title: 'WRAP Textiles Sorting and Recycling Database',
    description:
      {
        en: "A database mapping textile sorting and recycling capacity.",
        uk: "База даних, що відображає потужності сортування та переробки текстилю.",
        ro: "O bază de date care prezintă capacitatea de sortare și reciclare a textilelor.",
        hy: "Տեքստիլի տեսակավորման և վերամշակման կարողությունների քարտեզագրման տվյալների բազա:"
      },
    about:
      {
        en: "This Waste and Resources Action Programme (WRAP) database maps textile sorting and recycling infrastructure, helping brands, waste managers and local authorities match textile waste streams with suitable sorting and recycling partners. It supports the development of end-of-life routes for used and unwanted textiles.",
        uk: "Ця база даних Програми дій щодо відходів і ресурсів (WRAP) відображає інфраструктуру сортування та переробки текстилю, допомагаючи брендам, менеджерам з утилізації відходів і місцевій владі зіставляти потоки текстильних відходів із відповідними партнерами з сортування та переробки. Він підтримує розробку шляхів виходу з ладу використаного та непотрібного текстилю.",
        ro: "Această bază de date a Programului de acțiune privind deșeurile și resursele (WRAP) hărtește infrastructura de sortare și reciclare a textilelor, ajutând mărcile, administratorii de deșeuri și autoritățile locale să potrivească fluxurile de deșeuri textile cu parteneri adecvați de sortare și reciclare. Sprijină dezvoltarea rutelor de sfârșit de viață pentru textile uzate și nedorite.",
        hy: "Թափոնների և ռեսուրսների գործողությունների ծրագրի (WRAP) տվյալների բազան քարտեզագրում է տեքստիլի տեսակավորման և վերամշակման ենթակառուցվածքը՝ օգնելով ապրանքանիշերին, թափոնների կառավարիչներին և տեղական իշխանություններին համապատասխանեցնել տեքստիլ թափոնների հոսքերը համապատասխան տեսակավորման և վերամշակման գործընկերների հետ: Այն աջակցում է օգտագործված և անցանկալի տեքստիլի համար ժամկետանց երթուղիների մշակմանը:"
      },
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Low',
    language: 'English',
    provider: 'Waste and Resources Action Programme (WRAP)',
    access: 'Free',
    timeRequired: {
      en: "N/A",
      uk: "N/A",
      ro: "N / A",
      hy: "N/A"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Directory of sorting and recycling providers and capabilities",
      uk: "Каталог постачальників і можливостей сортування та переробки",
      ro: "Director cu furnizori și capabilități de sortare și reciclare",
      hy: "Տեսակավորման և վերամշակման մատակարարների և հնարավորությունների տեղեկատու"
    },
    bestFor: {
      en: "Textile brands and waste managers seeking end-of-life partners",
      uk: "Текстильні бренди та менеджери з утилізації відходів шукають партнерів наприкінці терміну служби",
      ro: "Mărci de textile și manageri de deșeuri care caută parteneri la sfârșitul vieții",
      hy: "Տեքստիլ ապրանքանիշեր և թափոնների մենեջերներ, ովքեր փնտրում են կյանքի վերջում գործընկերներ"
    },
    format: {
      en: "Online database",
      uk: "Онлайн база даних",
      ro: "Baza de date online",
      hy: "Առցանց տվյալների բազա"
    },
    toolLink: 'https://airtable.com/appHr39OzGJywew0j/shr8Ngc3JEAGtGSDy/tbl7pBGFWDXP01FmS/viw5GB3B8Q1fqkDZQ'
  },
  {
    id: 'resource-066',
    slug: 'carbonfact-digital-product-passport-software',
    title: 'Carbonfact - Digital Product Passport (DPP) Software',
    description:
      {
        en: "Software for building Life Cycle Assessment (LCA)-based Digital Product Passports for fashion and apparel products.",
        uk: "Програмне забезпечення для створення цифрових паспортів продуктів на основі оцінки життєвого циклу (LCA) для товарів моди та одягу.",
        ro: "Software pentru construirea de pașapoarte pentru produse digitale bazate pe evaluarea ciclului de viață (LCA) pentru produse de modă și îmbrăcăminte.",
        hy: "Նորաձևության և հագուստի ապրանքների համար կյանքի ցիկլի գնահատման (LCA) վրա հիմնված թվային արտադրանքի անձնագրեր ստեղծելու ծրագրակազմ:"
      },
    about:
      {
        en: "Carbonfact runs product-level life cycle assessments across a brand catalogue and publishes the results as consumer-facing Digital Product Passports with Quick Response (QR) codes. It covers 16 Product Environmental Footprint (PEF) environmental indicators and the French Eco-Score, helping brands and suppliers prepare for upcoming EU textile Digital Product Passport (DPP) requirements.",
        uk: "Carbonfact проводить оцінку життєвого циклу на рівні продукту в каталозі бренду та публікує результати у вигляді цифрових паспортів продуктів із кодами швидкого реагування (QR). Він охоплює 16 екологічних індикаторів впливу продукту на навколишнє середовище (PEF) і французький Eco-Score, допомагаючи брендам і постачальникам підготуватися до майбутніх вимог ЄС щодо цифрового паспорта текстильного продукту (DPP).",
        ro: "Carbonfact efectuează evaluări ale ciclului de viață la nivel de produs într-un catalog de marcă și publică rezultatele ca pașapoarte digitale pentru produse cu coduri QR (Quick Response) destinate consumatorilor. Acesta acoperă 16 indicatori de mediu privind amprenta ecologică a produsului (PEF) și Scorul Ecologic al francez, ajutând mărcile și furnizorii să se pregătească pentru viitoarele cerințe ale UE pentru produse textile digitale (DPP).",
        hy: "Carbonfact-ն իրականացնում է արտադրանքի մակարդակի կյանքի ցիկլի գնահատումներ ապրանքանիշի կատալոգում և արդյունքները հրապարակում է որպես սպառողների համար նախատեսված թվային արտադրանքի անձնագրեր՝ արագ արձագանքման (QR) կոդերով: Այն ընդգրկում է 16 Ապրանքի շրջակա միջավայրի հետքի (PEF) բնապահպանական ցուցիչները և ֆրանսիական էկո գնահատականը՝ օգնելով ապրանքանիշերին և մատակարարներին նախապատրաստվել ԵՄ տեքստիլ արտադրանքի թվային անձնագրի (DPP) առաջիկա պահանջներին:"
      },
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'High',
    language: 'English',
    provider: 'Carbonfact',
    access: 'Paid',
    timeRequired: {
      en: "N/A",
      uk: "N/A",
      ro: "N / A",
      hy: "N/A"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Digital Product Passport (DPP) pages with Quick Response (QR) codes and 16 Product Environmental Footprint (PEF) indicators",
      uk: "Сторінки цифрового паспорта продукту (DPP) із кодами швидкого реагування (QR) і 16 індикаторами впливу продукту на навколишнє середовище (PEF)",
      ro: "Pagini Digital Product Passport (DPP) cu coduri Quick Response (QR) și 16 indicatori Product Environmental Footprint (PEF)",
      hy: "Թվային արտադրանքի անձնագրի (DPP) էջեր՝ արագ արձագանքման (QR) կոդերով և 16 արտադրանքի շրջակա միջավայրի հետքի (PEF) ցուցիչներով"
    },
    bestFor: {
      en: "Fashion, footwear and apparel brands preparing for EU Digital Product Passport (DPP)",
      uk: "Модні бренди, бренди взуття та одягу готуються до Паспорту цифрових продуктів ЄС (DPP)",
      ro: "Mărci de modă, încălțăminte și îmbrăcăminte care se pregătesc pentru Pașaportul pentru produse digitale (DPP) al UE",
      hy: "Նորաձևության, կոշիկի և հագուստի ապրանքանիշերը պատրաստվում են ԵՄ թվային արտադրանքի անձնագրին (DPP)"
    },
    format: {
      en: "Software as a Service (SaaS) platform",
      uk: "Платформа програмного забезпечення як послуги (SaaS).",
      ro: "Platformă software ca serviciu (SaaS).",
      hy: "Ծրագրային ապահովումը որպես ծառայություն (SaaS) հարթակ"
    },
    toolLink: 'https://www.carbonfact.com/digital-product-passport-software'
  },
  {
    id: 'resource-067',
    slug: 'youcontrol-esg-profile-for-business',
    title: 'YouControl - ESG profile for Business',
    description:
      {
        en: "Automates the assessment of environmental, social and governance (ESG) factors of Ukrainian companies.",
        uk: "Автоматизує оцінку екологічних, соціальних та управлінських факторів (ESG) українських компаній.",
        ro: "Automatizează evaluarea factorilor de mediu, sociali și de guvernanță (ESG) ai companiilor ucrainene.",
        hy: "Ավտոմատացնում է ուկրաինական ընկերությունների բնապահպանական, սոցիալական և կառավարման (ESG) գործոնների գնահատումը:"
      },
    about:
      {
        en: "YouControl Environmental, social and governance (ESG) Profile helps users check Ukrainian companies by name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code, review an environmental, social and governance (ESG) profile, and use automated sustainability assessment as a pre-screen before deeper due diligence.",
        uk: "YouControl Environmental, Social and Governance (ESG) Profile допомагає користувачам перевіряти українські компанії за назвою або кодом ЄДРПОУ, переглядати екологічний, соціальний та управлінський профіль (ESG) і використовувати автоматизовану оцінку сталого розвитку як попередню перевірку перед поглибленою перевіркою.",
        ro: "Profilul YouControl Environmental, Social and Governance (ESG) îi ajută pe utilizatori să verifice companiile ucrainene după nume sau după codul Registrului de stat unificat al întreprinderilor și organizațiilor din Ucraina (EDRPOU), să revizuiască un profil de mediu, social și de guvernanță (ESG) și să utilizeze evaluarea automată a sustenabilității ca pre-evaluare înainte de o diligență mai profundă.",
        hy: "YouControl Environmental, Social and Management (ESG) պրոֆիլն օգնում է օգտատերերին ստուգել ուկրաինական ընկերություններին անունով կամ Ուկրաինայի ձեռնարկությունների և կազմակերպությունների միասնական պետական ​​ռեգիստրի ծածկագրով (EDRPOU), վերանայել բնապահպանական, սոցիալական և կառավարման (ESG) պրոֆիլը և օգտագործել կայունության ավտոմատացված գնահատումը որպես նախնական էկրան՝ ավելի խորը ուսումնասիրությունից առաջ:"
      },
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'YouControl (Ukraine)',
    access: 'Paid',
    timeRequired: {
      en: "30-60 minutes for the interface; 2-3 hours to understand the categories",
      uk: "30-60 хвилин на інтерфейс; 2-3 години для розуміння категорій",
      ro: "30-60 de minute pentru interfață; 2-3 ore pentru a înțelege categoriile",
      hy: "30-60 րոպե ինտերֆեյսի համար; 2-3 ժամ կատեգորիաները հասկանալու համար"
    },
    preparationNeeded: {
      en: "Company name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code of the entity to be checked",
      uk: "Найменування або код ЄДРПОУ особи, що перевіряється",
      ro: "Numele companiei sau codul Registrului de stat unificat al întreprinderilor și organizațiilor din Ucraina (EDRPOU) al entității care urmează să fie verificată",
      hy: "Ընկերության անվանումը կամ Ուկրաինայի ձեռնարկությունների և կազմակերպությունների միասնական պետական ​​ռեգիստրը (EDRPOU) ստուգվող կազմակերպության կոդը"
    },
    output: {
      en: "Environmental, social and governance (ESG) profile with environmental and social (E&S) impact category and sustainability signals",
      uk: "Екологічний, соціальний та управлінський профіль (ESG) з категорією екологічного та соціального (E&S) впливу та сигналами стійкості",
      ro: "Profil de mediu, social și guvernanță (ESG) cu categoria de impact asupra mediului și social (E&S) și semnale de sustenabilitate",
      hy: "Բնապահպանական, սոցիալական և կառավարման (ESG) բնութագիր՝ բնապահպանական և սոցիալական (E&S) ազդեցության կատեգորիաներով և կայունության ազդանշաններով"
    },
    bestFor: {
      en: "SMEs applying for bank finance, exporters and procurement teams",
      uk: "МСП, які подають заявки на банківське фінансування, експортери та відділи закупівель",
      ro: "IMM-uri care solicită finanțare bancară, exportatori și echipe de achiziții",
      hy: "Բանկային ֆինանսավորման համար դիմող ՓՄՁ-ներ, արտահանողներ և գնումների թիմեր"
    },
    format: {
      en: "Online module",
      uk: "Онлайн модуль",
      ro: "Modul online",
      hy: "Առցանց մոդուլ"
    },
    toolLink: 'https://youcontrol.com.ua/esg-for-business/'
  },
  {
    id: 'resource-068',
    slug: 'saveecobot-esg-profile-of-an-enterprise',
    title: 'SaveEcoBot - Environmental, social and governance (ESG) Profile of an Enterprise',
    description:
      {
        en: "Collects and systematises environmental, social and governance data for enterprises.",
        uk: "Збирає та систематизує екологічні, соціальні та управлінські дані для підприємств.",
        ro: "Colectează și sistematizează date de mediu, sociale și de guvernanță pentru întreprinderi.",
        hy: "Հավաքում և համակարգում է ձեռնարկությունների բնապահպանական, սոցիալական և կառավարման տվյալները:"
      },
    about:
      {
        en: "SaveEcoBot Environmental, social and governance (ESG) gives users access to a catalogue of company documents, permits, licences, reports, declarations, inspections and environmental records. It supports a standardised environmental, social and governance (ESG) compliance check and downloadable PDF extracts for due diligence.",
        uk: "SaveEcoBot Environmental, Social and Management (ESG) надає користувачам доступ до каталогу документів компанії, дозволів, ліцензій, звітів, декларацій, інспекцій та екологічних записів. Він підтримує стандартизовану перевірку на відповідність вимогам екологічного, соціального та державного управління (ESG) і завантажувані PDF-витяги для належної перевірки.",
        ro: "SaveEcoBot Environmental, social and governance (ESG) oferă utilizatorilor acces la un catalog de documente ale companiei, permise, licențe, rapoarte, declarații, inspecții și înregistrări de mediu. Acesta acceptă o verificare standardizată a conformității de mediu, social și guvernanță (ESG) și extrase PDF descărcabile pentru diligență.",
        hy: "SaveEcoBot Environmental, Social and Management (ESG) օգտվողներին հնարավորություն է տալիս օգտվել ընկերության փաստաթղթերի, թույլտվությունների, լիցենզիաների, հաշվետվությունների, հայտարարագրերի, ստուգումների և բնապահպանական գրառումների կատալոգից: Այն աջակցում է ստանդարտացված բնապահպանական, սոցիալական և կառավարման (ESG) համապատասխանության ստուգում և ներբեռնվող PDF քաղվածքներ պատշաճ ուսումնասիրության համար:"
      },
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'SaveEcoBot (Environmental, social and governance (ESG) SaveEcoBot)',
    access: 'Paid',
    timeRequired: {
      en: "1-2 hours to read the document catalogue",
      uk: "1-2 години на ознайомлення з каталогом документів",
      ro: "1-2 ore pentru a citi catalogul documentelor",
      hy: "Փաստաթղթերի կատալոգը կարդալու համար 1-2 ժամ"
    },
    preparationNeeded: {
      en: "Name or Unified State Register of Enterprises and Organizations of Ukraine (EDRPOU) code of the enterprise or sole trader",
      uk: "Найменування або код ЄДРПОУ підприємства або ФОП",
      ro: "Numele sau codul Registrului de stat unificat al întreprinderilor și organizațiilor din Ucraina (EDRPOU) al întreprinderii sau al comerciantului unic",
      hy: "ձեռնարկության կամ անհատ վաճառողի անվանումը կամ Ուկրաինայի ձեռնարկությունների և կազմակերպությունների միասնական պետական ​​ռեգիստրը (EDRPOU) ծածկագիրը."
    },
    output: {
      en: "Environmental, social and governance (ESG) profile, automated risk assessment and a PDF extract",
      uk: "Екологічний, соціальний та управлінський профіль (ESG), автоматизована оцінка ризиків і витяг у форматі PDF",
      ro: "Profil de mediu, social și guvernanță (ESG), evaluare automată a riscurilor și un extras PDF",
      hy: "Բնապահպանական, սոցիալական և կառավարման (ESG) պրոֆիլ, ռիսկերի ավտոմատ գնահատում և PDF քաղվածք"
    },
    bestFor: {
      en: "SMEs preparing for bank, investor or buyer environmental and social (E&S) due diligence",
      uk: "МСП готуються до екологічної та соціальної перевірки банку, інвестора чи покупця",
      ro: "IMM-urile care se pregătesc pentru due diligence de mediu și social (E&S) ale băncii, investitorilor sau cumpărătorilor",
      hy: "ՓՄՁ-ներ, որոնք պատրաստվում են բանկի, ներդրողի կամ գնորդի բնապահպանական և սոցիալական (E&S) պատշաճ ուսումնասիրությանը"
    },
    format: {
      en: "Online platform and Application Programming Interface (API) access",
      uk: "Онлайн-платформа та доступ до інтерфейсу прикладного програмування (API).",
      ro: "Acces la platformă online și la Interfața de programare a aplicațiilor (API).",
      hy: "Առցանց հարթակ և հավելվածների ծրագրավորման ինտերֆեյսի (API) հասանելիություն"
    },
    toolLink: 'https://esg.saveecobot.com/'
  },
  {
    id: 'resource-069',
    slug: 'recycle-marketplace-for-recyclables',
    title: 'Recycle - Marketplace for Recyclables',
    description:
      {
        en: "A marketplace for selling sorted recyclables to certified buyers and reducing waste costs.",
        uk: "Ринок для продажу відсортованої вторинної сировини сертифікованим покупцям і зниження витрат на відходи.",
        ro: "O piață pentru vânzarea materialelor reciclabile sortate cumpărătorilor certificați și pentru reducerea costurilor deșeurilor.",
        hy: "Վկայագրված գնորդներին տեսակավորված վերամշակվող նյութեր վաճառելու և թափոնների ծախսերը նվազեցնելու շուկա:"
      },
    about:
      {
        en: "Recycle allows businesses to register, sort and accumulate recyclable materials, request pickup, and receive payment after carrier weighing. It supports documentation and waste reporting for participating organisations.",
        uk: "Recycle дозволяє підприємствам реєструвати, сортувати та накопичувати вторинну сировину, вимагати самовивозу та отримувати оплату після зважування. Він підтримує документацію та звітність про відходи для організацій-учасниць.",
        ro: "Reciclarea permite companiilor să înregistreze, să sorteze și să acumuleze materiale reciclabile, să solicite ridicarea și să primească plata după cântărirea transportatorului. Acesta sprijină documentarea și raportarea deșeurilor pentru organizațiile participante.",
        hy: "Վերամշակումը թույլ է տալիս ձեռնարկություններին գրանցել, տեսակավորել և կուտակել վերամշակվող նյութերը, պահանջել վերցնել և ստանալ վճարում կրիչի կշռումից հետո: Այն աջակցում է մասնակից կազմակերպությունների փաստաթղթերի և թափոնների մասին հաշվետվությունների ներկայացմանը:"
      },
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'Recycle (LLC Recycle UA), Ukraine',
    access: 'Sign up',
    timeRequired: {
      en: "10-15 minutes to register, plus time for account confirmation",
      uk: "10-15 хвилин на реєстрацію плюс час на підтвердження облікового запису",
      ro: "10-15 minute pentru înregistrare, plus timp pentru confirmarea contului",
      hy: "10-15 րոպե գրանցվելու համար, գումարած ժամանակ՝ հաշվի հաստատման համար"
    },
    preparationNeeded: {
      en: "Sorted recyclables and a bank account of a company or sole trader",
      uk: "Відсортована вторсировина та банківський рахунок фірми чи ФОП",
      ro: "Materiale reciclabile sortate și un cont bancar al unei companii sau al unui comerciant individual",
      hy: "Տեսակավորված վերամշակվող նյութեր և ընկերության կամ անհատ վաճառողի բանկային հաշիվ"
    },
    output: {
      en: "Income from recyclables, primary documents and waste reports",
      uk: "Доходи від вторсировини, первинні документи та звіти про відходи",
      ro: "Venituri din materiale reciclabile, documente primare și rapoarte de deșeuri",
      hy: "Եկամուտ վերամշակվող նյութերից, առաջնային փաստաթղթերից և թափոնների հաշվետվություններից"
    },
    bestFor: {
      en: "SMEs, offices, food service, producers and condominiums",
      uk: "МСП, офіси, громадське харчування, виробники та кондомініуми",
      ro: "IMM-uri, birouri, servicii alimentare, producători și condominii",
      hy: "ՓՄՁ-ներ, գրասենյակներ, սննդի սպասարկում, արտադրողներ և համատիրություններ"
    },
    format: {
      en: "Mobile app and web account",
      uk: "Мобільний додаток і веб-акаунт",
      ro: "Aplicație mobilă și cont web",
      hy: "Բջջային հավելված և վեբ հաշիվ"
    },
    toolLink: 'https://recycle-app.com/'
  },
  {
    id: 'resource-070',
    slug: 'ecohub-zero-waste-kharkiv',
    title: 'EcoHub - Zero Waste Kharkiv',
    description:
      {
        en: "A public space for putting zero waste principles into practice through sorting, reuse and repair.",
        uk: "Громадський простір для практичного впровадження принципів нульових відходів шляхом сортування, повторного використання та ремонту.",
        ro: "Un spațiu public pentru punerea în practică a principiilor zero deșeuri prin sortare, reutilizare și reparare.",
        hy: "Հանրային տարածք՝ զրոյական թափոնների սկզբունքները գործնականում կիրառելու համար՝ տեսակավորման, վերաօգտագործման և վերանորոգման միջոցով:"
      },
    about:
      {
        en: "EcoHub Zero Waste Kharkiv provides sorting rules, a self-service deep sorting station, a Reuse Lab, and paid support services such as re-sorting, consultation and delivery.",
        uk: "EcoHub Zero Waste Kharkiv надає правила сортування, станцію глибокого сортування самообслуговування, Reuse Lab та платні послуги підтримки, такі як пересортування, консультації та доставка.",
        ro: "EcoHub Zero Waste Kharkiv oferă reguli de sortare, o stație de sortare profundă cu autoservire, un laborator de reutilizare și servicii de asistență plătite, cum ar fi resortarea, consultarea și livrarea.",
        hy: "EcoHub Zero Waste Kharkiv-ը տրամադրում է տեսակավորման կանոններ, ինքնասպասարկման խորը տեսակավորման կայան, Վերօգտագործման լաբորատորիա և վճարովի օժանդակ ծառայություններ, ինչպիսիք են վերատեսակավորումը, խորհրդատվությունը և առաքումը:"
      },
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Ukrainian',
    provider: 'NGO Zero Waste Kharkiv',
    access: 'Free',
    timeRequired: {
      en: "20-30 minutes to read sorting rules; 1-2 hours for a first visit",
      uk: "20-30 хвилин на читання правил сортування; 1-2 години на перший візит",
      ro: "20-30 de minute pentru a citi regulile de sortare; 1-2 ore pentru prima vizita",
      hy: "20-30 րոպե տեսակավորման կանոնները կարդալու համար; 1-2 ժամ առաջին այցելության համար"
    },
    preparationNeeded: {
      en: "Clean, dry and pre-sorted waste; reusable items where relevant",
      uk: "Чисті, сухі та попередньо відсортовані відходи; предмети багаторазового використання, де це необхідно",
      ro: "Deșeuri curate, uscate și presortate; articole reutilizabile, acolo unde este cazul",
      hy: "Մաքուր, չոր և նախապես տեսակավորված թափոններ; անհրաժեշտության դեպքում բազմակի օգտագործման առարկաներ"
    },
    output: {
      en: "Waste sent to recycling and items reused, repaired or resold",
      uk: "Відходи, що відправляються на переробку, і предмети, які повторно використовуються, ремонтуються чи перепродаються",
      ro: "Deșeurile trimise la reciclare și articolele refolosite, reparate sau revândute",
      hy: "Թափոններ, որոնք ուղարկվում են վերամշակման և վերաօգտագործված, վերանորոգված կամ վերավաճառված իրեր"
    },
    bestFor: {
      en: "Micro and small businesses in Kharkiv region, including retail and food service",
      uk: "Мікро та малий бізнес Харківської області, включаючи роздрібну торгівлю та громадське харчування",
      ro: "Microîntreprinderi și întreprinderi mici din regiunea Harkov, inclusiv comerț cu amănuntul și servicii alimentare",
      hy: "Միկրո և փոքր բիզնեսներ Խարկովի մարզում, ներառյալ մանրածախ և սննդի սպասարկումը"
    },
    format: {
      en: "Physical hub plus website with sorting rules and guides",
      uk: "Фізичний центр плюс веб-сайт із правилами сортування та посібниками",
      ro: "Centru fizic plus site web cu reguli și ghiduri de sortare",
      hy: "Ֆիզիկական հանգույց գումարած կայք՝ տեսակավորման կանոններով և ուղեցույցներով"
    },
    toolLink: 'https://zerowastekharkiv.org.ua/ecohub'
  },
  {
    id: 'resource-071',
    slug: 'cc-yard-circular-construction-yard',
    title: 'CC Yard - Circular Construction Yard',
    description:
      {
        en: "Supports reuse of building materials salvaged from damaged buildings.",
        uk: "Підтримує повторне використання будівельних матеріалів, врятованих із пошкоджених будівель.",
        ro: "Sprijină reutilizarea materialelor de construcție recuperate din clădirile deteriorate.",
        hy: "Աջակցում է վնասված շենքերից փրկված շինանյութերի վերաօգտագործմանը:"
      },
    about:
      {
        en: "CC Yard and Zero Waste Yard in Kharkiv collect, sort, record and store reusable building materials such as bricks, timber, windows, doors, roofing and sanitary ware so they can return to use in repair and reconstruction.",
        uk: "CC Yard та Zero Waste Yard у Харкові займаються збором, сортуванням, обліком та зберіганням будівельних матеріалів багаторазового використання, таких як цегла, деревина, вікна, двері, покрівля та сантехніка, щоб їх можна було використовувати при ремонті та реконструкції.",
        ro: "CC Yard și Zero Waste Yard din Harkiv colectează, sortează, înregistrează și stochează materiale de construcție reutilizabile, cum ar fi cărămizi, cherestea, ferestre, uși, acoperișuri și obiecte sanitare, astfel încât să poată reveni pentru a fi utilizate în reparații și reconstrucție.",
        hy: "CC Yard-ը և Zero Waste Yard-ը Խարկովում հավաքում, տեսակավորում, գրանցում և պահում են բազմակի օգտագործման շինանյութեր, ինչպիսիք են աղյուսները, փայտանյութը, պատուհանները, դռները, տանիքները և սանտեխնիկան, որպեսզի դրանք կարողանան օգտագործել վերանորոգման և վերակառուցման մեջ:"
      },
    journeyPhases: ['Implement'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'Ukrainian',
    provider: 'NGO Zero Waste Kharkiv with Derhachi city council',
    access: 'Free',
    timeRequired: {
      en: "15 minutes to get oriented",
      uk: "15 хвилин, щоб зорієнтуватися",
      ro: "15 minute pentru a te orienta",
      hy: "15 րոպե կողմնորոշվելու համար"
    },
    preparationNeeded: {
      en: "Contact the team in advance; materials must be fit for reuse",
      uk: "Зв'яжіться з командою заздалегідь; матеріали повинні бути придатними для повторного використання",
      ro: "Contactați echipa în prealabil; materialele trebuie să fie adecvate pentru reutilizare",
      hy: "Նախապես կապվեք թիմի հետ; նյութերը պետք է պիտանի լինեն կրկնակի օգտագործման համար"
    },
    output: {
      en: "Reusable bricks, timber, windows, doors and sanitary ware",
      uk: "Багаторазова цегла, брус, вікна, двері та сантехніка",
      ro: "Caramizi reutilizabile, cherestea, ferestre, usi si obiecte sanitare",
      hy: "Կրկնակի օգտագործման աղյուսներ, փայտանյութ, պատուհաններ, դռներ և սանտեխնիկա"
    },
    bestFor: {
      en: "Construction SMEs and communities repairing damaged buildings",
      uk: "Будівельні МСП та громади ремонтують пошкоджені будівлі",
      ro: "IMM-uri din construcții și comunități care repară clădirile deteriorate",
      hy: "Շինարարական ՓՄՁ-ներ և համայնքներ, որոնք վերանորոգում են վնասված շենքերը"
    },
    format: {
      en: "Physical sites",
      uk: "Фізичні сайти",
      ro: "Site-uri fizice",
      hy: "Ֆիզիկական կայքեր"
    },
    toolLink: 'https://zerowastekharkiv.org.ua/'
  },
  {
    id: 'resource-073',
    slug: 'national-map-of-recycling-collection-points',
    title: 'National Map of Recycling Collection Points',
    description:
      {
        en: "An online map for finding where to hand over sorted recyclables across Ukraine.",
        uk: "Онлайн карта, де можна здати відсортовану вторсировину по Україні.",
        ro: "O hartă online pentru a găsi unde să predați materiale reciclabile sortate în Ucraina.",
        hy: "Առցանց քարտեզ՝ գտնելու, թե որտեղ կարելի է հանձնել տեսակավորված վերամշակվող նյութերն ամբողջ Ուկրաինայում:"
      },
    about:
      {
        en: "The map helps users find nearby recycling collection points, check accepted materials, read sorting guidance, add missing points and report closed points.",
        uk: "Карта допомагає користувачам знаходити найближчі пункти збору вторинної сировини, перевіряти прийнятні матеріали, читати вказівки щодо сортування, додавати відсутні пункти та повідомляти про закриті пункти.",
        ro: "Harta îi ajută pe utilizatori să găsească puncte de colectare pentru reciclare din apropiere, să verifice materialele acceptate, să citească îndrumările de sortare, să adauge puncte lipsă și să raporteze punctele închise.",
        hy: "Քարտեզն օգնում է օգտատերերին գտնել մոտակա վերամշակման հավաքման կետերը, ստուգել ընդունված նյութերը, կարդալ տեսակավորման ուղեցույցը, ավելացնել բացակայող կետերը և հայտնել փակ կետերը:"
      },
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'Ukrainian',
    provider: "Youth movement Let's do it Ukraine, supported by PepsiCo",
    access: 'Free',
    timeRequired: {
      en: "20-30 minutes if reading sorting rules by fraction",
      uk: "20-30 хвилин, якщо читати правила сортування за дробом",
      ro: "20-30 de minute dacă citiți regulile de sortare pe fracțiuni",
      hy: "20-30 րոպե, եթե կարդալով դասակարգման կանոնները կոտորակներով"
    },
    preparationNeeded: {
      en: "Know which materials you need to hand over",
      uk: "Знайте, які матеріали вам потрібно передати",
      ro: "Aflați ce materiale trebuie să predați",
      hy: "Իմացեք, թե որ նյութերը պետք է հանձնեք"
    },
    output: {
      en: "Address, contacts and accepted materials of the nearest points",
      uk: "Адреси, контакти та приймальні матеріали найближчих точок",
      ro: "Adresa, contacte și materiale acceptate ale celor mai apropiate puncte",
      hy: "Մոտակա կետերի հասցե, կոնտակտներ և ընդունված նյութեր"
    },
    bestFor: {
      en: "Micro and small businesses, offices and condominiums",
      uk: "Мікро та малий бізнес, офіси та ОСББ",
      ro: "Micro și mici întreprinderi, birouri și condominii",
      hy: "Միկրո և փոքր բիզնեսներ, գրասենյակներ և համատիրություններ"
    },
    format: {
      en: "Interactive online map with sorting guidance",
      uk: "Інтерактивна онлайн-карта з інструкціями по сортуванню",
      ro: "Hartă interactivă online cu ghid de sortare",
      hy: "Ինտերակտիվ առցանց քարտեզ՝ տեսակավորման ուղեցույցով"
    },
    toolLink: 'https://recyclingpoints.org/'
  },
  {
    id: 'resource-074',
    slug: 'calculator-of-waste-from-destruction',
    title: 'Calculator of Waste from Destruction',
    description:
      {
        en: "Estimates the volume of waste generated by war-related building damage.",
        uk: "Оцінює обсяг відходів, утворених у результаті пошкодження будівель, пов’язаних із війною.",
        ro: "Estimează volumul de deșeuri generate de daunele clădirilor cauzate de război.",
        hy: "Գնահատում է պատերազմի պատճառով շենքերի վնասման արդյունքում առաջացած թափոնների ծավալը:"
      },
    about:
      {
        en: "The calculator helps users estimate demolition waste by selecting building type, development type, storeys and relevant damage conditions such as fire or asbestos-containing materials.",
        uk: "Калькулятор допомагає користувачам оцінити відходи від знесення, вибравши тип будівлі, тип забудови, поверховість і відповідні умови пошкодження, такі як пожежа або матеріали, що містять азбест.",
        ro: "Calculatorul ajută utilizatorii să estimeze deșeurile din demolări selectând tipul clădirii, tipul de dezvoltare, etajele și condițiile relevante de deteriorare, cum ar fi incendiul sau materialele care conțin azbest.",
        hy: "Հաշվիչը օգնում է օգտատերերին գնահատել քանդման թափոնները՝ ընտրելով շենքի տեսակը, զարգացման տեսակը, հարկերը և համապատասխան վնասի պայմանները, ինչպիսիք են հրդեհը կամ ասբեստ պարունակող նյութերը:"
      },
    journeyPhases: ['Assess'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'Ukrainian, English',
    provider: 'Ukraine Support Team coalition; methodology by NGO Rethink',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours to read methodology; 5-10 minutes for a first calculation",
      uk: "1-2 години на ознайомлення з методикою; 5-10 хвилин для першого розрахунку",
      ro: "1-2 ore pentru a citi metodologia; 5-10 minute pentru un prim calcul",
      hy: "1-2 ժամ մեթոդաբանությունը կարդալու համար; 5-10 րոպե առաջին հաշվարկի համար"
    },
    preparationNeeded: {
      en: "Building type, number of storeys and demolition or footprint area",
      uk: "Тип будівлі, поверховість і площа під знос",
      ro: "Tipul clădirii, numărul de etaje și zona de demolare sau amprentă la sol",
      hy: "Շենքի տեսակը, հարկերի քանակը և քանդման կամ տարածքի տարածքը"
    },
    output: {
      en: "Estimated quantity of demolition waste for a given building",
      uk: "Розрахункова кількість відходів від знесення для даної будівлі",
      ro: "Cantitatea estimată de deșeuri de demolare pentru o anumită clădire",
      hy: "Քանդման թափոնների գնահատված քանակությունը տվյալ շենքի համար"
    },
    bestFor: {
      en: "Construction and demolition SMEs, communities and utilities",
      uk: "Будівництво та демонтаж МСП, громади та комунальні служби",
      ro: "Constructii si demolare IMM-uri, comunitati si utilitati",
      hy: "Շինարարություն և քանդում ՓՄՁ-ներ, համայնքներ և կոմունալ ծառայություններ"
    },
    format: {
      en: "Online calculator plus PDF methodological recommendations",
      uk: "Онлайн калькулятор плюс PDF методичні рекомендації",
      ro: "Calculator online plus recomandări metodologice PDF",
      hy: "Առցանց հաշվիչ գումարած PDF մեթոդաբանական առաջարկություններ"
    },
    toolLink: 'https://ustcoalition.com.ua/online-instruments'
  },
  {
    id: 'resource-075',
    slug: 'guide-waste-management-infrastructure-projects',
    title: 'Guide: Waste Management Infrastructure Projects',
    description:
      {
        en: "A step-by-step guide showing how waste management infrastructure projects have been delivered.",
        uk: "Покроковий посібник, який показує, як реалізовувалися проекти інфраструктури управління відходами.",
        ro: "Un ghid pas cu pas care arată cum au fost livrate proiectele de infrastructură de gestionare a deșeurilor.",
        hy: "Քայլ առ քայլ ուղեցույց, որը ցույց է տալիս, թե ինչպես են իրականացվել թափոնների կառավարման ենթակառուցվածքային նախագծերը:"
      },
    about:
      {
        en: "The guide includes more than 30 practical cases from Ukraine and the EU, covering waste prevention, reuse and repair, separate collection, recycling, composting, recovery, disposal and education.",
        uk: "Посібник містить понад 30 практичних кейсів з України та ЄС, які охоплюють запобігання утворенню відходів, повторне використання та ремонт, роздільне збирання, переробку, компостування, відновлення, утилізацію та навчання.",
        ro: "Ghidul include peste 30 de cazuri practice din Ucraina și UE, care acoperă prevenirea deșeurilor, reutilizarea și repararea, colectarea separată, reciclarea, compostarea, recuperarea, eliminarea și educația.",
        hy: "Ուղեցույցը ներառում է ավելի քան 30 գործնական դեպք Ուկրաինայից և ԵՄ-ից, որոնք ընդգրկում են թափոնների կանխարգելումը, վերաօգտագործումը և վերանորոգումը, առանձին հավաքումը, վերամշակումը, կոմպոստացումը, վերականգնումը, հեռացումը և կրթությունը:"
      },
    journeyPhases: ['Learn'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'Ukrainian',
    provider: 'Ukrainian Zero Waste Alliance',
    access: 'Free',
    timeRequired: {
      en: "4-6 hours to read in full",
      uk: "4-6 годин на повне читання",
      ro: "4-6 ore pentru a citi integral",
      hy: "Ամբողջությամբ կարդալու համար 4-6 ժամ"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "30+ practical cases from Ukraine and the EU with implementation steps",
      uk: "30+ практичних кейсів з України та ЄС з кроками впровадження",
      ro: "Peste 30 de cazuri practice din Ucraina și UE cu pași de implementare",
      hy: "30+ գործնական դեպք Ուկրաինայից և ԵՄ-ից՝ իրականացման քայլերով"
    },
    bestFor: {
      en: "Communities, utilities and SMEs working with them",
      uk: "Громади, комунальні служби та МСП, що працюють з ними",
      ro: "Comunitățile, utilitățile și IMM-urile care lucrează cu acestea",
      hy: "Համայնքները, կոմունալ ծառայությունները և նրանց հետ աշխատող ՓՄՁ-ները"
    },
    format: {
      en: "PDF, published via Google Drive",
      uk: "PDF, опублікований через Google Drive",
      ro: "PDF, publicat prin Google Drive",
      hy: "PDF, հրապարակված Google Drive-ի միջոցով"
    },
    toolLink: 'https://drive.google.com/file/d/1gPIz3KfLrAf--tc9tM4gbL2u2VfKBggH/view'
  },
  {
    id: 'resource-076',
    slug: 'circulup-embedding-circularity-toolkit',
    title: 'CirculUP! Embedding Circularity Toolkit',
    description:
      {
        en: "A localised toolkit helping Armenian SMEs apply circular design principles.",
        uk: "Локалізований набір інструментів, який допомагає вірменським МСП застосовувати принципи кругового проектування.",
        ro: "Un set de instrumente localizat care ajută IMM-urile armene să aplice principiile de proiectare circulară.",
        hy: "Տեղայնացված գործիքակազմ, որն օգնում է հայկական ՓՄՁ-ներին կիրառել շրջանաձև նախագծման սկզբունքները:"
      },
    about:
      {
        en: "CirculUP! provides downloadable resources tailored for Armenian SMEs, incubators and accelerators, including toolkits and Circular Economy Guidelines in Armenian and English.",
        uk: "CirculUP! надає доступні для завантаження ресурси, адаптовані для вірменських МСП, інкубаторів і акселераторів, включаючи набори інструментів і керівні принципи циклічної економіки вірменською та англійською мовами.",
        ro: "CirculUP! oferă resurse descărcabile adaptate IMM-urilor, incubatoarelor și acceleratoarelor armene, inclusiv seturi de instrumente și Ghid pentru economia circulară în armeană și engleză.",
        hy: "CirculUP! տրամադրում է ներբեռնվող ռեսուրսներ՝ հարմարեցված Հայաստանի ՓՄՁ-ների, ինկուբատորների և արագացուցիչների համար, ներառյալ գործիքների փաթեթները և Շրջանաձև տնտեսության ուղեցույցները հայերեն և անգլերեն լեզուներով:"
      },
    journeyPhases: ['Learn','Implement'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Armenian, English',
    provider: 'CirculUP! (Impact Hub Yerevan & Environment and Health NGO)',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours",
      uk: "1-2 години",
      ro: "1-2 ore",
      hy: "1-2 ժամ"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Toolkit for incubators and accelerators; Circular Economy (CE) Guidelines in Armenian and English",
      uk: "Інструментарій для інкубаторів та акселераторів; Інструкції з циклічної економіки (CE) вірменською та англійською мовами",
      ro: "Set de instrumente pentru incubatoare și acceleratoare; Orientări privind economia circulară (CE) în armeană și engleză",
      hy: "Գործիքակազմ ինկուբատորների և արագացուցիչների համար; Circular Economy (CE) ուղեցույցներ հայերեն և անգլերեն լեզուներով"
    },
    bestFor: {
      en: "Armenian small-medium enterprises (SMEs), incubators and accelerators",
      uk: "Вірменські малі та середні підприємства (МСП), інкубатори та акселератори",
      ro: "Întreprinderi mici și mijlocii (IMM-uri) armene, incubatoare și acceleratoare",
      hy: "Հայաստանի փոքր և միջին ձեռնարկություններ (ՓՄՁ), ինկուբատորներ և աքսելերատորներ"
    },
    format: {
      en: "PDF toolkit",
      uk: "Інструмент PDF",
      ro: "Setul de instrumente PDF",
      hy: "PDF գործիքակազմ"
    },
    toolLink: 'https://circulup.am/resources'
  },
  {
    id: 'resource-077',
    slug: 'recycle-it-waste-sorting-logistics-network',
    title: 'Recycle It! Waste Sorting and Logistics Network',
    description:
      {
        en: "Provides direct access to sorting bins and recyclable pickup for Armenian organisations.",
        uk: "Надає вірменським організаціям прямий доступ до сортувальних баків і збору вторинної сировини.",
        ro: "Oferă acces direct la coșurile de sortare și la colectarea reciclabile organizațiilor armene.",
        hy: "Հայկական կազմակերպություններին ապահովում է ուղղակի մուտք դեպի տեսակավորման աղբամաններ և վերամշակվող պիկապ:"
      },
    about:
      {
        en: "Recycle It! is a practical logistics service that provides sorting bins for plastic, paper, glass and metal, plus routine pickup and transport to local recycling sites.",
        uk: "Переробити це! – це практична логістична служба, яка надає сортувальні контейнери для пластику, паперу, скла та металу, а також регулярний прийом і транспортування до місцевих пунктів переробки.",
        ro: "Reciclează-l! este un serviciu de logistică practic care oferă coșuri de sortare pentru plastic, hârtie, sticlă și metal, plus ridicarea și transportul de rutină la locurile locale de reciclare.",
        hy: "Վերամշակեք այն: պրակտիկ լոգիստիկ ծառայություն է, որն ապահովում է պլաստիկի, թղթի, ապակու և մետաղի համար նախատեսված աղբամանների տեսակավորում, ինչպես նաև սովորական հավաքում և տեղափոխում տեղական վերամշակման վայրեր:"
      },
    journeyPhases: ['Implement'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'ISSD NGO (Innovative Solutions for Sustainable Development)',
    access: 'Free',
    timeRequired: {
      en: "15-20 minutes",
      uk: "15-20 хвилин",
      ro: "15-20 minute",
      hy: "15-20 րոպե"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "On-site sorting bins and scheduled pickup to recycling sites",
      uk: "Сортувальні контейнери на місці та запланована доставка до місць переробки",
      ro: "Coșuri de sortare la fața locului și ridicare programată la locurile de reciclare",
      hy: "Տեղում տեսակավորման աղբամաններ և պլանավորված տեղափոխում վերամշակման վայրեր"
    },
    bestFor: {
      en: "Armenian businesses wanting to start sorting waste",
      uk: "Вірменські підприємства хочуть почати сортувати відходи",
      ro: "Afaceri armene care doresc să înceapă sortarea deșeurilor",
      hy: "Հայկական բիզնեսները ցանկանում են սկսել աղբի տեսակավորումը"
    },
    format: {
      en: "On-the-ground service; phone/email sign-up",
      uk: "Обслуговування на місці; реєстрація за телефоном/електронною поштою",
      ro: "Servicii la sol; înregistrare prin telefon/e-mail",
      hy: "Տեղի ծառայություն; հեռախոս / էլփոստի գրանցում"
    },
    toolLink: 'https://issdngo.com/en/start-sorting'
  },
  {
    id: 'resource-078',
    slug: 'green-economy-online-training-for-armenia',
    title: 'Green Economy Online Training for Armenia',
    description:
      {
        en: "An e-learning course on inclusive green economies and resource efficiency.",
        uk: "Електронний навчальний курс із інклюзивної зеленої економіки та ефективного використання ресурсів.",
        ro: "Un curs de e-learning despre economii verzi inclusive și eficiența resurselor.",
        hy: "Էլեկտրոնային ուսուցման դասընթաց՝ ներառական կանաչ տնտեսությունների և ռեսուրսների արդյունավետության վերաբերյալ:"
      },
    about:
      {
        en: "This localised, interactive course equips SME managers, environmental officers and civil servants with a basic understanding of inclusive green economies and resource efficiency.",
        uk: "Цей локалізований інтерактивний курс надає керівникам малого та середнього бізнесу, спеціалістам з охорони навколишнього середовища та державним службовцям базове розуміння інклюзивної зеленої економіки та ефективного використання ресурсів.",
        ro: "Acest curs interactiv, localizat, echipează managerii IMM-urilor, ofițerii de mediu și funcționarii publici cu o înțelegere de bază a economiilor verzi incluzive și a eficienței resurselor.",
        hy: "Այս տեղայնացված, ինտերակտիվ դասընթացը տրամադրում է ՓՄՁ ղեկավարներին, բնապահպանության ոլորտի պատասխանատուներին և քաղաքացիական ծառայողներին ներառական կանաչ տնտեսությունների և ռեսուրսների արդյունավետության հիմնական գիտելիքներով:"
      },
    journeyPhases: ['Learn'],
    sector: 'Cross-sector',
    effort: 'High',
    language: 'English',
    provider: 'American University of Armenia (AUA)',
    access: 'Free',
    timeRequired: {
      en: "1 day",
      uk: "1 день",
      ro: "1 zi",
      hy: "1 օր"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Completion of an online training course",
      uk: "Проходження онлайн-курсу навчання",
      ro: "Finalizarea unui curs de formare online",
      hy: "Առցանց վերապատրաստման դասընթացի ավարտ"
    },
    bestFor: {
      en: "SME managers, environmental officers and civil servants",
      uk: "Менеджери малого та середнього бізнесу, спеціалісти з охорони навколишнього середовища та державні службовці",
      ro: "Manageri de IMM-uri, ofițeri de mediu și funcționari publici",
      hy: "ՓՄՁ ղեկավարներ, բնապահպանության պատասխանատուներ և քաղաքացիական ծառայողներ"
    },
    format: {
      en: "E-learning course",
      uk: "Електронний курс навчання",
      ro: "Curs de e-learning",
      hy: "Էլեկտրոնային ուսուցման դասընթաց"
    },
    toolLink: 'https://ilearngreen.aua.am/'
  },
  {
    id: 'resource-079',
    slug: 'mershenq-undp-gcf-energy-efficient-building-retrofits',
    title: 'Mershenq - UNDP-GCF Energy Efficient Building Retrofits',
    description:
      {
        en: "Reports and guidelines on building energy efficiency retrofits.",
        uk: "Звіти та рекомендації щодо енергоефективної модернізації будівель.",
        ro: "Rapoarte și orientări privind modernizarea eficienței energetice a clădirilor.",
        hy: "Շենքերի էներգաարդյունավետության վերազինման վերաբերյալ հաշվետվություններ և ուղեցույցներ:"
      },
    about:
      {
        en: "Mershenq provides reports, trainings, guidelines and resources related to building energy efficiency, retrofitting and emissions reduction under a United Nations Development Programme (UNDP)-Green Climate Fund (GCF) project. Materials include guidebooks, energy audit guidance and Energy Management Information System (EMIS) training.",
        uk: "Mershenq надає звіти, тренінги, рекомендації та ресурси, пов’язані з енергоефективністю будівель, модернізацією та скороченням викидів у рамках проекту Програми розвитку ООН (ПРООН) та Зеленого кліматичного фонду (GCF). Матеріали включають посібники, вказівки з енергоаудиту та навчання інформаційній системі енергоменеджменту (EMIS).",
        ro: "Mershenq oferă rapoarte, instruiri, îndrumări și resurse legate de eficiența energetică a clădirilor, modernizarea și reducerea emisiilor în cadrul unui proiect Programul Națiunilor Unite pentru Dezvoltare (UNDP)-Fondul Verde pentru Climă (GCF). Materialele includ ghiduri, îndrumări de audit energetic și instruire privind Sistemul Informațional de Management al Energiei (EMIS).",
        hy: "Mershenq-ը ներկայացնում է հաշվետվություններ, դասընթացներ, ուղեցույցներ և ռեսուրսներ՝ կապված շինարարության էներգաարդյունավետության, վերազինման և արտանետումների նվազեցման հետ՝ ՄԱԿ-ի Զարգացման ծրագրի (ՄԱԶԾ)-Կանաչ Կլիմայի հիմնադրամի (GCF) ծրագրի շրջանակներում: Նյութերը ներառում են ուղեցույցներ, էներգետիկ աուդիտի ուղեցույց և Էներգետիկ կառավարման տեղեկատվական համակարգի (EMIS) ուսուցում:"
      },
    journeyPhases: ['Assess', 'Implement'],
    placements: {
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: 'Construction',
    effort: 'Medium',
    language: 'English, Armenian',
    provider: 'UNDP Armenia',
    access: 'Free',
    timeRequired: {
      en: "1-2 hours per publication",
      uk: "1-2 години на публікацію",
      ro: "1-2 ore per publicație",
      hy: "1-2 ժամ մեկ հրապարակման համար"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Guidebooks, training courses and monitoring methodologies",
      uk: "Посібники, навчальні курси та методології моніторингу",
      ro: "Ghiduri, cursuri de formare și metodologii de monitorizare",
      hy: "Ուղեցույցներ, վերապատրաստման դասընթացներ և մոնիտորինգի մեթոդոլոգիաներ"
    },
    bestFor: {
      en: "Facility managers, contractors and municipalities",
      uk: "Керівники об’єктів, підрядники та муніципалітети",
      ro: "Manageri de instalații, antreprenori și municipalități",
      hy: "Հաստատությունների ղեկավարներ, կապալառուներ և քաղաքապետարաններ"
    },
    format: {
      en: "PDF guidebooks and training courses",
      uk: "PDF посібники та навчальні курси",
      ro: "Ghiduri PDF și cursuri de formare",
      hy: "PDF ուղեցույցներ և վերապատրաստման դասընթացներ"
    },
    toolLink: 'https://mershenq.am/en/publications/guidelines'
  },
  {
    id: 'resource-080',
    slug: 'recp-armenia-resources',
    title: 'Resource Efficient and Cleaner Production (RECP) Armenia Resources',
    description:
      {
        en: "Resources supporting Resource Efficient and Cleaner Production implementation.",
        uk: "Ресурси, що підтримують впровадження ресурсоефективного та чистого виробництва.",
        ro: "Resurse care sprijină implementarea unei producții mai eficiente și mai curate.",
        hy: "Ռեսուրսներ, որոնք աջակցում են ռեսուրսների արդյունավետ և մաքուր արտադրության իրականացմանը:"
      },
    about:
      {
        en: "Resource Efficient and Cleaner Production (RECP) Armenia resources include primers, leaflets and business cases documenting how Armenian small-medium enterprises (SMEs) applied Resource Efficient and Cleaner Production measures across food production, poultry, battery manufacturing, dried fruit processing, lime production, construction and dairy processing.",
        uk: "Ресурси ресурсоефективного та чистішого виробництва (RECP) у Вірменії включають посібники, листівки та бізнес-кейси, що документують, як вірменські малі та середні підприємства (МСП) застосовували заходи ресурсоефективного та чистішого виробництва у виробництві продуктів харчування, птахівництві, виробництві акумуляторів, переробці сухофруктів, виробництві вапна, будівництві та переробці молока.",
        ro: "Producție eficientă din punctul de vedere al resurselor și producție mai curată (RECP) Resursele Armeniei includ grunduri, pliante și cazuri de afaceri care documentează modul în care întreprinderile mici și mijlocii (IMM-uri) armene au aplicat măsurile de producție eficientă și mai curată a resurselor în producția de alimente, păsări de curte, producția de baterii, procesarea fructelor uscate, producția de var, construcții și prelucrarea produselor lactate.",
        hy: "Ռեսուրսների արդյունավետ և մաքուր արտադրություն (RECP) Հայաստանի ռեսուրսները ներառում են պրայմերներ, թռուցիկներ և բիզնես դեպքեր, որոնք փաստում են, թե ինչպես են հայկական փոքր միջին ձեռնարկությունները (ՓՄՁ) կիրառել ռեսուրսների արդյունավետ և մաքուր արտադրության միջոցառումներ սննդի արտադրության, թռչնաբուծության, մարտկոցների արտադրության, չոր մրգերի, կրաքարի, շինարարության և կաթնամթերքի վերամշակման ոլորտներում:"
      },
    journeyPhases: ['Learn'],
    sector: 'Manufacturing',
    effort: 'Low',
    language: 'English',
    provider: 'EU4Environment',
    access: 'Free',
    timeRequired: {
      en: "N/A",
      uk: "N/A",
      ro: "N / A",
      hy: "N/A"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Resource Efficient and Cleaner Production (RECP) toolkit and supporting materials",
      uk: "Набір інструментів ресурсоефективного та чистішого виробництва (RECP) і допоміжні матеріали",
      ro: "Setul de instrumente pentru producție eficientă și mai curată a resurselor (RECP) și materiale suport",
      hy: "Ռեսուրսների արդյունավետ և մաքուր արտադրություն (RECP) գործիքակազմ և օժանդակ նյութեր"
    },
    bestFor: {
      en: "Armenian small-medium enterprises (SMEs), manufacturing and industrial sectors",
      uk: "Малі та середні підприємства (МСП) Вірменії, виробничий та промисловий сектори",
      ro: "Întreprinderile mici și mijlocii (IMM-uri) armene, sectoarele de producție și industriale",
      hy: "Հայաստանի փոքր և միջին ձեռնարկություններ (ՓՄՁ), արտադրական և արդյունաբերական ոլորտներ"
    },
    format: {
      en: "PDF toolkit",
      uk: "Інструмент PDF",
      ro: "Setul de instrumente PDF",
      hy: "PDF գործիքակազմ"
    },
    toolLink: 'https://recp.am/en/news/recp-materials'
  },
  {
    id: 'resource-081',
    slug: 'acba-business-club-and-sme-courses',
    title: 'ACBA Business Club and SME Courses',
    description:
      {
        en: "Networking and free trainings for Armenian small-medium enterprises (SMEs).",
        uk: "Нетворкінг та безкоштовні тренінги для вірменських малих і середніх підприємств (МСП).",
        ro: "Crearea de rețele și traininguri gratuite pentru întreprinderile mici și mijlocii (IMM-uri) armene.",
        hy: "Ցանցերի ստեղծում և անվճար դասընթացներ Հայաստանի փոքր և միջին ձեռնարկությունների (ՓՄՁ) համար."
      },
    about:
      {
        en: "ACBA Business Club provides Armenian small-medium enterprises (SMEs) with networking opportunities and free business management trainings, including modules covering environmental, social and governance (ESG), strategy and sustainable business adaptation.",
        uk: "ACBA Business Club надає вірменським малим і середнім підприємствам (МСП) можливості для налагодження контактів і безкоштовні тренінги з управління бізнесом, включаючи модулі, що охоплюють навколишнє середовище, соціальні проблеми та управління (ESG), стратегію та сталу адаптацію бізнесу.",
        ro: "ACBA Business Club oferă întreprinderilor mici și mijlocii (IMM-uri) armene oportunități de creare de rețele și cursuri gratuite de management al afacerilor, inclusiv module care acoperă mediu, social și guvernanță (ESG), strategie și adaptarea durabilă a afacerilor.",
        hy: "ACBA Business Club-ը հայաստանյան փոքր և միջին ձեռնարկություններին (ՓՄՁ) տրամադրում է ցանցային հնարավորություններ և բիզնեսի կառավարման անվճար դասընթացներ, ներառյալ բնապահպանական, սոցիալական և կառավարման (ESG), ռազմավարությունը և կայուն բիզնեսի հարմարեցումը:"
      },
    journeyPhases: ['Explore'],
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'Armenian',
    provider: 'ACBA Bank OJSC',
    access: 'Free',
    timeRequired: {
      en: "2-4 hours",
      uk: "2-4 години",
      ro: "2-4 ore",
      hy: "2-4 ժամ"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Free training courses and networking events",
      uk: "Безкоштовні навчальні курси та мережеві заходи",
      ro: "Cursuri gratuite de formare și evenimente de networking",
      hy: "Անվճար վերապատրաստման դասընթացներ և ցանցային միջոցառումներ"
    },
    bestFor: {
      en: "Armenian small-medium enterprises (SMEs) managers",
      uk: "Керівники малих та середніх підприємств (МСП) Вірменії",
      ro: "Manageri de întreprinderi mici și mijlocii (IMM-uri) armene",
      hy: "Հայաստանի փոքր և միջին ձեռնարկությունների (ՓՄՁ) մենեջերներ"
    },
    format: {
      en: "Online courses and networking events",
      uk: "Онлайн-курси та мережеві заходи",
      ro: "Cursuri online și evenimente de networking",
      hy: "Առցանց դասընթացներ և ցանցային միջոցառումներ"
    },
    toolLink: 'https://sme.acba.am/hy/courses'
  },
  {
    id: 'resource-082',
    slug: 'recyclass-steel',
    title: 'Recyclass Steel',
    description:
      {
        en: "A free self-assessment platform for evaluating how well steel packaging is designed for recycling.",
        uk: "Безкоштовна платформа самооцінки для оцінки того, наскільки сталева упаковка розроблена для переробки.",
        ro: "O platformă gratuită de autoevaluare pentru a evalua cât de bine sunt proiectate ambalajele din oțel pentru reciclare.",
        hy: "Անվճար ինքնագնահատման հարթակ՝ գնահատելու համար, թե որքան լավ է պողպատե փաթեթավորումը նախատեսված վերամշակման համար:"
      },
    about:
      {
        en: "The RecyClass Steel Tool is a free online self-assessment platform, published by RecyClass with CIRCPACK (Veolia), that lets brands evaluate steel packaging recyclability against the RecyClass Recyclability Methodology, aligned with EN 13430. Users work through five steps: describing the packaging, confirming eligibility under the methodology's scope, selecting packaging type, and completing a Design for Recycling assessment covering mass balance (recoverable material), design incompatibilities affecting recyclate quality, and an \"easy to empty\" index. || The tool then assigns a class: A (no recyclability issues, closed-loop potential), B (minor issues, mostly closed-loop), C (issues affecting quality or causing material loss), or Not Recyclable (major design flaws or missing EU collection infrastructure). Results and a downloadable PDF report are generated once the analysis is complete, alongside a mapping of European waste management systems. It's meant as a design and screening aid, not certification; independent third-party verification is still required for formal recyclability claims.",
        uk: "Інструмент RecyClass Steel — це безкоштовна онлайн-платформа самооцінки, опублікована RecyClass спільно з CIRCPACK (Veolia), яка дозволяє брендам оцінювати придатність сталевої упаковки до вторинної переробки згідно з методологією RecyClass Recyclable, яка відповідає стандарту EN 13430. Користувачі виконують п’ять кроків: опис упаковки, підтвердження відповідності вимогам методології, вибір типу упаковки та завершення оцінки «Дизайн для вторинної переробки», що охоплює баланс маси (матеріал, що підлягає відновленню), несумісність конструкції, що впливає на якість вторинної сировини, та індекс «легкість випорожнення». || Потім інструмент призначає клас: A (немає проблем з переробкою, потенціал замкнутого циклу), B (незначні проблеми, здебільшого замкнутий цикл), C (проблеми, що впливають на якість або спричиняють втрату матеріалу) або Не підлягає переробці (основні недоліки конструкції або відсутність інфраструктури збирання ЄС). Після завершення аналізу генеруються результати та PDF-звіт, який можна завантажити, а також карта європейських систем управління відходами. Це призначено для розробки та перевірки, а не для сертифікації; незалежна перевірка третьої сторони все ще потрібна для офіційних претензій щодо повторної переробки.",
        ro: "RecyClass Steel Tool este o platformă online gratuită de autoevaluare, publicată de RecyClass împreună cu CIRCPACK (Veolia), care permite mărcilor să evalueze reciclabilitatea ambalajelor din oțel în raport cu Metodologia de reciclare RecyClass, aliniată cu EN 13430. Utilizatorii parcurg cinci pași: descrierea ambalajului, confirmarea eligibilității pentru ambalaj, selectarea tipului de ambalaj, selectarea eligibilității și a metodologiei Evaluarea reciclării care acoperă bilanțul de masă (material recuperabil), incompatibilități de proiectare care afectează calitatea reciclatului și un indice „ușor de golit”. || Instrumentul atribuie apoi o clasă: A (fără probleme de reciclare, potențial în buclă închisă), B (probleme minore, în mare parte în buclă închisă), C (probleme care afectează calitatea sau care cauzează pierderi de material) sau Nereciclabil (defecte majore de proiectare sau infrastructura UE de colectare lipsă). Rezultatele și un raport PDF descărcabil sunt generate odată ce analiza este finalizată, alături de o cartografiere a sistemelor europene de gestionare a deșeurilor. Este conceput ca un ajutor de proiectare și screening, nu de certificare; Verificarea independentă de la terți este încă necesară pentru declarațiile formale de reciclare.",
        hy: "RecyClass Steel Tool-ը անվճար առցանց ինքնագնահատման հարթակ է, որը հրապարակվել է RecyClass-ի կողմից CIRCPACK-ով (Veolia), որը թույլ է տալիս բրենդներին գնահատել պողպատի փաթեթավորման վերամշակելիությունը RecyClass Recyclability Methodology-ի հետ՝ համապատասխանեցված EN 13430-ին: Օգտագործողները աշխատում են հինգ քայլով. Վերամշակման նախագծի գնահատման լրացում, որը ներառում է զանգվածի հավասարակշռությունը (վերականգնվող նյութ), նախագծման անհամատեղելիությունները, որոնք ազդում են վերամշակման որակի վրա և «հեշտ դատարկվող» ինդեքսը: || Այնուհետև գործիքը վերագրում է դաս՝ A (վերամշակման հետ կապված խնդիրներ, փակ պոտենցիալ), B (փոքր խնդիրներ, հիմնականում՝ փակ հանգույց), C (խնդիրներ, որոնք ազդում են որակի վրա կամ առաջացնում են նյութական կորուստ) կամ Not Recyclable (դիզայնի հիմնական թերություններ կամ բացակայում է ԵՄ հավաքման ենթակառուցվածքը): Արդյունքները և ներբեռնվող PDF զեկույցը ստեղծվում են վերլուծության ավարտից հետո, ինչպես նաև եվրոպական թափոնների կառավարման համակարգերի քարտեզագրումը: Այն նախատեսված է որպես դիզայնի և զննման օգնություն, այլ ոչ թե հավաստագրում. Երրորդ կողմի անկախ ստուգումը դեռևս պահանջվում է վերամշակման պաշտոնական պահանջների համար:"
      },
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Circpack',
    access: 'Free',
    timeRequired: {
      en: "15 – 30 minutes",
      uk: "15-30 хвилин",
      ro: "15-30 de minute",
      hy: "15-30 րոպե"
    },
    preparationNeeded: {
      en: "Knowledge of your packaging materials including mass, dimensions and design features",
      uk: "Знання ваших пакувальних матеріалів, включно з масою, розмірами та конструктивними особливостями",
      ro: "Cunoașterea materialelor dvs. de ambalare, inclusiv masa, dimensiunile și caracteristicile de proiectare",
      hy: "Ձեր փաթեթավորման նյութերի իմացություն՝ ներառյալ զանգվածը, չափերը և դիզայնի առանձնահատկությունները"
    },
    output: {
      en: "Recyclability class and a downloadable PDF report with improvement recommendations (sign up required to download report).",
      uk: "Клас придатності до перероблення та завантажуваний PDF-звіт із рекомендаціями щодо покращення (для завантаження звіту потрібна реєстрація).",
      ro: "Clasa de reciclabilitate și un raport PDF descărcabil cu recomandări de îmbunătățire (este necesară înregistrarea pentru a descărca raportul).",
      hy: "Վերամշակելիության դաս և ներբեռնվող PDF զեկույց՝ բարելավման առաջարկություններով (զեկույցը ներբեռնելու համար անհրաժեշտ է գրանցվել)։"
    },
    bestFor: {
      en: "Manufacturers, brands and retailers using or designing steel packagings",
      uk: "Виробники, бренди та роздрібні продавці, які використовують або проєктують сталеве пакування",
      ro: "Producători, branduri și comercianți cu amănuntul care utilizează sau proiectează ambalaje din oțel",
      hy: "Արտադրողներ, բրենդներ և մանրածախ վաճառողներ, որոնք օգտագործում կամ նախագծում են պողպատե փաթեթավորում"
    },
    format: {
      en: "Online analysis tool",
      uk: "Онлайн інструмент аналізу",
      ro: "Instrument de analiză online",
      hy: "Առցանց վերլուծության գործիք"
    },
    toolLink: 'https://tool.recyclass.eu/en/steel/tool/#step-1'
  },
  {
    id: 'resource-083',
    slug: 'recyclass-aluminium',
    title: 'Recyclass Aluminium',
    description:
      {
        en: "A free self-assessment platform for evaluating how well alumminium packaging is designed for recycling.",
        uk: "Безкоштовна платформа самооцінки для оцінки того, наскільки добре алюмінієва упаковка розроблена для переробки.",
        ro: "O platformă gratuită de autoevaluare pentru a evalua cât de bine sunt proiectate ambalajele din aluminiu pentru reciclare.",
        hy: "Անվճար ինքնագնահատման հարթակ՝ գնահատելու համար, թե որքան լավ է ալյումինե փաթեթավորումը նախատեսված վերամշակման համար:"
      },
    about:
      {
        en: "The RecyClass Aluminium Tool is a free online self-assessment platform, published by RecyClass with CIRCPACK (Veolia), that lets brands evaluate aluminium packaging recyclability against the RecyClass recyclability methodology, aligned with EN 13430. Users work through five steps: describing the packaging, confirming eligibility (mainly aluminium by weight, accepted in household collection), selecting packaging type and characteristics (cans, bottles, foil, thickness, sortability), and entering total versus aluminium net weight to calculate a mass-balance ratio. || The tool then assigns a class: A (95%+ recyclable content), B (80 to 95%), C (70 to 80%), or Not Recyclable (below 70%). It's meant as a design and screening aid, not certification. RecyClass notes the output can support evidence for the EU's PPWR (Regulation 2025/40) but isn't sufficient proof of conformity on its own; independent third-party certification is still required.",
        uk: "Інструмент RecyClass Aluminium — це безкоштовна онлайн-платформа самооцінки, опублікована RecyClass спільно з CIRCPACK (Veolia), яка дозволяє брендам оцінювати придатність алюмінієвої упаковки до вторинної переробки за методологією RecyClass, що відповідає стандарту EN 13430. Користувачі виконують п’ять кроків: опис упаковки, підтвердження придатності (переважно алюміній за вагою, прийнятний у побуті). збирання), вибір типу та характеристик упаковки (банки, пляшки, фольга, товщина, можливість сортування) і введення загальної маси нетто проти алюмінію для розрахунку співвідношення маси та балансу. || Потім інструмент призначає клас: A (95%+ вміст придатний для переробки), B (від 80 до 95%), C (70 до 80%) або не підлягає переробці (менше 70%). Це призначено для розробки та перевірки, а не для сертифікації. RecyClass зазначає, що результати можуть підтверджувати PPWR ЄС (Регламент 2025/40), але самі по собі не є достатнім доказом відповідності; все ще потрібна незалежна сертифікація третьої сторони.",
        ro: "Instrumentul RecyClass Aluminium este o platformă online gratuită de autoevaluare, publicată de RecyClass cu CIRCPACK (Veolia), care permite mărcilor să evalueze reciclabilitatea ambalajelor din aluminiu în raport cu metodologia de reciclare RecyClass, aliniată cu EN 13430. Utilizatorii parcurg cinci pași: descrierea ambalajului, confirmarea eligibilității ambalajului, confirmarea eligibilității în casă, acceptarea greutății aluminiului în gospodărie. tipul și caracteristicile (cutii, sticle, folie, grosime, sortabilitate) și introducerea greutății totale în raport cu greutatea netă a aluminiului pentru a calcula un raport masă-bilanț. || Instrumentul atribuie apoi o clasă: A (95% + conținut reciclabil), B (80 până la 95%), C (70 până la 80%) sau Nereciclabil (sub 70%). Este conceput ca un ajutor de proiectare și screening, nu de certificare. RecyClass observă că rezultatul poate susține dovezi pentru PPWR al UE (Regulamentul 2025/40), dar nu reprezintă o dovadă suficientă a conformității în sine; este încă necesară certificarea independentă de la terți.",
        hy: "RecyClass Aluminum Tool-ը անվճար առցանց ինքնագնահատման հարթակ է, որը հրապարակվել է RecyClass-ի կողմից CIRCPACK-ով (Veolia), որը թույլ է տալիս բրենդներին գնահատել ալյումինե փաթեթավորման վերամշակելիությունը RecyClass վերամշակման մեթոդաբանության հետ՝ համահունչ EN 13430-ին: Օգտագործողները աշխատում են հինգ քայլով. փաթեթավորման տեսակը և բնութագրերը (բանկաներ, շշեր, փայլաթիթեղ, հաստություն, տեսակավորելիություն) և մուտքագրելով ընդհանուր և ալյումինի զուտ քաշը՝ զանգված-բալանսի հարաբերակցությունը հաշվարկելու համար: || Այնուհետև գործիքը նշանակում է դաս՝ A (95%+ վերամշակելի բովանդակություն), B (80-ից 95%), C (70-ից 80%) կամ Not Recyclable (70%-ից ցածր): Այն նախատեսված է որպես նախագծման և զննման օգնություն, այլ ոչ թե հավաստագրում: RecyClass-ը նշում է, որ արդյունքը կարող է աջակցել ԵՄ-ի PPWR-ի (Կանոնակարգ 2025/40) ապացույցներին, սակայն ինքնին համապատասխանության բավարար ապացույց չէ. անկախ երրորդ կողմի հավաստագրումը դեռևս պահանջվում է:"
      },
    journeyPhases: ['Assess'],
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Circpack',
    access: 'Free',
    timeRequired: {
      en: "15 – 30 minutes",
      uk: "15-30 хвилин",
      ro: "15-30 de minute",
      hy: "15-30 րոպե"
    },
    preparationNeeded: {
      en: "Knowledge of your packaging materials including mass, dimensions and design features",
      uk: "Знання ваших пакувальних матеріалів, включно з масою, розмірами та конструктивними особливостями",
      ro: "Cunoașterea materialelor dvs. de ambalare, inclusiv masa, dimensiunile și caracteristicile de proiectare",
      hy: "Ձեր փաթեթավորման նյութերի իմացություն՝ ներառյալ զանգվածը, չափերը և դիզայնի առանձնահատկությունները"
    },
    output: {
      en: "Recyclability class and a downloadable PDF report with improvement recommendations (sign up required to download report).",
      uk: "Клас придатності до перероблення та завантажуваний PDF-звіт із рекомендаціями щодо покращення (для завантаження звіту потрібна реєстрація).",
      ro: "Clasa de reciclabilitate și un raport PDF descărcabil cu recomandări de îmbunătățire (este necesară înregistrarea pentru a descărca raportul).",
      hy: "Վերամշակելիության դաս և ներբեռնվող PDF զեկույց՝ բարելավման առաջարկություններով (զեկույցը ներբեռնելու համար անհրաժեշտ է գրանցվել)։"
    },
    bestFor: {
      en: "Manufacturers, brands and retailers using or designing aluminium packagings",
      uk: "Виробники, бренди та роздрібні продавці, які використовують або проєктують алюмінієве пакування",
      ro: "Producători, branduri și comercianți cu amănuntul care utilizează sau proiectează ambalaje din aluminiu",
      hy: "Արտադրողներ, բրենդներ և մանրածախ վաճառողներ, որոնք օգտագործում կամ նախագծում են ալյումինե փաթեթավորում"
    },
    format: {
      en: "Online analysis tool",
      uk: "Онлайн інструмент аналізу",
      ro: "Instrument de analiză online",
      hy: "Առցանց վերլուծության գործիք"
    },
    toolLink: 'https://tool.recyclass.eu/en/aluminium/tool/#step-1'
  },
  {
    id: 'resource-084',
    slug: 'design-for-x-dfx-framework',
    title: 'The Design for X (DfX) Explorer',
    description:
      {
        en: "To identify concrete design strategies that support reuse, repair, refurbishment, remanufacturing and recycling",
        uk: "Для визначення конкретних стратегій проектування, які підтримують повторне використання, ремонт, реконструкцію, повторне виробництво та переробку",
        ro: "Pentru a identifica strategii de proiectare concrete care sprijină reutilizarea, repararea, recondiționarea, remanufacturarea și reciclarea",
        hy: "Բացահայտել նախագծման կոնկրետ ռազմավարություններ, որոնք աջակցում են վերաօգտագործմանը, վերանորոգմանը, վերանորոգմանը, վերամշակմանը և վերամշակմանը"
      },
    about:
      {
        en: "Design for X is an interactive tool that helps you explore how products, components and systems can be designed for different circular strategies. Design for X stands for multiple design strategies, where X can stand for reuse, longevity, repair, reassembly,etc. Therefore it is Design for X.|| With this online tool, you can filter according to the circular outcome you want to enable, such as reuse, maintenance, refurbishment, remanufacturing or recycling, and explore relevant design approaches. || The tool encourages you to think beyond the product itself and consider the full lifecycle, including production, use, maintenance, reverse logistics and recovery. This makes it useful when translating a broad circular ambition into more concrete product and system design choices.",
        uk: "Design for X — це інтерактивний інструмент, який допоможе вам дослідити, як продукти, компоненти та системи можуть бути розроблені для різних циклічних стратегій. Design for X означає кілька стратегій проектування, де X може означати повторне використання, довговічність, ремонт, повторне складання тощо. Тому це дизайн для X.|| За допомогою цього онлайн-інструменту ви можете фільтрувати відповідно до циклічного результату, який ви хочете ввімкнути, наприклад повторного використання, технічного обслуговування, реконструкції, повторного виробництва або переробки, і досліджувати відповідні підходи до проектування. || Інструмент заохочує вас думати не тільки про сам продукт, а й розглядати повний життєвий цикл, включаючи виробництво, використання, обслуговування, зворотну логістику та відновлення. Це робить його корисним під час перетворення широких кругових амбіцій на більш конкретні вибори дизайну продукту та системи.",
        ro: "Design for X este un instrument interactiv care vă ajută să explorați modul în care produsele, componentele și sistemele pot fi proiectate pentru diferite strategii circulare. Design for X reprezintă strategii multiple de proiectare, unde X poate reprezenta reutilizare, longevitate, reparare, reasamblare etc. Prin urmare, este Design for X.|| Cu acest instrument online, puteți filtra în funcție de rezultatul circular pe care doriți să îl activați, cum ar fi reutilizarea, întreținerea, recondiționarea, remanufacturarea sau reciclarea și să explorați abordări relevante de proiectare. || Instrumentul vă încurajează să gândiți dincolo de produsul în sine și să luați în considerare întregul ciclu de viață, inclusiv producție, utilizare, întreținere, logistică inversă și recuperare. Acest lucru îl face util atunci când transpuneți o ambiție circulară largă în alegeri mai concrete de proiectare a produselor și a sistemului.",
        hy: "Design for X-ը ինտերակտիվ գործիք է, որն օգնում է ձեզ բացահայտել, թե ինչպես կարող են արտադրանքները, բաղադրիչները և համակարգերը նախագծվել տարբեր շրջանաձև ռազմավարությունների համար: X-ի դիզայնը նշանակում է դիզայնի բազմաթիվ ռազմավարություններ, որտեղ X-ը կարող է նշանակել վերօգտագործման, երկարակեցության, վերանորոգման, վերահավաքման և այլն: Հետևաբար այն դիզայն է X-ի համար:|| Այս առցանց գործիքի միջոցով դուք կարող եք զտել ըստ շրջանաձև արդյունքի, որը ցանկանում եք միացնել, օրինակ՝ վերաօգտագործում, սպասարկում, վերանորոգում, վերամշակում կամ վերամշակում, և ուսումնասիրեք համապատասխան դիզայնի մոտեցումները: || Գործիքը խրախուսում է ձեզ մտածել ապրանքի սահմաններից դուրս և հաշվի առնել կյանքի ամբողջական ցիկլը, ներառյալ արտադրությունը, օգտագործումը, սպասարկումը, հակադարձ լոգիստիկան և վերականգնումը: Սա օգտակար է դարձնում լայն շրջանաձև հավակնությունները ավելի կոնկրետ արտադրանքի և համակարգի դիզայնի ընտրության մեջ:"
      },
    journeyPhases: ['Explore'],
    placements: {
      phaseSections: ['explore:develop-solutions']
    },
    sector: ['Cross-sector','Manufacturing'],
    effort: 'Low',
    language: 'English',
    provider: 'Circular Design',
    access: 'Free',
    timeRequired: {
      en: "30-60 minutes for an initial exploration.",
      uk: "30-60 хвилин для початкового ознайомлення.",
      ro: "30-60 de minute pentru o explorare inițială.",
      hy: "30-60 րոպե՝ նախնական ուսումնասիրության համար։"
    },
    preparationNeeded:
      {
        en: "No preparation needed, as this tools is to inspire and learn about the DfX framework.",
        uk: "Підготовка не потрібна, оскільки ці інструменти призначені для надихання та вивчення фреймворку DfX.",
        ro: "Nu este nevoie de pregătire, deoarece acest instrument este de a inspira și de a învăța despre cadrul DfX.",
        hy: "Նախապատրաստման կարիք չկա, քանի որ այս գործիքը պետք է ոգեշնչի և սովորի DfX շրջանակի մասին:"
      },
    output:
      {
        en: "A selection of relevant design strategies and considerations that can be used to develop or improve a circular product concept.",
        uk: "Вибір відповідних стратегій проектування та міркувань, які можна використати для розробки або вдосконалення концепції круглого продукту.",
        ro: "O selecție de strategii și considerații relevante de proiectare care pot fi utilizate pentru a dezvolta sau îmbunătăți un concept de produs circular.",
        hy: "Համապատասխան դիզայնի ռազմավարությունների և նկատառումների ընտրություն, որոնք կարող են օգտագործվել արտադրանքի շրջանաձև հայեցակարգը մշակելու կամ բարելավելու համար:"
      },
    bestFor:
      {
        en: "SMEs exploring circular product design principles and early redesign opportunities.",
        uk: "Малі та середні підприємства вивчають циклічні принципи дизайну продуктів і можливості раннього редизайну.",
        ro: "IMM-urile care explorează principiile de proiectare circulară a produselor și oportunitățile timpurii de reproiectare.",
        hy: "ՓՄՁ-ները ուսումնասիրում են արտադրանքի նախագծման շրջանաձև սկզբունքները և վաղ վերանախագծման հնարավորությունները:"
      },
    format: {
      en: "Interactive online tool",
      uk: "Інтерактивний онлайн-інструмент",
      ro: "Instrument online interactiv",
      hy: "Ինտերակտիվ առցանց գործիք"
    },
    toolLink: 'https://www.circulardesign.it/design-for-x/#Reuse'
  },
  {
    id: 'resource-085',
    slug: 'proteus-pss-tool-book',
    title: 'PROTEUS Product-Service System Tool Book',
    description:
      {
        en: "To develop circular product-service systems and new ways of creating value.",
        uk: "Розвивати циркулярні системи продуктів і послуг і нові способи створення вартості.",
        ro: "Să dezvolte sisteme circulare produse-servicii și noi modalități de a crea valoare.",
        hy: "Մշակել ապրանք-ծառայության շրջանաձև համակարգեր և արժեք ստեղծելու նոր ուղիներ:"
      },
    about:
      {
        en: "The PROTEUS Product-Service System Tool Book helps teams explore how products and services can be combined into new value propositions. Rather than focusing only on selling more physical products, product-service systems focus on the outcome or value a customer needs and consider which combination of products, services and relationships can deliver it. || The workbook brings together 11 tools covering areas such as the business ecosystem, user activities, product lifecycles, service design, total cost of ownership and concept evaluation. The tools can be used individually or combined within a structured process moving from analysing the current situation, to defining priorities, developing concepts and evaluating the most promising options.",
        uk: "Книга PROTEUS Product-Service System Tool Book допомагає командам досліджувати, як продукти та послуги можна об’єднати в нові ціннісні пропозиції. Замість того, щоб зосереджуватися лише на продажу більшої кількості фізичних продуктів, системи продукт-послуг зосереджені на результатах або цінності, які потребує клієнт, і розглядають, яка комбінація продуктів, послуг і відносин може це забезпечити. || Робочий посібник об’єднує 11 інструментів, що охоплюють такі сфери, як бізнес-екосистема, діяльність користувачів, життєвий цикл продукту, дизайн послуг, загальна вартість володіння та оцінка концепції. Інструменти можна використовувати окремо або комбінувати в рамках структурованого процесу, який рухається від аналізу поточної ситуації до визначення пріоритетів, розробки концепцій та оцінки найбільш перспективних варіантів.",
        ro: "Cartea de instrumente PROTEUS Product-Service System ajută echipele să exploreze modul în care produsele și serviciile pot fi combinate în noi propuneri de valoare. În loc să se concentreze doar pe vânzarea mai multor produse fizice, sistemele de produse-servicii se concentrează pe rezultatul sau valoarea de care are nevoie clientul și iau în considerare ce combinație de produse, servicii și relații o poate oferi. || Caietul de lucru reunește 11 instrumente care acoperă domenii precum ecosistemul de afaceri, activitățile utilizatorilor, ciclurile de viață ale produselor, proiectarea serviciilor, costul total de proprietate și evaluarea conceptului. Instrumentele pot fi utilizate individual sau combinate în cadrul unui proces structurat trecând de la analiza situației actuale, la definirea priorităților, dezvoltarea conceptelor și evaluarea celor mai promițătoare opțiuni.",
        hy: "PROTEUS Product-Service System Tool Book-ն օգնում է թիմերին բացահայտել, թե ինչպես կարելի է ապրանքներն ու ծառայությունները միավորել նոր արժեքային առաջարկների մեջ: Ավելի շատ ֆիզիկական ապրանքներ վաճառելու վրա կենտրոնանալու փոխարեն՝ ապրանք-ծառայության համակարգերը կենտրոնանում են արդյունքի կամ գնահատելու հաճախորդի կարիքների վրա և հաշվի են առնում, թե ապրանքների, ծառայությունների և հարաբերությունների որ համակցությունը կարող է ապահովել այն: || Աշխատանքային գրքույկը միավորում է 11 գործիքներ, որոնք ընդգրկում են այնպիսի ոլորտներ, ինչպիսիք են բիզնեսի էկոհամակարգը, օգտագործողների գործունեությունը, արտադրանքի կյանքի ցիկլերը, ծառայության ձևավորումը, սեփականության ընդհանուր արժեքը և հայեցակարգի գնահատումը: Գործիքները կարող են օգտագործվել առանձին կամ համակցված կառուցվածքային գործընթացում, որն անցնում է ներկա իրավիճակի վերլուծությունից, առաջնահերթությունների սահմանմանը, հայեցակարգերի մշակմանը և ամենահեռանկարային տարբերակների գնահատմանը:"
      },
    journeyPhases: ['Explore', 'Evaluate'],
    sector: 'Manufacturing',
    effort: 'High',
    language: 'English',
    provider: 'Technical University of Denmark (DTU) / PROTEUS Innovation Consortium',
    access: 'Free',
    timeRequired:
      {
        en: "Variable. Individual workshops typically require a few hours plus preparation; using several tools as part of a full development process requires multiple sessions.",
        uk: "змінна. Індивідуальні семінари зазвичай вимагають кількох годин плюс підготовка; використання кількох інструментів як частини повного процесу розробки вимагає кількох сеансів.",
        ro: "Variabilă. Atelierele individuale necesită de obicei câteva ore plus pregătire; utilizarea mai multor instrumente ca parte a unui proces complet de dezvoltare necesită mai multe sesiuni.",
        hy: "Փոփոխական. Անհատական ​​սեմինարների համար սովորաբար պահանջվում է մի քանի ժամ գումարած նախապատրաստում; մի քանի գործիքների օգտագործումը որպես ամբողջական զարգացման գործընթացի մաս պահանջում է մի քանի նիստեր:"
      },
    preparationNeeded:
      {
        en: "Choose the product, service or business opportunity you want to explore. Bring together a cross-functional team and gather relevant knowledge about customers, products and services, the value chain and business performance.",
        uk: "Виберіть продукт, послугу чи бізнес-можливість, які ви хочете вивчити. Об’єднайте міжфункціональну команду та зберіть відповідні знання про клієнтів, продукти та послуги, ланцюг створення вартості та ефективність бізнесу.",
        ro: "Alegeți produsul, serviciul sau oportunitatea de afaceri pe care doriți să o explorați. Reunește o echipă interfuncțională și adună cunoștințe relevante despre clienți, produse și servicii, lanțul valoric și performanța afacerii.",
        hy: "Ընտրեք ապրանքը, ծառայությունը կամ բիզնես հնարավորությունը, որը ցանկանում եք ուսումնասիրել: Համախմբեք բազմաֆունկցիոնալ թիմ և հավաքեք համապատասխան գիտելիքներ հաճախորդների, ապրանքների և ծառայությունների, արժեքային շղթայի և բիզնեսի կատարողականի մասին:"
      },
    output:
      {
        en: "Structured product-service system concepts, supported by a better understanding of customer needs, lifecycle opportunities, stakeholders, value creation and business implications.",
        uk: "Структуровані концепції системи «продукт-послуга», підкріплені кращим розумінням потреб клієнтів, можливостей життєвого циклу, зацікавлених сторін, створення цінності та наслідків для бізнесу.",
        ro: "Concepte structurate de sistem produs-serviciu, susținute de o mai bună înțelegere a nevoilor clienților, oportunităților ciclului de viață, părților interesate, crearea de valoare și implicațiile de afaceri.",
        hy: "Կառուցվածքային արտադրանք-ծառայության համակարգի հայեցակարգեր, որոնք աջակցում են հաճախորդների կարիքների, կյանքի ցիկլի հնարավորությունների, շահագրգիռ կողմերի, արժեքի ստեղծման և բիզնեսի հետևանքների ավելի լավ ըմբռնմամբ:"
      },
    bestFor:
      {
        en: "Product-based and manufacturing small-medium enterprises (SMEs) that want to explore service-based or outcome-based business models.",
        uk: "Продуктові та виробничі малі та середні підприємства (МСП), які хочуть вивчити бізнес-моделі, засновані на послугах або на результатах.",
        ro: "Întreprinderi mici și mijlocii (IMM-uri) bazate pe produse și producție care doresc să exploreze modele de afaceri bazate pe servicii sau pe rezultate.",
        hy: "Արտադրանքի վրա հիմնված և արտադրական փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք ցանկանում են ուսումնասիրել ծառայությունների վրա հիմնված կամ արդյունքների վրա հիմնված բիզնես մոդելներ:"
      },
    format: {
      en: "PDF workbook and workshop tools",
      uk: "PDF-робочий зошит та інструменти для воркшопу",
      ro: "Caiet de lucru PDF și instrumente pentru atelier",
      hy: "PDF աշխատանքային տետր և աշխատաժողովի գործիքներ"
    },
    toolLink: 'https://backend.orbit.dtu.dk/ws/portalfiles/portal/81262011/PSS_Tool_Book.pdf'
  },
  {
    id: 'resource-086',
    slug: 'value-chain-mapping-as-is',
    title: 'Value Chain Mapping / As-Is',
    description:
      {
        en: "To understand your current value chain and identify where circular opportunities may exist.",
        uk: "Щоб зрозуміти ваш поточний ланцюжок створення вартості та визначити, де можуть існувати циклічні можливості.",
        ro: "Pentru a înțelege lanțul valoric actual și a identifica unde pot exista oportunități circulare.",
        hy: "Հասկանալու ձեր ընթացիկ արժեքային շղթան և պարզելու, թե որտեղ կարող են լինել շրջանաձև հնարավորություններ:"
      },
    about:
      {
        en: "The As-Is Value Chain Mapping tool helps your team build a shared picture of how your current value chain works before trying to redesign it. It takes you through the different stages of the value chain and helps distinguish between activities controlled by your organisation and those carried out by suppliers, customers or other partners. || For each stage, the team maps the resources being used, important stakeholders, inefficiencies and wider influences such as regulation or market trends. Connections between these elements are then made visible, revealing where resources or capabilities are underused, where value is lost and where collaboration may be required.",
        uk: "Інструмент відображення ланцюжка вартості «як є» допомагає вашій команді створити спільну картину того, як працює ваш поточний ланцюг створення вартості, перш ніж намагатися його перепроектувати. Він проведе вас через різні етапи ланцюжка створення вартості та допоможе розрізнити діяльність, яку контролює ваша організація, від діяльності, яку здійснюють постачальники, клієнти чи інші партнери. || Для кожного етапу команда планує ресурси, які використовуються, важливі зацікавлені сторони, неефективність і ширші впливи, такі як регулювання або ринкові тенденції. Тоді зв’язки між цими елементами стають видимими, показуючи, де ресурси чи можливості використовуються недостатньо, де втрачається цінність і де може знадобитися співпраця.",
        ro: "Instrumentul As-Is Value Chain Mapping vă ajută echipa să construiască o imagine comună a modului în care funcționează lanțul dvs. valoric actual înainte de a încerca să-l reproiecteze. Vă conduce prin diferitele etape ale lanțului valoric și vă ajută să faceți distincția între activitățile controlate de organizația dvs. și cele desfășurate de furnizori, clienți sau alți parteneri. || Pentru fiecare etapă, echipa cartografiază resursele utilizate, părțile interesate importante, ineficiențele și influențele mai largi, cum ar fi reglementările sau tendințele pieței. Conexiunile dintre aceste elemente sunt apoi făcute vizibile, dezvăluind unde resursele sau capacitățile sunt subutilizate, unde se pierde valoare și unde poate fi necesară colaborarea.",
        hy: "As-Is Value Chain Mapping գործիքն օգնում է ձեր թիմին ընդհանուր պատկերացում կազմել այն մասին, թե ինչպես է աշխատում ձեր ընթացիկ արժեքային շղթան՝ նախքան այն վերաձևավորելու փորձը: Այն ձեզ տանում է արժեքային շղթայի տարբեր փուլերի միջով և օգնում է տարբերակել ձեր կազմակերպության կողմից վերահսկվող և մատակարարների, հաճախորդների կամ այլ գործընկերների կողմից իրականացվող գործողությունները: || Յուրաքանչյուր փուլի համար թիմը քարտեզագրում է օգտագործվող ռեսուրսները, կարևոր շահագրգիռ կողմերը, անարդյունավետությունը և ավելի լայն ազդեցությունները, ինչպիսիք են կարգավորումը կամ շուկայի միտումները: Այնուհետև այս տարրերի միջև կապերը տեսանելի են դառնում՝ բացահայտելով, թե որտեղ են ռեսուրսները կամ հնարավորությունները թերօգտագործված, որտեղ արժեքը կորչում է և որտեղ կարող է անհրաժեշտ լինել համագործակցություն:"
      },
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EIS / HI Advisory',
    access: 'Free',
    timeRequired: {
      en: "2-3 hours",
      uk: "2-3 години",
      ro: "2-3 ore",
      hy: "2-3 ժամ"
    },
    preparationNeeded:
      {
        en: "Bring together participants with knowledge from different parts and levels of the organisation. Print the worksheet in a large format or recreate it on a digital whiteboard, and have sticky notes and pens ready.",
        uk: "Об’єднайте учасників із знаннями з різних частин та рівнів організації. Роздрукуйте робочий аркуш у великому форматі або відтворіть його на цифровій дошці та приготуйте нотатки та ручки.",
        ro: "Reunește participanții cu cunoștințe din diferite părți și niveluri ale organizației. Imprimați foaia de lucru într-un format mare sau recreați-o pe o tablă digitală și aveți pregătite note lipicioase și pixuri.",
        hy: "Միավորել մասնակիցներին կազմակերպության տարբեր մասերից և մակարդակներից ունեցած գիտելիքներով: Տպեք աշխատաթերթը մեծ ձևաչափով կամ վերստեղծեք այն թվային գրատախտակի վրա և պատրաստեք կպչուն գրառումներ և գրիչներ:"
      },
    output:
      {
        en: "A visual map of the current value chain showing key stages, resources, stakeholders, inefficiencies and external influences.",
        uk: "Візуальна карта поточного ланцюжка створення вартості, що показує ключові етапи, ресурси, зацікавлених сторін, неефективність і зовнішні впливи.",
        ro: "O hartă vizuală a lanțului valoric actual care arată etapele cheie, resursele, părțile interesate, ineficiențele și influențele externe.",
        hy: "Ընթացիկ արժեքային շղթայի տեսողական քարտեզ, որը ցույց է տալիս հիմնական փուլերը, ռեսուրսները, շահագրգիռ կողմերը, անարդյունավետությունը և արտաքին ազդեցությունները:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that want to understand their current system before identifying circular strategies, redesigning their value chain or engaging new partners.",
        uk: "Малі та середні підприємства (МСП), які хочуть зрозуміти свою поточну систему, перш ніж визначати циклічні стратегії, переробляти свій ланцюжок створення вартості або залучати нових партнерів.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care doresc să-și înțeleagă sistemul actual înainte de a identifica strategii circulare, de a-și reproiecta lanțul valoric sau de a angaja noi parteneri.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք ցանկանում են հասկանալ իրենց ներկայիս համակարգը՝ նախքան շրջանաձև ռազմավարությունները բացահայտելը, իրենց արժեքային շղթան վերանախագծելը կամ նոր գործընկերներ ներգրավելը:"
      },
    format: {
      en: "Printable worksheet",
      uk: "Робочий аркуш для друку",
      ro: "Fișă de lucru imprimabilă",
      hy: "Տպվող աշխատանքային թերթիկ"
    },
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-4_value-chain-mapping_a2.pdf'
  },
  {
    id: 'resource-087',
    slug: 'user-interviews',
    title: 'User Interviews',
    description:
      {
        en: "To understand user needs, behaviours and barriers before designing circular solutions.",
        uk: "Зрозуміти потреби користувачів, поведінку та бар’єри перед розробкою циклічних рішень.",
        ro: "Pentru a înțelege nevoile, comportamentele și barierele utilizatorilor înainte de a proiecta soluții circulare.",
        hy: "Հասկանալ օգտագործողի կարիքները, վարքագիծը և խոչընդոտները՝ նախքան շրջանաձև լուծումներ մշակելը:"
      },
    about:
      {
        en: "User interviews help you understand how customers, users and other stakeholders actually experience a product, service or system. In a circular economy context, this is important because solutions such as reuse, repair, sharing, take-back and product-service models often depend on people changing behaviours or interacting with a product in new ways. || The worksheet supports the preparation of a semi-structured interview plan based on research questions. It encourages open questions, follow-up questions and systematic recording of insights across interviewees, so recurring needs, challenges and patterns can inform circular solution development.",
        uk: "Інтерв’ю з користувачами допомагають зрозуміти, як клієнти, користувачі та інші зацікавлені сторони насправді відчувають продукт, послугу чи систему. У контексті циклічної економіки це важливо, оскільки такі рішення, як повторне використання, ремонт, спільне використання, повернення та моделі обслуговування продукту, часто залежать від того, чи люди змінюють поведінку або взаємодіють із продуктом по-новому. || Робочий аркуш підтримує підготовку напівструктурованого плану інтерв’ю на основі запитань дослідження. Він заохочує відкриті запитання, додаткові запитання та систематичний запис думок співбесідників, тому повторювані потреби, виклики та шаблони можуть стати основою для циклічної розробки рішень.",
        ro: "Interviurile cu utilizatorii vă ajută să înțelegeți modul în care clienții, utilizatorii și alte părți interesate experimentează de fapt un produs, serviciu sau sistem. Într-un context de economie circulară, acest lucru este important, deoarece soluțiile precum reutilizarea, repararea, partajarea, preluarea și modelele de produse-servicii depind adesea de schimbarea comportamentului oamenilor sau de interacțiunea cu un produs în moduri noi. || Fișa de lucru sprijină pregătirea unui plan de interviu semistructurat bazat pe întrebări de cercetare. Încurajează întrebările deschise, întrebările ulterioare și înregistrarea sistematică a perspectivelor între intervievați, astfel încât nevoile, provocările și modelele recurente pot informa dezvoltarea de soluții circulare.",
        hy: "Օգտատերերի հարցազրույցները օգնում են ձեզ հասկանալ, թե ինչպես են հաճախորդները, օգտվողները և այլ շահագրգիռ կողմերը իրականում զգում ապրանքը, ծառայությունը կամ համակարգը: Շրջանաձև տնտեսության համատեքստում դա կարևոր է, քանի որ լուծումները, ինչպիսիք են վերաօգտագործումը, վերանորոգումը, փոխանակումը, հետ վերցնելը և արտադրանքի սպասարկման մոդելները, հաճախ կախված են մարդկանց վարքագիծը փոխելու կամ ապրանքի հետ նոր ձևերով փոխազդեցությունից: || Աշխատանքային թերթիկը աջակցում է հետազոտական ​​հարցերի հիման վրա կիսակառույց հարցազրույցի պլանի պատրաստմանը: Այն խրախուսում է բաց հարցերը, հետագա հարցերը և հարցվածների միջև պատկերացումների համակարգված գրանցումը, այնպես որ կրկնվող կարիքները, մարտահրավերները և օրինաչափությունները կարող են տեղեկացնել շրջանաձև լուծումների մշակմանը:"
      },
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'EIS / HI Advisory',
    access: 'Free',
    timeRequired: {
      en: "1-2 weeks, including preparation, interviews and collection of insights",
      uk: "1-2 тижні, включно з підготовкою, інтерв’ю та збором інсайтів",
      ro: "1-2 săptămâni, inclusiv pregătirea, interviurile și colectarea de informații",
      hy: "1-2 շաբաթ՝ ներառյալ նախապատրաստումը, հարցազրույցները և պատկերացումների հավաքագրումը"
    },
    preparationNeeded:
      {
        en: "Define what you need to learn and which user or stakeholder groups you need to speak to.",
        uk: "Визначте, що вам потрібно навчитися та з якими групами користувачів або зацікавлених сторін вам потрібно поговорити.",
        ro: "Definiți ce trebuie să învățați și cu ce utilizatori sau grupuri de părți interesate trebuie să vorbiți.",
        hy: "Սահմանեք, թե ինչ պետք է սովորեք, և որ օգտագործողների կամ շահագրգիռ կողմերի հետ պետք է խոսեք:"
      },
    output:
      {
        en: "Structured qualitative insights into user needs, behaviours, motivations, barriers and opportunities.",
        uk: "Структуроване якісне уявлення про потреби, поведінку, мотивацію, перешкоди та можливості користувачів.",
        ro: "Perspective calitative structurate asupra nevoilor utilizatorilor, comportamentelor, motivațiilor, barierelor și oportunităților.",
        hy: "Օգտագործողների կարիքների, վարքագծի, դրդապատճառների, խոչընդոտների և հնարավորությունների վերաբերյալ կառուցվածքային որակական պատկերացումներ:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) developing solutions where customer or user behaviour is important, including reuse, repair, sharing, return systems and service models.",
        uk: "Малі та середні підприємства (МСП), які розробляють рішення, у яких важлива поведінка клієнтів або користувачів, зокрема системи повторного використання, ремонту, спільного використання, повернення та моделі обслуговування.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) dezvoltă soluții în care comportamentul clienților sau utilizatorilor este important, inclusiv reutilizarea, repararea, partajarea, sistemele de returnare și modelele de servicii.",
        hy: "Փոքր և միջին ձեռնարկությունները (ՓՄՁ) լուծումներ են մշակում, որտեղ հաճախորդի կամ օգտագործողի վարքագիծը կարևոր է, ներառյալ վերաօգտագործումը, վերանորոգումը, փոխանակումը, վերադարձման համակարգերը և սպասարկման մոդելները:"
      },
    format: {
      en: "Printable interview planning worksheet",
      uk: "Робочий аркуш для планування інтерв’ю, придатний для друку",
      ro: "Fișă imprimabilă pentru planificarea interviurilor",
      hy: "Հարցազրույցների պլանավորման տպվող աշխատանքային թերթիկ"
    },
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-6_user-interviews_a2.pdf'
  },
  {
    id: 'resource-088',
    slug: 'cevaluator',
    title: 'CEvaluator',
    description:
      {
        en: "To assess the circularity, opportunities and financing risks of a circular project.",
        uk: "Оцінити циркулярність, можливості та фінансові ризики циркулярного проекту.",
        ro: "Pentru a evalua circularitatea, oportunitățile și riscurile de finanțare ale unui proiect circular.",
        hy: "Շրջանաձև ծրագրի շրջանակայինությունը, հնարավորությունները և ֆինանսավորման ռիսկերը գնահատելու համար:"
      },
    about:
      {
        en: "CEvaluator is an online checklist for examining a circular project from both a circularity and financing perspective. It was originally developed to help financial organisations assess circular investment cases, but it can also help small-medium enterprises (SMEs) prepare a circular project or financing application. || The assessment considers circular design and production, circular use models, value retention, environmental sustainability, opportunities and risks. Rather than producing a single circularity percentage, CEvaluator provides a qualitative overview of how a project performs across different dimensions and where additional evidence or risk mitigation may be needed.",
        uk: "CEvaluator — це контрольний онлайн-перелік для аналізу циклічного проекту як з погляду циклізму, так і з точки зору фінансування. Спочатку він був розроблений, щоб допомогти фінансовим організаціям оцінити випадки циклічного інвестування, але він також може допомогти малим і середнім підприємствам (МСП) підготувати циклічний проект або заявку на фінансування. || Оцінка враховує циклічне проектування та виробництво, циклічні моделі використання, збереження вартості, екологічну стійкість, можливості та ризики. Замість того, щоб створювати єдиний відсоток циклічності, CEvaluator надає якісний огляд того, як проект працює в різних вимірах і де можуть знадобитися додаткові докази або зниження ризику.",
        ro: "CEvaluator este o listă de verificare online pentru examinarea unui proiect circular atât din perspectiva circularității, cât și din perspectiva finanțării. A fost dezvoltat inițial pentru a ajuta organizațiile financiare să evalueze cazurile de investiții circulare, dar poate ajuta și întreprinderile mici și mijlocii (IMM-uri) să pregătească un proiect circular sau o cerere de finanțare. || Evaluarea ia în considerare proiectarea și producția circulară, modelele de utilizare circulară, păstrarea valorii, sustenabilitatea mediului, oportunitățile și riscurile. În loc să producă un singur procent de circularitate, CEvaluator oferă o imagine de ansamblu calitativă a modului în care un proiect funcționează în diferite dimensiuni și unde ar putea fi necesare dovezi suplimentare sau atenuarea riscurilor.",
        hy: "CEvaluator-ը առցանց ստուգաթերթ է՝ շրջանաձև նախագիծը թե՛ շրջանաձևության, թե՛ ֆինանսավորման տեսանկյունից ուսումնասիրելու համար: Այն ի սկզբանե մշակվել է ֆինանսական կազմակերպություններին օգնելու գնահատել շրջաբերական ներդրումների դեպքերը, սակայն այն կարող է նաև օգնել փոքր միջին ձեռնարկություններին (ՓՄՁ) պատրաստել շրջանաձև նախագիծ կամ ֆինանսավորման հայտ: || Գնահատումը հաշվի է առնում շրջանաձև ձևավորում և արտադրություն, շրջանաձև օգտագործման մոդելներ, արժեքների պահպանում, շրջակա միջավայրի կայունություն, հնարավորություններ և ռիսկեր: Շրջանաձևության մեկ տոկոս ստեղծելու փոխարեն CEvaluator-ը որակական ակնարկ է տալիս այն մասին, թե ինչպես է նախագիծը գործում տարբեր հարթություններում և որտեղ կարող են անհրաժեշտ լինել լրացուցիչ ապացույցներ կամ ռիսկի նվազեցում:"
      },
    journeyPhases: ['Assess', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:verify-potential'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English, Dutch, French',
    provider: 'Circular Flanders / OVAM / VITO',
    access: 'Free',
    timeRequired:
      {
        en: "Variable, depending on the complexity of the project and how much supporting information is already available.",
        uk: "Змінна залежно від складності проекту та обсягу супровідної інформації, яка вже доступна.",
        ro: "Variabil, în funcție de complexitatea proiectului și de câte informații de sprijin sunt deja disponibile.",
        hy: "Փոփոխական՝ կախված ծրագրի բարդությունից և օժանդակող տեղեկություններից արդեն հասանելի:"
      },
    preparationNeeded:
      {
        en: "Have a clear description of the project and business model available, together with evidence on circular activities, environmental performance, financing needs, risks and expected benefits.",
        uk: "Мати доступний чіткий опис проекту та бізнес-моделі разом із доказами циклічної діяльності, екологічної ефективності, потреб у фінансуванні, ризиків та очікуваних вигод.",
        ro: "Aveți la dispoziție o descriere clară a proiectului și a modelului de afaceri, împreună cu dovezi privind activitățile circulare, performanța de mediu, nevoile de finanțare, riscurile și beneficiile așteptate.",
        hy: "Ունեցեք մատչելի ծրագրի և բիզնես մոդելի հստակ նկարագրություն՝ շրջաբերական գործունեության, բնապահպանական կատարողականի, ֆինանսավորման կարիքների, ռիսկերի և ակնկալվող օգուտների վերաբերյալ ապացույցների հետ միասին:"
      },
    output:
      {
        en: "A qualitative overview of circular performance together with relevant opportunities and risks for financing the project.",
        uk: "Якісний огляд циклічного виконання разом із відповідними можливостями та ризиками для фінансування проекту.",
        ro: "O imagine de ansamblu calitativă a performanței circulare împreună cu oportunități și riscuri relevante pentru finanțarea proiectului.",
        hy: "Շրջանաձև կատարողականի որակական ակնարկ՝ ծրագրի ֆինանսավորման համար համապատասխան հնարավորությունների և ռիսկերի հետ միասին:"
      },
    bestFor:
      {
        en: "Circular small-medium enterprises (SMEs) preparing an investment or funding case, as well as organisations evaluating whether a circular project is ready for financing.",
        uk: "Циклічні малі та середні підприємства (МСП), які готують обґрунтування інвестицій або фінансування, а також організації, які оцінюють, чи циклічний проект готовий до фінансування.",
        ro: "Întreprinderi mici-mijlocii circulare (IMM-uri) care pregătesc un caz de investiție sau finanțare, precum și organizații care evaluează dacă un proiect circular este pregătit pentru finanțare.",
        hy: "Շրջանաձև փոքր-միջին ձեռնարկությունները (ՓՄՁ), որոնք պատրաստում են ներդրումային կամ ֆինանսավորման գործ, ինչպես նաև կազմակերպությունները, որոնք գնահատում են, թե արդյոք շրջանաձև նախագիծը պատրաստ է ֆինանսավորման:"
      },
    format: {
      en: "Online assessment",
      uk: "Онлайн-оцінювання",
      ro: "Evaluare online",
      hy: "Առցանց գնահատում"
    },
    toolLink: 'https://www.cevaluator.be/'
  },
  {
    id: 'resource-089',
    slug: 'test-card',
    title: 'Test Card',
    description:
      {
        en: "To turn assumptions about a new solution into clear experiments that can be tested.",
        uk: "Щоб перетворити припущення щодо нового рішення в чіткі експерименти, які можна перевірити.",
        ro: "Pentru a transforma ipotezele despre o nouă soluție în experimente clare care pot fi testate.",
        hy: "Նոր լուծման մասին ենթադրությունները վերածել պարզ փորձերի, որոնք կարող են փորձարկվել:"
      },
    about:
      {
        en: "The Test Card helps your team test whether the assumptions behind a new product, service or business model hold up in practice before committing substantial resources to implementation. Instead of relying on discussion or intuition, the tool turns an assumption into a structured experiment with clear evidence and a predefined threshold for success. || For a circular solution, this could involve testing whether customers will return a product, whether they are willing to pay for repair or rental, whether a supplier will accept recovered materials, or whether a new service can operate at an acceptable cost.",
        uk: "Тестова картка допомагає вашій команді перевірити, чи витримуються на практиці припущення, що лежать в основі нового продукту, послуги чи бізнес-моделі, перш ніж виділяти значні ресурси для впровадження. Замість того, щоб покладатися на обговорення чи інтуїцію, інструмент перетворює припущення на структурований експеримент із чіткими доказами та заздалегідь визначеним порогом успіху. || Для циклічного рішення це може включати перевірку того, чи покупці повернуть продукт, чи готові вони платити за ремонт або оренду, чи прийме постачальник відновлені матеріали або чи може нова послуга працювати за прийнятною ціною.",
        ro: "Cardul de testare vă ajută echipa să testeze dacă ipotezele din spatele unui nou produs, serviciu sau model de afaceri rezistă în practică înainte de a angaja resurse substanțiale pentru implementare. În loc să se bazeze pe discuții sau intuiție, instrumentul transformă o presupunere într-un experiment structurat cu dovezi clare și un prag predefinit pentru succes. || Pentru o soluție circulară, aceasta ar putea implica testarea dacă clienții vor returna un produs, dacă sunt dispuși să plătească pentru reparație sau închiriere, dacă un furnizor va accepta materiale recuperate sau dacă un nou serviciu poate funcționa la un cost acceptabil.",
        hy: "Փորձարկման քարտն օգնում է ձեր թիմին ստուգել, ​​թե արդյոք նոր արտադրանքի, ծառայության կամ բիզնես մոդելի հիմքում ընկած ենթադրությունները գործնականում կպահպանվեն՝ նախքան ներդրման համար նշանակալի ռեսուրսներ տրամադրելը: Քննարկման կամ ինտուիցիայի վրա հենվելու փոխարեն՝ գործիքը ենթադրությունը վերածում է կառուցվածքային փորձի՝ հստակ ապացույցներով և հաջողության նախապես սահմանված շեմով: || Շրջանաձև լուծման համար սա կարող է ներառել ստուգում՝ արդյոք հաճախորդները կվերադարձնեն ապրանքը, պատրաստ են վճարել վերանորոգման կամ վարձակալության համար, արդյոք մատակարարը կընդունի վերականգնված նյութերը, թե արդյոք նոր ծառայությունը կարող է գործել ընդունելի գնով:"
      },
    journeyPhases: ['Evaluate', 'Implement'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'Strategyzer',
    access: 'Free',
    timeRequired:
      {
        en: "Around 30-60 minutes to design an individual test, followed by the time required to carry out the experiment.",
        uk: "Приблизно 30-60 хвилин на розробку індивідуального тесту, а потім час, необхідний для проведення експерименту.",
        ro: "Aproximativ 30-60 de minute pentru a proiecta un test individual, urmat de timpul necesar pentru realizarea experimentului.",
        hy: "Մոտ 30-60 րոպե անհատական ​​թեստ մշակելու համար, որին հաջորդում է փորձը կատարելու համար պահանջվող ժամանակը:"
      },
    preparationNeeded:
      {
        en: "Start with a circular solution or business-model concept that you want to evaluate. Identify the assumptions that are most important for the idea to succeed.",
        uk: "Почніть із кругового рішення або концепції бізнес-моделі, яку ви хочете оцінити. Визначте припущення, які є найважливішими для успіху ідеї.",
        ro: "Începeți cu o soluție circulară sau un concept de model de afaceri pe care doriți să îl evaluați. Identificați ipotezele care sunt cele mai importante pentru ca ideea să aibă succes.",
        hy: "Սկսեք շրջանաձև լուծումից կամ բիզնես մոդելի հայեցակարգից, որը ցանկանում եք գնահատել: Բացահայտեք այն ենթադրությունները, որոնք առավել կարևոր են գաղափարի հաջողության համար:"
      },
    output:
      {
        en: "A clearly defined experiment describing the assumption to test, how it will be tested, what evidence will be collected and the threshold for success.",
        uk: "Чітко визначений експеримент, що описує припущення для перевірки, як воно буде перевірено, які докази будуть зібрані та поріг успіху.",
        ro: "Un experiment clar definit care descrie ipoteza de testat, cum va fi testată, ce dovezi vor fi colectate și pragul de succes.",
        hy: "Հստակ սահմանված փորձ, որը նկարագրում է փորձարկման ենթադրությունը, ինչպես է այն փորձարկվելու, ինչ ապացույցներ են հավաքվելու և հաջողության շեմը:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that have developed a circular concept but still need evidence about demand, behaviour, operations, partnerships, pricing or other assumptions.",
        uk: "Малі та середні підприємства (МСП), які розробили циклічну концепцію, але все ще потребують доказів щодо попиту, поведінки, діяльності, партнерства, ціноутворення чи інших припущень.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care au dezvoltat un concept circular, dar au nevoie de dovezi despre cerere, comportament, operațiuni, parteneriate, prețuri sau alte ipoteze.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք մշակել են շրջանաձև հայեցակարգ, բայց դեռ կարիք ունեն պահանջարկի, վարքագծի, գործառնությունների, գործընկերությունների, գնագոյացման կամ այլ ենթադրությունների վերաբերյալ ապացույցների:"
      },
    format: {
      en: "Printable test card / digital worksheet",
      uk: "Тестова картка для друку / цифровий робочий аркуш",
      ro: "Card de test imprimabil / fișă de lucru digitală",
      hy: "Տպվող թեստային քարտ / թվային աշխատանքային թերթիկ"
    },
    toolLink: 'https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card'
  },
  {
    id: 'resource-090',
    slug: 'circular-designs-evaluation-pack',
    title: 'Circular Designs Evaluation Pack',
    description:
      {
        en: "To compare circular concepts and decide which ideas are worth pursuing.",
        uk: "Щоб порівняти циклічні концепції та вирішити, які ідеї варто реалізувати.",
        ro: "Pentru a compara concepte circulare și a decide ce idei merită urmărite.",
        hy: "Համեմատել շրջանաձև հասկացությունները և որոշել, թե որ գաղափարներն են արժե հետապնդել:"
      },
    about:
      {
        en: "The Circular Designs Evaluation Pack helps your team assess and compare circular product and service concepts before investing further time and resources in development. Instead of looking only at environmental benefits, the tool examines each concept from three perspectives: whether it creates value for users, whether it makes sense for the organisation and whether it is likely to benefit the environment. || Concepts can then be positioned according to their potential and difficulty of implementation. This makes it easier to distinguish quick opportunities, ideas requiring further development and more ambitious concepts that could deliver significant benefits but require substantial organisational change.",
        uk: "Пакет оцінки Circular Designs Evaluation Pack допоможе вашій команді оцінити та порівняти концепції циклічних продуктів і послуг, перш ніж вкладати час і ресурси в розробку. Замість того, щоб дивитися лише на переваги для навколишнього середовища, інструмент розглядає кожну концепцію з трьох точок зору: чи створює вона цінність для користувачів, чи має вона сенс для організації та чи може вона принести користь навколишньому середовищу. || Тоді концепції можна позиціонувати відповідно до їхнього потенціалу та складності реалізації. Це полегшує розрізнення швидких можливостей, ідей, які потребують подальшого розвитку, та більш амбітних концепцій, які можуть принести значні переваги, але потребують істотних організаційних змін.",
        ro: "Pachetul de evaluare Circular Designs vă ajută echipa să evalueze și să compare conceptele circulare de produse și servicii înainte de a investi mai mult timp și resurse în dezvoltare. În loc să se uite doar la beneficiile de mediu, instrumentul examinează fiecare concept din trei perspective: dacă creează valoare pentru utilizatori, dacă are sens pentru organizație și dacă este probabil să beneficieze de mediu. || Conceptele pot fi apoi poziționate în funcție de potențialul și dificultatea lor de implementare. Acest lucru facilitează distingerea oportunităților rapide, a ideilor care necesită dezvoltare ulterioară și a conceptelor mai ambițioase care ar putea oferi beneficii semnificative, dar necesită schimbări organizaționale substanțiale.",
        hy: "Circular Designs Evaluation Pack-ն օգնում է ձեր թիմին գնահատել և համեմատել ապրանքների և ծառայությունների շրջանակային հայեցակարգերը՝ նախքան հետագա ժամանակ և ռեսուրսներ ներդնել զարգացման մեջ: Միայն բնապահպանական օգուտները դիտարկելու փոխարեն, գործիքը յուրաքանչյուր հայեցակարգ ուսումնասիրում է երեք տեսանկյունից. || Այնուհետև հասկացությունները կարող են տեղակայվել ըստ դրանց ներուժի և իրականացման դժվարության: Սա հեշտացնում է արագ հնարավորությունները, հետագա զարգացում պահանջող գաղափարները և ավելի հավակնոտ հայեցակարգերը, որոնք կարող են զգալի օգուտներ բերել, բայց պահանջում են էական կազմակերպչական փոփոխություններ:"
      },
    journeyPhases: ['Explore', 'Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Use2Use / Chalmers University of Technology',
    access: 'Free',
    timeRequired:
      {
        en: "Approximately 45-60 minutes for 1-3 concepts. More complex concepts may require additional research before the assessment can be completed.",
        uk: "Приблизно 45-60 хвилин на 1-3 концепції. Для більш складних концепцій може знадобитися додаткове дослідження перед завершенням оцінювання.",
        ro: "Aproximativ 45-60 de minute pentru 1-3 concepte. Conceptele mai complexe pot necesita cercetări suplimentare înainte ca evaluarea să poată fi finalizată.",
        hy: "Մոտավորապես 45-60 րոպե 1-3 հասկացությունների համար: Ավելի բարդ հասկացությունները կարող են պահանջել լրացուցիչ հետազոտություն, նախքան գնահատումն ավարտելը:"
      },
    preparationNeeded:
      {
        en: "Select one to three circular concepts to compare and describe each one briefly. Ideally involve people who understand customers, operations, sustainability and the commercial side of the business.",
        uk: "Виберіть від одного до трьох циклічних понять, щоб порівняти та коротко описати кожне. В ідеалі залучайте людей, які розуміються на клієнтах, діяльності, стійкості та комерційній стороні бізнесу.",
        ro: "Selectați unul până la trei concepte circulare pentru a le compara și a le descrie pe scurt. În mod ideal, implicați oameni care înțeleg clienții, operațiunile, sustenabilitatea și partea comercială a afacerii.",
        hy: "Ընտրեք մեկից երեք շրջանաձև հասկացություն՝ համեմատելու և յուրաքանչյուրը համառոտ նկարագրելու համար: Իդեալում ներգրավել մարդկանց, ովքեր հասկանում են հաճախորդներին, գործառնությունները, կայունությունը և բիզնեսի առևտրային կողմը:"
      },
    output:
      {
        en: "A structured comparison of circular concepts showing user value, organisational value, environmental benefits, implementation challenges and questions requiring further investigation.",
        uk: "Структуроване порівняння циклічних концепцій, що показує цінність користувача, організаційну цінність, переваги для навколишнього середовища, проблеми впровадження та питання, які потребують подальшого дослідження.",
        ro: "O comparație structurată a conceptelor circulare care arată valoarea utilizatorului, valoarea organizațională, beneficiile de mediu, provocările de implementare și întrebările care necesită investigații suplimentare.",
        hy: "Շրջանաձև հասկացությունների կառուցվածքային համեմատություն, որը ցույց է տալիս օգտագործողի արժեքը, կազմակերպչական արժեքը, բնապահպանական օգուտները, իրականացման մարտահրավերները և լրացուցիչ ուսումնասիրություն պահանջող հարցեր:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that have generated several circular product or service ideas and need to decide which concepts should progress.",
        uk: "Малі та середні підприємства (МСП), які створили кілька циклічних ідей щодо продуктів або послуг і мають вирішити, які концепції слід розвивати.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care au generat mai multe idei circulare de produse sau servicii și trebuie să decidă care concepte ar trebui să progreseze.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք ստեղծել են մի քանի շրջանաձև ապրանքների կամ ծառայությունների գաղափարներ և պետք է որոշեն, թե որ հայեցակարգերը պետք է առաջընթաց գրանցեն:"
      },
    format: {
      en: "Printable evaluation canvas",
      uk: "Канва оцінювання для друку",
      ro: "Canvas de evaluare imprimabil",
      hy: "Տպվող գնահատման կտավ"
    },
    toolLink: 'https://usercontent.one/wp/www.use2use.se/wp-content/uploads/2022/03/CircularDesignsEvaluationPack.pdf'
  },
  {
    id: 'resource-091',
    slug: 'circular-pilot-canvas',
    title: 'Circular Pilot Canvas',
    description:
      {
        en: "To plan a real-world pilot and test whether a circular solution can work in practice.",
        uk: "Щоб спланувати пілотний проект у реальному світі та перевірити, чи може кругове рішення працювати на практиці.",
        ro: "Pentru a planifica un pilot în lumea reală și a testa dacă o soluție circulară poate funcționa în practică.",
        hy: "Պլանավորել իրական աշխարհի օդաչու և ստուգել, ​​թե արդյոք շրջանաձև լուծումը կարող է գործնականում աշխատել:"
      },
    about:
      {
        en: "The Circular Pilot Canvas helps your team turn a promising circular concept into a structured real-world pilot. It is designed around three fundamental questions: Is there demand for the solution? Is the circular business model worthwhile? And can the organisations involved actually deliver it? || The canvas brings these questions together across value proposition, circular business model, and feasibility and readiness. The team defines what the pilot will test, who needs to participate, what value the solution creates, how circularity will be measured and how responsibilities are distributed.",
        uk: "Circular Pilot Canvas допоможе вашій команді перетворити багатообіцяючу кругову концепцію на структурований пілот у реальному світі. Він розроблений навколо трьох основних питань: чи є попит на рішення? Чи варта циклічна бізнес-модель? І чи можуть залучені організації це реалізувати? || Полотно об’єднує ці питання щодо ціннісних пропозицій, циклічної бізнес-моделі, здійсненності та готовності. Команда визначає, що тестуватиме пілот, хто має брати участь, яку цінність створює рішення, як буде вимірюватися циклічність і як розподіляються обов’язки.",
        ro: "Circular Pilot Canvas vă ajută echipa să transforme un concept circular promițător într-un pilot structurat din lumea reală. Este conceput în jurul a trei întrebări fundamentale: Există cerere pentru soluție? Merită modelul de afaceri circular? Și pot organizațiile implicate să-l livreze? || Pânza reunește aceste întrebări prin propunerea de valoare, modelul de afaceri circular și fezabilitate și pregătire. Echipa definește ce va testa pilotul, cine trebuie să participe, ce valoare creează soluția, cum va fi măsurată circularitatea și cum sunt distribuite responsabilitățile.",
        hy: "Circular Pilot Canvas-ն օգնում է ձեր թիմին խոստումնալից շրջանաձև հայեցակարգը վերածել կառուցվածքային իրական աշխարհի օդաչուի: Այն նախագծված է երեք հիմնարար հարցի շուրջ. կա՞ լուծման պահանջարկ: Արժե՞ արդյոք շրջանաձև բիզնես մոդելը: Իսկ ներգրավված կազմակերպությունները կարո՞ղ են իրականում մատուցել այն: || Կտավը միավորում է այս հարցերը արժեքի առաջարկի, շրջանաձև բիզնես մոդելի և իրագործելիության և պատրաստակամության վերաբերյալ: Թիմը սահմանում է, թե ինչ է փորձարկելու օդաչուն, ով պետք է մասնակցի, ինչ արժեք է ստեղծում լուծումը, ինչպես է չափվելու շրջանաձևությունը և ինչպես են բաշխվում պարտականությունները:"
      },
    journeyPhases: ['Evaluate','Implement'],
    placements: {
      phaseSections: ['evaluate:test-and-pilot'],
      sectors: ['construction'],
      sectorSections: ['construction:relevant-tools']
    },
    sector: ['Cross-sector', 'Construction', 'Manufacturing'],
    effort: 'Medium',
    language: 'English',
    provider: 'Nordic Circularity Piloting Program / Combient Pure',
    access: 'Free',
    timeRequired:
      {
        en: "Approximately 1.5 to 2 hours for an initial pilot-planning workshop.",
        uk: "Приблизно 1,5-2 години для початкового семінару з планування пілотного проекту.",
        ro: "Aproximativ 1,5 până la 2 ore pentru un atelier inițial de planificare pilot.",
        hy: "Մոտավորապես 1,5-ից 2 ժամ նախնական փորձնական պլանավորման սեմինարի համար:"
      },
    preparationNeeded:
      {
        en: "A circular solution selected for further development. Bring together the organisations or functions needed to deliver the pilot and prepare initial information on customers, partners, benefits, costs and operational requirements.",
        uk: "Кругове рішення, обране для подальшого розвитку. Об’єднайте організації або функції, необхідні для виконання пілотного проекту, і підготуйте початкову інформацію про клієнтів, партнерів, переваги, витрати та операційні вимоги.",
        ro: "O soluție circulară selectată pentru dezvoltare ulterioară. Reunește organizațiile sau funcțiile necesare pentru a livra pilotul și pregăti informații inițiale despre clienți, parteneri, beneficii, costuri și cerințe operaționale.",
        hy: "Հետագա զարգացման համար ընտրված շրջանաձև լուծում: Միավորել կազմակերպությունները կամ գործառույթները, որոնք անհրաժեշտ են փորձնական առաքման համար և նախապատրաստել նախնական տեղեկատվություն հաճախորդների, գործընկերների, օգուտների, ծախսերի և գործառնական պահանջների վերաբերյալ:"
      },
    output:
      {
        en: "A structured pilot plan covering what will be tested, stakeholders, expected benefits, circularity goals, costs, risks, roles, success criteria, and timeline.",
        uk: "Структурований пілотний план, який охоплює те, що буде перевірено, зацікавлених сторін, очікувані вигоди, цілі циркулярності, витрати, ризики, ролі, критерії успіху та графік.",
        ro: "Un plan pilot structurat care acoperă ceea ce va fi testat, părțile interesate, beneficiile așteptate, obiectivele de circularitate, costurile, riscurile, rolurile, criteriile de succes și calendarul.",
        hy: "Կառուցվածքային փորձնական պլան, որը ներառում է այն, ինչ կփորձարկվի, շահագրգիռ կողմերը, ակնկալվող օգուտները, շրջանաձևության նպատակները, ծախսերը, ռիսկերը, դերերը, հաջողության չափանիշները և ժամանակացույցը:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that want to test a circular product, service or business model with customers and value-chain partners under real-world conditions.",
        uk: "Малі та середні підприємства (МСП), які хочуть протестувати циркулярний продукт, послугу чи бізнес-модель із клієнтами та партнерами в ланцюжку створення вартості в реальних умовах.",
        ro: "Întreprinderi mici și mijlocii (IMM-uri) care doresc să testeze un produs circular, un serviciu sau un model de afaceri cu clienții și partenerii lanțului valoric în condiții reale.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք ցանկանում են իրական աշխարհի պայմաններում փորձարկել շրջանաձև արտադրանք, ծառայություն կամ բիզնես մոդել հաճախորդների և արժեշղթայի գործընկերների հետ:"
      },
    format: {
      en: "Printable canvas",
      uk: "Канва для друку",
      ro: "Canvas imprimabil",
      hy: "Տպվող կտավ"
    },
    toolLink: 'https://assets.ctfassets.net/a2tjr1gs85zs/7nITcohRhMxFY7aLd3KlH4/668c49380f237b3e326d996058355437/Circular_Piloting_Canvas.pdf'
  },
  {
    id: 'resource-092',
    slug: 'prioritising-circular-solutions',
    title: 'Prioritising Circular Solutions',
    description:
      {
        en: "To identify which circular ideas should be taken forward first.",
        uk: "Щоб визначити, які циклічні ідеї слід просувати в першу чергу.",
        ro: "Pentru a identifica ce idei circulare ar trebui promovate mai întâi.",
        hy: "Որոշելու համար, թե որ շրջանաձև գաղափարները պետք է առաջ տանել առաջինը:"
      },
    about:
      {
        en: "The Prioritising Circular Solutions tool helps your team move from a long list of circular ideas to a smaller number of priorities for further development. It is particularly useful after an ideation workshop, when many possible actions have been generated but it is not yet clear which ones deserve attention first. || The team consolidates the ideas and positions them on a visual matrix according to expected impact, contribution or effort required and timing. The result is a practical first prioritisation that can feed into business-case development, feasibility assessment or implementation planning.",
        uk: "Інструмент Prioritizing Circular Solutions допомагає вашій команді перейти від довгого списку циклічних ідей до меншої кількості пріоритетів для подальшого розвитку. Це особливо корисно після семінару з ідей, коли було згенеровано багато можливих дій, але ще не ясно, які з них заслуговують на увагу першими. || Команда консолідує ідеї та розміщує їх на візуальній матриці відповідно до очікуваного впливу, внеску чи необхідних зусиль і часу. Результатом є практичне першочергове визначення пріоритетів, яке можна використати для розробки бізнес-кейсів, оцінки здійсненності або планування впровадження.",
        ro: "Instrumentul de prioritizare a soluțiilor circulare vă ajută echipa să treacă de la o listă lungă de idei circulare la un număr mai mic de priorități pentru dezvoltare ulterioară. Este deosebit de util după un atelier de ideație, când au fost generate multe acțiuni posibile, dar nu este încă clar care dintre ele merită mai întâi atenție. || Echipa consolidează ideile și le poziționează pe o matrice vizuală în funcție de impactul așteptat, contribuția sau efortul necesar și calendarul. Rezultatul este o primă prioritizare practică, care poate alimenta dezvoltarea unui caz de afaceri, evaluarea fezabilității sau planificarea implementării.",
        hy: "The Prioritizing Circular Solutions գործիքն օգնում է ձեր թիմին շրջանաձև գաղափարների երկար ցուցակից անցնել ավելի փոքր թվով առաջնահերթությունների հետագա զարգացման համար: Այն հատկապես օգտակար է մտահղացման սեմինարից հետո, երբ ստեղծվել են բազմաթիվ հնարավոր գործողություններ, բայց դեռ պարզ չէ, թե որոնք են առաջինն արժանի ուշադրության: || Թիմը համախմբում է գաղափարները և դրանք տեղադրում տեսողական մատրիցի վրա՝ ըստ ակնկալվող ազդեցության, ներդրման կամ պահանջվող ջանքերի և ժամանակի: Արդյունքը գործնական առաջին առաջնահերթություն է, որը կարող է սնվել բիզնեսի զարգացման, տեխնիկատնտեսական հիմնավորման կամ իրականացման պլանավորման մեջ:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:shortlist-strategies'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'EIS Circular Design Toolbox / HI Advisory',
    access: 'Free',
    timeRequired: {
      en: "45-60 minutes",
      uk: "45-60 хвилин",
      ro: "45-60 minute",
      hy: "45-60 րոպե"
    },
    preparationNeeded:
      {
        en: "Bring the circular ideas or solutions generated during earlier analysis or ideation activities. Remove obvious duplicates and formulate each idea clearly enough for comparison.",
        uk: "Принесіть циклічні ідеї чи рішення, згенеровані під час попереднього аналізу чи діяльності з розробки ідей. Видаліть очевидні дублікати та сформулюйте кожну ідею достатньо чітко для порівняння.",
        ro: "Aduceți ideile circulare sau soluțiile generate în timpul activităților anterioare de analiză sau ideare. Eliminați duplicatele evidente și formulați fiecare idee suficient de clar pentru comparație.",
        hy: "Բերեք շրջանաձև գաղափարներ կամ լուծումներ, որոնք առաջացել են ավելի վաղ վերլուծության կամ գաղափարի գործունեության ընթացքում: Հեռացրեք ակնհայտ կրկնօրինակները և ձևակերպեք յուրաքանչյուր գաղափար բավականին հստակ համեմատության համար:"
      },
    output:
      {
        en: "A visual prioritisation of circular solutions, including a small number of high-priority actions to take forward.",
        uk: "Візуальна пріоритезація циклічних рішень, включаючи невелику кількість високопріоритетних дій для подальшого виконання.",
        ro: "O prioritizare vizuală a soluțiilor circulare, inclusiv un număr mic de acțiuni cu prioritate înaltă de urmat.",
        hy: "Շրջանաձև լուծումների տեսողական առաջնահերթություն, ներառյալ առաջնահերթության փոքր թվով գործողություններ:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that have identified several possible circular actions and need a quick, collaborative method for agreeing what to focus on first.",
        uk: "Малі та середні підприємства (МСП), які визначили кілька можливих циклічних дій і потребують швидкого спільного методу для узгодження, на чому зосередитися в першу чергу.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care au identificat mai multe acțiuni circulare posibile și au nevoie de o metodă rapidă, de colaborare, pentru a conveni pe ce să se concentreze mai întâi.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք հայտնաբերել են մի քանի հնարավոր շրջանաձև գործողություններ և արագ, համագործակցային մեթոդի կարիք ունեն՝ համաձայնեցնելու, թե ինչի վրա պետք է առաջին հերթին կենտրոնանալ:"
      },
    format: {
      en: "Printable prioritisation matrix",
      uk: "Матриця пріоритизації для друку",
      ro: "Matrice de prioritizare imprimabilă",
      hy: "Տպվող առաջնահերթությունների մատրիցա"
    },
    toolLink: 'https://eis.ee/wp-content/uploads/2025/09/circular-design-tool-11_prioritising-circular-solutions_a2.pdf'
  },
  {
    id: 'resource-093',
    slug: 'authorized-waste-operator-search',
    title: 'Căutare operatori autorizați pe tip de deșeu',
    description:
      {
        en: "Interactive Power BI dashboard for finding licensed waste and recycling operators by waste type.",
        uk: "Інтерактивна інформаційна панель Power BI для пошуку ліцензованих операторів утилізації та переробки відходів за типом відходів.",
        ro: "Tabloul de bord interactiv Power BI pentru găsirea operatorilor autorizați de deșeuri și reciclare pe tip de deșeu.",
        hy: "Power BI-ի ինտերակտիվ վահանակ՝ ըստ թափոնների տեսակի լիցենզավորված թափոնների և վերամշակման օպերատորներին գտնելու համար:"
      },
    about:
      {
        en: "Built under the Waste Statistics - Key Facilitator for the Circular Economy project, this dashboard pulls data from the Environment Agency on authorised waste management operators, their permits and contact details. Users can search by waste type to identify licensed recyclers or collectors and access relevant permit documents.",
        uk: "Ця інформаційна панель, створена в рамках проекту Waste Statistics - Key Facilitator for the Circular Economy, збирає дані з Агентства з навколишнього середовища про авторизованих операторів поводження з відходами, їхні дозволи та контактну інформацію. Користувачі можуть шукати за типом відходів, щоб ідентифікувати ліцензованих переробників або збирачів і отримати доступ до відповідних дозвільних документів.",
        ro: "Construit în cadrul proiectului Statistica deșeurilor - Facilitator cheie pentru proiectul economiei circulare, acest tablou de bord extrage date de la Agenția de Mediu despre operatorii autorizați de gestionare a deșeurilor, autorizațiile și datele de contact ale acestora. Utilizatorii pot căuta după tipul de deșeuri pentru a identifica reciclatorii sau colectorii autorizați și pentru a accesa documentele de autorizare relevante.",
        hy: "Կառուցվել է «Թափոնների վիճակագրություն. Շրջանաձև տնտեսության հիմնական օժանդակող» ծրագրի ներքո՝ այս վահանակը շրջակա միջավայրի գործակալությունից հավաքում է տվյալներ թափոնների կառավարման լիազորված օպերատորների, նրանց թույլտվությունների և կոնտակտային տվյալների վերաբերյալ: Օգտատերերը կարող են որոնել ըստ թափոնների տեսակի՝ բացահայտելու լիցենզավորված վերամշակողներին կամ հավաքողներին և մուտք գործելու համապատասխան թույլտվության փաստաթղթեր:"
      },
    journeyPhases: ['Implement'],
    sector: ['Cross-sector', 'Waste Management', 'Recycling'],
    effort: 'Low',
    language: 'Romanian',
    provider: 'E-Circular, funded by the Austrian Development Agency (ADA/ADC)',
    access: 'Free',
    timeRequired: {
      en: "5-15 minutes per search",
      uk: "5-15 хвилин на один пошук",
      ro: "5-15 minute pentru fiecare căutare",
      hy: "5-15 րոպե յուրաքանչյուր որոնման համար"
    },
    preparationNeeded: {
      en: "Know the waste type or category you need to search for.",
      uk: "Знайте тип або категорію відходів, які потрібно знайти.",
      ro: "Cunoașteți tipul sau categoria de deșeuri pe care trebuie să o căutați.",
      hy: "Իմացեք թափոնի տեսակը կամ կատեգորիան, որը պետք է որոնել։"
    },
    output:
      {
        en: "A list of authorised operators with permit details and contact information per waste type.",
        uk: "Список уповноважених операторів з деталями дозволу та контактною інформацією для кожного типу відходів.",
        ro: "O listă a operatorilor autorizați cu detalii de autorizație și informații de contact pentru fiecare tip de deșeu.",
        hy: "Լիազորված օպերատորների ցանկ՝ թույլտվության մանրամասներով և կոնտակտային տվյալներով՝ ըստ թափոնների տեսակի:"
      },
    bestFor:
      {
        en: "Businesses, local authorities and citizens looking to identify a licensed recycler or waste operator for a specific waste stream.",
        uk: "Компанії, місцеві органи влади та громадяни, які шукають ліцензованого переробника або оператора відходів для певного потоку відходів.",
        ro: "Întreprinderi, autorități locale și cetățeni care doresc să identifice un reciclator autorizat sau un operator de deșeuri pentru un anumit flux de deșeuri.",
        hy: "Ձեռնարկությունները, տեղական իշխանությունները և քաղաքացիները, ովքեր ցանկանում են բացահայտել լիցենզավորված վերամշակողին կամ թափոնների օպերատորին որոշակի թափոնների հոսքի համար:"
      },
    format: {
      en: "Digital tool",
      uk: "Цифровий інструмент",
      ro: "Instrument digital",
      hy: "Թվային գործիք"
    },
    toolLink: 'https://e-circular.org/statistici/cautare-operatori-autorizatii/'
  },
  {
    id: 'resource-094',
    slug: 'organic-armenia-all-green-circular-economy',
    title: 'Organic Armenia - All Green Educational Platform',
    description:
      {
        en: "Webpage introducing circular economy principles and their link to organic agriculture, with a downloadable introductory booklet.",
        uk: "Веб-сторінка, на якій представлені принципи циклічної економіки та їх зв’язок з органічним сільським господарством, а також ознайомчий буклет, який можна завантажити.",
        ro: "Pagina web care prezintă principiile economiei circulare și legătura acestora cu agricultura ecologică, cu o broșură introductivă descărcabilă.",
        hy: "Վեբ էջ, որը ներկայացնում է շրջանաձև տնտեսության սկզբունքները և դրանց կապը օրգանական գյուղատնտեսության հետ՝ ներբեռնվող ներածական գրքույկով:"
      },
    about:
      {
        en: "Part of Organic Armenia's All Green educational platform, this page explains circular economy principles as an alternative to the linear produce-use-discard model and connects them to organic agriculture practices such as composting, returning crop residues to soil and renewable energy use. || It links to the Armenian booklet Circular Economy and Organic Agriculture: Their Connection, Composting, prepared under the EU-funded Circular Future programme in cooperation with Impact Hub Yerevan and Environment and Health NGO.",
        uk: "Ця сторінка є частиною освітньої платформи All Green від Organic Armenia. Ця сторінка пояснює принципи циклічної економіки як альтернативу лінійній моделі виробництва-використання-викидання та пов’язує їх із методами органічного сільського господарства, такими як компостування, повернення рослинних залишків у ґрунт та використання відновлюваної енергії. || Це посилання на вірменський буклет «Циркулярна економіка та органічне сільське господарство: їх зв’язок, компостування», підготовлений у рамках фінансованої ЄС програми Circular Future у співпраці з Impact Hub Yerevan та НУО «Навколишнє середовище та здоров’я».",
        ro: "Parte a platformei educaționale All Green a Organic Armenia, această pagină explică principiile economiei circulare ca o alternativă la modelul liniar produs-utilizare-aruncare și le conectează la practicile agriculturii organice, cum ar fi compostarea, returnarea reziduurilor de culturi în sol și utilizarea energiei regenerabile. || Se leagă de broșura armeană Circular Economy and Organic Agriculture: Their Connection, Composting, pregătită în cadrul programului Circular Future, finanțat de UE, în cooperare cu Impact Hub Yerevan și ONG-ul pentru mediu și sănătate.",
        hy: "Organic Armenia-ի All Green կրթական հարթակի մաս՝ այս էջը բացատրում է շրջանաձև տնտեսության սկզբունքները՝ որպես այլընտրանք արտադրություն-օգտագործում-չեղարկում գծային մոդելին և կապում դրանք օրգանական գյուղատնտեսության պրակտիկաների հետ, ինչպիսիք են կոմպոստացումը, բերքի մնացորդները հող վերադարձնելը և վերականգնվող էներգիայի օգտագործումը: || Այն կապվում է «Շրջանաձև տնտեսություն և օրգանական գյուղատնտեսություն. դրանց միացում, կոմպոստացում» գրքույկին, որը պատրաստվել է ԵՄ կողմից ֆինանսավորվող «Շրջանային ապագա» ծրագրի շրջանակներում՝ «Իմփաքթ Հաբ Երևան»-ի և «Շրջակա միջավայր և առողջություն» ՀԿ-ի հետ համատեղ:"
      },
    journeyPhases: ['Learn'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'Low',
    language: 'English, Armenian',
    provider:
      'Organic Armenia Agricultural Association NGO; booklet co-funded by the European Union through CirculUP!',
    access: 'Free',
    timeRequired: {
      en: "20-30 minutes",
      uk: "20-30 хвилин",
      ro: "20-30 minute",
      hy: "20-30 րոպե"
    },
    preparationNeeded: {
      en: "None",
      uk: "Жодного",
      ro: "Nici unul",
      hy: "Ոչ մեկը"
    },
    output: {
      en: "Introductory resource and downloadable booklet",
      uk: "Вступний ресурс і завантажувана брошура",
      ro: "Resursă introductivă și broșură descărcabilă",
      hy: "Ներածական ռեսուրս և ներբեռնվող գրքույկ"
    },
    bestFor:
      {
        en: "Farmers, smallholders and agri-businesses new to circular economy concepts, particularly in organic and agricultural value chains.",
        uk: "Фермери, дрібні власники та агробізнеси, які не знайомі з концепціями циклічної економіки, зокрема в органічних і сільськогосподарських ланцюгах створення вартості.",
        ro: "Fermierii, micii fermieri și agro-afacerile nou în conceptele economiei circulare, în special în lanțurile valorice organice și agricole.",
        hy: "Ֆերմերները, մանր սեփականատերերը և ագրոբիզնեսները նոր են շրջագծային տնտեսության հայեցակարգերում, մասնավորապես օրգանական և գյուղատնտեսական արժեքների շղթաներում:"
      },
    format: {
      en: "Downloadable PDF",
      uk: "PDF для завантаження",
      ro: "PDF descărcabil",
      hy: "Ներբեռնվող PDF"
    },
    toolLink: 'https://www.organicarmenia.bio/en/all-green/circular-economy'
  },
  {
    id: 'resource-095',
    slug: 'organic-armenia-training',
    title: 'Organic Armenia - Training',
    description:
      {
        en: "Directory of training courses on organic agriculture and circular economy, including a dedicated circular economy course.",
        uk: "Довідник навчальних курсів з органічного сільського господарства та економіки замкнутого циклу, включаючи спеціальний курс економіки замкнутого циклу.",
        ro: "Director de cursuri de formare privind agricultura ecologică și economia circulară, inclusiv un curs dedicat economiei circulare.",
        hy: "Օրգանական գյուղատնտեսության և շրջանաձև տնտեսության վերաբերյալ վերապատրաստման դասընթացների տեղեկատու, ներառյալ շրջանաձև տնտեսության հատուկ դասընթաց:"
      },
    about:
      {
        en: "Organic Armenia Training lists professional development courses run by Organic Armenia. It includes Organic Agriculture: From Introduction to Practical Application and Circular Future, an online course covering circular economy principles, zero-waste approaches and composting or vermicomposting as circular economy examples in organic production. || Some listed courses may show as completed, so the page can function as both a course catalogue and a place to check whether new cohorts are planned.",
        uk: "Organic Armenia Training містить перелік курсів професійного розвитку, які проводить Organic Armenia. Він включає в себе «Органічне сільське господарство: від вступу до практичного застосування та циклічного майбутнього», онлайн-курс, що охоплює принципи циклічної економіки, безвідходні підходи та компостування або вермікомпостування як приклади циклічної економіки в органічному виробництві. || Деякі перелічені курси можуть відображатися як завершені, тому сторінка може функціонувати як каталог курсів і місце, де можна перевірити, чи заплановані нові когорти.",
        ro: "Organic Armenia Training listează cursurile de dezvoltare profesională organizate de Organic Armenia. Acesta include Agricultura ecologică: de la introducere la aplicarea practică și viitorul circular, un curs online care acoperă principiile economiei circulare, abordările zero deșeuri și compostarea sau vermicompostarea ca exemple de economie circulară în producția ecologică. || Unele cursuri enumerate pot apărea ca finalizate, astfel încât pagina poate funcționa atât ca catalog de cursuri, cât și ca loc pentru a verifica dacă sunt planificate noi cohorte.",
        hy: "Օրգանիկ Արմենիա Թրեյնինգում ներկայացված են Օրգանիկ Արմենիայի կողմից անցկացվող մասնագիտական ​​զարգացման դասընթացները: Այն ներառում է Օրգանական գյուղատնտեսություն. ներածությունից մինչև գործնական կիրառություն և շրջանաձև ապագա, առցանց դասընթաց, որն ընդգրկում է շրջանաձև տնտեսության սկզբունքները, զրոյական թափոնների մոտեցումները և կոմպոստավորումը կամ վերմիկոմպոստավորումը՝ որպես շրջանաձև տնտեսության օրինակներ օրգանական արտադրության մեջ: || Թվարկված որոշ դասընթացներ կարող են ցուցադրվել որպես ավարտված, այնպես որ էջը կարող է գործել և որպես դասընթացների կատալոգ և տեղ ստուգելու, թե արդյոք նախատեսվում են նոր խմբեր:"
      },
    journeyPhases: ['Learn'],
    placements: {
      sectors: ['food-and-agriculture'],
      sectorSections: ['food-and-agriculture:relevant-tools']
    },
    sector: 'Food and Agriculture',
    effort: 'High',
    language: 'Armenian, English',
    provider: 'Organic Armenia Agricultural Association NGO',
    access: 'Free',
    timeRequired:
      {
        en: "Multi-week hybrid programme for organic agriculture; shorter online format for the Circular Future course.",
        uk: "Багатотижнева гібридна програма для органічного сільського господарства; коротший онлайн-формат для курсу Circular Future.",
        ro: "Program hibrid de mai multe săptămâni pentru agricultura ecologică; format online mai scurt pentru cursul Circular Future.",
        hy: "Օրգանական գյուղատնտեսության բազմաշաբաթյա հիբրիդային ծրագիր; ավելի կարճ առցանց ձևաչափ Circular Future դասընթացի համար:"
      },
    preparationNeeded: {
      en: "None to browse; registration or interest submission may be needed to join a future cohort.",
      uk: "Для перегляду нічого не потрібно; для участі в майбутній когорті може знадобитися реєстрація або подання заявки про зацікавленість.",
      ro: "Nu este nevoie de nimic pentru a explora; poate fi necesară înregistrarea sau transmiterea interesului pentru a participa la o cohortă viitoare.",
      hy: "Դիտելու համար նախապատրաստություն անհրաժեշտ չէ․ ապագա խմբին միանալու համար կարող է պահանջվել գրանցում կամ հետաքրքրվածության հայտի ներկայացում։"
    },
    output: {
      en: "Structured training curricula and certificates of participation for completed cohorts",
      uk: "Структуровані навчальні програми та сертифікати участі для завершених когорт",
      ro: "Programe de formare structurate și certificate de participare pentru cohortele finalizate",
      hy: "Կառուցվածքային ուսումնական ծրագրեր և մասնակցության վկայականներ ավարտված խմբերի համար"
    },
    bestFor:
      {
        en: "Farmers, smallholders and organisations wanting structured circular economy and organic agriculture training in Armenia.",
        uk: "Фермери, дрібні власники та організації, які бажають отримати структуровану циркулярну економіку та навчання органічному сільському господарству у Вірменії.",
        ro: "Fermierii, micii agricultori și organizații care doresc o economie circulară structurată și formare în agricultură ecologică în Armenia.",
        hy: "Ֆերմերներ, մանր ֆերմերներ և կազմակերպություններ, ովքեր ցանկանում են կառուցվածքային շրջանաձև տնտեսություն և օրգանական գյուղատնտեսության ուսուցում Հայաստանում:"
      },
    format: {
      en: "Digital training catalogue",
      uk: "Цифровий каталог навчання",
      ro: "Catalog digital de formare",
      hy: "Թվային ուսումնական կատալոգ"
    },
    toolLink: 'https://www.organicarmenia.bio/en/all-green/trainings'
  },
  {
    id: 'resource-096',
    slug: 'stakeholder-value-mapping',
    title: 'Stakeholder Value Mapping',
    description:
      {
        en: "To understand what different stakeholders gain or lose from a circular solution and identify opportunities for creating shared value.",
        uk: "Щоб зрозуміти, що отримують або втрачають різні зацікавлені сторони від кругового рішення, і визначити можливості для створення спільної цінності.",
        ro: "Pentru a înțelege ce câștigă sau pierde diferitele părți interesate dintr-o soluție circulară și să identifice oportunități de creare a valorii comune.",
        hy: "Հասկանալ, թե տարբեր շահագրգիռ կողմեր ​​ինչ են շահում կամ կորցնում շրջանաձև լուծումից և բացահայտել ընդհանուր արժեք ստեղծելու հնարավորությունները:"
      },
    about:
      {
        en: "Stakeholder Value Mapping helps your team explore what a circular transition means for the different stakeholders involved. A circular solution may create significant benefits for your company while requiring customers, suppliers or other partners to change how they work. Understanding what motivates these actors, and where they may experience costs or disadvantages, can therefore be critical for turning a circular idea into a workable value chain. || The exercise compares the current situation with the proposed new circular value chain. For each important stakeholder, the team first identifies the value they currently receive from the company. This can include tangible value such as products, services or financial benefits, as well as less tangible benefits such as knowledge, innovation opportunities or stronger business relationships. || The tool is particularly useful after Business Ecosystem Mapping, another tool provided by CIRCit, because CIRCit recommends transferring the most important stakeholders from the ecosystem map into the Stakeholder Value Mapping exercise.",
        uk: "Stakeholder Value Mapping допомагає вашій команді дослідити, що означає циклічний перехід для різних зацікавлених сторін. Циркулярне рішення може створити значні переваги для вашої компанії, вимагаючи від клієнтів, постачальників та інших партнерів змінити принципи їх роботи. Тому розуміння того, що мотивує цих учасників і де вони можуть зазнати витрат або недоліків, може мати вирішальне значення для перетворення циклічної ідеї на працездатний ланцюжок створення вартості. || Вправа порівнює поточну ситуацію із запропонованим новим ланцюжком вартості. Для кожного важливого стейкхолдера команда спочатку визначає цінність, яку вони зараз отримують від компанії. Це може включати матеріальну цінність, таку як продукти, послуги чи фінансові вигоди, а також менш відчутні вигоди, такі як знання, інноваційні можливості чи міцні ділові зв’язки. || Інструмент особливо корисний після картографування бізнес-екосистеми, ще одного інструменту, наданого CIRCit, оскільки CIRCit рекомендує перенести найважливіших зацікавлених сторін із карти екосистеми до вправи Stakeholder Value Mapping.",
        ro: "Stakeholder Value Mapping vă ajută echipa să exploreze ce înseamnă o tranziție circulară pentru diferitele părți interesate implicate. O soluție circulară poate crea beneficii semnificative pentru compania dvs., solicitând în același timp clienților, furnizorilor sau altor parteneri să schimbe modul în care funcționează. Înțelegerea a ceea ce motivează acești actori și unde pot întâmpina costuri sau dezavantaje poate fi, prin urmare, esențială pentru transformarea unei idei circulare într-un lanț valoric viabil. || Exercițiul compară situația actuală cu noul lanț valoric circular propus. Pentru fiecare parte interesată importantă, echipa identifică mai întâi valoarea pe care o primesc în prezent de la companie. Aceasta poate include valoare tangibilă, cum ar fi produse, servicii sau beneficii financiare, precum și beneficii mai puțin tangibile, cum ar fi cunoștințe, oportunități de inovare sau relații de afaceri mai puternice. || Instrumentul este deosebit de util după Business Ecosystem Mapping, un alt instrument oferit de CIRCit, deoarece CIRCit recomandă transferul celor mai importanți factori interesați de pe harta ecosistemului în exercițiul Stakeholder Value Mapping.",
        hy: "Շահագրգիռ կողմերի արժեքի քարտեզագրումն օգնում է ձեր թիմին ուսումնասիրել, թե ինչ է նշանակում շրջանաձև անցում ներգրավված տարբեր շահագրգիռ կողմերի համար: Շրջանաձև լուծումը կարող է զգալի օգուտներ ստեղծել ձեր ընկերության համար՝ միաժամանակ պահանջելով հաճախորդների, մատակարարների կամ այլ գործընկերների փոխելու իրենց աշխատանքը: Հասկանալը, թե ինչն է դրդում այս դերակատարներին, և որտեղ նրանք կարող են ունենալ ծախսեր կամ թերություններ, կարող է կարևոր լինել շրջանաձև գաղափարը գործունակ արժեքային շղթայի վերածելու համար: || Վարժությունը համեմատում է ներկա իրավիճակը առաջարկվող նոր շրջանաձև արժեշղթայի հետ: Յուրաքանչյուր կարևոր շահագրգիռ կողմի համար թիմը նախ բացահայտում է այն արժեքը, որը ներկայումս ստանում է ընկերությունից: Սա կարող է ներառել շոշափելի արժեքներ, ինչպիսիք են ապրանքները, ծառայությունները կամ ֆինանսական օգուտները, ինչպես նաև ավելի քիչ շոշափելի օգուտներ, ինչպիսիք են գիտելիքը, նորարարության հնարավորությունները կամ ավելի ամուր գործարար հարաբերությունները: || Գործիքը հատկապես օգտակար է Business Ecosystem Mapping-ից հետո, որը մեկ այլ գործիք է տրամադրվել CIRCit-ի կողմից, քանի որ CIRCit-ը խորհուրդ է տալիս էկոհամակարգի քարտեզից ամենակարևոր շահագրգիռ կողմերին տեղափոխել Շահագրգիռ կողմերի արժեքների քարտեզագրման վարժություն:"
      },
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit',
    access: 'Free',
    timeRequired:
      {
        en: "60-90 minutes as a starting point, depending on the number of stakeholders being assessed.",
        uk: "60-90 хвилин як початкова точка, залежно від кількості зацікавлених сторін, що оцінюються.",
        ro: "60-90 de minute ca punct de plecare, în funcție de numărul de părți interesate evaluate.",
        hy: "60-90 րոպե՝ որպես ելակետ՝ կախված գնահատվող շահագրգիռ կողմերի թվից:"
      },
    preparationNeeded:
      {
        en: "Ideally complete a Business Ecosystem Map first and select the stakeholders most relevant to the proposed transition. Bring together people who understand customers, suppliers, operations and business relationships. Include perspectives beyond immediate commercial partners where relevant, including society and the environment.",
        uk: "В ідеалі спочатку заповніть карту бізнес-екосистеми та виберіть зацікавлених сторін, які найбільше стосуються запропонованого переходу. Зберіть разом людей, які розуміють клієнтів, постачальників, операції та ділові відносини. Включіть перспективи за межі безпосередніх комерційних партнерів, де це необхідно, включаючи суспільство та навколишнє середовище.",
        ro: "În mod ideal, completați mai întâi o hartă a ecosistemului de afaceri și selectați părțile interesate cele mai relevante pentru tranziția propusă. Reunește oameni care înțeleg clienții, furnizorii, operațiunile și relațiile de afaceri. Includeți perspective dincolo de partenerii comerciali direcți, acolo unde este relevant, inclusiv societatea și mediul.",
        hy: "Իդեալական է, նախ լրացրեք Բիզնեսի էկոհամակարգի քարտեզը և ընտրեք առաջարկվող անցմանը առավել համապատասխան շահագրգիռ կողմերին: Համախմբեք մարդկանց, ովքեր հասկանում են հաճախորդներին, մատակարարներին, գործառնությունները և գործարար հարաբերությունները: Ներառեք հեռանկարներ անմիջական առևտրային գործընկերներից դուրս, որտեղ տեղին է, ներառյալ հասարակությունը և շրջակա միջավայրը:"
      },
    output:
      {
        en: "A structured overview of value currently created for each stakeholder, unmet needs, existing pain points, missed or destroyed value, new value opportunities, stakeholders that may lose out and areas where interests can be aligned.",
        uk: "Структурований огляд цінності, створеної на даний момент для кожного стейкхолдера, незадоволених потреб, існуючих проблемних точок, втраченої або знищеної цінності, нових можливостей цінності, стейкхолдерів, які можуть програти, і сфер, де можна узгодити інтереси.",
        ro: "O imagine de ansamblu structurată a valorii create în prezent pentru fiecare parte interesată, a nevoilor nesatisfăcute, a punctelor dureroase existente, a valorii pierdute sau distruse, a noilor oportunități de valoare, a părților interesate care pot pierde și zonele în care interesele pot fi aliniate.",
        hy: "Յուրաքանչյուր շահագրգիռ կողմի համար ներկայումս ստեղծված արժեքի կառուցվածքային ակնարկ, չբավարարված կարիքներ, առկա ցավոտ կետեր, բաց թողնված կամ ոչնչացված արժեք, նոր արժեքային հնարավորություններ, շահագրգիռ կողմեր, որոնք կարող են կորցնել և ոլորտներ, որտեղ կարող են համապատասխանեցնել շահերը:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) developing circular solutions that require customers, suppliers or partners to participate or change their behaviour, particularly where the benefits and responsibilities are distributed across several organisations.",
        uk: "Малі та середні підприємства (МСП), які розробляють циклічні рішення, які вимагають від клієнтів, постачальників або партнерів участі або зміни їхньої поведінки, особливо якщо вигоди та обов’язки розподілені між кількома організаціями.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) dezvoltă soluții circulare care solicită clienților, furnizorilor sau partenerilor să participe sau să își schimbe comportamentul, în special atunci când beneficiile și responsabilitățile sunt distribuite în mai multe organizații.",
        hy: "Փոքր և միջին ձեռնարկությունները (ՓՄՁ) մշակում են շրջանաձև լուծումներ, որոնք պահանջում են հաճախորդների, մատակարարների կամ գործընկերների մասնակցություն կամ փոխել իրենց վարքագիծը, հատկապես, երբ օգուտներն ու պարտականությունները բաշխված են մի քանի կազմակերպությունների միջև:"
      },
    format: {
      en: "Printable stakeholder mapping canvas",
      uk: "Канва картування зацікавлених сторін для друку",
      ro: "Canvas imprimabil pentru cartografierea părților interesate",
      hy: "Շահագրգիռ կողմերի քարտեզագրման տպվող կտավ"
    },
    toolLink: 'https://circitnord.com/tools/stakeholder-value-mapping/'
  },
  {
    id: 'resource-097',
    slug: 'business-ecosystem-mapping',
    title: 'Business Ecosystem Mapping',
    description:
      {
        en: "To understand the stakeholders, relationships and flows surrounding your business.",
        uk: "Щоб зрозуміти зацікавлені сторони, відносини та потоки, що оточують ваш бізнес.",
        ro: "Pentru a înțelege părțile interesate, relațiile și fluxurile din jurul afacerii dvs.",
        hy: "Հասկանալու շահագրգիռ կողմերին, հարաբերություններն ու հոսքերը, որոնք շրջապատում են ձեր բիզնեսը:"
      },
    about:
      {
        en: "Business Ecosystem Mapping helps your team understand the network of organisations and other actors that influence how your business currently operates. This is particularly important when developing circular solutions, because keeping products and materials in circulation often requires new forms of cooperation across suppliers, customers, service providers and other stakeholders. || Stakeholders are positioned according to how closely they are connected to the company. The team maps important resource and service flows, financial flows and information flows between the different actors. Looking at these relationships together can reveal dependencies, missing connections and stakeholders that may either support or create barriers to a circular transition. || The resulting ecosystem map provides a common starting point for discussing which relationships may need to change, which new actors could be required, and where collaboration will be particularly important for implementing a circular solution. CIRCit recommends involving participants from different parts of the company so that the map reflects different perspectives on the existing ecosystem. To continue and expand the mapping on stakeholders, you can use the Stakeholder Value Mapping tool by the same provider.",
        uk: "Картування бізнес-екосистеми допомагає вашій команді зрозуміти мережу організацій та інших учасників, які впливають на те, як зараз працює ваш бізнес. Це особливо важливо при розробці циркулярних рішень, оскільки підтримка продуктів і матеріалів в обігу часто вимагає нових форм співпраці між постачальниками, клієнтами, постачальниками послуг та іншими зацікавленими сторонами. || Зацікавлені сторони розташовуються відповідно до того, наскільки тісно вони пов'язані з компанією. Команда планує важливі потоки ресурсів і послуг, фінансові потоки та потоки інформації між різними учасниками. Погляд на ці відносини разом може виявити залежності, відсутні зв’язки та зацікавлених сторін, які можуть або підтримувати, або створювати перешкоди для циклічного переходу. || Отримана карта екосистеми забезпечує загальну відправну точку для обговорення того, які стосунки, можливо, потрібно змінити, які нові учасники можуть знадобитися, і де співпраця буде особливо важливою для реалізації циклічного рішення. CIRCit рекомендує залучати учасників з різних частин компанії, щоб карта відображала різні погляди на існуючу екосистему. Щоб продовжити та розширити відображення зацікавлених сторін, ви можете скористатися інструментом відображення цінності зацікавлених сторін того ж постачальника.",
        ro: "Business Ecosystem Mapping vă ajută echipa să înțeleagă rețeaua de organizații și alți actori care influențează modul în care funcționează afacerea dvs. în prezent. Acest lucru este deosebit de important atunci când se dezvoltă soluții circulare, deoarece menținerea produselor și materialelor în circulație necesită adesea noi forme de cooperare între furnizori, clienți, furnizori de servicii și alte părți interesate. || Părțile interesate sunt poziționate în funcție de cât de strâns sunt conectate la companie. Echipa cartografiază fluxurile importante de resurse și servicii, fluxurile financiare și fluxurile de informații între diferiți actori. Privind împreună aceste relații, poate dezvălui dependențe, conexiuni lipsă și părți interesate care ar putea fie să susțină, fie să creeze bariere în calea tranziției circulare. || Harta ecosistemului rezultată oferă un punct de plecare comun pentru a discuta despre relațiile care ar putea trebui schimbate, care actori noi ar putea fi necesari și unde colaborarea va fi deosebit de importantă pentru implementarea unei soluții circulare. CIRCit recomandă implicarea participanților din diferite părți ale companiei, astfel încât harta să reflecte perspective diferite asupra ecosistemului existent. Pentru a continua și a extinde maparea părților interesate, puteți utiliza instrumentul Stakeholder Value Mapping de la același furnizor.",
        hy: "Բիզնեսի էկոհամակարգի քարտեզագրումն օգնում է ձեր թիմին հասկանալ կազմակերպությունների և այլ դերակատարների ցանցը, որոնք ազդում են ձեր բիզնեսի ներկայիս գործունեության վրա: Սա հատկապես կարևոր է շրջանաձև լուծումներ մշակելիս, քանի որ ապրանքների և նյութերի շրջանառության մեջ պահելը հաճախ պահանջում է համագործակցության նոր ձևեր մատակարարների, հաճախորդների, ծառայություններ մատուցողների և այլ շահագրգիռ կողմերի միջև: || Շահագրգիռ կողմերը դիրքավորվում են ըստ ընկերության հետ սերտ կապի: Թիմը քարտեզագրում է կարևոր ռեսուրսների և ծառայությունների հոսքերը, ֆինանսական հոսքերը և տեղեկատվական հոսքերը տարբեր դերակատարների միջև: Այս հարաբերություններին միասին նայելը կարող է բացահայտել կախվածություններ, բացակայող կապեր և շահագրգիռ կողմեր, որոնք կարող են աջակցել կամ խոչընդոտներ ստեղծել շրջանաձև անցման համար: || Ստացված էկոհամակարգի քարտեզը ընդհանուր մեկնարկային կետ է տալիս քննարկելու, թե որ հարաբերությունները կարող են փոխվել, որ նոր դերակատարներ կարող են պահանջվել, և որտեղ համագործակցությունը հատկապես կարևոր կլինի շրջանաձև լուծում իրականացնելու համար: CIRCit-ը խորհուրդ է տալիս մասնակիցներին ներգրավել ընկերության տարբեր մասերից, որպեսզի քարտեզն արտացոլի գոյություն ունեցող էկոհամակարգի տարբեր տեսակետներ: Շահագրգիռ կողմերի վրա քարտեզագրումը շարունակելու և ընդլայնելու համար կարող եք օգտագործել նույն մատակարարի կողմից շահագրգիռ կողմերի արժեքի քարտեզագրման գործիքը:"
      },
    journeyPhases: ['Assess', 'Explore'],
    placements: {
      phaseSections: ['explore:shape-value-model'],
    },
    sector: 'Cross-sector',
    effort: 'Low',
    language: 'English',
    provider: 'CIRCit',
    access: 'Free',
    timeRequired:
      {
        en: "1 to 1.5 hours for a focused mapping workshop. More complex ecosystems may require additional research or follow-up.",
        uk: "Від 1 до 1,5 годин для цілеспрямованого семінару з картографування. Більш складні екосистеми можуть вимагати додаткових досліджень або подальшого спостереження.",
        ro: "1 până la 1,5 ore pentru un atelier de cartografiere concentrat. Ecosistemele mai complexe pot necesita cercetări suplimentare sau urmărire.",
        hy: "1-ից 1,5 ժամ կենտրոնացված քարտեզագրման սեմինարի համար: Ավելի բարդ էկոհամակարգերը կարող են պահանջել լրացուցիչ հետազոտություն կամ հետագա հետազոտություն:"
      },
    preparationNeeded:
      {
        en: "Prepare the stakeholder cards and a large working surface or digital whiteboard. It can also be useful to gather basic information beforehand about important suppliers, customers, partners and other organisations that influence the business.",
        uk: "Підготуйте картки зацікавлених сторін і велику робочу поверхню або цифрову дошку. Також може бути корисним заздалегідь зібрати основну інформацію про важливих постачальників, клієнтів, партнерів та інші організації, які впливають на бізнес.",
        ro: "Pregătiți cardurile părților interesate și o suprafață mare de lucru sau tablă digitală. De asemenea, poate fi util să adunați în prealabil informații de bază despre furnizori importanți, clienți, parteneri și alte organizații care influențează afacerea.",
        hy: "Պատրաստեք շահագրգիռ կողմերի քարտերը և մեծ աշխատանքային մակերեսը կամ թվային գրատախտակը: Կարող է նաև օգտակար լինել նախապես հիմնական տեղեկատվություն հավաքել կարևոր մատակարարների, հաճախորդների, գործընկերների և բիզնեսի վրա ազդող այլ կազմակերպությունների մասին:"
      },
    output:
      {
        en: "A visual overview of important stakeholders in and around the value chain, how closely they are connected to the company, resource and service flows, financial flows, information flows, relationships and dependencies that may support or hinder circular solutions.",
        uk: "Візуальний огляд важливих зацікавлених сторін у ланцюжку створення вартості та навколо нього, наскільки тісно вони пов’язані з компанією, потоки ресурсів і послуг, фінансові потоки, потоки інформації, відносини та залежності, які можуть підтримувати або перешкоджати циркулярним рішенням.",
        ro: "O privire de ansamblu vizuală a părților interesate importanți din și în jurul lanțului valoric, cât de strâns sunt conectați aceștia la companie, fluxurile de resurse și servicii, fluxurile financiare, fluxurile de informații, relațiile și dependențele care pot sprijini sau împiedica soluțiile circulare.",
        hy: "Արժեշղթայի և դրա շուրջ կարևոր շահագրգիռ կողմերի տեսողական ակնարկ, թե որքան սերտ են նրանք կապված ընկերության, ռեսուրսների և ծառայությունների հոսքերի, ֆինանսական հոսքերի, տեղեկատվության հոսքերի, հարաբերությունների և կախվածությունների հետ, որոնք կարող են աջակցել կամ խոչընդոտել շրջանաձև լուծումներին:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) exploring circular opportunities that depend on collaboration beyond their own organisation, for example take-back systems, reuse, repair, refurbishment, reverse logistics, secondary materials or service-based business models.",
        uk: "Малі та середні підприємства (МСП), які вивчають кругові можливості, які залежать від співпраці за межами їх власної організації, наприклад, системи повернення, повторного використання, ремонту, реконструкції, зворотної логістики, вторинних матеріалів або бізнес-моделей на основі послуг.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care explorează oportunități circulare care depind de colaborare dincolo de propria organizație, de exemplu sisteme de preluare, reutilizare, reparare, recondiționare, logistică inversă, materiale secundare sau modele de afaceri bazate pe servicii.",
        hy: "Փոքր և միջին ձեռնարկությունները (ՓՄՁ) ուսումնասիրում են շրջանաձև հնարավորություններ, որոնք կախված են իրենց կազմակերպությունից դուրս համագործակցությունից, օրինակ՝ հետ վերցնելու համակարգեր, վերաօգտագործում, վերանորոգում, վերանորոգում, հակադարձ լոգիստիկա, երկրորդական նյութեր կամ ծառայությունների վրա հիմնված բիզնես մոդելներ:"
      },
    format: {
      en: "Printable cards and workshop guide",
      uk: "Картки для друку та посібник для воркшопу",
      ro: "Carduri imprimabile și ghid pentru atelier",
      hy: "Տպվող քարտեր և աշխատաժողովի ուղեցույց"
    },
    toolLink: 'https://circitnord.com/tools/business-ecosystem-mapping/'
  },
  {
    id: 'resource-098',
    slug: 'build-run-prototypes',
    title: 'Build & Run Prototypes',
    description:
      {
        en: "To turn a circular idea into a tangible prototype and test it with users before investing in full development.",
        uk: "Щоб перетворити кругову ідею на реальний прототип і протестувати його з користувачами, перш ніж інвестувати в повну розробку.",
        ro: "Pentru a transforma o idee circulară într-un prototip tangibil și a o testa cu utilizatorii înainte de a investi în dezvoltarea completă.",
        hy: "Շրջանաձև գաղափարը շոշափելի նախատիպի վերածելու և այն օգտատերերի հետ փորձարկելու համար նախքան ամբողջական զարգացման մեջ ներդրումներ կատարելը:"
      },
    about:
      {
        en: "Build & Run Prototypes helps your team move from an idea to something that people can see, experience or interact with. Instead of developing a complete solution immediately, the method encourages you to create a simple and inexpensive version that is detailed enough to communicate the idea and generate useful feedback. || A prototype does not have to be a finished physical product. Depending on what you want to test, it could be a mock-up, model, storyboard, role play or another simple representation of the proposed product or service. This makes the method relevant for circular solutions such as a new repair service, take-back process, reusable packaging system, rental offer or redesigned customer journey, as well as for physical product concepts. || For circular solutions, prototyping is particularly valuable because it allows you to test important parts of the solution before committing significant resources. You can explore, for example, whether users understand a return process, whether a service is convenient to use, or whether a proposed interaction works as intended. Repeated testing helps reduce uncertainty and provides practical evidence about what should be changed before moving towards a larger pilot or implementation.",
        uk: "Build & Run Prototypes допомагає вашій команді перейти від ідеї до чогось, що люди можуть побачити, відчути або з чим взаємодіяти. Замість того, щоб негайно розробляти повне рішення, метод заохочує вас створити просту та недорогу версію, яка є достатньо детальною, щоб передати ідею та створити корисний відгук. || Прототип не обов’язково повинен бути готовим фізичним продуктом. Залежно від того, що ви хочете протестувати, це може бути макет, модель, розкадровка, рольова гра чи інше просте представлення запропонованого продукту чи послуги. Це робить метод актуальним для циклічних рішень, таких як нова послуга ремонту, процес повернення, багаторазова система упаковки, пропозиція оренди або перероблена подорож клієнта, а також для концепцій фізичних продуктів. || Для циклічних рішень створення прототипів є особливо цінним, оскільки воно дозволяє перевірити важливі частини рішення перед тим, як витрачати значні ресурси. Ви можете дослідити, наприклад, чи розуміють користувачі процес повернення, чи зручно користуватися послугою, чи запропонована взаємодія працює належним чином. Повторне тестування допомагає зменшити невизначеність і надає практичні докази того, що слід змінити, перш ніж переходити до більшого пілотного проекту або впровадження.",
        ro: "Build & Run Prototypes vă ajută echipa să treacă de la o idee la ceva cu care oamenii pot vedea, experimenta sau interacționa. În loc să dezvoltați imediat o soluție completă, metoda vă încurajează să creați o versiune simplă și ieftină, suficient de detaliată pentru a comunica ideea și a genera feedback util. || Un prototip nu trebuie să fie un produs fizic finit. În funcție de ceea ce doriți să testați, ar putea fi o machetă, model, storyboard, joc de rol sau altă simplă reprezentare a produsului sau serviciului propus. Acest lucru face ca metoda să fie relevantă pentru soluții circulare, cum ar fi un nou serviciu de reparații, un proces de preluare, un sistem de ambalare reutilizabil, o ofertă de închiriere sau o călătorie reproiectată a clienților, precum și pentru conceptele de produs fizic. || Pentru soluțiile circulare, prototiparea este deosebit de valoroasă, deoarece vă permite să testați părți importante ale soluției înainte de a angaja resurse semnificative. Puteți explora, de exemplu, dacă utilizatorii înțeleg un proces de returnare, dacă un serviciu este convenabil de utilizat sau dacă o interacțiune propusă funcționează conform intenției. Testele repetate ajută la reducerea incertitudinii și oferă dovezi practice despre ceea ce ar trebui schimbat înainte de a trece la un pilot sau implementare mai mare.",
        hy: "Build & Run Prototypes-ն օգնում է ձեր թիմին գաղափարից անցնել մի բանի, որը մարդիկ կարող են տեսնել, զգալ կամ շփվել: Անմիջապես ամբողջական լուծում մշակելու փոխարեն, մեթոդը խրախուսում է ձեզ ստեղծել պարզ և էժան տարբերակ, որը բավականաչափ մանրամասն է՝ գաղափարը փոխանցելու և օգտակար արձագանքներ առաջացնելու համար: || Նախատիպը պարտադիր չէ, որ լինի պատրաստի ֆիզիկական արտադրանք: Կախված նրանից, թե ինչ եք ուզում փորձարկել, դա կարող է լինել մոդել, մոդել, սյուժե, դերախաղ կամ առաջարկվող ապրանքի կամ ծառայության այլ պարզ ներկայացում: Սա մեթոդը դարձնում է արդիական շրջանաձև լուծումների համար, ինչպիսիք են վերանորոգման նոր ծառայությունը, հետ վերցնելու գործընթացը, բազմակի օգտագործման փաթեթավորման համակարգը, վարձակալության առաջարկը կամ վերանախագծված հաճախորդի ճամփորդությունը, ինչպես նաև ֆիզիկական արտադրանքի գաղափարների համար: || Շրջանաձև լուծումների համար նախատիպավորումը հատկապես արժեքավոր է, քանի որ այն թույլ է տալիս փորձարկել լուծման կարևոր մասերը նախքան նշանակալի ռեսուրսներ օգտագործելը: Դուք կարող եք ուսումնասիրել, օրինակ, արդյո՞ք օգտվողները հասկանում են վերադարձի գործընթացը, արդյոք ծառայությունը հարմար է օգտագործելու համար, թե արդյոք առաջարկվող փոխազդեցությունն աշխատում է այնպես, ինչպես նախատեսված է: Կրկնվող թեստավորումն օգնում է նվազեցնել անորոշությունը և գործնական ապացույցներ է տալիս այն մասին, թե ինչ պետք է փոխվի նախքան ավելի մեծ փորձնական կամ իրականացում անցնելը:"
      },
    journeyPhases: ['Evaluate'],
    placements: {
      phaseSections: ['evaluate:verify-potential'],
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Design Kit / IDEO.org',
    access: 'Free',
    timeRequired:
      {
        en: "Variable, from a few days to a few weeks, depending on what is being prototyped and how many rounds of testing and iteration are needed.",
        uk: "Змінний, від кількох днів до кількох тижнів, залежно від того, що створюється прототипом і скільки раундів тестування та ітерацій потрібно.",
        ro: "Variabil, de la câteva zile la câteva săptămâni, în funcție de ceea ce se prototipează și de câte runde de testare și iterare sunt necesare.",
        hy: "Փոփոխական՝ մի քանի օրից մինչև մի քանի շաբաթ՝ կախված նրանից, թե ինչն է նախատիպի ձևավորումը և թեստավորման ու կրկնման քանի փուլ է անհրաժեշտ:"
      },
    preparationNeeded:
      {
        en: "Start with a circular concept that you want to evaluate. Decide which part of the concept needs to be made tangible and who should test it. Gather simple materials for creating the prototype.",
        uk: "Почніть із кругової концепції, яку ви хочете оцінити. Вирішіть, яку частину концепції потрібно зробити відчутною і хто має її перевірити. Зберіть прості матеріали для створення прототипу.",
        ro: "Începeți cu un concept circular pe care doriți să îl evaluați. Decideți ce parte a conceptului trebuie făcută tangibilă și cine ar trebui să o testeze. Adunați materiale simple pentru crearea prototipului.",
        hy: "Սկսեք շրջանաձև հայեցակարգից, որը ցանկանում եք գնահատել: Որոշեք, թե հայեցակարգի որ մասը պետք է շոշափելի դարձնել և ով պետք է փորձարկի այն: Հավաքեք պարզ նյութեր նախատիպի ստեղծման համար:"
      },
    output:
      {
        en: "One or more tested and improved prototypes, together with documented feedback and learning about how users understand and interact with the proposed solution.",
        uk: "Один або кілька перевірених і вдосконалених прототипів разом із задокументованим відгуком і інформацією про те, як користувачі розуміють запропоноване рішення та взаємодіють із ним.",
        ro: "Unul sau mai multe prototipuri testate și îmbunătățite, împreună cu feedback documentat și învățare despre modul în care utilizatorii înțeleg și interacționează cu soluția propusă.",
        hy: "Մեկ կամ մի քանի փորձարկված և բարելավված նախատիպեր՝ փաստագրված արձագանքների հետ միասին և սովորելու, թե ինչպես են օգտվողները հասկանում և փոխազդում առաջարկվող լուծման հետ:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that have developed a promising circular product, service or business-model concept and need to make it tangible, test it with intended users and improve it before investing in a full pilot or implementation.",
        uk: "Малі та середні підприємства (МСП), які розробили багатообіцяючу циклічну концепцію продукту, послуги або бізнес-моделі та потребують зробити її відчутною, перевірити її серед потенційних користувачів і вдосконалити перед тим, як інвестувати в повний пілотний проект або впровадження.",
        ro: "Întreprinderile mici și mijlocii (IMM-uri) care au dezvoltat un concept circular promițător de produs, serviciu sau model de afaceri și trebuie să îl facă tangibil, să îl testeze cu utilizatorii vizați și să îl îmbunătățească înainte de a investi într-un pilot sau implementare completă.",
        hy: "Փոքր և միջին ձեռնարկությունները (ՓՄՁ), որոնք մշակել են խոստումնալից շրջանաձև արտադրանքի, ծառայության կամ բիզնես մոդելի հայեցակարգ և պետք է այն շոշափելի դարձնեն, փորձարկեն այն նախատեսված օգտվողների հետ և բարելավեն այն նախքան ամբողջական փորձնական կամ ներդրում կատարելը:"
      },
    format: {
      en: "Step-by-step method and downloadable cards",
      uk: "Покроковий метод і завантажувані картки",
      ro: "Metodă pas cu pas și carduri descărcabile",
      hy: "Քայլ առ քայլ մեթոդ և ներբեռնվող քարտեր"
    },
    toolLink: 'https://www.designkit.org/methods/build-run-prototypes.html'
  },
  {
    id: 'resource-099',
    slug: 'bawear-score',
    title: 'bAwear Score',
    description:
      {
        en: "Life Cycle Assessment (LCA)-based environmental impact measurement platform for textiles and apparel products.",
        uk: "Платформа для вимірювання впливу на навколишнє середовище текстилю та одягу на основі оцінки життєвого циклу (LCA).",
        ro: "Platformă de măsurare a impactului asupra mediului bazată pe evaluarea ciclului de viață (LCA) pentru textile și produse de îmbrăcăminte.",
        hy: "Կյանքի ցիկլի գնահատման (LCA) վրա հիմնված շրջակա միջավայրի վրա ազդեցության չափման հարթակ տեքստիլի և հագուստի արտադրանքի համար:"
      },
    about:
      {
        en: "bAwear Score is a platform for measuring environmental impacts in textiles and apparel. It calculates product-level results using Life Cycle Assessment (LCA), based on the ReCiPe 2016 Midpoint method and aligned with International Organization for Standardization (ISO) 14040/14044. The platform can be used to compare material and process options, identify the life cycle stages with the highest impact, support greenhouse gas reporting and prepare for upcoming EU product information requirements. || The platform includes Quick Score for indicative results and Expert studies for detailed assessments using primary supplier data. Results can be used by product development, sourcing, sustainability, corporate social responsibility and quality teams to make design and sourcing decisions based on measured data rather than assumptions.",
        uk: "bAwear Score – це платформа для вимірювання впливу текстилю та одягу на навколишнє середовище. Він розраховує результати на рівні продукту за допомогою оцінки життєвого циклу (LCA) на основі методу ReCiPe 2016 Midpoint і узгодженого з Міжнародною організацією зі стандартизації (ISO) 14040/14044. Платформу можна використовувати для порівняння варіантів матеріалів і процесів, визначення етапів життєвого циклу з найбільшим впливом, підтримки звітності про парникові гази та підготовки до майбутніх вимог щодо інформації про продукт ЄС. || Платформа включає Quick Score для орієнтовних результатів і експертні дослідження для детальної оцінки з використанням даних первинних постачальників. Результати можуть бути використані групами з розробки продукту, пошуку постачальників, сталого розвитку, корпоративної соціальної відповідальності та якості для прийняття рішень щодо дизайну та постачання на основі вимірюваних даних, а не на припущеннях.",
        ro: "bAwear Score este o platformă pentru măsurarea impactului asupra mediului în textile și îmbrăcăminte. Acesta calculează rezultatele la nivel de produs utilizând Evaluarea ciclului de viață (LCA), pe baza metodei ReCiPe 2016 Midpoint și aliniată cu Organizația Internațională pentru Standardizare (ISO) 14040/14044. Platforma poate fi utilizată pentru a compara opțiunile de materiale și proces, pentru a identifica etapele ciclului de viață cu cel mai mare impact, pentru a sprijini raportarea gazelor cu efect de seră și pentru a se pregăti pentru viitoarele cerințe UE privind informațiile despre produse. || Platforma include Quick Score pentru rezultate orientative și studii de experți pentru evaluări detaliate folosind datele furnizorilor primari. Rezultatele pot fi folosite de echipele de dezvoltare a produselor, aprovizionare, sustenabilitate, responsabilitate socială corporativă și calitate pentru a lua decizii de proiectare și aprovizionare bazate mai degrabă pe date măsurate decât pe ipoteze.",
        hy: "bAwear Score-ը տեքստիլի և հագուստի շրջակա միջավայրի վրա ազդեցությունները չափելու հարթակ է: Այն հաշվարկում է արտադրանքի մակարդակի արդյունքները՝ օգտագործելով Կյանքի ցիկլի գնահատումը (LCA), որը հիմնված է ReCiPe 2016 Midpoint մեթոդի վրա և համապատասխանեցված Ստանդարտացման միջազգային կազմակերպության (ISO) 14040/14044-ին: Պլատֆորմը կարող է օգտագործվել նյութերի և գործընթացների տարբերակները համեմատելու, կյանքի ցիկլի ամենաբարձր ազդեցությունն ունեցող փուլերը բացահայտելու, ջերմոցային գազերի հաշվետվություններին աջակցելու և ԵՄ արտադրանքի վերաբերյալ առաջիկա տեղեկատվության պահանջներին նախապատրաստվելու համար: || Պլատֆորմը ներառում է Quick Score ցուցիչ արդյունքների համար և Փորձագիտական ​​ուսումնասիրություններ մանրամասն գնահատումների համար՝ օգտագործելով առաջնային մատակարարի տվյալները: Արդյունքները կարող են օգտագործվել արտադրանքի զարգացման, աղբյուրների, կայունության, կորպորատիվ սոցիալական պատասխանատվության և որակի թիմերի կողմից՝ նախագծման և աղբյուրների վերաբերյալ որոշումներ կայացնելու համար՝ հիմնվելով չափված տվյալների վրա, այլ ոչ թե ենթադրությունների վրա:"
      },
    journeyPhases: ['Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['evaluate:verify-potential', 'monitor:choosing-indicators'],
      sectors: ['textiles'],
      sectorSections: ['textiles:relevant-tools']
    },
    sector: 'Textiles',
    effort: 'Medium',
    language: 'English',
    provider: 'bAwear B.V.',
    access: 'Sign up',
    timeRequired:
      {
        en: "About 30 minutes for first setup; 10-15 minutes for one Quick Score calculation when data is ready; Expert studies vary by scope and supplier data availability.",
        uk: "Приблизно 30 хвилин для першого налаштування; 10-15 хвилин для одного швидкого розрахунку оцінки, коли дані готові; Експертні дослідження відрізняються за обсягом і наявністю даних про постачальників.",
        ro: "Aproximativ 30 de minute pentru prima configurare; 10-15 minute pentru un calcul Quick Score când datele sunt gata; Studiile experților variază în funcție de domeniul de aplicare și disponibilitatea datelor furnizorului.",
        hy: "Մոտ 30 րոպե առաջին տեղադրման համար; 10-15 րոպե մեկ Quick Score հաշվարկի համար, երբ տվյալները պատրաստ են; Փորձագիտական ​​ուսումնասիրությունները տարբերվում են ըստ շրջանակների և մատակարարների տվյալների առկայության:"
      },
    preparationNeeded:
      {
        en: "Collect product type, fibre composition, product weight, yarn and fabric construction, wet processes, countries of production, transport mode and distance. Primary supplier data on energy, water and waste improves accuracy.",
        uk: "Зберіть тип продукту, склад волокна, вагу продукту, структуру пряжі та тканини, мокрі процеси, країни виробництва, спосіб транспортування та відстань. Первинні дані постачальника про енергію, воду та відходи покращують точність.",
        ro: "Colectați tipul de produs, compoziția fibrelor, greutatea produsului, construcția firelor și a țesăturilor, procesele umede, țările de producție, modul de transport și distanța. Datele furnizorilor primari despre energie, apă și deșeuri îmbunătățesc acuratețea.",
        hy: "Հավաքեք արտադրանքի տեսակը, մանրաթելերի կազմը, արտադրանքի քաշը, մանվածքի և գործվածքի կառուցվածքը, խոնավ գործընթացները, արտադրության երկրները, տրանսպորտի եղանակը և հեռավորությունը: Էներգիայի, ջրի և թափոնների վերաբերյալ առաջնային մատակարարների տվյալները բարելավում են ճշգրտությունը:"
      },
    output:
      {
        en: "Product impact profile across impact categories, results split by life cycle stage, comparison against a reference product and an exportable report.",
        uk: "Профіль впливу продукту за категоріями впливу, результати, розподілені за етапами життєвого циклу, порівняння з еталонним продуктом і експортований звіт.",
        ro: "Profilul de impact al produsului pe categorii de impact, rezultatele împărțite pe etape ciclului de viață, comparație cu un produs de referință și un raport exportabil.",
        hy: "Արտադրանքի ազդեցության պրոֆիլը ազդեցության կատեգորիաների վրա, արդյունքները բաժանված ըստ կյանքի ցիկլի փուլերի, համեմատություն տեղեկատու արտադրանքի հետ և արտահանվող հաշվետվություն:"
      },
    bestFor:
      {
        en: "Small and medium textile and apparel companies, including brands, retailers, manufacturers and importers or exporters that need to compare material or process options before committing to a design.",
        uk: "Малі та середні текстильні та швейні компанії, включно з брендами, роздрібними торговцями, виробниками та імпортерами чи експортерами, яким необхідно порівняти матеріали чи варіанти процесу, перш ніж приступити до розробки дизайну.",
        ro: "Companii mici și mijlocii de textile și îmbrăcăminte, inclusiv mărci, comercianți cu amănuntul, producători și importatori sau exportatori care trebuie să compare materialele sau opțiunile de proces înainte de a se angaja la un design.",
        hy: "Մանր և միջին տեքստիլ և հագուստ արտադրող ընկերություններ, ներառյալ ապրանքանիշերը, մանրածախ առևտուրը, արտադրողները և ներմուծողները կամ արտահանողները, որոնք պետք է համեմատեն նյութի կամ մշակման տարբերակները նախքան դիզայնի վրա աշխատելը:"
      },
    format: {
      en: "Digital platform",
      uk: "Цифрова платформа",
      ro: "Platformă digitală",
      hy: "Թվային հարթակ"
    },
    toolLink: 'https://bawear-score.com'
  },
  {
    id: 'resource-100',
    slug: 'material-circularity-indicator-mci-calculator',
    title: 'Material Circularity Indicator (MCI) Calculator',
    description:
      {
        en: "A circularity calculator that measures how effectively a product keeps its materials in use throughout its life cycle.",
        uk: "Калькулятор циркулярності, який вимірює, наскільки ефективно продукт зберігає свої матеріали у використанні протягом усього життєвого циклу.",
        ro: "Un calculator de circularitate care măsoară cât de eficient un produs își menține materialele în uz pe tot parcursul ciclului său de viață.",
        hy: "Շրջանաձևության հաշվիչ, որը չափում է, թե որքան արդյունավետ է արտադրանքը օգտագործում իր նյութերն իր կյանքի ցիկլի ընթացքում:"
      },
    about:
      {
        en: "The Material Circularity Indicator (MCI) Calculator helps assess how effectively materials are kept in use throughout a product life cycle. The Material Circularity Indicator (MCI) score runs from 0% for a fully linear product to 100% for a fully circular product. It can support product design decisions, circular economy performance reporting, benchmarking and procurement decisions. || The tool includes a trial version for comparing scenarios, benchmarking performance and testing the concept. A professional version provides expanded functionality for decision-grade results and stronger support for external claims. Editors should note that the source document did not include the tool URL; the link used here is the official Thinkstep ANZ calculator page.",
        uk: "Калькулятор індикатора циркуляції матеріалу (MCI) допомагає оцінити, наскільки ефективно матеріали зберігаються у використанні протягом життєвого циклу продукту. Індикатор круглості матеріалу (MCI) становить від 0% для повністю лінійного продукту до 100% для повністю круглого продукту. Він може підтримувати рішення щодо дизайну продукту, звітування про ефективність економіки замкнутого циклу, порівняльний аналіз і рішення щодо закупівель. || Інструмент містить пробну версію для порівняння сценаріїв, порівняльного аналізу продуктивності та тестування концепції. Професійна версія надає розширені функціональні можливості для отримання результатів рівня прийняття рішень і посилену підтримку зовнішніх претензій. Редактори мають зауважити, що вихідний документ не містив URL-адресу інструменту; використане тут посилання є офіційною сторінкою калькулятора Thinkstep ANZ.",
        ro: "Calculatorul indicatorului de circularitate a materialelor (MCI) ajută la evaluarea cât de eficient sunt păstrate materialele în uz pe parcursul ciclului de viață al produsului. Scorul indicatorului de circularitate a materialului (MCI) variază de la 0% pentru un produs complet liniar la 100% pentru un produs complet circular. Poate sprijini deciziile de proiectare a produselor, raportarea performanței economiei circulare, evaluarea comparativă și deciziile de achiziții. || Instrumentul include o versiune de probă pentru compararea scenariilor, evaluarea performanței și testarea conceptului. O versiune profesională oferă funcționalitate extinsă pentru rezultate de grad de decizie și suport mai puternic pentru revendicările externe. Editorii ar trebui să rețină că documentul sursă nu a inclus URL-ul instrumentului; linkul folosit aici este pagina oficială a calculatorului Thinkstep ANZ.",
        hy: "Նյութերի շրջանաձևության ցուցիչի (MCI) հաշվիչը օգնում է գնահատել, թե որքան արդյունավետ են նյութերը օգտագործվում արտադրանքի կյանքի ցիկլի ընթացքում: Նյութական շրջանաձևության ցուցիչի (MCI) միավորը տատանվում է 0%-ից լրիվ գծային արտադրանքի համար մինչև 100% լրիվ շրջանաձև արտադրանքի համար: Այն կարող է աջակցել արտադրանքի նախագծման որոշումներին, շրջանաձև տնտեսության կատարողականի հաշվետվություններին, չափորոշիչներին և գնումների որոշումներին: || Գործիքը ներառում է փորձնական տարբերակ՝ սցենարները համեմատելու, կատարողականի չափորոշիչի և հայեցակարգի փորձարկման համար: Պրոֆեսիոնալ տարբերակը ապահովում է ընդլայնված ֆունկցիոնալություն որոշման արդյունքների համար և ավելի ուժեղ աջակցություն արտաքին պահանջների համար: Խմբագիրները պետք է ուշադրություն դարձնեն, որ սկզբնական փաստաթուղթը չի ներառում գործիքի URL-ը. Այստեղ օգտագործվող հղումը Thinkstep ANZ հաշվիչի պաշտոնական էջն է:"
      },
    journeyPhases: ['Evaluate', 'Monitor'],
    placements: {
      phaseSections: ['evaluate:verify-potential', 'monitor:choosing-indicators']
    },
    sector: 'Cross-sector',
    effort: 'Medium',
    language: 'English',
    provider: 'Thinkstep ANZ',
    access: 'Paid',
    timeRequired:
      {
        en: "1-3 hours if the bill of materials and product life cycle inputs are ready, including time to interpret the results.",
        uk: "1-3 години, якщо вхідні дані щодо матеріалів і життєвого циклу продукту готові, включаючи час на інтерпретацію результатів.",
        ro: "1-3 ore dacă lista de materiale și intrările ciclului de viață al produsului sunt gata, inclusiv timpul pentru interpretarea rezultatelor.",
        hy: "1-3 ժամ, եթե նյութերի հաշիվը և արտադրանքի կյանքի ցիկլի տվյալները պատրաստ են, ներառյալ արդյունքները մեկնաբանելու ժամանակը:"
      },
    preparationNeeded:
      {
        en: "Prepare a bill of materials and product life cycle data, including material types, quantities, product destination and relevant inflows and outflows.",
        uk: "Підготуйте перелік матеріалів і дані життєвого циклу продукту, включаючи типи матеріалів, кількість, пункт призначення продукту та відповідні надходження та відтоки.",
        ro: "Pregătiți o listă de materiale și date despre ciclul de viață al produsului, inclusiv tipurile de materiale, cantitățile, destinația produsului și intrările și ieșirile relevante.",
        hy: "Պատրաստեք նյութերի և արտադրանքի կյանքի ցիկլի տվյալները, ներառյալ նյութերի տեսակները, քանակը, արտադրանքի նպատակակետը և համապատասխան ներհոսքերը և ելքերը:"
      },
    output:
      {
        en: "Material Circularity Indicator (MCI) score, product circularity analysis, scenario comparison and identification of product-level hotspots.",
        uk: "Оцінка індикатора циркулярності матеріалу (MCI), аналіз циркулярності продукту, порівняння сценаріїв і виявлення гарячих точок на рівні продукту.",
        ro: "Scorul indicatorului de circularitate material (MCI), analiza circularității produsului, compararea scenariilor și identificarea punctelor fierbinți la nivel de produs.",
        hy: "Նյութի շրջանաձևության ցուցիչի (MCI) միավոր, արտադրանքի շրջանաձևության վերլուծություն, սցենարների համեմատություն և արտադրանքի մակարդակի թեժ կետերի նույնականացում:"
      },
    bestFor:
      {
        en: "Small-medium enterprises (SMEs) that want to deepen their understanding of product circularity and compare circular design options.",
        uk: "Малі та середні підприємства (МСП), які хочуть поглибити своє розуміння циркулярності продукту та порівняти варіанти циркулярного дизайну.",
        ro: "Întreprinderi mici și mijlocii (IMM-uri) care doresc să-și aprofundeze înțelegerea circularității produselor și să compare opțiunile de proiectare circulară.",
        hy: "Փոքր և միջին ձեռնարկություններ (ՓՄՁ), որոնք ցանկանում են խորացնել արտադրանքի շրջանաձևության իրենց պատկերացումները և համեմատել շրջանաձև դիզայնի տարբերակները:"
      },
    format: {
      en: "Excel template",
      uk: "Шаблон Excel",
      ro: "Șablon Excel",
      hy: "Excel ձևանմուշ"
    },
    toolLink:
      'https://www.thinkstep-anz.com/services/circular-economy/material-circularity-indicator-mci-calculator/'
  },
];

export const { resources, journeyPhases, sectors, languages, accessOptions } =
  buildToolCatalogue(toolCatalogue);
