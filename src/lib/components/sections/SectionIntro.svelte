<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { getLanguageFromPathname, translate } from '$lib/translation-helper.js';

  export let eyebrow;
  export let title;
  export let text;

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
</script>

<div class="section-intro">
  <p class="eyebrow">{translate(eyebrow, currentLanguage)}</p>
  <h2>{translate(title, currentLanguage)}</h2>
  <p><InlineText {text} /></p>
</div>
