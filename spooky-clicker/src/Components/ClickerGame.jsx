import React, { Component } from "react";
import GhostRegion from "./GhostRegion";
import Resources from "./Resources";

export default class ClickerGame extends Component {
  state = {
    ghosts: 0,
    spookyEnergy:1000,
    ghostSpookyEnergyValue: 1,
  };

  increaseGhosts = (increase) => {
    this.changeSpookyEnergy(this.state.ghostSpookyEnergyValue);
    this.setState((currState) => {
      return { ghosts: currState.ghosts + increase };
    });
  };

  changeSpookyEnergy = (change) => {
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + change };
    });
  };

  changeGhostSpookyEnergyValue = (change) => {
    this.setState((currState) => {
      console.log(change)
      return { ghostSpookyEnergyValue: currState.ghostSpookyEnergyValue + change};
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
          changeGhostSpookyEnergyValue={this.changeGhostSpookyEnergyValue}
        />
      </section>
    );
  }
}
