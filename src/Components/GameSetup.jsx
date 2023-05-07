import React from 'react';

function GameSetup({ player1Name, player2Name, onStart, onBack }) {
  return (
    <div>
      <h2>{player1Name} vs {player2Name}</h2>
      <button onClick={onStart}>Start Game</button>
      <button onClick={onBack}>Go back</button>

    </div>
  );
}

export default GameSetup;