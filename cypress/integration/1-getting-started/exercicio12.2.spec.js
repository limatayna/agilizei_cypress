/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance

describe('validacao', () => {
    const firtname = chance.first()
    const email = chance.email()
    const setenca = chance.sentence()
    beforeEach(() => {
    cy.visit('https://automationteststore.com/')    
    })
    it('teste1', () => {
    cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
    cy.url().should('contain', '/contact')
    cy.get('.maintext').should('contain',  'Contact Us')
    cy.get('.col-md-6.pull-left').should('contain', 'Address:')
    cy.get('.col-md-6.pull-right').should('contain', 'Telephone:')
    }); 
    it('Validar form', () => {
    cy.intercept('GET', '**/index.php?rt=r/product/product/addToCart').as('validarForm')
    cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
    cy.url().should('contain', '/contact')
    cy.get('.heading3.form_description').should('contain', 'Contact Us Form')
    cy.get('#ContactUsFrm_first_name').type(firtname).should('contain.value', firtname)
    cy.get('#ContactUsFrm_email').type(email).should('contain.value', email)
    cy.get('#ContactUsFrm_enquiry').type(setenca).should('contain.value', setenca)
    cy.get('button[class="btn btn-primary lock-on-click"]').click()
    cy.wait('@validarForm').then(({response}) => {
        expect(response.statusCode).to.eq(200)
        }) 
});
    it.only('itens obrigatorios', () => {
    cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
    cy.url().should('contain', '/contact')
    cy.get('button[class="btn btn-primary lock-on-click"]').click()
    cy.get('div[id="field_11"] span[class="required"]').should('contain', '*')
    cy.get('div[id="field_11"] .element_error.has-error').should('contain', 'First name: is required field! Name must be between 3 and 32 characters!')
    cy.get('div[id="field_12"] span[class="required"]').should('contain', '*')
    cy.get('div[id="field_12"] .element_error.has-error').should('contain', 'Email: is required field! E-Mail Address does not appear to be valid!')
    cy.get('div[id="field_13"] span[class="required"]').should('contain', '*')
    cy.get('div[id="field_13"] .element_error.has-error').should('contain', 'Enquiry: is required field! Enquiry must be between 10 and 3000 characters!')

});
    it('botão refresh', () => {
    cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
    cy.url().should('contain', '/contact')
    cy.get('button[class="btn btn-primary lock-on-click"]').click()
    cy.get('#ContactUsFrm_first_name').type(firtname).should('contain.value', firtname)
    cy.get('#ContactUsFrm_email').type(email).should('contain.value', email)
    cy.get('#ContactUsFrm_enquiry').type(setenca).should('contain.value', setenca)
    cy.get('button[class="btn btn-default pull-left"]').click  
});
      
});