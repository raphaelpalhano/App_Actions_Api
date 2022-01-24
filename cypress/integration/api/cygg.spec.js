


const faker = require('faker')
const datas = require('../../fixtures/datasRandom.json')

describe('', () => {

    const company = ''

    before('', () => {
        cy.visit('https://docs.cypress.io/api/commands/intercept#Syntax')
        cy.generateFixture()
        
    })

    it('', () => {
        cy.get('div[id="docsearch"] > button').type('cycy')
    })
})