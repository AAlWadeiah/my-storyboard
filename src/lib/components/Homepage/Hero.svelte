<script>
  import PrimaryBtn from "../buttons/PrimaryBtn.svelte";
  import SecondaryBtn from "../buttons/SecondaryBtn.svelte";
  import Certifications from "../Certifications.svelte";
  let { image } = $props();
</script>

<section style="--hero-img: url({image})">
  <main>
    <h4>Your Best Local Roofing Services</h4>
    <h1>Quality Roofing Service in Town</h1>
    <div class="cta-group">
      <PrimaryBtn href="/free-estimate" text="Get a Free Estimate" />
      <SecondaryBtn href="/services" text="View Our Services" />
    </div>
  </main>
  <div class="certs">
    <Certifications size="128" />
  </div>
</section>

<style>
  section {
    width: calc(100vw);
    height: calc(100vh);
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-image: var(--hero-img);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80ch;
    padding-bottom: 14rem;
    margin-left: -6rem;
  }

  .certs {
    margin-bottom: 10rem;
  }

  h1 {
    font-size: 4rem;
  }

  .cta-group {
    padding: 1rem 0rem;
  }
</style>
