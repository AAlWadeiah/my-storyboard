<script>
  let { href = "#", text = "Primary Button" } = $props();
</script>

<a {href}>{text}</a>

<style>
  a {
    text-decoration: none;
    font-weight: 600;
    padding: var(--button-padding);
    border: 1px solid var(--link);
    border-radius: var(--border-radius);
    background-color: var(--link);
    color: var(--bg-1);
  }

  a:hover {
    background-color: var(--link-hover);
    color: var(--bg-2);
    border-color: var(--link-hover);
  }

  a:active {
    background-color: var(--link-active);
    color: var(--bg-3);
    border-color: var(--link-active);
  }
</style>
