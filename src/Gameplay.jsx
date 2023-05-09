import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";

function Gameplay({player1Name, player2Name}) {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [gameResults, setGameResults] = useState([]);
  const choices = ["rock", "paper", "scissor"];

  
  
  
  

const handleClick = (value) => {
  setRoundsPlayed(roundsPlayed + 1);
  setUserChoice(value);
};

useEffect(() => {
  setComputerChoice(generateComputerChoice(choices));
}, []);

useEffect(() => {
  if (userChoice && computerChoice) {
    console.log('userChoice:', userChoice);
    console.log('computerChoice:', computerChoice);
    const newResult = checkResult(userChoice, computerChoice);
    console.log('newResult:', newResult);
    setResult(newResult);
  }
}, [userChoice, computerChoice]);

useEffect(() => {
  if (userChoice && computerChoice && result !== null) {
    const Listresult = {
      player1Name: player1Name,
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: result
    };
    console.log('newResult:', Listresult);
    setGameResults([...gameResults, Listresult]);
  }
}, [result]);


 /*  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("YOU WIN!");
        setUserScore(userScore + 1);
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("YOU LOSE");
        setComputerScore(computerScore + 1);
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("ITS A DRAW");
        break;
    }
  }; */
  const checkResult = () => {
    const user = Scores(userChoice, computerChoice);
    if (user === 'win') {
      setUserScore(userScore + 1);
      return `${player1Name} WIN`;
    } else if (user === 'fail') {
      setComputerScore(computerScore + 1);
      return `${player2Name} WIN`;
    } else {
      return 'ITS A DRAW';
    }
  };
  

  return (
    <div>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
     
     {userChoice && computerChoice && result && (
      <div id="choisedive">
 
    <p>{player1Name} chose: {userChoice}</p>
    <p>{player2Name} chose: {computerChoice}</p>
   
      </div>
)}
      <h2>{result}</h2>
      <h2>{player1Name} score: {userScore} : {player2Name} {computerScore}</h2>
      <strong>Number of rounds played: {roundsPlayed}</strong>
      
      {gameResults.length > 0 && (
      <>
        <h2>Game Results:</h2>
        
        {gameResults.length > 0 && (
  <ul>
    {gameResults.map((result, index) => (
      <li key={index}>
        {result.player1Name} chose {result.userChoice}, {player2Name} chose {result.computerChoice}, result:<strong> {result.result} </strong> 
      </li>
    ))}
  </ul>
)}

        
      </>
    )}
    
    </div>
  );
}

export default Gameplay;