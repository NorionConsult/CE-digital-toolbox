<script>
  /*
    Root layout.
    This wraps every page with the same header and footer, so they are easy to maintain globally.
  */
  import '../app.css';
  import { site } from '$lib/content/site.js';
  import SiteHeader from '$lib/theme/SiteHeader.svelte';
  import SiteFooter from '$lib/theme/SiteFooter.svelte';
</script>

<svelte:head>
  <title>{site.name}</title>
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
