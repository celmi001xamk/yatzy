import {useState, useEffect} from 'react';
import { pointArray } from './game';

export function Ones({dices, throwCount, setThrowCount}) {
    const [locked, setLocked] = useState(false);
    const [points, setPoints] = useState(0);
    const [status, setStatus] = useState("categoryFree");

    useEffect(() => {
        setPoints(lockOnes(false));
        
    })

    const lockOnes = (setLock) => {
        if (setLock && !locked && throwCount > 0) {
            setThrowCount(0);
            setLocked(true);
            setStatus("categoryLocked");
        }

        if (locked || throwCount === 0) return points;

        let newPoints = 0;

        for (let i = 0; i < 5; i++) {
            if (dices[i].value === 1) {
                newPoints += dices[i].value;
            }
        }
        setPoints(newPoints);
       

        return newPoints;
    }
  
    return (
        <div className="categoryRow">            
            <div className="categoryHeader">Ones</div>
            <div className="categoryPoints"><button className={status} onClick={() => {
                setPoints(lockOnes(true));
                pointArray[0] = points;}
                }>{points}</button></div>            
        </div>
    
    )
    
}
