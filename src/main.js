import App from "./App.svelte";

// props.name is used in "App.svelte" when we say "export let name"
const app = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

export default app;
