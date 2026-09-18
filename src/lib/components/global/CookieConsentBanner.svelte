<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { cookieConsent } from '$lib/content/editable/global/cookie-consent.js';
  import {
    ANALYTICS_CONSENT_CHANGED_EVENT,
    ANALYTICS_CONSENT_DENIED,
    ANALYTICS_CONSENT_GRANTED,
    ANALYTICS_CONSENT_KEY,
    denyAnalyticsConsent,
    getAnalyticsConsent,
    grantAnalyticsConsent,
    isAnalyticsConsentChoice
  } from '$lib/analytics.js';
  import {
    getLanguageFromPathname,
    localizeContent,
    localizePath
  } from '$lib/translation-helper.js';

  let visible = false;
  /** @type {string | null} */
  let consentStatus = null;

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentCookieConsent = localizeContent(cookieConsent, currentLanguage);
  $: hasStoredChoice = isAnalyticsConsentChoice(consentStatus);
  $: statusText = consentStatus === ANALYTICS_CONSENT_GRANTED
    ? currentCookieConsent.statusAccepted
    : currentCookieConsent.statusRejected;

  function syncConsentFromStorage() {
    const storedConsent = getAnalyticsConsent();
    consentStatus = storedConsent;
    visible = !isAnalyticsConsentChoice(storedConsent);
  }

  function hideAfterConsentChange() {
    consentStatus = getAnalyticsConsent();
    visible = false;
  }

  onMount(() => {
    syncConsentFromStorage();

    /**
     * @param {StorageEvent} event
     */
    function handleStorageChange(event) {
      if (event.key === ANALYTICS_CONSENT_KEY) {
        syncConsentFromStorage();
      }
    }

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, hideAfterConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, hideAfterConsentChange);
    };
  });

  function acceptAnalytics() {
    grantAnalyticsConsent();
    consentStatus = ANALYTICS_CONSENT_GRANTED;
    visible = false;
  }

  function rejectAnalytics() {
    denyAnalyticsConsent();
    consentStatus = ANALYTICS_CONSENT_DENIED;
    visible = false;
  }

  function openSettings() {
    visible = true;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

{#if visible}
  <section class="cookie-consent" aria-labelledby="cookie-consent-title">
    <div class="cookie-consent-copy">
      <h2 id="cookie-consent-title">{currentCookieConsent.title}</h2>
      <p>
        {currentCookieConsent.text}
        {currentCookieConsent.privacyPolicyPrefix}
        <a href="{base}{localizePath(currentCookieConsent.privacyPolicyHref, currentLanguage)}">
          {currentCookieConsent.privacyPolicyLabel}
        </a>
        {currentCookieConsent.privacyPolicySuffix}
      </p>
      {#if hasStoredChoice}
        <p class="cookie-consent-status">{statusText}</p>
      {/if}
    </div>

    <div class="cookie-consent-actions">
      <button type="button" class="primary-button" on:click={acceptAnalytics}>
        {currentCookieConsent.acceptLabel}
      </button>
      <button type="button" class="secondary-button" on:click={rejectAnalytics}>
        {currentCookieConsent.rejectLabel}
      </button>
    </div>
  </section>
{:else if hasStoredChoice}
  <div class="floating-page-controls" aria-label={currentCookieConsent.settingsLabel}>
    <button type="button" class="back-to-top-button" on:click={scrollToTop}>
      {currentCookieConsent.backToTopLabel}
    </button>

    <button type="button" class="cookie-settings-button" on:click={openSettings}>
      {currentCookieConsent.settingsLabel}
    </button>
  </div>
{/if}

<style>
  .cookie-consent {
    position: fixed;
    z-index: 40;
    right: 24px;
    bottom: 24px;
    left: 24px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
    gap: 28px;
    align-items: end;
    max-width: 1120px;
    margin: 0 auto;
    padding: 22px;
    border: 1px solid var(--soft-border);
    border-radius: 18px;
    background-color: var(--white);
    box-shadow: var(--shadow);
  }

  .cookie-consent h2 {
    margin-bottom: 8px;
    color: var(--dark);
    font-size: 1.55rem;
    line-height: 1;
    text-transform: uppercase;
  }

  .cookie-consent p {
    max-width: 780px;
    color: var(--text);
    font-size: 0.98rem;
    line-height: 1.45;
  }

  .cookie-consent a {
    color: var(--blue);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.16em;
  }

  .cookie-consent-status {
    margin-top: 8px;
    font-weight: 700;
  }

  .cookie-consent-actions {
    display: grid;
    gap: 10px;
    align-items: stretch;
    min-width: 0;
  }

  .cookie-consent-actions .primary-button,
  .cookie-consent-actions .secondary-button {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
    text-align: center;
    line-height: 1.2;
  }

  .floating-page-controls {
    position: fixed;
    z-index: 35;
    right: 18px;
    bottom: 18px;
    left: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    pointer-events: none;
  }

  .floating-page-controls button {
    pointer-events: auto;
  }

  .back-to-top-button,
  .cookie-settings-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 96px;
    padding: 9px 12px;
    border: 0;
    border-radius: 999px;
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 18px rgba(10, 46, 54, 0.16);
  }

  .back-to-top-button {
    background-color: var(--yellow);
    color: var(--dark);
  }

  .back-to-top-button:hover,
  .back-to-top-button:focus-visible {
    background-color: var(--button-highlight);
    color: var(--white);
  }

  .cookie-settings-button {
    margin-left: auto;
    background-color: var(--blue);
    color: var(--white);
  }

  .cookie-settings-button:hover,
  .cookie-settings-button:focus-visible {
    background-color: var(--button-highlight);
  }

  @media (max-width: 980px) {
    .cookie-consent {
      grid-template-columns: 1fr;
      align-items: start;
      right: 14px;
      bottom: 14px;
      left: 14px;
      padding: 18px;
    }

    .cookie-consent-actions {
      align-items: stretch;
      width: 100%;
    }

    .floating-page-controls {
      right: 14px;
      bottom: 14px;
      left: 14px;
      align-items: flex-end;
    }

    .back-to-top-button,
    .cookie-settings-button {
      max-width: min(46vw, 180px);
      white-space: normal;
      line-height: 1.2;
    }
  }
</style>
