import React, {useState} from 'react';
import Button from './components/Button.js'
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  function increment(num) {
    setCounter(counter + num);
  }
  return (
    <div className="App">
      <h1>React Counter</h1>
      
      Counter:
      <span className="counter">
        {counter}
      </span>
      <br />
      <br />
      <Button increment={1} handleIncrement={increment} />
      <Button increment={10} handleIncrement={increment} />
      <Button increment={100} handleIncrement={increment} />
      
    </div>
  );
}

export default App;
