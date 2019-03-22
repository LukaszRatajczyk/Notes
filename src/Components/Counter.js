import React from "react";
import "./App.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    //alert("kliknięto!");
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  }
  decrement() {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  }
  render() {
    return (
      <div className="card">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>plus</button>
        <button onClick={this.decrement}>minus</button>
      </div>
    );
  }
}

export default Counter;
