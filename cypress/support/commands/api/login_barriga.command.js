/// <reference types="cypress" />



Cypress.Commands.add('login_request', (endPoint,username = Cypress.env('email'), password = Cypress.env('password')) =>{

    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlApi')}${endPoint}`,
        body: {
            email: username, 
            senha: password,
            redirecionar: false
        }

    })

})



Cypress.Commands.add('getToken',(endPoint, username = Cypress.env('email'), password = Cypress.env('password')) =>{
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlApi')}${endPoint}`,
        body: {
            email: username, 
            senha: password,
            redirecionar: false
        }

    }).its('body.token').should('not.be.empty').then(token => {
        return token
    })

})

Cypress.Commands.add('login_request_fail', (endPoint,username = Cypress.env('email'), password = Cypress.env('password')) =>{
    
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlApi')}${endPoint}`,
        failOnStatusCode: false,
        body: {
            email: username, 
            senha: password,
            redirecionar: false
        }

    })



})