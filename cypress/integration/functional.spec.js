/// <reference types="cypress"/>
import loc from '../support/locators'

describe('Should test at a functional level',()=>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('yuri@1')
        cy.get(loc.LOGIN.PASSWORD).type('12345')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.MESSAGE).should('contain','Bem vindo')
    })
    it('Should create an account',()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', "Conta inserida com sucesso!")
        
    })
    it('Should update an accont', ()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
})