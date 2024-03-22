
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ currentPlayer, turns }) {

    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
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
                                        <button onClick={() => currentPlayer(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                            {playerSymbol}
                                        </button>
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