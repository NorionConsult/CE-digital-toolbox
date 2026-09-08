import { stripLanguagePrefix, hasLanguagePrefix } from '$lib/translation-helper.js';

/**
 * Language-prefixed URLs, such as /uk/tools/, render the same route as their
 * unprefixed equivalent. The active language is read from the visible URL.
 *
 * @param {{ url: URL }} event
 */
export function reroute({ url }) {
  if (!hasLanguagePrefix(url.pathname)) {
    return;
  }

  return stripLanguagePrefix(url.pathname);
}
