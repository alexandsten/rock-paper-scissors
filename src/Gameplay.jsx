import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";

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
  const choices = ["rock", "paper", "scissors"];
  const [buttonsVisible, setButtonsVisible] = useState(true)

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


  const PlayerChoice = (player) => <>
    <p style={{color:"white"}}>{player} turn</p>
    {
      roundsPlayed == 10 ?
        <p style={{color:"white"}}>You have played 10 rounds</p>
        :
        buttonsVisible == true ?
          choices.map((choice, index) =>
            <button
              key={index}
              name={player}
              id={choice}
              onClick={() => handleClick(player, choice)}
            >
              {choice}
            </button>
          )
          :
          <p> </p>

    }
  </>


  const forTwoPlayers = () => {
    if (user1Choice == null) {
      return PlayerChoice(player1Name)
    }
    else if (user1Choice !== null) {
      return PlayerChoice(player2Name)
    }
  }


  return (
    <div>
        <div id="gameplay">
       <h3 style={{color:"white"}}> {player1Name} VS {player2Name}</h3>
       <strong style={{color:"white"}} id="num_round_played">
        Round: {roundsPlayed}
      </strong>
       <p  style={{color:"white"}}> {user1Score}{" "} {user2Score}  </p>
       <h2 style={{color:"white"}}id="winner">{result}</h2>
       <div id="gameplayavatars">
       <img style={{ height: "60px", width: "60px" }} src="./src/img/ghost (2).png" />
       <img style={{ height: "60px", width: "60px" }} src="./src/img/ghost (3).png" /> 

       </div>
       <span>
        {result && (
          <button id="play_again" onClick={reset}>
            Play again!
          </button>
        )}
      </span>
      

        </div>
      <div>
        {player2Name !== null ? forTwoPlayers() : PlayerChoice(player1Name)}
      </div>

    
     
      <h2>Game Results:</h2>
      <ul style={{color:"white"}} id="gameplayhistory">
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
      <a href="App">Back</a>
    </div>
  );
}

export default Gameplay;