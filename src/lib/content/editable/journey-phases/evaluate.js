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
    'Not every circular option will offer the same value or be equally practical to implement. This section can help you compare circular options to find what is best for your business. If you already have a particular idea from the phase before you can move to verify the potential of the idea or concept. If you rather keep working on the circular strategies, use the screening tool here to think further on the options identified in the former phase. || You can download the result of this section to share with others (Please use Google Chrome, Safari, or Firefox for a better print).'
  ],
  /*
    SHORTLIST STRATEGIES QUESTIONNAIRE
    Edit the questionnaire title, instructions, categories, questions and
    result messages below. The interactive layout is in:
    src/lib/components/sections/StrategyShortlistQuestionnaire.svelte
  */
  strategyShortlistQuestionnaire: {
    title: 'Screening your options',
    introduction:
      "Use this questionnaire to see how well each circular option could work for you. First, select a circular option to assess. Then, answer the questionnaire below according to your business. Based on your responses, you'll be given an estimate of how well this circular option model could work for you.",
    businessModelLabel: 'Circular option to assess',
    businessModelPlaceholder: 'Select a circular option',
    // These options mirror the circular value model cards in Phase 3: Explore.
    businessModelOptions: shortlistStrategiesOptions,
    otherBusinessModelLabel: 'Other',
    selectBusinessModelText:
      'Select the circular option you want to assess, then answer every question to see your result.',
    yesLabel: 'Yes',
    noLabel: 'No',
    resultsTitle: 'Results',
    answeredLabel: 'answered',
    downloadLabel: 'Download results',
    downloadingLabel: 'Preparing PDF...',
    downloadFilename: 'phase-4-evaluate-shortlist-strategies-results.pdf',
    pdfDisclaimer:
      'These are guiding questions part of Phase 4: Evaluate of the Circular Economy Toolbox. The results do not guarantee a correct assessment, as these are only for indicative use and for learning purposes and should always be used together with other assessment tools and business context.',
    incompleteText: 'Answer every question to see your result.',
    positiveResult:
      'There seems to be potential! This strategy should be considered to be tested.',
    negativeResult:
      'It seems this strategy is not a good fit. Are there other strategies to consider or are there ways to make this strategy feasible?',
    categories: [
      {
        title: 'Strategic Fit',
        questions: [
          'Does this align with our long-term business direction?',
          'Does it complement our existing strengths and capabilities?'
        ]
      },
      {
        title: 'Operational Feasibility',
        questions: [
          'Do we have (or can we build) the skills needed?',
          {
            text: 'Does it fit within our current processes or require major change?',
            yesLabel: 'Fits',
            noLabel: 'Not fit'
          }
        ]
      },
      {
        title: 'Resource Requirements',
        questions: [
          {
            text: 'What upfront investment is required (time, capital, people)?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          'Are there grants, subsidies, or partnerships that could reduce this?'
        ]
      },
      {
        title: 'Market & Customer Readiness',
        questions: [
          'Will our customers value this change?',
          'Is there market demand or regulatory pressure driving this direction?'
        ]
      },
      {
        title: 'Environmental & Social Impact',
        questions: [
          {
            text: 'What measurable reduction in material use or emissions could this deliver?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          'Does it create wider social or community value (better circumstances for the workers, more jobs, access to better and affordable products)?'
        ]
      },
      {
        title: 'Risk & Dependencies',
        questions: [
          {
            text: 'What are the key risks (supply chain, customer, regulatory)?',
            yesLabel: 'Multiple',
            noLabel: 'Few'
          },
          "Are there dependencies on partners or technology we don't control?"
        ]
      }
    ]
  },
  closingParagraphs: [
    'Based on the results of the screenings above, you can begin to identify the highest-scoring, most feasible circular options. Once you narrow down 1 to 3 options, you will be able to develop a viable business case which incorporates them into a viable strategy to use in the next phase. || For a template to help narrow down your options, see the "Shortlisting of Options" tool below. Using this tool can help you clarify key aspects each option brings to support your business case.'
  ]
};

/* 5. DETAILED SECTION 2 */
const verifyPotentialSection = {
  id: 'verify-potential',
  title: { en: 'Verify potential', uk: 'Перевірка потенціалу', ro: 'Verificarea potențialului', hy: 'Ներուժի ստուգում' },
  resourceTag: 'evaluate:verify-potential',
  paragraphs: [
    "A strong business case considers not only potential benefits, but also the organisational, operational and market changes required to realise them. It is important to identify what hidden barriers could come into effect for each of the strategies, ideas and concepts you have identified. || Use the tools below to evaluate the business case you selected in Step 1 of this section or the ideas you developed in the Explore phase."
  ]
};

/* 6. DETAILED SECTION 3 */
const testPilotSection = {
  id: 'test-and-pilot',
  title: { en: 'Test & Pilot', uk: 'Тестування і пілотування', ro: 'Testează și pilotează', hy: 'Փորձարկել եւ պիլոտավորել' },
  resourceTag: 'evaluate:test-and-pilot',
  paragraphs: [
    "Before an evaluated circular opportunity becomes a full implementation project, it's helpful to test the logic at a smaller scale. Testing ideas or prototypes in the real world can help to evaluate a solution. || A pilot helps you check whether the idea works in practice, who needs to be involved, and which assumptions still need evidence.|| A useful pilot should be time-bounded, specific and measurable. The tools, such as the test card, can help you define what you want to learn, what success would look like, who is responsible, and which data or feedback will be collected.|| This helps surface missing partners, unclear responsibilities, technical barriers and material flow gaps before you commit time and money to implementation.||The output of this section should be a clear pilot concept that can be turned into an implementation plan in the next phase."
  ]
};

/* 7. PHASE SUMMARY */
const phaseSummary = {
  title: { en: 'Phase Summary', uk: 'Підсумок фази', ro: 'Rezumatul fazei', hy: 'Փուլի ամփոփում' },
  paragraphs: [
    'Use this checklist to confirm that you have shortlisted strategies, verified their potential and defined a clear pilot focus for your selected circular opportunity.',
    'To continue to the next phase, click the button that appears after the checklist if you have checked all boxes, or go back to the home page to find the next suitable phase, sector tool, or explore the tools page.'
  ],
  checklist: [
    'Selected one or more circular opportunities to screen through the shortlist strategies step',
    'Narrowed down one to three feasible circular options for further development',
    'Evaluated circular options by identifying key barriers, risks and enabling conditions',
    'Defined what should be tested in a pilot before implementation',
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
