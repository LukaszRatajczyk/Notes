import React from "react";
import "./App.css";
import Icon from "@material-ui/core/Icon";
import MyForm from "./MyForm";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      noteValue: "",
      editable: false,
      index: null
    };
    this.setEditable = this.setEditable.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.SaveText = this.SaveText.bind(this);
  }
  componentDidMount() {
    this.setState({
      noteValue: this.props.text,
      index: this.props.index
    });
  }

  setEditable(value) {
    this.setState({
      editable: value
    });
    if (value) {
      this.setState({
        noteValue: this.props.text
      });
    }
  }
  HandleChange(e) {
    const textareaValue = e.target.value;
    this.setState({
      noteValue: textareaValue
    });
  }
  SaveText(e) {
    this.setEditable(false);

    if (this.state.noteValue) {
      this.props.deleteNote(this.state.index);
      this.props.addNote(this.state.noteValue);
    } else {
      this.props.deleteNote(this.state.index);
    }
  }

  render() {
    const form = (
      <textarea
        rows="8"
        cols="40"
        autoFocus="true"
        value={this.state.noteValue}
        placeholder="Dodaj notatkę..."
        onBlur={this.SaveText}
        onChange={this.HandleChange}
      />
    );
    const cardText = (
      <div>
        <Icon
          onClick={() => {
            this.props.deleteNote(this.state.index);
          }}
        >
          delete
        </Icon>
        <p
          onClick={() => {
            this.setEditable(true);
          }}
        >
          {this.props.text}
        </p>
      </div>
    );
    if (this.state.editable) {
      return (
        <div
          className="card"
          style={{
            display: !this.props.text && "none"
          }}
        >
          {form}
        </div>
      );
    } else {
      return (
        <div
          className="card"
          style={{
            display: !this.props.text && "none"
          }}
        >
          {cardText}
        </div>
      );
    }
  }
}

export default Card;
