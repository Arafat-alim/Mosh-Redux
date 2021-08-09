import reducer from "./reducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

let store = createStore(
  reducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //now we dont need
  devToolsEnhancer({ trace: true })
);

export default store;
