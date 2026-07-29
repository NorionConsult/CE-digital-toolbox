<script>
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { contactPage } from '$lib/content/contact-page.js';
  import { site } from '$lib/content/site.js';

  /**
   * Placeholder links use "#". When editors add real form URLs in
   * contact-page.js, the buttons will open those forms in a new tab.
   */
  /**
   * @param {string} url
   */
  function getButtonHref(url) {
    return url || '#';
  }

  /**
   * @param {string} url
   */
  function isPlaceholderUrl(url) {
    return !url || url === '#';
  }
</script>

<svelte:head>
  <title>{contactPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero contact-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{contactPage.eyebrow}</p>
    <h1>{contactPage.title}</h1>
    <p class="subpage-intro"><InlineText text={contactPage.intro} /></p>
  </div>
</section>

<section class="contact-section">
  <div class="container contact-layout">
    <div class="contact-action-grid">
      <article class="contact-action-card">
        <h2>{contactPage.feedbackForm.title}</h2>
        <p><InlineText text={contactPage.feedbackForm.text} /></p>
        <a
          class="primary-button"
          href={getButtonHref(contactPage.feedbackForm.url)}
          target={isPlaceholderUrl(contactPage.feedbackForm.url) ? undefined : '_blank'}
          rel={isPlaceholderUrl(contactPage.feedbackForm.url) ? undefined : 'noreferrer'}
        >
          {contactPage.feedbackForm.buttonLabel}
        </a>
      </article>

      <article class="contact-action-card">
        <h2>{contactPage.testimonyForm.title}</h2>
        <p><InlineText text={contactPage.testimonyForm.text} /></p>
        <a
          class="secondary-button"
          href={getButtonHref(contactPage.testimonyForm.url)}
          target={isPlaceholderUrl(contactPage.testimonyForm.url) ? undefined : '_blank'}
          rel={isPlaceholderUrl(contactPage.testimonyForm.url) ? undefined : 'noreferrer'}
        >
          {contactPage.testimonyForm.buttonLabel}
        </a>
      </article>
    </div>

    <aside class="contact-details">
      <h2>{contactPage.contactDetailsTitle}</h2>
      <p><InlineText text={contactPage.contactDetails} /></p>
      <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
    </aside>
  </div>
</section>

<style>
  .contact-hero h1,
  .contact-hero .subpage-intro {
    max-width: 980px;
  }

  .contact-section {
    padding: 72px 0;
    background-color: var(--white);
  }

  .contact-layout {
    display: grid;
    gap: 24px;
  }

  .contact-details,
  .contact-action-card {
    border: 1px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--light-bg);
    padding: 28px;
  }

  .contact-details {
    display: grid;
    grid-template-columns: minmax(180px, 0.7fr) minmax(0, 1.6fr) minmax(220px, 0.9fr);
    gap: 28px;
    align-items: start;
  }

  .contact-details h2,
  .contact-action-card h2 {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  .contact-details p,
  .contact-action-card p {
    margin: 0 0 22px;
  }

  .contact-details p {
    margin-bottom: 0;
  }

  .contact-details a {
    color: var(--dark);
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  .contact-action-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .contact-action-card {
    display: flex;
    min-height: 330px;
    flex-direction: column;
  }

  .contact-action-card .primary-button,
  .contact-action-card .secondary-button {
    width: fit-content;
    margin-top: auto;
  }

  @media (max-width: 900px) {
    .contact-action-grid,
    .contact-details {
      grid-template-columns: 1fr;
    }

    .contact-details {
      gap: 14px;
    }
  }
</style>
