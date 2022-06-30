/// <reference types="cypress" />

const Leite = require('leite')
const leite = new Leite()


describe('fluxo madeira', () => {
    it('cadastro', () => {
        //cy.intercept('POST', '**/async/login').as('postLogin')
        cy.visit('https://www.madeiramadeira.com.br/cadastro')
        cy.get('button[class="button button--is-secondary button--is-outline helper--is-full-width helper--has-margin-bottom"]').click({force: true})
        cy.get('#pre-register-tax-payer-id').type(leite.pessoa.cpf())
        cy.get('#pre-register-name').type(leite.pessoa.nome(), {force: true})
        cy.get('#pre-register-cellphone').type('92981015382', {force: true})
        cy.get('#pre-register-email').type(leite.pessoa.email(), {force: true})
        cy.get('#pre-register-password').type('Ene123!', {force: true})
        cy.get('#pre-register-check-terms').check()
        cy.get('#pre-register-check-sms').should('be.checked')
        cy.get('#pre-register-check-whatsapp').uncheck()
        cy.get('#pre-register-handler').click({force: true})
        //cy.wait('@postLogin').then(({response}) => {
            //expect(response.statusCode).to.eq(200)
            //})
    }); 
    
    it('itens obrigatorios', () => {
        cy.visit('https://www.madeiramadeira.com.br/cadastro')
        cy.get('button[class="button button--is-secondary button--is-outline helper--is-full-width helper--has-margin-bottom"]').click({force: true})
        cy.get('#pre-register-check-terms').uncheck()
        cy.get('#pre-register-handler').click({force: true})
    });
});