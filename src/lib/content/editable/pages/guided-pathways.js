/*
  Edit this file for the Guided pathways page.

  This page is intentionally collected in one file so editors can update the
  page hero, journey phase overview cards and sector tool overview cards without
  jumping between several files.

  Important:
  - These cards control the overview page only.
  - The detailed journey phase pages are edited in src/lib/content/editable/journey-phases/.
  - The detailed sector pages are edited in src/lib/content/editable/sector-guides/.
  - Keep slug values unchanged unless the matching page URL is also changed.
*/
export const guidedPathways = {
  pageTitle: { en: 'Guided pathways', uk: 'Покрокові маршрути', ro: 'Parcursuri ghidate', hy: 'Ուղեցույցներ' },

  /* 1. PAGE HERO */
  hero: {
    eyebrow: { en: 'Guided pathways', uk: 'Покрокові маршрути', ro: 'Parcursuri ghidate', hy: 'Ուղեցույցներ' },
    title: { en: 'Find the right tools', uk: 'Знайдіть потрібні інструменти', ro: 'Găsește instrumentele potrivite', hy: 'Գտեք ճիշտ գործիքները' },
    text: {
      en: 'The toolbox is organised into journey phases, sector guides, a case study collection, and a tool catalogue. It is recommended to start with the journey phases in the SME journey or explore the tools by sectors in the selected sector guides. Both routes lead to tool examples and practical steps to guide you in your transition.',
      uk: 'Інструментарій структуровано за етапами шляху, галузевими посібниками, добіркою практичних прикладів і каталогом інструментів. Рекомендуємо почати з етапів дорожньої карти для МСП або ознайомитися з інструментами за напрямами у вибраних галузевих посібниках.',
      ro: 'Setul de instrumente este organizat în faze ale parcursului, ghiduri sectoriale, o colecție de studii de caz și un catalog de instrumente. Este recomandat să începi cu fazele parcursului IMM sau să explorezi instrumentele pe sectoare în ghidurile sectoriale selectate. Ambele rute duc la exemple de instrumente și pași practici pentru tranziția ta.',
      hy: 'Գործիքակազմը կառուցված է անցման փուլերի, ոլորտային ուղեցույցների, օրինակների հավաքածուի և գործիքների կատալոգի շուրջ։ Խորհուրդ է տրվում սկսել ՓՄՁ-ների անցման փուլերից կամ ընտրված ոլորտային ուղեցույցներում ուսումնասիրել գործիքներն ըստ ոլորտների։ Երկու ուղիներն էլ ներկայացնում են գործիքների օրինակներ և գործնական քայլեր, որոնք կօգնեն շրջանաձև տնտեսությանն անցնելու գործընթացում։'
    },
    buttons: [
      {
        label: { en: 'Follow journey phases', uk: 'Перейти до етапів шляху', ro: 'Urmează fazele parcursului', hy: 'Հետևել անցման փուլերին' },
        href: '#journey-phases',
        style: 'primary',
        icon: 'connection-point-two'
      },
      {
        label: { en: 'Follow sector guides', uk: 'Переглянути галузеві матеріали', ro: 'Urmează ghidurile sectoriale', hy: 'Հետեւել ոլորտային ուղեցույցներին' },
        href: '#sectors',
        style: 'secondary',
        icon: 'handle-round'
      }
    ]
  },

  /* 2. JOURNEY PHASES SECTION INTRO */
  journeyPhasesSection: {
    eyebrow: { en: 'For a structured approach', uk: 'Для послідовного впровадження', ro: 'Pentru o abordare structurată', hy: 'Կառուցվածքային մոտեցման համար' },
    title: { en: 'The SME journey', uk: 'Шлях МСП', ro: 'Parcursul IMM', hy: 'ՓՄՁ-ների անցման ուղին' },
    text: {
      en: 'The SME journey represents a typical process that SMEs follow when transitioning to circular economy practices, to help you identify where you might be and from there which tools can be relevant to use. Each journey phase contains selected tools and practical guidance. Although this journey is depicted in a linear way, in reality you will often move back and forth between phases. Therefore, start where it makes more sense at your current moment.',
      uk: 'Дорожня карта для МСП відображає типовий процес, який проходять малі та середні підприємства під час переходу до практик циркулярної економіки. Вона допоможе зʼясувати, на якому етапі Ви перебуваєте, і які інструменти будуть доречними саме зараз. Кожен етап містить дібрані цифрові рішення та практичні поради. Хоча цей шлях зображено лінійним, на практиці Ви часто будете повертатися назад або перескакувати між етапами. Тож починайте з того кроку, який найбільш актуальний для вас на цей момент.',
      ro: 'Parcursul IMM reprezintă un proces tipic pe care întreprinderile îl urmează când trec la practici de economie circulară. Te ajută să identifici unde te afli și ce instrumente pot fi relevante. Fiecare fază include instrumente selectate și îndrumare practică. Deși parcursul este prezentat liniar, în realitate te vei deplasa adesea înainte și înapoi între faze. De aceea, începe acolo unde are cel mai mult sens pentru situația ta actuală.',
      hy: 'ՓՄՁ-ների անցման ուղին ներկայացնում է այն բնորոշ գործընթացը, որով ձեռնարկություններն անցնում են շրջանաձև տնտեսության գործելակերպերին։ Այն օգնում է հասկանալ, թե անցման որ փուլում եք գտնվում և որ գործիքները կարող են առավել օգտակար լինել։ Յուրաքանչյուր փուլ ներառում է ընտրված գործիքներ և գործնական ուղղորդում։ Թեև գործընթացը ներկայացված է գծային ձևով, իրականում հաճախ անհրաժեշտ է վերադառնալ նախորդ փուլերին կամ կրկին առաջ շարժվել։ Ուստի սկսեք այն փուլից, որն առավել համապատասխանում է ձեր ներկա իրավիճակին։'
    },
    callToAction: {
      text: {
        en: '**Where are you on the SME journey?** || Use this interactive diagram to understand which phase is most suitable for you to start with.',
        uk: '**Де ви перебуваєте на шляху МСП?** || Скористайтеся цією інтерактивною схемою, щоб визначити, з якого саме етапу вам найдоцільніше розпочати.',
        ro: '**Unde te afli în parcursul IMM?** || Folosește această diagramă interactivă pentru a înțelege care fază este cea mai potrivită pentru început.',
        hy: '**ՓՄՁ-ների անցման գործընթացի ո՞ր փուլում եք գտնվում։** || Օգտագործեք այս ինտերակտիվ գծապատկերը՝ հասկանալու համար, թե որ փուլից է առավել հարմար սկսել։'
      }
    }
  },

  /* 3. SECTOR TOOLS SECTION INTRO */
  sectorsSection: {
    eyebrow: { en: 'For specific sectors', uk: 'Для конкретних галузей', ro: 'Pentru sectoare specifice', hy: 'Առանձին ոլորտների համար' },
    title: { en: 'Selected sector guides', uk: 'Вибрані галузеві посібники', ro: 'Ghiduri sectoriale selectate', hy: 'Ընտրված ոլորտային ուղեցույցներ' },
    text: {
      en: 'Through the EU4Green Recovery East Programme project, four relevant sectors were selected. These are Construction, Food and Agriculture, Textiles, and Tourism. Sector guides are available to support those working specifically in these sectors in identifying relevant tools and cases.',
      uk: 'У межах проєкту програми «EU4Green Recovery East» було обрано чотири пріоритетні сектори: будівництво, продовольство та сільське господарство, текстильна промисловість і туризм. Галузеві посібники створені для того, щоб допомогти представникам цих напрямів підібрати рекомендовані практичні інструменти та приклади успішного досвіду (кейси).',
      ro: 'În cadrul proiectului EU4Green Recovery East au fost selectate patru sectoare relevante: construcții, alimentație și agricultură, textile și turism. Ghidurile sectoriale îi sprijină pe cei care lucrează în aceste sectoare să identifice instrumente și cazuri relevante.',
      hy: 'EU4Green Recovery East ծրագրի շրջանակում ընտրվել են չորս համապատասխան ոլորտներ՝ շինարարություն, սննդամթերք եւ գյուղատնտեսություն, տեքստիլ եւ զբոսաշրջություն։ Ոլորտային ուղեցույցները օգնում են այս ոլորտներում աշխատողներին գտնել համապատասխան գործիքներ եւ օրինակներ։'
    }
  },

  /*
    4. SECTOR TOOL CARDS
    Copy one complete card object to add a new sector card to this overview page.
    The slug must match an existing sector page route.
  */
  sectors: [
    {
      number: { en: 'Sector 1', uk: 'Сектор 1', ro: 'Sectorul 1', hy: 'Ոլորտ 1' },
      slug: 'construction',
      title: { en: 'Construction', uk: 'Туризм', ro: 'Construcții', hy: 'Շինարարություն' },
      description: {
        en: 'This sector guide provides tools, cases and practical guidance for construction small-medium enterprises (SMEs) adopting circular economy practices.',
        uk: 'Цей посібник містить інструменти, приклади та практичні рекомендації для малих і середніх підприємств у будівельній галузі, які впроваджують практики циркулярної економіки.',
        ro: 'Acest ghid sectorial oferă instrumente, cazuri și îndrumare practică pentru IMM-urile din construcții care adoptă practici de economie circulară.',
        hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ, օրինակներ եւ գործնական ուղղորդում շինարարության ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։'
      },
      image: '/images/sectors/construction.jpg',
      imageAlt: { en: 'Construction sector', uk: 'Будівельний сектор', ro: 'Sectorul construcțiilor', hy: 'Շինարարության ոլորտ' }
    },
    {
      number: { en: 'Sector 2', uk: 'Сектор 2', ro: 'Sectorul 2', hy: 'Ոլորտ 2' },
      slug: 'food-and-agriculture',
      title: { en: 'Food and Agriculture', uk: 'Продовольство та сільське господарство', ro: 'Alimentație și agricultură', hy: 'Սննդամթերք եւ գյուղատնտեսություն' },
      description: {
        en: 'This sector guide provides tools, cases and practical guidance for food and agriculture small-medium enterprises (SMEs) adopting circular economy practices.',
        uk: 'Цей посібник містить інструменти, прилади та практичні рекомендації для підприємств малого та середнього бізнесу у сфері продовольства й сільського господарства, які переходять до практик циркулярної економіки.',
        ro: 'Acest ghid sectorial oferă instrumente, cazuri și îndrumare practică pentru IMM-urile din alimentație și agricultură care adoptă practici de economie circulară.',
        hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ, օրինակներ եւ գործնական ուղղորդում սննդամթերքի եւ գյուղատնտեսության ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։'
      },
      image: '/images/sectors/agriculture.jpg',
      imageAlt: { en: 'Food and Agriculture sector', uk: 'Сектор харчової промисловості й сільського господарства', ro: 'Sectorul alimentației și agriculturii', hy: 'Սննդամթերքի եւ գյուղատնտեսության ոլորտ' }
    },
    {
      number: { en: 'Sector 3', uk: 'Сектор 3', ro: 'Sectorul 3', hy: 'Ոլորտ 3' },
      slug: 'textiles',
      title: { en: 'Textiles', uk: 'Текстиль', ro: 'Textile', hy: 'Տեքստիլ' },
      description: {
        en: 'This sector guide provides tools and guidance for textile small-medium enterprises (SMEs) to adopt circular economy practices.',
        uk: 'Цей посібник пропонує інструменти та рекомендації для малих і середніх підприємств у текстильній галузі щодо впровадження практик циркулярної економіки.',
        ro: 'Acest ghid sectorial oferă instrumente și îndrumare pentru IMM-urile din textile care adoptă practici de economie circulară.',
        hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործիքներ եւ ուղղորդում տեքստիլի ՓՄՁ-ների համար՝ շրջանաձեւ տնտեսության գործելակերպեր կիրառելու նպատակով։'
      },
      image: '/images/sectors/textiles.jpg',
      imageAlt: { en: 'Textiles sector', uk: 'Текстильний сектор', ro: 'Sectorul textilelor', hy: 'Տեքստիլի ոլորտ' }
    },
    {
      number: { en: 'Sector 4', uk: 'Сектор 4', ro: 'Sectorul 4', hy: 'Ոլորտ 4' },
      slug: 'tourism',
      title: { en: 'Tourism', uk: 'Туризм', ro: 'Turism', hy: 'Զբոսաշրջություն' },
      description: {
        en: 'This sector guide provides practical guidance for tourism and hospitality small-medium enterprises (SMEs) adopting circular economy practices.',
        uk: 'Цей посібник містить практичні рекомендації для малого та середнього бізнесу у туристичній галузі, які впроваджують практики циркулярної економіки.',
        ro: 'Acest ghid sectorial oferă îndrumare practică pentru IMM-urile din turism și ospitalitate care adoptă practici de economie circulară.',
        hy: 'Այս ոլորտային ուղեցույցը տրամադրում է գործնական ուղղորդում զբոսաշրջության եւ հյուրընկալության ՓՄՁ-ների համար, որոնք կիրառում են շրջանաձեւ տնտեսության գործելակերպեր։'
      },
      image: '/images/sectors/tourism.jpg',
      imageAlt: { en: 'Tourism sector', uk: 'Сектор туризму', ro: 'Sectorul turismului', hy: 'Զբոսաշրջության ոլորտ' }
    }
  ]
};
