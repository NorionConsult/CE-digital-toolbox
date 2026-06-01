<script lang="ts">
  /*
    StardustCursor.svelte

    This component creates small pixel-like particles that follow the cursor.
    It is designed as a global visual effect, so it should be added once in +layout.svelte.

    The effect:
    - Tracks mouse movement
    - Creates small "stardust" particles near the cursor
    - Animates them outward and fades them away
    - Cleans up old particles automatically
  */

  import { onMount } from 'svelte';

  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    moveX: number;
    moveY: number;
    rotation: number;
  };

  let particles: Particle[] = [];
  let particleId = 0;
  let prefersReducedMotion = false;

  /*
    Create a new particle whenever the user moves the mouse.
  */
  function handleMouseMove(event: MouseEvent) {
    if (prefersReducedMotion) return;

    const newParticle = {
      id: particleId++,
      x: event.clientX,
      y: event.clientY,
      size: Math.random() * 7 + 5,
      moveX: (Math.random() - 0.5) * 70,
      moveY: (Math.random() - 0.5) * 70,
      rotation: Math.random() * 180
    };

    /*
      Keep the particle list relatively small for performance.
      This prevents too many elements from staying in the DOM.
    */
    particles = [...particles.slice(-55), newParticle];

    /*
      Remove the particle after the CSS animation has finished.
    */
    setTimeout(() => {
      particles = particles.filter((particle) => particle.id !== newParticle.id);
    }, 5000);
  }

  onMount(() => {
    /*
      Respect users who prefer reduced motion.
    */
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /*
      Listen for cursor movement across the whole window.
    */
    window.addEventListener('mousemove', handleMouseMove);

    /*
      Remove the listener when the component is destroyed.
      This avoids memory leaks.
    */
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<!--
  The container is fixed across the full viewport.
  pointer-events: none ensures it does not block clicks.
-->
<div class="stardust-layer" aria-hidden="true">
  {#each particles as particle (particle.id)}
    <span
      class="stardust-particle"
      style="
        left: {particle.x}px;
        top: {particle.y}px;
        width: {particle.size}px;
        height: {particle.size}px;
        --move-x: {particle.moveX}px;
        --move-y: {particle.moveY}px;
        --rotation: {particle.rotation}deg;
      "
    ></span>
  {/each}
</div>

<style>
  /*
    Full-screen invisible layer for the particles.
    It sits above the page visually but does not interfere with interaction.
  */
  .stardust-layer {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    overflow: hidden;
  }

  /*
    Individual particle styling.
    These are small square pixels, rather than circles.
  */
  .stardust-particle {
    position: absolute;
    display: block;
    background: rgba(255, 204, 0, 0.45);
    border-radius: 1px;
    transform: translate(-50%, -50%);
    animation: stardust-fade 3000ms ease-out forwards;
    box-shadow:
        0 0 4px (var(--yellow, rgba(255, 204, 0, 0.652))),
        0 0 10px (var(--yellow, rgba(255, 204, 0, 0.45)));
  }

  /*
    Animation:
    - Starts near the cursor
    - Moves slightly outward
    - Rotates
    - Fades out
  */
  @keyframes stardust-fade {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }

    100% {
      opacity: 0;
      transform:
        translate(
          calc(-50% + var(--move-x)),
          calc(-50% + var(--move-y))
        )
        scale(0)
        rotate(var(--rotation));
    }
  }

  /*
    Accessibility fallback.
    If the user has reduced motion enabled, the particles are hidden.
  */
  @media (prefers-reduced-motion: reduce) {
    .stardust-layer {
      display: none;
    }
  }
</style>