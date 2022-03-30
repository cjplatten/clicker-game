import React, { Component } from "react";
import Shop from "./Shop";
import ResourceItem from "./ResourceItem";

export default class Resources extends Component {
  state = {
    skeletons: {
      name: "Skeletons",
      emoji: "💀",
      amount: 10,
      cost: 50,
      boost: 2,
      propertyBoosted: "spookyEnergy",
    },
    grimReapers: {
      name: "Grim Reapers",
      emoji: "🕴",
      amount: 1,
      cost: 50,
      boost: 1,
      propertyBoosted: "ghosts",
    },
    gravestones: {
      name: "Gravestones",
      emoji: "🪦",
      amount: 10,
      cost: 50,
      boost: 2,
      propertyBoosted: "ghostWorth",
    },
  };

  handleSummon = (summonName) => {
    if(summonName){

    this.props.changeSpookyEnergy(-this.state[summonName].cost);
    console.log(summonName);
    this.setState(
      (currState) => {
        return {
          [summonName]: {...currState[summonName], amount: currState[summonName].amount + 1, cost: Math.round(currState[summonName].cost * 1.1)}
        };
      }
    );
  }
};

  passiveSpookyEnergy = () => {
    if (this.state.skeletons.amount > 0) {
      this.props.changeSpookyEnergy(
        this.state.skeletons.boost * this.state.skeletons.amount
      );
    }
  };

  passiveGhosts = () => {
    if (this.state.grimReapers.amount > 0) {
      this.props.increaseGhosts(
        this.state.grimReapers.boost * this.state.grimReapers.amount
      );
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.passiveSpookyEnergy(), 1000);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.ghosts < this.state.ghosts) {
  //     this.props.changeSpookyEnergy(1);
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { skeletons, grimReapers, gravestones } = this.state;
    const { spookyEnergy } = this.props;
    console.log(spookyEnergy);

    return (
      <>
        <dl className="resources">
          <legend>spooky collections</legend>

          <dt>Spooky Energy: {Math.round(spookyEnergy)}</dt>
          <ResourceItem {...skeletons} />
          <ResourceItem {...grimReapers} />
          <ResourceItem {...gravestones} />
        </dl>
        <Shop
          spookyEnergy={spookyEnergy}
          skeletonCost={skeletons.cost}
          grimReaperCost={grimReapers.cost}
          gravestoneCost={gravestones.cost}
          handleSummon={this.handleSummon}
        />
      </>
    );
  }
}
