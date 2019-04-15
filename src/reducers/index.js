import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  mainReducer,
  chatReducer
});
