import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
    loginReducer,
    userReducer,
    tokenReducer,
})