<script>
  import { base } from '$app/paths';
  import { site } from '$lib/content/site.js';
</script>

<header class="site-header">
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
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--white);
    border-bottom: 1px solid var(--soft-border);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    gap: 24px;
  }

  .site-brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    white-space: nowrap;
  }

  .site-logo-image {
    width: auto;
    height: 44px;
    object-fit: contain;
    flex: 0 0 auto;
  }

  .site-logo {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .main-nav {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .main-nav a {
    color: var(--dark);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
  }

  .main-nav a:hover {
    color: var(--green-primary);
  }

  @media (max-width: 760px) {
    .header-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .main-nav {
      justify-content: flex-start;
      gap: 16px;
    }
  }
</style>
