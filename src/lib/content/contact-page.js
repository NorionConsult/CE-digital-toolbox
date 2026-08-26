/*
  Edit this file for the Contact page.
  Replace the button URL values once the feedback and testimony forms are ready.
  To update contact email links, edit only the "email" value below.
  The Contact page automatically turns each email into a clickable mailto link.
  The country flag icons use the Iconify circle-flags set. Editors normally
  only need to update the label and email, not the flagIcon value.
*/
export const contactPage = {
  pageTitle: 'Contact | Circular Economy Toolbox',
  eyebrow: 'Contact',
  title: 'Share feedback',
  intro:
    'Use this page to reach the Circular Economy Toolbox team with feedback, technical issues, tool suggestions, implementation stories or to request a certificate of contribution. Select and fill out the form that suits best for your case.',
  contactDetailsTitle: 'Contact us',
  contactDetails:
    'For other questions about the toolbox, contact the project team by email if your inquiry is not covered by one of the forms.',
  contactEmails: [
    {
      label: 'Armenia',
      email: 'info@civitta.am',
      flagIcon: 'https://api.iconify.design/circle-flags:am.svg'
    },
    {
      label: 'Moldova',
      email: 'ecircular@e-circular.org',
      flagIcon: 'https://api.iconify.design/circle-flags:md.svg'
    },
    {
      label: 'Ukraine',
      email: 'info@recpc.org',
      flagIcon: 'https://api.iconify.design/circle-flags:ua.svg'
    },
    {
      label: 'UNIDO',
      email: 'ce-digitool@unido.org',
      featured: true
    }
  ],
  feedbackForm: {
    title: 'Report issues or feedback ',
    text:
      'Have you experienced any issues in this platform? Do you have any suggestions to improve the Toolbox or make it more useful for small-medium enterprises in the region? Use the form below to report an issue or provide feedback',
    buttonLabel: 'Go to form',
    url: '#'
  },
  testimonyForm: {
    title: 'Share experiences, nominate tool and ask for a certificate',
    text:
      "Have you used one of the tools in the toolbox catalogue and had a good experience or case to share? Or do you have a tool that you would like to nominate, not currently in the tool catalogue, but that should be included? Use the form below to submit your experiences and request a certificate of participation. ",  
    buttonLabel: 'Go to form',
    url: '#'
  }
};
