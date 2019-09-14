<script>
  // Easy build in animations
  import { fade, fly } from "svelte/transition";

  let name;

  let rando;
  let randos = [];

  // sets variable to be one that is updated reactively
  $: result = Math.round(rando * 100);

  function setRando() {
    rando = Math.random() * Math.random();

    randos = [...randos, rando];
  }

  function clear() {
    name = "";
  }
</script>

<style>
  .first {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .second {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 0 50px 50px;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: rgb(0, 30, 128);
  }

  h1 > span {
    color: greenyellow;
  }

  strong {
    color: red;
  }

  button {
    width: 100px;
  }

  input {
    width: 30%;
  }
</style>

<div class="first">
  <div>
    <h1>
      This is the
      <strong>FIRST</strong>
      example
    </h1>

    <h1>
      Hello
      <span>{name ? name : ''}!</span>
    </h1>
    <p>the random number is</p>
    <h3>{rando}</h3>

    <button on:click={setRando}>Randomize</button>
    <p>Your Score is {result ? result : 0}</p>

    {#if result > 75}
      <p transition:fade>Big winner! Top 25% 🎉🎉🎉</p>
    {:else if result > 50}
      <p>Decent, top 50% 😐</p>
    {:else}
      <p
        in:fly={{ y: 1000, duration: 500 }}
        out:fly={{ y: -500, duration: 500 }}>
        Loser 💩💩💩
      </p>
    {/if}
  </div>
</div>

<hr />

<div class="second">
  <h1>
    This is the
    <strong>SECOND</strong>
    example
  </h1>

  <h1>
    Hello
    <span>{name ? name : '!'}</span>
  </h1>
  <!-- showing how to add event handlers on HTML Elements -->
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
