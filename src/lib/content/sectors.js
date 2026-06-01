const placeholderParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, nibh non fermentum porttitor, lorem neque consequat arcu, vitae cursus nibh sem sed lectus. Sed euismod, libero in interdum gravida, urna massa volutpat libero, non luctus erat arcu et nibh.',
  'Praesent vitae justo sed nibh suscipit tincidunt. Maecenas sit amet augue in erat posuere volutpat. Curabitur sed mauris vel neque tincidunt fermentum. Donec at arcu vel massa dictum blandit, vitae consequat lorem.',
  'Aliquam erat volutpat. Suspendisse potenti. Etiam posuere, nibh at facilisis porttitor, ligula massa interdum lacus, sed luctus mi mi ac neque. Vivamus luctus, lectus sed aliquet posuere, sapien nibh tristique leo, sed feugiat ipsum justo vel erat.'
];

const placeholderChecklist = [
  'Review the main material, energy and waste flows for this sector.',
  'Identify where circular economy practices could reduce cost, risk or resource use.',
  'Check whether relevant internal data is available for the selected tools.',
  'Select priority actions and assign an owner for follow-up.'
];

/*
  Edit this file to add or update sector package cards and sector pages.
*/
export const sectors = [
  {
    number: 'Sector 1',
    slug: 'construction',
    title: 'Construction',
    description: 'This sector package provides tools and guidance for the construction industry to adopt circular economy practices.',
    image: '/images/construction.jpg',
    imageAlt: 'Construction sector',
    introductionTitle: 'Introduction to the sector',
    introductionParagraphs: placeholderParagraphs,
    checklistTitle: 'Sector readiness checklist',
    checklistItems: placeholderChecklist,
    casesTitle: 'Case examples',
    caseExamples: [
      {
        title: 'Construction case example',
        image: '/images/construction.jpg',
        imageAlt: 'Construction case example placeholder',
        text: 'Placeholder text for a future construction case example. Replace this with a short summary, context, action and outcome.'
      }
    ]
  },
  {
    number: 'Sector 2',
    slug: 'food',
    title: 'Food',
    description: 'This sector package provides tools and guidance for the food industry to adopt circular economy practices.',
    image: '/images/food.jpg',
    imageAlt: 'Food sector',
    introductionTitle: 'Introduction to the sector',
    introductionParagraphs: placeholderParagraphs,
    checklistTitle: 'Sector readiness checklist',
    checklistItems: placeholderChecklist,
    casesTitle: 'Case examples',
    caseExamples: [
      {
        title: 'Food case example',
        image: '/images/food.jpg',
        imageAlt: 'Food case example placeholder',
        text: 'Placeholder text for a future food case example. Replace this with a short summary, context, action and outcome.'
      }
    ]
  },
  {
    number: 'Sector 3',
    slug: 'textiles',
    title: 'Textiles',
    description: 'This sector package provides tools and guidance for the textiles industry to adopt circular economy practices.',
    image: '/images/textiles.jpg',
    imageAlt: 'Textiles sector',
    introductionTitle: 'Introduction to the sector',
    introductionParagraphs: placeholderParagraphs,
    checklistTitle: 'Sector readiness checklist',
    checklistItems: placeholderChecklist,
    casesTitle: 'Case examples',
    caseExamples: [
      {
        title: 'Textiles case example',
        image: '/images/textiles.jpg',
        imageAlt: 'Textiles case example placeholder',
        text: 'Placeholder text for a future textiles case example. Replace this with a short summary, context, action and outcome.'
      }
    ]
  },
  {
    number: 'Sector 4',
    slug: 'tourism',
    title: 'Tourism',
    description: 'This sector package provides tools and guidance for the tourism industry to adopt circular economy practices.',
    image: '/images/tourism.jpg',
    imageAlt: 'Tourism sector',
    introductionTitle: 'Introduction to the sector',
    introductionParagraphs: placeholderParagraphs,
    checklistTitle: 'Sector readiness checklist',
    checklistItems: placeholderChecklist,
    casesTitle: 'Case examples',
    caseExamples: [
      {
        title: 'Tourism case example',
        image: '/images/tourism.jpg',
        imageAlt: 'Tourism case example placeholder',
        text: 'Placeholder text for a future tourism case example. Replace this with a short summary, context, action and outcome.'
      }
    ]
  }
];
