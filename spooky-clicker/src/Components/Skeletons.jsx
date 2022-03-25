import React, { Component } from 'react'

export default class Skeletons extends Component {
constructor(props) {
  super(props)

  this.state = {
     skeletonBoost: 0
  }
}

    handleSummonSkeletonClick = () => {
        this.props.handleSummonSkeleton()
      };

  render() {
      const { skeletonCost, skeletons, spookyEnergy } = this.props
    return (
        <p>
        Skeletons: {skeletons}
        <button
          className="skeletons-button"
          onClick={this.handleSummonSkeletonClick} disabled={skeletonCost > spookyEnergy}
        >
          ☠️ summon skeleton (cost: {skeletonCost})
        </button>
        { skeletons > 0 && <p>
            skeletons are increasing your spooky energy by{" "}
            {Math.round(1 * skeletons * 100) / 100} every second
          </p> }
      </p>
    )
  }
}
