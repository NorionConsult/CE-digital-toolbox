import { awareness } from './awareness.js';
import { businessCase } from './business-case.js';
import { diagnose } from './diagnose.js';
import { implement } from './implement.js';
import { monitor } from './monitor.js';
import { options } from './options.js';

/**
 * @typedef {{
 *   id: string;
 *   number: string;
 *   title: string;
 *   navigationLabel?: string;
 *   description: string;
 *   resourceTag?: string;
 *   keyOutputs: string[];
 *   bodyTitle: string;
 *   bodyParagraphs: string[];
 *   inlineImage?: {
 *     afterParagraph: number;
 *     title?: string;
 *     src: string;
 *     alt: string;
 *     caption?: string;
 *     maxWidth?: string;
 *     zoomable?: boolean;
 *   };
 *   businessModelsTitle?: string;
 *   businessModelsIntro?: string;
 *   businessModelCards?: {
 *     title: string;
 *     icon: string;
 *     text: string;
 *     example: string;
 *   }[];
 *   image?: { src: string; alt: string; caption: string; zoomable?: boolean };
 *   factbox?: { title: string; items: string[] };
 *   baselineCards?: { title: string; text?: string; items?: string[]; icon: string }[];
 *   closingParagraphs?: string[];
 *   m3WheelWorkshop?: {
 *     subtitle: string;
 *     title: string;
 *     icon: string;
 *     introduction: string;
 *     outcome: string;
 *     preparation: {
 *       title: string;
 *       time: string;
 *       text: string;
 *       details: string[];
 *       listTitle: string;
 *       items: string[];
 *       linkLabel: string;
 *       link: string;
 *     };
 *     steps: {
 *       number: string;
 *       title: string;
 *       time: string;
 *       text: string;
 *       tip: string;
 *     }[];
 *   };
 *   m4Questionnaire?: {
 *     title: string;
 *     introduction: string;
 *     businessModelLabel: string;
 *     businessModelPlaceholder: string;
 *     businessModelOptions: string[];
 *     otherBusinessModelLabel: string;
 *     selectBusinessModelText: string;
 *     yesLabel: string;
 *     noLabel: string;
 *     resultsTitle: string;
 *     answeredLabel: string;
 *     downloadLabel: string;
 *     downloadingLabel: string;
 *     downloadFilename?: string;
 *     pdfDisclaimer: string;
 *     incompleteText: string;
 *     positiveResult: string;
 *     negativeResult: string;
 *     categories: {
 *       title: string;
 *       questions: (string | {
 *         text: string;
 *         yesLabel?: string;
 *         noLabel?: string;
 *       })[];
 *     }[];
 *   };
 * }} ModuleSection
 *
 * @typedef {{
 *   number: string;
 *   slug: string;
 *   shortName: string;
 *   title: string;
 *   colourClass: string;
 *   description: string;
 *   intro: string;
 *   icon: string;
 *   iconAlt: string;
 *   bodyTitle: string;
 *   bodyParagraphs: string[];
 *   bodyImages: { src: string; alt: string; caption: string }[];
 *   sections?: ModuleSection[];
 *   summaryTitle?: string;
 *   summaryText?: string;
 *   summaryParagraphs?: string[];
 *   summaryChecklist?: string[];
 *   modulePdf: string;
 *   toolsPdf: string;
 * }} ModuleContent
 */

/*
  Edit the individual files in this folder for page text.
  Keep this list in the order the modules should appear on the website.
*/
/** @type {ModuleContent[]} */
export const modules = [awareness, diagnose, options, businessCase, implement, monitor];
