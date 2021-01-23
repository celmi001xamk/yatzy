import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function OnePair({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockOnePair(false));
  });

  const lockOnePair = (setLock) => {
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

    for (let i = 0; i < sortedDices.length - 1; i++) {
      if (sortedDices[i] === sortedDices[i + 1]) {
        newPoints = sortedDices[i] * 2;
        setPoints(newPoints);
        return newPoints;
      }
    }
    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">One pair (X X ? ? ?)</div>
      <div className="categoryPoints">
        <button
          className={status}
          onClick={() => {
            setPoints(lockOnePair(true));
            pointArray[7] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
