import { createStore } from "redux";
import Rootreducer from "./reducers/Rootreducers";
import { composeWithDevTools } from "redux-devtools-extension";

const Store = createStore(Rootreducer, composeWithDevTools());

export default Store;
