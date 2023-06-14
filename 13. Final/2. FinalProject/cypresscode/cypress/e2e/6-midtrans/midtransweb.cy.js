/// <reference types="cypress"/>

describe('', () => {
    before(() =>{
        cy.clearLocalStorage()
        cy.clearCookies()
    });

    it('Edit Midtrans Millow dengan Number', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').click()
        cy.get('input[class="text-right"]').clear().type('abcd')
    });

    it('Payment using GoPay', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').click()
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            let gopay = cy.wrap($body)
            gopay.find('[alt="GoPay"]').click()
            gopay = cy.wrap($body)
            gopay.find('[class="qr-image"]').should('be.visible')
            gopay = cy.wrap($body)
            gopay.find('[class="btn full primary  btn-theme"]').click()
        });

    });

    it('Using payment with Ovo', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').click()
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            let ovo = cy.wrap($body)
            ovo.find('[alt="Ovo"]').click()
            ovo = cy.wrap($body)
            ovo.find('[class="qr-image"]').should('be.visible')
            ovo = cy.wrap($body)
            ovo.find('[class="btn full primary  btn-theme"]').click()
        });
    });

    it('Using payment with Indomaret', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').click()
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            let indomaret = cy.wrap($body)
            indomaret.find('[alt="Indomaret"]').click()
            indomaret = cy.wrap($body)
            indomaret.find('[class="cstore-barcode"]').should('be.visible')
            indomaret = cy.wrap($body)
            indomaret.find('[class="btn full primary  btn-theme"]').click()
        });
    });

    it('Test payment with Akulaku', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            let akuLaku = cy.wrap($body)
            akuLaku.find('[alt="Akulaku"]').click()
            akuLaku = cy.wrap($body)
            akuLaku.find('[class="btn full primary  btn-theme"]').should('be.visible')
        });
    });

    it('Test payment with BRImo', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            let brimo = cy.wrap($body)
            brimo.find('[alt="BRImo"]').click()
            brimo = cy.wrap($body)
            brimo.find('[class="btn full primary  btn-theme"]').should('be.visible')
        });
    });

    // it.only('check test amount field in Cart Checkout accept symbol ', () => {
    //     cy.visit('https://demo.midtrans.com/')
    //     cy.get('.btn.buy').should('be.visible').click()
    //     cy.get('[class="cart-content buying"]').should('be.visible')
    //     cy.get('[class="text-right"]')
    //         .should('have.value', 20000)
    //         .should('not.have.value', '-+')
    // });
})