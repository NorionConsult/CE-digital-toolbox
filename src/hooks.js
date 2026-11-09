import { BASE_PATH } from '../deployment.config.js';
import { stripLanguagePrefix, hasLanguagePrefix, getAppPathname } from '$lib/translation-helper.js';

// Universal hooks run during startup, before SvelteKit's browser paths are ready.
const routingBasePath = BASE_PATH;

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
  
  const routedPathname = stripLanguagePrefix(appPathname);
  const basePath = url.pathname.startsWith(routingBasePath) ? routingBasePath : '';

  return `${basePath}${routedPathname}`;
}
