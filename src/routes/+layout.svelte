<script>
  /*
    Root layout.
    This wraps every page with the same header and footer, so they are easy to maintain globally.
  */
  import '../app.css';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { site } from '$lib/content/editable/global/site.js';
  import { getLanguageFromPathname, localizeContent } from '$lib/translation-helper.js';
  import SiteHeader from '$lib/theme/SiteHeader.svelte';
  import SiteFooter from '$lib/theme/SiteFooter.svelte';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
  $: if (browser) {
    document.documentElement.lang = currentLanguage;
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
