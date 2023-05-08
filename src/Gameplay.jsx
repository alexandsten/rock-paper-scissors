import { useEffect, useState } from "react";
import "./App.css";

function Gameplay() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [computerScore, setComputerScore] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    if (userChoice && computerChoice) {
      checkResult();
    }
  }, [userChoice, computerChoice]);

  const checkResult = () => {
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
  };

  return (
    <div>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h2>User choise is: {userChoice} </h2>
      <h2>Computer choise is: {computerChoice} </h2>

      <h2>{result}</h2>
      <h2>User score: {userScore}</h2>
      <h2>Computer score: {computerScore}</h2>
    </div>
  );
}

export default Gameplay;
