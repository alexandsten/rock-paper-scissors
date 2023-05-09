import React, { useState } from 'react';

function PlayerSelect({ onSelect }) {
  const [numPlayers, setNumPlayers] = useState(1);

  function handleSelect(num) {
    setNumPlayers(num);
    onSelect(num);
  }

  return (
    <div>
      <h2>Select number of players:</h2>
      <button data-id="player1-btn" onClick={() => handleSelect(1)}>1 Player</button>
      <button data-id="player2-btn" onClick={() => handleSelect(2)}>2 Players</button>
    </div>
  );
}

export default PlayerSelect;