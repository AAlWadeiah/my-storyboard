<script>
  let { href = "#", text = "Tertiary Button" } = $props();
</script>

<a {href}>{text}</a>

<style>
  a {
    text-decoration: none;
    font-weight: 600;
    padding: var(--button-padding);
    color: var(--link);
    background: none;
  }

  a:hover {
    color: var(--link-hover);
  }

  a:active {
    color: var(--link-active);
  }
</style>
