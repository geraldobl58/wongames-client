/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanners()
    cy.shouldRenderShowcase({ name: "New Games", highlight : true})
    cy.shouldRenderShowcase({ name: "Most Popular Games",  highlight : true })
    cy.shouldRenderShowcase({ name: "Upcomming Games",  highlight : true })
    cy.shouldRenderShowcase({ name: "Free Games",  highlight : true })
  })
})
