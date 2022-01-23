/// <reference types="cypress"/>
describe('Should test at a functional level',()=>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('input[data-test="email"]').type('yuri@1')
        cy.get('input[data-test="passwd"]').type('12345')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Bem vindo')
    })
    it('Should create an account',()=>{
        cy.get('i[class="fas fa-cog"]').click()
        cy.get('a[href="/contas"]').click()
        cy.get('input[placeholder="Conta..."]').type('Conta de teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', "Conta inserida com sucesso!")
        
    })
})