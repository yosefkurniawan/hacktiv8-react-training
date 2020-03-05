import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './actions.js';

export default createReducer(0, {
    [increment]: (state) => state + 1,
    [decrement]: (state) => state - 1
});