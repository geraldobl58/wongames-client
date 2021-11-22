/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  const user = createUser()

  it('should sign up', () => {
    cy.visit('/sign-up')

    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /sign up now/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')

  })
});
