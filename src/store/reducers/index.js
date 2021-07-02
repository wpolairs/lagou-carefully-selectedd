import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import signupReducer from "./signup";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    signup: signupReducer,
})
export default createRootReducer;