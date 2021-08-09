import { bugAdded, bugResolved } from "./actionCreator";

import store from "./store";

let unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugResolved(1));

// unsubscribe(); // ye jaise add hoga waise subscribe track krna bandh kr dega

// store.dispatch({
//   type: actions.BUGS_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
