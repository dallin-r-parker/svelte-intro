<script>
  import { fade, fly } from "svelte/transition";

  let name;

  let rando;
  let randos = [];

  // $: result = Math.round(rando * 100);

  function setRando() {
    rando = Math.random() * Math.random();
    console.log(`rando: `, rando);
    randos = [...randos, rando];
  }

  function clear() {
    name = "";
  }

  console.log(`randos: `, randos);
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    color: purple;
  }

  button {
    width: 100px;
  }
</style>

<div>
  <h1>Hello {name ? name : ''}!</h1>
  <input bind:value={name} on:blur={clear} />
  <button on:click={setRando}>PUSH</button>

  <div>
    <ul>
      {#each randos as val, idx}
        <li>{Math.round(val * 100)}</li>
      {/each}
    </ul>
  </div>
</div>

<!-- <div>
  <h1>Hello {name}!</h1>
  <p>the random number is</p>
  <h3>{rando}</h3>

  <hr />

  <button on:click={setRando}>Randomize</button>
  <p>Your Score is {result ? result : 0}</p>

  {#if result > 75}
    <p transition:fade>Big winner! Top 25% 🎉🎉🎉</p>
  {:else if result > 50}
    <p>Decent, top 50% 😐</p>
  {:else}
    <p in:fly={{ y: 1000, duration: 500 }} out:fly={{ y: -500, duration: 500 }}>
      Loser 💩💩💩
    </p>
  {/if}
</div> -->
