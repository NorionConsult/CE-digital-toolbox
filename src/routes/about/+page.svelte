<script>
  import InlineText from '$lib/components/formatting/InlineText.svelte';
  import { aboutPage } from '$lib/content/about-page.js';
</script>

<svelte:head>
  <title>{aboutPage.pageTitle}</title>
</svelte:head>

<section class="subpage-hero about-hero">
  <div class="container subpage-content">
    <p class="eyebrow">{aboutPage.eyebrow}</p>
    <h1>{aboutPage.title}</h1>

    <div class="about-copy">
      {#each aboutPage.paragraphs as paragraph}
        <p class="subpage-intro"><InlineText text={paragraph} /></p>
      {/each}
    </div>
  </div>
</section>

<style>
  .about-hero h1,
  .about-copy {
    max-width: 900px;
  }

  .about-copy {
    display: grid;
    gap: 18px;
  }

  .about-copy .subpage-intro {
    margin: 0;
  }
</style>
