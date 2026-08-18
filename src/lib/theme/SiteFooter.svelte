<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<footer id="contact" class="site-footer">
  <div class="container footer-content">
    <div class="footer-logo-area">
      <div class="footer-logos" aria-label="Programme logos">
        {#each site.footerLogos as logo}
          <div class="footer-logo-cell" style:--logo-width={logo.width}>
            <img src="{base}{logo.src}" alt={logo.alt} />
          </div>
        {/each}
      </div>

      {#if site.footerCopyright}
        <p class="footer-copyright">{site.footerCopyright}</p>
      {/if}
    </div>

    <p class="footer-disclaimer">
      This website is funded by the European Union. Its content
      are the sole responsibility of the EU4Green Recovery East programme, financed by the
      European Union. The content of the website belongs to the authors and does not necessarily
      reflect the views of the European Union, its members or the Governments of the Eastern Partnership Countries. This website and any content included herein are without prejudice to the status of, or sovereignty over, any territory, to the delimitation of international frontiers and boundaries, and to the name of any territory, city or area. Furthermore, neither the EU nor the EU4Green Recovery East programme are liable for risks arising from the use of this website or any third-party tools.
    </p>

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
