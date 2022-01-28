///// <reference types="cypress" />
import accountFactory from '../../modules/factories/accountFactory.js'

describe("create account barriga", () => {
  const endpoint = `${Cypress.env("urlAPI")}contas`;



  before("Generate token", () => {
    cy.getToken(`${Cypress.env("urlAPI")}signin`);
    
  });

  it("Create random accounts", () => {
    cy.create_account(accountFactory.generatorData().name, endpoint).then((re) =>
      cy.wrap(re).its("status").should("be.eq", 201)
    );
  });

  it("get all accounts", () => {
    cy.get_accounts(endpoint).then((res) => {
      cy.wrap(res.body).each(($list) => {
        cy.wrap($list).its("nome").should("not.be.empty");
      });
    });
  });
});
