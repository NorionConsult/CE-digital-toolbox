<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { site } from '$lib/content/editable/global/site.js';
  import { getLanguageFromPathname, localizeContent, translate } from '$lib/translation-helper.js';

  const labels = {
    programmeLogos: {
      en: 'Programme logos',
      uk: 'Логотипи програми',
      ro: 'Siglele programului',
      hy: 'Ծրագրի լոգոները'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
</script>

<footer id="contact" class="site-footer">
  <div class="container footer-content">
    <div class="footer-logo-area">
      <div class="footer-logos" aria-label={translate(labels.programmeLogos, currentLanguage)}>
        {#each currentSite.footerLogos as logo}
          <div class="footer-logo-cell" style:--logo-width={logo.width}>
            <img src="{base}{logo.src}" alt={logo.alt} />
          </div>
        {/each}
      </div>

      {#if currentSite.footerCopyright}
        <p class="footer-copyright">{currentSite.footerCopyright}</p>
      {/if}
    </div>

    <p class="footer-disclaimer">{currentSite.footerDisclaimer}</p>

  </div>
</footer>

<style>
  .site-footer {
    background-color: var(--white);
    color: var(--blue);
    padding: 18px 0;
  }

  .footer-content {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    align-items: center;
    gap: clamp(32px, 12vw, 200px);
  }

  .footer-disclaimer {
    font-size: 0.78rem;
    line-height: 1.35;
    font-weight: 400;
    max-width: none;
  }

  .footer-logo-area {
    display: grid;
    gap: 18px;
  }

  .footer-logos {
    display: flex;
    align-items: center;
    gap: clamp(18px, 2vw, 28px);
    min-width: 0;
    flex: 0 0 auto;
  }

  .footer-logo-cell {
    display: grid;
    place-items: center start;
    min-width: 0;
    flex: 0 0 auto;
  }

  .footer-logo-cell img {
    width: var(--logo-width);
    height: auto;
    object-fit: contain;
  }

  .footer-copyright {
    max-width: 320px;
    color: var(--blue);
    font-size: 0.68rem;
    line-height: 1.35;
    font-weight: 400;
  }

  @media (max-width: 960px) {
    .footer-content {
      grid-template-columns: 1fr;
      align-items: start;
      gap: 24px;
    }

    .footer-logos {
      flex-wrap: wrap;
    }

    .footer-disclaimer {
      max-width: 680px;
    }

  }

  @media (max-width: 480px) {
    .site-footer {
      padding: 28px 0;
    }
  }
</style>
