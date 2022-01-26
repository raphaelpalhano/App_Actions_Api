/// <reference types="cypress" />

import writter from '../../support/locators/writter.js'


describe('Feature login page', () => {

  
    before(() => {
        cy.visit('/')
        cy.login()
    })
    

    it('Sign in barrigareact', () => {
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Bem vindo, rafas!')
        })
    })
})