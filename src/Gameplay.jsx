import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";

function Gameplay({player1Name}) {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [computerScore, setComputerScore] = useState(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const choices = ["rock", "paper", "scissor"];

  const handleClick = (value) => {
    setRoundsPlayed(roundsPlayed + 1);
    setUserChoice(value);
    setComputerChoice(()=>generateComputerChoice(choices));
  };
  

  useEffect(() => {
    if (userChoice && computerChoice) {
      checkResult();
    }
  }, [userChoice, computerChoice]);



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
    const user = Scores(userChoice, computerChoice)
    if(user === "win"){
      setResult("You WIN")
      setUserScore(userScore + 1);
    }else if(user === "fail"){
      setResult("YOU LOSE");
      setComputerScore(computerScore + 1);
    }else{
      setResult("ITS A DRAW");
    }
  };

  return (
    <div>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h2>{player1Name} choise is: {userChoice} </h2>
      <h2>Computer choise is: {computerChoice} </h2>

      <h2>{result}</h2>
      <h2>{player1Name} score: {userScore}</h2>
      <h2>Computer score: {computerScore}</h2>
      <h2>Number of rounds played: {roundsPlayed}</h2>
    </div>
  );
}

export default Gameplay;