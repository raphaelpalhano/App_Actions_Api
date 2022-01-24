///// <reference types="cypress" />

import * as user from '../../fixtures/users.json';

const datas = require('../../fixtures/datasRandom.json')

const faker = require('faker')


describe('create account barriga', () =>{
    const endpoint = 'contas'   
    let token;
    let randomName

    before('Generate token', () => {
        cy.getToken(user.user1, 'signin').then(tk => {
            token = tk
        })
        randomName = faker.name.findName();
    })
  
    it('Create random accounts', () => {
         
        cy.create_account(randomName, token, endpoint).then(re => 
            cy.wrap(re).its('status').should('be.eq', 201))    
    })
    
})

