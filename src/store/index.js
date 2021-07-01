import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from 'history';
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history), 
    applyMiddleware(routerMiddleware(history))
);

export default store;