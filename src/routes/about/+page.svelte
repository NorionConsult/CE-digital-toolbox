<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { aboutPage } from '$lib/content/editable/pages/about-page.js';
  import { getLanguageFromPathname, localizeContent, localizePath } from '$lib/translation-helper.js';

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentAboutPage = localizeContent(aboutPage, currentLanguage);
</script>

<svelte:head>
  <title>{currentAboutPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero about-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{currentAboutPage.eyebrow}</p>
    <h1>{currentAboutPage.title}</h1>

    <div class="about-copy">
      {#each currentAboutPage.paragraphs as paragraph}
        <p class="subpage-intro"><InlineText text={paragraph} /></p>
      {/each}
    </div>
  </div>
</section>

{#if currentAboutPage.callToAction}
  <section class="about-cta-section">
    <div class="container">
      <aside class="about-cta-card">
        <div class="about-cta-copy">
          <h2>{currentAboutPage.callToAction.title}</h2>
          <p><InlineText text={currentAboutPage.callToAction.text} /></p>
        </div>
        <a class="primary-button" href="{base}{localizePath(currentAboutPage.callToAction.href, currentLanguage)}">
          {currentAboutPage.callToAction.buttonLabel}
        </a>
      </aside>
    </div>
  </section>
{/if}

<style>
  .about-hero h1,
  .about-copy {
    max-width: 900px;
  }

  .about-copy {
    display: grid;
    gap: 18px;
  }

  .about-copy .subpage-intro {
    margin: 0;
  }

  .about-cta-section {
    padding: 0 0 72px;
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .about-cta-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    padding: 28px;
    border: 1px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--white);
  }

  .about-cta-copy {
    max-width: 820px;
  }

  .about-cta-card h2 {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .about-cta-card p {
    margin: 0;
  }

  .about-cta-card .primary-button {
    flex: 0 0 auto;
  }

  @media (max-width: 720px) {
    .about-cta-card {
      align-items: flex-start;
      flex-direction: column;
    }

    .about-cta-card .primary-button {
      width: 100%;
    }
  }
</style>
