/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance


describe('teste 12', () => {
    it('cadastro', () => {
        const firtname = chance.first()
        const email = chance.email()
        const setenca = chance.sentence()
        cy.intercept('GET', '**/index.php?rt=r/product/product/addToCart').as('loginExerc')
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.url().should('contain', '/contact')
        cy.get('.maintext').should('contain', ' Contact Us')
        cy.get('.col-md-6.pull-left').should('contain', 'Address:')
        cy.get('.col-md-6.pull-right').should('contain', 'Telephone:')
        cy.get('.heading3.form_description').should('contain', 'Contact Us Form')
        cy.get('#ContactUsFrm_first_name').type(firtname).should('contain.value', firtname)
        cy.get('#ContactUsFrm_email').type(email).should('contain.value', email)
        cy.get('#ContactUsFrm_enquiry').type(setenca).should('contain.value', setenca)
        cy.get('button[class="btn btn-primary lock-on-click"]').click()
        cy.wait('@loginExerc').then(({response}) => {
            expect(response.statusCode).to.eq(200)
            }) 






        
    });
});