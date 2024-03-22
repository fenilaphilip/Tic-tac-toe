
import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";


function showActivePlayer(gameTurns) {
  let nowplayerIs = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    nowplayerIs = "O";
  }
  return nowplayerIs;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = showActivePlayer(gameTurns);

  function displayCurrentPlayer(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayerIs = showActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayerIs },
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