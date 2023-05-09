import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";

function Gameplay({player1Name, player2Name}) {
  const [user1Choice, setUser1Choice] = useState(null);
  const [user2Choice, setUser2Choice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [user1Score, setUser1Score] = useState(null);
  const [user2Score, setUser2Score] = useState(null);
  const [computerScore, setComputerScore] = useState(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const choices = ["rock", "paper", "scissor"];

useEffect(()=>{
  if(player2Name == null){
    if(user1Choice && computerChoice){
      const newresult = checkResult(user1Choice, computerChoice)
      cal(newresult)
    }
  }

  if(user1Choice && user2Choice){
    const results = checkResult(user1Choice, user2Choice)
    cal(results)
   
  }
},[result, user1Choice, user2Choice])




  const handleClick = (player, value) => {
    setRoundsPlayed(roundsPlayed + 1);
    setComputerChoice(generateComputerChoice(choices));
    if(player1Name == player){
      setUser1Choice(value);
    }
    if(player2Name == player){
      setUser2Choice(value);
    }
    
    
  }; 

const reset = ()=>{
  setUser1Choice(null)
  setUser2Choice(null)
}

  const cal = (user1)=>{
    if(user1 === "win"){
      setResult(()=>`${player1Name} WIN`)
      setUser1Score(user1Score + 1);
    }else if(user1 === "fail"){
      if(player2Name !== null){
        setResult(()=> `${player2Name} WIN`)
        setUser2Score(user2Score + 1);
      }else{
        setResult(()=>"computer WIN")
        setComputerScore(computerScore + 1);
      }
    }else{
      setResult(()=>"IT'S DRAW");
    }
  }

  const checkResult = (user1, user2) => {
        const user = Scores(user1, user2)
        return user
    
   
  };

  const PlayerChoice =(player)=> 
  <>
    <p>{player} turn</p>
  {
    choices.map((choice, index) =>
      <button
        key={index}
        name={player}
        onClick={() => handleClick(player, choice)}
      >
        {choice}
      </button>
    )
  }
  </>


  const forTwoPlayers = ()=>{
    if(user1Choice == null){
      return PlayerChoice(player1Name)
    }
    else if(user1Choice !== null){
      return PlayerChoice(player2Name)
    }
  }

 
  return (
    <div>
      <div>
        {player2Name !== null ? forTwoPlayers() : PlayerChoice(player1Name)}
      </div>
      <h2>
        {player1Name} choise is: {user1Choice}{" "}
      </h2>
      <h2>
        {player2Name !== null ? player2Name : "computer"} is:{" "}
        {player2Name !== null ? user2Choice : computerChoice}{" "}
      </h2>

       <h2>{result}</h2>
      
      <h2>
        {player1Name} score: {user1Score}
      </h2>
      <h2>
        {player2Name !== null ? player2Name : "computer"} Score:{" "}
        {player2Name !== null ? user2Score : computerScore}{" "}
      </h2>
      <h2>Number of rounds played: {roundsPlayed}</h2>
    </div>
  );
}

export default Gameplay;