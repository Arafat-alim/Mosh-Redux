//PART 1
// import { bugAdded, bugResolved } from "./actionCreator";

// import store from "./store";

// let unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(bugAdded("bug 1"));
// store.dispatch(bugResolved(1));

// // unsubscribe(); // ye jaise add hoga waise subscribe track krna bandh kr dega

// // store.dispatch({
// //   type: actions.BUGS_REMOVED,
// //   payload: {
// //     id: 1,
// //   },
// // });

// console.log(store.getState());

//PART 2

// import store from "./customStore"; //we dont wanna use this store now for debugging we need original store
import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";
const store = configureStore();
store.subscribe(() => {
  console.log("Store Changed");
});
// store.dispatch(actions.bugAdded("BUg 1"));
//! here we are calling our createAc
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "BUg 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

store.state = 1;
console.log(store.getState()); //read the property
