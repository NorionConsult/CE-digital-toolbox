<script>
  /*
    The page link points to the resource slug in src/lib/content/editable/tools/tool-catalogue.js.
  */
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import ResourceBadges from '$lib/components/cards/ResourceBadges.svelte';
  import { site } from '$lib/content/editable/global/site.js';
  import { translateTaxonomyDisplay, translateTaxonomyValue } from '$lib/content/technical/taxonomy-labels.js';
  import { getLanguageFromPathname, localizeContent, localizePath, translate } from '$lib/translation-helper.js';

  export let resource;
  export let variant = 'default';

  const labels = {
    effort: { en: 'Effort', uk: 'Зусилля', ro: 'Efort', hy: 'Ջանք' },
    language: { en: 'Language', uk: 'Мова', ro: 'Limbă', hy: 'Լեզու' },
    provider: { en: 'Provider', uk: 'Постачальник', ro: 'Furnizor', hy: 'Մատակարար' },
    access: { en: 'Access', uk: 'Доступ', ro: 'Acces', hy: 'Մուտք' }
  };

  $: isCompact = variant === 'compact';
  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentSite = localizeContent(site, currentLanguage);
  $: currentResource = localizeContent(resource, currentLanguage);
  $: effortLabel = translateTaxonomyValue(currentResource.effortDisplay ?? currentResource.effort, 'effort', currentLanguage);
  $: languageLabel = translateTaxonomyDisplay(currentResource.languageDisplay ?? currentResource.language, 'languages', currentLanguage);
  $: accessLabel = translateTaxonomyValue(currentResource.accessDisplay ?? currentResource.access, 'access', currentLanguage);
</script>

<article class="tool-card resource-card" class:resource-card-compact={isCompact}>
  <div>
    <ResourceBadges resource={currentResource} />
    <h3>{currentResource.title}</h3>
    <p class="resource-description">{currentResource.description}</p>
  </div>

  <dl class="resource-meta" aria-label="Resource metadata">
    <div>
      <dt>{translate(labels.effort, currentLanguage)}</dt>
      <dd>{effortLabel}</dd>
    </div>
    <div>
      <dt>{translate(labels.language, currentLanguage)}</dt>
      <dd>{languageLabel}</dd>
    </div>
    <div>
      <dt>{translate(labels.provider, currentLanguage)}</dt>
      <dd>{currentResource.provider}</dd>
    </div>
    <div>
      <dt>{translate(labels.access, currentLanguage)}</dt>
      <dd>{accessLabel}</dd>
    </div>
  </dl>

  <a href="{base}{localizePath(`/tools/${currentResource.slug}/`, currentLanguage)}" class="resource-link" target="_blank" rel="noreferrer">
    {currentSite.labels.viewResource}
  </a>
</article>

<style>
  .resource-card {
    position: relative;
    overflow: hidden;
    background-color: var(--white);
    border: 1px solid var(--soft-border);
    border-radius: 22px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 330px;
    box-shadow: 0 8px 24px rgba(10, 46, 54, 0.06);
  }

  .resource-card h3 {
    color: var(--dark);
    font-size: var(--tool-card-title-size, 1.65rem);
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .resource-description {
    color: var(--muted);
  }

  .resource-meta {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  .resource-meta div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--soft-border);
    padding-top: 10px;
  }

  dt {
    font-weight: 700;
    color: var(--dark);
  }

  dd {
    color: var(--muted);
    text-align: right;
  }

  .resource-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--action-button-padding);
    border: 0;
    border-radius: var(--action-button-radius);
    background-color: var(--blue);
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
  }

  .resource-link:hover {
    background-color: var(--button-highlight);
  }

  .resource-card-compact {
    gap: var(--embedded-tool-card-gap, 16px);
    min-height: var(--embedded-tool-card-min-height, 280px);
    padding: var(--embedded-tool-card-padding, 20px);
    border-radius: var(--embedded-tool-card-radius, 18px);
  }

  .resource-card-compact .resource-meta {
    gap: 8px;
  }

  .resource-card-compact .resource-meta div {
    gap: 10px;
    padding-top: 8px;
  }

</style>
