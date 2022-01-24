Cypress.Commands.add('login', (username = Cypress.env('email'), password = Cypress.env('password')) =>{

    cy.get('div[class="input-group"] > input[data-test="email"]').type(username)
    cy.get('div[class="form-group"] > input[data-test="passwd"]').type(password)
    cy.get('div[class="form-group"] ~ button').click()
    
})