import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }
  const handleDecrement = () => {
    setCount(prev => prev - 1);
  }
  return (
    <div className="App">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
