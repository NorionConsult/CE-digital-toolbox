import { redirectLegacyToolRoute } from '$lib/content/technical/legacy-tool-route-redirects.js';

export function load({ url }) {
  redirectLegacyToolRoute(url);
}
