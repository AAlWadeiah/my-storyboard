<script>
  import { onMount } from "svelte";
  import { apiData, users } from "$lib/data/store";

  onMount(async () => {
    fetch("https://randomuser.me/api/?format=json&results=3&inc=name,picture")
      .then((response) => response.json())
      .then((data) => apiData.set(data))
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<section>
  {#each $users as user}
    <article>
      <div class="header">
        <div class="pic">
          <img src={user.picture.thumbnail} alt="Reviewer" />
        </div>
        <div class="details">
          <div class="name">{user.name.first} {user.name.last}</div>
          <div class="rating">{@html "&starf;".repeat(5)}</div>
          <div class="when">2 months ago</div>
        </div>
      </div>
      <blockquote>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem
        cumque facere obcaecati. Atque laborum saepe voluptates! Enim maiores
        omnis deleniti ea. Adipisci corporis amet reprehenderit eaque ipsa
        repudiandae pariatur.
      </blockquote>
    </article>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    gap: var(--component-spacing);
  }

  article {
    background-color: var(--bg-1);
    border-radius: var(--border-radius);
    box-shadow: 0 5px 5px var(--bg-3);
    width: 24rem;
    height: 17rem;
    padding: var(--component-spacing);
    display: flex;
    flex-direction: column;
    gap: var(--component-spacing);
  }

  .header {
    display: flex;
    gap: var(--component-spacing);
  }

  .pic > img {
    border: solid 2px var(--bg-2);
    border-radius: 50%;
  }

  .details {
    display: grid;
    gap: 3px;
  }
  .rating {
    color: orange;
  }

  .when {
    font-size: 0.85rem;
    color: var(--bg-3);
  }

  blockquote {
    line-height: 3ch;
  }
</style>
