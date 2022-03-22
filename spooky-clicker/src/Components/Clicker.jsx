import React, { Component } from "react";
import ghostButton from "../ghost.png";

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ghosts: 100,
      spookyEnergy: 1000,
      skeletons: 0,
      skeletonCost: 50,
      storedSkeletonEnergy: 0,
      skelemojis: " ",
    };
  }

  handleGhostClick = () => {
    this.setState((currState) => {
      return { ghosts: currState.ghosts + 1 };
    });
  };

  handleSummonSkeleton = () => {
    this.setState(
      (currState) => {
        return {
          skeletons: currState.skeletons + 1,
          skelemojis: currState.skelemojis + "☠️",
          skeletonCost: Math.round(currState.skeletonCost * 1.2), spookyEnergy: currState.spookyEnergy - currState.skeletonCost
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
      this.increaseSpookyEnergy(0.2 * this.state.skeletons);
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.passiveSpookyEnergy(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ghosts < this.state.ghosts) {
      this.increaseSpookyEnergy(1);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ghosts, skeletons, skeletonCost, spookyEnergy, skelemojis } = this.state;
    return (
      <>
        <p>Boo!</p>
        <button className="ghost-button" onClick={this.handleGhostClick}>
          <img src={ghostButton} className="App-logo" alt="ghost clicker" />
        </button>
        <p>Ghosts: {ghosts}</p>
        <p>{skelemojis}</p>
        <section className="resources">
          <legend>spooky collections</legend>
          <p>Spooky Energy: {Math.round(spookyEnergy)}</p>
          <p>
            Skeletons: {skeletons}
            <button
              className="summon-skeleton-button"
              onClick={this.handleSummonSkeleton} disabled={skeletonCost > spookyEnergy}
            >
              ☠️ summon skeleton (cost: {skeletonCost})
            </button>
          </p>
          <p>
            skeletons are increasing your spooky energy by{" "}
            {Math.round(0.2 * skeletons * 100) / 100} every second
          </p>
        </section>
      </>
    );
  }
}
