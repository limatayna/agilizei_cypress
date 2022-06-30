describe('cadastro bemol', () => {
    it('aula Bereco/Neto', () => {
        cy.visit('https://www.bemol.com.br/cadastro')
        cy.get('customer-type-person')
        cy.get('#customer-type-person').type('Person')
        cy.get('#AddOrSetCustomer-Name').type('Andressa')
        cy.get('#AddOrSetCustomer-Surname').type('Freitas')
        cy.get('#AddOrSetCustomer-BirthDate').type('25/04/1996')
        cy.get('#AddOrSetCustomer-Gender').select('F')
        cy.get('#AddOrSetCustomer-Cpf').type('123456789-91 ')
        cy.get('#AddOrSetCustomer-Rg').type('1786044-0')
        cy.get('#AddOrSetAddress-0-PostalCode').type('69076-790')
        cy.get('#AddOrSetAddress-0-Number').type('1301')
        cy.get('#AddOrSetAddress-0-AddressNotes').type('LancheVitoria')
        cy.get('#AddOrSetAddress-0-Landmark').type('casa')
        cy.get('#AddOrSetCustomer-Contact-Phone').type('9232377339')
        cy.get('#AddOrSetCustomer-Contact-CellPhone').type('92981015382')
        cy.get('#AddOrSetCustomer-Email').type('bereco@gmail.com')
        cy.get('#AddOrSetCustomer-Password').type('ene123')
        cy.get('#AddOrSetCustomer-Password-check').type('ene123')
        cy.get('button.bt-submit').click()


        
    });
});