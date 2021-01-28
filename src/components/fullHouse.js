import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function FullHouse({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockFullHouse(false));
  });

  const lockFullHouse = (setLock) => {
    if (setLock && !locked && throwCount > 0) {
      setThrowCount(0);
      setLocked(true);
      setStatus("categoryLocked");
    }
    if (locked || throwCount === 0) return points;

    let newPoints = 0;
    let sortedDices = [];
    for (let i = 0; i < dices.length; i++) {
      sortedDices[i] = dices[i].value;
    }
    sortedDices.sort();

    if (
      sortedDices[0] === sortedDices[4] ||
      sortedDices[0] === sortedDices[3]
    ) {
      newPoints = 0;
    } else if (
      (sortedDices[0] === sortedDices[1] &&
        sortedDices[0] == sortedDices[2] &&
        sortedDices[3] == sortedDices[4]) ||
      (sortedDices[0] === sortedDices[1] &&
        sortedDices[2] === sortedDices[3] &&
        sortedDices[2] === sortedDices[4])
    ) {
      newPoints += sortedDices.reduce(function (a, b) {
        return a + b;
      }, 0);
    } else {
      newPoints = 0;
    }

    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Full house</div>
      <div className="categoryCentered">
        <button
          className={status}
          onClick={() => {
            setPoints(lockFullHouse(true));
            pointArray[13] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
