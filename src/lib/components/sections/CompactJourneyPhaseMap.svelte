<script>
  import { base } from '$app/paths';

  /** @type {any[]} */
  export let phases = [];
  /** @type {string} */
  export let activeSlug = '';
</script>

<nav class="compact-journey-map" aria-label="Journey phases overview">
  <div class="compact-journey-line" aria-hidden="true"></div>

  {#each phases as phase}
    <a
      href="{base}/journey-phases/{phase.slug}/"
      class:active-phase={phase.slug === activeSlug}
      class="compact-journey-step"
      aria-current={phase.slug === activeSlug ? 'page' : undefined}
    >
      <span class="compact-journey-point">
        <img src="{base}{phase.icon}" alt="" aria-hidden="true" />
      </span>

      <span class="compact-journey-text">
        <span class="compact-journey-number">{phase.shortName}</span>
        <span class="compact-journey-title">{phase.title}</span>
      </span>
    </a>
  {/each}
</nav>

<style>
  .compact-journey-map {
    --compact-point-size: 46px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, minmax(76px, 1fr));
    gap: 10px;
    width: min(100%, 760px);
    padding: 2px 0 0;
  }

  .compact-journey-line {
    position: absolute;
    top: calc(var(--compact-point-size) / 2);
    right: calc((100% / 6) - (var(--compact-point-size) / 2));
    left: calc(var(--compact-point-size) / 2);
    height: 3px;
    border-radius: 999px;
    background-color: var(--dark);
    opacity: 0.18;
  }

  .compact-journey-step {
    position: relative;
    z-index: 1;
    display: grid;
    justify-items: start;
    gap: 8px;
    min-width: 0;
    color: color-mix(in srgb, var(--dark) 42%, var(--white));
    text-align: left;
    text-decoration: none;
  }

  .compact-journey-point {
    width: var(--compact-point-size);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border: 3px solid color-mix(in srgb, var(--dark) 34%, var(--white));
    border-radius: 999px;
    background-color: var(--white);
    transition:
      background-color 0.18s ease,
      border-color 0.18s ease,
      transform 0.18s ease;
  }

  .compact-journey-point img {
    width: 58%;
    height: 58%;
    object-fit: contain;
    opacity: 0.54;
  }

  .compact-journey-text {
    display: grid;
    gap: 3px;
    width: 100%;
    min-width: 0;
  }

  .compact-journey-number {
    color: color-mix(in srgb, var(--green-secondary) 38%, var(--white));
    font-family: var(--font-display);
    font-size: 0.76rem;
    font-weight: 800;
    line-height: 1;
  }

  .compact-journey-title {
    font-family: var(--font-display);
    font-size: clamp(0.78rem, 1vw, 0.95rem);
    font-weight: 800;
    line-height: 1;
  }

  .compact-journey-step:hover .compact-journey-point,
  .compact-journey-step:focus-visible .compact-journey-point,
  .compact-journey-step.active-phase .compact-journey-point {
    border-color: var(--green-secondary);
    background-color: var(--green-secondary);
    transform: translateY(-1px);
  }

  .compact-journey-step:hover,
  .compact-journey-step:focus-visible {
    color: var(--dark);
    outline: none;
  }

  .compact-journey-step:hover .compact-journey-title,
  .compact-journey-step:focus-visible .compact-journey-title {
    color: var(--dark);
  }

  .compact-journey-step.active-phase {
    color: var(--dark);
    outline: none;
  }

  .compact-journey-step:hover .compact-journey-point img,
  .compact-journey-step:focus-visible .compact-journey-point img,
  .compact-journey-step.active-phase .compact-journey-point img {
    opacity: 1;
  }

  .compact-journey-step.active-phase .compact-journey-number {
    color: var(--green-secondary);
  }

  .compact-journey-step.active-phase .compact-journey-title {
    color: var(--dark);
  }

  @media (max-width: 900px) {
    .compact-journey-map {
      width: 100%;
      overflow-x: auto;
      grid-template-columns: repeat(6, minmax(82px, 1fr));
      padding-bottom: 6px;
    }
  }

  @media (max-width: 560px) {
    .compact-journey-map {
      --compact-point-size: 38px;
      grid-template-columns: repeat(6, minmax(72px, 1fr));
      gap: 8px;
    }

    .compact-journey-line {
      height: 2px;
    }

    .compact-journey-number {
      font-size: 0.68rem;
    }

    .compact-journey-title {
      font-size: 0.75rem;
    }
  }
</style>
