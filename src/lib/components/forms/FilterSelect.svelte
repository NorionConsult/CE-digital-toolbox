<script>
  /*
    Reusable filter drop-down.
    Bind the selected value from the parent page with bind:value.
  */
  /** @type {string} */
  export let id;
  /** @type {string} */
  export let label;
  /** @type {string} */
  export let value = '';
  /** @type {string[]} */
  export let options = [];
</script>

<label class="filter-field" for={id}>
  <span>{label}</span>
  <select {id} bind:value>
    <option value="">All</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</label>

<style>
  .filter-field {
    display: grid;
    gap: 8px;
  }

  .filter-field span {
    font-weight: 700;
    color: var(--dark);
  }

  select {
    width: 100%;
    border: 1px solid var(--soft-border);
    border-radius: 12px;
    padding: 12px 14px;
    background-color: var(--white);
    color: var(--dark);
  }

  select:focus {
    outline: 3px solid rgba(9, 187, 136, 0.25);
    border-color: var(--green-primary);
  }
</style>
