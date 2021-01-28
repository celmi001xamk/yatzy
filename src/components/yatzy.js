import { useState, useEffect } from "react";
import { pointArray } from "./game";

export function Yatzy({ dices, throwCount, setThrowCount }) {
  const [locked, setLocked] = useState(false);
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("categoryFree");

  useEffect(() => {
    setPoints(lockYatzy(false));
  });

  const lockYatzy = (setLock) => {
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

    for (let i = 1; i < sortedDices.length; i++) {
      if (sortedDices[0] === sortedDices[i]) {
        newPoints += 12.5;
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
      <div className="categoryHeader">Yatzy</div>
      <div className="categoryCentered">
        <button
          className={status}
          onClick={() => {
            setPoints(lockYatzy(true));
            pointArray[14] = points;
          }}
        >
          {points}
        </button>
      </div>
    </div>
  );
}
