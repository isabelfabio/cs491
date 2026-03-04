import React from 'react';
import '../App.css';

const HouseFunction = ({ houseName, children }) => (
  <div className="house">
    <h2>House: {houseName}</h2>  {/* Shows "House: Paradise" */}
    <div className="rooms">{children}</div>
  </div>
);


export default HouseFunction;
