/// <reference types="cypress" />

Cypress.Commands.add('create_account', (name_account, endpoint) =>{
        cy.request({
            method: 'POST', 
            url: `${endpoint}`,
            body: {
                nome: name_account
            }

        })
})
