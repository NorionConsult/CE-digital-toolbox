import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const buildEnv = /** @type {Record<string, string | undefined>} */ (
  Reflect.get(globalThis, 'process')?.env ?? {}
);

// Vite configuration used by SvelteKit.
export default defineConfig({
  define: {
    'import.meta.env.PUBLIC_BASE_PATH': JSON.stringify(
      buildEnv.PUBLIC_BASE_PATH || buildEnv.BASE_PATH || ''
    )
  },
  plugins: [sveltekit()]
});
