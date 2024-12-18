<script>
  import Logo from "$lib/components/Logo.svelte";
  import PrimaryBtn from "./buttons/PrimaryBtn.svelte";
  import TertiaryBtn from "./buttons/TertiaryBtn.svelte";

  let { links } = $props();
</script>

<nav>
  <Logo addLink="true" />
  <div class="nav-pages">
    {#each links as link}
      {#if link.isCta}
        <PrimaryBtn href={link.href} text={link.text} />
      {:else}
        <TertiaryBtn href={link.href} text={link.text} />
      {/if}
    {/each}
  </div>
</nav>

<style>
  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -4.5rem;
    z-index: 1;
    background: transparent;
    padding: 1rem;
  }

  .nav-pages {
    display: flex;
    align-items: center;
    gap: var(--component-spacing);
  }
</style>
