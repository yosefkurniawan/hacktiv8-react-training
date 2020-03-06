import React, { useState, setState } from 'react';
import List from "./list";
import Form from "./form";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  function handleAddMessage(newMessage) {
    setMessages([...messages,newMessage])
  }
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">List</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
            <Route path="/form">
              <Form handleAddMessage={handleAddMessage} />
            </Route>
            <Route exact path="/">
              <List messages={messages}/>
            </Route>
            <Route path="*">
              <div>
                404 - Page not found
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
