/*
  Edit this file for Tools page labels and intro text.
  Tools themselves are edited in tool-catalogue.js.
  Old route aliases are kept only so older links continue to work.
  The Journey phase, Language and Access filter greying-out behavior is handled in
  src/lib/components/pages/ToolsPage.svelte, not in this editor text file.
  "None" is intentionally not shown as a Journey phase filter option.
*/
export const toolsPage = {
  pageTitle: 'Tools | Circular Economy Toolbox',
  eyebrow: 'Selected tools to support SMEs',
  title: 'Tool Catalogue',
  intro: 'Browse the Circular Economy Toolbox tools and filter tools by sector, journey phase, language and access. The journey phase refers to the different stages of the circular economy transition as outlined in the SME Journey guide. The tools in this catalogue include the tools in the SME journey phases and sector guides, as well as additional tools that are not included in the guided pathways.',
  searchLabel: 'Search',
  searchPlaceholder: 'Search by title, purpose, provider or access',
  filtersLabel: 'Tools filters',
  phaseLabel: 'Journey phase',
  disabledPhaseTitle: 'No tools available for this filter combination.',
  sectorLabel: 'Sector',
  languageLabel: 'Language',
  disabledLanguageTitle: 'No tools available for this filter combination.',
  accessLabel: 'Access',
  disabledAccessTitle: 'No tools available for this filter combination.',
  resetButton: 'Reset filters',
  resultPrefix: 'Showing',
  resultMiddle: 'of',
  resultSuffix: 'tools',
  emptyTitle: 'No tools found',
  emptyText: 'Try changing or resetting the filters.'
};
