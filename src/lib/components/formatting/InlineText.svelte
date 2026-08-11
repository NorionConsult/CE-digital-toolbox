<script>
  export let text = '';

  /**
   * Allows editors to make selected words bold with **double asterisks** and
   * add links with [link text](https://example.com).
   * Example: "Try **Circular Loop Designer** and read the [guide](https://example.com)."
   * Unmatched formatting markers are shown as normal text so content is not accidentally hidden.
   * @param {string} value
   * @returns {{ text: string; bold: boolean; href?: string }[]}
   */
  function formatInlineText(value) {
    const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+|mailto:[^)\s]+)\)/g;
    const parts = [];
    let cursor = 0;

    for (const match of value.matchAll(linkPattern)) {
      const matchIndex = match.index ?? 0;

      if (matchIndex > cursor) {
        parts.push(...formatBoldText(value.slice(cursor, matchIndex)));
      }

      parts.push({ text: match[1], bold: false, href: match[2] });
      cursor = matchIndex + match[0].length;
    }

    if (cursor < value.length) {
      parts.push(...formatBoldText(value.slice(cursor)));
    }

    return parts.filter((part) => part.text.length > 0);
  }

  /**
   * @param {string} value
   * @returns {{ text: string; bold: boolean }[]}
   */
  function formatBoldText(value) {
    if (!value.includes('**')) {
      return [{ text: value, bold: false }];
    }

    const parts = [];
    let cursor = 0;
    let isBold = false;

    while (cursor < value.length) {
      const markerIndex = value.indexOf('**', cursor);

      if (markerIndex === -1) {
        parts.push({ text: value.slice(cursor), bold: isBold });
        break;
      }

      if (markerIndex > cursor) {
        parts.push({ text: value.slice(cursor, markerIndex), bold: isBold });
      }

      isBold = !isBold;
      cursor = markerIndex + 2;
    }

    if (isBold) {
      return [{ text: value, bold: false }];
    }

    return parts.filter((part) => part.text.length > 0);
  }
</script>

{#each formatInlineText(text) as part}
  {#if part.href}
    <a
      href={part.href}
      target={part.href.startsWith('http') ? '_blank' : undefined}
      rel={part.href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {part.text}
    </a>
  {:else if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}
{/each}
