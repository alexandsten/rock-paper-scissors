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
    <p>{player} turn</p>
    {
      roundsPlayed == 10 ?
        <p style={{color:"red"}}>You have played 10 rounds</p>
        :
        buttonsVisible == true ?
          choices.map((choice, index) =>
            <button
              key={index}
              name={player}
              id={choice}
              onClick={() => handleClick(player, choice)}
              style={{border: '1px solid limegreen', marginRight:"5px"}}
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
      <div>
        {player2Name !== null ? forTwoPlayers() : PlayerChoice(player1Name)}
      </div>

      <h4 id="winner">{result}</h4>
      <span>
        {result && (
          <button id="play_again" onClick={reset}>
            Play again!
          </button>
        )}
      </span>
      <h4 id="user1_score">
        {player1Name} score: {user1Score}{" "}
      </h4>
      <h4 id="user2_score">
        {player2Name} score: {user2Score}
      </h4>
      <strong id="num_round_played">
        Number of rounds played: {roundsPlayed}
      </strong>
      <h6>Game Results:</h6>
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
      <a href="App">Back</a>
    </div>
  );
}

export default Gameplay;