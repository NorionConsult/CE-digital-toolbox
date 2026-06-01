<script>
  /** @type {string} */
  export let title;
  /** @type {string[]} */
  export let items = [];
  /** @type {string} */
  export let completeLabel = 'checked';

  /** @type {number[]} */
  let checkedItems = [];

  $: completedCount = checkedItems.length;
</script>

<section class="interactive-checklist" aria-label={title}>
  <div class="checklist-heading">
    <h3>{title}</h3>
    <p>{completedCount} / {items.length} {completeLabel}</p>
  </div>

  <div class="checklist-items">
    {#each items as item, index}
      <label>
        <input type="checkbox" bind:group={checkedItems} value={index} />
        <span>{item}</span>
      </label>
    {/each}
  </div>
</section>

<style>
  .interactive-checklist {
    display: grid;
    gap: 18px;
    padding: 24px;
    border: 1px solid var(--soft-border);
    border-radius: 20px;
    background-color: var(--light-bg);
  }

  .checklist-heading {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: baseline;
  }

  .checklist-heading h3 {
    font-size: 1.45rem;
    text-transform: uppercase;
  }

  .checklist-heading p {
    color: var(--muted);
    font-weight: 700;
    white-space: nowrap;
  }

  .checklist-items {
    display: grid;
    gap: 12px;
  }

  label {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    align-items: start;
    padding: 14px;
    border-radius: 14px;
    background-color: var(--white);
  }

  input {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    accent-color: var(--green-primary);
  }

  @media (max-width: 640px) {
    .checklist-heading {
      display: grid;
    }
  }
</style>
