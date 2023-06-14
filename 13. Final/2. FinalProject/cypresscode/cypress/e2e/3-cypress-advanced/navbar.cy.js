/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
        
        it('Should display online banking content', () => {
            cy.contains('Online Banking').click()
            cy.url().should('include', 'online-banking.html')
            cy.get('h1').should('be.visible')
        });
        
        it('Should display feedback content', () => {
            cy.visit('http://zero.webappsecurity.com/')
            cy.contains('Feedback').click()
            cy.url().should('include', 'feedback.html')
            cy.get('h3').should('be.visible')
        });
    
        it('Should display homepage content', () => {
            cy.visit('http://zero.webappsecurity.com/')
            cy.contains('Zero Bank').click()
            cy.url().should('include', 'index.html')
            cy.get('a').should('be.visible')
        });
});