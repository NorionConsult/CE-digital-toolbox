import { defineModulePage, placeholderImages, placeholderParagraphs } from './_shared.js';

/*
  MODULE 1: AWARENESS
  This page currently has no pathway cards or detailed subsections.
  The editable blocks below still follow the visible page order.
*/

/* 1. HOME PAGE MODULE CARD AND MODULE HERO */
const moduleCard = {
  number: '01',
  slug: 'awareness',
  shortName: 'Module 1',
  title: 'Awareness',
  colourClass: 'module-card-green',
  description:
    'Introduces key CE and RECP concepts, terms, and models to understand the benefits, risks, and potential of CE, even without prior knowledge.'
};

const hero = {
  intro:
    'This module introduces the core concepts behind circular economy and resource efficient cleaner production. It is intended as a starting point for users who need a shared language and overview before selecting specific tools.',
  icon: '/module-icons/icon-awareness.png',
  iconAlt: 'Awareness module icon',
  bodyTitle: 'Module overview',
  bodyParagraphs: placeholderParagraphs,
  bodyImages: placeholderImages
};

/* 2. HERO SECTION BUTTONS: add buttons here after detailed sections are created. */
/** @type {{ sectionId: string; label: string }[]} */
const sectionButtons = [];

/* 3. PATHWAY SECTION: currently not used on this module. */
const pathwaySection = null;

/* 4. DETAILED SECTIONS: currently not used on this module. */
/** @type {(Record<string, any> & { id: string; title: string; paragraphs: string[] })[]} */
const detailSections = [];

/* 5. MODULE SUMMARY: add this block when the Awareness page receives sections. */
const moduleSummary = null;

/* File links normally do not need editing. */
const downloads = {
  modulePdf: '/downloads/modules/module-1-awareness.pdf',
  cataloguePdf: '/downloads/tool-catalogue.pdf'
};

export const awareness = defineModulePage({
  moduleCard,
  hero,
  sectionButtons,
  pathwaySection,
  detailSections,
  moduleSummary,
  downloads
});
