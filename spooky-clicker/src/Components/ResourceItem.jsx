import React from "react";

export default function ResourceItem(props) {
  const { name, amount, boost, emoji, propertyBoosted } = props;

  return (
    <dt>
      {name}: {amount}
      {amount > 0 && (
        <p className="description">
          {propertyBoosted === "spookyEnergy" && (
            <>
            <br />
            {name} are increasing your spooky energy by {Math.round(boost * amount * 100) / 100} every second
            </>
            )}
            {propertyBoosted === "ghosts" && (
            <>
            <br />
            {name} are bringing you {Math.round(boost * amount * 100) / 100} ghost{amount > 1 && (<>s</>)} every second
            </>
            )}
             {propertyBoosted === "ghostWorth" && (
            <>
            <br />
            {name} are making your ghosts worth {Math.round(boost * amount * 100) / 100} spooky energy per ghost
            </>
            )}
            </p>
      )}
      {amount > 0 && (
        <p className="resources-icons">{(`${emoji} `).repeat(amount)}</p>
      )}
    </dt>
  );
}
