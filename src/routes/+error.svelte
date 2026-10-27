<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { errorMessages } from '$lib/content/editable/global/error-messages.js';
  import { getAppPathname, getLanguageFromPathname, stripLanguagePrefix, translate } from '$lib/translation-helper.js';

  /** @type {Record<string, keyof typeof errorMessages>} */
  const notFoundMessageKeys = {
    sectors: 'sectorNotFound',
    'journey-phases': 'journeyPhaseNotFound',
    cases: 'caseNotFound',
    tools: 'resourceNotFound'
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: appPathname = stripLanguagePrefix(getAppPathname($page.url.pathname, base));
  $: section = appPathname.split('/').filter(Boolean)[0];
  // Static hosts may supply only a generic 404; use the URL to choose its wording.
  $: notFoundMessageKey = notFoundMessageKeys[section] ?? 'pageNotFound';
  $: message = $page.status === 404
    ? translate(errorMessages[notFoundMessageKey], currentLanguage)
    : $page.error?.message ?? '';
</script>

<section class="container">
  <h1>{$page.status}</h1>
  <p>{message}</p>
</section>
