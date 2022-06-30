/// <reference types="cypress" />
let Chance = require('chance')
let chance = new Chance

describe('login', () => {
    it('exercicios', () => {
        cy.intercept('GET', '**/pagead/id').as('raiugaTeste')
        cy.visit('http://www.raiuga.com.br/')
        cy.get('input[placeholder="seu nome"]').type(chance.name())
        cy.get('input[placeholder="seu e-mail"]').type(chance.email())
        cy.get('input[type="submit"]').click()
        cy.wait('@raiugaTeste').then(({response}) => {
            expect(response.statusCode).to.eq(200)    
          })
        
        
    });
});
