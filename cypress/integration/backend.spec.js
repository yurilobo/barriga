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
            .then(token=>{
                cy.request({
                    method: 'POST',
                    headers: {Authorization: `JWT ${token}`},
                    url: 'https://barrigarest.wcaquino.me/contas',
                    body:{
                        nome:"Conta via rest"
                    }
                }).as('response')
            })
            cy.get('@response').then(res=>{
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('id')
                expect(res.body).to.have.property('nome', 'Conta via rest')
            })

        
        
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

