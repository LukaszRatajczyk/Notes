import React from "react";
import "./App.css";
import Card from "./Card";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      noteValue: ""
    };
    this.SaveText = this.SaveText.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
  }

  SaveText(e) {
    if (this.state.noteValue) {
      this.props.addNote(this.state.noteValue);
      this.setState({ noteValue: "" });
    }
  }
  HandleChange(e) {
    const textareaValue = e.target.value;
    this.setState({
      noteValue: textareaValue
    });
  }
  render() {
    return (
      <div className="card">
        <textarea
          autoFocus="true"
          rows="8"
          cols="40"
          value={this.state.noteValue}
          placeholder="Dodaj notatkę..."
          onBlur={this.SaveText}
          onChange={this.HandleChange}
        />
      </div>
    );
  }
}

export default MyForm;
