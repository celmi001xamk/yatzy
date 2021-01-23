import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function TwoPairs({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockTwoPairs(false));
  });

  const lockTwoPairs = (setLock) => {
    if (setLock && !locked && throwCount > 0) {
      setThrowCount(0);
      setLocked(true);
      setStatus("categoryLocked");
    }

    if (locked || throwCount === 0) return points;

    let newPoints = 0;
    let pairsFound = 0;
    let sortedDices = [];
    for (let i = 0; i < dices.length; i++) {
      sortedDices[i] = dices[i].value;
    }
    sortedDices.sort().reverse();

    for (let i = 0; i < sortedDices.length - 1; i++) {
      if (sortedDices[i] === sortedDices[i + 1]) {
        newPoints += sortedDices[i] * 2;
        pairsFound++;
        while (sortedDices[i] === sortedDices[i + 1]) {
          i++;
        }
      }
    }
    if (pairsFound < 2) {
      newPoints = 0;
    }
    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Two pairs (X X Y Y ?)</div>
      <div className="categoryPoints">
        <button
          className={status}
          onClick={() => {
            setPoints(lockTwoPairs(true));
            pointArray[8] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
