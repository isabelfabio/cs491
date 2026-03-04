import React, { useState } from 'react';
import '../App.css';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div>Counter1: {count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter1;
