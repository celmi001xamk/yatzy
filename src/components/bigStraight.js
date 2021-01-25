import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function BigStraight({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockBigStraight(false));
  });

  const lockBigStraight = (setLock) => {
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

    for (let i = 0; i < sortedDices.length; i++) {
      if (sortedDices[i] === i + 2) {
        newPoints += sortedDices[i];
      } else {
        newPoints = 0;
        i += 5;
      }
    }
    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Big straight</div>
      <div className="categoryPoints">
        <button
          className={status}
          onClick={() => {
            setPoints(lockBigStraight(true));
            pointArray[12] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
