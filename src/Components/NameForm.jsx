import React, { useState } from 'react';
import buttonSound from "../mp3/knapptryckmusik.mp3";
import {motion} from 'framer-motion'

function NameForm({ onSubmit, numPlayers }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const audio = new Audio(buttonSound);
  audio.volume = 0.05;
  
  function onClick(){
    audio.play();
  }

  function handleSubmit(event) {
    audio.play();
    event.preventDefault();
    if (numPlayers == 2) {
      if (player1Name == "") {
        alert("You need to pass a name1")
      }
      else if (player2Name == "") {
        alert("You need to pass a name2")

      } else {

        onSubmit(player1Name, player2Name);
      }
    }
    else if (numPlayers == 1) {
      if (player1Name == "") {
        alert("You need to pass a name1")
      }
      else {

        onSubmit(player1Name, player2Name);
      }
    }
    else {
      alert("ERRROR")
    }

  }

  return (
    <div id="nameformdiv">


      <form onSubmit={handleSubmit}>
        <div id="playercontainers">
          <div id="player1div">
            <div  style={{display:"flex", flexdirection: "row", alignItems:"center", justifyContent: "center"}}>
            <motion.div  animate={{ y: [0, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}>
              <img style={{ height: "60px", width: "60px", marginRight:"20px"  }} src="./src/img/ghost (2).png" /> </motion.div> <strong style={{ color: "white", fontSize: "30px" }}>Player 1:</strong>
            </div>





            <label style={{ color: "white"}} htmlFor="player1">Enter name</label>
            <input 
              type="text"


              id="player1"
              value={player1Name}
              onChange={(event) => setPlayer1Name(event.target.value)}
            />

          </div>

          {numPlayers === 2 && (
            <>

              <div id="player2div">
                <div style={{display:"flex", flexdirection: "row"}}>
                <motion.div  animate={{ y: [0, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}>
                  <img style={{ height: "60px", width: "60px", marginRight: "20px"}} src="./src/img/ghost (3).png" /> </motion.div> <strong style={{ color: "white", fontSize: "30px" }}>Player 2:</strong>
               
                  </div>

                <label style={{ color: "white" }} htmlFor="player2">Enter name</label>
                <input
                  type="text"
                  id="player2"
                  value={player2Name}
                  onChange={(event) => setPlayer2Name(event.target.value)}
                />
              </div>

            </>
          
        )}
         </div>
        <br />
        <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} id="start_game" onClick={onClick}>Start Game</motion.button>

      </form>
      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}  onClick={onClick} style={{ color: "white", marginTop: "40px" }} href="App">Back</motion.a>
    </div>
  );
}

export default NameForm;