/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/biomutant')

    cy.wait(10000);

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Biomutant/i }).should('exist')
      cy.findByText(/^Preorder now to get the Special Mercenary/i).should('exist')
      cy.findByText('$199.09').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)
  })
})
