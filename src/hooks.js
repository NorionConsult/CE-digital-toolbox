import { base } from '$app/paths';
import { stripLanguagePrefix, hasLanguagePrefix, getAppPathname } from '$lib/translation-helper.js';

const routingBasePath = import.meta.env.PUBLIC_BASE_PATH || base;

/**
 * Language-prefixed URLs, such as /uk/tools/, render the same route as their
 * unprefixed equivalent. The active language is read from the visible URL.
 *
 * @param {{ url: URL }} event
 */
export function reroute({ url }) {
  const appPathname = getAppPathname(url.pathname, routingBasePath);

  if (!hasLanguagePrefix(appPathname)) {
    return;
  }

  return stripLanguagePrefix(appPathname);
}
