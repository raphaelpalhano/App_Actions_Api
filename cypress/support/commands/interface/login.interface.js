import loc from '../../../modules/locators/login.locator.js'

Cypress.Commands.add('login', (username = Cypress.env('email'), password = Cypress.env('password')) =>{
    cy.visit('/')
    cy.get(loc.user_input).type(username)
    cy.get(loc.password_input).type(password)
    cy.get(loc.button_submit).click()
    
})

