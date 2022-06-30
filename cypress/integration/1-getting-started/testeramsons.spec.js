/// <reference types="cypress" />

const Leite = require('leite')
const leite = new Leite()

describe('fluxo', () => {
    it('teste', () => {
    cy.intercept('GET', '**cadastro/sucesso').as('loginRamsons')
    cy.intercept('POST', '**/app/addressprovider')    
    cy.visit('https://www.ramsons.com.br/cadastro?')
    cy.get('#customer-type-person').click
    cy.get('#AddOrSetCustomer-Name').type(leite.pessoa.primeiroNome())
    cy.get('#AddOrSetCustomer-Surname').type(leite.pessoa.sobrenome())
    cy.get('#AddOrSetCustomer-BirthDate').type(leite.pessoa.nascimento({ formato: 'DD/MM/YYYY' }))
    cy.get('#AddOrSetCustomer-Gender').select('N')
    cy.get('#AddOrSetCustomer-Cpf').type(leite.pessoa.cpf())
    cy.get('#AddOrSetCustomer-ExtendedProperties-0-Value_Option').select('1361')
    cy.get('#AddOrSetCustomer-Email').type(leite.pessoa.email())
    cy.get('#AddOrSetCustomer-Contact-CellPhone').type('92981015382')
    cy.get('#AddOrSetCustomer-Contact-Phone').type('9232377339')
    cy.get('#AddOrSetAddress-0-Name').type('Casa')
    cy.get('#AddOrSetAddress-0-Name').type(leite.pessoa.primeiroNome())
    cy.get('#AddOrSetAddress-0-PostalCode').type('69076-790', '+{enter}')
    cy.get('#AddOrSetAddress-0-Number').type('1301')
    cy.get('#AddOrSetCustomer-Password').type('ene123')
    cy.get('#AddOrSetCustomer-Password-check').type('ene123')
    cy.get('button[class="bt-submit"]').click()
    cy.wait('@loginRamsons').then(({response}) => {
        expect(response.statusCode).to.eq(200)
        })







});
});    