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
      <h1>This is Topics</h1>
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
