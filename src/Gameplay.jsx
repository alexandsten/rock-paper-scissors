import { useEffect, useState } from "react";
import generateComputerChoice from "./Functions/ComputerChoice/generateComputerChoice";
import Scores from "./Functions/Scores/Scores";
import "./App.css";

function Gameplay({player1Name, player2Name}) {
  const [user1Choice, setUser1Choice] = useState(null);
  const [user2Choice, setUser2Choice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [gameResults, setGameResults] = useState([]);
  const choices = ["rock", "paper", "scissor"];

  
  
  
  

/* const handleClick = (value) => {
  setRoundsPlayed(roundsPlayed + 1);
  setUserChoice(value);
}; */

useEffect(() => {
  setComputerChoice(generateComputerChoice(choices));
}, []);

/* useEffect(() => {
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
}, [result]); */


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

 /*  const checkResult = () => {
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
  } */





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
  

  const PlayerChoice =(player)=> <>
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
      {/* {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))} */}
      <div>
        {player2Name !== null ? forTwoPlayers() : PlayerChoice(player1Name)}
      </div>
     
    {/*  {userChoice && computerChoice && result && (
      <div id="choisedive">
 
    <p>{player1Name} chose: {userChoice}</p>
    <p>{player2Name} chose: {computerChoice}</p>
   
      </div>
)} */}
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
    
      {/* <div>
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
      <h2>Number of rounds played: {roundsPlayed}</h2> */}
    </div>
  );
}

export default Gameplay;