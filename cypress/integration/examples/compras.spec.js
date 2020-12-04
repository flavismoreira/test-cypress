describe("Compras", () => {
 
  it("deve logar e realizar uma compra com sucesso", () => {
    const login = {				
      Email: "flavia_mf@icloud.com",
      Senha: "141102"
    };
    cy.login(login);
    cy.compra();
    cy.xpath('//*[@id="center_column"]/div/p/strong').should("contain", "Your order on My Store is complete.");


    

    

   
  
  });



//  Cypress.Commands.add("compra", dados => { 
//   cy.get("#header_logo").click();
//   cy.get('a[href*="Add to cart"]').click()
//   });

//   Quando("adiciono um produto no carrinho de compras e finalizo a compra") do
//   find('a', text: 'Women').click
//   page.execute_script("window.scrollBy(0,1500)")
//   find('a', text: 'Faded Short Sleeve T-shirts').click
//   first('span', text: 'Add to cart').click
//   first('span', text: 'Proceed to checkout').click
//   find('span', text: 'Proceed to checkout').click
//   find('span', text: 'Proceed to checkout').click
//   find('.checker').click
//   find('span', text: 'Proceed to checkout').click
//   find('a', text: 'Pay by bank wire').click
//   page.execute_script("window.scrollBy(0,1500)")
//   find('.button.btn.btn-default.button-medium', text: 'I confirm my order').click
// end

});