
const Leite = require('leite')
const leite = new Leite()

describe('cadastro bemol', () => {
    it('fluxo de cadastro', () => {
        cy.intercept('https://www.bemol.com.br/cadastro/sucesso').as('loginBemol')
        cy.visit('https://www.bemol.com.br/cadastro')
        cy.get('#customer-type-person').type('Person')
        cy.get('#AddOrSetCustomer-Name').type(leite.pessoa.primeiroNome())
        cy.get('#AddOrSetCustomer-Surname').type(leite.pessoa.sobrenome())
        cy.get('#AddOrSetCustomer-BirthDate').type(leite.pessoa.nascimento({ string: true }))
        cy.get('#AddOrSetCustomer-Gender').select('F')
        cy.get('#AddOrSetCustomer-Cpf').type(leite.pessoa.cpf())
        cy.get('#AddOrSetCustomer-Rg').type(leite.pessoa.rg())
        cy.get('#AddOrSetAddress-0-PostalCode').type('69076-790')
        cy.get('#AddOrSetAddress-0-Number').type('1301')
        cy.get('#AddOrSetAddress-0-AddressNotes').type(leite.localizacao.complemento())
        cy.get('#AddOrSetAddress-0-Landmark').type('casa')
        cy.get('#AddOrSetCustomer-Contact-Phone').type('9232377339')
        cy.get('#AddOrSetCustomer-Contact-CellPhone').type('92981015382')
        cy.get('#AddOrSetCustomer-Email').type(leite.pessoa.email())
        cy.get('#AddOrSetCustomer-Password').type('ene123')
        cy.get('#AddOrSetCustomer-Password-check').type('ene123')
        cy.get('button.bt-submit').click()
        cy.wait('@loginBemol').then(({response}) => {
            expect(response.statusCode).to.eq(200)
            })
        cy.url().should('contain', '/sucesso')
        cy.get('p.message').should('have.text','Falta pouco para concluir seu cadastro. Aguarde o e-mail de confirmação para efetuar o login.')
    
    }); it.only(' itens obrigatorios', () => {
        cy.visit('https://www.bemol.com.br/cadastro')
        cy.get('button.bt-submit').click()
        cy.get('#AddOrSetCustomer-Name-error').should('contain', 'Preencha o campo Nome')
        cy.get('#AddOrSetCustomer-Surname-error').should('contain', 'Preencha o campo Sobrenome')
        cy.get('#AddOrSetCustomer-BirthDate-error').should('contain', 'Preencha o campo data de Nascimento')
        cy.get('#AddOrSetCustomer-Cpf-error').should('contain', 'Preencha o campo CPF')
        cy.get('#AddOrSetAddress-0-PostalCode-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-AddressLine-error').should('contain','O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-Number-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-Neighbourhood-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-AddressNotes-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-City-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-State-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetAddress-0-Landmark-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetCustomer-Contact-CellPhone-error').should('contain', 'O campo não pode estar em branco')
        cy.get('#AddOrSetCustomer-Password-error').should('contain', 'Preencha o campo senha')
    }); 
    /// <reference types="cypress" />

describe('CADASTRO', () => {
    it('CADASTRO COM REQUEST', () => {
     cy.visit('https://www.bemol.com.br')
     cy.request({
      url: 'https://www.bemol.com.br/cadastro',
      method: 'POST',
      // form: true,
      body:{
      "AddOrSetCustomer.CustomerType": 'Person',
      "AddOrSetCustomer.Name": 'Amanda',
      "AddOrSetCustomer.Surname": 'Rebeca Caldeira',
      "AddOrSetCustomer.BirthDate": '29/06/1983',
      "AddOrSetCustomer.Gender": 'F',
      "AddOrSetCustomer.Cpf": '023.391.218-50',
      "AddOrSetCustomer.Rg": '',
      "AddOrSetCustomer.TradingName": '',
      "AddOrSetCustomer.Cnpj": '',
      "AddOrSetAddress[0].ID": '',
      "AddOrSetAddress[0].IsMainAddress":'', 
      "AddOrSetAddress[0].SetAsBillingAddress": '', 
      "AddOrSetAddress[0].Name": 'Casa',
      "AddOrSetAddress[0].ContactName":'Amanda  Rebeca Caldeira',
      "AddOrSetAddress[0].PostalCode": '38400-390',
      "AddOrSetAddress[0].AddressLine": 'Rua Engenheiro Azelli',
      "AddOrSetAddress[0].Number": '145',
      "AddOrSetAddress[0].AddressNotes": 'CASA 2',
      "AddOrSetAddress[0].Neighbourhood": 'Osvaldo Rezende',
      "AddOrSetAddress[0].City": 'Uberlândia',
      "AddOrSetAddress[0].State": 'MG',
      "AddOrSetAddress[0].Landmark": 'PERTO DA IGREJA',
      "AddOrSetAddress[0].SetAsShippingAddress": 'True',
      "AddOrSetCustomer.Contact.Phone": '(34) 9997-6409',
      "AddOrSetCustomer.Contact.CellPhone": '(34) 99911-2345',
      "AddOrSetCustomer.Email": 'betinajessicarebecacaldeira@maptec.com.br',
      "AddOrSetCustomer.Password": 'ENE1234',
      "AddOrSetCustomer.Password_Check": 'ENE1234'
      },
    }).then(response => {
        console.log(response)
    })
    cy.url().should('contain', '/cadastro/sucesso')
  })
})

}); 
