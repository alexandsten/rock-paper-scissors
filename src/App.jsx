import React, { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';
import GameSetup from './/Components/GameSetup';
import './App.css';
import Gameplay from './Gameplay';

function App() {
  const [numPlayers, setNumPlayers] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  function handlePlayerSelect(num) {
    setNumPlayers(num);
  }

  function handleNameSubmit(name1, name2) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setGameStarted(true);
  }

  function handleStartGame() {
    console.log('Starting game...');
    setGameStarted(true);
  }

  return (
    <div id="container">
      {numPlayers === null && <PlayerSelect onSelect={handlePlayerSelect} />}
      {numPlayers !== null && player1Name === '' && player2Name === '' && (
        <NameForm onSubmit={handleNameSubmit} numPlayers={numPlayers} />
      )}
      {player1Name !== '' && player2Name !== '' && (
        <GameSetup
          player1Name={player1Name}
          player2Name={player2Name}
          onStart={handleStartGame}
        />
      )}
      {numPlayers === 1 && gameStarted && <Gameplay player1Name={player1Name}/>}
    </div>
  );
}

export default App;