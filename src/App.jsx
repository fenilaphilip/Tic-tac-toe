
import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";
import { WINNING_PATTERNS } from "./WinningPattern";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


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

  function handleRematch() {
    setGameTurns([]);
    console.log("rematch executing");
  }

  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_PATTERNS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const gameDraw = gameTurns.length === 9 && !winner;

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
        {(winner || gameDraw) && <GameOver winner={winner} rematch={handleRematch} />}
        <GameBoard currentPlayer={displayCurrentPlayer} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;