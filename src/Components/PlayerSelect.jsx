import React, { useState } from 'react';
import { motion } from "framer-motion"
import buttonSound from "../mp3/knapptryckmusik.mp3";

function PlayerSelect({ onSelect }) {
  const [numPlayers, setNumPlayers] = useState(1);

  const audio = new Audio(buttonSound);
  audio.volume = 0.05;
  

  function handleSelect(num) {
    setNumPlayers(num);
    onSelect(num);
    audio.play();
  }

  return (
    <div id="playerselect">
      <motion.div
       initial={{ scale: 1 }}
       animate={{ scale: [1, 1.1, 1] }}
       transition={{ duration: 1, repeat: Infinity }}
    >
      <h1 id="playerselecth1"style={{color: "white"}}>New Game</h1>
      </motion.div>
      <h5 style={{color:"white"}}>highscore: 193</h5>
      <h2 style={{fontSize: "20px", color:"white"}}>Select number of players:</h2>
      <div id="btncontainer">
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
     className="playerSelectbtn"data-id="player1-btn" onClick={() => handleSelect(1)}>1 Player</motion.button>
       <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} className="playerSelectbtn" data-id="player2-btn" onClick={() => handleSelect(2)}>2 Players</motion.button>
      </div>
    </div>
  );
}

export default PlayerSelect;