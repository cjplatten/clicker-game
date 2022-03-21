import React, { Component } from "react";
import ghostButton from "../ghost.png";

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { ghosts: 0, spookyEnergy: 0 };
  }

  handleGhostClick = () => {
    this.setState((currState) => {
      return { ghosts: currState.ghosts + 1 };
    });
  };

  increaseSpookyEnergy = () => {
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ghosts < this.state.ghosts) {
        this.increaseSpookyEnergy()
    }
  }

  render() {
    return (
      <>
        <button className="ghost-button" onClick={this.handleGhostClick}>
          <img src={ghostButton} className="App-logo" alt="ghost clicker" />
        </button>
        <p>Boo!</p>
        <p>Ghosts: {this.state.ghosts}</p>
        <section className="resources">
          <legend>spooky collections</legend>
          <p>Spooky Energy: {this.state.spookyEnergy}</p>
        </section>
      </>
    );
  }
}
