/// <reference types="cypress" />

const Leite = require('leite')
const leite = new Leite()

describe('agilizei', () => {
    it('cadastro', () => {
    cy.visit('https://form-agilizei.netlify.app/')
    cy.get('input[placeholder="Nome"]').type(leite.pessoa.primeiroNome())
    cy.get('input[placeholder="Sobrenome"]').type(leite.pessoa.sobrenome())
    cy.get('textarea[name="adress"]').type(leite.localizacao.logradouro())
    cy.get('input[name="emailAdress"]').type(leite.pessoa.email())
    cy.get('input[value="n"]').check()
    cy.get('#checkbox1').check()
    cy.get('#checkbox2').check()
    cy.get('#checkbox3').check()
    cy.get('select#countries').select('Dinamarca', {force: true})
    cy.get('select#years').select('1987', {force: true})
    cy.get('select#months').select('Abril', {force: true})
    cy.get('select#days').select('7', {force: true})
    cy.get('#firstpassword').type('Ene123')
    cy.get('#secondpassword').type('Ene123')
    cy.get('#submitbtn').click()
    cy.url().should('contain','/listagem.html')
    cy.get('#section').should('contain', 'Listagem');   
    });
});