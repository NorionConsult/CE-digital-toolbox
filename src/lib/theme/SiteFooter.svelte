<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<footer id="contact" class="site-footer">
  <div class="container footer-content">
    <div class="footer-logos" aria-label="Programme logos">
      {#each site.footerLogos as logo}
        <div class="footer-logo-cell" style:--logo-width={logo.width}>
          <img src="{base}{logo.src}" alt={logo.alt} />
        </div>
      {/each}
    </div>

    <p class="footer-disclaimer">
      This website was produced with the financial support of the European Union. Its content
      represents the sole responsibility of the EU4Green Recovery East programme, financed by the
      European Union. The content of the website belongs to the authors and does not necessarily
      reflect the vision of the European Union. Furthermore, the project is not liable for risks arising from the use of this website or any third-party tools. Please refer to the relevant providers for full terms and conditions.
    </p>

  </div>
</footer>

<style>
  .site-footer {
    background-color: var(--yellow);
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
