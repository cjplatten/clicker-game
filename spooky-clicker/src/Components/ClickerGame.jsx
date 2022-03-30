import React, { Component } from "react";
import GhostRegion from "./GhostRegion";
import Resources from "./Resources";

export default class ClickerGame extends Component {
  state = {
    ghosts: 0,
    spookyEnergy: 0,
  };

  increaseGhosts = (increase) => {
    this.changeSpookyEnergy(1);
    this.setState((currState) => {
      return { ghosts: currState.ghosts + increase };
    });
  };

  changeSpookyEnergy = (increase) => {
    console.log(increase);
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + increase };
    });
  };

  render() {
    const { ghosts, spookyEnergy } = this.state;

    return (
      <section className="Body">
        <GhostRegion
          ghosts={ghosts}
          increaseGhosts={this.increaseGhosts}
          changeSpookyEnergy={this.changeSpookyEnergy}
        />
        <Resources
          ghosts={ghosts}
          increaseGhosts={this.increaseGhosts}
          spookyEnergy={spookyEnergy}
          changeSpookyEnergy={this.changeSpookyEnergy}
        />
      </section>
    );
  }
}
