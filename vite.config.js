import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { BASE_PATH } from './deployment.config.js';

const buildEnv = /** @type {Record<string, string | undefined>} */ (
  Reflect.get(globalThis, 'process')?.env ?? {}
);

// Vite configuration used by SvelteKit.
export default defineConfig({
  // PUBLIC_* settings are intentionally available to the browser at build time.
  envPrefix: ['VITE_', 'PUBLIC_'],
  define: {
  'import.meta.env.PUBLIC_BASE_PATH': JSON.stringify(BASE_PATH)
},
  plugins: [sveltekit()]
});
