import React from "react";
import "./App.css";
//import Loading from "./Components/Loading";

class Conditional extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }
  render() {
    return (
      <div className="card">
        {this.state.isLoading ? <h1>Loading...</h1> : <p>{this.props.note}</p>}
      </div>
    );
  }
}

export default Conditional;
