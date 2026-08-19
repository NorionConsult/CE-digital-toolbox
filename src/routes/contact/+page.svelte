<script>
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { contactPage } from '$lib/content/contact-page.js';

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

  /**
   * @param {string} email
   */
  function getMailtoHref(email) {
    return `mailto:${email.trim()}`;
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
          class="primary-button"
          href={getButtonHref(contactPage.testimonyForm.url)}
          target={isPlaceholderUrl(contactPage.testimonyForm.url) ? undefined : '_blank'}
          rel={isPlaceholderUrl(contactPage.testimonyForm.url) ? undefined : 'noreferrer'}
        >
          {contactPage.testimonyForm.buttonLabel}
        </a>
      </article>
    </div>

    <aside class="contact-details">
      <div class="contact-details-intro">
        <h2>{contactPage.contactDetailsTitle}</h2>
        <p><InlineText text={contactPage.contactDetails} /></p>
      </div>

      <div class="contact-email-grid" aria-label="Contact email addresses">
        {#each contactPage.contactEmails as contact}
          <article class:featured-contact={contact.featured} class="contact-email-card">
            <h3>
              {#if contact.flagIcon}
                <img class="contact-flag" src={contact.flagIcon} alt="" aria-hidden="true" />
              {/if}
              <span>{contact.label}</span>
            </h3>
            <a href={getMailtoHref(contact.email)}>{contact.email}</a>
          </article>
        {/each}
      </div>
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
    gap: 24px;
  }

  .contact-details h2,
  .contact-action-card h2 {
    color: var(--dark);
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  .contact-details p,
  .contact-action-card p {
    margin: 0 0 22px;
  }

  .contact-details-intro {
    display: grid;
    grid-template-columns: minmax(180px, 0.7fr) minmax(0, 2fr);
    gap: 28px;
    align-items: start;
  }

  .contact-details p {
    margin-bottom: 0;
  }

  .contact-email-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .contact-email-card {
    display: grid;
    align-content: start;
    gap: 8px;
    min-height: 128px;
    padding: 18px;
    border: 1px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--white);
  }

  .contact-email-card h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.05rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .contact-flag {
    width: 24px;
    height: 24px;
    flex: 0 0 auto;
  }

  .contact-email-card a {
    color: var(--dark);
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  .featured-contact {
    border-color: transparent;
    background: var(--yellow);
    color: var(--white);
  }

  .featured-contact h3,
  .featured-contact a {
    color: var(--dark);
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
    .contact-details-intro,
    .contact-email-grid {
      grid-template-columns: 1fr;
    }

    .contact-details {
      gap: 14px;
    }
  }
</style>
