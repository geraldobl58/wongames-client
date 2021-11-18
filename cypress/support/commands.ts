// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('shouldRenderBanners', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /Biomutant é um RPG de ação desenvolvido pelo desenvolvedor sueco Experiment 101 e publicado pela THQ Nordic./i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(3) > button').click()

    cy.findByRole('heading', { name: /You awake in a nightmarish carnival and watch a golden-haired woman hurl herself down a bottomless well for your sake./i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole('heading', { name }).should('exist')
  })

  cy.get(`[data-cy="highlight"]`).should('highlight' ? 'exist' : 'not.exist')

  if (highlight) {
    cy.get(`[data-cy="highlight"]`).within(() => {
      cy.findByRole('link').should('have.attr', 'href')
    })
  }

  cy.get(`[data-cy="game-card"]`).should('have.length.gt', 0)
})
