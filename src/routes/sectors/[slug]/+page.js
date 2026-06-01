import { error } from '@sveltejs/kit';
import { sectors } from '$lib/content/sectors.js';
import { resources } from '$lib/content/resources.js';

export function entries() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function load({ params }) {
  const sector = sectors.find((item) => item.slug === params.slug);

  if (!sector) {
    throw error(404, 'Sector not found');
  }

  const relatedResources = resources.filter((resource) => resource.sector === sector.title);

  return { sector, relatedResources };
}
