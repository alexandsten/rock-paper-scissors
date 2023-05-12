import { useState } from 'react';
import PlayerSelect from './Components/PlayerSelect';
import NameForm from './Components/NameForm';
// import music from "./mp3/backgroundmusic.mp3";

import Gameplay from './Gameplay';
import './App.css'
const audio = new Audio();
audio.volume = 0.05;

function App() {
  const [numPlayers, setNumPlayers] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  

  function handlePlay() {
    setIsPlaying(true);
    audio.play();
  }

  function handlePause() {
    setIsPlaying(false);
    audio.pause();
  }
 

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
        
        {/* <audio src={music} autoPlay loop /> */}

        <h1 style={{fontSize: "35px", color:"white"}}>Rock,Papper,Scissor</h1 >
        {numPlayers === null && <PlayerSelect onSelect={handlePlayerSelect} />}
        {numPlayers !== null && player1Name === '' && player2Name === '' && (
          <NameForm onSubmit={handleNameSubmit} numPlayers={numPlayers} />
      )}
       {numPlayers === 1 && gameStarted && <h1 style={{color:"white", fontSize:"30px"}}> {player1Name} VS Computer</h1>}
       {numPlayers === 2 && gameStarted && <h1 style={{color:"white", fontSize:"30px"}}> </h1>}
        
       
        {numPlayers === 1 && gameStarted && <Gameplay player1Name={player1Name} player2Name={"_computer_"}/>}
        {numPlayers === 2 && gameStarted && <Gameplay player1Name={player1Name} player2Name={player2Name}/>}
        {isPlaying ? (
          
           <button className="audiobtn" onClick={handlePause}><img style={{height:"40px"}} src="../src/img/mute.png" /></button>
        
      ) : (
        <button className="audiobtn" onClick={handlePlay}><img style={{height:"40px"}} src="../src/img/speaker3.png" /></button>
      )}
      </div>
      
  );
}

export default App;