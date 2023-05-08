
/**
 * This function calculate the winning
 * possibility with respect to user1
 * 
 * @param {*} user1 
 * @param {*} user2 
 * @returns "draw" || "win" || "lost"
 */
const Scores = (user1, user2)=>{
    const OPTIONS = ["rock", "paper", "scissor"]
    if(!OPTIONS.includes(user1) || !OPTIONS.includes(user2)){
        throw new Error("option should be either 'rock' or 'paper' or 'scissor")
    }
    if(user1 === user2){
        return "draw"
    }else if (
         (user1 === OPTIONS[0] && user2 === OPTIONS[2])
         || (user1 == OPTIONS[1] && user2 == OPTIONS[0]) 
         || (user1 == OPTIONS[2] && user2 == OPTIONS[1])) {
        return ('win');
    }else{
        return ('fail')
    }
}

export default Scores