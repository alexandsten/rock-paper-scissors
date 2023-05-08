import { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';
import GameSetup from './/Components/GameSetup';
import localData from './LocalData';
import './App.css'

function App() {
  const data = []//will hold an array of objects
  const [numPlayers, setNumPlayers] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  function handlePlayerSelect(num) {
    setNumPlayers(num);
  }

  function handleNameSubmit(name1, name2) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
  }

  function handleStartGame() {
    console.log('Starting game...');
  }

  return (
    <localData.Provider value={data} >
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
      </div>
    </localData.Provider>
  );
}

export default App;