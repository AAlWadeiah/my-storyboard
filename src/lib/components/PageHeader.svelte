<script>
  let { image, title, description } = $props();
</script>

<!-- TODO: create layout for page header with image in background (similar to Hero), bold page title, and subtext below title -->

<section style="--image: url({image})">
  <h1>{title}</h1>
  <p>{description}</p>
</section>

<style>
  section {
    position: relative;
    width: calc(100vw - 1rem);
    height: calc(100vh);
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-image: var(--image);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
  }
</style>
