<script>
  /*
    Root layout.
    This wraps every page with the same header and footer, so they are easy to maintain globally.
  */
  import '../app.css';
  import { site } from '$lib/content/site.js';
  import SiteHeader from '$lib/theme/SiteHeader.svelte';
  import SiteFooter from '$lib/theme/SiteFooter.svelte';
  import StardustCursor from '$lib/components/cursor/StardustCursor.svelte';
</script>

<svelte:head>
  <title>{site.name}</title>
</svelte:head>

<SiteHeader />
<main>
  <slot />
</main>
<SiteFooter />
<!--
  Global cursor effect.
  Placing it here makes it active on all pages.
-->
<StardustCursor />
