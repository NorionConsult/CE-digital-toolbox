<script>
  import { base } from '$app/paths';

  /**
   * @typedef {{ text: string; href?: string }} RecommendationPart
   * @typedef {{
   *   number: string;
   *   label: string;
   *   x: number;
   *   y: number;
   *   description: string;
   *   recommendation: RecommendationPart[];
   * }} MaturityLevel
   */

  /*
    Edit the labels, descriptions and recommendations for the maturity visual here.
    The page layout and module text are kept separate so this component can be updated on its own.
  */
  /** @type {MaturityLevel[]} */
  const levels = [
    {
      number: '1',
      label: 'Unaware',
      x: 18,
      y: 60.5,
      description: 'No knowledge of CE. Business runs as usual; waste and inefficiency go unnoticed.',
      recommendation: [
        { text: 'Recommended next step: move to ' },
        { text: 'Module 1', href: '/modules/awareness/' },
        { text: ' (Awareness)' },
        { text: ' before continuing with diagnosis.' }
      ]
    },
    {
      number: '2',
      label: 'Exploring',
      x: 34,
      y: 57,
      description:
        'Beginning to learn about CE. Some interest in resource efficiency, but no action taken yet.',
      recommendation: [
        { text: 'Recommended next step: move to ' },
        { text: 'Module 1', href: '/modules/awareness/' },
        { text: ' (Awareness)' },
        { text: ' to build a stronger foundation before continuing.' }
      ]
    },
    {
      number: '3',
      label: 'Starting',
      x: 52,
      y: 40.7,
      description:
        'First steps taken: basic waste reduction, energy saving measures or recycling in place.',
      recommendation: [
        { text: 'You are in the correct module! If this module is familiar move to ' },
        { text: 'Module 3', href: '/modules/options/' },
        { text: ' (Options)' },
        { text: '.' }
      ]
    },
    {
      number: '4',
      label: 'Advancing',
      x: 72,
      y: 33.7,
      description:
        'CE principles embedded in some processes; partnerships formed; some circular revenue.',
      recommendation: [
        { text: 'Recommended next step: continue with ' },
        { text: 'Module 4', href: '/modules/business-case/' },
        { text: ' (Business Case), ' },
        { text: 'Module 5', href: '/modules/implement/' },
        { text: ' (Implement) and ' },
        { text: 'Module 6', href: '/modules/monitor/' },
        { text: ' (Monitor)' },
        { text: ' to strengthen, test and track your circular work.' }
      ]
    },
    {
      number: '5',
      label: 'Leading',
      x: 90,
      y: 19,
      description: 'CE is core to the business model. Circular practices measured, reported, and improved.',
      recommendation: [
        { text: 'Recommended next step: use ' },
        { text: 'Module 6', href: '/modules/monitor/' },
        {
          text: ' (Monitor) to keep improving. Share your experience with us, to inspire others by including you in the case collection!'
        }
      ]
    }
  ];

  /** @type {MaturityLevel | null} */
  let activeLevel = null;

  /**
   * @param {MaturityLevel} level
   */
  function selectLevel(level) {
    activeLevel = level;
  }
</script>

<div class="maturity-curve">
  <div class="maturity-visual">
    <div class="maturity-chart" aria-label="Circular economy maturity curve">
      <div class="maturity-axis" aria-hidden="true">
        <span>High maturity</span>
        <i></i>
        <span>Low maturity</span>
      </div>

      <svg viewBox="0 0 1000 430" role="img" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="maturity-area-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f3c200" />
            <stop offset="48%" stop-color="#d5d64b" />
            <stop offset="100%" stop-color="#7fc23a" />
          </linearGradient>
        </defs>
        <path
          d="M 0 382 C 62 320, 122 284, 180 260 C 235 242, 285 250, 340 245 C 420 238, 455 185, 520 175 C 610 162, 660 158, 720 145 C 790 132, 830 96, 900 82 C 935 75, 970 73, 1000 72 L 1000 430 L 0 430 Z"
          fill="url(#maturity-area-gradient)"
        />
        <path
          d="M 0 382 C 62 320, 122 284, 180 260 C 235 242, 285 250, 340 245 C 420 238, 455 185, 520 175 C 610 162, 660 158, 720 145 C 790 132, 830 96, 900 82 C 935 75, 970 73, 1000 72"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>

      {#each levels as level}
        <span class="maturity-label" style={`--level-x: ${level.x}%; --level-y: ${level.y}%;`}>
          {level.label}
        </span>
        <button
          type="button"
          class:active={activeLevel?.number === level.number}
          class="maturity-point"
          style={`--level-x: ${level.x}%; --level-y: ${level.y}%;`}
          aria-label={`Open ${level.label} maturity description`}
          aria-pressed={activeLevel?.number === level.number}
          on:click={() => selectLevel(level)}
        ></button>
      {/each}

      {#if activeLevel}
        <aside class="maturity-pop-up" aria-live="polite">
          <div>
            <p class="eyebrow">Level {activeLevel.number}</p>
            <h4>{activeLevel.label}</h4>
          </div>

          <p>{activeLevel.description}</p>

          <p class="maturity-recommendation">
            {#each activeLevel.recommendation as part}
              {#if part.href}
                <a href="{base}{part.href}">{part.text}</a>
              {:else}
                {part.text}
              {/if}
            {/each}
          </p>

          <button type="button" class="maturity-close" on:click={() => (activeLevel = null)}>Close</button>
        </aside>
      {/if}
    </div>
  </div>
</div>

<style>
  .maturity-curve {
    display: grid;
    margin-top: 42px;
  }

  .maturity-visual {
    max-width: 980px;
  }

  .maturity-axis {
    position: absolute;
    top: 24px;
    bottom: 18px;
    left: 16px;
    z-index: 2;
    display: grid;
    grid-template-rows: auto 1fr auto;
    justify-items: start;
    color: var(--dark);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
  }

  .maturity-axis i {
    position: relative;
    width: 1px;
    margin: 8px 0 8px 4px;
    background-color: rgba(10, 46, 54, 0.48);
  }

  .maturity-axis i::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    width: 0;
    height: 0;
    border-right: 4px solid transparent;
    border-bottom: 6px solid rgba(10, 46, 54, 0.48);
    border-left: 4px solid transparent;
    transform: translateX(-50%);
  }

  .maturity-chart {
    position: relative;
    width: 100%;
    max-width: 980px;
    aspect-ratio: 1000 / 430;
    color: var(--dark);
    background-color: var(--white);
    border-radius: 15px;
    overflow: hidden;
  }

  .maturity-chart svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .maturity-label {
    position: absolute;
    left: var(--level-x);
    top: calc(var(--level-y) - 58px);
    transform: translateX(-50%);
    color: var(--dark);
    font-size: clamp(0.78rem, 1.5vw, 1rem);
    font-weight: 700;
    white-space: nowrap;
  }

  .maturity-point {
    position: absolute;
    left: var(--level-x);
    top: var(--level-y);
    display: grid;
    place-items: center;
    width: clamp(18px, 3vw, 28px);
    aspect-ratio: 1;
    padding: 0;
    border: 3px solid currentColor;
    border-radius: 50%;
    color: var(--dark);
    cursor: pointer;
    transform: translate(-50%, -50%);
    box-shadow: none;
    background:
      radial-gradient(circle, var(--white) 0 calc(100% - 4px), transparent calc(100% - 3px));
    transition: background-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease;
  }

  .maturity-point:hover,
  .maturity-point:focus-visible {
    box-shadow: 0 0 0 7px rgba(210, 198, 63, 0.28), 0 12px 24px rgba(10, 46, 54, 0.2);
    transform: translate(-50%, -50%) scale(1.08);
  }

  .maturity-point.active {
    background: var(--green-secondary);
    border-color: var(--green-secondary);
    box-shadow: 0 0 0 9px rgba(74, 129, 58, 0.24), 0 12px 24px rgba(10, 46, 54, 0.2);
    transform: translate(-50%, -50%) scale(1.08);
  }

  .maturity-pop-up {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 3;
    display: grid;
    gap: 12px;
    width: min(420px, calc(100% - 48px));
    padding: 20px;
    border: 1px solid var(--soft-border);
    border-left: 8px solid var(--green-secondary);
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 0 18px 38px rgba(10, 46, 54, 0.14);
  }

  .maturity-pop-up h4 {
    margin-top: 4px;
    color: var(--dark);
    font-size: clamp(1.15rem, 2vw, 1.5rem);
    text-transform: uppercase;
  }

  .maturity-recommendation {
    color: var(--muted);
    font-weight: 700;
  }

  .maturity-recommendation a {
    color: var(--dark);
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  .maturity-close {
    width: fit-content;
    padding: var(--action-button-padding);
    border: 2px solid currentColor;
    border-radius: var(--action-button-radius);
    background-color: transparent;
    color: var(--dark);
    font-weight: 700;
    cursor: pointer;
  }

  .maturity-close:hover,
  .maturity-close:focus-visible {
    background-color: var(--dark);
    color: var(--white);
  }

  @media (max-width: 720px) {
    .maturity-visual {
      max-width: 100%;
    }

    .maturity-axis {
      top: 10px;
      bottom: 12px;
      left: 10px;
      font-size: 0.68rem;
    }

    .maturity-chart {
      max-width: 100%;
    }

    .maturity-label {
      top: calc(var(--level-y) - 38px);
      font-size: 0.78rem;
    }

    .maturity-pop-up {
      top: 10px;
      right: 10px;
      width: min(330px, calc(100% - 20px));
      padding: 16px;
    }
  }
</style>
