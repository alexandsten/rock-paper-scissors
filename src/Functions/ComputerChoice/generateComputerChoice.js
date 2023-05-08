
/**
 * This function makes the computer to choose an option
 * @returns either 'scissors' or 'rock' or 'paper
 */
const generateComputerChoice = (choices) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
  };
  
  export default generateComputerChoice