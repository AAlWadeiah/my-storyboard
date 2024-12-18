<script>
  let { href = "#", text = "Secondary Button" } = $props();
</script>

<a {href}>{text}</a>

<style>
  a {
    text-decoration: none;
    font-weight: 600;
    padding: var(--button-padding);
    border: 1px solid var(--link);
    border-radius: var(--border-radius);
    background-color: var(--bg-1);
    color: var(--link);
  }

  a:hover {
    background-color: var(--bg-2);
    color: var(--link-hover);
    border-color: var(--link-hover);
  }

  a:active {
    background-color: var(--bg-3);
    color: var(--link-active);
    border-color: var(--link-active);
  }
</style>
