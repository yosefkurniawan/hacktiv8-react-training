import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers.js';
import reduxLogger from "redux-logger";

const store = configureStore({
    reducer: reducer,
    middleware: [reduxLogger]
});

export default store;