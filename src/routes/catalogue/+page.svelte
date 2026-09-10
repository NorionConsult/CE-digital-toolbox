<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { getLanguageFromPathname, translate } from '$lib/translation-helper.js';

  const labels = {
    redirectingToTools: {
      en: 'Redirecting to the tools catalogue...',
      uk: 'Перенаправлення до каталогу інструментів...',
      ro: 'Redirecționare către catalogul de instrumente...',
      hy: 'Վերահղում դեպի գործիքների կատալոգ...'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<p>{translate(labels.redirectingToTools, currentLanguage)}</p>
