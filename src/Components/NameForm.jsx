import React, { useState } from 'react';

function NameForm({ numPlayers, onSubmit }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(player1Name, player2Name);
  }

  return (
    <div>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Player 1:
          <input
            type="text"
            value={player1Name}
            onChange={(event) => setPlayer1Name(event.target.value)}
          />
        </label>
        {numPlayers === 2 && (
          <label>
            Player 2:
            <input
              type="text"
              value={player2Name}
              onChange={(event) => setPlayer2Name(event.target.value)}
            />
          </label>
        )}
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default NameForm;