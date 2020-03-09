import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers.js';
import reduxLogger from "redux-logger";

const customLoggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.time(action.type);
    console.log('The action: ', action);
    console.log('The new state: ', store.getState());
    console.timeEnd(action.type);
    console.groupEnd();

    next(action);
}

const store = configureStore({
    reducer: reducer,
    middleware: [reduxLogger, customLoggerMiddleware]
});

export default store;