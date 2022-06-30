/// <reference types="cypress" />

describe('menus', () => {
    it('montagem de selects', () => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-3').select('CSS')
        cy.get('input[type=checkbox]').check(['option-2', 'option-4'])
        cy.get('input[type=checkbox]').uncheck('option-3')
        cy.get('input[value="yellow"]').click()
        cy.get('input[value="pumpkin"]').click()
        cy.get('#fruit-selects').select('Apple')
        
    });
});