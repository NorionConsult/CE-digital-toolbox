/*
  Edit this file for Tools page labels and intro text.
  Tools themselves are edited in tool-catalogue.js.
  Old route aliases are kept only so older links continue to work.
  The Journey phase, Language and Access filter greying-out behavior is handled in
  src/lib/components/pages/ToolsPage.svelte, not in this editor text file.
  "None" is intentionally not shown as a Journey phase filter option.
*/
export const toolsPage = {
  pageTitle: { en: 'Tools | Circular Economy Toolbox', uk: 'Інструменти | Інструментарій циркулярної економіки', ro: 'Instrumente | Set de instrumente pentru economia circulară', hy: 'Գործիքներ | Շրջանաձեւ տնտեսության գործիքակազմ' },
  eyebrow: { en: 'Selected tools to support small-medium enterprises (SMEs)', uk: 'Відібрані інструменти для підтримки малих і середніх підприємств (МСП)', ro: 'Instrumente selectate pentru sprijinirea întreprinderilor mici și mijlocii (IMM-uri)', hy: 'Ընտրված գործիքներ փոքր եւ միջին ձեռնարկություններին (ՓՄՁ) աջակցելու համար' },
  title: { en: 'Tool Catalogue', uk: 'Каталог інструментів', ro: 'Catalog de instrumente', hy: 'Գործիքների կատալոգ' },
  intro: {
    en: 'Browse the Circular Economy Toolbox tools and filter tools by sector, journey phase, language and access. The journey phase refers to the different stages of the circular economy transition as outlined in the SME Journey guide. The tools in this catalogue include the tools in the SME journey phases and sector guides, as well as additional tools that are not included in the guided pathways.',
    uk: 'Переглядайте інструменти Інструментарію циркулярної економіки та фільтруйте їх за сектором, фазою шляху, мовою й доступом. Фаза шляху означає різні етапи переходу до циркулярної економіки, описані в путівнику SME Journey. Каталог містить інструменти з фаз шляху МСП і галузевих путівників, а також додаткові інструменти, які не включені до покрокових маршрутів.',
    ro: 'Explorează instrumentele din Setul de instrumente pentru economia circulară și filtrează-le după sector, faza parcursului, limbă și acces. Faza parcursului se referă la diferitele etape ale tranziției către economia circulară, așa cum sunt prezentate în ghidul SME Journey. Catalogul include instrumentele din fazele parcursului IMM și din ghidurile sectoriale, precum și instrumente suplimentare care nu sunt incluse în parcursurile ghidate.',
    hy: 'Դիտեք Շրջանաձեւ տնտեսության գործիքակազմի գործիքները եւ զտեք դրանք ըստ ոլորտի, ճանապարհի փուլի, լեզվի եւ հասանելիության։ Ճանապարհի փուլը վերաբերում է շրջանաձեւ տնտեսության անցման տարբեր փուլերին, ինչպես ներկայացված է ՓՄՁ ճանապարհի ուղեցույցում։ Այս կատալոգում ներառված են ՓՄՁ ճանապարհի փուլերի եւ ոլորտային ուղեցույցների գործիքները, ինչպես նաեւ լրացուցիչ գործիքներ, որոնք ներառված չեն ուղեցույցներում։'
  },
  searchLabel: { en: 'Search', uk: 'Пошук', ro: 'Caută', hy: 'Որոնում' },
  searchPlaceholder: { en: 'Search by title, purpose, provider or access', uk: 'Шукайте за назвою, призначенням, постачальником або доступом', ro: 'Caută după titlu, scop, furnizor sau acces', hy: 'Որոնել ըստ վերնագրի, նպատակի, տրամադրողի կամ հասանելիության' },
  filtersLabel: { en: 'Tools filters', uk: 'Фільтри інструментів', ro: 'Filtre pentru instrumente', hy: 'Գործիքների զտիչներ' },
  phaseLabel: { en: 'Journey phase', uk: 'Фаза шляху', ro: 'Faza parcursului', hy: 'Ճանապարհի փուլ' },
  disabledPhaseTitle: { en: 'No tools available for this filter combination.', uk: 'Для цієї комбінації фільтрів немає інструментів.', ro: 'Nu există instrumente pentru această combinație de filtre.', hy: 'Այս զտիչների համակցության համար գործիքներ չկան։' },
  sectorLabel: { en: 'Sector', uk: 'Сектор', ro: 'Sector', hy: 'Ոլորտ' },
  languageLabel: { en: 'Language', uk: 'Мова', ro: 'Limbă', hy: 'Լեզու' },
  disabledLanguageTitle: { en: 'No tools available for this filter combination.', uk: 'Для цієї комбінації фільтрів немає інструментів.', ro: 'Nu există instrumente pentru această combinație de filtre.', hy: 'Այս զտիչների համակցության համար գործիքներ չկան։' },
  accessLabel: { en: 'Access', uk: 'Доступ', ro: 'Acces', hy: 'Հասանելիություն' },
  disabledAccessTitle: { en: 'No tools available for this filter combination.', uk: 'Для цієї комбінації фільтрів немає інструментів.', ro: 'Nu există instrumente pentru această combinație de filtre.', hy: 'Այս զտիչների համակցության համար գործիքներ չկան։' },
  resetButton: { en: 'Reset filters', uk: 'Скинути фільтри', ro: 'Resetează filtrele', hy: 'Մաքրել զտիչները' },
  resultPrefix: { en: 'Showing', uk: 'Показано', ro: 'Se afișează', hy: 'Ցուցադրվում է' },
  resultMiddle: { en: 'of', uk: 'з', ro: 'din', hy: '/' },
  resultSuffix: { en: 'tools', uk: 'інструментів', ro: 'instrumente', hy: 'գործիք' },
  emptyTitle: { en: 'No tools found', uk: 'Інструменти не знайдено', ro: 'Nu s-au găsit instrumente', hy: 'Գործիքներ չեն գտնվել' },
  emptyText: { en: 'Try changing or resetting the filters.', uk: 'Спробуйте змінити або скинути фільтри.', ro: 'Încearcă să modifici sau să resetezi filtrele.', hy: 'Փորձեք փոխել կամ մաքրել զտիչները։' }
};
