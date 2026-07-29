<script>
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { home } from '$lib/content/home.js';
  import { site } from '$lib/content/site.js';
</script>

<svelte:head>
  <title>About | {site.name}</title>
</svelte:head>

<section class="subpage-hero about-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{home.aboutSection.eyebrow}</p>
    <h1>{home.aboutSection.title}</h1>
    <p class="subpage-intro"><InlineText text={home.aboutSection.text} /></p>
  </div>
</section>

<style>
  .about-hero h1,
  .about-hero .subpage-intro {
    max-width: 900px;
  }
</style>
