import React from "react";
import "./App.css";
import Icon from "@material-ui/core/Icon";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      noteValue: ""
    };
  }
  componentDidMount() {
    this.setState({
      noteValue: this.props.text
    });
  }
  render() {
    const form = (
      <textarea
        rows="8"
        cols="40"
        value={this.state.noteValue}
        placeholder="Dodaj notatkę..."
      />
    );
    const cardText = (
      <div>
        <Icon
          onClick={() => {
            this.props.deleteNote(this.props.id);
          }}
        >
          delete
        </Icon>
        <p>{this.props.text}</p>
      </div>
    );

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

export default Card;
