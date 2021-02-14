import { DiceSvg } from "./diceSvg";
import "../css/diceContainer.css";

export function DiceContainer({dices, lockDice}) {
  return (
    <div className="diceContainer">
      {dices.map((dice, index) => (
        <div key={index} onClick={() => lockDice(index)}>
          <DiceSvg value={dice.value} locked={dice.locked} throwing={dice.throwing} />
        </div>
      ))}
    </div>
  );
}
