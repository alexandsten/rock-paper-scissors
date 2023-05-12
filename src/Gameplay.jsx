import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";
import { motion } from "framer-motion"
import buttonSound from "./mp3/knapptryckmusik.mp3"


function Gameplay({ player1Name, player2Name }) {
  const [user1Choice, setUser1Choice] = useState(null);
  const [user2Choice, setUser2Choice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [computerScore, setComputerScore] = useState(0);
  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [gameResults, setGameResults] = useState([]);
  const [buttonsVisible, setButtonsVisible] = useState(true)

  const choices = ["rock", "paper", "scissors"];

  const audio = new Audio(buttonSound);
  audio.volume = 0.05;
  

  useEffect(() => {
    setComputerChoice(generateComputerChoice(choices));
  }, []);

  useEffect(() => {
    if (player2Name == null || player2Name == "_computer_") {
      if (user1Choice && computerChoice) {
        const newresult = checkResult(user1Choice, computerChoice)
        const result = cal(newresult)
        history(user1Choice, computerChoice, result)

      }

    }

    if (user1Choice && user2Choice) {
      const results = checkResult(user1Choice, user2Choice)
      const result = cal(results)
      history(user1Choice, user2Choice, result)
    }
  }, [user1Choice, user2Choice])


  const handleClick = (player, value) => {
    audio.play();
    setComputerChoice(generateComputerChoice(choices));
    if (player1Name == player) {
      setUser1Choice(value);
    }
    if (player2Name == player) {
      setUser2Choice(value);
    }


  };

  const reset = () => {
    setUser1Choice(null)
    setUser2Choice(null)
    setResult(null)
    setButtonsVisible(true)
  }

  const cal = (user1) => {
    setRoundsPlayed(roundsPlayed + 1);
    setButtonsVisible(false)
    if (user1 === "win") {
      setResult(() => `${player1Name} WIN`)
      setUser1Score(user1Score + 1);
      return `${player1Name} WIN`
    } else if (user1 === "fail") {
      if (player2Name !== null) {
        setResult(() => `${player2Name} WIN`)
        setUser2Score(user2Score + 1);
        return `${player2Name} WIN`
      } else {
        setResult(() => "computer WIN")
        setComputerScore(computerScore + 1);
        return `computer WIN`
      }
    } else {
      setResult(() => "IT'S DRAW");
      return "IT'S DRAW"
    }



  }//end of cal

  const checkResult = (user1, user2) => {
    const user = Scores(user1, user2)
    return user
  };

  const history = (user1, user2, result) => {
    const Listresult = {
      userChoice: user1,
      computerChoice: user2,
      result: result
    };
    console.log('newResult:', Listresult);
    setGameResults([...gameResults, Listresult]);
  }


  const PlayerChoice = (player, className) => <>
    <p style={{ color: "white" }}>{player} turn</p>
    {
      roundsPlayed == 10 ?
        <p style={{ color: "red" }}>You have played 10 rounds</p>
        :
        buttonsVisible == true ?
          choices.map((choice, index) =>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              name={player}
              id={choice}
              onClick={() => handleClick(player, choice)}
              className={className}
              style={{ marginRight: "30px",marginLeft:"30px", color:"whit" }}
              src={`../src/img/${choice}.png`}
            >

            </motion.img>
          )
          :
          <p> </p>

    }
  </>


  const forTwoPlayers = () => {
    if (user1Choice == null) {
      return PlayerChoice(player1Name, "first-btns")
    }
    else if (user1Choice !== null) {
      return PlayerChoice(player2Name, "second-btns")  
    }
  }


  return (
    <>

      <div id="gameplay">
        <strong style={{ color: "white" }}>{player1Name} {user1Score}:{user2Score} {player2Name}</strong>
        <strong id="num_round_played" style={{ color: "white" }}>
          Round:{roundsPlayed}
        </strong>
        <h4 id="winner">{result}</h4>
        <div id="chardiv">
          <motion.div animate={{ x: [0, -10, 0], transition: { duration: 0.8, repeat: Infinity } }}>
            <img style={{ height: "60px", width: "60px", marginRight: "20px" }} src="../src/img/ghost (3).png" /> </motion.div>

          <motion.div animate={{ x: [0, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}>
            <img style={{ height: "60px", width: "60px", marginRight: "20px" }} src="../src/img/ghost (2).png" /> </motion.div>
        </div>





        


      </div>

      <div id="buttoncontainers">
        {player2Name !== null ? forTwoPlayers() : PlayerChoice(player1Name)}
        <span>
        {result && (
          <button id="play_again" onClick={reset}>
            Play again!
          </button>
        )}
      </span>
      </div>
     


      <h6 style={{color: "white", marginTop: "40px",margin:0,marginRight:"70vh"}}>Game Results:</h6>
      <ul id="gameplayhistory">
        {gameResults.length > 0 && (
          <>
            {gameResults.map((result, index) => (
              <li key={index} className="history_length">
                {player1Name} chose {result.userChoice}, {player2Name} chose{" "}
                {result.computerChoice}, result:
                <strong > {result.result} </strong>
              </li>
            ))}
          </>
        )}
      </ul>
      <a style={{color:"white"}} href="App">Back</a>
    </>
  );
}

export default Gameplay;