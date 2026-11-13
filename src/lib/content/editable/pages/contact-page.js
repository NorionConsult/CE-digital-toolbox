/*
  Edit this file for the Contact page.
  Edit feedbackForm.url below to set the contact form link for each language.
  The English (en) URL is the shared default. Empty language values use that URL.
  Add or replace a language's URL to send its visitors to a different form.
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
    en: 'Use this page to reach the Circular Economy Toolbox team with feedback, technical issues, tool suggestions, implementation stories or to request a certificate of contribution. Complete the form below to share your feedback or contribution.',
    uk: 'На цій сторінці Ви можете зв’язатися з командою платформи «Інструментарій циркулярної економіки»: залишити відгук, повідомити про технічні проблеми, запропонувати новий інструмент, розповісти про власний досвід упровадження або подати заявку на сертифікат за внесок у проєкт. Заповніть форму нижче, щоб поділитися відгуком або зробити внесок у проєкт.',
    ro: 'Folosește această pagină pentru a contacta echipa responsabilă de resursele pentru economia circulară. Ne poți transmite feedback, semnala probleme tehnice, propune resurse noi, împărtăși exemple de implementare sau solicita un certificat de contribuție. Completează formularul de mai jos pentru a trimite feedback sau o contribuție.',
    hy: 'Օգտագործեք այս էջը՝ Շրջանաձեւ տնտեսության գործիքակազմի թիմին հետադարձ կապ, տեխնիկական խնդիրներ, գործիքների առաջարկներ, իրականացման պատմություններ ուղարկելու կամ ներդրման վկայական խնդրելու համար։ Լրացրեք ստորեւ ներկայացված ձեւը՝ ձեր կարծիքը հայտնելու կամ ծրագրում ներդրում ունենալու համար։'
  },
  contactDetailsTitle: { en: 'Contact us', uk: 'Зв’язатися з нами', ro: 'Contactează-ne', hy: 'Կապվեք մեզ հետ' },
  contactDetails: {
    en: 'For other questions about the toolbox that are not covered by the form, contact the project team by email.',
    uk: 'Якщо у Вас є інші запитання щодо Інструментарію, які не охоплює форма, напишіть команді проєкту на електронну пошту.',
    ro: 'Pentru alte întrebări despre setul de instrumente care nu sunt acoperite de formular, contactează echipa proiectului prin e-mail.',
    hy: 'Գործիքակազմի վերաբերյալ այլ հարցերի դեպքում, որոնք չեն ընդգրկվում ձեւում, կապվեք ծրագրի թիմի հետ էլ. փոստով։'
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
    title: { en: 'Feedback and contributions', uk: 'ВІДГУКИ ТА ПРОПОЗИЦІЇ', ro: 'FEEDBACK ȘI CONTRIBUȚII', hy: 'Հետադարձ կապ եւ ներդրում ծրագրում' },
    text: {
      en: 'Have you encountered an issue, have suggestions for improving the Toolbox, or know of a tool we should include? You can also share your experiences using our tools, submit an implementation story or case, and request a certificate of contribution.',
      uk: 'Помітили проблему, маєте пропозиції щодо вдосконалення Інструментарію або знаєте про корисне рішення, яке варто до нього додати? Ви також можете поділитися досвідом використання наших інструментів, запропонувати практичний приклад їх застосування або повідомити про використання Інструментарію, щоб отримати сертифікат.',
      ro: 'Ai întâmpinat o problemă, ai sugestii pentru îmbunătățirea setului de instrumente sau cunoști un instrument pe care ar trebui să îl includem? Poți, de asemenea, să împărtășești experiența ta de utilizare a instrumentelor noastre, să trimiți o poveste de implementare sau un studiu de caz și să soliciți un certificat de contribuție.',
      hy: 'Հարթակից օգտվելիս խնդրի հանդիպե՞լ եք, ունե՞ք գործիքակազմը բարելավելու առաջարկներ կամ գիտե՞ք որեւէ գործիք, որը պետք է ներառենք։ Կարող եք նաեւ կիսվել մեր գործիքների օգտագործման ձեր փորձով, ներկայացնել իրականացման պատմություն կամ գործնական օրինակ եւ խնդրել ծրագրում ձեր ներդրումը հաստատող վկայական։'
    },
    buttonLabel: { en: 'Go to form', uk: 'Перейти до форми', ro: 'Mergi la formular', hy: 'Անցնել ձեւին' },
    url: {
      // Shared form for English and any language left empty below.
      en: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=MUlqQlzsy0-dEDNj69-SgMNG0Zn1xb1LuR1JCdCDGdZURVZKMEVOSzkzSlQ3Tlg4R0YwNTg5MlZUMS4u&route=shorturl',
      uk: '', // Ukrainian: use the shared form until a separate URL is added.
      ro: '', // Romanian: use the shared form until a separate URL is added.
      hy: 'https://forms.cloud.microsoft/e/nhVPNb13d4' // Armenian-specific form.
    }
  }
};
