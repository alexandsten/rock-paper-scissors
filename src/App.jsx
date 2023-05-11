import { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';

import Gameplay from './Gameplay';
import './App.css'

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
  return (
      <div id="container">

        <h1 style={{fontSize: "35px", color:"black"}}>Rock,Papper,Scissor</h1 >
        {numPlayers === null && <PlayerSelect onSelect={handlePlayerSelect} />}
        {numPlayers !== null && player1Name === '' && player2Name === '' && (
          <NameForm onSubmit={handleNameSubmit} numPlayers={numPlayers} />
      )}
       {numPlayers === 1 && gameStarted && <h1> {player1Name} VS Computer</h1>}
       {numPlayers === 2 && gameStarted && <h1> {player1Name} VS {player2Name}</h1>}
        
       
        {numPlayers === 1 && gameStarted && <Gameplay player1Name={player1Name} player2Name={"_computer_"}/>}
        {numPlayers === 2 && gameStarted && <Gameplay player1Name={player1Name} player2Name={player2Name}/>}
      </div>
  );
}

export default App;