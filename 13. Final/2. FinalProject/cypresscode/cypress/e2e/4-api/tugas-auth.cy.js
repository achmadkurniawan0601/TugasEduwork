/// <reference types="cypress" />
describe('Basic Auth', () => {
  //   it('Succesfully login by appending username and password in URL', () => {
  //       cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
  //       cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.')
  //   });
    
  //   it('Succesfully login using header', () => {
  //       cy.visit('https://the-internet.herokuapp.com/basic_auth', {
  //           headers: {
  //               authorization: 'Basic YWRtaW46YWRtaW4='
  //           },
  //           failOnStatusCode: false
  //       })
  //       cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.')
  //   });
  //   it('Succesfully Login Via API', () => {
  //      cy.loginViaAPI()
  //  })


 
  it('API Authentication', () => {
    Cypress.Commands.add('loginViaAPI', (
      email = Cypress.env('userEmail'),
      password = Cypress.env('userPassword')
    ) => {
      cy.request('GET', `${Cypress.env('apiUrl')}/users/login`, {
        username: email,
        password,
      }).then((response) => {
        cy.setCookie('sessionId', response.body.sessionId)
        cy.setCookie('userId', response.body.userId)
        cy.setCookie('userName', response.body.userName)
        cy.visit('/#!/main')
      })
   })

  });
})
