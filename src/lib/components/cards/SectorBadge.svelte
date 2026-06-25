<script>
  /** @type {string} */
  export let sector;

  /** @type {Record<string, string>} */
  const knownColours = {
    Agriculture: '#41a552',
    Construction: '#d9772e',
    Textiles: '#1d3d8f',
    Tourism: '#8a4f9e'
  };

  /** @param {string} value */
  function fallbackColour(value) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = value.charCodeAt(index) + ((hash << 5) - hash);
    }

    return `hsl(${Math.abs(hash) % 360} 52% 38%)`;
  }

  $: badgeColour = knownColours[sector] ?? fallbackColour(sector);
</script>

<span class="sector-badge" style:--sector-badge-colour={badgeColour}>{sector}</span>

<style>
  .sector-badge {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 6px 11px;
    border: 2px solid var(--sector-badge-colour);
    border-radius: 999px;
    background-color: transparent;
    color: var(--sector-badge-colour);
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1;
  }
</style>
