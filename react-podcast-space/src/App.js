import React, { lazy, Suspense, useEffect } from 'react';
import DataProvider from '././data/dataProvider.js';
import { connect } from "react-redux";
import './App.css';
import { incrementAction, decrementAction, addPodcast } from './data/actions.js';

const Header = lazy(() => import('./components/page/header.js'));
const Content = lazy(() => import('./components/page/content.js'));

class App extends React.Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <DataProvider>
          <div className="side-project counter">
            <div>counter: {this.props.counter}</div>
            <button onClick={this.props.incrementAction}>+</button>
            <button onClick={this.props.decrementAction}>-</button>
          </div>
          <div className="header-wrapper">
            <Suspense fallback={<div className="spinner">Loading Header</div>}>
              <Header />
            </Suspense>
          </div>
          <div className="content-wrapper">
            <Suspense fallback={<div className="spinner">Loading Content</div>}>
              <Content />
            </Suspense>
          </div>
        </DataProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    podcasts: state.podcasts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementAction: () => dispatch(incrementAction()),
    decrementAction: () => dispatch(decrementAction()),
    addPodcast: () => dispatch(addPodcast())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
