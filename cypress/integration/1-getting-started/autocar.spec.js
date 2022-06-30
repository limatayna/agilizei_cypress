/// <reference types="cypress" />
describe('f', () => {
    it('fluxo de registro', () => {
        cy.fixture('autocar').then((json) => {
            cy.intercept('GET', '**/prod/user?page=0&take=10&name=', json)
          })
        cy.request({
            url: 'https://3jxrgwyep2.execute-api.us-east-1.amazonaws.com/prod/auth/login',
            method: 'POST',
            body: {
                    email: 'joaoteodoro@enesolucoes.com.br',
                    password: 'ene123!'
                },
            })
        .then(response => {
            window.localStorage.setItem('Authorization', response.body.token)
            window.localStorage.setItem('user', '{"profile":{"id":5,"name":"João Teste","phone":"34992316267","email":"joaoteodoro@enesolucoes.com.br","fantasyName":"Teste Produção João","cpfCnpj":"25137524000150","cep":"38405114","state":"MG","city":"Uberlândia","address":"Avenida Expedicionários","addressNumber":349,"additionalAddressData":"","addressDistrict":"Tibery","whatsapp":"34992316267","type":2,"urlCompanyLogo":"images/users/5/1dkbrp2uc-frontagePhoto.jpeg","urlFrontagePhoto":"images/users/5/1dkbrp2uc-frontagePhoto.jpeg","publicKey":null,"authorizationRequest":false,"authorizationCode":null,"admin":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW90ZW9kb3JvQGVuZXNvbHVjb2VzLmNvbS5iciIsImlhdCI6MTY0MTQ2OTU0OSwiZXhwIjoxNjQyNzY1NTQ5fQ.5nwFrg4bmPiA-bUQTTrOtjaQaPZVogll4H1hAuXeZpY"}}')
        })
        cy.visit('https://autoscar.com.br/gerenciamento-usuarios')
    })
});