import { describe, test, expect} from "vitest"
import Scores from "./Scores"

describe("Calculate the score",() => {


    test("Should determine draw game",()=>{
        const user1 = "scissors"
        const user2 = "scissors"
        const draw = Scores(user1, user2)
        expect(draw).toBe("draw")
    })

    
    test.each([
      ["scissors", "rock", "fail"],
      ["scissors", "paper", "win"],
      ["paper", "rock", "win"],
      ["paper", "scissors", "fail"],
      ["rock", "scissors", "win"],
      ["rock", "paper", "fail"],
    ])(
      "when user1=%s and user2=%s the result is %s",
      (user1, user2, result) => {
        const forUser1 = Scores(user1, user2);
        expect(forUser1).toBe(result);
      }
    );
    
    test("should determine the argument are declared in the function",()=>{
        const user1 = "scissors"
        const user2 = "scissor"

        expect(()=> Scores(user1, user2)).toThrowError("option should be either 'rock' or 'paper' or 'scissor")

    })
})
