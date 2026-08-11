<script>
  import InlineText from './InlineText.svelte';

  /*
    Shared renderer for long editor-facing text fields.

    Editors can use:
    - `||` to create a new paragraph or list item inside one text field
    - `- Item text` for bullet lists
    - `1. Item text` for numbered lists
    - `**bold text**` for bold words
    - `[link text](https://example.com)` for links

    Use this only for long text paragraphs/descriptions, not for ids, titles,
    slugs, image paths, taxonomy values or button links.
  */
  export let text = '';
  export let className = '';

  /**
   * @param {string | string[] | undefined | null} value
   * @returns {string[]}
   */
  function splitTextBlocks(value) {
    const values = Array.isArray(value) ? value : [value];

    return values
      .flatMap((item) => String(item ?? '').split(/\s*\|\|\s*|\n\s*\n/g))
      .map((item) => item.trim())
      .filter(Boolean);
  }

  /**
   * @param {string | string[] | undefined | null} value
   * @returns {({ type: 'paragraph'; text: string } | { type: 'ordered' | 'unordered'; items: string[] })[]}
   */
  function getRichTextBlocks(value) {
    /** @type {({ type: 'paragraph'; text: string } | { type: 'ordered' | 'unordered'; items: string[] })[]} */
    const blocks = [];
    /** @type {{ type: 'ordered' | 'unordered'; items: string[] } | null} */
    let activeList = null;

    for (const block of splitTextBlocks(value)) {
      const orderedItem = block.match(/^\d+\.\s+(.+)$/);
      const unorderedItem = block.match(/^-\s+(.+)$/);
      const listType = orderedItem ? 'ordered' : unorderedItem ? 'unordered' : null;

      if (listType) {
        const itemText = orderedItem?.[1] ?? unorderedItem?.[1] ?? '';

        if (!activeList || activeList.type !== listType) {
          activeList = { type: listType, items: [] };
          blocks.push(activeList);
        }

        activeList.items.push(itemText);
        continue;
      }

      activeList = null;
      blocks.push({ type: 'paragraph', text: block });
    }

    return blocks;
  }

  $: blocks = getRichTextBlocks(text);
</script>

<div class={`rich-text ${className}`.trim()}>
  {#each blocks as block}
    {#if block.type === 'paragraph'}
      <p><InlineText text={block.text} /></p>
    {:else if block.type === 'ordered'}
      <ol>
        {#each block.items as item}
          <li><InlineText text={item} /></li>
        {/each}
      </ol>
    {:else}
      <ul>
        {#each block.items as item}
          <li><InlineText text={item} /></li>
        {/each}
      </ul>
    {/if}
  {/each}
</div>

<style>
  .rich-text {
    display: grid;
    gap: var(--rich-text-gap, 18px);
  }

  p,
  ol,
  ul {
    margin: 0;
  }

  ol,
  ul {
    display: grid;
    gap: var(--rich-text-list-gap, 8px);
    padding-left: var(--rich-text-list-indent, 1.35rem);
  }

  li {
    line-height: 1.5;
  }
</style>
