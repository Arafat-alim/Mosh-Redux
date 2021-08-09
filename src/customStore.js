import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  //subscribing
  function subscribe(listener) {
    listeners.push(listener);
  }
  //dispatching action
  function dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i](); //calling the listeners
    }
  }

  //private properties
  function getState() {
    //here we make this as a getter function
    return state;
  }
  return {
    subscribe,
    dispatch, //creating out dispatch
    getState, //state get private now
  };
}

export default createStore(reducer);
