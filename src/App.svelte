<script>
  // Easy build in animations
  import { fade, fly } from "svelte/transition";
  import { randomStore } from "./store.js";
  import Child from "./Child.svelte";

  let data = {
    userId: 123,
    name: "Dallin Parker",
    email: "dallin.parker@testing.com"
  };
  // name is coming from "main.js" props > name = 'world'
  export let name;

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

  // showing how to handling ASYNC
  function delay(ms) {
    console.log(`working: `);
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let randoDelay = delay(500).then(v => Math.random());
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

  .fourth {
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
      <strong>binding</strong>
    </h1>

    <br />

    <h1>
      Hello
      <span>{name ? name : ''}!</span>
    </h1>
    <p>the random number is</p>
    <h3>{rando ? rando : 0}</h3>

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

<br />
<hr />
<br />

<div class="second">
  <h1>
    This is the
    <strong>SECOND</strong>
    example
    <strong>loops</strong>
  </h1>
  <br />

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

<br />
<hr />
<br />

<div class="third">
  <h1>
    this is the
    <strong>THIRD</strong>
    example
    <strong>async/await</strong>
  </h1>

  {#await randoDelay}
    <h2>{'...loading'}</h2>
  {:then val}
    <h2>Result {val}</h2>
  {:catch error}
    <h4>You got an error {error.message}</h4>
  {/await}
</div>

<br />
<hr />
<br />

<div class="fourth">
  <h1>
    this is the
    <strong>FOURTH</strong>
    example
    <strong>global store</strong>
  </h1>

  <div class="wrap">
    <h2>
      first:
      <span class="first_name">{$randomStore.first}</span>
    </h2>
    <h2>
      <!-- by adding "$" in front of "randomStore" it now handles the subscribing and discarding of the store -->
      last:
      <span>{$randomStore.last}</span>
    </h2>
    <h2>
      age:
      <span class="age">{$randomStore.age}</span>
    </h2>

    <button
      on:click={() => randomStore.update(store => ({
          ...store,
          age: Math.round(Math.random() * 100)
        }))}>
      Random Age
    </button>
  </div>
</div>

<br />
<hr />
<br />

<div class="fifth">
  <h1>
    this is the
    <strong>FIFTH</strong>
    example
    <strong>child component passing props</strong>
  </h1>

  <Child {...data} />
</div>
