/// <reference types="Cypress" />

describe('First Test Suite', function(){

    // it('First Test case', function(){
    //     cy.visit('https://www.amazon.in/')
    //     cy.get('.nav-a:nth-child(5)').click()
    // })

    // it('Second Test Case', ()=>{
    //     cy.visit('https://preprod.vioc.com/');
    //     const iframe = cy.get("iframe[title='iframeSrc']").its('0.contentDocument.body').should('be.visible');
    //     iframe.find('input#q').type('California');
    // })

    it('Third Test Case', ()=>{
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains("Frames").click();
        cy.contains("iFrame").click();

        const frame = cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)
        frame.clear().type('welcome')
    })
})