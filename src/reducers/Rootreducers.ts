import { combineReducers } from "redux";
import userReducer from "./userReducer";

const Rootreducer = combineReducers({
  userReducer,
});

export default Rootreducer;
