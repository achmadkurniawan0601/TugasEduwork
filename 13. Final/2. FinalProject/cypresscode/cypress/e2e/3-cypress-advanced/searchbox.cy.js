/// <reference types="cypress" />

describe('Searchbox Test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('zero {enter}')
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.pause()
    });
});