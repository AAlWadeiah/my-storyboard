<script>
  import { onMount } from "svelte";

  let counters = $state([
    { target: 1350, value: 0, visible: false },
    { target: 1540, value: 0, visible: false },
    { target: 1100, value: 0, visible: false },
    { target: 350, value: 0, visible: false },
  ]);

  function animateCounter(counter, duration = 2000) {
    let startTime;

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        counter.value = Math.min(progress * counter.target, counter.target);
        requestAnimationFrame(update);
      } else {
        counter.value = counter.target; // Ensure final value is exact
      }
    }

    requestAnimationFrame(update);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = +entry.target.dataset.index;
            if (!counters[index].visible) {
              counters[index].visible = true;
              animateCounter(counters[index], 3000);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe all h4 elements for the counters
    document.querySelectorAll("section article h4").forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });
  });
</script>

<section>
  {#each counters as counter, index}
    <article>
      <h4 class={counter.visible ? "visible" : ""}>
        {counter.value.toFixed(counter.target % 1 === 0 ? 0 : 1)}
      </h4>
      <p>
        {#if index === 0}Commercial Projects{/if}
        {#if index === 1}Residential Projects{/if}
        {#if index === 2}Happy Customers{/if}
        {#if index === 3}Perfect Reviews{/if}
      </p>
    </article>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    text-align: center;
    padding: var(--heading-padding);
  }
  article {
    flex: 1;
  }
  h4 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  h4.visible {
    opacity: 1;
  }
</style>
