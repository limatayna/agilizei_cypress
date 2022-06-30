/// <reference types="cypress" />

describe('contact', () => {
    it('cadastro com sucesso', () => {
        cy.intercept('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html').as('contactLogin') 
        cy.loginContact()
        cy.get('input[type="submit"]').click()
        cy.wait('@contactLogin').then(({response}) => {
            expect(response.statusCode).to.eq(200) 
        })
    })
    it('resert', () => {
        cy.loginContact()
        cy.get('input[type="reset"]').click()  
    });
    
    it('falha em servico', () => {
        cy.intercept('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html',{statusCode:402}).as('contactLogin')    
        cy.loginContact()
        cy.get('input[type="submit"]').click()
        cy.wait('@contactLogin')
    });
})

