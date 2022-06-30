/// <reference types="cypress" />

describe('desafio', () => {
    it('discourse', () => {
    cy.visit('https://www.discourse.org/')
    cy.get('a[href="https://try.discourse.org"]').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'try.discourse.org')
    cy.get('footer').scrollIntoView({ duration: 4000 })
    cy.get('.topic-list-item').filter('.closed').each(($el) => {
    cy.get($el).find('.title.raw-link').then(() => {
        const text = $el.text()
        cy.log(text)
    
    it('Imprimir a qunatidade de artigos por categoria', () => {
        const categoriesCount = {
        tech: 0,
        discourse:0
        }
        const categoriesName = ['discourse','tech']
           
    });
    it('Imprimir a quantidade de todas as categotias', () => {
    cy.visit('https://try.discourse.org')
    cy.get('span.category-name').each(($el) => {
            const text = $el.text()
            // cy.log(text)
            if(categoriesName.includes(text)){
            categoriesCount[text]++
            }

                // if(text === 'tech'){
                //     categories.tech++
                // }
                // if(text === 'discourse'){
                //     categories.discourse++
                // }
            })
           

        });
        
});
        
    });

 })
});