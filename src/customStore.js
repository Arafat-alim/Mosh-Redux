import reducer from "./reducer";

function createStore(reducer) {
  let state;
  //dispatching action
  function dispatch(action) {
    state = reducer(state, action);
  }

  //private properties
  function getState() {
    //here we make this a getter function
    return state;
  }
  return {
    dispatch, //creating out dispatch
    getState, //state get private now
  };
}
export default createStore(reducer);
