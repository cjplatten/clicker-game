import React from "react";

export default function Shop(props) {
  const { skeletonCost, spookyEnergy } = props;

  return (
    <section className="shop">
      <legend>spooky sundries</legend>
      <button
        className="skeletons-button"
        onClick={props.handleSummonSkeleton}
        disabled={skeletonCost > spookyEnergy}
      >
        ☠️ summon skeleton (cost: {skeletonCost})
      </button>
    </section>
  );
}
