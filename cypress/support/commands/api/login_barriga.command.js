/// <reference types="cypress" />



Cypress.Commands.add('login_request', (endPoint,username = Cypress.env('email'), password = Cypress.env('password')) =>{

    cy.request({
        method: 'POST',
        url: `${endPoint}`,
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
        url: `${endPoint}`,
        body: {
            email: username, 
            senha: password,
            redirecionar: false
        }

    }).its('body.token').should('not.be.empty').then(token => {
        Cypress.env('token', token)
        return token
    })

})

Cypress.Commands.add('login_request_fail', (endPoint,username = Cypress.env('email'), password = Cypress.env('password')) =>{
    
    cy.request({
        method: 'POST',
        url: `${endPoint}`,
        failOnStatusCode: false,
        body: {
            email: username, 
            senha: password,
            redirecionar: false
        }

    })



})