import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function Random({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockRandom(false));
  });

  const lockRandom = (setLock) => {
    if (setLock && !locked && throwCount > 0) {
      setThrowCount(0);
      setLocked(true);
      setStatus("categoryLocked");
    }
    if (locked || throwCount === 0) return points;

    let newPoints = 0;
    let diceValues = [];
    for (let i = 0; i < dices.length; i++) {
      diceValues[i] = dices[i].value;
    }
    newPoints = diceValues.reduce(function (a, b) {
      return a + b;
    }, 0);

    setPoints(newPoints);
    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Random</div>
      <div className="categoryPoints">
        <button
          className={status}
          onClick={() => {
            setPoints(lockRandom(true));
            pointArray[13] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
