///<reference types="cypress" />
describe('API Automation Testing with Pokemon', () =>{
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        cy.get('@pokemon').its('body').should('have.property', 'forms')
        cy.get('@pokemon').its('body').should('have.property', 'base_experience', 101)
    });

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
    });

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7').as('limber')
        cy.get('@limber').then((response) => {
            expect(response.body.name).to.eq('limber')
        })
    });

    it.only('Negative validate response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    });

});