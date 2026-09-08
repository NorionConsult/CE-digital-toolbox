export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_STORAGE_KEY = 'ce-toolbox-language';

export const languages = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'uk', label: 'Українська', shortLabel: 'UK' },
  { code: 'ro', label: 'Română', shortLabel: 'RO' },
  { code: 'hy', label: 'Հայերեն', shortLabel: 'HY' }
];

const languageCodes = new Set(languages.map((language) => language.code));

/**
 * @param {string | undefined | null} language
 */
export function isSupportedLanguage(language) {
  return languageCodes.has(String(language ?? '').toLowerCase());
}

/**
 * @param {string | undefined | null} language
 */
export function normaliseLanguage(language) {
  const code = String(language ?? '').toLowerCase();
  return isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, string>}
 */
function isTranslationObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const keys = Object.keys(value);
  return keys.includes(DEFAULT_LANGUAGE) && keys.every((key) => languageCodes.has(key));
}

/**
 * Return the current-language version of a translated value. If a translation is
 * missing, the English text is used. Plain strings are returned unchanged, so
 * editors can translate the site gradually.
 *
 * @param {unknown} value
 * @param {string | undefined | null} language
 * @returns {string}
 */
export function translate(value, language = DEFAULT_LANGUAGE) {
  if (isTranslationObject(value)) {
    const code = normaliseLanguage(language);
    return value[code] || value[DEFAULT_LANGUAGE] || '';
  }

  return String(value ?? '');
}

/**
 * Recursively localise an object or array while preserving technical values
 * such as ids, slugs, paths and placement tags.
 *
 * @param {unknown} value
 * @param {string | undefined | null} language
 * @returns {any}
 */
export function localizeContent(value, language = DEFAULT_LANGUAGE) {
  if (isTranslationObject(value)) {
    return translate(value, language);
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeContent(item, language));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, localizeContent(entry, language)])
    );
  }

  return value;
}

/**
 * @param {string} pathname
 * @param {string} basePath
 */
export function getAppPathname(pathname, basePath = '') {
  if (basePath && pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length) || '/';
  }

  return pathname || '/';
}

/**
 * @param {string} pathname
 * @param {string} basePath
 */
export function getLanguageFromPathname(pathname, basePath = '') {
  const appPathname = getAppPathname(pathname, basePath);
  const firstSegment = appPathname.split('/').filter(Boolean)[0];
  return normaliseLanguage(firstSegment);
}

/**
 * @param {string} pathname
 * @param {string} basePath
 */
export function hasLanguagePrefix(pathname, basePath = '') {
  const appPathname = getAppPathname(pathname, basePath);
  const firstSegment = appPathname.split('/').filter(Boolean)[0];
  return isSupportedLanguage(firstSegment);
}

/**
 * @param {string} path
 */
export function stripLanguagePrefix(path) {
  const value = path || '/';
  const [pathnameWithMaybeHash, hash = ''] = value.split('#');
  const [pathname, search = ''] = pathnameWithMaybeHash.split('?');
  const keepsTrailingSlash = pathname === '/' || pathname.endsWith('/');
  const segments = pathname.split('/').filter(Boolean);

  if (isSupportedLanguage(segments[0])) {
    segments.shift();
  }

  const unprefixedPathname =
    segments.length === 0 ? '/' : `/${segments.join('/')}${keepsTrailingSlash ? '/' : ''}`;
  return `${unprefixedPathname}${search ? `?${search}` : ''}${hash ? `#${hash}` : ''}`;
}

/**
 * @param {string} path
 * @param {string | undefined | null} language
 */
export function localizePath(path, language = DEFAULT_LANGUAGE) {
  if (!path || path.startsWith('#') || path.startsWith('http') || path.startsWith('mailto:')) {
    return path;
  }

  const code = normaliseLanguage(language);
  const unprefixedPath = stripLanguagePrefix(path.startsWith('/') ? path : `/${path}`);
  return `/${code}${unprefixedPath === '/' ? '/' : unprefixedPath}`;
}
