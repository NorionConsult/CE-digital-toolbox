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
  pageTitle: { en: 'Contact | Circular Economy Toolbox', uk: 'Контакти | Інструментарій циркулярної економіки', ro: 'Contact | Set de instrumente pentru economia circulară', hy: 'Կապ | Շրջանաձեւ տնտեսության գործիքակազմ' },
  eyebrow: { en: 'Contact', uk: 'Контакти', ro: 'Contact', hy: 'Կապ' },
  title: { en: 'Feedback and contributions', uk: 'Відгуки та пропозиції', ro: 'Feedback și contribuții', hy: 'Հետադարձ կապ եւ ներդրում ծրագրում' },
  intro: {
    en: 'Do you have any feedback, ideas or questions about the Circular Economy Toolbox? Use the form below to get in touch with our team, or contact your local focal point by email. We welcome your suggestions, experiences and requests for support.',
    uk: 'Маєте відгуки, ідеї або запитання щодо Інструментарію циркулярної економіки? Скористайтеся формою нижче, щоб зв’язатися з нашою командою, або напишіть електронного листа відповідній контактній особі у Вашій країні. Ми будемо раді Вашим пропозиціям, досвіду, яким Ви поділитеся, та запитам на підтримку.',
    ro: 'Ai feedback, idei sau întrebări despre Setul de instrumente pentru economia circulară? Folosește formularul de mai jos pentru a lua legătura cu echipa noastră sau contactează prin e-mail persoana de contact locală. Așteptăm cu interes sugestiile tale, experiențele împărtășite și solicitările de sprijin.',
    hy: 'Ունե՞ք կարծիքներ, գաղափարներ կամ հարցեր Շրջանաձեւ տնտեսության գործիքակազմի վերաբերյալ։ Օգտագործեք ստորեւ ներկայացված ձեւը՝ մեր թիմի հետ կապ հաստատելու համար, կամ էլեկտրոնային փոստով դիմեք ձեր տեղական համակարգողին։ Սպասում ենք ձեր առաջարկներին, փորձի մասին պատմություններին եւ աջակցության հարցումներին։'
  },
  contactDetailsTitle: { en: 'Contact us', uk: 'Зв’язатися з нами', ro: 'Contactează-ne', hy: 'Կապվեք մեզ հետ' },
  contactDetails: {
    en: 'For general questions or inquiries not covered by the form, please contact your relevant focal point or the UNIDO project team.',
    uk: 'Якщо у Вас виникли загальні запитання або питання, на які немає відповідей у цій формі, зверніться до відповідного національного координатора у Вашій країні або до команди проєкту ЮНІДО.',
    ro: 'Pentru întrebări generale sau solicitări care nu sunt acoperite de formular, contactează persoana de contact relevantă sau echipa de proiect UNIDO.',
    hy: 'Ընդհանուր հարցերի կամ ձեւում չընդգրկված հարցումների դեպքում խնդրում ենք դիմել համապատասխան համակարգողին կամ UNIDO-ի ծրագրի թիմին։'
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
      // Edit each language's label here. Empty values use the English label.
      label: {
        en: 'UNIDO',
        uk: 'ЮНІДО',
        ro: '',
        hy: ''
      },
      email: 'ce-digitool@unido.org',
      featured: true
    }
  ],
  feedbackForm: {
    title: { en: 'Get in touch and share your experience', uk: 'Зв’яжіться з нами та поділіться своїм досвідом', ro: 'Contactează-ne și împărtășește-ți experiența', hy: 'Կապվեք մեզ հետ եւ կիսվեք ձեր փորձով' },
    // Use || between paragraphs or list items, and start each bullet with "- ".
    text: {
      en: 'Use the form to: || - Request guidance on selecting tools or planning circular economy actions || - Share your progress and apply for a certificate || - Submit a success story or good practice || - Suggest new tools and resources || - Report technical issues and translation errors. || Your input helps us improve the Toolbox and make it more useful for your context.',
      uk: 'Скористайтеся формою, щоб: || - Отримати рекомендації щодо вибору інструментів або планування заходів із циркулярної економіки || - Поділитися досвідом використання Інструментарію та подати заявку на отримання сертифіката || - Поділитися успішним досвідом або прикладом вдалої практики || - Запропонувати нові інструменти та корисні матеріали || - Повідомити про технічні проблеми та помилки в перекладі. || Ваші відгуки та пропозиції допомагають нам удосконалювати Інструментарій, щоб він був якомога кориснішим для Вас',
      ro: 'Folosește formularul pentru a: || - Solicita îndrumare în alegerea instrumentelor sau planificarea acțiunilor de economie circulară || - Împărtăși progresele tale și solicita un certificat || - Trimite o poveste de succes sau un exemplu de bună practică || - Propune instrumente și resurse noi || - Raporta probleme tehnice și erori de traducere. || Contribuția ta ne ajută să îmbunătățim setul de instrumente și să îl adaptăm mai bine contextului tău.',
      hy: 'Ձեւի միջոցով կարող եք՝ || - Ստանալ խորհրդատվություն գործիքների ընտրության կամ շրջանաձեւ տնտեսության գործողությունների պլանավորման վերաբերյալ || - Կիսվել ձեր առաջընթացով եւ դիմել վկայական ստանալու համար || - Ներկայացնել հաջողության պատմություն կամ լավ գործելակերպի օրինակ || - Առաջարկել նոր գործիքներ եւ ռեսուրսներ || - Հաղորդել տեխնիկական խնդիրների եւ թարգմանական սխալների մասին։ || Ձեր ներդրումն օգնում է մեզ բարելավել գործիքակազմը եւ այն ավելի օգտակար դարձնել ձեր պայմաններում։'
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
