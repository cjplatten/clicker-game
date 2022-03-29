import React from "react";

export default function Skeletons(props) {
  const { skeletons, skeletonBoost } = props;

  return (
    <dt>
      Skeletons: {skeletons}
      {skeletons > 0 && (
        <p className="description">
          <br />
          skeletons are increasing your spooky energy by{" "}
          {Math.round(skeletonBoost * skeletons * 100) / 100} every second
        </p>
      )}
      {skeletons > 0 && (
        <p className="resources-icons">{"☠️ ".repeat(skeletons)}</p>
      )}
    </dt>
  );
}
