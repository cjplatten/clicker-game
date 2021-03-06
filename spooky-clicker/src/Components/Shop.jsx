import React from "react";

export default function Shop(props) {
  const { skeletonCost, grimReaperCost, gravestoneCost, spookyEnergy } = props;
  console.log(props);

  return (
    <section className="shop">
      <legend>spooky sundries</legend>
      <button
        className="spooky-shop-button-skeleton"
        onClick={() => props.handleSummon("skeletons")}
        disabled={skeletonCost > spookyEnergy}
      >
        đ summon skeleton (cost: {skeletonCost}) đ
      </button>
      <button
        className="spooky-shop-button-grimReapers"
        onClick={() => props.handleSummon("grimReapers")}
        disabled={grimReaperCost > spookyEnergy}
      >
        đ´ summon grim reaper (cost: {grimReaperCost}) đ´
      </button>
      <button
        className="spooky-shop-button-gravestones"
        onClick={() => props.handleSummon("gravestones")}
        disabled={gravestoneCost > spookyEnergy}
      >
        đĒĻ summon gravestones (cost: {gravestoneCost}) đĒĻ
      </button>
      <p className="description">(summons cost spooky energy)</p>
    </section>
  );
}
