import { redirect } from '@sveltejs/kit';
import { getAppPathname, isSupportedLanguage } from '$lib/translation-helper.js';

const LEGACY_TOOL_ROUTE_NAMES = new Set(['catalogue']);
const routingBasePath = import.meta.env.PUBLIC_BASE_PATH || '';

/**
 * Create a relative redirect so the same static build works from the GitHub
 * Pages repository URL and from a future custom domain.
 *
 * @param {string} sourcePathname
 * @param {string} targetPath
 */
function getRelativeRedirectTarget(sourcePathname, targetPath) {
  const sourceSegments = sourcePathname.split('/').filter(Boolean);
  const upwardPath = sourceSegments.length === 0 ? './' : '../'.repeat(sourceSegments.length);
  return `${upwardPath}${targetPath.replace(/^\/+/, '')}`;
}

/**
 * Redirect old tool catalogue URLs to the canonical /tools/ route.
 * Language prefixes are preserved, so /uk/catalogue/example/ becomes
 * /uk/tools/example/. This prevents analytics and search indexing from being
 * split across several URLs for the same tool page.
 *
 * @param {URL} url
 */
export function redirectLegacyToolRoute(url) {
  const pathname = getAppPathname(url.pathname || '/', routingBasePath);
  const keepsTrailingSlash = pathname === '/' || pathname.endsWith('/');
  const segments = pathname.split('/').filter(Boolean);
  const language = isSupportedLanguage(segments[0]) ? segments.shift() : '';
  const legacyRouteName = segments.shift() ?? '';

  if (!LEGACY_TOOL_ROUTE_NAMES.has(legacyRouteName)) {
    return;
  }

  const targetSegments = [language, 'tools', ...segments].filter(Boolean);
  const targetPath = `/${targetSegments.join('/')}${keepsTrailingSlash ? '/' : ''}`;
  const target = getRelativeRedirectTarget(pathname, targetPath);

  throw redirect(308, target);
}
