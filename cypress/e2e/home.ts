/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

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
})
