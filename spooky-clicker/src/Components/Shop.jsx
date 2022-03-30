import React from "react";

export default function Shop(props) {
  const { skeletonCost, grimReaperCost, gravestoneCost, spookyEnergy } = props;
  console.log(props);

  return (
    <section className="shop">
      <legend>spooky sundries</legend>
      <button
        className="spooky-shop-button-skeleton"
        onClick={()=>props.handleSummon('skeletons')}
        disabled={skeletonCost > spookyEnergy}
      >
        ☠️ summon skeleton (cost: {skeletonCost})
      </button>
      <button
        className="spooky-shop-button-grimReapers"
        onClick={()=>props.handleSummon('grimReapers')}
        disabled={grimReaperCost > spookyEnergy}
      >
        🕴 summon grim reaper (cost: {grimReaperCost})
      </button>
      <button
        className="spooky-shop-button-gravestones"
        onClick={()=>props.handleSummon('gravestones')}
        disabled={gravestoneCost > spookyEnergy}
      >
        🪦 summon gravestones (cost: {gravestoneCost})
      </button>
    </section>
  );
}
