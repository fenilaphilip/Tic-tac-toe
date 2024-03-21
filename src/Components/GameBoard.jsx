
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClickedSquare(rowIndex, colIndex) {
        setGameBoard(preGameBoard => {
            const updateGameBoard = [...preGameBoard.map(innerArray => [...innerArray])]
            updateGameBoard[rowIndex][colIndex] = "X";
            return updateGameBoard;
        })

    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button onClick={() => handleClickedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                    </li>
                                );
                            })}
                        </ol>
                    </li>
                );
            })}

        </ol>
    )
}