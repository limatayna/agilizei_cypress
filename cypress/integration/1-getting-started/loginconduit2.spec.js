/// <reference types="cypress" />
describe('login2', () => {
    it('novo cadastro', () => {
    cy.intercept('POST', '**/api/users').as('postLogin2')
    cy.visit('https://demo.realworld.io/#/register')
    cy.get('input[placeholder="Username"]').type('Tayna')
    cy.get('input[placeholder="Email"]').type('tayna.lima@enesolucoes.com.br')
    cy.get('input[placeholder="Password"]').type('ene123')
    cy.get('button[type="submit"]').click()
    cy.wait('@postLogin2').then(({response}) => {
      expect(response.statusCode).to.eq(307)
      })
    
    });
});