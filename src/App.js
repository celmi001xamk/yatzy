import React, { useState } from "react";
import { Game } from "./components/game";
import { Header } from "./components/header";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [playerName, setPlayerName] = useState("");
  return (
    <div>
      <Header isGameOn={isGameOn} setIsGameOn={setIsGameOn} setPlayerName={setPlayerName}/>
      {isGameOn ? <Game playerName={playerName}/>: null}
    </div>
  );
}
