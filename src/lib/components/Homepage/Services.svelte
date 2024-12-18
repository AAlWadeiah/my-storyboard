<script>
  import RoofRepairImg from "$lib/imgs/roof-repair-2.jpg";
  import RoofReplacementImg from "$lib/imgs/roof-replacement.jpg";
  import RoofInspectionImg from "$lib/imgs/roof-inspection.jpg";
  import EmergencyRoofingImg from "$lib/imgs/emergency-roofing.png";
</script>

<section>
  <h2>Our Services</h2>
  <div class="services">
    <a id="repair" href="/services" style="--repair-img: url({RoofRepairImg})">
      <span>Roof Repair</span>
    </a>
    <a
      id="replace"
      href="/services"
      style="--replace-img: url({RoofReplacementImg})"
    >
      <span>Roof Replacement</span>
    </a>
    <a
      id="inspect"
      href="/services"
      style="--inspect-img: url({RoofInspectionImg})"
    >
      <span>Roof Inspection</span>
    </a>
    <a
      id="emergency"
      href="/services"
      style="--emergency-img: url({EmergencyRoofingImg})"
    >
      <span>Emergency Roofing Services</span>
    </a>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  h2 {
    padding: var(--heading-padding);
    text-align: center;
    font-size: var(--heading-size);
  }

  .services {
    display: flex;
  }

  a {
    position: relative;
    flex: 1;
    min-height: 27rem;
    color: var(--bg-1);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ensures pseudo-element stays within bounds */
  }
  a > span {
    transition: transform 0.3s ease;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(60%);
    transition: filter 0.3s ease-in-out;
    z-index: -1; /* Keeps the background behind the text */
  }

  a:hover > span {
    color: var(--bg-1);
    transform: translateY(-40%);
  }

  a:hover::before {
    filter: brightness(50%);
  }

  #repair::before {
    background-image: var(--repair-img);
  }
  #replace::before {
    background-image: var(--replace-img);
  }
  #inspect::before {
    background-image: var(--inspect-img);
  }
  #emergency::before {
    background-image: var(--emergency-img);
  }
</style>
