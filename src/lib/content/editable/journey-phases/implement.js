import { defineJourneyPhasePage } from './_shared.js';

/*
  PHASE 5: IMPLEMENT
  The editable blocks below follow the same order as the website page.
  Keep sectionId and id values unchanged because they connect page links.
*/

/* 1. HOME PAGE PHASE CARD AND PHASE HERO */
const phaseCard = {
  number: '05',
  slug: 'implement',
  shortName: { en: 'Phase 5', uk: 'Фаза 5', ro: 'Faza 5', hy: 'Փուլ 5' },
  title: { en: 'Implement', uk: 'Впровадження', ro: 'Implementează', hy: 'Իրականացնել' },
  colourClass: 'phase-card-dark',
  description: {
    en: 'Tools that support planning, ownership, milestones, partnerships and practical delivery of selected circular economy actions.',
    uk: 'Інструменти, що підтримують планування, відповідальність, етапи, партнерства та практичне виконання вибраних циркулярних дій.',
    ro: 'Instrumente care sprijină planificarea, asumarea responsabilităților, etapele, parteneriatele și livrarea practică a acțiunilor circulare selectate.',
    hy: 'Գործիքներ, որոնք աջակցում են ընտրված շրջանաձեւ գործողությունների պլանավորմանը, պատասխանատվությանը, հանգրվաններին, գործընկերություններին եւ գործնական իրականացմանը։'
  }
};

const hero = {
  intro: {
    en: 'This phase supports implementation planning and delivery. It includes tools that can help users define actions, assign responsibilities, identify partners, set milestones and move selected circular solutions into practice.',
    uk: 'Ця фаза підтримує планування та виконання впровадження. Вона містить інструменти, які допомагають визначити дії, розподілити відповідальність, знайти партнерів, встановити етапи та перевести вибрані циркулярні рішення в практику.',
    ro: 'Această fază sprijină planificarea și realizarea implementării. Include instrumente care te ajută să definești acțiuni, să atribui responsabilități, să identifici parteneri, să stabilești etape și să transformi soluțiile circulare selectate în practică.',
    hy: 'Այս փուլը աջակցում է իրականացման պլանավորմանը եւ կատարմանը։ Այն ներառում է գործիքներ, որոնք օգնում են սահմանել գործողություններ, բաշխել պատասխանատվությունները, գտնել գործընկերներ, սահմանել հանգրվաններ եւ ընտրված շրջանաձեւ լուծումները գործնականում կիրառել։'
  },
  icon: '/icons/phase-icons/icon-implement.png',
  iconAlt: { en: 'Implement phase icon', uk: 'Іконка фази Впровадження', ro: 'Pictograma fazei Implementează', hy: 'Իրականացնել փուլի պատկերակ' }
};

/* 2. HERO SECTION BUTTONS */
const sectionButtons = [
  { sectionId: 'implementation-plan', label: { en: 'Plan implementation', uk: 'Планувати впровадження', ro: 'Planifică implementarea', hy: 'Պլանավորել իրականացումը' } }
];

/* 3. PATHWAY OVERVIEW AND PATHWAY CARDS */
const pathwaySection = {
  title: { en: 'From strategy to action', uk: 'Від стратегії до дії', ro: 'De la strategie la acțiune', hy: 'Ռազմավարությունից դեպի գործողություն' },
  paragraphs: [
    { en: 'This Implement phase focuses on how small-medium enterprises (SMEs) can put evaluated circular strategies into practice. Once circular opportunities have been screened and tested at a small scale, the next step is to turn them into concrete actions across the business. Implementation involves making operational changes, involving the right people, setting milestones, and working with partners where needed.', uk: 'Фаза впровадження зосереджена на тому, як малі та середні підприємства можуть застосувати оцінені циркулярні стратегії на практиці. Після відбору й тестування циркулярних можливостей у малому масштабі наступний крок - перетворити їх на конкретні дії в бізнесі. Впровадження передбачає операційні зміни, залучення потрібних людей, встановлення етапів і роботу з партнерами за потреби.', ro: 'Faza de implementare se concentrează pe modul în care întreprinderile mici și mijlocii pot pune în practică strategiile circulare evaluate. După ce oportunitățile circulare au fost analizate și testate la scară mică, următorul pas este să fie transformate în acțiuni concrete în cadrul afacerii. Implementarea presupune schimbări operaționale, implicarea oamenilor potriviți, stabilirea etapelor și colaborarea cu parteneri atunci când este necesar.', hy: 'Իրականացման փուլը կենտրոնանում է այն բանի վրա, թե ինչպես կարող են փոքր եւ միջին ձեռնարկությունները գործնականում կիրառել գնահատված շրջանաձեւ ռազմավարությունները։ Երբ շրջանաձեւ հնարավորությունները զտվել եւ փոքր մասշտաբով փորձարկվել են, հաջորդ քայլը դրանք բիզնեսի ներսում կոնկրետ գործողությունների վերածելն է։ Իրականացումը ներառում է գործառնական փոփոխություններ, ճիշտ մարդկանց ներգրավում, հանգրվանների սահմանում եւ անհրաժեշտության դեպքում գործընկերների հետ աշխատանք։' }
  ],
  cards: [
    {
      sectionId: 'implementation-plan',
      number: '1',
      title: { en: 'Implementation Plan & Roadmap', uk: 'План і дорожня карта впровадження', ro: 'Plan și foaie de parcurs pentru implementare', hy: 'Իրականացման պլան եւ ճանապարհային քարտեզ' },
      description: {
        en: 'Build a structured plan that connects your selected circular strategy to concrete actions, owners, resources, milestones and review points.',
        uk: 'Створіть структурований план, який поєднує вибрану циркулярну стратегію з конкретними діями, відповідальними, ресурсами, етапами та точками перегляду.',
        ro: 'Construiește un plan structurat care conectează strategia circulară selectată cu acțiuni concrete, responsabili, resurse, etape și momente de revizuire.',
        hy: 'Ստեղծեք կառուցվածքային պլան, որը ընտրված շրջանաձեւ ռազմավարությունը կապում է կոնկրետ գործողությունների, պատասխանատուների, ռեսուրսների, հանգրվանների եւ վերանայման կետերի հետ։'
      },
      keyOutputs: [
        { en: 'Defined implementation actions', uk: 'Визначені дії з впровадження', ro: 'Acțiuni de implementare definite', hy: 'Սահմանված իրականացման գործողություններ' },
        { en: 'Named owners and responsibilities', uk: 'Призначені відповідальні та ролі', ro: 'Responsabili și responsabilități stabilite', hy: 'Նշված պատասխանատուներ եւ պարտականություններ' },
        { en: 'Milestones and review schedule', uk: 'Етапи та графік перегляду', ro: 'Etape și calendar de revizuire', hy: 'Հանգրվաններ եւ վերանայման ժամանակացույց' }
      ]
    }
  ]
};

/* 4. DETAILED SECTION 1 */
const implementationPlanSection = {
  id: 'implementation-plan',
  title: { en: 'Implementation Plan & Roadmap', uk: 'План і дорожня карта впровадження', ro: 'Plan și foaie de parcurs pentru implementare', hy: 'Իրականացման պլան եւ ճանապարհային քարտեզ' },
  resourceTag: 'implement:implementation-plan',
  paragraphs: [
    { en: 'Implementation planning turns a selected circular strategy into a sequence of practical activities that the business can manage. At this point, the focus is no longer on choosing the idea, but on organising the work needed to make it happen.', uk: 'Планування впровадження перетворює вибрану циркулярну стратегію на послідовність практичних дій, якими бізнес може керувати. На цьому етапі фокус уже не на виборі ідеї, а на організації роботи, потрібної для її реалізації.', ro: 'Planificarea implementării transformă o strategie circulară selectată într-o succesiune de activități practice pe care afacerea le poate gestiona. În acest punct, accentul nu mai este pe alegerea ideii, ci pe organizarea muncii necesare pentru a o realiza.', hy: 'Իրականացման պլանավորումը ընտրված շրջանաձեւ ռազմավարությունը վերածում է գործնական գործողությունների հաջորդականության, որը բիզնեսը կարող է կառավարել։ Այս փուլում ուշադրությունը այլեւս գաղափարի ընտրության վրա չէ, այլ դրա իրականացման համար անհրաժեշտ աշխատանքի կազմակերպման։' },
    { en: "Start by defining the scope: which circular opportunity is being implemented, which parts of the business it affects, the timeframe, and what is deliberately left out for this round. Then translate the opportunity into concrete actions, separating quick wins from longer structural changes.", uk: 'Почніть із визначення рамок: яка циркулярна можливість впроваджується, на які частини бізнесу вона впливає, які часові межі та що свідомо не включається в цей раунд. Потім перетворіть можливість на конкретні дії, відокремлюючи швидкі результати від довших структурних змін.', ro: 'Începe prin definirea domeniului: ce oportunitate circulară este implementată, ce părți ale afacerii afectează, care este perioada de timp și ce este lăsat intenționat în afara acestei runde. Apoi transformă oportunitatea în acțiuni concrete, separând câștigurile rapide de schimbările structurale mai lungi.', hy: 'Սկսեք շրջանակի սահմանումից՝ որ շրջանաձեւ հնարավորությունն է իրականացվում, բիզնեսի որ մասերի վրա է ազդում, ինչ ժամկետ ունի եւ ինչն է գիտակցաբար դուրս մնում այս փուլից։ Այնուհետեւ հնարավորությունը վերածեք կոնկրետ գործողությունների՝ արագ արդյունքները տարանջատելով ավելի երկար կառուցվածքային փոփոխություններից։' },
    { en: 'A useful implementation roadmap combines actions, responsibilities, resources and milestones. Responsibilities clarify who leads, who supports, who signs off, and where external partners are needed. Resources cover budget, time, equipment, training and expertise. Milestones turn the plan into manageable steps, such as a process milestone, an output milestone or a review milestone, so progress can be checked and adjusted over time.', uk: 'Корисна дорожня карта впровадження поєднує дії, відповідальність, ресурси та етапи. Відповідальність уточнює, хто веде процес, хто підтримує, хто затверджує і де потрібні зовнішні партнери. Ресурси охоплюють бюджет, час, обладнання, навчання та експертизу. Етапи перетворюють план на керовані кроки, щоб прогрес можна було перевіряти й коригувати з часом.', ro: 'O foaie de parcurs utilă combină acțiuni, responsabilități, resurse și etape. Responsabilitățile clarifică cine conduce, cine sprijină, cine aprobă și unde sunt necesari parteneri externi. Resursele includ buget, timp, echipamente, instruire și expertiză. Etapele transformă planul în pași gestionabili, astfel încât progresul să poată fi verificat și ajustat în timp.', hy: 'Օգտակար իրականացման ճանապարհային քարտեզը համադրում է գործողությունները, պատասխանատվությունները, ռեսուրսները եւ հանգրվանները։ Պատասխանատվությունները հստակեցնում են՝ ով է առաջնորդում, ով է աջակցում, ով է հաստատում եւ որտեղ են անհրաժեշտ արտաքին գործընկերներ։ Ռեսուրսները ներառում են բյուջե, ժամանակ, սարքավորումներ, ուսուցում եւ փորձագիտություն։ Հանգրվանները պլանը դարձնում են կառավարելի քայլեր, որպեսզի առաջընթացը հնարավոր լինի ստուգել եւ ժամանակի ընթացքում հարմարեցնել։' },
    { en: 'The result should be a practical roadmap that your team can revisit as the work evolves: clear enough to guide action, but flexible enough to adapt as you learn.', uk: 'Результатом має бути практична дорожня карта, до якої команда може повертатися в процесі роботи: достатньо чітка, щоб спрямовувати дії, і достатньо гнучка, щоб адаптуватися під час навчання.', ro: 'Rezultatul ar trebui să fie o foaie de parcurs practică, pe care echipa ta o poate revizita pe măsură ce munca evoluează: suficient de clară pentru a ghida acțiunea, dar suficient de flexibilă pentru a se adapta pe măsură ce învățați.', hy: 'Արդյունքը պետք է լինի գործնական ճանապարհային քարտեզ, որին թիմը կարող է վերադառնալ աշխատանքի ընթացքում՝ բավական հստակ գործողությունները ուղղորդելու համար եւ բավական ճկուն՝ սովորելու ընթացքում հարմարվելու համար։' }
  ],
  /*
    IMPLEMENTATION PRINCIPLES INFO BOX:
    Edit the title, icon names and text below to change this box.
    Icons use local Icon Park SVG files from static/icons/icon-park/.
  */
  principleBox: {
    title: 'Key principles for small-medium enterprises (SMEs)',
    items: [
      {
        title: 'Start small',
        icon: 'zoom-in',
        text:
          'Pick one or two circular actions to implement first. Success builds momentum and confidence for the next step.'
      },
      {
        title: 'Involve your team',
        icon: 'personal-collection',
        text:
          'Implementation works best when the people who will carry out the actions have been part of designing them.'
      },
      {
        title: 'Be specific',
        icon: 'aiming',
        text:
          'Assign a named person, a specific date, and a measurable outcome to each action. Ambiguity is the most common reason implementation stalls.'
      },
      {
        title: 'Plan to adapt',
        icon: 'adjustment',
        text:
          'Your first implementation plan will change. Build in regular review points so you can adjust as you learn.'
      },
      {
        title: 'Use external support',
        icon: 'add-user',
        text:
          'Partners, advisors, and EU-funded programmes can provide resources, expertise, and funding small-medium enterprises (SMEs) can access.'
      }
    ]
  }
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумок фази', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    { en: 'Use this checklist to confirm that you have a practical implementation plan, responsible owners and a workable delivery roadmap for your circular initiative.', uk: 'Скористайтеся цим чеклістом, щоб переконатися, що у вас є практичний план впровадження, відповідальні особи та робоча дорожня карта для циркулярної ініціативи.', ro: 'Folosește această listă pentru a confirma că ai un plan practic de implementare, responsabili desemnați și o foaie de parcurs funcțională pentru inițiativa circulară.', hy: 'Օգտագործեք այս ստուգաթերթը՝ համոզվելու համար, որ ունեք գործնական իրականացման պլան, պատասխանատուներ եւ աշխատող ճանապարհային քարտեզ ձեր շրջանաձեւ նախաձեռնության համար։' },
    { en: 'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.', uk: 'Щоб перейти до наступної фази, позначте всі пункти й натисніть кнопку після чекліста або поверніться на головну сторінку, щоб знайти іншу відповідну фазу, секторний інструмент чи каталог інструментів.', ro: 'Pentru a continua la faza următoare, bifează toate căsuțele și apasă butonul de după listă sau revino la pagina principală pentru a găsi faza potrivită, instrumente sectoriale ori catalogul de instrumente.', hy: 'Հաջորդ փուլին անցնելու համար նշեք բոլոր կետերը եւ սեղմեք ստուգաթերթից հետո հայտնվող կոճակը, կամ վերադարձեք գլխավոր էջ՝ համապատասխան փուլը, ոլորտային գործիքը կամ գործիքների էջը գտնելու համար։' }
  ],
  checklist: [
    { en: 'Defined the scope of the circular implementation initiative', uk: 'Визначено рамки циркулярної ініціативи з впровадження', ro: 'Ai definit domeniul inițiativei circulare de implementare', hy: 'Սահմանվել է շրջանաձեւ իրականացման նախաձեռնության շրջանակը' },
    { en: 'Converted the selected strategy into concrete actions', uk: 'Вибрану стратегію перетворено на конкретні дії', ro: 'Ai transformat strategia selectată în acțiuni concrete', hy: 'Ընտրված ռազմավարությունը վերածվել է կոնկրետ գործողությունների' },
    { en: 'Assigned owners, responsibilities and resources', uk: 'Призначено відповідальних, ролі та ресурси', ro: 'Ai atribuit responsabili, responsabilități și resurse', hy: 'Նշվել են պատասխանատուներ, պարտականություններ եւ ռեսուրսներ' },
    { en: 'Created a roadmap with milestones and review points', uk: 'Створено дорожню карту з етапами та точками перегляду', ro: 'Ai creat o foaie de parcurs cu etape și momente de revizuire', hy: 'Ստեղծվել է ճանապարհային քարտեզ՝ հանգրվաններով եւ վերանայման կետերով' },
    { en: 'Implemented your plan and roadmap!', uk: 'План і дорожню карту впроваджено!', ro: 'Ai implementat planul și foaia de parcurs!', hy: 'Իրականացրել եք պլանը եւ ճանապարհային քարտեզը։' }
  ]
};

export const implement = defineJourneyPhasePage({
  phaseCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections: [implementationPlanSection],
  phaseSummary
});
