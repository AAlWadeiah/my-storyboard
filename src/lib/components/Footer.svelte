<script>
  import Instagram from "~icons/mdi/instagram";
  import Linkedin from "~icons/mdi/linkedin";
  import Youtube from "~icons/mdi/youtube";
  import Twitter from "~icons/mdi/twitter";

  import TertiaryBtn from "./buttons/TertiaryBtn.svelte";
  import Certifications from "./Certifications.svelte";
  import Logo from "./Logo.svelte";
</script>

<footer>
  <Logo />
  <div class="socials">
    <a href="/"><span class="icon"><Instagram /></span></a>
    <a href="/"><span class="icon"><Youtube /></span></a>
    <a href="/"><span class="icon"><Linkedin /></span></a>
    <a href="/"><span class="icon"><Twitter /></span></a>
  </div>
  <Certifications size="64" />
  <form action="">
    <p>Sign up to our roofing newsletter to stay up to date on industry news</p>
    <label> Email Address <input type="email" name="email" id="email" /></label>

    <TertiaryBtn text="Sign Up" />
  </form>
</footer>

<style>
  input[type="email"] {
    width: 30ch;
    font-size: 16px;
    background-color: #ffffff;
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    padding: 4px 8px;
    margin-top: 2px;
  }
</style>
