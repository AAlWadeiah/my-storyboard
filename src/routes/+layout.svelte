<script>
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import "../app.css";

  let { children } = $props();

  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about-us",
      text: "About Us",
    },
    {
      href: "/services",
      text: "Services",
    },
    {
      href: "/projects",
      text: "Projects",
    },
    {
      href: "/contact-us",
      text: "Contact Us",
    },
    {
      href: "/free-estimate",
      text: "Get a Free Estimate",
      isCta: true,
    },
  ];
</script>

<Nav {links} />

{@render children()}

<Footer />
