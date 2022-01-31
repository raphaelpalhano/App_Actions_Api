import loc from '../../../modules/locators/login.locator.js'


Cypress.Commands.add('intercept_login', (response, username = Cypress.env('email'), password = Cypress.env('password')) =>{
   
    cy.intercept(
        {
            method: 'POST',
            url: '/signin',
        },
        {
            fixture: response
        }
    )

    cy.visit('/')
    cy.get(loc.user_input).type(username)
    cy.get(loc.password_input).type(password)
    cy.get(loc.button_submit).click()
})
