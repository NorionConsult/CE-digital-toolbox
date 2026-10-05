/*
  Edit this file for the Contact page.
  Replace the button URL values once the feedback and testimony forms are ready.
  To update contact email links, edit only the "email" value below.
  The Contact page automatically turns each email into a clickable mailto link.
  The country flag icons are local SVG files in static/icons/circle-flags/.
  Editors normally only need to update the label and email, not the flagIcon value.
*/
export const contactPage = {
  pageTitle: { en: 'Contact | Circular Economy Toolbox', uk: 'Зв´язатися з нами  | Інструментарій циркулярної економіки', ro: 'Contact | Set de instrumente pentru economia circulară', hy: 'Կապ | Շրջանաձեւ տնտեսության գործիքակազմ' },
  eyebrow: { en: 'Contact', uk: 'Зв´язатися з нами ', ro: 'Contact', hy: 'Կապ' },
  title: { en: 'Share feedback', uk: 'Поділитися відгуком', ro: 'Trimite feedback', hy: 'Կիսվել կարծիքով' },
  intro: {
    en: 'Use this page to reach the Circular Economy Toolbox team with feedback, technical issues, tool suggestions, implementation stories or to request a certificate of contribution. Select and fill out the form that suits best for your case.',
    uk: 'На цій сторінці Ви можете зв’язатися з командою платформи «Інструментарій циркулярної економіки»: залишити відгук, повідомити про технічні проблеми, запропонувати новий інструмент, розповісти про власний досвід упровадження або подати заявку на сертифікат за внесок у проєкт. Оберіть і заповніть форму, яка найкраще відповідає вашій меті.',
    ro: 'Folosește această pagină pentru a contacta echipa Setului de instrumente pentru economia circulară cu feedback, probleme tehnice, sugestii de instrumente, povești de implementare sau pentru a solicita un certificat de contribuție. Selectează și completează formularul potrivit cazului tău.',
    hy: 'Օգտագործեք այս էջը՝ Շրջանաձեւ տնտեսության գործիքակազմի թիմին հետադարձ կապ, տեխնիկական խնդիրներ, գործիքների առաջարկներ, իրականացման պատմություններ ուղարկելու կամ ներդրման վկայական խնդրելու համար։ Ընտրեք եւ լրացրեք ձեր դեպքին ամենահարմար ձեւը։'
  },
  contactDetailsTitle: { en: 'Contact us', uk: 'Зв’язатися з нами', ro: 'Contactează-ne', hy: 'Կապվեք մեզ հետ' },
  contactDetails: {
    en: 'For other questions about the toolbox, contact the project team by email if your inquiry is not covered by one of the forms.',
    uk: 'Маєте інші запитання щодо Інструментарію, для яких немає відповідної форми? Напишіть команді проєкту на електронну пошту.',
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
      uk: 'Виникли складнощі під час користування платформою? Маєте пропозиції, як покращити Інструментарій або зробити його кориснішим для малого й середнього бізнесу в регіоні? Скористайтеся формою нижче, щоб повідомити про технічну несправність або поділитися відгуком.',
      ro: 'Ai întâmpinat probleme pe această platformă? Ai sugestii pentru a îmbunătăți setul de instrumente sau pentru a-l face mai util IMM-urilor din regiune? Folosește formularul de mai jos pentru a raporta o problemă sau a trimite feedback.',
      hy: 'Այս հարթակում խնդիրների հանդիպե՞լ եք։ Ունե՞ք առաջարկներ՝ գործիքակազմը բարելավելու կամ տարածաշրջանի ՓՄՁ-ների համար ավելի օգտակար դարձնելու համար։ Օգտագործեք ստորեւ նշված ձեւը՝ խնդիր հաղորդելու կամ կարծիք ուղարկելու համար։'
    },
    buttonLabel: { en: 'Go to form', uk: 'Перейти до форми', ro: 'Mergi la formular', hy: 'Անցնել ձեւին' },
    url: '#'
  },
  testimonyForm: {
    title: { en: 'Share experiences, nominate tool and ask for a certificate', uk: 'Поділитися досвідом, запропонувати інструмент або отримати сертифікат', ro: 'Împărtășește experiențe, propune un instrument și solicită un certificat', hy: 'Կիսվեք փորձով, առաջարկեք գործիք եւ խնդրեք վկայական' },
    text: {
      en: 'Have you used one of the tools in the toolbox catalogue and had a good experience or case to share? Or do you have a tool that you would like to nominate, not currently in the tool catalogue, but that should be included? Use the form below to submit your experiences and request a certificate of participation. ',
      uk: 'Ви вже користувалися інструментами з нашого каталогу й маєте успішний кейс або корисний досвід? Хочете порекомендувати інструмент, якого бракує на платформі? Заповніть форму нижче, щоб поділитися своїми результатами та подати заявку на отримання сертифіката учасника.',
      ro: 'Ai folosit unul dintre instrumentele din catalog și ai o experiență bună sau un caz de împărtășit? Sau ai un instrument pe care ai dori să îl propui, care nu este încă în catalog, dar ar trebui inclus? Folosește formularul de mai jos pentru a transmite experiențele tale și pentru a solicita un certificat de participare.',
      hy: 'Օգտագործե՞լ եք կատալոգի գործիքներից մեկը եւ ունե՞ք լավ փորձ կամ օրինակ, որով ցանկանում եք կիսվել։ Կամ ունե՞ք գործիք, որը դեռ կատալոգում չկա, բայց արժե ներառել։ Օգտագործեք ստորեւ նշված ձեւը՝ ձեր փորձը ներկայացնելու եւ մասնակցության վկայական խնդրելու համար։'
    },
    buttonLabel: { en: 'Go to form', uk: 'Перейти до форми', ro: 'Mergi la formular', hy: 'Անցնել ձեւին' },
    url: '#'
  }
};
