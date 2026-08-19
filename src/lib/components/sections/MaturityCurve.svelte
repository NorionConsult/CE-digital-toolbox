<script>
  import { base } from '$app/paths';
  import { tick } from 'svelte';

  /**
   * @typedef {{
   *   number: string;
   *   panelSide: 'left' | 'right';
   *   edgePhase: boolean;
   *   phaseName: string;
   *   formerLabel: string;
   *   shortDescription: string;
   *   popUpText: string;
   *   icon: string;
   *   iconAlt: string;
   *   href: string;
   * }} JourneyPhaseStep
   */

  /*
    Edit the phase labels, short descriptions and pop-up text for the
    interactive SME journey diagram here. The visual layout is handled below.
  */
  /** @type {JourneyPhaseStep[]} */
  const phases = [
    {
      number: '1',
      panelSide: 'left',
      edgePhase: true,
      phaseName: 'Learn',
      formerLabel: 'Start with the basics',
      shortDescription: 'Understand basic CE concepts',
      popUpText:
        'If you are new to circular economy and need a shared language and basic overview, then this phase is relevant for you. This phase introduces the core concepts of circular economy and resource-efficient cleaner production.',
      icon: '/phase-icons/icon-learn.png',
      iconAlt: 'Learn phase icon',
      href: '/journey-phases/learn/'
    },
    {
      number: '2',
      panelSide: 'left',
      edgePhase: false,
      phaseName: 'Assess',
      formerLabel: 'Find your starting point',
      shortDescription: 'Map and identify potential for improvement',
      popUpText:
        'If you already have some interest in circular economy or resource efficiency, but need a clearer picture of your resource flows and hotspots, then this phase is relevant for you. This phase helps you understand where your business stands today and identify gaps, priorities and areas where improvement is possible.',
      icon: '/phase-icons/icon-assess.png',
      iconAlt: 'Assess phase icon',
      href: '/journey-phases/assess/'
    },
    {
      number: '3',
      panelSide: 'left',
      edgePhase: false,
      phaseName: 'Explore',
      formerLabel: 'Explore practical options',
      shortDescription: 'Brainstorm and integrate circular design principles',
      popUpText:
        'If you know your main challenges and want to explore circular strategies, design principles and ideas that could fit your business context, then this phase is relevant for you. This phase helps you move from assessment to possible solutions, generate options and prepare a stronger basis for deciding what to take forward.',
      icon: '/phase-icons/icon-explore.png',
      iconAlt: 'Explore phase icon',
      href: '/journey-phases/explore/'
    },
    {
      number: '4',
      panelSide: 'right',
      edgePhase: false,
      phaseName: 'Validate',
      formerLabel: 'Validate what can work',
      shortDescription: 'Review circular business models and prioritize options',
      popUpText:
        'If you have identified possible circular options, but need to compare their feasibility, risks, barriers and potential value, then this phase is relevant for you. This phase helps you test whether your opportunities make sense strategically, operationally and financially before investing more time and resources.',
      icon: '/phase-icons/icon-validate.png',
      iconAlt: 'Validate phase icon',
      href: '/journey-phases/validate/'
    },
    {
      number: '5',
      panelSide: 'right',
      edgePhase: false,
      phaseName: 'Implement',
      formerLabel: 'Turn plans into action',
      shortDescription: 'Plan and realise your selected ideas',
      popUpText:
        'If you have prioritised a circular opportunity and now need to define responsibilities, partners, milestones and pilot activities, then this phase is relevant for you. This phase helps you turn selected strategies into concrete actions, test ideas in practice and build momentum through realistic implementation steps.',
      icon: '/phase-icons/icon-implement.png',
      iconAlt: 'Implement phase icon',
      href: '/journey-phases/implement/'
    },
    {
      number: '6',
      panelSide: 'right',
      edgePhase: true,
      phaseName: 'Monitor',
      formerLabel: 'Track and keep improving',
      shortDescription: 'Select indicators, review and track progress',
      popUpText:
        'If circular actions are being tested or already implemented, and you need simple indicators, data and feedback loops to understand what is working, then this phase is relevant for you. This phase helps you track results, improve over time and share your experience through the contact page to inspire others in the case collection.',
      icon: '/phase-icons/icon-monitor.png',
      iconAlt: 'Monitor phase icon',
      href: '/journey-phases/monitor/'
    }
  ];

  /** @type {JourneyPhaseStep | null} */
  let activePhase = phases[0];
  let hasSelectedPhase = false;

  /**
   * @param {JourneyPhaseStep} phase
   */
  async function selectPhase(phase) {
    activePhase = phase;
    hasSelectedPhase = true;

    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches) {
      await tick();
      document.querySelector('.maturity-pop-up')?.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      activePhase = null;
    }
  }

  /**
   * @param {EventTarget | null} target
   */
  function isLinkTarget(target) {
    return target instanceof Element && target.closest('a');
  }

  /**
   * @param {MouseEvent} event
   * @param {JourneyPhaseStep} phase
   */
  function selectPhaseFromText(event, phase) {
    if (isLinkTarget(event.target)) return;
    selectPhase(phase);
  }

  /**
   * @param {KeyboardEvent} event
   * @param {JourneyPhaseStep} phase
   */
  function selectPhaseFromTextKeydown(event, phase) {
    if (isLinkTarget(event.target)) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectPhase(phase);
    }
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

<div class="maturity-curve">
  <div class="maturity-visual">
    <div
      class:has-popup={activePhase !== null}
      class="maturity-chart"
      aria-label="Interactive SME journey phase diagram"
    >
      <div class="journey-steps">
        <div class="journey-line" aria-hidden="true"></div>

        {#each phases as phase}
          <article class:active-step={activePhase?.number === phase.number} class="journey-step">
            <button
              type="button"
              class:active={activePhase?.number === phase.number}
              class:pulse={phase.number === '1' && !hasSelectedPhase}
              class="maturity-point"
              aria-label={`Open ${phase.phaseName} phase description`}
              aria-pressed={activePhase?.number === phase.number}
              on:click={() => selectPhase(phase)}
            >
              <img src="{base}{phase.icon}" alt="" aria-hidden="true" />
            </button>

            <div
              class="journey-step-text"
              role="button"
              tabindex="0"
              aria-label={`Open ${phase.phaseName} phase description`}
              on:click={(event) => selectPhaseFromText(event, phase)}
              on:keydown={(event) => selectPhaseFromTextKeydown(event, phase)}
            >
              <p class="journey-step-number">Phase {phase.number}</p>
              <h4>
                <a href="{base}{phase.href}" on:click|stopPropagation>
                  {phase.phaseName}
                </a>
              </h4>
              <p>{phase.shortDescription}</p>
            </div>
          </article>
        {/each}
      </div>

      {#if activePhase}
        <aside
          class:edge-panel={activePhase.edgePhase}
          class={`maturity-pop-up panel-${activePhase.panelSide}`}
          aria-live="polite"
        >
          <div class="maturity-panel-card">
            <button
              type="button"
              class="maturity-close"
              aria-label="Close selected phase description"
              on:click={() => (activePhase = null)}
            >
              <span aria-hidden="true"></span>
            </button>

            <div class="maturity-panel-content">
              <h4>{activePhase.formerLabel}</h4>
              <p>{activePhase.popUpText}</p>
            </div>

            <div class="maturity-actions">
              <a href="{base}{activePhase.href}" class="maturity-go-link">
                View phase
                <span class="link-arrow" aria-hidden="true"></span>
              </a>
            </div>
          </div>
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
    max-width: 100%;
  }

  .maturity-chart {
    --journey-point-size: 64px;
    --journey-step-inset: 12px;

    position: relative;
    width: 100%;
    color: var(--dark);
    padding: 30px 24px 24px;
    border-radius: 15px;
  }

  .journey-line {
    position: absolute;
    top: calc(var(--journey-point-size) / 2);
    right: calc((100% / 6) - var(--journey-step-inset) - (var(--journey-point-size) / 2));
    left: calc(var(--journey-step-inset) + (var(--journey-point-size) / 2));
    height: 3px;
    border-radius: 999px;
    background-color: rgba(10, 46, 54, 0.78);
  }

  .journey-steps {
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0;
  }

  .journey-step {
    position: relative;
    display: grid;
    grid-template-rows: var(--journey-point-size) auto;
    justify-items: start;
    gap: 38px;
    min-width: 0;
    padding: 0 var(--journey-step-inset);
  }

  .maturity-point {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--journey-point-size);
    aspect-ratio: 1;
    padding: 0;
    border: 3px solid currentColor;
    border-radius: 50%;
    color: var(--dark);
    cursor: pointer;
    box-shadow: none;
    background-color: var(--white);
    overflow: hidden;
    transition:
      background-color 0.18s ease,
      box-shadow 0.18s ease,
      transform 0.18s ease,
      border-color 0.18s ease;
  }

  .maturity-point.pulse {
    animation: maturity-point-pulse 2.6s ease-in-out infinite;
  }

  .maturity-point img {
    width: 112%;
    height: 112%;
    object-fit: contain;
    pointer-events: none;
  }

  .maturity-point:hover,
  .maturity-point:focus-visible {
    animation: none;
    border-color: var(--button-highlight);
    box-shadow:
      0 0 0 7px color-mix(in srgb, var(--button-highlight) 32%, transparent),
      0 12px 24px rgba(10, 46, 54, 0.18);
    transform: scale(1.06);
  }

  .maturity-point.active {
    animation: none;
    background-color: var(--button-highlight);
    border-color: var(--button-highlight);
    box-shadow:
      0 0 0 9px color-mix(in srgb, var(--button-highlight) 28%, transparent),
      0 12px 24px rgba(10, 46, 54, 0.18);
    transform: scale(1.06);
  }

  .maturity-point.active.pulse {
    animation: maturity-point-pulse 2.6s ease-in-out infinite;
  }

  @keyframes maturity-point-pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 color-mix(in srgb, var(--button-highlight) 42%, transparent);
    }

    50% {
      box-shadow: 0 0 0 10px color-mix(in srgb, var(--button-highlight) 10%, transparent);
    }
  }

  .journey-step-text {
    display: grid;
    grid-template-rows: 18px 34px auto;
    align-content: start;
    gap: 4px;
    align-self: stretch;
    width: calc(100% + 24px);
    min-height: 172px;
    margin: -18px -12px 0;
    padding: 18px 18px 32px;
    border-radius: 12px 12px 0 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    transition:
      background-color 0.18s ease,
      color 0.18s ease;
  }

  .journey-step-text:hover,
  .journey-step-text:focus-visible {
    background-color: rgba(64, 171, 87, 0.08);
  }

  .journey-step.active-step {
    z-index: 2;
  }

  .journey-step.active-step .journey-step-text {
    background-color: rgba(64, 171, 87, 0.16);
  }

  .journey-step-text .journey-step-number {
    margin: 0 0 2px;
    color: rgba(64, 171, 87, 0.52);
    font-family: var(--font-display);
    font-size: clamp(0.72rem, 1vw, 0.9rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: 0;
  }

  .journey-step.active-step .journey-step-number {
    color: var(--green-secondary);
  }

  .journey-step-text h4 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(1.05rem, 1.9vw, 1.4rem);
    line-height: 1;
    align-self: start;
  }

  .journey-step-text h4 a {
    color: var(--blue);
    text-decoration: none;
    transition: color 0.18s ease;
  }

  .journey-step-text h4 a:hover,
  .journey-step-text h4 a:focus-visible {
    color: var(--blue);
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }

  .journey-step-text p {
    margin: 0;
    color: var(--dark);
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    align-self: start;
  }

  .maturity-pop-up {
    position: relative;
    z-index: 1;
    width: min(760px, 100%);
    margin-top: 0;
    padding: 16px;
    border: 0;
    border-radius: 15px;
    background-color: rgba(64, 171, 87, 0.16);
    box-shadow: none;
    scroll-margin-top: 140px;
  }

  .maturity-pop-up.panel-right {
    margin-left: auto;
  }

  .maturity-pop-up.panel-left {
    margin-right: auto;
  }

  .maturity-pop-up.panel-left.edge-panel {
    border-top-left-radius: 0;
  }

  .maturity-pop-up.panel-right.edge-panel {
    border-top-right-radius: 0;
  }

  .maturity-panel-card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: start;
    min-height: 160px;
    padding: 22px 68px 22px 24px;
    border-radius: 10px;
    background-color: var(--white);
  }

  .maturity-pop-up p {
    line-height: 1.45;
  }

  .maturity-pop-up h4 {
    margin-top: 4px;
    color: var(--dark);
    font-size: clamp(1.15rem, 2vw, 1.5rem);
  }

  .maturity-panel-content {
    display: grid;
    gap: 10px;
  }

  .maturity-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .maturity-go-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    width: fit-content;
    padding: 0 0 3px;
    border: 0;
    border-bottom: 2px solid currentColor;
    border-radius: 0;
    color: var(--dark);
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition:
      color 0.18s ease,
      opacity 0.18s ease;
  }

  .link-arrow {
    width: 0.95em;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: url("https://api.iconify.design/icon-park-outline:arrow-right.svg") center / contain no-repeat;
    mask: url("https://api.iconify.design/icon-park-outline:arrow-right.svg") center / contain no-repeat;
    transition: transform 0.18s ease;
  }

  .maturity-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    aspect-ratio: 1;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background-color: var(--white);
    color: var(--dark);
    cursor: pointer;
  }

  .maturity-close span {
    width: 24px;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: url("https://api.iconify.design/icon-park-outline:close-one.svg") center / contain no-repeat;
    mask: url("https://api.iconify.design/icon-park-outline:close-one.svg") center / contain no-repeat;
  }

  .maturity-close:hover,
  .maturity-close:focus-visible {
    background-color: var(--blue);
    color: var(--white);
  }

  .maturity-go-link:hover,
  .maturity-go-link:focus-visible {
    color: var(--green-secondary);
    opacity: 0.85;
  }

  .maturity-go-link:hover .link-arrow,
  .maturity-go-link:focus-visible .link-arrow {
    transform: translateX(3px);
  }

  @media (max-width: 900px) {
    .maturity-chart {
      min-height: 0;
    }

    .maturity-pop-up {
      margin-top: 28px;
      width: 100%;
      border-radius: 15px;
    }

    .maturity-pop-up.panel-right,
    .maturity-pop-up.panel-left {
      margin-right: 0;
      margin-left: 0;
      border-radius: 15px;
    }

    .maturity-pop-up.panel-left.edge-panel,
    .maturity-pop-up.panel-right.edge-panel {
      border-radius: 15px;
    }

    .maturity-panel-card {
      padding-right: 60px;
    }
  }

  @media (max-width: 640px) {
    .maturity-curve {
      margin-top: 28px;
    }

    .maturity-chart {
      --journey-point-size: 56px;

      padding: 20px 16px;
    }

    .journey-line {
      top: calc(var(--journey-point-size) / 2);
      bottom: calc(var(--journey-point-size) / 2);
      left: calc(var(--journey-point-size) / 2);
      width: 3px;
      height: auto;
      right: auto;
    }

    .journey-steps {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .journey-step {
      grid-template-columns: var(--journey-point-size) minmax(0, 1fr);
      grid-template-rows: auto;
      gap: 16px;
      align-items: center;
      justify-items: start;
      padding: 0;
    }

    .journey-step.active-step .journey-step-text {
      width: 100%;
      min-height: 0;
      margin: 0;
      padding: 0;
      background-color: transparent;
    }

    .maturity-point {
      justify-self: start;
    }

    .journey-step-text {
      grid-template-rows: none;
      width: 100%;
      min-height: 0;
      margin: 0;
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }

    .journey-step-text h4 {
      font-size: 1.25rem;
    }

    .journey-step-text p {
      font-size: 1rem;
    }

    .maturity-pop-up {
      max-height: min(420px, calc(100vh - 32px));
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 16px;
      border-radius: 15px;
    }

    .maturity-panel-card {
      border-radius: 10px;
      padding: 16px 52px 16px 16px;
    }
  }
</style>
