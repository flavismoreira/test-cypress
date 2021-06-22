describe("Compras", () => {
 
  it("deve logar e realizar uma compra com sucesso", () => {
    const login = {				
      email: "flavia_mf@icloud.com",
      senha: "141102"
    };

    cy.login(login);
    cy.compra();
    cy.xpath('//*[@id="center_column"]/div/p/strong').should("contain", "Your order on My Store is complete.");
  });
});