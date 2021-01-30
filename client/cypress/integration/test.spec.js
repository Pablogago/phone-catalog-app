describe('API testing', () => {
  it('GET - read', () => {
    cy.request('GET', "http://localhost:3005/phones ").then((response) => {
      expect(response).to.have.property('status', 200)
      expect(response.body).to.not.be.null
    })
  })
  it('Visit web ', () => {
    cy.visit('http://localhost:3001/')
  })
  it('check login', () => {
    cy.get('h1')
    .should('be.visible')
    cy.contains('Loading')
  })
  it('check phones', () => {
    cy.get('.homepage')
    .should('be.visible')
    cy.get('.homepage__section').first().click()
  } )
  it('Check phone data',() => {
    cy.get('.phonepage__box')
    .should('be.visible')
    cy.get('.phonepage__img')
    .should('be.visible')
    cy.get('.phonepage__img')
    .click()
    .should('have.css', 'justify-content')
    cy.get('.phonepage__specs').first()
    .should('be.visible')
    cy.contains('manufacturer')
    cy.get('go-back-icon').click()
    cy.get('.homepage')
    .should('be.visible')
    cy.get('header')
    cy.contains('Phone catalog')
  })
})

