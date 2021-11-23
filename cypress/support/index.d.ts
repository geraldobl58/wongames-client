// load type definations from Cypress module
/// <reference types="cypress" />

type User = {
  username: string
  email: string
  password: string
}

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to sign in
     * @example cy.signUp({ username: 'john', email: 'johndoe@email.com', 'password: '123' })
     */
     signUp(user: User): Chainable<Element>

     /**
     * Custom command to sign in
     * @example cy.signIn()
     */
      signIn(email?: string, password?: string): Chainable<Element>

     /**
     * Custom command to sign in
     * @example cy.addToCartByIndex(2)
     */
      addToCartByIndex(index: number): Chainable<Element>

     /**
     * Custom command to sign in
     * @example cy.removeFromCartByIndex(3)
     */
      removeFromCartByIndex(index: number): Chainable<Element>

     /**
     * Custom command to get element by data-cy values
     * @example cy.getByDataCy('selector')
     */
      getByDataCy(selector: string): Chainable<Element>

      /**
     * Custom command to get by label
     * @example cy.getFields([{ label: 'foo', name: 'foo }])
     */
      getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanners()
     */
     shouldRenderBanners(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
      shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to check if value is less than price
     * @example cy.shouldBeLessThan(100)
     */
      shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is greater than price
     * @example cy.shouldBeGreaterThan(50)
     */
      shouldBeGreaterThan(value: number): Chainable<Element>
  }
}
