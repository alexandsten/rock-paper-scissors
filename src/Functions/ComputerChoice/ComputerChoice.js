
/**
 * This function makes the computer to choose an option
 * @returns either 'scissors' or 'rock' or 'paper
 */

export default function ComputerChoice(){
    const choice = Math.random();
   if(0 <= choice && choice <= 0.33) return "scissor"
   if(0.34 <= choice && choice <= 0.67) return "paper"
   if(0.68 <= choice && choice <= 0.99) return "rock"
}
