import {describe, test, assert} from "vitest"
import generateComputerChoice from "./generateComputerChoice"

describe("Test the computer can select one from available choices",()=>{

    test("computer can select a choice",()=>{
        const choices = ["scissor", "rock" , "paper"]
        const choice = generateComputerChoice(choices)
       assert.ok(choices.includes(choice))
    })

})