import React from 'react';
import '../App.css';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() { this.setState({ count: this.state.count + 1 }); }
  decrement() { this.setState({ count: this.state.count - 1 }); }

  render() {
    return (
      <div className="counter">
        <div>CounterClass: {this.state.count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default CounterClass;
