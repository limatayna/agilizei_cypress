let Chance = require('chance')
let chance = new Chance



describe('cadastro automacao', () => {
    it('cadastro login', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.get('[ng-model="FirstName"]').type(chance.first())
    cy.get('[ng-model="LastName"]').type(chance.last())
    cy.get('[ng-model="Adress"]').type(chance.address())
    cy.get('[ng-model="EmailAdress"]').type(chance.email())
    cy.get('[ng-model="Phone"]').type(chance.phone())
    cy.get('[ng-model="radiovalue"]').check('FeMale')
    cy.get('#checkbox2').check('Movies')
    cy.get('#checkbox3').check('Hockey')
    cy.get('#Skills').select('CSS')
    cy.get('select#country').select('Australia', { force:true });
    cy.get('select#countries').select('Select Country')          
    cy.get('#yearbox').select('1987')
    cy.get('[ng-model="monthbox"]').select('April')
    cy.get('#daybox').select('7')
    cy.get('[ng-model="Password"]').type('ene123')
    cy.get('[ng-model="CPassword"]').type('ene123')
    cy.get('#submitbtn').click()
    });
});