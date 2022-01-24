/// <reference types="cypress" />


Cypress.Commands.add('login_request', (user,endPoint) =>{
    Cypress.env('host', 'https://barrigarest.wcaquino.me/')
    cy.request({
        method: 'POST',
        url: `${Cypress.env('host')}${endPoint}`,
        body: {
            email: user.email, 
            senha: user.password,
            redirecionar: false
        }

    })

})

Cypress.Commands.add('getToken', (user,endPoint) =>{
    Cypress.env('host', 'https://barrigarest.wcaquino.me/')
    cy.request({
        method: 'POST',
        url: `${Cypress.env('host')}${endPoint}`,
        body: {
            email: user.email, 
            senha: user.password,
            redirecionar: false
        }

    }).its('body.token').should('not.be.empty').then(token => {
        return token
    })

})

Cypress.Commands.add('login_request_fail', (user,endPoint) =>{
    
    cy.request({
        method: 'POST',
        url: `https://barrigarest.wcaquino.me/${endPoint}`,
        failOnStatusCode: false,
        body: {
            email: user.email, 
            senha: user.password,
            redirecionar: false
        }

    })


    


})