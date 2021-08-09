function createStore() {
  let state;

  function getState() {
    //here we make this a getter function
    return state;
  }
  return {
    getState, //state get private now
  };
}
export default createStore();
