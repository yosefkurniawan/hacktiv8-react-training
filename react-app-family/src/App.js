import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Yosef Kurniawan',
      role: 'child',
      active: true
    }
  }
  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
    );
  }
}

function Family() {
  return (
    <>
      <Person />
    </>
  )
}

function Person() {
  return (
    <>
      <MyContext.Consumer>
        {(context) => (
          <p>I'm {context.state.name} and I'm a {context.state.role}</p>
        )}
      </MyContext.Consumer>
    </>
  )
}

export default App;
