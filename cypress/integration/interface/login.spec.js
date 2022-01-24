/// <reference types="cypress" />

describe('Feature login page', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.login()
    })

    it('Sign in barrigareact', () => {
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Bem vindo, rafas!')
        })
    })
})