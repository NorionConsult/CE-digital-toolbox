import { construction } from '../../editable/sector-guides/construction.js';
import { foodAndAgriculture } from '../../editable/sector-guides/food-and-agriculture.js';
import { textiles } from '../../editable/sector-guides/textiles.js';
import { tourism } from '../../editable/sector-guides/tourism.js';

/*
  This technical registry gathers the editable sector guide files.
  Keep this list in the order the sector tools should appear on the website.
*/
export const sectors = [construction, foodAndAgriculture, textiles, tourism];
