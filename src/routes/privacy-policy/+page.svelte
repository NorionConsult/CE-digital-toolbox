<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { privacyPolicyPage } from '$lib/content/editable/pages/privacy-policy.js';
  import { getLanguageFromPathname, localizeContent } from '$lib/translation-helper.js';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentPrivacyPolicyPage = localizeContent(privacyPolicyPage, currentLanguage);
</script>

<svelte:head>
  <title>{currentPrivacyPolicyPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero privacy-policy-hero">
  <div class="container subpage-content">
    <h1>{currentPrivacyPolicyPage.title}</h1>
    <p class="eyebrow">{currentPrivacyPolicyPage.dateIndicator}</p>
  </div>
</section>

<section class="privacy-policy-section">
  <div class="container privacy-policy-content">
    {#each currentPrivacyPolicyPage.sections as section}
      <section class="privacy-policy-block">
        <h4>{section.title}</h4>
        <p><InlineText text={section.body} /></p>
      </section>
    {/each}
  </div>
</section>

<style>
  .privacy-policy-hero h1 {
    max-width: 900px;
    margin-bottom: 18px;
  }

  .privacy-policy-section {
    padding: 64px 0 88px;
    background-color: var(--white);
  }

  .privacy-policy-content {
    display: grid;
    gap: 34px;
  }

  .privacy-policy-block {
    display: grid;
    gap: 12px;
    max-width: 900px;
  }

  .privacy-policy-block h4 {
    color: var(--dark);
    font-size: 1.25rem;
    line-height: 1.25;
  }

  .privacy-policy-block p {
    max-width: 760px;
    color: var(--text);
  }
</style>
