<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import {
    LANGUAGE_STORAGE_KEY,
    languages,
    getAppPathname,
    getLanguageFromPathname,
    hasLanguagePrefix,
    isSupportedLanguage,
    localizeContent,
    localizePath,
    translate
  } from '$lib/translation-helper.js';
  import { site } from '$lib/content/editable/global/site.js';

  const routingBasePath = import.meta.env.PUBLIC_BASE_PATH || base;

  let menuOpen = false;
  let selectedLanguage = 'en';

  const menuLabels = {
    open: {
      en: 'Open menu',
      uk: 'Відкрити меню',
      ro: 'Deschide meniul',
      hy: 'Բացել ընտրացանկը'
    },
    close: {
      en: 'Close menu',
      uk: 'Закрити меню',
      ro: 'Închide meniul',
      hy: 'Փակել ընտրացանկը'
    },
    language: {
      en: 'Language',
      uk: 'Мова',
      ro: 'Limbă',
      hy: 'Լեզու'
    },
    programmeLogos: {
      en: 'Programme logos',
      uk: 'Логотипи програми',
      ro: 'Siglele programului',
      hy: 'Ծրագրի լոգոները'
    },
    mainNavigation: {
      en: 'Main navigation',
      uk: 'Головна навігація',
      ro: 'Navigare principală',
      hy: 'Հիմնական նավարկություն'
    }
  };

  $: currentLanguage = getLanguageFromPathname($page.url.pathname, routingBasePath);
  $: selectedLanguage = currentLanguage;
  $: currentSite = localizeContent(site, currentLanguage);
  $: currentAppPath = getAppPathname($page.url.pathname, routingBasePath);

  /** @param {string} path */
  function getLocalizedHref(path) {
    if (path.startsWith('#')) {
      return `${base}${localizePath(currentAppPath, currentLanguage)}${path}`;
    }

    return `${base}${localizePath(path, currentLanguage)}`;
  }

  /** @param {string} languageCode */
  function getLanguageHref(languageCode) {
    return `${base}${localizePath(currentAppPath, languageCode)}`;
  }

  /** @param {Event} event */
  function changeLanguage(event) {
    const languageCode = event.currentTarget instanceof HTMLSelectElement
      ? event.currentTarget.value
      : currentLanguage;

    if (browser && isSupportedLanguage(languageCode)) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
    }

    menuOpen = false;
    goto(getLanguageHref(languageCode));
  }

  onMount(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (hasLanguagePrefix($page.url.pathname, base)) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
      return;
    }

    if (storedLanguage && isSupportedLanguage(storedLanguage) && storedLanguage !== currentLanguage) {
      goto(getLanguageHref(storedLanguage), { replaceState: true });
    }
  });
</script>

<header class="site-header">
  {#if currentSite.headerPartnerLogos?.enabled}
    <div class="partner-logo-bar">
      <div
        class="container partner-logo-bar-content"
        style={`--header-partner-logo-height: ${currentSite.headerPartnerLogos.logoHeight};`}
        aria-label={translate(menuLabels.programmeLogos, currentLanguage)}
      >
        {#each currentSite.headerPartnerLogos.logos as logo}
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
      <a href={getLocalizedHref('/')} class="site-brand">
        <img class="site-logo-image" src="{base}{currentSite.headerLogo.src}" alt={currentSite.headerLogo.alt} />
        <span class="site-logo">{currentSite.name}</span>
      </a>

      <button
        type="button"
        class="menu-toggle"
        aria-label={menuOpen
          ? translate(menuLabels.close, currentLanguage)
          : translate(menuLabels.open, currentLanguage)}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        on:click={() => (menuOpen = !menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        class:menu-open={menuOpen}
        class="main-nav"
        aria-label={translate(menuLabels.mainNavigation, currentLanguage)}
      >
        {#each currentSite.navigation as item}
          <a href={getLocalizedHref(item.href)} on:click={() => (menuOpen = false)}>{item.label}</a>
        {/each}

        <label class="language-selector">
          <select
            bind:value={selectedLanguage}
            aria-label={translate(menuLabels.language, currentLanguage)}
            on:change={changeLanguage}
          >
            {#each languages as language}
              <option value={language.code}>{language.label}</option>
            {/each}
          </select>
        </label>

        <div class="language-crawl-links" aria-hidden="true">
          {#each languages as language}
            <a href={getLanguageHref(language.code)} tabindex="-1">{language.shortLabel}</a>
          {/each}
        </div>
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
      var(--white);
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
    background-color: var(--yellow);
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
    color: var(--green-secondary);
  }

  .language-selector {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--dark);
    font-weight: 700;
    font-size: clamp(0.82rem, 0.95vw, 0.95rem);
    line-height: 1;
  }

  .language-selector select {
    min-width: 118px;
    border: 0;
    border-radius: 10px;
    padding: 8px 28px 8px 10px;
    background-color: var(--white);
    color: var(--dark);
    font: inherit;
    cursor: pointer;
  }

  .language-selector select:hover,
  .language-selector select:focus-visible {
    outline: 2px solid var(--green-secondary);
    outline-offset: 2px;
  }

  .language-crawl-links {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .menu-toggle {
    display: none;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 15px;
    background: var(--blue);
    padding: 10px;
    color: var(--white);
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background-color: currentColor;
  }

  .menu-toggle span + span {
    margin-top: 6px;
  }

  .menu-toggle:hover,
  .menu-toggle:focus-visible {
    background-color: var(--button-highlight);
    outline: none;
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
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 14px;
      padding: 16px 0;
    }

    .site-brand {
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

    .menu-toggle {
      display: inline-grid;
      align-content: center;
      justify-self: end;
    }

    .main-nav {
      display: none;
      grid-column: 1 / -1;
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      margin-left: 0;
      padding-top: 6px;
      border-top: 1px solid var(--soft-border);
    }

    .main-nav.menu-open {
      display: flex;
    }

    .main-nav a {
      display: block;
      padding: 14px 0;
      font-size: 1rem;
      border-bottom: 1px solid rgba(10, 46, 54, 0.08);
    }

    .language-selector {
      justify-content: space-between;
      padding: 14px 0;
      border-bottom: 1px solid rgba(10, 46, 54, 0.08);
    }

    .language-selector select {
      min-width: 150px;
    }
  }

  @media (max-width: 420px) {
    .site-logo {
      font-size: clamp(0.85rem, 4.5vw, 1rem);
    }

    .site-logo-image {
      height: clamp(20px, 5.5vw, 24px);
    }
  }
</style>
