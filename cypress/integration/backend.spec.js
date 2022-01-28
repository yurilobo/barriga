/// <reference types="cypress"/>


describe('Should test at a functional level',()=>{
    before(()=>{
        //cy.login('yuri@1', '12345')
            
    })
    beforeEach(()=>{
        //cy.resetApp()
    })
    it('Should create an account',()=>{
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body:{
                email: "yuri@1",
                redirecionar: false,
                senha: "12345"
            }
        }).its('body.token').should('not.be.empty')
        
    })
    it('Should update an accont', ()=>{
        
    })
    it('Should not crate an account with same name',()=>{
        
    })
    it('Should create a transaction',()=>{
        
    })
    it('Should get balance', ()=>{
       
    })
    it('Should remove a transaction', ()=>{
        
    })
})

