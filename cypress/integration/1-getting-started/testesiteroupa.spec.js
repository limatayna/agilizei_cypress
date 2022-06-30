let Chance = require('chance')
let chance = new Chance

describe('fluxo de cadastro', () => {
    it('primeiro cadastro', () => {
        cy.visit('http://automationpractice.com/')
        cy.get('[title="Log in to your customer account"]').click()
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()
        cy.wait(6000)
        cy.get('#id_gender2').check()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())
        cy.get('#passwd').type('ene123')
        cy.get('#days').select('7')
        cy.get('#months').select('April')
        cy.get('#years').select('1987')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#id_state').select('Arizona')
        cy.get('#city').type(chance.city())
        cy.get('#postcode').type(chance.zip())
        cy.get('#phone').type(chance.phone())
        cy.get('#phone_mobile').type(chance.phone())
        cy.get('#submitAccount').click()


    });
});