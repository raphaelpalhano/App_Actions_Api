import loc from '../../locators/login.locator'

Cypress.Commands.add('login', (username = Cypress.env('email'), password = Cypress.env('password')) =>{

    cy.get(loc.user_input).type(username)
    cy.get(loc.password_input).type(password)
    cy.get(loc.button_submit).click()
    
})

