
import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";


function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function displayCurrentPlayer() {
    setActivePlayer(preActivePlayer => {
      return (preActivePlayer === "X" ? "O" : "X");
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isPlayerActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isPlayerActive={activePlayer === "O"} />
        </ol>
        <GameBoard currentPlayer={displayCurrentPlayer} currentPlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App;