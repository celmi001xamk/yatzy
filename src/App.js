import { useState } from "react";
import "./App.css";
import { calculatePoints } from "./functions/calculatePoints";
import { YatzyHeader } from "./components/yatzyHeader";
import { GameTable } from "./components/gameTable";
import { GuideContainer } from "./components/guideContainer";
import { DiceContainer } from "./components/diceContainer";
import { ThrowBtn } from "./components/throwBtn";

function App() {
  const [throwCount, setThrowCount] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [playerName, setPlayerName] = useState("Nameless");
  const [throwing, setThrowing] = useState(false);

  const [points, setPoints] = useState([
    {
      name: "Ones",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Twos",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Threes",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Fours",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Fives",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Sixes",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Middle sum",
      value: 0,
      locked: true,
      className: "tableRowConstant",
    },
    {
      name: "Bonus",
      value: 0,
      locked: true,
      className: "tableRowConstant",
    },
    {
      name: "One pair",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Two pairs",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Three of the same",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Four of the same",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Small straight",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Big straight",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Full house",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Random",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Yatzy",
      value: 0,
      locked: false,
      className: "tableRow",
    },
    {
      name: "Total",
      value: 0,
      locked: true,
      className: "tableRowConstant",
    },
  ]);
  const [dices, setDices] = useState([
    {
      value: 1,
      locked: false,
      throwing: false,
    },
    {
      value: 1,
      locked: false,
      throwing: false,
    },
    {
      value: 1,
      locked: false,
      throwing: false,
    },
    {
      value: 1,
      locked: false,
      throwing: false,
    },
    {
      value: 1,
      locked: false,
      throwing: false,
    },
  ]);

  const changeGameState = () => {
    setIsGameActive(!isGameActive);
  };
  const changePlayerName = (newName) => {
    setPlayerName(newName);
  };
  const resetGame = () => {
    let resetedPoints = [...points];
    for (let i = 0; i < points.length; i++) {
      resetedPoints[i].value = 0;
      resetedPoints[i].locked = false;
    }
    setPoints(resetedPoints);
    setThrowCount(0);
  };

  const countCategory = (index) => {
    if (points[index].locked) return;
    let newPoints = [...points];
    newPoints[index].value = calculatePoints(dices, index, points);
    setPoints(newPoints);
  };
  const lockCategory = (index) => {
    if (
      throwCount === 0 ||
      throwing ||
      points[index].locked
    ) {
      return;
    }
    let newPoints = [...points];
    newPoints[index].locked = true;

    for (let i = 0; i < points.length; i++) {
      if (!points[i].locked) {
        points[i].value = 0;
      }
    }

    setPoints(newPoints);

    countCategory(6);
    countCategory(7);
    countCategory(17);
    setThrowCount(0);
  };

  const throwDices = () => {
    if (throwCount >= 3) return;
    let newDices = [...dices];
    setThrowing(true);
    for (let i = 0; i < dices.length; i++) {
      setTimeout(() => {
        newDices.map((dice) => (dice.throwing = true));
        for (let i = 0; i < dices.length; i++) {
          if (throwCount === 0) {
            newDices[i].locked = false;
          }
          if (!newDices[i].locked) {
            newDices[i].value = Math.floor(Math.random() * 6 + 1);
          }
        }
        for (let i = 0; i < points.length; i++) {
          countCategory(i);
        }
        if (i === 4) {
          newDices.map((dice) => (dice.throwing = false));
        }
        setDices(newDices);
        if (i === dices.length - 1) setThrowing(false);
      }, 200 * i);
      setThrowCount(throwCount + 1);
    }
  };

  const lockDice = (index) => {
    if (throwing) return;
    let newDices = [...dices];
    newDices[index].locked = !newDices[index].locked;
    setDices(newDices);
  };

  return (
    <div className="App">
      <YatzyHeader
        isGameActive={isGameActive}
        changeGameState={changeGameState}
        changePlayerName={changePlayerName}
        resetGame={resetGame}
      />
      {isGameActive ? (
        <div>
          <GameTable
            playerName={playerName}
            points={points}
            lockCategory={lockCategory}
          />
          <ThrowBtn throwCount={throwCount} throwDices={throwDices} />
          {throwCount === 0 ? null : (
            <DiceContainer dices={dices} lockDice={lockDice} />
          )}
        </div>
      ) : (
        <GuideContainer />
      )}
    </div>
  );
}

export default App;
