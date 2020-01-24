import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';


function About() {
  return (
    <h1>This is About</h1>
  );
}

function Home() {
  return (
    <h1>This is Home</h1>
  );
}

function Dashboard() {
  return (
    <h1>This is Dash</h1>
  );
}


function App() {
  return (
    <div className="App">
      
      <div style={{display:'flex'}}>
        <sidebar>
          <Router>

            <nav>
              <Link to="/">Home</Link>&nbsp;|&nbsp;
              <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
              <Link to="/about">About</Link>
            </nav>

            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route> 
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </sidebar>
      </div>
    </div>
  );
}

export default App;
