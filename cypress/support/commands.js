// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let Chance = require('chance')
let chance = new Chance

//login conduit
Cypress.Commands.add('loginConduit', (email, password) => {
    cy.visit('https://demo.realworld.io/#/login')
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('button[type="submit"]').click() 
})

//login contact
Cypress.Commands.add('loginContact', () => {
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[placeholder="First Name"]').type(chance.first())  
    cy.get('input[placeholder="Last Name"]').type(chance.last())
    cy.get('input[placeholder="Email Address"]').type(chance.email())
    cy.get('textarea[placeholder="Comments"]').type(chance.paragraph())

})
