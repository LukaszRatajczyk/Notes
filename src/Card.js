import React from "react";
import "./App.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        display: !props.text && "none"
      }}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
