import { base } from '$app/paths';

const assetBasePath = import.meta.env.PUBLIC_BASE_PATH || base;

/**
 * Build a public static asset URL that works both locally and when deployed
 * under a base path, such as GitHub Pages.
 *
 * @param {string} path
 * @returns {string}
 */
export function staticAssetUrl(path) {
  return `${assetBasePath}${path}`;
}

/**
 * Icon Park icons are stored locally in static/icons/icon-park/.
 *
 * @param {string} iconName
 * @returns {string}
 */
export function iconParkUrl(iconName) {
  return staticAssetUrl(`/icons/icon-park/icon-park-${iconName}.svg`);
}
