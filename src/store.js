import { writable } from "svelte/store";

export const randomStore = writable({
  first: "dallin",
  last: "parker",
  age: 26
});

//GET ACCESS TO CURRENT VALUE AND RETURN AN UPDATED
// randomStore.update(val => val + 1)

// SET THE VALUE ON THE STORE
// randomStore.set(22);

// Listen to the store
// randomStore.subscribe()
