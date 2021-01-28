import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function Sixes({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockSixes(false));
  });

  const lockSixes = (setLock) => {
    if (setLock && !locked && throwCount > 0) {
      setThrowCount(0);
      setLocked(true);
      setStatus("categoryLocked");
    }

    if (locked || throwCount === 0) return points;

    let newPoints = 0;

    for (let i = 0; i < 5; i++) {
      if (dices[i].value === 6) {
        newPoints += dices[i].value;
      }
    }
    setPoints(newPoints);

    return newPoints;
  };

  return (
    <div className="categoryRow">
      <div className="categoryHeader">Sixes</div>
      <div className="categoryCentered">
        <button
          className={status}
          onClick={() => {
            setPoints(lockSixes(true));
            pointArray[5] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
