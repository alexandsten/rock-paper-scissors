import React, { useState } from 'react';

function NameForm({ onSubmit, numPlayers }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (numPlayers == 2){
    if (player1Name  == ""){
      alert("You need to pass a name1")
    } 
    else if (player2Name  == ""){
      alert("You need to pass a name2")
      
    }else{

      onSubmit(player1Name, player2Name);
    }
  }
  else if(numPlayers == 1){
    if (player1Name  == ""){
      alert("You need to pass a name1")
    } 
    else{

      onSubmit(player1Name, player2Name);
    }
  }
  else {
    alert("ERRROR")
  }

  }

  return (
    <div>
      <h2>Enter player names:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player1">Player 1:</label>
        <input
          type="text"
          id="player1"
          value={player1Name}
          onChange={(event) => setPlayer1Name(event.target.value)}
        />
        {numPlayers === 2 && (
          <>
            <br />
            <label htmlFor="player2">Player 2:</label>
            <input
              type="text"
              id="player2"
              value={player2Name}
              onChange={(event) => setPlayer2Name(event.target.value)}
            />
          </>
        )}
        <br />
        <button id="start_game">Start Game</button>
      </form>
    </div>
  );
}

export default NameForm;