import React from "react";

export default function GhostRegion(props) {
  return (
    <section className="ghost-section">
      <p>Boo!</p>
      <span className="ghost-button-span">
        <button
          className="ghost-button"
          onClick={() => {
            props.increaseGhosts(1);
            props.changeSpookyEnergy(1);
          }}
          aria-labelledby="ghost clicker button"
        >
          ghost button
        </button>
      </span>
      <p>Ghosts: {props.ghosts}</p>
    </section>
  );
}
