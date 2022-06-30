let Chance = require('chance')
let chance = new Chance


describe('cadastro automatizado', () => {
    it('cadastro login', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('ul#customer_menu_top>li>a').click()
    cy.get('button[title="Continue"]').click()
    cy.get('#AccountFrm_firstname').type(chance.first())
    cy.get('#AccountFrm_lastname').type(chance.last())
    cy.get('#AccountFrm_email').type(chance.email())
    cy.get('#AccountFrm_fax').type('0')
    cy.get('#AccountFrm_company').type('Ene')
    cy.get('#AccountFrm_address_1').type(chance.address())
    cy.get('#AccountFrm_country_id').select('Brazil')
    cy.get('#AccountFrm_zone_id').select('Amazonas')
    cy.get('#AccountFrm_city').type(chance.city())
    cy.get('#AccountFrm_postcode').type(chance.postal())
    cy.get('#AccountFrm_loginname').type(chance.domain())
    cy.get('#AccountFrm_password').type('ene123')
    cy.get('#AccountFrm_confirm').type('ene123')
    cy.get('#AccountFrm_newsletter1').check('1')
    cy.get('#AccountFrm_agree').check()
    cy.get('button[title="Continue"]').click()
    });
});