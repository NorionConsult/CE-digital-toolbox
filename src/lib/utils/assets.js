import { base } from '$app/paths';

/**
 * Build a public static asset URL that works both locally and when deployed
 * under a base path, such as GitHub Pages.
 *
 * @param {string} path
 */
export function staticAssetUrl(path) {
  return `${base}${path}`;
}
/**
 * Icon Park icons are stored locally in static/icons/icon-park/.
 *
 * @param {string} iconName
 */
export function iconParkUrl(iconName) {
  return staticAssetUrl(`/icons/icon-park/icon-park-${iconName}.svg`);
}
