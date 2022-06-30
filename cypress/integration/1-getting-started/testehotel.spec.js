describe('Pesq e rota da aba hotel', () => {
    it('Selecionando a cidade e rota do campo cidade', () => {
        cy.intercept('GET', '**/hotels_locations?**').as('getLocat')

        cy.visit('https://www.phptravels.net/hotels');
        cy.get('.select2-selection')
            .click({force: true});
        cy.get('.select2-search.select2-search--dropdown')
            .find('input[role="searchbox"]')
            .type('Blu');

        cy.wait('@getLocat').then(({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(JSON.parse(response.body)[0].icon).contains('US')
            expect(JSON.parse(response.body)[3].id).contains('Scottsbluff,United States')
            expect(JSON.parse(response.body)[5].id).contains('Blumenau,Brazil')
            expect(JSON.parse(response.body)[6].text).contains('Blue Lagoon,Fiji')
            expect(JSON.parse(response.body)[11].icon).contains('CA')
            expect(JSON.parse(response.body)[11].id).contains('Blubber Bay,Canada')
            expect(JSON.parse(response.body)[11].text).contains('Blubber Bay,Canada')
        });

        cy.get('ul#select2-hotels_city-results')
            .find('[data-select2-id="16"]').click();
    });

    

    it.only('Selecionando data', () => {
        cy.visit('https://www.phptravels.net/hotels');
        cy.get('#checkin').click({force:true})
        cy.get('.datepicker.dropdown-menu').should('be.visible')
        cy.get('td.day').contains('19').click()
        cy.get('td.day').contains('28').click({force:true})
    });
})

