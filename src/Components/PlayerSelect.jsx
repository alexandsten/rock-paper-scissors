import React, { useState } from 'react';

function PlayerSelect({ onSelect }) {
  const [numPlayers, setNumPlayers] = useState(1);

  function handleSelect(num) {
    setNumPlayers(num);
    onSelect(num);
  }

  return (
    <div id="playerselect">
      <h1 id="playerselecth1"style={{color: "white"}}>New Game</h1>
      <h5 style={{color:"white"}}>highscore: 193</h5>
      <h2 style={{fontSize: "20px", color:"white"}}>Select number of players:</h2>
      <div id="btncontainer">
      <button className="playerSelectbtn"data-id="player1-btn" onClick={() => handleSelect(1)}>1 Player</button>
      <button className="playerSelectbtn" data-id="player2-btn" onClick={() => handleSelect(2)}>2 Players</button>
      </div>
    </div>
  );
}

export default PlayerSelect;