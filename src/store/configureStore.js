import reducer from "./bugs";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function configureStore() {
  let store = createStore(
    reducer,
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //now we dont need
    devToolsEnhancer({ trace: true })
  );

  return store;
}
