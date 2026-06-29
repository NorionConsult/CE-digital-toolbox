<script>
  import InlineText from '$lib/components/formatting/InlineText.svelte';

  export let eyebrow;
  export let title;
  export let text;
</script>

<div class="section-intro">
  <p class="eyebrow">{eyebrow}</p>
  <h2>{title}</h2>
  <p><InlineText {text} /></p>
</div>
