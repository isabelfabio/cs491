import React from 'react';
import '../App.css';

class House extends React.Component {
  render() {
    return (
      <div className="house">
        House: Paradise
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default House;