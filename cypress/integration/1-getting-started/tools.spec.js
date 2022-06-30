/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance

describe('cadastro forms', () => {
    it('formulario', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type(chance.first())
        cy.get('#lastName').type(chance.last())
        cy.get('#userEmail').type(chance.email())
        cy.get('#gender-radio-2').check({force: true})
        cy.get('#userNumber').type(chance.phone({ formatted: false }))
        cy.get('#subjectsContainer').type('Testes')
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#hobbies-checkbox-2').check({force: true})
        cy.get('#hobbies-checkbox-3').check({force: true})
        cy.get('#currentAddress').type(chance.address())
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('NCR'+'{enter}')
        cy.get('#city').type('Noida'+'{enter}')
        cy.get('#submit').click()
        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
        cy.get('#closeLargeModal').click({force: true})

    });
});