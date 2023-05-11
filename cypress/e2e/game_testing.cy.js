
describe('The home page', () => {
  it('It successfully load', () => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it("Should player against the computer",()=>{
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-id="player1-btn"]').click()
    cy.get('#player1').type("richard")
    cy.get('#start_game').click()
    cy.get('#rock').click()
    cy.get('#play_again').click()

    cy.get('#num_round_played').should("contain", 1 )

    cy.get('#paper').click()
    cy.get('#play_again').click()
    cy.get('#num_round_played').should("contain", 2 )

    cy.get('#scissor').click()
    cy.get('#play_again').click()
    cy.get('#num_round_played').should("contain", 3)



  })
})