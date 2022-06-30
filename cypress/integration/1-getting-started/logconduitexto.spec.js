/// <reference types="cypress" />


describe('Fluxo de cadastro de artigos', () => {

      // HOOk -> trechode código que deve ser executado antes ou depois 
      beforeEach(function () {
        cy.request({
            url: 'https://api.realworld.io/api/users/login',
            method: 'POST',
            body:{
                user:{
                    email:'amandav@mail.com',
                    password: 'ene123'
                },
            },
        })
        .then(response => {
            window.localStorage.setItem('jwtToken', response.body.user.token)
        })
        cy.visit('https://demo.realworld.io/#/')
    })
    it('conduit', () => {
    cy.intercept('POST', '**/api/articles').as('postConduit')
    cy.get('a[href="#/editor/"]').click()
    cy.get('input[placeholder="Article Title"]').type(chance.sentence())
    cy.get('input[ng-model="$ctrl.article.description"]').type(chance.word({ syllables: 3 }))
    cy.get('textarea[ng-model="$ctrl.article.body"]').type(chance.paragraph())
    cy.get('input[placeholder="Enter tags"]').type(chance.hashtag())
    cy.get('button[ng-click="$ctrl.submit()"]').click()
    cy.wait('@postConduit').then(({response}) => {
        expect(response.statusCode).to.eq(307)
    })

    });
    
});
