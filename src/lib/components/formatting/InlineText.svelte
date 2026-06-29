<script>
  export let text = '';

  /**
   * Allows editors to make selected words bold in content files with **double asterisks**.
   * Example: "Try **Circular Loop Designer** before scaling the idea."
   * Unmatched asterisks are shown as normal text so content is not accidentally hidden.
   * @param {string} value
   * @returns {{ text: string; bold: boolean }[]}
   */
  function formatInlineText(value) {
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
  {#if part.bold}<strong>{part.text}</strong>{:else}{part.text}{/if}
{/each}
