import { useState } from 'react';
import House from './components/House';
import Room from './components/Room';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
      <House houseName="Paradise"> 
        <Room name="Bedroom" />
        <Room name="Kitchen" />
  </House>

    </div>

  );

  
}

export default App;
