<script>
  import Hero from "$lib/components/Homepage/Hero.svelte";
  import Success from "$lib/components/Homepage/Success.svelte";
  import Services from "$lib/components/Homepage/Services.svelte";
  import UniqueSellingPoints from "$lib/components/Homepage/UniqueSellingPoints.svelte";
  import Reviews from "$lib/components/Homepage/Reviews.svelte";
  import Process from "$lib/components/Homepage/Process.svelte";
  import image from "$lib/imgs/hero.jpg";
</script>

<Hero {image} />

<Services />

<UniqueSellingPoints />

<Success />

<Reviews />

<Process />

<!-- TODO: Add Form for estimate with CTA -->
<!-- TODO: add more CTAs in all sections -->
