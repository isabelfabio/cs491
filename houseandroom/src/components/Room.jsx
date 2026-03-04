import React from 'react';
import CounterClass from './CounterClass.jsx';
import Counter1 from './Counter1.jsx';
import Counter2 from './Counter2.jsx';
import Counter3 from './Counter3.jsx';
import '../App.css';

const Room = ({ name, children }) => (
  <div className="room">
    <h3>My Room: {name}</h3>
    <CounterClass />
    <Counter1 />
    <Counter2 />
    <Counter3 />
    {children}
  </div>
);

export default Room;
