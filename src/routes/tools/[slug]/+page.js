import { error } from '@sveltejs/kit';
import { resources } from '$lib/content/resources.js';

export function entries() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function load({ params }) {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    throw error(404, 'Resource not found');
  }

  return { resource };
}
