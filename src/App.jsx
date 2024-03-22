
import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function displayCurrentPlayer(rowIndex, colIndex) {
    setActivePlayer(preActivePlayer => {
      return (preActivePlayer === "X" ? "O" : "X");
    });
    setGameTurns(prevTurns => {
      let nowplayerIs = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        nowplayerIs = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: nowplayerIs },
        ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isPlayerActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isPlayerActive={activePlayer === "O"} />
        </ol>
        <GameBoard currentPlayer={displayCurrentPlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;