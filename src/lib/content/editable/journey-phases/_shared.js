/*
  Combines an editor-friendly, page-ordered journey phase file into the shape used by
  the shared Svelte journey phase template.

  Editors should not need to change this function. Edit the individual journey phase
  files instead.
*/
/**
 * @param {any} config
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

  /** @param {any} button */
  const getButtonLabelEntry = (button) => [button.sectionId, button.label];
  /** @param {any} card */
  const getPathwayCardEntry = (card) => [card.sectionId, card];
  /** @param {any} section */
  const buildSection = (section) => {
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
  };

  const buttonLabels = new Map(
    sectionButtons.map(getButtonLabelEntry)
  );
  const pathwayCards = new Map(
    (pathwaySection?.cards ?? []).map(getPathwayCardEntry)
  );

  const sections = detailSections.map(buildSection);

  return {
    ...phaseCard,
    ...hero,
    bodyTitle: pathwaySection?.title ?? hero.bodyTitle,
    bodyParagraphs: pathwaySection?.paragraphs ?? hero.paragraphs ?? hero.bodyParagraphs ?? [],
    bodySubsections: pathwaySection?.subsections ?? [],
    bodyImages: pathwaySection?.images ?? hero.bodyImages ?? [],
    sections,
    summaryTitle: phaseSummary?.title,
    summaryParagraphs: phaseSummary?.paragraphs,
    summaryChecklist: phaseSummary?.checklist
  };
}
