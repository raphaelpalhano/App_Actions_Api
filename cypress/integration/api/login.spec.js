/// <reference types="cypress" />

import * as user from '../../fixtures/users.json'



describe('Acessing BarrigaReact', () =>{
    

    const endpoint = `${Cypress.env('urlAPI')}signin`


    it('Validated Status code', () => {
       cy.login_request(endpoint).then(response => {
           cy.wrap(response.status).should('be.eq', 200)
       })
    
    })

    it('Valide Token generate', () => {
        cy.login_request(endpoint).then(response => {
            cy.wrap(response).its('body.token').should('contains', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ')
        })
    })
   
    it('Invalid User', () =>{
        cy.login_request_fail( endpoint, user.user2.email, user.user2.password).then(response => {
            cy.wrap(response).its('status').should('equal', 400)
        })
    })

    
})