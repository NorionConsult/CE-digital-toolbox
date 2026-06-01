<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<footer id="contact" class="site-footer">
  <div class="container footer-content">
    <p class="footer-name">{site.name}</p>

    <div class="footer-logos" aria-label="Programme logos">
      {#each site.footerLogos as logo}
        <img src="{base}{logo.src}" alt={logo.alt} />
      {/each}
    </div>

    <p>
      Contact:
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .footer-name {
    font-weight: 700;
  }

  .footer-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    flex: 1;
  }

  .footer-logos img {
    max-height: 52px;
    width: auto;
    object-fit: contain;
  }

  .site-footer a {
    color: var(--blue);
  }

  @media (max-width: 640px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-logos {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
