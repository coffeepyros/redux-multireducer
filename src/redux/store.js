import { combineReducers, createStore } from "redux";
import { userReducer, bookReducer } from "./reducers";

const rootReducer = combineReducers({ user: userReducer, book: bookReducer });

export const store = createStore(rootReducer);

// store.subscribe();
