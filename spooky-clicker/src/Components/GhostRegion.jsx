import React from "react";
import ghostButton from "../ghost-start.png";

export default function GhostRegion(props) {
  return (
    <section className="ghost-section">
      <p>Boo!</p>
      <button
        className="ghost-button"
        onClick={() => {
          props.increaseGhosts(1);
          props.increaseSpookyEnergy(1);
        }}
      >
        <img
          src={ghostButton}
          className="ghost-image"
          alt="ghost clicker button"
        />
      </button>
      <p>Ghosts: {props.ghosts}</p>
    </section>
  );
}
