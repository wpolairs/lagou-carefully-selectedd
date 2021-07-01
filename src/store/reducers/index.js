import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import testReducer from "./test";

const createRootReducer = (history) => combineReducers({
    test: testReducer,
    router: connectRouter(history)
})
export default createRootReducer;