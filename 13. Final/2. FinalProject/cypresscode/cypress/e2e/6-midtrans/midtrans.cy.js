/// <reference types="cypress" />

describe('Midtrans Testing Web Automation', function () {

    before(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://demo.midtrans.com/')
    });

    it('test amount field in Cart Checkout accept number only', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="text-right"]')
            .should('have.value', 20000)
            .should('not.have.value', 'absdvfghjkqw')
    });

    it('check test amount field in Cart Checkout accept symbol ', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="text-right"]')
            .should('have.value', 20000)
            .should('not.have.value', '-+')
    });

    it('Test payment with e-wallet Gopay', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            // Payment Gopay
            let stripe = cy.wrap($body)
            stripe.find('[alt="GoPay"]').click()

            // QR Image
            stripe = cy.wrap($body)
            stripe.find('[class="qr-image"]').should('be.visible')

            // Back to merchant
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').click()
        });
    });


    it('Test payment with e-wallet ShopeePay', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            // Payment Gopay
            let stripe = cy.wrap($body)
            stripe.find('[alt="ShopeePay"]').click()

            // QR Image
            stripe = cy.wrap($body)
            stripe.find('[class="qr-image"]').should('be.visible')

            // Back to merchant
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').click()
        });
    });

    it('Test payment with BCA', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)

            // BCA
            stripe.find('[alt="BCA"]').click()
            stripe = cy.wrap($body)
            stripe.find('[class="bank-list-layout"]').then(paymentList => {
                cy.get(paymentList).find('[class="bank-list"]').eq(0).then(bca => {
                    cy.get(bca).click()
                    cy.wait(2000)

                    // VA Number
                    stripe = cy.wrap($body)
                    stripe.find('[class="payment-number"]').should('be.visible')

                    // Click button "Back to merchant"
                    stripe = cy.wrap($body)
                    stripe.find('[class="btn full primary  btn-theme"]').click()
                })
            })
        })  
    });
    
    it('Test payment with MAndiri', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)

            // BCA
            stripe.find('[alt="Mandiri"]').click()
            stripe = cy.wrap($body)
            stripe.find('[class="bank-list-layout"]').then(paymentList => {
                cy.get(paymentList).find('[class="bank-list"]').eq(1).then(mandiri => {
                    cy.get(mandiri).click()
                    cy.wait(2000)

                    // VA Number
                    stripe = cy.wrap($body)
                    stripe.find('[class="payment-number"]').should('be.visible')

                    // Click button "Back to merchant"
                    stripe = cy.wrap($body)
                    stripe.find('[class="btn full primary  btn-theme"]').click()
                })
            })
        })  
    });

    it('Test payment with Alfa Group', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            // Payment Alfamart
            let stripe = cy.wrap($body)
            stripe.find('[alt="Alfamart"]').click()

            // Payment Code
            stripe = cy.wrap($body)
            stripe.find('[class="payment-number"]').should('be.visible')

            // Back to merchant
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').click()
        });
    });

    it('Test payment with Kredivo', () => {
        cy.get('.btn.buy').should('be.visible').click()
        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('.cart-checkout').click()
        cy.get('[id="snap-midtrans"]').then($element => {
            const $body = $element.contents().find('body')
            // Payment Kredivo
            let stripe = cy.wrap($body)
            stripe.find('[alt="Kredivo"]').click()

            // Pay Now
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary  btn-theme"]').should('be.visible')
        });
    });


    
});