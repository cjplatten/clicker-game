import React, { Component } from "react";
import GhostRegion from "./GhostRegion";
import Skeletons from "./Skeletons";

export default class Clicker extends Component {
  state = {
    ghosts: 0,
    spookyEnergy: 0,
    skeletons: 0,
    skeletonCost: 50,
  };

  increaseGhosts = (increase) => {
    this.setState((currState) => {
      return { ghosts: currState.ghosts + increase };
    });
  };

  handleSummonSkeleton = () => {
    this.setState(
      (currState) => {
        return {
          skeletons: currState.skeletons + 1,
          skeletonCost: Math.round(currState.skeletonCost * 1.2),
          spookyEnergy: currState.spookyEnergy - currState.skeletonCost,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  increaseSpookyEnergy = (increase) => {
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + increase };
    });
  };

  passiveSpookyEnergy = () => {
    if (this.state.skeletons > 0) {
      this.increaseSpookyEnergy(1 * this.state.skeletons);
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.passiveSpookyEnergy(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log("hi");
    const { ghosts, skeletons, skeletonCost, spookyEnergy } = this.state;
    return (
      <section className="Body">
        <GhostRegion
          ghosts={ghosts}
          increaseGhosts={this.increaseGhosts}
          increaseSpookyEnergy={this.increaseSpookyEnergy}
        />
        <p>{"☠️".repeat(skeletons)}</p>
        <section className="resources">
          <legend>spooky collections</legend>

          <p>Spooky Energy: {Math.round(spookyEnergy)}</p>
          <Skeletons
            skeletons={skeletons}
            skeletonCost={skeletonCost}
            spookyEnergy={spookyEnergy}
            handleSummonSkeleton={this.handleSummonSkeleton}
          />
        </section>
      </section>
    );
  }
}

