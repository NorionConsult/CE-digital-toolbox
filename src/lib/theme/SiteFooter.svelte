<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<footer id="contact" class="site-footer">
  <div class="container footer-content">
    {#each site.footerLogos as logo}
      <div class="footer-logo-cell" style:--logo-width={logo.width}>
        <img src="{base}{logo.src}" alt={logo.alt} />
      </div>
    {/each}

    <p class="footer-disclaimer">
      This website was produced with the financial support of the European Union. Its content
      represents the sole responsibility of the EU4Green Recovery East programme, financed by the
      European Union. The content of the website belongs to the authors and does not necessarily
      reflect the vision of the European Union.
    </p>

    <p class="footer-contact">
      <strong>Contact:</strong>
      <a href="mailto:{site.contactEmail}">{site.contactEmail}</a>
    </p>
  </div>
</footer>

<style>
  .site-footer {
    background-color: var(--yellow);
    color: var(--blue);
    padding: 32px 0;
  }

  .footer-content {
    display: grid;
    grid-template-columns: minmax(170px, auto) minmax(90px, auto) minmax(420px, 1.4fr) minmax(140px, 0.4fr);
    align-items: center;
    gap: 32px;
  }

  .footer-disclaimer {
    font-size: 0.78rem;
    line-height: 1.35;
    font-weight: 400;
    max-width: 680px;
  }

  .footer-logo-cell {
    display: grid;
    place-items: start;
    min-width: 0;
  }

  .footer-logo-cell img {
    width: min(var(--logo-width), 100%);
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }

  .footer-contact {
    justify-self: end;
    min-width: 0;
    max-width: 100%;
    font-size: clamp(0.74rem, 1.25vw, 0.95rem);
    line-height: 1.35;
    white-space: nowrap;
  }

  .footer-contact strong {
    display: block;
  }

  .site-footer a {
    color: var(--blue);
    white-space: nowrap;
  }

  @media (max-width: 960px) {
    .footer-content {
      grid-template-columns: 1fr;
      align-items: start;
      gap: 24px;
    }

    .footer-disclaimer {
      max-width: 680px;
    }

    .footer-contact {
      justify-self: start;
      font-size: clamp(0.72rem, 3.4vw, 0.9rem);
    }
  }

  @media (max-width: 480px) {
    .site-footer {
      padding: 28px 0;
    }

    .footer-contact {
      font-size: clamp(0.68rem, 3.2vw, 0.82rem);
    }
  }
</style>
