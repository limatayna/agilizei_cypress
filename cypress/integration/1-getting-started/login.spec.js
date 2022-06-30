describe('fluxo de login', () => {
    it('login com sucesso', () => {
    
    cy.intercept('POST', 'users/event/visit_url/')
    
    cy.visit('https://automationteststore.com/')  
    cy.get('ul#customer_menu_top>li>a').click()
    cy.url().should('contain', '/login')
    cy.get('#loginFrm_loginname').type('amandav')
    cy.get('#loginFrm_password').type('ene123')
    cy.get('button[title="Login"]').click()
    cy.url().should('contain', '/account')
    cy.get('span.maintext').should('have.text', ' My Account')
    });
    
    it('login com credenciais invalidas', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('ul#customer_menu_top>li>a').click()
    cy.url().should('contain', '/login')
    cy.get('button[title="Login"]').click()
    cy.get('div.alert.alert-error.alert-danger')
    

});
}); 
