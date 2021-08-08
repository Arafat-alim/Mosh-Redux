import store from "./store";

let unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

unsubscribe(); // ye jaise add hoga waise subscribe track krna bandh kr dega

store.dispatch({
  type: "bugsRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState());
