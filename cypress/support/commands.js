//Commands Login
Cypress.Commands.add("login", dados => { 
  cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
  cy.get("#email").type(dados.email);
  cy.get("#passwd").type(dados.senha);
  cy.get("#SubmitLogin").click();
 });

 Cypress.Commands.add("alertaLoginValido", () => { 
  cy.get(".page-heading").should("exist", "MY ACCOUNT");
 });

 Cypress.Commands.add("alertaLoginInvalido", () => { 
  cy.get(".alert.alert-danger").should("exist");
 });

 //Commands Compra
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
