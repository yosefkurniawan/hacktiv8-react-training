import React from 'react';
import { createStore } from 'redux';

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}

// Store
const store = createStore(counterReducer);

// Actions
function incrementCounter() {
  return {
    type: 'INCREMENT'
  }
}
function decrementCounter() {
  return {
    type: 'DECREMENT'
  }
}

// Initial State
console.log(`Initial State: ${store.getState()}`);

// Subscriber
store.subscribe(function () {
  console.log(`Initial changed: ${store.getState()}`);
});

// Dispatching an action
store.dispatch(incrementCounter()); // 1
store.dispatch(incrementCounter()); // 2
store.dispatch(decrementCounter()); // 1
store.dispatch(incrementCounter()); // 3

function App() {
  return (
    <div className="App">
      See the console log for the testing...
    </div>
  );
}

export default App;