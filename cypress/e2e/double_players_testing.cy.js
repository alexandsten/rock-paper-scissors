
/**!TEST
 * Here we test that the game can be played by two user
 * We start by:
 ** visiting the address where the game is running
 ** select two player mode game
 ** entering the names of the users
 ** making the first user player then the second user
 ** checking the outcomes is what we expect
 ** keep playing two more games where we check
 ** the data like user score, round of games and history
 ** update as we expected
 */
describe('Two player game', () => {

    it("Should player against another user",()=>{
      cy.visit('http://127.0.0.1:5173/')
      cy.get('[data-id="player2-btn"]').click()
      cy.get('#player1').type("richard")
      cy.get("#player2").type("tobbe")
      cy.get('#start_game').click()

      cy.get("#rock").click()
      cy.get("#paper").click()
      cy.get("#winner").should("contain","tobbe WIN")
      cy.get('#user2_score').should("contain","tobbe score: 1")
      cy.get('#num_round_played').should("contain", 1 )
      cy.get(".history_length").should("have.length", 1)

      cy.get('#play_again').click()


      cy.get("#scissors").click()
      cy.get("#paper").click()
      cy.get("#winner").should("contain","richard WIN")
      cy.get('#user1_score').should("contain","richard score: 1")
      cy.get('#num_round_played').should("contain", 2 )
      cy.get(".history_length").should("have.length", 2)
        
      cy.get('#play_again').click()

      cy.get("#paper").click()
      cy.get("#paper").click()
      cy.get("#winner").should("contain","IT'S DRAW")
      cy.get('#user1_score').should("contain","richard score: 1")
      cy.get('#user2_score').should("contain","tobbe score: 1")
      cy.get('#num_round_played').should("contain", 3 )
      cy.get(".history_length").should("have.length", 3)

    
    })
  
  
  })