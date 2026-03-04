import React, { useState } from 'react';
import '../App.css';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div>Counter2: {count}</div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </div>
  );
};

export default Counter2;
