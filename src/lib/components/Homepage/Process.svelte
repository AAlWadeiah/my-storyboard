<script>
  import PrimaryBtn from "../buttons/PrimaryBtn.svelte";
</script>

<h2>How It Works</h2>
<section>
  <div class="content">
    <p>
      At Quality Roofing, we streamline our services to ensure a smooth and
      efficient experience for our clients. Our process includes a free
      consultation, thorough assessment, customized plan and quote, professional
      implementation, and comprehensive post-service support
    </p>
    <PrimaryBtn href="/free-estimate" text="Get a Free Estimate" />
  </div>
  <article>
    <div class="step">
      <div class="number">1.</div>
      <div class="step-info">
        <h3>Consultation</h3>
        <p>Schedule a free consultation to discuss your roofing needs.</p>
      </div>
    </div>
    <div class="step">
      <div class="number">2.</div>
      <div class="step-info">
        <h3>Assessment</h3>
        <p>We conduct a thorough assessment of your roof.</p>
      </div>
    </div>
    <div class="step">
      <div class="number">3.</div>
      <div class="step-info">
        <h3>Proposal</h3>
        <p>
          Receive a detailed proposal with a clear breakdown of costs and
          timelines.
        </p>
      </div>
    </div>
    <div class="step">
      <div class="number">4.</div>
      <div class="step-info">
        <h3>Execution</h3>
        <p>Our team of experts carries out the work with precision and care.</p>
      </div>
    </div>
    <div class="step">
      <div class="number">5.</div>
      <div class="step-info">
        <h3>Final Inspection</h3>
        <p>We ensure your complete satisfaction with a final walkthrough.</p>
      </div>
    </div>
  </article>
</section>

<style>
  h2 {
    padding: var(--heading-padding);
    text-align: center;
    font-size: var(--heading-size);
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--component-spacing);
    margin: 1rem 10rem;
    background-color: var(--bg-1);
    border-radius: var(--border-radius);
    box-shadow: 0 5px 5px var(--bg-3);
    padding: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-items: left;
    align-items: start;
    padding: 0 6rem 0 0;
  }
  article {
    display: flex;
    flex-direction: column;
    gap: var(--component-spacing);
  }
  .step {
    display: flex;
    gap: var(--component-spacing);
    align-items: center;
  }

  .number {
    font-size: 4rem;
    font-weight: 600;
    color: var(--link-light);
  }

  .step-info {
    display: flex;
    flex-direction: column;
    gap: var(--component-spacing);
  }

  .step-info > p {
    font-size: 0.85rem;
  }
</style>
