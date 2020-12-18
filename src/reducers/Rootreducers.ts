import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const Rootreducer = combineReducers({
	userReducer,
	productReducer,
});

export default Rootreducer;
