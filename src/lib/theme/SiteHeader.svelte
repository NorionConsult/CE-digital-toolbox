<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<header class="site-header">
  {#if site.headerPartnerLogos?.enabled}
    <div class="partner-logo-bar">
      <div
        class="container partner-logo-bar-content"
        style={`--header-partner-logo-height: ${site.headerPartnerLogos.logoHeight};`}
        aria-label="Programme logos"
      >
        {#each site.headerPartnerLogos.logos as logo}
          <img
            src="{base}{logo.src}"
            alt={logo.alt}
            style={`--header-partner-logo-width: ${logo.width};`}
          />
        {/each}
      </div>
    </div>
  {/if}

  <div class="main-menu-bar">
    <div class="container header-content">
      <a href="{base}/" class="site-brand">
        <img class="site-logo-image" src="{base}{site.headerLogo.src}" alt={site.headerLogo.alt} />
        <span class="site-logo">{site.name}</span>
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        {#each site.navigation as item}
          <a href="{base}{item.href}">{item.label}</a>
        {/each}
      </nav>
    </div>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--white);
    border-bottom: 1px solid var(--soft-border);
  }

  .partner-logo-bar {
    background:
      linear-gradient(135deg, rgba(9, 187, 136, 0.18), rgba(255, 204, 0, 0.2)),
      var(--light-bg);
  }

  .partner-logo-bar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    min-height: 68px;
    padding: 20px 0;
  }

  .partner-logo-bar-content img {
    width: auto;
    max-width: var(--header-partner-logo-width);
    height: var(--header-partner-logo-height, 26px);
    object-fit: contain;
  }

  .main-menu-bar {
    background-color: var(--white);
    box-shadow: 0 -4px 10px rgba(10, 46, 54, 0.05), 0 4px 10px rgba(10, 46, 54, 0.05);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    gap: 18px 22px;
  }

  .site-brand {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    padding-left: 0;
    min-width: 0;
  }

  .site-logo-image {
    width: auto;
    height: 30px;
    object-fit: contain;
    flex: 0 0 auto;
  }

  .site-logo {
    font-size: clamp(1.55rem, 2vw, 1.9rem);
    line-height: 1;
    text-transform: uppercase;
    min-width: 0;
  }

  .main-nav {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    min-width: 0;
  }

  .main-nav a {
    color: var(--dark);
    text-decoration: none;
    font-weight: 700;
    font-size: clamp(0.82rem, 0.95vw, 0.95rem);
    line-height: 1;
  }

  .main-nav a:hover {
    color: var(--green-primary);
  }

  @media (max-width: 760px) {
    .partner-logo-bar-content {
      gap: 16px;
      justify-content: flex-start;
      min-height: 52px;
      padding: 10px 0;
    }

    .partner-logo-bar-content img {
      height: min(var(--header-partner-logo-height, 26px), 34px);
      max-width: min(var(--header-partner-logo-width), calc((100% - 16px) / 2));
    }

    .header-content {
      flex-direction: column;
      align-items: stretch;
      gap: 14px;
      padding: 16px 0;
    }

    .site-brand {
      width: 100%;
      max-width: 100%;
      gap: 10px;
    }

    .site-logo-image {
      height: clamp(22px, 6vw, 28px);
    }

    .site-logo {
      font-size: clamp(1rem, 5vw, 1.3rem);
      line-height: 0.95;
      overflow-wrap: anywhere;
    }

    .main-nav {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, max-content));
      width: 100%;
      justify-content: flex-start;
      gap: 10px 14px;
      margin-left: 0;
    }

    .main-nav a {
      font-size: 0.9rem;
      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 420px) {
    .site-logo {
      font-size: clamp(0.85rem, 4.5vw, 1rem);
    }

    .site-logo-image {
      height: clamp(20px, 5.5vw, 24px);
    }

    .main-nav {
      gap: 10px 18px;
    }

    .main-nav a {
      font-size: 0.84rem;
    }
  }
</style>
