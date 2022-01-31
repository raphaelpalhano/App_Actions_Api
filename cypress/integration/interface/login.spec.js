/// <reference types="cypress" />

import * as user from '../../fixtures/users.json'


describe('GUI: Feature login page', () => {

    before(() => {
        cy.login()
    })
    
    


    it('Sign in barrigareact', () => {
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Bem vindo, rafas!')
        })
    })

    it('Invalid Login', () => {
        cy.login(user.user2.email, user.user2.password)
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Erro: Error: Request failed with status code 400')
        })
       
    })
})