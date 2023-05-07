import React from 'react';

function GameSetup({ player1Name, player2Name, onStart }) {
  return (
    <div>
      <h2>{player1Name} vs {player2Name}</h2>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}

export default GameSetup;