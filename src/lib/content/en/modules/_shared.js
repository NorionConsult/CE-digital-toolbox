export const placeholderParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, nibh non fermentum porttitor, lorem neque consequat arcu, vitae cursus nibh sem sed lectus. Sed euismod, libero in interdum gravida, urna massa volutpat libero, non luctus erat arcu et nibh.',
  'Praesent vitae justo sed nibh suscipit tincidunt. Maecenas sit amet augue in erat posuere volutpat. Curabitur sed mauris vel neque tincidunt fermentum. Donec at arcu vel massa dictum blandit, vitae consequat lorem.',
  'Aliquam erat volutpat. Suspendisse potenti. Etiam posuere, nibh at facilisis porttitor, ligula massa interdum lacus, sed luctus mi mi ac neque. Vivamus luctus, lectus sed aliquet posuere, sapien nibh tristique leo, sed feugiat ipsum justo vel erat.'
];

export const placeholderImages = [
  {
    src: '/images/construction.jpg',
    alt: 'Placeholder image for module content',
    caption: 'Placeholder caption text for a supporting module image.'
  },
  {
    src: '/images/textiles.jpg',
    alt: 'Placeholder image for module content',
    caption: 'Placeholder caption text for a second supporting module image.'
  }
];

/*
  Combines an editor-friendly, page-ordered module file into the shape used by
  the shared Svelte module template.

  Editors should not need to change this function. Edit the individual module
  files instead.
*/
/**
 * @param {{
 *   moduleCard: Record<string, any>;
 *   hero: Record<string, any> & { paragraphs?: string[]; bodyParagraphs?: string[] };
 *   sectionButtons?: { sectionId: string; label: string }[];
 *   pathwaySection?: {
 *     title: string;
 *     paragraphs: string[];
 *     images?: { src: string; alt: string; caption: string }[];
 *     cards?: {
 *       sectionId: string;
 *       number: string;
 *       title: string;
 *       description: string;
 *       keyOutputs: string[];
 *     }[];
 *   } | null;
 *   detailSections?: (Record<string, any> & {
 *     id: string;
 *     title: string;
 *     paragraphs: string[];
 *   })[];
 *   moduleSummary?: {
 *     title: string;
 *     paragraphs: string[];
 *     checklist: string[];
 *   } | null;
 *   downloads: { modulePdf: string; toolsPdf: string };
 * }} config
 * @returns {any}
 */
export function defineModulePage(config) {
  const {
    moduleCard,
    hero,
    sectionButtons = [],
    pathwaySection,
    detailSections = [],
    moduleSummary,
    downloads
  } = config;
  const buttonLabels = new Map(
    sectionButtons.map((button) => [button.sectionId, button.label])
  );
  const pathwayCards = new Map(
    (pathwaySection?.cards ?? []).map((card) => [card.sectionId, card])
  );

  const sections = detailSections.map((section) => {
    const pathwayCard = pathwayCards.get(section.id);

    return {
      ...section,
      number: pathwayCard?.number ?? section.number ?? '',
      title: pathwayCard?.title ?? section.title,
      navigationLabel: buttonLabels.get(section.id) ?? pathwayCard?.title ?? section.title,
      description: pathwayCard?.description ?? section.description ?? '',
      keyOutputs: pathwayCard?.keyOutputs ?? section.keyOutputs ?? [],
      bodyTitle: section.title,
      bodyParagraphs: section.paragraphs
    };
  });

  return {
    ...moduleCard,
    ...hero,
    bodyTitle: pathwaySection?.title ?? hero.bodyTitle,
    bodyParagraphs: pathwaySection?.paragraphs ?? hero.paragraphs ?? hero.bodyParagraphs ?? [],
    bodyImages: pathwaySection?.images ?? hero.bodyImages ?? [],
    sections,
    summaryTitle: moduleSummary?.title,
    summaryParagraphs: moduleSummary?.paragraphs,
    summaryChecklist: moduleSummary?.checklist,
    modulePdf: downloads.modulePdf,
    toolsPdf: downloads.toolsPdf
  };
}
