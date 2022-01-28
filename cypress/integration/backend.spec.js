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

    })
    it('Should not crate an account with same name', () => {

    })
    it('Should create a transaction', () => {

    })
    it('Should get balance', () => {

    })
    it('Should remove a transaction', () => {

    })
})

