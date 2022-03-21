import React, { Component } from "react";
import ghostButton from "../ghost.png";

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { ghosts: 0, spookyEnergy: 0, skeletons: 0, skeletonCost: 100, storedSkeletonEnergy: 0, skelemojis: " " };
  }

  handleGhostClick = () => {
    this.setState((currState) => {
      return { ghosts: currState.ghosts + 1 };
    });
  };

  handleBuySkeleton = () => {
    this.setState((currState) => {
      return { skeletons: currState.skeletons + 1, skelemojis: currState.skelemojis + "☠️" }
    })
  }

  increaseSpookyEnergy = (increase) => {
    this.setState((currState) => {
      return { spookyEnergy: currState.spookyEnergy + increase };
    });
  };

  passiveSpookyEnergy = () => {
    if (this.state.skeletons > 0) {
        this.increaseSpookyEnergy( 0.2 * this.state.skeletons);
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
    const { ghosts, skeletons, spookyEnergy, skelemojis} = this.state
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
          <p>Skeletons: {skeletons} 
          <button className="buy-skeleton-button" onClick={this.handleBuySkeleton}>☠️ buy skeleton</button>
            </p>
            <p>skeletons increase spooky energy by {Math.round((0.2 * (skeletons + 1)) * 100) / 100} every second</p>
        </section>
      </>
    );
  }
}
