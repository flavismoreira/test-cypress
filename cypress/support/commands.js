// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Commands Login
Cypress.Commands.add("login", dados => { 
  cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
  cy.get("#email").type(dados.Email);
  cy.get("#passwd").type(dados.Senha);
  cy.get("#SubmitLogin").click();
 });

 Cypress.Commands.add("alertaLoginValido", valido => { 
  cy.get(".page-heading").should("exist", "MY ACCOUNT");
 });

 Cypress.Commands.add("alertaLoginInvalido", invalido => { 
  cy.get(".alert.alert-danger").should("exist");
 });

 Cypress.Commands.add("compra", () => { 
  cy.get("#header_logo").click();
  cy.get('.button.ajax_add_to_cart_button.btn.btn-default').first().click()
  cy.visit('http://automationpractice.com/index.php?controller=order')
  cy.get('.button.btn.btn-default.standard-checkout.button-medium').click()
  cy.xpath('//*[@id="center_column"]/form/p/button/span/i').click();
  cy.get("#cgv").check();
  cy.xpath('//*[@id="form"]/p/button').click()
  cy.get('.bankwire').click()
  cy.xpath('//*[@id="cart_navigation"]/button').click()
 });

//Commands
