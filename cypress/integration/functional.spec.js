/// <reference types="cypress"/>
import loc from '../support/locators'
import '../support/commandsContas'

describe('Should test at a functional level',()=>{
    before(()=>{
        cy.login('yuri@1', '12345')
        cy.resetApp()
       
    })
    it('Should create an account',()=>{
        cy.acessarMenuConta()
        cy.inserirConta()
        cy.get(loc.MESSAGE).should('contain', "Conta inserida com sucesso!")
        
    })
    it('Should update an accont', ()=>{
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
})