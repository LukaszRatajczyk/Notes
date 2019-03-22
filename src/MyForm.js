import React from "react";
import "./App.css";

class MyForm extends React.Component {
  constructor() {
    super();
    this.SaveText = this.SaveText.bind(this);
  }
  SaveText(e) {
    if (e.target.value) {
      this.props.addNote(e.target.value);
      e.target.value = "";
    }
  }
  render() {
    return (
      <div className="card">
        <textarea
          id="inputarea"
          name="name"
          rows="8"
          cols="40"
          placeholder="Dodaj notatkę..."
          onBlur={this.SaveText}
        />
      </div>
    );
  }
}

export default MyForm;
