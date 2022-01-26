/// <reference types="cypress" />

Cypress.Commands.overwrite('request', (originalFunction, ...options) =>{
    if(options.length == 1){
        if(Cypress.env('token')){
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
        }
        
    }

    return originalFunction(...options)
})