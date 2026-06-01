import adapter from '@sveltejs/adapter-static';

/*
  SvelteKit configuration for a static GitHub Pages deployment.

  BASE_PATH controls whether the site is deployed at a repository path.
  Examples:
  - Local development: BASE_PATH is empty, so routes are served from /
  - GitHub project page: BASE_PATH=/digital-toolbox
  - Custom domain at root, for example https://tools.unido.org: BASE_PATH is empty
*/
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // GitHub Pages serves the static files from the build folder.
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base
    }
  }
};

export default config;
