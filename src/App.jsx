import React, { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';
import GameSetup from './Components/GameSetup';
import './App.css'

function App() {
  const [numPlayers, setNumPlayers] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [showPlayerSelect, setShowPlayerSelect] = useState(true);
  const [showNameForm, setShowNameForm] = useState(false);
  const [showGameSetup, setShowGameSetup] = useState(false);

  function handlePlayerSelect(num) {
    setNumPlayers(num);
    setShowPlayerSelect(false);
    setShowNameForm(true);
  }

  function handleNameSubmit(name1, name2) {
    setPlayer1Name(name1);
    setPlayer2Name(numPlayers === 1 ? 'Computer' : name2);
    setShowNameForm(false);
    setShowGameSetup(true);
  }

  function handleStartGame() {
    console.log('Starting game...');
  }

  function handleBack() {
    setShowPlayerSelect(true);
    setShowNameForm(false);
    setShowGameSetup(false);
    setPlayer1Name('');
    setPlayer2Name('');
  }

  return (
    <div id="container">
      {showPlayerSelect && <PlayerSelect onSelect={handlePlayerSelect} />}
      {showNameForm && (
        <NameForm onSubmit={handleNameSubmit} numPlayers={numPlayers} onBack={handleBack} />
      )}
      {showGameSetup && (
        <GameSetup
          player1Name={player1Name}
          player2Name={player2Name}
          onStart={handleStartGame}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;