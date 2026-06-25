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

<SiteHeader />
<main>
  <slot />
</main>
<SiteFooter />
<!--
  The sparkly cursor is intentionally disabled.
  Its code remains available at:
  src/lib/components/cursor/StardustCursor.svelte
-->
