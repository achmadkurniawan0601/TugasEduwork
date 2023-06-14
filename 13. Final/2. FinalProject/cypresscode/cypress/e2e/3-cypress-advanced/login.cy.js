/// <reference types="cypress" />

describe('Login / Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.get('#user_login').type('invalidusername')
        cy.get('#user_password').type('invalidpassword')
        cy.get('input[name="submit"]').click()
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login to application with data valid, and logout account', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()

        cy.fixture("users").then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('input[name="submit"]').click()
        cy.get('h2').should('contain.text', 'Cash Accounts')

        cy.contains('username').click()
        cy.get('#logout_link').click()
        })
    })
})