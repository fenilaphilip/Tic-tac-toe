
import { useState } from "react";


export default function Player({ name, symbol, isPlayerActive, onChangePlayerName }) {
    const [playerCalled, setPlayerCalled] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditButton(event) {
        setIsEditing(preValue => {
            return !preValue;
        });
        if (isEditing) {
            onChangePlayerName(symbol, playerCalled);
        }
    }

    function handleChange(event) {
        const { value } = event.target;
        setPlayerCalled(value);
    }

    let playerName = <span className="player-name"> {playerCalled} </span>;
    if (isEditing) {
        playerName = <input type="text" onChange={handleChange} required value={playerCalled} />;
    }


    return (
        <li className={isPlayerActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">
                    {symbol}
                </span>
            </span>
            <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )

}