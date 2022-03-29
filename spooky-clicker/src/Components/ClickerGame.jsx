import React, { Component } from "react";
import GhostRegion from "./GhostRegion";
import Resources from "./Resources";

export default class ClickerGame extends Component {
  state = {
    ghosts: 50,
    spookyEnergy: 50,
  };

  increaseGhosts = (increase) => {
    this.setState((currState) => {
      return { ghosts: currState.ghosts + increase };
    });
  };

  changeSpookyEnergy = (increase) => {
    console.log(increase)
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + increase };
    });
  };

  render() {
    console.log("hi");
    const { ghosts, spookyEnergy } = this.state;
    return (
      <section className="Body">
        <GhostRegion
          ghosts={ghosts}
          increaseGhosts={this.increaseGhosts}
          changeSpookyEnergy={this.changeSpookyEnergy}
        />
        <Resources ghosts={ghosts} increaseGhosts={this.increaseGhosts} spookyEnergy={spookyEnergy} changeSpookyEnergy={this.changeSpookyEnergy}/>
      </section>
    );
  }
}
