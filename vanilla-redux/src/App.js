import React, { useState, useEffect } from 'react';
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


function App() {
  const [counter, setCounter] = useState(0);

  // Subscriber
  useEffect(() => {
    store.subscribe(function () {
      console.log(`Initial changed: ${store.getState()}`);
      setCounter(store.getState());
    });
  })

  return (
    <div className="App">
      <div>counter: {counter}</div>
      <div>
        <button 
          onClick={() => {
            store.dispatch({type:'INCREMENT'})
          }}
        >+</button>
        <button
          onClick={() => {
            store.dispatch({ type: 'DECREMENT' })
          }}
        >-</button>
      </div>
    </div>
  );
}

export default App;