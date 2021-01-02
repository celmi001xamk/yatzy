import React, { useState, useEffect } from 'react';
import { Ones } from './ones';
import { Twos } from './twos';
import { Threes } from './threes';
import { Fours } from './fours';
import { Fives} from './fives';
import { Sixes } from './sixes';
import { OnePair } from './onePair';
import { TwoPairs } from './twoPairs';
import { ThreeOf } from './threeOf';
import { FourOf} from './fourOf';
import { SmallStraight} from './smallStraight';
import { BigStraight} from './bigStraight';
import { FullHouse } from './fullHouse';
import { Random} from './random';
import { Yatzy } from './yatzy';


export let pointArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



export function Game(){
    const [throwCount, setThrowCount] = useState(0);
    const [dices, setDices] = useState([
        {
            value: "-",
            isLocked: false,
            className: "freeDice"
        },
        {
            value: "-",
            isLocked: false,
            className: "freeDice"
        },
        {
            value: "-",
            isLocked: false,
            className: "freeDice"
        },
        {
            value: "-",
            isLocked: false,
            className: "freeDice"
        },
        {
            value: "-",
            isLocked: false,
            className: "freeDice"
        }
    ]);

    useEffect(() => {
        setThrowCount(throwCount);
    })

    const throwDices = () => {
        if (throwCount >= 3) return;
        const newDices = [...dices];
        if (throwCount === 0) {
            for(let i = 0; i < newDices.length; i++) {
                newDices[i].isLocked = false;
                newDices[i].className = "freeDice";
            }
            setDices(newDices);
        }
        let newThrowCount = throwCount + 1;
        setThrowCount(newThrowCount);
        const newerDices = [...dices];        
        for (let i = 0; i < 5; i++) {
            if (!newDices[i].isLocked) {
                newDices[i].value = Math.floor((Math.random()*6)+1);
            }
        }
        setDices(newerDices);
    }

    const lockDice = index => {
        const newDices = [...dices];
        newDices[index].isLocked = !newDices[index].isLocked;
        newDices[index].className = newDices[index].isLocked ? "lockedDice" : "freeDice";
        setDices(newDices);
    }
    
    return (
        <div>
            
            <div className="flexContainer">
                <div className="categoryRow">
                    <div className="categoryHeader">Category</div>
                    <div className="categoryHeader">Kalle</div>
                </div>
                <Ones dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Twos dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Threes dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Fours dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Fives dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Sixes dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <div className="categoryRow">
                    <div className="categoryHeader">Upper sum</div>
                    <div className="categoryHeader">{pointArray.slice(0,6).reduce(function(a,b) {
                        return a + b;
                    }, 0)}</div>
                </div>
                <div className="categoryRow">
                    <div className="categoryHeader">Bonus (63)</div>
                    <div className="categoryHeader">{pointArray.slice(0,6).reduce(function(a,b) {
                        return a + b;
                    }, 0) >= 63 ? pointArray[6] = 50 : pointArray[6] = 0}</div>
                </div>
                <OnePair dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <TwoPairs dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <ThreeOf dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <FourOf dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <SmallStraight dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <BigStraight dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <FullHouse dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Random dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <Yatzy dices={dices} throwCount={throwCount} setThrowCount={setThrowCount}/>
                <div className="categoryRow">
                    <div className="categoryHeader">Total</div>
                    <div className="categoryHeader">{pointArray.reduce(function(a,b) {
                        return a + b;
                    }, 0)}</div>
                </div>
                <div className="categoryRow">
                    <button className="throwButton" onClick={() => throwDices()}>Throw dice {throwCount}/3</button>
                </div>
                <div className="diceRow">
                    <button className={dices[0].className}onClick={() => lockDice(0)}>{dices[0].value}</button>
                    <button className={dices[1].className}onClick={() => lockDice(1)}>{dices[1].value}</button>
                    <button className={dices[2].className}onClick={() => lockDice(2)}>{dices[2].value}</button>
                    <button className={dices[3].className}onClick={() => lockDice(3)}>{dices[3].value}</button>
                    <button className={dices[4].className}onClick={() => lockDice(4)}>{dices[4].value}</button>
                </div>
            </div>            
        </div>
    )
}