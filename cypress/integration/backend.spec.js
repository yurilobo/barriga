/// <reference types="cypress"/>

let token
describe('Should test at a functional level', () => {
    before(() => {
        //cy.login('yuri@1', '12345')
        cy.getToken('yuri@1', '12345')
            .then(tkn => {
                token = tkn
            })
    })
    beforeEach(() => {
        cy.resetRest()
    })
    it('Should create an account', () => {

        cy.request({
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            url: '/contas',
            body: {
                nome: "Conta via rest"
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
    })
    it('Should update an accont', () => {
        cy.request({
            method: 'GET',
            url:'/contas',
            headers: {Authorization:`JWT ${token}`},
            as:{
                nome:'Conta para alterar'
            }
        }).then(res=>{
            cy.request({
                url: `/contas/${res.body[0].id}`,
                 method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: "conta alterada via rest"
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 200)
        
    })
    it.only('Should not crate an account with same name', () => {
        
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
            //atributo para qundo eu esiver esperando erro 400/500
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })
    it('Should create a transaction', () => {

    })
    it('Should get balance', () => {

    })
    it('Should remove a transaction', () => {

    })
})

