import NameForm from "../../src/Components/NameForm"

describe('used to select the mode of the game', () => {
  it('single game mode select', () => {
    const onSubmitSpy = cy.spy().as('onSubmitSpy');
     cy.mount(<NameForm onSubmit={onSubmitSpy} numPlayers={1} />)
     cy.get("#player1").type("jonael")
     cy.get("#start_game").click()
     cy.get("@onSubmitSpy").should('have.been.calledWith',"jonael")
  })

  it('double game mode select', () => {
    const onSubmitSpy = cy.spy().as('onSubmitSpy');
     cy.mount(<NameForm onSubmit={onSubmitSpy} numPlayers={2} />)
     cy.get("#player1").type("jonael")
     cy.get("#player2").type("alex")
     cy.get("#start_game").click()
     cy.get("@onSubmitSpy").should('have.been.calledWith',"jonael", "alex")
  })
  it('catch error on single game mode select', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    })
     cy.mount(<NameForm numPlayers={1} />)
     cy.get("#player1")
     cy.get("#start_game").click()
     cy.get('@alertStub').should('be.calledWith',"You need to pass a name1")
  })

  it('catch error on double game mode select', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    })
     cy.mount(<NameForm numPlayers={2} />)
     cy.get("#player1").type('tobbe')
     cy.get("#player2")
     cy.get("#start_game").click()
     cy.get('@alertStub').should('be.calledWith',"You need to pass a name2")
  })
})