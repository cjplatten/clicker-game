import React, { Component } from "react";
import Shop from "./Shop";
import Skeletons from "./Skeletons";

export default class Resources extends Component {
  state = {
    skeletons: 0,
    skeletonCost: 50, 
    skeletonBoost: 2,
  };

  handleSummonSkeleton = () => {
    this.props.changeSpookyEnergy(-this.state.skeletonCost);
    this.setState(
      (currState) => {
        return {
          skeletons: currState.skeletons + 1,
          skeletonCost: Math.round(currState.skeletonCost *1.1),
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };


  passiveSpookyEnergy = () => {
    if (this.state.skeletons > 0) {
      this.props.changeSpookyEnergy(this.state.skeletonBoost * this.state.skeletons);
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.passiveSpookyEnergy(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ghosts < this.state.ghosts) {
      this.props.changeSpookyEnergy(1);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { skeletons, skeletonCost, skeletonBoost } = this.state;
    const { spookyEnergy } = this.props;

    return (
      <>
        <dl className="resources">
          <legend>spooky collections</legend>

          <dt>Spooky Energy: {Math.round(spookyEnergy)}</dt>
          <Skeletons skeletons={skeletons} skeletonBoost={skeletonBoost} />
        </dl>
        <Shop
          skeletonCost={skeletonCost}
          spookyEnergy={spookyEnergy}
          handleSummonSkeleton={this.handleSummonSkeleton}
        />
      </>
    );
  }
}
