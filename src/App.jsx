import { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';
import GameSetup from './/Components/GameSetup';
import Gameplay from './Gameplay';
import localData from './LocalData';
import './App.css'

function App() {
  const data = []//will hold an array of objects
  const [numPlayers, setNumPlayers] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  function handlePlayerSelect(num) {
    setNumPlayers(num);
    setShowPlayerSelect(false);
    setShowNameForm(true);
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
        {numPlayers === 1 && gameStarted && <Gameplay player1Name={player1Name} player2Name={"Computer"}/>}
        {numPlayers === 2 && gameStarted && <Gameplay player1Name={player1Name} player2Name={player2Name}/>}
      </div>
    </localData.Provider>
  );
}

export default App;