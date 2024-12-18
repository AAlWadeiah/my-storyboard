<script>
  import Logo from "$lib/imgs/Logo.svg";
  import { page } from "$app/stores";

  let { addLink = false } = $props();
</script>

{#if addLink}
  <a href={$page.url.origin}>
    <img class="logo" src={Logo} alt="Quality Roofing logo" />
  </a>
{:else}
  <img class="logo" src={Logo} alt="Quality Roofing logo" />
{/if}
