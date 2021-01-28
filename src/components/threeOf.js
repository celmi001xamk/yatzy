import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function ThreeOf({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockThreeOf(false));
  });

  const lockThreeOf = (setLock) => {
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
    sortedDices.sort().reverse();

    for (let i = 0; i < sortedDices.length - 2; i++) {
      if (
        sortedDices[i] === sortedDices[i + 1] &&
        sortedDices[i] === sortedDices[i + 2]
      ) {
        newPoints = sortedDices[i] * 3;
        setPoints(newPoints);
        return newPoints;
      }
    }
    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Three of the same</div>
      <div className="categoryCentered">
        <button
          className={status}
          onClick={() => {
            setPoints(lockThreeOf(true));
            pointArray[9] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
