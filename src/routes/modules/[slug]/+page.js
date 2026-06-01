import { error } from '@sveltejs/kit';
import { modules } from '$lib/content/modules.js';

/*
  Tells SvelteKit which dynamic module pages should be generated as static HTML.
*/
export function entries() {
  return modules.map((module) => ({ slug: module.slug }));
}

/*
  Loads the correct module based on the URL slug.
*/
export function load({ params }) {
  const module = modules.find((item) => item.slug === params.slug);

  if (!module) {
    throw error(404, 'Module not found');
  }

  return { module };
}
