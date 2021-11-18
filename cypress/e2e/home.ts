/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanners()
    cy.shouldRenderShowcase({ name: "New Games" })
    cy.shouldRenderShowcase({ name: "Most Popular Games" })
    cy.shouldRenderShowcase({ name: "Upcomming Games" })
    cy.shouldRenderShowcase({ name: "Free Games" })
  })
})
