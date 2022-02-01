/// <reference types="cypress" />
import * as user from '../../fixtures/users.json'

describe('MOCK: Feature login page', () => {


    it('Login Invalid', () => {
        cy.intercept_login('datasRandom.json')
    })
   

    it('Sign in barrigareact', () => {
        cy.on('window:alert', msg => {
            cy.wrap(msg).should('be.eq', 'Bem vindo, burlado!')
        })
    })

    it('Invalid login mensage', () => {
        cy.intercept_login('errorLogin.json', user.user2.email, user.user2.password)
        
    })
})