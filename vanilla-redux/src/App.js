import React from 'react';
import { connect} from 'react-redux';
import { incrementAction, decrementAction } from './actions.js';

function App({counter, increment, decrement}) {
  return (
    <div className="App">
      <div>counter: {counter}</div>
      <div>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);