import { useState, useEffect } from 'react';
import { pointArray } from './game';

export function Fours({dices, throwCount, setThrowCount}) {
    const [locked, setLocked] = useState(false);
    const [points, setPoints] = useState(0);
    const [status, setStatus] = useState("categoryFree");

    useEffect(() => {
        setPoints(lockFours(false));
    })

    const lockFours = (setLock) => {
        if (setLock && !locked && throwCount > 0) {
            setThrowCount(0);
            setLocked(true);
            setStatus("categoryLocked");
        }

        if (locked || throwCount === 0) return points;

        let newPoints = 0;

        for (let i = 0; i < 5; i++) {
            if (dices[i].value === 4) {
                newPoints += dices[i].value;
            }
        }
        setPoints(newPoints);
        return newPoints;
    }
  
    return (
        <div className="categoryRow">            
            <div className="categoryHeader">Fours</div>
            <div className="categoryPoints"><button className={status} onClick={() => {
                setPoints(lockFours(true))
                pointArray[3] = points;}
                }>{points}</button></div>            
        </div>
    
    )
    
}
