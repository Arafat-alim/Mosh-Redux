import store from "./store";
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: "bugsRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState());
