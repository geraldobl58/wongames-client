/// <reference path="../support/index.d.ts" />

import { priceFields, platformFields, sortFields, genreFields } from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {


    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
  })

  it('should show 9 games and show more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 9)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 18)
  })

})
