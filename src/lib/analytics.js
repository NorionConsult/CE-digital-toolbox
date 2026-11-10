import { browser } from '$app/environment';
import { stripLanguagePrefix } from '$lib/translation-helper.js';

export const ANALYTICS_CONSENT_KEY = 'ce-toolbox-analytics-consent';
export const ANALYTICS_CONSENT_GRANTED = 'granted';
export const ANALYTICS_CONSENT_DENIED = 'denied';
export const ANALYTICS_CONSENT_CHANGED_EVENT = 'ce-analytics-consent-changed';

// Use the project's container by default; builds can override it for testing.
const DEFAULT_GTM_ID = 'GTM-WLH5LPL4';
const GTM_ID = (import.meta.env.PUBLIC_GTM_ID || DEFAULT_GTM_ID).trim();
const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

let gtmLoaded = false;
let consentDefaultsInitialised = false;
let lastPageViewKey = '';
/** @type {string | null | undefined} */
let appliedConsent;
let analyticsStopped = false;

/**
 * @param {string | null} status
 */
export function isAnalyticsConsentChoice(status) {
  return status === ANALYTICS_CONSENT_GRANTED || status === ANALYTICS_CONSENT_DENIED;
}

/**
 * Only GTM container IDs belong here, not GA4 Measurement IDs (G-...).
 * An explicit placeholder override keeps analytics disabled for an untagged build.
 */
function hasUsableGtmId() {
  return /^GTM-[A-Z0-9]+$/i.test(GTM_ID) && GTM_ID !== 'GTM-XXXXXXX';
}

function getDataLayer() {
  if (!browser) return [];
  const analyticsWindow = /** @type {Window & { dataLayer?: any[] }} */ (window);
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  return analyticsWindow.dataLayer;
}

/**
 * @param {...any} args
 */
function gtag(...args) {
  // Google processes gtag commands as Arguments objects, not plain arrays.
  getDataLayer().push(arguments);
}

function getAnalyticsConsentCookie() {
  if (!browser) return null;

  const encodedKey = encodeURIComponent(ANALYTICS_CONSENT_KEY);
  const cookiePair = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${encodedKey}=`));

  if (!cookiePair) return null;

  const value = decodeURIComponent(cookiePair.split('=').slice(1).join('='));
  return isAnalyticsConsentChoice(value) ? value : null;
}

/**
 * @param {typeof ANALYTICS_CONSENT_GRANTED | typeof ANALYTICS_CONSENT_DENIED | null} status
 */
function setAnalyticsConsentCookie(status) {
  if (!browser) return;

  const secureAttribute = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${encodeURIComponent(ANALYTICS_CONSENT_KEY)}=${encodeURIComponent(
    status ?? ''
  )}; Max-Age=${status === null ? 0 : CONSENT_COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureAttribute}`;
}

/**
 * @param {typeof ANALYTICS_CONSENT_GRANTED | typeof ANALYTICS_CONSENT_DENIED} status
 */
function setStoredAnalyticsConsent(status) {
  if (!browser) return;

  // Write the fallback before notifying other tabs through localStorage.
  setAnalyticsConsentCookie(status);
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, status);
  } catch {
    // Keep the banner usable in browsers where localStorage is restricted.
  }
}

export function initialiseAnalyticsConsentDefaults() {
  if (!browser || consentDefaultsInitialised) return;

  consentDefaultsInitialised = true;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
}

export function getAnalyticsConsent() {
  if (!browser) return null;

  try {
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (isAnalyticsConsentChoice(storedConsent)) return storedConsent;
  } catch {
    // Fall back to the first-party consent cookie below.
  }

  return getAnalyticsConsentCookie();
}

export function hasAnalyticsConsent() {
  return !analyticsStopped && getAnalyticsConsent() === ANALYTICS_CONSENT_GRANTED;
}

/** @param {string | null} status */
function applyAnalyticsConsent(status) {
  initialiseAnalyticsConsentDefaults();
  if (status === appliedConsent || analyticsStopped) return;
  appliedConsent = status;
  lastPageViewKey = '';

  if (status !== ANALYTICS_CONSENT_GRANTED && gtmLoaded) {
    // A denied Consent Mode update alone still permits cookieless measurements.
    // Unload the entire running container. The saved choice blocks it after reload.
    // Reload the current URL so this works under both deployment base paths.
    analyticsStopped = true;
    window.location.reload();
    return;
  }

  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: status === ANALYTICS_CONSENT_GRANTED ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  if (status === ANALYTICS_CONSENT_GRANTED) loadGoogleTagManager();
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_CHANGED_EVENT));
}

export function grantAnalyticsConsent() {
  if (!browser) return;

  setStoredAnalyticsConsent(ANALYTICS_CONSENT_GRANTED);
  applyAnalyticsConsent(ANALYTICS_CONSENT_GRANTED);
}

export function denyAnalyticsConsent() {
  if (!browser) return;

  setStoredAnalyticsConsent(ANALYTICS_CONSENT_DENIED);
  applyAnalyticsConsent(ANALYTICS_CONSENT_DENIED);
}

export function setupAnalyticsFromStoredConsent() {
  if (!browser) return () => {};

  function syncStoredConsent() {
    applyAnalyticsConsent(getAnalyticsConsent());
  }

  /** @param {StorageEvent} event */
  function handleStorageChange(event) {
    if (event.storageArea !== window.localStorage) return;
    if (event.key !== ANALYTICS_CONSENT_KEY && event.key !== null) return;

    // Removing the preference (or clearing storage) must not restore a stale
    // granted fallback cookie. Read current storage, since events can be queued.
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (!isAnalyticsConsentChoice(storedConsent)) setAnalyticsConsentCookie(null);
    syncStoredConsent();
  }

  window.addEventListener('storage', handleStorageChange);
  // Also reconcile suspended tabs and the cookie fallback on returning to a tab.
  window.addEventListener('focus', syncStoredConsent);
  window.addEventListener('pageshow', syncStoredConsent);
  document.addEventListener('visibilitychange', syncStoredConsent);
  syncStoredConsent();

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener('focus', syncStoredConsent);
    window.removeEventListener('pageshow', syncStoredConsent);
    document.removeEventListener('visibilitychange', syncStoredConsent);
  };
}

export function loadGoogleTagManager() {
  if (!browser || gtmLoaded || !hasAnalyticsConsent() || !hasUsableGtmId()) return;

  gtmLoaded = true;
  getDataLayer().push({
    'gtm.start': Date.now(),
    event: 'gtm.js'
  });

  const firstScript = document.getElementsByTagName('script')[0];
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  firstScript?.parentNode?.insertBefore(script, firstScript);
}

/**
 * @param {string} pathname
 */
export function getContentGroup(pathname) {
  const path = stripLanguagePrefix(pathname || '/');
  const segments = path.split('?')[0].split('#')[0].split('/').filter(Boolean);

  if (segments[0] === 'journey-phases' && segments[1]) return 'Journey phase';
  if (segments[0] === 'sectors' && segments[1]) return 'Sector guide';
  if (segments[0] === 'tools' && segments[1]) return 'Tool';
  if (segments[0] === 'catalogue' && segments[1]) return 'Tool';
  if (segments[0] === 'cases' && segments[1]) return 'Case';

  return 'Static page';
}

/**
 * @param {string} pathname
 */
function getContentId(pathname) {
  const path = stripLanguagePrefix(pathname || '/');
  const segments = path.split('?')[0].split('#')[0].split('/').filter(Boolean);
  return segments.at(-1) || 'home';
}

/**
 * @param {string} eventName
 * @param {Record<string, any>} [parameters]
 */
export function trackEvent(eventName, parameters = {}) {
  if (!browser || !hasAnalyticsConsent()) return;

  getDataLayer().push({
    event: eventName,
    ...parameters
  });
}

/**
 * @param {{
 *   pathname: string;
 *   pageLocation: string;
 *   pageTitle: string;
 *   language: string;
 * }} pageContext
 */
export function trackPageView(pageContext) {
  if (!browser || !hasAnalyticsConsent()) return;

  const pageKey = `${pageContext.pageLocation}|${pageContext.pageTitle}|${pageContext.language}`;
  if (pageKey === lastPageViewKey) return;

  lastPageViewKey = pageKey;
  trackEvent('ce_page_view', {
    page_location: pageContext.pageLocation,
    page_path: stripLanguagePrefix(pageContext.pathname),
    page_title: pageContext.pageTitle,
    language: pageContext.language,
    content_group: getContentGroup(pageContext.pathname),
    content_id: getContentId(pageContext.pathname)
  });
}

/**
 * @param {{
 *   contentType: string;
 *   contentId: string;
 *   itemName?: string;
 *   sourceArea?: string;
 *   [key: string]: any;
 * }} parameters
 */
export function trackSelectContent(parameters) {
  const { contentType, contentId, itemName, sourceArea, ...extraParameters } = parameters;

  trackEvent('select_content', {
    content_type: contentType,
    content_id: contentId,
    item_name: itemName,
    source_area: sourceArea,
    ...extraParameters
  });
}

/**
 * @param {{
 *   toolSlug: string;
 *   toolTitle: string;
 *   linkUrl: string;
 *   linkType: 'open' | 'download';
 * }} parameters
 */
export function trackToolLink(parameters) {
  trackEvent(parameters.linkType === 'download' ? 'tool_download' : 'tool_open', {
    tool_slug: parameters.toolSlug,
    tool_title: parameters.toolTitle,
    link_url: parameters.linkUrl,
    link_type: parameters.linkType
  });
}

/**
 * @param {{
 *   caseSlug: string;
 *   caseTitle: string;
 *   linkUrl: string;
 * }} parameters
 */
export function trackCaseSourceClick(parameters) {
  trackEvent('case_source_click', {
    case_slug: parameters.caseSlug,
    case_title: parameters.caseTitle,
    link_url: parameters.linkUrl
  });
}

/**
 * @param {{
 *   formType: string;
 *   formTitle: string;
 *   linkUrl: string;
 * }} parameters
 */
export function trackFormLinkClick(parameters) {
  trackEvent('form_link_click', {
    form_type: parameters.formType,
    form_title: parameters.formTitle,
    link_url: parameters.linkUrl
  });
}
