import logo from "../ghost.png";
import React from "react";

const Clicker = ({ ghosts }) => {
  return (
    <button className="ghost-button" onClick={ghosts + 1}>
      <img src={logo} className="App-logo" alt="ghost clicker" />
    </button>
  );
};

export default Clicker;
