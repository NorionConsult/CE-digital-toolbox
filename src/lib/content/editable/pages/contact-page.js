/*
  Edit this file for the Contact page.
  Replace the button URL values once the feedback and testimony forms are ready.
  To update contact email links, edit only the "email" value below.
  The Contact page automatically turns each email into a clickable mailto link.
  The country flag icons are local SVG files in static/icons/circle-flags/.
  Editors normally only need to update the label and email, not the flagIcon value.
*/
export const contactPage = {
  pageTitle: { en: 'Contact | Circular Economy Toolbox', uk: 'Контакти | Інструментарій циркулярної економіки', ro: 'Contact | Set de instrumente pentru economia circulară', hy: 'Կապ | Շրջանաձեւ տնտեսության գործիքակազմ' },
  eyebrow: { en: 'Contact', uk: 'Контакти', ro: 'Contact', hy: 'Կապ' },
  title: { en: 'Share feedback', uk: 'Поділіться відгуком', ro: 'Trimite feedback', hy: 'Կիսվել կարծիքով' },
  intro: {
    en: 'Use this page to reach the Circular Economy Toolbox team with feedback, technical issues, tool suggestions, implementation stories or to request a certificate of contribution. Select and fill out the form that suits best for your case.',
    uk: 'Скористайтеся цією сторінкою, щоб зв’язатися з командою Інструментарію циркулярної економіки щодо відгуків, технічних питань, пропозицій інструментів, історій впровадження або запиту сертифіката про внесок. Оберіть і заповніть форму, яка найкраще відповідає вашому випадку.',
    ro: 'Folosește această pagină pentru a contacta echipa Setului de instrumente pentru economia circulară cu feedback, probleme tehnice, sugestii de instrumente, povești de implementare sau pentru a solicita un certificat de contribuție. Selectează și completează formularul potrivit cazului tău.',
    hy: 'Օգտագործեք այս էջը՝ Շրջանաձեւ տնտեսության գործիքակազմի թիմին հետադարձ կապ, տեխնիկական խնդիրներ, գործիքների առաջարկներ, իրականացման պատմություններ ուղարկելու կամ ներդրման վկայական խնդրելու համար։ Ընտրեք եւ լրացրեք ձեր դեպքին ամենահարմար ձեւը։'
  },
  contactDetailsTitle: { en: 'Contact us', uk: 'Зв’яжіться з нами', ro: 'Contactează-ne', hy: 'Կապվեք մեզ հետ' },
  contactDetails: {
    en: 'For other questions about the toolbox, contact the project team by email if your inquiry is not covered by one of the forms.',
    uk: 'З інших питань щодо інструментарію звертайтеся до команди проєкту електронною поштою, якщо ваш запит не охоплено жодною з форм.',
    ro: 'Pentru alte întrebări despre setul de instrumente, contactează echipa proiectului prin e-mail dacă solicitarea ta nu este acoperită de unul dintre formulare.',
    hy: 'Գործիքակազմի վերաբերյալ այլ հարցերի դեպքում կապվեք ծրագրի թիմի հետ էլ. փոստով, եթե ձեր հարցումը չի ընդգրկվում ձեւերից որեւէ մեկով։'
  },
  contactEmails: [
    {
      label: { en: 'Armenia', uk: 'Вірменія', ro: 'Armenia', hy: 'Հայաստան' },
      email: 'info@civitta.am',
      flagIcon: '/icons/circle-flags/circle-flags-am.svg'
    },
    {
      label: { en: 'Moldova', uk: 'Молдова', ro: 'Moldova', hy: 'Մոլդովա' },
      email: 'ecircular@e-circular.org',
      flagIcon: '/icons/circle-flags/circle-flags-md.svg'
    },
    {
      label: { en: 'Ukraine', uk: 'Україна', ro: 'Ucraina', hy: 'Ուկրաինա' },
      email: 'info@recpc.org',
      flagIcon: '/icons/circle-flags/circle-flags-ua.svg'
    },
    {
      label: 'UNIDO',
      email: 'ce-digitool@unido.org',
      featured: true
    }
  ],
  feedbackForm: {
    title: { en: 'Report issues or feedback ', uk: 'Повідомити про проблему або залишити відгук', ro: 'Raportează probleme sau trimite feedback', hy: 'Հաղորդել խնդիրների մասին կամ թողնել կարծիք' },
    text: {
      en: 'Have you experienced any issues in this platform? Do you have any suggestions to improve the Toolbox or make it more useful for small-medium enterprises in the region? Use the form below to report an issue or provide feedback',
      uk: 'Чи виникали у вас проблеми з цією платформою? Маєте пропозиції, як покращити інструментарій або зробити його кориснішим для МСП у регіоні? Скористайтеся формою нижче, щоб повідомити про проблему або залишити відгук.',
      ro: 'Ai întâmpinat probleme pe această platformă? Ai sugestii pentru a îmbunătăți setul de instrumente sau pentru a-l face mai util IMM-urilor din regiune? Folosește formularul de mai jos pentru a raporta o problemă sau a trimite feedback.',
      hy: 'Այս հարթակում խնդիրների հանդիպե՞լ եք։ Ունե՞ք առաջարկներ՝ գործիքակազմը բարելավելու կամ տարածաշրջանի ՓՄՁ-ների համար ավելի օգտակար դարձնելու համար։ Օգտագործեք ստորեւ նշված ձեւը՝ խնդիր հաղորդելու կամ կարծիք ուղարկելու համար։'
    },
    buttonLabel: { en: 'Go to form', uk: 'Перейти до форми', ro: 'Mergi la formular', hy: 'Անցնել ձեւին' },
    url: '#'
  },
  testimonyForm: {
    title: { en: 'Share experiences, nominate tool and ask for a certificate', uk: 'Поділіться досвідом, запропонуйте інструмент і запросіть сертифікат', ro: 'Împărtășește experiențe, propune un instrument și solicită un certificat', hy: 'Կիսվեք փորձով, առաջարկեք գործիք եւ խնդրեք վկայական' },
    text: {
      en: 'Have you used one of the tools in the toolbox catalogue and had a good experience or case to share? Or do you have a tool that you would like to nominate, not currently in the tool catalogue, but that should be included? Use the form below to submit your experiences and request a certificate of participation. ',
      uk: 'Чи користувалися ви одним з інструментів каталогу та маєте позитивний досвід або кейс, яким хочете поділитися? Або маєте інструмент, якого ще немає в каталозі, але який варто включити? Скористайтеся формою нижче, щоб подати свій досвід і запросити сертифікат участі.',
      ro: 'Ai folosit unul dintre instrumentele din catalog și ai o experiență bună sau un caz de împărtășit? Sau ai un instrument pe care ai dori să îl propui, care nu este încă în catalog, dar ar trebui inclus? Folosește formularul de mai jos pentru a transmite experiențele tale și pentru a solicita un certificat de participare.',
      hy: 'Օգտագործե՞լ եք կատալոգի գործիքներից մեկը եւ ունե՞ք լավ փորձ կամ օրինակ, որով ցանկանում եք կիսվել։ Կամ ունե՞ք գործիք, որը դեռ կատալոգում չկա, բայց արժե ներառել։ Օգտագործեք ստորեւ նշված ձեւը՝ ձեր փորձը ներկայացնելու եւ մասնակցության վկայական խնդրելու համար։'
    },
    buttonLabel: { en: 'Go to form', uk: 'Перейти до форми', ro: 'Mergi la formular', hy: 'Անցնել ձեւին' },
    url: '#'
  }
};
