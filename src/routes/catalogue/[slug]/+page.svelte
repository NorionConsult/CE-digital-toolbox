<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { getLanguageFromPathname, translate } from '$lib/translation-helper.js';

  const labels = {
    redirectingToTool: {
      en: 'Redirecting to the tool page...',
      uk: 'Перенаправлення на сторінку інструменту...',
      ro: 'Redirecționare către pagina instrumentului...',
      hy: 'Վերահղում դեպի գործիքի էջ...'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<p>{translate(labels.redirectingToTool, currentLanguage)}</p>
