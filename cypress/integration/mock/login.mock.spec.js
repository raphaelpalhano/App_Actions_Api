/// <reference types="cypress" />


describe('Feature login page', () => {

    before(() => {
        cy.intercept()
        cy.login()
    })
    

    it('Sign in barrigareact', () => {
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Bem vindo, rafas!')
        })
    })
})