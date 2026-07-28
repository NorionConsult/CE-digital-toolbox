/*
  Combines an editor-friendly, page-ordered journey phase file into the shape used by
  the shared Svelte journey phase template.

  Editors should not need to change this function. Edit the individual journey phase
  files instead.
*/
/**
 * @param {{
 *   phaseCard: Record<string, any>;
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
 *   phaseSummary?: {
 *     title: string;
 *     paragraphs: string[];
 *     checklist: string[];
 *   } | null;
 * }} config
 * @returns {any}
 */
export function defineJourneyPhasePage(config) {
  const {
    phaseCard,
    hero,
    sectionButtons = [],
    pathwaySection,
    detailSections = [],
    phaseSummary
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
    ...phaseCard,
    ...hero,
    bodyTitle: pathwaySection?.title ?? hero.bodyTitle,
    bodyParagraphs: pathwaySection?.paragraphs ?? hero.paragraphs ?? hero.bodyParagraphs ?? [],
    bodyImages: pathwaySection?.images ?? hero.bodyImages ?? [],
    sections,
    summaryTitle: phaseSummary?.title,
    summaryParagraphs: phaseSummary?.paragraphs,
    summaryChecklist: phaseSummary?.checklist
  };
}
