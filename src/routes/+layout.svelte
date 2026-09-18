<script>
  /*
    Root layout.
    This wraps every page with the same header and footer, so they are easy to maintain globally.
  */
  import '../app.css';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import {
    ANALYTICS_CONSENT_CHANGED_EVENT,
    setupAnalyticsFromStoredConsent,
    trackPageView
  } from '$lib/analytics.js';
  import { site } from '$lib/content/editable/global/site.js';
  import { getAppPathname, getLanguageFromPathname, localizeContent } from '$lib/translation-helper.js';
  import SiteHeader from '$lib/theme/SiteHeader.svelte';
  import SiteFooter from '$lib/theme/SiteFooter.svelte';
  import CookieConsentBanner from '$lib/components/global/CookieConsentBanner.svelte';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
  $: if (browser) {
    document.documentElement.lang = currentLanguage;
  }

  async function trackCurrentPage() {
    if (!browser) return;

    await tick();
    trackPageView({
      pathname: getAppPathname($page.url.pathname, base),
      pageLocation: $page.url.href,
      pageTitle: document.title,
      language: currentLanguage
    });
  }

  onMount(() => {
    setupAnalyticsFromStoredConsent();
    trackCurrentPage();

    window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, trackCurrentPage);

    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, trackCurrentPage);
    };
  });

  $: if (browser && $page.url.pathname && currentLanguage) {
    trackCurrentPage();
  }
</script>

<svelte:head>
  <title>{currentSite.name}</title>
</svelte:head>

<div class="site-shell">
  <SiteHeader />
  <main class="site-main">
    <slot />
  </main>
  <SiteFooter />
  <CookieConsentBanner />
</div>

<style>
  .site-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .site-main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
