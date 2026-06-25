import { error } from '@sveltejs/kit';
import { cases } from '$lib/content/cases.js';

export function entries() {
  return cases.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function load({ params }) {
  const caseStudy = cases.find((item) => item.slug === params.slug);

  if (!caseStudy) {
    throw error(404, 'Case not found');
  }

  return { caseStudy };
}
