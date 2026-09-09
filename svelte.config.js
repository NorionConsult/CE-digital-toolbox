import adapter from '@sveltejs/adapter-static';

/*
  SvelteKit configuration for a static GitHub Pages deployment.

  BASE_PATH can be used for deployments that require SvelteKit route prefixing,
  but this GitHub Pages workflow keeps it empty because the site uses relative
  links. PUBLIC_BASE_PATH is used only so the app can recognise the repository
  path in the browser.
  Examples:
  - Local development: BASE_PATH is empty, so routes are served from /
  - This GitHub project page: PUBLIC_BASE_PATH=/CE-digital-toolbox
  - Custom domain at root, for example https://tools.unido.org: BASE_PATH is empty
*/
const base = process.env.BASE_PATH ?? process.env.PUBLIC_BASE_PATH ?? '';
const deployBase = process.env.BASE_PATH || process.env.PUBLIC_BASE_PATH || '';

function handlePrerenderHttpError({ status, path, message }) {
  /*
    GitHub Pages serves this repository under PUBLIC_BASE_PATH, but SvelteKit's
    static prerender crawler checks route paths without that deployment prefix.
    Ignore only those duplicate deploy-prefixed crawl URLs; normal 404s still
    fail.
  */
  if (status === 404 && deployBase && path.startsWith(`${deployBase}/`)) {
    return;
  }

  throw new Error(message);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // GitHub Pages serves the static files from the build folder.
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base
    },
    prerender: {
      handleHttpError: handlePrerenderHttpError
    }
  }
};

export default config;
