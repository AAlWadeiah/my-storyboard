<script>
  import Prize from "~icons/mdi/prize";
  import StarAward from "~icons/material-symbols/award-star-rounded";
  import Seal from "~icons/mdi/seal-variant";
  import Certificate from "~icons/mdi/certificate";
  import TimerCheck from "~icons/mdi/timer-check";
  import TargetPerson from "~icons/mdi/target-account";
  import PersonStar from "~icons/mdi/account-star";
  import Diamond from "~icons/mdi/diamond-stone";

  let iconStyle = "font-size: 2rem; color: var(--link)";
</script>

<section>
  <h2>Why Choose Us</h2>
  <div id="usps">
    <div>
      <div class="icon">
        <StarAward style={iconStyle} />
      </div>
      <div class="content">
        <h4>20 Years of Industry Experience</h4>
        <p>
          Trusted expertise built on two decades of delivering exceptional
          roofing solutions.
        </p>
      </div>
    </div>
    <div>
      <div class="icon">
        <Certificate style={iconStyle} />
      </div>
      <div class="content">
        <h4>HAAG Certified</h4>
        <p>
          Expert inspections and assessments backed by HAAG certification
          standards.
        </p>
      </div>
    </div>
    <div>
      <div class="icon">
        <Seal style={iconStyle} />
      </div>
      <div class="content">
        <h4>Red Seal Roofing Technicians</h4>
        <p>
          Skilled professionals with nationally recognized Red Seal
          certification.
        </p>
      </div>
    </div>
    <div>
      <div class="icon">
        <TimerCheck style={iconStyle} />
      </div>
      <div class="content">
        <h4>Fast and Reliable Service</h4>
        <p>
          Prompt and dependable roofing services tailored to meet your
          timelines.
        </p>
      </div>
    </div>
    <div>
      <div class="icon">
        <PersonStar style={iconStyle} />
      </div>
      <div class="content">
        <h4>Customer-Centric Approach</h4>
        <p>
          Your satisfaction is our priority, ensuring every project meets your
          unique needs.
        </p>
      </div>
    </div>
    <div>
      <div class="icon">
        <Diamond style={iconStyle} />
      </div>
      <div class="content">
        <h4>Premium Quality Products</h4>
        <p>
          Only the best materials for durable, long-lasting, and
          weather-resistant roofs.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: var(--heading-size);
    padding: var(--heading-padding);
  }

  #usps {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    gap: var(--component-spacing);
  }
  #usps > div {
    width: 17rem;
    height: 17rem;
    background-color: var(--bg-1);
    border-radius: var(--border-radius);
    box-shadow: 0 5px 5px var(--bg-3);

    padding: var(--component-spacing);
    display: flex;
    flex-direction: column;
  }
  .icon {
    padding-bottom: 2rem;
  }
  .content {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
</style>
