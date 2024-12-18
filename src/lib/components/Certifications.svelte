<script>
  import Residential from "../imgs/HCI_Residential_Logo.png";
  import Commercial from "../imgs/HCI_Commercial_Logo.png";

  let { size = 100 } = $props();
</script>

<section>
  <img
    width={size}
    src={Residential}
    alt="HAAG Residential certfication badge"
  />
  <img width={size} src={Commercial} alt="HAAG Commercial certfication badge" />
</section>

<style>
  section {
    display: flex;
    gap: 1rem;
  }
</style>
