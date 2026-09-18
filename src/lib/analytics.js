import { browser } from '$app/environment';
import { stripLanguagePrefix } from '$lib/translation-helper.js';

export const ANALYTICS_CONSENT_KEY = 'ce-toolbox-analytics-consent';
export const ANALYTICS_CONSENT_GRANTED = 'granted';
export const ANALYTICS_CONSENT_DENIED = 'denied';
export const ANALYTICS_CONSENT_CHANGED_EVENT = 'ce-analytics-consent-changed';

const TEMPORARY_GTM_ID = 'GTM-XXXXXXX';
const GTM_ID = import.meta.env.PUBLIC_GTM_ID || TEMPORARY_GTM_ID;
const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

let gtmLoaded = false;
let consentDefaultsInitialised = false;
let lastPageViewKey = '';

/**
 * @param {string | null} status
 */
export function isAnalyticsConsentChoice(status) {
  return status === ANALYTICS_CONSENT_GRANTED || status === ANALYTICS_CONSENT_DENIED;
}

/**
 * The temporary GTM id keeps the implementation visible before migration while
 * avoiding failed network calls. Replace PUBLIC_GTM_ID with the real UNIDO
 * container id when the production container exists.
 */
function hasUsableGtmId() {
  return /^GTM-[A-Z0-9]+$/i.test(GTM_ID) && GTM_ID !== TEMPORARY_GTM_ID;
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
  getDataLayer().push(args);
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
 * @param {typeof ANALYTICS_CONSENT_GRANTED | typeof ANALYTICS_CONSENT_DENIED} status
 */
function setAnalyticsConsentCookie(status) {
  if (!browser) return;

  const secureAttribute = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${encodeURIComponent(ANALYTICS_CONSENT_KEY)}=${encodeURIComponent(
    status
  )}; Max-Age=${CONSENT_COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureAttribute}`;
}

/**
 * @param {typeof ANALYTICS_CONSENT_GRANTED | typeof ANALYTICS_CONSENT_DENIED} status
 */
function setStoredAnalyticsConsent(status) {
  if (!browser) return;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, status);
  } catch {
    // Keep the banner usable in browsers where localStorage is restricted.
  }

  setAnalyticsConsentCookie(status);
}

export function initialiseAnalyticsConsentDefaults() {
  if (!browser || consentDefaultsInitialised) return;

  consentDefaultsInitialised = true;
  gtag('consent', 'default', {
    ad_storage: 'denied',
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
  return getAnalyticsConsent() === ANALYTICS_CONSENT_GRANTED;
}

export function grantAnalyticsConsent() {
  if (!browser) return;

  initialiseAnalyticsConsentDefaults();
  setStoredAnalyticsConsent(ANALYTICS_CONSENT_GRANTED);
  gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  loadGoogleTagManager();
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_CHANGED_EVENT));
}

export function denyAnalyticsConsent() {
  if (!browser) return;

  initialiseAnalyticsConsentDefaults();
  setStoredAnalyticsConsent(ANALYTICS_CONSENT_DENIED);
  gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_CHANGED_EVENT));
}

export function setupAnalyticsFromStoredConsent() {
  if (!browser) return;

  initialiseAnalyticsConsentDefaults();

  if (hasAnalyticsConsent()) {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
    loadGoogleTagManager();
  }
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
