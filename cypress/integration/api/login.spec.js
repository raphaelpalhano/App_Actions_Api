/// <reference types="cypress" />

import * as user from '../../fixtures/users.json'



describe('Acessing BarrigaReact', () =>{
    

    const endpoint = 'signin'


    it('Validated Status code', () => {
       cy.login_request(user.user1, endpoint).then(response => {
           cy.wrap(response.status).should('be.eq', 200)
       })
    
    })

    it('Valide Token generate', () => {
        cy.login_request(user.user1, endpoint).then(response => {
            cy.wrap(response).its('body.token').should('contains', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.')
        })
    })
   
    it('Invalid User', () =>{
        cy.login_request_fail(user.user2, endpoint).then(response => {
            cy.wrap(response).its('status').should('equal', 400)
        })
    })

    
})