import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';


function About() {
  return (
    <h2>This is About</h2>
  );
}

function Home() {
  return (
    <h2>This is Home</h2>
  );
}

function Dashboard() {
  return (
    <h2>This is Dash</h2>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <h3>Topic ID: {topicId}</h3>
  );
}

function Topics() {
  let match = useRouteMatch();
  return (
    <>
      <h2>This is Topics</h2>
      <ul>
        <li>
          <Link to={`${match.path}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.path}/prop-v-state`}>Prop vs State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Select a topic...</h3>
        </Route>
      </Switch>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <h1>APP 1</h1>
      
      <div style={{display:'flex'}}>
        <sidebar>
          <Router>

            <nav>
              <Link to="/">Home</Link>&nbsp;|&nbsp;
              <Link to="/dashboard">Dashboard</Link>&nbsp;|&nbsp;
              <Link to="/about">About</Link>&nbsp;|&nbsp;
              <Link to="/topics">Topics</Link>
            </nav>

            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route> 
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
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
