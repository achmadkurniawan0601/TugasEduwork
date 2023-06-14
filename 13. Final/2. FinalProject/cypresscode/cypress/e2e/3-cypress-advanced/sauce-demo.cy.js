/// <reference types="cypress" />

describe('Working with fitur in Saucedemo.com', () => {
    it('Should Display buy a item', () => {
        cy.visit('https://saucedemo.com/')
        cy.fixture("users").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
    
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)
            
            cy.get('#login-button').click()

            // // Buy item
            cy.get('#add-to-cart-sauce-labs-backpack').click()

            // add cart item
            cy.get('.shopping_cart_badge').click()

            // checkout item
            cy.get('#checkout').click()

            // Input data information
            cy.get('#first-name').clear()
            cy.get('#first-name').type('Achmad')

            cy.get('#last-name').clear()
            cy.get('#last-name').type('Kurniawan')

            cy.get('#postal-code').clear()
            cy.get('#postal-code').type('15123')

            cy.get('#continue').click()

            // Finish
            cy.get('#finish').click()

            // Back home
            cy.get('#back-to-products').click()
        });
    });

        it('Should display Logout', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.fixture("users").then(user => {
                const username = user.username
                const password = user.password
                cy.login(username, password)

                cy.contains('Swag Labs')
                cy.get('#react-burger-menu-btn').click()
                cy.get('#logout_sidebar_link').click()
            });
        });

});