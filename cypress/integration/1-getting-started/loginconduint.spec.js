/// <reference types="cypress" />
describe('login', () => {
    it('loginconduint', () => {
        cy.intercept('POST', '**/api/users/login').as('postLogin')
        cy.loginConduit('tayna.lima@enesolucoes.com.br', 'ene123')
        cy.wait('@postLogin').then(({response}) => {
          expect(response.statusCode).to.eq(307)    
        })  
    });
    it('falha no login', () => {
        cy.intercept('POST', '**/api/users/login', {statusCode:500}).as('postLogin')    
        cy.loginConduit('tayna.lima@enesolucoes.com.br', 'ene123')
        cy.wait('@postLogin')
    });

    it('credencias invalidas', () => {
      cy.intercept('https://api.realworld.io/api/users/login').as('postLogin')  
      cy.loginConduit('tayna.lima@enesolucoes.com.br', 'eneskdk123')
      cy.wait('@postLogin').then(({response}) => {
          expect(response.statusCode).to.eq(403)
      })

    });
});