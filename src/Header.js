import React from "react";
import "./App.css";

function Header() {
  const logostyle = {
    height: "16px",
    marginTop: "24px"
  };
  return (
    <div className="myheader">
      <img src="https://ahola.pl/style/ahola_wave_y.svg" style={logostyle} />
      <h2>Notes</h2>
    </div>
  );
}

export default Header;
