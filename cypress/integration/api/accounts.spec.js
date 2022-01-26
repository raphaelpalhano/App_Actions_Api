///// <reference types="cypress" />

const datas = require('../../fixtures/datasRandom.json')

const faker = require('faker')


describe('create account barriga', () =>{
    const endpoint = `${Cypress.env('urlAPI')}contas`   
    let randomName

    before('Generate token', () => {
        cy.getToken(`${Cypress.env('urlAPI')}signin`)
        randomName = faker.name.findName();
    })

   
  
    it('Create random accounts', () => {
         
        cy.create_account(randomName, endpoint).then(re => 
            cy.wrap(re).its('status').should('be.eq', 201))    
    })
    
})

