/// <reference types="cypress" />

Cypress.Commands.add('create_account', (name_account, token, endpoint) =>{
        cy.request({
            method: 'POST', 
            url: `${Cypress.env('host')}${endpoint}`,
            headers: {
                Accept: 'application/json, text/plain, */*',
                Accept_Encoding: 'gzip, deflate, br',
                Authorization: `JWT ${token}`
            },
            body: {
                nome: name_account
            }

        })
})
