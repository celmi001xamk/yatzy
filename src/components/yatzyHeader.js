import { useState } from "react";
import '../css/yatzyHeader.css';

export function YatzyHeader({
  isGameActive,
  changeGameState,
  changePlayerName,
  resetGame,
}) {
  const [newName, setNewName] = useState("");
  return (
    <header>
      {isGameActive ? (
        <div className="btnContainer">
          <button
            className="resetBtn"
            type="button"
            onClick={() => resetGame()}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => changeGameState()}
          >
            Change name
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            if (newName) changePlayerName(newName);
            changeGameState();
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="submit">
            Start
          </button>
        </form>
      )}
    </header>
  );
}
