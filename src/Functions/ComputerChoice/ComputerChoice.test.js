import {describe, test, assert} from "vitest"
import ComputerChoice from "./ComputerChoice"

describe("Test the computer can select one from available choices",()=>{

    test("computer can select a choice",()=>{
        const choice = ComputerChoice()
       assert.ok(["scissor", "rock" , "paper"].includes(choice))
    })

})