/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance

describe('fluxo site cea', () => {
    it('cadastro de novo login', () => {
    cy.intercept('GET', '**/prod/cea/profile?**').as('getEmail') 
    cy.visit('https://www.cea.com.br/login?returnUrl=https://www.cea.com.br/')
    cy.get('#open_pre-registration').click()
    cy.get('#PCL_email').type(chance.email())
    cy.get('#CL_Enviar_Pre').click()
    cy.get('#CL_CPF').type(chance.cpf())
    cy.get('#completeName').type(chance.name())
    cy.get('#CL_telefone').type(chance.phone())
    cy.get('#CL_gender').check()
    cy.get('#CL_password_1').type('Ene12345')
    cy.get('#CL_password_2').type('Ene12345')
    cy.get('input[type=checkbox]').first().check({force: true})
    cy.get('#CL_Enviar').click()
    cy.get('#np_token_recovery_coe').type('925531')
    cy.get('#btnCompleteRegister').click()
    cy.wait('@getEmail').then(({response}) => {
        expect(response.statusCode).to.eq(200)
        })
    


        
    });
});